# Home SOC Lab with Wazuh

## Overview
This project documents a home Security Operations Center (SOC) lab built using Wazuh, VirtualBox, Ubuntu Server, and a Windows endpoint. The lab was designed to simulate basic SOC operations, including log collection, security monitoring, alert investigation, and attack detection.

## Objectives
- Build a basic SOC lab environment
- Configure a SIEM platform for centralized log monitoring
- Connect a Windows endpoint to the SIEM
- Simulate reconnaissance activity using Nmap
- Review and analyze generated alerts

## Lab Environment

### Tools and Technologies
- Wazuh
- VirtualBox
- Ubuntu Server
- Windows 10/11
- Nmap

### Architecture
The lab consists of:
- **Wazuh Server** running on Ubuntu Server
- **Windows Endpoint** with Wazuh agent installed
- **Attacker System** using Nmap to simulate reconnaissance

## Setup Steps
1. Created an Ubuntu Server virtual machine in VirtualBox
2. Installed Wazuh server and dashboard
3. Created a Windows virtual machine
4. Installed and configured the Wazuh agent on the Windows endpoint
5. Verified log ingestion in the Wazuh dashboard
6. Simulated attack activity using Nmap
7. Investigated resulting alerts in the SIEM dashboard

## Attack Simulation

### Reconnaissance Test
The following command was used to simulate scanning activity:

```bash
nmap -A <target-ip>
```

This generated detectable network activity that was visible in the SIEM.

## Key Outcomes
- Successfully deployed a working SIEM environment
- Connected endpoint telemetry to the Wazuh server
- Observed and reviewed security alerts
- Practiced basic SOC analyst tasks such as alert triage and log review


## Lessons Learned
- Gained hands-on experience with SIEM deployment and monitoring
- Improved understanding of endpoint telemetry and alert analysis
- Learned how reconnaissance activity appears in security logs
- Strengthened familiarity with SOC workflows

## Future Improvements
- Add brute-force login detection
- Add Sysmon for enhanced Windows logging
- Create custom detection rules
- Expand lab with additional endpoints

## Skills Demonstrated
- SIEM Administration
- Log Analysis
- Alert Monitoring
- Threat Detection
- Endpoint Visibility
- Network Reconnaissance
- Security Investigation


