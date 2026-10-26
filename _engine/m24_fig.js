const FIG={
 cover24:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="חלון שנפתח ונסגר על ציר הזמן">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M90 170 C140 170 150 60 200 60 C250 60 260 150 310 165" class="s-c" stroke-width="4" fill="none"/>
  <line x1="80" y1="176" x2="324" y2="176" class="s-line" stroke-width="2"/>
  <rect x="150" y="70" width="100" height="106" rx="8" class="f-c" opacity=".18"/>
  <circle cx="200" cy="60" r="9" class="f-c"/>
  <path d="M116 140 l10 -6 M134 126 l10 -4 M268 128 l10 4 M286 144 l10 6" class="s-line"/></svg>`,
 cutoffs:()=>{const X=m=>372-m*13.5,P=[[6,"בעיות התנהגות, היקשרות"],[12,"בעיות התנהגות, היקשרות"],[15,"שפה (הבעה והבנה)"],[18,"תפקוד ניהולי, בעיות התנהגות"],[24,"IQ, היקשרות, קוהרנטיות EEG"]];
  return `<svg viewBox="0 0 400 214" role="img" aria-label="גילאי חיתוך שנמצאו בתחומים שונים">${arrowDef("co")}
  <line x1="380" y1="164" x2="22" y2="164" class="s-line" stroke-width="2" marker-end="url(#co)"/>
  ${[0,6,12,18,24].map(m=>`<line x1="${X(m)}" y1="160" x2="${X(m)}" y2="168" class="s-line"/><text x="${X(m)}" y="184" text-anchor="middle" font-size="11" class="f-mut">${m}</text>`).join("")}
  <text x="200" y="206" text-anchor="middle" font-size="11.5" class="f-mut">גיל היציאה מהמוסד (חודשים)</text>
  <rect x="${X(6)}" y="150" width="${X(0)-X(6)}" height="12" rx="4" class="f-c" opacity=".35"/>
  <text x="${X(0)}" y="143" text-anchor="start" font-size="10" font-weight="700" class="f-ink">4 עד 6 החודשים הראשונים: בלי נזק ארוך טווח</text>
  ${P.map(([m,a],i)=>{const y=20+i*22,L=m>=15;return `<line x1="${X(m)}" y1="${y+4}" x2="${X(m)}" y2="160" class="s-c" stroke-dasharray="3 3"/><circle cx="${X(m)}" cy="${y}" r="4" class="f-c"/><text x="${L?X(m)+8:X(m)-8}" y="${y+4}" text-anchor="${L?"end":"start"}" font-size="10.5" font-weight="700" class="f-ink">${m} ח׳: ${a}</text>`}).join("")}</svg>`},
 step:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="קשר ליניארי מול פונקציית מדרגה">${arrowDef("st")}
  ${[[205,"קשר ליניארי"],[10,"פונקציית מדרגה"]].map(([x,t],i)=>`<g transform="translate(${x},0)"><line x1="175" y1="160" x2="12" y2="160" class="s-line" marker-end="url(#st)"/><line x1="175" y1="160" x2="175" y2="30" class="s-line" marker-end="url(#st)"/>
  ${i==0?`<path d="M168 150 L24 46" class="s-c" stroke-width="3"/>`:`<path d="M168 148 L120 148 L120 70 L24 70" class="s-c" stroke-width="3" fill="none"/><text x="120" y="176" text-anchor="middle" font-size="10" class="f-mut">גיל החיתוך</text>`}
  <text x="94" y="20" text-anchor="middle" font-size="12.5" font-weight="800" class="f-ink">${t}</text>
  <text x="94" y="196" text-anchor="middle" font-size="10.5" class="f-mut">← זמן במוסד</text>
  <text x="188" y="96" text-anchor="middle" font-size="10" class="f-mut" transform="rotate(90 188 96)">בעיות</text></g>`).join("")}</svg>`
};
const interTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>סוג ההתערבות</th><th>דוגמה</th><th>מה מיוחד בה</th></tr></thead><tbody>
<tr><td><b>אימוץ בין־ארצי</b></td><td>ERA: ילדים מרומניה שאומצו לבריטניה לפני 6 ח׳, בין 6 ל-24, ובין 24 ל-42 ח׳</td><td>הניגוד הגדול ביותר בסביבות הטיפול. מעקב מינקות ועד גיל ההתבגרות</td></tr>
<tr><td><b>אומנה</b></td><td>BEIP בבוקרשט: הערכה, ואז שיבוץ <b>אקראי</b> לטיפול רגיל במוסד או לאומנה</td><td>יש מדידות לפני ההתערבות, והשיבוץ האקראי מאפשר מסקנות סיבתיות</td></tr>
<tr><td><b>שיפור הטיפול בתוך המוסד</b></td><td>סנט פטרסבורג: טיפול רגיל, שינוי מבני בצוות, או הדרכה בלבד, בשלושה בתי תינוקות</td><td>משפרים את המוסד עצמו במקום להוציא ממנו את הילד</td></tr></tbody></table></div>`;
