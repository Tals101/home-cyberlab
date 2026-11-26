import { test, expect } from '@playwright/test';

test('dynamic loading shows finished message', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-loading/2');

  page.on('console', msg => {
    console.log(msg.text());
  });

  await page.getByRole('button', { name: 'Start' }).click();

  await expect(page.getByText(/hello world/i)).toBeVisible({ timeout: 10000 });
});