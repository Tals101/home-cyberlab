# AI Log Analysis Agent

## Overview

This project is a beginner-friendly AI security agent built in a home cybersecurity lab. It uses a local large language model through Ollama to analyze Linux authentication logs and generate a SOC-style security assessment.

## Project Goal

The goal of this project was to combine cybersecurity automation with local AI inference in a private virtual lab environment. This project demonstrates how an AI agent can assist with log review, suspicious activity identification, and incident-style reporting.

## What the Agent Does

- Reads Linux authentication log data

- Identifies suspicious behavior

- Assigns a severity level

- Suggests an attack hypothesis

- Recommends mitigation steps

## Lab Environment

This project was built in a virtual home lab using:

- Kali Linux

- Ubuntu Server

- Metasploitable2

- VirtualBox

- Python 3

- Ollama

- Llama 3.2 3B

- LangChain

## Project Structure

log-agent/

├── README.md

├── reports/

│ ├── soc_report.txt

│ └── sample_soc_report.txt

├── samples/

│ └── auth_sample.log

├── screenshots/

│ ├── 01-project-structure.png

│ ├── 02-sample-log.png

│ ├── 03-script.png

│ ├── 04-agent-run.png

│ ├── 05-report-output.png

│ └── 06-ollama-working.png

└── scripts/

└── log_agent.py

## How It Works

The Python script reads authentication log data and sends it to a locally hosted language model running through Ollama. The model then returns a SOC-style analysis that includes the likely severity, suspicious activity summary, attack hypothesis, and recommended mitigations.

## Example Use Cases

This project can serve as a starting point for:

- SOC alert triage

- Linux log analysis

- Security automation practice

- AI-assisted incident reporting

- Local/private AI security workflows

## Skills Demonstrated

- Virtual lab setup

- Linux command-line usage

- Python scripting

- Local LLM deployment

- AI-assisted log analysis

- Security reporting

- Basic SOC workflow automation

## Screenshots

### Project Structure

![Project Structure](screenshots/01-project-structure.png)

### Sample Log File

![Sample Log File](screenshots/02-sample-log.png)

### Python Script

![Python Script](screenshots/03-script.png)

### Agent Execution

![Agent Execution](screenshots/04-agent-run.png)

### Report Output

![Report Output](screenshots/05-report-output.png)

### Ollama Working

![Ollama Working](screenshots/06-ollama-working.png)

## Notes

This is a local lab project created for learning and portfolio development. The current version is intentionally simple and focused on building a foundation for more advanced AI-driven security automation projects such as autonomous vulnerability scanning, SIEM integration, and multi-agent red vs blue simulations.
