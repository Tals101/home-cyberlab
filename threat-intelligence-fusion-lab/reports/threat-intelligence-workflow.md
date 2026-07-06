# Threat Intelligence Fusion Workflow

## Purpose

This workflow shows the analyst process used during Lab 8.

## Top-Down Workflow

Collect Indicators
        |
        v
Separate IOC Types
        |
        v
+-----------------------------+
| IPs      Domains     Hashes |
+-----------------------------+
        |
        v
Research Reputation Sources
        |
        v
+-----------------------------+
| VirusTotal                  |
| AbuseIPDB                   |
| MITRE ATT&CK                |
+-----------------------------+
        |
        v
Document Reputation Findings
        |
        v
Identify Malware Family or Label
        |
        v
Map to MITRE ATT&CK Techniques
        |
        v
Assign Analyst Verdict
        |
        v
Create IOC Report
        |
        v
Create Executive Summary
        |
        v
Create Technical Findings

## Analyst Workflow Explanation

The investigation started by collecting indicators of compromise and separating them into IP addresses, domains, and file hashes.

Each IOC type was researched using the most relevant reputation sources. IP addresses were checked in VirusTotal and AbuseIPDB. Domains were checked in VirusTotal, and resolved IP reputation was reviewed where applicable. File hashes were checked in VirusTotal.

After reputation review, each IOC was documented with an analyst verdict. Malware family labels were reviewed where available, and findings were mapped to possible MITRE ATT&CK techniques.

The final results were used to create the IOC report, executive summary, and technical findings report.
