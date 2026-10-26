const FIG={
 maslow:()=>{const L=[["מימוש עצמי","צמיחה, מיצוי הפוטנציאל"],["הערכה","כבוד עצמי, הכרה, מעמד"],["חברתיים","שייכות, חברות, קבלה"],["ביטחון","הגנה מפגיעה פיזית ורגשית"],["פיזיולוגיים","רעב, צמא, מחסה"]];
  return `<svg viewBox="0 0 400 270" role="img" aria-label="פירמידת הצרכים של מאסלו">${L.map(([t,s],i)=>{const y0=10+i*50,y1=y0+46,hw0=14+i*24,hw1=hw0+22,cx=112;return `<polygon points="${cx-hw0},${y0} ${cx+hw0},${y0} ${cx+hw1},${y1} ${cx-hw1},${y1}" class="${i==0?"f-c":"f-soft"}" ${i>2?'opacity=".75"':""}/><text x="250" y="${y0+20}" text-anchor="end" font-size="14" font-weight="700" class="f-ink">${t}</text><text x="250" y="${y0+37}" font-size="11" class="f-mut" text-anchor="end">${s}</text>`}).join("")}
  
  <line x1="20" y1="158" x2="390" y2="158" class="s-line" stroke-dasharray="4 4"/></svg>`},
 herzberg:()=>`<svg viewBox="0 0 400 200" role="img" aria-label="שני הרצפים של הרצברג">
  <text x="200" y="22" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">רצף 1: גורמים מניעים</text>
  <rect x="30" y="34" width="340" height="14" rx="7" class="f-soft"/><rect x="200" y="34" width="170" height="14" rx="7" class="f-c"/>
  <text x="370" y="68" text-anchor="start" font-size="12" font-weight="700" class="f-c">שביעות רצון</text><text x="30" y="68" text-anchor="end" font-size="12" class="f-mut">אין שביעות רצון</text>
  <text x="200" y="112" text-anchor="middle" font-size="13" font-weight="700" class="f-ink">רצף 2: גורמי היגיינה</text>
  <rect x="30" y="124" width="340" height="14" rx="7" class="f-soft"/><rect x="30" y="124" width="170" height="14" rx="7" class="f-mut" opacity=".55"/>
  <text x="370" y="158" text-anchor="start" font-size="12" font-weight="700" class="f-ink">אין חוסר שביעות רצון</text><text x="30" y="158" text-anchor="end" font-size="12" class="f-mut">חוסר שביעות רצון</text>
  <text x="200" y="190" text-anchor="middle" font-size="11.5" class="f-mut">ההפך משביעות רצון הוא "אין שביעות רצון", לא חוסר שביעות רצון</text></svg>`,
 expect:()=>{const b=[[340,"מאמץ"],[200,"ביצועים"],[60,"תגמולים"]];
  return `<svg viewBox="0 0 400 190" role="img" aria-label="שלושת הקשרים בתורת הציפיות">${arrowDef("ea")}
  ${b.map(([x,t],i)=>`<rect x="${x-50}" y="30" width="100" height="46" rx="12" class="${i==1?"f-c":"f-soft"}"/><text x="${x}" y="58" text-anchor="middle" font-size="14" font-weight="700" class="${i==1?"f-inv":"f-ink"}">${t}</text>`).join("")}
  <line x1="288" y1="53" x2="252" y2="53" class="s-c" marker-end="url(#ea)"/><line x1="148" y1="53" x2="112" y2="53" class="s-c" marker-end="url(#ea)"/>
  <rect x="10" y="118" width="100" height="40" rx="12" class="f-soft"/><text x="60" y="143" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">מטרות אישיות</text>
  <line x1="60" y1="78" x2="60" y2="114" class="s-c" marker-end="url(#ea)"/>
  <circle cx="270" cy="96" r="11" class="f-c"/><text x="270" y="100" text-anchor="middle" font-size="11" font-weight="700" class="f-inv">1</text>
  <circle cx="130" cy="96" r="11" class="f-c"/><text x="130" y="100" text-anchor="middle" font-size="11" font-weight="700" class="f-inv">2</text>
  <circle cx="84" cy="98" r="11" class="f-c"/><text x="84" y="102" text-anchor="middle" font-size="11" font-weight="700" class="f-inv">3</text>
  <text x="390" y="140" text-anchor="start" font-size="11.5" class="f-mut">1 מאמץ ← ביצועים</text><text x="390" y="157" text-anchor="start" font-size="11.5" class="f-mut">2 ביצועים ← תגמול</text><text x="390" y="174" text-anchor="start" font-size="11.5" class="f-mut">3 תגמול ← מטרות אישיות</text></svg>`},
 cover3:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="חץ שעולה במדרגות לעבר מטרה">${arrowDef("m3")}
  <rect x="60" y="150" width="70" height="40" rx="6" class="f-soft"/><rect x="140" y="118" width="70" height="72" rx="6" class="f-soft"/><rect x="220" y="86" width="70" height="104" rx="6" class="f-soft"/>
  <path d="M70 140L170 104L250 72L318 44" class="s-c" stroke-width="4" marker-end="url(#m3)"/>
  <circle cx="338" cy="40" r="26" class="f-surf"/><circle cx="338" cy="40" r="17" class="s-c"/><circle cx="338" cy="40" r="7" class="f-c"/>
  <text x="200" y="216" text-anchor="middle" font-size="13" font-weight="600" class="f-mut">עוצמה, כיוון והתמדה</text></svg>`
};
