# Project 5: Purple Team Kubernetes Lab

## Overview

This project is a controlled Kubernetes purple-team lab that demonstrates the full workflow from red-team attack simulation to blue-team detection and response.

The lab focuses on three Kubernetes security risks:

1. Exposed services
2. Weak RBAC
3. Secret access

The defensive side validates visibility through:

1. Falco
2. Wazuh
3. Grafana

Final workflow:

Attack Chain -> Detection -> Investigation -> Response

## Lab Architecture

The lab uses three namespaces:

| Namespace | Purpose |
|---|---|
| pt-app | Target application and secrets |
| pt-red | Red-team attacker pod and service account |
| pt-blue | Blue-team Grafana dashboard |

## Tools Used

- Kubernetes
- Minikube
- kubectl
- Falco
- Wazuh
- Grafana
- PowerShell

## Attack Chain

The red-team portion simulated the following chain:

1. Deploy an exposed Kubernetes service using NodePort.
2. Create weak RBAC that allowed cross-namespace secret access.
3. Launch an attacker pod using the red-operator service account.
4. List secrets in the pt-app namespace.
5. Access and decode a training-only secret.

## Detection

### Falco

Falco successfully detected suspicious Kubernetes API access from inside the red-kubectl container.

Key detection:

Unexpected connection to K8s API Server from container

Falco identified kubectl activity from the attacker pod while it accessed Kubernetes secrets.

### Wazuh

Wazuh did not show matching evidence for this Kubernetes attack activity in the current lab setup.

This was documented as a visibility gap. The recommended improvement is to forward Falco alerts, Kubernetes audit logs, or container runtime logs into Wazuh.

### Grafana

Grafana was deployed in the pt-blue namespace and used to create a dashboard summarizing:

- Attack Chain
- Falco Detection
- Wazuh Visibility Gap
- Response Actions

## Response Actions

Two response actions were completed:

1. Removed the weak RoleBinding that allowed cross-namespace secret access.
2. Rotated the exposed training-only secret.

Validation confirmed that the red-operator service account could no longer list secrets in the pt-app namespace after the weak RoleBinding was removed.

## Key Findings

| Finding | Summary |
|---|---|
| Exposed Service | target-web was exposed using NodePort |
| Weak RBAC | red-operator could list secrets across namespaces |
| Secret Access | red-kubectl accessed app-config-secret |
| Falco Detection | Falco detected Kubernetes API access from container |
| Wazuh Gap | Wazuh did not show matching evidence in current setup |
| Response | Weak RBAC removed and secret rotated |

## Project Structure

purple-team-kubernetes-lab/
  attacks/
  detections/
  evidence/
  manifests/
  reports/
  response/
  screenshots/
  README.md

## Important Files

| File | Purpose |
|---|---|
| reports/attack-chain-detection-response-report.md | Final project report |
| attacks/finding-001-exposed-service.md | Exposed service finding |
| attacks/finding-002-weak-rbac-secret-discovery.md | Weak RBAC finding |
| attacks/finding-003-secret-access.md | Secret access finding |
| detections/falco-detection-001-k8s-api-from-container.md | Falco detection writeup |
| detections/wazuh-detection-gap-001.md | Wazuh visibility gap |
| detections/grafana-dashboard-evidence-001.md | Grafana dashboard evidence |
| response/response-001-remove-weak-rbac.md | RBAC response action |
| response/response-002-rotate-secret.md | Secret rotation response action |

## Evidence Summary

The lab includes evidence for:

- Kubernetes node status
- Namespace creation
- Exposed service deployment
- NodePort discovery
- Weak RBAC validation
- Attacker pod secret access
- Falco detection logs
- Wazuh visibility check
- Grafana dashboard creation
- RBAC remediation
- Secret rotation
- Project artifact inventory

## Security Lessons Learned

- NodePort services should be reviewed carefully.
- Service accounts should follow least privilege.
- Cross-namespace RoleBindings can create serious exposure.
- Secrets should not be readable by unrelated workloads.
- Falco is useful for runtime detection of suspicious container behavior.
- Wazuh needs the correct log sources to provide Kubernetes visibility.
- Response actions should always be validated with evidence.

## Final Result

This project completed a full purple-team Kubernetes workflow:

Attack Chain -> Detection -> Investigation -> Response

## Screenshot Evidence

The screenshots folder includes visual evidence for the Kubernetes purple-team lab, including Grafana dashboard evidence, Kubernetes command output, Falco detection output, response validation, and artifact counts.

Screenshots included:

- screenshots/grafana-home.png
- screenshots/grafana-purple-team-dashboard.png
- screenshots/Screenshot 2026-06-18 135650.png
- screenshots/Screenshot 2026-06-18 135731.png
- screenshots/Screenshot 2026-06-18 135753.png
- screenshots/Screenshot 2026-06-18 135832.png
- screenshots/Screenshot 2026-06-18 135859.png

Screenshot inventory file:

- evidence/screenshot-inventory.txt
