# Eradication

## Eradication Summary

The purpose of eradication is to remove the suspected ransomware activity, remove attacker access, eliminate persistence, and prepare the affected system for safe recovery.

In this lab, no real malware was executed. The suspicious behavior was safely generated inside the lab-workspace folder. The eradication process is documented as if this were a real ransomware incident.

## Affected Host

- Hostname: CYBERHUB
- User: Tals' CyberHub
- Suspected System Type: Developer Workstation
- Incident Type: Ransomware-like activity

## Evidence Considered Before Eradication

| Evidence File | Relevance |
|---|---|
| evidence/powershell-command-evidence.txt | Shows suspicious PowerShell behavior and encoded command usage |
| evidence/file-modification-evidence.txt | Shows unusual file modification and rename activity |
| evidence/file-modification-events.csv | Shows structured file modification events |
| evidence/file-hash-baseline.csv | Shows original file hashes |
| evidence/file-hash-after-modification.csv | Shows changed hashes after activity |
| evidence/network-traffic-evidence.txt | Shows outbound network activity |
| evidence/outbound-network-events.csv | Shows structured outbound connection results |

## Lab Eradication Actions Performed

Because this was a controlled lab, eradication focused on removing the simulated impact files and documenting cleanup.

Completed lab actions:

- Confirmed no real ransomware was executed
- Confirmed no destructive recovery commands were executed
- Confirmed file changes were limited to the lab-workspace folder
- Preserved all evidence before cleanup
- Identified renamed files with the .locked-lab extension
- Documented suspicious PowerShell behavior
- Documented outbound network activity

## Recommended Real-World Eradication Actions

| Priority | Action | Purpose |
|---|---|---|
| High | Reimage or rebuild the affected workstation | Remove malware, persistence, and unknown attacker changes |
| High | Reset the affected user's password | Prevent continued unauthorized access |
| High | Revoke active sessions and tokens | Stop attacker reuse of authenticated sessions |
| High | Remove malicious scripts, scheduled tasks, and startup items | Eliminate persistence |
| High | Review PowerShell history and script block logs | Identify attacker commands |
| Medium | Patch vulnerable software | Close exploited weaknesses |
| Medium | Review endpoint protection alerts | Confirm all malicious activity is removed |
| Medium | Remove unauthorized remote access tools | Prevent re-entry |
| Medium | Validate firewall and DNS blocks | Confirm command-and-control paths are blocked |
| Medium | Review developer repositories and credentials | Determine if secrets or source code were exposed |

## Specific Items to Check

In a real ransomware incident, the following areas should be checked:

- Startup folders
- Scheduled tasks
- Registry run keys
- PowerShell profiles
- Recently created local users
- Recently modified scripts
- Suspicious services
- Remote access tools
- Browser-stored credentials
- SSH keys
- Developer API keys
- Cloud credentials
- Source code repositories
- Shared drives
- Backup access

## Eradication Decision

Based on the evidence, the safest real-world response would be to rebuild the affected developer workstation from a known-good image instead of attempting manual cleanup only.

Recommended eradication status:

- Preserve evidence first: Completed in lab
- Remove attacker access: Required in real incident
- Reset credentials: Required in real incident
- Rebuild workstation: Recommended in real incident
- Validate security controls: Required before recovery

## Eradication Conclusion

The correct eradication response is to remove attacker access, rebuild or clean the affected workstation, reset credentials, verify that persistence has been removed, and confirm that no suspicious network communication remains.
