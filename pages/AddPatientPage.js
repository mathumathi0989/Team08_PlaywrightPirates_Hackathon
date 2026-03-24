import { logger } from "../utilities/logger.js";

export class AddPatientPage {
  constructor(page) {
    this.page = page;
    this.addPatientLink = page.getByRole("link", { name: "addPatient" });
    this.modal = page.locator("addPatientModal");
  }

  async clickAddPatientLink() {
    logger.info("Clicking Add Patient Link from Dashboard");
    await this.addPatientLink.click();
    logger.info("Clicked Add PatientLink");
  }

  async verifyAddPatientModal() {
    logger.info("Waiting for modal to open");
    await this.modal.waitFor({ state: "visible" });
    logger.info("Add Patient modal is open");
  }
}
