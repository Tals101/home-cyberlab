# Lab 6 Threat Intel Notes

## Scope

This threat intelligence note maps observed lab activity to known adversary behaviors using MITRE ATT&CK.

The IP addresses in this lab are private RFC1918 lab addresses, so public IP reputation is not useful for attribution or external threat reputation.

## Observed Behaviors

### 1. Network Scanning

Observed activity:
- Kali host 192.168.56.111 scanned Windows host 192.168.56.113
- Kali host 192.168.56.111 scanned Ubuntu host 192.168.56.121
- Ports checked included 22, 80, 135, 139, 445, and 3389

MITRE ATT&CK mapping:
- T1046 - Network Service Discovery

Why it matters:
- Network scanning is commonly used during discovery to identify available systems and exposed services.

---

### 2. Failed SSH Authentication Attempts

Observed activity:
- Failed SSH login attempts from 192.168.56.111 to 192.168.56.121
- Usernames included oracle, test, and root

MITRE ATT&CK mapping:
- T1110 - Brute Force
- T1021.004 - Remote Services: SSH

Why it matters:
- Multiple failed login attempts against different accounts may indicate password guessing or brute-force activity.

---

### 3. Failed Windows SMB Authentication Attempts

Observed activity:
- Failed SMB authentication attempts from 192.168.56.111 to 192.168.56.113
- Usernames included fakeadmin and administrator

MITRE ATT&CK mapping:
- T1110 - Brute Force
- T1021.002 - Remote Services: SMB/Windows Admin Shares

Why it matters:
- Failed SMB logons against administrative-looking accounts may indicate attempted credential access or lateral movement.

---

### 4. Encoded PowerShell Execution

Observed activity:
- Windows process creation logs captured powershell.exe with EncodedCommand

MITRE ATT&CK mapping:
- T1059.001 - Command and Scripting Interpreter: PowerShell

Why it matters:
- Encoded PowerShell is commonly suspicious because it can hide command content from simple visual review.

## Intel Sources

- MITRE ATT&CK T1046 - Network Service Discovery
- MITRE ATT&CK T1110 - Brute Force
- MITRE ATT&CK T1021.004 - Remote Services: SSH
- MITRE ATT&CK T1021.002 - Remote Services: SMB/Windows Admin Shares
- MITRE ATT&CK T1059.001 - PowerShell

## Analyst Note

The lab activity does not prove a real-world compromise because it was safely simulated in a controlled environment. However, the evidence reflects realistic Tier 1 SOC alert patterns: reconnaissance, failed authentication, and suspicious script execution.
