function rS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var iS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function b0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var So={},sS={get exports(){return So},set exports(t){So=t}},Uc={},C={},oS={get exports(){return C},set exports(t){C=t}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),aS=Symbol.for("react.portal"),lS=Symbol.for("react.fragment"),cS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),hS=Symbol.for("react.provider"),dS=Symbol.for("react.context"),fS=Symbol.for("react.forward_ref"),pS=Symbol.for("react.suspense"),mS=Symbol.for("react.memo"),gS=Symbol.for("react.lazy"),xg=Symbol.iterator;function yS(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function ws(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||N0}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A0(){}A0.prototype=ws.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||N0}var zf=Bf.prototype=new A0;zf.constructor=Bf;R0(zf,ws.prototype);zf.isPureReactComponent=!0;var Cg=Array.isArray,O0=Object.prototype.hasOwnProperty,Vf={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,r)&&!L0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:Vf.current}}function vS(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function _S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sg=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_S(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case aS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uu(o,0):r,Cg(i)?(n="",t!=null&&(n=t.replace(Sg,"$&/")+"/"),pl(i,e,n,"",function(c){return c})):i!=null&&(Hf(i)&&(i=vS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Uu(s,a);o+=pl(s,e,n,l,i)}else if(l=yS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Uu(s,a++),o+=pl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},ml={transition:null},ES={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Vf};Q.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=ws;Q.Fragment=lS;Q.Profiler=uS;Q.PureComponent=Bf;Q.StrictMode=cS;Q.Suspense=pS;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!L0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:dS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hS,_context:t},t.Consumer=t};Q.createElement=D0;Q.createFactory=function(t){var e=D0.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:fS,render:t}};Q.isValidElement=Hf;Q.lazy=function(t){return{$$typeof:gS,_payload:{_status:-1,_result:t},_init:wS}};Q.memo=function(t,e){return{$$typeof:mS,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ct.current.useCallback(t,e)};Q.useContext=function(t){return ct.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ct.current.useEffect(t,e)};Q.useId=function(){return ct.current.useId()};Q.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ct.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};Q.useRef=function(t){return ct.current.useRef(t)};Q.useState=function(t){return ct.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ct.current.useTransition()};Q.version="18.2.0";(function(t){t.exports=Q})(oS);const M0=b0(C),Gh=rS({__proto__:null,default:M0},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xS=C,CS=Symbol.for("react.element"),SS=Symbol.for("react.fragment"),kS=Object.prototype.hasOwnProperty,TS=xS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IS={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kS.call(e,r)&&!IS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CS,type:t,key:s,ref:o,props:i,_owner:TS.current}}Uc.Fragment=SS;Uc.jsx=F0;Uc.jsxs=F0;(function(t){t.exports=Uc})(sS);const U0=So.Fragment,h=So.jsx,_=So.jsxs;var Yh={},Qh={},bS={get exports(){return Qh},set exports(t){Qh=t}},Pt={},Xh={},NS={get exports(){return Xh},set exports(t){Xh=t}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,k){var E=P.length;P.push(k);e:for(;0<E;){var F=E-1>>>1,O=P[F];if(0<i(O,k))P[F]=k,P[E]=O,E=F;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var k=P[0],E=P.pop();if(E!==k){P[0]=E;e:for(var F=0,O=P.length,B=O>>>1;F<B;){var W=2*(F+1)-1,ue=P[W],fe=W+1,rt=P[fe];if(0>i(ue,E))fe<O&&0>i(rt,ue)?(P[F]=rt,P[fe]=E,F=fe):(P[F]=ue,P[W]=E,F=W);else if(fe<O&&0>i(rt,E))P[F]=rt,P[fe]=E,F=fe;else break e}}return k}function i(P,k){var E=P.sortIndex-k.sortIndex;return E!==0?E:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,g=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var k=n(c);k!==null;){if(k.callback===null)r(c);else if(k.startTime<=P)r(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function x(P){if(w=!1,y(P),!v)if(n(l)!==null)v=!0,wt(b);else{var k=n(c);k!==null&&ke(x,k.startTime-P)}}function b(P,k){v=!1,w&&(w=!1,m(R),R=-1),g=!0;var E=f;try{for(y(k),d=n(l);d!==null&&(!(d.expirationTime>k)||P&&!Ne());){var F=d.callback;if(typeof F=="function"){d.callback=null,f=d.priorityLevel;var O=F(d.expirationTime<=k);k=t.unstable_now(),typeof O=="function"?d.callback=O:d===n(l)&&r(l),y(k)}else r(l);d=n(l)}if(d!==null)var B=!0;else{var W=n(c);W!==null&&ke(x,W.startTime-k),B=!1}return B}finally{d=null,f=E,g=!1}}var A=!1,N=null,R=-1,V=5,$=-1;function Ne(){return!(t.unstable_now()-$<V)}function D(){if(N!==null){var P=t.unstable_now();$=P;var k=!0;try{k=N(!0,P)}finally{k?U():(A=!1,N=null)}}else A=!1}var U;if(typeof p=="function")U=function(){p(D)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,X=G.port2;G.port1.onmessage=D,U=function(){X.postMessage(null)}}else U=function(){S(D,0)};function wt(P){N=P,A||(A=!0,U())}function ke(P,k){R=S(function(){P(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,wt(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var E=f;f=k;try{return P()}finally{f=E}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var E=f;f=P;try{return k()}finally{f=E}},t.unstable_scheduleCallback=function(P,k,E){var F=t.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?F+E:F):E=F,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=E+O,P={id:u++,callback:k,priorityLevel:P,startTime:E,expirationTime:O,sortIndex:-1},E>F?(P.sortIndex=E,e(c,P),n(l)===null&&P===n(c)&&(w?(m(R),R=-1):w=!0,ke(x,E-F))):(P.sortIndex=O,e(l,P),v||g||(v=!0,wt(b))),P},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(P){var k=f;return function(){var E=f;f=k;try{return P.apply(this,arguments)}finally{f=E}}}})($0);(function(t){t.exports=$0})(NS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=C,Nt=Xh;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B0=new Set,ko={};function yi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(ko[t]=e,t=0;t<e.length;t++)B0.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jh=Object.prototype.hasOwnProperty,RS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},Tg={};function PS(t){return Jh.call(Tg,t)?!0:Jh.call(kg,t)?!1:RS.test(t)?Tg[t]=!0:(kg[t]=!0,!1)}function AS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OS(t,e,n,r){if(e===null||typeof e>"u"||AS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,qf);Ge[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,qf);Ge[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,qf);Ge[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OS(e,n,i,r)&&(n=null),r||i===null?PS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,$u;function Zs(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var ju=!1;function Bu(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function LS(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=Bu(t.type,!1),t;case 11:return t=Bu(t.type.render,!1),t;case 1:return t=Bu(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Ni:return"Portal";case Zh:return"Profiler";case Gf:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function DS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MS(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=MS(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rd(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K0(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function id(t,e){K0(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&sd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sd(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var eo=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(eo(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function G0(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,Q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FS=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){FS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var US=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(t,e){if(e){if(US[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function Xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hd=null,Wi=null,qi=null;function Ag(t){if(t=fa(t)){if(typeof hd!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Vc(e),hd(t.stateNode,t.type,e))}}function Z0(t){Wi?qi?qi.push(t):qi=[t]:Wi=t}function e_(){if(Wi){var t=Wi,e=qi;if(qi=Wi=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function t_(t,e){return t(e)}function n_(){}var zu=!1;function r_(t,e,n){if(zu)return t(e,n);zu=!0;try{return t_(t,e,n)}finally{zu=!1,(Wi!==null||qi!==null)&&(n_(),e_())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var dd=!1;if(Pn)try{var $s={};Object.defineProperty($s,"passive",{get:function(){dd=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{dd=!1}function $S(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var lo=!1,Ol=null,Ll=!1,fd=null,jS={onError:function(t){lo=!0,Ol=t}};function BS(t,e,n,r,i,s,o,a,l){lo=!1,Ol=null,$S.apply(jS,arguments)}function zS(t,e,n,r,i,s,o,a,l){if(BS.apply(this,arguments),lo){if(lo){var c=Ol;lo=!1,Ol=null}else throw Error(T(198));Ll||(Ll=!0,fd=c)}}function vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Og(t){if(vi(t)!==t)throw Error(T(188))}function VS(t){var e=t.alternate;if(!e){if(e=vi(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Og(i),t;if(s===r)return Og(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function s_(t){return t=VS(t),t!==null?o_(t):null}function o_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o_(t);if(e!==null)return e;t=t.sibling}return null}var a_=Nt.unstable_scheduleCallback,Lg=Nt.unstable_cancelCallback,HS=Nt.unstable_shouldYield,WS=Nt.unstable_requestPaint,Ce=Nt.unstable_now,qS=Nt.unstable_getCurrentPriorityLevel,Jf=Nt.unstable_ImmediatePriority,l_=Nt.unstable_UserBlockingPriority,Dl=Nt.unstable_NormalPriority,KS=Nt.unstable_LowPriority,c_=Nt.unstable_IdlePriority,$c=null,fn=null;function GS(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:XS,YS=Math.log,QS=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(YS(t)/QS|0)|0}var Wa=64,qa=4194304;function to(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=to(a):(s&=o,s!==0&&(r=to(s)))}else o=n&~i,o!==0?r=to(o):s!==0&&(r=to(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u_(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function ek(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function h_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,ep,f_,p_,m_,md=!1,Ka=[],lr=null,cr=null,ur=null,bo=new Map,No=new Map,Xn=[],tk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nk(t,e,n,r,i){switch(e){case"focusin":return lr=js(lr,t,e,n,r,i),!0;case"dragenter":return cr=js(cr,t,e,n,r,i),!0;case"mouseover":return ur=js(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,js(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,js(No.get(s)||null,t,e,n,r,i)),!0}return!1}function g_(t){var e=zr(t.target);if(e!==null){var n=vi(e);if(n!==null){if(e=n.tag,e===13){if(e=i_(n),e!==null){t.blockedOn=e,m_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ud=r,n.target.dispatchEvent(r),ud=null}else return e=fa(n),e!==null&&ep(e),t.blockedOn=n,!1;e.shift()}return!0}function Mg(t,e,n){gl(t)&&n.delete(e)}function rk(){md=!1,lr!==null&&gl(lr)&&(lr=null),cr!==null&&gl(cr)&&(cr=null),ur!==null&&gl(ur)&&(ur=null),bo.forEach(Mg),No.forEach(Mg)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,rk)))}function Ro(t){function e(i){return Bs(i,t)}if(0<Ka.length){Bs(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Bs(lr,t),cr!==null&&Bs(cr,t),ur!==null&&Bs(ur,t),bo.forEach(e),No.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)g_(n),n.blockedOn===null&&Xn.shift()}var Ki=Un.ReactCurrentBatchConfig,Fl=!0;function ik(t,e,n,r){var i=ne,s=Ki.transition;Ki.transition=null;try{ne=1,tp(t,e,n,r)}finally{ne=i,Ki.transition=s}}function sk(t,e,n,r){var i=ne,s=Ki.transition;Ki.transition=null;try{ne=4,tp(t,e,n,r)}finally{ne=i,Ki.transition=s}}function tp(t,e,n,r){if(Fl){var i=gd(t,e,n,r);if(i===null)Zu(t,e,r,Ul,n),Dg(t,r);else if(nk(i,t,e,n,r))r.stopPropagation();else if(Dg(t,r),e&4&&-1<tk.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&d_(s),s=gd(t,e,n,r),s===null&&Zu(t,e,r,Ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zu(t,e,r,null,n)}}var Ul=null;function gd(t,e,n,r){if(Ul=null,t=Xf(r),t=zr(t),t!==null)if(e=vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qS()){case Jf:return 1;case l_:return 4;case Dl:case KS:return 16;case c_:return 536870912;default:return 16}default:return 16}}var ir=null,np=null,yl=null;function v_(){if(yl)return yl;var t,e=np,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Fg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:Fg,this.isPropagationStopped=Fg,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=At(Es),da=ge({},Es,{view:0,detail:0}),ok=At(da),Hu,Wu,zs,jc=ge({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Hu=t.screenX-zs.screenX,Wu=t.screenY-zs.screenY):Wu=Hu=0,zs=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Ug=At(jc),ak=ge({},jc,{dataTransfer:0}),lk=At(ak),ck=ge({},da,{relatedTarget:0}),qu=At(ck),uk=ge({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),hk=At(uk),dk=ge({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fk=At(dk),pk=ge({},Es,{data:0}),$g=At(pk),mk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yk[t])?!!e[t]:!1}function ip(){return vk}var _k=ge({},da,{key:function(t){if(t.key){var e=mk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wk=At(_k),Ek=ge({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=At(Ek),xk=ge({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),Ck=At(xk),Sk=ge({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),kk=At(Sk),Tk=ge({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ik=At(Tk),bk=[9,13,27,32],sp=Pn&&"CompositionEvent"in window,co=null;Pn&&"documentMode"in document&&(co=document.documentMode);var Nk=Pn&&"TextEvent"in window&&!co,__=Pn&&(!sp||co&&8<co&&11>=co),Bg=String.fromCharCode(32),zg=!1;function w_(t,e){switch(t){case"keyup":return bk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function Rk(t,e){switch(t){case"compositionend":return E_(e);case"keypress":return e.which!==32?null:(zg=!0,Bg);case"textInput":return t=e.data,t===Bg&&zg?null:t;default:return null}}function Pk(t,e){if(Pi)return t==="compositionend"||!sp&&w_(t,e)?(t=v_(),yl=np=ir=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return __&&e.locale!=="ko"?null:e.data;default:return null}}var Ak={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ak[t.type]:e==="textarea"}function x_(t,e,n,r){Z0(r),e=$l(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,Po=null;function Ok(t){O_(t,0)}function Bc(t){var e=Li(t);if(q0(e))return t}function Lk(t,e){if(t==="change")return e}var C_=!1;if(Pn){var Ku;if(Pn){var Gu="oninput"in document;if(!Gu){var Hg=document.createElement("div");Hg.setAttribute("oninput","return;"),Gu=typeof Hg.oninput=="function"}Ku=Gu}else Ku=!1;C_=Ku&&(!document.documentMode||9<document.documentMode)}function Wg(){uo&&(uo.detachEvent("onpropertychange",S_),Po=uo=null)}function S_(t){if(t.propertyName==="value"&&Bc(Po)){var e=[];x_(e,Po,t,Xf(t)),r_(Ok,e)}}function Dk(t,e,n){t==="focusin"?(Wg(),uo=e,Po=n,uo.attachEvent("onpropertychange",S_)):t==="focusout"&&Wg()}function Mk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bc(Po)}function Fk(t,e){if(t==="click")return Bc(e)}function Uk(t,e){if(t==="input"||t==="change")return Bc(e)}function $k(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:$k;function Ao(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jh.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kg(t,e){var n=qg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qg(n)}}function k_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jk(t){var e=T_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k_(n.ownerDocument.documentElement,n)){if(r!==null&&op(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kg(n,s);var o=Kg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bk=Pn&&"documentMode"in document&&11>=document.documentMode,Ai=null,yd=null,ho=null,vd=!1;function Gg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||Ai==null||Ai!==Al(r)||(r=Ai,"selectionStart"in r&&op(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Ao(ho,r)||(ho=r,r=$l(yd,"onSelect"),0<r.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Yu={},I_={};Pn&&(I_=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function zc(t){if(Yu[t])return Yu[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I_)return Yu[t]=e[n];return t}var b_=zc("animationend"),N_=zc("animationiteration"),R_=zc("animationstart"),P_=zc("transitionend"),A_=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){A_.set(t,e),yi(e,[t])}for(var Qu=0;Qu<Yg.length;Qu++){var Xu=Yg[Qu],zk=Xu.toLowerCase(),Vk=Xu[0].toUpperCase()+Xu.slice(1);Tr(zk,"on"+Vk)}Tr(b_,"onAnimationEnd");Tr(N_,"onAnimationIteration");Tr(R_,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(P_,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hk=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Qg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zS(r,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qg(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qg(i,a,c),s=l}}}if(Ll)throw t=fd,Ll=!1,fd=null,t}function le(t,e){var n=e[Cd];n===void 0&&(n=e[Cd]=new Set);var r=t+"__bubble";n.has(r)||(L_(e,t,2,!1),n.add(r))}function Ju(t,e,n){var r=0;e&&(r|=4),L_(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Qa]){t[Qa]=!0,B0.forEach(function(n){n!=="selectionchange"&&(Hk.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,Ju("selectionchange",!1,e))}}function L_(t,e,n,r){switch(y_(e)){case 1:var i=ik;break;case 4:i=sk;break;default:i=tp}n=i.bind(null,e,n,t),i=void 0,!dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}r_(function(){var c=s,u=Xf(n),d=[];e:{var f=A_.get(t);if(f!==void 0){var g=rp,v=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":g=wk;break;case"focusin":v="focus",g=qu;break;case"focusout":v="blur",g=qu;break;case"beforeblur":case"afterblur":g=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ck;break;case b_:case N_:case R_:g=hk;break;case P_:g=kk;break;case"scroll":g=ok;break;case"wheel":g=Ik;break;case"copy":case"cut":case"paste":g=fk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jg}var w=(e&4)!==0,S=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,y;p!==null;){y=p;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,m!==null&&(x=Io(p,m),x!=null&&w.push(Lo(p,x,y)))),S)break;p=p.return}0<w.length&&(f=new g(f,v,null,n,u),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ud&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[An]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?zr(v):null,v!==null&&(S=vi(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(w=Ug,x="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=jg,x="onPointerLeave",m="onPointerEnter",p="pointer"),S=g==null?f:Li(g),y=v==null?f:Li(v),f=new w(x,p+"leave",g,n,u),f.target=S,f.relatedTarget=y,x=null,zr(u)===c&&(w=new w(m,p+"enter",v,n,u),w.target=y,w.relatedTarget=S,x=w),S=x,g&&v)t:{for(w=g,m=v,p=0,y=w;y;y=Ti(y))p++;for(y=0,x=m;x;x=Ti(x))y++;for(;0<p-y;)w=Ti(w),p--;for(;0<y-p;)m=Ti(m),y--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ti(w),m=Ti(m)}w=null}else w=null;g!==null&&Xg(d,f,g,w,!1),v!==null&&S!==null&&Xg(d,S,v,w,!0)}}e:{if(f=c?Li(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=Lk;else if(Vg(f))if(C_)b=Uk;else{b=Mk;var A=Dk}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Fk);if(b&&(b=b(t,c))){x_(d,b,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&sd(f,"number",f.value)}switch(A=c?Li(c):window,t){case"focusin":(Vg(A)||A.contentEditable==="true")&&(Ai=A,yd=c,ho=null);break;case"focusout":ho=yd=Ai=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Gg(d,n,u);break;case"selectionchange":if(Bk)break;case"keydown":case"keyup":Gg(d,n,u)}var N;if(sp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Pi?w_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(__&&n.locale!=="ko"&&(Pi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Pi&&(N=v_()):(ir=u,np="value"in ir?ir.value:ir.textContent,Pi=!0)),A=$l(c,R),0<A.length&&(R=new $g(R,t,null,n,u),d.push({event:R,listeners:A}),N?R.data=N:(N=E_(n),N!==null&&(R.data=N)))),(N=Nk?Rk(t,n):Pk(t,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(u=new $g("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=N))}O_(d,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Io(t,n),s!=null&&r.unshift(Lo(t,s,i)),s=Io(t,e),s!=null&&r.push(Lo(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Io(n,s),l!=null&&o.unshift(Lo(n,l,a))):i||(l=Io(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wk=/\r\n?/g,qk=/\u0000|\uFFFD/g;function Jg(t){return(typeof t=="string"?t:""+t).replace(Wk,`
`).replace(qk,"")}function Xa(t,e,n){if(e=Jg(e),Jg(t)!==e&&n)throw Error(T(425))}function jl(){}var _d=null,wd=null;function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,Kk=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,Gk=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(Yk)}:xd;function Yk(t){setTimeout(function(){throw t})}function eh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),cn="__reactFiber$"+xs,Do="__reactProps$"+xs,An="__reactContainer$"+xs,Cd="__reactEvents$"+xs,Qk="__reactListeners$"+xs,Xk="__reactHandles$"+xs;function zr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ey(t);t!==null;){if(n=t[cn])return n;t=ey(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[cn]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Vc(t){return t[Do]||null}var Sd=[],Di=-1;function Ir(t){return{current:t}}function ce(t){0>Di||(t.current=Sd[Di],Sd[Di]=null,Di--)}function ae(t,e){Di++,Sd[Di]=t.current,t.current=e}var xr={},tt=Ir(xr),yt=Ir(!1),ti=xr;function os(t,e){var n=t.type.contextTypes;if(!n)return xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function Bl(){ce(yt),ce(tt)}function ty(t,e,n){if(tt.current!==xr)throw Error(T(168));ae(tt,e),ae(yt,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,DS(t)||"Unknown",i));return ge({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,ti=tt.current,ae(tt,t),ae(yt,yt.current),!0}function ny(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=D_(t,e,ti),r.__reactInternalMemoizedMergedChildContext=t,ce(yt),ce(tt),ae(tt,t)):ce(yt),ae(yt,n)}var wn=null,Hc=!1,th=!1;function M_(t){wn===null?wn=[t]:wn.push(t)}function Jk(t){Hc=!0,M_(t)}function br(){if(!th&&wn!==null){th=!0;var t=0,e=ne;try{var n=wn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,Hc=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),a_(Jf,br),i}finally{ne=e,th=!1}}return null}var Mi=[],Fi=0,Vl=null,Hl=0,Mt=[],Ft=0,ni=null,En=1,xn="";function Mr(t,e){Mi[Fi++]=Hl,Mi[Fi++]=Vl,Vl=t,Hl=e}function F_(t,e,n){Mt[Ft++]=En,Mt[Ft++]=xn,Mt[Ft++]=ni,ni=t;var r=En;t=xn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Zt(e)+i|n<<i|r,xn=s+t}else En=1<<s|n<<i|r,xn=t}function ap(t){t.return!==null&&(Mr(t,1),F_(t,1,0))}function lp(t){for(;t===Vl;)Vl=Mi[--Fi],Mi[Fi]=null,Hl=Mi[--Fi],Mi[Fi]=null;for(;t===ni;)ni=Mt[--Ft],Mt[Ft]=null,xn=Mt[--Ft],Mt[Ft]=null,En=Mt[--Ft],Mt[Ft]=null}var bt=null,kt=null,he=!1,Qt=null;function U_(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,kt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ni!==null?{id:En,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,kt=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(he){var e=kt;if(e){var n=e;if(!ry(t,e)){if(kd(t))throw Error(T(418));e=hr(n.nextSibling);var r=bt;e&&ry(t,e)?U_(r,n):(t.flags=t.flags&-4097|2,he=!1,bt=t)}}else{if(kd(t))throw Error(T(418));t.flags=t.flags&-4097|2,he=!1,bt=t}}}function iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function Ja(t){if(t!==bt)return!1;if(!he)return iy(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ed(t.type,t.memoizedProps)),e&&(e=kt)){if(kd(t))throw $_(),Error(T(418));for(;e;)U_(t,e),e=hr(e.nextSibling)}if(iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=bt?hr(t.stateNode.nextSibling):null;return!0}function $_(){for(var t=kt;t;)t=hr(t.nextSibling)}function as(){kt=bt=null,he=!1}function cp(t){Qt===null?Qt=[t]:Qt.push(t)}var Zk=Un.ReactCurrentBatchConfig;function Gt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wl=Ir(null),ql=null,Ui=null,up=null;function hp(){up=Ui=ql=null}function dp(t){var e=Wl.current;ce(Wl),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){ql=t,up=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(up!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(ql===null)throw Error(T(308));Ui=t,ql.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Vr=null;function fp(t){Vr===null?Vr=[t]:Vr.push(t)}function j_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fp(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,fp(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}function sy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(f=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=ge({},d,f);break e;case 2:Qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ii|=o,t.lanes=o,t.memoizedState=d}}function oy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var z_=new j0.Component().refs;function bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=pr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(en(e,t,i,r),_l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=pr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(en(e,t,i,r),_l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=pr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(en(e,t,r,n),_l(e,t,r))}};function ay(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function V_(t,e,n){var r=!1,i=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=vt(e)?ti:tt.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=z_,pp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=vt(e)?ti:tt.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wc.enqueueReplaceState(i,i.state,null),Kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===z_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cy(t){var e=t._init;return e(t._payload)}function H_(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=mr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,x){return p===null||p.tag!==6?(p=lh(y,m.mode,x),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,x){var b=y.type;return b===Ri?u(m,p,y.props.children,x,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yn&&cy(b)===p.type)?(x=i(p,y.props),x.ref=Vs(m,p,y),x.return=m,x):(x=kl(y.type,y.key,y.props,null,m.mode,x),x.ref=Vs(m,p,y),x.return=m,x)}function c(m,p,y,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ch(y,m.mode,x),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function u(m,p,y,x,b){return p===null||p.tag!==7?(p=Qr(y,m.mode,x,b),p.return=m,p):(p=i(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=lh(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case za:return y=kl(p.type,p.key,p.props,null,m.mode,y),y.ref=Vs(m,null,p),y.return=m,y;case Ni:return p=ch(p,m.mode,y),p.return=m,p;case Yn:var x=p._init;return d(m,x(p._payload),y)}if(eo(p)||Us(p))return p=Qr(p,m.mode,y,null),p.return=m,p;Za(m,p)}return null}function f(m,p,y,x){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(m,p,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case za:return y.key===b?l(m,p,y,x):null;case Ni:return y.key===b?c(m,p,y,x):null;case Yn:return b=y._init,f(m,p,b(y._payload),x)}if(eo(y)||Us(y))return b!==null?null:u(m,p,y,x,null);Za(m,y)}return null}function g(m,p,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(y)||null,a(p,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case za:return m=m.get(x.key===null?y:x.key)||null,l(p,m,x,b);case Ni:return m=m.get(x.key===null?y:x.key)||null,c(p,m,x,b);case Yn:var A=x._init;return g(m,p,y,A(x._payload),b)}if(eo(x)||Us(x))return m=m.get(y)||null,u(p,m,x,b,null);Za(p,x)}return null}function v(m,p,y,x){for(var b=null,A=null,N=p,R=p=0,V=null;N!==null&&R<y.length;R++){N.index>R?(V=N,N=null):V=N.sibling;var $=f(m,N,y[R],x);if($===null){N===null&&(N=V);break}t&&N&&$.alternate===null&&e(m,N),p=s($,p,R),A===null?b=$:A.sibling=$,A=$,N=V}if(R===y.length)return n(m,N),he&&Mr(m,R),b;if(N===null){for(;R<y.length;R++)N=d(m,y[R],x),N!==null&&(p=s(N,p,R),A===null?b=N:A.sibling=N,A=N);return he&&Mr(m,R),b}for(N=r(m,N);R<y.length;R++)V=g(N,m,R,y[R],x),V!==null&&(t&&V.alternate!==null&&N.delete(V.key===null?R:V.key),p=s(V,p,R),A===null?b=V:A.sibling=V,A=V);return t&&N.forEach(function(Ne){return e(m,Ne)}),he&&Mr(m,R),b}function w(m,p,y,x){var b=Us(y);if(typeof b!="function")throw Error(T(150));if(y=b.call(y),y==null)throw Error(T(151));for(var A=b=null,N=p,R=p=0,V=null,$=y.next();N!==null&&!$.done;R++,$=y.next()){N.index>R?(V=N,N=null):V=N.sibling;var Ne=f(m,N,$.value,x);if(Ne===null){N===null&&(N=V);break}t&&N&&Ne.alternate===null&&e(m,N),p=s(Ne,p,R),A===null?b=Ne:A.sibling=Ne,A=Ne,N=V}if($.done)return n(m,N),he&&Mr(m,R),b;if(N===null){for(;!$.done;R++,$=y.next())$=d(m,$.value,x),$!==null&&(p=s($,p,R),A===null?b=$:A.sibling=$,A=$);return he&&Mr(m,R),b}for(N=r(m,N);!$.done;R++,$=y.next())$=g(N,m,R,$.value,x),$!==null&&(t&&$.alternate!==null&&N.delete($.key===null?R:$.key),p=s($,p,R),A===null?b=$:A.sibling=$,A=$);return t&&N.forEach(function(D){return e(m,D)}),he&&Mr(m,R),b}function S(m,p,y,x){if(typeof y=="object"&&y!==null&&y.type===Ri&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case za:e:{for(var b=y.key,A=p;A!==null;){if(A.key===b){if(b=y.type,b===Ri){if(A.tag===7){n(m,A.sibling),p=i(A,y.props.children),p.return=m,m=p;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yn&&cy(b)===A.type){n(m,A.sibling),p=i(A,y.props),p.ref=Vs(m,A,y),p.return=m,m=p;break e}n(m,A);break}else e(m,A);A=A.sibling}y.type===Ri?(p=Qr(y.props.children,m.mode,x,y.key),p.return=m,m=p):(x=kl(y.type,y.key,y.props,null,m.mode,x),x.ref=Vs(m,p,y),x.return=m,m=x)}return o(m);case Ni:e:{for(A=y.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=ch(y,m.mode,x),p.return=m,m=p}return o(m);case Yn:return A=y._init,S(m,p,A(y._payload),x)}if(eo(y))return v(m,p,y,x);if(Us(y))return w(m,p,y,x);Za(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=lh(y,m.mode,x),p.return=m,m=p),o(m)):n(m,p)}return S}var ls=H_(!0),W_=H_(!1),pa={},pn=Ir(pa),Mo=Ir(pa),Fo=Ir(pa);function Hr(t){if(t===pa)throw Error(T(174));return t}function mp(t,e){switch(ae(Fo,e),ae(Mo,t),ae(pn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ad(e,t)}ce(pn),ae(pn,e)}function cs(){ce(pn),ce(Mo),ce(Fo)}function q_(t){Hr(Fo.current);var e=Hr(pn.current),n=ad(e,t.type);e!==n&&(ae(Mo,t),ae(pn,n))}function gp(t){Mo.current===t&&(ce(pn),ce(Mo))}var pe=Ir(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nh=[];function yp(){for(var t=0;t<nh.length;t++)nh[t]._workInProgressVersionPrimary=null;nh.length=0}var wl=Un.ReactCurrentDispatcher,rh=Un.ReactCurrentBatchConfig,ri=0,me=null,Ae=null,Me=null,Yl=!1,fo=!1,Uo=0,eT=0;function Qe(){throw Error(T(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function _p(t,e,n,r,i,s){if(ri=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?iT:sT,t=n(r,i),fo){s=0;do{if(fo=!1,Uo=0,25<=s)throw Error(T(301));s+=1,Me=Ae=null,e.updateQueue=null,wl.current=oT,t=n(r,i)}while(fo)}if(wl.current=Ql,e=Ae!==null&&Ae.next!==null,ri=0,Me=Ae=me=null,Yl=!1,e)throw Error(T(300));return t}function wp(){var t=Uo!==0;return Uo=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?me.memoizedState=Me=t:Me=Me.next=t,Me}function Vt(){if(Ae===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Me===null?me.memoizedState:Me.next;if(e!==null)Me=e,Ae=t;else{if(t===null)throw Error(T(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Me===null?me.memoizedState=Me=t:Me=Me.next=t}return Me}function $o(t,e){return typeof e=="function"?e(t):e}function ih(t){var e=Vt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ri&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,me.lanes|=u,ii|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sh(t){var e=Vt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K_(){}function G_(t,e){var n=me,r=Vt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Ep(X_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,jo(9,Q_.bind(null,n,r,i,e),void 0,null),je===null)throw Error(T(349));ri&30||Y_(n,e,i)}return i}function Y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q_(t,e,n,r){e.value=n,e.getSnapshot=r,J_(e)&&Z_(t)}function X_(t,e,n){return n(function(){J_(e)&&Z_(t)})}function J_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Z_(t){var e=On(t,1);e!==null&&en(e,t,1,-1)}function uy(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=rT.bind(null,me,t),[e.memoizedState,t]}function jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ew(){return Vt().memoizedState}function El(t,e,n,r){var i=ln();me.flags|=t,i.memoizedState=jo(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&vp(r,o.deps)){i.memoizedState=jo(e,n,s,r);return}}me.flags|=t,i.memoizedState=jo(1|e,n,s,r)}function hy(t,e){return El(8390656,8,t,e)}function Ep(t,e){return qc(2048,8,t,e)}function tw(t,e){return qc(4,2,t,e)}function nw(t,e){return qc(4,4,t,e)}function rw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iw(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,rw.bind(null,e,t),n)}function xp(){}function sw(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ow(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aw(t,e,n){return ri&21?(nn(n,e)||(n=u_(),me.lanes|=n,ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function tT(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=rh.transition;rh.transition={};try{t(!1),e()}finally{ne=n,rh.transition=r}}function lw(){return Vt().memoizedState}function nT(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cw(t))uw(e,n);else if(n=j_(t,e,n,r),n!==null){var i=at();en(n,t,r,i),hw(n,e,r)}}function rT(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cw(t))uw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,fp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=j_(t,e,i,r),n!==null&&(i=at(),en(n,t,r,i),hw(n,e,r))}}function cw(t){var e=t.alternate;return t===me||e!==null&&e===me}function uw(t,e){fo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}var Ql={readContext:zt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},iT={readContext:zt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,rw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nT.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:uy,useDebugValue:xp,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=uy(!1),e=t[0];return t=tT.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=ln();if(he){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),je===null)throw Error(T(349));ri&30||Y_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hy(X_.bind(null,r,s,t),[t]),r.flags|=2048,jo(9,Q_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=je.identifierPrefix;if(he){var n=xn,r=En;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sT={readContext:zt,useCallback:sw,useContext:zt,useEffect:Ep,useImperativeHandle:iw,useInsertionEffect:tw,useLayoutEffect:nw,useMemo:ow,useReducer:ih,useRef:ew,useState:function(){return ih($o)},useDebugValue:xp,useDeferredValue:function(t){var e=Vt();return aw(e,Ae.memoizedState,t)},useTransition:function(){var t=ih($o)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:G_,useId:lw,unstable_isNewReconciler:!1},oT={readContext:zt,useCallback:sw,useContext:zt,useEffect:Ep,useImperativeHandle:iw,useInsertionEffect:tw,useLayoutEffect:nw,useMemo:ow,useReducer:sh,useRef:ew,useState:function(){return sh($o)},useDebugValue:xp,useDeferredValue:function(t){var e=Vt();return Ae===null?e.memoizedState=t:aw(e,Ae.memoizedState,t)},useTransition:function(){var t=sh($o)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:G_,useId:lw,unstable_isNewReconciler:!1};function us(t,e){try{var n="",r=e;do n+=LS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aT=typeof WeakMap=="function"?WeakMap:Map;function dw(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,jd=r),Rd(t,e)},n}function fw(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ET.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var lT=Un.ReactCurrentOwner,pt=!1;function st(t,e,n,r){e.child=t===null?W_(e,null,n,r):ls(e,t.child,n,r)}function my(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=_p(t,e,n,r,s,i),n=wp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(he&&n&&ap(e),e.flags|=1,st(t,e,r,i),e.child)}function gy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pw(t,e,s,r,i)):(t=kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function pw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return Pd(t,e,n,r,i)}function mw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(ji,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(ji,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(ji,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(ji,xt),xt|=r;return st(t,e,i,n),e.child}function gw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,i){var s=vt(n)?ti:tt.current;return s=os(e,s),Gi(e,i),n=_p(t,e,n,r,s,i),r=wp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(he&&r&&ap(e),e.flags|=1,st(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(vt(n)){var s=!0;zl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)xl(t,e),V_(e,n,r),Nd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zt(c):(c=vt(n)?ti:tt.current,c=os(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ly(e,o,r,c),Qn=!1;var f=e.memoizedState;o.state=f,Kl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||yt.current||Qn?(typeof u=="function"&&(bd(e,n,u,r),l=e.memoizedState),(a=Qn||ay(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,B_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=vt(n)?ti:tt.current,l=os(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ly(e,o,r,l),Qn=!1,f=e.memoizedState,o.state=f,Kl(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||yt.current||Qn?(typeof g=="function"&&(bd(e,n,g,r),v=e.memoizedState),(c=Qn||ay(e,n,c,r,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ad(t,e,n,r,s,i)}function Ad(t,e,n,r,i,s){gw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ny(e,n,!1),Ln(t,e,s);r=e.stateNode,lT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&ny(e,n,!0),e.child}function yw(t){var e=t.stateNode;e.pendingContext?ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ty(t,e.context,!1),mp(t,e.containerInfo)}function vy(t,e,n,r,i){return as(),cp(i),e.flags|=256,st(t,e,n,r),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function vw(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(pe,i&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ld(n),e.memoizedState=Od,t):Cp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Od,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cp(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&cp(r),ls(e,t.child,null,n),t=Cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oh(Error(T(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yc({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=Ld(o),e.memoizedState=Od,s);if(!(e.mode&1))return el(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=oh(s,r,void 0),el(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),en(r,t,i,-1))}return Np(),r=oh(Error(T(421))),el(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=hr(i.nextSibling),bt=e,he=!0,Qt=null,t!==null&&(Mt[Ft++]=En,Mt[Ft++]=xn,Mt[Ft++]=ni,En=t.id,xn=t.overflow,ni=e),e=Cp(e,r.children),e.flags|=4096,e)}function _y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Id(t.return,e,n)}function ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _w(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,n,e);else if(t.tag===19)_y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ah(e,!0,n,null,s);break;case"together":ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uT(t,e,n){switch(e.tag){case 3:yw(e),as();break;case 5:q_(e);break;case 1:vt(e.type)&&zl(e);break;case 4:mp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?vw(t,e,n):(ae(pe,pe.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _w(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,mw(t,e,n)}return Ln(t,e,n)}var ww,Dd,Ew,xw;ww=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dd=function(){};Ew=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(pn.current);var s=null;switch(n){case"input":i=rd(t,i),r=rd(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=od(t,i),r=od(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}ld(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hT(t,e,n){var r=e.pendingProps;switch(lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return vt(e.type)&&Bl(),Xe(e),null;case 3:return r=e.stateNode,cs(),ce(yt),ce(tt),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Vd(Qt),Qt=null))),Dd(t,e),Xe(e),null;case 5:gp(e);var i=Hr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ew(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Xe(e),null}if(t=Hr(pn.current),Ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)le(no[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":bg(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Rg(r,s),le("invalid",r)}ld(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,a,t),i=["children",""+a]):ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Va(r),Ng(r,s,!0);break;case"textarea":Va(r),Pg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Do]=r,ww(t,e,!1,!1),e.stateNode=t;e:{switch(o=cd(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)le(no[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":bg(t,r),i=rd(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),le("invalid",t);break;case"textarea":Rg(t,r),i=od(t,r),le("invalid",t);break;default:i=r}ld(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?J0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Q0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Kf(t,s,l,o))}switch(n){case"input":Va(t),Ng(t,r,!1);break;case"textarea":Va(t),Pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Hr(Fo.current),Hr(pn.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Xe(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&kt!==null&&e.mode&1&&!(e.flags&128))$_(),as(),e.flags|=98560,s=!1;else if(s=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[cn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Qt!==null&&(Vd(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Oe===0&&(Oe=3):Np())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return cs(),Dd(t,e),t===null&&Oo(e.stateNode.containerInfo),Xe(e),null;case 10:return dp(e.type._context),Xe(e),null;case 17:return vt(e.type)&&Bl(),Xe(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,Hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>hs&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Xe(e),null}else 2*Ce()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return bp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function dT(t,e){switch(lp(e),e.tag){case 1:return vt(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),ce(yt),ce(tt),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gp(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return cs(),null;case 10:return dp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var tl=!1,Je=!1,fT=typeof WeakSet=="function"?WeakSet:Set,M=null;function $i(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function Md(t,e,n){try{n()}catch(r){ye(t,e,r)}}var wy=!1;function pT(t,e){if(_d=Fl,t=T_(),op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:t,selectionRange:n},Fl=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Gt(e.type,w),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(x){ye(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=wy,wy=!1,v}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Md(e,n,s)}i=i.next}while(i!==r)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cw(t){var e=t.alternate;e!==null&&(t.alternate=null,Cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Do],delete e[Cd],delete e[Qk],delete e[Xk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sw(t){return t.tag===5||t.tag===3||t.tag===4}function Ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}function $d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var Ve=null,Yt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)kw(t,e,n),n=n.sibling}function kw(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:Je||$i(n,e);case 6:var r=Ve,i=Yt;Ve=null,Kn(t,e,n),Ve=r,Yt=i,Ve!==null&&(Yt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Yt?(t=Ve,n=n.stateNode,t.nodeType===8?eh(t.parentNode,n):t.nodeType===1&&eh(t,n),Ro(t)):eh(Ve,n.stateNode));break;case 4:r=Ve,i=Yt,Ve=n.stateNode.containerInfo,Yt=!0,Kn(t,e,n),Ve=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!Je&&($i(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ye(n,e,a)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Kn(t,e,n),Je=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function xy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fT),e.forEach(function(r){var i=CT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Yt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Yt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(Ve===null)throw Error(T(160));kw(s,o,i),Ve=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tw(e,t),e=e.sibling}function Tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),an(t),r&4){try{po(3,t,t.return),Kc(3,t)}catch(w){ye(t,t.return,w)}try{po(5,t,t.return)}catch(w){ye(t,t.return,w)}}break;case 1:Kt(e,t),an(t),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Kt(e,t),an(t),r&512&&n!==null&&$i(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(w){ye(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&K0(i,s),cd(a,o);var c=cd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?J0(i,d):u==="dangerouslySetInnerHTML"?Q0(i,d):u==="children"?To(i,d):Kf(i,u,d,c)}switch(a){case"input":id(i,s);break;case"textarea":G0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Hi(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(w){ye(t,t.return,w)}}break;case 6:if(Kt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ye(t,t.return,w)}}break;case 3:if(Kt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(w){ye(t,t.return,w)}break;case 4:Kt(e,t),an(t);break;case 13:Kt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tp=Ce())),r&4&&xy(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(c=Je)||u,Kt(e,t),Je=c):Kt(e,t),an(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(M=t,u=t.child;u!==null;){for(d=M=u;M!==null;){switch(f=M,g=f.child,f.tag){case 0:case 11:case 14:case 15:po(4,f,f.return);break;case 1:$i(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ye(r,n,w)}}break;case 5:$i(f,f.return);break;case 22:if(f.memoizedState!==null){Sy(d);continue}}g!==null?(g.return=f,M=g):Sy(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=X0("display",o))}catch(w){ye(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){ye(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),an(t),r&4&&xy(t);break;case 21:break;default:Kt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sw(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=Ey(t);$d(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ey(t);Ud(t,a,o);break;default:throw Error(T(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mT(t,e,n){M=t,Iw(t)}function Iw(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=tl;var c=Je;if(tl=o,(Je=l)&&!c)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?ky(i):l!==null?(l.return=o,M=l):ky(i);for(;s!==null;)M=s,Iw(s),s=s.sibling;M=i,tl=a,Je=c}Cy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Cy(t)}}function Cy(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&oy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}oy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ro(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Je||e.flags&512&&Fd(e)}catch(f){ye(e,e.return,f)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Sy(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function ky(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ye(e,i,l)}}var s=e.return;try{Fd(e)}catch(l){ye(e,s,l)}break;case 5:var o=e.return;try{Fd(e)}catch(l){ye(e,o,l)}}}catch(l){ye(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var gT=Math.ceil,Xl=Un.ReactCurrentDispatcher,Sp=Un.ReactCurrentOwner,Bt=Un.ReactCurrentBatchConfig,Z=0,je=null,Te=null,qe=0,xt=0,ji=Ir(0),Oe=0,Bo=null,ii=0,Gc=0,kp=0,mo=null,dt=null,Tp=0,hs=1/0,_n=null,Jl=!1,jd=null,fr=null,nl=!1,sr=null,Zl=0,go=0,Bd=null,Cl=-1,Sl=0;function at(){return Z&6?Ce():Cl!==-1?Cl:Cl=Ce()}function pr(t){return t.mode&1?Z&2&&qe!==0?qe&-qe:Zk.transition!==null?(Sl===0&&(Sl=u_()),Sl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:y_(t.type)),t):1}function en(t,e,n,r){if(50<go)throw go=0,Bd=null,Error(T(185));ha(t,n,r),(!(Z&2)||t!==je)&&(t===je&&(!(Z&2)&&(Gc|=n),Oe===4&&Jn(t,qe)),_t(t,r),n===1&&Z===0&&!(e.mode&1)&&(hs=Ce()+500,Hc&&br()))}function _t(t,e){var n=t.callbackNode;ZS(t,e);var r=Ml(t,t===je?qe:0);if(r===0)n!==null&&Lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lg(n),e===1)t.tag===0?Jk(Ty.bind(null,t)):M_(Ty.bind(null,t)),Gk(function(){!(Z&6)&&br()}),n=null;else{switch(h_(r)){case 1:n=Jf;break;case 4:n=l_;break;case 16:n=Dl;break;case 536870912:n=c_;break;default:n=Dl}n=Dw(n,bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bw(t,e){if(Cl=-1,Sl=0,Z&6)throw Error(T(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Ml(t,t===je?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=Z;Z|=2;var s=Rw();(je!==t||qe!==e)&&(_n=null,hs=Ce()+500,Yr(t,e));do try{_T();break}catch(a){Nw(t,a)}while(1);hp(),Xl.current=s,Z=i,Te!==null?e=0:(je=null,qe=0,e=Oe)}if(e!==0){if(e===2&&(i=pd(t),i!==0&&(r=i,e=zd(t,i))),e===1)throw n=Bo,Yr(t,0),Jn(t,r),_t(t,Ce()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yT(i)&&(e=ec(t,r),e===2&&(s=pd(t),s!==0&&(r=s,e=zd(t,s))),e===1))throw n=Bo,Yr(t,0),Jn(t,r),_t(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Fr(t,dt,_n);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=Tp+500-Ce(),10<e)){if(Ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xd(Fr.bind(null,t,dt,_n),e);break}Fr(t,dt,_n);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gT(r/1960))-r,10<r){t.timeoutHandle=xd(Fr.bind(null,t,dt,_n),r);break}Fr(t,dt,_n);break;case 5:Fr(t,dt,_n);break;default:throw Error(T(329))}}}return _t(t,Ce()),t.callbackNode===n?bw.bind(null,t):null}function zd(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=dt,dt=n,e!==null&&Vd(e)),t}function Vd(t){dt===null?dt=t:dt.push.apply(dt,t)}function yT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~kp,e&=~Gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Ty(t){if(Z&6)throw Error(T(327));Yi();var e=Ml(t,0);if(!(e&1))return _t(t,Ce()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=pd(t);r!==0&&(e=r,n=zd(t,r))}if(n===1)throw n=Bo,Yr(t,0),Jn(t,e),_t(t,Ce()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,dt,_n),_t(t,Ce()),null}function Ip(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(hs=Ce()+500,Hc&&br())}}function si(t){sr!==null&&sr.tag===0&&!(Z&6)&&Yi();var e=Z;Z|=1;var n=Bt.transition,r=ne;try{if(Bt.transition=null,ne=1,t)return t()}finally{ne=r,Bt.transition=n,Z=e,!(Z&6)&&br()}}function bp(){xt=ji.current,ce(ji)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kk(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:cs(),ce(yt),ce(tt),yp();break;case 5:gp(r);break;case 4:cs();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:dp(r.type._context);break;case 22:case 23:bp()}n=n.return}if(je=t,Te=t=mr(t.current,null),qe=xt=e,Oe=0,Bo=null,kp=Gc=ii=0,dt=mo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vr=null}return t}function Nw(t,e){do{var n=Te;try{if(hp(),wl.current=Ql,Yl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yl=!1}if(ri=0,Me=Ae=me=null,fo=!1,Uo=0,Sp.current=null,n===null||n.return===null){Oe=1,Bo=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=fy(o);if(g!==null){g.flags&=-257,py(g,o,a,s,e),g.mode&1&&dy(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){dy(s,c,e),Np();break e}l=Error(T(426))}}else if(he&&a.mode&1){var S=fy(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),py(S,o,a,s,e),cp(us(l,a));break e}}s=l=us(l,a),Oe!==4&&(Oe=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=dw(s,l,e);sy(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(fr===null||!fr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=fw(s,a,e);sy(s,x);break e}}s=s.return}while(s!==null)}Aw(n)}catch(b){e=b,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function Rw(){var t=Xl.current;return Xl.current=Ql,t===null?Ql:t}function Np(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),je===null||!(ii&268435455)&&!(Gc&268435455)||Jn(je,qe)}function ec(t,e){var n=Z;Z|=2;var r=Rw();(je!==t||qe!==e)&&(_n=null,Yr(t,e));do try{vT();break}catch(i){Nw(t,i)}while(1);if(hp(),Z=n,Xl.current=r,Te!==null)throw Error(T(261));return je=null,qe=0,Oe}function vT(){for(;Te!==null;)Pw(Te)}function _T(){for(;Te!==null&&!HS();)Pw(Te)}function Pw(t){var e=Lw(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?Aw(t):Te=e,Sp.current=null}function Aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dT(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Te=null;return}}else if(n=hT(n,e,xt),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Oe===0&&(Oe=5)}function Fr(t,e,n){var r=ne,i=Bt.transition;try{Bt.transition=null,ne=1,wT(t,e,n,r)}finally{Bt.transition=i,ne=r}return null}function wT(t,e,n,r){do Yi();while(sr!==null);if(Z&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ek(t,s),t===je&&(Te=je=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,Dw(Dl,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=ne;ne=1;var a=Z;Z|=4,Sp.current=null,pT(t,n),Tw(n,t),jk(wd),Fl=!!_d,wd=_d=null,t.current=n,mT(n),WS(),Z=a,ne=o,Bt.transition=s}else t.current=n;if(nl&&(nl=!1,sr=t,Zl=i),s=t.pendingLanes,s===0&&(fr=null),GS(n.stateNode),_t(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=jd,jd=null,t;return Zl&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===Bd?go++:(go=0,Bd=t):go=0,br(),null}function Yi(){if(sr!==null){var t=h_(Zl),e=Bt.transition,n=ne;try{if(Bt.transition=null,ne=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Zl=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:po(8,u,s)}var d=u.child;if(d!==null)d.return=u,M=d;else for(;M!==null;){u=M;var f=u.sibling,g=u.return;if(Cw(u),u===c){M=null;break}if(f!==null){f.return=g,M=f;break}M=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(b){ye(a,a.return,b)}if(a===o){M=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,M=x;break e}M=a.return}}if(Z=i,br(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot($c,t)}catch{}r=!0}return r}finally{ne=n,Bt.transition=e}}return!1}function Iy(t,e,n){e=us(n,e),e=dw(t,e,1),t=dr(t,e,1),e=at(),t!==null&&(ha(t,1,e),_t(t,e))}function ye(t,e,n){if(t.tag===3)Iy(t,t,n);else for(;e!==null;){if(e.tag===3){Iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=us(n,t),t=fw(e,t,1),e=dr(e,t,1),t=at(),e!==null&&(ha(e,1,t),_t(e,t));break}}e=e.return}}function ET(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(qe&n)===n&&(Oe===4||Oe===3&&(qe&130023424)===qe&&500>Ce()-Tp?Yr(t,0):kp|=n),_t(t,e)}function Ow(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=at();t=On(t,e),t!==null&&(ha(t,e,n),_t(t,n))}function xT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ow(t,n)}function CT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Ow(t,n)}var Lw;Lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,uT(t,e,n);pt=!!(t.flags&131072)}else pt=!1,he&&e.flags&1048576&&F_(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xl(t,e),t=e.pendingProps;var i=os(e,tt.current);Gi(e,n),i=_p(null,e,r,t,i,n);var s=wp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pp(e),i.updater=Wc,e.stateNode=i,i._reactInternals=e,Nd(e,r,t,n),e=Ad(null,e,r,!0,s,n)):(e.tag=0,he&&s&&ap(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kT(r),t=Gt(r,t),i){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=gy(null,e,r,Gt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),yy(t,e,r,i,n);case 3:e:{if(yw(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,B_(t,e),Kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=us(Error(T(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=us(Error(T(424)),e),e=vy(t,e,r,n,i);break e}else for(kt=hr(e.stateNode.containerInfo.firstChild),bt=e,he=!0,Qt=null,n=W_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Ln(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return q_(e),t===null&&Td(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ed(r,i)?o=null:s!==null&&Ed(r,s)&&(e.flags|=32),gw(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Td(e),null;case 13:return vw(t,e,n);case 4:return mp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),my(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Wl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!yt.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=bn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Id(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=zt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),gy(t,e,r,i,n);case 15:return pw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),xl(t,e),e.tag=1,vt(r)?(t=!0,zl(e)):t=!1,Gi(e,n),V_(e,r,i),Nd(e,r,i,n),Ad(null,e,r,!0,t,n);case 19:return _w(t,e,n);case 22:return mw(t,e,n)}throw Error(T(156,e.tag))};function Dw(t,e){return a_(t,e)}function ST(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new ST(t,e,n,r)}function Rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kT(t){if(typeof t=="function")return Rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Qf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Qr(n.children,i,s,e);case Gf:o=8,i|=8;break;case Zh:return t=$t(12,n,e,i|2),t.elementType=Zh,t.lanes=s,t;case ed:return t=$t(13,n,e,i),t.elementType=ed,t.lanes=s,t;case td:return t=$t(19,n,e,i),t.elementType=td,t.lanes=s,t;case H0:return Yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case V0:o=9;break e;case Yf:o=11;break e;case Qf:o=14;break e;case Yn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Yc(t,e,n,r){return t=$t(22,t,r,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function lh(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function ch(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,r,i,s,o,a,l){return t=new TT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pp(s),t}function IT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mw(t){if(!t)return xr;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(vt(n))return D_(t,n,e)}return e}function Fw(t,e,n,r,i,s,o,a,l){return t=Pp(n,r,!0,t,i,s,o,a,l),t.context=Mw(null),n=t.current,r=at(),i=pr(n),s=bn(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ha(t,i,r),_t(t,r),t}function Qc(t,e,n,r){var i=e.current,s=at(),o=pr(i);return n=Mw(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(en(t,i,o,s),_l(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function by(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){by(t,e),(t=t.alternate)&&by(t,e)}function bT(){return null}var Uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Op(t){this._internalRoot=t}Xc.prototype.render=Op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Qc(t,e,null,null)};Xc.prototype.unmount=Op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;si(function(){Qc(null,t,null,null)}),e[An]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=p_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&g_(t)}};function Lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ny(){}function NT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=tc(o);s.call(c)}}var o=Fw(e,r,t,0,null,!1,!1,"",Ny);return t._reactRootContainer=o,t[An]=o.current,Oo(t.nodeType===8?t.parentNode:t),si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=tc(l);a.call(c)}}var l=Pp(t,0,!1,null,null,!1,!1,"",Ny);return t._reactRootContainer=l,t[An]=l.current,Oo(t.nodeType===8?t.parentNode:t),si(function(){Qc(e,l,n,r)}),l}function Zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tc(o);a.call(l)}}Qc(e,o,t,i)}else o=NT(n,e,t,i,r);return tc(o)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=to(e.pendingLanes);n!==0&&(Zf(e,n|1),_t(e,Ce()),!(Z&6)&&(hs=Ce()+500,br()))}break;case 13:si(function(){var r=On(t,1);if(r!==null){var i=at();en(r,t,1,i)}}),Ap(t,1)}};ep=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=at();en(e,t,134217728,n)}Ap(t,134217728)}};f_=function(t){if(t.tag===13){var e=pr(t),n=On(t,e);if(n!==null){var r=at();en(n,t,e,r)}Ap(t,e)}};p_=function(){return ne};m_=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};hd=function(t,e,n){switch(e){case"input":if(id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vc(r);if(!i)throw Error(T(90));q0(r),id(r,i)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};t_=Ip;n_=si;var RT={usingClientEntryPoint:!1,Events:[fa,Li,Vc,Z0,e_,Ip]},Ws={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PT={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||bT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{$c=rl.inject(PT),fn=rl}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RT;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(e))throw Error(T(200));return IT(t,e,null,n)};Pt.createRoot=function(t,e){if(!Lp(t))throw Error(T(299));var n=!1,r="",i=Uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Op(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=s_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return si(t)};Pt.hydrate=function(t,e,n){if(!Jc(e))throw Error(T(200));return Zc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Lp(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Uw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fw(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xc(e)};Pt.render=function(t,e,n){if(!Jc(e))throw Error(T(200));return Zc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(T(40));return t._reactRootContainer?(si(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};Pt.unstable_batchedUpdates=Ip;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jc(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Zc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Pt})(bS);var Ry=Qh;Yh.createRoot=Ry.createRoot,Yh.hydrateRoot=Ry.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Py="popstate";function AT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nc(i)}return LT(e,n,null,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OT(){return Math.random().toString(36).substr(2,8)}function Ay(t,e){return{usr:t.state,key:t.key,idx:e}}function Hd(t,e,n,r){return n===void 0&&(n=null),zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cs(e):e,{state:n,key:e&&e.key||r||OT()})}function nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(zo({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=or.Pop;let S=u(),m=S==null?null:S-c;c=S,l&&l({action:a,location:w.location,delta:m})}function f(S,m){a=or.Push;let p=Hd(w.location,S,m);n&&n(p,S),c=u()+1;let y=Ay(p,c),x=w.createHref(p);try{o.pushState(y,"",x)}catch{i.location.assign(x)}s&&l&&l({action:a,location:w.location,delta:1})}function g(S,m){a=or.Replace;let p=Hd(w.location,S,m);n&&n(p,S),c=u();let y=Ay(p,c),x=w.createHref(p);o.replaceState(y,"",x),s&&l&&l({action:a,location:w.location,delta:0})}function v(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:nc(S);return Le(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Py,d),l=S,()=>{i.removeEventListener(Py,d),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(S){return o.go(S)}};return w}var Oy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oy||(Oy={}));function DT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cs(e):e,i=Mp(r.pathname||"/",n);if(i==null)return null;let s=$w(t);MT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=WT(s[a],GT(i));return o}function $w(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=gr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$w(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:VT(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of jw(s.path))i(s,o,l)}),e}function jw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FT=/^:\w+$/,UT=3,$T=2,jT=1,BT=10,zT=-2,Ly=t=>t==="*";function VT(t,e){let n=t.split("/"),r=n.length;return n.some(Ly)&&(r+=zT),e&&(r+=$T),n.filter(i=>!Ly(i)).reduce((i,s)=>i+(FT.test(s)?UT:s===""?jT:BT),r)}function HT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=qT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;s.push({params:r,pathname:gr([i,u.pathname]),pathnameBase:JT(gr([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=gr([i,u.pathnameBase]))}return s}function qT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=YT(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function KT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GT(t){try{return decodeURI(t)}catch(e){return Dp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YT(t,e){try{return decodeURIComponent(t)}catch(n){return Dp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Mp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cs(t):t;return{pathname:n?n.startsWith("/")?n:XT(n,e):e,search:ZT(r),hash:eI(i)}}function XT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cs(t):(i=zo({},t),Le(!i.pathname||!i.pathname.includes("?"),uh("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),uh("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),uh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=QT(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),JT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const rI=typeof Object.is=="function"?Object.is:nI,{useState:iI,useEffect:sI,useLayoutEffect:oI,useDebugValue:aI}=Gh;function lI(t,e,n){const r=e(),[{inst:i},s]=iI({inst:{value:r,getSnapshot:e}});return oI(()=>{i.value=r,i.getSnapshot=e,hh(i)&&s({inst:i})},[t,r,e]),sI(()=>(hh(i)&&s({inst:i}),t(()=>{hh(i)&&s({inst:i})})),[t]),aI(r),r}function hh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!rI(n,r)}catch{return!0}}function cI(t,e,n){return e()}const uI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hI=!uI,dI=hI?cI:lI;"useSyncExternalStore"in Gh&&(t=>t.useSyncExternalStore)(Gh);const Vw=C.createContext(null),Hw=C.createContext(null),ma=C.createContext(null),eu=C.createContext(null),_i=C.createContext({outlet:null,matches:[]}),Ww=C.createContext(null);function Wd(){return Wd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wd.apply(this,arguments)}function fI(t,e){let{relative:n}=e===void 0?{}:e;ga()||Le(!1);let{basename:r,navigator:i}=C.useContext(ma),{hash:s,pathname:o,search:a}=qw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ga(){return C.useContext(eu)!=null}function tu(){return ga()||Le(!1),C.useContext(eu).location}function Nr(){ga()||Le(!1);let{basename:t,navigator:e}=C.useContext(ma),{matches:n}=C.useContext(_i),{pathname:r}=tu(),i=JSON.stringify(Bw(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=zw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:gr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function Fp(){let{matches:t}=C.useContext(_i),e=t[t.length-1];return e?e.params:{}}function qw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(_i),{pathname:i}=tu(),s=JSON.stringify(Bw(r).map(o=>o.pathnameBase));return C.useMemo(()=>zw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function pI(t,e){ga()||Le(!1);let{navigator:n}=C.useContext(ma),r=C.useContext(Hw),{matches:i}=C.useContext(_i),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=tu(),c;if(e){var u;let w=typeof e=="string"?Cs(e):e;a==="/"||(u=w.pathname)!=null&&u.startsWith(a)||Le(!1),c=w}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=DT(t,{pathname:f}),v=vI(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:gr([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:gr([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&v?C.createElement(eu.Provider,{value:{location:Wd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:or.Pop}},v):v}function mI(){let t=xI(),e=tI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}class gI extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(_i.Provider,{value:this.props.routeContext},C.createElement(Ww.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yI(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Vw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(_i.Provider,{value:e},r)}function vI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Le(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=C.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=C.createElement(mI,null));let u=e.concat(r.slice(0,a+1)),d=()=>{let f=s;return l?f=c:o.route.Component?f=C.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),C.createElement(yI,{match:o,routeContext:{outlet:s,matches:u},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?C.createElement(gI,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var Dy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Dy||(Dy={}));var rc;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(rc||(rc={}));function _I(t){let e=C.useContext(Hw);return e||Le(!1),e}function wI(t){let e=C.useContext(_i);return e||Le(!1),e}function EI(t){let e=wI(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function xI(){var t;let e=C.useContext(Ww),n=_I(rc.UseRouteError),r=EI(rc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Dt(t){Le(!1)}function CI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;ga()&&Le(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cs(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:g="default"}=r,v=C.useMemo(()=>{let w=Mp(c,a);return w==null?null:{location:{pathname:w,search:u,hash:d,state:f,key:g},navigationType:i}},[a,c,u,d,f,g,i]);return v==null?null:C.createElement(ma.Provider,{value:l},C.createElement(eu.Provider,{children:n,value:v}))}function SI(t){let{children:e,location:n}=t,r=C.useContext(Vw),i=r&&!e?r.router.routes:qd(e);return pI(i,n)}var My;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(My||(My={}));new Promise(()=>{});function qd(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,qd(r.props.children,s));return}r.type!==Dt&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kd(){return Kd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kd.apply(this,arguments)}function kI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function TI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function II(t,e){return t.button===0&&(!e||e==="_self")&&!TI(t)}const bI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function NI(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=AT({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(a),[s]),C.createElement(CI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const RI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oi=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,d=kI(e,bI),{basename:f}=C.useContext(ma),g,v=!1;if(typeof c=="string"&&PI.test(c)&&(g=c,RI)){let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),x=Mp(y.pathname,f);y.origin===p.origin&&x!=null?c=x+y.search+y.hash:v=!0}let w=fI(c,{relative:i}),S=AI(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i});function m(p){r&&r(p),p.defaultPrevented||S(p)}return C.createElement("a",Kd({},d,{href:g||w,onClick:v||s?r:m,ref:n,target:l}))});var Fy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Fy||(Fy={}));var Uy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Uy||(Uy={}));function AI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Nr(),l=tu(),c=qw(t,{relative:o});return C.useCallback(u=>{if(II(u,n)){u.preventDefault();let d=r!==void 0?r:nc(l)===nc(c);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}function OI(){return _("section",{className:"h-screen bg-gif",children:[h("aside",{className:"h-screen p-4 bg-fig-gr",id:"js-animate"}),h("style",{children:`
					.text-border {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}
					.bg-gif {
						width: 100%
						height: 50vh;
						margin-top: -125px;

						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.gifer.com/ODz.gif')
					}

					.bg-fig-gr {
						width: 100%
						margin-top: -125px;
						background-size: cover;
						background-position: center;
						background-color: #000f2094;
					}

					/* A N I M A C I O N E S */
					.slide-l {
						animation-duration: 30s;
						animation-name: slide-left;
					}
					@keyframes slide-left {
						from {
							margin-left: -90%;
							width: 100%
						}
						to {
							margin-left: 0%;
							width: 300%;
						}
					}
					.slide-r {
						animation-duration: 30s;
						animation-name: slide-right;
					}
					@keyframes slide-right {
						from {
							margin-left: -15%;
							width: 300%
						}
						to {
							margin-left: -95%;
							width: 100%;
						}
					}
					`})]})}const ds="/assets/logo_btc-red-5b50bde2.svg";function Cr({image:t,logo:e,classLogo:n}){return _("a",{href:"/",className:"flex items-baseline title-font font-medium items-center text-gray-900 md:mb-0 lg:order-none",children:[h("svg",{x:"0px",y:"0px",width:"27px",height:"27px",viewBox:"0 0 90 90",children:h("image",{id:"image0",width:"90",height:"90",x:"0",y:"0",href:t})}),h("span",{className:n+" ml-1 text-5xl font-semibold leading-3",children:e})]})}function LI(){return _("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40",children:[h("article",{className:"col-span-2",children:_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 ",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Navigation"}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/services",children:"Services"})}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/work",children:"Work"})}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/thoughts",children:"Thoughts"})}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/connect",children:"Connect"})})]})}),_("aside",{children:[_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Behind The Scenes"}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/about",children:"About Us"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/news",children:"News"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/jobs",children:"Jobs"})})]}),_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Offices"}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/",children:"BTC Americas"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/price-travel",children:"Price Travel"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/big-fish",children:"Big Fish"})})]}),_("aside",{className:"font-semibold px-8 text-gray-100",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Connect Us"}),_("ul",{className:"flex justify-start font-semibold text-gray-100 pr-6",children:[h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.facebook.com/BTCamericas",className:"pr-10",children:h("span",{className:"facebook hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.instagram.com/btcamericas/",className:"pr-10",children:h("span",{className:"instagram hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://twitter.com/BTCamericas",className:"pr-10",children:h("span",{className:"twitter hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.linkedin.com/company/btcamericas",className:"pr-10",children:h("span",{className:"linkedin hover:animate-pulse"})})})]})]})]}),h("style",{children:`
					.facebook {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/facebook.png");
					}

					.instagram {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/instagram.png");
					}

					.twitter {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/twitter.png");
					}

					.linkedin {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/linkedin.png");
					}
				`})]})}function DI(){const[t,e]=C.useState(!1);return _("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[h(Cr,{image:ds,classLogo:"text-gray-100",logo:"btc"}),_("nav",{className:"flex",children:[_("section",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus",onClick:()=>e(n=>!n),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]}),h("section",{className:t?"showMenuNav":"hideMenuNav",children:_("div",{className:"h-full",children:[_("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>e(!1),children:[h(Cr,{image:ds,classLogo:"text-gray-100",logo:"btc"}),_("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>e(n=>!n),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),h(LI,{})]})})]}),h("style",{children:`
					nav {
						width: 99.4px;
						display: flex;
						justify-content: flex-end;
					}
					.hideMenuNav {
						display: none;
					}
					.showMenuNav {
						display: block;
						position: fixed;
						width: 100%;
						height: 100vh;
						top: 0;
						left: 0;
						background: #000c1a;
						z-index: 15;
						overflow-y: scroll;
					}
					.showMenuNav article a:hover {
						-webkit-text-stroke: 2px #fefefe;
						color: transparent;
					}
					.showMenuNav aside a:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent !important;
					}
					.button-plus-active {
						background-color: #e90123;
						animation-name: resplandorAnimation;
						transform: rotate(45deg);
						animation-duration:  1s;
						animation-iteration-count: infinite;
					}

					.button-plus:hover {
						background-color: #e90123;
						animation-name: resplandorAnimation, rotation;
						animation-duration:  1s, 0.5s;
						animation-iteration-count: infinite, 1;
					}
					@keyframes rotation {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					@keyframes resplandorAnimation {
						0%,100%{
							box-shadow: 0 0 20px red;
						}
						50%{
							box-shadow: 0px 0px 0px red;
						}
					}
					`})]})}const Kw="/assets/logo_btc-9ca3af-8c3102c8.svg";function Qi({section:t,liOne:e,liTwo:n,liThree:r,liFourHref:i,liFour:s,classN:o}){return _("ul",{className:o+" text-gray-100 py-2 px-8 border-l border-gray-400",children:[h("h5",{className:"text-2xl font-semibold text-gray-400",children:"Company"}),h("li",{className:"",children:h("a",{href:"/",children:t})}),h("li",{className:"",children:h("a",{href:"/",children:e})}),h("li",{className:"",children:h("a",{href:"/",children:n})}),h("li",{className:"",children:h("a",{href:"/",children:r})}),h("li",{className:"",children:h("a",{href:i,children:s})})]})}function MI(){return _("footer",{className:"border-t border-gray-400 py-8 px-8 lg:px-40",children:[_("section",{className:"flex flex-wrap items-center justify-between",children:[h(Cr,{image:Kw,classLogo:"text-gray-400",logo:"btc"}),_("aside",{className:"flex flex-wrap",children:[h(Qi,{is:!0,classN:"md:border-none",section:"Company",liOne:"About us",liTwo:"Legal",liThree:"Career",liFour:"Contact"}),h(Qi,{section:"Services",liOne:"Pricing",liTwo:"Products",liThree:"Customers",liFour:"Success Stories"}),h(Qi,{section:"Support",liOne:"About us",liTwo:"Legal",liThree:"Career",liFourHref:"/login",liFour:"Log In"})]})]}),h("section",{className:"flex items-center flex-start text-gray-50",children:_("p",{children:["© Business Travel Consulting ",h("span",{id:"current-year"})," - All rights reserved · Privacy Policy"]})}),h("style",{children:`
                    aside ul li a {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    aside ul li a::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    aside ul li a::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					aside ul li a:hover::after {
                        width: 100%;
                    }

                    aside ul li a:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    aside ul li a::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]})}function wi(t){return _("div",{className:"bg-[#000c1a]",children:[h(DI,{}),t.children,h(MI,{})]})}function FI(){return h("div",{children:h(wi,{children:h(OI,{})})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ss(e)},Ss=function(t){return new Error("Firebase Database ("+Gw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[u],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new $I;const f=s<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qw=function(t){const e=Yw(t);return Up.encodeByteArray(e,!0)},ic=function(t){return Qw(t).replace(/\./g,"")},sc=function(t){try{return Up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){return Xw(void 0,t)}function Xw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BI(n)||(t[n]=Xw(t[n],e[n]));return t}function BI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=()=>zI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},nu=()=>{try{return VI()||HI()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jw=t=>{var e,n;return(n=(e=nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zw=t=>{const e=Jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},e1=()=>{var t;return(t=nu())===null||t===void 0?void 0:t.config},t1=t=>{var e;return(e=nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function qI(){var t;const e=(t=nu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function r1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i1(){return Gw.NODE_ADMIN===!0}function s1(){try{return typeof indexedDB=="object"}catch{return!1}}function YI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QI,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function XI(t,e){return t.replace(JI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){return JSON.parse(t)}function $e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Vo(sc(s[0])||""),n=Vo(sc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ZI=function(t){const e=o1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},eb=function(t){const e=o1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($y(s)&&$y(o)){if(!ac(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $y(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function nb(t,e){const n=new rb(t,e);return n.subscribe.bind(n)}class rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ib(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dh),i.error===void 0&&(i.error=dh),i.complete===void 0&&(i.complete=dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ib(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dh(){}function ru(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=1e3,ab=2,lb=4*60*60*1e3,cb=.5;function ub(t,e=ob,n=ab){const r=e*Math.pow(n,t),i=Math.round(cb*r*(Math.random()-.5)*2);return Math.min(lb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class Rt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ya;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fb(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:db(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function db(t){return t===Ur?void 0:t}function fb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const mb={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},gb=ee.INFO,yb={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},vb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=gb,this._logHandler=vb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const _b=(t,e)=>e.some(n=>t instanceof n);let jy,By;function wb(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eb(){return By||(By=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a1=new WeakMap,Yd=new WeakMap,l1=new WeakMap,fh=new WeakMap,jp=new WeakMap;function xb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a1.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function Cb(t){if(Yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yd.set(t,e)}let Qd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sb(t){Qd=t(Qd)}function kb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ph(this),e,...n);return l1.set(r,e.sort?e.sort():[e]),yr(r)}:Eb().includes(t)?function(...e){return t.apply(ph(this),e),yr(a1.get(this))}:function(...e){return yr(t.apply(ph(this),e))}}function Tb(t){return typeof t=="function"?kb(t):(t instanceof IDBTransaction&&Cb(t),_b(t,wb())?new Proxy(t,Qd):t)}function yr(t){if(t instanceof IDBRequest)return xb(t);if(fh.has(t))return fh.get(t);const e=Tb(t);return e!==t&&(fh.set(t,e),jp.set(e,t)),e}const ph=t=>jp.get(t);function Ib(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bb=["get","getKey","getAll","getAllKeys","count"],Nb=["put","add","delete","clear"],mh=new Map;function zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mh.get(e))return mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Nb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return mh.set(e,s),s}Sb(t=>({...t,get:(e,n,r)=>zy(e,n)||t.get(e,n,r),has:(e,n)=>!!zy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xd="@firebase/app",Vy="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new va("@firebase/app"),Ab="@firebase/app-compat",Ob="@firebase/analytics-compat",Lb="@firebase/analytics",Db="@firebase/app-check-compat",Mb="@firebase/app-check",Fb="@firebase/auth",Ub="@firebase/auth-compat",$b="@firebase/database",jb="@firebase/database-compat",Bb="@firebase/functions",zb="@firebase/functions-compat",Vb="@firebase/installations",Hb="@firebase/installations-compat",Wb="@firebase/messaging",qb="@firebase/messaging-compat",Kb="@firebase/performance",Gb="@firebase/performance-compat",Yb="@firebase/remote-config",Qb="@firebase/remote-config-compat",Xb="@firebase/storage",Jb="@firebase/storage-compat",Zb="@firebase/firestore",eN="@firebase/firestore-compat",tN="firebase",nN="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="[DEFAULT]",rN={[Xd]:"fire-core",[Ab]:"fire-core-compat",[Lb]:"fire-analytics",[Ob]:"fire-analytics-compat",[Mb]:"fire-app-check",[Db]:"fire-app-check-compat",[Fb]:"fire-auth",[Ub]:"fire-auth-compat",[$b]:"fire-rtdb",[jb]:"fire-rtdb-compat",[Bb]:"fire-fn",[zb]:"fire-fn-compat",[Vb]:"fire-iid",[Hb]:"fire-iid-compat",[Wb]:"fire-fcm",[qb]:"fire-fcm-compat",[Kb]:"fire-perf",[Gb]:"fire-perf-compat",[Yb]:"fire-rc",[Qb]:"fire-rc-compat",[Xb]:"fire-gcs",[Jb]:"fire-gcs-compat",[Zb]:"fire-fst",[eN]:"fire-fst-compat","fire-js":"fire-js",[tN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map,Zd=new Map;function iN(t,e){try{t.container.addComponent(e)}catch(n){ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(Zd.has(e))return ai.debug(`There were multiple attempts to register component ${e}.`),!1;Zd.set(e,t);for(const n of Ho.values())iN(n,t);return!0}function Ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new Ei("app","Firebase",sN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=nN;function c1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=e1()),!n)throw vr.create("no-options");const s=Ho.get(i);if(s){if(ac(n,s.options)&&ac(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new pb(i);for(const l of Zd.values())o.addComponent(l);const a=new oN(n,r,o);return Ho.set(i,a),a}function Bp(t=Jd){const e=Ho.get(t);if(!e&&t===Jd&&e1())return c1();if(!e)throw vr.create("no-app",{appName:t});return e}function aN(){return Array.from(Ho.values())}function Ie(t,e,n){var r;let i=(r=rN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ai.warn(a.join(" "));return}Ht(new Rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="firebase-heartbeat-database",cN=1,Wo="firebase-heartbeat-store";let gh=null;function u1(){return gh||(gh=Ib(lN,cN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wo)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),gh}async function uN(t){try{return await(await u1()).transaction(Wo).objectStore(Wo).get(h1(t))}catch(e){if(e instanceof qt)ai.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ai.warn(n.message)}}}async function Hy(t,e){try{const r=(await u1()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,h1(t)),await r.done}catch(n){if(n instanceof qt)ai.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ai.warn(r.message)}}}function h1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=1024,dN=30*24*60*60*1e3;class fN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wy(),{heartbeatsToSend:n,unsentEntries:r}=pN(this._heartbeatsCache.heartbeats),i=ic(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wy(){return new Date().toISOString().substring(0,10)}function pN(t,e=hN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s1()?YI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qy(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){Ht(new Rt("platform-logger",e=>new Rb(e),"PRIVATE")),Ht(new Rt("heartbeat",e=>new fN(e),"PRIVATE")),Ie(Xd,Vy,t),Ie(Xd,Vy,"esm2017"),Ie("fire-js","")}gN("");const Ky="@firebase/database",Gy="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d1="";function yN(t){d1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vN(e)}}catch{}return new _N},Wr=f1("localStorage"),ef=f1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new va("@firebase/database"),wN=function(){let t=1;return function(){return t++}}(),p1=function(t){const e=sb(t),n=new tb;n.update(e);const r=n.digest();return Up.encodeByteArray(r)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=_a.apply(null,r):typeof r=="object"?e+=$e(r):e+=r,e+=" "}return e};let Xr=null,Yy=!0;const EN=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xi.logLevel=ee.VERBOSE,Xr=Xi.log.bind(Xi),e&&ef.set("logging_enabled",!0)):typeof t=="function"?Xr=t:(Xr=null,ef.remove("logging_enabled"))},He=function(...t){if(Yy===!0&&(Yy=!1,Xr===null&&ef.get("logging_enabled")===!0&&EN(!0)),Xr){const e=_a.apply(null,t);Xr(e)}},wa=function(t){return function(...e){He(t,...e)}},tf=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);Xi.error(e)},Dn=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw Xi.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+_a(...t);Xi.warn(e)},xN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ps="[MIN_NAME]",li="[MAX_NAME]",xi=function(t,e){if(t===e)return 0;if(t===ps||e===li)return-1;if(e===ps||t===li)return 1;{const n=Qy(t),r=Qy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SN=function(t,e){return t===e?0:t<e?-1:1},qs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$e(e))},Vp=function(t){if(typeof t!="object"||t===null)return $e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=$e(e[r]),n+=":",n+=Vp(t[e[r]]);return n+="}",n},m1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const g1=function(t){I(!zp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},kN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const bN=new RegExp("^-?(0*)\\d{1,10}$"),NN=-2147483648,RN=2147483647,Qy=function(t){if(bN.test(t)){const e=Number(t);if(e>=NN&&e<=RN)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},PN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class Ji{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ji.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="5",y1="v",v1="s",_1="r",w1="f",E1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,x1="ls",C1="p",nf="ac",S1="websocket",k1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function I1(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===S1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===k1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LN(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={},vh={};function Wp(t){const e=t.toString();return yh[e]||(yh[e]=new DN),yh[e]}function MN(t,e){const n=t.toString();return vh[n]||(vh[n]=e()),vh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Is(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="start",UN="close",$N="pLPCommand",jN="pRTLPCB",b1="id",N1="pw",R1="ser",BN="cb",zN="seg",VN="ts",HN="d",WN="dframe",P1=1870,A1=30,qN=P1-A1,KN=25e3,GN=3e4;class Bi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wa(e),this.stats_=Wp(n),this.urlFn=l=>(this.appCheckToken&&(l[nf]=this.appCheckToken),I1(n,k1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GN)),CN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qp((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xy)this.id=a,this.password=l;else if(o===UN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xy]="t",r[R1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[y1]=Hp,this.transportSessionId&&(r[v1]=this.transportSessionId),this.lastSessionId&&(r[x1]=this.lastSessionId),this.applicationId&&(r[C1]=this.applicationId),this.appCheckToken&&(r[nf]=this.appCheckToken),typeof location<"u"&&location.hostname&&E1.test(location.hostname)&&(r[_1]=w1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bi.forceAllow_=!0}static forceDisallow(){Bi.forceDisallow_=!0}static isAvailable(){return Bi.forceAllow_?!0:!Bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kN()&&!TN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qw(n),i=m1(r,qN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WN]="t",r[b1]=e,r[N1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wN(),window[$N+this.uniqueCallbackIdentifier]=e,window[jN+this.uniqueCallbackIdentifier]=n,this.myIFrame=qp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[b1]=this.myID,e[N1]=this.myPW,e[R1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+A1+r.length<=P1;){const o=this.pendingSegs.shift();r=r+"&"+zN+i+"="+o.seg+"&"+VN+i+"="+o.ts+"&"+HN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(KN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=16384,QN=45e3;let lc=null;typeof MozWebSocket<"u"?lc=MozWebSocket:typeof WebSocket<"u"&&(lc=WebSocket);class Xt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wa(this.connId),this.stats_=Wp(n),this.connURL=Xt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[y1]=Hp,typeof location<"u"&&location.hostname&&E1.test(location.hostname)&&(o[_1]=w1),n&&(o[v1]=n),r&&(o[x1]=r),i&&(o[nf]=i),s&&(o[C1]=s),I1(e,S1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wr.set("previous_websocket_failure",!0);try{let r;i1(),this.mySock=new lc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&lc!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Wr.isInMemoryStorage||Wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Vo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=m1(n,YN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bi,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const i=this.transports_=[];for(const s of qo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=6e4,JN=5e3,ZN=10*1024,e2=100*1024,_h="t",Jy="d",t2="s",Zy="r",n2="e",ev="o",tv="a",nv="n",rv="p",r2="h";class i2{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wa("c:"+this.id+":"),this.transportManager_=new qo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_h in e){const n=e[_h];n===tv?this.upgradeIfSecondaryHealthy_():n===Zy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ev&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qs("t",e),r=qs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qs("t",e),r=qs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qs(_h,e);if(Jy in e){const r=e[Jy];if(n===r2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===t2?this.onConnectionShutdown_(r):n===Zy?this.onReset_(r):n===n2?tf("Server Error: "+r):n===ev?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hp!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends L1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$p()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cc}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=32,sv=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new ie("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sr(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Kp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function s2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ko(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function D1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ie(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function mt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return mt(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function o2(t,e){const n=Ko(t,0),r=Ko(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=xi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Gp(t,e){if(Sr(t)!==Sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sr(t)>Sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class a2{constructor(e,n){this.errorPrefix_=n,this.parts_=Ko(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=iu(this.parts_[r]);M1(this)}}function l2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=iu(e),M1(t)}function c2(t){const e=t.parts_.pop();t.byteLength_-=iu(e),t.parts_.length>0&&(t.byteLength_-=1)}function M1(t){if(t.byteLength_>sv)throw new Error(t.errorPrefix_+"has a key path longer than "+sv+" bytes ("+t.byteLength_+").");if(t.parts_.length>iv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iv+") or object contains a cycle "+$r(t))}function $r(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends L1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yp}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=1e3,u2=60*5*1e3,ov=30*1e3,h2=1.3,d2=3e4,f2="server_kill",av=3;class Nn extends O1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nn.nextPersistentConnectionId_++,this.log_=wa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ks,this.maxReconnectDelay_=u2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!i1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_($e(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ya,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Nn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const r=fs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ov)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ZI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tf("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>d2&&(this.reconnectDelay_=Ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*h2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new i2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{lt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(f2)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&lt(d),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gd(this.interruptReasons_)&&(this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=av&&(this.reconnectDelay_=ov,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=av&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+d1.replace(/\./g,"-")]=1,$p()?e["framework.cordova"]=1:r1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cc.getInstance().currentlyOnline();return Gd(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(ps,e),i=new K(ps,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;class F1 extends su{static get __EMPTY_NODE(){return il}static set __EMPTY_NODE(e){il=e}compare(e,n){return xi(e.name,n.name)}isDefinedOn(e){throw Ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(li,il)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,il)}toString(){return".key"}}const Zi=new F1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class p2{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new p2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t,e){return xi(t.name,e.name)}function Qp(t,e){return xi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;function g2(t){rf=t}const U1=function(t){return typeof t=="number"?"number:"+g1(t):"string:"+t},$1=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else I(t===rf||t.isEmpty(),"priority of unexpected type.");I(t===rf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lv;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$1(this.priorityNode_)}static set __childrenNodeConstructor(e){lv=e}static get __childrenNodeConstructor(){return lv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:q(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+U1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=g1(this.value_):e+=this.value_,this.lazyHash_=p1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),s=De.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j1,B1;function y2(t){j1=t}function v2(t){B1=t}class _2 extends su{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(li,new De("[PRIORITY-POST]",B1))}makePost(e,n){const r=j1(e);return new K(n,new De("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new _2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=Math.log(2);class E2{constructor(e){const n=s=>parseInt(Math.log(s)/w2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const uc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,null,null);{const g=parseInt(u/2,10)+l,v=i(l,g),w=i(g+1,c);return d=t[g],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,v,w)}},s=function(l){let c=null,u=null,d=t.length;const f=function(v,w){const S=d-v,m=d;d-=v;const p=i(S+1,m),y=t[S],x=n?n(y):y;g(new Fe(x,y.node,w,null,p))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));w?f(S,Fe.BLACK):(f(S,Fe.BLACK),f(S,Fe.RED))}return u},o=new E2(t.length),a=s(o);return new gt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;const Ii={};class Cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Ii&&_e,"ChildrenNode.ts has not been loaded"),wh=wh||new Cn({".priority":Ii},{".priority":_e}),wh}get(e){const n=fs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=uc(r,e.getCompare()):a=Ii;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Cn(u,c)}addToIndexes(e,n){const r=oc(this.indexes_,(i,s)=>{const o=fs(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),uc(a,o.getCompare())}else return Ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new Cn(r,this.indexSet_)}removeFromIndexes(e,n){const r=oc(this.indexes_,i=>{if(i===Ii)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new Cn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$1(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gs||(Gs=new j(new gt(Qp),null,Cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gs:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Gs:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{I(q(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+U1(this.getPriority().val())+":"),this.forEachChild(_e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":p1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===Zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_e),i=n.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zi?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class x2 extends j{constructor(){super(new gt(Qp),j.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ea=new x2;Object.defineProperties(K,{MIN:{value:new K(ps,j.EMPTY_NODE)},MAX:{value:new K(li,Ea)}});F1.__EMPTY_NODE=j.EMPTY_NODE;De.__childrenNodeConstructor=j;g2(Ea);v2(Ea);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=!0;function Ue(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,Ue(e))}if(!(t instanceof Array)&&C2){const n=[];let r=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=uc(n,m2,o=>o.name,Qp);if(r){const o=uc(n,_e.getCompare());return new j(s,Ue(e),new Cn({".priority":o},{".priority":_e}))}else return new j(s,Ue(e),Cn.Default)}else{let n=j.EMPTY_NODE;return Ye(t,(r,i)=>{if(vn(t,r)&&r.substring(0,1)!=="."){const s=Ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ue(e))}}y2(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2 extends su{constructor(e){super(),this.indexPath_=e,I(!Y(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xi(e.name,n.name):s}makePost(e,n){const r=Ue(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new K(li,e)}toString(){return Ko(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2 extends su{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=Ue(e);return new K(n,r)}toString(){return".value"}}const T2=new k2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){return{type:"value",snapshotNode:t}}function ms(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Go(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function I2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Go(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ms(n,r)):o.trackChildChange(Yo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Go(i,s))}),n.isLeafNode()||n.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Yo(i,s,o))}else r.trackChildChange(ms(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.indexedFilter_=new Xp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qo.getStartPost_(e),this.endPost_=Qo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(_e,(o,a)=>{s.matches(new K(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new K(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Yo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Go(n,d));const w=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ms(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Go(c.name,c.node)),s.trackChildChange(ms(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ps}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:li}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Jp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function N2(t){return t.loadsAllData()?new Xp(t.getIndex()):t.hasLimit()?new b2(t):new Qo(t)}function cv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===T2?n="$value":t.index_===Zi?n="$key":(I(t.index_ instanceof S2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=$e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+$e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=$e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+$e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends O1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=wa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=hc.getListenId_(e,r),a={};this.listens_[o]=a;const l=cv(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),fs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=hc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=cv(e._queryParams),r=e._path.toString(),i=new ya;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ks(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vo(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){return{value:null,children:new Map}}function V1(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,dc());const i=t.children.get(r);e=oe(e),V1(i,e,n)}}function sf(t,e,n){t.value!==null?n(e,t.value):P2(t,(r,i)=>{const s=new ie(e.toString()+"/"+r);sf(i,s,n)})}function P2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=10*1e3,O2=30*1e3,L2=5*60*1e3;class D2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new A2(e);const r=hv+(O2-hv)*Math.random();yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&vn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*L2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function Zp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function em(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Jt.ACK_USER_WRITE,this.source=Zp()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new fc(te(),n,this.revert)}}else return I(q(this.path)===e,"operationForChild called for unrelated child."),new fc(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.source=e,this.path=n,this.type=Jt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Xo(this.source,te()):new Xo(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Jt.OVERWRITE}operationForChild(e){return Y(this.path)?new ci(this.source,te(),this.snap.getImmediateChild(e)):new ci(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Jt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new ci(this.source,te(),n.value):new gs(this.source,te(),n)}else return I(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function F2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(I2(o.childName,o.snapshotNode))}),Ys(t,i,"child_removed",e,r,n),Ys(t,i,"child_added",e,r,n),Ys(t,i,"child_moved",s,r,n),Ys(t,i,"child_changed",e,r,n),Ys(t,i,"value",e,r,n),i}function Ys(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>$2(t,a,l)),o.forEach(a=>{const l=U2(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function U2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $2(t,e,n){if(e.childName==null||n.childName==null)throw Ss("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){return{eventCache:t,serverCache:e}}function vo(t,e,n,r){return ou(new ui(e,n,r),t.serverCache)}function H1(t,e,n,r){return ou(t.eventCache,new ui(e,n,r))}function of(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh;const j2=()=>(Eh||(Eh=new gt(SN)),Eh);class se{constructor(e,n=j2()){this.value=e,this.children=n}static fromObject(e){let n=new se(null);return Ye(e,(r,i)=>{n=n.set(new ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Y(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:ve(new ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new se(null)}}set(e,n){if(Y(e))return new se(n,this.children);{const r=q(e),s=(this.children.get(r)||new se(null)).set(oe(e),n),o=this.children.insert(r,s);return new se(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(Y(e))return n;{const r=q(e),s=(this.children.get(r)||new se(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new se(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),ve(n,i),r):new se(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new se(null))}}function _o(t,e,n){if(Y(e))return new tn(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=mt(i,e);return s=s.updateChild(o,n),new tn(t.writeTree_.set(i,s))}else{const i=new se(n),s=t.writeTree_.setTree(e,i);return new tn(s)}}}function af(t,e,n){let r=t;return Ye(n,(i,s)=>{r=_o(r,ve(e,i),s)}),r}function dv(t,e){if(Y(e))return tn.empty();{const n=t.writeTree_.setTree(e,new se(null));return new tn(n)}}function lf(t,e){return Ci(t,e)!=null}function Ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function fv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function _r(t,e){if(Y(e))return t;{const n=Ci(t,e);return n!=null?new tn(new se(n)):new tn(t.writeTree_.subtree(e))}}function cf(t){return t.writeTree_.isEmpty()}function ys(t,e){return W1(te(),t.writeTree_,e)}function W1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=W1(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){return Y1(e,t)}function B2(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=_o(t.visibleWrites,e,n)),t.lastWriteId=r}function z2(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=af(t.visibleWrites,e,n),t.lastWriteId=r}function V2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function H2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&W2(a,r.path)?i=!1:jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return q2(t),!0;if(r.snap)t.visibleWrites=dv(t.visibleWrites,r.path);else{const a=r.children;Ye(a,l=>{t.visibleWrites=dv(t.visibleWrites,ve(r.path,l))})}return!0}else return!1}function W2(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(ve(t.path,n),e))return!0;return!1}function q2(t){t.visibleWrites=q1(t.allWrites,K2,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function K2(t){return t.visible}function q1(t,e,n){let r=tn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jt(n,o)?(a=mt(n,o),r=_o(r,a,s.snap)):jt(o,n)&&(a=mt(o,n),r=_o(r,te(),s.snap.getChild(a)));else if(s.children){if(jt(n,o))a=mt(n,o),r=af(r,a,s.children);else if(jt(o,n))if(a=mt(o,n),Y(a))r=af(r,te(),s.children);else{const l=fs(s.children,q(a));if(l){const c=l.getChild(oe(a));r=_o(r,te(),c)}}}else throw Ss("WriteRecord should have .snap or .children")}}return r}function K1(t,e,n,r,i){if(!r&&!i){const s=Ci(t.visibleWrites,e);if(s!=null)return s;{const o=_r(t.visibleWrites,e);if(cf(o))return n;if(n==null&&!lf(o,te()))return null;{const a=n||j.EMPTY_NODE;return ys(o,a)}}}else{const s=_r(t.visibleWrites,e);if(!i&&cf(s))return n;if(!i&&n==null&&!lf(s,te()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(jt(c.path,e)||jt(e,c.path))},a=q1(t.allWrites,o,e),l=n||j.EMPTY_NODE;return ys(a,l)}}}function G2(t,e,n){let r=j.EMPTY_NODE;const i=Ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_r(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=ys(_r(s,new ie(o)),a);r=r.updateImmediateChild(o,l)}),fv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_r(t.visibleWrites,e);return fv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Y2(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(lf(t.visibleWrites,s))return null;{const o=_r(t.visibleWrites,s);return cf(o)?i.getChild(n):ys(o,i.getChild(n))}}function Q2(t,e,n,r){const i=ve(e,n),s=Ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_r(t.visibleWrites,i);return ys(o,r.getNode().getImmediateChild(n))}else return null}function X2(t,e){return Ci(t.visibleWrites,e)}function J2(t,e,n,r,i,s,o){let a;const l=_r(t.visibleWrites,e),c=Ci(l,te());if(c!=null)a=c;else if(n!=null)a=ys(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&u.length<i;)d(g,r)!==0&&u.push(g),g=f.getNext();return u}else return[]}function Z2(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function pc(t,e,n,r){return K1(t.writeTree,t.treePath,e,n,r)}function rm(t,e){return G2(t.writeTree,t.treePath,e)}function pv(t,e,n,r){return Y2(t.writeTree,t.treePath,e,n,r)}function mc(t,e){return X2(t.writeTree,ve(t.treePath,e))}function eR(t,e,n,r,i,s){return J2(t.writeTree,t.treePath,e,n,r,i,s)}function im(t,e,n){return Q2(t.writeTree,t.treePath,e,n)}function G1(t,e){return Y1(ve(t.treePath,e),t.writeTree)}function Y1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Yo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Go(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ms(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Yo(r,e.snapshotNode,i.oldSnap));else throw Ss("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Q1=new nR;class sm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ui(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return im(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hi(this.viewCache_),s=eR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){return{filter:t}}function iR(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sR(t,e,n,r,i){const s=new tR;let o,a;if(n.type===Jt.OVERWRITE){const c=n;c.source.fromUser?o=uf(t,e,c.path,c.snap,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=gc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Jt.MERGE){const c=n;c.source.fromUser?o=aR(t,e,c.path,c.children,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Jt.ACK_USER_WRITE){const c=n;c.revert?o=uR(t,e,c.path,r,i,s):o=lR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Jt.LISTEN_COMPLETE)o=cR(t,e,n.path,r,s);else throw Ss("Unknown operation type: "+n.type);const l=s.getChanges();return oR(e,o,l),{viewCache:o,changes:l}}function oR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=of(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(z1(of(e)))}}function X1(t,e,n,r,i,s){const o=e.eventCache;if(mc(r,n)!=null)return e;{let a,l;if(Y(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hi(e),u=c instanceof j?c:j.EMPTY_NODE,d=rm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=pc(r,hi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=q(n);if(c===".priority"){I(Sr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=pv(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=oe(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=pv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=im(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return vo(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function gc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),g,null)}else{const g=q(n);if(!l.isCompleteForPath(n)&&Sr(n)>1)return e;const v=oe(n),S=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),g,S,v,Q1,null)}const d=H1(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),f=new sm(i,d,s);return X1(t,d,n,i,f,a)}function uf(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new sm(i,e,s);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vo(e,c,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=vo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=oe(n),g=a.getNode().getImmediateChild(d);let v;if(Y(f))v=r;else{const w=u.getCompleteChild(d);w!=null?Kp(f)===".priority"&&w.getChild(D1(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=j.EMPTY_NODE}if(g.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),d,v,f,u,o);l=vo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function mv(t,e){return t.eventCache.isCompleteForChild(e)}function aR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ve(n,l);mv(e,q(u))&&(a=uf(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ve(n,l);mv(e,q(u))||(a=uf(t,a,u,c,i,s,o))}),a}function gv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=r:c=new se(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=gv(t,g,f);l=gc(t,l,new ie(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),w=gv(t,v,f);l=gc(t,l,new ie(d),w,i,s,o,a)}}),l}function lR(t,e,n,r,i,s,o){if(mc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let c=new se(null);return l.getNode().forEachChild(Zi,(u,d)=>{c=c.set(new ie(u),d)}),hf(t,e,n,c,i,s,a,o)}else return e}else{let c=new se(null);return r.foreach((u,d)=>{const f=ve(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),hf(t,e,n,c,i,s,a,o)}}function cR(t,e,n,r,i){const s=e.serverCache,o=H1(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return X1(t,o,n,r,Q1,i)}function uR(t,e,n,r,i,s){let o;if(mc(r,n)!=null)return e;{const a=new sm(r,e,i),l=e.eventCache.getNode();let c;if(Y(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=pc(r,hi(e));else{const d=e.serverCache.getNode();I(d instanceof j,"serverChildren would be complete if leaf node"),u=rm(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=q(n);let d=im(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,oe(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,oe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pc(r,hi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||mc(r,te())!=null,vo(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xp(r.getIndex()),s=N2(r);this.processor_=rR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new ui(l,o.isFullyInitialized(),i.filtersNodes()),d=new ui(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ou(d,u),this.eventGenerator_=new M2(this.query_)}get query(){return this.query_}}function dR(t){return t.viewCache_.serverCache.getNode()}function fR(t,e){const n=hi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function yv(t){return t.eventRegistrations_.length===0}function pR(t,e){t.eventRegistrations_.push(e)}function vv(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function _v(t,e,n,r){e.type===Jt.MERGE&&e.source.queryId!==null&&(I(hi(t.viewCache_),"We should always have a full cache before handling merges"),I(of(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=sR(t.processor_,i,e,n,r);return iR(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,J1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function mR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(s,o)=>{r.push(ms(s,o))}),n.isFullyInitialized()&&r.push(z1(n.getNode())),J1(t,r,n.getNode(),e)}function J1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return F2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;class gR{constructor(){this.views=new Map}}function yR(t){I(!yc,"__referenceConstructor has already been defined"),yc=t}function vR(){return I(yc,"Reference.ts has not been loaded"),yc}function _R(t){return t.views.size===0}function om(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),_v(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_v(o,e,n,r));return s}}function wR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=pc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=rm(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=ou(new ui(a,l,!1),new ui(r,i,!1));return new hR(e,c)}return o}function ER(t,e,n,r,i,s){const o=wR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pR(o,n),mR(o,n)}function xR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(vv(c,n,r)),yv(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(vv(l,n,r)),yv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!kr(t)&&s.push(new(vR())(e._repo,e._path)),{removed:s,events:o}}function Z1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function es(t,e){let n=null;for(const r of t.views.values())n=n||fR(r,e);return n}function eE(t,e){if(e._queryParams.loadsAllData())return au(t);{const r=e._queryIdentifier;return t.views.get(r)}}function tE(t,e){return eE(t,e)!=null}function kr(t){return au(t)!=null}function au(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;function CR(t){I(!vc,"__referenceConstructor has already been defined"),vc=t}function SR(){return I(vc,"Reference.ts has not been loaded"),vc}let kR=1;class wv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=Z2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nE(t,e,n,r,i){return B2(t.pendingWriteTree_,e,n,r,i),i?bs(t,new ci(Zp(),e,n)):[]}function TR(t,e,n,r){z2(t.pendingWriteTree_,e,n,r);const i=se.fromObject(n);return bs(t,new gs(Zp(),e,i))}function ar(t,e,n=!1){const r=V2(t.pendingWriteTree_,e);if(H2(t.pendingWriteTree_,e)){let s=new se(null);return r.snap!=null?s=s.set(te(),!0):Ye(r.children,o=>{s=s.set(new ie(o),!0)}),bs(t,new fc(r.path,s,n))}else return[]}function lu(t,e,n){return bs(t,new ci(em(),e,n))}function IR(t,e,n){const r=se.fromObject(n);return bs(t,new gs(em(),e,r))}function bR(t,e){return bs(t,new Xo(em(),e))}function NR(t,e,n){const r=lm(t,n);if(r){const i=cm(r),s=i.path,o=i.queryId,a=mt(s,e),l=new Xo(tm(o),a);return um(t,s,l)}else return[]}function df(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||tE(o,e))){const l=xR(o,e,n,r);_R(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>kr(g));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=AR(f);for(let v=0;v<g.length;++v){const w=g[v],S=w.query,m=sE(t,w);t.listenProvider_.startListening(wo(S),_c(t,S),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(wo(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(cu(f));t.listenProvider_.stopListening(wo(f),g)}))}OR(t,c)}return a}function RR(t,e,n,r){const i=lm(t,r);if(i!=null){const s=cm(i),o=s.path,a=s.queryId,l=mt(o,e),c=new ci(tm(a),l,n);return um(t,o,c)}else return[]}function PR(t,e,n,r){const i=lm(t,r);if(i){const s=cm(i),o=s.path,a=s.queryId,l=mt(o,e),c=se.fromObject(n),u=new gs(tm(a),l,c);return um(t,o,u)}else return[]}function Ev(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=mt(f,i);s=s||es(g,v),o=o||kr(g)});let a=t.syncPointTree_.get(i);a?(o=o||kr(a),s=s||es(a,te())):(a=new gR,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const w=es(v,te());w&&(s=s.updateImmediateChild(g,w))}));const c=tE(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=cu(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=LR();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=nm(t.pendingWriteTree_,i);let d=ER(a,e,n,u,s,l);if(!c&&!o&&!r){const f=eE(a,e);d=d.concat(DR(t,e,f))}return d}function am(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=mt(o,e),c=es(a,l);if(c)return c});return K1(i,e,s,n,!0)}function bs(t,e){return rE(e,t.syncPointTree_,null,nm(t.pendingWriteTree_,te()))}function rE(t,e,n,r){if(Y(t.path))return iE(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=es(i,te()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=G1(r,o);s=s.concat(rE(a,l,c,u))}return i&&(s=s.concat(om(i,t,r,n))),s}}function iE(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=es(i,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=G1(r,o),u=t.operationForChild(o);u&&(s=s.concat(iE(u,a,l,c)))}),i&&(s=s.concat(om(i,t,r,n))),s}function sE(t,e){const n=e.query,r=_c(t,n);return{hashFn:()=>(dR(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?NR(t,n._path,r):bR(t,n._path);{const s=IN(i,n);return df(t,n,null,s)}}}}function _c(t,e){const n=cu(e);return t.queryToTagMap.get(n)}function cu(t){return t._path.toString()+"$"+t._queryIdentifier}function lm(t,e){return t.tagToQueryMap.get(e)}function cm(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function um(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=nm(t.pendingWriteTree_,e);return om(r,n,i,null)}function AR(t){return t.fold((e,n,r)=>{if(n&&kr(n))return[au(n)];{let i=[];return n&&(i=Z1(n)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function wo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SR())(t._repo,t._path):t}function OR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function LR(){return kR++}function DR(t,e,n){const r=e._path,i=_c(t,e),s=sE(t,n),o=t.listenProvider_.startListening(wo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!kr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Y(c)&&u&&kr(u))return[au(u).query];{let f=[];return u&&(f=f.concat(Z1(u).map(g=>g.query))),Ye(d,(g,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(wo(u),_c(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hm(n)}node(){return this.node_}}class dm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new dm(this.syncTree_,n)}node(){return am(this.syncTree_,this.path_)}}const MR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xv=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return FR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return UR(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},FR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},UR=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},oE=function(t,e,n,r){return fm(e,new dm(n,t),r)},aE=function(t,e,n){return fm(t,new hm(e),n)};function fm(t,e,n){const r=t.getPriority().val(),i=xv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=xv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new De(a,Ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new De(i))),o.forEachChild(_e,(a,l)=>{const c=fm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function mm(t,e){let n=e instanceof ie?e:new ie(e),r=t,i=q(n);for(;i!==null;){const s=fs(r.node.children,i)||{children:{},childCount:0};r=new pm(i,r,s),n=oe(n),i=q(n)}return r}function Ns(t){return t.node.value}function lE(t,e){t.node.value=e,ff(t)}function cE(t){return t.node.childCount>0}function $R(t){return Ns(t)===void 0&&!cE(t)}function uu(t,e){Ye(t.node.children,(n,r)=>{e(new pm(n,t,r))})}function uE(t,e,n,r){n&&!r&&e(t),uu(t,i=>{uE(i,e,!0,r)}),n&&r&&e(t)}function jR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xa(t){return new ie(t.parent===null?t.name:xa(t.parent)+"/"+t.name)}function ff(t){t.parent!==null&&BR(t.parent,t.name,t)}function BR(t,e,n){const r=$R(n),i=vn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ff(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ff(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/[\[\].#$\/\u0000-\u001F\u007F]/,VR=/[\[\].#$\u0000-\u001F\u007F]/,xh=10*1024*1024,gm=function(t){return typeof t=="string"&&t.length!==0&&!zR.test(t)},hE=function(t){return typeof t=="string"&&t.length!==0&&!VR.test(t)},HR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hE(t)},WR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zp(t)||t&&typeof t=="object"&&vn(t,".sv")},dE=function(t,e,n,r){r&&e===void 0||hu(ru(t,"value"),e,n)},hu=function(t,e,n){const r=n instanceof ie?new a2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$r(r));if(typeof e=="function")throw new Error(t+"contains a function "+$r(r)+" with contents = "+e.toString());if(zp(e))throw new Error(t+"contains "+e.toString()+" "+$r(r));if(typeof e=="string"&&e.length>xh/3&&iu(e)>xh)throw new Error(t+"contains a string greater than "+xh+" utf8 bytes "+$r(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gm(o)))throw new Error(t+" contains an invalid key ("+o+") "+$r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);l2(r,o),hu(t,a,r),c2(r)}),i&&s)throw new Error(t+' contains ".value" child '+$r(r)+" in addition to actual children.")}},qR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ko(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!gm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(o2);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&jt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},KR=function(t,e,n,r){if(r&&e===void 0)return;const i=ru(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ye(e,(o,a)=>{const l=new ie(o);if(hu(i,a,ve(n,l)),Kp(l)===".priority"&&!WR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),qR(i,s)},fE=function(t,e,n,r){if(!(r&&n===void 0)&&!hE(n))throw new Error(ru(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fE(t,e,n,r)},ym=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},YR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HR(n))throw new Error(ru(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function du(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function pE(t,e,n){du(t,n),mE(t,r=>Gp(r,e))}function rn(t,e,n){du(t,n),mE(t,r=>jt(r,e)||jt(e,r))}function mE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(XR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function XR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xr&&He("event: "+n.toString()),Is(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="repo_interrupt",ZR=25;class eP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dc(),this.transactionQueueTree_=new pm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tP(t,e,n){if(t.stats_=Wp(t.repoInfo_),t.forceRestClient_||PN())t.server_=new hc(t.repoInfo_,(r,i,s,o)=>{Cv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Sv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(r,i,s,o)=>{Cv(t,r,i,s,o)},r=>{Sv(t,r)},r=>{nP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=MN(t.repoInfo_,()=>new D2(t.stats_,t.server_)),t.infoData_=new R2,t.infoSyncTree_=new wv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=lu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vm(t,"connected",!1),t.serverSyncTree_=new wv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);rn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function gE(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fu(t){return MR({timestamp:gE(t)})}function Cv(t,e,n,r,i){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=oc(n,c=>Ue(c));o=PR(t.serverSyncTree_,s,l,i)}else{const l=Ue(n);o=RR(t.serverSyncTree_,s,l,i)}else if(r){const l=oc(n,c=>Ue(c));o=IR(t.serverSyncTree_,s,l)}else{const l=Ue(n);o=lu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=vs(t,s)),rn(t.eventQueue_,a,o)}function Sv(t,e){vm(t,"connected",e),e===!1&&sP(t)}function nP(t,e){Ye(e,(n,r)=>{vm(t,n,r)})}function vm(t,e,n){const r=new ie("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(r,i);const s=lu(t.infoSyncTree_,r,i);rn(t.eventQueue_,r,s)}function _m(t){return t.nextWriteId_++}function rP(t,e,n,r,i){pu(t,"set",{path:e.toString(),value:n,priority:r});const s=fu(t),o=Ue(n,r),a=am(t.serverSyncTree_,e),l=aE(o,a,s),c=_m(t),u=nE(t.serverSyncTree_,e,l,c,!0);du(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||lt("set at "+e+" failed: "+f);const w=ar(t.serverSyncTree_,c,!v);rn(t.eventQueue_,e,w),pf(t,i,f,g)});const d=Em(t,e);vs(t,d),rn(t.eventQueue_,d,[])}function iP(t,e,n,r){pu(t,"update",{path:e.toString(),value:n});let i=!0;const s=fu(t),o={};if(Ye(n,(a,l)=>{i=!1,o[a]=oE(ve(e,a),Ue(l),t.serverSyncTree_,s)}),i)He("update() called with empty data.  Don't do anything."),pf(t,r,"ok",void 0);else{const a=_m(t),l=TR(t.serverSyncTree_,e,o,a);du(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||lt("update at "+e+" failed: "+c);const f=ar(t.serverSyncTree_,a,!d),g=f.length>0?vs(t,e):e;rn(t.eventQueue_,g,f),pf(t,r,c,u)}),Ye(n,c=>{const u=Em(t,ve(e,c));vs(t,u)}),rn(t.eventQueue_,e,[])}}function sP(t){pu(t,"onDisconnectEvents");const e=fu(t),n=dc();sf(t.onDisconnect_,te(),(i,s)=>{const o=oE(i,s,t.serverSyncTree_,e);V1(n,i,o)});let r=[];sf(n,te(),(i,s)=>{r=r.concat(lu(t.serverSyncTree_,i,s));const o=Em(t,i);vs(t,o)}),t.onDisconnect_=dc(),rn(t.eventQueue_,te(),r)}function oP(t,e,n){let r;q(e._path)===".info"?r=Ev(t.infoSyncTree_,e,n):r=Ev(t.serverSyncTree_,e,n),pE(t.eventQueue_,e._path,r)}function kv(t,e,n){let r;q(e._path)===".info"?r=df(t.infoSyncTree_,e,n):r=df(t.serverSyncTree_,e,n),pE(t.eventQueue_,e._path,r)}function aP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(JR)}function pu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function pf(t,e,n,r){e&&Is(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function yE(t,e,n){return am(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function wm(t,e=t.transactionQueueTree_){if(e||mu(t,e),Ns(e)){const n=_E(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lP(t,xa(e),n)}else cE(e)&&uu(e,n=>{wm(t,n)})}function lP(t,e,n){const r=n.map(c=>c.currentWriteId),i=yE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=mt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{pu(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ar(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();mu(t,mm(t.transactionQueueTree_,e)),wm(t,t.transactionQueueTree_),rn(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Is(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}vs(t,e)}},o)}function vs(t,e){const n=vE(t,e),r=xa(n),i=_E(t,n);return cP(t,i,r),r}function cP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=mt(n,l.path);let u=!1,d;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ZR)u=!0,d="maxretry",i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else{const f=yE(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){hu("transaction failed: Data returned ",g,l.path);let v=Ue(g);typeof g=="object"&&g!=null&&vn(g,".priority")||(v=v.updatePriority(f.getPriority()));const S=l.currentWriteId,m=fu(t),p=aE(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=_m(t),o.splice(o.indexOf(S),1),i=i.concat(nE(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(ar(t.serverSyncTree_,S,!0))}else u=!0,d="nodata",i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0))}rn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}mu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Is(r[a]);wm(t,t.transactionQueueTree_)}function vE(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&Ns(r)===void 0;)r=mm(r,n),e=oe(e),n=q(e);return r}function _E(t,e){const n=[];return wE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function wE(t,e,n){const r=Ns(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uu(e,i=>{wE(t,i,n)})}function mu(t,e){const n=Ns(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,lE(e,n.length>0?n:void 0)}uu(e,r=>{mu(t,r)})}function Em(t,e){const n=xa(vE(t,e)),r=mm(t.transactionQueueTree_,e);return jR(r,i=>{Ch(t,i)}),Ch(t,r),uE(r,i=>{Ch(t,i)}),n}function Ch(t,e){const n=Ns(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?lE(e,void 0):n.length=s+1,rn(t.eventQueue_,xa(e),i);for(let o=0;o<r.length;o++)Is(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tv=function(t,e){const n=dP(t),r=n.namespace;n.domain==="firebase.com"&&Dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new T1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ie(n.pathString)}},dP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=uP(t.substring(u,d)));const f=hP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Iv.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Iv.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class xE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:Kp(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const e=uv(this._queryParams),n=Vp(e);return n==="{}"?"default":n}get _queryObject(){return uv(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof xm))return!1;const n=this._repo===e._repo,r=Gp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+s2(this._path)}}class jn extends xm{constructor(e,n){super(e,n,new Jp,!1)}get parent(){const e=D1(this._path);return e===null?null:new jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),r=_s(this.ref,e);return new Jo(this._node.getChild(n),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jo(i,_s(this.ref,r),_e)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sn(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?_s(t._root,e):t._root}function _s(t,e){return t=be(t),q(t._path)===null?GR("child","path",e,!1):fE("child","path",e,!1),new jn(t._repo,ve(t._path,e))}function CE(t,e){t=be(t),ym("push",t._path),dE("push",e,t._path,!0);const n=gE(t._repo),r=fP(n),i=_s(t,r),s=_s(t,r);let o;return e!=null?o=kE(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function SE(t){return ym("remove",t._path),kE(t,null)}function kE(t,e){t=be(t),ym("set",t._path),dE("set",e,t._path,!1);const n=new ya;return rP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function mP(t,e){KR("update",e,t._path,!1);const n=new ya;return iP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Cm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new EE("value",this,new Jo(e.snapshotNode,new jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xE(this,e,n):null}matches(e){return e instanceof Cm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xE(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=_s(new jn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new EE(e.type,this,new Jo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Sm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ca(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{kv(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new pP(n,s||void 0),a=e==="value"?new Cm(o):new Sm(e,o);return oP(t._repo,t,a),()=>kv(t._repo,t,a)}function Rr(t,e,n,r){return Ca(t,"value",e,n,r)}function gP(t,e,n,r){return Ca(t,"child_added",e,n,r)}function yP(t,e,n,r){return Ca(t,"child_changed",e,n,r)}function vP(t,e,n,r){return Ca(t,"child_moved",e,n,r)}function _P(t,e,n,r){return Ca(t,"child_removed",e,n,r)}yR(jn);CR(jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="FIREBASE_DATABASE_EMULATOR_HOST",mf={};let EP=!1;function xP(t,e,n,r){t.repoInfo_=new T1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function CP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tv(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[wP]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Tv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ji(Ji.OWNER):new ON(t.name,t.options,e);YR("Invalid Firebase Database URL",o),Y(o.path)||Dn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=kP(a,t,u,new AN(t.name,n));return new TP(d,t)}function SP(t,e){const n=mf[e];(!n||n[t.key]!==t)&&Dn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aP(t),delete n[t.key]}function kP(t,e,n,r){let i=mf[e.name];i||(i={},mf[e.name]=i);let s=i[t.toURLString()];return s&&Dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eP(t,EP,n,r),i[t.toURLString()]=s,s}class TP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dn("Cannot call "+e+" on a deleted database.")}}function Pr(t=Bp(),e){const n=Ts(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Zw("database");r&&IP(n,...r)}return n}function IP(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Dn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ji(Ji.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:n1(r.mockUserToken,t.app.options.projectId);s=new Ji(o)}xP(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){yN($n),Ht(new Rt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return CP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ie(Ky,Gy,t),Ie(Ky,Gy,"esm2017")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bP();function km(t){const{vacancyData:e}=t,{vacancyTitle:n,typeVacancy:r,areaVacancy:i,locationPlace:s,typeLocation:o}=e;return _("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-2",children:[_("div",{children:[h("span",{className:"text-slate-400 text-sm",children:i}),h("h3",{className:"font-bold mt-px text-gray-100",children:n}),_("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:r}),_("span",{className:"text-slate-400 text-sm flex gap-1 items-center",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),o,", ",s]})]})]}),h("div",{children:t.children})]})}function NP(){const[t,e]=C.useState({}),[n,r]=C.useState(0),i=Pr(),s=sn(i,"/vacancy");C.useEffect(()=>{Rr(s,l=>{e(l.val())})},[]);const o=n+20,a=Object.keys(t).slice(n,o);return _(wi,{children:[_("article",{className:"flex justify-center flex-col items-center pb-20 px-2",children:[h("header",{className:"lg:mt-[-113px] flex justify-center items-center w-full max-w-4xl",children:_("section",{className:"w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6",children:[_("aside",{className:"grid grid-cols-3 gap-0 rounded",children:[h("div",{className:"col-span-2 p-2 rounded",children:_("div",{className:"flex border border-gray-700 rounded bg-gray-200 items-center p-2 hover:bg-gray-300",children:[h("span",{className:"material-symbols-outlined text-gray-800",children:"search"}),h("input",{className:"bg-transparent w-full focus:outline-none text-gray-800",type:"search"})]})}),h("div",{className:" p-2 rounded",children:h("div",{className:"flex justify-center w-full",children:h("button",{className:"p-2 w-full rounded-md border-0 bg-red-600 text-white hover:bg-red-700",children:"Search"})})})]}),_("aside",{className:"flex flex-wrap md:flex-row text-gray-100",children:[h("div",{className:"flex items-center",children:h("p",{children:"FILTER BY:"})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"LOCATION TYPE"}),h("option",{children:"On-site"}),h("option",{children:"Hybrid"}),h("option",{children:"Remote"})]})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"LOCATION"}),h("option",{children:"All"}),h("option",{children:"CDMX"}),h("option",{children:"MX"})]})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"TEAM"}),h("option",{children:"BTC Americas"}),h("option",{children:"Price Travel"}),h("option",{children:"Big Fish"})]})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"WORK TYPE"}),h("option",{children:"All"}),h("option",{children:"Full Time"}),h("option",{children:"Halftime"})]})})]})]})}),h("div",{className:"w-full max-w-4xl",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l];return h(km,{vacancyData:c,children:h(oi,{to:`/jobs/${l}`,children:_("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse",children:["Apply Now",h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})},l)})})]}),h("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function Tm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function TE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RP=TE,IE=new Ei("auth","Firebase",TE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new va("@firebase/auth");function PP(t,...e){wc.logLevel<=ee.WARN&&wc.warn(`Auth (${$n}): ${t}`,...e)}function Tl(t,...e){wc.logLevel<=ee.ERROR&&wc.error(`Auth (${$n}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw Im(t,...e)}function mn(t,...e){return Im(t,...e)}function AP(t,e,n){const r=Object.assign(Object.assign({},RP()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IE.create(t,...e)}function z(t,e,...n){if(!t)throw Im(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function Mn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OP(){return bv()==="http:"||bv()==="https:"}function bv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||KI()||"connection"in navigator)?navigator.onLine:!0}function DP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=$p()||r1()}get(){return LP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=new Sa(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,r,i={}){return NE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bE.fetch()(RE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MP),e);try{const i=new UP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ol(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ol(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ol(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ol(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw AP(t,u,c);on(t,u)}}catch(i){if(i instanceof qt)throw i;on(t,"network-request-failed",{message:String(i)})}}async function ka(t,e,n,r,i={}){const s=await Ps(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}class UP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),FP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function jP(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BP(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=Nm(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(Sh(i.auth_time)),issuedAtTime:Eo(Sh(i.iat)),expirationTime:Eo(Sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function Nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=sc(n);return i?JSON.parse(i):(Tl("Failed to decode base64 JWT payload"),null)}catch(i){return Tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zP(t){const e=Nm(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&VP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zo(t,jP(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KP(s.providerUserInfo):[],a=qP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PE(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function WP(t){const e=be(t);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KP(t){return t.map(e=>{var{providerId:n}=e,r=Tm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){const n=await NE(t,{},async()=>{const r=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ea;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ea,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BP(this,e)}reload(){return WP(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zo(this,$P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:x,isAnonymous:b,providerData:A,stsTokenManager:N}=n;z(y&&N,e,"internal-error");const R=ea.fromJSON(this.name,N);z(typeof y=="string",e,"internal-error"),Gn(d,e.name),Gn(f,e.name),z(typeof x=="boolean",e,"internal-error"),z(typeof b=="boolean",e,"internal-error"),Gn(g,e.name),Gn(v,e.name),Gn(w,e.name),Gn(S,e.name),Gn(m,e.name),Gn(p,e.name);const V=new Jr({uid:y,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:b,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:R,createdAt:m,lastLoginAt:p});return A&&Array.isArray(A)&&(V.providerData=A.map($=>Object.assign({},$))),S&&(V._redirectEventId=S),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new ea;i.updateFromServerResponse(n);const s=new Jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ec(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Map;function kn(t){Mn(t instanceof Function,"Expected a class definition");let e=Nv.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AE.type="NONE";const Rv=AE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Il(this.userKey,i.apiKey,s),this.fullPersistenceKey=Il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(kn(Rv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(Rv);const o=Il(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Jr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FE(e))return"Blackberry";if(UE(e))return"Webos";if(Rm(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OE(t=nt()){return/firefox\//i.test(t)}function Rm(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(t=nt()){return/crios\//i.test(t)}function DE(t=nt()){return/iemobile/i.test(t)}function ME(t=nt()){return/android/i.test(t)}function FE(t=nt()){return/blackberry/i.test(t)}function UE(t=nt()){return/webos/i.test(t)}function gu(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YP(t=nt()){var e;return gu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QP(){return GI()&&document.documentMode===10}function $E(t=nt()){return gu(t)||ME(t)||UE(t)||FE(t)||/windows phone/i.test(t)||DE(t)}function XP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e=[]){let n;switch(t){case"Browser":n=Pv(nt());break;case"Worker":n=`${Pv(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$n}/${r}`}async function BE(t,e){return Ps(t,"GET","/v2/recaptchaConfig",Rs(t,e))}function Av(t){return t!==void 0&&t.enterprise!==void 0}class zE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function VE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JP().appendChild(r)})}function ZP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eA="https://www.google.com/recaptcha/enterprise.js?render=",tA="recaptcha-enterprise",nA="NO_RECAPTCHA";class HE{constructor(e){this.type=tA,this.auth=As(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{BE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zE(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Av(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(nA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Av(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}VE(eA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xc(t,e,n,r=!1){const i=new HE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ov(this),this.idTokenSubscription=new Ov(this),this.beforeStateQueue=new rA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}async initializeRecaptchaConfig(){const e=await BE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new HE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function As(t){return be(t)}class Ov{constructor(e){this.auth=e,this.observer=null,this.addObserver=nb(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t,e){const n=Ts(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ac(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function oA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aA(t,e,n){const r=As(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=WE(e),{host:o,port:a}=lA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cA()}function WE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lA(t){const e=WE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lv(o)}}}function Lv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function uA(t,e){return Ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function dA(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Pm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ta(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ta(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await xc(e,r,"signInWithPassword");return kh(e,i)}else return kh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xc(e,r,"signInWithPassword");return kh(e,s)}else return Promise.reject(i)});case"emailLink":return hA(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dA(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="http://localhost";class di extends Pm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:fA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ks(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mA(t){const e=ro(io(t)).link,n=e?ro(io(e)).deep_link_id:null,r=ro(io(t)).deep_link_id;return(r?ro(io(r)).link:null)||r||n||e||t}class Am{constructor(e){var n,r,i,s,o,a;const l=ro(io(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=pA((i=l.mode)!==null&&i!==void 0?i:null);z(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mA(e);try{return new Am(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return ta._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Am.parseLink(n);return z(r,"argument-error"),ta._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends qE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Ta{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Ta{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t,e){return ka(t,"POST","/v1/accounts:signUp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jr._fromIdTokenResponse(e,r,i),o=Dv(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dv(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cc(e,n,r,i)}}function KE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(t,s,e,r):s})}async function gA(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zo(t,KE(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Nm(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t,e,n=!1){const r="signIn",i=await KE(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vA(t,e){return GE(As(t),e)}async function _A(t,e,n){var r;const i=As(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await xc(i,s,"signUpPassword");o=Th(i,c)}else o=Th(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await xc(i,s,"signUpPassword");return Th(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await fi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function wA(t,e,n){return vA(be(t),Os.credential(e,n))}function EA(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function xA(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function Ia(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function ba(t){return be(t).signOut()}const Sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(){const t=nt();return Rm(t)||gu(t)}const SA=1e3,kA=10;class QE extends YE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CA()&&XP(),this.fallbackToPolling=$E(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QE.type="LOCAL";const TA=QE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE extends YE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}XE.type="SESSION";const JE=XE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await IA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Om("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function NA(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function RA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AA(){return ZE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="firebaseLocalStorageDb",OA=1,kc="firebaseLocalStorage",tx="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vu(t,e){return t.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function LA(){const t=indexedDB.deleteDatabase(ex);return new Na(t).toPromise()}function yf(){const t=indexedDB.open(ex,OA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kc,{keyPath:tx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kc)?e(r):(r.close(),await LA(),e(await yf()))})})}async function Mv(t,e,n){const r=vu(t,!0).put({[tx]:e,value:n});return new Na(r).toPromise()}async function DA(t,e){const n=vu(t,!1).get(e),r=await new Na(n).toPromise();return r===void 0?null:r.value}function Fv(t,e){const n=vu(t,!0).delete(e);return new Na(n).toPromise()}const MA=800,FA=3;class nx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(AA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RA(),!this.activeServiceWorker)return;this.sender=new bA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await Mv(e,Sc,"1"),await Fv(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vu(i,!1).getAll();return new Na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nx.type="LOCAL";const UA=nx;new Sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t,e){return e?kn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Pm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jA(t){return GE(t.auth,new Lm(t),t.bypassAuthState)}function BA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),yA(n,new Lm(t),t.bypassAuthState)}async function zA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),gA(n,new Lm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jA;case"linkViaPopup":case"linkViaRedirect":return zA;case"reauthViaPopup":case"reauthViaRedirect":return BA;default:on(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Sa(2e3,1e4);class zi extends rx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VA.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="pendingRedirect",bl=new Map;class WA extends rx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await qA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qA(t,e){const n=YA(e),r=GA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KA(t,e){bl.set(t._key(),e)}function GA(t){return kn(t._redirectPersistence)}function YA(t){return Il(HA,t.config.apiKey,t.name)}async function QA(t,e,n=!1){const r=As(t),i=$A(r,e),o=await new WA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=10*60*1e3;class JA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ix(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uv(e))}saveEventToCache(e){this.cachedEventUids.add(Uv(e)),this.lastProcessedEventTime=Date.now()}}function Uv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ix({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ix(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nO=/^https?/;async function rO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eO(t);for(const n of e)try{if(iO(n))return}catch{}on(t,"unauthorized-domain")}function iO(t){const e=gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nO.test(n))return!1;if(tO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Sa(3e4,6e4);function $v(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oO(t){return new Promise((e,n)=>{var r,i,s;function o(){$v(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$v(),n(mn(t,"network-request-failed"))},timeout:sO.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const a=ZP("iframefcb");return gn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},VE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function aO(t){return Nl=Nl||oO(t),Nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=new Sa(5e3,15e3),cO="__/auth/iframe",uO="emulator/auth/iframe",hO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fO(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,uO):`https://${t.config.authDomain}/${cO}`,r={apiKey:e.apiKey,appName:t.name,v:$n},i=dO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ks(r).slice(1)}`}async function pO(t){const e=await aO(t),n=gn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:fO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=gn().setTimeout(()=>{s(o)},lO.get());function l(){gn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gO=500,yO=600,vO="_blank",_O="http://localhost";class jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wO(t,e,n,r=gO,i=yO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=nt().toLowerCase();n&&(a=LE(c)?vO:n),OE(c)&&(e=e||_O,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(YP(c)&&a!=="_self")return EO(e||"",a),new jv(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new jv(d)}function EO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO="__/auth/handler",CO="emulator/auth/handler",SO=encodeURIComponent("fac");async function Bv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$n,eventId:i};if(e instanceof qE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Ta){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${SO}=${encodeURIComponent(l)}`:"";return`${kO(t)}?${ks(a).slice(1)}${c}`}function kO({config:t}){return t.emulator?bm(t,CO):`https://${t.authDomain}/${xO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="webStorageSupport";class TO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JE,this._completeRedirectFn=QA,this._overrideRedirectResult=KA}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bv(e,n,r,gf(),i);return wO(e,o,Om())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bv(e,n,r,gf(),i);return NA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pO(e),r=new JA(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ih,{type:Ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ih];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $E()||Rm()||gu()}}const IO=TO;var zv="@firebase/auth",Vv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RO(t){Ht(new Rt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jE(t)},c=new iA(r,i,s,l);return oA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new Rt("auth-internal",e=>{const n=As(e.getProvider("auth").getImmediate());return(r=>new bO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(zv,Vv,NO(t)),Ie(zv,Vv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=5*60,AO=t1("authIdTokenMaxAge")||PO;let Hv=null;const OO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AO)return;const i=n==null?void 0:n.token;Hv!==i&&(Hv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Si(t=Bp()){const e=Ts(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sA(t,{popupRedirectResolver:IO,persistence:[UA,TA,JE]}),r=t1("authTokenSyncURL");if(r){const s=OO(r);xA(n,s,()=>s(n.currentUser)),EA(n,o=>s(o))}const i=Jw("auth");return i&&aA(n,`http://${i}`),n}RO("Browser");function Dm(t){return h("div",{children:t.children})}const LO=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),i=Si(),s=Nr();return h(Dm,{children:h("section",{className:"min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-[#000c1a]",children:h("article",{className:"py-3 sm:max-w-xl sm:mx-auto",children:_("aside",{className:"px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:[h("hgroup",{children:h("h1",{className:"text-2xl font-semibold",children:"Sign Up"})}),h("div",{className:"divide-y divide-gray-200",children:_("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:[h("input",{id:"email",name:"email",type:"email",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Email address",value:t,onChange:a=>e(a.target.value)}),h("label",{htmlFor:"email",className:"left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Email Address"}),h("input",{id:"password",name:"password",type:"password",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Password",value:n,onChange:a=>r(a.target.value)}),h("label",{htmlFor:"password",className:"left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Password"}),_("div",{className:"",children:[h("button",{className:"bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600",type:"submit",onClick:async a=>{a.preventDefault(),await _A(i,t,n).then(l=>{const c=l.user;console.log(c),s("/login")}).catch(l=>{const c=l.code,u=l.message;console.log(c,u)})},children:"Sign Up"}),h("a",{className:"ml-8 text-gray-400 hover:text-gray-600",href:"/login",children:"Log In"})]})]})})]})})})})},sx=()=>{const t=Si(),e=Nr(),[n,r]=C.useState(""),[i,s]=C.useState("");return _(Dm,{children:[_("section",{className:"flex w-full content-center items-center justify-center py-20 md:py-5 h-screen",children:[h("aside",{className:"px-8 py-4 flex content-center items-center justify-center rounded-3xl bg-[#ffffff29] md:px-28 md:py-12",children:_("div",{className:"max-w-72",children:[h("h1",{className:"text-xl font-semibold text-gray-100",children:"Welcome back"}),h("small",{className:"text-gray-200",children:"Welcome back! Please enter your details"}),_("form",{className:"mt-4 text-gray-200",children:[_("div",{className:"mb-4",children:[h("label",{className:"mb-2 block text-xs font-semibold leading-[0]",children:"Email"}),h("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"Email Address",value:n,onChange:a=>r(a.target.value)})]}),_("div",{className:"mb-3",children:[h("label",{className:"mb-2 block text-xs font-semibold leading-[0]",children:"Password"}),h("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"password",name:"password",type:"password",placeholder:"******",value:i,onChange:a=>s(a.target.value)})]}),_("div",{className:"mb-3 flex flex-wrap content-center",children:[h("input",{id:"remember",type:"checkbox",className:"mr-1 checked:bg-purple-700"}),h("label",{htmlFor:"remember",className:"mr-auto text-xs font-semibold",children:"Remember for 30 days"}),h("a",{href:"#",className:"text-xs font-semibold text-gray-400 hover:text-gray-200 ml-1",children:"Forgot password?"})]}),_("div",{className:"mb-3",children:[h("button",{className:"mb-1.5 block w-full text-center text-white bg-[#04135aa3] hover:bg-[#04125ae0] px-2 py-1.5 rounded-md",type:"submit",onClick:a=>{a.preventDefault(),wA(t,n,i).then(l=>{const c=l.user;e("/logged"),console.log(c)}).catch(l=>{const c=l.code,u=l.message;console.log(c,u)})},children:"Sign in"}),_("button",{className:"bx-shadow flex flex-wrap justify-center w-full hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",children:[h("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign in with Google"]})]})]}),_("div",{className:"text-center",children:[h("span",{className:"text-xs text-gray-400 font-semibold",children:"Don't have account?"}),h("a",{href:"/signup",className:"text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100",children:"Sign up"})]})]})}),h("img",{className:"fish",src:"https://img1.picmix.com/output/stamp/normal/0/2/5/9/1479520_aca7c.gif"}),h("div",{className:"bg-gif"}),h("div",{className:"bg-fish"})]}),h("style",{children:`
					.bx-shadow {
						box-shadow: 0 0 5px #fff;
					}
					.fish {
						z-index: 2;
						position: absolute;
						animation: slide-left 50s infinite;
					}
					@keyframes slide-left {
						from {
							width: 5%;
							z-index: -2;
							left: 0;
							bottom: 0;
							opacity : 0.7;
							filter: blur(3px)
						}
						50% {
							z-index: -1;
							width: 20%;
							bottom: 10%;
							left: 50%;
							opacity: 0.8;
							filter: blur(2px)
						}
						to {
							width: 30%;
							z-index: 1;
							bottom: 80%;
							left: 80%;
							opacity: 0.9;
							filter: blur(1px)
						}
					}

					.fish1 {
						z-index: 2;
						position: absolute;
						transform: scaleX(-1);
						animation: fish 30s infinite;
					}
					@keyframes fish {
						from {
							width: 10%;
							z-index: -2;
							right: 0;
							top: 0;
							opacity : 0.6;
							filter: blur(3px)
						}
						20% {
							z-index: -1;
							width: 15%;
							top: 20%;
							right: 40%;
							opacity: 0.8;
							filter: blur(2px)
						}
						40% {
							z-index: 1;
							width: 15%;
							top: 10%;
							right: 50%;
							opacity: 1;
							filter: blur(1px);
							transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
						}
						60% {
							z-index: 1;
							width: 20%;
							top: 80%;
							right: 60%;
							opacity: 0.8;
							filter: blur(1px);
						}
						to {
							width: 10%;
							z-index: 1;
							top: 60%;
							right: 100%;
							opacity: 0.6;
							filter: blur(3px);
						}
					}
					.blur-img {
						width: 100%;
						filter: blur(5px);
						opacity: 0.9;
						height: 85vh;
						border: solid #000 5px;
					}
					.bg-gif {
						z-index: -2;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						opacity: 0.9;
						height: 100vh;
						filter: blur(10px);
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.pinimg.com/originals/18/f0/37/18f037f6761bbc6ac0682035deab8778.gif')
					}
					.bg-fish {
						z-index: -3;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.pinimg.com/originals/e9/04/15/e904152f727d70e777066bd122c7f2dd.gif')
					}

				`})]})};function DO(){const[t,e]=C.useState({}),{id:n}=Fp(),r=Pr(),i=sn(r,`/vacancy/${n}`),{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:u,content:d,salaryVacancy:f,categoryVacancy:g,subcategoryVacancy:v,requiredVacancy:w}=t,S=new Date,m=`${S.getFullYear()}-${S.getMonth()+1}-${S.getDate()}`,p=new Date(m),y=new Date(s),x=864e5,A=(p-y)/x;return C.useEffect(()=>{Rr(i,N=>{e(N.val())})},[]),h(wi,{children:h("main",{className:"flex justify-center flex-col items-center mb-8",children:_("section",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[_("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[_("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[o,h("span",{className:"text-slate-500 text-sm font-light",children:s==m?"Hoy":"Hace "+A+" días"})]}),h("p",{className:"font-bold text-gray-200",children:f}),_("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),l,", ",c]}),_("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:a}),h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:u})]})]}),_("article",{className:"py-2",children:[_("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),_("p",{children:[h("span",{className:"text-gray-100",children:"Categoría: "}),_("span",{className:"text-gray-300",children:[" ",g]})]}),_("p",{children:[h("span",{className:"text-gray-100",children:"Subcategoría: "}),_("span",{className:"text-gray-300",children:[" ",v]})]}),_("p",{children:[_("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),_("span",{className:"text-gray-300",children:[" ",w]})]})]}),_("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),h("p",{className:"text-gray-300",children:d})]})]}),h(oi,{to:`/apply/${n}`,children:h("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse",children:"Apply Now"})})]})})})}var vf={},MO={get exports(){return vf},set exports(t){vf=t}};(function(t,e){(function(n,r){t.exports=r(C)})(iS,n=>(()=>{var r={703:(a,l,c)=>{var u=c(414);function d(){}function f(){}f.resetWarningCache=d,a.exports=function(){function g(S,m,p,y,x,b){if(b!==u){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}function v(){return g}g.isRequired=g;var w={array:g,bigint:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:v,element:g,elementType:g,instanceOf:v,node:g,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:f,resetWarningCache:d};return w.PropTypes=w,w}},697:(a,l,c)=>{a.exports=c(703)()},414:a=>{a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var c=i[a]={exports:{}};return r[a](c,c.exports,s),c.exports}s.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return s.d(l,{a:l}),l},s.d=(a,l)=>{for(var c in l)s.o(l,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:l[c]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{default:()=>Ne});var a=s(98),l=s.n(a),c=s(697),u=s.n(c);function d(){return d=Object.assign?Object.assign.bind():function(D){for(var U=1;U<arguments.length;U++){var G=arguments[U];for(var X in G)Object.prototype.hasOwnProperty.call(G,X)&&(D[X]=G[X])}return D},d.apply(this,arguments)}var f=function(D){var U=D.pageClassName,G=D.pageLinkClassName,X=D.page,wt=D.selected,ke=D.activeClassName,P=D.activeLinkClassName,k=D.getEventListener,E=D.pageSelectedHandler,F=D.href,O=D.extraAriaContext,B=D.pageLabelBuilder,W=D.rel,ue=D.ariaLabel||"Page "+X+(O?" "+O:""),fe=null;return wt&&(fe="page",ue=D.ariaLabel||"Page "+X+" is your current page",U=U!==void 0?U+" "+ke:ke,G!==void 0?P!==void 0&&(G=G+" "+P):G=P),l().createElement("li",{className:U},l().createElement("a",d({rel:W,role:F?void 0:"button",className:G,href:F,tabIndex:wt?"-1":"0","aria-label":ue,"aria-current":fe,onKeyPress:E},k(E)),B(X)))};f.propTypes={pageSelectedHandler:u().func.isRequired,selected:u().bool.isRequired,pageClassName:u().string,pageLinkClassName:u().string,activeClassName:u().string,activeLinkClassName:u().string,extraAriaContext:u().string,href:u().string,ariaLabel:u().string,page:u().number.isRequired,getEventListener:u().func.isRequired,pageLabelBuilder:u().func.isRequired,rel:u().string};const g=f;function v(){return v=Object.assign?Object.assign.bind():function(D){for(var U=1;U<arguments.length;U++){var G=arguments[U];for(var X in G)Object.prototype.hasOwnProperty.call(G,X)&&(D[X]=G[X])}return D},v.apply(this,arguments)}var w=function(D){var U=D.breakLabel,G=D.breakAriaLabel,X=D.breakClassName,wt=D.breakLinkClassName,ke=D.breakHandler,P=D.getEventListener,k=X||"break";return l().createElement("li",{className:k},l().createElement("a",v({className:wt,role:"button",tabIndex:"0","aria-label":G,onKeyPress:ke},P(ke)),U))};w.propTypes={breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabel:u().string,breakClassName:u().string,breakLinkClassName:u().string,breakHandler:u().func.isRequired,getEventListener:u().func.isRequired};const S=w;function m(D){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return D??U}function p(D){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},p(D)}function y(){return y=Object.assign?Object.assign.bind():function(D){for(var U=1;U<arguments.length;U++){var G=arguments[U];for(var X in G)Object.prototype.hasOwnProperty.call(G,X)&&(D[X]=G[X])}return D},y.apply(this,arguments)}function x(D,U){for(var G=0;G<U.length;G++){var X=U[G];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(D,X.key,X)}}function b(D,U){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(G,X){return G.__proto__=X,G},b(D,U)}function A(D,U){if(U&&(p(U)==="object"||typeof U=="function"))return U;if(U!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(D)}function N(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function R(D){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(U){return U.__proto__||Object.getPrototypeOf(U)},R(D)}function V(D,U,G){return U in D?Object.defineProperty(D,U,{value:G,enumerable:!0,configurable:!0,writable:!0}):D[U]=G,D}var $=function(D){(function(k,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(E&&E.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),E&&b(k,E)})(P,D);var U,G,X,wt,ke=(X=P,wt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var k,E=R(X);if(wt){var F=R(this).constructor;k=Reflect.construct(E,arguments,F)}else k=E.apply(this,arguments);return A(this,k)});function P(k){var E,F;return function(O,B){if(!(O instanceof B))throw new TypeError("Cannot call a class as a function")}(this,P),V(N(E=ke.call(this,k)),"handlePreviousPage",function(O){var B=E.state.selected;E.handleClick(O,null,B>0?B-1:void 0,{isPrevious:!0})}),V(N(E),"handleNextPage",function(O){var B=E.state.selected,W=E.props.pageCount;E.handleClick(O,null,B<W-1?B+1:void 0,{isNext:!0})}),V(N(E),"handlePageSelected",function(O,B){if(E.state.selected===O)return E.callActiveCallback(O),void E.handleClick(B,null,void 0,{isActive:!0});E.handleClick(B,null,O)}),V(N(E),"handlePageChange",function(O){E.state.selected!==O&&(E.setState({selected:O}),E.callCallback(O))}),V(N(E),"getEventListener",function(O){return V({},E.props.eventListener,O)}),V(N(E),"handleClick",function(O,B,W){var ue=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},fe=ue.isPrevious,rt=fe!==void 0&&fe,ki=ue.isNext,Fs=ki!==void 0&&ki,Lr=ue.isBreak,Ot=Lr!==void 0&&Lr,zn=ue.isActive,Vn=zn!==void 0&&zn;O.preventDefault?O.preventDefault():O.returnValue=!1;var Hn=E.state.selected,xe=E.props.onClick,Lt=W;if(xe){var Et=xe({index:B,selected:Hn,nextSelectedPage:W,event:O,isPrevious:rt,isNext:Fs,isBreak:Ot,isActive:Vn});if(Et===!1)return;Number.isInteger(Et)&&(Lt=Et)}Lt!==void 0&&E.handlePageChange(Lt)}),V(N(E),"handleBreakClick",function(O,B){var W=E.state.selected;E.handleClick(B,O,W<O?E.getForwardJump():E.getBackwardJump(),{isBreak:!0})}),V(N(E),"callCallback",function(O){E.props.onPageChange!==void 0&&typeof E.props.onPageChange=="function"&&E.props.onPageChange({selected:O})}),V(N(E),"callActiveCallback",function(O){E.props.onPageActive!==void 0&&typeof E.props.onPageActive=="function"&&E.props.onPageActive({selected:O})}),V(N(E),"getElementPageRel",function(O){var B=E.state.selected,W=E.props,ue=W.nextPageRel,fe=W.prevPageRel,rt=W.selectedPageRel;return B-1===O?fe:B===O?rt:B+1===O?ue:void 0}),V(N(E),"pagination",function(){var O=[],B=E.props,W=B.pageRangeDisplayed,ue=B.pageCount,fe=B.marginPagesDisplayed,rt=B.breakLabel,ki=B.breakClassName,Fs=B.breakLinkClassName,Lr=B.breakAriaLabels,Ot=E.state.selected;if(ue<=W)for(var zn=0;zn<ue;zn++)O.push(E.getPageElement(zn));else{var Vn=W/2,Hn=W-Vn;Ot>ue-W/2?Vn=W-(Hn=ue-Ot):Ot<W/2&&(Hn=W-(Vn=Ot));var xe,Lt,Et=function(Wn){return E.getPageElement(Wn)},Re=[];for(xe=0;xe<ue;xe++){var $a=xe+1;if($a<=fe)Re.push({type:"page",index:xe,display:Et(xe)});else if($a>ue-fe)Re.push({type:"page",index:xe,display:Et(xe)});else if(xe>=Ot-Vn&&xe<=Ot+(Ot===0&&W>1?Hn-1:Hn))Re.push({type:"page",index:xe,display:Et(xe)});else if(rt&&Re.length>0&&Re[Re.length-1].display!==Lt&&(W>0||fe>0)){var Fu=xe<Ot?Lr.backward:Lr.forward;Lt=l().createElement(S,{key:xe,breakAriaLabel:Fu,breakLabel:rt,breakClassName:ki,breakLinkClassName:Fs,breakHandler:E.handleBreakClick.bind(null,xe),getEventListener:E.getEventListener}),Re.push({type:"break",index:xe,display:Lt})}}Re.forEach(function(Wn,qn){var ja=Wn;Wn.type==="break"&&Re[qn-1]&&Re[qn-1].type==="page"&&Re[qn+1]&&Re[qn+1].type==="page"&&Re[qn+1].index-Re[qn-1].index<=2&&(ja={type:"page",index:Wn.index,display:Et(Wn.index)}),O.push(ja.display)})}return O}),k.initialPage!==void 0&&k.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(k.initialPage,") and forcePage (").concat(k.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),F=k.initialPage?k.initialPage:k.forcePage?k.forcePage:0,E.state={selected:F},E}return U=P,(G=[{key:"componentDidMount",value:function(){var k=this.props,E=k.initialPage,F=k.disableInitialCallback,O=k.extraAriaContext,B=k.pageCount,W=k.forcePage;E===void 0||F||this.callCallback(E),O&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(B)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(B,"). Did you forget a Math.ceil()?")),E!==void 0&&E>B-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(E," > ").concat(B-1,").")),W!==void 0&&W>B-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(W," > ").concat(B-1,")."))}},{key:"componentDidUpdate",value:function(k){this.props.forcePage!==void 0&&this.props.forcePage!==k.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(k.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var k=this.state.selected,E=this.props,F=E.pageCount,O=k+E.pageRangeDisplayed;return O>=F?F-1:O}},{key:"getBackwardJump",value:function(){var k=this.state.selected-this.props.pageRangeDisplayed;return k<0?0:k}},{key:"getElementHref",value:function(k){var E=this.props,F=E.hrefBuilder,O=E.pageCount,B=E.hrefAllControls;if(F)return B||k>=0&&k<O?F(k+1,O,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(k){var E=k===this.state.selected;if(this.props.ariaLabelBuilder&&k>=0&&k<this.props.pageCount){var F=this.props.ariaLabelBuilder(k+1,E);return this.props.extraAriaContext&&!E&&(F=F+" "+this.props.extraAriaContext),F}}},{key:"getPageElement",value:function(k){var E=this.state.selected,F=this.props,O=F.pageClassName,B=F.pageLinkClassName,W=F.activeClassName,ue=F.activeLinkClassName,fe=F.extraAriaContext,rt=F.pageLabelBuilder;return l().createElement(g,{key:k,pageSelectedHandler:this.handlePageSelected.bind(null,k),selected:E===k,rel:this.getElementPageRel(k),pageClassName:O,pageLinkClassName:B,activeClassName:W,activeLinkClassName:ue,extraAriaContext:fe,href:this.getElementHref(k),ariaLabel:this.ariaLabelBuilder(k),page:k+1,pageLabelBuilder:rt,getEventListener:this.getEventListener})}},{key:"render",value:function(){var k=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&k!==void 0)return k&&k(this.props);var E=this.props,F=E.disabledClassName,O=E.disabledLinkClassName,B=E.pageCount,W=E.className,ue=E.containerClassName,fe=E.previousLabel,rt=E.previousClassName,ki=E.previousLinkClassName,Fs=E.previousAriaLabel,Lr=E.prevRel,Ot=E.nextLabel,zn=E.nextClassName,Vn=E.nextLinkClassName,Hn=E.nextAriaLabel,xe=E.nextRel,Lt=this.state.selected,Et=Lt===0,Re=Lt===B-1,$a="".concat(m(rt)).concat(Et?" ".concat(m(F)):""),Fu="".concat(m(zn)).concat(Re?" ".concat(m(F)):""),Wn="".concat(m(ki)).concat(Et?" ".concat(m(O)):""),qn="".concat(m(Vn)).concat(Re?" ".concat(m(O)):""),ja=Et?"true":"false",nS=Re?"true":"false";return l().createElement("ul",{className:W||ue,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:$a},l().createElement("a",y({className:Wn,href:this.getElementHref(Lt-1),tabIndex:Et?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ja,"aria-label":Fs,rel:Lr},this.getEventListener(this.handlePreviousPage)),fe)),this.pagination(),l().createElement("li",{className:Fu},l().createElement("a",y({className:qn,href:this.getElementHref(Lt+1),tabIndex:Re?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":nS,"aria-label":Hn,rel:xe},this.getEventListener(this.handleNextPage)),Ot)))}}])&&x(U.prototype,G),Object.defineProperty(U,"prototype",{writable:!1}),P}(a.Component);V($,"propTypes",{pageCount:u().number.isRequired,pageRangeDisplayed:u().number,marginPagesDisplayed:u().number,previousLabel:u().node,previousAriaLabel:u().string,prevPageRel:u().string,prevRel:u().string,nextLabel:u().node,nextAriaLabel:u().string,nextPageRel:u().string,nextRel:u().string,breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabels:u().shape({forward:u().string,backward:u().string}),hrefBuilder:u().func,hrefAllControls:u().bool,onPageChange:u().func,onPageActive:u().func,onClick:u().func,initialPage:u().number,forcePage:u().number,disableInitialCallback:u().bool,containerClassName:u().string,className:u().string,pageClassName:u().string,pageLinkClassName:u().string,pageLabelBuilder:u().func,activeClassName:u().string,activeLinkClassName:u().string,previousClassName:u().string,nextClassName:u().string,previousLinkClassName:u().string,nextLinkClassName:u().string,disabledClassName:u().string,disabledLinkClassName:u().string,breakClassName:u().string,breakLinkClassName:u().string,extraAriaContext:u().string,ariaLabelBuilder:u().func,eventListener:u().string,renderOnZeroPageCount:u().func,selectedPageRel:u().string}),V($,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(D){return D},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Ne=$})(),o})())})(MO);const FO=b0(vf);var UO="firebase",$O="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(UO,$O,"app");var jO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Mm=Mm||{},H=jO||self;function Tc(){}function _u(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ra(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BO(t){return Object.prototype.hasOwnProperty.call(t,bh)&&t[bh]||(t[bh]=++zO)}var bh="closure_uid_"+(1e9*Math.random()>>>0),zO=0;function VO(t,e,n){return t.call.apply(t.bind,arguments)}function HO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=VO:Ze=HO,Ze.apply(null,arguments)}function al(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ar(){this.s=this.s,this.o=this.o}var WO=0;Ar.prototype.s=!1;Ar.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),WO!=0)&&BO(this)};Ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ox=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_u(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var qO=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Tc,e),H.removeEventListener("test",Tc,e)}catch{}return t}();function Ic(t){return/^[\s\xa0]*$/.test(t)}var qv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nh(t,e){return t<e?-1:t>e?1:0}function wu(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return wu().indexOf(t)!=-1}function Um(t){return Um[" "](t),t}Um[" "]=Tc;function ax(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var KO=un("Opera"),na=un("Trident")||un("MSIE"),lx=un("Edge"),_f=lx||na,cx=un("Gecko")&&!(wu().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),GO=wu().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function ux(){var t=H.document;return t?t.documentMode:void 0}var wf;e:{var Rh="",Ph=function(){var t=wu();if(cx)return/rv:([^\);]+)(\)|;)/.exec(t);if(lx)return/Edge\/([\d\.]+)/.exec(t);if(na)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GO)return/WebKit\/(\S+)/.exec(t);if(KO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ph&&(Rh=Ph?Ph[1]:""),na){var Ah=ux();if(Ah!=null&&Ah>parseFloat(Rh)){wf=String(Ah);break e}}wf=Rh}var YO={};function QO(){return ax(YO,9,function(){let t=0;const e=qv(String(wf)).split("."),n=qv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nh(i[2].length==0,s[2].length==0)||Nh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}H.document&&na&&ux();function ra(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cx){e:{try{Um(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ra.$.h.call(this)}}ze(ra,et);var XO={2:"touch",3:"pen",4:"mouse"};ra.prototype.h=function(){ra.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pa="closure_listenable_"+(1e6*Math.random()|0),JO=0;function ZO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++JO,this.fa=this.ia=!1}function Eu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $m(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hx(t){const e={};for(const n in t)e[n]=t[n];return e}const Kv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dx(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Kv.length;s++)n=Kv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xu(t){this.src=t,this.g={},this.h=0}xu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=xf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ZO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ef(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ox(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Eu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var jm="closure_lm_"+(1e6*Math.random()|0),Oh={};function fx(t,e,n,r,i){if(r&&r.once)return mx(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fx(t,e[s],n,r,i);return null}return n=Vm(n),t&&t[Pa]?t.O(e,n,Ra(r)?!!r.capture:!!r,i):px(t,e,n,!1,r,i)}function px(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ra(i)?!!i.capture:!!i,a=zm(t);if(a||(t[jm]=a=new xu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=eL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)qO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(yx(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eL(){function t(n){return e.call(t.src,t.listener,n)}const e=tL;return t}function mx(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mx(t,e[s],n,r,i);return null}return n=Vm(n),t&&t[Pa]?t.P(e,n,Ra(r)?!!r.capture:!!r,i):px(t,e,n,!0,r,i)}function gx(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gx(t,e[s],n,r,i);else r=Ra(r)?!!r.capture:!!r,n=Vm(n),t&&t[Pa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=xf(s,n,r,i),-1<n&&(Eu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=zm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xf(e,n,r,i)),(n=-1<t?e[t]:null)&&Bm(n))}function Bm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pa])Ef(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yx(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zm(e))?(Ef(n,t),n.h==0&&(n.src=null,e[jm]=null)):Eu(t)}}}function yx(t){return t in Oh?Oh[t]:Oh[t]="on"+t}function tL(t,e){if(t.fa)t=!0;else{e=new ra(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bm(t),t=n.call(r,e)}return t}function zm(t){return t=t[jm],t instanceof xu?t:null}var Lh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vm(t){return typeof t=="function"?t:(t[Lh]||(t[Lh]=function(e){return t.handleEvent(e)}),t[Lh])}function Be(){Ar.call(this),this.i=new xu(this),this.S=this,this.J=null}ze(Be,Ar);Be.prototype[Pa]=!0;Be.prototype.removeEventListener=function(t,e,n,r){gx(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;e=new et(r,t),dx(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ll(o,r,!0,e)&&i}if(o=e.g=t,i=ll(o,r,!0,e)&&i,i=ll(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ll(o,r,!1,e)&&i}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Eu(n[r]);delete t.g[e],t.h--}}this.J=null};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ll(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ef(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hm=H.JSON.stringify;function nL(){var t=wx;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rL{constructor(){this.h=this.g=null}add(e,n){const r=vx.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vx=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new iL,t=>t.reset());class iL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sL(t){H.setTimeout(()=>{throw t},0)}function _x(t,e){Cf||oL(),Sf||(Cf(),Sf=!0),wx.add(t,e)}var Cf;function oL(){var t=H.Promise.resolve(void 0);Cf=function(){t.then(aL)}}var Sf=!1,wx=new rL;function aL(){for(var t;t=nL();){try{t.h.call(t.g)}catch(n){sL(n)}var e=vx;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sf=!1}function Cu(t,e){Be.call(this),this.h=t||1,this.g=e||H,this.j=Ze(this.qb,this),this.l=Date.now()}ze(Cu,Be);L=Cu.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(Wm(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Cu.$.N.call(this),Wm(this),delete this.g};function qm(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Ex(t){t.g=qm(()=>{t.g=null,t.i&&(t.i=!1,Ex(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lL extends Ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ex(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(t){Ar.call(this),this.h=t,this.g={}}ze(ia,Ar);var Gv=[];function xx(t,e,n,r){Array.isArray(n)||(n&&(Gv[0]=n.toString()),n=Gv);for(var i=0;i<n.length;i++){var s=fx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Cx(t){$m(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bm(e)},t),t.g={}}ia.prototype.N=function(){ia.$.N.call(this),Cx(this)};ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Su(){this.g=!0}Su.prototype.Ea=function(){this.g=!1};function cL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function uL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dL(t,n)+(r?" "+r:"")})}function hL(t,e){t.info(function(){return"TIMEOUT: "+e})}Su.prototype.info=function(){};function dL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hm(n)}catch{return e}}var Ls={},Yv=null;function Km(){return Yv=Yv||new Be}Ls.Ta="serverreachability";function Sx(t){et.call(this,Ls.Ta,t)}ze(Sx,et);function sa(t){const e=Km();Ke(e,new Sx(e))}Ls.STAT_EVENT="statevent";function kx(t,e){et.call(this,Ls.STAT_EVENT,t),this.stat=e}ze(kx,et);function ot(t){const e=Km();Ke(e,new kx(e,t))}Ls.Ua="timingevent";function Tx(t,e){et.call(this,Ls.Ua,t),this.size=e}ze(Tx,et);function Aa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Gm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fL={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ym(){}Ym.prototype.h=null;function Qv(t){return t.h||(t.h=t.i())}function pL(){}var Oa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qm(){et.call(this,"d")}ze(Qm,et);function Xm(){et.call(this,"c")}ze(Xm,et);var kf;function ku(){}ze(ku,Ym);ku.prototype.g=function(){return new XMLHttpRequest};ku.prototype.i=function(){return{}};kf=new ku;function La(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ia(this),this.P=mL,t=_f?125:void 0,this.V=new Cu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Ix}function Ix(){this.i=null,this.g="",this.h=!1}var mL=45e3,Tf={},bc={};L=La.prototype;L.setTimeout=function(t){this.P=t};function If(t,e,n){t.L=1,t.v=Iu(Fn(e)),t.s=n,t.S=!0,bx(t,null)}function bx(t,e){t.G=Date.now(),Da(t),t.A=Fn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Mx(n.i,"t",r),t.C=0,n=t.l.I,t.h=new Ix,t.g=rC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new lL(Ze(t.Pa,t,t.g),t.O)),xx(t.U,t.g,"readystatechange",t.nb),e=t.I?hx(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),sa(),cL(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Tn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=Tn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||_f||this.g&&(this.h.h||this.g.ja()||e0(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?sa(3):sa(2)),Tu(this);var n=this.g.da();this.aa=n;t:if(Nx(this)){var r=e0(this.g);t="";var i=r.length,s=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),xo(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,uL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ic(a)){var c=a;break t}}c=null}if(n=c)Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bf(this,n);else{this.i=!1,this.o=3,ot(12),qr(this),xo(this);break e}}this.S?(Rx(this,u,o),_f&&this.i&&u==3&&(xx(this.U,this.V,"tick",this.mb),this.V.start())):(Vi(this.j,this.m,o,null),bf(this,o)),u==4&&qr(this),this.i&&!this.J&&(u==4?Zx(this.l,this):(this.i=!1,Da(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),qr(this),xo(this)}}}catch{}finally{}};function Nx(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Rx(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=gL(t,n),i==bc){e==4&&(t.o=4,ot(14),r=!1),Vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tf){t.o=4,ot(15),Vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vi(t.j,t.m,i,null),bf(t,i);Nx(t)&&i!=bc&&i!=Tf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ig(e),e.L=!0,ot(11))):(Vi(t.j,t.m,n,"[Invalid Chunked Response]"),qr(t),xo(t))}L.mb=function(){if(this.g){var t=Tn(this.g),e=this.g.ja();this.C<e.length&&(Tu(this),Rx(this,t,e),this.i&&t!=4&&Da(this))}};function gL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bc:(n=Number(e.substring(n,r)),isNaN(n)?Tf:(r+=1,r+n>e.length?bc:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,qr(this)};function Da(t){t.Y=Date.now()+t.P,Px(t,t.P)}function Px(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Aa(Ze(t.lb,t),e)}function Tu(t){t.B&&(H.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hL(this.j,this.A),this.L!=2&&(sa(),ot(17)),qr(this),this.o=2,xo(this)):Px(this,this.Y-t)};function xo(t){t.l.H==0||t.J||Zx(t.l,t)}function qr(t){Tu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Wm(t.V),Cx(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function bf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Nf(n.h,t))){if(!t.K&&Nf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pc(n),Pu(n);else break e;rg(n),ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Aa(Ze(n.ib,n),6e3));if(1>=$x(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Kr(n,11)}else if((t.K||n.g==t)&&Pc(n),!Ic(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=c[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jm(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,de(r.G,r.F,w))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=nC(r,r.I?r.oa:null,r.Y),o.K){jx(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Tu(a),Da(a)),r.g=o}else Xx(r);0<n.i.length&&Au(n)}else c[0]!="stop"&&c[0]!="close"||Kr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Kr(n,7):ng(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}sa(4)}catch{}}function yL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vL(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_u(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ax(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_u(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vL(t),r=yL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Ox=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _L(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Zr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zr){this.h=e!==void 0?e:t.h,Nc(this,t.j),this.s=t.s,this.g=t.g,Rc(this,t.m),this.l=t.l,e=t.i;var n=new oa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xv(this,n),this.o=t.o}else t&&(n=String(t).match(Ox))?(this.h=!!e,Nc(this,n[1]||"",!0),this.s=so(n[2]||""),this.g=so(n[3]||"",!0),Rc(this,n[4]),this.l=so(n[5]||"",!0),Xv(this,n[6]||"",!0),this.o=so(n[7]||"")):(this.h=!!e,this.i=new oa(null,this.h))}Zr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oo(e,Jv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oo(e,Jv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oo(n,n.charAt(0)=="/"?xL:EL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oo(n,SL)),t.join("")};function Fn(t){return new Zr(t)}function Nc(t,e,n){t.j=n?so(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xv(t,e,n){e instanceof oa?(t.i=e,kL(t.i,t.h)):(n||(e=oo(e,CL)),t.i=new oa(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Iu(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function so(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jv=/[#\/\?@]/g,EL=/[#\?:]/g,xL=/[#\?]/g,CL=/[#\?@]/g,SL=/#/g;function oa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Or(t){t.g||(t.g=new Map,t.h=0,t.i&&_L(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=oa.prototype;L.add=function(t,e){Or(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lx(t,e){Or(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dx(t,e){return Or(t),e=Ds(t,e),t.g.has(e)}L.forEach=function(t,e){Or(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.sa=function(){Or(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){Or(this);let e=[];if(typeof t=="string")Dx(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Or(this),this.i=null,t=Ds(this,t),Dx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Mx(t,e,n){Lx(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),Fm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kL(t,e){e&&!t.j&&(Or(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Lx(this,r),Mx(this,i,n))},t)),t.j=e}var TL=class{constructor(t,e){this.h=t,this.g=e}};function Fx(t){this.l=t||IL,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var IL=10;function Ux(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $x(t){return t.h?1:t.g?t.g.size:0}function Nf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jm(t,e){t.g?t.g.add(e):t.h=e}function jx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fx.prototype.cancel=function(){if(this.i=Bx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bx(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fm(t.i)}function Zm(){}Zm.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Zm.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function bL(){this.g=new Zm}function NL(t,e,n){const r=n||"";try{Ax(t,function(i,s){let o=i;Ra(i)&&(o=Hm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function RL(t,e){const n=new Su;if(H.Image){const r=new Image;r.onload=al(cl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=al(cl,n,r,"TestLoadImage: error",!1,e),r.onabort=al(cl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=al(cl,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function cl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bu(t){this.l=t.fc||null,this.j=t.ob||!1}ze(bu,Ym);bu.prototype.g=function(){return new Nu(this.l,this.j)};bu.prototype.i=function(t){return function(){return t}}({});function Nu(t,e){Be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=eg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Nu,Be);var eg=0;L=Nu.prototype;L.open=function(t,e){if(this.readyState!=eg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,aa(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ma(this)),this.readyState=eg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zx(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zx(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ma(this):aa(this),this.readyState==3&&zx(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Ma(this))};L.Ya=function(t){this.g&&(this.response=t,Ma(this))};L.ka=function(){this.g&&Ma(this)};function Ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,aa(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PL=H.JSON.parse;function Se(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vx,this.L=this.M=!1}ze(Se,Be);var Vx="",AL=/^https?$/i,OL=["POST","PUT"];L=Se.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kf.g(),this.C=this.u?Qv(this.u):Qv(kf),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Zv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=ox(OL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{qx(this),0<this.B&&((this.L=LL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=qm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zv(this,s)}};function LL(t){return na&&QO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Mm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Zv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hx(t),Ru(t)}function Hx(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Ru(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ru(this,!0)),Se.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?Wx(this):this.kb())};L.kb=function(){Wx(this)};function Wx(t){if(t.h&&typeof Mm<"u"&&(!t.C[1]||Tn(t)!=4||t.da()!=2)){if(t.v&&Tn(t)==4)qm(t.La,0,t);else if(Ke(t,"readystatechange"),Tn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(Ox)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!AL.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Hx(t)}}finally{Ru(t)}}}}function Ru(t,e){if(t.g){qx(t);const n=t.g,r=t.C[0]?Tc:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function qx(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Tn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PL(e)}};function e0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Vx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kx(t){let e="";return $m(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function tg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Kx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gx(t){this.Ga=0,this.i=[],this.j=new Su,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qs("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qs("baseRetryDelayMs",5e3,t),this.hb=Qs("retryDelaySeedMs",1e4,t),this.eb=Qs("forwardChannelMaxRetries",2,t),this.xa=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Fx(t&&t.concurrentRequestLimit),this.Ja=new bL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}L=Gx.prototype;L.qa=8;L.H=1;function ng(t){if(Yx(t),t.H==3){var e=t.W++,n=Fn(t.G);de(n,"SID",t.J),de(n,"RID",e),de(n,"TYPE","terminate"),Fa(t,n),e=new La(t,t.j,e,void 0),e.L=2,e.v=Iu(Fn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=rC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Da(e)}tC(t)}function Pu(t){t.g&&(ig(t),t.g.cancel(),t.g=null)}function Yx(t){Pu(t),t.u&&(H.clearTimeout(t.u),t.u=null),Pc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Au(t){Ux(t.h)||t.m||(t.m=!0,_x(t.Na,t),t.C=0)}function DL(t,e){return $x(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Aa(Ze(t.Na,t,e),eC(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new La(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=hx(s),dx(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qx(this,i,e),n=Fn(this.G),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),Fa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Kx(s)))+"&"+e:this.o&&tg(n,this.o,s)),Jm(this.h,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.ba=!0,If(i,n,null)):If(i,n,e),this.H=2}}else this.H==3&&(t?t0(this,t):this.i.length==0||Ux(this.h)||t0(this))};function t0(t,e){var n;e?n=e.m:n=t.W++;const r=Fn(t.G);de(r,"SID",t.J),de(r,"RID",n),de(r,"AID",t.V),Fa(t,r),t.o&&t.s&&tg(r,t.o,t.s),n=new La(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Qx(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jm(t.h,n),If(n,r,e)}function Fa(t,e){t.ma&&$m(t.ma,function(n,r){de(e,r,n)}),t.l&&Ax({},function(n,r){de(e,r,n)})}function Qx(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ze(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{NL(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function Xx(t){t.g||t.u||(t.ba=1,_x(t.Ma,t),t.A=0)}function rg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Aa(Ze(t.Ma,t),eC(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,Jx(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Aa(Ze(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ot(10),Pu(this),Jx(this))};function ig(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Jx(t){t.g=new La(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Fn(t.wa);de(e,"RID","rpc"),de(e,"SID",t.J),de(e,"CI",t.M?"0":"1"),de(e,"AID",t.V),de(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&tg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Iu(Fn(e)),n.s=null,n.S=!0,bx(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Pu(this),rg(this),ot(19))};function Pc(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Zx(t,e){var n=null;if(t.g==e){Pc(t),ig(t),t.g=null;var r=2}else if(Nf(t.h,e))n=e.F,jx(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Km(),Ke(r,new Tx(r,n)),Au(t)}else Xx(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&DL(t,e)||r==2&&rg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Kr(t,5);break;case 4:Kr(t,10);break;case 3:Kr(t,6);break;default:Kr(t,2)}}}function eC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Kr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ze(t.pb,t);n||(n=new Zr("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Nc(n,"https"),Iu(n)),RL(n.toString(),r)}else ot(2);t.H=0,t.l&&t.l.za(e),tC(t),Yx(t)}L.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function tC(t){if(t.H=0,t.pa=[],t.l){const e=Bx(t.h);(e.length!=0||t.i.length!=0)&&(Wv(t.pa,e),Wv(t.pa,t.i),t.h.i.length=0,Fm(t.i),t.i.length=0),t.l.ya()}}function nC(t,e,n){var r=n instanceof Zr?Fn(n):new Zr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Rc(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Zr(null,void 0);r&&Nc(s,r),e&&(s.g=e),i&&Rc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.qa),Fa(t,r),r}function rC(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new bu({ob:!0})):new Se(t.va),e.Oa(t.I),e}function iC(){}L=iC.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.Va=function(){};function Wt(t,e){Be.call(this),this.g=new Gx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ic(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ic(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ms(this)}ze(Wt,Be);Wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=nC(t,null,t.Y),Au(t)};Wt.prototype.close=function(){ng(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hm(t),t=n);e.i.push(new TL(e.fb++,t)),e.H==3&&Au(e)};Wt.prototype.N=function(){this.g.l=null,delete this.j,ng(this.g),delete this.g,Wt.$.N.call(this)};function sC(t){Qm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(sC,Qm);function oC(){Xm.call(this),this.status=1}ze(oC,Xm);function Ms(t){this.g=t}ze(Ms,iC);Ms.prototype.Ba=function(){Ke(this.g,"a")};Ms.prototype.Aa=function(t){Ke(this.g,new sC(t))};Ms.prototype.za=function(t){Ke(this.g,new oC)};Ms.prototype.ya=function(){Ke(this.g,"b")};function ML(){this.blockSize=-1}function yn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(yn,ML);yn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}yn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Dh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Dh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Dh(this,r),i=0;break}}this.h=i,this.i+=e};yn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var FL={};function sg(t){return-128<=t&&128>t?ax(FL,t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function hn(t){if(isNaN(t)||!isFinite(t))return rs;if(0>t)return We(hn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Rf;return new re(e,0)}function aC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(aC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=hn(Math.pow(e,8)),r=rs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=hn(Math.pow(e,s)),r=r.R(s).add(hn(o))):(r=r.R(n),r=r.add(hn(o)))}return r}var Rf=4294967296,rs=sg(0),Pf=sg(1),n0=sg(16777216);L=re.prototype;L.ea=function(){if(Ut(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Rf+r)*e,e*=Rf}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(In(this))return"0";if(Ut(this))return"-"+We(this).toString(t);for(var e=hn(Math.pow(t,6)),n=this,r="";;){var i=Oc(n,e).g;n=Ac(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,In(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function In(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}L.X=function(t){return t=Ac(this,t),Ut(t)?-1:In(t)?0:1};function We(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(Pf)}L.abs=function(){return Ut(this)?We(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Ac(t,e){return t.add(We(e))}L.R=function(t){if(In(this)||In(t))return rs;if(Ut(this))return Ut(t)?We(this).R(We(t)):We(We(this).R(t));if(Ut(t))return We(this.R(We(t)));if(0>this.X(n0)&&0>t.X(n0))return hn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ul(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ul(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ul(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ul(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function ul(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xs(t,e){this.g=t,this.h=e}function Oc(t,e){if(In(e))throw Error("division by zero");if(In(t))return new Xs(rs,rs);if(Ut(t))return e=Oc(We(t),e),new Xs(We(e.g),We(e.h));if(Ut(e))return e=Oc(t,We(e)),new Xs(We(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pf,r=e;0>=r.X(t);)n=r0(n),r=r0(r);var i=bi(n,1),s=bi(r,1);for(r=bi(r,2),n=bi(n,2);!In(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=bi(r,1),n=bi(n,1)}return e=Ac(t,i.R(e)),new Xs(i,e)}for(i=rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=hn(n),o=s.R(e);Ut(o)||0<o.X(t);)n-=r,s=hn(n),o=s.R(e);In(s)&&(s=Pf),i=i.add(s),t=Ac(t,o)}return new Xs(i,t)}L.gb=function(t){return Oc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function r0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function bi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;Gm.NO_ERROR=0;Gm.TIMEOUT=8;Gm.HTTP_ERROR=6;fL.COMPLETE="complete";pL.EventType=Oa;Oa.OPEN="a";Oa.CLOSE="b";Oa.ERROR="c";Oa.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;yn.prototype.digest=yn.prototype.l;yn.prototype.reset=yn.prototype.reset;yn.prototype.update=yn.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=hn;re.fromString=aC;var UL=re;const i0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new va("@firebase/firestore");function Tt(t,...e){if(Lc.logLevel<=ee.DEBUG){const n=e.map(lC);Lc.debug(`Firestore (${Ou}): ${t}`,...n)}}function og(t,...e){if(Lc.logLevel<=ee.ERROR){const n=e.map(lC);Lc.error(`Firestore (${Ou}): ${t}`,...n)}}function lC(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t="Unexpected state"){const e=`FIRESTORE (${Ou}) INTERNAL ASSERTION FAILED: `+t;throw og(e),new Error(e)}function Af(t,e){t||cC()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class St extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}let BL=class{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new is;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new is,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new is)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Af(typeof r.accessToken=="string"),new $L(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Af(e===null||typeof e=="string"),new ht(e)}},zL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class VL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new zL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let HL=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class WL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&Tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Tt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):Tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Af(typeof n.token=="string"),this.T=n.token,new HL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function uC(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Dc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s0,J;(J=s0||(s0={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new UL([4294967295,4294967295],0);function Mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&Tt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ag(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new St(Ct.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function QL(t,e){if(og("AsyncQueue",`${e}: ${t}`),uC(t))return new St(Ct.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=KL.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Tt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Tt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new St(Ct.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=QL(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new Map;function JL(t,e,n,r){if(e===!0&&r===!0)throw new St(Ct.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new St(Ct.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new St(Ct.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new St(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new St(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new St(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class ZL{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new St(Ct.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new St(Ct.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jL;switch(n.type){case"firstParty":return new VL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new St(Ct.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=o0.get(e);n&&(Tt("ComponentProvider","Removing Datastore"),o0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new YL(this,"async_queue_retry"),this.Xc=()=>{const n=Mh();n&&Tt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new is;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!uC(e))throw e;Tt("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw og("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=ag.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&cC()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class tD extends ZL{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nD(this),this._firestoreClient.terminate()}}function nD(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new GL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,hC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Ou=n})($n),Ht(new Rt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new tD(new BL(n.getProvider("auth-internal")),new WL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new St(Ct.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dc(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ie(i0,"3.12.0",t),Ie(i0,"3.12.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="us-central1";class sD{constructor(e,n,r,i,s=l0,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new iD(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=l0}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const c0="@firebase/functions",u0="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="auth-internal",aD="app-check-internal",lD="messaging-internal";function cD(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(oD),a=r.getProvider(lD),l=r.getProvider(aD);return new sD(s,o,a,l,i,t)};Ht(new Rt(rD,n,"PUBLIC").setMultipleInstances(!0)),Ie(c0,u0,e),Ie(c0,u0,"esm2017")}cD(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="firebasestorage.googleapis.com",fC="storageBucket",uD=2*60*1e3,hD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends qt{constructor(e,n,r=0){super(Fh(e),`Firebase Storage: ${n} (${Fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Fh(t){return"storage/"+t}function lg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ee(we.UNKNOWN,t)}function dD(t){return new Ee(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fD(t){return new Ee(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(we.UNAUTHENTICATED,t)}function mD(){return new Ee(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gD(t){return new Ee(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function yD(){return new Ee(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vD(){return new Ee(we.CANCELED,"User canceled the upload/download.")}function _D(t){return new Ee(we.INVALID_URL,"Invalid URL '"+t+"'.")}function wD(t){return new Ee(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ED(){return new Ee(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fC+"' property when initializing the app?")}function xD(){return new Ee(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CD(){return new Ee(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function SD(t){return new Ee(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Of(t){return new Ee(we.INVALID_ARGUMENT,t)}function pC(){return new Ee(we.APP_DELETED,"The Firebase app was deleted.")}function kD(t){return new Ee(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Co(t,e){return new Ee(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Js(t){throw new Ee(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw wD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},w=n===dC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${S}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:g,indices:v,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<y.length;x++){const b=y[x],A=b.regex.exec(e);if(A){const N=A[b.indices.bucket];let R=A[b.indices.path];R||(R=""),r=new It(N,R),b.postModify(r);break}}if(r==null)throw _D(e);return r}}class TD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...S){c||(c=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function f(){s&&clearTimeout(s)}function g(S,...m){if(c){f();return}if(S){f(),u.call(null,S,...m);return}if(l()||o){f(),u.call(null,S,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function w(S){v||(v=!0,f(),!c&&(i!==null?(S||(a=2),clearTimeout(i),d(0)):S||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function bD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){return t!==void 0}function RD(t){return typeof t=="object"&&!Array.isArray(t)}function cg(t){return typeof t=="string"||t instanceof String}function h0(t){return ug()&&t instanceof Blob}function ug(){return typeof Blob<"u"&&!qI()}function d0(t,e,n,r){if(r<e)throw Of(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Of(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function mC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ei||(ei={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n,r,i,s,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ei.NO_ERROR,l=s.getStatus();if(!a||PD(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ei.ABORT;r(!1,new hl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new hl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ND(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=lg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?pC():vD();o(l)}else{const l=yD();o(l)}};this.canceled_?n(!1,new hl(!1,null,!0)):this.backoffId_=ID(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function OD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function MD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FD(t,e,n,r,i,s,o=!0){const a=mC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return DD(c,e),OD(c,n),LD(c,s),MD(c,r),new AD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $D(...t){const e=UD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ug())return new Blob(t);throw new Ee(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){if(typeof atob>"u")throw SD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uh{constructor(e,n){this.data=e,this.contentType=n||null}}function zD(t,e){switch(t){case dn.RAW:return new Uh(gC(e));case dn.BASE64:case dn.BASE64URL:return new Uh(yC(t,e));case dn.DATA_URL:return new Uh(HD(e),WD(e))}throw lg()}function gC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VD(t){let e;try{e=decodeURIComponent(t)}catch{throw Co(dn.DATA_URL,"Malformed data URL.")}return gC(e)}function yC(t,e){switch(t){case dn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Co(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Co(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BD(e)}catch(i){throw i.message.includes("polyfill")?i:Co(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Co(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HD(t){const e=new vC(t);return e.base64?yC(dn.BASE64,e.rest):VD(e.rest)}function WD(t){return new vC(t).contentType}function qD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){let r=0,i="";h0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(h0(this.data_)){const r=this.data_,i=jD(r,e,n);return i===null?null:new rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(ug()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr($D.apply(null,n))}else{const n=e.map(o=>cg(o)?zD(dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new rr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){let e;try{e=JSON.parse(t)}catch{return null}return RD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function wC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t,e){return e}class it{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YD}}let dl=null;function QD(t){return!cg(t)||t.length<2?t:wC(t)}function EC(){if(dl)return dl;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(s,o){return QD(o)}const n=new it("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=r,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),dl=t,dl}function XD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new It(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function JD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return XD(r,t),r}function xC(t,e,n){const r=_C(e);return r===null?null:JD(t,r,n)}function ZD(t,e,n,r){const i=_C(e);if(i===null||!cg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),g=hg(f,n,r),v=mC({alt:"media",token:c});return g+v})[0]}function e4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class CC{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){if(!t)throw lg()}function t4(t,e){function n(r,i){const s=xC(t,i,e);return SC(s!==null),s}return n}function n4(t,e){function n(r,i){const s=xC(t,i,e);return SC(s!==null),ZD(s,i,t.host,t._protocol)}return n}function kC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=mD():i=pD():n.getStatus()===402?i=fD(t.bucket):n.getStatus()===403?i=gD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function r4(t){const e=kC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=dD(t.path)),s.serverResponse=i.serverResponse,s}return n}function i4(t,e,n){const r=e.fullServerUrl(),i=hg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new CC(i,s,n4(t,n),o);return a.errorHandler=r4(e),a}function s4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function o4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=s4(null,e)),r}function a4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let x=0;x<2;x++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=o4(e,r,i),u=e4(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=rr.getBlob(d,r,f);if(g===null)throw xD();const v={name:c.fullPath},w=hg(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,p=new CC(w,S,t4(t,n),m);return p.urlParams=v,p.headers=o,p.body=g.uploadData(),p.errorHandler=kC(e),p}class l4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ei.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ei.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ei.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class c4 extends l4{initXhr(){this.xhr_.responseType="text"}}function TC(){return new c4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pi(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wC(this._location.path)}get storage(){return this._service}get parent(){const e=KD(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new pi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kD(e)}}function u4(t,e,n){t._throwIfRoot("uploadBytes");const r=a4(t.storage,t._location,EC(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,TC).then(i=>({metadata:i,ref:t}))}function h4(t){t._throwIfRoot("getDownloadURL");const e=i4(t.storage,t._location,EC());return t.storage.makeRequestWithTokens(e,TC).then(n=>{if(n===null)throw CD();return n})}function d4(t,e){const n=GD(t._location.path,e),r=new It(t._location.bucket,n);return new pi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(t){return/^[A-Za-z]+:\/\//.test(t)}function p4(t,e){return new pi(t,e)}function IC(t,e){if(t instanceof dg){const n=t;if(n._bucket==null)throw ED();const r=new pi(n,n._bucket);return e!=null?IC(r,e):r}else return e!==void 0?d4(t,e):t}function m4(t,e){if(e&&f4(e)){if(t instanceof dg)return p4(t,e);throw Of("To use ref(service, url), the first argument must be a Storage instance.")}else return IC(t,e)}function f0(t,e){const n=e==null?void 0:e[fC];return n==null?null:It.makeFromBucketSpec(n,t)}function g4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:n1(i,t.app.options.projectId))}class dg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uD,this._maxUploadRetryTime=hD,this._requests=new Set,i!=null?this._bucket=It.makeFromBucketSpec(i,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new TD(pC());{const o=FD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const p0="@firebase/storage",m0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="storage";function y4(t,e,n){return t=be(t),u4(t,e,n)}function v4(t){return t=be(t),h4(t)}function _4(t,e){return t=be(t),m4(t,e)}function w4(t=Bp(),e){t=be(t);const r=Ts(t,bC).getImmediate({identifier:e}),i=Zw("storage");return i&&E4(r,...i),r}function E4(t,e,n,r={}){g4(t,e,n,r)}function x4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new dg(n,r,i,e,$n)}function C4(){Ht(new Rt(bC,x4,"PUBLIC").setMultipleInstances(!0)),Ie(p0,m0,""),Ie(p0,m0,"esm2017")}C4();const S4=(t,e)=>e.some(n=>t instanceof n);let g0,y0;function k4(){return g0||(g0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T4(){return y0||(y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NC=new WeakMap,Lf=new WeakMap,RC=new WeakMap,$h=new WeakMap,fg=new WeakMap;function I4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NC.set(n,t)}).catch(()=>{}),fg.set(e,t),e}function b4(t){if(Lf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lf.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N4(t){Df=t(Df)}function R4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jh(this),e,...n);return RC.set(r,e.sort?e.sort():[e]),wr(r)}:T4().includes(t)?function(...e){return t.apply(jh(this),e),wr(NC.get(this))}:function(...e){return wr(t.apply(jh(this),e))}}function P4(t){return typeof t=="function"?R4(t):(t instanceof IDBTransaction&&b4(t),S4(t,k4())?new Proxy(t,Df):t)}function wr(t){if(t instanceof IDBRequest)return I4(t);if($h.has(t))return $h.get(t);const e=P4(t);return e!==t&&($h.set(t,e),fg.set(e,t)),e}const jh=t=>fg.get(t);function A4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const O4=["get","getKey","getAll","getAllKeys","count"],L4=["put","add","delete","clear"],Bh=new Map;function v0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bh.set(e,s),s}N4(t=>({...t,get:(e,n,r)=>v0(e,n)||t.get(e,n,r),has:(e,n)=>!!v0(e,n)||t.has(e,n)}));const PC="@firebase/installations",pg="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=1e4,OC=`w:${pg}`,LC="FIS_v2",D4="https://firebaseinstallations.googleapis.com/v1",M4=60*60*1e3,F4="installations",U4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},mi=new Ei(F4,U4,$4);function DC(t){return t instanceof qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC({projectId:t}){return`${D4}/projects/${t}/installations`}function FC(t){return{token:t.token,requestStatus:2,expiresIn:B4(t.expiresIn),creationTime:Date.now()}}async function UC(t,e){const r=(await e.json()).error;return mi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $C({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function j4(t,{refreshToken:e}){const n=$C(t);return n.append("Authorization",z4(e)),n}async function jC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function B4(t){return Number(t.replace("s","000"))}function z4(t){return`${LC} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=MC(t),i=$C(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:LC,appId:t.appId,sdkVersion:OC},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await jC(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:FC(c.authToken)}}else throw await UC("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4=/^[cdef][\w-]{21}$/,Mf="";function q4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=K4(t);return W4.test(n)?n:Mf}catch{return Mf}}function K4(t){return H4(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new Map;function VC(t,e){const n=Lu(t);HC(n,e),G4(n,e)}function HC(t,e){const n=zC.get(t);if(n)for(const r of n)r(e)}function G4(t,e){const n=Y4();n&&n.postMessage({key:t,fid:e}),Q4()}let Gr=null;function Y4(){return!Gr&&"BroadcastChannel"in self&&(Gr=new BroadcastChannel("[Firebase] FID Change"),Gr.onmessage=t=>{HC(t.data.key,t.data.fid)}),Gr}function Q4(){zC.size===0&&Gr&&(Gr.close(),Gr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4="firebase-installations-database",J4=1,gi="firebase-installations-store";let zh=null;function mg(){return zh||(zh=A4(X4,J4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gi)}}})),zh}async function Mc(t,e){const n=Lu(t),i=(await mg()).transaction(gi,"readwrite"),s=i.objectStore(gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&VC(t,e.fid),e}async function WC(t){const e=Lu(t),r=(await mg()).transaction(gi,"readwrite");await r.objectStore(gi).delete(e),await r.done}async function Du(t,e){const n=Lu(t),i=(await mg()).transaction(gi,"readwrite"),s=i.objectStore(gi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&VC(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t){let e;const n=await Du(t.appConfig,r=>{const i=Z4(r),s=eM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Mf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Z4(t){const e=t||{fid:q4(),registrationStatus:0};return qC(e)}function eM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nM(t)}:{installationEntry:e}}async function tM(t,e){try{const n=await V4(t,e);return Mc(t.appConfig,n)}catch(n){throw DC(n)&&n.customData.serverCode===409?await WC(t.appConfig):await Mc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nM(t){let e=await _0(t.appConfig);for(;e.registrationStatus===1;)await BC(100),e=await _0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gg(t);return r||n}return e}function _0(t){return Du(t,e=>{if(!e)throw mi.create("installation-not-found");return qC(e)})}function qC(t){return rM(t)?{fid:t.fid,registrationStatus:0}:t}function rM(t){return t.registrationStatus===1&&t.registrationTime+AC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM({appConfig:t,heartbeatServiceProvider:e},n){const r=sM(t,n),i=j4(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:OC,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await jC(()=>fetch(r,a));if(l.ok){const c=await l.json();return FC(c)}else throw await UC("Generate Auth Token",l)}function sM(t,{fid:e}){return`${MC(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e=!1){let n;const r=await Du(t.appConfig,s=>{if(!KC(s))throw mi.create("not-registered");const o=s.authToken;if(!e&&lM(o))return s;if(o.requestStatus===1)return n=oM(t,e),s;{if(!navigator.onLine)throw mi.create("app-offline");const a=uM(s);return n=aM(t,a),a}});return n?await n:r.authToken}async function oM(t,e){let n=await w0(t.appConfig);for(;n.authToken.requestStatus===1;)await BC(100),n=await w0(t.appConfig);const r=n.authToken;return r.requestStatus===0?yg(t,e):r}function w0(t){return Du(t,e=>{if(!KC(e))throw mi.create("not-registered");const n=e.authToken;return hM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aM(t,e){try{const n=await iM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Mc(t.appConfig,r),n}catch(n){if(DC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await WC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mc(t.appConfig,r)}throw n}}function KC(t){return t!==void 0&&t.registrationStatus===2}function lM(t){return t.requestStatus===2&&!cM(t)}function cM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+M4}function uM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hM(t){return t.requestStatus===1&&t.requestTime+AC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(t){const e=t,{installationEntry:n,registrationPromise:r}=await gg(e);return r?r.catch(console.error):yg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(t,e=!1){const n=t;return await pM(n),(await yg(n,e)).token}async function pM(t){const{registrationPromise:e}=await gg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(t){if(!t||!t.options)throw Vh("App Configuration");if(!t.name)throw Vh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vh(t){return mi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="installations",gM="installations-internal",yM=t=>{const e=t.getProvider("app").getImmediate(),n=mM(e),r=Ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vM=t=>{const e=t.getProvider("app").getImmediate(),n=Ts(e,GC).getImmediate();return{getId:()=>dM(n),getToken:i=>fM(n,i)}};function _M(){Ht(new Rt(GC,yM,"PUBLIC")),Ht(new Rt(gM,vM,"PRIVATE"))}_M();Ie(PC,pg);Ie(PC,pg,"esm2017");const Hh="@firebase/remote-config",E0="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},ft=new Ei("remoteconfig","Remote Config",EM);function xM(t){const e=be(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:SM()},l={method:"POST",headers:o,body:JSON.stringify(a)},c=fetch(s,l),u=new Promise((S,m)=>{e.signal.addEventListener(()=>{const p=new Error("The operation was aborted.");p.name="AbortError",m(p)})});let d;try{await Promise.race([c,u]),d=await c}catch(S){let m="fetch-client-network";throw(S==null?void 0:S.name)==="AbortError"&&(m="fetch-timeout"),ft.create(m,{originalErrorMessage:S==null?void 0:S.message})}let f=d.status;const g=d.headers.get("ETag")||void 0;let v,w;if(d.status===200){let S;try{S=await d.json()}catch(m){throw ft.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}v=S.entries,w=S.state}if(w==="INSTANCE_STATE_UNSPECIFIED"?f=500:w==="NO_CHANGE"?f=304:(w==="NO_TEMPLATE"||w==="EMPTY_CONFIG")&&(v={}),f!==304&&f!==200)throw ft.create("fetch-status",{httpStatus:f});return{status:f,eTag:g,config:v}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function IM(t){if(!(t instanceof qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bM{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await TM(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!IM(i))throw i;const s={throttleEndTimeMillis:Date.now()+ub(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=60*1e3,RM=12*60*60*1e3;class PM{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:NM,minimumFetchIntervalMillis:RM},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e){const n=t.target.error||void 0;return ft.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const jr="app_namespace_store",AM="firebase_remote_config",OM=1;function LM(){return new Promise((t,e)=>{try{const n=indexedDB.open(AM,OM);n.onerror=r=>{e(Rl(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(jr,{keyPath:"compositeKey"})}}}catch(n){e(ft.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class DM{constructor(e,n,r,i=LM()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([jr],"readonly").objectStore(jr),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=c=>{i(Rl(c,"storage-get"))},l.onsuccess=c=>{const u=c.target.result;r(u?u.value:void 0)}}catch(l){i(ft.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([jr],"readwrite").objectStore(jr),l=this.createCompositeKey(e);try{const c=a.put({compositeKey:l,value:n});c.onerror=u=>{s(Rl(u,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(ft.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([jr],"readwrite").objectStore(jr),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=c=>{i(Rl(c,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(ft.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(){Ht(new Rt(wM,t,"PUBLIC").setMultipleInstances(!0)),Ie(Hh,E0),Ie(Hh,E0,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw ft.create("registration-window");if(!s1())throw ft.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw ft.create("registration-project-id");if(!o)throw ft.create("registration-api-key");if(!a)throw ft.create("registration-app-id");n=n||"firebase";const l=new DM(a,r.name,n),c=new MM(l),u=new va(Hh);u.logLevel=ee.ERROR;const d=new kM(i,$n,n,s,o,a),f=new bM(d,l),g=new CM(f,l,c,u),v=new PM(r,g,c,l,u);return xM(v),v}}FM();var Ff=function(t,e){return Ff=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Ff(t,e)};function Bn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ff(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Uf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function la(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function ca(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Rn(t){return typeof t=="function"}function vg(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Wh=vg(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Fc(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ua=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Uf(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(w){e={error:w}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(Rn(u))try{u()}catch(w){s=w instanceof Wh?w.errors:[w]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var f=Uf(d),g=f.next();!g.done;g=f.next()){var v=g.value;try{x0(v)}catch(w){s=s??[],w instanceof Wh?s=ca(ca([],la(s)),la(w.errors)):s.push(w)}}}catch(w){r={error:w}}finally{try{g&&!g.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}if(s)throw new Wh(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)x0(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Fc(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Fc(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),YC=Ua.EMPTY;function QC(t){return t instanceof Ua||t&&"closed"in t&&Rn(t.remove)&&Rn(t.add)&&Rn(t.unsubscribe)}function x0(t){Rn(t)?t():t.unsubscribe()}var XC={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},UM={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,ca([t,e],la(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function $M(t){UM.setTimeout(function(){throw t})}function C0(){}function Pl(t){t()}var _g=function(t){Bn(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,QC(n)&&n.add(r)):r.destination=VM,r}return e.create=function(n,r,i){return new $f(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ua),jM=Function.prototype.bind;function qh(t,e){return jM.call(t,e)}var BM=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){fl(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){fl(r)}else fl(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){fl(n)}},t}(),$f=function(t){Bn(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Rn(n)||!n)o={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;s&&XC.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&qh(n.next,a),error:n.error&&qh(n.error,a),complete:n.complete&&qh(n.complete,a)}):o=n}return s.destination=new BM(o),s}return e}(_g);function fl(t){$M(t)}function zM(t){throw t}var VM={closed:!0,next:C0,error:zM,complete:C0},HM=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function WM(t){return t}function qM(t){return t.length===0?WM:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var S0=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=GM(e)?e:new $f(e,n,r);return Pl(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=k0(n),new n(function(i,s){var o=new $f({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[HM]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return qM(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=k0(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function k0(t){var e;return(e=t??XC.Promise)!==null&&e!==void 0?e:Promise}function KM(t){return t&&Rn(t.next)&&Rn(t.error)&&Rn(t.complete)}function GM(t){return t&&t instanceof _g||KM(t)&&QC(t)}(function(t){Bn(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(u){n.error(u)}}:t.prototype._next,l._error=s?function(c){try{s(c)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(_g);var YM=vg(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),JC=function(t){Bn(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new T0(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new YM},e.prototype.next=function(n){var r=this;Pl(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Uf(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Pl(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Pl(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?YC:(this.currentObservers=null,a.push(n),new Ua(function(){r.currentObservers=null,Fc(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new S0;return n.source=this,n},e.create=function(n,r){return new T0(n,r)},e}(S0),T0=function(t){Bn(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:YC},e}(JC),wg={now:function(){return(wg.delegate||Date).now()},delegate:void 0};(function(t){Bn(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=wg);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),c=0,u=1;u<s.length&&s[u]<=l;u+=2)c=u;c&&s.splice(0,c+1)}},e})(JC);var QM=function(t){Bn(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Ua),jf={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=jf.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,ca([t,e],la(n))):setInterval.apply(void 0,ca([t,e],la(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},XM=function(t){Bn(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),jf.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;jf.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Fc(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(QM),I0=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=wg.now,t}(),JM=function(t){Bn(e,t);function e(n,r){r===void 0&&(r=I0.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(I0);new JM(XM);vg(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const ZM="[DEFAULT]",e3=C.createContext(void 0),t3=C.createContext(!1),n3="4.2.2",r3=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function i3(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=C.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=aN().find(o=>o.name===(n||ZM));if(s){if(e&&r3(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=C.version||"unknown";return Ie("react",o),Ie("reactfire",n3),c1(e,n)}},[t.firebaseApp,e,n]);return C.createElement(e3.Provider,{value:i},C.createElement(t3.Provider,Object.assign({value:r??!1},t)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr,Br;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Br||(Br={}));Object.freeze((Dr={},Dr[Br.added]=gP,Dr[Br.removed]=_P,Dr[Br.changed]=yP,Dr[Br.moved]=vP,Dr[Br.value]=Rr,Dr));const s3=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=s3);const o3=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=o3);const a3=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=a3);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);C.createContext(void 0);const Kh=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];function l3({currentItems:t}){return h(U0,{children:t&&t.map(e=>h("div",{children:_("h3",{children:["Item #",e]})}))})}function c3({itemsPerPage:t}){const[e,n]=C.useState(0),r=e+t;console.log(`Loading items from ${e} to ${r}`);const i=Kh.slice(e,r),s=Math.ceil(Kh.length/t);return _(U0,{children:[h(l3,{currentItems:i}),h(FO,{breakLabel:"...",nextLabel:" next >",onPageChange:a=>{const l=a.selected*t%Kh.length;console.log(`User requested page number ${a.selected}, which is offset ${l}`),n(l)},pageRangeDisplayed:5,pageCount:s,previousLabel:"< previous",renderOnZeroPageCount:null})]})}function ZC(){return _("footer",{className:"border-t border-gray-400 py-8 px-8 lg:px-40",children:[_("section",{className:"flex flex-wrap items-center justify-between",children:[h(Cr,{image:Kw,classLogo:"text-gray-400",logo:"btc"}),_("aside",{className:"flex flex-wrap",children:[h(Qi,{is:!0,classN:"md:border-none",section:"Company",liOne:"About us",liTwo:"Legal",liThree:"Career",liFour:"Contact"}),h(Qi,{section:"Services",liOne:"Pricing",liTwo:"Products",liThree:"Customers",liFour:"Success Stories"}),h(Qi,{section:"Support",liOne:"About us",liTwo:"Legal",liThree:"Career"})]})]}),h("section",{className:"flex items-center flex-start text-gray-50",children:_("p",{children:["© Business Travel Consulting ",h("span",{id:"current-year"})," - All rights reserved · Privacy Policy"]})}),h("style",{children:`
                    aside ul li a {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    aside ul li a::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    aside ul li a::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					aside ul li a:hover::after {
                        width: 100%;
                    }

                    aside ul li a:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    aside ul li a::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]})}const u3="/assets/user-c5a1cb9b.avif";function eS(t){return _("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40",children:[h("article",{className:"col-span-2",children:_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 ",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Navigation"}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/services",children:"Services"})}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/work",children:"Work"})}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/thoughts",children:"Thoughts"})}),h("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:h("a",{href:"/connect",children:"Connect"})})]})}),_("aside",{children:[_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Behind The Scenes"}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/about",children:"About Us"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/news",children:"News"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/jobs",children:"Jobs"})})]}),_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Offices"}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/",children:"BTC Americas"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/price-travel",children:"Price Travel"})}),h("li",{className:"text-2xl lg:my-1 lg:text-3xl",children:h("a",{href:"/big-fish",children:"Big Fish"})})]}),_("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Admin"}),t.children]})]}),h("style",{children:`
					.facebook {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/facebook.png");
					}

					.instagram {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/instagram.png");
					}

					.twitter {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/twitter.png");
					}

					.linkedin {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/linkedin.png");
					}
				`})]})}function h3(t){const[e,n]=C.useState(!1);return _("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[h(Cr,{image:ds,classLogo:"text-gray-100",logo:"btc"}),_("nav",{className:"flex",children:[h("section",{className:"relative flex flex-col justify-center bg-red-600 items-center rounded-full w-[60px] h-[60px] button-plus",onClick:()=>n(r=>!r),children:h("img",{className:"w-full",alt:"image user",src:u3})}),h("section",{className:e?"showMenuNav":"hideMenuNav",children:_("div",{className:"h-full",children:[_("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>n(!1),children:[h(Cr,{image:ds,classLogo:"text-gray-100",logo:"btc"}),_("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>n(r=>!r),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),h(eS,{children:t.children})]})})]}),h("style",{children:`
					nav {
						width: 99.4px;
						display: flex;
						justify-content: flex-end;
					}
					.hideMenuNav {
						display: none;
					}
					.showMenuNav {
						display: block;
						position: fixed;
						width: 100%;
						height: 100vh;
						top: 0;
						left: 0;
						background: #000c1a;
						z-index: 15;
						overflow-y: scroll;
					}
					.showMenuNav article a:hover {
						-webkit-text-stroke: 2px #fefefe;
						color: transparent;
					}
					.showMenuNav aside a:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent !important;
					}
					.button-plus-active {
						background-color: #e90123;
						animation-name: resplandorAnimation;
						transform: rotate(45deg);
						animation-duration:  1s;
						animation-iteration-count: infinite;
					}

					.button-plus:hover {
						background-color: #e90123;
						animation-name: resplandorAnimation, rotation;
						animation-duration:  1s, 0.5s;
						animation-iteration-count: infinite, 1;
					}
					@keyframes rotation {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					@keyframes resplandorAnimation {
						0%,100%{
							box-shadow: 0 0 20px red;
						}
						50%{
							box-shadow: 0px 0px 0px red;
						}
					}
					`})]})}function Mu({logOut:t,content:e}){return _("div",{className:"bg-[rgb(0,12,26)]",children:[h(h3,{children:t}),e,h(ZC,{})]})}function d3(){return _("section",{className:"flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 md:mb-36",children:[h("h1",{className:"text-gray-100 text-4xl font-semibold w-full",children:"Welcome Charly"}),_("article",{className:"flex items-start justify-center flex-wrap w-full",children:[_("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[h("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Candidates"}),h(oi,{to:"candidates/",children:h("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none",children:"See more..."})})]}),_("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[h("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Vacancies"}),h(oi,{to:"create",children:h("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none",children:"See more..."})})]})]})]})}function f3(){const[t,e]=C.useState({}),n=Pr(),r=sn(n,"/vacancy");C.useEffect(()=>{Rr(r,l=>{e(l.val())})},[]);const[i,s]=C.useState(0),o=i+18,a=Object.keys(t).slice(i,o);return _(wi,{children:[_("article",{className:"flex justify-center flex-col items-center pb-20 px-2",children:[h("header",{className:"lg:mt-[-113px] flex justify-center items-center w-full max-w-4xl",children:_("section",{className:"w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6",children:[_("aside",{className:"grid grid-cols-3 gap-0 rounded",children:[h("div",{className:"col-span-2 p-2 rounded",children:_("div",{className:"flex border border-gray-700 rounded bg-gray-200 items-center p-2 hover:bg-gray-300",children:[h("span",{className:"material-symbols-outlined text-gray-800",children:"search"}),h("input",{className:"bg-transparent w-full focus:outline-none text-gray-800",type:"search"})]})}),h("div",{className:" p-2 rounded",children:h("div",{className:"flex justify-center w-full",children:h("button",{className:"p-2 w-full rounded-md border-0 bg-red-600 text-white hover:bg-red-700",children:"Search"})})})]}),_("aside",{className:"flex flex-wrap md:flex-row text-gray-100",children:[h("div",{className:"flex items-center",children:h("p",{children:"FILTER BY:"})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"LOCATION TYPE"}),h("option",{children:"On-site"}),h("option",{children:"Hybrid"}),h("option",{children:"Remote"})]})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"LOCATION"}),h("option",{children:"All"}),h("option",{children:"CDMX"}),h("option",{children:"MX"})]})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"TEAM"}),h("option",{children:"BTC Americas"}),h("option",{children:"Price Travel"}),h("option",{children:"Big Fish"})]})}),h("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:_("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[h("option",{hidden:"hidden",value:"defaultValue",children:"WORK TYPE"}),h("option",{children:"All"}),h("option",{children:"Full Time"}),h("option",{children:"Halftime"})]})})]})]})}),h("div",{className:"w-full max-w-4xl",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l];return h(km,{vacancyData:c,children:h(oi,{to:`/jobs/${l}`,children:_("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse",children:["Apply Now",h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})},l)})})]}),h("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function p3(){const[t,e]=C.useState(!1),n=Si(),r=Nr(),i=()=>{ba(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return C.useEffect(()=>{Ia(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log("Welcome Charly"),e(!0)):(e(!1),console.log("You need Log In"))})}),h("div",{children:t?h(Mu,{logOut:(()=>_("div",{className:"flex justify-start w-full max-w-4xl",children:[_("button",{onClick:i,className:"btn-animate flex items-center lg:text-3xl text-gray-100",children:[h("span",{className:"material-symbols-outlined text-2xl lg:text-3xl",children:"logout"}),h("span",{className:"text-border-btn text-2xl",children:"Logout"})]}),h("style",{children:`
					.text-border-btn:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}

                    .btn-animate {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    .btn-animate::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    .btn-animate::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					.btn-animate:hover::after {
                        width: 100%;
                    }

                    .btn-animate:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    .btn-animate::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]}))(),content:h(d3,{})}):h(f3,{})})}function Pe({label:t,name:e,on:n,val:r}){return _("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:t}),h("input",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}function m3({on:t}){return _("div",{className:"",children:[h("label",{htmlFor:"",className:"text-gray-300 mx-2",children:"Asignar Fecha"}),h("input",{required:!0,type:"checkbox",name:"dateVacancy",onChange:t,className:"relative float-right mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:bg-blue-800"})]})}function tS({label:t,name:e,on:n,val:r}){return _("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300",children:t}),h("textarea",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}function g3(){const[t,e]=C.useState({}),{id:n}=Fp(),r=Pr(),i=sn(r,`/vacancy/${n}`),{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:u,content:d,salaryVacancy:f,categoryVacancy:g,subcategoryVacancy:v,requiredVacancy:w}=t,S=new Date,m=`${S.getFullYear()}-${S.getMonth()+1}-${S.getDate()}`,p=new Date(m),y=new Date(s),x=864e5,A=(p-y)/x;C.useEffect(()=>{Rr(i,$=>{e($.val())})},[]);const N=$=>{const Ne=$.target.name,D=new Date($.target.value);e({...t,[Ne]:D})},R=$=>{const Ne=$.target.name,D=$.target.value;e({...t,[Ne]:D})},V=()=>(alert("Actualizado"),mP(i,t));return _("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]",children:[h("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8",children:_("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",children:[_("div",{className:"flex justify-end items-center",children:[h("label",{className:"text-gray-300 mx-2",children:"Fecha:"}),h("input",{type:"date",name:"dateVacancy",onChange:N,className:"rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]}),h(Pe,{label:"Vacante",name:"vacancyTitle",val:o,on:R}),h(Pe,{label:"Área",name:"areaVacancy",val:l,on:R}),h(Pe,{label:"Categoría",name:"categoryVacancy",val:g,on:R}),h(Pe,{label:"Subcategoría",name:"subcategoryVacancy",val:v,on:R}),h(Pe,{label:"Salario",name:"salaryVacancy",val:f,on:R}),h(Pe,{label:"Jornada Laboral",name:"typeVacancy",val:a,on:R}),h(Pe,{label:"Modalidad",name:"typeLocation",val:u,on:R}),h(Pe,{label:"Ubicación",name:"locationPlace",val:c,on:R}),h(Pe,{label:"Educación mínima requerida",name:"requiredVacancy",val:w,on:R}),h(tS,{label:"Descripción",name:"content",val:d,on:R})]})}),h("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:h("section",{className:"flex justify-center flex-col items-center mb-8",children:_("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[_("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[_("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[o,h("span",{className:"text-slate-500 text-sm font-light",children:s==m?"Hoy":"Hace "+A+" días"})]}),h("p",{className:"font-bold text-gray-200",children:f}),_("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),l,", ",c]}),_("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:a}),h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:u})]})]}),_("article",{className:"py-2",children:[_("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),_("p",{children:[h("span",{className:"text-gray-100",children:"Categoría: "}),_("span",{className:"text-gray-300",children:[" ",g]})]}),_("p",{children:[h("span",{className:"text-gray-100",children:"Subcategoría: "}),_("span",{className:"text-gray-300",children:[" ",v]})]}),_("p",{children:[_("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),_("span",{className:"text-gray-300",children:[" ",w]})]})]}),_("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),h("p",{className:"text-gray-300",children:d})]})]}),h("button",{className:"bg-[#8bdc4870] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#8bdc488d] ml-0 animate-pulse hover:animate-none",type:"button",onClick:V,children:"Update"})]})})})]})}function y3(){return h(g3,{})}function Eg(){return _("section",{className:"flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-40 h-40 text-gray-300 animate-pulse ",children:[h("path",{fill:"currentColor",d:"M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"}),h("rect",{width:"176",height:"32",x:"168",y:"320",fill:"currentColor"}),h("polygon",{fill:"currentColor",points:"210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"}),h("polygon",{fill:"currentColor",points:"383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"})]}),h("p",{className:"text-3xl text-gray-300 animate-pulse",children:"Looks like this page are currently offline for you"}),h("a",{rel:"noopener noreferrer",href:"/",className:"px-8 py-3 font-semibold rounded text-gray-400 hover:border hover:rounded-xl hover:text-gray-100 ",children:"Back to homepage"})]})}function v3(){const[t,e]=C.useState(!1),n=Si(),r=Nr(),i=()=>{ba(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return C.useEffect(()=>{Ia(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log("Panel de 'Update'"),e(!0)):e(!1)})}),h("div",{children:t?h(Mu,{logOut:(()=>_("div",{className:"flex justify-start w-full max-w-4xl",children:[_("button",{onClick:i,className:"btn-animate flex items-center text-2xl lg:text-3xl text-gray-100",children:[h("span",{className:"material-symbols-outlined text-2xl lg:text-3xl",children:"logout"}),h("span",{className:"text-border-btn text-2xl",children:"Logout"})]}),h("style",{children:`
					.text-border-btn:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}

                    .btn-animate {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    .btn-animate::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    .btn-animate::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					.btn-animate:hover::after {
                        width: 100%;
                    }

                    .btn-animate:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    .btn-animate::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]}))(),content:h(y3,{})}):h(wi,{children:h(Eg,{})})})}function _3(){const[t,e]=C.useState({}),n=Pr(),r=sn(n,"/vacancy"),i=new Date,s=`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`,o=c=>{const u=c.target.name,d=s;e({...t,[u]:d})},a=c=>{const u=c.target.name,d=c.target.value;e({...t,[u]:d})};return h("section",{className:"flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ",children:_("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:c=>(c.preventDefault(),CE(r,t)),children:[h("div",{className:"flex justify-end",children:h(m3,{on:o})}),h(Pe,{label:"Vacante",name:"vacancyTitle",on:a}),h(Pe,{label:"Área",name:"areaVacancy",on:a}),h(Pe,{label:"Categoría",name:"categoryVacancy",on:a}),h(Pe,{label:"Subcategoría",name:"subcategoryVacancy",on:a}),h(Pe,{label:"Salario",name:"salaryVacancy",on:a}),h(Pe,{label:"Jornada Laboral",name:"typeVacancy",on:a}),h(Pe,{label:"Modalidad",name:"typeLocation",on:a}),h(Pe,{label:"Ubicación",name:"locationPlace",on:a}),h(Pe,{label:"Educación mínima requerida",name:"requiredVacancy",on:a}),h(tS,{label:"Descripción",name:"content",on:a}),h("div",{children:h("button",{className:"bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none",type:"submit",children:"Create"})})]})})}function w3(){const[t,e]=C.useState({}),n=Pr(),r=sn(n,"/vacancy");C.useEffect(()=>{Rr(r,l=>{e(l.val())})},[]);const[i,s]=C.useState(0),o=i+20,a=Object.keys(t).slice(i,o);return _("section",{children:[h("article",{className:"flex justify-center flex-col items-center pb-20",children:h("div",{className:"w-full",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l],u=()=>{SE(sn(n,`/vacancy/${l}`))},d=()=>{confirm("Are you sure of DELETE this Vacancy?")==!0&&u()};return _(km,{vacancyData:c,children:[h(oi,{to:`/logged/edit/${l}`,children:_("button",{className:"bg-[#74ff0029] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#8bdc4870] mb-1 w-[120px]",children:[h("span",{className:"material-symbols-outlined",children:"edit"}),"Edit"]})}),_("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:d,children:[h("span",{className:"material-symbols-outlined",children:"delete"}),"Delete"]})]},l)})})}),h("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function E3(){return _("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8",children:[h(_3,{}),h("article",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:h(w3,{})})]})}function x3(){const[t,e]=C.useState(!1),n=Si(),r=Nr(),i=()=>{ba(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return C.useEffect(()=>{Ia(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log("Welcome to Create Vacancies Panel :)"),e(!0)):e(!1)})}),h("div",{children:t?h(Mu,{logOut:(()=>_("div",{className:"flex justify-start w-full max-w-4xl",children:[_("button",{onClick:i,className:"btn-animate flex items-center lg:text-3xl text-gray-100",children:[h("span",{className:"material-symbols-outlined text-2xl lg:text-3xl",children:"logout"}),h("span",{className:"text-border-btn text-2xl",children:"Logout"})]}),h("style",{children:`
					.text-border-btn:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}

                    .btn-animate {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    .btn-animate::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    .btn-animate::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					.btn-animate:hover::after {
                        width: 100%;
                    }

                    .btn-animate:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    .btn-animate::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]}))(),content:h(E3,{})}):h(wi,{children:h(Eg,{})})})}function C3(t){const[e,n]=C.useState(!1);return _("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[h(Cr,{image:ds,classLogo:"text-gray-100",logo:"btc"}),_("nav",{className:"flex",children:[_("section",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus",onClick:()=>n(r=>!r),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]}),h("section",{className:e?"showMenuNav":"hideMenuNav",children:_("div",{className:"h-full",children:[_("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>n(!1),children:[h(Cr,{image:ds,classLogo:"text-gray-100",logo:"btc"}),_("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>n(r=>!r),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),h(eS,{children:t.children})]})})]}),h("style",{children:`
					nav {
						width: 99.4px;
						display: flex;
						justify-content: flex-end;
					}
					.hideMenuNav {
						display: none;
					}
					.showMenuNav {
						display: block;
						position: fixed;
						width: 100%;
						height: 100vh;
						top: 0;
						left: 0;
						background: #000c1a;
						z-index: 15;
						overflow-y: scroll;
					}
					.showMenuNav article a:hover {
						-webkit-text-stroke: 2px #fefefe;
						color: transparent;
					}
					.showMenuNav aside a:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent !important;
					}
					.button-plus-active {
						background-color: #e90123;
						animation-name: resplandorAnimation;
						transform: rotate(45deg);
						animation-duration:  1s;
						animation-iteration-count: infinite;
					}

					.button-plus:hover {
						background-color: #e90123;
						animation-name: resplandorAnimation, rotation;
						animation-duration:  1s, 0.5s;
						animation-iteration-count: infinite, 1;
					}
					@keyframes rotation {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					@keyframes resplandorAnimation {
						0%,100%{
							box-shadow: 0 0 20px red;
						}
						50%{
							box-shadow: 0px 0px 0px red;
						}
					}
					`})]})}function S3({logOut:t,content:e}){return _("div",{className:"bg-[rgb(0,12,26)]",children:[h(C3,{children:t}),e,h(ZC,{})]})}function k3(){const[t,e]=C.useState({}),[n,r]=C.useState({}),{id:i}=Fp(),s=Pr(),o=sn(s,`/vacancy/${i}`),a=sn(s,"/candidate"),[l,c]=C.useState({}),u=w4(),d=_4(u,`candidates/${l.name}`),{candidateName:f,vacancyTitle:g,dateVacancy:v,typeVacancy:w,areaVacancy:S,locationPlace:m,typeLocation:p,content:y,salaryVacancy:x,categoryVacancy:b,subcategoryVacancy:A,requiredVacancy:N}=t,R=new Date,V=`${R.getFullYear()}-${R.getMonth()+1}-${R.getDate()}`,$=new Date(V),Ne=new Date(v),D=864e5,G=($-Ne)/D;C.useEffect(()=>{Rr(o,E=>{e(E.val())})},[]);const X=E=>{const F=E.target.files[0];c(F),console.log(F)},wt=async()=>(await y4(d,l),await v4(d)),ke=E=>{const F=E.target.name,O=E.target.value;r({...n,[F]:O,vacancyTitle:g})},P=()=>(console.log("Enviado"),CE(a,n));return _("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]",children:[h("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8",children:_("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:async E=>{if(E.preventDefault(),n){const F=await wt();n.url=F,P()}alert("Enviado")},children:[_("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Nombres"}),h("input",{required:!0,autoComplete:"on",id:"domTextElement1",type:"name",name:"candidateName",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:ke})]}),_("div",{className:"flex my-4",children:[_("div",{className:"w-2/4 pr-2",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Nacionalidad"}),h("input",{required:!0,type:"text",name:"candidateNationality",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:ke})]}),_("div",{className:"w-2/4 pl-2",children:[h("label",{className:"text-gray-300 text-sm",children:"Fecha de Nacimiento"}),h("input",{required:!0,type:"date",name:"candidateBirthday",onChange:ke,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]})]}),_("div",{className:"flex my-4",children:[_("div",{className:"w-2/4 pr-2",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Número Celular"}),h("input",{required:!0,autoComplete:"on",type:"tel",name:"candidateTel",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:ke})]}),_("div",{className:"w-2/4 pl-2",children:[h("label",{className:"text-gray-300 text-sm",children:"Número de Contacto"}),h("input",{required:!0,type:"tel",name:"candidateTel2",onChange:ke,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]})]}),_("div",{className:"flex my-4",children:[_("div",{className:"w-2/4 pr-2",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Email"}),h("input",{required:!0,autoComplete:"on",type:"email",name:"candidateEmail",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:ke})]}),_("div",{className:"w-2/4 pl-2",children:[h("label",{className:"text-gray-300 text-sm",children:"Escolaridad"}),h("input",{required:!0,type:"text",name:"candidateGrade",onChange:ke,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]})]}),h(Pe,{required:!0,autoComplete:"on",label:"Dirección",name:"candidateLocation",on:ke}),_("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Adjuntar CV"}),h("input",{type:"file",name:"candidateGrade",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:X})]}),h("div",{className:"pb-8",children:h("span",{className:"block text-xs  text-gray-400",children:"Le sugerimos que el nombre de su archivo sea su nombre completo."})}),_("button",{className:"bg-[#2f7ce07f] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3d79f0b4] ml-0 animate-pulse hover:animate-none flex items-center mb-8",type:"submit",children:["Send",h("span",{className:"material-symbols-outlined",children:h("span",{className:"material-symbols-outlined",children:"arrow_forward"})})]})]})}),h("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:h("section",{className:"flex justify-center flex-col items-center mb-8",children:_("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[_("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[_("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[g,h("span",{className:"text-slate-500 text-sm font-light",children:v==V?"Hoy":"Hace "+G+" días"})]}),h("p",{className:"font-bold text-gray-200",children:x}),_("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),S,", ",m]}),_("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:w}),h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:p})]})]}),_("article",{className:"py-2",children:[_("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),_("p",{children:[h("span",{className:"text-gray-100",children:"Categoría: "}),_("span",{className:"text-gray-300",children:[" ",b]})]}),_("p",{children:[h("span",{className:"text-gray-100",children:"Subcategoría: "}),_("span",{className:"text-gray-300",children:[" ",A]})]}),_("p",{children:[_("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),_("span",{className:"text-gray-300",children:[" ",N]})]})]}),_("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),h("p",{className:"text-gray-300",children:y})]})]})]})})})]})}function T3(){return h("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8",children:h(k3,{})})}function I3(){const[t,e]=C.useState(!1),n=Si(),r=Nr(),i=()=>{ba(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return C.useEffect(()=>{Ia(n,o=>{o?(console.log("Welcome",o.email),e(!0)):e(!1)})}),h("div",{children:t?h(S3,{logOut:(()=>_("div",{className:"flex justify-start w-full max-w-4xl",children:[_("button",{onClick:i,className:"btn-animate flex items-center lg:text-3xl text-gray-100",children:[h("span",{className:"material-symbols-outlined text-2xl lg:text-3xl",children:"logout"}),h("span",{className:"text-border-btn text-2xl",children:"Logout"})," "]}),h("style",{children:`
					.text-border-btn:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}

                    .btn-animate {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    .btn-animate::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    .btn-animate::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					.btn-animate:hover::after {
                        width: 100%;
                    }

                    .btn-animate:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    .btn-animate::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]}))(),content:h(T3,{})}):h(Dm,{children:h(sx,{})})})}function b3(t){const{vacancyData:e}=t,{candidateBirthday:n,candidateEmail:r,candidateGrade:i,candidateLocation:s,candidateName:o,candidateNationality:a,candidateTel:l,candidateTel2:c,url:u,vacancyTitle:d}=e;return _("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-2",children:[_("div",{children:[h("span",{className:"text-slate-400 text-sm",children:d}),h("h3",{className:"font-bold mt-px text-gray-100",children:o}),_("div",{className:"flex flex-wrap items-center gap-3 mt-2",children:[_("span",{className:"flex items-center bg-[#ffffff17] hover:animate-pulse text-gray-400 rounded-full py-1 text-sm pl-2 pr-4",children:[h("span",{className:"p-1 material-symbols-outlined",children:"call"}),h("a",{href:"tel:+52"+l,target:"_blank",rel:"noopener noreferrer",children:l})]}),_("span",{className:"text-slate-400 text-sm flex gap-1 items-center hover:animate-pulse",children:[h("span",{className:"material-symbols-outlined",children:"mail"}),h("a",{href:"mailto:"+r,target:"_blank",rel:"noopener noreferrer",children:r})]}),_("span",{className:"text-slate-400 text-sm flex gap-1 items-center hover:animate-pulse",children:[h("span",{className:"material-symbols-outlined",children:"cloud_download"}),h("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:u.length>87?`${u.slice(87,97)}...pdf`:u})]})]})]}),h("div",{children:t.children})]})}function N3(){const[t,e]=C.useState({}),n=Pr(),r=sn(n,"/candidate");C.useEffect(()=>{Rr(r,l=>{e(l.val())})},[]);const[i,s]=C.useState(0),o=i+18,a=Object.keys(t).slice(i,o);return _("section",{children:[h("article",{className:"flex justify-center flex-col items-center pb-20",children:h("div",{className:"w-full max-w-4xl px-4 lg:px-0",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l],u=()=>{SE(sn(n,`/candidate/${l}`))},d=()=>{confirm("Are you sure of DELETE this Candidate?")==!0&&u()};return _(b3,{vacancyData:c,children:[h(oi,{to:`${l}`,children:h("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:animate-pulse mb-1 w-[120px]",children:"See more"})}),_("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:d,children:[h("span",{className:"material-symbols-outlined",children:"delete"}),"Delete"]})]},l)})})}),h("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function R3(){const[t,e]=C.useState(!1),n=Si(),r=Nr(),i=()=>{ba(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return C.useEffect(()=>{Ia(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log(`Welcome '${o.email}' to Candidates Panel 👷`),e(!0)):(e(!1),console.log("User is logged out"))})}),h("div",{children:t?h(Mu,{logOut:(()=>_("div",{className:"flex justify-start w-full max-w-4xl",children:[_("button",{onClick:i,className:"btn-animate flex items-center text-2xl lg:text-3xl text-gray-100",children:[h("span",{className:"material-symbols-outlined text-2xl lg:text-3xl",children:"logout"}),h("span",{className:"text-border-btn text-2xl",children:"Logout"})]}),h("style",{children:`
					.text-border-btn:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}

                    .btn-animate {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    .btn-animate::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    .btn-animate::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					.btn-animate:hover::after {
                        width: 100%;
                    }

                    .btn-animate:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    .btn-animate::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`})]}))(),content:h(N3,{})}):h(wi,{children:h(Eg,{})})})}function P3(){return h(NI,{children:_(SI,{children:[h(Dt,{path:"/",element:h(FI,{})}),h(Dt,{path:"/jobs",element:h(NP,{})}),h(Dt,{path:"/login",element:h(sx,{})}),h(Dt,{path:"/signup",element:h(LO,{})}),h(Dt,{path:"/logged",element:h(p3,{})}),h(Dt,{path:"/logged/create",element:h(x3,{})}),h(Dt,{path:"/logged/candidates",element:h(R3,{})}),h(Dt,{path:"/jobs/:id",element:h(DO,{})}),h(Dt,{path:"/apply/:id",element:h(I3,{})}),h(Dt,{path:"/logged/edit/:id",element:h(v3,{})}),h(Dt,{path:"/test",element:h(c3,{itemsPerPage:4})})]})})}const A3={apiKey:"AIzaSyDHkEMtgdX928zEjye6GsEfJwDX_5Ijjag",authDomain:"reactdemo-fdaf5.firebaseapp.com",databaseURL:"https://reactdemo-fdaf5-default-rtdb.firebaseio.com",projectId:"reactdemo-fdaf5",storageBucket:"reactdemo-fdaf5.appspot.com",messagingSenderId:"749100592564",appId:"1:749100592564:web:aa5d0569ddb8266981d6e1",measurementId:"G-VWXP75P120"};Yh.createRoot(document.getElementById("root")).render(h(M0.StrictMode,{children:h(i3,{firebaseConfig:A3,children:h(C.Suspense,{fallback:console.log("Suspense..."),children:h(P3,{})})})}));
