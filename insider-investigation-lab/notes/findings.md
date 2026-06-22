# Findings

| Finding | Severity | Evidence | Explanation |
|---|---|---|---|
| jsmith accessed sensitive data | Medium | audit.log / jsmith-audit-events.txt | The suspected account accessed /srv/sensitive and viewed sensitive files before the copy activity. |
| jsmith copied a large sensitive export file | High | audit.log / jsmith-audit-events.txt | The audit log shows jsmith using cp to access /srv/sensitive/customer_export_large.bin, which indicates possible data exfiltration. |
| jsmith copied multiple sensitive documents | High | audit.log / jsmith-audit-events.txt | The audit log shows copy activity for customer contracts, merger notes, and salary planning files during the same activity window. |
| USB-style activity occurred before file copies | Medium | auth.log / audit.log / usb-activity-events.txt | The USB mount location /media/usb was active shortly before the sensitive copy activity, supporting a removable-media exfiltration scenario. |
