# Cloud Security Operator Lab - Cleanup Summary

## Cleanup Completed

The intentionally risky AWS lab resources were removed or remediated.

## Resources Cleaned Up

### Overly Permissive IAM Role

- Role: CloudSecurityOperatorLab-OverPermissiveRole
- Action Taken: AdministratorAccess detached
- Action Taken: Role deleted
- Evidence:
  - evidence/step-29-role-policy-after-remediation.json
  - evidence/step-33-role-delete-confirmation.txt

### Unused Access Key User

- User: CloudSecurityOperatorLab-UnusedKeyUser
- Action Taken: Access key disabled
- Action Taken: Access key deleted
- Action Taken: IAM user deleted
- Evidence:
  - evidence/step-30-unused-access-key-disabled.json
  - evidence/step-31-unused-access-key-deleted.json
  - evidence/step-32-unused-user-delete-confirmation.txt

### CloudTrail Trail

- Trail: cloud-security-operator-trail
- Action Taken: Logging stopped
- Action Taken: Trail deleted
- Evidence:
  - evidence/step-34-cloudtrail-stopped-status.json
  - evidence/step-35-cloudtrail-delete-confirmation.json

### CloudTrail S3 Bucket

- Bucket: cloud-security-operator-lab-513962983534-us-east-1
- Action Taken: Object versions deleted
- Action Taken: Bucket deleted
- Evidence:
  - evidence/step-36-bucket-versions-before-delete.json
  - evidence/step-37-bucket-versions-after-delete.json
  - evidence/step-38-bucket-delete-confirmation.txt

## Remaining Security Note

The temporary CLI user cloud-security-lab-cli still exists and should be deleted from the AWS Console after the lab is fully committed, unless it is needed for another lab.


### Temporary CLI User

- User: cloud-security-lab-cli
- Action Taken: AdministratorAccess removed
- Action Taken: Access key deleted
- Action Taken: IAM user deleted from AWS Console
- Status: Deleted after lab completion

