if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.a33f1ad4.js",revision:null},{url:"assets/index.c5669110.css",revision:null},{url:"index.html",revision:"dad80980cf89d91c062942951838460e"},{url:"registerSW.js",revision:"60bebae29dc55a04a2988a47efdc0d4d"},{url:"favicon.ico",revision:"9fe3efe707ce8d09b70f5631bd473f23"},{url:"apple-touch-icon.png",revision:"d9b2b302838eddd6f5fffc1dc6efcc86"},{url:"android-chrome-512x512.png",revision:"1b2f28276ec93665339857abb39a59eb"},{url:"android-chrome-192x192.png",revision:"e85e32f135d10c8585604ab2b407bbdc"},{url:"manifest.webmanifest",revision:"8fa7a2ce8da0fe105e79dab63ac2b25d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
