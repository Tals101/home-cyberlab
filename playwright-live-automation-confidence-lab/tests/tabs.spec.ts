import { test, expect } from '@playwright/test';

test('opens a new tab and verifies the new page', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/windows');

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByText('Click Here').click(),
  ]);

  await newPage.waitForLoadState();

  await expect(newPage.getByRole('heading', { name: 'Example of a new window' })).toBeVisible();

  await newPage.close();
});