# Cloud-Native SOC for Kubernetes Workloads

## Project Overview

This project builds a cloud-native SOC lab for Kubernetes workloads. The goal is to simulate suspicious Kubernetes activity, detect runtime behavior, investigate logs, scan container images, validate Wazuh detections, and document the full attack-detect-investigate workflow.

## Core Components

- Kubernetes / Minikube
- Falco
- Wazuh
- Grafana
- Loki
- Promtail
- Trivy
- Docker
- PowerShell

## Architecture

Developer / Analyst
        |
        v
Kubernetes Cluster
        |
        +-- soc-workloads namespace
        |       |
        |       +-- soc-test-pod
        |       +-- privileged-test-pod
        |       +-- suspicious-container
        |       +-- demo-api-secret
        |
        +-- soc-system namespace
                |
                +-- Falco runtime detection
                +-- Loki log storage
                +-- Promtail log collection
                +-- Grafana investigation view
                +-- Wazuh agent DaemonSet
                        |
                        v
                Wazuh Manager Docker Container

## Simulations Completed

1. Interactive shell inside a container
2. Privileged pod shell activity
3. Kubernetes Secret access simulation
4. Suspicious container simulation
5. Container image vulnerability scanning
6. Wazuh failed-login detection validation

## Confirmed Results

- Kubernetes cluster deployed successfully.
- Falco detected shell activity inside containers.
- A privileged pod was deployed and investigated.
- A fake Kubernetes Secret was created and accessed for investigation.
- A suspicious container generated logs for review.
- Loki and Promtail collected Kubernetes workload logs.
- Grafana displayed workload logs from the soc-workloads namespace.
- Trivy generated image scan reports.
- Wazuh manager was deployed as a Docker container.
- Wazuh agent was deployed as a Kubernetes DaemonSet.
- Wazuh agent successfully connected to the Wazuh manager.
- Wazuh logtest validated a failed-login detection mapped to MITRE ATT&CK.

## Evidence and Reports

Key evidence is stored in the evidence folder.

Key reports are stored in the reports folder.

Important files:

- reports/final-validation.txt
- reports/final-project-status.txt
- reports/cloud-native-soc-workflow-summary.txt
- reports/investigation-note-008-wazuh-detection-validation.txt
- evidence/falco-shell-detection.txt
- evidence/falco-privileged-shell-detection.txt
- evidence/wazuh-agent-registration-confirmed.txt
- evidence/wazuh-logtest-failed-login.txt
- evidence/trivy-ubuntu-scan.txt
- screenshots/grafana-loki-soc-workloads-logs.png

## Attack-Detect-Investigate Workflow

1. Deploy Kubernetes workload.
2. Simulate suspicious or risky activity.
3. Detect runtime activity with Falco.
4. Review centralized logs in Grafana/Loki.
5. Scan container images with Trivy.
6. Validate Wazuh detection logic.
7. Save evidence.
8. Write investigation notes.
9. Run final validation.
10. Document the full workflow.

## Scripts

Validation script:

scripts/validate-cloud-native-soc.ps1

Cleanup script:

scripts/cleanup-cloud-native-soc.ps1

## Final Outcome

This lab demonstrates a complete cloud-native SOC workflow for Kubernetes workloads. It combines runtime detection, SIEM-style validation, centralized logging, image vulnerability scanning, Kubernetes investigation, evidence collection, and final reporting.
