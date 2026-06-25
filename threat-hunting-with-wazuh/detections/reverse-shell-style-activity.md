# Detection Logic: Reverse-Shell-Style Tool Execution

## Detection Name

Netcat Reverse-Shell-Style Connection Attempt

## Objective

Identify suspicious shell and network utility execution that may indicate reverse shell behavior.

## Data Source

- Wazuh Linux agent
- Linux auditd logs
- /var/log/audit/audit.log
- Process execution events

## Suspicious Indicators

Look for audit events involving:

- reverse_shell_tool_execution
- shell_execution
- /usr/bin/nc
- /bin/bash
- Outbound connection activity from the monitored target to Kali

## Wazuh Hunt Queries

Search terms used in Wazuh:

reverse_shell_tool_execution

Additional useful search terms:

shell_execution
/usr/bin/nc
/bin/bash
nc
auditd

## Detection Logic

If a monitored Linux server executes netcat or similar network tools along with shell activity, investigate the behavior as possible reverse-shell-style activity.

In this lab, the activity was safely simulated by sending a text string from the monitored target to the Kali listener instead of opening a real interactive shell.

## Lab Evidence

Evidence file:

evidence/reverse-shell-audit-events.txt

Screenshot:

screenshots/reverse-shell-wazuh-events.png

## Analyst Conclusion

The monitored target executed bash and netcat, and auditd recorded the activity using custom audit keys. Wazuh collected the audit events, allowing the analyst to hunt for reverse-shell-style behavior.
