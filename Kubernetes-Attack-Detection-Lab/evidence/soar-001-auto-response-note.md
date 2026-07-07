# SOAR 001 - Falco Auto-Response Script Test

## Summary
A Python SOAR-style script was created to watch Falco JSON alerts and automatically respond to high-risk Kubernetes runtime events.

## Script
- scripts/falco_soar_response.py

## Test Mode
The script was tested in safe label-only mode.

## Alert Source
Falco generated JSON alerts for suspicious activity from the hardened-busybox pod.

## Triggered Rules
- K8s Attack Lab Interactive Shell
- K8s Attack Lab Shadow File Read
- K8s Attack Lab Network Discovery Tool

## Automated Response Actions
The script identified the offending pod and namespace from the Falco alert fields.

It then labeled the pod:

- status=compromised
- falco-rule=k8s-attack-lab-network-discovery-tool

## Offending Pod
- Pod: hardened-busybox
- Namespace: attack-lab

## Evidence
- evidence/soar-actions.log
- evidence/soar-001-action-log.txt
- evidence/soar-001-pod-labeled-by-script.txt

## Security Value
This turns the lab into a small SOAR-style workflow by connecting detection alerts to automated Kubernetes response actions.

## Safe Default
The script defaults to label-only mode to avoid accidental deletion of workloads.

## Optional Delete Mode
The script also supports --delete mode, which can delete the offending pod after labeling it.
