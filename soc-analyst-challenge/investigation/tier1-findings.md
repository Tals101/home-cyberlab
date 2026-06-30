# Lab 6 SOC Analyst Challenge - Tier 1 Findings

## 1. What Happened?

A simulated attacker system, Kali at 192.168.56.111, performed reconnaissance and authentication attempts against two lab victims:

- Windows victim: 192.168.56.113
- Ubuntu victim: 192.168.56.121

The activity included:

- Nmap scanning against Windows and Ubuntu
- Failed SSH login attempts against Ubuntu
- Failed SMB login attempts against Windows
- Encoded PowerShell execution on the Windows host
- Real packet capture collected during the activity

The lab also included benign activity so the investigation was not based only on malicious events. Benign activity included:

- Successful analyst SSH login to Ubuntu
- Normal sudo apt update activity
- Normal Windows commands such as whoami, hostname, ipconfig, and Get-Process

## 2. How Severe?

Severity: Medium

Reason:

This activity should be treated as Medium severity in a Tier 1 SOC investigation because there is evidence of reconnaissance and repeated failed authentication attempts from the same source system.

The activity does not currently prove full compromise because:

- No confirmed successful attacker login was identified
- No confirmed malware execution was identified
- No confirmed data theft was identified
- The activity occurred in a controlled lab environment

However, the activity is still suspicious because:

- One source IP, 192.168.56.111, scanned multiple hosts
- The same source attempted authentication against Linux and Windows services
- Administrative or common usernames were attempted
- Encoded PowerShell was observed on the Windows endpoint

## 3. What Evidence Exists?

### Windows Evidence

Evidence files:

- windows-logs/windows-process-evidence.txt
- windows-logs/windows-failed-logon-evidence.txt
- windows-logs/windows-auth-account-evidence.txt

Key Windows evidence:

- Security Event ID 4688 process creation logs
- PowerShell execution with EncodedCommand
- Failed Windows authentication activity
- SMB-related failed login attempts

### Linux Evidence

Evidence file:

- linux-logs/linux-auth-evidence.txt

Key Linux evidence:

- Successful SSH login for analyst from 192.168.56.1
- Normal sudo apt update activity
- Failed SSH attempts from 192.168.56.111
- Invalid users attempted: oracle and test
- Root login attempt from 192.168.56.111

### Network Evidence

Evidence files:

- pcap/lab6-soc-capture.pcap
- evidence/pcap-summary.txt
- evidence/nmap-recon-scan.txt

Key network evidence:

- Nmap scan from Kali
- Traffic between 192.168.56.111 and 192.168.56.113
- Traffic between 192.168.56.111 and 192.168.56.121
- SSH traffic to Ubuntu
- SMB traffic to Windows

### Threat Intel Evidence

Evidence file:

- threat-intel/threat-intel-notes.md

Mapped behaviors:

- Network Service Discovery
- Brute Force
- Remote Services: SSH
- Remote Services: SMB
- PowerShell execution

## 4. What Should Be Done?

Recommended Tier 1 SOC actions:

1. Escalate the case to Tier 2 for deeper review.
2. Block or isolate the suspicious source IP 192.168.56.111 if this were a real environment.
3. Review Windows failed logon events for targeted usernames.
4. Review Linux SSH logs for additional failed or successful login attempts.
5. Confirm whether any login from the suspicious source IP succeeded.
6. Review PowerShell process creation logs and decode any encoded command.
7. Preserve the PCAP and endpoint logs as evidence.
8. Check whether Windows SMB access should be restricted.
9. Check whether SSH password login should be disabled or hardened.
10. Recommend MFA, strong passwords, and account lockout policies.

## Final Tier 1 Analyst Conclusion

The evidence supports a simulated multi-host attack pattern from Kali host 192.168.56.111.

The activity began with reconnaissance, followed by failed authentication attempts against Linux SSH and Windows SMB. Windows also recorded encoded PowerShell execution. Based on the available evidence, this should be treated as a Medium severity suspicious activity case and escalated for further investigation.

