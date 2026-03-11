# AWS Cloud Security Lab Report

## Executive Summary

This lab was conducted to build and review a basic AWS environment using core cloud security controls. The project focused on securing privileged access, implementing audit logging, and identifying opportunities to improve the account’s security posture.

The resulting environment included a protected root account, separate IAM users for administration and limited review, and a multi-region CloudTrail trail for visibility into AWS account activity.

---

## Objective

The objective of this lab was to implement foundational AWS security controls and validate that account activity could be logged and reviewed for security purposes.

Specifically, the lab aimed to:

- Reduce reliance on the root account
- Protect privileged access with MFA
- Create role-separated IAM users
- Enable and validate CloudTrail logging
- Identify common IAM-related security weaknesses

---

## Scope

This lab covered the following AWS services and security controls:

- AWS Identity and Access Management (IAM)
- AWS CloudTrail
- Amazon S3
- Multi-factor authentication (MFA)
- Basic security configuration review

---

## Environment Details

### AWS Identities Created

**Root account**
- Used only for initial setup
- MFA enabled

**`lab-admin`**
- Administrative IAM user
- Used for configuring the lab environment

**`security-auditor-lab`**
- Limited IAM user
- Used to demonstrate least-privilege security visibility

### Logging Configuration

CloudTrail was configured with the following settings:

- Multi-region trail
- Management events enabled
- Read events enabled
- Write events enabled
- Log delivery to Amazon S3

---

## Actions Performed

The following actions were completed during the lab:

1. Signed in to the AWS account and secured the root account with MFA
2. Created a dedicated administrative IAM user
3. Created a limited IAM user for security review
4. Created and applied a custom least-privilege policy for the limited user
5. Enabled CloudTrail as a multi-region trail
6. Verified that account activity appeared in CloudTrail Event History
7. Reviewed IAM configuration for security weaknesses

---

## Observations

CloudTrail successfully captured account activity after the trail was configured.

Observed event activity included:

- `ConsoleLogin`
- `ListUsers`
- `GetUser`

This confirmed that logging was active and that management activity could be reviewed through the AWS console.

---

## Findings

### 1. Root Account Protection Was Improved

The root account was initially the most sensitive identity in the environment. Enabling MFA significantly improved protection for that account.

**Impact:** Positive security improvement

---

### 2. Administrative Access Was Broader Than Necessary

The `lab-admin` account used the AWS-managed `AdministratorAccess` policy.

While appropriate for initial lab setup, this level of access is broader than ideal for long-term use.

**Risk:** Excessive permissions increase the impact of credential compromise.

---

### 3. IAM User MFA Was Not Yet Enforced

Although MFA was enabled for the root account, the IAM users did not yet have MFA configured.

**Risk:** Human users without MFA remain more vulnerable to credential theft and unauthorized access.

---

### 4. Least Privilege Was Partially Implemented

The `security-auditor-lab` user demonstrated a more controlled permission model by limiting access to read-only security visibility.

This was a good example of least privilege, though the administrative account remained overly broad.

**Impact:** Partial alignment with best practices

---

## Recommendations

Based on the review, the following actions are recommended:

1. Enable MFA for all human IAM users
2. Replace `AdministratorAccess` with more narrowly scoped permissions
3. Continue using separate accounts for administration and review
4. Periodically review CloudTrail logs for suspicious or unexpected activity
5. Expand the environment with additional monitoring and threat detection services

---

## Conclusion

This lab provided a strong introduction to AWS cloud security fundamentals by combining identity protection, access control, and audit logging within a real AWS environment.

The project demonstrated an understanding of:

- Secure handling of privileged accounts
- IAM user separation
- Least-privilege design principles
- CloudTrail logging and validation
- Basic AWS security posture review

Overall, the environment was successfully configured to provide better security visibility and stronger identity controls than a default AWS account setup.