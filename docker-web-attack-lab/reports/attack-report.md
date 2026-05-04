\# Web Application Security Assessment Report  

\*\*Project:\*\* DVWA + OWASP Juice Shop Attack Lab  

\*\*Date:\*\* May 2026  



\---



\## 1. Executive Summary



A controlled security assessment was performed against two intentionally vulnerable web applications deployed in a containerized lab environment. The objective was to simulate real-world attacker behavior and evaluate the impact of common web application vulnerabilities.



The assessment successfully demonstrated a full attack chain, including SQL injection, credential extraction, authentication weaknesses, and privilege escalation, culminating in unauthorized administrative access and exposure of sensitive user data.



\---



\## 2. Scope



\*\*Targets:\*\*

\- DVWA (Damn Vulnerable Web Application)

\- OWASP Juice Shop



\*\*Environment:\*\*

\- Docker-based internal network

\- Kali Linux attacker container



\---



\## 3. Methodology



The assessment followed a structured attack workflow:



1\. Reconnaissance  

2\. Vulnerability Identification  

3\. Exploitation  

4\. Post-Exploitation  

5\. Privilege Escalation  

6\. Impact Validation  



\---



\## 4. Findings



\### 4.1 SQL Injection (DVWA)



\*\*Description:\*\*  

A SQL injection vulnerability was identified in the DVWA application within the user ID parameter.



\*\*Impact:\*\*  

Allowed full database enumeration and data extraction.



\*\*Evidence:\*\*  

\- SQLMap confirmed injectable parameter  

\- Database enumeration successful  

\- User table dumped  



\---



\### 4.2 Credential Exposure



\*\*Description:\*\*  

User credentials were extracted from the backend database.



\*\*Impact:\*\*  

Exposure of usernames and hashed passwords.



\*\*Evidence:\*\*  

\- Users table successfully dumped  

\- Password hashes identified as MD5  



\---



\### 4.3 Weak Credential Storage



\*\*Description:\*\*  

Passwords were stored using unsalted MD5 hashing.



\*\*Impact:\*\*  

Hashes are easily reversible using common techniques.



\*\*Evidence:\*\*  

\- Hash format confirmed as MD5  

\- Password validated via hash comparison  



\---



\### 4.4 Weak Authentication Controls (Juice Shop)



\*\*Description:\*\*  

Administrative account accessed using weak/default credentials.



\*\*Impact:\*\*  

Unauthorized administrative access achieved.



\*\*Evidence:\*\*  

\- Successful login as admin user  

\- JWT token confirmed elevated privileges  



\---



\### 4.5 Broken Access Control



\*\*Description:\*\*  

Administrative functionality was accessible via direct endpoint navigation.



\*\*Impact:\*\*  

Unauthorized access to sensitive user data.



\*\*Evidence:\*\*  

\- Accessed /#/administration endpoint  

\- Retrieved full user list  



\---



\## 5. Risk Summary



| Finding                     | Severity |

|---------------------------|----------|

| SQL Injection             | Critical |

| Credential Exposure       | High     |

| Weak Hashing              | High     |

| Weak Authentication       | High     |

| Broken Access Control     | Critical |



\---



\## 6. Key Takeaways



\- Vulnerabilities can be chained to significantly increase impact  

\- SQL injection remains a critical risk in poorly secured applications  

\- Modern applications rely heavily on API and token-based authentication  

\- Broken access control is one of the most dangerous vulnerabilities  





\---



\## 7. Conclusion



This assessment demonstrates how multiple vulnerabilities can be leveraged together to achieve unauthorized access and data exposure. The findings reinforce the importance of secure coding practices, strong authentication controls, and proper access enforcement mechanisms.

