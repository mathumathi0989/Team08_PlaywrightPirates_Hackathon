import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

Given("User logged into Application", async ({ logger }) => {
  logger.info("User is on the Dashboard");
});

When("User clicks on New Patient", async ({ addPatientPage, logger }) => {
  logger.info("Clicking New Patient link"); 
  await addPatientPage.clickAddPatientLink();
  await addPatientPage.verifyAddPatientModal();
});

Then(
  "User should see Add Patient Details on the dialog box",
  async ({ addPatientPage, logger }) => {
    logger.info("User can see the dialog box");
     await expect(addPatientPage.modalTitle).toBeVisible();
  },
);

Then(
  "User should see {int} input boxes in the Add Patient Details dialog box",
  async ({ addPatientPage }, count) => {
    const inputs = addPatientPage.modal.locator(
      "input:not([type='file']):not([type='date'])",
    );
    await expect(inputs).toHaveCount(count);
  },
);

Then(
  "User should see {int} dropdowns in the Add Patient Details dialog box",
  async ({ addPatientPage }, count) => {
    const dropdowns = addPatientPage.modal.locator("select:visible");
    await expect(dropdowns).toHaveCount(count);
  },
);

Then(
  "User should see a date picker for DOB field with MM DD YYYY displayed",
  async ({ addPatientPage }) => {
    await expect(addPatientPage.dobField).toBeVisible();
    await expect(addPatientPage.dobField).toHaveAttribute(
      "placeholder",
      "MM/DD/YYYY",
    );
  },
);

Then(
  "User should see exactly {int} file upload option in Add Patient Details dialog box",
  async ({ addPatientPage }, count) => {
    await expect(addPatientPage.fileUploadInput).toHaveCount(count);
  },
);

Then("User should see one Submit button", async ({ addPatientPage }) => {
  await expect(addPatientPage.submitButton).toHaveCount(1);
});

Then(
  "User should see one Submit button in disabled state",
  async ({ addPatientPage }) => {
    await expect(addPatientPage.submitButton).toBeDisabled();
  },
);

Then("User should see one Close button", async ({ addPatientPage }) => {
  await expect(addPatientPage.closeButton).toHaveCount(1);
});

Then(
  "User should see one Close button in enabled state",
  async ({ addPatientPage }) => {
    await expect(addPatientPage.closeButton).toBeEnabled();
  },
);

Then(
  "User should see mandatory field with placeholder {string}",
  async ({ addPatientPage }, placeholder) => {
    const field = addPatientPage.modal.locator(
      `input[placeholder="${placeholder}"]`,
    );
    await expect(field).toBeVisible();
    await expect(field).toHaveAttribute("required", "");
  },
);

Then(
  "User should see mandatory dropdown with placeholder {string}",
  async ({ addPatientPage }, placeholder) => {
    const dropdown = addPatientPage.modal.locator(
      `[placeholder="${placeholder}"]`,
    );
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toHaveAttribute("required", "");
  },
);

Then(
  "User should see mandatory DOB with placeholder {string}",
  async ({ addPatientPage }, placeholder) => {
    await expect(addPatientPage.dobField).toBeVisible();
    await expect(addPatientPage.dobField).toHaveAttribute(
      "placeholder",
      placeholder,
    );
  },
);

Then(
  "User should see non-manadatory field placeholder with {string}",
  async ({ addPatientPage }, placeholder) => {
    const field = addPatientPage.modal.locator(
      `input[placeholder="${placeholder}"]`,
    );
    await expect(field).toBeVisible();
  },
);

Then(
  "User should see text Upload Health Report",
  async ({ addPatientPage }) => {
    await expect(addPatientPage.uploadHealthReportLabel).toBeVisible();
  },
);

Then("User should see text No file Chosen", async ({ addPatientPage }) => {
  await expect(addPatientPage.noFileChosenText).toBeVisible();
});

//CHOOSE FILE BUTTON IS ADDED

Then("User should see the Choose Files button", async ({ addPatientPage }) => {
  await expect(addPatientPage.fileUploadInput).toBeVisible();
});

Then(
  "User should see a scroll bar at the right side of dialog box",
  async ({ addPatientPage }) => {
    const overflow = await addPatientPage.modalBody.evaluate(
      (el) => getComputedStyle(el).overflowY,
    );
    expect(["auto", "scroll"]).toContain(overflow);
  },
);
