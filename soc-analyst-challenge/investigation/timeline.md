# Lab 6 SOC Analyst Challenge - Investigation Timeline

## Timeline of Activity

| Time UTC | Source | Event Type | Description | Evidence |
|---|---|---|---|---|
| 2026-06-30 15:54 | Windows Host / Ubuntu | Benign SSH Login | Analyst successfully logged into Ubuntu from the host machine. | linux-logs/linux-auth-evidence.txt |
| 2026-06-30 15:55 | Ubuntu | Benign Sudo Activity | Analyst ran sudo apt update as normal administrative activity. | linux-logs/linux-auth-evidence.txt |
| 2026-06-30 16:02 | Kali | Reconnaissance | Kali scanned Windows and Ubuntu using Nmap. | evidence/nmap-recon-scan.txt |
| 2026-06-30 16:05 | Kali to Ubuntu | Failed SSH Login | Failed SSH login attempts against invalid user oracle. | linux-logs/linux-auth-evidence.txt |
| 2026-06-30 16:06 | Kali to Ubuntu | Failed SSH Login | Failed SSH login attempts against invalid user test. | linux-logs/linux-auth-evidence.txt |
| 2026-06-30 16:07 | Kali to Ubuntu | Failed SSH Login | Failed SSH login attempts against root. | linux-logs/linux-auth-evidence.txt |
| Lab Capture Window | Kali to Windows/Ubuntu | Network Evidence | PCAP captured traffic between Kali, Windows, and Ubuntu during scan and login attempts. | pcap/lab6-soc-capture.pcap and evidence/pcap-summary.txt |
| Lab Capture Window | Windows | Suspicious Process Execution | Windows logged powershell.exe with EncodedCommand. | windows-logs/windows-process-evidence.txt |
| Lab Capture Window | Kali to Windows | Failed SMB Login | Failed SMB authentication attempts were generated against Windows. | windows-logs/windows-failed-logon-evidence.txt |

## Analyst Summary

The timeline shows a clear sequence:

1. Normal administrative activity occurred first.
2. Kali performed reconnaissance against Windows and Ubuntu.
3. Kali attempted failed SSH logins against Ubuntu.
4. Kali attempted failed SMB authentication against Windows.
5. Windows also recorded encoded PowerShell execution.
6. Network traffic was captured in a real PCAP during the activity.

This supports a Tier 1 SOC investigation involving reconnaissance, failed authentication, and suspicious command execution.
