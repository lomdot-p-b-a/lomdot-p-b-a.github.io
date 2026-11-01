const FIG={
 cover40:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="לב, דופק ושמש">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M200 160 l-44 -42 a24 24 0 0 1 44 -30 a24 24 0 0 1 44 30z" class="f-c"/>
  <path d="M110 120 h40 l10 -24 l14 46 l12 -32 l8 10 h96" class="s-line" stroke-width="3" stroke="var(--surface)"/>
  <circle cx="286" cy="62" r="14" class="f-surf"/>${[0,45,90,135,180,225,270,315].map(a=>`<path d="M${286+20*Math.cos(a*Math.PI/180)} ${62+20*Math.sin(a*Math.PI/180)} L${286+27*Math.cos(a*Math.PI/180)} ${62+27*Math.sin(a*Math.PI/180)}" class="s-c" stroke-width="3"/>`).join("")}
 </svg>`,
 yd40:()=>`<svg viewBox="0 0 400 180" role="img" aria-label="ביצוע כפונקציה של לחץ: עקומת U הפוכה">
  <path d="M40 20 v130 h340" class="s-line"/>
  <path d="M50 140 C130 20, 250 20, 370 140" class="s-c" stroke-width="3"/>
  <circle cx="210" cy="50" r="5" class="f-c"/><text x="210" y="38" text-anchor="middle" font-size="11" font-weight="800" class="f-ink">רמה אופטימלית</text>
  <text x="150" y="122" text-anchor="middle" font-size="11" class="f-ink">לחץ טוב (eustress)</text>
  <text x="275" y="122" text-anchor="middle" font-size="11" class="f-ink">מצוקה (distress)</text>
  <text x="210" y="170" text-anchor="middle" font-size="10" class="f-mut">רמת הלחץ →</text>
  <text x="26" y="86" text-anchor="middle" font-size="10" class="f-mut" transform="rotate(-90 26 86)">ביצוע</text>
 </svg>`,
 gas40:()=>`<svg viewBox="0 0 400 170" role="img" aria-label="שלושת שלבי תסמונת ההסתגלות הכללית">
  <path d="M20 110 h360" class="s-line" stroke-dasharray="4 4"/><text x="384" y="106" text-anchor="start" font-size="9" class="f-mut">רמה רגילה</text>
  <path d="M370 110 l-20 0 q-10 0 -14 30 q-6 -90 -20 -70 h-150 q-20 0 -40 30 t-80 50" class="s-c" stroke-width="3"/>
  ${[[330,"אזעקה"],[220,"התנגדות"],[90,"תשישות"]].map(([x,t])=>`<text x="${x}" y="24" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${t}</text>`).join("")}
  <path d="M290 18 v130 M140 18 v130" class="s-line" stroke-dasharray="2 4"/>
  <text x="200" y="164" text-anchor="middle" font-size="10" class="f-mut">הזמן מתקדם מימין לשמאל</text>
 </svg>`
};
