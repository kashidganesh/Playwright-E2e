import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { testData } from '../utils/testData';

test('@sanity Valid user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await productsPage.verifyTitle('Products');
});
