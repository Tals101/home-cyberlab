Write-Host "========================================"
Write-Host "Cloud-Native SOC Final Validation"
Write-Host "========================================"

Write-Host ""
Write-Host "1. Kubernetes node status"
kubectl get nodes -o wide

Write-Host ""
Write-Host "2. SOC namespaces"
kubectl get namespaces | Select-String "soc-"

Write-Host ""
Write-Host "3. SOC system pods"
kubectl get pods -n soc-system

Write-Host ""
Write-Host "4. SOC workload pods"
kubectl get pods -n soc-workloads

Write-Host ""
Write-Host "5. SOC system services"
kubectl get svc -n soc-system

Write-Host ""
Write-Host "6. Helm releases"
helm list -n soc-system

Write-Host ""
Write-Host "7. Wazuh manager container"
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}" | Select-String "wazuh"

Write-Host ""
Write-Host "8. Wazuh agent registration"
docker exec wazuh-manager /var/ossec/bin/agent_control -l

Write-Host ""
Write-Host "9. Wazuh detection validation evidence"
Get-ChildItem evidence\wazuh-logtest-failed-login.txt

Write-Host ""
Write-Host "10. Falco evidence"
Get-ChildItem evidence\falco-shell-detection.txt
Get-ChildItem evidence\falco-privileged-shell-detection.txt

Write-Host ""
Write-Host "11. Trivy evidence"
Get-ChildItem evidence\trivy-ubuntu-scan.txt
Get-ChildItem evidence\trivy-busybox-scan.txt

Write-Host ""
Write-Host "12. Grafana/Loki screenshot"
Get-ChildItem screenshots

Write-Host ""
Write-Host "13. Reports"
Get-ChildItem reports

Write-Host ""
Write-Host "========================================"
Write-Host "Validation complete"
Write-Host "========================================"
