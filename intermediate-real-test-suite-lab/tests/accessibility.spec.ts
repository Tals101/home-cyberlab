import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { knownAccessibilityIssues } from '../utils/testData';

test.describe('Accessibility Tests', () => {
  test('login page has no serious or critical accessibility violations', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.expectLoginPageVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const seriousOrCriticalViolations = accessibilityScanResults.violations.filter(
      violation =>
        violation.impact === 'serious' || violation.impact === 'critical'
    );

    expect(seriousOrCriticalViolations).toEqual([]);
  });

  test('dashboard page has no serious or critical accessibility violations except known SauceDemo dropdown issue', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();

    await loginPage.login(
      process.env.VALID_USERNAME!,
      process.env.VALID_PASSWORD!
    );

    await dashboardPage.expectDashboardVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const seriousOrCriticalViolations = accessibilityScanResults.violations.filter(
      violation =>
        (violation.impact === 'serious' || violation.impact === 'critical') &&
        violation.id !== knownAccessibilityIssues.sauceDemoSortDropdownMissingName
    );

    expect(seriousOrCriticalViolations).toEqual([]);
  });
});