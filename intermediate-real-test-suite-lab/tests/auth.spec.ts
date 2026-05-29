import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Authentication Tests', () => {
  test('valid user can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.expectLoginPageVisible();

    await loginPage.login(
      process.env.VALID_USERNAME!,
      process.env.VALID_PASSWORD!
    );

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('invalid credentials show an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.expectLoginPageVisible();

    await loginPage.login(
      process.env.INVALID_USERNAME!,
      process.env.INVALID_PASSWORD!
    );

    await loginPage.expectErrorMessageVisible();
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Username and password do not match'
    );
  });
  test('valid user can log out', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();

    await loginPage.login(
      process.env.VALID_USERNAME!,
      process.env.VALID_PASSWORD!
    );

    await dashboardPage.expectDashboardVisible();

    await dashboardPage.logout();

    await loginPage.expectLoginPageVisible();
    await expect(page).toHaveURL('/');
  });



});
