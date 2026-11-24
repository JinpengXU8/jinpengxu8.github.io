const { test, expect } = require("@playwright/test");
const { PNG } = require("pngjs");
const pixelmatchModule = require("pixelmatch");
const pixelmatch = pixelmatchModule.default || pixelmatchModule;
const { preparePage, stabilizeVisuals } = require("./helpers");

const pages = [
  { path: "/al-folio/", title: "Jinpeng Xu", sections: ["Research Interests", "news"] },
  { path: "/al-folio/publications/", title: "publications", sections: ["Journal Papers", "Conference Papers", "Under Review", "Working Papers"] },
  { path: "/al-folio/projects/", title: "projects", sections: ["research"] },
];

// Compare the persistent navigation with the PR's base revision. Site content can
// change without requiring a new reference image for every news or paper update.
async function compareNavigation(page, context, route, theme, testInfo) {
  if (!process.env.BASELINE_URL) return;

  const baseline = await context.newPage();
  try {
    await preparePage(baseline, theme);
    const response = await baseline.goto(new URL(route, process.env.BASELINE_URL).toString(), { waitUntil: "networkidle" });
    expect(response.ok()).toBeTruthy();
    await stabilizeVisuals(baseline);
    await baseline.evaluate(() => document.fonts.ready);
    await page.evaluate(() => document.fonts.ready);

    const before = PNG.sync.read(await baseline.locator("#navbar").screenshot());
    const after = PNG.sync.read(await page.locator("#navbar").screenshot());
    expect({ width: after.width, height: after.height }).toEqual({ width: before.width, height: before.height });

    const diff = new PNG({ width: before.width, height: before.height });
    const changed = pixelmatch(before.data, after.data, diff.data, before.width, before.height, { threshold: 0.1, includeAA: false });
    const ratio = changed / (before.width * before.height);
    if (ratio > 0.02) {
      await testInfo.attach("baseline-navigation", { body: PNG.sync.write(before), contentType: "image/png" });
      await testInfo.attach("current-navigation", { body: PNG.sync.write(after), contentType: "image/png" });
      await testInfo.attach("navigation-difference", { body: PNG.sync.write(diff), contentType: "image/png" });
    }
    expect(ratio).toBeLessThanOrEqual(0.02);
  } finally {
    await baseline.close();
  }
}

for (const theme of ["light", "dark"]) {
  for (const entry of pages) {
    test(`${entry.title}: layout and navigation (${theme})`, async ({ page, context }, testInfo) => {
      await preparePage(page, theme);
      const response = await page.goto(entry.path, { waitUntil: "networkidle" });
      expect(response.ok()).toBeTruthy();
      await stabilizeVisuals(page);

      await expect(page.locator("#navbar")).toBeVisible();
      await expect(page.getByRole("heading", { name: entry.title, level: 1, exact: true })).toBeVisible();
      for (const section of entry.sections) {
        await expect(page.getByRole("heading", { name: section, exact: true })).toBeVisible();
      }
      if (entry.path.endsWith("/publications/")) {
        await expect(page.locator(".publications li").first()).toBeVisible();
      }
      if (entry.path.endsWith("/projects/")) {
        await expect(page.locator(".projects .card").first()).toBeVisible();
      }

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
      await compareNavigation(page, context, entry.path, theme, testInfo);
    });
  }
}

test("mobile navigation opens and closes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile navigation only");
  await preparePage(page, "light");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  const toggle = page.locator(".navbar-toggler").first();
  const menu = page.locator(".navbar-collapse").first();
  await toggle.click();
  await expect(menu).toHaveClass(/show/);
  await toggle.click();
  await expect(menu).not.toHaveClass(/show/);
});
