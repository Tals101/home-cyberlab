# Lab 7: Adversary Emulation Detection Summary

## Lab Objective

This lab simulated a safe adversary emulation chain across approved lab systems and validated detection coverage across Wazuh, Sysmon, and Falco.

The goal was to understand which activities were detected, partially detected, or missed.

## Lab Scope

Approved lab targets:

| System | IP / Environment | Purpose |
|---|---|---|
| Kali Linux | 192.168.56.111 | Attack simulation workstation |
| Ubuntu Server | 192.168.56.121 | Linux target with Wazuh agent |
| Windows VM | 192.168.56.113 | Windows endpoint with Sysmon |
| Minikube detection-lab | Local Kubernetes lab | Container runtime testing with Falco |

Out of scope:

- Public IP addresses
- Production systems
- Company systems
- Neighbor networks
- Any non-lab target

## Detection Tools Used

| Tool | Purpose |
|---|---|
| Wazuh | Linux endpoint detection and alert review |
| Sysmon | Windows endpoint telemetry |
| Falco | Kubernetes/container runtime detection |

## Attack Chain Summary

| Phase | Activity | Tool Used for Detection | Result |
|---|---|---|---|
| Reconnaissance | Nmap scan from Kali | Wazuh / Sysmon | Wazuh not detected; Sysmon partially detected |
| Initial Access | Failed SSH login attempts | Wazuh | Detected |
| Persistence | Harmless cron job | Wazuh | Detected |
| Privilege Escalation | Safe sudo commands | Wazuh | Detected |
| Discovery | Host discovery commands | Wazuh | Partially detected |
| Collection | Fake file collection and archive | Wazuh | Not directly detected |
| Container Runtime | Interactive shell in Kubernetes pod | Falco | Detected |

## Key Findings

### Strong Detections

Wazuh successfully detected failed SSH login attempts, cron persistence activity, and sudo-based privileged activity.

Falco successfully detected an interactive bash shell spawned inside a Kubernetes container.

### Partial Detections

Sysmon partially detected reconnaissance activity through network connection telemetry.

Wazuh partially detected Discovery-related behavior through SCA findings, but did not directly alert on the exact discovery commands.

### Detection Gaps

Wazuh did not directly detect:

- Nmap reconnaissance against Ubuntu
- Basic Linux discovery commands
- Fake file collection activity
- Tar archive creation

These gaps show where additional Linux auditing, Wazuh rules, and File Integrity Monitoring could improve detection coverage.

## MITRE ATT&CK Coverage Highlights

| Technique | ID | Result |
|---|---|---|
| Network Service Discovery | T1046 | Partially detected by Sysmon |
| Password Guessing | T1110.001 | Detected by Wazuh |
| SSH | T1021.004 | Detected by Wazuh |
| Scheduled Task/Job | T1053 | Detected by Wazuh |
| Cron | T1053.003 | Detected by Wazuh |
| Sudo and Sudo Caching | T1548.003 | Detected by Wazuh |
| System Information Discovery | T1082 | Partially detected by Wazuh |
| Data from Local System | T1005 | Not directly detected |
| Archive Collected Data | T1560 | Not detected |
| Unix Shell | T1059.004 | Detected by Falco |

## Lessons Learned

This lab showed that detection tools may identify some activity directly while only giving indirect context for other activity.

Wazuh was effective for authentication, sudo, and crontab changes, but needed stronger command-level telemetry for discovery and collection.

Sysmon provided useful endpoint network telemetry for Windows.

Falco provided strong runtime visibility for interactive container shell activity.

## Recommended Improvements

- Add auditd-based command execution monitoring on Linux.
- Add Wazuh File Integrity Monitoring for selected lab directories.
- Create custom Wazuh rules for archive creation using tar, zip, or gzip.
- Create custom Wazuh rules for suspicious discovery command chains.
- Add Kubernetes audit logging for kubectl exec activity.
- Continue using Falco for container runtime detection.
- Build dashboards that summarize detection coverage by ATT&CK technique.

## Final Result

Lab 7 successfully produced a full adversary emulation workflow with evidence, detection analysis, MITRE ATT&CK mapping, and documented detection gaps.

This lab demonstrates practical blue-team skills across:

- Threat emulation
- Endpoint detection validation
- Alert review
- Detection gap analysis
- MITRE ATT&CK mapping
- Wazuh, Sysmon, and Falco operations
