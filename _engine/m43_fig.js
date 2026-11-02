const FIG={
 cover43:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="צופה מסתכל על אדם, והסיטואציה ברקע">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="150" y="60" width="120" height="110" rx="14" class="f-surf" stroke-width="2"/>
  <circle cx="210" cy="96" r="14" class="f-c"/><path d="M190 150 q20 -46 40 0z" class="f-c"/>
  <circle cx="122" cy="110" r="12" class="f-mut"/><path d="M104 150 q18 -40 36 0z" class="f-mut"/>
  <path d="M136 106 L192 98" class="s-c" stroke-width="2.5" stroke-dasharray="5 4"/>
  <text x="210" y="185" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">אדם או מצב?</text>
 </svg>`,
 kelley43:()=>`<svg viewBox="0 0 400 236" role="img" aria-label="שלושת הקריטריונים של קלי">
  <rect x="120" y="10" width="160" height="40" rx="10" class="f-soft"/>
  <text x="200" y="35" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">עקביות גבוהה</text>
  <path d="M200 50 v14 M110 64 h180 M110 64 v14 M290 64 v14" class="s-line" stroke-width="2"/>
  <rect x="210" y="78" width="160" height="78" rx="10" class="f-surf" stroke-width="2"/>
  <text x="290" y="102" text-anchor="middle" font-size="12" class="f-ink">ייחודיות <tspan font-weight="800">גבוהה</tspan></text>
  <text x="290" y="124" text-anchor="middle" font-size="12" class="f-ink">קונצנזוס <tspan font-weight="800">גבוה</tspan></text>
  <rect x="30" y="78" width="160" height="78" rx="10" class="f-surf" stroke-width="2"/>
  <text x="110" y="102" text-anchor="middle" font-size="12" class="f-ink">ייחודיות <tspan font-weight="800">נמוכה</tspan></text>
  <text x="110" y="124" text-anchor="middle" font-size="12" class="f-ink">קונצנזוס <tspan font-weight="800">נמוך</tspan></text>
  <path d="M290 156 v20 M110 156 v20" class="s-line" stroke-width="2"/>
  <rect x="210" y="176" width="160" height="40" rx="10" class="f-c"/>
  <text x="290" y="201" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">ייחוס חיצוני (למצב)</text>
  <rect x="30" y="176" width="160" height="40" rx="10" class="f-c"/>
  <text x="110" y="201" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">ייחוס פנימי (לאדם)</text>
 </svg>`,
 sfp43:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="מעגל הנבואה המגשימה את עצמה">
  ${[[320,"ציפייה","״היא מבריקה״"],[200,"התנהגות שלי","מחייך, מלמד יותר"],[80,"התנהגות שלה","מגיבה בהתלהבות"]].map(([x,a,b])=>`<rect x="${x-52}" y="30" width="104" height="70" rx="12" class="f-soft"/><text x="${x}" y="58" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">${a}</text><text x="${x}" y="80" text-anchor="middle" font-size="11" class="f-mut">${b}</text>`).join("")}
    <path d="M266 58 l-10 7 l10 7 M146 58 l-10 7 l10 7" class="s-c" stroke-width="2.5" fill="none"/>
  <path d="M80 100 q0 60 120 60 q120 0 120 -60" class="s-c" stroke-width="2.5" fill="none" stroke-dasharray="6 4"/>
  <text x="200" y="184" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">ההתנהגות שלה ״מאשרת״ את הציפייה</text>
 </svg>`
};
