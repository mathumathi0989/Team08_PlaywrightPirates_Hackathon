import { ReusableMethods } from '../utilities/ReusableMethods.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.helper = new ReusableMethods(page);

    // Navigation bar
    this.navigationBar = page.locator('nav');
    this.navBarText = page.locator('nav').getByText('Dietician Project');
    this.homeIcon = page.locator('nav svg, nav [data-testid="home-icon"], nav .home-icon').first();

    // Login card
    this.pageTitle = page.getByRole('heading', { name: /Dietician Application/i });

    // Labels
    this.usernameLabel = page.locator('label').filter({ hasText: /^username$/i });
    this.passwordLabel = page.locator('label').filter({ hasText: /^password$/i });

    // Inputs
    this.usernameInput = page.locator('input[name="username"], input[type="text"]').first();
    this.passwordInput = page.locator('input[name="password"], input[type="password"]').first();

    // Button
    this.loginButton = page.getByRole('button', { name: /login/i });

    // Error
    this.errorMessage = page.locator('.error, .alert, .alert-danger, [role="alert"], .invalid-feedback').first();
  }

  async openApp() {
    await this.page.goto('/');
  }

  async enterUsername(username) {
    await this.helper.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.helper.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.helper.click(this.loginButton);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async verifyNavBarText(text) {
    await this.helper.assertText(this.navBarText,text);
  }

  async verifyHomeIcon() {
    await this.helper.assertVisible(this.homeIcon);
  }

  async verifyPageTitle() {
    await this.helper.assertVisible(this.pageTitle);
  }

  async verifyLabel(labelName) {
    if (labelName.toLowerCase() == 'username') {
      await this.helper.assertVisible(this.usernameLabel);
    } else if (labelName.toLowerCase() == 'password') {
      await this.helper.assertVisible(this.passwordLabel);
    }
  }

  async verifyInputField(fieldName) {
    if (fieldName.toLowerCase() == 'username') {
      await this.helper.assertVisible(this.usernameInput);
      await this.helper.assertEnabled(this.usernameInput);
    } else if (fieldName.toLowerCase() == 'password') {
      await this.helper.assertVisible(this.passwordInput);
      await this.helper.assertEnabled(this.passwordInput);
    }
  }

  async verifyLoginButton() {
    await this.helper.assertVisible(this.loginButton);
    await this.helper.assertEnabled(this.loginButton);
  }

  async verifyErrorMessage() {
    await this.helper.assertVisible(this.errorMessage);
  }
}


    
