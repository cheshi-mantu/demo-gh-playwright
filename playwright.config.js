const { devices, defineConfig } = require("@playwright/test");

export default defineConfig({
  testDir: "./test",
  reporter: [
    ["list"],
    ['html', { outputFolder: './playwright-report', open: 'never' }],
    ['allure-playwright', {
      resultsDir: "./allure-results",
      environmentInfo: {
        node_version: process.version,
      },
    }],
  ],
});
