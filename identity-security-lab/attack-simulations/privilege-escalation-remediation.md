# Remediation: app-user No Longer Inherits app-admin

## Finding
The app-user role was configured to inherit app-admin.

## Risk
Any standard user assigned app-user could gain admin-level application access.

## Remediation Performed
The app-admin associated role was removed from app-user.

## Validation
Alice retained normal user access but no longer had admin access.

## Final Access State
- Alice: app-user only
- Admin access: denied

## Security Improvement
The role hierarchy now follows least privilege and avoids inherited privilege escalation.
