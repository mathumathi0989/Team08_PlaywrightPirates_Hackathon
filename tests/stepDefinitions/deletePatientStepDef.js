import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/testFixtures.js';
import {expect} from '@playwright/test';
const {Given,When,Then} = createBdd(test);

Given('Navigating to the My Patient page after logged in', async ({deletePatientPage}) => {
 await deletePatientPage.clickMyPatients();
});

When('User clicks the Delete icon for a particular patient in the patient table', async ({deletePatientPage,editPatientPage,testDataHelper}) => {
  //Chaining
  await deletePatientPage.searchPatient(testDataHelper.patientName);
  await editPatientPage.editDeleteAction({delete:true});
});

Then('Alert title should be {string}', async ({deletePatientPage}, expectedTitle) => {
  const dialog = await deletePatientPage.page.waitForEvent('dialog');
  expect(dialog.type()).toBe(expectedTitle.toLowerCase());
});

Then('Alert text should be {string}', async ({deletePatientPage}, expectedText) => {
  const dialog = await deletePatientPage.page.waitForEvent('dialog');
  expect(dialog.message()).toBe(expectedText);
});

Then('Alert should display a Yes button', async ({deletePatientPage}) => {
 const dialog = await deletePatientPage.page.waitForEvent('dialog');
  expect(dialog.type()).toBe('confirm');
});

Then('Alert should display a No button', async ({deletePatientPage}) => {
const dialog = await deletePatientPage.page.waitForEvent('dialog');
  expect(dialog.type()).toBe('confirm');
});


When('User accepts the alert', async ({deletePatientPage,editPatientPage}) => {
  await editPatientPage.editDeleteAction({delete:true});
  await deletePatientPage.handleAlert('accept');

});

Then('User should be navigated back to main page', async ({deletePatientPage}) => {
 await expect(deletePatientPage.page).toHaveTitle(/My Patients/);
});

Then('{string} should be removed from the table and a success message displayed', async ({deletePatientPage},patientName) => {
  deletePatientPage.verifyPatientRemoved(patientName);
 deletePatientPage.verifyToastMessage();
});

When('User dismiss the alert', async ({editPatientPage,deletePatientPage}) => {
   await editPatientPage.editDeleteAction({delete:true});
  await deletePatientPage.handleAlert('dismiss');
});

Then('Alert should close and the {string} should remain in the table', async ({deletePatientPage},patientName) => {
 deletePatientPage.verifyPatientRetains(patientName);

});

