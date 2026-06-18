# Red Team Finding 002 - Weak RBAC Allowed Secret Discovery

## Finding
A red-team pod running in the pt-red namespace used the red-operator service account to list secrets in the pt-app namespace.

## Attack Chain Step
Weak RBAC to Secret Discovery

## Source Namespace
pt-red

## Target Namespace
pt-app

## Service Account
red-operator

## Impact
The red-operator service account had excessive cross-namespace permissions. This allowed a pod outside the application namespace to discover Kubernetes secrets belonging to the application namespace.

## Evidence
- evidence/weak-rbac-can-list-secrets.txt
- evidence/weak-rbac-rolebinding.txt
- evidence/attacker-listed-secrets.txt

## Purple Team Mapping
Red Team Activity: Abuse weak RBAC to discover secrets.
Blue Team Focus: Detect suspicious Kubernetes API activity, review RoleBindings, and identify cross-namespace secret access.
