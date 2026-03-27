import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/testFixtures.js';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(test);

Given('User is on the browser', async ({logger}) => {
  logger.info("User opens browser");
  // Browser is already open by Playwright
});

When('User enters app url', async ({ page }) => {
  console.log("User navigates to app URL");
  await page.goto('/');
});

Then('User should see the text {string} on left side of Navigation bar', async ({ loginPage }, text) => {
  await expect(loginPage.navBarText).toHaveText(text);
  await expect(loginPage.navBarText).toBeVisible();
});

Then('User should see the home icon on left side of navigation bar', async ({ loginPage }) => {
  await expect(loginPage.homeIcon).toBeVisible();
});

Then('Navigation bar background should have a blue-purple color', async ({ loginPage }) => {
  const bgColor = await loginPage.navigationBar.evaluate(el => 
    window.getComputedStyle(el).backgroundColor
  );
  // Verify blue-purple color (adjust RGB values based on actual color)
  expect(bgColor).toMatch(/rgb\((5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9]|1[0-4][0-9]|150),\s*0,\s*(13[0-9]|14[0-9]|150)\)/);
});

Then('Heading {string} should be visible inside the login card', async ({ loginPage }, heading) => {
  await expect(loginPage.pageTitle).toHaveText(heading);
  await expect(loginPage.pageTitle).toBeVisible();
});

Then('User should see the label text {string}', async ({ loginPage }, labelText) => {
  const label = labelText.toLowerCase() === 'username' 
    ? loginPage.usernameLabel 
    : loginPage.passwordLabel;
  
  await expect(label).toHaveText(labelText);
  await expect(label).toBeVisible();
});

Then('Username input field should be visible', async ({ loginPage }) => {
  await expect(loginPage.usernameInput).toBeVisible();
});

Then('Password input field should be visible', async ({ loginPage }) => {
  await expect(loginPage.passwordInput).toBeVisible();
});

Then('Login button should be visible', async ({ loginPage }) => {
  await expect(loginPage.loginButton).toBeVisible();
  await expect(loginPage.loginButton).toBeEnabled();
});

Then('Username and Password labels should be left-aligned above their respective input fields', async ({ loginPage }) => {
  // Get positions of labels and input fields
  const usernameLabelBox = await loginPage.usernameLabel.boundingBox();
  const usernameInputBox = await loginPage.usernameInput.boundingBox();
  const passwordLabelBox = await loginPage.passwordLabel.boundingBox();
  const passwordInputBox = await loginPage.passwordInput.boundingBox();
  
  // Verify username label is above and left-aligned with input
  expect(usernameLabelBox.y).toBeLessThan(usernameInputBox.y);
  expect(Math.abs(usernameLabelBox.x - usernameInputBox.x)).toBeLessThan(5); // Allow 5px tolerance
  
  // Verify password label is above and left-aligned with input
  expect(passwordLabelBox.y).toBeLessThan(passwordInputBox.y);
  expect(Math.abs(passwordLabelBox.x - passwordInputBox.x)).toBeLessThan(5);
  
  // Verify text alignment
  const usernameAlign = await loginPage.usernameLabel.evaluate(el => 
    window.getComputedStyle(el).textAlign
  );
  const passwordAlign = await loginPage.passwordLabel.evaluate(el => 
    window.getComputedStyle(el).textAlign
  );
  
  expect(usernameAlign).toBe('left');
  expect(passwordAlign).toBe('left');
});

Then('User should see exactly two input fields', async ({ page }) => {
  const inputFields = await page.locator('input[type="text"], input[type="password"]').all();
  expect(inputFields.length).toBe(2);
});



Given('User is on the login page', async ({ page }) => {
  console.log("User is on login page");
  await page.goto('/');
});

When('User clicks login button after entering valid credentials', async ({ loginPage }) => {
  await loginPage.login('validUsername', 'validPassword');
});

When('User clicks login button after entering only password', async ({ loginPage }) => {
  await loginPage.passwordInput.fill('validPassword');
  await loginPage.loginButton.click();
});

When('User clicks login button after entering only username', async ({ loginPage }) => {
  await loginPage.usernameInput.fill('validUsername');
  await loginPage.loginButton.click();
});

Then('User should be redirected to dashboard page', async ({ page }) => {
  await expect(page).toHaveURL(/.*dashboard/);
});

Then('An error message {string} should be displayed', async ({ loginPage }, errorMessage) => {
  await expect(loginPage.errorMessage).toHaveText(errorMessage);
  await expect(loginPage.errorMessage).toBeVisible();
});

Then('Navigation bar should display exactly four links {string}, {string}, {string}, and {string}', async ({ dashboardPage }) => {
  await expect(dashboardPage.myPatientsLink).toBeVisible();
  await expect(dashboardPage.newPatientLink).toBeVisible();
  await expect(dashboardPage.loginLink).toBeVisible();
  await expect(dashboardPage.logoutLink).toBeVisible();
  
  const navLinks = await dashboardPage.getAllNavLinks();
  expect(navLinks.length).toBe(4);
});

Given('User logged into the app', async ({ page, loginPage }) => {
  console.log("User authentication - logged in");
  await page.goto('/');
  await loginPage.login('validUsername', 'validPassword');
});

Given('User is on the Dashboard page', async ({ page }) => {
  console.log("User is on Dashboard page");
  await expect(page).toHaveURL(/.*dashboard/);
});

When('User clicks the {string} link in the navigation bar', async ({ dashboardPage }, linkName) => {
  const linkMap = {
    'My Patients': dashboardPage.myPatientsLink,
    'New Patient': dashboardPage.newPatientLink,
    'Login': dashboardPage.loginLink,
    'Logout': dashboardPage.logoutLink
  };
  
  const link = linkMap[linkName];
  await link.click();
});

When('User clicks the home icon on the navigation bar', async ({ dashboardPage }) => {
  await dashboardPage.homeIcon.click();
});

Then('User should be redirected to the {string} page', async ({ page }, pageName) => {
  const urlMap = {
    'My Patients': /.*my-patients/,
    'New Patient': /.*new-patient/
  };
  
  const expectedUrl = urlMap[pageName];
  await expect(page).toHaveURL(expectedUrl);
});

Then('User should be logged out of the application', async ({ page, loginPage }) => {
  await expect(page).toHaveURL(/.*login/);
  await expect(loginPage.loginButton).toBeVisible();
});

Then('User should be navigated to the dashboard page', async ({ page }) => {
  await expect(page).toHaveURL(/.*dashboard/);
});