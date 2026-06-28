# Attack 001: Internal Nmap Service Scan

## Objective
Simulate internal Kubernetes reconnaissance from an attacker pod against a target service.

## Attack Command
kubectl exec -n de-attacker attacker-netshoot -- nmap -sV vulnerable-web.de-target.svc.cluster.local

## Target
- Namespace: de-target
- Service: vulnerable-web
- Port: 80/TCP
- Application: nginx

## Observed Result
Nmap identified port 80/TCP open and detected nginx as the HTTP service.

## Detection Result
Detected by Falco.

## Falco Alert Summary
Falco generated alerts for packet socket creation inside the attacker container.

Key observed fields:
- process: nmap
- pod: attacker-netshoot
- namespace: de-attacker
- image: nicolaka/netshoot
- behavior: packet socket created in container

## MITRE ATT&CK Mapping
- Tactic: Discovery
- Technique: T1046 - Network Service Discovery

## Evidence Files
- evidence/raw-telemetry/nmap-scan-vulnerable-web.txt
- evidence/alerts/falco-after-nmap.txt

## Detection Status
Covered
