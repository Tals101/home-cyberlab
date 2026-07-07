# Kubernetes Attack Detection and Response Lab
## Professional Incident Report

---

## 1. Executive Summary

This lab simulated a Kubernetes compromise scenario where an attacker gained shell access inside a container, attempted to read sensitive files, performed internal service discovery, and tested a privileged hostPath pod for container escape risk.

Falco detected shell activity and sensitive file access. Custom Falco rules were then created to detect interactive shells, /etc/shadow access, and network discovery tools such as wget, curl, and nc.

The response phase included labeling and deleting the compromised pod, rotating a Kubernetes secret, enforcing Pod Security Standards, deploying hardened workloads, and rerunning attacks to validate the controls.

The hardened configuration successfully blocked privileged workload creation, prevented non-root containers from reading /etc/shadow, and enforced a read-only root filesystem. A NetworkPolicy enforcement gap was also documented because the current Minikube profile does not include a NetworkPolicy-capable CNI such as Calico or Cilium.

---

## 2. Environment

| Component | Value |
|---|---|
| Platform | Windows host with Docker Desktop |
| Kubernetes | Minikube |
| Cluster Node | minikube |
| Detection Tool | Falco |
| Namespace | attack-lab |
| Workloads | Juice Shop, nginx, BusyBox |
| Hardening Controls | Pod Security Standards, non-root containers, read-only filesystem, dropped capabilities, seccomp, resource limits |

---

## 3. Timeline

| Phase | Activity | Result |
|---|---|---|
| Phase 1 | Deployed Juice Shop, nginx, and BusyBox | All workloads reached Running state |
| Phase 2 | Verified Falco installation | Falco daemonset running and logging |
| Phase 3 | Executed shell inside BusyBox | Falco detected shell activity |
| Phase 3 | Attempted to read /etc/shadow | Falco detected sensitive file access |
| Phase 4 | Deployed privileged hostPath pod | Host filesystem access risk confirmed |
| Phase 5 | Collected pod descriptions, events, logs, and Falco alerts | Evidence saved locally |
| Phase 6 | Labeled and deleted compromised pod | Containment completed |
| Phase 6 | Rotated Kubernetes secret | Secret rotation completed |
| Phase 7 | Applied Pod Security Standards | Dangerous privileged pod was blocked |
| Phase 7 | Deployed hardened workloads | Hardened BusyBox and nginx deployed |
| Phase 7 | Reran attack against hardened BusyBox | /etc/shadow and write attempt blocked |
| Phase 8 | Created custom Falco rules | Custom detections successfully triggered |

---

## 4. Initial Detection

Falco detected the first suspicious activity when an interactive shell was spawned inside the BusyBox container.

Detection evidence:

- Alert: A shell was spawned in a container with an attached terminal
- Pod: busybox
- Namespace: attack-lab
- User: root
- Container image: busybox:1.36

Security meaning:

The alert indicates that a shell was executed inside a running container. This can be legitimate during troubleshooting, but it is also common attacker behavior after gaining access to a workload.

---

## 5. Sensitive File Access

After shell access was obtained, the attacker attempted to read:

- /etc/shadow

Falco generated a warning for sensitive file access.

Detection evidence:

- Alert: Sensitive file opened for reading by non-trusted program
- File: /etc/shadow
- Process: cat /etc/shadow
- Pod: busybox
- Namespace: attack-lab

Security meaning:

/etc/shadow contains local password hash information on Linux systems. Access attempts inside a container may indicate credential discovery or post-exploitation activity.

---

## 6. Internal Network Discovery

The BusyBox pod was used to test access to internal Kubernetes services.

Services tested:

- nginx.attack-lab.svc.cluster.local
- juice-shop.attack-lab.svc.cluster.local

Commands tested:

- wget
- nc

Finding:

Default Falco detections showed shell activity, but did not clearly alert on all internal network discovery behavior. This created a detection engineering opportunity.

Detection improvement:

A custom Falco rule was later created to detect network discovery tools launched inside containers.

---

## 7. Container Escape Investigation

A privileged pod was deployed with dangerous settings:

- privileged: true
- hostPID: true
- hostPath mount of /

The pod mounted the host filesystem at:

- /host

Investigation result:

The pod was able to inspect host paths through the /host mount.

Security impact:

This configuration creates a serious container escape risk. If an attacker compromises a privileged container with hostPath access, they may be able to inspect or tamper with host-level files depending on the mount, runtime, and permissions.

---

## 8. Indicators of Compromise

| Indicator | Type | Description |
|---|---|---|
| busybox | Pod | Pod used for interactive shell and file access testing |
| privileged-hostpath-pod | Pod | Risky pod used for container escape investigation |
| /etc/shadow | File path | Sensitive file access attempt |
| /host | Mount path | Host filesystem exposed inside privileged pod |
| wget | Process | Used for internal service discovery |
| nc | Process | Used for network connectivity checks |
| attack-lab | Namespace | Namespace where attack activity occurred |

---

## 9. MITRE ATT&CK Mapping

| Tactic | Technique ID | Technique | Lab Activity |
|---|---:|---|---|
| Execution | T1059.004 | Unix Shell | Shell spawned inside BusyBox |
| Discovery | T1083 | File and Directory Discovery | File system inspection |
| Discovery | T1046 | Network Service Discovery | Internal service checks with wget and nc |
| Discovery | T1613 | Container and Resource Discovery | Kubernetes service and pod investigation |
| Credential Access | T1552 | Unsecured Credentials | Attempted access to /etc/shadow |
| Privilege Escalation | T1611 | Escape to Host | Privileged hostPath pod |
| Defense Evasion | T1611 | Escape to Host | Host filesystem exposed to container |

