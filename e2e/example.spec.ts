import { test, expect } from "@playwright/test";

// baseUrl can be found in the playwright.config.ts file.

test("page heading visible", async ({ page }) => {
  await page.goto("/");

  // Expects page to have a heading with the name of Arts Software Project.
  await expect(
    page.getByRole("heading", { name: "Arts Software Project" })
  ).toBeVisible();
});
