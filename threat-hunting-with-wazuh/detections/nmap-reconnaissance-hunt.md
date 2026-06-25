# Detection Logic: Reconnaissance Activity from Kali

## Detection Name

Reconnaissance Activity from Known Attacker Source

## Objective

Identify suspicious activity from the Kali attacker machine against the monitored Linux target.

## Data Source

- Wazuh Linux agent
- SSH authentication logs
- Wazuh security events
- Source IP search in Wazuh dashboard

## Suspicious Indicators

Look for events involving the attacker IP address:

192.168.56.111

Additional indicators:

- Repeated connection attempts
- SSH probing
- Failed authentication attempts
- Service discovery activity
- Events involving the monitored target 192.168.56.118

## Wazuh Hunt Query

Search terms used in Wazuh:

192.168.56.111

Additional useful search terms:

sshd
Failed password
Invalid user
192.168.56.118

## Detection Logic

If security events from the same source IP show repeated contact with the monitored target, especially around SSH or other exposed services, treat the activity as possible reconnaissance or early-stage attack behavior.

## Lab Evidence

Evidence files:

- evidence/nmap-recon-command.txt
- evidence/kali-ip-wazuh-hunt.txt
- evidence/lab-ip-inventory.txt

Screenshots:

- screenshots/kali-ip-wazuh-search.png

## Analyst Conclusion

The Kali attacker IP was visible in Wazuh search results after simulated reconnaissance and authentication probing activity. This confirms that Wazuh can be used to pivot from a suspicious source IP into related security events.
