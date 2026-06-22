# Suspicious Insider Investigation Report

## 1. Executive Summary

This investigation reviewed authentication and audit evidence from an Ubuntu Server lab built to simulate a suspicious insider incident. The scenario involved a user account suspected of accessing and copying sensitive company files before leaving the organization.

The investigation found that the account `jsmith` accessed the sensitive data directory `/srv/sensitive`, viewed sensitive files, and later copied a large sensitive export file along with multiple sensitive text documents. USB-style removable-media activity was also observed shortly before the copy activity, with `/media/usb` mounted and made writable before the sensitive file copies occurred.

Based on the collected evidence, the activity is consistent with a possible insider data exfiltration event. The strongest findings are the confirmed access to sensitive files by `jsmith`, the confirmed copy operation involving `customer_export_large.bin`, and additional copy activity involving customer contracts, merger notes, and salary planning files.

## 2. Scope

The scope of this investigation included reviewing Linux authentication and audit evidence from the Ubuntu Server lab system named `insider-lab`.

The investigation focused on:

- Normal user login activity
- Failed login activity
- Sudo and administrative activity
- Sensitive file access
- Large file copy behavior
- USB-style mount and removable-media activity
- Timeline reconstruction
- Findings and recommended actions

## 3. Systems and Accounts Reviewed

### System

| Item | Value |
|---|---|
| System Name | insider-lab |
| Operating System | Ubuntu Server |
| Lab Type | Suspicious Insider Investigation |
| Evidence Sources | auth.log, audit.log, filtered evidence files |

### Accounts

| Account | Role in Lab |
|---|---|
| analyst | Administrator / investigator account |
| jsmith | Suspected insider account |
| mroberts | Normal employee account |
| tchen | Normal employee account |

## 4. Evidence Collected

| Evidence File | Purpose |
|---|---|
| evidence/auth.log | Raw authentication and sudo activity |
| evidence/audit.log | Raw auditd file access and monitored activity |
| evidence/auth-key-events.txt | Filtered authentication, session, sudo, and user activity |
| evidence/sensitive-data-events.txt | Filtered sensitive directory and sensitive file events |
| evidence/usb-activity-events.txt | Filtered USB-style mount and removable-media activity |
| evidence/jsmith-audit-events.txt | Filtered audit activity related to jsmith |

## 5. Investigation Methodology

The investigation followed a basic SOC analyst workflow:

1. Review authentication logs for user sessions, failed logins, and administrative activity.
2. Review audit logs for sensitive directory access and file activity.
3. Identify events involving the suspected account `jsmith`.
4. Correlate `auth.log` session activity with `audit.log` file activity.
5. Review USB-style mount activity involving `/media/usb`.
6. Build a timeline of key events.
7. Identify indicators, findings, and recommended actions.

## 6. Timeline of Events

| Time UTC | Source | User | Event | Why It Matters |
|---|---|---|---|---|
| 2026-06-22 16:34:06 | auth.log | analyst/root | `jsmith` added to the `sensitive` group | Gave `jsmith` access to the sensitive data directory for the lab scenario |
| 2026-06-22 17:01:34 | auth.log | jsmith | Session opened for user `jsmith` | Places the suspected user on the system before sensitive-data activity |
| 2026-06-22 17:02:49 | auth.log | jsmith | Failed authentication attempt for `jsmith` | Shows failed access activity involving the suspected account |
| 2026-06-22 17:02:03 | audit.log | jsmith | `jsmith` accessed `/srv/sensitive` and viewed sensitive files | Confirms the suspected user interacted with sensitive data |
| 2026-06-22 17:12:18 | auth.log / audit.log | analyst/root | `/media/usb` mounted as a temporary filesystem | Shows USB-style removable-media activity before the file copy window |
| 2026-06-22 17:12:54 | auth.log | analyst/root | `/media/usb` permissions changed to writable | The mount location was prepared for file writes |
| 2026-06-22 17:13:38 | auth.log | jsmith | Session opened for user `jsmith` | Places the suspected user on the system shortly before file copies |
| 2026-06-22 17:15:17 | audit.log | jsmith | `jsmith` copied `/srv/sensitive/customer_export_large.bin` using `cp` | High-risk event showing a large sensitive file was copied |
| 2026-06-22 17:15:48 | audit.log | jsmith | `jsmith` copied `customer_contracts.txt`, `merger_notes.txt`, and `salary_planning.txt` | Shows multiple sensitive documents were copied in the same activity window |
| 2026-06-22 17:16:26 | auth.log | jsmith | Session closed for user `jsmith` | The suspected user session ended shortly after copy activity |
| 2026-06-22 17:17:32 | auth.log | analyst/root | `/media/usb` was unmounted | Supports the removable-media exfiltration scenario |

## 7. Key Indicators

| Indicator | Source | User | Why It Matters |
|---|---|---|---|
| Failed authentication for `jsmith` | auth.log | jsmith | Shows failed access activity involving the suspected account |
| Access to `/srv/sensitive` | audit.log | jsmith | Confirms the suspected account accessed the sensitive data directory |
| Sensitive file enumeration | audit.log | jsmith | Shows sensitive files were viewed before the copy activity |
| Large sensitive file copied: `customer_export_large.bin` | audit.log | jsmith | Indicates possible data exfiltration due to copying a large sensitive export |
| Multiple sensitive documents copied | audit.log | jsmith | Shows customer contracts, merger notes, and salary planning documents were copied |
| USB-style mount activity at `/media/usb` | auth.log / audit.log | analyst/root | Shows removable-media style activity occurred before the copy window |
| Writable USB-style location | auth.log | analyst/root | `/media/usb` was made writable before the sensitive file copies |

