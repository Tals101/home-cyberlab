# RBAC Permissions Matrix

## Purpose

This matrix documents the roles configured in the Keycloak `CyberLab` realm and the access enforced by the Flask demonstration application.

| Identity | Assigned Role | Authenticated Page | Help Desk Functions | Security Analyst Page | Administrator Page | Reporting Functions |
|---|---|---:|---:|---:|---:|---:|
| alice | user | Allowed | Denied | Denied | Denied | Denied |
| bob | user | Allowed | Denied | Denied | Denied | Denied |
| helpdesk1 | helpdesk | Allowed | Allowed | Denied | Denied | Denied |
| analyst1 | security-analyst | Allowed | Denied | Allowed | Denied | Denied |
| admin1 | administrator | Allowed | Denied | Denied | Allowed | Denied |
| svc-reporting | reporting-service | Service access only | Denied | Denied | Denied | Allowed |

## Role Definitions

### user

Provides basic authenticated access to the demonstration application. Users with this role cannot access privileged security or administrative pages.

### helpdesk

Represents personnel responsible for basic identity-support activities. This role is separated from security-analysis and administrative privileges.

### security-analyst

Allows access to the protected Security Analyst page. It does not provide access to administrator-only resources.

### administrator

Allows access to the protected Administrator page. Administrative access is separated from the Security Analyst role to demonstrate least privilege.

### reporting-service

Represents a non-human service identity used for reporting-related functions. Interactive administrative access is not assigned to this account.

## Security Controls

- Role-based authorization is enforced by the Flask application.
- Privileged accounts use multifactor authentication.
- Standard users cannot access analyst or administrator pages.
- Security analysts cannot access administrator-only pages.
- Service identities are separated from interactive human accounts.
- Role separation reduces the risk of excessive permissions.
- Access tests confirmed that unauthorized requests returned HTTP 403 responses.

## Validation Summary

Testing confirmed that:

- `alice` could authenticate but could not access privileged pages.
- `analyst1` could access the Security Analyst page but not the Administrator page.
- `admin1` could access the Administrator page but not the Security Analyst page.
- Role assignments were received from Keycloak through the OpenID Connect authentication flow.
