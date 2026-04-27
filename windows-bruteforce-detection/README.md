# Windows Brute Force Detection Lab

## Overview

This project demonstrates the detection of a password spraying (brute-force) attack against a Windows system using a Wazuh SIEM.

The lab simulates an attacker generating repeated failed login attempts and validates that the activity is successfully detected, ingested, and visualized in the SIEM.

---

## Objective

* Simulate a brute-force/password spraying attack
* Generate Windows Security Event ID 4625 (failed logon)
* Ingest logs into Wazuh
* Validate detection and alerting

---

## Lab Environment

| Component   | Description                |
| ----------- | -------------------------- |
| Attacker    | Kali Linux                 |
| Target      | Windows VM (WIN-LAB-FRESH) |
| SIEM        | Wazuh                      |
| Log Shipper | Filebeat                   |
| Backend     | OpenSearch                 |

---

## Attack Simulation

The attack was executed using:

```bash
crackmapexec smb 192.168.56.113 -u users.txt -p 'Winter2024!'
```

This generated multiple failed authentication attempts against the Windows system.

---

## Detection

Wazuh detected the activity using:

* **Rule ID:** 60122
* **Description:** Logon Failure - Unknown user or bad password
* **Event ID:** 4625

---

## Key Findings

* Multiple failed login attempts were detected in rapid succession
* Attacker IP (192.168.56.111) was identified
* Different usernames were targeted (password spraying behavior)
* Events were successfully ingested and indexed

---

## Challenges & Resolution

### Issue: Logs not appearing in dashboard

* **Cause:** Filebeat authentication failure (401 Unauthorized)
* **Fix:** Updated Filebeat credentials to match OpenSearch

### Issue: Agent connection problems

* **Cause:** Duplicate agent entries and key conflicts
* **Fix:** Re-registered agent and cleaned stale entries

---

## Skills Demonstrated

* SIEM deployment and troubleshooting
* Log ingestion and pipeline debugging
* Windows event log analysis
* Detection validation and investigation
* Red team attack simulation

---

## Repository Structure

```
windows-bruteforce-detection/
├── README.md
├── screenshots/
├── logs/
├── configs/
└── reports/
```

---
