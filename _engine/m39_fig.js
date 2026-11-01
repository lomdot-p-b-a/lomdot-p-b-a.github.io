const FIG={
 cover39:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מוח ותמונה ישנה">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="210" y="70" width="80" height="70" rx="6" class="f-surf" transform="rotate(8 250 105)"/><circle cx="242" cy="98" r="10" class="f-c" transform="rotate(8 250 105)"/><path d="M220 130 l18-16 l14 10 l12-8 l18 14" class="s-c" transform="rotate(8 250 105)"/>
  <path d="M120 120 q-6 -40 30 -46 q14 -20 40 -6 q30 0 26 30 q14 26 -14 38 q-10 20 -40 8 q-30 10 -42 -24z" class="f-c"/>
  <path d="M150 90 q10 10 0 22 M176 82 q-8 16 6 26 M160 124 q14 -6 22 6" class="s-line" stroke="var(--surface)" stroke-width="3"/>
 </svg>`,
 as39:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="מודל אטקינסון ושיפרין">
  ${[[300,"זיכרון חושי","עד כ־2 שניות"],[170,"זיכרון קצר טווח","15–30 שניות"],[40,"זיכרון ארוך טווח","ללא הגבלה"]].map(([x,h,d],i)=>`<rect x="${x}" y="60" width="96" height="62" rx="12" class="${i==2?"f-c":"f-soft"}"/><text x="${x+48}" y="86" text-anchor="middle" font-size="12" font-weight="800" class="${i==2?"f-inv":"f-ink"}">${h}</text><text x="${x+48}" y="106" text-anchor="middle" font-size="11" class="${i==2?"f-inv":"f-ink"}">${d}</text>`).join("")}
  <path d="M296 91 h-26" class="s-c" stroke-width="2.5"/><path d="M276 85 l-6 6 l6 6" class="s-c" stroke-width="2.5"/>
  <path d="M166 91 h-26" class="s-c" stroke-width="2.5"/><path d="M146 85 l-6 6 l6 6" class="s-c" stroke-width="2.5"/>
  <text x="283" y="54" text-anchor="middle" font-size="10" class="f-mut">קשב</text><text x="153" y="54" text-anchor="middle" font-size="10" class="f-mut">חזרה</text>
  <path d="M90 124 q0 40 60 40 q60 0 60 -40" class="s-line" stroke-dasharray="4 4"/><text x="150" y="182" text-anchor="middle" font-size="10" class="f-mut">שליפה בחזרה לזיכרון העבודה</text>
  <path d="M348 124 v24" class="s-line"/><text x="340" y="162" text-anchor="middle" font-size="10" class="f-mut">מה שלא קיבל קשב נעלם</text>
  <text x="348" y="40" text-anchor="middle" font-size="11" class="f-ink">קלט מהחושים ↓</text>
 </svg>`,
 curve39:()=>`<svg viewBox="0 0 400 180" role="img" aria-label="עקומת השכחה של אבינגהאוס">
  <path d="M40 20 v130 h340" class="s-line"/>
  <path d="M40 26 C60 110, 110 118, 160 124 S300 130, 370 134" class="s-c" stroke-width="3"/>
  <circle cx="70" cy="90" r="4" class="f-c"/><text x="80" y="84" text-anchor="end" font-size="11" class="f-ink">20 דקות: כ־50% נשכח</text>
  <circle cx="190" cy="126" r="4" class="f-c"/><text x="198" y="114" text-anchor="end" font-size="11" class="f-ink">24 שעות: כ־70% נשכח</text>
  <text x="210" y="170" text-anchor="middle" font-size="10" class="f-mut">זמן מאז הלמידה →</text>
  <text x="26" y="90" text-anchor="middle" font-size="10" class="f-mut" transform="rotate(-90 26 90)">כמה נשמר</text>
 </svg>`
};
