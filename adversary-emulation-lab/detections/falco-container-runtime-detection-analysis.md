# Falco Container Runtime Detection Analysis

## Phase

Container Runtime Activity

## Activity Tested

A temporary Ubuntu container was launched in the local Kubernetes lab.

Target:
- Minikube profile: detection-lab
- Namespace: lab7-runtime
- Pod: lab7-shell-test
- Container image: ubuntu:22.04

Activity:
- Opened an interactive shell inside the container
- Ran safe discovery commands
- Reviewed Falco logs for runtime detection

## Falco Search Result

Falco detected the interactive shell activity inside the container.

Observed alert:

| Tool | Alert | Process | User | Container Image | Pod | Namespace |
|---|---|---|---|---|---|---|
| Falco | A shell was spawned in a container with an attached terminal | bash | root | ubuntu:22.04 | lab7-shell-test | lab7-runtime |

## Detection Decision

Result: Detected

## Reason

Falco generated an alert when an interactive bash shell was spawned inside the container.

This matched the container runtime activity simulation because the lab intentionally opened a shell inside the Ubuntu test pod.

## Evidence

Evidence files:

- evidence/container-runtime-command-output.txt
- evidence/container-runtime-pod-status.txt
- evidence/falco-container-runtime-alert-search.txt

Key evidence observed:

- Alert: A shell was spawned in a container with an attached terminal
- Process: bash
- User: root
- Container image: ubuntu:22.04
- Pod: lab7-shell-test
- Namespace: lab7-runtime

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Execution | Command and Scripting Interpreter | T1059 | Detected by Falco |
| Execution | Unix Shell | T1059.004 | Detected by Falco |
| Discovery | System Information Discovery | T1082 | Activity observed inside container |
| Discovery | System Owner/User Discovery | T1033 | Activity observed inside container |
