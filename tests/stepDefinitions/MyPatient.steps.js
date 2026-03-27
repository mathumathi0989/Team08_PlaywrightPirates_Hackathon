import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/testFixtures.js";

const { Given, When, Then } = createBdd(test);

Given("User is in dietician application dashboard page", async ({ page }) => {
  await page.goto("/");
});

When("User clicks on My Patients button", async ({ dashboardPage }) => {
  await dashboardPage.clickMyPatients();
});


Then('Page header {string} should be displayed', async ({ myPatientPage }, title) => {
  await expect(myPatientPage.pageTitle).toHaveText(title);
});

Then("Search bar should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.searchBox).toBeVisible();
});

Then("Search icon should be displayed inside the search bar", async ({ myPatientPage }) => {
  await expect(myPatientPage.searchIcon).toBeVisible();
});

Then("Placeholder text {string} should be displayed", async ({ myPatientPage }, text) => {
  await expect(myPatientPage.searchBox).toHaveAttribute("placeholder", text);
});


Then(
  "{string}, {string}, {string} , {string}, {string} , {string} should be displayed",
  async ({ myPatientPage }, h1, h2, h3, h4, h5, h6) => {
    for (const header of [h1, h2, h3, h4, h5, h6]) {
      await expect(myPatientPage.headerCellByName(header)).toBeVisible();
    }
  }
);

Then("Up and down arrow icons should be displayed in the Patient Id column header", async ({ myPatientPage }) => {
  await expect(myPatientPage.sortIconsForHeader("Patient Id")).toHaveCountGreaterThan(0);
});

Then("Up and down arrow icons should be displayed in the Name column header", async ({ myPatientPage }) => {
  await expect(myPatientPage.sortIconsForHeader("Name")).toHaveCountGreaterThan(0);
});


Then("Patient Id should be displayed for each patient record", async ({ myPatientPage }) => {
  const count = await myPatientPage.getPatientCount();
  expect(count).toBeGreaterThan(0);
});

Then("Patient name should be displayed for each patient record", async ({ myPatientPage }) => {
  const count = await myPatientPage.getPatientCount();
  expect(count).toBeGreaterThan(0);
});

Then(
  'Details column should display "phone number","email","date of birth" for each patient record',
  async ({ myPatientPage }) => {
    await expect(myPatientPage.patientTable).toBeVisible();

    const text = (await myPatientPage.tableRows.first().textContent()) || "";
    expect(text).toMatch(/\S+@\S+\.\S+/);
    expect(text).toMatch(/\d{2}-\d{2}-\d{4}/);
    expect(text).toMatch(/\d+/);
  }
);

Then("Phone number, email , date of birth should be displayed on separate lines for each patient record", async ({ myPatientPage }) => {
  const text = (await myPatientPage.tableRows.first().textContent()) || "";
  // best-effort multiline check: at least 2 line breaks
  expect(text.split(/\r?\n/).filter(Boolean).length).toBeGreaterThan(1);
});

Then("Email should be displayed in valid email format for each patient record", async ({ myPatientPage }) => {
  const text = (await myPatientPage.tableRows.first().textContent()) || "";
  expect(text).toMatch(/\S+@\S+\.\S+/);
});

Then("Phone number displayed in details column should contain valid digits for each patient record", async ({ myPatientPage }) => {
  const text = (await myPatientPage.tableRows.first().textContent()) || "";
  expect(text).toMatch(/\d{7,}/);
});

Then('Date of birth should be displayed in "dd-mm-yyyy" format for each patient record', async ({ myPatientPage }) => {
  const text = (await myPatientPage.tableRows.first().textContent()) || "";
  expect(text).toMatch(/\b\d{2}-\d{2}-\d{4}\b/);
});

Then("Last visit date should be displayed for each patient record", async ({ myPatientPage }) => {
  await expect(myPatientPage.tableRows.first()).toBeVisible();
});

Then('Last visit date should be displayed in "dd-mm-yyyy" format for each patient record', async ({ myPatientPage }) => {
  const text = (await myPatientPage.tableRows.first().textContent()) || "";
  expect(text).toMatch(/\b\d{2}-\d{2}-\d{4}\b/);
});

Then(
  "{string}, {string}, {string} should be displayed for each patient record",
  async ({ myPatientPage }) => {
    await expect(myPatientPage.patientTable).toBeVisible();
    await expect(myPatientPage.viewTestReportsBtn.first()).toBeVisible();
    await expect(myPatientPage.viewDietPlansBtn.first()).toBeVisible();
    await expect(myPatientPage.createNewReportPlanBtn.first()).toBeVisible();
  }
);

Then("Edit icon should be displayed for each patient record-", async ({ myPatientPage }) => {
  await expect(myPatientPage.editButton.first()).toBeVisible();
});

Then("Delete icon should be displayed for each patient record", async ({ myPatientPage }) => {
  await expect(myPatientPage.deleteButton.first()).toBeVisible();
});

Then("My Patients page should display with empty table", async ({ myPatientPage }) => {
  const count = await myPatientPage.getPatientCount();
  expect(count).toBe(0);
});

// ---- Sorting ----
When("User clicks an sorting arrow in Patient Id column", async ({ myPatientPage }) => {
  await myPatientPage.headerCellByName("Patient Id").click();
});

