const FIG={
 cover34:()=>`<svg viewBox="0 0 400 228" role="img" aria-label="מיקרוסקופ וגל פעילות מוחית">
  <circle cx="200" cy="114" r="96" class="f-soft"/>
  <rect x="150" y="176" width="90" height="12" rx="5" class="f-c"/>
  <rect x="188" y="70" width="18" height="70" rx="6" class="f-c" transform="rotate(-18 197 105)"/>
  <rect x="170" y="140" width="56" height="10" rx="4" class="f-surf"/>
  <path d="M214 176 C236 150 236 110 214 84" fill="none" class="s-c" stroke-width="10" stroke-linecap="round"/>
  <path d="M120 70 l14 0 l8 -16 l10 32 l10 -24 l8 8 l18 0" fill="none" class="s-c" stroke-width="3" stroke-linejoin="round"/>
  <path d="M250 60 l14 0 l8 -12 l10 24 l10 -18 l8 6 l18 0" fill="none" class="s-line" stroke-width="3" stroke-linejoin="round"/></svg>`,
 trace:()=>`<svg viewBox="0 0 400 170" role="img" aria-label="סימון קדומני וסימון אחורני">${arrowDef("tr")}
  <circle cx="330" cy="60" r="20" class="f-c"/><circle cx="70" cy="60" r="20" class="f-surf"/>
  <line x1="308" y1="60" x2="96" y2="60" class="s-c" stroke-width="3" marker-end="url(#tr)"/>
  <circle cx="330" cy="130" r="20" class="f-surf"/><circle cx="70" cy="130" r="20" class="f-c"/>
  <line x1="96" y1="130" x2="308" y2="130" class="s-c" stroke-width="3" marker-end="url(#tr)"/>
  <text x="330" y="64" text-anchor="middle" font-size="10" font-weight="700" class="f-inv">הזרקה</text>
  <text x="70" y="134" text-anchor="middle" font-size="10" font-weight="700" class="f-inv">הזרקה</text>
  <text x="200" y="48" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">קדומני (PHA-L): מגוף התא אל הכפתורים</text>
  <text x="200" y="118" text-anchor="middle" font-size="11" font-weight="700" class="f-ink">אחורני (פלואורוגולד): מהכפתורים אל גוף התא</text>
  <text x="200" y="82" text-anchor="middle" font-size="10" class="f-mut">מגלה לאן האזור שולח (אקסונים מוציאים)</text>
  <text x="200" y="152" text-anchor="middle" font-size="10" class="f-mut">מגלה מאין האזור מקבל (אקסונים מביאים)</text></svg>`,
 img:()=>{const R=[["CT","קרני רנטגן","מבנה; חתכים אופקיים בלבד"],["MRI","שדה מגנטי ותדרי רדיו","מבנה; פירוט טוב יותר, כל המישורים"],["DTI","סורק MRI","אלומות אקסונים עם מיילין"],["PET","חומר רדיואקטיבי (FDG)","פעילות מטבולית או חומר מסומן"],["fMRI","סורק MRI (רמת חמצן בדם)","פעילות אזורית במוח ער"],["MEG","גלאי SQUID","שדות מגנטיים מפעילות עצבית"]];
  return `<div class="tblwrap"><table class="tbl"><tr><th>שיטה</th><th>במה משתמשת</th><th>מה מראה</th></tr>${R.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</table></div>`}
};
