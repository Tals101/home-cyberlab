# Falco Detection Engineering Alert Documentation

## 1. Project Summary

This project tested **Falco runtime security detection** inside a local Kubernetes Minikube environment.

The goal was to complete the full detection engineering workflow:

```text
Simulate Attacks -> Write Detection Rules -> Document Alerts
```

The project included:

- Installing Falco in Kubernetes
- Creating a test namespace and pod
- Simulating suspicious container behavior
- Reviewing Falco alerts
- Writing custom Falco rules
- Loading custom rules into Falco
- Saving evidence and screenshots
- Documenting the alert results

---

## 2. Lab Environment

| Component | Details |
|---|---|
| Host OS | Windows 11 |
| Kubernetes Platform | Minikube |
| Kubernetes Node | minikube |
| Detection Tool | Falco |
| Falco Version | 0.44.0 |
| Package Manager | Helm |
| Test Namespace | falco-demo |
| Test Pod | falco-test-pod |
| Test Image | ubuntu:22.04 |

---

## 3. Project Folder Structure

```text
falco-detection-engineering/
+-- evidence/
+-- manifests/
+-- reports/
+-- rules/
+-- screenshots/
+-- README.md
```

### Folder Purpose

| Folder | Purpose |
|---|---|
| evidence | Saved command output and Falco alert logs |
| manifests | Kubernetes YAML files, if needed later |
| reports | Final alert documentation |
| rules | Custom Falco rule files |
| screenshots | Screenshots of alert evidence |

---

## 4. Detection Engineering Workflow

```text
Start Minikube
      |
Install Falco with Helm
      |
Create falco-demo namespace
      |
Deploy Ubuntu test pod
      |
Simulate suspicious activity
      |
Review Falco logs
      |
Write custom Falco rules
      |
Reload Falco with Helm
      |
Trigger custom rules
      |
Document alerts and evidence
```

---

## 5. Falco Installation Validation

Falco was installed using Helm into the `falco` namespace.

### Validation Command

```powershell
kubectl get pods -n falco
```

### Successful Result

```text
falco-zbq7g   2/2   Running
```

### Evidence File

```text
evidence/falco-pods.txt
```

---

## 6. Attack Simulation 1: Interactive Shell in Container

### Objective

Simulate an interactive shell being opened inside a Kubernetes container.

### Simulation Command

```powershell
kubectl exec -it -n falco-demo falco-test-pod -- bash
```

### Falco Alert

```text
A shell was spawned in a container with an attached terminal
```

### Alert Severity

```text
Notice
```

### Detection Value

An interactive shell inside a running container may be normal during troubleshooting, but in production it can also indicate hands-on-keyboard activity, unauthorized access, or post-compromise investigation.

### Evidence File

```text
evidence/alert-terminal-shell.txt
```

### Screenshot

```text
screenshots/01-terminal-shell-alert.png
```

---

## 7. Attack Simulation 2: Sensitive File Read

### Objective

Simulate credential discovery behavior by reading a sensitive Linux file.

### Simulation Command

```powershell
kubectl exec -n falco-demo falco-test-pod -- bash -c "cat /etc/shadow"
```

### Falco Alert

```text
Sensitive file opened for reading by non-trusted program
```

### Alert Details

```text
file=/etc/shadow
process=cat
command=cat /etc/shadow
k8s_pod_name=falco-test-pod
k8s_ns_name=falco-demo
```

### Alert Severity

```text
Warning
```

### Detection Value

The `/etc/shadow` file stores local Linux account password hash information. Reading this file from inside a container is suspicious because attackers often attempt to access account and credential files after gaining shell access.

### Evidence File

```text
evidence/alert-sensitive-file.txt
```

### Screenshot

```text
screenshots/02-sensitive-file-alert.png
```

---

## 8. Custom Falco Rule File

Custom detection rules were written in:

```text
rules/custom-falco-rules.yaml
```

### Custom Rule 1: Shell Opened in Demo Namespace

```yaml
- rule: Custom Terminal Shell In Demo Container
  desc: Detects an interactive shell being opened inside the falco-demo namespace.
  condition: >
    spawned_process and
    container and
    (proc.name = bash or proc.name = sh) and
    k8s.ns.name = falco-demo
  output: >
    Custom Falco Rule Triggered: shell opened in demo namespace
    (user=%user.name command=%proc.cmdline process=%proc.name container=%container.name image=%container.image.repository:%container.image.tag pod=%k8s.pod.name namespace=%k8s.ns.name)
  priority: WARNING
  tags: [container, shell, mitre_execution, custom_lab]
```

