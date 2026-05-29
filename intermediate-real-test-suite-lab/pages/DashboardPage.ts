import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;
  readonly pageTitle: Locator;
  readonly productSortDropdown: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    this.pageTitle = page.locator('[data-test="title"]');
    this.productSortDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async expectDashboardVisible() {
    await expect(this.inventoryList).toBeVisible();
    await expect(this.pageTitle).toHaveText('Products');
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  async sortByNameZA() {
    await this.productSortDropdown.selectOption('za');
  }

  async sortByPriceLowHigh() {
    await this.productSortDropdown.selectOption('lohi');
  }

  async expectInventoryItemsVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
  }
}