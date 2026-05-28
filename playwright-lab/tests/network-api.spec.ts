import { test, expect } from '@playwright/test';

test('monitor network requests and responses', async ({ page }) => {
  page.on('request', request => {
    console.log(`REQUEST: ${request.method()} ${request.url()}`);
  });

  page.on('response', response => {
    console.log(`RESPONSE: ${response.status()} ${response.url()}`);
  });

  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Network monitoring todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Network monitoring todo')).toBeVisible();
});

test('validate API response status and body', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('id', 1);
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('body');
});

test('mock an API response', async ({ page }) => {
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 1,
        title: 'Mocked API Title',
        body: 'This response came from Playwright, not the real API.',
        userId: 99,
      }),
    });
  });

  const response = await page.goto('https://jsonplaceholder.typicode.com/posts/1');
  const bodyText = await response?.text();

  expect(bodyText).toContain('Mocked API Title');
  expect(bodyText).toContain('This response came from Playwright');
});

test('simulate API failure response', async ({ page }) => {
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async route => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: 'Simulated backend failure from Playwright',
      }),
    });
  });

  const response = await page.goto('https://jsonplaceholder.typicode.com/posts/1');

  expect(response?.status()).toBe(500);

  const bodyText = await response?.text();

  expect(bodyText).toContain('Internal Server Error');
  expect(bodyText).toContain('Simulated backend failure');
});