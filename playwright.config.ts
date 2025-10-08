import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/specs',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'tests/reports/html-report', open: 'never' }],
    ['allure-playwright']
  ],
  use: {
   
    headless: false,
    screenshot: 'on',
    trace : 'on',
    video: 'on',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
});
