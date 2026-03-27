import {test as setup} from "@playwright/test";
import {LoginPage} from '../../pages/LoginPage.js'
import {logger} from '../../utilities/logger.js'
import process from 'process';

setup("Creating the storageState", async ({page}) => {
    const loginPage = new LoginPage(page);
     //login
    logger.info("Storage state - URL opened and logged in");
  
    await loginPage.login(process.env.APP_USERNAME, process.env.APP_PASSWORD);
   
    //save the storageState
    await page.context().storageState({path: "auth/storageState.json"});

})