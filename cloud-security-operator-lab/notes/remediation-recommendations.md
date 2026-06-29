# Cloud Security Operator Lab - Remediation Recommendations

## Remediation Objective

Reduce risk from overly permissive IAM access, unused credentials, and weak cloud monitoring coverage.

---

## Recommendation 1: Replace AdministratorAccess With Least Privilege

### Issue

The role $RoleName has the AWS managed policy AdministratorAccess.

### Recommended Action

Remove AdministratorAccess and replace it with a custom policy that only allows the specific actions required for the role's business function.

### Priority

High

### Example Least-Privilege Approach

Instead of allowing all actions, define access by:

- Required AWS services
- Required actions
- Required resources
- Required conditions
- Expected source principals

---

## Recommendation 2: Tighten the Role Trust Policy

### Issue

The role trust policy allows the current lab CLI principal to assume the role.

### Recommended Action

Restrict role assumption to only approved users, groups, services, or automation workflows.

### Priority

High

### Additional Controls

Use conditions such as:

- MFA required
- Source IP restrictions
- External ID where appropriate
- Specific principal ARNs only

---

## Recommendation 3: Disable or Delete Unused Access Keys

### Issue

The IAM user $UnusedUserName has an active access key with no usage history.

### Recommended Action

Disable unused access keys first, monitor for impact, then delete them if no legitimate use is identified.

### Priority

Medium

### Safer Process

1. Identify unused key
2. Disable key
3. Monitor for application or user impact
4. Delete key after validation

---

## Recommendation 4: Monitor Privileged Role Assumption

### Issue

Assuming an administrator-level role can be normal or suspicious depending on context.

### Recommended Action

Create alerts for privileged role assumption, especially when followed by IAM, S3, or CloudTrail enumeration.

### Priority

High

### Detection Pattern

Alert on this sequence:

1. sts:AssumeRole
2. iam:ListUsers or iam:ListRoles
3. s3:ListBuckets
4. cloudtrail:DescribeTrails

---

## Recommendation 5: Protect CloudTrail Logging

### Issue

Attackers may attempt to identify, stop, modify, or delete CloudTrail logging.

### Recommended Action

Create high-priority alerts for CloudTrail tampering events.

### Priority

High

### Events to Monitor

- StopLogging
- DeleteTrail
- UpdateTrail
- PutEventSelectors
- DeleteBucketPolicy
- PutBucketPolicy

---

## Recommendation 6: Review IAM Access Regularly

### Issue

IAM roles, policies, and access keys can become risky over time.

### Recommended Action

Perform recurring IAM reviews for:

- AdministratorAccess usage
- Unused users
- Unused roles
- Unused access keys
- Overly broad policies
- Stale credentials

### Priority

Medium

---

## Final Remediation Summary

The immediate remediation should focus on removing AdministratorAccess from $RoleName, disabling the unused access key for $UnusedUserName, and creating CloudTrail-based detections for privileged role assumption followed by reconnaissance activity.

