# Secure CI/CD Pipeline with Secret Scanning, Dependency Scanning, Image Scanning, and Image Signing

## 1. Project Overview

This project built a secure CI/CD pipeline for a Dockerized Flask web application. The purpose of the project was to show how an application can be protected before it is considered release-ready.

The final pipeline checks the application code, scans for secrets, scans Python dependencies, builds a Docker image, scans the container image, pushes the image to GitHub Container Registry, signs the image with Cosign, verifies the image signature, and uploads security evidence.

This project simulates a real-world DevSecOps workflow where security checks are built directly into the deployment process instead of being performed manually after the fact.

## 2. Project Goal

The goal of this project was to create a secure CI/CD process where a Dockerized web application must pass multiple security gates before it can be treated as a trusted release artifact.

The pipeline was designed to answer the following question:

How can a small web application be protected from common CI/CD security risks before release?

The major security risks addressed in this project were:

- Hardcoded secrets
- Vulnerable dependencies
- Vulnerable container base images
- Unsigned or untrusted container images
- Lack of security evidence after pipeline execution

## 3. Application Summary

The application is a small Flask API with a health check endpoint.

Endpoint:

/health

Expected response:

{
  "service": "secure-cicd-docker-pipeline",
  "status": "ok"
}

The application was containerized using Docker so that it could be built, scanned, and signed as part of the CI/CD workflow.

## 4. Tools Used

The project used the following tools:

- GitHub Actions for CI/CD automation
- Docker for container image builds
- Flask for the sample Python web application
- pytest for basic application testing
- Gitleaks for secret scanning
- pip-audit for Python dependency vulnerability scanning
- Trivy for container image vulnerability scanning
- GitHub Container Registry for image publishing
- Cosign for image signing and verification
- GitHub Actions artifacts for evidence collection

## 5. Final Pipeline Flow

The final pipeline follows this security workflow:

Code pushed
?
Checkout code
?
Run Gitleaks secret scan
?
Install Python dependencies
?
Run pytest tests
?
Run pip-audit dependency scan
?
Build Docker image
?
Run Trivy container image scan
?
Push image to GitHub Container Registry
?
Sign image with Cosign
?
Verify image signature
?
Upload security evidence artifact

This process ensures that the application is not treated as release-ready unless all security checks pass.

## 6. Phase 1: Build the App and Pipeline

In Phase 1, a basic Flask application was created with a /health endpoint. A Dockerfile was added so the application could be built as a container image.

A GitHub Actions workflow was then created to perform the first version of the pipeline.

The first pipeline included:

- Checkout code
- Set up Python
- Install dependencies
- Run pytest
- Build Docker image

The pipeline successfully passed, proving that the application could be tested and built automatically.

Evidence captured:

- Successful local pytest run
- Successful local Docker build
- Successful GitHub Actions pipeline run

## 7. Phase 2: Secret Scanning with Gitleaks

In Phase 2, Gitleaks was added to the pipeline to scan for hardcoded secrets.

A test branch was created and a fake secret was intentionally added. The purpose of this test was to prove that the pipeline would fail if secret-like values were committed.

The test branch failed at the Gitleaks step, confirming that the security gate worked.

After that, the fake secret branch was not merged into main. The clean main branch was updated with the working Gitleaks scan and passed successfully.

Security lesson:

Secrets should never reach Git history because deleting the file later does not fully remove the exposure. A secret committed to a repository may still exist in commit history, logs, forks, branches, or cached copies. If a real secret is committed, it should be considered compromised and rotated immediately.

Evidence captured:

- Failed Gitleaks scan from the test branch
- Passing Gitleaks scan from main

## 8. Phase 3: Dependency Scanning with pip-audit

In Phase 3, pip-audit was added to scan Python dependencies for known vulnerabilities.

The first dependency scan found two vulnerable packages:

- Flask 3.0.3
- pytest 8.2.2

The dependencies were updated to fixed versions:

- Flask 3.1.3
- pytest 9.0.3

After the update, pip-audit returned:

No known vulnerabilities found

This showed that dependency scanning can identify vulnerable packages before they are deployed.

Security lesson:

Application dependencies are part of the software supply chain. Even if the application code is secure, vulnerable libraries can introduce risk. Dependency scanning helps identify these risks early in the pipeline.

Evidence captured:

- Before pip-audit vulnerability output
- After pip-audit clean output
- Passing pip-audit step in GitHub Actions

## 9. Phase 4: Container Image Scanning with Trivy

In Phase 4, Trivy was used to scan the Docker image for HIGH and CRITICAL vulnerabilities.

The first Trivy scan found:

Total: 10 vulnerabilities
HIGH: 8
CRITICAL: 2

The findings came from the Debian-based container image.

The Dockerfile was then changed from:

python:3.12-slim

to:

python:3.12-alpine

After rebuilding the image with Alpine, the Trivy scan showed:

0 vulnerabilities

This demonstrated that base image choice can significantly affect container security.

Security lesson:

Container security is not only about the application code. The base image can contain operating system packages with known vulnerabilities. Choosing a smaller and cleaner base image can reduce the attack surface.

Evidence captured:

- Trivy before scan showing HIGH and CRITICAL findings
- Trivy after scan showing 0 vulnerabilities
- Passing Trivy step in GitHub Actions

## 10. Phase 5: Image Signing with Cosign

In Phase 5, Cosign was added to sign the Docker image after all security checks passed.

The pipeline was updated to:

- Build the image
- Scan the image
- Push the image to GitHub Container Registry
- Sign the image with Cosign
- Verify the image signature

Image signing proves that the image came from a trusted pipeline and was not altered after it was created.

Security lesson:

Unsigned images are harder to trust because there is no strong proof of where they came from or whether they were changed. Signing helps establish trust in the release artifact.

Evidence captured:

- Successful GHCR image push
- Successful Cosign signing step
- Successful Cosign verification step

## 11. Phase 6: Final Security Gate and Evidence Artifact

In Phase 6, the final workflow was updated to upload a security evidence artifact.

The artifact is named:

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

This evidence package provides proof that the pipeline ran and completed the required security checks.

Security lesson:

Security evidence is useful for audits, reviews, troubleshooting, and portfolio documentation. It shows that security checks were actually performed instead of only being described.

## 12. Final Results

The final pipeline successfully performs the following:

- Runs application tests
- Scans for hardcoded secrets
- Scans Python dependencies
- Builds a Docker image
- Scans the Docker image for vulnerabilities
- Pushes the image to GitHub Container Registry
- Signs the image with Cosign
- Verifies the image signature
- Uploads security evidence as an artifact

The project successfully demonstrates a secure CI/CD pipeline with multiple DevSecOps controls.

## 13. Conclusion

This project showed how security can be integrated directly into a CI/CD pipeline. Instead of waiting until after deployment, the pipeline checks for secrets, vulnerable dependencies, vulnerable container images, and unsigned artifacts before the application is considered release-ready.

The final result is a stronger deployment process that improves trust, reduces risk, and creates evidence for security review.
