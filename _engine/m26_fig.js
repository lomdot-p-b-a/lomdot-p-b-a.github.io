const FIG={
 cover26:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="הורה מסתכל בטלפון וילד מנסה למשוך תשומת לב">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <circle cx="236" cy="70" r="20" class="f-c"/><path d="M206 180 V118 q30 -22 60 0 V180 Z" class="f-c"/>
  <rect x="196" y="104" width="22" height="36" rx="5" class="f-surf" stroke="var(--line)"/><rect x="200" y="109" width="14" height="22" rx="2" class="f-soft"/>
  <circle cx="150" cy="122" r="13" class="f-c" opacity=".6"/><path d="M134 180 V150 q16 -14 32 0 V180 Z" class="f-c" opacity=".6"/>
  <path d="M166 146 l22 -18" class="s-c" stroke-width="3"/><path d="M126 104 q-6 -10 2 -16 M118 112 q-12 -10 -4 -24" class="s-line" fill="none"/></svg>`,
 flow:()=>{const S=[["חיפוש ראשוני","18 מאמרים"],["רשימות מקורות וציטוטים","עוד 9"],["סה״כ בסקירה","27 מקורות"]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="שלבי איסוף המקורות">${arrowDef("fl")}
  ${S.map(([t,n],i)=>{const x=330-i*130;return `<rect x="${x-56}" y="40" width="112" height="64" rx="12" class="${i==2?"f-c":"f-surf"}" stroke="var(--line)"/><text x="${x}" y="66" text-anchor="middle" font-size="11.5" font-weight="700" class="${i==2?"f-inv":"f-ink"}">${t}</text><text x="${x}" y="88" text-anchor="middle" font-size="13" font-weight="800" class="${i==2?"f-inv":"f-ink"}">${n}</text>${i<2?`<line x1="${x-58}" y1="72" x2="${x-72}" y2="72" class="s-c" stroke-width="2" marker-end="url(#fl)"/>`:""}`}).join("")}
  ${[["16","מאמרים שפורסמו"],["5","הרצאות בכנסים"],["4","עבודות דוקטורט"],["2","עבודות מאסטר"]].map(([n,t],i)=>{const x=352-i*100;return `<text x="${x}" y="142" text-anchor="middle" font-size="18" font-weight="800" class="f-ink">${n}</text><text x="${x}" y="162" text-anchor="middle" font-size="10.5" class="f-mut">${t}</text>`}).join("")}
  <text x="200" y="190" text-anchor="middle" font-size="10.5" class="f-mut">22 מארה״ב · 11 איכותניים, 11 כמותיים, 5 משולבים</text></svg>`},
 stats:()=>{const R=[["מרגישים לא חשובים כשההורה בטלפון (AVG)",32],["חושבים שההורים בודקים את הטלפון יותר מדי (AVG)",54],["חושבים שההורים מבלים יותר מדי בטלפון (Highlights)",62],["הורים: \"אני בודק את הטלפון יותר מדי\" (AVG)",52]],s=2.6;
  return `<svg viewBox="0 0 400 220" role="img" aria-label="מה ילדים והורים אומרים על הטלפון">
  ${R.map(([t,v],i)=>{const y=12+i*52,w=v*s*1.6;return `<text x="388" y="${y+12}" text-anchor="start" font-size="10.5" class="f-ink">${t}</text><rect x="${388-w}" y="${y+20}" width="${w}" height="20" rx="5" class="${i==3?"f-mut":"f-c"}"/><text x="${388-w-6}" y="${y+35}" text-anchor="start" font-size="12" font-weight="800" class="f-ink">${v}%</text>`}).join("")}</svg>`}
};
const rqTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th>שאלה</th><th>במילים פשוטות</th></tr></thead><tbody>
<tr><td><b>RQ1</b></td><td>איך הורים משתמשים במכשיר ליד הילדים?</td></tr>
<tr><td><b>RQ2</b></td><td>מה ההורים מרגישים לגבי השימוש שלהם בזמן אינטראקציה עם הילד?</td></tr>
<tr><td><b>RQ3</b></td><td>איך הילדים מגיבים לשימוש של ההורים?</td></tr>
<tr><td><b>RQ4</b></td><td>איך ההסחה משפיעה על הקשר בין הורה לילד?</td></tr></tbody></table></div>`;
