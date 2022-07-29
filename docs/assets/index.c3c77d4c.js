const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};Ae();function _(){}function Se(e){return e()}function he(){return Object.create(null)}function J(e){e.forEach(Se)}function ke(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Re(e){return Object.keys(e).length===0}function Oe(e,...t){if(e==null)return _;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function z(e,t,n){e.$$.on_destroy.push(Oe(t,n))}function p(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function T(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function O(e){return document.createTextNode(e)}function S(){return O(" ")}function ue(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function me(e,t){e.value=t==null?"":t}function I(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function ge(e,t,n){e.classList[n?"add":"remove"](t)}let V;function Q(e){V=e}function Ce(){if(!V)throw new Error("Function called outside component initialization");return V}function Me(e){Ce().$$.on_mount.push(e)}function De(e){Ce().$$.on_destroy.push(e)}const X=[],ve=[],te=[],we=[],Ie=Promise.resolve();let fe=!1;function je(){fe||(fe=!0,Ie.then(Pe))}function de(e){te.push(e)}const ce=new Set;let ee=0;function Pe(){const e=V;do{for(;ee<X.length;){const t=X[ee];ee++,Q(t),We(t.$$)}for(Q(null),X.length=0,ee=0;ve.length;)ve.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];ce.has(n)||(ce.add(n),n())}te.length=0}while(X.length);for(;we.length;)we.pop()();fe=!1,ce.clear(),Q(e)}function We(e){if(e.fragment!==null){e.update(),J(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}const ne=new Set;let qe;function E(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function j(e,t,n,r){if(e&&e.o){if(ne.has(e))return;ne.add(e),qe.c.push(()=>{ne.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function W(e){e&&e.c()}function N(e,t,n,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:c}=e.$$;s&&s.m(t,n),r||de(()=>{const l=o.map(Se).filter(ke);i?i.push(...l):J(l),e.$$.on_mount=[]}),c.forEach(de)}function A(e,t){const n=e.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function He(e,t){e.$$.dirty[0]===-1&&(X.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(e,t,n,r,s,o,i,c=[-1]){const l=V;Q(e);const u=e.$$={fragment:null,ctx:null,props:o,update:_,not_equal:s,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:he(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};i&&i(u.root);let f=!1;if(u.ctx=n?n(e,t.props||{},(d,h,...m)=>{const g=m.length?m[0]:h;return u.ctx&&s(u.ctx[d],u.ctx[d]=g)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](g),f&&He(e,d)),h}):[],u.update(),f=!0,J(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const d=Le(t.target);u.fragment&&u.fragment.l(d),d.forEach(k)}else u.fragment&&u.fragment.c();t.intro&&E(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Pe()}Q(l)}class M{$destroy(){A(this,1),this.$destroy=_}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];function Je(e,t){return{subscribe:Te(e,t).subscribe}}function Te(e,t=_){let n;const r=new Set;function s(c){if(B(e,c)&&(e=c,n)){const l=!q.length;for(const u of r)u[1](),q.push(u,e);if(l){for(let u=0;u<q.length;u+=2)q[u][0](q[u+1]);q.length=0}}}function o(c){s(c(e))}function i(c,l=_){const u=[c,l];return r.add(u),r.size===1&&(n=t(s)||_),c(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:i}}function D(e,t,n){const r=!Array.isArray(e),s=r?[e]:e,o=t.length<2;return Je(n,i=>{let c=!1;const l=[];let u=0,f=_;const d=()=>{if(u)return;f();const m=t(r?l[0]:l,i);o?i(m):f=ke(m)?m:_},h=s.map((m,g)=>Oe(m,b=>{l[g]=b,u&=~(1<<g),c&&d()},()=>{u|=1<<g}));return c=!0,d(),function(){J(h),f()}})}var H,re=[];function Be(){if(navigator.platform.indexOf("Win")>=0&&(navigator.userAgent.indexOf("Chrome/54")>=0||navigator.userAgent.indexOf("Chrome/55")>=0||navigator.userAgent.indexOf("Chrome/56")>=0))return console.warn("Chrome <56 in Windows has navigator.bluetooth but it's not implemented properly"),confirm(`Web Bluetooth on Windows is not yet available.
Please click Ok to see other options for using Web Bluetooth`)&&(window.location="https://www.espruino.com/Puck.js+Quick+Start"),!1;if(navigator.bluetooth)return!0;console.warn("No Web Bluetooth on this platform");var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return e?confirm(`To use Web Bluetooth on iOS you'll need the WebBLE App.
Please click Ok to go to the App Store and download it.`)&&(window.location="https://itunes.apple.com/us/app/webble/id1193531073"):confirm(`This Web Browser doesn't support Web Bluetooth.
Please click Ok to see instructions for enabling it.`)&&(window.location="https://www.espruino.com/Quick+Start+BLE#with-web-bluetooth"),!1}var ae="6e400001-b5a3-f393-e0a9-e50e24dcca9e",ze="6e400002-b5a3-f393-e0a9-e50e24dcca9e",Fe="6e400003-b5a3-f393-e0a9-e50e24dcca9e",be=20;function $(e,t){Z.log&&Z.log(e,t)}function Ue(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function Xe(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0,s=e.length;r<s;r++)n[r]=e.charCodeAt(r);return t}function ye(){if(!!re.length){var e=re.shift();$(3,"Executing "+JSON.stringify(e)+" from queue"),e.type=="write"?Z.write(e.data,e.callback,e.callbackNewline):$(1,"Unknown queue item "+JSON.stringify(e))}}function Ee(e,t){if(!!Be()){var n={on:function(f,d){this["on"+f]=d},emit:function(f,d){this["on"+f]&&this["on"+f](d)},isOpen:!1,isOpening:!0,txInProgress:!1},r=void 0,s,o,i,c=[],l=!1,u=be;return n.close=function(){n.isOpening=!1,n.isOpen?(n.isOpen=!1,n.emit("close")):e&&e(null),r&&(r.disconnect(),r=void 0,o=void 0,i=void 0,u=be)},n.write=function(f,d){f&&c.push({data:f,callback:d,maxLength:f.length}),n.isOpen&&!n.txInProgress&&h();function h(){if(l){setTimeout(h,50);return}var m;if(!!c.length){var g=c[0];Z.writeProgress(g.maxLength-g.data.length,g.maxLength),g.data.length<=u?(m=g.data,g.data=void 0):(m=g.data.substr(0,u),g.data=g.data.substr(u)),n.txInProgress=!0,$(2,"Sending "+JSON.stringify(m)),o.writeValue(Xe(m)).then(function(){$(3,"Sent"),g.data||(c.shift(),g.callback&&g.callback()),n.txInProgress=!1,h()}).catch(function(b){$(1,"SEND ERROR: "+b),c=[],n.close()})}}},navigator.bluetooth.requestDevice({filters:[{namePrefix:"Puck.js"},{namePrefix:"Pixl.js"},{namePrefix:"MDBT42Q"},{namePrefix:"RuuviTag"},{namePrefix:"iTracker"},{namePrefix:"Thingy"},{namePrefix:"Espruino"},{services:[ae]}],optionalServices:[ae]}).then(function(f){$(1,"Device Name:       "+f.name),$(1,"Device ID:         "+f.id),f.addEventListener("gattserverdisconnected",function(){$(1,"Disconnected (gattserverdisconnected)"),t&&t(),n.close()}),n.device=f,n.reconnect(e)}).catch(function(f){$(1,"ERROR: "+f),n.close()}),n.reconnect=function(f){n.device.gatt.connect().then(function(d){return $(1,"Connected"),r=d,d.getPrimaryService(ae)}).then(function(d){return $(2,"Got service"),s=d,s.getCharacteristic(Fe)}).then(function(d){return i=d,$(2,"RX characteristic:"+JSON.stringify(i)),i.addEventListener("characteristicvaluechanged",function(h){var m=h.target.value,g=Ue(m.buffer);g.length>u&&($(2,"Received packet of length "+g.length+", increasing chunk size"),u=g.length);for(var b=0;b<g.length;b++){var y=g.charCodeAt(b),P=!0;y==19?($(2,"XOFF received => pause upload"),l=!0):y==17?($(2,"XON received => resume upload"),l=!1):P=!1,P&&(g=g.substr(0,b-1)+g.substr(b+1),b--)}$(3,"Received "+JSON.stringify(g)),n.emit("data",g)}),i.startNotifications()}).then(function(){return s.getCharacteristic(ze)}).then(function(d){o=d,$(2,"TX characteristic:"+JSON.stringify(o))}).then(function(){n.txInProgress=!1,n.isOpen=!0,n.isOpening=!1,H=!1,re=[],f(n),n.emit("open"),n.write()}).catch(function(d){$(1,"ERROR: "+d),n.close()})},n}}var w;function le(e,t,n){if(!Be())return;let r;if(typeof t!="function"&&(n=t,r=new Promise((i,c)=>t=(l,u)=>{u?c(u):i(l)})),H)return $(3,"Busy - adding Puck.write to queue"),re.push({type:"write",data:e,callback:t,callbackNewline:n}),r;var s;function o(){n&&(w.cb=function(u){var f=w.received.indexOf(`
`);if(f>=0){var d=w.received.substr(0,f);w.received=w.received.substr(f+1),w.cb=void 0,s&&clearTimeout(s),s=void 0,t&&t(d),H=!1,ye()}});var i=300,c=n?100:3,l=c;s=setTimeout(function u(){s=void 0,i&&i--,l&&l--,w.hadData&&(l=c),l&&i?s=setTimeout(u,100):(w.cb=void 0,t&&t(w.received),H=!1,ye(),w.received=""),w.hadData=!1},100)}return w&&(w.isOpen||w.isOpening)?(w.txInProgress||(w.received=""),H=!0,w.write(e,o),r):(w=Ee(function(i){if(!i){w=void 0,t&&t(null);return}w.received="",w.on("data",function(c){w.received+=c,w.hadData=!0,w.cb&&w.cb(c)}),w.on("close",function(c){w=void 0}),H=!0,w.write(e,o)}),r)}const Z={debug:1,increaseMTU:!0,flowControl:!0,log:function(e,t){e<=this.debug&&console.log("<BLE> "+t)},writeProgress:function(e,t){},connect:Ee,write:le,eval:function(e,t){const n=le("Bluetooth.println(JSON.stringify("+e+`))
`,!0).then(function(r){try{return JSON.parse(r)}catch(s){return $(1,"Unable to decode "+JSON.stringify(r)+", got "+s.toString()),Promise.reject(r)}});return t?void n.then(t,r=>t(null,r)):n},setTime:function(e){var t=new Date,n="setTime("+t.getTime()/1e3+");";n+="if (E.setTimeZone) E.setTimeZone("+t.getTimezoneOffset()/-60+`);
`,le(n,e)},isConnected:function(){return w!==void 0},getConnection:function(){return w},close:function(){w&&w.close()},modal:function(e){var t=document.createElement("div");t.style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;opacity:0.5;z-index:100;background:black;",t.innerHTML='<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family: Sans-Serif;font-size:400%;color:white;">Click to Continue...</div>',t.onclick=function(n){e(),n.preventDefault(),document.body.removeChild(t)},document.body.appendChild(t)}};function F(e,t){return new Promise(n=>e.write(`if(1){${t}}
`,n))}async function Qe(e,t,n){const r=`require('Storage').write('${t}',${n});`;return F(e,r)}function Ve(e,t){return new Promise((n,r)=>Z.connect(s=>{if(!s){r("Failed to connect");return}let o="";s.on("data",i=>{o+=i;const c=o.split(`
`);o=c.pop();for(const l of c)e(l)}),n(s)},t))}function Ze(){const{subscribe:e,update:t}=Te([!1,{}]);return{connection:void 0,subscribe:e,async connect({triggers:n,polls:r}){this.connection=await Ve(o=>{let i;try{i=JSON.parse(o)}catch{console.warn("Could not parse message",o);return}console.log("[command]",i),t(([c,l])=>[c,{...l,[i.t]:i}])},()=>{t(([,o])=>[!1,o])});const s=async()=>{var o;if(!!((o=this.connection)!=null&&o.isOpen)){for(const i of r)await i(this.connection);this.timeout=setTimeout(s,10*1e3)}};s(),t(([,o])=>[!0,o]);for(const o of n)await o(this.connection)},async disconnect(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0);for(const r of n)await r(this.connection);this.connection&&(this.connection.close(),this.connection=void 0),t(([,r])=>[!1,r])},toggle(n,r){return this.connection?this.disconnect(r):this.connect(n)}}}const K=Ze(),G=D(K,([,e])=>e),Ne=D(K,([e])=>e),Ke=D(G,e=>{var t,n;return(n=(t=e.alarms)==null?void 0:t.alarms)!=null?n:[]}),Ge=D(G,e=>{var t;return(t=e.temperature)==null?void 0:t.temperature}),Ye=D(G,e=>{var t;return(t=e.steps)==null?void 0:t.steps}),et=D(G,e=>{var t;return(t=e.status)==null?void 0:t.bat}),tt=D(G,e=>{var t;return(t=e.hrm)==null?void 0:t.hrm});function nt(e){let t,n,r,s,o,i,c,l,u=(e[0]===void 0?"-":e[0])+"",f,d;return{c(){t=v("div"),n=v("div"),r=v("h2"),r.textContent="Battery",s=S(),o=v("div"),i=T("svg"),c=T("path"),l=S(),f=O(u),d=O("%"),a(r,"class","card-title"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"d","M13 10V3L4 14h7v7l9-11h-7z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-yellow-300"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(o,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(h,m){C(h,t,m),p(t,n),p(n,r),p(n,s),p(n,o),p(o,i),p(i,c),p(o,l),p(o,f),p(o,d)},p(h,[m]){m&1&&u!==(u=(h[0]===void 0?"-":h[0])+"")&&R(f,u)},i:_,o:_,d(h){h&&k(t)}}}function rt(e,t,n){let r;return z(e,et,s=>n(0,r=s)),[r]}class it extends M{constructor(t){super(),L(this,t,rt,nt,B,{})}}function ot(e){let t;return{c(){t=O("-")},m(n,r){C(n,t,r)},p:_,d(n){n&&k(t)}}}function st(e){let t=e[0].bpm+"",n,r,s=e[0].confidence+"",o,i;return{c(){n=O(t),r=O(" ("),o=O(s),i=O("%)")},m(c,l){C(c,n,l),C(c,r,l),C(c,o,l),C(c,i,l)},p(c,l){l&1&&t!==(t=c[0].bpm+"")&&R(n,t),l&1&&s!==(s=c[0].confidence+"")&&R(o,s)},d(c){c&&k(n),c&&k(r),c&&k(o),c&&k(i)}}}function ct(e){let t,n,r,s,o,i,c,l;function u(h,m){return h[0]!==void 0?st:ot}let f=u(e),d=f(e);return{c(){t=v("div"),n=v("div"),r=v("h2"),r.textContent="Heart Rate",s=S(),o=v("div"),i=T("svg"),c=T("path"),l=S(),d.c(),a(r,"class","card-title"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"d","M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-red-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(o,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(h,m){C(h,t,m),p(t,n),p(n,r),p(n,s),p(n,o),p(o,i),p(i,c),p(o,l),d.m(o,null)},p(h,[m]){f===(f=u(h))&&d?d.p(h,m):(d.d(1),d=f(h),d&&(d.c(),d.m(o,null)))},i:_,o:_,d(h){h&&k(t),d.d()}}}function at(e,t,n){let r;return z(e,tt,s=>n(0,r=s)),[r]}class lt extends M{constructor(t){super(),L(this,t,at,ct,B,{})}}async function ut(e){return F(e,`
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`)}async function ft(e){return F(e,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));
    })();
`)}async function dt(e){return F(e,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));
    })();
`)}async function pt(e,t=void 0){let n=`
    Bangle.setHRMPower(true);
    Bangle.on('HRM', (hrm) => {
      Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
        bpm: hrm.bpm,
        confidence: hrm.confidence
      } }));
    });
  `;return t&&(n+=`setTimeout(() => Bangle.setHRMPower(false), ${t})`),F(e,n)}async function ht(e){return F(e,"Bangle.setHRMPower(false);")}function mt(e){let t,n,r,s,o,i,c,l,u,f,d,h,m,g;return{c(){t=v("div"),n=v("div"),r=v("h2"),r.textContent="Next Alarm",s=S(),o=v("div"),i=T("svg"),c=T("path"),l=S(),u=v("span"),f=v("span"),d=O(`:\r
        `),h=v("span"),m=O(`:\r
        `),g=v("span"),a(r,"class","card-title"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"d","M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-blue-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),I(f,"--value",e[0]),I(h,"--value",e[1]),I(g,"--value",e[2]),a(u,"class","countdown font-mono text-2xl"),a(o,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(b,y){C(b,t,y),p(t,n),p(n,r),p(n,s),p(n,o),p(o,i),p(i,c),p(o,l),p(o,u),p(u,f),p(u,d),p(u,h),p(u,m),p(u,g)},p(b,[y]){y&1&&I(f,"--value",b[0]),y&2&&I(h,"--value",b[1]),y&4&&I(g,"--value",b[2])},i:_,o:_,d(b){b&&k(t)}}}function _e(){const e=new Date;return e.getHours()*1e3*60*60+e.getMinutes()*1e3*60+e.getSeconds()*1e3}function gt(e,t,n){let r,s=0,o=0,i=0;const c=Ke.subscribe(u=>{const f=_e(),h=u.filter(m=>m.on&&m.t>f).sort((m,g)=>m.t-g.t)[0];h?r=h.t:(r=void 0,n(0,s=0),n(1,o=0),n(2,i=0))});let l;return Me(()=>{(function u(){if(r!==void 0){let f=r-_e();n(0,s=Math.floor(f/36e5)),f=f-s*36e5,n(1,o=Math.floor(f/6e4)),f=f-o*6e4,n(2,i=Math.floor(f/1e3)),s+o+i<=0&&(r=void 0,n(0,s=0),n(1,o=0),n(2,i=0))}l=setTimeout(u,1e3-Date.now()%1e3)})()}),De(()=>{clearTimeout(l),c()}),[s,o,i]}class vt extends M{constructor(t){super(),L(this,t,gt,mt,B,{})}}function wt(e){let t,n,r,s,o,i,c,l=(e[0]===void 0?"-":e[0])+"",u;return{c(){t=v("div"),n=v("div"),r=v("h2"),r.textContent="Steps",s=S(),o=v("div"),i=T("svg"),c=T("path"),u=O(l),a(r,"class","card-title"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"d","M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-green-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(o,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(f,d){C(f,t,d),p(t,n),p(n,r),p(n,s),p(n,o),p(o,i),p(i,c),p(o,u)},p(f,[d]){d&1&&l!==(l=(f[0]===void 0?"-":f[0])+"")&&R(u,l)},i:_,o:_,d(f){f&&k(t)}}}function bt(e,t,n){let r;return z(e,Ye,s=>n(0,r=s)),[r]}class yt extends M{constructor(t){super(),L(this,t,bt,wt,B,{})}}function _t(e){let t;return{c(){t=O("-")},m(n,r){C(n,t,r)},p:_,d(n){n&&k(t)}}}function $t(e){let t=e[0]-6+"",n,r,s,o;return{c(){n=O(t),r=O("\u2103 ("),s=O(e[0]),o=O("\u2103)")},m(i,c){C(i,n,c),C(i,r,c),C(i,s,c),C(i,o,c)},p(i,c){c&1&&t!==(t=i[0]-6+"")&&R(n,t),c&1&&R(s,i[0])},d(i){i&&k(n),i&&k(r),i&&k(s),i&&k(o)}}}function xt(e){let t,n,r,s,o,i,c,l,u;function f(m,g){return m[0]!==void 0?$t:_t}let d=f(e),h=d(e);return{c(){t=v("div"),n=v("div"),r=v("h2"),r.textContent="Temperature",s=S(),o=v("div"),i=T("svg"),c=T("path"),l=T("path"),u=S(),h.c(),a(r,"class","card-title"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"d","M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"),a(l,"stroke-linecap","round"),a(l,"stroke-linejoin","round"),a(l,"d","M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-orange-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(o,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(m,g){C(m,t,g),p(t,n),p(n,r),p(n,s),p(n,o),p(o,i),p(i,c),p(i,l),p(o,u),h.m(o,null)},p(m,[g]){d===(d=f(m))&&h?h.p(m,g):(h.d(1),h=d(m),h&&(h.c(),h.m(o,null)))},i:_,o:_,d(m){m&&k(t),h.d()}}}function St(e,t,n){let r;return z(e,Ge,s=>n(0,r=s)),[r]}class kt extends M{constructor(t){super(),L(this,t,St,xt,B,{})}}function Ot(){return new Promise(e=>navigator.geolocation.getCurrentPosition(t=>{e({lat:t.coords.latitude,lon:t.coords.longitude})}))}async function $e(e,t,n,r){const s=await fetch(`https://api.openweathermap.org/data/2.5/${e}?lat=${t}&lon=${n}&units=metric&appid=${r}`);if(!s.ok)throw new Error("Failed to fetch data");return s.json()}function xe(e){return{dt:e.dt*1e3,temp:e.main.temp,weather:e.weather[0].main,icon:e.weather[0].icon}}async function Ct(e,t){localStorage.setItem("weather-api-key",t);const{lat:n,lon:r}=await Ot(),s=await $e("forecast",n,r,t),o=await $e("weather",n,r,t),i=[xe(o),...s.list.map(xe)],c={city:s.city.name,sunrise:s.city.sunrise,sunset:s.city.sunset},l={weather:i,location:c};await Qe(e,"my-clock-3.app.json",JSON.stringify(l))}function Pt(e){let t,n,r,s,o,i,c,l,u,f,d,h,m,g,b;return{c(){t=v("div"),n=v("div"),r=v("h2"),r.textContent="Weather",s=S(),o=v("div"),i=v("label"),i.innerHTML='<span class="label-text">API Key</span>',c=S(),l=v("input"),u=S(),f=v("div"),d=v("button"),h=O("Update"),a(r,"class","card-title"),a(i,"class","label"),a(l,"class","input input-bordered w-full"),a(l,"type","text"),a(o,"class","form-control"),a(d,"class","btn btn-secondary"),d.disabled=m=!e[2],ge(d,"loading",e[0]),a(f,"class","card-actions"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(y,P){C(y,t,P),p(t,n),p(n,r),p(n,s),p(n,o),p(o,i),p(o,c),p(o,l),me(l,e[1]),p(n,u),p(n,f),p(f,d),p(d,h),g||(b=[ue(l,"input",e[4]),ue(d,"click",e[3])],g=!0)},p(y,[P]){P&2&&l.value!==y[1]&&me(l,y[1]),P&4&&m!==(m=!y[2])&&(d.disabled=m),P&1&&ge(d,"loading",y[0])},i:_,o:_,d(y){y&&k(t),g=!1,J(b)}}}function Tt(e,t,n){var l;let r;z(e,Ne,u=>n(2,r=u));let s=!1,o=(l=localStorage.getItem("weather-api-key"))!=null?l:"";async function i(){if(K.connection)try{n(0,s=!0),await Ct(K.connection,o)}finally{n(0,s=!1)}}function c(){o=this.value,n(1,o)}return[s,o,r,i,c]}class Bt extends M{constructor(t){super(),L(this,t,Tt,Pt,B,{})}}function Et(e){let t,n,r,s,o,i,c,l,u,f,d,h,m,g,b,y,P,Y=e[0]?"Stop":"Start",ie,U,oe,pe;return n=new Bt({}),s=new vt({}),i=new kt({}),l=new yt({}),f=new lt({}),h=new it({}),{c(){t=v("div"),W(n.$$.fragment),r=S(),W(s.$$.fragment),o=S(),W(i.$$.fragment),c=S(),W(l.$$.fragment),u=S(),W(f.$$.fragment),d=S(),W(h.$$.fragment),m=S(),g=v("div"),b=v("div"),y=v("div"),P=v("button"),ie=O(Y),a(P,"class","btn btn-primary"),a(y,"class","card-actions"),a(b,"class","card-body"),a(g,"class","card w-96 bg-base-200 shadow-xl"),a(t,"class","flex flex-col justify-center items-center gap-8 p-10")},m(x,se){C(x,t,se),N(n,t,null),p(t,r),N(s,t,null),p(t,o),N(i,t,null),p(t,c),N(l,t,null),p(t,u),N(f,t,null),p(t,d),N(h,t,null),p(t,m),p(t,g),p(g,b),p(b,y),p(y,P),p(P,ie),U=!0,oe||(pe=ue(P,"click",e[1]),oe=!0)},p(x,[se]){(!U||se&1)&&Y!==(Y=x[0]?"Stop":"Start")&&R(ie,Y)},i(x){U||(E(n.$$.fragment,x),E(s.$$.fragment,x),E(i.$$.fragment,x),E(l.$$.fragment,x),E(f.$$.fragment,x),E(h.$$.fragment,x),U=!0)},o(x){j(n.$$.fragment,x),j(s.$$.fragment,x),j(i.$$.fragment,x),j(l.$$.fragment,x),j(f.$$.fragment,x),j(h.$$.fragment,x),U=!1},d(x){x&&k(t),A(n),A(s),A(i),A(l),A(f),A(h),oe=!1,pe()}}}function Nt(e,t,n){let r;z(e,Ne,o=>n(0,r=o));async function s(){await K.toggle({triggers:[o=>pt(o,10*60*1e3)],polls:[ft,ut,dt]},[ht])}return[r,s]}class At extends M{constructor(t){super(),L(this,t,Nt,Et,B,{})}}new At({target:document.getElementById("app")});