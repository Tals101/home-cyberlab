# Privilege Escalation Simulation: app-user Inherits app-admin

## Scenario
The low-privilege app-user role was misconfigured to include the high-privilege app-admin role.

## Target Account
- Username: alice
- Intended Role: app-user
- Inherited Role: app-admin

## Attack Path
Alice did not receive app-admin directly. Instead, app-admin was incorrectly associated with the app-user role.

## Test Result
After the bad role association, Alice was able to access admin-level functionality.

## Security Finding
A low-privilege role inherited a high-privilege role, causing privilege escalation.

## Impact
Any user assigned app-user could become an application administrator.

## Control Gap Demonstrated
- Unsafe role hierarchy
- Poor role design
- Lack of access review
- Privilege escalation through inherited permissions

## Recommended Fix
Remove app-admin from the app-user associated roles and validate that Alice loses admin access.
