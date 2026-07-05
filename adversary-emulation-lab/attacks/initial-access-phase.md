# Initial Access Phase

## Objective

Simulate controlled initial access attempts against approved lab-owned systems.

## Approved Targets

| Target | IP Address | Detection Tool |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Wazuh |
| Windows VM | 192.168.56.113 | Sysmon |

## Attack Activity

Planned activity:

- Attempt controlled failed SSH logins
- Use fake usernames or incorrect passwords
- Confirm authentication failures are logged
- Search Wazuh and Sysmon for related evidence

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Credential Access | Brute Force | T1110 |
| Initial Access | Valid Accounts | T1078 |

## Safety Note

This activity will only use approved lab-owned systems.

No real credential attacks, password lists, public IPs, or unauthorized systems will be used.
