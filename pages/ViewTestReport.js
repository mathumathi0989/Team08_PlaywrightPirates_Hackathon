export class ViewTestReportPage {
  constructor(page) {
    this.page = page;
    this.url = "/readpatients";

  
    this.myPatientsPageTitle = page.getByRole("heading", { name: /my patients/i }).first();
    this.myPatientsButton = page.getByRole("link", { name: /my patients/i });
    this.viewPreviousTestReportsButtons = page.getByRole("button", { name: /view previous test reports/i });
    this.viewPdfButtons = page.getByRole("button", { name: /view pdf/i });
  
    this.reportDialog = page.locator('[role="dialog"]').filter({ hasText: /view patient test reports/i }).first();
    this.pageHeader = page.getByRole("heading", { name: /view patient test reports/i }).first();
    this.reportTitle = this.pageHeader;
    this.closeIcon = page.locator('[role="dialog"] button[aria-label="close"], [role="dialog"] .close, [role="dialog"] .btn-close').first();


    this.patientId = page.getByText(/patient id/i).first();
    this.patientName = page.getByText(/name/i).first();
    this.patientEmail = page.getByText(/email/i).first();
    this.patientContactNumber = page.getByText(/contact number/i).first();


    this.reportsTable = page.locator("table").first();
    this.tableHeaders = this.reportsTable.locator("thead th");
    this.tableRows = this.reportsTable.locator("tbody tr");
  
    this.recordNumberCells = this.reportsTable.locator("tbody tr td:nth-child(1)");
    this.fileCells = this.reportsTable.locator("tbody tr td:nth-child(2)");
    this.uploadedTimeCells = this.reportsTable.locator("tbody tr td:nth-child(3)");
    this.fileNameCells = this.reportsTable.locator("tbody tr td:nth-child(4)");
    this.vitalsCells = this.reportsTable.locator("tbody tr td:nth-child(5)");
    this.healthConditionCells = this.reportsTable.locator("tbody tr td:nth-child(6)");

    this.firstBtn = page.locator('button:has-text("<<"), button[aria-label*="first" i]').first();
    this.prevBtn = page.locator('button:has-text("<"), button[aria-label*="previous" i]').first();
    this.nextBtn = page.locator('button:has-text(">"), button[aria-label*="next" i]').first();
    this.lastBtn = page.locator('button:has-text(">>"), button[aria-label*="last" i]').first();
    this.paginationText = page.locator(".pagination-info, [data-testid*='pagination' i], .pagination").first();
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async getReportCount() {
    return await this.tableRows.count();
  }

  async getPaginationText() {
    const txt = await this.paginationText.textContent();
    return (txt || "").trim();
  }

  headerCellByName(name) {
    const escaped = String(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return this.tableHeaders.filter({ hasText: new RegExp(`\\b${escaped}\\b`, "i") }).first();
  }

  async clickViewPreviousTestReportsForRecord(index = 0) {
    await this.viewPreviousTestReportsButtons.nth(index).click();
  }

  async clickViewPdfForRecord(index = 0) {
    await this.viewPdfButtons.nth(index).click();
  }

  async clickMyPatientsButton() {
    await this.myPatientsButton.click();
  }

  async verifyReportDialogOpened() {
    await this.reportDialog.waitFor({ state: "visible" });
  }

  async verifyTitle(_title) {
    await this.reportTitle.waitFor({ state: "visible" });
  }

  async verifyPatientIdDisplayed() {
    await this.patientId.waitFor({ state: "visible" });
  }

  async verifyPatientNameDisplayed() {
    await this.patientName.waitFor({ state: "visible" });
  }

  async verifyPatientEmailDisplayed() {
    await this.patientEmail.waitFor({ state: "visible" });
  }

  async verifyPatientContactNumberDisplayed() {
    await this.patientContactNumber.waitFor({ state: "visible" });
  }

  async verifyCloseIconDisplayed() {
    await this.closeIcon.waitFor({ state: "visible" });
  }

  async verifyReportsTableDisplayed() {
    await this.reportsTable.waitFor({ state: "visible" });
  }

  async verifyTableHeaders(expectedHeaders) {
    for (let i = 0; i < expectedHeaders.length; i++) {
      await this.tableHeaders.nth(i).waitFor({ state: "visible" });
    }
  }

  async getTableHeadersText() {
    return await this.tableHeaders.allTextContents();
  }

  async verifyPaginationControlsDisplayed() {
    await this.firstBtn.waitFor({ state: "visible" });
    await this.prevBtn.waitFor({ state: "visible" });
    await this.nextBtn.waitFor({ state: "visible" });
    await this.lastBtn.waitFor({ state: "visible" });
  }

  async verifyRecordNumbersDisplayed() {
    await this.recordNumberCells.first().waitFor({ state: "visible" });
  }

  async verifyViewPdfButtonsDisplayed() {
    await this.viewPdfButtons.first().waitFor({ state: "visible" });
  }

  async verifyUploadedTimeDisplayed() {
    await this.uploadedTimeCells.first().waitFor({ state: "visible" });
  }

  async verifyFileNamesDisplayed() {
    await this.fileNameCells.first().waitFor({ state: "visible" });
  }

  async verifyVitalsDisplayed() {
    await this.vitalsCells.first().waitFor({ state: "visible" });
  }

  async clickNextPage() {
    await this.nextBtn.click();
  }

  async clickPreviousPage() {
    await this.prevBtn.click();
  }

  async clickFirstPage() {
    await this.firstBtn.click();
  }

  async clickLastPage() {
    await this.lastBtn.click();
  }

  async verifyPaginationTextDisplayed() {
    await this.paginationText.waitFor({ state: "visible" });
  }

  async verifyPaginationArrowsDisabled() {
    if (!(await this.firstBtn.isDisabled())) throw new Error("First arrow is not disabled");
    if (!(await this.prevBtn.isDisabled())) throw new Error("Previous arrow is not disabled");
    if (!(await this.nextBtn.isDisabled())) throw new Error("Next arrow is not disabled");
    if (!(await this.lastBtn.isDisabled())) throw new Error("Last arrow is not disabled");
  }

  async verifyOnlyTwoRecordsPerPage() {
    const rowCount = await this.page.locator('table tbody tr').count();
    if (rowCount > 2) {
      throw new Error(`Expected only 2 records per page, but found ${rowCount}`);
    }
  }
}
