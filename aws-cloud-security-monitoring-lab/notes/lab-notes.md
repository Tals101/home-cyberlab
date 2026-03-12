\# AWS Cloud Security Monitoring Lab Notes



\## Lab Summary



This lab focused on building a basic AWS security monitoring pipeline using native AWS services. The environment was configured to log security-relevant activity, generate detections, trigger alarms, and deliver email notifications.



\---



\## Services Used



\- AWS IAM

\- AWS CloudTrail

\- Amazon CloudWatch Logs

\- CloudWatch Metric Filters

\- CloudWatch Alarms

\- Amazon SNS



\---



\## Environment Notes



\- Root MFA was already enabled before the lab

\- An admin lab user already existed

\- A security auditor lab user and policy already existed

\- An existing CloudTrail trail was reused

\- CloudWatch Logs integration was added to the trail



\---



\## Detection Rules Created



\- `NoMFAConsoleLogin`

\- `RootLogin`

\- `AccessKeyCreated`

\- `IAMPolicyChange`



\---



\## Alarms Created



\- `NoMFAConsoleLogin-Alarm`

\- `RootLogin-Alarm`

\- `AccessKeyCreated-Alarm`

\- `IAMPolicyChange-Alarm`



\---



\## SNS Topic



\- `security-alerts-lab`



\---



\## Test Activity Performed



A temporary access key was created to generate a `CreateAccessKey` event.



The test confirmed that:



\- The event was logged by CloudTrail

\- The metric appeared in the `SecurityLab` namespace

\- The alarm changed from `Insufficient data` to `In alarm`

\- An SNS email alert was received successfully



The temporary access key was deleted after testing.



\---



\## Evidence Collected



\- Screenshot of all alarms

\- Screenshot of alarm history

\- Screenshot of SNS email alert

\- Screenshot of metric activity



\---



\## Key Takeaway



This lab showed how AWS native services can be used to build a simple but effective cloud security monitoring workflow without relying on third-party tools.

