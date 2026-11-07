// Cloudflare Worker: proxy between the lomdot site and Gemini.
// The Gemini key is stored in Cloudflare as a secret named GEMINI_KEY. It never appears on the site or in GitHub.
const ALLOWED_ORIGIN = "https://lomdot-p-b-a.github.io";
const MODEL = "gemini-flash-latest";

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
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

    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_KEY },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 1200, thinkingConfig: { thinkingBudget: 0 } },
      }),
    });
    const text = await r.text();
    return new Response(text, { status: r.status, headers: { ...cors(origin), "Content-Type": "application/json" } });
  },
};
