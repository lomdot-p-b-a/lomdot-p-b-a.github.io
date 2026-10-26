const FIG={
 cover25:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="בית ילדים ובית הורים בלילה">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <path d="M236 70a26 26 0 1 0 16 34a20 20 0 0 1-16-34z" class="f-mut" opacity=".6"/>
  <path d="M120 180 V128 L158 100 L196 128 V180 Z" class="f-surf" stroke="var(--line)"/>
  <rect x="146" y="148" width="22" height="32" rx="3" class="f-c"/>
  <path d="M212 180 V116 L262 84 L312 116 V180 Z" class="f-c" opacity=".85"/>
  ${[226,252,278].map(x=>`<rect x="${x}" y="128" width="16" height="16" rx="3" class="f-surf"/>`).join("")}
  <path d="M196 160 q20 -18 26 0" class="s-line" stroke-dasharray="4 4" fill="none"/></svg>`,
 rates:()=>{const R=[["לינה משותפת (1985)",59],["לינה משותפת (1994)",48],["לינה משפחתית (1994)",80],["נורמה עולמית",67]],s=1.9;
  return `<svg viewBox="0 0 400 214" role="img" aria-label="אחוז התינוקות הבטוחים עם האם">
  <text x="200" y="14" text-anchor="middle" font-size="11.5" class="f-mut">% תינוקות בהיקשרות בטוחה לאם</text>
  ${R.map(([n,v],i)=>{const y=32+i*44,w=v*s*1.6;return `<rect x="${384-w}" y="${y}" width="${w}" height="24" rx="5" class="${i==2?"f-c":i==3?"f-mut":"f-soft"}" ${i<2?'stroke="var(--accent)"':""}/><text x="${384-w-6}" y="${y+17}" text-anchor="start" font-size="12" font-weight="800" class="f-ink">${v==67?"65% עד 70%":v+"%"}</text><text x="378" y="${y+38}" text-anchor="start" font-size="10.5" class="f-mut">${n}</text>`}).join("")}</svg>`},
 models:()=>{const M=[["מונוטרופיה","דמות אחת חשובה (בדרך כלל האם)",[0,1,0]],["היררכיה","האם ראשית, האחרים משניים",[.55,1,.55]],["עצמאות","כל קשר פועל בתחום שלו",[1,1,1]],["אינטגרציה","קשרים בטוחים מפצים על לא בטוחים",[1,1,1]]];
  return `<svg viewBox="0 0 400 236" role="img" aria-label="ארבעה מודלים של מודלים פנימיים בטיפול מרובה">
  ${M.map(([t,d,a],i)=>{const x=300-(i%2)*200,y=10+Math.floor(i/2)*114;return `<rect x="${x-94}" y="${y}" width="188" height="104" rx="12" class="${i==3?"f-soft":"f-surf"}" stroke="${i==3?"var(--accent)":"var(--line)"}"/>
   <text x="${x}" y="${y+22}" text-anchor="middle" font-size="12.5" font-weight="800" class="f-ink">${t}</text>
   <circle cx="${x}" cy="${y+56}" r="9" class="f-c"/>${[-50,0,50].map((dx,k)=>`<line x1="${x}" y1="${y+56}" x2="${x+dx}" y2="${y+76}" class="s-line" opacity="${a[k]?1:.25}"/><circle cx="${x+dx}" cy="${y+78}" r="${k==1?8:6}" class="f-c" opacity="${a[k]||.15}"/>`).join("")}
   ${i==3?`<path d="M${x-62} ${y+64} q62 -30 124 0" class="s-c" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`:""}
   <text x="${x}" y="${y+99}" text-anchor="middle" font-size="9.5" class="f-mut">${d}</text>`}).join("")}</svg>`}
};
const sleepTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>ממצא</th><th>לינה משותפת</th><th>לינה משפחתית</th></tr></thead><tbody>
<tr><td><b>תינוקות בטוחים עם האם</b></td><td class="out">48%</td><td class="in">80%</td></tr>
<tr><td><b>אמהות אוטונומיות (AAI)</b></td><td>65%</td><td>72%</td></tr>
<tr><td><b>העברה בין־דורית (התאמה)</b></td><td class="out">40%</td><td class="in">76%</td></tr>
<tr><td><b>רגישות האם קשורה לביטחון התינוק?</b></td><td class="out">לא</td><td class="in">כן</td></tr>
<tr><td><b>התאמה בין שני ילדים של אותה מטפלת</b></td><td class="out">נמוכה</td><td class="in">קיימת</td></tr></tbody></table></div>`;
