# Project 5: Purple Team Kubernetes Lab

## Executive Summary

This project built a controlled Kubernetes purple-team lab that connected red-team activity to blue-team detection and response. The lab simulated a realistic attack chain involving an exposed Kubernetes service, weak RBAC permissions, and secret access from inside a container.

The blue-team side validated detection through Falco, checked Wazuh visibility, created a Grafana dashboard, and performed response actions to remove the weak RBAC condition and rotate the exposed training secret.

## Lab Objective

The objective of this lab was to document the full workflow:

Attack Chain -> Detection -> Investigation -> Response

## Environment

- Kubernetes Platform: Minikube
- Target Namespace: pt-app
- Red Team Namespace: pt-red
- Blue Team Namespace: pt-blue
- Runtime Detection: Falco
- SIEM/Log Visibility Check: Wazuh
- Dashboarding: Grafana

## Attack Chain Summary

| Phase | Red-Team Action | Result | Evidence |
|---|---|---|---|
| 1 | Deployed exposed service | target-web exposed using NodePort | evidence/exposed-service-created.txt |
| 2 | Validated service access | Service was reachable using port-forward | evidence/exposed-service-http-test.txt |
| 3 | Created weak RBAC | red-operator could list secrets in pt-app | evidence/weak-rbac-can-list-secrets.txt |
| 4 | Ran attacker pod | red-kubectl pod used red-operator service account | evidence/attacker-listed-secrets.txt |
| 5 | Accessed secret | app-config-secret was accessed from attacker pod | evidence/attacker-accessed-secret-yaml.txt |
| 6 | Decoded fake secret | training secret value was decoded | evidence/attacker-decoded-secret-password.txt |

## Red-Team Findings

### Finding 001 - Exposed Kubernetes Service

A service named target-web was exposed in the pt-app namespace using NodePort. This increased the attack surface by making the workload reachable outside the normal internal service boundary.

Evidence:
- attacks/finding-001-exposed-service.md
- evidence/exposed-service-created.txt
- evidence/exposed-service-url.txt
- evidence/exposed-service-http-test.txt

### Finding 002 - Weak RBAC Allowed Secret Discovery

The red-operator service account in pt-red was bound to a Role in pt-app that allowed get, list, and watch permissions on secrets. This created a cross-namespace access weakness.

Evidence:
- attacks/finding-002-weak-rbac-secret-discovery.md
- evidence/weak-rbac-can-list-secrets.txt
- evidence/weak-rbac-rolebinding.txt
- evidence/attacker-listed-secrets.txt

### Finding 003 - Secret Access Through Weak RBAC

The red-kubectl pod used the red-operator service account to access app-config-secret in the pt-app namespace.

Evidence:
- attacks/finding-003-secret-access.md
- evidence/secret-access-time.txt
- evidence/attacker-accessed-secret-yaml.txt
- evidence/attacker-decoded-secret-password.txt

## Blue-Team Detection Summary

### Falco Detection

Falco successfully detected suspicious Kubernetes API access from inside the red-kubectl container.

Detected behavior included:
- kubectl running inside a container
- connection from the container to the Kubernetes API server
- secret listing and secret access activity

Falco alert:
Unexpected connection to K8s API Server from container

Evidence:
- detections/falco-detection-001-k8s-api-from-container.md
- evidence/falco-pod-status.txt
- evidence/falco-logs-after-secret-access.txt
- evidence/falco-attacker-search.txt

### Wazuh Visibility Check

Wazuh did not show matching evidence for the Kubernetes attack activity during the search. This was documented as a detection visibility gap.

This does not mean Wazuh failed as a platform. It means the current lab configuration was not forwarding the relevant Falco alerts, Kubernetes audit logs, or container runtime logs into Wazuh.

Evidence:
- detections/wazuh-detection-gap-001.md
- evidence/wazuh-pod-status.txt
- evidence/wazuh-logs-after-attack.txt
- evidence/wazuh-attacker-search.txt

### Grafana Dashboard

Grafana was deployed in the pt-blue namespace and used to create a dashboard summarizing the attack chain, Falco detection, Wazuh visibility gap, and response actions.

Evidence:
- detections/grafana-dashboard-evidence-001.md
- evidence/grafana-access-url.txt
- evidence/grafana-http-test.txt
- evidence/grafana-dashboard-created.txt
- screenshots/grafana-home.png
- screenshots/grafana-purple-team-dashboard.png

## Response Actions

### Response Action 001 - Removed Weak RBAC

The weak-secret-reader-binding RoleBinding was deleted from the pt-app namespace. After the RoleBinding was removed, the red-operator service account could no longer list secrets in pt-app.

Validation result:
red-operator can list secrets in pt-app: no

Evidence:
- response/response-001-remove-weak-rbac.md
- evidence/post-response-rbac-denied.txt
- evidence/post-response-attacker-secret-denied.txt

### Response Action 002 - Rotated Exposed Training Secret

The app-config-secret secret was rotated after red-team access was confirmed. The rotated value was validated and saved as evidence.

Evidence:
- response/response-002-rotate-secret.md
- evidence/post-response-rotated-secret-yaml.txt
- evidence/post-response-rotated-secret-value.txt

## Final Attack Chain Mapping

| Attack Stage | Detection Source | Response |
|---|---|---|
| Exposed service | Kubernetes service review and Grafana dashboard documentation | Review NodePort usage |
| Weak RBAC | kubectl auth validation and RBAC evidence | Removed weak RoleBinding |
| Secret discovery | Falco detected Kubernetes API access from container | Restricted secret permissions |
| Secret access | Falco detected kubectl commands from red-kubectl | Rotated exposed training secret |
| Wazuh visibility check | No matching Wazuh evidence found | Recommend forwarding Falco or Kubernetes audit logs into Wazuh |

## Lessons Learned

1. NodePort services should be reviewed carefully because they increase service exposure.
2. Cross-namespace RoleBindings can create serious security risk when they grant access to secrets.
3. Falco can provide useful runtime detection for suspicious Kubernetes API access from containers.
4. Wazuh requires the right log sources to detect Kubernetes-specific attack activity.
5. Grafana can help present attack, detection, gap, and response information in a clear operational dashboard.
6. Response documentation is strongest when it includes validation that the attacker behavior is no longer possible.

## Recommended Improvements

- Forward Falco alerts into Wazuh.
- Enable Kubernetes audit logs for stronger API-level visibility.
- Restrict service accounts using least privilege.
- Avoid unnecessary NodePort exposure.
- Rotate secrets after confirmed or suspected exposure.
- Create alerts for kubectl execution inside containers.
- Review all RoleBindings that grant access to secrets.

## Conclusion

This lab successfully demonstrated a complete Kubernetes purple-team workflow. The red-team path showed how exposed services and weak RBAC can lead to secret access. The blue-team path showed that Falco detected the suspicious Kubernetes API activity, Wazuh had a visibility gap in the current setup, and Grafana provided a dashboard summary. The response phase removed the weak RBAC condition, validated that access was denied, and rotated the exposed training secret.

Final workflow completed:

Attack Chain -> Detection -> Investigation -> Response


