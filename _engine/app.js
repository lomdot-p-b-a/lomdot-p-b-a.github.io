Object.assign(I,{
 headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="14" width="5" height="7" rx="1.8"/><rect x="16.5" y="14" width="5" height="7" rx="1.8"/>',
 play:'<path d="M8 5.5v13l11-6.5z"/>',
 book:'<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H11v17H5.5A1.5 1.5 0 0 0 4 21.5zM20 4.5A1.5 1.5 0 0 0 18.5 3H13v17h5.5a1.5 1.5 0 0 1 1.5 1.5z"/>',
 arrowL:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
 arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
 cards:'<rect x="7" y="3" width="13" height="16" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/>',
 flip:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>'
});
I.map='<circle cx="12" cy="12" r="3"/><circle cx="4.5" cy="5" r="2"/><circle cx="19.5" cy="5" r="2"/><circle cx="4.5" cy="19" r="2"/><circle cx="19.5" cy="19" r="2"/><path d="M9.6 10.2L6 6.4M14.4 10.2L18 6.4M9.6 13.8L6 17.6M14.4 13.8L18 17.6"/>';
if(typeof H!=="undefined")for(const k in H)Q[k]=Object.assign({},H[k],{lv:2});
const isH=id=>Q[id].lv===2;
for(const t of T){t.qids=Object.keys(Q).filter(k=>Q[k].t===t.id&&!isH(k));t.hids=Object.keys(Q).filter(k=>Q[k].t===t.id&&isH(k))}
const HAS_H=T.some(t=>t.hids.length);
const KEY=CONFIG.key;
let S={q:{},read:{}};
try{const s=JSON.parse(localStorage.getItem(KEY)||"null"); if(s&&s.q) S=s;}catch(e){}
S.pos=S.pos||{};S.done=S.done||{};
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
const st=id=>S.q[id]||(S.q[id]={n:0,c:0,w:0,t:0,lv:-1});
const mastered=id=>(S.q[id]?.c||0)>=2;
const topicStarted=t=>S.read[t.id]||S.pos[t.id]!=null||t.qids.some(id=>S.q[id]&&S.q[id].n);
const allIds=Object.keys(Q).filter(id=>!isH(id));
const rnd=t=>S.done[t.id]?(S.done[t.id].k||1)+1:1;
const hardOn=t=>rnd(t)>1&&t.hids.length>0;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const pickVariant=id=>{const s=st(id),n=Q[id].v.length;return n>1?(s.lv+1)%n:0};
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const color=t=>`var(--${t.id})`;
const app=document.getElementById("app");
const LET=["א","ב","ג","ד"];
const strength=t=>Math.round(100*t.qids.filter(id=>S.q[id]&&S.q[id].n&&S.q[id].c>0).length/t.qids.length);
const COURSE=window.COURSE_ID||"mgmt",COURSE_NAME=window.COURSE_NAME||"";
const REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* render with a direction-aware entrance: "fwd" = next (enters from the left in RTL), "back" = previous, "up" = new screen */
function show(html,dir="up"){
  app.innerHTML=html;
  const v=app.firstElementChild;if(v)v.classList.add("enter",dir);
  scrollTo({top:0,behavior:"instant"});
}
/* animate a ring and a number from 0 to their value */
function countUp(root){
  root.querySelectorAll("[data-count]").forEach(el=>{
    const to=+el.dataset.count,suf=el.dataset.suffix||"",tot=el.dataset.total;
    if(REDUCED){el.textContent=to+suf;return}
    const t0=performance.now(),d=900;
    const f=now=>{const k=Math.min(1,(now-t0)/d),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e)+suf+(tot?"/"+tot:"");if(k<1)requestAnimationFrame(f)};
    requestAnimationFrame(f);
  });
  root.querySelectorAll(".ring[data-p]").forEach(r=>{requestAnimationFrame(()=>requestAnimationFrame(()=>r.style.setProperty("--p",r.dataset.p)))});
}
const ring=(p,label)=>`<div class="ring" data-p="${p}" style="--p:${REDUCED?p:0}"><span>${label}</span></div>`;

function qCard(id,onDone,label){
  const vi=pickVariant(id),v=Q[id].v[vi],opts=shuffle([v.a,...v.w]);
  const box=document.createElement("div");box.className="q";
  box.innerHTML=(label?`<span class="eyebrow">${label}</span>`:"")+`<div class="qtext">${esc(v.q)}</div>${acrNote(v.q,v.a,...v.w)}<div class="opts"></div>`;
  const wrap=box.querySelector(".opts");
  opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt";b.style.setProperty("--i",k);b.dataset.a=o===v.a?"1":"";
    b.innerHTML=`<span class="k">${LET[k]}</span><span class="ot">${esc(o)}</span>`;
    b.onclick=()=>{const ok=o===v.a,s=st(id);s.n++;s.t=Date.now();s.lv=vi;ok?s.c++:(s.c=0,s.w++);save();
      box.classList.add("answered");
      wrap.querySelectorAll("button").forEach(x=>{x.disabled=true;if(x.dataset.a){x.classList.add("right");x.querySelector(".k").innerHTML=ic("check")}});
      if(!ok){b.classList.add("wrong");b.querySelector(".k").innerHTML=ic("x")}
      const fb=document.createElement("div");fb.className="fb "+(ok?"ok":"no");
      fb.innerHTML=`<div class="fbi"><strong>${ok?"נכון":"לא בדיוק"}</strong><p>${esc(v.e)}</p></div>`;box.appendChild(fb);
      const nx=document.createElement("button");nx.className="primary next";nx.innerHTML=`<span>המשך</span>${ic("arrowL")}`;
      nx.onclick=()=>onDone(ok);box.appendChild(nx);nx.focus({preventScroll:true});setTimeout(()=>nx.scrollIntoView({block:"nearest",behavior:REDUCED?"auto":"smooth"}),120);
    };wrap.appendChild(b)});
  return box;
}

function resumeTarget(){
  if(S.at&&T[S.at.ti])return S.at;
  const i=T.findIndex(t=>!S.done[t.id]);return i<0?null:{ti:i,bi:S.pos[T[i].id]||0};
}

