const FIG={
 cover46:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="חצים בין מחשבה למעשה">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <circle cx="150" cy="114" r="34" class="f-surf" stroke-width="3"/><text x="150" y="119" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">עמדה</text>
  <circle cx="250" cy="114" r="34" class="f-c"/><text x="250" y="119" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">מעשה</text>
  <path d="M184 100 q16 -14 32 0" class="s-c" stroke-width="3" fill="none"/><path d="M216 128 q-16 14 -32 0" class="s-line" stroke-width="3" fill="none"/>
 </svg>`,
 abc46:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="שלושת מרכיבי העמדה">
  <path d="M200 40 L310 160 L90 160Z" class="s-line" stroke-width="2" fill="none"/>
  ${[[200,40,"A","רגש"],[310,160,"B","התנהגות"],[90,160,"C","קוגניציה"]].map(([x,y,l,t])=>`<circle cx="${x}" cy="${y}" r="30" class="f-c"/><text x="${x}" y="${y-2}" text-anchor="middle" font-size="16" font-weight="800" class="f-inv">${l}</text><text x="${x}" y="${y+15}" text-anchor="middle" font-size="11" font-weight="800" class="f-inv">${t}</text>`).join("")}
  <text x="200" y="125" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">עמדה</text>
 </svg>`,
 dis46:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="ניסוי פסטינגר וקרלסמית: מי ששולם לו דולר דירג את הניסוי כמהנה יותר">
  <path d="M40 120 H360" class="s-line" stroke-width="2"/>
  <text x="372" y="124" text-anchor="end" font-size="10" class="f-mut">0</text>
  ${[[290,"קבוצת ביקורת",14,"down","f-mut"],[200,"דולר אחד",-70,"up","f-c"],[110,"20 דולר",3,"down","f-mut"]].map(([x,t,h,d,c])=>`<rect x="${x-30}" y="${h<0?120+h:120}" width="60" height="${Math.abs(h)}" class="${c}"/><text x="${x}" y="160" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${t}</text>`).join("")}
  <text x="200" y="40" text-anchor="middle" font-size="11" class="f-ink">״זה בעצם היה מעניין״</text>
  <text x="200" y="190" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">כמה נהנו מהמשימה המשעממת</text>
 </svg>`
};
