// Generated from: tests/features/AddPatientValidation.feature
import { test } from "../../../tests/fixtures/testFixtures.js";

test.describe('Add Patient Dialog Box - Validation', () => {

  test.beforeEach('Background', async ({ Given, When, logger, newPatientPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into Application', null, { logger, page }); 
    await When('User clicks on New Patient', null, { newPatientPage }); 
  });
  
  test('Validate title of the dialog box', async ({ Then }) => { 
    await Then('User should see Add Patient Details on the dialog box'); 
  });

  test('Validate presence of 9 input fields', async ({ Then }) => { 
    await Then('User should see 9 input boxes in the Add Patient Details dialog box'); 
  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate presence of 3 dropdowns', async ({ Then }) => { 
      await Then('User should see 3 dropdowns in the Add Patient Details dialog box'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate presence of a Date Picker field', async ({ Then }) => { 
      await Then('User should see a date picker for DOB field with MM/DD/YYYY displayed'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Presence of file Upload option', async ({ Then }) => { 
      await Then('User should see exactly 1 file upload option in Add Patient Details dialog box'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Presence of Submit button', async ({ Then }) => { 
      await Then('User should see one Submit button'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate State of Submit button', async ({ Then }) => { 
      await Then('User should see one Submit button in disabled state'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Presence of Close button', async ({ Then }) => { 
      await Then('User should see one Close button'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate State of Close button', async ({ Then }) => { 
      await Then('User should see one Close button in enabled state'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for first field - firstname', async ({ Then }) => { 
      await Then('User should see mandatory field with placeholder "First name"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for second field - lastname', async ({ Then }) => { 
      await Then('User should see mandatory field with placeholder "Last name"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for thrid field - Email', async ({ Then }) => { 
      await Then('User should see mandatory field with placeholder "Email"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for second field - Contact Num', async ({ Then }) => { 
      await Then('User should see mandatory field with placeholder "Contact Number"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for dropdown -Allergies', async ({ Then }) => { 
      await Then('User should see mandatory dropdown with placeholder "Allergies"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for dropdown -Food Preference', async ({ Then }) => { 
      await Then('User should see mandatory dropdown with placeholder "Food Preference"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for dropdown -Cusine Category', async ({ Then }) => { 
      await Then('User should see mandatory dropdown with placeholder "Cusine Category"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for DOB field', async ({ Then }) => { 
      await Then('User should see mandatory DOB with placeholder "Date of Birth"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for Vitals section -Weight', async ({ Then }) => { 
      await Then('User should see non-manadatory field placeholder with "Weight"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for Vitals section -Height', async ({ Then }) => { 
      await Then('User should see non-manadatory field placeholder with "Height"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for Vitals section -Temperature', async ({ Then }) => { 
      await Then('User should see non-manadatory field placeholder with "Temperature"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for Vitals section -SP', async ({ Then }) => { 
      await Then('User should see non-manadatory field placeholder with "SP"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Placeholder for Vitals section -DP', async ({ Then }) => { 
      await Then('User should see non-manadatory field placeholder with "DP"'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Presence of Upload Health Report', async ({ Then }) => { 
      await Then('User should see text Upload Health Report'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Presence of No file Chosen when no files uploaded', async ({ Then }) => { 
      await Then('User should see text No file Chosen'); 
    });

  });

  test.describe(() => {
    test.describe.configure({"retries":0});

    test.fixme('Validate Presence of scroll bar on the dialog box', async ({ Then }) => { 
      await Then('User should see a scroll bar at the right side of dialog box'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/AddPatientValidation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should see Add Patient Details on the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see 9 input boxes in the Add Patient Details dialog box","stepMatchArguments":[{"group":{"start":16,"value":"9","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":22,"pickleLine":13,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should see 3 dropdowns in the Add Patient Details dialog box"}]},
  {"pwTestLine":31,"pickleLine":16,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see a date picker for DOB field with MM/DD/YYYY displayed"}]},
  {"pwTestLine":40,"pickleLine":19,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see exactly 1 file upload option in Add Patient Details dialog box"}]},
  {"pwTestLine":49,"pickleLine":22,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see one Submit button"}]},
  {"pwTestLine":58,"pickleLine":25,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see one Submit button in disabled state"}]},
  {"pwTestLine":67,"pickleLine":28,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then User should see one Close button"}]},
  {"pwTestLine":76,"pickleLine":31,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see one Close button in enabled state"}]},
  {"pwTestLine":85,"pickleLine":34,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"First name\""}]},
  {"pwTestLine":94,"pickleLine":37,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"Last name\""}]},
  {"pwTestLine":103,"pickleLine":40,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"Email\""}]},
  {"pwTestLine":112,"pickleLine":43,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"Contact Number\""}]},
  {"pwTestLine":121,"pickleLine":46,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory dropdown with placeholder \"Allergies\""}]},
  {"pwTestLine":130,"pickleLine":49,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory dropdown with placeholder \"Food Preference\""}]},
  {"pwTestLine":139,"pickleLine":52,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory dropdown with placeholder \"Cusine Category\""}]},
  {"pwTestLine":148,"pickleLine":55,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory DOB with placeholder \"Date of Birth\""}]},
  {"pwTestLine":157,"pickleLine":58,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"Weight\""}]},
  {"pwTestLine":166,"pickleLine":61,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"Height\""}]},
  {"pwTestLine":175,"pickleLine":64,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"Temperature\""}]},
  {"pwTestLine":184,"pickleLine":67,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":185,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"SP\""}]},
  {"pwTestLine":193,"pickleLine":70,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"DP\""}]},
  {"pwTestLine":202,"pickleLine":73,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see text Upload Health Report"}]},
  {"pwTestLine":211,"pickleLine":76,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see text No file Chosen"}]},
  {"pwTestLine":220,"pickleLine":79,"skipped":true,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then User should see a scroll bar at the right side of dialog box"}]},
]; // bdd-data-end