if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>n(e,c),t={module:{uri:c},exports:o,require:d};i[c]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.48b8dc57.css",revision:null},{url:"assets/index.587a9b1a.js",revision:null},{url:"index.html",revision:"0bf088eecb10aed73f1da7a51f7e038d"},{url:"registerSW.js",revision:"60bebae29dc55a04a2988a47efdc0d4d"},{url:"favicon.ico",revision:"3437ceec028acd2163ffa964432e90e9"},{url:"apple-touch-icon.png",revision:"b06202e51935a320fbc61c7861db1939"},{url:"android-chrome-512x512.png",revision:"1484cfaa983b90316422414e9a7bd5dc"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"cc28d03d773a89d72a771f7aae5ce6d9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
