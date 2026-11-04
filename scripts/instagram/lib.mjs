// Shared helpers for the Go2Busan Instagram carousel auto-publisher.
// Secrets are read from env by the caller only; nothing here logs or stores tokens.
export const SCHEDULE_FILE = "content/social/instagram/schedule.json";
export const ACCOUNTS = {
  US: { handle: "go2busan.us", tokenEnv: "INSTAGRAM_US_ACCESS_TOKEN" },
  JP: { handle: "go2busan.jp", tokenEnv: "INSTAGRAM_JP_ACCESS_TOKEN" },
  TW: { handle: "go2busan.tw", tokenEnv: "INSTAGRAM_TW_ACCESS_TOKEN" },
};
export const API = "https://graph.instagram.com/v21.0";
export const MAX_CAPTION = 2200;
export const MAX_HASHTAGS = 30;
export const LATE_WINDOW_MIN = 360;   // more than 6h late -> "missed", never auto-posted
export const MAX_ATTEMPTS = 3;

// AI illustrations must never depict real places (site image standards): block place names in prompts.
export const BANNED_PLACE_WORDS = /gwangalli|gwangan|haeundae|jagalchi|gamcheon|taejongdae|busan tower|dongbaek|igidae|nampo|seomyeon|songdo|bexco|광안|해운대|자갈치|감천|태종대|부산타워|동백섬|이기대|남포|서면|송도|広安|海雲台|チャガルチ|甘川|釜山タワー/i;

export const redact = (s) => String(s ?? "").replace(/(access_token=)[^&\s"]+/gi, "$1[redacted]").replace(/IG[A-Za-z0-9_-]{30,}/g, "[redacted]");

export function checkPost(p) {
  const issues = [];
  if (!ACCOUNTS[p.account]) issues.push(`unknown account ${p.account}`);
  if (!p.cards?.length || p.cards.length > 10) issues.push("cards must be 1-10");
  if (p.art) {
    if (p.art.type !== "ai" || !p.art.prompt) issues.push("art needs type \"ai\" and a prompt");
    else if (BANNED_PLACE_WORDS.test(p.art.prompt)) issues.push("AI art prompt names a real place; use a real licensed photo for places");
    if (!/AI/i.test(p.art.credit || "")) issues.push("AI art credit (\"AI-generated\") is required");
  } else {
    if (!p.photo?.url || !p.photo?.credit) issues.push("photo url and credit are required");
    if (!/CC BY|CC0|public domain|Unsplash|own/i.test(p.photo?.credit || "") && !p.photo?.own) issues.push("photo credit/licence missing");
  }
  if (!p.caption || p.caption.length > MAX_CAPTION) issues.push("caption empty or over 2200 chars");
  if ((p.caption.match(/#\w+/g) || []).length > MAX_HASHTAGS) issues.push("too many hashtags");
  if (!p.art && p.photo?.credit && /CC BY/i.test(p.photo.credit) && !/Wikimedia|CC BY/i.test(p.caption)) issues.push("caption must carry the photo credit");
  if (!/^\d{4}-\d\d-\d\dT/.test(p.publish_at_utc || "")) issues.push("publish_at_utc invalid");
  return issues;
}

export function client(token, fetchImpl = fetch) {
  const call = async (path, { method = "GET", params = {} } = {}) => {
    const qs = new URLSearchParams({ ...params, access_token: token });
    const r = await fetchImpl(`${API}${path}${method === "GET" ? `?${qs}` : ""}`, method === "GET" ? {} : { method, headers: { "content-type": "application/x-www-form-urlencoded" }, body: qs });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.error) { const e = new Error(redact(`IG ${method} ${path} ${r.status}: ${j.error?.message || JSON.stringify(j)}`)); e.retryable = r.status >= 500 || j.error?.is_transient === true; throw e; }
    return j;
  };
  return {
    me: () => call("/me", { params: { fields: "user_id,username,account_type" } }),
    child: (igId, image_url) => call(`/${igId}/media`, { method: "POST", params: { image_url, is_carousel_item: "true" } }),
    carousel: (igId, children, caption) => call(`/${igId}/media`, { method: "POST", params: { media_type: "CAROUSEL", children: children.join(","), caption } }),
    status: (id) => call(`/${id}`, { params: { fields: "status_code" } }),
    publish: (igId, creation_id) => call(`/${igId}/media_publish`, { method: "POST", params: { creation_id } }),
    permalink: (id) => call(`/${id}`, { params: { fields: "permalink" } }),
    recent: (igId) => call(`/${igId}/media`, { params: { fields: "caption,permalink,timestamp", limit: "10" } }),
  };
}
