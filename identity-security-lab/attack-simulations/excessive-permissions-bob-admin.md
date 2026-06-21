# Excessive Permissions Simulation: Bob Granted Admin Access

## Scenario
Bob is intended to be a manager-level user, but he was accidentally granted the app-admin role.

## Target Account
- Username: bob
- Intended Role: app-manager
- Excessive Role Added: app-admin

## Test Result
After the extra role was assigned, Bob was able to access admin-level application functionality.

## Security Finding
Bob had excessive permissions beyond his intended job function.

## Impact
A manager account could perform admin-level actions if roles are assigned too broadly or not reviewed regularly.

## Control Gap Demonstrated
- Weak access review
- Over-permissioned user
- Poor separation of duties

## Recommended Fix
Remove app-admin from Bob and perform periodic role reviews.
