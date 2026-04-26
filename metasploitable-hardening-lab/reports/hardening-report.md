\# Metasploitable Hardening Report



\## Project Summary

This project focused on identifying and remediating high-risk vulnerabilities on a Metasploitable 2 virtual machine. The objective was to reduce the system's attack surface by disabling insecure and unnecessary services and validating remediation through comparative network scanning.



\---



\## Scope

\- Target System: Metasploitable 2 (192.168.56.115)

\- Assessment Type: Vulnerability Identification and Remediation

\- Tools Used:

&#x20; - Nmap

&#x20; - Manual service inspection

&#x20; - Command-line service management



\---



\## Initial Findings (Pre-Remediation)



A network scan revealed multiple high-risk services exposed:



| Port | Service | Risk |

|------|--------|------|

| 21 | FTP (vsftpd 2.3.4) | Known backdoor vulnerability allowing remote root access |

| 23 | Telnet | Transmits credentials in cleartext |

| 445 | SMB (Samba) | Susceptible to enumeration and remote exploitation |



These services significantly increased the attack surface of the system.



\---



\## Exploitation (Validation of Risk)



The FTP service (vsftpd 2.3.4) was confirmed to be vulnerable to a known backdoor, allowing unauthorized root access to the system.



This demonstrated the severity of the exposure and validated the need for remediation.



\---



\## Remediation Actions



The following actions were taken to reduce risk:



\### 1. Telnet (Port 23)

\- Disabled by stopping the associated service (xinetd)



\### 2. FTP (Port 21)

\- Stopped the vsftpd service

\- Disabled service from starting at boot



\### 3. SMB (Port 445)

\- Terminated Samba processes

\- Stopped the Samba service



\---



\## Post-Remediation Validation



A follow-up scan confirmed that the previously exposed services were no longer accessible:



| Port | Status |

|------|--------|

| 21 | Closed |

| 23 | Closed |

| 445 | Closed |



This demonstrates a measurable reduction in attack surface.



\---



\## Results



\- Successfully eliminated multiple critical vulnerabilities

\- Prevented unauthorized remote access vectors

\- Reduced externally exposed services

\- Improved overall system security posture



\---



\## Key Takeaways



\- Vulnerability identification alone is insufficient without remediation

\- High-risk services should be prioritized based on exploitability

\- Validation through rescanning is essential to confirm fixes

\- Even simple configurations can significantly reduce risk



\---

