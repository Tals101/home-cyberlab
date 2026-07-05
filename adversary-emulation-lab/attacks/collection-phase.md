# Collection Phase

## Objective

Simulate safe file collection activity on the Ubuntu lab target.

## Approved Target

| Target | IP Address | Detection Tool |
|---|---|---|
| Ubuntu Server | 192.168.56.121 | Wazuh |

## Collection Activity

Planned activity:

- Create fake lab data files
- Copy the fake files into a collection folder
- Archive the fake files
- Search Wazuh for file collection or archive-related alerts

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---|---|---|
| Collection | Data from Local System | T1005 |
| Collection | Archive Collected Data | T1560 |
| Collection | Archive via Utility | T1560.001 |
| Discovery | File and Directory Discovery | T1083 |

## Safety Note

This phase uses fake lab-created files only.

No real sensitive, personal, production, or company data is accessed.
