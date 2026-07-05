# Sysmon Recon Detection Analysis

## Phase

Recon

## Activity Tested

A controlled Nmap service/version scan was performed from Kali Linux against approved lab targets.

Source:
- Kali Linux: 192.168.56.111

Windows Target:
- Windows VM: 192.168.56.113

## Sysmon Search Result

Sysmon produced Event ID 3 network connection telemetry related to the activity.

Observed event details:

- Provider: Microsoft-Windows-Sysmon
- Event ID: 3
- Event type: Network connection detected
- RuleName: SSH
- Source IP: 192.168.56.111
- Destination IP: 192.168.56.113
- Destination port: 22
- Destination service: SSH
- Destination hostname: WIN-MALWARE-LAB

## Detection Decision

Result: Partially Detected

## Reason

Sysmon captured network connection telemetry from the Kali attacker machine to the Windows VM.

However, Sysmon did not identify the activity as Nmap, scanning, or MITRE ATT&CK T1046 by itself. The event provides useful evidence, but analyst interpretation is required.

## Detection Gap

Sysmon logged the connection, but there was no high-confidence alert labeling the activity as recon or port scanning.

## Improvement Ideas

Possible ways to improve coverage:

- Add a SIEM correlation rule for repeated inbound connections from the same source IP
- Add Windows Firewall logging
- Forward Sysmon logs into Wazuh for centralized alerting
- Add a custom Wazuh rule for Sysmon Event ID 3 patterns
- Add Suricata or Zeek for stronger network scan detection

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Discovery | Network Service Discovery | T1046 | Partially detected by Sysmon |
| Discovery | Remote System Discovery | T1018 | Partially detected by Sysmon |
