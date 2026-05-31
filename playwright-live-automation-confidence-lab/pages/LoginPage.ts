import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/login');
  }

  async login(username: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async assertSuccess() {
    await expect(this.page).toHaveURL(/secure/);
    await expect(this.page.getByText(/You logged into a secure area/i)).toBeVisible();
    await expect(this.page.getByRole('link', { name: /logout/i })).toBeVisible();
  }

  async assertError(message: RegExp) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async logout() {
    await this.page.getByRole('link', { name: /logout/i }).click();
  }

  async assertLoggedOut() {
    await expect(this.page).toHaveURL(/login/);
    await expect(this.page.getByText(/you logged out of the secure area/i)).toBeVisible();
  }
}