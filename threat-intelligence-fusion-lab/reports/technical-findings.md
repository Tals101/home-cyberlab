# Technical Findings

## Lab

Lab 8: Threat Intelligence Fusion Lab

## Purpose

This report provides the technical analyst findings from the threat intelligence review. It summarizes reputation results, malware-family analysis, ATT&CK mapping, and recommended defensive actions.

---

## Research Sources

The following public sources were used during the investigation:

- VirusTotal
- AbuseIPDB
- MITRE ATT&CK

AlienVault OTX was listed as a planned source, but it required sign-in and was not used for this lab.

---

## IOC Categories Reviewed

The investigation reviewed three categories of indicators:

- IP addresses
- Domains
- File hashes

---

## IP Address Technical Findings

### 8.8.8.8

- Type: IP Address
- Associated Provider: Google Public DNS
- VirusTotal Result: 0/91 vendor detections
- AbuseIPDB Result: 150 reports from 82 sources
- Reported Abuse Categories: DDoS Attack, Port Scan, Hacking, Brute-Force
- Technical Assessment: The IP belongs to legitimate public DNS infrastructure. Abuse reports are likely related to shared internet infrastructure noise or misuse by third parties.
- Recommended Action: Monitor DNS traffic patterns. Do not block automatically.

### 1.1.1.1

- Type: IP Address
- Associated Provider: Cloudflare Public DNS
- VirusTotal Result: 0/91 vendor detections
- AbuseIPDB Result: 1,172 reports from 177 sources
- Reported Abuse Categories: Hacking, Port Scan, Web App Attack, Brute-Force
- Technical Assessment: The IP belongs to legitimate public DNS infrastructure. The number of abuse reports is high, but public DNS services are commonly seen in many types of traffic.
- Recommended Action: Monitor for unusual DNS behavior, tunneling, beaconing, or unexpected endpoint usage. Do not block automatically.

### 185.199.108.133

- Type: IP Address
- Associated Infrastructure: CDN/infrastructure IP
- VirusTotal Result: 1/91 malicious vendor detection and one suspicious result
- AbuseIPDB Result: 423 reports from 75 sources
- Reported Abuse Categories: Port Scan, Hacking, Brute-Force
- Technical Assessment: This was the highest-risk IP reviewed in the lab. The combination of vendor detection and abuse-report activity makes this worth validating against internal logs.
- Recommended Action: Review firewall, DNS, proxy, and endpoint logs for connections to this IP. Block only if internal evidence supports malicious use.

---

## Domain Technical Findings

### google.com

- Type: Domain
- VirusTotal Result: 0/92 vendor detections
- AbuseIPDB Context: Resolved IP 142.251.45.206 showed 15 reports from 4 sources
- Technical Assessment: Legitimate Google domain. AbuseIPDB findings were tied to resolved infrastructure rather than the domain itself.
- Recommended Action: Allow normally. Investigate only if internal telemetry shows suspicious activity.

### cloudflare.com

- Type: Domain
- VirusTotal Result: 0/91 vendor detections
- AbuseIPDB Context: Resolved IP 104.16.132.229 showed 26 reports from 10 sources
- Technical Assessment: Legitimate Cloudflare domain. Reports are likely infrastructure noise unless tied to suspicious internal activity.
- Recommended Action: Allow normally. Monitor for suspicious proxy, CDN, or DNS activity.

### github.com

- Type: Domain
- VirusTotal Result: 0/91 vendor detections
- AbuseIPDB Context: Resolved IP 140.82.113.4 showed 1 report from 1 source
- Technical Assessment: Legitimate code-hosting and developer platform. GitHub can be abused by attackers to host tools or payloads, but no malicious evidence was confirmed in this lab.
- Recommended Action: Allow normally. Monitor for suspicious downloads, unknown repositories, credential theft tools, or unauthorized code pulls.

---

## File Hash Technical Findings

### 44d88612fea8a8f36de82e1278abb02f

- Type: MD5 File Hash
- File Identified: EICAR antivirus test file
- VirusTotal Result: 64/67 vendor detections
- Malware Family: EICAR test file
- Technical Assessment: This is not real malware. It is a known antivirus test artifact designed to trigger security tools.
- Recommended Action: Treat as a validation file. Do not classify as active malware infection.

### d41d8cd98f00b204e9800998ecf8427e

- Type: MD5 File Hash
- File Identified: Empty file
- VirusTotal Result: Redirected to SHA256 empty-file report
- Malware Family: None identified
- Technical Assessment: This hash represents empty file content.
- Recommended Action: No action needed unless found in suspicious context.

### e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

- Type: SHA256 File Hash
- File Identified: Empty file
- VirusTotal Result: 0/60 vendor detections
- Malware Family: None identified
- Technical Assessment: This hash represents empty file content and cannot perform malicious behavior by itself.
- Recommended Action: No action needed unless found in suspicious context.

---

## MITRE ATT&CK Mapping

| Technique | Technique ID | Related Evidence | Confidence |
|---|---|---|---|
| Application Layer Protocol | T1071 | Public DNS and web infrastructure review | Low |
| Web Protocols | T1071.001 | google.com, cloudflare.com, github.com | Low |
| Network Service Discovery | T1046 | Port scan abuse categories | Medium |
| Brute Force | T1110 | Brute-force abuse categories | Medium |
| Proxy | T1090 | Cloudflare/CDN infrastructure context | Low |
| Ingress Tool Transfer | T1105 | GitHub as possible software delivery path | Low |

---

## Analyst Conclusion

The lab successfully fused reputation data, malware-family labels, and ATT&CK technique mapping into a structured intelligence assessment. The investigation did not confirm active compromise. Most indicators were benign or legitimate infrastructure. The main suspicious indicator was 185.199.108.133, which should be validated against internal telemetry before any blocking or containment action.
