# Project 6: Identity Security Lab

## Executive Summary

This project built a hands-on identity security lab using Keycloak, PostgreSQL, and a custom SSO test application. The lab demonstrates Single Sign-On, Multi-Factor Authentication, Role-Based Access Control, excessive permission testing, privilege escalation testing, and account takeover prevention.

The goal was to show how identity systems can be configured, tested, attacked in a controlled lab environment, remediated, and documented.

---

## Lab Architecture

User Browser
    |
    | 1. Opens SSO test app
    v
Identity Test App
    |
    | 2. Redirects login to Keycloak
    v
Keycloak Identity Provider
    |
    | 3. Validates username, password, MFA, and roles
    v
Access Token Issued
    |
    | 4. App reads token roles
    v
RBAC Access Decision

---

## Technology Stack

| Component | Purpose |
|---|---|
| Keycloak | Identity provider for SSO, MFA, users, roles, and authentication |
| PostgreSQL | Persistent backend database for Keycloak |
| Docker Compose | Local container orchestration |
| Vite | Local development server for the test application |
| keycloak-js | JavaScript adapter used by the test app |
| Custom HTML/JavaScript App | Displays login status, roles, and RBAC access results |

---

## Identity Model

### Realm

| Realm | Purpose |
|---|---|
| identity-lab | Isolated identity environment for this project |

### Users

| User | Intended Function |
|---|---|
| alice | Standard user |
| bob | Manager user |
| carol | Admin user |

### Roles

| Role | Intended Access |
|---|---|
| app-user | Basic application access |
| app-manager | Manager-level application access |
| app-admin | Admin-level application access |

---

## SSO Configuration

A Keycloak OpenID Connect client named identity-test-app was created for the test application.

| Setting | Value |
|---|---|
| Client Type | OpenID Connect |
| Client ID | identity-test-app |
| Client Authentication | Off |
| Standard Flow | Enabled |
| Direct Access Grants | Enabled |
| Redirect URIs | http://localhost:3000/* and http://127.0.0.1:3000/* |
| Web Origins | http://localhost:3000 and http://127.0.0.1:3000 |

---

## RBAC Baseline Testing

### Alice Baseline Test

| Area | Result |
|---|---|
| User Area | Allowed |
| Manager Area | Denied |
| Admin Area | Denied |

Alice was correctly limited to standard user access.

### Bob Baseline Test

| Area | Result |
|---|---|
| User Area | Denied |
| Manager Area | Allowed |
| Admin Area | Denied |

Bob was correctly limited to manager-level access.

### Carol Baseline Test

| Area | Result |
|---|---|
| User Area | Denied |
| Manager Area | Denied |
| Admin Area | Allowed |

Carol was correctly limited to admin-level access.

---

## MFA Testing

MFA was enabled for Alice by requiring the Configure OTP user action.

Alice was required to enroll an OTP authenticator during login. After enrollment, Alice could only complete login by providing both her password and the MFA code.

Security value: MFA protected the account even when the password was known.

---

## Attack Simulation 1: Account Takeover Blocked by MFA

### Scenario

A simulated attacker had Alice's username and password.

### Attack Attempt

The attacker attempted to log in as Alice using only the password.

### Result

Keycloak required Alice's OTP code before completing the login.

### Finding

The account takeover attempt was blocked by MFA.

### Control Validated

- Multi-Factor Authentication
- SSO enforcement
- Password compromise resistance

---

## Attack Simulation 2: Excessive Permissions

### Scenario

Bob was intended to be a manager, but he was accidentally assigned the app-admin role.

### Result

Bob gained admin-level access in the test application.

### Finding

Bob had excessive permissions beyond his intended job function.

### Risk

A manager account could perform admin actions if roles are assigned too broadly.

### Remediation

The app-admin role was removed from Bob.

### Validation

After remediation, Bob retained manager access but no longer had admin access.

---

## Attack Simulation 3: Privilege Escalation Through Role Inheritance

### Scenario

The low-privilege app-user role was misconfigured to include the high-privilege app-admin role.

### Result

Alice gained admin access even though she was only assigned app-user.

### Finding

A low-privilege role inherited high-privilege access.

### Risk

Every standard user assigned app-user could become an application administrator.

### Remediation

The app-admin associated role was removed from app-user.

### Validation

After remediation, Alice retained user access but lost admin access.

---

## Key Security Lessons

1. Identity systems need strict role design.
2. MFA reduces account takeover risk.
3. Redirect URI validation protects SSO flows.
4. Excessive permissions can create hidden privilege risk.
5. Composite roles can accidentally create privilege escalation.
6. Every finding should be remediated and retested.

---

## Evidence Collected

Evidence files were created for:

- Realm creation
- RBAC role creation
- User creation
- Role assignments
- SSO client creation
- SSO app creation
- Redirect URI fix
- RBAC tests
- MFA enrollment
- Account takeover simulation
- Excessive permissions simulation
- Excessive permissions remediation
- Privilege escalation simulation
- Privilege escalation remediation

---

## Final Outcome

This lab successfully demonstrates a practical identity security workflow:

Build identity provider
    |
Configure users and roles
    |
Enable SSO
    |
Validate RBAC
    |
Enable MFA
    |
Simulate attacks
    |
Document findings
    |
Remediate issues
    |
Validate fixes

This project adds a strong identity security component to the portfolio and demonstrates hands-on understanding of modern IAM risks and controls.
