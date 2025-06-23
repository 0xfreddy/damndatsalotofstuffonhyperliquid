function Sy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function My(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lv={exports:{}},Cu={},Iv={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),wy=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),by=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),zp=Symbol.iterator;function Iy(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var Nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uv=Object.assign,Ov={};function ss(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Nv}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=ss.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Nv}var dh=ch.prototype=new Fv;dh.constructor=ch;Uv(dh,ss.prototype);dh.isPureReactComponent=!0;var Vp=Array.isArray,kv=Object.prototype.hasOwnProperty,fh={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)kv.call(e,i)&&!Bv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ga,type:t,key:o,ref:s,props:r,_owner:fh.current}}function Ny(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function Uy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hp=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uy(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ga:case Ey:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+cc(s,0):i,Vp(r)?(n="",t!=null&&(n=t.replace(Hp,"$&/")+"/"),Ml(r,e,n,"",function(u){return u})):r!=null&&(hh(r)&&(r=Ny(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Hp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Vp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+cc(o,a);s+=Ml(o,e,n,l,r)}else if(l=Iy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+cc(o,a++),s+=Ml(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ra(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},El={transition:null},Fy={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:El,ReactCurrentOwner:fh};function Vv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ss;qe.Fragment=wy;qe.Profiler=by;qe.PureComponent=ch;qe.StrictMode=Ty;qe.Suspense=Py;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;qe.act=Vv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Uv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=fh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kv.call(e,l)&&!Bv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ga,type:t.type,key:r,ref:o,props:i,_owner:s}};qe.createContext=function(t){return t={$$typeof:Ay,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cy,_context:t},t.Consumer=t};qe.createElement=zv;qe.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Ry,render:t}};qe.isValidElement=hh;qe.lazy=function(t){return{$$typeof:Ly,_payload:{_status:-1,_result:t},_init:Oy}};qe.memo=function(t,e){return{$$typeof:Dy,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};qe.unstable_act=Vv;qe.useCallback=function(t,e){return cn.current.useCallback(t,e)};qe.useContext=function(t){return cn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return cn.current.useEffect(t,e)};qe.useId=function(){return cn.current.useId()};qe.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return cn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};qe.useRef=function(t){return cn.current.useRef(t)};qe.useState=function(t){return cn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return cn.current.useTransition()};qe.version="18.3.1";Iv.exports=qe;var q=Iv.exports;const Hv=My(q),Gp=Sy({__proto__:null,default:Hv},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=q,By=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),Vy=Object.prototype.hasOwnProperty,Hy=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Vy.call(e,i)&&!Gy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:By,type:t,key:o,ref:s,props:r,_owner:Hy.current}}Cu.Fragment=zy;Cu.jsx=Gv;Cu.jsxs=Gv;Lv.exports=Cu;var ge=Lv.exports,Sd={},Wv={exports:{}},Pn={},Xv={exports:{}},jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,X){var Z=L.length;L.push(X);e:for(;0<Z;){var ue=Z-1>>>1,ce=L[ue];if(0<r(ce,X))L[ue]=X,L[Z]=ce,Z=ue;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var X=L[0],Z=L.pop();if(Z!==X){L[0]=Z;e:for(var ue=0,ce=L.length,Ue=ce>>>1;ue<Ue;){var I=2*(ue+1)-1,j=L[I],J=I+1,$=L[J];if(0>r(j,Z))J<ce&&0>r($,j)?(L[ue]=$,L[J]=Z,ue=J):(L[ue]=j,L[I]=Z,ue=I);else if(J<ce&&0>r($,Z))L[ue]=$,L[J]=Z,ue=J;else break e}}return X}function r(L,X){var Z=L.sortIndex-X.sortIndex;return Z!==0?Z:L.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=L)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function y(L){if(_=!1,x(L),!g)if(n(l)!==null)g=!0,G(C);else{var X=n(u);X!==null&&Q(y,X.startTime-L)}}function C(L,X){g=!1,_&&(_=!1,c(A),A=-1),p=!0;var Z=h;try{for(x(X),f=n(l);f!==null&&(!(f.expirationTime>X)||L&&!P());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,h=f.priorityLevel;var ce=ue(f.expirationTime<=X);X=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&i(l),x(X)}else i(l);f=n(l)}if(f!==null)var Ue=!0;else{var I=n(u);I!==null&&Q(y,I.startTime-X),Ue=!1}return Ue}finally{f=null,h=Z,p=!1}}var b=!1,w=null,A=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function H(){if(w!==null){var L=t.unstable_now();S=L;var X=!0;try{X=w(!0,L)}finally{X?B():(b=!1,w=null)}}else b=!1}var B;if(typeof v=="function")B=function(){v(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Y=K.port2;K.port1.onmessage=H,B=function(){Y.postMessage(null)}}else B=function(){m(H,0)};function G(L){w=L,b||(b=!0,B())}function Q(L,X){A=m(function(){L(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,G(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var Z=h;h=X;try{return L()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=h;h=L;try{return X()}finally{h=Z}},t.unstable_scheduleCallback=function(L,X,Z){var ue=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ue+Z:ue):Z=ue,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Z+ce,L={id:d++,callback:X,priorityLevel:L,startTime:Z,expirationTime:ce,sortIndex:-1},Z>ue?(L.sortIndex=Z,e(u,L),n(l)===null&&L===n(u)&&(_?(c(A),A=-1):_=!0,Q(y,Z-ue))):(L.sortIndex=ce,e(l,L),g||p||(g=!0,G(C))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var X=h;return function(){var Z=h;h=X;try{return L.apply(this,arguments)}finally{h=Z}}}})(jv);Xv.exports=jv;var Wy=Xv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=q,Rn=Wy;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,$s={};function Qr(t,e){Xo(t,e),Xo(t+"Capture",e)}function Xo(t,e){for($s[t]=e,t=0;t<e.length;t++)$v.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},Xp={};function $y(t){return Md.call(Xp,t)?!0:Md.call(Wp,t)?!1:jy.test(t)?Xp[t]=!0:(Wp[t]=!0,!1)}function Yy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qy(t,e,n,i){if(e===null||typeof e>"u"||Yy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ph=/[\-:]([a-z])/g;function mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ph,mh);$t[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ph,mh);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ph,mh);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function gh(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qy(e,n,r,i)&&(n=null),i||r===null?$y(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),yo=Symbol.for("react.portal"),So=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),Kv=Symbol.for("react.offscreen"),jp=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,dc;function Rs(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function Ky(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case So:return"Fragment";case yo:return"Portal";case Ed:return"Profiler";case vh:return"StrictMode";case wd:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qv:return(t.displayName||"Context")+".Consumer";case Yv:return(t._context.displayName||"Context")+".Provider";case _h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xh:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function Zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qy(t){var e=Zv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=Qy(t))}function Qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jv(t,e){e=e.checked,e!=null&&gh(t,"checked",e,!1)}function Ad(t,e){Jv(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function No(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ps(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function e_(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){Jy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function i_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function r_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var eS=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(t,e){if(e){if(eS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=null;function yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ud=null,Uo=null,Oo=null;function Zp(t){if(t=xa(t)){if(typeof Ud!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Lu(e),Ud(t.stateNode,t.type,e))}}function o_(t){Uo?Oo?Oo.push(t):Oo=[t]:Uo=t}function s_(){if(Uo){var t=Uo,e=Oo;if(Oo=Uo=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function a_(t,e){return t(e)}function l_(){}var pc=!1;function u_(t,e,n){if(pc)return t(e,n);pc=!0;try{return a_(t,e,n)}finally{pc=!1,(Uo!==null||Oo!==null)&&(l_(),s_())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var i=Lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Od=!1;if(Ui)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){Od=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Od=!1}function tS(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Os=!1,Xl=null,jl=!1,Fd=null,nS={onError:function(t){Os=!0,Xl=t}};function iS(t,e,n,i,r,o,s,a,l){Os=!1,Xl=null,tS.apply(nS,arguments)}function rS(t,e,n,i,r,o,s,a,l){if(iS.apply(this,arguments),Os){if(Os){var u=Xl;Os=!1,Xl=null}else throw Error(re(198));jl||(jl=!0,Fd=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qp(t){if(Jr(t)!==t)throw Error(re(188))}function oS(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Qp(r),t;if(o===i)return Qp(r),e;o=o.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function d_(t){return t=oS(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var h_=Rn.unstable_scheduleCallback,Jp=Rn.unstable_cancelCallback,sS=Rn.unstable_shouldYield,aS=Rn.unstable_requestPaint,At=Rn.unstable_now,lS=Rn.unstable_getCurrentPriorityLevel,Sh=Rn.unstable_ImmediatePriority,p_=Rn.unstable_UserBlockingPriority,$l=Rn.unstable_NormalPriority,uS=Rn.unstable_LowPriority,m_=Rn.unstable_IdlePriority,Au=null,pi=null;function cS(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Au,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:hS,dS=Math.log,fS=Math.LN2;function hS(t){return t>>>=0,t===0?32:31-(dS(t)/fS|0)|0}var Ia=64,Na=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ds(a):(o&=s,o!==0&&(i=Ds(o)))}else s=n&~r,s!==0?i=Ds(s):o!==0&&(i=Ds(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function pS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ii(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=pS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function gS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Mh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function v_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var __,Eh,x_,y_,S_,Bd=!1,Ua=[],or=null,sr=null,ar=null,Ks=new Map,Zs=new Map,er=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function ms(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Eh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _S(t,e,n,i,r){switch(e){case"focusin":return or=ms(or,t,e,n,i,r),!0;case"dragenter":return sr=ms(sr,t,e,n,i,r),!0;case"mouseover":return ar=ms(ar,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ks.set(o,ms(Ks.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Zs.set(o,ms(Zs.get(o)||null,t,e,n,i,r)),!0}return!1}function M_(t){var e=Or(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){x_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nd=i,n.target.dispatchEvent(i),Nd=null}else return e=xa(n),e!==null&&Eh(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){wl(t)&&n.delete(e)}function xS(){Bd=!1,or!==null&&wl(or)&&(or=null),sr!==null&&wl(sr)&&(sr=null),ar!==null&&wl(ar)&&(ar=null),Ks.forEach(tm),Zs.forEach(tm)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Bd||(Bd=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,xS)))}function Qs(t){function e(r){return gs(r,t)}if(0<Ua.length){gs(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&gs(or,t),sr!==null&&gs(sr,t),ar!==null&&gs(ar,t),Ks.forEach(e),Zs.forEach(e),n=0;n<er.length;n++)i=er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)M_(n),n.blockedOn===null&&er.shift()}var Fo=Hi.ReactCurrentBatchConfig,ql=!0;function yS(t,e,n,i){var r=lt,o=Fo.transition;Fo.transition=null;try{lt=1,wh(t,e,n,i)}finally{lt=r,Fo.transition=o}}function SS(t,e,n,i){var r=lt,o=Fo.transition;Fo.transition=null;try{lt=4,wh(t,e,n,i)}finally{lt=r,Fo.transition=o}}function wh(t,e,n,i){if(ql){var r=zd(t,e,n,i);if(r===null)Tc(t,e,i,Kl,n),em(t,i);else if(_S(r,t,e,n,i))i.stopPropagation();else if(em(t,i),e&4&&-1<vS.indexOf(t)){for(;r!==null;){var o=xa(r);if(o!==null&&__(o),o=zd(t,e,n,i),o===null&&Tc(t,e,i,Kl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var Kl=null;function zd(t,e,n,i){if(Kl=null,t=yh(i),t=Or(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function E_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lS()){case Sh:return 1;case p_:return 4;case $l:case uS:return 16;case m_:return 536870912;default:return 16}default:return 16}}var ir=null,Th=null,Tl=null;function w_(){if(Tl)return Tl;var t,e=Th,n=e.length,i,r="value"in ir?ir.value:ir.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function nm(){return!1}function Dn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oa:nm,this.isPropagationStopped=nm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=Dn(as),_a=Et({},as,{view:0,detail:0}),MS=Dn(_a),gc,vc,vs,Ru=Et({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vs&&(vs&&t.type==="mousemove"?(gc=t.screenX-vs.screenX,vc=t.screenY-vs.screenY):vc=gc=0,vs=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),im=Dn(Ru),ES=Et({},Ru,{dataTransfer:0}),wS=Dn(ES),TS=Et({},_a,{relatedTarget:0}),_c=Dn(TS),bS=Et({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=Dn(bS),AS=Et({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RS=Dn(AS),PS=Et({},as,{data:0}),rm=Dn(PS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IS[t])?!!e[t]:!1}function Ch(){return NS}var US=Et({},_a,{key:function(t){if(t.key){var e=DS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Dn(US),FS=Et({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Dn(FS),kS=Et({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),BS=Dn(kS),zS=Et({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Dn(zS),HS=Et({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GS=Dn(HS),WS=[9,13,27,32],Ah=Ui&&"CompositionEvent"in window,Fs=null;Ui&&"documentMode"in document&&(Fs=document.documentMode);var XS=Ui&&"TextEvent"in window&&!Fs,T_=Ui&&(!Ah||Fs&&8<Fs&&11>=Fs),sm=" ",am=!1;function b_(t,e){switch(t){case"keyup":return WS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mo=!1;function jS(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(am=!0,sm);case"textInput":return t=e.data,t===sm&&am?null:t;default:return null}}function $S(t,e){if(Mo)return t==="compositionend"||!Ah&&b_(t,e)?(t=w_(),Tl=Th=ir=null,Mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T_&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function A_(t,e,n,i){o_(i),e=Zl(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ks=null,Js=null;function qS(t){B_(t,0)}function Pu(t){var e=To(t);if(Qv(e))return t}function KS(t,e){if(t==="change")return e}var R_=!1;if(Ui){var xc;if(Ui){var yc="oninput"in document;if(!yc){var um=document.createElement("div");um.setAttribute("oninput","return;"),yc=typeof um.oninput=="function"}xc=yc}else xc=!1;R_=xc&&(!document.documentMode||9<document.documentMode)}function cm(){ks&&(ks.detachEvent("onpropertychange",P_),Js=ks=null)}function P_(t){if(t.propertyName==="value"&&Pu(Js)){var e=[];A_(e,Js,t,yh(t)),u_(qS,e)}}function ZS(t,e,n){t==="focusin"?(cm(),ks=e,Js=n,ks.attachEvent("onpropertychange",P_)):t==="focusout"&&cm()}function QS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(Js)}function JS(t,e){if(t==="click")return Pu(e)}function eM(t,e){if(t==="input"||t==="change")return Pu(e)}function tM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:tM;function ea(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Md.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,e){var n=dm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dm(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nM(t){var e=L_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(i!==null&&Rh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=fm(n,o);var s=fm(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iM=Ui&&"documentMode"in document&&11>=document.documentMode,Eo=null,Vd=null,Bs=null,Hd=!1;function hm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||Eo==null||Eo!==Wl(i)||(i=Eo,"selectionStart"in i&&Rh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bs&&ea(Bs,i)||(Bs=i,i=Zl(Vd,"onSelect"),0<i.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Eo)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wo={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Sc={},I_={};Ui&&(I_=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function Du(t){if(Sc[t])return Sc[t];if(!wo[t])return t;var e=wo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I_)return Sc[t]=e[n];return t}var N_=Du("animationend"),U_=Du("animationiteration"),O_=Du("animationstart"),F_=Du("transitionend"),k_=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){k_.set(t,e),Qr(e,[t])}for(var Mc=0;Mc<pm.length;Mc++){var Ec=pm[Mc],rM=Ec.toLowerCase(),oM=Ec[0].toUpperCase()+Ec.slice(1);xr(rM,"on"+oM)}xr(N_,"onAnimationEnd");xr(U_,"onAnimationIteration");xr(O_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(F_,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function mm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rS(i,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;mm(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;mm(r,a,u),o=l}}}if(jl)throw t=Fd,jl=!1,Fd=null,t}function gt(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var i=t+"__bubble";n.has(i)||(z_(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),z_(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[ka]){t[ka]=!0,$v.forEach(function(n){n!=="selectionchange"&&(sM.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,wc("selectionchange",!1,e))}}function z_(t,e,n,i){switch(E_(e)){case 1:var r=yS;break;case 4:r=SS;break;default:r=wh}n=r.bind(null,e,n,t),r=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Or(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}u_(function(){var u=o,d=yh(n),f=[];e:{var h=k_.get(t);if(h!==void 0){var p=bh,g=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":p=OS;break;case"focusin":g="focus",p=_c;break;case"focusout":g="blur",p=_c;break;case"beforeblur":case"afterblur":p=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BS;break;case N_:case U_:case O_:p=CS;break;case F_:p=VS;break;case"scroll":p=MS;break;case"wheel":p=GS;break;case"copy":case"cut":case"paste":p=RS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=om}var _=(e&4)!==0,m=!_&&t==="scroll",c=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,c!==null&&(y=qs(v,c),y!=null&&_.push(na(v,y,x)))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Nd&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[Oi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Or(g):null,g!==null&&(m=Jr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=im,y="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=om,y="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?h:To(p),x=g==null?h:To(g),h=new _(y,v+"leave",p,n,d),h.target=m,h.relatedTarget=x,y=null,Or(d)===u&&(_=new _(c,v+"enter",g,n,d),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,c=g,v=0,x=_;x;x=no(x))v++;for(x=0,y=c;y;y=no(y))x++;for(;0<v-x;)_=no(_),v--;for(;0<x-v;)c=no(c),x--;for(;v--;){if(_===c||c!==null&&_===c.alternate)break t;_=no(_),c=no(c)}_=null}else _=null;p!==null&&gm(f,h,p,_,!1),g!==null&&m!==null&&gm(f,m,g,_,!0)}}e:{if(h=u?To(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=KS;else if(lm(h))if(R_)C=eM;else{C=QS;var b=ZS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=JS);if(C&&(C=C(t,u))){A_(f,C,n,d);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Rd(h,"number",h.value)}switch(b=u?To(u):window,t){case"focusin":(lm(b)||b.contentEditable==="true")&&(Eo=b,Vd=u,Bs=null);break;case"focusout":Bs=Vd=Eo=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,hm(f,n,d);break;case"selectionchange":if(iM)break;case"keydown":case"keyup":hm(f,n,d)}var w;if(Ah)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Mo?b_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(T_&&n.locale!=="ko"&&(Mo||A!=="onCompositionStart"?A==="onCompositionEnd"&&Mo&&(w=w_()):(ir=d,Th="value"in ir?ir.value:ir.textContent,Mo=!0)),b=Zl(u,A),0<b.length&&(A=new rm(A,t,null,n,d),f.push({event:A,listeners:b}),w?A.data=w:(w=C_(n),w!==null&&(A.data=w)))),(w=XS?jS(t,n):$S(t,n))&&(u=Zl(u,"onBeforeInput"),0<u.length&&(d=new rm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=w))}B_(f,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=qs(t,n),o!=null&&i.unshift(na(t,o,r)),o=qs(t,e),o!=null&&i.push(na(t,o,r))),t=t.return}return i}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=qs(n,o),l!=null&&s.unshift(na(n,l,a))):r||(l=qs(n,o),l!=null&&s.push(na(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var aM=/\r\n?/g,lM=/\u0000|\uFFFD/g;function vm(t){return(typeof t=="string"?t:""+t).replace(aM,`
`).replace(lM,"")}function Ba(t,e,n){if(e=vm(e),vm(t)!==e&&n)throw Error(re(425))}function Ql(){}var Gd=null,Wd=null;function Xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jd=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,cM=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(dM)}:jd;function dM(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qs(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),hi="__reactFiber$"+ls,ia="__reactProps$"+ls,Oi="__reactContainer$"+ls,$d="__reactEvents$"+ls,fM="__reactListeners$"+ls,hM="__reactHandles$"+ls;function Or(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Oi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xm(t);t!==null;){if(n=t[hi])return n;t=xm(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[hi]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Lu(t){return t[ia]||null}var Yd=[],bo=-1;function yr(t){return{current:t}}function vt(t){0>bo||(t.current=Yd[bo],Yd[bo]=null,bo--)}function mt(t,e){bo++,Yd[bo]=t.current,t.current=e}var gr={},nn=yr(gr),gn=yr(!1),Gr=gr;function jo(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Jl(){vt(gn),vt(nn)}function ym(t,e,n){if(nn.current!==gr)throw Error(re(168));mt(nn,e),mt(gn,n)}function V_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Zy(t)||"Unknown",r));return Et({},n,i)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Gr=nn.current,mt(nn,t),mt(gn,gn.current),!0}function Sm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=V_(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,vt(gn),vt(nn),mt(nn,t)):vt(gn),mt(gn,n)}var Ci=null,Iu=!1,Cc=!1;function H_(t){Ci===null?Ci=[t]:Ci.push(t)}function pM(t){Iu=!0,H_(t)}function Sr(){if(!Cc&&Ci!==null){Cc=!0;var t=0,e=lt;try{var n=Ci;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,Iu=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),h_(Sh,Sr),r}finally{lt=e,Cc=!1}}return null}var Co=[],Ao=0,tu=null,nu=0,Fn=[],kn=0,Wr=null,Ai=1,Ri="";function Pr(t,e){Co[Ao++]=nu,Co[Ao++]=tu,tu=t,nu=e}function G_(t,e,n){Fn[kn++]=Ai,Fn[kn++]=Ri,Fn[kn++]=Wr,Wr=t;var i=Ai;t=Ri;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var o=32-ii(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ai=1<<32-ii(e)+r|n<<r|i,Ri=o+t}else Ai=1<<o|n<<r|i,Ri=t}function Ph(t){t.return!==null&&(Pr(t,1),G_(t,1,0))}function Dh(t){for(;t===tu;)tu=Co[--Ao],Co[Ao]=null,nu=Co[--Ao],Co[Ao]=null;for(;t===Wr;)Wr=Fn[--kn],Fn[kn]=null,Ri=Fn[--kn],Fn[kn]=null,Ai=Fn[--kn],Fn[kn]=null}var Cn=null,bn=null,yt=!1,Jn=null;function W_(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,bn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,bn=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(yt){var e=bn;if(e){var n=e;if(!Mm(t,e)){if(qd(t))throw Error(re(418));e=lr(n.nextSibling);var i=Cn;e&&Mm(t,e)?W_(i,n):(t.flags=t.flags&-4097|2,yt=!1,Cn=t)}}else{if(qd(t))throw Error(re(418));t.flags=t.flags&-4097|2,yt=!1,Cn=t}}}function Em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function za(t){if(t!==Cn)return!1;if(!yt)return Em(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xd(t.type,t.memoizedProps)),e&&(e=bn)){if(qd(t))throw X_(),Error(re(418));for(;e;)W_(t,e),e=lr(e.nextSibling)}if(Em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Cn?lr(t.stateNode.nextSibling):null;return!0}function X_(){for(var t=bn;t;)t=lr(t.nextSibling)}function $o(){bn=Cn=null,yt=!1}function Lh(t){Jn===null?Jn=[t]:Jn.push(t)}var mM=Hi.ReactCurrentBatchConfig;function _s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function j_(t){function e(c,v){if(t){var x=c.deletions;x===null?(c.deletions=[v],c.flags|=16):x.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=fr(c,v),c.index=0,c.sibling=null,c}function o(c,v,x){return c.index=x,t?(x=c.alternate,x!==null?(x=x.index,x<v?(c.flags|=2,v):x):(c.flags|=2,v)):(c.flags|=1048576,v)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,x,y){return v===null||v.tag!==6?(v=Nc(x,c.mode,y),v.return=c,v):(v=r(v,x),v.return=c,v)}function l(c,v,x,y){var C=x.type;return C===So?d(c,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&wm(C)===v.type)?(y=r(v,x.props),y.ref=_s(c,v,x),y.return=c,y):(y=Il(x.type,x.key,x.props,null,c.mode,y),y.ref=_s(c,v,x),y.return=c,y)}function u(c,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Uc(x,c.mode,y),v.return=c,v):(v=r(v,x.children||[]),v.return=c,v)}function d(c,v,x,y,C){return v===null||v.tag!==7?(v=Hr(x,c.mode,y,C),v.return=c,v):(v=r(v,x),v.return=c,v)}function f(c,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nc(""+v,c.mode,x),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return x=Il(v.type,v.key,v.props,null,c.mode,x),x.ref=_s(c,null,v),x.return=c,x;case yo:return v=Uc(v,c.mode,x),v.return=c,v;case Zi:var y=v._init;return f(c,y(v._payload),x)}if(Ps(v)||hs(v))return v=Hr(v,c.mode,x,null),v.return=c,v;Va(c,v)}return null}function h(c,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(c,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pa:return x.key===C?l(c,v,x,y):null;case yo:return x.key===C?u(c,v,x,y):null;case Zi:return C=x._init,h(c,v,C(x._payload),y)}if(Ps(x)||hs(x))return C!==null?null:d(c,v,x,y,null);Va(c,x)}return null}function p(c,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(x)||null,a(v,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:return c=c.get(y.key===null?x:y.key)||null,l(v,c,y,C);case yo:return c=c.get(y.key===null?x:y.key)||null,u(v,c,y,C);case Zi:var b=y._init;return p(c,v,x,b(y._payload),C)}if(Ps(y)||hs(y))return c=c.get(x)||null,d(v,c,y,C,null);Va(v,y)}return null}function g(c,v,x,y){for(var C=null,b=null,w=v,A=v=0,T=null;w!==null&&A<x.length;A++){w.index>A?(T=w,w=null):T=w.sibling;var S=h(c,w,x[A],y);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(c,w),v=o(S,v,A),b===null?C=S:b.sibling=S,b=S,w=T}if(A===x.length)return n(c,w),yt&&Pr(c,A),C;if(w===null){for(;A<x.length;A++)w=f(c,x[A],y),w!==null&&(v=o(w,v,A),b===null?C=w:b.sibling=w,b=w);return yt&&Pr(c,A),C}for(w=i(c,w);A<x.length;A++)T=p(w,c,A,x[A],y),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?A:T.key),v=o(T,v,A),b===null?C=T:b.sibling=T,b=T);return t&&w.forEach(function(P){return e(c,P)}),yt&&Pr(c,A),C}function _(c,v,x,y){var C=hs(x);if(typeof C!="function")throw Error(re(150));if(x=C.call(x),x==null)throw Error(re(151));for(var b=C=null,w=v,A=v=0,T=null,S=x.next();w!==null&&!S.done;A++,S=x.next()){w.index>A?(T=w,w=null):T=w.sibling;var P=h(c,w,S.value,y);if(P===null){w===null&&(w=T);break}t&&w&&P.alternate===null&&e(c,w),v=o(P,v,A),b===null?C=P:b.sibling=P,b=P,w=T}if(S.done)return n(c,w),yt&&Pr(c,A),C;if(w===null){for(;!S.done;A++,S=x.next())S=f(c,S.value,y),S!==null&&(v=o(S,v,A),b===null?C=S:b.sibling=S,b=S);return yt&&Pr(c,A),C}for(w=i(c,w);!S.done;A++,S=x.next())S=p(w,c,A,S.value,y),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?A:S.key),v=o(S,v,A),b===null?C=S:b.sibling=S,b=S);return t&&w.forEach(function(H){return e(c,H)}),yt&&Pr(c,A),C}function m(c,v,x,y){if(typeof x=="object"&&x!==null&&x.type===So&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Pa:e:{for(var C=x.key,b=v;b!==null;){if(b.key===C){if(C=x.type,C===So){if(b.tag===7){n(c,b.sibling),v=r(b,x.props.children),v.return=c,c=v;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&wm(C)===b.type){n(c,b.sibling),v=r(b,x.props),v.ref=_s(c,b,x),v.return=c,c=v;break e}n(c,b);break}else e(c,b);b=b.sibling}x.type===So?(v=Hr(x.props.children,c.mode,y,x.key),v.return=c,c=v):(y=Il(x.type,x.key,x.props,null,c.mode,y),y.ref=_s(c,v,x),y.return=c,c=y)}return s(c);case yo:e:{for(b=x.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(c,v.sibling),v=r(v,x.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=Uc(x,c.mode,y),v.return=c,c=v}return s(c);case Zi:return b=x._init,m(c,v,b(x._payload),y)}if(Ps(x))return g(c,v,x,y);if(hs(x))return _(c,v,x,y);Va(c,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,x),v.return=c,c=v):(n(c,v),v=Nc(x,c.mode,y),v.return=c,c=v),s(c)):n(c,v)}return m}var Yo=j_(!0),$_=j_(!1),iu=yr(null),ru=null,Ro=null,Ih=null;function Nh(){Ih=Ro=ru=null}function Uh(t){var e=iu.current;vt(iu),t._currentValue=e}function Zd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ko(t,e){ru=t,Ih=Ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Ih!==t)if(t={context:t,memoizedValue:e,next:null},Ro===null){if(ru===null)throw Error(re(308));Ro=t,ru.dependencies={lanes:0,firstContext:t}}else Ro=Ro.next=t;return e}var Fr=null;function Oh(t){Fr===null?Fr=[t]:Fr.push(t)}function Y_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Oh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function Fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Oh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mh(t,n)}}function Tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,i){var r=t.updateQueue;Qi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(h=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Et({},f,h);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);jr|=s,t.lanes=s,t.memoizedState=f}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ya={},mi=yr(ya),ra=yr(ya),oa=yr(ya);function kr(t){if(t===ya)throw Error(re(174));return t}function kh(t,e){switch(mt(oa,e),mt(ra,t),mt(mi,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dd(e,t)}vt(mi),mt(mi,e)}function qo(){vt(mi),vt(ra),vt(oa)}function K_(t){kr(oa.current);var e=kr(mi.current),n=Dd(e,t.type);e!==n&&(mt(ra,t),mt(mi,n))}function Bh(t){ra.current===t&&(vt(mi),vt(ra))}var St=yr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function zh(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Al=Hi.ReactCurrentDispatcher,Rc=Hi.ReactCurrentBatchConfig,Xr=0,Mt=null,Nt=null,zt=null,au=!1,zs=!1,sa=0,gM=0;function qt(){throw Error(re(321))}function Vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Hh(t,e,n,i,r,o){if(Xr=o,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?yM:SM,t=n(i,r),zs){o=0;do{if(zs=!1,sa=0,25<=o)throw Error(re(301));o+=1,zt=Nt=null,e.updateQueue=null,Al.current=MM,t=n(i,r)}while(zs)}if(Al.current=lu,e=Nt!==null&&Nt.next!==null,Xr=0,zt=Nt=Mt=null,au=!1,e)throw Error(re(300));return t}function Gh(){var t=sa!==0;return sa=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function Wn(){if(Nt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function aa(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=Wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Xr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,Mt.lanes|=d,jr|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ai(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Mt.lanes|=o,jr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dc(t){var e=Wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ai(o,e.memoizedState)||(mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Z_(){}function Q_(t,e){var n=Mt,i=Wn(),r=e(),o=!ai(i.memoizedState,r);if(o&&(i.memoizedState=r,mn=!0),i=i.queue,Wh(t0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,la(9,e0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(re(349));Xr&30||J_(n,e,r)}return r}function J_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e0(t,e,n,i){e.value=n,e.getSnapshot=i,n0(e)&&i0(t)}function t0(t,e,n){return n(function(){n0(e)&&i0(t)})}function n0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function i0(t){var e=Fi(t,1);e!==null&&ri(e,t,1,-1)}function Cm(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=xM.bind(null,Mt,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function r0(){return Wn().memoizedState}function Rl(t,e,n,i){var r=ui();Mt.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Wn();i=i===void 0?null:i;var o=void 0;if(Nt!==null){var s=Nt.memoizedState;if(o=s.destroy,i!==null&&Vh(i,s.deps)){r.memoizedState=la(e,n,o,i);return}}Mt.flags|=t,r.memoizedState=la(1|e,n,o,i)}function Am(t,e){return Rl(8390656,8,t,e)}function Wh(t,e){return Nu(2048,8,t,e)}function o0(t,e){return Nu(4,2,t,e)}function s0(t,e){return Nu(4,4,t,e)}function a0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l0(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,a0.bind(null,e,t),n)}function Xh(){}function u0(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function c0(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function d0(t,e,n){return Xr&21?(ai(n,e)||(n=g_(),Mt.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function vM(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{lt=n,Rc.transition=i}}function f0(){return Wn().memoizedState}function _M(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},h0(t))p0(e,n);else if(n=Y_(t,e,n,i),n!==null){var r=ln();ri(n,t,i,r),m0(n,e,i)}}function xM(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(t))p0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,s)){var l=e.interleaved;l===null?(r.next=r,Oh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Y_(t,e,r,i),n!==null&&(r=ln(),ri(n,t,i,r),m0(n,e,i))}}function h0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function p0(t,e){zs=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mh(t,n)}}var lu={readContext:Gn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},yM={readContext:Gn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,a0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_M.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:Cm,useDebugValue:Xh,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=Cm(!1),e=t[0];return t=vM.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ui();if(yt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Vt===null)throw Error(re(349));Xr&30||J_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Am(t0.bind(null,i,o,t),[t]),i.flags|=2048,la(9,e0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ui(),e=Vt.identifierPrefix;if(yt){var n=Ri,i=Ai;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SM={readContext:Gn,useCallback:u0,useContext:Gn,useEffect:Wh,useImperativeHandle:l0,useInsertionEffect:o0,useLayoutEffect:s0,useMemo:c0,useReducer:Pc,useRef:r0,useState:function(){return Pc(aa)},useDebugValue:Xh,useDeferredValue:function(t){var e=Wn();return d0(e,Nt.memoizedState,t)},useTransition:function(){var t=Pc(aa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:Q_,useId:f0,unstable_isNewReconciler:!1},MM={readContext:Gn,useCallback:u0,useContext:Gn,useEffect:Wh,useImperativeHandle:l0,useInsertionEffect:o0,useLayoutEffect:s0,useMemo:c0,useReducer:Dc,useRef:r0,useState:function(){return Dc(aa)},useDebugValue:Xh,useDeferredValue:function(t){var e=Wn();return Nt===null?e.memoizedState=t:d0(e,Nt.memoizedState,t)},useTransition:function(){var t=Dc(aa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:Q_,useId:f0,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uu={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=dr(t),o=Li(i,r);o.payload=e,n!=null&&(o.callback=n),e=ur(t,o,r),e!==null&&(ri(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=dr(t),o=Li(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ur(t,o,r),e!==null&&(ri(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=dr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ri(e,t,i,n),Cl(e,t,i))}};function Rm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,o):!0}function g0(t,e,n){var i=!1,r=gr,o=e.contextType;return typeof o=="object"&&o!==null?o=Gn(o):(r=vn(e)?Gr:nn.current,i=e.contextTypes,o=(i=i!=null)?jo(t,r):gr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Pm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uu.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Gn(o):(o=vn(e)?Gr:nn.current,r.context=jo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Qd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uu.enqueueReplaceState(r,r.state,null),ou(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EM=typeof WeakMap=="function"?WeakMap:Map;function v0(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cu||(cu=!0,df=i),ef(t,e)},n}function _0(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ef(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Dm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new EM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FM.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var wM=Hi.ReactCurrentOwner,mn=!1;function an(t,e,n,i){e.child=t===null?$_(e,null,n,i):Yo(e,t.child,n,i)}function Nm(t,e,n,i,r){n=n.render;var o=e.ref;return ko(e,r),i=Hh(t,e,n,i,o,r),n=Gh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(yt&&n&&Ph(e),e.flags|=1,an(t,e,i,r),e.child)}function Um(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Jh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,x0(t,e,o,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(s,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function x0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ea(o,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return tf(t,e,n,i,r)}function y0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Do,wn),wn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Do,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,mt(Do,wn),wn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,mt(Do,wn),wn|=i;return an(t,e,r,n),e.child}function S0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,i,r){var o=vn(n)?Gr:nn.current;return o=jo(e,o),ko(e,r),n=Hh(t,e,n,i,o,r),i=Gh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(yt&&i&&Ph(e),e.flags|=1,an(t,e,n,r),e.child)}function Om(t,e,n,i,r){if(vn(n)){var o=!0;eu(e)}else o=!1;if(ko(e,r),e.stateNode===null)Pl(t,e),g0(e,n,i),Jd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=vn(n)?Gr:nn.current,u=jo(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Pm(e,s,i,u),Qi=!1;var h=e.memoizedState;s.state=h,ou(e,i,s,r),l=e.memoizedState,a!==i||h!==l||gn.current||Qi?(typeof d=="function"&&(Qd(e,n,d,i),l=e.memoizedState),(a=Qi||Rm(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,q_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=vn(n)?Gr:nn.current,l=jo(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Pm(e,s,i,l),Qi=!1,h=e.memoizedState,s.state=h,ou(e,i,s,r);var g=e.memoizedState;a!==f||h!==g||gn.current||Qi?(typeof p=="function"&&(Qd(e,n,p,i),g=e.memoizedState),(u=Qi||Rm(e,n,u,i,h,g,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return nf(t,e,n,i,o,r)}function nf(t,e,n,i,r,o){S0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Sm(e,n,!1),ki(t,e,o);i=e.stateNode,wM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Yo(e,t.child,null,o),e.child=Yo(e,null,a,o)):an(t,e,a,o),e.memoizedState=i.state,r&&Sm(e,n,!0),e.child}function M0(t){var e=t.stateNode;e.pendingContext?ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ym(t,e.context,!1),kh(t,e.containerInfo)}function Fm(t,e,n,i,r){return $o(),Lh(r),e.flags|=256,an(t,e,n,i),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function E0(t,e,n){var i=e.pendingProps,r=St.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(St,r&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ku(s,i,0,null),t=Hr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=of(n),e.memoizedState=rf,t):jh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fr(a,o):(o=Hr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?of(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=rf,i}return o=t.child,t=o.sibling,i=fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jh(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,i){return i!==null&&Lh(i),Yo(e,t.child,null,n),t=jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(re(422))),Ha(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),o=Hr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Yo(e,t.child,null,s),e.child.memoizedState=of(s),e.memoizedState=rf,o);if(!(e.mode&1))return Ha(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(re(419)),i=Lc(o,i,void 0),Ha(t,e,s,i)}if(a=(s&t.childLanes)!==0,mn||a){if(i=Vt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Fi(t,r),ri(i,t,r,-1))}return Qh(),i=Lc(Error(re(421))),Ha(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,bn=lr(r.nextSibling),Cn=e,yt=!0,Jn=null,t!==null&&(Fn[kn++]=Ai,Fn[kn++]=Ri,Fn[kn++]=Wr,Ai=t.id,Ri=t.overflow,Wr=e),e=jh(e,i.children),e.flags|=4096,e)}function km(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zd(t.return,e,n)}function Ic(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function w0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(an(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,n,e);else if(t.tag===19)km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ic(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&su(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ic(e,!0,n,null,o);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bM(t,e,n){switch(e.tag){case 3:M0(e),$o();break;case 5:K_(e);break;case 1:vn(e.type)&&eu(e);break;case 4:kh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(iu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?E0(t,e,n):(mt(St,St.current&1),t=ki(t,e,n),t!==null?t.sibling:null);mt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return w0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,y0(t,e,n)}return ki(t,e,n)}var T0,sf,b0,C0;T0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};b0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(mi.current);var o=null;switch(n){case"input":r=Cd(t,r),i=Cd(t,i),o=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),o=[];break;case"textarea":r=Pd(t,r),i=Pd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}Ld(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};C0=function(t,e,n,i){n!==i&&(e.flags|=4)};function xs(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CM(t,e,n){var i=e.pendingProps;switch(Dh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return vn(e.type)&&Jl(),Kt(e),null;case 3:return i=e.stateNode,qo(),vt(gn),vt(nn),zh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(pf(Jn),Jn=null))),sf(t,e),Kt(e),null;case 5:Bh(e);var r=kr(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Kt(e),null}if(t=kr(mi.current),za(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[hi]=e,i[ia]=o,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ls.length;r++)gt(Ls[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":$p(i,o),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},gt("invalid",i);break;case"textarea":qp(i,o),gt("invalid",i)}Ld(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",""+a]):$s.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&gt("scroll",i)}switch(n){case"input":Da(i),Yp(i,o,!0);break;case"textarea":Da(i),Kp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[hi]=e,t[ia]=i,T0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Id(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ls.length;r++)gt(Ls[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":$p(t,i),r=Cd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":qp(t,i),r=Pd(t,i),gt("invalid",t);break;default:r=i}Ld(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?r_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($s.hasOwnProperty(o)?l!=null&&o==="onScroll"&&gt("scroll",t):l!=null&&gh(t,o,l,s))}switch(n){case"input":Da(t),Yp(t,i,!1);break;case"textarea":Da(t),Kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?No(t,!!i.multiple,o,!1):i.defaultValue!=null&&No(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)C0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=kr(oa.current),kr(mi.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(o=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Kt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&bn!==null&&e.mode&1&&!(e.flags&128))X_(),$o(),e.flags|=98560,o=!1;else if(o=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(re(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(re(317));o[hi]=e}else $o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),o=!1}else Jn!==null&&(pf(Jn),Jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):Qh())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return qo(),sf(t,e),t===null&&ta(e.stateNode.containerInfo),Kt(e),null;case 10:return Uh(e.type._context),Kt(e),null;case 17:return vn(e.type)&&Jl(),Kt(e),null;case 19:if(vt(St),o=e.memoizedState,o===null)return Kt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)xs(o,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=su(t),s!==null){for(e.flags|=128,xs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(St,St.current&1|2),e.child}t=t.sibling}o.tail!==null&&At()>Zo&&(e.flags|=128,i=!0,xs(o,!1),e.lanes=4194304)}else{if(!i)if(t=su(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!yt)return Kt(e),null}else 2*At()-o.renderingStartTime>Zo&&n!==1073741824&&(e.flags|=128,i=!0,xs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,n=St.current,mt(St,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Zh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function AM(t,e){switch(Dh(e),e.tag){case 1:return vn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qo(),vt(gn),vt(nn),zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bh(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));$o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return qo(),null;case 10:return Uh(e.type._context),null;case 22:case 23:return Zh(),null;case 24:return null;default:return null}}var Ga=!1,en=!1,RM=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function af(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Bm=!1;function PM(t,e){if(Gd=ql,t=L_(),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wd={focusedElem:t,selectionRange:n},ql=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:Zn(e.type,_),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=Bm,Bm=!1,g}function Vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&af(e,n,o)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[ia],delete e[$d],delete e[fM],delete e[hM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var Wt=null,Qn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)P0(t,e,n),n=n.sibling}function P0(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:en||Po(n,e);case 6:var i=Wt,r=Qn;Wt=null,Wi(t,e,n),Wt=i,Qn=r,Wt!==null&&(Qn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Qn?(t=Wt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),Qs(t)):bc(Wt,n.stateNode));break;case 4:i=Wt,r=Qn,Wt=n.stateNode.containerInfo,Qn=!0,Wi(t,e,n),Wt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&af(n,e,s),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!en&&(Po(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Wi(t,e,n),en=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RM),e.forEach(function(i){var r=BM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,Qn=!1;break e;case 3:Wt=a.stateNode.containerInfo,Qn=!0;break e;case 4:Wt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(Wt===null)throw Error(re(160));P0(o,s,r),Wt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){bt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D0(e,t),e=e.sibling}function D0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),li(t),i&4){try{Vs(3,t,t.return),Ou(3,t)}catch(_){bt(t,t.return,_)}try{Vs(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:$n(e,t),li(t),i&512&&n!==null&&Po(n,n.return);break;case 5:if($n(e,t),li(t),i&512&&n!==null&&Po(n,n.return),t.flags&32){var r=t.stateNode;try{Ys(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Jv(r,o),Id(a,s);var u=Id(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?r_(r,f):d==="dangerouslySetInnerHTML"?n_(r,f):d==="children"?Ys(r,f):gh(r,d,f,u)}switch(a){case"input":Ad(r,o);break;case"textarea":e_(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?No(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?No(r,!!o.multiple,o.defaultValue,!0):No(r,!!o.multiple,o.multiple?[]:"",!1))}r[ia]=o}catch(_){bt(t,t.return,_)}}break;case 6:if($n(e,t),li(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(_){bt(t,t.return,_)}}break;case 3:if($n(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:$n(e,t),li(t);break;case 13:$n(e,t),li(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(qh=At())),i&4&&Vm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(en=(u=en)||d,$n(e,t),en=u):$n(e,t),li(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(f=xe=d;xe!==null;){switch(h=xe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Vs(4,h,h.return);break;case 1:Po(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:Po(h,h.return);break;case 22:if(h.memoizedState!==null){Gm(f);continue}}p!==null?(p.return=h,xe=p):Gm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i_("display",s))}catch(_){bt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){bt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),li(t),i&4&&Vm(t);break;case 21:break;default:$n(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ys(r,""),i.flags&=-33);var o=zm(t);cf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=zm(t);uf(t,a,s);break;default:throw Error(re(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DM(t,e,n){xe=t,L0(t)}function L0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ga;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ga;var u=en;if(Ga=s,(en=l)&&!u)for(xe=r;xe!==null;)s=xe,l=s.child,s.tag===22&&s.memoizedState!==null?Wm(r):l!==null?(l.return=s,xe=l):Wm(r);for(;o!==null;)xe=o,L0(o),o=o.sibling;xe=r,Ga=a,en=u}Hm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,xe=o):Hm(t)}}function Hm(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&bm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}en||e.flags&512&&lf(e)}catch(h){bt(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Gm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Wm(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var o=e.return;try{lf(e)}catch(l){bt(e,o,l)}break;case 5:var s=e.return;try{lf(e)}catch(l){bt(e,s,l)}}}catch(l){bt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var LM=Math.ceil,uu=Hi.ReactCurrentDispatcher,$h=Hi.ReactCurrentOwner,Hn=Hi.ReactCurrentBatchConfig,Je=0,Vt=null,Lt=null,jt=0,wn=0,Do=yr(0),Ut=0,ua=null,jr=0,Fu=0,Yh=0,Hs=null,pn=null,qh=0,Zo=1/0,bi=null,cu=!1,df=null,cr=null,Wa=!1,rr=null,du=0,Gs=0,ff=null,Dl=-1,Ll=0;function ln(){return Je&6?At():Dl!==-1?Dl:Dl=At()}function dr(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:mM.transition!==null?(Ll===0&&(Ll=g_()),Ll):(t=lt,t!==0||(t=window.event,t=t===void 0?16:E_(t.type)),t):1}function ri(t,e,n,i){if(50<Gs)throw Gs=0,ff=null,Error(re(185));va(t,n,i),(!(Je&2)||t!==Vt)&&(t===Vt&&(!(Je&2)&&(Fu|=n),Ut===4&&tr(t,jt)),_n(t,i),n===1&&Je===0&&!(e.mode&1)&&(Zo=At()+500,Iu&&Sr()))}function _n(t,e){var n=t.callbackNode;mS(t,e);var i=Yl(t,t===Vt?jt:0);if(i===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?pM(Xm.bind(null,t)):H_(Xm.bind(null,t)),cM(function(){!(Je&6)&&Sr()}),n=null;else{switch(v_(i)){case 1:n=Sh;break;case 4:n=p_;break;case 16:n=$l;break;case 536870912:n=m_;break;default:n=$l}n=z0(n,I0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I0(t,e){if(Dl=-1,Ll=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(Bo()&&t.callbackNode!==n)return null;var i=Yl(t,t===Vt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fu(t,i);else{e=i;var r=Je;Je|=2;var o=U0();(Vt!==t||jt!==e)&&(bi=null,Zo=At()+500,Vr(t,e));do try{UM();break}catch(a){N0(t,a)}while(!0);Nh(),uu.current=o,Je=r,Lt!==null?e=0:(Vt=null,jt=0,e=Ut)}if(e!==0){if(e===2&&(r=kd(t),r!==0&&(i=r,e=hf(t,r))),e===1)throw n=ua,Vr(t,0),tr(t,i),_n(t,At()),n;if(e===6)tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!IM(r)&&(e=fu(t,i),e===2&&(o=kd(t),o!==0&&(i=o,e=hf(t,o))),e===1))throw n=ua,Vr(t,0),tr(t,i),_n(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Dr(t,pn,bi);break;case 3:if(tr(t,i),(i&130023424)===i&&(e=qh+500-At(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jd(Dr.bind(null,t,pn,bi),e);break}Dr(t,pn,bi);break;case 4:if(tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ii(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*LM(i/1960))-i,10<i){t.timeoutHandle=jd(Dr.bind(null,t,pn,bi),i);break}Dr(t,pn,bi);break;case 5:Dr(t,pn,bi);break;default:throw Error(re(329))}}}return _n(t,At()),t.callbackNode===n?I0.bind(null,t):null}function hf(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=fu(t,e),t!==2&&(e=pn,pn=n,e!==null&&pf(e)),t}function pf(t){pn===null?pn=t:pn.push.apply(pn,t)}function IM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Yh,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function Xm(t){if(Je&6)throw Error(re(327));Bo();var e=Yl(t,0);if(!(e&1))return _n(t,At()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var i=kd(t);i!==0&&(e=i,n=hf(t,i))}if(n===1)throw n=ua,Vr(t,0),tr(t,e),_n(t,At()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,pn,bi),_n(t,At()),null}function Kh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Zo=At()+500,Iu&&Sr())}}function $r(t){rr!==null&&rr.tag===0&&!(Je&6)&&Bo();var e=Je;Je|=1;var n=Hn.transition,i=lt;try{if(Hn.transition=null,lt=1,t)return t()}finally{lt=i,Hn.transition=n,Je=e,!(Je&6)&&Sr()}}function Zh(){wn=Do.current,vt(Do)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uM(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Dh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:qo(),vt(gn),vt(nn),zh();break;case 5:Bh(i);break;case 4:qo();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Uh(i.type._context);break;case 22:case 23:Zh()}n=n.return}if(Vt=t,Lt=t=fr(t.current,null),jt=wn=e,Ut=0,ua=null,Yh=Fu=jr=0,pn=Hs=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Fr=null}return t}function N0(t,e){do{var n=Lt;try{if(Nh(),Al.current=lu,au){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}au=!1}if(Xr=0,zt=Nt=Mt=null,zs=!1,sa=0,$h.current=null,n===null||n.return===null){Ut=1,ua=e,Lt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Lm(s);if(p!==null){p.flags&=-257,Im(p,s,a,o,e),p.mode&1&&Dm(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Dm(o,u,e),Qh();break e}l=Error(re(426))}}else if(yt&&a.mode&1){var m=Lm(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Im(m,s,a,o,e),Lh(Ko(l,a));break e}}o=l=Ko(l,a),Ut!==4&&(Ut=2),Hs===null?Hs=[o]:Hs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=v0(o,l,e);Tm(o,c);break e;case 1:a=l;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(cr===null||!cr.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=_0(o,a,e);Tm(o,y);break e}}o=o.return}while(o!==null)}F0(n)}catch(C){e=C,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function U0(){var t=uu.current;return uu.current=lu,t===null?lu:t}function Qh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(jr&268435455)&&!(Fu&268435455)||tr(Vt,jt)}function fu(t,e){var n=Je;Je|=2;var i=U0();(Vt!==t||jt!==e)&&(bi=null,Vr(t,e));do try{NM();break}catch(r){N0(t,r)}while(!0);if(Nh(),Je=n,uu.current=i,Lt!==null)throw Error(re(261));return Vt=null,jt=0,Ut}function NM(){for(;Lt!==null;)O0(Lt)}function UM(){for(;Lt!==null&&!sS();)O0(Lt)}function O0(t){var e=B0(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?F0(t):Lt=e,$h.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AM(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=CM(n,e,wn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Dr(t,e,n){var i=lt,r=Hn.transition;try{Hn.transition=null,lt=1,OM(t,e,n,i)}finally{Hn.transition=r,lt=i}return null}function OM(t,e,n,i){do Bo();while(rr!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(gS(t,o),t===Vt&&(Lt=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,z0($l,function(){return Bo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Hn.transition,Hn.transition=null;var s=lt;lt=1;var a=Je;Je|=4,$h.current=null,PM(t,n),D0(n,t),nM(Wd),ql=!!Gd,Wd=Gd=null,t.current=n,DM(n),aS(),Je=a,lt=s,Hn.transition=o}else t.current=n;if(Wa&&(Wa=!1,rr=t,du=r),o=t.pendingLanes,o===0&&(cr=null),cS(n.stateNode),_n(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cu)throw cu=!1,t=df,df=null,t;return du&1&&t.tag!==0&&Bo(),o=t.pendingLanes,o&1?t===ff?Gs++:(Gs=0,ff=t):Gs=0,Sr(),null}function Bo(){if(rr!==null){var t=v_(du),e=Hn.transition,n=lt;try{if(Hn.transition=null,lt=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,du=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,xe=t.current;xe!==null;){var o=xe,s=o.child;if(xe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:Vs(8,d,o)}var f=d.child;if(f!==null)f.return=d,xe=f;else for(;xe!==null;){d=xe;var h=d.sibling,p=d.return;if(A0(d),d===u){xe=null;break}if(h!==null){h.return=p,xe=h;break}xe=p}}}var g=o.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}xe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,xe=s;else e:for(;xe!==null;){if(o=xe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vs(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,xe=c;break e}xe=o.return}}var v=t.current;for(xe=v;xe!==null;){s=xe;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,xe=x;else e:for(s=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(C){bt(a,a.return,C)}if(a===s){xe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,xe=y;break e}xe=a.return}}if(Je=r,Sr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Au,t)}catch{}i=!0}return i}finally{lt=n,Hn.transition=e}}return!1}function jm(t,e,n){e=Ko(n,e),e=v0(t,e,1),t=ur(t,e,1),e=ln(),t!==null&&(va(t,1,e),_n(t,e))}function bt(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Ko(n,t),t=_0(e,t,1),e=ur(e,t,1),t=ln(),e!==null&&(va(e,1,t),_n(e,t));break}}e=e.return}}function FM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(Ut===4||Ut===3&&(jt&130023424)===jt&&500>At()-qh?Vr(t,0):Yh|=n),_n(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=ln();t=Fi(t,e),t!==null&&(va(t,e,n),_n(t,n))}function kM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function BM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),k0(t,n)}var B0;B0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,bM(t,e,n);mn=!!(t.flags&131072)}else mn=!1,yt&&e.flags&1048576&&G_(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=jo(e,nn.current);ko(e,n),r=Hh(null,e,i,t,r,n);var o=Gh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(o=!0,eu(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fh(e),r.updater=Uu,e.stateNode=r,r._reactInternals=e,Jd(e,i,t,n),e=nf(null,e,i,!0,o,n)):(e.tag=0,yt&&o&&Ph(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VM(i),t=Zn(i,t),r){case 0:e=tf(null,e,i,t,n);break e;case 1:e=Om(null,e,i,t,n);break e;case 11:e=Nm(null,e,i,t,n);break e;case 14:e=Um(null,e,i,Zn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Om(t,e,i,r,n);case 3:e:{if(M0(e),t===null)throw Error(re(387));i=e.pendingProps,o=e.memoizedState,r=o.element,q_(t,e),ou(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ko(Error(re(423)),e),e=Fm(t,e,i,n,r);break e}else if(i!==r){r=Ko(Error(re(424)),e),e=Fm(t,e,i,n,r);break e}else for(bn=lr(e.stateNode.containerInfo.firstChild),Cn=e,yt=!0,Jn=null,n=$_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),i===r){e=ki(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return K_(e),t===null&&Kd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Xd(i,r)?s=null:o!==null&&Xd(i,o)&&(e.flags|=32),S0(t,e),an(t,e,s,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return E0(t,e,n);case 4:return kh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yo(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Nm(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,mt(iu,i._currentValue),i._currentValue=s,o!==null)if(ai(o.value,s)){if(o.children===r.children&&!gn.current){e=ki(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Li(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(re(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Zd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ko(e,n),r=Gn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Um(t,e,i,r,n);case 15:return x0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Pl(t,e),e.tag=1,vn(i)?(t=!0,eu(e)):t=!1,ko(e,n),g0(e,i,r),Jd(e,i,r,n),nf(null,e,i,!0,t,n);case 19:return w0(t,e,n);case 22:return y0(t,e,n)}throw Error(re(156,e.tag))};function z0(t,e){return h_(t,e)}function zM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new zM(t,e,n,i)}function Jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VM(t){if(typeof t=="function")return Jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_h)return 11;if(t===xh)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Jh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case So:return Hr(n.children,r,o,e);case vh:s=8,r|=8;break;case Ed:return t=Bn(12,n,e,r|2),t.elementType=Ed,t.lanes=o,t;case wd:return t=Bn(13,n,e,r),t.elementType=wd,t.lanes=o,t;case Td:return t=Bn(19,n,e,r),t.elementType=Td,t.lanes=o,t;case Kv:return ku(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yv:s=10;break e;case qv:s=9;break e;case _h:s=11;break e;case xh:s=14;break e;case Zi:s=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Bn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Hr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=Kv,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ep(t,e,n,i,r,o,s,a,l){return t=new HM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Bn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(o),t}function GM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function V0(t){if(!t)return gr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(vn(n))return V_(t,n,e)}return e}function H0(t,e,n,i,r,o,s,a,l){return t=ep(n,i,!0,t,r,o,s,a,l),t.context=V0(null),n=t.current,i=ln(),r=dr(n),o=Li(i,r),o.callback=e??null,ur(n,o,r),t.current.lanes=r,va(t,r,i),_n(t,i),t}function Bu(t,e,n,i){var r=e.current,o=ln(),s=dr(r);return n=V0(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,s),t!==null&&(ri(t,r,s,o),Cl(t,r,s)),s}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tp(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function WM(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function np(t){this._internalRoot=t}zu.prototype.render=np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Bu(t,e,null,null)};zu.prototype.unmount=np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Bu(null,t,null,null)}),e[Oi]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&M_(t)}};function ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function XM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=hu(s);o.call(u)}}var s=H0(e,i,t,0,null,!1,!1,"",Ym);return t._reactRootContainer=s,t[Oi]=s.current,ta(t.nodeType===8?t.parentNode:t),$r(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=hu(l);a.call(u)}}var l=ep(t,0,!1,null,null,!1,!1,"",Ym);return t._reactRootContainer=l,t[Oi]=l.current,ta(t.nodeType===8?t.parentNode:t),$r(function(){Bu(e,l,n,i)}),l}function Hu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=hu(s);a.call(l)}}Bu(e,s,t,r)}else s=XM(n,e,t,r,i);return hu(s)}__=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(Mh(e,n|1),_n(e,At()),!(Je&6)&&(Zo=At()+500,Sr()))}break;case 13:$r(function(){var i=Fi(t,1);if(i!==null){var r=ln();ri(i,t,1,r)}}),tp(t,1)}};Eh=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=ln();ri(e,t,134217728,n)}tp(t,134217728)}};x_=function(t){if(t.tag===13){var e=dr(t),n=Fi(t,e);if(n!==null){var i=ln();ri(n,t,e,i)}tp(t,e)}};y_=function(){return lt};S_=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Ud=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lu(i);if(!r)throw Error(re(90));Qv(i),Ad(i,r)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};a_=Kh;l_=$r;var jM={usingClientEntryPoint:!1,Events:[xa,To,Lu,o_,s_,Kh]},ys={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$M={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||WM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Au=Xa.inject($M),pi=Xa}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jM;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(e))throw Error(re(200));return GM(t,e,null,n)};Pn.createRoot=function(t,e){if(!ip(t))throw Error(re(299));var n=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ep(t,1,!1,null,null,n,!1,i,r),t[Oi]=e.current,ta(t.nodeType===8?t.parentNode:t),new np(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return $r(t)};Pn.hydrate=function(t,e,n){if(!Vu(e))throw Error(re(200));return Hu(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!ip(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=G0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=H0(e,null,t,1,n??null,r,!1,o,s),t[Oi]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zu(e)};Pn.render=function(t,e,n){if(!Vu(e))throw Error(re(200));return Hu(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(re(40));return t._reactRootContainer?($r(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1};Pn.unstable_batchedUpdates=Kh;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Hu(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function W0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)}catch(t){console.error(t)}}W0(),Wv.exports=Pn;var X0=Wv.exports,qm=X0;Sd.createRoot=qm.createRoot,Sd.hydrateRoot=qm.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),rp=(t,e)=>{const n=q.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...u},d)=>q.createElement("svg",{ref:d,...YM,width:r,height:r,stroke:i,strokeWidth:s?Number(o)*24/Number(r):o,className:["lucide",`lucide-${qM(t)}`,a].join(" "),...u},[...e.map(([f,h])=>q.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=rp("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=rp("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=rp("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="174",zo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},QM=0,Zm=1,JM=2,j0=1,eE=2,Ti=3,vr=0,xn=1,ei=2,hr=0,Vo=1,Qm=2,Jm=3,eg=4,tE=5,Nr=100,nE=101,iE=102,rE=103,oE=104,sE=200,aE=201,lE=202,uE=203,mf=204,gf=205,cE=206,dE=207,fE=208,hE=209,pE=210,mE=211,gE=212,vE=213,_E=214,vf=0,_f=1,xf=2,Qo=3,yf=4,Sf=5,Mf=6,Ef=7,$0=0,xE=1,yE=2,pr=0,SE=1,ME=2,EE=3,wE=4,TE=5,bE=6,CE=7,Y0=300,Jo=301,es=302,wf=303,Tf=304,Gu=306,bf=1e3,Br=1001,Cf=1002,oi=1003,AE=1004,ja=1005,zn=1006,Oc=1007,zr=1008,Bi=1009,q0=1010,K0=1011,ca=1012,sp=1013,Yr=1014,Pi=1015,Sa=1016,ap=1017,lp=1018,ts=1020,Z0=35902,Q0=1021,J0=1022,ni=1023,ex=1024,tx=1025,Ho=1026,ns=1027,nx=1028,up=1029,ix=1030,cp=1031,dp=1033,Nl=33776,Ul=33777,Ol=33778,Fl=33779,Af=35840,Rf=35841,Pf=35842,Df=35843,Lf=36196,If=37492,Nf=37496,Uf=37808,Of=37809,Ff=37810,kf=37811,Bf=37812,zf=37813,Vf=37814,Hf=37815,Gf=37816,Wf=37817,Xf=37818,jf=37819,$f=37820,Yf=37821,kl=36492,qf=36494,Kf=36495,rx=36283,Zf=36284,Qf=36285,Jf=36286,RE=3200,PE=3201,DE=0,LE=1,nr="",On="srgb",is="srgb-linear",pu="linear",ct="srgb",io=7680,tg=519,IE=512,NE=513,UE=514,ox=515,OE=516,FE=517,kE=518,BE=519,ng=35044,ig="300 es",Di=2e3,mu=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rg=1234567;const Ws=Math.PI/180,da=180/Math.PI;function us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function fp(t,e){return(t%e+e)%e}function zE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function VE(t,e,n){return t!==e?(n-t)/(e-t):0}function Xs(t,e,n){return(1-n)*t+n*e}function HE(t,e,n,i){return Xs(t,e,1-Math.exp(-n*i))}function GE(t,e=1){return e-Math.abs(fp(t,e*2)-e)}function WE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function XE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function $E(t,e){return t+Math.random()*(e-t)}function YE(t){return t*(.5-Math.random())}function qE(t){t!==void 0&&(rg=t);let e=rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KE(t){return t*Ws}function ZE(t){return t*da}function QE(t){return(t&t-1)===0&&t!==0}function JE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function e1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function t1(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),d=s((e+i)/2),f=o((e-i)/2),h=s((e-i)/2),p=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":t.set(a*d,l*f,l*h,a*u);break;case"YZY":t.set(l*h,a*d,l*f,a*u);break;case"ZXZ":t.set(l*f,l*h,a*d,a*u);break;case"XZX":t.set(a*d,l*g,l*p,a*u);break;case"YXY":t.set(l*p,a*d,l*g,a*u);break;case"ZYZ":t.set(l*g,l*p,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const n1={DEG2RAD:Ws,RAD2DEG:da,generateUUID:us,clamp:$e,euclideanModulo:fp,mapLinear:zE,inverseLerp:VE,lerp:Xs,damp:HE,pingpong:GE,smoothstep:WE,smootherstep:XE,randInt:jE,randFloat:$E,randFloatSpread:YE,seededRandom:qE,degToRad:KE,radToDeg:ZE,isPowerOfTwo:QE,ceilPowerOfTwo:JE,floorPowerOfTwo:e1,setQuaternionFromProperEuler:t1,normalize:on,denormalize:xo};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,s,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],c=r[6],v=r[1],x=r[4],y=r[7],C=r[2],b=r[5],w=r[8];return o[0]=s*_+a*v+l*C,o[3]=s*m+a*x+l*b,o[6]=s*c+a*y+l*w,o[1]=u*_+d*v+f*C,o[4]=u*m+d*x+f*b,o[7]=u*c+d*y+f*w,o[2]=h*_+p*v+g*C,o[5]=h*m+p*x+g*b,o[8]=h*c+p*y+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*s-a*u,h=a*l-d*o,p=u*o-s*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-d*i)*_,e[2]=(a*i-r*s)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Fc.makeScale(e,n)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new We;function sx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function i1(){const t=fa("canvas");return t.style.display="block",t}const og={};function Lr(t){t in og||(og[t]=!0,console.warn(t))}function r1(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function o1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sg=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a1(){const t={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ct&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(r.r=Go(r.r),r.g=Go(r.g),r.b=Go(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?pu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[is]:{primaries:e,whitePoint:i,transfer:pu,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const tt=a1();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Go(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ro;class l1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ro===void 0&&(ro=fa("canvas")),ro.width=e.width,ro.height=e.height;const i=ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ro}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ii(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(kc(r[s].image)):o.push(kc(r[s]))}else o=kc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?l1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c1=0;class tn extends eo{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Br,r=Br,o=zn,s=zr,a=ni,l=Bi,u=tn.DEFAULT_ANISOTROPY,d=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=us(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bf:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bf:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Y0;tn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(c+1)/2,b=(d+h)/4,w=(f+_)/4,A=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=b/i,o=w/i):y>C?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=b/r,o=A/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=w/o,r=A/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-d)/v,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d1 extends eo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new hp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends d1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ax extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=o[s+0],p=o[s+1],g=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==h||u!==p||d!==g){let m=1-a;const c=l*h+u*p+d*g+f*_,v=c>=0?1:-1,x=1-c*c;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,c*v);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,d=d*m+g*y,f=f*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s],h=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+d*f+l*p-u*h,e[n+1]=l*g+d*h+u*f-a*p,e[n+2]=u*g+d*p+a*h-l*f,e[n+3]=d*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(o/2),h=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*d*f+u*p*g,this._y=u*p*f-h*d*g,this._z=u*d*g+h*p*f,this._w=u*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+u*p*g,this._y=u*p*f-h*d*g,this._z=u*d*g-h*p*f,this._w=u*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-u*p*g,this._y=u*p*f+h*d*g,this._z=u*d*g+h*p*f,this._w=u*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-u*p*g,this._y=u*p*f+h*d*g,this._z=u*d*g-h*p*f,this._w=u*d*f+h*p*g;break;case"YZX":this._x=h*d*f+u*p*g,this._y=u*p*f+h*d*g,this._z=u*d*g-h*p*f,this._w=u*d*f-h*p*g;break;case"XZY":this._x=h*d*f-u*p*g,this._y=u*p*f-h*d*g,this._z=u*d*g+h*p*f,this._w=u*d*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*l,this._y=r*d+s*l+o*a-i*u,this._z=o*d+s*u+i*l-r*a,this._w=s*d-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*d,this.y=i+l*d+a*u-o*f,this.z=r+l*f+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new F,lg=new Kr;class Ma{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Yn):Yn.fromBufferAttribute(o,s),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Ya.subVectors(this.max,Ss),oo.subVectors(e.a,Ss),so.subVectors(e.b,Ss),ao.subVectors(e.c,Ss),Xi.subVectors(so,oo),ji.subVectors(ao,so),wr.subVectors(oo,ao);let n=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-wr.z,wr.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,wr.z,0,-wr.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-wr.y,wr.x,0];return!zc(n,oo,so,ao,Ya)||(n=[1,0,0,0,1,0,0,0,1],!zc(n,oo,so,ao,Ya))?!1:(qa.crossVectors(Xi,ji),n=[qa.x,qa.y,qa.z],zc(n,oo,so,ao,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new F,new F,new F,new F,new F,new F,new F,new F],Yn=new F,$a=new Ma,oo=new F,so=new F,ao=new F,Xi=new F,ji=new F,wr=new F,Ss=new F,Ya=new F,qa=new F,Tr=new F;function zc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Tr.fromArray(t,o);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),u=n.dot(Tr),d=i.dot(Tr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const h1=new Ma,Ms=new F,Vc=new F;class Wu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const n=Ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Vc)),this.expandByPoint(Ms.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new F,Hc=new F,Ka=new F,$i=new F,Gc=new F,Za=new F,Wc=new F;class Xu{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Hc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Hc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ka),a=$i.dot(this.direction),l=-$i.dot(Ka),u=$i.lengthSq(),d=Math.abs(1-s*s);let f,h,p,g;if(d>0)if(f=s*l-a,h=s*a-l,g=o*d,f>=0)if(h>=-g)if(h<=g){const _=1/d;f*=_,h*=_,p=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hc).addScaledVector(Ka,h),p}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,o){Gc.subVectors(n,e),Za.subVectors(i,e),Wc.crossVectors(Gc,Za);let s=this.direction.dot(Wc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Za.crossVectors($i,Za));if(l<0)return null;const u=a*this.direction.dot(Gc.cross($i));if(u<0||l+u>s)return null;const d=-a*$i.dot(Wc);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,o,s,a,l,u,d,f,h,p,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,d,f,h,p,g,_,m)}set(e,n,i,r,o,s,a,l,u,d,f,h,p,g,_,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=g,c[11]=_,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/lo.setFromMatrixColumn(e,0).length(),o=1/lo.setFromMatrixColumn(e,1).length(),s=1/lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*d,p=s*f,g=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,g=u*d,_=u*f;n[0]=h+_*a,n[4]=g*a-p,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=p*a-g,n[6]=_+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,g=u*d,_=u*f;n[0]=h-_*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*d,n[9]=_-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,g=a*d,_=a*f;n[0]=l*d,n[4]=g*u-p,n[8]=h*u+_,n[1]=l*f,n[5]=_*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,g=a*l,_=a*u;n[0]=l*d,n[4]=_-h*f,n[8]=g*f+p,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*f+g,n[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,p=s*u,g=a*l,_=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+_,n[5]=s*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Yi.crossVectors(i,Mn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Yi.crossVectors(i,Mn)),Yi.normalize(),Qa.crossVectors(Mn,Yi),r[0]=Yi.x,r[4]=Qa.x,r[8]=Mn.x,r[1]=Yi.y,r[5]=Qa.y,r[9]=Mn.y,r[2]=Yi.z,r[6]=Qa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],c=i[14],v=i[3],x=i[7],y=i[11],C=i[15],b=r[0],w=r[4],A=r[8],T=r[12],S=r[1],P=r[5],H=r[9],B=r[13],K=r[2],Y=r[6],G=r[10],Q=r[14],L=r[3],X=r[7],Z=r[11],ue=r[15];return o[0]=s*b+a*S+l*K+u*L,o[4]=s*w+a*P+l*Y+u*X,o[8]=s*A+a*H+l*G+u*Z,o[12]=s*T+a*B+l*Q+u*ue,o[1]=d*b+f*S+h*K+p*L,o[5]=d*w+f*P+h*Y+p*X,o[9]=d*A+f*H+h*G+p*Z,o[13]=d*T+f*B+h*Q+p*ue,o[2]=g*b+_*S+m*K+c*L,o[6]=g*w+_*P+m*Y+c*X,o[10]=g*A+_*H+m*G+c*Z,o[14]=g*T+_*B+m*Q+c*ue,o[3]=v*b+x*S+y*K+C*L,o[7]=v*w+x*P+y*Y+C*X,o[11]=v*A+x*H+y*G+C*Z,o[15]=v*T+x*B+y*Q+C*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],c=e[15];return g*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*p-i*l*p)+_*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*d-o*l*d)+m*(+n*u*f-n*a*p-o*s*f+i*s*p+o*a*d-i*u*d)+c*(-r*a*d-n*l*f+n*a*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],c=e[15],v=f*m*u-_*h*u+_*l*p-a*m*p-f*l*c+a*h*c,x=g*h*u-d*m*u-g*l*p+s*m*p+d*l*c-s*h*c,y=d*_*u-g*f*u+g*a*p-s*_*p-d*a*c+s*f*c,C=g*f*l-d*_*l-g*a*h+s*_*h+d*a*m-s*f*m,b=n*v+i*x+r*y+o*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(_*h*o-f*m*o-_*r*p+i*m*p+f*r*c-i*h*c)*w,e[2]=(a*m*o-_*l*o+_*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=x*w,e[5]=(d*m*o-g*h*o+g*r*p-n*m*p-d*r*c+n*h*c)*w,e[6]=(g*l*o-s*m*o-g*r*u+n*m*u+s*r*c-n*l*c)*w,e[7]=(s*h*o-d*l*o+d*r*u-n*h*u-s*r*p+n*l*p)*w,e[8]=y*w,e[9]=(g*f*o-d*_*o-g*i*p+n*_*p+d*i*c-n*f*c)*w,e[10]=(s*_*o-g*a*o+g*i*u-n*_*u-s*i*c+n*a*c)*w,e[11]=(d*a*o-s*f*o-d*i*u+n*f*u+s*i*p-n*a*p)*w,e[12]=C*w,e[13]=(d*_*r-g*f*r+g*i*h-n*_*h-d*i*m+n*f*m)*w,e[14]=(g*a*r-s*_*r-g*i*l+n*_*l+s*i*m-n*a*m)*w,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*s,0,u*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,d=s+s,f=a+a,h=o*u,p=o*d,g=o*f,_=s*d,m=s*f,c=a*f,v=l*u,x=l*d,y=l*f,C=i.x,b=i.y,w=i.z;return r[0]=(1-(_+c))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(h+c))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(g+x)*w,r[9]=(m-v)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=lo.set(r[0],r[1],r[2]).length();const s=lo.set(r[4],r[5],r[6]).length(),a=lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const u=1/o,d=1/s,f=1/a;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=d,qn.elements[5]*=d,qn.elements[6]*=d,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Di){const l=this.elements,u=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Di)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===mu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Di){const l=this.elements,u=1/(n-e),d=1/(i-r),f=1/(s-o),h=(n+e)*u,p=(i+r)*d;let g,_;if(a===Di)g=(s+o)*f,_=-2*f;else if(a===mu)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lo=new F,qn=new _t,p1=new F(0,0,0),m1=new F(1,1,1),Yi=new F,Qa=new F,Mn=new F,ug=new _t,cg=new Kr;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g1=0;const dg=new F,uo=new Kr,Mi=new _t,Ja=new F,Es=new F,v1=new F,_1=new Kr,fg=new F(1,0,0),hg=new F(0,1,0),pg=new F(0,0,1),mg={type:"added"},x1={type:"removed"},co={type:"childadded",child:null},Xc={type:"childremoved",child:null};class un extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new F,n=new zi,i=new Kr,r=new F(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,n){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Es,Ja,this.up):Mi.lookAt(Ja,Es,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),uo.setFromRotationMatrix(Mi),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mg),co.child=e,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x1),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mg),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,v1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,_1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new F(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new F,Ei=new F,jc=new F,wi=new F,fo=new F,ho=new F,gg=new F,$c=new F,Yc=new F,qc=new F,Kc=new ft,Zc=new ft,Qc=new ft;class ti{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Kn.subVectors(r,n),Ei.subVectors(i,n),jc.subVectors(e,n);const s=Kn.dot(Kn),a=Kn.dot(Ei),l=Kn.dot(jc),u=Ei.dot(Ei),d=Ei.dot(jc),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(u*l-a*d)*h,g=(s*d-a*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Kc.setScalar(0),Zc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(e,n),Zc.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Kc,o.x),s.addScaledVector(Zc,o.y),s.addScaledVector(Qc,o.z),s}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ei.subVectors(e,n),Kn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;fo.subVectors(r,i),ho.subVectors(o,i),$c.subVectors(e,i);const l=fo.dot($c),u=ho.dot($c);if(l<=0&&u<=0)return n.copy(i);Yc.subVectors(e,r);const d=fo.dot(Yc),f=ho.dot(Yc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(fo,s);qc.subVectors(e,o);const p=fo.dot(qc),g=ho.dot(qc);if(g>=0&&p<=g)return n.copy(o);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(ho,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return gg.subVectors(o,r),a=(f-d)/(f-d+(p-g)),n.copy(r).addScaledVector(gg,a);const c=1/(m+_+h);return s=_*c,a=h*c,n.copy(i).addScaledVector(fo,s).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},el={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=fp(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Jc(s,o,e+1/3),this.g=Jc(s,o,e),this.b=Jc(s,o,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=On){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=lx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return tt.fromWorkingColorSpace(Qt.copy(this),e),Math.round($e(Qt.r*255,0,255))*65536+Math.round($e(Qt.g*255,0,255))*256+Math.round($e(Qt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,o=Qt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const d=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=On){tt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(el);const i=Xs(qi.h,el.h,n),r=Xs(qi.s,el.s,n),o=Xs(qi.l,el.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new rt;rt.NAMES=lx;let y1=0;class Ea extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Vo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mf&&(i.blendSrc=this.blendSrc),this.blendDst!==gf&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class js extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new F,tl=new He;let S1=0;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ng,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),o=on(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class ux extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cx extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class si extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let M1=0;const Un=new _t,ed=new un,po=new F,En=new Ma,ws=new Ma,Bt=new F;class _i extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sx(e)?cx:ux)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(En.min,ws.min),En.expandByPoint(Bt),Bt.addVectors(En.max,ws.max),En.expandByPoint(Bt)):(En.expandByPoint(ws.min),En.expandByPoint(ws.max))}En.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Bt.fromBufferAttribute(a,u),l&&(po.fromBufferAttribute(e,u),Bt.add(po)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new F,l[A]=new F;const u=new F,d=new F,f=new F,h=new He,p=new He,g=new He,_=new F,m=new F;function c(A,T,S){u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),h.fromBufferAttribute(o,A),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,S),d.sub(u),f.sub(u),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),a[A].add(_),a[T].add(_),a[S].add(_),l[A].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,T=v.length;A<T;++A){const S=v[A],P=S.start,H=S.count;for(let B=P,K=P+H;B<K;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new F,y=new F,C=new F,b=new F;function w(A){C.fromBufferAttribute(r,A),b.copy(C);const T=a[A];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(b,T);const P=y.dot(l[A])<0?-1:1;s.setXYZW(A,x.x,x.y,x.z,P)}for(let A=0,T=v.length;A<T;++A){const S=v[A],P=S.start,H=S.count;for(let B=P,K=P+H;B<K;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,o=new F,s=new F,a=new F,l=new F,u=new F,d=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let c=0;c<d;c++)h[g++]=u[p++]}return new gi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],f=o[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new _t,br=new Xu,nl=new Wu,_g=new F,il=new F,rl=new F,ol=new F,td=new F,sl=new F,xg=new F,al=new F;class Vn extends un{constructor(e=new _i,n=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){sl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const d=a[l],f=o[l];d!==0&&(td.fromBufferAttribute(f,e),s?sl.addScaledVector(td,d):sl.addScaledVector(td.sub(n),d))}n.add(sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(o),br.copy(e.ray).recast(e.near),!(nl.containsPoint(br.origin)===!1&&(br.intersectSphere(nl,_g)===null||br.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(vg.copy(o).invert(),br.copy(e.ray).applyMatrix4(vg),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],c=s[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const b=a.getX(y),w=a.getX(y+1),A=a.getX(y+2);r=ll(this,c,e,i,u,d,f,b,w,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=ll(this,s,e,i,u,d,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],c=s[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const b=y,w=y+1,A=y+2;r=ll(this,c,e,i,u,d,f,b,w,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const v=m,x=m+1,y=m+2;r=ll(this,s,e,i,u,d,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function E1(t,e,n,i,r,o,s,a){let l;if(e.side===xn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===vr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(al);return u<n.near||u>n.far?null:{distance:u,point:al.clone(),object:t}}function ll(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,il),t.getVertexPosition(l,rl),t.getVertexPosition(u,ol);const d=E1(t,e,n,i,il,rl,ol,xg);if(d){const f=new F;ti.getBarycoord(xg,il,rl,ol,f),r&&(d.uv=ti.getInterpolatedAttribute(r,a,l,u,f,new He)),o&&(d.uv1=ti.getInterpolatedAttribute(o,a,l,u,f,new He)),s&&(d.normal=ti.getInterpolatedAttribute(s,a,l,u,f,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};ti.getNormal(il,rl,ol,h.normal),d.face=h,d.barycoord=f}return d}class wa extends _i{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new si(u,3)),this.setAttribute("normal",new si(d,3)),this.setAttribute("uv",new si(f,2));function g(_,m,c,v,x,y,C,b,w,A,T){const S=y/w,P=C/A,H=y/2,B=C/2,K=b/2,Y=w+1,G=A+1;let Q=0,L=0;const X=new F;for(let Z=0;Z<G;Z++){const ue=Z*P-B;for(let ce=0;ce<Y;ce++){const Ue=ce*S-H;X[_]=Ue*v,X[m]=ue*x,X[c]=K,u.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[c]=b>0?1:-1,d.push(X.x,X.y,X.z),f.push(ce/w),f.push(1-Z/A),Q+=1}}for(let Z=0;Z<A;Z++)for(let ue=0;ue<w;ue++){const ce=h+ue+Y*Z,Ue=h+ue+Y*(Z+1),I=h+(ue+1)+Y*(Z+1),j=h+(ue+1)+Y*Z;l.push(ce,Ue,j),l.push(Ue,I,j),L+=6}a.addGroup(p,L,T),p+=L,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=rs(t[n]);for(const r in i)e[r]=i[r]}return e}function w1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const T1={clone:rs,merge:sn};var b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=w1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fx extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,yg=new He,Sg=new He;class Tn extends fx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,yg,Sg),n.subVectors(Sg,yg)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const mo=-90,go=1;class A1 extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(mo,go,e,n);r.layers=this.layers,this.add(r);const o=new Tn(mo,go,e,n);o.layers=this.layers,this.add(o);const s=new Tn(mo,go,e,n);s.layers=this.layers,this.add(s);const a=new Tn(mo,go,e,n);a.layers=this.layers,this.add(a);const l=new Tn(mo,go,e,n);l.layers=this.layers,this.add(l);const u=new Tn(mo,go,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hx extends tn{constructor(e,n,i,r,o,s,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Jo,super(e,n,i,r,o,s,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R1 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wa(5,5,5),o=new _r({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:hr});o.uniforms.tEquirect.value=n;const s=new Vn(r,o),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=zn),new A1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}let ul=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}};const P1={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),c=this._getHandJoint(u,_);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class D1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const id=new F,L1=new F,I1=new We;class Ji{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=id.subVectors(i,n).cross(L1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||I1.getNormalMatrix(e),r=this.coplanarPoint(id).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Wu,cl=new F;class mp{constructor(e=new Ji,n=new Ji,i=new Ji,r=new Ji,o=new Ji,s=new Ji){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],c=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-o,h-u,m-p,y-c).normalize(),i[1].setComponents(l+o,h+u,m+p,y+c).normalize(),i[2].setComponents(l+s,h+d,m+g,y+v).normalize(),i[3].setComponents(l-s,h-d,m-g,y-v).normalize(),i[4].setComponents(l-a,h-f,m-_,y-x).normalize(),n===Di)i[5].setComponents(l+a,h+f,m+_,y+x).normalize();else if(n===mu)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class px extends Ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gu=new F,vu=new F,Mg=new _t,Ts=new Xu,dl=new Wu,rd=new F,Eg=new F;class N1 extends un{constructor(e=new _i,n=new px){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)gu.fromBufferAttribute(n,r-1),vu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=gu.distanceTo(vu);e.setAttribute("lineDistance",new si(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(r),dl.radius+=o,e.ray.intersectsSphere(dl)===!1)return;Mg.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Mg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let _=p,m=g-1;_<m;_+=u){const c=d.getX(_),v=d.getX(_+1),x=fl(this,e,Ts,l,c,v,_);x&&n.push(x)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(p),c=fl(this,e,Ts,l,_,m,g-1);c&&n.push(c)}}else{const p=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let _=p,m=g-1;_<m;_+=u){const c=fl(this,e,Ts,l,_,_+1,_);c&&n.push(c)}if(this.isLineLoop){const _=fl(this,e,Ts,l,g-1,p,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function fl(t,e,n,i,r,o,s){const a=t.geometry.attributes.position;if(gu.fromBufferAttribute(a,r),vu.fromBufferAttribute(a,o),n.distanceSqToSegment(gu,vu,rd,Eg)>i)return;rd.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(rd);if(!(u<e.near||u>e.far))return{distance:u,point:Eg.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}class U1 extends tn{constructor(e,n,i,r,o,s,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mx extends tn{constructor(e,n,i,r,o,s,a,l,u,d=Ho){if(d!==Ho&&d!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ho&&(i=Yr),i===void 0&&d===ns&&(i=ts),super(null,r,o,s,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _u extends _i{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const o=[],s=[],a=[],l=[],u=new F,d=new He;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),s.push(u.x,u.y,u.z),a.push(0,0,1),d.x=(s[h]/e+1)/2,d.y=(s[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new si(s,3)),this.setAttribute("normal",new si(a,3)),this.setAttribute("uv",new si(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ta extends _i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=n/l,p=[],g=[],_=[],m=[];for(let c=0;c<d;c++){const v=c*h-s;for(let x=0;x<u;x++){const y=x*f-o;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const x=v+u*c,y=v+u*(c+1),C=v+1+u*(c+1),b=v+1+u*c;p.push(x,y,b),p.push(y,C,b)}this.setIndex(p),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class O1 extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class k1{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,o===!1&&r.onStart!==void 0&&r.onStart(d,s,a),o=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const B1=new k1;class gp{constructor(e){this.manager=e!==void 0?e:B1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gp.DEFAULT_MATERIAL_NAME="__DEFAULT";class z1 extends gp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=wg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=fa("img");function l(){d(),wg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(f){d(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class V1 extends gp{constructor(e){super(e)}load(e,n,i,r){const o=new tn,s=new z1(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class gx extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const od=new _t,Tg=new F,bg=new F;class H1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tg),bg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bg),n.updateMatrixWorld(),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cg=new _t,bs=new F,sd=new F;class G1 extends H1{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),i.position.copy(bs),sd.copy(i.position),sd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(sd),i.updateMatrixWorld(),r.makeTranslation(-bs.x,-bs.y,-bs.z),Cg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cg)}}class W1 extends gx{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new G1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class X1 extends fx{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class j1 extends gx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class $1 extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ag=new _t;class Y1{constructor(e,n,i=0,r=1/0){this.ray=new Xu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ag.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ag),this}intersectObject(e,n=!0,i=[]){return eh(e,this,i,n),i.sort(Rg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)eh(e[r],this,i,n);return i.sort(Rg),i}}function Rg(t,e){return t.distance-e.distance}function eh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const o=t.children;for(let s=0,a=o.length;s<a;s++)eh(o[s],e,n,!0)}}class Pg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class q1 extends eo{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Dg(t,e,n,i){const r=K1(i);switch(n){case Q0:return t*e;case ex:return t*e;case tx:return t*e*2;case nx:return t*e/r.components*r.byteLength;case up:return t*e/r.components*r.byteLength;case ix:return t*e*2/r.components*r.byteLength;case cp:return t*e*2/r.components*r.byteLength;case J0:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case dp:return t*e*4/r.components*r.byteLength;case Nl:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:case Df:return Math.max(t,16)*Math.max(e,8)/4;case Af:case Pf:return Math.max(t,8)*Math.max(e,8)/2;case Lf:case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $f:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kl:case qf:case Kf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rx:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qf:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function K1(t){switch(t){case Bi:case q0:return{byteLength:1,components:1};case ca:case K0:case Sa:return{byteLength:2,components:1};case ap:case lp:return{byteLength:2,components:4};case Yr:case sp:case Pi:return{byteLength:4,components:1};case Z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vx(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Z1(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const d=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(u,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var Q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ow=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ww=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ST=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Q1,alphahash_pars_fragment:J1,alphamap_fragment:ew,alphamap_pars_fragment:tw,alphatest_fragment:nw,alphatest_pars_fragment:iw,aomap_fragment:rw,aomap_pars_fragment:ow,batching_pars_vertex:sw,batching_vertex:aw,begin_vertex:lw,beginnormal_vertex:uw,bsdfs:cw,iridescence_fragment:dw,bumpmap_pars_fragment:fw,clipping_planes_fragment:hw,clipping_planes_pars_fragment:pw,clipping_planes_pars_vertex:mw,clipping_planes_vertex:gw,color_fragment:vw,color_pars_fragment:_w,color_pars_vertex:xw,color_vertex:yw,common:Sw,cube_uv_reflection_fragment:Mw,defaultnormal_vertex:Ew,displacementmap_pars_vertex:ww,displacementmap_vertex:Tw,emissivemap_fragment:bw,emissivemap_pars_fragment:Cw,colorspace_fragment:Aw,colorspace_pars_fragment:Rw,envmap_fragment:Pw,envmap_common_pars_fragment:Dw,envmap_pars_fragment:Lw,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:Ww,envmap_vertex:Nw,fog_vertex:Uw,fog_pars_vertex:Ow,fog_fragment:Fw,fog_pars_fragment:kw,gradientmap_pars_fragment:Bw,lightmap_pars_fragment:zw,lights_lambert_fragment:Vw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Gw,lights_toon_fragment:Xw,lights_toon_pars_fragment:jw,lights_phong_fragment:$w,lights_phong_pars_fragment:Yw,lights_physical_fragment:qw,lights_physical_pars_fragment:Kw,lights_fragment_begin:Zw,lights_fragment_maps:Qw,lights_fragment_end:Jw,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:rT,map_pars_fragment:oT,map_particle_fragment:sT,map_particle_pars_fragment:aT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:uT,morphinstance_vertex:cT,morphcolor_vertex:dT,morphnormal_vertex:fT,morphtarget_pars_vertex:hT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:vT,normal_pars_vertex:_T,normal_vertex:xT,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:ST,clearcoat_normal_fragment_maps:MT,clearcoat_pars_fragment:ET,iridescence_pars_fragment:wT,opaque_fragment:TT,packing:bT,premultiplied_alpha_fragment:CT,project_vertex:AT,dithering_fragment:RT,dithering_pars_fragment:PT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:LT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:NT,shadowmap_vertex:UT,shadowmask_pars_fragment:OT,skinbase_vertex:FT,skinning_pars_vertex:kT,skinning_vertex:BT,skinnormal_vertex:zT,specularmap_fragment:VT,specularmap_pars_fragment:HT,tonemapping_fragment:GT,tonemapping_pars_fragment:WT,transmission_fragment:XT,transmission_pars_fragment:jT,uv_pars_fragment:$T,uv_pars_vertex:YT,uv_vertex:qT,worldpos_vertex:KT,background_vert:ZT,background_frag:QT,backgroundCube_vert:JT,backgroundCube_frag:eb,cube_vert:tb,cube_frag:nb,depth_vert:ib,depth_frag:rb,distanceRGBA_vert:ob,distanceRGBA_frag:sb,equirect_vert:ab,equirect_frag:lb,linedashed_vert:ub,linedashed_frag:cb,meshbasic_vert:db,meshbasic_frag:fb,meshlambert_vert:hb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:vb,meshnormal_frag:_b,meshphong_vert:xb,meshphong_frag:yb,meshphysical_vert:Sb,meshphysical_frag:Mb,meshtoon_vert:Eb,meshtoon_frag:wb,points_vert:Tb,points_frag:bb,shadow_vert:Cb,shadow_frag:Ab,sprite_vert:Rb,sprite_frag:Pb},de={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ci={basic:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:sn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:sn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:sn([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:sn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:sn([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:sn([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:sn([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:sn([de.lights,de.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ci.physical={uniforms:sn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const hl={r:0,b:0,g:0},Ar=new zi,Db=new _t;function Lb(t,e,n,i,r,o,s){const a=new rt(0);let l=o===!0?0:1,u,d,f=null,h=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function _(x){let y=!1;const C=g(x);C===null?c(a,l):C&&C.isColor&&(c(C,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Gu)?(d===void 0&&(d=new Vn(new wa(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:rs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Ar)),d.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,(f!==C||h!==C.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new Vn(new Ta(2,2),new _r({name:"BackgroundMaterial",uniforms:rs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function c(x,y){x.getRGB(hl,dx(t)),i.buffers.color.setClear(hl.r,hl.g,hl.b,y,s)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,c(a,l)},render:_,addToRenderList:m,dispose:v}}function Ib(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(S,P,H,B,K){let Y=!1;const G=f(B,H,P);o!==G&&(o=G,u(o.object)),Y=p(S,B,H,K),Y&&g(S,B,H,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,y(S,P,H,B),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,P,H){const B=H.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let Y=K[P.id];Y===void 0&&(Y={},K[P.id]=Y);let G=Y[B];return G===void 0&&(G=h(l()),Y[B]=G),G}function h(S){const P=[],H=[],B=[];for(let K=0;K<n;K++)P[K]=0,H[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,P,H,B){const K=o.attributes,Y=P.attributes;let G=0;const Q=H.getAttributes();for(const L in Q)if(Q[L].location>=0){const Z=K[L];let ue=Y[L];if(ue===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;G++}return o.attributesNum!==G||o.index!==B}function g(S,P,H,B){const K={},Y=P.attributes;let G=0;const Q=H.getAttributes();for(const L in Q)if(Q[L].location>=0){let Z=Y[L];Z===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),K[L]=ue,G++}o.attributes=K,o.attributesNum=G,o.index=B}function _(){const S=o.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function m(S){c(S,0)}function c(S,P){const H=o.newAttributes,B=o.enabledAttributes,K=o.attributeDivisors;H[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),K[S]!==P&&(t.vertexAttribDivisor(S,P),K[S]=P)}function v(){const S=o.newAttributes,P=o.enabledAttributes;for(let H=0,B=P.length;H<B;H++)P[H]!==S[H]&&(t.disableVertexAttribArray(H),P[H]=0)}function x(S,P,H,B,K,Y,G){G===!0?t.vertexAttribIPointer(S,P,H,K,Y):t.vertexAttribPointer(S,P,H,B,K,Y)}function y(S,P,H,B){_();const K=B.attributes,Y=H.getAttributes(),G=P.defaultAttributeValues;for(const Q in Y){const L=Y[Q];if(L.location>=0){let X=K[Q];if(X===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const Z=X.normalized,ue=X.itemSize,ce=e.get(X);if(ce===void 0)continue;const Ue=ce.buffer,I=ce.type,j=ce.bytesPerElement,J=I===t.INT||I===t.UNSIGNED_INT||X.gpuType===sp;if(X.isInterleavedBufferAttribute){const $=X.data,se=$.stride,_e=X.offset;if($.isInstancedInterleavedBuffer){for(let ae=0;ae<L.locationSize;ae++)c(L.location+ae,$.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ae=0;ae<L.locationSize;ae++)m(L.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let ae=0;ae<L.locationSize;ae++)x(L.location+ae,ue/L.locationSize,I,Z,se*j,(_e+ue/L.locationSize*ae)*j,J)}else{if(X.isInstancedBufferAttribute){for(let $=0;$<L.locationSize;$++)c(L.location+$,X.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let $=0;$<L.locationSize;$++)m(L.location+$);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let $=0;$<L.locationSize;$++)x(L.location+$,ue/L.locationSize,I,Z,ue*j,ue/L.locationSize*$*j,J)}}else if(G!==void 0){const Z=G[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}v()}function C(){A();for(const S in i){const P=i[S];for(const H in P){const B=P[H];for(const K in B)d(B[K].object),delete B[K];delete P[H]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const H in P){const B=P[H];for(const K in B)d(B[K].object),delete B[K];delete P[H]}delete i[S.id]}function w(S){for(const P in i){const H=i[P];if(H[S.id]===void 0)continue;const B=H[S.id];for(const K in B)d(B[K].object),delete B[K];delete H[S.id]}}function A(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Nb(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function a(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];n.update(p,i,1)}function l(u,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)s(u[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_]*h[_];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ub(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==ni&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!A)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:b}}function Ob(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ji,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,c=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?d(null):u();else{const v=o?0:i,x=v*4;let y=c.clippingState||null;l.value=y,y=d(g,h,x,p);for(let C=0;C!==x;++C)y[C]=n[C];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const c=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let x=0,y=p;x!==_;++x,y+=4)s.copy(f[x]).applyMatrix4(v,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fb(t){let e=new WeakMap;function n(s,a){return a===wf?s.mapping=Jo:a===Tf&&(s.mapping=es),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===wf||a===Tf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new R1(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Io=4,Lg=[.125,.215,.35,.446,.526,.582],Ur=20,ad=new X1,Ig=new rt;let ld=null,ud=0,cd=0,dd=!1;const Ir=(1+Math.sqrt(5))/2,vo=1/Ir,Ng=[new F(-Ir,vo,0),new F(Ir,vo,0),new F(-vo,0,Ir),new F(vo,0,Ir),new F(0,Ir,-vo),new F(0,Ir,vo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],kb=new F;class Ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=kb}=o;ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=dd,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jo||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Sa,format:ni,colorSpace:is,depthBuffer:!1},r=Og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bb(o)),this._blurMaterial=zb(o,e,n)}return r}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,ad)}_sceneToCubeUV(e,n,i,r,o){const l=new Tn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ig),f.toneMapping=pr,f.autoClear=!1;const g=new js({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new Vn(new wa,g);let m=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,m=!0):(g.color.copy(Ig),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,u[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+d[v],o.y,o.z)):x===1?(l.up.set(0,0,u[v]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+d[v],o.z)):(l.up.set(0,u[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+d[v]));const y=this._cubeSize;pl(r,x*y,v>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jo||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Vn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ng[(r-o-1)%Ng.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Vn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),_=o/g,m=isFinite(o)?1+Math.floor(d*_):Ur;m>Ur&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const c=[];let v=0;for(let w=0;w<Ur;++w){const A=w/_,T=Math.exp(-A*A/2);c.push(T),w===0?v+=T:w<m&&(v+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Io?r-x+Io:0),b=4*(this._cubeSize-y);pl(n,C,b,3*y,2*y),l.setRenderTarget(n),l.render(f,ad)}}function Bb(t){const e=[],n=[],i=[];let r=t;const o=t-Io+1+Lg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Io?l=Lg[s-t+Io-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,_=3,m=2,c=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(c*g*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,A=b>2?0:-1,T=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(T,_*g*b),x.set(h,m*g*b);const S=[b,b,b,b,b,b];y.set(S,c*g*b)}const C=new _i;C.setAttribute("position",new gi(v,_)),C.setAttribute("uv",new gi(x,m)),C.setAttribute("faceIndex",new gi(y,c)),e.push(C),r>Io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Og(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zb(t,e,n){const i=new Float32Array(Ur),r=new F(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Fg(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function kg(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function vp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===wf||l===Tf,d=l===Jo||l===es;if(u||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ug(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Ug(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Hb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Lr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gb(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],b=v[x+1],w=v[x+2];h.push(C,b,b,w,w,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,b=x+1,w=x+2;h.push(C,b,b,w,w,C)}}else return;const m=new(sx(h)?cx:ux)(h,1);m.version=_;const c=o.get(f);c&&e.remove(c),o.set(f,m)}function d(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Wb(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*s),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,h*s,g),n.update(p,i,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,g);let m=0;for(let c=0;c<g;c++)m+=p[c];n.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/s,p[c],_[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,_,0,g);let c=0;for(let v=0;v<g;v++)c+=p[v]*_[v];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Xb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jb(t,e,n){const i=new WeakMap,r=new ft;function o(s,a,l){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*b*4*f),A=new ax(w,C,b,f);A.type=Pi,A.needsUpdate=!0;const T=y*4;for(let P=0;P<f;P++){const H=c[P],B=v[P],K=x[P],Y=C*b*4*P;for(let G=0;G<H.count;G++){const Q=G*T;g===!0&&(r.fromBufferAttribute(H,G),w[Y+Q+0]=r.x,w[Y+Q+1]=r.y,w[Y+Q+2]=r.z,w[Y+Q+3]=0),_===!0&&(r.fromBufferAttribute(B,G),w[Y+Q+4]=r.x,w[Y+Q+5]=r.y,w[Y+Q+6]=r.z,w[Y+Q+7]=0),m===!0&&(r.fromBufferAttribute(K,G),w[Y+Q+8]=r.x,w[Y+Q+9]=r.y,w[Y+Q+10]=r.z,w[Y+Q+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new He(C,b)},i.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function $b(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const _x=new tn,Bg=new mx(1,1),xx=new ax,yx=new f1,Sx=new hx,zg=[],Vg=[],Hg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=zg[r];if(o===void 0&&(o=new Float32Array(r),zg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ju(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),Ft(n,i)}}function Jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;Gg.set(i),t.uniformMatrix3fv(this.addr,!1,Gg),Ft(n,i)}}function eC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;Hg.set(i),t.uniformMatrix4fv(this.addr,!1,Hg),Ft(n,i)}}function tC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function iC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function rC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function oC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function aC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function lC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function uC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Bg.compareFunction=ox,o=Bg):o=_x,n.setTexture2D(e||o,r)}function cC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yx,r)}function dC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Sx,r)}function fC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xx,r)}function hC(t){switch(t){case 5126:return Yb;case 35664:return qb;case 35665:return Kb;case 35666:return Zb;case 35674:return Qb;case 35675:return Jb;case 35676:return eC;case 5124:case 35670:return tC;case 35667:case 35671:return nC;case 35668:case 35672:return iC;case 35669:case 35673:return rC;case 5125:return oC;case 36294:return sC;case 36295:return aC;case 36296:return lC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return fC}}function pC(t,e){t.uniform1fv(this.addr,e)}function mC(t,e){const n=cs(e,this.size,2);t.uniform2fv(this.addr,n)}function gC(t,e){const n=cs(e,this.size,3);t.uniform3fv(this.addr,n)}function vC(t,e){const n=cs(e,this.size,4);t.uniform4fv(this.addr,n)}function _C(t,e){const n=cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xC(t,e){const n=cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yC(t,e){const n=cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SC(t,e){t.uniform1iv(this.addr,e)}function MC(t,e){t.uniform2iv(this.addr,e)}function EC(t,e){t.uniform3iv(this.addr,e)}function wC(t,e){t.uniform4iv(this.addr,e)}function TC(t,e){t.uniform1uiv(this.addr,e)}function bC(t,e){t.uniform2uiv(this.addr,e)}function CC(t,e){t.uniform3uiv(this.addr,e)}function AC(t,e){t.uniform4uiv(this.addr,e)}function RC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||_x,o[s])}function PC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||yx,o[s])}function DC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Sx,o[s])}function LC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||xx,o[s])}function IC(t){switch(t){case 5126:return pC;case 35664:return mC;case 35665:return gC;case 35666:return vC;case 35674:return _C;case 35675:return xC;case 35676:return yC;case 5124:case 35670:return SC;case 35667:case 35671:return MC;case 35668:case 35672:return EC;case 35669:case 35673:return wC;case 5125:return TC;case 36294:return bC;case 36295:return CC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return RC;case 35679:case 36299:case 36307:return PC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return LC}}class NC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hC(n.type)}}class UC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IC(n.type)}}class OC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Xg(t,e){t.seq.push(e),t.map[e.id]=e}function FC(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const o=fd.exec(i),s=fd.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Xg(n,u===void 0?new NC(a,t,e):new UC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new OC(a),Xg(n,f)),n=f}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);FC(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function jg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kC=37297;let BC=0;function zC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const $g=new We;function VC(t){tt._getMatrix($g,tt.workingColorSpace,t);const e=`mat3( ${$g.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case pu:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+zC(t.getShaderSource(e),s)}else return r}function HC(t,e){const n=VC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GC(t,e){let n;switch(e){case SE:n="Linear";break;case ME:n="Reinhard";break;case EE:n="Cineon";break;case wE:n="ACESFilmic";break;case bE:n="AgX";break;case CE:n="Neutral";break;case TE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new F;function WC(){tt.getLuminanceCoefficients(ml);const t=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function jC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $C(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Is(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YC=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(YC,KC)}const qC=new Map;function KC(t,e){let n=je[e];if(n===void 0){const i=qC.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const ZC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(t){return t.replace(ZC,QC)}function QC(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Qg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===j0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jo:case es:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function nA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $0:e="ENVMAP_BLENDING_MULTIPLY";break;case xE:e="ENVMAP_BLENDING_MIX";break;case yE:e="ENVMAP_BLENDING_ADD";break}return e}function iA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=JC(n),u=eA(n),d=tA(n),f=nA(n),h=iA(n),p=XC(n),g=jC(o),_=r.createProgram();let m,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Is).join(`
`),c.length>0&&(c+=`
`)):(m=[Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),c=[Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?je.tonemapping_pars_fragment:"",n.toneMapping!==pr?GC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,HC("linearToOutputTexel",n.outputColorSpace),WC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),s=th(s),s=qg(s,n),s=Kg(s,n),a=th(a),a=qg(a,n),a=Kg(a,n),s=Zg(s),a=Zg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const x=v+m+s,y=v+c+a,C=jg(r,r.VERTEX_SHADER,x),b=jg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,b),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(b).trim();let Y=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,b);else{const Q=Yg(r,C,"vertex"),L=Yg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Q+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||K==="")&&(G=!1);G&&(P.diagnostics={runnable:Y,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:K,prefix:c}})}r.deleteShader(C),r.deleteShader(b),A=new Bl(r,_),T=$C(r,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,kC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let oA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aA(e),n.set(e,i)),i}}class aA{constructor(e){this.id=oA++,this.code=e,this.usedTimes=0}}function lA(t,e,n,i,r,o,s){const a=new pp,l=new sA,u=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,H,B){const K=H.fog,Y=B.geometry,G=T.isMeshStandardMaterial?H.environment:null,Q=(T.isMeshStandardMaterial?n:e).get(T.envMap||G),L=Q&&Q.mapping===Gu?Q.image.height:null,X=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=Z!==void 0?Z.length:0;let ce=0;Y.morphAttributes.position!==void 0&&(ce=1),Y.morphAttributes.normal!==void 0&&(ce=2),Y.morphAttributes.color!==void 0&&(ce=3);let Ue,I,j,J;if(X){const at=ci[X];Ue=at.vertexShader,I=at.fragmentShader}else Ue=T.vertexShader,I=T.fragmentShader,l.update(T),j=l.getVertexShaderID(T),J=l.getFragmentShaderID(T);const $=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),_e=B.isInstancedMesh===!0,ae=B.isBatchedMesh===!0,Oe=!!T.map,Te=!!T.matcap,Pe=!!Q,D=!!T.aoMap,kt=!!T.lightMap,Ve=!!T.bumpMap,Ye=!!T.normalMap,be=!!T.displacementMap,ht=!!T.emissiveMap,Re=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,k=T.clearcoat>0,te=T.dispersion>0,ie=T.iridescence>0,ee=T.sheen>0,Ce=T.transmission>0,pe=M&&!!T.anisotropyMap,Se=k&&!!T.clearcoatMap,Ze=k&&!!T.clearcoatNormalMap,le=k&&!!T.clearcoatRoughnessMap,Me=ie&&!!T.iridescenceMap,Fe=ie&&!!T.iridescenceThicknessMap,ke=ee&&!!T.sheenColorMap,Ee=ee&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Xe=!!T.specularColorMap,pt=!!T.specularIntensityMap,N=Ce&&!!T.transmissionMap,fe=Ce&&!!T.thicknessMap,W=!!T.gradientMap,ne=!!T.alphaMap,ve=T.alphaTest>0,me=!!T.alphaHash,Ge=!!T.extensions;let wt=pr;T.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(wt=t.toneMapping);const Yt={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:Ue,fragmentShader:I,defines:T.defines,customVertexShaderID:j,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ae,batchingColor:ae&&B._colorsTexture!==null,instancing:_e,instancingColor:_e&&B.instanceColor!==null,instancingMorph:_e&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:is,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:Te,envMap:Pe,envMapMode:Pe&&Q.mapping,envMapCubeUVHeight:L,aoMap:D,lightMap:kt,bumpMap:Ve,normalMap:Ye,displacementMap:h&&be,emissiveMap:ht,normalMapObjectSpace:Ye&&T.normalMapType===LE,normalMapTangentSpace:Ye&&T.normalMapType===DE,metalnessMap:Re,roughnessMap:R,anisotropy:M,anisotropyMap:pe,clearcoat:k,clearcoatMap:Se,clearcoatNormalMap:Ze,clearcoatRoughnessMap:le,dispersion:te,iridescence:ie,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:ee,sheenColorMap:ke,sheenRoughnessMap:Ee,specularMap:Ke,specularColorMap:Xe,specularIntensityMap:pt,transmission:Ce,transmissionMap:N,thicknessMap:fe,gradientMap:W,opaque:T.transparent===!1&&T.blending===Vo&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:me,combine:T.combine,mapUv:Oe&&_(T.map.channel),aoMapUv:D&&_(T.aoMap.channel),lightMapUv:kt&&_(T.lightMap.channel),bumpMapUv:Ve&&_(T.bumpMap.channel),normalMapUv:Ye&&_(T.normalMap.channel),displacementMapUv:be&&_(T.displacementMap.channel),emissiveMapUv:ht&&_(T.emissiveMap.channel),metalnessMapUv:Re&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:pe&&_(T.anisotropyMap.channel),clearcoatMapUv:Se&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(T.sheenRoughnessMap.channel),specularMapUv:Ke&&_(T.specularMap.channel),specularColorMapUv:Xe&&_(T.specularColorMap.channel),specularIntensityMapUv:pt&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:fe&&_(T.thicknessMap.channel),alphaMapUv:ne&&_(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ye||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Oe||ne),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===ct,decodeVideoTextureEmissive:ht&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=u.has(1),Yt.vertexUv2s=u.has(2),Yt.vertexUv3s=u.has(3),u.clear(),Yt}function c(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(S,T),x(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=g[T.type];let P;if(S){const H=ci[S];P=T1.clone(H.uniforms)}else P=T.uniforms;return P}function C(T,S){let P;for(let H=0,B=d.length;H<B;H++){const K=d[H];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new rA(t,S,T,o),d.push(P)),P}function b(T){if(--T.usedTimes===0){const S=d.indexOf(T);d[S]=d[d.length-1],d.pop(),T.destroy()}}function w(T){l.remove(T)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:d,dispose:A}}function uA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function cA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ev(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,p,g,_,m){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=g,c.renderOrder=f.renderOrder,c.z=_,c.group=m),e++,c}function a(f,h,p,g,_,m){const c=s(f,h,p,g,_,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(f,h,p,g,_,m){const c=s(f,h,p,g,_,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||cA),i.length>1&&i.sort(h||Jg),r.length>1&&r.sort(h||Jg)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:u}}function dA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new ev,t.set(i,[s])):r>=o.length?(s=new ev,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new rt};break;case"SpotLight":n={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function hA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pA=0;function mA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gA(t){const e=new fA,n=hA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,o=new _t,s=new _t;function a(u){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,c=0,v=0,x=0,y=0,C=0,b=0,w=0;u.sort(mA);for(let T=0,S=u.length;T<S;T++){const P=u[T],H=P.color,B=P.intensity,K=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=H.r*B,f+=H.g*B,h+=H.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],B);w++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(B),G.distance=K,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[_]=G;const Q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=Q.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=Y,y++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(H).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[c]=G,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==c||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==y||A.numSpotMaps!==C||A.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=c,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=c,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=y,A.numSpotMaps=C,A.numLightProbes=w,i.version=pA++)}function l(u,d){let f=0,h=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let c=0,v=u.length;c<v;c++){const x=u[c];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function tv(t){const e=new gA(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function vA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new tv(t),e.set(r,[a])):o>=s.length?(a=new tv(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(t,e,n){let i=new mp;const r=new He,o=new He,s=new ft,a=new O1({depthPacking:PE}),l=new F1,u={},d=n.maxTextureSize,f={[vr]:xn,[xn]:vr,[ei]:ei},h=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_A,fragmentShader:xA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new _i;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let c=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(hr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=c!==Ti&&this.type===Ti,K=c===Ti&&this.type!==Ti;for(let Y=0,G=b.length;Y<G;Y++){const Q=b[Y],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const X=L.getFrameExtents();if(r.multiply(X),o.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/X.x),r.x=o.x*X.x,L.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/X.y),r.y=o.y*X.y,L.mapSize.y=o.y)),L.map===null||B===!0||K===!0){const ue=this.type!==Ti?{minFilter:oi,magFilter:oi}:{};L.map!==null&&L.map.dispose(),L.map=new qr(r.x,r.y,ue),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let ue=0;ue<Z;ue++){const ce=L.getViewport(ue);s.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),H.viewport(s),L.updateMatrices(Q,ue),i=L.getFrustum(),y(w,A,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===Ti&&v(L,A),L.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,P)};function v(b,w){const A=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,A,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,A,p,_,null)}function x(b,w,A,T){let S=null;const P=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=A.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,B=w.uuid;let K=u[H];K===void 0&&(K={},u[H]=K);let Y=K[B];Y===void 0&&(Y=S.clone(),K[B]=Y,w.addEventListener("dispose",C)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Ti?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=A}return S}function y(b,w,A,T,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Ti)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const B=e.update(b),K=b.material;if(Array.isArray(K)){const Y=B.groups;for(let G=0,Q=Y.length;G<Q;G++){const L=Y[G],X=K[L.materialIndex];if(X&&X.visible){const Z=x(b,X,T,S);b.onBeforeShadow(t,b,w,A,B,Z,L),t.renderBufferDirect(A,null,B,Z,b,L),b.onAfterShadow(t,b,w,A,B,Z,L)}}}else if(K.visible){const Y=x(b,K,T,S);b.onBeforeShadow(t,b,w,A,B,Y,null),t.renderBufferDirect(A,null,B,Y,b,null),b.onAfterShadow(t,b,w,A,B,Y,null)}}const H=b.children;for(let B=0,K=H.length;B<K;B++)y(H[B],w,A,T,S)}function C(b){b.target.removeEventListener("dispose",C);for(const A in u){const T=u[A],S=b.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const SA={[vf]:_f,[xf]:Mf,[yf]:Ef,[Qo]:Sf,[_f]:vf,[Mf]:xf,[Ef]:yf,[Sf]:Qo};function MA(t,e){function n(){let N=!1;const fe=new ft;let W=null;const ne=new ft(0,0,0,0);return{setMask:function(ve){W!==ve&&!N&&(t.colorMask(ve,ve,ve,ve),W=ve)},setLocked:function(ve){N=ve},setClear:function(ve,me,Ge,wt,Yt){Yt===!0&&(ve*=wt,me*=wt,Ge*=wt),fe.set(ve,me,Ge,wt),ne.equals(fe)===!1&&(t.clearColor(ve,me,Ge,wt),ne.copy(fe))},reset:function(){N=!1,W=null,ne.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,W=null,ne=null,ve=null;return{setReversed:function(me){if(fe!==me){const Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const wt=ve;ve=null,this.setClear(wt)}fe=me},getReversed:function(){return fe},setTest:function(me){me?$(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(me){W!==me&&!N&&(t.depthMask(me),W=me)},setFunc:function(me){if(fe&&(me=SA[me]),ne!==me){switch(me){case vf:t.depthFunc(t.NEVER);break;case _f:t.depthFunc(t.ALWAYS);break;case xf:t.depthFunc(t.LESS);break;case Qo:t.depthFunc(t.LEQUAL);break;case yf:t.depthFunc(t.EQUAL);break;case Sf:t.depthFunc(t.GEQUAL);break;case Mf:t.depthFunc(t.GREATER);break;case Ef:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=me}},setLocked:function(me){N=me},setClear:function(me){ve!==me&&(fe&&(me=1-me),t.clearDepth(me),ve=me)},reset:function(){N=!1,W=null,ne=null,ve=null,fe=!1}}}function r(){let N=!1,fe=null,W=null,ne=null,ve=null,me=null,Ge=null,wt=null,Yt=null;return{setTest:function(at){N||(at?$(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(at){fe!==at&&!N&&(t.stencilMask(at),fe=at)},setFunc:function(at,Xn,xi){(W!==at||ne!==Xn||ve!==xi)&&(t.stencilFunc(at,Xn,xi),W=at,ne=Xn,ve=xi)},setOp:function(at,Xn,xi){(me!==at||Ge!==Xn||wt!==xi)&&(t.stencilOp(at,Xn,xi),me=at,Ge=Xn,wt=xi)},setLocked:function(at){N=at},setClear:function(at){Yt!==at&&(t.clearStencil(at),Yt=at)},reset:function(){N=!1,fe=null,W=null,ne=null,ve=null,me=null,Ge=null,wt=null,Yt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,c=null,v=null,x=null,y=null,C=null,b=null,w=new rt(0,0,0),A=0,T=!1,S=null,P=null,H=null,B=null,K=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=Q>=1):L.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=Q>=2);let X=null,Z={};const ue=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Ue=new ft().fromArray(ue),I=new ft().fromArray(ce);function j(N,fe,W,ne){const ve=new Uint8Array(4),me=t.createTexture();t.bindTexture(N,me),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<W;Ge++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(fe+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return me}const J={};J[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),$(t.DEPTH_TEST),s.setFunc(Qo),Ve(!1),Ye(Zm),$(t.CULL_FACE),D(hr);function $(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function se(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function _e(N,fe){return f[N]!==fe?(t.bindFramebuffer(N,fe),f[N]=fe,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ae(N,fe){let W=p,ne=!1;if(N){W=h.get(fe),W===void 0&&(W=[],h.set(fe,W));const ve=N.textures;if(W.length!==ve.length||W[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ge=ve.length;me<Ge;me++)W[me]=t.COLOR_ATTACHMENT0+me;W.length=ve.length,ne=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ne=!0);ne&&t.drawBuffers(W)}function Oe(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const Te={[Nr]:t.FUNC_ADD,[nE]:t.FUNC_SUBTRACT,[iE]:t.FUNC_REVERSE_SUBTRACT};Te[rE]=t.MIN,Te[oE]=t.MAX;const Pe={[sE]:t.ZERO,[aE]:t.ONE,[lE]:t.SRC_COLOR,[mf]:t.SRC_ALPHA,[pE]:t.SRC_ALPHA_SATURATE,[fE]:t.DST_COLOR,[cE]:t.DST_ALPHA,[uE]:t.ONE_MINUS_SRC_COLOR,[gf]:t.ONE_MINUS_SRC_ALPHA,[hE]:t.ONE_MINUS_DST_COLOR,[dE]:t.ONE_MINUS_DST_ALPHA,[mE]:t.CONSTANT_COLOR,[gE]:t.ONE_MINUS_CONSTANT_COLOR,[vE]:t.CONSTANT_ALPHA,[_E]:t.ONE_MINUS_CONSTANT_ALPHA};function D(N,fe,W,ne,ve,me,Ge,wt,Yt,at){if(N===hr){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&($(t.BLEND),_=!0),N!==tE){if(N!==m||at!==T){if((c!==Nr||y!==Nr)&&(t.blendEquation(t.FUNC_ADD),c=Nr,y=Nr),at)switch(N){case Vo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qm:t.blendFunc(t.ONE,t.ONE);break;case Jm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Vo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,x=null,C=null,b=null,w.set(0,0,0),A=0,m=N,T=at}return}ve=ve||fe,me=me||W,Ge=Ge||ne,(fe!==c||ve!==y)&&(t.blendEquationSeparate(Te[fe],Te[ve]),c=fe,y=ve),(W!==v||ne!==x||me!==C||Ge!==b)&&(t.blendFuncSeparate(Pe[W],Pe[ne],Pe[me],Pe[Ge]),v=W,x=ne,C=me,b=Ge),(wt.equals(w)===!1||Yt!==A)&&(t.blendColor(wt.r,wt.g,wt.b,Yt),w.copy(wt),A=Yt),m=N,T=!1}function kt(N,fe){N.side===ei?se(t.CULL_FACE):$(t.CULL_FACE);let W=N.side===xn;fe&&(W=!W),Ve(W),N.blending===Vo&&N.transparent===!1?D(hr):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),o.setMask(N.colorWrite);const ne=N.stencilWrite;a.setTest(ne),ne&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){S!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),S=N)}function Ye(N){N!==QM?($(t.CULL_FACE),N!==P&&(N===Zm?t.cullFace(t.BACK):N===JM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),P=N}function be(N){N!==H&&(G&&t.lineWidth(N),H=N)}function ht(N,fe,W){N?($(t.POLYGON_OFFSET_FILL),(B!==fe||K!==W)&&(t.polygonOffset(fe,W),B=fe,K=W)):se(t.POLYGON_OFFSET_FILL)}function Re(N){N?$(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+Y-1),X!==N&&(t.activeTexture(N),X=N)}function M(N,fe,W){W===void 0&&(X===null?W=t.TEXTURE0+Y-1:W=X);let ne=Z[W];ne===void 0&&(ne={type:void 0,texture:void 0},Z[W]=ne),(ne.type!==N||ne.texture!==fe)&&(X!==W&&(t.activeTexture(W),X=W),t.bindTexture(N,fe||J[N]),ne.type=N,ne.texture=fe)}function k(){const N=Z[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){Ue.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ue.copy(N))}function Ee(N){I.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),I.copy(N))}function Ke(N,fe){let W=u.get(fe);W===void 0&&(W=new WeakMap,u.set(fe,W));let ne=W.get(N);ne===void 0&&(ne=t.getUniformBlockIndex(fe,N.name),W.set(N,ne))}function Xe(N,fe){const ne=u.get(fe).get(N);l.get(fe)!==ne&&(t.uniformBlockBinding(fe,ne,N.__bindingPointIndex),l.set(fe,ne))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,Z={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,c=null,v=null,x=null,y=null,C=null,b=null,w=new rt(0,0,0),A=0,T=!1,S=null,P=null,H=null,B=null,K=null,Ue.set(0,0,t.canvas.width,t.canvas.height),I.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:$,disable:se,bindFramebuffer:_e,drawBuffers:ae,useProgram:Oe,setBlending:D,setMaterial:kt,setFlipSided:Ve,setCullFace:Ye,setLineWidth:be,setPolygonOffset:ht,setScissorTest:Re,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:Me,texImage3D:Fe,updateUBOMapping:Ke,uniformBlockBinding:Xe,texStorage2D:Ze,texStorage3D:le,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:ke,viewport:Ee,reset:pt}}function EA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):fa("canvas")}function _(R,M,k){let te=1;const ie=Re(R);if((ie.width>k||ie.height>k)&&(te=k/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(te*ie.width),Ce=Math.floor(te*ie.height);f===void 0&&(f=g(ee,Ce));const pe=M?g(ee,Ce):f;return pe.width=ee,pe.height=Ce,pe.getContext("2d").drawImage(R,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Ce+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function c(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,k,te,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=M;if(M===t.RED&&(k===t.FLOAT&&(ee=t.R32F),k===t.HALF_FLOAT&&(ee=t.R16F),k===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.R8UI),k===t.UNSIGNED_SHORT&&(ee=t.R16UI),k===t.UNSIGNED_INT&&(ee=t.R32UI),k===t.BYTE&&(ee=t.R8I),k===t.SHORT&&(ee=t.R16I),k===t.INT&&(ee=t.R32I)),M===t.RG&&(k===t.FLOAT&&(ee=t.RG32F),k===t.HALF_FLOAT&&(ee=t.RG16F),k===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.RG8UI),k===t.UNSIGNED_SHORT&&(ee=t.RG16UI),k===t.UNSIGNED_INT&&(ee=t.RG32UI),k===t.BYTE&&(ee=t.RG8I),k===t.SHORT&&(ee=t.RG16I),k===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),k===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),k===t.UNSIGNED_INT&&(ee=t.RGB32UI),k===t.BYTE&&(ee=t.RGB8I),k===t.SHORT&&(ee=t.RGB16I),k===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),k===t.UNSIGNED_INT&&(ee=t.RGBA32UI),k===t.BYTE&&(ee=t.RGBA8I),k===t.SHORT&&(ee=t.RGBA16I),k===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Ce=ie?pu:tt.getTransfer(te);k===t.FLOAT&&(ee=t.RGBA32F),k===t.HALF_FLOAT&&(ee=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ee=Ce===ct?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,M){let k;return R?M===null||M===Yr||M===ts?k=t.DEPTH24_STENCIL8:M===Pi?k=t.DEPTH32F_STENCIL8:M===ca&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yr||M===ts?k=t.DEPTH_COMPONENT24:M===Pi?k=t.DEPTH_COMPONENT32F:M===ca&&(k=t.DEPTH_COMPONENT16),k}function C(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==oi&&R.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&d.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),S(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,te=h.get(k);if(te){const ie=te[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(R),Object.keys(te).length===0&&h.delete(k)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,te=h.get(k);delete te[M.__cacheKey],s.memory.textures--}function S(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ie=0;ie<M.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let te=0,ie=k.length;te<ie;te++){const ee=i.get(k[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(k[te])}i.remove(R)}let P=0;function H(){P=0}function B(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function K(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const k=i.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function G(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){I(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function Q(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){I(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function L(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const X={[bf]:t.REPEAT,[Br]:t.CLAMP_TO_EDGE,[Cf]:t.MIRRORED_REPEAT},Z={[oi]:t.NEAREST,[AE]:t.NEAREST_MIPMAP_NEAREST,[ja]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},ue={[IE]:t.NEVER,[BE]:t.ALWAYS,[NE]:t.LESS,[ox]:t.LEQUAL,[UE]:t.EQUAL,[kE]:t.GEQUAL,[OE]:t.GREATER,[FE]:t.NOTEQUAL};function ce(R,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===Oc||M.magFilter===ja||M.magFilter===zr||M.minFilter===zn||M.minFilter===Oc||M.minFilter===ja||M.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===oi||M.minFilter!==ja&&M.minFilter!==zr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const te=M.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const ee=K(M);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,k=!0),ie[ee].usedTimes++;const Ce=ie[R.__cacheKey];Ce!==void 0&&(ie[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(M)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return k}function I(R,M,k){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const ie=Ue(R,M),ee=M.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+k);const Ce=i.get(ee);if(ee.version!==Ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+k);const pe=tt.getPrimaries(tt.workingColorSpace),Se=M.colorSpace===nr?null:tt.getPrimaries(M.colorSpace),Ze=M.colorSpace===nr||pe===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let le=_(M.image,!1,r.maxTextureSize);le=ht(M,le);const Me=o.convert(M.format,M.colorSpace),Fe=o.convert(M.type);let ke=x(M.internalFormat,Me,Fe,M.colorSpace,M.isVideoTexture);ce(te,M);let Ee;const Ke=M.mipmaps,Xe=M.isVideoTexture!==!0,pt=Ce.__version===void 0||ie===!0,N=ee.dataReady,fe=C(M,le);if(M.isDepthTexture)ke=y(M.format===ns,M.type),pt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,ke,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,ke,le.width,le.height,0,Me,Fe,null));else if(M.isDataTexture)if(Ke.length>0){Xe&&pt&&n.texStorage2D(t.TEXTURE_2D,fe,ke,Ke[0].width,Ke[0].height);for(let W=0,ne=Ke.length;W<ne;W++)Ee=Ke[W],Xe?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ee.width,Ee.height,Me,Fe,Ee.data):n.texImage2D(t.TEXTURE_2D,W,ke,Ee.width,Ee.height,0,Me,Fe,Ee.data);M.generateMipmaps=!1}else Xe?(pt&&n.texStorage2D(t.TEXTURE_2D,fe,ke,le.width,le.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Me,Fe,le.data)):n.texImage2D(t.TEXTURE_2D,0,ke,le.width,le.height,0,Me,Fe,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ke,Ke[0].width,Ke[0].height,le.depth);for(let W=0,ne=Ke.length;W<ne;W++)if(Ee=Ke[W],M.format!==ni)if(Me!==null)if(Xe){if(N)if(M.layerUpdates.size>0){const ve=Dg(Ee.width,Ee.height,M.format,M.type);for(const me of M.layerUpdates){const Ge=Ee.data.subarray(me*ve/Ee.data.BYTES_PER_ELEMENT,(me+1)*ve/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,me,Ee.width,Ee.height,1,Me,Ge)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Ee.width,Ee.height,le.depth,Me,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,ke,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Ee.width,Ee.height,le.depth,Me,Fe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,ke,Ee.width,Ee.height,le.depth,0,Me,Fe,Ee.data)}else{Xe&&pt&&n.texStorage2D(t.TEXTURE_2D,fe,ke,Ke[0].width,Ke[0].height);for(let W=0,ne=Ke.length;W<ne;W++)Ee=Ke[W],M.format!==ni?Me!==null?Xe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,W,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ee.width,Ee.height,Me,Fe,Ee.data):n.texImage2D(t.TEXTURE_2D,W,ke,Ee.width,Ee.height,0,Me,Fe,Ee.data)}else if(M.isDataArrayTexture)if(Xe){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ke,le.width,le.height,le.depth),N)if(M.layerUpdates.size>0){const W=Dg(le.width,le.height,M.format,M.type);for(const ne of M.layerUpdates){const ve=le.data.subarray(ne*W/le.data.BYTES_PER_ELEMENT,(ne+1)*W/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,Me,Fe,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,Fe,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,le.width,le.height,le.depth,0,Me,Fe,le.data);else if(M.isData3DTexture)Xe?(pt&&n.texStorage3D(t.TEXTURE_3D,fe,ke,le.width,le.height,le.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,Fe,le.data)):n.texImage3D(t.TEXTURE_3D,0,ke,le.width,le.height,le.depth,0,Me,Fe,le.data);else if(M.isFramebufferTexture){if(pt)if(Xe)n.texStorage2D(t.TEXTURE_2D,fe,ke,le.width,le.height);else{let W=le.width,ne=le.height;for(let ve=0;ve<fe;ve++)n.texImage2D(t.TEXTURE_2D,ve,ke,W,ne,0,Me,Fe,null),W>>=1,ne>>=1}}else if(Ke.length>0){if(Xe&&pt){const W=Re(Ke[0]);n.texStorage2D(t.TEXTURE_2D,fe,ke,W.width,W.height)}for(let W=0,ne=Ke.length;W<ne;W++)Ee=Ke[W],Xe?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Me,Fe,Ee):n.texImage2D(t.TEXTURE_2D,W,ke,Me,Fe,Ee);M.generateMipmaps=!1}else if(Xe){if(pt){const W=Re(le);n.texStorage2D(t.TEXTURE_2D,fe,ke,W.width,W.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Fe,le)}else n.texImage2D(t.TEXTURE_2D,0,ke,Me,Fe,le);m(M)&&c(te),Ce.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,k){if(M.image.length!==6)return;const te=Ue(R,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const ee=i.get(ie);if(ie.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const Ce=tt.getPrimaries(tt.workingColorSpace),pe=M.colorSpace===nr?null:tt.getPrimaries(M.colorSpace),Se=M.colorSpace===nr||Ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let ne=0;ne<6;ne++)!Ze&&!le?Me[ne]=_(M.image[ne],!0,r.maxCubemapSize):Me[ne]=le?M.image[ne].image:M.image[ne],Me[ne]=ht(M,Me[ne]);const Fe=Me[0],ke=o.convert(M.format,M.colorSpace),Ee=o.convert(M.type),Ke=x(M.internalFormat,ke,Ee,M.colorSpace),Xe=M.isVideoTexture!==!0,pt=ee.__version===void 0||te===!0,N=ie.dataReady;let fe=C(M,Fe);ce(t.TEXTURE_CUBE_MAP,M);let W;if(Ze){Xe&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ke,Fe.width,Fe.height);for(let ne=0;ne<6;ne++){W=Me[ne].mipmaps;for(let ve=0;ve<W.length;ve++){const me=W[ve];M.format!==ni?ke!==null?Xe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,me.width,me.height,ke,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Ke,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,me.width,me.height,ke,Ee,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Ke,me.width,me.height,0,ke,Ee,me.data)}}}else{if(W=M.mipmaps,Xe&&pt){W.length>0&&fe++;const ne=Re(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){Xe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Me[ne].width,Me[ne].height,ke,Ee,Me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,Me[ne].width,Me[ne].height,0,ke,Ee,Me[ne].data);for(let ve=0;ve<W.length;ve++){const Ge=W[ve].image[ne].image;Xe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Ge.width,Ge.height,ke,Ee,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Ke,Ge.width,Ge.height,0,ke,Ee,Ge.data)}}else{Xe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ke,Ee,Me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,ke,Ee,Me[ne]);for(let ve=0;ve<W.length;ve++){const me=W[ve];Xe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,ke,Ee,me.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Ke,ke,Ee,me.image[ne])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,k,te,ie,ee){const Ce=o.convert(k.format,k.colorSpace),pe=o.convert(k.type),Se=x(k.internalFormat,Ce,pe,k.colorSpace),Ze=i.get(M),le=i.get(k);if(le.__renderTarget=M,!Ze.__hasExternalTextures){const Me=Math.max(1,M.width>>ee),Fe=Math.max(1,M.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,Se,Me,Fe,M.depth,0,Ce,pe,null):n.texImage2D(ie,ee,Se,Me,Fe,0,Ce,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ie,le.__webglTexture,0,Ve(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ie,le.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const te=M.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ee=y(M.stencilBuffer,ie),Ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=Ve(M);Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ee,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,R)}else{const te=M.textures;for(let ie=0;ie<te.length;ie++){const ee=te[ie],Ce=o.convert(ee.format,ee.colorSpace),pe=o.convert(ee.type),Se=x(ee.internalFormat,Ce,pe,ee.colorSpace),Ze=Ve(M);k&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,Se,M.width,M.height):Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ie=te.__webglTexture,ee=Ve(M);if(M.depthTexture.format===Ho)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===ns)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function _e(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=te}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");se(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=t.createRenderbuffer(),$(M.__webglDepthbuffer[te],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),$(M.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,M,k){const te=i.get(R);M!==void 0&&J(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&_e(R)}function Oe(R){const M=R.texture,k=i.get(R),te=i.get(M);R.addEventListener("dispose",w);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,s.memory.textures++),ee){k.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[pe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)k.__webglFramebuffer[pe][Se]=t.createFramebuffer()}else k.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)k.__webglFramebuffer[pe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let pe=0,Se=ie.length;pe<Se;pe++){const Ze=i.get(ie[pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Ye(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const Se=ie[pe];k.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);const Ze=o.convert(Se.format,Se.colorSpace),le=o.convert(Se.type),Me=x(Se.internalFormat,Ze,le,Se.colorSpace,R.isXRRenderTarget===!0),Fe=Ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),$(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ce(t.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)J(k.__webglFramebuffer[pe][Se],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else J(k.__webglFramebuffer[pe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let pe=0,Se=ie.length;pe<Se;pe++){const Ze=ie[pe],le=i.get(Ze);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ce(t.TEXTURE_2D,Ze),J(k.__webglFramebuffer,R,Ze,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ze)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,te.__webglTexture),ce(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)J(k.__webglFramebuffer[Se],R,M,t.COLOR_ATTACHMENT0,pe,Se);else J(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,pe,0);m(M)&&c(pe),n.unbindTexture()}R.depthBuffer&&_e(R)}function Te(R){const M=R.textures;for(let k=0,te=M.length;k<te;k++){const ie=M[k];if(m(ie)){const ee=v(R),Ce=i.get(ie).__webglTexture;n.bindTexture(ee,Ce),c(ee),n.unbindTexture()}}}const Pe=[],D=[];function kt(R){if(R.samples>0){if(Ye(R)===!1){const M=R.textures,k=R.width,te=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(R),pe=M.length>1;if(pe)for(let Se=0;Se<M.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const Ze=i.get(M[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,k,te,0,0,k,te,ie,t.NEAREST),l===!0&&(Pe.length=0,D.length=0,Pe.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push(ee),D.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<M.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const Ze=i.get(M[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ve(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(R){const M=s.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ht(R,M){const k=R.colorSpace,te=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==is&&k!==nr&&(tt.getTransfer(k)===ct?(te!==ni||ie!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=L,this.rebindTextures=ae,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ye}function wA(t,e){function n(i,r=nr){let o;const s=tt.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===ap)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===q0)return t.BYTE;if(i===K0)return t.SHORT;if(i===ca)return t.UNSIGNED_SHORT;if(i===sp)return t.INT;if(i===Yr)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Sa)return t.HALF_FLOAT;if(i===Q0)return t.ALPHA;if(i===J0)return t.RGB;if(i===ni)return t.RGBA;if(i===ex)return t.LUMINANCE;if(i===tx)return t.LUMINANCE_ALPHA;if(i===Ho)return t.DEPTH_COMPONENT;if(i===ns)return t.DEPTH_STENCIL;if(i===nx)return t.RED;if(i===up)return t.RED_INTEGER;if(i===ix)return t.RG;if(i===cp)return t.RG_INTEGER;if(i===dp)return t.RGBA_INTEGER;if(i===Nl||i===Ul||i===Ol||i===Fl)if(s===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Nl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Nl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===Rf||i===Pf||i===Df)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Af)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lf||i===If||i===Nf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Lf||i===If)return s===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Nf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uf||i===Of||i===Ff||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===Xf||i===jf||i===$f||i===Yf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Uf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Of)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ff)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$f)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===qf||i===Kf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===kl)return s===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rx||i===Zf||i===Qf||i===Jf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===kl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Zf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _r({vertexShader:TA,fragmentShader:bA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends eo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,g=null;const _=new CA,m=n.getContextAttributes();let c=null,v=null;const x=[],y=[],C=new He;let b=null;const w=new Tn;w.viewport=new ft;const A=new Tn;A.viewport=new ft;const T=[w,A],S=new $1;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let j=x[I];return j===void 0&&(j=new nd,x[I]=j),j.getTargetRaySpace()},this.getControllerGrip=function(I){let j=x[I];return j===void 0&&(j=new nd,x[I]=j),j.getGripSpace()},this.getHand=function(I){let j=x[I];return j===void 0&&(j=new nd,x[I]=j),j.getHandSpace()};function B(I){const j=y.indexOf(I.inputSource);if(j===-1)return;const J=x[j];J!==void 0&&(J.update(I.inputSource,I.frame,u||s),J.dispatchEvent({type:I.type,data:I.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Y);for(let I=0;I<x.length;I++){const j=y[I];j!==null&&(y[I]=null,x[I].disconnect(j))}P=null,H=null,_.reset(),e.setRenderTarget(c),p=null,h=null,f=null,r=null,v=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,$=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?ns:Ho,$=m.stencil?ts:Yr);const _e={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new qr(h.textureWidth,h.textureHeight,{format:ni,type:Bi,depthTexture:new mx(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new qr(p.framebufferWidth,p.framebufferHeight,{format:ni,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(I){for(let j=0;j<I.removed.length;j++){const J=I.removed[j],$=y.indexOf(J);$>=0&&(y[$]=null,x[$].disconnect(J))}for(let j=0;j<I.added.length;j++){const J=I.added[j];let $=y.indexOf(J);if($===-1){for(let _e=0;_e<x.length;_e++)if(_e>=y.length){y.push(J),$=_e;break}else if(y[_e]===null){y[_e]=J,$=_e;break}if($===-1)break}const se=x[$];se&&se.connect(J)}}const G=new F,Q=new F;function L(I,j,J){G.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(J.matrixWorld);const $=G.distanceTo(Q),se=j.projectionMatrix.elements,_e=J.projectionMatrix.elements,ae=se[14]/(se[10]-1),Oe=se[14]/(se[10]+1),Te=(se[9]+1)/se[5],Pe=(se[9]-1)/se[5],D=(se[8]-1)/se[0],kt=(_e[8]+1)/_e[0],Ve=ae*D,Ye=ae*kt,be=$/(-D+kt),ht=be*-D;if(j.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ht),I.translateZ(be),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),se[10]===-1)I.projectionMatrix.copy(j.projectionMatrix),I.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Re=ae+be,R=Oe+be,M=Ve-ht,k=Ye+($-ht),te=Te*Oe/R*Re,ie=Pe*Oe/R*Re;I.projectionMatrix.makePerspective(M,k,te,ie,Re,R),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function X(I,j){j===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(j.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;let j=I.near,J=I.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(J=_.depthFar)),S.near=A.near=w.near=j,S.far=A.far=w.far=J,(P!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far),w.layers.mask=I.layers.mask|2,A.layers.mask=I.layers.mask|4,S.layers.mask=w.layers.mask|A.layers.mask;const $=I.parent,se=S.cameras;X(S,$);for(let _e=0;_e<se.length;_e++)X(se[_e],$);se.length===2?L(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),Z(I,S,$)};function Z(I,j,J){J===null?I.matrix.copy(j.matrixWorld):(I.matrix.copy(J.matrixWorld),I.matrix.invert(),I.matrix.multiply(j.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(j.projectionMatrix),I.projectionMatrixInverse.copy(j.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=da*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ue=null;function ce(I,j){if(d=j.getViewerPose(u||s),g=j,d!==null){const J=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let $=!1;J.length!==S.cameras.length&&(S.cameras.length=0,$=!0);for(let ae=0;ae<J.length;ae++){const Oe=J[ae];let Te=null;if(p!==null)Te=p.getViewport(Oe);else{const D=f.getViewSubImage(h,Oe);Te=D.viewport,ae===0&&(e.setRenderTargetTextures(v,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Pe=T[ae];Pe===void 0&&(Pe=new Tn,Pe.layers.enable(ae),Pe.viewport=new ft,T[ae]=Pe),Pe.matrix.fromArray(Oe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Oe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Te.x,Te.y,Te.width,Te.height),ae===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),$===!0&&S.cameras.push(Pe)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(J[0]);ae&&ae.isValid&&ae.texture&&_.init(e,ae,r.renderState)}}for(let J=0;J<x.length;J++){const $=y[J],se=x[J];$!==null&&se!==void 0&&se.update($,j,u||s)}ue&&ue(I,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ue=new vx;Ue.setAnimationLoop(ce),this.setAnimationLoop=function(I){ue=I},this.dispose=function(){}}}const Rr=new zi,RA=new _t;function PA(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,dx(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,x,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),f(m,c)):c.isMeshPhongMaterial?(o(m,c),d(m,c)):c.isMeshStandardMaterial?(o(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,y)):c.isMeshMatcapMaterial?(o(m,c),g(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),_(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,x):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===xn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===xn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Rr.copy(y),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Rr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,x){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=x*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===xn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function _(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DA(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const b=e.render.frame;o[v.id]!==b&&(h(v),o[v.id]=b)}function d(v){const x=f();v.__bindingPointIndex=x;const y=t.createBuffer(),C=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,w=y.length;b<w;b++){const A=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,S=A.length;T<S;T++){const P=A[T];if(p(P,b,T,C)===!0){const H=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Y=0;Y<B.length;Y++){const G=B[Y],Q=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+K,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,K),K+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,y,C){const b=v.value,w=x+"_"+y;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const A=C[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return C[w]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let w=0,A=x.length;w<A;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,P=T.length;S<P;S++){const H=T[S],B=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Y=B.length;K<Y;K++){const G=B[K],Q=_(G),L=y%C,X=L%Q.boundary,Z=L+X;y+=X,Z!==0&&C-Z<Q.storage&&(y+=C-Z),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Q.storage}}}const b=y%C;return b>0&&(y+=C-b),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class LA{constructor(e={}){const{canvas:n=i1(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,c=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=pr,this.toneMappingExposure=1;const y=this;let C=!1,b=0,w=0,A=null,T=-1,S=null;const P=new ft,H=new ft;let B=null;const K=new rt(0);let Y=0,G=n.width,Q=n.height,L=1,X=null,Z=null;const ue=new ft(0,0,G,Q),ce=new ft(0,0,G,Q);let Ue=!1;const I=new mp;let j=!1,J=!1;this.transmissionResolutionScale=1;const $=new _t,se=new _t,_e=new F,ae=new ft,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Pe(){return A===null?L:1}let D=i;function kt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",me,!1),D===null){const U="webgl2";if(D=kt(U,E),D===null)throw kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Ye,be,ht,Re,R,M,k,te,ie,ee,Ce,pe,Se,Ze,le,Me,Fe,ke,Ee,Ke,Xe,pt,N;function fe(){Ve=new Hb(D),Ve.init(),Xe=new wA(D,Ve),Ye=new Ub(D,Ve,e,Xe),be=new MA(D,Ve),Ye.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),ht=new Xb(D),Re=new uA,R=new EA(D,Ve,be,Re,Ye,Xe,ht),M=new Fb(y),k=new Vb(y),te=new Z1(D),pt=new Ib(D,te),ie=new Gb(D,te,ht,pt),ee=new $b(D,ie,te,ht),ke=new jb(D,Ye,R),le=new Ob(Re),Ce=new lA(y,M,k,Ve,Ye,pt,le),pe=new PA(y,Re),Se=new dA,Ze=new vA(Ve),Fe=new Lb(y,M,k,be,ee,p,l),Me=new yA(y,ee,Ye),N=new DA(D,ht,Ye,be),Ee=new Nb(D,Ve,ht),Ke=new Wb(D,Ve,ht),ht.programs=Ce.programs,y.capabilities=Ye,y.extensions=Ve,y.properties=Re,y.renderLists=Se,y.shadowMap=Me,y.state=be,y.info=ht}fe();const W=new AA(y,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(G,Q,!1))},this.getSize=function(E){return E.set(G,Q)},this.setSize=function(E,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Q=U,n.width=Math.floor(E*L),n.height=Math.floor(U*L),z===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(G*L,Q*L).floor()},this.setDrawingBufferSize=function(E,U,z){G=E,Q=U,L=z,n.width=Math.floor(E*z),n.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,U,z,V){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,U,z,V),be.viewport(P.copy(ue).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,U,z,V){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,U,z,V),be.scissor(H.copy(ce).multiplyScalar(L).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(E){be.setScissorTest(Ue=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,z=!0){let V=0;if(E){let O=!1;if(A!==null){const oe=A.texture.format;O=oe===dp||oe===cp||oe===up}if(O){const oe=A.texture.type,he=oe===Bi||oe===Yr||oe===ca||oe===ts||oe===ap||oe===lp,ye=Fe.getClearColor(),we=Fe.getClearAlpha(),Be=ye.r,ze=ye.g,De=ye.b;he?(g[0]=Be,g[1]=ze,g[2]=De,g[3]=we,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=De,_[3]=we,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",me,!1),Fe.dispose(),Se.dispose(),Ze.dispose(),Re.dispose(),M.dispose(),k.dispose(),ee.dispose(),pt.dispose(),N.dispose(),Ce.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ip),W.removeEventListener("sessionend",Np),Mr.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=ht.autoReset,U=Me.enabled,z=Me.autoUpdate,V=Me.needsUpdate,O=Me.type;fe(),ht.autoReset=E,Me.enabled=U,Me.autoUpdate=z,Me.needsUpdate=V,Me.type=O}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){const U=E.target;U.removeEventListener("dispose",Ge),wt(U)}function wt(E){Yt(E),Re.remove(E)}function Yt(E){const U=Re.get(E).programs;U!==void 0&&(U.forEach(function(z){Ce.releaseProgram(z)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,V,O,oe){U===null&&(U=Oe);const he=O.isMesh&&O.matrixWorld.determinant()<0,ye=my(E,U,z,V,O);be.setMaterial(V,he);let we=z.index,Be=1;if(V.wireframe===!0){if(we=ie.getWireframeAttribute(z),we===void 0)return;Be=2}const ze=z.drawRange,De=z.attributes.position;let Qe=ze.start*Be,ot=(ze.start+ze.count)*Be;oe!==null&&(Qe=Math.max(Qe,oe.start*Be),ot=Math.min(ot,(oe.start+oe.count)*Be)),we!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,we.count)):De!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,De.count));const Rt=ot-Qe;if(Rt<0||Rt===1/0)return;pt.setup(O,V,ye,z,we);let Tt,et=Ee;if(we!==null&&(Tt=te.get(we),et=Ke,et.setIndex(Tt)),O.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*Pe()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(O.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*Pe()),O.isLineSegments?et.setMode(D.LINES):O.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else O.isPoints?et.setMode(D.POINTS):O.isSprite&&et.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,Gt=O._multiDrawCounts,st=O._multiDrawCount,jn=we?te.get(we).bytesPerElement:1,to=Re.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<st;Sn++)to.setValue(D,"_gl_DrawID",Sn),et.render(Ie[Sn]/jn,Gt[Sn])}else if(O.isInstancedMesh)et.renderInstances(Qe,Rt,O.count);else if(z.isInstancedBufferGeometry){const Ie=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Gt=Math.min(z.instanceCount,Ie);et.renderInstances(Qe,Rt,Gt)}else et.render(Qe,Rt)};function at(E,U,z){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Aa(E,U,z),E.side=vr,E.needsUpdate=!0,Aa(E,U,z),E.side=ei):Aa(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),c=Ze.get(z),c.init(U),x.push(c),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(c.pushLight(O),O.castShadow&&c.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(c.pushLight(O),O.castShadow&&c.pushShadow(O))}),c.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const ye=oe[he];at(ye,z,O),V.add(ye)}else at(oe,z,O),V.add(oe)}),c=x.pop(),V},this.compileAsync=function(E,U,z=null){const V=this.compile(E,U,z);return new Promise(O=>{function oe(){if(V.forEach(function(he){Re.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){O(E);return}setTimeout(oe,10)}Ve.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Xn=null;function xi(E){Xn&&Xn(E)}function Ip(){Mr.stop()}function Np(){Mr.start()}const Mr=new vx;Mr.setAnimationLoop(xi),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(E){Xn=E,W.setAnimationLoop(E),E===null?Mr.stop():Mr.start()},W.addEventListener("sessionstart",Ip),W.addEventListener("sessionend",Np),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,A),c=Ze.get(E,x.length),c.init(U),x.push(c),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),I.setFromProjectionMatrix(se),J=this.localClippingEnabled,j=le.init(this.clippingPlanes,J),m=Se.get(E,v.length),m.init(),v.push(m),W.enabled===!0&&W.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&lc(oe,U,-1/0,y.sortObjects)}lc(E,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,Z),Te=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Te&&Fe.addToRenderList(m,E),this.info.render.frame++,j===!0&&le.beginShadows();const z=c.state.shadowsArray;Me.render(z,E,U),j===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(c.setupLights(),U.isArrayCamera){const oe=U.cameras;if(O.length>0)for(let he=0,ye=oe.length;he<ye;he++){const we=oe[he];Op(V,O,E,we)}Te&&Fe.render(E);for(let he=0,ye=oe.length;he<ye;he++){const we=oe[he];Up(m,E,we,we.viewport)}}else O.length>0&&Op(V,O,E,U),Te&&Fe.render(E),Up(m,E,U);A!==null&&w===0&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(y,E,U),pt.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(c=x[x.length-1],j===!0&&le.setGlobalState(y.clippingPlanes,c.state.camera)):c=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function lc(E,U,z,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)c.pushLight(E),E.castShadow&&c.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||I.intersectsSprite(E)){V&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const he=ee.update(E),ye=E.material;ye.visible&&m.push(E,he,ye,z,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||I.intersectsObject(E))){const he=ee.update(E),ye=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ae.copy(he.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(se)),Array.isArray(ye)){const we=he.groups;for(let Be=0,ze=we.length;Be<ze;Be++){const De=we[Be],Qe=ye[De.materialIndex];Qe&&Qe.visible&&m.push(E,he,Qe,z,ae.z,De)}}else ye.visible&&m.push(E,he,ye,z,ae.z,null)}}const oe=E.children;for(let he=0,ye=oe.length;he<ye;he++)lc(oe[he],U,z,V)}function Up(E,U,z,V){const O=E.opaque,oe=E.transmissive,he=E.transparent;c.setupLightsView(z),j===!0&&le.setGlobalState(y.clippingPlanes,z),V&&be.viewport(P.copy(V)),O.length>0&&Ca(O,U,z),oe.length>0&&Ca(oe,U,z),he.length>0&&Ca(he,U,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Op(E,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[V.id]===void 0&&(c.state.transmissionRenderTarget[V.id]=new qr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Sa:Bi,minFilter:zr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=c.state.transmissionRenderTarget[V.id],he=V.viewport||P;oe.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const ye=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(K),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Te&&Fe.render(z);const we=y.toneMapping;y.toneMapping=pr;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),c.setupLightsView(V),j===!0&&le.setGlobalState(y.clippingPlanes,V),Ca(E,z,V),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let De=0,Qe=U.length;De<Qe;De++){const ot=U[De],Rt=ot.object,Tt=ot.geometry,et=ot.material,Ie=ot.group;if(et.side===ei&&Rt.layers.test(V.layers)){const Gt=et.side;et.side=xn,et.needsUpdate=!0,Fp(Rt,z,V,Tt,et,Ie),et.side=Gt,et.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}y.setRenderTarget(ye),y.setClearColor(K,Y),Be!==void 0&&(V.viewport=Be),y.toneMapping=we}function Ca(E,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,oe=E.length;O<oe;O++){const he=E[O],ye=he.object,we=he.geometry,Be=V===null?he.material:V,ze=he.group;ye.layers.test(z.layers)&&Fp(ye,U,z,we,Be,ze)}}function Fp(E,U,z,V,O,oe){E.onBeforeRender(y,U,z,V,O,oe),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,U,z,V,E,oe),O.transparent===!0&&O.side===ei&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,y.renderBufferDirect(z,U,V,O,E,oe),O.side=vr,O.needsUpdate=!0,y.renderBufferDirect(z,U,V,O,E,oe),O.side=ei):y.renderBufferDirect(z,U,V,O,E,oe),E.onAfterRender(y,U,z,V,O,oe)}function Aa(E,U,z){U.isScene!==!0&&(U=Oe);const V=Re.get(E),O=c.state.lights,oe=c.state.shadowsArray,he=O.state.version,ye=Ce.getParameters(E,O.state,oe,U,z),we=Ce.getProgramCacheKey(ye);let Be=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",Ge),Be=new Map,V.programs=Be);let ze=Be.get(we);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===he)return Bp(E,ye),ze}else ye.uniforms=Ce.getUniforms(E),E.onBeforeCompile(ye,y),ze=Ce.acquireProgram(ye,we),Be.set(we,ze),V.uniforms=ye.uniforms;const De=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=le.uniform),Bp(E,ye),V.needsLights=vy(E),V.lightsStateVersion=he,V.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function kp(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Bl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Bp(E,U){const z=Re.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function my(E,U,z,V,O){U.isScene!==!0&&(U=Oe),R.resetTextureUnits();const oe=U.fog,he=V.isMeshStandardMaterial?U.environment:null,ye=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:is,we=(V.isMeshStandardMaterial?k:M).get(V.envMap||he),Be=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,ot=!!z.morphAttributes.color;let Rt=pr;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Rt=y.toneMapping);const Tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=Tt!==void 0?Tt.length:0,Ie=Re.get(V),Gt=c.state.lights;if(j===!0&&(J===!0||E!==S)){const rn=E===S&&V.id===T;le.setState(V,E,rn)}let st=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Gt.state.version||Ie.outputColorSpace!==ye||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==we||V.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==ze||Ie.morphTargets!==De||Ie.morphNormals!==Qe||Ie.morphColors!==ot||Ie.toneMapping!==Rt||Ie.morphTargetsCount!==et)&&(st=!0):(st=!0,Ie.__version=V.version);let jn=Ie.currentProgram;st===!0&&(jn=Aa(V,U,O));let to=!1,Sn=!1,fs=!1;const xt=jn.getUniforms(),In=Ie.uniforms;if(be.useProgram(jn.program)&&(to=!0,Sn=!0,fs=!0),V.id!==T&&(T=V.id,Sn=!0),to||S!==E){be.buffers.depth.getReversed()?($.copy(E.projectionMatrix),o1($),s1($),xt.setValue(D,"projectionMatrix",$)):xt.setValue(D,"projectionMatrix",E.projectionMatrix),xt.setValue(D,"viewMatrix",E.matrixWorldInverse);const fn=xt.map.cameraPosition;fn!==void 0&&fn.setValue(D,_e.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Sn=!0,fs=!0)}if(O.isSkinnedMesh){xt.setOptional(D,O,"bindMatrix"),xt.setOptional(D,O,"bindMatrixInverse");const rn=O.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),xt.setValue(D,"boneTexture",rn.boneTexture,R))}O.isBatchedMesh&&(xt.setOptional(D,O,"batchingTexture"),xt.setValue(D,"batchingTexture",O._matricesTexture,R),xt.setOptional(D,O,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",O._indirectTexture,R),xt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",O._colorsTexture,R));const Nn=z.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ke.update(O,z,jn),(Sn||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,xt.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(In.envMap.value=we,In.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(In.envMapIntensity.value=U.environmentIntensity),Sn&&(xt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&gy(In,fs),oe&&V.fog===!0&&pe.refreshFogUniforms(In,oe),pe.refreshMaterialUniforms(In,V,L,Q,c.state.transmissionRenderTarget[E.id]),Bl.upload(D,kp(Ie),In,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bl.upload(D,kp(Ie),In,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(D,"center",O.center),xt.setValue(D,"modelViewMatrix",O.modelViewMatrix),xt.setValue(D,"normalMatrix",O.normalMatrix),xt.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const rn=V.uniformsGroups;for(let fn=0,uc=rn.length;fn<uc;fn++){const Er=rn[fn];N.update(Er,jn),N.bind(Er,jn)}}return jn}function gy(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function vy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,z){Re.get(E.texture).__webglTexture=U,Re.get(E.depthTexture).__webglTexture=z;const V=Re.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=Re.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const _y=D.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){A=E,b=U,w=z;let V=!0,O=null,oe=!1,he=!1;if(E){const we=Re.get(E);if(we.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(we.__hasExternalTextures)R.rebindTextures(E,Re.get(E.texture).__webglTexture,Re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const De=E.depthTexture;if(we.__boundDepthTexture!==De){if(De!==null&&Re.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);const ze=Re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?O=ze[U][z]:O=ze[U],oe=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=Re.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[z]:O=ze,P.copy(E.viewport),H.copy(E.scissor),B=E.scissorTest}else P.copy(ue).multiplyScalar(L).floor(),H.copy(ce).multiplyScalar(L).floor(),B=Ue;if(z!==0&&(O=_y),be.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&be.drawBuffers(E,O),be.viewport(P),be.scissor(H),be.setScissorTest(B),oe){const we=Re.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,z)}else if(he){const we=Re.get(E.texture),Be=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,z,Be)}else if(E!==null&&z!==0){const we=Re.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,z)}T=-1},this.readRenderTargetPixels=function(E,U,z,V,O,oe,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){be.bindFramebuffer(D.FRAMEBUFFER,ye);try{const we=E.texture,Be=we.format,ze=we.type;if(!Ye.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&z>=0&&z<=E.height-O&&D.readPixels(U,z,V,O,Xe.convert(Be),Xe.convert(ze),oe)}finally{const we=A!==null?Re.get(A).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,V,O,oe,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const we=E.texture,Be=we.format,ze=we.type;if(!Ye.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&z>=0&&z<=E.height-O){be.bindFramebuffer(D.FRAMEBUFFER,ye);const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(U,z,V,O,Xe.convert(Be),Xe.convert(ze),0);const Qe=A!==null?Re.get(A).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Qe);const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await r1(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(De),D.deleteSync(ot),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-z),O=Math.floor(E.image.width*V),oe=Math.floor(E.image.height*V),he=U!==null?U.x:0,ye=U!==null?U.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,he,ye,O,oe),be.unbindTexture()};const xy=D.createFramebuffer(),yy=D.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,V=null,O=0,oe=null){E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],oe=arguments[3]||0,z=null),oe===null&&(O!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let he,ye,we,Be,ze,De,Qe,ot,Rt;const Tt=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(z!==null)he=z.max.x-z.min.x,ye=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,Be=z.min.x,ze=z.min.y,De=z.isBox3?z.min.z:0;else{const Nn=Math.pow(2,-O);he=Math.floor(Tt.width*Nn),ye=Math.floor(Tt.height*Nn),E.isDataArrayTexture?we=Tt.depth:E.isData3DTexture?we=Math.floor(Tt.depth*Nn):we=1,Be=0,ze=0,De=0}V!==null?(Qe=V.x,ot=V.y,Rt=V.z):(Qe=0,ot=0,Rt=0);const et=Xe.convert(U.format),Ie=Xe.convert(U.type);let Gt;U.isData3DTexture?(R.setTexture3D(U,0),Gt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Gt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Gt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const st=D.getParameter(D.UNPACK_ROW_LENGTH),jn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),to=D.getParameter(D.UNPACK_SKIP_PIXELS),Sn=D.getParameter(D.UNPACK_SKIP_ROWS),fs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De);const xt=E.isDataArrayTexture||E.isData3DTexture,In=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Nn=Re.get(E),rn=Re.get(U),fn=Re.get(Nn.__renderTarget),uc=Re.get(rn.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,uc.__webglFramebuffer);for(let Er=0;Er<we;Er++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(E).__webglTexture,O,De+Er),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(U).__webglTexture,oe,Rt+Er)),D.blitFramebuffer(Be,ze,he,ye,Qe,ot,he,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Re.has(E)){const Nn=Re.get(E),rn=Re.get(U);be.bindFramebuffer(D.READ_FRAMEBUFFER,xy),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,yy);for(let fn=0;fn<we;fn++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nn.__webglTexture,O,De+fn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nn.__webglTexture,O),In?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rn.__webglTexture,oe,Rt+fn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rn.__webglTexture,oe),O!==0?D.blitFramebuffer(Be,ze,he,ye,Qe,ot,he,ye,D.COLOR_BUFFER_BIT,D.NEAREST):In?D.copyTexSubImage3D(Gt,oe,Qe,ot,Rt+fn,Be,ze,he,ye):D.copyTexSubImage2D(Gt,oe,Qe,ot,Be,ze,he,ye);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else In?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Gt,oe,Qe,ot,Rt,he,ye,we,et,Ie,Tt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Gt,oe,Qe,ot,Rt,he,ye,we,et,Tt.data):D.texSubImage3D(Gt,oe,Qe,ot,Rt,he,ye,we,et,Ie,Tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,oe,Qe,ot,he,ye,et,Ie,Tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,oe,Qe,ot,Tt.width,Tt.height,et,Tt.data):D.texSubImage2D(D.TEXTURE_2D,oe,Qe,ot,he,ye,et,Ie,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,to),D.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fs),oe===0&&U.generateMipmaps&&D.generateMipmap(Gt),be.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,V=null,O=0){return E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,V,O)},this.initRenderTarget=function(E){Re.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,be.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const nv={type:"change"},_p={type:"start"},Mx={type:"end"},gl=new Xu,iv=new Ji,IA=Math.cos(70*n1.DEG2RAD),It=new F,hn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hd=1e-6;class NA extends q1{constructor(e,n=null){super(e,n),this.state=dt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:Lo.ROTATE,TWO:Lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Kr,this._lastTargetPosition=new F,this._quat=new Kr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pg,this._sphericalDelta=new Pg,this._scale=1,this._panOffset=new F,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new F,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OA.bind(this),this._onPointerDown=UA.bind(this),this._onPointerUp=FA.bind(this),this._onContextMenu=WA.bind(this),this._onMouseWheel=zA.bind(this),this._onKeyDown=VA.bind(this),this._onTouchStart=HA.bind(this),this._onTouchMove=GA.bind(this),this._onMouseDown=kA.bind(this),this._onMouseMove=BA.bind(this),this._interceptControlDown=XA.bind(this),this._interceptControlUp=jA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nv),this.update(),this.state=dt.NONE}update(e=null){const n=this.object.position;It.copy(n).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),n.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=It.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const u=new F(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),s=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<IA?this.object.lookAt(this.target):(iv.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(iv,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hd||this._lastTargetPosition.distanceToSquared(this.target)>hd?(this.dispatchEvent(nv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){It.setFromMatrixColumn(n,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,n){this.screenSpacePanning===!0?It.setFromMatrixColumn(n,1):(It.setFromMatrixColumn(n,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;It.copy(r).sub(this.target);let o=It.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=n-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new He,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function UA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function OA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function FA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mx),this.state=dt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function kA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=dt.DOLLY;break;case zo.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}break;case zo.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(_p)}function BA(t){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function zA(t){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(t.preventDefault(),this.dispatchEvent(_p),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Mx))}function VA(t){this.enabled!==!1&&this._handleKeyDown(t)}function HA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Lo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=dt.TOUCH_ROTATE;break;case Lo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Lo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=dt.TOUCH_DOLLY_PAN;break;case Lo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(_p)}function GA(t){switch(this._trackPointer(t),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=dt.NONE}}function WA(t){this.enabled!==!1&&t.preventDefault()}function XA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zr(t){"@babel/helpers - typeof";return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zr(t)}function $A(t,e){if(Zr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Zr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ex(t){var e=$A(t,"string");return Zr(e)=="symbol"?e:e+""}function Ns(t,e,n){return(e=Ex(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rv(Object(n),!0).forEach(function(i){Ns(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function YA(t){if(Array.isArray(t))return t}function qA(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,s,a=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw r}}return a}}function nh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function wx(t,e){if(t){if(typeof t=="string")return nh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?nh(t,e):void 0}}function KA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ni(t,e){return YA(t)||qA(t,e)||wx(t,e)||KA()}function ZA(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function Gi(t,e){if(t==null)return{};var n,i,r=ZA(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var QA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function JA(t){var e=t.defaultInputValue,n=e===void 0?"":e,i=t.defaultMenuIsOpen,r=i===void 0?!1:i,o=t.defaultValue,s=o===void 0?null:o,a=t.inputValue,l=t.menuIsOpen,u=t.onChange,d=t.onInputChange,f=t.onMenuClose,h=t.onMenuOpen,p=t.value,g=Gi(t,QA),_=q.useState(a!==void 0?a:n),m=Ni(_,2),c=m[0],v=m[1],x=q.useState(l!==void 0?l:r),y=Ni(x,2),C=y[0],b=y[1],w=q.useState(p!==void 0?p:s),A=Ni(w,2),T=A[0],S=A[1],P=q.useCallback(function(L,X){typeof u=="function"&&u(L,X),S(L)},[u]),H=q.useCallback(function(L,X){var Z;typeof d=="function"&&(Z=d(L,X)),v(Z!==void 0?Z:L)},[d]),B=q.useCallback(function(){typeof h=="function"&&h(),b(!0)},[h]),K=q.useCallback(function(){typeof f=="function"&&f(),b(!1)},[f]),Y=a!==void 0?a:c,G=l!==void 0?l:C,Q=p!==void 0?p:T;return Le(Le({},g),{},{inputValue:Y,menuIsOpen:G,onChange:P,onInputChange:H,onMenuClose:K,onMenuOpen:B,value:Q})}function Ne(){return Ne=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ne.apply(null,arguments)}function eR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ov(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Ex(i.key),i)}}function tR(t,e,n){return e&&ov(t.prototype,e),n&&ov(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ih(t,e){return ih=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ih(t,e)}function nR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ih(t,e)}function xu(t){return xu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xu(t)}function Tx(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Tx=function(){return!!t})()}function iR(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rR(t,e){if(e&&(Zr(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iR(t)}function oR(t){var e=Tx();return function(){var n,i=xu(t);if(e){var r=xu(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return rR(this,n)}}function sR(t){if(Array.isArray(t))return nh(t)}function aR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xp(t){return sR(t)||aR(t)||wx(t)||lR()}var uR=!1;function cR(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function dR(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var fR=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!uR:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dR(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=cR(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Jt="-ms-",yu="-moz-",nt="-webkit-",bx="comm",yp="rule",Sp="decl",hR="@import",Cx="@keyframes",pR="@layer",mR=Math.abs,$u=String.fromCharCode,gR=Object.assign;function vR(t,e){return Xt(t,0)^45?(((e<<2^Xt(t,0))<<2^Xt(t,1))<<2^Xt(t,2))<<2^Xt(t,3):0}function Ax(t){return t.trim()}function _R(t,e){return(t=e.exec(t))?t[0]:t}function it(t,e,n){return t.replace(e,n)}function rh(t,e){return t.indexOf(e)}function Xt(t,e){return t.charCodeAt(e)|0}function ha(t,e,n){return t.slice(e,n)}function di(t){return t.length}function Mp(t){return t.length}function vl(t,e){return e.push(t),t}function xR(t,e){return t.map(e).join("")}var Yu=1,os=1,Rx=0,yn=0,Dt=0,ds="";function qu(t,e,n,i,r,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:Yu,column:os,length:s,return:""}}function Cs(t,e){return gR(qu("",null,null,"",null,null,0),t,{length:-t.length},e)}function yR(){return Dt}function SR(){return Dt=yn>0?Xt(ds,--yn):0,os--,Dt===10&&(os=1,Yu--),Dt}function An(){return Dt=yn<Rx?Xt(ds,yn++):0,os++,Dt===10&&(os=1,Yu++),Dt}function vi(){return Xt(ds,yn)}function zl(){return yn}function ba(t,e){return ha(ds,t,e)}function pa(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Px(t){return Yu=os=1,Rx=di(ds=t),yn=0,[]}function Dx(t){return ds="",t}function Vl(t){return Ax(ba(yn-1,oh(t===91?t+2:t===40?t+1:t)))}function MR(t){for(;(Dt=vi())&&Dt<33;)An();return pa(t)>2||pa(Dt)>3?"":" "}function ER(t,e){for(;--e&&An()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return ba(t,zl()+(e<6&&vi()==32&&An()==32))}function oh(t){for(;An();)switch(Dt){case t:return yn;case 34:case 39:t!==34&&t!==39&&oh(Dt);break;case 40:t===41&&oh(t);break;case 92:An();break}return yn}function wR(t,e){for(;An()&&t+Dt!==57;)if(t+Dt===84&&vi()===47)break;return"/*"+ba(e,yn-1)+"*"+$u(t===47?t:An())}function TR(t){for(;!pa(vi());)An();return ba(t,yn)}function bR(t){return Dx(Hl("",null,null,null,[""],t=Px(t),0,[0],t))}function Hl(t,e,n,i,r,o,s,a,l){for(var u=0,d=0,f=s,h=0,p=0,g=0,_=1,m=1,c=1,v=0,x="",y=r,C=o,b=i,w=x;m;)switch(g=v,v=An()){case 40:if(g!=108&&Xt(w,f-1)==58){rh(w+=it(Vl(v),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:w+=Vl(v);break;case 9:case 10:case 13:case 32:w+=MR(g);break;case 92:w+=ER(zl()-1,7);continue;case 47:switch(vi()){case 42:case 47:vl(CR(wR(An(),zl()),e,n),l);break;default:w+="/"}break;case 123*_:a[u++]=di(w)*c;case 125*_:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+d:c==-1&&(w=it(w,/\f/g,"")),p>0&&di(w)-f&&vl(p>32?av(w+";",i,n,f-1):av(it(w," ","")+";",i,n,f-2),l);break;case 59:w+=";";default:if(vl(b=sv(w,e,n,u,d,r,a,x,y=[],C=[],f),o),v===123)if(d===0)Hl(w,e,b,b,y,o,f,a,C);else switch(h===99&&Xt(w,3)===110?100:h){case 100:case 108:case 109:case 115:Hl(t,b,b,i&&vl(sv(t,b,b,0,0,r,a,x,r,y=[],f),C),r,C,f,a,i?y:C);break;default:Hl(w,b,b,b,[""],C,0,a,C)}}u=d=p=0,_=c=1,x=w="",f=s;break;case 58:f=1+di(w),p=g;default:if(_<1){if(v==123)--_;else if(v==125&&_++==0&&SR()==125)continue}switch(w+=$u(v),v*_){case 38:c=d>0?1:(w+="\f",-1);break;case 44:a[u++]=(di(w)-1)*c,c=1;break;case 64:vi()===45&&(w+=Vl(An())),h=vi(),d=f=di(x=w+=TR(zl())),v++;break;case 45:g===45&&di(w)==2&&(_=0)}}return o}function sv(t,e,n,i,r,o,s,a,l,u,d){for(var f=r-1,h=r===0?o:[""],p=Mp(h),g=0,_=0,m=0;g<i;++g)for(var c=0,v=ha(t,f+1,f=mR(_=s[g])),x=t;c<p;++c)(x=Ax(_>0?h[c]+" "+v:it(v,/&\f/g,h[c])))&&(l[m++]=x);return qu(t,e,n,r===0?yp:a,l,u,d)}function CR(t,e,n){return qu(t,e,n,bx,$u(yR()),ha(t,2,-2),0)}function av(t,e,n,i){return qu(t,e,n,Sp,ha(t,0,i),ha(t,i+1,-1),i)}function Wo(t,e){for(var n="",i=Mp(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function AR(t,e,n,i){switch(t.type){case pR:if(t.children.length)break;case hR:case Sp:return t.return=t.return||t.value;case bx:return"";case Cx:return t.return=t.value+"{"+Wo(t.children,i)+"}";case yp:t.value=t.props.join(",")}return di(n=Wo(t.children,i))?t.return=t.value+"{"+n+"}":""}function RR(t){var e=Mp(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function PR(t){return function(e){e.root||(e=e.return)&&t(e)}}function DR(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var LR=function(e,n,i){for(var r=0,o=0;r=o,o=vi(),r===38&&o===12&&(n[i]=1),!pa(o);)An();return ba(e,yn)},IR=function(e,n){var i=-1,r=44;do switch(pa(r)){case 0:r===38&&vi()===12&&(n[i]=1),e[i]+=LR(yn-1,n,i);break;case 2:e[i]+=Vl(r);break;case 4:if(r===44){e[++i]=vi()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=$u(r)}while(r=An());return e},NR=function(e,n){return Dx(IR(Px(e),n))},lv=new WeakMap,UR=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!lv.get(i))&&!r){lv.set(e,!0);for(var o=[],s=NR(n,o),a=i.props,l=0,u=0;l<s.length;l++)for(var d=0;d<a.length;d++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},OR=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Lx(t,e){switch(vR(t,e)){case 5103:return nt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return nt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+t+yu+t+Jt+t+t;case 6828:case 4268:return nt+t+Jt+t+t;case 6165:return nt+t+Jt+"flex-"+t+t;case 5187:return nt+t+it(t,/(\w+).+(:[^]+)/,nt+"box-$1$2"+Jt+"flex-$1$2")+t;case 5443:return nt+t+Jt+"flex-item-"+it(t,/flex-|-self/,"")+t;case 4675:return nt+t+Jt+"flex-line-pack"+it(t,/align-content|flex-|-self/,"")+t;case 5548:return nt+t+Jt+it(t,"shrink","negative")+t;case 5292:return nt+t+Jt+it(t,"basis","preferred-size")+t;case 6060:return nt+"box-"+it(t,"-grow","")+nt+t+Jt+it(t,"grow","positive")+t;case 4554:return nt+it(t,/([^-])(transform)/g,"$1"+nt+"$2")+t;case 6187:return it(it(it(t,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),t,"")+t;case 5495:case 3959:return it(t,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return it(it(t,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+Jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+nt+t+t;case 4095:case 3583:case 4068:case 2532:return it(t,/(.+)-inline(.+)/,nt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(di(t)-1-e>6)switch(Xt(t,e+1)){case 109:if(Xt(t,e+4)!==45)break;case 102:return it(t,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+yu+(Xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~rh(t,"stretch")?Lx(it(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Xt(t,e+1)!==115)break;case 6444:switch(Xt(t,di(t)-3-(~rh(t,"!important")&&10))){case 107:return it(t,":",":"+nt)+t;case 101:return it(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+nt+(Xt(t,14)===45?"inline-":"")+"box$3$1"+nt+"$2$3$1"+Jt+"$2box$3")+t}break;case 5936:switch(Xt(t,e+11)){case 114:return nt+t+Jt+it(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return nt+t+Jt+it(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return nt+t+Jt+it(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return nt+t+Jt+t+t}return t}var FR=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Sp:e.return=Lx(e.value,e.length);break;case Cx:return Wo([Cs(e,{value:it(e.value,"@","@"+nt)})],r);case yp:if(e.length)return xR(e.props,function(o){switch(_R(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Wo([Cs(e,{props:[it(o,/:(read-\w+)/,":"+yu+"$1")]})],r);case"::placeholder":return Wo([Cs(e,{props:[it(o,/:(plac\w+)/,":"+nt+"input-$1")]}),Cs(e,{props:[it(o,/:(plac\w+)/,":"+yu+"$1")]}),Cs(e,{props:[it(o,/:(plac\w+)/,Jt+"input-$1")]})],r)}return""})}},kR=[FR],BR=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(_){var m=_.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var r=e.stylisPlugins||kR,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var m=_.getAttribute("data-emotion").split(" "),c=1;c<m.length;c++)o[m[c]]=!0;a.push(_)});var l,u=[UR,OR];{var d,f=[AR,PR(function(_){d.insert(_)})],h=RR(u.concat(r,f)),p=function(m){return Wo(bR(m),h)};l=function(m,c,v,x){d=v,p(m?m+"{"+c.styles+"}":c.styles),x&&(g.inserted[c.name]=!0)}}var g={key:n,sheet:new fR({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(a),g},Ix={exports:{}},ut={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ht=typeof Symbol=="function"&&Symbol.for,Ep=Ht?Symbol.for("react.element"):60103,wp=Ht?Symbol.for("react.portal"):60106,Ku=Ht?Symbol.for("react.fragment"):60107,Zu=Ht?Symbol.for("react.strict_mode"):60108,Qu=Ht?Symbol.for("react.profiler"):60114,Ju=Ht?Symbol.for("react.provider"):60109,ec=Ht?Symbol.for("react.context"):60110,Tp=Ht?Symbol.for("react.async_mode"):60111,tc=Ht?Symbol.for("react.concurrent_mode"):60111,nc=Ht?Symbol.for("react.forward_ref"):60112,ic=Ht?Symbol.for("react.suspense"):60113,zR=Ht?Symbol.for("react.suspense_list"):60120,rc=Ht?Symbol.for("react.memo"):60115,oc=Ht?Symbol.for("react.lazy"):60116,VR=Ht?Symbol.for("react.block"):60121,HR=Ht?Symbol.for("react.fundamental"):60117,GR=Ht?Symbol.for("react.responder"):60118,WR=Ht?Symbol.for("react.scope"):60119;function Ln(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ep:switch(t=t.type,t){case Tp:case tc:case Ku:case Qu:case Zu:case ic:return t;default:switch(t=t&&t.$$typeof,t){case ec:case nc:case oc:case rc:case Ju:return t;default:return e}}case wp:return e}}}function Nx(t){return Ln(t)===tc}ut.AsyncMode=Tp;ut.ConcurrentMode=tc;ut.ContextConsumer=ec;ut.ContextProvider=Ju;ut.Element=Ep;ut.ForwardRef=nc;ut.Fragment=Ku;ut.Lazy=oc;ut.Memo=rc;ut.Portal=wp;ut.Profiler=Qu;ut.StrictMode=Zu;ut.Suspense=ic;ut.isAsyncMode=function(t){return Nx(t)||Ln(t)===Tp};ut.isConcurrentMode=Nx;ut.isContextConsumer=function(t){return Ln(t)===ec};ut.isContextProvider=function(t){return Ln(t)===Ju};ut.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ep};ut.isForwardRef=function(t){return Ln(t)===nc};ut.isFragment=function(t){return Ln(t)===Ku};ut.isLazy=function(t){return Ln(t)===oc};ut.isMemo=function(t){return Ln(t)===rc};ut.isPortal=function(t){return Ln(t)===wp};ut.isProfiler=function(t){return Ln(t)===Qu};ut.isStrictMode=function(t){return Ln(t)===Zu};ut.isSuspense=function(t){return Ln(t)===ic};ut.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ku||t===tc||t===Qu||t===Zu||t===ic||t===zR||typeof t=="object"&&t!==null&&(t.$$typeof===oc||t.$$typeof===rc||t.$$typeof===Ju||t.$$typeof===ec||t.$$typeof===nc||t.$$typeof===HR||t.$$typeof===GR||t.$$typeof===WR||t.$$typeof===VR)};ut.typeOf=Ln;Ix.exports=ut;var XR=Ix.exports,Ux=XR,jR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$R={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ox={};Ox[Ux.ForwardRef]=jR;Ox[Ux.Memo]=$R;var YR=!0;function qR(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var Fx=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||YR===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},KR=function(e,n,i){Fx(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function ZR(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var QR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},JR=!1,eP=/[A-Z]|^ms/g,tP=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kx=function(e){return e.charCodeAt(1)===45},uv=function(e){return e!=null&&typeof e!="boolean"},pd=DR(function(t){return kx(t)?t:t.replace(eP,"-$&").toLowerCase()}),cv=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(tP,function(i,r,o){return fi={name:r,styles:o,next:fi},r})}return QR[e]!==1&&!kx(e)&&typeof n=="number"&&n!==0?n+"px":n},nP="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ma(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return fi={name:r.name,styles:r.styles,next:fi},r.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)fi={name:s.name,styles:s.styles,next:fi},s=s.next;var a=o.styles+";";return a}return iP(t,e,n)}case"function":{if(t!==void 0){var l=fi,u=n(t);return fi=l,ma(t,e,u)}break}}var d=n;return d}function iP(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=ma(t,e,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;uv(a)&&(i+=pd(o)+":"+cv(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&JR)throw new Error(nP);if(Array.isArray(s)&&typeof s[0]=="string"&&e==null)for(var l=0;l<s.length;l++)uv(s[l])&&(i+=pd(o)+":"+cv(o,s[l])+";");else{var u=ma(t,e,s);switch(o){case"animation":case"animationName":{i+=pd(o)+":"+u+";";break}default:i+=o+"{"+u+"}"}}}}return i}var dv=/label:\s*([^\s;{]+)\s*(;|$)/g,fi;function Bx(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";fi=void 0;var o=t[0];if(o==null||o.raw===void 0)i=!1,r+=ma(n,e,o);else{var s=o;r+=s[0]}for(var a=1;a<t.length;a++)if(r+=ma(n,e,t[a]),i){var l=o;r+=l[a]}dv.lastIndex=0;for(var u="",d;(d=dv.exec(r))!==null;)u+="-"+d[1];var f=ZR(r)+u;return{name:f,styles:r,next:fi}}var rP=function(e){return e()},oP=Gp.useInsertionEffect?Gp.useInsertionEffect:!1,sP=oP||rP,aP=!1,zx=q.createContext(typeof HTMLElement<"u"?BR({key:"css"}):null);zx.Provider;var lP=function(e){return q.forwardRef(function(n,i){var r=q.useContext(zx);return e(n,r,i)})},uP=q.createContext({}),bp={}.hasOwnProperty,sh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",cP=function(e,n){var i={};for(var r in n)bp.call(n,r)&&(i[r]=n[r]);return i[sh]=e,i},dP=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Fx(n,i,r),sP(function(){return KR(n,i,r)}),null},fP=lP(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[sh],o=[i],s="";typeof t.className=="string"?s=qR(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var a=Bx(o,void 0,q.useContext(uP));s+=e.key+"-"+a.name;var l={};for(var u in t)bp.call(t,u)&&u!=="css"&&u!==sh&&!aP&&(l[u]=t[u]);return l.className=s,n&&(l.ref=n),q.createElement(q.Fragment,null,q.createElement(dP,{cache:e,serialized:a,isStringTag:typeof r=="string"}),q.createElement(r,l))}),hP=fP,Ae=function(e,n){var i=arguments;if(n==null||!bp.call(n,"css"))return q.createElement.apply(void 0,i);var r=i.length,o=new Array(r);o[0]=hP,o[1]=cP(e,n);for(var s=2;s<r;s++)o[s]=i[s];return q.createElement.apply(null,o)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Ae||(Ae={}));function Cp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Bx(e)}function pP(){var t=Cp.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function mP(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const gP=Math.min,vP=Math.max,Su=Math.round,_l=Math.floor,Mu=t=>({x:t,y:t});function _P(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function sc(){return typeof window<"u"}function Vx(t){return Gx(t)?(t.nodeName||"").toLowerCase():"#document"}function Vi(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Hx(t){var e;return(e=(Gx(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Gx(t){return sc()?t instanceof Node||t instanceof Vi(t).Node:!1}function xP(t){return sc()?t instanceof Element||t instanceof Vi(t).Element:!1}function Ap(t){return sc()?t instanceof HTMLElement||t instanceof Vi(t).HTMLElement:!1}function fv(t){return!sc()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Vi(t).ShadowRoot}function Wx(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=Rp(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function yP(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function SP(t){return["html","body","#document"].includes(Vx(t))}function Rp(t){return Vi(t).getComputedStyle(t)}function MP(t){if(Vx(t)==="html")return t;const e=t.assignedSlot||t.parentNode||fv(t)&&t.host||Hx(t);return fv(e)?e.host:e}function Xx(t){const e=MP(t);return SP(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ap(e)&&Wx(e)?e:Xx(e)}function Eu(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Xx(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),s=Vi(r);if(o){const a=ah(s);return e.concat(s,s.visualViewport||[],Wx(r)?r:[],a&&n?Eu(a):[])}return e.concat(r,Eu(r,[],n))}function ah(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function EP(t){const e=Rp(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ap(t),o=r?t.offsetWidth:n,s=r?t.offsetHeight:i,a=Su(n)!==o||Su(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function Pp(t){return xP(t)?t:t.contextElement}function hv(t){const e=Pp(t);if(!Ap(e))return Mu(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:o}=EP(e);let s=(o?Su(n.width):n.width)/i,a=(o?Su(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const wP=Mu(0);function TP(t){const e=Vi(t);return!yP()||!e.visualViewport?wP:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function bP(t,e,n){return!1}function pv(t,e,n,i){e===void 0&&(e=!1);const r=t.getBoundingClientRect(),o=Pp(t);let s=Mu(1);e&&(s=hv(t));const a=bP()?TP(o):Mu(0);let l=(r.left+a.x)/s.x,u=(r.top+a.y)/s.y,d=r.width/s.x,f=r.height/s.y;if(o){const h=Vi(o),p=i;let g=h,_=ah(g);for(;_&&i&&p!==g;){const m=hv(_),c=_.getBoundingClientRect(),v=Rp(_),x=c.left+(_.clientLeft+parseFloat(v.paddingLeft))*m.x,y=c.top+(_.clientTop+parseFloat(v.paddingTop))*m.y;l*=m.x,u*=m.y,d*=m.x,f*=m.y,l+=x,u+=y,g=Vi(_),_=ah(g)}}return _P({width:d,height:f,x:l,y:u})}function jx(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function CP(t,e){let n=null,i;const r=Hx(t);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const u=t.getBoundingClientRect(),{left:d,top:f,width:h,height:p}=u;if(a||e(),!h||!p)return;const g=_l(f),_=_l(r.clientWidth-(d+h)),m=_l(r.clientHeight-(f+p)),c=_l(d),x={rootMargin:-g+"px "+-_+"px "+-m+"px "+-c+"px",threshold:vP(0,gP(1,l))||1};let y=!0;function C(b){const w=b[0].intersectionRatio;if(w!==l){if(!y)return s();w?s(!1,w):i=setTimeout(()=>{s(!1,1e-7)},1e3)}w===1&&!jx(u,t.getBoundingClientRect())&&s(),y=!1}try{n=new IntersectionObserver(C,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(t)}return s(!0),o}function AP(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=Pp(t),d=r||o?[...u?Eu(u):[],...Eu(e)]:[];d.forEach(c=>{r&&c.addEventListener("scroll",n,{passive:!0}),o&&c.addEventListener("resize",n)});const f=u&&a?CP(u,n):null;let h=-1,p=null;s&&(p=new ResizeObserver(c=>{let[v]=c;v&&v.target===u&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),n()}),u&&!l&&p.observe(u),p.observe(e));let g,_=l?pv(t):null;l&&m();function m(){const c=pv(t);_&&!jx(_,c)&&n(),_=c,g=requestAnimationFrame(m)}return n(),()=>{var c;d.forEach(v=>{r&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),f==null||f(),(c=p)==null||c.disconnect(),p=null,l&&cancelAnimationFrame(g)}}var lh=q.useLayoutEffect,RP=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],wu=function(){};function PP(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function DP(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var o=[].concat(i);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&o.push("".concat(PP(t,s)));return o.filter(function(a){return a}).map(function(a){return String(a).trim()}).join(" ")}var mv=function(e){return zP(e)?e.filter(Boolean):Zr(e)==="object"&&e!==null?[e]:[]},$x=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=Gi(e,RP);return Le({},n)},Ct=function(e,n,i){var r=e.cx,o=e.getStyles,s=e.getClassNames,a=e.className;return{css:o(n,e),className:r(i??{},s(n,e),a)}};function ac(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function LP(t){return ac(t)?window.innerHeight:t.clientHeight}function Yx(t){return ac(t)?window.pageYOffset:t.scrollTop}function Tu(t,e){if(ac(t)){window.scrollTo(0,e);return}t.scrollTop=e}function IP(t){var e=getComputedStyle(t),n=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var r=t;r=r.parentElement;)if(e=getComputedStyle(r),!(n&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return r;return document.documentElement}function NP(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}function xl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:wu,r=Yx(t),o=e-r,s=10,a=0;function l(){a+=s;var u=NP(a,r,o,n);Tu(t,u),a<n?window.requestAnimationFrame(l):i(t)}l()}function gv(t,e){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),r=e.offsetHeight/3;i.bottom+r>n.bottom?Tu(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+r,t.scrollHeight)):i.top-r<n.top&&Tu(t,Math.max(e.offsetTop-r,0))}function UP(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function vv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function OP(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var qx=!1,FP={get passive(){return qx=!0}},yl=typeof window<"u"?window:{};yl.addEventListener&&yl.removeEventListener&&(yl.addEventListener("p",wu,FP),yl.removeEventListener("p",wu,!1));var kP=qx;function BP(t){return t!=null}function zP(t){return Array.isArray(t)}function Sl(t,e,n){return t?e:n}var VP=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o=Object.entries(e).filter(function(s){var a=Ni(s,1),l=a[0];return!i.includes(l)});return o.reduce(function(s,a){var l=Ni(a,2),u=l[0],d=l[1];return s[u]=d,s},{})},HP=["children","innerProps"],GP=["children","innerProps"];function WP(t){var e=t.maxHeight,n=t.menuEl,i=t.minHeight,r=t.placement,o=t.shouldScroll,s=t.isFixedPosition,a=t.controlHeight,l=IP(n),u={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return u;var d=l.getBoundingClientRect(),f=d.height,h=n.getBoundingClientRect(),p=h.bottom,g=h.height,_=h.top,m=n.offsetParent.getBoundingClientRect(),c=m.top,v=s?window.innerHeight:LP(l),x=Yx(l),y=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),b=c-C,w=v-_,A=b+x,T=f-x-_,S=p-v+x+y,P=x+_-C,H=160;switch(r){case"auto":case"bottom":if(w>=g)return{placement:"bottom",maxHeight:e};if(T>=g&&!s)return o&&xl(l,S,H),{placement:"bottom",maxHeight:e};if(!s&&T>=i||s&&w>=i){o&&xl(l,S,H);var B=s?w-y:T-y;return{placement:"bottom",maxHeight:B}}if(r==="auto"||s){var K=e,Y=s?b:A;return Y>=i&&(K=Math.min(Y-y-a,e)),{placement:"top",maxHeight:K}}if(r==="bottom")return o&&Tu(l,S),{placement:"bottom",maxHeight:e};break;case"top":if(b>=g)return{placement:"top",maxHeight:e};if(A>=g&&!s)return o&&xl(l,P,H),{placement:"top",maxHeight:e};if(!s&&A>=i||s&&b>=i){var G=e;return(!s&&A>=i||s&&b>=i)&&(G=s?b-C:A-C),o&&xl(l,P,H),{placement:"top",maxHeight:G}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(r,'".'))}return u}function XP(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Kx=function(e){return e==="auto"?"bottom":e},jP=function(e,n){var i,r=e.placement,o=e.theme,s=o.borderRadius,a=o.spacing,l=o.colors;return Le((i={label:"menu"},Ns(i,XP(r),"100%"),Ns(i,"position","absolute"),Ns(i,"width","100%"),Ns(i,"zIndex",1),i),n?{}:{backgroundColor:l.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:a.menuGutter,marginTop:a.menuGutter})},Zx=q.createContext(null),$P=function(e){var n=e.children,i=e.minMenuHeight,r=e.maxMenuHeight,o=e.menuPlacement,s=e.menuPosition,a=e.menuShouldScrollIntoView,l=e.theme,u=q.useContext(Zx)||{},d=u.setPortalPlacement,f=q.useRef(null),h=q.useState(r),p=Ni(h,2),g=p[0],_=p[1],m=q.useState(null),c=Ni(m,2),v=c[0],x=c[1],y=l.spacing.controlHeight;return lh(function(){var C=f.current;if(C){var b=s==="fixed",w=a&&!b,A=WP({maxHeight:r,menuEl:C,minHeight:i,placement:o,shouldScroll:w,isFixedPosition:b,controlHeight:y});_(A.maxHeight),x(A.placement),d==null||d(A.placement)}},[r,o,s,a,i,d,y]),n({ref:f,placerProps:Le(Le({},e),{},{placement:v||Kx(o),maxHeight:g})})},YP=function(e){var n=e.children,i=e.innerRef,r=e.innerProps;return Ae("div",Ne({},Ct(e,"menu",{menu:!0}),{ref:i},r),n)},qP=YP,KP=function(e,n){var i=e.maxHeight,r=e.theme.spacing.baseUnit;return Le({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:r,paddingTop:r})},ZP=function(e){var n=e.children,i=e.innerProps,r=e.innerRef,o=e.isMulti;return Ae("div",Ne({},Ct(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:r},i),n)},Qx=function(e,n){var i=e.theme,r=i.spacing.baseUnit,o=i.colors;return Le({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(r*2,"px ").concat(r*3,"px")})},QP=Qx,JP=Qx,e2=function(e){var n=e.children,i=n===void 0?"No options":n,r=e.innerProps,o=Gi(e,HP);return Ae("div",Ne({},Ct(Le(Le({},o),{},{children:i,innerProps:r}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),r),i)},t2=function(e){var n=e.children,i=n===void 0?"Loading...":n,r=e.innerProps,o=Gi(e,GP);return Ae("div",Ne({},Ct(Le(Le({},o),{},{children:i,innerProps:r}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),r),i)},n2=function(e){var n=e.rect,i=e.offset,r=e.position;return{left:n.left,position:r,top:i,width:n.width,zIndex:1}},i2=function(e){var n=e.appendTo,i=e.children,r=e.controlElement,o=e.innerProps,s=e.menuPlacement,a=e.menuPosition,l=q.useRef(null),u=q.useRef(null),d=q.useState(Kx(s)),f=Ni(d,2),h=f[0],p=f[1],g=q.useMemo(function(){return{setPortalPlacement:p}},[]),_=q.useState(null),m=Ni(_,2),c=m[0],v=m[1],x=q.useCallback(function(){if(r){var w=UP(r),A=a==="fixed"?0:window.pageYOffset,T=w[h]+A;(T!==(c==null?void 0:c.offset)||w.left!==(c==null?void 0:c.rect.left)||w.width!==(c==null?void 0:c.rect.width))&&v({offset:T,rect:w})}},[r,a,h,c==null?void 0:c.offset,c==null?void 0:c.rect.left,c==null?void 0:c.rect.width]);lh(function(){x()},[x]);var y=q.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),r&&l.current&&(u.current=AP(r,l.current,x,{elementResize:"ResizeObserver"in window}))},[r,x]);lh(function(){y()},[y]);var C=q.useCallback(function(w){l.current=w,y()},[y]);if(!n&&a!=="fixed"||!c)return null;var b=Ae("div",Ne({ref:C},Ct(Le(Le({},e),{},{offset:c.offset,position:a,rect:c.rect}),"menuPortal",{"menu-portal":!0}),o),i);return Ae(Zx.Provider,{value:g},n?X0.createPortal(b,n):b)},r2=function(e){var n=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},o2=function(e){var n=e.children,i=e.innerProps,r=e.isDisabled,o=e.isRtl;return Ae("div",Ne({},Ct(e,"container",{"--is-disabled":r,"--is-rtl":o}),i),n)},s2=function(e,n){var i=e.theme.spacing,r=e.isMulti,o=e.hasValue,s=e.selectProps.controlShouldRenderValue;return Le({alignItems:"center",display:r&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},a2=function(e){var n=e.children,i=e.innerProps,r=e.isMulti,o=e.hasValue;return Ae("div",Ne({},Ct(e,"valueContainer",{"value-container":!0,"value-container--is-multi":r,"value-container--has-value":o}),i),n)},l2=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},u2=function(e){var n=e.children,i=e.innerProps;return Ae("div",Ne({},Ct(e,"indicatorsContainer",{indicators:!0}),i),n)},_v,c2=["size"],d2=["innerProps","isRtl","size"],f2={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Jx=function(e){var n=e.size,i=Gi(e,c2);return Ae("svg",Ne({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:f2},i))},Dp=function(e){return Ae(Jx,Ne({size:20},e),Ae("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ey=function(e){return Ae(Jx,Ne({size:20},e),Ae("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},ty=function(e,n){var i=e.isFocused,r=e.theme,o=r.spacing.baseUnit,s=r.colors;return Le({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:i?s.neutral60:s.neutral20,padding:o*2,":hover":{color:i?s.neutral80:s.neutral40}})},h2=ty,p2=function(e){var n=e.children,i=e.innerProps;return Ae("div",Ne({},Ct(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),n||Ae(ey,null))},m2=ty,g2=function(e){var n=e.children,i=e.innerProps;return Ae("div",Ne({},Ct(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),n||Ae(Dp,null))},v2=function(e,n){var i=e.isDisabled,r=e.theme,o=r.spacing.baseUnit,s=r.colors;return Le({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},_2=function(e){var n=e.innerProps;return Ae("span",Ne({},n,Ct(e,"indicatorSeparator",{"indicator-separator":!0})))},x2=pP(_v||(_v=mP([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),y2=function(e,n){var i=e.isFocused,r=e.size,o=e.theme,s=o.colors,a=o.spacing.baseUnit;return Le({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:r,lineHeight:1,marginRight:r,textAlign:"center",verticalAlign:"middle"},n?{}:{color:i?s.neutral60:s.neutral20,padding:a*2})},md=function(e){var n=e.delay,i=e.offset;return Ae("span",{css:Cp({animation:"".concat(x2," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},S2=function(e){var n=e.innerProps,i=e.isRtl,r=e.size,o=r===void 0?4:r,s=Gi(e,d2);return Ae("div",Ne({},Ct(Le(Le({},s),{},{innerProps:n,isRtl:i,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Ae(md,{delay:0,offset:i}),Ae(md,{delay:160,offset:!0}),Ae(md,{delay:320,offset:!i}))},M2=function(e,n){var i=e.isDisabled,r=e.isFocused,o=e.theme,s=o.colors,a=o.borderRadius,l=o.spacing;return Le({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:r?s.primary:s.neutral20,borderRadius:a,borderStyle:"solid",borderWidth:1,boxShadow:r?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:r?s.primary:s.neutral30}})},E2=function(e){var n=e.children,i=e.isDisabled,r=e.isFocused,o=e.innerRef,s=e.innerProps,a=e.menuIsOpen;return Ae("div",Ne({ref:o},Ct(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":r,"control--menu-is-open":a}),s,{"aria-disabled":i||void 0}),n)},w2=E2,T2=["data"],b2=function(e,n){var i=e.theme.spacing;return n?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},C2=function(e){var n=e.children,i=e.cx,r=e.getStyles,o=e.getClassNames,s=e.Heading,a=e.headingProps,l=e.innerProps,u=e.label,d=e.theme,f=e.selectProps;return Ae("div",Ne({},Ct(e,"group",{group:!0}),l),Ae(s,Ne({},a,{selectProps:f,theme:d,getStyles:r,getClassNames:o,cx:i}),u),Ae("div",null,n))},A2=function(e,n){var i=e.theme,r=i.colors,o=i.spacing;return Le({label:"group",cursor:"default",display:"block"},n?{}:{color:r.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},R2=function(e){var n=$x(e);n.data;var i=Gi(n,T2);return Ae("div",Ne({},Ct(e,"groupHeading",{"group-heading":!0}),i))},P2=C2,D2=["innerRef","isDisabled","isHidden","inputClassName"],L2=function(e,n){var i=e.isDisabled,r=e.value,o=e.theme,s=o.spacing,a=o.colors;return Le(Le({visibility:i?"hidden":"visible",transform:r?"translateZ(0)":""},I2),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:a.neutral80})},ny={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},I2={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Le({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},ny)},N2=function(e){return Le({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},ny)},U2=function(e){var n=e.cx,i=e.value,r=$x(e),o=r.innerRef,s=r.isDisabled,a=r.isHidden,l=r.inputClassName,u=Gi(r,D2);return Ae("div",Ne({},Ct(e,"input",{"input-container":!0}),{"data-value":i||""}),Ae("input",Ne({className:n({input:!0},l),ref:o,style:N2(a),disabled:s},u)))},O2=U2,F2=function(e,n){var i=e.theme,r=i.spacing,o=i.borderRadius,s=i.colors;return Le({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:r.baseUnit/2})},k2=function(e,n){var i=e.theme,r=i.borderRadius,o=i.colors,s=e.cropWithEllipsis;return Le({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:r/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},B2=function(e,n){var i=e.theme,r=i.spacing,o=i.borderRadius,s=i.colors,a=e.isFocused;return Le({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:a?s.dangerLight:void 0,paddingLeft:r.baseUnit,paddingRight:r.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},iy=function(e){var n=e.children,i=e.innerProps;return Ae("div",i,n)},z2=iy,V2=iy;function H2(t){var e=t.children,n=t.innerProps;return Ae("div",Ne({role:"button"},n),e||Ae(Dp,{size:14}))}var G2=function(e){var n=e.children,i=e.components,r=e.data,o=e.innerProps,s=e.isDisabled,a=e.removeProps,l=e.selectProps,u=i.Container,d=i.Label,f=i.Remove;return Ae(u,{data:r,innerProps:Le(Le({},Ct(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:l},Ae(d,{data:r,innerProps:Le({},Ct(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:l},n),Ae(f,{data:r,innerProps:Le(Le({},Ct(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},a),selectProps:l}))},W2=G2,X2=function(e,n){var i=e.isDisabled,r=e.isFocused,o=e.isSelected,s=e.theme,a=s.spacing,l=s.colors;return Le({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?l.primary:r?l.primary25:"transparent",color:i?l.neutral20:o?l.neutral0:"inherit",padding:"".concat(a.baseUnit*2,"px ").concat(a.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:o?l.primary:l.primary50}})},j2=function(e){var n=e.children,i=e.isDisabled,r=e.isFocused,o=e.isSelected,s=e.innerRef,a=e.innerProps;return Ae("div",Ne({},Ct(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":r,"option--is-selected":o}),{ref:s,"aria-disabled":i},a),n)},$2=j2,Y2=function(e,n){var i=e.theme,r=i.spacing,o=i.colors;return Le({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2})},q2=function(e){var n=e.children,i=e.innerProps;return Ae("div",Ne({},Ct(e,"placeholder",{placeholder:!0}),i),n)},K2=q2,Z2=function(e,n){var i=e.isDisabled,r=e.theme,o=r.spacing,s=r.colors;return Le({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:i?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Q2=function(e){var n=e.children,i=e.isDisabled,r=e.innerProps;return Ae("div",Ne({},Ct(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),r),n)},J2=Q2,eD={ClearIndicator:g2,Control:w2,DropdownIndicator:p2,DownChevron:ey,CrossIcon:Dp,Group:P2,GroupHeading:R2,IndicatorsContainer:u2,IndicatorSeparator:_2,Input:O2,LoadingIndicator:S2,Menu:qP,MenuList:ZP,MenuPortal:i2,LoadingMessage:t2,NoOptionsMessage:e2,MultiValue:W2,MultiValueContainer:z2,MultiValueLabel:V2,MultiValueRemove:H2,Option:$2,Placeholder:K2,SelectContainer:o2,SingleValue:J2,ValueContainer:a2},tD=function(e){return Le(Le({},eD),e.components)},xv=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function nD(t,e){return!!(t===e||xv(t)&&xv(e))}function iD(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!nD(t[n],e[n]))return!1;return!0}function rD(t,e){e===void 0&&(e=iD);var n=null;function i(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(n&&n.lastThis===this&&e(r,n.lastArgs))return n.lastResult;var s=t.apply(this,r);return n={lastResult:s,lastArgs:r,lastThis:this},s}return i.clear=function(){n=null},i}var oD={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},sD=function(e){return Ae("span",Ne({css:oD},e))},yv=sD,aD={guidance:function(e){var n=e.isSearchable,i=e.isMulti,r=e.tabSelectsValue,o=e.context,s=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(r?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,i=e.label,r=i===void 0?"":i,o=e.labels,s=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(r,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(r," is disabled. Select another option."):"option ".concat(r,", selected.");default:return""}},onFocus:function(e){var n=e.context,i=e.focused,r=e.options,o=e.label,s=o===void 0?"":o,a=e.selectValue,l=e.isDisabled,u=e.isSelected,d=e.isAppleDevice,f=function(_,m){return _&&_.length?"".concat(_.indexOf(m)+1," of ").concat(_.length):""};if(n==="value"&&a)return"value ".concat(s," focused, ").concat(f(a,i),".");if(n==="menu"&&d){var h=l?" disabled":"",p="".concat(u?" selected":"").concat(h);return"".concat(s).concat(p,", ").concat(f(r,i),".")}return""},onFilter:function(e){var n=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(n?" for search term "+n:"",".")}},lD=function(e){var n=e.ariaSelection,i=e.focusedOption,r=e.focusedValue,o=e.focusableOptions,s=e.isFocused,a=e.selectValue,l=e.selectProps,u=e.id,d=e.isAppleDevice,f=l.ariaLiveMessages,h=l.getOptionLabel,p=l.inputValue,g=l.isMulti,_=l.isOptionDisabled,m=l.isSearchable,c=l.menuIsOpen,v=l.options,x=l.screenReaderStatus,y=l.tabSelectsValue,C=l.isLoading,b=l["aria-label"],w=l["aria-live"],A=q.useMemo(function(){return Le(Le({},aD),f||{})},[f]),T=q.useMemo(function(){var Y="";if(n&&A.onChange){var G=n.option,Q=n.options,L=n.removedValue,X=n.removedValues,Z=n.value,ue=function(se){return Array.isArray(se)?null:se},ce=L||G||ue(Z),Ue=ce?h(ce):"",I=Q||X||void 0,j=I?I.map(h):[],J=Le({isDisabled:ce&&_(ce,a),label:Ue,labels:j},n);Y=A.onChange(J)}return Y},[n,A,_,a,h]),S=q.useMemo(function(){var Y="",G=i||r,Q=!!(i&&a&&a.includes(i));if(G&&A.onFocus){var L={focused:G,label:h(G),isDisabled:_(G,a),isSelected:Q,options:o,context:G===i?"menu":"value",selectValue:a,isAppleDevice:d};Y=A.onFocus(L)}return Y},[i,r,h,_,A,o,a,d]),P=q.useMemo(function(){var Y="";if(c&&v.length&&!C&&A.onFilter){var G=x({count:o.length});Y=A.onFilter({inputValue:p,resultsMessage:G})}return Y},[o,p,c,A,v,x,C]),H=(n==null?void 0:n.action)==="initial-input-focus",B=q.useMemo(function(){var Y="";if(A.guidance){var G=r?"value":c?"menu":"input";Y=A.guidance({"aria-label":b,context:G,isDisabled:i&&_(i,a),isMulti:g,isSearchable:m,tabSelectsValue:y,isInitialFocus:H})}return Y},[b,i,r,g,_,m,c,A,a,y,H]),K=Ae(q.Fragment,null,Ae("span",{id:"aria-selection"},T),Ae("span",{id:"aria-focused"},S),Ae("span",{id:"aria-results"},P),Ae("span",{id:"aria-guidance"},B));return Ae(q.Fragment,null,Ae(yv,{id:u},H&&K),Ae(yv,{"aria-live":w,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!H&&K))},uD=lD,uh=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],cD=new RegExp("["+uh.map(function(t){return t.letters}).join("")+"]","g"),ry={};for(var gd=0;gd<uh.length;gd++)for(var vd=uh[gd],_d=0;_d<vd.letters.length;_d++)ry[vd.letters[_d]]=vd.base;var oy=function(e){return e.replace(cD,function(n){return ry[n]})},dD=rD(oy),Sv=function(e){return e.replace(/^\s+|\s+$/g,"")},fD=function(e){return"".concat(e.label," ").concat(e.value)},hD=function(e){return function(n,i){if(n.data.__isNew__)return!0;var r=Le({ignoreCase:!0,ignoreAccents:!0,stringify:fD,trim:!0,matchFrom:"any"},e),o=r.ignoreCase,s=r.ignoreAccents,a=r.stringify,l=r.trim,u=r.matchFrom,d=l?Sv(i):i,f=l?Sv(a(n)):a(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),s&&(d=dD(d),f=oy(f)),u==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},pD=["innerRef"];function mD(t){var e=t.innerRef,n=Gi(t,pD),i=VP(n,"onExited","in","enter","exit","appear");return Ae("input",Ne({ref:e},i,{css:Cp({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var gD=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function vD(t){var e=t.isEnabled,n=t.onBottomArrive,i=t.onBottomLeave,r=t.onTopArrive,o=t.onTopLeave,s=q.useRef(!1),a=q.useRef(!1),l=q.useRef(0),u=q.useRef(null),d=q.useCallback(function(m,c){if(u.current!==null){var v=u.current,x=v.scrollTop,y=v.scrollHeight,C=v.clientHeight,b=u.current,w=c>0,A=y-C-x,T=!1;A>c&&s.current&&(i&&i(m),s.current=!1),w&&a.current&&(o&&o(m),a.current=!1),w&&c>A?(n&&!s.current&&n(m),b.scrollTop=y,T=!0,s.current=!0):!w&&-c>x&&(r&&!a.current&&r(m),b.scrollTop=0,T=!0,a.current=!0),T&&gD(m)}},[n,i,r,o]),f=q.useCallback(function(m){d(m,m.deltaY)},[d]),h=q.useCallback(function(m){l.current=m.changedTouches[0].clientY},[]),p=q.useCallback(function(m){var c=l.current-m.changedTouches[0].clientY;d(m,c)},[d]),g=q.useCallback(function(m){if(m){var c=kP?{passive:!1}:!1;m.addEventListener("wheel",f,c),m.addEventListener("touchstart",h,c),m.addEventListener("touchmove",p,c)}},[p,h,f]),_=q.useCallback(function(m){m&&(m.removeEventListener("wheel",f,!1),m.removeEventListener("touchstart",h,!1),m.removeEventListener("touchmove",p,!1))},[p,h,f]);return q.useEffect(function(){if(e){var m=u.current;return g(m),function(){_(m)}}},[e,g,_]),function(m){u.current=m}}var Mv=["boxSizing","height","overflow","paddingRight","position"],Ev={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function wv(t){t.cancelable&&t.preventDefault()}function Tv(t){t.stopPropagation()}function bv(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function Cv(){return"ontouchstart"in window||navigator.maxTouchPoints}var Av=!!(typeof window<"u"&&window.document&&window.document.createElement),As=0,_o={capture:!1,passive:!1};function _D(t){var e=t.isEnabled,n=t.accountForScrollbars,i=n===void 0?!0:n,r=q.useRef({}),o=q.useRef(null),s=q.useCallback(function(l){if(Av){var u=document.body,d=u&&u.style;if(i&&Mv.forEach(function(g){var _=d&&d[g];r.current[g]=_}),i&&As<1){var f=parseInt(r.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,p=window.innerWidth-h+f||0;Object.keys(Ev).forEach(function(g){var _=Ev[g];d&&(d[g]=_)}),d&&(d.paddingRight="".concat(p,"px"))}u&&Cv()&&(u.addEventListener("touchmove",wv,_o),l&&(l.addEventListener("touchstart",bv,_o),l.addEventListener("touchmove",Tv,_o))),As+=1}},[i]),a=q.useCallback(function(l){if(Av){var u=document.body,d=u&&u.style;As=Math.max(As-1,0),i&&As<1&&Mv.forEach(function(f){var h=r.current[f];d&&(d[f]=h)}),u&&Cv()&&(u.removeEventListener("touchmove",wv,_o),l&&(l.removeEventListener("touchstart",bv,_o),l.removeEventListener("touchmove",Tv,_o)))}},[i]);return q.useEffect(function(){if(e){var l=o.current;return s(l),function(){a(l)}}},[e,s,a]),function(l){o.current=l}}var xD=function(e){var n=e.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},yD={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function SD(t){var e=t.children,n=t.lockEnabled,i=t.captureEnabled,r=i===void 0?!0:i,o=t.onBottomArrive,s=t.onBottomLeave,a=t.onTopArrive,l=t.onTopLeave,u=vD({isEnabled:r,onBottomArrive:o,onBottomLeave:s,onTopArrive:a,onTopLeave:l}),d=_D({isEnabled:n}),f=function(p){u(p),d(p)};return Ae(q.Fragment,null,n&&Ae("div",{onClick:xD,css:yD}),e(f))}var MD={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ED=function(e){var n=e.name,i=e.onFocus;return Ae("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:MD,value:"",onChange:function(){}})},wD=ED;function Lp(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function TD(){return Lp(/^iPhone/i)}function sy(){return Lp(/^Mac/i)}function bD(){return Lp(/^iPad/i)||sy()&&navigator.maxTouchPoints>1}function CD(){return TD()||bD()}function AD(){return sy()||CD()}var RD=function(e){return e.label},PD=function(e){return e.label},DD=function(e){return e.value},LD=function(e){return!!e.isDisabled},ID={clearIndicator:m2,container:r2,control:M2,dropdownIndicator:h2,group:b2,groupHeading:A2,indicatorsContainer:l2,indicatorSeparator:v2,input:L2,loadingIndicator:y2,loadingMessage:JP,menu:jP,menuList:KP,menuPortal:n2,multiValue:F2,multiValueLabel:k2,multiValueRemove:B2,noOptionsMessage:QP,option:X2,placeholder:Y2,singleValue:Z2,valueContainer:s2},ND={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},UD=4,ay=4,OD=38,FD=ay*2,kD={baseUnit:ay,controlHeight:OD,menuGutter:FD},xd={borderRadius:UD,colors:ND,spacing:kD},BD={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:vv(),captureMenuScroll:!vv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:hD(),formatGroupLabel:RD,getOptionLabel:PD,getOptionValue:DD,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:LD,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!OP(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Rv(t,e,n,i){var r=cy(t,e,n),o=dy(t,e,n),s=uy(t,e),a=bu(t,e);return{type:"option",data:e,isDisabled:r,isSelected:o,label:s,value:a,index:i}}function Gl(t,e){return t.options.map(function(n,i){if("options"in n){var r=n.options.map(function(s,a){return Rv(t,s,e,a)}).filter(function(s){return Dv(t,s)});return r.length>0?{type:"group",data:n,options:r,index:i}:void 0}var o=Rv(t,n,e,i);return Dv(t,o)?o:void 0}).filter(BP)}function ly(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,xp(n.options.map(function(i){return i.data}))):e.push(n.data),e},[])}function Pv(t,e){return t.reduce(function(n,i){return i.type==="group"?n.push.apply(n,xp(i.options.map(function(r){return{data:r.data,id:"".concat(e,"-").concat(i.index,"-").concat(r.index)}}))):n.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),n},[])}function zD(t,e){return ly(Gl(t,e))}function Dv(t,e){var n=t.inputValue,i=n===void 0?"":n,r=e.data,o=e.isSelected,s=e.label,a=e.value;return(!hy(t)||!o)&&fy(t,{label:s,value:a,data:r},i)}function VD(t,e){var n=t.focusedValue,i=t.selectValue,r=i.indexOf(n);if(r>-1){var o=e.indexOf(n);if(o>-1)return n;if(r<e.length)return e[r]}return null}function HD(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var yd=function(e,n){var i,r=(i=e.find(function(o){return o.data===n}))===null||i===void 0?void 0:i.id;return r||null},uy=function(e,n){return e.getOptionLabel(n)},bu=function(e,n){return e.getOptionValue(n)};function cy(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function dy(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var i=bu(t,e);return n.some(function(r){return bu(t,r)===i})}function fy(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var hy=function(e){var n=e.hideSelectedOptions,i=e.isMulti;return n===void 0?i:n},GD=1,py=function(t){nR(n,t);var e=oR(n);function n(i){var r;if(eR(this,n),r=e.call(this,i),r.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},r.blockOptionHover=!1,r.isComposing=!1,r.commonProps=void 0,r.initialTouchX=0,r.initialTouchY=0,r.openAfterFocus=!1,r.scrollToFocusedOptionOnUpdate=!1,r.userIsDragging=void 0,r.isAppleDevice=AD(),r.controlRef=null,r.getControlRef=function(l){r.controlRef=l},r.focusedOptionRef=null,r.getFocusedOptionRef=function(l){r.focusedOptionRef=l},r.menuListRef=null,r.getMenuListRef=function(l){r.menuListRef=l},r.inputRef=null,r.getInputRef=function(l){r.inputRef=l},r.focus=r.focusInput,r.blur=r.blurInput,r.onChange=function(l,u){var d=r.props,f=d.onChange,h=d.name;u.name=h,r.ariaOnChange(l,u),f(l,u)},r.setValue=function(l,u,d){var f=r.props,h=f.closeMenuOnSelect,p=f.isMulti,g=f.inputValue;r.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(r.setState({inputIsHiddenAfterUpdate:!p}),r.onMenuClose()),r.setState({clearFocusValueOnUpdate:!0}),r.onChange(l,{action:u,option:d})},r.selectOption=function(l){var u=r.props,d=u.blurInputOnSelect,f=u.isMulti,h=u.name,p=r.state.selectValue,g=f&&r.isOptionSelected(l,p),_=r.isOptionDisabled(l,p);if(g){var m=r.getOptionValue(l);r.setValue(p.filter(function(c){return r.getOptionValue(c)!==m}),"deselect-option",l)}else if(!_)f?r.setValue([].concat(xp(p),[l]),"select-option",l):r.setValue(l,"select-option");else{r.ariaOnChange(l,{action:"select-option",option:l,name:h});return}d&&r.blurInput()},r.removeValue=function(l){var u=r.props.isMulti,d=r.state.selectValue,f=r.getOptionValue(l),h=d.filter(function(g){return r.getOptionValue(g)!==f}),p=Sl(u,h,h[0]||null);r.onChange(p,{action:"remove-value",removedValue:l}),r.focusInput()},r.clearValue=function(){var l=r.state.selectValue;r.onChange(Sl(r.props.isMulti,[],null),{action:"clear",removedValues:l})},r.popValue=function(){var l=r.props.isMulti,u=r.state.selectValue,d=u[u.length-1],f=u.slice(0,u.length-1),h=Sl(l,f,f[0]||null);d&&r.onChange(h,{action:"pop-value",removedValue:d})},r.getFocusedOptionId=function(l){return yd(r.state.focusableOptionsWithIds,l)},r.getFocusableOptionsWithIds=function(){return Pv(Gl(r.props,r.state.selectValue),r.getElementId("option"))},r.getValue=function(){return r.state.selectValue},r.cx=function(){for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];return DP.apply(void 0,[r.props.classNamePrefix].concat(u))},r.getOptionLabel=function(l){return uy(r.props,l)},r.getOptionValue=function(l){return bu(r.props,l)},r.getStyles=function(l,u){var d=r.props.unstyled,f=ID[l](u,d);f.boxSizing="border-box";var h=r.props.styles[l];return h?h(f,u):f},r.getClassNames=function(l,u){var d,f;return(d=(f=r.props.classNames)[l])===null||d===void 0?void 0:d.call(f,u)},r.getElementId=function(l){return"".concat(r.state.instancePrefix,"-").concat(l)},r.getComponents=function(){return tD(r.props)},r.buildCategorizedOptions=function(){return Gl(r.props,r.state.selectValue)},r.getCategorizedOptions=function(){return r.props.menuIsOpen?r.buildCategorizedOptions():[]},r.buildFocusableOptions=function(){return ly(r.buildCategorizedOptions())},r.getFocusableOptions=function(){return r.props.menuIsOpen?r.buildFocusableOptions():[]},r.ariaOnChange=function(l,u){r.setState({ariaSelection:Le({value:l},u)})},r.onMenuMouseDown=function(l){l.button===0&&(l.stopPropagation(),l.preventDefault(),r.focusInput())},r.onMenuMouseMove=function(l){r.blockOptionHover=!1},r.onControlMouseDown=function(l){if(!l.defaultPrevented){var u=r.props.openMenuOnClick;r.state.isFocused?r.props.menuIsOpen?l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&r.onMenuClose():u&&r.openMenu("first"):(u&&(r.openAfterFocus=!0),r.focusInput()),l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&l.preventDefault()}},r.onDropdownIndicatorMouseDown=function(l){if(!(l&&l.type==="mousedown"&&l.button!==0)&&!r.props.isDisabled){var u=r.props,d=u.isMulti,f=u.menuIsOpen;r.focusInput(),f?(r.setState({inputIsHiddenAfterUpdate:!d}),r.onMenuClose()):r.openMenu("first"),l.preventDefault()}},r.onClearIndicatorMouseDown=function(l){l&&l.type==="mousedown"&&l.button!==0||(r.clearValue(),l.preventDefault(),r.openAfterFocus=!1,l.type==="touchend"?r.focusInput():setTimeout(function(){return r.focusInput()}))},r.onScroll=function(l){typeof r.props.closeMenuOnScroll=="boolean"?l.target instanceof HTMLElement&&ac(l.target)&&r.props.onMenuClose():typeof r.props.closeMenuOnScroll=="function"&&r.props.closeMenuOnScroll(l)&&r.props.onMenuClose()},r.onCompositionStart=function(){r.isComposing=!0},r.onCompositionEnd=function(){r.isComposing=!1},r.onTouchStart=function(l){var u=l.touches,d=u&&u.item(0);d&&(r.initialTouchX=d.clientX,r.initialTouchY=d.clientY,r.userIsDragging=!1)},r.onTouchMove=function(l){var u=l.touches,d=u&&u.item(0);if(d){var f=Math.abs(d.clientX-r.initialTouchX),h=Math.abs(d.clientY-r.initialTouchY),p=5;r.userIsDragging=f>p||h>p}},r.onTouchEnd=function(l){r.userIsDragging||(r.controlRef&&!r.controlRef.contains(l.target)&&r.menuListRef&&!r.menuListRef.contains(l.target)&&r.blurInput(),r.initialTouchX=0,r.initialTouchY=0)},r.onControlTouchEnd=function(l){r.userIsDragging||r.onControlMouseDown(l)},r.onClearIndicatorTouchEnd=function(l){r.userIsDragging||r.onClearIndicatorMouseDown(l)},r.onDropdownIndicatorTouchEnd=function(l){r.userIsDragging||r.onDropdownIndicatorMouseDown(l)},r.handleInputChange=function(l){var u=r.props.inputValue,d=l.currentTarget.value;r.setState({inputIsHiddenAfterUpdate:!1}),r.onInputChange(d,{action:"input-change",prevInputValue:u}),r.props.menuIsOpen||r.onMenuOpen()},r.onInputFocus=function(l){r.props.onFocus&&r.props.onFocus(l),r.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(r.openAfterFocus||r.props.openMenuOnFocus)&&r.openMenu("first"),r.openAfterFocus=!1},r.onInputBlur=function(l){var u=r.props.inputValue;if(r.menuListRef&&r.menuListRef.contains(document.activeElement)){r.inputRef.focus();return}r.props.onBlur&&r.props.onBlur(l),r.onInputChange("",{action:"input-blur",prevInputValue:u}),r.onMenuClose(),r.setState({focusedValue:null,isFocused:!1})},r.onOptionHover=function(l){if(!(r.blockOptionHover||r.state.focusedOption===l)){var u=r.getFocusableOptions(),d=u.indexOf(l);r.setState({focusedOption:l,focusedOptionId:d>-1?r.getFocusedOptionId(l):null})}},r.shouldHideSelectedOptions=function(){return hy(r.props)},r.onValueInputFocus=function(l){l.preventDefault(),l.stopPropagation(),r.focus()},r.onKeyDown=function(l){var u=r.props,d=u.isMulti,f=u.backspaceRemovesValue,h=u.escapeClearsValue,p=u.inputValue,g=u.isClearable,_=u.isDisabled,m=u.menuIsOpen,c=u.onKeyDown,v=u.tabSelectsValue,x=u.openMenuOnFocus,y=r.state,C=y.focusedOption,b=y.focusedValue,w=y.selectValue;if(!_&&!(typeof c=="function"&&(c(l),l.defaultPrevented))){switch(r.blockOptionHover=!0,l.key){case"ArrowLeft":if(!d||p)return;r.focusValue("previous");break;case"ArrowRight":if(!d||p)return;r.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(b)r.removeValue(b);else{if(!f)return;d?r.popValue():g&&r.clearValue()}break;case"Tab":if(r.isComposing||l.shiftKey||!m||!v||!C||x&&r.isOptionSelected(C,w))return;r.selectOption(C);break;case"Enter":if(l.keyCode===229)break;if(m){if(!C||r.isComposing)return;r.selectOption(C);break}return;case"Escape":m?(r.setState({inputIsHiddenAfterUpdate:!1}),r.onInputChange("",{action:"menu-close",prevInputValue:p}),r.onMenuClose()):g&&h&&r.clearValue();break;case" ":if(p)return;if(!m){r.openMenu("first");break}if(!C)return;r.selectOption(C);break;case"ArrowUp":m?r.focusOption("up"):r.openMenu("last");break;case"ArrowDown":m?r.focusOption("down"):r.openMenu("first");break;case"PageUp":if(!m)return;r.focusOption("pageup");break;case"PageDown":if(!m)return;r.focusOption("pagedown");break;case"Home":if(!m)return;r.focusOption("first");break;case"End":if(!m)return;r.focusOption("last");break;default:return}l.preventDefault()}},r.state.instancePrefix="react-select-"+(r.props.instanceId||++GD),r.state.selectValue=mv(i.value),i.menuIsOpen&&r.state.selectValue.length){var o=r.getFocusableOptionsWithIds(),s=r.buildFocusableOptions(),a=s.indexOf(r.state.selectValue[0]);r.state.focusableOptionsWithIds=o,r.state.focusedOption=s[a],r.state.focusedOptionId=yd(o,s[a])}return r}return tR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&gv(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(r){var o=this.props,s=o.isDisabled,a=o.menuIsOpen,l=this.state.isFocused;(l&&!s&&r.isDisabled||l&&a&&!r.menuIsOpen)&&this.focusInput(),l&&s&&!r.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!l&&!s&&r.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(gv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(r,o){this.props.onInputChange(r,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(r){var o=this,s=this.state,a=s.selectValue,l=s.isFocused,u=this.buildFocusableOptions(),d=r==="first"?0:u.length-1;if(!this.props.isMulti){var f=u.indexOf(a[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(r){var o=this.state,s=o.selectValue,a=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var l=s.indexOf(a);a||(l=-1);var u=s.length-1,d=-1;if(s.length){switch(r){case"previous":l===0?d=0:l===-1?d=u:d=l-1;break;case"next":l>-1&&l<u&&(d=l+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:s[d]})}}}},{key:"focusOption",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,a=this.getFocusableOptions();if(a.length){var l=0,u=a.indexOf(s);s||(u=-1),r==="up"?l=u>0?u-1:a.length-1:r==="down"?l=(u+1)%a.length:r==="pageup"?(l=u-o,l<0&&(l=0)):r==="pagedown"?(l=u+o,l>a.length-1&&(l=a.length-1)):r==="last"&&(l=a.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:a[l],focusedValue:null,focusedOptionId:this.getFocusedOptionId(a[l])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(xd):Le(Le({},xd),this.props.theme):xd}},{key:"getCommonProps",value:function(){var r=this.clearValue,o=this.cx,s=this.getStyles,a=this.getClassNames,l=this.getValue,u=this.selectOption,d=this.setValue,f=this.props,h=f.isMulti,p=f.isRtl,g=f.options,_=this.hasValue();return{clearValue:r,cx:o,getStyles:s,getClassNames:a,getValue:l,hasValue:_,isMulti:h,isRtl:p,options:g,selectOption:u,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var r=this.state.selectValue;return r.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var r=this.props,o=r.isClearable,s=r.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(r,o){return cy(this.props,r,o)}},{key:"isOptionSelected",value:function(r,o){return dy(this.props,r,o)}},{key:"filterOption",value:function(r,o){return fy(this.props,r,o)}},{key:"formatOptionLabel",value:function(r,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,a=this.state.selectValue;return this.props.formatOptionLabel(r,{context:o,inputValue:s,selectValue:a})}else return this.getOptionLabel(r)}},{key:"formatGroupLabel",value:function(r){return this.props.formatGroupLabel(r)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var r=this.props,o=r.isDisabled,s=r.isSearchable,a=r.inputId,l=r.inputValue,u=r.tabIndex,d=r.form,f=r.menuIsOpen,h=r.required,p=this.getComponents(),g=p.Input,_=this.state,m=_.inputIsHidden,c=_.ariaSelection,v=this.commonProps,x=a||this.getElementId("input"),y=Le(Le(Le({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(c==null?void 0:c.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?q.createElement(g,Ne({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:l},y)):q.createElement(mD,Ne({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:wu,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},y))}},{key:"renderPlaceholderOrValue",value:function(){var r=this,o=this.getComponents(),s=o.MultiValue,a=o.MultiValueContainer,l=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,h=this.commonProps,p=this.props,g=p.controlShouldRenderValue,_=p.isDisabled,m=p.isMulti,c=p.inputValue,v=p.placeholder,x=this.state,y=x.selectValue,C=x.focusedValue,b=x.isFocused;if(!this.hasValue()||!g)return c?null:q.createElement(f,Ne({},h,{key:"placeholder",isDisabled:_,isFocused:b,innerProps:{id:this.getElementId("placeholder")}}),v);if(m)return y.map(function(A,T){var S=A===C,P="".concat(r.getOptionLabel(A),"-").concat(r.getOptionValue(A));return q.createElement(s,Ne({},h,{components:{Container:a,Label:l,Remove:u},isFocused:S,isDisabled:_,key:P,index:T,removeProps:{onClick:function(){return r.removeValue(A)},onTouchEnd:function(){return r.removeValue(A)},onMouseDown:function(B){B.preventDefault()}},data:A}),r.formatOptionLabel(A,"value"))});if(c)return null;var w=y[0];return q.createElement(d,Ne({},h,{data:w,isDisabled:_}),this.formatOptionLabel(w,"value"))}},{key:"renderClearIndicator",value:function(){var r=this.getComponents(),o=r.ClearIndicator,s=this.commonProps,a=this.props,l=a.isDisabled,u=a.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||l||!this.hasValue()||u)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return q.createElement(o,Ne({},s,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var r=this.getComponents(),o=r.LoadingIndicator,s=this.commonProps,a=this.props,l=a.isDisabled,u=a.isLoading,d=this.state.isFocused;if(!o||!u)return null;var f={"aria-hidden":"true"};return q.createElement(o,Ne({},s,{innerProps:f,isDisabled:l,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var r=this.getComponents(),o=r.DropdownIndicator,s=r.IndicatorSeparator;if(!o||!s)return null;var a=this.commonProps,l=this.props.isDisabled,u=this.state.isFocused;return q.createElement(s,Ne({},a,{isDisabled:l,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var r=this.getComponents(),o=r.DropdownIndicator;if(!o)return null;var s=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return q.createElement(o,Ne({},s,{innerProps:u,isDisabled:a,isFocused:l}))}},{key:"renderMenu",value:function(){var r=this,o=this.getComponents(),s=o.Group,a=o.GroupHeading,l=o.Menu,u=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,h=o.NoOptionsMessage,p=o.Option,g=this.commonProps,_=this.state.focusedOption,m=this.props,c=m.captureMenuScroll,v=m.inputValue,x=m.isLoading,y=m.loadingMessage,C=m.minMenuHeight,b=m.maxMenuHeight,w=m.menuIsOpen,A=m.menuPlacement,T=m.menuPosition,S=m.menuPortalTarget,P=m.menuShouldBlockScroll,H=m.menuShouldScrollIntoView,B=m.noOptionsMessage,K=m.onMenuScrollToTop,Y=m.onMenuScrollToBottom;if(!w)return null;var G=function(Ue,I){var j=Ue.type,J=Ue.data,$=Ue.isDisabled,se=Ue.isSelected,_e=Ue.label,ae=Ue.value,Oe=_===J,Te=$?void 0:function(){return r.onOptionHover(J)},Pe=$?void 0:function(){return r.selectOption(J)},D="".concat(r.getElementId("option"),"-").concat(I),kt={id:D,onClick:Pe,onMouseMove:Te,onMouseOver:Te,tabIndex:-1,role:"option","aria-selected":r.isAppleDevice?void 0:se};return q.createElement(p,Ne({},g,{innerProps:kt,data:J,isDisabled:$,isSelected:se,key:D,label:_e,type:j,value:ae,isFocused:Oe,innerRef:Oe?r.getFocusedOptionRef:void 0}),r.formatOptionLabel(Ue.data,"menu"))},Q;if(this.hasOptions())Q=this.getCategorizedOptions().map(function(ce){if(ce.type==="group"){var Ue=ce.data,I=ce.options,j=ce.index,J="".concat(r.getElementId("group"),"-").concat(j),$="".concat(J,"-heading");return q.createElement(s,Ne({},g,{key:J,data:Ue,options:I,Heading:a,headingProps:{id:$,data:ce.data},label:r.formatGroupLabel(ce.data)}),ce.options.map(function(se){return G(se,"".concat(j,"-").concat(se.index))}))}else if(ce.type==="option")return G(ce,"".concat(ce.index))});else if(x){var L=y({inputValue:v});if(L===null)return null;Q=q.createElement(f,g,L)}else{var X=B({inputValue:v});if(X===null)return null;Q=q.createElement(h,g,X)}var Z={minMenuHeight:C,maxMenuHeight:b,menuPlacement:A,menuPosition:T,menuShouldScrollIntoView:H},ue=q.createElement($P,Ne({},g,Z),function(ce){var Ue=ce.ref,I=ce.placerProps,j=I.placement,J=I.maxHeight;return q.createElement(l,Ne({},g,Z,{innerRef:Ue,innerProps:{onMouseDown:r.onMenuMouseDown,onMouseMove:r.onMenuMouseMove},isLoading:x,placement:j}),q.createElement(SD,{captureEnabled:c,onTopArrive:K,onBottomArrive:Y,lockEnabled:P},function($){return q.createElement(u,Ne({},g,{innerRef:function(_e){r.getMenuListRef(_e),$(_e)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:r.getElementId("listbox")},isLoading:x,maxHeight:J,focusedOption:_}),Q)}))});return S||T==="fixed"?q.createElement(d,Ne({},g,{appendTo:S,controlElement:this.controlRef,menuPlacement:A,menuPosition:T}),ue):ue}},{key:"renderFormField",value:function(){var r=this,o=this.props,s=o.delimiter,a=o.isDisabled,l=o.isMulti,u=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!a)return q.createElement(wD,{name:u,onFocus:this.onValueInputFocus});if(!(!u||a))if(l)if(s){var h=f.map(function(_){return r.getOptionValue(_)}).join(s);return q.createElement("input",{name:u,type:"hidden",value:h})}else{var p=f.length>0?f.map(function(_,m){return q.createElement("input",{key:"i-".concat(m),name:u,type:"hidden",value:r.getOptionValue(_)})}):q.createElement("input",{name:u,type:"hidden",value:""});return q.createElement("div",null,p)}else{var g=f[0]?this.getOptionValue(f[0]):"";return q.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var r=this.commonProps,o=this.state,s=o.ariaSelection,a=o.focusedOption,l=o.focusedValue,u=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return q.createElement(uD,Ne({},r,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:a,focusedValue:l,isFocused:u,selectValue:d,focusableOptions:f,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var r=this.getComponents(),o=r.Control,s=r.IndicatorsContainer,a=r.SelectContainer,l=r.ValueContainer,u=this.props,d=u.className,f=u.id,h=u.isDisabled,p=u.menuIsOpen,g=this.state.isFocused,_=this.commonProps=this.getCommonProps();return q.createElement(a,Ne({},_,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),q.createElement(o,Ne({},_,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:p}),q.createElement(l,Ne({},_,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),q.createElement(s,Ne({},_,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(r,o){var s=o.prevProps,a=o.clearFocusValueOnUpdate,l=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,h=o.instancePrefix,p=r.options,g=r.value,_=r.menuIsOpen,m=r.inputValue,c=r.isMulti,v=mv(g),x={};if(s&&(g!==s.value||p!==s.options||_!==s.menuIsOpen||m!==s.inputValue)){var y=_?zD(r,v):[],C=_?Pv(Gl(r,v),"".concat(h,"-option")):[],b=a?VD(o,v):null,w=HD(o,y),A=yd(C,w);x={selectValue:v,focusedOption:w,focusedOptionId:A,focusableOptionsWithIds:C,focusedValue:b,clearFocusValueOnUpdate:!1}}var T=l!=null&&r!==s?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{},S=u,P=d&&f;return d&&!P&&(S={value:Sl(c,v,v[0]||null),options:v,action:"initial-input-focus"},P=!f),(u==null?void 0:u.action)==="initial-input-focus"&&(S=null),Le(Le(Le({},x),T),{},{prevProps:r,ariaSelection:S,prevWasFocused:P})}}]),n}(q.Component);py.defaultProps=BD;var WD=q.forwardRef(function(t,e){var n=JA(t);return q.createElement(py,Ne({ref:e},n))}),XD=WD;const jD=()=>{const[t,e]=q.useState([]),n=q.useRef(null),i=q.useRef(null),r=q.useRef(null),o=q.useRef(null),s=q.useRef(null),a=q.useRef({}),[l,u]=q.useState(!1),d=q.useRef({}),[f,h]=q.useState(null);q.useState("canvas");const[p,g]=q.useState(null),_=q.useRef(new Y1),m=q.useRef(new He),[c,v]=q.useState(null),[x,y]=q.useState({x:0,y:0}),[C,b]=q.useState("graph"),[w,A]=q.useState(null),[T,S]=q.useState({x:0,y:0}),P=[{id:1,name:"felix",tags:["Defi"],twitter:"https://x.com/felixprotocol",logo:"/images/logos/felix-logo.png"},{id:2,name:"HyperDitto",tags:["Tools"],twitter:"https://x.com/hyperditto",logo:"/images/logos/hyperditto.png"},{id:3,name:"hyperland",tags:["Defi","Staking"],twitter:"https://x.com/hyperlendx",logo:"/images/logos/hyperland-logo.png"},{id:4,name:"stHYPE",tags:["Staking","Defi"],twitter:"https://x.com/stakedhype",logo:"/images/logos/sthype-logo.png"},{id:5,name:"Katōshi",tags:["Trading","Data"],twitter:"https://x.com/KatoshiAI",logo:"/images/logos/katoshi-logo.png"},{id:6,name:"HyperSwap",tags:["Dex","Tools"],twitter:"https://x.com/HyperSwapX",logo:"/images/logos/hyperswap-logo.png"},{id:7,name:"Kinetiq",tags:["LST"],twitter:"https://x.com/kinetiq_xyz",logo:"/images/logos/kinetiq-logo.png"},{id:8,name:"HyBridge",tags:["Infra"],twitter:"https://x.com/HyBridgeHL",logo:"/images/logos/hybridge-logo.png"},{id:9,name:"HL Names",tags:["Tools","Social"],twitter:"https://x.com/hlnames",logo:"/images/logos/hl-names-logo.png"},{id:10,name:"fanfun",tags:["Social","Meme"],twitter:"https://x.com/fan_dot_fun",logo:"/images/logos/funfun-logo.png"},{id:11,name:"Kieko Finance",tags:["Defi"],twitter:"https://x.com/KeikoFinance",logo:"/images/logos/kieko-finance-logo.png"},{id:12,name:"HFun",tags:["Trading","Social"],twitter:"https://x.com/Hypurrfun",logo:"/images/logos/hfun-logo.png"},{id:13,name:"pvp.trade",tags:["Trading","Social"],twitter:"https://x.com/pvp_dot_trade",logo:"/images/logos/pvp-trade-logo.png"},{id:14,name:"HyperFun",tags:["GambleFi"],twitter:"https://x.com/hyperfunX",logo:"/images/logos/hyperfun-logo.png"},{id:15,name:"PurrBurn",tags:["Data"],twitter:"https://x.com/janklimo",logo:"/images/logos/purrburn-logo.png"},{id:16,name:"Hypurrscan",tags:["Explorer","Data"],twitter:"https://x.com/HypurrScan",logo:"/images/logos/hypurrscan-logo.png"},{id:17,name:"Yeeti",tags:["Meme"],twitter:"https://x.com/YeetiOnHL",logo:"/images/logos/yeeti-logo.png"},{id:18,name:"Catbal",tags:["Meme"],twitter:"https://x.com/CatCabal_hl",logo:"/images/logos/catcabal-logo.png"},{id:19,name:"Pip",tags:["Meme"],twitter:"https://x.com/PipOnHL",logo:"/images/logos/pip-logo.png"},{id:20,name:"DeFi LLama",tags:["Analytics","Data"],twitter:"https://x.com/DefiLlama",logo:"/images/logos/defillama-logo.png"},{id:22,name:"Hyperbeat",tags:["Infra","Staking"],twitter:"https://x.com/0xHyperBeat",logo:"/images/logos/hyperbeat-logo.png"},{id:23,name:"Liquid Start",tags:["Defi"],twitter:"https://x.com/Liquid_Start",logo:"/images/logos/liquidstart-logo.png"},{id:24,name:"Rage Trade",tags:["Trading"],twitter:"https://x.com/rage_trade",logo:"/images/logos/rage-trade.png"},{id:25,name:"Hypurr Finance",tags:["Defi"],twitter:"https://x.com/hypurrfi",logo:"/images/logos/hypurrfinance-logo.png"},{id:26,name:"Hyperstats",tags:["Analytics","Tools"],twitter:"https://x.com/hyperstats_xyz",logo:"/images/logos/hyperstats-logo.png"},{id:27,name:"VegasHL",tags:["GambleFi"],twitter:"https://x.com/vegas_hl",logo:"/images/logos/vegas-logo.png"},{id:28,name:"Hypervisor",tags:["Data","Analytics"],twitter:"https://x.com/Hypervisor_hl",logo:"/images/logos/hypervisor-logo.png"},{id:29,name:"Harmonix Finance",tags:["Yield","Defi"],twitter:"https://x.com/harmonixfi",logo:"/images/logos/harmony-logo.png"},{id:30,name:"RNDM",tags:["Defi"],twitter:"https://x.com/RNDM_IO",logo:"/images/logos/rndm-logo.png"},{id:31,name:"MIM Spell",tags:["Yield","Defi"],twitter:"https://x.com/mim_spell",logo:"/images/logos/mim-logo.png"},{id:32,name:"Nucleus Earn",tags:["Defi"],twitter:"https://x.com/nucleusearn",logo:"/images/logos/nucleus-logo.png"},{id:33,name:"Thunder Labs",tags:["LST"],twitter:"https://x.com/ThunderheadLabs",logo:"/images/logos/thunderlabs-logo.png"},{id:34,name:"KittenSwap",tags:["Dex"],twitter:"https://x.com/kittenswaphype",logo:"/images/logos/kittenswap-logo.png"},{id:35,name:"Hyperterminal",tags:["Analytics","Trading"],twitter:"https://x.com/hyterminal",logo:"/images/logos/hyperterminal-logo.png"},{id:36,name:"HyperScanner",tags:["Analytics","Explorer"],twitter:"https://x.com/hyper_scanner",logo:"/images/logos/hyperscanner-png.png"},{id:37,name:"Pyth",tags:["Oracle","Infra"],twitter:"https://x.com/PythNetwork",logo:"/images/logos/pyth-logo.png"},{id:38,name:"StorkOracle",tags:["Oracle","Infra"],twitter:"https://x.com/StorkOracle",logo:"/images/logos/storkoracle-logo.png"},{id:39,name:"Mypurrfolio",tags:["Analytics","Data"],twitter:"https://x.com/mypurrfolio",logo:"/images/logos/mypurrfolio-logo.png"},{id:40,name:"Insilico Terminal",tags:["Trading","Analytics"],twitter:"https://x.com/InsilicoTrading",logo:"/images/logos/insilico-logo.png"},{id:41,name:"memedata",tags:["Analytics"],twitter:"https://x.com/shinji2048",logo:"/images/logos/shinji2048.png"},{id:42,name:"Redstone",tags:["Oracle","Infra"],twitter:"https://x.com/redstone_defi",logo:"/images/logos/redstone-logo.png"},{id:43,name:"Hypers",tags:["NFT"],twitter:"https://x.com/HypersOnHL",logo:"/images/logos/HypersOnHL-logo.png"},{id:44,name:"Drip.trade",tags:["NFT"],twitter:"https://x.com/drip__trade",logo:"/images/logos/driptrade-logo.png"},{id:45,name:"Schizo",tags:["Meme"],twitter:"https://x.com/schizo_on_hl",logo:"/images/logos/schizo-logo.png"},{id:46,name:"Peri Pair Bot",tags:["Trading"],twitter:"https://x.com/peripairbot",logo:"/images/logos/peripairbot-logo.png"},{id:47,name:"Vapor",tags:["Social","AI"],twitter:"https://x.com/vaporwarefun",logo:"/images/logos/vapor-logo.png"},{id:48,name:"Hey Jeff",tags:["Tools"],twitter:"https://x.com/janklimo",logo:"/images/logos/peripairbot-logo.png"},{id:49,name:"Hypurr Collective",tags:["Community"],twitter:"https://x.com/hypurr_co",logo:"/images/logos/hypurr-logo.png"},{id:50,name:"Panda",tags:["Meme","Community"],twitter:"https://x.com/panda_on_hl",logo:"/images/logos/panda-logo.png"},{id:51,name:"LadyOnHL",tags:["Meme"],twitter:"https://x.com/lady_on_hl",logo:"/images/logos/ladyhl-logo.png"},{id:52,name:"HypurrDash",tags:["Analytics","Data"],twitter:"https://x.com/hypurrdash",logo:"/images/logos/hyperdash-logo.png"},{id:53,name:"WashOnHL",tags:["Trading"],twitter:"https://x.com/wash_on_hl",logo:"/images/logos/washsniper-logo.png"},{id:54,name:"HyperTracker",tags:["Tools"],twitter:"https://x.com/NMTD8/status/1871588493283270733",logo:"/images/logos/hypertracker-logo.png"},{id:55,name:"Hyperlend Explorer",tags:["Explorer"],twitter:"https://explorer.hyperlend.finance/",logo:"/images/logos/hyperland-logo.png"},{id:56,name:"ASXN",tags:["Data"],twitter:"https://x.com/asxn_r/status/1873668265450598613",logo:"/images/logos/asxn-logo.png"},{id:57,name:"Hypertrack",tags:["Tools"],twitter:"https://x.com/hyperlendx/status/1855309389814432163",logo:"/images/logos/hypertrack-logo.png"},{id:58,name:"Tholos",tags:["Tools"],twitter:"https://x.com/TholosApp",logo:"/images/logos/tholos-logo.png"},{id:59,name:"Octis",tags:["Trading"],twitter:"https://x.com/octis_808",logo:"/images/logos/octis.png"},{id:60,name:"Hypio",tags:["NFT","Community"],twitter:"https://x.com/HypioHL",logo:"/images/logos/hypio.png"},{id:61,name:"Hyperflip",tags:["GambleFi"],twitter:"https://x.com/hypercoinflip",logo:"/images/logos/hyperflip.png"},{id:62,name:"USDC Inflows",tags:["Data"],twitter:"https://x.com/mogie__/status/1881818562274459701",logo:"/images/logos/mogie.png"},{id:63,name:"Hyperdelta",tags:["Trading"],twitter:"https://x.com/HyperdeltaX",logo:"/images/logos/hyperdelta.png"},{id:64,name:"Hypervol",tags:["Trading"],twitter:"https://x.com/Hypervol_xyz",logo:"/images/logos/hypervol.png"},{id:65,name:"Kibl",tags:["Defi"],twitter:"https://x.com/kiblprotocol",logo:"/images/logos/kibl.png"},{id:66,name:"Marbles",tags:["RWA"],twitter:"https://x.com/marblesrwa",logo:"/images/logos/marbles-logo.png"},{id:68,name:"Liquidlaunch",tags:["AI"],twitter:"https://x.com/LiquidLaunchHL",logo:"/images/logos/liquidlaunch-logo.png"},{id:69,name:"Autist",tags:["Meme"],twitter:"https://x.com/autisthyper",logo:"/images/logos/autist.png"},{id:70,name:"HCR Bot",tags:["Infra"],twitter:"https://x.com/HCR_BOT",logo:"/images/logos/hcrbot-logo.png"},{id:71,name:"Liquina",tags:["Infra"],twitter:"https://x.com/LiquinaHL",logo:"/images/logos/liquina.png"},{id:72,name:"Dexari",tags:["Trading","Mobile"],twitter:"https://x.com/DexariDotCom",logo:"/images/logos/dexari.png"},{id:73,name:"Hypurr Markets",tags:["Tools"],twitter:"https://x.com/HypurrMarkets",logo:"/images/logos/hypurrmarkets.png"},{id:74,name:"Hype Terminal",tags:["Trading"],twitter:"https://x.com/hype_terminal",logo:"/images/logos/hypeterminal.png"},{id:74,name:"HL Fund",tags:["Investment"],twitter:"https://x.com/hl_fund",logo:"/images/logos/hlfund.png"},{id:74,name:"Hyperrich",tags:["Trading","Tools"],twitter:"https://x.com/hyperrichdotfun",logo:"/images/logos/Hyperrich.png"}],B=["Defi","Dex","Meme","Staking","Trading","Infra","Social","Data","Explorer","Analytics","GambleFi","Yield","LST","Oracle","Tools","Community","AI","NFT","RWA","Mobile","Investment"].map(I=>({value:I,label:I})),K=()=>{const I=n.current,j=I.clientWidth,J=I.clientHeight,$=new D1;i.current=$,$.background=new rt(796966);const se=new Tn(75,j/J,.1,1e3);r.current=se,se.position.z=500;const _e=new LA({canvas:I,antialias:!0});o.current=_e,_e.setSize(j,J),_e.setPixelRatio(window.devicePixelRatio);const ae=new NA(se,_e.domElement);s.current=ae,ae.enableDamping=!0,ae.dampingFactor=.05,ae.enablePan=!1,ae.minDistance=200,ae.maxDistance=800,ae.enableRotate=!0,ae.rotateSpeed=.5},Y=(I,j)=>{const J=new _u(15,32),se=new V1().load(I.logo,Oe=>{Oe.minFilter=zn,Oe.magFilter=zn,Oe.encoding=void 0}),_e=new js({map:se,transparent:!0,side:ei}),ae=new Vn(J,_e);return ae.position.copy(j),ae.userData.type="project",ae.userData.id=I.id,ae},G=(I,j)=>{const J=new _u(10,32),$=new js({color:9960676,transparent:!0,opacity:.8}),se=new Vn(J,$);se.position.copy(j),se.userData.type="category",se.userData.category=I;const _e=new Ta(40,10),ae=document.createElement("canvas"),Oe=ae.getContext("2d");ae.width=256,ae.height=64,Oe.fillStyle="white",Oe.font="bold 24px Arial",Oe.textAlign="center",Oe.fillText(I,128,32);const Te=new U1(ae),Pe=new js({map:Te,transparent:!0,side:ei}),D=new Vn(_e,Pe);return D.position.y=-20,se.add(D),se},Q=(I,j,J=.3)=>{const $=[I,j],se=new _i().setFromPoints($),_e=new px({color:9960676,transparent:!0,opacity:J});return new N1(se,_e)},L=I=>{var se,_e;if(C!=="graph")return;const J=n.current.getBoundingClientRect();m.current.x=(I.clientX-J.left)/J.width*2-1,m.current.y=-((I.clientY-J.top)/J.height)*2+1,_.current.setFromCamera(m.current,r.current);const $=_.current.intersectObjects(i.current.children,!0);if($.length>0){const ae=(se=$.find(Te=>Te.object.userData&&Te.object.userData.type==="category"))==null?void 0:se.object,Oe=(_e=$.find(Te=>Te.object.userData&&Te.object.userData.type==="project"))==null?void 0:_e.object;if(ae)A({type:"category",name:ae.userData.category});else if(Oe){const Te=P.find(Pe=>Pe.id===Oe.userData.id);A({type:"project",name:Te.name,logo:Te.logo})}else A(null);S({x:I.clientX,y:I.clientY})}else A(null)},X=()=>{A(null)},Z=I=>{var se,_e;const J=n.current.getBoundingClientRect();m.current.x=(I.clientX-J.left)/J.width*2-1,m.current.y=-((I.clientY-J.top)/J.height)*2+1,_.current.setFromCamera(m.current,r.current);const $=_.current.intersectObjects(i.current.children,!0);if($.length>0){const ae=(se=$.find(Te=>Te.object.userData&&Te.object.userData.type==="category"))==null?void 0:se.object,Oe=(_e=$.find(Te=>Te.object.userData&&Te.object.userData.type==="project"))==null?void 0:_e.object;if(ae){const Te=ae.userData.category;g(Pe=>Pe===Te?null:Te),v(null)}else if(Oe){const Te=P.find(Pe=>Pe.id===Oe.userData.id);v(Te),y({x:I.clientX,y:I.clientY})}else v(null)}},ue=()=>{const I=i.current;for(;I.children.length>0;)I.remove(I.children[0]);const j=new W1(16777215,1,0);j.position.set(0,200,0),I.add(j);const J=new j1(16777215,.5);I.add(J);const $=P.filter(ae=>{const Oe=t.length===0||t.some(Pe=>ae.tags.includes(Pe.value)),Te=!p||ae.tags.includes(p);return Oe&&Te}),se=new Map,_e=[...new Set($.flatMap(ae=>ae.tags))];_e.forEach((ae,Oe)=>{const Te=1-Oe/(_e.length-1)*2,Pe=Math.sqrt(1-Te*Te),D=Oe*Math.PI*(3-Math.sqrt(5)),kt=new F(Pe*Math.cos(D)*400,Te*400,Pe*Math.sin(D)*400),Ve=G(ae,kt);ae===p&&(Ve.material.color.setHex(16750848),Ve.material.opacity=1),I.add(Ve),se.set(ae,Ve)}),$.forEach((ae,Oe)=>{const Te=1-Oe/($.length-1)*2,Pe=Math.sqrt(1-Te*Te),D=Oe*Math.PI*(3-Math.sqrt(5)),kt=new F(Pe*Math.cos(D)*200,Te*200,Pe*Math.sin(D)*200),Ve=Y(ae,kt);I.add(Ve),a.current[ae.id]=Ve,ae.tags.forEach(Ye=>{const be=se.get(Ye);if(be){const ht=Q(Ve.position,be.position,Ye===p?.8:.3);I.add(ht)}})})},ce=()=>{o.current&&(requestAnimationFrame(ce),Object.values(a.current).forEach(I=>{I.quaternion.copy(r.current.quaternion)}),i.current.children.forEach(I=>{I.userData&&I.userData.type==="category"&&I.quaternion.copy(r.current.quaternion)}),s.current.update(),o.current.render(i.current,r.current))};q.useEffect(()=>{K(),ue(),ce();const I=()=>{if(!n.current||!r.current||!o.current)return;const j=n.current,J=j.parentElement,$=J.clientWidth,se=J.clientHeight;j.style.width=`${$}px`,j.style.height=`${se}px`;const _e=window.devicePixelRatio||1;j.width=$*_e,j.height=se*_e,r.current.aspect=$/se,r.current.updateProjectionMatrix(),o.current.setSize($,se,!1),o.current.setPixelRatio(_e)};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]),q.useEffect(()=>{ue()},[p,t]),q.useEffect(()=>{(async()=>{const j={},J=P.map($=>new Promise(se=>{if(j[$.logo]){d.current[$.id]=j[$.logo],se();return}const _e=new Image;_e.onload=()=>{j[$.logo]=_e,d.current[$.id]=_e,se()},_e.onerror=()=>{console.warn(`Failed to load image for ${$.name} (${$.logo})`),se()},_e.src=$.logo}));await Promise.all(J),u(!0)})()},[]),q.useEffect(()=>{const I=async()=>{try{const $=await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=hyperliquid&vs_currencies=usd")).json();h($.hyperliquid.usd)}catch(J){console.error("Error fetching crypto price:",J),h("N/A")}};I();const j=setInterval(I,6e4);return()=>clearInterval(j)},[]),q.useEffect(()=>{const I=n.current;if(I)return I.addEventListener("click",Z),()=>I.removeEventListener("click",Z)},[]),q.useEffect(()=>{const I=n.current;if(I)return I.addEventListener("mousemove",L),I.addEventListener("mouseleave",X),()=>{I.removeEventListener("mousemove",L),I.removeEventListener("mouseleave",X)}},[C]);const Ue=()=>ge.jsxs("div",{className:"overflow-y-auto h-full pt-16 pb-4",children:[" ",ge.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4",children:P.filter(I=>{const j=t.length===0||t.some($=>I.tags.includes($.value)),J=!p||I.tags.includes(p);return j&&J}).map(I=>ge.jsxs("div",{className:"bg-dark-green border border-mint rounded-lg p-4 flex flex-col gap-3",children:[ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx("img",{src:I.logo,alt:I.name,className:"w-10 h-10 rounded-full"}),ge.jsx("h3",{className:"text-lg font-bold text-mint",children:I.name})]}),ge.jsxs("div",{className:"flex items-center justify-between",children:[ge.jsx("div",{className:"flex flex-wrap gap-2",children:I.tags.map((j,J)=>ge.jsx("span",{className:"px-2 py-1 bg-mint bg-opacity-20 text-mint rounded-full text-xs",children:j},J))}),ge.jsx("a",{href:I.twitter,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-mint text-dark-green rounded-full hover:bg-opacity-80 transition-colors",title:"Twitter",children:ge.jsx(Km,{size:16})})]})]},I.id))})]});return ge.jsxs("div",{className:"flex flex-col h-screen bg-dark-green text-white",children:[ge.jsxs("header",{className:"bg-mint p-2 shadow-lg flex justify-between items-center",children:[ge.jsx("div",{className:"ml-10",children:ge.jsx("span",{className:"text-gray-900 font-bold text-xl",children:"onHL"})}),f&&ge.jsxs("div",{className:"mr-10 text-gray-900 font-medium flex items-center gap-x-2",children:["Hype:"," ",ge.jsxs("span",{children:["$",f==="N/A"?f:f.toFixed(2)]})]})]}),ge.jsxs("div",{className:"flex-grow relative overflow-hidden",children:[" ",ge.jsx("div",{className:"absolute inset-0",children:ge.jsxs("div",{className:"h-full relative",children:[ge.jsxs("div",{className:"absolute top-4 left-4 right-4 z-10 flex gap-4 items-center bg-dark-green p-2 rounded-lg",children:[ge.jsx("div",{className:"flex-grow",children:ge.jsx(XD,{isMulti:!0,options:B,value:t,onChange:e,className:"text-dark-green",placeholder:"Select categories..."})}),ge.jsx("button",{onClick:()=>b(C==="graph"?"directory":"graph"),className:"px-4 py-2 bg-mint text-dark-green rounded-lg hover:bg-opacity-80 transition-colors flex items-center gap-2 whitespace-nowrap",children:C==="graph"?ge.jsxs(ge.Fragment,{children:[ge.jsx(KM,{size:16}),"Directory View"]}):ge.jsxs(ge.Fragment,{children:[ge.jsx(ZM,{size:16}),"Graph View"]})}),p&&ge.jsxs("button",{onClick:()=>g(null),className:"px-4 py-2 bg-mint text-dark-green rounded-lg hover:bg-opacity-80 transition-colors flex items-center gap-2 whitespace-nowrap",children:[ge.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:ge.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"})}),"Reset View"]})]}),C==="graph"?ge.jsx("canvas",{ref:n,className:"w-full h-full rounded-xl bg-transparent"}):ge.jsx(Ue,{})]})}),C==="graph"&&c&&ge.jsx("div",{className:"fixed z-50 bg-dark-green border border-mint rounded-lg shadow-xl p-4",style:{left:x.x+10,top:x.y+10,transform:"translate(-50%, -50%)",width:"300px"},children:ge.jsxs("div",{className:"flex flex-col gap-4",children:[ge.jsxs("div",{className:"flex items-center gap-2",children:[ge.jsx("img",{src:c.logo,alt:c.name,className:"w-8 h-8 rounded-full"}),ge.jsx("h3",{className:"text-lg font-bold text-mint",children:c.name})]}),ge.jsxs("div",{className:"flex items-center justify-between",children:[ge.jsx("div",{className:"flex flex-wrap gap-2 flex-grow",children:c.tags.map((I,j)=>ge.jsx("span",{className:"px-3 py-1 bg-mint bg-opacity-20 text-mint rounded-full text-sm",children:I},j))}),ge.jsx("a",{href:c.twitter,target:"_blank",rel:"noopener noreferrer",className:"ml-2 p-2 bg-mint text-dark-green rounded-full hover:bg-opacity-80 transition-colors",title:"Twitter",children:ge.jsx(Km,{size:16})})]}),ge.jsx("button",{onClick:()=>v(null),className:"absolute top-2 right-2 text-mint hover:text-white transition-colors",children:ge.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:ge.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})}),C==="graph"&&w&&ge.jsx("div",{className:"fixed z-50 bg-dark-green border border-mint rounded-lg shadow-xl p-2",style:{left:T.x+10,top:T.y+10,pointerEvents:"none"},children:ge.jsxs("div",{className:"flex items-center gap-2",children:[w.type==="project"&&ge.jsx("img",{src:w.logo,alt:w.name,className:"w-6 h-6 rounded-full"}),ge.jsx("span",{className:"text-mint font-medium",children:w.name})]})})]}),ge.jsxs("footer",{className:"bg-[#97FCE4] p-4 shadow-lg",children:[ge.jsx("div",{className:"max-w-4xl mx-auto flex justify-center items-center",children:ge.jsx("span",{className:"text-gray-900 font-bold text-xl",children:"onHL"})}),ge.jsxs("div",{className:"flex row md:w-auto w-full items-center justify-center md:gap-4 gap-1 mt-4",children:[ge.jsxs("a",{href:"https://x.com/freddy_0x",target:"_blank",rel:"noopener noreferrer",className:"flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors",children:[ge.jsx("img",{src:"https://i.ibb.co/640F1X0/0xfreddy-1.png",alt:"Twitter",className:"md:w-5 md:h-5 w-3 h-3"}),ge.jsx("span",{className:"md:text-base text-xs",children:"@0xfreddy"})]}),ge.jsxs("a",{href:"https://x.com/Macr0Mark",target:"_blank",rel:"noopener noreferrer",className:"flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors",children:[ge.jsx("img",{src:"https://i.ibb.co/6WB6Rfy/macro-1.png",alt:"Twitter",className:"md:w-5 md:h-5 w-3 h-3"}),ge.jsx("span",{className:"md:text-base text-xs",children:"@Macr0Mark"})]}),ge.jsxs("a",{href:"https://x.com/Tonkavan",target:"_blank",rel:"noopener noreferrer",className:"flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors",children:[ge.jsx("img",{src:"https://i.ibb.co/sqYr1qG/tonka-1.png",alt:"Twitter",className:"md:w-5 md:h-5 w-3 h-3"}),ge.jsx("span",{className:"md:text-base text-xs",children:"@Tonkavan"})]}),ge.jsxs("a",{href:"https://x.com/hyperditto",target:"_blank",rel:"noopener noreferrer",className:"flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors",children:[ge.jsx("img",{src:"/images/logos/hyperditto.png",alt:"Twitter",className:"md:w-5 md:h-5 w-3 h-3"}),ge.jsx("span",{className:"md:text-base text-xs",children:"@hyperditto"})]})]})]})]})};Sd.createRoot(document.getElementById("root")).render(ge.jsx(Hv.StrictMode,{children:ge.jsx(jD,{})}));
