import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/testFixtures.js';
import {expect} from '@playwright/test';
import {getData} from '../../utilities/excelReader.js'
import process from 'process';
const {Given,When,Then} = createBdd(test);


Given('User logged in and patients already exists', async ({logger}) => {
  logger.info("background - userlogged in - authentication");
});


Given('User is in my patient page', async ({logger}) => {
  logger.info("user is on patient page");
});

When('User clicks edit icon for the particular patient', async ({logger,editPatientPage}) => {
  logger.info("user click on edit");
  await editPatientPage.editDeleteAction({edit:true});

});

Then('User should see  Edit Patient page on the dialog box', async ({logger,editPatientPage}) => {
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


Given('After navigating to the My Patient page, the logged-in user clicks the edit icon', async ({editPatientPage,deletePatientPage,testDataHelper,logger}) => {
  logger.info("Patient page - authenticated");
  //chaining
   await deletePatientPage.searchPatient(testDataHelper.patientName);
  await editPatientPage.editDeleteAction({edit:true});
});


Given('User is edit dialog box', async ({logger}) => {
 logger.info("user in edit page");
});

When('User clear exisiting value in {string}', async ({editPatientPage,logger}, fieldName) => {
  logger.info("user clears existing value");
  editPatientPage.clearFields(fieldName);
});



When('User clicks submit after editing {string} with valid data', async ({editPatientPage}, field) => {
  const row = getData('EditPatient','Valid User');
  const valueMap = { 
    'First Name': row.Firstname,
    'Last Name': row.Lastname
  };
  const value = valueMap[field.trim()];
  await editPatientPage.editFieldAndSubmit(field,value);
});

Then('User should redirected to my patient with edited value in {string}', async ({editPatientPage,logger}, field) => {
 logger.info("Edited patient data");
 await editPatientPage.verifyFieldUpdatedOnPatientPage(field);
});


Then('User should be directed to My Patient Page', async ({deletePatientPage}) => {
await expect(deletePatientPage.page).toHaveTitle(/My Patients/);
});

When('User clicks submit after editing field with {string} data', async ({editPatientPage}, testcase) => {
  const row = getData('EditPatient', testcase);
  if(row.Firstname !=null){
  await editPatientPage.editFieldAndSubmit('First Name', String(row.Firstname));
  }
  else if(row.Lastname!=null){
  await editPatientPage.editFieldAndSubmit('Last Name', String(row.Firstname));
  }
});

Then('User should see error message {string}', async ({editPatientPage}, errorMessage) => {
  await editPatientPage.verifyErrorMessage(errorMessage);
});


When('User clicks submit after editing the email with valid data', async ({editPatientPage}) => {
  const row = getData('EditPatient', 'Valid User');
  await editPatientPage.editFieldAndSubmit('Email', row.Email);
});

Then('User should see the updated email value in My patient page', async ({editPatientPage,logger}) => {
   logger.info('Editing Email with valid data');
await editPatientPage.verifyFieldUpdatedOnPatientPage('Email');
});





When('user clicks submit after entering a valid value in the {string} field', async ({editPatientPage}, vital) => {
  const row = getData('EditPatient', 'Valid User');
const vitalMap = {
  'Weight':      String(row.Weight),
  'Height':      String(row.Height),
  'Temperature': String(row.Temperature),
};
const value = vitalMap[vital.trim()];
await editPatientPage.editFieldAndSubmit(vital,value);
});

Then('user should see the updated {string} value in the My patient page', async ({editPatientPage,logger}, vital) => {
 logger.info("vital updated");
 await editPatientPage.verifyVitalUpdated(vital);
});


When('User clicks submit after editing the email with invalid {string}', async ({editPatientPage}, testcase) => {
  const row = getData('EditPatient', testcase);
  await editPatientPage.editFieldAndSubmit('Email',String(row.Email));
});

Then('User should see {string}', async ({editPatientPage}, errorMessage) => {
  await editPatientPage.verifyErrorMessage(errorMessage);
});




When('user clicks submit after eidting the valid value in SP field only', async ({editPatientPage}) => {
const row = getData('EditPatient', 'Only SP field');
 await editPatientPage.editFieldAndSubmit('SP', row.SP);
});

Then('user should receive an error message in DP field', async ({editPatientPage}) => {
 await editPatientPage.verifyBpFieldError('DP');
});

When('user clicks submit after eidting the valid value in DP field only', async ({editPatientPage}) => {
const row = getData('EditPatient', 'Only DP field');
 await editPatientPage.editFieldAndSubmit('DP', row.DP);
});

Then('user should receive an error message in SP field', async ({editPatientPage}) => {
  await editPatientPage.verifyBpFieldError('DP');
});

When('user clicks submit after entering valid values in both SP and DP fields', async ({editPatientPage}) => {
 const row = getData('EditPatient', 'Valid User');
await editPatientPage.editFieldAndSubmit('SP', String(row.SP));
await editPatientPage.editFieldAndSubmit('DP', String(row.DP));
});


Then('user should be redirected to My patient page', async ({deletePatientPage}) => {
 await expect(deletePatientPage.page).toHaveTitle(/My Patients/);
});

When('user clicks submit after entering {string} in the vital field', async ({editPatientPage}, testcase) => {
const row = getData('EditPatient', testcase);
if(testcase.toLowerCase().includes('weight')){
  await editPatientPage.editFieldAndSubmit('Weight', String(row.Weight));
}
else if(testcase.toLowerCase().includes('height')){
  await editPatientPage.editFieldAndSubmit('Height', String(row.Height));
}
else if(testcase.toLowerCase().includes('temp')){
await editPatientPage.editFieldAndSubmit('Temperature', String(row.Temperature));
}
});

Then('user should see the {string}', async ({editPatientPage}, errorMessage) => {
 await editPatientPage.verifyErrorMessage(errorMessage);
});

When('user clicks the Date of Birth field', async ({editPatientPage}) => {
  await editPatientPage.clickDobField();
});

Then('user should see a calendar date picker with month day and year', async ({editPatientPage,logger}) => {
  logger.info("calendar date picker displayed");
  await editPatientPage.verifyCalendarVisible();
});


When('user clicks submit after entering invalid {string} in the SP and DP fields', async ({editPatientPage}, testcase) => {
  const row = getData('EditPatient', testcase);
  if(testcase.toLowerCase().includes('sp')){
  await editPatientPage.editFieldAndSubmit('SP'), String(row.SP);
  }
  else if(testcase.toLowerCase().includes('dp')){
    await editPatientPage.editFieldAndSubmit('DP', String(row.DP));
  }
});

When('user click submit after entering invalid {string} in the DOB field', async ({editPatientPage}, testcase) => {
 const row = getData('EditPatient', testcase);
 const dobValue = row['Date Of Birth']?? String(row.Temperature);
 await editPatientPage.editFieldAndSubmit(dobValue, testcase);
});

Given('user is in the edit dialog box {string}', async ({editPatientPage}, state) => {
 if(state=== 'with unsaved changes'){
  const row = getData('EditPatient', 'Valid User');
  await editPatientPage.makeUnsavedChange('First Name', String(row.Firstname)+'draft')
 }
});

When('user clicks submit after user upload a valid file', async ({editPatientPage}) => {
   await editPatientPage.uploadFile(process.env.APP_FILE);
    await editPatientPage.verifySubmitCloseButton("submit");

});

Then('Uploaded file should be saved successfully', async ({editPatientPage,logger}) => {
  logger.info("file uploaded successfully");
  await editPatientPage.verifyFileUploadSuccess();
});



When('user clicks the close button', async ({editPatientPage}) => {
   await editPatientPage.verifySubmitCloseButton("close");
});

Then('edit dialog should close', async ({editPatientPage,logger}) => {
  logger.info("Edit dialog closed");
   await editPatientPage.verifyDialogClosed();
});





