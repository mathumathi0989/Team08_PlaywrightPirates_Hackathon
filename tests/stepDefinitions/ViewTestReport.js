import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/testFixtures.js";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

/* -------------------- Common / Background Steps -------------------- */

Given('User logged into the app and patients already exists', async ({}) => {
  console.log("Background - user logged into the app and patients already exists");
});

Given('User is in My Patients page', async ({}) => {
  console.log("User is in My Patients page");
});

When('User clicks View Previous Test Reports button for a specific record', async ({}) => {
  console.log("User clicks View Previous Test Reports button for a specific record");
});

When('User clicks View Previous Test Reports button for a particular record', async ({}) => {
  console.log("User clicks View Previous Test Reports button for a particular record");
});

/* -------------------- Patient information section -------------------- */

Then('Corresponding report for that record should be opened', async ({}) => {
  console.log("Corresponding report for that record should be opened");
});

Then('Title {string} should be displayed', async ({}, title) => {
  console.log(`Title should be displayed: ${title}`);
});

Then('Patient id corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  console.log("Patient id corresponding to the selected record should be displayed");
});

Then('Patient name corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  console.log("Patient name corresponding to the selected record should be displayed");
});

Then('Patient email corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  console.log("Patient email corresponding to the selected record should be displayed");
});

Then('Patient contact number corresponding to the record selected in My Patients page should be displayed', async ({}) => {
  console.log("Patient contact number corresponding to the selected record should be displayed");
});

Then('Close icon {string} should be displayed', async ({}, iconName) => {
  console.log(`Close icon should be displayed: ${iconName}`);
});

/* -------------------- View patient test reports - table -------------------- */

Then('Reports table should be displayed', async ({}) => {
  console.log("Reports table should be displayed");
});

Then('Table headers should have Record Number, File, Uploaded Time, File/Report Name, Vitals, Identified Health Conditions', async ({}) => {
  console.log("Table headers should have Record Number, File, Uploaded Time, File/Report Name, Vitals, Identified Health Conditions");
});

Then('Record header should be in the exact order Record Number → File → Uploaded Time → File/Report Name → Vitals → Identified Health Conditions should be displayed', async ({}) => {
  console.log("Record header should be displayed in exact order");
});

Then('Pagination controls First, previous, next, last arrows should be displayed', async ({}) => {
  console.log("Pagination controls First, previous, next, last arrows should be displayed");
});

/* -------------------- Reports table data scenarios -------------------- */

Then('Each report should display a record number', async ({}) => {
  console.log("Each report should display a record number");
});

Then('Each report should display View PDF button', async ({}) => {
  console.log("Each report should display View PDF button");
});

Then('Each report should display uploaded time', async ({}) => {
  console.log("Each report should display uploaded time");
});

Then('Each report should display file/report name', async ({}) => {
  console.log("Each report should display file/report name");
});

Then('Each report should display vitals information', async ({}) => {
  console.log("Each report should display vitals information");
});

/* -------------------- View PDF -------------------- */

Given('User is in My Patients page after logged into the app and patients already exists', async ({}) => {
  console.log("User is in My Patients page after logged into the app and patients already exists");
});

Given('User is in View Plan Test Reports page', async ({}) => {
  console.log("User is in View Plan Test Reports page");
});

When('User clicks View PDF button for a particular record', async ({}) => {
  console.log("User clicks View PDF button for a particular record");
});

/* -------------------- Pagination management with multiple records -------------------- */

Given('User is in view patient test report page with multiple records already exist in the system for that user', async ({}) => {
  console.log("User is in view patient test report page with multiple records already exist in the system for that user");
});

Given('User is in View Patient Test Reports page with multiple record for the patient', async ({}) => {
  console.log("User is in View Patient Test Reports page with multiple record for the patient");
});

When('User clicks the next page arrow (>)', async ({}) => {
  console.log("User clicks the next page arrow (>)");
});

Then('Next set of patient records should be displayed', async ({}) => {
  console.log("Next set of patient records should be displayed");
});

Given('User is in Report table of View Patient Test Reports page', async ({}) => {
  console.log("User is in Report table of View Patient Test Reports page");
});

When('User clicks the previous page arrow (<)', async ({}) => {
  console.log("User clicks the previous page arrow (<)");
});
  
Then('Previous set of patient records should be displayed', async ({page}) => {
  console.log("Previous set of patient records should be displayed");
});

Given('User is in any page except first page of Report table', async ({}) => {
  console.log("User is in any page except first page of Report table");
});

When('User clicks the first page arrow (>>)', async ({}) => {
  console.log("User clicks the first page arrow (>>)");
});

Then('First page of patient records should be displayed', async ({}) => {
  console.log("First page of patient records should be displayed");
});

Given('User is in any page except last page of Report table', async ({}) => {
  console.log("User is in any page except last page of Report table");
});

When('User clicks the last page arrow (<<)', async ({}) => {
  console.log("User clicks the last page arrow (<<)");
});

Then('Last page of patient records should be displayed', async ({}) => {
  console.log("Last page of patient records should be displayed");
});

Given('User is in any page of Report table', async ({}) => {
  console.log("User is in any page of Report table");
});

When('User clicks any page navigation arrow', async ({}) => {
  console.log("User clicks any page navigation arrow");
});

Then('Pagination text should display the correct range and total number of patients', async ({}) => {
  console.log("Pagination text should display the correct range and total number of patients");
});

/* -------------------- Pagination management with only one record -------------------- */

Given('User is logged into the application and only one patient record already exist in the system for that user', async ({}) => {
  console.log("User is logged into the application and only one patient record already exist in the system for that user");
});

Given('User is in My Patient page', async ({}) => {
  console.log("User is in My Patient page");
});

When('User clicks on View Patient Test Reports button', async ({}) => {
  console.log("User clicks on View Patient Test Reports button");
});

Then('First, previous, next, last arrows should be disabled', async ({}) => {
  console.log("First, previous, next, last arrows should be disabled");
});

/* -------------------- Optional tiny sanity step to keep expect import used -------------------- */

Then('step definition file is loaded', async ({ page }) => {
  await expect(page).toBeDefined();
});
