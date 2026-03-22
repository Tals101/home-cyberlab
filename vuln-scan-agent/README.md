\# AI Vulnerability Scanner Agent



\## Overview

This project is a beginner-friendly AI-assisted vulnerability analysis lab. It uses Nmap service/version scan results from a controlled lab target and a local LLM through Ollama to generate a security-focused assessment.



\## Project Goal

The goal of this project was to combine traditional vulnerability scanning with local AI analysis in a home cybersecurity lab. This project demonstrates how an AI agent can review scan results, identify likely risks, and suggest next investigative steps.



\## What the Agent Does

\- Reads Nmap service/version scan output

\- Summarizes exposed services

\- Identifies likely security risks

\- Highlights ports and services worth further investigation

\- Suggests a possible attacker path

\- Recommends defensive actions



\## Lab Environment

This project was built in a virtual home lab using:

\- Kali Linux

\- Ubuntu Server

\- Metasploitable2

\- VirtualBox

\- Nmap

\- Python 3

\- Ollama

\- Llama 3.2 3B

\- LangChain



\## Project Structure



&#x20;   vuln-scan-agent/

&#x20;   ├── README.md

&#x20;   ├── reports/

&#x20;   ├── samples/

&#x20;   ├── screenshots/

&#x20;   └── scripts/



\## How It Works

The Nmap scan is performed against a lab target system and saved to a text file. A Python script then reads the scan results and sends them to a local Ollama model. The AI agent returns a structured analysis that includes the exposed services, likely security risks, possible attacker paths, and defensive recommendations.



\## Example Use Cases

This project can serve as a starting point for:

\- Vulnerability review

\- Service exposure analysis

\- AI-assisted pentesting support

\- Security reporting

\- Local/private AI security workflows



\## Skills Demonstrated

\- Virtual lab setup

\- Network scanning

\- Nmap usage

\- Python scripting

\- Local LLM deployment

\- AI-assisted security analysis

\- Security reporting

\- Basic pentest workflow support



\## Notes

This is a local lab project created for learning and portfolio development. The current version is intentionally simple and focused on building a foundation for more advanced AI-assisted offensive and defensive security projects.

