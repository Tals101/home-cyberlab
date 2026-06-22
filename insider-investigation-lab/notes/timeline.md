# Suspicious Insider Investigation Timeline

| Time | Source | User | Event | Why It Matters |
|---|---|---|---|---|
| 2026-06-22 17:02 UTC | audit.log | jsmith | Listed/accessed /srv/sensitive directory and sensitive files | Confirms the suspected user viewed sensitive data before later copying it |
| 2026-06-22 17:15:17 UTC | audit.log | jsmith | Copied /srv/sensitive/customer_export_large.bin using cp | High-risk event showing a large sensitive file was copied by the suspected insider |
| 2026-06-22 17:15:48 UTC | audit.log | jsmith | Copied customer_contracts.txt, merger_notes.txt, and salary_planning.txt from /srv/sensitive | Shows multiple sensitive documents were copied after the large export file |
| 2026-06-22 17:12:18 UTC | audit.log | analyst/root | USB mount location /media/usb was accessed during mount activity | Shows removable-media style activity occurred shortly before the sensitive file copy events |
| 2026-06-22 17:13:38 UTC | auth.log | jsmith | Session opened for user jsmith | Places the suspected user on the system shortly before the sensitive file copy activity |
| 2026-06-22 17:02:49 UTC | auth.log | jsmith | Failed authentication attempt for jsmith | Indicates suspicious or failed account access activity before later sensitive-file activity |
