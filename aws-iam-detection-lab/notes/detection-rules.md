\# Detection Rules



\## AccessDenied Activity Detection



\*\*Purpose:\*\*  

Detect unauthorized or blocked API actions that may indicate attacker activity, privilege escalation attempts, or restricted persistence attempts.



\*\*Log Source:\*\*  

AWS CloudTrail via CloudWatch Logs



\*\*Metric Filter Pattern:\*\*  

`{ $.errorCode = "\*AccessDenied\*" }`



\*\*Metric Namespace:\*\*  

`Security`



\*\*Metric Name:\*\*  

`AccessDeniedCount`



\*\*Why It Matters:\*\*  

AccessDenied errors can show that an attacker is probing permissions, attempting privilege escalation, or trying actions they are not authorized to perform.



\*\*Lab Validation:\*\*  

This detection was validated by running unauthorized AWS CLI commands with the `lab-user` IAM account, including an attempted policy attachment:

`aws iam attach-user-policy --user-name lab-user --policy-arn arn:aws:iam::aws:policy/AdministratorAccess`



\*\*Expected Result:\*\*  

\- CloudTrail logs the failed API action

\- CloudWatch metric filter matches the event

\- CloudWatch alarm triggers

\- SNS email alert is sent

