# MFA Configuration Notes

## MFA User
alice

## Required Action
Configure OTP

## MFA Type
OTP authenticator application

## Purpose
MFA was enabled to test account takeover resistance.

## Attack Simulation
A password-only login attempt against Alice was blocked because Keycloak required the OTP code.

## Security Lesson
MFA helps reduce the risk of account compromise when a password is exposed.
