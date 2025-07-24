//https://singlestore.testrail.io/index.php?/cases/view/2325
import { test, expect } from '@playwright/test';
const { saveVideo } = require('playwright-video');
require('playwright');

test.describe('Login to Customer Portal', () => {
  test('Login to Customer Portal with Valid Data', async ({ page }, testInfo) => {
    // Test requirements
    testInfo.annotations.push({type: 'testrail_case_field', description: 'refs: TR-1'});

    // Enter Username
    testInfo.annotations.push({type: 'testrail_result_comment', description: '1. Click into Username field'});
    await page.goto('https://auth.singlestore.com/auth/realms/memsql/protocol/openid-connect/auth?client_id=Customer-portal-oidc&code_challenge=LLvEoeX2kiJo5oxyNqX-VRI_kVumihXYBdDs8O73CBE&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fauthsvc.singlestore.com%2Fauth%2Foidc%2Frp%2FCustomer%2Fbe5077ed-b0a7-b1ed-be57-d00d1eeffec7%2Fcallback&response_type=code&scope=email+profile+roles+openid+microprofile-jwt&state=365029d4-1429-49da-abaa-db4f2b5c20a4');
    await saveVideo(page, 'LoginValid.mp4', 'test-results/videos');
    await page.getByPlaceholder('you@example.com').click();

    // Enter valid email address
    testInfo.annotations.push({type: 'testrail_result_comment', description: '2. Enter valid email address'});
    await page.getByPlaceholder('you@example.com').fill('sumdum@email.com');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Enter Password
    testInfo.annotations.push({type: 'testrail_result_comment', description: '3. Enter valid password'});
    await page.getByPlaceholder('Enter password here').click();
    await page.getByPlaceholder('Enter password here').fill('insertpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Verify Successful Login
    testInfo.annotations.push({type: 'testrail_result_comment', description: '4. Verify successful login'});
    await page.getByRole('heading', { name: '👋 Welcome, Friend!' }).click();

    // Verify Workspaces are Active
    testInfo.annotations.push({type: 'testrail_result_comment', description: '5. Verify Workspaces running'});
    await expect(page.getByRole('button', { name: 'my-workspace-group' })).toBeVisible();
    await page.getByRole('button', { name: 'my-workspace-group' }).click();
    await expect(page.getByTestId('tab-title-workspaces').getByText('Workspaces')).toBeVisible();
    await page.getByTestId('tab-title-workspaces').getByText('Workspaces').click();
    await expect(page.getByTestId('icon-Active').locator('path')).toBeVisible();

    // Verify Visual Explain Accessible and Choose SQL Editor
    testInfo.annotations.push({type: 'testrail_result_comment', description: '6. Verify Visual Explain'});
    await page.getByRole('link', { name: 'Visual Explain' }).click();
    await page.getByRole('link', { name: 'SQL Editor' }).click();

    // Select Database and Verify
    testInfo.annotations.push({type: 'testrail_result_comment', description: '7. Verify Database'});
    await page.getByLabel('editor-dropdown-selector').click();
    await page.getByLabel('Database').click();
    await page.getByText('information_schema').click();

    // Run Basic SQL Query and Verify Results
    testInfo.annotations.push({type: 'testrail_result_comment', description: '8. Verify SQL Editor'});
    await page.getByTestId('components-overlay').click();
    await page.locator('.view-lines').click();
    await page.getByLabel('SQL Editor;Press Alt+F1 for').fill('SELECT * FROM information_schema.USERS;');
    await page.getByLabel('Run').click();
    await page.getByTestId('results-output-table').getByText('sumdum@email.com', { exact: true }).click();
  });
});
