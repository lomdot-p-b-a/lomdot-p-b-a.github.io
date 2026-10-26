const FIG={
 society:()=>{const n=[["בית ספר",88,46],["צבא",200,26],["בנק",312,46],["קופת חולים",332,148],["מקום עבודה",200,206],["רשות המסים",68,148]];
  return `<svg viewBox="0 0 400 228" role="img" aria-label="אדם במרכז, מחובר לשישה ארגונים">${n.map(([t,x,y])=>`<line x1="200" y1="118" x2="${x}" y2="${y}" class="s-line" stroke-dasharray="4 4"/>`).join("")}
  <circle cx="200" cy="118" r="44" class="f-soft"/><circle cx="200" cy="118" r="32" class="f-c"/>
  <circle cx="200" cy="108" r="8" class="f-inv"/><path d="M184 136c2-9 9-13 16-13s14 4 16 13z" class="f-inv"/>
  ${n.map(([t,x,y])=>`<rect x="${x-50}" y="${y-15}" width="100" height="30" rx="15" class="f-surf"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="13" font-weight="500" class="f-ink">${t}</text>`).join("")}</svg>`},
 timeline:()=>{const p=[[330,"העת העתיקה","מסים, צבא, פירמידות",1],[240,"ימי הביניים","הכנסייה הקתולית",0],[150,"העת החדשה","חברות סחר, אוניברסיטאות",1],[62,"היום","חברה ארגונית",0]];
  return `<svg viewBox="0 0 400 130" role="img" aria-label="ציר זמן של ארגונים">${arrowDef("ta")}<line x1="380" y1="64" x2="22" y2="64" class="s-c" marker-end="url(#ta)"/>
  ${p.map(([x,t,s,b],i)=>{const ty=b?92:26,sy=b?110:44;return `<circle cx="${x}" cy="64" r="${i==3?10:7}" class="f-c"/><text x="${x}" y="${ty}" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">${t}</text><text x="${x}" y="${sy}" text-anchor="middle" font-size="11" class="f-mut">${s}</text>`}).join("")}</svg>`},
 openclosed:()=>`<svg viewBox="0 0 400 180" role="img" aria-label="מערכת סגורה מול מערכת פתוחה">${arrowDef("oa")}
  <rect x="215" y="14" width="172" height="128" rx="16" class="s-line" stroke-dasharray="5 5"/>
  <text x="372" y="34" text-anchor="end" font-size="11" class="f-mut">סביבה</text>
  <rect x="258" y="48" width="86" height="64" rx="12" class="f-soft"/><rect x="258" y="48" width="86" height="64" rx="12" class="s-c"/>
  <text x="301" y="85" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">ארגון</text>
  <line x1="385" y1="66" x2="350" y2="66" class="s-c" marker-end="url(#oa)"/><text x="368" y="58" text-anchor="middle" font-size="11" class="f-mut">קלט</text>
  <line x1="254" y1="96" x2="219" y2="96" class="s-c" marker-end="url(#oa)"/><text x="236" y="88" text-anchor="middle" font-size="11" class="f-mut">פלט</text>
  <text x="301" y="168" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">מערכת פתוחה</text>
  <rect x="50" y="40" width="110" height="80" rx="12" class="f-soft"/><rect x="50" y="40" width="110" height="80" rx="12" class="s-line" stroke-width="3"/>
  <g transform="translate(93 60) scale(1.1)" class="s-line" stroke-width="1.8" stroke-linecap="round">${I.lock}</g>
  <text x="105" y="168" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">מערכת סגורה</text></svg>`,
 ipo:()=>{const b=[[330,"קלט",["אנשים, כסף","חומרים, ידע"]],[200,"המרה",["עבודה, ייצור,","טיפול, הוראה"]],[70,"פלט",["מוצרים","ושירותים"]]];
  return `<svg viewBox="0 0 400 190" role="img" aria-label="מחזור קלט, המרה, פלט עם משוב">${arrowDef("ia")}
  ${b.map(([x,t,s],i)=>`<rect x="${x-55}" y="22" width="110" height="88" rx="14" class="${i==1?"f-c":"f-soft"}"/><text x="${x}" y="54" text-anchor="middle" font-size="16" font-weight="700" class="${i==1?"f-inv":"f-ink"}">${t}</text>${s.map((l,j)=>`<text x="${x}" y="${76+j*15}" text-anchor="middle" font-size="11" class="${i==1?"f-inv":"f-mut"}">${l}</text>`).join("")}`).join("")}
  <line x1="273" y1="66" x2="259" y2="66" class="s-c" marker-end="url(#ia)"/><line x1="143" y1="66" x2="129" y2="66" class="s-c" marker-end="url(#ia)"/>
  <path d="M70 112V150H330V116" class="s-c" stroke-dasharray="5 4" marker-end="url(#ia)"/>
  <text x="200" y="172" text-anchor="middle" font-size="12" font-weight="600" class="f-c">משוב: הסביבה מגיבה, והארגון מתאים את עצמו</text></svg>`},
 subsystems:()=>{const s=[[200,42,"הפקה","פס ייצור"],[322,130,"חליפין","רכש, שיווק"],[200,218,"אחזקה","משאבי אנוש"],[78,130,"הסתגלות","מחקר ופיתוח"]];
  return `<svg viewBox="0 0 400 262" role="img" aria-label="חמש תת-המערכות של כץ וקאהן">
  <ellipse cx="200" cy="130" rx="188" ry="124" class="s-line" stroke-dasharray="5 6"/><text x="352" y="28" font-size="11" text-anchor="middle" class="f-mut">סביבה</text>
  ${s.map(([x,y])=>`<line x1="200" y1="130" x2="${x}" y2="${y}" class="s-line"/>`).join("")}
  ${s.map(([x,y,t,e])=>`<circle cx="${x}" cy="${y}" r="38" class="f-surf"/><circle cx="${x}" cy="${y}" r="38" class="s-c"/><text x="${x}" y="${y}" text-anchor="middle" font-size="14" font-weight="700" class="f-ink">${t}</text><text x="${x}" y="${y+16}" text-anchor="middle" font-size="10" class="f-mut">${e}</text>`).join("")}
  <circle cx="200" cy="130" r="40" class="f-c"/><text x="200" y="128" text-anchor="middle" font-size="15" font-weight="700" class="f-inv">ניהול</text><text x="200" y="145" text-anchor="middle" font-size="10" class="f-inv">מתאם את כולן</text></svg>`},
 payroll:()=>{const p=[[200,30,"סיכום שעות"],[322,100,"חישוב וניכויים"],[200,170,"העברה לבנק"],[78,100,"רישום בספרים"]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="מחזור תשלום משכורות">${arrowDef("pa")}
  <path d="M262 40A140 72 0 0 1 330 78" class="s-c" marker-end="url(#pa)"/><path d="M330 122A140 72 0 0 1 262 160" class="s-c" marker-end="url(#pa)"/>
  <path d="M138 160A140 72 0 0 1 70 122" class="s-c" marker-end="url(#pa)"/><path d="M70 78A140 72 0 0 1 138 40" class="s-c" marker-end="url(#pa)"/>
  ${p.map(([x,y,t])=>`<rect x="${x-58}" y="${y-16}" width="116" height="32" rx="16" class="f-soft"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="12.5" font-weight="600" class="f-ink">${t}</text>`).join("")}
  <text x="200" y="98" text-anchor="middle" font-size="13" font-weight="700" class="f-c">חוזר</text><text x="200" y="115" text-anchor="middle" font-size="13" font-weight="700" class="f-c">כל חודש</text></svg>`},
 pyramid:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="מדרג סמכות בצורת פירמידה">
  <polygon points="150,14 186,70 114,70" class="f-c"/><polygon points="114,74 186,74 222,126 78,126" class="f-soft"/><polygon points="76,130 224,130 262,186 38,186" class="f-soft" opacity=".6"/>
  <line x1="190" y1="44" x2="262" y2="44" class="s-line" stroke-dasharray="3 3"/><line x1="208" y1="100" x2="262" y2="100" class="s-line" stroke-dasharray="3 3"/><line x1="246" y1="158" x2="262" y2="158" class="s-line" stroke-dasharray="3 3"/>
  <text x="330" y="40" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">מעט אנשים</text><text x="330" y="56" text-anchor="middle" font-size="11" class="f-mut">סמכות רחבה</text>
  <text x="330" y="97" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">דרגי ביניים</text><text x="330" y="113" text-anchor="middle" font-size="11" class="f-mut">מנהלי מחלקות</text>
  <text x="330" y="155" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">רבים</text><text x="330" y="171" text-anchor="middle" font-size="11" class="f-mut">סמכות מוגבלת</text></svg>`
};

