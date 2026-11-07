/* AI study helper: side chat that answers questions about the current lomda, using Gemini.
   Needs window.AI_CFG = {key:"...", model:"..."} from ai-config.js. */
(function(){
  const CFG = window.AI_CFG || {};
  const KEY = (CFG.key || "").trim();
  const MODEL = CFG.model || "gemini-flash-latest";
  const ENABLED = KEY && !/^PASTE/.test(KEY);

  const css = `
  .ai-fab{position:fixed;inset-inline-start:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:60;display:flex;align-items:center;gap:8px;border:0;border-radius:999px;padding:12px 16px;background:var(--ink,#1b2230);color:var(--surface,#fff);font:600 15px/1 Rubik,system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.18);cursor:pointer}
  .ai-fab svg{width:20px;height:20px}
  .ai-panel{position:fixed;z-index:61;inset-inline-start:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));width:min(400px,calc(100vw - 32px));height:min(600px,calc(100vh - 32px));display:flex;flex-direction:column;background:var(--surface,#fff);color:var(--ink,#1b2230);border:1px solid var(--line,#dde2ea);border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,.22);overflow:hidden;direction:rtl}
  .ai-panel[hidden]{display:none}
  .ai-head{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--line,#dde2ea)}
  .ai-head b{flex:1;font-size:16px}
  .ai-head small{display:block;font-weight:400;color:var(--muted,#667);font-size:12px;margin-top:2px}
  .ai-x{border:0;background:none;font-size:22px;line-height:1;cursor:pointer;color:var(--muted,#667);padding:4px 8px}
  .ai-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
  .ai-m{max-width:88%;padding:10px 12px;border-radius:14px;line-height:1.6;font-size:15px;white-space:normal;word-wrap:break-word}
  .ai-m p{margin:0 0 .5em}.ai-m p:last-child{margin:0}.ai-m ul{margin:.3em 0;padding-inline-start:1.2em}
  .ai-u{align-self:flex-start;background:var(--accent,#2457a6);color:#fff;border-end-start-radius:4px}
  .ai-a{align-self:flex-end;background:var(--raised,#f1f3f7);border-end-end-radius:4px}
  .ai-a.err{background:#fdecec;color:#8a1c1c}
  .ai-hint{color:var(--muted,#667);font-size:14px;line-height:1.6}
  .ai-sug{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
  .ai-sug button{border:1px solid var(--line,#dde2ea);background:var(--surface,#fff);color:inherit;border-radius:999px;padding:6px 10px;font:14px Rubik,system-ui,sans-serif;cursor:pointer}
  .ai-form{display:flex;gap:8px;padding:10px;border-top:1px solid var(--line,#dde2ea)}
  .ai-form textarea{flex:1;resize:none;border:1px solid var(--line,#dde2ea);border-radius:12px;padding:10px;font:15px/1.4 Rubik,system-ui,sans-serif;max-height:120px;background:var(--surface,#fff);color:inherit}
  .ai-form button{border:0;border-radius:12px;padding:0 16px;background:var(--accent,#2457a6);color:#fff;font:600 15px Rubik,system-ui,sans-serif;cursor:pointer}
  .ai-form button:disabled{opacity:.5}
  .ai-dots::after{content:"…";animation:aid 1s steps(3) infinite}@keyframes aid{0%{opacity:.3}50%{opacity:1}}
  .ai-note{font-size:11.5px;color:var(--muted,#667);padding:0 12px 8px;text-align:center}`;
  document.head.insertAdjacentHTML("beforeend", "<style>"+css+"</style>");

  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>';
  const fab = document.createElement("button");
  fab.className = "ai-fab"; fab.type = "button";
  fab.innerHTML = icon + "<span>שאל את העוזר</span>";
  const panel = document.createElement("section");
  panel.className = "ai-panel"; panel.hidden = true; panel.setAttribute("aria-label","עוזר לימוד");
  panel.innerHTML = `<div class="ai-head"><b>עוזר לימוד<small>עונה לפי הסיכום של הלומדה הזו</small></b><button class="ai-x" type="button" aria-label="סגירה">×</button></div>
    <div class="ai-log"></div>
    <form class="ai-form"><textarea rows="1" placeholder="מה לא ברור? אפשר לשאול כל דבר…"></textarea><button type="submit">שלח</button></form>
    <div class="ai-note">התשובות נוצרות ע״י AI ועלולות לטעות. אל תכתבו פרטים אישיים.</div>`;
  document.body.append(fab, panel);
  const log = panel.querySelector(".ai-log"), form = panel.querySelector("form"),
        ta = form.querySelector("textarea"), send = form.querySelector("button");

  // ---- context from the page ----
  function g(name){ try{ return eval(name) }catch(e){ return undefined } }
  function strip(html){ const d=document.createElement("div"); d.innerHTML=html; d.querySelectorAll("svg,script,style").forEach(e=>e.remove()); return d.innerText.replace(/\n{3,}/g,"\n\n").trim() }
  function summaryText(){
    const SUM = g("SUM"); if(SUM==null) return "";
    if(typeof SUM==="string") return strip(SUM);
    if(Array.isArray(SUM)) return SUM.map(x=>typeof x==="string"?strip(x):strip((x.h||x.title||"")+"\n"+(x.html||x.body||""))).join("\n\n");
    if(typeof SUM==="object") return Object.values(SUM).map(v=>typeof v==="string"?strip(v):"").join("\n\n");
    return "";
  }
  function currentTopic(){
    const S=g("S"), T=g("T");
    try{ if(S&&S.at&&T&&T[S.at.ti]) return T[S.at.ti].title||"" }catch(e){}
    return "";
  }
  function screenText(){
    const app=document.getElementById("app")||document.querySelector("main")||document.body;
    const clone=app.cloneNode(true); clone.querySelectorAll(".ai-panel,.ai-fab,svg").forEach(e=>e.remove());
    return (clone.innerText||"").replace(/\s+\n/g,"\n").slice(0,2500);
  }
  function system(){
    const C=g("CONFIG")||{}, T=g("T")||[];
    const topics=T.map((t,i)=>(i+1)+". "+(t.title||"")).join("\n");
    return `אתה עוזר לימוד לסטודנטים לתואר ראשון בפסיכולוגיה ומנהל עסקים, בתוך לומדה על: "${C.title||document.title}"${C.eyebrow?" ("+C.eyebrow+")":""}.
ענה תמיד בעברית פשוטה וברורה, בקצרה (בדרך כלל עד 150 מילים), עם דוגמה קטנה כשזה עוזר.
התבסס על הסיכום של הלומדה שמופיע למטה. אם השאלה מבקשת לקשר בין נושאים, הסבר איך הם מתחברים לפי הסיכום.
אם משהו לא מופיע בסיכום, אמור זאת במפורש ("זה לא מופיע בסיכום של הלומדה"), ורק אז אפשר להוסיף הסבר כללי קצר ולסמן אותו כ"ידע כללי, לא מהחומר".
אל תמציא שמות חוקרים, מספרים או ממצאים. אל תיתן תשובות לשאלות המבחן של הלומדה ישירות; עזור להבין למה.

נושאי הלומדה:
${topics}

=== הסיכום של הלומדה ===
${summaryText().slice(0,60000)}`;
  }

  // ---- chat ----
  const hist = [];
  function md(t){
    const esc=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    const lines=esc.split(/\n/); let out="", inL=false;
    for(let l of lines){
      l=l.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
      const li=l.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)/);
      if(li){ if(!inL){out+="<ul>";inL=true} out+="<li>"+li[1]+"</li>"; continue }
      if(inL){out+="</ul>";inL=false}
      if(l.trim()) out+="<p>"+l+"</p>";
    }
    return out+(inL?"</ul>":"");
  }
  function bubble(cls, html){ const d=document.createElement("div"); d.className="ai-m "+cls; d.innerHTML=html; log.append(d); log.scrollTop=log.scrollHeight; return d }
  function intro(){
    log.innerHTML="";
    const d=document.createElement("div"); d.className="ai-hint";
    d.innerHTML = ENABLED
      ? "אפשר לשאול על כל חלק בלומדה: מושג שלא הבנת, איך שני נושאים מתחברים, או לבקש דוגמה נוספת."
      : "העוזר עוד לא הופעל באתר (חסר מפתח). ברגע שיוגדר, הוא יעבוד כאן.";
    if(ENABLED){
      const s=document.createElement("div"); s.className="ai-sug";
      const t=currentTopic();
      [t?`תסביר לי בפשטות את "${t}"`:"על מה הלומדה הזו, בשלושה משפטים?", "איך כל הנושאים בלומדה מתחברים?", "תן לי דוגמה מהחיים"].forEach(q=>{
        const b=document.createElement("button"); b.type="button"; b.textContent=q; b.onclick=()=>ask(q); s.append(b);
      });
      d.append(s);
    }
    log.append(d);
  }
  async function ask(q){
    if(!ENABLED||!q.trim()) return;
    const t=currentTopic();
    const userText = (t?`[אני נמצא כרגע בנושא: ${t}]\n`:"") + `[מה שמופיע לי על המסך עכשיו:]\n${screenText()}\n\n[השאלה שלי:]\n${q}`;
    bubble("ai-u", md(q));
    hist.push({role:"user",parts:[{text:userText}]});
    ta.value=""; send.disabled=true;
    const wait=bubble("ai-a","<span class='ai-dots'>חושב</span>");
    try{
      const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,{
        method:"POST", headers:{"Content-Type":"application/json","x-goog-api-key":KEY},
        body:JSON.stringify({systemInstruction:{parts:[{text:system()}]},contents:hist.slice(-12),generationConfig:{temperature:0.4,maxOutputTokens:1200}})
      });
      const j=await r.json();
      if(!r.ok) throw new Error((j.error&&j.error.status)||("HTTP "+r.status));
      const a=(j.candidates&&j.candidates[0]&&j.candidates[0].content&&j.candidates[0].content.parts||[]).map(p=>p.text||"").join("").trim()||"לא התקבלה תשובה. נסה לנסח אחרת.";
      hist.push({role:"model",parts:[{text:a}]});
      wait.innerHTML=md(a);
    }catch(e){
      hist.pop();
      wait.classList.add("err");
      wait.textContent = /RESOURCE_EXHAUSTED|429/.test(e.message) ? "העוזר הגיע למכסת השימוש כרגע. נסה שוב מאוחר יותר." : "משהו השתבש בחיבור לעוזר. נסה שוב בעוד רגע.";
    }
    send.disabled=false; log.scrollTop=log.scrollHeight; ta.focus();
  }
  fab.onclick=()=>{ panel.hidden=false; fab.hidden=true; if(!log.children.length) intro(); ta.focus() };
  panel.querySelector(".ai-x").onclick=()=>{ panel.hidden=true; fab.hidden=false };
  form.onsubmit=e=>{ e.preventDefault(); ask(ta.value) };
  ta.addEventListener("keydown",e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); ask(ta.value) } });
})();
