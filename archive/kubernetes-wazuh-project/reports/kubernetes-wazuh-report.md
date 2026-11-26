# Kubernetes + Wazuh Log Forwarding and Custom Detection Project

## Project Overview

This project demonstrates how Kubernetes container logs can be forwarded into a Wazuh security monitoring environment using a Wazuh agent deployed inside Kubernetes. The lab also includes a custom Wazuh detection rule that identifies a specific test event generated from a Kubernetes pod.

## Project Goals

The goal of this project was to complete three main tasks:

1. Deploy a Wazuh agent into Kubernetes.
2. Forward Kubernetes container logs to a Wazuh manager.
3. Create and validate a custom Wazuh detection rule.

## Lab Environment

The lab used the following components:

- Windows host system
- Docker Desktop
- Minikube Kubernetes cluster
- Wazuh server running in an Ubuntu virtual machine
- Wazuh manager IP address: 192.168.56.109
- Kubernetes namespace: wazuh-agent
- Test application: nginx-test
- Wazuh agent deployment type: Kubernetes DaemonSet

## Folder Structure

kubernetes-wazuh-project
- config
  - wazuh-agent-config.yaml
  - wazuh-agent-daemonset.yaml
- reports
  - kubernetes-wazuh-report.md
- screenshots
- README.md

## Implementation Summary

A Kubernetes namespace named wazuh-agent was created to hold the project resources. An nginx test deployment was created to generate normal container access logs.

A Wazuh agent was deployed using a Kubernetes DaemonSet. The DaemonSet mounted Kubernetes log locations from the Minikube node so the Wazuh agent could read container logs directly.

The key mounted log paths were:

- /var/log/containers
- /var/log/pods
- /var/lib/docker/containers

The /var/lib/docker/containers mount was required because the Kubernetes log files in /var/log/containers were symbolic links that pointed to the actual Docker JSON log files.

## Wazuh Agent Configuration

The Wazuh agent was configured to forward events to the Wazuh manager at 192.168.56.109.

The agent used:

- Port 1514 for event forwarding
- Port 1515 for agent registration
- TCP protocol

## Kubernetes Log Forwarding Validation

A test pod was created to repeatedly generate this log message:

K8S-WAZUH-TEST-ALERT

The Wazuh agent was confirmed to be able to read the Kubernetes container log directly from inside the agent pod.

Example log content:

{"log":"K8S-WAZUH-TEST-ALERT\n","stream":"stdout","time":"2026-06-08T17:35:54.942017414Z"}

This confirmed that Kubernetes logs were accessible to the Wazuh agent.

## Custom Wazuh Detection Rule

A custom Wazuh rule was added to:

/var/ossec/etc/rules/local_rules.xml

The rule used ID 100200 and searched for the test string:

K8S-WAZUH-TEST-ALERT

Custom rule:

<group name="kubernetes,custom,">
  <rule id="100200" level="10">
    <match>K8S-WAZUH-TEST-ALERT</match>
    <description>Kubernetes test alert detected from container logs</description>
  </rule>
</group>

## Detection Validation

The custom rule was validated using wazuh-logtest, and the rule successfully matched the test event.

The Wazuh alert log confirmed the detection:

Rule: 100200 (level 10) -> Kubernetes test alert detected from container logs

## Evidence Collected

The following evidence was captured:

1. Kubernetes pods running in the wazuh-agent namespace.
2. Wazuh agent DaemonSet configuration showing mounted log paths.
3. Wazuh manager agent list showing the Kubernetes agent.
4. Wazuh alert log showing Rule 100200 triggered.
5. Kubernetes test log showing K8S-WAZUH-TEST-ALERT.

## Troubleshooting Notes

During the lab, the Wazuh agent initially failed to forward Kubernetes logs correctly because /var/log/containers contained symbolic links that pointed to Docker container log files under /var/lib/docker/containers. The DaemonSet was updated to mount /var/lib/docker/containers as read-only.

The Wazuh agent also initially hit a duplicate agent name issue when trying to register as minikube. The DaemonSet was updated so the agent could register cleanly and begin forwarding logs.

## Outcome

This project successfully demonstrated Kubernetes log forwarding into Wazuh using a Wazuh agent DaemonSet. It also proved that custom Wazuh rules can detect specific Kubernetes container log activity.

## Final Status

Deploy Wazuh agent: Completed

Forward Kubernetes logs: Completed

Create custom detection rule: Completed

Validate alert generation: Completed
