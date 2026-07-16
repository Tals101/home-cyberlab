# MITRE ATT&CK Mapping

## Overview

This document maps the identity attack simulation and defensive controls to relevant MITRE ATT&CK Enterprise techniques.

## Technique Mapping

| ATT&CK ID | Technique | Lab Activity | Detection or Mitigation |
|---|---|---|---|
| T1110 | Brute Force | Repeated authentication attempts were performed against the Alice account. | Keycloak limited failed attempts, while Wazuh correlated authentication failures. |
| T1110.001 | Password Guessing | Multiple incorrect passwords were submitted against one known username. | Wazuh rule 100100 detected individual failures, and rule 100102 detected three failures within two minutes. |
| T1078 | Valid Accounts | Legitimate accounts were used to test authenticated and role-protected application access. | Keycloak authentication, MFA, RBAC, successful-login monitoring, and Wazuh rule 100101 provided control and visibility. |

## Credential Access

### T1110 — Brute Force

The attack simulation generated repeated authentication failures against the `alice` account.

Keycloak recorded the failed attempts and temporarily locked the account after the configured failure threshold was reached.

### T1110.001 — Password Guessing

The simulation most closely represents password guessing because several incorrect passwords were attempted against a single known account.

The following controls detected or limited the activity:

- Keycloak brute-force protection
- Three-attempt failure threshold
- Temporary account lockout
- Failed-authentication logging
- Wazuh rule 100100
- Wazuh correlation rule 100102
- Wazuh lockout rule 100103

## Valid Account Activity

### T1078 — Valid Accounts

The lab also tested the use of legitimate accounts with different authorization levels.

Accounts included:

- Standard users
- Help-desk personnel
- Security analysts
- Administrators
- A reporting service identity

The following controls reduced the risk of valid-account abuse:

- OpenID Connect authentication
- Multifactor authentication for privileged accounts
- Role-based access control
- Separation of administrative and analyst permissions
- HTTP 403 responses for unauthorized access
- Successful-login monitoring through Wazuh rule 100101

## Detection Evidence

| Detection | Rule ID | ATT&CK Relationship |
|---|---:|---|
| Individual authentication failure | 100100 | T1110.001 |
| Successful authentication | 100101 | T1078 monitoring |
| Three failures within two minutes | 100102 | T1110 and T1110.001 |
| Temporary account lockout | 100103 | Response to T1110.001 |

## Defensive Summary

The lab combined preventative and detective controls:

- Keycloak prevented continued password guessing through temporary lockout.
- MFA strengthened privileged-account authentication.
- RBAC limited what authenticated accounts could access.
- Wazuh collected and correlated identity events.
- Custom alerts provided evidence for investigation and response.

## Scope Note

The simulation did not perform password spraying, credential stuffing, password cracking, credential theft, or account compromise. Those techniques are therefore not claimed as tested.
