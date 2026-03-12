\# AWS Cloud Security Monitoring Lab



\## Project Overview



This project demonstrates implementation of core cloud security controls in AWS including identity management, audit logging, security monitoring, and detection engineering.



The lab simulates real-world cloud security analyst responsibilities such as detecting risky behavior, reviewing logs, and improving security posture.



\---



\## Objectives



\- Implement least privilege IAM access

\- Enable centralized audit logging using CloudTrail

\- Build detection rules for suspicious account activity

\- Configure automated security alerting

\- Identify and remediate IAM misconfigurations



\---



\## Architecture



\- AWS IAM users and policies

\- CloudTrail multi-region logging

\- CloudTrail to CloudWatch Logs integration

\- CloudWatch metric filters for detections

\- CloudWatch alarms for alerting

\- SNS email notifications



\---



\## Security Controls Implemented



\### Identity Security

\- Root account protected with MFA

\- Administrative IAM user used for lab management

\- Low-privilege security auditor user and policy prepared

\- Least-privilege access concepts applied



\### Logging and Monitoring

\- Multi-region CloudTrail trail enabled

\- CloudTrail logs forwarded to CloudWatch Logs

\- CloudTrail log validation enabled



\### Detection Engineering

Custom detection rules created for:

\- Console login without MFA

\- Root account login

\- Access key creation

\- IAM policy changes



\### Alerting

\- CloudWatch alarms configured

\- SNS email alert notifications configured and validated



\---



\## Key Findings



\- CloudTrail successfully captured IAM-related security events

\- CloudWatch metric filters detected selected high-risk activities

\- CloudWatch alarms transitioned into alarm state when matching events occurred

\- SNS email notifications confirmed end-to-end alert delivery



\---



\## Remediation Actions



\- Enforced MFA usage on the root account

\- Centralized audit logging through CloudTrail and CloudWatch Logs

\- Built custom detections for risky account activity

\- Configured automated alerting for faster security visibility



\---



\## Skills Demonstrated



\- Cloud security fundamentals

\- AWS IAM administration

\- Security logging architecture

\- Detection engineering basics

\- Cloud monitoring and alerting

\- Security operations workflow validation



\---



\## Screenshots



See the `/screenshots` folder for evidence of:

\- Configured CloudWatch alarms

\- Metric activity in the `SecurityLab` namespace

\- Alarm history showing state changes

\- SNS email alert delivery



\## Future Improvements



\- Expand CloudTrail detections to include additional IAM and console activity

\- Add AWS Config rules for compliance monitoring

\- Add automated remediation with AWS Lambda

\- Integrate GuardDuty in a future version of the lab

\- Build dashboards for security event visibility

