(this["webpackJsonpreal-estate"]=this["webpackJsonpreal-estate"]||[]).push([[5],{100:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=n.join(","),a="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function u(e,t){t=t||{};var n,u,c,i=[],f=[],d=e.querySelectorAll(r);for(t.includeContainer&&a.call(e,r)&&(d=Array.prototype.slice.apply(d)).unshift(e),n=0;n<d.length;n++)o(u=d[n])&&(0===(c=l(u))?i.push(u):f.push({documentOrder:n,tabIndex:c,node:u}));return f.sort(s).map((function(e){return e.node})).concat(i)}function o(e){return!(!c(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||l(e)<0)}function c(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}u.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,r)&&o(e)},u.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,i)&&c(e)};var i=n.concat("iframe").join(",");function l(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function s(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=u},79:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(79);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var r=n(0);function a(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"}}]})(e)}function u(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"}}]})(e)}function o(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"}},{tag:"path",attr:{d:"M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"}}]})(e)}function c(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"}},{tag:"path",attr:{d:"M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"}}]})(e)}},93:function(e,t,n){"use strict";var r=n(1);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e})),t};t.a=function(e){var t=void 0===e?{}:e,n=t.requestOptions,o=t.debounce,c=void 0===o?200:o,i=t.cache,l=void 0===i?86400:i,s=t.googleMaps,f=t.callbackName,d=t.defaultValue,v=void 0===d?"":d,b=t.initOnMount,p=void 0===b||b,h=Object(r.useState)(!1),g=h[0],O=h[1],m=Object(r.useState)(v),j=m[0],E=m[1],y=Object(r.useState)({loading:!1,status:"",data:[]}),w=y[0],C=y[1],x=Object(r.useRef)(null),S=u(n),R=u(s),I=Object(r.useCallback)((function(){var e;if(!x.current){var t=window.google,n=R.current,r=(null==n?void 0:n.places)||(null==t||null==(e=t.maps)?void 0:e.places);r?(x.current=new r.AutocompleteService,O(!0)):console.error("\ud83d\udca1 use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library")}}),[]),T=Object(r.useCallback)((function(){C({loading:!1,status:"",data:[]})}),[]),A=Object(r.useCallback)(function(e,t){var n;return function(){for(var r=this,a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];null!==n&&(clearTimeout(n),n=null),n=setTimeout((function(){return e.apply(r,u)}),t)}}((function(e){if(e){C((function(e){return a({},e,{loading:!0})}));var t=JSON.parse(sessionStorage.getItem("upa")||"{}");l&&(t=Object.keys(t).reduce((function(e,n){return t[n].maxAge-Date.now()>=0&&(e[n]=t[n]),e}),{}))[e]?C({loading:!1,status:"OK",data:t[e].data}):x.current.getPlacePredictions(a({},S.current,{input:e}),(function(n,r){if(C({loading:!1,status:r,data:n||[]}),l&&"OK"===r){t[e]={data:n,maxAge:Date.now()+1e3*l};try{sessionStorage.setItem("upa",JSON.stringify(t))}catch(a){}}}))}else T()}),c),[c,T]),k=Object(r.useCallback)((function(e,t){void 0===t&&(t=!0),E(e),x.current&&t&&A(e)}),[A]);return Object(r.useEffect)((function(){if(!p)return function(){return null};var e=window.google;return R.current||null!=e&&e.maps||!f?I():window[f]=I,function(){window[f]&&delete window[f]}}),[f,I]),{ready:g,value:j,suggestions:w,setValue:k,clearSuggestions:T,init:I}}},94:function(e,t,n){},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return ye})),n.d(t,"b",(function(){return we})),n.d(t,"c",(function(){return xe})),n.d(t,"d",(function(){return Se})),n.d(t,"e",(function(){return Ce}));var r=n(1);n(12);function a(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var u=a()?r.useLayoutEffect:r.useEffect;function o(e){return a()?e?e.ownerDocument:document:null}function c(e,t){return Object(r.createContext)(t)}function i(e){return!(!e||"[object Function]"!={}.toString.call(e))}function l(){}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function d(e,t){if(null!=e)if(i(e))e(t);else try{e.current=t}catch(n){throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(r.useCallback)((function(e){for(var n,r=f(t);!(n=r()).done;){d(n.value,e)}}),t)}function b(e,t){return function(n){if(e&&e(n),!n.defaultPrevented)return t(n)}}function p(){var e=Object(r.useState)(Object.create(null))[1];return Object(r.useCallback)((function(){e(Object.create(null))}),[])}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){void 0===t&&(t={});return c(0,h({descendants:[],registerDescendant:l,unregisterDescendant:l},t))}function O(e,t,n){var a=p(),o=Object(r.useContext)(t),c=o.registerDescendant,i=o.unregisterDescendant,l=o.descendants,s=null!=n?n:l.findIndex((function(t){return t.element===e.element})),f=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}(l),d=l.some((function(e,t){var n;return e.element!==(null==f||null==(n=f[t])?void 0:n.element)}));return u((function(){return e.element||a(),c(h({},e,{index:s})),function(){return i(e.element)}}),[a,s,c,d,i].concat(Object.values(e))),s}function m(e){var t=e.context,n=e.children,a=e.items,u=e.set,o=Object(r.useCallback)((function(e){var t=e.element,n=e.index,r=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["element","index"]);t&&u((function(e){var a;if(null!=n)a=[].concat(e,[h({},r,{element:t,index:n})]);else if(0===e.length)a=[].concat(e,[h({},r,{element:t,index:0})]);else if(e.find((function(e){return e.element===t})))a=e;else{var u=e.findIndex((function(e){return!(!e.element||!t)&&Boolean(e.element.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)})),o=h({},r,{element:t,index:u});a=-1===u?[].concat(e,[o]):[].concat(e.slice(0,u),[o],e.slice(u))}return a.map((function(e,t){return h({},e,{index:t})}))}))}),[]),c=Object(r.useCallback)((function(e){e&&u((function(t){return t.filter((function(t){return e!==t.element}))}))}),[]);return Object(r.createElement)(t.Provider,{value:Object(r.useMemo)((function(){return{descendants:a,registerDescendant:o,unregisterDescendant:c}}),[a,o,c])},n)}var j=!1,E=0,y=function(){return++E};var w=n(13),C=function(e){var t=e.children,n=e.type,a=void 0===n?"reach-portal":n,o=Object(r.useRef)(null),c=Object(r.useRef)(null),i=p();return u((function(){if(o.current){var e=o.current.ownerDocument;return c.current=null==e?void 0:e.createElement(a),e.body.appendChild(c.current),i(),function(){c.current&&c.current.ownerDocument&&c.current.ownerDocument.body.removeChild(c.current)}}}),[a,i]),c.current?Object(w.createPortal)(t,c.current):Object(r.createElement)("span",{ref:o})};var x,S=["bottom","height","left","right","top","width"],R=new Map,I=function e(){var t=[];R.forEach((function(e,n){var r,a,u=n.getBoundingClientRect();r=u,a=e.rect,void 0===r&&(r={}),void 0===a&&(a={}),S.some((function(e){return r[e]!==a[e]}))&&(e.rect=u,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),x=window.requestAnimationFrame(e)};var T=function(e,t){return{observe:function(){var n=0===R.size;R.has(e)?R.get(e).callbacks.push(t):R.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),n&&I()},unobserve:function(){var n=R.get(e);if(n){var r=n.callbacks.indexOf(t);r>=0&&n.callbacks.splice(r,1),n.callbacks.length||R.delete(e),R.size||cancelAnimationFrame(x)}}}};function A(e,t,n){var a,o,c;"boolean"===typeof t?a=t:(a=null==(c=null==t?void 0:t.observe)||c,o=null==t?void 0:t.onChange);i(n)&&(o=n);var l=Object(r.useState)(e.current),s=l[0],f=l[1],d=Object(r.useRef)(!1),v=Object(r.useRef)(!1),b=Object(r.useState)(null),p=b[0],h=b[1],g=Object(r.useRef)(o),O=Object(r.useCallback)((function(e){g.current&&g.current(e)}),[]);return u((function(){g.current=o,e.current!==s&&f(e.current)})),u((function(){s&&!d.current&&(d.current=!0,h(s.getBoundingClientRect()))}),[s]),u((function(){var t,n=s;return v.current||(v.current=!0,n=e.current),n?(t=T(n,(function(e){O(e),h(e)})),a&&t.observe(),r):r;function r(){t&&t.unobserve()}}),[a,s,e,O]),p}var k=n(100),L=n.n(k);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=Object(r.forwardRef)((function(e,t){return Object(r.createElement)(C,null,Object(r.createElement)(P,N({ref:t},e)))}));var P=Object(r.forwardRef)((function(e,t){var n=e.as,a=void 0===n?"div":n,u=e.targetRef,c=e.position,i=void 0===c?H:c,l=e.unstable_observableRefs,s=void 0===l?[]:l,f=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["as","targetRef","position","unstable_observableRefs"]),d=Object(r.useRef)(null),b=A(d,{observe:!f.hidden}),p=A(u,{observe:!f.hidden}),h=v(d,t);return function(e,t){var n=o(e.current);function a(e){"Tab"===e.key&&t.current&&0===L()(t.current).length||("Tab"===e.key&&e.shiftKey?f(e)?d(e):v(e)?b(e):h(e)&&O():"Tab"===e.key&&(c()?i(e):l()?s(e):p(e)&&O()))}function u(){var r=L()(n),a=r&&e.current?r.indexOf(e.current):-1,u=r&&r[a+1];return(!t.current||!t.current.contains(u||null))&&u}function c(){return!!e.current&&e.current===n.activeElement}function i(e){var n=t.current&&L()(t.current);n&&n[0]&&(e.preventDefault(),n[0].focus())}function l(){if(!!t.current&&t.current.contains(n.activeElement||null)){var e=t.current&&L()(t.current);return Boolean(e&&e[e.length-1]===n.activeElement)}return!1}function s(e){var t=u();t&&(e.preventDefault(),t.focus())}function f(e){if(e.shiftKey){var t=u();return e.target===t}}function d(e){var n=t.current&&L()(t.current),r=n&&n[n.length-1];r&&(e.preventDefault(),r.focus())}function v(e){var n=t.current&&L()(t.current);return!!n&&(0!==n.length&&e.target===n[0])}function b(t){var n;t.preventDefault(),null==(n=e.current)||n.focus()}function p(e){var r=t.current?L()(n).filter((function(e){return!t.current.contains(e)})):null;return!!r&&e.target===r[r.length-1]}function h(e){return e.target===L()(n)[0]}Object(r.useEffect)((function(){return n.addEventListener("keydown",a),function(){n.removeEventListener("keydown",a)}}),[]);var g=[];function O(){var e=t.current&&L()(t.current);e&&(e.forEach((function(e){g.push([e,e.tabIndex]),e.tabIndex=-1})),n.addEventListener("focusin",m))}function m(){n.removeEventListener("focusin",m),g.forEach((function(e){var t=e[0],n=e[1];t.tabIndex=n}))}}(u,d),Object(r.createElement)(a,N({"data-reach-popover":"",ref:h},f,{style:N({position:"absolute"},_.apply(void 0,[i,p,b].concat(s)),f.style)}))}));function _(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),u=3;u<r;u++)a[u-3]=arguments[u];return n?e.apply(void 0,[t,n].concat(a.map((function(e){return e.current})))):{visibility:"hidden"}}function B(e,t,n){return{top:n?e.top-t.height+window.pageYOffset+"px":e.top+e.height+window.pageYOffset+"px"}}var H=function(e,t){if(!e||!t)return{};var n=V(e,t),r=n.directionRight,a=n.directionUp;return N({left:r?e.right-t.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px"},B(e,t,a))},U=function(e,t){if(!e||!t)return{};var n=V(e,t).directionUp;return N({width:e.width,left:e.left},B(e,t,n))};function V(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=0);var a={top:e.top-t.height<0,right:window.innerWidth<e.left+t.width-n,bottom:window.innerHeight<e.bottom+t.height-r,left:e.left+e.width-t.width<0};return{directionRight:a.right&&!a.left,directionLeft:a.left&&!a.right,directionUp:a.bottom&&!a.top,directionDown:a.top&&!a.bottom}}function G(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e){return e.chunks.sort((function(e,t){return e.start-t.start})).reduce((function(e,t){if(0===e.length)return[t];var n=e.pop();if(t.start<=n.end){var r=Math.max(n.end,t.end);e.push({highlight:!1,start:n.start,end:r})}else e.push(n,t);return e}),[])}function W(e){var t=e.autoEscape,n=e.caseSensitive,r=e.sanitize,a=void 0===r?z:r,u=e.searchWords,o=e.textToHighlight;return o=a(o||""),u.filter((function(e){return e})).reduce((function(e,r){r=a(r),t&&(r=r.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"));for(var u,c=new RegExp(r,n?"g":"gi");u=c.exec(o||"");){var i=u.index,l=c.lastIndex;l>i&&e.push({highlight:!1,start:i,end:l}),u.index===c.lastIndex&&c.lastIndex++}return e}),[])}function K(e){var t=e.chunksToHighlight,n=e.totalLength,r=[];if(0===t.length)u(0,n,!1);else{var a=0;t.forEach((function(e){u(a,e.start,!1),u(e.start,e.end,!0),a=e.end})),u(a,n,!1)}return r;function u(e,t,n){t-e>0&&r.push({start:e,end:t,highlight:n})}}function z(e){return e}var q,$,J,Y,X,Q={combineChunks:F,fillInChunks:K,findAll:function(e){var t=e.autoEscape,n=e.caseSensitive,r=void 0!==n&&n,a=e.findChunks,u=void 0===a?W:a,o=e.sanitize,c=e.searchWords,i=e.textToHighlight;return K({chunksToHighlight:F({chunks:u({autoEscape:t,caseSensitive:r,sanitize:o,searchWords:c,textToHighlight:i})}),totalLength:i?i.length:0})},findChunks:W},Z="IDLE",ee="SUGGESTING",te="NAVIGATING",ne="INTERACTING",re="CLEAR",ae="CHANGE",ue="INITIAL_CHANGE",oe="NAVIGATE",ce="SELECT_WITH_KEYBOARD",ie="SELECT_WITH_CLICK",le="ESCAPE",se="BLUR",fe="INTERACT",de="FOCUS",ve="OPEN_WITH_BUTTON",be="CLOSE_WITH_BUTTON",pe={initial:Z,states:(X={},X.IDLE={on:(q={},q.BLUR=Z,q.CLEAR=Z,q.CHANGE=ee,q.INITIAL_CHANGE=Z,q.FOCUS=ee,q.NAVIGATE=te,q.OPEN_WITH_BUTTON=ee,q)},X[ee]={on:($={},$.CHANGE=ee,$.FOCUS=ee,$.NAVIGATE=te,$.CLEAR=Z,$.ESCAPE=Z,$.BLUR=Z,$.SELECT_WITH_CLICK=Z,$.INTERACT=ne,$.CLOSE_WITH_BUTTON=Z,$)},X[te]={on:(J={},J.CHANGE=ee,J.FOCUS=ee,J.CLEAR=Z,J.BLUR=Z,J.ESCAPE=Z,J.NAVIGATE=te,J.SELECT_WITH_CLICK=Z,J.SELECT_WITH_KEYBOARD=Z,J.CLOSE_WITH_BUTTON=Z,J.INTERACT=ne,J)},X[ne]={on:(Y={},Y.CLEAR=Z,Y.CHANGE=ee,Y.FOCUS=ee,Y.BLUR=Z,Y.ESCAPE=Z,Y.NAVIGATE=te,Y.CLOSE_WITH_BUTTON=Z,Y.SELECT_WITH_CLICK=Z,Y)},X)},he=function(e,t){var n=M({},e,{lastEventType:t.type});switch(t.type){case ae:case ue:return M({},n,{navigationValue:null,value:t.value});case oe:case ve:return M({},n,{navigationValue:Oe(n,t)});case re:return M({},n,{value:"",navigationValue:null});case se:case le:return M({},n,{navigationValue:null});case ie:return M({},n,{value:t.value,navigationValue:null});case ce:return M({},n,{value:e.navigationValue,navigationValue:null});case be:return M({},n,{navigationValue:null});case fe:return n;case de:return M({},n,{navigationValue:Oe(n,t)});default:return n}};function ge(e){return[ee,te,ne].includes(e)}function Oe(e,t){return t.value?t.value:t.persistSelection?e.value:null}var me=g(),je=c(0,{}),Ee=c(0,{}),ye=Object(r.forwardRef)((function(e,t){var n,a=e.onSelect,o=e.openOnFocus,c=void 0!==o&&o,s=e.children,f=e.as,d=void 0===f?"div":f,v=e["aria-label"],b=e["aria-labelledby"],p=G(e,["onSelect","openOnFocus","children","as","aria-label","aria-labelledby"]),h=Object(r.useState)([]),g=h[0],O=h[1],E=Object(r.useRef)(),w=Object(r.useRef)(),C=Object(r.useRef)(),x=Object(r.useRef)(),S=Object(r.useRef)(),R=function(e,t,n){var a=Object(r.useState)(e.initial),u=a[0],o=a[1],c=Object(r.useReducer)(t,n),i=c[0],l=c[1];return[u,i,function(t,n){void 0===n&&(n={});var r=e.states[u],a=r&&r.on[t];if(a)return l(M({type:t,state:u,nextState:u},n)),void o(a)}]}(pe,he,{value:"",navigationValue:null}),I=R[0],T=R[1],A=R[2];!function(e,t){u((function(){e!==oe&&e!==le&&e!==ie&&e!==ve||t.current.focus()}),[t,e])}(T.lastEventType,E);var k=function(e){var t=e||(j?y():null),n=Object(r.useState)(t),a=n[0],o=n[1];return u((function(){null===a&&o(y())}),[]),Object(r.useEffect)((function(){!1===j&&(j=!0)}),[]),null!=a?String(a):void 0}(p.id),L=k?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).join("--")}("listbox",k):"listbox",N={ariaLabel:v,ariaLabelledby:b,autocompletePropRef:x,buttonRef:C,comboboxId:k,data:T,inputRef:E,isExpanded:ge(I),listboxId:L,onSelect:a||l,openOnFocus:c,persistSelectionRef:S,popoverRef:w,state:I,transition:A};return Object(r.createElement)(m,{context:me,items:g,set:O},Object(r.createElement)(je.Provider,{value:N},Object(r.createElement)(d,M({},p,{"data-reach-combobox":"","data-state":ke(I),ref:t}),i(s)?s({id:k,isExpanded:ge(I),navigationValue:null!=(n=T.navigationValue)?n:null,state:I}):s)))}));var we=Object(r.forwardRef)((function(e,t){var n=e.as,a=void 0===n?"input":n,o=e.selectOnClick,c=void 0!==o&&o,i=e.autocomplete,l=void 0===i||i,s=e.onClick,f=e.onChange,d=e.onKeyDown,p=e.onBlur,h=e.onFocus,g=e.value,O=G(e,["as","selectOnClick","autocomplete","onClick","onChange","onKeyDown","onBlur","onFocus","value"]),m=Object(r.useRef)(g).current,j=Object(r.useRef)(!1);!function(e,t){var n=Object(r.useRef)(!1);Object(r.useEffect)((function(){n.current?e():n.current=!0}),t)}((function(){j.current=!0}),[g]);var E=Object(r.useContext)(je),y=E.data,w=y.navigationValue,C=y.value,x=y.lastEventType,S=E.inputRef,R=E.state,I=E.transition,T=E.listboxId,A=E.autocompletePropRef,k=E.openOnFocus,L=E.isExpanded,N=E.ariaLabel,D=E.ariaLabelledby,P=E.persistSelectionRef,_=v(S,t),B=Object(r.useRef)(!1),H=Ie(),U=Te(),V=null!=g;u((function(){A.current=l}),[l,A]);var F=Object(r.useCallback)((function(e){""===e.trim()?I(re):e!==m||j.current?I(ae,{value:e}):I(ue,{value:e})}),[m,I]);Object(r.useEffect)((function(){!V||g===C||""===g.trim()&&""===(C||"").trim()||F(g)}),[g,F,V,C]);var W=!l||R!==te&&R!==ne?g||C:w||g||C;return Object(r.createElement)(a,M({"aria-activedescendant":w?String(Ae(w)):void 0,"aria-autocomplete":"both","aria-controls":T,"aria-expanded":L,"aria-haspopup":"listbox","aria-label":N,"aria-labelledby":N?void 0:D,role:"combobox"},O,{"data-reach-combobox-input":"","data-state":ke(R),ref:_,onBlur:b(p,U),onChange:b(f,(function(e){var t=e.target.value;V||F(t)})),onClick:b(s,(function(){B.current&&(B.current=!1,S.current.select())})),onFocus:b(h,(function(){c&&(B.current=!0),k&&x!==ie&&I(de,{persistSelection:P.current})})),onKeyDown:b(d,H),value:W||""}))}));var Ce=Object(r.forwardRef)((function(e,t){var n=e.as,a=void 0===n?"div":n,u=e.children,o=e.portal,c=void 0===o||o,i=e.onKeyDown,l=e.onBlur,s=e.position,f=void 0===s?U:s,d=G(e,["as","children","portal","onKeyDown","onBlur","position"]),p=Object(r.useContext)(je),h=p.popoverRef,g=p.inputRef,O=p.isExpanded,m=p.state,j=v(h,t),E=Ie(),y=Te(),w={"data-reach-combobox-popover":"","data-state":ke(m),onKeyDown:b(i,E),onBlur:b(l,y),hidden:!O,tabIndex:-1,children:u};return c?Object(r.createElement)(D,M({as:a},d,{ref:j,position:f,targetRef:g},w)):Object(r.createElement)(a,M({ref:j},d,w))}));var xe=Object(r.forwardRef)((function(e,t){var n=e.persistSelection,a=void 0!==n&&n,u=e.as,o=void 0===u?"ul":u,c=G(e,["persistSelection","as"]),i=Object(r.useContext)(je),l=i.persistSelectionRef,s=i.listboxId;return a&&(l.current=!0),Object(r.createElement)(o,M({role:"listbox"},c,{ref:t,"data-reach-combobox-list":"",id:s}))}));var Se=Object(r.forwardRef)((function(e,t){var n=e.as,a=void 0===n?"li":n,u=e.children,o=e.value,c=e.onClick,l=G(e,["as","children","value","onClick"]),s=Object(r.useContext)(je),f=s.onSelect,d=s.data.navigationValue,p=s.transition,h=Object(r.useRef)(null),g=v(t,h),m=O({element:h.current,value:o},me),j=d===o;return Object(r.createElement)(Ee.Provider,{value:{value:o,index:m}},Object(r.createElement)(a,M({"aria-selected":j,role:"option"},l,{"data-reach-combobox-option":"",ref:g,id:String(Ae(o)),"data-highlighted":j?"":void 0,tabIndex:-1,onClick:b(c,(function(){f&&f(o),p(ie,{value:o})}))}),u?i(u)?u({value:o,index:m}):u:Object(r.createElement)(Re,null)))}));function Re(){var e=Object(r.useContext)(Ee).value,t=Object(r.useContext)(je).data.value,n=Object(r.useMemo)((function(){return Q.findAll({searchWords:(n=t||"",String(n).replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")).split(/\s+/),textToHighlight:e});var n}),[t,e]);return Object(r.createElement)(r.Fragment,null,n.length?n.map((function(t,n){var a=e.slice(t.start,t.end);return Object(r.createElement)("span",{key:n,"data-reach-combobox-option-text":"","data-user-value":!!t.highlight||void 0,"data-suggested-value":!t.highlight||void 0},a)})):e)}function Ie(){var e,t=Object(r.useContext)(je),n=t.data.navigationValue,a=t.onSelect,u=t.state,o=t.transition,c=t.autocompletePropRef,i=t.persistSelectionRef,l=(e=me,Object(r.useContext)(e).descendants);return function(e){var t=l.findIndex((function(e){return e.value===n}));function r(){return l[0]}function s(){return l[l.length-1]}switch(e.key){case"ArrowDown":if(e.preventDefault(),!l||!l.length)return;if(u===Z)o(oe,{persistSelection:i.current});else{var f=t===l.length-1?c.current?null:r():l[(t+1)%l.length];o(oe,{value:f?f.value:null})}break;case"ArrowUp":if(e.preventDefault(),!l||0===l.length)return;if(u===Z)o(oe);else{var d=0===t?c.current?null:s():-1===t?s():l[(t-1+l.length)%l.length];o(oe,{value:d?d.value:null})}break;case"Home":case"PageUp":if(e.preventDefault(),!l||0===l.length)return;u===Z?o(oe):o(oe,{value:r().value});break;case"End":case"PageDown":if(e.preventDefault(),!l||0===l.length)return;u===Z?o(oe):o(oe,{value:s().value});break;case"Escape":u!==Z&&o(le);break;case"Enter":u===te&&null!==n&&(e.preventDefault(),a&&a(n),o(ce))}}}function Te(){var e=Object(r.useContext)(je),t=e.state,n=e.transition,a=e.popoverRef,u=e.inputRef,c=e.buttonRef,i=function(e){var t=Object(r.useRef)(!1),n=Object(r.useRef)();return t.current||(t.current=!0,n.current=e()),n}((function(){return new Set}));return Object(r.useEffect)((function(){return function(){i.current.forEach((function(e){return cancelAnimationFrame(e)}))}}),[i]),function(){var e=o(a.current);if(e){var r=requestAnimationFrame((function(){e.activeElement!==u.current&&e.activeElement!==c.current&&a.current&&(a.current.contains(e.activeElement)?t!==ne&&n(fe):n(se))}));i.current.add(r)}}}function Ae(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t}function ke(e){return e.toLowerCase()}}}]);
//# sourceMappingURL=5.d29ef544.chunk.js.map