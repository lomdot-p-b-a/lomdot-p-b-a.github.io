const FIG={
 cover36:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מסך טלוויזיה, זכוכית מגדלת וגרף">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="120" y="62" width="120" height="84" rx="10" class="f-surf"/><path d="M160 146 l-12 18 M200 146 l12 18" class="s-line" stroke-width="3"/>
  <path d="M168 84 l26 20 l-26 20z" class="f-c"/>
  <circle cx="262" cy="136" r="26" class="f-surf" stroke-width="4"/><path d="M280 154 l22 22" class="s-c" stroke-width="7" stroke-linecap="round"/>
  ${[[250,146],[258,136],[266,128],[274,120]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3" class="f-c"/>`).join("")}
 </svg>`,
 corr36:()=>`<svg viewBox="0 0 400 170" role="img" aria-label="שלושה גרפים: מתאם חיובי, שלילי ואפס">
  ${[[290,"חיובי",(i)=>140-i*9,"⁦r ≈ +1⁩"],[160,"שלילי",(i)=>50+i*9,"⁦r ≈ −1⁩"],[30,"אין מתאם",(i)=>[90,60,120,75,110,55,100,130,70,95][i],"⁦r ≈ 0⁩"]].map(([x0,l,f,rr])=>`<rect x="${x0}" y="20" width="100" height="130" rx="8" class="f-surf"/><text x="${x0+50}" y="14" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${l}</text><text x="${x0+50}" y="166" text-anchor="middle" font-size="11" class="f-mut">${rr}</text>${[...Array(10).keys()].map(i=>`<circle cx="${x0+10+i*9}" cy="${f(i)+((i*7)%3-1)*6}" r="3.5" class="f-c"/>`).join("")}`).join("")}
  
 </svg>`,
 exp36:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="מבנה ניסוי: מדגם, חלוקה אקראית, שתי קבוצות, מדידה">
  <rect x="150" y="10" width="100" height="34" rx="17" class="f-c"/><text x="200" y="32" text-anchor="middle" font-size="12" font-weight="800" class="f-inv">מדגם אקראי</text>
  <path d="M200 44 v14 M200 58 L110 78 M200 58 L290 78" class="s-line"/>
  <text x="250" y="56" text-anchor="end" font-size="10" class="f-mut">חלוקה אקראית</text>
  <rect x="220" y="80" width="140" height="44" rx="10" class="f-soft"/><text x="290" y="98" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">קבוצת ניסוי</text><text x="290" y="115" text-anchor="middle" font-size="10" class="f-ink">צופה בתוכנית אלימה</text>
  <rect x="40" y="80" width="140" height="44" rx="10" class="f-surf"/><text x="110" y="98" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">קבוצת ביקורת</text><text x="110" y="115" text-anchor="middle" font-size="10" class="f-ink">צופה בתוכנית לא אלימה</text>
  <path d="M290 124 v20 M110 124 v20" class="s-line"/>
  <rect x="60" y="146" width="280" height="34" rx="10" class="f-surf"/><text x="200" y="168" text-anchor="middle" font-size="12" class="f-ink">מודדים תוקפנות (המשתנה התלוי)</text>
  <text x="200" y="196" text-anchor="middle" font-size="10" class="f-mut">המשתנה הבלתי תלוי: סוג התוכנית</text>
 </svg>`
};
