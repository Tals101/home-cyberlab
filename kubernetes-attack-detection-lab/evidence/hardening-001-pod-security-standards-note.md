# Hardening 001 - Pod Security Standards Enforcement

## Summary
Pod Security Standards were applied to the attack-lab namespace using the restricted profile.

## Namespace Labels Applied
- pod-security.kubernetes.io/enforce=restricted
- pod-security.kubernetes.io/audit=restricted
- pod-security.kubernetes.io/warn=restricted

## Test Performed
The previously used privileged hostPath pod was re-applied after hardening.

## Result
Kubernetes blocked the pod from being created.

## Blocked Risky Settings
- hostPID=true
- privileged=true
- hostPath volume
- allowPrivilegeEscalation not set to false
- Linux capabilities not dropped
- runAsNonRoot not set to true
- seccompProfile missing

## Security Value
This hardening control prevented the same container escape-style workload from being deployed again.

## MITRE ATT&CK Mapping
- T1611 - Escape to Host
- T1610 - Deploy Container and Resource

## Conclusion
Pod Security Standards successfully reduced cluster risk by blocking privileged workload creation.
