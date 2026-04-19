# Incident Report: Unauthorized IAM Activity Detection

## Summary

An unauthorized IAM action was detected involving a low-privileged user attempting to escalate permissions within the AWS environment.

## Timeline

- User configured AWS CLI using compromised credentials

- Attacker enumerated IAM users and permissions

- Attacker attempted to attach AdministratorAccess policy

- Action failed with AccessDenied

- Detection triggered via CloudWatch metric filter

- Alert generated via CloudWatch alarm

- Notification received via SNS email

## Detection Method

Detection was implemented using a CloudWatch Logs metric filter:

{ $.errorCode = "\*AccessDenied\*" }

This filter captures failed or unauthorized API calls.

## Impact

No successful privilege escalation occurred. The activity indicates attempted unauthorized access and privilege escalation.

## Response

- Activity was monitored and validated

- Detection pipeline confirmed functional

- No remediation required (lab environment)

## Lessons Learned

- AccessDenied events are strong indicators of suspicious behavior

- CloudTrail + CloudWatch can provide effective detection without additional tools

- Alerting via SNS enables real-time awareness

