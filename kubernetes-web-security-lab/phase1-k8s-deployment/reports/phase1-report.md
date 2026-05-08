\# Phase 1 — Kubernetes Web Application Deployment Lab



\## Project Summary



This phase focused on recreating a vulnerable web application lab inside a Kubernetes environment using Minikube.



The objective was to understand Kubernetes networking, deployments, services, and internal pod communication while preparing the environment for later security testing and exploitation phases.



Applications deployed:

\- DVWA (Damn Vulnerable Web Application)

\- OWASP Juice Shop

\- Kali Linux attacker pod



\---



\## Objectives



\- Deploy vulnerable applications into Kubernetes

\- Create Kubernetes Services for application access

\- Build an attacker pod inside the cluster

\- Test internal Kubernetes networking

\- Perform internal reconnaissance from the attacker pod



\---



\## Environment



\### Platform

\- Windows 11

\- Minikube

\- Docker driver



\### Applications

\- DVWA

\- OWASP Juice Shop

\- Kali Linux



\### Kubernetes Components

\- Namespace

\- Deployments

\- Services

\- Pods



\---



\## Kubernetes Deployments



\### DVWA

DVWA was deployed as a Kubernetes Deployment with a NodePort Service exposing the application externally.



\### Juice Shop

OWASP Juice Shop was deployed similarly using a Deployment and NodePort Service.



\### Kali Attacker Pod

A Kali Linux pod was deployed to simulate an internal attacker performing reconnaissance and application interaction from inside the cluster.



\---



\## Internal Reconnaissance



\### DVWA Recon



```bash

nmap dvwa-service.web-security-lab.svc.cluster.local

```



Result:

\- Port 80 identified as open



\---



\### Juice Shop Recon



```bash

nmap juice-service.web-security-lab.svc.cluster.local

```



Result:

\- Port 3000 identified as open



\---



\## Internal HTTP Access



\### DVWA HTTP Access



```bash

curl -I http://dvwa-service.web-security-lab.svc.cluster.local

```



Result:

\- HTTP/1.1 302 Found

\- Redirected to login page



\---



\### Juice Shop HTTP Access



```bash

curl -I http://juice-service.web-security-lab.svc.cluster.local:3000

```



Result:

\- HTTP/1.1 200 OK



\---



\## Key Takeaways



\- Kubernetes Services enable internal pod-to-pod communication

\- Kubernetes DNS allows service discovery using cluster-local names

\- Internal reconnaissance inside Kubernetes clusters is straightforward once a pod is compromised

\- Attackers inside a cluster can enumerate and communicate with internal applications



\---



\## Skills Demonstrated



\- Kubernetes cluster setup

\- Kubernetes Deployments

\- Kubernetes Services

\- Namespace management

\- Internal service discovery

\- Pod-to-pod communication

\- Internal reconnaissance techniques



\---



\## Conclusion



This phase successfully recreated the vulnerable Docker-based lab environment inside Kubernetes and established the foundation for future Kubernetes security testing and misconfiguration exploitation.

