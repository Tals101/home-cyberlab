# Discovery Detection Notes

## Phase

Discovery

## Attack Activity

Safe host discovery commands were executed on the Ubuntu lab target.

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

User:
- analyst

Commands executed:
- whoami
- hostname
- id
- uname -a
- ip addr
- ps aux
- ls -la /home
- cat /etc/os-release

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Wazuh | May detect command activity if shell command auditing is available | Partially detected through SCA findings, but not direct command execution alerts |
| Sysmon | Not applicable for Ubuntu discovery test | Not applicable |
| Falco | Not applicable unless discovery is simulated inside Kubernetes/container workloads | Not applicable |

## Detection Result

Overall Discovery Detection Result:
- Partially Detected by Wazuh

## Detection Summary

Wazuh did not clearly alert on the exact discovery commands executed by the analyst user.

However, Wazuh returned SCA findings mapped to Discovery techniques such as T1082 and T1083.

## Detection Gaps

- No direct command execution alert was observed for whoami
- No direct command execution alert was observed for hostname
- No direct command execution alert was observed for uname
- No direct command execution alert was observed for ps aux
- No direct command execution alert was observed for cat /etc/os-release
- Command-level Linux auditing would improve Discovery detection coverage

## Evidence Files

- evidence/discovery-summary.txt
- evidence/discovery-time.txt
- evidence/discovery-command-output.txt
- evidence/wazuh-discovery-alert-search.txt
- detections/wazuh-discovery-detection-analysis.md
