import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/testFixtures.js";
import { expect } from "@playwright/test";
import { dropdownValues } from "../../test-data/dropdownData.js";

const { Given, When, Then } = createBdd(test);

Given(
  "User is in Add Patient Details Dialog Box",
  async ({ addPatientPage, logger }) => {
    logger.info("Navigating to Add Patient dialog");
  },
);

// ----DropDown Values
When("User clicks on Allergy dropdown", async ({ addPatientPage, logger }) => {
  logger.info("Clicking Allergy dropdown");
  // await addPatientPage.allergiesDD.click();
});

Then(
  "Allergy dropdown should contain all expected values",
  async ({ addPatientPage, logger }) => {
    logger.info("Verifying all allergy dropdown values");
    for (const value of dropdownValues.allergy) {
      await expect(addPatientPage.getDropdownOption(value)).toBeVisible();
    }
  },
);

Then("Allergy dropdown should contain 13 values", async ({ page, logger }) => {
  logger.info("Verifying allergy dropdown count");
  await expect(page.locator(".multiselect__element")).toHaveCount(13);
});

When(
  "User clicks on Food Preference dropdown",
  async ({ addPatientPage, logger }) => {
    logger.info("Clicking Food Preference dropdown");
    // await addPatientPage.foodPreferenceDD.click();
  },
);

Then(
  "Food Preference dropdown should contain all expected values",
  async ({ addPatientPage, logger }) => {
    logger.info("Verifying all food preference dropdown values");
    for (const value of dropdownValues.allergy) {
      await expect(addPatientPage.getDropdownOption(value)).toBeVisible();
    }
  },
);

Then(
  "Food Preference dropdown should contain 5 values",
  async ({ page, logger }) => {
    logger.info("Verifying food preference dropdown count");
    await expect(page.locator(".multiselect__element")).toHaveCount(5);
  },
);

When(
  "User clicks on Cuisine Category dropdown",
  async ({ addPatientPage, logger }) => {
    logger.info("Clicking Cuisine Category dropdown");
    await addPatientPage.cuisineCategoryDD.click();
  },
);

Then(
  "Cuisine Category dropdown should contain all expected values",
  async ({ addPatientPage, logger }) => {
    logger.info("Verifying all cuisine category dropdown values");
    for (const value of dropdownValues.allergy) {
      await expect(addPatientPage.getDropdownOption(value)).toBeVisible();
    }
  },
);

Then(
  "Cuisine Category dropdown should contain 36 values",
  async ({ page, logger }) => {
    logger.info("Verifying cuisine category dropdown count");
    await expect(page.locator(".multiselect__element")).toHaveCount(36);
  },
);

When(
  "User fills all mandatory fields with valid data",
  async ({ addPatientPage, page, logger }) => {
    logger.info("Filling all mandatory fields with valid data");
    // Input fields
    //await addPatientPage.helper.fill(addPatientPage.fNameInput, validData.firstName);
    await addPatientPage.fNameInput.fill(validData.firstName);
    await addPatientPage.lNameInput.fill(validData.lastName);
    await addPatientPage.emailInput.fill(validData.email);
    await addPatientPage.contactNumInput.fill(validData.contactNumber);

    // Allergies dropdown
    await addPatientPage.allergiesDD.click();
    for (const value of validData.allergies) {
      await addPatientPage.modal
        .locator(`.multiselect__element`, { hasText: value })
        .click();
    }

    // Food Preference dropdown
    await addPatientPage.foodPreferenceDD.click();
    for (const value of validData.foodPreference) {
      await addPatientPage.modal
        .locator(`.multiselect__element`, { hasText: value })
        .click();
    }

    // Cuisine Category dropdown
    await addPatientPage.cuisineCategoryDD.click();
    for (const value of validData.cuisineCategory) {
      await addPatientPage.modal
        .locator(`.multiselect__element`, { hasText: value })
        .click();
    }

    // Date of Birth
    await addPatientPage.dobField.fill(validData.dob);
  },
);

