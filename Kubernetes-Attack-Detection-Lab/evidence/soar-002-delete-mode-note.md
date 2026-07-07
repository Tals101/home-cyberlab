# SOAR 002 - Delete Mode Test

## Summary
The Falco SOAR auto-response script was tested in delete mode against a disposable pod.

## Disposable Pod
- Pod: soar-test-busybox
- Namespace: attack-lab

## Test Activity
The disposable pod generated Falco alerts by attempting to:

- Read /etc/shadow
- Use wget for internal service discovery

## Script Mode
The script was run with:

python .\scripts\falco_soar_response.py --delete --since 15s --log evidence/soar-delete-actions.log

## Result
The pod was labeled as compromised and then removed from the cluster.

## Final Verification
kubectl confirmed that the pod no longer existed:

Error from server (NotFound): pods "soar-test-busybox" not found

## Evidence
- evidence/soar-delete-actions.log
- evidence/soar-002-delete-mode-action-log.txt
- evidence/soar-002-delete-mode-pod-removed-verification.txt

## Security Value
This test demonstrated an automated Kubernetes response workflow where Falco detections triggered pod containment actions without manual intervention.
