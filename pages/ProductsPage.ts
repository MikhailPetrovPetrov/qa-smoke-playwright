import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyLoaded() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }

  async addFirstProduct() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}