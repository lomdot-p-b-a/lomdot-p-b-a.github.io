const FIG={
 cover30:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מוח במבט מלמעלה עם שתי ההמיספרות">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M196 40 C150 38 118 66 116 108 C114 150 146 186 196 188 Z" class="f-c"/>
  <path d="M204 40 C250 38 282 66 284 108 C286 150 254 186 204 188 Z" class="f-surf"/>
  <path d="M140 80 q20 10 40 0 M136 112 q24 12 48 0 M144 146 q20 10 40 0" fill="none" class="s-line" stroke-width="2.5" opacity=".6"/>
  <path d="M220 80 q20 10 40 0 M216 112 q24 12 48 0 M220 146 q20 10 40 0" fill="none" class="s-c" stroke-width="2.5" opacity=".7"/>
  <rect x="194" y="92" width="12" height="44" rx="5" class="f-ink" opacity=".35"/></svg>`,
 split:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="ניסוי הריח במוח החצוי">
  <rect x="214" y="30" width="150" height="110" rx="40" class="f-surf"/><rect x="36" y="30" width="150" height="110" rx="40" class="f-c"/>
  <line x1="200" y1="24" x2="200" y2="146" class="s-line" stroke-width="3" stroke-dasharray="6 5"/>
  <text x="289" y="62" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">המיספרה ימנית</text>
  <text x="289" y="84" text-anchor="middle" font-size="10.5" class="f-mut">מריחה את הוורד</text>
  <text x="289" y="102" text-anchor="middle" font-size="10.5" class="f-mut">שולטת ביד שמאל</text>
  <text x="289" y="120" text-anchor="middle" font-size="10.5" class="f-mut">אין לה דיבור</text>
  <text x="111" y="62" text-anchor="middle" font-size="12" font-weight="700" class="f-inv">המיספרה שמאלית</text>
  <text x="111" y="84" text-anchor="middle" font-size="10.5" class="f-inv">לא קיבלה את הריח</text>
  <text x="111" y="102" text-anchor="middle" font-size="10.5" class="f-inv">שולטת בדיבור</text>
  <text x="111" y="120" text-anchor="middle" font-size="10.5" class="f-inv">״אני לא מריח כלום״</text>
  <text x="200" y="166" text-anchor="middle" font-size="11" class="f-ink">כפיס המוח נחתך: המידע לא עובר בין הצדדים</text>
  <text x="200" y="186" text-anchor="middle" font-size="10.5" class="f-mut">ריח לנחיר ימין ← יד שמאל בוחרת ורד, אבל המנותח אומר שלא הריח דבר</text></svg>`,
 timeline:()=>{const P=[["היפוקרטס","המוח, לא הלב"],["דקארט","רפלקסים, אצטרובל"],["גלוואני","חשמל ושריר"],["מילר","אנרגיות עצביות"],["ברוקה","אזור הדיבור"],["קחל","נוירונים נפרדים"]];
  return `<svg viewBox="0 0 400 150" role="img" aria-label="ציר זמן של שורשי התחום">${arrowDef("tl")}
  <line x1="392" y1="62" x2="8" y2="62" class="s-line" marker-end="url(#tl)"/>
  ${P.map(([h,d],i)=>{const x=362-i*64;return `<circle cx="${x}" cy="62" r="10" class="f-c"/><text x="${x}" y="${i%2?100:34}" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${h}</text><text x="${x}" y="${i%2?116:50}" text-anchor="middle" font-size="9.5" class="f-mut">${d}</text>`}).join("")}
  <text x="200" y="142" text-anchor="middle" font-size="10" class="f-mut">מהעת העתיקה ועד סוף המאה ה־19</text></svg>`}
};
