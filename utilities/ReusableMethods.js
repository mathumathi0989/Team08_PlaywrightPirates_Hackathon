import { expect } from "@playwright/test";

export class ReusableMethods {
  constructor(page) {
    this.page = page;
  }

  resolveLocator(locatorOrSelector) {
    return typeof locatorOrSelector === "string"
      ? this.page.locator(locatorOrSelector)
      : locatorOrSelector;
  }

  async click(locatorOrSelector) {
    const element = this.resolveLocator(locatorOrSelector);
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  async fill(locatorOrSelector, value) {
    const element = this.resolveLocator(locatorOrSelector);
    await element.waitFor({ state: "visible" });
    await element.fill(value);
  }

  async getText(locatorOrSelector) {
    const element = this.resolveLocator(locatorOrSelector);
    return element.innerText();
  }

  async assertVisible(locatorOrSelector) {
    const element = this.resolveLocator(locatorOrSelector);
    await expect(element).toBeVisible();
  }

  async assertText(locatorOrSelector, expectedText) {
    const element = this.resolveLocator(locatorOrSelector);
    await expect(element).toHaveText(expectedText);
  }

  async assertEnabled(locatorOrSelector) {
    const element = this.resolveLocator(locatorOrSelector);
    await expect(element).toBeEnabled();
  }

  async assertDisabled(locatorOrSelector) {
    const element = this.resolveLocator(locatorOrSelector);
    await expect(element).toBeDisabled();
  }
}
