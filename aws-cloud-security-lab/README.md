\# AWS Cloud Security Lab



\## Project Overview



This project demonstrates foundational cloud security practices using Amazon Web Services (AWS).  

The goal of the lab was to build a secure AWS environment, implement identity and access management controls, enable infrastructure logging, and review cloud configurations for potential security risks.



The lab focuses on several key cloud security principles:



\- Least privilege access

\- Multi-factor authentication

\- Infrastructure logging

\- Security configuration review



---



\## Technologies Used



\- AWS IAM

\- AWS CloudTrail

\- AWS S3



---



\## Lab Architecture



The AWS environment includes:



\- Root account secured with MFA

\- Administrative IAM user (`lab-admin`)

\- Low-privilege IAM security auditor (`security-auditor-lab`)

\- Multi-region CloudTrail logging enabled

\- CloudTrail logs stored in S3



---



\## Identity and Access Management



Two IAM users were created to demonstrate access control and least privilege design.



\### lab-admin



Administrative user used for configuring the AWS environment.



Permissions:



\- `AdministratorAccess`



\### security-auditor-lab



Low privilege security auditing account.



Permissions allow read-only access to:



\- IAM

\- CloudTrail



This separation prevents the root account from being used for normal activities and follows AWS security best practices.



---



\## Multi-Factor Authentication



Multi-factor authentication (MFA) was enabled for the root account to protect privileged access.



MFA significantly reduces the risk of credential compromise and unauthorized account access.



---



\## CloudTrail Logging



AWS CloudTrail was configured to capture account activity across all AWS regions.



Configuration:



\- Multi-region trail enabled

\- Read and write management events enabled

\- Logs stored in an S3 bucket



CloudTrail records events such as:



\- Console logins

\- IAM policy changes

\- API activity

\- account configuration updates



These logs provide critical audit visibility into AWS environments.



---



\## Event Monitoring



After enabling CloudTrail, several actions were performed in the AWS console to generate activity logs.



Examples of events captured include:



\- `ConsoleLogin`

\- `ListUsers`

\- `GetUser`



These events confirm that CloudTrail successfully records account activity for security auditing and investigation.



---



\## Security Review



The AWS environment was reviewed for potential security weaknesses.



Findings included:



1\. Administrative permissions assigned broadly to the admin account.

2\. MFA not enabled for IAM users.

3\. IAM permissions could be further restricted using least privilege policies.



These findings represent common configuration risks identified during cloud security assessments.



---



\## Skills Demonstrated



\- AWS Identity and Access Management configuration

\- Least privilege access design

\- Multi-factor authentication implementation

\- CloudTrail infrastructure logging

\- Cloud security configuration auditing



---



\## Screenshots



Screenshots demonstrating the lab steps are located in the `screenshots` directory.



Examples include:



\- IAM users configuration

\- MFA enabled for root

\- CloudTrail trail configuration

\- CloudTrail event history



---



\## Future Improvements



\- Enable AWS GuardDuty for threat detection

\- Integrate AWS Security Hub for centralized security findings

\- Implement automated alerting for suspicious activity

\- Implement IAM role-based access instead of long-term users

