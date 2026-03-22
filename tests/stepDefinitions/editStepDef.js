import { createBdd } from "playwright-bdd";
const {Given,When,Then} = createBdd();


Given('open url', async ({}) => {
  console.log("url")
});

When('enter credentials', async ({}) => {
   console.log("entered")
});

Then('dashboard page displayed', async ({}) => {
  console.log("dashboard")
});

