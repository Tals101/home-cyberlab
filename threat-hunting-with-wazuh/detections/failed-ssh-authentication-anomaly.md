# Detection Logic: Failed SSH Authentication Anomaly

## Detection Name

Repeated Failed SSH Login Attempts

## Objective

Identify repeated failed SSH authentication attempts against the monitored Linux target.

## Data Source

- Wazuh Linux agent
- /var/log/auth.log
- sshd authentication events

## Suspicious Indicators

Look for events containing:

- Failed password
- Invalid user
- wronguser
- sshd
- Repeated login failures from the same source host

## Wazuh Hunt Query

Search terms used in Wazuh:

wronguser

Additional useful search terms:

Failed password
Invalid user
sshd

## Detection Logic

If multiple failed SSH login attempts are observed against the same target within a short period of time, treat the activity as a possible brute-force or password guessing attempt.

## Lab Evidence

Evidence file:

evidence/failed-ssh-auth-events.txt

Screenshot:

screenshots/failed-ssh-wazuh-alerts.png

## Analyst Conclusion

The target server recorded repeated failed SSH login attempts for a non-existent or invalid user. This activity is consistent with authentication probing or password guessing behavior.
