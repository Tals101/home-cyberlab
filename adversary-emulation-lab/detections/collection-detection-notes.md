# Collection Detection Notes

## Phase

Collection

## Attack Activity

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

Archive created:
- lab7-collected-files.tar.gz

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Wazuh | May detect file activity, archive activity, or command activity if auditing is available | Not directly detected. Only unrelated SCA findings were returned |
| Sysmon | Not applicable for Ubuntu collection test | Not applicable |
| Falco | Not applicable unless collection is simulated inside Kubernetes/container workloads | Not applicable |

## Detection Result

Overall Collection Detection Result:
- Not directly detected by Wazuh

## Detection Summary

Wazuh did not generate a clear alert for the fake files being copied or archived.

The results contained SCA/configuration findings with some collection-related MITRE mappings, but those findings were not tied to the actual lab activity.

## Detection Gaps

- No direct alert was observed for fake file creation
- No direct alert was observed for file copying into the collection folder
- No direct alert was observed for tar.gz archive creation
- Linux command auditing or file integrity monitoring would improve collection detection coverage

## Evidence Files

- evidence/collection-summary.txt
- evidence/collection-time.txt
- evidence/lab7-collected-files.tar.gz
- evidence/wazuh-collection-alert-search.txt
- detections/wazuh-collection-detection-analysis.md
