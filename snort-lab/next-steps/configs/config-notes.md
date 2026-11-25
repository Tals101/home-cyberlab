# Snort Configuration Notes

## Configuration File

Snort was configured using the main snort.conf file for this lab.

## Key Settings

### HOME_NET

Configured for the lab network:

192.168.56.0/24

### RULE_PATH

Custom rules were loaded from:

$RULE\_PATH/local.rules

### Local Rules

The following include line was used:

include $RULE\_PATH/local.rules

## Purpose

This configuration allows Snort to inspect internal lab traffic and apply custom detection rules.

## Outcome

Snort successfully generated alerts for ICMP traffic based on the custom rule.
