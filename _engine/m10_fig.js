const FIG={
 cover10:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="לוח שנה של ארבעה שבועות">
  <circle cx="200" cy="112" r="90" class="f-soft"/>
  <rect x="112" y="40" width="176" height="150" rx="16" class="f-surf"/><rect x="112" y="40" width="176" height="34" rx="16" class="f-c"/><rect x="112" y="60" width="176" height="14" class="f-c"/>
  <text x="200" y="63" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">30 יום</text>
  ${[0,1,2,3].map(r=>[0,1,2,3,4,5,6].map(c=>`<circle cx="${270-c*23}" cy="${92+r*26}" r="7" class="${r*7+c<30?"f-c":"f-soft"}" ${r*7+c<30?'opacity=".8"':""}/>`).join("")).join("")}</svg>`,
 weeks:()=>{const W=["בסיס","שבוע 1","שבוע 2","שבוע 3","שבוע 4"];
  return `<svg viewBox="0 0 400 176" role="img" aria-label="מהלך המחקר: בסיס ואז ארבעה מבחנים שבועיים">${arrowDef("wk")}
  <line x1="378" y1="60" x2="22" y2="60" class="s-c" marker-end="url(#wk)"/>
  ${W.map((w,i)=>{const x=350-i*75;return `<circle cx="${x}" cy="60" r="${i==0?12:9}" class="${i==0?"f-surf":"f-c"}"/><text x="${x}" y="34" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">${w}</text><text x="${x}" y="88" text-anchor="middle" font-size="10.5" class="f-mut">מבחן</text>`}).join("")}
  <text x="350" y="108" text-anchor="middle" font-size="10.5" font-weight="700" class="f-c">הגרלה</text>
  <rect x="20" y="120" width="360" height="46" rx="12" class="f-soft"/>
  <text x="200" y="140" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">הימנעות (62): מפסיקים, ומקבלים תגמול על שתן נקי</text>
  <text x="200" y="157" text-anchor="middle" font-size="11.5" class="f-mut">ניטור (26): לא מתבקשים להפסיק, נותנים דגימות באותו לוח זמנים</text></svg>`},
 pattern:()=>{const xs=[340,265,190,115,40];const ab=[120,72,70,68,70],mon=[120,118,116,115,112],at1=[126,110,96,88,80],at2=[130,113,99,91,84];
  const pl=(arr,cls,dash)=>`<path d="M${arr.map((y,i)=>xs[i]+" "+y).join(" L")}" fill="none" class="${cls}" stroke-width="3" ${dash?'stroke-dasharray="6 5"':""}/>`;
  return `<svg viewBox="0 0 400 214" role="img" aria-label="תיאור סכמטי של הדפוס: הזיכרון השתפר בשבוע הראשון רק אצל הנמנעים">
  <text x="200" y="18" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">זיכרון: הדפוס (סכמטי)</text>
  <line x1="30" y1="150" x2="370" y2="150" class="s-line"/>
  ${pl(mon,"s-line",true)}${pl(ab,"s-c",false)}
  ${xs.map((x,i)=>`<text x="${x}" y="168" text-anchor="middle" font-size="10.5" class="f-mut">${i?("שבוע "+i):"בסיס"}</text>`).join("")}
  <text x="300" y="60" text-anchor="middle" font-size="11.5" font-weight="700" class="f-c">קפיצה בשבוע 1</text>
  <rect x="246" y="188" width="22" height="4" class="f-c"/><text x="240" y="194" text-anchor="start" font-size="11" class="f-ink">הימנעות</text>
  <rect x="140" y="188" width="22" height="4" class="f-mut"/><text x="134" y="194" text-anchor="start" font-size="11" class="f-ink">ניטור</text>
  <text x="200" y="210" text-anchor="middle" font-size="10" class="f-mut">ממחיש את כיוון התוצאות, לא ערכים מדויקים</text></svg>`}
};
const cantabTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>תחום</th><th>משימה</th><th>מה בודקת</th></tr></thead><tbody>
<tr><td rowspan="2"><b>קשב</b></td><td>AST</td><td>מעבר בין כללים: לענות לפי כיוון החץ או לפי הצד שבו הוא מופיע</td></tr>
<tr><td>RVP</td><td>קשב מתמשך: לזהות רצפי ספרות (כמו 2-4-6) בזרם מהיר של ספרות</td></tr>
<tr><td rowspan="3"><b>זיכרון</b></td><td>DMS</td><td>התאמה לדוגמה: לזהות דפוס מורכב, מיד או אחרי השהיה</td></tr>
<tr><td>SSP</td><td>טווח מרחבי: לחזור על רצף קופסאות שהחליפו צבע</td></tr>
<tr><td>VRM</td><td>זיכרון מילולי: רשימה של 18 מילים, שליפה מיד ואחרי 20 עד 30 דקות</td></tr></tbody></table></div>`;