---

## 10. Root Cause

The simulated compromise was enabled by insecure Kubernetes workload configurations and insufficient default prevention controls.

Primary issues included:

- Workloads running as root
- Writable root filesystem
- Lack of namespace-level Pod Security enforcement at the beginning of the lab
- Ability to deploy privileged workloads before hardening
- No active NetworkPolicy enforcement in the current Minikube profile
- Default detection gaps for some network discovery activity

---

## 11. Containment

Containment actions performed:

1. Labeled the risky pod as compromised.
2. Deleted the privileged hostPath pod.
3. Verified remaining workloads.
4. Preserved evidence in the evidence folder.

Result:

The simulated compromised privileged pod was removed from the cluster.

---

## 12. Eradication

Eradication actions performed:

1. Removed the dangerous privileged pod.
2. Rotated the test Kubernetes secret.
3. Recreated the secret with a new value.
4. Applied namespace-level Pod Security Standards.

Result:

The risky workload was removed and the exposed secret was replaced.

---

## 13. Recovery

Recovery actions performed:

1. Deployed hardened workloads.
2. Verified hardened pods were running.
3. Reran attack attempts.
4. Confirmed hardened BusyBox ran as non-root.
5. Confirmed /etc/shadow access was denied.
6. Confirmed writing to /test-file failed because the root filesystem was read-only.

Result:

The hardened workloads reduced attacker capability after compromise.

---

## 14. Hardening Actions

| Control | Status | Result |
|---|---|---|
| Pod Security Standards | Completed | Privileged pod blocked |
| Non-root containers | Completed | Hardened BusyBox ran as UID 1000 |
| Read-only root filesystem | Completed | File write attempt failed |
| Drop Linux capabilities | Completed | Reduced privilege risk |
| Seccomp RuntimeDefault | Completed | Added syscall filtering baseline |
| Resource limits | Completed | Reduced resource abuse risk |
| Secret rotation | Completed | Old secret removed and replaced |
| NetworkPolicy | Gap documented | Requires Calico/Cilium or similar CNI |

---

## 15. Detection Engineering

Three custom Falco rules were created:

1. K8s Attack Lab Interactive Shell
2. K8s Attack Lab Shadow File Read
3. K8s Attack Lab Network Discovery Tool

Test result:

The custom rules successfully generated alerts for:

- Interactive shell execution
- /etc/shadow read attempt
- wget network discovery activity

This improved runtime visibility and closed a detection gap found earlier in the lab.

---

## 16. Lessons Learned

Key lessons from the lab:

1. Runtime detection is valuable, but prevention controls are still required.
2. Privileged containers and hostPath mounts create serious container escape risk.
3. Falco can detect suspicious container behavior quickly.
4. Custom rules are important for environment-specific detection coverage.
5. Pod Security Standards can block dangerous workloads before they run.
6. NetworkPolicy requires an enforcing CNI; applying YAML alone is not enough.
7. Incident response should include evidence collection, containment, credential rotation, hardening, and validation testing.

---

## 17. Recommendations

Recommended next steps:

1. Rebuild or create a second Minikube profile using Calico for NetworkPolicy testing.
2. Integrate Falco alerts with Fluent Bit, Elasticsearch, and Kibana.
3. Build dashboards for alert severity, namespace, pod, user, and rule.
4. Add SOAR-style automation to label and quarantine suspicious pods.
5. Expand custom Falco rules for additional Kubernetes behaviors.
6. Add GitHub documentation, screenshots, and architecture diagrams.
7. Convert this report to PDF for final portfolio submission.

---

## 18. Conclusion

This lab demonstrated a realistic Kubernetes blue team workflow covering detection, investigation, containment, eradication, recovery, hardening, detection engineering, and documentation.

The final result is a portfolio-ready Kubernetes security project that shows hands-on experience with Kubernetes runtime detection, incident response, hardening, MITRE ATT&CK mapping, and security automation planning.

---

## 19. SOAR-Style Auto Response

A Python SOAR-style response script was created to connect Falco detections to automated Kubernetes response actions.

### Script

- scripts/falco_soar_response.py

### Capabilities

The script can:

- Watch Falco JSON alerts
- Identify the offending pod
- Identify the namespace
- Label the pod as compromised
- Optionally delete the pod
- Log all response actions locally

### Safe Mode Test

The script was first tested in label-only mode.

Result:

- Pod hardened-busybox was labeled as compromised
- Falco rule information was added as a Kubernetes label
- Response activity was logged locally

Evidence:

- evidence/soar-actions.log
- evidence/soar-001-action-log.txt
- evidence/soar-001-pod-labeled-by-script.txt
- evidence/soar-001-auto-response-note.md

### Delete Mode Test

The script was then tested in delete mode using a disposable pod.

Disposable pod:

- soar-test-busybox

Result:

- The pod generated Falco alerts
- The script identified the pod and namespace
- The pod was labeled as compromised
- The pod was deleted
- Kubernetes confirmed the pod no longer existed

Evidence:

- evidence/soar-delete-actions.log
- evidence/soar-002-delete-mode-action-log.txt
- evidence/soar-002-delete-mode-pod-removed-verification.txt
- evidence/soar-002-delete-mode-note.md

### Security Value

This added automation turns the lab into a small SOAR-style Kubernetes response workflow. It demonstrates how runtime detections can drive containment actions such as labeling or deleting suspicious pods.
