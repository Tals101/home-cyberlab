# Final Report: Detection Engineering Kubernetes Lab

## Executive Summary
This lab simulated four Kubernetes attack scenarios and measured whether the activity was detected by default rules, custom rules, or not detected at all.

The lab demonstrated the full detection engineering lifecycle:

1. Simulate attacker behavior
2. Collect telemetry
3. Review alerts
4. Identify detection gaps
5. Create custom detection rules
6. Retest the attack
7. Measure coverage
8. Document MITRE ATT&CK mapping
9. Validate false positive behavior

## Environment
- Platform: Kubernetes on Minikube
- Cluster Profile: detection-lab
- Detection Tooling: Falco
- Detection Logic Formats: Falco, Sigma, Wazuh XML
- Attacker Namespace: de-attacker
- Target Namespace: de-target
- Detection Namespace: de-detection

## Attack Scenarios Tested

| Attack ID | Scenario | Result |
|---|---|---|
| ATTACK-001 | Internal Nmap service scan | Detected by Falco default rule |
| ATTACK-002 | User creation inside container | Missed by default rules, then detected by custom Falco rule |
| ATTACK-003 | Privileged pod host filesystem access | Missed by default rules, then detected by custom Falco rule |
| ATTACK-004 | Reverse shell from container | Detected by Falco default rule |

## Detection Engineering Work Completed

### Default Detection Validation
Falco default rules successfully detected:
- Packet socket creation from Nmap activity
- Shell stdin/stdout redirection to a network connection

### Detection Gaps Found
Two detection gaps were identified:
- Runtime user creation inside a container
- Host filesystem access through a mounted hostPath

### Custom Falco Rules Created
Two custom Falco rules were created:
- Suspicious User Management Command in Container
- Host Filesystem Access Through Mounted HostPath

### Sigma Rules Created
Four Sigma rules were created to make the detection logic portable:
- Kubernetes Container Nmap Packet Socket Activity
- Kubernetes Container User Management Command
- Kubernetes Container HostPath Filesystem Access
- Kubernetes Container Reverse Shell Network Redirection

### Wazuh Rules Created
A Wazuh custom rules file was created to detect Falco-style alert text if Falco logs are forwarded into Wazuh.

## MITRE ATT&CK Mapping

| Attack ID | Technique | Tactic |
|---|---|---|
| ATTACK-001 | T1046 - Network Service Discovery | Discovery |
| ATTACK-002 | T1136.001 - Create Account: Local Account | Persistence |
| ATTACK-003 | T1611 - Escape to Host | Privilege Escalation |
| ATTACK-004 | T1059 - Command and Scripting Interpreter | Execution / Command and Control |

## Coverage Measurement
Total scenarios tested: 4  
Detected scenarios: 4  
Final lab coverage: 100%

## False Positive Testing
A benign command test was performed inside the `admin-toolbox` container. No high-signal detection alerts were generated during the benign test.

## Key Lessons Learned
- Default detection rules can catch some high-risk runtime behaviors, such as reverse shells.
- Default rules may not catch every Kubernetes-specific risk.
- Custom rules are needed to close environment-specific detection gaps.
- Detection coverage should be measured against known attack simulations.
- False positive testing is required before calling a detection useful.
- Detection logic should be documented in multiple formats when possible.

## Final Outcome
This lab produced a complete Kubernetes detection engineering project with:
- Attack evidence
- Alert evidence
- Custom Falco rules
- Sigma rules
- Wazuh custom rules
- MITRE ATT&CK mapping
- Detection coverage summary
- False positive testing
- Final report

## Limitations
The coverage score applies only to the four controlled scenarios tested in this lab. More testing would be needed for broader Kubernetes attack coverage, including Kubernetes API audit logs, admission controller events, RBAC abuse, secret access, and lateral movement.
