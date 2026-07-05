# Persistence Phase

## Objective

Simulate a safe persistence technique in a controlled lab environment.

## Approved Targets

| Target | IP Address | Detection Tool |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Wazuh |
| Windows VM | 192.168.56.113 | Sysmon |

## Attack Activity

Planned activity:

- Create a harmless scheduled task or cron-style artifact
- Use the artifact only to write a timestamp to a lab file
- Search Wazuh and Sysmon for related evidence

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Persistence | Scheduled Task/Job | T1053 |
| Persistence | Cron | T1053.003 |
| Persistence | Scheduled Task | T1053.005 |

## Safety Note

This lab will not create malware, backdoors, credential stealers, reverse shells, or unauthorized access mechanisms.

The persistence artifact will only create a harmless lab timestamp file.
