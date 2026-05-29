import { test, expect } from '../fixtures/testFixtures';
import { expectedProducts } from '../utils/testData';

test.describe('Dashboard Tests', () => {
  test('user can navigate to the dashboard', async ({ loggedInPage, dashboardPage }) => {
    await dashboardPage.expectDashboardVisible();
    await expect(loggedInPage).toHaveURL(/inventory/);
  });

  test('user can find a known product on the dashboard', async ({ loggedInPage }) => {
    await expect(loggedInPage.locator('.inventory_item_name')).toContainText(
      expectedProducts
    );
  });

  test('user can filter products by name Z to A', async ({ loggedInPage, dashboardPage }) => {
    await dashboardPage.sortByNameZA();

    await expect(loggedInPage.locator('.inventory_item_name').first()).toHaveText(
      'Test.allTheThings() T-Shirt (Red)'
    );
  });
});