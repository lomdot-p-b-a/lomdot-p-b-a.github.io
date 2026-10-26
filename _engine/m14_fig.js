const FIG={
 cover14:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="שתי בועות דיבור ופאזל">
  <circle cx="200" cy="112" r="90" class="f-soft"/>
  <path d="M110 60h110a14 14 0 0 1 14 14v44a14 14 0 0 1-14 14h-70l-22 20v-20h-18a14 14 0 0 1-14-14V74a14 14 0 0 1 14-14z" class="f-c"/>
  <path d="M190 104h96a14 14 0 0 1 14 14v38a14 14 0 0 1-14 14h-14v18l-20-18h-62a14 14 0 0 1-14-14v-38a14 14 0 0 1 14-14z" class="f-surf"/>
  <circle cx="140" cy="96" r="6" class="f-inv"/><circle cx="165" cy="96" r="6" class="f-inv"/><circle cx="190" cy="96" r="6" class="f-inv"/>
  <path d="M212 136h66M212 150h44" class="s-line" stroke-width="4" stroke-linecap="round"/></svg>`,
 circles:()=>`<svg viewBox="0 0 400 210" role="img" aria-label="שלושה מעגלי התערבות">
  <circle cx="200" cy="108" r="96" class="f-soft"/><circle cx="200" cy="120" r="66" class="f-surf"/><circle cx="200" cy="134" r="36" class="f-c"/>
  <text x="200" y="139" text-anchor="middle" font-size="13" font-weight="800" class="f-inv">ת'</text>
  <text x="200" y="76" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">המשפחה</text>
  <text x="200" y="32" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">מעגל החיים</text>
  <text x="200" y="48" text-anchor="middle" font-size="10.5" class="f-mut">תיכון · עבודה · צבא</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" class="f-mut">ולצדם: הצוות החינוכי בבית הספר</text></svg>`,
 scores:()=>{const R=[["הבנה",4,9],["סידור תמונות",2,8]];
  return `<svg viewBox="0 0 400 200" role="img" aria-label="ציוני תקן בתחילת הטיפול ובסופו">
  <line x1="20" y1="150" x2="380" y2="150" class="s-line"/>
  ${R.map(([n,a,b],i)=>{const cx=290-i*180;return `<rect x="${cx+6}" y="${150-a*9}" width="34" height="${a*9}" rx="4" class="f-mut" opacity=".5"/><rect x="${cx-40}" y="${150-b*9}" width="34" height="${b*9}" rx="4" class="f-c"/><text x="${cx+23}" y="${144-a*9}" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${a}</text><text x="${cx-23}" y="${144-b*9}" text-anchor="middle" font-size="12" font-weight="800" class="f-ink">${b}</text><text x="${cx}" y="170" text-anchor="middle" font-size="12.5" font-weight="700" class="f-ink">${n}</text>`}).join("")}
  <rect x="246" y="184" width="12" height="10" rx="2" class="f-mut" opacity=".5"/><text x="240" y="193" text-anchor="start" font-size="11" class="f-ink">בהתחלה (גיל 12)</text>
  <rect x="116" y="184" width="12" height="10" rx="2" class="f-c"/><text x="110" y="193" text-anchor="start" font-size="11" class="f-ink">בסוף (גיל 16)</text></svg>`}
};
