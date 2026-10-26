const FIG={
 cover17:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="ציר התפתחות מינקות לבגרות">
  <circle cx="200" cy="112" r="92" class="f-soft"/>
  ${[[300,150,14],[255,132,20],[205,112,26],[152,92,32],[100,72,38]].map(([x,y,r],i)=>`<circle cx="${x}" cy="${y}" r="${r/2.4}" class="${i==4?"f-c":"f-surf"}"/><rect x="${x-r/4}" y="${y+r/2.2}" width="${r/2}" height="${r*1.1}" rx="${r/5}" class="${i==4?"f-c":"f-surf"}"/>`).join("")}
  <path d="M320 196 Q200 186 80 140" class="s-c" fill="none" stroke-width="3" stroke-dasharray="5 6"/></svg>`,
 periods:()=>{const P=[["טרום לידה","מהתעברות ללידה"],["ינקות וגיל רך","0 עד 2"],["ילדות מוקדמת","2 עד 6"],["ילדות","6 עד 11"],["התבגרות","11 עד 18"],["בגרות בהתהוות","18 עד 25"]];
  return `<svg viewBox="0 0 400 150" role="img" aria-label="תקופות ההתפתחות">${arrowDef("pe")}
  <line x1="392" y1="62" x2="8" y2="62" class="s-line" marker-end="url(#pe)"/>
  ${P.map(([h,d],i)=>{const x=362-i*64;return `<circle cx="${x}" cy="62" r="${i==5?8:11}" class="${i==5?"f-soft":"f-c"}" ${i==5?'stroke-dasharray="3 3"':""}/><text x="${x}" y="${i%2?100:34}" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${h}</text><text x="${x}" y="${i%2?116:50}" text-anchor="middle" font-size="10" class="f-mut">${d}</text>`}).join("")}
  <text x="200" y="142" text-anchor="middle" font-size="10.5" class="f-mut">בגרות בהתהוות: תקופה חדשה יחסית, במדינות מתועשות</text></svg>`},
 contin:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="התפתחות רציפה מול בלתי רציפה">
  <text x="300" y="20" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">רציפה</text><text x="100" y="20" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">בלתי רציפה (שלבים)</text>
  <path d="M370 150 Q300 120 230 40" class="s-c" fill="none" stroke-width="4"/>
  <path d="M180 150 H150 V115 H120 V80 H90 V45 H30" class="s-c" fill="none" stroke-width="4"/>
  <line x1="200" y1="30" x2="200" y2="160" class="s-line" stroke-dasharray="3 4"/>
  <text x="300" y="176" text-anchor="middle" font-size="10.5" class="f-mut">מוסיפים בהדרגה עוד מאותו דבר</text>
  <text x="100" y="176" text-anchor="middle" font-size="10.5" class="f-mut">שינוי איכותי פתאומי, ואז \"ישורת\"</text></svg>`,
 eco:()=>{const R=[["מערכת מאקרו","ערכים, חוקים, מנהגים, משאבים",96],["מערכת אקסו","עבודת ההורים, שירותי קהילה, משפחה מורחבת",72],["מערכת מזו","קשרים בין בית, גן, בית ספר",48],["מערכת מיקרו","הילד והסביבה המיידית",24]];
  return `<svg viewBox="0 0 400 240" role="img" aria-label="מעגלי המערכות האקולוגיות של ברונפנברנר">
  ${R.map(([h,d,r],i)=>`<circle cx="200" cy="120" r="${r*1.15}" class="${i==3?"f-c":"f-soft"}" ${i<3?`opacity="${.45+i*.2}"`:""} stroke="var(--surface)" stroke-width="2"/>`).join("")}
  <text x="200" y="125" text-anchor="middle" font-size="12" font-weight="800" class="f-inv">הילד</text>
  ${R.map(([h,d,r],i)=>`<text x="200" y="${120-r*1.15+15}" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">${i<3?h:""}</text>`).join("")}
  <text x="200" y="234" text-anchor="middle" font-size="10.5" class="f-mut">ומערכת הכרונו: ממד הזמן, הסביבה משתנה כל הזמן</text></svg>`},
 corr:()=>`<svg viewBox="0 0 400 130" role="img" aria-label="סולם מקדם המתאם">
  <rect x="30" y="40" width="340" height="16" rx="8" class="f-soft"/>
  <rect x="198" y="34" width="4" height="28" class="f-ink"/>
  <text x="370" y="80" text-anchor="middle" font-size="12" font-weight="800" class="f-c">⁦+1.00⁩</text><text x="200" y="80" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">0</text><text x="30" y="80" text-anchor="middle" font-size="12" font-weight="800" class="f-c">⁦−1.00⁩</text>
  <text x="340" y="100" text-anchor="middle" font-size="10.5" class="f-mut">קשר חיובי חזק</text><text x="200" y="100" text-anchor="middle" font-size="10.5" class="f-mut">אין קשר</text><text x="60" y="100" text-anchor="middle" font-size="10.5" class="f-mut">קשר שלילי חזק</text>
  <text x="200" y="22" text-anchor="middle" font-size="11" class="f-mut">גודל המספר = עוצמה · הסימן = כיוון</text></svg>`,
 seq:()=>{const rows=[["עוקבה 1 (1985)",["ו","ז","ח"]],["עוקבה 2 (1986)",["ז","ח","ט"]],["עוקבה 3 (1987)",["ח","ט","י"]]];
  return `<svg viewBox="0 0 400 170" role="img" aria-label="מערך משלב: שלוש עוקבות במעקב של שלוש שנים">
  ${["1998","1999","2000"].map((y,i)=>`<text x="${250-i*80}" y="20" text-anchor="middle" font-size="11" font-weight="700" class="f-mut">${y}</text>`).join("")}
  ${rows.map(([n,c],j)=>`<text x="390" y="${52+j*42}" text-anchor="start" font-size="10.5" font-weight="700" class="f-ink">${n}</text>${c.map((g,i)=>`<rect x="${226-i*80}" y="${34+j*42}" width="48" height="28" rx="8" class="${g=="ח"?"f-c":"f-soft"}"/><text x="${250-i*80}" y="${53+j*42}" text-anchor="middle" font-size="12" font-weight="800" class="${g=="ח"?"f-inv":"f-ink"}">כיתה ${g}</text>`).join("")}`).join("")}
  <text x="200" y="164" text-anchor="middle" font-size="10.5" class="f-mut">משווים את כל מי שבכיתה ח' (שנולדו בשנים שונות) כדי לבדוק אפקט עוקבה</text></svg>`}
};
const methodsTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>שיטה</th><th>חוזק</th><th>מגבלה</th></tr></thead><tbody>
<tr><td><b>תצפית נטורליסטית</b></td><td class="in">התנהגות יום־יומית אמיתית</td><td class="out">אין שליטה בתנאים. לא לכולם הזדמנות שווה להפגין את ההתנהגות</td></tr>
<tr><td><b>תצפית מובנית</b></td><td class="in">תנאים זהים לכולם. אפשר לחקור התנהגויות נדירות</td><td class="out">אולי לא משקפת התנהגות יום־יומית</td></tr>
<tr><td><b>ריאיון קליני</b></td><td class="in">גמיש, קרוב לחשיבה הטבעית, הרבה מידע בזמן קצר</td><td class="out">דיווח לא מדויק. קשה להשוות בין נחקרים</td></tr>
<tr><td><b>ריאיון מובנה, שאלונים, מבחנים</b></td><td class="in">השוואה בין נחקרים, יעיל, מציג חלופות</td><td class="out">פחות מעמיק. עדיין דיווח לא מדויק</td></tr>
<tr><td><b>חקר מקרה (קליני)</b></td><td class="in">תובנות עשירות על פרט</td><td class="out">הטיה של החוקר. לא ניתן להכליל</td></tr>
<tr><td><b>אתנוגרפיה</b></td><td class="in">תיאור מלא של תרבות או קבוצה</td><td class="out">הטיה של ערכי החוקר. לא ניתן להכליל</td></tr></tbody></table></div>`;
const designTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מערך</th><th>חוזק</th><th>מגבלה</th></tr></thead><tbody>
<tr><td><b>אורך</b></td><td class="in">דפוסים משותפים, הבדלים בין־אישיים, קשר בין מוקדם למאוחר</td><td class="out">דגימה מוטית, נשירה סלקטיבית, תרגול, עוקבה. יקר</td></tr>
<tr><td><b>רוחב (חתך)</b></td><td class="in">יעיל: בודקים פעם אחת</td><td class="out">אין מידע על שינוי ברמת הפרט. אפקט עוקבה</td></tr>
<tr><td><b>משלב</b></td><td class="in">השוואות אורך ורוחב, חושף אפקט עוקבה, יעיל</td><td class="out">אותן בעיות, אבל המערך עוזר לזהות אותן</td></tr>
<tr><td><b>מיקרו־גנטי</b></td><td class="in">רואים איך השינוי קורה</td><td class="out">אינטנסיבי, קשה לצפות את הזמן, אפקט תרגול</td></tr></tbody></table></div>`;