function home(dir="up"){
  document.body.style.removeProperty("--c");if(S.at){}
  const started=T.filter(topicStarted);
  const total=Math.round(T.reduce((a,t)=>a+strength(t)*t.qids.length,0)/allIds.length);
  const weak=allIds.filter(id=>S.q[id]&&S.q[id].n&&!mastered(id)).length;
  const r=resumeTarget(),rt=r?T[r.ti]:null;
  const resumeLabel=!started.length?"להתחיל ללמוד":r?`להמשיך: נושא ${r.ti+1}`:"לחזור על החומר";
  const examN=Math.min(allIds.length,Math.max(15,Math.min(20,T.length*3)));
  const tools=[
    MAPSET.length?{id:"map",i:"map",t:"מפת חשיבה",d:MAPSET.length>1?`${MAPSET.length} מפות · כל החומר במבט אחד`:`${MAPSET[0].title} · כל החלקים במבט אחד`}:null,
    DECK.length?{id:"crd",i:"cards",t:"כרטיסיות לימוד",d:`${DECK.length} מושגים מרכזיים · הופכים ובודקים את עצמכם`}:null,
    typeof SUM!=="undefined"?{id:"sum",i:"doc",t:"סיכום הקריאה",d:"כל החומר בעמוד אחד, לקריאה לפני השיעור"}:null,
    CONFIG.podcast?{id:"pod",i:"headphones",t:"פודקאסט",d:`${CONFIG.podcast.min?CONFIG.podcast.min+" דקות · ":""}לשמיעה בדרך`}:null,
    {id:"exm",i:"grad",t:"מבחן מסכם",d:`${examN} שאלות עם ציון${S.exam?` · אחרון: ${S.exam.pct}`:""}`},
    {id:"rev",i:"cycle",t:"חזרה מהירה",d:started.length?"12 שאלות ממה שכדאי לחזק":"נפתח אחרי הנושא הראשון",off:!started.length},
    {id:"wk",i:"target",t:"נושאים לחיזוק",d:started.length?"מהחלש לחזק, לפי התשובות שלך":"נפתח אחרי הנושא הראשון",off:!started.length}
  ].filter(Boolean);
  show(`<div class="mod-home">
   <nav class="crumbs"><a href="../#${COURSE}">${COURSE_NAME}</a><span aria-hidden="true">/</span><span>${CONFIG.he||CONFIG.title}</span></nav>
   <section class="mhero" style="--c:var(--accent)">
    <div class="mhero-art">${FIG[CONFIG.cover]()}</div>
    <div class="mhero-body">
     <span class="eyebrow">${CONFIG.eyebrow}</span>
     ${CONFIG.badge?`<span class="badge">${CONFIG.badge}</span>`:""}
     <h1><span class="h1pre">לומדת חובת קריאה</span>${CONFIG.en?`<span dir="ltr" lang="en" class="entitle">${CONFIG.title}</span>`:CONFIG.title}</h1>
     ${CONFIG.en&&CONFIG.he?`<p class="hetitle">${CONFIG.he}</p>`:""}
     ${CONFIG.cite?`<p class="cite" dir="ltr">${CONFIG.cite}</p>`:""}
     ${CONFIG.about?`<p class="about">${CONFIG.about}</p>`:""}
    </div>
   </section>
   <section class="progress-panel">
    ${ring(total,`<b data-count="${total}" data-suffix="%">${REDUCED?total+"%":"0%"}</b>`)}
    <div class="pp-text"><b>${total===0&&!started.length?"עוד לא התחלת":total>=80?"אתה שולט בחומר":`התקדמת ב־${total}% מהשאלות`}</b><span>${weak?`${weak} שאלות מחכות לחיזוק`:`${T.length} נושאים · ${allIds.length} שאלות`}</span></div>
    <button class="primary big-cta" id="go"><span>${resumeLabel}</span>${ic("arrowL")}</button>
   </section>
   <section class="tools" aria-label="כלי הלומדה">${tools.map((x,k)=>`<button class="tool" id="${x.id}" style="--i:${k}" ${x.off?"disabled":""}><span class="ti">${ic(x.i)}</span><span class="tt"><b>${x.t}</b><small>${x.d}</small></span></button>`).join("")}</section>
   ${CONFIG.podcast?`<section id="podbox" class="podbox" hidden><div class="pod-head"><span class="ti">${ic("headphones")}</span><div><b>פודקאסט: ${CONFIG.he||CONFIG.title}</b><small>נוצר ב־Gemini Notebook מקריאת החובה. כמו כל סיכום אוטומטי הוא עלול לטעות, והקריאה עצמה קובעת.</small></div></div><div class="podframe"></div></section>`:""}
   <section class="topics"><div class="sec-h"><h2>נושאי הלומדה</h2><span>${T.length} נושאים</span></div><ol class="tlist" id="list"></ol></section>
   <footer class="foot"><span>${CONFIG.note}</span><button class="ghost" id="reset">איפוס התקדמות</button></footer>
  </div>`,dir);
  const list=app.querySelector("#list");
  T.forEach((t,i)=>{const p=strength(t),pos=S.pos[t.id],dn=S.done[t.id],li=document.createElement("li"),b=document.createElement("button");
    b.className="trow-btn"+(dn?" done":"");b.style.setProperty("--c",color(t));b.style.setProperty("--i",i);
    const status=dn?`הושלם · מבחן ${dn.r}/${dn.n}${t.hids.length?" · הבא: סבב "+rnd(t):""}`:pos!=null?`באמצע · קטע ${pos+1} מתוך ${t.blocks.length}`:S.read[t.id]?"נקרא":topicStarted(t)?"בתהליך":"לא התחלת";
    b.innerHTML=`<span class="tn">${dn?ic("check"):i+1}</span><span class="tb"><b>${t.title}</b><small>${status}</small></span><span class="tm"><span class="bar"><i style="width:${dn&&!p?100*dn.r/dn.n:p}%"></i></span><small>${t.blocks.length} קטעים</small></span>`;
    b.onclick=()=>topic(i,pos!=null?pos:0,"fwd");li.appendChild(b);list.appendChild(li)});
  app.querySelector("#go").onclick=()=>{if(!started.length)return topic(0,0,"fwd");if(r){if(r.quiz)return quiz(r.ti);return topic(r.ti,Math.min(r.bi||0,T[r.ti].blocks.length-1),"fwd")}review()};
  const on=(id,f)=>{const e=app.querySelector("#"+id);if(e)e.onclick=f};
  on("rev",review);on("sum",()=>summary());on("crd",()=>flashcards());on("map",()=>MAPSET.length>1?mapList():mindmap(0));on("exm",exam);on("wk",weakTopics);
  on("pod",()=>{const bx=app.querySelector("#podbox");bx.hidden=!bx.hidden;app.querySelector("#pod").classList.toggle("on",!bx.hidden);const f=bx.querySelector(".podframe");if(!bx.hidden){if(!f.firstChild)f.innerHTML=`<iframe src="https://drive.google.com/file/d/${CONFIG.podcast.id}/preview" allow="autoplay" title="פודקאסט" loading="lazy"></iframe>`;bx.scrollIntoView({block:"nearest",behavior:REDUCED?"auto":"smooth"})}});
  const rs=app.querySelector("#reset");rs.onclick=()=>{if(rs.dataset.sure){S={q:{},read:{},pos:{},done:{}};save();home()}else{rs.dataset.sure=1;rs.textContent="לחץ שוב כדי לאפס"}};
  countUp(app);
}

