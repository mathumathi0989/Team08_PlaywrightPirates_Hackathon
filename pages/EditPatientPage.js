import {ReusableMethods} from '../utilities/ReusableMethods.js';

export class EditPatientPage{

    constructor(page){
        this.page = page;
        this.helper = new ReusableMethods(page);

        this.editButton = page.locator();
        this.editTitle = page.locator();
        this.editFirstName = page.locator();
        this.editSubmitButton = page.locator();
        this.editCloseButton = page.locator();
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