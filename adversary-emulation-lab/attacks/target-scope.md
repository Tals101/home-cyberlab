# Lab Target Scope

## Purpose

This file defines the approved systems for Lab 7: Adversary Emulation.

Only these lab-owned systems may be used for recon, login testing, discovery, collection testing, or detection validation.

## Approved Lab Systems

| System | Role | IP Address | Detection Tool |
|---|---|---|---|
| Kali Linux | Attacker machine | 192.168.56.111 | N/A |
| Ubuntu Server | Linux target / Wazuh agent | 192.168.56.121 | Wazuh |
| Windows VM | Windows target / Sysmon endpoint | 192.168.56.113 | Sysmon + Wazuh |
| Kubernetes / Minikube | Container runtime target | Local lab only | Falco |

## Out of Scope

The following are not allowed:

- Public IP addresses
- Company systems
- Production systems
- Neighbor networks
- Random internet hosts
- Any system I do not own or control

## Lab Rule

All commands in this lab must stay inside the approved home lab environment.
