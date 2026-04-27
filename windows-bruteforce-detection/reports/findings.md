\# Findings Report — Windows Brute Force Detection Lab



\## Executive Summary



This lab demonstrates the detection of a password spraying (brute-force) attack against a Windows system using a Wazuh SIEM.



An attacker machine generated repeated failed authentication attempts against a Windows endpoint. These events were successfully logged, ingested, and detected by the SIEM, validating the effectiveness of the monitoring pipeline.



\---



\## Objective



\* Simulate a brute-force/password spraying attack

\* Generate Windows Security Event ID 4625 (failed logon)

\* Ingest logs into Wazuh

\* Validate detection and alerting



\---



\## Environment



| Component   | Description                |

| ----------- | -------------------------- |

| Attacker    | Kali Linux                 |

| Target      | Windows VM (WIN-LAB-FRESH) |

| SIEM        | Wazuh                      |

| Log Shipper | Filebeat                   |

| Backend     | OpenSearch                 |



\---



\## Attack Overview



The attack was executed using CrackMapExec:



```bash

crackmapexec smb 192.168.56.113 -u users.txt -p 'Winter2024!'

```



This generated multiple failed login attempts using different usernames.



\---



\## Detection Details



Wazuh successfully detected the attack using the following rule:



\* \*\*Rule ID:\*\* 60122

\* \*\*Description:\*\* Logon Failure - Unknown user or bad password

\* \*\*Event ID:\*\* 4625



Each failed login attempt generated a corresponding alert.



\---



\## Evidence



\### 1. Attack Execution



See: `screenshots/attack.png`



\### 2. Windows Event Logs



See: `screenshots/eventviewer-4625.png`



\### 3. SIEM Alerts



See: `screenshots/wazuh-alerts.png`



\### 4. Raw Alert Data



See: `logs/sample-alerts.json`



\---



\## Key Observations



\* Multiple failed login attempts occurred in rapid succession

\* The attacker IP (192.168.56.111) was consistently identified

\* Different usernames were targeted, consistent with password spraying behavior

\* All events were successfully ingested and indexed



\---



\## Challenges \& Resolution



\### Issue 1: Agent Not Connecting Properly



\* \*\*Cause:\*\* Duplicate agent entries and key conflicts

\* \*\*Resolution:\*\* Re-registered agent and removed stale entries



\### Issue 2: Logs Not Appearing in Dashboard



\* \*\*Cause:\*\* Filebeat authentication failure (401 Unauthorized)

\* \*\*Resolution:\*\* Updated Filebeat credentials to match OpenSearch



\### Issue 3: Events Not Visible in Dashboard



\* \*\*Cause:\*\* Time filter mismatch and index mapping confusion

\* \*\*Resolution:\*\* Verified data via OpenSearch and adjusted time filters



\---



\## Conclusion



The lab successfully demonstrated:



\* End-to-end attack simulation

\* Log generation and ingestion

\* SIEM-based detection

\* Alert visualization



This validates the effectiveness of Wazuh in detecting brute-force login attempts in a Windows environment.



\---



\## Skills Demonstrated



\* SIEM deployment and troubleshooting

\* Log ingestion and pipeline debugging

\* Windows event log analysis

\* Detection validation and investigation

\* Red team attack simulation



\---



\## Next Steps



\* Implement detection thresholds for brute-force activity

\* Create custom Wazuh rules for improved detection

\* Integrate alerting mechanisms (email, Slack)

\* Expand lab to include multiple endpoints



