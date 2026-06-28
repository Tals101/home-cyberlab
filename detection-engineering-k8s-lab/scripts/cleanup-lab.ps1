# Cleanup Script: Detection Engineering Kubernetes Lab

Write-Host "Deleting lab pods and resources..."

kubectl delete -f .\manifests\privileged-debugger.yaml --ignore-not-found
kubectl delete -f .\manifests\admin-toolbox.yaml --ignore-not-found
kubectl delete -f .\manifests\attacker-netshoot.yaml --ignore-not-found
kubectl delete -f .\manifests\target-app.yaml --ignore-not-found

Write-Host "Uninstalling Falco..."

helm uninstall falco -n de-detection

Write-Host "Deleting namespaces..."

kubectl delete namespace de-target --ignore-not-found
kubectl delete namespace de-attacker --ignore-not-found
kubectl delete namespace de-detection --ignore-not-found

Write-Host "Cleanup complete."
