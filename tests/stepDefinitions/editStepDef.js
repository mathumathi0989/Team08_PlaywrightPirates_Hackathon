import { createBdd } from "playwright-bdd";
import {EditPage} from '../../pages/EditPage';
const {Given,When,Then} = createBdd();

Given('User is in my patient page', async ({}) => {
  console.log("user is on patient page")
});

When('User clicks edit icon for the particular patient', async ({EditPage}) => {
  await EditPage.editDeleteAction({edit:true});

});

Then('User should see  Edit Patient page on the dialog box', async ({}) => {
  EditPage.verifyEditTitle();
});



Then('User should see {string} and enabled', async ({}, arg) => {
  EditPage.verifySubmitCloseButton();
});

Then('User should see {int} input field', async ({}, arg) => {
  

});

Then('User should see {int} drop down', async ({}, arg) => {
  // Step: Then User should see 3 drop down
  // From: tests/features/EditModule.feature:22:1
});

Then('User should see exactly {int} file upload option', async ({}, arg) => {
  // Step: Then User should see exactly 1 file upload option
  // From: tests/features/EditModule.feature:25:1
});

Then('User should see the {string} populated with the value entered during patient', async ({}, arg) => {
  // Step: Then User should see the "First Name" populated with the value entered during patient
  // From: tests/features/EditModule.feature:28:1
});

Then('User should see vitals title after DOB field', async ({}) => {
  // Step: Then User should see vitals title after DOB field
  // From: tests/features/EditModule.feature:41:1
});

Then('User should see SP place holder in SP field', async ({}) => {
  // Step: Then User should see SP place holder in SP field
  // From: tests/features/EditModule.feature:44:1
});

Then('User should see DP place holder in DP field', async ({}) => {
  // Step: Then User should see DP place holder in DP field
  // From: tests/features/EditModule.feature:47:1
});

Then('User should see Weight place holder in Weight field', async ({}) => {
  // Step: Then User should see Weight place holder in Weight field
  // From: tests/features/EditModule.feature:50:1
});

Then('User should see Height place holder in Height field', async ({}) => {
  // Step: Then User should see Height place holder in Height field
  // From: tests/features/EditModule.feature:53:1
});

Then('User should see tempature place holder in tempature field', async ({}) => {
  // Step: Then User should see tempature place holder in tempature field
  // From: tests/features/EditModule.feature:56:1
});

Then('User should not see mandatory indicators for Vitals Information fields', async ({}) => {
  // Step: Then User should not see mandatory indicators for Vitals Information fields
  // From: tests/features/EditModule.feature:59:1
});

Then('User should see Upload health report : text for Upload button', async ({}) => {
  // Step: Then User should see Upload health report : text for Upload button
  // From: tests/features/EditModule.feature:62:1
});

Then('User should see {string} text', async ({}, arg) => {
  // Step: Then User should see "No File Choosen" text
  // From: tests/features/EditModule.feature:65:1
});

Then('Close button should have red color', async ({}) => {
  // Step: Then Close button should have red color
  // From: tests/features/EditModule.feature:68:1
});

Given('User is edit dialog box', async ({}) => {
  // Step: Given User is edit dialog box
  // From: tests/features/EditModule.feature:72:1
});

When('User clear exisiting value in {string}', async ({}, arg) => {
  // Step: When User clear exisiting value in "First Name"
  // From: tests/features/EditModule.feature:75:1
});

Then('User should see placeholder {string}', async ({}, arg) => {
  // Step: Then User should see placeholder "First name"
  // From: tests/features/EditModule.feature:76:1
});

When('User clicks submit after editing first name with valid data', async ({}) => {
  // Step: When User clicks submit after editing first name with valid data
  // From: tests/features/EditModule.feature:85:1
});

Then('User should redirected to my patient with edited value in first name', async ({}) => {
  // Step: Then User should redirected to my patient with edited value in first name
  // From: tests/features/EditModule.feature:86:1
});

When('User clicks submit after editing first name with numeric data', async ({}) => {
  // Step: When User clicks submit after editing first name with numeric data
  // From: tests/features/EditModule.feature:89:1
});

Then('User should  see error message in Patient name accepts only alphabets', async ({}) => {
  // Step: Then User should  see error message in Patient name accepts only alphabets
  // From: tests/features/EditModule.feature:90:1
});



