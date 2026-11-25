#!/usr/bin/env python3
"""
Falco SOAR Auto-Response Script

This script watches Falco JSON alerts and performs a basic Kubernetes response
when high-risk activity is detected.

Actions:
- Identify offending pod and namespace
- Label pod as compromised
- Optionally delete pod
- Log response action locally

Default behavior is safe: label only.
Use --delete to delete the offending pod after labeling.
"""

import argparse
import datetime
import json
import re
import subprocess
import sys
from pathlib import Path


HIGH_RISK_RULE_KEYWORDS = [
    "shadow",
    "sensitive file",
    "privileged",
    "hostpath",
    "network discovery",
    "interactive shell",
]

HIGH_RISK_PRIORITIES = {
    "Warning",
    "Error",
    "Critical",
    "Alert",
    "Emergency",
}


def run_command(command):
    result = subprocess.run(
        command,
        shell=True,
        text=True,
        capture_output=True
    )
    return result.returncode, result.stdout.strip(), result.stderr.strip()


def safe_label_value(value):
    value = value.lower()
    value = re.sub(r"[^a-z0-9.-]", "-", value)
    value = value.strip(".-")
    return value[:63] or "unknown"


def is_high_risk(alert):
    rule = str(alert.get("rule", ""))
    priority = str(alert.get("priority", ""))

    rule_lower = rule.lower()

    if priority in HIGH_RISK_PRIORITIES:
        return True

    for keyword in HIGH_RISK_RULE_KEYWORDS:
        if keyword in rule_lower:
            return True

    output = str(alert.get("output", "")).lower()
    if "/etc/shadow" in output:
        return True

    return False


def extract_pod_details(alert):
    output_fields = alert.get("output_fields", {})

    pod = (
        output_fields.get("k8s.pod.name")
        or output_fields.get("k8s_pod_name")
    )

    namespace = (
        output_fields.get("k8s.ns.name")
        or output_fields.get("k8s_ns_name")
    )

    rule = alert.get("rule", "unknown-rule")
    priority = alert.get("priority", "unknown-priority")
    command = (
        output_fields.get("proc.cmdline")
        or output_fields.get("proc_cmdline")
        or ""
    )

    return pod, namespace, rule, priority, command


def log_action(log_path, message):
    timestamp = datetime.datetime.utcnow().isoformat() + "Z"
    with open(log_path, "a", encoding="utf-8") as log_file:
        log_file.write(f"{timestamp} {message}\n")


def respond_to_alert(alert, log_path, delete_pod=False):
    pod, namespace, rule, priority, command = extract_pod_details(alert)

    if not pod or not namespace:
        log_action(
            log_path,
            f"SKIPPED alert missing pod or namespace rule={rule} priority={priority}"
        )
        return

    reason = safe_label_value(rule)

    label_command = (
        f'kubectl label pod {pod} -n {namespace} '
        f'status=compromised '
        f'falco-rule={reason} '
        f'--overwrite'
    )

    rc, stdout, stderr = run_command(label_command)

    if rc == 0:
        log_action(
            log_path,
            f"LABELED pod={pod} namespace={namespace} rule={rule} priority={priority} command={command}"
        )
    else:
        log_action(
            log_path,
            f"LABEL_FAILED pod={pod} namespace={namespace} rule={rule} error={stderr}"
        )
        return

    if delete_pod:
        delete_command = f"kubectl delete pod {pod} -n {namespace}"
        rc, stdout, stderr = run_command(delete_command)

        if rc == 0:
            log_action(
                log_path,
                f"DELETED pod={pod} namespace={namespace} rule={rule}"
            )
        else:
            log_action(
                log_path,
                f"DELETE_FAILED pod={pod} namespace={namespace} rule={rule} error={stderr}"
            )


def watch_falco(log_path, delete_pod=False, since="30s"):
    command = [
        "kubectl",
        "logs",
        "-n",
        "falco",
        "daemonset/falco",
        "-c",
        "falco",
        "-f",
        "--since=" + since,
    ]

    log_action(log_path, "STARTED Falco SOAR watcher")

    process = subprocess.Popen(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
    )

    for line in process.stdout:
        line = line.strip()

        if not line.startswith("{"):
            continue

        try:
            alert = json.loads(line)
        except json.JSONDecodeError:
            continue

        if not is_high_risk(alert):
            continue

        respond_to_alert(alert, log_path, delete_pod=delete_pod)


def main():
    parser = argparse.ArgumentParser(
        description="Watch Falco alerts and auto-label or delete compromised Kubernetes pods."
    )

    parser.add_argument(
        "--delete",
        action="store_true",
        help="Delete the offending pod after labeling it as compromised."
    )

    parser.add_argument(
        "--log",
        default="evidence/soar-actions.log",
        help="Path to local action log file."
    )

    parser.add_argument(
        "--since",
        default="30s",
        help="How far back to read Falco logs when starting. Example: 15s, 30s, 1m."
    )

    args = parser.parse_args()

    log_path = Path(args.log)
    log_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        watch_falco(log_path, delete_pod=args.delete, since=args.since)
    except KeyboardInterrupt:
        log_action(log_path, "STOPPED Falco SOAR watcher")
        print("Stopped Falco SOAR watcher.")


if __name__ == "__main__":
    main()

