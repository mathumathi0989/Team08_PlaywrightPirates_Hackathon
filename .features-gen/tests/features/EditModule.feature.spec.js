// Generated from: tests/features/EditModule.feature
import { test } from "playwright-bdd";

test.describe('Edit Patient  - Dialog Box vaildation', () => {

  test.describe('Edit Patient  - Dialog Box vaildation', () => {

    test.beforeEach('Background: User logged in and patients already exists', async ({ Given, When, EditPage }, testInfo) => { if (testInfo.error) return;
      await Given('User is in my patient page'); 
      await When('User clicks edit icon for the particular patient', null, { EditPage }); 
    });
    
    test('Title of the dialoge box', async ({ Then }) => { 
      await Then('User should see  Edit Patient page on the dialog box'); 
    });

    test.describe('Validate the Presence of buttons', () => {

      test('Example #1', async ({ Then }) => { 
        await Then('User should see "submit" and enabled'); 
      });

      test('Example #2', async ({ Then }) => { 
        await Then('User should see "close" and enabled'); 
      });

    });

    test('Presence of 9 Input field', async ({ Then }) => { 
      await Then('User should see 9 input field'); 
    });

    test('Presence of 3 drop down', async ({ Then }) => { 
      await Then('User should see 3 drop down'); 
    });

    test('Presence of file upload option', async ({ Then }) => { 
      await Then('User should see exactly 1 file upload option'); 
    });

    test.describe('Validate the Presence of fields in the edit patient', () => {

      test('Example #1', async ({ Then }) => { 
        await Then('User should see the "First Name" populated with the value entered during patient'); 
      });

      test('Example #2', async ({ Then }) => { 
        await Then('User should see the "Last Name" populated with the value entered during patient'); 
      });

      test('Example #3', async ({ Then }) => { 
        await Then('User should see the "Email" populated with the value entered during patient'); 
      });

      test('Example #4', async ({ Then }) => { 
        await Then('User should see the "Contact Number" populated with the value entered during patient'); 
      });

      test('Example #5', async ({ Then }) => { 
        await Then('User should see the "Allergy" populated with the value entered during patient'); 
      });

      test('Example #6', async ({ Then }) => { 
        await Then('User should see the "Food Preference" populated with the value entered during patient'); 
      });

      test('Example #7', async ({ Then }) => { 
        await Then('User should see the "Cuisine Category" populated with the value entered during patient'); 
      });

      test('Example #8', async ({ Then }) => { 
        await Then('User should see the "Date of Birth" populated with the value entered during patient'); 
      });

    });

    test('Presence of sub titleVitals', async ({ Then }) => { 
      await Then('User should see vitals title after DOB field'); 
    });

    test('Presence of SP field', async ({ Then }) => { 
      await Then('User should see SP place holder in SP field'); 
    });

    test('Presence of DP field', async ({ Then }) => { 
      await Then('User should see DP place holder in DP field'); 
    });

    test('Presence of Weight field', async ({ Then }) => { 
      await Then('User should see Weight place holder in Weight field'); 
    });

    test('Presence of Height field', async ({ Then }) => { 
      await Then('User should see Height place holder in Height field'); 
    });

    test('Presence of Tempature field', async ({ Then }) => { 
      await Then('User should see tempature place holder in tempature field'); 
    });

    test('Vitals information fields shouldn\'t have mandatory indicator', async ({ Then }) => { 
      await Then('User should not see mandatory indicators for Vitals Information fields'); 
    });

    test('Presence of Label Upload health report', async ({ Then }) => { 
      await Then('User should see Upload health report : text for Upload button'); 
    });

    test('Presence of  No File Choosen text when no files uploaded', async ({ Then }) => { 
      await Then('User should see "No File Choosen" text'); 
    });

    test('Close button color', async ({ Then }) => { 
      await Then('Close button should have red color'); 
    });

  });

  test.describe('Edit Patient  - Function test case', () => {

    test.beforeEach('Background: After navigating to the My Patient page, the logged-in user clicks the edit icon', async ({ Given }, testInfo) => { if (testInfo.error) return;
      await Given('User is edit dialog box'); 
    });
    
    test.describe('Verify placeholders', () => {

      test('Example #1', async ({ When, Then }) => { 
        await When('User clear exisiting value in "First Name"'); 
        await Then('User should see placeholder "First name"'); 
      });

      test('Example #2', async ({ When, Then }) => { 
        await When('User clear exisiting value in "Last Name"'); 
        await Then('User should see placeholder "Last name"'); 
      });

      test('Example #3', async ({ When, Then }) => { 
        await When('User clear exisiting value in "Email."'); 
        await Then('User should see placeholder "Email"'); 
      });

      test('Example #4', async ({ When, Then }) => { 
        await When('User clear exisiting value in "Contact Number"'); 
        await Then('User should see placeholder "Contact Number"'); 
      });

    });

    test('Edit first name with valid data', async ({ When, Then }) => { 
      await When('User clicks submit after editing first name with valid data'); 
      await Then('User should redirected to my patient with edited value in first name'); 
    });

    test('Edit first name with numeric data', async ({ When, Then }) => { 
      await When('User clicks submit after editing first name with numeric data'); 
      await Then('User should  see error message in Patient name accepts only alphabets'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/EditModule.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see  Edit Patient page on the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"submit\" and enabled","stepMatchArguments":[{"group":{"start":16,"value":"\"submit\"","children":[{"start":17,"value":"submit","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"close\" and enabled","stepMatchArguments":[{"group":{"start":16,"value":"\"close\"","children":[{"start":17,"value":"close","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User should see 9 input field","stepMatchArguments":[{"group":{"start":16,"value":"9","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":33,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see 3 drop down","stepMatchArguments":[{"group":{"start":16,"value":"3","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":37,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then User should see exactly 1 file upload option","stepMatchArguments":[{"group":{"start":24,"value":"1","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":43,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"First Name\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"First Name\"","children":[{"start":21,"value":"First Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":47,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Last Name\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Last Name\"","children":[{"start":21,"value":"Last Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Email\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Email\"","children":[{"start":21,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":55,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Contact Number\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Contact Number\"","children":[{"start":21,"value":"Contact Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Allergy\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Allergy\"","children":[{"start":21,"value":"Allergy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Food Preference\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Food Preference\"","children":[{"start":21,"value":"Food Preference","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":67,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Cuisine Category\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Cuisine Category\"","children":[{"start":21,"value":"Cuisine Category","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":71,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the \"Date of Birth\" populated with the value entered during patient","stepMatchArguments":[{"group":{"start":20,"value":"\"Date of Birth\"","children":[{"start":21,"value":"Date of Birth","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see vitals title after DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":81,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see SP place holder in SP field","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see DP place holder in DP field","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see Weight place holder in Weight field","stepMatchArguments":[]}]},
  {"pwTestLine":93,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see Height place holder in Height field","stepMatchArguments":[]}]},
  {"pwTestLine":97,"pickleLine":55,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see tempature place holder in tempature field","stepMatchArguments":[]}]},
  {"pwTestLine":101,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then User should not see mandatory indicators for Vitals Information fields","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see Upload health report : text for Upload button","stepMatchArguments":[]}]},
  {"pwTestLine":109,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see \"No File Choosen\" text","stepMatchArguments":[{"group":{"start":16,"value":"\"No File Choosen\"","children":[{"start":17,"value":"No File Choosen","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":113,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in my patient page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks edit icon for the particular patient","isBg":true,"stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then Close button should have red color","stepMatchArguments":[]}]},
  {"pwTestLine":127,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in \"First Name\"","stepMatchArguments":[{"group":{"start":30,"value":"\"First Name\"","children":[{"start":31,"value":"First Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":129,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"First name\"","stepMatchArguments":[{"group":{"start":28,"value":"\"First name\"","children":[{"start":29,"value":"First name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":132,"pickleLine":80,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in \"Last Name\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Last Name\"","children":[{"start":31,"value":"Last Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"Last name\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Last name\"","children":[{"start":29,"value":"Last name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":137,"pickleLine":81,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in \"Email.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Email.\"","children":[{"start":31,"value":"Email.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":139,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"Email\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Email\"","children":[{"start":29,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":142,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User clear exisiting value in \"Contact Number\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Contact Number\"","children":[{"start":31,"value":"Contact Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see placeholder \"Contact Number\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Contact Number\"","children":[{"start":29,"value":"Contact Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":149,"pickleLine":84,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing first name with valid data","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then User should redirected to my patient with edited value in first name","stepMatchArguments":[]}]},
  {"pwTestLine":154,"pickleLine":88,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is edit dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User clicks submit after editing first name with numeric data","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient name accepts only alphabets","stepMatchArguments":[]}]},
]; // bdd-data-end