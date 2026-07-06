# IOC Report

## Lab

Lab 8: Threat Intelligence Fusion Lab

## Report Purpose

This report summarizes the indicators of compromise reviewed during the lab, including IP addresses, domains, and file hashes. Each indicator was researched using public reputation sources and assigned an analyst verdict.

---

## IOC Summary Table

| IOC | Type | Reputation Summary | Verdict | Recommended Action |
|---|---|---|---|---|
| 8.8.8.8 | IP Address | Google public DNS infrastructure with abuse-report noise | Benign / informational | Monitor only |
| 1.1.1.1 | IP Address | Cloudflare public DNS infrastructure with significant abuse-report history | Benign / informational | Monitor only |
| 185.199.108.133 | IP Address | CDN/infrastructure IP with vendor and abuse-report activity | Suspicious | Validate with internal logs |
| google.com | Domain | Legitimate Google domain with no VT detections | Benign | Allow / monitor normally |
| cloudflare.com | Domain | Legitimate Cloudflare domain with no VT detections | Benign | Allow / monitor normally |
| github.com | Domain | Legitimate GitHub domain with no VT detections | Benign | Allow / monitor normally |
| 44d88612fea8a8f36de82e1278abb02f | File Hash | EICAR antivirus test file | Benign test artifact | Do not treat as real malware |
| d41d8cd98f00b204e9800998ecf8427e | File Hash | MD5 hash of empty file | Benign | No action needed |
| e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 | File Hash | SHA256 hash of empty file | Benign | No action needed |

---

## IP Address Findings

### 8.8.8.8

8.8.8.8 was reviewed as a public DNS IP address associated with Google. VirusTotal showed no vendor detections, while AbuseIPDB showed abuse reports tied to categories such as DDoS Attack, Port Scan, Hacking, and Brute-Force.

Analyst verdict: benign legitimate infrastructure, but monitor for suspicious internal traffic patterns.

### 1.1.1.1

1.1.1.1 was reviewed as a public DNS IP address associated with Cloudflare. VirusTotal showed no vendor detections, while AbuseIPDB showed a large number of abuse reports.

Analyst verdict: benign legitimate infrastructure, but monitor for suspicious internal traffic patterns.

### 185.199.108.133

185.199.108.133 showed a higher level of concern compared to the other IP indicators. VirusTotal showed one malicious vendor detection and one suspicious result. AbuseIPDB showed reports associated with Port Scan, Hacking, and Brute-Force.

Analyst verdict: suspicious. Validate against internal DNS, proxy, firewall, and endpoint telemetry before blocking.

---

## Domain Findings

### google.com

google.com showed no malicious VirusTotal detections. AbuseIPDB was reviewed against a resolved Google IP address and showed limited abuse-report noise.

Analyst verdict: benign legitimate domain.

### cloudflare.com

cloudflare.com showed no malicious VirusTotal detections. AbuseIPDB was reviewed against a resolved Cloudflare IP address and showed some historical abuse-report noise.

Analyst verdict: benign legitimate domain.

### github.com

github.com showed no malicious VirusTotal detections. AbuseIPDB was reviewed against a resolved GitHub IP address and showed one older report.

Analyst verdict: benign legitimate domain.

---

## Hash Findings

### 44d88612fea8a8f36de82e1278abb02f

This hash was associated with the EICAR antivirus test file. VirusTotal showed a high detection count, which is expected because EICAR is designed to test antivirus detection.

Analyst verdict: benign test artifact / security validation file.

### d41d8cd98f00b204e9800998ecf8427e

This MD5 hash is associated with an empty file. VirusTotal redirected the search to the corresponding SHA256 empty-file report.

Analyst verdict: benign empty file artifact.

### e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

This SHA256 hash is associated with an empty file. VirusTotal showed no vendor detections and listed the file size as 0 bytes.

Analyst verdict: benign empty file artifact.

---

## Overall Analyst Assessment

The researched indicators did not confirm active malware or a confirmed compromise. Most indicators were legitimate public infrastructure, legitimate domains, or benign file artifacts. The highest-priority IOC was 185.199.108.133 due to a small number of vendor detections and abuse-report activity.

Recommended next step: review internal security logs before taking enforcement action.
