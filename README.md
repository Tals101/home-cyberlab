# Home Cybersecurity Lab

A collection of hands-on cybersecurity labs built to practice blue-team operations, cloud security, monitoring, detection, vulnerability assessment, and defensive security workflows in a home lab environment.

## Overview

This repository contains multiple cybersecurity lab projects completed as part of an ongoing hands-on learning program. Each project focuses on practical implementation, validation, and documentation using real tools and realistic workflows.

The purpose of this repository is to demonstrate experience with:

- Security monitoring
- Threat detection
- Log analysis
- Vulnerability assessment
- Network security tooling
- Cloud security monitoring
- Alerting and validation
- Technical documentation

## Labs Included

| Lab | Focus Area | Status |
|---|---|---|
| `aws-cloud-security-monitoring-lab` | AWS logging, detection, alerting, and monitoring | Complete |
| `wazuh-lab` | SIEM, endpoint monitoring, and alerting | Complete |
| `snort-lab` | Network intrusion detection and traffic inspection | Complete |
| `vulnerability-assessment-lab` | Scanning, findings review, and remediation analysis | Complete |
| `malware-analysis-lab` | Basic malware analysis workflow and evidence handling | Complete |

## Featured Project

### AWS Cloud Security Monitoring Lab

This project demonstrates a basic AWS cloud security monitoring pipeline using native AWS services:

- AWS IAM
- AWS CloudTrail
- Amazon CloudWatch Logs
- CloudWatch Metric Filters
- CloudWatch Alarms
- Amazon SNS

Key capabilities implemented:

- Audit logging with CloudTrail
- CloudWatch log ingestion
- Detection rules for selected IAM activity
- Alarm creation for security events
- SNS email notifications
- End-to-end validation through test activity

Project folder:

```text
aws-cloud-security-monitoring-lab/
```

## Skills Demonstrated

- Security operations fundamentals
- SIEM and log analysis
- Intrusion detection concepts
- Vulnerability scanning and assessment
- Cloud security monitoring
- IAM security review
- Detection engineering basics
- Alert tuning and validation
- Linux command-line administration
- Security documentation and reporting

## Repository Structure

```text
home-cybersecurity-lab/
├── README.md
├── aws-cloud-security-monitoring-lab/
│   ├── README.md
│   ├── screenshots/
│   ├── notes/
│   └── reports/
├── wazuh-lab/
├── snort-lab/
├── vulnerability-assessment-lab/
└── malware-analysis-lab/
```

## Documentation Style

Each lab folder may include:

- `README.md` for the project overview
- `screenshots/` for visual evidence
- `notes/` for quick working notes
- `reports/` for more formal write-ups

## Purpose of This Repository

This repository is meant to document practical cybersecurity work in a structured, portfolio-friendly format. It is designed to show not just tool usage, but also lab planning, testing, validation, and written reporting.

## Ongoing Development

This repository will continue to grow as more lab projects are completed, improved, and documented.
