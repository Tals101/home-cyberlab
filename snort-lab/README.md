# Snort Lab | Installation, Setup and First Custom Rule

## Project Summary
This project documents my Snort lab setup and initial configuration in a home cybersecurity lab environment. The purpose of this lab was to install Snort from source, validate the installation, configure the required directories and files, and prepare the system for network traffic inspection and alert generation.

## Why This Project Matters
This lab demonstrates hands-on experience with a widely used network intrusion detection system (IDS). It shows the ability to work through installation, dependency management, configuration, and validation steps in a Linux environment while building practical blue-team defensive skills.

## Skills Demonstrated
- IDS installation and configuration
- Linux command-line administration
- Dependency installation and package management
- Source compilation and software installation
- Filesystem and directory preparation
- Network security monitoring
- Troubleshooting and validation
- Defensive security lab building

## Lab Environment

### Technologies Used
- Snort
- Ubuntu Server
- Linux command line
- GitHub
- PowerShell

### Lab Components
- **Snort Server:** Ubuntu-based system used to install and run Snort
- **Configuration Files:** Snort-related configuration and supporting files
- **Rules and Logging Structure:** Directory structure prepared for future detection and alert testing

## Objectives
- Install Snort in a lab environment
- Configure the required dependencies
- Build and install Snort from source
- Verify the installation completed successfully
- Prepare the lab for future traffic analysis and rule-based detection

## Work Completed
During this lab, I completed the following tasks:

1. Prepared the Ubuntu environment for Snort installation
2. Installed required dependencies
3. Built and installed supporting components
4. Downloaded and compiled Snort from source
5. Completed the Snort installation process
6. Verified that installation output appeared normal
7. Confirmed Snort was accessible after installation
8. Prepared the environment for future configuration, rules, and testing

## Project Structure
```text
snort-lab/
├── README.md
├── configs/
├── rules/
├── screenshots/
└── notes/
```

## Repository Contents
- **configs/** - Snort configuration files and supporting configuration notes
- **rules/** - Custom or test detection rules
- **screenshots/** - Setup, installation, and testing screenshots
- **notes/** - Installation notes, observations, and troubleshooting details

## Outcome
This lab established a working Snort foundation inside the cyber lab and prepared the system for future rule creation, alert validation, and packet inspection exercises. It also strengthened practical experience with Linux administration, IDS deployment, and step-by-step troubleshooting in a controlled environment.

## First Custom Rule (Follow-Up)

In the [follow-up phase](next-steps/), one custom rule was written and validated: an ICMP rule (`sid:1000001`) added to `local.rules`. Pinging the sensor produced a matching `ICMP Ping Detected` alert in console mode. A second rule for HTTP traffic is in [`next-steps/rules/snort-rules.txt`](next-steps/rules/snort-rules.txt) but has no recorded alert.

The custom rule in `local.rules`:

![Custom ICMP rule](next-steps/screenshots/Screenshot%202026-04-15%20111244.png)

Snort console output, ending with the custom rule's alert:

![ICMP Ping Detected alert](next-steps/screenshots/Screenshot%202026-04-15%20111918.png)

Rule counts after the Snort 3 build in the first phase:

![Snort 3 rule counts](screenshots/Screenshot%202026-03-08%20150050.png)

## Next Steps

- Record an alert for the HTTP rule and add rules for other traffic
- Generate attack traffic from Kali and compare Snort alerts with the expected detections
