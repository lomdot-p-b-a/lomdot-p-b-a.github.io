const FIG={
 cover33:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="כמוסה וקולטן">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <g transform="rotate(-30 160 110)"><rect x="110" y="88" width="100" height="44" rx="22" class="f-c"/><rect x="160" y="88" width="50" height="44" rx="0" class="f-surf"/><rect x="186" y="88" width="24" height="44" rx="22" class="f-surf"/></g>
  <path d="M236 150 h70 v-20 h-14 v-14 h-14 v14 h-14 v-14 h-14 v14 h-14 z" class="f-c" opacity=".85"/>
  <circle cx="271" cy="96" r="9" class="f-surf"/><circle cx="246" cy="78" r="6" class="f-surf"/><circle cx="292" cy="72" r="6" class="f-surf"/></svg>`,
 dose:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="עקומות מינון ותגובה של השפעה רצויה ושל תופעת לוואי">
  <line x1="40" y1="20" x2="40" y2="166" class="s-line"/><line x1="40" y1="166" x2="390" y2="166" class="s-line"/>
  <path d="M40 160 C110 158 120 40 190 34 L390 32" fill="none" class="s-c" stroke-width="3"/>
  <path d="M40 162 C200 160 220 50 300 42 L390 40" fill="none" class="s-line" stroke-width="3" stroke-dasharray="6 5"/>
  <line x1="150" y1="98" x2="262" y2="98" class="s-line" stroke-width="1.5"/>
  <text x="206" y="90" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">מרווח הבטיחות</text>
  <text x="120" y="56" text-anchor="middle" font-size="10.5" class="f-ink">שיכוך כאב</text>
  <text x="330" y="66" text-anchor="middle" font-size="10.5" class="f-mut">דיכוי נשימה</text>
  <text x="215" y="186" text-anchor="middle" font-size="10" class="f-mut">המינון עולה משמאל לימין (סכמטי, לפי עקומות המורפין)</text>
  <text x="34" y="30" text-anchor="start" font-size="10" class="f-mut">השפעה</text></svg>`,
 steps:()=>{const R=[["ייצור","מולקולת־קדם (L-DOPA)","מעכב אנזים של הייצור"],["אחסון","","חוסם נשא לשלפוחית (רזרפין)"],["פליטה","ממריץ פליטה (ארס אלמנה שחורה)","מונע פליטה (בוטולינום)"],["קולטן פוסט־סינפטי","אגוניסט ישיר (ניקוטין)","חוסם קולטנים (קורארה)"],["אוטורצפטור","חוסם אוטורצפטורים","מפעיל אוטורצפטורים"],["סיום","חוסם קליטה חוזרת (קוקאין) או מעכב אנזים מפרק (נאוסטיגמין)",""]];
  return `<div class="tblwrap"><table class="tbl"><tr><th>שלב</th><th>אגוניסט</th><th>אנטגוניסט</th></tr>${R.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]||"—"}</td><td>${r[2]||"—"}</td></tr>`).join("")}</table></div>`},
 da:()=>{const R=[["ניגרו־סטריאטלית","החומר השחור","גרעין זנבי ופוטמן","תנועה; ניוון בפרקינסון"],["מזולימבית","הטגמנטום הגחוני (VTA)","גרעין האקומבנס, אמיגדלה, היפוקמפוס","חיזוק ותגמול"],["מזו־קורטיקלית","הטגמנטום הגחוני (VTA)","קורטקס קדם־מצחי","זיכרון עבודה ותכנון"]];
  return `<div class="tblwrap"><table class="tbl"><tr><th>מערכת</th><th>מוצא</th><th>יעד</th><th>תפקיד</th></tr>${R.map(r=>`<tr>${r.map((c,i)=>i?`<td>${c}</td>`:`<td><b>${c}</b></td>`).join("")}</tr>`).join("")}</table></div>`}
};
