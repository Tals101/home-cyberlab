# Investigation Note: Failed SSH Authentication Activity

## Investigation Title

Failed SSH Login Attempts Against Wazuh-Monitored Linux Server

## Date

2026-06-23

## Summary

During this hunt, repeated failed SSH login attempts were generated from Kali Linux against the monitored Ubuntu target server.

The activity was performed to simulate authentication probing and password guessing behavior.

## Systems Involved

### Attacker Machine

Kali Linux

### Target Machine

Hostname: wazuh-hunt-target
IP Address: 192.168.56.118

### Detection Platform

Hostname: wazuh-server
IP Address: 192.168.56.120

## Observed Activity

The target server recorded repeated SSH authentication failures involving the username:

wronguser

The activity appeared in local authentication logs and was also visible in the Wazuh dashboard.

## Evidence Reviewed

- evidence/failed-ssh-auth-events.txt
- screenshots/failed-ssh-wazuh-alerts.png
- detections/failed-ssh-authentication-anomaly.md
- mitre-mappings/failed-ssh-mitre-mapping.md

## Hunt Category

Authentication anomaly

## MITRE ATT&CK Mapping

- T1110 - Brute Force
- T1110.001 - Password Guessing

## Analyst Assessment

The failed SSH login activity is consistent with password guessing or authentication probing.

In a real environment, this would require review of:

- Source IP address
- Username attempted
- Number of failed attempts
- Time window of the activity
- Whether any successful login occurred afterward

## Recommended Response

- Review SSH logs for successful logins from the same source
- Confirm whether the source IP is expected
- Block or rate-limit suspicious sources if needed
- Enforce strong passwords and SSH key-based authentication
- Disable direct SSH login for unnecessary accounts
- Consider tools such as fail2ban or firewall rules for repeated failures

## Conclusion

Wazuh successfully collected and displayed failed SSH authentication activity from the monitored target. This confirms that the lab environment can support authentication anomaly hunting.
