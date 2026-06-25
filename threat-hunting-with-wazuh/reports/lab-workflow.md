# Lab Workflow: Threat Hunting with Wazuh

## Top-Down Lab Architecture

Kali Linux Attacker
192.168.56.111

        |
        v

Monitored Ubuntu Target
wazuh-hunt-target
192.168.56.118

        |
        v

Wazuh Agent

        |
        v

Wazuh Server
wazuh-server
192.168.56.120

        |
        v

Wazuh Dashboard

        |
        v

Threat Hunting Analysis


## Top-Down Hunting Workflow

Generate Simulated Activity

        |
        v

Target Records Logs

        |
        v

Wazuh Agent Collects Logs

        |
        v

Wazuh Server Receives Events

        |
        v

Analyst Searches Wazuh Dashboard

        |
        v

Create Detection Logic

        |
        v

Map Activity to MITRE ATT&CK

        |
        v

Write Investigation Notes

        |
        v

Create Final Report


## Hunt Categories

Threat Hunting with Wazuh

        |
        +--> Authentication Anomalies
        |        |
        |        v
        |    Failed SSH Logins
        |
        +--> Reconnaissance
        |        |
        |        v
        |    Nmap Scan
        |
        +--> Reverse-Shell-Style Activity
        |        |
        |        v
        |    Bash and Netcat Execution
        |
        +--> Persistence
        |        |
        |        v
        |    New Local User Creation
        |
        +--> Privilege Escalation
                 |
                 v
             Sudo Group Assignment


## Evidence Flow

Raw Activity

        |
        v

Linux Logs and auditd

        |
        v

Wazuh Events

        |
        v

Evidence Files and Screenshots

        |
        v

Detection Logic

        |
        v

MITRE ATT&CK Mapping

        |
        v

Investigation Notes

        |
        v

Final Report


## Summary

This workflow shows how simulated attacker activity moves from Kali to the monitored Ubuntu target, then into Wazuh through the agent, and finally into analyst review.

The lab follows a structured threat hunting process:

1. Generate activity
2. Collect logs
3. Search Wazuh
4. Save evidence
5. Create detection logic
6. Map to MITRE ATT&CK
7. Write investigation notes
8. Build the final report
