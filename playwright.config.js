import { defineConfig, devices, firefox, webkit } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const BROWSER = process.env.BROWSER || "chromium";
const HEADLESS = process.env.HEADLESS !== "false";

const testDir = defineBddConfig({
  features: "tests/features/**/*.feature",
  steps: ["tests/stepDefinitions/**/*.js", "tests/fixtures/testFixtures.js"],
});

const browserDevices = {
  chromium: devices["Desktop Chrome"],
  firefox: devices["Desktop Firefox"],
   webkit: devices["Desktop Safari"],
  edge: devices["Desktop Edge"],
};

const selectedDevice = browserDevices[BROWSER] || devices["Desktop Chrome"];

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [["html"], ["allure-playwright"]],
  use: {
    baseURL: process.env.APP_URL,
    headless: HEADLESS,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    retries: 2,
  },

  projects: [
    {
      //Runs first and creates storageState.json
      name: `setup - ${BROWSER}`,
      testDir: "tests/setup",
      testMatch: ["storageState.js"],
      use: {
        ...selectedDevice,
        headless: HEADLESS,
      },
    },

    {
      // No storage session needed for login tests
      name: `login tests - ${BROWSER}`,
      use: {
        ...selectedDevice,
        headless: HEADLESS,
      },
      testMatch: ["**/.features-gen/**/loginmodule.feature.spec.js"],
    },
    // All other tests uses storageState.json
    {
      name: `authenticated-tests - ${BROWSER}`,
      use: {
        ...selectedDevice,
        headless: HEADLESS,
        storageState: "auth/storageState.json",
      },
      testMatch: [
        // '**/.features-gen/**/EditPatient.feature.spec.js',
        // '**/.features-gen/**/DeletePatient.feature.spec.js',],

        "**/.features-gen/**/*.feature.spec.js",
      ],
      //dependencies: [`setup - ${BROWSER}`],
    },
  ],
});
