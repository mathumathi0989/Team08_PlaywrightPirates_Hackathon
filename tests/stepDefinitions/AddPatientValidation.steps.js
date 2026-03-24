import { Given, When, Then, expect } from "../../fixtures/testFixtures.js";

Given("User logged into Application",async({page, logger})=>{
logger.info("=====Test Start Here for Add Patient======")
await page.goto("/");
logger.info("User is on Dashboard Page");
});

When('User clicks on New Patient', async ({newPatientPage},logger) => {
 logger.info("Clicking new patient button in header");
 await newPatientPage.cli
});

Then('User should see Add Patient Details on the dialog box', async ({}) => {
  // Step: Then User should see Add Patient Details on the dialog box
  // From: tests/features/AddPatientValidation.feature:8:5
});

Then('User should see {int} input boxes in the Add Patient Details dialog box', async ({}, arg) => {
  // Step: Then User should see 9 input boxes in the Add Patient Details dialog box
  // From: tests/features/AddPatientValidation.feature:11:5
});