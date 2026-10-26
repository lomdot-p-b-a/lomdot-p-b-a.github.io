const FIG={
 cover13:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="אסימונים וכוכב">
  <circle cx="200" cy="112" r="90" class="f-soft"/>
  ${[[150,150],[200,160],[250,150],[175,120],[225,120],[200,90]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="24" class="${i==5?"f-c":"f-surf"}"/><circle cx="${x}" cy="${y}" r="16" fill="none" class="s-line"/>`).join("")}
  <path d="M200 76l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" class="f-inv"/></svg>`,
 phases:()=>{const P=[["A1","קו בסיס","שבועיים",false],["B1","פרסים מוחשיים","5 שבועות",true],["A2","הפסקה","יומיים",false],["B2","פרסים חברתיים","שבועות 9 עד 16",true]];
  return `<svg viewBox="0 0 400 168" role="img" aria-label="ארבעת שלבי הניסוי">${arrowDef("ph")}
  <line x1="390" y1="96" x2="12" y2="96" class="s-line" marker-end="url(#ph)"/>
  ${P.map(([c,h,d,on],i)=>{const x=342-i*94;return `<rect x="${x-44}" y="18" width="88" height="62" rx="12" class="${on?"f-c":"f-soft"}"/><text x="${x}" y="44" text-anchor="middle" font-size="17" font-weight="800" class="${on?"f-inv":"f-ink"}">${c}</text><text x="${x}" y="66" text-anchor="middle" font-size="10.5" class="${on?"f-inv":"f-mut"}">${d}</text><text x="${x}" y="120" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">${h}</text>`}).join("")}</svg>`},
 table:()=>{const B=[["איחורים",[14.0,0.0,4.0,0.0]],["הסתובבויות",[25.9,0.0,10.4,2.4]],["דיבור בלי הצבעה",[27.6,2.4,15.6,6.5]]];const L=["A1","B1","A2","B2"],s=4.2;
  return `<svg viewBox="0 0 400 228" role="img" aria-label="ממוצע ההתנהגויות החריגות לשיעור בכל שלב">
  <line x1="12" y1="180" x2="388" y2="180" class="s-line"/>
  ${B.map(([n,v],g)=>{const cx=322-g*124;return v.map((y,i)=>{const x=cx+42-i*28,h=Math.max(y*s,1.5),hi=(i%2==1);return `<rect x="${x-11}" y="${180-h}" width="22" height="${h}" rx="3" class="${hi?"f-c":"f-mut"}" ${hi?"":'opacity=".5"'}/><text x="${x}" y="${174-h}" text-anchor="middle" font-size="9.5" font-weight="700" class="f-ink">${y.toFixed(1)}</text><text x="${x}" y="194" text-anchor="middle" font-size="9.5" class="f-mut">${L[i]}</text>`}).join("")+`<text x="${cx}" y="214" text-anchor="middle" font-size="11.5" font-weight="700" class="f-ink">${n}</text>`}).join("")}</svg>`}
};
