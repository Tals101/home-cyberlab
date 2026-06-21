# Remediation: Bob Excessive Permissions Removed

## Finding
Bob was assigned app-admin in addition to app-manager.

## Risk
This allowed a manager-level user to access admin-level application functionality.

## Remediation Performed
The app-admin role was removed from Bob's account.

## Validation
After remediation, Bob retained manager access but no longer had admin access.

## Final Access State
- app-manager: retained
- app-admin: removed

## Security Improvement
The user's privileges now match the intended least-privilege access model.
