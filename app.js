/* 《龍生九子》世界觀頁：共用渲染與互動。各語言檔只提供資料 T。 */
(function(){
const T=window.T, U=T.ui;
const LANGS=[['index.html','中','zh-Hant'],['ko.html','한','ko'],['ja.html','日','ja'],['en.html','EN','en']];
const PV='XE005UXBNCU';
const CDN='https://cdn.caveduck.io/cdn-cgi/image/f=auto,';
const narr=a=>`<div class="narr">${a.map(x=>x[0]==='!'?`<p class="q">${x.slice(1)}</p>`:`<p>${x}</p>`).join('')}</div>`;
const head=c=>`<div class="ch-no">${c.no}</div><h2>${c.h}</h2>`;
const more=(sum,html,attr='')=>`<details class="more"${attr}><summary>${sum}</summary><div class="more-in">${html}</div></details>`;
const slip=(h,l)=>h?`<div class="slip${l?' l':''}" style="--c:${h[1]}${l?';--r:2deg':''}"><b>${h[0]}</b>${h[2]}</div><div class="clr"></div>`:'';
const plate=(src,alt,cap,w,h,extra='')=>`<figure class="plate"${extra}><img src="${src}" alt="${alt}" loading="lazy"${w?` width="${w}" height="${h}"`:''}>${cap?`<figcaption><b>${cap[0]}</b>${cap[1]}</figcaption>`:''}</figure>`;
const strip=x=>String(x).replace(/<rt>.*?<\/rt>/g,'').replace(/<[^>]+>/g,'');

const H=[];
/* 語言切換 */
H.push(`<div class="langs">${LANGS.map(l=>`<a href="${l[0]}" hreflang="${l[2]}" class="${T.lang===l[2]?'on':''}">${l[1]}</a>`).join('')}</div>`);
/* 開場 */
H.push(`<section id="gate"><div class="g-bg"></div><div class="g-in"><div class="g-sub">${T.gate.sub}</div><div class="g-title">${T.gate.title}</div><div class="g-sub2">${T.gate.sub2}</div><div class="g-btns"><button class="g-btn" id="enter">${U.enter}</button><button class="g-btn ghost" data-pv>▶ ${U.pvFirst}</button></div></div></section>`);
H.push(`<div id="pv" role="dialog"><div class="box"><div class="frame"><iframe id="pvf" title="PV" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><div class="row"><a href="https://youtu.be/${PV}" target="_blank" rel="noopener">${U.pvFail}</a><button class="g-btn" id="pvclose">${U.close}</button></div></div></div>`);
H.push(`<aside class="lamps">${T.LAMPS.map(l=>`<a href="#${l[0]}" data-k="${l[0]}"><i></i><span>${l[1]}</span></a>`).join('')}</aside>`);
const ids=['prologue','ch1','ch2','ch3','ch4','ch5','ch6','epilogue'];
H.push(`<nav class="toc"><ul>${U.nav.map((n,i)=>`<li><a href="#${ids[i]}">${n}</a></li>`).join('')}<li><button class="pvbtn" data-pv>▶ PV</button></li></ul></nav><div class="huiwen"></div><main>`);

/* 序章 */
const hs=[['fanli-box','fanli',40.1,18.6,10.7,25.6],['ch1','ch1',21.2,26.7,18.7,17.8],['ch4','ch4',64.3,20.7,16.1,23.8],['ch3','ch3',36.2,46.3,31.3,20.8],['ch5','ch5',67.9,48.7,14.3,18],['epilogue','loan',11.5,43,5.4,11.8],['ch6','ch6',63.2,69.7,17,17.8],['ch2','ch2',37.2,76,24.7,14.4]];
const P=T.pro;
H.push(`<section class="ch" id="prologue"><div class="plate shelfpic"><img src="img/library.webp" alt="${U.shelfAlt}" width="1216" height="832">
${hs.map(h=>`<a class="hot" href="#${h[0]}"${h[1]==='fanli'?' data-fanli':''} style="left:${h[2]}%;top:${h[3]}%;width:${h[4]}%;height:${h[5]}%"><i></i><span>${U.hot[h[1]]}</span></a>`).join('')}
<span class="hot hid" id="hstack" role="button" tabindex="-1" aria-label="${U.stackAria}" style="left:18.9%;top:71.9%;width:15.6%;height:14.9%"></span></div>
<p class="shelf-tip">${U.shelfTip}</p>
<div class="ch-card">${head(P)}${narr(P.narr)}${more(P.sum,`<ol class="fl">${P.fanli.map(x=>`<li>${x}</li>`).join('')}</ol>${P.slips}`,' id="fanli-box"')}</div></section>`);

/* 第一章 */
const C1=T.ch1;
H.push(`<section class="ch" id="ch1"><figure class="plate"><video id="flood" src="img/flood.mp4" poster="img/flood-poster.webp" muted playsinline preload="metadata" width="1280" height="702"></video></figure>
<div class="ch-card">${head(C1)}${narr(C1.narr)}</div>
<div style="margin-top:2.6rem">${plate('img/ch-pact.webp',C1.cap[0],C1.cap,1280,704)}</div>
<div class="ch-card" style="margin-top:1.2rem">${more(C1.sum,C1.more,' style="margin-top:0;border-top:none"')}</div></section>`);

/* 第二章 */
const C2=T.ch2;
H.push(`<section class="ch" id="ch2">${plate('img/ch-zutang.webp',C2.h,null,1280,704)}<div class="ch-card">${head(C2)}${narr(C2.narr)}${more(C2.sum,C2.more)}</div></section>`);

/* 第三章 */
const C3=T.ch3, L=T.L;
H.push(`<section class="ch" id="ch3"><div class="ch-card" style="margin-top:0">${head(C3)}${narr(C3.narr)}${more(C3.sum,C3.more)}</div><div class="sons">
${T.SONS.map(s=>`<article class="son" style="--c:${s.c}">
 <figure class="plate"><img src="img/${s.img}.webp" alt="${strip(s.dragon)}" loading="lazy" width="1216" height="832">
  <figcaption><div class="son-tag"><span class="num">${s.k}</span><span class="nm">${s.dragon}　${s.name}<small>${s.rank}・${s.gift}</small></span></div><div class="son-line">${s.line}</div></figcaption></figure>
 <div class="son-more">${more(L.more,`<div class="son-grid"><img class="por" src="${CDN}w=400/charim-standard/${s.por}" alt="${strip(s.name)}" loading="lazy">
  <dl class="spec"><dt>${L.form}</dt><dd>${s.form}</dd><dt>${L.len}</dt><dd>${s.len}</dd><dt>${L.pow}</dt><dd>${s.pow}</dd><dt>${L.lim}</dt><dd>${s.lim}</dd><dt>${L.off}</dt><dd>${s.off}</dd></dl></div>
  <div class="ledger"><h5>${L.led}</h5><ul>${s.led.map(x=>`<li>${x}</li>`).join('')}</ul></div>${slip(s.note)}`)}</div>
</article>`).join('')}</div></section>`);

/* 第四章 */
const C4=T.ch4;
H.push(`<section class="ch" id="ch4">${plate(CDN+'w=1200/charim/819491b4-c4c1-420b-9745-4986998329cf?v=a38536',C4.h)}
<div class="ch-card">${head(C4)}${narr(C4.narr)}</div>
<div class="scenes">${['sc-tianjing','sc-qinshi','sc-guanfeng'].map((f,i)=>plate(`img/${f}.webp`,C4.scenes[i][0],C4.scenes[i],1216,832)).join('')}</div>
<div class="ch-card" style="margin-top:1.6rem;width:min(1000px,100%)">${more(C4.sum,`${C4.intro}<div class="map-wrap"><div id="mapbox"></div><div><div class="map-panel" id="mapPanel" aria-live="polite"></div><p style="font-size:.8rem;color:var(--ochre);margin:.3rem 0 0">${U.mapTip}</p></div></div>${C4.rules}`,' style="margin-top:0;border-top:none"')}</div></section>`);

/* 第五章 */
const C5=T.ch5;
H.push(`<section class="ch" id="ch5"><div class="ch-card" style="margin-top:0">${head(C5)}${narr(C5.narr)}</div><div class="tl">
${T.DAYS.map(d=>`<div class="day"><div class="d"><b>${d.d}</b><small>${d.s}</small></div><div class="c"><p class="ev">${d.ev}</p>
 ${d.img?`<figure class="plate"><img src="img/${d.img[0]}.webp" alt="${d.img[1]}" loading="lazy" width="1216" height="832"></figure>`:''}
 ${d.who.length?`<div class="who">${d.who.map(w=>`<details class="${w.f?'fei':''}"><summary>${w.n}</summary><div class="mingtie" style="--c:${w.h?w.h[1]:'#2b1a12'}"><div class="a">${w.a}</div><p>${w.d}</p>${w.k?`<p><span class="k">${L.know}</span>${w.k}</p>`:''}${w.m?`<p><span class="k">${L.memo}</span>${w.m}</p>`:''}${w.g?`<p><span class="k">${L.gift}</span>${w.g}</p>`:''}${w.h?`<div class="hn" style="--c:${w.h[1]}"><b>${w.h[0]}</b>${w.h[2]}</div>`:''}</div></details>`).join('')}</div>`:''}
</div></div>`).join('')}</div></section>`);

/* 第六章 */
const C6=T.ch6;
H.push(`<section class="ch" id="ch6">${plate('img/sc-relics.webp',C6.h,null,1280,704)}<div class="ch-card">${head(C6)}${narr(C6.narr)}${more(C6.sum,`<p class="anyu">${C6.anyu}</p><div class="reg">${T.RELICS.map(r=>`<div class="regcard"><div class="no">${r[0]}</div><div class="pm">${r[1]}</div><dl><dt>${L.loc}</dt><dd>${r[2]}</dd><dt>${L.limit}</dt><dd>${r[3]}</dd></dl></div>`).join('')}</div>`)}</div></section>`);

/* 尾聲 */
const E=T.epi;
H.push(`<section class="ch" id="epilogue"><div class="ch-card" style="margin-top:0">${head(E)}${narr(E.narr)}
<div class="loan"><div class="row hd">${T.LOAN[0].map(h=>`<div>${h}</div>`).join('')}</div>${T.LOAN.slice(1).map(r=>`<div class="row"><div class="w" style="--c:${r[1]}">${r[0]}</div><div>${r[2]}</div><div class="rm">${r[3]}</div></div>`).join('')}</div>
<div class="unlisted"><span>${U.unlisted}</span><span class="seal" id="hseal" role="button" tabindex="0" aria-label="${U.sealAria}">${U.seal}</span></div></div></section>`);

/* 未編目 */
const X=T.secret;
H.push(`<section id="hidden" aria-hidden="true"><div class="warn" id="warnBox"><p>${X.warn}</p><button class="g-btn" id="openSecret">${X.open}</button></div>
<div id="secret"><h2>❖ ${X.h} ❖</h2><div class="sub">${X.sub}</div><p class="anyu">${X.intro}</p>
${X.items.map(i=>`<div class="src">${i[0]}</div><h3>${i[1]}</h3>${i[2]}`).join('')}<p class="anyu" style="margin-top:1.6rem">${X.outro}</p></div></section>`);

H.push(`</main><div class="huiwen"></div><footer id="end"><div class="hook">${U.done}</div><small>${U.footer}</small></footer>`);
document.body.insertAdjacentHTML('afterbegin',H.join('\n'));
document.querySelector('#gate .g-bg').style.backgroundImage=`url('${CDN}w=1200/charim/8fd3fd0f-4045-405a-bbc8-6aa8072833b6?v=6d16c0')`;

/* 輿圖 */
(function(){
  const M=T.MAP,Tl=M.labels;
  const g=(k,shape,texts)=>`<g class="zone" data-k="${k}" tabindex="0">${shape}${texts}</g>`;
  const t=(x,y,s,c)=>s?`<text ${c?'class="s" ':''}x="${x}" y="${y}">${s}</text>`:'';
  document.getElementById('mapbox').innerHTML=`<svg viewBox="0 0 600 760" role="img" aria-label="${C4.h}">
   <defs><pattern id="hill" width="24" height="12" patternUnits="userSpaceOnUse"><path d="M0 12 Q6 2 12 12 T24 12" fill="none" stroke="#4f9a8c" stroke-width="1" opacity=".55"/></pattern></defs>
   <rect x="8" y="8" width="584" height="744" fill="none" stroke="#c9a24a" stroke-width="3"/><rect x="16" y="16" width="568" height="728" fill="none" stroke="#1d5b5c"/>
   <text x="560" y="44" font-size="14" fill="#9c5a2e" text-anchor="middle">${M.north}</text><path d="M560 50 L560 80" stroke="#9c5a2e" stroke-width="1.5"/>
   <rect x="40" y="178" width="520" height="520" fill="none" stroke="#9c5a2e" stroke-width="2" stroke-dasharray="7 4"/>
   ${g('hou','<path d="M30 165 Q120 40 220 110 Q300 30 380 100 Q470 30 570 165 Z" style="fill:url(#hill)"/><path d="M30 165 Q120 40 220 110 Q300 30 380 100 Q470 30 570 165 Z"/><circle cx="300" cy="92" r="16"/>',t(300,142,Tl.hou[0]))}
   ${g('bei','<rect x="56" y="196" width="140" height="110"/>',t(126,240,Tl.bei[0])+t(126,264,Tl.bei[1])+t(126,290,Tl.bei[2],1))}
   ${g('zu','<rect x="216" y="196" width="168" height="110"/>',t(300,246,Tl.zu[0])+t(300,272,Tl.zu[1],1))}
   ${g('shen','<rect x="404" y="196" width="140" height="110"/>',t(474,246,Tl.shen[0])+t(474,272,Tl.shen[1],1))}
   ${g('xi','<rect x="56" y="326" width="140" height="190"/>',t(126,410,Tl.xi[0])+t(126,436,Tl.xi[1],1))}
   ${g('zhu','<rect x="216" y="326" width="168" height="190"/><rect x="262" y="380" width="76" height="76" style="fill:rgba(169,211,197,.5)"/>',t(300,358,Tl.zhu[0])+t(300,423,Tl.zhu[1],1)+t(300,496,Tl.zhu[2],1))}
   ${g('dong','<rect x="404" y="326" width="140" height="190"/>',t(474,410,Tl.dong[0])+t(474,436,Tl.dong[1],1))}
   ${g('hq','<rect x="56" y="536" width="140" height="70"/>',t(126,578,Tl.hq[0]))}
   ${g('ting','<rect x="216" y="536" width="168" height="70"/>',t(300,578,Tl.ting[0]))}
   ${g('chu','<rect x="404" y="536" width="140" height="70"/>',t(474,578,Tl.chu[0]))}
   ${g('men','<rect x="150" y="626" width="300" height="60"/>',t(300,663,Tl.men[0]))}
   <path d="M300 686 L300 740" stroke="#9c5a2e" stroke-width="2" stroke-dasharray="4 4"/><text x="300" y="736" font-size="11" fill="#9c5a2e" text-anchor="middle">${M.road}</text></svg>`;
  const panel=document.getElementById('mapPanel'),zones=document.querySelectorAll('.zone');
  function show(k){const d=M.zones[k];zones.forEach(z=>z.classList.toggle('on',z.dataset.k===k));
    panel.innerHTML=`<h4>${d.t}</h4><div class="era">${d.e}</div>${d.p.map(x=>`<p>${x}</p>`).join('')}${d.r?`<div class="rooms">${d.r}</div>`:''}`}
  zones.forEach(z=>{z.onclick=()=>show(z.dataset.k);z.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(z.dataset.k)}}});
  show('bei');
})();

