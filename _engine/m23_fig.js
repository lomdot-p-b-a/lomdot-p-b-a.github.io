const FIG={
 cover23:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="אליפסה גדולה ואליפסה קטנה על מדרון">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M96 186 L196 186 L300 92 L336 92" class="s-line" stroke-width="3" fill="none"/>
  <ellipse cx="262" cy="104" rx="26" ry="20" class="f-c"/>
  <ellipse cx="140" cy="174" rx="13" ry="10" class="f-c" opacity=".7"/>
  <path d="M120 156 l-8 -8 M140 150 v-11 M160 156 l8 -8" class="s-c" stroke-width="2.5"/>
  <path d="M236 116 q-34 22 -70 50" class="s-line" stroke-dasharray="4 4" fill="none"/></svg>`,
 stim:()=>{const pane=(x,t,sub,end)=>`<g transform="translate(${x},0)"><rect x="0" y="24" width="118" height="112" rx="10" class="f-surf" stroke="var(--line)"/>
  <path d="M10 118 L52 118 L96 64 L110 64" class="s-line" stroke-width="2" fill="none"/>
  ${end==="mid"?`<ellipse cx="74" cy="84" rx="11" ry="8" class="f-c"/>`:end==="back"?`<ellipse cx="36" cy="110" rx="11" ry="8" class="f-c"/><path d="M66 84 q-12 10 -20 18" class="s-c" stroke-width="1.6" fill="none"/>`:`<ellipse cx="104" cy="56" rx="11" ry="8" class="f-c"/><path d="M80 80 q10 -10 16 -16" class="s-c" stroke-width="1.6" fill="none"/>`}
  <ellipse cx="22" cy="112" rx="6" ry="4.5" class="f-c" opacity=".7"/><path d="M14 102 l-4 -4 M22 99 v-6 M30 102 l4 -4" class="s-c" stroke-width="1.5"/>
  <text x="59" y="156" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${t}</text><text x="59" y="173" text-anchor="middle" font-size="10.5" class="f-mut">${sub}</text></g>`;
  return `<svg viewBox="0 0 400 186" role="img" aria-label="סרטון ההרגלה ושתי תוצאות המבחן">
  <text x="200" y="14" text-anchor="middle" font-size="11" class="f-mut">ה"אם" (אליפסה גדולה) וה"ילד" (אליפסה קטנה) שבוכה</text>
  ${pane(272,"הרגלה","האם עולה לחצי הדרך","mid")}${pane(141,"היענות","האם חוזרת לילד","back")}${pane(10,"חוסר היענות","האם ממשיכה לעלות","up")}</svg>`},
 looks:()=>{const G=[["בטוחים",[5.9,10.2,7.3]],["לא בטוחים",[5.4,6.6,8.0]]],L=["הרגלה","חוסר היענות","היענות"],s=13,C=["f-mut","f-c","f-soft"];
  return `<svg viewBox="0 0 400 236" role="img" aria-label="זמני הסתכלות בשניות לפי קבוצה ואירוע">
  <text x="200" y="14" text-anchor="middle" font-size="11.5" class="f-mut">זמן הסתכלות ממוצע (שניות)</text>
  <line x1="20" y1="180" x2="380" y2="180" class="s-line"/>
  ${G.map(([g,v],i)=>{const cx=290-i*180;return v.map((n,k)=>{const x=cx+34-k*34;return `<rect x="${x-14}" y="${180-n*s}" width="28" height="${n*s}" rx="4" class="${C[k]}" ${k==2?'stroke="var(--accent)"':''}/><text x="${x}" y="${174-n*s}" text-anchor="middle" font-size="10.5" font-weight="700" class="f-ink">${n.toFixed(1)}</text>`}).join("")+`<text x="${cx}" y="198" text-anchor="middle" font-size="12.5" font-weight="800" class="f-ink">${g}</text>`}).join("")}
  ${L.map((l,k)=>{const x=372-k*126;return `<rect x="${x-12}" y="214" width="12" height="10" rx="2" class="${C[k]}" ${k==2?'stroke="var(--accent)"':''}/><text x="${x-18}" y="223" text-anchor="start" font-size="11" class="f-ink">${l}</text>`}).join("")}</svg>`}
};
const resTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>קבוצה</th><th>הרגלה (3 אחרונים)</th><th>חוסר היענות</th><th>היענות</th></tr></thead><tbody>
<tr><td><b>בטוחים</b> (10)</td><td>5.9 (4.1)</td><td class="in"><b>10.2</b> (8.9)</td><td>7.3 (7.0)</td></tr>
<tr><td><b>לא בטוחים</b> (11)</td><td>5.4 (2.9)</td><td>6.6 (3.5)</td><td class="in"><b>8.0</b> (5.4)</td></tr></tbody></table></div><p class="muted" style="font-size:.85rem">ממוצעים בשניות, וסטיית תקן בסוגריים.</p>`;
