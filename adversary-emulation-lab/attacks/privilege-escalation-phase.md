# Privilege Escalation Phase

## Objective

Simulate safe privilege-related activity in a controlled lab environment.

## Approved Target

| Target | IP Address | Detection Tool |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Wazuh |

## Attack Activity

Planned activity:

- Run normal sudo commands
- Confirm privileged command activity appears in logs
- Search Wazuh for sudo and privilege-related alerts

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Privilege Escalation | Abuse Elevation Control Mechanism | T1548 |
| Privilege Escalation | Sudo and Sudo Caching | T1548.003 |
| Defense Evasion | Valid Accounts | T1078 |

## Safety Note

This phase does not exploit vulnerabilities.

The activity only uses approved sudo commands on a lab-owned Ubuntu system.
