# Compromised Linux Server Recovery Lab



## Project Summary



This lab simulates a junior Linux administrator responding to a compromised internal Ubuntu server. The server was intentionally configured with weak users, poor file permissions, insecure SSH settings, suspicious persistence mechanisms, and exposed services.



The objective was to investigate the system, identify suspicious activity, harden the server, remove persistence, configure firewall rules, validate backups, and document the recovery process.



## Why This Project Matters



Linux servers commonly support business-critical applications, internal tools, web services, and infrastructure functions. A compromised or poorly configured Linux server can expose sensitive data, allow unauthorized access, and create persistence opportunities for attackers.



This lab demonstrates practical Linux administration and incident response skills through a hands-on recovery workflow.



## Skills Demonstrated



- Linux user and group management

- File permission review and hardening

- SSH configuration hardening

- systemd service investigation

- Cron persistence investigation

- Process review

- Network port review

- Firewall configuration with UFW

- Backup creation and restore validation

- Incident response documentation



## Lab Environment



- Host System: Windows 11

- Virtualization: VirtualBox

- Server OS: Ubuntu Server LTS

- Services: nginx, OpenSSH, cron, systemd

- Firewall: UFW



## Investigation Summary



The investigation identified several weaknesses and suspicious items:



- Temporary administrative user with excessive sudo access

- World-writable sensitive directory and file permissions

- SSH configured to allow root login and password authentication

- Suspicious cron job calling an external URL every 5 minutes

- Suspicious systemd service named `updater.service`

- Exposed SSH and HTTP services



## Hardening Summary



The following remediation actions were completed:



- Removed `tempadmin` from the sudo group

- Disabled root SSH login

- Disabled SSH password authentication

- Removed the suspicious cron job

- Stopped, disabled, and removed `updater.service`

- Restricted `/opt/company` permissions

- Restricted `payroll.db` ownership and permissions

- Enabled UFW firewall with only SSH and HTTP allowed

- Created and tested a backup of `/opt/company`



## Evidence



Evidence was captured in the `screenshots` folder and summarized in:



- `reports/incident-response-report.md`



## Lessons Learned



This lab reinforced the importance of least privilege, secure SSH configuration, controlled file permissions, persistence review, firewall enforcement, and tested backups.

