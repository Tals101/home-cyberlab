# Attack 003: Privileged Pod Host Filesystem Access

## Objective
Simulate privilege escalation risk in Kubernetes by creating a privileged pod with a hostPath mount and reading files from the node filesystem.

## Attack Setup
A pod named `privileged-debugger` was created in the `de-target` namespace.

The pod included:
- privileged: true
- runAsUser: 0
- hostPath mount of /
- mountPath: /host
- readOnly: true

## Validation Command
kubectl exec -n de-target privileged-debugger -- bash -c "cat /host/etc/os-release > /tmp/host-os-release-copy.txt && head -n 5 /host/etc/os-release && ls -la /host/root"

## Initial Detection Result
The default Falco rules did not produce a clean detection for this host filesystem access.

## Detection Engineering Action
A custom Falco rule was created to detect reads from `/host` inside containers.

## Custom Rule Name
Host Filesystem Access Through Mounted HostPath

## Detection Result
Detected by custom Falco rule.

## Falco Alert Summary
Falco generated warnings for container access to host filesystem paths.

Key observed fields:
- command: cat /host/etc/os-release
- process: cat
- file: /host/etc/os-release
- user: root
- namespace: de-target
- pod: privileged-debugger
- image: ubuntu:22.04

## MITRE ATT&CK Mapping
- Tactic: Privilege Escalation
- Technique: T1611 - Escape to Host

## Evidence Files
- manifests/privileged-debugger.yaml
- evidence/raw-telemetry/privileged-debugger-pod-describe.txt
- evidence/raw-telemetry/privileged-debugger-pod-yaml.txt
- evidence/raw-telemetry/privileged-debugger-host-access.txt
- evidence/alerts/falco-after-privileged-pod.txt
- evidence/alerts/falco-after-host-access.txt
- rules/falco/custom-rules-values.yaml
- evidence/raw-telemetry/privileged-debugger-host-access-custom-rule-test.txt
- evidence/alerts/falco-after-custom-hostpath-rule.txt

## Detection Status
Covered after custom rule creation.

## False Positive Notes
Possible false positives may occur from legitimate debugging, node maintenance, forensic, backup, or security tooling pods that intentionally mount host filesystems. In production, this should be tightly allowlisted and monitored.
