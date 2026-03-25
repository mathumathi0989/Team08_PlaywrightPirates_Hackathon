class MyPatientPage {
  constructor(page) {
    this.page = page;
    this.url = '/readpatients';

    this.pageTitle = page.locator('text=My Patients');
    this.searchBox = page.locator('input[placeholder="Search"]');
    this.patientTable = page.locator('table');
    this.tableRows = page.locator('table tbody tr');
    this.viewTestReportsBtn = page.locator('text=View Previous Test Reports');
   // this.viewDietPlansBtn = page.locator('text=View Previous Diet Plans'); // out of scope
  //  this.createReportBtn = page.locator('text=Create New Report/Plan'); // out of scope
    this.editButton = page.locator('button:has-text("Edit"), .edit-icon');
    this.deleteButton = page.locator('button:has-text("Delete"), .delete-icon');
  }

  async goto() {
    await this.page.goto(this.url);
  }
  async isPageLoaded() {
    return await this.pageTitle.isVisible();
  }

  async searchPatient() {
    await this.searchBox.fill();
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

// out of scope
// async clickDietPlan(index = 0) {
//     await this.viewDietPlansBtn.nth(index).click();
//   }
//   async clickNewReports(index = 0) {
//     await this.createReportBtn.nth(index).click();
//   }

}

module.exports = { MyPatientPage };