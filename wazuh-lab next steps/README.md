# 🛡️ Brute-Force Detection (Wazuh SIEM Enhancement)

## Project Summary
This project builds on an existing home Security Operations Center (SOC) lab by implementing a brute-force detection use case using Wazuh. The focus was on identifying repeated failed Windows authentication attempts and converting raw log data into a meaningful, high-severity security alert through correlation-based detection logic.

## Why This Project Matters
This project demonstrates the transition from basic log monitoring to detection engineering. It highlights the ability to analyze authentication events, simulate attack behavior, and create custom SIEM rules that identify suspicious patterns such as brute-force login attempts.

## Skills Demonstrated
- SIEM Rule Development (Wazuh)
- Log Correlation
- Alert Tuning
- Windows Security Event Analysis
- Threat Detection
- Security Investigation
- Incident Triage
- Troubleshooting & Debugging

## Objectives
- Detect repeated failed login attempts (Event ID 4625)
- Create a custom Wazuh rule for brute-force detection
- Simulate brute-force behavior on a Windows endpoint
- Validate alert generation in the Wazuh dashboard
- Improve signal-to-noise ratio through rule tuning

## Lab Environment

### Technologies Used
- Wazuh
- Ubuntu Server
- Windows 10/11
- VirtualBox

### Components
- **Wazuh Server:** Centralized SIEM for log ingestion, correlation, and alerting
- **Windows Endpoint:** Generates authentication logs and telemetry
- **Wazuh Agent:** Collects and forwards Windows Security logs to the SIEM

## Setup Steps
1. Verified Windows Security logs were being ingested into Wazuh
2. Generated failed login attempts on the Windows endpoint
3. Identified relevant Wazuh rule for failed authentication (Rule ID 60122)
4. Created a custom correlation rule in `local_rules.xml`
5. Restarted Wazuh manager and validated configuration
6. Re-ran attack simulation to trigger detection
7. Confirmed high-severity alert generation in the dashboard

## What I Did
- Analyzed Windows Security logs to identify failed authentication events
- Simulated brute-force behavior using repeated failed login attempts
- Developed a custom Wazuh detection rule using frequency and timeframe conditions
- Troubleshot agent connectivity and rule syntax issues
- Validated detection accuracy within the Wazuh dashboard

## Detection Use Case

### Brute-Force Authentication Attempt
Multiple failed login attempts were generated within a short time window to simulate brute-force behavior.

### Detection Logic
- **Event ID:** 4625 (failed login)
- **Trigger Rule:** 60122
- **Threshold:** 5 failed attempts
- **Timeframe:** 60 seconds
- **Alert Level:** 12

## Key Outcomes
- Successfully detected repeated failed login attempts
- Built a correlation-based detection rule in Wazuh
- Generated high-severity alerts based on authentication patterns
- Validated SIEM detection capability using simulated attack activity
- Strengthened understanding of authentication-based threats

## Security Relevance
This project demonstrates key blue-team and detection engineering concepts:
- Identifying brute-force attack patterns in authentication logs
- Correlating multiple low-level events into a high-confidence alert
- Enhancing visibility into endpoint authentication activity
- Building detection logic within a SIEM platform

## Lessons Learned
- Learned how to create and validate custom Wazuh rules
- Improved understanding of Windows authentication event logging
- Gained experience troubleshooting SIEM ingestion and configuration issues
- Understood the importance of correlation in reducing alert noise
- Saw how repeated low-level events can indicate higher-risk behavior
