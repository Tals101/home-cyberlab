import { test, expect } from '@playwright/test';

test('reads text inside an iframe', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');

  await expect(frame.locator('body')).toContainText('Your content goes here.');
});