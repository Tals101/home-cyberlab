import { test, expect } from '@playwright/test';

test.describe('API Failure Tests', () => {
  test('UI reacts when mocked backend request fails', async ({ page }) => {
    await page.route('**/api/products', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          error: 'Mock backend failure'
        }),
      });
    });

    await page.setContent(`
      <html>
        <body>
          <h1>Product Dashboard</h1>
          <button id="load-products">Load Products</button>
          <div id="status"></div>

          <script>
            document.getElementById('load-products').addEventListener('click', async () => {
              const status = document.getElementById('status');

              try {
                const response = await fetch('/api/products');

                if (!response.ok) {
                  throw new Error('Backend request failed');
                }

                status.textContent = 'Products loaded successfully';
              } catch (error) {
                status.textContent = 'Unable to load products. Please try again later.';
              }
            });
          </script>
        </body>
      </html>
    `);

    await page.locator('#load-products').click();

    await expect(page.locator('#status')).toHaveText(
      'Unable to load products. Please try again later.'
    );
  });
});