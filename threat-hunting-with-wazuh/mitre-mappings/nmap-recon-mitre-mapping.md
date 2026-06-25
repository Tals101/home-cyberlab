# MITRE ATT&CK Mapping: Reconnaissance Activity

## Activity Observed

Kali Linux was used to perform an Nmap service scan against the monitored Ubuntu target server.

The Kali attacker IP was later searched in Wazuh to identify related activity.

## Source System

Kali Linux
IP Address: 192.168.56.111

## Target System

wazuh-hunt-target
IP Address: 192.168.56.118

## Technique Mapping

### T1595 - Active Scanning

The Nmap scan represents active reconnaissance against a target system.

### T1595.002 - Vulnerability Scanning

The service/version scan can help identify exposed services and software versions that may later be targeted.

### T1046 - Network Service Discovery

The scan was used to identify listening services on the monitored target.

## Supporting Evidence

- evidence/nmap-recon-command.txt
- evidence/kali-ip-wazuh-hunt.txt
- evidence/lab-ip-inventory.txt
- detections/nmap-reconnaissance-hunt.md
- screenshots/kali-ip-wazuh-search.png

## Hunt Result

Wazuh showed events associated with the Kali attacker IP address after reconnaissance and authentication probing activity.

## Analyst Notes

Reconnaissance should be reviewed closely when followed by additional suspicious behavior such as failed logins, reverse shell attempts, privilege escalation, or new account creation.
