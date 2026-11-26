import { test, expect } from '@playwright/test';

test('practice login page structure', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});

test('save authentication state', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Logged In Successfully')).toBeVisible();

  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});