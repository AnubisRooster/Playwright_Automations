import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  page.setDefaultTimeout(61 * 60 * 1000); // Set default timeout to 61 minutes
  page.setDefaultNavigationTimeout(61 * 60 * 1000); // Set default navigation timeout to 61 minutes
  test.setTimeout(61 * 60 * 1000); // Set test timeout to 61 minutes
  await page.goto('https://freebitco.in/signup/?op=s');
  await page.getByRole('link', { name: 'LOGIN' }).click();
  await page.getByText('NO THANKS').first().click();
  await page.getByLabel('Bitcoin Address/E-mail Address').click();
  await page.getByLabel('Bitcoin Address/E-mail Address').fill('atm_mfink@hotmail.com');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Orienta12!@');
  await page.getByLabel('Password', { exact: true }).press('Enter');
  await page.getByRole('button', { name: 'LOGIN!' }).click();
  await page.getByText('NO THANKS').first().click();
  await page.getByRole('button', { name: 'ROLL!' }).click();
  await page.locator('#myModal22').getByText('×').click();
});
