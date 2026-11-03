import fs from "node:fs";

const analytics = fs.readFileSync("assets/js/analytics.js", "utf8");
const workflow = fs.readFileSync(".github/workflows/lighthouse-weekly.yml", "utf8");
const homepages = [
  ["index.html", "en"],
  ["ja/index.html", "ja"],
  ["zh-tw/index.html", "zh-TW"]
];

const requiredAnalyticsChecks = [
  [analytics.includes("const isGuidePath = /^") && analytics.includes("zh-tw\\/") && analytics.includes("ja\\/") && analytics.includes("guides\\/"), "localized guide path matcher"],
  [analytics.includes("guide_locale: guideLocale"), "guide locale event parameter"],
  [analytics.includes("local_experience_card"), "local experience card placement"]
];

for (const [passed, label] of requiredAnalyticsChecks) {
  if (!passed) {
    throw new Error("Analytics navigation audit failed: missing " + label);
  }
}

for (const [path, locale] of homepages) {
  const html = fs.readFileSync(path, "utf8");
  const count = (html.match(/data-local-experience-card/g) || []).length;
  if (count !== 3) {
    throw new Error(path + " should contain exactly 3 tracked local-experience cards; found " + count);
  }
}

for (const path of [
  "https://go2busan.com/guides/busan-three-days/",
  "https://go2busan.com/ja/guides/three-days/",
  "https://go2busan.com/zh-tw/guides/three-days/"
]) {
  if (!workflow.includes(path)) {
    throw new Error("Weekly Lighthouse coverage missing itinerary: " + path);
  }
}

console.log("Analytics navigation audit passed: localized guide paths, event parameters, homepage cards, and Lighthouse itinerary coverage.");
