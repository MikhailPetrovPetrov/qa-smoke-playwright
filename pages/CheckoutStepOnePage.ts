import { Page, expect } from '@playwright/test';

export class CheckoutStepOnePage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
  }

  async continue() {
    await this.page.click('#continue');
  }

  async shouldShowError(message: string) {
    await expect(this.page.locator('[data-test="error"]')).toContainText(message);
  }
}