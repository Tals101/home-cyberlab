# Blue Team Detection Gap 001 - Wazuh Did Not Show Kubernetes Attack Evidence

## Detection Tool
Wazuh

## Result
No matching Wazuh log output was found for the red-kubectl pod, kubectl activity, pt-red namespace, pt-app namespace, or secret access activity.

## Search Terms Used
- falco
- red-kubectl
- kubectl
- secret
- pt-red
- pt-app
- k8s
- api

## Evidence
- evidence/wazuh-pod-status.txt
- evidence/wazuh-logs-after-attack.txt
- evidence/wazuh-attacker-search.txt

## Analysis
Falco successfully detected the suspicious Kubernetes API access from inside the red-kubectl container. However, Wazuh did not show matching evidence during the initial search. This suggests that the current Wazuh deployment is not ingesting the relevant Falco alerts, Kubernetes audit logs, or container runtime events needed to identify this activity.

## Security Meaning
This is a visibility gap. In a production environment, Wazuh should be configured to collect one or more of the following:

- Falco alert logs
- Kubernetes audit logs
- Container runtime logs
- Node-level system logs
- Kubernetes control plane logs

## Purple Team Conclusion
The attack was detected by Falco but was not visible in Wazuh with the current configuration. The recommended improvement is to forward Falco alerts into Wazuh or enable Kubernetes audit log collection so Wazuh can correlate the same activity.
