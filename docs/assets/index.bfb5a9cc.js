const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};D();function b(){}function F(t){return t()}function C(){return Object.create(null)}function x(t){t.forEach(F)}function G(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function p(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function k(){return V(" ")}function N(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function I(t,e){t.value=e==null?"":e}let P;function w(t){P=t}const $=[],T=[],E=[],B=[],Y=Promise.resolve();let L=!1;function Z(){L||(L=!0,Y.then(W))}function O(t){E.push(t)}const A=new Set;let v=0;function W(){const t=P;do{for(;v<$.length;){const e=$[v];v++,w(e),tt(e.$$)}for(w(null),$.length=0,v=0;T.length;)T.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];A.has(n)||(A.add(n),n())}E.length=0}while($.length);for(;B.length;)B.pop()();L=!1,A.clear(),w(t)}function tt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const S=new Set;let et;function q(t,e){t&&t.i&&(S.delete(t),t.i(e))}function nt(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),et.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function rt(t){t&&t.c()}function H(t,e,n,r){const{fragment:o,on_mount:i,on_destroy:l,after_update:h}=t.$$;o&&o.m(e,n),r||O(()=>{const s=i.map(F).filter(G);l?l.push(...s):x(s),t.$$.on_mount=[]}),h.forEach(O)}function J(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&($.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,r,o,i,l,h=[-1]){const s=P;w(t);const a=t.$$={fragment:null,ctx:null,props:i,update:b,not_equal:o,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:C(),dirty:h,skip_bound:!1,root:e.target||s.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(c,g,...y)=>{const f=y.length?y[0]:g;return a.ctx&&o(a.ctx[c],a.ctx[c]=f)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](f),u&&ot(t,c)),g}):[],a.update(),u=!0,x(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const c=X(e.target);a.fragment&&a.fragment.l(c),c.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&q(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),W()}w(s)}class z{$destroy(){J(this,1),this.$destroy=b}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function it(t){let e,n,r,o,i,l,h,s,a,u,c,g,y;return{c(){e=_("div"),n=_("div"),r=_("h2"),r.textContent="Weather",o=k(),i=_("div"),l=_("label"),l.innerHTML='<span class="label-text">API Key</span>',h=k(),s=_("input"),a=k(),u=_("div"),c=_("button"),c.textContent="Upload",m(r,"class","card-title"),m(l,"class","label"),m(s,"class","input input-bordered w-full"),m(s,"type","text"),m(i,"class","form-control"),m(c,"class","btn"),m(u,"class","card-actions"),m(n,"class","card-body"),m(e,"class","card w-96 bg-base-100 shadow-xl")},m(f,d){R(f,e,d),p(e,n),p(n,r),p(n,o),p(n,i),p(i,l),p(i,h),p(i,s),I(s,t[0]),p(n,a),p(n,u),p(u,c),g||(y=[N(s,"input",t[2]),N(c,"click",t[1])],g=!0)},p(f,[d]){d&1&&s.value!==f[0]&&I(s,f[0])},i:b,o:b,d(f){f&&M(e),g=!1,x(y)}}}function at(t,e){return new Promise(n=>Puck.write(`require('Storage').write('${t}',atob("${btoa(e)}"));
`,n))}function st(t,e,n){var h;let r=(h=localStorage.getItem("weather-api-key"))!=null?h:"";async function o(){const s=document.getElementById("alert");try{await i(),s.innerText="Successfull uploaded weather data"}catch(a){s.innerText="Failed to upload weather data",console.error(a)}}async function i(){localStorage.setItem("weather-api-key",r);const{lat:s,lon:a}=await new Promise(d=>navigator.geolocation.getCurrentPosition(j=>{d({lat:j.coords.latitude,lon:j.coords.longitude})})),u=await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${s}&lon=${a}&units=metric&appid=${r}`)).json(),c=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${s}&lon=${a}&units=metric&appid=${r}`)).json(),g=[{dt:c.dt*1e3,temp:c.main.temp,weather:c.weather[0].main,icon:c.weather[0].icon},...u.list.map(d=>({dt:d.dt*1e3,temp:d.main.temp,weather:d.weather[0].main,icon:d.weather[0].icon}))],y={city:u.city.name,sunrise:u.city.sunrise,sunset:u.city.sunset},f={weather:g,location:y};await at("my-clock-3.app.json",JSON.stringify(f))}function l(){r=this.value,n(0,r)}return[r,o,l]}class ct extends z{constructor(e){super(),U(this,e,st,it,K,{})}}function lt(t){let e,n;return e=new ct({}),{c(){rt(e.$$.fragment)},m(r,o){H(e,r,o),n=!0},p:b,i(r){n||(q(e.$$.fragment,r),n=!0)},o(r){nt(e.$$.fragment,r),n=!1},d(r){J(e,r)}}}class ut extends z{constructor(e){super(),U(this,e,null,lt,K,{})}}new ut({target:document.getElementById("app")});
