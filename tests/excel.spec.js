import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { readLoginData } from '../utilities/ExcelReader';

test('Login Page Data Driven Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // read data from excel/json
    const testData = await readLoginData();

    for (const data of testData) {
        await page.goto('https://www.dietician.com/login');

        await loginPage.login(data.username, data.password);
    }
});