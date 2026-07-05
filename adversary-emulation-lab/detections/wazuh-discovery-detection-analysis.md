# Wazuh Discovery Detection Analysis

## Phase

Discovery

## Activity Tested

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

## Wazuh Search Result

Wazuh partially detected Discovery-related activity.

The search results did not clearly show direct alerts for the exact discovery commands that were executed.

However, Wazuh did return related SCA findings mapped to Discovery techniques, including:

| Finding Type | Example Description | MITRE Mapping |
|---|---|---|
| SCA | Message of the day / login banner exposes OS details | T1082 |
| SCA | Remote login warning banner exposes system details | T1018, T1082 |
| SCA | Network/file service configuration checks | T1083 and related discovery mappings |
| SCA | Log file and audit tool permission checks | T1083 |

## Detection Decision

Result: Partially Detected

## Reason

Wazuh showed Discovery-related MITRE mappings through configuration assessment findings, but it did not directly alert on the actual discovery commands run by the analyst user.

This means Wazuh had some Discovery visibility through SCA checks, but command-level Discovery detection was limited.

## Evidence

Evidence files:

- evidence/discovery-summary.txt
- evidence/discovery-time.txt
- evidence/discovery-command-output.txt
- evidence/wazuh-discovery-alert-search.txt

Key evidence observed:

- Discovery commands were executed successfully on Ubuntu
- Wazuh returned SCA findings mapped to Discovery techniques
- No strong direct command execution alerts were observed for whoami, hostname, uname, ps aux, or os-release

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Discovery | System Owner/User Discovery | T1033 | Not directly detected |
| Discovery | System Information Discovery | T1082 | Partially detected through SCA findings |
| Discovery | Process Discovery | T1057 | Not directly detected |
| Discovery | File and Directory Discovery | T1083 | Partially detected through SCA findings |
| Discovery | Network Configuration Discovery | T1016 | Not directly detected |
