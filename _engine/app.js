for(const t of T) t.qids=Object.keys(Q).filter(k=>Q[k].t===t.id);
const KEY=CONFIG.key;
let S={q:{},read:{}};
try{const s=JSON.parse(localStorage.getItem(KEY)||"null"); if(s&&s.q) S=s;}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
const st=id=>S.q[id]||(S.q[id]={n:0,c:0,w:0,t:0,lv:-1});
const mastered=id=>(S.q[id]?.c||0)>=2;
const topicPct=t=>Math.round(100*t.qids.filter(mastered).length/t.qids.length);
const topicStarted=t=>S.read[t.id]||t.qids.some(id=>S.q[id]&&S.q[id].n);
const allIds=Object.keys(Q);
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const pickVariant=id=>{const s=st(id),n=Q[id].v.length;return n>1?(s.lv+1)%n:0};
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const color=t=>`var(--${t.id})`;
const app=document.getElementById("app");
const LET=["א","ב","ג","ד"];

function qCard(id,onDone,label){
  const vi=pickVariant(id),v=Q[id].v[vi],opts=shuffle([v.a,...v.w]);
  const box=document.createElement("div");box.className="q fade";
  box.innerHTML=(label?`<span class="eyebrow">${label}</span>`:"")+`<div class="qtext">${esc(v.q)}</div><div class="opts"></div>`;
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
  document.body.style.removeProperty("--c");
  const started=T.filter(topicStarted);
  const total=Math.round(100*allIds.filter(mastered).length/allIds.length);
  const weak=allIds.filter(id=>S.q[id]&&S.q[id].n&&!mastered(id)).length;
  app.innerHTML=`<div class="stack fade">
   <section class="cover" style="--c:var(--accent)">
    <div class="cover-art">${FIG[CONFIG.cover]()}</div>
    <div class="cover-body">
     <span class="eyebrow">${CONFIG.eyebrow}</span>
     ${CONFIG.badge?`<span class="badge">${CONFIG.badge}</span>`:""}<h1>לומדת חובת קריאה: ${CONFIG.en?`<span dir="ltr" lang="en" class="entitle">${CONFIG.title}</span>`:CONFIG.title}</h1>${CONFIG.en&&CONFIG.he?`<p class="hetitle">${CONFIG.he}</p>`:""}${CONFIG.cite?`<p class="cite" dir="ltr">${CONFIG.cite}</p>`:""}
     <p class="muted">קוראים קטע קצר, עונים על שאלה, ממשיכים. בסוף כל נושא יש מבחן קצר עם שאלות גם מנושאים קודמים.</p>
     <div class="stats">
      <div class="ring" style="--p:${total}"><span>${total}%</span></div>
      <div class="stat-text"><b>${total===0?"עוד לא התחלת":total>=80?"אתה שולט בחומר":"בדרך"}</b><span class="muted">${weak?`${weak} שאלות מחכות לחיזוק`:"שאלות שתטעה בהן יחזרו כאן"}</span></div>
      <button class="primary review-btn" id="rev" ${started.length?"":"disabled"}>${ic("cycle")}<span>${started.length?"חזרה מהירה":"חזרה מהירה (אחרי נושא ראשון)"}</span></button>
     </div>
    </div>
   </section>
   <div class="grid" id="list"></div>
   <div class="foot"><span>${CONFIG.note}</span><button class="ghost" id="reset">איפוס התקדמות</button></div>
  </div>`;
  document.querySelector("#rev svg").style.cssText="width:20px;height:20px";
  const list=app.querySelector("#list");
  T.forEach((t,i)=>{const p=topicPct(t),b=document.createElement("button");b.className="tcard";b.style.setProperty("--c",color(t));
    const status=!topicStarted(t)?"לא התחלת":p>=80?"שולט":"בתהליך";
    b.innerHTML=`<div class="band"><span class="n">${i+1}</span>${ic(t.icon)}</div><div class="body"><span class="t">${t.title}</span><div style="flex:1"></div><div class="bar"><i style="width:${p}%"></i></div><div class="meta"><span>${status}</span><span>${t.blocks.length} קטעים · ${p}%</span></div></div>`;
    b.onclick=()=>topic(i,0);list.appendChild(b)});
  app.querySelector("#rev").onclick=review;
  const rs=app.querySelector("#reset");rs.onclick=()=>{if(rs.dataset.sure){S={q:{},read:{}};save();home()}else{rs.dataset.sure=1;rs.textContent="לחץ שוב כדי לאפס"}};
  scrollTo(0,0);
}

function bar(title,n,i,label){
  return `<div class="topbar"><div class="topline"><button class="ghost" id="back">→ כל הנושאים</button><span class="prog">${label}</span></div><div class="steps">${Array.from({length:n},(_,k)=>`<i class="${k<=i?"on":""}"></i>`).join("")}</div></div><span class="eyebrow">${title}</span>`;
}

function topic(ti,bi){
  const t=T[ti],blk=t.blocks[bi];document.body.style.setProperty("--c",color(t));
  app.innerHTML=`<div class="stack">${bar(`נושא ${ti+1} · ${t.title}`,t.blocks.length+1,bi,`קטע ${bi+1} מתוך ${t.blocks.length}`)}
   <article class="card fade"><h3>${blk.h}</h3>${blk.html}</article><div id="slot"></div></div>`;
  app.querySelector("#back").onclick=home;
  const next=()=>{if(bi+1<t.blocks.length)topic(ti,bi+1);else{S.read[t.id]=1;save();quiz(ti)}};
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
  const prev=T.slice(0,ti).filter(topicStarted).flatMap(x=>x.qids);
  const extra=shuffle(prev).sort((a,b)=>st(a).c-st(b).c).slice(0,2);
  runSet(`מבחן סיום · ${t.title}`,shuffle(t.qids).concat(extra),color(t),(r,n)=>done(r,n,ti));
}

function review(){
  const pool=T.filter(topicStarted).flatMap(t=>t.qids),now=Date.now();
  const score=id=>{const s=S.q[id]||{n:0,c:0,w:0,t:0};return (s.n?0:2)+s.w*2+(s.c<2?3:0)+Math.min(3,(now-s.t)/864e5)+Math.random()*2};
  const ids=pool.map(id=>[id,score(id)]).sort((a,b)=>b[1]-a[1]).slice(0,12).map(x=>x[0]);
  runSet("חזרה מהירה",shuffle(ids),"var(--accent)",(r,n)=>done(r,n,null));
}

function done(r,n,ti){
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
home();
