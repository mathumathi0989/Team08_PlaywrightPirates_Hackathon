import {ReusableMethods} from '../utilities/ReusableMethods.js';

export class EditPatientPage{

    constructor(page){
        this.page = page;
        this.helper = new ReusableMethods(page);

        this.editButton = this.page.getByRole('button', { name: 'Edit' });
        this.editTitle = this.page.getByText('Edit Patient');
        this.editFirstName = this.page.getByLabel('First name');
        this.editSubmitButton = this.page.getByRole('button', { name: 'Submit' });
        this.editCloseButton = this.page.getByRole('button', { name: 'Close' });
        this.inputFields = this.page.locator('input');
        this.dropdownFields = this.page.locator('select');
        this.fileUpload = this.page.locator('input[type="file"]');

        this.firstNameField = this.page.getByLabel('First name');
        this.lastNameField = this.page.getByLabel('Last name');
        this.emailField = this.page.getByLabel('Email');
        this.contactField = this.page.getByLabel('Contact Number');
        this.allergyField = this.page.getByLabel('Allergies');
        this.foodPrefField = this.page.getByLabel('Food Preference');
        this.cuisineField = this.page.getByLabel('Cuisine Category');
        this.dobField = this.page.getByLabel('Date of Birth');
        this.vitalsTitle = this.page.getByText('Vitals');
        this.spField = this.page.getByLabel('SP');
        this.dpField = this.page.getByLabel('DP');
        this.weightField = this.page.getByLabel('Weight');
        this.heightField = this.page.getByLabel('Height');
        this.tempartureField = this.page.getByLabel('Temperature');
        this.uploadLabel = this.page.getByText('Choose Files');
        this.noFileChosenText = this.page.getByText('No file chosen');
        this.calendarIcon = this.page.getByRole('button', { name: 'Calendar' });
        this.errorMessage = this.page.locator('.invalid-feedback, .error-message');

       
    }

    async editDeleteAction({edit, deleteAction} = {}){
        if(edit){
            await this.helper.click(this.editButton);
        }
        if(deleteAction){
            await this.helper.click(this.editButton);
        }
    }
    
    async verifyEditTitle() {
        await this.helper.assertVisible(this.editTitle);
    }

    async verifySubmitCloseButton(buttonName){
   
        if(buttonName == 'submit'){
            await this.helper.assertVisible(this.editSubmitButton);
            await this.helper.assertEnabled(this.editSubmitButton);
        }
        else if (buttonName == 'close'){
            await this.helper.assertVisible(this.editCloseButton);
            await this.helper.assertEnabled(this.editCloseButton);
        }
    }

    #fieldMap(){
        return {
            'First Name': this.firstNameField,
            'Last Name': this.lastNameField,
            'Email': this.emailField,
            'Contact Number': this.contactField,
            'Allergy': this.allergyField,
            'Food Preference': this.foodPrefField,
            'Cuisine Category': this.cuisineField,
            'Date of Birth': this.dobField,
        };
    }

    #vitalMap(){
        return {
            'Weight': this.weightField,
            'Height': this.heightField,
            'Temperature': this.tempartureField,
            'SP': this.spField,
            'DP': this.dpField,
        };
    }

    async verifyFieldPopulated(fieldName){
        const locator = this.#fieldMap()[fieldName];
        await this.helper.assertVisible(locator);
       if(!await locator.inputValue()){
        throw new Error();
       }
    }
  
     async verifyVitalsTitle(){
        await this.helper.assertVisible(this.vitalsTitle);
     }

     async clearFields(fieldName){
          const locator = this.#fieldMap()[fieldName];
          await locator.clear();

     }
     async verifyUploadHealthReportLabel(){
        await this.helper.assertVisible(this.uploadLabel);
     }

  
     async verifyNoFileChosenText(){
        await this.helper.assertVisible(this.noFileChosenText);
     }

     async editFieldAndSubmit(fieldName, value){
        const locator = this.#fieldMap()[fieldName]?? this.#vitalMap()[fieldName];
        await this.helper.fill(locator,value);
        await this.helper.click(this.editSubmitButton);
     }

     async verifyFieldUpdatedOnPatientPage(fieldName){
     const tableCell = this.page.locator(`[data-testid="patient-${fieldName.toLowerCase().replace(/ /g, '-')}"]`);
     await this.helper.assertVisible(tableCell);
     }

     async verifyVitalUpdated(vitalName){
        const cell = this.page.locator(`[data-testid="patient-${vitalName.toLowerCase()}"]`);
     await this.helper.assertVisible(cell);
     }

     async clickDobField(){
    await this.helper.click(this.dobField);
     }

     async uploadFile(filePath){
        await this.fileUpload.setInputFiles(filePath);
     }

     async verifyFileUploadSuccess(){
     const successIndicator = this.page.locator('');
     await this.helper.assertVisible(successIndicator);
     }

     async makeUnsavedChange(fieldName, value){
       const locator = this.#fieldMap()[fieldName]??this.#vitalMap()[fieldName];
        await this.helper.fill(locator, String(value));
     }

     async verifyDialogClosed(){
        await this.helper.assertNotVisible(this.editTitle);
     }
     

     async verifyCalendarVisible(){
       await this.helper.assertVisible(this.calendarIcon);
     }

     async verifyErrorMessage(expectedMessage){
        await this.helper.assertText(this.errorMessage,expectedMessage);
     }

     async verifyDialogClose(){
        await this.helper.assertNotVisible(this.editTitle);
     }





   










}