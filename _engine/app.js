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
const topicPct=t=>Math.round(100*t.qids.filter(mastered).length/t.qids.length);
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

function qCard(id,onDone,label){
  const vi=pickVariant(id),v=Q[id].v[vi],opts=shuffle([v.a,...v.w]);
  const box=document.createElement("div");box.className="q fade";
  box.innerHTML=(label?`<span class="eyebrow">${label}</span>`:"")+`<div class="qtext">${esc(v.q)}</div>${acrNote(v.q,v.a,...v.w)}<div class="opts"></div>`;
  const wrap=box.querySelector(".opts");
  opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt";b.dataset.a=o===v.a?"1":"";
    b.innerHTML=`<span class="k">${LET[k]}</span><span>${esc(o)}</span>`;
    b.onclick=()=>{const ok=o===v.a,s=st(id);s.n++;s.t=Date.now();s.lv=vi;ok?s.c++:(s.c=0,s.w++);save();
      wrap.querySelectorAll("button").forEach(x=>{x.disabled=true;if(x.dataset.a)x.classList.add("right")});
      if(!ok)b.classList.add("wrong");
      const fb=document.createElement("div");fb.className="fb fade "+(ok?"ok":"no");
      fb.innerHTML=`${ic(ok?"check":"x")}<div><strong>${ok?"נכון!":"לא בדיוק"}</strong>${esc(v.e)}</div>`;box.appendChild(fb);
      const nx=document.createElement("button");nx.className="primary";nx.textContent="המשך";nx.style.alignSelf="flex-start";
      nx.onclick=()=>onDone(ok);box.appendChild(nx);nx.focus({preventScroll:true});nx.scrollIntoView({block:"nearest",behavior:"smooth"});
    };wrap.appendChild(b)});
  return box;
}

