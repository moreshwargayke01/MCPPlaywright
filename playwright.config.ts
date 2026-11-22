
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 1,

 reporter: [
  ['list'],
  ['allure-playwright']
],

  use: {
    baseURL: 'https://www.saucedemo.com',

    browserName: 'chromium',

    headless: true,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure',

    ...devices['Desktop Chrome']
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ],

  timeout: 30000,

  expect: {
    timeout: 5000
  }
});
