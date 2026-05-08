\# Kubernetes Web Security Lab — Phase 2 Commands



\## Create Root Pod



```powershell

kubectl apply -f manifests\\root-pod.yaml

```



\---



\## Verify Pods



```powershell

kubectl get pods -n web-security-lab

```



\---



\## Access Root Pod



```powershell

kubectl exec -it root-pod -n web-security-lab -- sh

```



\---



\## Verify Root Access



```sh

id

```



\---



\## Create Exposed NodePort Service



```powershell

kubectl apply -f manifests\\exposed-dvwa-service.yaml

```



\---



\## Verify Services



```powershell

kubectl get svc -n web-security-lab

```



\---



\## Open Exposed Service



```powershell

minikube service exposed-dvwa -n web-security-lab

```



\---



\## Create Weak RBAC Configuration



```powershell

kubectl apply -f manifests\\vulnerable-rbac.yaml

```



\---



\## Verify RBAC Permissions



```powershell

kubectl auth can-i list secrets --as=system:serviceaccount:web-security-lab:vulnerable-sa -n web-security-lab



kubectl auth can-i list pods --as=system:serviceaccount:web-security-lab:vulnerable-sa -n web-security-lab

```



\---



\## Create RBAC Attacker Pod



```powershell

kubectl apply -f manifests\\rbac-attacker-pod.yaml

```



\---



\## Access Attacker Pod



```powershell

kubectl exec -it rbac-attacker -n web-security-lab -- sh

```



\---



\## Enumerate Cluster Resources



```sh

kubectl get pods



kubectl get services

```

