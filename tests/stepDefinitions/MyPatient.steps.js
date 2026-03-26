// import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
// const { MyPatientPage } = require('../pages/MyPatient');
// const { PaginationUtil } = require('../utils/paginationUtil');

// let myPatientPage;
// Given(`User is in dietician application dashboard page`, async(page) => {
// await page.got(url);
// });

// When(`User clicks on My Patients button`, async() => {
//    myPatientPage = new MyPatientPage(this.page);
//   await myPatientPage.goto();
// });
// // My Patient Header validation

// Then(`Page header {string} should be displayed`, async() => {
//     await expect(this.page.locator()).toBeVisible();
// });

// // Search tewxt box validation
// Then(`Search bar should be displayed`, async() => {
//     await expect(this.page.locator()).toBeVisible();
// });

// Then(`Search icon should be displayed inside the search bar`, async() => {
//     await expect(this.page.locator()).toBeVisible();
// });

// Then(`Placeholder text {string} should be displayed`, async() => {
//     await expect(this.page.locator()).toBeVisible();
// });

// Then(`Up and down arrow icons should be displayed in the Patient Id column header`, async() => {
//     await expect(this.page.locator()).toBeVisible();
// });

// Then(`Up and down arrow icons should be displayed in the Name column header`, async() => {
//     await expect(this.page.locator()).toBeVisible();
// });

// Then(`Patient Id should be displayed for each patient record`, async() => {
//     const count = await myPatientPage.getPatientCount();
//   expect(count).toBeGreaterThan(0);
// });

// Then(`Patient name should be displayed for each patient record`, async() => {
//     const count = await myPatientPage.getPatientCount();
//   expect(count).toBeGreaterThan(0);
// });

// Then(`Details column should display {string}, email", {string} for each patient record`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`Phone number, email , date of birth should be displayed on separate lines for each patient record`, async() => {
//    await expect(myPatientPage.tableRows.first()).toBeVisible();
// });

// Then(`Email should be displayed in valid email format for each patient record`, async() => {
//     const text = await myPatientPage.tableRows.first().textContent();
//   expect(text).toMatch(/\S+@\S+\.\S+/);
// });

// Then(`Phone number displayed in details column should contain valid digits for each patient record`, async() => {
//     const text = await myPatientPage.tableRows.first().textContent();
//   expect(text).toMatch(/\d{10}/);
// });

// Then(`Date of birth should be displayed in {string} format for each patient record`, async() => {
//     const text = await myPatientPage.tableRows.first().textContent();
//   expect(text).toMatch(/\d{2}-\d{2}-\d{4}/);
// });

// Then(`Last visit date should be displayed for each patient record`, async() => {
//     await expect(myPatientPage.tableRows.first()).toBeVisible();
// });

// Then(`Last visit date should be displayed in 'dd-mm-yyyy" format for each patient record`, async() => {
//    await expect(myPatientPage.tableRows.first()).toBeVisible();
// });

// Then(`Edit icon should be displayed for each patient record`, async() => {
//     await expect(myPatientPage.editButton.first()).toBeVisible();
// });

// Then(`Delete icon should be displayed for each patient record`, async() => {
//     await expect(myPatientPage.deleteButton.first()).toBeVisible();
// });

// Then(`My Patients page should display with empty table`, async() => {
//     const count = await myPatientPage.getPatientCount();
//   expect(count).toBe(0);
// });

// When(`User clicks an sorting arrow in Patient Id column`, async() => {
//     await this.page.locator().click();
// });

// When(`User clicks an arrow in Name column`, async() => {
//     await this.page.locator().click();
// });

// When(`User searches using patient name`, async() => {
//     await this.page.locator().fill('Ram');
// });

// When(`User searched using patient id`, async() => {
//     await this.page.locator().fill('132');
// });

// Given(`User entered the text in search box in My Patients page`, async() => {
//     await this.page.locator().fill('Ram');
// });

// When(`User clears the search text`, async() => {
//     await this.page.locator().fill('');
// });

// Then(`All the existed patient records should be displayed`, async() => {
//     expect(await myPatientPage.getPatientCount()).toBeGreaterThan(0);
// });

