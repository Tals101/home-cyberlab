# MITRE ATT&CK Mapping

## Purpose

This file maps the researched indicators and observed reputation activity to possible MITRE ATT&CK techniques. The mappings are based on reputation findings, abuse categories, and analyst interpretation. These are possible mappings, not confirmed attacker activity.

---

## Mapping Summary

| Indicator | Type | Observed Activity | Possible ATT&CK Technique | Technique ID | Confidence |
|---|---|---|---|---|---|
| 8.8.8.8 | IP Address | Public DNS activity, abuse reports for scanning/brute-force | Application Layer Protocol | T1071 | Low |
| 1.1.1.1 | IP Address | Public DNS activity, abuse reports for hacking, port scan, brute-force | Application Layer Protocol | T1071 | Low |
| 185.199.108.133 | IP Address | Port scan, hacking, brute-force abuse reports | Network Service Discovery | T1046 | Medium |
| 185.199.108.133 | IP Address | Brute-force abuse category | Brute Force | T1110 | Medium |
| google.com | Domain | Legitimate web/search infrastructure | Application Layer Protocol: Web Protocols | T1071.001 | Low |
| cloudflare.com | Domain | CDN/DNS/security infrastructure; abuse-report noise | Proxy | T1090 | Low |
| github.com | Domain | Developer platform, possible software delivery path | Ingress Tool Transfer | T1105 | Low |
| 44d88612fea8a8f36de82e1278abb02f | File Hash | EICAR antivirus test file | No malicious ATT&CK mapping | N/A | High |
| d41d8cd98f00b204e9800998ecf8427e | File Hash | Empty file artifact | No malicious ATT&CK mapping | N/A | High |
| e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 | File Hash | Empty file artifact | No malicious ATT&CK mapping | N/A | High |

---

## Technique Notes

### T1071 - Application Layer Protocol

Public DNS and web infrastructure can be used by normal users and also abused by attackers for command and control, tunneling, or external communication. In this lab, 8.8.8.8 and 1.1.1.1 were not confirmed malicious, but they were mapped with low confidence because DNS infrastructure is commonly reviewed during threat intelligence investigations.

### T1071.001 - Web Protocols

Domains like google.com, cloudflare.com, and github.com use normal web protocols. These domains are legitimate, but web protocols are commonly used by attackers because they blend into normal network traffic.

### T1046 - Network Service Discovery

AbuseIPDB reports for some IPs included port scan activity. Port scanning can align with Network Service Discovery when an attacker is attempting to identify exposed services.

### T1110 - Brute Force

Some AbuseIPDB reports included brute-force categories. Brute-force activity can align with credential attack behavior when repeated login attempts are observed.

### T1090 - Proxy

Cloudflare and similar CDN infrastructure may be used to proxy traffic. In this lab, cloudflare.com itself was legitimate, so this mapping is low confidence and should only be considered if internal telemetry shows suspicious proxy behavior.

### T1105 - Ingress Tool Transfer

GitHub can be abused by attackers to host or retrieve tools, payloads, or scripts. In this lab, github.com was benign, so this mapping is low confidence and only applies if internal logs show suspicious downloads or repository access.

---

## Analyst Conclusion

The ATT&CK mappings in this lab are based on observed reputation categories and common attacker use cases. Most indicators were legitimate or benign. The strongest behavioral mappings were related to reported port scanning and brute-force activity, but no active compromise was confirmed.
