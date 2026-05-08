\# Kubernetes Web Security Lab — Phase 1 Commands



\## Cluster Setup



```powershell

minikube start --driver=docker

kubectl get nodes

```



\---



\## Namespace Creation



```powershell

kubectl apply -f manifests\\namespace.yaml

```



\---



\## Deploy DVWA



```powershell

kubectl apply -f manifests\\dvwa-deployment.yaml

kubectl apply -f manifests\\dvwa-service.yaml

```



\---



\## Deploy Juice Shop



```powershell

kubectl apply -f manifests\\juice-deployment.yaml

kubectl apply -f manifests\\juice-service.yaml

```



\---



\## Deploy Kali Attacker Pod



```powershell

kubectl apply -f manifests\\kali-deployment.yaml

```



\---



\## Verify Pods



```powershell

kubectl get pods -n web-security-lab

```



\---



\## Access Services



```powershell

minikube service dvwa-service -n web-security-lab

minikube service juice-service -n web-security-lab

```



\---



\## Enter Kali Pod



```powershell

kubectl exec -it deployment/kali -n web-security-lab -- bash

```



\---



\## Install Recon Tools



```bash

apt update

apt install -y nmap curl

```



\---



\## Internal Reconnaissance



\### DVWA Recon



```bash

nmap dvwa-service.web-security-lab.svc.cluster.local

```



\### DVWA HTTP Access



```bash

curl -I http://dvwa-service.web-security-lab.svc.cluster.local

```



\---



\### Juice Shop Recon



```bash

nmap juice-service.web-security-lab.svc.cluster.local

```



\### Juice Shop HTTP Access



```bash

curl -I http://juice-service.web-security-lab.svc.cluster.local:3000

```

