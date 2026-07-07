# Response 002 - Secret Rotation

## Summary
A Kubernetes application secret was rotated after the simulated compromise.

## Reason
When a workload is compromised, any secrets available to that workload should be considered exposed.

## Action Taken
- Created test secret app-secret
- Captured before-rotation evidence
- Deleted the old secret
- Recreated the secret with a new password value
- Captured after-rotation evidence

## Security Value
Secret rotation reduces the chance that exposed credentials remain useful after containment.

## Follow-up
Applications that consume this secret would need to be restarted or redeployed so they use the rotated value.
