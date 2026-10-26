const FIG={
 factors:()=>{const g=[[318,64,"התופס",["עמדות ומניעים","תחומי עניין","ניסיון וציפיות"]],[82,64,"המטרה",["חידוש, תנועה, קולות","גודל ורקע","קרבה ודמיון"]],[200,210,"המצב",["זמן","סביבת עבודה","סביבה חברתית"]]];
  return `<svg viewBox="0 0 400 262" role="img" aria-label="שלושה גורמים שמשפיעים על התפיסה">${arrowDef("fa")}
  <line x1="262" y1="80" x2="238" y2="104" class="s-c" marker-end="url(#fa)"/><line x1="138" y1="80" x2="162" y2="104" class="s-c" marker-end="url(#fa)"/>
  ${g.map(([x,y,t,l])=>`<rect x="${x-74}" y="${y-48}" width="148" height="${y>100?96:96}" rx="14" class="f-soft"/><text x="${x}" y="${y-22}" text-anchor="middle" font-size="15" font-weight="700" class="f-ink">${t}</text>${l.map((s,j)=>`<text x="${x}" y="${y+j*18}" text-anchor="middle" font-size="11.5" class="f-mut">${s}</text>`).join("")}`).join("")}
  <circle cx="200" cy="122" r="34" class="f-c"/><text x="200" y="127" text-anchor="middle" font-size="15" font-weight="700" class="f-inv">תפיסה</text></svg>`},
 steps6:()=>{const s=["הגדרת הבעיה","זיהוי הקריטריונים להחלטה","מתן משקל לכל קריטריון","פיתוח חלופות","הערכת החלופות","בחירת החלופה הטובה ביותר"];
  return `<svg viewBox="0 0 400 290" role="img" aria-label="ששת שלבי המודל הרציונלי">${s.map((t,i)=>{const y=8+i*47,last=i==5;return `<rect x="30" y="${y}" width="340" height="38" rx="19" class="${last?"f-c":"f-soft"}"/><circle cx="351" cy="${y+19}" r="14" class="${last?"f-inv":"f-c"}"/><text x="351" y="${y+24}" text-anchor="middle" font-size="13" font-weight="700" class="${last?"f-c":"f-inv"}">${i+1}</text><text x="326" y="${y+24}" text-anchor="start" font-size="14" font-weight="600" class="${last?"f-inv":"f-ink"}">${t}</text>`}).join("")}</svg>`},
 venn:()=>`<svg viewBox="0 0 400 250" role="img" aria-label="המודל התלת-רכיבי של יצירתיות">
  <circle cx="200" cy="88" r="74" class="f-c" opacity=".22"/><circle cx="150" cy="168" r="74" class="f-c" opacity=".22"/><circle cx="250" cy="168" r="74" class="f-c" opacity=".22"/>
  <circle cx="200" cy="88" r="74" class="s-c"/><circle cx="150" cy="168" r="74" class="s-c"/><circle cx="250" cy="168" r="74" class="s-c"/>
  <text x="200" y="60" text-anchor="middle" font-size="14" font-weight="700" class="f-ink">מומחיות</text>
  <text x="275" y="198" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">כישורי חשיבה</text><text x="275" y="214" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">יצירתית</text>
  <text x="125" y="198" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">מוטיבציה</text><text x="125" y="214" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">פנימית למשימה</text>
  <circle cx="200" cy="142" r="26" class="f-c"/><text x="200" y="146" text-anchor="middle" font-size="10.5" font-weight="700" class="f-inv">יצירתיות</text></svg>`,
 cover2:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="עין, ממנה יוצאים שלושה שבילים להחלטה">${arrowDef("ca")}
  <path d="M60 114C100 62 160 46 200 46s100 16 140 68c-40 52-100 68-140 68S100 166 60 114z" class="f-soft"/>
  <circle cx="200" cy="114" r="44" class="f-surf"/><circle cx="200" cy="114" r="26" class="f-c"/><circle cx="210" cy="104" r="7" class="f-inv"/>
  
  <text x="200" y="214" text-anchor="middle" font-size="13" font-weight="600" class="f-mut">מה שאנחנו רואים קובע מה שאנחנו מחליטים</text></svg>`
};
