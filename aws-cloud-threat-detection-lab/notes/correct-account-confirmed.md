# Correct AWS Account Confirmed

The lab initially detected the wrong AWS account.

Wrong account previously observed:
- 142787170222

Correct paid AWS account now observed:
- 513962983534

The AWS CLI profile being used for this lab is:

aws-threat-lab

All future AWS commands for this lab should include:

--profile aws-threat-lab

This prevents accidentally running cloud security lab actions against the wrong AWS account.
