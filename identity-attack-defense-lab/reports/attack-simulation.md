# Identity Attack Simulation

## Objective

The purpose of this simulation was to test whether the identity environment could detect and respond to repeated failed authentication attempts against a Keycloak user account.

## Target Account

- Username: `alice`
- Keycloak realm: `CyberLab`
- Application client: `identity-demo-app`
- Authentication provider: Keycloak
- Monitoring platform: Wazuh

## Attack Scenario

A user attempted to authenticate to the Flask demonstration application with the correct username and an incorrect password multiple times.

The simulation generated three failed authentication attempts within the configured detection window.

## Attack Sequence

1. The attacker opened the Flask demonstration application.
2. The application redirected the attacker to Keycloak.
3. The attacker entered the username `alice`.
4. An incorrect password was entered repeatedly.
5. Keycloak recorded each authentication failure.
6. The events were written to `keycloak-events.log`.
7. The Wazuh agent forwarded the events to the Wazuh manager.
8. Wazuh rule `100100` detected each individual failed login.
9. Wazuh rule `100102` detected three failures within two minutes.
10. Keycloak temporarily disabled the account.
11. Wazuh rule `100103` detected the temporary account lockout.

## Detection Results

| Event | Wazuh Rule | Severity | Result |
|---|---:|---:|---|
| Individual failed login | 100100 | Level 8 | Detected |
| Three failures within two minutes | 100102 | Level 12 | Detected |
| Temporary account lockout | 100103 | Level 10 | Detected |
| Successful login after recovery | 100101 | Level 3 | Detected |

## Defensive Controls Validated

- Centralized authentication through Keycloak
- Failed-login event logging
- Brute-force protection
- Temporary account lockout
- Centralized log collection
- Custom Wazuh correlation rules
- High-severity alert generation
- Account recovery after administrative validation

## Response Actions

After confirming the lockout alert:

1. The authentication events were reviewed in the Wazuh Dashboard.
2. The source activity and affected username were identified.
3. The account-lockout status was confirmed in Keycloak.
4. The Alice account was administratively unlocked.
5. A successful login was performed to confirm account recovery.
6. Wazuh rule `100101` confirmed the successful authentication.

## Outcome

The attack simulation successfully demonstrated that repeated failed authentication attempts were detected, correlated, and contained.

Keycloak prevented additional access by temporarily disabling the account, while Wazuh provided centralized evidence of the failed logins, brute-force pattern, account lockout, and subsequent successful recovery.

## Security Significance

This simulation demonstrates defense in depth. Keycloak provides preventative identity controls, while Wazuh provides detective controls and investigation visibility.

The combined architecture reduces the likelihood that repeated password attacks will remain unnoticed or continue indefinitely.
