export class MyPatientPage {
  constructor(page) {
    this.page = page;
    this.url = "/readpatients";

    this.pageHeader = page.getByRole("heading", { name: /my patients/i }).first();
    this.searchBox = page.locator('input[placeholder*="Search"]').first();
    this.searchIcon = page.locator('input[placeholder*="Search"]')
    this.patientTable = page.locator("table").first();
    this.tableHeaderCells = this.patientTable.locator("thead tr th");
    this.tableRows = this.patientTable.locator("tbody tr");

    this.viewTestReportsBtn = this.patientTable.getByRole("button", { name: /view previous test reports/i });
    this.viewDietPlansBtn = this.patientTable.getByRole("button", { name: /view previous diet plans/i });
    this.createNewReportPlanBtn = this.patientTable.getByRole("button", { name: /create new report\/plan/i });
    this.editButton = this.patientTable.getByRole("button", { name: /Edit/i });
    this.deleteButton = this.patientTable.getByRole("button", { name: /Delete/i });

    this.paginationText = page.locator(".pagination-info, [data-testid*='pagination' i], .pagination").first();
    this.firstBtn = page.locator('button:has-text("<<"), button[aria-label*="first" i]').first();
    this.prevBtn = page.locator('button:has-text("<"), button[aria-label*="previous" i]').first();
    this.nextBtn = page.locator('button:has-text(">"), button[aria-label*="next" i]').first();
    this.lastBtn = page.locator('button:has-text(">>"), button[aria-label*="last" i]').first();
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async searchPatient(name) {
    await this.searchBox.fill(name);
  }

  async clearSearch() {
    await this.searchBox.fill("");
  }

  async getPatientCount() {
    return await this.tableRows.count();
  }

  async getPaginationText() {
    const txt = await this.paginationText.textContent();
    return (txt || "").trim();
  }

  headerCellByName(name) {
    const escaped = String(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return this.tableHeaderCells.filter({ hasText: new RegExp(`\\b${escaped}\\b`, "i") }).first();
  }

  sortIconsForHeader(headerName) {

    const th = this.headerCellByName(headerName);
    return th.locator("svg, [data-testid*='sort' i], button");
  }

  async clickViewReports(index = 0) {
    await this.viewTestReportsBtn.nth(index).click();
  }

  async clickEdit(index = 0) {
    await this.editButton.nth(index).click();
  }

  async clickDelete(index = 0) {
    await this.deleteButton.nth(index).click();
  }

}
