# Home Cybersecurity Lab

A hands-on cybersecurity lab repository built to document practical work across blue-team operations, cloud security, offensive security fundamentals, malware analysis, intrusion detection, vulnerability assessment, and AI-assisted security automation.

This repository is organized as a multi-project portfolio. Each folder contains a separate lab with its own notes, evidence, screenshots, and write-up.

---

## Repository Purpose

The goal of this repository is to build and document practical cybersecurity skills in a structured, portfolio-ready format. Each project is completed in a controlled environment and focuses on applying technical concepts through real lab work, validation, troubleshooting, automation, and reporting.

---

## Core Skills Practiced

Across the projects in this repository, the following skills are developed and documented:

- Virtual lab setup and management
- Linux and Windows administration
- Network isolation and safe testing practices
- Service enumeration and analysis
- Vulnerability assessment
- Exploitation in controlled training environments
- Intrusion detection and monitoring
- Malware investigation
- Traffic capture and analysis
- Cloud security configuration
- Alerting and logging
- Evidence collection
- Technical documentation and reporting
- Python scripting and automation
- Local AI/LLM security workflow experimentation

---

## Tools and Technologies

Projects in this repository include work involving:

- VirtualBox
- Kali Linux
- Metasploitable 2
- Ubuntu Server
- Windows
- Nmap
- Metasploit Framework
- Wireshark
- Snort
- Wazuh
- AWS
- Python 3
- Ollama
- LangChain
- Linux command line
- Git and GitHub

---

## Project Portfolio

### AWS Cloud Security Lab
Focuses on foundational AWS security configuration and hardening in a lab environment.

**Key areas:**
- IAM and account security
- Secure configuration
- Cloud security fundamentals
- Documentation and remediation notes

**Folder:** `aws-cloud-security-lab/`

---

### AWS Cloud Security Monitoring Lab
Focuses on cloud visibility, monitoring, and alerting concepts in AWS.

**Key areas:**
- Logging and monitoring
- Cloud visibility
- Security alerting
- Cloud operations documentation

**Folder:** `aws-cloud-security-monitoring-lab/`

---

### Beginner Pentest Lab
A beginner-friendly offensive security lab using Kali Linux and Metasploitable 2 in an isolated VirtualBox network.

**Key areas:**
- Service enumeration
- Vulnerability identification
- Metasploit usage
- Exploitation basics
- Post-exploitation validation
- Pentest reporting

**Folder:** `beginner-pentest-lab/`

---

### Malware Analysis Lab
Documents hands-on malware analysis workflow and investigation in a controlled lab environment.

**Key areas:**
- Safe malware handling
- Environment setup
- Behavioral observation
- Evidence collection
- Lab documentation

**Folder:** `malware-analysis-lab/`

---

### Snort Lab
Focuses on installing, configuring, and using Snort for intrusion detection and traffic inspection.

**Key areas:**
- IDS setup
- Snort configuration
- Rule validation
- Packet inspection
- Defensive monitoring

**Folder:** `snort-lab/`

---

### Vulnerability Assessment Lab
Documents vulnerability scanning, evidence collection, and interpretation of findings in a lab environment.

**Key areas:**
- Vulnerability scanning
- Finding analysis
- Supporting evidence
- Remediation-oriented reporting

**Folder:** `vulnerability-assessment-lab/`

---

### Wazuh Lab
Focuses on host monitoring, detection, alert visibility, and security operations concepts using Wazuh.

**Key areas:**
- SIEM and XDR concepts
- Agent-based monitoring
- Alert review
- Detection validation
- Blue-team workflows

**Folder:** `wazuh-lab/`

---

### AI Log Analysis Agent
A beginner-friendly AI security project that uses a local LLM through Ollama to analyze Linux authentication logs and generate a SOC-style incident summary.

**Key areas:**
- Python scripting
- Linux log analysis
- Local LLM deployment
- AI-assisted security analysis
- SOC workflow automation
- Security reporting

**Folder:** `log-agent/`

---

### AI Vulnerability Scanner Agent
A beginner-friendly AI-assisted vulnerability analysis project that uses Nmap scan results from a controlled lab target and a local LLM through Ollama to generate a security-focused assessment.

**Key areas:**
- Network scanning
- Service/version analysis
- Python scripting
- Local LLM deployment
- AI-assisted vulnerability review
- Security reporting

**Folder:** `vuln-scan-agent/`

---

## Repository Structure

```text
home-cyberlab/
├── aws-cloud-security-lab/
├── aws-cloud-security-monitoring-lab/
├── beginner-pentest-lab/
├── log-agent/
├── malware-analysis-lab/
├── snort-lab/
├── vulnerability-assessment-lab/
├── wazuh-lab/
└── README.md
