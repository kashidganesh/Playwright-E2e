import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page.click('#checkout');
  }

  async enterInfo(first: string, last: string, zip: string) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }

  async verifyConfirmation(expectedMsg: string) {
    await expect(this.page.locator('.complete-header')).toHaveText(expectedMsg);
  }
}
