# Correct AWS Account Confirmed

The lab initially detected the wrong AWS account.

Wrong account previously observed:
- [REDACTED-AWS-ACCOUNT]

Correct paid AWS account now observed:
- [REDACTED-AWS-ACCOUNT]

The AWS CLI profile being used for this lab is:

aws-threat-lab

All future AWS commands for this lab should include:

--profile aws-threat-lab

This prevents accidentally running cloud security lab actions against the wrong AWS account.
