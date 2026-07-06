# Reputation Research

## Research Sources Used

- VirusTotal
- AbuseIPDB
- MITRE ATT&CK

Note: AlienVault OTX was considered but not used because it required sign-in.

---

## IP Address Reputation

### IOC: 8.8.8.8

- Type: IP Address
- Reputation: Legitimate public DNS infrastructure with mixed abuse-report history
- Malicious Detections: VirusTotal showed 0/91 vendor detections. AbuseIPDB showed 150 abuse reports from 82 sources, including recent reports.
- Associated Activity: Public DNS resolver activity; abuse reports included DDoS Attack, Port Scan, Hacking, and Brute-Force categories.
- Notes: 8.8.8.8 is associated with Google Public DNS. Although VirusTotal did not show vendor detections, AbuseIPDB contained recent community abuse reports. Because this is widely used public infrastructure, this IOC should not be automatically blocked without additional context.
- Analyst Verdict: Benign / legitimate infrastructure, but monitor for suspicious internal traffic patterns.

### IOC: 1.1.1.1

- Type: IP Address
- Reputation: Legitimate public DNS infrastructure with significant abuse-report history
- Malicious Detections: VirusTotal showed 0/91 vendor detections. AbuseIPDB showed 1,172 abuse reports from 177 sources, including recent reports.
- Associated Activity: Public DNS resolver activity; abuse reports included Hacking, Port Scan, Web App Attack, and Brute-Force categories.
- Notes: 1.1.1.1 is associated with Cloudflare public DNS. Although VirusTotal did not show vendor detections, AbuseIPDB contained many community abuse reports. Because this is widely used public infrastructure, this IOC should not be automatically blocked without additional context.
- Analyst Verdict: Benign / legitimate infrastructure, but monitor for suspicious internal traffic patterns.

### IOC: 185.199.108.133

- Type: IP Address
- Reputation: CDN/infrastructure IP with elevated abuse-report history
- Malicious Detections: VirusTotal showed 1/91 vendor detection, with one additional vendor marking the IP as suspicious. AbuseIPDB showed 423 abuse reports from 75 sources, including recent reports.
- Associated Activity: Abuse reports included Port Scan, Hacking, and Brute-Force categories.
- Notes: 185.199.108.133 appears associated with Fastly/CDN infrastructure. Because it has both vendor detection activity and abuse-report history, this IOC should be treated with more caution than the public DNS IPs. Blocking should depend on business context, hostname resolution, and internal traffic evidence.
- Analyst Verdict: Suspicious / monitor and validate with internal logs before blocking.

---

## Domain Reputation

### IOC: google.com

- Type: Domain
- Reputation: Legitimate major technology/search domain
- Malicious Detections: VirusTotal showed 0/92 vendor detections for the URL. AbuseIPDB was reviewed against a resolved Google IP address, 142.251.45.206, which showed 15 reports from 4 sources.
- Associated Activity: Normal web/search activity; resolved IP abuse reports included Port Scan, Hacking, and Brute-Force categories.
- Notes: google.com is legitimate Google infrastructure. The VirusTotal result showed no malicious vendor detections. AbuseIPDB results were tied to a resolved IP address rather than the domain itself, so the abuse reports should be treated as infrastructure noise unless internal logs show suspicious activity.
- Analyst Verdict: Benign / legitimate domain.

### IOC: cloudflare.com

- Type: Domain
- Reputation: Legitimate major CDN, DNS, and security services domain
- Malicious Detections: VirusTotal showed 0/91 vendor detections for the domain. AbuseIPDB was reviewed against a resolved Cloudflare IP address, 104.16.132.229, which showed 26 reports from 10 sources.
- Associated Activity: Normal CDN, DNS, and web security infrastructure activity; resolved IP abuse reports included Web Spam, Port Scan, Brute-Force, Exploited Host, Phishing, Email Spam, Hacking, and Spoofing categories.
- Notes: cloudflare.com is legitimate Cloudflare infrastructure. The VirusTotal result showed no malicious vendor detections. AbuseIPDB results were tied to a resolved IP address rather than the domain itself, so the reports should be treated as historical infrastructure noise unless internal telemetry shows suspicious activity.
- Analyst Verdict: Benign / legitimate domain.

### IOC: github.com

- Type: Domain
- Reputation: Legitimate developer platform and code-hosting domain
- Malicious Detections: VirusTotal showed 0/91 vendor detections for the domain. AbuseIPDB was reviewed against a resolved GitHub IP address, 140.82.113.4, which showed 1 report from 1 source.
- Associated Activity: Normal code-hosting, developer collaboration, repository access, and software delivery activity; resolved IP abuse report included Port Scan.
- Notes: github.com is legitimate GitHub infrastructure. The VirusTotal result showed no malicious vendor detections. AbuseIPDB results were tied to a resolved IP address rather than the domain itself, and only showed one older report. This should be treated as low-risk infrastructure noise unless internal logs show suspicious GitHub usage, such as malware download, credential theft tooling, or suspicious repository access.
- Analyst Verdict: Benign / legitimate domain.

---

## Hash Reputation

### IOC: 44d88612fea8a8f36de82e1278abb02f

- Type: File Hash
- Reputation: Known antivirus test file
- Malicious Detections: VirusTotal showed 64/67 vendor detections. The file was identified as eicar.com-11535 with a size of 68 bytes.
- Associated Malware Family: EICAR test file
- Notes: This hash is associated with the EICAR antivirus test file. EICAR is not real malware and does not infect systems. It is intentionally detected by antivirus engines to validate that security controls are working properly. The high detection count is expected.
- Analyst Verdict: Benign test artifact / security validation file.

### IOC: d41d8cd98f00b204e9800998ecf8427e

- Type: File Hash
- Reputation: Known MD5 hash of an empty file
- Malicious Detections: VirusTotal redirected this MD5 hash to the corresponding SHA256 empty-file report, which showed 0 vendor detections and a file size of 0 bytes.
- Associated Malware Family: None identified
- Notes: This MD5 hash is commonly associated with an empty file. VirusTotal redirected the search to the SHA256 hash for the same empty-file content. An empty file cannot exhibit malicious behavior by itself, and no malware family was identified.
- Analyst Verdict: Benign / empty file artifact.

### IOC: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

- Type: File Hash
- Reputation: Known empty file hash
- Malicious Detections: VirusTotal showed 0/60 vendor detections. The file size was listed as 0 bytes.
- Associated Malware Family: None identified
- Notes: This SHA256 hash is commonly associated with an empty file. VirusTotal noted that the report corresponds to an empty file and that it cannot exhibit malicious behavior by itself. No malware family was identified.
- Analyst Verdict: Benign / empty file artifact.




