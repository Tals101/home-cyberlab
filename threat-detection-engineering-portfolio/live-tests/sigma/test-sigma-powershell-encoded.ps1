$TelemetryPath = "evidence\raw-telemetry\sigma-powershell-encoded-live-telemetry.txt"
$AlertPath = "evidence\alerts\sigma-powershell-encoded-alert.txt"

$Telemetry = Get-Content $TelemetryPath -Raw
$OneLineTelemetry = $Telemetry -replace "`r?`n\s+", " "

$ImageMatch = $Telemetry -match "(?i)powershell\.exe|pwsh\.exe"
$EncodedMatch = $Telemetry -match "(?i)-EncodedCommand|-enc|/enc"

$DecodedCommand = "Not decoded"

if ($OneLineTelemetry -match "(?i)-EncodedCommand\s+([A-Za-z0-9+/=]+)") {
    $EncodedPayload = $Matches[1]
    try {
        $DecodedCommand = [System.Text.Encoding]::Unicode.GetString([Convert]::FromBase64String($EncodedPayload))
    }
    catch {
        $DecodedCommand = "Decode failed"
    }
}

if ($ImageMatch -and $EncodedMatch) {
    $DetectionStatus = "MATCH"
}
else {
    $DetectionStatus = "NO MATCH"
}

$Alert = @"
Sigma Local Validation Alert

Rule:
Suspicious PowerShell Encoded Command Execution

Rule File:
rules\sigma\suspicious_powershell_encoded_command.yml

Telemetry File:
$TelemetryPath

Detection Status:
$DetectionStatus

Matched Conditions:
PowerShell Image Match: $ImageMatch
EncodedCommand Match: $EncodedMatch

Decoded Command:
$DecodedCommand

MITRE ATT&CK:
T1059.001 - PowerShell

Raw Telemetry Reviewed:
$Telemetry
"@

$Alert | Tee-Object $AlertPath
