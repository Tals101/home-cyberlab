# MITRE ATT&CK Mapping

## Lab Name
Detection Engineering Kubernetes Lab

## ATTACK-001: Internal Nmap Service Scan

### Technique
T1046 - Network Service Discovery

### Tactic
Discovery

### Why It Maps
The attacker pod used Nmap to identify exposed services inside the Kubernetes cluster.

### Detection Source
Falco default rule

### Evidence
- evidence/raw-telemetry/nmap-scan-vulnerable-web.txt
- evidence/alerts/falco-after-nmap.txt

---

## ATTACK-002: User Creation Inside Container

### Technique
T1136.001 - Create Account: Local Account

### Tactic
Persistence

### Why It Maps
The target container executed `useradd` to create a local Linux account inside the container.

### Detection Source
Custom Falco rule

### Evidence
- evidence/raw-telemetry/user-creation-labsvc01.txt
- evidence/raw-telemetry/user-creation-labsvc02-custom-rule-test.txt
- evidence/alerts/falco-after-custom-user-rule.txt

---

## ATTACK-003: Privileged Pod Host Filesystem Access

### Technique
T1611 - Escape to Host

### Tactic
Privilege Escalation

### Why It Maps
A privileged Kubernetes pod mounted the host filesystem and accessed files through `/host`, demonstrating host escape risk.

### Detection Source
Custom Falco rule

### Evidence
- manifests/privileged-debugger.yaml
- evidence/raw-telemetry/privileged-debugger-host-access-custom-rule-test.txt
- evidence/alerts/falco-after-custom-hostpath-rule.txt

---

## ATTACK-004: Reverse Shell From Container

### Technique
T1059 - Command and Scripting Interpreter

### Tactic
Execution / Command and Control

### Why It Maps
The target container used Bash to redirect stdin/stdout over a TCP connection to an attacker listener.

### Detection Source
Falco default rule

### Evidence
- evidence/raw-telemetry/reverse-shell-listener-log.txt
- evidence/alerts/falco-after-reverse-shell.txt
