# Secure-by-Default Dockerized Web App Lab

## 1. Executive Summary

This lab demonstrates how an intentionally insecure Dockerized Flask web application can be hardened step by step using Docker security best practices.

The project began with a vulnerable baseline container that ran as root, exposed sensitive environment variables, used privileged mode, relied on a large Python base image, and had a writable filesystem.

The lab then applied progressive hardening controls, including removing privileged mode, scanning the image with Trivy, switching to a smaller slim base image, running the application as a non-root user, enabling a read-only root filesystem, dropping Linux capabilities, enforcing no-new-privileges, using tmpfs for temporary writes, and monitoring runtime activity with Docker Events.

The final result is a hardened Dockerized web application that demonstrates practical container isolation, image vulnerability reduction, least privilege, filesystem hardening, and runtime monitoring.

---

## 2. Lab Objective

The goal of this lab was to learn Docker security by building an intentionally insecure web application and then hardening it through four major milestones:

1. Container isolation
2. Image vulnerability scanning
3. Least privilege
4. Runtime monitoring

The lab focused on understanding both the insecure configuration and the validation process used to prove each improvement worked.

---

## 3. Lab Architecture

Initial completed lab architecture:

    Host Machine
        |
        |-- Docker Compose
                |
                |-- Flask API Container
                        |
                        |-- Python Flask Application
                        |-- /whoami endpoint
                        |-- /env endpoint

Planned expanded architecture:

    User / Browser
        |
        v
    Nginx Reverse Proxy
        |
        v
    Flask API Container
        |
        v
    PostgreSQL Database Container

    Runtime Monitoring:
    Docker Events or Falco

The completed version focused on the Flask API container, Docker image hardening, least privilege configuration, filesystem restrictions, and runtime monitoring.

---

## 4. Tools Used

| Tool | Purpose |
|---|---|
| Docker Desktop | Container runtime environment |
| Docker Compose | Build and run the lab container |
| Flask | Simple Python web API |
| PowerShell | Command-line execution on Windows |
| Trivy | Container image vulnerability scanning |
| Docker Inspect | Container configuration inspection |
| Docker Events | Runtime activity monitoring |
| Browser | API endpoint validation |

---

## 5. Phase 1: Insecure Baseline

### Initial Flask Application

    from flask import Flask
    import os
    import subprocess

    app = Flask(__name__)

    @app.route("/")
    def home():
        return {"status": "running"}

    @app.route("/whoami")
    def whoami():
        return {
            "user": subprocess.getoutput("whoami"),
            "uid": os.getuid()
        }

    @app.route("/env")
    def env():
        return dict(os.environ)

### Initial Insecure Dockerfile

    FROM python:3.11

    WORKDIR /app

    COPY app.py .

    RUN pip install flask

    ENV SECRET_KEY=supersecret

    CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]

### Initial Insecure docker-compose.yml

    services:
      api:
        build: ./flask-api
        ports:
          - "5000:5000"
        privileged: true
        environment:
          - FLASK_ENV=development

### Baseline Findings

The application successfully started and was reachable at:

    http://localhost:5000/
    http://localhost:5000/whoami
    http://localhost:5000/env

The /whoami endpoint showed:

    {"uid":0,"user":"root"}

This confirmed that the containerized Flask application was running as root.

The /env endpoint exposed environment variables, including:

    SECRET_KEY=supersecret
    FLASK_ENV=development
    HOME=/root

This demonstrated that sensitive information was visible from inside the container and exposed through the application endpoint.

### Phase 1 Security Issues

| Issue | Why It Matters |
|---|---|
| Container ran as root | If compromised, the attacker has elevated privileges inside the container |
| privileged: true was enabled | Grants excessive access to host-level resources |
| Secret stored in Dockerfile | Secrets can be exposed through image history or container configuration |
| /env exposed environment variables | Sensitive runtime data was visible through the API |
| Full python:3.11 base image used | Larger image means more packages and a larger vulnerability surface |
| Flask development server used | Not appropriate for production deployment |

