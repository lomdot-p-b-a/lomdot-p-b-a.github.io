const FIG={
 cover35:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="זיכרון שמתפרק: מילה ותמונה שהקשר ביניהן נקטע">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="96" y="86" width="84" height="40" rx="10" class="f-surf"/><text x="138" y="112" text-anchor="middle" font-size="15" font-weight="800" class="f-ink">soft</text>
  <rect x="226" y="72" width="80" height="68" rx="10" class="f-surf"/><circle cx="266" cy="100" r="16" class="f-c"/><path d="M240 132 l16-14 l12 10 l10-8 l16 12" class="s-c"/>
  <path d="M182 106 h14" class="s-c" stroke-width="3"/><path d="M210 106 h14" class="s-c" stroke-width="3"/>
  <path d="M199 96 l8 20" class="s-line" stroke-width="2.5"/>
  <path d="M150 150a26 26 0 1 0 18 34a20 20 0 0 1-18-34z" class="f-c"/>
  <text x="250" y="190" font-size="22" font-weight="800" class="f-mut">!</text>
 </svg>`,
 timeline35:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="ציר הזמן של שני הניסויים">
  <text x="390" y="22" text-anchor="start" font-size="13" font-weight="800" class="f-ink">ניסוי 1</text>
  <text x="390" y="122" text-anchor="start" font-size="13" font-weight="800" class="f-ink">ניסוי 2</text>
  ${[[40,"שינה: למידה 20:00 ← לילה בבית"],[70,"ערות: למידה 08:00 ← יום ער"]].map(([y,t])=>`<rect x="20" y="${y-16}" width="290" height="24" rx="12" class="f-surf"/><text x="300" y="${y}" text-anchor="start" font-size="12" class="f-ink">${t}</text>`).join("")}
  ${[[140,"שינה: למידה 20:00 ← לילה במעבדה"],[170,"חסך: ער מ־08:00 ← למידה 20:00 ← כל הלילה ער"]].map(([y,t],i)=>`<rect x="20" y="${y-16}" width="360" height="24" rx="12" class="${i?"f-c":"f-surf"}"/><text x="370" y="${y}" text-anchor="start" font-size="12" class="${i?"f-inv":"f-ink"}">${t}</text>`).join("")}
  <text x="20" y="100" text-anchor="end" font-size="11" class="f-mut">T1 מיד · T2 אחרי ~12 שעות · T3 יומיים אחרי</text>
  <text x="20" y="200" text-anchor="end" font-size="11" class="f-mut">ב־T2 של קבוצת החסך: כ־24 שעות בלי שינה</text>
 </svg>`,
 frag35:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="שני סוגי שכחה: פריט שנעלם מול קשר שנקטע">
  <text x="300" y="22" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">שכחת פריט</text>
  <text x="100" y="22" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">פיצול (שכחת קשר)</text>
  <rect x="250" y="44" width="100" height="34" rx="8" class="f-surf" stroke-dasharray="5 4"/><text x="300" y="66" text-anchor="middle" font-size="13" class="f-mut">soft ?</text>
  <rect x="250" y="110" width="100" height="44" rx="8" class="f-surf" stroke-dasharray="5 4"/><text x="300" y="137" text-anchor="middle" font-size="12" class="f-mut">אובייקט / נוף ?</text>
  <text x="300" y="178" text-anchor="middle" font-size="11" class="f-ink">לא זוכרים שהמילה הופיעה</text>
  <rect x="50" y="44" width="100" height="34" rx="8" class="f-c"/><text x="100" y="66" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">soft ✓</text>
  <path d="M100 80 v10" class="s-c"/><path d="M92 94 l16 8" class="s-line" stroke-width="2.5"/><path d="M100 104 v4" class="s-c"/>
  <rect x="50" y="110" width="100" height="44" rx="8" class="f-surf" stroke-dasharray="5 4"/><text x="100" y="137" text-anchor="middle" font-size="12" class="f-mut">אובייקט / נוף ?</text>
  <text x="100" y="178" text-anchor="middle" font-size="11" class="f-ink">זוכרים את המילה, לא את מה שהיה איתה</text>
 </svg>`
};
