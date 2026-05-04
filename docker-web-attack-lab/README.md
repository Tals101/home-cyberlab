# Vulnerable Web App Attack Lab (DVWA + OWASP Juice Shop)

## Project Summary

This project demonstrates a full attack workflow against intentionally vulnerable web applications using a containerized lab environment. The lab includes DVWA for classic vulnerabilities and OWASP Juice Shop for modern web application attacks.

The objective was not only to identify vulnerabilities, but to exploit them, validate access, and demonstrate real-world impact.

---

## Why This Project Matters

Many cybersecurity labs stop at detection. This project goes further by simulating how an attacker:

- Discovers targets

- Exploits vulnerabilities

- Extracts sensitive data

- Escalates privileges

- Validates unauthorized access

This mirrors real-world attack behavior and aligns with OWASP Top 10 risks.

---

## Lab Environment

### Technologies Used

- Docker / Docker Compose

- Kali Linux (Attacker)

- DVWA (Damn Vulnerable Web Application)

- OWASP Juice Shop

- Tools: Nmap, SQLMap, Gobuster, John the Ripper

### Architecture

Kali Linux container attacking vulnerable web applications over an internal Docker network.

---

## Attack Workflow

### 1. Reconnaissance

- Used Nmap to scan internal Docker network

- Identified DVWA service on port 80

### 2. SQL Injection Exploitation (DVWA)

- Identified injectable parameter using SQLMap

- Bypassed authentication using session cookies

- Confirmed SQL injection vulnerability

### 3. Database Enumeration

- Enumerated available databases

- Identified dvwa database

- Extracted table structure

### 4. Credential Extraction

- Dumped users table

- Retrieved usernames and password hashes

### 5. Hash Analysis

- Identified MD5 password hashes

- Validated password via hashing comparison

### 6. Transition to Modern App (Juice Shop)

- Performed directory enumeration using Gobuster

- Identified API-based architecture

### 7. Authentication Attacks

- Tested login bypass techniques

- Identified weak admin credentials

### 8. Privilege Escalation

- Logged in as admin user

- Extracted JWT token

- Decoded token to confirm admin role

### 9. Broken Access Control Exploitation

- Accessed hidden admin endpoint: /#/administration

- Viewed full user list (unauthorized data exposure)

---

## Key Findings

- SQL Injection vulnerability (DVWA)

- Weak authentication controls

- Insecure credential storage (MD5)

- Exposed API endpoints

- Weak admin credentials

- Broken Access Control in Juice Shop

- Sensitive data exposure (user list)

---

## Skills Demonstrated

- Network reconnaissance (Nmap)

- Web exploitation (SQL Injection)

- Automated exploitation tools (SQLMap)

- Directory brute forcing (Gobuster)

- Credential extraction and analysis

- Hash identification and validation

- API analysis and manipulation

- JWT decoding and inspection

- Privilege escalation techniques

- Understanding of OWASP Top 10 vulnerabilities

---

## Key Takeaways

- Vulnerability identification is only the first step — exploitation and validation are critical

- Modern applications rely heavily on APIs and tokens (JWT)

- Broken Access Control is one of the most impactful vulnerabilities

- Attackers chain multiple weaknesses together to escalate access
