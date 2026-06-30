# Lab 6: SOC Analyst Challenge

## Objective

This lab simulates a Tier 1 SOC investigation using real evidence collected from a controlled lab environment.

The lab includes:

- Windows logs
- Linux logs
- Real PCAP capture
- Nmap scan evidence
- Threat intelligence notes
- Investigation timeline
- Final incident report

## Lab Environment

| System | IP Address | Role |
|---|---:|---|
| Kali | 192.168.56.111 | Simulated attacker |
| Windows | 192.168.56.113 | Windows victim / log source |
| Ubuntu | 192.168.56.121 | Linux victim / log source |

## Activity Simulated

The lab includes both benign and suspicious activity.

### Benign Activity

- Successful SSH login to Ubuntu
- Normal sudo activity on Ubuntu
- Normal Windows commands such as whoami, hostname, ipconfig, and Get-Process

### Suspicious Activity

- Nmap reconnaissance from Kali
- Failed SSH login attempts against Ubuntu
- Failed SMB authentication attempts against Windows
- Encoded PowerShell execution on Windows

## Evidence Collected

| Evidence Type | Location |
|---|---|
| Windows process logs | windows-logs/windows-process-evidence.txt |
| Windows failed logons | windows-logs/windows-failed-logon-evidence.txt |
| Windows auth/account logs | windows-logs/windows-auth-account-evidence.txt |
| Linux auth logs | linux-logs/linux-auth-evidence.txt |
| PCAP file | pcap/lab6-soc-capture.pcap |
| PCAP summary | evidence/pcap-summary.txt |
| Nmap scan | evidence/nmap-recon-scan.txt |
| Threat intel notes | threat-intel/threat-intel-notes.md |
| Timeline | investigation/timeline.md |
| Tier 1 findings | investigation/tier1-findings.md |
| Final report | reports/final-incident-report.md |

## Investigation Questions Answered

This lab answers:

1. What happened?
2. How severe was it?
3. What evidence exists?
4. What should be done?

## Severity

Final severity: Medium

The activity was classified as Medium because there was evidence of reconnaissance, failed authentication attempts, and suspicious PowerShell execution, but no confirmed successful compromise or data theft.

## Final Conclusion

The evidence supports a realistic Tier 1 SOC case involving reconnaissance, failed authentication attempts, and suspicious command execution.

The most suspicious source was:

- 192.168.56.111

Affected systems:

- 192.168.56.113
- 192.168.56.121

The case should be escalated to Tier 2 for deeper review.
