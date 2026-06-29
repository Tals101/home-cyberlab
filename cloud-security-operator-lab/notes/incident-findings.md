# Cloud Security Operator Lab - Incident Findings

## Finding 1: Overly Permissive IAM Role

### Finding

The IAM role $RoleName was configured with the AWS managed policy AdministratorAccess.

### Why This Matters

AdministratorAccess gives broad permissions across the AWS account. If a user, service, or attacker can assume this role, they may be able to enumerate resources, access data, create persistence, modify IAM, or weaken logging.

### Evidence

- evidence/step-09-overpermissive-role-details.json
- evidence/step-10-overpermissive-role-attached-policies.json
- evidence/step-15-assume-role-sanitized.json
- evidence/step-16-attacker-assumed-role-identity.json

### Severity

High

---

## Finding 2: Successful Role Assumption

### Finding

The role $RoleName was successfully assumed using the session name CloudSecLab-AttackerSimulation.

### Why This Matters

Successful role assumption proves that the trust relationship allowed another IAM principal to enter the privileged role.

### Evidence

- evidence/step-15-assume-role-sanitized.json
- evidence/step-22-cloudtrail-assume-role-events.json
- evidence/step-27-parsed-cloudtrail-event-summary.csv

### Severity

High

---

## Finding 3: IAM Reconnaissance Activity

### Finding

After assuming the role, IAM discovery commands were executed.

Observed actions:

- iam:ListUsers
- iam:ListRoles

### Why This Matters

IAM enumeration is commonly used to understand users, roles, permissions, and possible privilege escalation paths.

### Evidence

- evidence/step-17-attacker-list-users.json
- evidence/step-18-attacker-list-roles.json
- evidence/step-23-cloudtrail-list-users-events.json
- evidence/step-24-cloudtrail-list-roles-events.json

### Severity

Medium

---

## Finding 4: S3 Bucket Enumeration

### Finding

The assumed role was used to list S3 buckets.

### Why This Matters

S3 enumeration can help an attacker identify data stores, backups, logs, application files, or sensitive information.

### Evidence

- evidence/step-19-attacker-list-s3-buckets.json
- evidence/step-25-cloudtrail-list-buckets-events.json

### Severity

Medium

---

## Finding 5: CloudTrail Discovery

### Finding

The assumed role was used to describe CloudTrail configuration.

### Why This Matters

Attackers often check logging and monitoring before performing louder actions. CloudTrail discovery may indicate preparation for evasion or further exploitation.

### Evidence

- evidence/step-20-attacker-describe-cloudtrail.json
- evidence/step-26-cloudtrail-describe-trails-events.json

### Severity

Medium

---

## Finding 6: Unused IAM Access Key

### Finding

The IAM user $UnusedUserName has an active access key with no observed usage history.

### Why This Matters

Unused access keys increase risk because they may be forgotten, leaked, or abused later without being noticed.

### Evidence

- evidence/step-11-unused-access-key-created.json
- evidence/step-13-unused-access-key-last-used.json
- evidence/step-14-unused-user-access-keys.json

### Severity

Medium

---

## Overall Assessment

The investigation confirmed both risky cloud configuration and suspicious attacker-style behavior. The most serious issue is the overly permissive IAM role because it enabled broad account visibility and could allow privilege abuse if accessed by an unauthorized principal.

