import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/dashboard/browse");
  await expect(page).toHaveTitle("Dashboard: Browse");
});

test.describe("Search Movie", () => {
  test("search movie input", async ({ page }) => {
    await page.goto("/dashboard/browse");

    // Type in the search input
    await page.fill('input[placeholder="Search a movie..."]', "shawsh");

    // Wait for the results to update
    await page.waitForTimeout(500); // Adjust if necessary based on debounce timing

    const movieCard = await page.locator("text=The Shawshank Redemption");
    await expect(movieCard).toBeVisible();
  });

  test("search movie input not found", async ({ page }) => {
    await page.goto("/dashboard/browse");

    // Type in a search input that does not match any movie
    await page.fill(
      'input[placeholder="Search a movie..."]',
      "NonExistentMovie",
    );

    // Wait for the results to update
    await page.waitForTimeout(500); // Adjust if necessary based on debounce timing

    // Check that the "Not found" message is displayed
    const notFoundMessage = await page.locator('h3:has-text("Not found")');
    await expect(notFoundMessage).toBeVisible();
  });
});
