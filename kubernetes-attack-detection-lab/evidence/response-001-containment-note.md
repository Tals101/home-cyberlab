# Response 001 - Compromised Privileged Pod Containment

## Action Taken
The privileged hostPath pod was labeled as compromised and deleted from the attack-lab namespace.

## Reason
The pod was configured with dangerous settings:
- privileged: true
- hostPID: true
- hostPath mount of `/`

These settings created a container escape risk and allowed visibility into the host filesystem.

## Containment Result
The compromised pod was removed from the cluster.

## Follow-up Actions
- Apply Pod Security Standards
- Block privileged containers
- Restrict hostPath mounts
- Enforce non-root containers
- Add custom Falco rules
- Rerun attack attempts after hardening
