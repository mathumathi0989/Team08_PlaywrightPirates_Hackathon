import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/testFixtures.js";

const { Given, When, Then } = createBdd(test);

Given("User logged into the app and patients already exists", async ({ page }) => {
  await page.goto("/");
});

When("User clicks View Previous Test Reports button for a specific record",async ({ myPatientPage }) => {
    await myPatientPage.viewTestReportsBtn.first().click();
  }
);

// When("User clicks View Previous Test Reports button for a particular record",async ({ myPatientPage }) => {
//     await myPatientPage.viewTestReportsBtn.first().click();
//   }
// );


Then("Corresponding report for that record should be opened",async ({ viewReportPage }) => {
    await expect(viewReportPage.modal).toBeVisible();
  }
);

Then('Title {string} should be displayed', async ({ viewReportPage }, title) => {
  await expect(viewReportPage.title).toHaveText(title);
});


Then("Patient id corresponding to the record selected in My Patients page should be displayed",async ({ viewReportPage }) => {
    await expect(viewReportPage.patientId).toBeVisible();
  }
);

Then("Patient name corresponding to the record selected in My Patients page should be displayed",async ({ viewReportPage }) => {
    await expect(viewReportPage.patientName).toBeVisible();
  }
);

Then("Patient email corresponding to the record selected in My Patients page should be displayed",async ({ viewReportPage }) => {
    await expect(viewReportPage.patientEmail).toBeVisible();
  }
);

Then("Patient contact number corresponding to the record selected in My Patients page should be displayed",async ({ viewReportPage }) => {
    await expect(viewReportPage.patientContact).toBeVisible();
  }
);


Then('Close icon {string} should be displayed', async ({ viewReportPage }) => {
  await expect(viewReportPage.closeIcon).toBeVisible();
});


Then("Reports table should be displayed", async ({ viewReportPage }) => {
  await expect(viewReportPage.reportTable).toBeVisible();
});

Then("Table headers should have {string}, {string}, {string}, {string},{string},{string}", async ({ viewReportPage }, h1, h2, h3, h4, h5, h6) => {
    for (const header of [h1, h2, h3, h4, h5, h6]) {
      await expect(viewReportPage.headerByName(header)).toBeVisible();
    }
  }
);

Then(/Record header should be in the exact order Record Number → File → Uploaded Time → File\/Report Name → Vitals → Identified Health Conditions should be displayed/,
  async ({ viewReportPage }) => {
    const headers = await viewReportPage.getAllHeadersText();
    expect(headers).toEqual([
      "Record Number",
      "File",
      "Uploaded Time",
      "File/Report Name",
      "Vitals",
      "Identified Health Conditions",
    ]);
  }
);


Then("Each report should display a record number", async ({ viewReportPage }) => {
  const text = await viewReportPage.firstRowText();
  expect(text).toMatch(/\d+/);
});

Then("Each report should display View PDF button", async ({ viewReportPage }) => {
  await expect(viewReportPage.viewPdfBtn.first()).toBeVisible();
});

Then("Each report should display uploaded time", async ({ viewReportPage }) => {
  const text = await viewReportPage.firstRowText();
  expect(text).toMatch(/\d{2}-\d{2}-\d{2}/);
});

Then(/Each report should display file\/report name/, async ({ viewReportPage }) => {
  const text = await viewReportPage.firstRowText();
  expect(text).toContain(".pdf");
});

Then("Each report should display vitals information", async ({ viewReportPage }) => {
  const text = await viewReportPage.firstRowText();
  expect(text).toMatch(/Weight|Height|Temperature|BP/i);
});


Then(
  "Pagination controls First, previous, next, last arrows should be displayed",
  async ({ viewReportPage }) => {
    await expect(viewReportPage.nextBtn).toBeVisible();
    await expect(viewReportPage.prevBtn).toBeVisible();
    await expect(viewReportPage.firstBtn).toBeVisible();
    await expect(viewReportPage.lastBtn).toBeVisible();
  }
);

When("User navigates to the first page of My patient record", async ({ viewReportPage }) => {
    await viewReportPage.firstBtn.click().catch(() => {});
  }
);


When("User navigates to the last page of View patient record", async ({ viewReportPage }) => {
    await viewReportPage.lastBtn.click().catch(() => {});
  }
);
