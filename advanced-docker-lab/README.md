# Phase 2 — Advanced Web App & Infrastructure Attack Lab

## Project Summary

This phase builds a custom vulnerable environment to simulate real-world attacks beyond basic web vulnerabilities. It focuses on infrastructure misconfigurations, weak authentication, and internal network access.

The lab includes:

- Custom Flask web application

- Nginx reverse proxy (intentionally misconfigured)

- Internal Docker service for lateral movement

- Kali Linux attacker container

The goal was to demonstrate how attackers move from initial access to deeper system compromise.

---

## Objectives

- Exploit reverse proxy misconfiguration

- Access exposed internal endpoints

- Bypass weak authentication mechanisms

- Perform lateral movement inside the network

- Observe attack activity through logs

---

## Lab Architecture

Kali Linux (attacker) interacts with:

- Nginx Reverse Proxy (entry point)

- Vulnerable Flask App (backend service)

- Internal container (internal\_app) not exposed externally

All components run inside a Docker network.

---

## Key Attack Scenarios

### 1. Debug Endpoint Exposure

**Action:**


curl http://nginx/debug

**Result:**

- Environment variables exposed

- Internal system details revealed

---

### 2. Header-Based Authentication Bypass

**Action:**


curl -H "X-Admin-Token: letmein" http://nginx/admin

**Result:**

- Unauthorized admin access

- Sensitive data exposed

---

### 3. Broken Authentication (Token Bypass)

**Action:**


curl -H "Authorization: notadminbutcontainsadmin" http://nginx/admin

**Result:**

- Authentication bypass successful

- Admin privileges granted

---

### 4. Lateral Movement

**Action:**


nmap internal\_app

curl http://internal\_app

**Result:**

- Internal service discovered

- Successful access from attacker container

---

### 5. Detection via Logs

**Observation:**

- Nginx logs show:


GET /admin HTTP/1.1

**Takeaway:**

- Attack activity is visible through logging

---

## Key Findings

- Reverse proxy misconfiguration exposes internal endpoints

- Weak header-based authentication is easily bypassed

- Improper token validation leads to full privilege escalation

- Internal services are accessible once inside the network

- Logs provide basic but valuable detection capability

---

## Skills Demonstrated

- Reverse proxy exploitation

- Authentication bypass techniques

- API interaction and manipulation

- Lateral movement concepts

- Internal network enumeration

- Log-based detection analysis

---

## Tools Used

- Docker / Docker Compose

- Kali Linux

- Nmap

- Curl

- Flask

- Nginx

---

## Key Takeaways

- Misconfigured infrastructure can expose critical functionality

- Authentication must be properly validated (not string-based checks)

- Internal networks are not inherently secure

- Attackers chain multiple weaknesses to escalate access

- Logging is essential for visibility and detection
