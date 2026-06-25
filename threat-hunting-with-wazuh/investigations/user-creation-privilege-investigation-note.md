# Investigation Note: New User Creation and Privilege Change

## Investigation Title

Suspicious Local User Creation and Sudo Group Assignment

## Date

2026-06-23

## Summary

During this hunt, a new local Linux user account named huntuser was created on the monitored Ubuntu target server.

The account was then added to the sudo group to simulate suspicious privilege change behavior.

This activity was generated to test whether Wazuh could collect and display account creation, identity file modification, group modification, and privilege change telemetry.

## Systems Involved

### Target Machine

Hostname: wazuh-hunt-target  
IP Address: 192.168.56.118

### Detection Platform

Hostname: wazuh-server  
IP Address: 192.168.56.120

## Observed Activity

The following administrative actions were performed on the monitored target:

- Created a new local user named huntuser
- Set a password for huntuser
- Added huntuser to the sudo group
- Confirmed the account had sudo group membership

The activity generated audit events related to:

- account_creation
- privilege_change
- identity_file_change
- group_file_change

## Evidence Reviewed

- evidence/user-creation-privilege-audit-events.txt
- detections/user-creation-privilege-change.md
- mitre-mappings/user-creation-privilege-mitre-mapping.md
- screenshots/user-creation-privilege-wazuh-events.png

## Hunt Category

Persistence and privilege escalation

## MITRE ATT&CK Mapping

- T1136 - Create Account
- T1136.001 - Local Account
- T1098 - Account Manipulation
- T1548 - Abuse Elevation Control Mechanism

## Analyst Assessment

The creation of a new local account followed by sudo group assignment is suspicious when it is unexpected or unauthorized.

In a real environment, this behavior could indicate persistence, insider activity, or post-exploitation privilege escalation.

## Recommended Response

- Confirm whether the new account was authorized
- Review who created the account
- Check sudo logs for later privileged activity
- Review recent logins involving the new account
- Remove unauthorized users from privileged groups
- Disable or remove unauthorized accounts
- Alert on future local account creation events
- Alert on new sudo group membership changes

## Conclusion

Wazuh successfully collected auditd telemetry showing account creation and privilege change activity on the monitored Linux target. This confirms the lab can support hunting for persistence and privilege escalation behavior.
