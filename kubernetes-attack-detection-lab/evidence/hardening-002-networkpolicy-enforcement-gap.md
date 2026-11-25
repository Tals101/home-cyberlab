# Hardening 002 - NetworkPolicy Enforcement Gap

## Summary
The lab attempted to verify whether NetworkPolicy enforcement was available in the current Minikube cluster.

## Commands Run
- minikube addons list | Select-String "calico|cilium|network"
- kubectl get pods -A | Select-String "calico|cilium|antrea|weave|flannel"

## Result
No Calico, Cilium, Antrea, Weave, or Flannel NetworkPolicy-capable CNI was observed in the current cluster output.

## Security Impact
Kubernetes NetworkPolicy resources may still be accepted by the API server, but without a NetworkPolicy-capable CNI/controller, the policies will not actually enforce traffic restrictions.

## Finding
The current cluster is suitable for Pod Security Standards and Falco detection testing, but it is not currently suitable for proving NetworkPolicy enforcement.

## Recommended Fix
Rebuild or create a separate Minikube profile using Calico:

minikube start --cni=calico

## Lab Decision
This issue will be documented as a hardening gap, and NetworkPolicy enforcement can be tested later in a Calico-backed Minikube profile.
