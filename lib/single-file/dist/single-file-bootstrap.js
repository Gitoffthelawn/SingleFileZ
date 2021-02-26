!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).singlefile={})}(this,(function(e){"use strict";const t="single-filez-load-image",s="single-filez-image-loaded",o=globalThis.browser,n=e=>globalThis.dispatchEvent(e),i=globalThis.CustomEvent,r=globalThis.document,a=globalThis.HTMLDocument,l=globalThis.FileReader,d=globalThis.Blob,c=[];if(r instanceof a&&o&&o.runtime&&o.runtime.getURL){m="single-filez-new-font-face",u=e=>{const t=e.detail;c.find((e=>JSON.stringify(e)==JSON.stringify(t)))||c.push(e.detail)},globalThis.addEventListener(m,u,f);let e=r.createElement("script");e.textContent="("+function(){const e=globalThis.console,t=e&&e.warn&&((...t)=>e.warn(...t))||(()=>{}),s="single-filez-new-font-face",o={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const e=globalThis.FontFace;let r;globalThis.FontFace=function(){r||(t("SingleFileZ is hooking the FontFace constructor to get font URLs."),r=!0);const a={};a["font-family"]=arguments[0],a.src=arguments[1];const c=arguments[2];if(c&&Object.keys(c).forEach((e=>{o[e]&&(a[o[e]]=c[e])})),a.src instanceof ArrayBuffer){const e=new l;e.readAsDataURL(new d([a.src])),e.addEventListener("load",(()=>{a.src="url("+e.result+")",n(new i(s,{detail:a}))}))}else n(new i(s,{detail:a}));return new e(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"}}}.toString()+")()",(r.documentElement||r).appendChild(e),e.remove(),e=r.createElement("script"),e.src=o.runtime.getURL("/lib/single-file/processors/hooks/content/content-hooks-frames-web.js"),e.async=!1,(r.documentElement||r).appendChild(e),e.remove()}var m,u,f;const g=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const h="single-filez-on-before-capture",p="single-filez-on-after-capture",b="data-single-filez-removed-content",E="data-single-filez-hidden-content",w="data-single-filez-kept-content",y="data-single-filez-hidden-frame",T="data-single-filez-preserved-space-element",A="data-single-filez-shadow-root-element",I="data-single-filez-image",v="data-single-filez-poster",S="data-single-filez-canvas",R="data-single-filez-import",F="data-single-filez-input-value",N="data-single-filez-lazy-loaded-src",C="data-single-filez-stylesheet",_="data-single-filez-disabled-noscript",k="data-single-filez-async-script",M="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",z=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],q=/^'(.*?)'$/,P=/^"(.*?)"$/,x={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},L="single-file-ui-element",O=(e,t,s)=>globalThis.addEventListener(e,t,s);let U={};function D(e,t,s){let o;return e.querySelectorAll("noscript:not([data-single-filez-disabled-noscript])").forEach((e=>{e.setAttribute(_,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(M).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+M+", html > body > "+M);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),o=t&&e.documentElement?V(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:o.canvases,fonts:c,stylesheets:J(e),images:o.images,posters:o.posters,usedFonts:Array.from(o.usedFonts.values()),shadowRoots:o.shadowRoots,imports:o.imports,referrer:e.referrer,markedElements:o.markedElements}}function V(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let r,a,l;if((o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(a=(i||s.closest("html > head"))&&z.includes(s.tagName)||s.closest("details"),a||(r=i||function(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),r&&(s.setAttribute(E,""),n.markedElements.push(s)))),!r)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(T,""),n.markedElements.push(s))}o.removeUnusedFonts&&(B(l,o,n.usedFonts),B(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),B(e.getComputedStyle(s,":before"),o,n.usedFonts),B(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,r){if("CANVAS"==s.tagName)try{const t=function(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i,r,a,l,d,c,m,u,f=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),f=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}i=G("padding-left",s),r=G("padding-right",s),a=G("padding-top",s),l=G("padding-bottom",s),f?(d=G("border-left-width",s),c=G("border-right-width",s),m=G("border-top-width",s),u=G("border-bottom-width",s)):d=c=m=u=0,o=Math.max(0,t.clientWidth-i-r-d-c),n=Math.max(0,t.clientHeight-a-l-m-u)}return{pxWidth:o,pxHeight:n}}(e,s,r);n.canvases.push({dataURI:s.toDataURL("image/png",""),width:t.width,height:t.height}),s.setAttribute(S,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const e={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(N)||s.currentSrc};n.images.push(e),s.setAttribute(I,n.images.length-1),n.markedElements.push(s),s.removeAttribute(N)}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(v,n.posters.length-1),n.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(y,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:K(s.import)}),s.setAttribute(R,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(F,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(F,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(F,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(F,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(k,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,r,l);const d=!(s instanceof e.SVGElement)&&H(s);if(d&&!s.classList.contains(L)){const i={};s.setAttribute(A,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),V(e,t,d,o,n,r),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}V(e,t,s,o,n,r),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(a||""==s.getAttribute(w)?s.parentElement&&(s.parentElement.setAttribute(w,""),n.markedElements.push(s.parentElement)):r&&(s.setAttribute(b,""),n.markedElements.push(s)))})),n}function B(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=W(n),!t.loadedFonts||t.loadedFonts.find((e=>W(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),x[i.toLowerCase().trim()]||i),r=e.getPropertyValue("font-variant")||"normal",a=[n,t,o,r];s.set(JSON.stringify(a),[n,t,o,r])}var i}))}}function H(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function W(e=""){return function(e){e=e.match(q)?e.replace(q,"$1"):e.replace(P,"$1");return e.trim()}((t=e.trim(),t.replace(g,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function j(e,t){if(e.querySelectorAll("[data-single-filez-disabled-noscript]").forEach((t=>{t.textContent=t.getAttribute(_),t.removeAttribute(_),e.body.firstChild?e.body.insertBefore(t,e.body.firstChild):e.body.appendChild(t)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[b,y,E,T,I,v,S,F,A,R,C,k];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(b),e.removeAttribute(E),e.removeAttribute(w),e.removeAttribute(y),e.removeAttribute(T),e.removeAttribute(I),e.removeAttribute(v),e.removeAttribute(S),e.removeAttribute(F),e.removeAttribute(A),e.removeAttribute(R),e.removeAttribute(C),e.removeAttribute(k)}))}function J(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(C,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function G(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function K(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}O("single-filez-user-script-init",(()=>U=async e=>{const t=new CustomEvent(e+"-request",{cancelable:!0}),s=new Promise((t=>O(e+"-response",t)));(e=>{globalThis.dispatchEvent(e)})(t),t.defaultPrevented&&await s}));const Y=N,$=L,Z="attributes",Q=globalThis.browser,X=globalThis.document,ee=globalThis.MutationObserver,te=(e,t,s)=>globalThis.addEventListener(e,t,s),se=(e,t,s)=>globalThis.removeEventListener(e,t,s),oe=new Map;async function ne(e){if(X.documentElement){oe.clear();const o=Math.max(X.documentElement.scrollHeight-1.5*X.documentElement.clientHeight,0),r=Math.max(X.documentElement.scrollWidth-1.5*X.documentElement.clientWidth,0);if(globalThis.scrollY<=o&&globalThis.scrollX<=r)return function(e){return new Promise((async o=>{let r;const a=new Set,l=new ee((async t=>{if((t=t.filter((e=>e.type==Z))).length){t.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(Y,e.target.src),e.target.addEventListener("load",d)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains($)})).length&&(r=!0,await re(l,e,u),a.size||await ie(l,e,u))}}));function d(e){const t=e.target;t.removeAttribute(Y),t.removeEventListener("load",d)}async function c(t){r=!0,await re(l,e,u),await ie(l,e,u),t.detail&&a.add(t.detail)}async function m(t){await re(l,e,u),await ie(l,e,u),a.delete(t.detail),a.size||await ie(l,e,u)}function u(e){l.disconnect(),se(t,c),se(s,m),o(e)}await le("idleTimeout",(()=>{r||(de("loadTimeout"),de("maxTimeout"),ae(l,e,u))}),2*e.loadDeferredImagesMaxIdleTime),await re(l,e,u),l.observe(X,{subtree:!0,childList:!0,attributes:!0}),te(t,c),te(s,m),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-filez-block-cookies-start")),e.loadDeferredImagesBlockStorage&&n(new i("single-filez-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-filez-load-deferred-images-keep-zoom-level-start")):n(new i("single-filez-load-deferred-images-start"))}(e)}))}(e)}}async function ie(e,t,s){await le("loadTimeout",(()=>ae(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function re(e,t,s){await le("maxTimeout",(async()=>{await de("loadTimeout"),await ae(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function ae(e,t,s){await de("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-filez-block-cookies-end")),e.loadDeferredImagesBlockStorage&&n(new i("single-filez-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-filez-load-deferred-images-keep-zoom-level-end")):n(new i("single-filez-load-deferred-images-end"))}(t),await le("endTimeout",(async()=>{await de("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function le(e,t,s){if(Q&&Q.runtime&&Q.runtime.sendMessage){if(!oe.get(e)||!oe.get(e).pending){const o={callback:t,pending:!0};oe.set(e,o),await Q.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s}),o.pending=!1}}else{const o=oe.get(e);o&&globalThis.clearTimeout(o),oe.set(e,t),globalThis.setTimeout(t,s)}}async function de(e){if(Q&&Q.runtime&&Q.runtime.sendMessage)await Q.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e});else{const t=oe.get(e);oe.delete(e),t&&globalThis.clearTimeout(t)}}Q&&Q.runtime&&Q.runtime.onMessage&&Q.runtime.onMessage.addListener&&Q.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=oe.get(e.type);t&&(oe.delete(e.type),t.callback())}}));const ce={ON_BEFORE_CAPTURE_EVENT_NAME:h,ON_AFTER_CAPTURE_EVENT_NAME:p,WIN_ID_ATTRIBUTE_NAME:"data-single-filez-win-id",waitForUserScript:U,preProcessDoc:D,serialize:K,postProcessDoc:j,getShadowRoot:H},me="__sfz_frameTree__::",ue='iframe, frame, object[type="text/html"][data]',fe="singlefile.frameTree.initRequest",ge="singlefile.frameTree.ackInitRequest",he="singlefile.frameTree.cleanupRequest",pe="singlefile.frameTree.initResponse",be=".",Ee=globalThis.window==globalThis.top,we=globalThis.browser,ye=globalThis.top,Te=globalThis.MessageChannel,Ae=globalThis.document,Ie=new Map;let ve;function Se(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}async function Re(e){const t=ce.waitForUserScript,s=e.sessionId;Ee||(ve=globalThis.frameId=e.windowId),Ce(Ae,e.options,ve,s),Ee||(e.options.userScriptEnabled&&t.callback&&await t.callback(ce.ON_BEFORE_CAPTURE_EVENT_NAME),ze({frames:[Pe(Ae,globalThis,ve,e.options)],sessionId:s,requestedFrameId:Ae.documentElement.dataset.requestedFrameId&&ve}),e.options.userScriptEnabled&&t.callback&&await t.callback(ce.ON_AFTER_CAPTURE_EVENT_NAME),delete Ae.documentElement.dataset.requestedFrameId)}function Fe(e){const t=e.sessionId;Me(xe(Ae),e.windowId,t)}function Ne(e){e.frames.forEach((t=>_e("responseTimeouts",e.sessionId,t.windowId)));const t=Ie.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.url=e.url,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(be).length-e.windowId.split(be).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function Ce(e,t,s,o){const n=xe(e);!function(e,t,s,o,n){const i=[];let r;Ie.get(n)?r=Ie.get(n).requestTimeouts:(r={},Ie.set(n,{requestTimeouts:r}));t.forEach(((e,t)=>{const s=o+be+t;e.setAttribute(ce.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),ze({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+be+t;try{qe(e.contentWindow,{method:fe,windowId:i,sessionId:n,options:s})}catch(e){}r[i]=globalThis.setTimeout((()=>ze({frames:[{windowId:i,processed:!0}],sessionId:n})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const r=o+be+t;let a;try{a=e.contentDocument}catch(e){}if(a)try{const t=e.contentWindow;t.stop(),_e("requestTimeouts",n,r),Ce(a,s,r,n),i.push(Pe(a,t,r,s))}catch(e){i.push({windowId:r,processed:!0})}})),ze({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function _e(e,t,s){const o=Ie.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function ke(e,t){const s=Ie.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>ze({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Me(e,t,s){e.forEach(((e,o)=>{const n=t+be+o;e.removeAttribute(ce.WIN_ID_ATTRIBUTE_NAME);try{qe(e.contentWindow,{method:he,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+be+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Me(xe(i),n,s)}catch(e){}}))}function ze(e){e.method=pe;try{ye.singlefile.processors.frameTree.initResponse(e)}catch(t){qe(ye,e,!0)}}function qe(e,t,s){if(e==ye&&we&&we.runtime&&we.runtime.sendMessage)we.runtime.sendMessage(t);else if(s){const s=new Te;e.postMessage(me+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(me+JSON.stringify(t),"*")}function Pe(e,t,s,o){const n=ce.preProcessDoc(e,t,o),i=ce.serialize(e);ce.postProcessDoc(e,n.markedElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],url:e.location.href,title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function xe(e){let t=Array.from(e.querySelectorAll(ue));return e.querySelectorAll("*").forEach((e=>{const s=ce.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(ue)))})),t}Ee&&(ve="0",we&&we.runtime&&we.runtime.onMessage&&we.runtime.onMessage.addListener&&we.runtime.onMessage.addListener((e=>e.method==pe?(Ne(e),Promise.resolve({})):e.method==ge?(_e("requestTimeouts",e.sessionId,e.windowId),ke(e.sessionId,e.windowId),Promise.resolve({})):void 0))),((e,t,s)=>{globalThis.addEventListener(e,t,s)})("message",(async e=>{if("string"==typeof e.data&&e.data.startsWith(me)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(me.length));if(t.method==fe)e.source&&qe(e.source,{method:ge,windowId:t.windowId,sessionId:t.sessionId}),Ee||(globalThis.stop(),t.options.loadDeferredImages&&ne(t.options),await Re(t));else if(t.method==ge)_e("requestTimeouts",t.sessionId,t.windowId),ke(t.sessionId,t.windowId);else if(t.method==he)Fe(t);else if(t.method==pe&&Ie.get(t.sessionId)){e.ports[0].onmessage=e=>Ne(e.data)}}}),!0);const Le={frameTree:Object.freeze({__proto__:null,getAsync:function(e){const t=Se();return e=JSON.parse(JSON.stringify(e)),new Promise((s=>{Ie.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:e=>{e.sessionId=t,s(e)}}),Re({windowId:ve,sessionId:t,options:e})}))},getSync:function(e){const t=Se();e=JSON.parse(JSON.stringify(e)),Ie.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),function(e){const t=ce.waitForUserScript,s=e.sessionId;Ee||(ve=globalThis.frameId=e.windowId);Ce(Ae,e.options,ve,s),Ee||(e.options.userScriptEnabled&&t.callback&&t.callback(ce.ON_BEFORE_CAPTURE_EVENT_NAME),ze({frames:[Pe(Ae,globalThis,ve,e.options)],sessionId:s,requestedFrameId:Ae.documentElement.dataset.requestedFrameId&&ve}),e.options.userScriptEnabled&&t.callback&&t.callback(ce.ON_AFTER_CAPTURE_EVENT_NAME),delete Ae.documentElement.dataset.requestedFrameId)}({windowId:ve,sessionId:t,options:e});const s=Ie.get(t).frames;return s.sessionId=t,s},cleanup:function(e){Ie.delete(e),Fe({windowId:ve,sessionId:e,options:{sessionId:e}})},initResponse:Ne,TIMEOUT_INIT_REQUEST_MESSAGE:750})},Oe={ON_BEFORE_CAPTURE_EVENT_NAME:h,ON_AFTER_CAPTURE_EVENT_NAME:p,waitForUserScript:U,preProcessDoc:D,postProcessDoc:j,serialize:K};e.helper=Oe,e.processors=Le,Object.defineProperty(e,"__esModule",{value:!0})}));