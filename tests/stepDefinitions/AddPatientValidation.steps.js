import { Given, When, Then, expect } from "../../fixtures/testFixtures.js";
Given("User logged into Application", async ({}) => {
  // Step: Given User logged into Application
  // From: tests/features/AddPatientValidation.feature:4:5
});

When("User clicks on New Patient", async ({}) => {
  console.log("Testing with Degi");
  // Step: When User clicks on New Patient
  // From: tests/features/AddPatientValidation.feature:5:5
});

Then("User should see Add Patient Details on the dialog box", async ({}) => {
  // Step: Then User should see Add Patient Details on the dialog box
  // From: tests/features/AddPatientValidation.feature:8:5
});

Then(
  "User should see {int} input boxes in the Add Patient Details dialog box",
  async ({}, arg) => {
    // Step: Then User should see 9 input boxes in the Add Patient Details dialog box
    // From: tests/features/AddPatientValidation.feature:11:5
  },
);

Then(
  "User should see {int} dropdowns in the Add Patient Details dialog box",
  async ({}, arg) => {
    // Step: Then User should see 3 dropdowns in the Add Patient Details dialog box
    // From: tests/features/AddPatientValidation.feature:14:5
  },
);

Then(
  "User should see a date picker for DOB field with MM\\/DD\\/YYYY displayed",
  async ({}) => {
    // Step: Then User should see a date picker for DOB field with MM/DD/YYYY displayed
    // From: tests/features/AddPatientValidation.feature:17:5
  },
);

Then(
  "User should see exactly {int} file upload option in Add Patient Details dialog box",
  async ({}, arg) => {
    // Step: Then User should see exactly 1 file upload option in Add Patient Details dialog box
    // From: tests/features/AddPatientValidation.feature:20:5
  },
);

Then("User should see one Submit button", async ({}) => {
  // Step: Then User should see one Submit button
  // From: tests/features/AddPatientValidation.feature:23:5
});

Then("User should see one Submit button in disabled state", async ({}) => {
  // Step: Then User should see one Submit button in disabled state
  // From: tests/features/AddPatientValidation.feature:26:5
});

Then("User should see one Close button", async ({}) => {
  // Step: Then User should see one Close button
  // From: tests/features/AddPatientValidation.feature:29:5
});

Then("User should see one Close button in enabled state", async ({}) => {
  // Step: Then User should see one Close button in enabled state
  // From: tests/features/AddPatientValidation.feature:32:5
});

Then(
  "User should see mandatory field with placeholder {string}",
  async ({}, arg) => {
    // Step: Then User should see mandatory field with placeholder "First name"
    // From: tests/features/AddPatientValidation.feature:35:5
  },
);

Then(
  "User should see mandatory dropdown with placeholder {string}",
  async ({}, arg) => {
    // Step: Then User should see mandatory dropdown with placeholder "Allergies"
    // From: tests/features/AddPatientValidation.feature:47:5
  },
);

Then(
  "User should see mandatory DOB with placeholder {string}",
  async ({}, arg) => {
    // Step: Then User should see mandatory DOB with placeholder "Date of Birth"
    // From: tests/features/AddPatientValidation.feature:56:5
  },
);

Then(
  "User should see non-manadatory field placeholder with {string}",
  async ({}, arg) => {
    // Step: Then User should see non-manadatory field placeholder with "Weight"
    // From: tests/features/AddPatientValidation.feature:59:5
  },
);

Then("User should see text Upload Health Report", async ({}) => {
  // Step: Then User should see text Upload Health Report
  // From: tests/features/AddPatientValidation.feature:74:5
});

Then("User should see text No file Chosen", async ({}) => {
  // Step: Then User should see text No file Chosen
  // From: tests/features/AddPatientValidation.feature:77:5
});

Then(
  "User should see a scroll bar at the right side of dialog box",
  async ({}) => {
    // Step: Then User should see a scroll bar at the right side of dialog box
    // From: tests/features/AddPatientValidation.feature:80:5
  },
);
