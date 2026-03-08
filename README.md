# Home SOC Lab with Wazuh | SIEM Monitoring and Alert Investigation

![Wazuh Home Screen](screenshots/wazuh-home-screen.png)

## Project Summary
This project documents a home Security Operations Center (SOC) lab built with Wazuh, Ubuntu Server, VirtualBox, and a Windows endpoint. The lab was created to practice core SOC analyst skills such as log monitoring, endpoint visibility, alert triage, and investigation of suspicious activity generated through controlled testing.

## Why This Project Matters
This lab demonstrates practical, hands-on cybersecurity experience in a simulated SOC environment. It shows the ability to deploy a SIEM, connect endpoint telemetry, generate detectable activity, and investigate alerts in a structured way.

## Skills Demonstrated
- SIEM Administration
- Log Analysis
- Alert Monitoring
- Endpoint Visibility
- Threat Detection
- Security Investigation
- Network Reconnaissance Awareness
- Basic Incident Triage

## Objectives
- Build a functional SOC lab in a virtualized environment
- Deploy Wazuh for centralized security monitoring
- Connect a Windows endpoint and validate log ingestion
- Simulate suspicious activity for detection testing
- Review alerts and practice investigation workflows

## Lab Environment

### Technologies Used
- Wazuh
- Ubuntu Server
- Windows 10/11
- VirtualBox
- Nmap

### Components
- **Wazuh Server:** Hosted on Ubuntu Server for centralized monitoring and dashboard access
- **Windows Endpoint:** Configured with the Wazuh agent for endpoint telemetry
- **Attacker System:** Used to simulate reconnaissance activity against the lab environment

## Setup Steps
1. Created an Ubuntu Server virtual machine in VirtualBox
2. Installed Wazuh server and dashboard
3. Created a Windows virtual machine
4. Installed and configured the Wazuh agent on the Windows endpoint
5. Verified log ingestion in the Wazuh dashboard
6. Simulated attack activity using Nmap
7. Investigated resulting alerts in the SIEM dashboard

## What I Did
- Built an Ubuntu Server virtual machine in VirtualBox
- Installed and configured the Wazuh server and dashboard
- Created a Windows virtual machine and installed the Wazuh agent
- Verified endpoint connectivity and log visibility in the dashboard
- Simulated reconnaissance activity using Nmap
- Reviewed generated alerts and investigated visible security events

## Detection Use Case

### Reconnaissance Activity
A scan was performed against the target system to generate detectable activity in the lab. This allowed review of how suspicious behavior can appear in centralized monitoring and how alerts can support analyst investigation.

```bash
nmap -A <target-ip>
```

## Key Outcomes
- Successfully deployed a working SIEM environment
- Connected endpoint telemetry to a centralized monitoring platform
- Verified agent communication and log ingestion
- Generated and reviewed security-relevant activity in the dashboard
- Practiced foundational SOC analyst tasks including alert review and investigation

## Security Relevance
This project demonstrates several foundational blue-team concepts:
- Monitoring endpoint-generated events
- Investigating suspicious activity in a SIEM
- Validating endpoint visibility
- Understanding how reconnaissance may appear in logs
- Building familiarity with analyst workflows in a controlled environment

## Lessons Learned
- Learned how to deploy and validate a basic SIEM lab
- Improved understanding of endpoint telemetry and alert visibility
- Gained experience reviewing suspicious activity in a monitoring platform
- Strengthened familiarity with SOC workflows such as triage and investigation
- Saw how controlled attack simulation can be used to test visibility and detection

## Future Improvements
- Enable Sysmon for enhanced Windows event visibility
- Add failed login monitoring and brute-force detection scenarios
- Create custom Wazuh detection rules
- Expand the lab with additional monitored endpoints
- Perform more structured alert tuning to reduce noise





