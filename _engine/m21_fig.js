const FIG={
 cover21:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="הורה ותינוק">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <circle cx="176" cy="74" r="26" class="f-c"/><path d="M128 190 C128 130 150 108 176 108 C206 108 226 128 230 150" class="f-c"/>
  <circle cx="236" cy="132" r="17" class="f-surf"/><ellipse cx="226" cy="168" rx="30" ry="20" class="f-surf"/>
  <path d="M196 150 C214 186 248 186 262 160" fill="none" class="s-c" stroke-width="10" stroke-linecap="round"/>
  <path d="M290 70 c-6 -10 -22 -6 -18 6 c3 8 18 16 18 16 c0 0 15 -8 18 -16 c4 -12 -12 -16 -18 -6z" class="f-c" opacity=".7"/></svg>`,
 nso:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="חיוך חברתי אצל תינוקות גרמנים ובני הנאסו, סכמטי">
  <line x1="30" y1="150" x2="380" y2="150" class="s-line"/>
  <rect x="300" y="128" width="32" height="22" rx="4" class="f-c"/><rect x="260" y="132" width="32" height="18" rx="4" class="f-soft"/>
  <rect x="120" y="40" width="32" height="110" rx="4" class="f-c"/><rect x="80" y="122" width="32" height="28" rx="4" class="f-soft"/>
  <text x="296" y="170" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">גיל 6 שבועות</text>
  <text x="116" y="170" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">גיל 12 שבועות</text>
  <rect x="356" y="12" width="12" height="12" rx="3" class="f-c"/><text x="350" y="22" text-anchor="start" font-size="10.5" class="f-mut">גרמנים</text>
  <rect x="356" y="30" width="12" height="12" rx="3" class="f-soft"/><text x="350" y="40" text-anchor="start" font-size="10.5" class="f-mut">נאסו (קמרון)</text>
  <text x="200" y="186" text-anchor="middle" font-size="10" class="f-mut">סכמטי, לפי תרשים 7.1: אחוז התינוקות שחייכו חיוך חברתי</text></svg>`,
 types:()=>{const T=[["ילד נוח",40,"f-c"],["ילד קשה",10,"f-c"],["מתחמם לאט",15,"f-c"],["לא סווג",35,"f-soft"]];
  return `<svg viewBox="0 0 400 170" role="img" aria-label="טיפוסי המזג במחקר ניו יורק">
  ${T.map(([h,p,c],i)=>{const y=14+i*36,w=p*6.4;return `<text x="392" y="${y+20}" text-anchor="start" font-size="11.5" font-weight="700" class="f-ink">${h}</text><rect x="${300-w}" y="${y+4}" width="${w}" height="24" rx="6" class="${c}"/><text x="${294-w}" y="${y+21}" text-anchor="start" font-size="11" font-weight="800" class="f-ink">⁦${p}%⁩</text>`}).join("")}
  <text x="200" y="164" text-anchor="middle" font-size="10" class="f-mut">תומס וצ'ס: 141 ילדים מינקות לבגרות</text></svg>`},
 bowlby:()=>{const P=[["טרום־היקשרות",["לידה עד 6 שבועות"],["אותות מולדים","אין התנגדות לזר"]],["היקשרות|בהתהוות",["6 שבועות עד","6 עד 8 חודשים"],["מעדיף את המוכר","תחושת אמון"]],["היקשרות|חד־משמעית",["6 עד 8 חודשים עד","18 עד 24 חודשים"],["חרדת פרידה","בסיס בטוח"]],["יחסים|הדדיים",["18 חודשים עד שנתיים","ואילך"],["ייצוג ושפה","משא ומתן"]]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="ארבעת שלבי ההיקשרות לפי בולבי">${arrowDef("bw")}
  <line x1="392" y1="40" x2="8" y2="40" class="s-line" marker-end="url(#bw)"/>
  ${P.map(([h,A,D],i)=>{const x=350-i*100;return `<circle cx="${x}" cy="40" r="13" class="f-c"/><text x="${x}" y="45" text-anchor="middle" font-size="12" font-weight="800" class="f-inv">${i+1}</text>${h.split("|").map((t,k)=>`<text x="${x}" y="${72+k*14}" text-anchor="middle" font-size="11" font-weight="800" class="f-ink">${t}</text>`).join("")}${A.map((t,k)=>`<text x="${x}" y="${104+k*12}" text-anchor="middle" font-size="9" class="f-mut">${t}</text>`).join("")}${D.map((t,k)=>`<text x="${x}" y="${140+k*14}" text-anchor="middle" font-size="9.5" class="f-ink">${t}</text>`).join("")}`}).join("")}
  <text x="200" y="192" text-anchor="middle" font-size="10" class="f-mut">התוצאה: מודל עבודה פנימי של הקשר</text></svg>`},
 ssp:()=>{const T=[["בטוחה",60,"f-c"],["נמנעת",15,"f-soft"],["מתנגדת",10,"f-soft"],["חסרת ארגון וכיוון",15,"f-soft"]];
  return `<svg viewBox="0 0 400 170" role="img" aria-label="שכיחות דפוסי ההיקשרות">
  ${T.map(([h,p,c],i)=>{const y=14+i*36,w=p*3.6;return `<text x="392" y="${y+20}" text-anchor="start" font-size="11.5" font-weight="700" class="f-ink">${h}</text><rect x="${250-w}" y="${y+4}" width="${w}" height="24" rx="6" class="${c}"/><text x="${244-w}" y="${y+21}" text-anchor="start" font-size="11" font-weight="800" class="f-ink">⁦${p}%⁩</text>`}).join("")}
  <text x="200" y="164" text-anchor="middle" font-size="10" class="f-mut">בקירוב, במשפחות ממעמד בינוני בצפון אמריקה</text></svg>`}
};
const rothTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>ממד</th><th>תיאור</th></tr></thead><tbody>
<tr><td colspan="2"><b>תגובתיות</b></td></tr>
<tr><td><b>רמת פעילות</b></td><td>פעילות של מוטוריקה גסה</td></tr>
<tr><td><b>טווח קשב-התמדה</b></td><td>משך ההתכוונות או העניין</td></tr>
<tr><td><b>מצוקה מפחד</b></td><td>זהירות ומצוקה מגירוי עז או חדש, זמן הסתגלות</td></tr>
<tr><td><b>מצוקה מרוגז</b></td><td>רגזנות, בכי ומצוקה כשרצונות לא נענים</td></tr>
<tr><td><b>רגש חיובי</b></td><td>תכיפות של שמחה והנאה</td></tr>
<tr><td colspan="2"><b>ויסות עצמי</b></td></tr>
<tr><td><b>בקרה שדורשת מאמץ</b></td><td>דיכוי רצוני של תגובה דומיננטית כדי לתכנן ולבצע תגובה מסתגלת. בשנתיים הראשונות נקראת התכוונות: הרגעה עצמית, הסטת קשב ושמירת עניין</td></tr></tbody></table></div>`;
const ssTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>#</th><th>מה קורה</th><th>מה בודקים</th></tr></thead><tbody>
<tr><td>1</td><td>החוקרת מכניסה הורה ותינוק לחדר משחקים ויוצאת</td><td></td></tr>
<tr><td>2</td><td>ההורה יושב, התינוק משחק</td><td>הורה כבסיס בטוח</td></tr>
<tr><td>3</td><td>זר נכנס, יושב ומדבר עם ההורה</td><td>תגובה למבוגר לא מוכר</td></tr>
<tr><td>4</td><td>ההורה יוצא, הזר מגיב לתינוק</td><td>חרדת פרידה</td></tr>
<tr><td>5</td><td>ההורה חוזר ומרגיע, הזר יוצא</td><td>תגובה לאיחוד</td></tr>
<tr><td>6</td><td>ההורה יוצא</td><td>חרדת פרידה</td></tr>
<tr><td>7</td><td>הזר נכנס ומרגיע</td><td>האם הזר יכול להרגיע</td></tr>
<tr><td>8</td><td>ההורה חוזר, מרגיע ומעניין בצעצועים</td><td>תגובה לאיחוד</td></tr></tbody></table></div>`;
