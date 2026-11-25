import { test, expect } from '@playwright/test';

test('fixed trace viewer todo test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Trace viewer todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  // Intentional failure:
  // The real text is "Trace viewer todo", not "Wrong todo text".
  await expect(page.getByText('Trace viewer todo')).toBeVisible();
});

test('fixed screenshot test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Screenshot failure todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  // Intentional failure so Playwright captures a screenshot.
  await expect(page.getByText('Screenshot failure todo')).toBeVisible();
});

test('log browser console messages', async ({ page }) => {
  page.on('console', message => {
    console.log(`BROWSER CONSOLE [${message.type()}]: ${message.text()}`);
  });

  await page.goto('https://demo.playwright.dev/todomvc');

  await page.evaluate(() => {
    console.log('This is a normal browser console message');
    console.warn('This is a browser warning message');
  });

  await page.getByPlaceholder('What needs to be done?').fill('Console logging todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Console logging todo')).toBeVisible();
});

test('fail test on severe console errors', async ({ page }) => {
  const severeConsoleMessages: string[] = [];

  page.on('console', message => {
    if (message.type() === 'error') {
      severeConsoleMessages.push(message.text());
    }
  });

  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('No console errors todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('No console errors todo')).toBeVisible();

  expect(severeConsoleMessages).toHaveLength(0);
});

test('fix timing issue with web-first assertion', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Timing safe todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  // Good practice:
  // Playwright automatically waits until this text becomes visible.
  await expect(page.getByText('Timing safe todo')).toBeVisible();

  await expect(page.locator('.todo-list li')).toHaveCount(1);
});