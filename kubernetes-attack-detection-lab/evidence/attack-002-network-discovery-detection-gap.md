# Attack 002 - Network Discovery Detection Gap

## Summary
The BusyBox pod was used to perform internal service discovery against nginx and Juice Shop inside the attack-lab namespace.

## Commands Tested
- wget against nginx service
- wget against Juice Shop service
- nc against nginx port 80
- nc against Juice Shop port 3000

## Falco Result
Falco generated an alert for the interactive shell inside the BusyBox container, but no clear default alert was observed for wget or nc-based internal network discovery.

## Detection Gap
Default Falco visibility identified shell activity, but additional custom detection logic is needed for suspicious network discovery tools such as wget, curl, and nc running inside containers.

## Follow-up
Create a custom Falco rule to detect network tools launched inside containers.