function home(){
  document.body.style.removeProperty("--c");if(S.at){delete S.at;save()}
  const started=T.filter(topicStarted);
  const total=Math.round(T.reduce((a,t)=>a+strength(t)*t.qids.length,0)/allIds.length);
  const weak=allIds.filter(id=>S.q[id]&&S.q[id].n&&!mastered(id)).length;
  app.innerHTML=`<div class="stack fade">
   <section class="cover" style="--c:var(--accent)">
    <div class="cover-art">${FIG[CONFIG.cover]()}</div>
    <div class="cover-body">
     <span class="eyebrow">${CONFIG.eyebrow}</span>
     ${CONFIG.badge?`<span class="badge">${CONFIG.badge}</span>`:""}<h1>לומדת חובת קריאה: ${CONFIG.en?`<span dir="ltr" lang="en" class="entitle">${CONFIG.title}</span>`:CONFIG.title}</h1>${CONFIG.en&&CONFIG.he?`<p class="hetitle">${CONFIG.he}</p>`:""}${CONFIG.cite?`<p class="cite" dir="ltr">${CONFIG.cite}</p>`:""}
     <p class="muted">קוראים קטע קצר, עונים על שאלה, ממשיכים. בסוף כל נושא יש מבחן קצר, ובסוף הלומדה מבחן מסכם עם ציון.${HAS_H?" מהסבב השני, המבחנים עוברים לשאלות הבנה: מקרים וסיפורים שצריך לזהות לאיזה רעיון הם שייכים.":""}</p>
     <div class="stats">
      <div class="ring" style="--p:${total}"><span>${total}%</span></div>
      <div class="stat-text"><b>${total===0&&!started.length?"עוד לא התחלת":total>=80?"אתה שולט בחומר":`התקדמת ב־${total}% מהשאלות`}</b><span class="muted">${weak?`${weak} שאלות מחכות לחיזוק`:"שאלות שתטעה בהן יחזרו כאן"}</span></div>
     </div>
     <div class="actions">
      <button class="primary review-btn" id="rev" ${started.length?"":"disabled"}>${ic("cycle")}<span>${started.length?"חזרה מהירה":"חזרה מהירה (אחרי נושא ראשון)"}</span></button>
      <button class="review-btn" id="exm">${ic("grad")}<span>מבחן מסכם${S.exam&&HAS_H?" · סבב "+((S.exam.k||1)+1)+": שאלות הבנה":""}${S.exam?` · ציון אחרון ${S.exam.pct}`:""}</span></button>
      <button class="review-btn" id="wk" ${started.length?"":"disabled"}>${ic("target")}<span>נושאים לחיזוק</span></button>
      ${typeof SUM!=="undefined"?`<button class="review-btn" id="sum">${ic("doc")}<span>סיכום הקריאה</span></button>`:""}
     </div>
    </div>
   </section>
   <div class="grid" id="list"></div>
   <div class="foot"><span>${CONFIG.note}</span><button class="ghost" id="reset">איפוס התקדמות</button></div>
  </div>`;
  app.querySelectorAll(".actions svg").forEach(x=>x.style.cssText="width:20px;height:20px");
  const list=app.querySelector("#list");
  T.forEach((t,i)=>{const p=strength(t),pos=S.pos[t.id],dn=S.done[t.id],b=document.createElement("button");b.className="tcard";b.style.setProperty("--c",color(t));
    const status=dn?`✓ הושלם · מבחן ${dn.r}/${dn.n}${t.hids.length?" · הבא: סבב "+rnd(t)+" (הבנה)":""}`:pos!=null?`באמצע · קטע ${pos+1} מתוך ${t.blocks.length}`:S.read[t.id]?"✓ נקרא":topicStarted(t)?"בתהליך":"לא התחלת";
    b.innerHTML=`<div class="band"><span class="n">${i+1}</span>${ic(dn?"check":t.icon)}</div><div class="body"><span class="t">${t.title}</span><div style="flex:1"></div><div class="bar"><i style="width:${dn&&!p?100*dn.r/dn.n:p}%"></i></div><div class="meta"><span>${status}</span><span>${t.blocks.length} קטעים · ${p}%</span></div></div>`;
    if(dn)b.classList.add("done");
    b.onclick=()=>topic(i,pos!=null?pos:0);list.appendChild(b)});
  app.querySelector("#rev").onclick=review;{const sb=app.querySelector("#sum");if(sb)sb.onclick=summary}app.querySelector("#exm").onclick=exam;app.querySelector("#wk").onclick=weakTopics;
  const rs=app.querySelector("#reset");rs.onclick=()=>{if(rs.dataset.sure){S={q:{},read:{},pos:{},done:{}};save();home()}else{rs.dataset.sure=1;rs.textContent="לחץ שוב כדי לאפס"}};
  scrollTo(0,0);
}

function bar(title,n,i,label){
  return `<div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button><span class="prog">${label}</span></div><div class="steps">${Array.from({length:n},(_,k)=>`<i class="${k<=i?"on":""}"></i>`).join("")}</div></div><span class="eyebrow">${title}</span>`;
}

function topic(ti,bi){
  const t=T[ti],blk=t.blocks[bi];document.body.style.setProperty("--c",color(t));
  app.innerHTML=`<div class="stack">${bar(`נושא ${ti+1} · ${t.title}`,t.blocks.length+1,bi,`קטע ${bi+1} מתוך ${t.blocks.length}`)}
   <article class="card fade"><h3>${blk.h}</h3>${acrExpand(blk.html)}</article><div id="slot"></div></div>`;
  S.pos[t.id]=bi;S.at={ti,bi};save();
  app.querySelector("#back").onclick=home;
  const next=()=>{if(bi+1<t.blocks.length)topic(ti,bi+1);else{S.read[t.id]=1;delete S.pos[t.id];S.at={ti,quiz:1};save();quiz(ti)}};
  if(bi>0){const pb=document.createElement("button");pb.className="ghost";pb.textContent="→ הקטע הקודם";pb.style.marginTop="6px";pb.onclick=()=>topic(ti,bi-1);setTimeout(()=>slot.appendChild(pb))}
  const slot=app.querySelector("#slot");
  {const b=document.createElement("button");b.className="primary";b.textContent=bi+1<t.blocks.length?"המשך":`למבחן הנושא (${t.qids.length} שאלות)`;b.onclick=next;slot.appendChild(b)}
  scrollTo(0,0);
}

