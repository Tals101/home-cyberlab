# Stretch Goal - Kibana Falco Alert Dashboard

## Summary
The stretch goal integrated Falco alerts with Fluent Bit, Elasticsearch, and Kibana.

## Pipeline
Falco generated runtime security alerts in JSON format. Fluent Bit collected the Falco container logs from the Kubernetes node and forwarded matching Falco alert records to Elasticsearch. Kibana was then used to build a dashboard from the falco-alerts-* index.

## Confirmed Index
- falco-alerts-2026.07.07

## Confirmed Fields
- rule
- priority
- time
- output_fields.k8s_ns_name
- output_fields.k8s_pod_name
- output_fields.user_name
- output_fields.user_uid
- output_fields.proc_cmdline

## Dashboard Panels Built
- Falco Alerts Over Time
- Falco Alerts by Severity
- Falco Alerts by Namespace
- Falco Alerts by Pod
- Falco Alerts by Rule
- Falco Alerts by User UID

## Security Value
This dashboard gives analysts a central place to review Kubernetes runtime alerts by severity, namespace, pod, user, and rule. This improves triage speed and makes the lab closer to a real security operations workflow.

## Evidence Files
- evidence/stretch-003-falco-json-output-test.txt
- evidence/stretch-004-fluent-bit-startup-logs.txt
- evidence/stretch-007-elasticsearch-falco-index-created.txt
- evidence/stretch-008-elasticsearch-falco-key-fields.json
- evidence/stretch-009-elasticsearch-falco-key-fields-fixed.json
- Screenshots/Screenshot 2026-07-07 164451.png
- Screenshots/Screenshot 2026-07-07 173340.png
