# Attack 002: Suspicious User Creation Inside Container

## Objective
Simulate post-exploitation user creation inside a Kubernetes workload container.

## Initial Attack Command
kubectl exec -n de-target admin-toolbox -- bash -c "useradd -m labsvc01 && id labsvc01 && tail -n 5 /etc/passwd"

## Initial Detection Result
The default Falco rules did not produce a useful detection for the `useradd` activity.

## Detection Engineering Action
A custom Falco rule was created to detect user and group management commands inside containers.

## Custom Rule Name
Suspicious User Management Command in Container

## Validation Attack Command
kubectl exec -n de-target admin-toolbox -- bash -c "useradd -m labsvc02 && id labsvc02 && grep labsvc02 /etc/passwd"

## Detection Result
Detected by custom Falco rule.

## Falco Alert Summary
Falco generated warnings for suspicious user-management command execution.

Key observed fields:
- command: useradd -m labsvc02
- process: useradd
- parent: bash / useradd
- user: root
- namespace: de-target
- pod: admin-toolbox
- image: ubuntu:22.04

## MITRE ATT&CK Mapping
- Tactic: Persistence
- Technique: T1136.001 - Create Account: Local Account

## Evidence Files
- evidence/raw-telemetry/user-creation-labsvc01.txt
- evidence/alerts/falco-after-user-creation.txt
- rules/falco/custom-rules-values.yaml
- evidence/raw-telemetry/user-creation-labsvc02-custom-rule-test.txt
- evidence/alerts/falco-after-custom-user-rule.txt

## Detection Status
Covered after custom rule creation.

## False Positive Notes
Potential false positives may occur if legitimate administrative containers run user-management commands during testing, troubleshooting, or image initialization. In production, this should usually be rare because containers should not normally create local users at runtime.
