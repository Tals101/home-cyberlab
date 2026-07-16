import os
from functools import wraps

import jwt
from authlib.integrations.flask_client import OAuth
from flask import Flask, redirect, render_template_string, session, url_for
from flask_session import Session
from jwt import PyJWKClient

app = Flask(__name__)

app.secret_key = os.environ["APP_SECRET"]
app.config["SESSION_TYPE"] = "filesystem"
app.config["SESSION_PERMANENT"] = False

Session(app)

KEYCLOAK_URL = "http://192.168.56.121:8080"
REALM = "CyberLab"
CLIENT_ID = "identity-demo-app"
CLIENT_SECRET = os.environ.get("KEYCLOAK_CLIENT_SECRET")

ISSUER = f"{KEYCLOAK_URL}/realms/{REALM}"
METADATA_URL = f"{ISSUER}/.well-known/openid-configuration"
JWKS_URL = f"{ISSUER}/protocol/openid-connect/certs"

oauth = OAuth(app)

oauth.register(
    name="keycloak",
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET,
    server_metadata_url=METADATA_URL,
    client_kwargs={
        "scope": "openid profile email"
    },
)

jwks_client = PyJWKClient(JWKS_URL)


def decode_access_token(access_token):
    signing_key = jwks_client.get_signing_key_from_jwt(access_token)

    claims = jwt.decode(
        access_token,
        signing_key.key,
        algorithms=["RS256"],
        issuer=ISSUER,
        options={
            "verify_aud": False,
            "require": ["exp", "iss"],
        },
    )

    if claims.get("azp") != CLIENT_ID:
        raise ValueError("Token was not issued to identity-demo-app")

    return claims


def get_roles():
    access_token = session.get("access_token")

    if not access_token:
        return []

    claims = decode_access_token(access_token)

    return claims.get("realm_access", {}).get("roles", [])


def login_required(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        if "user" not in session:
            return redirect(url_for("login"))

        return function(*args, **kwargs)

    return wrapper


def role_required(required_role):
    def decorator(function):
        @wraps(function)
        def wrapper(*args, **kwargs):
            if "user" not in session:
                return redirect(url_for("login"))

            try:
                roles = get_roles()
            except Exception:
                session.clear()
                return redirect(url_for("login"))

            if required_role not in roles:
                return (
                    render_template_string(
                        PAGE,
                        title="Access Denied",
                        body=f"""
                        <h2>403 - Access Denied</h2>
                        <p>Your account does not have the
                        <strong>{required_role}</strong> role.</p>
                        <p><a href="/">Return home</a></p>
                        """,
                    ),
                    403,
                )

            return function(*args, **kwargs)

        return wrapper

    return decorator


PAGE = """
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 850px;
            margin: 50px auto;
            padding: 30px;
            background: #f4f6f8;
        }

        .box {
            background: white;
            padding: 30px;
            border-radius: 8px;
        }

        a {
            margin-right: 15px;
        }

        code {
            background: #eeeeee;
            padding: 3px 6px;
        }
    </style>
</head>

<body>
<div class="box">
    <h1>Identity Attack and Defense Lab</h1>

    <p>
        <a href="/">Public</a>
        <a href="/protected">Authenticated</a>
        <a href="/analyst">Security Analyst</a>
        <a href="/admin">Administrator</a>
    </p>

    <hr>

    {{ body|safe }}

    <hr>

    {% if session.get("user") %}
        <p>
            Signed in as:
            <strong>{{ session["user"].get("preferred_username") }}</strong>
        </p>

        <p>
            <a href="/logout">Sign out</a>
        </p>
    {% else %}
        <p>
            <a href="/login">Sign in with Keycloak</a>
        </p>
    {% endif %}
</div>
</body>
</html>
"""


@app.route("/")
def home():
    return render_template_string(
        PAGE,
        title="Public Page",
        body="""
        <h2>Public Page</h2>
        <p>This page is available without authentication.</p>
        """,
    )


@app.route("/login")
def login():
    redirect_uri = url_for("callback", _external=True)

    return oauth.keycloak.authorize_redirect(redirect_uri)


@app.route("/callback")
def callback():
    token = oauth.keycloak.authorize_access_token()

    userinfo = token.get("userinfo")

    if not userinfo:
        userinfo = oauth.keycloak.userinfo(token=token)

    session["user"] = dict(userinfo)
    session["access_token"] = token["access_token"]
    session["id_token"] = token.get("id_token")

    return redirect(url_for("protected"))


@app.route("/protected")
@login_required
def protected():
    return render_template_string(
        PAGE,
        title="Authenticated Page",
        body="""
        <h2>Authenticated User Page</h2>
        <p>You successfully authenticated with Keycloak.</p>
        """,
    )


@app.route("/analyst")
@role_required("security-analyst")
def analyst():
    return render_template_string(
        PAGE,
        title="Security Analyst Page",
        body="""
        <h2>Security Analyst Resource</h2>
        <p>Access granted because your account has the
        <code>security-analyst</code> role.</p>
        """,
    )


@app.route("/admin")
@role_required("administrator")
def admin():
    return render_template_string(
        PAGE,
        title="Administrator Page",
        body="""
        <h2>Administrative Resource</h2>
        <p>Access granted because your account has the
        <code>administrator</code> role.</p>
        """,
    )


@app.route("/logout")
def logout():
    id_token = session.get("id_token")

    session.clear()

    logout_url = (
        f"{ISSUER}/protocol/openid-connect/logout"
        f"?post_logout_redirect_uri={url_for('home', _external=True)}"
        f"&client_id={CLIENT_ID}"
    )

    if id_token:
        logout_url += f"&id_token_hint={id_token}"

    return redirect(logout_url)


if __name__ == "__main__":
    if not CLIENT_SECRET:
        raise RuntimeError(
            "KEYCLOAK_CLIENT_SECRET environment variable is not set."
        )

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=False,
    )
