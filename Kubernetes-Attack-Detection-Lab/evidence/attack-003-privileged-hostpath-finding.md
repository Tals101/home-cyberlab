# Attack 003 - Privileged hostPath Pod Investigation

## Summary
A privileged pod with hostPID enabled and a hostPath mount to `/` was deployed in the attack-lab namespace.

## Risky Settings Observed
- privileged: true
- hostPID: true
- hostPath mount of host `/` to container path `/host`

## Investigation Result
The pod was able to view host filesystem paths through `/host`.

## Security Impact
This configuration creates a serious container escape risk because a compromised container can inspect host files and potentially access sensitive node-level data.

## Falco Result
Falco generated an alert when an interactive shell was spawned inside the privileged container.

## MITRE ATT&CK Mapping
- T1611 - Escape to Host
- T1610 - Deploy Container and Resource
- T1083 - File and Directory Discovery

## Recommended Response
- Delete the privileged pod
- Block privileged containers using Pod Security Standards
- Restrict hostPath usage
- Require non-root containers
- Drop Linux capabilities
- Enforce read-only root filesystems
