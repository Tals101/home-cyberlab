# Home Cybersecurity Lab

Hands-on security projects built in my home lab: detection engineering, cloud and Kubernetes security, incident response and security automation. Each project includes its configurations, detection rules, evidence and a write-up, and the featured projects also have setup steps so you can run them yourself.

## Start Here

If you only have a few minutes, these three projects show the range of the lab:

1. **[Kubernetes Attack Detection Lab](./kubernetes-attack-detection-lab/)**: attack, detect, contain and harden a Kubernetes cluster with Falco, Elasticsearch and Kibana. Default Falco rules missed internal network discovery (0 alerts), and three custom rules closed the gap (3 of 3 fired).
2. **[Adversary Emulation Lab](./adversary-emulation-lab/)**: a six-phase attack chain against Linux and Windows targets, scored against Wazuh, Sysmon and Falco. Of 18 technique checks, 8 were detected, 3 partially detected and 7 not detected, and the README explains the gaps.
3. **[AWS Cloud Threat Detection Lab](./aws-cloud-threat-detection-lab/)**: CloudTrail and GuardDuty with the GuardDuty Tester deployed through the AWS CDK. It produced 10 confirmed real findings across S3, IAM and EC2.

## Featured Projects

| Project | What it covers | Result |
|---|---|---|
| [Kubernetes Attack Detection](./kubernetes-attack-detection-lab/) | Falco, custom rules, Pod Security Standards, Fluent Bit to Elasticsearch and Kibana, SOAR-style response script | Pod Security `restricted` rejected the privileged hostPath pod for 7 policy violations |
| [Detection Engineering: Kubernetes](./detection-engineering-k8s-lab/) | Falco, Sigma and Wazuh rules for four container attack scenarios | Coverage went from 2/4 to 4/4 scenarios, with 0 false positives on benign admin commands |
| [AWS Cloud Threat Detection](./aws-cloud-threat-detection-lab/) | CloudTrail, GuardDuty, GuardDuty Tester (CDK, EKS, EC2) | 10 real GuardDuty findings: S3 8, IAM 1, EC2 1 |
| [AWS IAM Detection](./aws-iam-detection-lab/) | CloudTrail to CloudWatch metric filter, alarm and SNS | A blocked AdministratorAccess escalation set off the alarm and an email alert |
| [Cloud-Native SOC](./cloud-native-soc/) | Falco, Loki, Promtail, Grafana, Wazuh agent DaemonSet, Trivy | Shell alerts in 2/2 test pods; Trivy found 1 HIGH CVE in `ubuntu:22.04` and 0 in `busybox:1.36` |
| [Adversary Emulation](./adversary-emulation-lab/) | Kali to Ubuntu and Windows attack chain; Wazuh, Sysmon, Falco | 8 detected, 3 partial, 7 not detected out of 18 checks |

## More Projects

### Detection Engineering and SOC

- [Threat Detection Engineering Portfolio](./threat-detection-engineering-portfolio/): custom detections written and tested for Sigma, Wazuh and Falco
- [Falco Detection Engineering](./falco-detection-engineering/): Falco rule development in a local Minikube cluster
- [Purple Team Kubernetes Lab](./purple-team-kubernetes-lab/): red-team attacks against Kubernetes followed by blue-team detection and response
- [Kubernetes Web Security Lab](./kubernetes-web-security-lab/): deployment, misconfiguration exploitation, kube-bench and kube-hunter audits, and Falco runtime detection
- [Threat Hunting with Wazuh](./threat-hunting-with-wazuh/): hypothesis-driven hunts in Wazuh instead of alert review only
- [Home SOC Lab with Wazuh](./wazuh-lab/): SIEM monitoring and alert investigation, with a [follow-up phase](./wazuh-lab/next-steps/)
- [Windows Brute Force Detection](./windows-bruteforce-detection/): detecting password spraying against Windows with Wazuh
- [Snort Lab](./snort-lab/): Snort built from source, with custom rules and [alert validation](./snort-lab/next-steps/)
- [SOC Analyst Challenge](./soc-analyst-challenge/): a Tier 1 SOC investigation using logs, PCAP and threat intelligence

