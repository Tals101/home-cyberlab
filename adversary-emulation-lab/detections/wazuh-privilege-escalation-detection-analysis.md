# Wazuh Privilege Escalation Detection Analysis

## Phase

Privilege Escalation

## Activity Tested

Safe sudo commands were executed on the Ubuntu lab target.

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

User:
- analyst

Commands executed:
- sudo whoami
- sudo id
- sudo ls /root

## Wazuh Search Result

Wazuh detected sudo-based privilege activity.

Observed detections included:

| Rule ID | Description | MITRE Mapping | Detection Meaning |
|---|---|---|---|
| 5402 | User executed sudo command | T1548.003 | Sudo command execution as root |
| 5501 | PAM: Login session opened | T1078 | Root session opened by analyst through sudo |
| 5502 | PAM: Login session closed | N/A | Root sudo session closed |

## Detection Decision

Result: Detected

## Reason

Wazuh generated alerts showing that the analyst user executed sudo commands as root.

This matched the privilege escalation simulation because the lab intentionally used sudo to perform privileged actions.

## Evidence

Evidence files:

- evidence/privilege-escalation-summary.txt
- evidence/privilege-escalation-time.txt
- evidence/wazuh-privilege-escalation-alert-search.txt

Key evidence observed:

- Rule ID: 5402
- MITRE technique: T1548.003
- Source user: analyst
- Destination user: root
- Command observed: /usr/bin/whoami
- Agent: ubuntu-lab7
- Target IP: 192.168.56.121

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Privilege Escalation | Abuse Elevation Control Mechanism | T1548 | Detected by Wazuh |
| Privilege Escalation | Sudo and Sudo Caching | T1548.003 | Detected by Wazuh |
| Defense Evasion | Valid Accounts | T1078 | Partially detected through PAM session activity |
