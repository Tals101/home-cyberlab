\# AWS Cloud Security Monitoring Lab Notes



\## Lab Summary

Built a cloud security monitoring pipeline in AWS using CloudTrail, CloudWatch Logs, metric filters, CloudWatch alarms, and SNS email alerts.



\## Components Configured

\- Existing root MFA already enabled

\- Existing lab admin user already available

\- Existing security auditor lab user/policy already available

\- Existing CloudTrail trail used

\- CloudWatch Logs integration added to the trail

\- CloudWatch metric filters created

\- CloudWatch alarms created

\- SNS email notifications configured and confirmed



\## Metric Filters Created

\- NoMFAConsoleLogin

\- RootLogin

\- AccessKeyCreated

\- IAMPolicyChange



\## Alarms Created

\- NoMFAConsoleLogin-Alarm

\- RootLogin-Alarm

\- AccessKeyCreated-Alarm

\- IAMPolicyChange-Alarm



\## Validation Performed

\- Created a temporary access key to trigger CreateAccessKey

\- Confirmed metric appeared in CloudWatch

\- Confirmed alarm changed from Insufficient data to In alarm

\- Confirmed SNS email alert was received

\- Deleted the test access key after validation



\## Evidence Collected

\- Alarm overview screenshot

\- Alarm history screenshot

\- SNS email screenshot

\- Metric graph screenshot

