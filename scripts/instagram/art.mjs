// Generates AI illustrations (OpenAI Images API) for posts with `art`. Runs in GitHub Actions.
// Needs OPENAI_API_KEY (repository secret). Never used for real places: see BANNED_PLACE_WORDS.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { SCHEDULE_FILE, checkPost, redact } from "./lib.mjs";

export const STYLE = "Flat editorial travel illustration, warm and modern, no text, no letters, no logos, no real people, no real landmarks, subject centered with space around it so it survives a wide crop. ";

export const MODELS = ["gpt-image-2", "gpt-image-1.5", "gpt-image-1"];

export async function generateArt(prompt, { key, fetchImpl = fetch, models = process.env.OPENAI_IMAGE_MODEL ? [process.env.OPENAI_IMAGE_MODEL, ...MODELS] : MODELS }) {
  let last = "no model tried";
  for (const model of models) {
    const r = await fetchImpl("https://api.openai.com/v1/images/generations", {
      method: "POST", headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ model, prompt: STYLE + prompt, size: "1024x1536", n: 1 }) });
    const j = await r.json().catch(() => ({}));
    if (r.ok && j.data?.[0]?.b64_json) return Buffer.from(j.data[0].b64_json, "base64");
    last = redact(`OpenAI image ${r.status} (${model}): ${j.error?.message || "no image returned"}`);
    if (r.status !== 400 && r.status !== 403 && r.status !== 404) break;
  }
  throw new Error(last);
}

export function artTodo(schedule, artDir) {
  return schedule.posts.filter((p) => (p.status === "draft" || p.status === "approved") && p.art &&
    checkPost(p).length === 0 && !existsSync(`${artDir}/${p.id}.png`));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const artDir = opt("--art") || "state/art";
  const todo = artTodo(JSON.parse(readFileSync(SCHEDULE_FILE, "utf8")), artDir);
  if (args.includes("--list")) { console.log(todo.length); process.exit(0); }
  const key = process.env.OPENAI_API_KEY;
  if (todo.length && !key) { console.log(`OPENAI_API_KEY not set; ${todo.length} AI art post(s) skipped.`); process.exit(0); }
  mkdirSync(artDir, { recursive: true });
  let failed = 0;
  for (const p of todo) {
    try { writeFileSync(`${artDir}/${p.id}.png`, await generateArt(p.art.prompt, { key })); console.log(`art ${p.id} ok`); }
    catch (e) { failed++; console.log(`art ${p.id} failed: ${e.message}`); }
  }
  if (failed) process.exit(1);
}
