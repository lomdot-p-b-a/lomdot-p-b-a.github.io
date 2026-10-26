const E=t=>`<span class="en">(${t})</span>`;
const fig=(k,cap)=>`<figure class="fig">${FIG[k]()}${cap?`<figcaption>${cap}</figcaption>`:""}</figure>`;
const def=(l,h)=>`<div class="def"><span class="lbl">${l}</span><p>${h}</p></div>`;
const who=(a,n,y,h)=>`<div class="who"><span class="av">${a}</span><div><b>${n}</b> <span class="yr">${y}</span><p>${h}</p></div></div>`;
const tiles=a=>`<div class="tiles">${a.map(([i,t,d])=>`<div class="tile">${ic(i)}<b>${t}</b><span>${d}</span></div>`).join("")}</div>`;
const ex=h=>`<div class="ex"><span class="lbl">דוגמה</span><p>${h}</p></div>`;
const rem=h=>`<div class="remember">${ic("bulb")}<p>${h}</p></div>`;
const yn=(y,n)=>`<div class="yesno">${y.map(t=>`<span class="yn y">${ic("check")}${t}</span>`).join("")}${n.map(t=>`<span class="yn n">${ic("x")}${t}</span>`).join("")}</div>`;
const spectrum=(r,l,dot)=>`<div class="spectrum"><div class="track">${dot?'<span class="dot"></span>':""}</div><div class="ends"><span>${r}</span><span>${l}</span></div></div>`;
document.head.insertAdjacentHTML("beforeend",'<style>.yn svg{width:16px;height:16px}</style>');