## 8. Findings

### Finding 1: `jsmith` accessed sensitive data

**Severity:** Medium

The account `jsmith` accessed the sensitive data directory `/srv/sensitive`. Audit evidence shows activity involving `jsmith` and sensitive files including customer contracts, salary planning, merger notes, and the large customer export file.

**Why this matters:**  
Accessing the sensitive directory by itself may be allowed if the user is a member of the proper group. However, in this scenario, it becomes suspicious because it occurred shortly before the same user copied multiple sensitive files.

### Finding 2: `jsmith` copied a large sensitive export file

**Severity:** High

Audit evidence shows `jsmith` using the `cp` command against `/srv/sensitive/customer_export_large.bin`.

**Why this matters:**  
A large file copy involving a sensitive export is a strong indicator of possible data staging or exfiltration. Large export files often contain bulk data and create a higher business risk than normal single-document access.

### Finding 3: `jsmith` copied multiple sensitive documents

**Severity:** High

Audit evidence shows copy activity involving multiple sensitive text files, including:

- `customer_contracts.txt`
- `merger_notes.txt`
- `salary_planning.txt`

**Why this matters:**  
Copying several different categories of sensitive documents in the same time window suggests intentional collection of business-sensitive data rather than normal file browsing.

### Finding 4: USB-style activity occurred shortly before the sensitive file copies

**Severity:** Medium

The system showed `/media/usb` mount activity before the sensitive file copy events. The mount location was also made writable before `jsmith` copied the sensitive files.

**Why this matters:**  
Removable media activity shortly before sensitive file copies supports a possible exfiltration path. Even though this was simulated using a temporary filesystem in the lab, the workflow mirrors a real-world removable-media investigation.

### Finding 5: The attempted `jsmith` sudo event was not confirmed in the collected logs

**Severity:** Informational

A sudo attempt was simulated during the lab, but the collected `auth.log` evidence did not clearly show a confirmed `jsmith` sudo denial event.

**Why this matters:**  
The report should only include confirmed evidence. Since the raw log search did not confirm the `jsmith` sudo event, it should not be treated as a finding.

## 9. Assessment

The activity is consistent with suspicious insider behavior. The most important evidence is the sequence of events:

1. `jsmith` accessed the sensitive data directory.
2. A USB-style mount location was prepared.
3. `jsmith` logged in shortly before the copy activity.
4. `jsmith` copied a large sensitive export file.
5. `jsmith` copied multiple additional sensitive documents.
6. The USB-style mount was later removed.

This sequence supports the conclusion that sensitive data was likely collected and copied to a removable-media style location.

## 10. Recommended Actions

| Action | Priority | Reason |
|---|---|---|
| Disable or lock the `jsmith` account | High | Prevents additional access while the investigation is active |
| Preserve `auth.log`, `audit.log`, and filtered evidence files | High | Maintains evidence for investigation review and escalation |
| Review sensitive group membership | High | Confirms only users with a business need can access sensitive files |
| Review USB and removable-media controls | High | Helps prevent sensitive data from being copied to removable storage |
| Review recent file access by other sensitive group members | Medium | Determines whether similar activity occurred from other accounts |
| Add alerting for large file copies from sensitive folders | High | Detects future suspicious access or staging behavior |
| Add alerting for mount activity involving `/media`, `/mnt`, and removable paths | Medium | Helps detect removable-media usage |
| Require approval or monitoring for sensitive bulk exports | High | Reduces the risk of unauthorized mass data movement |
| Conduct user activity review for `jsmith` | Medium | Determines whether the activity fits expected job duties |
| Document lessons learned | Medium | Improves future insider-threat monitoring and response workflows |

## 11. Evidence Summary

| Evidence | Description |
|---|---|
| `auth.log` | Shows login sessions, failed authentication activity, sudo activity, mount activity, and unmount activity |
| `audit.log` | Shows file access and copy activity involving `/srv/sensitive` and `/media/usb` |
| `auth-key-events.txt` | Filtered authentication and administrative events |
| `sensitive-data-events.txt` | Filtered sensitive file access events |
| `usb-activity-events.txt` | Filtered USB-style mount activity |
| `jsmith-audit-events.txt` | Filtered audit events related to `jsmith` |

## 12. Conclusion

The investigation found confirmed evidence that `jsmith` accessed sensitive files and copied a large sensitive export file along with multiple sensitive business documents. The copy activity occurred shortly after USB-style mount activity, making the behavior consistent with a possible insider data exfiltration scenario.

The recommended response is to preserve evidence, disable or restrict the suspected account, review access permissions, and improve monitoring for sensitive file access, large copy operations, and removable-media activity.

## 13. Final Determination

**Incident Status:** Confirmed suspicious activity  
**Likely Activity Type:** Insider data collection and possible exfiltration  
**Primary Account Involved:** `jsmith`  
**Primary Data Location:** `/srv/sensitive`  
**Possible Exfiltration Path:** USB-style mount location `/media/usb`  
**Overall Severity:** High
