\# AWS Security Remediation Notes



\## Purpose



This document summarizes the primary security improvements identified during the AWS cloud security lab.



---



\## Identified Issues



\### 1. Administrative Access Was Too Broad



The `lab-admin` account used the AWS-managed `AdministratorAccess` policy.



\*\*Concern:\*\*  

This grants full access across the account and exceeds least-privilege requirements for normal day-to-day administration.



\*\*Recommended Remediation:\*\*



\- Replace `AdministratorAccess` with scoped permissions based on actual tasks

\- Separate administrative duties where possible



---



\### 2. MFA Was Not Enabled for IAM Users



MFA was enabled for the root account, but not yet enabled for IAM users.



\*\*Concern:\*\*  

Human users without MFA are more vulnerable to unauthorized access if credentials are exposed.



\*\*Recommended Remediation:\*\*



\- Enable MFA for all human IAM users

\- Prioritize MFA for all accounts with elevated privileges



---



\### 3. Least Privilege Could Be Improved Further



The `security-auditor-lab` account used a custom limited policy, which was a positive step, but additional access reduction is still possible in the environment overall.



\*\*Concern:\*\*  

Overly broad permissions increase the blast radius of compromised credentials.



\*\*Recommended Remediation:\*\*



\- Continue refining IAM policies

\- Grant only the permissions required for each role

\- Periodically review attached policies and user access



---



\### 4. Monitoring Capabilities Can Be Expanded



CloudTrail was enabled and validated successfully, but the environment would benefit from additional security visibility tools in the future.



\*\*Recommended Remediation:\*\*



\- Add threat detection capabilities

\- Add centralized security monitoring

\- Develop a repeatable review process for log activity



---



\## Priority Actions



\### High Priority



\- Enable MFA for all IAM users

\- Reduce administrative permissions



\### Medium Priority



\- Review IAM policies on a regular basis

\- Document intended access for each user



\### Future Enhancements



\- Expand security monitoring

\- Improve alerting and visibility

\- Add additional AWS-native detection services



---



\## Outcome



The lab successfully implemented several important AWS security controls, and the remaining items are clear next-step improvements that would strengthen the account’s overall security posture.

