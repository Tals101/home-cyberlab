# Intermediate Playwright Lab: Real Test Suite

## Project Summary

This lab builds a real end-to-end test suite using Playwright and TypeScript.

The project validates authentication, dashboard behavior, checkout form behavior, mocked API failure handling, visual regression testing, Docker-based test execution, GitHub Actions automation, and accessibility testing.

The goal of this lab was to move beyond basic browser automation and create a structured, maintainable testing project using Page Object Models, reusable folders, fixtures, environment variables, and automated validation workflows.

## Why This Project Matters

Modern software teams rely on automated testing to catch regressions before code reaches production.

This lab demonstrates how an automated test suite can validate critical user workflows, confirm UI behavior, simulate backend failures, detect visual changes, identify accessibility issues, and run consistently in both local and containerized environments.

This project is useful for QA, DevOps, sysadmin, software support, and platform operations roles because it shows how automated testing supports deployment confidence, troubleshooting, release validation, and operational reliability.

## Technologies Used

- Playwright
- TypeScript
- Node.js
- dotenv
- Axe accessibility testing
- Docker
- GitHub Actions
- PowerShell
- SauceDemo test application

## Test Coverage

### Authentication

- Valid login
- Invalid credentials
- Logout

### Dashboard

- Dashboard navigation
- Product lookup / search-style verification
- Product filtering and sorting

### Forms

- Empty form validation
- Successful checkout submission
- Error state for missing required fields

### API Failure Handling

- Mocked backend failure
- UI error message verification

### Visual Testing

- Dashboard visual snapshot validation

### Accessibility Testing

- Login page accessibility scan
- Dashboard page accessibility scan
- Known third-party demo-app accessibility issue documented

## Project Architecture

```text
intermediate-real-test-suite-lab/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── testFixtures.ts
├── reports/
│   └── test-summary.md
├── pages/
│   ├── CheckoutPage.ts
│   ├── DashboardPage.ts
│   └── LoginPage.ts
├── reports/
├── tests/
│   ├── accessibility.spec.ts
│   ├── api.spec.ts
│   ├── auth.spec.ts
│   ├── dashboard.spec.ts
│   ├── forms.spec.ts
│   └── visual.spec.ts
├── tests/visual.spec.ts-snapshots/
│   ├── dashboard-page-chromium-linux.png
│   └── dashboard-page-chromium-win32.png
├── utils/
│   └── testData.ts
├── .dockerignore
├── .env
├── Dockerfile
├── package.json
├── playwright.config.ts
└── README.md
```

## Reusable Architecture

This project uses a reusable test architecture instead of placing all logic directly inside test files.

### Page Object Models

Page-specific actions and locators are stored in:

- pages/LoginPage.ts
- pages/DashboardPage.ts
- pages/CheckoutPage.ts

### Fixtures

Reusable Playwright fixtures are stored in:

- fixtures/testFixtures.ts

The fixture file provides reusable test objects such as:

- loginPage
- dashboardPage
- checkoutPage
- loggedInPage

The loggedInPage fixture handles the repeated login setup so dashboard and form tests do not need to duplicate login steps.

### Utilities

Reusable test data is stored in:

- utils/testData.ts

This includes:

- valid user credentials
- invalid user credentials
- checkout form data
- expected product names
- known accessibility issue IDs

### Reports

Portfolio-ready test evidence is stored in:

- reports/test-summary.md

This report documents:

- final local result
- final Docker result
- test category counts
- architecture evidence
- known accessibility finding
- commands used

## Page Object Models

The project uses Page Object Models to separate page-specific logic from the test files.

Page objects created:

```text
pages/LoginPage.ts
pages/DashboardPage.ts
pages/CheckoutPage.ts
```

This improves:

- readability
- reuse
- maintainability
- scalability

## Environment Variables

Reusable configuration values are stored in `.env`.

Example:

```env
BASE_URL=https://www.saucedemo.com
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce
INVALID_USERNAME=locked_out_user
INVALID_PASSWORD=wrong_password
```

## GitHub Actions

This project includes a GitHub Actions workflow that runs the Playwright test suite automatically on push and pull request events.

Workflow file:

```text
.github/workflows/playwright.yml
```

## Visual Testing

The project includes a visual regression test for the dashboard page.

Visual test file:

```text
tests/visual.spec.ts
```

Snapshot baselines:

```text
tests/visual.spec.ts-snapshots/
├── dashboard-page-chromium-linux.png
└── dashboard-page-chromium-win32.png
```

The Windows baseline supports local Windows execution.

The Linux baseline supports Docker and GitHub Actions execution.

## Docker

The test suite can run inside a Docker container using the official Playwright Docker image.

Docker files:

```text
Dockerfile
.dockerignore
```

Build the image:

```powershell
docker build -t intermediate-playwright-suite .
```

Run the test suite in Docker:

```powershell
docker run --rm -v "${PWD}:/app" intermediate-playwright-suite
```

Validated Docker result:

```text
13 passed
```

## Accessibility Testing

The project uses Axe with Playwright to scan for serious or critical accessibility violations.

Accessibility test file:

```text
tests/accessibility.spec.ts
```

A known SauceDemo issue was documented and excluded from failure logic:

```text
select-name
```

This issue occurs because the product sort dropdown does not have an accessible name.

In a real application, the fix would be to add a visible label, `aria-label`, `aria-labelledby`, or title attribute to the select element.

## Useful Commands

Run all tests:

```powershell
npm test
```

Run Chromium tests only:

```powershell
npm run test:chromium
```

Run accessibility tests:

```powershell
npm run test:accessibility
```

Run visual test:

```powershell
npm run test:visual
```

Update visual snapshots:

```powershell
npm run test:visual:update
```

Open Playwright report:

```powershell
npm run report
```

Run tests in Docker:

```powershell
docker run --rm -v "${PWD}:/app" intermediate-playwright-suite
```

## Final Results

Local execution:

```text
13 passed
```

Docker execution:

```text
13 passed
```

## Skills Demonstrated

- End-to-end browser testing
- Authentication testing
- Dashboard workflow testing
- Form validation testing
- UI state verification
- API failure mocking
- Page Object Model design
- Environment variable configuration
- Test suite organization
- Visual regression testing
- Accessibility scanning
- Dockerized test execution
- GitHub Actions CI workflow setup
- TypeScript test automation
- Playwright project structure