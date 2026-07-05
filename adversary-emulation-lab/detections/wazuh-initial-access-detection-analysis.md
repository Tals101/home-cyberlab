# Wazuh Initial Access Detection Analysis

## Phase

Initial Access

## Activity Tested

Controlled failed SSH login attempts were performed from Kali Linux against the Ubuntu Wazuh target.

Source:
- Kali Linux: 192.168.56.111

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

Usernames tested:
- lab7fake
- fakeadmin
- testuser

## Wazuh Search Result

Wazuh detected the failed SSH login activity.

Observed detections included:

| Rule ID | Description | MITRE Mapping | Detection Meaning |
|---|---|---|---|
| 5710 | sshd: Attempt to login using a non-existent user | T1110.001, T1021.004 | Invalid SSH username attempt |
| 5503 | PAM: User login failed | T1110.001 | Failed authentication |
| 2502 | syslog: User missed the password more than one time | T1110 | Repeated failed password attempts |

## Detection Decision

Result: Detected

## Reason

Wazuh generated alerts for invalid SSH users, failed PAM authentication, and repeated missed passwords from the Kali source IP.

The detections matched the simulated Initial Access activity.

## Evidence

Evidence file:
- evidence/wazuh-initial-access-alert-search.txt

Key evidence observed:
- Source IP: 192.168.56.111
- Target agent: ubuntu-lab7
- Target IP: 192.168.56.121
- Usernames: lab7fake, fakeadmin, testuser
- Event source: sshd / journald

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Credential Access | Brute Force | T1110 | Detected by Wazuh |
| Credential Access | Password Guessing | T1110.001 | Detected by Wazuh |
| Lateral Movement | SSH | T1021.004 | Detected by Wazuh |
| Initial Access | Valid Accounts | T1078 | Not directly tested; only failed login attempts were tested |
