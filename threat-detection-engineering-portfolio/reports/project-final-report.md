# Threat Detection Engineering Portfolio Final Report

## Executive Summary

This project created and validated a threat detection engineering portfolio across three detection platforms:

- Sigma
- Wazuh
- Falco

Each detection includes a rule, simulated suspicious activity, telemetry, alert evidence, an investigation note, and MITRE ATT&CK mapping.

## Project Objective

The goal of this project was to build a repository of detections and prove that each detection works using real tooling or live telemetry.

## Detection 1: Sigma PowerShell Encoded Command

### Platform

Sigma

### Rule

rules/sigma/suspicious_powershell_encoded_command.yml

### Simulation

A harmless PowerShell command was encoded and executed using EncodedCommand.

Decoded command:

Start-Sleep -Seconds 30

### Telemetry

evidence/raw-telemetry/sigma-powershell-encoded-live-telemetry.txt

### Detection Evidence

evidence/alerts/sigma-powershell-encoded-alert.txt

### Investigation

evidence/investigations/sigma-powershell-encoded-investigation.md

### MITRE ATT&CK

T1059.001 - PowerShell

### Result

Validated

## Detection 2: Wazuh SSH Invalid User Password Guessing

### Platform

Wazuh

### Rule

rules/wazuh/local_rules.xml

### Simulation

A realistic SSH authentication failure log was tested with wazuh-logtest inside a running Wazuh manager Docker container.

### Telemetry

evidence/raw-telemetry/wazuh-ssh-invalid-user.log

### Detection Evidence

evidence/alerts/wazuh-custom-ssh-invalid-user-alert.txt

### Investigation

evidence/investigations/wazuh-ssh-invalid-user-investigation.md

### MITRE ATT&CK

T1110.001 - Password Guessing

### Result

Validated

The custom Wazuh rule ID 100510 matched successfully.

## Detection 3: Falco Shell Spawned In Container

### Platform

Falco

### Rule

rules/falco/detection_lab_shell_spawned.yaml

### Simulation

A shell command was executed inside an Alpine container running in the detection-lab namespace.

Command executed:

sh -c id; whoami; uname -a

### Telemetry

evidence/raw-telemetry/falco-shell-exec-command-output.txt

### Detection Evidence

evidence/alerts/falco-custom-shell-alert.txt

### Investigation

evidence/investigations/falco-shell-spawned-investigation.md

### MITRE ATT&CK

T1611 - Escape to Host

### Result

Validated

Falco generated a custom alert from the loaded custom rule.

## Detection Engineering Workflow

1. Create detection rule
2. Simulate suspicious activity safely
3. Capture telemetry
4. Validate detection
5. Save alert evidence
6. Write investigation note
7. Map detection to MITRE ATT&CK

## Evidence Summary

| Detection | Rule | Telemetry | Alert | Investigation |
|---|---|---|---|---|
| Sigma PowerShell Encoded Command | Yes | Yes | Yes | Yes |
| Wazuh SSH Invalid User | Yes | Yes | Yes | Yes |
| Falco Container Shell | Yes | Yes | Yes | Yes |

## Conclusion

This project successfully created a validated detection engineering portfolio. The repository demonstrates detection-as-code, telemetry review, alert validation, investigation documentation, and MITRE ATT&CK mapping across Windows, Linux authentication, and Kubernetes runtime activity.
