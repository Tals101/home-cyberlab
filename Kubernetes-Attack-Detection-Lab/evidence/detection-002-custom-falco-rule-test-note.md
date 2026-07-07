# Detection 002 - Custom Falco Rule Testing

## Summary
Three custom Falco rules were created and tested for the Kubernetes Attack Detection and Response Lab.

## Custom Rules Created
1. K8s Attack Lab Interactive Shell
2. K8s Attack Lab Shadow File Read
3. K8s Attack Lab Network Discovery Tool

## Test Activity
The hardened BusyBox pod was used to generate suspicious behavior:
- Shell execution
- Attempted /etc/shadow read
- wget request to internal nginx service

## Expected Detection Results
- Interactive shell activity should generate a NOTICE alert
- /etc/shadow access attempt should generate a WARNING alert
- wget/curl/nc-style discovery should generate a WARNING alert

## Security Value
These rules improve runtime visibility beyond default Falco behavior and help detect container execution, credential access attempts, and network discovery activity.