Then(
  "User should see Submit button in enabled state",
  async ({ addPatientPage, logger }) => {
    logger.info("Verifying Submit button is enabled");
    await expect(addPatientPage.submitButton).toBeEnabled();
    //await addPatientPage.helper.assertEnabled(addPatientPage.submitButton);
  },
);

When("User clicks Submit button", async ({ addPatientPage, logger }) => {
  logger.info("Clicking Submit button");
  await addPatientPage.helper.click(addPatientPage.submitButton);
});
Then(
  'User should see "Patient successfully created" toast message',
  async ({ page, addPatientPage, logger }) => {
    logger.info("Verifying success toast message");
    await addPatientPage.helper.assertVisible(
      page.getByText("Patient successfully created", { exact: true }),
    );
  },
);

Then(
  "User should be directed to My Patient Page with New Patient Details created",
  async () => {
    await myPatientPage.waitForPageLoad(); // wait for My Patient Page to load
    const isPatientCreated = await myPatientPage.isNewPatientDisplayed(); // check patient details
    expect(isPatientCreated).toBe(true);
  },
);

When(
  "the user selects {string} from the {string} dropdown",
  async ({ addPatientPage }, optionValue, dropdownName) => {
    const dropdown = addPatientPage.getDropdown(dropdownName);

    await dropdown.click(); // open dropdown
    await addPatientPage.getDropdownOption(optionValue).click(); // select option
  },
);

Then(
  "{string} should be selected in the {string} field",
  async ({ addPatientPage }, expected, dropdownName) => {
    const dropdown = addPatientPage.getDropdown(dropdownName);

    await expect(dropdown).toContainText(expected);
  },
);

Then(
  "{string} should not be selected in the {string} field",
  async ({ addPatientPage }, notExpected, dropdownName) => {
    const dropdown = addPatientPage.getDropdown(dropdownName);

    await expect(dropdown).not.toContainText(notExpected);
  },
);

When(
  "User clicks on Date of Birth field",
  async ({ addPatientPage, logger }) => {
    logger.info("Clicking DOB field");
    await addPatientPage.dobField.click();
  },
);
Then(
  "User should see calendar date picker with Month Day Year",
  async ({ page, logger }) => {
    logger.info("Verifying calendar is visible");
    await expect(
      page.locator(".calendar, .datepicker, [role='dialog']"),
    ).toBeVisible();
  },
);

When(
  "User selects valid date {string} in DOB field",
  async ({ addPatientPage, logger }, date) => {
    logger.info(`Selecting valid date: ${date}`);
    await addPatientPage.dobField.fill(date);
    await addPatientPage.dobField.press("Tab");
  },
);
Then(
  "User should see selected date {string} in MM\\/DD\\/YYYY format",
  async ({ addPatientPage, logger }, date) => {
    logger.info(`Verifying date format: ${date}`);
    await expect(addPatientPage.dobField).toHaveValue(date);
  },
);

// what for the dates when clicked in the datepicker??

When(
  "User enters {string} in DOB field and tabs away",
  async ({ addPatientPage, logger }, date) => {
    logger.info(`Entering invalid DOB: ${date}`);
    await addPatientPage.dobField.fill(date);
    await addPatientPage.dobField.press("Tab");
  },
);

When("User selects current date as DOB", async ({ addPatientPage, logger }) => {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const yyyy = today.getFullYear();
  const currentDate = `${mm}/${dd}/${yyyy}`;
  logger.info(`Selecting current date: ${currentDate}`);
  await addPatientPage.dobField.fill(currentDate);
  await addPatientPage.dobField.press("Tab");
});

Then(
  "User should see DOB error message {string}",
  async ({ page, logger }, errorMessage) => {
    logger.info(`Verifying DOB error: ${errorMessage}`);
    await expect(page.getByText(errorMessage)).toBeVisible();
  },
);
