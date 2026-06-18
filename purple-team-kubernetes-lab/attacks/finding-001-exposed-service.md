
## Access Test Note
The Kubernetes service was exposed as a NodePort on port 30422. Direct access from the Windows host to the Minikube internal IP failed because the Docker-driver Minikube network is isolated from the Windows host network. Access was validated using kubectl port-forward to http://127.0.0.1:8088.

Additional Evidence:
- evidence/exposed-service-http-test.txt
- evidence/exposed-service-local-access-url.txt
