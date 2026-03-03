import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductInCart() {
    await expect(this.page.locator('.cart_item')).toBeVisible();
  }
}