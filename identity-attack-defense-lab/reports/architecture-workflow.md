# Identity Security Architecture

## Top-Down Architecture

```mermaid
flowchart TD
    A[User Browser] --> B[Flask Demo Application]
    B --> C[Keycloak Identity Provider]
    C --> D[CyberLab Realm]
    D --> E[Users, Groups, and Roles]
    D --> F[MFA and Brute-Force Protection]
    C --> G[Authentication Events]
    G --> H[keycloak-events.log]
    H --> I[Wazuh Agent]
    I --> J[Wazuh Manager and Indexer]
    J --> K[Custom Detection Rules]
    K --> L[Wazuh Dashboard]
```

## Authentication Workflow

```mermaid
flowchart TD
    A[User Opens Flask Application] --> B[Redirect to Keycloak]
    B --> C[Enter Credentials]
    C --> D{Privileged Account?}
    D -- Yes --> E[Require MFA]
    D -- No --> F[Validate Credentials]
    E --> F
    F --> G{Credentials Valid?}
    G -- Yes --> H[Issue OIDC Tokens]
    H --> I[Return to Flask Application]
    I --> J[Evaluate Assigned Role]
    J --> K{Authorized?}
    K -- Yes --> L[Allow Access]
    K -- No --> M[Return HTTP 403]
    G -- No --> N[Record Failed Login]
    N --> O{Three Failures?}
    O -- No --> P[Allow Another Attempt]
    O -- Yes --> Q[Temporarily Lock Account]
    Q --> R[Generate Wazuh Alerts]
```

## Monitoring Workflow

```mermaid
flowchart TD
    A[Keycloak Container] --> B[Docker Logs]
    B --> C[keycloak-log-stream.service]
    C --> D[keycloak-events.log]
    D --> E[Wazuh Agent]
    E --> F[Wazuh Manager]
    F --> G[Custom Keycloak Rules]
    G --> H[Wazuh Indexer]
    H --> I[Wazuh Dashboard]
    I --> J[Security Investigation]
```

## Detection Rules

- Rule 100100: Failed authentication
- Rule 100101: Successful authentication
- Rule 100102: Brute-force activity
- Rule 100103: Temporary account lockout