function bar(title,n,i,label,backLabel="כל הנושאים"){
  return `<div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>${backLabel}</span></button><span class="prog">${label}</span></div><div class="steps" style="--n:${n}">${Array.from({length:n},(_,k)=>`<i class="${k<i?"on":k===i?"on now":""}"></i>`).join("")}</div></div><span class="eyebrow ctx">${title}</span>`;
}

function topic(ti,bi,dir="fwd"){
  const t=T[ti],blk=t.blocks[bi];document.body.style.setProperty("--c",color(t));
  const last=bi+1>=t.blocks.length;
  show(`<div class="stack reading">${bar(`נושא ${ti+1} · ${t.title}`,t.blocks.length,bi,`קטע ${bi+1} מתוך ${t.blocks.length}`)}
   <article class="card page"><h2 class="ph">${blk.h}</h2>${acrExpand(blk.html)}</article>${MAPSET.length&&bi===0?MAPSET.map((m,k)=>m.topic===t.id?`<button class="mm-cta" data-map="${k}"><span class="ti">${ic("map")}</span><span class="tt"><b>מפת חשיבה: ${m.title}</b><small>${m.sub}</small></span>${ic("arrowL")}</button>`:"").join(""):""}<div id="ck"></div>
   <div class="pager">${bi>0?`<button class="ghost" id="prev">${ic("arrowR")}<span>הקטע הקודם</span></button>`:"<span></span>"}<button class="primary" id="next"><span>${last?`למבחן הנושא · ${t.qids.length} שאלות`:"הקטע הבא"}</span>${ic("arrowL")}</button></div></div>`,dir);
  enhanceTerms(app.querySelector(".page"));
  S.pos[t.id]=bi;S.at={ti,bi};save();
  app.querySelector("#back").onclick=()=>home("back");
  app.querySelector("#next").onclick=()=>{if(!last)topic(ti,bi+1,"fwd");else{S.read[t.id]=1;delete S.pos[t.id];S.at={ti,quiz:1};save();quiz(ti)}};
  const pv=app.querySelector("#prev");if(pv)pv.onclick=()=>topic(ti,bi-1,"back");
  app.querySelectorAll(".mm-cta").forEach(b=>b.onclick=()=>mindmap(+b.dataset.map,()=>topic(ti,bi,"back")));
  checkBox(t,bi);
}

/* Definitions become term cards: only the name shows, a tap opens the full explanation underneath.
   Source blocks: tiles() squares (.tile), tiles() long cards (.cpt) and def() boxes, except the topic intro. */
const INTRO_LBL="על מה הנושא";
const isTerm=el=>el.matches(".tiles,.cpt")||(el.matches(".def")&&el.querySelector(".lbl")?.textContent.trim()!==INTRO_LBL);
function termItem(el){
  if(el.matches(".tile"))return{icon:el.querySelector("svg")?.outerHTML||"",name:el.querySelector("b").innerHTML,en:"",body:`<p class="td-lead">${el.querySelector("span").innerHTML}</p>`};
  if(el.matches(".cpt")){const h=el.querySelector(".cpt-h");return{icon:h.querySelector("svg")?.outerHTML||"",name:h.querySelector("b").innerHTML,en:"",body:[...el.children].filter(c=>c!==h).map(c=>c.outerHTML).join("")}}
  const lbl=el.querySelector(".lbl").textContent.trim(),p=el.querySelector("p").cloneNode(true),enEl=p.querySelector(".en");
  const en=enEl?enEl.textContent.replace(/[()]/g,"").trim():"";
  const name=lbl==="מושג מפתח"&&p.querySelector("mark")?p.querySelector("mark").textContent:lbl;
  if(enEl)enEl.remove();
  return{icon:ic(lbl==="מושג מפתח"?"bulb":"doc"),name,en,body:`<p class="td-lead">${p.innerHTML.replace(/^\s*:?\s*/,"")}</p>`};
}
let termSeq=0;
function enhanceTerms(root){
  if(!root)return;
  const kids=[...root.children],groups=[];let cur=null;
  for(const el of kids){if(isTerm(el)){if(!cur){cur=[];groups.push(cur)}cur.push(el)}else cur=null}
  for(const g of groups){
    const items=g.flatMap(el=>el.matches(".tiles")?[...el.children]:[el]).map(termItem);
    const id="tp"+(++termSeq),wrap=document.createElement("div");wrap.className="terms";
    wrap.innerHTML=`<div class="terms-head"><span>${items.length>1?`${items.length} מושגים · לחצו על מושג להסבר`:"מושג מפתח · לחצו להסבר"}</span>${items.length>1?`<span class="terms-count">0/${items.length}</span>`:""}</div>
     <div class="term-grid" data-n="${Math.min(items.length,4)}">${items.map((it,k)=>`<button class="term" style="--i:${k}" aria-expanded="false" aria-controls="${id}"><span class="term-ic">${it.icon}</span><span class="term-t"><span class="term-name">${it.name}</span>${it.en?`<span class="term-en" dir="ltr" lang="en">${it.en}</span>`:""}</span><span class="term-go" aria-hidden="true"></span></button>`).join("")}</div>
     <div class="term-panel" id="${id}" role="region" hidden></div>`;
    g[0].before(wrap);g.forEach(el=>el.remove());
    const btns=[...wrap.querySelectorAll(".term")],panel=wrap.querySelector(".term-panel"),seen=new Set();let open=-1;
    const count=wrap.querySelector(".terms-count");
    const openAt=k=>{
      if(k===open){close();return}
      open=k;seen.add(k);const it=items[k];
      btns.forEach((b,j)=>{b.setAttribute("aria-expanded",j===k);b.classList.toggle("seen",seen.has(j))});
      if(count)count.textContent=`${seen.size}/${items.length}`;
      panel.innerHTML=`<div class="tp-in"><div class="tp-head"><span class="term-ic">${it.icon}</span><div class="tp-title"><h4>${it.name}</h4>${it.en?`<span class="term-en" dir="ltr" lang="en">${it.en}</span>`:""}</div><button class="tp-x" aria-label="סגירה">×</button></div>
       <div class="tp-body">${it.body}</div>
       ${items.length>1?`<div class="tp-foot"><span>${k+1} מתוך ${items.length}</span>${k+1<items.length?`<button class="tp-next"><span>המושג הבא: ${items[k+1].name}</span>${ic("arrowL")}</button>`:`<span class="tp-done">${seen.size===items.length?"עברתם על כל המושגים":"זה המושג האחרון בקבוצה"}</span>`}</div>`:""}</div>`;
      panel.hidden=false;panel.classList.remove("show");void panel.offsetWidth;panel.classList.add("show");
      panel.querySelector(".tp-x").onclick=close;
      const nx=panel.querySelector(".tp-next");if(nx)nx.onclick=()=>openAt(k+1);
      const r=panel.getBoundingClientRect();if(r.bottom>innerHeight||r.top<80)panel.scrollIntoView({block:"nearest",behavior:REDUCED?"auto":"smooth"});
    };
    const close=()=>{open=-1;panel.hidden=true;btns.forEach(b=>b.setAttribute("aria-expanded","false"))};
    btns.forEach((b,k)=>b.onclick=()=>openAt(k));
  }
}

