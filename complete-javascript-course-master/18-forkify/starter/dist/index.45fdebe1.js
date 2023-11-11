function t(t){return t&&t.__esModule?t.default:t}var e,r,n,o,i,a,c,u,s,l,f,p,v,h,g,d,y=globalThis,m={},b={},w=y.parcelRequire3a11;null==w&&((w=function(t){if(t in m)return m[t].exports;if(t in b){var e=b[t];delete b[t];var r={id:t,exports:{}};return m[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){b[t]=e},y.parcelRequire3a11=w),(0,w.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,n=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),w("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.45fdebe1.js","hfd23","icons.c14567a0.svg"]'));var _={},S={},O=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
O("object"==typeof self&&self)||O("object"==typeof y&&y)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||S||Function("return this")();var j={},E={};// Detect IE8's incomplete defineProperty implementation
j=!(E=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},x={};x=!E(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var k=Function.prototype.call;L=x?k.bind(k):function(){return k.apply(k,arguments)};var T={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;o=P&&!T.call({1:2},1)?function(t){var e=P(this,t);return!!e&&e.enumerable}:T;var M={};M=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var F={},I={},$={},D=Function.prototype,N=D.call,H=x&&D.bind.bind(N,N),R={},A=($=x?H:function(t){return function(){return N.apply(t,arguments)}})({}.toString),C=$("".slice);R=function(t){return C(A(t),8,-1)};var G=Object,U=$("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
I=E(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!G("z").propertyIsEnumerable(0)})?function(t){return"String"===R(t)?U(t,""):G(t)}:G;var q={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(t){return null==t};var B=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
q=function(t){if(z(t))throw new B("Can't call method on "+t);return t},F=function(t){return I(q(t))};var W={},Y={},V={},J={},K={},Q="object"==typeof document&&document.all,X=(K={all:Q,IS_HTMLDDA:void 0===Q&&void 0!==Q}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
J=K.IS_HTMLDDA?function(t){return"function"==typeof t||t===X}:function(t){return"function"==typeof t};var Z=K.all;V=K.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:J(t)||t===Z}:function(t){return"object"==typeof t?null!==t:J(t)};var tt={},te={};te=function(t,e){var r;return arguments.length<2?(r=S[t],J(r)?r:void 0):S[t]&&S[t][e]};var tr={};tr=$({}.isPrototypeOf);var tn={},to={},ti={},ta={};ta="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tc=S.process,tu=S.Deno,ts=tc&&tc.versions||tu&&tu.version,tl=ts&&ts.v8;tl&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(i=tl.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ta&&(!(i=ta.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ta.match(/Chrome\/(\d+)/))&&(a=+i[1]),ti=a;var tf=S.String;tn=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(to=!!Object.getOwnPropertySymbols&&!E(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tf(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ti&&ti<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tp=Object;tt=tn?function(t){return"symbol"==typeof t}:function(t){var e=te("Symbol");return J(e)&&tr(e.prototype,tp(t))};var tv={},th={},tg={},td=String;tg=function(t){try{return td(t)}catch(t){return"Object"}};var ty=TypeError;// `Assert: IsCallable(argument) is true`
th=function(t){if(J(t))return t;throw new ty(tg(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tv=function(t,e){var r=t[e];return z(r)?void 0:th(r)};var tm={},tb=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tm=function(t,e){var r,n;if("string"===e&&J(r=t.toString)&&!V(n=L(r,t))||J(r=t.valueOf)&&!V(n=L(r,t))||"string"!==e&&J(r=t.toString)&&!V(n=L(r,t)))return n;throw new tb("Can't convert object to primitive value")};var tw={},t_={};t_=!1;var tS={},tO={},tj=Object.defineProperty;tO=function(t,e){try{tj(S,t,{value:e,configurable:!0,writable:!0})}catch(r){S[t]=e}return e};var tE="__core-js_shared__";tS=S[tE]||tO(tE,{}),(tw=function(t,e){return tS[t]||(tS[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.2",mode:t_?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tL={},tx={},tk=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tx=function(t){return tk(q(t))};var tT=$({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tL=Object.hasOwn||function(t,e){return tT(tx(t),e)};var tP={},tM=0,tF=Math.random(),tI=$(1..toString);tP=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tI(++tM+tF,36)};var t$=S.Symbol,tD=tw("wks"),tN=tn?t$.for||t$:t$&&t$.withoutSetter||tP,tH=TypeError,tR=(tL(tD,e="toPrimitive")||(tD[e]=to&&tL(t$,e)?t$[e]:tN("Symbol."+e)),tD[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Y=function(t,e){if(!V(t)||tt(t))return t;var r,n=tv(t,tR);if(n){if(void 0===e&&(e="default"),r=L(n,t,e),!V(r)||tt(r))return r;throw new tH("Can't convert object to primitive value")}return void 0===e&&(e="number"),tm(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
W=function(t){var e=Y(t,"string");return tt(e)?e:e+""};var tA={},tC={},tG=S.document,tU=V(tG)&&V(tG.createElement);tC=function(t){return tU?tG.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tA=!j&&!E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tC("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tq=Object.getOwnPropertyDescriptor;n=j?tq:function(t,e){if(t=F(t),e=W(e),tA)try{return tq(t,e)}catch(t){}if(tL(t,e))return M(!L(o,t,e),t[e])};var tz={},tB={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tB=j&&E(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tW={},tY=String,tV=TypeError;// `Assert: Type(argument) is Object`
tW=function(t){if(V(t))return t;throw new tV(tY(t)+" is not an object")};var tJ=TypeError,tK=Object.defineProperty,tQ=Object.getOwnPropertyDescriptor,tX="enumerable",tZ="configurable",t0="writable";c=j?tB?function(t,e,r){if(tW(t),e=W(e),tW(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t0 in r&&!r[t0]){var n=tQ(t,e);n&&n[t0]&&(t[e]=r.value,r={configurable:tZ in r?r[tZ]:n[tZ],enumerable:tX in r?r[tX]:n[tX],writable:!1})}return tK(t,e,r)}:tK:function(t,e,r){if(tW(t),e=W(e),tW(r),tA)try{return tK(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tJ("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tz=j?function(t,e,r){return c(t,e,M(1,r))}:function(t,e,r){return t[e]=r,t};var t1={},t2={},t3=Function.prototype,t4=j&&Object.getOwnPropertyDescriptor,t7=tL(t3,"name")&&(!j||j&&t4(t3,"name").configurable),t9={},t8=$(Function.toString);J(tS.inspectSource)||(tS.inspectSource=function(t){return t8(t)}),t9=tS.inspectSource;var t5={},t6={},et=S.WeakMap;t6=J(et)&&/native code/.test(String(et));var ee={},er=tw("keys");ee=function(t){return er[t]||(er[t]=tP(t))};var en={};en={};var eo="Object already initialized",ei=S.TypeError,ea=S.WeakMap;if(t6||tS.state){var ec=tS.state||(tS.state=new ea);/* eslint-disable no-self-assign -- prototype methods protection */ec.get=ec.get,ec.has=ec.has,ec.set=ec.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(t,e){if(ec.has(t))throw new ei(eo);return e.facade=t,ec.set(t,e),e},s=function(t){return ec.get(t)||{}},l=function(t){return ec.has(t)}}else{var eu=ee("state");en[eu]=!0,u=function(t,e){if(tL(t,eu))throw new ei(eo);return e.facade=t,tz(t,eu,e),e},s=function(t){return tL(t,eu)?t[eu]:{}},l=function(t){return tL(t,eu)}}var es=(t5={set:u,get:s,has:l,enforce:function(t){return l(t)?s(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!V(e)||(r=s(e)).type!==t)throw new ei("Incompatible receiver, "+t+" required");return r}}}).enforce,el=t5.get,ef=String,ep=Object.defineProperty,ev=$("".slice),eh=$("".replace),eg=$([].join),ed=j&&!E(function(){return 8!==ep(function(){},"length",{value:8}).length}),ey=String(String).split("String"),em=t2=function(t,e,r){"Symbol("===ev(ef(e),0,7)&&(e="["+eh(ef(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tL(t,"name")||t7&&t.name!==e)&&(j?ep(t,"name",{value:e,configurable:!0}):t.name=e),ed&&r&&tL(r,"arity")&&t.length!==r.arity&&ep(t,"length",{value:r.arity});try{r&&tL(r,"constructor")&&r.constructor?j&&ep(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=es(t);return tL(n,"source")||(n.source=eg(ey,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=em(function(){return J(this)&&el(this).source||t9(this)},"toString"),t1=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(J(r)&&t2(r,i,n),n.global)o?t[e]=r:tO(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:c(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var eb={},ew={},e_={},eS={},eO={},ej={},eE=Math.ceil,eL=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
ej=Math.trunc||function(t){var e=+t;return(e>0?eL:eE)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eO=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:ej(e)};var ex=Math.max,ek=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eS=function(t,e){var r=eO(t);return r<0?ex(r+e,0):ek(r,e)};var eT={},eP={},eM=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eP=function(t){return t>0?eM(eO(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eT=function(t){return eP(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eF=function(t){return function(e,r,n){var o,i=F(e),a=eT(i),c=eS(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eI={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eF(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eF(!1)}.indexOf,e$=$([].push);e_=function(t,e){var r,n=F(t),o=0,i=[];for(r in n)!tL(en,r)&&tL(n,r)&&e$(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tL(n,r=e[o++])&&(~eI(i,r)||e$(i,r));return i};var eD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(t){return e_(t,eD)},p=Object.getOwnPropertySymbols;var eN=$([].concat);// all object keys, includes non-enumerable and symbols
ew=te("Reflect","ownKeys")||function(t){var e=f(tW(t));return p?eN(e,p(t)):e},eb=function(t,e,r){for(var o=ew(e),i=0;i<o.length;i++){var a=o[i];tL(t,a)||r&&tL(r,a)||c(t,a,n(e,a))}};var eH={},eR=/#|\.prototype\./,eA=function(t,e){var r=eG[eC(t)];return r===eq||r!==eU&&(J(e)?E(e):!!e)},eC=eA.normalize=function(t){return String(t).replace(eR,".").toLowerCase()},eG=eA.data={},eU=eA.NATIVE="N",eq=eA.POLYFILL="P";eH=eA,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/_=function(t,e){var r,o,i,a,c,u=t.target,s=t.global,l=t.stat;if(r=s?S:l?S[u]||tO(u,{}):(S[u]||{}).prototype)for(o in e){// contained in target
if(a=e[o],i=t.dontCallGetSet?(c=n(r,o))&&c.value:r[o],!eH(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;eb(a,i)}(t.sham||i&&i.sham)&&tz(a,"sham",!0),t1(r,o,a,t)}};var ez={},eB={},eW=Function.prototype,eY=eW.apply,eV=eW.call;// eslint-disable-next-line es/no-reflect -- safe
eB="object"==typeof Reflect&&Reflect.apply||(x?eV.bind(eY):function(){return eV.apply(eY,arguments)});var eJ={},eK={},eQ=(eK=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(t))return $(t)})(eK.bind);// optional / simple context binding
eJ=function(t,e){return th(t),void 0===e?t:x?eQ(t,e):function(){return t.apply(e,arguments)}};var eX={};eX=te("document","documentElement");var eZ={};eZ=$([].slice);var e0={},e1=TypeError;e0=function(t,e){if(t<e)throw new e1("Not enough arguments");return t};var e2={};// eslint-disable-next-line redos/no-vulnerable -- safe
e2=/(?:ipad|iphone|ipod).*applewebkit/i.test(ta);var e3={};e3="process"===R(S.process);var e4=S.setImmediate,e7=S.clearImmediate,e9=S.process,e8=S.Dispatch,e5=S.Function,e6=S.MessageChannel,rt=S.String,re=0,rr={},rn="onreadystatechange";E(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
v=S.location});var ro=function(t){if(tL(rr,t)){var e=rr[t];delete rr[t],e()}},ri=function(t){return function(){ro(t)}},ra=function(t){ro(t.data)},rc=function(t){// old engines have not location.origin
S.postMessage(rt(t),v.protocol+"//"+v.host)};e4&&e7||(e4=function(t){e0(arguments.length,1);var e=J(t)?t:e5(t),r=eZ(arguments,1);return rr[++re]=function(){eB(e,void 0,r)},h(re),re},e7=function(t){delete rr[t]},e3?h=function(t){e9.nextTick(ri(t))}:e8&&e8.now?h=function(t){e8.now(ri(t))}:e6&&!e2?(d=(g=new e6).port2,g.port1.onmessage=ra,h=eJ(d.postMessage,d)):S.addEventListener&&J(S.postMessage)&&!S.importScripts&&v&&"file:"!==v.protocol&&!E(rc)?(h=rc,S.addEventListener("message",ra,!1)):h=rn in tC("script")?function(t){eX.appendChild(tC("script"))[rn]=function(){eX.removeChild(this),ro(t)}}:function(t){setTimeout(ri(t),0)});var ru=(ez={set:e4,clear:e7}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
_({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==ru},{clearImmediate:ru});var rs=ez.set,rl={},rf={};/* global Bun -- Deno case */rf="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=S.Function,rv=/MSIE .\./.test(ta)||rf&&((r=S.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl=function(t,e){var r=e?2:1;return rv?function(n,o/* , ...arguments */){var i=e0(arguments.length,1)>r,a=J(n)?n:rp(n),c=i?eZ(arguments,r):[],u=i?function(){eB(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var rh=S.setImmediate?rl(rs,!1):rs;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
_({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rh},{setImmediate:rh});var rg={};rg=new URL("icons.c14567a0.svg",import.meta.url).toString();/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof d?r:d).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new x(i||[]),c=p,function(r,o){if(c===v)throw Error("Generator is already running");if(c===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(u){if(u===g)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=v;var s=f(t,n,a);if("normal"===s.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?h:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=s.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",v="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function d(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==r&&n.call(_,a)&&// of the polyfill.
(b=_);var S=m.prototype=d.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function O(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
s.value=t,a(s)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return y.prototype=m,o(S,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,function(){return this}),t.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
O(S),s(S,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
s(S,a,function(){return this}),s(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),g}},t}({});try{regeneratorRuntime=rd}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rd:Function("r","regeneratorRuntime = r")(rd)}const ry=document.querySelector(".recipe"),rm=function(e){let r=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/t(rg)}#icon-loader"></use>
          </svg>
        </div>
  `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",r)},rb=async function(){try{// 1. Loading recipe
rm(ry);let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),r=await e.json();if(!e.ok)throw Error(`${r.message} (${e.status})`);let{recipe:n}=r.data;n={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,serving:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(n);//2. Reder recipi
let o=`
    <figure class="recipe__fig">
      <img src="${n.image}" alt="${n.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${n.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/t(rg)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${n.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/t(rg)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${n.serving}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">

        ${n.ingredients.map(t=>`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
              </div>
            </li>
          `).join("")} 
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${n.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${n.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;ry.innerHTML="",ry.insertAdjacentHTML("afterbegin",o)}catch(t){alert(t)}};// showRecipe();
window.addEventListener("hashchange",rb);//# sourceMappingURL=index.45fdebe1.js.map

//# sourceMappingURL=index.45fdebe1.js.map
