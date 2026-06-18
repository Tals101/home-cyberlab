# Red Team Finding 003 - Secret Access Through Weak RBAC

## Finding
The red-team pod red-kubectl used the red-operator service account to access the app-config-secret secret in the pt-app namespace.

## Attack Chain Step
Secret Access

## Source
Pod: red-kubectl  
Namespace: pt-red  
Service Account: red-operator

## Target
Secret: app-config-secret  
Namespace: pt-app

## Impact
A pod in the red-team namespace was able to access application secret data from another namespace because of excessive RBAC permissions. In a real environment, this could expose database passwords, API keys, tokens, or other sensitive values.

## Evidence
- evidence/secret-access-time.txt
- evidence/attacker-accessed-secret-yaml.txt
- evidence/attacker-decoded-secret-password.txt

## Purple Team Mapping
Red Team Activity: Secret access through weak RBAC.  
Blue Team Focus: Detect Kubernetes API activity from pods, identify abnormal secret access, and review service account permissions.
