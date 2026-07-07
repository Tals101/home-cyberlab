# MITRE ATT&CK Mapping

## Kubernetes Attack Detection and Response Lab

This file maps the simulated attack activity, detection evidence, and response actions to MITRE ATT&CK techniques.

---

## Attack 001 - Interactive Shell in BusyBox

### Activity
An attacker used `kubectl exec` to open an interactive shell inside the BusyBox pod.

### Evidence
- evidence/attack-001-busybox-shell-shadow-falco-alerts.txt
- evidence/attack-001-busybox-pod-describe.txt
- evidence/attack-001-kubernetes-events.txt

### MITRE Mapping
| Tactic | Technique ID | Technique | Lab Evidence |
|---|---:|---|---|
| Execution | T1059.004 | Unix Shell | Shell spawned inside BusyBox container |
| Discovery | T1083 | File and Directory Discovery | Attacker inspected container filesystem |
| Credential Access | T1552 | Unsecured Credentials | Attempted access to `/etc/shadow` |

---

## Attack 002 - Internal Network Discovery

### Activity
The attacker used BusyBox tools to communicate with internal Kubernetes services.

### Evidence
- evidence/attack-002-network-discovery-falco-alerts.txt
- evidence/attack-002-network-discovery-detection-gap.md

### MITRE Mapping
| Tactic | Technique ID | Technique | Lab Evidence |
|---|---:|---|---|
| Discovery | T1046 | Network Service Discovery | `wget` and `nc` used against internal services |
| Discovery | T1613 | Container and Resource Discovery | Kubernetes service discovery inside the cluster |

---

## Attack 003 - Privileged hostPath Pod

### Activity
A privileged pod was deployed with hostPID enabled and a hostPath mount of the host filesystem.

### Evidence
- evidence/attack-003-privileged-hostpath-pod-yaml.txt
- evidence/attack-003-host-access-investigation.txt
- evidence/attack-003-privileged-hostpath-finding.md
- evidence/attack-003-privileged-hostpath-falco-alerts.txt

### MITRE Mapping
| Tactic | Technique ID | Technique | Lab Evidence |
|---|---:|---|---|
| Privilege Escalation | T1611 | Escape to Host | Privileged pod with host filesystem mounted |
| Defense Evasion | T1611 | Escape to Host | Host access through container misconfiguration |
| Discovery | T1083 | File and Directory Discovery | `/host` filesystem inspected |
| Discovery | T1613 | Container and Resource Discovery | Pod and namespace context investigated |

---

## Response 001 - Compromised Pod Containment

### Activity
The risky pod was labeled as compromised and deleted.

### Evidence
- evidence/response-001-compromised-pod-labeled.txt
- evidence/response-001-pod-deleted-verification.txt
- evidence/response-001-containment-note.md

### Response Mapping
| Response Category | Action |
|---|---|
| Containment | Labeled offending pod as compromised |
| Containment | Deleted compromised privileged pod |
| Recovery Prep | Verified remaining workloads |

---

## Response 002 - Secret Rotation

### Activity
A test secret was rotated after simulated compromise.

### Evidence
- evidence/response-002-secret-before-rotation.yaml
- evidence/response-002-secret-after-rotation.yaml
- evidence/response-002-secret-rotation-note.md

### Response Mapping
| Response Category | Action |
|---|---|
| Containment | Treated credentials as potentially exposed |
| Eradication | Removed old secret |
| Recovery | Recreated secret with rotated value |

---

## Hardening 001 - Pod Security Standards

### Activity
Pod Security Standards were applied to the `attack-lab` namespace using the restricted profile.

### Evidence
- evidence/hardening-001-pod-security-standards-labels.txt
- evidence/hardening-001-privileged-pod-blocked.txt
- evidence/hardening-001-pod-security-standards-note.md

### MITRE Mapping
| Tactic | Technique ID | Technique | Defensive Control |
|---|---:|---|---|
| Privilege Escalation | T1611 | Escape to Host | Block privileged containers |
| Privilege Escalation | T1611 | Escape to Host | Block hostPID and hostPath |
| Defense Evasion | T1611 | Escape to Host | Require seccomp and dropped capabilities |

---

## Hardening 003 - Hardened Workloads

### Activity
Hardened workloads were deployed with non-root users, read-only root filesystems, dropped capabilities, resource limits, and seccomp.

### Evidence
- evidence/hardening-003-hardened-workloads-running.txt
- evidence/hardening-003-hardened-busybox-yaml.txt
- evidence/hardening-003-hardened-nginx-deployment-yaml.txt
- evidence/hardening-004-hardened-busybox-attack-rerun.txt

### Defensive Value
| Control | Result |
|---|---|
| runAsNonRoot | Container ran as UID 1000 |
| readOnlyRootFilesystem | File write attempt failed |
| Dropped capabilities | Reduced Linux privilege risk |
| seccomp RuntimeDefault | Added syscall filtering baseline |
| Resource limits | Reduced denial-of-service blast radius |

---

## Detection Engineering

### Custom Falco Rules
1. K8s Attack Lab Interactive Shell
2. K8s Attack Lab Shadow File Read
3. K8s Attack Lab Network Discovery Tool

### Evidence
- Falco_Rules/custom-falco-values.yaml
- evidence/detection-001-falco-custom-rules-values.txt
- evidence/detection-001-falco-custom-rules-loaded.txt
- evidence/detection-002-custom-falco-rule-test-alerts.txt
- evidence/detection-002-custom-falco-rule-test-note.md

### Detection Coverage
| Behavior | Detection Status |
|---|---|
| Interactive shell | Detected |
| `/etc/shadow` read attempt | Detected |
| Network discovery tool | Detected |
| Privileged pod creation | Blocked by Pod Security Standards |
| NetworkPolicy traffic blocking | Gap documented; requires Calico/Cilium |

---

## Summary

This lab demonstrated a full attack detection and response workflow:

1. Baseline cluster deployed
2. Suspicious shell and sensitive file access detected
3. Privileged hostPath pod investigated
4. Compromised pod contained
5. Secret rotated
6. Pod Security Standards enforced
7. Hardened workloads deployed
8. Attacks rerun after hardening
9. Custom Falco rules created and validated
10. NetworkPolicy enforcement gap documented

---

## SOAR-Style Automated Response

### Activity
A Python script was created to watch Falco JSON alerts and automatically respond to high-risk Kubernetes runtime detections.

### Script
- scripts/falco_soar_response.py

### Capabilities
| Capability | Result |
|---|---|
| Watch Falco JSON alerts | Completed |
| Identify offending pod | Completed |
| Identify namespace | Completed |
| Label pod as compromised | Completed |
| Log action locally | Completed |
| Delete disposable test pod | Completed |

### Evidence
- evidence/soar-actions.log
- evidence/soar-001-action-log.txt
- evidence/soar-001-pod-labeled-by-script.txt
- evidence/soar-001-auto-response-note.md
- evidence/soar-delete-actions.log
- evidence/soar-002-delete-mode-action-log.txt
- evidence/soar-002-delete-mode-pod-removed-verification.txt
- evidence/soar-002-delete-mode-note.md

### Defensive Mapping
| Response Category | Action |
|---|---|
| Detection | Consumed Falco runtime alerts |
| Triage | Extracted pod, namespace, rule, priority, and command |
| Containment | Labeled suspicious pod as compromised |
| Containment | Deleted disposable suspicious pod in delete mode |
| Documentation | Logged response actions to local evidence files |

### Security Value
This automation connected runtime detection to Kubernetes response actions. The workflow demonstrated how a security team could move from alerting to containment using a lightweight SOAR-style script.
