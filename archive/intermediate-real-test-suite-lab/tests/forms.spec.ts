import { test, expect } from '../fixtures/testFixtures';
import { checkoutData } from '../utils/testData';

test.describe('Form Tests', () => {
  test('checkout form displays validation error when fields are empty', async ({ loggedInPage, checkoutPage }) => {
    await checkoutPage.startCheckout();
    await checkoutPage.expectCheckoutFormVisible();

    await checkoutPage.continueCheckout();

    await checkoutPage.expectErrorVisible();
    await expect(loggedInPage.locator('[data-test="error"]')).toContainText(
      'First Name is required'
    );
  });

  test('checkout form shows success state after valid submission', async ({ loggedInPage, checkoutPage }) => {
    await checkoutPage.startCheckout();
    await checkoutPage.expectCheckoutFormVisible();

    await checkoutPage.fillCheckoutForm(
  checkoutData.validCustomer.firstName,
  checkoutData.validCustomer.lastName,
  checkoutData.validCustomer.postalCode
);
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();

    await checkoutPage.expectSuccessVisible();
  });

  test('checkout form displays error state when last name is missing', async ({ loggedInPage, checkoutPage }) => {
    await checkoutPage.startCheckout();
    await checkoutPage.expectCheckoutFormVisible();

    await checkoutPage.fillCheckoutForm(
  checkoutData.missingLastNameCustomer.firstName,
  checkoutData.missingLastNameCustomer.lastName,
  checkoutData.missingLastNameCustomer.postalCode
);
    await checkoutPage.continueCheckout();

    await checkoutPage.expectErrorVisible();
    await expect(loggedInPage.locator('[data-test="error"]')).toContainText(
      'Last Name is required'
    );
  });
});