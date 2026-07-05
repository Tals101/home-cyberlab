# Persistence Detection Notes

## Phase

Persistence

## Attack Activity

A harmless cron job was created on the Ubuntu lab target to simulate persistence.

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

Cron entry:
* * * * * /home/analyst/lab7-persistence/lab7-persistence-test.sh

Cleanup:
The cron job was removed after validation.

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Wazuh | May detect cron, file changes, or privilege activity on Ubuntu | Detected. Wazuh generated crontab change alerts |
| Sysmon | Should detect scheduled task or process activity on Windows | Not applicable for Ubuntu cron test |
| Falco | Not applicable unless persistence is simulated inside Kubernetes/container workloads | Not applicable |

## Detection Result

Overall Persistence Detection Result:
- Detected by Wazuh

## Detection Summary

Wazuh successfully detected the cron persistence activity.

The key alert was Rule ID 2832: Crontab entry changed.

## Detection Gaps

- Wazuh detected that the crontab changed, but did not automatically label it as malicious persistence
- Analyst review is required to connect the crontab change to MITRE ATT&CK T1053.003
- This test did not validate Windows scheduled task persistence
- This test did not validate Kubernetes/container persistence

## Evidence Files

- evidence/persistence-summary.txt
- evidence/persistence-crontab.txt
- evidence/persistence-proof.txt
- evidence/persistence-cleanup-summary.txt
- evidence/wazuh-persistence-alert-search.txt
- detections/wazuh-persistence-detection-analysis.md
