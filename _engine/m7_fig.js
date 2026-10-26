const FIG={
 social:()=>{const s=[["לפני הכניסה","Prearrival","ערכים וציפיות שהאדם מביא איתו"],["מפגש","Encounter","הציפיות פוגשות את המציאות"],["מטמורפוזה","Metamorphosis","האדם משתנה ומסתגל"]];
  return `<svg viewBox="0 0 400 230" role="img" aria-label="שלושת שלבי החיברות">${arrowDef("so")}
  ${s.map(([h,e,d],i)=>{const x=330-i*130;return `<rect x="${x-56}" y="20" width="112" height="98" rx="14" class="${i==2?"f-c":"f-soft"}"/><text x="${x}" y="50" text-anchor="middle" font-size="14" font-weight="700" class="${i==2?"f-inv":"f-ink"}">${h}</text><text x="${x}" y="68" text-anchor="middle" font-size="10" class="${i==2?"f-inv":"f-mut"}">${e}</text><text x="${x}" y="90" text-anchor="middle" font-size="10" class="${i==2?"f-inv":"f-mut"}">${d.length>18?d.slice(0,d.lastIndexOf(" ",18)):d}</text><text x="${x}" y="104" text-anchor="middle" font-size="10" class="${i==2?"f-inv":"f-mut"}">${d.length>18?d.slice(d.lastIndexOf(" ",18)+1):""}</text>`}).join("")}
  <line x1="272" y1="69" x2="258" y2="69" class="s-c" marker-end="url(#so)"/><line x1="142" y1="69" x2="128" y2="69" class="s-c" marker-end="url(#so)"/>
  <line x1="70" y1="120" x2="70" y2="146" class="s-c" marker-end="url(#so)"/>
  <rect x="20" y="152" width="360" height="56" rx="14" class="f-surf"/>
  <text x="200" y="176" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">התוצאות</text>
  <text x="200" y="196" text-anchor="middle" font-size="12" class="f-mut">פריון · מחויבות · תחלופה</text></svg>`},
 cover7:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="קרחון: גלוי מעל המים, ערכים מתחת">
  <rect x="0" y="96" width="400" height="132" class="f-soft"/>
  <path d="M200 26 L250 96 L150 96z" class="f-surf"/><path d="M150 96 L250 96 L300 150 L240 206 L160 206 L100 150z" class="f-c" opacity=".85"/>
  <text x="200" y="84" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">סמלים · טקסים</text>
  <text x="200" y="146" text-anchor="middle" font-size="14" font-weight="700" class="f-inv">ערכי ליבה</text>
  <text x="200" y="166" text-anchor="middle" font-size="12" class="f-inv">משמעות משותפת</text></svg>`
};
const socTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>אפשרות</th><th>מה זה אומר</th></tr></thead><tbody>
<tr><td><b>פורמלי מול בלתי פורמלי</b></td><td>תוכנית קליטה נפרדת, או ישר לעבודה בלי תשומת לב מיוחדת</td></tr>
<tr><td><b>אישי מול קבוצתי</b></td><td>כל אחד לבד, או כולם יחד באותו תהליך (כמו טירונות)</td></tr>
<tr><td><b>קבוע מול משתנה</b></td><td>לוח זמנים ידוע למעבר, או \"כשתהיה מוכן\"</td></tr>
<tr><td><b>טורי מול אקראי</b></td><td>מודל לחיקוי שמלווה (חונכות), או להסתדר לבד</td></tr>
<tr><td><b>השקעה מול הפשטה</b></td><td>מחזקים את התכונות של החדש (Investiture), או מנסים להסיר אותן (Divestiture)</td></tr></tbody></table></div>`;
