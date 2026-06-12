# Secure CI/CD Pipeline with Secret Scanning, Dependency Scanning, Image Scanning, and Image Signing

## Project Overview

This project demonstrates a secure CI/CD pipeline for a Dockerized Flask web application. The goal was to prevent the application from being considered release-ready unless it passed multiple security gates.

The pipeline uses:

- GitHub Actions for automation
- Flask for the sample web application
- Docker for containerization
- Gitleaks for secret scanning
- pip-audit for Python dependency scanning
- Trivy for container image vulnerability scanning
- GitHub Container Registry for image publishing
- Cosign for image signing and verification
- GitHub Actions artifacts for security evidence collection

## Application

The application is a small Flask API with a /health endpoint.

Expected response:

{
  "service": "secure-cicd-docker-pipeline",
  "status": "ok"
}

## Final Pipeline Workflow

Code pushed
?
Checkout code
?
Run Gitleaks secret scan
?
Install Python dependencies
?
Run pytest
?
Run pip-audit dependency scan
?
Build Docker image
?
Run Trivy image scan
?
Push image to GitHub Container Registry
?
Sign image with Cosign
?
Verify image signature
?
Upload security evidence artifact

## Security Gates

### Secret Scanning

Gitleaks was added to detect hardcoded secrets before the code could proceed through the pipeline.

A test branch was created with a fake secret to confirm that the pipeline failed when a secret-like value was detected.

Security lesson:

Secrets should never reach Git history because deleting the file later does not fully remove the exposure. A secret committed to a repository may still exist in commit history, logs, forks, branches, or cached copies. If a real secret is committed, it should be considered compromised and rotated immediately.

### Dependency Scanning

pip-audit was used to scan Python dependencies.

Initial scan findings:

- Flask 3.0.3 had a known vulnerability
- pytest 8.2.2 had a known vulnerability

The dependencies were updated to fixed versions:

- Flask 3.1.3
- pytest 9.0.3

After updating, pip-audit returned:

No known vulnerabilities found

### Container Image Scanning

Trivy was used to scan the Docker image for HIGH and CRITICAL vulnerabilities.

Initial image result:

Total: 10 vulnerabilities
HIGH: 8
CRITICAL: 2

The Dockerfile was updated from a Debian-based image to an Alpine-based image.

After rebuilding with Alpine, Trivy showed:

0 vulnerabilities

This demonstrated how base image selection can significantly affect container risk.

### Image Signing

Cosign was used to sign the Docker image after all security checks passed.

Image signing helps prove that the image came from a trusted pipeline and was not altered after the pipeline created it.

The pipeline also verifies the image signature before treating the artifact as release-ready.

## Evidence Collected

The workflow uploads a security evidence artifact named:

secure-cicd-security-evidence

The artifact includes:

- gitleaks-scan.txt
- pytest-results.txt
- pip-audit-results.txt
- docker-build.txt
- trivy-image-scan.txt
- ghcr-push.txt
- cosign-sign.txt
- cosign-verify.txt

## Final Result

The final secure CI/CD pipeline successfully performs testing, secret scanning, dependency scanning, Docker image building, image vulnerability scanning, image publishing, image signing, signature verification, and evidence collection.

The application should only be considered release-ready after all security gates pass.
