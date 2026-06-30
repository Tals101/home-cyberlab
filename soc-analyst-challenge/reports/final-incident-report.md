# Lab 6: SOC Analyst Challenge - Final Incident Report

## Executive Summary

This lab investigated suspicious activity across a small SOC environment containing Windows logs, Linux logs, packet capture evidence, and threat intelligence notes.

The investigation identified a simulated attacker system, Kali at 192.168.56.111, performing reconnaissance and failed authentication attempts against two lab systems:

- Windows victim: 192.168.56.113
- Ubuntu victim: 192.168.56.121

The activity included network scanning, failed SSH login attempts, failed SMB authentication attempts, and encoded PowerShell execution on Windows.

## Environment

| System | IP Address | Role |
|---|---:|---|
| Kali | 192.168.56.111 | Simulated attacker |
| Windows | 192.168.56.113 | Windows log source / victim |
| Ubuntu | 192.168.56.121 | Linux log source / victim |

## What Happened?

Kali performed an Nmap scan against both the Windows and Ubuntu systems. After reconnaissance, Kali generated failed SSH login attempts against Ubuntu using usernames such as oracle, test, and root.

Kali also generated failed SMB authentication attempts against the Windows host using usernames such as fakeadmin and administrator.

Separately, Windows process creation logs captured PowerShell execution using EncodedCommand. In this lab, the command was safe and intentionally executed for detection purposes, but encoded PowerShell is still suspicious from a SOC perspective.

## Severity

Severity: Medium

This is Medium severity because the activity shows:

- Reconnaissance against multiple hosts
- Failed authentication attempts against Linux SSH
- Failed authentication attempts against Windows SMB
- Use of encoded PowerShell
- Correlated endpoint and network evidence

This is not High severity because there is no confirmed successful attacker login, confirmed malware execution, confirmed persistence, or confirmed data theft.

## Evidence Summary

### Windows Evidence

Files:

- windows-logs/windows-process-evidence.txt
- windows-logs/windows-failed-logon-evidence.txt
- windows-logs/windows-auth-account-evidence.txt

Evidence includes:

- Event ID 4688 process creation logs
- PowerShell EncodedCommand activity
- Failed Windows authentication events
- SMB failed logon activity

### Linux Evidence

File:

- linux-logs/linux-auth-evidence.txt

Evidence includes:

- Successful benign SSH login by analyst
- Normal sudo apt update activity
- Failed SSH login attempts from 192.168.56.111
- Invalid user attempts for oracle and test
- Failed root login attempt

### Network Evidence

Files:

- pcap/lab6-soc-capture.pcap
- evidence/pcap-summary.txt
- evidence/nmap-recon-scan.txt

Evidence includes:

- Nmap scan traffic
- SSH traffic from Kali to Ubuntu
- SMB traffic from Kali to Windows
- Packet capture from the investigation window

### Threat Intel Evidence

File:

- threat-intel/threat-intel-notes.md

Mapped behaviors include:

- Network Service Discovery
- Brute Force
- Remote Services: SSH
- Remote Services: SMB
- PowerShell execution

## Recommended Actions

1. Escalate the case to Tier 2 for deeper investigation.
2. Preserve Windows logs, Linux logs, PCAP, and Nmap output.
3. Review whether any login from 192.168.56.111 succeeded.
4. Review PowerShell command-line activity and decode any encoded commands.
5. Restrict SMB access where it is not needed.
6. Harden SSH by disabling root login and password authentication where possible.
7. Enforce account lockout policies.
8. Use MFA for privileged accounts.
9. Add detections for repeated failed logins from the same source.
10. Add detections for encoded PowerShell execution.

## Final Conclusion

The evidence supports a realistic Tier 1 SOC case involving reconnaissance, failed authentication attempts, and suspicious command execution.

The most suspicious source was 192.168.56.111. The affected systems were Windows host 192.168.56.113 and Ubuntu host 192.168.56.121.

The case should be classified as Medium severity and escalated for additional investigation.
