# Detection Tool Status

## Purpose

This file tracks which detection tools are available for Lab 7 and what each tool is expected to detect.

## Detection Tools

| Tool | Target | Status | Expected Coverage |
|---|---|---|---|
| Wazuh | Ubuntu Server - 192.168.56.121 | Active - agent enrolled as ubuntu-lab7 | Linux authentication, sudo activity, file changes, command/log events |
| Sysmon | Windows VM - 192.168.56.113 | Active - Sysmon64 running on WIN-MALWARE-LAB | Windows process creation, network connections, file activity, persistence activity |
| Falco | Kubernetes / Minikube detection-lab | Active - Falco pod running in de-detection namespace | Container shell activity, suspicious runtime behavior, Kubernetes activity |

## Wazuh Agent Status

Ubuntu endpoint successfully enrolled into Wazuh manager.

Agent details:

- Agent name: ubuntu-lab7
- Agent ID: 003
- Agent status: Active
- Manager address: 192.168.56.1

## Sysmon Status

Windows endpoint has Sysmon installed and running.

Endpoint details:

- Hostname: WIN-MALWARE-LAB
- IP address: 192.168.56.113
- SSH user tested: soclab
- Sysmon service: Sysmon64
- Sysmon log: Microsoft-Windows-Sysmon/Operational
- Sysmon status: Running

## Falco Status

Kubernetes detection environment has Falco running.

Cluster details:

- Minikube profile: detection-lab
- Detection namespace: de-detection
- Falco pod observed: falco-7bcrl
- Falco status: Running

## Notes

Each attack phase will be tested, then mapped to one of the following outcomes:

- Detected
- Partially detected
- Not detected
- Not applicable
