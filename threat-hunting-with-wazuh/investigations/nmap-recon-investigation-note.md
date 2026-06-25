# Investigation Note: Reconnaissance Activity from Kali

## Investigation Title

Nmap Reconnaissance Against Wazuh-Monitored Linux Server

## Date

2026-06-23

## Summary

During this hunt, Kali Linux was used to perform an Nmap service/version scan against the monitored Ubuntu target server.

The purpose was to simulate attacker reconnaissance and then use Wazuh to search for related activity from the Kali source IP address.

## Systems Involved

### Attacker Machine

Kali Linux  
IP Address: 192.168.56.111

### Target Machine

Hostname: wazuh-hunt-target  
IP Address: 192.168.56.118

### Detection Platform

Hostname: wazuh-server  
IP Address: 192.168.56.120

## Observed Activity

An Nmap scan was executed from Kali against the monitored target.

Command used:

nmap -sV -Pn 192.168.56.118 -oN ~/threat-hunting-wazuh-evidence/nmap-scan-target.txt

The Kali source IP was later searched in the Wazuh dashboard:

192.168.56.111

Wazuh returned events associated with the Kali attacker IP.

## Evidence Reviewed

- evidence/nmap-recon-command.txt
- evidence/kali-ip-wazuh-hunt.txt
- evidence/lab-ip-inventory.txt
- detections/nmap-reconnaissance-hunt.md
- mitre-mappings/nmap-recon-mitre-mapping.md
- screenshots/kali-ip-wazuh-search.png

## Hunt Category

Reconnaissance

## MITRE ATT&CK Mapping

- T1595 - Active Scanning
- T1595.002 - Vulnerability Scanning
- T1046 - Network Service Discovery

## Analyst Assessment

The Nmap scan is consistent with reconnaissance and service discovery activity.

In a real environment, this activity would be suspicious if it came from an unknown or unauthorized source, especially if followed by authentication attempts, exploitation attempts, or privilege escalation behavior.

## Recommended Response

- Confirm whether the source IP is authorized to scan the network
- Review other events from the same source IP
- Check whether failed logins or exploitation attempts followed the scan
- Restrict unnecessary exposed services
- Monitor for repeated scanning behavior
- Add network-based detection if available

## Conclusion

The reconnaissance hunt confirmed that Wazuh can be used to pivot from a suspicious source IP and review related events. This supports the goal of becoming a threat hunter rather than only reading isolated alerts.
