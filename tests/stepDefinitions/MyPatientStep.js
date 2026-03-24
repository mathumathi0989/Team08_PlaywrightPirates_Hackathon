import { createBdd } from "playwright-bdd";
const {Given,When,Then} = createBdd();

Given('User is in dietician application dashboard page', async ({ page }) => {
  await page.goto('https://www.dietician.com')
  
});

When('User clicks on My Patients button', async ({ page }) => {
  await page.getByRole('button', { name: 'MyPatient'}).click();
});

Then('Page header {string} should be displayed', async ({page}, arg) => {
  console.log('Page header is displayed')
});
