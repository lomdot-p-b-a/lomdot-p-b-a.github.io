const FIG={
 cover29:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מילה שהאותיות שלה מתחלפות, וכמוסה">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  ${[["ת",250],["ר",214],["י",178],["ס",142]].map(([l,x],i)=>`<rect x="${x-16}" y="70" width="32" height="40" rx="7" class="${i==1||i==2?"f-c":"f-surf"}" stroke="var(--line)"/><text x="${x}" y="98" text-anchor="middle" font-size="22" font-weight="800" class="${i==1||i==2?"f-inv":"f-ink"}">${l}</text>`).join("")}
  <path d="M214 120 q-18 18 -36 0" class="s-c" stroke-width="2.5" fill="none"/><path d="M178 60 q18 -18 36 0" class="s-c" stroke-width="2.5" fill="none"/>
  <rect x="160" y="146" width="80" height="30" rx="15" class="f-surf" stroke="var(--line)"/><path d="M200 146 v30" class="s-line"/><rect x="160" y="146" width="40" height="30" rx="15" class="f-c" opacity=".55"/></svg>`,
 dys:()=>{const D=[["זיהוי האות","מה האות?","דיסלקסיה ויזואלית",false],["קידוד מיקום","איפה האות במילה?","דיסלקסיית מיקום אותיות (LPD)",true],["שיוך למילה","לאיזו מילה האות שייכת?","דיסלקסיה קשבית",true]];
  return `<svg viewBox="0 0 400 230" role="img" aria-label="שלוש פונקציות של הנתח הוויזואלי־אורתוגרפי">${arrowDef("dy")}
  <rect x="40" y="8" width="320" height="34" rx="10" class="f-c"/><text x="200" y="30" text-anchor="middle" font-size="12.5" font-weight="800" class="f-inv">הנתח הוויזואלי־אורתוגרפי</text>
  ${D.map(([h,q,d,k],i)=>{const x=330-i*130;return `<line x1="${x}" y1="42" x2="${x}" y2="60" class="s-line" marker-end="url(#dy)"/><rect x="${x-60}" y="62" width="120" height="62" rx="10" class="f-surf" stroke="var(--line)"/><text x="${x}" y="86" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${h}</text><text x="${x}" y="106" text-anchor="middle" font-size="10.5" class="f-mut">${q}</text><line x1="${x}" y1="124" x2="${x}" y2="140" class="s-line" marker-end="url(#dy)"/><rect x="${x-60}" y="142" width="120" height="50" rx="10" class="${k?"f-soft":"f-surf"}" stroke="${k?"var(--accent)":"var(--line)"}"/><text x="${x}" y="164" text-anchor="middle" font-size="10" font-weight="700" class="f-ink">פגיעה ↓</text><text x="${x}" y="181" text-anchor="middle" font-size="10" class="f-ink">${d}</text>`}).join("")}
  <text x="200" y="218" text-anchor="middle" font-size="10.5" class="f-mut">המסגרות המודגשות: שתי הדיסלקסיות שנבדקו במחקר</text></svg>`},
 design:()=>`<svg viewBox="0 0 400 190" role="img" aria-label="מערך המחקר: כל נבדק נבדק פעמיים">${arrowDef("ds")}
  <text x="200" y="16" text-anchor="middle" font-size="11.5" class="f-mut">כל נבדק הוא הביקורת של עצמו (תוך־נבדקי)</text>
  ${[[300,"מפגש 1","כשעה וחצי"],[100,"מפגש 2","אותם מבדקים"]].map(([x,t,s])=>`<rect x="${x-70}" y="30" width="140" height="56" rx="12" class="f-surf" stroke="var(--line)"/><text x="${x}" y="54" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">${t}</text><text x="${x}" y="73" text-anchor="middle" font-size="10.5" class="f-mut">${s}</text>`).join("")}
  <line x1="228" y1="58" x2="172" y2="58" class="s-c" stroke-width="2" marker-end="url(#ds)"/><text x="200" y="50" text-anchor="middle" font-size="10" class="f-ink">שבוע לפחות</text>
  <rect x="30" y="104" width="340" height="34" rx="10" class="f-soft"/><text x="200" y="126" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">13 נבדקים: קודם בלי ריטלין, אחר כך עם ריטלין</text>
  <rect x="30" y="146" width="340" height="34" rx="10" class="f-soft"/><text x="200" y="168" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">7 נבדקים: קודם עם ריטלין, אחר כך בלי</text></svg>`
};
const testsTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מבדק</th><th>מה עושים</th></tr></thead><tbody>
<tr><td><b>מילים נדידיות בקול</b></td><td>232 מילים ששיכול האותיות האמצעיות יוצר מילה אחרת (תריס–תירס)</td></tr>
<tr><td><b>זהה–שונה</b></td><td>80 צמדי מילים, כל צמד שתי שניות: האם המילים זהות? (חמוץ–חומץ, חמוץ–חרוץ)</td></tr>
<tr><td><b>הכרעה לקסיקלית</b></td><td>60 רצפים: 30 מילים ו-30 מילות תפל נדידיות (עבכר). האם זו מילה?</td></tr>
<tr><td><b>מילה–תמונה</b></td><td>29 מילים נדידיות, ואז שתי תמונות (שוטפת / שופטת). מצביעים על המתאימה</td></tr>
<tr><td><b>"מה קשור?"</b></td><td>52 שלשות: משענת קשורה לכיסא או לסיגריה?</td></tr>
<tr><td><b>זוגות מילים (קשבית)</b></td><td>120 זוגות שבהם נדידת אות בין המילים יוצרת מילה קיימת (מרעיש–ארגיל)</td></tr></tbody></table></div>`;
