# Container Image Security Pipeline

## Project Overview

This project demonstrates a container image security pipeline using Docker, Trivy, and GitHub Actions.

The goal of this lab is to build a container image, scan it for vulnerabilities, and enforce a vulnerability gate that fails the pipeline when HIGH or CRITICAL vulnerabilities are detected.

## Tools Used

- Docker
- Trivy
- GitHub Actions
- PowerShell
- Git and GitHub

## Pipeline Workflow

1. A developer pushes code to GitHub.
2. GitHub Actions starts the container security workflow.
3. Docker builds the container image.
4. Trivy scans the image for vulnerabilities.
5. The workflow applies a HIGH and CRITICAL vulnerability gate.
6. If serious vulnerabilities are found, the pipeline fails.
7. Evidence is saved in the evidence folder.

## Vulnerability Gate

The vulnerability gate uses the following rule:

- HIGH vulnerabilities fail the pipeline.
- CRITICAL vulnerabilities fail the pipeline.
- LOW and MEDIUM vulnerabilities are informational only.

## Local Trivy Gate Command

    trivy image --scanners vuln --severity HIGH,CRITICAL --exit-code 1 container-security-demo:local

## Result

The pipeline successfully demonstrated security enforcement.

Trivy detected HIGH and CRITICAL vulnerabilities in the container image. The vulnerability gate returned exit code 1, which caused both the local scan and the GitHub Actions workflow to fail as expected.

## Evidence

Evidence files are stored in:

    container-image-security-pipeline/evidence

Included evidence:

- trivy-high-critical-gate.txt
- trivy-gate-exit-code.txt
- evidence-summary.txt

## Why This Matters

Container images can include vulnerable operating system packages and application dependencies. A container image security pipeline helps catch these issues before the image is deployed.

This lab shows how security checks can be added directly into CI/CD using automated scanning and vulnerability gates.
