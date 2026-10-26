const FIG={
 cover19:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="תינוק זוחל לעבר צעצוע">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <ellipse cx="205" cy="140" rx="54" ry="26" class="f-c"/>
  <circle cx="268" cy="112" r="24" class="f-c"/>
  <rect x="160" y="150" width="14" height="34" rx="7" class="f-c"/><rect x="236" y="150" width="14" height="34" rx="7" class="f-c"/>
  <circle cx="276" cy="106" r="3.5" class="f-surf"/>
  <circle cx="112" cy="160" r="16" class="f-surf"/><circle cx="112" cy="160" r="7" class="f-c"/>
  <path d="M140 196 H300" class="s-c" stroke-width="3" stroke-dasharray="4 7"/></svg>`,
 classical:()=>{const B=(x,y,h,d,c)=>`<rect x="${x-62}" y="${y}" width="124" height="40" rx="10" class="${c}"/><text x="${x}" y="${y+17}" text-anchor="middle" font-size="10.5" font-weight="700" class="${c=="f-c"?"f-inv":"f-ink"}">${h}</text><text x="${x}" y="${y+32}" text-anchor="middle" font-size="10" class="${c=="f-c"?"f-inv":"f-mut"}">${d}</text>`;
  return `<svg viewBox="0 0 400 250" role="img" aria-label="שלבי ההתניה הקלאסית">${arrowDef("cl")}
  <text x="392" y="24" text-anchor="start" font-size="11" font-weight="800" class="f-ink">לפני</text>
  ${B(250,8,"גירוי לא מותנה","חלב אם","f-soft")}${B(90,8,"תגובה לא מותנית","מציצה","f-soft")}<line x1="186" y1="28" x2="156" y2="28" class="s-line" marker-end="url(#cl)"/>
  <text x="392" y="104" text-anchor="start" font-size="11" font-weight="800" class="f-ink">במהלך</text>
  ${B(250,70,"ליטוף המצח","גירוי נייטרלי","f-surf")}${B(250,116,"חלב אם","גירוי לא מותנה","f-soft")}${B(90,94,"מציצה","תגובה לא מותנית","f-soft")}<text x="250" y="114" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">+</text><line x1="186" y1="114" x2="156" y2="114" class="s-line" marker-end="url(#cl)"/>
  <text x="392" y="210" text-anchor="start" font-size="11" font-weight="800" class="f-ink">אחרי</text>
  ${B(250,190,"ליטוף המצח","גירוי מותנה","f-c")}${B(90,190,"מציצה","תגובה מותנית","f-c")}<line x1="186" y1="210" x2="156" y2="210" class="s-line" marker-end="url(#cl)"/></svg>`},
 habit:()=>{const S=[["שלב ההתרגלות",["מביטים בפני תינוק","עד שהעניין פוחת"]],["מבחן מיידי",["העדפת החדש:","מביטים בגבר הקירח"]],["מבחן מושהה",["העדפת המוכר:","מביטים שוב בתינוק"]]];
  return `<svg viewBox="0 0 400 190" role="img" aria-label="שימוש בהתרגלות לחקר זיכרון">${arrowDef("hb")}
  ${S.map(([h,L],i)=>{const x=332-i*132;return `<rect x="${x-60}" y="20" width="120" height="96" rx="12" class="${i==0?"f-soft":"f-c"}"/><text x="${x}" y="44" text-anchor="middle" font-size="11.5" font-weight="800" class="${i==0?"f-ink":"f-inv"}">${h}</text>${L.map((t,k)=>`<text x="${x}" y="${72+k*18}" text-anchor="middle" font-size="10" class="${i==0?"f-mut":"f-inv"}">${t}</text>`).join("")}${i<2?`<line x1="${x-62}" y1="68" x2="${x-70}" y2="68" class="s-line" marker-end="url(#hb)"/>`:""}`}).join("")}
  <text x="200" y="146" text-anchor="middle" font-size="10.5" class="f-ink">מבחן מיידי (דקות עד ימים) בודק זיכרון קרוב</text>
  <text x="200" y="166" text-anchor="middle" font-size="10.5" class="f-ink">מבחן מושהה (שבועות עד חודשים) בודק זיכרון רחוק</text></svg>`},
 dyn:()=>{const F=[["מערכת העצבים","התפתחות המוח"],["כישורי הגוף","יכולות תנועה"],["המטרות של הילד","לקחת צעצוע, לחצות חדר"],["תמיכה סביבתית","הורים, חפצים, מדרגות"]];
  return `<svg viewBox="0 0 400 210" role="img" aria-label="ארבעת הגורמים לפי תיאוריית המערכות הדינמיות">${arrowDef("dy")}
  ${F.map(([h,d],i)=>{const x=[340,245,155,60][i];return `<rect x="${x-46}" y="14" width="92" height="56" rx="12" class="f-soft"/><text x="${x}" y="36" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">${h}</text><text x="${x}" y="54" text-anchor="middle" font-size="9" class="f-mut">${d}</text><line x1="${x}" y1="72" x2="${200+(x-200)*.3}" y2="118" class="s-line" marker-end="url(#dy)"/>`}).join("")}
  <rect x="115" y="122" width="170" height="44" rx="14" class="f-c"/>
  <text x="200" y="149" text-anchor="middle" font-size="12.5" font-weight="800" class="f-inv">מיומנות מוטורית חדשה</text>
  <text x="200" y="192" text-anchor="middle" font-size="10.5" class="f-mut">שינוי בכל רכיב מערער את המערכת, והילד מחפש דפוס יעיל יותר</text></svg>`},
 reach:()=>{const P=[["יילוד","קדם־הושטה","חבטות לא מתואמות"],["3 עד 4 חודשים","הושטה מכוונת","חוזרת ומשתפרת"],["4 עד 5 חודשים","אחיזה אלנרית","והעברה מיד ליד"],["בסוף השנה","אחיזת פינצטה","אגודל ואצבע מורה"]];
  return `<svg viewBox="0 0 400 160" role="img" aria-label="אבני דרך בהושטת יד ואחיזה">${arrowDef("rc")}
  <line x1="392" y1="56" x2="8" y2="56" class="s-line" marker-end="url(#rc)"/>
  ${P.map(([a,h,d],i)=>{const x=350-i*100;return `<text x="${x}" y="30" text-anchor="middle" font-size="10.5" font-weight="700" class="f-mut">${a}</text><circle cx="${x}" cy="56" r="11" class="${i==3?"f-c":"f-soft"}"/><text x="${x}" y="92" text-anchor="middle" font-size="11.5" font-weight="800" class="f-ink">${h}</text><text x="${x}" y="110" text-anchor="middle" font-size="9.5" class="f-mut">${d}</text>`}).join("")}
  <text x="200" y="146" text-anchor="middle" font-size="10.5" class="f-mut">מגסה ולא מדויקת אל שליטה עדינה</text></svg>`},
 depth:()=>{const P=[["3 עד 4 שבועות","תנועה","מצמוץ מול אובייקט מתקרב"],["2 עד 3 חודשים","רמזים דו־עיניים","שתי העיניים רואות אחרת"],["3 עד 7 חודשים","רמזי תמונה","פרספקטיבה, מרקם, חפיפה, הצללה"]];
  return `<svg viewBox="0 0 400 160" role="img" aria-label="סדר הופעת רמזי העומק">${arrowDef("dp")}
  <line x1="392" y1="56" x2="8" y2="56" class="s-line" marker-end="url(#dp)"/>
  ${P.map(([a,h,d],i)=>{const x=330-i*130;return `<text x="${x}" y="30" text-anchor="middle" font-size="10.5" font-weight="700" class="f-mut">${a}</text><circle cx="${x}" cy="56" r="12" class="f-c"/><text x="${x}" y="61" text-anchor="middle" font-size="11" font-weight="800" class="f-inv">${i+1}</text><text x="${x}" y="92" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${h}</text><text x="${x}" y="110" text-anchor="middle" font-size="9.5" class="f-mut">${d}</text>`}).join("")}
  <text x="200" y="146" text-anchor="middle" font-size="10.5" class="f-mut">הסדר קשור כנראה להתפתחות המוטורית</text></svg>`},
 narrow:()=>{const R=[["פנים","בני אדם וקופים","רק בני אדם (גיל 9 חודשים)"],["דיבור","כמעט כל הצלילים","בעיקר צלילי שפת האם"],["מקצב","מערבי ולא מערבי","בעיקר מערבי (גיל 12 חודשים)"]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="אפקט ההצרה התפיסתית">${arrowDef("nw")}
  <text x="290" y="22" text-anchor="middle" font-size="11.5" font-weight="800" class="f-ink">בגיל 6 חודשים</text>
  <text x="105" y="22" text-anchor="middle" font-size="11.5" font-weight="800" class="f-ink">בהמשך השנה</text>
  ${R.map(([h,a,b],i)=>{const y=40+i*50;return `<text x="392" y="${y+25}" text-anchor="start" font-size="11" font-weight="800" class="f-ink">${h}</text><rect x="210" y="${y}" width="140" height="38" rx="10" class="f-soft"/><text x="280" y="${y+24}" text-anchor="middle" font-size="10.5" class="f-ink">${a}</text><line x1="206" y1="${y+19}" x2="186" y2="${y+19}" class="s-line" marker-end="url(#nw)"/><rect x="18" y="${y}" width="164" height="38" rx="10" class="f-c"/><text x="100" y="${y+24}" text-anchor="middle" font-size="10" class="f-inv">${b}</text>`}).join("")}</svg>`}
};
const motorTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מיומנות</th><th>גיל ממוצע</th><th>טווח של 90% מהילדים</th></tr></thead><tbody>
<tr><td><b>מחזיק ראש זקוף ויציב</b></td><td>6 שבועות</td><td>3 שבועות עד 4 חודשים</td></tr>
<tr><td><b>מרים ראש על המרפקים</b></td><td>חודשיים</td><td>3 שבועות עד 4 חודשים</td></tr>
<tr><td><b>מתגלגל מהצד לגב</b></td><td>חודשיים</td><td>3 שבועות עד 5 חודשים</td></tr>
<tr><td><b>תופס קובייה</b></td><td>3 חודשים ו־3 שבועות</td><td>2 עד 7 חודשים</td></tr>
<tr><td><b>מתגלגל מהגב לצד</b></td><td>4.5 חודשים</td><td>2 עד 7 חודשים</td></tr>
<tr><td><b>יושב לבד</b></td><td>7 חודשים</td><td>5 עד 9 חודשים</td></tr>
<tr><td><b>זוחל</b></td><td>7 חודשים</td><td>5 עד 11 חודשים</td></tr>
<tr><td><b>מושך את עצמו לעמידה</b></td><td>8 חודשים</td><td>5 עד 12 חודשים</td></tr>
<tr><td><b>מחי מחי כפיים</b></td><td>9 חודשים ו־3 שבועות</td><td>7 עד 15 חודשים</td></tr>
<tr><td><b>עומד לבד</b></td><td>11 חודשים</td><td>9 עד 16 חודשים</td></tr>
<tr><td><b>הולך לבד</b></td><td>11 חודשים ו־3 שבועות</td><td>9 עד 17 חודשים</td></tr>
<tr><td><b>מגדל של שתי קוביות</b></td><td>11 חודשים ו־3 שבועות</td><td>10 עד 19 חודשים</td></tr>
<tr><td><b>משרבט במרץ</b></td><td>14 חודשים</td><td>10 עד 21 חודשים</td></tr>
<tr><td><b>עולה במדרגות בסיוע</b></td><td>16 חודשים</td><td>12 עד 23 חודשים</td></tr>
<tr><td><b>קופץ במקום</b></td><td>23 חודשים ושבועיים</td><td>17 עד 30 חודשים</td></tr>
<tr><td><b>הולך על קצות האצבעות</b></td><td>25 חודשים</td><td>16 עד 30 חודשים</td></tr></tbody></table></div>`;
