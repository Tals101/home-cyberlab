# AWS Cloud Security Monitoring Lab Notes

> Built a basic AWS security monitoring pipeline using CloudTrail, CloudWatch Logs, metric filters, CloudWatch alarms, and Amazon SNS.

## Quick Facts

| Item | Details |
|---|---|
| CloudTrail Trail | Existing trail reused |
| CloudWatch Log Group | `cloudtrail-security-lab` |
| SNS Topic | `security-alerts-lab` |
| Test Event | Temporary IAM access key creation |
| Validation Result | Alarm triggered and email received |

## Services Used

- AWS IAM
- AWS CloudTrail
- Amazon CloudWatch Logs
- CloudWatch Metric Filters
- CloudWatch Alarms
- Amazon SNS

## Environment Setup

- Root MFA was already enabled
- Existing lab admin user used for setup
- Existing security auditor user and policy already available
- Existing CloudTrail trail reused
- CloudWatch Logs integration added to the trail

## Detection Rules

| Detection | Purpose |
|---|---|
| `NoMFAConsoleLogin` | Detect console logins without MFA |
| `RootLogin` | Detect root account console logins |
| `AccessKeyCreated` | Detect new IAM access key creation |
| `IAMPolicyChange` | Detect selected IAM policy changes |

## Alarms

- `NoMFAConsoleLogin-Alarm`
- `RootLogin-Alarm`
- `AccessKeyCreated-Alarm`
- `IAMPolicyChange-Alarm`

## Validation Steps

1. Created a temporary access key for testing
2. Confirmed the event appeared in CloudTrail / CloudWatch
3. Verified the metric appeared in the `SecurityLab` namespace
4. Confirmed the alarm changed to **In alarm**
5. Confirmed an SNS email alert was received
6. Deleted the temporary access key after testing

## Evidence Collected

- Alarm overview screenshot
- Alarm history screenshot
- SNS email notification screenshot
- Metric activity screenshot

## Takeaway

This lab showed how native AWS services can be combined to build a simple but effective cloud security monitoring workflow with real event detection and alert validation.
