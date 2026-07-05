# Wazuh Recon Detection Analysis

## Phase

Recon

## Activity Tested

A controlled Nmap service/version scan was performed from Kali Linux against approved lab targets.

Source:
- Kali Linux: 192.168.56.111

Targets:
- Ubuntu Server: 192.168.56.121
- Windows VM: 192.168.56.113

## Wazuh Search Result

Wazuh returned alerts related to the Ubuntu endpoint, but the alerts were not specific to the recon scan.

Observed alert type:
- SCA / CIS Ubuntu benchmark alerts
- Agent: ubuntu-lab7
- Target IP: 192.168.56.121

## Detection Decision

Result: Not Detected

## Reason

No clear Wazuh alert was found for:

- nmap
- scan
- network service discovery
- T1046
- Kali source IP 192.168.56.111 performing recon

The Wazuh alerts found were unrelated configuration assessment alerts, not recon detection alerts.

## Detection Gap

Wazuh did not clearly detect the basic Nmap recon activity in this lab configuration.

## Improvement Ideas

Possible ways to improve coverage:

- Add network IDS visibility such as Suricata or Zeek
- Enable more detailed firewall/network logging on the Ubuntu endpoint
- Add custom Wazuh rules for scan-like patterns if logs are available
- Correlate repeated connection attempts from one source IP
- Use Sysmon network telemetry for Windows-side visibility

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Discovery | Network Service Discovery | T1046 | Not detected by Wazuh |
| Discovery | Remote System Discovery | T1018 | Not detected by Wazuh |
