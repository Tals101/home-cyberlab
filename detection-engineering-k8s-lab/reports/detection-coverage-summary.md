# Detection Coverage Summary

## Lab Name
Detection Engineering Kubernetes Lab

## Coverage Overview

| Attack ID | Attack | Detection Status | Detection Source | MITRE Technique |
|---|---|---|---|---|
| ATTACK-001 | Internal Nmap service scan | Covered | Falco default rule | T1046 - Network Service Discovery |
| ATTACK-002 | User creation inside container | Covered after custom rule | Falco custom rule | T1136.001 - Create Account: Local Account |
| ATTACK-003 | Privileged pod host filesystem access | Covered after custom rule | Falco custom rule | T1611 - Escape to Host |
| ATTACK-004 | Reverse shell from container | Covered | Falco default rule | T1059 - Command and Scripting Interpreter |

## Detection Engineering Results

### Default Rule Coverage
Falco default rules successfully detected:
- Nmap packet socket activity
- Reverse shell stdin/stdout network redirection

### Coverage Gaps Found
Two important detection gaps were identified:
- User creation inside a container
- Host filesystem access through mounted hostPath

### Custom Rules Created
Two custom Falco rules were created:
- Suspicious User Management Command in Container
- Host Filesystem Access Through Mounted HostPath

### False Positive Testing
A benign admin command test was performed against the `admin-toolbox` container.

No high-signal false positives were observed for:
- Suspicious user management
- Host filesystem access
- Reverse shell redirection
- Packet socket creation

## Final Coverage Score

Total attack scenarios tested: 4  
Detected scenarios: 4  
Coverage: 100%

## Important Note
The 100% score applies only to the controlled lab scenarios tested. It does not mean the detection set covers all Kubernetes attack techniques.
