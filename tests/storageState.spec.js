import test from "@playwright/test";


test("Creating the storageState", async ({page}) => {

    //login to the application
    await page.goto("https://localhost:4200/login");
    await page.getByPlaceholder("username").fill("admin");
    await page.getByPlaceholder("password").fill("admin");
    await page.getByRole("button", {name: "Login"}).click();
    await page.waitForTimeout(5000);

    //save the storageState

    await page.context().storageState({path: "utilities/storageState.json"});

})


