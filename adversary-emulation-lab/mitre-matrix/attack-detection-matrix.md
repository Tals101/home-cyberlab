# Lab 7 ATT&CK Detection Matrix

## Adversary Emulation Detection Coverage

| Phase | ATT&CK Tactic | Technique | ID | Tool | Detection Result |
|---|---|---|---|---|---|
| Reconnaissance | Discovery | Network Service Discovery | T1046 | Wazuh | Not detected |
| Reconnaissance | Discovery | Network Service Discovery | T1046 | Sysmon | Partially detected |
| Initial Access | Credential Access / Initial Access | Password Guessing | T1110.001 | Wazuh | Detected |
| Initial Access | Lateral Movement | SSH | T1021.004 | Wazuh | Detected |
| Persistence | Persistence | Scheduled Task/Job | T1053 | Wazuh | Detected |
| Persistence | Persistence | Cron | T1053.003 | Wazuh | Detected |
| Privilege Escalation | Privilege Escalation | Abuse Elevation Control Mechanism | T1548 | Wazuh | Detected |
| Privilege Escalation | Privilege Escalation | Sudo and Sudo Caching | T1548.003 | Wazuh | Detected |
| Discovery | Discovery | System Owner/User Discovery | T1033 | Wazuh | Not directly detected |
| Discovery | Discovery | System Information Discovery | T1082 | Wazuh | Partially detected |
| Discovery | Discovery | Process Discovery | T1057 | Wazuh | Not directly detected |
| Discovery | Discovery | File and Directory Discovery | T1083 | Wazuh | Partially detected |
| Discovery | Discovery | Network Configuration Discovery | T1016 | Wazuh | Not directly detected |
| Collection | Collection | Data from Local System | T1005 | Wazuh | Not directly detected |
| Collection | Collection | Archive Collected Data | T1560 | Wazuh | Not detected |
| Collection | Collection | Archive via Utility | T1560.001 | Wazuh | Not detected |
| Container Runtime | Execution | Command and Scripting Interpreter | T1059 | Falco | Detected |
| Container Runtime | Execution | Unix Shell | T1059.004 | Falco | Detected |

## Coverage Summary

| Result | Count |
|---|---:|
| Detected | 8 |
| Partially Detected | 3 |
| Not Directly Detected / Not Detected | 7 |

## Key Findings

- Wazuh strongly detected failed SSH login activity.
- Wazuh strongly detected cron persistence through crontab modification alerts.
- Wazuh strongly detected sudo-based privileged activity.
- Sysmon partially detected reconnaissance through network connection telemetry.
- Falco successfully detected an interactive shell spawned inside a Kubernetes container.
- Wazuh did not directly detect basic Linux discovery commands.
- Wazuh did not directly detect fake file collection or tar archive creation.
- Command-level Linux auditing and file integrity monitoring would improve coverage for Discovery and Collection.

## Detection Engineering Notes

This lab shows the difference between detection visibility and detection context.

Some tools detected the activity directly, such as Wazuh detecting crontab changes and Falco detecting container shell activity.

Other results required analyst interpretation because the tool returned related configuration findings but not direct command-level alerts.

## Recommended Improvements

- Add Linux auditd rules for command execution monitoring.
- Add Wazuh File Integrity Monitoring for sensitive directories.
- Add custom Wazuh rules for suspicious archive creation.
- Add command-line telemetry for discovery commands.
- Add Kubernetes audit logging for kubectl exec activity.
- Keep Falco enabled for runtime container detection.
