const FIG={
 cover41:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="ראש עם פאזל">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M150 170 v-30 q-26 -10 -24 -44 q4 -44 54 -50 q56 -4 64 46 q4 20 -8 34 v14 h-26 v30z" class="f-surf"/>
  <rect x="160" y="74" width="34" height="34" rx="4" class="f-c"/><rect x="198" y="74" width="34" height="34" rx="4" class="f-c" opacity=".6"/><rect x="160" y="112" width="34" height="20" rx="4" class="f-c" opacity=".6"/>
  <circle cx="215" cy="121" r="8" class="f-c"/>
 </svg>`,
 ds41:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="מחקר האימוץ של טיינרי: סיכון גנטי וסביבה משפחתית">
  <path d="M30 170 h350" class="s-line"/>
  ${[[330,4.8,"סיכון נמוך","בית בריא"],[250,5.3,"סיכון נמוך","בית מופרע"],[170,5.8,"סיכון גבוה","בית בריא"],[90,36.8,"סיכון גבוה","בית מופרע"]].map(([x,v,a,b],i)=>`<rect x="${x-26}" y="${170-v*3.6}" width="52" height="${v*3.6}" rx="4" class="${i==3?"f-c":"f-soft"}"/><text x="${x}" y="${162-v*3.6}" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">⁦${v}%⁩</text><text x="${x}" y="186" text-anchor="middle" font-size="10" class="f-ink">${a}</text><text x="${x}" y="200" text-anchor="middle" font-size="10" class="f-mut">${b}</text>`).join("")}
 </svg>`
};
