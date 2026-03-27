import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

const VALID_USERNAME = process.env.APP_USERNAME || "admin@gmail.com";
const VALID_PASSWORD = process.env.APP_PASSWORD || "admin123";
const LOGIN_APP_URL = process.env.LOGIN_APP_URL || "http://localhost:4200";
const LOGIN_URL = new URL("/login", LOGIN_APP_URL).toString();

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseRgb(value) {
  const match = value?.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return null;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
  };
}

function isBluePurpleTone(styleText) {
  const rgbMatches = [...styleText.matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/gi)];

  return rgbMatches.some((match) => {
    const r = Number(match[1]);
    const g = Number(match[2]);
    const b = Number(match[3]);

    // Accept shades where blue dominates and red is present (purple family).
    return b >= 90 && r >= 40 && b >= g;
  });
}

async function openLoginPage(page) {
  await page.goto(LOGIN_URL);
}

Given("User is on the browser", async ({ page }) => {
  await expect(page).toBeDefined();
});

When("User enters app url", async ({ page }) => {
  await openLoginPage(page);
});

Then(
  "User should see the text {string} on left side of Navigation bar",
  async ({ loginPage }, text) => {
    await expect(loginPage.navBarText).toBeVisible();
    await expect(loginPage.navBarText).toHaveText(text);
  }
);

Then("User should see the home icon on left side of navigation bar", async ({ loginPage }) => {
  await expect(loginPage.homeIcon).toBeVisible();
});

Then("Navigation bar background should have a blue-purple color", async ({ loginPage }) => {
  const navStyles = await loginPage.navigationBar.evaluate((element) => {
    const css = window.getComputedStyle(element);
    return {
      backgroundColor: css.backgroundColor,
      backgroundImage: css.backgroundImage,
    };
  });

  expect(
    isBluePurpleTone(`${navStyles.backgroundColor} ${navStyles.backgroundImage}`)
  ).toBeTruthy();
});

Then("Heading {string} should be visible inside the login card", async ({ loginPage }, heading) => {
  await expect(loginPage.pageTitle).toBeVisible();
  await expect(loginPage.pageTitle).toHaveText(heading);
});

Then("User should see the label text {string}", async ({ loginPage }, labelText) => {
  const targetLabel = labelText.trim().toLowerCase() === "username"
    ? loginPage.usernameLabel
    : loginPage.passwordLabel;

  await expect(targetLabel).toBeVisible();
  await expect(targetLabel).toHaveText(new RegExp(`^${escapeRegExp(labelText)}$`, "i"));
});

Then("Username input field should be visible", async ({ loginPage }) => {
  await expect(loginPage.usernameInput).toBeVisible();
});

Then("Password input field should be visible", async ({ loginPage }) => {
  await expect(loginPage.passwordInput).toBeVisible();
});

Then("Login button should be visible", async ({ loginPage }) => {
  await expect(loginPage.loginButton).toBeVisible();
});

Then(
  "Login button should be displayed with a blue-purple background and white text",
  async ({ loginPage }) => {
    await expect(loginPage.loginButton).toBeVisible();

    const styles = await loginPage.loginButton.evaluate((element) => {
      const css = window.getComputedStyle(element);
      return {
        backgroundColor: css.backgroundColor,
        backgroundImage: css.backgroundImage,
        color: css.color,
      };
    });

    expect(isBluePurpleTone(`${styles.backgroundColor} ${styles.backgroundImage}`)).toBeTruthy();

    const textColor = parseRgb(styles.color);
    expect(textColor).not.toBeNull();
    expect(textColor.r).toBeGreaterThanOrEqual(220);
    expect(textColor.g).toBeGreaterThanOrEqual(220);
    expect(textColor.b).toBeGreaterThanOrEqual(220);
  }
);

Then(
  "Username and Password labels should be left-aligned above their respective input fields",
  async ({ loginPage }) => {
    const [usernameLabelBox, usernameInputBox, passwordLabelBox, passwordInputBox] = await Promise.all([
      loginPage.usernameLabel.boundingBox(),
      loginPage.usernameInput.boundingBox(),
      loginPage.passwordLabel.boundingBox(),
      loginPage.passwordInput.boundingBox(),
    ]);

    expect(usernameLabelBox).not.toBeNull();
    expect(usernameInputBox).not.toBeNull();
    expect(passwordLabelBox).not.toBeNull();
    expect(passwordInputBox).not.toBeNull();

    expect(usernameLabelBox.y).toBeLessThan(usernameInputBox.y);
    expect(Math.abs(usernameLabelBox.x - usernameInputBox.x)).toBeLessThanOrEqual(8);

    expect(passwordLabelBox.y).toBeLessThan(passwordInputBox.y);
    expect(Math.abs(passwordLabelBox.x - passwordInputBox.x)).toBeLessThanOrEqual(8);

    const [usernameAlign, passwordAlign] = await Promise.all([
      loginPage.usernameLabel.evaluate((element) => window.getComputedStyle(element).textAlign),
      loginPage.passwordLabel.evaluate((element) => window.getComputedStyle(element).textAlign),
    ]);

    expect(usernameAlign.toLowerCase()).toBe("left");
    expect(passwordAlign.toLowerCase()).toBe("left");
  }
);

