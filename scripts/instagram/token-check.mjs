// Read-only token check: asks Instagram who each configured token belongs to. Never posts, never prints a token.
import { ACCOUNTS, API } from "./lib.mjs";

export async function checkToken(handle, token, fetchImpl = fetch) {
  if (!token) return { handle, ok: false, reason: "token not set" };
  try {
    const res = await fetchImpl(`${API}/me?fields=username,account_type&access_token=${encodeURIComponent(token)}`);
    const body = await res.json().catch(() => ({}));
    if (!res.ok) return { handle, ok: false, reason: `HTTP ${res.status} ${body?.error?.message || ""}`.trim() };
    if (body.username !== handle) return { handle, ok: false, reason: `token belongs to ${body.username || "unknown"}` };
    return { handle, ok: true, account_type: body.account_type };
  } catch (e) {
    return { handle, ok: false, reason: String(e.message || e) };
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  let bad = 0;
  for (const a of Object.values(ACCOUNTS)) {
    const r = await checkToken(a.handle, process.env[a.tokenEnv]);
    console.log(r.ok ? `OK   ${a.handle} (${r.account_type})` : `FAIL ${a.handle}: ${r.reason}`);
    if (!r.ok) bad++;
  }
  process.exit(bad ? 1 : 0);
}
