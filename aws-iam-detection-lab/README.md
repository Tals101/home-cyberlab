# AWS IAM Attack Simulation & Detection Lab

## Project Summary

This project demonstrates a cloud-native detection and alerting pipeline in AWS by simulating real-world IAM attack scenarios and building monitoring to detect them.

The lab integrates CloudTrail, CloudWatch Logs, metric filters, alarms, and SNS to create a full detection workflow from attacker activity to real-time alerting.

## Why This Project Matters

This project goes beyond basic cloud setup by simulating attacker behavior and validating detection capabilities. It demonstrates practical cloud security monitoring, detection engineering, and incident response concepts.

## Skills Demonstrated

- AWS Cloud Security

- Detection Engineering

- IAM Security Monitoring

- CloudWatch and CloudTrail Integration

- Incident Response Workflow

- CLI-based Attack Simulation

## Lab Environment

### Technologies Used

- AWS CloudTrail

- AWS CloudWatch Logs

- AWS CloudWatch Alarms

- AWS SNS

- AWS IAM

- AWS CLI

### Components

- CloudTrail logging across the account

- CloudWatch log ingestion

- Metric filters for detection

- Alarm-based alerting

- SNS email notifications

- IAM user used for attack simulation

## Attack Simulation

The following attacker behaviors were simulated using AWS CLI:

- Enumerating IAM users

- Checking attached policies

- Attempting privilege escalation with AttachUserPolicy

- Attempting persistence with CreateAccessKey

## Detection Engineering

A metric filter was created to detect unauthorized actions.

**Filter Pattern**

{ $.errorCode = "\*AccessDenied\*" }

This captures failed or unauthorized API actions, which are common indicators of attacker activity.

## Alerting

- CloudWatch Alarm triggers when AccessDenied events are greater than or equal to 1

- SNS sends real-time email alerts

- Alerts confirm the detection pipeline is working

## Outcome

Successfully built and validated a cloud detection pipeline:

Attacker Action → CloudTrail Log → CloudWatch Detection → Alarm → SNS Alert

## Project Evidence

Screenshots to add:

- CloudTrail configuration

- Log group activity

- Metric filter setup

- Alarm configuration

- SNS alert email

- CLI attack commands


