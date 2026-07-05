# Discovery Phase

## Objective

Simulate safe host discovery activity on the Ubuntu lab target.

## Approved Target

| Target | IP Address | Detection Tool |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Wazuh |

## Discovery Activity

Planned commands:

- whoami
- hostname
- id
- uname -a
- ip addr
- ps aux
- ls /home
- cat /etc/os-release

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Discovery | System Owner/User Discovery | T1033 |
| Discovery | System Information Discovery | T1082 |
| Discovery | Process Discovery | T1057 |
| Discovery | File and Directory Discovery | T1083 |
| Discovery | Network Configuration Discovery | T1016 |

## Safety Note

This phase only collects basic information from a lab-owned Ubuntu system.

No sensitive production data is accessed.
