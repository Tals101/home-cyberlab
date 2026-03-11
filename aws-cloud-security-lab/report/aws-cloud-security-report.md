\# AWS Cloud Security Lab Report



\## Objective



The objective of this lab was to create a secure AWS environment and implement basic cloud security controls including identity management, infrastructure logging, and security configuration review.



---



\## Environment



Platform: Amazon Web Services (AWS)



Services used:



\- AWS IAM

\- AWS CloudTrail

\- AWS S3



---



\## Identity Security



Two IAM users were created to avoid using the root account for daily activities.



Users created:



\- lab-admin

\- security-auditor-lab



The root account was secured with multi-factor authentication (MFA).



---



\## IAM Configuration



\### lab-admin



Administrative account used to configure the AWS environment.



Permissions:



AdministratorAccess



\### security-auditor-lab



Low-privilege auditing account created to demonstrate least privilege access.



Permissions allow read-only visibility into:



\- IAM

\- CloudTrail



---



\## Logging Configuration



CloudTrail was configured as a multi-region trail capturing both read and write management events.



Configuration:



\- Multi-region trail enabled

\- Management events enabled

\- Logs stored in an S3 bucket



CloudTrail records events such as:



\- Console login activity

\- IAM API calls

\- account configuration changes



---



\## Observations



CloudTrail successfully recorded console activity and API calls including IAM user queries and account login events.



Examples of recorded events include:



\- ConsoleLogin

\- ListUsers

\- GetUser



These events confirm that the logging infrastructure is functioning correctly.



---



\## Security Findings



Several areas for improvement were identified during the configuration review.



1\. AdministratorAccess policy grants full permissions.

2\. MFA is not enabled for IAM users.

3\. IAM policies could be further restricted using least privilege.



---



\## Recommendations



\- Enable MFA for all IAM users.

\- Replace broad policies with scoped permissions.

\- Regularly review CloudTrail logs for suspicious activity.

\- Implement additional threat detection tools in the future.

