import { test, expect } from '@playwright/test';

test('handles JavaScript alert', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/js-dialogs');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a Js Alert');
    await dialog.accept();
  });

  await page.locator('#js-alert').click();

  await expect(page.locator('#dialog-response')).toHaveText('OK');
});

test('handles JavaScript confirm accept', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/js-dialogs');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a Js Confirm');
    await dialog.accept();
  });

  await page.locator('#js-confirm').click();

  await expect(page.locator('#dialog-response')).toHaveText('Ok');
});

test('handles JavaScript confirm dismiss', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/js-dialogs');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a Js Confirm');
    await dialog.dismiss();
  });

  await page.locator('#js-confirm').click();

  await expect(page.locator('#dialog-response')).toHaveText('Cancel');
});

test('handles JavaScript prompt input', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/js-dialogs');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a Js prompt');
    await dialog.accept('Naftali');
  });

  await page.locator('#js-prompt').click();

  await expect(page.locator('#dialog-response')).toHaveText('Naftali');
});