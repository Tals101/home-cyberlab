# Coverage Gap 002: Privileged Pod With Host Filesystem Access

## Attack
A privileged Kubernetes pod was created with a read-only hostPath mount of the node filesystem.

## Pod Name
privileged-debugger

## Namespace
de-target

## Risk
The pod was configured with:
- privileged: true
- runAsUser: 0
- hostPath mount of /
- mountPath: /host

## Validation Command
kubectl exec -n de-target privileged-debugger -- bash -c "id; mount | grep /host; head -n 5 /host/etc/os-release; ls -ld /host /host/etc /host/root"

## Result
The container was able to read files from the host filesystem through the /host mount.

## Detection Result
No clean Falco detection was observed from the current rules.

## Why This Matters
Privileged pods with hostPath mounts can allow container escape paths, host reconnaissance, credential discovery, and access to sensitive node files.

## Detection Engineering Decision
Create a custom Falco rule to detect container processes reading files through /host.

## Evidence Files
- evidence/raw-telemetry/privileged-debugger-pod-describe.txt
- evidence/raw-telemetry/privileged-debugger-pod-yaml.txt
- evidence/raw-telemetry/privileged-debugger-host-access.txt
- evidence/alerts/falco-after-privileged-pod.txt
- evidence/alerts/falco-after-host-access.txt

## Status
Coverage gap identified. Custom rule required.
