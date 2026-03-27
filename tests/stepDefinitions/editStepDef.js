import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/testFixtures.js';
import {expect} from '@playwright/test';
const {Given,When,Then} = createBdd(test);


Given('User logged in and patients already exists', async ({logger}) => {
  logger.info("background - userlogged in - authentication");
});


Given('User is in my patient page', async ({logger}) => {
  logger.info("user is on patient page");
});

When('User clicks edit icon for the particular patient', async ({editPatientPage,logger}) => {
  logger.info("user click on edit");
  await editPatientPage.editDeleteAction({edit:true});

});

Then('User should see  Edit Patient page on the dialog box', async ({editPatientPage,logger}) => {
  editPatientPage.verifyEditTitle();
logger.info("user should see the edit patient page");
});


Then('User should see {string} and enabled', async ({logger,editPatientPage}, buttonName) => {
 logger.info("user should see on submit button in patient page");
  editPatientPage.verifySubmitCloseButton(buttonName);
});

Then('User should see {int} input field', async ({editPatientPage}, count) =>{
  await expect(editPatientPage.inputFields).toHaveCount(count);

});

Then('User should see {int} drop down', async ({editPatientPage}, count) => {
  await expect(editPatientPage.dropdownFields).toHaveCount(count);
});

Then('User should see exactly {int} file upload option', async ({editPatientPage}, count) => {
await expect(editPatientPage.fileUpload).toHaveCount(count);
});

Then('User should see the {string} populated with the value entered during patient', async ({editPatientPage,logger}, field) => {
  logger.info("Field validations verified")
  await editPatientPage.verifyFieldPopulated(field);
});

Then('User should see vitals title after DOB field', async ({editPatientPage}) => {
  await editPatientPage.verifyVitalsTitle();
});


Then('User should see Upload health report : text for Upload button', async ({editPatientPage}) => {
 await editPatientPage.verifyUploadHealthReportLabel();
});

Then('User should see {string} text', async ({editPatientPage}, text) => {
 await editPatientPage.verifyNoFileChosenText(text);
});


Given('After navigating to the My Patient page, the logged-in user clicks the edit icon', async ({logger}) => {
  logger.info("Patient page - authenticated");
});


Given('User is edit dialog box', async ({logger}) => {
 logger.info("user in edit page");
});

When('User clear exisiting value in {string}', async ({editPatientPage,logger}, fieldName) => {
  logger.info("user clears existing value");
  editPatientPage.clearFields(fieldName);
});

When('User clicks submit after editing first name with valid data', async ({}) => {

});

Then('User should redirected to my patient with edited value in first name', async ({}) => {

});

When('User clicks submit after editing first name with numeric data', async ({}) => {
  
});

Then('User should  see error message in Patient name accepts only alphabets', async ({}) => {
 
});



