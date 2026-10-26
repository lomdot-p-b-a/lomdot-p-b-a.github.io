const FIG={
 cover27:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="בועות שיחה בין אדם לבינה מלאכותית">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="200" y="54" width="120" height="44" rx="14" class="f-surf" stroke="var(--line)"/><path d="M296 98 l10 14 l-2 -14z" class="f-surf" stroke="var(--line)"/>
  <text x="260" y="82" text-anchor="middle" font-size="20" font-weight="800" class="f-mut">?!</text>
  <rect x="84" y="114" width="140" height="56" rx="14" class="f-c"/><path d="M104 170 l-10 14 l18 -14z" class="f-c"/>
  ${[100,118,136].map((y,i)=>`<rect x="100" y="${y+10}" width="${[100,80,60][i]}" height="6" rx="3" class="f-surf" opacity=".85"/>`).join("")}
  <path d="M300 150 q20 -16 40 0" class="s-c" stroke-width="3" fill="none"/><path d="M332 142 l8 8 l-10 4" class="s-c" stroke-width="3" fill="none"/></svg>`,
 flow:()=>{const S=[["1","מתארים קונספירציה","ואת הראיות לה, במילים שלהם"],["2","סיכום של ה-AI","ודירוג אמונה 0 עד 100"],["3","שיחה של 3 סבבים","טיפול: הפרכה. ביקורת: נושא אחר"],["4","דירוג חוזר","מיד, אחרי 10 ימים ואחרי חודשיים"]];
  return `<svg viewBox="0 0 400 232" role="img" aria-label="מהלך הניסוי">${arrowDef("cf")}
  ${S.map(([n,t,d],i)=>{const y=8+i*56;return `<rect x="20" y="${y}" width="360" height="46" rx="12" class="${i==2?"f-soft":"f-surf"}" stroke="${i==2?"var(--accent)":"var(--line)"}"/><circle cx="356" cy="${y+23}" r="13" class="f-c"/><text x="356" y="${y+28}" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">${n}</text><text x="334" y="${y+20}" text-anchor="start" font-size="12.5" font-weight="800" class="f-ink">${t}</text><text x="334" y="${y+37}" text-anchor="start" font-size="10.5" class="f-mut">${d}</text>${i<3?`<line x1="200" y1="${y+46}" x2="200" y2="${y+54}" class="s-c" stroke-width="2" marker-end="url(#cf)"/>`:""}`}).join("")}</svg>`},
 results:()=>{const P=[[0,0],[1,1],[2,1],[3,1]],X=i=>320-i*88,Yt=v=>v?150:62,Yc=62;
  return `<svg viewBox="0 0 400 236" role="img" aria-label="תרשים סכמטי: האמונה ירדה בשיחת ההפרכה ונשארה יציבה">${arrowDef("rs")}
  <text x="200" y="14" text-anchor="middle" font-size="11" class="f-mut">תרשים סכמטי של הדפוס (לא בקנה מידה)</text>
  <line x1="376" y1="190" x2="32" y2="190" class="s-line"/><line x1="376" y1="190" x2="376" y2="34" class="s-line" marker-end="url(#rs)"/>
  <text x="388" y="112" text-anchor="middle" font-size="10.5" class="f-mut" transform="rotate(-90 388 112)">אמונה בקונספירציה</text>
  <path d="M${X(0)} ${Yc+4} L${X(3)} ${Yc+4}" class="s-line" stroke-width="3"/>${P.map(([i])=>`<circle cx="${X(i)}" cy="${Yc+4}" r="5" class="f-mut"/>`).join("")}
  <path d="M${P.map(([i,v])=>`${X(i)} ${Yt(v)}`).join(" L")}" class="s-c" stroke-width="3" fill="none"/>${P.map(([i,v])=>`<circle cx="${X(i)}" cy="${Yt(v)}" r="5" class="f-c"/>`).join("")}
  <text x="${(X(0)+X(1))/2-6}" y="112" text-anchor="start" font-size="11" font-weight="800" class="f-ink">כ-20% ירידה</text>
  <text x="${(X(1)+X(3))/2}" y="140" text-anchor="middle" font-size="10.5" class="f-mut">בלי שינוי מובהק עד חודשיים</text>
  ${["לפני","מיד אחרי","10 ימים","חודשיים"].map((t,i)=>`<text x="${X(i)}" y="206" text-anchor="middle" font-size="11" class="f-ink">${t}</text>`).join("")}
  <circle cx="300" cy="226" r="5" class="f-c"/><text x="292" y="230" text-anchor="start" font-size="11" class="f-ink">שיחת הפרכה</text>
  <circle cx="170" cy="226" r="5" class="f-mut"/><text x="162" y="230" text-anchor="start" font-size="11" class="f-ink">שיחת ביקורת</text></svg>`}
};
const studyTable=`<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>מחקר 1</th><th>מחקר 2</th></tr></thead><tbody>
<tr><td><b>הליך</b></td><td>קודם שאלון BCTI של 15 קונספירציות</td><td>בלי BCTI, הגדרה של "תיאוריה" והעתק־הדבק חסום</td></tr>
<tr><td><b>האמינו בקונספירציה</b></td><td>73.5%</td><td>58.9%</td></tr>
<tr><td><b>ירידה ביחס לביקורת</b></td><td>16.55 נקודות (d=1.15)</td><td>12.84 נקודות (d=0.82)</td></tr>
<tr><td><b>ירידה באחוזים</b></td><td class="in">21.88% (ביקורת 1.31%)</td><td class="in">19.67% (ביקורת 3.27%)</td></tr></tbody></table></div>`;
