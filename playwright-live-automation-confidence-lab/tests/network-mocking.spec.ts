import { test, expect } from '@playwright/test';

test('mocks an API response', async ({ page }) => {
  await page.route('**/api/users/2', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: {
          id: 2,
          email: 'naftali@example.com',
          first_name: 'Naftali',
          last_name: 'TestUser',
          avatar: 'https://example.com/avatar.png',
        },
      }),
    });
  });

  const response = await page.goto('https://reqres.in/api/users/2');
  const body = await response?.json();

  expect(body.data.email).toBe('naftali@example.com');
  expect(body.data.first_name).toBe('Naftali');
});