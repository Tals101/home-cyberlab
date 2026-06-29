# Cloud Incident Investigation Report

## Lab Name

Lab 4: Cloud Security Operator Lab

## Account Investigated

- AWS Account ID: 513962983534
- Region: us-east-1
- CloudTrail Trail: cloud-security-operator-trail

## Executive Summary

This investigation reviewed a simulated AWS cloud security incident involving an overly permissive IAM role, an unused access key, and attacker-style reconnaissance activity.

The lab confirmed that CloudTrail telemetry was available and captured key AWS API actions, including role assumption, IAM enumeration, S3 bucket discovery, and CloudTrail discovery. The most serious finding was an IAM role with AdministratorAccess, which created a high-risk path for account-wide reconnaissance and potential privilege abuse.

## Scope

The investigation focused on:

- CloudTrail configuration
- IAM role permissions
- IAM trust policy exposure
- IAM access key usage
- Assumed-role activity
- Attacker-style reconnaissance activity
- Detection and remediation recommendations

## Key Evidence Collected

### CloudTrail Evidence

- evidence/step-07-cloudtrail-describe.json
- evidence/step-08-cloudtrail-status.json
- evidence/step-22-cloudtrail-assume-role-events.json
- evidence/step-23-cloudtrail-list-users-events.json
- evidence/step-24-cloudtrail-list-roles-events.json
- evidence/step-25-cloudtrail-list-buckets-events.json
- evidence/step-26-cloudtrail-describe-trails-events.json
- evidence/step-27-parsed-cloudtrail-event-summary.csv

### IAM Evidence

- evidence/step-09-overpermissive-role-details.json
- evidence/step-10-overpermissive-role-attached-policies.json
- evidence/step-11-unused-access-key-created.json
- evidence/step-12-unused-key-user-details.json
- evidence/step-13-unused-access-key-last-used.json
- evidence/step-14-unused-user-access-keys.json

### Simulated Attacker Activity Evidence

- evidence/step-15-assume-role-sanitized.json
- evidence/step-16-attacker-assumed-role-identity.json
- evidence/step-17-attacker-list-users.json
- evidence/step-18-attacker-list-roles.json
- evidence/step-19-attacker-list-s3-buckets.json
- evidence/step-20-attacker-describe-cloudtrail.json

## Timeline Summary

The simulated activity followed this sequence:

1. CloudTrail was enabled for the account.
2. An overly permissive IAM role was created.
3. AdministratorAccess was attached to the role.
4. An IAM user with an unused access key was created.
5. The overly permissive role was assumed.
6. The assumed role performed safe attacker-style reconnaissance.
7. CloudTrail events were reviewed and parsed.
8. Findings, detection logic, and remediation recommendations were documented.

Detailed timeline:

- notes/investigation-timeline.md

## Findings

### Finding 1: Overly Permissive IAM Role

The IAM role $RoleName had AdministratorAccess attached.

Severity: High

Risk:

A compromised principal that can assume this role could gain broad control across the AWS account.

Evidence:

- evidence/step-09-overpermissive-role-details.json
- evidence/step-10-overpermissive-role-attached-policies.json

### Finding 2: Successful Privileged Role Assumption

The role $RoleName was successfully assumed using the session name CloudSecLab-AttackerSimulation.

Severity: High

Risk:

This confirmed that the role trust relationship allowed another IAM principal to enter the privileged role.

Evidence:

- evidence/step-15-assume-role-sanitized.json
- evidence/step-22-cloudtrail-assume-role-events.json

### Finding 3: IAM Reconnaissance

The assumed role listed IAM users and roles.

Severity: Medium

Risk:

IAM enumeration helps an attacker identify users, roles, permissions, and privilege escalation paths.

Evidence:

- evidence/step-17-attacker-list-users.json
- evidence/step-18-attacker-list-roles.json
- evidence/step-23-cloudtrail-list-users-events.json
- evidence/step-24-cloudtrail-list-roles-events.json

### Finding 4: S3 Enumeration

The assumed role listed S3 buckets.

Severity: Medium

Risk:

S3 bucket enumeration helps an attacker identify data stores, logs, backups, and possible sensitive assets.

Evidence:

- evidence/step-19-attacker-list-s3-buckets.json
- evidence/step-25-cloudtrail-list-buckets-events.json

### Finding 5: CloudTrail Discovery

The assumed role queried CloudTrail configuration.

Severity: Medium

Risk:

CloudTrail discovery may indicate an attacker checking whether activity is being logged before taking additional actions.

Evidence:

- evidence/step-20-attacker-describe-cloudtrail.json
- evidence/step-26-cloudtrail-describe-trails-events.json

### Finding 6: Unused Access Key

The IAM user $UnusedUserName had an active access key with no observed usage history.

Severity: Medium

Risk:

Unused access keys increase credential exposure risk because they can be forgotten, leaked, or abused later.

Evidence:

- evidence/step-11-unused-access-key-created.json
- evidence/step-13-unused-access-key-last-used.json
- evidence/step-14-unused-user-access-keys.json

## Detection Strategy

The strongest detection is a sequence-based pattern:

1. sts:AssumeRole
2. iam:ListUsers
3. iam:ListRoles
4. s3:ListBuckets
5. cloudtrail:DescribeTrails

This pattern suggests privileged access followed by cloud reconnaissance.

Additional detections should monitor:

- Administrator role assumption
- IAM enumeration
- S3 enumeration
- CloudTrail discovery
- CloudTrail tampering
- Active access keys with no last-used history

Detailed detection logic:

- notes/detection-strategy.md

## Remediation Recommendations

### Immediate Actions

1. Remove AdministratorAccess from $RoleName.
2. Replace broad permissions with least-privilege permissions.
3. Restrict the role trust policy.
4. Disable the unused access key for $UnusedUserName.
5. Monitor CloudTrail for privileged role assumption and reconnaissance behavior.

### Long-Term Actions

1. Review IAM roles regularly.
2. Review access keys regularly.
3. Require MFA for privileged access.
4. Alert on CloudTrail tampering events.
5. Alert on IAM privilege escalation indicators.
6. Maintain centralized CloudTrail logging.

Detailed remediation plan:

- notes/remediation-recommendations.md

## Final Assessment

This lab demonstrated how an overly permissive IAM role can create significant cloud risk. The simulated activity showed how an attacker could assume a privileged role, enumerate IAM resources, list S3 buckets, and inspect CloudTrail logging.

CloudTrail provided useful telemetry for investigation, while IAM metadata helped identify risky configurations. The account should prioritize least privilege, access key hygiene, and detection of privileged role assumption followed by reconnaissance.

## Conclusion

The cloud incident investigation confirmed that the account had both risky configuration and observable attacker-style activity. The most important corrective action is to reduce privileged IAM access and create detections for suspicious AWS API activity sequences.

