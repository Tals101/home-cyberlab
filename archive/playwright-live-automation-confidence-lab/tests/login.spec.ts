import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, invalidUser } from '../utils/testData';

test('valid login shows success message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await loginPage.assertSuccess();
});

test('invalid login shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(invalidUser.username, invalidUser.password);
  await loginPage.assertError(/your password is invalid/i);
});

test('empty username shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('', validUser.password);
  await loginPage.assertError(/your username is invalid/i);
});

test('empty password shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, '');
  await loginPage.assertError(/your password is invalid/i);
});

test('user can log out after valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await loginPage.assertSuccess();
  await loginPage.logout();
  await loginPage.assertLoggedOut();
});

test('user session stays active after page reload', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await loginPage.assertSuccess();

  await page.reload({ waitUntil: 'domcontentloaded' });

  await expect(page).toHaveURL(/secure/);
  await expect(page.getByRole('link', { name: /logout/i })).toBeVisible();
});