const FIG={
 cover47:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מגפון וגלי קול">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M230 84 L170 100 V128 L230 144Z" class="f-c"/><rect x="152" y="100" width="20" height="28" rx="4" class="f-c"/>
  <path d="M246 96 q14 18 0 36 M260 86 q24 28 0 56" class="s-c" stroke-width="3" fill="none"/>
 </svg>`,
 elm47:()=>`<svg viewBox="0 0 400 230" role="img" aria-label="שני מסלולי השכנוע">
  <rect x="140" y="10" width="120" height="34" rx="10" class="f-soft"/><text x="200" y="32" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">מסר משכנע</text>
  <path d="M200 44 v12 M100 56 h200 M100 56 v14 M300 56 v14" class="s-line" stroke-width="2"/>
  ${[[300,"מסלול מרכזי","מוטיבציה ויכולת לחשוב","מתמקדים בטיעונים","שינוי עמיד, משפיע על התנהגות","f-c"],[100,"מסלול היקפי","אין עניין, הסחה, עומס","רמזים: מקור מושך, מוכר","שינוי שטחי וקצר","f-mut"]].map(([x,t,a,b,c,k])=>`<rect x="${x-92}" y="70" width="184" height="36" rx="10" class="${k}"/><text x="${x}" y="93" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">${t}</text>
  <text x="${x}" y="130" text-anchor="middle" font-size="12" class="f-ink">${a}</text><text x="${x}" y="152" text-anchor="middle" font-size="12" class="f-ink">${b}</text>
  <rect x="${x-92}" y="168" width="184" height="34" rx="10" class="f-soft"/><text x="${x}" y="190" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${c}</text>`).join("")}
 </svg>`,
 prim47:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="אפקט הראשונות ואפקט האחרונות">
  ${[[60,"ראשונות","מסר 1","מסר 2","זמן","תגובה","מסר 1 מנצח"],[140,"אחרונות","מסר 1","זמן","מסר 2","תגובה","מסר 2 מנצח"]].map(([y,t,a,b,c,d,w])=>`<text x="370" y="${y-22}" text-anchor="start" font-size="13" font-weight="800" class="f-ink">${t}</text>
  ${[a,b,c,d].map((s,i)=>`<rect x="${300-i*80}" y="${y-12}" width="70" height="30" rx="8" class="${s=="זמן"?"f-soft":s=="תגובה"?"f-c":"f-surf"}" ${s.startsWith("מסר")?'stroke-width="2"':''}/><text x="${335-i*80}" y="${y+8}" text-anchor="middle" font-size="12" font-weight="800" class="${s=="תגובה"?"f-inv":"f-ink"}">${s}</text>`).join("")}
  <text x="200" y="${y+38}" text-anchor="middle" font-size="11" font-weight="800" class="f-ink">${w}</text>`).join("")}
 </svg>`
};
