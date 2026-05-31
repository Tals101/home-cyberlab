import { test, expect } from '@playwright/test';

test('sortable table has rows', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/tables');

  const rows = page.locator('table').first().locator('tbody tr');

  await expect(rows).toHaveCount(4);
});

test('table contains Jason with correct email and due amount', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/tables');

  const firstTable = page.locator('table').first();
  const jasonRow = firstTable.locator('tbody tr').filter({ hasText: 'Jason' });

  await expect(jasonRow).toContainText('jdoe@hotmail.com');
  await expect(jasonRow).toContainText('$100.00');
});

test('extract emails from first table', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/tables');

  const firstTable = page.locator('table').first();
  const emailCells = firstTable.locator('tbody tr td:nth-child(3)');

  const emails = await emailCells.allTextContents();

  console.log(emails);

  expect(emails).toContain('jdoe@hotmail.com');
  expect(emails).toContain('jsmith@gmail.com');
});

test('convert first table rows into objects', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/tables');

  const firstTable = page.locator('table').first();
  const rows = firstTable.locator('tbody tr');

  const tableData = [];

  for (let i = 0; i < await rows.count(); i++) {
    const cells = rows.nth(i).locator('td');

    tableData.push({
      lastName: await cells.nth(0).innerText(),
      firstName: await cells.nth(1).innerText(),
      email: await cells.nth(2).innerText(),
      due: await cells.nth(3).innerText(),
      website: await cells.nth(4).innerText(),
    });
  }

  console.log(tableData);

  expect(tableData).toContainEqual({
    lastName: 'Doe',
    firstName: 'Jason',
    email: 'jdoe@hotmail.com',
    due: '$100.00',
    website: 'http://www.jdoe.com',
  });
});