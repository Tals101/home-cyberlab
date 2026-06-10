# Falco Detection Engineering

## Project Overview

This project demonstrates Falco detection engineering in a local Kubernetes Minikube environment.

The goal was to complete this workflow:

Simulate Attacks -> Write Detection Rules -> Document Alerts

The lab used Falco to detect suspicious container activity and custom Falco rules to scope detections to a specific Kubernetes namespace.

---

## Objectives

- Simulate suspicious container activity in Kubernetes.
- Generate Falco runtime security alerts.
- Write custom Falco detection rules.
- Load custom rules into Falco using Helm.
- Validate default and custom alerts.
- Document alert evidence with logs and screenshots.

---

## Lab Environment

| Component | Details |
|---|---|
| Host OS | Windows 11 |
| Kubernetes Platform | Minikube |
| Kubernetes Node | minikube |
| Detection Tool | Falco |
| Falco Version | 0.44.0 |
| Package Manager | Helm |
| Test Namespace | falco-demo |
| Test Pod | falco-test-pod |
| Test Image | ubuntu:22.04 |

---

## Project Structure

falco-detection-engineering/

- evidence/ - saved command output, Falco logs, alert output, and inventory files
- manifests/ - Kubernetes manifest files if added later
- reports/ - final Markdown alert documentation
- rules/ - custom Falco detection rules
- screenshots/ - screenshots of alerts and validation evidence
- README.md - project overview and usage summary

---

## Detection Workflow

1. Start Minikube.
2. Install Falco with Helm.
3. Create the falco-demo namespace.
4. Deploy an Ubuntu test pod.
5. Simulate suspicious container behavior.
6. Review Falco logs.
7. Write custom Falco rules.
8. Reload Falco with Helm.
9. Trigger custom detections.
10. Document alerts and evidence.

---

## Simulated Activity

The lab simulated the following behaviors:

1. Opening an interactive shell inside a Kubernetes container.
2. Reading the sensitive Linux file /etc/shadow.
3. Triggering custom namespace-specific Falco detections.

---

## Key Commands Used

### Start Minikube

    minikube start

### Check Kubernetes Node

    kubectl get nodes

### Install Falco

    helm repo add falcosecurity https://falcosecurity.github.io/charts
    helm repo update
    helm install falco falcosecurity/falco --namespace falco --create-namespace

### Verify Falco

    kubectl get pods -n falco
    kubectl logs -n falco -l app.kubernetes.io/name=falco -c falco --tail=100

### Create Test Namespace

    kubectl create namespace falco-demo

### Create Test Pod

    kubectl run falco-test-pod --namespace falco-demo --image=ubuntu:22.04 --command -- sleep 3600

### Simulate Interactive Shell

    kubectl exec -it -n falco-demo falco-test-pod -- bash

### Simulate Sensitive File Read

    kubectl exec -n falco-demo falco-test-pod -- bash -c "cat /etc/shadow"

---

## Default Falco Alerts Observed

### Alert 1: Shell Spawned in Container

Alert text:

    A shell was spawned in a container with an attached terminal

This alert was generated when an interactive shell was opened inside the Ubuntu test pod.

Evidence file:

    evidence/alert-terminal-shell.txt

Screenshot:

    screenshots/01-terminal-shell-alert.png

---

### Alert 2: Sensitive File Opened for Reading

Alert text:

    Sensitive file opened for reading by non-trusted program

This alert was generated when /etc/shadow was read inside the test pod.

Evidence file:

    evidence/alert-sensitive-file.txt

Screenshot:

    screenshots/02-sensitive-file-alert.png

---

## Custom Falco Rules

Custom rules were written in:

    rules/custom-falco-rules.yaml

The custom rules were designed to detect suspicious behavior specifically inside the falco-demo namespace.

### Custom Rule 1

Rule name:

    Custom Terminal Shell In Demo Container

Purpose:

Detect shell execution inside the falco-demo namespace.

### Custom Rule 2

Rule name:

    Custom Sensitive Shadow File Read In Demo Container

Purpose:

Detect attempts to read /etc/shadow inside the falco-demo namespace.

---

## Loading Custom Rules

The custom rules were loaded into Falco using Helm:

    helm upgrade falco falcosecurity/falco --namespace falco --set-file 'customRules.custom-falco-rules\.yaml=rules/custom-falco-rules.yaml'

Falco confirmed the rule file loaded successfully:

    /etc/falco/rules.d/custom-falco-rules.yaml | schema validation: ok

Evidence file:

    evidence/custom-rules-loaded.txt

Screenshot:

    screenshots/03-custom-rules-loaded.png

---

## Custom Alerts Observed

### Custom Alert: Shell Opened in Demo Namespace

Alert text:

    Custom Falco Rule Triggered: shell opened in demo namespace

Evidence file:

    evidence/custom-shell-rule-alert.txt

Screenshot:

    screenshots/05-custom-shell-rule-alert.png

---

### Custom Alert: Sensitive File Read in Demo Namespace

Alert text:

    Custom Falco Rule Triggered: sensitive file read in demo namespace

Evidence file:

    evidence/custom-rule-alerts.txt

Screenshot:

    screenshots/04-custom-rule-alert.png

---

## Evidence Collected

The evidence folder includes:

- alert-terminal-shell.txt
- alert-sensitive-file.txt
- custom-rules-loaded.txt
- custom-rule-alerts.txt
- custom-shell-rule-alert.txt
- falco-pods.txt
- falco-daemonset.txt
- falco-startup-logs.txt
- project-root-inventory.txt
- evidence-folder-inventory.txt
- screenshot-folder-inventory.txt
- rules-folder-inventory.txt
- reports-folder-inventory.txt

---

## Final Report

The final Markdown report is located at:

    reports/falco-alert-documentation.md

The report documents:

- Lab environment
- Detection workflow
- Attack simulations
- Default Falco alerts
- Custom Falco rules
- Custom alert results
- Evidence files
- Screenshots
- Lessons learned

---

## Final Result

This project successfully completed the required detection engineering workflow:

Simulate Attacks -> Write Detection Rules -> Document Alerts

Falco detected suspicious runtime activity inside Kubernetes, and custom rules were successfully written, loaded, validated, and triggered.

---

## Skills Demonstrated

- Kubernetes runtime security monitoring
- Falco installation and validation
- Detection engineering
- Custom rule writing
- Runtime alert analysis
- Evidence collection
- Security documentation
- Kubernetes command-line operations

---

## Lessons Learned

Falco is effective for detecting suspicious container behavior at runtime. The default rules can identify common behaviors such as shell execution and sensitive file access, while custom rules allow detections to be scoped to specific namespaces and lab environments.

This project shows how Falco can support Kubernetes security monitoring, alert validation, and detection engineering workflows.
