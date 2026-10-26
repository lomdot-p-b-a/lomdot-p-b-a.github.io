const FIG={
 cover20:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="פעוט ומגדל קוביות">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="150" y="150" width="44" height="40" rx="6" class="f-c"/><rect x="200" y="150" width="44" height="40" rx="6" class="f-surf"/>
  <rect x="175" y="106" width="44" height="40" rx="6" class="f-surf"/><rect x="186" y="62" width="44" height="40" rx="6" class="f-c" transform="rotate(8 208 82)"/>
  <circle cx="290" cy="96" r="7" class="f-c"/><circle cx="310" cy="72" r="5" class="f-c" opacity=".7"/><circle cx="324" cy="50" r="3.5" class="f-c" opacity=".45"/></svg>`,
 voe:()=>{const P=(x,lab,tall,sub)=>{const h=tall?70:38;const top=136-h;return `<g>
   <path d="M${x-40} 136 V56 H${x-14} V84 H${x+14} V56 H${x+40} V136 Z" class="f-soft"/>
   <rect x="${x-14}" y="56" width="28" height="28" fill="none" class="s-line" stroke-dasharray="3 3"/>
   <rect x="${x-74}" y="${top}" width="16" height="${h}" rx="8" class="f-c"/><rect x="${x+58}" y="${top}" width="16" height="${h}" rx="8" class="f-c"/>
   ${tall?`<text x="${x}" y="76" text-anchor="middle" font-size="16" font-weight="800" class="f-ink">?</text>`:""}
   <line x1="${x-82}" y1="136" x2="${x+82}" y2="136" class="s-line"/>
   <text x="${x}" y="156" text-anchor="middle" font-size="11.5" font-weight="800" class="f-ink">${lab}</text>
   <text x="${x}" y="172" text-anchor="middle" font-size="10" class="f-mut">${sub}</text></g>`};
  return `<svg viewBox="0 0 400 210" role="img" aria-label="ניסוי הגזרים של באיירז'ון">
  <text x="200" y="22" text-anchor="middle" font-size="10.5" class="f-mut">גזר נע מצד לצד מאחורי וילון, ובחלק העליון של הווילון יש חלון</text>
  <text x="200" y="38" text-anchor="middle" font-size="10.5" class="f-mut">(מימין ומשמאל לווילון: הגזר לפני ואחרי המעבר)</text>
  ${P(296,"אירוע צפוי",false,"גזר קצר: נמוך מהחלון, לא נראה")}${P(104,"אירוע בלתי צפוי",true,"גזר ארוך: היה צריך להיראות בחלון")}
  <text x="200" y="200" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">בני 2.5 עד 3.5 חודשים הביטו יותר באירוע הבלתי צפוי</text></svg>`},
 wynn:()=>{const S=[["1","חיה אחת"],["2","מסך עולה"],["3","מוסיפים חיה"],["4","יד יוצאת ריקה"]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="ניסוי החיבור של וין">${arrowDef("wy")}
  ${S.map(([n,t],i)=>{const x=352-i*96;return `<rect x="${x-40}" y="16" width="80" height="54" rx="10" class="f-soft"/><text x="${x}" y="40" text-anchor="middle" font-size="14" font-weight="800" class="f-ink">${n}</text><text x="${x}" y="58" text-anchor="middle" font-size="10" class="f-mut">${t}</text>${i<3?`<line x1="${x-42}" y1="43" x2="${x-52}" y2="43" class="s-line" marker-end="url(#wy)"/>`:""}`}).join("")}
  <rect x="216" y="96" width="150" height="56" rx="12" class="f-soft"/><text x="291" y="120" text-anchor="middle" font-size="11.5" font-weight="800" class="f-ink">צפוי: שתי חיות</text><text x="291" y="139" text-anchor="middle" font-size="10" class="f-mut">מבט קצר יותר</text>
  <rect x="34" y="96" width="150" height="56" rx="12" class="f-c"/><text x="109" y="120" text-anchor="middle" font-size="11.5" font-weight="800" class="f-inv">בלתי צפוי: חיה אחת</text><text x="109" y="139" text-anchor="middle" font-size="10" class="f-inv">מבט ארוך יותר</text>
  <text x="200" y="182" text-anchor="middle" font-size="10.5" class="f-mut">מסקנת החוקרים: בני 5 חודשים יודעים שאחת ועוד אחת הן שתיים</text></svg>`},
 bell:()=>{const xs=[40,93,147,200,253,307,360];const L=["55","70","85","100","115","130","145"];const P=["2%","14%","34%","34%","14%","2%"];
  return `<svg viewBox="0 0 400 190" role="img" aria-label="התפלגות נורמלית של ציוני מנת משכל">
  <path d="M20 150 C70 150 100 145 130 110 C160 60 180 30 200 30 C220 30 240 60 270 110 C300 145 330 150 380 150 Z" class="f-soft"/>
  <path d="M147 75 C165 40 185 30 200 30 C215 30 235 40 253 75 L253 150 L147 150 Z" class="f-c" opacity=".55"/>
  ${xs.slice(1,6).map(x=>`<line x1="${x}" y1="40" x2="${x}" y2="150" class="s-line" stroke-dasharray="3 4"/>`).join("")}
  <line x1="20" y1="150" x2="380" y2="150" class="s-line"/>
  ${xs.map((x,i)=>`<text x="${x}" y="168" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${L[i]}</text>`).join("")}
  ${P.map((p,i)=>`<text x="${(xs[i]+xs[i+1])/2}" y="${i==2||i==3?125:i==1||i==4?140:146}" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">⁦${p}⁩</text>`).join("")}
  <text x="200" y="186" text-anchor="middle" font-size="10.5" class="f-mut">ציוני מנת המשכל (הממוצע 100)</text></svg>`},
 abc:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="פרויקט קרוליינה, תרשים סכמטי">
  <line x1="40" y1="150" x2="384" y2="150" class="s-line"/><line x1="384" y1="20" x2="384" y2="150" class="s-line"/>
  <path d="M376 70 C330 74 300 80 260 86 C200 94 120 100 48 104" class="s-c" fill="none" stroke-width="4"/>
  <path d="M376 70 C340 90 300 106 260 112 C200 120 120 126 48 130" class="s-line" fill="none" stroke-width="3" stroke-dasharray="6 5"/>
  <line x1="330" y1="40" x2="330" y2="150" class="s-line" stroke-dasharray="2 4"/><text x="330" y="34" text-anchor="middle" font-size="10" class="f-mut">שנה</text>
  <text x="380" y="168" text-anchor="start" font-size="10.5" class="f-mut">ינקות</text><text x="48" y="168" text-anchor="end" font-size="10.5" class="f-mut">גיל 21</text>
  <text x="150" y="92" text-anchor="middle" font-size="11" font-weight="800" class="f-ink">קבוצת טיפול</text>
  <text x="150" y="146" text-anchor="middle" font-size="11" font-weight="700" class="f-mut">קבוצת ביקורת</text>
  <text x="200" y="186" text-anchor="middle" font-size="10.5" class="f-mut">סכמטי: מנת המשכל, מתפצלת מגיל שנה, היתרון נשמר, ושתיהן יורדות בהדרגה</text></svg>`
};
const stageTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>תת־שלב</th><th>גיל</th><th>מה מאפיין</th></tr></thead><tbody>
<tr><td><b>1. סכמות רפלקסיביות</b></td><td>לידה עד חודש</td><td>רפלקסים של יילוד</td></tr>
<tr><td><b>2. תגובות מעגליות ראשוניות</b></td><td>חודש עד 4 חודשים</td><td>הרגלים מוטוריים פשוטים סביב הגוף, ציפייה מוגבלת לאירועים</td></tr>
<tr><td><b>3. תגובות מעגליות שניוניות</b></td><td>4 עד 8 חודשים</td><td>חזרה על תוצאות מעניינות בסביבה, חיקוי התנהגויות מוכרות</td></tr>
<tr><td><b>4. תיאום התגובות השניוניות</b></td><td>8 עד 12 חודשים</td><td>התנהגות רצונית, מציאת חפץ במקום הראשון (קביעות האובייקט), חיקוי שונה מעט</td></tr>
<tr><td><b>5. תגובות מעגליות שלישוניות</b></td><td>12 עד 18 חודשים</td><td>חקירה בדרכים חדשות, חיקוי התנהגויות חדשות, חיפוש בכמה מקומות</td></tr>
<tr><td><b>6. ייצוג מנטלי</b></td><td>18 חודשים עד שנתיים</td><td>פתרון פתאומי, העתקה סמויה, חיקוי מושהה, משחקי כאילו</td></tr></tbody></table></div>`;
const homeTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>תת־סולם HOME</th><th>פריט לדוגמה</th></tr></thead><tbody>
<tr><td><b>ארגון הסביבה הפיזית</b></td><td>סביבת המשחק נראית בטוחה</td></tr>
<tr><td><b>חומרי משחק ראויים</b></td><td>ההורה מספק צעצועים או פעילויות מעניינות</td></tr>
<tr><td><b>תגובתיות רגשית ומילולית</b></td><td>מלטף או מנשק לפחות פעם אחת. מדבר לילד באופן ספונטני (לא נזיפות)</td></tr>
<tr><td><b>קבלת הילד</b></td><td>לא מגביל את תנועותיו יותר משלוש פעמים</td></tr>
<tr><td><b>מעורבות ההורה</b></td><td>משאיר את הילד בשדה הראייה ומסתכל עליו לעתים קרובות</td></tr>
<tr><td><b>גיוון בגרייה</b></td><td>ארוחה ביום עם הורה. יציאות מהבית, כמו קניות</td></tr></tbody></table></div>`;
