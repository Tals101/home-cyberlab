\# Phase 2 — Advanced Web Application \& Infrastructure Exploitation Report  

\*\*Project:\*\* Advanced Docker Security Lab  

\*\*Date:\*\* May 2026  



\---



\## 1. Executive Summary



This phase extends the lab into infrastructure and authentication weaknesses. The objective was to simulate how an attacker moves beyond initial access into deeper system compromise.



The lab demonstrated:

\- Information disclosure via reverse proxy misconfiguration  

\- Authentication bypass  

\- Internal network access (lateral movement)  

\- Detection through logs  



\---



\## 2. Scope



\*\*Targets:\*\*

\- Vulnerable Flask application  

\- Nginx reverse proxy  

\- Internal container service  



\*\*Environment:\*\*

\- Docker network  

\- Kali Linux attacker container  



\---



\## 3. Methodology



1\. Reconnaissance  

2\. Service Enumeration  

3\. Misconfiguration Discovery  

4\. Exploitation  

5\. Post-Exploitation  

6\. Lateral Movement  

7\. Detection  



\---



\## 4. Findings



\### 4.1 Reverse Proxy Misconfiguration — Debug Endpoint



\*\*Description:\*\*  

The reverse proxy exposes a `/debug` endpoint.



\*\*Impact:\*\*  

Leads to disclosure of environment variables and system data.



\*\*Evidence:\*\*



```bash

curl http://nginx/debug

```



\*\*Result:\*\*

\- Environment variables exposed  

\- System information disclosed  



\---



\### 4.2 Header-Based Authentication Weakness



\*\*Description:\*\*  

The `/admin` endpoint originally relied on a static header.



\*\*Impact:\*\*  

Authentication can be bypassed easily.



\*\*Evidence:\*\*



```bash

curl -H "X-Admin-Token: letmein" http://nginx/admin

```



\*\*Result:\*\*



```json

"status": "success"

```



\---



\### 4.3 Broken Authentication — Token Bypass



\*\*Description:\*\*  

Authentication logic checks if the string `"admin"` exists in the header.



\*\*Impact:\*\*  

Attackers can craft arbitrary tokens to gain admin access.



\*\*Evidence:\*\*



```bash

curl -H "Authorization: notadminbutcontainsadmin" http://nginx/admin

```



\*\*Result:\*\*



```json

"status": "success"

```



\---



\### 4.4 Lateral Movement — Internal Service Access



\*\*Description:\*\*  

An internal container is accessible from within the network.



\*\*Impact:\*\*  

Attackers can pivot to internal services.



\*\*Evidence:\*\*



```bash

nmap internal\_app

curl http://internal\_app

```



\*\*Result:\*\*

\- Internal service discovered  

\- Successful access achieved  



\---



\### 4.5 Detection — Nginx Logs



\*\*Description:\*\*  

Attack activity is visible in Nginx logs.



\*\*Impact:\*\*  

Provides detection capability.



\*\*Evidence:\*\*



```text

GET /admin HTTP/1.1

```



\---



\## 5. Risk Summary



| Finding | Severity |

|--------|---------|

| Debug Endpoint Exposure | High |

| Header-Based Auth Weakness | High |

| Broken Authentication | Critical |

| Lateral Movement | High |

| Detection via Logs | Informational |



\---



\## 6. Key Takeaways



\- Reverse proxy misconfigurations can expose internal endpoints  

\- Weak authentication logic is easily bypassed  

\- Internal network access enables lateral movement  

\- Logging is critical for detection  





\---



\## 7. Conclusion



This phase demonstrates how attackers exploit both application and infrastructure weaknesses to gain deeper access.



The lab provides a realistic example of modern attack paths and highlights the importance of secure configuration and monitoring.

