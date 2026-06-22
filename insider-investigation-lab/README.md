# Suspicious Insider Investigation Lab

## Overview

This lab simulates a suspicious insider investigation on an Ubuntu Server system. The scenario involves a user account suspected of accessing and copying sensitive files before leaving the company.

The investigation includes:

- User creation
- Normal login activity
- Failed login activity
- Sudo/admin activity
- Sensitive file access
- Large file copy activity
- USB-style mount activity
- Evidence collection
- Timeline building
- Incident reporting

## Lab Scenario

A user account, jsmith, is suspected of copying sensitive files before leaving the company. The investigation reviews authentication logs and Linux audit logs to determine what happened.

## Deliverables

- Timeline
- Indicators
- Findings
- Recommended actions
- Incident report
- Evidence files

## Project Structure

insider-investigation-lab
  evidence
  notes
  reports
  screenshots

## Key Evidence

- auth.log
- audit.log
- auth-key-events.txt
- sensitive-data-events.txt
- usb-activity-events.txt
- jsmith-audit-events.txt

## Summary Finding

The investigation confirmed that jsmith accessed sensitive files and copied a large sensitive export file along with multiple sensitive documents. USB-style mount activity occurred shortly before the copy activity, supporting a possible insider data exfiltration scenario.

## Skills Demonstrated

- Linux log review
- auth.log investigation
- auditd investigation
- Timeline development
- Insider threat analysis
- Evidence collection
- Incident reporting
- Recommended remediation planning
