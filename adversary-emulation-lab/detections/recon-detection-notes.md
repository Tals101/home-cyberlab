# Recon Detection Notes

## Phase

Recon

## Attack Activity

A controlled Nmap service/version scan was performed from Kali Linux against approved lab-owned systems.

Source:
- Kali Linux: 192.168.56.111

Targets:
- Ubuntu Server: 192.168.56.121
- Windows VM: 192.168.56.113

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Wazuh | May detect scanning or related endpoint/network activity | Not detected. Only unrelated SCA benchmark alerts were found |
| Sysmon | May capture network connection activity on the Windows endpoint | Partially detected. Sysmon Event ID 3 showed inbound SSH/network telemetry from Kali to Windows |
| Falco | Not applicable unless Kubernetes/container recon is performed | Not applicable |

## Detection Result

Overall Recon Detection Result:
- Partially detected

## Detection Summary

Wazuh did not produce a clear alert for the Nmap recon scan.

Sysmon produced useful network telemetry showing traffic from Kali Linux to the Windows VM over SSH. This supports the investigation, but it was not automatically labeled as Nmap or recon.

Falco was not applicable for this phase because this recon activity did not target Kubernetes or a container workload.

## Detection Gaps

- Wazuh did not clearly detect the scan
- Sysmon logged the network connection but did not classify it as recon
- No dedicated network IDS was used for this phase

## Evidence Files

- evidence/recon-scan-results.txt
- evidence/wazuh-recon-alert-search.txt
- evidence/sysmon-recon-alert-search.txt
- detections/wazuh-recon-detection-gap.md
- detections/sysmon-recon-detection-analysis.md
