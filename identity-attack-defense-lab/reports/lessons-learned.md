# Lessons Learned

## Overview

This lab demonstrated how identity security depends on multiple coordinated controls rather than a single authentication mechanism.

Keycloak provided centralized identity management and preventative controls, while Wazuh provided monitoring, correlation, alerting, and investigation evidence.

## Technical Lessons

### Centralized Authentication Improves Control

Using Keycloak as the identity provider allowed authentication policies, users, roles, groups, MFA, and brute-force settings to be managed from one platform.

This is more secure and manageable than allowing each application to maintain separate user credentials.

### Authentication and Authorization Are Different

A successful login does not automatically mean that a user should have access to every application function.

The Flask application separately evaluated Keycloak roles before allowing access to protected pages.

Unauthorized users received HTTP 403 responses even though they were successfully authenticated.

### Least Privilege Requires Testing

Creating roles is not enough. Each role must be tested to confirm that it allows required access while denying unrelated privileges.

Testing confirmed that:

- Standard users could not access privileged pages.
- Security analysts could not access administrator pages.
- Administrators did not automatically receive analyst access.
- Service identities were separated from human accounts.

### MFA Should Protect Privileged Accounts

Multifactor authentication was especially important for help-desk, analyst, and administrator accounts.

This reduced reliance on passwords and demonstrated an additional layer of protection for sensitive identities.

### Failed Logins Need Correlation

A single failed login may be caused by a typing error. Multiple failures within a short period can indicate password guessing.

Wazuh correlation rule `100102` converted multiple lower-level events into a level 12 brute-force alert.

### Preventative and Detective Controls Work Together

Keycloak temporarily locked the account, preventing continued attempts.

Wazuh recorded and alerted on the activity, providing evidence for investigation.

Neither control alone provided the same level of protection and visibility.

### Persistent Logging Is Essential

Container logs can be lost or become difficult to review without persistent collection.

The `keycloak-log-stream.service` continuously wrote Keycloak events to a monitored log file so the Wazuh agent could forward them.

### Service Recovery Must Be Tested

A security system is not reliable if monitoring stops after a reboot.

Testing confirmed that Docker, Keycloak, the Flask application, the log-stream service, and the Wazuh agent restarted successfully.

### Default Interface Settings May Require Validation

Some Keycloak brute-force settings did not initially save through the administrative interface.

Using the Keycloak administrative command-line tool allowed the settings to be applied and verified directly.

This demonstrated the importance of validating configuration results rather than assuming a graphical interface saved them correctly.

### Evidence Should Be Collected During Testing

Service status, configuration output, event logs, detection rules, screenshots, and hashes were collected as the lab progressed.

Collecting evidence during testing was more reliable than attempting to reconstruct every result afterward.

## Challenges Encountered

The primary challenges included:

- Configuring Keycloak users, groups, roles, and MFA
- Integrating the Flask application with OpenID Connect
- Enforcing role-based access in application routes
- Persistently collecting Keycloak container logs
- Writing custom Wazuh rules for identity events
- Correlating repeated authentication failures
- Verifying temporary account lockout behavior
- Applying brute-force settings through the Keycloak CLI
- Confirming service recovery after reboot
- Organizing evidence and screenshots for GitHub

## Improvements for a Future Version

A future version of the lab could include:

- HTTPS for all identity and application traffic
- Password-spraying detection across several accounts
- Credential-stuffing simulations using approved test data
- Source-IP enrichment
- Email or messaging alerts
- Automated incident tickets
- Session-revocation testing
- Token-expiration and refresh-token testing
- Account-disable and offboarding workflows
- Centralized secret management
- Keycloak configuration backup and restore testing
- Additional service-account restrictions
- Identity dashboards and trend analysis

## Final Takeaway

The most important lesson was that identity security requires layered prevention, authorization, monitoring, and response.

Centralized login alone is not sufficient. Effective identity defense also requires MFA, least privilege, brute-force protection, persistent logging, alert correlation, incident investigation, and tested recovery procedures.