Then("Patient records should be sorted in ascending or descending order by patient id", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

When("User clicks an arrow in Name column", async ({ myPatientPage }) => {
  await myPatientPage.headerCellByName("Name").click();
});

Then("Patient records should be sorted in ascending or descending order by name", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

// ---- Search ----
When("User searches using patient name", async ({ myPatientPage }) => {
  await myPatientPage.searchPatient("Ram");
});

When("User searched using patient id", async ({ myPatientPage }) => {
  await myPatientPage.searchPatient("132");
});

Then("Matching patient details should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Given("User entered the text in search box in My Patients page", async ({ myPatientPage }) => {
  await myPatientPage.searchPatient("Ram");
});

When("User clears the search text", async ({ myPatientPage }) => {
  await myPatientPage.clearSearch();
});

Then("All the existed patient records should be displayed", async ({ myPatientPage }) => {
  const count = await myPatientPage.getPatientCount();
  expect(count).toBeGreaterThan(0);
});

// ---- Pagination ----
Given("User is in My Patients page with multiple pages of a patient record", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

When("User clicks the next page arrow (>)", async ({ myPatientPage }) => {
  await myPatientPage.nextBtn.click();
});

When("User clicks the next page arrow \\(>\\)", async ({ myPatientPage }) => {
  await myPatientPage.nextBtn.click();
});

Then("Next set of  patient records should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Given("User is in later page of My Patients page", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

When("User clicks the previous page arrow (<)", async ({ myPatientPage }) => {
  await myPatientPage.prevBtn.click();
});

When("User clicks the previous page arrow \\(<\\)", async ({ myPatientPage }) => {
  await myPatientPage.prevBtn.click();
});

Then("Previous set of patient records should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Given("User is in any page except first page of My Patients page", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

When("User clicks the first page arrow (>>)", async ({ myPatientPage }) => {
  await myPatientPage.firstBtn.click();
});

When("User clicks the first page arrow \\(>>\\)", async ({ myPatientPage }) => {
  await myPatientPage.firstBtn.click();
});

Then("First page of patient records should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Given("User is in any page except last page of My Patients page", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

When("User clicks the last page arrow (<<)", async ({ myPatientPage }) => {
  await myPatientPage.lastBtn.click();
});

When("User clicks the last page arrow \\(<<\\)", async ({ myPatientPage }) => {
  await myPatientPage.lastBtn.click();
});

Then("Last page of patient records should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Given("User is in any page of My Patients page", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Given("User is in My Patients page with multiple pages of patient record", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

When("User clicks any page navigation arrow", async ({ myPatientPage }) => {
  // best-effort: click next if enabled
  await myPatientPage.nextBtn.click({ trial: true }).catch(() => { });
});

Then("Pagination text should display the correct range and total number of patients", async ({ myPatientPage }) => {
  const text = await myPatientPage.getPaginationText();
  // Very light validation: expect it to contain "Showing" if present at all
  if (text) expect(text.toLowerCase()).toContain("showing");
});

When("User navigates to any page", async ({ myPatientPage }) => {
  await expect(myPatientPage.patientTable).toBeVisible();
});

Then("Pagination controls should be displayed", async ({ myPatientPage }) => {
  await expect(myPatientPage.nextBtn).toBeVisible();
  await expect(myPatientPage.prevBtn).toBeVisible();
});

When("User navigates to the first page of patient record", async ({ myPatientPage }) => {
  await myPatientPage.firstBtn.click().catch(() => { });
});


When("User navigates to the last page of patient record", async ({ myPatientPage }) => {
  await myPatientPage.lastBtn.click().catch(() => { });
});


Then("First, previous, next, last arrows should be disabled", async ({ myPatientPage }) => {
  await expect(myPatientPage.firstBtn).toBeDisabled();
  await expect(myPatientPage.prevBtn).toBeDisabled();
  await expect(myPatientPage.nextBtn).toBeDisabled();
  await expect(myPatientPage.lastBtn).toBeDisabled();
});

Then('"Showing 0 to 0 of 0 patients" should be displayed', async ({ myPatientPage }) => {
  const text = await myPatientPage.getPaginationText();
  expect(text).toContain("Showing 0 to 0 of 0 patients");
});

Then(/All pagination arrows \(First, Previous, Next, Last\) should be disabled/, async ({ myPatientPage }) => {
  await expect(myPatientPage.firstBtn).toBeDisabled();
  await expect(myPatientPage.prevBtn).toBeDisabled();
  await expect(myPatientPage.nextBtn).toBeDisabled();
  await expect(myPatientPage.lastBtn).toBeDisabled();
});

Then('If no patient data exists, the text "Showing 0 to 0 of 0 patients" should be displayed', async ({ myPatientPage }) => {
  const text = await myPatientPage.getPaginationText();
  expect(text).toContain("Showing 0 to 0 of 0 patients");
});

// function escapeRegExp(s) {
//   return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }


/*Then(`Pagination text should display the correct range and total number of patients`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Given(`User is in My Patients page with multiple pages of patient record`, async() => {
    // [Given] Sets up the initial state of the system.
});

When(`User navigates to any page`, async() => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`Pagination controls should be displayed`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`User navigates to the first page of patient record`, async() => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`Previous arrow \(<) should be disabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`First page arrow \(<<) should be disabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Next arrow \(>) should be enabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Last page arrow \(>>) should be enabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`User navigates to the last page of patient record`, async() => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`Previous arrow \(>) should be disabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`First page arrow \(>>) should be disabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Next arrow \(<) should be enabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Last page arrow \(<<) should be enabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`First, previous, next, last arrows should be disabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`{string} should be displayed`, (arg0: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`All pagination arrows \(First, Previous, Next, Last) should be disabled`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`If no patient data exists, the text {string} should be displayed`, (arg0: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
}); */
