# Hardening Checklist

## Completed

- [x] Pod Security Standards applied to attack-lab namespace
- [x] Privileged container blocked
- [x] hostPID blocked
- [x] hostPath mount blocked
- [x] Missing seccomp profile blocked
- [x] Missing runAsNonRoot blocked
- [x] Missing dropped capabilities blocked
- [x] Secret rotation performed after simulated compromise
- [x] Compromised pod labeled and deleted

## Gap Identified

- [ ] NetworkPolicy enforcement requires a NetworkPolicy-capable CNI such as Calico or Cilium
- [ ] Current Minikube profile did not show Calico/Cilium/Antrea/Weave enforcement

## Planned Stretch Work

- [ ] Falco alert forwarding to Fluent Bit
- [ ] Fluent Bit forwarding to Elasticsearch
- [ ] Kibana dashboard for Falco alerts
- [ ] SOAR-style Python auto-response script
