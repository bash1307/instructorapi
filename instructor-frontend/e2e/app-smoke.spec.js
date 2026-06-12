import { test, expect } from "@playwright/test";

test("admin can login and view instructors page", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await expect(page.getByRole("heading", { name: /instructor portal login/i })).toBeVisible();

  await page.getByPlaceholder("e.g. instructor@academy.com").fill("alicetan@gmail.com");
  await page.getByPlaceholder("Enter password").fill("123456");

  await page.getByRole("button", { name: /sign in/i }).click();

  await expect(page).toHaveURL(/dashboard/);

  await page.getByRole("link", { name: /instructors/i }).click();

  await expect(page).toHaveURL(/instructors/);

  await expect(
    page.getByRole("heading", { name: /instructors/i })
  ).toBeVisible();

  await expect(
    page.getByPlaceholder(/search by name, email, specialization, or status/i)
  ).toBeVisible();
});