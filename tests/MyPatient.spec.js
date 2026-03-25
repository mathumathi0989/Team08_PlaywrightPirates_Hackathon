import { test } from '@playwright/test';
import { MyPatientPage } from '../pages/MyPatient';

test('Verify My Patient Page loads', async ({ page }) => {
  const myPatient = new MyPatientPage(page);

  await myPatient.navigate();
});