const FIG={
 fiedler:()=>{const z=[[320,"נוח מאוד","משימתי"],[200,"נוח בינוני","מכוון יחסים"],[80,"לא נוח","משימתי"]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="מודל פידלר: איזה מנהיג מתאים לאיזה מצב">
  <rect x="20" y="58" width="360" height="14" rx="7" class="f-soft"/>
  <text x="380" y="40" text-anchor="start" font-size="11.5" class="f-mut">יחסים טובים, משימה מובנית, כוח חזק</text>
  ${z.map(([x,t,s],i)=>`<circle cx="${x}" cy="65" r="11" class="f-c"/><text x="${x}" y="104" text-anchor="middle" font-size="13.5" font-weight="700" class="f-ink">${t}</text><rect x="${x-52}" y="118" width="104" height="34" rx="17" class="${i==1?"f-c":"f-surf"}"/><text x="${x}" y="140" text-anchor="middle" font-size="12.5" font-weight="700" class="${i==1?"f-inv":"f-c"}">${s}</text>`).join("")}
  <text x="200" y="184" text-anchor="middle" font-size="11.5" class="f-mut">המנהיג שמתאים לכל מצב</text></svg>`},
 range:()=>{const r=[["לסה-פר (Laissez-faire)","פסיבי, מתחמק מהחלטות"],["ניהול לפי חריגים","מתערב רק כשיש בעיה"],["תגמול מותנה","תגמול תמורת מאמץ"],["ארבע התנהגויות טרנספורמטיביות","השפעה, השראה, גירוי, יחס אישי"]];
  return `<svg viewBox="0 0 400 236" role="img" aria-label="מודל הטווח המלא של מנהיגות">${arrowDef("ra")}
  <line x1="24" y1="214" x2="24" y2="22" class="s-c" marker-end="url(#ra)"/>
  ${r.map(([t,s],i)=>{const y=168-i*50,w=200+i*40,x=390-w;return `<rect x="${x}" y="${y}" width="${w}" height="42" rx="12" class="${i==3?"f-c":"f-soft"}" ${i==0?'opacity=".6"':""}/><text x="378" y="${y+18}" text-anchor="start" font-size="12.5" font-weight="700" class="${i==3?"f-inv":"f-ink"}">${t}</text><text x="378" y="${y+34}" text-anchor="start" font-size="10.5" class="${i==3?"f-inv":"f-mut"}">${s}</text>`}).join("")}</svg>`},
 cover5:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מנהיג מוביל קבוצה לעבר דגל">${arrowDef("c5")}
  <path d="M40 180 Q200 150 320 70" class="s-line" stroke-dasharray="5 6" fill="none"/>
  <line x1="320" y1="70" x2="320" y2="20" class="s-c" stroke-width="3"/><path d="M320 20 L360 32 L320 44z" class="f-c"/>
  ${[[250,118,1],[190,148,0],[140,160,0],[90,170,0]].map(([x,y,l])=>`<circle cx="${x}" cy="${y-14}" r="${l?10:8}" class="${l?"f-c":"f-soft"}"/><path d="M${x-(l?13:10)} ${y+12}c2-10 7-13 ${l?13:10}-13s${l?11:8} 3 ${l?13:10} 13z" class="${l?"f-c":"f-soft"}"/>`).join("")}
  <text x="200" y="214" text-anchor="middle" font-size="13" font-weight="600" class="f-mut">להשפיע על קבוצה לעבר חזון או מטרות</text></svg>`
};
