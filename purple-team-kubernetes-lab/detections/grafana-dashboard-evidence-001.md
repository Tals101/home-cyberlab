# Blue Team Dashboard Evidence 001 - Grafana Purple Team Dashboard

## Tool
Grafana

## Dashboard Name
Purple Team Kubernetes Lab - Detection Summary

## Purpose
The Grafana dashboard was created to summarize the full purple-team workflow in one visual location. It connects the red-team attack chain to blue-team detection and response findings.

## Dashboard Panels
1. Attack Chain
2. Falco Detection
3. Wazuh Visibility Gap
4. Response Actions

## Detection Summary
Falco successfully detected unexpected Kubernetes API access from inside the red-kubectl container. The detected activity included kubectl commands used to list and access secrets in the pt-app namespace.

## Wazuh Summary
Wazuh did not show matching evidence for the Kubernetes attack activity in the current setup. This was documented as a visibility gap.

## Response Summary
The dashboard recommends removing weak secret permissions, restricting cross-namespace RoleBindings, rotating exposed secrets, forwarding Falco alerts to Wazuh, and reviewing NodePort exposure.

## Evidence
- evidence/grafana-access-url.txt
- evidence/grafana-http-test.txt
- evidence/grafana-dashboard-created.txt
- screenshots/Screenshot 2026-06-18 134109.png
- screenshots/Screenshot 2026-06-18 134235.png

## Analyst Conclusion
Grafana was successfully deployed and used to present the purple-team attack, detection, visibility gap, and response workflow in dashboard form.

