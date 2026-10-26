const FIG={
 cover12:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="שני שבילים מתפצלים וסימן שאלה">
  <circle cx="200" cy="112" r="90" class="f-soft"/>
  <path d="M200 210 V140 Q200 110 150 80 M200 140 Q200 110 250 80" class="s-c" stroke-width="10" fill="none" stroke-linecap="round"/>
  <circle cx="146" cy="70" r="18" class="f-surf"/><circle cx="254" cy="70" r="18" class="f-surf"/>
  <path d="M140 66a6 6 0 0 1 12 0c0 6-12 8-12 14M254 62v12" class="s-line" stroke-width="3" fill="none"/>
  <circle cx="146" cy="84" r="2" class="f-ink"/><circle cx="254" cy="79" r="2" class="f-ink"/>
  <text x="200" y="128" text-anchor="middle" font-size="28" font-weight="800" class="f-c">?</text></svg>`,
 rusbult:()=>{const C=[[298,58,"הבעה","Voice","שיחה, הצעת פתרונות",true],[102,58,"עזיבה","Exit","פרידה, ניתוק",false],[298,148,"נאמנות","Loyalty","מחכים שישתפר",false],[102,148,"הזנחה","Neglect","התעלמות, התרחקות",false]];
  return `<svg viewBox="0 0 400 216" role="img" aria-label="ארבע תגובות לחוסר שביעות רצון לפי רוזבולט">
  <text x="300" y="14" text-anchor="middle" font-size="12" font-weight="700" class="f-mut">בונה</text><text x="100" y="14" text-anchor="middle" font-size="12" font-weight="700" class="f-mut">הרסני</text>
  ${C.map(([x,y,h,e,d,m])=>`<rect x="${x-72}" y="${y-36}" width="144" height="80" rx="12" class="${m?"f-c":"f-soft"}"/><text x="${x}" y="${y-8}" text-anchor="middle" font-size="15" font-weight="800" class="${m?"f-inv":"f-ink"}">${h}</text><text x="${x}" y="${y+10}" text-anchor="middle" font-size="10.5" class="${m?"f-inv":"f-mut"}">${e}</text><text x="${x}" y="${y+28}" text-anchor="middle" font-size="11" class="${m?"f-inv":"f-mut"}">${d}</text>`).join("")}
  <text x="200" y="64" text-anchor="middle" font-size="10" font-weight="700" class="f-mut">אקטיבי</text><text x="200" y="154" text-anchor="middle" font-size="10" font-weight="700" class="f-mut">פסיבי</text>
  <text x="200" y="210" text-anchor="middle" font-size="11" class="f-mut">רק \"הבעה\" בונה וגם אקטיבית: התגובה המקדמת ביותר</text></svg>`},
 path:()=>`<svg viewBox="0 0 400 236" role="img" aria-label="מודל הנתיבים: תפיסה עצמית מובילה לפסימיות ולחרדה">${arrowDef("pa")}
  <rect x="270" y="20" width="118" height="54" rx="12" class="f-c"/><text x="329" y="44" text-anchor="middle" font-size="12.5" font-weight="800" class="f-inv">תפיסה עצמית</text><text x="329" y="62" text-anchor="middle" font-size="12.5" font-weight="800" class="f-inv">וזהות</text>
  <rect x="141" y="20" width="118" height="54" rx="12" class="f-soft"/><text x="200" y="52" text-anchor="middle" font-size="12.5" font-weight="800" class="f-ink">תפיסות פסימיות</text>
  <rect x="12" y="20" width="118" height="54" rx="12" class="f-soft"/><text x="71" y="52" text-anchor="middle" font-size="12.5" font-weight="800" class="f-ink">חרדה</text>
  <line x1="268" y1="47" x2="262" y2="47" class="s-c" marker-end="url(#pa)"/><line x1="139" y1="47" x2="133" y2="47" class="s-c" marker-end="url(#pa)"/>
  <path d="M329 76 Q200 116 76 78" fill="none" class="s-c" marker-end="url(#pa)"/>
  <text x="265" y="38" font-size="10" text-anchor="middle" class="f-mut">\u2066.57\u2069</text><text x="136" y="38" font-size="10" text-anchor="middle" class="f-mut">\u2066.52\u2069</text><text x="200" y="110" font-size="10" text-anchor="middle" class="f-mut">\u2066.48\u2069</text>
  <rect x="12" y="140" width="376" height="86" rx="12" class="f-surf"/>
  <text x="200" y="164" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">תפיסה עצמית וזהות נמוכות ← יותר עזיבה והזנחה, פחות הבעה</text>
  <text x="200" y="186" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">תפיסות פסימיות ← יותר הזנחה, פחות הבעה</text>
  <text x="200" y="208" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">חרדה ← דווקא יותר הבעה</text></svg>`
};
const clustersTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>אשכול</th><th>הקטגוריות</th></tr></thead><tbody>
<tr><td><b>תפיסות פסימיות</b><br><span class="muted" style="font-size:.85rem">הטיות קוגניטיביות שליליות</span></td><td>פסימיות לגבי <b>תהליך</b> ההחלטה · לגבי <b>התחום</b> (\"הגברים היום לא בשלים להתחייבות\") · לגבי <b>השליטה</b> (\"זה עניין של מזל\")</td></tr>
<tr><td><b>חרדה</b><br><span class="muted" style="font-size:.85rem">תגובות רגשיות</span></td><td>חרדת <b>תהליך</b> (פרפקציוניזם) · חרדת <b>אי־ודאות</b> · חרדת <b>אחריות</b> (כאב ההחמצה) · חרדת <b>תוצאה</b> (חשש להיתקע)</td></tr>
<tr><td><b>תפיסה עצמית וזהות</b><br><span class="muted" style="font-size:.85rem">היבטים התפתחותיים ואישיותיים</span></td><td><b>יציבות</b> הזהות · <b>הערכה עצמית</b> · קונפליקט <b>היקשרות והיפרדות</b> · חרדת תפיסה עצמית כללית</td></tr></tbody></table></div>`;
