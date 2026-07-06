# Executive Summary

## Lab

Lab 8: Threat Intelligence Fusion Lab

## Summary

This lab performed a threat intelligence review of IP addresses, domains, and file hashes using public reputation sources. The goal was to evaluate each indicator, identify possible risk, determine whether any malware families were associated with the indicators, and map relevant findings to possible MITRE ATT&CK techniques.

## Key Findings

Most indicators reviewed in this lab were benign or related to legitimate infrastructure.

The reviewed IP addresses included public DNS services and CDN/infrastructure IP space. Two IP addresses, 8.8.8.8 and 1.1.1.1, were associated with legitimate public DNS providers. Both had community abuse reports, but VirusTotal did not show vendor detections. These should be monitored, not automatically blocked.

The IP address 185.199.108.133 showed the highest concern because VirusTotal showed one malicious detection and one suspicious result, while AbuseIPDB showed multiple reports related to port scanning, hacking, and brute-force activity. This indicator should be validated against internal logs before any blocking decision is made.

The reviewed domains, google.com, cloudflare.com, and github.com, were all assessed as legitimate. VirusTotal did not show malicious vendor detections for these domains. AbuseIPDB results were based on resolved infrastructure IP addresses and should be treated as infrastructure noise unless internal telemetry shows suspicious behavior.

The file hash 44d88612fea8a8f36de82e1278abb02f was identified as the EICAR antivirus test file. Although it had many detections, it is not real malware. It is a benign security validation artifact.

The remaining hashes were associated with empty file content and were assessed as benign.

## Risk Assessment

Overall risk level: Low to Medium

The overall risk is low because no confirmed active malware or compromise was identified. The risk is elevated to medium for 185.199.108.133 because of vendor detection activity and multiple abuse reports.

## Business Impact

No direct business impact was confirmed from the reviewed indicators. However, the lab demonstrates the importance of validating reputation data with internal logs before taking action. Blocking major infrastructure providers such as Google, Cloudflare, or GitHub without context could disrupt normal business operations.

## Recommended Actions

- Monitor DNS, proxy, firewall, and endpoint logs for suspicious activity involving the reviewed indicators.
- Do not automatically block legitimate public infrastructure based only on community abuse reports.
- Validate 185.199.108.133 against internal telemetry before taking enforcement action.
- Treat the EICAR hash as a security testing artifact, not an active malware infection.
- Use MITRE ATT&CK mapping to connect reputation findings to possible adversary behaviors.
- Preserve screenshots and research notes as lab evidence.

## Conclusion

The threat intelligence fusion process helped separate legitimate infrastructure, noisy abuse-report data, suspicious indicators, and benign file artifacts. No active compromise was confirmed. The most important analyst decision was to avoid overreacting to reputation data without internal context.
