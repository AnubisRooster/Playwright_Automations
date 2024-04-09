// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

const testRailOptions = {
  // Whether to add <properties> with all annotations; default is false
  embedAnnotationsAsProperties: true,
  // Where to put the report.
  outputFile: './test-output/junit-report.xml'
};

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  /* (...) */ 
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    //['html', { outputFolder: 'test-results', open: 'never' }],
    ['junit', testRailOptions]
  ],
  use: {
    // Enable video for each test
    video: 'on',
    // Enable trace for each test
    trace: 'on',
  },
  // Set test timeout to 10 minutes
  timeout: 600000,
};

module.exports = config;