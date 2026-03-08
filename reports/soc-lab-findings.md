# SOC Lab Findings Report

## Summary
A home SOC lab was deployed using Wazuh to centralize endpoint logging and monitor suspicious activity. A Windows endpoint was connected to the SIEM, and reconnaissance activity was simulated using Nmap.

## Environment
- SIEM: Wazuh
- Host Platform: VirtualBox
- Server OS: Ubuntu Server
- Endpoint OS: Windows 10/11
- Attack Tool: Nmap

## Actions Performed
1. Installed Wazuh on Ubuntu Server
2. Connected Windows endpoint with Wazuh agent
3. Confirmed endpoint visibility in dashboard
4. Ran Nmap scan against target machine
5. Reviewed security events and alerts

## Observations
- Endpoint logs were successfully ingested into the SIEM
- Security dashboard displayed agent activity
- Network scan activity produced observable events for investigation

## Security Relevance
This lab demonstrates foundational SOC analyst skills:
- Log monitoring
- Alert triage
- Endpoint visibility
- Reconnaissance detection
- Security analysis

## Next Steps
- Enable Sysmon logging
- Add failed login monitoring
- Test brute-force detection
- Tune alert rules to reduce noise