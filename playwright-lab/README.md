# Playwright End-to-End Testing Lab

## Project Summary

This project is a hands-on Playwright lab designed to build practical end-to-end testing skills from beginner through intermediate level.

The lab covers browser automation, reliable locators, test organization, authentication handling, API testing, debugging, tracing, screenshots, parallel execution, and cross-browser testing.

Final validation result: 120 passed

---

## Why This Project Matters

Modern software teams need reliable automated testing to catch issues before they reach production.

This project demonstrates how to build a maintainable Playwright test suite that validates:

- User interface workflows

- Browser behavior

- Authentication sessions

- API responses

- Mocked backend failures

- Console errors

- Cross-browser compatibility

- Mobile browser behavior

---

## Skills Demonstrated

- Playwright setup

- TypeScript test writing

- End-to-end browser automation

- Reliable locator usage

- Web-first assertions

- Page Object Model design

- Test isolation

- Helper utilities

- Authentication state reuse

- API request testing

- Network request monitoring

- API mocking

- Backend failure simulation

- Trace Viewer debugging

- Screenshot capture on failure

- Console message inspection

- Cross-browser testing

- Mobile emulation

- Parallel test execution

- GitHub Actions workflow setup

---

## Lab Environment

| Component | Technology |

|---|---|

| Operating System | Windows 11 |

| Test Framework | Playwright |

| Language | TypeScript |

| Runtime | Node.js / npm |

| Browsers | Chromium, Firefox, WebKit, Mobile Chrome |

| Version Control | Git / GitHub |

| CI/CD | GitHub Actions |

---

## Project Structure

playwright-lab/

- .github/workflows/playwright.yml

- pages/TodoPage.ts

- tests/auth-reuse.spec.ts

- tests/auth.spec.ts

- tests/debugging.spec.ts

- tests/example.spec.ts

- tests/locators.spec.ts

- tests/network-api.spec.ts

- tests/todo-page-object.spec.ts

- tests/todo.spec.ts

- utils/todoHelpers.ts

- package.json

- package-lock.json

- playwright.config.ts

- README.md

---

## Phase 0 — Setup and Tooling

The project began with Playwright installation and project setup.

Key activities:

- Initialized a Playwright project

- Installed Playwright browsers

- Reviewed the generated folder structure

- Ran the default sample tests

- Opened the HTML test report

Commands used:

- npm init playwright@latest

- npx playwright test

- npx playwright show-report

---

## Phase 1 — Browser Automation Basics

This phase focused on browser automation using the TodoMVC demo application.

Test coverage included:

- Adding one todo item

- Adding multiple todo items

- Completing a todo item

- Deleting a todo item

- Filtering active and completed todos

Concepts practiced:

- Page navigation

- Typing into fields

- Pressing keyboard keys

- Clicking elements

- Hovering over elements

- Validating visible and hidden elements

---

## Phase 2 — Locators and Reliable Tests

This phase focused on stable locator strategies.

Topics covered:

- Avoiding fragile CSS selectors

- Using placeholder-based locators

- Using role-based locators

- Filtering locators when multiple elements match

- Using text assertions

- Understanding visibility vs. existence

- Replacing fixed waits with web-first assertions

Important lesson:

Instead of using fixed waits like:

await page.waitForTimeout(5000);

The test was improved by using a web-first assertion:

await expect(page.getByText('Flaky wait todo')).toBeVisible();

---

## Phase 3 — Real Test Organization

This phase introduced reusable test structure.

Created folders:

- pages/

- fixtures/

- utils/

Created a Page Object Model:

- pages/TodoPage.ts

The TodoPage class includes reusable methods such as:

- goto()

- addTodo()

- completeTodo()

- deleteTodo()

- expectTodoVisible()

- expectTodoHidden()

A helper utility was also created:

- utils/todoHelpers.ts

This helper generates random todo names to improve test isolation.

---

## Phase 4 — Authentication and Session Handling

This phase introduced login testing and saved authentication state.

Test coverage included:

- Logging into a practice login page

- Verifying successful login

- Saving authentication state to a JSON file

- Reusing saved authentication state in another test

Auth state path:

playwright/.auth/user.json

Example:

test.use({

storageState: 'playwright/.auth/user.json',

});

---

## Phase 5 — Network and API Awareness

This phase focused on API-aware testing.

Test coverage included:

- Logging browser requests

- Logging browser responses

- Validating API response status codes

- Validating API response bodies

- Mocking an API response

- Simulating a backend failure

Example API validation:

const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

expect(response.status()).toBe(200);

const responseBody = await response.json();

expect(responseBody).toHaveProperty('id', 1);

expect(responseBody).toHaveProperty('title');

expect(responseBody).toHaveProperty('body');

---

## Phase 6 — Debugging and Reliability

This phase focused on diagnosing and fixing test failures.

Debugging features used:

- Playwright Trace Viewer

- Screenshots on failure

- Browser console logging

- Severe console error detection

- Timing-safe assertions

Config settings added:

retries: 1

use:

- trace: on-first-retry

- screenshot: only-on-failure

The lab intentionally created failing tests to generate traces and screenshots, then fixed those tests after reviewing the failure evidence.

---

## Phase 7 — Parallelism and Multiple Browsers

This phase focused on scaling the test suite across multiple browser projects.

Configured projects:

- Chromium

- Firefox

- WebKit

- Mobile Chrome

The Mobile Chrome project used Pixel 5 emulation.

Parallel execution was tested with:

npx playwright test --workers=4

Browser-specific test runs were also validated:

- npx playwright test --project=chromium

- npx playwright test --project=firefox

- npx playwright test --project=webkit

- npx playwright test --project="Mobile Chrome"

---

## Final Test Result

The complete test suite was run across all configured projects.

Final result: 120 passed

This confirms that the suite works across desktop and mobile browser configurations.

---

## How to Run the Project

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Run all tests:

npx playwright test

Run tests in UI mode:

npx playwright test --ui

Run a specific test file:

npx playwright test todo.spec.ts

Run a specific browser project:

npx playwright test --project=chromium

Open the HTML report:

npx playwright show-report

---

## Key Lessons Learned

This lab demonstrated that reliable end-to-end tests require more than simply clicking buttons.

Strong test suites should use:

- Stable locators

- Clear assertions

- Reusable page objects

- Isolated test data

- Authentication reuse

- API validation

- Mocking and failure simulation

- Debugging artifacts

- Cross-browser coverage

- CI/CD automation

---

## Status

Complete.

Final validation: 120 passed
