\# Kubernetes Web Security Lab



A multi-phase Kubernetes security lab focused on deployment, misconfiguration exploitation, security auditing, and runtime detection using Minikube, Kubernetes, kube-bench, kube-hunter, and Falco.



\---



\# Project Summary



This project recreates a vulnerable web application environment inside Kubernetes and progressively introduces offensive and defensive security concepts.



The lab includes:

\- vulnerable web applications

\- attacker pods

\- Kubernetes misconfigurations

\- RBAC abuse

\- Kubernetes security auditing

\- runtime detection tooling



\---



\# Technologies Used



\- Kubernetes

\- Minikube

\- Docker Desktop

\- Helm

\- DVWA

\- OWASP Juice Shop

\- Kali Linux

\- kube-bench

\- kube-hunter

\- Falco



\---



\# Project Phases



\## Phase 1 — Kubernetes Deployment Lab



\### Objectives

\- Deploy vulnerable applications into Kubernetes

\- Create Kubernetes Services

\- Build attacker pods

\- Perform internal reconnaissance



\### Key Activities

\- Deployed DVWA and OWASP Juice Shop

\- Created Kubernetes Deployments and Services

\- Built Kali attacker pod

\- Performed internal service discovery

\- Tested pod-to-pod communication



\### Skills Demonstrated

\- Kubernetes deployments

\- Kubernetes networking

\- Namespace management

\- Internal reconnaissance

\- Service discovery



\---



\## Phase 2 — Kubernetes Misconfiguration Exploitation



\### Objectives

\- Introduce insecure Kubernetes configurations

\- Abuse weak RBAC permissions

\- Demonstrate internal attack paths



\### Key Activities

\- Created root containers

\- Exposed NodePort services

\- Created vulnerable service accounts

\- Performed RBAC abuse and enumeration



\### Skills Demonstrated

\- Kubernetes securityContext

\- RBAC abuse

\- Service account misuse

\- Kubernetes attack paths

\- Internal enumeration



\---



\## Phase 3 — Kubernetes Security Tooling



\### Objectives

\- Audit Kubernetes security posture

\- Perform active cluster hunting

\- Introduce runtime detection



\### Tools Used



\#### kube-bench

Performed CIS-style Kubernetes hardening checks.



\#### kube-hunter

Performed active Kubernetes hunting and identified exposed services and token access risks.



\#### Falco

Introduced runtime monitoring and syscall-based container security concepts.



\### Skills Demonstrated

\- Kubernetes auditing

\- Runtime security

\- Security monitoring

\- Cluster assessment

\- Security tooling integration



\---



\# Folder Structure



```text

kubernetes-web-security-lab/

│

├── phase1-k8s-deployment/

│   ├── manifests/

│   ├── configs/

│   ├── reports/

│   └── screenshots/

│

├── phase2-k8s-misconfigurations/

│   ├── manifests/

│   ├── configs/

│   ├── reports/

│   └── screenshots/

│

├── phase3-k8s-security-tools/

│   ├── configs/

│   ├── reports/

│   ├── screenshots/

│   └── tools/

```



\---



\# Key Takeaways



\- Kubernetes introduces unique internal attack surfaces.

\- Weak RBAC and exposed services can create serious security risks.

\- Runtime security tools help improve visibility into container activity.

\- Kubernetes security requires both hardening and monitoring.

\- Security tooling complements offensive testing and misconfiguration analysis.





\---



\# Conclusion



This project demonstrates a complete Kubernetes security workflow including deployment, offensive testing, security auditing, and runtime monitoring in a self-hosted lab environment.

