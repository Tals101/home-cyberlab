# Wrong AWS Account Detected

The AWS CLI profile named main-aws was tested, but it returned the wrong AWS account.

Action taken:
- Stopped the lab before enabling CloudTrail, GuardDuty, or creating AWS resources.
- Marked this profile as incorrect for the lab.
- Next step is to configure a new AWS CLI profile for the correct paid AWS account.

Do not use the current default or main-aws profile for this lab.
