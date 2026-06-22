# Indicators of Suspicious Insider Activity

| Indicator | Source | User | Why It Matters |
|---|---|---|---|
| Failed authentication for jsmith | auth.log | jsmith | Shows failed access activity involving the suspected account before the sensitive file copy activity |
| Access to /srv/sensitive by jsmith | audit.log | jsmith | Confirms the suspected account viewed the sensitive-data directory before copying files |
| Large sensitive file copied: customer_export_large.bin | audit.log | jsmith | Indicates possible data exfiltration because a large sensitive export was copied by the suspected user |
| Multiple sensitive documents copied | audit.log | jsmith | Shows customer contracts, merger notes, and salary planning files were copied in the same activity window |
| USB-style mount activity at /media/usb | auth.log and audit.log | analyst/root, followed by jsmith activity | Shows removable-media style activity occurred shortly before the suspected file copy window |
