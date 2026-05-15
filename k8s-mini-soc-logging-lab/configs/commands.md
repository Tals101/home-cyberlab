\# Kubernetes Mini SOC Logging Lab — Commands



\## Minikube



```powershell

minikube status

minikube start --driver=docker

```



\## Namespace



```powershell

kubectl create namespace mini-soc

kubectl get namespaces

```



\## Helm Setup



```powershell

$env:Path += ";C:\\helm\\windows-amd64"

helm version

helm repo add grafana https://grafana.github.io/helm-charts

helm repo update

```



\## Loki Stack



```powershell

helm install loki grafana/loki-stack -n mini-soc

kubectl get pods -n mini-soc

```



\## Grafana



```powershell

helm install grafana grafana/grafana -n mini-soc

kubectl get pods -n mini-soc

kubectl port-forward svc/grafana 4000:80 -n mini-soc

```



\## Grafana Password



```powershell

\[System.Text.Encoding]::UTF8.GetString(\[System.Convert]::FromBase64String((kubectl get secret --namespace mini-soc grafana -o jsonpath="{.data.admin-password}")))

```



\## Loki Test



```powershell

kubectl port-forward svc/loki 3100:3100 -n mini-soc

Invoke-WebRequest http://localhost:3100/loki/api/v1/labels

```



\## Attacker Pod



```powershell

kubectl apply -f manifests\\attacker-pod.yaml

kubectl exec -it soc-attacker -n mini-soc -- bash

```



\## Telemetry Generation



```bash

whoami

id

cat /etc/passwd

ls /root

fakecommand

bash

```



\## Example Loki Queries



```logql

{namespace="mini-soc"}

{namespace="kube-system"}

{namespace="mini-soc"} |= "error"

{namespace="mini-soc"} |= "bash"

{namespace="mini-soc"} |= "whoami"

{namespace="mini-soc"} |= "not found"

{namespace="mini-soc"} |= "passwd"

```