// Given(`User is in My Patients page with multiple pages of a patient record`, async() => {
//     console.log("User is in My Patients page with multiple pages of a patient record")
// });

// When(`User clicks the next page arrow \(>)`, async() => {
//     await this.page.locator().click();
// });

// Then(`Next set of  patient records should be displayed`, async() => {
//     console.log("Patient records:")
// });

// Given(`User is in later page of My Patients page`, async() => {
//     console.log("User is in later page of My Patients page")
// });

// When(`User clicks the previous page arrow \(<)`, async() => {
//     await this.page.locator().click();
// });

// Then(`Previous set of patient records should be displayed`, async() => {
//     console.log("Previous set of patient records should be displayed")
// });

// Given(`User is in any page except first page of My Patients page`, async() => {
//     console.log("User is in any page except first page of My Patients page")
// });

// When(`User clicks the first page arrow \(>>)`, async() => {
//     await this.page.locator().click();
// });

// Then(`First page of patient records should be displayed`, async() => {
//     console.log("First page of patient records should be displayed")
// });

// Given(`User is in any page except last page of My Patients page`, async() => {
//     console.log("User is in any page except last page of My Patients page")
// });

// When(`User clicks the last page arrow \(<<)`, async() => {
//     await this.page.locator().click();
// });

// Then(`Last page of patient records should be displayed`, async() => {
//     console.log("Last page of patient records should be displayed")
// });

// Given(`User is in any page of My Patients page`, async() => {
//     // [Given] Sets up the initial state of the system.
// });

// When(`User clicks any page navigation arrow`, async() => {
//     await this.page.locator().click();
// });

// Then('Pagination text should display the correct range and total number of patients',
// async() => {

import {expect} from '@playwright/test';
import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/testFixtures.js';
const {Given,When,Then} = createBdd(test);
// import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
// const { MyPatientPage } = require('../pages/MyPatient');
// const { PaginationUtil } = require('../utils/paginationUtil');

//   expect(isValid).toBeTruthy();
// });

// Then('"Showing 0 to 0 of 0 patients" should be displayed', async() =>  {
//   const text = await myPatientPage.getPaginationText();
//   expect(text).toContain('0 to 0 of 0');
// });

let myPatientPage;
Given(`User is in dietician application dashboard page`, async(page) => {
await page.got(url);    
});

When(`User clicks on My Patients button`, async(myPatientPage) => {
 // myPatientPage = new MyPatientPage(this.page);
  await myPatientPage.goto();
});
// My Patient Header validation

Then(`Page header {string} should be displayed`, async() => {
    await expect(this.page.locator()).toBeVisible();
});

// Then('All pagination arrows (First, Previous, Next, Last) should be disabled',
// async() =>  {
//   const buttons = this.page.locator('button[disabled]');
//   expect(await buttons.count()).toBeGreaterThan(0);
// });

// /*Then(`Pagination text should display the correct range and total number of patients`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Given(`User is in My Patients page with multiple pages of patient record`, async() => {
//     // [Given] Sets up the initial state of the system.
// });

// When(`User navigates to any page`, async() => {
//     // [When] Describes the action or event that triggers the scenario.
// });

// Then(`Pagination controls should be displayed`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// When(`User navigates to the first page of patient record`, async() => {
//     // [When] Describes the action or event that triggers the scenario.
// });

// Then(`Previous arrow \(<) should be disabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`First page arrow \(<<) should be disabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`Next arrow \(>) should be enabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`Last page arrow \(>>) should be enabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// When(`User navigates to the last page of patient record`, async() => {
//     // [When] Describes the action or event that triggers the scenario.
// });

// Then(`Previous arrow \(>) should be disabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`First page arrow \(>>) should be disabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`Next arrow \(<) should be enabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`Last page arrow \(<<) should be enabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`First, previous, next, last arrows should be disabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`{string} should be displayed`, (arg0: string) => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`All pagination arrows \(First, Previous, Next, Last) should be disabled`, async() => {
//     // [Then] Describes the expected outcome or result of the scenario.
// });

// Then(`If no patient data exists, the text {string} should be displayed`, (arg0: string) => {
//     // [Then] Describes the expected outcome or result of the scenario.
// }); */
