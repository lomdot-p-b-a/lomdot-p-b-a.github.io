const FIG={
 cover15:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="דמות בתנועה ובועת דיבור">
  <circle cx="200" cy="112" r="90" class="f-soft"/>
  <circle cx="176" cy="58" r="14" class="f-c"/>
  <path d="M176 74 L170 128 M172 90 L140 72 M172 92 L206 110 M170 128 L150 176 M170 128 L196 172" class="s-c" stroke-width="9" stroke-linecap="round" fill="none"/>
  <path d="M232 52h70a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12h-46l-16 14v-14h-8a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12z" class="f-surf"/>
  <path d="M240 72h56M240 86h36" class="s-line" stroke-width="4" stroke-linecap="round"/>
  <path d="M120 196 Q200 180 280 196" class="s-line" stroke-dasharray="4 6" fill="none"/></svg>`,
 phases:()=>{const P=[["1","בניית קשר","כחודש · פעם בשבוע"],["2","שימוש נרחב בתנועה","כחודשיים · פעמיים בשבוע"],["3","הכנה לפרידה","כחודש"]];
  return `<svg viewBox="0 0 400 140" role="img" aria-label="שלושת שלבי הטיפול בתנועה">${arrowDef("mp")}
  <line x1="388" y1="60" x2="14" y2="60" class="s-line" marker-end="url(#mp)"/>
  ${P.map(([n,h,d],i)=>{const x=322-i*124;return `<rect x="${x-56}" y="22" width="112" height="76" rx="12" class="${i==1?"f-c":"f-soft"}"/><text x="${x}" y="46" text-anchor="middle" font-size="18" font-weight="800" class="${i==1?"f-inv":"f-ink"}">${n}</text><text x="${x}" y="68" text-anchor="middle" font-size="11.5" font-weight="700" class="${i==1?"f-inv":"f-ink"}">${h}</text><text x="${x}" y="86" text-anchor="middle" font-size="10" class="${i==1?"f-inv":"f-mut"}">${d}</text>`}).join("")}
  <text x="200" y="126" text-anchor="middle" font-size="11.5" class="f-mut">ולאורך כל הדרך: שיחות עם הרופא המטפל</text></svg>`},
 facil:()=>`<svg viewBox="0 0 400 230" role="img" aria-label="תופעת ההחשה: שיחה מיד אחרי טיפול בתנועה">${arrowDef("fa")}
  <rect x="262" y="20" width="126" height="70" rx="12" class="f-c"/><text x="325" y="50" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">טיפול בתנועה</text><text x="325" y="70" text-anchor="middle" font-size="10.5" class="f-inv">מפיק רגשות</text>
  <line x1="258" y1="55" x2="148" y2="55" class="s-c" marker-end="url(#fa)"/><text x="203" y="46" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">מיד אחרי</text>
  <rect x="12" y="20" width="132" height="70" rx="12" class="f-surf"/><text x="78" y="50" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">שיחה טיפולית</text><text x="78" y="70" text-anchor="middle" font-size="10.5" class="f-mut">מביע ומבין רגשות</text>
  <rect x="12" y="120" width="376" height="44" rx="12" class="f-soft"/><text x="200" y="147" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">שיחה בזמן אחר: מתקשה להביע רגשות</text>
  <text x="200" y="196" text-anchor="middle" font-size="11.5" class="f-mut">ההסבר: לפני שהשפעת התנועה נחלשת והמחלה \"גוברת\",</text>
  <text x="200" y="214" text-anchor="middle" font-size="11.5" class="f-mut">נשאר מטען רגשי חזק שאפשר לחוות ולברר במילים</text></svg>`
};
