// pages/ViewPatientTestReportsPage.js

import { ReusableMethods } from '../utilities/ReusableMethods.js';

export class ViewPatientTestReportsPage {
  constructor(page) {
    this.page = page;
    this.helper = new ReusableMethods(page);

    // My Patients page
    this.myPatientsPageTitle = page.getByText(/my patients/i);
    this.viewPreviousTestReportsButtons = page.getByRole('button', { name: /view previous test reports/i });
    this.viewPdfButtons = page.getByRole('button', { name: /view pdf/i });
    this.myPatientsButton = page.getByRole('link', { name: /my patients/i });

    // Dialog / modal
    this.reportDialog = page.locator('[role="dialog"]').filter({ hasText: /view patient test reports/i }).first();
    this.reportTitle = page.getByText(/view patient test reports/i).first();
    this.closeIcon = page.locator('[role="dialog"] button[aria-label="close"], [role="dialog"] .close, [role="dialog"] .btn-close').first();

    // Patient info section
    this.patientId = page.locator('text=/patient id/i').first();
    this.patientName = page.locator('text=/name/i').first();
    this.patientEmail = page.locator('text=/email/i').first();
    this.patientContactNumber = page.locator('text=/contact number/i').first();

    // Table
    this.reportsTable = page.locator('table').first();
    this.tableHeaders = page.locator('table thead th');

    // Individual columns
    this.recordNumberCells = page.locator('table tbody tr td:nth-child(1)');
    this.fileCells = page.locator('table tbody tr td:nth-child(2)');
    this.uploadedTimeCells = page.locator('table tbody tr td:nth-child(3)');
    this.fileNameCells = page.locator('table tbody tr td:nth-child(4)');
    this.vitalsCells = page.locator('table tbody tr td:nth-child(5)');
    this.healthConditionCells = page.locator('table tbody tr td:nth-child(6)');

    // Pagination
    this.firstPageArrow = page.locator('button').filter({ hasText: /^<<$|^»$|^first$/i }).first();
    this.previousPageArrow = page.locator('button').filter({ hasText: /^<$|^‹$|^previous$/i }).first();
    this.nextPageArrow = page.locator('button').filter({ hasText: /^>$|^›$|^next$/i }).first();
    this.lastPageArrow = page.locator('button').filter({ hasText: /^>>$|^«$|^last$/i }).first();
    this.paginationText = page.locator('text=/showing\\s+\\d+\\s+to\\s+\\d+\\s+of\\s+\\d+/i').first();
  }

  async clickViewPreviousTestReportsForRecord(index = 0) {
    await this.helper.click(this.viewPreviousTestReportsButtons.nth(index));
  }

  async clickViewPdfForRecord(index = 0) {
    await this.helper.click(this.viewPdfButtons.nth(index));
  }

  async clickMyPatientsButton() {
    await this.helper.click(this.myPatientsButton);
  }

  async verifyReportDialogOpened() {
    await this.helper.assertVisible(this.reportDialog);
  }

  async verifyTitle(title) {
    await this.helper.assertVisible(this.reportTitle);
  }

  async verifyPatientIdDisplayed() {
    await this.helper.assertVisible(this.patientId);
  }

  async verifyPatientNameDisplayed() {
    await this.helper.assertVisible(this.patientName);
  }

  async verifyPatientEmailDisplayed() {
    await this.helper.assertVisible(this.patientEmail);
  }

  async verifyPatientContactNumberDisplayed() {
    await this.helper.assertVisible(this.patientContactNumber);
  }

  async verifyCloseIconDisplayed() {
    await this.helper.assertVisible(this.closeIcon);
  }

  async verifyReportsTableDisplayed() {
    await this.helper.assertVisible(this.reportsTable);
  }

  async verifyTableHeaders(expectedHeaders) {
    for (let i = 0; i < expectedHeaders.length; i++) {
      await this.helper.assertVisible(this.tableHeaders.nth(i));
    }
  }

  async getTableHeadersText() {
    return await this.tableHeaders.allTextContents();
  }

  async verifyPaginationControlsDisplayed() {
    await this.helper.assertVisible(this.firstPageArrow);
    await this.helper.assertVisible(this.previousPageArrow);
    await this.helper.assertVisible(this.nextPageArrow);
    await this.helper.assertVisible(this.lastPageArrow);
  }

  async verifyRecordNumbersDisplayed() {
    await this.helper.assertVisible(this.recordNumberCells.first());
  }

  async verifyViewPdfButtonsDisplayed() {
    await this.helper.assertVisible(this.viewPdfButtons.first());
  }

  async verifyUploadedTimeDisplayed() {
    await this.helper.assertVisible(this.uploadedTimeCells.first());
  }

  async verifyFileNamesDisplayed() {
    await this.helper.assertVisible(this.fileNameCells.first());
  }

  async verifyVitalsDisplayed() {
    await this.helper.assertVisible(this.vitalsCells.first());
  }

  async clickNextPage() {
    await this.helper.click(this.nextPageArrow);
  }

  async clickPreviousPage() {
    await this.helper.click(this.previousPageArrow);
  }

  async clickFirstPage() {
    await this.helper.click(this.firstPageArrow);
  }

  async clickLastPage() {
    await this.helper.click(this.lastPageArrow);
  }

  async verifyPaginationTextDisplayed() {
    await this.helper.assertVisible(this.paginationText);
  }

  async verifyPaginationArrowsDisabled() {
    await this.helper.assertDisabled(this.firstPageArrow);
    await this.helper.assertDisabled(this.previousPageArrow);
    await this.helper.assertDisabled(this.nextPageArrow);
    await this.helper.assertDisabled(this.lastPageArrow);
  }

  async verifyOnlyTwoRecordsPerPage() {
    const rowCount = await this.page.locator('table tbody tr').count();
    if (rowCount > 2) {
      throw new Error(`Expected only 2 records per page, but found ${rowCount}`);
    }
  }
}
