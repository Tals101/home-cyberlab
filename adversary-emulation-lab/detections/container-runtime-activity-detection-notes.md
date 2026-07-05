# Container Runtime Activity Detection Notes

## Phase

Container Runtime Activity

## Attack Activity

A temporary Ubuntu test pod was launched in the local Kubernetes lab.

Target:
- Minikube profile: detection-lab
- Namespace: lab7-runtime
- Pod: lab7-shell-test
- Container image: ubuntu:22.04

Activity:
- Opened an interactive bash shell inside the container
- Ran safe discovery commands inside the container

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Falco | Should detect shell activity inside a container | Detected. Falco alerted on a shell spawned in a container with an attached terminal |
| Wazuh | Not primary for this Kubernetes runtime test | Not applicable |
| Sysmon | Not applicable for Linux container runtime test | Not applicable |

## Detection Result

Overall Container Runtime Activity Detection Result:
- Detected by Falco

## Detection Summary

Falco successfully detected the interactive shell inside the container.

The key alert was:

A shell was spawned in a container with an attached terminal.

## Detection Gaps

- The first non-interactive kubectl exec command did not generate a matching Falco alert in the search output
- The interactive bash shell generated stronger telemetry and was detected
- Analyst review is required to determine whether container shell activity is expected or suspicious

## Evidence Files

- evidence/container-runtime-command-output.txt
- evidence/container-runtime-pod-status.txt
- evidence/falco-container-runtime-alert-search.txt
- detections/falco-container-runtime-detection-analysis.md
