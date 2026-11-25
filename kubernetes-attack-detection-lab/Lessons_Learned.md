# Lessons Learned

## Kubernetes Attack Detection and Response Lab

This lab demonstrated a realistic Kubernetes blue team workflow that included detection, investigation, containment, hardening, detection engineering, log forwarding, dashboarding, and response automation planning.

---

## 1. Runtime Detection Is Valuable

Falco provided immediate visibility into suspicious container activity, including:

- Interactive shell execution inside containers
- Attempts to read /etc/shadow
- Custom detections for network discovery tools

Runtime visibility is important because Kubernetes configuration controls may not stop every attacker action after a workload is already running.

---

## 2. Default Rules Are Useful but Not Complete

Falco detected shell activity and sensitive file access, but default detections did not clearly alert on every internal discovery action performed with wget or nc.

This showed the value of detection engineering.

Custom Falco rules were added for:

- Interactive shell activity
- /etc/shadow read attempts
- Network discovery tools such as wget, curl, and nc

---

## 3. Privileged Containers Create Serious Risk

The privileged hostPath pod demonstrated how dangerous workload settings can expose host-level resources.

Risky settings included:

- privileged: true
- hostPID: true
- hostPath mount of /
- root execution

This type of configuration can support container escape-style behavior and should be blocked in production environments.

---

## 4. Pod Security Standards Are Effective

After Pod Security Standards were applied with the restricted profile, Kubernetes blocked the same privileged hostPath pod from being deployed again.

Blocked settings included:

- privileged containers
- hostPID
- hostPath volumes
- missing runAsNonRoot
- missing seccomp profile
- missing dropped capabilities
- allowPrivilegeEscalation not set to false

This showed the importance of preventive controls in addition to detection.

---

## 5. Hardened Workloads Reduce Attacker Capability

The hardened BusyBox pod ran as a non-root user and used a read-only root filesystem.

Attack rerun results showed:

- id returned uid=1000
- cat /etc/shadow failed with Permission denied
- touch /test-file failed because the filesystem was read-only

These controls reduced what an attacker could do after gaining shell access.

---

## 6. NetworkPolicy Requires an Enforcing CNI

The lab identified a NetworkPolicy enforcement gap.

The current Minikube profile did not show Calico, Cilium, Antrea, Weave, or another NetworkPolicy-capable enforcement layer.

A NetworkPolicy YAML can be accepted by Kubernetes, but without an enforcing CNI, it will not actually block traffic.

Recommended follow-up:

- Create a separate Minikube profile with Calico
- Re-test namespace and pod-level traffic restrictions

---

## 7. Secret Rotation Is a Required Response Step

After a simulated compromise, a Kubernetes secret was rotated.

This is important because any secret available to a compromised workload should be treated as exposed.

The response process included:

- Capturing the original secret state
- Deleting the old secret
- Recreating the secret with a rotated value
- Documenting the response

---

## 8. Centralized Logging Improves Investigation

The stretch goal connected:

Falco -> Fluent Bit -> Elasticsearch -> Kibana

This made it possible to view Falco alerts centrally and build dashboard panels for:

- Alerts over time
- Severity
- Namespace
- Pod
- User
- Rule

This is closer to how security teams investigate alerts in a real SOC environment.

---

## 9. Evidence Collection Matters

The lab saved evidence for:

- Baseline workloads
- Falco alerts
- Kubernetes events
- Pod descriptions
- Privileged pod YAML
- Hardening results
- Secret rotation
- Elasticsearch index creation
- Kibana dashboard screenshots

This made the lab easier to document, review, and present as a portfolio project.

---

## 10. Key Takeaway

Detection, response, and hardening should work together.

Falco helped detect suspicious behavior.
Kubernetes evidence helped investigate the activity.
Pod Security Standards helped prevent the risky pod from running again.
Hardened workloads reduced attacker capability.
Elasticsearch and Kibana improved alert visibility.
Custom Falco rules improved detection coverage.

This lab shows a full Kubernetes security workflow from attack simulation to detection, investigation, containment, hardening, and reporting.
