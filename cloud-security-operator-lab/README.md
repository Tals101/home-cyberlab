# Lab 4: Cloud Security Operator Lab

## Overview

This intermediate AWS lab simulated a cloud security investigation involving risky IAM configuration, unused credentials, CloudTrail telemetry, attacker-style reconnaissance, detection strategy, and cleanup.

## Lab Objectives

- Enable CloudTrail for AWS activity logging
- Create an overly permissive IAM role
- Create an IAM user with an unused access key
- Simulate safe attacker-style reconnaissance
- Investigate CloudTrail telemetry
- Build detection logic
- Write a cloud incident investigation report
- Clean up risky lab resources

## Simulated Security Issues

### 1. Overly Permissive IAM Role

An IAM role was created with `AdministratorAccess` to simulate a high-risk cloud misconfiguration.

### 2. Unused Access Key

An IAM user was created with an active access key that had no usage history.

### 3. Privileged Reconnaissance

The overly permissive role was assumed and used to perform safe read-only reconnaissance:

- List IAM users
- List IAM roles
- List S3 buckets
- Describe CloudTrail configuration

## Investigation Questions

### What telemetry exists?

CloudTrail captured AWS API activity, including role assumption, IAM enumeration, S3 enumeration, and CloudTrail discovery.

### What would an attacker do?

An attacker would likely validate access, enumerate IAM, identify storage targets, check logging coverage, and look for persistence or evasion opportunities.

### How would you detect it?

The strongest detection pattern is a sequence:

1. `sts:AssumeRole`
2. `iam:ListUsers`
3. `iam:ListRoles`
4. `s3:ListBuckets`
5. `cloudtrail:DescribeTrails`

## Key Folders

| Folder | Purpose |
|---|---|
| evidence | Raw command output and investigation artifacts |
| notes | Investigation notes, findings, detection strategy, and cleanup summary |
| policies | IAM and S3 policy documents used during the lab |
| reports | Final cloud incident investigation report |
| screenshots | Screenshots for portfolio documentation |
| scripts | Optional scripts for future automation |

## Final Deliverable

The final investigation report is located here:

`reports/cloud-incident-investigation-report.md`

## Cleanup Status

The intentionally risky lab resources were cleaned up:

- `AdministratorAccess` was detached from the lab role
- The lab role was deleted
- The unused access key was disabled and deleted
- The unused-key IAM user was deleted
- The CloudTrail trail was stopped and deleted
- The CloudTrail S3 bucket was emptied and deleted
- The temporary CLI user `cloud-security-lab-cli` was deleted

## Security Note

The temporary CLI user `cloud-security-lab-cli` was created to run the lab and was deleted after cleanup was completed.
