# Project 6: Identity Security Lab

## Overview

This project is a hands-on identity security lab built with Keycloak, PostgreSQL, Docker Compose, and a custom SSO test application.

The lab demonstrates:

- Single Sign-On
- Multi-Factor Authentication
- Role-Based Access Control
- Account takeover prevention
- Excessive permission testing
- Privilege escalation testing
- Remediation and validation

---

## Architecture

User Browser
    |
    v
SSO Test Application
    |
    v
Keycloak Identity Provider
    |
    v
PostgreSQL Database

---

## Core Components

| Component | Purpose |
|---|---|
| Keycloak | Identity provider |
| PostgreSQL | Keycloak database |
| Docker Compose | Runs the lab containers |
| Vite | Runs the SSO test app |
| keycloak-js | Connects the test app to Keycloak |

---

## Users and Roles

| User | Role |
|---|---|
| alice | app-user |
| bob | app-manager |
| carol | app-admin |

---

## Security Tests Completed

| Test | Result |
|---|---|
| Alice user access | Passed |
| Bob manager access | Passed |
| Carol admin access | Passed |
| Alice MFA enrollment | Passed |
| Account takeover blocked by MFA | Passed |
| Excessive permissions simulation | Finding created |
| Excessive permissions remediation | Remediated |
| Privilege escalation simulation | Finding created |
| Privilege escalation remediation | Remediated |

---

## Attack Simulations

The `attack-simulations` folder contains written findings for:

- Account takeover blocked by MFA
- Excessive permissions
- Excessive permissions remediation
- Privilege escalation through inherited roles
- Privilege escalation remediation

---

## Evidence

The `evidence` folder contains step-by-step evidence files showing configuration, validation, attack simulation, and remediation.

---

## Final Report

The final project report is located at:

reports/identity-security-lab-report.md

---

## Final Outcome

This project demonstrates how identity controls can be configured, tested, broken in a controlled lab, fixed, and documented.