function checkBox(t,bi){
  const list=typeof K!=="undefined"&&K[t.id+":"+bi];const host=app.querySelector("#ck");if(!list||!host)return;
  S.ck=S.ck||{};const key=t.id+":"+bi;
  const showQ=i=>{const v=list[i],opts=shuffle([v.a,...v.w]);
    host.innerHTML=`<div class="q ckq"><span class="eyebrow">בדיקת הבנה · ${i+1} מתוך ${list.length}</span><div class="qtext">${esc(v.q)}</div><p class="cknote">${i?"שאלה אחרונה על הקטע.":"לא בטוחים? חזרו לטקסט למעלה לפני שעונים."}</p><div class="opts"></div></div>`;
    const box=host.firstChild,wrap=box.querySelector(".opts");
    opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt";b.style.setProperty("--i",k);b.dataset.a=o===v.a?"1":"";
      b.innerHTML=`<span class="k">${LET[k]}</span><span class="ot">${esc(o)}</span>`;
      b.onclick=()=>{const ok=o===v.a;(S.ck[key]=S.ck[key]||[])[i]=ok?1:0;save();box.classList.add("answered");
        wrap.querySelectorAll("button").forEach(x=>{x.disabled=true;if(x.dataset.a){x.classList.add("right");x.querySelector(".k").innerHTML=ic("check")}});
        if(!ok){b.classList.add("wrong");b.querySelector(".k").innerHTML=ic("x")}
        const fb=document.createElement("div");fb.className="fb "+(ok?"ok":"no");
        fb.innerHTML=`<div class="fbi"><strong>${ok?"נכון":"לא בדיוק"}</strong><p>${esc(v.e)}${ok?"":" כדאי לחזור לטקסט ולקרוא שוב."}</p></div>`;box.appendChild(fb);
        if(i+1<list.length){const nx=document.createElement("button");nx.className="ghost";nx.innerHTML=`<span>לשאלה ${i+2}</span>${ic("arrowL")}`;
          nx.onclick=()=>{const y=scrollY;showQ(i+1);scrollTo(0,y)};box.appendChild(nx)}
        else{const d=document.createElement("p");d.className="cknote";const r=(S.ck[key]||[]).filter(Boolean).length;d.textContent=`סיימתם את בדיקת ההבנה של הקטע: ${r} מתוך ${list.length} נכון.`;box.appendChild(d)}
      };wrap.appendChild(b)});
  };showQ(0);
}

function runSet(title,ids,c,onEnd){
  let i=0,right=0;document.body.style.setProperty("--c",c);
  const step=()=>{
    if(i>=ids.length)return onEnd(right,ids.length);
    const id=ids[i],from=T.find(t=>t.id===Q[id].t);
    show(`<div class="stack quiz">${bar(title,ids.length,i,`שאלה ${i+1} מתוך ${ids.length}`)}<div id="slot"></div></div>`,i?"fwd":"up");
    app.querySelector("#back").onclick=()=>home("back");
    const card=qCard(id,ok=>{if(ok)right++;i++;step()},from.title);card.style.setProperty("--c",color(from));
    app.querySelector("#slot").appendChild(card);
  };step();
}

function quiz(ti){
  const t=T[ti];
  if(hardOn(t)){const weak=shuffle(t.qids.filter(id=>!mastered(id))).slice(0,2);
    return runSet(`מבחן הנושא · סבב ${rnd(t)} · שאלות הבנה`,shuffle(shuffle(t.hids).slice(0,Math.max(8,t.qids.length)).concat(weak)),color(t),(r,n)=>done(r,n,ti))}
  const prev=T.slice(0,ti).filter(topicStarted).flatMap(x=>x.qids);
  const extra=shuffle(prev).sort((a,b)=>st(a).c-st(b).c).slice(0,2);
  runSet(`מבחן סיום · ${t.title}`,shuffle(t.qids).concat(extra),color(t),(r,n)=>done(r,n,ti));
}

function review(){
  const pool=T.filter(topicStarted).flatMap(t=>S.done[t.id]?t.qids.concat(t.hids):t.qids),now=Date.now();
  const tw={};T.forEach(t=>tw[t.id]=(100-strength(t))/20);
  const score=id=>{const s=S.q[id]||{n:0,c:0,w:0,t:0};return (s.n?0:2)+s.w*2+(s.c<2?3:0)+Math.min(3,(now-s.t)/864e5)+tw[Q[id].t]+Math.random()*2};
  const ids=pool.map(id=>[id,score(id)]).sort((a,b)=>b[1]-a[1]).slice(0,12).map(x=>x[0]);
  runSet("חזרה מהירה",shuffle(ids),"var(--accent)",(r,n)=>done(r,n,null));
}

function practice(ti){const t=T[ti];if(hardOn(t))return quiz(ti);runSet(`תרגול · ${t.title}`,shuffle(t.qids),color(t),(r,n)=>done(r,n,ti))}

