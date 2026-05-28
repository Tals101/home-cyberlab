import { test, expect } from '@playwright/test';

test('add one todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Learn Playwright')).toBeVisible();
});

test('add multiple todo items', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('Write tests');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('Run test suite');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Learn Playwright')).toBeVisible();
  await expect(page.getByText('Write tests')).toBeVisible();
  await expect(page.getByText('Run test suite')).toBeVisible();
});

test('complete a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Finish Playwright lesson');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

  await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
});

test('delete a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Delete this todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Delete this todo')).toBeVisible();

  await page.locator('.todo-list li').hover();
  await page.locator('.destroy').click();

  await expect(page.getByText('Delete this todo')).toBeHidden();
});

test('filter active and completed todos', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Active todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('Completed todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByText('Completed todo').locator('..').getByRole('checkbox').check();

  await page.getByRole('link', { name: 'Active' }).click();

  await expect(page.getByText('Active todo')).toBeVisible();
  await expect(page.getByText('Completed todo')).toBeHidden();

  await page.getByRole('link', { name: 'Completed' }).click();

  await expect(page.getByText('Completed todo')).toBeVisible();
  await expect(page.getByText('Active todo')).toBeHidden();
});