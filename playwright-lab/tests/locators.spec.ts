import { test, expect } from '@playwright/test';

test('use reliable locators to add a todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Reliable locator todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Reliable locator todo')).toBeVisible();
});

test('fixed selector example', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Fixed selector todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Fixed selector todo')).toBeVisible();
});

test('use role locators only where possible', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Role locator todo');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  await expect(page.getByRole('listitem').filter({ hasText: 'Role locator todo' })).toBeVisible();
});

test('practice text assertions', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('First text assertion');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('Second text assertion');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.locator('.todo-list')).toContainText('First text assertion');
  await expect(page.locator('.todo-list')).toContainText('Second text assertion');

  await expect(page.locator('.todo-list li')).toHaveText([
    'First text assertion',
    'Second text assertion',
  ]);
});

test('practice visibility and count assertions', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Visible todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Visible todo')).toBeVisible();

  await expect(page.locator('.todo-list li')).toHaveCount(1);

  await page.locator('.todo-list li').hover();
  await page.locator('.destroy').click();

  await expect(page.getByText('Visible todo')).toBeHidden();

  await expect(page.locator('.todo-list li')).toHaveCount(0);
});

test('fixed wait using web-first assertion', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Flaky wait todo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Flaky wait todo')).toBeVisible();
});