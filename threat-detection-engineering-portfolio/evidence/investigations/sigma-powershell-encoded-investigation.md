# Investigation Note: Suspicious PowerShell Encoded Command Execution

## Detection Status

Validated

## Detection Platform

Sigma rule with local validation script

## Rule

Suspicious PowerShell Encoded Command Execution

## Rule File

rules/sigma/suspicious_powershell_encoded_command.yml

## Alert Evidence

evidence/alerts/sigma-powershell-encoded-alert.txt

## Raw Telemetry

evidence/raw-telemetry/sigma-powershell-encoded-live-telemetry.txt

## What Happened

A PowerShell process was launched with the EncodedCommand option.

Observed process:

powershell.exe

Observed executable path:

C:\windows\System32\WindowsPowerShell\v1.0\powershell.exe

Observed command line:

"C:\windows\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -EncodedCommand UwB0AGEAcgB0AC0AUwBsAGUAZQBwACAALQBTAGUAYwBvAG4AZABzACAAMwAwAA==

Decoded command:

Start-Sleep -Seconds 30

## Process Details

Process ID:

6268

Parent Process ID:

12900

Creation time:

6/16/2026 12:45:56 PM

## MITRE ATT&CK Mapping

Technique:

Command and Scripting Interpreter: PowerShell

Technique ID:

T1059.001

Tactic:

Execution

## Investigation Summary

The alert fired because the process command line contained EncodedCommand and the process image was PowerShell.

This was a safe lab simulation. The decoded payload only executed:

Start-Sleep -Seconds 30

No malicious payload was used.

## Why This Detection Matters

Encoded PowerShell can be used by administrators, but it is also commonly used to hide command content. In a real environment, this alert should be reviewed to determine whether the encoded command was expected or suspicious.

## Analyst Questions

1. Which user launched PowerShell?
2. What process launched PowerShell?
3. What does the encoded command decode to?
4. Was the command part of approved administration?
5. Did PowerShell create child processes?
6. Did PowerShell make network connections?
7. Did the same host show other suspicious behavior?

## Recommended Response

- Decode the command
- Review the parent process
- Review child processes
- Check for network activity
- Compare against approved scripts
- Escalate if the decoded command is suspicious

## Conclusion

This Sigma detection was successfully validated against live telemetry collected from the local Windows system.
