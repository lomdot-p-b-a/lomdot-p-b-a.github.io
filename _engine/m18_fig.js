const FIG={
 cover18:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="בית ומשפחה בתוך קהילה">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M130 120 L200 62 L270 120" class="s-c" fill="none" stroke-width="6" stroke-linejoin="round"/>
  <rect x="146" y="118" width="108" height="72" rx="6" class="f-surf"/>
  <circle cx="180" cy="140" r="9" class="f-c"/><rect x="171" y="151" width="18" height="28" rx="7" class="f-c"/>
  <circle cx="220" cy="140" r="9" class="f-c"/><rect x="211" y="151" width="18" height="28" rx="7" class="f-c"/>
  <circle cx="200" cy="158" r="6" class="f-c"/><rect x="194" y="166" width="12" height="16" rx="5" class="f-c"/>
  <circle cx="200" cy="114" r="108" fill="none" class="s-c" stroke-width="2" stroke-dasharray="4 7"/></svg>`,
 layers:()=>{const R=[["מערכת מאקרו","ערכי התרבות, מדיניות ציבורית"],["מערכת אקסו","שכונה, קהילה, רשת תמיכה"],["מערכת מזו","קשרים בין הבית לבית הספר"],["מערכת מיקרו","המשפחה"]];
  return `<svg viewBox="0 0 400 230" role="img" aria-label="שכבות הסביבה שבהן עוסק הפרק">
  ${R.map(([h,d],i)=>{const m=i*26;return `<rect x="${10+m*1.6}" y="${8+m}" width="${380-m*3.2}" height="${214-m*2}" rx="16" class="${i==3?"f-c":"f-soft"}" ${i<3?`opacity="${.4+i*.2}"`:""} stroke="var(--surface)" stroke-width="2"/>`}).join("")}
  ${R.map(([h,d],i)=>i<3?`<text x="200" y="${25+i*26}" text-anchor="middle" font-size="11" class="f-ink"><tspan font-weight="800">${h}</tspan>: ${d}</text>`:"").join("")}
  <text x="200" y="118" text-anchor="middle" font-size="14" font-weight="800" class="f-inv">${R[3][0]}</text>
  <text x="200" y="138" text-anchor="middle" font-size="12" class="f-inv">${R[3][1]}: הילד במרכז</text></svg>`},
 famsys:()=>`<svg viewBox="0 0 400 220" role="img" aria-label="השפעות ישירות ועקיפות במשפחה">${arrowDef("fs")}
  <circle cx="300" cy="50" r="28" class="f-c"/><text x="300" y="55" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">הורה</text>
  <circle cx="100" cy="50" r="28" class="f-c"/><text x="100" y="55" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">הורה</text>
  <circle cx="200" cy="170" r="28" class="f-soft"/><text x="200" y="175" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">ילד</text>
  <line x1="270" y1="50" x2="132" y2="50" class="s-line" stroke-dasharray="4 4"/>
  <text x="200" y="40" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">הזוגיות</text>
  <line x1="282" y1="74" x2="222" y2="146" class="s-c" stroke-width="2.5" marker-end="url(#fs)"/>
  <line x1="214" y1="142" x2="274" y2="70" class="s-c" stroke-width="2.5" marker-end="url(#fs)"/>
  <line x1="118" y1="74" x2="178" y2="146" class="s-c" stroke-width="2.5" marker-end="url(#fs)"/>
  <line x1="186" y1="142" x2="126" y2="70" class="s-c" stroke-width="2.5" marker-end="url(#fs)"/>
  <text x="200" y="214" text-anchor="middle" font-size="10.5" class="f-mut">חיצים: השפעות ישירות ודו־כיווניות בין הורה לילד</text>
  <rect x="300" y="150" width="92" height="44" rx="10" fill="none" class="s-line" stroke-dasharray="3 3"/>
  <text x="346" y="168" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">צד שלישי</text>
  <text x="346" y="184" text-anchor="middle" font-size="10" class="f-mut">בן זוג, סבים</text>
  <text x="8" y="150" text-anchor="end" font-size="10" class="f-mut">עקיפות: הקשר בין</text>
  <text x="8" y="164" text-anchor="end" font-size="10" class="f-mut">שניים מושפע</text>
  <text x="8" y="178" text-anchor="end" font-size="10" class="f-mut">מאחרים בסביבה</text></svg>`,
 ses:()=>{const B=[["שנות השכלה",""],["יוקרת העיסוק ורמת המיומנות","מעמד חברתי"],["הכנסה","מעמד כלכלי"]];
  return `<svg viewBox="0 0 400 180" role="img" aria-label="שלושת רכיבי המעמד הסוציו־אקונומי">${arrowDef("se")}
  ${B.map(([h,d],i)=>{const x=332-i*132;return `<rect x="${x-58}" y="14" width="116" height="56" rx="12" class="f-soft"/><text x="${x}" y="${d?38:47}" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${h}</text>${d?`<text x="${x}" y="56" text-anchor="middle" font-size="10" class="f-mut">${d}</text>`:""}<line x1="${x}" y1="72" x2="${200+(x-200)*.25}" y2="112" class="s-line" marker-end="url(#se)"/>`}).join("")}
  <rect x="110" y="116" width="180" height="44" rx="14" class="f-c"/>
  <text x="200" y="143" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">מעמד סוציו־אקונומי</text>
  <text x="200" y="176" text-anchor="middle" font-size="10" class="f-mut">שלושה משתנים קשורים אך לא חופפים</text></svg>`},
 dinner:()=>{const C=["חרדה ודיכאון","עבריינות, אלכוהול וסמים","ציונים נמוכים"];
  return `<svg viewBox="0 0 400 190" role="img" aria-label="ארוחת ערב עם ההורים ובעיות הסתגלות, תרשים סכמטי">
  <line x1="20" y1="140" x2="380" y2="140" class="s-line"/>
  ${C.map((c,i)=>{const x=320-i*120;return `<rect x="${x+2}" y="${110-i*4}" width="30" height="${30+i*4}" rx="4" class="f-c"/><rect x="${x-32}" y="${58-i*4}" width="30" height="${82+i*4}" rx="4" class="f-soft"/><text x="${x}" y="158" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">${c}</text>`}).join("")}
  <rect x="290" y="172" width="12" height="12" rx="3" class="f-c"/><text x="284" y="182" text-anchor="start" font-size="10" class="f-mut">ארוחה עם ההורים לעתים קרובות</text>
  <rect x="96" y="172" width="12" height="12" rx="3" class="f-soft"/><text x="90" y="182" text-anchor="start" font-size="10" class="f-mut">לעתים רחוקות</text>
  <text x="200" y="20" text-anchor="middle" font-size="10.5" class="f-mut">גובה העמודות סכמטי: מראה רק את כיוון ההבדל</text></svg>`},
 povrank:()=>{const N=20;
  return `<svg viewBox="0 0 400 150" role="img" aria-label="דירוג עוני הילדים בעשרים מדינות מפותחות">${arrowDef("pr")}
  <line x1="384" y1="70" x2="16" y2="70" class="s-line" marker-end="url(#pr)"/>
  ${Array.from({length:N},(_,i)=>{const x=372-i*18.4;return `<circle cx="${x}" cy="70" r="${i==N-1?9:6}" class="${i==N-1?"f-c":"f-soft"}"/>`}).join("")}
  <text x="384" y="44" text-anchor="start" font-size="10.5" font-weight="700" class="f-ink">הכי נמוך: איסלנד, פינלנד, נורווגיה</text>
  <text x="16" y="44" text-anchor="end" font-size="10.5" font-weight="700" class="f-ink">הכי גבוה: ארצות הברית</text>
  <text x="200" y="100" text-anchor="middle" font-size="10.5" class="f-mut">לפני ארה"ב בדירוג: ספרד, איטליה, יפן</text>
  <text x="200" y="126" text-anchor="middle" font-size="10.5" class="f-mut">עוני = פחות מחצי מההכנסה החציונית במדינה (סדר בלבד, לא קנה מידה)</text></svg>`}
};
const policyTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מדד</th><th>מקום ארה"ב</th><th>חלק מהמדינות שלפניה</th></tr></thead><tbody>
<tr><td><b>עוני ילדים</b> (מתוך 20 מדינות מבוססות)</td><td class="out">20</td><td>קנדה, איסלנד, גרמניה, בריטניה, נורווגיה, שוודיה, ספרד</td></tr>
<tr><td><b>תמותת תינוקות</b> בשנה הראשונה (בעולם)</td><td class="out">37</td><td>קנדה, יוון, הונגריה, אירלנד, סינגפור, ספרד</td></tr>
<tr><td><b>ילודה בקרב מתבגרות</b> (מתוך 28)</td><td class="out">28</td><td>אוסטרליה, קנדה, צ'כיה, דנמרק, הונגריה, איסלנד, פולין, סלובקיה</td></tr>
<tr><td><b>הוצאה ציבורית על חינוך</b> מהתמ"ג (מתוך 30)</td><td class="out">13</td><td>בלגיה, צרפת, איסלנד, ניו זילנד, פורטוגל, ספרד, שוודיה</td></tr>
<tr><td><b>הוצאה על גיל רך וטיפול בילדים</b> מהתמ"ג (מתוך 36)</td><td class="out">32</td><td>אוסטריה, גרמניה, איטליה, הולנד, צרפת, שוודיה</td></tr>
<tr><td><b>חלק ההוצאה הציבורית על בריאות</b> (מתוך 34)</td><td class="out">34</td><td>אוסטריה, אוסטרליה, קנדה, צרפת, הונגריה, איסלנד, שווייץ, ניו זילנד</td></tr></tbody></table></div>`;
