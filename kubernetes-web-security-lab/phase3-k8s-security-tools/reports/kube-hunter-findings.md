# kube-hunter Security Findings Report

## Project Summary

This phase introduced active Kubernetes security hunting using kube-hunter. The objective was to identify exposed Kubernetes services, insecure configurations, and attack paths from inside the cluster.

---

## Tool Used

**kube-hunter**

kube-hunter actively scans Kubernetes environments for exposed services and security weaknesses.

---

## Scan Overview

The scan identified:

- Open Kubernetes services

- Service account token exposure

- Access to Kubernetes API

- Pod secret exposure

- CAP_NET_RAW capability enabled

- Kubernetes version disclosure

---

## Key Findings

### 1. Open Kubelet API

**Service Detected:**


10.244.0.1:10250

**Description:**

The Kubelet API was reachable inside the cluster.

**Impact:**

Exposed Kubelet APIs can become high-value attack targets if authentication or authorization is weak.

---

### 2. Open Kubernetes API Server

**Service Detected:**


10.96.0.1:443

**Description:**

The Kubernetes API server was accessible from inside the cluster.

---

### 3. KHV005 — Access to API Using Service Account Token

**Description:**

kube-hunter detected that service account tokens could access the Kubernetes API.

**Impact:**

If an attacker compromises a pod, service account tokens may allow further cluster reconnaissance or abuse depending on RBAC permissions.

---

### 4. KHV050 — Read Access to Service Account Token

**Description:**

The pod had access to mounted Kubernetes service account tokens.

**Impact:**

Compromised workloads may expose credentials that can be used against the Kubernetes API.

---

### 5. Access to Pod Secrets

**Description:**

kube-hunter identified access to Kubernetes secret-related files inside the pod.

**Impact:**

Attackers inside compromised pods may gain access to sensitive information.

---

### 6. CAP_NET_RAW Enabled

**Description:**

The CAP_NET_RAW capability was enabled.

**Impact:**

This capability may allow attackers to perform lower-level network attacks such as spoofing or packet crafting.

---

### 7. Kubernetes Version Disclosure

**Finding ID:** KHV002

**Description:**

The Kubernetes version was exposed through the API server.

**Impact:**

Version disclosure may assist attackers in identifying known vulnerabilities affecting the environment.

---

## Key Takeaways

- Service account tokens are valuable attack targets inside Kubernetes clusters.

- Weak RBAC combined with token exposure can create serious attack paths.

- Kubernetes internal services should be carefully restricted.

- Exposed APIs increase the attack surface of the cluster.

- Runtime capabilities such as CAP_NET_RAW can increase post-compromise risk.

---

## Recommendations

- Apply least-privilege RBAC.

- Disable automatic service account token mounting where unnecessary.

- Restrict access to Kubernetes APIs.

- Harden Kubelet access controls.

- Limit Linux capabilities in containers.

- Apply network policies to restrict pod communication.

---

## Conclusion

kube-hunter successfully identified multiple Kubernetes security concerns related to API exposure, token access, capabilities, and internal attack surface visibility. These findings demonstrate how attackers may enumerate and abuse insecure Kubernetes environments after gaining access to a pod.
