# Account Takeover Simulation: MFA Blocked Login

## Scenario
A simulated attacker has obtained Alice's username and password.

## Target Account
- Username: alice
- Known Password: Alice123!

## Attack Attempt
The attacker attempted to log in through the SSO test application using Alice's password.

## Result
The login did not complete because Keycloak required an OTP/MFA code.

## Security Finding
MFA successfully blocked a password-only account takeover attempt.

## Impact
Even if Alice's password is exposed, the attacker still cannot access the application without the second factor.

## Control Validated
- Multi-Factor Authentication
- SSO identity enforcement
- Account takeover resistance
