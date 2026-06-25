# MITRE ATT&CK Mapping: Failed SSH Authentication

## Activity Observed

Repeated failed SSH login attempts were generated from Kali Linux against the monitored Ubuntu target server.

## Source System

Kali Linux attacker machine

## Target System

wazuh-hunt-target
IP Address: 192.168.56.118

## Technique Mapping

### T1110 - Brute Force

The repeated SSH login failures are consistent with brute-force behavior.

### T1110.001 - Password Guessing

The use of an invalid username and repeated password attempts maps most closely to password guessing.

## Supporting Evidence

- evidence/failed-ssh-auth-events.txt
- screenshots/failed-ssh-wazuh-alerts.png
- detections/failed-ssh-authentication-anomaly.md

## Hunt Result

Wazuh successfully captured failed SSH authentication events from the monitored Linux target. The events showed repeated failed login attempts using the username wronguser.

## Analyst Notes

This activity should be investigated when seen in a real environment, especially if:

- Attempts come from an unknown source IP
- Multiple usernames are tried
- The activity continues over a short period of time
- The same source later succeeds in authenticating
