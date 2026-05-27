# Compromised Linux Server Recovery Lab



## 1. Initial Findings

- Reviewed authentication and SSH-related logs using `journalctl`.
- The `last` command could not read `/var/log/wtmp`, so SSH/service logs were used as an alternate evidence source.
- Reviewed cron-related system activity using `journalctl` and checked the cron service status.
- Confirmed that cron was available for scheduled task execution.
- This supports the investigation of the suspicious cron persistence mechanism.



## 2. Suspicious Users

- Reviewed local privileged users using `getent group sudo`.
- Confirmed that the `tempadmin` account had sudo access.
- This is suspicious because `tempadmin` appears to be a temporary administrative account with elevated privileges.
- Local user review identified the expected lab accounts: `cyberhub`, `tempadmin`, and `backup`.
- The `tempadmin` account requires further review because it has sudo privileges.
- Remediation completed: `tempadmin` was removed from the `sudo` group during hardening.


## 3. Suspicious Services

- Reviewed running processes using `ps aux`.
- Identified suspicious process activity related to the fake `updater.service`.
- The service runs a continuous loop using `/bin/bash` and `sleep 60`, which is suspicious because it does not perform a clear business function.
- Reviewed running systemd services using `systemctl list-units --type=service --state=running`.
- Confirmed that `updater.service` was active and running.
- The `updater.service` is suspicious because it was configured as a startup service and runs a continuous background loop without a legitimate administrative purpose.
- This represents a persistence mechanism that could allow unwanted activity to restart after a reboot.


## 4. Open Ports

- Reviewed listening network services using `ss -tulpn` and `netstat -tulpn`.
- Confirmed that SSH was listening on port `22`.
- Confirmed that nginx was listening on port `80`.
- These services are expected for the lab, but they represent exposed entry points that must be reviewed and protected.


## 5. Weak Configurations

- Reviewed SSH configuration using `grep` against `/etc/ssh/sshd_config`.
- Confirmed that `PermitRootLogin yes` was enabled.
- Confirmed that `PasswordAuthentication yes` was enabled.
- These settings are weak because they allow root SSH login and password-based authentication.
- Reviewed permissions on `/opt/company` and `/opt/company/payroll.db`.
- Confirmed that the directory and file had overly permissive `777`-style access.
- This is weak because any user could read, modify, or potentially abuse sensitive data in that location.
- Remediation completed: SSH root login and password authentication were disabled during hardening.
- Remediation completed: `/opt/company` and `payroll.db` permissions were restricted during hardening.

## 6. Hardening Actions Taken

- Hardened SSH by changing `PermitRootLogin` from `yes` to `no`.
- Hardened SSH by changing `PasswordAuthentication` from `yes` to `no`.
- Tested the SSH configuration using `sshd -t` before restarting the service.
- Restarted SSH and confirmed the service remained active.
- Created a dedicated `finance` group for sensitive payroll file access.
- Changed ownership of `/opt/company/payroll.db` to `root:finance`.
- Changed file permissions on `/opt/company/payroll.db` from insecure `777` access to `640`.
- Changed directory permissions on `/opt/company` to `750`.
- Confirmed that normal users could no longer freely list or access the sensitive directory without elevated permissions.
- Configured UFW firewall rules to allow only required inbound services: SSH and HTTP.
- Removed excessive sudo access from the `tempadmin` account.
- Verified that `tempadmin` was no longer a member of the `sudo` group.
- This reduced unnecessary administrative privileges and followed least-privilege access principles.
- Performed final hardening verification after remediation.
- Confirmed that `updater.service` was removed.
- Confirmed that the suspicious user crontab was removed.
- Confirmed that `tempadmin` no longer had sudo privileges.
- Confirmed that UFW was active with only required inbound services allowed.
- Exported the hardened SSH configuration from the Ubuntu VM to the Windows host using `scp`.
- Temporarily enabled SSH password authentication only for file transfer, then changed it back to `PasswordAuthentication no`.
- Verified SSH was re-hardened after the transfer.


## 7. Firewall Rules

- Enabled UFW to restrict inbound network access.
- Set the default inbound policy to deny incoming traffic.
- Allowed SSH access on port `22`.
- Allowed nginx web traffic on port `80/tcp`.
- Verified the active firewall rules using `ufw status verbose`.


## 8. Persistence Removed

- Reviewed the user crontab using `crontab -l`.
- Identified a suspicious cron job running every 5 minutes:
  `*/5 * * * * curl http://example.com/beacon`
- This is suspicious because it repeatedly calls an external URL and could represent command-and-control beaconing or persistence.
- Cron activity was reviewed before removal to document the persistence mechanism.
- The suspicious cron entry was not removed yet during this step; it was preserved temporarily for investigation evidence.
- Stopped and disabled the suspicious `updater.service`.
- Removed the systemd service file from `/etc/systemd/system/updater.service`.
- Reloaded systemd using `systemctl daemon-reload`.
- Confirmed that `updater.service` could no longer be found.
- Removed the suspicious cron persistence entry using `crontab -r`.
- Confirmed that the user crontab no longer existed.


## 9. Backup Strategy

- Created a backup directory at `/backups`.
- Created a compressed backup of `/opt/company` using `tar`.
- Backup file created: `/backups/company-backup.tar.gz`.
- Tested the backup by restoring it into `/restore-test`.
- Confirmed that `/restore-test/opt/company/payroll.db` was restored successfully.


## 10. Lessons Learned
- Temporary administrative accounts should be reviewed regularly and removed or restricted when no longer needed.
- Sensitive files should never be left with world-writable permissions such as `777`.
- SSH should be hardened by disabling root login and password authentication where key-based access is available.
- Suspicious cron jobs and systemd services can be used as persistence mechanisms.
- Firewall rules should follow least privilege by allowing only required inbound services.
- Backups should be tested through restore validation, not just created.