/* 開場、PV */
const gate=document.getElementById('gate');
document.getElementById('enter').onclick=()=>{gate.classList.add('gone');document.body.classList.remove('locked');document.body.classList.add('in')};
if(location.hash){gate.classList.add('gone');document.body.classList.remove('locked');document.body.classList.add('in')}
const pv=document.getElementById('pv'),f=document.getElementById('pvf');
document.querySelectorAll('[data-pv]').forEach(b=>b.onclick=()=>{f.src=`https://www.youtube-nocookie.com/embed/${PV}?autoplay=1&rel=0`;pv.classList.add('show')});
const closePV=()=>{pv.classList.remove('show');f.src=''};
document.getElementById('pvclose').onclick=closePV;pv.onclick=e=>{if(e.target===pv)closePV()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePV()});
document.querySelector('[data-fanli]').addEventListener('click',()=>{document.getElementById('fanli-box').open=true});
/* 切換語言時保留目前位置 */
document.querySelectorAll('.langs a').forEach(a=>a.addEventListener('click',e=>{
  const secs=[...document.querySelectorAll('main .ch')];let cur='';
  secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});
  if(cur&&gate.classList.contains('gone')){e.preventDefault();location.href=a.getAttribute('href')+'#'+cur}
}));

/* 旁白浮現、影片 */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.25});
document.querySelectorAll('.narr').forEach(n=>io.observe(n));
const v=document.getElementById('flood');let played=false;
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!played){played=true;v.play().catch(()=>{v.controls=true})}}),{threshold:.5}).observe(v);