function runSet(title,ids,c,onEnd){
  let i=0,right=0;document.body.style.setProperty("--c",c);
  const step=()=>{
    if(i>=ids.length)return onEnd(right,ids.length);
    const id=ids[i],from=T.find(t=>t.id===Q[id].t);
    app.innerHTML=`<div class="stack">${bar(title,ids.length,i,`שאלה ${i+1} מתוך ${ids.length}`)}<div id="slot"></div></div>`;
    app.querySelector("#back").onclick=home;
    const card=qCard(id,ok=>{if(ok)right++;i++;step()},from.title);card.style.setProperty("--c",color(from));
    app.querySelector("#slot").appendChild(card);scrollTo(0,0);
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

const strength=t=>Math.round(100*t.qids.filter(id=>S.q[id]&&S.q[id].n&&S.q[id].c>0).length/t.qids.length);

function practice(ti){const t=T[ti];if(hardOn(t))return quiz(ti);runSet(`תרגול · ${t.title}`,shuffle(t.qids),color(t),(r,n)=>done(r,n,ti))}

function exam(){
  const N=Math.min(allIds.length,Math.max(15,Math.min(20,T.length*3)));
  const xh=S.exam&&HAS_H,pools=T.map(t=>xh&&t.hids.length?shuffle(t.hids).concat(shuffle(t.qids)):shuffle(t.qids)),ids=[];
  for(let k=0;ids.length<N;k++)for(const p of pools){if(ids.length>=N)break;if(k<p.length)ids.push(p[k])}
  const items=shuffle(ids).map(id=>{const vi=pickVariant(id),v=Q[id].v[vi];return{id,vi,v,opts:shuffle([v.a,...v.w]),pick:null}});
  document.body.style.setProperty("--c","var(--accent)");
  let i=0;
  const step=()=>{
    const it=items[i],from=T.find(t=>t.id===Q[it.id].t),last=i===items.length-1;
    app.innerHTML=`<div class="stack">${bar(xh?`מבחן מסכם · סבב ${(S.exam.k||1)+1} · שאלות הבנה`:"מבחן מסכם",items.length,i,`שאלה ${i+1} מתוך ${items.length}`)}
     <div class="q fade"><span class="eyebrow">${esc(from.title)}</span><div class="qtext">${esc(it.v.q)}</div>${acrNote(it.v.q,it.v.a,...it.v.w)}<div class="opts"></div>
     <div class="row"><button class="primary" id="nx" ${it.pick==null?"disabled":""}>${last?"הגשה ובדיקה":"הבא"}</button>${i?`<button class="ghost" id="pv">הקודם</button>`:""}</div></div></div>`;
    {const bk=app.querySelector("#back");bk.onclick=()=>{if(bk.dataset.sure)home();else{bk.dataset.sure=1;bk.textContent="לחץ שוב כדי לצאת (התשובות לא יישמרו)"}}}
    const wrap=app.querySelector(".opts"),nx=app.querySelector("#nx");
    it.opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt"+(it.pick===o?" sel":"");
      b.innerHTML=`<span class="k">${LET[k]}</span><span>${esc(o)}</span>`;
      b.onclick=()=>{it.pick=o;wrap.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");nx.disabled=false};
      wrap.appendChild(b)});
    nx.onclick=()=>{if(last)grade(items);else{i++;step()}};
    const pv=app.querySelector("#pv");if(pv)pv.onclick=()=>{i--;step()};
    scrollTo(0,0);
  };step();
}

function grade(items){
  const now=Date.now();let r=0;const per={};
  items.forEach(it=>{const ok=it.pick===it.v.a,s=st(it.id),tid=Q[it.id].t;s.n++;s.t=now;s.lv=it.vi;ok?(s.c++,r++):(s.c=0,s.w++);
    it.ok=ok;(per[tid]=per[tid]||{r:0,n:0}).n++;if(ok)per[tid].r++});
  const n=items.length,pct=Math.round(100*r/n);S.exam={pct,t:now,k:S.exam?(S.exam.k||1)+1:1};save();
  const rows=T.filter(t=>per[t.id]).map(t=>{const p=per[t.id],q=Math.round(100*p.r/p.n);
    return `<div class="trow" style="--c:${color(t)}"><span class="tt">${esc(t.title)}</span><div class="bar"><i style="width:${q}%"></i></div><span class="sc">${p.r}/${p.n}</span></div>`}).join("");
  const wrong=items.filter(it=>!it.ok);
  app.innerHTML=`<div class="stack fade"><div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button></div></div>
   <article class="card" style="align-items:flex-start">
    <span class="eyebrow">ציון המבחן המסכם</span>
    <div class="row" style="gap:18px"><div class="ring" style="--p:${pct}"><span>${pct}</span></div><div class="big">${r}/${n}</div></div>
    <p>${pct>=90?"מצוין, אתה שולט בחומר.":pct>=70?"טוב. עבור על הטעויות למטה וחזור על הנושאים החלשים.":"כדאי לחזור על החומר. למטה תמצא את הטעויות, ולכל אחת כפתור לחזרה על הנושא."}</p>
    <h3>לפי נושא</h3><div class="trows">${rows}</div>
    <div class="row"><button class="primary" id="again">מבחן מסכם חדש</button><button id="hm">לכל הנושאים</button></div>
   </article>
   ${wrong.length?`<h3>הטעויות שלך (${wrong.length})</h3>`:`<p class="muted">לא היו טעויות.</p>`}
   <div class="stack" id="wl"></div></div>`;
  const wl=app.querySelector("#wl");
  wrong.forEach(it=>{const ti=T.findIndex(t=>t.id===Q[it.id].t),t=T[ti],c=document.createElement("article");c.className="card rev";c.style.setProperty("--c",color(t));
    c.innerHTML=`<span class="eyebrow">${esc(t.title)}</span><div class="qtext">${esc(it.v.q)}</div>${acrNote(it.v.q,it.v.a,it.pick,it.v.e)}
     <div class="opt wrong" aria-disabled="true"><span class="k">${ic("x")}</span><span><b>התשובה שלך:</b> ${esc(it.pick)}</span></div>
     <div class="opt right" aria-disabled="true"><span class="k">${ic("check")}</span><span><b>התשובה הנכונה:</b> ${esc(it.v.a)}</span></div>
     <div class="fb no">${ic("bulb")}<div><strong>למה?</strong>${esc(it.v.e)}</div></div>
     <div class="row"><button class="primary go">חזרה על הנושא: ${esc(t.title)}</button></div>`;
    c.querySelector(".go").onclick=()=>topic(ti,0);wl.appendChild(c)});
  app.querySelector("#back").onclick=home;app.querySelector("#hm").onclick=home;app.querySelector("#again").onclick=exam;
  scrollTo(0,0);
}

function weakTopics(){
  document.body.style.setProperty("--c","var(--accent)");
  const list=T.map((t,i)=>({t,i,s:strength(t),started:topicStarted(t)})).sort((a,b)=>(a.started-b.started)||(a.s-b.s));
  const lab=x=>!x.started?"עוד לא תרגלת":x.s>=80?"חזק":x.s>=50?"בינוני":"צריך חיזוק";
  app.innerHTML=`<div class="stack fade"><div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button></div></div>
   <span class="eyebrow">נושאים לחיזוק</span><p class="muted">הנושאים מסודרים מהחלש לחזק, לפי התשובות האחרונות שלך בכל שאלה.</p>
   <div class="stack" id="wl"></div></div>`;
  const wl=app.querySelector("#wl");
  list.forEach(x=>{const c=document.createElement("article");c.className="card rev";c.style.setProperty("--c",color(x.t));
    c.innerHTML=`<div class="trow"><span class="tt">${x.i+1}. ${esc(x.t.title)}</span><div class="bar"><i style="width:${x.s}%"></i></div><span class="sc">${x.started?x.s+"%":"—"}</span></div>
     <span class="tag ${!x.started?"":x.s>=80?"good":x.s>=50?"mid":"low"}">${lab(x)}</span>
     <div class="row"><button class="primary pr">תרגול שאלות הנושא</button><button class="rd">קריאה חוזרת</button></div>`;
    c.querySelector(".pr").onclick=()=>practice(x.i);c.querySelector(".rd").onclick=()=>topic(x.i,0);wl.appendChild(c)});
  app.querySelector("#back").onclick=home;scrollTo(0,0);
}

function done(r,n,ti){
  if(ti!=null){const o=S.done[T[ti].id];S.done[T[ti].id]={r,n,k:o?(o.k||1)+1:1};}if(S.at){delete S.at}save();
  const nextT=ti!=null&&ti+1<T.length?ti+1:null,pct=Math.round(100*r/n);
  app.innerHTML=`<div class="stack fade"><div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button></div></div>
   <article class="card" style="align-items:flex-start">
    <span class="eyebrow">${ti!=null?`סיום נושא ${ti+1} · ${T[ti].title}`:"סיום חזרה מהירה"}</span>
    <div class="row" style="gap:18px"><div class="ring" style="--p:${pct};--accent:var(--c)"><span>${pct}%</span></div><div class="big">${r}/${n}</div></div>
    <p>${r===n?"מצוין, הכל נכון.":r>=n*0.7?"טוב מאוד. מה שטעית בו יחזור בחזרה המהירה, בניסוח אחר.":"כדאי לעבור שוב על הנושא. השאלות שטעית בהן יחזרו בחזרה המהירה."}</p>
    <div class="row">${nextT!=null?`<button class="primary" id="nx" style="--c:${color(T[nextT])}">לנושא הבא: ${T[nextT].title}</button>`:""}<button id="hm">לכל הנושאים</button></div>
   </article></div>`;
  app.querySelector("#back").onclick=home;app.querySelector("#hm").onclick=home;
  const nx=app.querySelector("#nx");if(nx)nx.onclick=()=>topic(nextT,0);
  scrollTo(0,0);
}
function summary(sec){
  document.body.style.setProperty("--c","var(--accent)");
  app.innerHTML=`<div class="stack fade"><div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button><span class="prog">סיכום הקריאה</span></div></div>
   <article class="card sum">${acrExpand(SUM)}</article>
   <div class="row"><button class="primary" id="hm">חזרה לכל הנושאים</button></div></div>`;
  app.querySelector("#back").onclick=home;app.querySelector("#hm").onclick=home;scrollTo(0,0);if(sec){const h=[...app.querySelectorAll(".sum h3")].find(x=>x.textContent.trim().startsWith(sec+"."));if(h)h.scrollIntoView()}
}
function absView(){
  document.body.style.setProperty("--c","var(--accent)");
  const tmp=document.createElement("div");tmp.innerHTML=SUM;const a=tmp.querySelector("#abs");
  app.innerHTML=`<div class="stack fade"><div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button><span class="prog">כותרת ותקציר</span></div></div>
   <article class="card sum"><h2>${CONFIG.title}: כותרת ותקציר</h2><div class="key">לתרגול הזה קוראים <b>רק את הכותרת והתקציר</b>. זה מה שיש בעמוד הזה. הסיכום המלא של המאמר נמצא בכפתור ״סיכום הקריאה״ בלומדה.</div>${a?acrExpand(a.innerHTML):""}</article>
   <div class="row"><button class="primary" id="hm">ללומדה</button><button id="full">לסיכום המלא</button></div></div>`;
  app.querySelector("#back").onclick=home;app.querySelector("#hm").onclick=home;app.querySelector("#full").onclick=()=>summary();scrollTo(0,0);
}
const _h=location.hash;if(_h)history.replaceState(null,"",location.pathname+location.search);if(_h==="#abs"&&typeof SUM!=="undefined"&&SUM.includes('id="abs"'))absView();else if(_h.startsWith("#sum")&&typeof SUM!=="undefined")summary(+_h.slice(5)||0);else if(_h.startsWith("#topic-")&&T[+_h.slice(7)-1])topic(+_h.slice(7)-1,0);else if(_h==="#quiz")exam();else if(S.at&&T[S.at.ti]){const a=S.at;if(a.quiz)quiz(a.ti);else topic(a.ti,Math.min(a.bi||0,T[a.ti].blocks.length-1))}else home();
