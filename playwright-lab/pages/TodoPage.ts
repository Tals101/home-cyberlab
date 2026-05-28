import { expect, Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todoText: string) {
    await this.page.getByPlaceholder('What needs to be done?').fill(todoText);
    await this.page.getByPlaceholder('What needs to be done?').press('Enter');
  }

  async completeTodo(todoText: string) {
    await this.page.getByText(todoText).locator('..').getByRole('checkbox').check();
  }

  async deleteTodo(todoText: string) {
    await this.page.getByText(todoText).locator('..').hover();
    await this.page.getByText(todoText).locator('..').locator('.destroy').click();
  }

  async expectTodoVisible(todoText: string) {
    await expect(this.page.getByText(todoText)).toBeVisible();
  }

  async expectTodoHidden(todoText: string) {
    await expect(this.page.getByText(todoText)).toBeHidden();
  }
}