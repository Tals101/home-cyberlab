# MITRE ATT&CK Mapping: New User Creation and Privilege Change

## Activity Observed

A new local Linux user account named huntuser was created on the monitored Ubuntu target server.

The account was then added to the sudo group, giving it elevated privileges.

## Source System

wazuh-hunt-target  
IP Address: 192.168.56.118

## Detection Platform

wazuh-server  
IP Address: 192.168.56.120

## Technique Mapping

### T1136 - Create Account

The creation of the huntuser account maps to account creation behavior.

### T1136.001 - Local Account

The account was created locally on the monitored Linux server.

### T1098 - Account Manipulation

The account was modified after creation by changing its group membership.

### T1068 - Exploitation for Privilege Escalation / Privilege Escalation Context

Adding the user to the sudo group represents privilege elevation behavior in this lab context.

### T1548 - Abuse Elevation Control Mechanism

The sudo group assignment may allow the account to execute commands with elevated privileges.

## Supporting Evidence

- evidence/user-creation-privilege-audit-events.txt
- detections/user-creation-privilege-change.md
- screenshots/user-creation-privilege-wazuh-events.png

## Hunt Result

Wazuh successfully collected auditd events showing local user creation, identity file modification, group file modification, and privilege change activity.

## Analyst Notes

In a real environment, unexpected local account creation followed by privileged group assignment should be treated as suspicious.

This behavior may indicate:

- Persistence
- Unauthorized administrative access
- Insider activity
- Post-exploitation privilege escalation
