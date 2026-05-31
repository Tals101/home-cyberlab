import { test, expect } from '@playwright/test';

test('drags box A onto box B', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/drag-and-drop');

  const boxA = page.locator('#column-a');
  const boxB = page.locator('#column-b');

  await expect(boxA).toContainText('A');
  await expect(boxB).toContainText('B');

  await boxA.dragTo(boxB);

  await expect(boxA).toContainText('B');
  await expect(boxB).toContainText('A');
});