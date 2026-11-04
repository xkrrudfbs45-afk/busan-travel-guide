// Generates AI illustrations (OpenAI Images API) for posts with `art`. Runs in GitHub Actions.
// Needs OPENAI_API_KEY (repository secret). Never used for real places: see BANNED_PLACE_WORDS.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { SCHEDULE_FILE, checkPost, redact } from "./lib.mjs";

export const STYLE = "Flat editorial travel illustration, warm and modern, no text, no letters, no logos, no real people, no real landmarks, subject centered with space around it so it survives a wide crop. ";

export const MODELS = ["gpt-image-2", "gpt-image-1.5", "gpt-image-1"];

export async function generateArt(prompt, { key, style = STYLE, fetchImpl = fetch, models = process.env.OPENAI_IMAGE_MODEL ? [process.env.OPENAI_IMAGE_MODEL, ...MODELS] : MODELS }) {
  let last = "no model tried";
  for (const model of models) {
    const r = await fetchImpl("https://api.openai.com/v1/images/generations", {
      method: "POST", headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ model, prompt: style + prompt, size: "1024x1536", n: 1, output_format: "jpeg", output_compression: 90 }) });
    const j = await r.json().catch(() => ({}));
    if (r.ok && j.data?.[0]?.b64_json) return Buffer.from(j.data[0].b64_json, "base64");
    last = redact(`OpenAI image ${r.status} (${model}): ${j.error?.message || "no image returned"}`);
    if (r.status !== 400 && r.status !== 403 && r.status !== 404) break;
  }
  throw new Error(last);
}

export const STYLE_PLACE = "Flat vector editorial travel illustration, clearly stylised and NOT photographic: simplified shapes, limited palette of deep navy, warm yellow, cream and soft blue, subtle grain. No text, no letters, no numbers, no logos, no signs, no people's faces, no map lines or route lines. Leave the lower 40% of the frame calm and dark so text can be placed there. ";

// Background files: one per card. Posts that share art.set (e.g. EN/JP/TW versions of one topic) share the same backgrounds.
export const artFiles = (p) => p.art.prompts
  ? p.art.prompts.map((prompt, i) => ({ file: `${p.art.set}-${String(i + 1).padStart(2, "0")}.jpg`, prompt, style: p.art.stylized ? STYLE_PLACE : STYLE }))
  : [{ file: `${p.id}.jpg`, prompt: p.art.prompt, style: STYLE }];

// Optional gate file: {"sets": ["d01-fireworks"]} limits generation to those background sets (staged rollout, controls API spend).
export const ART_GATE_FILE = "content/social/instagram/art-gate.json";
const gate = () => (existsSync(ART_GATE_FILE) ? JSON.parse(readFileSync(ART_GATE_FILE, "utf8")).sets : null);

export function artTodo(schedule, artDir, allowed = gate()) {
  const seen = new Set();
  const out = [];
  for (const p of schedule.posts) {
    if (!((p.status === "draft" || p.status === "approved") && p.art && checkPost(p).length === 0)) continue;
    if (allowed && p.art.set && !allowed.includes(p.art.set)) continue;
    for (const f of artFiles(p)) if (!seen.has(f.file) && !existsSync(`${artDir}/${f.file}`)) { seen.add(f.file); out.push({ id: p.id, ...f }); }
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const artDir = opt("--art") || "state/art";
  const todo = artTodo(JSON.parse(readFileSync(SCHEDULE_FILE, "utf8")), artDir);
  if (args.includes("--list")) { console.log(todo.length); process.exit(0); }
  const key = process.env.OPENAI_API_KEY;
  if (todo.length && !key) { console.log(`OPENAI_API_KEY not set; ${todo.length} AI art image(s) skipped.`); process.exit(0); }
  mkdirSync(artDir, { recursive: true });
  let failed = 0;
  for (const t of todo) {
    try { writeFileSync(`${artDir}/${t.file}`, await generateArt(t.prompt, { key, style: t.style })); console.log(`art ${t.file} ok`); }
    catch (e) { failed++; console.log(`art ${t.file} failed: ${e.message}`); }
  }
  if (failed) process.exit(1);
}
