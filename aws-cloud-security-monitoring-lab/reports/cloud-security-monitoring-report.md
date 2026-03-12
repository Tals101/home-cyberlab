# Cloud Security Monitoring Report

## Executive Summary

This lab project focused on building a practical cloud security monitoring workflow in AWS using native security and monitoring services. The lab environment used CloudTrail for audit logging, CloudWatch Logs for centralized log ingestion, metric filters for event detection, CloudWatch alarms for alerting, and Amazon SNS for email notifications.

The purpose of the exercise was to simulate entry-level cloud security monitoring tasks and validate the full path from security event generation to alert delivery.

---

## Scope

The lab included the following areas:

- IAM security review
- CloudTrail audit logging
- CloudWatch Logs integration
- Detection engineering using metric filters
- Alarm configuration
- SNS email notification setup
- Validation through controlled test activity

---

## Environment Summary

### Identity and Access Management
- Root account MFA was already enabled
- Existing lab admin user was used for setup
- Existing security auditor user and policy were already available

### Logging Configuration
- An existing CloudTrail trail was reused for the lab
- CloudTrail was configured to send logs to the `cloudtrail-security-lab` log group
- CloudTrail log validation was enabled

### Monitoring and Detection
CloudWatch metric filters were created for the following events:

- Console login without MFA
- Root account login
- Access key creation
- IAM policy changes

### Alerting
CloudWatch alarms were configured for each detection rule and connected to the `security-alerts-lab` SNS topic for email notifications.

---

## Detection Rules Implemented

| Detection Name | Purpose |
|---|---|
| `NoMFAConsoleLogin` | Detect console sign-ins where MFA was not used |
| `RootLogin` | Detect root account console logins |
| `AccessKeyCreated` | Detect creation of new IAM access keys |
| `IAMPolicyChange` | Detect selected IAM policy modification activity |

---

## Alarm Configuration

| Alarm Name | Trigger Condition |
|---|---|
| `NoMFAConsoleLogin-Alarm` | Metric value greater than or equal to 1 |
| `RootLogin-Alarm` | Metric value greater than or equal to 1 |
| `AccessKeyCreated-Alarm` | Metric value greater than or equal to 1 |
| `IAMPolicyChange-Alarm` | Metric value greater than or equal to 1 |

All alarms were configured to publish notifications to Amazon SNS.

---

## Validation Activities

To validate the monitoring workflow, a temporary access key was created for the lab admin user. This action generated a `CreateAccessKey` event in CloudTrail and was used as the primary test case.

Validation confirmed the following:

- CloudTrail successfully recorded the event
- The metric appeared in the `SecurityLab` namespace
- The `AccessKeyCreated-Alarm` changed from `Insufficient data` to `In alarm`
- An SNS email notification was received successfully
- The temporary access key was deleted after testing

---

## Findings

The lab demonstrated that AWS native services can be combined to build a functional cloud security monitoring pipeline. Logging, detection, alarm generation, and notification delivery all worked as expected during testing.

Key findings:

- CloudTrail provided reliable visibility into IAM activity
- CloudWatch metric filters successfully detected selected risky actions
- CloudWatch alarms responded correctly to matching events
- SNS email notifications confirmed end-to-end alert delivery

---

## Skills Demonstrated

- AWS IAM administration
- CloudTrail configuration
- CloudWatch Logs integration
- Detection engineering
- Alarm tuning and testing
- Security monitoring workflow validation

---

## Evidence

Supporting screenshots are stored in the `screenshots` folder and include:

- Alarm overview
- Alarm history
- SNS email alert
- Metric activity in CloudWatch

---

## Recommendations

Recommended next steps for expanding this lab:

- Add more CloudTrail-based detections
- Create CloudWatch dashboards for security visibility
- Add AWS Config compliance rules
- Implement automated remediation with AWS Lambda
- Add GuardDuty in a future version of the lab

---

## Conclusion

This lab successfully demonstrated a beginner-friendly AWS cloud security monitoring implementation using native AWS services. The completed project provides practical evidence of cloud logging, detection, alerting, and validation skills in a real AWS environment.
