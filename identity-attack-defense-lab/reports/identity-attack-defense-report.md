# Identity Attack and Defense Lab

## Executive Summary

This lab implemented a centralized identity security environment using Keycloak, a Flask demonstration application, and Wazuh. The environment supports centralized authentication, role-based access control, multifactor authentication, brute-force protection, identity-event monitoring, and custom security alerts.

## Environment

- Ubuntu server: `192.168.56.121`
- Wazuh server: `192.168.56.122`
- Keycloak: `http://192.168.56.121:8080`
- Demo application: `http://192.168.56.121:5000`
- Wazuh Dashboard: `https://192.168.56.122`
- Keycloak realm: `CyberLab`
- Application client: `identity-demo-app`

## Identity Configuration

The CyberLab realm contains separate users, groups, and roles for standard users, help-desk personnel, security analysts, administrators, and service accounts.

Configured roles:

- `user`
- `helpdesk`
- `security-analyst`
- `administrator`
- `reporting-service`

Multifactor authentication was configured for privileged accounts, including the help-desk, security-analyst, and administrator users.

## Application Security

The Flask demonstration application authenticates users through Keycloak using OpenID Connect. Application pages enforce role-based authorization for authenticated users, security analysts, and administrators.

The application runs as the persistent `identity-demo-app.service` systemd service.

## Brute-Force Protection

Keycloak brute-force protection was enabled with the following configuration:

- Maximum login failures: 3
- Temporary lockout: enabled
- Initial wait time: 60 seconds
- Maximum wait time: 300 seconds
- Failure reset time: 600 seconds
- Permanent lockout: disabled

Testing confirmed that three failed login attempts temporarily disabled the Alice account. A correct password was rejected while the temporary lockout was active.

## Wazuh Monitoring

The Ubuntu Wazuh agent monitors:

`/home/analyst/identity-attack-defense-lab/keycloak-events.log`

Keycloak container logs are continuously written to this file by:

`keycloak-log-stream.service`

The Wazuh agent forwards these events to the Wazuh manager at `192.168.56.122`.

## Custom Detection Rules

The following Wazuh rules were created:

- Rule `100100`, level 8: Keycloak authentication failure
- Rule `100101`, level 3: Keycloak successful authentication
- Rule `100102`, level 12: Three authentication failures within two minutes
- Rule `100103`, level 10: Keycloak temporary account lockout

## Validation Results

Testing confirmed:

- Successful Keycloak authentication
- Failed-login event collection
- Role-based access enforcement
- Multifactor authentication for privileged accounts
- Brute-force alert generation
- Temporary account lockout
- Successful and failed authentication alerts in Wazuh
- Automatic startup after an Ubuntu reboot
- Automatic Wazuh-agent reconnection
- Automatic recovery of the Keycloak log stream and Flask application

## Evidence

Evidence files are stored in:

`~/identity-attack-defense-lab/evidence`

The evidence includes service status, authentication events, brute-force settings, custom Wazuh rules, an evidence inventory, and SHA-256 hashes.

## Conclusion

The completed environment demonstrates a defense-in-depth identity security architecture. Keycloak provides authentication, authorization, MFA, and account protection, while Wazuh provides centralized monitoring and high-severity detection for suspicious identity activity.
