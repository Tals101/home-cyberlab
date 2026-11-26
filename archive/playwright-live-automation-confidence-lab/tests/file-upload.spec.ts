import { test, expect } from '@playwright/test';
import path from 'path';

test('uploads a file successfully', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/upload');

  const filePath = path.join(__dirname, '../utils/test-upload.txt');

  await page.locator('input[type="file"]').setInputFiles(filePath);
  await page.getByRole('button', { name: /upload/i }).click();

  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
  await expect(page.getByText('test-upload.txt')).toBeVisible();
});