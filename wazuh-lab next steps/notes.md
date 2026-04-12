\## 📝 Troubleshooting Notes



\### 1. Wazuh Agent Not Connected

\*\*Issue:\*\*  

The Windows agent was not appearing in the Wazuh dashboard.



\*\*Cause:\*\*  

The agent was installed without specifying the Wazuh manager IP.



\*\*Fix:\*\*  

\- Manually updated `ossec.conf` with the correct server IP  

\- Restarted the Wazuh agent service  

\- Verified connection using `agent\_control -l`  



\---



\### 2. No Failed Login Events in Wazuh

\*\*Issue:\*\*  

Failed login events (Event ID 4625) were visible in Windows Event Viewer but not in Wazuh.



\*\*Cause:\*\*  

Uncertainty around whether Security logs were being collected by the agent.



\*\*Fix:\*\*  

\- Verified `ossec.conf` included:

&#x20; `<location>Security</location>`  

\- Restarted the Wazuh agent  

\- Confirmed ingestion in the Wazuh dashboard  



\---



\### 3. Wazuh Manager Failed to Start

\*\*Issue:\*\*  

Wazuh manager failed to restart after adding a custom rule.



\*\*Cause:\*\*  

Invalid XML syntax in `local\_rules.xml`



\*\*Fix:\*\*  

\- Identified error using:

&#x20; `wazuh-analysisd -t`  

\- Fixed:

&#x20; - Incorrect XML formatting  

&#x20; - Invalid attributes  

&#x20; - Improper group structure  



\---



\### 4. Incorrect Rule Logic

\*\*Issue:\*\*  

Custom rule did not trigger despite multiple failed login attempts.



\*\*Cause:\*\*  

Used `<if\_sid>` instead of `<if\_matched\_sid>` with frequency/timeframe.



\*\*Fix:\*\*  

\- Replaced `<if\_sid>` with `<if\_matched\_sid>`  

\- Retested rule with simulated brute-force activity  



\---



\### 5. Invalid XML Attribute Error

\*\*Issue:\*\*  

Error: `Attribute 'id' has no value`



\*\*Cause:\*\*  

Malformed XML syntax (`id"100002"` instead of `id="100002"`)



\*\*Fix:\*\*  

\- Corrected XML formatting  

\- Revalidated configuration using test command  



\---



\### 6. Broken Example Rule in Config File

\*\*Issue:\*\*  

Wazuh failed due to invalid XML in default/example rule section.



\*\*Cause:\*\*  

Improperly formatted `<group>` tag from example content.



\*\*Fix:\*\*  

\- Removed broken example rule  

\- Replaced file with clean, valid XML rule  



\---



\## 🔍 Key Takeaways



\- Small XML syntax errors can break the entire SIEM  

\- Always validate rules before restarting services  

\- Log ingestion must be verified before building detections  

\- Correlation rules require correct matching logic (`if\_matched\_sid`)  

\- Troubleshooting is a critical part of detection engineering  



\---



\## 🚀 What This Demonstrates



This project required:



\- Debugging agent connectivity issues  

\- Validating log ingestion pipelines  

\- Writing and fixing SIEM detection rules  

\- Interpreting error logs and system feedback  
