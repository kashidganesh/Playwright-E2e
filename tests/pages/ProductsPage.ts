import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyTitle(expected: string) {
    await expect(this.page.locator('.title')).toHaveText(expected);
  }

  async addToCart(productName: string) {
    // Wait until products are visible
    await this.page.waitForSelector('.inventory_item');

    // Find product container by name
    const product = this.page.locator(`.inventory_item:has-text("${productName}")`);
    await expect(product).toBeVisible();

    // Click Add to cart inside that product container
    await product.locator('button:has-text("Add to cart")').click();
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
