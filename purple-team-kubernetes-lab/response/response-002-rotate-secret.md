# Response Action 002 - Rotated Exposed Training Secret

## Issue
The app-config-secret secret was accessed during the red-team portion of the lab through weak RBAC permissions.

## Response Action
The secret was rotated after access was confirmed.

## Rotated Values
The secret was updated with new training-only values.

## Validation
The rotated secret was retrieved and decoded to confirm the new value was applied.

## Evidence
- evidence/post-response-rotated-secret-yaml.txt
- evidence/post-response-rotated-secret-value.txt

## Security Improvement
Rotating the secret reduces the risk of continued use of a previously exposed value. In a real environment, secret rotation should also include updating dependent applications and revoking the old credential at the source system.

## Purple Team Mapping
Attack: Secret access  
Detection: Falco detected Kubernetes API access from container  
Response: Removed weak RBAC and rotated the exposed secret
