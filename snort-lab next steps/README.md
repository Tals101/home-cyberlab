# Snort Detection & Alert Validation Lab

## Project Overview

This project builds on an initial Snort installation by implementing custom detection rules, generating controlled network traffic, and validating that Snort successfully detects and alerts on that activity.

The lab demonstrates a complete IDS workflow:

**rule creation → traffic generation → alert detection → validation**

---

## Objectives

- Create custom Snort detection rules

- Generate test network traffic

- Trigger IDS alerts

- Validate detection output

- Document results and observations

---

## Technologies Used

- Snort (IDS)

- Ubuntu Server

- Linux Command Line

- PowerShell

- GitHub

---

## Lab Environment

- Snort running on Ubuntu VM

- Network Interface: enp0s3

- Internal Lab Network: 192.168.56.0/24

---

## Detection Rules Implemented

### ICMP Detection Rule


alert icmp any any -> any any (msg:"ICMP Ping Detected"; sid:1000001; rev:1;)

### HTTP Detection Rule


alert tcp any any -> any 80 (msg:"HTTP Traffic Detected"; sid:1000002; rev:1;)

---

## Methodology

### 1. Rule Creation

Custom rules were added to the local.rules file and enabled in snort.conf.

### 2. Traffic Generation

- ICMP traffic generated using ping

- HTTP traffic simulated using browser/curl (optional)

### 3. Detection Execution

Snort was run in console mode to monitor live traffic.

### 4. Alert Validation

Alerts were observed in real time and matched expected rule behavior.

---

## Results

- Snort successfully detected ICMP traffic

- Alerts were generated immediately upon traffic detection

- Rule configuration and integration were validated

---

## Project Structure


snort-lab next steps/

├── configs/

│   ├── snort.conf

│   └── config-notes.md

├── rules/

│   └── local.rules

├── notes/

│   └── detection-validation.md

├── screenshots/

│   └── (alert evidence)

└── README.md

---

## Outcome

This project demonstrates the ability to:

- Deploy and configure an IDS

- Write and implement detection rules

- Simulate network activity

- Validate alert generation

- Document security workflows

---

## Key Takeaways

- IDS effectiveness depends on proper rule configuration

- Testing with controlled traffic is critical for validation

- Understanding network behavior improves detection accuracy

---
