# Playwright Live Automation Confidence Lab

This project is a Day 2 Playwright practice lab focused on building confidence with live browser automation, debugging, selectors, dynamic UI behavior, tables, dialogs, file uploads, iframes, multiple tabs, drag and drop, and network mocking.

The goal of this lab is to simulate real-world automation work that happens during QA, SDET, sysadmin, DevOps, and engineering support tasks.

## Lab Goals

The purpose of this lab is to practice:

- Writing Playwright tests from scratch
- Using stable locators
- Handling dynamic UI behavior
- Avoiding hard waits like waitForTimeout
- Debugging failing tests
- Working with tables
- Handling JavaScript dialogs
- Refactoring repeated test logic into Page Objects
- Using reusable test data
- Uploading files
- Testing iframes
- Handling multiple browser tabs
- Performing drag and drop actions
- Mocking network responses
- Running a reliable test suite

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Chromium

## Project Structure

playwright-live-automation-confidence-lab
- pages
  - LoginPage.ts
- tests
  - dialogs.spec.ts
  - drag-drop.spec.ts
  - dynamic-loading.spec.ts
  - file-upload.spec.ts
  - iframe.spec.ts
  - login.spec.ts
  - network-mocking.spec.ts
  - table.spec.ts
  - tabs.spec.ts
- utils
  - testData.ts
  - test-upload.txt
- playwright.config.ts
- package.json
- README.md

## Test Coverage

This project includes automated tests for the following areas.

### Dynamic Loading

- Opens a dynamic loading page
- Clicks a Start button
- Waits for loaded text using Playwright assertions
- Avoids hard waits such as waitForTimeout
- Uses console logging practice

### Login Flow

- Valid login
- Invalid password
- Empty username
- Empty password
- Logout
- Session persistence after reload

### Tables

- Counts table rows
- Locates a specific row by text
- Verifies email and due amount
- Extracts table emails
- Converts table rows into objects

### JavaScript Dialogs

- Handles JavaScript alert
- Handles confirm accept
- Handles confirm dismiss
- Handles prompt input

### Optional Extra Practice

- File upload
- Multiple tabs / new browser page handling
- Iframe text validation
- Drag and drop interaction
- Network mocking with a fake API response

## Page Object Model

The login tests use a Page Object Model through:

pages/LoginPage.ts

This keeps login-related actions, selectors, and assertions reusable and easier to maintain.

The LoginPage class includes methods for:

- Navigating to the login page
- Logging in
- Verifying successful login
- Verifying login errors
- Logging out
- Verifying logout

## Reusable Test Data

Reusable login credentials are stored in:

utils/testData.ts

This keeps test data separate from test logic and makes the tests easier to update.

## File Upload Test Data

The file upload test uses:

utils/test-upload.txt

This file is uploaded during the file upload automation test.

## Running the Tests

Run the full test suite:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

Run tests in debug mode:

npx playwright test --debug

Open the HTML report:

npx playwright show-report

## Debugging Features

The Playwright config includes debugging support:

trace: 'on-first-retry'
screenshot: 'only-on-failure'

This helps capture evidence when tests fail.

## Stability Settings

The project was configured to reduce flaky behavior while practicing against live pages.

fullyParallel: false
workers: 1

This makes the suite easier to debug and more reliable during practice.

## Skills Practiced

This lab helped practice live automation skills such as:

- Inspecting unfamiliar pages
- Choosing better selectors
- Handling async timing issues
- Debugging failing locators
- Avoiding flaky waits
- Reading table data
- Working with structured UI data
- Handling browser dialogs
- Uploading files
- Interacting with iframes
- Managing multiple browser tabs
- Performing drag and drop
- Mocking network requests
- Refactoring tests into cleaner architecture

## Final Status

The test suite currently includes 20 passing tests.
