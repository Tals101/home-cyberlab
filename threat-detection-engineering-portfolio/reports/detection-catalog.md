# Detection Catalog

## Project

Threat Detection Engineering Portfolio

## Purpose

This catalog lists the validated detections included in the project.

## Detection Catalog

| ID | Detection Name | Platform | Severity | MITRE ATT&CK | Validation Status |
|---|---|---|---|---|---|
| DET-001 | Suspicious PowerShell Encoded Command Execution | Sigma | High | T1059.001 | Validated |
| DET-002 | SSH Invalid User Password Guessing | Wazuh | High | T1110.001 | Validated |
| DET-003 | Shell Spawned In Container | Falco | Warning | T1611 | Validated |

## DET-001: Suspicious PowerShell Encoded Command Execution

Platform:

Sigma

Rule:

rules/sigma/suspicious_powershell_encoded_command.yml

Telemetry:

evidence/raw-telemetry/sigma-powershell-encoded-live-telemetry.txt

Alert:

evidence/alerts/sigma-powershell-encoded-alert.txt

Investigation:

evidence/investigations/sigma-powershell-encoded-investigation.md

Detection summary:

Detects PowerShell execution using EncodedCommand.

## DET-002: SSH Invalid User Password Guessing

Platform:

Wazuh

Rule:

rules/wazuh/local_rules.xml

Telemetry:

evidence/raw-telemetry/wazuh-ssh-invalid-user.log

Alert:

evidence/alerts/wazuh-custom-ssh-invalid-user-alert.txt

Investigation:

evidence/investigations/wazuh-ssh-invalid-user-investigation.md

Detection summary:

Detects an SSH failed login attempt against a non-existent user and maps the activity to password guessing.

## DET-003: Shell Spawned In Container

Platform:

Falco

Rule:

rules/falco/detection_lab_shell_spawned.yaml

Telemetry:

evidence/raw-telemetry/falco-shell-exec-command-output.txt

Alert:

evidence/alerts/falco-custom-shell-alert.txt

Investigation:

evidence/investigations/falco-shell-spawned-investigation.md

Detection summary:

Detects shell execution inside a Kubernetes container in the detection-lab namespace.

## Final Status

All three detections were validated with real tooling or live telemetry.
