const FIG={
 cover37:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="עין, אוזן וגלים">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M120 110 q50 -44 100 0 q-50 44 -100 0z" class="f-surf" stroke-width="2"/><circle cx="170" cy="110" r="18" class="f-c"/><circle cx="170" cy="110" r="7" class="f-ink"/>
  <path d="M236 92 q24 -4 26 18 q0 14 -12 18 q-6 2 -6 10" class="s-c" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M272 96 q8 14 0 28 M284 88 q14 22 0 44" class="s-line" stroke-width="2.5"/>
  <path d="M110 166 q12 -14 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" class="s-c" stroke-width="3"/>
 </svg>`,
 wave37:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="שני גלים: אורך גל ומשרעת">
  <text x="390" y="20" text-anchor="start" font-size="12" font-weight="800" class="f-ink">גל ארוך, משרעת נמוכה</text>
  <path d="M20 60 q40 -26 80 0 t80 0 t80 0 t80 0" class="s-c" stroke-width="3"/>
  <path d="M20 60 h340" class="s-line" stroke-dasharray="4 4"/>
  <path d="M60 30 h80" class="s-line"/><text x="100" y="26" text-anchor="middle" font-size="10" class="f-mut">אורך גל</text>
  <text x="390" y="106" text-anchor="start" font-size="12" font-weight="800" class="f-ink">גל קצר, משרעת גבוהה</text>
  <path d="M20 150 q15 -40 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" class="s-c" stroke-width="3"/>
  <path d="M20 150 h340" class="s-line" stroke-dasharray="4 4"/>
  <path d="M376 150 v-20" class="s-line"/><text x="380" y="194" text-anchor="start" font-size="10" class="f-mut">משרעת = עוצמה</text>
  <text x="20" y="194" text-anchor="end" font-size="10" class="f-mut">גל קצר = תדירות גבוהה</text>
 </svg>`,
 gest37:()=>`<svg viewBox="0 0 400 150" role="img" aria-label="עקרונות גשטלט: קרבה, דמיון, סגירות">
  ${[0,1,2].map(g=>[0,1].map(c=>[0,1,2].map(r=>`<circle cx="${300+g*30+c*10-60}" cy="${40+r*14}" r="4" class="f-c"/>`).join("")).join("")).join("")}
  <text x="280" y="110" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">קרבה</text>
  ${[0,1,2,3,4].map(c=>[0,1,2].map(r=>`<circle cx="${150+c*14}" cy="${40+r*14}" r="4" class="${c%2?"f-mut":"f-c"}"/>`).join("")).join("")}
  <text x="178" y="110" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">דמיון</text>
  <circle cx="80" cy="54" r="26" class="s-c" stroke-width="3" stroke-dasharray="30 11"/>
  <text x="80" y="110" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">סגירות</text>
  <text x="200" y="138" text-anchor="middle" font-size="10" class="f-mut">המוח ״משלים״ ומארגן את מה שהוא קולט</text>
 </svg>`
};
