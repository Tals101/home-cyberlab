# Final Validation Summary

## Lab

Lab 8: Threat Intelligence Fusion Lab

## Completion Status

Status: Complete

## Completed Work

The following work was completed:

- Created Lab 8 project folder structure
- Collected IP address, domain, and hash indicators
- Researched IP reputation using VirusTotal and AbuseIPDB
- Researched domain reputation using VirusTotal and resolved-IP AbuseIPDB checks
- Researched file hash reputation using VirusTotal
- Documented reputation findings
- Documented malware family findings
- Mapped findings to possible MITRE ATT&CK techniques
- Created IOC report
- Created executive summary
- Created technical findings report
- Created evidence inventory
- Created top-down threat intelligence workflow

## Key Analyst Findings

Most indicators were assessed as benign or legitimate infrastructure.

The highest concern indicator was:

- 185.199.108.133

This IP showed limited VirusTotal detection activity and multiple AbuseIPDB reports. The recommended action is to validate it against internal telemetry before blocking.

The EICAR hash was detected by many vendors, but it was confirmed to be a benign antivirus test artifact rather than real malware.

The empty-file hashes were assessed as benign.

## Final Analyst Conclusion

No active compromise was confirmed during this lab. The lab demonstrated how a security analyst can combine reputation sources, malware family labels, and MITRE ATT&CK mapping into a structured threat intelligence assessment.
