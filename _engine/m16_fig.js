const FIG={
 cover16:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="במה עם וילון ושתי מסכות">
  <rect x="70" y="24" width="260" height="180" rx="12" class="f-soft"/>
  <path d="M70 24h70c-6 50-6 120 0 180H70z M330 24h-70c6 50 6 120 0 180h70z" class="f-c" opacity=".85"/>
  <rect x="70" y="176" width="260" height="28" rx="6" class="f-surf"/>
  <path d="M168 84a26 26 0 0 0 0 52a26 26 0 0 0 0-52z" class="f-surf"/><circle cx="160" cy="104" r="3" class="f-ink"/><circle cx="176" cy="104" r="3" class="f-ink"/><path d="M158 118q10 9 20 0" class="s-line" fill="none" stroke-width="2.5"/>
  <path d="M232 92a26 26 0 0 0 0 52a26 26 0 0 0 0-52z" class="f-surf"/><circle cx="224" cy="112" r="3" class="f-ink"/><circle cx="240" cy="112" r="3" class="f-ink"/><path d="M222 132q10-8 20 0" class="s-line" fill="none" stroke-width="2.5"/></svg>`,
 session:()=>{const S=[["שיחה","עם הקו־תרפיסט"],["חימום","משחקים קבוצתיים"],["פרוטגוניסט","נבחר גיבור"],["הכנה","תפקידים, תפאורה"],["הצגה","הפסיכודרמה"]];
  return `<svg viewBox="0 0 400 140" role="img" aria-label="מבנה קבוע של כל מפגש">${arrowDef("ss")}
  ${S.map(([h,d],i)=>{const x=356-i*78;return `<rect x="${x-36}" y="24" width="72" height="74" rx="12" class="${i==4?"f-c":"f-soft"}"/><text x="${x}" y="44" text-anchor="middle" font-size="13" font-weight="800" class="${i==4?"f-inv":"f-c"}">${i+1}</text><text x="${x}" y="66" text-anchor="middle" font-size="11" font-weight="700" class="${i==4?"f-inv":"f-ink"}">${h}</text><text x="${x}" y="84" text-anchor="middle" font-size="8.8" class="${i==4?"f-inv":"f-mut"}">${d}</text>${i<4?`<line x1="${x-38}" y1="61" x2="${x-40}" y2="61" class="s-c" marker-end="url(#ss)"/>`:""}`}).join("")}
  <text x="200" y="124" text-anchor="middle" font-size="11.5" class="f-mut">פעם בשבוע, שעה וחצי, במשך שנתיים</text></svg>`},
 journey:()=>{const J=[["1","החתונה","ניתוק"],["2","סינדרלה","כעס ועלפון"],["\u20663–4\u2069","הסיפור של לילי","דחייה"],["5","הפחד","חוויה מתקנת"],["6","המכתב","פרידה"]];
  return `<svg viewBox="0 0 400 150" role="img" aria-label="שש הפסיכודרמות של דנה">${arrowDef("jj")}
  <line x1="388" y1="58" x2="12" y2="58" class="s-line" marker-end="url(#jj)"/>
  ${J.map(([n,h,d],i)=>{const x=352-i*76;return `<circle cx="${x}" cy="58" r="20" class="${i==3?"f-c":"f-surf"}"/><text x="${x}" y="63" text-anchor="middle" font-size="12" font-weight="800" class="${i==3?"f-inv":"f-ink"}">${n}</text><text x="${x}" y="100" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">${h}</text><text x="${x}" y="118" text-anchor="middle" font-size="10.5" class="f-mut">${d}</text>`}).join("")}
  <text x="200" y="20" text-anchor="middle" font-size="11.5" class="f-mut">מגיל 10 עד 12</text></svg>`}
};
