# Containment

## Containment Summary

The purpose of containment is to stop the suspected ransomware activity from spreading, preserve evidence, and prevent additional damage.

In this lab, the suspicious activity was limited to a controlled ransomware-response-tabletop workspace. In a real incident, containment would focus on isolating the affected workstation, disabling suspicious access, blocking malicious network traffic, and preserving forensic evidence.

## Affected Host

- Hostname: CYBERHUB
- User: Tals' CyberHub
- Suspected System Type: Developer Workstation
- Incident Type: Ransomware-like activity

## Immediate Containment Actions

| Priority | Action | Purpose |
|---|---|---|
| High | Isolate the workstation from the network | Prevent spread and stop outbound communication |
| High | Disable the affected user account if compromise is suspected | Prevent attacker reuse of credentials |
| High | Preserve PowerShell transcript evidence | Maintain command execution history |
| High | Preserve file modification evidence | Maintain proof of changed and renamed files |
| High | Preserve outbound network evidence | Maintain proof of external communication |
| Medium | Block suspicious external destinations | Prevent command-and-control or exfiltration traffic |
| Medium | Notify IT, security, and leadership contacts | Start the formal incident response process |
| Medium | Identify shared drives or repositories accessed by the workstation | Determine possible spread or business impact |

## Lab Containment Actions Performed

Because this is a safe lab, no real host isolation was performed. Instead, containment was documented as if this were a real ransomware incident.

Completed lab actions:

- Evidence was preserved in the evidence folder
- Suspicious PowerShell activity was captured in powershell-command-evidence.txt
- File modification activity was captured in file-modification-evidence.txt
- File hash changes were captured before and after modification
- Outbound network activity was captured in network-traffic-evidence.txt
- Destructive recovery-inhibition commands were documented but not executed
- All file changes were limited to the lab-workspace folder

## Recommended Real-World Containment Procedure

1. Remove the affected workstation from the network.
2. Do not power off the machine unless directed by incident response leadership.
3. Disconnect VPN access if the user is remote.
4. Disable the affected user's account if credential compromise is suspected.
5. Block suspicious destination IP addresses and domains at the firewall or DNS layer.
6. Check whether the workstation accessed shared drives, source code repositories, or cloud storage.
7. Preserve endpoint logs, PowerShell logs, EDR alerts, file hashes, and network logs.
8. Start an incident timeline.
9. Notify the incident response team.
10. Escalate to leadership if business-critical systems or sensitive data are involved.

## Containment Decision

Based on the lab evidence, this incident should be treated as a high-priority ransomware event.

Recommended containment status:

- Workstation isolation: Required in real incident
- User account lockout: Recommended if compromise is suspected
- Network blocking: Recommended
- Evidence preservation: Completed in lab
- Business escalation: Recommended in real incident

## Containment Conclusion

The correct containment response is to quickly isolate the affected developer workstation, preserve evidence, prevent additional network communication, and determine whether any shared systems were affected.