### Cloud Security

- [AWS Cloud Security Monitoring](./aws-cloud-security-monitoring-lab/): AWS logging, detection, alerting and validation with native services
- [Cloud Security Operator Lab](./cloud-security-operator-lab/): risky IAM configuration, unused credentials, CloudTrail telemetry and cleanup

### Identity Security

- [Identity Attack and Defense Lab](./identity-attack-defense-lab/): Keycloak, a Flask app and Wazuh for identity attack detection
- [Identity Security Lab](./identity-security-lab/): Keycloak, PostgreSQL and a custom SSO test application

### Incident Response and Forensics

- [Ransomware Response Tabletop](./ransomware-response-tabletop/): a full detection, containment, eradication and recovery playbook with safe simulated evidence
- [Suspicious Insider Investigation](./insider-investigation-lab/): investigating a user suspected of copying sensitive files before leaving
- [Compromised Linux Recovery](./compromised-linux-recovery-lab/): responding to and hardening a compromised Ubuntu server
- [Malware Analysis Lab](./malware-analysis-lab/): EICAR analysis with REMnux, Procmon and Wireshark, plus [follow-up analysis](./malware-analysis-lab/next-steps/)
- [Threat Intelligence Fusion Lab](./threat-intelligence-fusion-lab/): IOC research, reputation data and ATT&CK mapping

### Vulnerability Management and Offensive Security

- [Vulnerability Assessment Lab](./vulnerability-assessment-lab/): Nmap, OpenVAS and Wireshark, with [remediation validation](./vulnerability-assessment-lab/next-steps/)
- [Metasploitable Hardening Lab](./metasploitable-hardening-lab/): exploiting, fixing and re-testing critical vulnerabilities
- [Beginner Pentest Lab](./beginner-pentest-lab/): reconnaissance, enumeration and exploitation against Metasploitable 2
- [Docker Web Attack Lab](./docker-web-attack-lab/): attacks against DVWA and OWASP Juice Shop in containers
- [Advanced Docker Lab](./advanced-docker-lab/): infrastructure misconfigurations, weak authentication and internal network access

### DevSecOps and Container Security

- [Secure CI/CD Docker Pipeline](./secure-cicd-docker-pipeline/): security gates that block a release until secret, dependency and image scans pass
- [Secure Software Supply Chain](./secure-software-supply-chain/): a supply chain pipeline built with GitHub Actions
- [Container Image Security Pipeline](./container-image-security-pipeline/): Docker, Trivy and GitHub Actions
- [Secure-by-Default Docker Web App](./secure-docker-webapp-lab/): hardening an insecure Dockerized Flask API

### AI-Assisted Security Automation

- [AI Log Analysis Agent](./log-agent/): a local LLM (Ollama) that summarizes Linux authentication logs into a SOC-style report
- [AI Vulnerability Scanner Agent](./vuln-scan-agent/): a local LLM that turns Nmap results into a security assessment
- [Red vs Blue AI Agent Lab](./red-blue-agent-lab/): local AI agents that generate attack ideas and matching defenses

### Tools

- [HashVault](./hashvault/): a Bash file integrity checker with encrypted SHA-256 manifests

### Archive

Earlier projects that overlap with newer ones, plus QA test automation work, are in [`archive/`](./archive/).

## Tools Used

- **Detection:** Wazuh, Falco, Sysmon, Snort, Sigma, Trivy
- **Cloud:** AWS (IAM, CloudTrail, CloudWatch, GuardDuty, S3, EC2, EKS, CDK)
- **Containers:** Docker, Kubernetes, Minikube, Helm
- **Logging:** Elasticsearch, Kibana, Fluent Bit, Grafana, Loki, Promtail
- **Scripting and CI:** Bash, PowerShell, Python, GitHub Actions
- **Network and analysis:** Nmap, Wireshark, OpenVAS
