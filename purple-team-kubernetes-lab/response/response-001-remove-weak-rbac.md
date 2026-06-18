# Response Action 001 - Removed Weak RBAC Secret Access

## Issue
The red-operator service account in the pt-red namespace had permission to list and get secrets in the pt-app namespace through the weak-secret-reader-binding RoleBinding.

## Response Action
The weak-secret-reader-binding RoleBinding was deleted from the pt-app namespace.

## Validation
After removing the RoleBinding, the red-operator service account was tested again.

Result:
red-operator can list secrets in pt-app: no

The attacker pod was also tested again and received a Forbidden response when attempting to list secrets.

## Evidence
- evidence/post-response-rbac-denied.txt
- evidence/post-response-attacker-secret-denied.txt

## Security Improvement
Removing the RoleBinding stopped cross-namespace secret access from the red-team namespace. This reduced the impact of the weak RBAC condition and prevented the attacker pod from continuing to access application secrets.

## Purple Team Mapping
Attack: Weak RBAC secret access  
Detection: Falco alert for Kubernetes API access from container  
Response: Removed RoleBinding and validated access was denied
