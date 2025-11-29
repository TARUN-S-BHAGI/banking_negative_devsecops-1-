# BANKING DevSecOps Demo (Negative Version)

This repository is an intentionally vulnerable **banking** demo application.

It is designed so that CI pipelines (GitLab or GitHub Actions) run successfully
and generate **negative security reports** as artifacts, without requiring any
manual configuration or CI/CD variables.

## Components

- **backend/**: Node/Express API with intentionally insecure patterns:
  - Hardcoded JWT secret.
  - Simulated SQL injection via string concatenation.
  - Public `/api/health` and `/api/login` endpoints without authentication.
- **frontend/**: Node/Express frontend with:
  - Reflected XSS via an unsanitised `msg` query parameter.
- **docker-compose.yml**:
  - Frontend → http://localhost:10000
  - Backend  → http://localhost:10001

## CI Pipelines

Both **GitLab CI** and **GitHub Actions** are configured:

- Run Node install + simple tests.
- Build Docker images for backend and frontend.
- Run **Snyk** CLI (without token) to detect vulnerable dependencies.
- Run **Trivy** to scan built images for OS/package CVEs.
- Run **OWASP ZAP baseline DAST** against the backend health endpoint.
- Publish artifacts under `reports/` (**negative findings by design**),
  with no expiry (GitLab) or as uploaded artifacts (GitHub).

You do **not** need to configure any CI/CD variables – everything is
self-contained inside this repository.
"# banking_negative_devsecops" 
