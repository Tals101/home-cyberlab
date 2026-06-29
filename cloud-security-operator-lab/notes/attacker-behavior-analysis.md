# Cloud Security Operator Lab - Attacker Behavior Analysis

## Investigation Question

What would an attacker do if they gained access to an overly permissive IAM role?

## Lab Context

- AWS Account ID: 513962983534
- Overly Permissive Role: CloudSecurityOperatorLab-OverPermissiveRole
- Simulated Session Name: CloudSecLab-AttackerSimulation

## Likely Attacker Actions

### 1. Validate Access

An attacker would first confirm that the credentials or role session work.

Likely AWS API activity:

- sts:GetCallerIdentity
- sts:AssumeRole

Lab evidence:

- evidence/step-15-assume-role-sanitized.json
- evidence/step-16-attacker-assumed-role-identity.json

### 2. Enumerate IAM

After validating access, an attacker would try to understand users, roles, permissions, and possible privilege escalation paths.

Likely AWS API activity:

- iam:ListUsers
- iam:ListRoles
- iam:ListAttachedRolePolicies
- iam:ListAccessKeys
- iam:GetUser
- iam:GetRole

Lab evidence:

- evidence/step-17-attacker-list-users.json
- evidence/step-18-attacker-list-roles.json
- evidence/step-23-cloudtrail-list-users-events.json
- evidence/step-24-cloudtrail-list-roles-events.json

### 3. Enumerate Storage

An attacker would look for S3 buckets that may contain sensitive data, backups, logs, application files, or credentials.

Likely AWS API activity:

- s3:ListAllMyBuckets
- s3:ListBucket
- s3:GetObject

Lab evidence:

- evidence/step-19-attacker-list-s3-buckets.json
- evidence/step-25-cloudtrail-list-buckets-events.json

### 4. Check Logging and Monitoring

An attacker would try to determine whether CloudTrail is enabled before taking louder actions.

Likely AWS API activity:

- cloudtrail:DescribeTrails
- cloudtrail:GetTrailStatus
- cloudtrail:LookupEvents

Lab evidence:

- evidence/step-20-attacker-describe-cloudtrail.json
- evidence/step-26-cloudtrail-describe-trails-events.json

### 5. Attempt Persistence

If the attacker had AdministratorAccess, they could attempt to create or modify IAM users, access keys, roles, or policies to maintain access.

Possible AWS API activity:

- iam:CreateUser
- iam:CreateAccessKey
- iam:AttachUserPolicy
- iam:CreateRole
- iam:AttachRolePolicy
- iam:UpdateAssumeRolePolicy

This lab did not execute persistence actions as an attacker. The unused access key was created separately as a controlled misconfiguration simulation.

### 6. Attempt Defense Evasion

An attacker with broad permissions may try to weaken visibility.

Possible AWS API activity:

- cloudtrail:StopLogging
- cloudtrail:DeleteTrail
- s3:DeleteBucketPolicy
- s3:PutBucketPolicy
- iam:DetachRolePolicy

This lab did not execute destructive or evasive commands.

## Attacker Path Summary

The simulated attacker path is:

1. Assume overly permissive IAM role
2. Confirm identity
3. Enumerate IAM users and roles
4. Enumerate S3 buckets
5. Check CloudTrail visibility
6. Identify opportunities for persistence or evasion

## Investigator Conclusion

The overly permissive role represents a high-risk condition because a compromised principal could use it to perform account-wide reconnaissance and potentially escalate, persist, access data, or weaken logging.

