const FIG={
 span:()=>{const A=[1,4,16,64,256,1024],B=[1,8,64,512];
  const col=(x,arr,w)=>arr.map((n,i)=>{const bw=Math.max(14,Math.min(150,Math.log(n+1)*22));return `<rect x="${x-bw/2}" y="${30+i*26}" width="${bw}" height="18" rx="5" class="f-soft"/><text x="${x}" y="${43+i*26}" text-anchor="middle" font-size="10.5" font-weight="600" class="f-ink">${n.toLocaleString("en")}</text>`}).join("");
  return `<svg viewBox="0 0 400 250" role="img" aria-label="השוואה בין טווח פיקוח של 4 לטווח של 8">
  <text x="290" y="18" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">טווח פיקוח 4</text><text x="110" y="18" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">טווח פיקוח 8</text>
  ${col(290,A)}${col(110,B)}
  <text x="290" y="200" text-anchor="middle" font-size="12" class="f-mut">6 דרגים, 1,365 מנהלים</text><text x="110" y="148" text-anchor="middle" font-size="12" class="f-mut">4 דרגים, 585 מנהלים</text>
  <rect x="40" y="212" width="320" height="30" rx="15" class="f-c"/><text x="200" y="232" text-anchor="middle" font-size="12.5" font-weight="700" class="f-inv">בשני המקרים: 4,096 עובדי ביצוע</text></svg>`},
 matrix:()=>{const cols=["חשבונאות","שיווק","ניהול"],rows=["תואר ראשון","תואר שני","דוקטורט"];
  return `<svg viewBox="0 0 400 222" role="img" aria-label="מבנה מטריצה בפקולטה למנהל עסקים">
  <text x="200" y="18" text-anchor="middle" font-size="11.5" class="f-mut">מחלקות (פונקציה)</text>
  ${cols.map((c,i)=>`<rect x="${238-i*90}" y="28" width="80" height="30" rx="8" class="f-c"/><text x="${278-i*90}" y="48" text-anchor="middle" font-size="12" font-weight="700" class="f-inv">${c}</text>`).join("")}
  ${rows.map((r,j)=>`<rect x="326" y="${72+j*44}" width="66" height="34" rx="8" class="f-soft"/><text x="359" y="${93+j*44}" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${r}</text>${cols.map((c,i)=>`<circle cx="${278-i*90}" cy="${89+j*44}" r="9" class="s-c"/><circle cx="${278-i*90}" cy="${89+j*44}" r="4" class="f-c"/>`).join("")}<line x1="318" y1="${89+j*44}" x2="70" y2="${89+j*44}" class="s-line" stroke-dasharray="3 4"/>`).join("")}
  ${cols.map((c,i)=>`<line x1="${278-i*90}" y1="60" x2="${278-i*90}" y2="170" class="s-line" stroke-dasharray="3 4"/>`).join("")}
  <text x="200" y="216" text-anchor="middle" font-size="11.5" class="f-mut">כל נקודה היא מרצה עם שני ממונים: ראש המחלקה ומנהל התוכנית</text></svg>`},
 cover6:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="תרשים ארגוני">
  <rect x="160" y="18" width="80" height="36" rx="8" class="f-c"/>
  <path d="M200 54V80M80 80H320M80 80V100M200 80V100M320 80V100" class="s-c"/>
  ${[80,200,320].map(x=>`<rect x="${x-46}" y="100" width="92" height="32" rx="8" class="f-soft"/><path d="M${x} 132V150M${x-30} 150H${x+30}M${x-30} 150V164M${x+30} 150V164" class="s-line"/><rect x="${x-46}" y="164" width="32" height="24" rx="6" class="f-surf"/><rect x="${x+14}" y="164" width="32" height="24" rx="6" class="f-surf"/>`).join("")}
  <text x="200" y="214" text-anchor="middle" font-size="13" font-weight="600" class="f-mut">איך מחלקים, מקבצים ומתאמים את העבודה</text></svg>`
};
const mechTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>מכניסטי</th><th>אורגני</th></tr></thead><tbody>
<tr><td><b>התמחות</b></td><td>גבוהה</td><td>צוותים חוצי-פונקציות</td></tr>
<tr><td><b>היררכיה</b></td><td>שרשרת פיקוד ברורה</td><td>שטוח, צוותים חוצי-היררכיה</td></tr>
<tr><td><b>טווח פיקוח</b></td><td>צר</td><td>רחב</td></tr>
<tr><td><b>ריכוזיות</b></td><td>גבוהה</td><td>החלטות בשיתוף</td></tr>
<tr><td><b>פורמליזציה</b></td><td>גבוהה</td><td>נמוכה</td></tr>
<tr><td><b>מידע</b></td><td>רשת מידע מוגבלת</td><td>רשת מידע מקיפה</td></tr></tbody></table></div>`;
const stratTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>אסטרטגיה</th><th>המבנה המתאים</th></tr></thead><tbody>
<tr><td><b>חדשנות</b><br><span class="muted" style="font-size:.85rem">מוצרים ושירותים חדשים</span></td><td class="in">אורגני: גמיש, מעט התמחות ופורמליזציה, מבוזר</td></tr>
<tr><td><b>מזעור עלויות</b><br><span class="muted" style="font-size:.85rem">בקרה הדוקה, מחירים נמוכים</span></td><td class="out">מכניסטי: בקרה הדוקה, התמחות ופורמליזציה גבוהות, ריכוזי</td></tr>
<tr><td><b>חיקוי</b><br><span class="muted" style="font-size:.85rem">נכנסים אחרי שאחרים הוכיחו</span></td><td>שילוב: הדוק לפעילות הקיימת, גמיש לחדשה</td></tr></tbody></table></div>`;
