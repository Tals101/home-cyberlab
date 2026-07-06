# Lab 8: Threat Intelligence Fusion Lab

## Goal

Operate like a real security analyst by researching indicators of compromise, reviewing reputation data, identifying malware labels, mapping possible MITRE ATT&CK techniques, and producing threat intelligence reports.

## IOC Types Reviewed

This lab reviewed:

- IP addresses
- Domains
- File hashes

## Research Sources Used

- VirusTotal
- AbuseIPDB
- MITRE ATT&CK

Note: AlienVault OTX was considered but not used because it required sign-in.

## Deliverables Created

- IOC Report
- Executive Summary
- Technical Findings
- Reputation Research Notes
- Malware Family Research
- MITRE ATT&CK Mapping
- Evidence Inventory
- Screenshot Evidence List
- Threat Intelligence Workflow
- Final Validation Summary

## Key Findings

Most indicators were assessed as benign, legitimate infrastructure, or harmless file artifacts.

The highest concern IOC was:

- 185.199.108.133

This IP had limited VirusTotal detection activity and multiple AbuseIPDB reports. The recommendation was to validate it against internal telemetry before blocking.

The EICAR hash was detected by many vendors, but it was identified as a benign antivirus test file.

The empty-file hashes were assessed as benign.

## Analyst Conclusion

No active compromise was confirmed. This lab demonstrated how threat intelligence analysts fuse reputation data, malware labels, and ATT&CK mappings into useful reports for both technical and executive audiences.
