import { logger } from "../utilities/logger.js";
import { ReusableMethods } from "../utilities/ReusableMethods.js";

export class AddPatientPage {
  constructor(page) {
    this.page = page;
    this.helper = new ReusableMethods(page);

    //Navigation
    this.addPatientLink = page.getByRole("link", { name: "New Patient" });

    //Modal visibility by title assertion
    this.modal = page.locator("#exampleModal");
    this.modalTitle = page.getByText("Add Patient Details", { exact: true });

    //Input fields
    this.fNameInput = this.modal.getByPlaceholder("First name");
    this.lNameInput = this.modal.getByPlaceholder("Last name");
    this.emailInput = this.modal.getByPlaceholder("Email");
    this.contactNumInput = this.modal.getByPlaceholder("Contact Number");
    this.weightInput = this.modal.getByPlaceholder("Weight");
    this.heightInput = this.modal.getByPlaceholder("Height");
    this.temperatureInput = this.modal.getByPlaceholder("Temperature");
    this.spInput = this.modal.getByPlaceholder("SP");
    this.dpInput = this.modal.getByPlaceholder("DP");

    //Dropdowns
    this.allergiesDD = this.modal.getByPlaceholder("Allergies");
    this.foodPreferenceDD = this.modal.getByPlaceholder("Food Preference");
    this.cuisineCategoryDD = this.modal.getByPlaceholder("Cuisine Category");

    //DatePicker
    // --- Date Picker ---
    this.dobField = this.modal.locator("input[placeholder='Date of Birth']");

    // --- File Upload ---
    this.fileUploadInput = this.modal.locator("input[type='file']");
    this.uploadHealthReportLabel = this.modal.locator("label", {
      hasText: "Upload Health Report",
    });
    this.noFileChosenText = this.modal.locator("span", {
      hasText: "No file chosen",
    });

    // --- Button ---
    this.submitButton = this.modal.getByRole("button", { name: "Submit" });
    this.closeButton = this.modal.getByRole("button", { name: "Close" });

    //--- Scroll ---
    this.modalBody = page.locator(".modal-body");
  }

  async clickAddPatientLink() {
    logger.info("Clicking Add Patient Link from Dashboard111");
    // await this.helper.click(this.addPatientLink);
    // await this.addPatientLink.click();
    //logger.info("Clicked Add PatientLink111");
  }

  async verifyAddPatientModal() {
    logger.info("Waiting for modal to open");
    await this.modal.waitFor({ state: "visible" });
    logger.info("Add Patient modal is open");
  }

  inputFieldMap() {
    return {
      "First Name": this.fNameInput,
      "Last Name": this.lNameInput,
      Email: this.emailInput,
      "Contact Number": this.contactNumInput,
      Weight: this.weightInput,
      Height: this.heightInput,
      Temperature: this.temperatureInput,
      SP: this.spInput,
      DP: this.dpInput,
    };
  }

  getDropdown(dropdownName) {
    const mapping = {
      Allergy: this.allergiesDD,
      "Food Preference": this.foodPreferenceDD,
      "Cuisine Category": this.cuisineCategoryDD,
    };
    const dropdown = mapping[dropdownName];
    if (!dropdown) {
      throw new Error(`Unknown dropdown: ${dropdownName}`);
    }
    return dropdown;
  }

  getDropdownOption(optionText) {
    return this.modal.locator(".multiselect__element", { hasText: optionText });
  }

  // async getAllDropdowns() {
  //   return this.modal.locator("select, [role='combobox'], [class*='dropdown']");
  // }
}
