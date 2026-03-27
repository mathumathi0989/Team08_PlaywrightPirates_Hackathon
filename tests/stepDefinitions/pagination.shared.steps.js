import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/testFixtures.js";

const { Then } = createBdd(test);

function getPaginationPage(fixtures) {
  return fixtures.viewReportPage ?? fixtures.myPatientPage;
}

Then("Previous arrow (<) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.prevBtn).toBeDisabled();
});
Then("Previous arrow \\(<\\) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.prevBtn).toBeDisabled();
});

Then("First page arrow (<<) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.firstBtn).toBeDisabled();
});
Then("First page arrow \\(<<\\) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.firstBtn).toBeDisabled();
});

Then("Next arrow (>) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.nextBtn).toBeEnabled();
});
Then("Next arrow \\(>\\) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.nextBtn).toBeEnabled();
});

Then("Last page arrow (>>) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.lastBtn).toBeEnabled();
});
Then("Last page arrow \\(>>\\) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.lastBtn).toBeEnabled();
});

Then("Previous arrow (>) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.nextBtn).toBeDisabled();
});
Then("Previous arrow \\(>\\) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.nextBtn).toBeDisabled();
});

Then("First page arrow (>>) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.lastBtn).toBeDisabled();
});
Then("First page arrow \\(>>\\) should be disabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.lastBtn).toBeDisabled();
});

Then("Next arrow (<) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.prevBtn).toBeEnabled();
});
Then("Next arrow \\(<\\) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.prevBtn).toBeEnabled();
});

Then("Last page arrow (<<) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.firstBtn).toBeEnabled();
});
Then("Last page arrow \\(<<\\) should be enabled", async ({ viewReportPage, myPatientPage }) => {
  const paginationPage = getPaginationPage({ viewReportPage, myPatientPage });
  await expect(paginationPage.firstBtn).toBeEnabled();
});
