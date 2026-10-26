const FIG={
 cover28:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="רוכב אופניים מול רוח">${arrowDef("cw")}
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <circle cx="160" cy="160" r="22" class="s-line" stroke-width="4" fill="none"/><circle cx="236" cy="160" r="22" class="s-line" stroke-width="4" fill="none"/>
  <path d="M160 160 L190 124 L224 124 L236 160 M190 124 L200 160 L224 124" class="s-line" stroke-width="3" fill="none"/>
  <circle cx="214" cy="92" r="10" class="f-c"/><path d="M210 102 L196 126" class="s-c" stroke-width="5"/>
  ${[70,96,122].map((y,i)=>`<line x1="${110+i*6}" y1="${y}" x2="${150+i*6}" y2="${y}" class="s-c" stroke-width="3" marker-end="url(#cw)" transform="rotate(180 ${130+i*6} ${y})"/>`).join("")}
  <path d="M280 96 h34 M286 112 h26" class="s-line" opacity=".45" stroke-width="2"/></svg>`,
 study1:()=>{const R=[["דמוקרטים",4.75],["רפובליקנים",3.42]],X=v=>40+(v-1)*53.3;
  return `<svg viewBox="0 0 400 176" role="img" aria-label="מי לדעתם מתמודד עם יותר מכשולים">
  <line x1="40" y1="96" x2="360" y2="96" class="s-line" stroke-width="2"/>
  ${[1,2,3,4,5,6,7].map(v=>`<line x1="${X(v)}" y1="91" x2="${X(v)}" y2="101" class="s-line"/><text x="${X(v)}" y="116" text-anchor="middle" font-size="10.5" class="f-mut">${v}</text>`).join("")}
  <text x="${X(7)}" y="140" text-anchor="middle" font-size="10.5" class="f-ink">קשה יותר</text><text x="${X(7)}" y="154" text-anchor="middle" font-size="10.5" class="f-ink">לדמוקרטים</text>
  <text x="${X(1)}" y="140" text-anchor="middle" font-size="10.5" class="f-ink">קשה יותר</text><text x="${X(1)}" y="154" text-anchor="middle" font-size="10.5" class="f-ink">לרפובליקנים</text>
  <text x="${X(4)}" y="140" text-anchor="middle" font-size="10.5" class="f-mut">שווה</text>
  ${R.map(([n,v],i)=>`<circle cx="${X(v)}" cy="96" r="9" class="f-c" opacity="${i?.6:1}"/><line x1="${X(v)}" y1="${i?60:34}" x2="${X(v)}" y2="86" class="s-c" stroke-dasharray="3 3"/><text x="${X(v)}" y="${i?54:28}" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${n}: ${v}</text>`).join("")}</svg>`},
 study5:()=>{const C=[["רוח נגדית: כחול",56.42,"כחול"],["רוח נגדית: ירוק",56.64,"ירוק"]];
  return `<svg viewBox="0 0 400 192" role="img" aria-label="הערכת אחוז המשפטים בצבע של המשימה הקשה">
  <text x="200" y="14" text-anchor="middle" font-size="11" class="f-mut">הערכה: כמה מהמשפטים היו בצבע של המשימה הקשה? (בפועל 50%)</text>
  ${C.map(([t,v,c],i)=>{const x=290-i*180,h=v*1.9;return `<rect x="${x-34}" y="${168-h}" width="68" height="${h}" rx="6" class="f-c"/><line x1="${x-50}" y1="${168-95}" x2="${x+50}" y2="${168-95}" class="s-line" stroke-dasharray="4 3"/><text x="${x}" y="${160-h}" text-anchor="middle" font-size="13" font-weight="800" class="f-ink">${v}%</text><text x="${x}" y="184" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">${t}</text>`}).join("")}
  <text x="200" y="${168-91}" text-anchor="middle" font-size="10" class="f-mut">50% בפועל</text></svg>`},
 study6:()=>{const D=[["רשימה שלי",[2.17,2.26]],["רשימת היריב",[1.68,1.13]]],s=34;
  return `<svg viewBox="0 0 400 214" role="img" aria-label="כמה קטגוריות נזכרו מכל סוג">
  <text x="200" y="14" text-anchor="middle" font-size="11" class="f-mut">מספר קטגוריות שנזכרו (מתוך 5 מכל סוג)</text>
  <line x1="20" y1="170" x2="380" y2="170" class="s-line"/>
  ${D.map(([n,v],i)=>{const cx=290-i*180;return v.map((y,k)=>{const x=cx+22-k*44;return `<rect x="${x-18}" y="${170-y*s}" width="36" height="${y*s}" rx="5" class="${k?"f-c":"f-soft"}" stroke="var(--line)"/><text x="${x}" y="${164-y*s}" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${y}</text>`}).join("")+`<text x="${cx}" y="188" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${n}</text>`}).join("")}
  <rect x="262" y="198" width="12" height="10" rx="2" class="f-soft" stroke="var(--line)"/><text x="256" y="207" text-anchor="start" font-size="11" class="f-ink">קלות</text>
  <rect x="156" y="198" width="12" height="10" rx="2" class="f-c"/><text x="150" y="207" text-anchor="start" font-size="11" class="f-ink">קשות</text></svg>`}
};
const sibTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>מחקר 3: אחים</th><th>הבכורים</th><th>הצעירים</th></tr></thead><tbody>
<tr><td><b>הורים קשוחים יותר עם הבכור?</b> (ממוצע, 9 = הבכור)</td><td class="in">6.40</td><td>5.57</td></tr>
<tr><td><b>מסכימים שההורים קשוחים יותר עם הבכור</b></td><td class="in">80%</td><td>47%</td></tr>
<tr><td><b>הורים מקלים יותר עם הצעיר?</b> (ממוצע, 1 = הצעיר)</td><td class="in">3.78</td><td>4.49</td></tr>
<tr><td><b>מסכימים שההורים מקלים יותר עם הצעיר</b></td><td class="in">92%</td><td>71%</td></tr></tbody></table></div>`;
const accTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>למי קשה יותר? (7 = לניסויים)</th><th>ניסויים (21)</th><th>לא ניסויים (78)</th></tr></thead><tbody>
<tr><td>פרסום מאמרים</td><td class="in">4.88</td><td>4.08</td></tr>
<tr><td>קבלה למשרה</td><td>4.50</td><td>4.51</td></tr>
<tr><td>קביעות</td><td class="in">4.74</td><td>4.16</td></tr>
<tr><td>מענקי מחקר</td><td class="in">4.43</td><td>3.65</td></tr>
<tr><td><b>ממוצע</b></td><td class="in"><b>4.64</b></td><td><b>4.10</b></td></tr></tbody></table></div>`;
