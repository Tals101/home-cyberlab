# Wazuh Persistence Detection Analysis

## Phase

Persistence

## Activity Tested

A harmless cron job was created on the Ubuntu lab target to simulate persistence.

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

Persistence method:
- Cron job

Cron entry:
* * * * * /home/analyst/lab7-persistence/lab7-persistence-test.sh

Cleanup:
The cron job was removed after validation.

## Wazuh Search Result

Wazuh detected the cron persistence activity.

Observed detection:

| Rule ID | Description | Group | Detection Meaning |
|---|---|---|---|
| 2832 | Crontab entry changed | syslog, cron | User crontab was modified |

Additional related findings:

| Finding Type | Description | MITRE Mapping |
|---|---|---|
| SCA | Cron daemon enabled and active | Related cron visibility |
| SCA | Cron file and directory permission checks | T1053, T1053.003 |

## Detection Decision

Result: Detected

## Reason

Wazuh generated alerts showing that the user's crontab was changed.

This matched the persistence simulation because the lab created a scheduled cron job and later removed it.

## Evidence

Evidence files:

- evidence/persistence-summary.txt
- evidence/persistence-crontab.txt
- evidence/persistence-proof.txt
- evidence/persistence-cleanup-summary.txt
- evidence/wazuh-persistence-alert-search.txt

Key evidence observed:

- Rule ID: 2832
- Description: Crontab entry changed
- Program: crontab
- User: analyst
- Agent: ubuntu-lab7
- Target IP: 192.168.56.121

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Persistence | Scheduled Task/Job | T1053 | Detected by Wazuh |
| Persistence | Cron | T1053.003 | Detected by Wazuh |