function exam(){
  const N=Math.min(allIds.length,Math.max(15,Math.min(20,T.length*3)));
  const xh=S.exam&&HAS_H,pools=T.map(t=>xh&&t.hids.length?shuffle(t.hids).concat(shuffle(t.qids)):shuffle(t.qids)),ids=[];
  for(let k=0;ids.length<N;k++)for(const p of pools){if(ids.length>=N)break;if(k<p.length)ids.push(p[k])}
  const items=shuffle(ids).map(id=>{const vi=pickVariant(id),v=Q[id].v[vi];return{id,vi,v,opts:shuffle([v.a,...v.w]),pick:null}});
  document.body.style.setProperty("--c","var(--accent)");
  let i=0;
  const step=(dir)=>{
    const it=items[i],from=T.find(t=>t.id===Q[it.id].t),last=i===items.length-1,answered=items.filter(x=>x.pick!=null).length;
    show(`<div class="stack quiz exam">${bar(xh?`מבחן מסכם · סבב ${(S.exam.k||1)+1} · שאלות הבנה`:"מבחן מסכם",items.length,i,`שאלה ${i+1} מתוך ${items.length} · נענו ${answered}`,"יציאה מהמבחן")}
     <div class="q"><span class="eyebrow">${esc(from.title)}</span><div class="qtext">${esc(it.v.q)}</div>${acrNote(it.v.q,it.v.a,...it.v.w)}<div class="opts"></div></div>
     <div class="pager">${i?`<button class="ghost" id="pv">${ic("arrowR")}<span>הקודמת</span></button>`:"<span></span>"}<button class="primary" id="nx" ${it.pick==null?"disabled":""}><span>${last?"הגשה ובדיקה":"השאלה הבאה"}</span>${ic("arrowL")}</button></div></div>`,dir);
    {const bk=app.querySelector("#back");bk.onclick=()=>{if(bk.dataset.sure)home("back");else{bk.dataset.sure=1;bk.querySelector("span").textContent="לחצו שוב ליציאה (התשובות לא יישמרו)"}}}
    const wrap=app.querySelector(".opts"),nx=app.querySelector("#nx");
    it.opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt"+(it.pick===o?" sel":"");b.style.setProperty("--i",k);
      b.innerHTML=`<span class="k">${LET[k]}</span><span class="ot">${esc(o)}</span>`;
      b.onclick=()=>{it.pick=o;wrap.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");nx.disabled=false};
      wrap.appendChild(b)});
    nx.onclick=()=>{if(last)grade(items);else{i++;step("fwd")}};
    const pv=app.querySelector("#pv");if(pv)pv.onclick=()=>{i--;step("back")};
  };step("up");
}

function grade(items){
  const now=Date.now();let r=0;const per={};
  items.forEach(it=>{const ok=it.pick===it.v.a,s=st(it.id),tid=Q[it.id].t;s.n++;s.t=now;s.lv=it.vi;ok?(s.c++,r++):(s.c=0,s.w++);
    it.ok=ok;(per[tid]=per[tid]||{r:0,n:0}).n++;if(ok)per[tid].r++});
  const n=items.length,pct=Math.round(100*r/n);S.exam={pct,t:now,k:S.exam?(S.exam.k||1)+1:1};save();
  const rows=T.filter(t=>per[t.id]).map((t,k)=>{const p=per[t.id],q=Math.round(100*p.r/p.n);
    return `<div class="trow" style="--c:${color(t)};--i:${k}"><span class="tt">${esc(t.title)}</span><span class="bar"><i style="--w:${q}%"></i></span><span class="sc">${p.r}/${p.n}</span></div>`}).join("");
  const wrong=items.filter(it=>!it.ok);
  const verdict=pct>=90?"מצוין. אתה שולט בחומר.":pct>=70?"טוב. עבור על הטעויות למטה וחזור על הנושאים החלשים.":"כדאי לחזור על החומר. לכל טעות למטה יש כפתור לחזרה על הנושא.";
  show(`<div class="stack results"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button></div></div>
   <article class="card score">
    <span class="eyebrow">ציון המבחן המסכם</span>
    <div class="score-row">${ring(pct,`<b data-count="${pct}">${REDUCED?pct:0}</b><small>מתוך 100</small>`)}<div><div class="big"><span data-count="${r}">${REDUCED?r:0}</span><small>/${n} נכונות</small></div><p>${verdict}</p></div></div>
    <h3>לפי נושא</h3><div class="trows">${rows}</div>
    <div class="row"><button class="primary" id="again">מבחן מסכם חדש</button><button id="hm">לכל הנושאים</button></div>
   </article>
   ${wrong.length?`<h3 class="sec-title">הטעויות שלך · ${wrong.length}</h3>`:`<p class="muted">לא היו טעויות.</p>`}
   <div class="stack" id="wl"></div></div>`,"up");
  const wl=app.querySelector("#wl");
  wrong.forEach((it,k)=>{const ti=T.findIndex(t=>t.id===Q[it.id].t),t=T[ti],c=document.createElement("article");c.className="card rev";c.style.setProperty("--c",color(t));c.style.setProperty("--i",k);
    c.innerHTML=`<span class="eyebrow">${esc(t.title)}</span><div class="qtext">${esc(it.v.q)}</div>${acrNote(it.v.q,it.v.a,it.pick,it.v.e)}
     <div class="opt wrong" aria-disabled="true"><span class="k">${ic("x")}</span><span class="ot"><b>התשובה שלך:</b> ${esc(it.pick)}</span></div>
     <div class="opt right" aria-disabled="true"><span class="k">${ic("check")}</span><span class="ot"><b>התשובה הנכונה:</b> ${esc(it.v.a)}</span></div>
     <div class="fb no"><div class="fbi"><strong>למה?</strong><p>${esc(it.v.e)}</p></div></div>
     <div class="row"><button class="go">${ic("book")}<span>חזרה על הנושא: ${esc(t.title)}</span></button></div>`;
    c.querySelector(".go").onclick=()=>topic(ti,0,"fwd");wl.appendChild(c)});
  app.querySelector("#back").onclick=()=>home("back");app.querySelector("#hm").onclick=()=>home("back");app.querySelector("#again").onclick=exam;
  countUp(app);requestAnimationFrame(()=>requestAnimationFrame(()=>app.querySelectorAll(".trow .bar i").forEach(x=>x.classList.add("go"))));
}

