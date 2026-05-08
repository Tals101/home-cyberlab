\# kube-bench Security Findings Report



\## Project Summary



This phase introduced Kubernetes security auditing using kube-bench. The purpose was to evaluate the Minikube cluster against Kubernetes security best practices and identify areas of concern.



\---



\## Tool Used



\*\*kube-bench\*\*



kube-bench checks Kubernetes configuration against CIS benchmark-style controls and reports results as PASS, FAIL, WARN, or INFO.



\---



\## Scan Summary



```text

57 checks PASS

14 checks FAIL

60 checks WARN

0 checks INFO

```



\---



\## Key Findings



\### 1. API Server Audit Logging Not Fully Configured



Several audit logging controls failed.



\*\*Impact:\*\*  

Without proper audit logging, suspicious or unauthorized activity may be harder to investigate.



\---



\### 2. Profiling Not Disabled



kube-bench reported failures related to profiling settings.



\*\*Impact:\*\*  

Profiling endpoints may expose performance or operational details that should not be available in hardened environments.



\---



\### 3. etcd Directory Permission Issues



kube-bench identified etcd data directory permission and ownership issues.



\*\*Impact:\*\*  

Weak etcd file permissions may increase risk if an attacker gains node-level access.



\---



\### 4. Kubelet File Permission Issues



kube-bench identified kubelet service/config file permission concerns.



\*\*Impact:\*\*  

Improper kubelet file permissions may expose sensitive configuration.



\---



\### 5. Policy and RBAC Warnings



The scan produced multiple warnings related to:



\- RBAC permissions

\- service accounts

\- secrets access

\- pod security standards

\- network policies



\*\*Impact:\*\*  

These warnings highlight areas where least privilege and stronger workload isolation should be improved.



\---



\## Key Takeaways



\- Kubernetes clusters require both workload security and control-plane hardening.

\- Audit logging is critical for investigation and detection.

\- RBAC and service account permissions should be reviewed regularly.

\- Pod security controls help prevent unsafe workloads.

\- kube-bench is useful for identifying baseline hardening gaps.



\---



\## Recommended Improvements



\- Enable or strengthen Kubernetes audit logging.

\- Review kube-apiserver, controller-manager, and scheduler profiling settings.

\- Tighten etcd and kubelet file permissions where applicable.

\- Apply least-privilege RBAC.

\- Disable unnecessary service account token mounting.

\- Add pod security standards or admission controls.

\- Define NetworkPolicies for namespaces.



\---



\## Conclusion



kube-bench provided visibility into Kubernetes hardening gaps and helped identify security controls that should be reviewed before moving toward a production-like environment.

