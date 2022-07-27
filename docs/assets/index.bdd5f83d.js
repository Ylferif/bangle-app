const Be=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Be();function $(){}function Se(t){return t()}function me(){return Object.create(null)}function H(t){t.forEach(Se)}function Ce(t){return typeof t=="function"}function k(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ne(t){return Object.keys(t).length===0}function Oe(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function K(t,e,n){t.$$.on_destroy.push(Oe(e,n))}function f(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function _(){return S(" ")}function le(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ae(t){return Array.from(t.childNodes)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e==null?"":e}function M(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Re(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}let Q;function X(t){Q=t}function pe(){if(!Q)throw new Error("Function called outside component initialization");return Q}function Le(t){pe().$$.on_mount.push(t)}function De(t){pe().$$.on_destroy.push(t)}function Me(){const t=pe();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=Re(e,n,{cancelable:r});return i.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}const U=[],ve=[],ee=[],we=[],Ie=Promise.resolve();let fe=!1;function We(){fe||(fe=!0,Ie.then(ke))}function de(t){ee.push(t)}const ae=new Set;let Y=0;function ke(){const t=Q;do{for(;Y<U.length;){const e=U[Y];Y++,X(e),je(e.$$)}for(X(null),U.length=0,Y=0;ve.length;)ve.pop()();for(let e=0;e<ee.length;e+=1){const n=ee[e];ae.has(n)||(ae.add(n),n())}ee.length=0}while(U.length);for(;we.length;)we.pop()();fe=!1,ae.clear(),X(t)}function je(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}const te=new Set;let qe;function T(t,e){t&&t.i&&(te.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(te.has(t))return;te.add(t),qe.c.push(()=>{te.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function W(t){t&&t.c()}function E(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:u}=t.$$;i&&i.m(e,n),r||de(()=>{const l=s.map(Se).filter(Ce);o?o.push(...l):H(l),t.$$.on_mount=[]}),u.forEach(de)}function B(t,e){const n=t.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(U.push(t),We(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,r,i,s,o,u=[-1]){const l=Q;X(t);const a=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:i,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:me(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(m,g,...p)=>{const h=p.length?p[0]:g;return a.ctx&&i(a.ctx[m],a.ctx[m]=h)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](h),d&&He(t,m)),g}):[],a.update(),d=!0,H(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const m=Ae(e.target);a.fragment&&a.fragment.l(m),m.forEach(P)}else a.fragment&&a.fragment.c();e.intro&&T(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),ke()}X(l)}class L{$destroy(){B(this,1),this.$destroy=$}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const j=[];function Je(t,e){return{subscribe:Pe(t,e).subscribe}}function Pe(t,e=$){let n;const r=new Set;function i(u){if(k(t,u)&&(t=u,n)){const l=!j.length;for(const a of r)a[1](),j.push(a,t);if(l){for(let a=0;a<j.length;a+=2)j[a][0](j[a+1]);j.length=0}}}function s(u){i(u(t))}function o(u,l=$){const a=[u,l];return r.add(a),r.size===1&&(n=e(i)||$),u(t),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function D(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,s=e.length<2;return Je(n,o=>{let u=!1;const l=[];let a=0,d=$;const m=()=>{if(a)return;d();const p=e(r?l[0]:l,o);s?o(p):d=Ce(p)?p:$},g=i.map((p,h)=>Oe(p,b=>{l[h]=b,a&=~(1<<h),u&&m()},()=>{a|=1<<h}));return u=!0,m(),function(){H(g),d()}})}var q,ne=[];function Te(){if(navigator.platform.indexOf("Win")>=0&&(navigator.userAgent.indexOf("Chrome/54")>=0||navigator.userAgent.indexOf("Chrome/55")>=0||navigator.userAgent.indexOf("Chrome/56")>=0))return console.warn("Chrome <56 in Windows has navigator.bluetooth but it's not implemented properly"),confirm(`Web Bluetooth on Windows is not yet available.
Please click Ok to see other options for using Web Bluetooth`)&&(window.location="https://www.espruino.com/Puck.js+Quick+Start"),!1;if(navigator.bluetooth)return!0;console.warn("No Web Bluetooth on this platform");var t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return t?confirm(`To use Web Bluetooth on iOS you'll need the WebBLE App.
Please click Ok to go to the App Store and download it.`)&&(window.location="https://itunes.apple.com/us/app/webble/id1193531073"):confirm(`This Web Browser doesn't support Web Bluetooth.
Please click Ok to see instructions for enabling it.`)&&(window.location="https://www.espruino.com/Quick+Start+BLE#with-web-bluetooth"),!1}var ce="6e400001-b5a3-f393-e0a9-e50e24dcca9e",ze="6e400002-b5a3-f393-e0a9-e50e24dcca9e",Fe="6e400003-b5a3-f393-e0a9-e50e24dcca9e",be=20;function y(t,e){V.log&&V.log(t,e)}function Ue(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function Xe(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0,i=t.length;r<i;r++)n[r]=t.charCodeAt(r);return e}function ye(){if(!!ne.length){var t=ne.shift();y(3,"Executing "+JSON.stringify(t)+" from queue"),t.type=="write"?V.write(t.data,t.callback,t.callbackNewline):y(1,"Unknown queue item "+JSON.stringify(t))}}function Ee(t){if(!!Te()){var e={on:function(a,d){this["on"+a]=d},emit:function(a,d){this["on"+a]&&this["on"+a](d)},isOpen:!1,isOpening:!0,txInProgress:!1},n=void 0,r,i,s,o=[],u=!1,l=be;return e.close=function(){e.isOpening=!1,e.isOpen?(e.isOpen=!1,e.emit("close")):t&&t(null),n&&(n.disconnect(),n=void 0,i=void 0,s=void 0,l=be)},e.write=function(a,d){a&&o.push({data:a,callback:d,maxLength:a.length}),e.isOpen&&!e.txInProgress&&m();function m(){if(u){setTimeout(m,50);return}var g;if(!!o.length){var p=o[0];V.writeProgress(p.maxLength-p.data.length,p.maxLength),p.data.length<=l?(g=p.data,p.data=void 0):(g=p.data.substr(0,l),p.data=p.data.substr(l)),e.txInProgress=!0,y(2,"Sending "+JSON.stringify(g)),i.writeValue(Xe(g)).then(function(){y(3,"Sent"),p.data||(o.shift(),p.callback&&p.callback()),e.txInProgress=!1,m()}).catch(function(h){y(1,"SEND ERROR: "+h),o=[],e.close()})}}},navigator.bluetooth.requestDevice({filters:[{namePrefix:"Puck.js"},{namePrefix:"Pixl.js"},{namePrefix:"MDBT42Q"},{namePrefix:"RuuviTag"},{namePrefix:"iTracker"},{namePrefix:"Thingy"},{namePrefix:"Espruino"},{services:[ce]}],optionalServices:[ce]}).then(function(a){y(1,"Device Name:       "+a.name),y(1,"Device ID:         "+a.id),a.addEventListener("gattserverdisconnected",function(){y(1,"Disconnected (gattserverdisconnected)"),e.close()}),e.device=a,e.reconnect(t)}).catch(function(a){y(1,"ERROR: "+a),e.close()}),e.reconnect=function(a){e.device.gatt.connect().then(function(d){return y(1,"Connected"),n=d,d.getPrimaryService(ce)}).then(function(d){return y(2,"Got service"),r=d,r.getCharacteristic(Fe)}).then(function(d){return s=d,y(2,"RX characteristic:"+JSON.stringify(s)),s.addEventListener("characteristicvaluechanged",function(m){var g=m.target.value,p=Ue(g.buffer);p.length>l&&(y(2,"Received packet of length "+p.length+", increasing chunk size"),l=p.length);for(var h=0;h<p.length;h++){var b=p.charCodeAt(h),C=!0;b==19?(y(2,"XOFF received => pause upload"),u=!0):b==17?(y(2,"XON received => resume upload"),u=!1):C=!1,C&&(p=p.substr(0,h-1)+p.substr(h+1),h--)}y(3,"Received "+JSON.stringify(p)),e.emit("data",p)}),s.startNotifications()}).then(function(){return r.getCharacteristic(ze)}).then(function(d){i=d,y(2,"TX characteristic:"+JSON.stringify(i))}).then(function(){e.txInProgress=!1,e.isOpen=!0,e.isOpening=!1,q=!1,ne=[],a(e),e.emit("open"),e.write()}).catch(function(d){y(1,"ERROR: "+d),e.close()})},e}}var w;function ue(t,e,n){if(!Te())return;let r;if(typeof e!="function"&&(n=e,r=new Promise((o,u)=>e=(l,a)=>{a?u(a):o(l)})),q)return y(3,"Busy - adding Puck.write to queue"),ne.push({type:"write",data:t,callback:e,callbackNewline:n}),r;var i;function s(){n&&(w.cb=function(a){var d=w.received.indexOf(`
`);if(d>=0){var m=w.received.substr(0,d);w.received=w.received.substr(d+1),w.cb=void 0,i&&clearTimeout(i),i=void 0,e&&e(m),q=!1,ye()}});var o=300,u=n?100:3,l=u;i=setTimeout(function a(){i=void 0,o&&o--,l&&l--,w.hadData&&(l=u),l&&o?i=setTimeout(a,100):(w.cb=void 0,e&&e(w.received),q=!1,ye(),w.received=""),w.hadData=!1},100)}return w&&(w.isOpen||w.isOpening)?(w.txInProgress||(w.received=""),q=!0,w.write(t,s),r):(w=Ee(function(o){if(!o){w=void 0,e&&e(null);return}w.received="",w.on("data",function(u){w.received+=u,w.hadData=!0,w.cb&&w.cb(u)}),w.on("close",function(u){w=void 0}),q=!0,w.write(t,s)}),r)}const V={debug:1,increaseMTU:!0,flowControl:!0,log:function(t,e){t<=this.debug&&console.log("<BLE> "+e)},writeProgress:function(t,e){},connect:Ee,write:ue,eval:function(t,e){const n=ue("Bluetooth.println(JSON.stringify("+t+`))
`,!0).then(function(r){try{return JSON.parse(r)}catch(i){return y(1,"Unable to decode "+JSON.stringify(r)+", got "+i.toString()),Promise.reject(r)}});return e?void n.then(e,r=>e(null,r)):n},setTime:function(t){var e=new Date,n="setTime("+e.getTime()/1e3+");";n+="if (E.setTimeZone) E.setTimeZone("+e.getTimezoneOffset()/-60+`);
`,ue(n,t)},isConnected:function(){return w!==void 0},getConnection:function(){return w},close:function(){w&&w.close()},modal:function(t){var e=document.createElement("div");e.style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;opacity:0.5;z-index:100;background:black;",e.innerHTML='<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family: Sans-Serif;font-size:400%;color:white;">Click to Continue...</div>',e.onclick=function(n){t(),n.preventDefault(),document.body.removeChild(e)},document.body.appendChild(e)}};function J(t,e){return t.write(`if(1){${e}}
`)}function Qe(t){return new Promise((e,n)=>V.connect(r=>{if(!r){n("Failed to connect");return}let i="";r.on("data",s=>{i+=s;const o=i.split(`
`);i=o.pop();for(const u of o)t(u)}),e(r)}))}function Ve(){const{subscribe:t,update:e,set:n}=Pe([!1,{}]);return{subscribe:t,async connect(...r){this.connection=await Qe(i=>{let s;try{s=JSON.parse(i)}catch{console.warn("Could not parse message",i);return}console.log("[command]",s),e(([o,u])=>[o,{...u,[s.t]:s}])}),n([!0,{}]);for(const i of r)await i(this.connection)},async disconnect(...r){for(const i of r)await i(this.connection);this.connection&&(this.connection.close(),this.connection=void 0),n([!1,{}])},toggle(r,i){this.connection?this.disconnect(...i):this.connect(...r)},async one(r){const i=!!this.connection;i||await this.connect(),await r(this.connection),i||await this.disconnect()}}}const re=Ve(),Z=D(re,([,t])=>t),Ke=D(re,([t])=>t),Ze=D(Z,t=>{var e,n;return(n=(e=t.alarms)==null?void 0:e.alarms)!=null?n:[]}),Ge=D(Z,t=>{var e,n;return(n=(e=t.temperature)==null?void 0:e.temperature)!=null?n:0}),Ye=D(Z,t=>{var e,n;return(n=(e=t.steps)==null?void 0:e.steps)!=null?n:0}),et=D(Z,t=>{var e,n;return(n=(e=t.status)==null?void 0:e.bat)!=null?n:0}),tt=D(Z,t=>{var e,n;return(n=(e=t.hrm)==null?void 0:e.hrm)!=null?n:{bpm:0,confidence:0}});function nt(t){let e,n,r,i,s,o,u,l,a,d,m,g,p,h;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Next Alarm",i=_(),s=v("div"),o=O("svg"),u=O("path"),l=_(),a=v("span"),d=v("span"),m=S(`:\r
        `),g=v("span"),p=S(`:\r
        `),h=v("span"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-blue-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),M(d,"--value",t[0]),M(g,"--value",t[1]),M(h,"--value",t[2]),c(a,"class","countdown font-mono text-2xl"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(b,C){A(b,e,C),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,l),f(s,a),f(a,d),f(a,m),f(a,g),f(a,p),f(a,h)},p(b,[C]){C&1&&M(d,"--value",b[0]),C&2&&M(g,"--value",b[1]),C&4&&M(h,"--value",b[2])},i:$,o:$,d(b){b&&P(e)}}}function $e(){const t=new Date;return t.getHours()*1e3*60*60+t.getMinutes()*1e3*60+t.getSeconds()*1e3}function rt(t,e,n){let r,i=0,s=0,o=0;const u=Ze.subscribe(a=>{const d=$e(),g=a.filter(p=>p.on&&p.t>d).sort((p,h)=>p.t-h.t)[0];g?r=g.t:(r=void 0,n(0,i=0),n(1,s=0),n(2,o=0))});let l;return Le(()=>{(function a(){if(r!==void 0){let d=r-$e();n(0,i=Math.floor(d/36e5)),d=d-i*36e5,n(1,s=Math.floor(d/6e4)),d=d-s*6e4,n(2,o=Math.floor(d/1e3))}l=setTimeout(a,1e3-Date.now()%1e3)})()}),De(()=>{clearTimeout(l),u()}),[i,s,o]}class it extends L{constructor(e){super(),R(this,e,rt,nt,k,{})}}function ot(t){let e,n,r,i,s,o,u,l,a,d;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Battery",i=_(),s=v("div"),o=O("svg"),u=O("path"),l=_(),a=S(t[0]),d=S("%"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M13 10V3L4 14h7v7l9-11h-7z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-yellow-300"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(m,g){A(m,e,g),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,l),f(s,a),f(s,d)},p(m,[g]){g&1&&N(a,m[0])},i:$,o:$,d(m){m&&P(e)}}}function st(t,e,n){let r;return K(t,et,i=>n(0,r=i)),[r]}class at extends L{constructor(e){super(),R(this,e,st,ot,k,{})}}function ct(t){let e,n,r,i,s,o,u,l=t[0].bpm+"",a,d,m=t[0].confidence+"",g,p;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Heart Rate",i=_(),s=v("div"),o=O("svg"),u=O("path"),a=S(l),d=S(" ("),g=S(m),p=S("%)"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-red-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(h,b){A(h,e,b),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,a),f(s,d),f(s,g),f(s,p)},p(h,[b]){b&1&&l!==(l=h[0].bpm+"")&&N(a,l),b&1&&m!==(m=h[0].confidence+"")&&N(g,m)},i:$,o:$,d(h){h&&P(e)}}}function ut(t,e,n){let r;return K(t,tt,i=>n(0,r=i)),[r]}class lt extends L{constructor(e){super(),R(this,e,ut,ct,k,{})}}async function ft(t){return J(t,`
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`)}async function dt(t){return J(t,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));
    })();
`)}async function pt(t){return J(t,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));
    })();
`)}async function ht(t,e=void 0){let n=`
    Bangle.setHRMPower(true);
    Bangle.on('HRM', (hrm) => {
      Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
        bpm: hrm.bpm,
        confidence: hrm.confidence
      } }));
    });
  `;return e&&(n+=`setTimeout(() => Bangle.setHRMPower(false), ${e})`),J(t,n)}async function mt(t){return J(t,"Bangle.setHRMPower(false);")}function gt(t){let e,n,r,i,s,o,u,l;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Steps",i=_(),s=v("div"),o=O("svg"),u=O("path"),l=S(t[0]),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-green-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(a,d){A(a,e,d),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,l)},p(a,[d]){d&1&&N(l,a[0])},i:$,o:$,d(a){a&&P(e)}}}function vt(t,e,n){let r;return K(t,Ye,i=>n(0,r=i)),[r]}class wt extends L{constructor(e){super(),R(this,e,vt,gt,k,{})}}function bt(t){let e,n,r,i,s,o,u,l,a=t[0]-6+"",d,m,g,p;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Temperature",i=_(),s=v("div"),o=O("svg"),u=O("path"),l=O("path"),d=S(a),m=S("\u2103 ("),g=S(t[0]),p=S("\u2103)"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"),c(l,"stroke-linecap","round"),c(l,"stroke-linejoin","round"),c(l,"d","M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-orange-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(h,b){A(h,e,b),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(o,l),f(s,d),f(s,m),f(s,g),f(s,p)},p(h,[b]){b&1&&a!==(a=h[0]-6+"")&&N(d,a),b&1&&N(g,h[0])},i:$,o:$,d(h){h&&P(e)}}}function yt(t,e,n){let r;return K(t,Ge,i=>n(0,r=i)),[r]}class $t extends L{constructor(e){super(),R(this,e,yt,bt,k,{})}}async function xt(t,e,n){const r=`require('Storage').write('${e}',${n});`;return J(t,r)}function _t(){return new Promise(t=>navigator.geolocation.getCurrentPosition(e=>{t({lat:e.coords.latitude,lon:e.coords.longitude})}))}async function xe(t,e,n,r){const i=await fetch(`https://api.openweathermap.org/data/2.5/${t}?lat=${e}&lon=${n}&units=metric&appid=${r}`);if(!i.ok)throw new Error("Failed to fetch data");return i.json()}function _e(t){return{dt:t.dt*1e3,temp:t.main.temp,weather:t.weather[0].main,icon:t.weather[0].icon}}async function St(t,e){localStorage.setItem("weather-api-key",e);const{lat:n,lon:r}=await _t(),i=await xe("forecast",n,r,e),s=await xe("weather",n,r,e),o=[_e(s),...i.list.map(_e)],u={city:i.city.name,sunrise:i.city.sunrise,sunset:i.city.sunset},l={weather:o,location:u};await xt(t,"my-clock-3.app.json",JSON.stringify(l))}function Ct(t){let e,n,r,i,s,o,u,l,a,d,m,g,p;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Weather",i=_(),s=v("div"),o=v("label"),o.innerHTML='<span class="label-text">API Key</span>',u=_(),l=v("input"),a=_(),d=v("div"),m=v("button"),m.textContent="Update",c(r,"class","card-title"),c(o,"class","label"),c(l,"class","input input-bordered w-full"),c(l,"type","text"),c(s,"class","form-control"),c(m,"class","btn btn-secondary"),c(d,"class","card-actions"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(h,b){A(h,e,b),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(s,u),f(s,l),ge(l,t[0]),f(n,a),f(n,d),f(d,m),g||(p=[le(l,"input",t[2]),le(m,"click",t[1])],g=!0)},p(h,[b]){b&1&&l.value!==h[0]&&ge(l,h[0])},i:$,o:$,d(h){h&&P(e),g=!1,H(p)}}}function Ot(t,e,n){var u;let r=(u=localStorage.getItem("weather-api-key"))!=null?u:"";const i=Me();function s(){i("sync",{apiKey:r})}function o(){r=this.value,n(0,r)}return[r,s,o]}class kt extends L{constructor(e){super(),R(this,e,Ot,Ct,k,{})}}function Pt(t){let e,n,r,i,s,o,u,l,a,d,m,g,p,h,b,C,z,G=t[0]?"Stop":"Start",ie,F,oe,he;return n=new kt({}),n.$on("sync",t[2]),i=new it({}),o=new $t({}),l=new wt({}),d=new lt({}),g=new at({}),{c(){e=v("div"),W(n.$$.fragment),r=_(),W(i.$$.fragment),s=_(),W(o.$$.fragment),u=_(),W(l.$$.fragment),a=_(),W(d.$$.fragment),m=_(),W(g.$$.fragment),p=_(),h=v("div"),b=v("div"),C=v("div"),z=v("button"),ie=S(G),c(z,"class","btn btn-primary"),c(C,"class","card-actions"),c(b,"class","card-body"),c(h,"class","card w-96 bg-base-200 shadow-xl"),c(e,"class","flex flex-col justify-center items-center gap-8 p-10")},m(x,se){A(x,e,se),E(n,e,null),f(e,r),E(i,e,null),f(e,s),E(o,e,null),f(e,u),E(l,e,null),f(e,a),E(d,e,null),f(e,m),E(g,e,null),f(e,p),f(e,h),f(h,b),f(b,C),f(C,z),f(z,ie),F=!0,oe||(he=le(z,"click",t[1]),oe=!0)},p(x,[se]){(!F||se&1)&&G!==(G=x[0]?"Stop":"Start")&&N(ie,G)},i(x){F||(T(n.$$.fragment,x),T(i.$$.fragment,x),T(o.$$.fragment,x),T(l.$$.fragment,x),T(d.$$.fragment,x),T(g.$$.fragment,x),F=!0)},o(x){I(n.$$.fragment,x),I(i.$$.fragment,x),I(o.$$.fragment,x),I(l.$$.fragment,x),I(d.$$.fragment,x),I(g.$$.fragment,x),F=!1},d(x){x&&P(e),B(n),B(i),B(o),B(l),B(d),B(g),oe=!1,he()}}}function Tt(t,e,n){let r;K(t,Ke,o=>n(0,r=o));async function i(){await re.toggle([dt,ft,pt,o=>ht(o,10*60*1e3)],[mt])}async function s(o){await re.one(u=>St(u,o.detail.apiKey))}return[r,i,s]}class Et extends L{constructor(e){super(),R(this,e,Tt,Pt,k,{})}}new Et({target:document.getElementById("app")});
