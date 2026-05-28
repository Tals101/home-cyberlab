import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { generateRandomTodo } from '../utils/todoHelpers';

test('add todo using page object', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Page object todo');

  await todoPage.expectTodoVisible('Page object todo');
});

test('complete todo using page object', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Complete with page object');
  await todoPage.completeTodo('Complete with page object');

  await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
});

test('delete todo using page object', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Delete with page object');
  await todoPage.deleteTodo('Delete with page object');

  await todoPage.expectTodoHidden('Delete with page object');
});

test('add random todo using helper', async ({ page }) => {
  const todoPage = new TodoPage(page);
  const todoText = generateRandomTodo('Random page object todo');

  await todoPage.goto();
  await todoPage.addTodo(todoText);

  await todoPage.expectTodoVisible(todoText);
});

test('isolated test with its own todo data', async ({ page }) => {
  const todoPage = new TodoPage(page);
  const todoText = generateRandomTodo('Isolated todo');

  await todoPage.goto();
  await todoPage.addTodo(todoText);

  await todoPage.expectTodoVisible(todoText);
  await expect(page.locator('.todo-list li')).toHaveCount(1);
});