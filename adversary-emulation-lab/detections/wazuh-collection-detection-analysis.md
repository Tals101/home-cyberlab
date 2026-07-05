# Wazuh Collection Detection Analysis

## Phase

Collection

## Activity Tested

Fake lab files were created, copied into a collection folder, and archived.

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

User:
- analyst

Files created:
- fake-customer-list.txt
- fake-financial-notes.txt
- fake-internal-plan.txt

Collection folder:
- ~/lab7-collection/collected-files

Archive created:
- ~/lab7-collection/lab7-collected-files.tar.gz

## Wazuh Search Result

Wazuh did not directly detect the fake collection activity.

The search returned SCA/configuration findings mapped to collection-related techniques such as T1005, but those findings were not tied to the actual lab collection activity.

No clear alerts were observed for:

- fake-customer-list
- fake-financial-notes
- fake-internal-plan
- lab7-collection
- collected-files
- tar archive creation
- lab7-collected-files.tar.gz

## Detection Decision

Result: Not Directly Detected

## Reason

Wazuh showed some collection-related MITRE mappings through SCA findings, but it did not generate a direct alert for the fake files being copied or archived.

This means Wazuh had general configuration visibility, but did not provide command-level or file-level detection for this collection simulation.

## Evidence

Evidence files:

- evidence/collection-summary.txt
- evidence/collection-time.txt
- evidence/lab7-collected-files.tar.gz
- evidence/wazuh-collection-alert-search.txt

Key evidence observed:

- Fake files were created successfully
- Fake files were copied into a collection folder
- A tar.gz archive was created
- Wazuh did not directly alert on the file copy or archive activity

## MITRE ATT&CK Mapping

| Tactic | Technique | ID | Detection Result |
|---|---|---|---|
| Collection | Data from Local System | T1005 | Not directly detected |
| Collection | Archive Collected Data | T1560 | Not detected |
| Collection | Archive via Utility | T1560.001 | Not detected |
| Discovery | File and Directory Discovery | T1083 | Not directly detected |
