const FIG={
 cover45:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="דמות מול מראה">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="215" y="50" width="70" height="120" rx="35" class="f-surf" stroke-width="3"/>
  <circle cx="250" cy="96" r="13" class="f-mut"/><path d="M232 140 q18 -36 36 0z" class="f-mut"/>
  <circle cx="150" cy="96" r="14" class="f-c"/><path d="M130 150 q20 -44 40 0z" class="f-c"/>
  <text x="200" y="195" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">מי אני?</text>
 </svg>`,
 locus45:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="מקור שליטה פנימי וחיצוני">
  ${[[295,"מקור שליטה פנימי","״אם אשקיע מאמץ,","אני יכולה לנצח״","f-c"],[105,"מקור שליטה חיצוני","״מה שלא אעשה,","פשוט לא הולך לי״","f-mut"]].map(([x,t,a,b,c])=>`<rect x="${x-90}" y="20" width="180" height="120" rx="14" class="f-soft"/><rect x="${x-90}" y="20" width="180" height="36" rx="14" class="${c}"/><text x="${x}" y="44" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">${t}</text><text x="${x}" y="86" text-anchor="middle" font-size="13" class="f-ink">${a}</text><text x="${x}" y="108" text-anchor="middle" font-size="13" class="f-ink">${b}</text>`).join("")}
  <text x="200" y="172" text-anchor="middle" font-size="12" class="f-mut">רוטר: באיזו מידה אני מאמין שמה שקורה לי תלוי בי</text>
 </svg>`
};