---

## 6. Phase 2: Container Isolation Testing

Container isolation was tested by entering the running container:

    docker exec -it secure-docker-webapp-lab-api-1 sh

Inside the container, the following commands were run:

    id
    hostname
    ls /
    ls /app
    cat /proc/1/status
    env

### Identity Check

The id command showed:

    uid=0(root) gid=0(root) groups=0(root)

This confirmed that the shell inside the container was running as root.

### Hostname Check

The container hostname was:

    44501008a24b

This matched the container ID, confirming that the shell session was inside the correct running container.

### Filesystem View

The container root filesystem showed:

    app  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

This demonstrated that the container had its own Linux filesystem view, separate from the Windows host filesystem.

The /app folder contained:

    __pycache__  app.py

### Main Process Inspection

The /proc/1/status output showed:

    Name:   flask
    Pid:    1
    Uid:    0       0       0       0
    Gid:    0       0       0       0
    CapEff: 000001ffffffffff
    NoNewPrivs:     0

This confirmed that Flask was the main process, it was PID 1 inside the container, it was running as root, many effective capabilities were available, and no-new-privileges was not enabled.

### Docker Inspect Findings

The host-level docker inspect output confirmed:

    "Privileged": true
    "ReadonlyRootfs": false
    "User": ""
    "SECRET_KEY=supersecret"
    "HostPort": "5000"

These findings confirmed that the baseline configuration was insecure.

---

## 7. Phase 2 Fix: Remove Privileged Mode

The first hardening step was to remove:

    privileged: true

The updated Compose file became:

    services:
      api:
        build: ./flask-api
        ports:
          - "5000:5000"
        environment:
          - FLASK_ENV=development

After rebuilding the container, docker inspect confirmed:

    "Privileged": false

The application still worked after removing privileged mode.

The /whoami endpoint still showed:

    {"uid":0,"user":"root"}

This was expected. Removing privileged mode reduces excessive container privileges, but it does not automatically make the application run as a non-root user.

### Phase 2 Result

| Control | Before | After |
|---|---|---|
| Privileged mode | Enabled | Disabled |
| Application user | root | root |
| Application functionality | Working | Working |
| Security posture | Excessive privilege | Improved |

---

## 8. Phase 3: Image Vulnerability Scanning

Docker Scout required a Docker login, so Trivy was used for image vulnerability scanning.

Trivy was installed with:

    winget install AquaSecurity.Trivy

Trivy version confirmed:

    Version: 0.70.0

The insecure image was scanned with:

    trivy image secure-docker-webapp-lab-api:latest

A shorter high/critical report was created with:

    trivy image --severity HIGH,CRITICAL secure-docker-webapp-lab-api:latest > trivy-high-critical-summary.txt

The scan showed:

    Total: 154 (HIGH: 141, CRITICAL: 13)

This demonstrated that the full python:3.11 image introduced a large number of high and critical findings.

### Phase 3 Finding

| Image | Total HIGH/CRITICAL | HIGH | CRITICAL |
|---|---:|---:|---:|
| python:3.11 based image | 154 | 141 | 13 |

---

## 9. Phase 3 Improvement: Use python:3.11-slim

The Dockerfile was updated from:

    FROM python:3.11

to:

    FROM python:3.11-slim

The updated Dockerfile was:

    FROM python:3.11-slim

    WORKDIR /app

    COPY app.py .

    RUN pip install --no-cache-dir flask

    ENV SECRET_KEY=supersecret

    CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]

After rebuilding, the image size changed from approximately:

    1.62GB

to:

    210MB

The slim image was scanned with:

    trivy image --severity HIGH,CRITICAL secure-docker-webapp-lab-api:latest > trivy-slim-high-critical-summary.txt

The new scan showed:

    Total: 4 (HIGH: 4, CRITICAL: 0)

### Image Scan Comparison

