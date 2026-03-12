# AWS Cloud Security Monitoring Lab

A hands-on AWS security lab focused on logging, detection, alerting, and validation using native AWS services.

---

## Overview

This project demonstrates how to build a basic cloud security monitoring pipeline in AWS using:

- AWS Identity and Access Management (IAM)
- AWS CloudTrail
- Amazon CloudWatch Logs
- CloudWatch Metric Filters
- CloudWatch Alarms
- Amazon SNS

The lab was designed to simulate practical cloud security analyst work by capturing account activity, detecting risky events, and sending real-time alerts.

---

## Objectives

- Enable centralized audit logging
- Forward CloudTrail logs to CloudWatch Logs
- Create detections for high-risk IAM activity
- Configure CloudWatch alarms
- Deliver email alerts through SNS
- Validate the monitoring pipeline with a test event

---

## Lab Architecture

```text
IAM Activity
   ↓
CloudTrail
   ↓
CloudWatch Logs
   ↓
Metric Filters
   ↓
CloudWatch Alarms
   ↓
SNS Email Alerts
```

---

## Security Controls Implemented

### Identity Security
- Root account protected with MFA
- Existing administrative lab user used for configuration
- Existing security auditor lab user and policy available
- Least-privilege concepts reviewed and applied

### Logging
- Existing multi-region CloudTrail trail used
- CloudTrail log file validation enabled
- CloudTrail integrated with CloudWatch Logs

### Detection Rules
The following detections were created:

- `NoMFAConsoleLogin`
- `RootLogin`
- `AccessKeyCreated`
- `IAMPolicyChange`

### Alerting
The following alarms were created:

- `NoMFAConsoleLogin-Alarm`
- `RootLogin-Alarm`
- `AccessKeyCreated-Alarm`
- `IAMPolicyChange-Alarm`

SNS email notifications were configured using the `security-alerts-lab` topic.

---

## Validation Performed

To validate the monitoring pipeline, a temporary access key was created for the lab admin user.

This test confirmed that:

- CloudTrail captured the `CreateAccessKey` event
- The event appeared in the `SecurityLab` metric namespace
- The `AccessKeyCreated-Alarm` changed state to **In alarm**
- An SNS email notification was delivered successfully
- The temporary access key was deleted after testing

---

## Key Findings

- Native AWS services can be combined to create a working cloud monitoring pipeline
- CloudTrail and CloudWatch provide effective visibility into IAM activity
- Metric filters allow simple custom detections without additional tooling
- SNS provides fast validation of end-to-end alert delivery

---

## Skills Demonstrated

- AWS IAM administration
- Cloud security monitoring
- Audit logging with CloudTrail
- CloudWatch Logs integration
- Detection engineering with metric filters
- Alerting and notification workflows
- Security event validation

---

## Repository Structure

```text
aws-cloud-security-monitoring-lab/
├── README.md
├── screenshots/
│   ├── alarms-overview.png
│   ├── accesskeycreated-alarm-history.png
│   ├── sns-email-alert.png
│   └── securitylab-metric.png
├── notes/
│   └── lab-notes.md
└── reports/
    └── cloud-security-monitoring-report.md
```

---

## Screenshots

The `screenshots` folder contains evidence for the completed lab, including:

- Alarm overview
- Alarm history
- SNS email alert
- Metric data point

---

## Future Improvements

- Add more CloudTrail detections for IAM and console activity
- Build a CloudWatch dashboard for visibility
- Add AWS Config compliance monitoring
- Add Lambda-based automated remediation
- Integrate GuardDuty in a future version of the lab

---

## Conclusion

This lab demonstrates a complete beginner-friendly AWS cloud security monitoring workflow using native services. It provides practical evidence of logging, detection, alerting, and validation in a real AWS environment.