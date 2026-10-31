const FIG={
 cover32:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מוח ומוח שדרה במבט צד">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M110 120 C104 70 150 40 210 42 C270 44 300 84 292 122 C286 150 250 156 230 150 L200 150 C170 158 118 156 110 120 Z" class="f-c"/>
  <path d="M232 150 C250 152 268 160 262 176 C254 192 226 186 222 168 Z" class="f-surf"/>
  <rect x="206" y="148" width="18" height="70" rx="8" class="f-surf"/>
  <path d="M190 46 C186 80 196 110 200 150" fill="none" class="s-line" stroke-width="2.5" opacity=".5"/>
  <path d="M136 98 q30 -14 54 -4 M226 80 q30 4 50 26" fill="none" class="s-line" stroke-width="2.5" opacity=".5"/></svg>`,
 lobes:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="ארבע אונות הקורטקס, מבט צד של המיספרה שמאלית">
  <path d="M300 110 C306 60 260 30 210 30 L196 30 L176 100 Z" class="f-c"/>
  <path d="M196 30 C150 30 120 44 104 70 L150 96 L176 100 Z" class="f-surf"/>
  <path d="M104 70 C86 96 86 130 110 150 L150 96 Z" class="f-soft"/>
  <path d="M300 110 C300 140 270 160 230 160 C190 162 140 162 110 150 L150 96 L176 100 Z" class="f-soft" opacity=".75"/>
  <path d="M196 30 L176 100" class="s-line" stroke-width="3"/><path d="M286 132 C240 112 200 110 160 110" class="s-line" stroke-width="3" fill="none"/>
  <text x="250" y="76" text-anchor="middle" font-size="12" font-weight="700" class="f-inv">מצח</text>
  <text x="156" y="62" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">קודקוד</text>
  <text x="114" y="114" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">עורף</text>
  <text x="214" y="142" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">רקה</text>
  <text x="206" y="22" text-anchor="start" font-size="10" class="f-mut">מענית מרכזית</text>
  <text x="292" y="150" text-anchor="start" font-size="10" class="f-mut">חריץ צידי</text>
  <text x="200" y="190" text-anchor="middle" font-size="10.5" class="f-mut">החזית מימין. מוטורי ראשוני לפני המענית, סומטי־סנסורי אחריה</text></svg>`,
 csf:()=>{const S=["מקלעת כורואידית","חדרים צידיים","חדר שלישי","תעלת המוח","חדר רביעי","חלל תת־קורי","גבשושי קרום הקורים","גת סגיטלית (דם)"];
  return `<svg viewBox="0 0 400 120" role="img" aria-label="מסלול נוזל המוח והשדרה">${arrowDef("cf")}
  ${S.map((s,i)=>{const x=372-(i%4)*92,y=i<4?30:86;return `<rect x="${x-42}" y="${y-16}" width="84" height="32" rx="9" class="${i==0||i==7?"f-c":"f-surf"}"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="10" font-weight="700" class="${i==0||i==7?"f-inv":"f-ink"}">${s}</text>${i%4<3?`<line x1="${x-44}" y1="${y}" x2="${x-48}" y2="${y}" class="s-c" marker-end="url(#cf)"/>`:""}`}).join("")}
  <path d="M100 48 L100 66" class="s-c" marker-end="url(#cf)"/>
  </svg>`},
 divs:()=>{const R=[["מוח קדמי","טלאנצפלון","חדרים צידיים","קורטקס, גנגליונים בסיסיים, מערכת לימבית"],["","דיאנצפלון","חדר שלישי","תלמוס, היפותלמוס"],["מוח אמצעי","מזאנצפלון","תעלת המוח","טקטום, טגמנטום"],["מוח אחורי","מטאנצפלון","חדר רביעי","מוחון, גשר"],["","מיילאנצפלון","חדר רביעי","מוח מוארך"]];
  return `<div class="tblwrap"><table class="tbl"><tr><th>חלוקה</th><th>חלוקת משנה</th><th>חדר</th><th>מבנים עיקריים</th></tr>${R.map(r=>`<tr>${r.map((c,i)=>i==0?`<td><b>${c}</b></td>`:`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`},
 ans:()=>{const R=[["מטרה","עירור והוצאת אנרגיה","רגיעה ושימור אנרגיה"],["מוצא ב־CNS","אזור החזה והמותן","עצבי גולגולת ואזור העצה"],["גנגליונים","שרשרת ליד עמוד השדרה","ליד איברי המטרה"],["טרנסמיטר באיבר","נוראפינפרין","אצטילכולין"],["דוגמאות","דופק עולה, אישונים מתרחבים","רוק, עיכול, דופק יורד"]];
  return `<div class="tblwrap"><table class="tbl"><tr><th></th><th>סימפתי</th><th>פרסימפתי</th></tr>${R.map(r=>`<tr>${r.map((c,i)=>i==0?`<td><b>${c}</b></td>`:`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`}
};
