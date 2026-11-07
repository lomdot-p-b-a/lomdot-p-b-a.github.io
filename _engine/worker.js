// Cloudflare Worker: proxy between the lomdot site and Gemini.
// The Gemini key is stored in Cloudflare as a secret named GEMINI_KEY. It never appears on the site or in GitHub.
const ALLOWED_ORIGIN = "https://lomdot-p-b-a.github.io";
// Tried in order; the first one that answers in time is used.
const MODELS = ["gemini-flash-lite-latest", "gemini-2.5-flash-lite", "gemini-flash-latest", "gemini-2.5-flash"];
const TIMEOUT_MS = 25000;

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

async function callGemini(model, key, payload, withThinkingOff) {
  const generationConfig = { temperature: 0.4, maxOutputTokens: 1200 };
  if (withThinkingOff) generationConfig.thinkingConfig = { thinkingBudget: 0 };
  return fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({ ...payload, generationConfig }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, { headers: cors(origin) });
    if (request.method !== "POST" || origin !== ALLOWED_ORIGIN) {
      return new Response("Forbidden", { status: 403, headers: cors(origin) });
    }
    let body;
    try { body = await request.json(); } catch { return new Response("Bad request", { status: 400, headers: cors(origin) }); }
    const system = String(body.system || "").slice(0, 80000);
    const contents = Array.isArray(body.contents) ? body.contents.slice(-12) : [];
    if (!contents.length) return new Response("Bad request", { status: 400, headers: cors(origin) });
    const payload = { systemInstruction: { parts: [{ text: system }] }, contents };

    const tried = [];
    for (const model of MODELS) {
      for (const thinkingOff of [true, false]) {
        try {
          const r = await callGemini(model, env.GEMINI_KEY, payload, thinkingOff);
          const text = await r.text();
          if (r.ok) {
            return new Response(text, { status: 200, headers: { ...cors(origin), "Content-Type": "application/json", "X-Model": model } });
          }
          tried.push(`${model}${thinkingOff ? "" : "+think"}: ${r.status}`);
          if (r.status === 429) {
            return new Response(text, { status: 429, headers: { ...cors(origin), "Content-Type": "application/json" } });
          }
          if (r.status !== 400) break; // 400 may be the thinking setting; other errors: next model
        } catch (e) {
          tried.push(`${model}: ${e.name}`);
          break;
        }
      }
    }
    return new Response(JSON.stringify({ error: { status: "UNAVAILABLE", tried } }), {
      status: 503, headers: { ...cors(origin), "Content-Type": "application/json" },
    });
  },
};
