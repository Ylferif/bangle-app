const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Ne();function x(){}function ke(e){return e()}function be(){return Object.create(null)}function J(e){e.forEach(ke)}function Ce(e){return typeof e=="function"}function E(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Le(e){return Object.keys(e).length===0}function Oe(e,...t){if(e==null)return x;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function q(e,t,n){e.$$.on_destroy.push(Oe(t,n))}function f(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function P(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function O(e){return document.createTextNode(e)}function $(){return O(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e===""?null:+e}function Me(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function V(e,t){e.value=t==null?"":t}function U(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function ae(e,t,n){e.classList[n?"add":"remove"](t)}let te;function ee(e){te=e}function Te(){if(!te)throw new Error("Function called outside component initialization");return te}function De(e){Te().$$.on_mount.push(e)}function Re(e){Te().$$.on_destroy.push(e)}const Y=[],we=[],oe=[],ve=[],Ie=Promise.resolve();let me=!1;function je(){me||(me=!0,Ie.then(Pe))}function he(e){oe.push(e)}const fe=new Set;let ie=0;function Pe(){const e=te;do{for(;ie<Y.length;){const t=Y[ie];ie++,ee(t),We(t.$$)}for(ee(null),Y.length=0,ie=0;we.length;)we.pop()();for(let t=0;t<oe.length;t+=1){const n=oe[t];fe.has(n)||(fe.add(n),n())}oe.length=0}while(Y.length);for(;ve.length;)ve.pop()();me=!1,fe.clear(),ee(e)}function We(e){if(e.fragment!==null){e.update(),J(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(he)}}const se=new Set;let He;function N(e,t){e&&e.i&&(se.delete(e),e.i(t))}function j(e,t,n,r){if(e&&e.o){if(se.has(e))return;se.add(e),He.c.push(()=>{se.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function W(e){e&&e.c()}function L(e,t,n,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:l}=e.$$;o&&o.m(t,n),r||he(()=>{const c=s.map(ke).filter(Ce);i?i.push(...c):J(c),e.$$.on_mount=[]}),l.forEach(he)}function M(e,t){const n=e.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Je(e,t){e.$$.dirty[0]===-1&&(Y.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,r,o,s,i,l=[-1]){const c=te;ee(e);const u=e.$$={fragment:null,ctx:null,props:s,update:x,not_equal:o,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:be(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(p,h,...g)=>{const m=g.length?g[0]:h;return u.ctx&&o(u.ctx[p],u.ctx[p]=m)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](m),d&&Je(e,p)),h}):[],u.update(),d=!0,J(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const p=Me(t.target);u.fragment&&u.fragment.l(p),p.forEach(C)}else u.fragment&&u.fragment.c();t.intro&&N(e.$$.fragment),L(e,t.target,t.anchor,t.customElement),Pe()}ee(c)}class R{$destroy(){M(this,1),this.$destroy=x}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=[];function qe(e,t){return{subscribe:Ae(e,t).subscribe}}function Ae(e,t=x){let n;const r=new Set;function o(l){if(E(e,l)&&(e=l,n)){const c=!X.length;for(const u of r)u[1](),X.push(u,e);if(c){for(let u=0;u<X.length;u+=2)X[u][0](X[u+1]);X.length=0}}}function s(l){o(l(e))}function i(l,c=x){const u=[l,c];return r.add(u),r.size===1&&(n=t(o)||x),l(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}function z(e,t,n){const r=!Array.isArray(e),o=r?[e]:e,s=t.length<2;return qe(n,i=>{let l=!1;const c=[];let u=0,d=x;const p=()=>{if(u)return;d();const g=t(r?c[0]:c,i);s?i(g):d=Ce(g)?g:x},h=o.map((g,m)=>Oe(g,_=>{c[m]=_,u&=~(1<<m),l&&p()},()=>{u|=1<<m}));return l=!0,p(),function(){J(h),d()}})}var Q,ue=[];function Be(){if(navigator.platform.indexOf("Win")>=0&&(navigator.userAgent.indexOf("Chrome/54")>=0||navigator.userAgent.indexOf("Chrome/55")>=0||navigator.userAgent.indexOf("Chrome/56")>=0))return console.warn("Chrome <56 in Windows has navigator.bluetooth but it's not implemented properly"),confirm(`Web Bluetooth on Windows is not yet available.
Please click Ok to see other options for using Web Bluetooth`)&&(window.location="https://www.espruino.com/Puck.js+Quick+Start"),!1;if(navigator.bluetooth)return!0;console.warn("No Web Bluetooth on this platform");var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return e?confirm(`To use Web Bluetooth on iOS you'll need the WebBLE App.
Please click Ok to go to the App Store and download it.`)&&(window.location="https://itunes.apple.com/us/app/webble/id1193531073"):confirm(`This Web Browser doesn't support Web Bluetooth.
Please click Ok to see instructions for enabling it.`)&&(window.location="https://www.espruino.com/Quick+Start+BLE#with-web-bluetooth"),!1}var de="6e400001-b5a3-f393-e0a9-e50e24dcca9e",ze="6e400002-b5a3-f393-e0a9-e50e24dcca9e",Fe="6e400003-b5a3-f393-e0a9-e50e24dcca9e",ye=20;function k(e,t){ne.log&&ne.log(e,t)}function Ue(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function Xe(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0,o=e.length;r<o;r++)n[r]=e.charCodeAt(r);return t}function _e(){if(!!ue.length){var e=ue.shift();k(3,"Executing "+JSON.stringify(e)+" from queue"),e.type=="write"?ne.write(e.data,e.callback,e.callbackNewline):k(1,"Unknown queue item "+JSON.stringify(e))}}function Ee(e,t){if(!!Be()){var n={on:function(d,p){this["on"+d]=p},emit:function(d,p){this["on"+d]&&this["on"+d](p)},isOpen:!1,isOpening:!0,txInProgress:!1},r=void 0,o,s,i,l=[],c=!1,u=ye;return n.close=function(){n.isOpening=!1,n.isOpen?(n.isOpen=!1,n.emit("close")):e&&e(null),r&&(r.disconnect(),r=void 0,s=void 0,i=void 0,u=ye)},n.write=function(d,p){d&&l.push({data:d,callback:p,maxLength:d.length}),n.isOpen&&!n.txInProgress&&h();function h(){if(c){setTimeout(h,50);return}var g;if(!!l.length){var m=l[0];ne.writeProgress(m.maxLength-m.data.length,m.maxLength),m.data.length<=u?(g=m.data,m.data=void 0):(g=m.data.substr(0,u),m.data=m.data.substr(u)),n.txInProgress=!0,k(2,"Sending "+JSON.stringify(g)),s.writeValue(Xe(g)).then(function(){k(3,"Sent"),m.data||(l.shift(),m.callback&&m.callback()),n.txInProgress=!1,h()}).catch(function(_){k(1,"SEND ERROR: "+_),l=[],n.close()})}}},navigator.bluetooth.requestDevice({filters:[{namePrefix:"Puck.js"},{namePrefix:"Pixl.js"},{namePrefix:"MDBT42Q"},{namePrefix:"RuuviTag"},{namePrefix:"iTracker"},{namePrefix:"Thingy"},{namePrefix:"Espruino"},{services:[de]}],optionalServices:[de]}).then(function(d){k(1,"Device Name:       "+d.name),k(1,"Device ID:         "+d.id),d.addEventListener("gattserverdisconnected",function(){k(1,"Disconnected (gattserverdisconnected)"),t&&t(),n.close()}),n.device=d,n.reconnect(e)}).catch(function(d){k(1,"ERROR: "+d),n.close()}),n.reconnect=function(d){n.device.gatt.connect().then(function(p){return k(1,"Connected"),r=p,p.getPrimaryService(de)}).then(function(p){return k(2,"Got service"),o=p,o.getCharacteristic(Fe)}).then(function(p){return i=p,k(2,"RX characteristic:"+JSON.stringify(i)),i.addEventListener("characteristicvaluechanged",function(h){var g=h.target.value,m=Ue(g.buffer);m.length>u&&(k(2,"Received packet of length "+m.length+", increasing chunk size"),u=m.length);for(var _=0;_<m.length;_++){var y=m.charCodeAt(_),S=!0;y==19?(k(2,"XOFF received => pause upload"),c=!0):y==17?(k(2,"XON received => resume upload"),c=!1):S=!1,S&&(m=m.substr(0,_-1)+m.substr(_+1),_--)}k(3,"Received "+JSON.stringify(m)),n.emit("data",m)}),i.startNotifications()}).then(function(){return o.getCharacteristic(ze)}).then(function(p){s=p,k(2,"TX characteristic:"+JSON.stringify(s))}).then(function(){n.txInProgress=!1,n.isOpen=!0,n.isOpening=!1,Q=!1,ue=[],d(n),n.emit("open"),n.write()}).catch(function(p){k(1,"ERROR: "+p),n.close()})},n}}var v;function pe(e,t,n){if(!Be())return;let r;if(typeof t!="function"&&(n=t,r=new Promise((i,l)=>t=(c,u)=>{u?l(u):i(c)})),Q)return k(3,"Busy - adding Puck.write to queue"),ue.push({type:"write",data:e,callback:t,callbackNewline:n}),r;var o;function s(){n&&(v.cb=function(u){var d=v.received.indexOf(`
`);if(d>=0){var p=v.received.substr(0,d);v.received=v.received.substr(d+1),v.cb=void 0,o&&clearTimeout(o),o=void 0,t&&t(p),Q=!1,_e()}});var i=300,l=n?100:3,c=l;o=setTimeout(function u(){o=void 0,i&&i--,c&&c--,v.hadData&&(c=l),c&&i?o=setTimeout(u,100):(v.cb=void 0,t&&t(v.received),Q=!1,_e(),v.received=""),v.hadData=!1},100)}return v&&(v.isOpen||v.isOpening)?(v.txInProgress||(v.received=""),Q=!0,v.write(e,s),r):(v=Ee(function(i){if(!i){v=void 0,t&&t(null);return}v.received="",v.on("data",function(l){v.received+=l,v.hadData=!0,v.cb&&v.cb(l)}),v.on("close",function(l){v=void 0}),Q=!0,v.write(e,s)}),r)}const ne={debug:1,increaseMTU:!0,flowControl:!0,log:function(e,t){e<=this.debug&&console.log("<BLE> "+t)},writeProgress:function(e,t){},connect:Ee,write:pe,eval:function(e,t){const n=pe("Bluetooth.println(JSON.stringify("+e+`))
`,!0).then(function(r){try{return JSON.parse(r)}catch(o){return k(1,"Unable to decode "+JSON.stringify(r)+", got "+o.toString()),Promise.reject(r)}});return t?void n.then(t,r=>t(null,r)):n},setTime:function(e){var t=new Date,n="setTime("+t.getTime()/1e3+");";n+="if (E.setTimeZone) E.setTimeZone("+t.getTimezoneOffset()/-60+`);
`,pe(n,e)},isConnected:function(){return v!==void 0},getConnection:function(){return v},close:function(){v&&v.close()},modal:function(e){var t=document.createElement("div");t.style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;opacity:0.5;z-index:100;background:black;",t.innerHTML='<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family: Sans-Serif;font-size:400%;color:white;">Click to Continue...</div>',t.onclick=function(n){e(),n.preventDefault(),document.body.removeChild(t)},document.body.appendChild(t)}};function ce(e,t){return new Promise(n=>e.write(`if(1){${t}}
`,n))}async function Qe(e,t,n){const r=`require('Storage').write('${t}',${n});`;return ce(e,r)}function Ve(e,t){return new Promise((n,r)=>ne.connect(o=>{if(!o){r("Failed to connect");return}let s="";o.on("data",i=>{s+=i;const l=s.split(`
`);s=l.pop();for(const c of l)e(c)}),n(o)},t))}function Ze(){const{subscribe:e,update:t}=Ae([!1,{}]);return{connection:void 0,subscribe:e,async connect(){this.connection=await Ve(n=>{let r;try{r=JSON.parse(n)}catch{console.warn("Could not parse message",n);return}console.log("[command]",r),t(([o,s])=>[o,{...s,[r.t]:r}])},()=>{t(([,n])=>[!1,n])}),t(([,n])=>[!0,n])},async disconnect(){this.connection&&(this.connection.close(),this.connection=void 0),t(([,n])=>[!1,n])},async toggle(n,r){this.connection?(await r(this.connection),await this.disconnect()):(await this.connect(),await n(this.connection))}}}const K=Ze(),re=z(K,([,e])=>e),ge=z(K,([e])=>e),Ke=z(re,e=>{var t,n;return(n=(t=e.alarms)==null?void 0:t.alarms)!=null?n:[]}),Ge=z(re,e=>{var t;return(t=e.temperature)==null?void 0:t.temperature}),Ye=z(re,e=>{var t;return(t=e.steps)==null?void 0:t.steps}),et=z(re,e=>{var t;return(t=e.status)==null?void 0:t.bat}),tt=z(re,e=>{var t;return(t=e.hrm)==null?void 0:t.hrm});function nt(e){let t,n,r,o,s,i,l,c,u=(e[0]===void 0?"-":e[0])+"",d,p;return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Battery",o=$(),s=b("div"),i=P("svg"),l=P("path"),c=$(),d=O(u),p=O("%"),a(r,"class","card-title"),a(l,"stroke-linecap","round"),a(l,"stroke-linejoin","round"),a(l,"d","M13 10V3L4 14h7v7l9-11h-7z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-yellow-300"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(s,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(h,g){T(h,t,g),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(i,l),f(s,c),f(s,d),f(s,p)},p(h,[g]){g&1&&u!==(u=(h[0]===void 0?"-":h[0])+"")&&H(d,u)},i:x,o:x,d(h){h&&C(t)}}}function rt(e,t,n){let r;return q(e,et,o=>n(0,r=o)),[r]}class it extends R{constructor(t){super(),D(this,t,rt,nt,E,{})}}function ot(e){let t;return{c(){t=O("-")},m(n,r){T(n,t,r)},p:x,d(n){n&&C(t)}}}function st(e){let t=e[0].bpm+"",n,r,o=e[0].confidence+"",s,i;return{c(){n=O(t),r=O(" ("),s=O(o),i=O("%)")},m(l,c){T(l,n,c),T(l,r,c),T(l,s,c),T(l,i,c)},p(l,c){c&1&&t!==(t=l[0].bpm+"")&&H(n,t),c&1&&o!==(o=l[0].confidence+"")&&H(s,o)},d(l){l&&C(n),l&&C(r),l&&C(s),l&&C(i)}}}function lt(e){let t,n,r,o,s,i,l,c;function u(h,g){return h[0]!==void 0?st:ot}let d=u(e),p=d(e);return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Heart Rate",o=$(),s=b("div"),i=P("svg"),l=P("path"),c=$(),p.c(),a(r,"class","card-title"),a(l,"stroke-linecap","round"),a(l,"stroke-linejoin","round"),a(l,"d","M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-red-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(s,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(h,g){T(h,t,g),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(i,l),f(s,c),p.m(s,null)},p(h,[g]){d===(d=u(h))&&p?p.p(h,g):(p.d(1),p=d(h),p&&(p.c(),p.m(s,null)))},i:x,o:x,d(h){h&&C(t),p.d()}}}function at(e,t,n){let r;return q(e,tt,o=>n(0,r=o)),[r]}class ut extends R{constructor(t){super(),D(this,t,at,lt,E,{})}}const ct=`Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: require("sched").getAlarms() }));`,ft="Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));",dt="Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));",pt=`
Bangle.setHRMPower(true);
Bangle.on('HRM', (hrm) => {
  Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
    bpm: hrm.bpm,
    confidence: hrm.confidence
  } }));
});
`,mt="Bangle.setHRMPower(false);";function ht(e){return ce(e,`
    ${pt}

    if(global.bangleAppTimeout){
      clearTimeout(global.bangleAppTimeout);
      global.bangleAppTimeout = undefined;
    }

    (function bangleAppPoll() {
      ${ct}
      ${ft}
      ${dt}

      global.bangleAppTimeout = setTimeout(bangleAppPoll, 1000);
    })();  
  `)}function gt(e){return ce(e,`
    ${mt}
    if(global.bangleAppTimeout){
      clearTimeout(global.bangleAppTimeout);
      global.bangleAppTimeout = undefined;
    }
  `)}function bt(e){let t,n,r,o,s,i,l,c,u,d,p,h,g,m;return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Next Alarm",o=$(),s=b("div"),i=P("svg"),l=P("path"),c=$(),u=b("span"),d=b("span"),p=O(`:\r
        `),h=b("span"),g=O(`:\r
        `),m=b("span"),a(r,"class","card-title"),a(l,"stroke-linecap","round"),a(l,"stroke-linejoin","round"),a(l,"d","M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-blue-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),U(d,"--value",e[0]),U(h,"--value",e[1]),U(m,"--value",e[2]),a(u,"class","countdown font-mono text-2xl"),a(s,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(_,y){T(_,t,y),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(i,l),f(s,c),f(s,u),f(u,d),f(u,p),f(u,h),f(u,g),f(u,m)},p(_,[y]){y&1&&U(d,"--value",_[0]),y&2&&U(h,"--value",_[1]),y&4&&U(m,"--value",_[2])},i:x,o:x,d(_){_&&C(t)}}}function $e(){const e=new Date;return e.getHours()*1e3*60*60+e.getMinutes()*1e3*60+e.getSeconds()*1e3}function wt(e,t,n){let r,o=0,s=0,i=0;const l=Ke.subscribe(u=>{const d=$e(),h=u.filter(g=>g.on&&g.t>d).sort((g,m)=>g.t-m.t)[0];h?r=h.t:(r=void 0,n(0,o=0),n(1,s=0),n(2,i=0))});let c;return De(()=>{(function u(){if(r!==void 0){let d=r-$e();n(0,o=Math.floor(d/36e5)),d=d-o*36e5,n(1,s=Math.floor(d/6e4)),d=d-s*6e4,n(2,i=Math.floor(d/1e3)),o+s+i<=0&&(r=void 0,n(0,o=0),n(1,s=0),n(2,i=0))}c=setTimeout(u,1e3-Date.now()%1e3)})()}),Re(()=>{clearTimeout(c),l()}),[o,s,i]}class vt extends R{constructor(t){super(),D(this,t,wt,bt,E,{})}}function yt(e,t,n){const r=t*60*60*1e3+n*60*1e3,o=new Date().getTime(),s=`
        const timer = require('sched').newDefaultTimer();
        timer.timer = ${r};
        require('sched').setAlarm(${o}, timer);
        require('sched').reload();
    `;return ce(e,s)}function _t(e){let t,n,r,o,s,i,l,c,u,d,p,h,g,m,_,y,S,F,A,I,G;return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Set Timer",o=$(),s=b("div"),i=b("div"),l=b("label"),l.innerHTML='<span class="label-text">Hours</span>',c=$(),u=b("input"),d=$(),p=b("div"),h=b("label"),h.innerHTML='<span class="label-text">Minutes</span>',g=$(),m=b("input"),_=$(),y=b("div"),S=b("button"),F=O("Set"),a(r,"class","card-title"),a(l,"class","label"),a(u,"type","number"),a(u,"class","input input-bordered w-full max-w-xs"),a(i,"class","form-control w-full max-w-xs"),a(h,"class","label"),a(m,"type","number"),a(m,"class","input input-bordered w-full max-w-xs"),a(p,"class","form-control w-full max-w-xs"),a(s,"class","flex gap-2"),a(S,"class","btn btn-secondary"),S.disabled=A=!e[3]||e[0]+e[1]===0,ae(S,"loading",e[2]),a(y,"class","card-actions"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(w,B){T(w,t,B),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(i,l),f(i,c),f(i,u),V(u,e[0]),f(s,d),f(s,p),f(p,h),f(p,g),f(p,m),V(m,e[1]),f(n,_),f(n,y),f(y,S),f(S,F),I||(G=[Z(u,"input",e[5]),Z(m,"input",e[6]),Z(S,"click",e[4])],I=!0)},p(w,[B]){B&1&&le(u.value)!==w[0]&&V(u,w[0]),B&2&&le(m.value)!==w[1]&&V(m,w[1]),B&11&&A!==(A=!w[3]||w[0]+w[1]===0)&&(S.disabled=A),B&4&&ae(S,"loading",w[2])},i:x,o:x,d(w){w&&C(t),I=!1,J(G)}}}function $t(e,t,n){let r;q(e,ge,d=>n(3,r=d));let o=0,s=5,i=!1;async function l(){n(2,i=!0);try{await yt(K.connection,o,s)}finally{n(2,i=!1)}}function c(){o=le(this.value),n(0,o)}function u(){s=le(this.value),n(1,s)}return[o,s,i,r,l,c,u]}class xt extends R{constructor(t){super(),D(this,t,$t,_t,E,{})}}function St(e){let t,n,r,o,s,i,l,c=(e[0]===void 0?"-":e[0])+"",u;return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Steps",o=$(),s=b("div"),i=P("svg"),l=P("path"),u=O(c),a(r,"class","card-title"),a(l,"stroke-linecap","round"),a(l,"stroke-linejoin","round"),a(l,"d","M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-green-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(s,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(d,p){T(d,t,p),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(i,l),f(s,u)},p(d,[p]){p&1&&c!==(c=(d[0]===void 0?"-":d[0])+"")&&H(u,c)},i:x,o:x,d(d){d&&C(t)}}}function kt(e,t,n){let r;return q(e,Ye,o=>n(0,r=o)),[r]}class Ct extends R{constructor(t){super(),D(this,t,kt,St,E,{})}}function Ot(e){let t;return{c(){t=O("-")},m(n,r){T(n,t,r)},p:x,d(n){n&&C(t)}}}function Tt(e){let t=e[0]-6+"",n,r,o,s;return{c(){n=O(t),r=O("\u2103 ("),o=O(e[0]),s=O("\u2103)")},m(i,l){T(i,n,l),T(i,r,l),T(i,o,l),T(i,s,l)},p(i,l){l&1&&t!==(t=i[0]-6+"")&&H(n,t),l&1&&H(o,i[0])},d(i){i&&C(n),i&&C(r),i&&C(o),i&&C(s)}}}function Pt(e){let t,n,r,o,s,i,l,c,u;function d(g,m){return g[0]!==void 0?Tt:Ot}let p=d(e),h=p(e);return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Temperature",o=$(),s=b("div"),i=P("svg"),l=P("path"),c=P("path"),u=$(),h.c(),a(r,"class","card-title"),a(l,"stroke-linecap","round"),a(l,"stroke-linejoin","round"),a(l,"d","M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"d","M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"class","h-6 w-6 text-orange-500"),a(i,"fill","none"),a(i,"viewBox","0 0 24 24"),a(i,"stroke","currentColor"),a(i,"stroke-width","2"),a(s,"class","flex gap-2"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(g,m){T(g,t,m),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(i,l),f(i,c),f(s,u),h.m(s,null)},p(g,[m]){p===(p=d(g))&&h?h.p(g,m):(h.d(1),h=p(g),h&&(h.c(),h.m(s,null)))},i:x,o:x,d(g){g&&C(t),h.d()}}}function At(e,t,n){let r;return q(e,Ge,o=>n(0,r=o)),[r]}class Bt extends R{constructor(t){super(),D(this,t,At,Pt,E,{})}}function Et(){return new Promise(e=>navigator.geolocation.getCurrentPosition(t=>{e({lat:t.coords.latitude,lon:t.coords.longitude})}))}async function xe(e,t,n,r){const o=await fetch(`https://api.openweathermap.org/data/2.5/${e}?lat=${t}&lon=${n}&units=metric&appid=${r}`);if(!o.ok)throw new Error("Failed to fetch data");return o.json()}function Se(e){return{dt:e.dt*1e3,temp:e.main.temp,weather:e.weather[0].main,icon:e.weather[0].icon}}async function Nt(e,t){localStorage.setItem("weather-api-key",t);const{lat:n,lon:r}=await Et(),o=await xe("forecast",n,r,t),s=await xe("weather",n,r,t),i=[Se(s),...o.list.map(Se)],l={city:o.city.name,sunrise:o.city.sunrise,sunset:o.city.sunset},c={weather:i,location:l};await Qe(e,"my-clock-3.app.json",JSON.stringify(c))}function Lt(e){let t,n,r,o,s,i,l,c,u,d,p,h,g,m,_;return{c(){t=b("div"),n=b("div"),r=b("h2"),r.textContent="Weather",o=$(),s=b("div"),i=b("label"),i.innerHTML='<span class="label-text">API Key</span>',l=$(),c=b("input"),u=$(),d=b("div"),p=b("button"),h=O("Update"),a(r,"class","card-title"),a(i,"class","label"),a(c,"class","input input-bordered w-full"),a(c,"type","text"),a(s,"class","form-control"),a(p,"class","btn btn-secondary"),p.disabled=g=!e[2],ae(p,"loading",e[0]),a(d,"class","card-actions"),a(n,"class","card-body"),a(t,"class","card w-96 bg-base-100 shadow-xl")},m(y,S){T(y,t,S),f(t,n),f(n,r),f(n,o),f(n,s),f(s,i),f(s,l),f(s,c),V(c,e[1]),f(n,u),f(n,d),f(d,p),f(p,h),m||(_=[Z(c,"input",e[4]),Z(p,"click",e[3])],m=!0)},p(y,[S]){S&2&&c.value!==y[1]&&V(c,y[1]),S&4&&g!==(g=!y[2])&&(p.disabled=g),S&1&&ae(p,"loading",y[0])},i:x,o:x,d(y){y&&C(t),m=!1,J(_)}}}function Mt(e,t,n){var c;let r;q(e,ge,u=>n(2,r=u));let o=!1,s=(c=localStorage.getItem("weather-api-key"))!=null?c:"";async function i(){if(K.connection)try{n(0,o=!0),await Nt(K.connection,s)}finally{n(0,o=!1)}}function l(){s=this.value,n(1,s)}return[o,s,r,i,l]}class Dt extends R{constructor(t){super(),D(this,t,Mt,Lt,E,{})}}function Rt(e){let t,n,r,o,s,i,l,c,u,d,p,h,g,m,_,y,S=e[0]?"Stop":"Start",F,A,I,G;return n=new Dt({}),o=new xt({}),i=new vt({}),c=new Bt({}),d=new Ct({}),h=new ut({}),m=new it({}),{c(){t=b("div"),W(n.$$.fragment),r=$(),W(o.$$.fragment),s=$(),W(i.$$.fragment),l=$(),W(c.$$.fragment),u=$(),W(d.$$.fragment),p=$(),W(h.$$.fragment),g=$(),W(m.$$.fragment),_=$(),y=b("button"),F=O(S),a(y,"class","fixed z-50 bottom-10 right-8 drop-shadow-lg btn btn-primary hover:animate-pulse"),a(t,"class","flex flex-col justify-center items-center gap-8 p-10")},m(w,B){T(w,t,B),L(n,t,null),f(t,r),L(o,t,null),f(t,s),L(i,t,null),f(t,l),L(c,t,null),f(t,u),L(d,t,null),f(t,p),L(h,t,null),f(t,g),L(m,t,null),f(t,_),f(t,y),f(y,F),A=!0,I||(G=Z(y,"click",e[1]),I=!0)},p(w,[B]){(!A||B&1)&&S!==(S=w[0]?"Stop":"Start")&&H(F,S)},i(w){A||(N(n.$$.fragment,w),N(o.$$.fragment,w),N(i.$$.fragment,w),N(c.$$.fragment,w),N(d.$$.fragment,w),N(h.$$.fragment,w),N(m.$$.fragment,w),A=!0)},o(w){j(n.$$.fragment,w),j(o.$$.fragment,w),j(i.$$.fragment,w),j(c.$$.fragment,w),j(d.$$.fragment,w),j(h.$$.fragment,w),j(m.$$.fragment,w),A=!1},d(w){w&&C(t),M(n),M(o),M(i),M(c),M(d),M(h),M(m),I=!1,G()}}}function It(e,t,n){let r;q(e,ge,s=>n(0,r=s));async function o(){await K.toggle(ht,gt)}return[r,o]}class jt extends R{constructor(t){super(),D(this,t,It,Rt,E,{})}}new jt({target:document.getElementById("app")});