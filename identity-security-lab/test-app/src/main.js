import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "identity-lab",
  clientId: "identity-test-app"
});

const app = document.getElementById("app");

app.innerHTML = `
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background: #f4f6f8;
    }

    .card {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
      border: 1px solid #ddd;
    }

    button {
      padding: 10px 14px;
      margin-right: 10px;
      cursor: pointer;
    }

    .allowed {
      color: green;
      font-weight: bold;
    }

    .denied {
      color: red;
      font-weight: bold;
    }

    pre {
      background: #111;
      color: #0f0;
      padding: 15px;
      overflow-x: auto;
    }
  </style>

  <h1>Project 6: Identity Security Lab</h1>
  <p>This test app uses Keycloak SSO, MFA, and RBAC role checks.</p>

  <div class="card">
    <h2>Login Controls</h2>
    <button id="loginBtn">Login with Keycloak</button>
    <button id="logoutBtn">Logout</button>
  </div>

  <div class="card">
    <h2>Session Status</h2>
    <p id="status">Checking login status...</p>
    <p><strong>Username:</strong> <span id="username">Not logged in</span></p>
  </div>

  <div class="card">
    <h2>RBAC Access Test</h2>
    <p>User Area: <span id="userAccess" class="denied">Denied</span></p>
    <p>Manager Area: <span id="managerAccess" class="denied">Denied</span></p>
    <p>Admin Area: <span id="adminAccess" class="denied">Denied</span></p>
  </div>

  <div class="card">
    <h2>Token Role Evidence</h2>
    <pre id="tokenRoles">No token loaded.</pre>
  </div>
`;

document.getElementById("loginBtn").addEventListener("click", () => {
  keycloak.login();
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  keycloak.logout({
    redirectUri: "http://localhost:3000"
  });
});

function hasRole(roleName) {
  if (!keycloak.tokenParsed || !keycloak.tokenParsed.realm_access) {
    return false;
  }

  return keycloak.tokenParsed.realm_access.roles.includes(roleName);
}

function allow(id) {
  const element = document.getElementById(id);
  element.textContent = "Allowed";
  element.className = "allowed";
}

function updateAccess() {
  document.getElementById("status").textContent = "Logged in through Keycloak SSO";
  document.getElementById("username").textContent = keycloak.tokenParsed.preferred_username;

  const roles = keycloak.tokenParsed.realm_access?.roles || [];

  document.getElementById("tokenRoles").textContent = JSON.stringify(roles, null, 2);

  if (hasRole("app-user")) {
    allow("userAccess");
  }

  if (hasRole("app-manager")) {
    allow("managerAccess");
  }

  if (hasRole("app-admin")) {
    allow("adminAccess");
  }
}

try {
  const authenticated = await keycloak.init({
    onLoad: "check-sso",
    pkceMethod: "S256"
  });

  if (authenticated) {
    updateAccess();
  } else {
    document.getElementById("status").textContent = "Not logged in";
  }
} catch (error) {
  document.getElementById("status").textContent = "Keycloak connection failed";
  document.getElementById("tokenRoles").textContent = JSON.stringify(error, null, 2);
}
