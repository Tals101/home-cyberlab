# Kubernetes + Wazuh Project

This project demonstrates Kubernetes log forwarding into Wazuh using a Wazuh agent deployed as a DaemonSet. It also includes a custom Wazuh detection rule that identifies a test alert generated from a Kubernetes pod.

## Project Objectives

- Deploy a Wazuh agent into Kubernetes
- Forward Kubernetes container logs to Wazuh
- Create a custom Wazuh detection rule
- Validate that the custom rule triggers from Kubernetes log activity

## Folder Structure

kubernetes-wazuh-project
- config
  - wazuh-agent-config.yaml
  - wazuh-agent-daemonset.yaml
- reports
  - kubernetes-wazuh-report.md
- screenshots
- README.md

## Lab Components

- Windows host
- Docker Desktop
- Minikube
- Kubernetes namespace: wazuh-agent
- Wazuh server VM: 192.168.56.109
- Wazuh agent DaemonSet
- nginx test deployment
- Custom Wazuh rule ID: 100200

## Key Validation Commands

Check Kubernetes pods:

kubectl get pods -n wazuh-agent

Check Wazuh agent DaemonSet details:

kubectl describe pod -n wazuh-agent -l app=wazuh-agent

Check Wazuh agents on the Wazuh server:

sudo /var/ossec/bin/agent_control -l

Check custom alert proof:

sudo grep -i "100200" /var/ossec/logs/alerts/alerts.log | tail -20

## Final Result

The lab successfully forwarded Kubernetes container logs into Wazuh and triggered a custom detection rule from Kubernetes log activity.
