import { test } from '@playwright/test';
import { MyPatientPage } from '../pages/MyPatient';

test('Verify My Patient Page loads', async ({ page }) => {
  const myPatient = new MyPatientPage(page);

  await myPatient.navigate();
});









const { MyPatientPage } = MyPatientPageModule;

test.describe('My Patient Page Tests', () => {
  let myPatientPage;

  test.beforeEach(async ({ page }) => {
    myPatientPage = new MyPatientPage(page);
    await myPatientPage.goto();
    // Assuming login is required, you can add login steps here if needed
  });

  test('Page should load with correct title', async () => {
    expect(await myPatientPage.isPageLoaded()).toBeTruthy();
  });

  test('Search box should be visible and functional', async () => {
    expect(await myPatientPage.searchBox.isVisible()).toBeTruthy();
    await myPatientPage.searchBox.fill('John Doe'); // Example patient name
    // Optionally, you can assert filtered table rows if your app supports it
  });

  test('Click View Previous Test Reports button', async () => {
    expect(await myPatientPage.viewTestReportsBtn.first().isVisible()).toBeTruthy();
    await myPatientPage.clickViewReports(0); // Click first patient's report
    // Add assertion for popup/modal if needed
  });

  test('Click Edit button', async () => {
    expect(await myPatientPage.editButton.first().isVisible()).toBeTruthy();
    await myPatientPage.clickEdit(0);
    // Add assertion for edit page/modal
  });

  test('Click Delete button', async () => {
    expect(await myPatientPage.deleteButton.first().isVisible()).toBeTruthy();
    await myPatientPage.clickDelete(0);
    // Add confirmation modal assertion if your app has one
  });

});