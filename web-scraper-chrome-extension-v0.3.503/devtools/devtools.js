!function(e){var r={};function s(n){if(r[n])return r[n].exports;var g=r[n]={i:n,l:!1,exports:{}};return e[n].call(g.exports,g,g.exports,s),g.l=!0,g.exports}s.m=e,s.c=r,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var g in e)s.d(n,g,function(r){return e[r]}.bind(null,g));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s(s.s=255)}({20:function(e,r,s){var n,g,a;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,g=[e],void 0===(a="function"==typeof(n=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class g extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,s)=>(...n)=>{e.runtime.lastError?r.reject(e.runtime.lastError):s.singleCallbackArg||n.length<=1&&!1!==s.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},t=e=>1==e?"argument":"arguments",m=(e,r,s)=>new Proxy(r,{apply:(r,n,g)=>s.call(n,e,...g)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const o=(e,r={},s={})=>{let n=Object.create(null),g={has:(r,s)=>s in e||s in n,get(g,A,l){if(A in n)return n[A];if(!(A in e))return;let c=e[A];if("function"==typeof c)if("function"==typeof r[A])c=m(e,e[A],r[A]);else if(i(s,A)){let r=((e,r)=>function(s,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise((g,t)=>{if(r.fallbackToNoCallback)try{s[e](...n,a({resolve:g,reject:t},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",a),s[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,g()}else r.noCallback?(s[e](...n),g()):s[e](...n,a({resolve:g,reject:t},r))})})(A,s[A]);c=m(e,e[A],r)}else c=c.bind(e);else if("object"==typeof c&&null!==c&&(i(r,A)||i(s,A)))c=o(c,r[A],s[A]);else{if(!i(s,"*"))return Object.defineProperty(n,A,{configurable:!0,enumerable:!0,get:()=>e[A],set(r){e[A]=r}}),c;c=o(c,r[A],s["*"])}return n[A]=c,c},set:(r,s,g,a)=>(s in n?n[s]=g:e[s]=g,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(n,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},A=Object.create(e);return new Proxy(A,g)},A=e=>({addListener(r,s,...n){r.addListener(e.get(s),...n)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}});let l=!1;const c=new g(e=>"function"!=typeof e?e:function(r,n,g){let a,t,m=!1,i=new Promise(e=>{a=function(r){l||(console.warn(s,(new Error).stack),l=!0),m=!0,e(r)}});try{t=e(r,n,a)}catch(e){t=Promise.reject(e)}const o=!0!==t&&(A=t)&&"object"==typeof A&&"function"==typeof A.then;var A;if(!0!==t&&!o&&!m)return!1;const c=e=>{e.then(e=>{g(e)},e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",g({__mozWebExtensionPolyfillReject__:!0,message:r})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return c(o?t:i),!0}),x=({reject:s,resolve:n},g)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():s(e.runtime.lastError):g&&g.__mozWebExtensionPolyfillReject__?s(new Error(g.message)):n(g)},u=(e,r,s,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise((e,r)=>{const g=x.bind(null,{resolve:e,reject:r});n.push(g),s.sendMessage(...n)})},d={runtime:{onMessage:A(c),onMessageExternal:A(c),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},f={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":f},services:{"*":f},websites:{"*":f}},o(e,d,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser})?n.apply(r,g):n)||(e.exports=a)},255:function(e,r,s){"use strict";s.r(r);var n=s(20);"undefined"!=typeof InstallTrigger?n.devtools.panels.create("Web Scraper","../icons/icon48.png","./panel.html"):n.devtools.panels.create("Web Scraper","icons/icon48.png","devtools/panel.html")}});