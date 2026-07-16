# Identity Security Incident Investigation

## Incident Summary

Repeated failed authentication attempts were observed against the Keycloak account `alice` in the `CyberLab` realm.

The activity triggered individual failed-login alerts, a correlated brute-force alert, and a temporary account-lockout alert in Wazuh.

## Incident Classification

- Incident type: Identity-based authentication attack
- Attack method: Password guessing
- Affected account: `alice`
- Affected application: `identity-demo-app`
- Identity provider: Keycloak
- Detection platform: Wazuh
- Severity: High
- Status: Contained and resolved

## Detection Sources

The investigation used the following evidence:

- Keycloak authentication events
- `keycloak-events.log`
- Wazuh agent telemetry
- Wazuh custom detection rules
- Wazuh Dashboard alerts
- Keycloak brute-force protection status
- Successful authentication event after account recovery

## Detection Timeline

| Sequence | Event | Detection |
|---:|---|---|
| 1 | Incorrect credentials submitted for `alice` | Keycloak login failure |
| 2 | Failed authentication event forwarded to Wazuh | Rule 100100, level 8 |
| 3 | Additional incorrect passwords submitted | Multiple rule 100100 alerts |
| 4 | Three failures occurred within two minutes | Rule 100102, level 12 |
| 5 | Keycloak temporarily disabled the account | Rule 100103, level 10 |
| 6 | Account status reviewed by the administrator | Lockout confirmed |
| 7 | Account was administratively unlocked | Containment removed |
| 8 | Successful login completed | Rule 100101, level 3 |

## Indicators Observed

The following indicators were associated with the incident:

- Username: `alice`
- Realm: `CyberLab`
- Client ID: `identity-demo-app`
- Authentication error: `invalid_user_credentials`
- Lockout error: `user_temporarily_disabled`
- Repeated failures within the configured detection period

## Investigation Findings

### Authentication Failures

Wazuh rule `100100` detected each individual failed authentication attempt.

The events identified the affected username and application client, confirming that the failures were associated with the Flask demonstration application.

### Correlated Brute-Force Activity

Wazuh rule `100102` detected three failed authentication attempts within two minutes.

The correlated alert raised the event to level 12 because repeated failures represent a higher risk than a single incorrect password.

### Account Lockout

Keycloak brute-force protection temporarily disabled the `alice` account after the third failure.

Wazuh rule `100103` detected the resulting `user_temporarily_disabled` event.

### Access Prevention

A correct password could not be used while the temporary lockout was active.

This confirmed that Keycloak successfully prevented further access during the containment period.

### Account Recovery

After the alert was reviewed, the account was administratively unlocked.

A successful login was then completed, and Wazuh rule `100101` confirmed that authentication had been restored.

## Containment Actions

The following containment actions occurred:

1. Keycloak automatically locked the affected account.
2. Authentication alerts were reviewed in the Wazuh Dashboard.
3. The affected username and application client were identified.
4. Additional login attempts were prevented during the lockout.
5. The account was unlocked only after the event was validated.

## Eradication and Recovery

No malware, credential theft, or system compromise was identified during the simulation.

Recovery actions included:

- Reviewing the failed-login events
- Confirming the brute-force detection
- Confirming the temporary account lockout
- Administratively clearing the lockout
- Testing a successful login
- Confirming the recovery event in Wazuh

## Root Cause

The incident was caused by repeated incorrect password attempts against a known user account.

The activity was intentionally generated as part of the identity attack simulation.

## Impact Assessment

The account was temporarily unavailable, but unauthorized access was not achieved.

No administrative access, security-analyst access, data exposure, service interruption, or privilege escalation occurred.

## MITRE ATT&CK Mapping

- T1110 — Brute Force
- T1110.001 — Password Guessing
- T1078 — Valid Accounts monitoring

## Recommendations

1. Send high-severity identity alerts to an external notification channel.
2. Record source IP and device context with authentication events.
3. Review repeated failures across multiple accounts for password spraying.
4. Require MFA for all accounts with sensitive access.
5. Document account-unlock approval procedures.
6. Review privileged role assignments regularly.
7. Investigate unexpected successful logins following repeated failures.
8. Create dashboard views for authentication trends and account lockouts.

## Final Disposition

The activity was detected, correlated, contained, investigated, and resolved successfully.

The lab confirmed that Keycloak and Wazuh work together to provide preventative controls, centralized monitoring, high-severity alerting, and investigation evidence for identity-based attacks.
