# Snort Detection & Alert Validation

## Objective

Validate that Snort can detect and generate alerts based on custom rules in a controlled lab environment.

## Lab Setup

- Snort installed on Ubuntu Server

- Interface: enp0s3

- Local network: 192.168.56.0/24

## Rule Created

ICMP detection rule:


alert icmp any any -> any any (msg:"ICMP Ping Detected"; sid:1000001; rev:1;)

## Traffic Generation

- Used the ping command to generate ICMP traffic

- Traffic was sent to the Snort machine IP address

## Detection

- Snort was run in console mode

- Alerts triggered immediately when ICMP traffic was received

## Validation

- Confirmed the rule loaded correctly

- Verified alerts matched expected behavior

- Observed real-time detection in terminal output

## Outcome

Successfully validated Snort’s ability to:

- Monitor network traffic

- Apply custom detection rules

- Generate real-time alerts

## Key Takeaways

- Snort rule syntax is important for accurate detection

- Proper snort.conf configuration is required

- Controlled traffic testing confirms IDS functionality
