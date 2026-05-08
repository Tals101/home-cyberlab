# Kubernetes Web Security Lab — Phase 3 Commands

## Deploy kube-bench

```powershell
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml
```

---

## Verify kube-bench Job

```powershell
kubectl get jobs
kubectl get pods
```

---

## Retrieve kube-bench Results

```powershell
kubectl logs job.batch/kube-bench
```
---

# Deploy kube-hunter

```powershell
kubectl run kube-hunter --image=aquasec/kube-hunter --restart=Never -- --pod
```

---

# Verify kube-hunter

```powershell
kubectl get pods
```

---

# Retrieve kube-hunter Results

```powershell
kubectl logs kube-hunter
```

---

# Install Helm

```powershell
helm version
```

---

# Add Falco Repository

```powershell
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm repo update
```

---

# Install Falco

```powershell
helm install falco falcosecurity/falco
```

---

# Verify Falco

```powershell
kubectl get pods
```

---

# View Falco Logs

```powershell
kubectl logs -f falco-4fp5h
```

---

# Trigger Test Activity

```powershell
kubectl exec -it deployment/kali -n web-security-lab -- bash

kubectl exec -it root-pod -n web-security-lab -- sh
```