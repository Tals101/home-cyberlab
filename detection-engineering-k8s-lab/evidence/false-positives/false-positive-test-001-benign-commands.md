# False Positive Test 001: Benign Admin Toolbox Commands

## Objective
Run normal administrative commands inside the `admin-toolbox` container and confirm they do not trigger the high-signal detection rules.

## Test Commands
kubectl exec -n de-target admin-toolbox -- bash -c "whoami; id; ls -la /tmp; cat /etc/os-release | head -n 5"

## Detections Checked
- Suspicious user management command executed in container
- Container accessed host filesystem through mounted hostPath
- Redirect stdout/stdin to network connection
- Packet socket was created in a container

## Result
No matching high-signal alerts were observed from the benign command activity.

## Evidence Files
- evidence/false-positives/benign-admin-toolbox-commands.txt
- evidence/false-positives/falco-after-benign-commands.txt

## Assessment
No false positives observed during this test.

## Notes
This does not prove the detections have zero false positives. It only confirms that basic benign shell, identity, directory listing, and OS release checks did not trigger the lab detection rules.