| Image Version | Size | HIGH | CRITICAL | Total HIGH/CRITICAL |
|---|---:|---:|---:|---:|
| Full python:3.11 | 1.62GB | 141 | 13 | 154 |
| python:3.11-slim | 210MB | 4 | 0 | 4 |

Switching to python:3.11-slim significantly reduced both image size and vulnerability count.

The image became approximately 1.41GB smaller, and critical findings dropped from 13 to 0.

---

## 10. Phase 4: Apply Least Privilege

The next hardening step was to stop running the application as root.

The Dockerfile was updated to create a dedicated non-root user:

    FROM python:3.11-slim

    WORKDIR /app

    RUN useradd -r -u 10001 appuser

    COPY app.py .

    RUN pip install --no-cache-dir flask

    USER appuser

    ENV SECRET_KEY=supersecret

    CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]

After rebuilding the container, the /whoami endpoint changed from:

    {"uid":0,"user":"root"}

to:

    {"uid":10001,"user":"appuser"}

### Phase 4 Finding

The containerized Flask application no longer ran as root. It now ran as a dedicated non-root user:

    uid 10001
    user appuser

This reduced the potential impact of application compromise.

---

## 11. Phase 4: Compose Runtime Hardening

The Compose file was then hardened further:

    services:
      api:
        build: ./flask-api
        ports:
          - "5000:5000"
        environment:
          - FLASK_ENV=development
        read_only: true
        cap_drop:
          - ALL
        security_opt:
          - no-new-privileges:true
        tmpfs:
          - /tmp

### Hardening Controls Added

| Setting | Purpose |
|---|---|
| read_only: true | Makes the container root filesystem read-only |
| cap_drop: ALL | Drops Linux capabilities from the container |
| no-new-privileges:true | Prevents privilege escalation |
| tmpfs: /tmp | Allows temporary writes only in /tmp |

### Verification

After rebuilding, the app still worked:

    {"uid":10001,"user":"appuser"}

A shell was opened inside the container:

    docker exec -it secure-docker-webapp-lab-api-1 sh

A write attempt to the root filesystem failed:

    touch /test

Result:

    touch: cannot touch '/test': Read-only file system

A write attempt to /tmp succeeded:

    touch /tmp/test
    ls /tmp

Result:

    test

### Phase 4 Filesystem Finding

The hardened container prevented writes to the root filesystem while still allowing temporary writes to /tmp.

This is a more secure runtime configuration because the application does not need the full container filesystem to be writable.

---

## 12. Phase 5: Runtime Monitoring with Docker Events

Runtime monitoring was tested using:

    docker events

In another PowerShell window, shell access was triggered with:

    docker exec -it secure-docker-webapp-lab-api-1 sh

After exiting the shell, Docker Events showed:

    container exec_create: sh
    container exec_start: sh
    container exec_die

### Phase 5 Finding

Docker Events successfully detected interactive shell activity inside the running container.

This demonstrated that runtime activity can be monitored for suspicious administrative actions, such as shell access into a container.

### Runtime Event Interpretation

| Event | Meaning |
|---|---|
| exec_create | A command execution session was created inside the container |
| exec_start | The command execution session started |
| exec_die | The command execution session ended |

Unexpected shell access into a production container may indicate troubleshooting activity, unauthorized access, or post-exploitation behavior.

---

## 13. Final Hardened docker-compose.yml

    services:
      api:
        build: ./flask-api
        ports:
          - "5000:5000"
        environment:
          - FLASK_ENV=development
        read_only: true
        cap_drop:
          - ALL
        security_opt:
          - no-new-privileges:true
        tmpfs:
          - /tmp

---

## 14. Final Hardened Dockerfile

    FROM python:3.11-slim

    WORKDIR /app

    RUN useradd -r -u 10001 appuser

    COPY app.py .

    RUN pip install --no-cache-dir flask

    USER appuser

    ENV SECRET_KEY=supersecret

    CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]

