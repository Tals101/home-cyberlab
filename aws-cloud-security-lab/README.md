# AWS Cloud Security Lab

## Overview

This lab demonstrates foundational cloud security concepts in Amazon Web Services (AWS) through the implementation of secure identity controls, infrastructure logging, and configuration review. The project was designed to simulate the type of basic security hardening and visibility setup that would be expected in a small AWS environment.

The lab focused on three core areas:

- Identity and access management
- Audit logging and visibility
- Security configuration review

---

## Objectives

The objectives of this lab were to:

- Secure privileged access to the AWS account
- Create separate IAM users for administration and limited security review
- Apply least-privilege principles where appropriate
- Enable CloudTrail logging across AWS regions
- Verify that account activity was being recorded
- Review the environment for common security weaknesses

---

## Technologies Used

- AWS IAM
- AWS CloudTrail
- Amazon S3

---

## Environment Summary

The AWS environment for this lab included:

- Root account protected with multi-factor authentication (MFA)
- One administrative IAM user: `lab-admin`
- One limited IAM user: `security-auditor-lab`
- A multi-region CloudTrail trail
- CloudTrail logs delivered to Amazon S3

---

## IAM Configuration

### `lab-admin`

This account was created for administrative tasks instead of using the root account for daily work.

**Purpose:**

- Perform AWS configuration tasks
- Manage users, policies, and logging setup

**Permissions:**

- `AdministratorAccess`

### `security-auditor-lab`

This account was created to represent a low-privilege security reviewer.

**Purpose:**

- Review IAM configuration
- Review CloudTrail settings and activity
- Demonstrate separation of duties

**Permissions:**

- Read-only visibility into IAM and CloudTrail through a custom policy

This structure reflects a more secure access model than relying on a single highly privileged account for all activity.

---

## Multi-Factor Authentication

MFA was enabled for the AWS root account to strengthen protection of the most privileged identity in the environment.

This is an important security control because it reduces the risk of account compromise due to stolen or reused credentials.

---

## CloudTrail Logging

AWS CloudTrail was configured to capture management activity across all enabled AWS regions.

### CloudTrail Configuration

- Multi-region trail enabled
- Management events enabled
- Read events enabled
- Write events enabled
- Logs stored in Amazon S3

### Why It Matters

CloudTrail provides audit visibility into actions taken in the AWS account, including:

- Console logins
- IAM activity
- API calls
- Configuration changes

This logging is essential for both security monitoring and incident investigation.

---

## Event Validation

After CloudTrail was enabled, account activity was generated through normal console interaction and then reviewed in CloudTrail Event History.

Examples of recorded events included:

- `ConsoleLogin`
- `ListUsers`
- `GetUser`

The presence of these events confirmed that audit logging was functioning correctly.

---

## Security Review and Findings

A basic security review of the lab environment identified several areas for improvement.

### Key Findings

1. **Administrative access was broad**
   - The `lab-admin` account used the `AdministratorAccess` policy, which is useful for setup but broader than necessary for long-term use.

2. **MFA was not enabled for IAM users**
   - While the root account was protected with MFA, the IAM users had not yet been configured with MFA.

3. **Permissions could be reduced further**
   - Additional access scoping would improve adherence to least-privilege principles.

---

## Skills Demonstrated

This project demonstrates experience with:

- AWS identity and access management
- Least-privilege account design
- MFA implementation
- CloudTrail configuration and validation
- Cloud security review
- Basic AWS security hardening

---

## Project Evidence

The `screenshots` folder contains supporting evidence from the lab, including:

- IAM users
- Root MFA configuration
- CloudTrail trail settings
- CloudTrail event history

---

## Future Improvements

Planned future enhancements include:

- Enabling GuardDuty for threat detection
- Adding Security Hub for centralized security visibility
- Replacing broad administrative access with more scoped policies
- Enabling MFA for all human IAM users
- Expanding monitoring and alerting capabilities

---

## Repository Structure

```text
aws-cloud-security-lab/
├── notes/
│   └── remediation-notes.md
├── report/
│   └── aws-cloud-security-report.md
├── screenshots/
│   ├── iam-users.png
│   ├── mfa-enabled.png
│   ├── cloudtrail-trail.png
│   └── cloudtrail-events.png
└── README.md