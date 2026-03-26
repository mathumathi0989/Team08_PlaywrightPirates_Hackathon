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
        //this.firstName = 
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

  










}