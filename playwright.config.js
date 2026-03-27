import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import process from 'process';
import fs from "fs";
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

const storagePath = "auth/storageState.json";
const hasStorage = fs.existsSync(storagePath);

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 1,
  reporter: [["html",{ outputFolder: 'playwright-report', open: 'always' }], ["allure-playwright"]],
  use: {
    baseURL: process.env.APP_URL,
    headless: HEADLESS,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
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
      testMatch: ["**/.features-gen/**/01_LoginAndDashboard.feature.spec.js"],
    },
    // All other tests uses storageState.json
    {
      name: `authenticated-tests - ${BROWSER}`,
      use: {
        ...selectedDevice,
        headless: HEADLESS,
        storageState: hasStorage ? storagePath : undefined,
      },
      testMatch: [
        '**/.features-gen/**/02_MyPatients.feature.spec.js',
        '**/.features-gen/**/03_AddPatientValidation.feature.spec.js',
        '**/.features-gen/**/04_AddPatientFunctional.feature.spec.js',
        '**/.features-gen/**/05_ViewTestReport.feature.spec.js',
        '**/.features-gen/**/06_EditPatient.feature.spec.js',
        '**/.features-gen/**/07_DeletePatient.feature.spec.js',],
    },
  ],
});
