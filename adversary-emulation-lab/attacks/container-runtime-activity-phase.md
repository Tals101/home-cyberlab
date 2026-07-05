# Container Runtime Activity Phase

## Objective

Simulate safe container runtime activity in the local Kubernetes lab.

## Approved Target

| Target | Environment | Detection Tool |
|---|---|---|
| Minikube detection-lab profile | Local Kubernetes lab | Falco |

## Container Activity

Planned activity:

- Confirm Minikube detection-lab is running
- Launch a temporary Ubuntu test pod
- Open an interactive shell inside the pod
- Run basic discovery commands inside the container
- Review Falco alerts for shell activity inside the container

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Execution | Command and Scripting Interpreter | T1059 |
| Execution | Unix Shell | T1059.004 |
| Discovery | System Information Discovery | T1082 |
| Discovery | System Owner/User Discovery | T1033 |

## Safety Note

This phase uses a temporary container in the local Kubernetes lab only.

No production cluster, company system, or external target is used.