Then("User should see exactly two input fields", async ({ page }) => {
  const count = await page.locator("input[type='text']:visible, input[type='password']:visible").count();
  expect(count).toBe(2);
});

Then("User should see login button enabled", async ({ loginPage }) => {
  await expect(loginPage.loginButton).toBeEnabled();
});

Given("User is on the login page", async ({ page }) => {
  await openLoginPage(page);
});

When("User clicks login button after entering valid credentials", async ({ loginPage }) => {
  await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
});

When("User clicks login button after entering non existing user", async ({ loginPage }) => {
  await loginPage.login("nonexisting_user_12345@example.com", VALID_PASSWORD);
});

When("User clicks login button after entering spl charac in username", async ({ loginPage }) => {
  await loginPage.login("@@@###", VALID_PASSWORD);
});

When("User clicks login button after entering only few charac of username", async ({ loginPage }) => {
  await loginPage.login("ab", VALID_PASSWORD);
});

When("User clicks login button after entering wrong password", async ({ loginPage }) => {
  await loginPage.login(VALID_USERNAME, "WrongPassword@123");
});

When("User clicks login button after entering spl charach in password", async ({ loginPage }) => {
  await loginPage.login(VALID_USERNAME, "@@@###");
});

When("User clicks login button after entering only password", async ({ loginPage }) => {
  await loginPage.usernameInput.fill("");
  await loginPage.passwordInput.fill(VALID_PASSWORD);
  await loginPage.clickLoginButton();
});

When("User clicks login button after entering only username", async ({ loginPage }) => {
  await loginPage.usernameInput.fill(VALID_USERNAME);
  await loginPage.passwordInput.fill("");
  await loginPage.clickLoginButton();
});

Then("User should be redirected to dashboard page", async ({ page, dashboardPage }) => {
  await expect(page).not.toHaveURL(/login/i);
  await expect(dashboardPage.navigationBar).toBeVisible();
});

Then("An error message {string} should be displayed", async ({ page }, errorMessage) => {
  const errorText = page.getByText(new RegExp(escapeRegExp(errorMessage), "i")).first();
  await expect(errorText).toBeVisible();
});

Then(
  "Navigation bar should display exactly four links {string}, {string}, {string}, and {string}",
  async ({ page }, myPatients, newPatient, login, logout) => {
    const expected = [myPatients, newPatient, login, logout];
    const expectedNormalized = expected.map((item) => item.trim().toLowerCase());

    const texts = (await page.locator("nav a:visible").allTextContents())
      .map((text) => text.replace(/\s+/g, " ").trim())
      .filter(Boolean);

    const normalizedTexts = texts.map((text) => text.toLowerCase());

    expectedNormalized.forEach((text) => {
      expect(normalizedTexts).toContain(text);
    });

    expect(normalizedTexts.length).toBe(4);
  }
);

Given("User logged into the app", async ({ page, loginPage }) => {
  await openLoginPage(page);
  await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
});

Given("User is on the Dashboard page", async ({ page, dashboardPage }) => {
  await expect(page).not.toHaveURL(/login/i);
  await expect(dashboardPage.navigationBar).toBeVisible();
});

When("User clicks the {string} link in the navigation bar", async ({ dashboardPage }, linkName) => {
  await dashboardPage.clickNavLink(linkName);
});

When("User clicks the home icon on the navigation bar", async ({ dashboardPage }) => {
  await dashboardPage.clickHomeIcon();
});

Then("User should be redirected to the {string} page", async ({ page }, pageName) => {
  if (pageName === "My Patients") {
    await expect(page).toHaveURL(/my[\s-]?patients?/i);
    return;
  }

  if (pageName === "New Patient") {
    await expect(page).toHaveURL(/new[\s-]?patient/i);
    return;
  }

  throw new Error(`Unsupported page name: ${pageName}`);
});

Then("User should be logged out of the application", async ({ page, loginPage }) => {
  await expect(page).toHaveURL(/login/i);
  await expect(loginPage.loginButton).toBeVisible();
});

Then("User should be navigated to the dashboard page", async ({ page, dashboardPage }) => {
  await expect(page).not.toHaveURL(/login/i);
  await expect(dashboardPage.navigationBar).toBeVisible();
});
