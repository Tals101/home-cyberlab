# Lab 3 Final Report: Ransomware Response Tabletop

## Lab Overview

This lab simulated a ransomware-style incident affecting a developer workstation. The goal was to create real, safe evidence for suspicious activity and then document the incident response process.

No real ransomware was executed. No destructive commands were run. All file activity was limited to the controlled lab-workspace folder.

## Scenario

A developer workstation began showing signs of ransomware-like behavior:

- Suspicious PowerShell activity
- Unusual file modifications
- Files renamed with a ransomware-style extension
- Outbound network traffic after suspicious host activity

## Evidence Created

| Requirement | Evidence File | Status |
|---|---|---|
| Suspicious PowerShell commands | evidence/powershell-command-evidence.txt | Completed |
| Unusual file modifications | evidence/file-modification-evidence.txt | Completed |
| File modification event log | evidence/file-modification-events.csv | Completed |
| Baseline file hashes | evidence/file-hash-baseline.csv | Completed |
| Post-modification file hashes | evidence/file-hash-after-modification.csv | Completed |
| Outbound network traffic | evidence/network-traffic-evidence.txt | Completed |
| Outbound network event log | evidence/outbound-network-events.csv | Completed |

## Incident Response Documents Created

| Task | File | Status |
|---|---|---|
| Detection | detection/detection-summary.md | Completed |
| Containment | containment/containment-actions.md | Completed |
| Eradication | eradication/eradication-actions.md | Completed |
| Recovery | recovery/recovery-plan.md | Completed |
| IR Playbook | playbook/ransomware-ir-playbook.md | Completed |

## Key Detection Findings

The lab evidence showed a ransomware-like activity pattern:

1. PowerShell was used for file discovery.
2. Encoded PowerShell execution was captured.
3. A destructive shadow copy deletion command was documented but not executed.
4. Multiple files were modified in a short period.
5. Some files were renamed with a .locked-lab extension.
6. File hashes changed after modification.
7. Outbound HTTPS traffic was observed after host activity.

## Containment Summary

The recommended containment response is to isolate the affected workstation, preserve evidence, disable or reset affected accounts, block suspicious outbound traffic, and identify any shared resources that may have been accessed.

## Eradication Summary

The recommended eradication response is to remove attacker access, check for persistence, reset credentials, review suspicious PowerShell behavior, and rebuild the workstation from a known-good image if needed.

## Recovery Summary

The recommended recovery response is to restore files from clean backups, validate system health, confirm suspicious behavior has stopped, reconnect the workstation only after validation, and monitor closely after recovery.

## MITRE ATTACK Mapping

| Tactic | Technique | Description |
|---|---|---|
| Execution | T1059.001 | PowerShell |
| Discovery | T1083 | File and Directory Discovery |
| Defense Evasion | T1562 | Impair Defenses |
| Impact | T1486 | Data Encrypted for Impact |
| Impact | T1490 | Inhibit System Recovery |
| Command and Control | T1071.001 | Web Protocols |
| Exfiltration | T1041 | Exfiltration Over C2 Channel |

## Final Conclusion

This lab successfully created real, safe evidence for a ransomware response tabletop exercise. The evidence supported a full incident response workflow covering detection, containment, eradication, and recovery. The final ransomware incident response playbook provides a structured process that could be followed during a real ransomware-style incident.
