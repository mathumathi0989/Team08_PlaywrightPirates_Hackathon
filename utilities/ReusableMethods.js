import { expect } from "@playwright/test";

export class ReusableMethods {
  constructor(page) {
    this.page = page;
  }

  async click(locator) {
    const element = this.page.locator(locator);
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  async fill(locator, value) {
    const element = this.page.locator(locator);
    await element.waitFor({ state: "visible" });
    await element.fill(value);
  }

  async getText(locator) {
    return await this.page.locator(locator).innerText();
  }

  async assertVisible(locator) {
    await expect(this.page.locator(locator).toBeVisible());
  }

  async assertText(locator, expectedText) {
    await expect(this.page.locator(locator)).toHaveText(expectedText);
  }

  async assertEnabled(locator) {
    await expect(this.page.locator(locator).toBeEnabled());
  }
}
