# MITRE ATT&CK Mapping: Reverse-Shell-Style Activity

## Activity Observed

The monitored Ubuntu target executed bash and netcat to create an outbound connection from the target server back to the Kali attacker machine.

This was performed as a safe reverse-shell-style simulation. The command sent a text string to the Kali listener instead of opening a real interactive shell.

## Source System

wazuh-hunt-target  
IP Address: 192.168.56.118

## Destination System

Kali Linux  
IP Address: 192.168.56.111

## Technique Mapping

### T1059 - Command and Scripting Interpreter

The activity involved execution of bash on the monitored Linux target.

### T1059.004 - Unix Shell

The command used bash to execute a shell-based command on Linux.

### T1105 - Ingress Tool Transfer / Command and Control Utility Usage

Netcat was used to create network communication between the monitored target and the Kali attacker machine.

### T1071 - Application Layer Protocol

The activity involved outbound network communication from the monitored target to the attacker machine.

## Supporting Evidence

- evidence/reverse-shell-audit-events.txt
- detections/reverse-shell-style-activity.md
- screenshots/reverse-shell-wazuh-events.png

## Hunt Result

Wazuh successfully collected auditd events showing execution of bash and netcat on the monitored Linux target.

## Analyst Notes

Reverse-shell-style behavior should be investigated when a server unexpectedly executes shell interpreters together with network utilities such as nc, ncat, bash, sh, python, perl, or socat.

In a real environment, this could indicate command execution, post-exploitation activity, or command-and-control behavior.
