import {test as setup} from "@playwright/test";
import {LoginPage} from '../../pages/LoginPage.js'

setup("Creating the storageState", async ({page}) => {
    const loginPage = new LoginPage(page);
    //login
    console.log("Storage state step -- url opened and logged in ");
    
    //await loginPage.login(process.env.APP_USERNAME, process.env.APP_PASSWORD);
    await page.waitForTimeout(5000);

    //save the storageState
    await page.context().storageState({path: "auth/storageState.json"});

})