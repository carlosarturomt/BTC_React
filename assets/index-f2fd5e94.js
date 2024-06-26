function Ox(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Lx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Q_={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),Dx=Symbol.for("react.portal"),Mx=Symbol.for("react.fragment"),Fx=Symbol.for("react.strict_mode"),Ux=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Bx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),zx=Symbol.for("react.suspense"),Hx=Symbol.for("react.memo"),Wx=Symbol.for("react.lazy"),bg=Symbol.iterator;function Vx(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X_=Object.assign,Z_={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||J_}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e0(){}e0.prototype=Is.prototype;function Kf(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||J_}var Gf=Kf.prototype=new e0;Gf.constructor=Kf;X_(Gf,Is.prototype);Gf.isPureReactComponent=!0;var Ng=Array.isArray,t0=Object.prototype.hasOwnProperty,Yf={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t0.call(e,r)&&!n0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ya,type:t,key:s,ref:o,props:i,_owner:Yf.current}}function qx(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function Kx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rg=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kx(""+t.key):e.toString(36)}function Cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case Dx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ju(o,0):r,Ng(i)?(n="",t!=null&&(n=t.replace(Rg,"$&/")+"/"),Cl(i,e,n,"",function(c){return c})):i!=null&&(Qf(i)&&(i=qx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ng(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ju(s,a);o+=Cl(s,e,n,l,i)}else if(l=Vx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ju(s,a++),o+=Cl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return Cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Sl={transition:null},Yx={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Yf};Y.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Is;Y.Fragment=Mx;Y.Profiler=Ux;Y.PureComponent=Kf;Y.StrictMode=Fx;Y.Suspense=zx;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=X_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t0.call(e,l)&&!n0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ya,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:Bx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jx,_context:t},t.Consumer=t};Y.createElement=r0;Y.createFactory=function(t){var e=r0.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:$x,render:t}};Y.isValidElement=Qf;Y.lazy=function(t){return{$$typeof:Wx,_payload:{_status:-1,_result:t},_init:Gx}};Y.memo=function(t,e){return{$$typeof:Hx,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return ht.current.useCallback(t,e)};Y.useContext=function(t){return ht.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Y.useEffect=function(t,e){return ht.current.useEffect(t,e)};Y.useId=function(){return ht.current.useId()};Y.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return ht.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Y.useRef=function(t){return ht.current.useRef(t)};Y.useState=function(t){return ht.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return ht.current.useTransition()};Y.version="18.2.0";Q_.exports=Y;var E=Q_.exports;const u=Y_(E),Ag=Ox({__proto__:null,default:u},[E]);var i0={exports:{}},Mt={},s0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,x){var w=A.length;A.push(x);e:for(;0<w;){var M=w-1>>>1,O=A[M];if(0<i(O,x))A[M]=x,A[w]=O,w=M;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var x=A[0],w=A.pop();if(w!==x){A[0]=w;e:for(var M=0,O=A.length,$=O>>>1;M<$;){var W=2*(M+1)-1,ue=A[W],fe=W+1,ot=A[fe];if(0>i(ue,w))fe<O&&0>i(ot,ue)?(A[M]=ot,A[fe]=w,M=fe):(A[M]=ue,A[W]=w,M=W);else if(fe<O&&0>i(ot,w))A[M]=ot,A[fe]=w,M=fe;else break e}}return x}function i(A,x){var w=A.sortIndex-x.sortIndex;return w!==0?w:A.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(A){for(var x=n(c);x!==null;){if(x.callback===null)r(c);else if(x.startTime<=A)r(c),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(c)}}function S(A){if(v=!1,_(A),!y)if(n(l)!==null)y=!0,xt(T);else{var x=n(c);x!==null&&Te(S,x.startTime-A)}}function T(A,x){y=!1,v&&(v=!1,g(R),R=-1),p=!0;var w=f;try{for(_(x),h=n(l);h!==null&&(!(h.expirationTime>x)||A&&!Re());){var M=h.callback;if(typeof M=="function"){h.callback=null,f=h.priorityLevel;var O=M(h.expirationTime<=x);x=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),_(x)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var W=n(c);W!==null&&Te(S,W.startTime-x),$=!1}return $}finally{h=null,f=w,p=!1}}var b=!1,N=null,R=-1,j=5,F=-1;function Re(){return!(t.unstable_now()-F<j)}function L(){if(N!==null){var A=t.unstable_now();F=A;var x=!0;try{x=N(!0,A)}finally{x?U():(b=!1,N=null)}}else b=!1}var U;if(typeof m=="function")U=function(){m(L)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Q=K.port2;K.port1.onmessage=L,U=function(){Q.postMessage(null)}}else U=function(){C(L,0)};function xt(A){N=A,b||(b=!0,U())}function Te(A,x){R=C(function(){A(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,xt(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var x=3;break;default:x=f}var w=f;f=x;try{return A()}finally{f=w}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,x){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var w=f;f=A;try{return x()}finally{f=w}},t.unstable_scheduleCallback=function(A,x,w){var M=t.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?M+w:M):w=M,A){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=w+O,A={id:d++,callback:x,priorityLevel:A,startTime:w,expirationTime:O,sortIndex:-1},w>M?(A.sortIndex=w,e(c,A),n(l)===null&&A===n(c)&&(v?(g(R),R=-1):v=!0,Te(S,w-M))):(A.sortIndex=O,e(l,A),y||p||(y=!0,xt(T))),A},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(A){var x=f;return function(){var w=f;f=x;try{return A.apply(this,arguments)}finally{f=w}}}})(o0);s0.exports=o0;var Qx=s0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=E,Ot=Qx;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,bo={};function Si(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(bo[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,Jx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pg={},Og={};function Xx(t){return rh.call(Og,t)?!0:rh.call(Pg,t)?!1:Jx.test(t)?Og[t]=!0:(Pg[t]=!0,!1)}function Zx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eT(t,e,n,r){if(e===null||typeof e>"u"||Zx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Xf);Je[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Xf);Je[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Xf);Je[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zf(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eT(e,n,i,r)&&(n=null),r||i===null?Xx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),Lg=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,Xu;function ro(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var Zu=!1;function ed(t,e){if(!t||Zu)return"";Zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function tT(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Mi:return"Portal";case ih:return"Profiler";case ep:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function nT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rT(t){var e=h0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=rT(t))}function f0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=h0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&Zf(t,"checked",e,!1)}function ch(t,e){p0(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function Qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(io(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function m0(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function v0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=v0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sT=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(sT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,Ji=null,Xi=null;function jg(t){if(t=wa(t)){if(typeof gh!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Xc(e),gh(t.stateNode,t.type,e))}}function w0(t){Ji?Xi?Xi.push(t):Xi=[t]:Ji=t}function E0(){if(Ji){var t=Ji,e=Xi;if(Xi=Ji=null,jg(t),e)for(t=0;t<e.length;t++)jg(e[t])}}function C0(t,e){return t(e)}function S0(){}var td=!1;function x0(t,e,n){if(td)return t(e,n);td=!0;try{return C0(t,e,n)}finally{td=!1,(Ji!==null||Xi!==null)&&(S0(),E0())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var yh=!1;if(jn)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){yh=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{yh=!1}function oT(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var fo=!1,Hl=null,Wl=!1,vh=null,aT={onError:function(t){fo=!0,Hl=t}};function lT(t,e,n,r,i,s,o,a,l){fo=!1,Hl=null,oT.apply(aT,arguments)}function cT(t,e,n,r,i,s,o,a,l){if(lT.apply(this,arguments),fo){if(fo){var c=Hl;fo=!1,Hl=null}else throw Error(I(198));Wl||(Wl=!0,vh=c)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bg(t){if(xi(t)!==t)throw Error(I(188))}function uT(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bg(i),t;if(s===r)return Bg(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function I0(t){return t=uT(t),t!==null?k0(t):null}function k0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k0(t);if(e!==null)return e;t=t.sibling}return null}var b0=Ot.unstable_scheduleCallback,$g=Ot.unstable_cancelCallback,dT=Ot.unstable_shouldYield,hT=Ot.unstable_requestPaint,Se=Ot.unstable_now,fT=Ot.unstable_getCurrentPriorityLevel,ip=Ot.unstable_ImmediatePriority,N0=Ot.unstable_UserBlockingPriority,Vl=Ot.unstable_NormalPriority,pT=Ot.unstable_LowPriority,R0=Ot.unstable_IdlePriority,Gc=null,vn=null;function mT(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Gc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:vT,gT=Math.log,yT=Math.LN2;function vT(t){return t>>>=0,t===0?32:31-(gT(t)/yT|0)|0}var Ja=64,Xa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=so(a):(s&=o,s!==0&&(r=so(s)))}else o=n&~i,o!==0?r=so(o):s!==0&&(r=so(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function _T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=_T(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A0(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function ET(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function P0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O0,op,L0,D0,M0,wh=!1,Za=[],mr=null,gr=null,yr=null,Ao=new Map,Po=new Map,sr=[],CT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zg(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wa(e),e!==null&&op(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ST(t,e,n,r,i){switch(e){case"focusin":return mr=Ws(mr,t,e,n,r,i),!0;case"dragenter":return gr=Ws(gr,t,e,n,r,i),!0;case"mouseover":return yr=Ws(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,Ws(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Ws(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function F0(t){var e=Kr(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=T0(n),e!==null){t.blockedOn=e,M0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=wa(n),e!==null&&op(e),t.blockedOn=n,!1;e.shift()}return!0}function Hg(t,e,n){xl(t)&&n.delete(e)}function xT(){wh=!1,mr!==null&&xl(mr)&&(mr=null),gr!==null&&xl(gr)&&(gr=null),yr!==null&&xl(yr)&&(yr=null),Ao.forEach(Hg),Po.forEach(Hg)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,xT)))}function Oo(t){function e(i){return Vs(i,t)}if(0<Za.length){Vs(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Vs(mr,t),gr!==null&&Vs(gr,t),yr!==null&&Vs(yr,t),Ao.forEach(e),Po.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)F0(n),n.blockedOn===null&&sr.shift()}var Zi=qn.ReactCurrentBatchConfig,Kl=!0;function TT(t,e,n,r){var i=te,s=Zi.transition;Zi.transition=null;try{te=1,ap(t,e,n,r)}finally{te=i,Zi.transition=s}}function IT(t,e,n,r){var i=te,s=Zi.transition;Zi.transition=null;try{te=4,ap(t,e,n,r)}finally{te=i,Zi.transition=s}}function ap(t,e,n,r){if(Kl){var i=Eh(t,e,n,r);if(i===null)hd(t,e,r,Gl,n),zg(t,r);else if(ST(i,t,e,n,r))r.stopPropagation();else if(zg(t,r),e&4&&-1<CT.indexOf(t)){for(;i!==null;){var s=wa(i);if(s!==null&&O0(s),s=Eh(t,e,n,r),s===null&&hd(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hd(t,e,r,null,n)}}var Gl=null;function Eh(t,e,n,r){if(Gl=null,t=rp(r),t=Kr(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function U0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fT()){case ip:return 1;case N0:return 4;case Vl:case pT:return 16;case R0:return 536870912;default:return 16}default:return 16}}var dr=null,lp=null,Tl=null;function j0(){if(Tl)return Tl;var t,e=lp,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Wg(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:Wg,this.isPropagationStopped=Wg,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=Ft(ks),_a=ge({},ks,{view:0,detail:0}),kT=Ft(_a),rd,id,qs,Yc=ge({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(rd=t.screenX-qs.screenX,id=t.screenY-qs.screenY):id=rd=0,qs=t),rd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),Vg=Ft(Yc),bT=ge({},Yc,{dataTransfer:0}),NT=Ft(bT),RT=ge({},_a,{relatedTarget:0}),sd=Ft(RT),AT=ge({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),PT=Ft(AT),OT=ge({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LT=Ft(OT),DT=ge({},ks,{data:0}),qg=Ft(DT),MT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UT[t])?!!e[t]:!1}function up(){return jT}var BT=ge({},_a,{key:function(t){if(t.key){var e=MT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$T=Ft(BT),zT=ge({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kg=Ft(zT),HT=ge({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),WT=Ft(HT),VT=ge({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),qT=Ft(VT),KT=ge({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GT=Ft(KT),YT=[9,13,27,32],dp=jn&&"CompositionEvent"in window,po=null;jn&&"documentMode"in document&&(po=document.documentMode);var QT=jn&&"TextEvent"in window&&!po,B0=jn&&(!dp||po&&8<po&&11>=po),Gg=String.fromCharCode(32),Yg=!1;function $0(t,e){switch(t){case"keyup":return YT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function JT(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(Yg=!0,Gg);case"textInput":return t=e.data,t===Gg&&Yg?null:t;default:return null}}function XT(t,e){if(Ui)return t==="compositionend"||!dp&&$0(t,e)?(t=j0(),Tl=lp=dr=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var ZT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZT[t.type]:e==="textarea"}function H0(t,e,n,r){w0(r),e=Yl(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Lo=null;function eI(t){ew(t,0)}function Qc(t){var e=$i(t);if(f0(e))return t}function tI(t,e){if(t==="change")return e}var W0=!1;if(jn){var od;if(jn){var ad="oninput"in document;if(!ad){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),ad=typeof Jg.oninput=="function"}od=ad}else od=!1;W0=od&&(!document.documentMode||9<document.documentMode)}function Xg(){mo&&(mo.detachEvent("onpropertychange",V0),Lo=mo=null)}function V0(t){if(t.propertyName==="value"&&Qc(Lo)){var e=[];H0(e,Lo,t,rp(t)),x0(eI,e)}}function nI(t,e,n){t==="focusin"?(Xg(),mo=e,Lo=n,mo.attachEvent("onpropertychange",V0)):t==="focusout"&&Xg()}function rI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(Lo)}function iI(t,e){if(t==="click")return Qc(e)}function sI(t,e){if(t==="input"||t==="change")return Qc(e)}function oI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:oI;function Do(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function Zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ey(t,e){var n=Zg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zg(n)}}function q0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K0(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aI(t){var e=K0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q0(n.ownerDocument.documentElement,n)){if(r!==null&&hp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ey(n,s);var o=ey(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lI=jn&&"documentMode"in document&&11>=document.documentMode,ji=null,Ch=null,go=null,Sh=!1;function ty(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||ji==null||ji!==zl(r)||(r=ji,"selectionStart"in r&&hp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Do(go,r)||(go=r,r=Yl(Ch,"onSelect"),0<r.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ld={},G0={};jn&&(G0=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function Jc(t){if(ld[t])return ld[t];if(!Bi[t])return t;var e=Bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in G0)return ld[t]=e[n];return t}var Y0=Jc("animationend"),Q0=Jc("animationiteration"),J0=Jc("animationstart"),X0=Jc("transitionend"),Z0=new Map,ny="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){Z0.set(t,e),Si(e,[t])}for(var cd=0;cd<ny.length;cd++){var ud=ny[cd],cI=ud.toLowerCase(),uI=ud[0].toUpperCase()+ud.slice(1);Pr(cI,"on"+uI)}Pr(Y0,"onAnimationEnd");Pr(Q0,"onAnimationIteration");Pr(J0,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(X0,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dI=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function ry(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cT(r,e,void 0,t),t.currentTarget=null}function ew(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ry(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ry(i,a,c),s=l}}}if(Wl)throw t=vh,Wl=!1,vh=null,t}function ae(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(tw(e,t,2,!1),n.add(r))}function dd(t,e,n){var r=0;e&&(r|=4),tw(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[nl]){t[nl]=!0,l0.forEach(function(n){n!=="selectionchange"&&(dI.has(n)||dd(n,!1,t),dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,dd("selectionchange",!1,e))}}function tw(t,e,n,r){switch(U0(e)){case 1:var i=TT;break;case 4:i=IT;break;default:i=ap}n=i.bind(null,e,n,t),i=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}x0(function(){var c=s,d=rp(n),h=[];e:{var f=Z0.get(t);if(f!==void 0){var p=cp,y=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=$T;break;case"focusin":y="focus",p=sd;break;case"focusout":y="blur",p=sd;break;case"beforeblur":case"afterblur":p=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WT;break;case Y0:case Q0:case J0:p=PT;break;case X0:p=qT;break;case"scroll":p=kT;break;case"wheel":p=GT;break;case"copy":case"cut":case"paste":p=LT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kg}var v=(e&4)!==0,C=!v&&t==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=c,_;m!==null;){_=m;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,g!==null&&(S=Ro(m,g),S!=null&&v.push(Fo(m,S,_)))),C)break;m=m.return}0<v.length&&(f=new p(f,y,null,n,d),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==mh&&(y=n.relatedTarget||n.fromElement)&&(Kr(y)||y[Bn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Kr(y):null,y!==null&&(C=xi(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=Vg,S="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=Kg,S="onPointerLeave",g="onPointerEnter",m="pointer"),C=p==null?f:$i(p),_=y==null?f:$i(y),f=new v(S,m+"leave",p,n,d),f.target=C,f.relatedTarget=_,S=null,Kr(d)===c&&(v=new v(g,m+"enter",y,n,d),v.target=_,v.relatedTarget=C,S=v),C=S,p&&y)t:{for(v=p,g=y,m=0,_=v;_;_=Oi(_))m++;for(_=0,S=g;S;S=Oi(S))_++;for(;0<m-_;)v=Oi(v),m--;for(;0<_-m;)g=Oi(g),_--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Oi(v),g=Oi(g)}v=null}else v=null;p!==null&&iy(h,f,p,v,!1),y!==null&&C!==null&&iy(h,C,y,v,!0)}}e:{if(f=c?$i(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=tI;else if(Qg(f))if(W0)T=sI;else{T=rI;var b=nI}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=iI);if(T&&(T=T(t,c))){H0(h,T,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&uh(f,"number",f.value)}switch(b=c?$i(c):window,t){case"focusin":(Qg(b)||b.contentEditable==="true")&&(ji=b,Ch=c,go=null);break;case"focusout":go=Ch=ji=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,ty(h,n,d);break;case"selectionchange":if(lI)break;case"keydown":case"keyup":ty(h,n,d)}var N;if(dp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ui?$0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(B0&&n.locale!=="ko"&&(Ui||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ui&&(N=j0()):(dr=d,lp="value"in dr?dr.value:dr.textContent,Ui=!0)),b=Yl(c,R),0<b.length&&(R=new qg(R,t,null,n,d),h.push({event:R,listeners:b}),N?R.data=N:(N=z0(n),N!==null&&(R.data=N)))),(N=QT?JT(t,n):XT(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(d=new qg("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=N))}ew(h,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Fo(t,s,i)),s=Ro(t,e),s!=null&&r.push(Fo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function iy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ro(n,s),l!=null&&o.unshift(Fo(n,l,a))):i||(l=Ro(n,s),l!=null&&o.push(Fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hI=/\r\n?/g,fI=/\u0000|\uFFFD/g;function sy(t){return(typeof t=="string"?t:""+t).replace(hI,`
`).replace(fI,"")}function rl(t,e,n){if(e=sy(e),sy(t)!==e&&n)throw Error(I(425))}function Ql(){}var xh=null,Th=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,pI=typeof clearTimeout=="function"?clearTimeout:void 0,oy=typeof Promise=="function"?Promise:void 0,mI=typeof queueMicrotask=="function"?queueMicrotask:typeof oy<"u"?function(t){return oy.resolve(null).then(t).catch(gI)}:kh;function gI(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ay(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),fn="__reactFiber$"+bs,Uo="__reactProps$"+bs,Bn="__reactContainer$"+bs,bh="__reactEvents$"+bs,yI="__reactListeners$"+bs,vI="__reactHandles$"+bs;function Kr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ay(t);t!==null;){if(n=t[fn])return n;t=ay(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[fn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Xc(t){return t[Uo]||null}var Nh=[],zi=-1;function Or(t){return{current:t}}function ce(t){0>zi||(t.current=Nh[zi],Nh[zi]=null,zi--)}function oe(t,e){zi++,Nh[zi]=t.current,t.current=e}var Nr={},it=Or(Nr),Et=Or(!1),ai=Nr;function ds(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Jl(){ce(Et),ce(it)}function ly(t,e,n){if(it.current!==Nr)throw Error(I(168));oe(it,e),oe(Et,n)}function nw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,nT(t)||"Unknown",i));return ge({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ai=it.current,oe(it,t),oe(Et,Et.current),!0}function cy(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=nw(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,ce(Et),ce(it),oe(it,t)):ce(Et),oe(Et,n)}var Nn=null,Zc=!1,pd=!1;function rw(t){Nn===null?Nn=[t]:Nn.push(t)}function _I(t){Zc=!0,rw(t)}function Lr(){if(!pd&&Nn!==null){pd=!0;var t=0,e=te;try{var n=Nn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Zc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),b0(ip,Lr),i}finally{te=e,pd=!1}}return null}var Hi=[],Wi=0,Zl=null,ec=0,Bt=[],$t=0,li=null,Rn=1,An="";function $r(t,e){Hi[Wi++]=ec,Hi[Wi++]=Zl,Zl=t,ec=e}function iw(t,e,n){Bt[$t++]=Rn,Bt[$t++]=An,Bt[$t++]=li,li=t;var r=Rn;t=An;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-on(e)+i|n<<i|r,An=s+t}else Rn=1<<s|n<<i|r,An=t}function fp(t){t.return!==null&&($r(t,1),iw(t,1,0))}function pp(t){for(;t===Zl;)Zl=Hi[--Wi],Hi[Wi]=null,ec=Hi[--Wi],Hi[Wi]=null;for(;t===li;)li=Bt[--$t],Bt[$t]=null,An=Bt[--$t],Bt[$t]=null,Rn=Bt[--$t],Bt[$t]=null}var Pt=null,Nt=null,de=!1,tn=null;function sw(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Nt=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:Rn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Nt=null,!0):!1;default:return!1}}function Rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(de){var e=Nt;if(e){var n=e;if(!uy(t,e)){if(Rh(t))throw Error(I(418));e=vr(n.nextSibling);var r=Pt;e&&uy(t,e)?sw(r,n):(t.flags=t.flags&-4097|2,de=!1,Pt=t)}}else{if(Rh(t))throw Error(I(418));t.flags=t.flags&-4097|2,de=!1,Pt=t}}}function dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function il(t){if(t!==Pt)return!1;if(!de)return dy(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Nt)){if(Rh(t))throw ow(),Error(I(418));for(;e;)sw(t,e),e=vr(e.nextSibling)}if(dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Pt?vr(t.stateNode.nextSibling):null;return!0}function ow(){for(var t=Nt;t;)t=vr(t.nextSibling)}function hs(){Nt=Pt=null,de=!1}function mp(t){tn===null?tn=[t]:tn.push(t)}var wI=qn.ReactCurrentBatchConfig;function Zt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tc=Or(null),nc=null,Vi=null,gp=null;function yp(){gp=Vi=nc=null}function vp(t){var e=tc.current;ce(tc),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function es(t,e){nc=t,gp=Vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},Vi===null){if(nc===null)throw Error(I(308));Vi=t,nc.dependencies={lanes:0,firstContext:t}}else Vi=Vi.next=t;return e}var Gr=null;function _p(t){Gr===null?Gr=[t]:Gr.push(t)}function aw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_p(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,_p(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}function hy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,h,f):y,f==null)break e;h=ge({},h,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ui|=o,t.lanes=o,t.memoizedState=h}}function fy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var cw=new a0.Component().refs;function Oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=Er(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(an(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=Er(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(an(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=Er(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(an(e,t,r,n),kl(e,t,r))}};function py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function uw(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=Ct(e)?ai:it.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function my(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function Lh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=cw,wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=Ct(e)?ai:it.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&eu.enqueueReplaceState(i,i.state,null),rc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===cw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gy(t){var e=t._init;return e(t._payload)}function dw(t){function e(g,m){if(t){var _=g.deletions;_===null?(g.deletions=[m],g.flags|=16):_.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Cr(g,m),g.index=0,g.sibling=null,g}function s(g,m,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<m?(g.flags|=2,m):_):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,_,S){return m===null||m.tag!==6?(m=Ed(_,g.mode,S),m.return=g,m):(m=i(m,_),m.return=g,m)}function l(g,m,_,S){var T=_.type;return T===Fi?d(g,m,_.props.children,S,_.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rr&&gy(T)===m.type)?(S=i(m,_.props),S.ref=Ks(g,m,_),S.return=g,S):(S=Ol(_.type,_.key,_.props,null,g.mode,S),S.ref=Ks(g,m,_),S.return=g,S)}function c(g,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Cd(_,g.mode,S),m.return=g,m):(m=i(m,_.children||[]),m.return=g,m)}function d(g,m,_,S,T){return m===null||m.tag!==7?(m=ni(_,g.mode,S,T),m.return=g,m):(m=i(m,_),m.return=g,m)}function h(g,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ed(""+m,g.mode,_),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ga:return _=Ol(m.type,m.key,m.props,null,g.mode,_),_.ref=Ks(g,null,m),_.return=g,_;case Mi:return m=Cd(m,g.mode,_),m.return=g,m;case rr:var S=m._init;return h(g,S(m._payload),_)}if(io(m)||zs(m))return m=ni(m,g.mode,_,null),m.return=g,m;sl(g,m)}return null}function f(g,m,_,S){var T=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(g,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ga:return _.key===T?l(g,m,_,S):null;case Mi:return _.key===T?c(g,m,_,S):null;case rr:return T=_._init,f(g,m,T(_._payload),S)}if(io(_)||zs(_))return T!==null?null:d(g,m,_,S,null);sl(g,_)}return null}function p(g,m,_,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(_)||null,a(m,g,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ga:return g=g.get(S.key===null?_:S.key)||null,l(m,g,S,T);case Mi:return g=g.get(S.key===null?_:S.key)||null,c(m,g,S,T);case rr:var b=S._init;return p(g,m,_,b(S._payload),T)}if(io(S)||zs(S))return g=g.get(_)||null,d(m,g,S,T,null);sl(m,S)}return null}function y(g,m,_,S){for(var T=null,b=null,N=m,R=m=0,j=null;N!==null&&R<_.length;R++){N.index>R?(j=N,N=null):j=N.sibling;var F=f(g,N,_[R],S);if(F===null){N===null&&(N=j);break}t&&N&&F.alternate===null&&e(g,N),m=s(F,m,R),b===null?T=F:b.sibling=F,b=F,N=j}if(R===_.length)return n(g,N),de&&$r(g,R),T;if(N===null){for(;R<_.length;R++)N=h(g,_[R],S),N!==null&&(m=s(N,m,R),b===null?T=N:b.sibling=N,b=N);return de&&$r(g,R),T}for(N=r(g,N);R<_.length;R++)j=p(N,g,R,_[R],S),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?R:j.key),m=s(j,m,R),b===null?T=j:b.sibling=j,b=j);return t&&N.forEach(function(Re){return e(g,Re)}),de&&$r(g,R),T}function v(g,m,_,S){var T=zs(_);if(typeof T!="function")throw Error(I(150));if(_=T.call(_),_==null)throw Error(I(151));for(var b=T=null,N=m,R=m=0,j=null,F=_.next();N!==null&&!F.done;R++,F=_.next()){N.index>R?(j=N,N=null):j=N.sibling;var Re=f(g,N,F.value,S);if(Re===null){N===null&&(N=j);break}t&&N&&Re.alternate===null&&e(g,N),m=s(Re,m,R),b===null?T=Re:b.sibling=Re,b=Re,N=j}if(F.done)return n(g,N),de&&$r(g,R),T;if(N===null){for(;!F.done;R++,F=_.next())F=h(g,F.value,S),F!==null&&(m=s(F,m,R),b===null?T=F:b.sibling=F,b=F);return de&&$r(g,R),T}for(N=r(g,N);!F.done;R++,F=_.next())F=p(N,g,R,F.value,S),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?R:F.key),m=s(F,m,R),b===null?T=F:b.sibling=F,b=F);return t&&N.forEach(function(L){return e(g,L)}),de&&$r(g,R),T}function C(g,m,_,S){if(typeof _=="object"&&_!==null&&_.type===Fi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ga:e:{for(var T=_.key,b=m;b!==null;){if(b.key===T){if(T=_.type,T===Fi){if(b.tag===7){n(g,b.sibling),m=i(b,_.props.children),m.return=g,g=m;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rr&&gy(T)===b.type){n(g,b.sibling),m=i(b,_.props),m.ref=Ks(g,b,_),m.return=g,g=m;break e}n(g,b);break}else e(g,b);b=b.sibling}_.type===Fi?(m=ni(_.props.children,g.mode,S,_.key),m.return=g,g=m):(S=Ol(_.type,_.key,_.props,null,g.mode,S),S.ref=Ks(g,m,_),S.return=g,g=S)}return o(g);case Mi:e:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(g,m.sibling),m=i(m,_.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Cd(_,g.mode,S),m.return=g,g=m}return o(g);case rr:return b=_._init,C(g,m,b(_._payload),S)}if(io(_))return y(g,m,_,S);if(zs(_))return v(g,m,_,S);sl(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,_),m.return=g,g=m):(n(g,m),m=Ed(_,g.mode,S),m.return=g,g=m),o(g)):n(g,m)}return C}var fs=dw(!0),hw=dw(!1),Ea={},_n=Or(Ea),jo=Or(Ea),Bo=Or(Ea);function Yr(t){if(t===Ea)throw Error(I(174));return t}function Ep(t,e){switch(oe(Bo,e),oe(jo,t),oe(_n,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hh(e,t)}ce(_n),oe(_n,e)}function ps(){ce(_n),ce(jo),ce(Bo)}function fw(t){Yr(Bo.current);var e=Yr(_n.current),n=hh(e,t.type);e!==n&&(oe(jo,t),oe(_n,n))}function Cp(t){jo.current===t&&(ce(_n),ce(jo))}var pe=Or(0);function ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function Sp(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var bl=qn.ReactCurrentDispatcher,gd=qn.ReactCurrentBatchConfig,ci=0,me=null,Oe=null,Ue=null,sc=!1,yo=!1,$o=0,EI=0;function Ze(){throw Error(I(321))}function xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Tp(t,e,n,r,i,s){if(ci=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?TI:II,t=n(r,i),yo){s=0;do{if(yo=!1,$o=0,25<=s)throw Error(I(301));s+=1,Ue=Oe=null,e.updateQueue=null,bl.current=kI,t=n(r,i)}while(yo)}if(bl.current=oc,e=Oe!==null&&Oe.next!==null,ci=0,Ue=Oe=me=null,sc=!1,e)throw Error(I(300));return t}function Ip(){var t=$o!==0;return $o=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?me.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Kt(){if(Oe===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Ue===null?me.memoizedState:Ue.next;if(e!==null)Ue=e,Oe=t;else{if(t===null)throw Error(I(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?me.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function zo(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ci&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,me.lanes|=d,ui|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pw(){}function mw(t,e){var n=me,r=Kt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,kp(vw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ho(9,yw.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(I(349));ci&30||gw(n,e,i)}return i}function gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yw(t,e,n,r){e.value=n,e.getSnapshot=r,_w(e)&&ww(t)}function vw(t,e,n){return n(function(){_w(e)&&ww(t)})}function _w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function ww(t){var e=$n(t,1);e!==null&&an(e,t,1,-1)}function yy(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,me,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ew(){return Kt().memoizedState}function Nl(t,e,n,r){var i=hn();me.flags|=t,i.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&xp(r,o.deps)){i.memoizedState=Ho(e,n,s,r);return}}me.flags|=t,i.memoizedState=Ho(1|e,n,s,r)}function vy(t,e){return Nl(8390656,8,t,e)}function kp(t,e){return tu(2048,8,t,e)}function Cw(t,e){return tu(4,2,t,e)}function Sw(t,e){return tu(4,4,t,e)}function xw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tw(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,xw.bind(null,e,t),n)}function bp(){}function Iw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bw(t,e,n){return ci&21?(cn(n,e)||(n=A0(),me.lanes|=n,ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function CI(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=gd.transition;gd.transition={};try{t(!1),e()}finally{te=n,gd.transition=r}}function Nw(){return Kt().memoizedState}function SI(t,e,n){var r=Er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rw(t))Aw(e,n);else if(n=aw(t,e,n,r),n!==null){var i=ut();an(n,t,r,i),Pw(n,e,r)}}function xI(t,e,n){var r=Er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rw(t))Aw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,_p(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=aw(t,e,i,r),n!==null&&(i=ut(),an(n,t,r,i),Pw(n,e,r))}}function Rw(t){var e=t.alternate;return t===me||e!==null&&e===me}function Aw(t,e){yo=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}var oc={readContext:qt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},TI={readContext:qt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:vy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,xw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SI.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:yy,useDebugValue:bp,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=yy(!1),e=t[0];return t=CI.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=hn();if(de){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ze===null)throw Error(I(349));ci&30||gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vy(vw.bind(null,r,s,t),[t]),r.flags|=2048,Ho(9,yw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=ze.identifierPrefix;if(de){var n=An,r=Rn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},II={readContext:qt,useCallback:Iw,useContext:qt,useEffect:kp,useImperativeHandle:Tw,useInsertionEffect:Cw,useLayoutEffect:Sw,useMemo:kw,useReducer:yd,useRef:Ew,useState:function(){return yd(zo)},useDebugValue:bp,useDeferredValue:function(t){var e=Kt();return bw(e,Oe.memoizedState,t)},useTransition:function(){var t=yd(zo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:pw,useSyncExternalStore:mw,useId:Nw,unstable_isNewReconciler:!1},kI={readContext:qt,useCallback:Iw,useContext:qt,useEffect:kp,useImperativeHandle:Tw,useInsertionEffect:Cw,useLayoutEffect:Sw,useMemo:kw,useReducer:vd,useRef:Ew,useState:function(){return vd(zo)},useDebugValue:bp,useDeferredValue:function(t){var e=Kt();return Oe===null?e.memoizedState=t:bw(e,Oe.memoizedState,t)},useTransition:function(){var t=vd(zo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:pw,useSyncExternalStore:mw,useId:Nw,unstable_isNewReconciler:!1};function ms(t,e){try{var n="",r=e;do n+=tT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bI=typeof WeakMap=="function"?WeakMap:Map;function Ow(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lc||(lc=!0,Vh=r),Dh(t,e)},n}function Lw(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zI.bind(null,t,e,n),e.then(t,t))}function wy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ey(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var NI=qn.ReactCurrentOwner,vt=!1;function lt(t,e,n,r){e.child=t===null?hw(e,null,n,r):fs(e,t.child,n,r)}function Cy(t,e,n,r,i){n=n.render;var s=e.ref;return es(e,i),r=Tp(t,e,n,r,s,i),n=Ip(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(de&&n&&fp(e),e.flags|=1,lt(t,e,r,i),e.child)}function Sy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dw(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Mh(t,e,n,r,i)}function Mw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Ki,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Ki,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(Ki,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(Ki,It),It|=r;return lt(t,e,i,n),e.child}function Fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,i){var s=Ct(n)?ai:it.current;return s=ds(e,s),es(e,i),n=Tp(t,e,n,r,s,i),r=Ip(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(de&&r&&fp(e),e.flags|=1,lt(t,e,n,i),e.child)}function xy(t,e,n,r,i){if(Ct(n)){var s=!0;Xl(e)}else s=!1;if(es(e,i),e.stateNode===null)Rl(t,e),uw(e,n,r),Lh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qt(c):(c=Ct(n)?ai:it.current,c=ds(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&my(e,o,r,c),ir=!1;var f=e.memoizedState;o.state=f,rc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Et.current||ir?(typeof d=="function"&&(Oh(e,n,d,r),l=e.memoizedState),(a=ir||py(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qt(l):(l=Ct(n)?ai:it.current,l=ds(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&my(e,o,r,l),ir=!1,f=e.memoizedState,o.state=f,rc(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Et.current||ir?(typeof p=="function"&&(Oh(e,n,p,r),y=e.memoizedState),(c=ir||py(e,n,c,r,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Fh(t,e,n,r,s,i)}function Fh(t,e,n,r,i,s){Fw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cy(e,n,!1),zn(t,e,s);r=e.stateNode,NI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):lt(t,e,a,s),e.memoizedState=r.state,i&&cy(e,n,!0),e.child}function Uw(t){var e=t.stateNode;e.pendingContext?ly(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ly(t,e.context,!1),Ep(t,e.containerInfo)}function Ty(t,e,n,r,i){return hs(),mp(i),e.flags|=256,lt(t,e,n,r),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function jw(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(pe,i&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jh(n),e.memoizedState=Uh,t):Np(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uh,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Np(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&mp(r),fs(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_d(Error(I(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=iu({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Uh,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=_d(s,r,void 0),ol(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),an(r,t,i,-1))}return Dp(),r=_d(Error(I(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=vr(i.nextSibling),Pt=e,de=!0,tn=null,t!==null&&(Bt[$t++]=Rn,Bt[$t++]=An,Bt[$t++]=li,Rn=t.id,An=t.overflow,li=e),e=Np(e,r.children),e.flags|=4096,e)}function Iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iy(t,n,e);else if(t.tag===19)Iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ic(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ic(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wd(e,!0,n,null,s);break;case"together":wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AI(t,e,n){switch(e.tag){case 3:Uw(e),hs();break;case 5:fw(e);break;case 1:Ct(e.type)&&Xl(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(tc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?jw(t,e,n):(oe(pe,pe.current&1),t=zn(t,e,n),t!==null?t.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Mw(t,e,n)}return zn(t,e,n)}var $w,Bh,zw,Hw;$w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};zw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(_n.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=dh(t,i),r=dh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}fh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PI(t,e,n){var r=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return Ct(e.type)&&Jl(),et(e),null;case 3:return r=e.stateNode,ps(),ce(Et),ce(it),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Gh(tn),tn=null))),Bh(t,e),et(e),null;case 5:Cp(e);var i=Yr(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)zw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return et(e),null}if(t=Yr(_n.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)ae(oo[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Dg(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Fg(r,s),ae("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,t),i=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":Ya(r),Mg(r,s,!0);break;case"textarea":Ya(r),Ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Uo]=r,$w(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)ae(oo[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":Dg(t,r),i=lh(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ae("invalid",t);break;case"textarea":Fg(t,r),i=dh(t,r),ae("invalid",t);break;default:i=r}fh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",t):l!=null&&Zf(t,s,l,o))}switch(n){case"input":Ya(t),Mg(t,r,!1);break;case"textarea":Ya(t),Ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)Hw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Yr(Bo.current),Yr(_n.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return et(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Nt!==null&&e.mode&1&&!(e.flags&128))ow(),hs(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[fn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else tn!==null&&(Gh(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Le===0&&(Le=3):Dp())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ps(),Bh(t,e),t===null&&Mo(e.stateNode.containerInfo),et(e),null;case 10:return vp(e.type._context),et(e),null;case 17:return Ct(e.type)&&Jl(),et(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ic(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>gs&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ic(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return et(e),null}else 2*Se()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Lp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function OI(t,e){switch(pp(e),e.tag){case 1:return Ct(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),ce(Et),ce(it),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cp(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return ps(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var al=!1,tt=!1,LI=typeof WeakSet=="function"?WeakSet:Set,D=null;function qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){ye(t,e,r)}}var ky=!1;function DI(t,e){if(xh=Kl,t=K0(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Th={focusedElem:t,selectionRange:n},Kl=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Zt(e.type,v),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){ye(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=ky,ky=!1,y}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$h(e,n,s)}i=i.next}while(i!==r)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ww(t){var e=t.alternate;e!==null&&(t.alternate=null,Ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Uo],delete e[bh],delete e[yI],delete e[vI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vw(t){return t.tag===5||t.tag===3||t.tag===4}function by(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var Ve=null,en=!1;function tr(t,e,n){for(n=n.child;n!==null;)qw(t,e,n),n=n.sibling}function qw(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Gc,n)}catch{}switch(n.tag){case 5:tt||qi(n,e);case 6:var r=Ve,i=en;Ve=null,tr(t,e,n),Ve=r,en=i,Ve!==null&&(en?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(en?(t=Ve,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),Oo(t)):fd(Ve,n.stateNode));break;case 4:r=Ve,i=en,Ve=n.stateNode.containerInfo,en=!0,tr(t,e,n),Ve=r,en=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$h(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!tt&&(qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ye(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,tr(t,e,n),tt=r):tr(t,e,n);break;default:tr(t,e,n)}}function Ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LI),e.forEach(function(r){var i=WI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,en=!1;break e;case 3:Ve=a.stateNode.containerInfo,en=!0;break e;case 4:Ve=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(Ve===null)throw Error(I(160));qw(s,o,i),Ve=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kw(e,t),e=e.sibling}function Kw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),dn(t),r&4){try{vo(3,t,t.return),nu(3,t)}catch(v){ye(t,t.return,v)}try{vo(5,t,t.return)}catch(v){ye(t,t.return,v)}}break;case 1:Xt(e,t),dn(t),r&512&&n!==null&&qi(n,n.return);break;case 5:if(Xt(e,t),dn(t),r&512&&n!==null&&qi(n,n.return),t.flags&32){var i=t.stateNode;try{No(i,"")}catch(v){ye(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p0(i,s),ph(a,o);var c=ph(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?_0(i,h):d==="dangerouslySetInnerHTML"?y0(i,h):d==="children"?No(i,h):Zf(i,d,h,c)}switch(a){case"input":ch(i,s);break;case"textarea":m0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qi(i,!!s.multiple,s.defaultValue,!0):Qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(v){ye(t,t.return,v)}}break;case 6:if(Xt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ye(t,t.return,v)}}break;case 3:if(Xt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(v){ye(t,t.return,v)}break;case 4:Xt(e,t),dn(t);break;case 13:Xt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pp=Se())),r&4&&Ny(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Xt(e,t),tt=c):Xt(e,t),dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(h=D=d;D!==null;){switch(f=D,p=f.child,f.tag){case 0:case 11:case 14:case 15:vo(4,f,f.return);break;case 1:qi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ye(r,n,v)}}break;case 5:qi(f,f.return);break;case 22:if(f.memoizedState!==null){Ay(h);continue}}p!==null?(p.return=f,D=p):Ay(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=v0("display",o))}catch(v){ye(t,t.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){ye(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xt(e,t),dn(t),r&4&&Ny(t);break;case 21:break;default:Xt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vw(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=by(t);Wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=by(t);Hh(t,a,o);break;default:throw Error(I(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MI(t,e,n){D=t,Gw(t)}function Gw(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=al;var c=tt;if(al=o,(tt=l)&&!c)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Py(i):l!==null?(l.return=o,D=l):Py(i);for(;s!==null;)D=s,Gw(s),s=s.sibling;D=i,al=a,tt=c}Ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Ry(t)}}function Ry(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Oo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}tt||e.flags&512&&zh(e)}catch(f){ye(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Ay(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Py(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ye(e,i,l)}}var s=e.return;try{zh(e)}catch(l){ye(e,s,l)}break;case 5:var o=e.return;try{zh(e)}catch(l){ye(e,o,l)}}}catch(l){ye(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var FI=Math.ceil,ac=qn.ReactCurrentDispatcher,Rp=qn.ReactCurrentOwner,Vt=qn.ReactCurrentBatchConfig,X=0,ze=null,Ie=null,Ye=0,It=0,Ki=Or(0),Le=0,Wo=null,ui=0,ru=0,Ap=0,_o=null,mt=null,Pp=0,gs=1/0,bn=null,lc=!1,Vh=null,wr=null,ll=!1,hr=null,cc=0,wo=0,qh=null,Al=-1,Pl=0;function ut(){return X&6?Se():Al!==-1?Al:Al=Se()}function Er(t){return t.mode&1?X&2&&Ye!==0?Ye&-Ye:wI.transition!==null?(Pl===0&&(Pl=A0()),Pl):(t=te,t!==0||(t=window.event,t=t===void 0?16:U0(t.type)),t):1}function an(t,e,n,r){if(50<wo)throw wo=0,qh=null,Error(I(185));va(t,n,r),(!(X&2)||t!==ze)&&(t===ze&&(!(X&2)&&(ru|=n),Le===4&&or(t,Ye)),St(t,r),n===1&&X===0&&!(e.mode&1)&&(gs=Se()+500,Zc&&Lr()))}function St(t,e){var n=t.callbackNode;wT(t,e);var r=ql(t,t===ze?Ye:0);if(r===0)n!==null&&$g(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$g(n),e===1)t.tag===0?_I(Oy.bind(null,t)):rw(Oy.bind(null,t)),mI(function(){!(X&6)&&Lr()}),n=null;else{switch(P0(r)){case 1:n=ip;break;case 4:n=N0;break;case 16:n=Vl;break;case 536870912:n=R0;break;default:n=Vl}n=nE(n,Yw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yw(t,e){if(Al=-1,Pl=0,X&6)throw Error(I(327));var n=t.callbackNode;if(ts()&&t.callbackNode!==n)return null;var r=ql(t,t===ze?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var i=X;X|=2;var s=Jw();(ze!==t||Ye!==e)&&(bn=null,gs=Se()+500,ti(t,e));do try{BI();break}catch(a){Qw(t,a)}while(1);yp(),ac.current=s,X=i,Ie!==null?e=0:(ze=null,Ye=0,e=Le)}if(e!==0){if(e===2&&(i=_h(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=Wo,ti(t,0),or(t,r),St(t,Se()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!UI(i)&&(e=uc(t,r),e===2&&(s=_h(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=Wo,ti(t,0),or(t,r),St(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:zr(t,mt,bn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=Pp+500-Se(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kh(zr.bind(null,t,mt,bn),e);break}zr(t,mt,bn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FI(r/1960))-r,10<r){t.timeoutHandle=kh(zr.bind(null,t,mt,bn),r);break}zr(t,mt,bn);break;case 5:zr(t,mt,bn);break;default:throw Error(I(329))}}}return St(t,Se()),t.callbackNode===n?Yw.bind(null,t):null}function Kh(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=uc(t,e),t!==2&&(e=mt,mt=n,e!==null&&Gh(e)),t}function Gh(t){mt===null?mt=t:mt.push.apply(mt,t)}function UI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Ap,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Oy(t){if(X&6)throw Error(I(327));ts();var e=ql(t,0);if(!(e&1))return St(t,Se()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=_h(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=Wo,ti(t,0),or(t,e),St(t,Se()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,mt,bn),St(t,Se()),null}function Op(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(gs=Se()+500,Zc&&Lr())}}function di(t){hr!==null&&hr.tag===0&&!(X&6)&&ts();var e=X;X|=1;var n=Vt.transition,r=te;try{if(Vt.transition=null,te=1,t)return t()}finally{te=r,Vt.transition=n,X=e,!(X&6)&&Lr()}}function Lp(){It=Ki.current,ce(Ki)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pI(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:ps(),ce(Et),ce(it),Sp();break;case 5:Cp(r);break;case 4:ps();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:vp(r.type._context);break;case 22:case 23:Lp()}n=n.return}if(ze=t,Ie=t=Cr(t.current,null),Ye=It=e,Le=0,Wo=null,Ap=ru=ui=0,mt=_o=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function Qw(t,e){do{var n=Ie;try{if(yp(),bl.current=oc,sc){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sc=!1}if(ci=0,Ue=Oe=me=null,yo=!1,$o=0,Rp.current=null,n===null||n.return===null){Le=1,Wo=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wy(o);if(p!==null){p.flags&=-257,Ey(p,o,a,s,e),p.mode&1&&_y(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){_y(s,c,e),Dp();break e}l=Error(I(426))}}else if(de&&a.mode&1){var C=wy(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ey(C,o,a,s,e),mp(ms(l,a));break e}}s=l=ms(l,a),Le!==4&&(Le=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Ow(s,l,e);hy(s,g);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(wr===null||!wr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Lw(s,a,e);hy(s,S);break e}}s=s.return}while(s!==null)}Zw(n)}catch(T){e=T,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Jw(){var t=ac.current;return ac.current=oc,t===null?oc:t}function Dp(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(ui&268435455)&&!(ru&268435455)||or(ze,Ye)}function uc(t,e){var n=X;X|=2;var r=Jw();(ze!==t||Ye!==e)&&(bn=null,ti(t,e));do try{jI();break}catch(i){Qw(t,i)}while(1);if(yp(),X=n,ac.current=r,Ie!==null)throw Error(I(261));return ze=null,Ye=0,Le}function jI(){for(;Ie!==null;)Xw(Ie)}function BI(){for(;Ie!==null&&!dT();)Xw(Ie)}function Xw(t){var e=tE(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?Zw(t):Ie=e,Rp.current=null}function Zw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OI(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ie=null;return}}else if(n=PI(n,e,It),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Le===0&&(Le=5)}function zr(t,e,n){var r=te,i=Vt.transition;try{Vt.transition=null,te=1,$I(t,e,n,r)}finally{Vt.transition=i,te=r}return null}function $I(t,e,n,r){do ts();while(hr!==null);if(X&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ET(t,s),t===ze&&(Ie=ze=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,nE(Vl,function(){return ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=te;te=1;var a=X;X|=4,Rp.current=null,DI(t,n),Kw(n,t),aI(Th),Kl=!!xh,Th=xh=null,t.current=n,MI(n),hT(),X=a,te=o,Vt.transition=s}else t.current=n;if(ll&&(ll=!1,hr=t,cc=i),s=t.pendingLanes,s===0&&(wr=null),mT(n.stateNode),St(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lc)throw lc=!1,t=Vh,Vh=null,t;return cc&1&&t.tag!==0&&ts(),s=t.pendingLanes,s&1?t===qh?wo++:(wo=0,qh=t):wo=0,Lr(),null}function ts(){if(hr!==null){var t=P0(cc),e=Vt.transition,n=te;try{if(Vt.transition=null,te=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,cc=0,X&6)throw Error(I(331));var i=X;for(X|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:vo(8,d,s)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var f=d.sibling,p=d.return;if(Ww(d),d===c){D=null;break}if(f!==null){f.return=p,D=f;break}D=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var m=t.current;for(D=m;D!==null;){o=D;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,D=_;else e:for(o=m;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(T){ye(a,a.return,T)}if(a===o){D=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,D=S;break e}D=a.return}}if(X=i,Lr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Gc,t)}catch{}r=!0}return r}finally{te=n,Vt.transition=e}}return!1}function Ly(t,e,n){e=ms(n,e),e=Ow(t,e,1),t=_r(t,e,1),e=ut(),t!==null&&(va(t,1,e),St(t,e))}function ye(t,e,n){if(t.tag===3)Ly(t,t,n);else for(;e!==null;){if(e.tag===3){Ly(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=ms(n,t),t=Lw(e,t,1),e=_r(e,t,1),t=ut(),e!==null&&(va(e,1,t),St(e,t));break}}e=e.return}}function zI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ye&n)===n&&(Le===4||Le===3&&(Ye&130023424)===Ye&&500>Se()-Pp?ti(t,0):Ap|=n),St(t,e)}function eE(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=ut();t=$n(t,e),t!==null&&(va(t,e,n),St(t,n))}function HI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),eE(t,n)}function WI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),eE(t,n)}var tE;tE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,AI(t,e,n);vt=!!(t.flags&131072)}else vt=!1,de&&e.flags&1048576&&iw(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rl(t,e),t=e.pendingProps;var i=ds(e,it.current);es(e,n),i=Tp(null,e,r,t,i,n);var s=Ip();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wp(e),i.updater=eu,e.stateNode=i,i._reactInternals=e,Lh(e,r,t,n),e=Fh(null,e,r,!0,s,n)):(e.tag=0,de&&s&&fp(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qI(r),t=Zt(r,t),i){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=xy(null,e,r,t,n);break e;case 11:e=Cy(null,e,r,t,n);break e;case 14:e=Sy(null,e,r,Zt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),xy(t,e,r,i,n);case 3:e:{if(Uw(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lw(t,e),rc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(I(423)),e),e=Ty(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(I(424)),e),e=Ty(t,e,r,n,i);break e}else for(Nt=vr(e.stateNode.containerInfo.firstChild),Pt=e,de=!0,tn=null,n=hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=zn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return fw(e),t===null&&Ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ih(r,i)?o=null:s!==null&&Ih(r,s)&&(e.flags|=32),Fw(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return jw(t,e,n);case 4:return Ep(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Cy(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(tc,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Et.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Mn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,es(e,n),i=qt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),Sy(t,e,r,i,n);case 15:return Dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Rl(t,e),e.tag=1,Ct(r)?(t=!0,Xl(e)):t=!1,es(e,n),uw(e,r,i),Lh(e,r,i,n),Fh(null,e,r,!0,t,n);case 19:return Bw(t,e,n);case 22:return Mw(t,e,n)}throw Error(I(156,e.tag))};function nE(t,e){return b0(t,e)}function VI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new VI(t,e,n,r)}function Mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qI(t){if(typeof t=="function")return Mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ni(n.children,i,s,e);case ep:o=8,i|=8;break;case ih:return t=Ht(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Ht(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Ht(19,n,e,i),t.elementType=oh,t.lanes=s,t;case d0:return iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:o=10;break e;case u0:o=9;break e;case tp:o=11;break e;case np:o=14;break e;case rr:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ed(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Cd(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fp(t,e,n,r,i,s,o,a,l){return t=new KI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(s),t}function GI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rE(t){if(!t)return Nr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Ct(n))return nw(t,n,e)}return e}function iE(t,e,n,r,i,s,o,a,l){return t=Fp(n,r,!0,t,i,s,o,a,l),t.context=rE(null),n=t.current,r=ut(),i=Er(n),s=Mn(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,va(t,i,r),St(t,r),t}function su(t,e,n,r){var i=e.current,s=ut(),o=Er(i);return n=rE(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(an(t,i,o,s),kl(t,i,o)),o}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){Dy(t,e),(t=t.alternate)&&Dy(t,e)}function YI(){return null}var sE=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}ou.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));su(t,e,null,null)};ou.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){su(null,t,null,null)}),e[Bn]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=D0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&F0(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function My(){}function QI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=dc(o);s.call(c)}}var o=iE(e,r,t,0,null,!1,!1,"",My);return t._reactRootContainer=o,t[Bn]=o.current,Mo(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=dc(l);a.call(c)}}var l=Fp(t,0,!1,null,null,!1,!1,"",My);return t._reactRootContainer=l,t[Bn]=l.current,Mo(t.nodeType===8?t.parentNode:t),di(function(){su(e,l,n,r)}),l}function lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=dc(o);a.call(l)}}su(e,o,t,i)}else o=QI(n,e,t,i,r);return dc(o)}O0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(sp(e,n|1),St(e,Se()),!(X&6)&&(gs=Se()+500,Lr()))}break;case 13:di(function(){var r=$n(t,1);if(r!==null){var i=ut();an(r,t,1,i)}}),Up(t,1)}};op=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=ut();an(e,t,134217728,n)}Up(t,134217728)}};L0=function(t){if(t.tag===13){var e=Er(t),n=$n(t,e);if(n!==null){var r=ut();an(n,t,e,r)}Up(t,e)}};D0=function(){return te};M0=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};gh=function(t,e,n){switch(e){case"input":if(ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(I(90));f0(r),ch(r,i)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Qi(t,!!n.multiple,e,!1)}};C0=Op;S0=di;var JI={usingClientEntryPoint:!1,Events:[wa,$i,Xc,w0,E0,Op]},Ys={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XI={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||YI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Gc=cl.inject(XI),vn=cl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(I(200));return GI(t,e,null,n)};Mt.createRoot=function(t,e){if(!Bp(t))throw Error(I(299));var n=!1,r="",i=sE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fp(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,Mo(t.nodeType===8?t.parentNode:t),new jp(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=I0(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return di(t)};Mt.hydrate=function(t,e,n){if(!au(e))throw Error(I(200));return lu(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iE(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ou(e)};Mt.render=function(t,e,n){if(!au(e))throw Error(I(200));return lu(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!au(t))throw Error(I(40));return t._reactRootContainer?(di(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Op;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!au(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return lu(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function oE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oE)}catch(t){console.error(t)}}oE(),i0.exports=Mt;var ZI=i0.exports;const ek={apiKey:"AIzaSyDHkEMtgdX928zEjye6GsEfJwDX_5Ijjag",authDomain:"reactdemo-fdaf5.firebaseapp.com",databaseURL:"https://reactdemo-fdaf5-default-rtdb.firebaseio.com",projectId:"reactdemo-fdaf5",storageBucket:"reactdemo-fdaf5.appspot.com",messagingSenderId:"749100592564",appId:"1:749100592564:web:aa5d0569ddb8266981d6e1",measurementId:"G-VWXP75P120"};/**
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
 */const aE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Ns(e)},Ns=function(t){return new Error("Firebase Database ("+aE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[d],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new nk;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cE=function(t){const e=lE(t);return $p.encodeByteArray(e,!0)},hc=function(t){return cE(t).replace(/\./g,"")},fc=function(t){try{return $p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rk(t){return uE(void 0,t)}function uE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ik(n)||(t[n]=uE(t[n],e[n]));return t}function ik(t){return t!=="__proto__"}/**
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
 */function sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ok=()=>sk().__FIREBASE_DEFAULTS__,ak=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fc(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return ok()||ak()||lk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,n;return(n=(e=cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hE=t=>{const e=dE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fE=()=>{var t;return(t=cu())===null||t===void 0?void 0:t.config},pE=t=>{var e;return(e=cu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ca{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hc(JSON.stringify(n)),hc(JSON.stringify(o)),a].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function ck(){var t;const e=(t=cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dk(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yE(){return aE.NODE_ADMIN===!0}function vE(){try{return typeof indexedDB=="object"}catch{return!1}}function hk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fk="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fk,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function pk(t,e){return t.replace(mk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mk=/\{\$([^}]+)}/g;/**
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
 */const _E=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Vo(fc(s[0])||""),n=Vo(fc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},gk=function(t){const e=_E(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yk=function(t){const e=_E(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ys(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fy(s)&&Fy(o)){if(!mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fy(t){return t!==null&&typeof t=="object"}/**
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
 */function Rs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class vk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _k(t,e){const n=new wk(t,e);return n.subscribe.bind(n)}class wk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ek(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ek(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}function uu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ck=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},du=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Sk=1e3,xk=2,Tk=4*60*60*1e3,Ik=.5;function kk(t,e=Sk,n=xk){const r=e*Math.pow(n,t),i=Math.round(Ik*r*(Math.random()-.5)*2);return Math.min(Tk,r+i)}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class bk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ca;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rk(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nk(t){return t===Hr?void 0:t}function Rk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Pk={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Ok=Z.INFO,Lk={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Dk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Lk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=Ok,this._logHandler=Dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Mk=(t,e)=>e.some(n=>t instanceof n);let Uy,jy;function Fk(){return Uy||(Uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uk(){return jy||(jy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wE=new WeakMap,Qh=new WeakMap,EE=new WeakMap,xd=new WeakMap,Hp=new WeakMap;function jk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wE.set(n,t)}).catch(()=>{}),Hp.set(e,t),e}function Bk(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||EE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $k(t){Jh=t(Jh)}function zk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Td(this),e,...n);return EE.set(r,e.sort?e.sort():[e]),Sr(r)}:Uk().includes(t)?function(...e){return t.apply(Td(this),e),Sr(wE.get(this))}:function(...e){return Sr(t.apply(Td(this),e))}}function Hk(t){return typeof t=="function"?zk(t):(t instanceof IDBTransaction&&Bk(t),Mk(t,Fk())?new Proxy(t,Jh):t)}function Sr(t){if(t instanceof IDBRequest)return jk(t);if(xd.has(t))return xd.get(t);const e=Hk(t);return e!==t&&(xd.set(t,e),Hp.set(e,t)),e}const Td=t=>Hp.get(t);function Wk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Vk=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],Id=new Map;function By(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Id.get(e))return Id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Id.set(e,s),s}$k(t=>({...t,get:(e,n,r)=>By(e,n)||t.get(e,n,r),has:(e,n)=>!!By(e,n)||t.has(e,n)}));/**
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
 */class Kk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",$y="0.9.12";/**
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
 */const hi=new Sa("@firebase/app"),Yk="@firebase/app-compat",Qk="@firebase/analytics-compat",Jk="@firebase/analytics",Xk="@firebase/app-check-compat",Zk="@firebase/app-check",eb="@firebase/auth",tb="@firebase/auth-compat",nb="@firebase/database",rb="@firebase/database-compat",ib="@firebase/functions",sb="@firebase/functions-compat",ob="@firebase/installations",ab="@firebase/installations-compat",lb="@firebase/messaging",cb="@firebase/messaging-compat",ub="@firebase/performance",db="@firebase/performance-compat",hb="@firebase/remote-config",fb="@firebase/remote-config-compat",pb="@firebase/storage",mb="@firebase/storage-compat",gb="@firebase/firestore",yb="@firebase/firestore-compat",vb="firebase",_b="9.22.2";/**
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
 */const Zh="[DEFAULT]",wb={[Xh]:"fire-core",[Yk]:"fire-core-compat",[Jk]:"fire-analytics",[Qk]:"fire-analytics-compat",[Zk]:"fire-app-check",[Xk]:"fire-app-check-compat",[eb]:"fire-auth",[tb]:"fire-auth-compat",[nb]:"fire-rtdb",[rb]:"fire-rtdb-compat",[ib]:"fire-fn",[sb]:"fire-fn-compat",[ob]:"fire-iid",[ab]:"fire-iid-compat",[lb]:"fire-fcm",[cb]:"fire-fcm-compat",[ub]:"fire-perf",[db]:"fire-perf-compat",[hb]:"fire-rc",[fb]:"fire-rc-compat",[pb]:"fire-gcs",[mb]:"fire-gcs-compat",[gb]:"fire-fst",[yb]:"fire-fst-compat","fire-js":"fire-js",[vb]:"fire-js-all"};/**
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
 */const qo=new Map,ef=new Map;function Eb(t,e){try{t.container.addComponent(e)}catch(n){hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(ef.has(e))return hi.debug(`There were multiple attempts to register component ${e}.`),!1;ef.set(e,t);for(const n of qo.values())Eb(n,t);return!0}function As(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xr=new Ti("app","Firebase",Cb);/**
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
 */class Sb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Kn=_b;function CE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=fE()),!n)throw xr.create("no-options");const s=qo.get(i);if(s){if(mc(n,s.options)&&mc(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new Ak(i);for(const l of ef.values())o.addComponent(l);const a=new Sb(n,r,o);return qo.set(i,a),a}function Wp(t=Zh){const e=qo.get(t);if(!e&&t===Zh&&fE())return CE();if(!e)throw xr.create("no-app",{appName:t});return e}function xb(){return Array.from(qo.values())}function ke(t,e,n){var r;let i=(r=wb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hi.warn(a.join(" "));return}Gt(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Tb="firebase-heartbeat-database",Ib=1,Ko="firebase-heartbeat-store";let kd=null;function SE(){return kd||(kd=Wk(Tb,Ib,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ko)}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),kd}async function kb(t){try{return await(await SE()).transaction(Ko).objectStore(Ko).get(xE(t))}catch(e){if(e instanceof Jt)hi.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hi.warn(n.message)}}}async function zy(t,e){try{const r=(await SE()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,xE(t)),await r.done}catch(n){if(n instanceof Jt)hi.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hi.warn(r.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bb=1024,Nb=30*24*60*60*1e3;class Rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Nb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hy(),{heartbeatsToSend:n,unsentEntries:r}=Ab(this._heartbeatsCache.heartbeats),i=hc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hy(){return new Date().toISOString().substring(0,10)}function Ab(t,e=bb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vE()?hk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wy(t){return hc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ob(t){Gt(new Lt("platform-logger",e=>new Kk(e),"PRIVATE")),Gt(new Lt("heartbeat",e=>new Rb(e),"PRIVATE")),ke(Xh,$y,t),ke(Xh,$y,"esm2017"),ke("fire-js","")}Ob("");function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function TE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lb=TE,IE=new Ti("auth","Firebase",TE());/**
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
 */const gc=new Sa("@firebase/auth");function Db(t,...e){gc.logLevel<=Z.WARN&&gc.warn(`Auth (${Kn}): ${t}`,...e)}function Ll(t,...e){gc.logLevel<=Z.ERROR&&gc.error(`Auth (${Kn}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw qp(t,...e)}function wn(t,...e){return qp(t,...e)}function kE(t,e,n){const r=Object.assign(Object.assign({},Lb()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function Mb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),kE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IE.create(t,...e)}function z(t,e,...n){if(!t)throw qp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function Hn(t,e){t||Pn(e)}/**
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
 */function tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fb(){return Vy()==="http:"||Vy()==="https:"}function Vy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fb()||uk()||"connection"in navigator)?navigator.onLine:!0}function jb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=zp()||gE()}get(){return Ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $b=new xa(3e4,6e4);function Ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Os(t,e,n,r,i={}){return NE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bE.fetch()(RE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bb),e);try{const i=new zb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ul(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kE(t,d,c);Yt(t,d)}}catch(i){if(i instanceof Jt)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function Ta(t,e,n,r,i={}){const s=await Os(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kp(t.config,i):`${t.config.apiScheme}://${i}`}class zb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),$b.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Hb(t,e){return Os(t,"POST","/v1/accounts:delete",e)}async function Wb(t,e){return Os(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vb(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Gp(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(bd(i.auth_time)),issuedAtTime:Eo(bd(i.iat)),expirationTime:Eo(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function Gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=fc(n);return i?JSON.parse(i):(Ll("Failed to decode base64 JWT payload"),null)}catch(i){return Ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qb(t){const e=Gp(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&Kb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class AE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Go(t,Wb(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jb(s.providerUserInfo):[],a=Qb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new AE(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Yb(t){const e=Ne(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jb(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Xb(t,e){const n=await NE(t,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yo,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function nr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new AE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Go(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vb(this,e)}reload(){return Yb(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Go(this,Hb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:S,isAnonymous:T,providerData:b,stsTokenManager:N}=n;z(_&&N,e,"internal-error");const R=Yo.fromJSON(this.name,N);z(typeof _=="string",e,"internal-error"),nr(h,e.name),nr(f,e.name),z(typeof S=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),nr(p,e.name),nr(y,e.name),nr(v,e.name),nr(C,e.name),nr(g,e.name),nr(m,e.name);const j=new ri({uid:_,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:g,lastLoginAt:m});return b&&Array.isArray(b)&&(j.providerData=b.map(F=>Object.assign({},F))),C&&(j._redirectEventId=C),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yo;i.updateFromServerResponse(n);const s=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yc(s),s}}/**
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
 */const qy=new Map;function On(t){Hn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
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
 */class PE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PE.type="NONE";const Ky=PE;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(On(Ky),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||On(Ky);const o=Dl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=ri._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ns(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ns(s,e,r))}}/**
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
 */function Gy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FE(e))return"Blackberry";if(UE(e))return"Webos";if(Yp(e))return"Safari";if((e.includes("chrome/")||LE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OE(t=st()){return/firefox\//i.test(t)}function Yp(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LE(t=st()){return/crios\//i.test(t)}function DE(t=st()){return/iemobile/i.test(t)}function ME(t=st()){return/android/i.test(t)}function FE(t=st()){return/blackberry/i.test(t)}function UE(t=st()){return/webos/i.test(t)}function hu(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zb(t=st()){var e;return hu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eN(){return dk()&&document.documentMode===10}function jE(t=st()){return hu(t)||ME(t)||UE(t)||FE(t)||/windows phone/i.test(t)||DE(t)}function tN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function BE(t,e=[]){let n;switch(t){case"Browser":n=Gy(st());break;case"Worker":n=`${Gy(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kn}/${r}`}async function $E(t,e){return Os(t,"GET","/v2/recaptchaConfig",Ps(t,e))}function Yy(t){return t!==void 0&&t.enterprise!==void 0}class zE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function nN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function HE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})}function rN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iN="https://www.google.com/recaptcha/enterprise.js?render=",sN="recaptcha-enterprise",oN="NO_RECAPTCHA";class WE{constructor(e){this.type=sN,this.auth=Ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$E(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zE(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Yy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(oN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Yy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}HE(iN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function vc(t,e,n,r=!1){const i=new WE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class aN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class lN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qy(this),this.idTokenSubscription=new Qy(this),this.beforeStateQueue=new aN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}async initializeRecaptchaConfig(){const e=await $E(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new WE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Db(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ii(t){return Ne(t)}class Qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=_k(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function cN(t,e){const n=As(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mc(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function uN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dN(t,e,n){const r=Ii(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=VE(e),{host:o,port:a}=hN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fN()}function VE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hN(t){const e=VE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jy(o)}}}function Jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function pN(t,e){return Os(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Nd(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",Ps(t,e))}/**
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
 */async function mN(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}async function gN(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}/**
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
 */class Qo extends Qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await vc(e,r,"signInWithPassword");return Nd(e,i)}else return Nd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await vc(e,r,"signInWithPassword");return Nd(e,s)}else return Promise.reject(i)});case"emailLink":return mN(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gN(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rs(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",Ps(t,e))}/**
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
 */const yN="http://localhost";class fi extends Qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:yN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
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
 */function vN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _N(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class Jp{constructor(e){var n,r,i,s,o,a;const l=ao(lo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=vN((i=l.mode)!==null&&i!==void 0?i:null);z(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_N(e);try{return new Jp(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jp.parseLink(n);return z(r,"argument-error"),Qo._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ia extends Xp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Ia{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class gt extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class lr extends Ia{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
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
 */class cr extends Ia{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */async function Rd(t,e){return Ta(t,"POST","/v1/accounts:signUp",Ps(t,e))}/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ri._fromIdTokenResponse(e,r,i),o=Xy(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xy(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _c extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _c(e,n,r,i)}}function qE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,s,e,r):s})}async function wN(t,e,n=!1){const r=await Go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function EN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Go(t,qE(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Gp(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
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
 */async function KE(t,e,n=!1){const r="signIn",i=await qE(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CN(t,e){return KE(Ii(t),e)}async function SN(t,e,n){var r;const i=Ii(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await vc(i,s,"signUpPassword");o=Rd(i,c)}else o=Rd(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await vc(i,s,"signUpPassword");return Rd(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await pi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function xN(t,e,n){return CN(Ne(t),Ls.credential(e,n))}function TN(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function IN(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function ki(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function kN(t){return Ne(t).signOut()}const wc="__sak";/**
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
 */class GE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bN(){const t=st();return Yp(t)||hu(t)}const NN=1e3,RN=10;class YE extends GE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bN()&&tN(),this.fallbackToPolling=jE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}YE.type="LOCAL";const AN=YE;/**
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
 */class QE extends GE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}QE.type="SESSION";const JE=QE;/**
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
 */function PN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await PN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
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
 */function Zp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ON{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Zp("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function LN(t){En().location.href=t}/**
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
 */function XE(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function DN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FN(){return XE()?self:null}/**
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
 */const ZE="firebaseLocalStorageDb",UN=1,Ec="firebaseLocalStorage",e1="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pu(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function jN(){const t=indexedDB.deleteDatabase(ZE);return new ka(t).toPromise()}function nf(){const t=indexedDB.open(ZE,UN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:e1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await jN(),e(await nf()))})})}async function Zy(t,e,n){const r=pu(t,!0).put({[e1]:e,value:n});return new ka(r).toPromise()}async function BN(t,e){const n=pu(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function ev(t,e){const n=pu(t,!0).delete(e);return new ka(n).toPromise()}const $N=800,zN=3;class t1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(FN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DN(),!this.activeServiceWorker)return;this.sender=new ON(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nf();return await Zy(e,wc,"1"),await ev(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ev(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t1.type="LOCAL";const HN=t1;new xa(3e4,6e4);/**
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
 */function n1(t,e){return e?On(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class em extends Qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WN(t){return KE(t.auth,new em(t),t.bypassAuthState)}function VN(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),EN(n,new em(t),t.bypassAuthState)}async function qN(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),wN(n,new em(t),t.bypassAuthState)}/**
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
 */class r1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WN;case"linkViaPopup":case"linkViaRedirect":return qN;case"reauthViaPopup":case"reauthViaRedirect":return VN;default:Yt(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KN=new xa(2e3,1e4);async function i1(t,e,n){const r=Ii(t);Mb(t,e,Xp);const i=n1(r,n);return new Qr(r,"signInViaPopup",e,i).executeNotNull()}class Qr extends r1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KN.get())};e()}}Qr.currentPopupAction=null;/**
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
 */const GN="pendingRedirect",Ml=new Map;class YN extends r1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await QN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QN(t,e){const n=ZN(e),r=XN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JN(t,e){Ml.set(t._key(),e)}function XN(t){return On(t._redirectPersistence)}function ZN(t){return Dl(GN,t.config.apiKey,t.name)}async function eR(t,e,n=!1){const r=Ii(t),i=n1(r,e),o=await new YN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tR=10*60*1e3;class nR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tR&&this.cachedEventUids.clear(),this.cachedEventUids.has(tv(e))}saveEventToCache(e){this.cachedEventUids.add(tv(e)),this.lastProcessedEventTime=Date.now()}}function tv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s1(t);default:return!1}}/**
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
 */async function iR(t,e={}){return Os(t,"GET","/v1/projects",e)}/**
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
 */const sR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function aR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iR(t);for(const n of e)try{if(lR(n))return}catch{}Yt(t,"unauthorized-domain")}function lR(t){const e=tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oR.test(n))return!1;if(sR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cR=new xa(3e4,6e4);function nv(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uR(t){return new Promise((e,n)=>{var r,i,s;function o(){nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nv(),n(wn(t,"network-request-failed"))},timeout:cR.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=rN("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},HE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function dR(t){return Fl=Fl||uR(t),Fl}/**
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
 */const hR=new xa(5e3,15e3),fR="__/auth/iframe",pR="emulator/auth/iframe",mR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yR(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kp(e,pR):`https://${t.config.authDomain}/${fR}`,r={apiKey:e.apiKey,appName:t.name,v:Kn},i=gR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rs(r).slice(1)}`}async function vR(t){const e=await dR(t),n=En().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:yR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},hR.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wR=500,ER=600,CR="_blank",SR="http://localhost";class rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xR(t,e,n,r=wR,i=ER){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_R),{width:r.toString(),height:i.toString(),top:s,left:o}),c=st().toLowerCase();n&&(a=LE(c)?CR:n),OE(c)&&(e=e||SR,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(Zb(c)&&a!=="_self")return TR(e||"",a),new rv(null);const h=window.open(e||"",a,d);z(h,t,"popup-blocked");try{h.focus()}catch{}return new rv(h)}function TR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IR="__/auth/handler",kR="emulator/auth/handler",bR=encodeURIComponent("fac");async function iv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kn,eventId:i};if(e instanceof Xp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(e instanceof Ia){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${bR}=${encodeURIComponent(l)}`:"";return`${NR(t)}?${Rs(a).slice(1)}${c}`}function NR({config:t}){return t.emulator?Kp(t,kR):`https://${t.authDomain}/${IR}`}/**
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
 */const Ad="webStorageSupport";class RR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JE,this._completeRedirectFn=eR,this._overrideRedirectResult=JN}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await iv(e,n,r,tf(),i);return xR(e,o,Zp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await iv(e,n,r,tf(),i);return LN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vR(e),r=new nR(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ad,{type:Ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ad];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jE()||Yp()||hu()}}const AR=RR;var sv="@firebase/auth",ov="0.23.2";/**
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
 */class PR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LR(t){Gt(new Lt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BE(t)},c=new lN(r,i,s,l);return uN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Lt("auth-internal",e=>{const n=Ii(e.getProvider("auth").getImmediate());return(r=>new PR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(sv,ov,OR(t)),ke(sv,ov,"esm2017")}/**
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
 */const DR=5*60,MR=pE("authIdTokenMaxAge")||DR;let av=null;const FR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MR)return;const i=n==null?void 0:n.token;av!==i&&(av=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tn(t=Wp()){const e=As(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cN(t,{popupRedirectResolver:AR,persistence:[HN,AN,JE]}),r=pE("authTokenSyncURL");if(r){const s=FR(r);IN(n,s,()=>s(n.currentUser)),TN(n,o=>s(o))}const i=dE("auth");return i&&dN(n,`http://${i}`),n}LR("Browser");const lv="@firebase/database",cv="0.14.4";/**
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
 */let o1="";function UR(t){o1=t}/**
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
 */class jR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class BR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const a1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jR(e)}}catch{}return new BR},Jr=a1("localStorage"),rf=a1("sessionStorage");/**
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
 */const is=new Sa("@firebase/database"),$R=function(){let t=1;return function(){return t++}}(),l1=function(t){const e=Ck(t),n=new vk;n.update(e);const r=n.digest();return $p.encodeByteArray(r)},ba=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ba.apply(null,r):typeof r=="object"?e+=$e(r):e+=r,e+=" "}return e};let ii=null,uv=!0;const zR=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(is.logLevel=Z.VERBOSE,ii=is.log.bind(is),e&&rf.set("logging_enabled",!0)):typeof t=="function"?ii=t:(ii=null,rf.remove("logging_enabled"))},qe=function(...t){if(uv===!0&&(uv=!1,ii===null&&rf.get("logging_enabled")===!0&&zR(!0)),ii){const e=ba.apply(null,t);ii(e)}},Na=function(t){return function(...e){qe(t,...e)}},sf=function(...t){const e="FIREBASE INTERNAL ERROR: "+ba(...t);is.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${ba(...t)}`;throw is.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+ba(...t);is.warn(e)},HR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vs="[MIN_NAME]",mi="[MAX_NAME]",bi=function(t,e){if(t===e)return 0;if(t===vs||e===mi)return-1;if(e===vs||t===mi)return 1;{const n=dv(t),r=dv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},VR=function(t,e){return t===e?0:t<e?-1:1},Qs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$e(e))},nm=function(t){if(typeof t!="object"||t===null)return $e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=$e(e[r]),n+=":",n+=nm(t[e[r]]);return n+="}",n},c1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const u1=function(t){k(!tm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},qR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function GR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const YR=new RegExp("^-?(0*)\\d{1,10}$"),QR=-2147483648,JR=2147483647,dv=function(t){if(YR.test(t)){const e=Number(t);if(e>=QR&&e<=JR)return e}return null},Ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},XR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Co=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ZR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class eA{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class ss{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ss.OWNER="owner";/**
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
 */const rm="5",d1="v",h1="s",f1="r",p1="f",m1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,g1="ls",y1="p",of="ac",v1="websocket",_1="long_polling";/**
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
 */class w1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function tA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function E1(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===v1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tA(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class nA{constructor(){this.counters_={}}incrementCounter(e,n=1){xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rk(this.counters_)}}/**
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
 */const Pd={},Od={};function im(t){const e=t.toString();return Pd[e]||(Pd[e]=new nA),Pd[e]}function rA(t,e){const n=t.toString();return Od[n]||(Od[n]=e()),Od[n]}/**
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
 */class iA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ds(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hv="start",sA="close",oA="pLPCommand",aA="pRTLPCB",C1="id",S1="pw",x1="ser",lA="cb",cA="seg",uA="ts",dA="d",hA="dframe",T1=1870,I1=30,fA=T1-I1,pA=25e3,mA=3e4;class Gi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Na(e),this.stats_=im(n),this.urlFn=l=>(this.appCheckToken&&(l[of]=this.appCheckToken),E1(n,_1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new iA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mA)),WR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sm((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hv)this.id=a,this.password=l;else if(o===sA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[hv]="t",r[x1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[d1]=rm,this.transportSessionId&&(r[h1]=this.transportSessionId),this.lastSessionId&&(r[g1]=this.lastSessionId),this.applicationId&&(r[y1]=this.applicationId),this.appCheckToken&&(r[of]=this.appCheckToken),typeof location<"u"&&location.hostname&&m1.test(location.hostname)&&(r[f1]=p1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gi.forceAllow_=!0}static forceDisallow(){Gi.forceDisallow_=!0}static isAvailable(){return Gi.forceAllow_?!0:!Gi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qR()&&!KR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cE(n),i=c1(r,fA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[hA]="t",r[C1]=e,r[S1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$R(),window[oA+this.uniqueCallbackIdentifier]=e,window[aA+this.uniqueCallbackIdentifier]=n,this.myIFrame=sm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[C1]=this.myID,e[S1]=this.myPW,e[x1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I1+r.length<=T1;){const o=this.pendingSegs.shift();r=r+"&"+cA+i+"="+o.seg+"&"+uA+i+"="+o.ts+"&"+dA+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(pA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const gA=16384,yA=45e3;let Cc=null;typeof MozWebSocket<"u"?Cc=MozWebSocket:typeof WebSocket<"u"&&(Cc=WebSocket);class nn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Na(this.connId),this.stats_=im(n),this.connURL=nn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[d1]=rm,typeof location<"u"&&location.hostname&&m1.test(location.hostname)&&(o[f1]=p1),n&&(o[h1]=n),r&&(o[g1]=r),i&&(o[of]=i),s&&(o[y1]=s),E1(e,v1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jr.set("previous_websocket_failure",!0);try{let r;yE(),this.mySock=new Cc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Cc!==null&&!nn.forceDisallow_}static previouslyFailed(){return Jr.isInMemoryStorage||Jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Vo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=c1(n,gA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;/**
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
 */class Jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gi,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nn&&nn.isAvailable();let r=n&&!nn.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nn];else{const i=this.transports_=[];for(const s of Jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jo.globalTransportInitialized_=!1;/**
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
 */const vA=6e4,_A=5e3,wA=10*1024,EA=100*1024,Ld="t",fv="d",CA="s",pv="r",SA="e",mv="o",gv="a",yv="n",vv="p",xA="h";class TA{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Na("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ld in e){const n=e[Ld];n===gv?this.upgradeIfSecondaryHealthy_():n===pv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qs("t",e),r=Qs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qs("t",e),r=Qs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qs(Ld,e);if(fv in e){const r=e[fv];if(n===xA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===yv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CA?this.onConnectionShutdown_(r):n===pv?this.onReset_(r):n===SA?sf("Server Error: "+r):n===mv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rm!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_A))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class k1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class b1{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Sc extends b1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sc}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _v=32,wv=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new re("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rr(t){return t.pieces_.length-t.pieceNum_}function se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function om(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function N1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=V(t),r=V(e);if(n===null)return e;if(n===r)return _t(se(t),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kA(t,e){const n=Xo(t,0),r=Xo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=bi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function am(t,e){if(Rr(t)!==Rr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rr(t)>Rr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bA{constructor(e,n){this.errorPrefix_=n,this.parts_=Xo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=du(this.parts_[r]);R1(this)}}function NA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=du(e),R1(t)}function RA(t){const e=t.parts_.pop();t.byteLength_-=du(e),t.parts_.length>0&&(t.byteLength_-=1)}function R1(t){if(t.byteLength_>wv)throw new Error(t.errorPrefix_+"has a key path longer than "+wv+" bytes ("+t.byteLength_+").");if(t.parts_.length>_v)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_v+") or object contains a cycle "+Wr(t))}function Wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class lm extends b1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new lm}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Js=1e3,AA=60*5*1e3,Ev=30*1e3,PA=1.3,OA=3e4,LA="server_kill",Cv=3;class Fn extends k1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Na("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Js,this.maxReconnectDelay_=AA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!yE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_($e(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ca,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xn(e,"w")){const r=ys(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ev)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sf("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OA&&(this.reconnectDelay_=Js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new TA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{dt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(LA)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&dt(h),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>nm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cv&&(this.reconnectDelay_=Ev,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+o1.replace(/\./g,"-")]=1,zp()?e["framework.cordova"]=1:gE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sc.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
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
 */class mu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(vs,e),i=new q(vs,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
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
 */let dl;class A1 extends mu{static get __EMPTY_NODE(){return dl}static set __EMPTY_NODE(e){dl=e}compare(e,n){return bi(e.name,n.name)}isDefinedOn(e){throw Ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(mi,dl)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,dl)}toString(){return".key"}}const os=new A1;/**
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
 */class hl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??wt.EMPTY_NODE,this.right=s??wt.EMPTY_NODE}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class DA{copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,n=wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hl(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new DA;/**
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
 */function MA(t,e){return bi(t.name,e.name)}function cm(t,e){return bi(t,e)}/**
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
 */let af;function FA(t){af=t}const P1=function(t){return typeof t=="number"?"number:"+u1(t):"string:"+t},O1=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xn(e,".sv"),"Priority must be a string or number.")}else k(t===af||t.isEmpty(),"priority of unexpected type.");k(t===af||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sv;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),O1(this.priorityNode_)}static set __childrenNodeConstructor(e){Sv=e}static get __childrenNodeConstructor(){return Sv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:V(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=V(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+P1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=u1(this.value_):e+=this.value_,this.lazyHash_=l1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let L1,D1;function UA(t){L1=t}function jA(t){D1=t}class BA extends mu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?bi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(mi,new Fe("[PRIORITY-POST]",D1))}makePost(e,n){const r=L1(e);return new q(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new BA;/**
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
 */const $A=Math.log(2);class zA{constructor(e){const n=s=>parseInt(Math.log(s)/$A,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xc=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new je(f,h.node,je.BLACK,null,null);{const p=parseInt(d/2,10)+l,y=i(l,p),v=i(p+1,c);return h=t[p],f=n?n(h):h,new je(f,h.node,je.BLACK,y,v)}},s=function(l){let c=null,d=null,h=t.length;const f=function(y,v){const C=h-y,g=h;h-=y;const m=i(C+1,g),_=t[C],S=n?n(_):_;p(new je(S,_.node,v,null,m))},p=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),C=Math.pow(2,l.count-(y+1));v?f(C,je.BLACK):(f(C,je.BLACK),f(C,je.RED))}return d},o=new zA(t.length),a=s(o);return new wt(r||e,a)};/**
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
 */let Dd;const Li={};class Ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Li&&_e,"ChildrenNode.ts has not been loaded"),Dd=Dd||new Ln({".priority":Li},{".priority":_e}),Dd}get(e){const n=ys(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wt?n:null}hasIndex(e){return xn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=xc(r,e.getCompare()):a=Li;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ln(d,c)}addToIndexes(e,n){const r=pc(this.indexes_,(i,s)=>{const o=ys(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),xc(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new Ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=pc(this.indexes_,i=>{if(i===Li)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new Ln(r,this.indexSet_)}}/**
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
 */let Xs;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&O1(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xs||(Xs=new B(new wt(cm),null,Ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xs:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xs:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=V(e);if(r===null)return n;{k(V(e)!==".priority"||Rr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+P1(this.getPriority().val())+":"),this.forEachChild(_e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":l1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ra?-1:0}withIndex(e){if(e===os||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_e),i=n.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===os?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HA extends B{constructor(){super(new wt(cm),B.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ra=new HA;Object.defineProperties(q,{MIN:{value:new q(vs,B.EMPTY_NODE)},MAX:{value:new q(mi,Ra)}});A1.__EMPTY_NODE=B.EMPTY_NODE;Fe.__childrenNodeConstructor=B;FA(Ra);jA(Ra);/**
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
 */const WA=!0;function Be(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Be(e))}if(!(t instanceof Array)&&WA){const n=[];let r=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=xc(n,MA,o=>o.name,cm);if(r){const o=xc(n,_e.getCompare());return new B(s,Be(e),new Ln({".priority":o},{".priority":_e}))}else return new B(s,Be(e),Ln.Default)}else{let n=B.EMPTY_NODE;return Xe(t,(r,i)=>{if(xn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}UA(Be);/**
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
 */class VA extends mu{constructor(e){super(),this.indexPath_=e,k(!G(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?bi(e.name,n.name):s}makePost(e,n){const r=Be(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ra);return new q(mi,e)}toString(){return Xo(this.indexPath_,0).join("/")}}/**
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
 */class qA extends mu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?bi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Be(e);return new q(n,r)}toString(){return".value"}}const KA=new qA;/**
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
 */function M1(t){return{type:"value",snapshotNode:t}}function _s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ea(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function GA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class um{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zo(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_s(n,r)):o.trackChildChange(ea(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zo(i,s))}),n.isLeafNode()||n.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ea(i,s,o))}else r.trackChildChange(_s(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ta{constructor(e){this.indexedFilter_=new um(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ta.getStartPost_(e),this.endPost_=ta.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(_e,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class YA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new q(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ea(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zo(n,h));const v=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(_s(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Zo(c.name,c.node)),s.trackChildChange(_s(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
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
 */class dm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vs}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new dm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QA(t){return t.loadsAllData()?new um(t.getIndex()):t.hasLimit()?new YA(t):new ta(t)}function xv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===KA?n="$value":t.index_===os?n="$key":(k(t.index_ instanceof VA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=$e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+$e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=$e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+$e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class Tc extends k1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Na("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Tc.getListenId_(e,r),a={};this.listens_[o]=a;const l=xv(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),ys(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Tc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xv(e._queryParams),r=e._path.toString(),i=new Ca;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vo(a.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class JA{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ic(){return{value:null,children:new Map}}function F1(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=V(e);t.children.has(r)||t.children.set(r,Ic());const i=t.children.get(r);e=se(e),F1(i,e,n)}}function lf(t,e,n){t.value!==null?n(e,t.value):XA(t,(r,i)=>{const s=new re(e.toString()+"/"+r);lf(i,s,n)})}function XA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class ZA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Iv=10*1e3,eP=30*1e3,tP=5*60*1e3;class nP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ZA(e);const r=Iv+(eP-Iv)*Math.random();Co(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Xe(e,(i,s)=>{s>0&&xn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Co(this.reportStats_.bind(this),Math.floor(Math.random()*2*tP))}}/**
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
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function hm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class kc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=sn.ACK_USER_WRITE,this.source=hm()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new kc(ee(),n,this.revert)}}else return k(V(this.path)===e,"operationForChild called for unrelated child."),new kc(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class na{constructor(e,n){this.source=e,this.path=n,this.type=sn.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new na(this.source,ee()):new na(this.source,se(this.path))}}/**
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
 */class gi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=sn.OVERWRITE}operationForChild(e){return G(this.path)?new gi(this.source,ee(),this.snap.getImmediateChild(e)):new gi(this.source,se(this.path),this.snap)}}/**
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
 */class ws{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=sn.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new gi(this.source,ee(),n.value):new ws(this.source,ee(),n)}else return k(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ws(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class yi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(GA(o.childName,o.snapshotNode))}),Zs(t,i,"child_removed",e,r,n),Zs(t,i,"child_added",e,r,n),Zs(t,i,"child_moved",s,r,n),Zs(t,i,"child_changed",e,r,n),Zs(t,i,"value",e,r,n),i}function Zs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>oP(t,a,l)),o.forEach(a=>{const l=sP(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oP(t,e,n){if(e.childName==null||n.childName==null)throw Ns("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function gu(t,e){return{eventCache:t,serverCache:e}}function So(t,e,n,r){return gu(new yi(e,n,r),t.serverCache)}function U1(t,e,n,r){return gu(t.eventCache,new yi(e,n,r))}function cf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Md;const aP=()=>(Md||(Md=new wt(VR)),Md);class ie{constructor(e,n=aP()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return Xe(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(G(e))return null;{const r=V(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(se(e),n);return s!=null?{path:ve(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=V(e),r=this.children.get(n);return r!==null?r.subtree(se(e)):new ie(null)}}set(e,n){if(G(e))return new ie(n,this.children);{const r=V(e),s=(this.children.get(r)||new ie(null)).set(se(e),n),o=this.children.insert(r,s);return new ie(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=V(e),r=this.children.get(n);if(r){const i=r.remove(se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=V(e),r=this.children.get(n);return r?r.get(se(e)):null}}setTree(e,n){if(G(e))return n;{const r=V(e),s=(this.children.get(r)||new ie(null)).setTree(se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ie(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(se(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=V(e),s=this.children.get(i);return s?s.foreachOnPath_(se(e),ve(n,i),r):new ie(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new ie(null))}}function xo(t,e,n){if(G(e))return new ln(new ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=_t(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new ie(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function uf(t,e,n){let r=t;return Xe(n,(i,s)=>{r=xo(r,ve(e,i),s)}),r}function kv(t,e){if(G(e))return ln.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new ln(n)}}function df(t,e){return Ni(t,e)!=null}function Ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function bv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function Tr(t,e){if(G(e))return t;{const n=Ni(t,e);return n!=null?new ln(new ie(n)):new ln(t.writeTree_.subtree(e))}}function hf(t){return t.writeTree_.isEmpty()}function Es(t,e){return j1(ee(),t.writeTree_,e)}function j1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=j1(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
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
 */function mm(t,e){return H1(e,t)}function lP(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=r}function cP(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=uf(t.visibleWrites,e,n),t.lastWriteId=r}function uP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function dP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hP(a,r.path)?i=!1:Wt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return fP(t),!0;if(r.snap)t.visibleWrites=kv(t.visibleWrites,r.path);else{const a=r.children;Xe(a,l=>{t.visibleWrites=kv(t.visibleWrites,ve(r.path,l))})}return!0}else return!1}function hP(t,e){if(t.snap)return Wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Wt(ve(t.path,n),e))return!0;return!1}function fP(t){t.visibleWrites=B1(t.allWrites,pP,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pP(t){return t.visible}function B1(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Wt(n,o)?(a=_t(n,o),r=xo(r,a,s.snap)):Wt(o,n)&&(a=_t(o,n),r=xo(r,ee(),s.snap.getChild(a)));else if(s.children){if(Wt(n,o))a=_t(n,o),r=uf(r,a,s.children);else if(Wt(o,n))if(a=_t(o,n),G(a))r=uf(r,ee(),s.children);else{const l=ys(s.children,V(a));if(l){const c=l.getChild(se(a));r=xo(r,ee(),c)}}}else throw Ns("WriteRecord should have .snap or .children")}}return r}function $1(t,e,n,r,i){if(!r&&!i){const s=Ni(t.visibleWrites,e);if(s!=null)return s;{const o=Tr(t.visibleWrites,e);if(hf(o))return n;if(n==null&&!df(o,ee()))return null;{const a=n||B.EMPTY_NODE;return Es(o,a)}}}else{const s=Tr(t.visibleWrites,e);if(!i&&hf(s))return n;if(!i&&n==null&&!df(s,ee()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Wt(c.path,e)||Wt(e,c.path))},a=B1(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Es(a,l)}}}function mP(t,e,n){let r=B.EMPTY_NODE;const i=Ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=Es(Tr(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(t.visibleWrites,e);return bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gP(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(df(t.visibleWrites,s))return null;{const o=Tr(t.visibleWrites,s);return hf(o)?i.getChild(n):Es(o,i.getChild(n))}}function yP(t,e,n,r){const i=ve(e,n),s=Ni(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(t.visibleWrites,i);return Es(o,r.getNode().getImmediateChild(n))}else return null}function vP(t,e){return Ni(t.visibleWrites,e)}function _P(t,e,n,r,i,s,o){let a;const l=Tr(t.visibleWrites,e),c=Ni(l,ee());if(c!=null)a=c;else if(n!=null)a=Es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)h(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function wP(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function bc(t,e,n,r){return $1(t.writeTree,t.treePath,e,n,r)}function gm(t,e){return mP(t.writeTree,t.treePath,e)}function Nv(t,e,n,r){return gP(t.writeTree,t.treePath,e,n,r)}function Nc(t,e){return vP(t.writeTree,ve(t.treePath,e))}function EP(t,e,n,r,i,s){return _P(t.writeTree,t.treePath,e,n,r,i,s)}function ym(t,e,n){return yP(t.writeTree,t.treePath,e,n)}function z1(t,e){return H1(ve(t.treePath,e),t.writeTree)}function H1(t,e){return{treePath:t,writeTree:e}}/**
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
 */class CP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ea(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,_s(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ea(r,e.snapshotNode,i.oldSnap));else throw Ns("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const W1=new SP;class vm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ym(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vi(this.viewCache_),s=EP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function xP(t){return{filter:t}}function TP(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function IP(t,e,n,r,i){const s=new CP;let o,a;if(n.type===sn.OVERWRITE){const c=n;c.source.fromUser?o=ff(t,e,c.path,c.snap,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=Rc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===sn.MERGE){const c=n;c.source.fromUser?o=bP(t,e,c.path,c.children,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=pf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===sn.ACK_USER_WRITE){const c=n;c.revert?o=AP(t,e,c.path,r,i,s):o=NP(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===sn.LISTEN_COMPLETE)o=RP(t,e,n.path,r,s);else throw Ns("Unknown operation type: "+n.type);const l=s.getChanges();return kP(e,o,l),{viewCache:o,changes:l}}function kP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(M1(cf(e)))}}function V1(t,e,n,r,i,s){const o=e.eventCache;if(Nc(r,n)!=null)return e;{let a,l;if(G(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vi(e),d=c instanceof B?c:B.EMPTY_NODE,h=gm(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=bc(r,vi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){k(Rr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Nv(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=se(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Nv(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=ym(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return So(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Rc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),p,null)}else{const p=V(n);if(!l.isCompleteForPath(n)&&Rr(n)>1)return e;const y=se(n),C=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?c=d.updatePriority(l.getNode(),C):c=d.updateChild(l.getNode(),p,C,y,W1,null)}const h=U1(e,c,l.isFullyInitialized()||G(n),d.filtersNodes()),f=new vm(i,h,s);return V1(t,h,n,i,f,a)}function ff(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new vm(i,e,s);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=So(e,c,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=So(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=se(n),p=a.getNode().getImmediateChild(h);let y;if(G(f))y=r;else{const v=d.getCompleteChild(h);v!=null?om(f)===".priority"&&v.getChild(N1(f)).isEmpty()?y=v:y=v.updateChild(f,r):y=B.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),h,y,f,d,o);l=So(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Rv(t,e){return t.eventCache.isCompleteForChild(e)}function bP(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=ve(n,l);Rv(e,V(d))&&(a=ff(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=ve(n,l);Rv(e,V(d))||(a=ff(t,a,d,c,i,s,o))}),a}function Av(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(n)?c=r:c=new ie(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),y=Av(t,p,f);l=Rc(t,l,new re(h),y,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!p){const y=e.serverCache.getNode().getImmediateChild(h),v=Av(t,y,f);l=Rc(t,l,new re(h),v,i,s,o,a)}}),l}function NP(t,e,n,r,i,s,o){if(Nc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Rc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let c=new ie(null);return l.getNode().forEachChild(os,(d,h)=>{c=c.set(new re(d),h)}),pf(t,e,n,c,i,s,a,o)}else return e}else{let c=new ie(null);return r.foreach((d,h)=>{const f=ve(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),pf(t,e,n,c,i,s,a,o)}}function RP(t,e,n,r,i){const s=e.serverCache,o=U1(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return V1(t,o,n,r,W1,i)}function AP(t,e,n,r,i,s){let o;if(Nc(r,n)!=null)return e;{const a=new vm(r,e,i),l=e.eventCache.getNode();let c;if(G(n)||V(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=bc(r,vi(e));else{const h=e.serverCache.getNode();k(h instanceof B,"serverChildren would be complete if leaf node"),d=gm(r,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=V(n);let h=ym(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,se(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,B.EMPTY_NODE,se(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bc(r,vi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Nc(r,ee())!=null,So(e,c,o,t.filter.filtersNodes())}}/**
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
 */class PP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new um(r.getIndex()),s=QA(r);this.processor_=xP(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),d=new yi(l,o.isFullyInitialized(),i.filtersNodes()),h=new yi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=gu(h,d),this.eventGenerator_=new rP(this.query_)}get query(){return this.query_}}function OP(t){return t.viewCache_.serverCache.getNode()}function LP(t,e){const n=vi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Pv(t){return t.eventRegistrations_.length===0}function DP(t,e){t.eventRegistrations_.push(e)}function Ov(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Lv(t,e,n,r){e.type===sn.MERGE&&e.source.queryId!==null&&(k(vi(t.viewCache_),"We should always have a full cache before handling merges"),k(cf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=IP(t.processor_,i,e,n,r);return TP(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,q1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function MP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(s,o)=>{r.push(_s(s,o))}),n.isFullyInitialized()&&r.push(M1(n.getNode())),q1(t,r,n.getNode(),e)}function q1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return iP(t.eventGenerator_,e,n,i)}/**
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
 */let Ac;class FP{constructor(){this.views=new Map}}function UP(t){k(!Ac,"__referenceConstructor has already been defined"),Ac=t}function jP(){return k(Ac,"Reference.ts has not been loaded"),Ac}function BP(t){return t.views.size===0}function _m(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Lv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lv(o,e,n,r));return s}}function $P(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=bc(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=gm(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const c=gu(new yi(a,l,!1),new yi(r,i,!1));return new PP(e,c)}return o}function zP(t,e,n,r,i,s){const o=$P(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DP(o,n),MP(o,n)}function HP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ar(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ov(c,n,r)),Pv(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ov(l,n,r)),Pv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ar(t)&&s.push(new(jP())(e._repo,e._path)),{removed:s,events:o}}function K1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function as(t,e){let n=null;for(const r of t.views.values())n=n||LP(r,e);return n}function G1(t,e){if(e._queryParams.loadsAllData())return yu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Y1(t,e){return G1(t,e)!=null}function Ar(t){return yu(t)!=null}function yu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Pc;function WP(t){k(!Pc,"__referenceConstructor has already been defined"),Pc=t}function VP(){return k(Pc,"Reference.ts has not been loaded"),Pc}let qP=1;class Dv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=wP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Q1(t,e,n,r,i){return lP(t.pendingWriteTree_,e,n,r,i),i?Ms(t,new gi(hm(),e,n)):[]}function KP(t,e,n,r){cP(t.pendingWriteTree_,e,n,r);const i=ie.fromObject(n);return Ms(t,new ws(hm(),e,i))}function fr(t,e,n=!1){const r=uP(t.pendingWriteTree_,e);if(dP(t.pendingWriteTree_,e)){let s=new ie(null);return r.snap!=null?s=s.set(ee(),!0):Xe(r.children,o=>{s=s.set(new re(o),!0)}),Ms(t,new kc(r.path,s,n))}else return[]}function vu(t,e,n){return Ms(t,new gi(fm(),e,n))}function GP(t,e,n){const r=ie.fromObject(n);return Ms(t,new ws(fm(),e,r))}function YP(t,e){return Ms(t,new na(fm(),e))}function QP(t,e,n){const r=Em(t,n);if(r){const i=Cm(r),s=i.path,o=i.queryId,a=_t(s,e),l=new na(pm(o),a);return Sm(t,s,l)}else return[]}function mf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Y1(o,e))){const l=HP(o,e,n,r);BP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(f,p)=>Ar(p));if(d&&!h){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=ZP(f);for(let y=0;y<p.length;++y){const v=p[y],C=v.query,g=Z1(t,v);t.listenProvider_.startListening(To(C),Oc(t,C),g.hashFn,g.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(To(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(_u(f));t.listenProvider_.stopListening(To(f),p)}))}e2(t,c)}return a}function JP(t,e,n,r){const i=Em(t,r);if(i!=null){const s=Cm(i),o=s.path,a=s.queryId,l=_t(o,e),c=new gi(pm(a),l,n);return Sm(t,o,c)}else return[]}function XP(t,e,n,r){const i=Em(t,r);if(i){const s=Cm(i),o=s.path,a=s.queryId,l=_t(o,e),c=ie.fromObject(n),d=new ws(pm(a),l,c);return Sm(t,o,d)}else return[]}function Mv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const y=_t(f,i);s=s||as(p,y),o=o||Ar(p)});let a=t.syncPointTree_.get(i);a?(o=o||Ar(a),s=s||as(a,ee())):(a=new FP,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=as(y,ee());v&&(s=s.updateImmediateChild(p,v))}));const c=Y1(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=_u(e);k(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=t2();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=mm(t.pendingWriteTree_,i);let h=zP(a,e,n,d,s,l);if(!c&&!o&&!r){const f=G1(a,e);h=h.concat(n2(t,e,f))}return h}function wm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_t(o,e),c=as(a,l);if(c)return c});return $1(i,e,s,n,!0)}function Ms(t,e){return J1(e,t.syncPointTree_,null,mm(t.pendingWriteTree_,ee()))}function J1(t,e,n,r){if(G(t.path))return X1(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=as(i,ee()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=z1(r,o);s=s.concat(J1(a,l,c,d))}return i&&(s=s.concat(_m(i,t,r,n))),s}}function X1(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=as(i,ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=z1(r,o),d=t.operationForChild(o);d&&(s=s.concat(X1(d,a,l,c)))}),i&&(s=s.concat(_m(i,t,r,n))),s}function Z1(t,e){const n=e.query,r=Oc(t,n);return{hashFn:()=>(OP(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?QP(t,n._path,r):YP(t,n._path);{const s=GR(i,n);return mf(t,n,null,s)}}}}function Oc(t,e){const n=_u(e);return t.queryToTagMap.get(n)}function _u(t){return t._path.toString()+"$"+t._queryIdentifier}function Em(t,e){return t.tagToQueryMap.get(e)}function Cm(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Sm(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=mm(t.pendingWriteTree_,e);return _m(r,n,i,null)}function ZP(t){return t.fold((e,n,r)=>{if(n&&Ar(n))return[yu(n)];{let i=[];return n&&(i=K1(n)),Xe(r,(s,o)=>{i=i.concat(o)}),i}})}function To(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(VP())(t._repo,t._path):t}function e2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=_u(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function t2(){return qP++}function n2(t,e,n){const r=e._path,i=Oc(t,e),s=Z1(t,n),o=t.listenProvider_.startListening(To(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!Ar(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!G(c)&&d&&Ar(d))return[yu(d).query];{let f=[];return d&&(f=f.concat(K1(d).map(p=>p.query))),Xe(h,(p,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(To(d),Oc(t,d))}}return o}/**
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
 */class xm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xm(n)}node(){return this.node_}}class Tm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Tm(this.syncTree_,n)}node(){return wm(this.syncTree_,this.path_)}}const r2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fv=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return i2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return s2(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},i2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},s2=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eC=function(t,e,n,r){return Im(e,new Tm(n,t),r)},tC=function(t,e,n){return Im(t,new xm(e),n)};function Im(t,e,n){const r=t.getPriority().val(),i=Fv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(_e,(a,l)=>{const c=Im(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class km{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function bm(t,e){let n=e instanceof re?e:new re(e),r=t,i=V(n);for(;i!==null;){const s=ys(r.node.children,i)||{children:{},childCount:0};r=new km(i,r,s),n=se(n),i=V(n)}return r}function Fs(t){return t.node.value}function nC(t,e){t.node.value=e,gf(t)}function rC(t){return t.node.childCount>0}function o2(t){return Fs(t)===void 0&&!rC(t)}function wu(t,e){Xe(t.node.children,(n,r)=>{e(new km(n,t,r))})}function iC(t,e,n,r){n&&!r&&e(t),wu(t,i=>{iC(i,e,!0,r)}),n&&r&&e(t)}function a2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Aa(t){return new re(t.parent===null?t.name:Aa(t.parent)+"/"+t.name)}function gf(t){t.parent!==null&&l2(t.parent,t.name,t)}function l2(t,e,n){const r=o2(n),i=xn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gf(t))}/**
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
 */const c2=/[\[\].#$\/\u0000-\u001F\u007F]/,u2=/[\[\].#$\u0000-\u001F\u007F]/,Fd=10*1024*1024,Nm=function(t){return typeof t=="string"&&t.length!==0&&!c2.test(t)},sC=function(t){return typeof t=="string"&&t.length!==0&&!u2.test(t)},d2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sC(t)},h2=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!tm(t)||t&&typeof t=="object"&&xn(t,".sv")},oC=function(t,e,n,r){r&&e===void 0||Eu(uu(t,"value"),e,n)},Eu=function(t,e,n){const r=n instanceof re?new bA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wr(r)+" with contents = "+e.toString());if(tm(e))throw new Error(t+"contains "+e.toString()+" "+Wr(r));if(typeof e=="string"&&e.length>Fd/3&&du(e)>Fd)throw new Error(t+"contains a string greater than "+Fd+" utf8 bytes "+Wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Nm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NA(r,o),Eu(t,a,r),RA(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wr(r)+" in addition to actual children.")}},f2=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Xo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Nm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(kA);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Wt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},p2=function(t,e,n,r){if(r&&e===void 0)return;const i=uu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Xe(e,(o,a)=>{const l=new re(o);if(Eu(i,a,ve(n,l)),om(l)===".priority"&&!h2(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),f2(i,s)},aC=function(t,e,n,r){if(!(r&&n===void 0)&&!sC(n))throw new Error(uu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},m2=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aC(t,e,n,r)},Rm=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},g2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!d2(n))throw new Error(uu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class y2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!am(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function lC(t,e,n){Cu(t,n),cC(t,r=>am(r,e))}function un(t,e,n){Cu(t,n),cC(t,r=>Wt(r,e)||Wt(e,r))}function cC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(v2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function v2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ii&&qe("event: "+n.toString()),Ds(r)}}}/**
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
 */const _2="repo_interrupt",w2=25;class E2{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new y2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ic(),this.transactionQueueTree_=new km,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C2(t,e,n){if(t.stats_=im(t.repoInfo_),t.forceRestClient_||XR())t.server_=new Tc(t.repoInfo_,(r,i,s,o)=>{Uv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{Uv(t,r,i,s,o)},r=>{jv(t,r)},r=>{S2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=rA(t.repoInfo_,()=>new nP(t.stats_,t.server_)),t.infoData_=new JA,t.infoSyncTree_=new Dv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=vu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Am(t,"connected",!1),t.serverSyncTree_=new Dv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);un(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function uC(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Su(t){return r2({timestamp:uC(t)})}function Uv(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=pc(n,c=>Be(c));o=XP(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=JP(t.serverSyncTree_,s,l,i)}else if(r){const l=pc(n,c=>Be(c));o=GP(t.serverSyncTree_,s,l)}else{const l=Be(n);o=vu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Cs(t,s)),un(t.eventQueue_,a,o)}function jv(t,e){Am(t,"connected",e),e===!1&&I2(t)}function S2(t,e){Xe(e,(n,r)=>{Am(t,n,r)})}function Am(t,e,n){const r=new re("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=vu(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function Pm(t){return t.nextWriteId_++}function x2(t,e,n,r,i){xu(t,"set",{path:e.toString(),value:n,priority:r});const s=Su(t),o=Be(n,r),a=wm(t.serverSyncTree_,e),l=tC(o,a,s),c=Pm(t),d=Q1(t.serverSyncTree_,e,l,c,!0);Cu(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const y=f==="ok";y||dt("set at "+e+" failed: "+f);const v=fr(t.serverSyncTree_,c,!y);un(t.eventQueue_,e,v),yf(t,i,f,p)});const h=Lm(t,e);Cs(t,h),un(t.eventQueue_,h,[])}function T2(t,e,n,r){xu(t,"update",{path:e.toString(),value:n});let i=!0;const s=Su(t),o={};if(Xe(n,(a,l)=>{i=!1,o[a]=eC(ve(e,a),Be(l),t.serverSyncTree_,s)}),i)qe("update() called with empty data.  Don't do anything."),yf(t,r,"ok",void 0);else{const a=Pm(t),l=KP(t.serverSyncTree_,e,o,a);Cu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||dt("update at "+e+" failed: "+c);const f=fr(t.serverSyncTree_,a,!h),p=f.length>0?Cs(t,e):e;un(t.eventQueue_,p,f),yf(t,r,c,d)}),Xe(n,c=>{const d=Lm(t,ve(e,c));Cs(t,d)}),un(t.eventQueue_,e,[])}}function I2(t){xu(t,"onDisconnectEvents");const e=Su(t),n=Ic();lf(t.onDisconnect_,ee(),(i,s)=>{const o=eC(i,s,t.serverSyncTree_,e);F1(n,i,o)});let r=[];lf(n,ee(),(i,s)=>{r=r.concat(vu(t.serverSyncTree_,i,s));const o=Lm(t,i);Cs(t,o)}),t.onDisconnect_=Ic(),un(t.eventQueue_,ee(),r)}function k2(t,e,n){let r;V(e._path)===".info"?r=Mv(t.infoSyncTree_,e,n):r=Mv(t.serverSyncTree_,e,n),lC(t.eventQueue_,e._path,r)}function Bv(t,e,n){let r;V(e._path)===".info"?r=mf(t.infoSyncTree_,e,n):r=mf(t.serverSyncTree_,e,n),lC(t.eventQueue_,e._path,r)}function b2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_2)}function xu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function yf(t,e,n,r){e&&Ds(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dC(t,e,n){return wm(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Om(t,e=t.transactionQueueTree_){if(e||Tu(t,e),Fs(e)){const n=fC(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&N2(t,Aa(e),n)}else rC(e)&&wu(e,n=>{Om(t,n)})}function N2(t,e,n){const r=n.map(c=>c.currentWriteId),i=dC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=_t(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{xu(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(fr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Tu(t,bm(t.transactionQueueTree_,e)),Om(t,t.transactionQueueTree_),un(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)Ds(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{dt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Cs(t,e)}},o)}function Cs(t,e){const n=hC(t,e),r=Aa(n),i=fC(t,n);return R2(t,i,r),r}function R2(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_t(n,l.path);let d=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(fr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=w2)d=!0,h="maxretry",i=i.concat(fr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=dC(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Eu("transaction failed: Data returned ",p,l.path);let y=Be(p);typeof p=="object"&&p!=null&&xn(p,".priority")||(y=y.updatePriority(f.getPriority()));const C=l.currentWriteId,g=Su(t),m=tC(y,f,g);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=m,l.currentWriteId=Pm(t),o.splice(o.indexOf(C),1),i=i.concat(Q1(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(fr(t.serverSyncTree_,C,!0))}else d=!0,h="nodata",i=i.concat(fr(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Tu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ds(r[a]);Om(t,t.transactionQueueTree_)}function hC(t,e){let n,r=t.transactionQueueTree_;for(n=V(e);n!==null&&Fs(r)===void 0;)r=bm(r,n),e=se(e),n=V(e);return r}function fC(t,e){const n=[];return pC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function pC(t,e,n){const r=Fs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);wu(e,i=>{pC(t,i,n)})}function Tu(t,e){const n=Fs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nC(e,n.length>0?n:void 0)}wu(e,r=>{Tu(t,r)})}function Lm(t,e){const n=Aa(hC(t,e)),r=bm(t.transactionQueueTree_,e);return a2(r,i=>{Ud(t,i)}),Ud(t,r),iC(r,i=>{Ud(t,i)}),n}function Ud(t,e){const n=Fs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nC(e,void 0):n.length=s+1,un(t.eventQueue_,Aa(e),i);for(let o=0;o<r.length;o++)Ds(r[o])}}/**
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
 */function A2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function P2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const $v=function(t,e){const n=O2(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||HR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new w1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},O2=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=A2(t.substring(d,h)));const f=P2(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const zv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",L2=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=zv.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=zv.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class mC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class gC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class D2{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Dm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:om(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=Tv(this._queryParams),n=nm(e);return n==="{}"?"default":n}get _queryObject(){return Tv(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof Dm))return!1;const n=this._repo===e._repo,r=am(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IA(this._path)}}class Gn extends Dm{constructor(e,n){super(e,n,new dm,!1)}get parent(){const e=N1(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ra{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=Ss(this.ref,e);return new ra(this._node.getChild(n),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ra(i,Ss(this.ref,r),_e)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dt(t,e){return t=Ne(t),t._checkNotDeleted("ref"),e!==void 0?Ss(t._root,e):t._root}function Ss(t,e){return t=Ne(t),V(t._path)===null?m2("child","path",e,!1):aC("child","path",e,!1),new Gn(t._repo,ve(t._path,e))}function yC(t,e){t=Ne(t),Rm("push",t._path),oC("push",e,t._path,!0);const n=uC(t._repo),r=L2(n),i=Ss(t,r),s=Ss(t,r);let o;return e!=null?o=_C(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function vC(t){return Rm("remove",t._path),_C(t,null)}function _C(t,e){t=Ne(t),Rm("set",t._path),oC("set",e,t._path,!1);const n=new Ca;return x2(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function M2(t,e){p2("update",e,t._path,!1);const n=new Ca;return T2(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Mm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mC("value",this,new ra(e.snapshotNode,new Gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gC(this,e,n):null}matches(e){return e instanceof Mm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gC(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=Ss(new Gn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new mC(e.type,this,new ra(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Pa(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,h)=>{Bv(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new D2(n,s||void 0),a=e==="value"?new Mm(o):new Fm(e,o);return k2(t._repo,t,a),()=>Bv(t._repo,t,a)}function In(t,e,n,r){return Pa(t,"value",e,n,r)}function F2(t,e,n,r){return Pa(t,"child_added",e,n,r)}function U2(t,e,n,r){return Pa(t,"child_changed",e,n,r)}function j2(t,e,n,r){return Pa(t,"child_moved",e,n,r)}function B2(t,e,n,r){return Pa(t,"child_removed",e,n,r)}UP(Gn);WP(Gn);/**
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
 */const $2="FIREBASE_DATABASE_EMULATOR_HOST",vf={};let z2=!1;function H2(t,e,n,r){t.repoInfo_=new w1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function W2(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$v(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[$2]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=$v(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new ss(ss.OWNER):new eA(t.name,t.options,e);g2("Invalid Firebase Database URL",o),G(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=q2(a,t,d,new ZR(t.name,n));return new K2(h,t)}function V2(t,e){const n=vf[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),b2(t),delete n[t.key]}function q2(t,e,n,r){let i=vf[e.name];i||(i={},vf[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new E2(t,z2,n,r),i[t.toURLString()]=s,s}class K2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(V2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function kn(t=Wp(),e){const n=As(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hE("database");r&&G2(n,...r)}return n}function G2(t,e,n,r={}){t=Ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ss(ss.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:mE(r.mockUserToken,t.app.options.projectId);s=new ss(o)}H2(i,e,n,s)}/**
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
 */function Y2(t){UR(Kn),Gt(new Lt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return W2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ke(lv,cv,t),ke(lv,cv,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y2();var Q2="firebase",J2="9.22.2";/**
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
 */ke(Q2,J2,"app");var X2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Um=Um||{},H=X2||self;function Iu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Z2(t){return Object.prototype.hasOwnProperty.call(t,jd)&&t[jd]||(t[jd]=++eO)}var jd="closure_uid_"+(1e9*Math.random()>>>0),eO=0;function tO(t,e,n){return t.call.apply(t.bind,arguments)}function nO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=tO:nt=nO,nt.apply(null,arguments)}function fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Dr(){this.s=this.s,this.o=this.o}var rO=0;Dr.prototype.s=!1;Dr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rO!=0)&&Z2(this)};Dr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Iu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var iO=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function ia(t){return/^[\s\xa0]*$/.test(t)}function ku(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return ku().indexOf(t)!=-1}function Bm(t){return Bm[" "](t),t}Bm[" "]=function(){};function sO(t,e){var n=XO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oO=pn("Opera"),sa=pn("Trident")||pn("MSIE"),EC=pn("Edge"),_f=EC||sa,CC=pn("Gecko")&&!(ku().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),aO=ku().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function SC(){var t=H.document;return t?t.documentMode:void 0}e:{var Wv="",Bd=function(){var t=ku();if(CC)return/rv:([^\);]+)(\)|;)/.exec(t);if(EC)return/Edge\/([\d\.]+)/.exec(t);if(sa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aO)return/WebKit\/(\S+)/.exec(t);if(oO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bd&&(Wv=Bd?Bd[1]:""),sa){var Vv=SC();if(Vv!=null&&Vv>parseFloat(Wv))break e}}H.document&&sa&&SC();function oa(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(CC){e:{try{Bm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oa.$.h.call(this)}}We(oa,rt);var lO={2:"touch",3:"pen",4:"mouse"};oa.prototype.h=function(){oa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var La="closure_listenable_"+(1e6*Math.random()|0),cO=0;function uO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++cO,this.fa=this.ia=!1}function bu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $m(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xC(t){const e={};for(const n in t)e[n]=t[n];return e}const qv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function TC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<qv.length;s++)n=qv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nu(t){this.src=t,this.g={},this.h=0}Nu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ef(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new uO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function wf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wC(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ef(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var zm="closure_lm_"+(1e6*Math.random()|0),$d={};function IC(t,e,n,r,i){if(r&&r.once)return bC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)IC(t,e[s],n,r,i);return null}return n=Vm(n),t&&t[La]?t.O(e,n,Oa(r)?!!r.capture:!!r,i):kC(t,e,n,!1,r,i)}function kC(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Oa(i)?!!i.capture:!!i,a=Wm(t);if(a||(t[zm]=a=new Nu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=hO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(RC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hO(){function t(n){return e.call(t.src,t.listener,n)}const e=fO;return t}function bC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bC(t,e[s],n,r,i);return null}return n=Vm(n),t&&t[La]?t.P(e,n,Oa(r)?!!r.capture:!!r,i):kC(t,e,n,!0,r,i)}function NC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)NC(t,e[s],n,r,i);else r=Oa(r)?!!r.capture:!!r,n=Vm(n),t&&t[La]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ef(s,n,r,i),-1<n&&(bu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ef(e,n,r,i)),(n=-1<t?e[t]:null)&&Hm(n))}function Hm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[La])wf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(RC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wm(e))?(wf(n,t),n.h==0&&(n.src=null,e[zm]=null)):bu(t)}}}function RC(t){return t in $d?$d[t]:$d[t]="on"+t}function fO(t,e){if(t.fa)t=!0;else{e=new oa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Hm(t),t=n.call(r,e)}return t}function Wm(t){return t=t[zm],t instanceof Nu?t:null}var zd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vm(t){return typeof t=="function"?t:(t[zd]||(t[zd]=function(e){return t.handleEvent(e)}),t[zd])}function He(){Dr.call(this),this.i=new Nu(this),this.S=this,this.J=null}We(He,Dr);He.prototype[La]=!0;He.prototype.removeEventListener=function(t,e,n,r){NC(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),TC(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pl(o,r,!0,e)&&i}if(o=e.g=t,i=pl(o,r,!0,e)&&i,i=pl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pl(o,r,!1,e)&&i}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bu(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&wf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var qm=H.JSON.stringify;class pO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mO(){var t=Km;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gO{constructor(){this.h=this.g=null}add(e,n){const r=AC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var AC=new pO(()=>new yO,t=>t.reset());class yO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _O(t){H.setTimeout(()=>{throw t},0)}let aa,la=!1,Km=new gO,PC=()=>{const t=H.Promise.resolve(void 0);aa=()=>{t.then(wO)}};var wO=()=>{for(var t;t=mO();){try{t.h.call(t.g)}catch(n){_O(n)}var e=AC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}la=!1};function Ru(t,e){He.call(this),this.h=t||1,this.g=e||H,this.j=nt(this.qb,this),this.l=Date.now()}We(Ru,He);P=Ru.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(Gm(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Ru.$.N.call(this),Gm(this),delete this.g};function Ym(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function OC(t){t.g=Ym(()=>{t.g=null,t.i&&(t.i=!1,OC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EO extends Dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:OC(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ca(t){Dr.call(this),this.h=t,this.g={}}We(ca,Dr);var Kv=[];function LC(t,e,n,r){Array.isArray(n)||(n&&(Kv[0]=n.toString()),n=Kv);for(var i=0;i<n.length;i++){var s=IC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function DC(t){$m(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hm(e)},t),t.g={}}ca.prototype.N=function(){ca.$.N.call(this),DC(this)};ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Au(){this.g=!0}Au.prototype.Ea=function(){this.g=!1};function CO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var d=c[0];c=c[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function SO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Yi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TO(t,n)+(r?" "+r:"")})}function xO(t,e){t.info(function(){return"TIMEOUT: "+e})}Au.prototype.info=function(){};function TO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qm(n)}catch{return e}}var Us={},Gv=null;function Qm(){return Gv=Gv||new He}Us.Ta="serverreachability";function MC(t){rt.call(this,Us.Ta,t)}We(MC,rt);function ua(t){const e=Qm();Qe(e,new MC(e))}Us.STAT_EVENT="statevent";function FC(t,e){rt.call(this,Us.STAT_EVENT,t),this.stat=e}We(FC,rt);function ct(t){const e=Qm();Qe(e,new FC(e,t))}Us.Ua="timingevent";function UC(t,e){rt.call(this,Us.Ua,t),this.size=e}We(UC,rt);function Da(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Jm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},IO={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xm(){}Xm.prototype.h=null;function Yv(t){return t.h||(t.h=t.i())}function kO(){}var Ma={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zm(){rt.call(this,"d")}We(Zm,rt);function eg(){rt.call(this,"c")}We(eg,rt);var Cf;function Pu(){}We(Pu,Xm);Pu.prototype.g=function(){return new XMLHttpRequest};Pu.prototype.i=function(){return{}};Cf=new Pu;function Fa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ca(this),this.P=bO,t=_f?125:void 0,this.V=new Ru(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jC}function jC(){this.i=null,this.g="",this.h=!1}var bO=45e3,Sf={},Lc={};P=Fa.prototype;P.setTimeout=function(t){this.P=t};function xf(t,e,n){t.L=1,t.v=Lu(Vn(e)),t.s=n,t.S=!0,BC(t,null)}function BC(t,e){t.G=Date.now(),Ua(t),t.A=Vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),GC(n.i,"t",r),t.C=0,n=t.l.J,t.h=new jC,t.g=mS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new EO(nt(t.Pa,t,t.g),t.O)),LC(t.U,t.g,"readystatechange",t.nb),e=t.I?xC(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ua(),CO(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&mn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const d=mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||_f||this.g&&(this.h.h||this.g.ja()||Zv(this.g)))){this.J||d!=4||e==7||(e==8||0>=h?ua(3):ua(2)),Ou(this);var n=this.g.da();this.ca=n;t:if($C(this)){var r=Zv(this.g);t="";var i=r.length,s=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),Io(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,SO(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ia(a)){var c=a;break t}}c=null}if(n=c)Yi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tf(this,n);else{this.i=!1,this.o=3,ct(12),Xr(this),Io(this);break e}}this.S?(zC(this,d,o),_f&&this.i&&d==3&&(LC(this.U,this.V,"tick",this.mb),this.V.start())):(Yi(this.j,this.m,o,null),Tf(this,o)),d==4&&Xr(this),this.i&&!this.J&&(d==4?dS(this.l,this):(this.i=!1,Ua(this)))}else YO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Xr(this),Io(this)}}}catch{}finally{}};function $C(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function zC(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=NO(t,n),i==Lc){e==4&&(t.o=4,ct(14),r=!1),Yi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Sf){t.o=4,ct(15),Yi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yi(t.j,t.m,i,null),Tf(t,i);$C(t)&&i!=Lc&&i!=Sf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),og(e),e.M=!0,ct(11))):(Yi(t.j,t.m,n,"[Invalid Chunked Response]"),Xr(t),Io(t))}P.mb=function(){if(this.g){var t=mn(this.g),e=this.g.ja();this.C<e.length&&(Ou(this),zC(this,t,e),this.i&&t!=4&&Ua(this))}};function NO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Lc:(n=Number(e.substring(n,r)),isNaN(n)?Sf:(r+=1,r+n>e.length?Lc:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,Xr(this)};function Ua(t){t.Y=Date.now()+t.P,HC(t,t.P)}function HC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Da(nt(t.lb,t),e)}function Ou(t){t.B&&(H.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xO(this.j,this.A),this.L!=2&&(ua(),ct(17)),Xr(this),this.o=2,Io(this)):HC(this,this.Y-t)};function Io(t){t.l.H==0||t.J||dS(t.l,t)}function Xr(t){Ou(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gm(t.V),DC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Tf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||If(n.i,t))){if(!t.K&&If(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Fc(n),Uu(n);else break e;sg(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Da(nt(n.ib,n),6e3));if(1>=JC(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zr(n,11)}else if((t.K||n.g==t)&&Fc(n),!ia(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const d=c[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(tg(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,le(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pS(r,r.J?r.pa:null,r.Y),o.K){XC(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ou(a),Ua(a)),r.g=o}else cS(r);0<n.j.length&&ju(n)}else c[0]!="stop"&&c[0]!="close"||Zr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Zr(n,7):ig(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ua(4)}catch{}}function RO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Iu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Iu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function WC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Iu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AO(t),r=RO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var VC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function si(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof si){this.h=t.h,Dc(this,t.j),this.s=t.s,this.g=t.g,Mc(this,t.m),this.l=t.l;var e=t.i,n=new da;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qv(this,n),this.o=t.o}else t&&(e=String(t).match(VC))?(this.h=!1,Dc(this,e[1]||"",!0),this.s=co(e[2]||""),this.g=co(e[3]||"",!0),Mc(this,e[4]),this.l=co(e[5]||"",!0),Qv(this,e[6]||"",!0),this.o=co(e[7]||"")):(this.h=!1,this.i=new da(null,this.h))}si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(uo(e,Jv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(uo(e,Jv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(uo(n,n.charAt(0)=="/"?DO:LO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",uo(n,FO)),t.join("")};function Vn(t){return new si(t)}function Dc(t,e,n){t.j=n?co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qv(t,e,n){e instanceof da?(t.i=e,UO(t.i,t.h)):(n||(e=uo(e,MO)),t.i=new da(e,t.h))}function le(t,e,n){t.i.set(e,n)}function Lu(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jv=/[#\/\?@]/g,LO=/[#\?:]/g,DO=/[#\?]/g,MO=/[#\?@]/g,FO=/#/g;function da(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mr(t){t.g||(t.g=new Map,t.h=0,t.i&&PO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=da.prototype;P.add=function(t,e){Mr(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qC(t,e){Mr(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function KC(t,e){return Mr(t),e=js(t,e),t.g.has(e)}P.forEach=function(t,e){Mr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){Mr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Mr(this);let e=[];if(typeof t=="string")KC(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Mr(this),this.i=null,t=js(this,t),KC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GC(t,e,n){qC(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),jm(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UO(t,e){e&&!t.j&&(Mr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(qC(this,r),GC(this,i,n))},t)),t.j=e}var jO=class{constructor(t,e){this.g=t,this.map=e}};function YC(t){this.l=t||BO,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var BO=10;function QC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function JC(t){return t.h?1:t.g?t.g.size:0}function If(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tg(t,e){t.g?t.g.add(e):t.h=e}function XC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}YC.prototype.cancel=function(){if(this.i=ZC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jm(t.i)}var $O=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function zO(){this.g=new $O}function HO(t,e,n){const r=n||"";try{WC(t,function(i,s){let o=i;Oa(i)&&(o=qm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function WO(t,e){const n=new Au;if(H.Image){const r=new Image;r.onload=fl(ml,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fl(ml,n,r,"TestLoadImage: error",!1,e),r.onabort=fl(ml,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fl(ml,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ml(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Du(t){this.l=t.fc||null,this.j=t.ob||!1}We(Du,Xm);Du.prototype.g=function(){return new Mu(this.l,this.j)};Du.prototype.i=function(t){return function(){return t}}({});function Mu(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ng,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Mu,He);var ng=0;P=Mu.prototype;P.open=function(t,e){if(this.readyState!=ng)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ha(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ja(this)),this.readyState=ng};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function eS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ja(this):ha(this),this.readyState==3&&eS(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ja(this))};P.Ya=function(t){this.g&&(this.response=t,ja(this))};P.ka=function(){this.g&&ja(this)};function ja(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ha(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ha(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VO=H.JSON.parse;function xe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tS,this.L=this.M=!1}We(xe,He);var tS="",qO=/^https?$/i,KO=["POST","PUT"];P=xe.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cf.g(),this.C=this.u?Yv(this.u):Yv(Cf),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Xv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=wC(KO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iS(this),0<this.B&&((this.L=GO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=Ym(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xv(this,s)}};function GO(t){return sa&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Um<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Xv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nS(t),Fu(t)}function nS(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Fu(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fu(this,!0)),xe.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?rS(this):this.kb())};P.kb=function(){rS(this)};function rS(t){if(t.h&&typeof Um<"u"&&(!t.C[1]||mn(t)!=4||t.da()!=2)){if(t.v&&mn(t)==4)Ym(t.La,0,t);else if(Qe(t,"readystatechange"),mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(VC)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!qO.test(i?i.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var s=2<mn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",nS(t)}}finally{Fu(t)}}}}function Fu(t,e){if(t.g){iS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function iS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function mn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VO(e)}};function Zv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function YO(t){const e={};t=(t.g&&2<=mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ia(t[r]))continue;var n=vO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}dO(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sS(t){let e="";return $m(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function rg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function eo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oS(t){this.Ga=0,this.j=[],this.l=new Au,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=eo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=eo("baseRetryDelayMs",5e3,t),this.hb=eo("retryDelaySeedMs",1e4,t),this.eb=eo("forwardChannelMaxRetries",2,t),this.xa=eo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new YC(t&&t.concurrentRequestLimit),this.Ja=new zO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=oS.prototype;P.ra=8;P.H=1;function ig(t){if(aS(t),t.H==3){var e=t.W++,n=Vn(t.I);if(le(n,"SID",t.K),le(n,"RID",e),le(n,"TYPE","terminate"),Ba(t,n),e=new Fa(t,t.l,e),e.L=2,e.v=Lu(Vn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=mS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ua(e)}fS(t)}function Uu(t){t.g&&(og(t),t.g.cancel(),t.g=null)}function aS(t){Uu(t),t.u&&(H.clearTimeout(t.u),t.u=null),Fc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function ju(t){if(!QC(t.i)&&!t.m){t.m=!0;var e=t.Na;aa||PC(),la||(aa(),la=!0),Km.add(e,t),t.C=0}}function QO(t,e){return JC(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Da(nt(t.Na,t,e),hS(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Fa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xC(s),TC(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lS(this,i,e),n=Vn(this.I),le(n,"RID",t),le(n,"CVER",22),this.F&&le(n,"X-HTTP-Session-Id",this.F),Ba(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(sS(s)))+"&"+e:this.o&&rg(n,this.o,s)),tg(this.i,i),this.bb&&le(n,"TYPE","init"),this.P?(le(n,"$req",e),le(n,"SID","null"),i.aa=!0,xf(i,n,null)):xf(i,n,e),this.H=2}}else this.H==3&&(t?e_(this,t):this.j.length==0||QC(this.i)||e_(this))};function e_(t,e){var n;e?n=e.m:n=t.W++;const r=Vn(t.I);le(r,"SID",t.K),le(r,"RID",n),le(r,"AID",t.V),Ba(t,r),t.o&&t.s&&rg(r,t.o,t.s),n=new Fa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=lS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),tg(t.i,n),xf(n,r,e)}function Ba(t,e){t.na&&$m(t.na,function(n,r){le(e,r,n)}),t.h&&WC({},function(n,r){le(e,r,n)})}function lS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const d=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{HO(d,o,"req"+c+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function cS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;aa||PC(),la||(aa(),la=!0),Km.add(e,t),t.A=0}}function sg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Da(nt(t.Ma,t),hS(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,uS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Da(nt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),Uu(this),uS(this))};function og(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function uS(t){t.g=new Fa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Vn(t.wa);le(e,"RID","rpc"),le(e,"SID",t.K),le(e,"AID",t.V),le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&le(e,"TO",t.qa),le(e,"TYPE","xmlhttp"),Ba(t,e),t.o&&t.s&&rg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Lu(Vn(e)),n.s=null,n.S=!0,BC(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Uu(this),sg(this),ct(19))};function Fc(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function dS(t,e){var n=null;if(t.g==e){Fc(t),og(t),t.g=null;var r=2}else if(If(t.i,e))n=e.F,XC(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Qm(),Qe(r,new UC(r,n)),ju(t)}else cS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&QO(t,e)||r==2&&sg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}}function hS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nt(t.pb,t);n||(n=new si("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Dc(n,"https"),Lu(n)),WO(n.toString(),r)}else ct(2);t.H=0,t.h&&t.h.za(e),fS(t),aS(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function fS(t){if(t.H=0,t.ma=[],t.h){const e=ZC(t.i);(e.length!=0||t.j.length!=0)&&(Hv(t.ma,e),Hv(t.ma,t.j),t.i.i.length=0,jm(t.j),t.j.length=0),t.h.ya()}}function pS(t,e,n){var r=n instanceof si?Vn(n):new si(n);if(r.g!="")e&&(r.g=e+"."+r.g),Mc(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new si(null);r&&Dc(s,r),e&&(s.g=e),i&&Mc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&le(r,n,e),le(r,"VER",t.ra),Ba(t,r),r}function mS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new Du({ob:!0})):new xe(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function gS(){}P=gS.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Qt(t,e){He.call(this),this.g=new oS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ia(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}We(Qt,He);Qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pS(t,null,t.Y),ju(t)};Qt.prototype.close=function(){ig(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qm(t),t=n);e.j.push(new jO(e.fb++,t)),e.H==3&&ju(e)};Qt.prototype.N=function(){this.g.h=null,delete this.j,ig(this.g),delete this.g,Qt.$.N.call(this)};function yS(t){Zm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(yS,Zm);function vS(){eg.call(this),this.status=1}We(vS,eg);function Bs(t){this.g=t}We(Bs,gS);Bs.prototype.Ba=function(){Qe(this.g,"a")};Bs.prototype.Aa=function(t){Qe(this.g,new yS(t))};Bs.prototype.za=function(t){Qe(this.g,new vS)};Bs.prototype.ya=function(){Qe(this.g,"b")};function JO(){this.blockSize=-1}function Sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(Sn,JO);Sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Hd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Hd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Hd(this,r),i=0;break}}this.h=i,this.i+=e};Sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var XO={};function ag(t){return-128<=t&&128>t?sO(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function gn(t){if(isNaN(t)||!isFinite(t))return ls;if(0>t)return Ke(gn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kf;return new ne(e,0)}function _S(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(_S(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(e,8)),r=ls,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=gn(Math.pow(e,s)),r=r.R(s).add(gn(o))):(r=r.R(n),r=r.add(gn(o)))}return r}var kf=4294967296,ls=ag(0),bf=ag(1),t_=ag(16777216);P=ne.prototype;P.ea=function(){if(zt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kf+r)*e,e*=kf}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dn(this))return"0";if(zt(this))return"-"+Ke(this).toString(t);for(var e=gn(Math.pow(t,6)),n=this,r="";;){var i=jc(n,e).g;n=Uc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}P.X=function(t){return t=Uc(this,t),zt(t)?-1:Dn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(bf)}P.abs=function(){return zt(this)?Ke(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function Uc(t,e){return t.add(Ke(e))}P.R=function(t){if(Dn(this)||Dn(t))return ls;if(zt(this))return zt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(zt(t))return Ke(this.R(Ke(t)));if(0>this.X(t_)&&0>t.X(t_))return gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,gl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,gl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,gl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,gl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function gl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function to(t,e){this.g=t,this.h=e}function jc(t,e){if(Dn(e))throw Error("division by zero");if(Dn(t))return new to(ls,ls);if(zt(t))return e=jc(Ke(t),e),new to(Ke(e.g),Ke(e.h));if(zt(e))return e=jc(t,Ke(e)),new to(Ke(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bf,r=e;0>=r.X(t);)n=n_(n),r=n_(r);var i=Di(n,1),s=Di(r,1);for(r=Di(r,2),n=Di(n,2);!Dn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Di(r,1),n=Di(n,1)}return e=Uc(t,i.R(e)),new to(i,e)}for(i=ls;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gn(n),o=s.R(e);zt(o)||0<o.X(t);)n-=r,s=gn(n),o=s.R(e);Dn(s)&&(s=bf),i=i.add(s),t=Uc(t,o)}return new to(i,t)}P.gb=function(t){return jc(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function n_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function Di(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ne(i,t.h)}Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Jm.NO_ERROR=0;Jm.TIMEOUT=8;Jm.HTTP_ERROR=6;IO.COMPLETE="complete";kO.EventType=Ma;Ma.OPEN="a";Ma.CLOSE="b";Ma.ERROR="c";Ma.MESSAGE="d";He.prototype.listen=He.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;Sn.prototype.digest=Sn.prototype.l;Sn.prototype.reset=Sn.prototype.reset;Sn.prototype.update=Sn.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=gn;ne.fromString=_S;var ZO=ne;const r_="@firebase/firestore";/**
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
 */let pt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Bu="9.22.2";/**
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
 */const Bc=new Sa("@firebase/firestore");function Rt(t,...e){if(Bc.logLevel<=Z.DEBUG){const n=e.map(wS);Bc.debug(`Firestore (${Bu}): ${t}`,...n)}}function lg(t,...e){if(Bc.logLevel<=Z.ERROR){const n=e.map(wS);Bc.error(`Firestore (${Bu}): ${t}`,...n)}}function wS(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ES(t="Unexpected state"){const e=`FIRESTORE (${Bu}) INTERNAL ASSERTION FAILED: `+t;throw lg(e),new Error(e)}function Nf(t,e){t||ES()}/**
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
 */const kt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class bt extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eL{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}let nL=class{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new cs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Nf(typeof r.accessToken=="string"),new eL(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Nf(e===null||typeof e=="string"),new pt(e)}},rL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class iL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new rL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let sL=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class oL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&Rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Rt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):Rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Nf(typeof n.token=="string"),this.T=n.token,new sL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lL{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=aL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function CS(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class $c{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $c("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $c&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var i_,J;(J=i_||(i_={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ZO([4294967295,4294967295],0);function Wd(){return typeof document<"u"?document:null}/**
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
 */class uL{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&Rt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class cg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new bt(kt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dL(t,e){if(lg("AsyncQueue",`${e}: ${t}`),CS(t))return new bt(kt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=lL.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Rt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Rt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new bt(kt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dL(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function SS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const s_=new Map;function fL(t,e,n,r){if(e===!0&&r===!0)throw new bt(kt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class o_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new bt(kt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new bt(kt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new bt(kt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new bt(kt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new bt(kt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class pL{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new bt(kt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new bt(kt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tL;switch(n.type){case"firstParty":return new iL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new bt(kt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=s_.get(e);n&&(Rt("ComponentProvider","Removing Datastore"),s_.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class mL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new uL(this,"async_queue_retry"),this.Xc=()=>{const n=Wd();n&&Rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Wd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new cs;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!CS(e))throw e;Rt("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw lg("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=cg.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&ES()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class gL extends pL{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new mL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yL(this),this._firestoreClient.terminate()}}function yL(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new cL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,SS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Bu=n})(Kn),Gt(new Lt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new gL(new nL(n.getProvider("auth-internal")),new oL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new bt(kt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $c(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ke(r_,"3.12.2",t),ke(r_,"3.12.2","esm2017")})();/**
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
 */const vL="functions";/**
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
 */class _L{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const a_="us-central1";class wL{constructor(e,n,r,i,s=a_,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new _L(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=a_}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const l_="@firebase/functions",c_="0.10.0";/**
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
 */const EL="auth-internal",CL="app-check-internal",SL="messaging-internal";function xL(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(EL),a=r.getProvider(SL),l=r.getProvider(CL);return new wL(s,o,a,l,i,t)};Gt(new Lt(vL,n,"PUBLIC").setMultipleInstances(!0)),ke(l_,c_,e),ke(l_,c_,"esm2017")}xL(fetch.bind(self));/**
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
 */const xS="firebasestorage.googleapis.com",TS="storageBucket",TL=2*60*1e3,IL=10*60*1e3;/**
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
 */class Ee extends Jt{constructor(e,n,r=0){super(Vd(e),`Firebase Storage: ${n} (${Vd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Vd(t){return"storage/"+t}function ug(){const t="An unknown error occurred, please check the error payload for server response.";return new Ee(we.UNKNOWN,t)}function kL(t){return new Ee(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function bL(t){return new Ee(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(we.UNAUTHENTICATED,t)}function RL(){return new Ee(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AL(t){return new Ee(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PL(){return new Ee(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OL(){return new Ee(we.CANCELED,"User canceled the upload/download.")}function LL(t){return new Ee(we.INVALID_URL,"Invalid URL '"+t+"'.")}function DL(t){return new Ee(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ML(){return new Ee(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+TS+"' property when initializing the app?")}function FL(){return new Ee(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UL(){return new Ee(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jL(t){return new Ee(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rf(t){return new Ee(we.INVALID_ARGUMENT,t)}function IS(){return new Ee(we.APP_DELETED,"The Firebase app was deleted.")}function BL(t){return new Ee(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ee(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function no(t){throw new Ee(we.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw DL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},v=n===xS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${C}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<_.length;S++){const T=_[S],b=T.regex.exec(e);if(b){const N=b[T.indices.bucket];let R=b[T.indices.path];R||(R=""),r=new At(N,R),T.postModify(r);break}}if(r==null)throw LL(e);return r}}class $L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function zL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function h(C){i=setTimeout(()=>{i=null,t(p,l())},C)}function f(){s&&clearTimeout(s)}function p(C,...g){if(c){f();return}if(C){f(),d.call(null,C,...g);return}if(l()||o){f(),d.call(null,C,...g);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let y=!1;function v(C){y||(y=!0,f(),!c&&(i!==null?(C||(a=2),clearTimeout(i),h(0)):C||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function HL(t){t(!1)}/**
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
 */function WL(t){return t!==void 0}function VL(t){return typeof t=="object"&&!Array.isArray(t)}function dg(t){return typeof t=="string"||t instanceof String}function u_(t){return hg()&&t instanceof Blob}function hg(){return typeof Blob<"u"&&!ck()}function d_(t,e,n,r){if(r<e)throw Rf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function fg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function kS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
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
 */function qL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class KL{constructor(e,n,r,i,s,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oi.NO_ERROR,l=s.getStatus();if(!a||qL(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===oi.ABORT;r(!1,new yl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new yl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ug();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?IS():OL();o(l)}else{const l=PL();o(l)}};this.canceled_?n(!1,new yl(!1,null,!0)):this.backoffId_=zL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function GL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XL(t,e,n,r,i,s,o=!0){const a=kS(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return QL(c,e),GL(c,n),YL(c,s),JL(c,r),new KL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ZL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eD(...t){const e=ZL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(hg())return new Blob(t);throw new Ee(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function nD(t){if(typeof atob>"u")throw jL("base-64");return atob(t)}/**
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
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qd{constructor(e,n){this.data=e,this.contentType=n||null}}function rD(t,e){switch(t){case yn.RAW:return new qd(bS(e));case yn.BASE64:case yn.BASE64URL:return new qd(NS(t,e));case yn.DATA_URL:return new qd(sD(e),oD(e))}throw ug()}function bS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iD(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(yn.DATA_URL,"Malformed data URL.")}return bS(e)}function NS(t,e){switch(t){case yn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nD(e)}catch(i){throw i.message.includes("polyfill")?i:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class RS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=aD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sD(t){const e=new RS(t);return e.base64?NS(yn.BASE64,e.rest):iD(e.rest)}function oD(t){return new RS(t).contentType}function aD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ur{constructor(e,n){let r=0,i="";u_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(u_(this.data_)){const r=this.data_,i=tD(r,e,n);return i===null?null:new ur(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ur(r,!0)}}static getBlob(...e){if(hg()){const n=e.map(r=>r instanceof ur?r.data_:r);return new ur(eD.apply(null,n))}else{const n=e.map(o=>dg(o)?rD(yn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ur(i,!0)}}uploadData(){return this.data_}}/**
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
 */function AS(t){let e;try{e=JSON.parse(t)}catch{return null}return VL(e)?e:null}/**
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
 */function lD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function PS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function uD(t,e){return e}class at{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||uD}}let vl=null;function dD(t){return!dg(t)||t.length<2?t:PS(t)}function OS(){if(vl)return vl;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(s,o){return dD(o)}const n=new at("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new at("size");return i.xform=r,t.push(i),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),vl=t,vl}function hD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new At(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function fD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return hD(r,t),r}function LS(t,e,n){const r=AS(e);return r===null?null:fD(t,r,n)}function pD(t,e,n,r){const i=AS(e);if(i===null||!dg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,h=t.fullPath,f="/b/"+o(d)+"/o/"+o(h),p=fg(f,n,r),y=kS({alt:"media",token:c});return p+y})[0]}function mD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class DS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function MS(t){if(!t)throw ug()}function gD(t,e){function n(r,i){const s=LS(t,i,e);return MS(s!==null),s}return n}function yD(t,e){function n(r,i){const s=LS(t,i,e);return MS(s!==null),pD(s,i,t.host,t._protocol)}return n}function FS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=RL():i=NL():n.getStatus()===402?i=bL(t.bucket):n.getStatus()===403?i=AL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vD(t){const e=FS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kL(t.path)),s.serverResponse=i.serverResponse,s}return n}function _D(t,e,n){const r=e.fullServerUrl(),i=fg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new DS(i,s,yD(t,n),o);return a.errorHandler=vD(e),a}function wD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ED(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wD(null,e)),r}function CD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let S=0;S<2;S++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=ED(e,r,i),d=mD(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=ur.getBlob(h,r,f);if(p===null)throw FL();const y={name:c.fullPath},v=fg(s,t.host,t._protocol),C="POST",g=t.maxUploadRetryTime,m=new DS(v,C,gD(t,n),g);return m.urlParams=y,m.headers=o,m.body=p.uploadData(),m.errorHandler=FS(e),m}class SD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw no("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw no("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw no("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw no("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw no("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xD extends SD{initXhr(){this.xhr_.responseType="text"}}function US(){return new xD}/**
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
 */class _i{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _i(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return PS(this._location.path)}get storage(){return this._service}get parent(){const e=lD(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new _i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BL(e)}}function TD(t,e,n){t._throwIfRoot("uploadBytes");const r=CD(t.storage,t._location,OS(),new ur(e,!0),n);return t.storage.makeRequestWithTokens(r,US).then(i=>({metadata:i,ref:t}))}function ID(t){t._throwIfRoot("getDownloadURL");const e=_D(t.storage,t._location,OS());return t.storage.makeRequestWithTokens(e,US).then(n=>{if(n===null)throw UL();return n})}function kD(t,e){const n=cD(t._location.path,e),r=new At(t._location.bucket,n);return new _i(t.storage,r)}/**
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
 */function bD(t){return/^[A-Za-z]+:\/\//.test(t)}function ND(t,e){return new _i(t,e)}function jS(t,e){if(t instanceof pg){const n=t;if(n._bucket==null)throw ML();const r=new _i(n,n._bucket);return e!=null?jS(r,e):r}else return e!==void 0?kD(t,e):t}function RD(t,e){if(e&&bD(e)){if(t instanceof pg)return ND(t,e);throw Rf("To use ref(service, url), the first argument must be a Storage instance.")}else return jS(t,e)}function h_(t,e){const n=e==null?void 0:e[TS];return n==null?null:At.makeFromBucketSpec(n,t)}function AD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:mE(i,t.app.options.projectId))}class pg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=xS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TL,this._maxUploadRetryTime=IL,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=h_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=h_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $L(IS());{const o=XL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const f_="@firebase/storage",p_="0.11.2";/**
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
 */const BS="storage";function PD(t,e,n){return t=Ne(t),TD(t,e,n)}function OD(t){return t=Ne(t),ID(t)}function LD(t,e){return t=Ne(t),RD(t,e)}function DD(t=Wp(),e){t=Ne(t);const r=As(t,BS).getImmediate({identifier:e}),i=hE("storage");return i&&MD(r,...i),r}function MD(t,e,n,r={}){AD(t,e,n,r)}function FD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new pg(n,r,i,e,Kn)}function UD(){Gt(new Lt(BS,FD,"PUBLIC").setMultipleInstances(!0)),ke(f_,p_,""),ke(f_,p_,"esm2017")}UD();const jD=(t,e)=>e.some(n=>t instanceof n);let m_,g_;function BD(){return m_||(m_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $D(){return g_||(g_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $S=new WeakMap,Af=new WeakMap,zS=new WeakMap,Kd=new WeakMap,mg=new WeakMap;function zD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$S.set(n,t)}).catch(()=>{}),mg.set(e,t),e}function HD(t){if(Af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Af.set(t,e)}let Pf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WD(t){Pf=t(Pf)}function VD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gd(this),e,...n);return zS.set(r,e.sort?e.sort():[e]),Ir(r)}:$D().includes(t)?function(...e){return t.apply(Gd(this),e),Ir($S.get(this))}:function(...e){return Ir(t.apply(Gd(this),e))}}function qD(t){return typeof t=="function"?VD(t):(t instanceof IDBTransaction&&HD(t),jD(t,BD())?new Proxy(t,Pf):t)}function Ir(t){if(t instanceof IDBRequest)return zD(t);if(Kd.has(t))return Kd.get(t);const e=qD(t);return e!==t&&(Kd.set(t,e),mg.set(e,t)),e}const Gd=t=>mg.get(t);function KD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const GD=["get","getKey","getAll","getAllKeys","count"],YD=["put","add","delete","clear"],Yd=new Map;function y_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yd.set(e,s),s}WD(t=>({...t,get:(e,n,r)=>y_(e,n)||t.get(e,n,r),has:(e,n)=>!!y_(e,n)||t.has(e,n)}));const HS="@firebase/installations",gg="0.6.4";/**
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
 */const WS=1e4,VS=`w:${gg}`,qS="FIS_v2",QD="https://firebaseinstallations.googleapis.com/v1",JD=60*60*1e3,XD="installations",ZD="Installations";/**
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
 */const eM={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},wi=new Ti(XD,ZD,eM);function KS(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
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
 */function GS({projectId:t}){return`${QD}/projects/${t}/installations`}function YS(t){return{token:t.token,requestStatus:2,expiresIn:nM(t.expiresIn),creationTime:Date.now()}}async function QS(t,e){const r=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function JS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tM(t,{refreshToken:e}){const n=JS(t);return n.append("Authorization",rM(e)),n}async function XS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nM(t){return Number(t.replace("s","000"))}function rM(t){return`${qS} ${t}`}/**
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
 */async function iM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GS(t),i=JS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:qS,appId:t.appId,sdkVersion:VS},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await XS(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:YS(c.authToken)}}else throw await QS("Create Installation",l)}/**
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
 */function ZS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function sM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oM=/^[cdef][\w-]{21}$/,Of="";function aM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lM(t);return oM.test(n)?n:Of}catch{return Of}}function lM(t){return sM(t).substr(0,22)}/**
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
 */function $u(t){return`${t.appName}!${t.appId}`}/**
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
 */const ex=new Map;function tx(t,e){const n=$u(t);nx(n,e),cM(n,e)}function nx(t,e){const n=ex.get(t);if(n)for(const r of n)r(e)}function cM(t,e){const n=uM();n&&n.postMessage({key:t,fid:e}),dM()}let ei=null;function uM(){return!ei&&"BroadcastChannel"in self&&(ei=new BroadcastChannel("[Firebase] FID Change"),ei.onmessage=t=>{nx(t.data.key,t.data.fid)}),ei}function dM(){ex.size===0&&ei&&(ei.close(),ei=null)}/**
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
 */const hM="firebase-installations-database",fM=1,Ei="firebase-installations-store";let Qd=null;function yg(){return Qd||(Qd=KD(hM,fM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}})),Qd}async function zc(t,e){const n=$u(t),i=(await yg()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&tx(t,e.fid),e}async function rx(t){const e=$u(t),r=(await yg()).transaction(Ei,"readwrite");await r.objectStore(Ei).delete(e),await r.done}async function zu(t,e){const n=$u(t),i=(await yg()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&tx(t,a.fid),a}/**
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
 */async function vg(t){let e;const n=await zu(t.appConfig,r=>{const i=pM(r),s=mM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Of?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pM(t){const e=t||{fid:aM(),registrationStatus:0};return ix(e)}function mM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yM(t)}:{installationEntry:e}}async function gM(t,e){try{const n=await iM(t,e);return zc(t.appConfig,n)}catch(n){throw KS(n)&&n.customData.serverCode===409?await rx(t.appConfig):await zc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yM(t){let e=await v_(t.appConfig);for(;e.registrationStatus===1;)await ZS(100),e=await v_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vg(t);return r||n}return e}function v_(t){return zu(t,e=>{if(!e)throw wi.create("installation-not-found");return ix(e)})}function ix(t){return vM(t)?{fid:t.fid,registrationStatus:0}:t}function vM(t){return t.registrationStatus===1&&t.registrationTime+WS<Date.now()}/**
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
 */async function _M({appConfig:t,heartbeatServiceProvider:e},n){const r=wM(t,n),i=tM(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:VS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await XS(()=>fetch(r,a));if(l.ok){const c=await l.json();return YS(c)}else throw await QS("Generate Auth Token",l)}function wM(t,{fid:e}){return`${GS(t)}/${e}/authTokens:generate`}/**
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
 */async function _g(t,e=!1){let n;const r=await zu(t.appConfig,s=>{if(!sx(s))throw wi.create("not-registered");const o=s.authToken;if(!e&&SM(o))return s;if(o.requestStatus===1)return n=EM(t,e),s;{if(!navigator.onLine)throw wi.create("app-offline");const a=TM(s);return n=CM(t,a),a}});return n?await n:r.authToken}async function EM(t,e){let n=await __(t.appConfig);for(;n.authToken.requestStatus===1;)await ZS(100),n=await __(t.appConfig);const r=n.authToken;return r.requestStatus===0?_g(t,e):r}function __(t){return zu(t,e=>{if(!sx(e))throw wi.create("not-registered");const n=e.authToken;return IM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CM(t,e){try{const n=await _M(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zc(t.appConfig,r),n}catch(n){if(KS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zc(t.appConfig,r)}throw n}}function sx(t){return t!==void 0&&t.registrationStatus===2}function SM(t){return t.requestStatus===2&&!xM(t)}function xM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+JD}function TM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function IM(t){return t.requestStatus===1&&t.requestTime+WS<Date.now()}/**
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
 */async function kM(t){const e=t,{installationEntry:n,registrationPromise:r}=await vg(e);return r?r.catch(console.error):_g(e).catch(console.error),n.fid}/**
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
 */async function bM(t,e=!1){const n=t;return await NM(n),(await _g(n,e)).token}async function NM(t){const{registrationPromise:e}=await vg(t);e&&await e}/**
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
 */function RM(t){if(!t||!t.options)throw Jd("App Configuration");if(!t.name)throw Jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Jd(t){return wi.create("missing-app-config-values",{valueName:t})}/**
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
 */const ox="installations",AM="installations-internal",PM=t=>{const e=t.getProvider("app").getImmediate(),n=RM(e),r=As(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OM=t=>{const e=t.getProvider("app").getImmediate(),n=As(e,ox).getImmediate();return{getId:()=>kM(n),getToken:i=>bM(n,i)}};function LM(){Gt(new Lt(ox,PM,"PUBLIC")),Gt(new Lt(AM,OM,"PRIVATE"))}LM();ke(HS,gg);ke(HS,gg,"esm2017");const Xd="@firebase/remote-config",w_="0.4.4";/**
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
 */const DM="remote-config";/**
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
 */const MM={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},yt=new Ti("remoteconfig","Remote Config",MM);function FM(t){const e=Ne(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class UM{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function jM(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class BM{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:jM()},l={method:"POST",headers:o,body:JSON.stringify(a)},c=fetch(s,l),d=new Promise((C,g)=>{e.signal.addEventListener(()=>{const m=new Error("The operation was aborted.");m.name="AbortError",g(m)})});let h;try{await Promise.race([c,d]),h=await c}catch(C){let g="fetch-client-network";throw(C==null?void 0:C.name)==="AbortError"&&(g="fetch-timeout"),yt.create(g,{originalErrorMessage:C==null?void 0:C.message})}let f=h.status;const p=h.headers.get("ETag")||void 0;let y,v;if(h.status===200){let C;try{C=await h.json()}catch(g){throw yt.create("fetch-client-parse",{originalErrorMessage:g==null?void 0:g.message})}y=C.entries,v=C.state}if(v==="INSTANCE_STATE_UNSPECIFIED"?f=500:v==="NO_CHANGE"?f=304:(v==="NO_TEMPLATE"||v==="EMPTY_CONFIG")&&(y={}),f!==304&&f!==200)throw yt.create("fetch-status",{httpStatus:f});return{status:f,eTag:p,config:y}}}/**
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
 */function $M(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zM(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class HM{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await $M(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!zM(i))throw i;const s={throttleEndTimeMillis:Date.now()+kk(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const WM=60*1e3,VM=12*60*60*1e3;class qM{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:WM,minimumFetchIntervalMillis:VM},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Ul(t,e){const n=t.target.error||void 0;return yt.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const Vr="app_namespace_store",KM="firebase_remote_config",GM=1;function YM(){return new Promise((t,e)=>{try{const n=indexedDB.open(KM,GM);n.onerror=r=>{e(Ul(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Vr,{keyPath:"compositeKey"})}}}catch(n){e(yt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class QM{constructor(e,n,r,i=YM()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Vr],"readonly").objectStore(Vr),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=c=>{i(Ul(c,"storage-get"))},l.onsuccess=c=>{const d=c.target.result;r(d?d.value:void 0)}}catch(l){i(yt.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([Vr],"readwrite").objectStore(Vr),l=this.createCompositeKey(e);try{const c=a.put({compositeKey:l,value:n});c.onerror=d=>{s(Ul(d,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(yt.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Vr],"readwrite").objectStore(Vr),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=c=>{i(Ul(c,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(yt.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class JM{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function XM(){Gt(new Lt(DM,t,"PUBLIC").setMultipleInstances(!0)),ke(Xd,w_),ke(Xd,w_,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw yt.create("registration-window");if(!vE())throw yt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw yt.create("registration-project-id");if(!o)throw yt.create("registration-api-key");if(!a)throw yt.create("registration-app-id");n=n||"firebase";const l=new QM(a,r.name,n),c=new JM(l),d=new Sa(Xd);d.logLevel=Z.ERROR;const h=new BM(i,Kn,n,s,o,a),f=new HM(h,l),p=new UM(f,l,c,d),y=new qM(r,p,c,l,d);return FM(y),y}}XM();var Lf=function(t,e){return Lf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Lf(t,e)};function Yn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Lf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Df(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fa(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function pa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Un(t){return typeof t=="function"}function wg(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Zd=wg(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Hc(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var $a=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Df(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var d=this.initialTeardown;if(Un(d))try{d()}catch(v){s=v instanceof Zd?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=Df(h),p=f.next();!p.done;p=f.next()){var y=p.value;try{E_(y)}catch(v){s=s??[],v instanceof Zd?s=pa(pa([],fa(s)),fa(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{p&&!p.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}if(s)throw new Zd(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)E_(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Hc(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Hc(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),ax=$a.EMPTY;function lx(t){return t instanceof $a||t&&"closed"in t&&Un(t.remove)&&Un(t.add)&&Un(t.unsubscribe)}function E_(t){Un(t)?t():t.unsubscribe()}var cx={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ZM={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,pa([t,e],fa(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function e4(t){ZM.setTimeout(function(){throw t})}function C_(){}function jl(t){t()}var Eg=function(t){Yn(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,lx(n)&&n.add(r)):r.destination=i4,r}return e.create=function(n,r,i){return new Mf(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}($a),t4=Function.prototype.bind;function eh(t,e){return t4.call(t,e)}var n4=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){_l(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){_l(r)}else _l(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){_l(n)}},t}(),Mf=function(t){Yn(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Un(n)||!n)o={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;s&&cx.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&eh(n.next,a),error:n.error&&eh(n.error,a),complete:n.complete&&eh(n.complete,a)}):o=n}return s.destination=new n4(o),s}return e}(Eg);function _l(t){e4(t)}function r4(t){throw t}var i4={closed:!0,next:C_,error:r4,complete:C_},s4=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function o4(t){return t}function a4(t){return t.length===0?o4:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var S_=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=c4(e)?e:new Mf(e,n,r);return jl(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=x_(n),new n(function(i,s){var o=new Mf({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[s4]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a4(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=x_(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function x_(t){var e;return(e=t??cx.Promise)!==null&&e!==void 0?e:Promise}function l4(t){return t&&Un(t.next)&&Un(t.error)&&Un(t.complete)}function c4(t){return t&&t instanceof Eg||l4(t)&&lx(t)}(function(t){Yn(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(d){n.error(d)}}:t.prototype._next,l._error=s?function(c){try{s(c)}catch(d){n.error(d)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Eg);var u4=wg(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ux=function(t){Yn(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new T_(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new u4},e.prototype.next=function(n){var r=this;jl(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Df(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;jl(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;jl(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?ax:(this.currentObservers=null,a.push(n),new $a(function(){r.currentObservers=null,Hc(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new S_;return n.source=this,n},e.create=function(n,r){return new T_(n,r)},e}(S_),T_=function(t){Yn(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:ax},e}(ux),Cg={now:function(){return(Cg.delegate||Date).now()},delegate:void 0};(function(t){Yn(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Cg);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),c=0,d=1;d<s.length&&s[d]<=l;d+=2)c=d;c&&s.splice(0,c+1)}},e})(ux);var d4=function(t){Yn(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}($a),Ff={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Ff.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,pa([t,e],fa(n))):setInterval.apply(void 0,pa([t,e],fa(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},h4=function(t){Yn(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Ff.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Ff.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Hc(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(d4),I_=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Cg.now,t}(),f4=function(t){Yn(e,t);function e(n,r){r===void 0&&(r=I_.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(I_);new f4(h4);wg(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const p4="[DEFAULT]",m4=E.createContext(void 0),g4=E.createContext(!1),y4="4.2.2",v4=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function _4(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=E.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=xb().find(o=>o.name===(n||p4));if(s){if(e&&v4(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=E.version||"unknown";return ke("react",o),ke("reactfire",y4),CE(e,n)}},[t.firebaseApp,e,n]);return E.createElement(m4.Provider,{value:i},E.createElement(g4.Provider,Object.assign({value:r??!1},t)))}/**
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
 */var Br,qr;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(qr||(qr={}));Object.freeze((Br={},Br[qr.added]=F2,Br[qr.removed]=B2,Br[qr.changed]=U2,Br[qr.moved]=j2,Br[qr.value]=In,Br));const w4=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=w4);const E4=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=E4);const C4=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=C4);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);E.createContext(void 0);/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const k_="popstate";function S4(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Ri(i.location.hash.substr(1));return Uf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Wc(s))}function r(i,s){Hu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return T4(e,n,r,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function x4(){return Math.random().toString(36).substr(2,8)}function b_(t,e){return{usr:t.state,key:t.key,idx:e}}function Uf(t,e,n,r){return n===void 0&&(n=null),ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ri(e):e,{state:n,key:e&&e.key||r||x4()})}function Wc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ri(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function T4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(ma({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=pr.Pop;let C=d(),g=C==null?null:C-c;c=C,l&&l({action:a,location:v.location,delta:g})}function f(C,g){a=pr.Push;let m=Uf(v.location,C,g);n&&n(m,C),c=d()+1;let _=b_(m,c),S=v.createHref(m);try{o.pushState(_,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function p(C,g){a=pr.Replace;let m=Uf(v.location,C,g);n&&n(m,C),c=d();let _=b_(m,c),S=v.createHref(m);o.replaceState(_,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function y(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Wc(C);return be(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(k_,h),l=C,()=>{i.removeEventListener(k_,h),l=null}},createHref(C){return e(i,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(C){return o.go(C)}};return v}var N_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(N_||(N_={}));function I4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ri(e):e,i=Sg(r.pathname||"/",n);if(i==null)return null;let s=dx(t);k4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=M4(s[a],j4(i));return o}function dx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=kr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),dx(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:L4(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of hx(s.path))i(s,o,l)}),e}function hx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hx(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function k4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:D4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b4=/^:\w+$/,N4=3,R4=2,A4=1,P4=10,O4=-2,R_=t=>t==="*";function L4(t,e){let n=t.split("/"),r=n.length;return n.some(R_)&&(r+=O4),e&&(r+=R4),n.filter(i=>!R_(i)).reduce((i,s)=>i+(b4.test(s)?N4:s===""?A4:P4),r)}function D4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function M4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=F4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:kr([i,d.pathname]),pathnameBase:H4(kr([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=kr([i,d.pathnameBase]))}return s}function F4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=U4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{if(d==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[d]=B4(a[h]||"",d),c},{}),pathname:s,pathnameBase:o,pattern:t}}function U4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function j4(t){try{return decodeURI(t)}catch(e){return Hu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function B4(t,e){try{return decodeURIComponent(t)}catch(n){return Hu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Sg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ri(t):t;return{pathname:n?n.startsWith("/")?n:z4(n,e):e,search:W4(r),hash:V4(i)}}function z4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function px(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ri(t):(i=ma({},t),be(!i.pathname||!i.pathname.includes("?"),th("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),th("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),th("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=$4(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const kr=t=>t.join("/").replace(/\/\/+/g,"/"),H4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),W4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,V4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function q4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mx=["post","put","patch","delete"];new Set(mx);const K4=["get",...mx];new Set(K4);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vc.apply(this,arguments)}const xg=E.createContext(null),gx=E.createContext(null),Ai=E.createContext(null),Wu=E.createContext(null),Fr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),yx=E.createContext(null);function G4(t,e){let{relative:n}=e===void 0?{}:e;za()||be(!1);let{basename:r,navigator:i}=E.useContext(Ai),{hash:s,pathname:o,search:a}=Tg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function za(){return E.useContext(Wu)!=null}function Ha(){return za()||be(!1),E.useContext(Wu).location}function vx(t){E.useContext(Ai).static||E.useLayoutEffect(t)}function Vu(){let{isDataRoute:t}=E.useContext(Fr);return t?aF():Y4()}function Y4(){za()||be(!1);let t=E.useContext(xg),{basename:e,navigator:n}=E.useContext(Ai),{matches:r}=E.useContext(Fr),{pathname:i}=Ha(),s=JSON.stringify(fx(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return vx(()=>{o.current=!0}),E.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=px(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:kr([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}function qu(){let{matches:t}=E.useContext(Fr),e=t[t.length-1];return e?e.params:{}}function Tg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Fr),{pathname:i}=Ha(),s=JSON.stringify(fx(r).map(o=>o.pathnameBase));return E.useMemo(()=>px(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Q4(t,e){return J4(t,e)}function J4(t,e,n){za()||be(!1);let{navigator:r}=E.useContext(Ai),{matches:i}=E.useContext(Fr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ha(),c;if(e){var d;let v=typeof e=="string"?Ri(e):e;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||be(!1),c=v}else c=l;let h=c.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",p=I4(t,{pathname:f}),y=nF(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:kr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:kr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?E.createElement(Wu.Provider,{value:{location:Vc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:pr.Pop}},y):y}function X4(){let t=oF(),e=q4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const Z4=E.createElement(X4,null);class eF extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Fr.Provider,{value:this.props.routeContext},E.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tF(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(xg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Fr.Provider,{value:e},r)}function nF(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||be(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Z4);let f=e.concat(s.slice(0,c+1)),p=()=>{let y;return d?y=h:l.route.Component?y=E.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,E.createElement(tF,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?E.createElement(eF,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var jf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(jf||(jf={}));var ga;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ga||(ga={}));function rF(t){let e=E.useContext(xg);return e||be(!1),e}function iF(t){let e=E.useContext(gx);return e||be(!1),e}function sF(t){let e=E.useContext(Fr);return e||be(!1),e}function _x(t){let e=sF(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function oF(){var t;let e=E.useContext(yx),n=iF(ga.UseRouteError),r=_x(ga.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function aF(){let{router:t}=rF(jf.UseNavigateStable),e=_x(ga.UseNavigateStable),n=E.useRef(!1);return vx(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vc({fromRouteId:e},s)))},[t,e])}function Me(t){be(!1)}function lF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:s,static:o=!1}=t;za()&&be(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ri(r));let{pathname:c="/",search:d="",hash:h="",state:f=null,key:p="default"}=r,y=E.useMemo(()=>{let v=Sg(c,a);return v==null?null:{location:{pathname:v,search:d,hash:h,state:f,key:p},navigationType:i}},[a,c,d,h,f,p,i]);return y==null?null:E.createElement(Ai.Provider,{value:l},E.createElement(Wu.Provider,{children:n,value:y}))}function cF(t){let{children:e,location:n}=t;return Q4(Bf(e),n)}var A_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(A_||(A_={}));new Promise(()=>{});function Bf(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Bf(r.props.children,s));return}r.type!==Me&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qc.apply(this,arguments)}function wx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dF(t,e){return t.button===0&&(!e||e==="_self")&&!uF(t)}const hF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],fF=["aria-current","caseSensitive","className","end","style","to","children"],P_="startTransition";function pF(t){let{basename:e,children:n,window:r}=t,i=E.useRef();i.current==null&&(i.current=S4({window:r,v5Compat:!0}));let s=i.current,[o,a]=E.useState({action:s.action,location:s.location}),l=E.useCallback(c=>{P_ in Ag?Ag[P_](()=>a(c)):a(c)},[a]);return E.useLayoutEffect(()=>s.listen(l),[s,l]),E.createElement(lF,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const mF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ci=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d}=e,h=wx(e,hF),{basename:f}=E.useContext(Ai),p,y=!1;if(typeof c=="string"&&gF.test(c)&&(p=c,mF))try{let m=new URL(window.location.href),_=c.startsWith("//")?new URL(m.protocol+c):new URL(c),S=Sg(_.pathname,f);_.origin===m.origin&&S!=null?c=S+_.search+_.hash:y=!0}catch{}let v=G4(c,{relative:i}),C=yF(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function g(m){r&&r(m),m.defaultPrevented||C(m)}return E.createElement("a",qc({},h,{href:p||v,onClick:y||s?r:g,ref:n,target:l}))}),rn=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:c}=e,d=wx(e,fF),h=Tg(l,{relative:d.relative}),f=Ha(),p=E.useContext(gx),{navigator:y}=E.useContext(Ai),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,C=f.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(C=C.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase());let m=C===v||!o&&C.startsWith(v)&&C.charAt(v.length)==="/",_=g!=null&&(g===v||!o&&g.startsWith(v)&&g.charAt(v.length)==="/"),S=m?r:void 0,T;typeof s=="function"?T=s({isActive:m,isPending:_}):T=[s,m?"active":null,_?"pending":null].filter(Boolean).join(" ");let b=typeof a=="function"?a({isActive:m,isPending:_}):a;return E.createElement(Ci,qc({},d,{"aria-current":S,className:T,ref:n,style:b,to:l}),typeof c=="function"?c({isActive:m,isPending:_}):c)});var O_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(O_||(O_={}));var L_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(L_||(L_={}));function yF(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Vu(),l=Ha(),c=Tg(t,{relative:o});return E.useCallback(d=>{if(dF(d,n)){d.preventDefault();let h=r!==void 0?r:Wc(l)===Wc(c);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}function D_({image:t,addClass:e}){return u.createElement(rn,{to:"/",className:`w-full max-w-[130px] max-h-[80px] ${e}`},u.createElement("img",{src:t,alt:"Logo BTC"}))}function vF(t){return u.createElement("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40"},u.createElement("article",{className:"col-span-2"},u.createElement("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100"},u.createElement("h5",{className:"uppercase text-1xl border-b"},"Navigation"),u.createElement(rn,{to:"/about",className:"my-1 text-4xl lg:my-5 md:text-7xl xl:text-9xl"},"About Us"),u.createElement(rn,{to:"/our-team",className:"my-1 text-4xl lg:my-5 md:text-7xl xl:text-9xl"},"Our Team"),u.createElement(rn,{to:"/services",className:"my-1 text-4xl lg:my-5 md:text-7xl xl:text-9xl"},"Services"))),u.createElement("aside",null,u.createElement("ul",{className:"flex flex-col justify-between px-8 text-gray-100 mb-8"},u.createElement("h5",{className:"uppercase text-1xl border-b font-semibold"},"Careers"),t.children,u.createElement(rn,{to:"/careers",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"},"Apply")),u.createElement("aside",{className:"px-8 text-gray-100 mb-8"},u.createElement("h5",{className:"uppercase text-1xl border-b font-semibold"},"Social Media"),u.createElement("ul",{className:"text-gray-100 pr-6"},u.createElement("li",{className:"text-2xl lg:my-1 lg:text-3xl "},u.createElement("a",{href:"https://www.facebook.com/BTCamericas",className:"pr-10 btn-animate"},u.createElement("span",null,"Facebook"))),u.createElement("li",{className:"text-2xl lg:my-1 lg:text-3xl "},u.createElement("a",{href:"https://www.instagram.com/btcamericas/",className:"pr-10 btn-animate"},u.createElement("span",null,"Instagram"))),u.createElement("li",{className:"text-2xl lg:my-1 lg:text-3xl "},u.createElement("a",{href:"https://twitter.com/BTCamericas",className:"pr-10 btn-animate"},u.createElement("span",null,"Twitter"))),u.createElement("li",{className:"text-2xl lg:my-1 lg:text-3xl "},u.createElement("a",{href:"https://www.linkedin.com/company/btcamericas",className:"pr-10 btn-animate"},u.createElement("span",null,"LinkedIn"))))),u.createElement("ul",{className:"flex flex-col justify-between px-8 text-gray-100 mb-16"},u.createElement("h5",{className:"uppercase text-1xl border-b font-semibold"},"Contact Us"),u.createElement(rn,{to:"/contact",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"},"Contact"))),u.createElement("style",null,`
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
				`))}const M_="/assets/btc_logo_white-26dc9d2f.svg";function F_(t){const[e,n]=E.useState(!1);return u.createElement("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full"},u.createElement(D_,{image:M_}),u.createElement("nav",{className:"flex"},u.createElement("section",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus",onClick:()=>n(r=>!r)},u.createElement("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),u.createElement("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),u.createElement("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})),u.createElement("section",{className:e?"showMenuNav":"hideMenuNav"},u.createElement("div",{className:"h-full"},u.createElement("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>n(!1)},u.createElement(D_,{image:M_,classLogo:"text-gray-100",logo:"btc"}),u.createElement("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>n(r=>!r)},u.createElement("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),u.createElement("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),u.createElement("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}))),u.createElement(vF,null,t.children)))),u.createElement("style",null,`
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
                `))}function _F(){const t=Tn(),e=Vu(),n=()=>{kN(t).then(()=>{e("/"),console.log("Signed out successfully"),window.location.reload()}).catch(r=>{console.log("error")})};return u.createElement("div",{className:"flex justify-start w-full max-w-4xl"},u.createElement("button",{onClick:n,className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"},"Logout"))}function wF(){return u.createElement(u.Fragment,null,u.createElement(rn,{to:"/login",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"},"Login"),u.createElement(rn,{to:"/signup",className:"text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"},"Sign Up"))}function EF(){const[t,e]=E.useState(!1),n=Tn();return E.useEffect(()=>{ki(n,r=>{r.email?e(!0):e(!1)})}),u.createElement(u.Fragment,null,t?u.createElement(F_,null,u.createElement(u.Fragment,null,u.createElement(rn,{to:"/logged",className:"flex items-center text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"},"Account"),u.createElement(_F,null))):u.createElement(F_,null,u.createElement(wF,null)))}function CF(){return u.createElement("footer",{className:"absolute w-full bottom-0 flex items-center justify-between border-t border-gray-400 py-8 px-8 lg:px-40"},u.createElement("p",{className:" text-gray-50"},"© Business Travel Consulting",u.createElement("span",{className:"mx-1"},new Date().getFullYear()),"- All rights reserved"),u.createElement(rn,{to:":(",className:"btn-animate text-gray-50"},"Privacy Policy"))}function De({content:t}){return u.createElement("div",{className:"relative min-h-[100vh] bg-[rgb(0,12,26)]"},u.createElement(EF,null),t,u.createElement(CF,null))}function Ex(){return u.createElement("section",{className:"h-screen bg-gif"},u.createElement("aside",{className:"h-screen p-4 bg-fig-gr",id:"js-animate"}),u.createElement("style",null,`
					.text-border {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}
					.bg-gif {
						margin-top: -125px;

						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.gifer.com/ODz.gif')
					}

					.bg-fig-gr {
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
					`))}function SF(){return u.createElement(u.Fragment,null,u.createElement(De,{content:u.createElement(Ex,null)}))}function Cx(t){const{vacancyData:e}=t,{vacancyTitle:n,typeVacancy:r,areaVacancy:i,locationPlace:s,typeLocation:o}=e;return u.createElement("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-4"},u.createElement("div",null,u.createElement("span",{className:"text-slate-400 text-sm"},i),u.createElement("h3",{className:"font-bold mt-px text-gray-100"},n),u.createElement("div",{className:"flex items-center gap-3 mt-2"},u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm min-w-fit"},r),u.createElement("span",{className:"text-slate-400 text-sm flex gap-1 items-center"},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})),o,", ",s))),u.createElement("div",null,t.children))}const xF="_dropdown_wrapper_11cw3_1",TF="_dropdown_item_list_11cw3_11",IF="_active_11cw3_33",kF="_item_list_11cw3_43";function U_({items:t=[],dropdownTitle:e}){const n=E.useRef(null),r=E.useRef(null),[i,s]=E.useState(!1),o=()=>{s(!i)},a=c=>{c.key==="Escape"&&i&&s(!1)},l=c=>{if(r.current){if(r.current.contains(c.target)||n.current.contains(c.target))return;s(!1)}};return E.useEffect(()=>{i&&r.current.querySelector("button").focus(),document.addEventListener("mousedown",l)},[i]),u.createElement("div",{className:xF,onKeyUp:a},u.createElement("button",{className:"h-fit py-1 px-2 rounded text-gray-400 bg-[#ffffff17] font-medium text-sm text-center inline-flex items-center ml-2 my-1","aria-haspopup":"true","aria-controls":e,onClick:o,ref:n},e," ",i?u.createElement("svg",{height:"24",fill:"rgb(70,70,70)",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"m0 0h24v24h-24z",fill:"none"}),u.createElement("path",{d:"m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"})):u.createElement("svg",{height:"24",fill:"rgb(70,70,70)",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"m0 0h24v24h-24z",fill:"none"}),u.createElement("path",{d:"m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"}))),u.createElement("ul",{ref:r,className:`${TF} ${i?IF:""} `},t.map((c,d)=>u.createElement("li",{className:kF,key:d},u.createElement("button",{className:"w-full py-1 px-4 text-gray-100 hover:bg-[#ffffff42] ml-0 animate-pulse hover:animate-none",type:"submit",value:c.anchor,onClick:c.slug},c.anchor)))))}function bF(){const[t,e]=E.useState([]),[n,r]=E.useState(""),[i,s]=E.useState([]),o=kn(),a=Dt(o,"/vacancy");E.useEffect(()=>In(a,v=>{const C=v.val();v.exists()&&Object.entries(C).forEach(([g,m])=>{m.id=g,e(_=>[..._,m]),s(_=>[..._,m])})}),[]);const l=v=>{const C=i.filter(g=>{if(g.vacancyTitle.toLowerCase().includes(v.toLowerCase())||g.areaVacancy.toLowerCase().includes(v.toLowerCase())||g.categoryVacancy.toLowerCase().includes(v.toLowerCase())||g.subcategoryVacancy.toLowerCase().includes(v.toLowerCase()))return g});e(C)},c=v=>{const C=i.filter(g=>{if(g.typeLocation.toLowerCase().includes(v.toLowerCase())||g.typeVacancy.toLowerCase().includes(v.toLowerCase()))return g});e(C)},d=v=>{r(v.target.value.toLowerCase()),l(v.target.value)},h=v=>{const C=v.target.value;r(C.toLowerCase()),c(C)},f=[{slug:h,anchor:"On-site"},{slug:h,anchor:"Hybrid"},{slug:h,anchor:"Remote"}],p=[{slug:h,anchor:"Full Time"},{slug:h,anchor:"Half Time"}],y=[...t].reverse();return u.createElement(u.Fragment,null,u.createElement("article",{className:"flex justify-center flex-col items-center pb-20 px-2"},u.createElement("header",{className:"flex justify-center items-center w-full md:max-w-3xl 2xl:max-w-4xl lg:mt-[-113px]"},u.createElement("section",{className:"w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6"},u.createElement("aside",{className:"grid grid-cols-3 gap-0 rounded"},u.createElement("div",{className:"col-span-3 p-2 rounded"},u.createElement("div",{className:" flex border border-gray-700 rounded-lg bg-gray-200 items-center p-2 hover:bg-gray-300"},u.createElement("span",{className:"material-symbols-outlined text-gray-800"},"search"),u.createElement("input",{onChange:d,placeholder:"Type your search term here... ↩",className:"bg-transparent w-full focus:outline-none border-none text-gray-800",type:"search"})))),u.createElement("aside",{className:"flex flex-wrap md:flex-row text-gray-100"},u.createElement("div",{className:"flex items-center"},u.createElement("p",null,"FILTER BY:")),u.createElement(U_,{dropdownTitle:"LOCATION TYPE",items:f}),u.createElement(U_,{dropdownTitle:"WORK TYPE",items:p})))),u.createElement("div",{className:"w-full max-w-4xl mb-8"},y.map(v=>u.createElement(Cx,{vacancyData:v,key:v.id},u.createElement(Ci,{to:v.id},u.createElement("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse"},"Apply Now",u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})))))))),u.createElement("style",null,`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `))}function NF(){return u.createElement(u.Fragment,null,u.createElement(De,{content:u.createElement(bF,null)}))}function RF(){const[t,e]=E.useState({}),{id:n}=qu(),r=kn(),i=Dt(r,`/vacancy/${n}`),{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:d,content:h,salaryVacancy:f,categoryVacancy:p,subcategoryVacancy:y,requiredVacancy:v}=t,C=new Date,g=`${C.getFullYear()}-${C.getMonth()+1}-${C.getDate()}`,m=new Date(g),_=new Date(s),S=864e5,b=(m-_)/S;return E.useEffect(()=>{In(i,N=>{e(N.val())})},[]),u.createElement(De,{content:u.createElement("main",{className:"flex justify-center flex-col items-center"},u.createElement("section",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md mb-32"},u.createElement("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]"},u.createElement("h1",{className:"font-bold text-2xl flex justify-between text-gray-100"},o,u.createElement("span",{className:"text-slate-500 text-sm font-light"},s==g?"Hoy":`Hace  ${Math.trunc(b)}  días`)),u.createElement("p",{className:"font-bold text-gray-200"},f),u.createElement("span",{className:"text-slate-300 text-sm flex gap-1 items-center"},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})),l,", ",c),u.createElement("div",{className:"flex items-center gap-3 mt-2"},u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm"},a),u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm"},d))),u.createElement("article",{className:"py-2"},u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Sobre el Empleo"),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Categoría: "),u.createElement("span",{className:"text-gray-300"}," ",p)),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Subcategoría: "),u.createElement("span",{className:"text-gray-300"}," ",y)),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Educación mínima requerida:"," "),u.createElement("span",{className:"text-gray-300"}," ",v))),u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Descripción"),u.createElement("p",{className:"text-gray-300"},h))),u.createElement(Ci,{to:"apply"},u.createElement("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse"},"Apply Now"))))})}var Sx={exports:{}};(function(t,e){(function(n,r){t.exports=r(E)})(Lx,n=>(()=>{var r={703:(a,l,c)=>{var d=c(414);function h(){}function f(){}f.resetWarningCache=h,a.exports=function(){function p(C,g,m,_,S,T){if(T!==d){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}function y(){return p}p.isRequired=p;var v={array:p,bigint:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:y,element:p,elementType:p,instanceOf:y,node:p,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:f,resetWarningCache:h};return v.PropTypes=v,v}},697:(a,l,c)=>{a.exports=c(703)()},414:a=>{a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var c=i[a]={exports:{}};return r[a](c,c.exports,s),c.exports}s.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return s.d(l,{a:l}),l},s.d=(a,l)=>{for(var c in l)s.o(l,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:l[c]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{default:()=>Re});var a=s(98),l=s.n(a),c=s(697),d=s.n(c);function h(){return h=Object.assign?Object.assign.bind():function(L){for(var U=1;U<arguments.length;U++){var K=arguments[U];for(var Q in K)Object.prototype.hasOwnProperty.call(K,Q)&&(L[Q]=K[Q])}return L},h.apply(this,arguments)}var f=function(L){var U=L.pageClassName,K=L.pageLinkClassName,Q=L.page,xt=L.selected,Te=L.activeClassName,A=L.activeLinkClassName,x=L.getEventListener,w=L.pageSelectedHandler,M=L.href,O=L.extraAriaContext,$=L.pageLabelBuilder,W=L.rel,ue=L.ariaLabel||"Page "+Q+(O?" "+O:""),fe=null;return xt&&(fe="page",ue=L.ariaLabel||"Page "+Q+" is your current page",U=U!==void 0?U+" "+Te:Te,K!==void 0?A!==void 0&&(K=K+" "+A):K=A),l().createElement("li",{className:U},l().createElement("a",h({rel:W,role:M?void 0:"button",className:K,href:M,tabIndex:xt?"-1":"0","aria-label":ue,"aria-current":fe,onKeyPress:w},x(w)),$(Q)))};f.propTypes={pageSelectedHandler:d().func.isRequired,selected:d().bool.isRequired,pageClassName:d().string,pageLinkClassName:d().string,activeClassName:d().string,activeLinkClassName:d().string,extraAriaContext:d().string,href:d().string,ariaLabel:d().string,page:d().number.isRequired,getEventListener:d().func.isRequired,pageLabelBuilder:d().func.isRequired,rel:d().string};const p=f;function y(){return y=Object.assign?Object.assign.bind():function(L){for(var U=1;U<arguments.length;U++){var K=arguments[U];for(var Q in K)Object.prototype.hasOwnProperty.call(K,Q)&&(L[Q]=K[Q])}return L},y.apply(this,arguments)}var v=function(L){var U=L.breakLabel,K=L.breakAriaLabel,Q=L.breakClassName,xt=L.breakLinkClassName,Te=L.breakHandler,A=L.getEventListener,x=Q||"break";return l().createElement("li",{className:x},l().createElement("a",y({className:xt,role:"button",tabIndex:"0","aria-label":K,onKeyPress:Te},A(Te)),U))};v.propTypes={breakLabel:d().oneOfType([d().string,d().node]),breakAriaLabel:d().string,breakClassName:d().string,breakLinkClassName:d().string,breakHandler:d().func.isRequired,getEventListener:d().func.isRequired};const C=v;function g(L){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return L??U}function m(L){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},m(L)}function _(){return _=Object.assign?Object.assign.bind():function(L){for(var U=1;U<arguments.length;U++){var K=arguments[U];for(var Q in K)Object.prototype.hasOwnProperty.call(K,Q)&&(L[Q]=K[Q])}return L},_.apply(this,arguments)}function S(L,U){for(var K=0;K<U.length;K++){var Q=U[K];Q.enumerable=Q.enumerable||!1,Q.configurable=!0,"value"in Q&&(Q.writable=!0),Object.defineProperty(L,Q.key,Q)}}function T(L,U){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(K,Q){return K.__proto__=Q,K},T(L,U)}function b(L,U){if(U&&(m(U)==="object"||typeof U=="function"))return U;if(U!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(L)}function N(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function R(L){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(U){return U.__proto__||Object.getPrototypeOf(U)},R(L)}function j(L,U,K){return U in L?Object.defineProperty(L,U,{value:K,enumerable:!0,configurable:!0,writable:!0}):L[U]=K,L}var F=function(L){(function(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),w&&T(x,w)})(A,L);var U,K,Q,xt,Te=(Q=A,xt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,w=R(Q);if(xt){var M=R(this).constructor;x=Reflect.construct(w,arguments,M)}else x=w.apply(this,arguments);return b(this,x)});function A(x){var w,M;return function(O,$){if(!(O instanceof $))throw new TypeError("Cannot call a class as a function")}(this,A),j(N(w=Te.call(this,x)),"handlePreviousPage",function(O){var $=w.state.selected;w.handleClick(O,null,$>0?$-1:void 0,{isPrevious:!0})}),j(N(w),"handleNextPage",function(O){var $=w.state.selected,W=w.props.pageCount;w.handleClick(O,null,$<W-1?$+1:void 0,{isNext:!0})}),j(N(w),"handlePageSelected",function(O,$){if(w.state.selected===O)return w.callActiveCallback(O),void w.handleClick($,null,void 0,{isActive:!0});w.handleClick($,null,O)}),j(N(w),"handlePageChange",function(O){w.state.selected!==O&&(w.setState({selected:O}),w.callCallback(O))}),j(N(w),"getEventListener",function(O){return j({},w.props.eventListener,O)}),j(N(w),"handleClick",function(O,$,W){var ue=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},fe=ue.isPrevious,ot=fe!==void 0&&fe,Pi=ue.isNext,$s=Pi!==void 0&&Pi,jr=ue.isBreak,Ut=jr!==void 0&&jr,Qn=ue.isActive,Jn=Qn!==void 0&&Qn;O.preventDefault?O.preventDefault():O.returnValue=!1;var Xn=w.state.selected,Ce=w.props.onClick,jt=W;if(Ce){var Tt=Ce({index:$,selected:Xn,nextSelectedPage:W,event:O,isPrevious:ot,isNext:$s,isBreak:Ut,isActive:Jn});if(Tt===!1)return;Number.isInteger(Tt)&&(jt=Tt)}jt!==void 0&&w.handlePageChange(jt)}),j(N(w),"handleBreakClick",function(O,$){var W=w.state.selected;w.handleClick($,O,W<O?w.getForwardJump():w.getBackwardJump(),{isBreak:!0})}),j(N(w),"callCallback",function(O){w.props.onPageChange!==void 0&&typeof w.props.onPageChange=="function"&&w.props.onPageChange({selected:O})}),j(N(w),"callActiveCallback",function(O){w.props.onPageActive!==void 0&&typeof w.props.onPageActive=="function"&&w.props.onPageActive({selected:O})}),j(N(w),"getElementPageRel",function(O){var $=w.state.selected,W=w.props,ue=W.nextPageRel,fe=W.prevPageRel,ot=W.selectedPageRel;return $-1===O?fe:$===O?ot:$+1===O?ue:void 0}),j(N(w),"pagination",function(){var O=[],$=w.props,W=$.pageRangeDisplayed,ue=$.pageCount,fe=$.marginPagesDisplayed,ot=$.breakLabel,Pi=$.breakClassName,$s=$.breakLinkClassName,jr=$.breakAriaLabels,Ut=w.state.selected;if(ue<=W)for(var Qn=0;Qn<ue;Qn++)O.push(w.getPageElement(Qn));else{var Jn=W/2,Xn=W-Jn;Ut>ue-W/2?Jn=W-(Xn=ue-Ut):Ut<W/2&&(Xn=W-(Jn=Ut));var Ce,jt,Tt=function(Zn){return w.getPageElement(Zn)},Ae=[];for(Ce=0;Ce<ue;Ce++){var Va=Ce+1;if(Va<=fe)Ae.push({type:"page",index:Ce,display:Tt(Ce)});else if(Va>ue-fe)Ae.push({type:"page",index:Ce,display:Tt(Ce)});else if(Ce>=Ut-Jn&&Ce<=Ut+(Ut===0&&W>1?Xn-1:Xn))Ae.push({type:"page",index:Ce,display:Tt(Ce)});else if(ot&&Ae.length>0&&Ae[Ae.length-1].display!==jt&&(W>0||fe>0)){var Qu=Ce<Ut?jr.backward:jr.forward;jt=l().createElement(C,{key:Ce,breakAriaLabel:Qu,breakLabel:ot,breakClassName:Pi,breakLinkClassName:$s,breakHandler:w.handleBreakClick.bind(null,Ce),getEventListener:w.getEventListener}),Ae.push({type:"break",index:Ce,display:jt})}}Ae.forEach(function(Zn,er){var qa=Zn;Zn.type==="break"&&Ae[er-1]&&Ae[er-1].type==="page"&&Ae[er+1]&&Ae[er+1].type==="page"&&Ae[er+1].index-Ae[er-1].index<=2&&(qa={type:"page",index:Zn.index,display:Tt(Zn.index)}),O.push(qa.display)})}return O}),x.initialPage!==void 0&&x.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(x.initialPage,") and forcePage (").concat(x.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),M=x.initialPage?x.initialPage:x.forcePage?x.forcePage:0,w.state={selected:M},w}return U=A,(K=[{key:"componentDidMount",value:function(){var x=this.props,w=x.initialPage,M=x.disableInitialCallback,O=x.extraAriaContext,$=x.pageCount,W=x.forcePage;w===void 0||M||this.callCallback(w),O&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger($)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat($,"). Did you forget a Math.ceil()?")),w!==void 0&&w>$-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(w," > ").concat($-1,").")),W!==void 0&&W>$-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(W," > ").concat($-1,")."))}},{key:"componentDidUpdate",value:function(x){this.props.forcePage!==void 0&&this.props.forcePage!==x.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(x.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var x=this.state.selected,w=this.props,M=w.pageCount,O=x+w.pageRangeDisplayed;return O>=M?M-1:O}},{key:"getBackwardJump",value:function(){var x=this.state.selected-this.props.pageRangeDisplayed;return x<0?0:x}},{key:"getElementHref",value:function(x){var w=this.props,M=w.hrefBuilder,O=w.pageCount,$=w.hrefAllControls;if(M)return $||x>=0&&x<O?M(x+1,O,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(x){var w=x===this.state.selected;if(this.props.ariaLabelBuilder&&x>=0&&x<this.props.pageCount){var M=this.props.ariaLabelBuilder(x+1,w);return this.props.extraAriaContext&&!w&&(M=M+" "+this.props.extraAriaContext),M}}},{key:"getPageElement",value:function(x){var w=this.state.selected,M=this.props,O=M.pageClassName,$=M.pageLinkClassName,W=M.activeClassName,ue=M.activeLinkClassName,fe=M.extraAriaContext,ot=M.pageLabelBuilder;return l().createElement(p,{key:x,pageSelectedHandler:this.handlePageSelected.bind(null,x),selected:w===x,rel:this.getElementPageRel(x),pageClassName:O,pageLinkClassName:$,activeClassName:W,activeLinkClassName:ue,extraAriaContext:fe,href:this.getElementHref(x),ariaLabel:this.ariaLabelBuilder(x),page:x+1,pageLabelBuilder:ot,getEventListener:this.getEventListener})}},{key:"render",value:function(){var x=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&x!==void 0)return x&&x(this.props);var w=this.props,M=w.disabledClassName,O=w.disabledLinkClassName,$=w.pageCount,W=w.className,ue=w.containerClassName,fe=w.previousLabel,ot=w.previousClassName,Pi=w.previousLinkClassName,$s=w.previousAriaLabel,jr=w.prevRel,Ut=w.nextLabel,Qn=w.nextClassName,Jn=w.nextLinkClassName,Xn=w.nextAriaLabel,Ce=w.nextRel,jt=this.state.selected,Tt=jt===0,Ae=jt===$-1,Va="".concat(g(ot)).concat(Tt?" ".concat(g(M)):""),Qu="".concat(g(Qn)).concat(Ae?" ".concat(g(M)):""),Zn="".concat(g(Pi)).concat(Tt?" ".concat(g(O)):""),er="".concat(g(Jn)).concat(Ae?" ".concat(g(O)):""),qa=Tt?"true":"false",Px=Ae?"true":"false";return l().createElement("ul",{className:W||ue,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:Va},l().createElement("a",_({className:Zn,href:this.getElementHref(jt-1),tabIndex:Tt?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":qa,"aria-label":$s,rel:jr},this.getEventListener(this.handlePreviousPage)),fe)),this.pagination(),l().createElement("li",{className:Qu},l().createElement("a",_({className:er,href:this.getElementHref(jt+1),tabIndex:Ae?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":Px,"aria-label":Xn,rel:Ce},this.getEventListener(this.handleNextPage)),Ut)))}}])&&S(U.prototype,K),Object.defineProperty(U,"prototype",{writable:!1}),A}(a.Component);j(F,"propTypes",{pageCount:d().number.isRequired,pageRangeDisplayed:d().number,marginPagesDisplayed:d().number,previousLabel:d().node,previousAriaLabel:d().string,prevPageRel:d().string,prevRel:d().string,nextLabel:d().node,nextAriaLabel:d().string,nextPageRel:d().string,nextRel:d().string,breakLabel:d().oneOfType([d().string,d().node]),breakAriaLabels:d().shape({forward:d().string,backward:d().string}),hrefBuilder:d().func,hrefAllControls:d().bool,onPageChange:d().func,onPageActive:d().func,onClick:d().func,initialPage:d().number,forcePage:d().number,disableInitialCallback:d().bool,containerClassName:d().string,className:d().string,pageClassName:d().string,pageLinkClassName:d().string,pageLabelBuilder:d().func,activeClassName:d().string,activeLinkClassName:d().string,previousClassName:d().string,nextClassName:d().string,previousLinkClassName:d().string,nextLinkClassName:d().string,disabledClassName:d().string,disabledLinkClassName:d().string,breakClassName:d().string,breakLinkClassName:d().string,extraAriaContext:d().string,ariaLabelBuilder:d().func,eventListener:d().string,renderOnZeroPageCount:d().func,selectedPageRel:d().string}),j(F,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(L){return L},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Re=F})(),o})())})(Sx);var AF=Sx.exports;const PF=Y_(AF),nh=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];function OF({currentItems:t}){return u.createElement(u.Fragment,null,t&&t.map(e=>u.createElement("div",null,u.createElement("h3",null,"Item #",e))))}function LF({itemsPerPage:t}){const[e,n]=E.useState(0),r=e+t;console.log(`Loading items from ${e} to ${r}`);const i=nh.slice(e,r),s=Math.ceil(nh.length/t),o=a=>{const l=a.selected*t%nh.length;console.log(`User requested page number ${a.selected}, which is offset ${l}`),n(l)};return u.createElement(u.Fragment,null,u.createElement(OF,{currentItems:i}),u.createElement(PF,{breakLabel:"...",nextLabel:" next >",onPageChange:o,pageRangeDisplayed:5,pageCount:s,previousLabel:"< previous",renderOnZeroPageCount:null}))}function Pe({label:t,name:e,on:n,val:r}){return u.createElement("div",{className:"my-4"},u.createElement("label",{htmlFor:"",className:"text-gray-300 text-sm"},t),u.createElement("input",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n}))}function DF({on:t}){return u.createElement("div",{className:""},u.createElement("label",{htmlFor:"",className:"text-gray-300 mx-2"},"Asignar Fecha"),u.createElement("input",{required:!0,type:"checkbox",name:"dateVacancy",onChange:t,className:"relative float-right mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:bg-blue-800"}))}function xx({label:t,name:e,on:n,val:r}){return u.createElement("div",{className:"my-4"},u.createElement("label",{htmlFor:"",className:"text-gray-300"},t),u.createElement("textarea",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n}))}function MF(){const[t,e]=E.useState({}),{id:n}=qu(),r=kn(),i=Dt(r,`/vacancy/${n}`),{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:d,content:h,salaryVacancy:f,categoryVacancy:p,subcategoryVacancy:y,requiredVacancy:v}=t,C=new Date,g=`${C.getFullYear()}-${C.getMonth()+1}-${C.getDate()}`,m=new Date(g),_=new Date(s),S=864e5,b=(m-_)/S;E.useEffect(()=>{In(i,F=>{e(F.val())})},[]);const N=F=>{const Re=F.target.name,L=new Date(F.target.value);e({...t,[Re]:L})},R=F=>{const Re=F.target.name,L=F.target.value;e({...t,[Re]:L})},j=()=>(alert("Actualizado"),M2(i,t));return u.createElement("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]"},u.createElement("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8"},u.createElement("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]"},u.createElement("div",{className:"flex justify-end items-center"},u.createElement("label",{className:"text-gray-300 mx-2"},"Fecha:"),u.createElement("input",{type:"date",name:"dateVacancy",onChange:N,className:"rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})),u.createElement(Pe,{label:"Vacante",name:"vacancyTitle",val:o,on:R}),u.createElement(Pe,{label:"Área",name:"areaVacancy",val:l,on:R}),u.createElement(Pe,{label:"Categoría",name:"categoryVacancy",val:p,on:R}),u.createElement(Pe,{label:"Subcategoría",name:"subcategoryVacancy",val:y,on:R}),u.createElement(Pe,{label:"Salario",name:"salaryVacancy",val:f,on:R}),u.createElement(Pe,{label:"Jornada Laboral",name:"typeVacancy",val:a,on:R}),u.createElement(Pe,{label:"Modalidad",name:"typeLocation",val:d,on:R}),u.createElement(Pe,{label:"Ubicación",name:"locationPlace",val:c,on:R}),u.createElement(Pe,{label:"Educación mínima requerida",name:"requiredVacancy",val:v,on:R}),u.createElement(xx,{label:"Descripción",name:"content",val:h,on:R}))),u.createElement("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5"},u.createElement("section",{className:"flex justify-center flex-col items-center mb-8"},u.createElement("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md"},u.createElement("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]"},u.createElement("h1",{className:"font-bold text-2xl flex justify-between text-gray-100"},o,u.createElement("span",{className:"text-slate-500 text-sm font-light"},s==g?"Hoy":`Hace ${Math.trunc(b)}  días`)),u.createElement("p",{className:"font-bold text-gray-200"},f),u.createElement("span",{className:"text-slate-300 text-sm flex gap-1 items-center"},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})),l,", ",c),u.createElement("div",{className:"flex items-center gap-3 mt-2"},u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm"},a),u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm"},d))),u.createElement("article",{className:"py-2"},u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Sobre el Empleo"),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Categoría: "),u.createElement("span",{className:"text-gray-300"}," ",p)),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Subcategoría: "),u.createElement("span",{className:"text-gray-300"}," ",y)),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Educación mínima requerida:"," "),u.createElement("span",{className:"text-gray-300"}," ",v))),u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Descripción"),u.createElement("p",{className:"text-gray-300"},h))),u.createElement("button",{className:"bg-[#8bdc4870] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#8bdc488d] ml-0 animate-pulse hover:animate-none",type:"button",onClick:j},"Update")))))}function FF(){return u.createElement(MF,null)}function Wa(){return u.createElement("section",{className:"flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md"},u.createElement("h2",{className:"mb-8 font-extrabold text-9xl text-gray-300 animate-pulse"},u.createElement("span",{className:"sr-only"},"Error"),"404"),u.createElement("p",{className:"text-3xl text-gray-300 animate-pulse"},"Looks like this page are currently offline for you"),u.createElement("a",{rel:"noopener noreferrer",href:"/",className:"px-8 py-3 font-semibold rounded text-gray-400 border rounded-xl hover:text-gray-100 "},"Back to Homepage"))}function UF(){const[t,e]=E.useState(!1),n=Tn();return E.useEffect(()=>{ki(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log("Panel de 'Update'"),e(!0)):e(!1)})}),u.createElement("div",null,t?u.createElement(De,{content:u.createElement(FF,null)}):u.createElement(De,{content:u.createElement(Wa,null)}))}function jF(){const[t,e]=E.useState({}),n=kn(),r=Dt(n,"/vacancy"),i=new Date,s=`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`,o=c=>{const d=c.target.name,h=s;e({...t,[d]:h})},a=c=>{const d=c.target.name,h=c.target.value;e({...t,[d]:h})},l=c=>(c.preventDefault(),yC(r,t));return u.createElement("section",{className:"flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 "},u.createElement("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:l},u.createElement("div",{className:"flex justify-end"},u.createElement(DF,{on:o})),u.createElement(Pe,{label:"Vacante",name:"vacancyTitle",on:a}),u.createElement(Pe,{label:"Área",name:"areaVacancy",on:a}),u.createElement(Pe,{label:"Categoría",name:"categoryVacancy",on:a}),u.createElement(Pe,{label:"Subcategoría",name:"subcategoryVacancy",on:a}),u.createElement(Pe,{label:"Salario",name:"salaryVacancy",on:a}),u.createElement(Pe,{label:"Jornada Laboral",name:"typeVacancy",on:a}),u.createElement(Pe,{label:"Modalidad",name:"typeLocation",on:a}),u.createElement(Pe,{label:"Ubicación",name:"locationPlace",on:a}),u.createElement(Pe,{label:"Educación mínima requerida",name:"requiredVacancy",on:a}),u.createElement(xx,{label:"Descripción",name:"content",on:a}),u.createElement("div",null,u.createElement("button",{className:"bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none",type:"submit"},"Create"))))}function BF(){const[t,e]=E.useState({}),n=kn(),r=Dt(n,"/vacancy");E.useEffect(()=>{In(r,c=>{e(c.val())})},[]);const[i,s]=E.useState(0),o=i+20,l=[...Object.keys(t).slice(i,o)].reverse();return u.createElement("section",null,u.createElement("article",{className:"flex justify-center flex-col items-center pb-20"},u.createElement("div",{className:"w-full"},l.map(c=>{const d=t[c],h=()=>{vC(Dt(n,`/vacancy/${c}`))},f=()=>{confirm("Are you sure of DELETE this Vacancy?")==!0&&h()};return u.createElement(Cx,{vacancyData:d,key:c},u.createElement(Ci,{to:`/logged/edit/${c}`},u.createElement("button",{className:"bg-[#74ff0029] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#8bdc4870] mb-1 w-[120px]"},u.createElement("span",{className:"material-symbols-outlined"},"edit"),"Edit")),u.createElement("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:f},u.createElement("span",{className:"material-symbols-outlined"},"delete"),"Delete"))}))),u.createElement("style",null,`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `))}function $F(){return u.createElement("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8"},u.createElement(jF,null),u.createElement("article",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5"},u.createElement(BF,null)))}function zF(){const[t,e]=E.useState(!1),n=Tn();return E.useEffect(()=>{ki(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log("Welcome to Create Vacancies Panel :)"),e(!0)):e(!1)})}),u.createElement("div",null,t?u.createElement(De,{content:u.createElement($F,null)}):u.createElement(De,{content:u.createElement(Wa,null)}))}function HF(){const[t,e]=E.useState({}),[n,r]=E.useState({}),{id:i}=qu(),s=kn(),o=Dt(s,`/vacancy/${i}`),a=Dt(s,"/candidate"),[l,c]=E.useState({}),d=DD(),h=LD(d,`candidates/${l.name}`),{candidateName:f,vacancyTitle:p,dateVacancy:y,typeVacancy:v,areaVacancy:C,locationPlace:g,typeLocation:m,content:_,salaryVacancy:S,categoryVacancy:T,subcategoryVacancy:b,requiredVacancy:N}=t,R=new Date,j=`${R.getFullYear()}-${R.getMonth()+1}-${R.getDate()}`,F=new Date(j),Re=new Date(y),L=864e5,K=(F-Re)/L;E.useEffect(()=>{In(o,w=>{e(w.val())})},[]);const Q=w=>{const M=w.target.files[0];c(M),console.log(M)},xt=async()=>(await PD(h,l),await OD(h)),Te=w=>{const M=w.target.name,O=w.target.value;r({...n,[M]:O,vacancyTitle:p})},A=()=>(console.log("Enviado"),yC(a,n)),x=async w=>{if(w.preventDefault(),n){const M=await xt();n.url=M,A()}alert("Enviado")};return u.createElement("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]"},u.createElement("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8"},u.createElement("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:x},u.createElement("div",{className:"my-4 "},u.createElement("label",{htmlFor:"",className:"text-gray-300 text-sm"},"Nombres"),u.createElement("input",{required:!0,autoComplete:"on",id:"domTextElement1",type:"name",name:"candidateName",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})),u.createElement("div",{className:"flex my-4"},u.createElement("div",{className:"w-2/4 pr-2"},u.createElement("label",{htmlFor:"",className:"text-gray-300 text-sm"},"Nacionalidad"),u.createElement("input",{type:"text",name:"candidateNationality",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})),u.createElement("div",{className:"w-2/4 pl-2"},u.createElement("label",{className:"text-gray-300 text-sm"},"Fecha de Nacimiento"),u.createElement("input",{required:!0,type:"date",name:"candidateBirthday",onChange:Te,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"}))),u.createElement("div",{className:"flex my-4"},u.createElement("div",{className:"w-2/4 pr-2"},u.createElement("label",{htmlFor:"",className:"text-gray-300 text-sm"},"Número Celular"),u.createElement("input",{required:!0,autoComplete:"on",type:"tel",name:"candidateTel",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})),u.createElement("div",{className:"w-2/4 pl-2"},u.createElement("label",{className:"text-gray-300 text-sm"},"Número de Contacto"),u.createElement("input",{type:"tel",name:"candidateTel2",onChange:Te,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"}))),u.createElement("div",{className:"flex my-4"},u.createElement("div",{className:"w-2/4 pr-2"},u.createElement("label",{htmlFor:"",className:"text-gray-300 text-sm"},"Email"),u.createElement("input",{required:!0,autoComplete:"on",type:"email",name:"candidateEmail",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Te})),u.createElement("div",{className:"w-2/4 pl-2"},u.createElement("label",{className:"text-gray-300 text-sm"},"Escolaridad"),u.createElement("input",{type:"text",name:"candidateGrade",onChange:Te,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"}))),u.createElement(Pe,{required:!0,autoComplete:"on",label:"Dirección",name:"candidateLocation",on:Te}),u.createElement("div",{className:"my-4"},u.createElement("label",{htmlFor:"",className:"text-gray-300 text-sm"},"Adjuntar CV"),u.createElement("input",{required:!0,type:"file",name:"candidateGrade",className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:Q})),u.createElement("div",{className:"pb-8"},u.createElement("span",{className:"block text-xs  text-gray-400"},"Le sugerimos que el nombre de su archivo sea su nombre completo.")),u.createElement("button",{className:"bg-[#2f7ce07f] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3d79f0b4] ml-0 animate-pulse hover:animate-none flex items-center mb-8",type:"submit"},"Send",u.createElement("span",{className:"material-symbols-outlined"},u.createElement("span",{className:"material-symbols-outlined"},"arrow_forward"))))),u.createElement("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5"},u.createElement("section",{className:"flex justify-center flex-col items-center mb-8"},u.createElement("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md"},u.createElement("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]"},u.createElement("h1",{className:"font-bold text-2xl flex justify-between text-gray-100"},p,u.createElement("span",{className:"text-slate-500 text-sm font-light"},y==j?"Hoy":`Hace  ${Math.trunc(K)} días`)),u.createElement("p",{className:"font-bold text-gray-200"},S),u.createElement("span",{className:"text-slate-300 text-sm flex gap-1 items-center"},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})),C,", ",g),u.createElement("div",{className:"flex items-center gap-3 mt-2"},u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm"},v),u.createElement("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm"},m))),u.createElement("article",{className:"py-2"},u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Sobre el Empleo"),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Categoría: "),u.createElement("span",{className:"text-gray-300"}," ",T)),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Subcategoría: "),u.createElement("span",{className:"text-gray-300"}," ",b)),u.createElement("p",null,u.createElement("span",{className:"text-gray-100"},"Educación mínima requerida:"," "),u.createElement("span",{className:"text-gray-300"}," ",N))),u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Descripción"),u.createElement("p",{className:"text-gray-300"},_)))))))}function WF(){return u.createElement("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8"},u.createElement(HF,null))}function Ig(t){return u.createElement("div",null,t.children)}function Tx(){const t=Tn(),e=Vu(),n=new gt,[r,i]=E.useState(""),[s,o]=E.useState(""),l=window.location.toString(),c=f=>{f.preventDefault(),xN(t,r,s).then(p=>{const y=p.user;l.endsWith("login")?e("../"):e("./"),(y.email=="carlosarturomt@gmail.com"&&l.endsWith("login")||y.email=="amiranda@btcamericas.com"&&l.endsWith("login"))&&e("/logged")}).catch(p=>{const y=p.code,v=p.message;console.log(y,v)})},d=async f=>{f.preventDefault(),await i1(t,n).then(p=>{gt.credentialFromResult(p).accessToken;const v=p.user;l.endsWith("login")?e("../"):e("./"),(v.email=="carlosarturomt@gmail.com"&&l.endsWith("login")||v.email=="amiranda@btcamericas.com"&&l.endsWith("login"))&&e("/logged")}).catch(p=>{p.code,p.message,p.customData.email,gt.credentialFromError(p)})},h=()=>{const f=document.getElementById("password");f.type=="password"?(f.type="text",document.getElementById("eye").innerHTML="visibility_off"):(f.type="password",document.getElementById("eye").innerHTML="visibility")};return u.createElement(Ig,null,u.createElement("section",{className:"flex w-full content-center items-center justify-center py-20 md:py-5 h-screen"},u.createElement("aside",{className:"px-8 py-4 flex content-center items-center justify-center rounded-3xl bg-[#ffffff29] md:px-28 md:py-12"},u.createElement("div",{className:"max-w-72"},u.createElement("h1",{className:"text-xl font-semibold text-gray-100"},"Welcome back"),u.createElement("small",{className:"text-gray-200"},"Welcome back! Please enter your details"),u.createElement("form",{className:"mt-4 text-gray-200"},u.createElement("div",{className:"mb-4"},u.createElement("label",{className:"mb-2 block text-xs font-semibold leading-[0]"},"Email"),u.createElement("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"Email Address",value:r,onChange:f=>i(f.target.value)})),u.createElement("div",{className:"mb-3"},u.createElement("label",{className:"mb-2 block text-xs font-semibold leading-[0]"},"Password"),u.createElement("div",{className:"flex items-center w-full rounded-md border-0 focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"},u.createElement("input",{className:"w-full bg-transparent focus:bg-transparent focus:outline-none",id:"password",name:"password",type:"password",placeholder:"******",value:s,onChange:f=>o(f.target.value)}),u.createElement("a",{onClick:h,className:"cursor-pointer flex items-center"},u.createElement("span",{className:"material-symbols-outlined",id:"eye"},"visibility")))),u.createElement("div",{className:"mb-3 flex flex-wrap content-center"},u.createElement("input",{id:"remember",type:"checkbox",className:"mr-1 checked:bg-purple-700"}),u.createElement("label",{htmlFor:"remember",className:"mr-auto text-xs font-semibold"},"Remember for 30 days"),u.createElement("a",{href:"#",className:"text-xs font-semibold text-gray-400 hover:text-gray-200 ml-1"},"Forgot password?")),u.createElement("div",{className:"mb-3"},u.createElement("button",{className:"mb-1.5 block w-full text-center text-white bg-[#04135aa3] hover:bg-[#04125ae0] px-2 py-1.5 rounded-md",type:"submit",onClick:c},"Sign in"),u.createElement("button",{className:"bx-shadow flex flex-wrap justify-center w-full hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",type:"submit",onClick:d},u.createElement("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign in with Google"))),u.createElement("div",{className:"text-center"},u.createElement("span",{className:"text-xs text-gray-400 font-semibold"},"Don't have account?"),u.createElement(rn,{to:"/signup",className:"text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100"},"Sign up")))),u.createElement("div",{className:"bg-solid"})),u.createElement("style",null,`
				.bg-solid {
						z-index: -2;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						background-color: #000c1a;
					}

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

				`))}function VF(){const[t,e]=E.useState(!1),n=Tn();return E.useEffect(()=>{ki(n,r=>{r?(console.log("Welcome",r.email),e(!0)):e(!1)})}),u.createElement("div",null,t?u.createElement(De,{content:u.createElement(WF,null)}):u.createElement(Ig,null,u.createElement(Tx,null)))}function qF(t){const{vacancyData:e}=t,{candidateEmail:n,candidateName:r,candidateTel:i,url:s,vacancyTitle:o}=e;return u.createElement("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-4"},u.createElement("div",null,u.createElement("span",{className:"text-slate-400 text-sm"},o),u.createElement("h3",{className:"font-bold mt-px text-gray-100"},r),u.createElement("div",{className:"flex flex-wrap items-center gap-3 mt-2"},u.createElement("span",{className:"flex items-center bg-[#ffffff17] hover:animate-pulse text-gray-400 rounded-full py-1 text-sm pl-2 pr-4"},u.createElement("span",{className:"p-1 material-symbols-outlined"},"call"),u.createElement("a",{href:"tel:+52"+i,target:"_blank",rel:"noopener noreferrer"},i)),u.createElement("span",{className:"text-slate-400 text-sm flex gap-1 items-center hover:animate-pulse"},u.createElement("span",{className:"material-symbols-outlined"},"mail"),u.createElement("a",{href:"mailto:"+n,target:"_blank",rel:"noopener noreferrer"},n)),u.createElement("span",{className:"text-slate-400 text-sm flex gap-1 items-center hover:animate-pulse"},u.createElement("span",{className:"material-symbols-outlined"},"cloud_download"),u.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s.length>87?`${s.slice(87,97)}...pdf`:s)))),u.createElement("div",null,t.children))}function KF(){const[t,e]=E.useState({}),[n,r]=E.useState(0),i=kn(),s=Dt(i,"/candidate"),o=n+18,l=[...Object.keys(t).slice(n,o)].reverse();return E.useEffect(()=>{In(s,c=>{e(c.val())})},[]),u.createElement("section",null,u.createElement("article",{className:"flex justify-center flex-col items-center pb-20"},u.createElement("div",{className:"w-full max-w-4xl px-4 lg:px-0 mb-8"},l.map(c=>{const d=t[c],h=()=>{vC(Dt(i,`/candidate/${c}`))},f=()=>{confirm("Are you sure of DELETE this Candidate?")==!0&&h()};return u.createElement(qF,{vacancyData:d,key:c},u.createElement(Ci,{to:`${c}`},u.createElement("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:animate-pulse mb-1 w-[120px]"},"See more")),u.createElement("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:f},u.createElement("span",{className:"material-symbols-outlined"},"delete"),"Delete"))}))))}function GF(){const[t,e]=E.useState(!1),n=Tn();return E.useEffect(()=>{ki(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log(`Welcome '${r.email}' to Candidates Panel 👷`),e(!0)):(e(!1),console.log("User is logged out"))})}),u.createElement(u.Fragment,null,t?u.createElement(De,{content:u.createElement(KF,null)}):u.createElement(De,{content:u.createElement(Wa,null)}))}function YF(){const[t,e]=E.useState(!1),[n,r]=E.useState({}),i=Tn(),{id:s}=qu(),o=kn(),a=Dt(o,`/candidate/${s}`),{candidateBirthday:l,candidateName:c,candidateEmail:d,candidateGrade:h,candidateLocation:f,candidateNationality:p,candidateTel:y,candidateTel2:v,vacancyTitle:C,url:g}=n,m=new Date,_=`${m.getFullYear()}-${m.getMonth()+1}-${m.getDate()}`,S=new Date(_),T=new Date(l),b=864e5,j=(S-T)/b/365;return E.useEffect(()=>{In(a,F=>{r(F.val())})},[]),E.useEffect(()=>{ki(i,F=>{F.email=="carlosarturomt@gmail.com"||F.email=="amiranda@btcamericas.com"?(console.log("Welcome to Deatil Candidates Panel"),e(!0)):e(!1)})}),u.createElement("div",null,t?u.createElement(De,{content:u.createElement("main",{className:"flex justify-center flex-col items-center mb-8"},u.createElement("section",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md"},u.createElement("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]"},u.createElement("span",{className:"text-slate-400 text-sm"},C),u.createElement("h1",{className:"font-bold text-2xl flex justify-between text-gray-100"},c,u.createElement("span",{className:"text-slate-500 text-sm font-light"},l==_?l:Math.trunc(j)+" years")),u.createElement("p",{className:"font-bold text-gray-200"},h),u.createElement("div",{className:"flex items-center gap-3 mt-2"},u.createElement("span",{className:"flex items-center bg-[#ffffff17] hover:animate-pulse text-slate-400 rounded-full py-0 text-sm pl-2 pr-4"},u.createElement("span",{className:"p-1 material-symbols-outlined"},"call"),u.createElement("a",{href:"tel:+52"+y,target:"_blank",rel:"noopener noreferrer"},y)),u.createElement("span",{className:"text-slate-400 text-sm hover:animate-pulse"},u.createElement("a",{href:"mailto:"+d,target:"_blank",rel:"noopener noreferrer",className:"flex  items-center"},u.createElement("span",{className:"material-symbols-outlined"},"mail"),d)),u.createElement("span",{className:"text-slate-400 text-sm flex gap-1 items-center"},u.createElement("span",{className:"material-symbols-outlined"},"home_pin"),f))),u.createElement("article",{className:"py-2"},u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"About me"),u.createElement("div",{className:"text-slate-300"},u.createElement("p",{className:"flex"},"Hola!",u.createElement("span",{className:"animate-bounce"},"😁")),u.createElement("p",null,"Soy ",`${c}, `,j<=10?"":` tengo ${Math.trunc(j)} años`,", es un placer postularme en la vacante de '",C,"', espero puedan considerarme para ser parte del proceso de selección."))),u.createElement("aside",{className:"py-2"},u.createElement("h3",{className:"font-bold text-lg text-gray-100"},"Details"),u.createElement("p",{className:"flex items-center"},u.createElement("span",{className:"text-gray-100 flex items-center w-[fit-content]"},"Birthday:"),u.createElement("span",{className:"text-slate-300 ml-1"},l)),u.createElement("p",{className:"flex items-center"},u.createElement("span",{className:"text-gray-100 flex items-center w-[fit-content]"},u.createElement("span",null,"Contact Phone:")),u.createElement("span",{className:"text-slate-300 ml-1"},y)),u.createElement("p",{className:"flex items-center"},u.createElement("span",{className:"text-gray-100 flex items-center w-[fit-content]"},u.createElement("span",null,"Contact Emergency:")),u.createElement("span",{className:"text-slate-300 ml-1"}," ",v)),u.createElement("p",{className:"flex items-center"},u.createElement("span",{className:"text-gray-100 flex items-center w-[fit-content]"},u.createElement("span",null,"Degree:")),u.createElement("span",{className:"text-slate-300 ml-1"},h)),u.createElement("p",{className:"flex items-center"},u.createElement("span",{className:"text-gray-100 flex items-center w-[fit-content]"},u.createElement("span",null,"Nationality:")),u.createElement("span",{className:"text-slate-300 ml-1"},p)),u.createElement("a",{className:"mt-6 w-[fit-content] bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse",href:g,target:"_blank",rel:"noopener noreferrer"},u.createElement("span",{className:"material-symbols-outlined"},"cloud_download"),"Download CV")))))}):u.createElement(De,{content:u.createElement(Wa,null)}))}function QF(){const[t,e]=E.useState(""),[n,r]=E.useState(""),i=Tn(),s=new gt,o=Vu(),a=async d=>{d.preventDefault(),await SN(i,t,n).then(h=>{const f=h.user;console.log(f),o("/login")}).catch(h=>{const f=h.code,p=h.message;console.log(f,p)})},l=async d=>{d.preventDefault(),await i1(i,s).then(h=>{gt.credentialFromResult(h).accessToken,h.user,o("/logged")}).catch(h=>{h.code,h.message,h.customData.email,gt.credentialFromError(h)})},c=()=>{const d=document.getElementById("password");d.type=="password"?(d.type="text",document.getElementById("eye").innerHTML="visibility_off"):(d.type="password",document.getElementById("eye").innerHTML="visibility")};return u.createElement(Ig,null,u.createElement("section",{className:"flex w-full content-center justify-center py-20 md:py-5"},u.createElement("article",{className:"w-full flex flex-wrap-reverse justify-center items-center px-4 md:max-w-5xl md:flex-wrap"},u.createElement("aside",{className:"w-full flex content-center py-8 px-2 my-4 items-center justify-center rounded-md md:w-1/2 bg-[#000c1aae] md:h-full md:rounded-r-none"},u.createElement("div",{className:"max-w-72"},u.createElement("h1",{className:"text-xl font-semibold text-gray-100"},"Sign Up"),u.createElement("small",{className:"text-gray-200"},"Create a BTC Account"),u.createElement("form",{className:"mt-4 text-gray-200"},u.createElement("div",{className:"mb-3"},u.createElement("label",{className:"mb-2 block text-xs font-semibold"},"Email"),u.createElement("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"name@example.com",value:t,onChange:d=>e(d.target.value)})),u.createElement("div",{className:"mb-3"},u.createElement("label",{className:"mb-2 block text-xs font-semibold"},"Password"),u.createElement("div",{className:"flex items-center w-full rounded-md border-0 focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"},u.createElement("input",{className:"w-full bg-transparent focus:bg-transparent focus:outline-none",id:"password",name:"password",type:"password",placeholder:"******",value:n,onChange:d=>r(d.target.value)}),u.createElement("a",{onClick:c,className:"cursor-pointer flex items-center"},u.createElement("span",{className:"material-symbols-outlined",id:"eye"},"visibility")))),u.createElement("div",{className:"mb-3"},u.createElement("button",{className:"mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md",type:"submit",onClick:a},"Sign Up"),u.createElement("button",{className:"flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",type:"submit",onClick:l},u.createElement("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign Up with Google"))))),u.createElement("aside",{className:"w-full flex flex-wrap content-center justify-center rounded-md md:w-1/2 md:rounded-l-none relative"},u.createElement("img",{className:" h-full bg-center bg-no-repeat bg-cover rounded-md md:rounded-l-none",src:"https://dummyimage.com/496x661/4f4f4f/ffffff.jpg"})),u.createElement("div",{className:"bg-gif"}))),u.createElement("style",null,`
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
				`))}function JF(){return u.createElement("section",{className:"flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 md:mb-36"},u.createElement("h1",{className:"text-gray-100 text-4xl font-semibold w-full"},"Welcome Charly"),u.createElement("article",{className:"flex items-start justify-center flex-wrap w-full"},u.createElement("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]"},u.createElement("h2",{className:"text-gray-100 text-2xl font-semibold"},"Candidates"),u.createElement(Ci,{to:"candidates/"},u.createElement("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none"},"See more..."))),u.createElement("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]"},u.createElement("h2",{className:"text-gray-100 text-2xl font-semibold"},"Vacancies"),u.createElement(Ci,{to:"create"},u.createElement("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none"},"See more...")))))}function XF(){const[t,e]=E.useState(!1),n=Tn();return E.useEffect(()=>{ki(n,r=>{r.email=="carlosarturomt@gmail.com"||r.email=="amiranda@btcamericas.com"?(console.log("Welcome Charly"),e(!0)):e(!1)})}),u.createElement(u.Fragment,null,t?u.createElement(De,{content:u.createElement(JF,null)}):u.createElement(De,{content:u.createElement(Ex,null)}))}function ZF(){return u.createElement(u.Fragment,null,u.createElement(De,{content:u.createElement("div",{className:"text-gray-200 py-4 md:px-28 lg:px-56"},u.createElement("h1",{className:"py-4 text-6xl font-semibold text-border-style text-center px-2 md:text-8xl "},"About Us"),u.createElement("p",{className:"pb-4 px-6 text-justify md:pb-8"},'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'),u.createElement("aside",{className:"flex flex-wrap px-6 pb-28 text-justify md:flex-nowrap"},u.createElement("p",{className:"pb-4 md:pb-8 md:pr-6"},"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."),u.createElement("p",{className:"pb-4 md:pb-8 md:pl-6"},"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.")))}))}const e3=[{area:"Dirección BTC - Dirección",name:"Alejandro Ramírez Tabche",position:"CEO (Chief Executive Officer)",children:[{area:"Tecnologías de Información - Desarrollo",name:"Gaurav Chhabra",position:"IT Manager",children:[{area:"BTC Technology - Desarrollo de Software",name:"Roberto Velázquez Razo",position:"Software engineer"}]},{area:"Fullfilment",name:"Erika Joselin Aguilar Carrillo",position:"Fulfillment Director",children:[{area:"Meeting Studio",name:"Darinka Juarez Ochoa",position:"Production Account Supervisor",children:[{area:"Meeting Studio",name:"Julio César Cabrera Vargas",position:"Renderer"},{area:"Production",name:"Silvana Rodríguez Juárez",position:"Production Support"}]}]},{area:"Soporte Y Normatividad",name:"Ivonne Toquero Camacho",position:"Director of Conference Operations and Regulation"},{area:"Human resources manager",name:"Sandra Monica Becerril Becerra",position:"Recursos Humanos - Administración de RH"}]}];const Ix=t=>u.createElement("ul",null,t.data.map((e,n)=>{var r;return u.createElement(E.Fragment,{key:e.name},u.createElement("li",null,u.createElement("div",{className:"card"},u.createElement("div",{className:"card-body"},u.createElement("h2",{className:"text-slate-400 text-xs  "},e.area),u.createElement("h2",{className:"font-bold text-sm "},e.name),u.createElement("h2",{className:"text-slate-400 text-xs "},e.position))),((r=e.children)==null?void 0:r.length)&&u.createElement(Ix,{data:e.children})))})),t3=()=>{const[t,e]=E.useState(window.innerWidth),[n,r]=E.useState(100),[i,s]=E.useState(5),o=t<1080;E.useEffect(()=>{const c=()=>e(window.innerWidth);return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[n]);const a=()=>{document.getElementById("container").setAttribute("style",`zoom: ${n}%;`),document.getElementById("scrollLeft").setAttribute("style",`left: ${i};`),r(n+10),s(i-1*i),n>=10&&document.getElementById("container").setAttribute("style",`position: initial; zoom: ${n}%;`),n>=100&&document.getElementById("container").setAttribute("style",`position: relative; zoom: ${n}%;`)},l=()=>{document.getElementById("container").setAttribute("style",`zoom: ${n}%;`),document.getElementById("scrollLeft").setAttribute("style",`left: ${i};`),r(n-10),s(i+5),console.log(n),n<100&&document.getElementById("container").setAttribute("style",`position: initial; zoom: ${n}%;`)};return u.createElement(De,{content:u.createElement("div",{className:"relative"},u.createElement("div",{id:"container",className:"org-tree zoom snap-mandatory snap-x "},u.createElement("div",{id:"scrollLeft",className:"child "},u.createElement(Ix,{data:e3}))),u.createElement("div",{className:"pb-32 buttons-float "},u.createElement("button",{onClick:a,className:o?"text-red-500 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2":"text-blue-800 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"},"+"),u.createElement("button",{onClick:l,className:o?"text-red-500 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2":"text-blue-800 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"},"-")))})},kx=t=>{const{chartData:e}=t,{area:n,name:r,position:i,children:s}=e,[o,a]=E.useState({}),l=kn(),c=Dt(l,"/chart/children/"),h=[...Object.entries(o)];return E.useEffect(()=>In(c,f=>{const p=f.val();f.exists()&&Object.entries(p).forEach(([y,v])=>{v.id=y,a(C=>[C,v])})}),[]),console.log(h),u.createElement("ul",null,h.map(f=>{var p;return u.createElement(E.Fragment,{key:f},u.createElement("li",null,u.createElement("div",{className:"card"},u.createElement("div",{className:"card-body"},u.createElement("h2",{className:"text-slate-400 text-xs  "},n),u.createElement("h2",{className:"font-bold text-sm "},r),u.createElement("h2",{className:"text-slate-400 text-xs "},i)),((p=h.children)==null?void 0:p.length)&&u.createElement(kx,{data:h.children}))))}))},n3=()=>{const[t,e]=E.useState({}),n=kn(),r=Dt(n,"/chart"),[i,s]=E.useState(window.innerWidth),[o,a]=E.useState(100),[l,c]=E.useState(5),d=i<1080;E.useEffect(()=>{In(r,p=>{e(p.val())})},[]),E.useEffect(()=>{const p=()=>s(window.innerWidth);return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[o]);const h=()=>{document.getElementById("container").setAttribute("style",`zoom: ${o}%;`),document.getElementById("scrollLeft").setAttribute("style",`left: ${l};`),a(o+10),c(l-1*l),o>=10&&document.getElementById("container").setAttribute("style",`position: initial; zoom: ${o}%;`),o>=100&&document.getElementById("container").setAttribute("style",`position: relative; zoom: ${o}%;`)},f=()=>{document.getElementById("container").setAttribute("style",`zoom: ${o}%;`),document.getElementById("scrollLeft").setAttribute("style",`left: ${l};`),a(o-10),c(l+5),console.log(o),o<100&&document.getElementById("container").setAttribute("style",`position: initial; zoom: ${o}%;`)};return u.createElement(De,{content:u.createElement("div",{className:"relative"},u.createElement("div",{id:"container",className:"org-tree zoom snap-mandatory snap-x "},u.createElement("div",{id:"scrollLeft",className:"child "},u.createElement(kx,{chartData:t}))),u.createElement("div",{className:"pb-32 buttons-float "},u.createElement("button",{onClick:h,className:d?"text-red-500 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2":"text-blue-800 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"},"+"),u.createElement("button",{onClick:f,className:d?"text-red-500 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2":"text-blue-800 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"},"-")))})};/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */function Bl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Bl=function(e){return typeof e}:Bl=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bl(t)}function Ku(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Gu(t,e,n){return e&&j_(t.prototype,e),n&&j_(t,n),t}function r3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$f(t,e)}function xs(t){return xs=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xs(t)}function $f(t,e){return $f=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$f(t,e)}function i3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function s3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o3(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s3(t)}function a3(t){var e=i3();return function(){var r=xs(t),i;if(e){var s=xs(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return o3(this,i)}}function l3(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=xs(t),t!==null););return t}function $l(){return typeof Reflect<"u"&&Reflect.get?$l=Reflect.get:$l=function(e,n,r){var i=l3(e,n);if(i){var s=Object.getOwnPropertyDescriptor(i,n);return s.get?s.get.call(arguments.length<3?e:r):s.value}},$l.apply(this,arguments)}var c3={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function Cn(t){console.error("[Glide warn]: ".concat(t))}function Ge(t){return parseInt(t)}function u3(t){return parseFloat(t)}function zf(t){return typeof t=="string"}function Ts(t){var e=Bl(t);return e==="function"||e==="object"&&!!t}function Kc(t){return typeof t=="function"}function bx(t){return typeof t>"u"}function Hf(t){return t.constructor===Array}function d3(t,e,n){var r={};for(var i in e)Kc(e[i])?r[i]=e[i](t,r,n):Cn("Extension must be a function");for(var s in r)Kc(r[s].mount)&&r[s].mount();return r}function he(t,e,n){Object.defineProperty(t,e,n)}function h3(t){return Object.keys(t).sort().reduce(function(e,n){return e[n]=t[n],e[n],e},{})}function Wf(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var f3=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ku(this,t),this.events=e,this.hop=e.hasOwnProperty}return Gu(t,[{key:"on",value:function(n,r){if(Hf(n)){for(var i=0;i<n.length;i++)this.on(n[i],r);return}this.hop.call(this.events,n)||(this.events[n]=[]);var s=this.events[n].push(r)-1;return{remove:function(){delete this.events[n][s]}}}},{key:"emit",value:function(n,r){if(Hf(n)){for(var i=0;i<n.length;i++)this.emit(n[i],r);return}this.hop.call(this.events,n)&&this.events[n].forEach(function(s){s(r||{})})}}]),t}(),p3=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ku(this,t),this._c={},this._t=[],this._e=new f3,this.disabled=!1,this.selector=e,this.settings=Wf(c3,n),this.index=this.settings.startAt}return Gu(t,[{key:"mount",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this._e.emit("mount.before"),Ts(n)?this._c=d3(this,n,this._e):Cn("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Hf(n)?this._t=n:Cn("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.settings=Wf(this.settings,n),n.hasOwnProperty("startAt")&&(this.index=n.startAt),this._e.emit("update"),this}},{key:"go",value:function(n){return this._c.Run.make(n),this}},{key:"move",value:function(n){return this._c.Transition.disable(),this._c.Move.make(n),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return n&&(this.settings.autoplay=n),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(n,r){return this._e.on(n,r),this}},{key:"isType",value:function(n){return this.settings.type===n}},{key:"settings",get:function(){return this._o},set:function(n){Ts(n)?this._o=n:Cn("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(n){this._i=Ge(n)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(n){this._d=!!n}}]),t}();function m3(t,e,n){var r={mount:function(){this._o=!1},make:function(c){var d=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=c,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after(function(){d.isStart()&&n.emit("run.start",d.move),d.isEnd()&&n.emit("run.end",d.move),d.isOffset()&&(d._o=!1,n.emit("run.offset",d.move)),n.emit("run.after",d.move),t.enable()}))},calculate:function(){var c=this.move,d=this.length,h=c.steps,f=c.direction,p=1;if(f==="="){if(t.settings.bound&&Ge(h)>d){t.index=d;return}t.index=h;return}if(f===">"&&h===">"){t.index=d;return}if(f==="<"&&h==="<"){t.index=0;return}if(f==="|"&&(p=t.settings.perView||1),f===">"||f==="|"&&h===">"){var y=i(p);y>d&&(this._o=!0),t.index=s(y,p);return}if(f==="<"||f==="|"&&h==="<"){var v=o(p);v<0&&(this._o=!0),t.index=a(v,p);return}Cn("Invalid direction pattern [".concat(f).concat(h,"] has been used"))},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return c?this._o?c==="|>"?this.move.direction==="|"&&this.move.steps===">":c==="|<"?this.move.direction==="|"&&this.move.steps==="<":this.move.direction===c:!1:this._o},isBound:function(){return t.isType("slider")&&t.settings.focusAt!=="center"&&t.settings.bound}};function i(l){var c=t.index;return t.isType("carousel")?c+l:c+(l-c%l)}function s(l,c){var d=r.length;return l<=d?l:t.isType("carousel")?l-(d+1):t.settings.rewind?r.isBound()&&!r.isEnd()?d:0:r.isBound()?d:Math.floor(d/c)*c}function o(l){var c=t.index;if(t.isType("carousel"))return c-l;var d=Math.ceil(c/l);return(d-1)*l}function a(l,c){var d=r.length;return l>=0?l:t.isType("carousel")?l+(d+1):t.settings.rewind?r.isBound()&&r.isStart()?d:Math.floor(d/c)*c:0}return he(r,"move",{get:function(){return this._m},set:function(c){var d=c.substr(1);this._m={direction:c.substr(0,1),steps:d?Ge(d)?Ge(d):d:0}}}),he(r,"length",{get:function(){var c=t.settings,d=e.Html.slides.length;return this.isBound()?d-1-(Ge(c.perView)-1)+Ge(c.focusAt):d-1}}),he(r,"offset",{get:function(){return this._o}}),r}function B_(){return new Date().getTime()}function Yu(t,e,n){var r,i,s,o,a=0;n||(n={});var l=function(){a=n.leading===!1?0:B_(),r=null,o=t.apply(i,s),r||(i=s=null)},c=function(){var h=B_();!a&&n.leading===!1&&(a=h);var f=e-(h-a);return i=this,s=arguments,f<=0||f>e?(r&&(clearTimeout(r),r=null),a=h,o=t.apply(i,s),r||(i=s=null)):!r&&n.trailing!==!1&&(r=setTimeout(l,f)),o};return c.cancel=function(){clearTimeout(r),a=0,r=i=s=null},c}var wl={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function g3(t,e,n){var r={apply:function(s){for(var o=0,a=s.length;o<a;o++){var l=s[o].style,c=e.Direction.value;o!==0?l[wl[c][0]]="".concat(this.value/2,"px"):l[wl[c][0]]="",o!==s.length-1?l[wl[c][1]]="".concat(this.value/2,"px"):l[wl[c][1]]=""}},remove:function(s){for(var o=0,a=s.length;o<a;o++){var l=s[o].style;l.marginLeft="",l.marginRight=""}}};return he(r,"value",{get:function(){return Ge(t.settings.gap)}}),he(r,"grow",{get:function(){return r.value*e.Sizes.length}}),he(r,"reductor",{get:function(){var s=t.settings.perView;return r.value*(s-1)/s}}),n.on(["build.after","update"],Yu(function(){r.apply(e.Html.wrapper.children)},30)),n.on("destroy",function(){r.remove(e.Html.wrapper.children)}),r}function Nx(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}return[]}function $_(t){return!!(t&&t instanceof window.HTMLElement)}function Vf(t){return Array.prototype.slice.call(t)}var z_='[data-glide-el="track"]';function y3(t,e,n){var r={mount:function(){this.root=t.selector,this.track=this.root.querySelector(z_),this.collectSlides()},collectSlides:function(){this.slides=Vf(this.wrapper.children).filter(function(s){return!s.classList.contains(t.settings.classes.slide.clone)})}};return he(r,"root",{get:function(){return r._r},set:function(s){zf(s)&&(s=document.querySelector(s)),$_(s)?r._r=s:Cn("Root element must be a existing Html node")}}),he(r,"track",{get:function(){return r._t},set:function(s){$_(s)?r._t=s:Cn("Could not find track element. Please use ".concat(z_," attribute."))}}),he(r,"wrapper",{get:function(){return r.track.children[0]}}),n.on("update",function(){r.collectSlides()}),r}function v3(t,e,n){var r={mount:function(){this.value=t.settings.peek}};return he(r,"value",{get:function(){return r._v},set:function(s){Ts(s)?(s.before=Ge(s.before),s.after=Ge(s.after)):s=Ge(s),r._v=s}}),he(r,"reductor",{get:function(){var s=r.value,o=t.settings.perView;return Ts(s)?s.before/o+s.after/o:s*2/o}}),n.on(["resize","update"],function(){r.mount()}),r}function _3(t,e,n){var r={mount:function(){this._o=0},make:function(){var s=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.offset=o,n.emit("move",{movement:this.value}),e.Transition.after(function(){n.emit("move.after",{movement:s.value})})}};return he(r,"offset",{get:function(){return r._o},set:function(s){r._o=bx(s)?0:Ge(s)}}),he(r,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),he(r,"value",{get:function(){var s=this.offset,o=this.translate;return e.Direction.is("rtl")?o+s:o-s}}),n.on(["build.before","run"],function(){r.make()}),r}function w3(t,e,n){var r={setupSlides:function(){for(var s="".concat(this.slideWidth,"px"),o=e.Html.slides,a=0;a<o.length;a++)o[a].style.width=s},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var s=e.Html.slides,o=0;o<s.length;o++)s[o].style.width="";e.Html.wrapper.style.width=""}};return he(r,"length",{get:function(){return e.Html.slides.length}}),he(r,"width",{get:function(){return e.Html.track.offsetWidth}}),he(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+e.Gaps.grow+e.Clones.grow}}),he(r,"slideWidth",{get:function(){return r.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){r.setupSlides(),r.setupWrapper()}),n.on("destroy",function(){r.remove()}),r}function E3(t,e,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var s=t.settings.classes,o=e.Html.slides[t.index];o&&(o.classList.add(s.slide.active),Nx(o).forEach(function(a){a.classList.remove(s.slide.active)}))},removeClasses:function(){var s=t.settings.classes,o=s.type,a=s.slide;e.Html.root.classList.remove(o[t.settings.type]),e.Html.slides.forEach(function(l){l.classList.remove(a.active)})}};return n.on(["destroy","update"],function(){r.removeClasses()}),n.on(["resize","update"],function(){r.mount()}),n.on("move.after",function(){r.activeClass()}),r}function C3(t,e,n){var r={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=e.Html.slides,a=t.settings,l=a.perView,c=a.classes,d=a.cloningRatio;if(o.length!==0)for(var h=+!!t.settings.peek,f=l+h+Math.round(l/2),p=o.slice(0,f).reverse(),y=o.slice(f*-1),v=0;v<Math.max(d,Math.floor(l/o.length));v++){for(var C=0;C<p.length;C++){var g=p[C].cloneNode(!0);g.classList.add(c.slide.clone),s.push(g)}for(var m=0;m<y.length;m++){var _=y[m].cloneNode(!0);_.classList.add(c.slide.clone),s.unshift(_)}}return s},append:function(){for(var s=this.items,o=e.Html,a=o.wrapper,l=o.slides,c=Math.floor(s.length/2),d=s.slice(0,c).reverse(),h=s.slice(c*-1).reverse(),f="".concat(e.Sizes.slideWidth,"px"),p=0;p<h.length;p++)a.appendChild(h[p]);for(var y=0;y<d.length;y++)a.insertBefore(d[y],l[0]);for(var v=0;v<s.length;v++)s[v].style.width=f},remove:function(){for(var s=this.items,o=0;o<s.length;o++)e.Html.wrapper.removeChild(s[o])}};return he(r,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*r.items.length}}),n.on("update",function(){r.remove(),r.mount(),r.append()}),n.on("build.before",function(){t.isType("carousel")&&r.append()}),n.on("destroy",function(){r.remove()}),r}var Ur=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ku(this,t),this.listeners=e}return Gu(t,[{key:"on",value:function(n,r,i){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;zf(n)&&(n=[n]);for(var o=0;o<n.length;o++)this.listeners[n[o]]=i,r.addEventListener(n[o],this.listeners[n[o]],s)}},{key:"off",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;zf(n)&&(n=[n]);for(var s=0;s<n.length;s++)r.removeEventListener(n[s],this.listeners[n[s]],i)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();function S3(t,e,n){var r=new Ur,i={mount:function(){this.bind()},bind:function(){r.on("resize",window,Yu(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",function(){i.unbind(),r.destroy()}),i}var x3=["ltr","rtl"],T3={">":"<","<":">","=":"="};function I3(t,e,n){var r={mount:function(){this.value=t.settings.direction},resolve:function(s){var o=s.slice(0,1);return this.is("rtl")?s.split(o).join(T3[o]):s},is:function(s){return this.value===s},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return he(r,"value",{get:function(){return r._v},set:function(s){x3.indexOf(s)>-1?r._v=s:Cn("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],function(){r.removeClass()}),n.on("update",function(){r.mount()}),n.on(["build.before","update"],function(){r.addClass()}),r}function k3(t,e){return{modify:function(r){return e.Direction.is("rtl")?-r:r}}}function b3(t,e){return{modify:function(r){var i=Math.floor(r/e.Sizes.slideWidth);return r+e.Gaps.value*i}}}function N3(t,e){return{modify:function(r){return r+e.Clones.grow/2}}}function R3(t,e){return{modify:function(r){if(t.settings.focusAt>=0){var i=e.Peek.value;return Ts(i)?r-i.before:r-i}return r}}}function A3(t,e){return{modify:function(r){var i=e.Gaps.value,s=e.Sizes.width,o=t.settings.focusAt,a=e.Sizes.slideWidth;return o==="center"?r-(s/2-a/2):r-a*o-i*o}}}function P3(t,e,n){var r=[b3,N3,R3,A3].concat(t._t,[k3]);return{mutate:function(s){for(var o=0;o<r.length;o++){var a=r[o];Kc(a)&&Kc(a().modify)?s=a(t,e,n).modify(s):Cn("Transformer should be a function that returns an object with `modify()` method")}return s}}}function O3(t,e,n){var r={set:function(s){var o=P3(t,e).mutate(s),a="translate3d(".concat(-1*o,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=a,e.Html.wrapper.style.webkitTransform=a,e.Html.wrapper.style.transform=a},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var s=e.Sizes.length,o=t.index,a=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?s+(o-a):(o+a)%s},getTravelDistance:function(){var s=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?s*-1:s}};return n.on("move",function(i){if(!t.isType("carousel")||!e.Run.isOffset())return r.set(i.movement);e.Transition.after(function(){n.emit("translate.jump"),r.set(e.Sizes.slideWidth*t.index)});var s=e.Sizes.slideWidth*e.Translate.getStartIndex();return r.set(s-e.Translate.getTravelDistance())}),n.on("destroy",function(){r.remove()}),r}function L3(t,e,n){var r=!1,i={compose:function(o){var a=t.settings;return r?"".concat(o," 0ms ").concat(a.animationTimingFunc):"".concat(o," ").concat(this.duration,"ms ").concat(a.animationTimingFunc)},set:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(o)},remove:function(){e.Html.wrapper.style.transition=""},after:function(o){setTimeout(function(){o()},this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return he(i,"duration",{get:function(){var o=t.settings;return t.isType("slider")&&e.Run.offset?o.rewindDuration:o.animationDuration}}),n.on("move",function(){i.set()}),n.on(["build.before","resize","translate.jump"],function(){i.disable()}),n.on("run",function(){i.enable()}),n.on("destroy",function(){i.remove()}),i}var Rx=!1;try{var H_=Object.defineProperty({},"passive",{get:function(){Rx=!0}});window.addEventListener("testPassive",null,H_),window.removeEventListener("testPassive",null,H_)}catch{}var qf=Rx,El=["touchstart","mousedown"],W_=["touchmove","mousemove"],V_=["touchend","touchcancel","mouseup","mouseleave"],q_=["mousedown","mousemove","mouseup","mouseleave"];function D3(t,e,n){var r=new Ur,i=0,s=0,o=0,a=!1,l=qf?{passive:!0}:!1,c={mount:function(){this.bindSwipeStart()},start:function(h){if(!a&&!t.disabled){this.disable();var f=this.touches(h);i=null,s=Ge(f.pageX),o=Ge(f.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(h){if(!t.disabled){var f=t.settings,p=f.touchAngle,y=f.touchRatio,v=f.classes,C=this.touches(h),g=Ge(C.pageX)-s,m=Ge(C.pageY)-o,_=Math.abs(g<<2),S=Math.abs(m<<2),T=Math.sqrt(_+S),b=Math.sqrt(S);if(i=Math.asin(b/T),i*180/Math.PI<p)h.stopPropagation(),e.Move.make(g*u3(y)),e.Html.root.classList.add(v.dragging),n.emit("swipe.move");else return!1}},end:function(h){if(!t.disabled){var f=t.settings,p=f.perSwipe,y=f.touchAngle,v=f.classes,C=this.touches(h),g=this.threshold(h),m=C.pageX-s,_=i*180/Math.PI;this.enable(),m>g&&_<y?e.Run.make(e.Direction.resolve("".concat(p,"<"))):m<-g&&_<y?e.Run.make(e.Direction.resolve("".concat(p,">"))):e.Move.make(),e.Html.root.classList.remove(v.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var h=this,f=t.settings,p=f.swipeThreshold,y=f.dragThreshold;p&&r.on(El[0],e.Html.wrapper,function(v){h.start(v)},l),y&&r.on(El[1],e.Html.wrapper,function(v){h.start(v)},l)},unbindSwipeStart:function(){r.off(El[0],e.Html.wrapper,l),r.off(El[1],e.Html.wrapper,l)},bindSwipeMove:function(){var h=this;r.on(W_,e.Html.wrapper,Yu(function(f){h.move(f)},t.settings.throttle),l)},unbindSwipeMove:function(){r.off(W_,e.Html.wrapper,l)},bindSwipeEnd:function(){var h=this;r.on(V_,e.Html.wrapper,function(f){h.end(f)})},unbindSwipeEnd:function(){r.off(V_,e.Html.wrapper)},touches:function(h){return q_.indexOf(h.type)>-1?h:h.touches[0]||h.changedTouches[0]},threshold:function(h){var f=t.settings;return q_.indexOf(h.type)>-1?f.dragThreshold:f.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",function(){e.Html.root.classList.add(t.settings.classes.swipeable)}),n.on("destroy",function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),r.destroy()}),c}function M3(t,e,n){var r=new Ur,i={mount:function(){this.bind()},bind:function(){r.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",e.Html.wrapper)},dragstart:function(o){o.preventDefault()}};return n.on("destroy",function(){i.unbind(),r.destroy()}),i}function F3(t,e,n){var r=new Ur,i=!1,s=!1,o={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",e.Html.wrapper,this.click)},unbind:function(){r.off("click",e.Html.wrapper)},click:function(l){s&&(l.stopPropagation(),l.preventDefault())},detach:function(){if(s=!0,!i){for(var l=0;l<this.items.length;l++)this.items[l].draggable=!1;i=!0}return this},attach:function(){if(s=!1,i){for(var l=0;l<this.items.length;l++)this.items[l].draggable=!0;i=!1}return this}};return he(o,"items",{get:function(){return o._a}}),n.on("swipe.move",function(){o.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){o.attach()})}),n.on("destroy",function(){o.attach(),o.unbind(),r.destroy()}),o}var U3='[data-glide-el="controls[nav]"]',kg='[data-glide-el^="controls"]',j3="".concat(kg,' [data-glide-dir*="<"]'),B3="".concat(kg,' [data-glide-dir*=">"]');function $3(t,e,n){var r=new Ur,i=qf?{passive:!0}:!1,s={mount:function(){this._n=e.Html.root.querySelectorAll(U3),this._c=e.Html.root.querySelectorAll(kg),this._arrowControls={previous:e.Html.root.querySelectorAll(j3),next:e.Html.root.querySelectorAll(B3)},this.addBindings()},setActive:function(){for(var a=0;a<this._n.length;a++)this.addClass(this._n[a].children)},removeActive:function(){for(var a=0;a<this._n.length;a++)this.removeClass(this._n[a].children)},addClass:function(a){var l=t.settings,c=a[t.index];c&&c&&(c.classList.add(l.classes.nav.active),Nx(c).forEach(function(d){d.classList.remove(l.classes.nav.active)}))},removeClass:function(a){var l=a[t.index];l&&l.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var a=s._arrowControls.next,l=s._arrowControls.previous;this.resetArrowState(a,l),t.index===0&&this.disableArrow(l),t.index===e.Run.length&&this.disableArrow(a)}},resetArrowState:function(){for(var a=t.settings,l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];c.forEach(function(h){Vf(h).forEach(function(f){f.classList.remove(a.classes.arrow.disabled)})})},disableArrow:function(){for(var a=t.settings,l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];c.forEach(function(h){Vf(h).forEach(function(f){f.classList.add(a.classes.arrow.disabled)})})},addBindings:function(){for(var a=0;a<this._c.length;a++)this.bind(this._c[a].children)},removeBindings:function(){for(var a=0;a<this._c.length;a++)this.unbind(this._c[a].children)},bind:function(a){for(var l=0;l<a.length;l++)r.on("click",a[l],this.click),r.on("touchstart",a[l],this.click,i)},unbind:function(a){for(var l=0;l<a.length;l++)r.off(["click","touchstart"],a[l])},click:function(a){!qf&&a.type==="touchstart"&&a.preventDefault();var l=a.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(l))}};return he(s,"items",{get:function(){return s._c}}),n.on(["mount.after","move.after"],function(){s.setActive()}),n.on(["mount.after","run"],function(){s.setArrowState()}),n.on("destroy",function(){s.removeBindings(),s.removeActive(),r.destroy()}),s}function z3(t,e,n){var r=new Ur,i={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(o){var a=t.settings.perSwipe;o.code==="ArrowRight"&&e.Run.make(e.Direction.resolve("".concat(a,">"))),o.code==="ArrowLeft"&&e.Run.make(e.Direction.resolve("".concat(a,"<")))}};return n.on(["destroy","update"],function(){i.unbind()}),n.on("update",function(){i.mount()}),n.on("destroy",function(){r.destroy()}),i}function H3(t,e,n){var r=new Ur,i={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var o=this;this._e&&(this.enable(),t.settings.autoplay&&bx(this._i)&&(this._i=setInterval(function(){o.stop(),e.Run.make(">"),o.start(),n.emit("autoplay")},this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var o=this;r.on("mouseover",e.Html.root,function(){o._e&&o.stop()}),r.on("mouseout",e.Html.root,function(){o._e&&o.start()})},unbind:function(){r.off(["mouseover","mouseout"],e.Html.root)}};return he(i,"time",{get:function(){var o=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return Ge(o||t.settings.autoplay)}}),n.on(["destroy","update"],function(){i.unbind()}),n.on(["run.before","swipe.start","update"],function(){i.stop()}),n.on(["pause","destroy"],function(){i.disable(),i.stop()}),n.on(["run.after","swipe.end"],function(){i.start()}),n.on(["play"],function(){i.enable(),i.start()}),n.on("update",function(){i.mount()}),n.on("destroy",function(){r.destroy()}),i}function K_(t){return Ts(t)?h3(t):(Cn("Breakpoints option must be an object"),{})}function W3(t,e,n){var r=new Ur,i=t.settings,s=K_(i.breakpoints),o=Object.assign({},i),a={match:function(c){if(typeof window.matchMedia<"u"){for(var d in c)if(c.hasOwnProperty(d)&&window.matchMedia("(max-width: ".concat(d,"px)")).matches)return c[d]}return o}};return Object.assign(i,a.match(s)),r.on("resize",window,Yu(function(){t.settings=Wf(i,a.match(s))},t.settings.throttle)),n.on("update",function(){s=K_(s),o=Object.assign({},i)}),n.on("destroy",function(){r.off("resize",window)}),a}var V3={Html:y3,Translate:O3,Transition:L3,Direction:I3,Peek:v3,Sizes:w3,Gaps:g3,Move:_3,Clones:C3,Resize:S3,Build:E3,Run:m3,Swipe:D3,Images:M3,Anchors:F3,Controls:$3,Keyboard:z3,Autoplay:H3,Breakpoints:W3},q3=function(t){r3(n,t);var e=a3(n);function n(){return Ku(this,n),e.apply(this,arguments)}return Gu(n,[{key:"mount",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $l(xs(n.prototype),"mount",this).call(this,Object.assign({},V3,i))}}]),n}(p3);window.addEventListener("load",()=>{new q3(".glide",{type:"carousel",startAt:0,perView:4,focusAt:"center",autoplay:"2000",breakpoints:{800:{perView:2},480:{perView:1}}}).mount()});function K3(){return u.createElement(u.Fragment,null,u.createElement(De,{content:u.createElement("div",{className:"glide relative text-gray-200 py-4 md:px-28 lg:px-56"},u.createElement("h1",{className:"py-4 text-6xl font-semibold text-border-style text-center px-2 md:text-8xl "},"Our Services"),u.createElement("div",{className:"glide__track","data-glide-el":"track"},u.createElement("ul",{className:"glide__slides"},u.createElement("li",{className:"glide__slide"},u.createElement("div",{className:"customer-img text-center"},u.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4QEA8QDhIQDw8QEBgQDhARFxESEREQFxgXGRkSFhsaISwiGSIpHBYYI0AkKC8tMDAwGCE2O0IyOi4vMC0BCwsLDw4PGBERGy8nHycvLy8vMC8tLy8vLy0vLy8vLy8vLy8vLzEvLy8vLy8vLy0wLy8vLy8vLy8vLy8vLy8vL//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEBAAEFAQAAAAAAAAAAAAAAAQgCBAUGBwP/xABGEAACAgECAwUEBQcKBQUAAAABAgADBAUREiExBgcTQVEiMmFxFHKBkaEIFTVCUnSxIzM0YnOSorKzwxdUgtHhJUOjwdL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAuEQACAgEDAwIFAgcAAAAAAAAAAQIRAxIhMQRBUROBBSIycfBhkRUjUqGxweH/2gAMAwEAAhEDEQA/APFYiJ2IoiIlAliJSiIiAUSzTNQlsCBETQNUSSwAIiJQIiJQWSWSAWIiUFiSWUCWSWUCIiUFEs0zUJQJJZIBRLNM1SgRECUCWSJQbSIicBBERKBERALECJSiBEQDVECJoCappllBYiIAiSWUCWIlBJZJZQJZIlBYiSUGqJJYAlEkTQNUQIgEiIlBqiIgCIiUGzlklnAQREkqBYiJQJZIlKWIiAJqmmUSoFiImgD0MyMr7ldGIB3y+YB/nV//ADMcz0PymalPur9UfwnPnk1VMyYd6/iJTl5dNe/h05NtScR3bgR2UbnzOwmxnK9rv0jqP77f/qvOJnQuCosskSlLKqE9AT8gZpmS3caP/RqP7W7/AFGmMk9CuiMxqII6gj58onq35RP9PxP3T/ceeUzcJaoplTAlklmwJZJRKBERKBNU0yiUFklkgCappllBYiJQbKWSWcBCxESgRESgSyRALN5fpmRXTVfZTYlFxK1XMrCuwjqFY8j/AOD6Gdm7Ld3efqWJfl4xq4amKV1MdnudQCVXyXkepPM/fPTO7Ptfj59H5m1Wutb6l+jrVYoVbkrG3AVPu2Lw9OXTccwdsSnXHuGeAxPU+8PukvxOLI04WZOLvu9I3a6kfDbnYvx6jz35mcv3ddz5PBlaupA96vC8z6G7b/IPt81leSNWLPJn0jKGOuU1NoxXfgW4qwrLegP4b9NwR5TYT2vvQ7X/AE1hoek1rfxstdxrClSUIIqr8lClQS3QcPwM877b9isvSXpXJaqwXoWreosRxLw8aHcA8iw5+YI+IFhO+RZ1g9D8pmpT7q/VH8JhWeh+UzUp91fqj+E8+o7EMUtW0TLzNU1CvDotvcZ1+/ApIXe19i7dF6dSROXq7n9dK8RpqU7e411XF8uRI/GZAajqen6bWXvspxK3dn25KbLGJZmCjm7Ekk7AmcFi962hWOEGVwEnYNZXdWn2sy7D7do9WdfKgY9a/wBldRwNvpuPbUpOws5PUT6cakrv8N95wszMdKcioqwruptTmDwvXZWw+5gRMce9nsKNMvW3HB+hZBPhg7k029TUT5jbmD12BHlufTHm1OnyVM63o3ZTUcys24eNbfUrmsunDsHABK8z6MPvmRHdHpWRiaXTTlVtTatljMjbbgM5IPL4TpHct2t03C0+6rMyK6LGy3sVH4tyhrqAbkPVT909c0fV8bMqF2LYt1RYqHXfYsOo5zyzTk3TW1kPJe+7svqOZmY1mHj2XomNwMycOwbjc7cz6ETzr/h5rn/I3/cn/eZJ632r07Cda8zIrosdeNFfi3K7kb8h6gzjv+JGh/8APUf4/wDtEMs1FJL/ACDFvKx3qssqtUpZU5rsQ9VdTsyn5EGfOcn2pyUuz8+2tg9dmXdZW46MjWMVYfMET0Dui7uFzds7OXfFVtsek8vHZTsXf+oCNtv1iDvyGzdcpqMbZo6JonZfUM7nh411y9PEUcNW/pxtsu/w3nYh3R67tv8AR6wf2fGp3/zbTI6+2jFqLO1WPRWvVitdVajoPIATqtneroKtwHLBIOxZashk/vBNj8xOf15y+lf7M2Y/a12Q1PCHFl4t1aDrZsLKh83QlR9pnBzMDR9cws1S2JfVkKPeFbKxXfyZeo+2Yp9q1C5+eqgKozLwoHIAC19gB5T2w5XNtNFTOLiInQU1RIJYBIiJQaokEsA2URE4SFlmmWAWBESgRESg7t3YduH0rK/lCzYdxC5KDnwHyuUeo8wOo389tvWu8fu+q1JF1DTmWvOCrbXYjBUyVABQ8Q6Pttwv8geWxXG+ZP8Ac3p2bRpdS5rHZ2NmNUw9umhttlY/E7tt5BtvgPHItL1Ihse7DvCOWTp+pb06lRuntjgN/D15eTjbmvn1HmBxveL22yMm78z6JxWZFhNeTdWfc/arRug2/Wf9Xp132653tW4+palTj6TSb8+viXIup2Acrtsm/QlNju+426b+nLdxWfg47X4N1Zx9UNjBzbya5F/9pd/dK7ElPPrz57Z0pLVXsDtXZXsvgdncK7JyHU2iviyskjy8qageg4tgB1Y7b+QHgnbLtPfqeXZk3cl92iryqqB9lB8fMnzJPwE9f/KA07NtxabaWLYdDE5VSjmHPJLW/aUcx8OLfnvy8BE9MSv5nyVFboflM1KfdX6o/hMK26H5TNWn3V+qP4SZ+xGYldu8667U85rnexkyrakLHfhrSxlVF9AAOgnAzle136R1H99yP9V5xU6I8IqPWe4btY9eR+bbWLU3hnxgdz4dygsyr6BlDHb1HqTv6n3m6SuXpWbWRuyVHIr9RZUOMbfPhI/6jMdu7ct+d9O4Ov0pN/q/rfhvMp9X2+j379PBff5cJnNl+WaaIYaTJTuI/Q9f9vb/AJpjYOn2TJPuI/Q9f9vb/mnr1H0+5WdC/KJ/p+J+5/7jzymerflE/wBPxP3P/ceeVTeH6EEbnTcNr76aEOz33JShPkzsFB+8zMLTsOuimqiocNdNa1ovoijYfwmLHduAdW07fp9KQ/aNyPx2mUurFhReU98UuV+twnb8Z49S90iGNPed2ys1LLsCufodDlMase623I3n1Lc9vQED136bIvQfKWdcYqKpFR98LMupsW2ix6rEO6OhKuPkRJlZD22WW2nistdrLGOwLOxJZuXLmSZ8YmiliIlAmqaZRKCySxAJNU0xKDaRETgIJZIlBqiSWAIiJoHp3cx2GGdd9NyV3xMawBEPS68bEKR+yu4J9SQOfOdr7we3t+Xf+aND3sttY1X31n+8lbeQA34n8ue3rPHNM7R52LVfj419lVOQNrq0I2by3HmpI5ErsSORntfYj8z6FpdeoWWpbdlVhjYmzWWHYH6NUu+44TyO+3MbttyA8Jre37EOzdhex2JomKzWNX4zLxZeU5CqAP1QW91B+PU/Dje83u/GoAZuCRVqNID1uh4PpAXmqlh0cbDhf5A8tiPGu3feBmaq5Dk04inerGQ+zy6PYf12/AeQ678p3ed6GTpvDRkcWTg9BXuDZQPWsnqP6h5em3m9OX1dwei92/eCucG03VVCZqhqWFoCrkgbqyMp6P1BXz57eYHlfeh2LOlZW1e5w793xWPMrttxVN57ruOfmCPPed2728PScvEr1rCyK0yeJFUoeFsg7gcJX3lsQc9+oC7HyI8r17tFm57Vvm3te1acFfFwgKvnsFAG52G56nYbzWNb2uAcUeh+UzWp91fqj+EwoPQ/KZrU+4v1R/CTP2DMQu136R1H99v/ANV5xMyg1nus0XKssuel67bXL2PVZYvE7HctsSV5k+Qm0we57RK2DNXddsdwttjFN/iF23+Rm1njRbOgdxPZWy3K/ONilaMcMtDHpbcwKkr6hVLc/Uj0O3qnelrC4mlZjk7PbWceoeZstBXl8gWb/pM5vKycTCx+OxqsXGpUAe7XWijkFUD7gB9kxx70O3LarkAVcSYdG4oQ8i7Hra49T0A8h8zPOKeSd9iHSBMku4dgdIQemRaD89wf/uY3T2TuA7T1V+Np1rBGts8fFLHYO5UK9Y+OyqQPP2p7Z03ArNp+UVSwzcJyPZbGZFPqy2Ekf41++eTTLjtV2WxNTqFWWhYK3FW6nhsRuhKn5eR3B5Tqmn9y2jVNxWfSckA78F1gC/8AxqpP3zGPNFRSZEY/6JqBxsnHyBuTRfXdsOp4GDFftA2+2Zh0XJaiWIQ9diB0YcwyMNwR8CDMfe/jApx8rCqx666alxDw11qEUfyjbnYefxnLdz3eNVUiadnuK1U7YmQ59hQT/M2E+6PQ9PLlsJcq1xU0Do3eJ2Rt0zMsrKn6Na5fEt2PC1ZO/h7/ALS77EfAHoZ1WZkajp2PlVGrIrrvqbmVcB1PoRv5/GdHy+5rRHO6pkUj9mu0lf8AGGMsOoVfMWzHCBModH7sNFxiGXGW1x0bIZrv8Lez+E8M72FC6znhQAA9YAHIAeDXyE9ceZTdJCzqMsks9iiIiVA1CJBLKCRLJKDaySyTgIIiJQWWaZYBZZIlAjaIlAiIlCNW0kRBROwaJ2z1TDAXFy7q0A2WskWVKPgjgqPsE6/ENA9Jxu+rWkADfRbT+1ZUwJ/uMojK76tadSF+i0k/rV1MWHxHGzD8J5xEenHwSjlNb7QZuc4fMyLb2Huhz7C/VUbKv2ATjZplm1sUsKxBBBIIO4I5EEeYiJQd70fvZ1rGQV+LXkqo2X6ShscD66lWb5sSZuM7vl1uxSqNj0E/rVVbt9niFh+E88iY9OHgUbrUtRvybDbk22X2N1e1i7beg36Dn0HITaxLPQHY+z/brVcBQmNk2CpelNnDbWB6KHB4R9XadnXvt1kDY14R+Jrt3/CzaeaSzLxxfKJR3jU+9jW7wQL1oUjYiitEP95t2H2ETpuTkWWu1lrvbY53eyxmd2PqSeZnxgTUYqPCKWIibBYiJQJRJEoNUREA2csROAhIiJQIiJQaoklgCWSek9nNK0+/Fxsy5KVrxara8xeHlZaOAKz+p4fa+biZlPSrOPrOsXSxUpRbTdbeatL3qjzaJ3ft1pONg0pSiJ412Tbdxge0mOCVSrf02I+1DOX7ZaTi04zmjGqDeCh41xryV3bm3jD2F5eR5/eJPVW23JzL4rjksTUXWRtLdcJpX73sjzGWbjBrR7aksbgrexVsfkOFCwBbn6DnO/dptGVK82unAx6qcWtWrym8ZbX5bsUYD+UI5jYnlyJ3mpZEmkdPU9dDBkhjkt5fZUrS78u3wt63e1HnMT0XsR2ax7MUvl1qxy3NVBcgNXWFYeLXv5lz5f1TOK7IYtaZ7YGXj03M1jVu1ikms1rYd0+DbD7NpPVXzV2PF/FMf87Sm3j3e63SdSa+1P8AGjqAlndtDpxsnV/CONQlKLZWaVXdGKFtrCD59Puk7S6Rh06bXZj8NrHPKG8I1bFeG3er2uewKj7ppZVai14/ubfxCMcsMUotOWn9UtWrlrbbT5t9rp10raJ6V2k0rFqw+KrGr4ziK5Zca9iCfes8ZfYTYbtsfT4ifTsjoeLdhYbPRi2PY9gua3iFzVq1m3hbcyw2HpyBmfXWnVRy/wAax+h62h1q01avhyv9l/08ziffUFQXXCri8MWsK+Lk3hhjwb7899tp37QNOwPoGHdlV4ai02rkW5DGuwoHsA8Ijq3IfZPWU9Kuju6vrY9NjjNxbt1S54b/AH2qvJ5yJZ3bsZp+LcdRPhrelRU45trsuIQtZseFPaJIA5DnPhg6Xj26oabUFdXDxLSK7McWEKNlCP7S8XM/HaXXu14POXxHHHJlxtP5I6n+uydVz33vg6hLO4a/p9Zw/HfFXAvXI8JK1DILa+Hffhb478/6voZvWwMBMXHN64tYswFtLcRXKa/hBBRR7w6/bNaiP4lCovS921tT+mrpp01vs0dBidi07TPF06566jbeuUFUqpawV8KEgbeXM/fPt2SwKnGX49QdquAANW9pRt7Aw4V5np0HpNo9pdZCMZy/pdNWvKV/bc6zJN/rShb7AqCtQRsgR6gBsOfC3Mb9efrNhB0wlqipeVZZIllRoSySygRESoFEs0zVKDaSQJZ88gklkmgIiIAmqaZZQWfdMq0I1YssFbnd0DMEY8uZXoeg+4T4RBGk+TcZWXbYQbbLLCBsDYzuQPQb+U+tuq5TqUbIyGQ8ijWWFSPQgnabIRLSM+nB1stuNuPt4E3b6jeyCtrrjUNtq2dzWAOmyk7TaRKVxTptccG4bLtPh72WHwv5rd2Ph9Pc5+z0HT0Ev027xPF8W3xevi8b+J0297ffpym3iKQ9OHhft55X2fc3FOVYj+IlliWc/bVmV+fXmOfOGyrSgRndkDcYUsxQMd/a26b8zz+M28S0a0q7r8X57djsWnJmZFNzvmGjFp4K7HyLcg1lrOLgqVKwzOSEY7BdgFO+02uqJlYlooa5v5Lhsqamx/D4bEDrbUeWwZHB32B9rnOw9nL8bT8Ou7PqbMx9Ss5Yw4QlaY1gByCTzawMzAVgqCpbiOzATZdstJtQJnXZNeT9Ntb6K9a8K3Y9aJtaAP5oLxLX4ZAKlCOgmU1ddjCxwWySr7I6w7sxLMSzMSWYkkknqSfOfRsmwotZdyiklFLEopPUgdB1M+Es9TdH3xsu2rfw7LKuL3vDZk326b7Hn1MlmRY7cbu7WcjxMzFtx05nnNHAZpIiiaVd1ufbIyrLSDZZZaQNgbGZyB6DeabbnfhDszBRwoGJPCvoN+gnziUqikqR96cy2sEV2WICdyEZlBPryMVZdyFillilzu5VmBY8+Z2PPqfvnwiUaV4PpZYzks7MzHqzEkn7TNEkspRLJEoLESSg1RJLAERE0DayzTKJ88hYiJUCRLJKBERKDVEksAREsoJERKBLJLKU5R+zueu/FjXjhYqxKMAGFXjEE/2Xt/V5yZ2g5tL013Y91dl52pR1KtYSQNlHnzZfvE5+zvH1BsM4RFHhHGXFLcDeJwBeDxOLi981+wTt7s2eudtMnMyMXKtqoW3FZXTwxdwuVKEBw1h5ewPd4epmE5eCGrQX1lEvx8Wm26qiwvkUPj15SU2ruCSlqMEf2T02J4fhNWWdczQarVyshbGpvCFOJQXR/BaoAbIGQNsE2BC/Dl98ft/kV2W2Jj4al8kZoXbIKpm7WA5C72k7kWEcJJTkNgPPRg94GfUuAo8FxgOz1cavvaSHVRYQw4gi2OFA224j1ipeEQ4JtGyxbZSabRdShstq4Tx11gBi7DyGzA7/ABn3y9By8Z61y6bcc2bmsWqU4gNtyN+vUffPue093j5mQtdKvmY1mNag8VkWuxFRmXictxezvuSRuT8ptdR1izIalrAimjHqxU4Aw3rpXhUtuT7Ww5+Xym05WDvF3Z3TKSarnyTcgXi4Fr4LCwB3QnoBv577/CdQ7VaUuLkW0K3EK22DbbEjqNx5HnzHkZzOD21dKlV6qrbql4ce9wS9S+m3RtvLffadWz8trXZ3JZmJZmPMknqTEU+5o2sRJPQFlkiAWSIlBYiJQBLJLKBLNMolBYiJQbSWInAQSxEqAkiJQIiJQJYiAWIiUCIiUCWIgCIiUoiIgGqIibA3mqIgCIiAIiJQJYiUEliJQJYiUCIiUFiIlB//2Q==",alt:""}))),u.createElement("li",{className:"glide__slide"},u.createElement("div",{className:"customer-img text-center"},u.createElement("img",{src:"https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg",alt:""}))),u.createElement("li",{className:"glide__slide"},u.createElement("div",{className:"customer-img text-center"},u.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAACUCAMAAAB/VcapAAABGlBMVEX////eAHYxO47vh7/Cxd40RZfm5/EzQZTxj8NnbqzjKIvT1edrcq7Z2+qBgoIzQpX98vj++fyGjL2LkcDhFoI1SpsxOIvgDX3JzOGlqc3/AHL1stby8/j4yeL97vaTlJSur6/pUqKLjIympqbNzc309PS0uNaVmsXtcbObnJzAwMD0q9LueLb3xN85Q5LX19fj5OS4uLhFTpkgPY0HRZC3u9juAHTnQ5p1fLPsbLDymMj3AHL73e1DTJhdZaYyUaHQwNt3Y6VpRZRkNYx5L4mqN5DkSp3/c7K/r9GDH4H/I4W1EHvyI4fmAXUFSZNGM4tnKIeiFH+qpcxDXKDNjcGYGoPJB3sRV6Fpf7pCWKYRYaqzF4H51ejH083AINHgAAAIiklEQVR4nO2daXfiNhRAZcNAApiEbYDgxASzZ2FJCIFJnOm+kpl22qbTpv//b/Q9SQYbDHFOJ3gq637wgp1z5HueniQvCiESiUQikUgkEolEIpFIJGKgZ3BZ3s3RvbfZL7786utvvv2uEmihgkez4sMyIUlVVWH1/VBVLy4uLy9f/zD7cSfosgWJHgcjapOKKZEvLi5eMy4uX/908PNJ0MULjhZ6UYeENK0ysWwtVM3F17OD8VnQBQyKLBVzS7ct9bUTFYPmanIUcAm3ziiJyyQVk8XNHLhQVbrANWxdXr6fHRQjwZZz21xjTgHKIMHKaKlUM64uw4MmEapUY8cJyTSjdM8TDJqrN8XxYcCl3SItdahBo5S9hiXR1omBxvv+3exNUQlRqolBv04fqqxGpVR1qSYtdu/fXV0pSn4adIG3SRQv/Bq3RrTdjsepEFtKnG3cvz+YKYqSCEFfOGvF6JpWoTLd1LkTN1RS/P6XAwU5fgyy0NuAt0jQJp1jwJSt3VJm2Qk3g7Yu381m1IzS3g+24C+NFrW3YjHeyfvV2vM0Q+3YIROuVMOapGGKi9ljxPecYt6/UWzGIUg1JJqDgGkyMa2C7cQJM/Mqnr+am1GOb4Iu90sTU9VdugQ+7H9Z2Nt75WLuZq/w0yJkgFPBU41+q+LdKdpSj8hv969W4YFz+YtLjPCpRqcDSRLN5rD/Oyx4mGFy7n8/UNyE5oZERiexAjNTKBSWFHmICUOqQUa35y3yFoQUXNhmFu21E7FvSGitGE/ATfLWKhS8zBTu3MnXJiHyqNvC2w8jPmhKLYthbgqFP668xCiKwLdqSph4dRQTJUkPL6gGBtgzbzEim6EkU7tN8POx8FFrrZp5+MErxTCEH1gyRpBwkn8ui1mTYij5oIu8BVpZvhG17lwB89V6L6K3TQiMsoc63/7140LN3cPf62sSIPj4AHq+kIBj9o6evbPV/PV+oxdF8OEBfZKScuwmr++om4fCbE1bzfk2sBJvi9LIvT+ywMzDwx8HxY1iwpB+lyk//PVEggGKwicZL66f9KIo4XnmtKDy86aWOrQRc5aYrRsKOEgEXcxtsz95Wgoifqvk5iTvz4v4/RgXj2OfWhQlE3RZt8mpby0hGCstOEn49xKi7t3NsX8tiiLy3U03kedoEf4O3pzKM2pRmLz47LpwEqF56ua/jUbaQZd3azyrGoXoVc7nxIvoj/WdTJ/hJUSvt5L9zffpXLUoLEmX4nsUELavC/wOpsPx+seCQ39awvAatJsdX15CVosQPylG/FfDPXh6MJAPzcDIRfspL6ehulO34Im7DSEaACxR2ViLQjQAWCazoeMbpgHAKmubpXANAFZZM1YqhnomA4pnlgnbAMCT1c5v+AYA3py4a1PYhtEbOJos1OTbshY5OJoejxP5xHhyEtKO7kakE4lEIpFIJBKJRCKRSJ7i8ZDC77ccHR6ypwA3lchOhX9joydtNEK0ZJINuJPlclOzj8fsDW27pX9B7Dc+EvRxUURRTnHNHhPk2c3v6HwevHOc5oB+RapZ9IeUzo6zj5E1VbWCuYoXYPESIpqJsJcYJs7fHGJUQnapGP2c/zAkbjG7wV3JJyahFCM7O6fo54jeAwcxj7DTrlTa7De8cKtMadpirkFJs9QcqmqLHmdzaWvub2//34AYvsZXu5mYNq9QbRYyUXr5HCpGh1qFlQgCZyiwGJpjd6gMJmbMP/q8UZRj4qgqCBVT4rNP4sScMcHFnDjEJPgHNvvFNWJGtgqoUslwiaFN8hH7yHGDmHIqFbKIscWMiZcYd7sstpgpTbRuMZmzM3zTblUMOcdJiWyEFcPXys2yGI6HmDI0SzHHcTHFnFQq0zFrodeJWWquCfmgqrex5eO6WGL442n6HqZTzGEFwNft4MJTJQRNcDH6rarGeW3CDmAWuRZRTJG+Q+YUQ7/M4cmXgRWKiyGx4XzGaMeQQSgxxZ3pNAIW8vseYng/ZlUM0aFzx6oQHI+fI3HBxND1ZKW5PjuZzjt4bKyE85TuLuZoyvGYweSsIyXBxNDm+ohO5bGUfOdiVpIvpcVmspofj4koho0Dljp464YENizbCttcz8Vk/IrRNY1OBgftczwjxVComDJOE41YqqqFSwz9ae3oumyPCOg/2hFcTN6ZY4r2INJbTBNn/EVSQkcMXVdoZ46JOVYU+lIvG3F7iEnaN6rO1bjAyffx5uYRX+uN2GJASP4MOjJ5NvOJR6t0S0MmlhK6VZq/zJuxxdAfE7igk3F5iMH/7DC08J+haKKKWXxYgmOlUzZ9xQ3XNaapZuS83iHrx+T4KKHJjrOKBTXsw/av4IWItIHJ6Q773uZsMqEbmelxInHMP3zUcrnFzJvlbJZ2YUo5y9ptafw4a6NiuVxzi0WXSD43+v/0/Z7aqJp0xfZ69Zcp0OdB3zA6tVrD38mdTg//hJ/eMV+uWIHTS3dhaab9manRZT3N9jrdFyrU50C6O1/1uhgO9S466nWhejUadbuyNLp1XBh1PNg16HnE7LlOJ/W6z8D7H1BnMUA6VWIa1XQPNqq1PhmYg3Qd4qjaMdhp6apZa/SNWhUvHRJNv2aahkHs0zuDWp1Uq2YnuCv5xNiXUuv10phUO7BvdCBWGpBAapBD0hgKDTCGGaXLkgpUofQA/KRBJuwZGFtmFU8VJ2JMFhH9NOlgrWlAZJhmFyLGrHWJ0SANA691gPqgAsHVI0a/j4HW65Da/HSjCyd0fDdvnz19jAXwMaAxABtwaX2qq9ZrwNX3aFUb4BLSkEETUiPd6GP6NUyCf93H0GGHOunALuST063Ve3Wjihu9+oCYZr9bhSTS70JKgTips36L0e2ZsEUba4Lh0qn2upCFqmavXoWAwtPr1b45CPRaJBKJRCKRSCQSiUQikUj+I/8CIpngKmFto7cAAAAASUVORK5CYII=",alt:""}))),u.createElement("li",{className:"glide__slide"},u.createElement("div",{className:"customer-img text-center"},u.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJ_9aQxMQKglJUmxuqtncHDlSbInS780TB__Tgdw4jFd1Rr4nVCgdbBWIYpECDgDUI1M&usqp=CAU",alt:""}))))),u.createElement("div",{"data-glide-el":"controls",className:"flex items-center justify-center absolute top-[65%] left-[10%]"},u.createElement("button",{"data-glide-dir":"<",className:"bg-[#ffffff17] p-2 rounded-full hover:bg-[#ffffff30]"},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},u.createElement("path",{d:"M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"})))),u.createElement("div",{"data-glide-el":"controls",className:"flex items-center justify-center absolute top-[65%] right-[10%]"},u.createElement("button",{"data-glide-dir":">",className:"bg-[#ffffff17] p-2 hover:bg-[#ffffff30] rounded-full"},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},u.createElement("path",{d:"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"})))))}))}function G3(){return u.createElement(u.Fragment,null,u.createElement(pF,null,u.createElement(cF,null,u.createElement(Me,{path:"/",element:u.createElement(SF,null)}),u.createElement(Me,{path:"/login",element:u.createElement(Tx,null)}),u.createElement(Me,{path:"/signup",element:u.createElement(QF,null)}),u.createElement(Me,{path:"/about",element:u.createElement(ZF,null)}),u.createElement(Me,{path:"/careers",element:u.createElement(NF,null)}),u.createElement(Me,{path:"/careers/:id",element:u.createElement(RF,null)}),u.createElement(Me,{path:"/careers/:id/apply",element:u.createElement(VF,null)}),u.createElement(Me,{path:"/our-team",element:u.createElement(n3,null)}),u.createElement(Me,{path:"/ourteam",element:u.createElement(t3,null)}),u.createElement(Me,{path:"/services",element:u.createElement(K3,null)}),u.createElement(Me,{path:"/logged",element:u.createElement(XF,null)}),u.createElement(Me,{path:"/logged/create",element:u.createElement(zF,null)}),u.createElement(Me,{path:"/logged/candidates",element:u.createElement(GF,null)}),u.createElement(Me,{path:"/logged/candidates/:id",element:u.createElement(YF,null)}),u.createElement(Me,{path:"/logged/edit/:id",element:u.createElement(UF,null)}),u.createElement(Me,{path:"*",element:u.createElement(De,{content:u.createElement(Wa,null)})}),u.createElement(Me,{path:"/test",element:u.createElement(LF,{itemsPerPage:4})}))))}var Ax,G_=ZI;Ax=G_.createRoot,G_.hydrateRoot;const Y3=document.getElementById("root"),Q3=Ax(Y3);Q3.render(u.createElement(u.StrictMode,null,u.createElement(_4,{firebaseConfig:ek},u.createElement(G3,null))));
