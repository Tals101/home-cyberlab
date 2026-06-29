# Cloud Security Operator Lab - Telemetry Findings

## Account Investigated

- AWS Account ID: 513962983534
- Region Used for Investigation: us-east-1
- CloudTrail Name: cloud-security-operator-trail

## Telemetry Sources Available

### 1. AWS CloudTrail

CloudTrail is enabled and records AWS API activity. This includes identity activity, role assumption, IAM enumeration, S3 enumeration, and CloudTrail discovery.

Relevant evidence files:

- evidence/step-07-cloudtrail-describe.json
- evidence/step-08-cloudtrail-status.json
- evidence/step-22-cloudtrail-assume-role-events.json
- evidence/step-23-cloudtrail-list-users-events.json
- evidence/step-24-cloudtrail-list-roles-events.json
- evidence/step-25-cloudtrail-list-buckets-events.json
- evidence/step-26-cloudtrail-describe-trails-events.json
- evidence/step-27-parsed-cloudtrail-event-summary.csv

### 2. IAM Role Configuration

The lab identified an overly permissive IAM role:

- Role Name: CloudSecurityOperatorLab-OverPermissiveRole
- Attached Policy: AdministratorAccess
- Risk: This role allows broad control across the AWS account if assumed by an authorized or compromised principal.

Relevant evidence files:

- evidence/step-09-overpermissive-role-details.json
- evidence/step-10-overpermissive-role-attached-policies.json

### 3. IAM Access Key Metadata

The lab identified an IAM user with an access key that exists but has no usage history.

- IAM User: CloudSecurityOperatorLab-UnusedKeyUser
- Risk: Unused access keys increase credential exposure risk because they may be forgotten, leaked, or abused later.

Relevant evidence files:

- evidence/step-11-unused-access-key-created.json
- evidence/step-12-unused-key-user-details.json
- evidence/step-13-unused-access-key-last-used.json
- evidence/step-14-unused-user-access-keys.json

### 4. Attacker-Style Reconnaissance Evidence

The assumed role was used to perform safe read-only reconnaissance.

Observed activity included:

- sts:AssumeRole
- iam:ListUsers
- iam:ListRoles
- s3:ListBuckets
- cloudtrail:DescribeTrails

Relevant evidence files:

- evidence/step-15-assume-role-sanitized.json
- evidence/step-16-attacker-assumed-role-identity.json
- evidence/step-17-attacker-list-users.json
- evidence/step-18-attacker-list-roles.json
- evidence/step-19-attacker-list-s3-buckets.json
- evidence/step-20-attacker-describe-cloudtrail.json

## Initial Telemetry Assessment

CloudTrail provided enough visibility to identify the assumed role session and the reconnaissance actions taken afterward. IAM metadata provided configuration evidence showing the excessive role permissions and the existence of an unused access key.

## Investigator Conclusion

The available telemetry supports a cloud security investigation because it shows both the risky configuration and the activity that could occur if the role were abused.

