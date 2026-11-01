const FIG={
 cover38:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="גלשן על גל ופעמון">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M112 150 q30 -40 60 -10 q30 30 60 0 q30 -30 60 -4" class="s-c" stroke-width="5" fill="none"/>
  <ellipse cx="190" cy="122" rx="40" ry="8" class="f-c" transform="rotate(-12 190 122)"/>
  <circle cx="196" cy="84" r="9" class="f-ink"/><path d="M196 93 v18 M196 100 l-14 6 M196 100 l14 -6 M196 111 l-8 10 M196 111 l10 8" class="s-line" stroke-width="4" stroke-linecap="round"/>
  <path d="M262 62 q14 0 14 18 v10 h-28 v-10 q0 -18 14 -18z" class="f-surf"/><circle cx="262" cy="94" r="4" class="f-c"/>
 </svg>`,
 pav38:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="שלושת שלבי ההתניה הקלאסית">
  ${[[30,"לפני","צליל (NS)","אין ריור","בשר (UCS)","ריור (UCR)"],[100,"בזמן","צליל + בשר","","","ריור (UCR)"],[170,"אחרי","צליל (CS)","","","ריור (CR)"]].map(([y,h,a,b,c,d])=>`<text x="390" y="${y+4}" text-anchor="start" font-size="13" font-weight="800" class="f-ink">${h}</text>
   <rect x="200" y="${y-18}" width="130" height="34" rx="10" class="f-soft"/><text x="265" y="${y+4}" text-anchor="middle" font-size="12" class="f-ink">${a}</text>
   <path d="M196 ${y} h-36" class="s-c" stroke-width="2.5"/><path d="M166 ${y-5} l-6 5 l6 5" class="s-c" stroke-width="2.5"/>
   <rect x="30" y="${y-18}" width="126" height="34" rx="10" class="${d==="ריור (CR)"?"f-c":"f-surf"}"/><text x="93" y="${y+4}" text-anchor="middle" font-size="12" class="${d==="ריור (CR)"?"f-inv":"f-ink"}">${b||d}</text>
   ${c?`<text x="265" y="${y+34}" text-anchor="middle" font-size="11" class="f-mut">${c} ← ${d}</text>`:""}`).join("")}
 </svg>`
};
