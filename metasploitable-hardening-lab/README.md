\# Metasploitable Hardening Lab



\## Project Summary

This project demonstrates the identification, exploitation, remediation, and validation of critical vulnerabilities on a deliberately vulnerable Linux system (Metasploitable 2). The goal was to reduce the system's attack surface by targeting high-risk services and validating improvements through comparative network scans.



\---



\## Why This Project Matters

Many vulnerability assessments stop at detection. This project goes further by:

\- Prioritizing high-risk vulnerabilities

\- Demonstrating real exploitation

\- Applying remediation actions

\- Validating security improvements



This reflects a real-world vulnerability management workflow rather than simple tool usage.



\---



\## Objectives

\- Identify exposed services using network scanning

\- Validate vulnerabilities through exploitation

\- Remediate high-risk services

\- Confirm fixes through rescanning



\---



\## Lab Environment



\### Target

\- Metasploitable 2 (192.168.56.115)



\### Attacker

\- Kali Linux



\### Tools Used

\- Nmap

\- Netcat

\- Linux service management tools



\---



\## Key Actions Performed



\### 1. Enumeration

Performed service discovery using Nmap to identify exposed ports and services.



\### 2. Exploitation

Exploited a known backdoor in vsftpd 2.3.4 to gain root access.



\### 3. Remediation

Disabled high-risk services:

\- Telnet (Port 23)

\- FTP (Port 21)

\- SMB (Port 445)



\### 4. Validation

Re-scanned the system to confirm that services were no longer exposed.



\---



\## Results



| Service | Port | Status Before | Status After |

|--------|------|-------------|-------------|

| FTP | 21 | Open | Closed |

| Telnet | 23 | Open | Closed |

| SMB | 445 | Open | Closed |



The system’s attack surface was significantly reduced.



\---



\## Screenshots



\### Before Remediation

!\[Before Scan](screenshots/before-scan.png)



\### After Remediation

!\[After Scan](screenshots/after-scan.png)



\### Port Validation

!\[Port Validation](screenshots/port-validation.png)



\---



\## Skills Demonstrated

\- Vulnerability identification and prioritization

\- Exploitation of known vulnerabilities

\- Linux system administration and service management

\- Network scanning and validation

\- Security remediation workflows



\---



\## Key Takeaway

Effective security is not just about finding vulnerabilities—it requires remediation and validation to ensure real risk reduction.



\---



\## Repository Structure



&#x20;   metasploitable-hardening-lab/

&#x20;   ├── README.md

&#x20;   ├── screenshots/

&#x20;   ├── reports/

&#x20;   │   └── hardening-report.md

&#x20;   ├── configs/

&#x20;   │   └── remediation-commands.txt

