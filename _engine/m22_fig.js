const FIG={
 cover22:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="תרשים ארגוני">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="170" y="40" width="60" height="30" rx="6" class="f-c"/>
  <line x1="200" y1="70" x2="200" y2="96" class="s-line"/><line x1="120" y1="96" x2="280" y2="96" class="s-line"/>
  ${[120,200,280].map(x=>`<line x1="${x}" y1="96" x2="${x}" y2="112" class="s-line"/><rect x="${x-28}" y="112" width="56" height="26" rx="6" class="f-surf"/><line x1="${x}" y1="138" x2="${x}" y2="156" class="s-line"/><rect x="${x-22}" y="156" width="20" height="18" rx="4" class="f-c" opacity=".6"/><rect x="${x+2}" y="156" width="20" height="18" rx="4" class="f-c" opacity=".6"/>`).join("")}</svg>`,
 pyramid:()=>{const L=["מנהל כללי","ראשי אגפים","מנהלי חטיבות","מנהלי מחלקות","מנהלי עבודה","עובדים מן השורה"];
  return `<svg viewBox="0 0 400 240" role="img" aria-label="ממד הכילול וממד הבידול">${arrowDef("py")}
  <path d="M200 14 L330 200 L70 200 Z" class="f-soft"/>
  ${[1,2,3].map(i=>`<line x1="${200-i*32}" y1="200" x2="200" y2="14" class="s-line" opacity=".5"/><line x1="${200+i*32}" y1="200" x2="200" y2="14" class="s-line" opacity=".5"/>`).join("")}
  ${L.map((t,i)=>{const y=30+i*34;return `<text x="392" y="${y+4}" text-anchor="start" font-size="10" class="f-ink">${t}</text><line x1="${200+ (y-14)*0.7}" y1="${y}" x2="${200-(y-14)*0.7}" y2="${y}" class="s-line" opacity=".5"/>`}).join("")}
  <line x1="30" y1="200" x2="30" y2="18" class="s-c" stroke-width="2.5" marker-end="url(#py)"/><text x="22" y="110" text-anchor="middle" font-size="11" font-weight="800" class="f-ink" transform="rotate(-90 22 110)">ממד הכילול</text>
  <line x1="330" y1="222" x2="70" y2="222" class="s-c" stroke-width="2.5" marker-end="url(#py)"/><text x="200" y="238" text-anchor="middle" font-size="11" font-weight="800" class="f-ink">ממד הבידול: ייצור, אחזקה, שיווק, סיוע</text></svg>`},
 patterns:()=>{const C=[["לפי תשומות",["תפקודים","מומחיות","תהליכים"]],["לפי תפוקות",["מוצרים","אזורים","לקוחות"]],["בסיס כפול",["שתי־וערב","משולב"]],["חדשניים",["כלאיים","אופקי","רשתי","וירטואלי"]]];
  return `<svg viewBox="0 0 400 210" role="img" aria-label="מפת התבניות הארגוניות">
  ${C.map(([h,a],i)=>{const x=350-i*100;return `<rect x="${x-46}" y="10" width="92" height="34" rx="10" class="${i<2?"f-c":"f-soft"}"/><text x="${x}" y="32" text-anchor="middle" font-size="11.5" font-weight="800" class="${i<2?"f-inv":"f-ink"}">${h}</text>${a.map((t,k)=>`<rect x="${x-40}" y="${56+k*36}" width="80" height="28" rx="8" class="f-surf" stroke="var(--line)"/><text x="${x}" y="${74+k*36}" text-anchor="middle" font-size="10.5" class="f-ink">${t}</text>`).join("")}`}).join("")}</svg>`},
 matrix:()=>{const C=["מנוע","חשמל","רכיבים","ריפוד"],R=["דגם משפחתי","דגם ספורטיבי","דגם מסחרי"];
  return `<svg viewBox="0 0 400 210" role="img" aria-label="מבנה שתי־וערב">
  ${C.map((c,i)=>{const x=250-i*62;return `<rect x="${x-28}" y="10" width="56" height="30" rx="7" class="f-c"/><text x="${x}" y="30" text-anchor="middle" font-size="10" font-weight="700" class="f-inv">${c}</text><line x1="${x}" y1="40" x2="${x}" y2="190" class="s-line" stroke-dasharray="3 3"/>`}).join("")}
  ${R.map((r,j)=>{const y=70+j*46;return `<rect x="300" y="${y-15}" width="92" height="30" rx="7" class="f-soft"/><text x="346" y="${y+4}" text-anchor="middle" font-size="10" font-weight="700" class="f-ink">${r}</text><line x1="300" y1="${y}" x2="40" y2="${y}" class="s-line"/>${C.map((c,i)=>`<circle cx="${250-i*62}" cy="${y}" r="6" class="f-c"/>`).join("")}`}).join("")}
  <text x="200" y="206" text-anchor="middle" font-size="10" class="f-mut">כל נקודה: עובד שכפוף לממונה מקצועי (עמודה) ולממונה משימתי (שורה)</text></svg>`}
};
const prosTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מבנה</th><th>יתרון</th><th>חיסרון</th></tr></thead><tbody>
<tr><td><b>לפי תשומות</b></td><td class="in">יעילות, התמחות מקצועית, חיסכון במשאבים, יתרונות הגודל</td><td class="out">תסמונת הניכור, קונפליקט מבני, כושר שינוי מוגבל</td></tr>
<tr><td><b>לפי תפוקות</b></td><td class="in">תכליתיות, קרבה ללקוח, כושר שינוי, מרכזי רווח, פיזור סיכונים</td><td class="out">כפילות משאבים, רמה מקצועית נמוכה, אובדן סינרגיה</td></tr>
<tr><td><b>בסיס כפול</b></td><td class="in">שילוב היתרונות, עיבוד מידע רב, גמישות</td><td class="out">מתח מבני, כפיפות כפולה, מורכבות ועלות</td></tr>
<tr><td><b>כלאיים</b></td><td class="in">גמישות חוזית, ריכוז מומחים במסגרות קטנות</td><td class="out">כישורים ניהוליים חדשים, חשש מהפרת התחייבויות, נטייה להתפרק</td></tr>
<tr><td><b>אופקי</b></td><td class="in">מתגבר על תסמונת הביורוקרטיה, מכוון ללקוח</td><td class="out">מחיצות חדשות סביב תהליכים, ספק אם עובדים רוצים אחריות</td></tr>
<tr><td><b>רשתי</b></td><td class="in">ביזור, התאמה מקומית, מרכזי רווח</td><td class="out">אופורטוניזם של מנהלים רחוקים וזכיינים</td></tr>
<tr><td><b>בין־ארגוני</b></td><td class="in">עדיפות הדדית, פחות אי־ודאות, גמישות</td><td class="out">החוליה החלשה, בעיית אמון</td></tr>
<tr><td><b>וירטואלי</b></td><td class="in">מעט עובדים ומנהלים, חיסכון</td><td class="out">חוסר אמון של לקוחות ב״רכישה עיוורת״</td></tr></tbody></table></div>`;