function weakTopics(){
  document.body.style.setProperty("--c","var(--accent)");
  const list=T.map((t,i)=>({t,i,s:strength(t),started:topicStarted(t)})).sort((a,b)=>(a.started-b.started)||(a.s-b.s));
  const lab=x=>!x.started?"עוד לא תרגלת":x.s>=80?"חזק":x.s>=50?"בינוני":"צריך חיזוק";
  show(`<div class="stack"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button></div></div>
   <span class="eyebrow">נושאים לחיזוק</span><p class="muted">מהחלש לחזק, לפי התשובות האחרונות שלך בכל שאלה.</p>
   <div class="stack" id="wl"></div></div>`,"up");
  const wl=app.querySelector("#wl");
  list.forEach((x,k)=>{const c=document.createElement("article");c.className="card rev";c.style.setProperty("--c",color(x.t));c.style.setProperty("--i",k);
    c.innerHTML=`<div class="trow"><span class="tt">${x.i+1}. ${esc(x.t.title)}</span><span class="bar"><i class="go" style="--w:${x.s}%"></i></span><span class="sc">${x.started?x.s+"%":"—"}</span></div>
     <span class="tag ${!x.started?"":x.s>=80?"good":x.s>=50?"mid":"low"}">${lab(x)}</span>
     <div class="row"><button class="primary pr">תרגול שאלות הנושא</button><button class="rd">קריאה חוזרת</button></div>`;
    c.querySelector(".pr").onclick=()=>practice(x.i);c.querySelector(".rd").onclick=()=>topic(x.i,0,"fwd");wl.appendChild(c)});
  app.querySelector("#back").onclick=()=>home("back");
}

function done(r,n,ti){
  if(ti!=null){const o=S.done[T[ti].id];S.done[T[ti].id]={r,n,k:o?(o.k||1)+1:1};}if(S.at){delete S.at}save();
  const nextT=ti!=null&&ti+1<T.length?ti+1:null,pct=Math.round(100*r/n);
  show(`<div class="stack results"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button></div></div>
   <article class="card score">
    <span class="eyebrow">${ti!=null?`סיום נושא ${ti+1} · ${T[ti].title}`:"סיום חזרה מהירה"}</span>
    <div class="score-row">${ring(pct,`<b data-count="${pct}" data-suffix="%">${REDUCED?pct+"%":"0%"}</b>`)}<div><div class="big"><span data-count="${r}">${REDUCED?r:0}</span><small>/${n} נכונות</small></div>
    <p>${r===n?"מצוין, הכל נכון.":r>=n*0.7?"טוב מאוד. מה שטעית בו יחזור בחזרה המהירה, בניסוח אחר.":"כדאי לעבור שוב על הנושא. השאלות שטעית בהן יחזרו בחזרה המהירה."}</p></div></div>
    <div class="row">${nextT!=null?`<button class="primary" id="nx" style="--c:${color(T[nextT])}"><span>לנושא הבא: ${T[nextT].title}</span>${ic("arrowL")}</button>`:""}<button id="hm">לכל הנושאים</button></div>
   </article></div>`,"up");
  app.querySelector("#back").onclick=()=>home("back");app.querySelector("#hm").onclick=()=>home("back");
  const nx=app.querySelector("#nx");if(nx)nx.onclick=()=>topic(nextT,0,"fwd");
  countUp(app);
}
/* Flashcards: front = the term and a prompt, back = the answer and an example.
   "יודע" removes the card from this round, "עוד לא" sends it to the end of the deck. */
function flashcards(only){
  S.cards=S.cards||{};
  let deck=shuffle((only||DECK.map((_,k)=>k)));const total=deck.length,known=new Set(),missed=new Set();let flipped=false;
  const topicOf=c=>T.find(t=>t.id===c.t);
  const step=dir=>{
    if(!deck.length)return cardsDone(total,known,missed);
    const k=deck[0],c=DECK[k],t=topicOf(c),pos=total-deck.length;flipped=false;
    document.body.style.setProperty("--c",t?color(t):"var(--accent)");
    show(`<div class="stack fc-view">${bar("כרטיסיות לימוד",total,pos,`נשארו ${deck.length} · ידעת ${known.size}`)}
     <div class="fc-stage"><button class="fc" id="fc" aria-label="הפיכת הכרטיס" aria-pressed="false">
      <span class="fc-face fc-front"><span class="fc-topic">${t?`נושא ${T.indexOf(t)+1} · ${t.title}`:""}</span><span class="fc-term">${c.f}</span><span class="fc-q">${c.q}</span><span class="fc-hint">${ic("flip")}<span>לחצו כדי להפוך</span></span></span>
      <span class="fc-face fc-back"><span class="fc-topic">${c.f}</span><span class="fc-ans">${c.b}</span>${c.ex?`<span class="fc-ex"><b>דוגמה:</b> ${c.ex}</span>`:""}</span>
     </button></div>
     <div class="fc-actions" aria-live="polite"><p class="fc-tip">נסו לענות בראש, ורק אז הפכו את הכרטיס.</p></div></div>`,dir);
    app.querySelector("#back").onclick=()=>home("back");
    const card=app.querySelector("#fc"),acts=app.querySelector(".fc-actions");
    const flip=()=>{flipped=!flipped;card.classList.toggle("flipped",flipped);card.setAttribute("aria-pressed",flipped);
      if(flipped&&!acts.querySelector(".fc-btns")){acts.innerHTML=`<div class="fc-btns"><button class="fc-no" id="no">${ic("cycle")}<span>עוד לא</span></button><button class="primary fc-yes" id="yes">${ic("check")}<span>ידעתי</span></button></div>`;
        acts.querySelector("#yes").onclick=()=>{known.add(k);S.cards[k]=1;save();deck.shift();step("fwd")};
        acts.querySelector("#no").onclick=()=>{missed.add(k);S.cards[k]=0;save();deck.push(deck.shift());step("fwd")};}};
    card.onclick=flip;
    document.onkeydown=e=>{if(!document.body.contains(card))return document.onkeydown=null;if(e.key===" "||e.key==="Enter"){if(document.activeElement===card||document.activeElement===document.body){e.preventDefault();flip()}}};
  };
  step("up");
}
/* Mind map: one level at a time. The current node sits in the middle, its children around it.
   A branch opens into its own ring; a leaf opens its explanation under the map. */
