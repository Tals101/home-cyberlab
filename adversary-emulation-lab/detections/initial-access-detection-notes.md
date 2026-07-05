# Initial Access Detection Notes

## Phase

Initial Access

## Attack Activity

Controlled failed SSH login attempts were performed from Kali Linux against the Ubuntu Wazuh target.

Source:
- Kali Linux: 192.168.56.111

Target:
- Ubuntu Server: 192.168.56.121
- Wazuh agent: ubuntu-lab7

Usernames tested:
- lab7fake
- fakeadmin
- testuser

## Expected Detection Sources

| Tool | Expected Result | Actual Result |
|---|---|---|
| Wazuh | Should detect failed SSH authentication attempts against Ubuntu | Detected. Wazuh generated sshd, PAM, and repeated failed password alerts |
| Sysmon | May capture SSH service activity on Windows | Not applicable for Ubuntu SSH test |
| Falco | Not applicable unless initial access is simulated inside Kubernetes/container workloads | Not applicable |

## Detection Result

Overall Initial Access Detection Result:
- Detected by Wazuh

## Detection Summary

Wazuh successfully detected the controlled failed SSH login attempts from Kali Linux.

The activity generated alerts for invalid SSH users, PAM authentication failures, and repeated missed passwords.

## Detection Gaps

- This test did not validate successful login with valid credentials
- This test did not validate Windows login detection
- This test did not validate container-based initial access

## Evidence Files

- evidence/failed-ssh-summary.txt
- evidence/failed-ssh-attempt-time.txt
- evidence/wazuh-initial-access-alert-search.txt
- detections/wazuh-initial-access-detection-analysis.md
