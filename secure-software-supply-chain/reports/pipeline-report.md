# Secure Software Supply Chain Pipeline Report

## Project Name

Secure Software Supply Chain Pipeline

## Objective

The objective of this project was to build a GitHub Actions pipeline that automates secure software supply chain controls for a containerized application.

The pipeline was designed to detect issues before release by scanning source code, dependencies, secrets, Dockerfile configuration, and the final container image.

## Pipeline Controls Implemented

The pipeline includes the following security controls:

- SAST scanning with Bandit
- Secret scanning with Gitleaks
- Dependency scanning with Trivy
- Filesystem and Dockerfile misconfiguration scanning with Trivy
- Container image scanning with Trivy
- SBOM generation with Syft
- Container image signing with Cosign
- Automatic failure when HIGH or CRITICAL findings are detected

## Application Summary

The project uses a small Flask application with a health check endpoint.

The application is packaged into a Docker image and served with Gunicorn.

## Local Validation

The Docker image was built locally using:

    docker build -t secure-supply-chain-demo:local .\secure-software-supply-chain

The container was tested locally using:

    docker run --rm -p 5000:5000 secure-supply-chain-demo:local

The health endpoint returned:

    status
    ------
    healthy

## Security Finding 1: SAST Finding

The first GitHub Actions run failed during the Bandit SAST scan.

Bandit flagged the Flask development server because the application was binding to all interfaces using:

    app.run(host="0.0.0.0", port=5000)

## Remediation 1

The Flask development server block was removed from main.py.

The Dockerfile was updated to run the application with Gunicorn instead of the Flask development server.

## Security Finding 2: Dockerfile Misconfiguration

The second GitHub Actions run failed during the Trivy filesystem and misconfiguration scan.

Trivy flagged the Dockerfile because the container was running as the root user.

Finding:

    DS-0002
    Severity: HIGH
    Issue: Specify at least 1 USER command in Dockerfile with non-root user as argument

## Remediation 2

The Dockerfile was updated to create and use a non-root user.

The following controls were added:

    useradd --create-home --shell /bin/bash appuser
    chown -R appuser:appuser /app
    USER appuser

## Final Result

After remediation, the GitHub Actions pipeline completed successfully with a green check.

This confirmed that the pipeline was able to:

- Detect security findings
- Fail the build automatically
- Support remediation
- Pass after security issues were fixed

## Outcome

This project demonstrates a working secure software supply chain process using CI/CD automation.

The final pipeline provides automated security gates before container release and includes SBOM generation and image signing as part of the build process.
