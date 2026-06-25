# Lab 2: Threat Hunting with Wazuh

## Goal

The goal of this lab was to practice threat hunting with Wazuh instead of only reviewing alerts.

This lab simulated attacker behavior from Kali Linux against a monitored Ubuntu Linux server and used Wazuh to hunt for suspicious activity.

## Lab Environment

### Wazuh Server

- Hostname: wazuh-server
- IP Address: 192.168.56.120
- Role: Wazuh manager, indexer, and dashboard

### Monitored Target

- Hostname: wazuh-hunt-target
- IP Address: 192.168.56.118
- Role: Ubuntu Linux endpoint running the Wazuh agent

### Attacker Machine

- Hostname: Kali Linux
- IP Address: 192.168.56.111
- Role: Simulated attacker machine

## Simulated Activity

The lab simulated the following activity:

- Nmap scan
- Failed SSH login attempts
- Reverse-shell-style connection attempt
- New local user creation
- Privilege change through sudo group assignment

## Hunt Categories

The hunt focused on:

- Authentication anomalies
- Reconnaissance
- Reverse-shell-style behavior
- Persistence
- Privilege escalation

## Outputs Created

This lab produced:

- Detection logic
- MITRE ATT&CK mappings
- Investigation notes
- Evidence files
- Screenshots
- Final report
- Workflow documentation

## Key Findings

### Failed SSH Authentication

Repeated failed SSH login attempts were generated from Kali against the monitored target.

Wazuh captured and displayed the authentication activity.

### Reconnaissance

Kali performed an Nmap scan against the monitored Ubuntu target.

Wazuh was used to pivot on the Kali attacker IP address and review related activity.

### Reverse-Shell-Style Activity

The target executed a safe bash and netcat test that connected back to Kali.

Auditd captured the process execution, and Wazuh made the events searchable.

### User Creation and Privilege Change

A new user named huntuser was created and added to the sudo group.

Wazuh captured auditd events related to account creation, identity file changes, group changes, and privilege changes.

## Project Structure

threat-hunting-with-wazuh/
- detections/
- evidence/
- investigations/
- mitre-mappings/
- reports/
- screenshots/
- scripts/

## Important Files

Final report:

reports/final-threat-hunting-with-wazuh-report.md

Workflow documentation:

reports/lab-workflow.md

Evidence inventory:

evidence/evidence-inventory.txt

## Conclusion

This lab successfully demonstrated a structured Wazuh threat hunting workflow.

Instead of only reading alerts, the lab showed how to generate suspicious activity, collect telemetry, search Wazuh, create detection logic, map behavior to MITRE ATT&CK, and document investigation findings.
