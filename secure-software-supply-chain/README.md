# Secure Software Supply Chain Pipeline

## Project Overview

This project demonstrates a secure software supply chain pipeline using GitHub Actions.

The pipeline builds a containerized Python application and applies multiple security controls before the image is published and signed.

The goal is to show how security checks can be automated directly inside CI/CD so risky code, leaked secrets, vulnerable dependencies, insecure Dockerfiles, and unsafe container images are caught before release.

## What This Pipeline Does

The GitHub Actions workflow performs:

- SAST scanning with Bandit
- Secret scanning with Gitleaks
- Dependency and filesystem scanning with Trivy
- Container image scanning with Trivy
- SBOM generation with Syft
- Container image signing with Cosign
- Automatic build failure on HIGH or CRITICAL findings

## Application

The demo application is a small Flask API with two routes:

- / returns a basic application status message
- /health returns a health check response

The application runs inside a Docker container using Gunicorn.

## Security Findings and Fixes

### SAST Finding

Bandit flagged the Flask development server binding to all interfaces.

Fix:

- Removed the Flask development server from main.py
- Updated the container to run the app through Gunicorn

### Container Misconfiguration Finding

Trivy flagged the Dockerfile because the container was running as root.

Fix:

- Added a non-root user named appuser
- Changed ownership of the application directory
- Added USER appuser to the Dockerfile

## Pipeline Workflow

    Developer pushes code
            |
            v
    GitHub Actions starts
            |
            v
    Checkout repository
            |
            v
    Run SAST scan with Bandit
            |
            v
    Run secret scan with Gitleaks
            |
            v
    Run dependency and filesystem scan with Trivy
            |
            v
    Generate SBOM with Syft
            |
            v
    Build Docker image
            |
            v
    Scan Docker image with Trivy
            |
            v
    Push image to GitHub Container Registry
            |
            v
    Sign image with Cosign
            |
            v
    Pipeline passes only if security gates pass

## Tools Used

| Tool | Purpose |
|---|---|
| GitHub Actions | CI/CD automation |
| Bandit | Python SAST scanning |
| Gitleaks | Secret scanning |
| Trivy | Dependency, filesystem, Dockerfile, and container image scanning |
| Syft | SBOM generation |
| Cosign | Container image signing |
| Docker | Container build and runtime |
| Gunicorn | Production-style Python application server |

## Build and Run Locally

Build the image:

    docker build -t secure-supply-chain-demo:local .

Run the container:

    docker run --rm -p 5000:5000 secure-supply-chain-demo:local

Test the health endpoint:

    Invoke-RestMethod http://localhost:5000/health

Expected output:

    status
    ------
    healthy

## Outcome

The final pipeline passed successfully after security findings were remediated.

This demonstrates a practical secure software supply chain workflow where builds are automatically blocked when high-risk findings are detected.
