import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  async shouldShowSuccessMessage() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }

  async backHome() {
    await this.page.click('#back-to-products');
  }
}