const xt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};xt();function b(){}function $t(t){return t()}function dt(){return Object.create(null)}function Y(t){t.forEach($t)}function kt(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function St(t){return Object.keys(t).length===0}function Mt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Z(t,e,n){t.$$.on_destroy.push(Mt(e,n))}function c(t,e){t.appendChild(e)}function E(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function _(){return v(" ")}function yt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function l(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pt(t,e){t.value=e==null?"":e}function T(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ht(t,e,n){t.classList[n?"add":"remove"](e)}let J;function F(t){J=t}function bt(){if(!J)throw new Error("Function called outside component initialization");return J}function Bt(t){bt().$$.on_mount.push(t)}function At(t){bt().$$.on_destroy.push(t)}const R=[],st=[],Q=[],ot=[],Lt=Promise.resolve();let it=!1;function Et(){it||(it=!0,Lt.then(_t))}function lt(t){Q.push(t)}function Nt(t){ot.push(t)}const rt=new Set;let G=0;function _t(){const t=J;do{for(;G<R.length;){const e=R[G];G++,F(e),Ot(e.$$)}for(F(null),R.length=0,G=0;st.length;)st.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];rt.has(n)||(rt.add(n),n())}Q.length=0}while(R.length);for(;ot.length;)ot.pop()();it=!1,rt.clear(),F(t)}function Ot(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(lt)}}const U=new Set;let jt;function B(t,e){t&&t.i&&(U.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),jt.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Pt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function K(t){t&&t.c()}function A(t,e,n,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:u}=t.$$;o&&o.m(e,n),r||lt(()=>{const f=s.map($t).filter(kt);i?i.push(...f):Y(f),t.$$.on_mount=[]}),u.forEach(lt)}function L(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(R.push(t),Et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,r,o,s,i,u=[-1]){const f=J;F(t);const a=t.$$={fragment:null,ctx:null,props:s,update:b,not_equal:o,bound:dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:dt(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};i&&i(a.root);let p=!1;if(a.ctx=n?n(t,e.props||{},(d,m,...y)=>{const g=y.length?y[0]:m;return a.ctx&&o(a.ctx[d],a.ctx[d]=g)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](g),p&&Tt(t,d)),m}):[],a.update(),p=!0,Y(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const d=Ct(e.target);a.fragment&&a.fragment.l(d),d.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&B(t.$$.fragment),A(t,e.target,e.anchor,e.customElement),_t()}F(f)}class O{$destroy(){L(this,1),this.$destroy=b}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!St(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const q=[];function I(t,e){return{subscribe:Ht(t,e).subscribe}}function Ht(t,e=b){let n;const r=new Set;function o(u){if(M(t,u)&&(t=u,n)){const f=!q.length;for(const a of r)a[1](),q.push(a,t);if(f){for(let a=0;a<q.length;a+=2)q[a][0](q[a+1]);q.length=0}}}function s(u){o(u(t))}function i(u,f=b){const a=[u,f];return r.add(a),r.size===1&&(n=e(o)||b),u(t),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}const Kt=window.Puck;function W(t,e){return t.write(`if(1){${e}}
`)}function qt(t){return new Promise((e,n)=>Kt.connect(r=>{if(!r){n("Failed to connect");return}let o="";r.on("data",s=>{o+=s;const i=o.split(`
`);o=i.pop();for(const u of i)t(u)}),e(r)}))}async function zt(t){return W(t,`
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`)}async function Rt(t){return W(t,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));
    })();
`)}async function Ft(t){return W(t,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));
    })();
`)}async function Jt(t,e){let n=`
    Bangle.setHRMPower(true);
    Bangle.on('HRM', (hrm) => {
      Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
        bpm: hrm.bpm,
        confidence: hrm.confidence
      } }));
    });
  `;return e&&(n+=`setTimeout(() => Bangle.setHRMPower(false), ${e})`),W(t,n)}let z;const X=new Map;function It(t,e){return X.set(t,{handleConnect:t,handleMessage:e}),()=>{X.delete(t)}}function D(t,e,n){return It(e,r=>{r.t===t&&n(r)})}async function Wt(t=[]){(!z||z.isOpen)&&(z=await qt(e=>{let n;try{n=JSON.parse(e)}catch{console.warn("Could not parse message",e);return}console.log("[command]",n);for(const{handleMessage:r}of X.values())r(n)}));for(const{handleConnect:e}of X.values())e(z);for(const e of t)e(z)}const Dt=I([],t=>D("alarms",zt,e=>t(e.alarms))),Vt=I(0,t=>D("temperature",Rt,e=>t(e.temperature))),Gt=I(0,t=>D("steps",Ft,e=>t(e.steps))),Qt=I(0,t=>D("status",()=>{},e=>t(e.bat))),Ut=I({bpm:0,confidence:0},t=>D("hrm",e=>Jt(e,6e4),e=>t(e.hrm)));function Xt(t){let e,n,r,o,s,i,u,f,a,p,d,m,y,g;return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Next Alarm",o=_(),s=h("div"),i=x("svg"),u=x("path"),f=_(),a=h("span"),p=h("span"),d=v(`:\r
        `),m=h("span"),y=v(`:\r
        `),g=h("span"),l(r,"class","card-title"),l(u,"stroke-linecap","round"),l(u,"stroke-linejoin","round"),l(u,"d","M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-6 w-6"),l(i,"fill","none"),l(i,"viewBox","0 0 24 24"),l(i,"stroke","currentColor"),l(i,"stroke-width","2"),T(p,"--value",t[0]),T(m,"--value",t[1]),T(g,"--value",t[2]),l(a,"class","countdown font-mono text-2xl"),l(s,"class","flex gap-2"),l(n,"class","card-body"),l(e,"class","card w-96 bg-base-100 shadow-xl")},m(w,k){E(w,e,k),c(e,n),c(n,r),c(n,o),c(n,s),c(s,i),c(i,u),c(s,f),c(s,a),c(a,p),c(a,d),c(a,m),c(a,y),c(a,g)},p(w,[k]){k&1&&T(p,"--value",w[0]),k&2&&T(m,"--value",w[1]),k&4&&T(g,"--value",w[2])},i:b,o:b,d(w){w&&C(e)}}}function mt(){const t=new Date;return t.getHours()*1e3*60*60+t.getMinutes()*1e3*60+t.getSeconds()*1e3}function Yt(t,e,n){let r,o=0,s=0,i=0;const u=Dt.subscribe(a=>{const p=mt(),m=a.filter(y=>y.on&&y.t>p).sort((y,g)=>y.t-g.t)[0];m?r=m.t:(r=void 0,n(0,o=0),n(1,s=0),n(2,i=0))});let f;return Bt(()=>{(function a(){if(r!==void 0){let p=r-mt();n(0,o=Math.floor(p/36e5)),p=p-o*36e5,n(1,s=Math.floor(p/6e4)),p=p-s*6e4,n(2,i=Math.floor(p/1e3))}f=setTimeout(a,1e3-Date.now()%1e3)})()}),At(()=>{clearTimeout(f),u()}),[o,s,i]}class Zt extends O{constructor(e){super(),N(this,e,Yt,Xt,M,{})}}function te(t){let e,n,r,o,s,i,u,f,a,p;return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Battery",o=_(),s=h("div"),i=x("svg"),u=x("path"),f=_(),a=v(t[0]),p=v("%"),l(r,"class","card-title"),l(u,"stroke-linecap","round"),l(u,"stroke-linejoin","round"),l(u,"d","M13 10V3L4 14h7v7l9-11h-7z"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-6 w-6"),l(i,"fill","none"),l(i,"viewBox","0 0 24 24"),l(i,"stroke","currentColor"),l(i,"stroke-width","2"),l(s,"class","flex gap-2"),l(n,"class","card-body"),l(e,"class","card w-96 bg-base-100 shadow-xl")},m(d,m){E(d,e,m),c(e,n),c(n,r),c(n,o),c(n,s),c(s,i),c(i,u),c(s,f),c(s,a),c(s,p)},p(d,[m]){m&1&&S(a,d[0])},i:b,o:b,d(d){d&&C(e)}}}function ee(t,e,n){let r;return Z(t,Qt,o=>n(0,r=o)),[r]}class ne extends O{constructor(e){super(),N(this,e,ee,te,M,{})}}function re(t){let e,n,r,o,s,i,u,f=t[0].bpm+"",a,p,d=t[0].confidence+"",m,y;return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Heart Rate",o=_(),s=h("div"),i=x("svg"),u=x("path"),a=v(f),p=v(" ("),m=v(d),y=v("%)"),l(r,"class","card-title"),l(u,"stroke-linecap","round"),l(u,"stroke-linejoin","round"),l(u,"d","M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-6 w-6"),l(i,"fill","none"),l(i,"viewBox","0 0 24 24"),l(i,"stroke","currentColor"),l(i,"stroke-width","2"),l(s,"class","flex gap-2"),l(n,"class","card-body"),l(e,"class","card w-96 bg-base-100 shadow-xl")},m(g,w){E(g,e,w),c(e,n),c(n,r),c(n,o),c(n,s),c(s,i),c(i,u),c(s,a),c(s,p),c(s,m),c(s,y)},p(g,[w]){w&1&&f!==(f=g[0].bpm+"")&&S(a,f),w&1&&d!==(d=g[0].confidence+"")&&S(m,d)},i:b,o:b,d(g){g&&C(e)}}}function se(t,e,n){let r;return Z(t,Ut,o=>n(0,r=o)),[r]}class oe extends O{constructor(e){super(),N(this,e,se,re,M,{})}}function ie(t){let e,n,r,o,s,i,u,f;return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Steps",o=_(),s=h("div"),i=x("svg"),u=x("path"),f=v(t[0]),l(r,"class","card-title"),l(u,"stroke-linecap","round"),l(u,"stroke-linejoin","round"),l(u,"d","M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-6 w-6"),l(i,"fill","none"),l(i,"viewBox","0 0 24 24"),l(i,"stroke","currentColor"),l(i,"stroke-width","2"),l(s,"class","flex gap-2"),l(n,"class","card-body"),l(e,"class","card w-96 bg-base-100 shadow-xl")},m(a,p){E(a,e,p),c(e,n),c(n,r),c(n,o),c(n,s),c(s,i),c(i,u),c(s,f)},p(a,[p]){p&1&&S(f,a[0])},i:b,o:b,d(a){a&&C(e)}}}function le(t,e,n){let r;return Z(t,Gt,o=>n(0,r=o)),[r]}class ae extends O{constructor(e){super(),N(this,e,le,ie,M,{})}}function ce(t){let e,n,r,o,s,i,u,f,a=t[0]-6+"",p,d,m,y;return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Temperature",o=_(),s=h("div"),i=x("svg"),u=x("path"),f=x("path"),p=v(a),d=v("\u2103 ("),m=v(t[0]),y=v("\u2103)"),l(r,"class","card-title"),l(u,"stroke-linecap","round"),l(u,"stroke-linejoin","round"),l(u,"d","M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"),l(f,"stroke-linecap","round"),l(f,"stroke-linejoin","round"),l(f,"d","M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"class","h-6 w-6"),l(i,"fill","none"),l(i,"viewBox","0 0 24 24"),l(i,"stroke","currentColor"),l(i,"stroke-width","2"),l(s,"class","flex gap-2"),l(n,"class","card-body"),l(e,"class","card w-96 bg-base-100 shadow-xl")},m(g,w){E(g,e,w),c(e,n),c(n,r),c(n,o),c(n,s),c(s,i),c(i,u),c(i,f),c(s,p),c(s,d),c(s,m),c(s,y)},p(g,[w]){w&1&&a!==(a=g[0]-6+"")&&S(p,a),w&1&&S(m,g[0])},i:b,o:b,d(g){g&&C(e)}}}function ue(t,e,n){let r;return Z(t,Vt,o=>n(0,r=o)),[r]}class fe extends O{constructor(e){super(),N(this,e,ue,ce,M,{})}}async function de(t,e,n){const r=`require('Storage').write('${e}',${n});`;return W(t,r)}function pe(){return new Promise(t=>navigator.geolocation.getCurrentPosition(e=>{t({lat:e.coords.latitude,lon:e.coords.longitude})}))}async function gt(t,e,n,r){const o=await fetch(`https://api.openweathermap.org/data/2.5/${t}?lat=${e}&lon=${n}&units=metric&appid=${r}`);if(!o.ok)throw new Error("Failed to fetch data");return o.json()}function wt(t){return{dt:t.dt*1e3,temp:t.main.temp,weather:t.weather[0].main,icon:t.weather[0].icon}}async function he(t,e){localStorage.setItem("weather-api-key",e);const{lat:n,lon:r}=await pe(),o=await gt("forecast",n,r,e),s=await gt("weather",n,r,e),i=[wt(s),...o.list.map(wt)],u={city:o.city.name,sunrise:o.city.sunrise,sunset:o.city.sunset},f={weather:i,location:u};await de(t,"my-clock-3.app.json",JSON.stringify(f))}function me(t){let e,n,r,o,s,i,u,f,a,p;return{c(){e=h("div"),n=h("div"),r=h("h2"),r.textContent="Weather",o=_(),s=h("div"),i=h("label"),i.innerHTML='<span class="label-text">API Key</span>',u=_(),f=h("input"),l(r,"class","card-title"),l(i,"class","label"),l(f,"class","input input-bordered w-full"),l(f,"type","text"),l(s,"class","form-control"),l(n,"class","card-body"),l(e,"class","card w-96 bg-base-100 shadow-xl")},m(d,m){E(d,e,m),c(e,n),c(n,r),c(n,o),c(n,s),c(s,i),c(s,u),c(s,f),pt(f,t[0]),a||(p=yt(f,"input",t[1]),a=!0)},p(d,[m]){m&1&&f.value!==d[0]&&pt(f,d[0])},i:b,o:b,d(d){d&&C(e),a=!1,p()}}}function ge(t,e,n){let{apiKey:r}=e;function o(){r=this.value,n(0,r)}return t.$$set=s=>{"apiKey"in s&&n(0,r=s.apiKey)},[r,o]}class we extends O{constructor(e){super(),N(this,e,ge,me,M,{apiKey:0})}}function $e(t){let e,n,r,o,s,i,u,f,a,p,d,m,y,g,w,k=t[0]?"Syncing...":"Sync",tt,at,V,et,j,nt,ct;function vt($){t[4]($)}let ut={};return t[1]!==void 0&&(ut.apiKey=t[1]),n=new we({props:ut}),st.push(()=>Pt(n,"apiKey",vt)),s=new Zt({}),u=new fe({}),a=new ae({}),d=new oe({}),y=new ne({}),{c(){e=h("div"),K(n.$$.fragment),o=_(),K(s.$$.fragment),i=_(),K(u.$$.fragment),f=_(),K(a.$$.fragment),p=_(),K(d.$$.fragment),m=_(),K(y.$$.fragment),g=_(),w=h("button"),tt=v(k),at=_(),V=h("div"),et=v(t[2]),l(w,"class","btn btn-primary"),ht(w,"loading",t[0]),l(V,"class","alert"),l(e,"class","flex flex-col justify-center items-center gap-8 p-10")},m($,P){E($,e,P),A(n,e,null),c(e,o),A(s,e,null),c(e,i),A(u,e,null),c(e,f),A(a,e,null),c(e,p),A(d,e,null),c(e,m),A(y,e,null),c(e,g),c(e,w),c(w,tt),c(e,at),c(e,V),c(V,et),j=!0,nt||(ct=yt(w,"click",t[3]),nt=!0)},p($,[P]){const ft={};!r&&P&2&&(r=!0,ft.apiKey=$[1],Nt(()=>r=!1)),n.$set(ft),(!j||P&1)&&k!==(k=$[0]?"Syncing...":"Sync")&&S(tt,k),P&1&&ht(w,"loading",$[0]),(!j||P&4)&&S(et,$[2])},i($){j||(B(n.$$.fragment,$),B(s.$$.fragment,$),B(u.$$.fragment,$),B(a.$$.fragment,$),B(d.$$.fragment,$),B(y.$$.fragment,$),j=!0)},o($){H(n.$$.fragment,$),H(s.$$.fragment,$),H(u.$$.fragment,$),H(a.$$.fragment,$),H(d.$$.fragment,$),H(y.$$.fragment,$),j=!1},d($){$&&C(e),L(n),L(s),L(u),L(a),L(d),L(y),nt=!1,ct()}}}function ye(t,e,n){var f;let r=!1,o=(f=localStorage.getItem("weather-api-key"))!=null?f:"",s="Ready";async function i(){Wt([async a=>{n(0,r=!0);try{await he(a,o),n(2,s="Success.")}catch{n(2,s="Failed.")}finally{n(0,r=!1)}}])}function u(a){o=a,n(1,o)}return[r,o,s,i,u]}class be extends O{constructor(e){super(),N(this,e,ye,$e,M,{})}}new be({target:document.getElementById("app")});
