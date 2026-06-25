# Investigation Note: Reverse-Shell-Style Activity

## Investigation Title

Reverse-Shell-Style Netcat Activity on Wazuh-Monitored Linux Server

## Date

2026-06-23

## Summary

During this hunt, the monitored Ubuntu target server executed a safe reverse-shell-style test command.

The command used bash and netcat to send a test message from the monitored target back to the Kali attacker machine.

This did not create a real interactive shell. It was used only to generate safe telemetry for hunting.

## Systems Involved

### Source System

Hostname: wazuh-hunt-target  
IP Address: 192.168.56.118

### Destination System

Kali Linux  
IP Address: 192.168.56.111

### Detection Platform

Hostname: wazuh-server  
IP Address: 192.168.56.120

## Observed Activity

The monitored target executed:

bash

and

nc

Audit rules captured the execution activity using these audit keys:

reverse_shell_tool_execution

shell_execution

Wazuh collected the auditd events and made them searchable in the dashboard.

## Evidence Reviewed

- evidence/reverse-shell-audit-events.txt
- detections/reverse-shell-style-activity.md
- mitre-mappings/reverse-shell-mitre-mapping.md
- screenshots/reverse-shell-wazuh-events.png

## Hunt Category

Reverse shell attempt / suspicious shell and network utility execution

## MITRE ATT&CK Mapping

- T1059 - Command and Scripting Interpreter
- T1059.004 - Unix Shell
- T1105 - Ingress Tool Transfer / Command and Control Utility Usage
- T1071 - Application Layer Protocol

## Analyst Assessment

The observed behavior is suspicious because a monitored server executed a shell and used netcat to connect outward to another machine.

In a real environment, this could indicate command execution, post-exploitation behavior, or command-and-control activity.

## Recommended Response

- Confirm whether netcat use is expected on the server
- Review process execution history around the same time window
- Review outbound network connections from the target
- Check for additional suspicious tools such as ncat, socat, python, perl, or bash network redirection
- Validate whether any unauthorized user activity occurred before the connection
- Restrict unnecessary network utilities on production systems
- Add audit rules for suspicious command execution

## Conclusion

Wazuh successfully collected auditd telemetry showing shell and netcat execution on the monitored target. This confirms the lab can support hunting for reverse-shell-style behavior using Linux process execution evidence.
