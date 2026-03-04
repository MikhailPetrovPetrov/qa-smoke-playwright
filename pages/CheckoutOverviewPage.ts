import { Page, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(private page: Page) {}

  async finish() {
    await this.page.click('#finish');
  }

  async cancel() {
    await this.page.click('#cancel');
  }

  async shouldDisplayItems() {
    await expect(this.page.locator('.cart_item').first()).toBeVisible();
  }

  async shouldDisplayTotal() {
    await expect(this.page.locator('.summary_total_label')).toBeVisible();
  }
}