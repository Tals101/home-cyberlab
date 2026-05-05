from flask import Flask, request, jsonify
import os

app = Flask(__name__)

USERS = {
    "admin": "admin123",
    "user": "password"
}

@app.route("/")
def home():
    return jsonify({
        "app": "Phase 2 Vulnerable Flask App",
        "status": "running",
        "hint": "Try /login?username=admin&password=admin123"
    })

@app.route("/login")
def login():
    username = request.args.get("username", "")
    password = request.args.get("password", "")

    if username in USERS and USERS[username] == password:
        return jsonify({
            "status": "success",
            "message": "Login successful",
            "user": username,
            "role": "admin" if username == "admin" else "user"
        })

    return jsonify({
        "status": "failed",
        "message": "Invalid credentials"
    }), 401

@app.route("/debug")
def debug():
    return jsonify({
        "warning": "Debug endpoint exposed",
        "environment": dict(os.environ)
    })

@app.route("/admin")
def admin():
    token = request.headers.get("Authorization")

    # Intentionally weak authentication logic
    if token and "admin" in token:
        return jsonify({
            "status": "success",
            "message": "Admin access granted",
            "sensitive_data": [
                "internal configs",
                "user data",
                "system secrets"
            ]
        })

    return jsonify({
        "status": "denied",
        "message": "Unauthorized"
    }), 403

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)