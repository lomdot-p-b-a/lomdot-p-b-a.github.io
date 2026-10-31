const FIG={
 cover31:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="נוירון">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M300 114 l26 -30 M300 114 l30 -6 M300 114 l28 22 M300 114 l10 34 M300 114 l6 -38" class="s-c" stroke-width="5" stroke-linecap="round" fill="none"/>
  <circle cx="300" cy="114" r="22" class="f-c"/>
  <line x1="278" y1="114" x2="112" y2="114" class="s-line" stroke-width="5"/>
  ${[240,200,160].map(x=>`<rect x="${x-16}" y="104" width="32" height="20" rx="10" class="f-surf"/>`).join("")}
  <path d="M112 114 l-22 -22 M112 114 l-26 4 M112 114 l-18 24" class="s-line" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="90" cy="92" r="7" class="f-c"/><circle cx="86" cy="118" r="7" class="f-c"/><circle cx="94" cy="138" r="7" class="f-c"/></svg>`,
 parts:()=>`<svg viewBox="0 0 400 170" role="img" aria-label="חלקי הנוירון">
  <path d="M340 70 l26 -26 M340 70 l30 2 M340 70 l22 28 M340 70 l-4 -34" class="s-c" stroke-width="4" stroke-linecap="round" fill="none"/>
  <circle cx="340" cy="70" r="18" class="f-c"/>
  <line x1="322" y1="70" x2="96" y2="70" class="s-line" stroke-width="4"/>
  ${[280,236,192,148].map(x=>`<rect x="${x-17}" y="61" width="34" height="18" rx="9" class="f-surf"/>`).join("")}
  <path d="M96 70 l-24 -20 M96 70 l-28 4 M96 70 l-20 24" class="s-line" stroke-width="3" fill="none"/>
  <circle cx="72" cy="50" r="6" class="f-c"/><circle cx="68" cy="74" r="6" class="f-c"/><circle cx="76" cy="94" r="6" class="f-c"/>
  <text x="362" y="120" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">דנדריטים</text>
  <text x="330" y="140" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">גוף התא</text>
  <text x="214" y="104" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">אקסון עם מעטפת מיילין</text>
  <text x="70" y="124" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">כפתורים סופיים</text>
  <text x="200" y="160" text-anchor="middle" font-size="10.5" class="f-mut">כיוון המידע: מהדנדריטים וגוף התא, לאורך האקסון, אל הכפתורים</text></svg>`,
 ap:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="פוטנציאל הפעולה">
  <line x1="40" y1="20" x2="40" y2="170" class="s-line"/><line x1="40" y1="170" x2="390" y2="170" class="s-line"/>
  <line x1="40" y1="118" x2="390" y2="118" class="s-line" stroke-dasharray="4 4" opacity=".5"/><line x1="40" y1="102" x2="390" y2="102" class="s-line" stroke-dasharray="2 4" opacity=".5"/>
  <path d="M40 118 L120 118 L136 102 L150 34 L164 70 L182 130 L210 136 L250 120 L390 118" fill="none" class="s-c" stroke-width="3"/>
  <text x="36" y="38" text-anchor="start" font-size="10" class="f-mut">⁦+40⁩</text><text x="36" y="106" text-anchor="start" font-size="10" class="f-mut">⁦-55⁩</text><text x="36" y="122" text-anchor="start" font-size="10" class="f-mut">⁦-70⁩</text>
  <text x="300" y="98" text-anchor="middle" font-size="10" class="f-mut">סף העירור</text><text x="300" y="132" text-anchor="middle" font-size="10" class="f-mut">פוטנציאל המנוחה</text>
  <text x="150" y="24" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">שיא</text>
  <text x="196" y="152" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">היפר־פולריזציה</text>
  <text x="104" y="60" text-anchor="middle" font-size="10" class="f-ink">Na⁺ נכנס</text><text x="196" y="80" text-anchor="middle" font-size="10" class="f-ink">K⁺ יוצא</text>
  <text x="215" y="190" text-anchor="middle" font-size="10" class="f-mut">זמן (כ־2 אלפיות השנייה), מתח הממברנה במ״ו</text></svg>`,
 ions:()=>{const R=[["Na⁺","בעיקר בחוץ","דיפוזיה ולחץ חשמלי: פנימה","נשאר בחוץ בזכות המשאבה"],["K⁺","בעיקר בפנים","דיפוזיה החוצה, לחץ חשמלי פנימה","כמעט מאוזן"],["Cl⁻","בעיקר בחוץ","דיפוזיה פנימה, לחץ חשמלי החוצה","מאוזן"],["A⁻","רק בפנים","לא עובר את הממברנה","נשאר בפנים"]];
  return `<div class="tblwrap"><table class="tbl"><tr><th>יון</th><th>ריכוז</th><th>הכוחות</th><th>התוצאה</th></tr>${R.map(r=>`<tr>${r.map((c,i)=>i?`<td>${c}</td>`:`<td><b>${c}</b></td>`).join("")}</tr>`).join("")}</table></div>`}
};
