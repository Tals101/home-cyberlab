# Kubernetes Mini SOC Logging & Detection Lab

A Kubernetes-focused SOC and detection engineering lab built using Minikube, Loki, Promtail, and Grafana to centralize logs, generate attack telemetry, and create detection-oriented monitoring dashboards.

---

# Project Summary

This project demonstrates how centralized logging and detection engineering concepts can be implemented inside a Kubernetes environment.

The lab focused on:

- centralized log aggregation

- Kubernetes observability

- attack telemetry generation

- SOC dashboard development

- detection engineering workflows

The environment was built entirely inside a self-hosted Kubernetes lab using Minikube.

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

# Project Phases

## Phase 1 — Centralized Logging Deployment

### Objectives

- Deploy Loki logging infrastructure

- Configure Promtail log collection

- Install Grafana dashboards

- Verify Kubernetes log ingestion

### Skills Demonstrated

- Kubernetes administration

- Helm deployments

- Log aggregation

- Kubernetes observability

---

## Phase 2 — Attack Telemetry Generation

### Objectives

- Simulate attacker activity

- Generate suspicious container telemetry

- Validate logging visibility

### Activities

- shell access

- reconnaissance commands

- sensitive file access

- failed command execution

- internal network activity

### Skills Demonstrated

- Kubernetes attack simulation

- telemetry generation

- log validation

- SOC workflow testing

---

## Phase 3 — SOC Dashboard Development

### Objectives

- Build centralized monitoring dashboards

- Create Kubernetes visibility panels

- Develop operational monitoring workflows

### Dashboard Panels

- Mini SOC Kubernetes Logs

- Kubernetes System Logs

- Error Detection View

### Skills Demonstrated

- Grafana dashboard creation

- Kubernetes monitoring

- centralized observability

- operational visibility

---

## Phase 4 — Detection Engineering

### Objectives

- Build attacker-behavior detections

- Create hunting queries

- Validate suspicious activity detections

### Detection Panels

- Shell Activity Detection

- Reconnaissance Activity Detection

- Failed Command Detection

- Sensitive File Access Detection

### Example Queries


{namespace="mini-soc"} |= "bash"



{namespace="mini-soc"} |= "whoami"



{namespace="mini-soc"} |= "not found"



{namespace="mini-soc"} |= "passwd"

### Skills Demonstrated

- detection engineering

- threat hunting

- SOC workflows

- Kubernetes security monitoring

- log analysis

---

# Folder Structure


k8s-mini-soc-logging-lab/

│

├── manifests/

├── configs/

├── reports/

└── screenshots/

---

# Key Takeaways

- Kubernetes environments generate valuable operational telemetry.

- Centralized logging improves visibility into container activity.

- Detection engineering concepts can be applied directly inside Kubernetes.

- Attack simulation helps validate monitoring and detection workflows.

- Grafana and Loki provide lightweight but powerful SOC-style capabilities.

---

# Conclusion

This project successfully demonstrated centralized Kubernetes logging, SOC-style visibility, attack telemetry generation, and detection engineering workflows using Grafana, Loki, and Promtail inside a self-hosted Kubernetes lab environment.
