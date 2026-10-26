const FIG={
 cover9:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="סמארטפון עם מוח על המסך">
  <circle cx="200" cy="112" r="88" class="f-soft"/>
  <rect x="150" y="22" width="100" height="186" rx="18" class="f-ink"/>
  <rect x="158" y="38" width="84" height="150" rx="8" class="f-surf"/>
  <path d="M199 72c-8-8-24-4-24 8c-10 2-12 16-2 20c-4 10 6 18 14 14c4 8 12 8 12 0z" class="f-c"/>
  <path d="M201 72c8-8 24-4 24 8c10 2 12 16 2 20c4 10-6 18-14 14c-4 8-12 8-12 0z" class="f-c" opacity=".75"/>
  <rect x="172" y="146" width="56" height="8" rx="4" class="f-soft"/><rect x="172" y="146" width="38" height="8" rx="4" class="f-c"/>
  <text x="200" y="174" text-anchor="middle" font-size="11" font-weight="700" class="f-mut">רמה 2</text></svg>`,
 groups:()=>{const G=[["SMART","n=18","האפליקציה החדשה",true],["Fit Brains","n=19","ביקורת פעילה",false],["רשימת המתנה","n=16","בלי אימון",false]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="שלוש קבוצות המחקר">
  <rect x="140" y="8" width="120" height="34" rx="10" class="f-surf"/><text x="200" y="30" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">53 משתתפים</text>
  <path d="M200 42V58M70 58H330M70 58V72M200 58V72M330 58V72" class="s-line"/>
  ${G.map(([n,c,d,m],i)=>{const x=330-i*130;return `<rect x="${x-58}" y="72" width="116" height="78" rx="12" class="${m?"f-c":"f-soft"}"/><text x="${x}" y="100" text-anchor="middle" font-size="14" font-weight="800" class="${m?"f-inv":"f-ink"}">${n}</text><text x="${x}" y="118" text-anchor="middle" font-size="11" class="${m?"f-inv":"f-mut"}">${c}</text><text x="${x}" y="137" text-anchor="middle" font-size="11.5" font-weight="600" class="${m?"f-inv":"f-ink"}">${d}</text>`}).join("")}
  <text x="200" y="176" text-anchor="middle" font-size="11.5" class="f-mut">15 עד 20 דקות ביום · 5 ימים בשבוע · 8 שבועות</text>
  <text x="200" y="194" text-anchor="middle" font-size="11.5" class="f-mut">חלוקה אקראית</text></svg>`},
 paradox:()=>{const G=["SMART","Fit Brains","המתנה"];const A=[8.78,2.93,1.52],B=[-1.00,3.00,-0.88];
  const panel=(cx,title,vals,sc,lab)=>`<text x="${cx}" y="18" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">${title}</text><line x1="${cx-80}" y1="130" x2="${cx+80}" y2="130" class="s-line"/>
   ${vals.map((v,i)=>{const x=cx+52-i*52,h=Math.abs(v)*sc,y=v>=0?130-h:130,hi=(i==lab);return `<rect x="${x-15}" y="${y}" width="30" height="${h}" rx="4" class="${hi?"f-c":"f-mut"}" ${hi?"":'opacity=".45"'}/><text x="${x}" y="${v>=0?y-5:y+h+13}" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">\u2066${v>0?"+":""}${v.toFixed(1)}\u2069</text><text x="${x}" y="178" text-anchor="middle" font-size="10" class="f-mut">${G[i]}</text>`}).join("")}`;
  return `<svg viewBox="0 0 400 214" role="img" aria-label="שיפור בזיכרון עבודה מול שביעות רצון מהזיכרון">
  ${panel(295,"זיכרון עבודה (WMQ)",A,9,0)}${panel(105,"שביעות רצון מהזיכרון",B,9,1)}
  <line x1="200" y1="10" x2="200" y2="186" class="s-line" stroke-dasharray="3 4"/>
  <text x="200" y="206" text-anchor="middle" font-size="11.5" font-weight="600" class="f-mut">מי שהשתפר בפועל לא הרגיש טוב יותר, ולהפך</text></svg>`}
};
const measTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מה נמדד</th><th>הכלי</th></tr></thead><tbody>
<tr><td><b>קשב, זיכרון, זיכרון עבודה ותפקוד ניהולי</b></td><td>סוללה ממוחשבת (MDS) שנותנת מנות: AQ, MQ, WMQ, EFQ. ממוצע 100, סטיית תקן 15</td></tr>
<tr><td><b>עכבת תגובה</b></td><td>מבחן סטרופ (Stroop), מתפקודי האונה המצחית</td></tr>
<tr><td><b>דיכאון וחרדה</b></td><td>CES-D (דיכאון), STAI-S (חרדת מצב)</td></tr>
<tr><td><b>תלונות זיכרון</b></td><td>MMQ: שביעות רצון מהזיכרון (C), בעיות זיכרון ביומיום (A), שימוש באסטרטגיות (S)</td></tr></tbody></table></div>`;
