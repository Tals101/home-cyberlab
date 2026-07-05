# Recon Evidence Summary

## Phase

Recon

## Source System

Kali Linux attacker machine

- IP address: 192.168.56.111

## Target Systems

| Target | IP Address | Detection Tool |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Wazuh |
| Windows VM | 192.168.56.113 | Sysmon |

## Command Used

nmap -Pn -sV 192.168.56.121 192.168.56.113 -oN ~/lab7-recon/recon-scan-results.txt

## Purpose

The purpose of this step was to simulate safe network reconnaissance against approved lab-owned systems.

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Discovery | Network Service Discovery | T1046 |
| Discovery | Remote System Discovery | T1018 |

## Evidence File

- evidence/recon-scan-results.txt

## Notes

The scan was limited to approved home lab IP addresses only.
