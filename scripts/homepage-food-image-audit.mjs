import fs from "node:fs";

const home = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("assets/styles.css", "utf8");

// These are distinct editorial food/history articles shown together on the homepage.
// If a card is added here, it must have its own topic-specific image class and URL.
const foodGuidePaths = [
  "/guides/busan-local-food-guide/",
  "/guides/busan-neighborhood-food-guide/",
  "/guides/pusan-national-university-food-guide/",
  "/guides/beomil-dong-nakgopsae/",
  "/guides/busan-food-stories/",
  "/guides/busan-milmyeon-history/",
  "/guides/busan-eomuk-history/",
  "/guides/geumjeongsanseong-makgeolli/",
  "/guides/geumjeongsanseong-village-food/",
  "/guides/beomeosa-food-guide/"
];

const cards = [];
for (const path of foodGuidePaths) {
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = home.match(new RegExp('<a\\b(?=[^>]*href="' + escaped + '")[^>]*>[\\s\\S]*?<div class="trend-image ([^"]+)"'));
  if (!match) throw new Error("Homepage food guide card missing or has no image class: " + path);
  const classes = match[1].split(/\\s+/).filter(name => name.startsWith("trend-"));
  const imageUrls = [];
  for (const className of classes) {
    const selector = new RegExp("(?:\\.home-refresh )?\\." + className + "\\s*\\{[^}]*background-image\\s*:\\s*url\\([\\"']?([^\\"')]+)", "s");
    const cssMatch = css.match(selector);
    if (cssMatch) imageUrls.push(cssMatch[1]);
  }
  if (imageUrls.length === 0) throw new Error("No CSS background image found for " + path + " (" + classes.join(", ") + ")");
  const uniqueUrls = [...new Set(imageUrls)];
  if (uniqueUrls.length !== 1) throw new Error("Ambiguous image mapping for " + path + ": " + uniqueUrls.join(", "));
  cards.push({ path, className: classes.join(" "), url: uniqueUrls[0] });
}

const seen = new Map();
const duplicates = [];
for (const card of cards) {
  const prior = seen.get(card.url);
  if (prior) duplicates.push(prior + " and " + card.path + " share " + card.url);
  else seen.set(card.url, card.path);
}
if (duplicates.length) {
  console.error("Homepage food-card image reuse detected:\\n- " + duplicates.join("\\n- "));
  process.exit(1);
}
console.log("Homepage food-card image audit passed: " + cards.length + " cards, " + seen.size + " distinct image URLs.");
