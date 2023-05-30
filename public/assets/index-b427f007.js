function CS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var SS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function h_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ho={},kS={get exports(){return ho},set exports(t){ho=t}},Pc={},S={},IS={get exports(){return S},set exports(t){S=t}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),TS=Symbol.for("react.portal"),xS=Symbol.for("react.fragment"),NS=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),RS=Symbol.for("react.provider"),PS=Symbol.for("react.context"),AS=Symbol.for("react.forward_ref"),OS=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),DS=Symbol.for("react.lazy"),sm=Symbol.iterator;function MS(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f_=Object.assign,p_={};function cs(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g_(){}g_.prototype=cs.prototype;function Rf(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}var Pf=Rf.prototype=new g_;Pf.constructor=Rf;f_(Pf,cs.prototype);Pf.isPureReactComponent=!0;var om=Array.isArray,m_=Object.prototype.hasOwnProperty,Af={current:null},y_={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)m_.call(e,r)&&!y_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jo,type:t,key:s,ref:o,props:i,_owner:Af.current}}function FS(t,e){return{$$typeof:Jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jo}function $S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$S(""+t.key):e.toString(36)}function rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jo:case TS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bu(o,0):r,om(i)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),rl(i,e,n,"",function(c){return c})):i!=null&&(Of(i)&&(i=FS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",om(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bu(s,a);o+=rl(s,e,n,l,i)}else if(l=MS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bu(s,a++),o+=rl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function US(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},il={transition:null},jS={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:il,ReactCurrentOwner:Af};Y.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=cs;Y.Fragment=xS;Y.Profiler=bS;Y.PureComponent=Rf;Y.StrictMode=NS;Y.Suspense=OS;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Af.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)m_.call(e,l)&&!y_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Jo,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:PS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RS,_context:t},t.Consumer=t};Y.createElement=v_;Y.createFactory=function(t){var e=v_.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:AS,render:t}};Y.isValidElement=Of;Y.lazy=function(t){return{$$typeof:DS,_payload:{_status:-1,_result:t},_init:US}};Y.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return st.current.useCallback(t,e)};Y.useContext=function(t){return st.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return st.current.useDeferredValue(t)};Y.useEffect=function(t,e){return st.current.useEffect(t,e)};Y.useId=function(){return st.current.useId()};Y.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return st.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};Y.useRef=function(t){return st.current.useRef(t)};Y.useState=function(t){return st.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return st.current.useTransition()};Y.version="18.2.0";(function(t){t.exports=Y})(IS);const __=h_(S),$h=CS({__proto__:null,default:__},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=S,zS=Symbol.for("react.element"),VS=Symbol.for("react.fragment"),WS=Object.prototype.hasOwnProperty,HS=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KS={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WS.call(e,r)&&!KS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zS,type:t,key:s,ref:o,props:i,_owner:HS.current}}Pc.Fragment=VS;Pc.jsx=w_;Pc.jsxs=w_;(function(t){t.exports=Pc})(kS);const E_=ho.Fragment,d=ho.jsx,C=ho.jsxs;var Uh={},jh={},GS={get exports(){return jh},set exports(t){jh=t}},It={},Bh={},qS={get exports(){return Bh},set exports(t){Bh=t}},C_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,I){var w=R.length;R.push(I);e:for(;0<w;){var U=w-1>>>1,O=R[U];if(0<i(O,I))R[U]=I,R[w]=O,w=U;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var I=R[0],w=R.pop();if(w!==I){R[0]=w;e:for(var U=0,O=R.length,B=O>>>1;U<B;){var H=2*(U+1)-1,ue=R[H],fe=H+1,et=R[fe];if(0>i(ue,w))fe<O&&0>i(et,ue)?(R[U]=et,R[fe]=w,U=fe):(R[U]=ue,R[H]=w,U=H);else if(fe<O&&0>i(et,w))R[U]=et,R[fe]=w,U=fe;else break e}}return I}function i(R,I){var w=R.sortIndex-I.sortIndex;return w!==0?w:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,m=!1,v=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=R)r(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function E(R){if(_=!1,y(R),!v)if(n(l)!==null)v=!0,jt(N);else{var I=n(c);I!==null&&Bt(E,I.startTime-R)}}function N(R,I){v=!1,_&&(_=!1,g(L),L=-1),m=!0;var w=f;try{for(y(I),h=n(l);h!==null&&(!(h.expirationTime>I)||R&&!we());){var U=h.callback;if(typeof U=="function"){h.callback=null,f=h.priorityLevel;var O=U(h.expirationTime<=I);I=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),y(I)}else r(l);h=n(l)}if(h!==null)var B=!0;else{var H=n(c);H!==null&&Bt(E,H.startTime-I),B=!1}return B}finally{h=null,f=w,m=!1}}var P=!1,b=null,L=-1,$=5,W=-1;function we(){return!(t.unstable_now()-W<$)}function M(){if(b!==null){var R=t.unstable_now();W=R;var I=!0;try{I=b(!0,R)}finally{I?F():(P=!1,b=null)}}else P=!1}var F;if(typeof p=="function")F=function(){p(M)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Z=Q.port2;Q.port1.onmessage=M,F=function(){Z.postMessage(null)}}else F=function(){k(M,0)};function jt(R){b=R,P||(P=!0,F())}function Bt(R,I){L=k(function(){R(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,jt(N))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var w=f;f=I;try{return R()}finally{f=w}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var w=f;f=R;try{return I()}finally{f=w}},t.unstable_scheduleCallback=function(R,I,w){var U=t.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?U+w:U):w=U,R){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=w+O,R={id:u++,callback:I,priorityLevel:R,startTime:w,expirationTime:O,sortIndex:-1},w>U?(R.sortIndex=w,e(c,R),n(l)===null&&R===n(c)&&(_?(g(L),L=-1):_=!0,Bt(E,w-U))):(R.sortIndex=O,e(l,R),v||m||(v=!0,jt(N))),R},t.unstable_shouldYield=we,t.unstable_wrapCallback=function(R){var I=f;return function(){var w=f;f=I;try{return R.apply(this,arguments)}finally{f=w}}}})(C_);(function(t){t.exports=C_})(qS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_=S,St=Bh;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k_=new Set,fo={};function oi(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(fo[t]=e,t=0;t<e.length;t++)k_.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,YS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},cm={};function QS(t){return zh.call(cm,t)?!0:zh.call(lm,t)?!1:YS.test(t)?cm[t]=!0:(lm[t]=!0,!1)}function XS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JS(t,e,n,r){if(e===null||typeof e>"u"||XS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Df);We[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Df);We[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Df);We[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JS(e,n,i,r)&&(n=null),r||i===null?QS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Vh=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Wh=Symbol.for("react.suspense"),Hh=Symbol.for("react.suspense_list"),Uf=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),x_=Symbol.for("react.offscreen"),um=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Ru;function zs(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Pu=!1;function Au(t,e){if(!t||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function ZS(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function Kh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case mi:return"Portal";case Vh:return"Profiler";case Ff:return"StrictMode";case Wh:return"Suspense";case Hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T_:return(t.displayName||"Context")+".Consumer";case I_:return(t._context.displayName||"Context")+".Provider";case $f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uf:return e=t.displayName||null,e!==null?e:Kh(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Kh(t(e))}catch{}}return null}function ek(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kh(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tk(t){var e=N_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=tk(t))}function b_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gh(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function R_(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function qh(t,e){R_(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yh(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yh(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Vs(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function P_(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nk=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){nk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function L_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function D_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=L_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rk=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jh(t,e){if(e){if(rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Zh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Ai=null,Oi=null;function gm(t){if(t=ta(t)){if(typeof td!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Mc(e),td(t.stateNode,t.type,e))}}function M_(t){Ai?Oi?Oi.push(t):Oi=[t]:Ai=t}function F_(){if(Ai){var t=Ai,e=Oi;if(Oi=Ai=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function $_(t,e){return t(e)}function U_(){}var Ou=!1;function j_(t,e,n){if(Ou)return t(e,n);Ou=!0;try{return $_(t,e,n)}finally{Ou=!1,(Ai!==null||Oi!==null)&&(U_(),F_())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=Mc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var nd=!1;if(Nn)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){nd=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{nd=!1}function ik(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Xs=!1,Cl=null,Sl=!1,rd=null,sk={onError:function(t){Xs=!0,Cl=t}};function ok(t,e,n,r,i,s,o,a,l){Xs=!1,Cl=null,ik.apply(sk,arguments)}function ak(t,e,n,r,i,s,o,a,l){if(ok.apply(this,arguments),Xs){if(Xs){var c=Cl;Xs=!1,Cl=null}else throw Error(T(198));Sl||(Sl=!0,rd=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mm(t){if(ai(t)!==t)throw Error(T(188))}function lk(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mm(i),t;if(s===r)return mm(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function z_(t){return t=lk(t),t!==null?V_(t):null}function V_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V_(t);if(e!==null)return e;t=t.sibling}return null}var W_=St.unstable_scheduleCallback,ym=St.unstable_cancelCallback,ck=St.unstable_shouldYield,uk=St.unstable_requestPaint,Ce=St.unstable_now,hk=St.unstable_getCurrentPriorityLevel,Bf=St.unstable_ImmediatePriority,H_=St.unstable_UserBlockingPriority,kl=St.unstable_NormalPriority,dk=St.unstable_LowPriority,K_=St.unstable_IdlePriority,Ac=null,ln=null;function fk(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:mk,pk=Math.log,gk=Math.LN2;function mk(t){return t>>>=0,t===0?32:31-(pk(t)/gk|0)|0}var Da=64,Ma=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ws(a):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function yk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=yk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G_(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function _k(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y_,Vf,Q_,X_,J_,sd=!1,Fa=[],ir=null,sr=null,or=null,mo=new Map,yo=new Map,qn=[],wk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ta(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ek(t,e,n,r,i){switch(e){case"focusin":return ir=Rs(ir,t,e,n,r,i),!0;case"dragenter":return sr=Rs(sr,t,e,n,r,i),!0;case"mouseover":return or=Rs(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mo.set(s,Rs(mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Rs(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function Z_(t){var e=Lr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=B_(n),e!==null){t.blockedOn=e,J_(t.priority,function(){Q_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return e=ta(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function _m(t,e,n){sl(t)&&n.delete(e)}function Ck(){sd=!1,ir!==null&&sl(ir)&&(ir=null),sr!==null&&sl(sr)&&(sr=null),or!==null&&sl(or)&&(or=null),mo.forEach(_m),yo.forEach(_m)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,Ck)))}function vo(t){function e(i){return Ps(i,t)}if(0<Fa.length){Ps(Fa[0],t);for(var n=1;n<Fa.length;n++){var r=Fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Ps(ir,t),sr!==null&&Ps(sr,t),or!==null&&Ps(or,t),mo.forEach(e),yo.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Z_(n),n.blockedOn===null&&qn.shift()}var Li=Dn.ReactCurrentBatchConfig,Tl=!0;function Sk(t,e,n,r){var i=ne,s=Li.transition;Li.transition=null;try{ne=1,Wf(t,e,n,r)}finally{ne=i,Li.transition=s}}function kk(t,e,n,r){var i=ne,s=Li.transition;Li.transition=null;try{ne=4,Wf(t,e,n,r)}finally{ne=i,Li.transition=s}}function Wf(t,e,n,r){if(Tl){var i=od(t,e,n,r);if(i===null)Wu(t,e,r,xl,n),vm(t,r);else if(Ek(i,t,e,n,r))r.stopPropagation();else if(vm(t,r),e&4&&-1<wk.indexOf(t)){for(;i!==null;){var s=ta(i);if(s!==null&&Y_(s),s=od(t,e,n,r),s===null&&Wu(t,e,r,xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var xl=null;function od(t,e,n,r){if(xl=null,t=jf(r),t=Lr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=B_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hk()){case Bf:return 1;case H_:return 4;case kl:case dk:return 16;case K_:return 536870912;default:return 16}default:return 16}}var er=null,Hf=null,ol=null;function t0(){if(ol)return ol;var t,e=Hf,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ol=i.slice(t,1<r?1-r:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function wm(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:wm,this.isPropagationStopped=wm,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=Tt(us),ea=me({},us,{view:0,detail:0}),Ik=Tt(ea),Du,Mu,As,Oc=me({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Du=t.screenX-As.screenX,Mu=t.screenY-As.screenY):Mu=Du=0,As=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Em=Tt(Oc),Tk=me({},Oc,{dataTransfer:0}),xk=Tt(Tk),Nk=me({},ea,{relatedTarget:0}),Fu=Tt(Nk),bk=me({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Rk=Tt(bk),Pk=me({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ak=Tt(Pk),Ok=me({},us,{data:0}),Cm=Tt(Ok),Lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mk[t])?!!e[t]:!1}function Gf(){return Fk}var $k=me({},ea,{key:function(t){if(t.key){var e=Lk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uk=Tt($k),jk=me({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Tt(jk),Bk=me({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),zk=Tt(Bk),Vk=me({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wk=Tt(Vk),Hk=me({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kk=Tt(Hk),Gk=[9,13,27,32],qf=Nn&&"CompositionEvent"in window,Js=null;Nn&&"documentMode"in document&&(Js=document.documentMode);var qk=Nn&&"TextEvent"in window&&!Js,n0=Nn&&(!qf||Js&&8<Js&&11>=Js),km=String.fromCharCode(32),Im=!1;function r0(t,e){switch(t){case"keyup":return Gk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function Yk(t,e){switch(t){case"compositionend":return i0(e);case"keypress":return e.which!==32?null:(Im=!0,km);case"textInput":return t=e.data,t===km&&Im?null:t;default:return null}}function Qk(t,e){if(vi)return t==="compositionend"||!qf&&r0(t,e)?(t=t0(),ol=Hf=er=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var Xk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xk[t.type]:e==="textarea"}function s0(t,e,n,r){M_(r),e=Nl(e,"onChange"),0<e.length&&(n=new Kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zs=null,_o=null;function Jk(t){m0(t,0)}function Lc(t){var e=Ei(t);if(b_(e))return t}function Zk(t,e){if(t==="change")return e}var o0=!1;if(Nn){var $u;if(Nn){var Uu="oninput"in document;if(!Uu){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Uu=typeof xm.oninput=="function"}$u=Uu}else $u=!1;o0=$u&&(!document.documentMode||9<document.documentMode)}function Nm(){Zs&&(Zs.detachEvent("onpropertychange",a0),_o=Zs=null)}function a0(t){if(t.propertyName==="value"&&Lc(_o)){var e=[];s0(e,_o,t,jf(t)),j_(Jk,e)}}function eI(t,e,n){t==="focusin"?(Nm(),Zs=e,_o=n,Zs.attachEvent("onpropertychange",a0)):t==="focusout"&&Nm()}function tI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(_o)}function nI(t,e){if(t==="click")return Lc(e)}function rI(t,e){if(t==="input"||t==="change")return Lc(e)}function iI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:iI;function wo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zh.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rm(t,e){var n=bm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sI(t){var e=c0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(r!==null&&Yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rm(n,s);var o=Rm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oI=Nn&&"documentMode"in document&&11>=document.documentMode,_i=null,ad=null,eo=null,ld=!1;function Pm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||_i==null||_i!==El(r)||(r=_i,"selectionStart"in r&&Yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&wo(eo,r)||(eo=r,r=Nl(ad,"onSelect"),0<r.length&&(e=new Kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},ju={},u0={};Nn&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Dc(t){if(ju[t])return ju[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u0)return ju[t]=e[n];return t}var h0=Dc("animationend"),d0=Dc("animationiteration"),f0=Dc("animationstart"),p0=Dc("transitionend"),g0=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){g0.set(t,e),oi(e,[t])}for(var Bu=0;Bu<Am.length;Bu++){var zu=Am[Bu],aI=zu.toLowerCase(),lI=zu[0].toUpperCase()+zu.slice(1);Er(aI,"on"+lI)}Er(h0,"onAnimationEnd");Er(d0,"onAnimationIteration");Er(f0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(p0,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function Om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ak(r,e,void 0,t),t.currentTarget=null}function m0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Om(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Om(i,a,c),s=l}}}if(Sl)throw t=rd,Sl=!1,rd=null,t}function le(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var r=t+"__bubble";n.has(r)||(y0(e,t,2,!1),n.add(r))}function Vu(t,e,n){var r=0;e&&(r|=4),y0(n,t,r,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[ja]){t[ja]=!0,k_.forEach(function(n){n!=="selectionchange"&&(cI.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,Vu("selectionchange",!1,e))}}function y0(t,e,n,r){switch(e0(e)){case 1:var i=Sk;break;case 4:i=kk;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}j_(function(){var c=s,u=jf(n),h=[];e:{var f=g0.get(t);if(f!==void 0){var m=Kf,v=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":m=Uk;break;case"focusin":v="focus",m=Fu;break;case"focusout":v="blur",m=Fu;break;case"beforeblur":case"afterblur":m=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=zk;break;case h0:case d0:case f0:m=Rk;break;case p0:m=Wk;break;case"scroll":m=Ik;break;case"wheel":m=Kk;break;case"copy":case"cut":case"paste":m=Ak;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Sm}var _=(e&4)!==0,k=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var p=c,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=go(p,g),E!=null&&_.push(Co(p,E,y)))),k)break;p=p.return}0<_.length&&(f=new m(f,v,null,n,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==ed&&(v=n.relatedTarget||n.fromElement)&&(Lr(v)||v[bn]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Lr(v):null,v!==null&&(k=ai(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(_=Em,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Sm,E="onPointerLeave",g="onPointerEnter",p="pointer"),k=m==null?f:Ei(m),y=v==null?f:Ei(v),f=new _(E,p+"leave",m,n,u),f.target=k,f.relatedTarget=y,E=null,Lr(u)===c&&(_=new _(g,p+"enter",v,n,u),_.target=y,_.relatedTarget=k,E=_),k=E,m&&v)t:{for(_=m,g=v,p=0,y=_;y;y=fi(y))p++;for(y=0,E=g;E;E=fi(E))y++;for(;0<p-y;)_=fi(_),p--;for(;0<y-p;)g=fi(g),y--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=fi(_),g=fi(g)}_=null}else _=null;m!==null&&Lm(h,f,m,_,!1),v!==null&&k!==null&&Lm(h,k,v,_,!0)}}e:{if(f=c?Ei(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=Zk;else if(Tm(f))if(o0)N=rI;else{N=tI;var P=eI}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=nI);if(N&&(N=N(t,c))){s0(h,N,n,u);break e}P&&P(t,f,c),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Yh(f,"number",f.value)}switch(P=c?Ei(c):window,t){case"focusin":(Tm(P)||P.contentEditable==="true")&&(_i=P,ad=c,eo=null);break;case"focusout":eo=ad=_i=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Pm(h,n,u);break;case"selectionchange":if(oI)break;case"keydown":case"keyup":Pm(h,n,u)}var b;if(qf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else vi?r0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(n0&&n.locale!=="ko"&&(vi||L!=="onCompositionStart"?L==="onCompositionEnd"&&vi&&(b=t0()):(er=u,Hf="value"in er?er.value:er.textContent,vi=!0)),P=Nl(c,L),0<P.length&&(L=new Cm(L,t,null,n,u),h.push({event:L,listeners:P}),b?L.data=b:(b=i0(n),b!==null&&(L.data=b)))),(b=qk?Yk(t,n):Qk(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(u=new Cm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=b))}m0(h,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(Co(t,s,i)),s=go(t,e),s!=null&&r.push(Co(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=go(n,s),l!=null&&o.unshift(Co(n,l,a))):i||(l=go(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uI=/\r\n?/g,hI=/\u0000|\uFFFD/g;function Dm(t){return(typeof t=="string"?t:""+t).replace(uI,`
`).replace(hI,"")}function Ba(t,e,n){if(e=Dm(e),Dm(t)!==e&&n)throw Error(T(425))}function bl(){}var cd=null,ud=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,dI=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,fI=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(t){return Mm.resolve(null).then(t).catch(pI)}:dd;function pI(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),sn="__reactFiber$"+hs,So="__reactProps$"+hs,bn="__reactContainer$"+hs,fd="__reactEvents$"+hs,gI="__reactListeners$"+hs,mI="__reactHandles$"+hs;function Lr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[sn])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function ta(t){return t=t[sn]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Mc(t){return t[So]||null}var pd=[],Ci=-1;function Cr(t){return{current:t}}function ce(t){0>Ci||(t.current=pd[Ci],pd[Ci]=null,Ci--)}function ae(t,e){Ci++,pd[Ci]=t.current,t.current=e}var vr={},Xe=Cr(vr),ft=Cr(!1),Kr=vr;function Gi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Rl(){ce(ft),ce(Xe)}function $m(t,e,n){if(Xe.current!==vr)throw Error(T(168));ae(Xe,e),ae(ft,n)}function v0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,ek(t)||"Unknown",i));return me({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Kr=Xe.current,ae(Xe,t),ae(ft,ft.current),!0}function Um(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=v0(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,ce(ft),ce(Xe),ae(Xe,t)):ce(ft),ae(ft,n)}var yn=null,Fc=!1,Ku=!1;function _0(t){yn===null?yn=[t]:yn.push(t)}function yI(t){Fc=!0,_0(t)}function Sr(){if(!Ku&&yn!==null){Ku=!0;var t=0,e=ne;try{var n=yn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,Fc=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),W_(Bf,Sr),i}finally{ne=e,Ku=!1}}return null}var Si=[],ki=0,Al=null,Ol=0,bt=[],Rt=0,Gr=null,vn=1,_n="";function Nr(t,e){Si[ki++]=Ol,Si[ki++]=Al,Al=t,Ol=e}function w0(t,e,n){bt[Rt++]=vn,bt[Rt++]=_n,bt[Rt++]=Gr,Gr=t;var r=vn;t=_n;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Yt(e)+i|n<<i|r,_n=s+t}else vn=1<<s|n<<i|r,_n=t}function Qf(t){t.return!==null&&(Nr(t,1),w0(t,1,0))}function Xf(t){for(;t===Al;)Al=Si[--ki],Si[ki]=null,Ol=Si[--ki],Si[ki]=null;for(;t===Gr;)Gr=bt[--Rt],bt[Rt]=null,_n=bt[--Rt],bt[Rt]=null,vn=bt[--Rt],bt[Rt]=null}var Ct=null,wt=null,he=!1,Ht=null;function E0(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,wt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:vn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,wt=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function md(t){if(he){var e=wt;if(e){var n=e;if(!jm(t,e)){if(gd(t))throw Error(T(418));e=ar(n.nextSibling);var r=Ct;e&&jm(t,e)?E0(r,n):(t.flags=t.flags&-4097|2,he=!1,Ct=t)}}else{if(gd(t))throw Error(T(418));t.flags=t.flags&-4097|2,he=!1,Ct=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function za(t){if(t!==Ct)return!1;if(!he)return Bm(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=wt)){if(gd(t))throw C0(),Error(T(418));for(;e;)E0(t,e),e=ar(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Ct?ar(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=wt;t;)t=ar(t.nextSibling)}function qi(){wt=Ct=null,he=!1}function Jf(t){Ht===null?Ht=[t]:Ht.push(t)}var vI=Dn.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ll=Cr(null),Dl=null,Ii=null,Zf=null;function ep(){Zf=Ii=Dl=null}function tp(t){var e=Ll.current;ce(Ll),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){Dl=t,Zf=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(Dl===null)throw Error(T(308));Ii=t,Dl.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Dr=null;function np(t){Dr===null?Dr=[t]:Dr.push(t)}function S0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,np(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,np(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zf(t,n)}}function zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=me({},h,f);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function Vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var I0=new S_.Component().refs;function vd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $c={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=ur(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Qt(e,t,i,r),ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=ur(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Qt(e,t,i,r),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=ur(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&(Qt(e,t,r,n),ll(e,t,r))}};function Wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,r)||!wo(i,s):!0}function T0(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=pt(e)?Kr:Xe.current,r=e.contextTypes,s=(r=r!=null)?Gi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$c.enqueueReplaceState(e,e.state,null)}function _d(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=I0,rp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=pt(e)?Kr:Xe.current,i.context=Gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$c.enqueueReplaceState(i,i.state,null),Ml(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===I0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function x0(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=hr(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,E){return p===null||p.tag!==6?(p=Zu(y,g.mode,E),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,E){var N=y.type;return N===yi?u(g,p,y.props.children,E,y.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Kn&&Km(N)===p.type)?(E=i(p,y.props),E.ref=Os(g,p,y),E.return=g,E):(E=pl(y.type,y.key,y.props,null,g.mode,E),E.ref=Os(g,p,y),E.return=g,E)}function c(g,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=eh(y,g.mode,E),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function u(g,p,y,E,N){return p===null||p.tag!==7?(p=zr(y,g.mode,E,N),p.return=g,p):(p=i(p,y),p.return=g,p)}function h(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zu(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Aa:return y=pl(p.type,p.key,p.props,null,g.mode,y),y.ref=Os(g,null,p),y.return=g,y;case mi:return p=eh(p,g.mode,y),p.return=g,p;case Kn:var E=p._init;return h(g,E(p._payload),y)}if(Vs(p)||Ns(p))return p=zr(p,g.mode,y,null),p.return=g,p;Va(g,p)}return null}function f(g,p,y,E){var N=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:a(g,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return y.key===N?l(g,p,y,E):null;case mi:return y.key===N?c(g,p,y,E):null;case Kn:return N=y._init,f(g,p,N(y._payload),E)}if(Vs(y)||Ns(y))return N!==null?null:u(g,p,y,E,null);Va(g,y)}return null}function m(g,p,y,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(p,g,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Aa:return g=g.get(E.key===null?y:E.key)||null,l(p,g,E,N);case mi:return g=g.get(E.key===null?y:E.key)||null,c(p,g,E,N);case Kn:var P=E._init;return m(g,p,y,P(E._payload),N)}if(Vs(E)||Ns(E))return g=g.get(y)||null,u(p,g,E,N,null);Va(p,E)}return null}function v(g,p,y,E){for(var N=null,P=null,b=p,L=p=0,$=null;b!==null&&L<y.length;L++){b.index>L?($=b,b=null):$=b.sibling;var W=f(g,b,y[L],E);if(W===null){b===null&&(b=$);break}t&&b&&W.alternate===null&&e(g,b),p=s(W,p,L),P===null?N=W:P.sibling=W,P=W,b=$}if(L===y.length)return n(g,b),he&&Nr(g,L),N;if(b===null){for(;L<y.length;L++)b=h(g,y[L],E),b!==null&&(p=s(b,p,L),P===null?N=b:P.sibling=b,P=b);return he&&Nr(g,L),N}for(b=r(g,b);L<y.length;L++)$=m(b,g,L,y[L],E),$!==null&&(t&&$.alternate!==null&&b.delete($.key===null?L:$.key),p=s($,p,L),P===null?N=$:P.sibling=$,P=$);return t&&b.forEach(function(we){return e(g,we)}),he&&Nr(g,L),N}function _(g,p,y,E){var N=Ns(y);if(typeof N!="function")throw Error(T(150));if(y=N.call(y),y==null)throw Error(T(151));for(var P=N=null,b=p,L=p=0,$=null,W=y.next();b!==null&&!W.done;L++,W=y.next()){b.index>L?($=b,b=null):$=b.sibling;var we=f(g,b,W.value,E);if(we===null){b===null&&(b=$);break}t&&b&&we.alternate===null&&e(g,b),p=s(we,p,L),P===null?N=we:P.sibling=we,P=we,b=$}if(W.done)return n(g,b),he&&Nr(g,L),N;if(b===null){for(;!W.done;L++,W=y.next())W=h(g,W.value,E),W!==null&&(p=s(W,p,L),P===null?N=W:P.sibling=W,P=W);return he&&Nr(g,L),N}for(b=r(g,b);!W.done;L++,W=y.next())W=m(b,g,L,W.value,E),W!==null&&(t&&W.alternate!==null&&b.delete(W.key===null?L:W.key),p=s(W,p,L),P===null?N=W:P.sibling=W,P=W);return t&&b.forEach(function(M){return e(g,M)}),he&&Nr(g,L),N}function k(g,p,y,E){if(typeof y=="object"&&y!==null&&y.type===yi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:e:{for(var N=y.key,P=p;P!==null;){if(P.key===N){if(N=y.type,N===yi){if(P.tag===7){n(g,P.sibling),p=i(P,y.props.children),p.return=g,g=p;break e}}else if(P.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Kn&&Km(N)===P.type){n(g,P.sibling),p=i(P,y.props),p.ref=Os(g,P,y),p.return=g,g=p;break e}n(g,P);break}else e(g,P);P=P.sibling}y.type===yi?(p=zr(y.props.children,g.mode,E,y.key),p.return=g,g=p):(E=pl(y.type,y.key,y.props,null,g.mode,E),E.ref=Os(g,p,y),E.return=g,g=E)}return o(g);case mi:e:{for(P=y.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=eh(y,g.mode,E),p.return=g,g=p}return o(g);case Kn:return P=y._init,k(g,p,P(y._payload),E)}if(Vs(y))return v(g,p,y,E);if(Ns(y))return _(g,p,y,E);Va(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Zu(y,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return k}var Yi=x0(!0),N0=x0(!1),na={},cn=Cr(na),ko=Cr(na),Io=Cr(na);function Mr(t){if(t===na)throw Error(T(174));return t}function ip(t,e){switch(ae(Io,e),ae(ko,t),ae(cn,na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xh(e,t)}ce(cn),ae(cn,e)}function Qi(){ce(cn),ce(ko),ce(Io)}function b0(t){Mr(Io.current);var e=Mr(cn.current),n=Xh(e,t.type);e!==n&&(ae(ko,t),ae(cn,n))}function sp(t){ko.current===t&&(ce(cn),ce(ko))}var pe=Cr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function op(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var cl=Dn.ReactCurrentDispatcher,qu=Dn.ReactCurrentBatchConfig,qr=0,ge=null,xe=null,Ae=null,$l=!1,to=!1,To=0,_I=0;function Ke(){throw Error(T(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function lp(t,e,n,r,i,s){if(qr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=t===null||t.memoizedState===null?SI:kI,t=n(r,i),to){s=0;do{if(to=!1,To=0,25<=s)throw Error(T(301));s+=1,Ae=xe=null,e.updateQueue=null,cl.current=II,t=n(r,i)}while(to)}if(cl.current=Ul,e=xe!==null&&xe.next!==null,qr=0,Ae=xe=ge=null,$l=!1,e)throw Error(T(300));return t}function cp(){var t=To!==0;return To=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ge.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Mt(){if(xe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Ae===null?ge.memoizedState:Ae.next;if(e!==null)Ae=e,xe=t;else{if(t===null)throw Error(T(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ae===null?ge.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function xo(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=Mt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Jt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=Mt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function R0(){}function P0(t,e){var n=ge,r=Mt(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,up(L0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,No(9,O0.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(T(349));qr&30||A0(n,e,i)}return i}function A0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,D0(e)&&M0(t)}function L0(t,e,n){return n(function(){D0(e)&&M0(t)})}function D0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function M0(t){var e=Rn(t,1);e!==null&&Qt(e,t,1,-1)}function Gm(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=CI.bind(null,ge,t),[e.memoizedState,t]}function No(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F0(){return Mt().memoizedState}function ul(t,e,n,r){var i=rn();ge.flags|=t,i.memoizedState=No(1|e,n,void 0,r===void 0?null:r)}function Uc(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=No(e,n,s,r);return}}ge.flags|=t,i.memoizedState=No(1|e,n,s,r)}function qm(t,e){return ul(8390656,8,t,e)}function up(t,e){return Uc(2048,8,t,e)}function $0(t,e){return Uc(4,2,t,e)}function U0(t,e){return Uc(4,4,t,e)}function j0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B0(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,j0.bind(null,e,t),n)}function hp(){}function z0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function V0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W0(t,e,n){return qr&21?(Jt(n,e)||(n=G_(),ge.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function wI(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=qu.transition;qu.transition={};try{t(!1),e()}finally{ne=n,qu.transition=r}}function H0(){return Mt().memoizedState}function EI(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))G0(e,n);else if(n=S0(t,e,n,r),n!==null){var i=rt();Qt(n,t,r,i),q0(n,e,r)}}function CI(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))G0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Jt(a,o)){var l=e.interleaved;l===null?(i.next=i,np(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=S0(t,e,i,r),n!==null&&(i=rt(),Qt(n,t,r,i),q0(n,e,r))}}function K0(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function G0(t,e){to=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zf(t,n)}}var Ul={readContext:Dt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},SI={readContext:Dt,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,j0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:Gm,useDebugValue:hp,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=Gm(!1),e=t[0];return t=wI.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=rn();if(he){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Me===null)throw Error(T(349));qr&30||A0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qm(L0.bind(null,r,s,t),[t]),r.flags|=2048,No(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=Me.identifierPrefix;if(he){var n=_n,r=vn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_I++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kI={readContext:Dt,useCallback:z0,useContext:Dt,useEffect:up,useImperativeHandle:B0,useInsertionEffect:$0,useLayoutEffect:U0,useMemo:V0,useReducer:Yu,useRef:F0,useState:function(){return Yu(xo)},useDebugValue:hp,useDeferredValue:function(t){var e=Mt();return W0(e,xe.memoizedState,t)},useTransition:function(){var t=Yu(xo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:P0,useId:H0,unstable_isNewReconciler:!1},II={readContext:Dt,useCallback:z0,useContext:Dt,useEffect:up,useImperativeHandle:B0,useInsertionEffect:$0,useLayoutEffect:U0,useMemo:V0,useReducer:Qu,useRef:F0,useState:function(){return Qu(xo)},useDebugValue:hp,useDeferredValue:function(t){var e=Mt();return xe===null?e.memoizedState=t:W0(e,xe.memoizedState,t)},useTransition:function(){var t=Qu(xo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:P0,useId:H0,unstable_isNewReconciler:!1};function Xi(t,e){try{var n="",r=e;do n+=ZS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TI=typeof WeakMap=="function"?WeakMap:Map;function Y0(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bl||(Bl=!0,Rd=r),wd(t,e)},n}function Q0(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wd(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jI.bind(null,t,e,n),e.then(t,t))}function Qm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var xI=Dn.ReactCurrentOwner,ut=!1;function tt(t,e,n,r){e.child=t===null?N0(e,null,n,r):Yi(e,t.child,n,r)}function Jm(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=lp(t,e,n,r,s,i),n=cp(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(he&&n&&Qf(e),e.flags|=1,tt(t,e,r,i),e.child)}function Zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X0(t,e,s,r,i)):(t=pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wo(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Ed(t,e,n,r,i)}function J0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(xi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(xi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(xi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(xi,yt),yt|=r;return tt(t,e,i,n),e.child}function Z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,r,i){var s=pt(n)?Kr:Xe.current;return s=Gi(e,s),Di(e,i),n=lp(t,e,n,r,s,i),r=cp(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(he&&r&&Qf(e),e.flags|=1,tt(t,e,n,i),e.child)}function ey(t,e,n,r,i){if(pt(n)){var s=!0;Pl(e)}else s=!1;if(Di(e,i),e.stateNode===null)hl(t,e),T0(e,n,r),_d(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=pt(n)?Kr:Xe.current,c=Gi(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Hm(e,o,r,c),Gn=!1;var f=e.memoizedState;o.state=f,Ml(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ft.current||Gn?(typeof u=="function"&&(vd(e,n,u,r),l=e.memoizedState),(a=Gn||Wm(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,k0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=pt(n)?Kr:Xe.current,l=Gi(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Hm(e,o,r,l),Gn=!1,f=e.memoizedState,o.state=f,Ml(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||ft.current||Gn?(typeof m=="function"&&(vd(e,n,m,r),v=e.memoizedState),(c=Gn||Wm(e,n,c,r,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Cd(t,e,n,r,s,i)}function Cd(t,e,n,r,i,s){Z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Um(e,n,!1),Pn(t,e,s);r=e.stateNode,xI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&Um(e,n,!0),e.child}function ew(t){var e=t.stateNode;e.pendingContext?$m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$m(t,e.context,!1),ip(t,e.containerInfo)}function ty(t,e,n,r,i){return qi(),Jf(i),e.flags|=256,tt(t,e,n,r),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function tw(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(pe,i&1),t===null)return md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kd(n),e.memoizedState=Sd,t):dp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,r}return s=t.child,t=s.sibling,r=hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dp(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&Jf(r),Yi(e,t.child,null,n),t=dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xu(Error(T(422))),Wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zc({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=kd(o),e.memoizedState=Sd,s);if(!(e.mode&1))return Wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Xu(s,r,void 0),Wa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ut||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),Qt(r,t,i,-1))}return vp(),r=Xu(Error(T(421))),Wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=ar(i.nextSibling),Ct=e,he=!0,Ht=null,t!==null&&(bt[Rt++]=vn,bt[Rt++]=_n,bt[Rt++]=Gr,vn=t.id,_n=t.overflow,Gr=e),e=dp(e,r.children),e.flags|=4096,e)}function ny(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yd(t.return,e,n)}function Ju(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ny(t,n,e);else if(t.tag===19)ny(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ju(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bI(t,e,n){switch(e.tag){case 3:ew(e),qi();break;case 5:b0(e);break;case 1:pt(e.type)&&Pl(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?tw(t,e,n):(ae(pe,pe.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,J0(t,e,n)}return Pn(t,e,n)}var rw,Id,iw,sw;rw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};iw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(cn.current);var s=null;switch(n){case"input":i=Gh(t,i),r=Gh(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Qh(t,i),r=Qh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}Jh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RI(t,e,n){var r=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return pt(e.type)&&Rl(),Ge(e),null;case 3:return r=e.stateNode,Qi(),ce(ft),ce(Xe),op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Od(Ht),Ht=null))),Id(t,e),Ge(e),null;case 5:sp(e);var i=Mr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)iw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Ge(e),null}if(t=Mr(cn.current),za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[So]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)le(Hs[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":hm(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":fm(r,s),le("invalid",r)}Jh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,a,t),i=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Oa(r),dm(r,s,!0);break;case"textarea":Oa(r),pm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[So]=r,rw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zh(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)le(Hs[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":hm(t,r),i=Gh(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":fm(t,r),i=Qh(t,r),le("invalid",t);break;default:i=r}Jh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?D_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&po(t,l):typeof l=="number"&&po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Mf(t,s,l,o))}switch(n){case"input":Oa(t),dm(t,r,!1);break;case"textarea":Oa(t),pm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Mr(Io.current),Mr(cn.current),za(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return Ge(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&wt!==null&&e.mode&1&&!(e.flags&128))C0(),qi(),e.flags|=98560,s=!1;else if(s=za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[sn]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Ht!==null&&(Od(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Ne===0&&(Ne=3):vp())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Qi(),Id(t,e),t===null&&Eo(e.stateNode.containerInfo),Ge(e),null;case 10:return tp(e.type._context),Ge(e),null;case 17:return pt(e.type)&&Rl(),Ge(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ls(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fl(t),o!==null){for(e.flags|=128,Ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Ji&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Ge(e),null}else 2*Ce()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return yp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function PI(t,e){switch(Xf(e),e.tag){case 1:return pt(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),ce(ft),ce(Xe),op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sp(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return Qi(),null;case 10:return tp(e.type._context),null;case 22:case 23:return yp(),null;case 24:return null;default:return null}}var Ha=!1,qe=!1,AI=typeof WeakSet=="function"?WeakSet:Set,D=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function Td(t,e,n){try{n()}catch(r){ye(t,e,r)}}var ry=!1;function OI(t,e){if(cd=Tl,t=c0(),Yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:t,selectionRange:n},Tl=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,k=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vt(e.type,_),k);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){ye(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=ry,ry=!1,v}function no(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Td(e,n,s)}i=i.next}while(i!==r)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ow(t){var e=t.alternate;e!==null&&(t.alternate=null,ow(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[So],delete e[fd],delete e[gI],delete e[mI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aw(t){return t.tag===5||t.tag===3||t.tag===4}function iy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var Ue=null,Wt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)lw(t,e,n),n=n.sibling}function lw(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:qe||Ti(n,e);case 6:var r=Ue,i=Wt;Ue=null,Wn(t,e,n),Ue=r,Wt=i,Ue!==null&&(Wt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Wt?(t=Ue,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),vo(t)):Hu(Ue,n.stateNode));break;case 4:r=Ue,i=Wt,Ue=n.stateNode.containerInfo,Wt=!0,Wn(t,e,n),Ue=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Td(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!qe&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ye(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Wn(t,e,n),qe=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function sy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AI),e.forEach(function(r){var i=zI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Wt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Wt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(Ue===null)throw Error(T(160));lw(s,o,i),Ue=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cw(e,t),e=e.sibling}function cw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),tn(t),r&4){try{no(3,t,t.return),jc(3,t)}catch(_){ye(t,t.return,_)}try{no(5,t,t.return)}catch(_){ye(t,t.return,_)}}break;case 1:zt(e,t),tn(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(zt(e,t),tn(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var i=t.stateNode;try{po(i,"")}catch(_){ye(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&R_(i,s),Zh(a,o);var c=Zh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?D_(i,h):u==="dangerouslySetInnerHTML"?O_(i,h):u==="children"?po(i,h):Mf(i,u,h,c)}switch(a){case"input":qh(i,s);break;case"textarea":P_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Pi(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[So]=s}catch(_){ye(t,t.return,_)}}break;case 6:if(zt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ye(t,t.return,_)}}break;case 3:if(zt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(_){ye(t,t.return,_)}break;case 4:zt(e,t),tn(t);break;case 13:zt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gp=Ce())),r&4&&sy(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(c=qe)||u,zt(e,t),qe=c):zt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(D=t,u=t.child;u!==null;){for(h=D=u;D!==null;){switch(f=D,m=f.child,f.tag){case 0:case 11:case 14:case 15:no(4,f,f.return);break;case 1:Ti(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ye(r,n,_)}}break;case 5:Ti(f,f.return);break;case 22:if(f.memoizedState!==null){ay(h);continue}}m!==null?(m.return=f,D=m):ay(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=L_("display",o))}catch(_){ye(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){ye(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zt(e,t),tn(t),r&4&&sy(t);break;case 21:break;default:zt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aw(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(po(i,""),r.flags&=-33);var s=iy(t);bd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iy(t);Nd(t,a,o);break;default:throw Error(T(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LI(t,e,n){D=t,uw(t)}function uw(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ha;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=Ha;var c=qe;if(Ha=o,(qe=l)&&!c)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?ly(i):l!==null?(l.return=o,D=l):ly(i);for(;s!==null;)D=s,uw(s),s=s.sibling;D=i,Ha=a,qe=c}oy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):oy(t)}}function oy(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&vo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}qe||e.flags&512&&xd(e)}catch(f){ye(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function ay(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function ly(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(l){ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ye(e,i,l)}}var s=e.return;try{xd(e)}catch(l){ye(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){ye(e,o,l)}}}catch(l){ye(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var DI=Math.ceil,jl=Dn.ReactCurrentDispatcher,fp=Dn.ReactCurrentOwner,Lt=Dn.ReactCurrentBatchConfig,J=0,Me=null,ke=null,ze=0,yt=0,xi=Cr(0),Ne=0,bo=null,Yr=0,Bc=0,pp=0,ro=null,lt=null,gp=0,Ji=1/0,mn=null,Bl=!1,Rd=null,cr=null,Ka=!1,tr=null,zl=0,io=0,Pd=null,dl=-1,fl=0;function rt(){return J&6?Ce():dl!==-1?dl:dl=Ce()}function ur(t){return t.mode&1?J&2&&ze!==0?ze&-ze:vI.transition!==null?(fl===0&&(fl=G_()),fl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function Qt(t,e,n,r){if(50<io)throw io=0,Pd=null,Error(T(185));Zo(t,n,r),(!(J&2)||t!==Me)&&(t===Me&&(!(J&2)&&(Bc|=n),Ne===4&&Yn(t,ze)),gt(t,r),n===1&&J===0&&!(e.mode&1)&&(Ji=Ce()+500,Fc&&Sr()))}function gt(t,e){var n=t.callbackNode;vk(t,e);var r=Il(t,t===Me?ze:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?yI(cy.bind(null,t)):_0(cy.bind(null,t)),fI(function(){!(J&6)&&Sr()}),n=null;else{switch(q_(r)){case 1:n=Bf;break;case 4:n=H_;break;case 16:n=kl;break;case 536870912:n=K_;break;default:n=kl}n=vw(n,hw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hw(t,e){if(dl=-1,fl=0,J&6)throw Error(T(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=Il(t,t===Me?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var i=J;J|=2;var s=fw();(Me!==t||ze!==e)&&(mn=null,Ji=Ce()+500,Br(t,e));do try{$I();break}catch(a){dw(t,a)}while(1);ep(),jl.current=s,J=i,ke!==null?e=0:(Me=null,ze=0,e=Ne)}if(e!==0){if(e===2&&(i=id(t),i!==0&&(r=i,e=Ad(t,i))),e===1)throw n=bo,Br(t,0),Yn(t,r),gt(t,Ce()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MI(i)&&(e=Vl(t,r),e===2&&(s=id(t),s!==0&&(r=s,e=Ad(t,s))),e===1))throw n=bo,Br(t,0),Yn(t,r),gt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:br(t,lt,mn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=gp+500-Ce(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dd(br.bind(null,t,lt,mn),e);break}br(t,lt,mn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DI(r/1960))-r,10<r){t.timeoutHandle=dd(br.bind(null,t,lt,mn),r);break}br(t,lt,mn);break;case 5:br(t,lt,mn);break;default:throw Error(T(329))}}}return gt(t,Ce()),t.callbackNode===n?hw.bind(null,t):null}function Ad(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=lt,lt=n,e!==null&&Od(e)),t}function Od(t){lt===null?lt=t:lt.push.apply(lt,t)}function MI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~pp,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function cy(t){if(J&6)throw Error(T(327));Mi();var e=Il(t,0);if(!(e&1))return gt(t,Ce()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=id(t);r!==0&&(e=r,n=Ad(t,r))}if(n===1)throw n=bo,Br(t,0),Yn(t,e),gt(t,Ce()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,lt,mn),gt(t,Ce()),null}function mp(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(Ji=Ce()+500,Fc&&Sr())}}function Qr(t){tr!==null&&tr.tag===0&&!(J&6)&&Mi();var e=J;J|=1;var n=Lt.transition,r=ne;try{if(Lt.transition=null,ne=1,t)return t()}finally{ne=r,Lt.transition=n,J=e,!(J&6)&&Sr()}}function yp(){yt=xi.current,ce(xi)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dI(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:Qi(),ce(ft),ce(Xe),op();break;case 5:sp(r);break;case 4:Qi();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:tp(r.type._context);break;case 22:case 23:yp()}n=n.return}if(Me=t,ke=t=hr(t.current,null),ze=yt=e,Ne=0,bo=null,pp=Bc=Yr=0,lt=ro=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function dw(t,e){do{var n=ke;try{if(ep(),cl.current=Ul,$l){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$l=!1}if(qr=0,Ae=xe=ge=null,to=!1,To=0,fp.current=null,n===null||n.return===null){Ne=1,bo=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Qm(o);if(m!==null){m.flags&=-257,Xm(m,o,a,s,e),m.mode&1&&Ym(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Ym(s,c,e),vp();break e}l=Error(T(426))}}else if(he&&a.mode&1){var k=Qm(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Xm(k,o,a,s,e),Jf(Xi(l,a));break e}}s=l=Xi(l,a),Ne!==4&&(Ne=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Y0(s,l,e);zm(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cr===null||!cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Q0(s,a,e);zm(s,E);break e}}s=s.return}while(s!==null)}gw(n)}catch(N){e=N,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function fw(){var t=jl.current;return jl.current=Ul,t===null?Ul:t}function vp(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Me===null||!(Yr&268435455)&&!(Bc&268435455)||Yn(Me,ze)}function Vl(t,e){var n=J;J|=2;var r=fw();(Me!==t||ze!==e)&&(mn=null,Br(t,e));do try{FI();break}catch(i){dw(t,i)}while(1);if(ep(),J=n,jl.current=r,ke!==null)throw Error(T(261));return Me=null,ze=0,Ne}function FI(){for(;ke!==null;)pw(ke)}function $I(){for(;ke!==null&&!ck();)pw(ke)}function pw(t){var e=yw(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?gw(t):ke=e,fp.current=null}function gw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PI(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,ke=null;return}}else if(n=RI(n,e,yt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ne===0&&(Ne=5)}function br(t,e,n){var r=ne,i=Lt.transition;try{Lt.transition=null,ne=1,UI(t,e,n,r)}finally{Lt.transition=i,ne=r}return null}function UI(t,e,n,r){do Mi();while(tr!==null);if(J&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_k(t,s),t===Me&&(ke=Me=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,vw(kl,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ne;ne=1;var a=J;J|=4,fp.current=null,OI(t,n),cw(n,t),sI(ud),Tl=!!cd,ud=cd=null,t.current=n,LI(n),uk(),J=a,ne=o,Lt.transition=s}else t.current=n;if(Ka&&(Ka=!1,tr=t,zl=i),s=t.pendingLanes,s===0&&(cr=null),fk(n.stateNode),gt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bl)throw Bl=!1,t=Rd,Rd=null,t;return zl&1&&t.tag!==0&&Mi(),s=t.pendingLanes,s&1?t===Pd?io++:(io=0,Pd=t):io=0,Sr(),null}function Mi(){if(tr!==null){var t=q_(zl),e=Lt.transition,n=ne;try{if(Lt.transition=null,ne=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,zl=0,J&6)throw Error(T(331));var i=J;for(J|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var u=D;switch(u.tag){case 0:case 11:case 15:no(8,u,s)}var h=u.child;if(h!==null)h.return=u,D=h;else for(;D!==null;){u=D;var f=u.sibling,m=u.return;if(ow(u),u===c){D=null;break}if(f!==null){f.return=m,D=f;break}D=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:no(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(N){ye(a,a.return,N)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(J=i,Sr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ac,t)}catch{}r=!0}return r}finally{ne=n,Lt.transition=e}}return!1}function uy(t,e,n){e=Xi(n,e),e=Y0(t,e,1),t=lr(t,e,1),e=rt(),t!==null&&(Zo(t,1,e),gt(t,e))}function ye(t,e,n){if(t.tag===3)uy(t,t,n);else for(;e!==null;){if(e.tag===3){uy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=Xi(n,t),t=Q0(e,t,1),e=lr(e,t,1),t=rt(),e!==null&&(Zo(e,1,t),gt(e,t));break}}e=e.return}}function jI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>Ce()-gp?Br(t,0):pp|=n),gt(t,e)}function mw(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=rt();t=Rn(t,e),t!==null&&(Zo(t,e,n),gt(t,n))}function BI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mw(t,n)}function zI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),mw(t,n)}var yw;yw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,bI(t,e,n);ut=!!(t.flags&131072)}else ut=!1,he&&e.flags&1048576&&w0(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=Gi(e,Xe.current);Di(e,n),i=lp(null,e,r,t,i,n);var s=cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,Pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rp(e),i.updater=$c,e.stateNode=i,i._reactInternals=e,_d(e,r,t,n),e=Cd(null,e,r,!0,s,n)):(e.tag=0,he&&s&&Qf(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WI(r),t=Vt(r,t),i){case 0:e=Ed(null,e,r,t,n);break e;case 1:e=ey(null,e,r,t,n);break e;case 11:e=Jm(null,e,r,t,n);break e;case 14:e=Zm(null,e,r,Vt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ey(t,e,r,i,n);case 3:e:{if(ew(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,k0(t,e),Ml(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(T(423)),e),e=ty(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(T(424)),e),e=ty(t,e,r,n,i);break e}else for(wt=ar(e.stateNode.containerInfo.firstChild),Ct=e,he=!0,Ht=null,n=N0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Pn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return b0(e),t===null&&md(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hd(r,i)?o=null:s!==null&&hd(r,s)&&(e.flags|=32),Z0(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&md(e),null;case 13:return tw(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Jm(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Ll,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!ft.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=In(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Dt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Zm(t,e,r,i,n);case 15:return X0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),hl(t,e),e.tag=1,pt(r)?(t=!0,Pl(e)):t=!1,Di(e,n),T0(e,r,i),_d(e,r,i,n),Cd(null,e,r,!0,t,n);case 19:return nw(t,e,n);case 22:return J0(t,e,n)}throw Error(T(156,e.tag))};function vw(t,e){return W_(t,e)}function VI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new VI(t,e,n,r)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WI(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$f)return 11;if(t===Uf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return zr(n.children,i,s,e);case Ff:o=8,i|=8;break;case Vh:return t=At(12,n,e,i|2),t.elementType=Vh,t.lanes=s,t;case Wh:return t=At(13,n,e,i),t.elementType=Wh,t.lanes=s,t;case Hh:return t=At(19,n,e,i),t.elementType=Hh,t.lanes=s,t;case x_:return zc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I_:o=10;break e;case T_:o=9;break e;case $f:o=11;break e;case Uf:o=14;break e;case Kn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function zc(t,e,n,r){return t=At(22,t,r,e),t.elementType=x_,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function eh(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wp(t,e,n,r,i,s,o,a,l){return t=new HI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function KI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _w(t){if(!t)return vr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(pt(n))return v0(t,n,e)}return e}function ww(t,e,n,r,i,s,o,a,l){return t=wp(n,r,!0,t,i,s,o,a,l),t.context=_w(null),n=t.current,r=rt(),i=ur(n),s=In(r,i),s.callback=e??null,lr(n,s,i),t.current.lanes=i,Zo(t,i,r),gt(t,r),t}function Vc(t,e,n,r){var i=e.current,s=rt(),o=ur(i);return n=_w(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&(Qt(t,i,o,s),ll(t,i,o)),o}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ep(t,e){hy(t,e),(t=t.alternate)&&hy(t,e)}function GI(){return null}var Ew=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}Wc.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Vc(t,e,null,null)};Wc.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Vc(null,t,null,null)}),e[bn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=X_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&Z_(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dy(){}function qI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wl(o);s.call(c)}}var o=ww(e,r,t,0,null,!1,!1,"",dy);return t._reactRootContainer=o,t[bn]=o.current,Eo(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Wl(l);a.call(c)}}var l=wp(t,0,!1,null,null,!1,!1,"",dy);return t._reactRootContainer=l,t[bn]=l.current,Eo(t.nodeType===8?t.parentNode:t),Qr(function(){Vc(e,l,n,r)}),l}function Kc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wl(o);a.call(l)}}Vc(e,o,t,i)}else o=qI(n,e,t,i,r);return Wl(o)}Y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(zf(e,n|1),gt(e,Ce()),!(J&6)&&(Ji=Ce()+500,Sr()))}break;case 13:Qr(function(){var r=Rn(t,1);if(r!==null){var i=rt();Qt(r,t,1,i)}}),Ep(t,1)}};Vf=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=rt();Qt(e,t,134217728,n)}Ep(t,134217728)}};Q_=function(t){if(t.tag===13){var e=ur(t),n=Rn(t,e);if(n!==null){var r=rt();Qt(n,t,e,r)}Ep(t,e)}};X_=function(){return ne};J_=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};td=function(t,e,n){switch(e){case"input":if(qh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Mc(r);if(!i)throw Error(T(90));b_(r),qh(r,i)}}}break;case"textarea":P_(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};$_=mp;U_=Qr;var YI={usingClientEntryPoint:!1,Events:[ta,Ei,Mc,M_,F_,mp]},Ds={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QI={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||GI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Ac=Ga.inject(QI),ln=Ga}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YI;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(T(200));return KI(t,e,null,n)};It.createRoot=function(t,e){if(!Sp(t))throw Error(T(299));var n=!1,r="",i=Ew;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wp(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,Eo(t.nodeType===8?t.parentNode:t),new Cp(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=z_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Qr(t)};It.hydrate=function(t,e,n){if(!Hc(e))throw Error(T(200));return Kc(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ew;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ww(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,Eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wc(e)};It.render=function(t,e,n){if(!Hc(e))throw Error(T(200));return Kc(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(T(40));return t._reactRootContainer?(Qr(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};It.unstable_batchedUpdates=mp;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Kc(t,e,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=It})(GS);var fy=jh;Uh.createRoot=fy.createRoot,Uh.hydrateRoot=fy.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ro.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const py="popstate";function XI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ld("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Hl(i)}return ZI(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JI(){return Math.random().toString(36).substr(2,8)}function gy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ld(t,e,n,r){return n===void 0&&(n=null),Ro({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ds(e):e,{state:n,key:e&&e.key||r||JI()})}function Hl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Ro({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=nr.Pop;let k=u(),g=k==null?null:k-c;c=k,l&&l({action:a,location:_.location,delta:g})}function f(k,g){a=nr.Push;let p=Ld(_.location,k,g);n&&n(p,k),c=u()+1;let y=gy(p,c),E=_.createHref(p);try{o.pushState(y,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(k,g){a=nr.Replace;let p=Ld(_.location,k,g);n&&n(p,k),c=u();let y=gy(p,c),E=_.createHref(p);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof k=="string"?k:Hl(k);return be(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(py,h),l=k,()=>{i.removeEventListener(py,h),l=null}},createHref(k){return e(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(k){return o.go(k)}};return _}var my;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(my||(my={}));function eT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ds(e):e,i=Ip(r.pathname||"/",n);if(i==null)return null;let s=Cw(t);tT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=uT(s[a],fT(i));return o}function Cw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=dr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cw(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:lT(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Sw(s.path))i(s,o,l)}),e}function Sw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Sw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nT=/^:\w+$/,rT=3,iT=2,sT=1,oT=10,aT=-2,yy=t=>t==="*";function lT(t,e){let n=t.split("/"),r=n.length;return n.some(yy)&&(r+=aT),e&&(r+=iT),n.filter(i=>!yy(i)).reduce((i,s)=>i+(nT.test(s)?rT:s===""?sT:oT),r)}function cT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=hT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let h=a.route;s.push({params:r,pathname:dr([i,u.pathname]),pathnameBase:yT(dr([i,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(i=dr([i,u.pathnameBase]))}return s}function hT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,h)=>{if(u==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=pT(a[h]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function dT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fT(t){try{return decodeURI(t)}catch(e){return kp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function pT(t,e){try{return decodeURIComponent(t)}catch(n){return kp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ip(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function gT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ds(t):t;return{pathname:n?n.startsWith("/")?n:mT(n,e):e,search:vT(r),hash:_T(i)}}function mT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Iw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ds(t):(i=Ro({},t),be(!i.pathname||!i.pathname.includes("?"),th("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),th("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),th("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=gT(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),yT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_T=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ET(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const CT=typeof Object.is=="function"?Object.is:ET,{useState:ST,useEffect:kT,useLayoutEffect:IT,useDebugValue:TT}=$h;function xT(t,e,n){const r=e(),[{inst:i},s]=ST({inst:{value:r,getSnapshot:e}});return IT(()=>{i.value=r,i.getSnapshot=e,nh(i)&&s({inst:i})},[t,r,e]),kT(()=>(nh(i)&&s({inst:i}),t(()=>{nh(i)&&s({inst:i})})),[t]),TT(r),r}function nh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!CT(n,r)}catch{return!0}}function NT(t,e,n){return e()}const bT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RT=!bT,PT=RT?NT:xT;"useSyncExternalStore"in $h&&(t=>t.useSyncExternalStore)($h);const Tw=S.createContext(null),xw=S.createContext(null),ra=S.createContext(null),Gc=S.createContext(null),li=S.createContext({outlet:null,matches:[]}),Nw=S.createContext(null);function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dd.apply(this,arguments)}function AT(t,e){let{relative:n}=e===void 0?{}:e;ia()||be(!1);let{basename:r,navigator:i}=S.useContext(ra),{hash:s,pathname:o,search:a}=Rw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ia(){return S.useContext(Gc)!=null}function qc(){return ia()||be(!1),S.useContext(Gc).location}function fs(){ia()||be(!1);let{basename:t,navigator:e}=S.useContext(ra),{matches:n}=S.useContext(li),{pathname:r}=qc(),i=JSON.stringify(kw(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=Iw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function bw(){let{matches:t}=S.useContext(li),e=t[t.length-1];return e?e.params:{}}function Rw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(li),{pathname:i}=qc(),s=JSON.stringify(kw(r).map(o=>o.pathnameBase));return S.useMemo(()=>Iw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function OT(t,e){ia()||be(!1);let{navigator:n}=S.useContext(ra),r=S.useContext(xw),{matches:i}=S.useContext(li),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qc(),c;if(e){var u;let _=typeof e=="string"?ds(e):e;a==="/"||(u=_.pathname)!=null&&u.startsWith(a)||be(!1),c=_}else c=l;let h=c.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",m=eT(t,{pathname:f}),v=FT(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:dr([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:dr([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&v?S.createElement(Gc.Provider,{value:{location:Dd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nr.Pop}},v):v}function LT(){let t=BT(),e=wT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class DT extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(li.Provider,{value:this.props.routeContext},S.createElement(Nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MT(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Tw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(li.Provider,{value:e},r)}function FT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||be(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=S.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=S.createElement(LT,null));let u=e.concat(r.slice(0,a+1)),h=()=>{let f=s;return l?f=c:o.route.Component?f=S.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),S.createElement(MT,{match:o,routeContext:{outlet:s,matches:u},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?S.createElement(DT,{location:n.location,component:c,error:l,children:h(),routeContext:{outlet:null,matches:u}}):h()},null)}var vy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(vy||(vy={}));var Kl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Kl||(Kl={}));function $T(t){let e=S.useContext(xw);return e||be(!1),e}function UT(t){let e=S.useContext(li);return e||be(!1),e}function jT(t){let e=UT(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function BT(){var t;let e=S.useContext(Nw),n=$T(Kl.UseRouteError),r=jT(Kl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function nn(t){be(!1)}function zT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nr.Pop,navigator:s,static:o=!1}=t;ia()&&be(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ds(r));let{pathname:c="/",search:u="",hash:h="",state:f=null,key:m="default"}=r,v=S.useMemo(()=>{let _=Ip(c,a);return _==null?null:{location:{pathname:_,search:u,hash:h,state:f,key:m},navigationType:i}},[a,c,u,h,f,m,i]);return v==null?null:S.createElement(ra.Provider,{value:l},S.createElement(Gc.Provider,{children:n,value:v}))}function VT(t){let{children:e,location:n}=t,r=S.useContext(Tw),i=r&&!e?r.router.routes:Md(e);return OT(i,n)}var _y;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(_y||(_y={}));new Promise(()=>{});function Md(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Md(r.props.children,s));return}r.type!==nn&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Md(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fd(){return Fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fd.apply(this,arguments)}function WT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function HT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function KT(t,e){return t.button===0&&(!e||e==="_self")&&!HT(t)}const GT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qT(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=XI({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(zT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const YT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gl=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,h=WT(e,GT),{basename:f}=S.useContext(ra),m,v=!1;if(typeof c=="string"&&QT.test(c)&&(m=c,YT)){let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=Ip(y.pathname,f);y.origin===p.origin&&E!=null?c=E+y.search+y.hash:v=!0}let _=AT(c,{relative:i}),k=XT(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i});function g(p){r&&r(p),p.defaultPrevented||k(p)}return S.createElement("a",Fd({},h,{href:m||_,onClick:v||s?r:g,ref:n,target:l}))});var wy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(wy||(wy={}));var Ey;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ey||(Ey={}));function XT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=fs(),l=qc(),c=Rw(t,{relative:o});return S.useCallback(u=>{if(KT(u,n)){u.preventDefault();let h=r!==void 0?r:Hl(l)===Hl(c);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}function JT(){return C("section",{className:"h-screen bg-gif",children:[d("aside",{className:"h-screen p-4 bg-fig-gr",id:"js-animate"}),d("style",{children:`
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
					`})]})}const ql="/assets/logo_btc-red-5b50bde2.svg";function Zi({image:t,logo:e,classLogo:n}){return C("a",{href:"/",className:"flex items-baseline title-font font-medium items-center text-gray-900 md:mb-0 lg:order-none",children:[d("svg",{x:"0px",y:"0px",width:"27px",height:"27px",viewBox:"0 0 90 90",children:d("image",{id:"image0",width:"90",height:"90",x:"0",y:"0",href:t})}),d("span",{className:n+" ml-1 text-5xl font-semibold leading-3",children:e})]})}function ZT(){return C("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40",children:[d("article",{className:"col-span-2",children:C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 ",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Navigation"}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/services",children:"Services"})}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/work",children:"Work"})}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/thoughts",children:"Thoughts"})}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/connect",children:"Connect"})})]})}),C("aside",{children:[C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Behind The Scenes"}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/about",children:"About Us"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/news",children:"News"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/jobs",children:"Jobs"})})]}),C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Offices"}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/",children:"BTC Americas"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/price-travel",children:"Price Travel"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/big-fish",children:"Big Fish"})})]}),C("aside",{className:"font-semibold px-8 text-gray-100",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Connect Us"}),C("ul",{className:"flex justify-start font-semibold text-gray-100 pr-6",children:[d("li",{className:"lg:my-1 lg:text-3xl py-2",children:d("a",{href:"https://www.facebook.com/BTCamericas",className:"pr-10",children:d("span",{className:"facebook hover:animate-pulse"})})}),d("li",{className:"lg:my-1 lg:text-3xl py-2",children:d("a",{href:"https://www.instagram.com/btcamericas/",className:"pr-10",children:d("span",{className:"instagram hover:animate-pulse"})})}),d("li",{className:"lg:my-1 lg:text-3xl py-2",children:d("a",{href:"https://twitter.com/BTCamericas",className:"pr-10",children:d("span",{className:"twitter hover:animate-pulse"})})}),d("li",{className:"lg:my-1 lg:text-3xl py-2",children:d("a",{href:"https://www.linkedin.com/company/btcamericas",className:"pr-10",children:d("span",{className:"linkedin hover:animate-pulse"})})})]})]})]}),d("style",{children:`
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
				`})]})}function ex(){const[t,e]=S.useState(!1);return C("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[d(Zi,{image:ql,classLogo:"text-gray-100",logo:"btc"}),C("nav",{className:"flex",children:[C("section",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus",onClick:()=>e(n=>!n),children:[d("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),d("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),d("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]}),d("section",{className:t?"showMenuNav":"hideMenuNav",children:C("div",{className:"h-full",children:[C("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>e(!1),children:[d(Zi,{image:ql,classLogo:"text-gray-100",logo:"btc"}),C("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>e(n=>!n),children:[d("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),d("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),d("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),d(ZT,{})]})})]}),d("style",{children:`
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
					`})]})}const Pw="/assets/logo_btc-9ca3af-8c3102c8.svg";function Fi({section:t,liOne:e,liTwo:n,liThree:r,liFourHref:i,liFour:s,classN:o}){return C("ul",{className:o+" text-gray-100 py-2 px-8 border-l border-gray-400",children:[d("h5",{className:"text-2xl font-semibold text-gray-400",children:"Company"}),d("li",{className:"",children:d("a",{href:"/",children:t})}),d("li",{className:"",children:d("a",{href:"/",children:e})}),d("li",{className:"",children:d("a",{href:"/",children:n})}),d("li",{className:"",children:d("a",{href:"/",children:r})}),d("li",{className:"",children:d("a",{href:i,children:s})})]})}function tx(){return C("footer",{className:"border-t border-gray-400 py-8 px-8 lg:px-40",children:[C("section",{className:"flex flex-wrap items-center justify-between",children:[d(Zi,{image:Pw,classLogo:"text-gray-400",logo:"btc"}),C("aside",{className:"flex flex-wrap",children:[d(Fi,{is:!0,classN:"md:border-none",section:"Company",liOne:"About us",liTwo:"Legal",liThree:"Career",liFour:"Contact"}),d(Fi,{section:"Services",liOne:"Pricing",liTwo:"Products",liThree:"Customers",liFour:"Success Stories"}),d(Fi,{section:"Support",liOne:"About us",liTwo:"Legal",liThree:"Career",liFourHref:"/login",liFour:"Log In"})]})]}),d("section",{className:"flex items-center flex-start text-gray-50",children:C("p",{children:["© Business Travel Consulting ",d("span",{id:"current-year"})," - All rights reserved · Privacy Policy"]})}),d("style",{children:`
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
					`})]})}function ps(t){return C("div",{className:"bg-[#000c1a]",children:[d(ex,{}),t.children,d(tx,{})]})}function nx(){return d("div",{children:d(ps,{children:d(JT,{})})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw gs(e)},gs=function(t){return new Error("Firebase Database ("+Aw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new ix;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ix extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lw=function(t){const e=Ow(t);return Tp.encodeByteArray(e,!0)},Yl=function(t){return Lw(t).replace(/\./g,"")},Ql=function(t){try{return Tp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return Dw(void 0,t)}function Dw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ox(n)||(t[n]=Dw(t[n],e[n]));return t}function ox(t){return t!=="__proto__"}/**
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
 */function ax(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lx=()=>ax().__FIREBASE_DEFAULTS__,cx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ux=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ql(t[1]);return e&&JSON.parse(e)},xp=()=>{try{return lx()||cx()||ux()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mw=t=>{var e,n;return(n=(e=xp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hx=t=>{const e=Mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fw=()=>{var t;return(t=xp())===null||t===void 0?void 0:t.config},$w=t=>{var e;return(e=xp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yl(JSON.stringify(n)),Yl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function fx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function px(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jw(){return Aw.NODE_ADMIN===!0}function Bw(){try{return typeof indexedDB=="object"}catch{return!1}}function gx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mx,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ut(i,a,r)}}function yx(t,e){return t.replace(vx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Po(Ql(s[0])||""),n=Po(Ql(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_x=function(t){const e=zw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wx=function(t){const e=zw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function es(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cy(s)&&Cy(o)){if(!Jl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Cx(t,e){const n=new Sx(t,e);return n.subscribe.bind(n)}class Sx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rh),i.error===void 0&&(i.error=rh),i.complete===void 0&&(i.complete=rh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rh(){}function Yc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Tx=1e3,xx=2,Nx=4*60*60*1e3,bx=.5;function Rx(t,e=Tx,n=xx){const r=e*Math.pow(n,t),i=Math.round(bx*r*(Math.random()-.5)*2);return Math.min(Nx,r+i)}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class Px{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ox(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ax(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ax(t){return t===Rr?void 0:t}function Ox(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Px(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Dx={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Mx=ee.INFO,Fx={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},$x=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=Mx,this._logHandler=$x,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Ux=(t,e)=>e.some(n=>t instanceof n);let Sy,ky;function jx(){return Sy||(Sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bx(){return ky||(ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vw=new WeakMap,Ud=new WeakMap,Ww=new WeakMap,ih=new WeakMap,bp=new WeakMap;function zx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vw.set(n,t)}).catch(()=>{}),bp.set(e,t),e}function Vx(t){if(Ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ud.set(t,e)}let jd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wx(t){jd=t(jd)}function Hx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),fr(r)}:Bx().includes(t)?function(...e){return t.apply(sh(this),e),fr(Vw.get(this))}:function(...e){return fr(t.apply(sh(this),e))}}function Kx(t){return typeof t=="function"?Hx(t):(t instanceof IDBTransaction&&Vx(t),Ux(t,jx())?new Proxy(t,jd):t)}function fr(t){if(t instanceof IDBRequest)return zx(t);if(ih.has(t))return ih.get(t);const e=Kx(t);return e!==t&&(ih.set(t,e),bp.set(e,t)),e}const sh=t=>bp.get(t);function Gx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fr(o.result),l.oldVersion,l.newVersion,fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qx=["get","getKey","getAll","getAllKeys","count"],Yx=["put","add","delete","clear"],oh=new Map;function Iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Yx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return oh.set(e,s),s}Wx(t=>({...t,get:(e,n,r)=>Iy(e,n)||t.get(e,n,r),has:(e,n)=>!!Iy(e,n)||t.has(e,n)}));/**
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
 */class Qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",Ty="0.9.10";/**
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
 */const Xr=new oa("@firebase/app"),Jx="@firebase/app-compat",Zx="@firebase/analytics-compat",eN="@firebase/analytics",tN="@firebase/app-check-compat",nN="@firebase/app-check",rN="@firebase/auth",iN="@firebase/auth-compat",sN="@firebase/database",oN="@firebase/database-compat",aN="@firebase/functions",lN="@firebase/functions-compat",cN="@firebase/installations",uN="@firebase/installations-compat",hN="@firebase/messaging",dN="@firebase/messaging-compat",fN="@firebase/performance",pN="@firebase/performance-compat",gN="@firebase/remote-config",mN="@firebase/remote-config-compat",yN="@firebase/storage",vN="@firebase/storage-compat",_N="@firebase/firestore",wN="@firebase/firestore-compat",EN="firebase",CN="9.22.0";/**
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
 */const zd="[DEFAULT]",SN={[Bd]:"fire-core",[Jx]:"fire-core-compat",[eN]:"fire-analytics",[Zx]:"fire-analytics-compat",[nN]:"fire-app-check",[tN]:"fire-app-check-compat",[rN]:"fire-auth",[iN]:"fire-auth-compat",[sN]:"fire-rtdb",[oN]:"fire-rtdb-compat",[aN]:"fire-fn",[lN]:"fire-fn-compat",[cN]:"fire-iid",[uN]:"fire-iid-compat",[hN]:"fire-fcm",[dN]:"fire-fcm-compat",[fN]:"fire-perf",[pN]:"fire-perf-compat",[gN]:"fire-rc",[mN]:"fire-rc-compat",[yN]:"fire-gcs",[vN]:"fire-gcs-compat",[_N]:"fire-fst",[wN]:"fire-fst-compat","fire-js":"fire-js",[EN]:"fire-js-all"};/**
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
 */const Ao=new Map,Vd=new Map;function kN(t,e){try{t.container.addComponent(e)}catch(n){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(Vd.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of Ao.values())kN(n,t);return!0}function aa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const IN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pr=new ci("app","Firebase",IN);/**
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
 */class TN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mn=CN;function Hw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=Fw()),!n)throw pr.create("no-options");const s=Ao.get(i);if(s){if(Jl(n,s.options)&&Jl(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new Lx(i);for(const l of Vd.values())o.addComponent(l);const a=new TN(n,r,o);return Ao.set(i,a),a}function Kw(t=zd){const e=Ao.get(t);if(!e&&t===zd&&Fw())return Hw();if(!e)throw pr.create("no-app",{appName:t});return e}function xN(){return Array.from(Ao.values())}function Ie(t,e,n){var r;let i=(r=SN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(a.join(" "));return}Ft(new kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const NN="firebase-heartbeat-database",bN=1,Oo="firebase-heartbeat-store";let ah=null;function Gw(){return ah||(ah=Gx(NN,bN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oo)}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function RN(t){try{return await(await Gw()).transaction(Oo).objectStore(Oo).get(qw(t))}catch(e){if(e instanceof Ut)Xr.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xr.warn(n.message)}}}async function xy(t,e){try{const r=(await Gw()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,qw(t)),await r.done}catch(n){if(n instanceof Ut)Xr.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xr.warn(r.message)}}}function qw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PN=1024,AN=30*24*60*60*1e3;class ON{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ny();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=AN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ny(),{heartbeatsToSend:n,unsentEntries:r}=LN(this._heartbeatsCache.heartbeats),i=Yl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ny(){return new Date().toISOString().substring(0,10)}function LN(t,e=PN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),by(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),by(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bw()?gx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function by(t){return Yl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MN(t){Ft(new kt("platform-logger",e=>new Qx(e),"PRIVATE")),Ft(new kt("heartbeat",e=>new ON(e),"PRIVATE")),Ie(Bd,Ty,t),Ie(Bd,Ty,"esm2017"),Ie("fire-js","")}MN("");const Ry="@firebase/database",Py="0.14.4";/**
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
 */let Yw="";function FN(t){Yw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $N(e)}}catch{}return new UN},Fr=Qw("localStorage"),Wd=Qw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new oa("@firebase/database"),jN=function(){let t=1;return function(){return t++}}(),Xw=function(t){const e=Ix(t),n=new Ex;n.update(e);const r=n.digest();return Tp.encodeByteArray(r)},la=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=la.apply(null,r):typeof r=="object"?e+=De(r):e+=r,e+=" "}return e};let Vr=null,Ay=!0;const BN=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($i.logLevel=ee.VERBOSE,Vr=$i.log.bind($i),e&&Wd.set("logging_enabled",!0)):typeof t=="function"?Vr=t:(Vr=null,Wd.remove("logging_enabled"))},je=function(...t){if(Ay===!0&&(Ay=!1,Vr===null&&Wd.get("logging_enabled")===!0&&BN(!0)),Vr){const e=la.apply(null,t);Vr(e)}},ca=function(t){return function(...e){je(t,...e)}},Hd=function(...t){const e="FIREBASE INTERNAL ERROR: "+la(...t);$i.error(e)},An=function(...t){const e=`FIREBASE FATAL ERROR: ${la(...t)}`;throw $i.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+la(...t);$i.warn(e)},zN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},VN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ts="[MIN_NAME]",Jr="[MAX_NAME]",ui=function(t,e){if(t===e)return 0;if(t===ts||e===Jr)return-1;if(e===ts||t===Jr)return 1;{const n=Oy(t),r=Oy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WN=function(t,e){return t===e?0:t<e?-1:1},Ms=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},Pp=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=De(e[r]),n+=":",n+=Pp(t[e[r]]);return n+="}",n},Jw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zw=function(t){x(!Rp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},HN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function GN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const qN=new RegExp("^-?(0*)\\d{1,10}$"),YN=-2147483648,QN=2147483647,Oy=function(t){if(qN.test(t)){const e=Number(t);if(e>=YN&&e<=QN)return e}return null},ys=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},XN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},so=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class JN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class Ui{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ui.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="5",e1="v",t1="s",n1="r",r1="f",i1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s1="ls",o1="p",Kd="ac",a1="websocket",l1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function u1(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===a1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===l1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eb(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.counters_={}}incrementCounter(e,n=1){pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={},ch={};function Op(t){const e=t.toString();return lh[e]||(lh[e]=new tb),lh[e]}function nb(t,e){const n=t.toString();return ch[n]||(ch[n]=e()),ch[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ys(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="start",ib="close",sb="pLPCommand",ob="pRTLPCB",h1="id",d1="pw",f1="ser",ab="cb",lb="seg",cb="ts",ub="d",hb="dframe",p1=1870,g1=30,db=p1-g1,fb=25e3,pb=3e4;class Ni{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ca(e),this.stats_=Op(n),this.urlFn=l=>(this.appCheckToken&&(l[Kd]=this.appCheckToken),u1(n,l1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pb)),VN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lp((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ly)this.id=a,this.password=l;else if(o===ib)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ly]="t",r[f1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ab]=this.scriptTagHolder.uniqueCallbackIdentifier),r[e1]=Ap,this.transportSessionId&&(r[t1]=this.transportSessionId),this.lastSessionId&&(r[s1]=this.lastSessionId),this.applicationId&&(r[o1]=this.applicationId),this.appCheckToken&&(r[Kd]=this.appCheckToken),typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(r[n1]=r1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ni.forceAllow_=!0}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){return Ni.forceAllow_?!0:!Ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HN()&&!KN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Lw(n),i=Jw(r,db);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[hb]="t",r[h1]=e,r[d1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jN(),window[sb+this.uniqueCallbackIdentifier]=e,window[ob+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[h1]=this.myID,e[d1]=this.myPW,e[f1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+g1+r.length<=p1;){const o=this.pendingSegs.shift();r=r+"&"+lb+i+"="+o.seg+"&"+cb+i+"="+o.ts+"&"+ub+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=16384,mb=45e3;let Zl=null;typeof MozWebSocket<"u"?Zl=MozWebSocket:typeof WebSocket<"u"&&(Zl=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ca(this.connId),this.stats_=Op(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[e1]=Ap,typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(o[n1]=r1),n&&(o[t1]=n),r&&(o[s1]=r),i&&(o[Kd]=i),s&&(o[o1]=s),u1(e,a1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fr.set("previous_websocket_failure",!0);try{let r;jw(),this.mySock=new Zl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Zl!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Fr.isInMemoryStorage||Fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Po(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jw(n,gb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ni,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of Lo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=6e4,vb=5e3,_b=10*1024,wb=100*1024,uh="t",Dy="d",Eb="s",My="r",Cb="e",Fy="o",$y="a",Uy="n",jy="p",Sb="h";class kb{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ca("c:"+this.id+":"),this.transportManager_=new Lo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=so(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_b?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uh in e){const n=e[uh];n===$y?this.upgradeIfSecondaryHealthy_():n===My?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ms("t",e),r=Ms("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$y,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ms("t",e),r=Ms("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ms(uh,e);if(Dy in e){const r=e[Dy];if(n===Sb){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Eb?this.onConnectionShutdown_(r):n===My?this.onReset_(r):n===Cb?Hd("Server Error: "+r):n===Fy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ap!==r&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),so(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):so(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends y1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Np()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ec}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=32,zy=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new ie("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _r(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Dp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ib(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Do(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function v1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ie(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function ht(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return ht(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Tb(t,e){const n=Do(t,0),r=Do(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ui(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Mp(t,e){if(_r(t)!==_r(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_r(t)>_r(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class xb{constructor(e,n){this.errorPrefix_=n,this.parts_=Do(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Qc(this.parts_[r]);_1(this)}}function Nb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qc(e),_1(t)}function bb(t){const e=t.parts_.pop();t.byteLength_-=Qc(e),t.parts_.length>0&&(t.byteLength_-=1)}function _1(t){if(t.byteLength_>zy)throw new Error(t.errorPrefix_+"has a key path longer than "+zy+" bytes ("+t.byteLength_+").");if(t.parts_.length>By)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+By+") or object contains a cycle "+Pr(t))}function Pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends y1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Fp}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=1e3,Rb=60*5*1e3,Vy=30*1e3,Pb=1.3,Ab=3e4,Ob="server_kill",Wy=3;class Tn extends m1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Tn.nextPersistentConnectionId_++,this.log_=ca("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=Rb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ec.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(De(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new sa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Tn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pn(e,"w")){const r=es(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_x(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hd("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ab&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new kb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{it(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ob)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&it(h),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$d(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Pp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wy&&(this.reconnectDelay_=Vy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yw.replace(/\./g,"-")]=1,Np()?e["framework.cordova"]=1:Uw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ec.getInstance().currentlyOnline();return $d(this.interruptReasons_)&&e}}Tn.nextPersistentConnectionId_=0;Tn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(ts,e),i=new G(ts,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class w1 extends Xc{static get __EMPTY_NODE(){return qa}static set __EMPTY_NODE(e){qa=e}compare(e,n){return ui(e.name,n.name)}isDefinedOn(e){throw gs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Jr,qa)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,qa)}toString(){return".key"}}const ji=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??dt.EMPTY_NODE,this.right=s??dt.EMPTY_NODE}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class Lb{copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class dt{constructor(e,n=dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ya(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ya(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ya(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ya(this.root_,null,this.comparator_,!0,e)}}dt.EMPTY_NODE=new Lb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t,e){return ui(t.name,e.name)}function $p(t,e){return ui(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd;function Mb(t){Gd=t}const E1=function(t){return typeof t=="number"?"number:"+Zw(t):"string:"+t},C1=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pn(e,".sv"),"Priority must be a string or number.")}else x(t===Gd||t.isEmpty(),"priority of unexpected type.");x(t===Gd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),C1(this.priorityNode_)}static set __childrenNodeConstructor(e){Hy=e}static get __childrenNodeConstructor(){return Hy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:K(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||_r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+E1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zw(this.value_):e+=this.value_,this.lazyHash_=Xw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(n),s=Re.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S1,k1;function Fb(t){S1=t}function $b(t){k1=t}class Ub extends Xc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ui(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Jr,new Re("[PRIORITY-POST]",k1))}makePost(e,n){const r=S1(e);return new G(n,new Re("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new Ub;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=Math.log(2);class Bb{constructor(e){const n=s=>parseInt(Math.log(s)/jb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Oe(f,h.node,Oe.BLACK,null,null);{const m=parseInt(u/2,10)+l,v=i(l,m),_=i(m+1,c);return h=t[m],f=n?n(h):h,new Oe(f,h.node,Oe.BLACK,v,_)}},s=function(l){let c=null,u=null,h=t.length;const f=function(v,_){const k=h-v,g=h;h-=v;const p=i(k+1,g),y=t[k],E=n?n(y):y;m(new Oe(E,y.node,_,null,p))},m=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),k=Math.pow(2,l.count-(v+1));_?f(k,Oe.BLACK):(f(k,Oe.BLACK),f(k,Oe.RED))}return u},o=new Bb(t.length),a=s(o);return new dt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh;const pi={};class wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(pi&&_e,"ChildrenNode.ts has not been loaded"),hh=hh||new wn({".priority":pi},{".priority":_e}),hh}get(e){const n=es(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dt?n:null}hasIndex(e){return pn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=tc(r,e.getCompare()):a=pi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new wn(u,c)}addToIndexes(e,n){const r=Xl(this.indexes_,(i,s)=>{const o=es(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===pi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),tc(a,o.getCompare())}else return pi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Xl(this.indexes_,i=>{if(i===pi)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&C1(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new j(new dt($p),null,wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{x(K(e)!==".priority"||_r(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+E1(this.getPriority().val())+":"),this.forEachChild(_e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ua?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_e),i=n.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zb extends j{constructor(){super(new dt($p),j.EMPTY_NODE,wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const ua=new zb;Object.defineProperties(G,{MIN:{value:new G(ts,j.EMPTY_NODE)},MAX:{value:new G(Jr,ua)}});w1.__EMPTY_NODE=j.EMPTY_NODE;Re.__childrenNodeConstructor=j;Mb(ua);$b(ua);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=!0;function Le(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,Le(e))}if(!(t instanceof Array)&&Vb){const n=[];let r=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=tc(n,Db,o=>o.name,$p);if(r){const o=tc(n,_e.getCompare());return new j(s,Le(e),new wn({".priority":o},{".priority":_e}))}else return new j(s,Le(e),wn.Default)}else{let n=j.EMPTY_NODE;return He(t,(r,i)=>{if(pn(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}Fb(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb extends Xc{constructor(e){super(),this.indexPath_=e,x(!q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ui(e.name,n.name):s}makePost(e,n){const r=Le(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,ua);return new G(Jr,e)}toString(){return Do(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb extends Xc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ui(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=Le(e);return new G(n,r)}toString(){return".value"}}const Kb=new Hb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){return{type:"value",snapshotNode:t}}function ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Mo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Mo(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ns(n,r)):o.trackChildChange(Fo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Mo(i,s))}),n.isLeafNode()||n.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fo(i,s,o))}else r.trackChildChange(ns(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.indexedFilter_=new Up(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$o.getStartPost_(e),this.endPost_=$o.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(_e,(o,a)=>{s.matches(new G(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $o(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,m)=>h(m,f)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new G(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(u&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Fo(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Mo(n,h));const _=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ns(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Mo(c.name,c.node)),s.trackChildChange(ns(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ts}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new jp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yb(t){return t.loadsAllData()?new Up(t.getIndex()):t.hasLimit()?new qb(t):new $o(t)}function Ky(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===Kb?n="$value":t.index_===ji?n="$key":(x(t.index_ instanceof Wb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=De(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+De(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=De(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+De(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends m1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ca("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=nc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ky(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),es(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=nc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ky(e._queryParams),r=e._path.toString(),i=new sa;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ms(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Po(a.responseText)}catch{it("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){return{value:null,children:new Map}}function T1(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,rc());const i=t.children.get(r);e=oe(e),T1(i,e,n)}}function qd(t,e,n){t.value!==null?n(e,t.value):Xb(t,(r,i)=>{const s=new ie(e.toString()+"/"+r);qd(i,s,n)})}function Xb(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=10*1e3,Zb=30*1e3,eR=5*60*1e3;class tR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Jb(e);const r=qy+(Zb-qy)*Math.random();so(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&pn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),so(this.reportStats_.bind(this),Math.floor(Math.random()*2*eR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function Bp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Gt.ACK_USER_WRITE,this.source=Bp()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new ic(te(),n,this.revert)}}else return x(K(this.path)===e,"operationForChild called for unrelated child."),new ic(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Uo(this.source,te()):new Uo(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Gt.OVERWRITE}operationForChild(e){return q(this.path)?new Zr(this.source,te(),this.snap.getImmediateChild(e)):new Zr(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Gt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Zr(this.source,te(),n.value):new rs(this.source,te(),n)}else return x(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rs(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Gb(o.childName,o.snapshotNode))}),Us(t,i,"child_removed",e,r,n),Us(t,i,"child_added",e,r,n),Us(t,i,"child_moved",s,r,n),Us(t,i,"child_changed",e,r,n),Us(t,i,"value",e,r,n),i}function Us(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>sR(t,a,l)),o.forEach(a=>{const l=iR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function iR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sR(t,e,n){if(e.childName==null||n.childName==null)throw gs("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e){return{eventCache:t,serverCache:e}}function oo(t,e,n,r){return Jc(new ei(e,n,r),t.serverCache)}function x1(t,e,n,r){return Jc(t.eventCache,new ei(e,n,r))}function Yd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh;const oR=()=>(dh||(dh=new dt(WN)),dh);class se{constructor(e,n=oR()){this.value=e,this.children=n}static fromObject(e){let n=new se(null);return He(e,(r,i)=>{n=n.set(new ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:ve(new ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new se(null)}}set(e,n){if(q(e))return new se(n,this.children);{const r=K(e),s=(this.children.get(r)||new se(null)).set(oe(e),n),o=this.children.insert(r,s);return new se(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(q(e))return n;{const r=K(e),s=(this.children.get(r)||new se(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new se(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),ve(n,i),r):new se(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.writeTree_=e}static empty(){return new Xt(new se(null))}}function ao(t,e,n){if(q(e))return new Xt(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ht(i,e);return s=s.updateChild(o,n),new Xt(t.writeTree_.set(i,s))}else{const i=new se(n),s=t.writeTree_.setTree(e,i);return new Xt(s)}}}function Qd(t,e,n){let r=t;return He(n,(i,s)=>{r=ao(r,ve(e,i),s)}),r}function Yy(t,e){if(q(e))return Xt.empty();{const n=t.writeTree_.setTree(e,new se(null));return new Xt(n)}}function Xd(t,e){return hi(t,e)!=null}function hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ht(n.path,e)):null}function Qy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function gr(t,e){if(q(e))return t;{const n=hi(t,e);return n!=null?new Xt(new se(n)):new Xt(t.writeTree_.subtree(e))}}function Jd(t){return t.writeTree_.isEmpty()}function is(t,e){return N1(te(),t.writeTree_,e)}function N1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=N1(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){return A1(e,t)}function aR(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ao(t.visibleWrites,e,n)),t.lastWriteId=r}function lR(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Qd(t.visibleWrites,e,n),t.lastWriteId=r}function cR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function uR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hR(a,r.path)?i=!1:Ot(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return dR(t),!0;if(r.snap)t.visibleWrites=Yy(t.visibleWrites,r.path);else{const a=r.children;He(a,l=>{t.visibleWrites=Yy(t.visibleWrites,ve(r.path,l))})}return!0}else return!1}function hR(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(ve(t.path,n),e))return!0;return!1}function dR(t){t.visibleWrites=b1(t.allWrites,fR,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fR(t){return t.visible}function b1(t,e,n){let r=Xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ot(n,o)?(a=ht(n,o),r=ao(r,a,s.snap)):Ot(o,n)&&(a=ht(o,n),r=ao(r,te(),s.snap.getChild(a)));else if(s.children){if(Ot(n,o))a=ht(n,o),r=Qd(r,a,s.children);else if(Ot(o,n))if(a=ht(o,n),q(a))r=Qd(r,te(),s.children);else{const l=es(s.children,K(a));if(l){const c=l.getChild(oe(a));r=ao(r,te(),c)}}}else throw gs("WriteRecord should have .snap or .children")}}return r}function R1(t,e,n,r,i){if(!r&&!i){const s=hi(t.visibleWrites,e);if(s!=null)return s;{const o=gr(t.visibleWrites,e);if(Jd(o))return n;if(n==null&&!Xd(o,te()))return null;{const a=n||j.EMPTY_NODE;return is(o,a)}}}else{const s=gr(t.visibleWrites,e);if(!i&&Jd(s))return n;if(!i&&n==null&&!Xd(s,te()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Ot(c.path,e)||Ot(e,c.path))},a=b1(t.allWrites,o,e),l=n||j.EMPTY_NODE;return is(a,l)}}}function pR(t,e,n){let r=j.EMPTY_NODE;const i=hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gr(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=is(gr(s,new ie(o)),a);r=r.updateImmediateChild(o,l)}),Qy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gr(t.visibleWrites,e);return Qy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gR(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(Xd(t.visibleWrites,s))return null;{const o=gr(t.visibleWrites,s);return Jd(o)?i.getChild(n):is(o,i.getChild(n))}}function mR(t,e,n,r){const i=ve(e,n),s=hi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gr(t.visibleWrites,i);return is(o,r.getNode().getImmediateChild(n))}else return null}function yR(t,e){return hi(t.visibleWrites,e)}function vR(t,e,n,r,i,s,o){let a;const l=gr(t.visibleWrites,e),c=hi(l,te());if(c!=null)a=c;else if(n!=null)a=is(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&u.length<i;)h(m,r)!==0&&u.push(m),m=f.getNext();return u}else return[]}function _R(){return{visibleWrites:Xt.empty(),allWrites:[],lastWriteId:-1}}function sc(t,e,n,r){return R1(t.writeTree,t.treePath,e,n,r)}function Hp(t,e){return pR(t.writeTree,t.treePath,e)}function Xy(t,e,n,r){return gR(t.writeTree,t.treePath,e,n,r)}function oc(t,e){return yR(t.writeTree,ve(t.treePath,e))}function wR(t,e,n,r,i,s){return vR(t.writeTree,t.treePath,e,n,r,i,s)}function Kp(t,e,n){return mR(t.writeTree,t.treePath,e,n)}function P1(t,e){return A1(ve(t.treePath,e),t.writeTree)}function A1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Fo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Mo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ns(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fo(r,e.snapshotNode,i.oldSnap));else throw gs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const O1=new CR;class Gp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ti(this.viewCache_),s=wR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){return{filter:t}}function kR(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function IR(t,e,n,r,i){const s=new ER;let o,a;if(n.type===Gt.OVERWRITE){const c=n;c.source.fromUser?o=Zd(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=ac(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Gt.MERGE){const c=n;c.source.fromUser?o=xR(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ef(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Gt.ACK_USER_WRITE){const c=n;c.revert?o=RR(t,e,c.path,r,i,s):o=NR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Gt.LISTEN_COMPLETE)o=bR(t,e,n.path,r,s);else throw gs("Unknown operation type: "+n.type);const l=s.getChanges();return TR(e,o,l),{viewCache:o,changes:l}}function TR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(I1(Yd(e)))}}function L1(t,e,n,r,i,s){const o=e.eventCache;if(oc(r,n)!=null)return e;{let a,l;if(q(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ti(e),u=c instanceof j?c:j.EMPTY_NODE,h=Hp(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=sc(r,ti(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){x(_r(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Xy(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=oe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Xy(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Kp(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,s):a=o.getNode()}}return oo(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function ac(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),m,null)}else{const m=K(n);if(!l.isCompleteForPath(n)&&_r(n)>1)return e;const v=oe(n),k=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),m,k,v,O1,null)}const h=x1(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),f=new Gp(i,h,s);return L1(t,h,n,i,f,a)}function Zd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Gp(i,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=oo(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=oo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=oe(n),m=a.getNode().getImmediateChild(h);let v;if(q(f))v=r;else{const _=u.getCompleteChild(h);_!=null?Dp(f)===".priority"&&_.getChild(v1(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=j.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),h,v,f,u,o);l=oo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jy(t,e){return t.eventCache.isCompleteForChild(e)}function xR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ve(n,l);Jy(e,K(u))&&(a=Zd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ve(n,l);Jy(e,K(u))||(a=Zd(t,a,u,c,i,s,o))}),a}function Zy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ef(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=r:c=new se(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=Zy(t,m,f);l=ac(t,l,new ie(h),v,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const m=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),_=Zy(t,v,f);l=ac(t,l,new ie(h),_,i,s,o,a)}}),l}function NR(t,e,n,r,i,s,o){if(oc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ac(t,e,n,l.getNode().getChild(n),i,s,a,o);if(q(n)){let c=new se(null);return l.getNode().forEachChild(ji,(u,h)=>{c=c.set(new ie(u),h)}),ef(t,e,n,c,i,s,a,o)}else return e}else{let c=new se(null);return r.foreach((u,h)=>{const f=ve(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ef(t,e,n,c,i,s,a,o)}}function bR(t,e,n,r,i){const s=e.serverCache,o=x1(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return L1(t,o,n,r,O1,i)}function RR(t,e,n,r,i,s){let o;if(oc(r,n)!=null)return e;{const a=new Gp(r,e,i),l=e.eventCache.getNode();let c;if(q(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=sc(r,ti(e));else{const h=e.serverCache.getNode();x(h instanceof j,"serverChildren would be complete if leaf node"),u=Hp(r,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=K(n);let h=Kp(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,oe(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,oe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sc(r,ti(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||oc(r,te())!=null,oo(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Up(r.getIndex()),s=Yb(r);this.processor_=SR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new ei(l,o.isFullyInitialized(),i.filtersNodes()),h=new ei(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Jc(h,u),this.eventGenerator_=new nR(this.query_)}get query(){return this.query_}}function AR(t){return t.viewCache_.serverCache.getNode()}function OR(t,e){const n=ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function ev(t){return t.eventRegistrations_.length===0}function LR(t,e){t.eventRegistrations_.push(e)}function tv(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function nv(t,e,n,r){e.type===Gt.MERGE&&e.source.queryId!==null&&(x(ti(t.viewCache_),"We should always have a full cache before handling merges"),x(Yd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=IR(t.processor_,i,e,n,r);return kR(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,D1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(s,o)=>{r.push(ns(s,o))}),n.isFullyInitialized()&&r.push(I1(n.getNode())),D1(t,r,n.getNode(),e)}function D1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return rR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;class MR{constructor(){this.views=new Map}}function FR(t){x(!lc,"__referenceConstructor has already been defined"),lc=t}function $R(){return x(lc,"Reference.ts has not been loaded"),lc}function UR(t){return t.views.size===0}function qp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),nv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(nv(o,e,n,r));return s}}function jR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=sc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Hp(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=Jc(new ei(a,l,!1),new ei(r,i,!1));return new PR(e,c)}return o}function BR(t,e,n,r,i,s){const o=jR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),LR(o,n),DR(o,n)}function zR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=wr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(tv(c,n,r)),ev(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(tv(l,n,r)),ev(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!wr(t)&&s.push(new($R())(e._repo,e._path)),{removed:s,events:o}}function M1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bi(t,e){let n=null;for(const r of t.views.values())n=n||OR(r,e);return n}function F1(t,e){if(e._queryParams.loadsAllData())return Zc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $1(t,e){return F1(t,e)!=null}function wr(t){return Zc(t)!=null}function Zc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;function VR(t){x(!cc,"__referenceConstructor has already been defined"),cc=t}function WR(){return x(cc,"Reference.ts has not been loaded"),cc}let HR=1;class rv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=_R(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U1(t,e,n,r,i){return aR(t.pendingWriteTree_,e,n,r,i),i?vs(t,new Zr(Bp(),e,n)):[]}function KR(t,e,n,r){lR(t.pendingWriteTree_,e,n,r);const i=se.fromObject(n);return vs(t,new rs(Bp(),e,i))}function rr(t,e,n=!1){const r=cR(t.pendingWriteTree_,e);if(uR(t.pendingWriteTree_,e)){let s=new se(null);return r.snap!=null?s=s.set(te(),!0):He(r.children,o=>{s=s.set(new ie(o),!0)}),vs(t,new ic(r.path,s,n))}else return[]}function eu(t,e,n){return vs(t,new Zr(zp(),e,n))}function GR(t,e,n){const r=se.fromObject(n);return vs(t,new rs(zp(),e,r))}function qR(t,e){return vs(t,new Uo(zp(),e))}function YR(t,e,n){const r=Qp(t,n);if(r){const i=Xp(r),s=i.path,o=i.queryId,a=ht(s,e),l=new Uo(Vp(o),a);return Jp(t,s,l)}else return[]}function tf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$1(o,e))){const l=zR(o,e,n,r);UR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(f,m)=>wr(m));if(u&&!h){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=JR(f);for(let v=0;v<m.length;++v){const _=m[v],k=_.query,g=z1(t,_);t.listenProvider_.startListening(lo(k),uc(t,k),g.hashFn,g.onComplete)}}}!h&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(lo(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(tu(f));t.listenProvider_.stopListening(lo(f),m)}))}ZR(t,c)}return a}function QR(t,e,n,r){const i=Qp(t,r);if(i!=null){const s=Xp(i),o=s.path,a=s.queryId,l=ht(o,e),c=new Zr(Vp(a),l,n);return Jp(t,o,c)}else return[]}function XR(t,e,n,r){const i=Qp(t,r);if(i){const s=Xp(i),o=s.path,a=s.queryId,l=ht(o,e),c=se.fromObject(n),u=new rs(Vp(a),l,c);return Jp(t,o,u)}else return[]}function iv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=ht(f,i);s=s||Bi(m,v),o=o||wr(m)});let a=t.syncPointTree_.get(i);a?(o=o||wr(a),s=s||Bi(a,te())):(a=new MR,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=Bi(v,te());_&&(s=s.updateImmediateChild(m,_))}));const c=$1(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=tu(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=eP();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const u=Wp(t.pendingWriteTree_,i);let h=BR(a,e,n,u,s,l);if(!c&&!o&&!r){const f=F1(a,e);h=h.concat(tP(t,e,f))}return h}function Yp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ht(o,e),c=Bi(a,l);if(c)return c});return R1(i,e,s,n,!0)}function vs(t,e){return j1(e,t.syncPointTree_,null,Wp(t.pendingWriteTree_,te()))}function j1(t,e,n,r){if(q(t.path))return B1(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=Bi(i,te()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=P1(r,o);s=s.concat(j1(a,l,c,u))}return i&&(s=s.concat(qp(i,t,r,n))),s}}function B1(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=Bi(i,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=P1(r,o),u=t.operationForChild(o);u&&(s=s.concat(B1(u,a,l,c)))}),i&&(s=s.concat(qp(i,t,r,n))),s}function z1(t,e){const n=e.query,r=uc(t,n);return{hashFn:()=>(AR(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?YR(t,n._path,r):qR(t,n._path);{const s=GN(i,n);return tf(t,n,null,s)}}}}function uc(t,e){const n=tu(e);return t.queryToTagMap.get(n)}function tu(t){return t._path.toString()+"$"+t._queryIdentifier}function Qp(t,e){return t.tagToQueryMap.get(e)}function Xp(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Jp(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=Wp(t.pendingWriteTree_,e);return qp(r,n,i,null)}function JR(t){return t.fold((e,n,r)=>{if(n&&wr(n))return[Zc(n)];{let i=[];return n&&(i=M1(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function lo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(WR())(t._repo,t._path):t}function ZR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=tu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function eP(){return HR++}function tP(t,e,n){const r=e._path,i=uc(t,e),s=z1(t,n),o=t.listenProvider_.startListening(lo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&wr(u))return[Zc(u).query];{let f=[];return u&&(f=f.concat(M1(u).map(m=>m.query))),He(h,(m,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(lo(u),uc(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zp(n)}node(){return this.node_}}class eg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new eg(this.syncTree_,n)}node(){return Yp(this.syncTree_,this.path_)}}const nP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sv=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iP(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},iP=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},V1=function(t,e,n,r){return tg(e,new eg(n,t),r)},W1=function(t,e,n){return tg(t,new Zp(e),n)};function tg(t,e,n){const r=t.getPriority().val(),i=sv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=sv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Re(a,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Re(i))),o.forEachChild(_e,(a,l)=>{const c=tg(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function rg(t,e){let n=e instanceof ie?e:new ie(e),r=t,i=K(n);for(;i!==null;){const s=es(r.node.children,i)||{children:{},childCount:0};r=new ng(i,r,s),n=oe(n),i=K(n)}return r}function _s(t){return t.node.value}function H1(t,e){t.node.value=e,nf(t)}function K1(t){return t.node.childCount>0}function sP(t){return _s(t)===void 0&&!K1(t)}function nu(t,e){He(t.node.children,(n,r)=>{e(new ng(n,t,r))})}function G1(t,e,n,r){n&&!r&&e(t),nu(t,i=>{G1(i,e,!0,r)}),n&&r&&e(t)}function oP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ha(t){return new ie(t.parent===null?t.name:ha(t.parent)+"/"+t.name)}function nf(t){t.parent!==null&&aP(t.parent,t.name,t)}function aP(t,e,n){const r=sP(n),i=pn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,nf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=/[\[\].#$\/\u0000-\u001F\u007F]/,cP=/[\[\].#$\u0000-\u001F\u007F]/,fh=10*1024*1024,ig=function(t){return typeof t=="string"&&t.length!==0&&!lP.test(t)},q1=function(t){return typeof t=="string"&&t.length!==0&&!cP.test(t)},uP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),q1(t)},hP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Rp(t)||t&&typeof t=="object"&&pn(t,".sv")},Y1=function(t,e,n,r){r&&e===void 0||ru(Yc(t,"value"),e,n)},ru=function(t,e,n){const r=n instanceof ie?new xb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pr(r)+" with contents = "+e.toString());if(Rp(e))throw new Error(t+"contains "+e.toString()+" "+Pr(r));if(typeof e=="string"&&e.length>fh/3&&Qc(e)>fh)throw new Error(t+"contains a string greater than "+fh+" utf8 bytes "+Pr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ig(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nb(r,o),ru(t,a,r),bb(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pr(r)+" in addition to actual children.")}},dP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Do(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ig(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Tb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ot(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},fP=function(t,e,n,r){if(r&&e===void 0)return;const i=Yc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];He(e,(o,a)=>{const l=new ie(o);if(ru(i,a,ve(n,l)),Dp(l)===".priority"&&!hP(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),dP(i,s)},Q1=function(t,e,n,r){if(!(r&&n===void 0)&&!q1(n))throw new Error(Yc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q1(t,e,n,r)},sg=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ig(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uP(n))throw new Error(Yc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Mp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function X1(t,e,n){iu(t,n),J1(t,r=>Mp(r,e))}function Zt(t,e,n){iu(t,n),J1(t,r=>Ot(r,e)||Ot(e,r))}function J1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(yP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vr&&je("event: "+n.toString()),ys(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="repo_interrupt",_P=25;class wP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rc(),this.transactionQueueTree_=new ng,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function EP(t,e,n){if(t.stats_=Op(t.repoInfo_),t.forceRestClient_||XN())t.server_=new nc(t.repoInfo_,(r,i,s,o)=>{ov(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>av(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tn(t.repoInfo_,e,(r,i,s,o)=>{ov(t,r,i,s,o)},r=>{av(t,r)},r=>{CP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nb(t.repoInfo_,()=>new tR(t.stats_,t.server_)),t.infoData_=new Qb,t.infoSyncTree_=new rv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=eu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),og(t,"connected",!1),t.serverSyncTree_=new rv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Zt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Z1(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function su(t){return nP({timestamp:Z1(t)})}function ov(t,e,n,r,i){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Xl(n,c=>Le(c));o=XR(t.serverSyncTree_,s,l,i)}else{const l=Le(n);o=QR(t.serverSyncTree_,s,l,i)}else if(r){const l=Xl(n,c=>Le(c));o=GR(t.serverSyncTree_,s,l)}else{const l=Le(n);o=eu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ss(t,s)),Zt(t.eventQueue_,a,o)}function av(t,e){og(t,"connected",e),e===!1&&IP(t)}function CP(t,e){He(e,(n,r)=>{og(t,n,r)})}function og(t,e,n){const r=new ie("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=eu(t.infoSyncTree_,r,i);Zt(t.eventQueue_,r,s)}function ag(t){return t.nextWriteId_++}function SP(t,e,n,r,i){ou(t,"set",{path:e.toString(),value:n,priority:r});const s=su(t),o=Le(n,r),a=Yp(t.serverSyncTree_,e),l=W1(o,a,s),c=ag(t),u=U1(t.serverSyncTree_,e,l,c,!0);iu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||it("set at "+e+" failed: "+f);const _=rr(t.serverSyncTree_,c,!v);Zt(t.eventQueue_,e,_),rf(t,i,f,m)});const h=cg(t,e);ss(t,h),Zt(t.eventQueue_,h,[])}function kP(t,e,n,r){ou(t,"update",{path:e.toString(),value:n});let i=!0;const s=su(t),o={};if(He(n,(a,l)=>{i=!1,o[a]=V1(ve(e,a),Le(l),t.serverSyncTree_,s)}),i)je("update() called with empty data.  Don't do anything."),rf(t,r,"ok",void 0);else{const a=ag(t),l=KR(t.serverSyncTree_,e,o,a);iu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||it("update at "+e+" failed: "+c);const f=rr(t.serverSyncTree_,a,!h),m=f.length>0?ss(t,e):e;Zt(t.eventQueue_,m,f),rf(t,r,c,u)}),He(n,c=>{const u=cg(t,ve(e,c));ss(t,u)}),Zt(t.eventQueue_,e,[])}}function IP(t){ou(t,"onDisconnectEvents");const e=su(t),n=rc();qd(t.onDisconnect_,te(),(i,s)=>{const o=V1(i,s,t.serverSyncTree_,e);T1(n,i,o)});let r=[];qd(n,te(),(i,s)=>{r=r.concat(eu(t.serverSyncTree_,i,s));const o=cg(t,i);ss(t,o)}),t.onDisconnect_=rc(),Zt(t.eventQueue_,te(),r)}function TP(t,e,n){let r;K(e._path)===".info"?r=iv(t.infoSyncTree_,e,n):r=iv(t.serverSyncTree_,e,n),X1(t.eventQueue_,e._path,r)}function lv(t,e,n){let r;K(e._path)===".info"?r=tf(t.infoSyncTree_,e,n):r=tf(t.serverSyncTree_,e,n),X1(t.eventQueue_,e._path,r)}function xP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vP)}function ou(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function rf(t,e,n,r){e&&ys(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function eE(t,e,n){return Yp(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function lg(t,e=t.transactionQueueTree_){if(e||au(t,e),_s(e)){const n=nE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&NP(t,ha(e),n)}else K1(e)&&nu(e,n=>{lg(t,n)})}function NP(t,e,n){const r=n.map(c=>c.currentWriteId),i=eE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ht(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ou(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(rr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();au(t,rg(t.transactionQueueTree_,e)),lg(t,t.transactionQueueTree_),Zt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ys(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{it("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ss(t,e)}},o)}function ss(t,e){const n=tE(t,e),r=ha(n),i=nE(t,n);return bP(t,i,r),r}function bP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ht(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(rr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_P)u=!0,h="maxretry",i=i.concat(rr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=eE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){ru("transaction failed: Data returned ",m,l.path);let v=Le(m);typeof m=="object"&&m!=null&&pn(m,".priority")||(v=v.updatePriority(f.getPriority()));const k=l.currentWriteId,g=su(t),p=W1(v,f,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=ag(t),o.splice(o.indexOf(k),1),i=i.concat(U1(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(rr(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(rr(t.serverSyncTree_,l.currentWriteId,!0))}Zt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}au(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ys(r[a]);lg(t,t.transactionQueueTree_)}function tE(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&_s(r)===void 0;)r=rg(r,n),e=oe(e),n=K(e);return r}function nE(t,e){const n=[];return rE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rE(t,e,n){const r=_s(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);nu(e,i=>{rE(t,i,n)})}function au(t,e){const n=_s(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,H1(e,n.length>0?n:void 0)}nu(e,r=>{au(t,r)})}function cg(t,e){const n=ha(tE(t,e)),r=rg(t.transactionQueueTree_,e);return oP(r,i=>{ph(t,i)}),ph(t,r),G1(r,i=>{ph(t,i)}),n}function ph(t,e){const n=_s(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?H1(e,void 0):n.length=s+1,Zt(t.eventQueue_,ha(e),i);for(let o=0;o<r.length;o++)ys(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const cv=function(t,e){const n=AP(t),r=n.namespace;n.domain==="firebase.com"&&An(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&An("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new c1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ie(n.pathString)}},AP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=RP(t.substring(u,h)));const f=PP(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",OP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=uv.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=uv.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class sE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ug{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:Dp(this._path)}get ref(){return new Fn(this._repo,this._path)}get _queryIdentifier(){const e=Gy(this._queryParams),n=Pp(e);return n==="{}"?"default":n}get _queryObject(){return Gy(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof ug))return!1;const n=this._repo===e._repo,r=Mp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ib(this._path)}}class Fn extends ug{constructor(e,n){super(e,n,new jp,!1)}get parent(){const e=v1(this._path);return e===null?null:new Fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),r=as(this.ref,e);return new jo(this._node.getChild(n),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new jo(i,as(this.ref,r),_e)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function os(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?as(t._root,e):t._root}function as(t,e){return t=Ze(t),K(t._path)===null?pP("child","path",e,!1):Q1("child","path",e,!1),new Fn(t._repo,ve(t._path,e))}function DP(t,e){t=Ze(t),sg("push",t._path),Y1("push",e,t._path,!0);const n=Z1(t._repo),r=OP(n),i=as(t,r),s=as(t,r);let o;return e!=null?o=oE(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function MP(t){return sg("remove",t._path),oE(t,null)}function oE(t,e){t=Ze(t),sg("set",t._path),Y1("set",e,t._path,!1);const n=new sa;return SP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function FP(t,e){fP("update",e,t._path,!1);const n=new sa;return kP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class hg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iE("value",this,new jo(e.snapshotNode,new Fn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}matches(e){return e instanceof hg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class dg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=as(new Fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new iE(e.type,this,new jo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof dg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function da(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,h)=>{lv(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new LP(n,s||void 0),a=e==="value"?new hg(o):new dg(e,o);return TP(t._repo,t,a),()=>lv(t._repo,t,a)}function fa(t,e,n,r){return da(t,"value",e,n,r)}function $P(t,e,n,r){return da(t,"child_added",e,n,r)}function UP(t,e,n,r){return da(t,"child_changed",e,n,r)}function jP(t,e,n,r){return da(t,"child_moved",e,n,r)}function BP(t,e,n,r){return da(t,"child_removed",e,n,r)}FR(Fn);VR(Fn);/**
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
 */const zP="FIREBASE_DATABASE_EMULATOR_HOST",sf={};let VP=!1;function WP(t,e,n,r){t.repoInfo_=new c1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function HP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||An("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cv(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[zP]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=cv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ui(Ui.OWNER):new ZN(t.name,t.options,e);gP("Invalid Firebase Database URL",o),q(o.path)||An("Database URL must point to the root of a Firebase Database (not including a child path).");const h=GP(a,t,u,new JN(t.name,n));return new qP(h,t)}function KP(t,e){const n=sf[e];(!n||n[t.key]!==t)&&An(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xP(t),delete n[t.key]}function GP(t,e,n,r){let i=sf[e.name];i||(i={},sf[e.name]=i);let s=i[t.toURLString()];return s&&An("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new wP(t,VP,n,r),i[t.toURLString()]=s,s}class qP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(EP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&An("Cannot call "+e+" on a deleted database.")}}function pa(t=Kw(),e){const n=aa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hx("database");r&&YP(n,...r)}return n}function YP(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&An("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&An('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ui(Ui.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dx(r.mockUserToken,t.app.options.projectId);s=new Ui(o)}WP(i,e,n,s)}/**
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
 */function QP(t){FN(Mn),Ft(new kt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return HP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ie(Ry,Py,t),Ie(Ry,Py,"esm2017")}Tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QP();function aE(t){const{vacancyData:e}=t,{vacancyTitle:n,typeVacancy:r,areaVacancy:i,locationPlace:s,typeLocation:o}=e;return C("aside",{className:"bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-2",children:[C("div",{children:[d("span",{className:"text-slate-400 text-sm",children:i}),d("h3",{className:"font-bold mt-px text-gray-100",children:n}),C("div",{className:"flex items-center gap-3 mt-2",children:[d("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:r}),C("span",{className:"text-slate-400 text-sm flex gap-1 items-center",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),o,", ",s]})]})]}),d("div",{children:t.children})]})}function XP(){const[t,e]=S.useState({}),n=pa(),r=os(n,"/vacancy");S.useEffect(()=>{fa(r,l=>{e(l.val())})},[]);const[i,s]=S.useState(0),o=i+18,a=Object.keys(t).slice(i,o);return C(ps,{children:[C("article",{className:"flex justify-center flex-col items-center pb-20 px-2",children:[d("header",{className:"lg:mt-[-113px] flex justify-center items-center w-full max-w-4xl",children:C("section",{className:"w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6",children:[C("aside",{className:"grid grid-cols-3 gap-0 rounded",children:[d("div",{className:"col-span-2 p-2 rounded",children:C("div",{className:"flex border border-gray-700 rounded bg-gray-200 items-center p-2 hover:bg-gray-300",children:[d("span",{className:"material-symbols-outlined text-gray-800",children:"search"}),d("input",{className:"bg-transparent w-full focus:outline-none text-gray-800",type:"search"})]})}),d("div",{className:" p-2 rounded",children:d("div",{className:"flex justify-center w-full",children:d("button",{className:"p-2 w-full rounded-md border-0 bg-red-600 text-white hover:bg-red-700",children:"Search"})})})]}),C("aside",{className:"flex flex-wrap md:flex-row text-gray-100",children:[d("div",{className:"flex items-center",children:d("p",{children:"FILTER BY:"})}),d("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:C("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[d("option",{hidden:"hidden",value:"defaultValue",children:"LOCATION TYPE"}),d("option",{children:"On-site"}),d("option",{children:"Hybrid"}),d("option",{children:"Remote"})]})}),d("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:C("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[d("option",{hidden:"hidden",value:"defaultValue",children:"LOCATION"}),d("option",{children:"All"}),d("option",{children:"CDMX"}),d("option",{children:"MX"})]})}),d("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:C("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[d("option",{hidden:"hidden",value:"defaultValue",children:"TEAM"}),d("option",{children:"BTC Americas"}),d("option",{children:"Price Travel"}),d("option",{children:"Big Fish"})]})}),d("div",{className:"w-fit p-1 md:pt-0 md:pl-2",children:C("select",{className:"py-1 px-2 rounded text-gray-400 bg-[#ffffff17]",children:[d("option",{hidden:"hidden",value:"defaultValue",children:"WORK TYPE"}),d("option",{children:"All"}),d("option",{children:"Full Time"}),d("option",{children:"Halftime"})]})})]})]})}),d("div",{className:"w-full max-w-4xl",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l];return d(aE,{vacancyData:c,children:d(Gl,{to:`/jobs/${l}`,children:C("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse",children:["Apply Now",d("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})},l)})})]}),d("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function fg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=lE,cE=new ci("auth","Firebase",lE());/**
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
 */const hc=new oa("@firebase/auth");function ZP(t,...e){hc.logLevel<=ee.WARN&&hc.warn(`Auth (${Mn}): ${t}`,...e)}function gl(t,...e){hc.logLevel<=ee.ERROR&&hc.error(`Auth (${Mn}): ${t}`,...e)}/**
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
 */function en(t,...e){throw pg(t,...e)}function un(t,...e){return pg(t,...e)}function e2(t,e,n){const r=Object.assign(Object.assign({},JP()),{[e]:n});return new ci("auth","Firebase",r).create(e,{appName:t.name})}function pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cE.create(t,...e)}function z(t,e,...n){if(!t)throw pg(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gl(e),new Error(e)}function On(t,e){t||En(e)}/**
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
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function t2(){return hv()==="http:"||hv()==="https:"}function hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function n2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t2()||fx()||"connection"in navigator)?navigator.onLine:!0}function r2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Np()||Uw()}get(){return n2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gg(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const i2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const s2=new ga(3e4,6e4);function ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,r,i={}){return hE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ms(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uE.fetch()(dE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function hE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},i2),e);try{const i=new o2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qa(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw e2(t,u,c);en(t,u)}}catch(i){if(i instanceof Ut)throw i;en(t,"network-request-failed",{message:String(i)})}}async function ma(t,e,n,r,i={}){const s=await Es(t,e,n,r,i);return"mfaPendingCredential"in s&&en(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gg(t.config,i):`${t.config.apiScheme}://${i}`}class o2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),s2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function a2(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function l2(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c2(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=mg(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(gh(i.auth_time)),issuedAtTime:co(gh(i.iat)),expirationTime:co(gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gh(t){return Number(t)*1e3}function mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ql(n);return i?JSON.parse(i):(gl("Failed to decode base64 JWT payload"),null)}catch(i){return gl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function u2(t){const e=mg(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&h2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function h2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class d2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bo(t,l2(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?g2(s.providerUserInfo):[],a=p2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fE(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function f2(t){const e=Ze(t);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function g2(t){return t.map(e=>{var{providerId:n}=e,r=fg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function m2(t,e){const n=await hE(t,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await m2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function Hn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c2(this,e)}reload(){return f2(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bo(this,a2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:E,isAnonymous:N,providerData:P,stsTokenManager:b}=n;z(y&&b,e,"internal-error");const L=zo.fromJSON(this.name,b);z(typeof y=="string",e,"internal-error"),Hn(h,e.name),Hn(f,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),Hn(m,e.name),Hn(v,e.name),Hn(_,e.name),Hn(k,e.name),Hn(g,e.name),Hn(p,e.name);const $=new Wr({uid:y,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:L,createdAt:g,lastLoginAt:p});return P&&Array.isArray(P)&&($.providerData=P.map(W=>Object.assign({},W))),k&&($._redirectEventId=k),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const s=new Wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dc(s),s}}/**
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
 */const dv=new Map;function Cn(t){On(t instanceof Function,"Expected a class definition");let e=dv.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dv.set(t,e),e)}/**
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
 */class pE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pE.type="NONE";const fv=pE;/**
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
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(Cn(fv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(fv);const o=ml(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Wr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zi(s,e,r))}}/**
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
 */function pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_E(e))return"Blackberry";if(wE(e))return"Webos";if(yg(e))return"Safari";if((e.includes("chrome/")||mE(e))&&!e.includes("edge/"))return"Chrome";if(vE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gE(t=Je()){return/firefox\//i.test(t)}function yg(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mE(t=Je()){return/crios\//i.test(t)}function yE(t=Je()){return/iemobile/i.test(t)}function vE(t=Je()){return/android/i.test(t)}function _E(t=Je()){return/blackberry/i.test(t)}function wE(t=Je()){return/webos/i.test(t)}function lu(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function y2(t=Je()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v2(){return px()&&document.documentMode===10}function EE(t=Je()){return lu(t)||vE(t)||wE(t)||_E(t)||/windows phone/i.test(t)||yE(t)}function _2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function CE(t,e=[]){let n;switch(t){case"Browser":n=pv(Je());break;case"Worker":n=`${pv(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mn}/${r}`}async function SE(t,e){return Es(t,"GET","/v2/recaptchaConfig",ws(t,e))}function gv(t){return t!==void 0&&t.enterprise!==void 0}class kE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function w2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",w2().appendChild(r)})}function E2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const C2="https://www.google.com/recaptcha/enterprise.js?render=",S2="recaptcha-enterprise",k2="NO_RECAPTCHA";class TE{constructor(e){this.type=S2,this.auth=Cs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{SE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kE(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;gv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(k2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&gv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}IE(C2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function fc(t,e,n,r=!1){const i=new TE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class I2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class T2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new I2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}async initializeRecaptchaConfig(){const e=await SE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new kE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new TE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cs(t){return Ze(t)}class mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cx(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function x2(t,e){const n=aa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jl(s,e??{}))return i;en(i,"already-initialized")}return n.initialize({options:e})}function N2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function b2(t,e,n){const r=Cs(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xE(e),{host:o,port:a}=R2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||P2()}function xE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R2(t){const e=xE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yv(o)}}}function yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function A2(t,e){return Es(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mh(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",ws(t,e))}/**
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
 */async function O2(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",ws(t,e))}async function L2(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",ws(t,e))}/**
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
 */class Vo extends vg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await fc(e,r,"signInWithPassword");return mh(e,i)}else return mh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await fc(e,r,"signInWithPassword");return mh(e,s)}else return Promise.reject(i)});case"emailLink":return O2(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return A2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return L2(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vi(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",ws(t,e))}/**
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
 */const D2="http://localhost";class ni extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:D2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
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
 */function M2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F2(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class _g{constructor(e){var n,r,i,s,o,a;const l=Ks(Gs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=M2((i=l.mode)!==null&&i!==void 0?i:null);z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=F2(e);try{return new _g(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return z(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class NE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ya extends NE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends ya{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Jn extends ya{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends ya{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function yh(t,e){return ma(t,"POST","/v1/accounts:signUp",ws(t,e))}/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wr._fromIdTokenResponse(e,r,i),o=vv(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vv(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pc extends Ut{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function bE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function $2(t,e,n=!1){const r=await Bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
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
 */async function U2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Bo(t,bE(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=mg(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&en(r,"user-mismatch"),s}}/**
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
 */async function RE(t,e,n=!1){const r="signIn",i=await bE(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function j2(t,e){return RE(Cs(t),e)}async function B2(t,e,n){var r;const i=Cs(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await fc(i,s,"signUpPassword");o=yh(i,c)}else o=yh(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await fc(i,s,"signUpPassword");return yh(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await ri._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function z2(t,e,n){return j2(Ze(t),Ss.credential(e,n))}function V2(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function W2(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function ls(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function wg(t){return Ze(t).signOut()}const gc="__sak";/**
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
 */class PE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function H2(){const t=Je();return yg(t)||lu(t)}const K2=1e3,G2=10;class AE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H2()&&_2(),this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);v2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,G2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AE.type="LOCAL";const q2=AE;/**
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
 */class OE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const LE=OE;/**
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
 */function Y2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Y2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cu.receivers=[];/**
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
 */function Eg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Eg("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function X2(t){hn().location.href=t}/**
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
 */function DE(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function J2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eA(){return DE()?self:null}/**
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
 */const ME="firebaseLocalStorageDb",tA=1,mc="firebaseLocalStorage",FE="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uu(t,e){return t.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function nA(){const t=indexedDB.deleteDatabase(ME);return new va(t).toPromise()}function af(){const t=indexedDB.open(ME,tA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mc,{keyPath:FE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mc)?e(r):(r.close(),await nA(),e(await af()))})})}async function _v(t,e,n){const r=uu(t,!0).put({[FE]:e,value:n});return new va(r).toPromise()}async function rA(t,e){const n=uu(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function wv(t,e){const n=uu(t,!0).delete(e);return new va(n).toPromise()}const iA=800,sA=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cu._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J2(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await _v(e,gc,"1"),await wv(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uu(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const oA=$E;new ga(3e4,6e4);/**
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
 */function aA(t,e){return e?Cn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cg extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lA(t){return RE(t.auth,new Cg(t),t.bypassAuthState)}function cA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),U2(n,new Cg(t),t.bypassAuthState)}async function uA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),$2(n,new Cg(t),t.bypassAuthState)}/**
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
 */class UE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return uA;case"reauthViaPopup":case"reauthViaRedirect":return cA;default:en(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hA=new ga(2e3,1e4);class bi extends UE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hA.get())};e()}}bi.currentPopupAction=null;/**
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
 */const dA="pendingRedirect",yl=new Map;class fA extends UE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await pA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pA(t,e){const n=yA(e),r=mA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gA(t,e){yl.set(t._key(),e)}function mA(t){return Cn(t._redirectPersistence)}function yA(t){return ml(dA,t.config.apiKey,t.name)}async function vA(t,e,n=!1){const r=Cs(t),i=aA(r,e),o=await new fA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _A=10*60*1e3;class wA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_A&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(e))}saveEventToCache(e){this.cachedEventUids.add(Ev(e)),this.lastProcessedEventTime=Date.now()}}function Ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jE(t);default:return!1}}/**
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
 */async function CA(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
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
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kA=/^https?/;async function IA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CA(t);for(const n of e)try{if(TA(n))return}catch{}en(t,"unauthorized-domain")}function TA(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kA.test(n))return!1;if(SA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xA=new ga(3e4,6e4);function Cv(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NA(t){return new Promise((e,n)=>{var r,i,s;function o(){Cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cv(),n(un(t,"network-request-failed"))},timeout:xA.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const a=E2("iframefcb");return hn()[a]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},IE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vl=null,e})}let vl=null;function bA(t){return vl=vl||NA(t),vl}/**
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
 */const RA=new ga(5e3,15e3),PA="__/auth/iframe",AA="emulator/auth/iframe",OA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DA(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gg(e,AA):`https://${t.config.authDomain}/${PA}`,r={apiKey:e.apiKey,appName:t.name,v:Mn},i=LA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ms(r).slice(1)}`}async function MA(t){const e=await bA(t),n=hn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:DA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),a=hn().setTimeout(()=>{s(o)},RA.get());function l(){hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$A=500,UA=600,jA="_blank",BA="http://localhost";class Sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zA(t,e,n,r=$A,i=UA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FA),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Je().toLowerCase();n&&(a=mE(c)?jA:n),gE(c)&&(e=e||BA,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(y2(c)&&a!=="_self")return VA(e||"",a),new Sv(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Sv(h)}function VA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WA="__/auth/handler",HA="emulator/auth/handler",KA=encodeURIComponent("fac");async function kv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mn,eventId:i};if(e instanceof NE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$d(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof ya){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${KA}=${encodeURIComponent(l)}`:"";return`${GA(t)}?${ms(a).slice(1)}${c}`}function GA({config:t}){return t.emulator?gg(t,HA):`https://${t.authDomain}/${WA}`}/**
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
 */const vh="webStorageSupport";class qA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=vA,this._overrideRedirectResult=gA}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await kv(e,n,r,of(),i);return zA(e,o,Eg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await kv(e,n,r,of(),i);return X2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MA(e),r=new wA(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vh,{type:vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vh];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EE()||yg()||lu()}}const YA=qA;var Iv="@firebase/auth",Tv="0.23.2";/**
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
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JA(t){Ft(new kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(t)},c=new T2(r,i,s,l);return N2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new kt("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new QA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Iv,Tv,XA(t)),Ie(Iv,Tv,"esm2017")}/**
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
 */const ZA=5*60,eO=$w("authIdTokenMaxAge")||ZA;let xv=null;const tO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eO)return;const i=n==null?void 0:n.token;xv!==i&&(xv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _a(t=Kw()){const e=aa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=x2(t,{popupRedirectResolver:YA,persistence:[oA,q2,LE]}),r=$w("authTokenSyncURL");if(r){const s=tO(r);W2(n,s,()=>s(n.currentUser)),V2(n,o=>s(o))}const i=Mw("auth");return i&&b2(n,`http://${i}`),n}JA("Browser");function BE(t){return d("div",{children:t.children})}const nO=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),i=_a(),s=fs();return d(BE,{children:d("section",{className:"min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-[#000c1a]",children:d("article",{className:"py-3 sm:max-w-xl sm:mx-auto",children:C("aside",{className:"px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",children:[d("hgroup",{children:d("h1",{className:"text-2xl font-semibold",children:"Sign Up"})}),d("div",{className:"divide-y divide-gray-200",children:C("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:[d("input",{id:"email",name:"email",type:"email",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Email address",value:t,onChange:a=>e(a.target.value)}),d("label",{htmlFor:"email",className:"left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Email Address"}),d("input",{id:"password",name:"password",type:"password",className:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Password",value:n,onChange:a=>r(a.target.value)}),d("label",{htmlFor:"password",className:"left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",children:"Password"}),C("div",{className:"",children:[d("button",{className:"bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600",type:"submit",onClick:async a=>{a.preventDefault(),await B2(i,t,n).then(l=>{const c=l.user;console.log(c),s("/login")}).catch(l=>{const c=l.code,u=l.message;console.log(c,u)})},children:"Sign Up"}),d("a",{className:"ml-8 text-gray-400 hover:text-gray-600",href:"/login",children:"Log In"})]})]})})]})})})})},rO=()=>{const t=_a(),e=fs(),[n,r]=S.useState(""),[i,s]=S.useState("");return C(BE,{children:[d("section",{className:"flex flex-wrap w-full content-center justify-center py-20",children:C("article",{className:"flex",children:[d("aside",{className:"flex flex-wrap content-center justify-center rounded-l-md w-1/2 bg-[#000c1aae]",children:C("div",{className:"w-72",children:[d("h1",{className:"text-xl font-semibold text-gray-100",children:"Welcome back"}),d("small",{className:"text-gray-200",children:"Welcome back! Please enter your details"}),C("form",{className:"mt-4 text-gray-200",children:[C("div",{className:"mb-3",children:[d("label",{className:"mb-2 block text-xs font-semibold",children:"Email"}),d("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"Email Address",value:n,onChange:a=>r(a.target.value)})]}),C("div",{className:"mb-3",children:[d("label",{className:"mb-2 block text-xs font-semibold",children:"Password"}),d("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"password",name:"password",type:"password",placeholder:"******",value:i,onChange:a=>s(a.target.value)})]}),C("div",{className:"mb-3 flex flex-wrap content-center",children:[d("input",{id:"remember",type:"checkbox",className:"mr-1 checked:bg-purple-700"}),d("label",{htmlFor:"remember",className:"mr-auto text-xs font-semibold",children:"Remember for 30 days"}),d("a",{href:"#",className:"text-xs font-semibold text-gray-400 hover:text-gray-200",children:"Forgot password?"})]}),C("div",{className:"mb-3",children:[d("button",{className:"mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md",type:"submit",onClick:a=>{a.preventDefault(),z2(t,n,i).then(l=>{const c=l.user;e("/admin"),console.log(c)}).catch(l=>{const c=l.code,u=l.message;console.log(c,u)})},children:"Sign in"}),C("button",{className:"flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",children:[d("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign in with Google"]})]})]}),C("div",{className:"text-center",children:[d("span",{className:"text-xs text-gray-400 font-semibold",children:"Don't have account?"}),d("a",{href:"/signup",className:"text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100",children:"Sign up"})]})]})}),d("aside",{className:"flex flex-wrap content-center justify-center rounded-r-md w-1/2",children:d("img",{className:"w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md",src:"https://i.imgur.com/9l1A4OS.jpeg"})}),d("div",{className:"bg-gif"})]})}),d("style",{children:`
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
				`})]})};function iO(){const[t,e]=S.useState({}),{id:n}=bw(),r=pa(),i=os(r,`/vacancy/${n}`);S.useEffect(()=>{fa(i,b=>{e(b.val())})},[]);const{dateVacancy:s,vacancyTitle:o,typeVacancy:a,areaVacancy:l,locationPlace:c,typeLocation:u,content:h,salaryVacancy:f,categoryVacancy:m,subcategoryVacancy:v,requiredVacancy:_}=t,k=new Date,g=`${k.getFullYear()}-${k.getMonth()+1}-${k.getDate()}`,p=new Date(g),y=new Date(s),E=864e5,P=(p-y)/E;return d(ps,{children:d("main",{className:"flex justify-center flex-col items-center mb-8",children:C("section",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[C("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[C("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[o,d("span",{className:"text-slate-500 text-sm font-light",children:s==g?"Hoy":"Hace "+P+" días"})]}),d("p",{className:"font-bold text-gray-200",children:f}),C("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),l,", ",c]}),C("div",{className:"flex items-center gap-3 mt-2",children:[d("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:a}),d("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:u})]})]}),C("article",{className:"py-2",children:[C("aside",{className:"py-2",children:[d("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),C("p",{children:[d("span",{className:"text-gray-100",children:"Categoría: "}),C("span",{className:"text-gray-300",children:[" ",m]})]}),C("p",{children:[d("span",{className:"text-gray-100",children:"Subcategoría: "}),C("span",{className:"text-gray-300",children:[" ",v]})]}),C("p",{children:[C("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),C("span",{className:"text-gray-300",children:[" ",_]})]})]}),C("aside",{className:"py-2",children:[d("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),d("p",{className:"text-gray-300",children:h})]})]}),d("button",{className:"bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse",children:"Apply Now"})]})})})}var lf={},sO={get exports(){return lf},set exports(t){lf=t}};(function(t,e){(function(n,r){t.exports=r(S)})(SS,n=>(()=>{var r={703:(a,l,c)=>{var u=c(414);function h(){}function f(){}f.resetWarningCache=h,a.exports=function(){function m(k,g,p,y,E,N){if(N!==u){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function v(){return m}m.isRequired=m;var _={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:v,element:m,elementType:m,instanceOf:v,node:m,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:f,resetWarningCache:h};return _.PropTypes=_,_}},697:(a,l,c)=>{a.exports=c(703)()},414:a=>{a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var c=i[a]={exports:{}};return r[a](c,c.exports,s),c.exports}s.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return s.d(l,{a:l}),l},s.d=(a,l)=>{for(var c in l)s.o(l,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:l[c]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{default:()=>we});var a=s(98),l=s.n(a),c=s(697),u=s.n(c);function h(){return h=Object.assign?Object.assign.bind():function(M){for(var F=1;F<arguments.length;F++){var Q=arguments[F];for(var Z in Q)Object.prototype.hasOwnProperty.call(Q,Z)&&(M[Z]=Q[Z])}return M},h.apply(this,arguments)}var f=function(M){var F=M.pageClassName,Q=M.pageLinkClassName,Z=M.page,jt=M.selected,Bt=M.activeClassName,R=M.activeLinkClassName,I=M.getEventListener,w=M.pageSelectedHandler,U=M.href,O=M.extraAriaContext,B=M.pageLabelBuilder,H=M.rel,ue=M.ariaLabel||"Page "+Z+(O?" "+O:""),fe=null;return jt&&(fe="page",ue=M.ariaLabel||"Page "+Z+" is your current page",F=F!==void 0?F+" "+Bt:Bt,Q!==void 0?R!==void 0&&(Q=Q+" "+R):Q=R),l().createElement("li",{className:F},l().createElement("a",h({rel:H,role:U?void 0:"button",className:Q,href:U,tabIndex:jt?"-1":"0","aria-label":ue,"aria-current":fe,onKeyPress:w},I(w)),B(Z)))};f.propTypes={pageSelectedHandler:u().func.isRequired,selected:u().bool.isRequired,pageClassName:u().string,pageLinkClassName:u().string,activeClassName:u().string,activeLinkClassName:u().string,extraAriaContext:u().string,href:u().string,ariaLabel:u().string,page:u().number.isRequired,getEventListener:u().func.isRequired,pageLabelBuilder:u().func.isRequired,rel:u().string};const m=f;function v(){return v=Object.assign?Object.assign.bind():function(M){for(var F=1;F<arguments.length;F++){var Q=arguments[F];for(var Z in Q)Object.prototype.hasOwnProperty.call(Q,Z)&&(M[Z]=Q[Z])}return M},v.apply(this,arguments)}var _=function(M){var F=M.breakLabel,Q=M.breakAriaLabel,Z=M.breakClassName,jt=M.breakLinkClassName,Bt=M.breakHandler,R=M.getEventListener,I=Z||"break";return l().createElement("li",{className:I},l().createElement("a",v({className:jt,role:"button",tabIndex:"0","aria-label":Q,onKeyPress:Bt},R(Bt)),F))};_.propTypes={breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabel:u().string,breakClassName:u().string,breakLinkClassName:u().string,breakHandler:u().func.isRequired,getEventListener:u().func.isRequired};const k=_;function g(M){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return M??F}function p(M){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},p(M)}function y(){return y=Object.assign?Object.assign.bind():function(M){for(var F=1;F<arguments.length;F++){var Q=arguments[F];for(var Z in Q)Object.prototype.hasOwnProperty.call(Q,Z)&&(M[Z]=Q[Z])}return M},y.apply(this,arguments)}function E(M,F){for(var Q=0;Q<F.length;Q++){var Z=F[Q];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(M,Z.key,Z)}}function N(M,F){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Q,Z){return Q.__proto__=Z,Q},N(M,F)}function P(M,F){if(F&&(p(F)==="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b(M)}function b(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function L(M){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(F){return F.__proto__||Object.getPrototypeOf(F)},L(M)}function $(M,F,Q){return F in M?Object.defineProperty(M,F,{value:Q,enumerable:!0,configurable:!0,writable:!0}):M[F]=Q,M}var W=function(M){(function(I,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");I.prototype=Object.create(w&&w.prototype,{constructor:{value:I,writable:!0,configurable:!0}}),Object.defineProperty(I,"prototype",{writable:!1}),w&&N(I,w)})(R,M);var F,Q,Z,jt,Bt=(Z=R,jt=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var I,w=L(Z);if(jt){var U=L(this).constructor;I=Reflect.construct(w,arguments,U)}else I=w.apply(this,arguments);return P(this,I)});function R(I){var w,U;return function(O,B){if(!(O instanceof B))throw new TypeError("Cannot call a class as a function")}(this,R),$(b(w=Bt.call(this,I)),"handlePreviousPage",function(O){var B=w.state.selected;w.handleClick(O,null,B>0?B-1:void 0,{isPrevious:!0})}),$(b(w),"handleNextPage",function(O){var B=w.state.selected,H=w.props.pageCount;w.handleClick(O,null,B<H-1?B+1:void 0,{isNext:!0})}),$(b(w),"handlePageSelected",function(O,B){if(w.state.selected===O)return w.callActiveCallback(O),void w.handleClick(B,null,void 0,{isActive:!0});w.handleClick(B,null,O)}),$(b(w),"handlePageChange",function(O){w.state.selected!==O&&(w.setState({selected:O}),w.callCallback(O))}),$(b(w),"getEventListener",function(O){return $({},w.props.eventListener,O)}),$(b(w),"handleClick",function(O,B,H){var ue=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},fe=ue.isPrevious,et=fe!==void 0&&fe,di=ue.isNext,xs=di!==void 0&&di,Tr=ue.isBreak,xt=Tr!==void 0&&Tr,Un=ue.isActive,jn=Un!==void 0&&Un;O.preventDefault?O.preventDefault():O.returnValue=!1;var Bn=w.state.selected,Ee=w.props.onClick,Nt=H;if(Ee){var mt=Ee({index:B,selected:Bn,nextSelectedPage:H,event:O,isPrevious:et,isNext:xs,isBreak:xt,isActive:jn});if(mt===!1)return;Number.isInteger(mt)&&(Nt=mt)}Nt!==void 0&&w.handlePageChange(Nt)}),$(b(w),"handleBreakClick",function(O,B){var H=w.state.selected;w.handleClick(B,O,H<O?w.getForwardJump():w.getBackwardJump(),{isBreak:!0})}),$(b(w),"callCallback",function(O){w.props.onPageChange!==void 0&&typeof w.props.onPageChange=="function"&&w.props.onPageChange({selected:O})}),$(b(w),"callActiveCallback",function(O){w.props.onPageActive!==void 0&&typeof w.props.onPageActive=="function"&&w.props.onPageActive({selected:O})}),$(b(w),"getElementPageRel",function(O){var B=w.state.selected,H=w.props,ue=H.nextPageRel,fe=H.prevPageRel,et=H.selectedPageRel;return B-1===O?fe:B===O?et:B+1===O?ue:void 0}),$(b(w),"pagination",function(){var O=[],B=w.props,H=B.pageRangeDisplayed,ue=B.pageCount,fe=B.marginPagesDisplayed,et=B.breakLabel,di=B.breakClassName,xs=B.breakLinkClassName,Tr=B.breakAriaLabels,xt=w.state.selected;if(ue<=H)for(var Un=0;Un<ue;Un++)O.push(w.getPageElement(Un));else{var jn=H/2,Bn=H-jn;xt>ue-H/2?jn=H-(Bn=ue-xt):xt<H/2&&(Bn=H-(jn=xt));var Ee,Nt,mt=function(zn){return w.getPageElement(zn)},Te=[];for(Ee=0;Ee<ue;Ee++){var ba=Ee+1;if(ba<=fe)Te.push({type:"page",index:Ee,display:mt(Ee)});else if(ba>ue-fe)Te.push({type:"page",index:Ee,display:mt(Ee)});else if(Ee>=xt-jn&&Ee<=xt+(xt===0&&H>1?Bn-1:Bn))Te.push({type:"page",index:Ee,display:mt(Ee)});else if(et&&Te.length>0&&Te[Te.length-1].display!==Nt&&(H>0||fe>0)){var Nu=Ee<xt?Tr.backward:Tr.forward;Nt=l().createElement(k,{key:Ee,breakAriaLabel:Nu,breakLabel:et,breakClassName:di,breakLinkClassName:xs,breakHandler:w.handleBreakClick.bind(null,Ee),getEventListener:w.getEventListener}),Te.push({type:"break",index:Ee,display:Nt})}}Te.forEach(function(zn,Vn){var Ra=zn;zn.type==="break"&&Te[Vn-1]&&Te[Vn-1].type==="page"&&Te[Vn+1]&&Te[Vn+1].type==="page"&&Te[Vn+1].index-Te[Vn-1].index<=2&&(Ra={type:"page",index:zn.index,display:mt(zn.index)}),O.push(Ra.display)})}return O}),I.initialPage!==void 0&&I.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(I.initialPage,") and forcePage (").concat(I.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=I.initialPage?I.initialPage:I.forcePage?I.forcePage:0,w.state={selected:U},w}return F=R,(Q=[{key:"componentDidMount",value:function(){var I=this.props,w=I.initialPage,U=I.disableInitialCallback,O=I.extraAriaContext,B=I.pageCount,H=I.forcePage;w===void 0||U||this.callCallback(w),O&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(B)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(B,"). Did you forget a Math.ceil()?")),w!==void 0&&w>B-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(w," > ").concat(B-1,").")),H!==void 0&&H>B-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(H," > ").concat(B-1,")."))}},{key:"componentDidUpdate",value:function(I){this.props.forcePage!==void 0&&this.props.forcePage!==I.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(I.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var I=this.state.selected,w=this.props,U=w.pageCount,O=I+w.pageRangeDisplayed;return O>=U?U-1:O}},{key:"getBackwardJump",value:function(){var I=this.state.selected-this.props.pageRangeDisplayed;return I<0?0:I}},{key:"getElementHref",value:function(I){var w=this.props,U=w.hrefBuilder,O=w.pageCount,B=w.hrefAllControls;if(U)return B||I>=0&&I<O?U(I+1,O,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(I){var w=I===this.state.selected;if(this.props.ariaLabelBuilder&&I>=0&&I<this.props.pageCount){var U=this.props.ariaLabelBuilder(I+1,w);return this.props.extraAriaContext&&!w&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(I){var w=this.state.selected,U=this.props,O=U.pageClassName,B=U.pageLinkClassName,H=U.activeClassName,ue=U.activeLinkClassName,fe=U.extraAriaContext,et=U.pageLabelBuilder;return l().createElement(m,{key:I,pageSelectedHandler:this.handlePageSelected.bind(null,I),selected:w===I,rel:this.getElementPageRel(I),pageClassName:O,pageLinkClassName:B,activeClassName:H,activeLinkClassName:ue,extraAriaContext:fe,href:this.getElementHref(I),ariaLabel:this.ariaLabelBuilder(I),page:I+1,pageLabelBuilder:et,getEventListener:this.getEventListener})}},{key:"render",value:function(){var I=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&I!==void 0)return I&&I(this.props);var w=this.props,U=w.disabledClassName,O=w.disabledLinkClassName,B=w.pageCount,H=w.className,ue=w.containerClassName,fe=w.previousLabel,et=w.previousClassName,di=w.previousLinkClassName,xs=w.previousAriaLabel,Tr=w.prevRel,xt=w.nextLabel,Un=w.nextClassName,jn=w.nextLinkClassName,Bn=w.nextAriaLabel,Ee=w.nextRel,Nt=this.state.selected,mt=Nt===0,Te=Nt===B-1,ba="".concat(g(et)).concat(mt?" ".concat(g(U)):""),Nu="".concat(g(Un)).concat(Te?" ".concat(g(U)):""),zn="".concat(g(di)).concat(mt?" ".concat(g(O)):""),Vn="".concat(g(jn)).concat(Te?" ".concat(g(O)):""),Ra=mt?"true":"false",ES=Te?"true":"false";return l().createElement("ul",{className:H||ue,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:ba},l().createElement("a",y({className:zn,href:this.getElementHref(Nt-1),tabIndex:mt?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":Ra,"aria-label":xs,rel:Tr},this.getEventListener(this.handlePreviousPage)),fe)),this.pagination(),l().createElement("li",{className:Nu},l().createElement("a",y({className:Vn,href:this.getElementHref(Nt+1),tabIndex:Te?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ES,"aria-label":Bn,rel:Ee},this.getEventListener(this.handleNextPage)),xt)))}}])&&E(F.prototype,Q),Object.defineProperty(F,"prototype",{writable:!1}),R}(a.Component);$(W,"propTypes",{pageCount:u().number.isRequired,pageRangeDisplayed:u().number,marginPagesDisplayed:u().number,previousLabel:u().node,previousAriaLabel:u().string,prevPageRel:u().string,prevRel:u().string,nextLabel:u().node,nextAriaLabel:u().string,nextPageRel:u().string,nextRel:u().string,breakLabel:u().oneOfType([u().string,u().node]),breakAriaLabels:u().shape({forward:u().string,backward:u().string}),hrefBuilder:u().func,hrefAllControls:u().bool,onPageChange:u().func,onPageActive:u().func,onClick:u().func,initialPage:u().number,forcePage:u().number,disableInitialCallback:u().bool,containerClassName:u().string,className:u().string,pageClassName:u().string,pageLinkClassName:u().string,pageLabelBuilder:u().func,activeClassName:u().string,activeLinkClassName:u().string,previousClassName:u().string,nextClassName:u().string,previousLinkClassName:u().string,nextLinkClassName:u().string,disabledClassName:u().string,disabledLinkClassName:u().string,breakClassName:u().string,breakLinkClassName:u().string,extraAriaContext:u().string,ariaLabelBuilder:u().func,eventListener:u().string,renderOnZeroPageCount:u().func,selectedPageRel:u().string}),$(W,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(M){return M},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const we=W})(),o})())})(sO);const oO=h_(lf);var aO="firebase",lO="9.22.0";/**
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
 */Ie(aO,lO,"app");var cO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Sg=Sg||{},V=cO||self;function yc(){}function hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uO(t){return Object.prototype.hasOwnProperty.call(t,_h)&&t[_h]||(t[_h]=++hO)}var _h="closure_uid_"+(1e9*Math.random()>>>0),hO=0;function dO(t,e,n){return t.call.apply(t.bind,arguments)}function fO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=dO:Ye=fO,Ye.apply(null,arguments)}function Xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kr(){this.s=this.s,this.o=this.o}var pO=0;kr.prototype.s=!1;kr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),pO!=0)&&uO(this)};kr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Nv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var gO=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",yc,e),V.removeEventListener("test",yc,e)}catch{}return t}();function vc(t){return/^[\s\xa0]*$/.test(t)}var bv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wh(t,e){return t<e?-1:t>e?1:0}function du(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return du().indexOf(t)!=-1}function Ig(t){return Ig[" "](t),t}Ig[" "]=yc;function VE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var mO=on("Opera"),Wo=on("Trident")||on("MSIE"),WE=on("Edge"),cf=WE||Wo,HE=on("Gecko")&&!(du().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),yO=du().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function KE(){var t=V.document;return t?t.documentMode:void 0}var uf;e:{var Eh="",Ch=function(){var t=du();if(HE)return/rv:([^\);]+)(\)|;)/.exec(t);if(WE)return/Edge\/([\d\.]+)/.exec(t);if(Wo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yO)return/WebKit\/(\S+)/.exec(t);if(mO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ch&&(Eh=Ch?Ch[1]:""),Wo){var Sh=KE();if(Sh!=null&&Sh>parseFloat(Eh)){uf=String(Sh);break e}}uf=Eh}var vO={};function _O(){return VE(vO,9,function(){let t=0;const e=bv(String(uf)).split("."),n=bv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=wh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||wh(i[2].length==0,s[2].length==0)||wh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}V.document&&Wo&&KE();function Ho(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(HE){e:{try{Ig(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ho.$.h.call(this)}}$e(Ho,Qe);var wO={2:"touch",3:"pen",4:"mouse"};Ho.prototype.h=function(){Ho.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ea="closure_listenable_"+(1e6*Math.random()|0),EO=0;function CO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++EO,this.fa=this.ia=!1}function fu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function GE(t){const e={};for(const n in t)e[n]=t[n];return e}const Rv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Rv.length;s++)n=Rv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pu(t){this.src=t,this.g={},this.h=0}pu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=df(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function hf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=zE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function df(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var xg="closure_lm_"+(1e6*Math.random()|0),kh={};function YE(t,e,n,r,i){if(r&&r.once)return XE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)YE(t,e[s],n,r,i);return null}return n=Rg(n),t&&t[Ea]?t.O(e,n,wa(r)?!!r.capture:!!r,i):QE(t,e,n,!1,r,i)}function QE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=wa(i)?!!i.capture:!!i,a=bg(t);if(a||(t[xg]=a=new pu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=SO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)gO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ZE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SO(){function t(n){return e.call(t.src,t.listener,n)}const e=kO;return t}function XE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)XE(t,e[s],n,r,i);return null}return n=Rg(n),t&&t[Ea]?t.P(e,n,wa(r)?!!r.capture:!!r,i):QE(t,e,n,!0,r,i)}function JE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)JE(t,e[s],n,r,i);else r=wa(r)?!!r.capture:!!r,n=Rg(n),t&&t[Ea]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=df(s,n,r,i),-1<n&&(fu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=df(e,n,r,i)),(n=-1<t?e[t]:null)&&Ng(n))}function Ng(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ea])hf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ZE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bg(e))?(hf(n,t),n.h==0&&(n.src=null,e[xg]=null)):fu(t)}}}function ZE(t){return t in kh?kh[t]:kh[t]="on"+t}function kO(t,e){if(t.fa)t=!0;else{e=new Ho(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ng(t),t=n.call(r,e)}return t}function bg(t){return t=t[xg],t instanceof pu?t:null}var Ih="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rg(t){return typeof t=="function"?t:(t[Ih]||(t[Ih]=function(e){return t.handleEvent(e)}),t[Ih])}function Fe(){kr.call(this),this.i=new pu(this),this.S=this,this.J=null}$e(Fe,kr);Fe.prototype[Ea]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){JE(this,t,e,n,r)};function Ve(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(r,t),qE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ja(o,r,!0,e)&&i}if(o=e.g=t,i=Ja(o,r,!0,e)&&i,i=Ja(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ja(o,r,!1,e)&&i}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fu(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ja(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&hf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pg=V.JSON.stringify;function IO(){var t=nC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TO{constructor(){this.h=this.g=null}add(e,n){const r=eC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var eC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xO,t=>t.reset());class xO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NO(t){V.setTimeout(()=>{throw t},0)}function tC(t,e){ff||bO(),pf||(ff(),pf=!0),nC.add(t,e)}var ff;function bO(){var t=V.Promise.resolve(void 0);ff=function(){t.then(RO)}}var pf=!1,nC=new TO;function RO(){for(var t;t=IO();){try{t.h.call(t.g)}catch(n){NO(n)}var e=eC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pf=!1}function gu(t,e){Fe.call(this),this.h=t||1,this.g=e||V,this.j=Ye(this.qb,this),this.l=Date.now()}$e(gu,Fe);A=gu.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ve(this,"tick"),this.ga&&(Ag(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ag(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){gu.$.N.call(this),Ag(this),delete this.g};function Og(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function rC(t){t.g=Og(()=>{t.g=null,t.i&&(t.i=!1,rC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PO extends kr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rC(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ko(t){kr.call(this),this.h=t,this.g={}}$e(Ko,kr);var Pv=[];function iC(t,e,n,r){Array.isArray(n)||(n&&(Pv[0]=n.toString()),n=Pv);for(var i=0;i<n.length;i++){var s=YE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sC(t){Tg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ng(e)},t),t.g={}}Ko.prototype.N=function(){Ko.$.N.call(this),sC(this)};Ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mu(){this.g=!0}mu.prototype.Ea=function(){this.g=!1};function AO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function OO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ri(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+DO(t,n)+(r?" "+r:"")})}function LO(t,e){t.info(function(){return"TIMEOUT: "+e})}mu.prototype.info=function(){};function DO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pg(n)}catch{return e}}var ks={},Av=null;function Lg(){return Av=Av||new Fe}ks.Ta="serverreachability";function oC(t){Qe.call(this,ks.Ta,t)}$e(oC,Qe);function Go(t){const e=Lg();Ve(e,new oC(e))}ks.STAT_EVENT="statevent";function aC(t,e){Qe.call(this,ks.STAT_EVENT,t),this.stat=e}$e(aC,Qe);function nt(t){const e=Lg();Ve(e,new aC(e,t))}ks.Ua="timingevent";function lC(t,e){Qe.call(this,ks.Ua,t),this.size=e}$e(lC,Qe);function Ca(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Dg={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},MO={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mg(){}Mg.prototype.h=null;function Ov(t){return t.h||(t.h=t.i())}function FO(){}var Sa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fg(){Qe.call(this,"d")}$e(Fg,Qe);function $g(){Qe.call(this,"c")}$e($g,Qe);var gf;function yu(){}$e(yu,Mg);yu.prototype.g=function(){return new XMLHttpRequest};yu.prototype.i=function(){return{}};gf=new yu;function ka(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ko(this),this.P=$O,t=cf?125:void 0,this.V=new gu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new cC}function cC(){this.i=null,this.g="",this.h=!1}var $O=45e3,mf={},_c={};A=ka.prototype;A.setTimeout=function(t){this.P=t};function yf(t,e,n){t.L=1,t.v=_u(Ln(e)),t.s=n,t.S=!0,uC(t,null)}function uC(t,e){t.G=Date.now(),Ia(t),t.A=Ln(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),vC(n.i,"t",r),t.C=0,n=t.l.I,t.h=new cC,t.g=UC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new PO(Ye(t.Pa,t,t.g),t.O)),iC(t.U,t.g,"readystatechange",t.nb),e=t.I?GE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Go(),AO(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const u=Sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||cf||this.g&&(this.h.h||this.g.ja()||Fv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Go(3):Go(2)),vu(this);var n=this.g.da();this.aa=n;t:if(hC(this)){var r=Fv(this.g);t="";var i=r.length,s=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),uo(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vc(a)){var c=a;break t}}c=null}if(n=c)Ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vf(this,n);else{this.i=!1,this.o=3,nt(12),$r(this),uo(this);break e}}this.S?(dC(this,u,o),cf&&this.i&&u==3&&(iC(this.U,this.V,"tick",this.mb),this.V.start())):(Ri(this.j,this.m,o,null),vf(this,o)),u==4&&$r(this),this.i&&!this.J&&(u==4?DC(this.l,this):(this.i=!1,Ia(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),$r(this),uo(this)}}}catch{}finally{}};function hC(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function dC(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=UO(t,n),i==_c){e==4&&(t.o=4,nt(14),r=!1),Ri(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mf){t.o=4,nt(15),Ri(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ri(t.j,t.m,i,null),vf(t,i);hC(t)&&i!=_c&&i!=mf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hg(e),e.L=!0,nt(11))):(Ri(t.j,t.m,n,"[Invalid Chunked Response]"),$r(t),uo(t))}A.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.C<e.length&&(vu(this),dC(this,t,e),this.i&&t!=4&&Ia(this))}};function UO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?_c:(n=Number(e.substring(n,r)),isNaN(n)?mf:(r+=1,r+n>e.length?_c:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.J=!0,$r(this)};function Ia(t){t.Y=Date.now()+t.P,fC(t,t.P)}function fC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ca(Ye(t.lb,t),e)}function vu(t){t.B&&(V.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(LO(this.j,this.A),this.L!=2&&(Go(),nt(17)),$r(this),this.o=2,uo(this)):fC(this,this.Y-t)};function uo(t){t.l.H==0||t.J||DC(t.l,t)}function $r(t){vu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Ag(t.V),sC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function vf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_f(n.h,t))){if(!t.K&&_f(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Cc(n),Su(n);else break e;Wg(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Ca(Ye(n.ib,n),6e3));if(1>=EC(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ur(n,11)}else if((t.K||n.g==t)&&Cc(n),!vc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ug(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,de(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=$C(r,r.I?r.oa:null,r.Y),o.K){CC(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(vu(a),Ia(a)),r.g=o}else OC(r);0<n.i.length&&ku(n)}else c[0]!="stop"&&c[0]!="close"||Ur(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ur(n,7):Vg(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Go(4)}catch{}}function jO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function BO(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BO(t),r=jO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var gC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hr){this.h=e!==void 0?e:t.h,wc(this,t.j),this.s=t.s,this.g=t.g,Ec(this,t.m),this.l=t.l,e=t.i;var n=new qo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lv(this,n),this.o=t.o}else t&&(n=String(t).match(gC))?(this.h=!!e,wc(this,n[1]||"",!0),this.s=qs(n[2]||""),this.g=qs(n[3]||"",!0),Ec(this,n[4]),this.l=qs(n[5]||"",!0),Lv(this,n[6]||"",!0),this.o=qs(n[7]||"")):(this.h=!!e,this.i=new qo(null,this.h))}Hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ys(e,Dv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ys(e,Dv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ys(n,n.charAt(0)=="/"?HO:WO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ys(n,GO)),t.join("")};function Ln(t){return new Hr(t)}function wc(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ec(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lv(t,e,n){e instanceof qo?(t.i=e,qO(t.i,t.h)):(n||(e=Ys(e,KO)),t.i=new qo(e,t.h))}function de(t,e,n){t.i.set(e,n)}function _u(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Dv=/[#\/\?@]/g,WO=/[#\?:]/g,HO=/[#\?]/g,KO=/[#\?@]/g,GO=/#/g;function qo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ir(t){t.g||(t.g=new Map,t.h=0,t.i&&zO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=qo.prototype;A.add=function(t,e){Ir(this),this.i=null,t=Is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mC(t,e){Ir(t),e=Is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function yC(t,e){return Ir(t),e=Is(t,e),t.g.has(e)}A.forEach=function(t,e){Ir(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.sa=function(){Ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.Z=function(t){Ir(this);let e=[];if(typeof t=="string")yC(this,t)&&(e=e.concat(this.g.get(Is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Ir(this),this.i=null,t=Is(this,t),yC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function vC(t,e,n){mC(t,e),0<n.length&&(t.i=null,t.g.set(Is(t,e),kg(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qO(t,e){e&&!t.j&&(Ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(mC(this,r),vC(this,i,n))},t)),t.j=e}var YO=class{constructor(t,e){this.h=t,this.g=e}};function _C(t){this.l=t||QO,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QO=10;function wC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function EC(t){return t.h?1:t.g?t.g.size:0}function _f(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ug(t,e){t.g?t.g.add(e):t.h=e}function CC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_C.prototype.cancel=function(){if(this.i=SC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function SC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kg(t.i)}function jg(){}jg.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};jg.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function XO(){this.g=new jg}function JO(t,e,n){const r=n||"";try{pC(t,function(i,s){let o=i;wa(i)&&(o=Pg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZO(t,e){const n=new mu;if(V.Image){const r=new Image;r.onload=Xa(Za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xa(Za,n,r,"TestLoadImage: error",!1,e),r.onabort=Xa(Za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xa(Za,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Za(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wu(t){this.l=t.fc||null,this.j=t.ob||!1}$e(wu,Mg);wu.prototype.g=function(){return new Eu(this.l,this.j)};wu.prototype.i=function(t){return function(){return t}}({});function Eu(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Eu,Fe);var Bg=0;A=Eu.prototype;A.open=function(t,e){if(this.readyState!=Bg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yo(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=Bg};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function kC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ta(this):Yo(this),this.readyState==3&&kC(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,Ta(this))};A.Ya=function(t){this.g&&(this.response=t,Ta(this))};A.ka=function(){this.g&&Ta(this)};function Ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yo(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eL=V.JSON.parse;function Se(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=IC,this.L=this.M=!1}$e(Se,Fe);var IC="",tL=/^https?$/i,nL=["POST","PUT"];A=Se.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gf.g(),this.C=this.u?Ov(this.u):Ov(gf),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Mv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=zE(nL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{NC(this),0<this.B&&((this.L=rL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=Og(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mv(this,s)}};function rL(t){return Wo&&_O()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof Sg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Mv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,TC(t),Cu(t)}function TC(t){t.F||(t.F=!0,Ve(t,"complete"),Ve(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),Cu(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cu(this,!0)),Se.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?xC(this):this.kb())};A.kb=function(){xC(this)};function xC(t){if(t.h&&typeof Sg<"u"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)Og(t.La,0,t);else if(Ve(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(gC)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!tL.test(i?i.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<Sn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",TC(t)}}finally{Cu(t)}}}}function Cu(t,e){if(t.g){NC(t);const n=t.g,r=t.C[0]?yc:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function NC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Sn(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eL(e)}};function Fv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case IC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bC(t){let e="";return Tg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function RC(t){this.Ga=0,this.i=[],this.j=new mu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=js("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=js("baseRetryDelayMs",5e3,t),this.hb=js("retryDelaySeedMs",1e4,t),this.eb=js("forwardChannelMaxRetries",2,t),this.xa=js("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new _C(t&&t.concurrentRequestLimit),this.Ja=new XO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}A=RC.prototype;A.qa=8;A.H=1;function Vg(t){if(PC(t),t.H==3){var e=t.W++,n=Ln(t.G);de(n,"SID",t.J),de(n,"RID",e),de(n,"TYPE","terminate"),xa(t,n),e=new ka(t,t.j,e,void 0),e.L=2,e.v=_u(Ln(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=UC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ia(e)}FC(t)}function Su(t){t.g&&(Hg(t),t.g.cancel(),t.g=null)}function PC(t){Su(t),t.u&&(V.clearTimeout(t.u),t.u=null),Cc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function ku(t){wC(t.h)||t.m||(t.m=!0,tC(t.Na,t),t.C=0)}function iL(t,e){return EC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ca(Ye(t.Na,t,e),MC(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ka(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=GE(s),qE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=AC(this,i,e),n=Ln(this.G),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),xa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(bC(s)))+"&"+e:this.o&&zg(n,this.o,s)),Ug(this.h,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.ba=!0,yf(i,n,null)):yf(i,n,e),this.H=2}}else this.H==3&&(t?$v(this,t):this.i.length==0||wC(this.h)||$v(this))};function $v(t,e){var n;e?n=e.m:n=t.W++;const r=Ln(t.G);de(r,"SID",t.J),de(r,"RID",n),de(r,"AID",t.V),xa(t,r),t.o&&t.s&&zg(r,t.o,t.s),n=new ka(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=AC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ug(t.h,n),yf(n,r,e)}function xa(t,e){t.ma&&Tg(t.ma,function(n,r){de(e,r,n)}),t.l&&pC({},function(n,r){de(e,r,n)})}function AC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ye(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{JO(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function OC(t){t.g||t.u||(t.ba=1,tC(t.Ma,t),t.A=0)}function Wg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ca(Ye(t.Ma,t),MC(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,LC(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Ca(Ye(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,nt(10),Su(this),LC(this))};function Hg(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function LC(t){t.g=new ka(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ln(t.wa);de(e,"RID","rpc"),de(e,"SID",t.J),de(e,"CI",t.M?"0":"1"),de(e,"AID",t.V),de(e,"TYPE","xmlhttp"),xa(t,e),t.o&&t.s&&zg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=_u(Ln(e)),n.s=null,n.S=!0,uC(n,t)}A.ib=function(){this.v!=null&&(this.v=null,Su(this),Wg(this),nt(19))};function Cc(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function DC(t,e){var n=null;if(t.g==e){Cc(t),Hg(t),t.g=null;var r=2}else if(_f(t.h,e))n=e.F,CC(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Lg(),Ve(r,new lC(r,n)),ku(t)}else OC(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&iL(t,e)||r==2&&Wg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}}function MC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ur(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ye(t.pb,t);n||(n=new Hr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||wc(n,"https"),_u(n)),ZO(n.toString(),r)}else nt(2);t.H=0,t.l&&t.l.za(e),FC(t),PC(t)}A.pb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function FC(t){if(t.H=0,t.pa=[],t.l){const e=SC(t.h);(e.length!=0||t.i.length!=0)&&(Nv(t.pa,e),Nv(t.pa,t.i),t.h.i.length=0,kg(t.i),t.i.length=0),t.l.ya()}}function $C(t,e,n){var r=n instanceof Hr?Ln(n):new Hr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ec(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hr(null,void 0);r&&wc(s,r),e&&(s.g=e),i&&Ec(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.qa),xa(t,r),r}function UC(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new wu({ob:!0})):new Se(t.va),e.Oa(t.I),e}function jC(){}A=jC.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.Va=function(){};function $t(t,e){Fe.call(this),this.g=new RC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ts(this)}$e($t,Fe);$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=$C(t,null,t.Y),ku(t)};$t.prototype.close=function(){Vg(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pg(t),t=n);e.i.push(new YO(e.fb++,t)),e.H==3&&ku(e)};$t.prototype.N=function(){this.g.l=null,delete this.j,Vg(this.g),delete this.g,$t.$.N.call(this)};function BC(t){Fg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(BC,Fg);function zC(){$g.call(this),this.status=1}$e(zC,$g);function Ts(t){this.g=t}$e(Ts,jC);Ts.prototype.Ba=function(){Ve(this.g,"a")};Ts.prototype.Aa=function(t){Ve(this.g,new BC(t))};Ts.prototype.za=function(t){Ve(this.g,new zC)};Ts.prototype.ya=function(){Ve(this.g,"b")};function sL(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(dn,sL);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Th(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Th(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Th(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Th(this,r),i=0;break}}this.h=i,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var oL={};function Kg(t){return-128<=t&&128>t?VE(oL,t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function an(t){if(isNaN(t)||!isFinite(t))return Wi;if(0>t)return Be(an(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wf;return new re(e,0)}function VC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(VC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=an(Math.pow(e,8)),r=Wi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=an(Math.pow(e,s)),r=r.R(s).add(an(o))):(r=r.R(n),r=r.add(an(o)))}return r}var wf=4294967296,Wi=Kg(0),Ef=Kg(1),Uv=Kg(16777216);A=re.prototype;A.ea=function(){if(Pt(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wf+r)*e,e*=wf}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kn(this))return"0";if(Pt(this))return"-"+Be(this).toString(t);for(var e=an(Math.pow(t,6)),n=this,r="";;){var i=kc(n,e).g;n=Sc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}A.X=function(t){return t=Sc(this,t),Pt(t)?-1:kn(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(Ef)}A.abs=function(){return Pt(this)?Be(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Sc(t,e){return t.add(Be(e))}A.R=function(t){if(kn(this)||kn(t))return Wi;if(Pt(this))return Pt(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(Pt(t))return Be(this.R(Be(t)));if(0>this.X(Uv)&&0>t.X(Uv))return an(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,el(n,2*r+2*i),n[2*r+2*i+1]+=s*l,el(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,el(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,el(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function el(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bs(t,e){this.g=t,this.h=e}function kc(t,e){if(kn(e))throw Error("division by zero");if(kn(t))return new Bs(Wi,Wi);if(Pt(t))return e=kc(Be(t),e),new Bs(Be(e.g),Be(e.h));if(Pt(e))return e=kc(t,Be(e)),new Bs(Be(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ef,r=e;0>=r.X(t);)n=jv(n),r=jv(r);var i=gi(n,1),s=gi(r,1);for(r=gi(r,2),n=gi(n,2);!kn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=gi(r,1),n=gi(n,1)}return e=Sc(t,i.R(e)),new Bs(i,e)}for(i=Wi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=an(n),o=s.R(e);Pt(o)||0<o.X(t);)n-=r,s=an(n),o=s.R(e);kn(s)&&(s=Ef),i=i.add(s),t=Sc(t,o)}return new Bs(i,t)}A.gb=function(t){return kc(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function jv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function gi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Dg.NO_ERROR=0;Dg.TIMEOUT=8;Dg.HTTP_ERROR=6;MO.COMPLETE="complete";FO.EventType=Sa;Sa.OPEN="a";Sa.CLOSE="b";Sa.ERROR="c";Sa.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=an;re.fromString=VC;var aL=re;const Bv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new oa("@firebase/firestore");function Et(t,...e){if(Ic.logLevel<=ee.DEBUG){const n=e.map(WC);Ic.debug(`Firestore (${Iu}): ${t}`,...n)}}function Gg(t,...e){if(Ic.logLevel<=ee.ERROR){const n=e.map(WC);Ic.error(`Firestore (${Iu}): ${t}`,...n)}}function WC(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function HC(t="Unexpected state"){const e=`FIRESTORE (${Iu}) INTERNAL ASSERTION FAILED: `+t;throw Gg(e),new Error(e)}function Cf(t,e){t||HC()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _t extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}let uL=class{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Et("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Cf(typeof r.accessToken=="string"),new lL(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Cf(e===null||typeof e=="string"),new at(e)}},hL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class dL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let fL=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class pL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&Et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Et("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):Et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Cf(typeof n.token=="string"),this.T=n.token,new fL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function KC(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Tc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zv,X;(X=zv||(zv={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new aL([4294967295,4294967295],0);function xh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&Et("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _t(vt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _L(t,e){if(Gg("AsyncQueue",`${e}: ${t}`),KC(t))return new _t(vt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=mL.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Et("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Et("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _t(vt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_L(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function GC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Vv=new Map;function EL(t,e,n,r){if(e===!0&&r===!0)throw new _t(vt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class Wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new _t(vt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _t(vt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _t(vt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _t(vt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _t(vt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class CL{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _t(vt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _t(vt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cL;switch(n.type){case"firstParty":return new dL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _t(vt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vv.get(e);n&&(Et("ComponentProvider","Removing Datastore"),Vv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class SL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new vL(this,"async_queue_retry"),this.Xc=()=>{const n=xh();n&&Et("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=xh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=xh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Hi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!KC(e))throw e;Et("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Gg("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=qg.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&HC()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class kL extends CL{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||IL(this),this._firestoreClient.terminate()}}function IL(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new yL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,GC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new wL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Iu=n})(Mn),Ft(new kt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new kL(new uL(n.getProvider("auth-internal")),new pL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _t(vt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tc(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ie(Bv,"3.12.0",t),Ie(Bv,"3.12.0","esm2017")})();/**
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
 */const TL="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="us-central1";class NL{constructor(e,n,r,i,s=Hv,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new xL(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=Hv}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const Kv="@firebase/functions",Gv="0.9.4";/**
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
 */const bL="auth-internal",RL="app-check-internal",PL="messaging-internal";function AL(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(bL),a=r.getProvider(PL),l=r.getProvider(RL);return new NL(s,o,a,l,i,t)};Ft(new kt(TL,n,"PUBLIC").setMultipleInstances(!0)),Ie(Kv,Gv,e),Ie(Kv,Gv,"esm2017")}AL(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="firebasestorage.googleapis.com",OL="storageBucket",LL=2*60*1e3,DL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ut{constructor(e,n,r=0){super(Nh(e),`Firebase Storage: ${n} (${Nh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fn||(fn={}));function Nh(t){return"storage/"+t}function ML(){const t="An unknown error occurred, please check the error payload for server response.";return new gn(fn.UNKNOWN,t)}function FL(){return new gn(fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $L(){return new gn(fn.CANCELED,"User canceled the upload/download.")}function UL(t){return new gn(fn.INVALID_URL,"Invalid URL '"+t+"'.")}function jL(t){return new gn(fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qv(t){return new gn(fn.INVALID_ARGUMENT,t)}function YC(){return new gn(fn.APP_DELETED,"The Firebase app was deleted.")}function BL(t){return new gn(fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw jL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},_=n===qC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${k}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<y.length;E++){const N=y[E],P=N.regex.exec(e);if(P){const b=P[N.indices.bucket];let L=P[N.indices.path];L||(L=""),r=new qt(b,L),N.postModify(r);break}}if(r==null)throw UL(e);return r}}class zL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(m,l())},k)}function f(){s&&clearTimeout(s)}function m(k,...g){if(c){f();return}if(k){f(),u.call(null,k,...g);return}if(l()||o){f(),u.call(null,k,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(k){v||(v=!0,f(),!c&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function WL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t){return t!==void 0}function Yv(t,e,n,r){if(r<e)throw qv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qv(`Invalid value for '${t}'. Expected ${n} or less.`)}function KL(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xc||(xc={}));/**
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
 */function GL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n,r,i,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===xc.NO_ERROR,l=s.getStatus();if(!a||GL(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===xc.ABORT;r(!1,new tl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new tl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ML();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?YC():$L();o(l)}else{const l=FL();o(l)}};this.canceled_?n(!1,new tl(!1,null,!0)):this.backoffId_=VL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZL(t,e,n,r,i,s,o=!0){const a=KL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return XL(c,e),YL(c,n),QL(c,s),JL(c,r),new qL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Nc{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nc(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tD(this._location.path)}get storage(){return this._service}get parent(){const e=eD(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new Nc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BL(e)}}function Qv(t,e){const n=e==null?void 0:e[OL];return n==null?null:qt.makeFromBucketSpec(n,t)}class nD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=qC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LL,this._maxUploadRetryTime=DL,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=Qv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=Qv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zL(YC());{const o=ZL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xv="@firebase/storage",Jv="0.11.2";/**
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
 */const rD="storage";function iD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nD(n,r,i,e,Mn)}function sD(){Ft(new kt(rD,iD,"PUBLIC").setMultipleInstances(!0)),Ie(Xv,Jv,""),Ie(Xv,Jv,"esm2017")}sD();const oD=(t,e)=>e.some(n=>t instanceof n);let Zv,e_;function aD(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lD(){return e_||(e_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QC=new WeakMap,Sf=new WeakMap,XC=new WeakMap,bh=new WeakMap,Yg=new WeakMap;function cD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QC.set(n,t)}).catch(()=>{}),Yg.set(e,t),e}function uD(t){if(Sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sf.set(t,e)}let kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||XC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hD(t){kf=t(kf)}function dD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rh(this),e,...n);return XC.set(r,e.sort?e.sort():[e]),mr(r)}:lD().includes(t)?function(...e){return t.apply(Rh(this),e),mr(QC.get(this))}:function(...e){return mr(t.apply(Rh(this),e))}}function fD(t){return typeof t=="function"?dD(t):(t instanceof IDBTransaction&&uD(t),oD(t,aD())?new Proxy(t,kf):t)}function mr(t){if(t instanceof IDBRequest)return cD(t);if(bh.has(t))return bh.get(t);const e=fD(t);return e!==t&&(bh.set(t,e),Yg.set(e,t)),e}const Rh=t=>Yg.get(t);function pD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mr(o.result),l.oldVersion,l.newVersion,mr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const gD=["get","getKey","getAll","getAllKeys","count"],mD=["put","add","delete","clear"],Ph=new Map;function t_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ph.get(e))return Ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ph.set(e,s),s}hD(t=>({...t,get:(e,n,r)=>t_(e,n)||t.get(e,n,r),has:(e,n)=>!!t_(e,n)||t.has(e,n)}));const JC="@firebase/installations",Qg="0.6.4";/**
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
 */const ZC=1e4,eS=`w:${Qg}`,tS="FIS_v2",yD="https://firebaseinstallations.googleapis.com/v1",vD=60*60*1e3,_D="installations",wD="Installations";/**
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
 */const ED={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ii=new ci(_D,wD,ED);function nS(t){return t instanceof Ut&&t.code.includes("request-failed")}/**
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
 */function rS({projectId:t}){return`${yD}/projects/${t}/installations`}function iS(t){return{token:t.token,requestStatus:2,expiresIn:SD(t.expiresIn),creationTime:Date.now()}}async function sS(t,e){const r=(await e.json()).error;return ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function oS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function CD(t,{refreshToken:e}){const n=oS(t);return n.append("Authorization",kD(e)),n}async function aS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function SD(t){return Number(t.replace("s","000"))}function kD(t){return`${tS} ${t}`}/**
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
 */async function ID({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=rS(t),i=oS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:tS,appId:t.appId,sdkVersion:eS},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await aS(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:iS(c.authToken)}}else throw await sS("Create Installation",l)}/**
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
 */function lS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function TD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xD=/^[cdef][\w-]{21}$/,If="";function ND(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=bD(t);return xD.test(n)?n:If}catch{return If}}function bD(t){return TD(t).substr(0,22)}/**
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
 */function Tu(t){return`${t.appName}!${t.appId}`}/**
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
 */const cS=new Map;function uS(t,e){const n=Tu(t);hS(n,e),RD(n,e)}function hS(t,e){const n=cS.get(t);if(n)for(const r of n)r(e)}function RD(t,e){const n=PD();n&&n.postMessage({key:t,fid:e}),AD()}let jr=null;function PD(){return!jr&&"BroadcastChannel"in self&&(jr=new BroadcastChannel("[Firebase] FID Change"),jr.onmessage=t=>{hS(t.data.key,t.data.fid)}),jr}function AD(){cS.size===0&&jr&&(jr.close(),jr=null)}/**
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
 */const OD="firebase-installations-database",LD=1,si="firebase-installations-store";let Ah=null;function Xg(){return Ah||(Ah=pD(OD,LD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}})),Ah}async function bc(t,e){const n=Tu(t),i=(await Xg()).transaction(si,"readwrite"),s=i.objectStore(si),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&uS(t,e.fid),e}async function dS(t){const e=Tu(t),r=(await Xg()).transaction(si,"readwrite");await r.objectStore(si).delete(e),await r.done}async function xu(t,e){const n=Tu(t),i=(await Xg()).transaction(si,"readwrite"),s=i.objectStore(si),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&uS(t,a.fid),a}/**
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
 */async function Jg(t){let e;const n=await xu(t.appConfig,r=>{const i=DD(r),s=MD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===If?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DD(t){const e=t||{fid:ND(),registrationStatus:0};return fS(e)}function MD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=FD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$D(t)}:{installationEntry:e}}async function FD(t,e){try{const n=await ID(t,e);return bc(t.appConfig,n)}catch(n){throw nS(n)&&n.customData.serverCode===409?await dS(t.appConfig):await bc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $D(t){let e=await n_(t.appConfig);for(;e.registrationStatus===1;)await lS(100),e=await n_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jg(t);return r||n}return e}function n_(t){return xu(t,e=>{if(!e)throw ii.create("installation-not-found");return fS(e)})}function fS(t){return UD(t)?{fid:t.fid,registrationStatus:0}:t}function UD(t){return t.registrationStatus===1&&t.registrationTime+ZC<Date.now()}/**
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
 */async function jD({appConfig:t,heartbeatServiceProvider:e},n){const r=BD(t,n),i=CD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:eS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await aS(()=>fetch(r,a));if(l.ok){const c=await l.json();return iS(c)}else throw await sS("Generate Auth Token",l)}function BD(t,{fid:e}){return`${rS(t)}/${e}/authTokens:generate`}/**
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
 */async function Zg(t,e=!1){let n;const r=await xu(t.appConfig,s=>{if(!pS(s))throw ii.create("not-registered");const o=s.authToken;if(!e&&WD(o))return s;if(o.requestStatus===1)return n=zD(t,e),s;{if(!navigator.onLine)throw ii.create("app-offline");const a=KD(s);return n=VD(t,a),a}});return n?await n:r.authToken}async function zD(t,e){let n=await r_(t.appConfig);for(;n.authToken.requestStatus===1;)await lS(100),n=await r_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Zg(t,e):r}function r_(t){return xu(t,e=>{if(!pS(e))throw ii.create("not-registered");const n=e.authToken;return GD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VD(t,e){try{const n=await jD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bc(t.appConfig,r),n}catch(n){if(nS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bc(t.appConfig,r)}throw n}}function pS(t){return t!==void 0&&t.registrationStatus===2}function WD(t){return t.requestStatus===2&&!HD(t)}function HD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vD}function KD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function GD(t){return t.requestStatus===1&&t.requestTime+ZC<Date.now()}/**
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
 */async function qD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Jg(e);return r?r.catch(console.error):Zg(e).catch(console.error),n.fid}/**
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
 */async function YD(t,e=!1){const n=t;return await QD(n),(await Zg(n,e)).token}async function QD(t){const{registrationPromise:e}=await Jg(t);e&&await e}/**
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
 */function XD(t){if(!t||!t.options)throw Oh("App Configuration");if(!t.name)throw Oh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oh(t){return ii.create("missing-app-config-values",{valueName:t})}/**
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
 */const gS="installations",JD="installations-internal",ZD=t=>{const e=t.getProvider("app").getImmediate(),n=XD(e),r=aa(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eM=t=>{const e=t.getProvider("app").getImmediate(),n=aa(e,gS).getImmediate();return{getId:()=>qD(n),getToken:i=>YD(n,i)}};function tM(){Ft(new kt(gS,ZD,"PUBLIC")),Ft(new kt(JD,eM,"PRIVATE"))}tM();Ie(JC,Qg);Ie(JC,Qg,"esm2017");const Lh="@firebase/remote-config",i_="0.4.4";/**
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
 */const nM="remote-config";/**
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
 */const rM={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},ct=new ci("remoteconfig","Remote Config",rM);function iM(t){const e=Ze(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class sM{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function oM(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class aM{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:oM()},l={method:"POST",headers:o,body:JSON.stringify(a)},c=fetch(s,l),u=new Promise((k,g)=>{e.signal.addEventListener(()=>{const p=new Error("The operation was aborted.");p.name="AbortError",g(p)})});let h;try{await Promise.race([c,u]),h=await c}catch(k){let g="fetch-client-network";throw(k==null?void 0:k.name)==="AbortError"&&(g="fetch-timeout"),ct.create(g,{originalErrorMessage:k==null?void 0:k.message})}let f=h.status;const m=h.headers.get("ETag")||void 0;let v,_;if(h.status===200){let k;try{k=await h.json()}catch(g){throw ct.create("fetch-client-parse",{originalErrorMessage:g==null?void 0:g.message})}v=k.entries,_=k.state}if(_==="INSTANCE_STATE_UNSPECIFIED"?f=500:_==="NO_CHANGE"?f=304:(_==="NO_TEMPLATE"||_==="EMPTY_CONFIG")&&(v={}),f!==304&&f!==200)throw ct.create("fetch-status",{httpStatus:f});return{status:f,eTag:m,config:v}}}/**
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
 */function lM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cM(t){if(!(t instanceof Ut)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class uM{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await lM(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!cM(i))throw i;const s={throttleEndTimeMillis:Date.now()+Rx(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const hM=60*1e3,dM=12*60*60*1e3;class fM{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:hM,minimumFetchIntervalMillis:dM},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function _l(t,e){const n=t.target.error||void 0;return ct.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const Ar="app_namespace_store",pM="firebase_remote_config",gM=1;function mM(){return new Promise((t,e)=>{try{const n=indexedDB.open(pM,gM);n.onerror=r=>{e(_l(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Ar,{keyPath:"compositeKey"})}}}catch(n){e(ct.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class yM{constructor(e,n,r,i=mM()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ar],"readonly").objectStore(Ar),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=c=>{i(_l(c,"storage-get"))},l.onsuccess=c=>{const u=c.target.result;r(u?u.value:void 0)}}catch(l){i(ct.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([Ar],"readwrite").objectStore(Ar),l=this.createCompositeKey(e);try{const c=a.put({compositeKey:l,value:n});c.onerror=u=>{s(_l(u,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(ct.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ar],"readwrite").objectStore(Ar),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=c=>{i(_l(c,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(ct.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class vM{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function _M(){Ft(new kt(nM,t,"PUBLIC").setMultipleInstances(!0)),Ie(Lh,i_),Ie(Lh,i_,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw ct.create("registration-window");if(!Bw())throw ct.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw ct.create("registration-project-id");if(!o)throw ct.create("registration-api-key");if(!a)throw ct.create("registration-app-id");n=n||"firebase";const l=new yM(a,r.name,n),c=new vM(l),u=new oa(Lh);u.logLevel=ee.ERROR;const h=new aM(i,Mn,n,s,o,a),f=new uM(h,l),m=new sM(f,l,c,u),v=new fM(r,m,c,l,u);return iM(v),v}}_M();var Tf=function(t,e){return Tf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Tf(t,e)};function $n(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Tf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function xf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Xo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function xn(t){return typeof t=="function"}function em(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Dh=em(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Rc(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Na=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=xf(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(_){e={error:_}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(xn(u))try{u()}catch(_){s=_ instanceof Dh?_.errors:[_]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=xf(h),m=f.next();!m.done;m=f.next()){var v=m.value;try{s_(v)}catch(_){s=s??[],_ instanceof Dh?s=Xo(Xo([],Qo(s)),Qo(_.errors)):s.push(_)}}}catch(_){r={error:_}}finally{try{m&&!m.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}if(s)throw new Dh(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)s_(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Rc(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Rc(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),mS=Na.EMPTY;function yS(t){return t instanceof Na||t&&"closed"in t&&xn(t.remove)&&xn(t.add)&&xn(t.unsubscribe)}function s_(t){xn(t)?t():t.unsubscribe()}var vS={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},wM={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Xo([t,e],Qo(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function EM(t){wM.setTimeout(function(){throw t})}function o_(){}function wl(t){t()}var tm=function(t){$n(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,yS(n)&&n.add(r)):r.destination=IM,r}return e.create=function(n,r,i){return new Nf(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Na),CM=Function.prototype.bind;function Mh(t,e){return CM.call(t,e)}var SM=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){nl(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){nl(r)}else nl(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){nl(n)}},t}(),Nf=function(t){$n(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(xn(n)||!n)o={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;s&&vS.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Mh(n.next,a),error:n.error&&Mh(n.error,a),complete:n.complete&&Mh(n.complete,a)}):o=n}return s.destination=new SM(o),s}return e}(tm);function nl(t){EM(t)}function kM(t){throw t}var IM={closed:!0,next:o_,error:kM,complete:o_},TM=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function xM(t){return t}function NM(t){return t.length===0?xM:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var a_=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=RM(e)?e:new Nf(e,n,r);return wl(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=l_(n),new n(function(i,s){var o=new Nf({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[TM]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return NM(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=l_(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function l_(t){var e;return(e=t??vS.Promise)!==null&&e!==void 0?e:Promise}function bM(t){return t&&xn(t.next)&&xn(t.error)&&xn(t.complete)}function RM(t){return t&&t instanceof tm||bM(t)&&yS(t)}(function(t){$n(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(u){n.error(u)}}:t.prototype._next,l._error=s?function(c){try{s(c)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(tm);var PM=em(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),_S=function(t){$n(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new c_(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new PM},e.prototype.next=function(n){var r=this;wl(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=xf(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;wl(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;wl(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?mS:(this.currentObservers=null,a.push(n),new Na(function(){r.currentObservers=null,Rc(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new a_;return n.source=this,n},e.create=function(n,r){return new c_(n,r)},e}(a_),c_=function(t){$n(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:mS},e}(_S),nm={now:function(){return(nm.delegate||Date).now()},delegate:void 0};(function(t){$n(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=nm);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),c=0,u=1;u<s.length&&s[u]<=l;u+=2)c=u;c&&s.splice(0,c+1)}},e})(_S);var AM=function(t){$n(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Na),bf={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=bf.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Xo([t,e],Qo(n))):setInterval.apply(void 0,Xo([t,e],Qo(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},OM=function(t){$n(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),bf.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;bf.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Rc(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(AM),u_=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=nm.now,t}(),LM=function(t){$n(e,t);function e(n,r){r===void 0&&(r=u_.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(u_);new LM(OM);em(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const DM="[DEFAULT]",MM=S.createContext(void 0),FM=S.createContext(!1),$M="4.2.2",UM=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function jM(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=S.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=xN().find(o=>o.name===(n||DM));if(s){if(e&&UM(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=S.version||"unknown";return Ie("react",o),Ie("reactfire",$M),Hw(e,n)}},[t.firebaseApp,e,n]);return S.createElement(MM.Provider,{value:i},S.createElement(FM.Provider,Object.assign({value:r??!1},t)))}/**
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
 */var xr,Or;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Or||(Or={}));Object.freeze((xr={},xr[Or.added]=$P,xr[Or.removed]=BP,xr[Or.changed]=UP,xr[Or.moved]=jP,xr[Or.value]=fa,xr));const BM=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=BM);const zM=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=zM);const VM=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=VM);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);const Fh=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];function WM({currentItems:t}){return d(E_,{children:t&&t.map(e=>d("div",{children:C("h3",{children:["Item #",e]})}))})}function HM({itemsPerPage:t}){const[e,n]=S.useState(0),r=e+t;console.log(`Loading items from ${e} to ${r}`);const i=Fh.slice(e,r),s=Math.ceil(Fh.length/t);return C(E_,{children:[d(WM,{currentItems:i}),d(oO,{breakLabel:"...",nextLabel:" next >",onPageChange:a=>{const l=a.selected*t%Fh.length;console.log(`User requested page number ${a.selected}, which is offset ${l}`),n(l)},pageRangeDisplayed:5,pageCount:s,previousLabel:"< previous",renderOnZeroPageCount:null})]})}function rm(){return C("section",{className:"flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-40 h-40 text-gray-300 animate-pulse ",children:[d("path",{fill:"currentColor",d:"M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"}),d("rect",{width:"176",height:"32",x:"168",y:"320",fill:"currentColor"}),d("polygon",{fill:"currentColor",points:"210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"}),d("polygon",{fill:"currentColor",points:"383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"})]}),d("p",{className:"text-3xl text-gray-300 animate-pulse",children:"Looks like this page are currently offline for you"}),d("a",{rel:"noopener noreferrer",href:"/",className:"px-8 py-3 font-semibold rounded text-gray-400 hover:border hover:rounded-xl hover:text-gray-100 ",children:"Back to homepage"})]})}function KM(){return C("footer",{className:"border-t border-gray-400 py-8 px-8 lg:px-40",children:[C("section",{className:"flex flex-wrap items-center justify-between",children:[d(Zi,{image:Pw,classLogo:"text-gray-400",logo:"btc"}),C("aside",{className:"flex flex-wrap",children:[d(Fi,{is:!0,classN:"md:border-none",section:"Company",liOne:"About us",liTwo:"Legal",liThree:"Career",liFour:"Contact"}),d(Fi,{section:"Services",liOne:"Pricing",liTwo:"Products",liThree:"Customers",liFour:"Success Stories"}),d(Fi,{section:"Support",liOne:"About us",liTwo:"Legal",liThree:"Career"})]})]}),d("section",{className:"flex items-center flex-start text-gray-50",children:C("p",{children:["© Business Travel Consulting ",d("span",{id:"current-year"})," - All rights reserved · Privacy Policy"]})}),d("style",{children:`
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
					`})]})}const GM="/assets/user-3ddc77cc.png";function qM(t){return C("div",{className:"grid md:grid-cols-3 gap-2 lg:px-40",children:[d("article",{className:"col-span-2",children:C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 ",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Navigation"}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/services",children:"Services"})}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/work",children:"Work"})}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/thoughts",children:"Thoughts"})}),d("li",{className:"my-1 text-4xl lg:my-5 lg:text-8xl",children:d("a",{href:"/connect",children:"Connect"})})]})}),C("aside",{children:[C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Behind The Scenes"}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/about",children:"About Us"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/news",children:"News"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/jobs",children:"Jobs"})})]}),C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Offices"}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/",children:"BTC Americas"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/price-travel",children:"Price Travel"})}),d("li",{className:"lg:my-1 lg:text-3xl",children:d("a",{href:"/big-fish",children:"Big Fish"})})]}),C("ul",{className:"flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8",children:[d("h5",{className:"uppercase text-1xl border-b",children:"Admin"}),t.children]})]}),d("style",{children:`
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
				`})]})}function YM(t){const[e,n]=S.useState(!1);return C("div",{className:"flex items-center justify-between py-8 px-8 lg:px-40 w-full",children:[d(Zi,{image:ql,classLogo:"text-gray-100",logo:"btc"}),C("nav",{className:"flex",children:[d("section",{className:"relative flex flex-col justify-center bg-red-600 items-center rounded-full w-[60px] h-[60px] button-plus",onClick:()=>n(r=>!r),children:d("img",{className:"w-full",alt:"image user",src:GM})}),d("section",{className:e?"showMenuNav":"hideMenuNav",children:C("div",{className:"h-full",children:[C("header",{className:"flex items-center justify-between py-8 px-8 lg:px-40 mb-8",onClick:()=>n(!1),children:[d(Zi,{image:ql,classLogo:"text-gray-100",logo:"btc"}),C("div",{className:"flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus",onClick:()=>n(r=>!r),children:[d("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"}),d("span",{className:"block h-1 w-8 animate-pulse bg-gray-100"}),d("span",{className:"block h-1 w-4 animate-pulse rotate-90 bg-gray-100"})]})]}),d(qM,{children:t.children})]})})]}),d("style",{children:`
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
					`})]})}function im({logOut:t,content:e}){return C("div",{className:"bg-[rgb(0,12,26)]",children:[d(YM,{children:t}),e,d(KM,{})]})}function Pe({label:t,name:e,on:n}){return C("div",{className:"my-4",children:[d("label",{htmlFor:"",className:"text-gray-300 text-sm",children:t}),d("input",{type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}function QM({on:t}){return C("div",{className:"",children:[d("label",{htmlFor:"",className:"text-gray-300 mx-2",children:"Asignar Fecha"}),d("input",{type:"checkbox",name:"dateVacancy",onChange:t,className:"relative float-right mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:bg-blue-800"})]})}function wS({label:t,name:e,on:n}){return C("div",{className:"my-4",children:[d("label",{htmlFor:"",className:"text-gray-300",children:t}),d("textarea",{type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}function XM(){const[t,e]=S.useState({}),n=c=>{const u=c.target.name,h=c.target.value;e({...t,[u]:h})},r=pa(),i=os(r,"/vacancy"),s=()=>DP(i,t),o=new Date,a=`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}`;return d("section",{className:"flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ",children:C("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",children:[d("div",{className:"flex justify-end",children:d(QM,{on:c=>{const u=c.target.name,h=a;e({...t,[u]:h})}})}),d(Pe,{label:"Vacante",name:"vacancyTitle",on:n}),d(Pe,{label:"Área",name:"areaVacancy",on:n}),d(Pe,{label:"Categoría",name:"categoryVacancy",on:n}),d(Pe,{label:"Subcategoría",name:"subcategoryVacancy",on:n}),d(Pe,{label:"Salario",name:"salaryVacancy",on:n}),d(Pe,{label:"Jornada Laboral",name:"typeVacancy",on:n}),d(Pe,{label:"Modalidad",name:"typeLocation",on:n}),d(Pe,{label:"Ubicación",name:"locationPlace",on:n}),d(Pe,{label:"Educación mínima requerida",name:"requiredVacancy",on:n}),d(wS,{label:"Descripción",name:"content",on:n}),d("div",{children:d("button",{className:"bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none",type:"button",onClick:s,children:"Create"})})]})})}function JM(){const[t,e]=S.useState({}),n=pa(),r=os(n,"/vacancy");S.useEffect(()=>{fa(r,l=>{e(l.val())})},[]);const[i,s]=S.useState(0),o=i+18,a=Object.keys(t).slice(i,o);return C("section",{children:[d("article",{className:"flex justify-center flex-col items-center pb-20",children:d("div",{className:"w-full",children:a.sort((l,c)=>l.name>c.name?-1:1).map(l=>{const c=t[l];return C(aE,{vacancyData:c,children:[d(Gl,{to:`/admin/edit/${l}`,children:C("button",{className:"bg-[#74ff0029] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#8bdc4870] mb-1 w-[120px]",children:[d("span",{className:"material-symbols-outlined",children:"edit"}),"Edit"]})}),C("button",{className:"bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]",onClick:()=>{MP(os(n,`/vacancy/${l}`))},children:[d("span",{className:"material-symbols-outlined",children:"delete"}),"Delete"]})]},l)})})}),d("style",{children:`
					option  {
						{/* background-color: #172637; */}
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `})]})}function ZM(){return C("section",{className:"flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8",children:[d(XM,{}),d("article",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:d(JM,{})})]})}function e4(){return C("section",{className:"flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 ",children:[d("h1",{className:"text-gray-100 text-4xl font-semibold w-full",children:"Welcome Charly"}),C("article",{className:"flex items-start justify-center flex-wrap w-full",children:[C("aside",{className:"w-full px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[d("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Candidates"}),d(Gl,{to:"/admin/",children:d("button",{className:"bg-[#ffffff17] py-1 px-4 rounded-md font-semibold ml-4 text-gray-100 hover:bg-[#3232328d] ml-0 animate-pulse hover:animate-none",children:"See more..."})})]}),C("aside",{className:"w-full px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[d("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Vacancies"}),d(Gl,{to:"create",children:d("button",{className:"bg-[#ffffff17] py-1 px-4 rounded-md font-semibold ml-4 text-gray-100 hover:bg-[#3232328d] ml-0 animate-pulse hover:animate-none",children:"See more..."})})]})]})]})}function t4(){const[t,e]=S.useState(!1),n=_a(),r=fs(),i=()=>{wg(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return S.useEffect(()=>{ls(n,o=>{o?(o.uid,o.email):console.log("User is logged out")})},[]),S.useEffect(()=>{ls(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log("Welcome Charly"),e(!0)):e(!1)})}),d("div",{children:t?d(im,{logOut:(()=>C("div",{className:"flex justify-start w-full max-w-4xl",children:[C("button",{onClick:i,className:"btn-animate flex items-center lg:text-3xl text-gray-100",children:[d("span",{className:"material-symbols-outlined lg:text-3xl",children:"logout"}),d("span",{className:"text-border-btn",children:"Logout"})]}),d("style",{children:`
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
					`})]}))(),content:d(e4,{})}):d(ps,{children:d(rm,{})})})}function n4({deleteBtn:t}){const[e,n]=S.useState({}),{id:r}=bw(),i=pa(),s=os(i,`/vacancy/${r}`);S.useEffect(()=>{fa(s,we=>{n(we.val())})},[]);const{dateVacancy:o,vacancyTitle:a,typeVacancy:l,areaVacancy:c,locationPlace:u,typeLocation:h,content:f,salaryVacancy:m,categoryVacancy:v,subcategoryVacancy:_,requiredVacancy:k}=e,g=we=>{const M=we.target.name,F=new Date(we.target.value);n({...e,[M]:F})},p=new Date,y=`${p.getFullYear()}-${p.getMonth()+1}-${p.getDate()}`,E=new Date(y),N=new Date(o),P=864e5,L=(E-N)/P,$=we=>{const M=we.target.name,F=we.target.value;n({...e,[M]:F})},W=()=>FP(s,e);return C("main",{className:"my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]",children:[d("section",{className:"flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8",children:C("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",children:[C("div",{className:"flex justify-end items-center",children:[d("label",{className:"text-gray-300 mx-2",children:"Fecha:"}),d("input",{type:"date",name:"dateVacancy",onChange:g,className:"rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"})]}),d(Pe,{label:"Vacante",name:"vacancyTitle",on:$}),d(Pe,{label:"Área",name:"areaVacancy",on:$}),d(Pe,{label:"Categoría",name:"categoryVacancy",on:$}),d(Pe,{label:"Subcategoría",name:"subcategoryVacancy",on:$}),d(Pe,{label:"Salario",name:"salaryVacancy",on:$}),d(Pe,{label:"Jornada Laboral",name:"typeVacancy",on:$}),d(Pe,{label:"Modalidad",name:"typeLocation",on:$}),d(Pe,{label:"Ubicación",name:"locationPlace",on:$}),d(Pe,{label:"Educación mínima requerida",name:"requiredVacancy",on:$}),d(wS,{label:"Descripción",name:"content",on:$})]})}),d("div",{className:"w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5",children:d("section",{className:"flex justify-center flex-col items-center mb-8",children:C("aside",{className:"bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md",children:[C("header",{className:"pb-4 w-full border-b-2 border-[#ffffff21]",children:[C("h1",{className:"font-bold text-2xl flex justify-between text-gray-100",children:[a,d("span",{className:"text-slate-500 text-sm font-light",children:o==y?"Hoy":"Hace "+L+" días"})]}),d("p",{className:"font-bold text-gray-200",children:m}),C("span",{className:"text-slate-300 text-sm flex gap-1 items-center",children:[C("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),d("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),c,", ",u]}),C("div",{className:"flex items-center gap-3 mt-2",children:[d("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:l}),d("span",{className:"bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm",children:h})]})]}),C("article",{className:"py-2",children:[C("aside",{className:"py-2",children:[d("h3",{className:"font-bold text-lg text-gray-100",children:"Sobre el Empleo"}),C("p",{children:[d("span",{className:"text-gray-100",children:"Categoría: "}),C("span",{className:"text-gray-300",children:[" ",v]})]}),C("p",{children:[d("span",{className:"text-gray-100",children:"Subcategoría: "}),C("span",{className:"text-gray-300",children:[" ",_]})]}),C("p",{children:[C("span",{className:"text-gray-100",children:["Educación mínima requerida:"," "]}),C("span",{className:"text-gray-300",children:[" ",k]})]})]}),C("aside",{className:"py-2",children:[d("h3",{className:"font-bold text-lg text-gray-100",children:"Descripción"}),d("p",{className:"text-gray-300",children:f})]})]}),d("button",{className:"bg-[#8bdc4870] py-1 px-4 rounded-md font-semibold ml-4 text-gray-100 hover:bg-[#8bdc488d] ml-0 animate-pulse hover:animate-none",type:"button",onClick:W,children:"Update"})]})})})]})}function r4(){return d(n4,{})}function i4(){const[t,e]=S.useState(!1),n=_a(),r=fs(),i=()=>{wg(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return S.useEffect(()=>{ls(n,o=>{o?(o.uid,o.email):console.log("User is logged out")})},[]),S.useEffect(()=>{ls(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log("Panel de 'Update'"),e(!0)):e(!1)})}),d("div",{children:t?d(im,{logOut:(()=>C("div",{className:"flex justify-start w-full max-w-4xl",children:[C("button",{onClick:i,className:"btn-animate flex items-center lg:text-3xl text-gray-100",children:[d("span",{className:"material-symbols-outlined lg:text-3xl",children:"logout"}),d("span",{className:"text-border-btn",children:"Logout"})]}),d("style",{children:`
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
					`})]}))(),content:d(r4,{})}):d(ps,{children:d(rm,{})})})}function s4(){const[t,e]=S.useState(!1),n=_a(),r=fs(),i=()=>{wg(n).then(()=>{r("/"),console.log("Signed out successfully")}).catch(o=>{console.log("error")})};return S.useEffect(()=>{ls(n,o=>{o?(o.uid,o.email):console.log("User is logged out")})},[]),S.useEffect(()=>{ls(n,o=>{o.email=="carlosarturomt@gmail.com"?(console.log("Welcome to Create Vacancies Panel"),e(!0)):e(!1)})}),d("div",{children:t?d(im,{logOut:(()=>C("div",{className:"flex justify-start w-full max-w-4xl",children:[C("button",{onClick:i,className:"btn-animate flex items-center lg:text-3xl text-gray-100",children:[d("span",{className:"material-symbols-outlined lg:text-3xl",children:"logout"}),d("span",{className:"text-border-btn",children:"Logout"})]}),d("style",{children:`
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
					`})]}))(),content:d(ZM,{})}):d(ps,{children:d(rm,{})})})}function o4(){return d(qT,{children:C(VT,{children:[d(nn,{path:"/",element:d(nx,{})}),d(nn,{path:"/jobs",element:d(XP,{})}),d(nn,{path:"/login",element:d(rO,{})}),d(nn,{path:"/signup",element:d(nO,{})}),d(nn,{path:"/jobs/:id",element:d(iO,{})}),d(nn,{path:"/admin",element:d(t4,{})}),d(nn,{path:"/admin/create",element:d(s4,{})}),d(nn,{path:"/admin/edit/:id",element:d(i4,{})}),d(nn,{path:"/test",element:d(HM,{itemsPerPage:4})})]})})}const a4={apiKey:"AIzaSyDHkEMtgdX928zEjye6GsEfJwDX_5Ijjag",authDomain:"reactdemo-fdaf5.firebaseapp.com",databaseURL:"https://reactdemo-fdaf5-default-rtdb.firebaseio.com",projectId:"reactdemo-fdaf5",storageBucket:"reactdemo-fdaf5.appspot.com",messagingSenderId:"749100592564",appId:"1:749100592564:web:aa5d0569ddb8266981d6e1",measurementId:"G-VWXP75P120"};Uh.createRoot(document.getElementById("root")).render(d(__.StrictMode,{children:d(jM,{firebaseConfig:a4,children:d(S.Suspense,{fallback:console.log("Suspense..."),children:d(o4,{})})})}));
