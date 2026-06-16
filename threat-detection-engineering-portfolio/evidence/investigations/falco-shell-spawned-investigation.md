# Investigation Note: Falco Custom Shell Spawned In Container

## Detection Status

Validated

## Detection Platform

Falco

## Validation Method

The custom Falco rule was loaded into a running Falco Helm deployment on Minikube. A shell command was executed inside a Kubernetes container in the detection-lab namespace, and Falco generated an alert.

## Rule File

rules/falco/detection_lab_shell_spawned.yaml

## Helm Values File

live-tests/falco/custom-rules-values.yaml

## Alert Evidence

evidence/alerts/falco-custom-shell-alert.txt

## Raw Telemetry

evidence/raw-telemetry/falco-shell-exec-command-output.txt

## Rule Name

Custom Detection Lab Shell Spawned In Container

## What Happened

A shell was executed inside the Kubernetes pod named shell-trigger.

Namespace:

detection-lab

Image:

alpine:latest

Command executed:

sh -c id; whoami; uname -a

Observed user:

root

## Falco Alert Summary

Falco generated the following custom alert:

Custom Falco detection: shell spawned in detection-lab container

Alert fields included:

- user=root
- image=alpine
- pod=shell-trigger
- namespace=detection-lab
- command=sh -c id; whoami; uname -a

## MITRE ATT&CK Mapping

Technique:

Escape to Host

Technique ID:

T1611

Tactic:

Privilege Escalation

## Analyst Summary

This alert indicates interactive or command-based shell activity inside a running container. In a real Kubernetes environment, this could represent hands-on-keyboard activity, unauthorized troubleshooting, attacker exploration, or preparation for container escape.

In this lab, the behavior was safely simulated using a controlled Alpine pod in the detection-lab namespace.

## Investigation Questions

1. Who executed kubectl exec?
2. Was shell access expected?
3. What commands were executed inside the container?
4. Was the pod running as root?
5. Was the namespace approved for testing?
6. Did the container mount any host paths?
7. Were additional commands run after shell access?
8. Did the container attempt network connections or host file access?

## Recommended Response

- Identify the user who executed kubectl exec
- Review Kubernetes audit logs if available
- Review pod configuration
- Check whether the container runs as root
- Check for hostPath mounts
- Confirm whether shell access was authorized
- Remove unauthorized pods
- Restrict shell access and privileged workloads where possible

## Conclusion

The custom Falco rule was successfully validated against live Kubernetes runtime activity. This provides real detection evidence for the threat detection engineering portfolio.
