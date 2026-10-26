const FIG={
 cover11:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="בית מלא בקופסאות, ויד מושטת">
  <circle cx="200" cy="114" r="90" class="f-soft"/>
  <path d="M120 112 L200 50 L280 112 V196 H120z" class="f-surf"/>
  ${[[134,160,40,34],[176,160,34,34],[212,150,52,44],[140,128,30,30],[174,132,44,26],[222,124,28,24],[186,108,26,22]].map(([x,y,w,h],i)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" class="${i%2?"f-c":"f-mut"}" opacity="${i%2?.75:.45}"/>`).join("")}
  <path d="M300 150c14-6 30-6 44 2" class="s-c" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="296" cy="150" r="9" class="f-c"/></svg>`,
 stages:()=>{const S=[["1","מסודר","הכל נגיש ותקין"],["2","סימני עומס","אין כביסה, הדחה או הדברה. עוד יש סדר"],["3","נקודת מפנה","חדר מלא, זבל ומזיקים. צריך אנשי מקצוע"],["4","מחוץ לבית","אין מקום לישון או לבשל"],["5","סכנה","אין חשמל, מים וביוב. התערבות אינטנסיבית"]];
  return `<svg viewBox="0 0 400 250" role="img" aria-label="חמשת שלבי ההתפתחות של הפרעת האגרנות">
  ${S.map(([n,h,d],i)=>{const y=12+i*46,w=360;return `<rect x="${380-w}" y="${y}" width="${w}" height="38" rx="10" class="${i==2?"f-c":"f-soft"}" ${i>2?'opacity="1"':""}/><circle cx="362" cy="${y+19}" r="12" class="${i==2?"f-surf":"f-c"}"/><text x="362" y="${y+24}" text-anchor="middle" font-size="13" font-weight="800" class="${i==2?"f-ink":"f-inv"}">${n}</text><text x="340" y="${y+17}" text-anchor="start" font-size="12.5" font-weight="700" class="${i==2?"f-inv":"f-ink"}">${h}</text><text x="340" y="${y+32}" text-anchor="start" font-size="10" class="${i==2?"f-inv":"f-mut"}">${d}</text>`}).join("")}</svg>`},
 dilemma:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="הדילמה: חופש הפרט מול חובה להגן">
  <path d="M200 30V150M150 160H250" class="s-c" stroke-width="3"/>
  <path d="M70 62 L330 48" class="s-line" stroke-width="3"/>
  <circle cx="200" cy="55" r="7" class="f-c"/>
  <path d="M300 50 L270 100 H330z" class="f-soft"/><path d="M100 64 L70 112 H130z" class="f-soft"/>
  <text x="300" y="128" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">חופש הפרט</text>
  <text x="300" y="146" text-anchor="middle" font-size="11" class="f-mut">אוטונומיה, פרטיות</text>
  <text x="100" y="136" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">חובה להגן ולטפל</text>
  <text x="100" y="154" text-anchor="middle" font-size="11" class="f-mut">בריאות, בטיחות, שכנים</text>
  <text x="200" y="184" text-anchor="middle" font-size="11.5" class="f-mut">ומעליהן: טובת האגרן מול טובת הסביבה</text></svg>`
};
const waysTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>הדרך</th><th>מה השיגה</th><th>מה המחיר</th></tr></thead><tbody>
<tr><td><b>מעקב תקופתי</b></td><td>יצחק חי כרצונו</td><td class="out">אין שום שיפור במצבו</td></tr>
<tr><td><b>התערבות \"בחסות החוק\"</b></td><td>שיפור משמעותי בתנאים הפיזיים</td><td class="out">פגיעה באוטונומיה ובפרטיות, וערעור חזק של מצבו הנפשי</td></tr>
<tr><td><b>התערבות \"בהסכמה\"</b></td><td class="in">פינוי, חיבור תשתיות, בדיקות, אשפוז ומעבר לבית אבות</td><td>הרבה זמן, סבלנות והשקעה רגשית</td></tr></tbody></table></div>`;
