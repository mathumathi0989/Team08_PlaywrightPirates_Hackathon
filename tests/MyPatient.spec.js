import { test } from '@playwright/test';
import { MyPatientPage } from '../pages/MyPatient';

test('Verify My Patient Page loads', async ({ page }) => {
  const myPatient = new MyPatientPage(page);
  await myPatient.navigate();
});

test('Search box', async () => {
  await MyPatientPage.searchBox.fill('John Doe');
});

test('View Previous Test Reports button', async () => {
  await MyPatientPage.clickViewReports();
});

test('Click Edit button', async () => {
  await MyPatientPage.clickEdit();
});

test('Click Delete button', async () => {
  await MyPatientPage.clickDelete();
});

