// console.log("This is my new file ");
const { test, expect } = require('@playwright/test');

// Step 2: Use tools
test('example', async ({ page }) => {
  await expect(page).toHaveTitle(/Google/);
// });

test('example', async ({ page }) => {
  console.log("Launching browser...");

  await page.goto('https://www.google.com');

  console.log("Checking title...");

  await expect(page).toHaveTitle(/Google/);

  console.log("Test completed!");
});

     
