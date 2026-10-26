const FIG={
 stages:()=>{const s=[["גיבוש","Forming","אי-ודאות"],["סערה","Storming","קונפליקט"],["נורמות","Norming","לכידות"],["ביצוע","Performing","עבודה"],["פירוק","Adjourning","סיום"]];
  return `<svg viewBox="0 0 400 170" role="img" aria-label="חמשת שלבי התפתחות הקבוצה">${arrowDef("sa")}
  <line x1="370" y1="62" x2="34" y2="62" class="s-line" stroke-dasharray="4 4" marker-end="url(#sa)"/>
  ${s.map(([h,e,d],i)=>{const x=360-i*80;return `<circle cx="${x}" cy="62" r="${i==3?28:24}" class="${i==3?"f-c":"f-soft"}"/><text x="${x}" y="67" text-anchor="middle" font-size="13" font-weight="700" class="${i==3?"f-inv":"f-c"}">${i+1}</text><text x="${x}" y="112" text-anchor="middle" font-size="13.5" font-weight="700" class="f-ink">${h}</text><text x="${x}" y="129" text-anchor="middle" font-size="10" class="f-mut">${e}</text><text x="${x}" y="148" text-anchor="middle" font-size="11" class="f-mut">${d}</text>`}).join("")}
  <text x="40" y="22" text-anchor="middle" font-size="10" class="f-mut">רק בקבוצה זמנית</text></svg>`},
 punct:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="מודל שיווי המשקל המקוטע">
  <line x1="30" y1="150" x2="380" y2="150" class="s-line"/>
  <path d="M370 140 L370 118 L215 104 L205 70 L195 66 L40 52 L40 22" class="s-c" stroke-width="3" fill="none"/>
  <circle cx="370" cy="140" r="6" class="f-c"/><circle cx="200" cy="68" r="8" class="f-c"/><circle cx="40" cy="22" r="6" class="f-c"/>
  <text x="345" y="170" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">פגישה ראשונה</text>
  <text x="200" y="170" text-anchor="middle" font-size="11.5" font-weight="700" class="f-c">אמצע הדרך: מעבר</text>
  <text x="44" y="170" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">דדליין</text>
  <text x="290" y="96" text-anchor="middle" font-size="11" class="f-mut">שלב 1: אינרציה</text>
  <text x="120" y="44" text-anchor="middle" font-size="11" class="f-mut">שלב 2: אינרציה חדשה</text>
  </svg>`,
 cover4:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="חמישה אנשים מחוברים סביב שולחן">
  <circle cx="200" cy="112" r="62" class="f-soft"/>${[[200,30],[290,80],[260,186],[140,186],[110,80]].map(([x,y])=>`<line x1="200" y1="112" x2="${x}" y2="${y}" class="s-line" stroke-dasharray="3 4"/>`).join("")}
  ${[[200,30],[290,80],[260,186],[140,186],[110,80]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="20" class="${i==0?"f-c":"f-surf"}"/><circle cx="${x}" cy="${y-5}" r="6" class="${i==0?"f-inv":"f-c"}"/><path d="M${x-10} ${y+12}c1.5-7 5.5-9 10-9s8.5 2 10 9z" class="${i==0?"f-inv":"f-c"}"/>`).join("")}
  <text x="200" y="117" text-anchor="middle" font-size="15" font-weight="700" class="f-c">קבוצה</text></svg>`
};
const cohTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>נורמות ביצוע גבוהות</th><th>נורמות ביצוע נמוכות</th></tr></thead><tbody>
<tr><td><b>לכידות גבוהה</b></td><td class="in">פריון גבוה</td><td class="out">פריון נמוך</td></tr>
<tr><td><b>לכידות נמוכה</b></td><td>פריון בינוני</td><td>פריון נמוך-בינוני</td></tr></tbody></table></div>`;