function mapList(){
  document.body.style.setProperty("--c","var(--accent)");
  show(`<div class="stack"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button></div></div>
   <span class="eyebrow">מפות חשיבה</span><div class="tools">${MAPSET.map((m,k)=>`<button class="tool" data-k="${k}" style="--i:${k}"><span class="ti">${ic("map")}</span><span class="tt"><b>${m.title}</b><small>${m.sub}</small></span></button>`).join("")}</div></div>`,"up");
  app.querySelector("#back").onclick=()=>home("back");
  app.querySelectorAll(".tool").forEach(b=>b.onclick=()=>mindmap(+b.dataset.k));
}
function mindmap(mi,onBack){
  const M=MAPSET[mi],seen=new Set();
  const tint=(n,c)=>{n._c=c;(n.c||[]).forEach(x=>tint(x,c))};
  M.root._c="var(--accent)";M.root.c.forEach((b,k)=>tint(b,`var(--t${k%8+1})`));
  const leaves=n=>n.c?n.c.flatMap(leaves):[n],total=leaves(M.root).length;
  let path=[M.root],sel=null;
  document.body.style.setProperty("--c","var(--accent)");
  show(`<div class="stack mm-view"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>${onBack?"חזרה לנושא":"כל הנושאים"}</span></button><span class="prog" id="mmc">0 מתוך ${total} מושגים</span></div></div>
   <div class="mm-head"><span class="eyebrow">מפת חשיבה</span><h2>${M.title}</h2><p class="muted">לחצו על ענף כדי לפתוח אותו, ועל מושג כדי לקרוא עליו. לחיצה על המרכז חוזרת רמה אחת אחורה.</p></div>
   <nav class="mm-crumbs" id="mmb" aria-label="מיקום במפה"></nav>
   <div class="mm" id="mm"><svg class="mm-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg></div>
   <div class="mm-detail" id="mmd" aria-live="polite"></div></div>`,"up");
  app.querySelector("#back").onclick=onBack||(()=>home("back"));
  const box=app.querySelector("#mm"),svg=box.querySelector("svg"),det=app.querySelector("#mmd"),crumbs=app.querySelector("#mmb");
  const enLine=n=>n.en?`<span class="mm-en" dir="ltr" lang="en">${n.en}</span>`:"";
  const detail=(n,isBranch)=>{
    const sib=path[path.length-1].c||[],k=sib.indexOf(n),next=!isBranch?sib.slice(k+1).find(x=>!x.c):null;
    det.style.setProperty("--c",n._c);
    det.innerHTML=`<div class="mmd-in"><div class="mmd-h"><span class="mmd-dot"></span><div><h3>${n.n}</h3>${enLine(n)}</div></div><div class="mmd-body">${n.d}</div>${n.ex?`<div class="mmd-ex"><b>דוגמה:</b> ${n.ex}</div>`:""}
     ${isBranch?`<p class="mmd-note">${n.c.some(x=>x.c)?`${n.c.length} ענפים. לחצו על ענף כדי לפתוח אותו.`:`${n.c.length} מושגים בענף הזה. לחצו על מושג כדי לקרוא עליו.`}</p>`:next?`<button class="mmd-next">${ic("arrowL")}<span>המושג הבא: ${next.n}</span></button>`:""}</div>`;
    det.classList.remove("show");void det.offsetWidth;det.classList.add("show");
    const nb=det.querySelector(".mmd-next");if(nb)nb.onclick=()=>pick(next);
  };
  const pick=n=>{if(n.c){path.push(n);sel=null;render();detail(n,true);return}
    sel=n;seen.add(n);app.querySelector("#mmc").textContent=`${seen.size} מתוך ${total} מושגים`;
    box.querySelectorAll(".mm-node.kid").forEach(b=>{const on=b._n===n;b.classList.toggle("sel",on);b.setAttribute("aria-pressed",on);if(seen.has(b._n))b.classList.add("seen")});
    detail(n,false);if(det.getBoundingClientRect().top>innerHeight-120)det.scrollIntoView({block:"nearest",behavior:REDUCED?"auto":"smooth"})};
  const render=()=>{
    const cur=path[path.length-1],kids=cur.c||[],n=kids.length;
    crumbs.innerHTML=path.map((p,k)=>k<path.length-1?`<button data-k="${k}">${p.n}</button><span aria-hidden="true">‹</span>`:`<b>${p.n}</b>`).join("");
    crumbs.querySelectorAll("button").forEach(b=>b.onclick=()=>{path=path.slice(0,+b.dataset.k+1);sel=null;render();det.innerHTML=""});
    box.querySelectorAll(".mm-node").forEach(e=>e.remove());
    const wide=box.clientWidth>620,rx=wide?36:34,ry=wide?37:39;
    const pos=kids.map((_,k)=>{const a=(-90+360*k/n)*Math.PI/180;return[50+rx*Math.cos(a),50+ry*Math.sin(a)]});
    svg.innerHTML=pos.map(([x,y],k)=>{const mx=(50+x)/2+(y-50)*.12,my=(50+y)/2-(x-50)*.12;return `<path d="M50 50Q${mx.toFixed(2)} ${my.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)}" pathLength="1" style="--c:${kids[k]._c};--i:${k}"/>`}).join("");
    const ctr=document.createElement("button");ctr.className="mm-node center";ctr.style.setProperty("--c",cur._c);
    ctr.innerHTML=`<span class="mm-n">${cur.n}</span>${enLine(cur)}${path.length>1?`<span class="mm-up">${ic("arrowR")} חזרה</span>`:""}`;
    ctr.setAttribute("aria-label",path.length>1?`${cur.n}, חזרה רמה אחת`:cur.n);
    ctr.onclick=()=>{if(path.length>1){path.pop();sel=null;render();det.innerHTML=""}else detail(cur,true)};
    box.appendChild(ctr);
    kids.forEach((k2,k)=>{const b=document.createElement("button");b._n=k2;
      b.className="mm-node kid "+(k2.c?"branch":"leaf")+(seen.has(k2)?" seen":"");b.style.cssText=`--c:${k2._c};--x:${pos[k][0]}%;--y:${pos[k][1]}%;--i:${k}`;
      b.innerHTML=`<span class="mm-n">${k2.n}</span>${k2.c?`<span class="mm-cnt">${k2.c.length} מושגים</span>`:enLine(k2)}`;
      if(!k2.c)b.setAttribute("aria-pressed","false");
      b.onclick=()=>pick(k2);box.appendChild(b)});
    box.classList.remove("mm-go");void box.offsetWidth;box.classList.add("mm-go");
  };
  render();detail(M.root,true);
}
function cardsDone(total,known,missed){
  document.onkeydown=null;
  const miss=[...missed],n=total-miss.length,pct=Math.round(100*n/total);
  show(`<div class="stack results"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button></div></div>
   <article class="card score">
    <span class="eyebrow">סיום כרטיסיות</span>
    <div class="score-row">${ring(pct,`<b data-count="${pct}" data-suffix="%">${REDUCED?pct+"%":"0%"}</b>`)}<div><div class="big"><span data-count="${n}">${REDUCED?n:0}</span><small>/${total} ידעת בסיבוב הראשון</small></div>
    <p>${miss.length?"כרטיסים שסימנת ״עוד לא״ חזרו לסוף החפיסה עד שידעת אותם. אפשר לעבור עליהם שוב בנפרד.":"מצוין, ידעת את כל הכרטיסים."}</p></div></div>
    <div class="row">${miss.length?`<button class="primary" id="again-miss">${ic("cycle")}<span>שוב רק את ${miss.length} שהתקשיתי בהם</span></button>`:""}<button id="again-all">${ic("cards")}<span>כל הכרטיסים מחדש</span></button><button id="hm">לכל הנושאים</button></div>
   </article></div>`,"up");
  app.querySelector("#back").onclick=()=>home("back");app.querySelector("#hm").onclick=()=>home("back");
  app.querySelector("#again-all").onclick=()=>flashcards();
  const am=app.querySelector("#again-miss");if(am)am.onclick=()=>flashcards(miss);
  countUp(app);
}
function summary(sec){
  document.body.style.setProperty("--c","var(--accent)");
  show(`<div class="stack"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button><span class="prog">סיכום הקריאה</span></div></div>
   <article class="card sum">${acrExpand(SUM)}</article>
   <div class="row"><button class="primary" id="hm">חזרה לכל הנושאים</button></div></div>`,"up");
  app.querySelector("#back").onclick=()=>home("back");app.querySelector("#hm").onclick=()=>home("back");if(sec){const h=[...app.querySelectorAll(".sum h3")].find(x=>x.textContent.trim().startsWith(sec+"."));if(h)h.scrollIntoView()}
}
function absView(){
  document.body.style.setProperty("--c","var(--accent)");
  const tmp=document.createElement("div");tmp.innerHTML=SUM;const a=tmp.querySelector("#abs");
  show(`<div class="stack"><div class="topbar"><div class="topline"><button class="ghost back" id="back">${ic("arrowR")}<span>כל הנושאים</span></button><span class="prog">כותרת ותקציר</span></div></div>
   <article class="card sum"><h2>${CONFIG.title}: כותרת ותקציר</h2><div class="key">לתרגול הזה קוראים <b>רק את הכותרת והתקציר</b>. הסיכום המלא נמצא בכפתור ״סיכום הקריאה״ בלומדה.</div>${a?acrExpand(a.innerHTML):""}</article>
   <div class="row"><button class="primary" id="hm">ללומדה</button><button id="full">לסיכום המלא</button></div></div>`,"up");
  app.querySelector("#back").onclick=()=>home("back");app.querySelector("#hm").onclick=()=>home("back");app.querySelector("#full").onclick=()=>summary();
}
/* Every module gets flashcards and a mind map. A hand-written CARDS or MAPS file wins;
   otherwise both are built from the module's own definitions (tiles, long concept cards, def boxes). */
