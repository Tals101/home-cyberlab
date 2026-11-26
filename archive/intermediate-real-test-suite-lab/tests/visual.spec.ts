import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Visual Regression Tests', () => {
  test('dashboard page matches visual snapshot', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();

    await loginPage.login(
      process.env.VALID_USERNAME!,
      process.env.VALID_PASSWORD!
    );

    await dashboardPage.expectDashboardVisible();

    await expect(page).toHaveScreenshot('dashboard-page.png', {
      fullPage: true,
    });
  });
});