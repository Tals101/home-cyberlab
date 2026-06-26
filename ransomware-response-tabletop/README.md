# Lab 3: Ransomware Response Tabletop

## Scenario

A developer workstation begins showing signs of ransomware-like activity. The lab creates real, safe evidence for suspicious PowerShell activity, unusual file modifications, and outbound network traffic.

No real ransomware was executed. No destructive commands were run. All file changes were limited to the controlled lab-workspace folder.

## Lab Objectives

- Create real evidence for suspicious PowerShell commands
- Create real evidence for unusual file modifications
- Create real evidence for outbound network traffic
- Document detection findings
- Document containment actions
- Document eradication actions
- Document recovery actions
- Produce a ransomware incident response playbook

## Evidence Created

| Evidence | File |
|---|---|
| Suspicious PowerShell commands | evidence/powershell-command-evidence.txt |
| Unusual file modifications | evidence/file-modification-evidence.txt |
| File modification event log | evidence/file-modification-events.csv |
| Baseline file hashes | evidence/file-hash-baseline.csv |
| Post-modification file hashes | evidence/file-hash-after-modification.csv |
| Outbound network traffic | evidence/network-traffic-evidence.txt |
| Outbound network event log | evidence/outbound-network-events.csv |

## Incident Response Documents

| Task | File |
|---|---|
| Detection | detection/detection-summary.md |
| Containment | containment/containment-actions.md |
| Eradication | eradication/eradication-actions.md |
| Recovery | recovery/recovery-plan.md |
| IR Playbook | playbook/ransomware-ir-playbook.md |
| Final Report | reports/lab-3-final-report.md |

## Key Findings

- PowerShell file discovery activity was captured.
- Encoded PowerShell execution was captured safely.
- A destructive shadow copy deletion command was documented but not executed.
- Multiple files were modified in a short time period.
- Files were renamed with a `.locked-lab` extension.
- File hashes changed after modification.
- Outbound HTTPS traffic was captured and documented.

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

## Final Deliverable

The main deliverable for this lab is:

- playbook/ransomware-ir-playbook.md

This playbook documents the full response process for ransomware-style activity, including detection, containment, eradication, recovery, evidence preservation, communication, and post-incident review.
