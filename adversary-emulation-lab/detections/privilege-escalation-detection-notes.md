# Privilege Escalation Detection Notes

## Phase

Privilege Escalation

## Attack Activity

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

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Wazuh | Should detect sudo session and privileged command activity | Detected. Wazuh generated sudo and PAM session alerts |
| Sysmon | Not applicable for Ubuntu sudo test | Not applicable |
| Falco | Not applicable unless privilege activity is simulated inside a container | Not applicable |

## Detection Result

Overall Privilege Escalation Detection Result:
- Detected by Wazuh

## Detection Summary

Wazuh successfully detected sudo-based privileged activity.

The strongest alert was Rule ID 5402, mapped to MITRE ATT&CK T1548.003: Sudo and Sudo Caching.

## Detection Gaps

- Wazuh detected sudo usage, but analyst review is still required to decide whether the sudo activity is authorized or suspicious
- This test did not validate exploit-based privilege escalation
- This test did not validate Windows privilege escalation
- This test did not validate container privilege escalation

## Evidence Files

- evidence/privilege-escalation-summary.txt
- evidence/privilege-escalation-time.txt
- evidence/wazuh-privilege-escalation-alert-search.txt
- detections/wazuh-privilege-escalation-detection-analysis.md
