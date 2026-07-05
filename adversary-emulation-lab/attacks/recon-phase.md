# Recon Phase

## Objective

Simulate safe network reconnaissance against approved lab-owned systems.

## Approved Targets

| Target | IP Address | Purpose |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Linux target with Wazuh agent |
| Windows VM | 192.168.56.113 | Windows target with Sysmon |

## Attack Activity

Planned recon activity:

- Ping check
- Basic port scan
- Service/version discovery

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Discovery | Network Service Discovery | T1046 |
| Discovery | Remote System Discovery | T1018 |

## Safety Note

Recon will only be performed against approved home lab IP addresses.
