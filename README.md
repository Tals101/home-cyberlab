# Home Cybersecurity Lab

Hands-on cybersecurity portfolio focused on **Security Engineering, Detection Engineering, Cloud Security, Kubernetes Security, Incident Response, and Security Automation**.

This repository contains practical security projects built to simulate real-world environments, attack scenarios, detection workflows, investigations, and defensive engineering tasks.

Each project includes technical documentation, configurations, detection logic, evidence, screenshots, reports, or lessons learned where applicable.

---

# Featured Cybersecurity Projects

## 1. [Kubernetes Attack Detection Lab](./Kubernetes-Attack-Detection-Lab/)

Built a Kubernetes attack-and-detection environment to identify suspicious container and workload activity.

**Focus areas:**

* Kubernetes runtime security
* Falco detection
* Suspicious shell activity
* Sensitive file access
* Workload hardening
* Detection validation

---

## 2. [Detection Engineering — Kubernetes](./detection-engineering-k8s-lab/)

Designed and tested detection logic for suspicious activity occurring inside Kubernetes workloads.

**Focus areas:**

* Detection engineering
* Falco rules
* Container behavior monitoring
* Shell-spawn detection
* Sensitive file access
* Suspicious user-management activity
* Detection testing and validation

---

## 3. [AWS Cloud Threat Detection](./aws-cloud-threat-detection-lab/)

Built cloud-security scenarios focused on identifying suspicious activity within AWS environments.

**Focus areas:**

* AWS security monitoring
* CloudTrail
* IAM activity
* Threat detection
* Security-event investigation
* Cloud logging and visibility

---

## 4. [AWS IAM Detection Lab](./aws-iam-detection-lab/)

Simulated IAM-related attack behavior and developed detection workflows around suspicious identity and access activity.

**Focus areas:**

* AWS IAM
* Privilege-related activity
* CloudTrail logging
* CloudWatch monitoring
* Detection logic
* Alert generation
* Security-event validation

---

## 5. [Cloud-Native SOC](./cloud-native-soc/)

Built a cloud-native Security Operations environment for monitoring Kubernetes workloads and security events.

**Focus areas:**

* Kubernetes
* Falco
* Grafana
* Loki
* Promtail
* Security monitoring
* Container runtime detection
* SOC visibility

---

## 6. [Adversary Emulation Lab](./adversary-emulation-lab/)

Simulated attacker behavior across Linux and Windows systems and validated defensive telemetry using security-monitoring tools.

**Focus areas:**

* Adversary emulation
* Wazuh
* Windows Sysmon
* Linux monitoring
* Reconnaissance detection
* Persistence activity
* Runtime security
* Detection validation

---

# Additional Security Projects

### Cloud Security

* [AWS Cloud Security Monitoring](./aws-cloud-security-monitoring-lab/)
  AWS logging, monitoring, and security-visibility lab.

* [Cloud Security Operator Lab](./cloud-security-operator-lab/)
  Hands-on AWS security configuration, IAM review, S3 protection, CloudTrail, and GuardDuty.

---

### Container & Kubernetes Security

* [Container Image Security Pipeline](./container-image-security-pipeline/)
  Container-security scanning and secure image pipeline concepts.

* [Advanced Docker Lab](./advanced-docker-lab/)
  Docker security, configuration, and container-hardening exercises.

* [Docker Web Attack Lab](./docker-web-attack-lab/)
  Controlled web-application attack and detection environment using containers.

---

### Incident Response & System Security

* [Compromised Linux Recovery Lab](./compromised-linux-recovery-lab/)
  Investigated and recovered a simulated compromised Linux system while implementing security hardening.

---

### Offensive Security

* [Beginner Pentest Lab](./beginner-pentest-lab/)
  Practiced reconnaissance, enumeration, vulnerability identification, and exploitation in a controlled environment.

---

# Security Skills Demonstrated

### Detection Engineering

* Designing detection logic
* Writing and testing detection rules
* Establishing behavioral baselines
* Identifying suspicious authentication activity
* Validating alerts against simulated attacks
* Reducing false positives

### Cloud Security

* AWS IAM security
* CloudTrail logging
* CloudWatch monitoring
* GuardDuty
* S3 security
* Cloud threat detection
* Security misconfiguration analysis

### Kubernetes & Container Security

* Kubernetes workload security
* Falco runtime detection
* Docker security
* Container hardening
* Kubernetes RBAC
* Pod security controls
* Container image scanning

### Security Operations

* Wazuh SIEM
* Log analysis
* Alert triage
* Threat hunting
* Incident investigation
* Evidence collection
* Technical timelines

### Endpoint & Host Security

* Linux security
* Windows Sysmon
* Authentication-log analysis
* SSH investigations
* Persistence detection
* System hardening

### Security Automation

* Bash
* PowerShell
* Python
* Cron
* CI/CD security concepts
* Automated monitoring and validation

---

# Technologies & Tools

**Security & Detection**

`Wazuh` • `Falco` • `Sysmon` • `Snort` • `Trivy`

**Cloud**

`AWS` • `IAM` • `CloudTrail` • `CloudWatch` • `GuardDuty` • `S3` • `SQS` • `Lambda`

**Containers & Orchestration**

`Docker` • `Kubernetes` • `Minikube` • `Helm` • `kubectl`

**Operating Systems**

`Linux` • `Ubuntu` • `Windows`

**Automation & Development**

`Bash` • `PowerShell` • `Python` • `Git` • `GitHub` • `GitHub Actions`

**Monitoring & Analysis**

`Grafana` • `Loki` • `Promtail` • `Wireshark` • `Nmap`

---

# Repository Structure

This repository functions as a **multi-project cybersecurity portfolio**.

Individual project folders may contain:

```text
project-name/
│
├── README.md
├── evidence/
│   ├── screenshots/
│   ├── logs/
│   └── alerts/
│
├── reports/
├── scripts/
├── rules/
├── manifests/
├── configurations/
└── diagrams/
```

Project structures vary depending on the type of security exercise.

---

# Project Methodology

Many of the labs follow the same engineering process:

**1. Build**
Create the environment, infrastructure, workload, or security control.

**2. Establish a Baseline**
Determine what normal system or user behavior looks like.

**3. Simulate Activity**
Generate controlled suspicious or malicious activity.

**4. Collect Evidence**
Capture logs, alerts, screenshots, network activity, and system events.

**5. Detect**
Develop or configure detection logic based on observed behavior.

**6. Validate**
Confirm that the detection identifies the intended activity without excessive false positives.

**7. Investigate**
Analyze the event as a security analyst or engineer would during a real incident.

**8. Document**
Produce technical notes, reports, evidence, lessons learned, and recommendations.

---

# What This Portfolio Demonstrates

These projects demonstrate the ability to:

* Build realistic cybersecurity lab environments
* Configure security monitoring and detection tools
* Analyze Linux, Windows, cloud, and Kubernetes telemetry
* Simulate attacker behavior safely
* Engineer and validate security detections
* Investigate suspicious system activity
* Collect and preserve technical evidence
* Troubleshoot security infrastructure
* Harden systems and workloads
* Automate security and operational workflows
* Communicate technical findings through structured documentation

---

# Areas of Focus

I am continuing to build practical experience in:

* **Security Engineering**
* **Detection Engineering**
* **Cloud Security**
* **Kubernetes & Container Security**
* **Security Operations**
* **Incident Response**
* **Threat Hunting**
* **Security Automation**

---

## Explore the Projects

Start with the **Featured Cybersecurity Projects** above for examples of my strongest work in detection engineering, cloud security, Kubernetes security, and security operations.
