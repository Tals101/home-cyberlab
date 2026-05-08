# Falco Runtime Security Report

## Project Summary

This phase introduced runtime security monitoring in Kubernetes using Falco. The objective was to deploy a runtime detection engine capable of monitoring suspicious activity inside containers and Kubernetes workloads.

---

## Tool Used

**Falco**

Falco is a Kubernetes runtime security tool that monitors system calls and container activity to detect suspicious behavior.

---

## Objectives

- Install Falco using Helm

- Verify Falco deployment

- Review Falco runtime monitoring initialization

- Attempt to trigger runtime security alerts

- Understand runtime detection concepts in Kubernetes

---

## Environment

- Minikube

- Docker Desktop

- WSL2

- Kubernetes

- Falco installed via Helm

---

## Falco Deployment

Falco was successfully installed using Helm.

### Installation Commands

helm repo add falcosecurity https://falcosecurity.github.io/charts

helm repo update

helm install falco falcosecurity/falco
---

## Verification

Falco initialized successfully and loaded runtime monitoring components.

### Observed Runtime Components

- syscall event source enabled

- modern BPF probe initialized

- Falco rules loaded successfully

- container runtime integrations enabled

---

## Runtime Monitoring Tests

### Test Activities

The following actions were attempted to trigger runtime alerts:

kubectl exec -it deployment/kali -n web-security-lab -- bash



kubectl exec -it root-pod -n web-security-lab -- sh
Additional activity:

cat /etc/passwd
---

## Observations

Falco initialized successfully and appeared operational, but runtime alerts were not generated during testing.

This behavior is likely related to the Minikube + Docker Desktop + WSL2 lab environment and limitations around runtime event visibility in nested/containerized virtualization environments.

---

## Key Takeaways

- Falco provides runtime visibility for Kubernetes workloads.

- Runtime security complements Kubernetes hardening and RBAC controls.

- Falco relies heavily on kernel-level visibility and syscall monitoring.

- Lab environments may behave differently from production Kubernetes clusters.

- Helm is commonly used for Kubernetes security tooling deployment.



---

## Conclusion

This phase successfully introduced runtime security monitoring concepts using Falco. Although runtime alerts were not triggered in the current lab environment, the project demonstrated Falco deployment, initialization, and runtime 
