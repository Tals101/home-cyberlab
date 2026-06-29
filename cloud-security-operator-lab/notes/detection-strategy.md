# Cloud Security Operator Lab - Detection Strategy

## Investigation Question

How would you detect misuse of an overly permissive IAM role or unused access keys?

## Detection Objective

Detect risky AWS identity behavior involving:

- Role assumption into highly privileged roles
- IAM reconnaissance
- S3 enumeration
- CloudTrail discovery
- Unused or stale access keys
- Attempts to weaken logging or monitoring

## Detection 1: AssumeRole Into a Highly Privileged Role

### Suspicious Behavior

A user or service assumes a role that has AdministratorAccess or broad privileges.

### CloudTrail Event

- Event Source: sts.amazonaws.com
- Event Name: AssumeRole
- Role Name: CloudSecurityOperatorLab-OverPermissiveRole
- Session Name: CloudSecLab-AttackerSimulation

### Evidence

- evidence/step-15-assume-role-sanitized.json
- evidence/step-22-cloudtrail-assume-role-events.json
- evidence/step-27-parsed-cloudtrail-event-summary.csv

### Detection Logic

Alert when:

- eventName equals AssumeRole
- requestParameters.roleArn contains a privileged role
- role session name is unusual
- source IP or user agent is unexpected
- the role has AdministratorAccess attached

## Detection 2: IAM Reconnaissance After Role Assumption

### Suspicious Behavior

A newly assumed role lists IAM users and roles.

### CloudTrail Events

- iam:ListUsers
- iam:ListRoles

### Evidence

- evidence/step-17-attacker-list-users.json
- evidence/step-18-attacker-list-roles.json
- evidence/step-23-cloudtrail-list-users-events.json
- evidence/step-24-cloudtrail-list-roles-events.json

### Detection Logic

Alert when:

- an assumed role performs multiple IAM listing actions
- IAM enumeration happens shortly after AssumeRole
- the session was not expected for administrative work

## Detection 3: S3 Bucket Enumeration

### Suspicious Behavior

A role lists S3 buckets to identify possible data targets.

### CloudTrail Event

- s3:ListBuckets / s3:ListAllMyBuckets

### Evidence

- evidence/step-19-attacker-list-s3-buckets.json
- evidence/step-25-cloudtrail-list-buckets-events.json

### Detection Logic

Alert when:

- an assumed role lists buckets outside normal administrative activity
- IAM enumeration and S3 enumeration happen in the same short time window

## Detection 4: CloudTrail Discovery

### Suspicious Behavior

A role checks whether CloudTrail is enabled.

### CloudTrail Event

- cloudtrail:DescribeTrails

### Evidence

- evidence/step-20-attacker-describe-cloudtrail.json
- evidence/step-26-cloudtrail-describe-trails-events.json

### Detection Logic

Alert when:

- a newly assumed role queries CloudTrail configuration
- CloudTrail discovery occurs after IAM or S3 enumeration

## Detection 5: Unused Access Key Risk

### Suspicious Condition

An IAM access key exists but has no last-used history.

### IAM Evidence

- evidence/step-11-unused-access-key-created.json
- evidence/step-13-unused-access-key-last-used.json
- evidence/step-14-unused-user-access-keys.json

### Detection Logic

Flag access keys when:

- the access key exists
- the key is active
- the key has no last-used timestamp
- the key is older than the organization's allowed threshold

## Detection 6: Logging Tampering

### Suspicious Behavior

An attacker tries to stop or delete CloudTrail logging.

### High-Risk CloudTrail Events

- StopLogging
- DeleteTrail
- UpdateTrail
- PutEventSelectors
- DeleteBucketPolicy
- PutBucketPolicy
- DetachRolePolicy

### Detection Logic

Alert immediately on:

- cloudtrail:StopLogging
- cloudtrail:DeleteTrail
- cloudtrail:UpdateTrail
- S3 policy changes to the CloudTrail log bucket

## Detection Summary

The most useful detection pattern is not a single event. It is a sequence:

1. AssumeRole into a privileged role
2. GetCallerIdentity
3. ListUsers or ListRoles
4. ListBuckets
5. DescribeTrails

This sequence strongly suggests cloud reconnaissance after privileged access.

## Investigator Conclusion

The activity can be detected using CloudTrail event history, IAM configuration review, and correlation between role assumption and follow-on enumeration activity.

