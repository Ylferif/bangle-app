const Ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Ae();function x(){}function Se(t){return t()}function he(){return Object.create(null)}function J(t){t.forEach(Se)}function Oe(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Re(t){return Object.keys(t).length===0}function Ce(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function z(t,e,n){t.$$.on_destroy.push(Ce(e,n))}function f(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function S(){return O(" ")}function ue(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function me(t,e){t.value=e==null?"":e}function D(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ge(t,e,n){t.classList[n?"add":"remove"](e)}let V;function Q(t){V=t}function ke(){if(!V)throw new Error("Function called outside component initialization");return V}function Ie(t){ke().$$.on_mount.push(t)}function Me(t){ke().$$.on_destroy.push(t)}const X=[],ve=[],te=[],we=[],De=Promise.resolve();let fe=!1;function je(){fe||(fe=!0,De.then(Pe))}function de(t){te.push(t)}const ae=new Set;let ee=0;function Pe(){const t=V;do{for(;ee<X.length;){const e=X[ee];ee++,Q(e),We(e.$$)}for(Q(null),X.length=0,ee=0;ve.length;)ve.pop()();for(let e=0;e<te.length;e+=1){const n=te[e];ae.has(n)||(ae.add(n),n())}te.length=0}while(X.length);for(;we.length;)we.pop()();fe=!1,ae.clear(),Q(t)}function We(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}const ne=new Set;let qe;function B(t,e){t&&t.i&&(ne.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(ne.has(t))return;ne.add(t),qe.c.push(()=>{ne.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function W(t){t&&t.c()}function E(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:u}=t.$$;i&&i.m(e,n),r||de(()=>{const l=s.map(Se).filter(Oe);o?o.push(...l):J(l),t.$$.on_mount=[]}),u.forEach(de)}function N(t,e){const n=t.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(X.push(t),je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,r,i,s,o,u=[-1]){const l=V;Q(t);const a=t.$$={fragment:null,ctx:null,props:s,update:x,not_equal:i,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:he(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(h,g,...p)=>{const m=p.length?p[0]:g;return a.ctx&&i(a.ctx[h],a.ctx[h]=m)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](m),d&&He(t,h)),g}):[],a.update(),d=!0,J(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const h=Le(e.target);a.fragment&&a.fragment.l(h),h.forEach(T)}else a.fragment&&a.fragment.c();e.intro&&B(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),Pe()}Q(l)}class I{$destroy(){N(this,1),this.$destroy=x}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const q=[];function Je(t,e){return{subscribe:Te(t,e).subscribe}}function Te(t,e=x){let n;const r=new Set;function i(u){if(P(t,u)&&(t=u,n)){const l=!q.length;for(const a of r)a[1](),q.push(a,t);if(l){for(let a=0;a<q.length;a+=2)q[a][0](q[a+1]);q.length=0}}}function s(u){i(u(t))}function o(u,l=x){const a=[u,l];return r.add(a),r.size===1&&(n=e(i)||x),u(t),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function M(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,s=e.length<2;return Je(n,o=>{let u=!1;const l=[];let a=0,d=x;const h=()=>{if(a)return;d();const p=e(r?l[0]:l,o);s?o(p):d=Oe(p)?p:x},g=i.map((p,m)=>Ce(p,b=>{l[m]=b,a&=~(1<<m),u&&h()},()=>{a|=1<<m}));return u=!0,h(),function(){J(g),d()}})}var H,re=[];function Be(){if(navigator.platform.indexOf("Win")>=0&&(navigator.userAgent.indexOf("Chrome/54")>=0||navigator.userAgent.indexOf("Chrome/55")>=0||navigator.userAgent.indexOf("Chrome/56")>=0))return console.warn("Chrome <56 in Windows has navigator.bluetooth but it's not implemented properly"),confirm(`Web Bluetooth on Windows is not yet available.
Please click Ok to see other options for using Web Bluetooth`)&&(window.location="https://www.espruino.com/Puck.js+Quick+Start"),!1;if(navigator.bluetooth)return!0;console.warn("No Web Bluetooth on this platform");var t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return t?confirm(`To use Web Bluetooth on iOS you'll need the WebBLE App.
Please click Ok to go to the App Store and download it.`)&&(window.location="https://itunes.apple.com/us/app/webble/id1193531073"):confirm(`This Web Browser doesn't support Web Bluetooth.
Please click Ok to see instructions for enabling it.`)&&(window.location="https://www.espruino.com/Quick+Start+BLE#with-web-bluetooth"),!1}var ce="6e400001-b5a3-f393-e0a9-e50e24dcca9e",ze="6e400002-b5a3-f393-e0a9-e50e24dcca9e",Fe="6e400003-b5a3-f393-e0a9-e50e24dcca9e",be=20;function $(t,e){Z.log&&Z.log(t,e)}function Ue(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function Xe(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0,i=t.length;r<i;r++)n[r]=t.charCodeAt(r);return e}function ye(){if(!!re.length){var t=re.shift();$(3,"Executing "+JSON.stringify(t)+" from queue"),t.type=="write"?Z.write(t.data,t.callback,t.callbackNewline):$(1,"Unknown queue item "+JSON.stringify(t))}}function Ee(t){if(!!Be()){var e={on:function(a,d){this["on"+a]=d},emit:function(a,d){this["on"+a]&&this["on"+a](d)},isOpen:!1,isOpening:!0,txInProgress:!1},n=void 0,r,i,s,o=[],u=!1,l=be;return e.close=function(){e.isOpening=!1,e.isOpen?(e.isOpen=!1,e.emit("close")):t&&t(null),n&&(n.disconnect(),n=void 0,i=void 0,s=void 0,l=be)},e.write=function(a,d){a&&o.push({data:a,callback:d,maxLength:a.length}),e.isOpen&&!e.txInProgress&&h();function h(){if(u){setTimeout(h,50);return}var g;if(!!o.length){var p=o[0];Z.writeProgress(p.maxLength-p.data.length,p.maxLength),p.data.length<=l?(g=p.data,p.data=void 0):(g=p.data.substr(0,l),p.data=p.data.substr(l)),e.txInProgress=!0,$(2,"Sending "+JSON.stringify(g)),i.writeValue(Xe(g)).then(function(){$(3,"Sent"),p.data||(o.shift(),p.callback&&p.callback()),e.txInProgress=!1,h()}).catch(function(m){$(1,"SEND ERROR: "+m),o=[],e.close()})}}},navigator.bluetooth.requestDevice({filters:[{namePrefix:"Puck.js"},{namePrefix:"Pixl.js"},{namePrefix:"MDBT42Q"},{namePrefix:"RuuviTag"},{namePrefix:"iTracker"},{namePrefix:"Thingy"},{namePrefix:"Espruino"},{services:[ce]}],optionalServices:[ce]}).then(function(a){$(1,"Device Name:       "+a.name),$(1,"Device ID:         "+a.id),a.addEventListener("gattserverdisconnected",function(){$(1,"Disconnected (gattserverdisconnected)"),e.close()}),e.device=a,e.reconnect(t)}).catch(function(a){$(1,"ERROR: "+a),e.close()}),e.reconnect=function(a){e.device.gatt.connect().then(function(d){return $(1,"Connected"),n=d,d.getPrimaryService(ce)}).then(function(d){return $(2,"Got service"),r=d,r.getCharacteristic(Fe)}).then(function(d){return s=d,$(2,"RX characteristic:"+JSON.stringify(s)),s.addEventListener("characteristicvaluechanged",function(h){var g=h.target.value,p=Ue(g.buffer);p.length>l&&($(2,"Received packet of length "+p.length+", increasing chunk size"),l=p.length);for(var m=0;m<p.length;m++){var b=p.charCodeAt(m),y=!0;b==19?($(2,"XOFF received => pause upload"),u=!0):b==17?($(2,"XON received => resume upload"),u=!1):y=!1,y&&(p=p.substr(0,m-1)+p.substr(m+1),m--)}$(3,"Received "+JSON.stringify(p)),e.emit("data",p)}),s.startNotifications()}).then(function(){return r.getCharacteristic(ze)}).then(function(d){i=d,$(2,"TX characteristic:"+JSON.stringify(i))}).then(function(){e.txInProgress=!1,e.isOpen=!0,e.isOpening=!1,H=!1,re=[],a(e),e.emit("open"),e.write()}).catch(function(d){$(1,"ERROR: "+d),e.close()})},e}}var w;function le(t,e,n){if(!Be())return;let r;if(typeof e!="function"&&(n=e,r=new Promise((o,u)=>e=(l,a)=>{a?u(a):o(l)})),H)return $(3,"Busy - adding Puck.write to queue"),re.push({type:"write",data:t,callback:e,callbackNewline:n}),r;var i;function s(){n&&(w.cb=function(a){var d=w.received.indexOf(`
`);if(d>=0){var h=w.received.substr(0,d);w.received=w.received.substr(d+1),w.cb=void 0,i&&clearTimeout(i),i=void 0,e&&e(h),H=!1,ye()}});var o=300,u=n?100:3,l=u;i=setTimeout(function a(){i=void 0,o&&o--,l&&l--,w.hadData&&(l=u),l&&o?i=setTimeout(a,100):(w.cb=void 0,e&&e(w.received),H=!1,ye(),w.received=""),w.hadData=!1},100)}return w&&(w.isOpen||w.isOpening)?(w.txInProgress||(w.received=""),H=!0,w.write(t,s),r):(w=Ee(function(o){if(!o){w=void 0,e&&e(null);return}w.received="",w.on("data",function(u){w.received+=u,w.hadData=!0,w.cb&&w.cb(u)}),w.on("close",function(u){w=void 0}),H=!0,w.write(t,s)}),r)}const Z={debug:1,increaseMTU:!0,flowControl:!0,log:function(t,e){t<=this.debug&&console.log("<BLE> "+e)},writeProgress:function(t,e){},connect:Ee,write:le,eval:function(t,e){const n=le("Bluetooth.println(JSON.stringify("+t+`))
`,!0).then(function(r){try{return JSON.parse(r)}catch(i){return $(1,"Unable to decode "+JSON.stringify(r)+", got "+i.toString()),Promise.reject(r)}});return e?void n.then(e,r=>e(null,r)):n},setTime:function(t){var e=new Date,n="setTime("+e.getTime()/1e3+");";n+="if (E.setTimeZone) E.setTimeZone("+e.getTimezoneOffset()/-60+`);
`,le(n,t)},isConnected:function(){return w!==void 0},getConnection:function(){return w},close:function(){w&&w.close()},modal:function(t){var e=document.createElement("div");e.style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;opacity:0.5;z-index:100;background:black;",e.innerHTML='<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family: Sans-Serif;font-size:400%;color:white;">Click to Continue...</div>',e.onclick=function(n){t(),n.preventDefault(),document.body.removeChild(e)},document.body.appendChild(e)}};function F(t,e){return t.write(`if(1){${e}}
`)}function Qe(t){return new Promise((e,n)=>Z.connect(r=>{if(!r){n("Failed to connect");return}let i="";r.on("data",s=>{i+=s;const o=i.split(`
`);i=o.pop();for(const u of o)t(u)}),e(r)}))}function Ve(){const{subscribe:t,update:e,set:n}=Te([!1,{}]);return{connection:void 0,subscribe:t,async connect({triggers:r,polls:i}){this.connection=await Qe(s=>{let o;try{o=JSON.parse(s)}catch{console.warn("Could not parse message",s);return}console.log("[command]",o),e(([u,l])=>[u,{...l,[o.t]:o}])}),this.interval=setInterval(async()=>{var s;if(!((s=this.connection)!=null&&s.isOpen)){clearInterval(this.interval),this.interval=void 0;return}for(const o of i)await o(this.connection)},10*1e3),e(([,s])=>[!0,s]);for(const s of r)await s(this.connection)},async disconnect(r){this.interval&&(clearInterval(this.interval),this.interval=void 0);for(const i of r)await i(this.connection);this.connection&&(this.connection.close(),this.connection=void 0),e(([,i])=>[!1,i])},toggle(r,i){this.connection?this.disconnect(i):this.connect(r)}}}const K=Ve(),G=M(K,([,t])=>t),Ne=M(K,([t])=>t),Ze=M(G,t=>{var e,n;return(n=(e=t.alarms)==null?void 0:e.alarms)!=null?n:[]}),Ke=M(G,t=>{var e,n;return(n=(e=t.temperature)==null?void 0:e.temperature)!=null?n:0}),Ge=M(G,t=>{var e,n;return(n=(e=t.steps)==null?void 0:e.steps)!=null?n:0}),Ye=M(G,t=>{var e,n;return(n=(e=t.status)==null?void 0:e.bat)!=null?n:0}),et=M(G,t=>{var e,n;return(n=(e=t.hrm)==null?void 0:e.hrm)!=null?n:{bpm:0,confidence:0}});function tt(t){let e,n,r,i,s,o,u,l,a,d,h,g,p,m;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Next Alarm",i=S(),s=v("div"),o=k("svg"),u=k("path"),l=S(),a=v("span"),d=v("span"),h=O(`:\r
        `),g=v("span"),p=O(`:\r
        `),m=v("span"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-blue-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),D(d,"--value",t[0]),D(g,"--value",t[1]),D(m,"--value",t[2]),c(a,"class","countdown font-mono text-2xl"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(b,y){R(b,e,y),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,l),f(s,a),f(a,d),f(a,h),f(a,g),f(a,p),f(a,m)},p(b,[y]){y&1&&D(d,"--value",b[0]),y&2&&D(g,"--value",b[1]),y&4&&D(m,"--value",b[2])},i:x,o:x,d(b){b&&T(e)}}}function $e(){const t=new Date;return t.getHours()*1e3*60*60+t.getMinutes()*1e3*60+t.getSeconds()*1e3}function nt(t,e,n){let r,i=0,s=0,o=0;const u=Ze.subscribe(a=>{const d=$e(),g=a.filter(p=>p.on&&p.t>d).sort((p,m)=>p.t-m.t)[0];g?r=g.t:(r=void 0,n(0,i=0),n(1,s=0),n(2,o=0))});let l;return Ie(()=>{(function a(){if(r!==void 0){let d=r-$e();n(0,i=Math.floor(d/36e5)),d=d-i*36e5,n(1,s=Math.floor(d/6e4)),d=d-s*6e4,n(2,o=Math.floor(d/1e3))}l=setTimeout(a,1e3-Date.now()%1e3)})()}),Me(()=>{clearTimeout(l),u()}),[i,s,o]}class rt extends I{constructor(e){super(),L(this,e,nt,tt,P,{})}}function it(t){let e,n,r,i,s,o,u,l,a,d;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Battery",i=S(),s=v("div"),o=k("svg"),u=k("path"),l=S(),a=O(t[0]),d=O("%"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M13 10V3L4 14h7v7l9-11h-7z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-yellow-300"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(h,g){R(h,e,g),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,l),f(s,a),f(s,d)},p(h,[g]){g&1&&A(a,h[0])},i:x,o:x,d(h){h&&T(e)}}}function ot(t,e,n){let r;return z(t,Ye,i=>n(0,r=i)),[r]}class st extends I{constructor(e){super(),L(this,e,ot,it,P,{})}}function at(t){let e,n,r,i,s,o,u,l=t[0].bpm+"",a,d,h=t[0].confidence+"",g,p;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Heart Rate",i=S(),s=v("div"),o=k("svg"),u=k("path"),a=O(l),d=O(" ("),g=O(h),p=O("%)"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-red-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(m,b){R(m,e,b),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,a),f(s,d),f(s,g),f(s,p)},p(m,[b]){b&1&&l!==(l=m[0].bpm+"")&&A(a,l),b&1&&h!==(h=m[0].confidence+"")&&A(g,h)},i:x,o:x,d(m){m&&T(e)}}}function ct(t,e,n){let r;return z(t,et,i=>n(0,r=i)),[r]}class lt extends I{constructor(e){super(),L(this,e,ct,at,P,{})}}async function ut(t){return F(t,`
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`)}async function ft(t){return F(t,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));
    })();
`)}async function dt(t){return F(t,`
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));
    })();
`)}async function pt(t,e=void 0){let n=`
    Bangle.setHRMPower(true);
    Bangle.on('HRM', (hrm) => {
      Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
        bpm: hrm.bpm,
        confidence: hrm.confidence
      } }));
    });
  `;return e&&(n+=`setTimeout(() => Bangle.setHRMPower(false), ${e})`),F(t,n)}async function ht(t){return F(t,"Bangle.setHRMPower(false);")}function mt(t){let e,n,r,i,s,o,u,l;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Steps",i=S(),s=v("div"),o=k("svg"),u=k("path"),l=O(t[0]),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-green-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(a,d){R(a,e,d),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(s,l)},p(a,[d]){d&1&&A(l,a[0])},i:x,o:x,d(a){a&&T(e)}}}function gt(t,e,n){let r;return z(t,Ge,i=>n(0,r=i)),[r]}class vt extends I{constructor(e){super(),L(this,e,gt,mt,P,{})}}function wt(t){let e,n,r,i,s,o,u,l,a=t[0]-6+"",d,h,g,p;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Temperature",i=S(),s=v("div"),o=k("svg"),u=k("path"),l=k("path"),d=O(a),h=O("\u2103 ("),g=O(t[0]),p=O("\u2103)"),c(r,"class","card-title"),c(u,"stroke-linecap","round"),c(u,"stroke-linejoin","round"),c(u,"d","M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"),c(l,"stroke-linecap","round"),c(l,"stroke-linejoin","round"),c(l,"d","M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","h-6 w-6 text-orange-500"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke","currentColor"),c(o,"stroke-width","2"),c(s,"class","flex gap-2"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(m,b){R(m,e,b),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(o,u),f(o,l),f(s,d),f(s,h),f(s,g),f(s,p)},p(m,[b]){b&1&&a!==(a=m[0]-6+"")&&A(d,a),b&1&&A(g,m[0])},i:x,o:x,d(m){m&&T(e)}}}function bt(t,e,n){let r;return z(t,Ke,i=>n(0,r=i)),[r]}class yt extends I{constructor(e){super(),L(this,e,bt,wt,P,{})}}async function $t(t,e,n){const r=`require('Storage').write('${e}',${n});`;return F(t,r)}function xt(){return new Promise(t=>navigator.geolocation.getCurrentPosition(e=>{t({lat:e.coords.latitude,lon:e.coords.longitude})}))}async function xe(t,e,n,r){const i=await fetch(`https://api.openweathermap.org/data/2.5/${t}?lat=${e}&lon=${n}&units=metric&appid=${r}`);if(!i.ok)throw new Error("Failed to fetch data");return i.json()}function _e(t){return{dt:t.dt*1e3,temp:t.main.temp,weather:t.weather[0].main,icon:t.weather[0].icon}}async function _t(t,e){localStorage.setItem("weather-api-key",e);const{lat:n,lon:r}=await xt(),i=await xe("forecast",n,r,e),s=await xe("weather",n,r,e),o=[_e(s),...i.list.map(_e)],u={city:i.city.name,sunrise:i.city.sunrise,sunset:i.city.sunset},l={weather:o,location:u};await $t(t,"my-clock-3.app.json",JSON.stringify(l))}function St(t){let e,n,r,i,s,o,u,l,a,d,h,g,p,m,b;return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Weather",i=S(),s=v("div"),o=v("label"),o.innerHTML='<span class="label-text">API Key</span>',u=S(),l=v("input"),a=S(),d=v("div"),h=v("button"),g=O("Update"),c(r,"class","card-title"),c(o,"class","label"),c(l,"class","input input-bordered w-full"),c(l,"type","text"),c(s,"class","form-control"),c(h,"class","btn btn-secondary"),h.disabled=p=!t[2],ge(h,"loading",t[0]),c(d,"class","card-actions"),c(n,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl")},m(y,C){R(y,e,C),f(e,n),f(n,r),f(n,i),f(n,s),f(s,o),f(s,u),f(s,l),me(l,t[1]),f(n,a),f(n,d),f(d,h),f(h,g),m||(b=[ue(l,"input",t[4]),ue(h,"click",t[3])],m=!0)},p(y,[C]){C&2&&l.value!==y[1]&&me(l,y[1]),C&4&&p!==(p=!y[2])&&(h.disabled=p),C&1&&ge(h,"loading",y[0])},i:x,o:x,d(y){y&&T(e),m=!1,J(b)}}}function Ot(t,e,n){var l;let r;z(t,Ne,a=>n(2,r=a));let i=!1,s=(l=localStorage.getItem("weather-api-key"))!=null?l:"";async function o(){if(K.connection)try{n(0,i=!0),await _t(K.connection,s)}finally{n(0,i=!1)}}function u(){s=this.value,n(1,s)}return[i,s,r,o,u]}class Ct extends I{constructor(e){super(),L(this,e,Ot,St,P,{})}}function kt(t){let e,n,r,i,s,o,u,l,a,d,h,g,p,m,b,y,C,Y=t[0]?"Stop":"Start",ie,U,oe,pe;return n=new Ct({}),i=new rt({}),o=new yt({}),l=new vt({}),d=new lt({}),g=new st({}),{c(){e=v("div"),W(n.$$.fragment),r=S(),W(i.$$.fragment),s=S(),W(o.$$.fragment),u=S(),W(l.$$.fragment),a=S(),W(d.$$.fragment),h=S(),W(g.$$.fragment),p=S(),m=v("div"),b=v("div"),y=v("div"),C=v("button"),ie=O(Y),c(C,"class","btn btn-primary"),c(y,"class","card-actions"),c(b,"class","card-body"),c(m,"class","card w-96 bg-base-200 shadow-xl"),c(e,"class","flex flex-col justify-center items-center gap-8 p-10")},m(_,se){R(_,e,se),E(n,e,null),f(e,r),E(i,e,null),f(e,s),E(o,e,null),f(e,u),E(l,e,null),f(e,a),E(d,e,null),f(e,h),E(g,e,null),f(e,p),f(e,m),f(m,b),f(b,y),f(y,C),f(C,ie),U=!0,oe||(pe=ue(C,"click",t[1]),oe=!0)},p(_,[se]){(!U||se&1)&&Y!==(Y=_[0]?"Stop":"Start")&&A(ie,Y)},i(_){U||(B(n.$$.fragment,_),B(i.$$.fragment,_),B(o.$$.fragment,_),B(l.$$.fragment,_),B(d.$$.fragment,_),B(g.$$.fragment,_),U=!0)},o(_){j(n.$$.fragment,_),j(i.$$.fragment,_),j(o.$$.fragment,_),j(l.$$.fragment,_),j(d.$$.fragment,_),j(g.$$.fragment,_),U=!1},d(_){_&&T(e),N(n),N(i),N(o),N(l),N(d),N(g),oe=!1,pe()}}}function Pt(t,e,n){let r;z(t,Ne,s=>n(0,r=s));async function i(){await K.toggle({triggers:[s=>pt(s,10*60*1e3)],polls:[ft,ut,dt]},[ht])}return[r,i]}class Tt extends I{constructor(e){super(),L(this,e,Pt,kt,P,{})}}new Tt({target:document.getElementById("app")});