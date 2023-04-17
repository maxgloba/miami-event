/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{267:function(e,t,n){"use strict";(function(e,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=void 0!==e&&"[object global]"==={}.toString.call(e);function l(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function f(element){return Boolean(element&&1===element.nodeType&&"nodeName"in element&&element.ownerDocument&&element.ownerDocument.defaultView)}function d(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function h(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(d(r))return"https://vimeo.com/".concat(r);if(h(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var m=void 0!==Array.prototype.indexOf,y="undefined"!=typeof window&&void 0!==window.postMessage;if(!(c||m&&y))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(object,e,t){Object.defineProperty?Object.defineProperty(object,e,{configurable:!0,writable:!0,value:t}):object[e]=t};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",c("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function c(e){return e+"_"+l()+"."+l()}function l(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var c=e[this._id];return c&&c[0]===e?(c[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:w);var k=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,r,o;o=function(){var e,t,r,o=Object.prototype.toString,c=void 0!==n?function(e){return n(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function l(e,n){r.add(e,n),t||(t=c(r.drain))}function f(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function d(){for(var i=0;i<this.chain.length;i++)h(this,1===this.state?this.chain[i].success:this.chain[i].failure,this.chain[i]);this.chain.length=0}function h(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=f(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function v(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=f(e))?l((function(){var r=new w(n);try{t.call(e,(function(){v.apply(r,arguments)}),(function(){m.apply(r,arguments)}))}catch(e){m.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&l(d,n))}catch(e){m.call(new w(n),e)}}}function m(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&l(d,t))}function y(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function w(e){this.def=e,this.triggered=!1}function k(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function E(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new k(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&l(d,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){v.call(t,e)}),(function(e){m.call(t,e)}))}catch(e){m.call(t,e)}}r=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,c){r=new o(t,c),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var T=e({},"constructor",E,!1);return E.prototype=T,e(T,"__NPO__",0,!1),e(E,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(E,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(E,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,c=Array(o),l=0;y(t,e,(function(e,t){c[e]=t,++l===o&&n(c)}),r)}))})),e(E,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");y(t,e,(function(e,t){n(t)}),r)}))})),E},(r=w)[t="Promise"]=r[t]||o(),e.exports&&(e.exports=r[t])})),E=new WeakMap;function T(e,t,n){var r=E.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),E.set(e.element,r)}function P(e,t){return(E.get(e.element)||{})[t]||[]}function _(e,t,n){var r=E.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],E.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),E.set(e.element,r),r[t]&&0===r[t].length}function F(e,t){var n=E.get(e);E.set(t,n),E.delete(e)}var M=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactiveparams","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function N(element){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M.reduce((function(e,param){var t=element.getAttribute("data-vimeo-".concat(param));return(t||""===t)&&(e[param]=""===t?1:t),e}),e)}function x(e,element){var html=e.html;if(!element)throw new TypeError("An element must be provided");if(null!==element.getAttribute("data-vimeo-initialized"))return element.querySelector("iframe");var div=document.createElement("div");return div.innerHTML=html,element.appendChild(div.firstChild),element.setAttribute("data-vimeo-initialized","true"),element.querySelector("iframe")}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},element=arguments.length>2?arguments[2]:void 0;return new Promise((function(n,r){if(!h(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var o="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var param in t)t.hasOwnProperty(param)&&(o+="&".concat(param,"=").concat(encodeURIComponent(t[param])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",o,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var t=JSON.parse(c.responseText);if(403===t.domain_status_code)return x(t,element),void r(new Error("“".concat(e,"” is not embeddable.")));n(t)}catch(e){r(e)}else r(new Error("“".concat(e,"” is not embeddable.")));else r(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()}))}function j(data){if("string"==typeof data)try{data=JSON.parse(data)}catch(e){return console.warn(e),{}}return data}function A(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function S(e,data){var param,t=[];if((data=j(data)).event){if("error"===data.event)P(e,data.data.method).forEach((function(t){var n=new Error(data.data.message);n.name=data.data.name,t.reject(n),_(e,data.data.method,t)}));t=P(e,"event:".concat(data.event)),param=data.data}else if(data.method){var n=function(e,t){var n=P(e,t);if(n.length<1)return!1;var r=n.shift();return _(e,t,r),r}(e,data.method);n&&(t.push(n),param=data.value)}t.forEach((function(t){try{if("function"==typeof t)return void t.call(e,param);t.resolve(param)}catch(e){}}))}var O=new WeakMap,I=new WeakMap,R={},V=function(){function e(element){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),window.jQuery&&element instanceof jQuery&&(element.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),element=element[0]),"undefined"!=typeof document&&"string"==typeof element&&(element=document.getElementById(element)),!f(element))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==element.nodeName){var iframe=element.querySelector("iframe");iframe&&(element=iframe)}if("IFRAME"===element.nodeName&&!h(element.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(O.has(element))return O.get(element);this._window=element.ownerDocument.defaultView,this.element=element,this.origin="*";var o=new k((function(e,r){if(t._onMessage=function(n){if(h(n.origin)&&t.element.contentWindow===n.source){"*"===t.origin&&(t.origin=n.origin);var data=j(n.data);if(data&&"error"===data.event&&data.data&&"ready"===data.data.method){var o=new Error(data.data.message);return o.name=data.data.name,void r(o)}var c=data&&"ready"===data.event,l=data&&"ping"===data.method;if(c||l)return t.element.setAttribute("data-ready","true"),void e();S(t,data)}},t._window.addEventListener("message",t._onMessage),"IFRAME"!==t.element.nodeName){var o=N(element,n);C(v(o),o,element).then((function(data){var iframe=x(data,element);return t.element=iframe,t._originalElement=element,F(element,iframe),O.set(t.element,t),data})).catch(r)}}));if(I.set(this,o),O.set(this.element,this),"IFRAME"===this.element.nodeName&&A(this,"ping"),R.isEnabled){var c=function(){return R.exit()};this.fullscreenchangeHandler=function(){R.isFullscreen?T(t,"event:exitFullscreen",c):_(t,"event:exitFullscreen",c),t.ready().then((function(){A(t,"fullscreenchange",R.isFullscreen)}))},R.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,c;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new k((function(r,o){return t.ready().then((function(){T(t,e,{resolve:r,reject:o}),A(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new k((function(n,r){return e=l(e,"get"),t.ready().then((function(){T(t,e,{resolve:n,reject:r}),A(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new k((function(r,o){if(e=l(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){T(n,e,{resolve:r,reject:o}),A(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===P(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),T(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");_(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=I.get(this)||new k((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return k.resolve(e)}},{key:"addCuePoint",value:function(time){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:time,data:data})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return R.isEnabled?R.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return R.isEnabled?R.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return R.isEnabled?k.resolve(R.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new k((function(t){if(I.delete(e),O.delete(e.element),e._originalElement&&(O.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var iframe=e.element.querySelector("iframe");iframe&&iframe.parentNode&&(iframe.parentNode.parentNode&&e._originalElement&&e._originalElement!==iframe.parentNode?iframe.parentNode.parentNode.removeChild(iframe.parentNode):iframe.parentNode.removeChild(iframe))}e._window.removeEventListener("message",e._onMessage),R.isEnabled&&R.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&o(t.prototype,n),c&&o(t,c),e}();c||(R=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,n=t.length,r={};i<n;i++)if((e=t[i])&&e[1]in document){for(i=0;i<e.length;i++)r[t[0][i]]=e[i];return r}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(element){return new Promise((function(t,r){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var c=(element=element||document.documentElement)[e.requestFullscreen]();c instanceof Promise&&c.then(o).catch(r)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var c=document[e.exitFullscreen]();c instanceof Promise&&c.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(element){try{if(null!==element.getAttribute("data-vimeo-defer"))return;var e=N(element);C(v(e),e,element).then((function(data){return x(data,element)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(h(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),i=0;i<n.length;i++)if(n[i].contentWindow===t.source){n[i].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}()),t.a=V}).call(this,n(44),n(184).setImmediate)}}]);