/* 九盞燈 */
const links=[...document.querySelectorAll('.lamps a')];
const done=document.createElement('div');done.className='lamp-done';done.textContent=U.done;document.body.appendChild(done);
let fired=false;
function check(){
  const vh=innerHeight;
  links.forEach(a=>{const el=document.getElementById(a.dataset.k);if(!el)return;const r=el.getBoundingClientRect();if(r.top<vh*.7||innerHeight+scrollY>=document.documentElement.scrollHeight-8)a.classList.add('lit')});
  if(!fired&&links.every(a=>a.classList.contains('lit'))){fired=true;document.body.classList.add('alllit');done.classList.add('show');setTimeout(()=>done.classList.remove('show'),4200)}
}
addEventListener('scroll',check,{passive:true});addEventListener('resize',check);

/* 未編目 */
const hid=document.getElementById('hidden');
function reveal(){hid.classList.add('show');hid.setAttribute('aria-hidden','false');setTimeout(()=>hid.scrollIntoView({behavior:'smooth'}),50)}
function triple(el,cls){let n=0,tm;const hit=()=>{n++;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);clearTimeout(tm);tm=setTimeout(()=>n=0,1500);if(n>=3){n=0;reveal()}};
  el.addEventListener('click',hit);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();hit()}})}
triple(document.getElementById('hstack'),'wig');triple(document.getElementById('hseal'),'shake');
document.getElementById('openSecret').onclick=()=>{document.getElementById('warnBox').style.display='none';document.getElementById('secret').classList.add('show')};
})();
