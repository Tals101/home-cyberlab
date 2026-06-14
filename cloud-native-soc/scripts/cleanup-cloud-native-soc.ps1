Write-Host "Stopping Cloud-Native SOC lab resources..."

Write-Host ""
Write-Host "Deleting Kubernetes workload pods..."
kubectl delete pod soc-test-pod -n soc-workloads --ignore-not-found
kubectl delete pod privileged-test-pod -n soc-workloads --ignore-not-found
kubectl delete pod suspicious-container -n soc-workloads --ignore-not-found

Write-Host ""
Write-Host "Deleting Kubernetes secret..."
kubectl delete secret demo-api-secret -n soc-workloads --ignore-not-found

Write-Host ""
Write-Host "Uninstalling Helm releases..."
helm uninstall falco -n soc-system
helm uninstall loki -n soc-system

Write-Host ""
Write-Host "Deleting Wazuh agent DaemonSet and config..."
kubectl delete daemonset wazuh-agent -n soc-system --ignore-not-found
kubectl delete configmap wazuh-agent-config -n soc-system --ignore-not-found

Write-Host ""
Write-Host "Deleting namespaces..."
kubectl delete namespace soc-workloads --ignore-not-found
kubectl delete namespace soc-system --ignore-not-found
kubectl delete namespace soc-evidence --ignore-not-found

Write-Host ""
Write-Host "Stopping Wazuh manager container..."
docker stop wazuh-manager
docker rm wazuh-manager

Write-Host ""
Write-Host "Optional: delete the Minikube profile manually with:"
Write-Host "minikube delete -p cloud-soc"

Write-Host ""
Write-Host "Cleanup complete."
