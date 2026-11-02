const FIG={
 cover42:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="נעל זכוכית ושתי דמויות">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M150 150 q-4 -30 20 -40 q20 -6 34 14 l30 6 q14 4 10 20z" class="f-surf" stroke-width="2"/>
  <path d="M168 150 l-6 18 M232 150 v18" class="s-line" stroke-width="3"/>
  ${[[270,70,"f-c"],[300,86,"f-mut"]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="10" class="${c}"/><path d="M${x-14} ${y+42} q14 -32 28 0z" class="${c}"/>`).join("")}
 </svg>`,
 corr42:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="שלושה הסברים אפשריים למתאם">
  ${[[320,"1","X ← Y"],[200,"2","Y ← X"],[80,"3","Z גורם לשניהם"]].map(([x,n,t],i)=>`<rect x="${x-56}" y="20" width="112" height="120" rx="12" class="f-soft"/><text x="${x}" y="44" text-anchor="middle" font-size="14" font-weight="800" class="f-ink">(${n})</text>
   <circle cx="${x+28}" cy="${i==2?100:84}" r="18" class="f-surf"/><text x="${x+28}" y="${i==2?105:89}" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">X</text>
   <circle cx="${x-28}" cy="${i==2?100:84}" r="18" class="f-surf"/><text x="${x-28}" y="${i==2?105:89}" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">Y</text>
   ${i==0?`<path d="M${x+8} 84 h-16" class="s-c" stroke-width="2.5"/><path d="M${x-4} 79 l-6 5 l6 5" class="s-c" stroke-width="2.5"/>`:""}
   ${i==1?`<path d="M${x-8} 84 h16" class="s-c" stroke-width="2.5"/><path d="M${x+4} 79 l6 5 l-6 5" class="s-c" stroke-width="2.5"/>`:""}
   ${i==2?`<circle cx="${x}" cy="62" r="14" class="f-c"/><text x="${x}" y="67" text-anchor="middle" font-size="12" font-weight="800" class="f-inv">Z</text><path d="M${x+8} 74 l12 10 M${x-8} 74 l-12 10" class="s-c" stroke-width="2.5"/>`:""}`).join("")}
  <text x="200" y="166" text-anchor="middle" font-size="11" class="f-mut">X = הערכה עצמית · Y = הישגים · Z = משכל ומעמד</text>
 </svg>`
};
