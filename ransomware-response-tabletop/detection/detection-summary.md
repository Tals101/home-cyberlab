# Detection

## Detection Summary

During the ransomware response tabletop lab, three categories of suspicious behavior were observed on the developer workstation:

1. Suspicious PowerShell activity
2. Unusual file modifications and file renames
3. Outbound network traffic after suspicious host activity

## Affected Host

- Hostname: CYBERHUB
- User: Tals' CyberHub
- Operating System: Windows
- Lab Folder: ransomware-response-tabletop

## Evidence Reviewed

| Evidence File | Purpose |
|---|---|
| evidence/powershell-command-evidence.txt | Shows PowerShell transcript evidence, file discovery, encoded command usage, and blocked destructive command documentation |
| evidence/file-modification-evidence.txt | Shows baseline hashes, modified files, renamed files, and after-modification hashes |
| evidence/file-modification-events.csv | Structured record of modified and renamed files |
| evidence/file-hash-baseline.csv | Baseline file hashes before modification |
| evidence/file-hash-after-modification.csv | File hashes after modification |
| evidence/network-traffic-evidence.txt | Shows DNS resolution, outbound HTTPS tests, web request evidence, and active TCP connections |
| evidence/outbound-network-events.csv | Structured record of outbound network connection tests |

## Detection Findings

### Finding 1: Suspicious PowerShell Activity

PowerShell was used to perform file discovery and execute an encoded command. The transcript also documented a destructive command example that was intentionally blocked for safety.

Suspicious indicators:

- ExecutionPolicy Bypass
- EncodedCommand usage
- File discovery with Get-ChildItem
- Documented vssadmin shadow copy deletion attempt, not executed

This behavior is suspicious because ransomware often uses scripting tools to perform discovery, evade controls, and prepare the system before encryption.

### Finding 2: Unusual File Modifications

Multiple files inside the lab workspace were modified in a short time period. Some files were renamed with a `.locked-lab` extension.

Suspicious indicators:

- Multiple files modified quickly
- File hashes changed after modification
- Documents renamed with ransomware-style extension
- Activity occurred inside user document and project folders

This behavior is suspicious because ransomware commonly modifies or renames files during encryption activity.

### Finding 3: Outbound Network Traffic

Outbound HTTPS traffic was observed after suspicious PowerShell and file modification behavior.

Suspicious indicators:

- DNS resolution activity
- HTTPS connections to external domains
- Successful outbound TCP connections on port 443
- Active TCP connections observed from the local host

This behavior is suspicious because ransomware incidents may involve command-and-control communication or data exfiltration before encryption.

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

## Detection Conclusion

The combined evidence supports a ransomware-like incident pattern. The activity began with suspicious PowerShell usage, continued with unusual file modification behavior, and was followed by outbound network traffic.

This should be treated as a high-priority ransomware incident in a real environment.
