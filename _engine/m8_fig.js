const FIG={
 cover8:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="ירח, ספר ואותיות Z: שינה וזיכרון">
  <circle cx="200" cy="104" r="76" class="f-soft"/>
  <path d="M232 52a58 58 0 1 0 34 74a46 46 0 0 1-34-74z" class="f-c"/>
  <text x="278" y="62" font-size="22" font-weight="800" text-anchor="middle" class="f-ink">Z</text>
  <text x="304" y="40" font-size="16" font-weight="800" text-anchor="middle" class="f-mut">z</text>
  <text x="322" y="24" font-size="12" font-weight="800" text-anchor="middle" class="f-mut">z</text>
  <path d="M120 176 Q160 160 200 176 Q240 160 280 176 V206 Q240 190 200 206 Q160 190 120 206z" class="f-surf"/>
  <path d="M200 176V206" class="s-line"/>
  <path d="M136 182h46M136 190h46M218 182h46M218 190h46" class="s-line"/></svg>`,
 timeline:()=>{const P=[[340,"14:00","מבחן בסיס","שתי הקבוצות"],[200,"15:15 עד 16:15","שעת תנומה","או ערות"],[60,"17:15","מבחן חוזר","אותן משימות"]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="ציר הזמן של הניסוי">${arrowDef("tl")}
  <line x1="372" y1="70" x2="30" y2="70" class="s-c" marker-end="url(#tl)"/>
  ${P.map(([x,t,h,s],i)=>`<circle cx="${x}" cy="70" r="${i==1?14:10}" class="${i==1?"f-c":"f-surf"}"/><text x="${x}" y="40" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">${t}</text><text x="${x}" y="104" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">${h}</text><text x="${x}" y="122" text-anchor="middle" font-size="11" class="f-mut">${s}</text>`).join("")}
  <rect x="96" y="140" width="208" height="46" rx="12" class="f-soft"/>
  <text x="200" y="160" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">קבוצת תנומה: חוזרים לחדר לישון</text>
  <text x="200" y="177" text-anchor="middle" font-size="11.5" class="f-mut">קבוצה ללא תנומה: פעילות שקטה לבד</text></svg>`},
 results:()=>{const R=[["סיפורים",1.06,2.22,true],["זוגות מילים",0.56,2.50,true],["רשימת מילים",1.50,2.42,false]];const s=40;
  return `<svg viewBox="0 0 400 236" role="img" aria-label="כמה הביצוע ירד מהבסיס למבחן החוזר בכל משימה">
  <text x="200" y="16" text-anchor="middle" font-size="12" class="f-mut">כמה הציון ירד מהבסיס למבחן החוזר (נקודות)</text>
  <line x1="20" y1="180" x2="380" y2="180" class="s-line"/>
  ${R.map(([n,a,b,sig],i)=>{const cx=320-i*120;return `<rect x="${cx-30}" y="${180-a*s}" width="26" height="${a*s}" rx="4" class="f-c"/><rect x="${cx+4}" y="${180-b*s}" width="26" height="${b*s}" rx="4" class="f-mut" opacity=".55"/><text x="${cx-17}" y="${174-a*s}" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">${a.toFixed(2)}</text><text x="${cx+17}" y="${174-b*s}" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">${b.toFixed(2)}</text><text x="${cx}" y="198" text-anchor="middle" font-size="12" font-weight="700" class="f-ink">${n}</text><text x="${cx}" y="214" text-anchor="middle" font-size="10.5" class="f-mut">${sig?"אינטראקציה מובהקת":"לא מובהק"}</text>`}).join("")}
  <rect x="262" y="222" width="12" height="10" rx="2" class="f-c"/><text x="256" y="231" text-anchor="start" font-size="11" class="f-ink">עם תנומה</text>
  <rect x="156" y="222" width="12" height="10" rx="2" class="f-mut" opacity=".55"/><text x="150" y="231" text-anchor="start" font-size="11" class="f-ink">ללא תנומה</text></svg>`}
};
const designTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>מבחן בסיס (14:00)</th><th>מבחן חוזר (17:15)</th></tr></thead><tbody>
<tr><td><b>קבוצת תנומה</b></td><td>ביצוע 1</td><td>ביצוע 2</td></tr>
<tr><td><b>קבוצה ללא תנומה</b></td><td>ביצוע 1</td><td>ביצוע 2</td></tr></tbody></table></div>`;
const taskTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>משימה</th><th>מה עושים</th><th>סוג השליפה</th></tr></thead><tbody>
<tr><td><b>שליפת סיפורים</b><br><span class="muted" style="font-size:.85rem">Prose Stories Recall</span></td><td>מקריאים שני סיפורים, והתלמידים כותבים כמה שיותר מהם</td><td>שליפה חופשית של טקסט בעל משמעות</td></tr>
<tr><td><b>זוגות מילים</b><br><span class="muted" style="font-size:.85rem">Word Pair Associates</span></td><td>40 זוגות מילים לא קשורות (סירה–טלפון). אחר כך שומעים את המילה הראשונה ומשלימים את השנייה</td><td>שליפה עם רמז, למידה אסוציאטיבית</td></tr>
<tr><td><b>רשימת מילים</b><br><span class="muted" style="font-size:.85rem">RAVLT</span></td><td>רשימה של 15 מילים: שליפה חופשית ואז זיהוי מתוך 50 מילים</td><td>שליפה חופשית וזיהוי של פריטים בודדים</td></tr></tbody></table></div>`;
