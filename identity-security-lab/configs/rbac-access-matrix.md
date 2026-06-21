# RBAC Access Matrix

| User | Assigned Role | User Area | Manager Area | Admin Area |
|---|---|---|---|---|
| alice | app-user | Allowed | Denied | Denied |
| bob | app-manager | Denied | Allowed | Denied |
| carol | app-admin | Denied | Denied | Allowed |

## Purpose
This matrix defines the expected access model for the Identity Security Lab.

## Security Goal
Each user should only receive the access required for their role.
