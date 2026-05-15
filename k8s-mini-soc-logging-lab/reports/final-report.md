# Kubernetes Mini SOC Logging & Detection Lab

## Project Summary

This project focused on building a lightweight Kubernetes SOC-style logging and detection environment using Loki, Promtail, and Grafana inside a Minikube Kubernetes cluster.

The objective was to centralize Kubernetes logs, generate attacker telemetry, and build detection-oriented dashboards capable of identifying suspicious activity inside containerized workloads.

---

# Technologies Used

- Kubernetes

- Minikube

- Docker Desktop

- Helm

- Loki

- Promtail

- Grafana

- Kali Linux

---

# Phase 1 — Centralized Logging Deployment

## Objectives

- Deploy centralized logging infrastructure

- Configure Grafana dashboards

- Integrate Loki log aggregation

- Verify Kubernetes log ingestion

## Components

### Loki

Used as the centralized log aggregation platform.

### Promtail

Collected logs from Kubernetes workloads and forwarded them into Loki.

### Grafana

Provided visualization and SOC-style dashboard capabilities.

---

# Phase 2 — Attack Telemetry Generation

## Objectives

- Simulate attacker behavior inside Kubernetes

- Generate suspicious container activity

- Produce telemetry for log analysis

## Activities Performed

### Shell Access

bash
### Reconnaissance

whoami

id
### Sensitive File Access

cat /etc/passwd
### Failed Command Execution

fakecommand
### Network Activity

curl http://loki:3100/ready
---

# Phase 3 — SOC Dashboard Development

## Objectives

- Create centralized visibility dashboards

- Build Kubernetes operational monitoring views

- Develop SOC-oriented workflows

## Dashboard Panels

### Mini SOC Kubernetes Logs

General Kubernetes logging visibility.

### Kubernetes System Logs

Cluster infrastructure monitoring.

### Error Detection View

Basic error-focused hunting panel.

---

# Phase 4 — Detection Engineering

## Objectives

- Build attacker behavior detections

- Create hunting queries

- Validate suspicious activity monitoring

## Detection Panels

### Shell Activity Detection


{namespace="mini-soc"} |= "bash"

### Reconnaissance Activity Detection


{namespace="mini-soc"} |= "whoami"

### Failed Command Detection


{namespace="mini-soc"} |= "not found"

### Sensitive File Access Detection


{namespace="mini-soc"} |= "passwd"

---

# Key Takeaways

- Kubernetes environments generate significant operational telemetry.

- Centralized logging improves visibility across container workloads.

- Detection engineering concepts can be applied inside Kubernetes environments.

- Loki and Grafana provide lightweight but powerful observability capabilities.

- Attack simulation helps validate monitoring and detection workflows.

---

# Skills Demonstrated

- Kubernetes administration

- Helm package management

- Grafana dashboard development

- Loki log aggregation

- Detection engineering

- Threat hunting

- SOC workflows

- Kubernetes observability

- Attack telemetry generation


---

# Conclusion

This project successfully demonstrated centralized Kubernetes logging, attack telemetry generation, detection engineering workflows, and SOC-style monitoring using Grafana, Loki, and Promtail within a self-hosted Kubernetes environment.
