import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../utils/testData';

test('@regression Valid user can complete order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(testData.validUser.username, testData.validUser.password);

  await productsPage.addToCart('Sauce Labs Backpack');
  await productsPage.addToCart('Sauce Labs Bike Light');
  await productsPage.openCart();

  await checkoutPage.checkout();
  await checkoutPage.enterInfo(
    testData.customer.firstName,
    testData.customer.lastName,
    testData.customer.zip
  );
  await checkoutPage.finish();
  await checkoutPage.verifyConfirmation(testData.confirmationMsg);
});