const strip=h=>{const d=document.createElement("div");d.innerHTML=h;return d.textContent.trim()};
function deriveTerms(){
  return T.flatMap((t,ti)=>t.blocks.map((blk,bi)=>{const d=document.createElement("div");d.innerHTML=blk.html;
    const items=[...d.children].filter(isTerm).flatMap(el=>el.matches(".tiles")?[...el.children]:[el]).map(termItem).filter(x=>strip(x.name));
    return{t,ti,bi,h:blk.h,items}}).filter(b=>b.items.length));
}
function autoCards(blocks){
  const byTopic=T.map(t=>blocks.filter(b=>b.t===t).flatMap(b=>b.items.map(it=>({it,t})))
    .sort((a,b)=>strip(b.it.body).length-strip(a.it.body).length));
  const out=[],used=new Set();
  for(let r=0;out.length<12&&byTopic.some(x=>x.length>r);r++)for(const list of byTopic){if(out.length>=12)break;const x=list[r];if(!x)continue;const key=strip(x.it.name);if(used.has(key))continue;used.add(key);
    const hasEx=/cpt-ex/.test(x.it.body);out.push({t:x.t.id,f:x.it.name,q:hasEx?"מה זה? נסו גם לחשוב על דוגמה":"מה ההגדרה?",b:x.it.body,ex:""})}
  return out;
}
function autoMap(blocks){
  const chunk=(name,items)=>{const leaves=items.map(it=>({n:it.name,en:it.en,d:it.body}));if(leaves.length<=8)return[{n:name,c:leaves}];
    const parts=Math.ceil(leaves.length/7);return Array.from({length:parts},(_,k)=>({n:`${name} (${k+1}/${parts})`,c:leaves.slice(k*7,k*7+7)}))};
  const kids=T.map(t=>{const bs=blocks.filter(b=>b.t===t);if(!bs.length)return null;
    const sub=bs.flatMap(b=>chunk(b.h,b.items));
    const c=sub.length===1?sub[0].c:sub.map(s=>({n:s.n,d:`${s.c.length} מושגים מהקטע ״${s.n}״.`,c:s.c}));
    return{n:t.title,d:`נושא ${T.indexOf(t)+1} בלומדה. ${c.length} ${sub.length===1?"מושגים":"קטעים"} בענף.`,c}}).filter(Boolean);
  if(kids.length<2)return null;
  return{id:"module",title:"מפת הלומדה",sub:"כל הנושאים והמושגים במבט אחד",root:{n:CONFIG.he||CONFIG.title,d:CONFIG.about||"כל הנושאים של הלומדה. לחצו על נושא כדי לפתוח את המושגים שלו.",c:kids}};
}
const TERM_BLOCKS=deriveTerms();
const DECK=typeof CARDS!=="undefined"&&CARDS.length?CARDS:autoCards(TERM_BLOCKS);
const MAPSET=(typeof MAPS!=="undefined"?MAPS:[]).concat([autoMap(TERM_BLOCKS)].filter(Boolean));
const _h=location.hash;if(_h)history.replaceState(null,"",location.pathname+location.search);if(_h==="#abs"&&typeof SUM!=="undefined"&&SUM.includes('id="abs"'))absView();else if(_h.startsWith("#sum")&&typeof SUM!=="undefined")summary(+_h.slice(5)||0);else if(_h.startsWith("#topic-")&&T[+_h.slice(7)-1])topic(+_h.slice(7)-1,0);else if(_h==="#quiz")exam();else if(_h==="#cards"&&DECK.length)flashcards();else if(_h==="#map"&&MAPSET.length)mindmap(0);else if(_h==="#pod"&&CONFIG.podcast){home();const pb=document.querySelector("#pod");if(pb)pb.click()}else home();