### Custom Rule 2: Shadow File Read in Demo Namespace

```yaml
- rule: Custom Sensitive Shadow File Read In Demo Container
  desc: Detects attempts to read /etc/shadow inside the falco-demo namespace.
  condition: >
    open_read and
    container and
    fd.name = /etc/shadow and
    k8s.ns.name = falco-demo
  output: >
    Custom Falco Rule Triggered: shadow file read in demo namespace
    (file=%fd.name user=%user.name command=%proc.cmdline process=%proc.name container=%container.name image=%container.image.repository:%container.image.tag pod=%k8s.pod.name namespace=%k8s.ns.name)
  priority: WARNING
  tags: [container, credential_access, sensitive_files, custom_lab]
```

---

## 9. Custom Rule Loading Validation

Falco successfully loaded the custom rule file.

### Validation Message

```text
/etc/falco/rules.d/custom-falco-rules.yaml | schema validation: ok
```

### Why This Matters

This confirms that the custom rule file was accepted by Falco and did not contain schema errors.

### Evidence File

```text
evidence/custom-rules-loaded.txt
```

### Screenshot

```text
screenshots/03-custom-rules-loaded.png
```

---

## 10. Custom Alert 1: Sensitive File Read in Demo Namespace

### Custom Alert Text

```text
Custom Falco Rule Triggered: sensitive file read in demo namespace
```

### Detection Value

This alert showed that custom Falco rules were active and able to detect suspicious file access scoped to the lab namespace.

### Evidence File

```text
evidence/custom-rule-alerts.txt
```

### Screenshot

```text
screenshots/04-custom-rule-alert.png
```

---

## 11. Custom Alert 2: Shell Opened in Demo Namespace

### Simulation Command

```powershell
kubectl exec -n falco-demo falco-test-pod -- bash -c "cat /etc/shadow"
```

### Custom Alert Text

```text
Custom Falco Rule Triggered: shell opened in demo namespace
```

### Alert Details

```text
user=root
command=bash -c cat /etc/shadow
process=bash
image=ubuntu:22.04
pod=falco-test-pod
namespace=falco-demo
```

### Detection Value

This custom alert proves that Falco can detect shell execution scoped to a specific Kubernetes namespace. Namespace-specific detection helps reduce noise and makes rules more relevant to the environment being monitored.

### Evidence File

```text
evidence/custom-shell-rule-alert.txt
```

### Screenshot

```text
screenshots/05-custom-shell-rule-alert.png
```

---

## 12. Alert Summary Table

| # | Activity | Alert Type | Rule Source | Evidence |
|---|---|---|---|---|
| 1 | Opened interactive shell in container | Shell spawned in container | Default Falco rule | alert-terminal-shell.txt |
| 2 | Read `/etc/shadow` | Sensitive file opened for reading | Default Falco rule | alert-sensitive-file.txt |
| 3 | Loaded custom rules | Schema validation OK | Custom rule file | custom-rules-loaded.txt |
| 4 | Triggered custom sensitive file rule | Custom sensitive file alert | Custom Falco rule | custom-rule-alerts.txt |
| 5 | Triggered custom shell rule | Custom shell alert | Custom Falco rule | custom-shell-rule-alert.txt |

---

## 13. Results

This project successfully completed the required objectives:

- Simulated suspicious container activity
- Generated Falco runtime security alerts
- Wrote custom Falco detection rules
- Loaded custom rules into Falco
- Triggered custom Falco alerts
- Documented alerts with evidence files and screenshots

---

## 14. Lessons Learned

Falco is effective for Kubernetes runtime security monitoring. The default rules detected common suspicious behavior such as interactive shell access and sensitive file reads. Custom rules allowed detections to be scoped to a specific namespace and lab scenario.

This project demonstrated how Falco can support:

- Runtime threat detection
- Kubernetes security monitoring
- Detection engineering
- Alert validation
- Evidence-based security documentation

---

## 15. Final Conclusion

The Falco Detection Engineering project successfully demonstrated a complete detection workflow from attack simulation to alert documentation. The lab proved that Falco can detect suspicious runtime activity in Kubernetes and that custom rules can be created to focus detections on specific namespaces, commands, and behaviors.
