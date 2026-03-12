# AWS Cloud Security Monitoring Lab Notes

## Summary

This lab was built to create a basic AWS cloud security monitoring workflow using native AWS services. The environment was configured to capture account activity, detect selected security events, trigger alerts, and confirm email notification delivery.

## Services Used

- AWS IAM
- AWS CloudTrail
- Amazon CloudWatch Logs
- CloudWatch Metric Filters
- CloudWatch Alarms
- Amazon SNS

## Environment Details

- Root MFA was already enabled before the lab began
- An existing lab admin user was used for setup
- An existing security auditor user and policy were already available
- An existing CloudTrail trail was reused
- CloudWatch Logs integration was added to the trail

## Detection Rules Created

- `NoMFAConsoleLogin`
- `RootLogin`
- `AccessKeyCreated`
- `IAMPolicyChange`

## Alarms Created

- `NoMFAConsoleLogin-Alarm`
- `RootLogin-Alarm`
- `AccessKeyCreated-Alarm`
- `IAMPolicyChange-Alarm`

## SNS Topic

- `security-alerts-lab`

## Validation Performed

A temporary access key was created to generate a `CreateAccessKey` event and test the monitoring pipeline.

The test confirmed that:

- CloudTrail captured the event
- The metric appeared in the `SecurityLab` namespace
- The alarm changed from `Insufficient data` to `In alarm`
- An SNS email notification was received successfully

After validation, the temporary access key was deleted.

## Evidence Collected

- CloudWatch alarms overview screenshot
- Alarm history screenshot
- SNS email alert screenshot
- CloudWatch metric screenshot

## Key Takeaway

This lab showed how AWS native services can be used together to build a simple but effective cloud security monitoring workflow without third-party tools.
