import { test as base, createBdd } from "playwright-bdd";
//import { createBdd } from "playwright-bdd";

// import { LoginPage } from "../pages/LoginPage.js";
// import { DashboardPage } from "../pages/DashboardPage.js";
// import { MyPatientPage } from "../pages/MyPatientPage.js";
import { AddPatientPage } from "../pages/AddPatientPage.js";
// import { EditPatientPage } from "../pages/EditPatientPage.js";
// import { DeletePatientPage } from "../pages/DeletePatientPage.js";
// import { ViewTestReportPage } from "../pages/ViewTestReportPage.js";
import { logger } from "../utilities/logger.js";

export const test = base.extend({
  //   loginPage: async ({ page }, use) => {
  //     await use(new LoginPage(page));
  //   },

  //   dashboardPage: async ({ page }, use) => {
  //     await use(new DashboardPage(page));
  //   },

  //   myPatientPage: async ({ page }, use) => {
  //     await use(new MyPatientPage(page));
  //   },

  addPatientPage: async ({ page }, use) => {
    await use(new AddPatientPage(page));
  },

  // editPatientPage: async ({ page }, use) => {
  //   await use(new EditPatientPage(page));
  // },

  // deletePatientPage: async ({ page }, use) => {
  //   await use(new DeletePatientPage(page));
  // },

  // viewTestReportPage: async ({ page }, use) => {
  //   await use(new ViewTestReportPage(page));
  // },

  logger: async ({}, use) => {
    await use(logger);
  },
});
// All step files must import Given/When/Then from HERE — never from playwright-bdd directly

const { Given, When, Then } = createBdd(test);

export { Given, When, Then };

export { expect } from "@playwright/test";
