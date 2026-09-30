import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || "/opt/google/chrome/chrome",
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const base = process.env.TEST_BASE_URL || "http://localhost:3000";
for (const width of [1440, 390]) {
  await page.setViewportSize({ width, height: 1000 });
  for (const path of [
    "/",
    "/books",
    "/start-here",
    "/free-deal-analyzer",
    "/about",
    "/privacy",
    "/disclaimer",
    "/toolkit",
    "/toolkit/thanks",
  ]) {
    const response = await page.goto(base + path);
    assert.equal(response.status(), 200, path);
    assert.equal(await page.locator("h1").count(), 1, path);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow ${width} ${path}`,
    );
    assert.equal(
      await page.locator('a[href^="/downloads/toolkit"]').count(),
      0,
    );
  }
  await page.goto(base);
  await page.screenshot({
    path: `/tmp/rental-home-${width}.png`,
    fullPage: true,
  });
}
await page.goto(base + "/books");
assert.equal(
  await page.locator('a[href^="https://www.amazon.com/dp/"]').count(),
  6,
);
await page.goto(base + "/toolkit");
assert.ok(
  await page
    .getByRole("button", { name: "Checkout is not connected yet" })
    .isDisabled(),
);
await page.goto(base + "/free-deal-analyzer");
assert.equal(await page.locator("a[download]").count(), 0);
await page.getByLabel("First name", { exact: true }).fill("Reader");
await page.getByLabel("Email address").fill("reader@example.com");
await page.getByRole("checkbox").check();
await page.getByRole("button", { name: "Get the free analyzer" }).click();
await page.getByRole("heading", { name: "Your worksheet is ready." }).waitFor();
assert.match(
  await page.getByRole("status").innerText(),
  /Delivery is being connected/,
);
assert.equal(await page.locator("a[download]").count(), 2);
for (const file of [
  "conservative-rental-deal-analyzer.pdf",
  "conservative-rental-deal-analyzer.csv",
])
  assert.equal(
    (await page.request.get(base + "/downloads/" + file)).status(),
    200,
  );
assert.deepEqual(errors, []);
console.log(
  "Passed: nine routes at desktop/mobile, no overflow, book links, disconnected checkout, signup and downloads.",
);
await browser.close();
