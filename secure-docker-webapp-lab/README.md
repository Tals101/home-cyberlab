# Secure-by-Default Dockerized Web App Lab

## Overview

This lab demonstrates how an intentionally insecure Dockerized Flask API can be hardened using practical container security controls.

The project starts with a vulnerable baseline container and then improves it through image scanning, least privilege, filesystem hardening, and runtime monitoring.

Full technical report:

    reports/secure-by-default-dockerized-web-app-lab-report.md

---

## Project Goals

- Build an intentionally insecure Dockerized web app
- Identify risky Docker configurations
- Scan the image for vulnerabilities
- Harden the container step by step
- Validate each security improvement with evidence

---

## Lab Stack

| Component | Tool |
|---|---|
| Web App | Python Flask |
| Container Runtime | Docker Desktop |
| Orchestration | Docker Compose |
| Scanner | Trivy |
| Monitoring | Docker Events |
| Host | Windows 11 / PowerShell |

---

## Insecure Baseline

The first version of the container had several intentional weaknesses:

| Issue | Evidence |
|---|---|
| Ran as root | `/whoami` showed `uid: 0`, `user: root` |
| Privileged mode enabled | `docker inspect` showed `Privileged: true` |
| Secret exposed | `/env` showed `SECRET_KEY=supersecret` |
| Large base image | Image size was about `1.62GB` |
| High vulnerability count | Trivy found `154` HIGH/CRITICAL findings |
| Writable filesystem | Root filesystem was writable |

---

## Hardening Performed

The container was hardened by applying the following controls:

- Removed `privileged: true`
- Switched from `python:3.11` to `python:3.11-slim`
- Added a dedicated non-root user
- Enabled a read-only root filesystem
- Dropped Linux capabilities
- Enabled `no-new-privileges`
- Added `/tmp` as a writable tmpfs mount
- Monitored shell access with Docker Events

---

## Results

| Area | Before | After |
|---|---|---|
| Runtime user | root | appuser |
| UID | 0 | 10001 |
| Privileged mode | Enabled | Disabled |
| Image size | 1.62GB | 210MB |
| HIGH/CRITICAL findings | 154 | 4 |
| Critical findings | 13 | 0 |
| Root filesystem | Writable | Read-only |
| Runtime monitoring | None | Docker Events |

---

## Final Dockerfile

    FROM python:3.11-slim

    WORKDIR /app

    RUN useradd -r -u 10001 appuser

    COPY app.py .

    RUN pip install --no-cache-dir flask

    USER appuser

    ENV SECRET_KEY=supersecret

    CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]

---

## Final docker-compose.yml

    services:
      api:
        build: ./flask-api
        ports:
          - "5000:5000"
        environment:
          - FLASK_ENV=development
        read_only: true
        cap_drop:
          - ALL
        security_opt:
          - no-new-privileges:true
        tmpfs:
          - /tmp

---

## Evidence

Evidence is organized into:

    screenshots/
    reports/
    config/


---

## Repository Structure

    secure-docker-webapp-lab
    +-- config
    +-- flask-api
    +-- reports
    +-- screenshots
    +-- docker-compose.yml
    +-- README.md

---

## Key Takeaway

This lab shows how basic Docker hardening steps can significantly improve container security.

The most measurable improvement was reducing HIGH/CRITICAL image findings from `154` to `4`, while also removing privileged mode, enforcing non-root execution, and restricting filesystem writes.