---

## 15. Before-and-After Security Comparison

| Area | Insecure Baseline | Hardened Version |
|---|---|---|
| Base image | python:3.11 | python:3.11-slim |
| Image size | 1.62GB | 210MB |
| HIGH/CRITICAL findings | 154 | 4 |
| Critical findings | 13 | 0 |
| Runtime user | root | appuser |
| UID | 0 | 10001 |
| Privileged mode | Enabled | Disabled |
| Root filesystem | Writable | Read-only |
| Linux capabilities | Default/excessive | Dropped |
| Privilege escalation control | Not enabled | no-new-privileges:true |
| Temporary write path | General filesystem | /tmp only |
| Runtime monitoring | Not monitored | Docker Events used |

---

## 16. Key Lessons Learned

### Container Isolation

Containers provide isolation through namespaces, including process, network, mount, and filesystem isolation. However, this isolation can be weakened by insecure settings such as privileged mode.

### Image Size Matters

The full python:3.11 image introduced a large vulnerability footprint. Switching to python:3.11-slim significantly reduced the number of high and critical findings.

### Least Privilege Is Essential

Running the application as root was unnecessary. Creating a dedicated non-root user reduced the risk associated with application compromise.

### Read-Only Filesystems Reduce Persistence Risk

A read-only root filesystem makes it harder for an attacker or misbehaving process to modify files inside the container.

### Runtime Monitoring Adds Visibility

Docker Events provided visibility into administrative activity, including interactive shell access through docker exec.

---

## 17. Evidence Collected

| Evidence Item | Description |
|---|---|
| /whoami baseline screenshot | Showed uid 0 and user root |
| /env screenshot | Showed exposed SECRET_KEY=supersecret |
| docker inspect screenshot | Showed Privileged true, ReadonlyRootfs false, and no user |
| Post-fix inspect screenshot | Showed Privileged false |
| Trivy insecure scan screenshot | Showed Total 154 with 141 HIGH and 13 CRITICAL |
| Docker images screenshot | Showed image size reduction to 210MB |
| Trivy slim scan screenshot | Showed Total 4 with 4 HIGH and 0 CRITICAL |
| /whoami hardened screenshot | Showed uid 10001 and user appuser |
| Read-only filesystem screenshot | Showed /test write failure and /tmp/test success |
| Docker Events screenshot | Showed exec_create, exec_start, and exec_die |
| Final Compose screenshot | Showed hardened runtime settings |


---

## 18. Remaining Risks and Future Improvements

| Risk | Explanation |
|---|---|
| Secret still present as environment variable | SECRET_KEY=supersecret is still stored insecurely |
| Flask development server still used | A production WSGI server should be used instead |
| API directly exposed to host | Nginx reverse proxy should be added |
| No database separation yet | PostgreSQL should be added on a backend-only network |
| No Docker secrets yet | Sensitive values should be moved out of environment variables |
| No Falco rules yet | Docker Events provides visibility, but Falco would provide stronger detection logic |


---

## 19. Conclusion

This lab successfully demonstrated a practical Docker security hardening workflow.

The project started with an insecure Flask API container that ran as root, exposed secrets, used privileged mode, relied on a large vulnerable base image, and had a writable filesystem.

Step by step, the container was hardened by removing privileged mode, scanning the image, switching to a slim image, creating a non-root user, enforcing a read-only filesystem, dropping capabilities, enabling no-new-privileges, and monitoring runtime shell access with Docker Events.

The most measurable improvements were:

- Image size reduced from 1.62GB to 210MB.
- HIGH/CRITICAL Trivy findings reduced from 154 to 4.
- Critical findings reduced from 13 to 0.
- Runtime user changed from root to appuser.
- Root filesystem writes were blocked.
- Docker Events detected interactive shell access.

This lab demonstrates the practical value of secure-by-default container configuration and provides a strong foundation for future Docker, Kubernetes, DevSecOps, and cloud security projects.
