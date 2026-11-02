const FIG={
 cover44:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="משקפיים ומאזניים">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <circle cx="165" cy="100" r="28" class="f-surf" stroke-width="3"/><circle cx="235" cy="100" r="28" class="f-surf" stroke-width="3"/>
  <path d="M193 100 q7 -8 14 0" class="s-line" stroke-width="3" fill="none"/>
  <circle cx="165" cy="100" r="16" class="f-c" opacity=".35"/><circle cx="235" cy="100" r="16" class="f-c" opacity=".35"/>
  <path d="M150 160 h100 M200 140 v20" class="s-line" stroke-width="3"/>
  <text x="200" y="185" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">רואים דרך האמונות</text>
 </svg>`,
 podium44:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="דוכן המנצחים: הארד שמח יותר מהכסף">
  ${[[200,70,"1","זהב","הכי שמח"],[300,100,"2","כסף","״כמעט זהב״"],[100,120,"3","ארד","״כמעט כלום״"]].map(([x,y,n,m,t])=>`<rect x="${x-46}" y="${y}" width="92" height="${170-y}" rx="6" class="${n=="2"?"f-mut":"f-c"}"/><text x="${x}" y="${y+28}" text-anchor="middle" font-size="18" font-weight="800" class="f-inv">${n}</text><text x="${x}" y="${y-30}" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${m}</text><text x="${x}" y="${y-12}" text-anchor="middle" font-size="11" class="f-mut">${t}</text>`).join("")}
  <text x="200" y="196" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">סדר האושר: ראשון, שלישי, שני</text>
 </svg>`
};
