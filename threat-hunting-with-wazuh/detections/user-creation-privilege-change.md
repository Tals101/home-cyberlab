# Detection Logic: New User Creation and Privilege Change

## Detection Name

Suspicious Local Account Creation and Sudo Group Assignment

## Objective

Identify new local user creation and privilege changes on a monitored Linux server.

## Data Source

- Wazuh Linux agent
- Linux auditd logs
- /var/log/audit/audit.log
- /etc/passwd
- /etc/shadow
- /etc/group
- useradd and usermod execution events

## Suspicious Indicators

Look for events involving:

- huntuser
- useradd
- usermod
- sudo group assignment
- account_creation
- privilege_change
- identity_file_change
- group_file_change
- /etc/passwd
- /etc/shadow
- /etc/group

## Wazuh Hunt Queries

Search terms used in Wazuh:

huntuser

Additional useful search terms:

account_creation
privilege_change
useradd
usermod
sudo
/etc/passwd
/etc/group

## Detection Logic

If a new local user account is created and then added to a privileged group such as sudo, investigate the activity as possible persistence or privilege escalation.

## Lab Evidence

Evidence file:

evidence/user-creation-privilege-audit-events.txt

Screenshot:

screenshots/user-creation-privilege-wazuh-events.png

## Analyst Conclusion

The monitored target recorded creation of a new user named huntuser and a later privilege change that added the user to the sudo group. Wazuh collected the auditd events, making the activity searchable for threat hunting.
