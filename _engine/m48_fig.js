const FIG={
 cover48:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="שתי קבוצות של דמויות">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  ${[[150,"f-c"],[175,"f-c"],[125,"f-c"],[255,"f-mut"],[280,"f-mut"],[230,"f-mut"]].map(([x,c],i)=>`<circle cx="${x}" cy="${i%3==0?92:100}" r="11" class="${c}"/><path d="M${x-14} ${i%3==0?134:142} q14 -32 28 0z" class="${c}"/>`).join("")}
  <path d="M202 70 v90" class="s-line" stroke-width="3" stroke-dasharray="6 5"/>
  <text x="200" y="190" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">״אנחנו״ ו״הם״</text>
 </svg>`,
 sid48:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="שלושת שלבי תאוריית הזהות החברתית">
  ${[[320,"1. ממיינים","״הוא סטודנט,","היא מהנדסת״"],[200,"2. מזדהים","״אני שייך","לקבוצה הזו״"],[80,"3. משווים","״אנחנו טובים","מהם״"]].map(([x,t,a,b])=>`<rect x="${x-52}" y="20" width="104" height="96" rx="12" class="f-soft"/><text x="${x}" y="48" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">${t}</text><text x="${x}" y="76" text-anchor="middle" font-size="11" class="f-mut">${a}</text><text x="${x}" y="94" text-anchor="middle" font-size="11" class="f-mut">${b}</text>`).join("")}
  <path d="M266 64 l-10 7 l10 7 M146 64 l-10 7 l10 7" class="s-c" stroke-width="2.5" fill="none"/>
  <rect x="100" y="138" width="200" height="34" rx="10" class="f-c"/><text x="200" y="160" text-anchor="middle" font-size="12" font-weight="800" class="f-inv">הערכה עצמית עולה</text>
 </svg>`,
 threat48:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="מעגל איום הסטראוטיפ">
  ${[[200,40,"סטראוטיפ תרבותי","״נשים חלשות במתמטיקה״"],[320,110,"איום הסטראוטיפ","״אני עלולה להיכשל״"],[200,180,"ביצוע נמוך","״נכשלתי במבחן״"],[80,110,"אי־הזדהות","״מתמטיקה לא חשובה לי״"]].map(([x,y,t,s])=>`<rect x="${x-74}" y="${y-24}" width="148" height="48" rx="10" class="${t=="איום הסטראוטיפ"?"f-c":"f-soft"}"/><text x="${x}" y="${y-4}" text-anchor="middle" font-size="12" font-weight="800" class="${t=="איום הסטראוטיפ"?"f-inv":"f-ink"}">${t}</text><text x="${x}" y="${y+14}" text-anchor="middle" font-size="10" class="${t=="איום הסטראוטיפ"?"f-inv":"f-mut"}">${s}</text>`).join("")}
  <path d="M262 52 q30 10 40 34 M302 136 q-10 24 -40 32 M138 168 q-30 -8 -40 -34 M98 86 q10 -26 40 -34" class="s-c" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
 </svg>`
};
