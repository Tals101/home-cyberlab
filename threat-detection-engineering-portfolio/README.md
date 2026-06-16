# Threat Detection Engineering Portfolio

## Project Overview

This project is a validated detection engineering portfolio. It includes custom detections for Sigma, Wazuh, and Falco.

The project is not just documentation. Each detection was tested and backed by real evidence.

## Included Detection Types

- Sigma rule for Windows PowerShell process behavior
- Wazuh rule for SSH invalid user password guessing
- Falco rule for Kubernetes container shell execution
- MITRE ATT&CK mapping
- Raw telemetry
- Alert evidence
- Investigation notes

## Detection Summary

| Detection ID | Platform | Detection | MITRE ATT&CK | Status |
|---|---|---|---|---|
| DET-001 | Sigma | Suspicious PowerShell Encoded Command Execution | T1059.001 | Validated |
| DET-002 | Wazuh | SSH Invalid User Password Guessing | T1110.001 | Validated |
| DET-003 | Falco | Shell Spawned In Container | T1611 | Validated |

## Project Structure

rules/
- sigma: Sigma detection rule
- wazuh: Wazuh custom rule
- falco: Falco custom rule

live-tests/
- sigma: Sigma test files and validation outputs
- wazuh: Wazuh Docker and wazuh-logtest outputs
- falco: Minikube, Helm, Kubernetes, and Falco validation outputs

evidence/
- raw-telemetry: Raw telemetry collected or generated during testing
- alerts: Detection alert outputs
- investigations: Analyst investigation notes

reports/
- MITRE ATT&CK mapping and project reports

screenshots/
- Optional screenshots for portfolio evidence

scripts/
- Local helper scripts used for validation

## Validated Evidence

### Sigma

Rule:

rules/sigma/suspicious_powershell_encoded_command.yml

Raw telemetry:

evidence/raw-telemetry/sigma-powershell-encoded-live-telemetry.txt

Alert evidence:

evidence/alerts/sigma-powershell-encoded-alert.txt

Investigation:

evidence/investigations/sigma-powershell-encoded-investigation.md

### Wazuh

Rule:

rules/wazuh/local_rules.xml

Raw telemetry:

evidence/raw-telemetry/wazuh-ssh-invalid-user.log

Alert evidence:

evidence/alerts/wazuh-custom-ssh-invalid-user-alert.txt

Investigation:

evidence/investigations/wazuh-ssh-invalid-user-investigation.md

### Falco

Rule:

rules/falco/detection_lab_shell_spawned.yaml

Raw telemetry:

evidence/raw-telemetry/falco-shell-exec-command-output.txt

Alert evidence:

evidence/alerts/falco-custom-shell-alert.txt

Investigation:

evidence/investigations/falco-shell-spawned-investigation.md

## MITRE ATT&CK Coverage

| Technique ID | Technique | Platform |
|---|---|---|
| T1059.001 | PowerShell | Sigma |
| T1110.001 | Password Guessing | Wazuh |
| T1611 | Escape to Host | Falco |

## What Was Actually Validated

### Sigma Validation

A real PowerShell process was launched with EncodedCommand. The running process command line was captured from Windows process telemetry and tested with a local Sigma validation script.

### Wazuh Validation

A realistic SSH invalid user authentication log was tested against a custom Wazuh rule using wazuh-logtest inside a running Wazuh manager Docker container. The custom rule ID 100510 matched successfully.

### Falco Validation

Falco was running in Minikube. A custom Falco rule was loaded through Helm. A shell command was executed inside an Alpine container in the detection-lab namespace. Falco generated a custom alert.

## Conclusion

This portfolio demonstrates a complete detection engineering workflow:

1. Write detection logic
2. Simulate suspicious behavior safely
3. Capture telemetry
4. Validate detection
5. Document alert evidence
6. Write investigation notes
7. Map detections to MITRE ATT&CK
