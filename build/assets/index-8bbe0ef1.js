function fS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var pS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function R_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var P_={exports:{}},jc={},A_={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),mS=Symbol.for("react.portal"),gS=Symbol.for("react.fragment"),yS=Symbol.for("react.strict_mode"),vS=Symbol.for("react.profiler"),_S=Symbol.for("react.provider"),wS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),CS=Symbol.for("react.suspense"),xS=Symbol.for("react.memo"),SS=Symbol.for("react.lazy"),Cg=Symbol.iterator;function kS(t){return t===null||typeof t!="object"?null:(t=Cg&&t[Cg]||t["@@iterator"],typeof t=="function"?t:null)}var O_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L_=Object.assign,D_={};function xs(t,e,n){this.props=t,this.context=e,this.refs=D_,this.updater=n||O_}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M_(){}M_.prototype=xs.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=D_,this.updater=n||O_}var zf=Bf.prototype=new M_;zf.constructor=Bf;L_(zf,xs.prototype);zf.isPureReactComponent=!0;var xg=Array.isArray,F_=Object.prototype.hasOwnProperty,Vf={current:null},U_={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F_.call(e,r)&&!U_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ha,type:t,key:s,ref:o,props:i,_owner:Vf.current}}function TS(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function IS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sg=/\/+/g;function zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IS(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case mS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zu(o,0):r,xg(i)?(n="",t!=null&&(n=t.replace(Sg,"$&/")+"/"),pl(i,e,n,"",function(c){return c})):i!=null&&(Hf(i)&&(i=TS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zu(s,a);o+=pl(s,e,n,l,i)}else if(l=kS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zu(s,a++),o+=pl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},ml={transition:null},bS={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Vf};Q.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=xs;Q.Fragment=gS;Q.Profiler=vS;Q.PureComponent=Bf;Q.StrictMode=yS;Q.Suspense=CS;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F_.call(e,l)&&!U_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ha,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:wS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_S,_context:t},t.Consumer=t};Q.createElement=$_;Q.createFactory=function(t){var e=$_.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:ES,render:t}};Q.isValidElement=Hf;Q.lazy=function(t){return{$$typeof:SS,_payload:{_status:-1,_result:t},_init:NS}};Q.memo=function(t,e){return{$$typeof:xS,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ut.current.useCallback(t,e)};Q.useContext=function(t){return ut.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ut.current.useEffect(t,e)};Q.useId=function(){return ut.current.useId()};Q.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ut.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Q.useRef=function(t){return ut.current.useRef(t)};Q.useState=function(t){return ut.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ut.current.useTransition()};Q.version="18.2.0";A_.exports=Q;var S=A_.exports;const j_=R_(S),Jh=fS({__proto__:null,default:j_},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RS=S,PS=Symbol.for("react.element"),AS=Symbol.for("react.fragment"),OS=Object.prototype.hasOwnProperty,LS=RS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DS={key:!0,ref:!0,__self:!0,__source:!0};function B_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OS.call(e,r)&&!DS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PS,type:t,key:s,ref:o,props:i,_owner:LS.current}}jc.Fragment=AS;jc.jsx=B_;jc.jsxs=B_;P_.exports=jc;var Wf=P_.exports;const wn=Wf.Fragment,h=Wf.jsx,w=Wf.jsxs;var Zh={},z_={exports:{}},Lt={},V_={exports:{}},H_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,k){var E=A.length;A.push(k);e:for(;0<E;){var F=E-1>>>1,O=A[F];if(0<i(O,k))A[F]=k,A[E]=O,E=F;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var k=A[0],E=A.pop();if(E!==k){A[0]=E;e:for(var F=0,O=A.length,z=O>>>1;F<z;){var W=2*(F+1)-1,he=A[W],pe=W+1,it=A[pe];if(0>i(he,E))pe<O&&0>i(it,he)?(A[F]=it,A[pe]=E,F=pe):(A[F]=he,A[W]=E,F=W);else if(pe<O&&0>i(it,E))A[F]=it,A[pe]=E,F=pe;else break e}}return k}function i(A,k){var E=A.sortIndex-k.sortIndex;return E!==0?E:A.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,g=!1,y=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var k=n(c);k!==null;){if(k.callback===null)r(c);else if(k.startTime<=A)r(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function C(A){if(_=!1,v(A),!y)if(n(l)!==null)y=!0,xt(I);else{var k=n(c);k!==null&&Te(C,k.startTime-A)}}function I(A,k){y=!1,_&&(_=!1,m(P),P=-1),g=!0;var E=f;try{for(v(k),d=n(l);d!==null&&(!(d.expirationTime>k)||A&&!Re());){var F=d.callback;if(typeof F=="function"){d.callback=null,f=d.priorityLevel;var O=F(d.expirationTime<=k);k=t.unstable_now(),typeof O=="function"?d.callback=O:d===n(l)&&r(l),v(k)}else r(l);d=n(l)}if(d!==null)var z=!0;else{var W=n(c);W!==null&&Te(C,W.startTime-k),z=!1}return z}finally{d=null,f=E,g=!1}}var R=!1,b=null,P=-1,j=5,U=-1;function Re(){return!(t.unstable_now()-U<j)}function D(){if(b!==null){var A=t.unstable_now();U=A;var k=!0;try{k=b(!0,A)}finally{k?$():(R=!1,b=null)}}else R=!1}var $;if(typeof p=="function")$=function(){p(D)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,X=q.port2;q.port1.onmessage=D,$=function(){X.postMessage(null)}}else $=function(){x(D,0)};function xt(A){b=A,R||(R=!0,$())}function Te(A,k){P=x(function(){A(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,xt(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var E=f;f=k;try{return A()}finally{f=E}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,k){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var E=f;f=A;try{return k()}finally{f=E}},t.unstable_scheduleCallback=function(A,k,E){var F=t.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?F+E:F):E=F,A){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=E+O,A={id:u++,callback:k,priorityLevel:A,startTime:E,expirationTime:O,sortIndex:-1},E>F?(A.sortIndex=E,e(c,A),n(l)===null&&A===n(c)&&(_?(m(P),P=-1):_=!0,Te(C,E-F))):(A.sortIndex=O,e(l,A),y||g||(y=!0,xt(I))),A},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(A){var k=f;return function(){var E=f;f=k;try{return A.apply(this,arguments)}finally{f=E}}}})(H_);V_.exports=H_;var MS=V_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=S,At=MS;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K_=new Set,To={};function wi(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(To[t]=e,t=0;t<e.length;t++)K_.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,FS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},Tg={};function US(t){return ed.call(Tg,t)?!0:ed.call(kg,t)?!1:FS.test(t)?Tg[t]=!0:(kg[t]=!0,!1)}function $S(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jS(t,e,n,r){if(e===null||typeof e>"u"||$S(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kf,Gf);Ye[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kf,Gf);Ye[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kf,Gf);Ye[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jS(e,n,i,r)&&(n=null),r||i===null?US(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Oi=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Y_=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Vu;function to(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Hu=!1;function Wu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function BS(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Li:return"Fragment";case Oi:return"Portal";case td:return"Profiler";case Yf:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q_:return(t.displayName||"Context")+".Consumer";case G_:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xf:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function zS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===Yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VS(t){var e=Q_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=VS(t))}function X_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Q_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J_(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function od(t,e){J_(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&ad(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ad(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(no(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function Z_(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function e0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?e0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,t0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HS=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){HS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function n0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=n0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var WS=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(t,e){if(e){if(WS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,qi=null,Yi=null;function Ag(t){if(t=pa(t)){if(typeof fd!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Wc(e),fd(t.stateNode,t.type,e))}}function i0(t){qi?Yi?Yi.push(t):Yi=[t]:qi=t}function s0(){if(qi){var t=qi,e=Yi;if(Yi=qi=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function o0(t,e){return t(e)}function a0(){}var Ku=!1;function l0(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return o0(t,e,n)}finally{Ku=!1,(qi!==null||Yi!==null)&&(a0(),s0())}}function No(t,e){var n=t.stateNode;if(n===null)return null;var r=Wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var pd=!1;if(Mn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){pd=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{pd=!1}function KS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var uo=!1,Ol=null,Ll=!1,md=null,GS={onError:function(t){uo=!0,Ol=t}};function qS(t,e,n,r,i,s,o,a,l){uo=!1,Ol=null,KS.apply(GS,arguments)}function YS(t,e,n,r,i,s,o,a,l){if(qS.apply(this,arguments),uo){if(uo){var c=Ol;uo=!1,Ol=null}else throw Error(T(198));Ll||(Ll=!0,md=c)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Og(t){if(Ei(t)!==t)throw Error(T(188))}function QS(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Og(i),t;if(s===r)return Og(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function u0(t){return t=QS(t),t!==null?h0(t):null}function h0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h0(t);if(e!==null)return e;t=t.sibling}return null}var d0=At.unstable_scheduleCallback,Lg=At.unstable_cancelCallback,XS=At.unstable_shouldYield,JS=At.unstable_requestPaint,Se=At.unstable_now,ZS=At.unstable_getCurrentPriorityLevel,Zf=At.unstable_ImmediatePriority,f0=At.unstable_UserBlockingPriority,Dl=At.unstable_NormalPriority,ek=At.unstable_LowPriority,p0=At.unstable_IdlePriority,Bc=null,gn=null;function tk(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:ik,nk=Math.log,rk=Math.LN2;function ik(t){return t>>>=0,t===0?32:31-(nk(t)/rk|0)|0}var Wa=64,Ka=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ro(a):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function sk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ok(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function m0(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function ak(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function g0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y0,tp,v0,_0,w0,yd=!1,Ga=[],dr=null,fr=null,pr=null,bo=new Map,Ro=new Map,nr=[],lk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ck(t,e,n,r,i){switch(e){case"focusin":return dr=zs(dr,t,e,n,r,i),!0;case"dragenter":return fr=zs(fr,t,e,n,r,i),!0;case"mouseover":return pr=zs(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,zs(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,zs(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function E0(t){var e=Hr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,w0(t.priority,function(){v0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=pa(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Mg(t,e,n){gl(t)&&n.delete(e)}function uk(){yd=!1,dr!==null&&gl(dr)&&(dr=null),fr!==null&&gl(fr)&&(fr=null),pr!==null&&gl(pr)&&(pr=null),bo.forEach(Mg),Ro.forEach(Mg)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,yd||(yd=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,uk)))}function Po(t){function e(i){return Vs(i,t)}if(0<Ga.length){Vs(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Vs(dr,t),fr!==null&&Vs(fr,t),pr!==null&&Vs(pr,t),bo.forEach(e),Ro.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&nr.shift()}var Qi=Vn.ReactCurrentBatchConfig,Fl=!0;function hk(t,e,n,r){var i=ne,s=Qi.transition;Qi.transition=null;try{ne=1,np(t,e,n,r)}finally{ne=i,Qi.transition=s}}function dk(t,e,n,r){var i=ne,s=Qi.transition;Qi.transition=null;try{ne=4,np(t,e,n,r)}finally{ne=i,Qi.transition=s}}function np(t,e,n,r){if(Fl){var i=vd(t,e,n,r);if(i===null)rh(t,e,r,Ul,n),Dg(t,r);else if(ck(i,t,e,n,r))r.stopPropagation();else if(Dg(t,r),e&4&&-1<lk.indexOf(t)){for(;i!==null;){var s=pa(i);if(s!==null&&y0(s),s=vd(t,e,n,r),s===null&&rh(t,e,r,Ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var Ul=null;function vd(t,e,n,r){if(Ul=null,t=Jf(r),t=Hr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZS()){case Zf:return 1;case f0:return 4;case Dl:case ek:return 16;case p0:return 536870912;default:return 16}default:return 16}}var lr=null,rp=null,yl=null;function x0(){if(yl)return yl;var t,e=rp,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Fg(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Fg,this.isPropagationStopped=Fg,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=Dt(Ss),fa=ye({},Ss,{view:0,detail:0}),fk=Dt(fa),qu,Yu,Hs,zc=ye({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(qu=t.screenX-Hs.screenX,Yu=t.screenY-Hs.screenY):Yu=qu=0,Hs=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Ug=Dt(zc),pk=ye({},zc,{dataTransfer:0}),mk=Dt(pk),gk=ye({},fa,{relatedTarget:0}),Qu=Dt(gk),yk=ye({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),vk=Dt(yk),_k=ye({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wk=Dt(_k),Ek=ye({},Ss,{data:0}),$g=Dt(Ek),Ck={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sk[t])?!!e[t]:!1}function sp(){return kk}var Tk=ye({},fa,{key:function(t){if(t.key){var e=Ck[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ik=Dt(Tk),Nk=ye({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=Dt(Nk),bk=ye({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),Rk=Dt(bk),Pk=ye({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ak=Dt(Pk),Ok=ye({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lk=Dt(Ok),Dk=[9,13,27,32],op=Mn&&"CompositionEvent"in window,ho=null;Mn&&"documentMode"in document&&(ho=document.documentMode);var Mk=Mn&&"TextEvent"in window&&!ho,S0=Mn&&(!op||ho&&8<ho&&11>=ho),Bg=String.fromCharCode(32),zg=!1;function k0(t,e){switch(t){case"keyup":return Dk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function Fk(t,e){switch(t){case"compositionend":return T0(e);case"keypress":return e.which!==32?null:(zg=!0,Bg);case"textInput":return t=e.data,t===Bg&&zg?null:t;default:return null}}function Uk(t,e){if(Di)return t==="compositionend"||!op&&k0(t,e)?(t=x0(),yl=rp=lr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return S0&&e.locale!=="ko"?null:e.data;default:return null}}var $k={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$k[t.type]:e==="textarea"}function I0(t,e,n,r){i0(r),e=$l(e,"onChange"),0<e.length&&(n=new ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,Ao=null;function jk(t){U0(t,0)}function Vc(t){var e=Ui(t);if(X_(e))return t}function Bk(t,e){if(t==="change")return e}var N0=!1;if(Mn){var Xu;if(Mn){var Ju="oninput"in document;if(!Ju){var Hg=document.createElement("div");Hg.setAttribute("oninput","return;"),Ju=typeof Hg.oninput=="function"}Xu=Ju}else Xu=!1;N0=Xu&&(!document.documentMode||9<document.documentMode)}function Wg(){fo&&(fo.detachEvent("onpropertychange",b0),Ao=fo=null)}function b0(t){if(t.propertyName==="value"&&Vc(Ao)){var e=[];I0(e,Ao,t,Jf(t)),l0(jk,e)}}function zk(t,e,n){t==="focusin"?(Wg(),fo=e,Ao=n,fo.attachEvent("onpropertychange",b0)):t==="focusout"&&Wg()}function Vk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(Ao)}function Hk(t,e){if(t==="click")return Vc(e)}function Wk(t,e){if(t==="input"||t==="change")return Vc(e)}function Kk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:Kk;function Oo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ed.call(e,i)||!on(t[i],e[i]))return!1}return!0}function Kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gg(t,e){var n=Kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kg(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gk(t){var e=P0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gg(n,s);var o=Gg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qk=Mn&&"documentMode"in document&&11>=document.documentMode,Mi=null,_d=null,po=null,wd=!1;function qg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||Mi==null||Mi!==Al(r)||(r=Mi,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Oo(po,r)||(po=r,r=$l(_d,"onSelect"),0<r.length&&(e=new ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mi)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Zu={},A0={};Mn&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Hc(t){if(Zu[t])return Zu[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A0)return Zu[t]=e[n];return t}var O0=Hc("animationend"),L0=Hc("animationiteration"),D0=Hc("animationstart"),M0=Hc("transitionend"),F0=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){F0.set(t,e),wi(e,[t])}for(var eh=0;eh<Yg.length;eh++){var th=Yg[eh],Yk=th.toLowerCase(),Qk=th[0].toUpperCase()+th.slice(1);br(Yk,"on"+Qk)}br(O0,"onAnimationEnd");br(L0,"onAnimationIteration");br(D0,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(M0,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Qg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YS(r,e,void 0,t),t.currentTarget=null}function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qg(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qg(i,a,c),s=l}}}if(Ll)throw t=md,Ll=!1,md=null,t}function ce(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var r=t+"__bubble";n.has(r)||($0(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),$0(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[Qa]){t[Qa]=!0,K_.forEach(function(n){n!=="selectionchange"&&(Xk.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,nh("selectionchange",!1,e))}}function $0(t,e,n,r){switch(C0(e)){case 1:var i=hk;break;case 4:i=dk;break;default:i=np}n=i.bind(null,e,n,t),i=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}l0(function(){var c=s,u=Jf(n),d=[];e:{var f=F0.get(t);if(f!==void 0){var g=ip,y=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":g=Ik;break;case"focusin":y="focus",g=Qu;break;case"focusout":y="blur",g=Qu;break;case"beforeblur":case"afterblur":g=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rk;break;case O0:case L0:case D0:g=vk;break;case M0:g=Ak;break;case"scroll":g=fk;break;case"wheel":g=Lk;break;case"copy":case"cut":case"paste":g=wk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jg}var _=(e&4)!==0,x=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=c,v;p!==null;){v=p;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,m!==null&&(C=No(p,m),C!=null&&_.push(Do(p,C,v)))),x)break;p=p.return}0<_.length&&(f=new g(f,y,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==dd&&(y=n.relatedTarget||n.fromElement)&&(Hr(y)||y[Fn]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Hr(y):null,y!==null&&(x=Ei(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=Ug,C="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=jg,C="onPointerLeave",m="onPointerEnter",p="pointer"),x=g==null?f:Ui(g),v=y==null?f:Ui(y),f=new _(C,p+"leave",g,n,u),f.target=x,f.relatedTarget=v,C=null,Hr(u)===c&&(_=new _(m,p+"enter",y,n,u),_.target=v,_.relatedTarget=x,C=_),x=C,g&&y)t:{for(_=g,m=y,p=0,v=_;v;v=Ri(v))p++;for(v=0,C=m;C;C=Ri(C))v++;for(;0<p-v;)_=Ri(_),p--;for(;0<v-p;)m=Ri(m),v--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=Ri(_),m=Ri(m)}_=null}else _=null;g!==null&&Xg(d,f,g,_,!1),y!==null&&x!==null&&Xg(d,x,y,_,!0)}}e:{if(f=c?Ui(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var I=Bk;else if(Vg(f))if(N0)I=Wk;else{I=Vk;var R=zk}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=Hk);if(I&&(I=I(t,c))){I0(d,I,n,u);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&ad(f,"number",f.value)}switch(R=c?Ui(c):window,t){case"focusin":(Vg(R)||R.contentEditable==="true")&&(Mi=R,_d=c,po=null);break;case"focusout":po=_d=Mi=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,qg(d,n,u);break;case"selectionchange":if(qk)break;case"keydown":case"keyup":qg(d,n,u)}var b;if(op)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Di?k0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(S0&&n.locale!=="ko"&&(Di||P!=="onCompositionStart"?P==="onCompositionEnd"&&Di&&(b=x0()):(lr=u,rp="value"in lr?lr.value:lr.textContent,Di=!0)),R=$l(c,P),0<R.length&&(P=new $g(P,t,null,n,u),d.push({event:P,listeners:R}),b?P.data=b:(b=T0(n),b!==null&&(P.data=b)))),(b=Mk?Fk(t,n):Uk(t,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(u=new $g("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}U0(d,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=No(t,n),s!=null&&r.unshift(Do(t,s,i)),s=No(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=No(n,s),l!=null&&o.unshift(Do(n,l,a))):i||(l=No(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jk=/\r\n?/g,Zk=/\u0000|\uFFFD/g;function Jg(t){return(typeof t=="string"?t:""+t).replace(Jk,`
`).replace(Zk,"")}function Xa(t,e,n){if(e=Jg(e),Jg(t)!==e&&n)throw Error(T(425))}function jl(){}var Ed=null,Cd=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,eT=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,tT=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(nT)}:Sd;function nT(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),dn="__reactFiber$"+ks,Mo="__reactProps$"+ks,Fn="__reactContainer$"+ks,kd="__reactEvents$"+ks,rT="__reactListeners$"+ks,iT="__reactHandles$"+ks;function Hr(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ey(t);t!==null;){if(n=t[dn])return n;t=ey(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[dn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Wc(t){return t[Mo]||null}var Td=[],$i=-1;function Rr(t){return{current:t}}function ue(t){0>$i||(t.current=Td[$i],Td[$i]=null,$i--)}function le(t,e){$i++,Td[$i]=t.current,t.current=e}var Tr={},nt=Rr(Tr),wt=Rr(!1),ii=Tr;function cs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Bl(){ue(wt),ue(nt)}function ty(t,e,n){if(nt.current!==Tr)throw Error(T(168));le(nt,e),le(wt,n)}function j0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,zS(t)||"Unknown",i));return ye({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ii=nt.current,le(nt,t),le(wt,wt.current),!0}function ny(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=j0(t,e,ii),r.__reactInternalMemoizedMergedChildContext=t,ue(wt),ue(nt),le(nt,t)):ue(wt),le(wt,n)}var kn=null,Kc=!1,sh=!1;function B0(t){kn===null?kn=[t]:kn.push(t)}function sT(t){Kc=!0,B0(t)}function Pr(){if(!sh&&kn!==null){sh=!0;var t=0,e=ne;try{var n=kn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Kc=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),d0(Zf,Pr),i}finally{ne=e,sh=!1}}return null}var ji=[],Bi=0,Vl=null,Hl=0,Ut=[],$t=0,si=null,Tn=1,In="";function Ur(t,e){ji[Bi++]=Hl,ji[Bi++]=Vl,Vl=t,Hl=e}function z0(t,e,n){Ut[$t++]=Tn,Ut[$t++]=In,Ut[$t++]=si,si=t;var r=Tn;t=In;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-nn(e)+i|n<<i|r,In=s+t}else Tn=1<<s|n<<i|r,In=t}function lp(t){t.return!==null&&(Ur(t,1),z0(t,1,0))}function cp(t){for(;t===Vl;)Vl=ji[--Bi],ji[Bi]=null,Hl=ji[--Bi],ji[Bi]=null;for(;t===si;)si=Ut[--$t],Ut[$t]=null,In=Ut[--$t],Ut[$t]=null,Tn=Ut[--$t],Ut[$t]=null}var Pt=null,Nt=null,de=!1,Zt=null;function V0(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Nt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Nt=null,!0):!1;default:return!1}}function Id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(de){var e=Nt;if(e){var n=e;if(!ry(t,e)){if(Id(t))throw Error(T(418));e=mr(n.nextSibling);var r=Pt;e&&ry(t,e)?V0(r,n):(t.flags=t.flags&-4097|2,de=!1,Pt=t)}}else{if(Id(t))throw Error(T(418));t.flags=t.flags&-4097|2,de=!1,Pt=t}}}function iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ja(t){if(t!==Pt)return!1;if(!de)return iy(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=Nt)){if(Id(t))throw H0(),Error(T(418));for(;e;)V0(t,e),e=mr(e.nextSibling)}if(iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Pt?mr(t.stateNode.nextSibling):null;return!0}function H0(){for(var t=Nt;t;)t=mr(t.nextSibling)}function us(){Nt=Pt=null,de=!1}function up(t){Zt===null?Zt=[t]:Zt.push(t)}var oT=Vn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wl=Rr(null),Kl=null,zi=null,hp=null;function dp(){hp=zi=Kl=null}function fp(t){var e=Wl.current;ue(Wl),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xi(t,e){Kl=t,hp=zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},zi===null){if(Kl===null)throw Error(T(308));zi=t,Kl.dependencies={lanes:0,firstContext:t}}else zi=zi.next=t;return e}var Wr=null;function pp(t){Wr===null?Wr=[t]:Wr.push(t)}function W0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,pp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}function sy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=ye({},d,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=d}}function oy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var G0=new W_.Component().refs;function Rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=vr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(rn(e,t,i,r),_l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=vr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(rn(e,t,i,r),_l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=vr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(rn(e,t,r,n),_l(e,t,r))}};function ay(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function q0(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Et(e)?ii:nt.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function Pd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G0,mp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Et(e)?ii:nt.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gc.enqueueReplaceState(i,i.state,null),Gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===G0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cy(t){var e=t._init;return e(t._payload)}function Y0(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=_r(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,C){return p===null||p.tag!==6?(p=dh(v,m.mode,C),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,C){var I=v.type;return I===Li?u(m,p,v.props.children,C,v.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===er&&cy(I)===p.type)?(C=i(p,v.props),C.ref=Ws(m,p,v),C.return=m,C):(C=kl(v.type,v.key,v.props,null,m.mode,C),C.ref=Ws(m,p,v),C.return=m,C)}function c(m,p,v,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=fh(v,m.mode,C),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function u(m,p,v,C,I){return p===null||p.tag!==7?(p=Zr(v,m.mode,C,I),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=dh(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case za:return v=kl(p.type,p.key,p.props,null,m.mode,v),v.ref=Ws(m,null,p),v.return=m,v;case Oi:return p=fh(p,m.mode,v),p.return=m,p;case er:var C=p._init;return d(m,C(p._payload),v)}if(no(p)||js(p))return p=Zr(p,m.mode,v,null),p.return=m,p;Za(m,p)}return null}function f(m,p,v,C){var I=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(m,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===I?l(m,p,v,C):null;case Oi:return v.key===I?c(m,p,v,C):null;case er:return I=v._init,f(m,p,I(v._payload),C)}if(no(v)||js(v))return I!==null?null:u(m,p,v,C,null);Za(m,v)}return null}function g(m,p,v,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(v)||null,a(p,m,""+C,I);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case za:return m=m.get(C.key===null?v:C.key)||null,l(p,m,C,I);case Oi:return m=m.get(C.key===null?v:C.key)||null,c(p,m,C,I);case er:var R=C._init;return g(m,p,v,R(C._payload),I)}if(no(C)||js(C))return m=m.get(v)||null,u(p,m,C,I,null);Za(p,C)}return null}function y(m,p,v,C){for(var I=null,R=null,b=p,P=p=0,j=null;b!==null&&P<v.length;P++){b.index>P?(j=b,b=null):j=b.sibling;var U=f(m,b,v[P],C);if(U===null){b===null&&(b=j);break}t&&b&&U.alternate===null&&e(m,b),p=s(U,p,P),R===null?I=U:R.sibling=U,R=U,b=j}if(P===v.length)return n(m,b),de&&Ur(m,P),I;if(b===null){for(;P<v.length;P++)b=d(m,v[P],C),b!==null&&(p=s(b,p,P),R===null?I=b:R.sibling=b,R=b);return de&&Ur(m,P),I}for(b=r(m,b);P<v.length;P++)j=g(b,m,P,v[P],C),j!==null&&(t&&j.alternate!==null&&b.delete(j.key===null?P:j.key),p=s(j,p,P),R===null?I=j:R.sibling=j,R=j);return t&&b.forEach(function(Re){return e(m,Re)}),de&&Ur(m,P),I}function _(m,p,v,C){var I=js(v);if(typeof I!="function")throw Error(T(150));if(v=I.call(v),v==null)throw Error(T(151));for(var R=I=null,b=p,P=p=0,j=null,U=v.next();b!==null&&!U.done;P++,U=v.next()){b.index>P?(j=b,b=null):j=b.sibling;var Re=f(m,b,U.value,C);if(Re===null){b===null&&(b=j);break}t&&b&&Re.alternate===null&&e(m,b),p=s(Re,p,P),R===null?I=Re:R.sibling=Re,R=Re,b=j}if(U.done)return n(m,b),de&&Ur(m,P),I;if(b===null){for(;!U.done;P++,U=v.next())U=d(m,U.value,C),U!==null&&(p=s(U,p,P),R===null?I=U:R.sibling=U,R=U);return de&&Ur(m,P),I}for(b=r(m,b);!U.done;P++,U=v.next())U=g(b,m,P,U.value,C),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?P:U.key),p=s(U,p,P),R===null?I=U:R.sibling=U,R=U);return t&&b.forEach(function(D){return e(m,D)}),de&&Ur(m,P),I}function x(m,p,v,C){if(typeof v=="object"&&v!==null&&v.type===Li&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var I=v.key,R=p;R!==null;){if(R.key===I){if(I=v.type,I===Li){if(R.tag===7){n(m,R.sibling),p=i(R,v.props.children),p.return=m,m=p;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===er&&cy(I)===R.type){n(m,R.sibling),p=i(R,v.props),p.ref=Ws(m,R,v),p.return=m,m=p;break e}n(m,R);break}else e(m,R);R=R.sibling}v.type===Li?(p=Zr(v.props.children,m.mode,C,v.key),p.return=m,m=p):(C=kl(v.type,v.key,v.props,null,m.mode,C),C.ref=Ws(m,p,v),C.return=m,m=C)}return o(m);case Oi:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=fh(v,m.mode,C),p.return=m,m=p}return o(m);case er:return R=v._init,x(m,p,R(v._payload),C)}if(no(v))return y(m,p,v,C);if(js(v))return _(m,p,v,C);Za(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=dh(v,m.mode,C),p.return=m,m=p),o(m)):n(m,p)}return x}var hs=Y0(!0),Q0=Y0(!1),ma={},yn=Rr(ma),Fo=Rr(ma),Uo=Rr(ma);function Kr(t){if(t===ma)throw Error(T(174));return t}function gp(t,e){switch(le(Uo,e),le(Fo,t),le(yn,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cd(e,t)}ue(yn),le(yn,e)}function ds(){ue(yn),ue(Fo),ue(Uo)}function X0(t){Kr(Uo.current);var e=Kr(yn.current),n=cd(e,t.type);e!==n&&(le(Fo,t),le(yn,n))}function yp(t){Fo.current===t&&(ue(yn),ue(Fo))}var me=Rr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function vp(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var wl=Vn.ReactCurrentDispatcher,ah=Vn.ReactCurrentBatchConfig,oi=0,ge=null,Oe=null,Fe=null,Yl=!1,mo=!1,$o=0,aT=0;function Xe(){throw Error(T(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,i,s){if(oi=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?hT:dT,t=n(r,i),mo){s=0;do{if(mo=!1,$o=0,25<=s)throw Error(T(301));s+=1,Fe=Oe=null,e.updateQueue=null,wl.current=fT,t=n(r,i)}while(mo)}if(wl.current=Ql,e=Oe!==null&&Oe.next!==null,oi=0,Fe=Oe=ge=null,Yl=!1,e)throw Error(T(300));return t}function Ep(){var t=$o!==0;return $o=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Wt(){if(Oe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?ge.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(T(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function jo(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((oi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ge.lanes|=u,ai|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=Wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function J0(){}function Z0(t,e){var n=ge,r=Wt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Cp(nw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Bo(9,tw.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(T(349));oi&30||ew(n,e,i)}return i}function ew(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tw(t,e,n,r){e.value=n,e.getSnapshot=r,rw(e)&&iw(t)}function nw(t,e,n){return n(function(){rw(e)&&iw(t)})}function rw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function iw(t){var e=Un(t,1);e!==null&&rn(e,t,1,-1)}function uy(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,ge,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sw(){return Wt().memoizedState}function El(t,e,n,r){var i=hn();ge.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&_p(r,o.deps)){i.memoizedState=Bo(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function hy(t,e){return El(8390656,8,t,e)}function Cp(t,e){return qc(2048,8,t,e)}function ow(t,e){return qc(4,2,t,e)}function aw(t,e){return qc(4,4,t,e)}function lw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cw(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,lw.bind(null,e,t),n)}function xp(){}function uw(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hw(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dw(t,e,n){return oi&21?(on(n,e)||(n=m0(),ge.lanes|=n,ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function lT(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{ne=n,ah.transition=r}}function fw(){return Wt().memoizedState}function cT(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pw(t))mw(e,n);else if(n=W0(t,e,n,r),n!==null){var i=lt();rn(n,t,r,i),gw(n,e,r)}}function uT(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pw(t))mw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,pp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=W0(t,e,i,r),n!==null&&(i=lt(),rn(n,t,r,i),gw(n,e,r))}}function pw(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function mw(t,e){mo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}var Ql={readContext:Ht,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},hT={readContext:Ht,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,lw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cT.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:uy,useDebugValue:xp,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=uy(!1),e=t[0];return t=lT.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=hn();if(de){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Be===null)throw Error(T(349));oi&30||ew(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hy(nw.bind(null,r,s,t),[t]),r.flags|=2048,Bo(9,tw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Be.identifierPrefix;if(de){var n=In,r=Tn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dT={readContext:Ht,useCallback:uw,useContext:Ht,useEffect:Cp,useImperativeHandle:cw,useInsertionEffect:ow,useLayoutEffect:aw,useMemo:hw,useReducer:lh,useRef:sw,useState:function(){return lh(jo)},useDebugValue:xp,useDeferredValue:function(t){var e=Wt();return dw(e,Oe.memoizedState,t)},useTransition:function(){var t=lh(jo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:Z0,useId:fw,unstable_isNewReconciler:!1},fT={readContext:Ht,useCallback:uw,useContext:Ht,useEffect:Cp,useImperativeHandle:cw,useInsertionEffect:ow,useLayoutEffect:aw,useMemo:hw,useReducer:ch,useRef:sw,useState:function(){return ch(jo)},useDebugValue:xp,useDeferredValue:function(t){var e=Wt();return Oe===null?e.memoizedState=t:dw(e,Oe.memoizedState,t)},useTransition:function(){var t=ch(jo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:Z0,useId:fw,unstable_isNewReconciler:!1};function fs(t,e){try{var n="",r=e;do n+=BS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pT=typeof WeakMap=="function"?WeakMap:Map;function yw(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,zd=r),Ad(t,e)},n}function vw(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ad(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NT.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var mT=Vn.ReactCurrentOwner,yt=!1;function ot(t,e,n,r){e.child=t===null?Q0(e,null,n,r):hs(e,t.child,n,r)}function my(t,e,n,r,i){n=n.render;var s=e.ref;return Xi(e,i),r=wp(t,e,n,r,s,i),n=Ep(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(de&&n&&lp(e),e.flags|=1,ot(t,e,r,i),e.child)}function gy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,$n(t,e,i)}return Od(t,e,n,r,i)}function ww(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Hi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Hi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Hi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Hi,kt),kt|=r;return ot(t,e,i,n),e.child}function Ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,r,i){var s=Et(n)?ii:nt.current;return s=cs(e,s),Xi(e,i),n=wp(t,e,n,r,s,i),r=Ep(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(de&&r&&lp(e),e.flags|=1,ot(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(Et(n)){var s=!0;zl(e)}else s=!1;if(Xi(e,i),e.stateNode===null)Cl(t,e),q0(e,n,r),Pd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=Et(n)?ii:nt.current,c=cs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ly(e,o,r,c),tr=!1;var f=e.memoizedState;o.state=f,Gl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||wt.current||tr?(typeof u=="function"&&(Rd(e,n,u,r),l=e.memoizedState),(a=tr||ay(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=Et(n)?ii:nt.current,l=cs(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ly(e,o,r,l),tr=!1,f=e.memoizedState,o.state=f,Gl(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||wt.current||tr?(typeof g=="function"&&(Rd(e,n,g,r),y=e.memoizedState),(c=tr||ay(e,n,c,r,f,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ld(t,e,n,r,s,i)}function Ld(t,e,n,r,i,s){Ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ny(e,n,!1),$n(t,e,s);r=e.stateNode,mT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&ny(e,n,!0),e.child}function Cw(t){var e=t.stateNode;e.pendingContext?ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ty(t,e.context,!1),gp(t,e.containerInfo)}function vy(t,e,n,r,i){return us(),up(i),e.flags|=256,ot(t,e,n,r),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function xw(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(me,i&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=Dd,t):Sp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dd,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sp(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&up(r),hs(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uh(Error(T(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xc({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Md(o),e.memoizedState=Dd,s);if(!(e.mode&1))return el(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=uh(s,r,void 0),el(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),rn(r,t,i,-1))}return Rp(),r=uh(Error(T(421))),el(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=mr(i.nextSibling),Pt=e,de=!0,Zt=null,t!==null&&(Ut[$t++]=Tn,Ut[$t++]=In,Ut[$t++]=si,Tn=t.id,In=t.overflow,si=e),e=Sp(e,r.children),e.flags|=4096,e)}function _y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bd(t.return,e,n)}function hh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,n,e);else if(t.tag===19)_y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hh(e,!0,n,null,s);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yT(t,e,n){switch(e.tag){case 3:Cw(e),us();break;case 5:X0(e);break;case 1:Et(e.type)&&zl(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?xw(t,e,n):(le(me,me.current&1),t=$n(t,e,n),t!==null?t.sibling:null);le(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,ww(t,e,n)}return $n(t,e,n)}var kw,Fd,Tw,Iw;kw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};Tw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(yn.current);var s=null;switch(n){case"input":i=sd(t,i),r=sd(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=ld(t,i),r=ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}ud(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Iw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vT(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return Et(e.type)&&Bl(),Je(e),null;case 3:return r=e.stateNode,ds(),ue(wt),ue(nt),vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Wd(Zt),Zt=null))),Fd(t,e),Je(e),null;case 5:yp(e);var i=Kr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Tw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Je(e),null}if(t=Kr(yn.current),Ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)ce(io[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Ng(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Rg(r,s),ce("invalid",r)}ud(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,a,t),i=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Va(r),bg(r,s,!0);break;case"textarea":Va(r),Pg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=e0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Mo]=r,kw(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)ce(io[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Ng(t,r),i=sd(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Rg(t,r),i=ld(t,r),ce("invalid",t);break;default:i=r}ud(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&t0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(t,l):typeof l=="number"&&Io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&qf(t,s,l,o))}switch(n){case"input":Va(t),bg(t,r,!1);break;case"textarea":Va(t),Pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)Iw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Kr(Uo.current),Kr(yn.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return Je(e),null;case 13:if(ue(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Nt!==null&&e.mode&1&&!(e.flags&128))H0(),us(),e.flags|=98560,s=!1;else if(s=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[dn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Zt!==null&&(Wd(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Le===0&&(Le=3):Rp())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ds(),Fd(t,e),t===null&&Lo(e.stateNode.containerInfo),Je(e),null;case 10:return fp(e.type._context),Je(e),null;case 17:return Et(e.type)&&Bl(),Je(e),null;case 19:if(ue(me),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>ps&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Je(e),null}else 2*Se()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,le(me,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return bp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function _T(t,e){switch(cp(e),e.tag){case 1:return Et(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),ue(wt),ue(nt),vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(ue(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(me),null;case 4:return ds(),null;case 10:return fp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var tl=!1,Ze=!1,wT=typeof WeakSet=="function"?WeakSet:Set,M=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Ud(t,e,n){try{n()}catch(r){ve(t,e,r)}}var wy=!1;function ET(t,e){if(Ed=Fl,t=P0(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},Fl=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,x=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Xt(e.type,_),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(C){ve(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=wy,wy=!1,y}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ud(e,n,s)}i=i.next}while(i!==r)}}function Yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nw(t){var e=t.alternate;e!==null&&(t.alternate=null,Nw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Mo],delete e[kd],delete e[rT],delete e[iT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bw(t){return t.tag===5||t.tag===3||t.tag===4}function Ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}function Bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}var He=null,Jt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)Rw(t,e,n),n=n.sibling}function Rw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:Ze||Vi(n,e);case 6:var r=He,i=Jt;He=null,Jn(t,e,n),He=r,Jt=i,He!==null&&(Jt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Jt?(t=He,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Po(t)):ih(He,n.stateNode));break;case 4:r=He,i=Jt,He=n.stateNode.containerInfo,Jt=!0,Jn(t,e,n),He=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!Ze&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Jn(t,e,n),Ze=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function Cy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wT),e.forEach(function(r){var i=RT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Jt=!1;break e;case 3:He=a.stateNode.containerInfo,Jt=!0;break e;case 4:He=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(He===null)throw Error(T(160));Rw(s,o,i),He=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pw(e,t),e=e.sibling}function Pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),un(t),r&4){try{go(3,t,t.return),Yc(3,t)}catch(_){ve(t,t.return,_)}try{go(5,t,t.return)}catch(_){ve(t,t.return,_)}}break;case 1:Qt(e,t),un(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Qt(e,t),un(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{Io(i,"")}catch(_){ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&J_(i,s),hd(a,o);var c=hd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?r0(i,d):u==="dangerouslySetInnerHTML"?t0(i,d):u==="children"?Io(i,d):qf(i,u,d,c)}switch(a){case"input":od(i,s);break;case"textarea":Z_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Gi(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mo]=s}catch(_){ve(t,t.return,_)}}break;case 6:if(Qt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ve(t,t.return,_)}}break;case 3:if(Qt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(_){ve(t,t.return,_)}break;case 4:Qt(e,t),un(t);break;case 13:Qt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=Se())),r&4&&Cy(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||u,Qt(e,t),Ze=c):Qt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(M=t,u=t.child;u!==null;){for(d=M=u;M!==null;){switch(f=M,g=f.child,f.tag){case 0:case 11:case 14:case 15:go(4,f,f.return);break;case 1:Vi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ve(r,n,_)}}break;case 5:Vi(f,f.return);break;case 22:if(f.memoizedState!==null){Sy(d);continue}}g!==null?(g.return=f,M=g):Sy(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=n0("display",o))}catch(_){ve(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(e,t),un(t),r&4&&Cy(t);break;case 21:break;default:Qt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bw(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var s=Ey(t);Bd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ey(t);jd(t,a,o);break;default:throw Error(T(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CT(t,e,n){M=t,Aw(t)}function Aw(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=tl;var c=Ze;if(tl=o,(Ze=l)&&!c)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?ky(i):l!==null?(l.return=o,M=l):ky(i);for(;s!==null;)M=s,Aw(s),s=s.sibling;M=i,tl=a,Ze=c}xy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):xy(t)}}function xy(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&oy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}oy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Po(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ze||e.flags&512&&$d(e)}catch(f){ve(e,e.return,f)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Sy(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function ky(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yc(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{$d(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{$d(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var xT=Math.ceil,Xl=Vn.ReactCurrentDispatcher,kp=Vn.ReactCurrentOwner,Vt=Vn.ReactCurrentBatchConfig,Z=0,Be=null,Ie=null,Ge=0,kt=0,Hi=Rr(0),Le=0,zo=null,ai=0,Qc=0,Tp=0,yo=null,pt=null,Ip=0,ps=1/0,Sn=null,Jl=!1,zd=null,yr=null,nl=!1,cr=null,Zl=0,vo=0,Vd=null,xl=-1,Sl=0;function lt(){return Z&6?Se():xl!==-1?xl:xl=Se()}function vr(t){return t.mode&1?Z&2&&Ge!==0?Ge&-Ge:oT.transition!==null?(Sl===0&&(Sl=m0()),Sl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t):1}function rn(t,e,n,r){if(50<vo)throw vo=0,Vd=null,Error(T(185));da(t,n,r),(!(Z&2)||t!==Be)&&(t===Be&&(!(Z&2)&&(Qc|=n),Le===4&&rr(t,Ge)),Ct(t,r),n===1&&Z===0&&!(e.mode&1)&&(ps=Se()+500,Kc&&Pr()))}function Ct(t,e){var n=t.callbackNode;ok(t,e);var r=Ml(t,t===Be?Ge:0);if(r===0)n!==null&&Lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lg(n),e===1)t.tag===0?sT(Ty.bind(null,t)):B0(Ty.bind(null,t)),tT(function(){!(Z&6)&&Pr()}),n=null;else{switch(g0(r)){case 1:n=Zf;break;case 4:n=f0;break;case 16:n=Dl;break;case 536870912:n=p0;break;default:n=Dl}n=jw(n,Ow.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ow(t,e){if(xl=-1,Sl=0,Z&6)throw Error(T(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var r=Ml(t,t===Be?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=Z;Z|=2;var s=Dw();(Be!==t||Ge!==e)&&(Sn=null,ps=Se()+500,Jr(t,e));do try{TT();break}catch(a){Lw(t,a)}while(1);dp(),Xl.current=s,Z=i,Ie!==null?e=0:(Be=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(i=gd(t),i!==0&&(r=i,e=Hd(t,i))),e===1)throw n=zo,Jr(t,0),rr(t,r),Ct(t,Se()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ST(i)&&(e=ec(t,r),e===2&&(s=gd(t),s!==0&&(r=s,e=Hd(t,s))),e===1))throw n=zo,Jr(t,0),rr(t,r),Ct(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:$r(t,pt,Sn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Ip+500-Se(),10<e)){if(Ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sd($r.bind(null,t,pt,Sn),e);break}$r(t,pt,Sn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xT(r/1960))-r,10<r){t.timeoutHandle=Sd($r.bind(null,t,pt,Sn),r);break}$r(t,pt,Sn);break;case 5:$r(t,pt,Sn);break;default:throw Error(T(329))}}}return Ct(t,Se()),t.callbackNode===n?Ow.bind(null,t):null}function Hd(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=pt,pt=n,e!==null&&Wd(e)),t}function Wd(t){pt===null?pt=t:pt.push.apply(pt,t)}function ST(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Tp,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Ty(t){if(Z&6)throw Error(T(327));Ji();var e=Ml(t,0);if(!(e&1))return Ct(t,Se()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=gd(t);r!==0&&(e=r,n=Hd(t,r))}if(n===1)throw n=zo,Jr(t,0),rr(t,e),Ct(t,Se()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,pt,Sn),Ct(t,Se()),null}function Np(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(ps=Se()+500,Kc&&Pr())}}function li(t){cr!==null&&cr.tag===0&&!(Z&6)&&Ji();var e=Z;Z|=1;var n=Vt.transition,r=ne;try{if(Vt.transition=null,ne=1,t)return t()}finally{ne=r,Vt.transition=n,Z=e,!(Z&6)&&Pr()}}function bp(){kt=Hi.current,ue(Hi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eT(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:ds(),ue(wt),ue(nt),vp();break;case 5:yp(r);break;case 4:ds();break;case 13:ue(me);break;case 19:ue(me);break;case 10:fp(r.type._context);break;case 22:case 23:bp()}n=n.return}if(Be=t,Ie=t=_r(t.current,null),Ge=kt=e,Le=0,zo=null,Tp=Qc=ai=0,pt=yo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function Lw(t,e){do{var n=Ie;try{if(dp(),wl.current=Ql,Yl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yl=!1}if(oi=0,Fe=Oe=ge=null,mo=!1,$o=0,kp.current=null,n===null||n.return===null){Le=1,zo=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=fy(o);if(g!==null){g.flags&=-257,py(g,o,a,s,e),g.mode&1&&dy(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){dy(s,c,e),Rp();break e}l=Error(T(426))}}else if(de&&a.mode&1){var x=fy(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),py(x,o,a,s,e),up(fs(l,a));break e}}s=l=fs(l,a),Le!==4&&(Le=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=yw(s,l,e);sy(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=vw(s,a,e);sy(s,C);break e}}s=s.return}while(s!==null)}Fw(n)}catch(I){e=I,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Dw(){var t=Xl.current;return Xl.current=Ql,t===null?Ql:t}function Rp(){(Le===0||Le===3||Le===2)&&(Le=4),Be===null||!(ai&268435455)&&!(Qc&268435455)||rr(Be,Ge)}function ec(t,e){var n=Z;Z|=2;var r=Dw();(Be!==t||Ge!==e)&&(Sn=null,Jr(t,e));do try{kT();break}catch(i){Lw(t,i)}while(1);if(dp(),Z=n,Xl.current=r,Ie!==null)throw Error(T(261));return Be=null,Ge=0,Le}function kT(){for(;Ie!==null;)Mw(Ie)}function TT(){for(;Ie!==null&&!XS();)Mw(Ie)}function Mw(t){var e=$w(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?Fw(t):Ie=e,kp.current=null}function Fw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_T(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ie=null;return}}else if(n=vT(n,e,kt),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Le===0&&(Le=5)}function $r(t,e,n){var r=ne,i=Vt.transition;try{Vt.transition=null,ne=1,IT(t,e,n,r)}finally{Vt.transition=i,ne=r}return null}function IT(t,e,n,r){do Ji();while(cr!==null);if(Z&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ak(t,s),t===Be&&(Ie=Be=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,jw(Dl,function(){return Ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=ne;ne=1;var a=Z;Z|=4,kp.current=null,ET(t,n),Pw(n,t),Gk(Cd),Fl=!!Ed,Cd=Ed=null,t.current=n,CT(n),JS(),Z=a,ne=o,Vt.transition=s}else t.current=n;if(nl&&(nl=!1,cr=t,Zl=i),s=t.pendingLanes,s===0&&(yr=null),tk(n.stateNode),Ct(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=zd,zd=null,t;return Zl&1&&t.tag!==0&&Ji(),s=t.pendingLanes,s&1?t===Vd?vo++:(vo=0,Vd=t):vo=0,Pr(),null}function Ji(){if(cr!==null){var t=g0(Zl),e=Vt.transition,n=ne;try{if(Vt.transition=null,ne=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Zl=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:go(8,u,s)}var d=u.child;if(d!==null)d.return=u,M=d;else for(;M!==null;){u=M;var f=u.sibling,g=u.return;if(Nw(u),u===c){M=null;break}if(f!==null){f.return=g,M=f;break}M=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yc(9,a)}}catch(I){ve(a,a.return,I)}if(a===o){M=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,M=C;break e}M=a.return}}if(Z=i,Pr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Bc,t)}catch{}r=!0}return r}finally{ne=n,Vt.transition=e}}return!1}function Iy(t,e,n){e=fs(n,e),e=yw(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(da(t,1,e),Ct(t,e))}function ve(t,e,n){if(t.tag===3)Iy(t,t,n);else for(;e!==null;){if(e.tag===3){Iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=fs(n,t),t=vw(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(da(e,1,t),Ct(e,t));break}}e=e.return}}function NT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>Se()-Ip?Jr(t,0):Tp|=n),Ct(t,e)}function Uw(t,e){e===0&&(t.mode&1?(e=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):e=1);var n=lt();t=Un(t,e),t!==null&&(da(t,e,n),Ct(t,n))}function bT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uw(t,n)}function RT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Uw(t,n)}var $w;$w=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,yT(t,e,n);yt=!!(t.flags&131072)}else yt=!1,de&&e.flags&1048576&&z0(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=cs(e,nt.current);Xi(e,n),i=wp(null,e,r,t,i,n);var s=Ep();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mp(e),i.updater=Gc,e.stateNode=i,i._reactInternals=e,Pd(e,r,t,n),e=Ld(null,e,r,!0,s,n)):(e.tag=0,de&&s&&lp(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AT(r),t=Xt(r,t),i){case 0:e=Od(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=gy(null,e,r,Xt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),yy(t,e,r,i,n);case 3:e:{if(Cw(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K0(t,e),Gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(T(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(T(424)),e),e=vy(t,e,r,n,i);break e}else for(Nt=mr(e.stateNode.containerInfo.firstChild),Pt=e,de=!0,Zt=null,n=Q0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=$n(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return X0(e),t===null&&Nd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xd(r,i)?o=null:s!==null&&xd(r,s)&&(e.flags|=32),Ew(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return xw(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hs(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),my(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Wl,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!wt.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=On(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xi(e,n),i=Ht(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),gy(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Cl(t,e),e.tag=1,Et(r)?(t=!0,zl(e)):t=!1,Xi(e,n),q0(e,r,i),Pd(e,r,i,n),Ld(null,e,r,!0,t,n);case 19:return Sw(t,e,n);case 22:return ww(t,e,n)}throw Error(T(156,e.tag))};function jw(t,e){return d0(t,e)}function PT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new PT(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AT(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Xf)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Li:return Zr(n.children,i,s,e);case Yf:o=8,i|=8;break;case td:return t=Bt(12,n,e,i|2),t.elementType=td,t.lanes=s,t;case nd:return t=Bt(13,n,e,i),t.elementType=nd,t.lanes=s,t;case rd:return t=Bt(19,n,e,i),t.elementType=rd,t.lanes=s,t;case Y_:return Xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G_:o=10;break e;case q_:o=9;break e;case Qf:o=11;break e;case Xf:o=14;break e;case er:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Xc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=Y_,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,r,i,s,o,a,l){return t=new OT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function LT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bw(t){if(!t)return Tr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Et(n))return j0(t,n,e)}return e}function zw(t,e,n,r,i,s,o,a,l){return t=Ap(n,r,!0,t,i,s,o,a,l),t.context=Bw(null),n=t.current,r=lt(),i=vr(n),s=On(r,i),s.callback=e??null,gr(n,s,i),t.current.lanes=i,da(t,i,r),Ct(t,r),t}function Jc(t,e,n,r){var i=e.current,s=lt(),o=vr(i);return n=Bw(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(rn(t,i,o,s),_l(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ny(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Op(t,e){Ny(t,e),(t=t.alternate)&&Ny(t,e)}function DT(){return null}var Vw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lp(t){this._internalRoot=t}Zc.prototype.render=Lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Jc(t,e,null,null)};Zc.prototype.unmount=Lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){Jc(null,t,null,null)}),e[Fn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=_0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&E0(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function by(){}function MT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=tc(o);s.call(c)}}var o=zw(e,r,t,0,null,!1,!1,"",by);return t._reactRootContainer=o,t[Fn]=o.current,Lo(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=tc(l);a.call(c)}}var l=Ap(t,0,!1,null,null,!1,!1,"",by);return t._reactRootContainer=l,t[Fn]=l.current,Lo(t.nodeType===8?t.parentNode:t),li(function(){Jc(e,l,n,r)}),l}function tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tc(o);a.call(l)}}Jc(e,o,t,i)}else o=MT(n,e,t,i,r);return tc(o)}y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(ep(e,n|1),Ct(e,Se()),!(Z&6)&&(ps=Se()+500,Pr()))}break;case 13:li(function(){var r=Un(t,1);if(r!==null){var i=lt();rn(r,t,1,i)}}),Op(t,1)}};tp=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=lt();rn(e,t,134217728,n)}Op(t,134217728)}};v0=function(t){if(t.tag===13){var e=vr(t),n=Un(t,e);if(n!==null){var r=lt();rn(n,t,e,r)}Op(t,e)}};_0=function(){return ne};w0=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};fd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wc(r);if(!i)throw Error(T(90));X_(r),od(r,i)}}}break;case"textarea":Z_(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};o0=Np;a0=li;var FT={usingClientEntryPoint:!1,Events:[pa,Ui,Wc,i0,s0,Np]},Gs={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},UT={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=u0(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||DT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Bc=rl.inject(UT),gn=rl}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(T(200));return LT(t,e,null,n)};Lt.createRoot=function(t,e){if(!Dp(t))throw Error(T(299));var n=!1,r="",i=Vw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Lo(t.nodeType===8?t.parentNode:t),new Lp(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=u0(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return li(t)};Lt.hydrate=function(t,e,n){if(!eu(e))throw Error(T(200));return tu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zw(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zc(e)};Lt.render=function(t,e,n){if(!eu(e))throw Error(T(200));return tu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!eu(t))throw Error(T(40));return t._reactRootContainer?(li(function(){tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Np;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!eu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return tu(t,e,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function Hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hw)}catch(t){console.error(t)}}Hw(),z_.exports=Lt;var $T=z_.exports,Ry=$T;Zh.createRoot=Ry.createRoot,Zh.hydrateRoot=Ry.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}var ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ur||(ur={}));const Py="popstate";function jT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Ci(i.location.hash.substr(1));return Kd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:nc(s))}function r(i,s){nu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return zT(e,n,r,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BT(){return Math.random().toString(36).substr(2,8)}function Ay(t,e){return{usr:t.state,key:t.key,idx:e}}function Kd(t,e,n,r){return n===void 0&&(n=null),Vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||r||BT()})}function nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ur.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Vo({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=ur.Pop;let x=u(),m=x==null?null:x-c;c=x,l&&l({action:a,location:_.location,delta:m})}function f(x,m){a=ur.Push;let p=Kd(_.location,x,m);n&&n(p,x),c=u()+1;let v=Ay(p,c),C=_.createHref(p);try{o.pushState(v,"",C)}catch{i.location.assign(C)}s&&l&&l({action:a,location:_.location,delta:1})}function g(x,m){a=ur.Replace;let p=Kd(_.location,x,m);n&&n(p,x),c=u();let v=Ay(p,c),C=_.createHref(p);o.replaceState(v,"",C),s&&l&&l({action:a,location:_.location,delta:0})}function y(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:nc(x);return De(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Py,d),l=x,()=>{i.removeEventListener(Py,d),l=null}},createHref(x){return e(i,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(x){return o.go(x)}};return _}var Oy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oy||(Oy={}));function VT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ci(e):e,i=Mp(r.pathname||"/",n);if(i==null)return null;let s=Ww(t);HT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ZT(s[a],nI(i));return o}function Ww(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=wr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ww(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:XT(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Kw(s.path))i(s,o,l)}),e}function Kw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Kw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function HT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WT=/^:\w+$/,KT=3,GT=2,qT=1,YT=10,QT=-2,Ly=t=>t==="*";function XT(t,e){let n=t.split("/"),r=n.length;return n.some(Ly)&&(r+=QT),e&&(r+=GT),n.filter(i=>!Ly(i)).reduce((i,s)=>i+(WT.test(s)?KT:s===""?qT:YT),r)}function JT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ZT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=eI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;s.push({params:r,pathname:wr([i,u.pathname]),pathnameBase:oI(wr([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=wr([i,u.pathnameBase]))}return s}function eI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=rI(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function tI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nI(t){try{return decodeURI(t)}catch(e){return nu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rI(t,e){try{return decodeURIComponent(t)}catch(n){return nu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Mp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function iI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ci(t):t;return{pathname:n?n.startsWith("/")?n:sI(n,e):e,search:aI(r),hash:lI(i)}}function sI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ph(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ci(t):(i=Vo({},t),De(!i.pathname||!i.pathname.includes("?"),ph("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),ph("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),ph("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=iI(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const wr=t=>t.join("/").replace(/\/\/+/g,"/"),oI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Yw=["post","put","patch","delete"];new Set(Yw);const uI=["get",...Yw];new Set(uI);/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const dI=typeof Object.is=="function"?Object.is:hI,{useState:fI,useEffect:pI,useLayoutEffect:mI,useDebugValue:gI}=Jh;function yI(t,e,n){const r=e(),[{inst:i},s]=fI({inst:{value:r,getSnapshot:e}});return mI(()=>{i.value=r,i.getSnapshot=e,mh(i)&&s({inst:i})},[t,r,e]),pI(()=>(mh(i)&&s({inst:i}),t(()=>{mh(i)&&s({inst:i})})),[t]),gI(r),r}function mh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!dI(n,r)}catch{return!0}}function vI(t,e,n){return e()}const _I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wI=!_I,EI=wI?vI:yI;"useSyncExternalStore"in Jh&&(t=>t.useSyncExternalStore)(Jh);const Qw=S.createContext(null),Fp=S.createContext(null),Ts=S.createContext(null),ru=S.createContext(null),xi=S.createContext({outlet:null,matches:[]}),Xw=S.createContext(null);function Gd(){return Gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gd.apply(this,arguments)}function CI(t,e){let{relative:n}=e===void 0?{}:e;ga()||De(!1);let{basename:r,navigator:i}=S.useContext(Ts),{hash:s,pathname:o,search:a}=Up(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:wr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ga(){return S.useContext(ru)!=null}function ya(){return ga()||De(!1),S.useContext(ru).location}function iu(){ga()||De(!1);let{basename:t,navigator:e}=S.useContext(Ts),{matches:n}=S.useContext(xi),{pathname:r}=ya(),i=JSON.stringify(Gw(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=qw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:wr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function su(){let{matches:t}=S.useContext(xi),e=t[t.length-1];return e?e.params:{}}function Up(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(xi),{pathname:i}=ya(),s=JSON.stringify(Gw(r).map(o=>o.pathnameBase));return S.useMemo(()=>qw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function xI(t,e){ga()||De(!1);let{navigator:n}=S.useContext(Ts),r=S.useContext(Fp),{matches:i}=S.useContext(xi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ya(),c;if(e){var u;let _=typeof e=="string"?Ci(e):e;a==="/"||(u=_.pathname)!=null&&u.startsWith(a)||De(!1),c=_}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=VT(t,{pathname:f}),y=II(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:wr([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:wr([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&y?S.createElement(ru.Provider,{value:{location:Gd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ur.Pop}},y):y}function SI(){let t=PI(),e=cI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class kI extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(xi.Provider,{value:this.props.routeContext},S.createElement(Xw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TI(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Qw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(xi.Provider,{value:e},r)}function II(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||De(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=S.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=S.createElement(SI,null));let u=e.concat(r.slice(0,a+1)),d=()=>{let f=s;return l?f=c:o.route.Component?f=S.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),S.createElement(TI,{match:o,routeContext:{outlet:s,matches:u},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?S.createElement(kI,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var Dy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Dy||(Dy={}));var rc;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(rc||(rc={}));function NI(t){let e=S.useContext(Fp);return e||De(!1),e}function bI(t){let e=S.useContext(xi);return e||De(!1),e}function RI(t){let e=bI(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function PI(){var t;let e=S.useContext(Xw),n=NI(rc.UseRouteError),r=RI(rc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function dt(t){De(!1)}function AI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ur.Pop,navigator:s,static:o=!1}=t;ga()&&De(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ci(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:g="default"}=r,y=S.useMemo(()=>{let _=Mp(c,a);return _==null?null:{location:{pathname:_,search:u,hash:d,state:f,key:g},navigationType:i}},[a,c,u,d,f,g,i]);return y==null?null:S.createElement(Ts.Provider,{value:l},S.createElement(ru.Provider,{children:n,value:y}))}function OI(t){let{children:e,location:n}=t,r=S.useContext(Qw),i=r&&!e?r.router.routes:qd(e);return xI(i,n)}var My;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(My||(My={}));new Promise(()=>{});function qd(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,qd(r.props.children,s));return}r.type!==dt&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ic.apply(this,arguments)}function Jw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function LI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function DI(t,e){return t.button===0&&(!e||e==="_self")&&!LI(t)}const MI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],FI=["aria-current","caseSensitive","className","end","style","to","children"];function UI(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=jT({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(AI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const $I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ci=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,d=Jw(e,MI),{basename:f}=S.useContext(Ts),g,y=!1;if(typeof c=="string"&&jI.test(c)&&(g=c,$I)){let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=Mp(v.pathname,f);v.origin===p.origin&&C!=null?c=C+v.search+v.hash:y=!0}let _=CI(c,{relative:i}),x=BI(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i});function m(p){r&&r(p),p.defaultPrevented||x(p)}return S.createElement("a",ic({},d,{href:g||_,onClick:y||s?r:m,ref:n,target:l}))}),ie=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:c}=e,u=Jw(e,FI),d=Up(l,{relative:u.relative}),f=ya(),g=S.useContext(Fp),{navigator:y}=S.useContext(Ts),_=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,x=f.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(x=x.toLowerCase(),m=m?m.toLowerCase():null,_=_.toLowerCase());let p=x===_||!o&&x.startsWith(_)&&x.charAt(_.length)==="/",v=m!=null&&(m===_||!o&&m.startsWith(_)&&m.charAt(_.length)==="/"),C=p?r:void 0,I;typeof s=="function"?I=s({isActive:p,isPending:v}):I=[s,p?"active":null,v?"pending":null].filter(Boolean).join(" ");let R=typeof a=="function"?a({isActive:p,isPending:v}):a;return S.createElement(ci,ic({},u,{"aria-current":C,className:I,ref:n,style:R,to:l}),typeof c=="function"?c({isActive:p,isPending:v}):c)});var Fy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Fy||(Fy={}));var Uy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Uy||(Uy={}));function BI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=iu(),l=ya(),c=Up(t,{relative:o});return S.useCallback(u=>{if(DI(u,n)){u.preventDefault();let d=r!==void 0?r:nc(l)===nc(c);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}const Zw="/assets/btc_logo_gray-b145fb42.svg";function Zi({section:t,liOne:e,liTwo:n,liThree:r,liFourHref:i,liFour:s,classN:o}){return w("ul",{className:o+" text-gray-100 py-2 px-8 border-l border-gray-400",children:[h("h5",{className:"text-2xl font-semibold text-gray-400",children:"Company"}),h("li",{className:"",children:h("a",{href:"/",children:t})}),h("li",{className:"",children:h("a",{href:"/",children:e})}),h("li",{className:"",children:h("a",{href:"/",children:n})}),h("li",{className:"",children:h("a",{href:"/",children:r})}),h(ie,{to:i,children:s})]})}function ms({image:t,addClass:e}){return h(ie,{to:"/",className:`w-full max-w-[130px] max-h-[80px] ${e}`,children:h("img",{src:t,alt:"Logo BTC"})})}function zI(){return w("footer",{className:"border-t border-gray-400 py-8 px-8 lg:px-40",children:[w("section",{className:"flex flex-wrap items-center justify-between",children:[h(ms,{image:Zw,addClass:"flex items-baseline title-font font-medium items-center md:mb-0 lg:order-none"}),w("aside",{className:"flex flex-wrap",children:[h(Zi,{is:!0,classN:"md:border-none",section:"Company",liOne:"About us",liTwo:"Legal",liThree:"Career",liFour:"Contact"}),h(Zi,{section:"Services",liOne:"Pricing",liTwo:"Products",liThree:"Customers",liFour:"Success Stories"}),h(Zi,{section:"Support",liOne:"About us",liTwo:"Legal",liThree:"Career"})]})]}),h("section",{className:"flex items-center flex-start text-gray-50",children:w("p",{children:["© Business Travel Consulting ",h("span",{id:"current-year"})," - All rights reserved · Privacy Policy"]})}),h("style",{children:`
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
					`})]})}/**
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
 */const e1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(t,e){if(!t)throw Is(e)},Is=function(t){return new Error("Firebase Database ("+e1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const t1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},VI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[u],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new HI;const f=s<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n1=function(t){const e=t1(t);return $p.encodeByteArray(e,!0)},sc=function(t){return n1(t).replace(/\./g,"")},oc=function(t){try{return $p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WI(t){return r1(void 0,t)}function r1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!KI(n)||(t[n]=r1(t[n],e[n]));return t}function KI(t){return t!=="__proto__"}/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qI=()=>GI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oc(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return qI()||YI()||QI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i1=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},s1=t=>{const e=i1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o1=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config},a1=t=>{var e;return(e=ou())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function l1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function XI(){var t;const e=(t=ou())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function c1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZI(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u1(){return e1.NODE_ADMIN===!0}function h1(){try{return typeof indexedDB=="object"}catch{return!1}}function eN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const tN="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tN,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,r)}}function nN(t,e){return t.replace(rN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rN=/\{\$([^}]+)}/g;/**
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
 */function Ho(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
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
 */const d1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ho(oc(s[0])||""),n=Ho(oc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},iN=function(t){const e=d1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sN=function(t){const e=d1(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ac(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function lc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($y(s)&&$y(o)){if(!lc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $y(t){return t!==null&&typeof t=="object"}/**
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
 */function Ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class oN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function aN(t,e){const n=new lN(t,e);return n.subscribe.bind(n)}class lN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gh),i.error===void 0&&(i.error=gh),i.complete===void 0&&(i.complete=gh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gh(){}function au(t,e){return`${t} failed: ${e} argument `}/**
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
 */const uN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const hN=1e3,dN=2,fN=4*60*60*1e3,pN=.5;function mN(t,e=hN,n=dN){const r=e*Math.pow(n,t),i=Math.round(pN*r*(Math.random()-.5)*2);return Math.min(fN,r+i)}/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class gN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new va;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vN(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yN(t){return t===jr?void 0:t}function vN(t){return t.instantiationMode==="EAGER"}/**
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
 */class _N{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const wN={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},EN=ee.INFO,CN={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},xN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _a{constructor(e){this.name=e,this._logLevel=EN,this._logHandler=xN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const SN=(t,e)=>e.some(n=>t instanceof n);let jy,By;function kN(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TN(){return By||(By=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f1=new WeakMap,Qd=new WeakMap,p1=new WeakMap,yh=new WeakMap,Bp=new WeakMap;function IN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&f1.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function NN(t){if(Qd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||p1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bN(t){Xd=t(Xd)}function RN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vh(this),e,...n);return p1.set(r,e.sort?e.sort():[e]),Er(r)}:TN().includes(t)?function(...e){return t.apply(vh(this),e),Er(f1.get(this))}:function(...e){return Er(t.apply(vh(this),e))}}function PN(t){return typeof t=="function"?RN(t):(t instanceof IDBTransaction&&NN(t),SN(t,kN())?new Proxy(t,Xd):t)}function Er(t){if(t instanceof IDBRequest)return IN(t);if(yh.has(t))return yh.get(t);const e=PN(t);return e!==t&&(yh.set(t,e),Bp.set(e,t)),e}const vh=t=>Bp.get(t);function AN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ON=["get","getKey","getAll","getAllKeys","count"],LN=["put","add","delete","clear"],_h=new Map;function zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ON.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return _h.set(e,s),s}bN(t=>({...t,get:(e,n,r)=>zy(e,n)||t.get(e,n,r),has:(e,n)=>!!zy(e,n)||t.has(e,n)}));/**
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
 */class DN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",Vy="0.9.10";/**
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
 */const ui=new _a("@firebase/app"),FN="@firebase/app-compat",UN="@firebase/analytics-compat",$N="@firebase/analytics",jN="@firebase/app-check-compat",BN="@firebase/app-check",zN="@firebase/auth",VN="@firebase/auth-compat",HN="@firebase/database",WN="@firebase/database-compat",KN="@firebase/functions",GN="@firebase/functions-compat",qN="@firebase/installations",YN="@firebase/installations-compat",QN="@firebase/messaging",XN="@firebase/messaging-compat",JN="@firebase/performance",ZN="@firebase/performance-compat",eb="@firebase/remote-config",tb="@firebase/remote-config-compat",nb="@firebase/storage",rb="@firebase/storage-compat",ib="@firebase/firestore",sb="@firebase/firestore-compat",ob="firebase",ab="9.22.0";/**
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
 */const Zd="[DEFAULT]",lb={[Jd]:"fire-core",[FN]:"fire-core-compat",[$N]:"fire-analytics",[UN]:"fire-analytics-compat",[BN]:"fire-app-check",[jN]:"fire-app-check-compat",[zN]:"fire-auth",[VN]:"fire-auth-compat",[HN]:"fire-rtdb",[WN]:"fire-rtdb-compat",[KN]:"fire-fn",[GN]:"fire-fn-compat",[qN]:"fire-iid",[YN]:"fire-iid-compat",[QN]:"fire-fcm",[XN]:"fire-fcm-compat",[JN]:"fire-perf",[ZN]:"fire-perf-compat",[eb]:"fire-rc",[tb]:"fire-rc-compat",[nb]:"fire-gcs",[rb]:"fire-gcs-compat",[ib]:"fire-fst",[sb]:"fire-fst-compat","fire-js":"fire-js",[ob]:"fire-js-all"};/**
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
 */const Wo=new Map,ef=new Map;function cb(t,e){try{t.container.addComponent(e)}catch(n){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(ef.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;ef.set(e,t);for(const n of Wo.values())cb(n,t);return!0}function bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ub={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new Si("app","Firebase",ub);/**
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
 */class hb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Hn=ab;function m1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=o1()),!n)throw Cr.create("no-options");const s=Wo.get(i);if(s){if(lc(n,s.options)&&lc(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new _N(i);for(const l of ef.values())o.addComponent(l);const a=new hb(n,r,o);return Wo.set(i,a),a}function zp(t=Zd){const e=Wo.get(t);if(!e&&t===Zd&&o1())return m1();if(!e)throw Cr.create("no-app",{appName:t});return e}function db(){return Array.from(Wo.values())}function Ne(t,e,n){var r;let i=(r=lb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(a.join(" "));return}Kt(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fb="firebase-heartbeat-database",pb=1,Ko="firebase-heartbeat-store";let wh=null;function g1(){return wh||(wh=AN(fb,pb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ko)}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),wh}async function mb(t){try{return await(await g1()).transaction(Ko).objectStore(Ko).get(y1(t))}catch(e){if(e instanceof Yt)ui.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(n.message)}}}async function Hy(t,e){try{const r=(await g1()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,y1(t)),await r.done}catch(n){if(n instanceof Yt)ui.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(r.message)}}}function y1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gb=1024,yb=30*24*60*60*1e3;class vb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wy(),{heartbeatsToSend:n,unsentEntries:r}=_b(this._heartbeatsCache.heartbeats),i=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wy(){return new Date().toISOString().substring(0,10)}function _b(t,e=gb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ky(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return h1()?eN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ky(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Eb(t){Kt(new Ot("platform-logger",e=>new DN(e),"PRIVATE")),Kt(new Ot("heartbeat",e=>new vb(e),"PRIVATE")),Ne(Jd,Vy,t),Ne(Jd,Vy,"esm2017"),Ne("fire-js","")}Eb("");function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function v1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cb=v1,_1=new Si("auth","Firebase",v1());/**
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
 */const cc=new _a("@firebase/auth");function xb(t,...e){cc.logLevel<=ee.WARN&&cc.warn(`Auth (${Hn}): ${t}`,...e)}function Tl(t,...e){cc.logLevel<=ee.ERROR&&cc.error(`Auth (${Hn}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw Hp(t,...e)}function vn(t,...e){return Hp(t,...e)}function w1(t,e,n){const r=Object.assign(Object.assign({},Cb()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Sb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),w1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _1.create(t,...e)}function V(t,e,...n){if(!t)throw Hp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function jn(t,e){t||Nn(e)}/**
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
 */function tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kb(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kb()||JI()||"connection"in navigator)?navigator.onLine:!0}function Ib(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=jp()||c1()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class E1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bb=new wa(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,r,i={}){return C1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),E1.fetch()(x1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function C1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nb),e);try{const i=new Rb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw il(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw w1(t,u,c);Gt(t,u)}}catch(i){if(i instanceof Yt)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function Ea(t,e,n,r,i={}){const s=await Ps(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function x1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wp(t.config,i):`${t.config.apiScheme}://${i}`}class Rb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),bb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Pb(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function Ab(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ob(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=Kp(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(Eh(i.auth_time)),issuedAtTime:_o(Eh(i.iat)),expirationTime:_o(Eh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Eh(t){return Number(t)*1e3}function Kp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=oc(n);return i?JSON.parse(i):(Tl("Failed to decode base64 JWT payload"),null)}catch(i){return Tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lb(t){const e=Kp(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&Db(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Db({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class S1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Go(t,Ab(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$b(s.providerUserInfo):[],a=Ub(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new S1(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Fb(t){const e=be(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $b(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jb(t,e){const n=await C1(t,{},async()=>{const r=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=x1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",E1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qo;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Zn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new S1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Go(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ob(this,e)}reload(){return Fb(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Go(this,Pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:C,isAnonymous:I,providerData:R,stsTokenManager:b}=n;V(v&&b,e,"internal-error");const P=qo.fromJSON(this.name,b);V(typeof v=="string",e,"internal-error"),Zn(d,e.name),Zn(f,e.name),V(typeof C=="boolean",e,"internal-error"),V(typeof I=="boolean",e,"internal-error"),Zn(g,e.name),Zn(y,e.name),Zn(_,e.name),Zn(x,e.name),Zn(m,e.name),Zn(p,e.name);const j=new ei({uid:v,auth:e,email:f,emailVerified:C,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:P,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(j.providerData=R.map(U=>Object.assign({},U))),x&&(j._redirectEventId=x),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new qo;i.updateFromServerResponse(n);const s=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}}/**
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
 */const qy=new Map;function bn(t){jn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
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
 */class k1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k1.type="NONE";const Yy=k1;/**
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
 */function Il(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Il(this.userKey,i.apiKey,s),this.fullPersistenceKey=Il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(bn(Yy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||bn(Yy);const o=Il(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=ei._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new es(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new es(s,e,r))}}/**
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
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R1(e))return"Blackberry";if(P1(e))return"Webos";if(Gp(e))return"Safari";if((e.includes("chrome/")||I1(e))&&!e.includes("edge/"))return"Chrome";if(b1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function T1(t=rt()){return/firefox\//i.test(t)}function Gp(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I1(t=rt()){return/crios\//i.test(t)}function N1(t=rt()){return/iemobile/i.test(t)}function b1(t=rt()){return/android/i.test(t)}function R1(t=rt()){return/blackberry/i.test(t)}function P1(t=rt()){return/webos/i.test(t)}function cu(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bb(t=rt()){var e;return cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zb(){return ZI()&&document.documentMode===10}function A1(t=rt()){return cu(t)||b1(t)||P1(t)||R1(t)||/windows phone/i.test(t)||N1(t)}function Vb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function O1(t,e=[]){let n;switch(t){case"Browser":n=Qy(rt());break;case"Worker":n=`${Qy(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hn}/${r}`}async function L1(t,e){return Ps(t,"GET","/v2/recaptchaConfig",Rs(t,e))}function Xy(t){return t!==void 0&&t.enterprise!==void 0}class D1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Hb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function M1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Hb().appendChild(r)})}function Wb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Kb="https://www.google.com/recaptcha/enterprise.js?render=",Gb="recaptcha-enterprise",qb="NO_RECAPTCHA";class F1{constructor(e){this.type=Gb,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{L1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new D1(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Xy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Xy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}M1(Kb+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function hc(t,e,n,r=!1){const i=new F1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Yb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Qb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new Yb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ib()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}async initializeRecaptchaConfig(){const e=await L1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new D1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new F1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return be(t)}class Jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=aN(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Xb(t,e){const n=bs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lc(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function Jb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zb(t,e,n){const r=ki(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=U1(e),{host:o,port:a}=e2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||t2()}function U1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function e2(t){const e=U1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zy(o)}}}function Zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function t2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function n2(t,e){return Ps(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ch(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
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
 */async function r2(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function i2(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
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
 */class Yo extends qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await hc(e,r,"signInWithPassword");return Ch(e,i)}else return Ch(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await hc(e,r,"signInWithPassword");return Ch(e,s)}else return Promise.reject(i)});case"emailLink":return r2(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return n2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return i2(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ts(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
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
 */const s2="http://localhost";class hi extends qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:s2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
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
 */function o2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a2(t){const e=so(oo(t)).link,n=e?so(oo(e)).deep_link_id:null,r=so(oo(t)).deep_link_id;return(r?so(oo(r)).link:null)||r||n||e||t}class Yp{constructor(e){var n,r,i,s,o,a;const l=so(oo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=o2((i=l.mode)!==null&&i!==void 0?i:null);V(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=a2(e);try{return new Yp(n)}catch{return null}}}/**
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
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yp.parseLink(n);return V(r,"argument-error"),Yo._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ca extends Qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends Ca{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class mt extends Ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class sr extends Ca{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class or extends Ca{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function xh(t,e){return Ea(t,"POST","/v1/accounts:signUp",Rs(t,e))}/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ei._fromIdTokenResponse(e,r,i),o=ev(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ev(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ev(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dc extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dc(e,n,r,i)}}function $1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(t,s,e,r):s})}async function l2(t,e,n=!1){const r=await Go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
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
 */async function c2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Go(t,$1(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=Kp(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
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
 */async function j1(t,e,n=!1){const r="signIn",i=await $1(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function u2(t,e){return j1(ki(t),e)}async function h2(t,e,n){var r;const i=ki(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await hc(i,s,"signUpPassword");o=xh(i,c)}else o=xh(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await hc(i,s,"signUpPassword");return xh(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await di._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function d2(t,e,n){return u2(be(t),As.credential(e,n))}function f2(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function p2(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function Ti(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function m2(t){return be(t).signOut()}const fc="__sak";/**
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
 */class B1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function g2(){const t=rt();return Gp(t)||cu(t)}const y2=1e3,v2=10;class z1 extends B1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=g2()&&Vb(),this.fallbackToPolling=A1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,v2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}z1.type="LOCAL";const _2=z1;/**
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
 */class V1 extends B1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}V1.type="SESSION";const H1=V1;/**
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
 */function w2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await w2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
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
 */function Xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class E2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xp("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function C2(t){_n().location.href=t}/**
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
 */function W1(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function x2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k2(){return W1()?self:null}/**
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
 */const K1="firebaseLocalStorageDb",T2=1,pc="firebaseLocalStorage",G1="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hu(t,e){return t.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function I2(){const t=indexedDB.deleteDatabase(K1);return new xa(t).toPromise()}function nf(){const t=indexedDB.open(K1,T2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pc,{keyPath:G1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pc)?e(r):(r.close(),await I2(),e(await nf()))})})}async function tv(t,e,n){const r=hu(t,!0).put({[G1]:e,value:n});return new xa(r).toPromise()}async function N2(t,e){const n=hu(t,!1).get(e),r=await new xa(n).toPromise();return r===void 0?null:r.value}function nv(t,e){const n=hu(t,!0).delete(e);return new xa(n).toPromise()}const b2=800,R2=3;class q1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(k2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await x2(),!this.activeServiceWorker)return;this.sender=new E2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nf();return await tv(e,fc,"1"),await nv(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hu(i,!1).getAll();return new xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q1.type="LOCAL";const P2=q1;new wa(3e4,6e4);/**
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
 */function Y1(t,e){return e?bn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jp extends qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function A2(t){return j1(t.auth,new Jp(t),t.bypassAuthState)}function O2(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),c2(n,new Jp(t),t.bypassAuthState)}async function L2(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),l2(n,new Jp(t),t.bypassAuthState)}/**
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
 */class Q1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A2;case"linkViaPopup":case"linkViaRedirect":return L2;case"reauthViaPopup":case"reauthViaRedirect":return O2;default:Gt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D2=new wa(2e3,1e4);async function X1(t,e,n){const r=ki(t);Sb(t,e,Qp);const i=Y1(r,n);return new Gr(r,"signInViaPopup",e,i).executeNotNull()}class Gr extends Q1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D2.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const M2="pendingRedirect",Nl=new Map;class F2 extends Q1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nl.get(this.auth._key());if(!e){try{const r=await U2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nl.set(this.auth._key(),e)}return this.bypassAuthState||Nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U2(t,e){const n=B2(e),r=j2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $2(t,e){Nl.set(t._key(),e)}function j2(t){return bn(t._redirectPersistence)}function B2(t){return Il(M2,t.config.apiKey,t.name)}async function z2(t,e,n=!1){const r=ki(t),i=Y1(r,e),o=await new F2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const V2=10*60*1e3;class H2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V2&&this.cachedEventUids.clear(),this.cachedEventUids.has(rv(e))}saveEventToCache(e){this.cachedEventUids.add(rv(e)),this.lastProcessedEventTime=Date.now()}}function rv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J1(t);default:return!1}}/**
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
 */async function K2(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
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
 */const G2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q2=/^https?/;async function Y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await K2(t);for(const n of e)try{if(Q2(n))return}catch{}Gt(t,"unauthorized-domain")}function Q2(t){const e=tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!q2.test(n))return!1;if(G2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const X2=new wa(3e4,6e4);function iv(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J2(t){return new Promise((e,n)=>{var r,i,s;function o(){iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iv(),n(vn(t,"network-request-failed"))},timeout:X2.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=Wb("iframefcb");return _n()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},M1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw bl=null,e})}let bl=null;function Z2(t){return bl=bl||J2(t),bl}/**
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
 */const eR=new wa(5e3,15e3),tR="__/auth/iframe",nR="emulator/auth/iframe",rR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sR(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,nR):`https://${t.config.authDomain}/${tR}`,r={apiKey:e.apiKey,appName:t.name,v:Hn},i=iR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ns(r).slice(1)}`}async function oR(t){const e=await Z2(t),n=_n().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:sR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},eR.get());function l(){_n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lR=500,cR=600,uR="_blank",hR="http://localhost";class sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(t,e,n,r=lR,i=cR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(a=I1(c)?uR:n),T1(c)&&(e=e||hR,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(Bb(c)&&a!=="_self")return fR(e||"",a),new sv(null);const d=window.open(e||"",a,u);V(d,t,"popup-blocked");try{d.focus()}catch{}return new sv(d)}function fR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pR="__/auth/handler",mR="emulator/auth/handler",gR=encodeURIComponent("fac");async function ov(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hn,eventId:i};if(e instanceof Qp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Ca){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gR}=${encodeURIComponent(l)}`:"";return`${yR(t)}?${Ns(a).slice(1)}${c}`}function yR({config:t}){return t.emulator?Wp(t,mR):`https://${t.authDomain}/${pR}`}/**
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
 */const Sh="webStorageSupport";class vR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=H1,this._completeRedirectFn=z2,this._overrideRedirectResult=$2}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ov(e,n,r,tf(),i);return dR(e,o,Xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ov(e,n,r,tf(),i);return C2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oR(e),r=new H2(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sh];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A1()||Gp()||cu()}}const _R=vR;var av="@firebase/auth",lv="0.23.2";/**
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
 */class wR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ER(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CR(t){Kt(new Ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O1(t)},c=new Qb(r,i,s,l);return Jb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new Ot("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new wR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(av,lv,ER(t)),Ne(av,lv,"esm2017")}/**
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
 */const xR=5*60,SR=a1("authIdTokenMaxAge")||xR;let cv=null;const kR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SR)return;const i=n==null?void 0:n.token;cv!==i&&(cv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xn(t=zp()){const e=bs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xb(t,{popupRedirectResolver:_R,persistence:[P2,_2,H1]}),r=a1("authTokenSyncURL");if(r){const s=kR(r);p2(n,s,()=>s(n.currentUser)),f2(n,o=>s(o))}const i=i1("auth");return i&&Zb(n,`http://${i}`),n}CR("Browser");function TR(t){return w("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40",children:[h("article",{className:"col-span-2",children:w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 ",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Navigation"}),h(ie,{to:"/services",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Services"}),h(ie,{to:"/work",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Thoughts"}),h(ie,{to:"/thoughts",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Thoughts"}),h(ie,{to:"/connect",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Connect Us"})]})}),w("aside",{children:[w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Behind The Scenes"}),h(ie,{to:"/about",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"About Us"}),h(ie,{to:"/news",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"News"}),h(ie,{to:"/jobs",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"Jobs"})]}),w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Offices"}),h(ie,{to:"/",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"BTC Americas"}),h(ie,{to:"/price-travel",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"Price Travel"}),h(ie,{to:"/big-fish",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"Big Fish"})]}),w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Settings"}),t.children]}),w("aside",{className:"font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Connect Us"}),w("ul",{className:"flex justify-start font-semibold text-gray-100 pr-6",children:[h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.facebook.com/BTCamericas",className:"pr-10",children:h("span",{className:"facebook hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.instagram.com/btcamericas/",className:"pr-10",children:h("span",{className:"instagram hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://twitter.com/BTCamericas",className:"pr-10",children:h("span",{className:"twitter hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.linkedin.com/company/btcamericas",className:"pr-10",children:h("span",{className:"linkedin hover:animate-pulse"})})})]})]})]}),h("style",{children:`
					.facebook {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("https://test.detexcoco.com/SocialMedia/facebook.png");
					}
					.instagram {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("https://test.detexcoco.com/SocialMedia/instagram.png");
					}

					.twitter {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("https://test.detexcoco.com/SocialMedia/twitter.png");
					}

					.linkedin {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("https://test.detexcoco.com/SocialMedia/linkedin.png");
					}
				`})]})}const mc="/assets/btc_logo_white-26dc9d2f.svg";function uv(t){const[e,n]=S.useState(!1);return w("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[h(ms,{image:mc}),w("nav",{className:"flex",children:[w("section",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus",onClick:()=>n(r=>!r),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]}),h("section",{className:e?"showMenuNav":"hideMenuNav",children:w("div",{className:"h-full",children:[w("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>n(!1),children:[h(ms,{image:mc,classLogo:"text-gray-100",logo:"btc"}),w("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>n(r=>!r),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),h(TR,{children:t.children})]})})]}),h("style",{children:`
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
                `})]})}function Z1(){const t=xn(),e=iu();return h("div",{className:"flex justify-start w-full max-w-4xl",children:h("button",{onClick:()=>{m2(t).then(()=>{e("/"),console.log("Signed out successfully"),window.location.reload()}).catch(r=>{console.log("error")})},className:"text-border-btn btn-animate flex items-center text-2xl lg:text-3xl text-gray-100",children:"Logout"})})}function IR(){return w(wn,{children:[h(ie,{to:"/login",className:"flex items-center text-2xl lg:my-1 lg:text-3xl ",children:"Login"}),h(ie,{to:"/signup",className:"flex items-center text-2xl lg:my-1 lg:text-3xl ",children:"Sign Up"})]})}function NR(){const[t,e]=S.useState(!1),n=xn();return S.useEffect(()=>{Ti(n,r=>{r.email?e(!0):e(!1)})}),h(wn,{children:t?h(uv,{children:w(wn,{children:[h(ie,{to:"/logged",className:"flex items-center text-2xl lg:my-1 lg:text-3xl btn-animate w-fit",children:"Account"}),h(Z1,{})]})}):h(uv,{children:h(IR,{})})})}function an({content:t}){return w("div",{className:"bg-[rgb(0,12,26)]",children:[h(NR,{}),t,h(zI,{})]})}function eE(){return w("section",{className:"h-screen bg-gif",children:[h("aside",{className:"h-screen p-4 bg-fig-gr",id:"js-animate"}),h("style",{children:`
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
					`})]})}function bR(){return h(wn,{children:h(an,{content:h(eE,{})})})}const hv="@firebase/database",dv="0.14.4";/**
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
 */let tE="";function RR(t){tE=t}/**
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
 */class PR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ho(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class AR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const nE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PR(e)}}catch{}return new AR},qr=nE("localStorage"),rf=nE("sessionStorage");/**
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
 */const ns=new _a("@firebase/database"),OR=function(){let t=1;return function(){return t++}}(),rE=function(t){const e=uN(t),n=new oN;n.update(e);const r=n.digest();return $p.encodeByteArray(r)},Sa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sa.apply(null,r):typeof r=="object"?e+=je(r):e+=r,e+=" "}return e};let ti=null,fv=!0;const LR=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ns.logLevel=ee.VERBOSE,ti=ns.log.bind(ns),e&&rf.set("logging_enabled",!0)):typeof t=="function"?ti=t:(ti=null,rf.remove("logging_enabled"))},We=function(...t){if(fv===!0&&(fv=!1,ti===null&&rf.get("logging_enabled")===!0&&LR(!0)),ti){const e=Sa.apply(null,t);ti(e)}},ka=function(t){return function(...e){We(t,...e)}},sf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sa(...t);ns.error(e)},Bn=function(...t){const e=`FIREBASE FATAL ERROR: ${Sa(...t)}`;throw ns.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Sa(...t);ns.warn(e)},DR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ys="[MIN_NAME]",fi="[MAX_NAME]",Ii=function(t,e){if(t===e)return 0;if(t===ys||e===fi)return-1;if(e===ys||t===fi)return 1;{const n=pv(t),r=pv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},FR=function(t,e){return t===e?0:t<e?-1:1},qs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},em=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=je(e[r]),n+=":",n+=em(t[e[r]]);return n+="}",n},iE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sE=function(t){N(!Zp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},UR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$R=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const BR=new RegExp("^-?(0*)\\d{1,10}$"),zR=-2147483648,VR=2147483647,pv=function(t){if(BR.test(t)){const e=Number(t);if(e>=zR&&e<=VR)return e}return null},Os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},HR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class KR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rs.OWNER="owner";/**
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
 */const tm="5",oE="v",aE="s",lE="r",cE="f",uE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hE="ls",dE="p",of="ac",fE="websocket",pE="long_polling";/**
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
 */class mE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gE(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===fE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GR(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class qR{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return WI(this.counters_)}}/**
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
 */const kh={},Th={};function nm(t){const e=t.toString();return kh[e]||(kh[e]=new qR),kh[e]}function YR(t,e){const n=t.toString();return Th[n]||(Th[n]=e()),Th[n]}/**
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
 */class QR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Os(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mv="start",XR="close",JR="pLPCommand",ZR="pRTLPCB",yE="id",vE="pw",_E="ser",eP="cb",tP="seg",nP="ts",rP="d",iP="dframe",wE=1870,EE=30,sP=wE-EE,oP=25e3,aP=3e4;class Wi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ka(e),this.stats_=nm(n),this.urlFn=l=>(this.appCheckToken&&(l[of]=this.appCheckToken),gE(n,pE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aP)),MR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rm((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mv)this.id=a,this.password=l;else if(o===XR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[mv]="t",r[_E]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[eP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oE]=tm,this.transportSessionId&&(r[aE]=this.transportSessionId),this.lastSessionId&&(r[hE]=this.lastSessionId),this.applicationId&&(r[dE]=this.applicationId),this.appCheckToken&&(r[of]=this.appCheckToken),typeof location<"u"&&location.hostname&&uE.test(location.hostname)&&(r[lE]=cE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wi.forceAllow_=!0}static forceDisallow(){Wi.forceDisallow_=!0}static isAvailable(){return Wi.forceAllow_?!0:!Wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UR()&&!$R()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=n1(n),i=iE(r,sP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[iP]="t",r[yE]=e,r[vE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OR(),window[JR+this.uniqueCallbackIdentifier]=e,window[ZR+this.uniqueCallbackIdentifier]=n,this.myIFrame=rm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yE]=this.myID,e[vE]=this.myPW,e[_E]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EE+r.length<=wE;){const o=this.pendingSegs.shift();r=r+"&"+tP+i+"="+o.seg+"&"+nP+i+"="+o.ts+"&"+rP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(oP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const lP=16384,cP=45e3;let gc=null;typeof MozWebSocket<"u"?gc=MozWebSocket:typeof WebSocket<"u"&&(gc=WebSocket);class en{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ka(this.connId),this.stats_=nm(n),this.connURL=en.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[oE]=tm,typeof location<"u"&&location.hostname&&uE.test(location.hostname)&&(o[lE]=cE),n&&(o[aE]=n),r&&(o[hE]=r),i&&(o[of]=i),s&&(o[dE]=s),gE(e,fE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qr.set("previous_websocket_failure",!0);try{let r;u1(),this.mySock=new gc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&gc!==null&&!en.forceDisallow_}static previouslyFailed(){return qr.isInMemoryStorage||qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ho(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iE(n,lP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class Qo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wi,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const i=this.transports_=[];for(const s of Qo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qo.globalTransportInitialized_=!1;/**
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
 */const uP=6e4,hP=5e3,dP=10*1024,fP=100*1024,Ih="t",gv="d",pP="s",yv="r",mP="e",vv="o",_v="a",wv="n",Ev="p",gP="h";class yP{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ka("c:"+this.id+":"),this.transportManager_=new Qo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ih in e){const n=e[Ih];n===_v?this.upgradeIfSecondaryHealthy_():n===yv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qs("t",e),r=qs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ev,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_v,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qs("t",e),r=qs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qs(Ih,e);if(gv in e){const r=e[gv];if(n===gP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===wv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===pP?this.onConnectionShutdown_(r):n===yv?this.onReset_(r):n===mP?sf("Server Error: "+r):n===vv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tm!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ev,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class CE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class xE{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class yc extends xE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yc}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cv=32,xv=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ir(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function im(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function SE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function _e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return vt(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _P(t,e){const n=Xo(t,0),r=Xo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ii(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function sm(t,e){if(Ir(t)!==Ir(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function zt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ir(t)>Ir(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wP{constructor(e,n){this.errorPrefix_=n,this.parts_=Xo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=lu(this.parts_[r]);kE(this)}}function EP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=lu(e),kE(t)}function CP(t){const e=t.parts_.pop();t.byteLength_-=lu(e),t.parts_.length>0&&(t.byteLength_-=1)}function kE(t){if(t.byteLength_>xv)throw new Error(t.errorPrefix_+"has a key path longer than "+xv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cv+") or object contains a cycle "+Br(t))}function Br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class om extends xE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new om}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ys=1e3,xP=60*5*1e3,Sv=30*1e3,SP=1.3,kP=3e4,TP="server_kill",kv=3;class Ln extends CE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ln.nextPersistentConnectionId_++,this.log_=ka("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ys,this.maxReconnectDelay_=xP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!u1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");om.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(je(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new va,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ln.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const r=gs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=iN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sf("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kP&&(this.reconnectDelay_=Ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new yP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ct(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(TP)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ct(d),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yd(this.interruptReasons_)&&(this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>em(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kv&&(this.reconnectDelay_=Sv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tE.replace(/\./g,"-")]=1,jp()?e["framework.cordova"]=1:c1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yc.getInstance().currentlyOnline();return Yd(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class du{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(ys,e),i=new G(ys,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
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
 */let sl;class TE extends du{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,n){return Ii(e.name,n.name)}isDefinedOn(e){throw Is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(fi,sl)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,sl)}toString(){return".key"}}const is=new TE;/**
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
 */class ol{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??_t.EMPTY_NODE,this.right=s??_t.EMPTY_NODE}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class IP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ol(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new IP;/**
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
 */function NP(t,e){return Ii(t.name,e.name)}function am(t,e){return Ii(t,e)}/**
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
 */let af;function bP(t){af=t}const IE=function(t){return typeof t=="number"?"number:"+sE(t):"string:"+t},NE=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else N(t===af||t.isEmpty(),"priority of unexpected type.");N(t===af||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tv;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NE(this.priorityNode_)}static set __childrenNodeConstructor(e){Tv=e}static get __childrenNodeConstructor(){return Tv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+IE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sE(this.value_):e+=this.value_,this.lazyHash_=rE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bE,RE;function RP(t){bE=t}function PP(t){RE=t}class AP extends du{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ii(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(fi,new Me("[PRIORITY-POST]",RE))}makePost(e,n){const r=bE(e);return new G(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const we=new AP;/**
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
 */const OP=Math.log(2);class LP{constructor(e){const n=s=>parseInt(Math.log(s)/OP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ue(f,d.node,Ue.BLACK,null,null);{const g=parseInt(u/2,10)+l,y=i(l,g),_=i(g+1,c);return d=t[g],f=n?n(d):d,new Ue(f,d.node,Ue.BLACK,y,_)}},s=function(l){let c=null,u=null,d=t.length;const f=function(y,_){const x=d-y,m=d;d-=y;const p=i(x+1,m),v=t[x],C=n?n(v):v;g(new Ue(C,v.node,_,null,p))},g=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));_?f(x,Ue.BLACK):(f(x,Ue.BLACK),f(x,Ue.RED))}return u},o=new LP(t.length),a=s(o);return new _t(r||e,a)};/**
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
 */let Nh;const Pi={};class Rn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Pi&&we,"ChildrenNode.ts has not been loaded"),Nh=Nh||new Rn({".priority":Pi},{".priority":we}),Nh}get(e){const n=gs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vc(r,e.getCompare()):a=Pi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Rn(u,c)}addToIndexes(e,n){const r=ac(this.indexes_,(i,s)=>{const o=gs(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Pi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),vc(a,o.getCompare())}else return Pi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new Rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ac(this.indexes_,i=>{if(i===Pi)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new Rn(r,this.indexSet_)}}/**
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
 */let Qs;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&NE(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qs||(Qs=new B(new _t(am),null,Rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qs:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Qs:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{N(K(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+IE(this.getPriority().val())+":"),this.forEachChild(we,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ta?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(we),i=n.getIterator(we);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DP extends B{constructor(){super(new _t(am),B.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ta=new DP;Object.defineProperties(G,{MIN:{value:new G(ys,B.EMPTY_NODE)},MAX:{value:new G(fi,Ta)}});TE.__EMPTY_NODE=B.EMPTY_NODE;Me.__childrenNodeConstructor=B;bP(Ta);PP(Ta);/**
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
 */const MP=!0;function $e(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,$e(e))}if(!(t instanceof Array)&&MP){const n=[];let r=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=vc(n,NP,o=>o.name,am);if(r){const o=vc(n,we.getCompare());return new B(s,$e(e),new Rn({".priority":o},{".priority":we}))}else return new B(s,$e(e),Rn.Default)}else{let n=B.EMPTY_NODE;return Qe(t,(r,i)=>{if(Cn(t,r)&&r.substring(0,1)!=="."){const s=$e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority($e(e))}}RP($e);/**
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
 */class FP extends du{constructor(e){super(),this.indexPath_=e,N(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ii(e.name,n.name):s}makePost(e,n){const r=$e(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ta);return new G(fi,e)}toString(){return Xo(this.indexPath_,0).join("/")}}/**
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
 */class UP extends du{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ii(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=$e(e);return new G(n,r)}toString(){return".value"}}const $P=new UP;/**
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
 */function PE(t){return{type:"value",snapshotNode:t}}function vs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Jo(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vs(n,r)):o.trackChildChange(Zo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(we,(i,s)=>{n.hasChild(i)||r.trackChildChange(Jo(i,s))}),n.isLeafNode()||n.forEachChild(we,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Zo(i,s,o))}else r.trackChildChange(vs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ea{constructor(e){this.indexedFilter_=new lm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ea.getStartPost_(e),this.endPost_=ea.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(we,(o,a)=>{s.matches(new G(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class BP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ea(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new G(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Zo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Jo(n,d));const _=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(vs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Jo(c.name,c.node)),s.trackChildChange(vs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
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
 */class cm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ys}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new cm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zP(t){return t.loadsAllData()?new lm(t.getIndex()):t.hasLimit()?new BP(t):new ea(t)}function Iv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===$P?n="$value":t.index_===is?n="$key":(N(t.index_ instanceof FP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Nv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
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
 */class _c extends CE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ka("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_c.getListenId_(e,r),a={};this.listens_[o]=a;const l=Iv(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),gs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=_c.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Iv(e._queryParams),r=e._path.toString(),i=new va;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ho(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class VP{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wc(){return{value:null,children:new Map}}function AE(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,wc());const i=t.children.get(r);e=ae(e),AE(i,e,n)}}function lf(t,e,n){t.value!==null?n(e,t.value):HP(t,(r,i)=>{const s=new se(e.toString()+"/"+r);lf(i,s,n)})}function HP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class WP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const bv=10*1e3,KP=30*1e3,GP=5*60*1e3;class qP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WP(e);const r=bv+(KP-bv)*Math.random();wo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qe(e,(i,s)=>{s>0&&Cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*GP))}}/**
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
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function um(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ec{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=um()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Ec(te(),n,this.revert)}}else return N(K(this.path)===e,"operationForChild called for unrelated child."),new Ec(ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class ta{constructor(e,n){this.source=e,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new ta(this.source,te()):new ta(this.source,ae(this.path))}}/**
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
 */class pi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(e){return Y(this.path)?new pi(this.source,te(),this.snap.getImmediateChild(e)):new pi(this.source,ae(this.path),this.snap)}}/**
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
 */class _s{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new pi(this.source,te(),n.value):new _s(this.source,te(),n)}else return N(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class YP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jP(o.childName,o.snapshotNode))}),Xs(t,i,"child_removed",e,r,n),Xs(t,i,"child_added",e,r,n),Xs(t,i,"child_moved",s,r,n),Xs(t,i,"child_changed",e,r,n),Xs(t,i,"value",e,r,n),i}function Xs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>JP(t,a,l)),o.forEach(a=>{const l=XP(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function XP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JP(t,e,n){if(e.childName==null||n.childName==null)throw Is("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function fu(t,e){return{eventCache:t,serverCache:e}}function Eo(t,e,n,r){return fu(new mi(e,n,r),t.serverCache)}function OE(t,e,n,r){return fu(t.eventCache,new mi(e,n,r))}function cf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let bh;const ZP=()=>(bh||(bh=new _t(FR)),bh);class oe{constructor(e,n=ZP()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Qe(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Y(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ae(e),n);return s!=null?{path:_e(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ae(e)):new oe(null)}}set(e,n){if(Y(e))return new oe(n,this.children);{const r=K(e),s=(this.children.get(r)||new oe(null)).set(ae(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ae(e)):null}}setTree(e,n){if(Y(e))return n;{const r=K(e),s=(this.children.get(r)||new oe(null)).setTree(ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(_e(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ae(e),_e(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ae(e),_e(n,i),r):new oe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(_e(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new oe(null))}}function Co(t,e,n){if(Y(e))return new sn(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=vt(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function uf(t,e,n){let r=t;return Qe(n,(i,s)=>{r=Co(r,_e(e,i),s)}),r}function Rv(t,e){if(Y(e))return sn.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new sn(n)}}function hf(t,e){return Ni(t,e)!=null}function Ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function Pv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function xr(t,e){if(Y(e))return t;{const n=Ni(t,e);return n!=null?new sn(new oe(n)):new sn(t.writeTree_.subtree(e))}}function df(t){return t.writeTree_.isEmpty()}function ws(t,e){return LE(te(),t.writeTree_,e)}function LE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=LE(_e(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(_e(t,".priority"),r)),n}}/**
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
 */function fm(t,e){return UE(e,t)}function eA(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Co(t.visibleWrites,e,n)),t.lastWriteId=r}function tA(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=uf(t.visibleWrites,e,n),t.lastWriteId=r}function nA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function rA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iA(a,r.path)?i=!1:zt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return sA(t),!0;if(r.snap)t.visibleWrites=Rv(t.visibleWrites,r.path);else{const a=r.children;Qe(a,l=>{t.visibleWrites=Rv(t.visibleWrites,_e(r.path,l))})}return!0}else return!1}function iA(t,e){if(t.snap)return zt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&zt(_e(t.path,n),e))return!0;return!1}function sA(t){t.visibleWrites=DE(t.allWrites,oA,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oA(t){return t.visible}function DE(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)zt(n,o)?(a=vt(n,o),r=Co(r,a,s.snap)):zt(o,n)&&(a=vt(o,n),r=Co(r,te(),s.snap.getChild(a)));else if(s.children){if(zt(n,o))a=vt(n,o),r=uf(r,a,s.children);else if(zt(o,n))if(a=vt(o,n),Y(a))r=uf(r,te(),s.children);else{const l=gs(s.children,K(a));if(l){const c=l.getChild(ae(a));r=Co(r,te(),c)}}}else throw Is("WriteRecord should have .snap or .children")}}return r}function ME(t,e,n,r,i){if(!r&&!i){const s=Ni(t.visibleWrites,e);if(s!=null)return s;{const o=xr(t.visibleWrites,e);if(df(o))return n;if(n==null&&!hf(o,te()))return null;{const a=n||B.EMPTY_NODE;return ws(o,a)}}}else{const s=xr(t.visibleWrites,e);if(!i&&df(s))return n;if(!i&&n==null&&!hf(s,te()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(zt(c.path,e)||zt(e,c.path))},a=DE(t.allWrites,o,e),l=n||B.EMPTY_NODE;return ws(a,l)}}}function aA(t,e,n){let r=B.EMPTY_NODE;const i=Ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xr(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=ws(xr(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),Pv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xr(t.visibleWrites,e);return Pv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lA(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_e(e,n);if(hf(t.visibleWrites,s))return null;{const o=xr(t.visibleWrites,s);return df(o)?i.getChild(n):ws(o,i.getChild(n))}}function cA(t,e,n,r){const i=_e(e,n),s=Ni(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xr(t.visibleWrites,i);return ws(o,r.getNode().getImmediateChild(n))}else return null}function uA(t,e){return Ni(t.visibleWrites,e)}function hA(t,e,n,r,i,s,o){let a;const l=xr(t.visibleWrites,e),c=Ni(l,te());if(c!=null)a=c;else if(n!=null)a=ws(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&u.length<i;)d(g,r)!==0&&u.push(g),g=f.getNext();return u}else return[]}function dA(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Cc(t,e,n,r){return ME(t.writeTree,t.treePath,e,n,r)}function pm(t,e){return aA(t.writeTree,t.treePath,e)}function Av(t,e,n,r){return lA(t.writeTree,t.treePath,e,n,r)}function xc(t,e){return uA(t.writeTree,_e(t.treePath,e))}function fA(t,e,n,r,i,s){return hA(t.writeTree,t.treePath,e,n,r,i,s)}function mm(t,e,n){return cA(t.writeTree,t.treePath,e,n)}function FE(t,e){return UE(_e(t.treePath,e),t.writeTree)}function UE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class pA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Zo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Jo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Zo(r,e.snapshotNode,i.oldSnap));else throw Is("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const $E=new mA;class gm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gi(this.viewCache_),s=fA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function gA(t){return{filter:t}}function yA(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vA(t,e,n,r,i){const s=new pA;let o,a;if(n.type===tn.OVERWRITE){const c=n;c.source.fromUser?o=ff(t,e,c.path,c.snap,r,i,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=Sc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===tn.MERGE){const c=n;c.source.fromUser?o=wA(t,e,c.path,c.children,r,i,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=pf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===tn.ACK_USER_WRITE){const c=n;c.revert?o=xA(t,e,c.path,r,i,s):o=EA(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=CA(t,e,n.path,r,s);else throw Is("Unknown operation type: "+n.type);const l=s.getChanges();return _A(e,o,l),{viewCache:o,changes:l}}function _A(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(PE(cf(e)))}}function jE(t,e,n,r,i,s){const o=e.eventCache;if(xc(r,n)!=null)return e;{let a,l;if(Y(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gi(e),u=c instanceof B?c:B.EMPTY_NODE,d=pm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Cc(r,gi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){N(Ir(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Av(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ae(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Av(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=mm(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Eo(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function Sc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&Ir(n)>1)return e;const y=ae(n),x=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),g,x,y,$E,null)}const d=OE(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),f=new gm(i,d,s);return jE(t,d,n,i,f,a)}function ff(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new gm(i,e,s);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Eo(e,c,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Eo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ae(n),g=a.getNode().getImmediateChild(d);let y;if(Y(f))y=r;else{const _=u.getCompleteChild(d);_!=null?im(f)===".priority"&&_.getChild(SE(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=B.EMPTY_NODE}if(g.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=Eo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ov(t,e){return t.eventCache.isCompleteForChild(e)}function wA(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=_e(n,l);Ov(e,K(u))&&(a=ff(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=_e(n,l);Ov(e,K(u))||(a=ff(t,a,u,c,i,s,o))}),a}function Lv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=r:c=new oe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=Lv(t,g,f);l=Sc(t,l,new se(d),y,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),_=Lv(t,y,f);l=Sc(t,l,new se(d),_,i,s,o,a)}}),l}function EA(t,e,n,r,i,s,o){if(xc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Sc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let c=new oe(null);return l.getNode().forEachChild(is,(u,d)=>{c=c.set(new se(u),d)}),pf(t,e,n,c,i,s,a,o)}else return e}else{let c=new oe(null);return r.foreach((u,d)=>{const f=_e(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),pf(t,e,n,c,i,s,a,o)}}function CA(t,e,n,r,i){const s=e.serverCache,o=OE(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return jE(t,o,n,r,$E,i)}function xA(t,e,n,r,i,s){let o;if(xc(r,n)!=null)return e;{const a=new gm(r,e,i),l=e.eventCache.getNode();let c;if(Y(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cc(r,gi(e));else{const d=e.serverCache.getNode();N(d instanceof B,"serverChildren would be complete if leaf node"),u=pm(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=K(n);let d=mm(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ae(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,ae(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cc(r,gi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||xc(r,te())!=null,Eo(e,c,o,t.filter.filtersNodes())}}/**
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
 */class SA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lm(r.getIndex()),s=zP(r);this.processor_=gA(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new mi(l,o.isFullyInitialized(),i.filtersNodes()),d=new mi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=fu(d,u),this.eventGenerator_=new YP(this.query_)}get query(){return this.query_}}function kA(t){return t.viewCache_.serverCache.getNode()}function TA(t,e){const n=gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Dv(t){return t.eventRegistrations_.length===0}function IA(t,e){t.eventRegistrations_.push(e)}function Mv(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Fv(t,e,n,r){e.type===tn.MERGE&&e.source.queryId!==null&&(N(gi(t.viewCache_),"We should always have a full cache before handling merges"),N(cf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=vA(t.processor_,i,e,n,r);return yA(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,BE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function NA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(s,o)=>{r.push(vs(s,o))}),n.isFullyInitialized()&&r.push(PE(n.getNode())),BE(t,r,n.getNode(),e)}function BE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return QP(t.eventGenerator_,e,n,i)}/**
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
 */let kc;class bA{constructor(){this.views=new Map}}function RA(t){N(!kc,"__referenceConstructor has already been defined"),kc=t}function PA(){return N(kc,"Reference.ts has not been loaded"),kc}function AA(t){return t.views.size===0}function ym(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),Fv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Fv(o,e,n,r));return s}}function OA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Cc(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=pm(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const c=fu(new mi(a,l,!1),new mi(r,i,!1));return new SA(e,c)}return o}function LA(t,e,n,r,i,s){const o=OA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),IA(o,n),NA(o,n)}function DA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Nr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Mv(c,n,r)),Dv(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Mv(l,n,r)),Dv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Nr(t)&&s.push(new(PA())(e._repo,e._path)),{removed:s,events:o}}function zE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ss(t,e){let n=null;for(const r of t.views.values())n=n||TA(r,e);return n}function VE(t,e){if(e._queryParams.loadsAllData())return pu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function HE(t,e){return VE(t,e)!=null}function Nr(t){return pu(t)!=null}function pu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Tc;function MA(t){N(!Tc,"__referenceConstructor has already been defined"),Tc=t}function FA(){return N(Tc,"Reference.ts has not been loaded"),Tc}let UA=1;class Uv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=dA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WE(t,e,n,r,i){return eA(t.pendingWriteTree_,e,n,r,i),i?Ls(t,new pi(um(),e,n)):[]}function $A(t,e,n,r){tA(t.pendingWriteTree_,e,n,r);const i=oe.fromObject(n);return Ls(t,new _s(um(),e,i))}function hr(t,e,n=!1){const r=nA(t.pendingWriteTree_,e);if(rA(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(te(),!0):Qe(r.children,o=>{s=s.set(new se(o),!0)}),Ls(t,new Ec(r.path,s,n))}else return[]}function mu(t,e,n){return Ls(t,new pi(hm(),e,n))}function jA(t,e,n){const r=oe.fromObject(n);return Ls(t,new _s(hm(),e,r))}function BA(t,e){return Ls(t,new ta(hm(),e))}function zA(t,e,n){const r=_m(t,n);if(r){const i=wm(r),s=i.path,o=i.queryId,a=vt(s,e),l=new ta(dm(o),a);return Em(t,s,l)}else return[]}function mf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||HE(o,e))){const l=DA(o,e,n,r);AA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>Nr(g));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=WA(f);for(let y=0;y<g.length;++y){const _=g[y],x=_.query,m=qE(t,_);t.listenProvider_.startListening(xo(x),Ic(t,x),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(xo(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(gu(f));t.listenProvider_.stopListening(xo(f),g)}))}KA(t,c)}return a}function VA(t,e,n,r){const i=_m(t,r);if(i!=null){const s=wm(i),o=s.path,a=s.queryId,l=vt(o,e),c=new pi(dm(a),l,n);return Em(t,o,c)}else return[]}function HA(t,e,n,r){const i=_m(t,r);if(i){const s=wm(i),o=s.path,a=s.queryId,l=vt(o,e),c=oe.fromObject(n),u=new _s(dm(a),l,c);return Em(t,o,u)}else return[]}function $v(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const y=vt(f,i);s=s||ss(g,y),o=o||Nr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Nr(a),s=s||ss(a,te())):(a=new bA,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const _=ss(y,te());_&&(s=s.updateImmediateChild(g,_))}));const c=HE(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=gu(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=GA();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=fm(t.pendingWriteTree_,i);let d=LA(a,e,n,u,s,l);if(!c&&!o&&!r){const f=VE(a,e);d=d.concat(qA(t,e,f))}return d}function vm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=vt(o,e),c=ss(a,l);if(c)return c});return ME(i,e,s,n,!0)}function Ls(t,e){return KE(e,t.syncPointTree_,null,fm(t.pendingWriteTree_,te()))}function KE(t,e,n,r){if(Y(t.path))return GE(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=ss(i,te()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=FE(r,o);s=s.concat(KE(a,l,c,u))}return i&&(s=s.concat(ym(i,t,r,n))),s}}function GE(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=ss(i,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=FE(r,o),u=t.operationForChild(o);u&&(s=s.concat(GE(u,a,l,c)))}),i&&(s=s.concat(ym(i,t,r,n))),s}function qE(t,e){const n=e.query,r=Ic(t,n);return{hashFn:()=>(kA(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?zA(t,n._path,r):BA(t,n._path);{const s=jR(i,n);return mf(t,n,null,s)}}}}function Ic(t,e){const n=gu(e);return t.queryToTagMap.get(n)}function gu(t){return t._path.toString()+"$"+t._queryIdentifier}function _m(t,e){return t.tagToQueryMap.get(e)}function wm(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Em(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=fm(t.pendingWriteTree_,e);return ym(r,n,i,null)}function WA(t){return t.fold((e,n,r)=>{if(n&&Nr(n))return[pu(n)];{let i=[];return n&&(i=zE(n)),Qe(r,(s,o)=>{i=i.concat(o)}),i}})}function xo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(FA())(t._repo,t._path):t}function KA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=gu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function GA(){return UA++}function qA(t,e,n){const r=e._path,i=Ic(t,e),s=qE(t,n),o=t.listenProvider_.startListening(xo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!Nr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Y(c)&&u&&Nr(u))return[pu(u).query];{let f=[];return u&&(f=f.concat(zE(u).map(g=>g.query))),Qe(d,(g,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(xo(u),Ic(t,u))}}return o}/**
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
 */class Cm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cm(n)}node(){return this.node_}}class xm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new xm(this.syncTree_,n)}node(){return vm(this.syncTree_,this.path_)}}const YA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jv=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return XA(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},XA=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},YE=function(t,e,n,r){return Sm(e,new xm(n,t),r)},QE=function(t,e,n){return Sm(t,new Cm(e),n)};function Sm(t,e,n){const r=t.getPriority().val(),i=jv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,$e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(we,(a,l)=>{const c=Sm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class km{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Tm(t,e){let n=e instanceof se?e:new se(e),r=t,i=K(n);for(;i!==null;){const s=gs(r.node.children,i)||{children:{},childCount:0};r=new km(i,r,s),n=ae(n),i=K(n)}return r}function Ds(t){return t.node.value}function XE(t,e){t.node.value=e,gf(t)}function JE(t){return t.node.childCount>0}function JA(t){return Ds(t)===void 0&&!JE(t)}function yu(t,e){Qe(t.node.children,(n,r)=>{e(new km(n,t,r))})}function ZE(t,e,n,r){n&&!r&&e(t),yu(t,i=>{ZE(i,e,!0,r)}),n&&r&&e(t)}function ZA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ia(t){return new se(t.parent===null?t.name:Ia(t.parent)+"/"+t.name)}function gf(t){t.parent!==null&&eO(t.parent,t.name,t)}function eO(t,e,n){const r=JA(n),i=Cn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gf(t))}/**
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
 */const tO=/[\[\].#$\/\u0000-\u001F\u007F]/,nO=/[\[\].#$\u0000-\u001F\u007F]/,Rh=10*1024*1024,Im=function(t){return typeof t=="string"&&t.length!==0&&!tO.test(t)},eC=function(t){return typeof t=="string"&&t.length!==0&&!nO.test(t)},rO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eC(t)},iO=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zp(t)||t&&typeof t=="object"&&Cn(t,".sv")},tC=function(t,e,n,r){r&&e===void 0||vu(au(t,"value"),e,n)},vu=function(t,e,n){const r=n instanceof se?new wP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Br(r));if(typeof e=="function")throw new Error(t+"contains a function "+Br(r)+" with contents = "+e.toString());if(Zp(e))throw new Error(t+"contains "+e.toString()+" "+Br(r));if(typeof e=="string"&&e.length>Rh/3&&lu(e)>Rh)throw new Error(t+"contains a string greater than "+Rh+" utf8 bytes "+Br(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Im(o)))throw new Error(t+" contains an invalid key ("+o+") "+Br(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EP(r,o),vu(t,a,r),CP(r)}),i&&s)throw new Error(t+' contains ".value" child '+Br(r)+" in addition to actual children.")}},sO=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Xo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Im(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_P);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&zt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},oO=function(t,e,n,r){if(r&&e===void 0)return;const i=au(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Qe(e,(o,a)=>{const l=new se(o);if(vu(i,a,_e(n,l)),im(l)===".priority"&&!iO(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),sO(i,s)},nC=function(t,e,n,r){if(!(r&&n===void 0)&&!eC(n))throw new Error(au(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nC(t,e,n,r)},Nm=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Im(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rO(n))throw new Error(au(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _u(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!sm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function rC(t,e,n){_u(t,n),iC(t,r=>sm(r,e))}function ln(t,e,n){_u(t,n),iC(t,r=>zt(r,e)||zt(e,r))}function iC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(uO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ti&&We("event: "+n.toString()),Os(r)}}}/**
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
 */const hO="repo_interrupt",dO=25;class fO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wc(),this.transactionQueueTree_=new km,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pO(t,e,n){if(t.stats_=nm(t.repoInfo_),t.forceRestClient_||HR())t.server_=new _c(t.repoInfo_,(r,i,s,o)=>{Bv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>zv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(r,i,s,o)=>{Bv(t,r,i,s,o)},r=>{zv(t,r)},r=>{mO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=YR(t.repoInfo_,()=>new qP(t.stats_,t.server_)),t.infoData_=new VP,t.infoSyncTree_=new Uv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=mu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bm(t,"connected",!1),t.serverSyncTree_=new Uv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);ln(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function sC(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wu(t){return YA({timestamp:sC(t)})}function Bv(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ac(n,c=>$e(c));o=HA(t.serverSyncTree_,s,l,i)}else{const l=$e(n);o=VA(t.serverSyncTree_,s,l,i)}else if(r){const l=ac(n,c=>$e(c));o=jA(t.serverSyncTree_,s,l)}else{const l=$e(n);o=mu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Es(t,s)),ln(t.eventQueue_,a,o)}function zv(t,e){bm(t,"connected",e),e===!1&&vO(t)}function mO(t,e){Qe(e,(n,r)=>{bm(t,n,r)})}function bm(t,e,n){const r=new se("/.info/"+e),i=$e(n);t.infoData_.updateSnapshot(r,i);const s=mu(t.infoSyncTree_,r,i);ln(t.eventQueue_,r,s)}function Rm(t){return t.nextWriteId_++}function gO(t,e,n,r,i){Eu(t,"set",{path:e.toString(),value:n,priority:r});const s=wu(t),o=$e(n,r),a=vm(t.serverSyncTree_,e),l=QE(o,a,s),c=Rm(t),u=WE(t.serverSyncTree_,e,l,c,!0);_u(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||ct("set at "+e+" failed: "+f);const _=hr(t.serverSyncTree_,c,!y);ln(t.eventQueue_,e,_),yf(t,i,f,g)});const d=Am(t,e);Es(t,d),ln(t.eventQueue_,d,[])}function yO(t,e,n,r){Eu(t,"update",{path:e.toString(),value:n});let i=!0;const s=wu(t),o={};if(Qe(n,(a,l)=>{i=!1,o[a]=YE(_e(e,a),$e(l),t.serverSyncTree_,s)}),i)We("update() called with empty data.  Don't do anything."),yf(t,r,"ok",void 0);else{const a=Rm(t),l=$A(t.serverSyncTree_,e,o,a);_u(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||ct("update at "+e+" failed: "+c);const f=hr(t.serverSyncTree_,a,!d),g=f.length>0?Es(t,e):e;ln(t.eventQueue_,g,f),yf(t,r,c,u)}),Qe(n,c=>{const u=Am(t,_e(e,c));Es(t,u)}),ln(t.eventQueue_,e,[])}}function vO(t){Eu(t,"onDisconnectEvents");const e=wu(t),n=wc();lf(t.onDisconnect_,te(),(i,s)=>{const o=YE(i,s,t.serverSyncTree_,e);AE(n,i,o)});let r=[];lf(n,te(),(i,s)=>{r=r.concat(mu(t.serverSyncTree_,i,s));const o=Am(t,i);Es(t,o)}),t.onDisconnect_=wc(),ln(t.eventQueue_,te(),r)}function _O(t,e,n){let r;K(e._path)===".info"?r=$v(t.infoSyncTree_,e,n):r=$v(t.serverSyncTree_,e,n),rC(t.eventQueue_,e._path,r)}function Vv(t,e,n){let r;K(e._path)===".info"?r=mf(t.infoSyncTree_,e,n):r=mf(t.serverSyncTree_,e,n),rC(t.eventQueue_,e._path,r)}function wO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hO)}function Eu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function yf(t,e,n,r){e&&Os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function oC(t,e,n){return vm(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Pm(t,e=t.transactionQueueTree_){if(e||Cu(t,e),Ds(e)){const n=lC(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EO(t,Ia(e),n)}else JE(e)&&yu(e,n=>{Pm(t,n)})}function EO(t,e,n){const r=n.map(c=>c.currentWriteId),i=oC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=vt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Eu(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(hr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Cu(t,Tm(t.transactionQueueTree_,e)),Pm(t,t.transactionQueueTree_),ln(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Os(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Es(t,e)}},o)}function Es(t,e){const n=aC(t,e),r=Ia(n),i=lC(t,n);return CO(t,i,r),r}function CO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=vt(n,l.path);let u=!1,d;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dO)u=!0,d="maxretry",i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=oC(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){vu("transaction failed: Data returned ",g,l.path);let y=$e(g);typeof g=="object"&&g!=null&&Cn(g,".priority")||(y=y.updatePriority(f.getPriority()));const x=l.currentWriteId,m=wu(t),p=QE(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=Rm(t),o.splice(o.indexOf(x),1),i=i.concat(WE(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(hr(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0))}ln(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Cu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Os(r[a]);Pm(t,t.transactionQueueTree_)}function aC(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&Ds(r)===void 0;)r=Tm(r,n),e=ae(e),n=K(e);return r}function lC(t,e){const n=[];return cC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cC(t,e,n){const r=Ds(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yu(e,i=>{cC(t,i,n)})}function Cu(t,e){const n=Ds(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,XE(e,n.length>0?n:void 0)}yu(e,r=>{Cu(t,r)})}function Am(t,e){const n=Ia(aC(t,e)),r=Tm(t.transactionQueueTree_,e);return ZA(r,i=>{Ph(t,i)}),Ph(t,r),ZE(r,i=>{Ph(t,i)}),n}function Ph(t,e){const n=Ds(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?XE(e,void 0):n.length=s+1,ln(t.eventQueue_,Ia(e),i);for(let o=0;o<r.length;o++)Os(r[o])}}/**
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
 */function xO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function SO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hv=function(t,e){const n=kO(t),r=n.namespace;n.domain==="firebase.com"&&Bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},kO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=xO(t.substring(u,d)));const f=SO(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Wv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",TO=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Wv.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Wv.charAt(e[i]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class uC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class hC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class IO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Om{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:im(this._path)}get ref(){return new Wn(this._repo,this._path)}get _queryIdentifier(){const e=Nv(this._queryParams),n=em(e);return n==="{}"?"default":n}get _queryObject(){return Nv(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof Om))return!1;const n=this._repo===e._repo,r=sm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vP(this._path)}}class Wn extends Om{constructor(e,n){super(e,n,new cm,!1)}get parent(){const e=SE(this._path);return e===null?null:new Wn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class na{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Cs(this.ref,e);return new na(this._node.getChild(n),r,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new na(i,Cs(this.ref,r),we)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cn(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?Cs(t._root,e):t._root}function Cs(t,e){return t=be(t),K(t._path)===null?aO("child","path",e,!1):nC("child","path",e,!1),new Wn(t._repo,_e(t._path,e))}function dC(t,e){t=be(t),Nm("push",t._path),tC("push",e,t._path,!0);const n=sC(t._repo),r=TO(n),i=Cs(t,r),s=Cs(t,r);let o;return e!=null?o=pC(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function fC(t){return Nm("remove",t._path),pC(t,null)}function pC(t,e){t=be(t),Nm("set",t._path),tC("set",e,t._path,!1);const n=new va;return gO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function NO(t,e){oO("update",e,t._path,!1);const n=new va;return yO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Lm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new uC("value",this,new na(e.snapshotNode,new Wn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hC(this,e,n):null}matches(e){return e instanceof Lm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Dm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hC(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Cs(new Wn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new uC(e.type,this,new na(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Dm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Na(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Vv(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new IO(n,s||void 0),a=e==="value"?new Lm(o):new Dm(e,o);return _O(t._repo,t,a),()=>Vv(t._repo,t,a)}function Ar(t,e,n,r){return Na(t,"value",e,n,r)}function bO(t,e,n,r){return Na(t,"child_added",e,n,r)}function RO(t,e,n,r){return Na(t,"child_changed",e,n,r)}function PO(t,e,n,r){return Na(t,"child_moved",e,n,r)}function AO(t,e,n,r){return Na(t,"child_removed",e,n,r)}RA(Wn);MA(Wn);/**
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
 */const OO="FIREBASE_DATABASE_EMULATOR_HOST",vf={};let LO=!1;function DO(t,e,n,r){t.repoInfo_=new mE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function MO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hv(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[OO]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Hv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new rs(rs.OWNER):new KR(t.name,t.options,e);lO("Invalid Firebase Database URL",o),Y(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=UO(a,t,u,new WR(t.name,n));return new $O(d,t)}function FO(t,e){const n=vf[e];(!n||n[t.key]!==t)&&Bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wO(t),delete n[t.key]}function UO(t,e,n,r){let i=vf[e.name];i||(i={},vf[e.name]=i);let s=i[t.toURLString()];return s&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fO(t,LO,n,r),i[t.toURLString()]=s,s}class $O{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function Or(t=zp(),e){const n=bs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=s1("database");r&&jO(n,...r)}return n}function jO(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rs(rs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:l1(r.mockUserToken,t.app.options.projectId);s=new rs(o)}DO(i,e,n,s)}/**
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
 */function BO(t){RR(Hn),Kt(new Ot("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return MO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ne(hv,dv,t),Ne(hv,dv,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BO();function mC(t){const{vacancyData:e}=t,{vacancyTitle:n,typeVacancy:r,areaVacancy:i,locationPlace:s,typeLocation:o}=e;return w("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-2",children:[w("div",{children:[h("span",{className:"text-slate-400 text-sm",children:i}),h("h3",{className:"font-bold mt-px text-gray-100",children:n}),w("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm min-w-fit",children:r}),w("span",{className:"text-slate-400 text-sm flex gap-1 items-center",children:[w("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),o,", ",s]})]})]}),h("div",{children:t.children})]})}const zO="_dropdown_wrapper_11cw3_1",VO="_dropdown_item_list_11cw3_11",HO="_active_11cw3_33",WO="_item_list_11cw3_43";function Kv({items:t=[],dropdownTitle:e}){const n=S.useRef(null),r=S.useRef(null),[i,s]=S.useState(!1),o=()=>{s(!i)},a=c=>{c.key==="Escape"&&i&&s(!1)},l=c=>{if(r.current){if(r.current.contains(c.target)||n.current.contains(c.target))return;s(!1)}};return S.useEffect(()=>{i&&r.current.querySelector("button").focus(),document.addEventListener("mousedown",l)},[i]),w("div",{className:zO,onKeyUp:a,children:[w("button",{className:"h-fit py-1 px-2 rounded text-gray-400 bg-[#ffffff17] font-medium text-sm text-center inline-flex items-center ml-2 my-1","aria-haspopup":"true","aria-controls":e,onClick:o,ref:n,children:[e," ",i?w("svg",{height:"24",fill:"rgb(70,70,70)",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"m0 0h24v24h-24z",fill:"none"}),h("path",{d:"m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"})]}):w("svg",{height:"24",fill:"rgb(70,70,70)",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"m0 0h24v24h-24z",fill:"none"}),h("path",{d:"m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"})]})]}),h("ul",{ref:r,className:`${VO} ${i?HO:""} `,children:t.map((c,u)=>h("li",{className:WO,children:h("button",{className:"w-full py-1 px-4 text-gray-100 hover:bg-[#ffffff42] ml-0 animate-pulse hover:animate-none",type:"submit",value:c.anchor,onClick:c.slug,children:c.anchor})},u))})]})}function KO(){const[t,e]=S.useState([]),[n,r]=S.useState(""),[i,s]=S.useState([]),o=Or(),a=cn(o,"/vacancy");S.useEffect(()=>Ar(a,y=>{const _=y.val();y.exists()&&Object.entries(_).forEach(([x,m])=>{m.id=x,e(p=>[...p,m]),s(p=>[...p,m])})}),[]);const l=y=>{const _=i.filter(x=>{if(x.vacancyTitle.toLowerCase().includes(y.toLowerCase())||x.areaVacancy.toLowerCase().includes(y.toLowerCase())||x.categoryVacancy.toLowerCase().includes(y.toLowerCase())||x.subcategoryVacancy.toLowerCase().includes(y.toLowerCase()))return x});e(_)},c=y=>{const _=i.filter(x=>{if(x.typeLocation.toLowerCase().includes(y.toLowerCase())||x.typeVacancy.toLowerCase().includes(y.toLowerCase()))return x});e(_)},u=y=>{r(y.target.value.toLowerCase()),l(y.target.value)},d=y=>{const _=y.target.value;r(_.toLowerCase()),c(_)};return w(wn,{children:[w("article",{className:"flex justify-center flex-col items-center pb-20 px-2",children:[h("header",{className:"flex justify-center items-center w-full md:max-w-3xl 2xl:max-w-4xl lg:mt-[-113px]",children:w("section",{className:"w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6",children:[h("aside",{className:"grid grid-cols-3 gap-0 rounded",children:h("div",{className:"col-span-3 p-2 rounded",children:w("div",{className:" flex border border-gray-700 rounded-lg bg-gray-200 items-center p-2 hover:bg-gray-300",children:[h("span",{className:"material-symbols-outlined text-gray-800",children:"search"}),h("input",{onChange:u,placeholder:"Type your search term here... ↩",className:"bg-transparent w-full focus:outline-none border-none text-gray-800",type:"search"})]})})}),w("aside",{className:"flex flex-wrap md:flex-row text-gray-100",children:[h("div",{className:"flex items-center",children:h("p",{children:"FILTER BY:"})}),h(Kv,{dropdownTitle:"LOCATION TYPE",items:[{slug:d,anchor:"On-site"},{slug:d,anchor:"Hybrid"},{slug:d,anchor:"Remote"}]}),h(Kv,{dropdownTitle:"WORK TYPE",items:[{slug:d,anchor:"Full Time"},{slug:d,anchor:"Half Time"}]})]})]})}),h("div",{className:"w-full max-w-4xl",children:t.sort((y,_)=>y.name>_.name?-1:1).map(y=>h(mC,{vacancyData:y,children:h(ci,{to:y.id,children:w("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse",children:["Apply Now",h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})},y.id))})]}),h("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function GO(){return h(wn,{children:h(an,{logOut:h(Z1,{}),content:h(KO,{})})})}function qO(){const[t,e]=S.useState({}),{id:n}=su(),r=Or(),i=cn(r,`/vacancy/${n}`),{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:u,content:d,salaryVacancy:f,categoryVacancy:g,subcategoryVacancy:y,requiredVacancy:_}=t,x=new Date,m=`${x.getFullYear()}-${x.getMonth()+1}-${x.getDate()}`,p=new Date(m),v=new Date(s),C=864e5,R=(p-v)/C;return S.useEffect(()=>{Ar(i,b=>{e(b.val())})},[]),h(an,{content:h("main",{className:"flex justify-center flex-col items-center mb-8  ",children:w("section",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[w("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[w("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[o,h("span",{className:"text-slate-500 text-sm font-light",children:s==m?"Hoy":`Hace  ${Math.trunc(R)}  días`})]}),h("p",{className:"font-bold text-gray-200",children:f}),w("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[w("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),l,", ",c]}),w("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:a}),h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:u})]})]}),w("article",{className:"py-2",children:[w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),w("p",{children:[h("span",{className:"text-gray-100",children:"Categoría: "}),w("span",{className:"text-gray-300",children:[" ",g]})]}),w("p",{children:[h("span",{className:"text-gray-100",children:"Subcategoría: "}),w("span",{className:"text-gray-300",children:[" ",y]})]}),w("p",{children:[w("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),w("span",{className:"text-gray-300",children:[" ",_]})]})]}),w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),h("p",{className:"text-gray-300",children:d})]})]}),h(ci,{to:"apply",children:h("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse",children:"Apply Now"})})]})})})}var gC={exports:{}};(function(t,e){(function(n,r){t.exports=r(S)})(pS,n=>(()=>{var r={703:(a,l,c)=>{var u=c(414);function d(){}function f(){}f.resetWarningCache=d,a.exports=function(){function g(x,m,p,v,C,I){if(I!==u){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}function y(){return g}g.isRequired=g;var _={array:g,bigint:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:y,element:g,elementType:g,instanceOf:y,node:g,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:f,resetWarningCache:d};return _.PropTypes=_,_}},697:(a,l,c)=>{a.exports=c(703)()},414:a=>{a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var c=i[a]={exports:{}};return r[a](c,c.exports,s),c.exports}s.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return s.d(l,{a:l}),l},s.d=(a,l)=>{for(var c in l)s.o(l,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:l[c]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{default:()=>Re});var a=s(98),l=s.n(a),c=s(697),u=s.n(c);function d(){return d=Object.assign?Object.assign.bind():function(D){for(var $=1;$<arguments.length;$++){var q=arguments[$];for(var X in q)Object.prototype.hasOwnProperty.call(q,X)&&(D[X]=q[X])}return D},d.apply(this,arguments)}var f=function(D){var $=D.pageClassName,q=D.pageLinkClassName,X=D.page,xt=D.selected,Te=D.activeClassName,A=D.activeLinkClassName,k=D.getEventListener,E=D.pageSelectedHandler,F=D.href,O=D.extraAriaContext,z=D.pageLabelBuilder,W=D.rel,he=D.ariaLabel||"Page "+X+(O?" "+O:""),pe=null;return xt&&(pe="page",he=D.ariaLabel||"Page "+X+" is your current page",$=$!==void 0?$+" "+Te:Te,q!==void 0?A!==void 0&&(q=q+" "+A):q=A),l().createElement("li",{className:$},l().createElement("a",d({rel:W,role:F?void 0:"button",className:q,href:F,tabIndex:xt?"-1":"0","aria-label":he,"aria-current":pe,onKeyPress:E},k(E)),z(X)))};f.propTypes={pageSelectedHandler:u().func.isRequired,selected:u().bool.isRequired,pageClassName:u().string,pageLinkClassName:u().string,activeClassName:u().string,activeLinkClassName:u().string,extraAriaContext:u().string,href:u().string,ariaLabel:u().string,page:u().number.isRequired,getEventListener:u().func.isRequired,pageLabelBuilder:u().func.isRequired,rel:u().string};const g=f;function y(){return y=Object.assign?Object.assign.bind():function(D){for(var $=1;$<arguments.length;$++){var q=arguments[$];for(var X in q)Object.prototype.hasOwnProperty.call(q,X)&&(D[X]=q[X])}return D},y.apply(this,arguments)}var _=function(D){var $=D.breakLabel,q=D.breakAriaLabel,X=D.breakClassName,xt=D.breakLinkClassName,Te=D.breakHandler,A=D.getEventListener,k=X||"break";return l().createElement("li",{className:k},l().createElement("a",y({className:xt,role:"button",tabIndex:"0","aria-label":q,onKeyPress:Te},A(Te)),$))};_.propTypes={breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabel:u().string,breakClassName:u().string,breakLinkClassName:u().string,breakHandler:u().func.isRequired,getEventListener:u().func.isRequired};const x=_;function m(D){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return D??$}function p(D){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function($){return typeof $}:function($){return $&&typeof Symbol=="function"&&$.constructor===Symbol&&$!==Symbol.prototype?"symbol":typeof $},p(D)}function v(){return v=Object.assign?Object.assign.bind():function(D){for(var $=1;$<arguments.length;$++){var q=arguments[$];for(var X in q)Object.prototype.hasOwnProperty.call(q,X)&&(D[X]=q[X])}return D},v.apply(this,arguments)}function C(D,$){for(var q=0;q<$.length;q++){var X=$[q];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(D,X.key,X)}}function I(D,$){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(q,X){return q.__proto__=X,q},I(D,$)}function R(D,$){if($&&(p($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b(D)}function b(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function P(D){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function($){return $.__proto__||Object.getPrototypeOf($)},P(D)}function j(D,$,q){return $ in D?Object.defineProperty(D,$,{value:q,enumerable:!0,configurable:!0,writable:!0}):D[$]=q,D}var U=function(D){(function(k,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(E&&E.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),E&&I(k,E)})(A,D);var $,q,X,xt,Te=(X=A,xt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var k,E=P(X);if(xt){var F=P(this).constructor;k=Reflect.construct(E,arguments,F)}else k=E.apply(this,arguments);return R(this,k)});function A(k){var E,F;return function(O,z){if(!(O instanceof z))throw new TypeError("Cannot call a class as a function")}(this,A),j(b(E=Te.call(this,k)),"handlePreviousPage",function(O){var z=E.state.selected;E.handleClick(O,null,z>0?z-1:void 0,{isPrevious:!0})}),j(b(E),"handleNextPage",function(O){var z=E.state.selected,W=E.props.pageCount;E.handleClick(O,null,z<W-1?z+1:void 0,{isNext:!0})}),j(b(E),"handlePageSelected",function(O,z){if(E.state.selected===O)return E.callActiveCallback(O),void E.handleClick(z,null,void 0,{isActive:!0});E.handleClick(z,null,O)}),j(b(E),"handlePageChange",function(O){E.state.selected!==O&&(E.setState({selected:O}),E.callCallback(O))}),j(b(E),"getEventListener",function(O){return j({},E.props.eventListener,O)}),j(b(E),"handleClick",function(O,z,W){var he=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},pe=he.isPrevious,it=pe!==void 0&&pe,bi=he.isNext,$s=bi!==void 0&&bi,Mr=he.isBreak,Mt=Mr!==void 0&&Mr,Gn=he.isActive,qn=Gn!==void 0&&Gn;O.preventDefault?O.preventDefault():O.returnValue=!1;var Yn=E.state.selected,xe=E.props.onClick,Ft=W;if(xe){var St=xe({index:z,selected:Yn,nextSelectedPage:W,event:O,isPrevious:it,isNext:$s,isBreak:Mt,isActive:qn});if(St===!1)return;Number.isInteger(St)&&(Ft=St)}Ft!==void 0&&E.handlePageChange(Ft)}),j(b(E),"handleBreakClick",function(O,z){var W=E.state.selected;E.handleClick(z,O,W<O?E.getForwardJump():E.getBackwardJump(),{isBreak:!0})}),j(b(E),"callCallback",function(O){E.props.onPageChange!==void 0&&typeof E.props.onPageChange=="function"&&E.props.onPageChange({selected:O})}),j(b(E),"callActiveCallback",function(O){E.props.onPageActive!==void 0&&typeof E.props.onPageActive=="function"&&E.props.onPageActive({selected:O})}),j(b(E),"getElementPageRel",function(O){var z=E.state.selected,W=E.props,he=W.nextPageRel,pe=W.prevPageRel,it=W.selectedPageRel;return z-1===O?pe:z===O?it:z+1===O?he:void 0}),j(b(E),"pagination",function(){var O=[],z=E.props,W=z.pageRangeDisplayed,he=z.pageCount,pe=z.marginPagesDisplayed,it=z.breakLabel,bi=z.breakClassName,$s=z.breakLinkClassName,Mr=z.breakAriaLabels,Mt=E.state.selected;if(he<=W)for(var Gn=0;Gn<he;Gn++)O.push(E.getPageElement(Gn));else{var qn=W/2,Yn=W-qn;Mt>he-W/2?qn=W-(Yn=he-Mt):Mt<W/2&&(Yn=W-(qn=Mt));var xe,Ft,St=function(Qn){return E.getPageElement(Qn)},Pe=[];for(xe=0;xe<he;xe++){var $a=xe+1;if($a<=pe)Pe.push({type:"page",index:xe,display:St(xe)});else if($a>he-pe)Pe.push({type:"page",index:xe,display:St(xe)});else if(xe>=Mt-qn&&xe<=Mt+(Mt===0&&W>1?Yn-1:Yn))Pe.push({type:"page",index:xe,display:St(xe)});else if(it&&Pe.length>0&&Pe[Pe.length-1].display!==Ft&&(W>0||pe>0)){var Bu=xe<Mt?Mr.backward:Mr.forward;Ft=l().createElement(x,{key:xe,breakAriaLabel:Bu,breakLabel:it,breakClassName:bi,breakLinkClassName:$s,breakHandler:E.handleBreakClick.bind(null,xe),getEventListener:E.getEventListener}),Pe.push({type:"break",index:xe,display:Ft})}}Pe.forEach(function(Qn,Xn){var ja=Qn;Qn.type==="break"&&Pe[Xn-1]&&Pe[Xn-1].type==="page"&&Pe[Xn+1]&&Pe[Xn+1].type==="page"&&Pe[Xn+1].index-Pe[Xn-1].index<=2&&(ja={type:"page",index:Qn.index,display:St(Qn.index)}),O.push(ja.display)})}return O}),k.initialPage!==void 0&&k.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(k.initialPage,") and forcePage (").concat(k.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),F=k.initialPage?k.initialPage:k.forcePage?k.forcePage:0,E.state={selected:F},E}return $=A,(q=[{key:"componentDidMount",value:function(){var k=this.props,E=k.initialPage,F=k.disableInitialCallback,O=k.extraAriaContext,z=k.pageCount,W=k.forcePage;E===void 0||F||this.callCallback(E),O&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(z)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(z,"). Did you forget a Math.ceil()?")),E!==void 0&&E>z-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(E," > ").concat(z-1,").")),W!==void 0&&W>z-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(W," > ").concat(z-1,")."))}},{key:"componentDidUpdate",value:function(k){this.props.forcePage!==void 0&&this.props.forcePage!==k.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(k.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var k=this.state.selected,E=this.props,F=E.pageCount,O=k+E.pageRangeDisplayed;return O>=F?F-1:O}},{key:"getBackwardJump",value:function(){var k=this.state.selected-this.props.pageRangeDisplayed;return k<0?0:k}},{key:"getElementHref",value:function(k){var E=this.props,F=E.hrefBuilder,O=E.pageCount,z=E.hrefAllControls;if(F)return z||k>=0&&k<O?F(k+1,O,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(k){var E=k===this.state.selected;if(this.props.ariaLabelBuilder&&k>=0&&k<this.props.pageCount){var F=this.props.ariaLabelBuilder(k+1,E);return this.props.extraAriaContext&&!E&&(F=F+" "+this.props.extraAriaContext),F}}},{key:"getPageElement",value:function(k){var E=this.state.selected,F=this.props,O=F.pageClassName,z=F.pageLinkClassName,W=F.activeClassName,he=F.activeLinkClassName,pe=F.extraAriaContext,it=F.pageLabelBuilder;return l().createElement(g,{key:k,pageSelectedHandler:this.handlePageSelected.bind(null,k),selected:E===k,rel:this.getElementPageRel(k),pageClassName:O,pageLinkClassName:z,activeClassName:W,activeLinkClassName:he,extraAriaContext:pe,href:this.getElementHref(k),ariaLabel:this.ariaLabelBuilder(k),page:k+1,pageLabelBuilder:it,getEventListener:this.getEventListener})}},{key:"render",value:function(){var k=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&k!==void 0)return k&&k(this.props);var E=this.props,F=E.disabledClassName,O=E.disabledLinkClassName,z=E.pageCount,W=E.className,he=E.containerClassName,pe=E.previousLabel,it=E.previousClassName,bi=E.previousLinkClassName,$s=E.previousAriaLabel,Mr=E.prevRel,Mt=E.nextLabel,Gn=E.nextClassName,qn=E.nextLinkClassName,Yn=E.nextAriaLabel,xe=E.nextRel,Ft=this.state.selected,St=Ft===0,Pe=Ft===z-1,$a="".concat(m(it)).concat(St?" ".concat(m(F)):""),Bu="".concat(m(Gn)).concat(Pe?" ".concat(m(F)):""),Qn="".concat(m(bi)).concat(St?" ".concat(m(O)):""),Xn="".concat(m(qn)).concat(Pe?" ".concat(m(O)):""),ja=St?"true":"false",dS=Pe?"true":"false";return l().createElement("ul",{className:W||he,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:$a},l().createElement("a",v({className:Qn,href:this.getElementHref(Ft-1),tabIndex:St?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ja,"aria-label":$s,rel:Mr},this.getEventListener(this.handlePreviousPage)),pe)),this.pagination(),l().createElement("li",{className:Bu},l().createElement("a",v({className:Xn,href:this.getElementHref(Ft+1),tabIndex:Pe?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":dS,"aria-label":Yn,rel:xe},this.getEventListener(this.handleNextPage)),Mt)))}}])&&C($.prototype,q),Object.defineProperty($,"prototype",{writable:!1}),A}(a.Component);j(U,"propTypes",{pageCount:u().number.isRequired,pageRangeDisplayed:u().number,marginPagesDisplayed:u().number,previousLabel:u().node,previousAriaLabel:u().string,prevPageRel:u().string,prevRel:u().string,nextLabel:u().node,nextAriaLabel:u().string,nextPageRel:u().string,nextRel:u().string,breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabels:u().shape({forward:u().string,backward:u().string}),hrefBuilder:u().func,hrefAllControls:u().bool,onPageChange:u().func,onPageActive:u().func,onClick:u().func,initialPage:u().number,forcePage:u().number,disableInitialCallback:u().bool,containerClassName:u().string,className:u().string,pageClassName:u().string,pageLinkClassName:u().string,pageLabelBuilder:u().func,activeClassName:u().string,activeLinkClassName:u().string,previousClassName:u().string,nextClassName:u().string,previousLinkClassName:u().string,nextLinkClassName:u().string,disabledClassName:u().string,disabledLinkClassName:u().string,breakClassName:u().string,breakLinkClassName:u().string,extraAriaContext:u().string,ariaLabelBuilder:u().func,eventListener:u().string,renderOnZeroPageCount:u().func,selectedPageRel:u().string}),j(U,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(D){return D},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Re=U})(),o})())})(gC);var YO=gC.exports;const QO=R_(YO);var XO="firebase",JO="9.22.0";/**
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
 */Ne(XO,JO,"app");var ZO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Mm=Mm||{},H=ZO||self;function Nc(){}function xu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ba(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eL(t){return Object.prototype.hasOwnProperty.call(t,Ah)&&t[Ah]||(t[Ah]=++tL)}var Ah="closure_uid_"+(1e9*Math.random()>>>0),tL=0;function nL(t,e,n){return t.call.apply(t.bind,arguments)}function rL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=nL:et=rL,et.apply(null,arguments)}function al(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Lr(){this.s=this.s,this.o=this.o}var iL=0;Lr.prototype.s=!1;Lr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),iL!=0)&&eL(this)};Lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var sL=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Nc,e),H.removeEventListener("test",Nc,e)}catch{}return t}();function bc(t){return/^[\s\xa0]*$/.test(t)}var qv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Oh(t,e){return t<e?-1:t>e?1:0}function Su(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return Su().indexOf(t)!=-1}function Um(t){return Um[" "](t),t}Um[" "]=Nc;function vC(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var oL=fn("Opera"),ra=fn("Trident")||fn("MSIE"),_C=fn("Edge"),_f=_C||ra,wC=fn("Gecko")&&!(Su().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),aL=Su().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function EC(){var t=H.document;return t?t.documentMode:void 0}var wf;e:{var Lh="",Dh=function(){var t=Su();if(wC)return/rv:([^\);]+)(\)|;)/.exec(t);if(_C)return/Edge\/([\d\.]+)/.exec(t);if(ra)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aL)return/WebKit\/(\S+)/.exec(t);if(oL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dh&&(Lh=Dh?Dh[1]:""),ra){var Mh=EC();if(Mh!=null&&Mh>parseFloat(Lh)){wf=String(Mh);break e}}wf=Lh}var lL={};function cL(){return vC(lL,9,function(){let t=0;const e=qv(String(wf)).split("."),n=qv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Oh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Oh(i[2].length==0,s[2].length==0)||Oh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}H.document&&ra&&EC();function ia(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wC){e:{try{Um(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ia.$.h.call(this)}}Ve(ia,tt);var uL={2:"touch",3:"pen",4:"mouse"};ia.prototype.h=function(){ia.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ra="closure_listenable_"+(1e6*Math.random()|0),hL=0;function dL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++hL,this.fa=this.ia=!1}function ku(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $m(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CC(t){const e={};for(const n in t)e[n]=t[n];return e}const Yv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Yv.length;s++)n=Yv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Tu(t){this.src=t,this.g={},this.h=0}Tu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Cf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new dL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ef(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=yC(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ku(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var jm="closure_lm_"+(1e6*Math.random()|0),Fh={};function SC(t,e,n,r,i){if(r&&r.once)return TC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)SC(t,e[s],n,r,i);return null}return n=Vm(n),t&&t[Ra]?t.O(e,n,ba(r)?!!r.capture:!!r,i):kC(t,e,n,!1,r,i)}function kC(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ba(i)?!!i.capture:!!i,a=zm(t);if(a||(t[jm]=a=new Tu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=fL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(NC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fL(){function t(n){return e.call(t.src,t.listener,n)}const e=pL;return t}function TC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)TC(t,e[s],n,r,i);return null}return n=Vm(n),t&&t[Ra]?t.P(e,n,ba(r)?!!r.capture:!!r,i):kC(t,e,n,!0,r,i)}function IC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)IC(t,e[s],n,r,i);else r=ba(r)?!!r.capture:!!r,n=Vm(n),t&&t[Ra]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Cf(s,n,r,i),-1<n&&(ku(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=zm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cf(e,n,r,i)),(n=-1<t?e[t]:null)&&Bm(n))}function Bm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ra])Ef(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(NC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zm(e))?(Ef(n,t),n.h==0&&(n.src=null,e[jm]=null)):ku(t)}}}function NC(t){return t in Fh?Fh[t]:Fh[t]="on"+t}function pL(t,e){if(t.fa)t=!0;else{e=new ia(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bm(t),t=n.call(r,e)}return t}function zm(t){return t=t[jm],t instanceof Tu?t:null}var Uh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vm(t){return typeof t=="function"?t:(t[Uh]||(t[Uh]=function(e){return t.handleEvent(e)}),t[Uh])}function ze(){Lr.call(this),this.i=new Tu(this),this.S=this,this.J=null}Ve(ze,Lr);ze.prototype[Ra]=!0;ze.prototype.removeEventListener=function(t,e,n,r){IC(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;e=new tt(r,t),xC(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ll(o,r,!0,e)&&i}if(o=e.g=t,i=ll(o,r,!0,e)&&i,i=ll(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ll(o,r,!1,e)&&i}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ku(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ll(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ef(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hm=H.JSON.stringify;function mL(){var t=PC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gL{constructor(){this.h=this.g=null}add(e,n){const r=bC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new yL,t=>t.reset());class yL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vL(t){H.setTimeout(()=>{throw t},0)}function RC(t,e){xf||_L(),Sf||(xf(),Sf=!0),PC.add(t,e)}var xf;function _L(){var t=H.Promise.resolve(void 0);xf=function(){t.then(wL)}}var Sf=!1,PC=new gL;function wL(){for(var t;t=mL();){try{t.h.call(t.g)}catch(n){vL(n)}var e=bC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sf=!1}function Iu(t,e){ze.call(this),this.h=t||1,this.g=e||H,this.j=et(this.qb,this),this.l=Date.now()}Ve(Iu,ze);L=Iu.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(Wm(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Iu.$.N.call(this),Wm(this),delete this.g};function Km(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function AC(t){t.g=Km(()=>{t.g=null,t.i&&(t.i=!1,AC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EL extends Lr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:AC(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sa(t){Lr.call(this),this.h=t,this.g={}}Ve(sa,Lr);var Qv=[];function OC(t,e,n,r){Array.isArray(n)||(n&&(Qv[0]=n.toString()),n=Qv);for(var i=0;i<n.length;i++){var s=SC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LC(t){$m(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bm(e)},t),t.g={}}sa.prototype.N=function(){sa.$.N.call(this),LC(this)};sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nu(){this.g=!0}Nu.prototype.Ea=function(){this.g=!1};function CL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function xL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ki(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kL(t,n)+(r?" "+r:"")})}function SL(t,e){t.info(function(){return"TIMEOUT: "+e})}Nu.prototype.info=function(){};function kL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hm(n)}catch{return e}}var Ms={},Xv=null;function Gm(){return Xv=Xv||new ze}Ms.Ta="serverreachability";function DC(t){tt.call(this,Ms.Ta,t)}Ve(DC,tt);function oa(t){const e=Gm();qe(e,new DC(e))}Ms.STAT_EVENT="statevent";function MC(t,e){tt.call(this,Ms.STAT_EVENT,t),this.stat=e}Ve(MC,tt);function at(t){const e=Gm();qe(e,new MC(e,t))}Ms.Ua="timingevent";function FC(t,e){tt.call(this,Ms.Ua,t),this.size=e}Ve(FC,tt);function Pa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var qm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},TL={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ym(){}Ym.prototype.h=null;function Jv(t){return t.h||(t.h=t.i())}function IL(){}var Aa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qm(){tt.call(this,"d")}Ve(Qm,tt);function Xm(){tt.call(this,"c")}Ve(Xm,tt);var kf;function bu(){}Ve(bu,Ym);bu.prototype.g=function(){return new XMLHttpRequest};bu.prototype.i=function(){return{}};kf=new bu;function Oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sa(this),this.P=NL,t=_f?125:void 0,this.V=new Iu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new UC}function UC(){this.i=null,this.g="",this.h=!1}var NL=45e3,Tf={},Rc={};L=Oa.prototype;L.setTimeout=function(t){this.P=t};function If(t,e,n){t.L=1,t.v=Pu(zn(e)),t.s=n,t.S=!0,$C(t,null)}function $C(t,e){t.G=Date.now(),La(t),t.A=zn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),GC(n.i,"t",r),t.C=0,n=t.l.I,t.h=new UC,t.g=px(t.l,n?e:null,!t.s),0<t.O&&(t.M=new EL(et(t.Pa,t,t.g),t.O)),OC(t.U,t.g,"readystatechange",t.nb),e=t.I?CC(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oa(),CL(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Pn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=Pn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||_f||this.g&&(this.h.h||this.g.ja()||n_(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?oa(3):oa(2)),Ru(this);var n=this.g.da();this.aa=n;t:if(jC(this)){var r=n_(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),So(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bc(a)){var c=a;break t}}c=null}if(n=c)Ki(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nf(this,n);else{this.i=!1,this.o=3,at(12),Yr(this),So(this);break e}}this.S?(BC(this,u,o),_f&&this.i&&u==3&&(OC(this.U,this.V,"tick",this.mb),this.V.start())):(Ki(this.j,this.m,o,null),Nf(this,o)),u==4&&Yr(this),this.i&&!this.J&&(u==4?ux(this.l,this):(this.i=!1,La(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Yr(this),So(this)}}}catch{}finally{}};function jC(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function BC(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=bL(t,n),i==Rc){e==4&&(t.o=4,at(14),r=!1),Ki(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tf){t.o=4,at(15),Ki(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ki(t.j,t.m,i,null),Nf(t,i);jC(t)&&i!=Rc&&i!=Tf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ig(e),e.L=!0,at(11))):(Ki(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),So(t))}L.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.C<e.length&&(Ru(this),BC(this,t,e),this.i&&t!=4&&La(this))}};function bL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Rc:(n=Number(e.substring(n,r)),isNaN(n)?Tf:(r+=1,r+n>e.length?Rc:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Yr(this)};function La(t){t.Y=Date.now()+t.P,zC(t,t.P)}function zC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pa(et(t.lb,t),e)}function Ru(t){t.B&&(H.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(SL(this.j,this.A),this.L!=2&&(oa(),at(17)),Yr(this),this.o=2,So(this)):zC(this,this.Y-t)};function So(t){t.l.H==0||t.J||ux(t.l,t)}function Yr(t){Ru(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Wm(t.V),LC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Nf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||bf(n.h,t))){if(!t.K&&bf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Oc(n),Du(n);else break e;rg(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Pa(et(n.ib,n),6e3));if(1>=QC(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Qr(n,11)}else if((t.K||n.g==t)&&Oc(n),!bc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=c[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jm(s,s.h),s.h=null))}if(r.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,fe(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=fx(r,r.I?r.oa:null,r.Y),o.K){XC(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ru(a),La(a)),r.g=o}else lx(r);0<n.i.length&&Mu(n)}else c[0]!="stop"&&c[0]!="close"||Qr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Qr(n,7):ng(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}oa(4)}catch{}}function RL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function PL(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function VC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PL(t),r=RL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var HC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ni(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ni){this.h=e!==void 0?e:t.h,Pc(this,t.j),this.s=t.s,this.g=t.g,Ac(this,t.m),this.l=t.l,e=t.i;var n=new aa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zv(this,n),this.o=t.o}else t&&(n=String(t).match(HC))?(this.h=!!e,Pc(this,n[1]||"",!0),this.s=ao(n[2]||""),this.g=ao(n[3]||"",!0),Ac(this,n[4]),this.l=ao(n[5]||"",!0),Zv(this,n[6]||"",!0),this.o=ao(n[7]||"")):(this.h=!!e,this.i=new aa(null,this.h))}ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lo(e,e_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lo(e,e_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lo(n,n.charAt(0)=="/"?DL:LL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lo(n,FL)),t.join("")};function zn(t){return new ni(t)}function Pc(t,e,n){t.j=n?ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ac(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zv(t,e,n){e instanceof aa?(t.i=e,UL(t.i,t.h)):(n||(e=lo(e,ML)),t.i=new aa(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function Pu(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var e_=/[#\/\?@]/g,LL=/[#\?:]/g,DL=/[#\?]/g,ML=/[#\?@]/g,FL=/#/g;function aa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dr(t){t.g||(t.g=new Map,t.h=0,t.i&&AL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=aa.prototype;L.add=function(t,e){Dr(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function WC(t,e){Dr(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function KC(t,e){return Dr(t),e=Fs(t,e),t.g.has(e)}L.forEach=function(t,e){Dr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.sa=function(){Dr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){Dr(this);let e=[];if(typeof t=="string")KC(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Dr(this),this.i=null,t=Fs(this,t),KC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GC(t,e,n){WC(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),Fm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UL(t,e){e&&!t.j&&(Dr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(WC(this,r),GC(this,i,n))},t)),t.j=e}var $L=class{constructor(t,e){this.h=t,this.g=e}};function qC(t){this.l=t||jL,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jL=10;function YC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function QC(t){return t.h?1:t.g?t.g.size:0}function bf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jm(t,e){t.g?t.g.add(e):t.h=e}function XC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qC.prototype.cancel=function(){if(this.i=JC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function JC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fm(t.i)}function Zm(){}Zm.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Zm.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function BL(){this.g=new Zm}function zL(t,e,n){const r=n||"";try{VC(t,function(i,s){let o=i;ba(i)&&(o=Hm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function VL(t,e){const n=new Nu;if(H.Image){const r=new Image;r.onload=al(cl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=al(cl,n,r,"TestLoadImage: error",!1,e),r.onabort=al(cl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=al(cl,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function cl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Au(t){this.l=t.fc||null,this.j=t.ob||!1}Ve(Au,Ym);Au.prototype.g=function(){return new Ou(this.l,this.j)};Au.prototype.i=function(t){return function(){return t}}({});function Ou(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=eg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Ou,ze);var eg=0;L=Ou.prototype;L.open=function(t,e){if(this.readyState!=eg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,la(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=eg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ZC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ZC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Da(this):la(this),this.readyState==3&&ZC(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Da(this))};L.Ya=function(t){this.g&&(this.response=t,Da(this))};L.ka=function(){this.g&&Da(this)};function Da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,la(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function la(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ou.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var HL=H.JSON.parse;function ke(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ex,this.L=this.M=!1}Ve(ke,ze);var ex="",WL=/^https?$/i,KL=["POST","PUT"];L=ke.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kf.g(),this.C=this.u?Jv(this.u):Jv(kf),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){t_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=yC(KL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rx(this),0<this.B&&((this.L=GL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Km(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){t_(this,s)}};function GL(t){return ra&&cL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Mm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function t_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tx(t),Lu(t)}function tx(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Lu(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lu(this,!0)),ke.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?nx(this):this.kb())};L.kb=function(){nx(this)};function nx(t){if(t.h&&typeof Mm<"u"&&(!t.C[1]||Pn(t)!=4||t.da()!=2)){if(t.v&&Pn(t)==4)Km(t.La,0,t);else if(qe(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(HC)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!WL.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<Pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",tx(t)}}finally{Lu(t)}}}}function Lu(t,e){if(t.g){rx(t);const n=t.g,r=t.C[0]?Nc:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function rx(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),HL(e)}};function n_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ex:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ix(t){let e="";return $m(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function tg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ix(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sx(t){this.Ga=0,this.i=[],this.j=new Nu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Js("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Js("baseRetryDelayMs",5e3,t),this.hb=Js("retryDelaySeedMs",1e4,t),this.eb=Js("forwardChannelMaxRetries",2,t),this.xa=Js("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new qC(t&&t.concurrentRequestLimit),this.Ja=new BL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}L=sx.prototype;L.qa=8;L.H=1;function ng(t){if(ox(t),t.H==3){var e=t.W++,n=zn(t.G);fe(n,"SID",t.J),fe(n,"RID",e),fe(n,"TYPE","terminate"),Ma(t,n),e=new Oa(t,t.j,e,void 0),e.L=2,e.v=Pu(zn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=px(e.l,null),e.g.ha(e.v)),e.G=Date.now(),La(e)}dx(t)}function Du(t){t.g&&(ig(t),t.g.cancel(),t.g=null)}function ox(t){Du(t),t.u&&(H.clearTimeout(t.u),t.u=null),Oc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Mu(t){YC(t.h)||t.m||(t.m=!0,RC(t.Na,t),t.C=0)}function qL(t,e){return QC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pa(et(t.Na,t,e),hx(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Oa(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=CC(s),xC(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ax(this,i,e),n=zn(this.G),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),Ma(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ix(s)))+"&"+e:this.o&&tg(n,this.o,s)),Jm(this.h,i),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),i.ba=!0,If(i,n,null)):If(i,n,e),this.H=2}}else this.H==3&&(t?r_(this,t):this.i.length==0||YC(this.h)||r_(this))};function r_(t,e){var n;e?n=e.m:n=t.W++;const r=zn(t.G);fe(r,"SID",t.J),fe(r,"RID",n),fe(r,"AID",t.V),Ma(t,r),t.o&&t.s&&tg(r,t.o,t.s),n=new Oa(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=ax(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jm(t.h,n),If(n,r,e)}function Ma(t,e){t.ma&&$m(t.ma,function(n,r){fe(e,r,n)}),t.l&&VC({},function(n,r){fe(e,r,n)})}function ax(t,e,n){n=Math.min(t.i.length,n);var r=t.l?et(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{zL(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function lx(t){t.g||t.u||(t.ba=1,RC(t.Ma,t),t.A=0)}function rg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pa(et(t.Ma,t),hx(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,cx(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Pa(et(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,at(10),Du(this),cx(this))};function ig(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function cx(t){t.g=new Oa(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zn(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.J),fe(e,"CI",t.M?"0":"1"),fe(e,"AID",t.V),fe(e,"TYPE","xmlhttp"),Ma(t,e),t.o&&t.s&&tg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Pu(zn(e)),n.s=null,n.S=!0,$C(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Du(this),rg(this),at(19))};function Oc(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function ux(t,e){var n=null;if(t.g==e){Oc(t),ig(t),t.g=null;var r=2}else if(bf(t.h,e))n=e.F,XC(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Gm(),qe(r,new FC(r,n)),Mu(t)}else lx(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&qL(t,e)||r==2&&rg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Qr(t,5);break;case 4:Qr(t,10);break;case 3:Qr(t,6);break;default:Qr(t,2)}}}function hx(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Qr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=et(t.pb,t);n||(n=new ni("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Pc(n,"https"),Pu(n)),VL(n.toString(),r)}else at(2);t.H=0,t.l&&t.l.za(e),dx(t),ox(t)}L.pb=function(t){t?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function dx(t){if(t.H=0,t.pa=[],t.l){const e=JC(t.h);(e.length!=0||t.i.length!=0)&&(Gv(t.pa,e),Gv(t.pa,t.i),t.h.i.length=0,Fm(t.i),t.i.length=0),t.l.ya()}}function fx(t,e,n){var r=n instanceof ni?zn(n):new ni(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ac(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ni(null,void 0);r&&Pc(s,r),e&&(s.g=e),i&&Ac(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.qa),Ma(t,r),r}function px(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ke(new Au({ob:!0})):new ke(t.va),e.Oa(t.I),e}function mx(){}L=mx.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.Va=function(){};function qt(t,e){ze.call(this),this.g=new sx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Us(this)}Ve(qt,ze);qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=fx(t,null,t.Y),Mu(t)};qt.prototype.close=function(){ng(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hm(t),t=n);e.i.push(new $L(e.fb++,t)),e.H==3&&Mu(e)};qt.prototype.N=function(){this.g.l=null,delete this.j,ng(this.g),delete this.g,qt.$.N.call(this)};function gx(t){Qm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(gx,Qm);function yx(){Xm.call(this),this.status=1}Ve(yx,Xm);function Us(t){this.g=t}Ve(Us,mx);Us.prototype.Ba=function(){qe(this.g,"a")};Us.prototype.Aa=function(t){qe(this.g,new gx(t))};Us.prototype.za=function(t){qe(this.g,new yx)};Us.prototype.ya=function(){qe(this.g,"b")};function YL(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ve(En,YL);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $h(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)$h(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){$h(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){$h(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var QL={};function sg(t){return-128<=t&&128>t?vC(QL,t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return Ke(pn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Rf;return new re(e,0)}function vx(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(vx(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),r=os,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=pn(Math.pow(e,s)),r=r.R(s).add(pn(o))):(r=r.R(n),r=r.add(pn(o)))}return r}var Rf=4294967296,os=sg(0),Pf=sg(1),i_=sg(16777216);L=re.prototype;L.ea=function(){if(jt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Rf+r)*e,e*=Rf}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(An(this))return"0";if(jt(this))return"-"+Ke(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,r="";;){var i=Dc(n,e).g;n=Lc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,An(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function An(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function jt(t){return t.h==-1}L.X=function(t){return t=Lc(this,t),jt(t)?-1:An(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(Pf)}L.abs=function(){return jt(this)?Ke(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Lc(t,e){return t.add(Ke(e))}L.R=function(t){if(An(this)||An(t))return os;if(jt(this))return jt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(jt(t))return Ke(this.R(Ke(t)));if(0>this.X(i_)&&0>t.X(i_))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ul(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ul(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ul(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ul(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function ul(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zs(t,e){this.g=t,this.h=e}function Dc(t,e){if(An(e))throw Error("division by zero");if(An(t))return new Zs(os,os);if(jt(t))return e=Dc(Ke(t),e),new Zs(Ke(e.g),Ke(e.h));if(jt(e))return e=Dc(t,Ke(e)),new Zs(Ke(e.g),e.h);if(30<t.g.length){if(jt(t)||jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pf,r=e;0>=r.X(t);)n=s_(n),r=s_(r);var i=Ai(n,1),s=Ai(r,1);for(r=Ai(r,2),n=Ai(n,2);!An(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ai(r,1),n=Ai(n,1)}return e=Lc(t,i.R(e)),new Zs(i,e)}for(i=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pn(n),o=s.R(e);jt(o)||0<o.X(t);)n-=r,s=pn(n),o=s.R(e);An(s)&&(s=Pf),i=i.add(s),t=Lc(t,o)}return new Zs(i,t)}L.gb=function(t){return Dc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function s_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function Ai(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;qm.NO_ERROR=0;qm.TIMEOUT=8;qm.HTTP_ERROR=6;TL.COMPLETE="complete";IL.EventType=Aa;Aa.OPEN="a";Aa.CLOSE="b";Aa.ERROR="c";Aa.MESSAGE="d";ze.prototype.listen=ze.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=pn;re.fromString=vx;var XL=re;const o_="@firebase/firestore";/**
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
 */let ft=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Fu="9.22.0";/**
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
 */const Mc=new _a("@firebase/firestore");function bt(t,...e){if(Mc.logLevel<=ee.DEBUG){const n=e.map(_x);Mc.debug(`Firestore (${Fu}): ${t}`,...n)}}function og(t,...e){if(Mc.logLevel<=ee.ERROR){const n=e.map(_x);Mc.error(`Firestore (${Fu}): ${t}`,...n)}}function _x(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function wx(t="Unexpected state"){const e=`FIRESTORE (${Fu}) INTERNAL ASSERTION FAILED: `+t;throw og(e),new Error(e)}function Af(t,e){t||wx()}/**
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
 */const Tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class It extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class as{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class JL{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}let eD=class{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new as;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new as,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{bt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(bt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new as)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(bt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Af(typeof r.accessToken=="string"),new JL(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Af(e===null||typeof e=="string"),new ft(e)}},tD=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class nD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new tD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let rD=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class iD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&bt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,bt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{bt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):bt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Af(typeof n.token=="string"),this.T=n.token,new rD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oD{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ex(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class aD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Fc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var a_,J;(J=a_||(a_={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new XL([4294967295,4294967295],0);function jh(){return typeof document<"u"?document:null}/**
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
 */class lD{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&bt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ag(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new It(Tt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cD(t,e){if(og("AsyncQueue",`${e}: ${t}`),Ex(t))return new It(Tt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class uD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=oD.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{bt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(bt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new It(Tt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cD(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function Cx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const l_=new Map;function hD(t,e,n,r){if(e===!0&&r===!0)throw new It(Tt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class c_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new It(Tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new It(Tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new It(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new It(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new It(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class dD{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new It(Tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new It(Tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ZL;switch(n.type){case"firstParty":return new nD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new It(Tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=l_.get(e);n&&(bt("ComponentProvider","Removing Datastore"),l_.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class fD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new lD(this,"async_queue_retry"),this.Xc=()=>{const n=jh();n&&bt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=jh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=jh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new as;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ex(e))throw e;bt("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw og("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=ag.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&wx()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class pD extends dD{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mD(this),this._firestoreClient.terminate()}}function mD(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new aD(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Cx(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new uD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Fu=n})(Hn),Kt(new Ot("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new pD(new eD(n.getProvider("auth-internal")),new iD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new It(Tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fc(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ne(o_,"3.12.0",t),Ne(o_,"3.12.0","esm2017")})();/**
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
 */const gD="functions";/**
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
 */class yD{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const u_="us-central1";class vD{constructor(e,n,r,i,s=u_,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new yD(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=u_}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const h_="@firebase/functions",d_="0.9.4";/**
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
 */const _D="auth-internal",wD="app-check-internal",ED="messaging-internal";function CD(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(_D),a=r.getProvider(ED),l=r.getProvider(wD);return new vD(s,o,a,l,i,t)};Kt(new Ot(gD,n,"PUBLIC").setMultipleInstances(!0)),Ne(h_,d_,e),Ne(h_,d_,"esm2017")}CD(fetch.bind(self));/**
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
 */const xx="firebasestorage.googleapis.com",Sx="storageBucket",xD=2*60*1e3,SD=10*60*1e3;/**
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
 */class Ce extends Yt{constructor(e,n,r=0){super(Bh(e),`Firebase Storage: ${n} (${Bh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function Bh(t){return"storage/"+t}function lg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(Ee.UNKNOWN,t)}function kD(t){return new Ce(Ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TD(t){return new Ce(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ID(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Ee.UNAUTHENTICATED,t)}function ND(){return new Ce(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bD(t){return new Ce(Ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function RD(){return new Ce(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PD(){return new Ce(Ee.CANCELED,"User canceled the upload/download.")}function AD(t){return new Ce(Ee.INVALID_URL,"Invalid URL '"+t+"'.")}function OD(t){return new Ce(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LD(){return new Ce(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sx+"' property when initializing the app?")}function DD(){return new Ce(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MD(){return new Ce(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FD(t){return new Ce(Ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Of(t){return new Ce(Ee.INVALID_ARGUMENT,t)}function kx(){return new Ce(Ee.APP_DELETED,"The Firebase app was deleted.")}function UD(t){return new Ce(Ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ce(Ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function eo(t){throw new Ce(Ee.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw OD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},_=n===xx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${x}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<v.length;C++){const I=v[C],R=I.regex.exec(e);if(R){const b=R[I.indices.bucket];let P=R[I.indices.path];P||(P=""),r=new Rt(b,P),I.postModify(r);break}}if(r==null)throw AD(e);return r}}class $D{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...x){c||(c=!0,e.apply(null,x))}function d(x){i=setTimeout(()=>{i=null,t(g,l())},x)}function f(){s&&clearTimeout(s)}function g(x,...m){if(c){f();return}if(x){f(),u.call(null,x,...m);return}if(l()||o){f(),u.call(null,x,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let y=!1;function _(x){y||(y=!0,f(),!c&&(i!==null?(x||(a=2),clearTimeout(i),d(0)):x||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function BD(t){t(!1)}/**
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
 */function zD(t){return t!==void 0}function VD(t){return typeof t=="object"&&!Array.isArray(t)}function cg(t){return typeof t=="string"||t instanceof String}function f_(t){return ug()&&t instanceof Blob}function ug(){return typeof Blob<"u"&&!XI()}function p_(t,e,n,r){if(r<e)throw Of(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Of(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function hg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Tx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ri||(ri={}));/**
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
 */function HD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class WD{constructor(e,n,r,i,s,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ri.NO_ERROR,l=s.getStatus();if(!a||HD(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ri.ABORT;r(!1,new hl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new hl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=lg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?kx():PD();o(l)}else{const l=RD();o(l)}};this.canceled_?n(!1,new hl(!1,null,!0)):this.backoffId_=jD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QD(t,e,n,r,i,s,o=!0){const a=Tx(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return qD(c,e),KD(c,n),GD(c,s),YD(c,r),new WD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function XD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JD(...t){const e=XD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ug())return new Blob(t);throw new Ce(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function e4(t){if(typeof atob>"u")throw FD("base-64");return atob(t)}/**
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
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zh{constructor(e,n){this.data=e,this.contentType=n||null}}function t4(t,e){switch(t){case mn.RAW:return new zh(Ix(e));case mn.BASE64:case mn.BASE64URL:return new zh(Nx(t,e));case mn.DATA_URL:return new zh(r4(e),i4(e))}throw lg()}function Ix(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function n4(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(mn.DATA_URL,"Malformed data URL.")}return Ix(e)}function Nx(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=e4(e)}catch(i){throw i.message.includes("polyfill")?i:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class bx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=s4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function r4(t){const e=new bx(t);return e.base64?Nx(mn.BASE64,e.rest):n4(e.rest)}function i4(t){return new bx(t).contentType}function s4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ar{constructor(e,n){let r=0,i="";f_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(f_(this.data_)){const r=this.data_,i=ZD(r,e,n);return i===null?null:new ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(ug()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(JD.apply(null,n))}else{const n=e.map(o=>cg(o)?t4(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ar(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Rx(t){let e;try{e=JSON.parse(t)}catch{return null}return VD(e)?e:null}/**
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
 */function o4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function a4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Px(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function l4(t,e){return e}class st{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||l4}}let dl=null;function c4(t){return!cg(t)||t.length<2?t:Px(t)}function Ax(){if(dl)return dl;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(s,o){return c4(o)}const n=new st("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new st("size");return i.xform=r,t.push(i),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),dl=t,dl}function u4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Rt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function h4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return u4(r,t),r}function Ox(t,e,n){const r=Rx(e);return r===null?null:h4(t,r,n)}function d4(t,e,n,r){const i=Rx(e);if(i===null||!cg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),g=hg(f,n,r),y=Tx({alt:"media",token:c});return g+y})[0]}function f4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Lx{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Dx(t){if(!t)throw lg()}function p4(t,e){function n(r,i){const s=Ox(t,i,e);return Dx(s!==null),s}return n}function m4(t,e){function n(r,i){const s=Ox(t,i,e);return Dx(s!==null),d4(s,i,t.host,t._protocol)}return n}function Mx(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ND():i=ID():n.getStatus()===402?i=TD(t.bucket):n.getStatus()===403?i=bD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function g4(t){const e=Mx(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kD(t.path)),s.serverResponse=i.serverResponse,s}return n}function y4(t,e,n){const r=e.fullServerUrl(),i=hg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Lx(i,s,m4(t,n),o);return a.errorHandler=g4(e),a}function v4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=v4(null,e)),r}function w4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let C=0;C<2;C++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=_4(e,r,i),u=f4(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=ar.getBlob(d,r,f);if(g===null)throw DD();const y={name:c.fullPath},_=hg(s,t.host,t._protocol),x="POST",m=t.maxUploadRetryTime,p=new Lx(_,x,p4(t,n),m);return p.urlParams=y,p.headers=o,p.body=g.uploadData(),p.errorHandler=Mx(e),p}class E4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class C4 extends E4{initXhr(){this.xhr_.responseType="text"}}function Fx(){return new C4}/**
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
 */class yi{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yi(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Px(this._location.path)}get storage(){return this._service}get parent(){const e=o4(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new yi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UD(e)}}function x4(t,e,n){t._throwIfRoot("uploadBytes");const r=w4(t.storage,t._location,Ax(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,Fx).then(i=>({metadata:i,ref:t}))}function S4(t){t._throwIfRoot("getDownloadURL");const e=y4(t.storage,t._location,Ax());return t.storage.makeRequestWithTokens(e,Fx).then(n=>{if(n===null)throw MD();return n})}function k4(t,e){const n=a4(t._location.path,e),r=new Rt(t._location.bucket,n);return new yi(t.storage,r)}/**
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
 */function T4(t){return/^[A-Za-z]+:\/\//.test(t)}function I4(t,e){return new yi(t,e)}function Ux(t,e){if(t instanceof dg){const n=t;if(n._bucket==null)throw LD();const r=new yi(n,n._bucket);return e!=null?Ux(r,e):r}else return e!==void 0?k4(t,e):t}function N4(t,e){if(e&&T4(e)){if(t instanceof dg)return I4(t,e);throw Of("To use ref(service, url), the first argument must be a Storage instance.")}else return Ux(t,e)}function m_(t,e){const n=e==null?void 0:e[Sx];return n==null?null:Rt.makeFromBucketSpec(n,t)}function b4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:l1(i,t.app.options.projectId))}class dg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=xx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xD,this._maxUploadRetryTime=SD,this._requests=new Set,i!=null?this._bucket=Rt.makeFromBucketSpec(i,this._host):this._bucket=m_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=m_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $D(kx());{const o=QD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const g_="@firebase/storage",y_="0.11.2";/**
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
 */const $x="storage";function R4(t,e,n){return t=be(t),x4(t,e,n)}function P4(t){return t=be(t),S4(t)}function A4(t,e){return t=be(t),N4(t,e)}function O4(t=zp(),e){t=be(t);const r=bs(t,$x).getImmediate({identifier:e}),i=s1("storage");return i&&L4(r,...i),r}function L4(t,e,n,r={}){b4(t,e,n,r)}function D4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new dg(n,r,i,e,Hn)}function M4(){Kt(new Ot($x,D4,"PUBLIC").setMultipleInstances(!0)),Ne(g_,y_,""),Ne(g_,y_,"esm2017")}M4();const F4=(t,e)=>e.some(n=>t instanceof n);let v_,__;function U4(){return v_||(v_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $4(){return __||(__=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jx=new WeakMap,Lf=new WeakMap,Bx=new WeakMap,Vh=new WeakMap,fg=new WeakMap;function j4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jx.set(n,t)}).catch(()=>{}),fg.set(e,t),e}function B4(t){if(Lf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lf.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function z4(t){Df=t(Df)}function V4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hh(this),e,...n);return Bx.set(r,e.sort?e.sort():[e]),Sr(r)}:$4().includes(t)?function(...e){return t.apply(Hh(this),e),Sr(jx.get(this))}:function(...e){return Sr(t.apply(Hh(this),e))}}function H4(t){return typeof t=="function"?V4(t):(t instanceof IDBTransaction&&B4(t),F4(t,U4())?new Proxy(t,Df):t)}function Sr(t){if(t instanceof IDBRequest)return j4(t);if(Vh.has(t))return Vh.get(t);const e=H4(t);return e!==t&&(Vh.set(t,e),fg.set(e,t)),e}const Hh=t=>fg.get(t);function W4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const K4=["get","getKey","getAll","getAllKeys","count"],G4=["put","add","delete","clear"],Wh=new Map;function w_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=G4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Wh.set(e,s),s}z4(t=>({...t,get:(e,n,r)=>w_(e,n)||t.get(e,n,r),has:(e,n)=>!!w_(e,n)||t.has(e,n)}));const zx="@firebase/installations",pg="0.6.4";/**
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
 */const Vx=1e4,Hx=`w:${pg}`,Wx="FIS_v2",q4="https://firebaseinstallations.googleapis.com/v1",Y4=60*60*1e3,Q4="installations",X4="Installations";/**
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
 */const J4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},vi=new Si(Q4,X4,J4);function Kx(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
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
 */function Gx({projectId:t}){return`${q4}/projects/${t}/installations`}function qx(t){return{token:t.token,requestStatus:2,expiresIn:eM(t.expiresIn),creationTime:Date.now()}}async function Yx(t,e){const r=(await e.json()).error;return vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qx({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Z4(t,{refreshToken:e}){const n=Qx(t);return n.append("Authorization",tM(e)),n}async function Xx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eM(t){return Number(t.replace("s","000"))}function tM(t){return`${Wx} ${t}`}/**
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
 */async function nM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Gx(t),i=Qx(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Wx,appId:t.appId,sdkVersion:Hx},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xx(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:qx(c.authToken)}}else throw await Yx("Create Installation",l)}/**
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
 */function Jx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iM=/^[cdef][\w-]{21}$/,Mf="";function sM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oM(t);return iM.test(n)?n:Mf}catch{return Mf}}function oM(t){return rM(t).substr(0,22)}/**
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
 */function Uu(t){return`${t.appName}!${t.appId}`}/**
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
 */const Zx=new Map;function eS(t,e){const n=Uu(t);tS(n,e),aM(n,e)}function tS(t,e){const n=Zx.get(t);if(n)for(const r of n)r(e)}function aM(t,e){const n=lM();n&&n.postMessage({key:t,fid:e}),cM()}let Xr=null;function lM(){return!Xr&&"BroadcastChannel"in self&&(Xr=new BroadcastChannel("[Firebase] FID Change"),Xr.onmessage=t=>{tS(t.data.key,t.data.fid)}),Xr}function cM(){Zx.size===0&&Xr&&(Xr.close(),Xr=null)}/**
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
 */const uM="firebase-installations-database",hM=1,_i="firebase-installations-store";let Kh=null;function mg(){return Kh||(Kh=W4(uM,hM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}})),Kh}async function Uc(t,e){const n=Uu(t),i=(await mg()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&eS(t,e.fid),e}async function nS(t){const e=Uu(t),r=(await mg()).transaction(_i,"readwrite");await r.objectStore(_i).delete(e),await r.done}async function $u(t,e){const n=Uu(t),i=(await mg()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&eS(t,a.fid),a}/**
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
 */async function gg(t){let e;const n=await $u(t.appConfig,r=>{const i=dM(r),s=fM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Mf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dM(t){const e=t||{fid:sM(),registrationStatus:0};return rS(e)}function fM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mM(t)}:{installationEntry:e}}async function pM(t,e){try{const n=await nM(t,e);return Uc(t.appConfig,n)}catch(n){throw Kx(n)&&n.customData.serverCode===409?await nS(t.appConfig):await Uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mM(t){let e=await E_(t.appConfig);for(;e.registrationStatus===1;)await Jx(100),e=await E_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gg(t);return r||n}return e}function E_(t){return $u(t,e=>{if(!e)throw vi.create("installation-not-found");return rS(e)})}function rS(t){return gM(t)?{fid:t.fid,registrationStatus:0}:t}function gM(t){return t.registrationStatus===1&&t.registrationTime+Vx<Date.now()}/**
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
 */async function yM({appConfig:t,heartbeatServiceProvider:e},n){const r=vM(t,n),i=Z4(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Hx,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xx(()=>fetch(r,a));if(l.ok){const c=await l.json();return qx(c)}else throw await Yx("Generate Auth Token",l)}function vM(t,{fid:e}){return`${Gx(t)}/${e}/authTokens:generate`}/**
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
 */async function yg(t,e=!1){let n;const r=await $u(t.appConfig,s=>{if(!iS(s))throw vi.create("not-registered");const o=s.authToken;if(!e&&EM(o))return s;if(o.requestStatus===1)return n=_M(t,e),s;{if(!navigator.onLine)throw vi.create("app-offline");const a=xM(s);return n=wM(t,a),a}});return n?await n:r.authToken}async function _M(t,e){let n=await C_(t.appConfig);for(;n.authToken.requestStatus===1;)await Jx(100),n=await C_(t.appConfig);const r=n.authToken;return r.requestStatus===0?yg(t,e):r}function C_(t){return $u(t,e=>{if(!iS(e))throw vi.create("not-registered");const n=e.authToken;return SM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wM(t,e){try{const n=await yM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Uc(t.appConfig,r),n}catch(n){if(Kx(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Uc(t.appConfig,r)}throw n}}function iS(t){return t!==void 0&&t.registrationStatus===2}function EM(t){return t.requestStatus===2&&!CM(t)}function CM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Y4}function xM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function SM(t){return t.requestStatus===1&&t.requestTime+Vx<Date.now()}/**
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
 */async function kM(t){const e=t,{installationEntry:n,registrationPromise:r}=await gg(e);return r?r.catch(console.error):yg(e).catch(console.error),n.fid}/**
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
 */async function TM(t,e=!1){const n=t;return await IM(n),(await yg(n,e)).token}async function IM(t){const{registrationPromise:e}=await gg(t);e&&await e}/**
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
 */function NM(t){if(!t||!t.options)throw Gh("App Configuration");if(!t.name)throw Gh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Gh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Gh(t){return vi.create("missing-app-config-values",{valueName:t})}/**
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
 */const sS="installations",bM="installations-internal",RM=t=>{const e=t.getProvider("app").getImmediate(),n=NM(e),r=bs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PM=t=>{const e=t.getProvider("app").getImmediate(),n=bs(e,sS).getImmediate();return{getId:()=>kM(n),getToken:i=>TM(n,i)}};function AM(){Kt(new Ot(sS,RM,"PUBLIC")),Kt(new Ot(bM,PM,"PRIVATE"))}AM();Ne(zx,pg);Ne(zx,pg,"esm2017");const qh="@firebase/remote-config",x_="0.4.4";/**
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
 */const OM="remote-config";/**
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
 */const LM={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},gt=new Si("remoteconfig","Remote Config",LM);function DM(t){const e=be(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class MM{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function FM(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class UM{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:FM()},l={method:"POST",headers:o,body:JSON.stringify(a)},c=fetch(s,l),u=new Promise((x,m)=>{e.signal.addEventListener(()=>{const p=new Error("The operation was aborted.");p.name="AbortError",m(p)})});let d;try{await Promise.race([c,u]),d=await c}catch(x){let m="fetch-client-network";throw(x==null?void 0:x.name)==="AbortError"&&(m="fetch-timeout"),gt.create(m,{originalErrorMessage:x==null?void 0:x.message})}let f=d.status;const g=d.headers.get("ETag")||void 0;let y,_;if(d.status===200){let x;try{x=await d.json()}catch(m){throw gt.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}y=x.entries,_=x.state}if(_==="INSTANCE_STATE_UNSPECIFIED"?f=500:_==="NO_CHANGE"?f=304:(_==="NO_TEMPLATE"||_==="EMPTY_CONFIG")&&(y={}),f!==304&&f!==200)throw gt.create("fetch-status",{httpStatus:f});return{status:f,eTag:g,config:y}}}/**
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
 */function $M(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jM(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class BM{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await $M(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!jM(i))throw i;const s={throttleEndTimeMillis:Date.now()+mN(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const zM=60*1e3,VM=12*60*60*1e3;class HM{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:zM,minimumFetchIntervalMillis:VM},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Rl(t,e){const n=t.target.error||void 0;return gt.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const zr="app_namespace_store",WM="firebase_remote_config",KM=1;function GM(){return new Promise((t,e)=>{try{const n=indexedDB.open(WM,KM);n.onerror=r=>{e(Rl(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(zr,{keyPath:"compositeKey"})}}}catch(n){e(gt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class qM{constructor(e,n,r,i=GM()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([zr],"readonly").objectStore(zr),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=c=>{i(Rl(c,"storage-get"))},l.onsuccess=c=>{const u=c.target.result;r(u?u.value:void 0)}}catch(l){i(gt.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([zr],"readwrite").objectStore(zr),l=this.createCompositeKey(e);try{const c=a.put({compositeKey:l,value:n});c.onerror=u=>{s(Rl(u,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(gt.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([zr],"readwrite").objectStore(zr),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=c=>{i(Rl(c,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(gt.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class YM{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function QM(){Kt(new Ot(OM,t,"PUBLIC").setMultipleInstances(!0)),Ne(qh,x_),Ne(qh,x_,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw gt.create("registration-window");if(!h1())throw gt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw gt.create("registration-project-id");if(!o)throw gt.create("registration-api-key");if(!a)throw gt.create("registration-app-id");n=n||"firebase";const l=new qM(a,r.name,n),c=new YM(l),u=new _a(qh);u.logLevel=ee.ERROR;const d=new UM(i,Hn,n,s,o,a),f=new BM(d,l),g=new MM(f,l,c,u),y=new HM(r,g,c,l,u);return DM(y),y}}QM();var Ff=function(t,e){return Ff=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Ff(t,e)};function Kn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ff(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Uf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ca(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function ua(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Dn(t){return typeof t=="function"}function vg(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Yh=vg(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function $c(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Fa=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Uf(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(_){e={error:_}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(Dn(u))try{u()}catch(_){s=_ instanceof Yh?_.errors:[_]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var f=Uf(d),g=f.next();!g.done;g=f.next()){var y=g.value;try{S_(y)}catch(_){s=s??[],_ instanceof Yh?s=ua(ua([],ca(s)),ca(_.errors)):s.push(_)}}}catch(_){r={error:_}}finally{try{g&&!g.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}if(s)throw new Yh(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)S_(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&$c(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&$c(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),oS=Fa.EMPTY;function aS(t){return t instanceof Fa||t&&"closed"in t&&Dn(t.remove)&&Dn(t.add)&&Dn(t.unsubscribe)}function S_(t){Dn(t)?t():t.unsubscribe()}var lS={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},XM={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,ua([t,e],ca(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function JM(t){XM.setTimeout(function(){throw t})}function k_(){}function Pl(t){t()}var _g=function(t){Kn(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,aS(n)&&n.add(r)):r.destination=n3,r}return e.create=function(n,r,i){return new $f(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Fa),ZM=Function.prototype.bind;function Qh(t,e){return ZM.call(t,e)}var e3=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){fl(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){fl(r)}else fl(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){fl(n)}},t}(),$f=function(t){Kn(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Dn(n)||!n)o={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;s&&lS.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Qh(n.next,a),error:n.error&&Qh(n.error,a),complete:n.complete&&Qh(n.complete,a)}):o=n}return s.destination=new e3(o),s}return e}(_g);function fl(t){JM(t)}function t3(t){throw t}var n3={closed:!0,next:k_,error:t3,complete:k_},r3=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function i3(t){return t}function s3(t){return t.length===0?i3:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var T_=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=a3(e)?e:new $f(e,n,r);return Pl(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=I_(n),new n(function(i,s){var o=new $f({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[r3]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return s3(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=I_(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function I_(t){var e;return(e=t??lS.Promise)!==null&&e!==void 0?e:Promise}function o3(t){return t&&Dn(t.next)&&Dn(t.error)&&Dn(t.complete)}function a3(t){return t&&t instanceof _g||o3(t)&&aS(t)}(function(t){Kn(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(u){n.error(u)}}:t.prototype._next,l._error=s?function(c){try{s(c)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(_g);var l3=vg(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),cS=function(t){Kn(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new N_(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new l3},e.prototype.next=function(n){var r=this;Pl(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Uf(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Pl(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Pl(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?oS:(this.currentObservers=null,a.push(n),new Fa(function(){r.currentObservers=null,$c(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new T_;return n.source=this,n},e.create=function(n,r){return new N_(n,r)},e}(T_),N_=function(t){Kn(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:oS},e}(cS),wg={now:function(){return(wg.delegate||Date).now()},delegate:void 0};(function(t){Kn(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=wg);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),c=0,u=1;u<s.length&&s[u]<=l;u+=2)c=u;c&&s.splice(0,c+1)}},e})(cS);var c3=function(t){Kn(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Fa),jf={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=jf.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,ua([t,e],ca(n))):setInterval.apply(void 0,ua([t,e],ca(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},u3=function(t){Kn(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),jf.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;jf.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,$c(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(c3),b_=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=wg.now,t}(),h3=function(t){Kn(e,t);function e(n,r){r===void 0&&(r=b_.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(b_);new h3(u3);vg(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const d3="[DEFAULT]",f3=S.createContext(void 0),p3=S.createContext(!1),m3="4.2.2",g3=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function y3(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=S.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=db().find(o=>o.name===(n||d3));if(s){if(e&&g3(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=S.version||"unknown";return Ne("react",o),Ne("reactfire",m3),m1(e,n)}},[t.firebaseApp,e,n]);return S.createElement(f3.Provider,{value:i},S.createElement(p3.Provider,Object.assign({value:r??!1},t)))}/**
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
 */var Fr,Vr;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Vr||(Vr={}));Object.freeze((Fr={},Fr[Vr.added]=bO,Fr[Vr.removed]=AO,Fr[Vr.changed]=RO,Fr[Vr.moved]=PO,Fr[Vr.value]=Ar,Fr));const v3=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=v3);const _3=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=_3);const w3=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=w3);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);function E3(){return w("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40",children:[h("article",{className:"col-span-2",children:w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 ",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Navigation"}),h(ie,{to:"/services",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Services"}),h(ie,{to:"/work",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Thoughts"}),h(ie,{to:"/thoughts",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Thoughts"}),h(ie,{to:"/connect",className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:"Connect Us"})]})}),w("aside",{children:[w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Behind The Scenes"}),h(ie,{to:"/about",className:"text-2xl lg:my-1 lg:text-3xl",children:"About Us"}),h(ie,{to:"/news",className:"text-2xl lg:my-1 lg:text-3xl",children:"News"}),h(ie,{to:"/jobs",className:"text-2xl lg:my-1 lg:text-3xl",children:"Jobs"})]}),w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Offices"}),h(ie,{to:"/",className:"text-2xl lg:my-1 lg:text-3xl",children:"BTC Americas"}),h(ie,{to:"/price-travel",className:"text-2xl lg:my-1 lg:text-3xl",children:"Price Travel"}),h(ie,{to:"/big-fish",className:"text-2xl lg:my-1 lg:text-3xl",children:"Big Fish"})]}),w("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[h("hgroup",{className:"flex items-center w-full border-b",children:h("h5",{className:"uppercase text-1xl ",children:"Account"})}),h(ie,{to:"/login",className:"flex items-center text-2xl lg:my-1 lg:text-3xl ",children:"Login"}),h(ie,{to:"/signup",className:"flex items-center text-2xl lg:my-1 lg:text-3xl ",children:"Sign Up"})]}),w("aside",{className:"font-semibold px-8 text-gray-100 mb-8",children:[h("h5",{className:"uppercase text-1xl border-b",children:"Connect Us"}),w("ul",{className:"flex justify-start font-semibold text-gray-100 pr-6",children:[h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.facebook.com/BTCamericas",className:"pr-10",children:h("span",{className:"facebook hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.instagram.com/btcamericas/",className:"pr-10",children:h("span",{className:"instagram hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://twitter.com/BTCamericas",className:"pr-10",children:h("span",{className:"twitter hover:animate-pulse"})})}),h("li",{className:"lg:my-1 lg:text-3xl py-2",children:h("a",{href:"https://www.linkedin.com/company/btcamericas",className:"pr-10",children:h("span",{className:"linkedin hover:animate-pulse"})})})]})]})]}),h("style",{children:`
					.facebook {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("assets/icons/SocialMedia/facebook.png");
					}

					.instagram {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("assets/icons/SocialMedia/instagram.png");
					}

					.twitter {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("assets/icons/SocialMedia/twitter.png");
					}

					.linkedin {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("assets/icons/SocialMedia/linkedin.png");
					}
				`})]})}function C3(){const[t,e]=S.useState(!1);return w("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[h(ms,{image:mc}),w("nav",{className:"flex",children:[w("section",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus",onClick:()=>e(n=>!n),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]}),h("section",{className:t?"showMenuNav":"hideMenuNav",children:w("div",{className:"h-full",children:[w("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>e(!1),children:[h(ms,{image:mc}),w("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>e(n=>!n),children:[h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),h("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),h("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),h(E3,{})]})})]}),h("style",{children:`
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
					`})]})}function x3(){return w("footer",{className:"border-t border-gray-400 py-8 px-8 lg:px-40",children:[w("section",{className:"flex flex-wrap items-center justify-between",children:[h(ms,{image:Zw,addClass:"flex items-baseline title-font font-medium items-center md:mb-0 lg:order-none"}),w("aside",{className:"flex flex-wrap",children:[h(Zi,{is:!0,classN:"md:border-none",section:"Company",liOne:"About us",liTwo:"Legal",liThree:"Career",liFour:"Contact"}),h(Zi,{section:"Services",liOne:"Pricing",liTwo:"Products",liThree:"Customers",liFour:"Success Stories"}),h(Zi,{section:"Support",liOne:"About us",liTwo:"Legal",liThree:"Career",liFourHref:"/login",liFour:"Log In"})]})]}),h("section",{className:"flex items-center flex-start text-gray-50",children:w("p",{children:["© Business Travel Consulting ",h("span",{id:"current-year",children:"2023"})," - All rights reserved · Privacy Policy"]})}),h("style",{children:`
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
					`})]})}function ju(t){return w("div",{className:"bg-[#000c1a]",children:[h(C3,{}),t.children,h(x3,{})]})}const Xh=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];function S3({currentItems:t}){return h(wn,{children:t&&t.map(e=>h("div",{children:w("h3",{children:["Item #",e]})}))})}function k3({itemsPerPage:t}){const[e,n]=S.useState(0),r=e+t;console.log(`Loading items from ${e} to ${r}`);const i=Xh.slice(e,r),s=Math.ceil(Xh.length/t);return w(wn,{children:[h(S3,{currentItems:i}),h(QO,{breakLabel:"...",nextLabel:" next >",onPageChange:a=>{const l=a.selected*t%Xh.length;console.log(`User requested page number ${a.selected}, which is offset ${l}`),n(l)},pageRangeDisplayed:5,pageCount:s,previousLabel:"< previous",renderOnZeroPageCount:null})]})}function T3(){return w("section",{className:"flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 md:mb-36",children:[h("h1",{className:"text-gray-100 text-4xl font-semibold w-full",children:"Welcome Charly"}),w("article",{className:"flex items-start justify-center flex-wrap w-full",children:[w("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[h("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Candidates"}),h(ci,{to:"candidates/",children:h("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none",children:"See more..."})})]}),w("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[h("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Vacancies"}),h(ci,{to:"create",children:h("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none",children:"See more..."})})]})]})]})}function I3(){const[t,e]=S.useState(!1),n=xn();return S.useEffect(()=>{Ti(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log("Welcome Charly"),e(!0)):e(!1)})}),h("div",{children:t?h(an,{content:h(T3,{})}):h(an,{content:h(eE,{})})})}function Ae({label:t,name:e,on:n,val:r}){return w("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:t}),h("input",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}function N3({on:t}){return w("div",{className:"",children:[h("label",{htmlFor:"",className:"text-gray-300 mx-2",children:"Asignar Fecha"}),h("input",{required:!0,type:"checkbox",name:"dateVacancy",onChange:t,className:"relative float-right mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:bg-blue-800"})]})}function uS({label:t,name:e,on:n,val:r}){return w("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300",children:t}),h("textarea",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}function b3(){const[t,e]=S.useState({}),{id:n}=su(),r=Or(),i=cn(r,`/vacancy/${n}`),{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:u,content:d,salaryVacancy:f,categoryVacancy:g,subcategoryVacancy:y,requiredVacancy:_}=t,x=new Date,m=`${x.getFullYear()}-${x.getMonth()+1}-${x.getDate()}`,p=new Date(m),v=new Date(s),C=864e5,R=(p-v)/C;S.useEffect(()=>{Ar(i,U=>{e(U.val())})},[]);const b=U=>{const Re=U.target.name,D=new Date(U.target.value);e({...t,[Re]:D})},P=U=>{const Re=U.target.name,D=U.target.value;e({...t,[Re]:D})},j=()=>(alert("Actualizado"),NO(i,t));return w("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]",children:[h("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8",children:w("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",children:[w("div",{className:"flex justify-end items-center",children:[h("label",{className:"text-gray-300 mx-2",children:"Fecha:"}),h("input",{type:"date",name:"dateVacancy",onChange:b,className:"rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]}),h(Ae,{label:"Vacante",name:"vacancyTitle",val:o,on:P}),h(Ae,{label:"Área",name:"areaVacancy",val:l,on:P}),h(Ae,{label:"Categoría",name:"categoryVacancy",val:g,on:P}),h(Ae,{label:"Subcategoría",name:"subcategoryVacancy",val:y,on:P}),h(Ae,{label:"Salario",name:"salaryVacancy",val:f,on:P}),h(Ae,{label:"Jornada Laboral",name:"typeVacancy",val:a,on:P}),h(Ae,{label:"Modalidad",name:"typeLocation",val:u,on:P}),h(Ae,{label:"Ubicación",name:"locationPlace",val:c,on:P}),h(Ae,{label:"Educación mínima requerida",name:"requiredVacancy",val:_,on:P}),h(uS,{label:"Descripción",name:"content",val:d,on:P})]})}),h("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:h("section",{className:"flex justify-center flex-col items-center mb-8",children:w("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[w("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[w("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[o,h("span",{className:"text-slate-500 text-sm font-light",children:s==m?"Hoy":`Hace ${Math.trunc(R)}  días`})]}),h("p",{className:"font-bold text-gray-200",children:f}),w("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[w("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),l,", ",c]}),w("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:a}),h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:u})]})]}),w("article",{className:"py-2",children:[w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),w("p",{children:[h("span",{className:"text-gray-100",children:"Categoría: "}),w("span",{className:"text-gray-300",children:[" ",g]})]}),w("p",{children:[h("span",{className:"text-gray-100",children:"Subcategoría: "}),w("span",{className:"text-gray-300",children:[" ",y]})]}),w("p",{children:[w("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),w("span",{className:"text-gray-300",children:[" ",_]})]})]}),w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),h("p",{className:"text-gray-300",children:d})]})]}),h("button",{className:"bg-[#8bdc4870] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#8bdc488d] ml-0 animate-pulse hover:animate-none",type:"button",onClick:j,children:"Update"})]})})})]})}function R3(){return h(b3,{})}function Ua(){return w("section",{className:"flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md",children:[w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-40 h-40 text-gray-300 animate-pulse ",children:[h("path",{fill:"currentColor",d:"M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"}),h("rect",{width:"176",height:"32",x:"168",y:"320",fill:"currentColor"}),h("polygon",{fill:"currentColor",points:"210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"}),h("polygon",{fill:"currentColor",points:"383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"})]}),h("p",{className:"text-3xl text-gray-300 animate-pulse",children:"Looks like this page are currently offline for you"}),h("a",{rel:"noopener noreferrer",href:"/",className:"px-8 py-3 font-semibold rounded text-gray-400 hover:border hover:rounded-xl hover:text-gray-100 ",children:"Back to homepage"})]})}function P3(){const[t,e]=S.useState(!1),n=xn();return S.useEffect(()=>{Ti(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log("Panel de 'Update'"),e(!0)):e(!1)})}),h("div",{children:t?h(an,{content:h(R3,{})}):h(ju,{children:h(Ua,{})})})}function A3(){const[t,e]=S.useState({}),n=Or(),r=cn(n,"/vacancy"),i=new Date,s=`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`,o=c=>{const u=c.target.name,d=s;e({...t,[u]:d})},a=c=>{const u=c.target.name,d=c.target.value;e({...t,[u]:d})};return h("section",{className:"flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ",children:w("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:c=>(c.preventDefault(),dC(r,t)),children:[h("div",{className:"flex justify-end",children:h(N3,{on:o})}),h(Ae,{label:"Vacante",name:"vacancyTitle",on:a}),h(Ae,{label:"Área",name:"areaVacancy",on:a}),h(Ae,{label:"Categoría",name:"categoryVacancy",on:a}),h(Ae,{label:"Subcategoría",name:"subcategoryVacancy",on:a}),h(Ae,{label:"Salario",name:"salaryVacancy",on:a}),h(Ae,{label:"Jornada Laboral",name:"typeVacancy",on:a}),h(Ae,{label:"Modalidad",name:"typeLocation",on:a}),h(Ae,{label:"Ubicación",name:"locationPlace",on:a}),h(Ae,{label:"Educación mínima requerida",name:"requiredVacancy",on:a}),h(uS,{label:"Descripción",name:"content",on:a}),h("div",{children:h("button",{className:"bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none",type:"submit",children:"Create"})})]})})}function O3(){const[t,e]=S.useState({}),n=Or(),r=cn(n,"/vacancy");S.useEffect(()=>{Ar(r,l=>{e(l.val())})},[]);const[i,s]=S.useState(0),o=i+20,a=Object.keys(t).slice(i,o);return w("section",{children:[h("article",{className:"flex justify-center flex-col items-center pb-20",children:h("div",{className:"w-full",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l],u=()=>{fC(cn(n,`/vacancy/${l}`))},d=()=>{confirm("Are you sure of DELETE this Vacancy?")==!0&&u()};return w(mC,{vacancyData:c,children:[h(ci,{to:`/logged/edit/${l}`,children:w("button",{className:"bg-[#74ff0029] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#8bdc4870] mb-1 w-[120px]",children:[h("span",{className:"material-symbols-outlined",children:"edit"}),"Edit"]})}),w("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:d,children:[h("span",{className:"material-symbols-outlined",children:"delete"}),"Delete"]})]},l)})})}),h("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function L3(){return w("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8",children:[h(A3,{}),h("article",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:h(O3,{})})]})}function D3(){const[t,e]=S.useState(!1),n=xn();return S.useEffect(()=>{Ti(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log("Welcome to Create Vacancies Panel :)"),e(!0)):e(!1)})}),h("div",{children:t?h(an,{content:h(L3,{})}):h(ju,{children:h(Ua,{})})})}function M3(){const[t,e]=S.useState({}),[n,r]=S.useState({}),{id:i}=su(),s=Or(),o=cn(s,`/vacancy/${i}`),a=cn(s,"/candidate"),[l,c]=S.useState({}),u=O4(),d=A4(u,`candidates/${l.name}`),{candidateName:f,vacancyTitle:g,dateVacancy:y,typeVacancy:_,areaVacancy:x,locationPlace:m,typeLocation:p,content:v,salaryVacancy:C,categoryVacancy:I,subcategoryVacancy:R,requiredVacancy:b}=t,P=new Date,j=`${P.getFullYear()}-${P.getMonth()+1}-${P.getDate()}`,U=new Date(j),Re=new Date(y),D=864e5,q=(U-Re)/D;S.useEffect(()=>{Ar(o,E=>{e(E.val())})},[]);const X=E=>{const F=E.target.files[0];c(F),console.log(F)},xt=async()=>(await R4(d,l),await P4(d)),Te=E=>{const F=E.target.name,O=E.target.value;r({...n,[F]:O,vacancyTitle:g})},A=()=>(console.log("Enviado"),dC(a,n));return w("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]",children:[h("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8",children:w("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:async E=>{if(E.preventDefault(),n){const F=await xt();n.url=F,A()}alert("Enviado")},children:[w("div",{className:"my-4 ",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Nombres"}),h("input",{required:!0,autoComplete:"on",id:"domTextElement1",type:"name",name:"candidateName",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})]}),w("div",{className:"flex my-4",children:[w("div",{className:"w-2/4 pr-2",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Nacionalidad"}),h("input",{type:"text",name:"candidateNationality",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})]}),w("div",{className:"w-2/4 pl-2",children:[h("label",{className:"text-gray-300 text-sm",children:"Fecha de Nacimiento"}),h("input",{required:!0,type:"date",name:"candidateBirthday",onChange:Te,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]})]}),w("div",{className:"flex my-4",children:[w("div",{className:"w-2/4 pr-2",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Número Celular"}),h("input",{required:!0,autoComplete:"on",type:"tel",name:"candidateTel",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})]}),w("div",{className:"w-2/4 pl-2",children:[h("label",{className:"text-gray-300 text-sm",children:"Número de Contacto"}),h("input",{type:"tel",name:"candidateTel2",onChange:Te,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]})]}),w("div",{className:"flex my-4",children:[w("div",{className:"w-2/4 pr-2",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Email"}),h("input",{required:!0,autoComplete:"on",type:"email",name:"candidateEmail",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})]}),w("div",{className:"w-2/4 pl-2",children:[h("label",{className:"text-gray-300 text-sm",children:"Escolaridad"}),h("input",{type:"text",name:"candidateGrade",onChange:Te,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]})]}),h(Ae,{required:!0,autoComplete:"on",label:"Dirección",name:"candidateLocation",on:Te}),w("div",{className:"my-4",children:[h("label",{htmlFor:"",className:"text-gray-300 text-sm",children:"Adjuntar CV"}),h("input",{required:!0,type:"file",name:"candidateGrade",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:X})]}),h("div",{className:"pb-8",children:h("span",{className:"block text-xs  text-gray-400",children:"Le sugerimos que el nombre de su archivo sea su nombre completo."})}),w("button",{className:"bg-[#2f7ce07f] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3d79f0b4] ml-0 animate-pulse hover:animate-none flex items-center mb-8",type:"submit",children:["Send",h("span",{className:"material-symbols-outlined",children:h("span",{className:"material-symbols-outlined",children:"arrow_forward"})})]})]})}),h("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:h("section",{className:"flex justify-center flex-col items-center mb-8",children:w("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[w("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[w("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[g,h("span",{className:"text-slate-500 text-sm font-light",children:y==j?"Hoy":`Hace  ${Math.trunc(q)} días`})]}),h("p",{className:"font-bold text-gray-200",children:C}),w("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[w("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),x,", ",m]}),w("div",{className:"flex items-center gap-3 mt-2",children:[h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:_}),h("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:p})]})]}),w("article",{className:"py-2",children:[w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),w("p",{children:[h("span",{className:"text-gray-100",children:"Categoría: "}),w("span",{className:"text-gray-300",children:[" ",I]})]}),w("p",{children:[h("span",{className:"text-gray-100",children:"Subcategoría: "}),w("span",{className:"text-gray-300",children:[" ",R]})]}),w("p",{children:[w("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),w("span",{className:"text-gray-300",children:[" ",b]})]})]}),w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),h("p",{className:"text-gray-300",children:v})]})]})]})})})]})}function F3(){return h("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8",children:h(M3,{})})}function Eg(t){return h("div",{children:t.children})}const hS=()=>{const t=xn(),e=iu(),n=new mt,[r,i]=S.useState(""),[s,o]=S.useState(""),l=window.location.toString();return w(Eg,{children:[w("section",{className:"flex w-full content-center items-center justify-center py-20 md:py-5 h-screen",children:[h("aside",{className:"px-8 py-4 flex content-center items-center justify-center rounded-3xl bg-[#ffffff29] md:px-28 md:py-12",children:w("div",{className:"max-w-72",children:[h("h1",{className:"text-xl font-semibold text-gray-100",children:"Welcome back"}),h("small",{className:"text-gray-200",children:"Welcome back! Please enter your details"}),w("form",{className:"mt-4 text-gray-200",children:[w("div",{className:"mb-4",children:[h("label",{className:"mb-2 block text-xs font-semibold leading-[0]",children:"Email"}),h("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"Email Address",value:r,onChange:f=>i(f.target.value)})]}),w("div",{className:"mb-3",children:[h("label",{className:"mb-2 block text-xs font-semibold leading-[0]",children:"Password"}),w("div",{className:"flex items-center w-full rounded-md border-0 focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",children:[h("input",{className:"w-full bg-transparent focus:bg-transparent focus:outline-none",id:"password",name:"password",type:"password",placeholder:"******",value:s,onChange:f=>o(f.target.value)}),h("a",{onClick:()=>{const f=document.getElementById("password");f.type=="password"?(f.type="text",document.getElementById("eye").innerHTML="visibility_off"):(f.type="password",document.getElementById("eye").innerHTML="visibility")},className:"cursor-pointer flex items-center",children:h("span",{className:"material-symbols-outlined",id:"eye",children:"visibility"})})]})]}),w("div",{className:"mb-3 flex flex-wrap content-center",children:[h("input",{id:"remember",type:"checkbox",className:"mr-1 checked:bg-purple-700"}),h("label",{htmlFor:"remember",className:"mr-auto text-xs font-semibold",children:"Remember for 30 days"}),h("a",{href:"#",className:"text-xs font-semibold text-gray-400 hover:text-gray-200 ml-1",children:"Forgot password?"})]}),w("div",{className:"mb-3",children:[h("button",{className:"mb-1.5 block w-full text-center text-white bg-[#04135aa3] hover:bg-[#04125ae0] px-2 py-1.5 rounded-md",type:"submit",onClick:f=>{f.preventDefault(),d2(t,r,s).then(g=>{const y=g.user;l.substring(l.length-5)=="login"&&e("../"),y.email=="carlosarturomt@gmail.com"||y.email=="amiranda@btcamericas.com"?e("/logged"):e("./")}).catch(g=>{const y=g.code,_=g.message;console.log(y,_)})},children:"Sign in"}),w("button",{className:"bx-shadow flex flex-wrap justify-center w-full hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",type:"submit",onClick:async f=>{f.preventDefault(),await X1(t,n).then(g=>{mt.credentialFromResult(g).accessToken;const _=g.user;(_.email=="carlosarturomt@gmail.com"||_.email=="amiranda@btcamericas.com")&&e("/logged"),l.substring(l.length-5)=="login"?e("../"):e("./")}).catch(g=>{g.code,g.message,g.customData.email,mt.credentialFromError(g)})},children:[h("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign in with Google"]})]})]}),w("div",{className:"text-center",children:[h("span",{className:"text-xs text-gray-400 font-semibold",children:"Don't have account?"}),h(ie,{to:"/signup",className:"text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100",children:"Sign up"})]})]})}),h("img",{className:"fish",src:"https://img1.picmix.com/output/stamp/normal/0/2/5/9/1479520_aca7c.gif"}),h("div",{className:"bg-gif"}),h("div",{className:"bg-fish"})]}),h("style",{children:`
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

				`})]})};function U3(){const[t,e]=S.useState(!1),n=xn();return S.useEffect(()=>{Ti(n,r=>{r?(console.log("Welcome",r.email),e(!0)):e(!1)})}),h("div",{children:t?h(an,{content:h(F3,{})}):h(Eg,{children:h(hS,{})})})}function $3(t){const{vacancyData:e}=t,{candidateEmail:n,candidateName:r,candidateTel:i,url:s,vacancyTitle:o}=e;return w("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-2",children:[w("div",{children:[h("span",{className:"text-slate-400 text-sm",children:o}),h("h3",{className:"font-bold mt-px text-gray-100",children:r}),w("div",{className:"flex flex-wrap items-center gap-3 mt-2",children:[w("span",{className:"flex items-center bg-[#ffffff17] hover:animate-pulse text-gray-400 rounded-full py-1 text-sm pl-2 pr-4",children:[h("span",{className:"p-1 material-symbols-outlined",children:"call"}),h("a",{href:"tel:+52"+i,target:"_blank",rel:"noopener noreferrer",children:i})]}),w("span",{className:"text-slate-400 text-sm flex gap-1 items-center hover:animate-pulse",children:[h("span",{className:"material-symbols-outlined",children:"mail"}),h("a",{href:"mailto:"+n,target:"_blank",rel:"noopener noreferrer",children:n})]}),w("span",{className:"text-slate-400 text-sm flex gap-1 items-center hover:animate-pulse",children:[h("span",{className:"material-symbols-outlined",children:"cloud_download"}),h("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:s.length>87?`${s.slice(87,97)}...pdf`:s})]})]})]}),h("div",{children:t.children})]})}function j3(){const[t,e]=S.useState({}),[n,r]=S.useState(0),i=Or(),s=cn(i,"/candidate"),o=n+18,a=Object.keys(t).slice(n,o);return S.useEffect(()=>{Ar(s,l=>{e(l.val())})},[]),h("section",{children:h("article",{className:"flex justify-center flex-col items-center pb-20",children:h("div",{className:"w-full max-w-4xl px-4 lg:px-0",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l],u=()=>{fC(cn(i,`/candidate/${l}`))},d=()=>{confirm("Are you sure of DELETE this Candidate?")==!0&&u()};return w($3,{vacancyData:c,children:[h(ci,{to:`${l}`,children:h("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:animate-pulse mb-1 w-[120px]",children:"See more"})}),w("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:d,children:[h("span",{className:"material-symbols-outlined",children:"delete"}),"Delete"]})]},l)})})})})}function B3(){const[t,e]=S.useState(!1),n=xn();return S.useEffect(()=>{Ti(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log(`Welcome '${r.email}' to Candidates Panel 👷`),e(!0)):(e(!1),console.log("User is logged out"))})}),h(wn,{children:t?h(an,{content:h(j3,{})}):h(ju,{children:h(Ua,{})})})}function z3(){const[t,e]=S.useState(!1),[n,r]=S.useState({}),i=xn(),{id:s}=su(),o=Or(),a=cn(o,`/candidate/${s}`),{candidateBirthday:l,candidateName:c,candidateEmail:u,candidateGrade:d,candidateLocation:f,candidateNationality:g,candidateTel:y,candidateTel2:_,vacancyTitle:x,url:m}=n,p=new Date,v=`${p.getFullYear()}-${p.getMonth()+1}-${p.getDate()}`,C=new Date(v),I=new Date(l),R=864e5,j=(C-I)/R/365;return S.useEffect(()=>{Ar(a,U=>{r(U.val())})},[]),S.useEffect(()=>{Ti(i,U=>{U.email=="carlosarturomt@gmail.com"||U.email=="amiranda@btcamericas.com"?(console.log("Welcome to Deatil Candidates Panel"),e(!0)):e(!1)})}),h("div",{children:t?h(an,{content:h("main",{className:"flex justify-center flex-col items-center mb-8",children:w("section",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[w("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[h("span",{className:"text-slate-400 text-sm",children:x}),w("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[c,h("span",{className:"text-slate-500 text-sm font-light",children:l==v?l:Math.trunc(j)+" years"})]}),h("p",{className:"font-bold text-gray-200",children:d}),w("div",{className:"flex items-center gap-3 mt-2",children:[w("span",{className:"flex items-center bg-[#ffffff17] hover:animate-pulse text-slate-400 rounded-full py-0 text-sm pl-2 pr-4",children:[h("span",{className:"p-1 material-symbols-outlined",children:"call"}),h("a",{href:"tel:+52"+y,target:"_blank",rel:"noopener noreferrer",children:y})]}),h("span",{className:"text-slate-400 text-sm hover:animate-pulse",children:w("a",{href:"mailto:"+u,target:"_blank",rel:"noopener noreferrer",className:"flex  items-center",children:[h("span",{className:"material-symbols-outlined",children:"mail"}),u]})}),w("span",{className:"text-slate-400 text-sm flex gap-1 items-center",children:[h("span",{className:"material-symbols-outlined",children:"home_pin"}),f]})]})]}),w("article",{className:"py-2",children:[w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"About me"}),w("div",{className:"text-slate-300",children:[w("p",{className:"flex",children:["Hola!",h("span",{className:"animate-bounce",children:"😁"})]}),w("p",{children:["Soy ",`${c}, `,j<=10?"":` tengo ${Math.trunc(j)} años`,", es un placer postularme en la vacante de '",x,"', espero puedan considerarme para ser parte del proceso de selección."]})]})]}),w("aside",{className:"py-2",children:[h("h3",{className:"font-bold text-lg text-gray-100",children:"Details"}),w("p",{className:"flex items-center",children:[h("span",{className:"text-gray-100 flex items-center w-[fit-content]",children:"Birthday:"}),h("span",{className:"text-slate-300 ml-1",children:l})]}),w("p",{className:"flex items-center",children:[h("span",{className:"text-gray-100 flex items-center w-[fit-content]",children:h("span",{children:"Contact Phone:"})}),h("span",{className:"text-slate-300 ml-1",children:y})]}),w("p",{className:"flex items-center",children:[h("span",{className:"text-gray-100 flex items-center w-[fit-content]",children:h("span",{children:"Contact Emergency:"})}),w("span",{className:"text-slate-300 ml-1",children:[" ",_]})]}),w("p",{className:"flex items-center",children:[h("span",{className:"text-gray-100 flex items-center w-[fit-content]",children:h("span",{children:"Degree:"})}),h("span",{className:"text-slate-300 ml-1",children:d})]}),w("p",{className:"flex items-center",children:[h("span",{className:"text-gray-100 flex items-center w-[fit-content]",children:h("span",{children:"Nationality:"})}),h("span",{className:"text-slate-300 ml-1",children:g})]}),w("a",{className:"mt-6 w-[fit-content] bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse",href:m,target:"_blank",rel:"noopener noreferrer",children:[h("span",{className:"material-symbols-outlined",children:"cloud_download"}),"Download CV"]})]})]})]})})}):h(ju,{children:h(Ua,{})})})}const V3=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),i=xn(),s=new mt,o=iu();return w(Eg,{children:[h("section",{className:"flex w-full content-center justify-center py-20 md:py-5",children:w("article",{className:"w-full flex flex-wrap-reverse justify-center items-center px-4 md:max-w-5xl md:flex-wrap",children:[h("aside",{className:"w-full flex content-center py-8 px-2 my-4 items-center justify-center rounded-md md:w-1/2 bg-[#000c1aae] md:h-full md:rounded-r-none",children:w("div",{className:"max-w-72",children:[h("h1",{className:"text-xl font-semibold text-gray-100",children:"Sign Up"}),h("small",{className:"text-gray-200",children:"Create a BTC Account"}),w("form",{className:"mt-4 text-gray-200",children:[w("div",{className:"mb-3",children:[h("label",{className:"mb-2 block text-xs font-semibold",children:"Email"}),h("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"name@example.com",value:t,onChange:u=>e(u.target.value)})]}),w("div",{className:"mb-3",children:[h("label",{className:"mb-2 block text-xs font-semibold",children:"Password"}),w("div",{className:"flex items-center w-full rounded-md border-0 focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",children:[h("input",{className:"w-full bg-transparent focus:bg-transparent focus:outline-none",id:"password",name:"password",type:"password",placeholder:"******",value:n,onChange:u=>r(u.target.value)}),h("a",{onClick:()=>{const u=document.getElementById("password");u.type=="password"?(u.type="text",document.getElementById("eye").innerHTML="visibility_off"):(u.type="password",document.getElementById("eye").innerHTML="visibility")},className:"cursor-pointer flex items-center",children:h("span",{className:"material-symbols-outlined",id:"eye",children:"visibility"})})]})]}),w("div",{className:"mb-3",children:[h("button",{className:"mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md",type:"submit",onClick:async u=>{u.preventDefault(),await h2(i,t,n).then(d=>{const f=d.user;console.log(f),o("/login")}).catch(d=>{const f=d.code,g=d.message;console.log(f,g)})},children:"Sign Up"}),w("button",{className:"flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",type:"submit",onClick:async u=>{u.preventDefault(),await X1(i,s).then(d=>{mt.credentialFromResult(d).accessToken,d.user,o("/logged")}).catch(d=>{d.code,d.message,d.customData.email,mt.credentialFromError(d)})},children:[h("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign Up with Google"]})]})]})]})}),h("aside",{className:"w-full flex flex-wrap content-center justify-center rounded-md md:w-1/2 md:rounded-l-none relative",children:h("img",{className:" h-full bg-center bg-no-repeat bg-cover rounded-md md:rounded-l-none",src:"https://dummyimage.com/496x661/4f4f4f/ffffff.jpg"})}),h("div",{className:"bg-gif"})]})}),h("style",{children:`
					#password {
						outline: none;
						background: transparent;
					}
					.fish {
						position: absolute;
						bottom: 0;
					}
					.fish1 {
						position: absolute;
						top: 5%;
						left: -5%;
						width: 40%;
					}
					.blur-img {
						width: 100%;
						filter: blur(5px);
						opacity: 0.9;
						height: 85vh;
						border: solid #000 5px;
					}
					.bg-gif {
						z-index: -1;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						filter: blur(10px);
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.gifer.com/ODz.gif')
					}
				`})]})};function H3(){return h(wn,{children:h(UI,{children:w(OI,{children:[h(dt,{path:"/",element:h(bR,{})}),h(dt,{path:"/login",element:h(hS,{})}),h(dt,{path:"/signup",element:h(V3,{})}),h(dt,{path:"/jobs",element:h(GO,{})}),h(dt,{path:"/jobs/:id",element:h(qO,{})}),h(dt,{path:"/jobs/:id/apply",element:h(U3,{})}),h(dt,{path:"/logged",element:h(I3,{})}),h(dt,{path:"/logged/create",element:h(D3,{})}),h(dt,{path:"/logged/candidates",element:h(B3,{})}),h(dt,{path:"/logged/candidates/:id",element:h(z3,{})}),h(dt,{path:"/logged/edit/:id",element:h(P3,{})}),h(dt,{path:"*",element:h(an,{content:h(Ua,{})})}),h(dt,{path:"/test",element:h(k3,{itemsPerPage:4})})]})})})}const W3={apiKey:"AIzaSyDHkEMtgdX928zEjye6GsEfJwDX_5Ijjag",authDomain:"reactdemo-fdaf5.firebaseapp.com",databaseURL:"https://reactdemo-fdaf5-default-rtdb.firebaseio.com",projectId:"reactdemo-fdaf5",storageBucket:"reactdemo-fdaf5.appspot.com",messagingSenderId:"749100592564",appId:"1:749100592564:web:aa5d0569ddb8266981d6e1",measurementId:"G-VWXP75P120"};Zh.createRoot(document.getElementById("root")).render(h(j_.StrictMode,{children:h(y3,{firebaseConfig:W3,children:h(H3,{})})}));
