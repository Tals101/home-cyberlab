# Lab 2: Threat Hunting with Wazuh - Final Report

## Lab Goal

The goal of this lab was to practice threat hunting with Wazuh instead of only reading alerts.

The lab focused on using Wazuh telemetry to investigate suspicious activity across authentication, reconnaissance, reverse-shell-style behavior, persistence, and privilege escalation.

## Lab Architecture

### Wazuh Server

Hostname: wazuh-server  
IP Address: 192.168.56.120  
Role: Wazuh manager, indexer, and dashboard

### Monitored Target

Hostname: wazuh-hunt-target  
IP Address: 192.168.56.118  
Role: Ubuntu Linux server running the Wazuh agent

### Attacker Machine

Hostname: Kali Linux  
IP Address: 192.168.56.111  
Role: Simulated attacker machine

## Simulated Activity

The following activity was generated during the lab:

1. Nmap scan from Kali to the monitored target
2. Failed SSH login attempts from Kali
3. Safe reverse-shell-style connection using bash and netcat
4. New local Linux user creation
5. Privilege change by adding the new user to the sudo group

## Hunt 1: Failed SSH Authentication

### Activity

Repeated failed SSH login attempts were generated from Kali against the monitored target.

### Hunt Focus

Authentication anomaly

### Evidence

- evidence/failed-ssh-auth-events.txt
- screenshots/failed-ssh-wazuh-alerts.png

### Detection Logic

- detections/failed-ssh-authentication-anomaly.md

### MITRE Mapping

- T1110 - Brute Force
- T1110.001 - Password Guessing

### Finding

Wazuh successfully collected and displayed failed SSH login events involving the invalid user wronguser.

## Hunt 2: Reconnaissance

### Activity

Kali was used to run an Nmap service/version scan against the monitored target.

### Hunt Focus

Reconnaissance and service discovery

### Evidence

- evidence/nmap-recon-command.txt
- evidence/kali-ip-wazuh-hunt.txt
- screenshots/kali-ip-wazuh-search.png

### Detection Logic

- detections/nmap-reconnaissance-hunt.md

### MITRE Mapping

- T1595 - Active Scanning
- T1595.002 - Vulnerability Scanning
- T1046 - Network Service Discovery

### Finding

Wazuh allowed the analyst to pivot on the Kali attacker IP address and review related security events.

## Hunt 3: Reverse-Shell-Style Activity

### Activity

The monitored target executed a safe test command using bash and netcat to connect back to Kali.

This did not open a real interactive shell. It only sent a test string to generate safe telemetry.

### Hunt Focus

Suspicious shell and network utility execution

### Evidence

- evidence/reverse-shell-audit-events.txt
- screenshots/reverse-shell-wazuh-events.png

### Detection Logic

- detections/reverse-shell-style-activity.md

### MITRE Mapping

- T1059 - Command and Scripting Interpreter
- T1059.004 - Unix Shell
- T1105 - Ingress Tool Transfer / Command and Control Utility Usage
- T1071 - Application Layer Protocol

### Finding

Auditd captured bash and netcat execution. Wazuh collected the audit events and made them searchable in the dashboard.

## Hunt 4: User Creation and Privilege Change

### Activity

A new local user named huntuser was created on the monitored target and added to the sudo group.

### Hunt Focus

Persistence and privilege escalation

### Evidence

- evidence/user-creation-privilege-audit-events.txt
- screenshots/user-creation-privilege-wazuh-events.png

### Detection Logic

- detections/user-creation-privilege-change.md

### MITRE Mapping

- T1136 - Create Account
- T1136.001 - Local Account
- T1098 - Account Manipulation
- T1548 - Abuse Elevation Control Mechanism

### Finding

Wazuh collected auditd events showing account creation, identity file modification, group file modification, and privilege change activity.

## Detection Logic Created

The following detection logic documents were created:

- detections/failed-ssh-authentication-anomaly.md
- detections/nmap-reconnaissance-hunt.md
- detections/reverse-shell-style-activity.md
- detections/user-creation-privilege-change.md

## MITRE ATT&CK Mappings Created

The following MITRE mapping documents were created:

- mitre-mappings/failed-ssh-mitre-mapping.md
- mitre-mappings/nmap-recon-mitre-mapping.md
- mitre-mappings/reverse-shell-mitre-mapping.md
- mitre-mappings/user-creation-privilege-mitre-mapping.md

## Investigation Notes Created

The following investigation notes were created:

- investigations/failed-ssh-investigation-note.md
- investigations/nmap-recon-investigation-note.md
- investigations/reverse-shell-investigation-note.md
- investigations/user-creation-privilege-investigation-note.md

## Analyst Summary

This lab confirmed that Wazuh can support active threat hunting across multiple Linux attack behaviors.

The lab showed how an analyst can:

- Start from an alert or suspicious IP address
- Pivot into related activity
- Review local Linux logs and auditd telemetry
- Map activity to MITRE ATT&CK
- Write investigation notes
- Separate raw evidence from detection logic and analysis

## Conclusion

The lab successfully met its objective.

Instead of only reviewing alerts, this project demonstrated a threat hunting workflow using Wazuh, Kali, a monitored Ubuntu endpoint, Linux authentication logs, auditd, and structured investigation notes.
