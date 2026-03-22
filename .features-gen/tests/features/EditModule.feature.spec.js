// Generated from: tests/features/EditModule.feature
import { test } from "playwright-bdd";

test.describe('Edit module', () => {

  test('Validate login', async ({ Given, When, Then }) => { 
    await Given('open url'); 
    await When('enter credentials'); 
    await Then('dashboard page displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/EditModule.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given open url","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When enter credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then dashboard page displayed","stepMatchArguments":[]}]},
]; // bdd-data-end