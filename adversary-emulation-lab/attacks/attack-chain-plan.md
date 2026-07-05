# Adversary Emulation Attack Chain Plan

## Lab Scenario

A simulated attacker performs a controlled attack chain against lab-owned systems. The goal is to observe which activities are detected by Wazuh, Falco, and Sysmon, then document detection coverage and gaps.

## Attack Chain Phases

### 1. Recon

Goal:
Identify open ports, services, users, or reachable systems in the lab.

Planned activity:
- Run safe network and service discovery against lab-owned IP addresses only.

Expected detection:
- Wazuh may detect scanning activity.
- Sysmon may capture process and network activity on Windows.
- Falco may not apply unless container or Kubernetes activity is involved.

MITRE ATT&CK:
- T1046 - Network Service Discovery
- T1018 - Remote System Discovery

---

### 2. Initial Access

Goal:
Simulate an attempted login or access attempt.

Planned activity:
- Attempt controlled failed logins against a lab Linux or Windows system.

Expected detection:
- Wazuh should detect failed authentication attempts.
- Sysmon may capture related Windows process or network activity.

MITRE ATT&CK:
- T1110 - Brute Force
- T1078 - Valid Accounts

---

### 3. Persistence

Goal:
Simulate an attacker trying to maintain access.

Planned activity:
- Create a safe test persistence artifact, such as a test startup entry, scheduled task, or cron job.

Expected detection:
- Wazuh may detect file or configuration changes.
- Sysmon may detect registry, process, or scheduled task activity on Windows.

MITRE ATT&CK:
- T1053 - Scheduled Task/Job
- T1547 - Boot or Logon Autostart Execution

---

### 4. Privilege Escalation

Goal:
Simulate privilege-related activity.

Planned activity:
- Run safe admin/sudo commands and document privilege checks.

Expected detection:
- Wazuh should detect sudo or privilege-related authentication events.
- Sysmon may capture elevated process activity on Windows.

MITRE ATT&CK:
- T1068 - Exploitation for Privilege Escalation
- T1548 - Abuse Elevation Control Mechanism

---

### 5. Discovery

Goal:
Simulate internal discovery commands after access.

Planned activity:
- Run commands that list users, groups, hostname, network connections, and system information.

Expected detection:
- Wazuh may detect command activity depending on logging.
- Sysmon should capture process creation on Windows.
- Falco may detect suspicious shell activity inside containers.

MITRE ATT&CK:
- T1082 - System Information Discovery
- T1033 - System Owner/User Discovery
- T1087 - Account Discovery
- T1016 - System Network Configuration Discovery

---

### 6. Collection

Goal:
Simulate collecting staged lab files.

Planned activity:
- Create fake sensitive files and copy them to a collection folder.

Expected detection:
- Wazuh may detect file activity if file integrity monitoring is enabled.
- Sysmon may capture file creation and copy activity on Windows.

MITRE ATT&CK:
- T1005 - Data from Local System
- T1119 - Automated Collection

---

### 7. Container Runtime Activity

Goal:
Simulate suspicious activity inside a container or Kubernetes workload.

Planned activity:
- Open a shell inside a test container or pod.

Expected detection:
- Falco should detect shell activity inside a container.

MITRE ATT&CK:
- T1611 - Escape to Host
- T1059 - Command and Scripting Interpreter
