import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json',
});

test('reuse saved authentication state', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/logged-in-successfully/');

  await expect(page.getByText('Logged In Successfully')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});