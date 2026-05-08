# Phase 2 — Kubernetes Misconfiguration Exploitation Report

## Project Summary

This phase introduced intentional Kubernetes security misconfigurations into the lab environment and demonstrated how an attacker could abuse them from inside the cluster.

The objective was to understand common Kubernetes risks including root containers, exposed services, and weak RBAC permissions.

---

## Objectives

- Deploy a container running as root

- Expose an internal application using NodePort

- Create overly permissive RBAC permissions

- Abuse service account permissions from inside a pod

- Document security impact with screenshots and commands

---

## Environment

- Minikube

- Kubernetes namespace: web-security-lab

- DVWA

- Juice Shop

- Kali attacker pod

- Root test pod

- RBAC attacker pod

---

## Finding 1 — Container Running as Root

**Description:**

A pod was deployed with runAsUser: 0, causing the container to run as root.

**Evidence:**

id
**Result:**


uid=0(root)

**Impact:**

Running containers as root increases the risk of privilege escalation, abuse of mounted volumes, and more dangerous post-compromise activity.

---

## Finding 2 — Publicly Exposed NodePort Service

**Description:**

DVWA was exposed using a NodePort service.

**Evidence:**

kubectl get svc -n web-security-lab
**Result:**


exposed-dvwa   NodePort   ...   80:32080/TCP

**Impact:**

NodePort services can expose internal applications outside the cluster if not carefully controlled.

---

## Finding 3 — Weak RBAC Permissions

**Description:**

A service account was granted permission to list pods, services, and secrets.

**Evidence:**

kubectl auth can-i list secrets --as=system:serviceaccount:web-security-lab:vulnerable-sa -n web-security-lab

kubectl auth can-i list pods --as=system:serviceaccount:web-security-lab:vulnerable-sa -n web-security-lab
**Result:**


yes

yes

**Impact:**

Overly permissive RBAC allows attackers to enumerate resources and potentially discover sensitive information.

---

## Finding 4 — RBAC Abuse from Inside a Pod

**Description:**

An attacker pod using the weak service account successfully listed pods and services from inside the cluster.

**Evidence:**

kubectl get pods

kubectl get services
**Impact:**

This simulates post-compromise cluster reconnaissance using an overly permissive service account.

---

## Risk Summary

| Finding | Severity |

|---|---|

| Container running as root | High |

| Exposed NodePort service | Medium |

| Weak RBAC permissions | High |

| RBAC abuse from pod | High |

---

## Key Takeaways

- Containers should not run as root unless absolutely required.

- NodePort services can unintentionally expose internal applications.

- RBAC should follow least privilege.

- Service accounts can become powerful attack paths if misconfigured.

- A compromised pod can become a foothold for internal Kubernetes reconnaissance.

---

## Recommendations

- Set runAsNonRoot: true

- Define non-root users in pod security contexts

- Avoid unnecessary NodePort exposure

- Use least-privilege RBAC

- Avoid granting secret access unless required

- Regularly audit service account permissions

- Use Kubernetes security tools such as kube-bench, kube-hunter, and Falco

---

## Conclusion

Phase 2 demonstrated how common Kubernetes misconfigurations can create meaningful attack paths inside a cluster. The lab showed how insecure container privileges, exposed services, and weak RBAC permissions can be abused during post-compromise activity.
