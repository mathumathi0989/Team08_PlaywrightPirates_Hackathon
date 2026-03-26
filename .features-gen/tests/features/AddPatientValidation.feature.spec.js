// Generated from: tests/features/AddPatientValidation.feature
import { test } from "../../../tests/fixtures/testFixtures.js";

test.describe('Add Patient Dialog Box - Validation', () => {

  test.beforeEach('Background', async ({ Given, When, addPatientPage, logger }, testInfo) => { if (testInfo.error) return;
    await Given('User logged into Application', null, { logger }); 
    await When('User clicks on New Patient', null, { addPatientPage, logger }); 
  });
  
  test('Validate title of the dialog box', async ({ Then, addPatientPage, logger }) => { 
    await Then('User should see Add Patient Details on the dialog box', null, { addPatientPage, logger }); 
  });

  test('Validate presence of 9 input fields', async ({ Then, addPatientPage }) => { 
    await Then('User should see 9 input boxes in the Add Patient Details dialog box', null, { addPatientPage }); 
  });

  test('Validate presence of 3 dropdowns', async ({ Then, addPatientPage }) => { 
    await Then('User should see 3 dropdowns in the Add Patient Details dialog box', null, { addPatientPage }); 
  });

  test('Validate presence of a Date Picker field', async ({ Then, addPatientPage }) => { 
    await Then('User should see a date picker for DOB field with MM/DD/YYYY displayed', null, { addPatientPage }); 
  });

  test('Validate Presence of file Upload option', async ({ Then, addPatientPage }) => { 
    await Then('User should see exactly 1 file upload option in Add Patient Details dialog box', null, { addPatientPage }); 
  });

  test('Validate Presence of Submit button', async ({ Then, addPatientPage }) => { 
    await Then('User should see one Submit button', null, { addPatientPage }); 
  });

  test('Validate State of Submit button', async ({ Then, addPatientPage }) => { 
    await Then('User should see one Submit button in disabled state', null, { addPatientPage }); 
  });

  test('Validate Presence of Close button', async ({ Then, addPatientPage }) => { 
    await Then('User should see one Close button', null, { addPatientPage }); 
  });

  test('Validate State of Close button', async ({ Then, addPatientPage }) => { 
    await Then('User should see one Close button in enabled state', null, { addPatientPage }); 
  });

  test('Validate Placeholder for first field - firstname', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory field with placeholder "First name"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for second field - lastname', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory field with placeholder "Last name"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for thrid field - Email', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory field with placeholder "Email"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for second field - Contact Num', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory field with placeholder "Contact Number"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for dropdown -Allergies', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory dropdown with placeholder "Allergies"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for dropdown -Food Preference', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory dropdown with placeholder "Food Preference"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for dropdown -Cusine Category', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory dropdown with placeholder "Cusine Category"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for DOB field', async ({ Then, addPatientPage }) => { 
    await Then('User should see mandatory DOB with placeholder "Date of Birth"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for Vitals section -Weight', async ({ Then, addPatientPage }) => { 
    await Then('User should see non-manadatory field placeholder with "Weight"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for Vitals section -Height', async ({ Then, addPatientPage }) => { 
    await Then('User should see non-manadatory field placeholder with "Height"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for Vitals section -Temperature', async ({ Then, addPatientPage }) => { 
    await Then('User should see non-manadatory field placeholder with "Temperature"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for Vitals section -SP', async ({ Then, addPatientPage }) => { 
    await Then('User should see non-manadatory field placeholder with "SP"', null, { addPatientPage }); 
  });

  test('Validate Placeholder for Vitals section -DP', async ({ Then, addPatientPage }) => { 
    await Then('User should see non-manadatory field placeholder with "DP"', null, { addPatientPage }); 
  });

  test('Validate Presence of Upload Health Report', async ({ Then, addPatientPage }) => { 
    await Then('User should see text Upload Health Report', null, { addPatientPage }); 
  });

  test('Validate Presence of No file Chosen when no files uploaded', async ({ Then, addPatientPage }) => { 
    await Then('User should see text No file Chosen', null, { addPatientPage }); 
  });

  test('Validate Presence of Chosen files button', async ({ Then, addPatientPage }) => { 
    await Then('User should see the Choose Files button', null, { addPatientPage }); 
  });

  test('Validate Presence of scroll bar on the dialog box', async ({ Then, addPatientPage }) => { 
    await Then('User should see a scroll bar at the right side of dialog box', null, { addPatientPage }); 
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
  {"pwTestLine":19,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should see 3 dropdowns in the Add Patient Details dialog box","stepMatchArguments":[{"group":{"start":16,"value":"3","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":23,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see a date picker for DOB field with MM/DD/YYYY displayed","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see exactly 1 file upload option in Add Patient Details dialog box","stepMatchArguments":[{"group":{"start":24,"value":"1","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":31,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see one Submit button","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see one Submit button in disabled state","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then User should see one Close button","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see one Close button in enabled state","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"First name\"","stepMatchArguments":[{"group":{"start":49,"value":"\"First name\"","children":[{"start":50,"value":"First name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"Last name\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Last name\"","children":[{"start":50,"value":"Last name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":55,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"Email\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Email\"","children":[{"start":50,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory field with placeholder \"Contact Number\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Contact Number\"","children":[{"start":50,"value":"Contact Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory dropdown with placeholder \"Allergies\"","stepMatchArguments":[{"group":{"start":52,"value":"\"Allergies\"","children":[{"start":53,"value":"Allergies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":67,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory dropdown with placeholder \"Food Preference\"","stepMatchArguments":[{"group":{"start":52,"value":"\"Food Preference\"","children":[{"start":53,"value":"Food Preference","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":71,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory dropdown with placeholder \"Cusine Category\"","stepMatchArguments":[{"group":{"start":52,"value":"\"Cusine Category\"","children":[{"start":53,"value":"Cusine Category","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":75,"pickleLine":55,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see mandatory DOB with placeholder \"Date of Birth\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Date of Birth\"","children":[{"start":48,"value":"Date of Birth","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":79,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"Weight\"","stepMatchArguments":[{"group":{"start":54,"value":"\"Weight\"","children":[{"start":55,"value":"Weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":83,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"Height\"","stepMatchArguments":[{"group":{"start":54,"value":"\"Height\"","children":[{"start":55,"value":"Height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":87,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"Temperature\"","stepMatchArguments":[{"group":{"start":54,"value":"\"Temperature\"","children":[{"start":55,"value":"Temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":91,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"SP\"","stepMatchArguments":[{"group":{"start":54,"value":"\"SP\"","children":[{"start":55,"value":"SP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":95,"pickleLine":70,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should see non-manadatory field placeholder with \"DP\"","stepMatchArguments":[{"group":{"start":54,"value":"\"DP\"","children":[{"start":55,"value":"DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":99,"pickleLine":73,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see text Upload Health Report","stepMatchArguments":[]}]},
  {"pwTestLine":103,"pickleLine":76,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see text No file Chosen","stepMatchArguments":[]}]},
  {"pwTestLine":107,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then User should see the Choose Files button","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User logged into Application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on New Patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then User should see a scroll bar at the right side of dialog box","stepMatchArguments":[]}]},
]; // bdd-data-end