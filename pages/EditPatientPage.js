import {ReusableMethods} from '../utilities/ReusableMethods.js';

export class EditPatientPage{

    constructor(page){
        this.page = page;
        this.helper = new ReusableMethods(page);

        this.editButton = this.page.locator();
        this.editTitle = this.page.locator();
        this.editFirstName = this.page.locator();
        this.editSubmitButton = this.page.locator();
        this.editCloseButton = this.page.locator();
        this.inputFields = this.page.locator('input');
        this.dropdownFields = this.page.locator('select');
        this.fileUpload = this.page.locator('input[type="file"]');

        this.firstNameField = this.page.locator();
        this.lastNameField = this.page.locator();
        this.emailField = this.page.locator();
        this.contactField = this.page.locator();
        this.allergyField = this.page.locator();
        this.foodPrefField = this.page.locator();
        this.cuisineField = this.page.locator();
        this.dobField = this.page.locator();
        this.vitalsTitle = this.page.locator();
        this.spField = this.page.locator();
        this.dpField = this.page.locator();
        this.weightField = this.page.locator();
        this.heightField = this.page.locator();
        this.tempartureField = this.page.locator();
        this.uploadLabel = this.page.locator();
        this.noFileChosenText = this.page.locator();
        this.calendarIcon = this.page.locator();
        this.errorMessage = this.page.locator();

       
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