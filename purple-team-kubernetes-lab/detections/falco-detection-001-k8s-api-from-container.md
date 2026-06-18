# Blue Team Detection 001 - Falco Detected Kubernetes API Access From Container

## Detection Tool
Falco

## Detection Name
Unexpected connection to K8s API Server from container

## Summary
Falco detected that the red-kubectl pod in the pt-red namespace made a connection to the Kubernetes API server. The activity was generated when kubectl was executed inside the attacker pod to list and access secrets in the pt-app namespace.

## Detected Activity
- Pod: red-kubectl
- Namespace: pt-red
- Process: kubectl
- Destination: Kubernetes API Server
- API Server Address: 10.96.0.1:443
- Command Examples:
  - kubectl get secrets -n pt-app
  - kubectl get secret app-config-secret -n pt-app -o yaml
  - kubectl get secret app-config-secret -n pt-app -o jsonpath={.data.database_password}

## Why This Matters
Containers generally should not run kubectl or directly interact with the Kubernetes API unless there is a clear operational reason. In this lab, the pod was able to use weak RBAC permissions to access application secrets from another namespace.

## Attack Chain Mapping
Exposed Service -> Weak RBAC -> Secret Discovery -> Secret Access -> Falco Detection

## Evidence
- evidence/falco-pod-status.txt
- evidence/falco-logs-after-secret-access.txt
- evidence/falco-attacker-search.txt
- evidence/attacker-listed-secrets.txt
- evidence/attacker-accessed-secret-yaml.txt

## Analyst Conclusion
Falco successfully detected suspicious Kubernetes API activity from inside a container. The detection confirmed that the red-team pod used kubectl to communicate with the Kubernetes API server during the secret discovery and secret access stages.

