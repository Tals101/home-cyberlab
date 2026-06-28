# Coverage Gap 001: User Creation Inside Container

## Attack
A local Linux user was created inside the `admin-toolbox` container using `useradd`.

## Attack Command
kubectl exec -n de-target admin-toolbox -- bash -c "useradd -m labsvc01 && id labsvc01 && tail -n 5 /etc/passwd"

## Result
The user `labsvc01` was successfully created inside the container.

## Detection Result
No useful Falco detection was observed from the default rule set.

## Why This Matters
Unexpected user creation inside a container can indicate post-exploitation activity, persistence preparation, or an attacker attempting to establish local access inside a compromised workload.

## Detection Engineering Decision
Create a custom Falco rule to detect suspicious execution of Linux user-management commands inside containers.

## Commands to Detect
- useradd
- adduser
- usermod
- groupadd
- passwd

## Evidence Files
- evidence/raw-telemetry/user-creation-labsvc01.txt
- evidence/alerts/falco-after-user-creation.txt

## Status
Coverage gap identified. Custom rule required.
