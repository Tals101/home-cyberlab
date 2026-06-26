# Ransomware Incident Response Playbook

## Playbook Purpose

This playbook defines the response process for a ransomware-style incident involving a developer workstation. It covers detection, containment, eradication, recovery, evidence preservation, communication, and lessons learned.

This lab was performed safely. No real ransomware was executed, no destructive commands were run, and no real files outside the lab workspace were modified.

## Scenario

A developer workstation begins showing ransomware-like behavior. Suspicious PowerShell activity is observed, multiple files are modified and renamed, and outbound network traffic occurs shortly after the suspicious host activity.

## Incident Severity

Recommended severity: High

Reason:

- Suspicious PowerShell behavior was observed
- Encoded PowerShell execution was captured
- File discovery activity occurred
- Multiple files were modified
- Some files were renamed with a ransomware-style extension
- Outbound network communication was observed

## Affected System

| Field | Value |
|---|---|
| Hostname | CYBERHUB |
| User | Tals' CyberHub |
| System Type | Developer Workstation |
| Incident Type | Ransomware-like Activity |
| Lab Folder | ransomware-response-tabletop |

## Evidence Sources

| Evidence File | Description |
|---|---|
| evidence/powershell-command-evidence.txt | PowerShell transcript showing file discovery, encoded command usage, and blocked destructive command documentation |
| evidence/file-modification-evidence.txt | Transcript showing baseline hashes, modified files, renamed files, and after-modification hashes |
| evidence/file-modification-events.csv | Structured file modification events |
| evidence/file-hash-baseline.csv | File hashes before modification |
| evidence/file-hash-after-modification.csv | File hashes after modification |
| evidence/network-traffic-evidence.txt | Network transcript showing DNS resolution, outbound HTTPS tests, and active TCP connections |
| evidence/outbound-network-events.csv | Structured outbound connection test results |
| detection/detection-summary.md | Detection findings and ATTACK mapping |
| containment/containment-actions.md | Containment actions |
| eradication/eradication-actions.md | Eradication actions |
| recovery/recovery-plan.md | Recovery plan |

## Phase 1: Detection

### Objective

Identify ransomware-like behavior as early as possible.

### Detection Indicators

| Indicator | Why It Matters |
|---|---|
| PowerShell ExecutionPolicy Bypass | May indicate an attempt to run scripts while bypassing restrictions |
| EncodedCommand usage | Commonly used to hide command intent |
| File discovery commands | May indicate preparation to locate files for encryption |
| Shadow copy deletion command documented | Ransomware often attempts to prevent easy recovery |
| Multiple file modifications | May indicate encryption or mass file tampering |
| Files renamed with unusual extension | Common ransomware behavior |
| Outbound HTTPS traffic | May indicate command-and-control or exfiltration activity |

### Detection Actions

1. Review PowerShell transcripts.
2. Review endpoint alerts.
3. Review file modification activity.
4. Compare baseline and after-modification hashes.
5. Review outbound network connections.
6. Identify affected user and hostname.
7. Start an incident timeline.
8. Escalate to the incident response team.

## Phase 2: Containment

### Objective

Stop the ransomware-like activity from spreading and preserve evidence.

### Immediate Containment Actions

1. Isolate the affected workstation from the network.
2. Keep the machine powered on unless instructed otherwise by incident response leadership.
3. Disable the affected user account if compromise is suspected.
4. Revoke active sessions and tokens.
5. Block suspicious destination IP addresses and domains.
6. Identify any shared drives, repositories, or cloud services accessed by the workstation.
7. Preserve PowerShell, file, endpoint, and network evidence.
8. Notify IT, security, and leadership contacts.

### Containment Notes

The workstation should not be returned to normal use until eradication and recovery steps are complete.

## Phase 3: Eradication

### Objective

Remove attacker access, remove persistence, and eliminate the cause of the ransomware-like activity.

### Eradication Actions

1. Preserve evidence before cleanup.
2. Review suspicious PowerShell activity.
3. Check for persistence mechanisms.
4. Review scheduled tasks.
5. Review startup folders.
6. Review registry run keys.
7. Review suspicious services.
8. Review unauthorized remote access tools.
9. Reset affected user credentials.
10. Revoke sessions and tokens.
11. Patch vulnerable software.
12. Rebuild the workstation from a known-good image if needed.

### Recommended Decision

For a real ransomware incident, the safest option is usually to rebuild the affected workstation from a trusted image instead of relying only on manual cleanup.

## Phase 4: Recovery

### Objective

Restore safe business operations after containment and eradication.

### Recovery Actions

1. Restore files from known-good backups.
2. Validate backups before restoration.
3. Rebuild or validate the affected workstation.
4. Reset affected credentials.
5. Confirm endpoint protection is running.
6. Confirm logging is enabled.
7. Confirm suspicious PowerShell activity has stopped.
8. Confirm ransomware-style file renaming has stopped.
9. Confirm suspicious outbound traffic has stopped.
10. Reconnect the workstation only after validation.
11. Monitor the host after returning it to service.

## Phase 5: Post-Incident Review

### Objective

Document what happened, what worked, and what should be improved.

### Review Questions

1. How was the activity detected?
2. What evidence confirmed ransomware-like behavior?
3. How quickly was containment started?
4. Were backups available and usable?
5. Were endpoint logs complete?
6. Was PowerShell logging sufficient?
7. Were network controls effective?
8. Were users and leadership notified properly?
9. What security controls should be improved?
10. What documentation should be updated?

## Communication Plan

| Audience | Message |
|---|---|
| IT Team | Workstation has ransomware-like activity and requires containment |
| Security Team | Evidence shows suspicious PowerShell, file modification, and outbound traffic |
| Leadership | High-priority incident response process has started |
| End User | Device may be isolated temporarily for security investigation |
| Legal or Compliance | Notify if sensitive data exposure is suspected |

## Evidence Preservation Requirements

Preserve the following:

- PowerShell transcripts
- Endpoint logs
- File modification logs
- File hashes
- Network connection evidence
- DNS logs
- Firewall logs
- EDR alerts
- User account activity
- Backup status
- Timeline notes

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

## Final Playbook Decision

Based on the collected lab evidence, the activity should be handled as a high-priority ransomware-style incident.

Recommended response:

1. Detect suspicious behavior.
2. Preserve evidence.
3. Isolate the workstation.
4. Disable or reset affected access.
5. Block suspicious outbound communication.
6. Rebuild or clean the workstation.
7. Restore files from clean backups.
8. Validate system health.
9. Monitor after recovery.
10. Complete lessons learned.

## Lab Conclusion

This ransomware response tabletop lab successfully created real, safe evidence for suspicious PowerShell activity, unusual file modifications, and outbound network traffic. The lab then documented detection, containment, eradication, and recovery actions in a structured incident response playbook.
