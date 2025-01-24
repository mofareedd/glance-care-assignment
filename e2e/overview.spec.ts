import test, { expect } from "@playwright/test";

test.describe("/dashboard Page", () => {
  test("should redirect to overview page", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard/overview");
  });
});
