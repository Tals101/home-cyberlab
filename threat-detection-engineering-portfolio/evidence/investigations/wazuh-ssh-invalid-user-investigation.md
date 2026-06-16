# Investigation Note: Wazuh SSH Invalid User Password Guessing

## Detection Status

Validated

## Detection Platform

Wazuh

## Validation Method

The custom Wazuh rule was validated using wazuh-logtest inside a running Wazuh manager Docker container.

## Rule File

rules/wazuh/local_rules.xml

## Rule ID

100510

## Alert Evidence

evidence/alerts/wazuh-custom-ssh-invalid-user-alert.txt

## Raw Telemetry

evidence/raw-telemetry/wazuh-ssh-invalid-user.log

## Raw Event Tested

Jun 16 12:58:01 linux-lab sshd[2142]: Failed password for invalid user admin from 192.168.56.111 port 55122 ssh2

## What Happened

A simulated SSH authentication failure was tested against Wazuh. The log represented an invalid user login attempt against an SSH service.

The source IP was:

192.168.56.111

The targeted username was:

admin

## Detection Result

The custom Wazuh rule matched successfully.

Matched rule:

100510

Severity level:

10

Alert description:

Custom detection: SSH invalid user password guessing activity from 192.168.56.111 targeting user admin

## MITRE ATT&CK Mapping

Technique:

Brute Force: Password Guessing

Technique ID:

T1110.001

Tactic:

Credential Access

## Analyst Summary

This alert indicates an SSH login attempt using a non-existent user account. This can be associated with password guessing, brute-force activity, or opportunistic scanning.

In this lab, the event was safely simulated using a single SSH log line and validated with Wazuh's real rule-testing engine.

## Investigation Questions

1. Is the source IP known or trusted?
2. Was the targeted username expected?
3. Are there repeated attempts from the same IP?
4. Are multiple usernames being attempted?
5. Did any login attempt eventually succeed?
6. Are other hosts seeing the same source IP?
7. Should the source IP be blocked or monitored?

## Recommended Response

- Review additional SSH logs
- Check for repeated attempts from 192.168.56.111
- Check for successful logins after failed attempts
- Verify whether the targeted user account exists
- Add the source IP to a watchlist if activity continues
- Consider firewall blocking or rate limiting if repeated attempts occur

## Conclusion

The Wazuh custom rule was successfully validated against realistic SSH authentication telemetry. This provides real detection evidence for the portfolio.
