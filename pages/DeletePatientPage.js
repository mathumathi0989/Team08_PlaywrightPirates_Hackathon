import { ReusableMethods } from "../utilities/ReusableMethods";
import {expect} from '@playwright/test';

export class DeletePatientPage{

constructor(page){
this.page = page;
this.helper = new ReusableMethods(page);
this.myPatients = this.page.locator('');
this.deleteIconButton = this.page.locator('');
this.searchInput = this.page.locator('');
this.toastMessage = this.page.locator('');

}
    
async clickMyPatients(){
    await this.helper.click(this.myPatients);
}
async clickDeleteIcon(){
  await this.helper.click(this.deleteIconButton);
}

async searchPatient(patientName){
await this.helper.fill(this.searchInput, patientName);
await this.searchInput.press('Enter');
}

async handleAlert(action = 'accept') {
this.page.once('dialog', async (dialog) => {
console.log('Alert message:', dialog.message());
if (action === 'accept') {
await dialog.accept();
} 
else if (action === 'dismiss') {
await dialog.dismiss();
} else {
throw new Error(`Invalid alert action: ${action}`);
}
});
}

async verifyPatientRemoved(patientName){
    const patientRow = this.page.locator('table tr', { hasText: patientName });
    await expect(patientRow).not.toBeVisible();

}

async verifyPatientRetains(patientName){
    const patientRow = this.page.locator('table tr', { hasText: patientName });
    await expect(patientRow).toBeVisible();

}

async verifyToastMessage(){
    await this.helper.assertVisible(this.toastMessage);
}

}