var eC=Object.defineProperty;var tC=(e,t,r)=>t in e?eC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ye=(e,t,r)=>(tC(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();class hc{constructor(t){ye(this,"data");ye(this,"prev");ye(this,"next");this.data=t,this.prev=null,this.next=null}}class rl{constructor(){ye(this,"head");ye(this,"tail");ye(this,"size");this.head=null,this.tail=null,this.size=0}[Symbol.iterator](){let r=this.head;return{[Symbol.iterator](){return this},next(){if(r){const o=r;return r=r.next,{value:o}}else return{value:null,done:!0}}}}add(t){let r=new hc(t);this.head==null?(this.head=r,this.tail=r):(r.prev=this.tail,this.tail.next=r,this.tail=r),this.size++}insertBefore(t,r){let o=new hc(r);t.prev==null?(this.head=o,t.prev=o,o.next=t):(o.next=t,o.prev=t.prev,t.prev.next=o,t.prev=o),this.size++}insertAfter(t,r){let o=new hc(r);t.next==null?(this.tail=o,t.next=o,o.prev=t):(o.next=t.next,t.next.prev=o,o.prev=t,t.next=o),this.size++}delete(t){this.head==null||t==null||(this.head==t&&(this.head=this.head.next,this.head!=null&&(this.head.prev=null)),this.tail==t&&(this.tail=this.tail.prev,this.tail!=null&&(this.tail.next=null)),t.prev!=null&&(t.prev.next=t.next),t.next!=null&&(t.next.prev=t.prev),this.size--)}traverseForward(t){let r=this.head,o=0;for(;r!=null;)t(r.data,o,r,this),r=r.next,o++}traverseBackward(t){let r=this.tail,o=0;for(;r!=null;)t(r.data,o,r,this),r=r.prev,o++}getHead(){return this.head}getTail(){return this.tail}toArray(){let t=[],r=this.head;for(;r!=null;)t.push(r.data),r=r.next;return t}toArrayOfTraverseBackward(){let t=[];return this.traverseBackward(r=>{t.push(r)}),t}static from(t){let r=new rl;for(let o of t)r.add(o);return r}}function rC(){return{initialization(e){e.assignConfig({format(t,r,o){return t.getConfig().origin?[`%c[${t.chain.toArrayOfTraverseBackward().join(">")}]
`,Gc[r],...o]:[`%c[${t.namespace}]
`,Gc[r],...o]}},!1)},config:{origin:!0}}}function oC(){return{filter(e){let t=e.getConfig().include;return e.chain.traverseBackward(r=>{if(typeof t=="boolean")return t;if(t===void 0)return!1;t=t[r]}),typeof t=="boolean"?t:!1},config:{include:!0}}}const nC={[0]:"error",[1]:"warn",[2]:"log",[3]:"info",[4]:"info",[5]:"debug",[6]:"info"},Gc={[2]:"color: green;",[1]:"color: orange;",[0]:"color: red;",[3]:"color: #4bcffa",[4]:"color: #ccae62",[5]:"color: #7158e2",[6]:"color: #3d3d3d"},iC=(e,t,r)=>[`%c${e.namespace}`,Gc[t],...r],dn=class{constructor(t="root",r=null,o){ye(this,"namespace");ye(this,"config",null);ye(this,"parent");ye(this,"plugins");ye(this,"chain",new rl);var n;o&&(this.config=o),this.namespace=t,this.plugins=(n=r==null?void 0:r.plugins)!=null?n:[],this.setParrent(r)}get format(){var t;return(t=this.getConfig().format)!=null?t:iC}setConfig(t){return this.config=t,this}getConfig(){var t,r,o;return(o=(r=this.config)!=null?r:(t=this.parent)==null?void 0:t.getConfig())!=null?o:this.config={}}assignConfig(t,r=!0){return this.setConfig(r?Object.assign({},this.config,t):Object.assign(this.config,t)),this}for(t){var n,i;if(t===void 0)return dn.lastLogger=(n=dn.lastLogger)!=null?n:ol;let r=(i=dn.lastLogger)!=null?i:ol,o=new dn(t,r);return dn.lastLogger=o,o}setParrent(t){this.parent=t;const r=new rl;this.chain=r;let o=this;const n=new Set;for(;o;){const i=o.namespace;if(n.has(i)){r.add(o.namespace),this.parent=null;return}n.add(i),r.add(o.namespace),o=o.parent}}addPlugin(t){var r;return t.config&&this.assignConfig(t.config),(r=t.initialization)==null||r.call(t,this),this.plugins.push(t),this}_log(t,r){this.plugins.every(o=>{var n,i;return(i=(n=o.filter)==null?void 0:n.call(o,this))!=null?i:!0})&&console[nC[t]](...this.format(this,t,r))}log(t,...r){return this._log(t,r),this}silly(...t){return this._log(6,t),this}debug(...t){return this._log(5,t),this}verbose(...t){return this._log(4,t),this}http(...t){return this._log(3,t),this}info(...t){return this._log(2,t),this}warn(...t){return this._log(1,t),this}error(...t){return this._log(0,t),this}};let Ka=dn;ye(Ka,"lastLogger",null);function sC(){return new Ka().addPlugin(oC()).addPlugin(rC())}const ol=sC();try{window&&(window.logger=ol),global&&(global.logger=ol)}catch{}logger.assignConfig({origin:!0});function Yu(e,t){const r=Object.create(null),o=e.split(",");for(let n=0;n<o.length;n++)r[o[n]]=!0;return t?n=>!!r[n.toLowerCase()]:n=>!!r[n]}const aC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lC=Yu(aC);function lm(e){return!!e||e===""}function Pi(e){if(we(e)){const t={};for(let r=0;r<e.length;r++){const o=e[r],n=ft(o)?dC(o):Pi(o);if(n)for(const i in n)t[i]=n[i]}return t}else{if(ft(e))return e;if(st(e))return e}}const cC=/;(?![^(]*\))/g,uC=/:(.+)/;function dC(e){const t={};return e.split(cC).forEach(r=>{if(r){const o=r.split(uC);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function $l(e){let t="";if(ft(e))t=e;else if(we(e))for(let r=0;r<e.length;r++){const o=$l(e[r]);o&&(t+=o+" ")}else if(st(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function w9(e){if(!e)return null;let{class:t,style:r}=e;return t&&!ft(t)&&(e.class=$l(t)),r&&(e.style=Pi(r)),e}const S9=e=>ft(e)?e:e==null?"":we(e)||st(e)&&(e.toString===fm||!ke(e.toString))?JSON.stringify(e,cm,2):String(e),cm=(e,t)=>t&&t.__v_isRef?cm(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[o,n])=>(r[`${o} =>`]=n,r),{})}:um(t)?{[`Set(${t.size})`]:[...t.values()]}:st(t)&&!we(t)&&!hm(t)?String(t):t,Je={},Jn=[],Cr=()=>{},fC=()=>!1,hC=/^on[^a-z]/,Pl=e=>hC.test(e),Zu=e=>e.startsWith("onUpdate:"),wt=Object.assign,Ju=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},pC=Object.prototype.hasOwnProperty,Be=(e,t)=>pC.call(e,t),we=Array.isArray,Qn=e=>Ll(e)==="[object Map]",um=e=>Ll(e)==="[object Set]",ke=e=>typeof e=="function",ft=e=>typeof e=="string",Qu=e=>typeof e=="symbol",st=e=>e!==null&&typeof e=="object",dm=e=>st(e)&&ke(e.then)&&ke(e.catch),fm=Object.prototype.toString,Ll=e=>fm.call(e),gC=e=>Ll(e).slice(8,-1),hm=e=>Ll(e)==="[object Object]",ed=e=>ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qa=Yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kl=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},mC=/-(\w)/g,Hr=kl(e=>e.replace(mC,(t,r)=>r?r.toUpperCase():"")),bC=/\B([A-Z])/g,kn=kl(e=>e.replace(bC,"-$1").toLowerCase()),Il=kl(e=>e.charAt(0).toUpperCase()+e.slice(1)),pc=kl(e=>e?`on${Il(e)}`:""),ws=(e,t)=>!Object.is(e,t),ss=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},nl=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},pm=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Nf;const vC=()=>Nf||(Nf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Jt;class gm{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!t&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}run(t){if(this.active){const r=Jt;try{return Jt=this,t()}finally{Jt=r}}}on(){Jt=this}off(){Jt=this.parent}stop(t){if(this.active){let r,o;for(r=0,o=this.effects.length;r<o;r++)this.effects[r].stop();for(r=0,o=this.cleanups.length;r<o;r++)this.cleanups[r]();if(this.scopes)for(r=0,o=this.scopes.length;r<o;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this.active=!1}}}function yC(e){return new gm(e)}function xC(e,t=Jt){t&&t.active&&t.effects.push(e)}function CC(){return Jt}function wC(e){Jt&&Jt.cleanups.push(e)}const td=e=>{const t=new Set(e);return t.w=0,t.n=0,t},mm=e=>(e.w&Fo)>0,bm=e=>(e.n&Fo)>0,SC=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Fo},EC=e=>{const{deps:t}=e;if(t.length){let r=0;for(let o=0;o<t.length;o++){const n=t[o];mm(n)&&!bm(n)?n.delete(e):t[r++]=n,n.w&=~Fo,n.n&=~Fo}t.length=r}},Xc=new WeakMap;let Qi=0,Fo=1;const Yc=30;let vr;const bn=Symbol(""),Zc=Symbol("");class rd{constructor(t,r=null,o){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,xC(this,o)}run(){if(!this.active)return this.fn();let t=vr,r=Mo;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=vr,vr=this,Mo=!0,Fo=1<<++Qi,Qi<=Yc?SC(this):jf(this),this.fn()}finally{Qi<=Yc&&EC(this),Fo=1<<--Qi,vr=this.parent,Mo=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vr===this?this.deferStop=!0:this.active&&(jf(this),this.onStop&&this.onStop(),this.active=!1)}}function jf(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let Mo=!0;const vm=[];function Li(){vm.push(Mo),Mo=!1}function ki(){const e=vm.pop();Mo=e===void 0?!0:e}function nr(e,t,r){if(Mo&&vr){let o=Xc.get(e);o||Xc.set(e,o=new Map);let n=o.get(r);n||o.set(r,n=td()),ym(n)}}function ym(e,t){let r=!1;Qi<=Yc?bm(e)||(e.n|=Fo,r=!mm(e)):r=!e.has(vr),r&&(e.add(vr),vr.deps.push(e))}function eo(e,t,r,o,n,i){const s=Xc.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(r==="length"&&we(e))s.forEach((l,c)=>{(c==="length"||c>=o)&&a.push(l)});else switch(r!==void 0&&a.push(s.get(r)),t){case"add":we(e)?ed(r)&&a.push(s.get("length")):(a.push(s.get(bn)),Qn(e)&&a.push(s.get(Zc)));break;case"delete":we(e)||(a.push(s.get(bn)),Qn(e)&&a.push(s.get(Zc)));break;case"set":Qn(e)&&a.push(s.get(bn));break}if(a.length===1)a[0]&&Jc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Jc(td(l))}}function Jc(e,t){const r=we(e)?e:[...e];for(const o of r)o.computed&&Wf(o);for(const o of r)o.computed||Wf(o)}function Wf(e,t){(e!==vr||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _C=Yu("__proto__,__v_isRef,__isVue"),xm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qu)),TC=od(),$C=od(!1,!0),PC=od(!0),Uf=LC();function LC(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const o=We(this);for(let i=0,s=this.length;i<s;i++)nr(o,"get",i+"");const n=o[t](...r);return n===-1||n===!1?o[t](...r.map(We)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){Li();const o=We(this)[t].apply(this,r);return ki(),o}}),e}function od(e=!1,t=!1){return function(o,n,i){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&i===(e?t?VC:_m:t?Em:Sm).get(o))return o;const s=we(o);if(!e&&s&&Be(Uf,n))return Reflect.get(Uf,n,i);const a=Reflect.get(o,n,i);return(Qu(n)?xm.has(n):_C(n))||(e||nr(o,"get",n),t)?a:yt(a)?s&&ed(n)?a:a.value:st(a)?e?to(a):qt(a):a}}const kC=Cm(),IC=Cm(!0);function Cm(e=!1){return function(r,o,n,i){let s=r[o];if(ui(s)&&yt(s)&&!yt(n))return!1;if(!e&&(!il(n)&&!ui(n)&&(s=We(s),n=We(n)),!we(r)&&yt(s)&&!yt(n)))return s.value=n,!0;const a=we(r)&&ed(o)?Number(o)<r.length:Be(r,o),l=Reflect.set(r,o,n,i);return r===We(i)&&(a?ws(n,s)&&eo(r,"set",o,n):eo(r,"add",o,n)),l}}function RC(e,t){const r=Be(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&r&&eo(e,"delete",t,void 0),o}function OC(e,t){const r=Reflect.has(e,t);return(!Qu(t)||!xm.has(t))&&nr(e,"has",t),r}function AC(e){return nr(e,"iterate",we(e)?"length":bn),Reflect.ownKeys(e)}const wm={get:TC,set:kC,deleteProperty:RC,has:OC,ownKeys:AC},MC={get:PC,set(e,t){return!0},deleteProperty(e,t){return!0}},BC=wt({},wm,{get:$C,set:IC}),nd=e=>e,Rl=e=>Reflect.getPrototypeOf(e);function ha(e,t,r=!1,o=!1){e=e.__v_raw;const n=We(e),i=We(t);r||(t!==i&&nr(n,"get",t),nr(n,"get",i));const{has:s}=Rl(n),a=o?nd:r?ad:Ss;if(s.call(n,t))return a(e.get(t));if(s.call(n,i))return a(e.get(i));e!==n&&e.get(t)}function pa(e,t=!1){const r=this.__v_raw,o=We(r),n=We(e);return t||(e!==n&&nr(o,"has",e),nr(o,"has",n)),e===n?r.has(e):r.has(e)||r.has(n)}function ga(e,t=!1){return e=e.__v_raw,!t&&nr(We(e),"iterate",bn),Reflect.get(e,"size",e)}function Vf(e){e=We(e);const t=We(this);return Rl(t).has.call(t,e)||(t.add(e),eo(t,"add",e,e)),this}function Kf(e,t){t=We(t);const r=We(this),{has:o,get:n}=Rl(r);let i=o.call(r,e);i||(e=We(e),i=o.call(r,e));const s=n.call(r,e);return r.set(e,t),i?ws(t,s)&&eo(r,"set",e,t):eo(r,"add",e,t),this}function qf(e){const t=We(this),{has:r,get:o}=Rl(t);let n=r.call(t,e);n||(e=We(e),n=r.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return n&&eo(t,"delete",e,void 0),i}function Gf(){const e=We(this),t=e.size!==0,r=e.clear();return t&&eo(e,"clear",void 0,void 0),r}function ma(e,t){return function(o,n){const i=this,s=i.__v_raw,a=We(s),l=t?nd:e?ad:Ss;return!e&&nr(a,"iterate",bn),s.forEach((c,u)=>o.call(n,l(c),l(u),i))}}function ba(e,t,r){return function(...o){const n=this.__v_raw,i=We(n),s=Qn(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=n[e](...o),u=r?nd:t?ad:Ss;return!t&&nr(i,"iterate",l?Zc:bn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function fo(e){return function(...t){return e==="delete"?!1:this}}function HC(){const e={get(i){return ha(this,i)},get size(){return ga(this)},has:pa,add:Vf,set:Kf,delete:qf,clear:Gf,forEach:ma(!1,!1)},t={get(i){return ha(this,i,!1,!0)},get size(){return ga(this)},has:pa,add:Vf,set:Kf,delete:qf,clear:Gf,forEach:ma(!1,!0)},r={get(i){return ha(this,i,!0)},get size(){return ga(this,!0)},has(i){return pa.call(this,i,!0)},add:fo("add"),set:fo("set"),delete:fo("delete"),clear:fo("clear"),forEach:ma(!0,!1)},o={get(i){return ha(this,i,!0,!0)},get size(){return ga(this,!0)},has(i){return pa.call(this,i,!0)},add:fo("add"),set:fo("set"),delete:fo("delete"),clear:fo("clear"),forEach:ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ba(i,!1,!1),r[i]=ba(i,!0,!1),t[i]=ba(i,!1,!0),o[i]=ba(i,!0,!0)}),[e,r,t,o]}const[DC,zC,FC,NC]=HC();function id(e,t){const r=t?e?NC:FC:e?zC:DC;return(o,n,i)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?o:Reflect.get(Be(r,n)&&n in o?r:o,n,i)}const jC={get:id(!1,!1)},WC={get:id(!1,!0)},UC={get:id(!0,!1)},Sm=new WeakMap,Em=new WeakMap,_m=new WeakMap,VC=new WeakMap;function KC(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qC(e){return e.__v_skip||!Object.isExtensible(e)?0:KC(gC(e))}function qt(e){return ui(e)?e:sd(e,!1,wm,jC,Sm)}function GC(e){return sd(e,!1,BC,WC,Em)}function to(e){return sd(e,!0,MC,UC,_m)}function sd(e,t,r,o,n){if(!st(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=n.get(e);if(i)return i;const s=qC(e);if(s===0)return e;const a=new Proxy(e,s===2?o:r);return n.set(e,a),a}function ei(e){return ui(e)?ei(e.__v_raw):!!(e&&e.__v_isReactive)}function ui(e){return!!(e&&e.__v_isReadonly)}function il(e){return!!(e&&e.__v_isShallow)}function Tm(e){return ei(e)||ui(e)}function We(e){const t=e&&e.__v_raw;return t?We(t):e}function sl(e){return nl(e,"__v_skip",!0),e}const Ss=e=>st(e)?qt(e):e,ad=e=>st(e)?to(e):e;function $m(e){Mo&&vr&&(e=We(e),ym(e.dep||(e.dep=td())))}function Pm(e,t){e=We(e),e.dep&&Jc(e.dep)}function yt(e){return!!(e&&e.__v_isRef===!0)}function V(e){return Lm(e,!1)}function ld(e){return Lm(e,!0)}function Lm(e,t){return yt(e)?e:new XC(e,t)}class XC{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:We(t),this._value=r?t:Ss(t)}get value(){return $m(this),this._value}set value(t){const r=this.__v_isShallow||il(t)||ui(t);t=r?t:We(t),ws(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Ss(t),Pm(this))}}function ur(e){return yt(e)?e.value:e}const YC={get:(e,t,r)=>ur(Reflect.get(e,t,r)),set:(e,t,r,o)=>{const n=e[t];return yt(n)&&!yt(r)?(n.value=r,!0):Reflect.set(e,t,r,o)}};function km(e){return ei(e)?e:new Proxy(e,YC)}function E9(e){const t=we(e)?new Array(e.length):{};for(const r in e)t[r]=Me(e,r);return t}class ZC{constructor(t,r,o){this._object=t,this._key=r,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Me(e,t,r){const o=e[t];return yt(o)?o:new ZC(e,t,r)}var Im;class JC{constructor(t,r,o,n){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[Im]=!1,this._dirty=!0,this.effect=new rd(t,()=>{this._dirty||(this._dirty=!0,Pm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=o}get value(){const t=We(this);return $m(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Im="__v_isReadonly";function QC(e,t,r=!1){let o,n;const i=ke(e);return i?(o=e,n=Cr):(o=e.get,n=e.set),new JC(o,n,i||!n,r)}function Bo(e,t,r,o){let n;try{n=o?e(...o):e()}catch(i){Ol(i,t,r)}return n}function dr(e,t,r,o){if(ke(e)){const i=Bo(e,t,r,o);return i&&dm(i)&&i.catch(s=>{Ol(s,t,r)}),i}const n=[];for(let i=0;i<e.length;i++)n.push(dr(e[i],t,r,o));return n}function Ol(e,t,r,o=!0){const n=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=r;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Bo(l,null,10,[e,s,a]);return}}ew(e,r,n,o)}function ew(e,t,r,o=!0){console.error(e)}let Es=!1,Qc=!1;const Ot=[];let Or=0;const ti=[];let Yr=null,an=0;const Rm=Promise.resolve();let cd=null;function Dt(e){const t=cd||Rm;return e?t.then(this?e.bind(this):e):t}function tw(e){let t=Or+1,r=Ot.length;for(;t<r;){const o=t+r>>>1;_s(Ot[o])<e?t=o+1:r=o}return t}function ud(e){(!Ot.length||!Ot.includes(e,Es&&e.allowRecurse?Or+1:Or))&&(e.id==null?Ot.push(e):Ot.splice(tw(e.id),0,e),Om())}function Om(){!Es&&!Qc&&(Qc=!0,cd=Rm.then(Mm))}function rw(e){const t=Ot.indexOf(e);t>Or&&Ot.splice(t,1)}function ow(e){we(e)?ti.push(...e):(!Yr||!Yr.includes(e,e.allowRecurse?an+1:an))&&ti.push(e),Om()}function Xf(e,t=Es?Or+1:0){for(;t<Ot.length;t++){const r=Ot[t];r&&r.pre&&(Ot.splice(t,1),t--,r())}}function Am(e){if(ti.length){const t=[...new Set(ti)];if(ti.length=0,Yr){Yr.push(...t);return}for(Yr=t,Yr.sort((r,o)=>_s(r)-_s(o)),an=0;an<Yr.length;an++)Yr[an]();Yr=null,an=0}}const _s=e=>e.id==null?1/0:e.id,nw=(e,t)=>{const r=_s(e)-_s(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Mm(e){Qc=!1,Es=!0,Ot.sort(nw);const t=Cr;try{for(Or=0;Or<Ot.length;Or++){const r=Ot[Or];r&&r.active!==!1&&Bo(r,null,14)}}finally{Or=0,Ot.length=0,Am(),Es=!1,cd=null,(Ot.length||ti.length)&&Mm()}}function iw(e,t,...r){if(e.isUnmounted)return;const o=e.vnode.props||Je;let n=r;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in o){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=o[u]||Je;f&&(n=r.map(h=>h.trim())),d&&(n=r.map(pm))}let a,l=o[a=pc(t)]||o[a=pc(Hr(t))];!l&&i&&(l=o[a=pc(kn(t))]),l&&dr(l,e,6,n);const c=o[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,dr(c,e,6,n)}}function Bm(e,t,r=!1){const o=t.emitsCache,n=o.get(e);if(n!==void 0)return n;const i=e.emits;let s={},a=!1;if(!ke(e)){const l=c=>{const u=Bm(c,t,!0);u&&(a=!0,wt(s,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(st(e)&&o.set(e,null),null):(we(i)?i.forEach(l=>s[l]=null):wt(s,i),st(e)&&o.set(e,s),s)}function Al(e,t){return!e||!Pl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Be(e,t[0].toLowerCase()+t.slice(1))||Be(e,kn(t))||Be(e,t))}let At=null,Ml=null;function al(e){const t=At;return At=e,Ml=e&&e.type.__scopeId||null,t}function _9(e){Ml=e}function T9(){Ml=null}function Ir(e,t=At,r){if(!t||e._n)return e;const o=(...n)=>{o._d&&ah(-1);const i=al(t);let s;try{s=e(...n)}finally{al(i),o._d&&ah(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function gc(e){const{type:t,vnode:r,proxy:o,withProxy:n,props:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:h,ctx:p,inheritAttrs:b}=e;let y,g;const w=al(e);try{if(r.shapeFlag&4){const x=n||o;y=Rr(u.call(x,x,d,i,h,f,p)),g=l}else{const x=t;y=Rr(x.length>1?x(i,{attrs:l,slots:a,emit:c}):x(i,null)),g=t.props?l:sw(l)}}catch(x){ls.length=0,Ol(x,e,1),y=ct(zt)}let T=y;if(g&&b!==!1){const x=Object.keys(g),{shapeFlag:C}=T;x.length&&C&7&&(s&&x.some(Zu)&&(g=aw(g,s)),T=Sr(T,g))}return r.dirs&&(T=Sr(T),T.dirs=T.dirs?T.dirs.concat(r.dirs):r.dirs),r.transition&&(T.transition=r.transition),y=T,al(w),y}const sw=e=>{let t;for(const r in e)(r==="class"||r==="style"||Pl(r))&&((t||(t={}))[r]=e[r]);return t},aw=(e,t)=>{const r={};for(const o in e)(!Zu(o)||!(o.slice(9)in t))&&(r[o]=e[o]);return r};function lw(e,t,r){const{props:o,children:n,component:i}=e,{props:s,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return o?Yf(o,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==o[f]&&!Al(c,f))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:o===s?!1:o?s?Yf(o,s,c):!0:!!s;return!1}function Yf(e,t,r){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let n=0;n<o.length;n++){const i=o[n];if(t[i]!==e[i]&&!Al(r,i))return!0}return!1}function cw({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const Hm=e=>e.__isSuspense;function uw(e,t){t&&t.pendingBranch?we(e)?t.effects.push(...e):t.effects.push(e):ow(e)}function qe(e,t){if(Ct){let r=Ct.provides;const o=Ct.parent&&Ct.parent.provides;o===r&&(r=Ct.provides=Object.create(o)),r[e]=t}}function Se(e,t,r=!1){const o=Ct||At;if(o){const n=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return r&&ke(t)?t.call(o.proxy):t}}function wr(e,t){return dd(e,null,t)}const Zf={};function et(e,t,r){return dd(e,t,r)}function dd(e,t,{immediate:r,deep:o,flush:n,onTrack:i,onTrigger:s}=Je){const a=Ct;let l,c=!1,u=!1;if(yt(e)?(l=()=>e.value,c=il(e)):ei(e)?(l=()=>e,o=!0):we(e)?(u=!0,c=e.some(g=>ei(g)||il(g)),l=()=>e.map(g=>{if(yt(g))return g.value;if(ei(g))return fn(g);if(ke(g))return Bo(g,a,2)})):ke(e)?t?l=()=>Bo(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),dr(e,a,3,[f])}:l=Cr,t&&o){const g=l;l=()=>fn(g())}let d,f=g=>{d=y.onStop=()=>{Bo(g,a,4)}};if(Ps)return f=Cr,t?r&&dr(t,a,3,[l(),u?[]:void 0,f]):l(),Cr;let h=u?[]:Zf;const p=()=>{if(!!y.active)if(t){const g=y.run();(o||c||(u?g.some((w,T)=>ws(w,h[T])):ws(g,h)))&&(d&&d(),dr(t,a,3,[g,h===Zf?void 0:h,f]),h=g)}else y.run()};p.allowRecurse=!!t;let b;n==="sync"?b=p:n==="post"?b=()=>St(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),b=()=>ud(p));const y=new rd(l,b);return t?r?p():h=y.run():n==="post"?St(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Ju(a.scope.effects,y)}}function dw(e,t,r){const o=this.proxy,n=ft(e)?e.includes(".")?Dm(o,e):()=>o[e]:e.bind(o,o);let i;ke(t)?i=t:(i=t.handler,r=t);const s=Ct;pi(this);const a=dd(n,i.bind(o),r);return s?pi(s):xn(),a}function Dm(e,t){const r=t.split(".");return()=>{let o=e;for(let n=0;n<r.length&&o;n++)o=o[r[n]];return o}}function fn(e,t){if(!st(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),yt(e))fn(e.value,t);else if(we(e))for(let r=0;r<e.length;r++)fn(e[r],t);else if(um(e)||Qn(e))e.forEach(r=>{fn(r,t)});else if(hm(e))for(const r in e)fn(e[r],t);return e}function zm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $t(()=>{e.isMounted=!0}),xt(()=>{e.isUnmounting=!0}),e}const sr=[Function,Array],fw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sr,onEnter:sr,onAfterEnter:sr,onEnterCancelled:sr,onBeforeLeave:sr,onLeave:sr,onAfterLeave:sr,onLeaveCancelled:sr,onBeforeAppear:sr,onAppear:sr,onAfterAppear:sr,onAppearCancelled:sr},setup(e,{slots:t}){const r=fr(),o=zm();let n;return()=>{const i=t.default&&fd(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const b of i)if(b.type!==zt){s=b;break}}const a=We(e),{mode:l}=a;if(o.isLeaving)return mc(s);const c=Jf(s);if(!c)return mc(s);const u=Ts(c,a,o,r);di(c,u);const d=r.subTree,f=d&&Jf(d);let h=!1;const{getTransitionKey:p}=c.type;if(p){const b=p();n===void 0?n=b:b!==n&&(n=b,h=!0)}if(f&&f.type!==zt&&(!ln(c,f)||h)){const b=Ts(f,a,o,r);if(di(f,b),l==="out-in")return o.isLeaving=!0,b.afterLeave=()=>{o.isLeaving=!1,r.update()},mc(s);l==="in-out"&&c.type!==zt&&(b.delayLeave=(y,g,w)=>{const T=Nm(o,f);T[String(f.key)]=f,y._leaveCb=()=>{g(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return s}}},Fm=fw;function Nm(e,t){const{leavingVNodes:r}=e;let o=r.get(t.type);return o||(o=Object.create(null),r.set(t.type,o)),o}function Ts(e,t,r,o){const{appear:n,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:b,onAppear:y,onAfterAppear:g,onAppearCancelled:w}=t,T=String(e.key),x=Nm(r,e),C=(L,k)=>{L&&dr(L,o,9,k)},$=(L,k)=>{const R=k[1];C(L,k),we(L)?L.every(H=>H.length<=1)&&R():L.length<=1&&R()},S={mode:i,persisted:s,beforeEnter(L){let k=a;if(!r.isMounted)if(n)k=b||a;else return;L._leaveCb&&L._leaveCb(!0);const R=x[T];R&&ln(e,R)&&R.el._leaveCb&&R.el._leaveCb(),C(k,[L])},enter(L){let k=l,R=c,H=u;if(!r.isMounted)if(n)k=y||l,R=g||c,H=w||u;else return;let A=!1;const q=L._enterCb=F=>{A||(A=!0,F?C(H,[L]):C(R,[L]),S.delayedLeave&&S.delayedLeave(),L._enterCb=void 0)};k?$(k,[L,q]):q()},leave(L,k){const R=String(e.key);if(L._enterCb&&L._enterCb(!0),r.isUnmounting)return k();C(d,[L]);let H=!1;const A=L._leaveCb=q=>{H||(H=!0,k(),q?C(p,[L]):C(h,[L]),L._leaveCb=void 0,x[R]===e&&delete x[R])};x[R]=e,f?$(f,[L,A]):A()},clone(L){return Ts(L,t,r,o)}};return S}function mc(e){if(Bl(e))return e=Sr(e),e.children=null,e}function Jf(e){return Bl(e)?e.children?e.children[0]:void 0:e}function di(e,t){e.shapeFlag&6&&e.component?di(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fd(e,t=!1,r){let o=[],n=0;for(let i=0;i<e.length;i++){let s=e[i];const a=r==null?s.key:String(r)+String(s.key!=null?s.key:i);s.type===Qe?(s.patchFlag&128&&n++,o=o.concat(fd(s.children,t,a))):(t||s.type!==zt)&&o.push(a!=null?Sr(s,{key:a}):s)}if(n>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function be(e){return ke(e)?{setup:e,name:e.name}:e}const ri=e=>!!e.type.__asyncLoader,Bl=e=>e.type.__isKeepAlive,hw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const r=fr(),o=r.ctx;if(!o.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const n=new Map,i=new Set;let s=null;const a=r.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=o,f=d("div");o.activate=(w,T,x,C,$)=>{const S=w.component;c(w,T,x,0,a),l(S.vnode,w,T,x,S,a,C,w.slotScopeIds,$),St(()=>{S.isDeactivated=!1,S.a&&ss(S.a);const L=w.props&&w.props.onVnodeMounted;L&&cr(L,S.parent,w)},a)},o.deactivate=w=>{const T=w.component;c(w,f,null,1,a),St(()=>{T.da&&ss(T.da);const x=w.props&&w.props.onVnodeUnmounted;x&&cr(x,T.parent,w),T.isDeactivated=!0},a)};function h(w){bc(w),u(w,r,a,!0)}function p(w){n.forEach((T,x)=>{const C=su(T.type);C&&(!w||!w(C))&&b(x)})}function b(w){const T=n.get(w);!s||T.type!==s.type?h(T):s&&bc(s),n.delete(w),i.delete(w)}et(()=>[e.include,e.exclude],([w,T])=>{w&&p(x=>es(w,x)),T&&p(x=>!es(T,x))},{flush:"post",deep:!0});let y=null;const g=()=>{y!=null&&n.set(y,vc(r.subTree))};return $t(g),hd(g),xt(()=>{n.forEach(w=>{const{subTree:T,suspense:x}=r,C=vc(T);if(w.type===C.type){bc(C);const $=C.component.da;$&&St($,x);return}h(w)})}),()=>{if(y=null,!t.default)return null;const w=t.default(),T=w[0];if(w.length>1)return s=null,w;if(!fi(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return s=null,T;let x=vc(T);const C=x.type,$=su(ri(x)?x.type.__asyncResolved||{}:C),{include:S,exclude:L,max:k}=e;if(S&&(!$||!es(S,$))||L&&$&&es(L,$))return s=x,T;const R=x.key==null?C:x.key,H=n.get(R);return x.el&&(x=Sr(x),T.shapeFlag&128&&(T.ssContent=x)),y=R,H?(x.el=H.el,x.component=H.component,x.transition&&di(x,x.transition),x.shapeFlag|=512,i.delete(R),i.add(R)):(i.add(R),k&&i.size>parseInt(k,10)&&b(i.values().next().value)),x.shapeFlag|=256,s=x,Hm(T.type)?T:x}}},pw=hw;function es(e,t){return we(e)?e.some(r=>es(r,t)):ft(e)?e.split(",").includes(t):e.test?e.test(t):!1}function jm(e,t){Um(e,"a",t)}function Wm(e,t){Um(e,"da",t)}function Um(e,t,r=Ct){const o=e.__wdc||(e.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Hl(t,o,r),r){let n=r.parent;for(;n&&n.parent;)Bl(n.parent.vnode)&&gw(o,t,r,n),n=n.parent}}function gw(e,t,r,o){const n=Hl(t,e,o,!0);pd(()=>{Ju(o[t],n)},r)}function bc(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function vc(e){return e.shapeFlag&128?e.ssContent:e}function Hl(e,t,r=Ct,o=!1){if(r){const n=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(r.isUnmounted)return;Li(),pi(r);const a=dr(t,r,e,s);return xn(),ki(),a});return o?n.unshift(i):n.push(i),i}}const io=e=>(t,r=Ct)=>(!Ps||e==="sp")&&Hl(e,(...o)=>t(...o),r),Vo=io("bm"),$t=io("m"),mw=io("bu"),hd=io("u"),xt=io("bum"),pd=io("um"),bw=io("sp"),vw=io("rtg"),yw=io("rtc");function xw(e,t=Ct){Hl("ec",e,t)}function Dr(e,t){const r=At;if(r===null)return e;const o=Nl(r)||r.proxy,n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,c=Je]=t[i];ke(s)&&(s={mounted:s,updated:s}),s.deep&&fn(a),n.push({dir:s,instance:o,value:a,oldValue:void 0,arg:l,modifiers:c})}return e}function en(e,t,r,o){const n=e.dirs,i=t&&t.dirs;for(let s=0;s<n.length;s++){const a=n[s];i&&(a.oldValue=i[s].value);let l=a.dir[o];l&&(Li(),dr(l,r,8,[e.el,a,e,t]),ki())}}const gd="components";function Cw(e,t){return Km(gd,e,!0,t)||e}const Vm=Symbol();function ww(e){return ft(e)?Km(gd,e,!1)||e:e||Vm}function Km(e,t,r=!0,o=!1){const n=At||Ct;if(n){const i=n.type;if(e===gd){const a=su(i,!1);if(a&&(a===t||a===Hr(t)||a===Il(Hr(t))))return i}const s=Qf(n[e]||i[e],t)||Qf(n.appContext[e],t);return!s&&o?i:s}}function Qf(e,t){return e&&(e[t]||e[Hr(t)]||e[Il(Hr(t))])}function $9(e,t,r,o){let n;const i=r&&r[o];if(we(e)||ft(e)){n=new Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){n=new Array(e);for(let s=0;s<e;s++)n[s]=t(s+1,s,void 0,i&&i[s])}else if(st(e))if(e[Symbol.iterator])n=Array.from(e,(s,a)=>t(s,a,void 0,i&&i[a]));else{const s=Object.keys(e);n=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];n[a]=t(e[c],c,a,i&&i[a])}}else n=[];return r&&(r[o]=n),n}function P9(e,t){for(let r=0;r<t.length;r++){const o=t[r];if(we(o))for(let n=0;n<o.length;n++)e[o[n].name]=o[n].fn;else o&&(e[o.name]=o.key?(...n)=>{const i=o.fn(...n);return i&&(i.key=o.key),i}:o.fn)}return e}function md(e,t,r={},o,n){if(At.isCE||At.parent&&ri(At.parent)&&At.parent.isCE)return ct("slot",t==="default"?null:{name:t},o&&o());let i=e[t];i&&i._c&&(i._d=!1),vn();const s=i&&qm(i(r)),a=yn(Qe,{key:r.key||s&&s.key||`_${t}`},s||(o?o():[]),s&&e._===1?64:-2);return!n&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function qm(e){return e.some(t=>fi(t)?!(t.type===zt||t.type===Qe&&!qm(t.children)):!0)?e:null}const eu=e=>e?o0(e)?Nl(e)||e.proxy:eu(e.parent):null,ll=wt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>eu(e.parent),$root:e=>eu(e.root),$emit:e=>e.emit,$options:e=>bd(e),$forceUpdate:e=>e.f||(e.f=()=>ud(e.update)),$nextTick:e=>e.n||(e.n=Dt.bind(e.proxy)),$watch:e=>dw.bind(e)}),Sw={get({_:e},t){const{ctx:r,setupState:o,data:n,props:i,accessCache:s,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return n[t];case 4:return r[t];case 3:return i[t]}else{if(o!==Je&&Be(o,t))return s[t]=1,o[t];if(n!==Je&&Be(n,t))return s[t]=2,n[t];if((c=e.propsOptions[0])&&Be(c,t))return s[t]=3,i[t];if(r!==Je&&Be(r,t))return s[t]=4,r[t];tu&&(s[t]=0)}}const u=ll[t];let d,f;if(u)return t==="$attrs"&&nr(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(r!==Je&&Be(r,t))return s[t]=4,r[t];if(f=l.config.globalProperties,Be(f,t))return f[t]},set({_:e},t,r){const{data:o,setupState:n,ctx:i}=e;return n!==Je&&Be(n,t)?(n[t]=r,!0):o!==Je&&Be(o,t)?(o[t]=r,!0):Be(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:o,appContext:n,propsOptions:i}},s){let a;return!!r[s]||e!==Je&&Be(e,s)||t!==Je&&Be(t,s)||(a=i[0])&&Be(a,s)||Be(o,s)||Be(ll,s)||Be(n.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Be(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let tu=!0;function Ew(e){const t=bd(e),r=e.proxy,o=e.ctx;tu=!1,t.beforeCreate&&eh(t.beforeCreate,e,"bc");const{data:n,computed:i,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:b,deactivated:y,beforeDestroy:g,beforeUnmount:w,destroyed:T,unmounted:x,render:C,renderTracked:$,renderTriggered:S,errorCaptured:L,serverPrefetch:k,expose:R,inheritAttrs:H,components:A,directives:q,filters:F}=t;if(c&&_w(c,o,null,e.appContext.config.unwrapInjectedRef),s)for(const Z in s){const se=s[Z];ke(se)&&(o[Z]=se.bind(r))}if(n){const Z=n.call(r,r);st(Z)&&(e.data=qt(Z))}if(tu=!0,i)for(const Z in i){const se=i[Z],ve=ke(se)?se.bind(r,r):ke(se.get)?se.get.bind(r,r):Cr,Le=!ke(se)&&ke(se.set)?se.set.bind(r):Cr,_e=K({get:ve,set:Le});Object.defineProperty(o,Z,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Ae=>_e.value=Ae})}if(a)for(const Z in a)Gm(a[Z],o,r,Z);if(l){const Z=ke(l)?l.call(r):l;Reflect.ownKeys(Z).forEach(se=>{qe(se,Z[se])})}u&&eh(u,e,"c");function Y(Z,se){we(se)?se.forEach(ve=>Z(ve.bind(r))):se&&Z(se.bind(r))}if(Y(Vo,d),Y($t,f),Y(mw,h),Y(hd,p),Y(jm,b),Y(Wm,y),Y(xw,L),Y(yw,$),Y(vw,S),Y(xt,w),Y(pd,x),Y(bw,k),we(R))if(R.length){const Z=e.exposed||(e.exposed={});R.forEach(se=>{Object.defineProperty(Z,se,{get:()=>r[se],set:ve=>r[se]=ve})})}else e.exposed||(e.exposed={});C&&e.render===Cr&&(e.render=C),H!=null&&(e.inheritAttrs=H),A&&(e.components=A),q&&(e.directives=q)}function _w(e,t,r=Cr,o=!1){we(e)&&(e=ru(e));for(const n in e){const i=e[n];let s;st(i)?"default"in i?s=Se(i.from||n,i.default,!0):s=Se(i.from||n):s=Se(i),yt(s)&&o?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function eh(e,t,r){dr(we(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,r)}function Gm(e,t,r,o){const n=o.includes(".")?Dm(r,o):()=>r[o];if(ft(e)){const i=t[e];ke(i)&&et(n,i)}else if(ke(e))et(n,e.bind(r));else if(st(e))if(we(e))e.forEach(i=>Gm(i,t,r,o));else{const i=ke(e.handler)?e.handler.bind(r):t[e.handler];ke(i)&&et(n,i,e)}}function bd(e){const t=e.type,{mixins:r,extends:o}=t,{mixins:n,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let l;return a?l=a:!n.length&&!r&&!o?l=t:(l={},n.length&&n.forEach(c=>cl(l,c,s,!0)),cl(l,t,s)),st(t)&&i.set(t,l),l}function cl(e,t,r,o=!1){const{mixins:n,extends:i}=t;i&&cl(e,i,r,!0),n&&n.forEach(s=>cl(e,s,r,!0));for(const s in t)if(!(o&&s==="expose")){const a=Tw[s]||r&&r[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const Tw={data:th,props:nn,emits:nn,methods:nn,computed:nn,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:nn,directives:nn,watch:Pw,provide:th,inject:$w};function th(e,t){return t?e?function(){return wt(ke(e)?e.call(this,this):e,ke(t)?t.call(this,this):t)}:t:e}function $w(e,t){return nn(ru(e),ru(t))}function ru(e){if(we(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Bt(e,t){return e?[...new Set([].concat(e,t))]:t}function nn(e,t){return e?wt(wt(Object.create(null),e),t):t}function Pw(e,t){if(!e)return t;if(!t)return e;const r=wt(Object.create(null),e);for(const o in t)r[o]=Bt(e[o],t[o]);return r}function Lw(e,t,r,o=!1){const n={},i={};nl(i,zl,1),e.propsDefaults=Object.create(null),Xm(e,t,n,i);for(const s in e.propsOptions[0])s in n||(n[s]=void 0);r?e.props=o?n:GC(n):e.type.props?e.props=n:e.props=i,e.attrs=i}function kw(e,t,r,o){const{props:n,attrs:i,vnode:{patchFlag:s}}=e,a=We(n),[l]=e.propsOptions;let c=!1;if((o||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Al(e.emitsOptions,f))continue;const h=t[f];if(l)if(Be(i,f))h!==i[f]&&(i[f]=h,c=!0);else{const p=Hr(f);n[p]=ou(l,a,p,h,e,!1)}else h!==i[f]&&(i[f]=h,c=!0)}}}else{Xm(e,t,n,i)&&(c=!0);let u;for(const d in a)(!t||!Be(t,d)&&((u=kn(d))===d||!Be(t,u)))&&(l?r&&(r[d]!==void 0||r[u]!==void 0)&&(n[d]=ou(l,a,d,void 0,e,!0)):delete n[d]);if(i!==a)for(const d in i)(!t||!Be(t,d)&&!0)&&(delete i[d],c=!0)}c&&eo(e,"set","$attrs")}function Xm(e,t,r,o){const[n,i]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(qa(l))continue;const c=t[l];let u;n&&Be(n,u=Hr(l))?!i||!i.includes(u)?r[u]=c:(a||(a={}))[u]=c:Al(e.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,s=!0)}if(i){const l=We(r),c=a||Je;for(let u=0;u<i.length;u++){const d=i[u];r[d]=ou(n,l,d,c[d],e,!Be(c,d))}}return s}function ou(e,t,r,o,n,i){const s=e[r];if(s!=null){const a=Be(s,"default");if(a&&o===void 0){const l=s.default;if(s.type!==Function&&ke(l)){const{propsDefaults:c}=n;r in c?o=c[r]:(pi(n),o=c[r]=l.call(null,t),xn())}else o=l}s[0]&&(i&&!a?o=!1:s[1]&&(o===""||o===kn(r))&&(o=!0))}return o}function Ym(e,t,r=!1){const o=t.propsCache,n=o.get(e);if(n)return n;const i=e.props,s={},a=[];let l=!1;if(!ke(e)){const u=d=>{l=!0;const[f,h]=Ym(d,t,!0);wt(s,f),h&&a.push(...h)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return st(e)&&o.set(e,Jn),Jn;if(we(i))for(let u=0;u<i.length;u++){const d=Hr(i[u]);rh(d)&&(s[d]=Je)}else if(i)for(const u in i){const d=Hr(u);if(rh(d)){const f=i[u],h=s[d]=we(f)||ke(f)?{type:f}:f;if(h){const p=ih(Boolean,h.type),b=ih(String,h.type);h[0]=p>-1,h[1]=b<0||p<b,(p>-1||Be(h,"default"))&&a.push(d)}}}const c=[s,a];return st(e)&&o.set(e,c),c}function rh(e){return e[0]!=="$"}function oh(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function nh(e,t){return oh(e)===oh(t)}function ih(e,t){return we(t)?t.findIndex(r=>nh(r,e)):ke(t)&&nh(t,e)?0:-1}const Zm=e=>e[0]==="_"||e==="$stable",vd=e=>we(e)?e.map(Rr):[Rr(e)],Iw=(e,t,r)=>{if(t._n)return t;const o=Ir((...n)=>vd(t(...n)),r);return o._c=!1,o},Jm=(e,t,r)=>{const o=e._ctx;for(const n in e){if(Zm(n))continue;const i=e[n];if(ke(i))t[n]=Iw(n,i,o);else if(i!=null){const s=vd(i);t[n]=()=>s}}},Qm=(e,t)=>{const r=vd(t);e.slots.default=()=>r},Rw=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=We(t),nl(t,"_",r)):Jm(t,e.slots={})}else e.slots={},t&&Qm(e,t);nl(e.slots,zl,1)},Ow=(e,t,r)=>{const{vnode:o,slots:n}=e;let i=!0,s=Je;if(o.shapeFlag&32){const a=t._;a?r&&a===1?i=!1:(wt(n,t),!r&&a===1&&delete n._):(i=!t.$stable,Jm(t,n)),s=t}else t&&(Qm(e,t),s={default:1});if(i)for(const a in n)!Zm(a)&&!(a in s)&&delete n[a]};function e0(){return{app:null,config:{isNativeTag:fC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Aw=0;function Mw(e,t){return function(o,n=null){ke(o)||(o=Object.assign({},o)),n!=null&&!st(n)&&(n=null);const i=e0(),s=new Set;let a=!1;const l=i.app={_uid:Aw++,_component:o,_props:n,_container:null,_context:i,_instance:null,version:Qw,get config(){return i.config},set config(c){},use(c,...u){return s.has(c)||(c&&ke(c.install)?(s.add(c),c.install(l,...u)):ke(c)&&(s.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=ct(o,n);return f.appContext=i,u&&t?t(f,c):e(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Nl(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function nu(e,t,r,o,n=!1){if(we(e)){e.forEach((f,h)=>nu(f,t&&(we(t)?t[h]:t),r,o,n));return}if(ri(o)&&!n)return;const i=o.shapeFlag&4?Nl(o.component)||o.component.proxy:o.el,s=n?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Je?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,Be(d,c)&&(d[c]=null)):yt(c)&&(c.value=null)),ke(l))Bo(l,a,12,[s,u]);else{const f=ft(l),h=yt(l);if(f||h){const p=()=>{if(e.f){const b=f?Be(d,l)?d[l]:u[l]:l.value;n?we(b)&&Ju(b,i):we(b)?b.includes(i)||b.push(i):f?(u[l]=[i],Be(d,l)&&(d[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else f?(u[l]=s,Be(d,l)&&(d[l]=s)):h&&(l.value=s,e.k&&(u[e.k]=s))};s?(p.id=-1,St(p,r)):p()}}}const St=uw;function Bw(e){return Hw(e)}function Hw(e,t){const r=vC();r.__VUE__=!0;const{insert:o,remove:n,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Cr,insertStaticContent:p}=e,b=(_,m,v,P=null,I=null,M=null,U=!1,X=null,W=!!m.dynamicChildren)=>{if(_===m)return;_&&!ln(_,m)&&(P=te(_),Ae(_,I,M,!0),_=null),m.patchFlag===-2&&(W=!1,m.dynamicChildren=null);const{type:D,ref:O,shapeFlag:B}=m;switch(D){case Dl:y(_,m,v,P);break;case zt:g(_,m,v,P);break;case Ga:_==null&&w(m,v,P,U);break;case Qe:A(_,m,v,P,I,M,U,X,W);break;default:B&1?C(_,m,v,P,I,M,U,X,W):B&6?q(_,m,v,P,I,M,U,X,W):(B&64||B&128)&&D.process(_,m,v,P,I,M,U,X,W,ae)}O!=null&&I&&nu(O,_&&_.ref,M,m||_,!m)},y=(_,m,v,P)=>{if(_==null)o(m.el=a(m.children),v,P);else{const I=m.el=_.el;m.children!==_.children&&c(I,m.children)}},g=(_,m,v,P)=>{_==null?o(m.el=l(m.children||""),v,P):m.el=_.el},w=(_,m,v,P)=>{[_.el,_.anchor]=p(_.children,m,v,P,_.el,_.anchor)},T=({el:_,anchor:m},v,P)=>{let I;for(;_&&_!==m;)I=f(_),o(_,v,P),_=I;o(m,v,P)},x=({el:_,anchor:m})=>{let v;for(;_&&_!==m;)v=f(_),n(_),_=v;n(m)},C=(_,m,v,P,I,M,U,X,W)=>{U=U||m.type==="svg",_==null?$(m,v,P,I,M,U,X,W):k(_,m,I,M,U,X,W)},$=(_,m,v,P,I,M,U,X)=>{let W,D;const{type:O,props:B,shapeFlag:ce,transition:pe,dirs:$e}=_;if(W=_.el=s(_.type,M,B&&B.is,B),ce&8?u(W,_.children):ce&16&&L(_.children,W,null,P,I,M&&O!=="foreignObject",U,X),$e&&en(_,null,P,"created"),B){for(const Oe in B)Oe!=="value"&&!qa(Oe)&&i(W,Oe,null,B[Oe],M,_.children,P,I,J);"value"in B&&i(W,"value",null,B.value),(D=B.onVnodeBeforeMount)&&cr(D,P,_)}S(W,_,_.scopeId,U,P),$e&&en(_,null,P,"beforeMount");const He=(!I||I&&!I.pendingBranch)&&pe&&!pe.persisted;He&&pe.beforeEnter(W),o(W,m,v),((D=B&&B.onVnodeMounted)||He||$e)&&St(()=>{D&&cr(D,P,_),He&&pe.enter(W),$e&&en(_,null,P,"mounted")},I)},S=(_,m,v,P,I)=>{if(v&&h(_,v),P)for(let M=0;M<P.length;M++)h(_,P[M]);if(I){let M=I.subTree;if(m===M){const U=I.vnode;S(_,U,U.scopeId,U.slotScopeIds,I.parent)}}},L=(_,m,v,P,I,M,U,X,W=0)=>{for(let D=W;D<_.length;D++){const O=_[D]=X?$o(_[D]):Rr(_[D]);b(null,O,m,v,P,I,M,U,X)}},k=(_,m,v,P,I,M,U)=>{const X=m.el=_.el;let{patchFlag:W,dynamicChildren:D,dirs:O}=m;W|=_.patchFlag&16;const B=_.props||Je,ce=m.props||Je;let pe;v&&tn(v,!1),(pe=ce.onVnodeBeforeUpdate)&&cr(pe,v,m,_),O&&en(m,_,v,"beforeUpdate"),v&&tn(v,!0);const $e=I&&m.type!=="foreignObject";if(D?R(_.dynamicChildren,D,X,v,P,$e,M):U||se(_,m,X,null,v,P,$e,M,!1),W>0){if(W&16)H(X,m,B,ce,v,P,I);else if(W&2&&B.class!==ce.class&&i(X,"class",null,ce.class,I),W&4&&i(X,"style",B.style,ce.style,I),W&8){const He=m.dynamicProps;for(let Oe=0;Oe<He.length;Oe++){const at=He[Oe],Lt=B[at],Tr=ce[at];(Tr!==Lt||at==="value")&&i(X,at,Lt,Tr,I,_.children,v,P,J)}}W&1&&_.children!==m.children&&u(X,m.children)}else!U&&D==null&&H(X,m,B,ce,v,P,I);((pe=ce.onVnodeUpdated)||O)&&St(()=>{pe&&cr(pe,v,m,_),O&&en(m,_,v,"updated")},P)},R=(_,m,v,P,I,M,U)=>{for(let X=0;X<m.length;X++){const W=_[X],D=m[X],O=W.el&&(W.type===Qe||!ln(W,D)||W.shapeFlag&70)?d(W.el):v;b(W,D,O,null,P,I,M,U,!0)}},H=(_,m,v,P,I,M,U)=>{if(v!==P){if(v!==Je)for(const X in v)!qa(X)&&!(X in P)&&i(_,X,v[X],null,U,m.children,I,M,J);for(const X in P){if(qa(X))continue;const W=P[X],D=v[X];W!==D&&X!=="value"&&i(_,X,D,W,U,m.children,I,M,J)}"value"in P&&i(_,"value",v.value,P.value)}},A=(_,m,v,P,I,M,U,X,W)=>{const D=m.el=_?_.el:a(""),O=m.anchor=_?_.anchor:a("");let{patchFlag:B,dynamicChildren:ce,slotScopeIds:pe}=m;pe&&(X=X?X.concat(pe):pe),_==null?(o(D,v,P),o(O,v,P),L(m.children,v,O,I,M,U,X,W)):B>0&&B&64&&ce&&_.dynamicChildren?(R(_.dynamicChildren,ce,v,I,M,U,X),(m.key!=null||I&&m===I.subTree)&&yd(_,m,!0)):se(_,m,v,O,I,M,U,X,W)},q=(_,m,v,P,I,M,U,X,W)=>{m.slotScopeIds=X,_==null?m.shapeFlag&512?I.ctx.activate(m,v,P,U,W):F(m,v,P,I,M,U,W):ee(_,m,W)},F=(_,m,v,P,I,M,U)=>{const X=_.component=qw(_,P,I);if(Bl(_)&&(X.ctx.renderer=ae),Gw(X),X.asyncDep){if(I&&I.registerDep(X,Y),!_.el){const W=X.subTree=ct(zt);g(null,W,m,v)}return}Y(X,_,m,v,I,M,U)},ee=(_,m,v)=>{const P=m.component=_.component;if(lw(_,m,v))if(P.asyncDep&&!P.asyncResolved){Z(P,m,v);return}else P.next=m,rw(P.update),P.update();else m.el=_.el,P.vnode=m},Y=(_,m,v,P,I,M,U)=>{const X=()=>{if(_.isMounted){let{next:O,bu:B,u:ce,parent:pe,vnode:$e}=_,He=O,Oe;tn(_,!1),O?(O.el=$e.el,Z(_,O,U)):O=$e,B&&ss(B),(Oe=O.props&&O.props.onVnodeBeforeUpdate)&&cr(Oe,pe,O,$e),tn(_,!0);const at=gc(_),Lt=_.subTree;_.subTree=at,b(Lt,at,d(Lt.el),te(Lt),_,I,M),O.el=at.el,He===null&&cw(_,at.el),ce&&St(ce,I),(Oe=O.props&&O.props.onVnodeUpdated)&&St(()=>cr(Oe,pe,O,$e),I)}else{let O;const{el:B,props:ce}=m,{bm:pe,m:$e,parent:He}=_,Oe=ri(m);if(tn(_,!1),pe&&ss(pe),!Oe&&(O=ce&&ce.onVnodeBeforeMount)&&cr(O,He,m),tn(_,!0),B&&me){const at=()=>{_.subTree=gc(_),me(B,_.subTree,_,I,null)};Oe?m.type.__asyncLoader().then(()=>!_.isUnmounted&&at()):at()}else{const at=_.subTree=gc(_);b(null,at,v,P,_,I,M),m.el=at.el}if($e&&St($e,I),!Oe&&(O=ce&&ce.onVnodeMounted)){const at=m;St(()=>cr(O,He,at),I)}(m.shapeFlag&256||He&&ri(He.vnode)&&He.vnode.shapeFlag&256)&&_.a&&St(_.a,I),_.isMounted=!0,m=v=P=null}},W=_.effect=new rd(X,()=>ud(D),_.scope),D=_.update=()=>W.run();D.id=_.uid,tn(_,!0),D()},Z=(_,m,v)=>{m.component=_;const P=_.vnode.props;_.vnode=m,_.next=null,kw(_,m.props,P,v),Ow(_,m.children,v),Li(),Xf(),ki()},se=(_,m,v,P,I,M,U,X,W=!1)=>{const D=_&&_.children,O=_?_.shapeFlag:0,B=m.children,{patchFlag:ce,shapeFlag:pe}=m;if(ce>0){if(ce&128){Le(D,B,v,P,I,M,U,X,W);return}else if(ce&256){ve(D,B,v,P,I,M,U,X,W);return}}pe&8?(O&16&&J(D,I,M),B!==D&&u(v,B)):O&16?pe&16?Le(D,B,v,P,I,M,U,X,W):J(D,I,M,!0):(O&8&&u(v,""),pe&16&&L(B,v,P,I,M,U,X,W))},ve=(_,m,v,P,I,M,U,X,W)=>{_=_||Jn,m=m||Jn;const D=_.length,O=m.length,B=Math.min(D,O);let ce;for(ce=0;ce<B;ce++){const pe=m[ce]=W?$o(m[ce]):Rr(m[ce]);b(_[ce],pe,v,null,I,M,U,X,W)}D>O?J(_,I,M,!0,!1,B):L(m,v,P,I,M,U,X,W,B)},Le=(_,m,v,P,I,M,U,X,W)=>{let D=0;const O=m.length;let B=_.length-1,ce=O-1;for(;D<=B&&D<=ce;){const pe=_[D],$e=m[D]=W?$o(m[D]):Rr(m[D]);if(ln(pe,$e))b(pe,$e,v,null,I,M,U,X,W);else break;D++}for(;D<=B&&D<=ce;){const pe=_[B],$e=m[ce]=W?$o(m[ce]):Rr(m[ce]);if(ln(pe,$e))b(pe,$e,v,null,I,M,U,X,W);else break;B--,ce--}if(D>B){if(D<=ce){const pe=ce+1,$e=pe<O?m[pe].el:P;for(;D<=ce;)b(null,m[D]=W?$o(m[D]):Rr(m[D]),v,$e,I,M,U,X,W),D++}}else if(D>ce)for(;D<=B;)Ae(_[D],I,M,!0),D++;else{const pe=D,$e=D,He=new Map;for(D=$e;D<=ce;D++){const jt=m[D]=W?$o(m[D]):Rr(m[D]);jt.key!=null&&He.set(jt.key,D)}let Oe,at=0;const Lt=ce-$e+1;let Tr=!1,fa=0;const uo=new Array(Lt);for(D=0;D<Lt;D++)uo[D]=0;for(D=pe;D<=B;D++){const jt=_[D];if(at>=Lt){Ae(jt,I,M,!0);continue}let Q;if(jt.key!=null)Q=He.get(jt.key);else for(Oe=$e;Oe<=ce;Oe++)if(uo[Oe-$e]===0&&ln(jt,m[Oe])){Q=Oe;break}Q===void 0?Ae(jt,I,M,!0):(uo[Q-$e]=D+1,Q>=fa?fa=Q:Tr=!0,b(jt,m[Q],v,null,I,M,U,X,W),at++)}const Wr=Tr?Dw(uo):Jn;for(Oe=Wr.length-1,D=Lt-1;D>=0;D--){const jt=$e+D,Q=m[jt],ge=jt+1<O?m[jt+1].el:P;uo[D]===0?b(null,Q,v,ge,I,M,U,X,W):Tr&&(Oe<0||D!==Wr[Oe]?_e(Q,v,ge,2):Oe--)}}},_e=(_,m,v,P,I=null)=>{const{el:M,type:U,transition:X,children:W,shapeFlag:D}=_;if(D&6){_e(_.component.subTree,m,v,P);return}if(D&128){_.suspense.move(m,v,P);return}if(D&64){U.move(_,m,v,ae);return}if(U===Qe){o(M,m,v);for(let B=0;B<W.length;B++)_e(W[B],m,v,P);o(_.anchor,m,v);return}if(U===Ga){T(_,m,v);return}if(P!==2&&D&1&&X)if(P===0)X.beforeEnter(M),o(M,m,v),St(()=>X.enter(M),I);else{const{leave:B,delayLeave:ce,afterLeave:pe}=X,$e=()=>o(M,m,v),He=()=>{B(M,()=>{$e(),pe&&pe()})};ce?ce(M,$e,He):He()}else o(M,m,v)},Ae=(_,m,v,P=!1,I=!1)=>{const{type:M,props:U,ref:X,children:W,dynamicChildren:D,shapeFlag:O,patchFlag:B,dirs:ce}=_;if(X!=null&&nu(X,null,v,_,!0),O&256){m.ctx.deactivate(_);return}const pe=O&1&&ce,$e=!ri(_);let He;if($e&&(He=U&&U.onVnodeBeforeUnmount)&&cr(He,m,_),O&6)N(_.component,v,P);else{if(O&128){_.suspense.unmount(v,P);return}pe&&en(_,null,m,"beforeUnmount"),O&64?_.type.remove(_,m,v,I,ae,P):D&&(M!==Qe||B>0&&B&64)?J(D,m,v,!1,!0):(M===Qe&&B&384||!I&&O&16)&&J(W,m,v),P&&ut(_)}($e&&(He=U&&U.onVnodeUnmounted)||pe)&&St(()=>{He&&cr(He,m,_),pe&&en(_,null,m,"unmounted")},v)},ut=_=>{const{type:m,el:v,anchor:P,transition:I}=_;if(m===Qe){Ue(v,P);return}if(m===Ga){x(_);return}const M=()=>{n(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(_.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:X}=I,W=()=>U(v,M);X?X(_.el,M,W):W()}else M()},Ue=(_,m)=>{let v;for(;_!==m;)v=f(_),n(_),_=v;n(m)},N=(_,m,v)=>{const{bum:P,scope:I,update:M,subTree:U,um:X}=_;P&&ss(P),I.stop(),M&&(M.active=!1,Ae(U,_,m,v)),X&&St(X,m),St(()=>{_.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},J=(_,m,v,P=!1,I=!1,M=0)=>{for(let U=M;U<_.length;U++)Ae(_[U],m,v,P,I)},te=_=>_.shapeFlag&6?te(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),de=(_,m,v)=>{_==null?m._vnode&&Ae(m._vnode,null,null,!0):b(m._vnode||null,_,m,null,null,null,v),Xf(),Am(),m._vnode=_},ae={p:b,um:Ae,m:_e,r:ut,mt:F,mc:L,pc:se,pbc:R,n:te,o:e};let Te,me;return t&&([Te,me]=t(ae)),{render:de,hydrate:Te,createApp:Mw(de,Te)}}function tn({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function yd(e,t,r=!1){const o=e.children,n=t.children;if(we(o)&&we(n))for(let i=0;i<o.length;i++){const s=o[i];let a=n[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[i]=$o(n[i]),a.el=s.el),r||yd(s,a))}}function Dw(e){const t=e.slice(),r=[0];let o,n,i,s,a;const l=e.length;for(o=0;o<l;o++){const c=e[o];if(c!==0){if(n=r[r.length-1],e[n]<c){t[o]=n,r.push(o);continue}for(i=0,s=r.length-1;i<s;)a=i+s>>1,e[r[a]]<c?i=a+1:s=a;c<e[r[i]]&&(i>0&&(t[o]=r[i-1]),r[i]=o)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=t[s];return r}const zw=e=>e.__isTeleport,as=e=>e&&(e.disabled||e.disabled===""),sh=e=>typeof SVGElement<"u"&&e instanceof SVGElement,iu=(e,t)=>{const r=e&&e.to;return ft(r)?t?t(r):null:r},Fw={__isTeleport:!0,process(e,t,r,o,n,i,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:b,createComment:y}}=c,g=as(t.props);let{shapeFlag:w,children:T,dynamicChildren:x}=t;if(e==null){const C=t.el=b(""),$=t.anchor=b("");h(C,r,o),h($,r,o);const S=t.target=iu(t.props,p),L=t.targetAnchor=b("");S&&(h(L,S),s=s||sh(S));const k=(R,H)=>{w&16&&u(T,R,H,n,i,s,a,l)};g?k(r,$):S&&k(S,L)}else{t.el=e.el;const C=t.anchor=e.anchor,$=t.target=e.target,S=t.targetAnchor=e.targetAnchor,L=as(e.props),k=L?r:$,R=L?C:S;if(s=s||sh($),x?(f(e.dynamicChildren,x,k,n,i,s,a),yd(e,t,!0)):l||d(e,t,k,R,n,i,s,a,!1),g)L||va(t,r,C,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const H=t.target=iu(t.props,p);H&&va(t,H,null,c,0)}else L&&va(t,$,S,c,1)}},remove(e,t,r,o,{um:n,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=e;if(d&&i(u),(s||!as(f))&&(i(c),a&16))for(let h=0;h<l.length;h++){const p=l[h];n(p,t,r,!0,!!p.dynamicChildren)}},move:va,hydrate:Nw};function va(e,t,r,{o:{insert:o},m:n},i=2){i===0&&o(e.targetAnchor,t,r);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=e,d=i===2;if(d&&o(s,t,r),(!d||as(u))&&l&16)for(let f=0;f<c.length;f++)n(c[f],t,r,2);d&&o(a,t,r)}function Nw(e,t,r,o,n,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const u=t.target=iu(t.props,l);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(as(t.props))t.anchor=c(s(e),t,a(e),r,o,n,i),t.targetAnchor=d;else{t.anchor=s(e);let f=d;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&s(t.targetAnchor);break}c(d,t,u,r,o,n,i)}}return t.anchor&&s(t.anchor)}const Ks=Fw,Qe=Symbol(void 0),Dl=Symbol(void 0),zt=Symbol(void 0),Ga=Symbol(void 0),ls=[];let yr=null;function vn(e=!1){ls.push(yr=e?null:[])}function jw(){ls.pop(),yr=ls[ls.length-1]||null}let $s=1;function ah(e){$s+=e}function t0(e){return e.dynamicChildren=$s>0?yr||Jn:null,jw(),$s>0&&yr&&yr.push(e),e}function L9(e,t,r,o,n,i){return t0(cs(e,t,r,o,n,i,!0))}function yn(e,t,r,o,n){return t0(ct(e,t,r,o,n,!0))}function fi(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const zl="__vInternal",r0=({key:e})=>e!=null?e:null,Xa=({ref:e,ref_key:t,ref_for:r})=>e!=null?ft(e)||yt(e)||ke(e)?{i:At,r:e,k:t,f:!!r}:e:null;function cs(e,t=null,r=null,o=0,n=null,i=e===Qe?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&r0(t),ref:t&&Xa(t),scopeId:Ml,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:n,dynamicChildren:null,appContext:null};return a?(xd(l,r),i&128&&e.normalize(l)):r&&(l.shapeFlag|=ft(r)?8:16),$s>0&&!s&&yr&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&yr.push(l),l}const ct=Ww;function Ww(e,t=null,r=null,o=0,n=null,i=!1){if((!e||e===Vm)&&(e=zt),fi(e)){const a=Sr(e,t,!0);return r&&xd(a,r),$s>0&&!i&&yr&&(a.shapeFlag&6?yr[yr.indexOf(e)]=a:yr.push(a)),a.patchFlag|=-2,a}if(Jw(e)&&(e=e.__vccOpts),t){t=Uw(t);let{class:a,style:l}=t;a&&!ft(a)&&(t.class=$l(a)),st(l)&&(Tm(l)&&!we(l)&&(l=wt({},l)),t.style=Pi(l))}const s=ft(e)?1:Hm(e)?128:zw(e)?64:st(e)?4:ke(e)?2:0;return cs(e,t,r,o,n,s,i,!0)}function Uw(e){return e?Tm(e)||zl in e?wt({},e):e:null}function Sr(e,t,r=!1){const{props:o,ref:n,patchFlag:i,children:s}=e,a=t?Fl(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&r0(a),ref:t&&t.ref?r&&n?we(n)?n.concat(Xa(t)):[n,Xa(t)]:Xa(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sr(e.ssContent),ssFallback:e.ssFallback&&Sr(e.ssFallback),el:e.el,anchor:e.anchor}}function hi(e=" ",t=0){return ct(Dl,null,e,t)}function k9(e,t){const r=ct(Ga,null,e);return r.staticCount=t,r}function I9(e="",t=!1){return t?(vn(),yn(zt,null,e)):ct(zt,null,e)}function Rr(e){return e==null||typeof e=="boolean"?ct(zt):we(e)?ct(Qe,null,e.slice()):typeof e=="object"?$o(e):ct(Dl,null,String(e))}function $o(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Sr(e)}function xd(e,t){let r=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(we(t))r=16;else if(typeof t=="object")if(o&65){const n=t.default;n&&(n._c&&(n._d=!1),xd(e,n()),n._c&&(n._d=!0));return}else{r=32;const n=t._;!n&&!(zl in t)?t._ctx=At:n===3&&At&&(At.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ke(t)?(t={default:t,_ctx:At},r=32):(t=String(t),o&64?(r=16,t=[hi(t)]):r=8);e.children=t,e.shapeFlag|=r}function Fl(...e){const t={};for(let r=0;r<e.length;r++){const o=e[r];for(const n in o)if(n==="class")t.class!==o.class&&(t.class=$l([t.class,o.class]));else if(n==="style")t.style=Pi([t.style,o.style]);else if(Pl(n)){const i=t[n],s=o[n];s&&i!==s&&!(we(i)&&i.includes(s))&&(t[n]=i?[].concat(i,s):s)}else n!==""&&(t[n]=o[n])}return t}function cr(e,t,r,o=null){dr(e,t,7,[r,o])}const Vw=e0();let Kw=0;function qw(e,t,r){const o=e.type,n=(t?t.appContext:e.appContext)||Vw,i={uid:Kw++,vnode:e,type:o,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ym(o,n),emitsOptions:Bm(o,n),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:o.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=iw.bind(null,i),e.ce&&e.ce(i),i}let Ct=null;const fr=()=>Ct||At,pi=e=>{Ct=e,e.scope.on()},xn=()=>{Ct&&Ct.scope.off(),Ct=null};function o0(e){return e.vnode.shapeFlag&4}let Ps=!1;function Gw(e,t=!1){Ps=t;const{props:r,children:o}=e.vnode,n=o0(e);Lw(e,r,n,t),Rw(e,o);const i=n?Xw(e,t):void 0;return Ps=!1,i}function Xw(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=sl(new Proxy(e.ctx,Sw));const{setup:o}=r;if(o){const n=e.setupContext=o.length>1?Zw(e):null;pi(e),Li();const i=Bo(o,e,0,[e.props,n]);if(ki(),xn(),dm(i)){if(i.then(xn,xn),t)return i.then(s=>{lh(e,s,t)}).catch(s=>{Ol(s,e,0)});e.asyncDep=i}else lh(e,i,t)}else n0(e,t)}function lh(e,t,r){ke(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:st(t)&&(e.setupState=km(t)),n0(e,r)}let ch;function n0(e,t,r){const o=e.type;if(!e.render){if(!t&&ch&&!o.render){const n=o.template||bd(e).template;if(n){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=o,c=wt(wt({isCustomElement:i,delimiters:a},s),l);o.render=ch(n,c)}}e.render=o.render||Cr}pi(e),Li(),Ew(e),ki(),xn()}function Yw(e){return new Proxy(e.attrs,{get(t,r){return nr(e,"get","$attrs"),t[r]}})}function Zw(e){const t=o=>{e.exposed=o||{}};let r;return{get attrs(){return r||(r=Yw(e))},slots:e.slots,emit:e.emit,expose:t}}function Nl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(km(sl(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in ll)return ll[r](e)}}))}function su(e,t=!0){return ke(e)?e.displayName||e.name:e.name||t&&e.__name}function Jw(e){return ke(e)&&"__vccOpts"in e}const K=(e,t)=>QC(e,t,Ps);function E(e,t,r){const o=arguments.length;return o===2?st(t)&&!we(t)?fi(t)?ct(e,null,[t]):ct(e,t):ct(e,null,t):(o>3?r=Array.prototype.slice.call(arguments,2):o===3&&fi(r)&&(r=[r]),ct(e,t,r))}const Qw="3.2.41",e2="http://www.w3.org/2000/svg",cn=typeof document<"u"?document:null,uh=cn&&cn.createElement("template"),t2={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,o)=>{const n=t?cn.createElementNS(e2,e):cn.createElement(e,r?{is:r}:void 0);return e==="select"&&o&&o.multiple!=null&&n.setAttribute("multiple",o.multiple),n},createText:e=>cn.createTextNode(e),createComment:e=>cn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,o,n,i){const s=r?r.previousSibling:t.lastChild;if(n&&(n===i||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),r),!(n===i||!(n=n.nextSibling)););else{uh.innerHTML=o?`<svg>${e}</svg>`:e;const a=uh.content;if(o){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function r2(e,t,r){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function o2(e,t,r){const o=e.style,n=ft(r);if(r&&!n){for(const i in r)au(o,i,r[i]);if(t&&!ft(t))for(const i in t)r[i]==null&&au(o,i,"")}else{const i=o.display;n?t!==r&&(o.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const dh=/\s*!important$/;function au(e,t,r){if(we(r))r.forEach(o=>au(e,t,o));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const o=n2(e,t);dh.test(r)?e.setProperty(kn(o),r.replace(dh,""),"important"):e[o]=r}}const fh=["Webkit","Moz","ms"],yc={};function n2(e,t){const r=yc[t];if(r)return r;let o=Hr(t);if(o!=="filter"&&o in e)return yc[t]=o;o=Il(o);for(let n=0;n<fh.length;n++){const i=fh[n]+o;if(i in e)return yc[t]=i}return t}const hh="http://www.w3.org/1999/xlink";function i2(e,t,r,o,n){if(o&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(hh,t.slice(6,t.length)):e.setAttributeNS(hh,t,r);else{const i=lC(t);r==null||i&&!lm(r)?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}function s2(e,t,r,o,n,i,s){if(t==="innerHTML"||t==="textContent"){o&&s(o,n,i),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=lm(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function a2(e,t,r,o){e.addEventListener(t,r,o)}function l2(e,t,r,o){e.removeEventListener(t,r,o)}function c2(e,t,r,o,n=null){const i=e._vei||(e._vei={}),s=i[t];if(o&&s)s.value=o;else{const[a,l]=u2(t);if(o){const c=i[t]=h2(o,n);a2(e,a,c,l)}else s&&(l2(e,a,s,l),i[t]=void 0)}}const ph=/(?:Once|Passive|Capture)$/;function u2(e){let t;if(ph.test(e)){t={};let o;for(;o=e.match(ph);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kn(e.slice(2)),t]}let xc=0;const d2=Promise.resolve(),f2=()=>xc||(d2.then(()=>xc=0),xc=Date.now());function h2(e,t){const r=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=r.attached)return;dr(p2(o,r.value),t,5,[o])};return r.value=e,r.attached=f2(),r}function p2(e,t){if(we(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(o=>n=>!n._stopped&&o&&o(n))}else return t}const gh=/^on[a-z]/,g2=(e,t,r,o,n=!1,i,s,a,l)=>{t==="class"?r2(e,o,n):t==="style"?o2(e,r,o):Pl(t)?Zu(t)||c2(e,t,r,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):m2(e,t,o,n))?s2(e,t,o,i,s,a,l):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),i2(e,t,o,n))};function m2(e,t,r,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&gh.test(t)&&ke(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gh.test(t)&&ft(r)?!1:t in e}const ho="transition",ji="animation",Kt=(e,{slots:t})=>E(Fm,s0(e),t);Kt.displayName="Transition";const i0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},b2=Kt.props=wt({},Fm.props,i0),rn=(e,t=[])=>{we(e)?e.forEach(r=>r(...t)):e&&e(...t)},mh=e=>e?we(e)?e.some(t=>t.length>1):e.length>1:!1;function s0(e){const t={};for(const A in e)A in i0||(t[A]=e[A]);if(e.css===!1)return t;const{name:r="v",type:o,duration:n,enterFromClass:i=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=i,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${r}-leave-from`,leaveActiveClass:f=`${r}-leave-active`,leaveToClass:h=`${r}-leave-to`}=e,p=v2(n),b=p&&p[0],y=p&&p[1],{onBeforeEnter:g,onEnter:w,onEnterCancelled:T,onLeave:x,onLeaveCancelled:C,onBeforeAppear:$=g,onAppear:S=w,onAppearCancelled:L=T}=t,k=(A,q,F)=>{Eo(A,q?u:a),Eo(A,q?c:s),F&&F()},R=(A,q)=>{A._isLeaving=!1,Eo(A,d),Eo(A,h),Eo(A,f),q&&q()},H=A=>(q,F)=>{const ee=A?S:w,Y=()=>k(q,A,F);rn(ee,[q,Y]),bh(()=>{Eo(q,A?l:i),Xr(q,A?u:a),mh(ee)||vh(q,o,b,Y)})};return wt(t,{onBeforeEnter(A){rn(g,[A]),Xr(A,i),Xr(A,s)},onBeforeAppear(A){rn($,[A]),Xr(A,l),Xr(A,c)},onEnter:H(!1),onAppear:H(!0),onLeave(A,q){A._isLeaving=!0;const F=()=>R(A,q);Xr(A,d),l0(),Xr(A,f),bh(()=>{!A._isLeaving||(Eo(A,d),Xr(A,h),mh(x)||vh(A,o,y,F))}),rn(x,[A,F])},onEnterCancelled(A){k(A,!1),rn(T,[A])},onAppearCancelled(A){k(A,!0),rn(L,[A])},onLeaveCancelled(A){R(A),rn(C,[A])}})}function v2(e){if(e==null)return null;if(st(e))return[Cc(e.enter),Cc(e.leave)];{const t=Cc(e);return[t,t]}}function Cc(e){return pm(e)}function Xr(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function Eo(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function bh(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let y2=0;function vh(e,t,r,o){const n=e._endId=++y2,i=()=>{n===e._endId&&o()};if(r)return setTimeout(i,r);const{type:s,timeout:a,propCount:l}=a0(e,t);if(!s)return o();const c=s+"end";let u=0;const d=()=>{e.removeEventListener(c,f),i()},f=h=>{h.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,f)}function a0(e,t){const r=window.getComputedStyle(e),o=p=>(r[p]||"").split(", "),n=o(ho+"Delay"),i=o(ho+"Duration"),s=yh(n,i),a=o(ji+"Delay"),l=o(ji+"Duration"),c=yh(a,l);let u=null,d=0,f=0;t===ho?s>0&&(u=ho,d=s,f=i.length):t===ji?c>0&&(u=ji,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?ho:ji:null,f=u?u===ho?i.length:l.length:0);const h=u===ho&&/\b(transform|all)(,|$)/.test(r[ho+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:h}}function yh(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,o)=>xh(r)+xh(e[o])))}function xh(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function l0(){return document.body.offsetHeight}const c0=new WeakMap,u0=new WeakMap,x2={name:"TransitionGroup",props:wt({},b2,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=fr(),o=zm();let n,i;return hd(()=>{if(!n.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!_2(n[0].el,r.vnode.el,s))return;n.forEach(w2),n.forEach(S2);const a=n.filter(E2);l0(),a.forEach(l=>{const c=l.el,u=c.style;Xr(c,s),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Eo(c,s))};c.addEventListener("transitionend",d)})}),()=>{const s=We(e),a=s0(s);let l=s.tag||Qe;n=i,i=t.default?fd(t.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&di(u,Ts(u,a,o,r))}if(n)for(let c=0;c<n.length;c++){const u=n[c];di(u,Ts(u,a,o,r)),c0.set(u,u.el.getBoundingClientRect())}return ct(l,null,i)}}},C2=x2;function w2(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function S2(e){u0.set(e,e.el.getBoundingClientRect())}function E2(e){const t=c0.get(e),r=u0.get(e),o=t.left-r.left,n=t.top-r.top;if(o||n){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${n}px)`,i.transitionDuration="0s",e}}function _2(e,t,r){const o=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(a=>a&&o.classList.remove(a))}),r.split(/\s+/).forEach(s=>s&&o.classList.add(s)),o.style.display="none";const n=t.nodeType===1?t:t.parentNode;n.appendChild(o);const{hasTransform:i}=a0(o);return n.removeChild(o),i}const T2=["ctrl","shift","alt","meta"],$2={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>T2.some(r=>e[`${r}Key`]&&!t.includes(r))},R9=(e,t)=>(r,...o)=>{for(let n=0;n<t.length;n++){const i=$2[t[n]];if(i&&i(r,t))return}return e(r,...o)},P2={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},O9=(e,t)=>r=>{if(!("key"in r))return;const o=kn(r.key);if(t.some(n=>n===o||P2[n]===o))return e(r)},Ls={beforeMount(e,{value:t},{transition:r}){e._vod=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):Wi(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:o}){!t!=!r&&(o?t?(o.beforeEnter(e),Wi(e,!0),o.enter(e)):o.leave(e,()=>{Wi(e,!1)}):Wi(e,t))},beforeUnmount(e,{value:t}){Wi(e,t)}};function Wi(e,t){e.style.display=t?e._vod:"none"}const L2=wt({patchProp:g2},t2);let Ch;function k2(){return Ch||(Ch=Bw(L2))}const I2=(...e)=>{const t=k2().createApp(...e),{mount:r}=t;return t.mount=o=>{const n=R2(o);if(!n)return;const i=t._component;!ke(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.innerHTML="";const s=r(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},t};function R2(e){return ft(e)?document.querySelector(e):e}let ul=[];const d0=new WeakMap;function O2(){ul.forEach(e=>e(...d0.get(e))),ul=[]}function f0(e,...t){d0.set(e,t),!ul.includes(e)&&ul.push(e)===1&&requestAnimationFrame(O2)}function ks(e){return e.composedPath()[0]||null}function A9(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function M9(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function h0(e,t){const r=e.trim().split(/\s+/g),o={top:r[0]};switch(r.length){case 1:o.right=r[0],o.bottom=r[0],o.left=r[0];break;case 2:o.right=r[1],o.left=r[1],o.bottom=r[0];break;case 3:o.right=r[1],o.bottom=r[2],o.left=r[1];break;case 4:o.right=r[1],o.bottom=r[2],o.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?o:o[t]}function B9(e,t){const[r,o]=e.split(" ");return t?t==="row"?r:o:{row:r,col:o||r}}const wh={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},Ii="^\\s*",Ri="\\s*$",hn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",pn="([0-9A-Fa-f])",gn="([0-9A-Fa-f]{2})",A2=new RegExp(`${Ii}rgb\\s*\\(${hn},${hn},${hn}\\)${Ri}`),M2=new RegExp(`${Ii}rgba\\s*\\(${hn},${hn},${hn},${hn}\\)${Ri}`),B2=new RegExp(`${Ii}#${pn}${pn}${pn}${Ri}`),H2=new RegExp(`${Ii}#${gn}${gn}${gn}${Ri}`),D2=new RegExp(`${Ii}#${pn}${pn}${pn}${pn}${Ri}`),z2=new RegExp(`${Ii}#${gn}${gn}${gn}${gn}${Ri}`);function Ut(e){return parseInt(e,16)}function ro(e){try{let t;if(t=H2.exec(e))return[Ut(t[1]),Ut(t[2]),Ut(t[3]),1];if(t=A2.exec(e))return[It(t[1]),It(t[5]),It(t[9]),1];if(t=M2.exec(e))return[It(t[1]),It(t[5]),It(t[9]),us(t[13])];if(t=B2.exec(e))return[Ut(t[1]+t[1]),Ut(t[2]+t[2]),Ut(t[3]+t[3]),1];if(t=z2.exec(e))return[Ut(t[1]),Ut(t[2]),Ut(t[3]),us(Ut(t[4])/255)];if(t=D2.exec(e))return[Ut(t[1]+t[1]),Ut(t[2]+t[2]),Ut(t[3]+t[3]),us(Ut(t[4]+t[4])/255)];if(e in wh)return ro(wh[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function F2(e){return e>1?1:e<0?0:e}function lu(e,t,r,o){return`rgba(${It(e)}, ${It(t)}, ${It(r)}, ${F2(o)})`}function wc(e,t,r,o,n){return It((e*t*(1-o)+r*o)/n)}function he(e,t){Array.isArray(e)||(e=ro(e)),Array.isArray(t)||(t=ro(t));const r=e[3],o=t[3],n=us(r+o-r*o);return lu(wc(e[0],r,t[0],o,n),wc(e[1],r,t[1],o,n),wc(e[2],r,t[2],o,n),n)}function G(e,t){const[r,o,n,i=1]=Array.isArray(e)?e:ro(e);return t.alpha?lu(r,o,n,t.alpha):lu(r,o,n,i)}function pt(e,t){const[r,o,n,i=1]=Array.isArray(e)?e:ro(e),{lightness:s=1,alpha:a=1}=t;return N2([r*s,o*s,n*s,i*a])}function us(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function It(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function N2(e){const[t,r,o]=e;return 3 in e?`rgba(${It(t)}, ${It(r)}, ${It(o)}, ${us(e[3])})`:`rgba(${It(t)}, ${It(r)}, ${It(o)}, 1)`}function Tn(e=8){return Math.random().toString(16).slice(2,2+e)}function H9(e,t){const r=[];for(let o=0;o<e;++o)r.push(t);return r}function gi(e,t=[],r){const o={};return t.forEach(n=>{o[n]=e[n]}),Object.assign(o,r)}function Cd(e,t=[],r){const o={};return Object.getOwnPropertyNames(e).forEach(i=>{t.includes(i)||(o[i]=e[i])}),Object.assign(o,r)}function cu(e,t=!0,r=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&r.push(hi(String(o)));return}if(Array.isArray(o)){cu(o,t,r);return}if(o.type===Qe){if(o.children===null)return;Array.isArray(o.children)&&cu(o.children,t,r)}else o.type!==zt&&r.push(o)}}),r}function rr(e,...t){if(Array.isArray(e))e.forEach(r=>rr(r,...t));else return e(...t)}function jl(e){return Object.keys(e)}const Qt=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?hi(e):typeof e=="number"?hi(String(e)):null;function Is(e,t){console.error(`[naive/${e}]: ${t}`)}function In(e,t){throw new Error(`[naive/${e}]: ${t}`)}function uu(e,t="default",r=void 0){const o=e[t];if(!o)return Is("getFirstSlotVNode",`slot[${t}] is empty`),null;const n=cu(o(r));return n.length===1?n[0]:(Is("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function D9(e){return e}function qs(e){return e.some(t=>fi(t)?!(t.type===zt||t.type===Qe&&!qs(t.children)):!0)?e:null}function du(e,t){return e&&qs(e())||t()}function z9(e,t,r){return e&&qs(e(t))||r(t)}function er(e,t){const r=e&&qs(e());return t(r||null)}function fu(e){return!(e&&qs(e()))}const Sh=be({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}}),j2=/^(\d|\.)+$/,Eh=/(\d|\.)+/;function Zr(e,{c:t=1,offset:r=0,attachPx:o=!0}={}){if(typeof e=="number"){const n=(e+r)*t;return n===0?"0":`${n}px`}else if(typeof e=="string")if(j2.test(e)){const n=(Number(e)+r)*t;return o?n===0?"0":`${n}px`:`${n}`}else{const n=Eh.exec(e);return n?e.replace(Eh,String((Number(n[0])+r)*t)):e}return e}function _h(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function W2(e){let t=0;for(let r=0;r<e.length;++r)e[r]==="&"&&++t;return t}const p0=/\s*,(?![^(]*\))\s*/g,U2=/\s+/g;function V2(e,t){const r=[];return t.split(p0).forEach(o=>{let n=W2(o);if(n){if(n===1){e.forEach(s=>{r.push(o.replace("&",s))});return}}else{e.forEach(s=>{r.push((s&&s+" ")+o)});return}let i=[o];for(;n--;){const s=[];i.forEach(a=>{e.forEach(l=>{s.push(a.replace("&",l))})}),i=s}i.forEach(s=>r.push(s))}),r}function K2(e,t){const r=[];return t.split(p0).forEach(o=>{e.forEach(n=>{r.push((n&&n+" ")+o)})}),r}function q2(e){let t=[""];return e.forEach(r=>{r=r&&r.trim(),r&&(r.includes("&")?t=V2(t,r):t=K2(t,r))}),t.join(", ").replace(U2," ")}function Th(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function Wl(e){return document.querySelector(`style[cssr-id="${e}"]`)}function G2(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function ya(e){return e?/^\s*@(s|m)/.test(e):!1}const X2=/[A-Z]/g;function g0(e){return e.replace(X2,t=>"-"+t.toLowerCase())}function Y2(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(r=>t+`  ${g0(r[0])}: ${r[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Z2(e,t,r){return typeof e=="function"?e({context:t.context,props:r}):e}function $h(e,t,r,o){if(!t)return"";const n=Z2(t,r,o);if(!n)return"";if(typeof n=="string")return`${e} {
${n}
}`;const i=Object.keys(n);if(i.length===0)return r.config.keepEmptyBlock?e+` {
}`:"";const s=e?[e+" {"]:[];return i.forEach(a=>{const l=n[a];if(a==="raw"){s.push(`
`+l+`
`);return}a=g0(a),l!=null&&s.push(`  ${a}${Y2(l)}`)}),e&&s.push("}"),s.join(`
`)}function hu(e,t,r){!e||e.forEach(o=>{if(Array.isArray(o))hu(o,t,r);else if(typeof o=="function"){const n=o(t);Array.isArray(n)?hu(n,t,r):n&&r(n)}else o&&r(o)})}function m0(e,t,r,o,n,i){const s=e.$;let a="";if(!s||typeof s=="string")ya(s)?a=s:t.push(s);else if(typeof s=="function"){const u=s({context:o.context,props:n});ya(u)?a=u:t.push(u)}else if(s.before&&s.before(o.context),!s.$||typeof s.$=="string")ya(s.$)?a=s.$:t.push(s.$);else if(s.$){const u=s.$({context:o.context,props:n});ya(u)?a=u:t.push(u)}const l=q2(t),c=$h(l,e.props,o,n);a?(r.push(`${a} {`),i&&c&&i.insertRule(`${a} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&r.push(c)),e.children&&hu(e.children,{context:o.context,props:n},u=>{if(typeof u=="string"){const d=$h(l,{raw:u},o,n);i?i.insertRule(d):r.push(d)}else m0(u,t,r,o,n,i)}),t.pop(),a&&r.push("}"),s&&s.after&&s.after(o.context)}function b0(e,t,r,o=!1){const n=[];return m0(e,[],n,t,r,o?e.instance.__styleSheet:void 0),o?"":n.join(`

`)}function Rs(e){for(var t=0,r,o=0,n=e.length;n>=4;++o,n-=4)r=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(o+2)&255)<<16;case 2:t^=(e.charCodeAt(o+1)&255)<<8;case 1:t^=e.charCodeAt(o)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function J2(e,t,r){const{els:o}=t;if(r===void 0)o.forEach(Th),t.els=[];else{const n=Wl(r);n&&o.includes(n)&&(Th(n),t.els=o.filter(i=>i!==n))}}function Ph(e,t){e.push(t)}function Q2(e,t,r,o,n,i,s,a,l){if(i&&!l){if(r===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const f=window.__cssrContext;f[r]||(f[r]=!0,b0(t,e,o,i));return}let c;if(r===void 0&&(c=t.render(o),r=Rs(c)),l){l.adapter(r,c!=null?c:t.render(o));return}const u=Wl(r);if(u!==null&&!s)return u;const d=u!=null?u:G2(r);if(c===void 0&&(c=t.render(o)),d.textContent=c,u!==null)return u;if(a){const f=document.head.querySelector(`meta[name="${a}"]`);if(f)return document.head.insertBefore(d,f),Ph(t.els,d),d}return n?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),Ph(t.els,d),d}function eS(e){return b0(this,this.instance,e)}function tS(e={}){const{id:t,ssr:r,props:o,head:n=!1,silent:i=!1,force:s=!1,anchorMetaName:a}=e;return Q2(this.instance,this,t,o,n,i,s,a,r)}function rS(e={}){const{id:t}=e;J2(this.instance,this,t)}const xa=function(e,t,r,o){return{instance:e,$:t,props:r,children:o,els:[],render:eS,mount:tS,unmount:rS}},oS=function(e,t,r,o){return Array.isArray(t)?xa(e,{$:null},null,t):Array.isArray(r)?xa(e,t,null,r):Array.isArray(o)?xa(e,t,r,o):xa(e,t,r,null)};function v0(e={}){let t=null;const r={c:(...o)=>oS(r,...o),use:(o,...n)=>o.install(r,...n),find:Wl,context:{},config:e,get __styleSheet(){if(!t){const o=document.createElement("style");return document.head.appendChild(o),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return r}function nS(e,t){if(e===void 0)return!1;if(t){const{context:{ids:r}}=t;return r.has(e)}return Wl(e)!==null}function iS(e){let t=".",r="__",o="--",n;if(e){let p=e.blockPrefix;p&&(t=p),p=e.elementPrefix,p&&(r=p),p=e.modifierPrefix,p&&(o=p)}const i={install(p){n=p.c;const b=p.context;b.bem={},b.bem.b=null,b.bem.els=null}};function s(p){let b,y;return{before(g){b=g.bem.b,y=g.bem.els,g.bem.els=null},after(g){g.bem.b=b,g.bem.els=y},$({context:g,props:w}){return p=typeof p=="string"?p:p({context:g,props:w}),g.bem.b=p,`${(w==null?void 0:w.bPrefix)||t}${g.bem.b}`}}}function a(p){let b;return{before(y){b=y.bem.els},after(y){y.bem.els=b},$({context:y,props:g}){return p=typeof p=="string"?p:p({context:y,props:g}),y.bem.els=p.split(",").map(w=>w.trim()),y.bem.els.map(w=>`${(g==null?void 0:g.bPrefix)||t}${y.bem.b}${r}${w}`).join(", ")}}}function l(p){return{$({context:b,props:y}){p=typeof p=="string"?p:p({context:b,props:y});const g=p.split(",").map(x=>x.trim());function w(x){return g.map(C=>`&${(y==null?void 0:y.bPrefix)||t}${b.bem.b}${x!==void 0?`${r}${x}`:""}${o}${C}`).join(", ")}const T=b.bem.els;return T!==null?w(T[0]):w()}}}function c(p){return{$({context:b,props:y}){p=typeof p=="string"?p:p({context:b,props:y});const g=b.bem.els;return`&:not(${(y==null?void 0:y.bPrefix)||t}${b.bem.b}${g!==null&&g.length>0?`${r}${g[0]}`:""}${o}${p})`}}}return Object.assign(i,{cB:(...p)=>n(s(p[0]),p[1],p[2]),cE:(...p)=>n(a(p[0]),p[1],p[2]),cM:(...p)=>n(l(p[0]),p[1],p[2]),cNotM:(...p)=>n(c(p[0]),p[1],p[2])}),i}function Ce(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,r=>r.toUpperCase()))}Ce("abc","def");const sS="n",Os=`.${sS}-`,aS="__",lS="--",y0=v0(),x0=iS({blockPrefix:Os,elementPrefix:aS,modifierPrefix:lS});y0.use(x0);const{c:z,find:F9}=y0,{cB:j,cE:oe,cM:re,cNotM:Cn}=x0;function C0(e){return z(({props:{bPrefix:t}})=>`${t||Os}modal, ${t||Os}drawer`,[e])}function cS(e){return z(({props:{bPrefix:t}})=>`${t||Os}popover`,[e])}function w0(e){return z(({props:{bPrefix:t}})=>`&${t||Os}modal`,e)}const uS=(...e)=>z(">",[j(...e)]);let Sc;function dS(){return Sc===void 0&&(Sc=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Sc}const Rn=typeof document<"u"&&typeof window<"u",S0=new WeakSet;function N9(e){S0.add(e)}function fS(e){return!S0.has(e)}function hS(e){const t=V(!!e.value);if(t.value)return to(t);const r=et(e,o=>{o&&(t.value=!0,r())});return to(t)}function oo(e){const t=K(e),r=V(t.value);return et(t,o=>{r.value=o}),typeof e=="function"?r:{__v_isRef:!0,get value(){return r.value},set value(o){e.set(o)}}}function E0(){return fr()!==null}const wd=typeof window<"u";let oi,ds;const pS=()=>{var e,t;oi=wd?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,ds=!1,oi!==void 0?oi.then(()=>{ds=!0}):ds=!0};pS();function gS(e){if(ds)return;let t=!1;$t(()=>{ds||oi==null||oi.then(()=>{t||e()})}),xt(()=>{t=!0})}function Ya(e){return e.composedPath()[0]}const mS={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function bS(e,t,r){if(e==="mousemoveoutside"){const o=n=>{t.contains(Ya(n))||r(n)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const n=s=>{o=!t.contains(Ya(s))},i=s=>{!o||t.contains(Ya(s))||r(s)};return{mousedown:n,mouseup:i,touchstart:n,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function _0(e,t,r){const o=mS[e];let n=o.get(t);n===void 0&&o.set(t,n=new WeakMap);let i=n.get(r);return i===void 0&&n.set(r,i=bS(e,t,r)),i}function vS(e,t,r,o){if(e==="mousemoveoutside"||e==="clickoutside"){const n=_0(e,t,r);return Object.keys(n).forEach(i=>{mt(i,document,n[i],o)}),!0}return!1}function yS(e,t,r,o){if(e==="mousemoveoutside"||e==="clickoutside"){const n=_0(e,t,r);return Object.keys(n).forEach(i=>{tt(i,document,n[i],o)}),!0}return!1}function xS(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function r(){e.set(this,!0)}function o(){e.set(this,!0),t.set(this,!0)}function n(S,L,k){const R=S[L];return S[L]=function(){return k.apply(S,arguments),R.apply(S,arguments)},S}function i(S,L){S[L]=Event.prototype[L]}const s=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var S;return(S=s.get(this))!==null&&S!==void 0?S:null}function c(S,L){a!==void 0&&Object.defineProperty(S,"currentTarget",{configurable:!0,enumerable:!0,get:L!=null?L:a.get})}const u={bubble:{},capture:{}},d={};function f(){const S=function(L){const{type:k,eventPhase:R,bubbles:H}=L,A=Ya(L);if(R===2)return;const q=R===1?"capture":"bubble";let F=A;const ee=[];for(;F===null&&(F=window),ee.push(F),F!==window;)F=F.parentNode||null;const Y=u.capture[k],Z=u.bubble[k];if(n(L,"stopPropagation",r),n(L,"stopImmediatePropagation",o),c(L,l),q==="capture"){if(Y===void 0)return;for(let se=ee.length-1;se>=0&&!e.has(L);--se){const ve=ee[se],Le=Y.get(ve);if(Le!==void 0){s.set(L,ve);for(const _e of Le){if(t.has(L))break;_e(L)}}if(se===0&&!H&&Z!==void 0){const _e=Z.get(ve);if(_e!==void 0)for(const Ae of _e){if(t.has(L))break;Ae(L)}}}}else if(q==="bubble"){if(Z===void 0)return;for(let se=0;se<ee.length&&!e.has(L);++se){const ve=ee[se],Le=Z.get(ve);if(Le!==void 0){s.set(L,ve);for(const _e of Le){if(t.has(L))break;_e(L)}}}}i(L,"stopPropagation"),i(L,"stopImmediatePropagation"),c(L)};return S.displayName="evtdUnifiedHandler",S}function h(){const S=function(L){const{type:k,eventPhase:R}=L;if(R!==2)return;const H=d[k];H!==void 0&&H.forEach(A=>A(L))};return S.displayName="evtdUnifiedWindowEventHandler",S}const p=f(),b=h();function y(S,L){const k=u[S];return k[L]===void 0&&(k[L]=new Map,window.addEventListener(L,p,S==="capture")),k[L]}function g(S){return d[S]===void 0&&(d[S]=new Set,window.addEventListener(S,b)),d[S]}function w(S,L){let k=S.get(L);return k===void 0&&S.set(L,k=new Set),k}function T(S,L,k,R){const H=u[L][k];if(H!==void 0){const A=H.get(S);if(A!==void 0&&A.has(R))return!0}return!1}function x(S,L){const k=d[S];return!!(k!==void 0&&k.has(L))}function C(S,L,k,R){let H;if(typeof R=="object"&&R.once===!0?H=Y=>{$(S,L,H,R),k(Y)}:H=k,vS(S,L,H,R))return;const q=R===!0||typeof R=="object"&&R.capture===!0?"capture":"bubble",F=y(q,S),ee=w(F,L);if(ee.has(H)||ee.add(H),L===window){const Y=g(S);Y.has(H)||Y.add(H)}}function $(S,L,k,R){if(yS(S,L,k,R))return;const A=R===!0||typeof R=="object"&&R.capture===!0,q=A?"capture":"bubble",F=y(q,S),ee=w(F,L);if(L===window&&!T(L,A?"bubble":"capture",S,k)&&x(S,k)){const Z=d[S];Z.delete(k),Z.size===0&&(window.removeEventListener(S,b),d[S]=void 0)}ee.has(k)&&ee.delete(k),ee.size===0&&F.delete(L),F.size===0&&(window.removeEventListener(S,p,q==="capture"),u[q][S]=void 0)}return{on:C,off:$}}const{on:mt,off:tt}=xS(),ts=V(null);function Lh(e){if(e.clientX>0||e.clientY>0)ts.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:r,top:o,width:n,height:i}=t.getBoundingClientRect();r>0||o>0?ts.value={x:r+n/2,y:o+i/2}:ts.value={x:0,y:0}}else ts.value=null}}let Ca=0,kh=!0;function T0(){if(!wd)return to(V(null));Ca===0&&mt("click",document,Lh,!0);const e=()=>{Ca+=1};return kh&&(kh=E0())?(Vo(e),xt(()=>{Ca-=1,Ca===0&&tt("click",document,Lh,!0)})):e(),to(ts)}const CS=V(void 0);let wa=0;function Ih(){CS.value=Date.now()}let Rh=!0;function $0(e){if(!wd)return to(V(!1));const t=V(!1);let r=null;function o(){r!==null&&window.clearTimeout(r)}function n(){o(),t.value=!0,r=window.setTimeout(()=>{t.value=!1},e)}wa===0&&mt("click",window,Ih,!0);const i=()=>{wa+=1,mt("click",window,n,!0)};return Rh&&(Rh=E0())?(Vo(i),xt(()=>{wa-=1,wa===0&&tt("click",window,Ih,!0),tt("click",window,n,!0),o()})):i(),to(t)}function P0(e,t){return et(e,r=>{r!==void 0&&(t.value=r)}),K(()=>e.value===void 0?t.value:e.value)}function Oi(){const e=V(!1);return $t(()=>{e.value=!0}),to(e)}function wS(e,t){return K(()=>{for(const r of t)if(e[r]!==void 0)return e[r];return e[t[t.length-1]]})}const SS=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function ES(){return SS}const j9="n-internal-select-menu",_S="n-internal-select-menu-body",Sd="n-modal-body",L0="n-modal",Ed="n-drawer-body",W9="n-drawer",_d="n-popover-body",k0="__disabled__";function mi(e){const t=Se(Sd,null),r=Se(Ed,null),o=Se(_d,null),n=Se(_S,null),i=V();if(typeof document<"u"){i.value=document.fullscreenElement;const s=()=>{i.value=document.fullscreenElement};$t(()=>{mt("fullscreenchange",document,s)}),xt(()=>{tt("fullscreenchange",document,s)})}return oo(()=>{var s;const{to:a}=e;return a!==void 0?a===!1?k0:a===!0?i.value||"body":a:t!=null&&t.value?(s=t.value.$el)!==null&&s!==void 0?s:t.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:n!=null&&n.value?n.value:a!=null?a:i.value||"body"})}mi.tdkey=k0;mi.propTo={type:[String,Object,Boolean],default:void 0};function pu(e,t,r="default"){const o=t[r];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);return o()}function gu(e,t=!0,r=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&r.push(hi(String(o)));return}if(Array.isArray(o)){gu(o,t,r);return}if(o.type===Qe){if(o.children===null)return;Array.isArray(o.children)&&gu(o.children,t,r)}else o.type!==zt&&r.push(o)}}),r}function Oh(e,t,r="default"){const o=t[r];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);const n=gu(o());if(n.length===1)return n[0];throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`)}let po=null;function I0(){if(po===null&&(po=document.getElementById("v-binder-view-measurer"),po===null)){po=document.createElement("div"),po.id="v-binder-view-measurer";const{style:e}=po;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(po)}return po.getBoundingClientRect()}function TS(e,t){const r=I0();return{top:t,left:e,height:0,width:0,right:r.width-e,bottom:r.height-t}}function Ec(e){const t=e.getBoundingClientRect(),r=I0();return{left:t.left-r.left,top:t.top-r.top,bottom:r.height+r.top-t.bottom,right:r.width+r.left-t.right,width:t.width,height:t.height}}function $S(e){return e.nodeType===9?null:e.parentNode}function R0(e){if(e===null)return null;const t=$S(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:r,overflowX:o,overflowY:n}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(r+n+o))return t}return R0(t)}const PS=be({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;qe("VBinder",(t=fr())===null||t===void 0?void 0:t.proxy);const r=Se("VBinder",null),o=V(null),n=g=>{o.value=g,r&&e.syncTargetWithParent&&r.setTargetRef(g)};let i=[];const s=()=>{let g=o.value;for(;g=R0(g),g!==null;)i.push(g);for(const w of i)mt("scroll",w,d,!0)},a=()=>{for(const g of i)tt("scroll",g,d,!0);i=[]},l=new Set,c=g=>{l.size===0&&s(),l.has(g)||l.add(g)},u=g=>{l.has(g)&&l.delete(g),l.size===0&&a()},d=()=>{f0(f)},f=()=>{l.forEach(g=>g())},h=new Set,p=g=>{h.size===0&&mt("resize",window,y),h.has(g)||h.add(g)},b=g=>{h.has(g)&&h.delete(g),h.size===0&&tt("resize",window,y)},y=()=>{h.forEach(g=>g())};return xt(()=>{tt("resize",window,y),a()}),{targetRef:o,setTargetRef:n,addScrollListener:c,removeScrollListener:u,addResizeListener:p,removeResizeListener:b}},render(){return pu("binder",this.$slots)}}),LS=PS,kS=be({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=Se("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Dr(Oh("follower",this.$slots),[[t]]):Oh("follower",this.$slots)}}),zn="@@mmoContext",IS={mounted(e,{value:t}){e[zn]={handler:void 0},typeof t=="function"&&(e[zn].handler=t,mt("mousemoveoutside",e,t))},updated(e,{value:t}){const r=e[zn];typeof t=="function"?r.handler?r.handler!==t&&(tt("mousemoveoutside",e,r.handler),r.handler=t,mt("mousemoveoutside",e,t)):(e[zn].handler=t,mt("mousemoveoutside",e,t)):r.handler&&(tt("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:t}=e[zn];t&&tt("mousemoveoutside",e,t),e[zn].handler=void 0}},RS=IS,Fn="@@coContext",OS={mounted(e,{value:t,modifiers:r}){e[Fn]={handler:void 0},typeof t=="function"&&(e[Fn].handler=t,mt("clickoutside",e,t,{capture:r.capture}))},updated(e,{value:t,modifiers:r}){const o=e[Fn];typeof t=="function"?o.handler?o.handler!==t&&(tt("clickoutside",e,o.handler,{capture:r.capture}),o.handler=t,mt("clickoutside",e,t,{capture:r.capture})):(e[Fn].handler=t,mt("clickoutside",e,t,{capture:r.capture})):o.handler&&(tt("clickoutside",e,o.handler,{capture:r.capture}),o.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:r}=e[Fn];r&&tt("clickoutside",e,r,{capture:t.capture}),e[Fn].handler=void 0}},mu=OS;function AS(e,t){console.error(`[vdirs/${e}]: ${t}`)}class MS{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,r){const{elementZIndex:o}=this;if(r!==void 0){t.style.zIndex=`${r}`,o.delete(t);return}const{nextZIndex:n}=this;o.has(t)&&o.get(t)+1===this.nextZIndex||(t.style.zIndex=`${n}`,o.set(t,n),this.nextZIndex=n+1,this.squashState())}unregister(t,r){const{elementZIndex:o}=this;o.has(t)?o.delete(t):r===void 0&&AS("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((r,o)=>r[1]-o[1]),this.nextZIndex=2e3,t.forEach(r=>{const o=r[0],n=this.nextZIndex++;`${n}`!==o.style.zIndex&&(o.style.zIndex=`${n}`)})}}const _c=new MS,Nn="@@ziContext",BS={mounted(e,t){const{value:r={}}=t,{zIndex:o,enabled:n}=r;e[Nn]={enabled:!!n,initialized:!1},n&&(_c.ensureZIndex(e,o),e[Nn].initialized=!0)},updated(e,t){const{value:r={}}=t,{zIndex:o,enabled:n}=r,i=e[Nn].enabled;n&&!i&&(_c.ensureZIndex(e,o),e[Nn].initialized=!0),e[Nn].enabled=!!n},unmounted(e,t){if(!e[Nn].initialized)return;const{value:r={}}=t,{zIndex:o}=r;_c.unregister(e,o)}},Ul=BS,O0=Symbol("@css-render/vue3-ssr");function HS(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function DS(e,t){const r=Se(O0,null);if(r===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:o,ids:n}=r;n.has(e)||o!==null&&(n.add(e),o.push(HS(e,t)))}const zS=typeof document<"u";function Gs(){if(zS)return;const e=Se(O0,null);if(e!==null)return{adapter:DS,context:e}}function Ah(e,t){console.error(`[vueuc/${e}]: ${t}`)}const{c:Sa}=v0(),FS="vueuc-style";function Mh(e){return typeof e=="string"?document.querySelector(e):e()}const Td=be({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:hS(Me(e,"show")),mergedTo:K(()=>{const{to:t}=e;return t!=null?t:"body"})}},render(){return this.showTeleport?this.disabled?pu("lazy-teleport",this.$slots):E(Ks,{disabled:this.disabled,to:this.mergedTo},pu("lazy-teleport",this.$slots)):null}}),Ea={top:"bottom",bottom:"top",left:"right",right:"left"},Bh={start:"end",center:"center",end:"start"},Tc={top:"height",bottom:"height",left:"width",right:"width"},NS={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},jS={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},WS={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Hh={top:!0,bottom:!1,left:!0,right:!1},Dh={top:"end",bottom:"start",left:"end",right:"start"};function US(e,t,r,o,n,i){if(!n||i)return{placement:e,top:0,left:0};const[s,a]=e.split("-");let l=a!=null?a:"center",c={top:0,left:0};const u=(h,p,b)=>{let y=0,g=0;const w=r[h]-t[p]-t[h];return w>0&&o&&(b?g=Hh[p]?w:-w:y=Hh[p]?w:-w),{left:y,top:g}},d=s==="left"||s==="right";if(l!=="center"){const h=WS[e],p=Ea[h],b=Tc[h];if(r[b]>t[b]){if(t[h]+t[b]<r[b]){const y=(r[b]-t[b])/2;t[h]<y||t[p]<y?t[h]<t[p]?(l=Bh[a],c=u(b,p,d)):c=u(b,h,d):l="center"}}else r[b]<t[b]&&t[p]<0&&t[h]>t[p]&&(l=Bh[a])}else{const h=s==="bottom"||s==="top"?"left":"top",p=Ea[h],b=Tc[h],y=(r[b]-t[b])/2;(t[h]<y||t[p]<y)&&(t[h]>t[p]?(l=Dh[h],c=u(b,h,d)):(l=Dh[p],c=u(b,p,d)))}let f=s;return t[s]<r[Tc[s]]&&t[s]<t[Ea[s]]&&(f=Ea[s]),{placement:l!=="center"?`${f}-${l}`:f,left:c.left,top:c.top}}function VS(e,t){return t?jS[e]:NS[e]}function KS(e,t,r,o,n,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left+r.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(r.top-t.top+r.height/2)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(r.top-t.top+r.height/2)}px`,left:`${Math.round(r.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left+r.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(r.top-t.top+r.height+o)}px`,left:`${Math.round(r.left-t.left+n)}px`,transform:""};case"bottom-end":return{top:`${Math.round(r.top-t.top+r.height+o)}px`,left:`${Math.round(r.left-t.left+r.width+n)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(r.top-t.top+o)}px`,left:`${Math.round(r.left-t.left+n)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(r.top-t.top+o)}px`,left:`${Math.round(r.left-t.left+r.width+n)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(r.top-t.top+o)}px`,left:`${Math.round(r.left-t.left+r.width+n)}px`,transform:""};case"right-end":return{top:`${Math.round(r.top-t.top+r.height+o)}px`,left:`${Math.round(r.left-t.left+r.width+n)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(r.top-t.top+o)}px`,left:`${Math.round(r.left-t.left+n)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(r.top-t.top+r.height+o)}px`,left:`${Math.round(r.left-t.left+n)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(r.top-t.top+o)}px`,left:`${Math.round(r.left-t.left+r.width/2+n)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(r.top-t.top+r.height/2+o)}px`,left:`${Math.round(r.left-t.left+r.width+n)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(r.top-t.top+r.height/2+o)}px`,left:`${Math.round(r.left-t.left+n)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(r.top-t.top+r.height+o)}px`,left:`${Math.round(r.left-t.left+r.width/2+n)}px`,transform:"translateX(-50%)"}}}const qS=Sa([Sa(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Sa(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Sa("> *",{pointerEvents:"all"})])]),GS=be({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=Se("VBinder"),r=oo(()=>e.enabled!==void 0?e.enabled:e.show),o=V(null),n=V(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&t.addScrollListener(l),f.includes("resize")&&t.addResizeListener(l)},s=()=>{t.removeScrollListener(l),t.removeResizeListener(l)};$t(()=>{r.value&&(l(),i())});const a=Gs();qS.mount({id:"vueuc/binder",head:!0,anchorMetaName:FS,ssr:a}),xt(()=>{s()}),gS(()=>{r.value&&l()});const l=()=>{if(!r.value)return;const f=o.value;if(f===null)return;const h=t.targetRef,{x:p,y:b,overlap:y}=e,g=p!==void 0&&b!==void 0?TS(p,b):Ec(h);f.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:w,minWidth:T,placement:x,internalShift:C,flip:$}=e;f.setAttribute("v-placement",x),y?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:S}=f;w==="target"?S.width=`${g.width}px`:w!==void 0?S.width=w:S.width="",T==="target"?S.minWidth=`${g.width}px`:T!==void 0?S.minWidth=T:S.minWidth="";const L=Ec(f),k=Ec(n.value),{left:R,top:H,placement:A}=US(x,g,L,C,$,y),q=VS(A,y),{left:F,top:ee,transform:Y}=KS(A,k,g,H,R,y);f.setAttribute("v-placement",A),f.style.setProperty("--v-offset-left",`${Math.round(R)}px`),f.style.setProperty("--v-offset-top",`${Math.round(H)}px`),f.style.transform=`translateX(${F}) translateY(${ee}) ${Y}`,f.style.setProperty("--v-transform-origin",q),f.style.transformOrigin=q};et(r,f=>{f?(i(),c()):s()});const c=()=>{Dt().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{et(Me(e,f),l)}),["teleportDisabled"].forEach(f=>{et(Me(e,f),c)}),et(Me(e,"syncTrigger"),f=>{f.includes("resize")?t.addResizeListener(l):t.removeResizeListener(l),f.includes("scroll")?t.addScrollListener(l):t.removeScrollListener(l)});const u=Oi(),d=oo(()=>{const{to:f}=e;if(f!==void 0)return f;u.value});return{VBinder:t,mergedEnabled:r,offsetContainerRef:n,followerRef:o,mergedTo:d,syncPosition:l}},render(){return E(Td,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const r=E("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[E("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Dr(r,[[Ul,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):r}})}});var wn=[],XS=function(){return wn.some(function(e){return e.activeTargets.length>0})},YS=function(){return wn.some(function(e){return e.skippedTargets.length>0})},zh="ResizeObserver loop completed with undelivered notifications.",ZS=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:zh}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=zh),window.dispatchEvent(e)},As;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(As||(As={}));var Sn=function(e){return Object.freeze(e)},JS=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,Sn(this)}return e}(),A0=function(){function e(t,r,o,n){return this.x=t,this.y=r,this.width=o,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Sn(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,o=t.y,n=t.top,i=t.right,s=t.bottom,a=t.left,l=t.width,c=t.height;return{x:r,y:o,top:n,right:i,bottom:s,left:a,width:l,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),$d=function(e){return e instanceof SVGElement&&"getBBox"in e},M0=function(e){if($d(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e,i=n.offsetWidth,s=n.offsetHeight;return!(i||s||e.getClientRects().length)},Fh=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},QS=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},fs=typeof window<"u"?window:{},_a=new WeakMap,Nh=/auto|scroll/,eE=/^tb|vertical/,tE=/msie|trident/i.test(fs.navigator&&fs.navigator.userAgent),$r=function(e){return parseFloat(e||"0")},ni=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new JS((r?t:e)||0,(r?e:t)||0)},jh=Sn({devicePixelContentBoxSize:ni(),borderBoxSize:ni(),contentBoxSize:ni(),contentRect:new A0(0,0,0,0)}),B0=function(e,t){if(t===void 0&&(t=!1),_a.has(e)&&!t)return _a.get(e);if(M0(e))return _a.set(e,jh),jh;var r=getComputedStyle(e),o=$d(e)&&e.ownerSVGElement&&e.getBBox(),n=!tE&&r.boxSizing==="border-box",i=eE.test(r.writingMode||""),s=!o&&Nh.test(r.overflowY||""),a=!o&&Nh.test(r.overflowX||""),l=o?0:$r(r.paddingTop),c=o?0:$r(r.paddingRight),u=o?0:$r(r.paddingBottom),d=o?0:$r(r.paddingLeft),f=o?0:$r(r.borderTopWidth),h=o?0:$r(r.borderRightWidth),p=o?0:$r(r.borderBottomWidth),b=o?0:$r(r.borderLeftWidth),y=d+c,g=l+u,w=b+h,T=f+p,x=a?e.offsetHeight-T-e.clientHeight:0,C=s?e.offsetWidth-w-e.clientWidth:0,$=n?y+w:0,S=n?g+T:0,L=o?o.width:$r(r.width)-$-C,k=o?o.height:$r(r.height)-S-x,R=L+y+C+w,H=k+g+x+T,A=Sn({devicePixelContentBoxSize:ni(Math.round(L*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:ni(R,H,i),contentBoxSize:ni(L,k,i),contentRect:new A0(d,l,L,k)});return _a.set(e,A),A},H0=function(e,t,r){var o=B0(e,r),n=o.borderBoxSize,i=o.contentBoxSize,s=o.devicePixelContentBoxSize;switch(t){case As.DEVICE_PIXEL_CONTENT_BOX:return s;case As.BORDER_BOX:return n;default:return i}},rE=function(){function e(t){var r=B0(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=Sn([r.borderBoxSize]),this.contentBoxSize=Sn([r.contentBoxSize]),this.devicePixelContentBoxSize=Sn([r.devicePixelContentBoxSize])}return e}(),D0=function(e){if(M0(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},oE=function(){var e=1/0,t=[];wn.forEach(function(s){if(s.activeTargets.length!==0){var a=[];s.activeTargets.forEach(function(c){var u=new rE(c.target),d=D0(c.target);a.push(u),c.lastReportedSize=H0(c.target,c.observedBox),d<e&&(e=d)}),t.push(function(){s.callback.call(s.observer,a,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var r=0,o=t;r<o.length;r++){var n=o[r];n()}return e},Wh=function(e){wn.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(n){n.isActive()&&(D0(n.target)>e?r.activeTargets.push(n):r.skippedTargets.push(n))})})},nE=function(){var e=0;for(Wh(e);XS();)e=oE(),Wh(e);return YS()&&ZS(),e>0},$c,z0=[],iE=function(){return z0.splice(0).forEach(function(e){return e()})},sE=function(e){if(!$c){var t=0,r=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return iE()}).observe(r,o),$c=function(){r.textContent="".concat(t?t--:t++)}}z0.push(e),$c()},aE=function(e){sE(function(){requestAnimationFrame(e)})},Za=0,lE=function(){return!!Za},cE=250,uE={attributes:!0,characterData:!0,childList:!0,subtree:!0},Uh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Vh=function(e){return e===void 0&&(e=0),Date.now()+e},Pc=!1,dE=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=cE),!Pc){Pc=!0;var o=Vh(t);aE(function(){var n=!1;try{n=nE()}finally{if(Pc=!1,t=o-Vh(),!lE())return;n?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,uE)};document.body?r():fs.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Uh.forEach(function(r){return fs.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Uh.forEach(function(r){return fs.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),bu=new dE,Kh=function(e){!Za&&e>0&&bu.start(),Za+=e,!Za&&bu.stop()},fE=function(e){return!$d(e)&&!QS(e)&&getComputedStyle(e).display==="inline"},hE=function(){function e(t,r){this.target=t,this.observedBox=r||As.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=H0(this.target,this.observedBox,!0);return fE(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),pE=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),Ta=new WeakMap,qh=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},$a=function(){function e(){}return e.connect=function(t,r){var o=new pE(t,r);Ta.set(t,o)},e.observe=function(t,r,o){var n=Ta.get(t),i=n.observationTargets.length===0;qh(n.observationTargets,r)<0&&(i&&wn.push(n),n.observationTargets.push(new hE(r,o&&o.box)),Kh(1),bu.schedule())},e.unobserve=function(t,r){var o=Ta.get(t),n=qh(o.observationTargets,r),i=o.observationTargets.length===1;n>=0&&(i&&wn.splice(wn.indexOf(o),1),o.observationTargets.splice(n,1),Kh(-1))},e.disconnect=function(t){var r=this,o=Ta.get(t);o.observationTargets.slice().forEach(function(n){return r.unobserve(t,n.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),gE=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");$a.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Fh(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");$a.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Fh(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");$a.unobserve(this,t)},e.prototype.disconnect=function(){$a.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class mE{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||gE)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const r of t){const o=this.elHandlersMap.get(r.target);o!==void 0&&o(r)}}registerHandler(t,r){this.elHandlersMap.set(t,r),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Gh=new mE,Xh=be({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const r=fr().proxy;function o(n){const{onResize:i}=e;i!==void 0&&i(n)}$t(()=>{const n=r.$el;if(n===void 0){Ah("resize-observer","$el does not exist.");return}if(n.nextElementSibling!==n.nextSibling&&n.nodeType===3&&n.nodeValue!==""){Ah("resize-observer","$el can not be observed (it may be a text node).");return}n.nextElementSibling!==null&&(Gh.registerHandler(n.nextElementSibling,o),t=!0)}),xt(()=>{t&&Gh.unregisterHandler(r.$el.nextElementSibling)})},render(){return md(this.$slots,"default")}});function F0(e){return e instanceof HTMLElement}function N0(e){for(let t=0;t<e.childNodes.length;t++){const r=e.childNodes[t];if(F0(r)&&(W0(r)||N0(r)))return!0}return!1}function j0(e){for(let t=e.childNodes.length-1;t>=0;t--){const r=e.childNodes[t];if(F0(r)&&(W0(r)||j0(r)))return!0}return!1}function W0(e){if(!bE(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function bE(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Ui=[];const U0=be({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=Tn(),r=V(null),o=V(null);let n=!1,i=!1;const s=typeof document>"u"?null:document.activeElement;function a(){return Ui[Ui.length-1]===t}function l(y){var g;y.code==="Escape"&&a()&&((g=e.onEsc)===null||g===void 0||g.call(e,y))}$t(()=>{et(()=>e.active,y=>{y?(d(),mt("keydown",document,l)):(tt("keydown",document,l),n&&f())},{immediate:!0})}),xt(()=>{tt("keydown",document,l),n&&f()});function c(y){if(!i&&a()){const g=u();if(g===null||g.contains(ks(y)))return;h("first")}}function u(){const y=r.value;if(y===null)return null;let g=y;for(;g=g.nextSibling,!(g===null||g instanceof Element&&g.tagName==="DIV"););return g}function d(){var y;if(!e.disabled){if(Ui.push(t),e.autoFocus){const{initialFocusTo:g}=e;g===void 0?h("first"):(y=Mh(g))===null||y===void 0||y.focus({preventScroll:!0})}n=!0,document.addEventListener("focus",c,!0)}}function f(){var y;if(e.disabled||(document.removeEventListener("focus",c,!0),Ui=Ui.filter(w=>w!==t),a()))return;const{finalFocusTo:g}=e;g!==void 0?(y=Mh(g))===null||y===void 0||y.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&s instanceof HTMLElement&&(i=!0,s.focus({preventScroll:!0}),i=!1)}function h(y){if(!!a()&&e.active){const g=r.value,w=o.value;if(g!==null&&w!==null){const T=u();if(T==null||T===w){i=!0,g.focus({preventScroll:!0}),i=!1;return}i=!0;const x=y==="first"?N0(T):j0(T);i=!1,x||(i=!0,g.focus({preventScroll:!0}),i=!1)}}}function p(y){if(i)return;const g=u();g!==null&&(y.relatedTarget!==null&&g.contains(y.relatedTarget)?h("last"):h("first"))}function b(y){i||(y.relatedTarget!==null&&y.relatedTarget===r.value?h("last"):h("first"))}return{focusableStartRef:r,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:b}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:r}=this;return E(Qe,null,[E("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:r,onFocus:this.handleStartFocus}),e(),E("div",{"aria-hidden":"true",style:r,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}});let jn=0,Yh="",Zh="",Jh="",Qh="";const ep=V("0px");function vE(e){if(typeof document>"u")return;const t=document.documentElement;let r,o=!1;const n=()=>{t.style.marginRight=Yh,t.style.overflow=Zh,t.style.overflowX=Jh,t.style.overflowY=Qh,ep.value="0px"};$t(()=>{r=et(e,i=>{if(i){if(!jn){const s=window.innerWidth-t.offsetWidth;s>0&&(Yh=t.style.marginRight,t.style.marginRight=`${s}px`,ep.value=`${s}px`),Zh=t.style.overflow,Jh=t.style.overflowX,Qh=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}o=!0,jn++}else jn--,jn||n(),o=!1},{immediate:!0})}),xt(()=>{r==null||r(),o&&(jn--,jn||n(),o=!1)})}const Pd=V(!1),tp=()=>{Pd.value=!0},rp=()=>{Pd.value=!1};let Vi=0;const yE=()=>(Rn&&(Vo(()=>{Vi||(window.addEventListener("compositionstart",tp),window.addEventListener("compositionend",rp)),Vi++}),xt(()=>{Vi<=1?(window.removeEventListener("compositionstart",tp),window.removeEventListener("compositionend",rp),Vi=0):Vi--})),Pd);function xE(e){const t={isDeactivated:!1};let r=!1;return jm(()=>{if(t.isDeactivated=!1,!r){r=!0;return}e()}),Wm(()=>{t.isDeactivated=!0,r||(r=!0)}),t}const op="n-form-item";function V0(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:o}={}){const n=Se(op,null);qe(op,null);const i=K(r?()=>r(n):()=>{const{size:l}=e;if(l)return l;if(n){const{mergedSize:c}=n;if(c.value!==void 0)return c.value}return t}),s=K(o?()=>o(n):()=>{const{disabled:l}=e;return l!==void 0?l:n?n.disabled.value:!1}),a=K(()=>{const{status:l}=e;return l||(n==null?void 0:n.mergedValidationStatus.value)});return xt(()=>{n&&n.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:s,mergedStatusRef:a,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}var CE=typeof global=="object"&&global&&global.Object===Object&&global;const K0=CE;var wE=typeof self=="object"&&self&&self.Object===Object&&self,SE=K0||wE||Function("return this")();const Fr=SE;var EE=Fr.Symbol;const No=EE;var q0=Object.prototype,_E=q0.hasOwnProperty,TE=q0.toString,Ki=No?No.toStringTag:void 0;function $E(e){var t=_E.call(e,Ki),r=e[Ki];try{e[Ki]=void 0;var o=!0}catch{}var n=TE.call(e);return o&&(t?e[Ki]=r:delete e[Ki]),n}var PE=Object.prototype,LE=PE.toString;function kE(e){return LE.call(e)}var IE="[object Null]",RE="[object Undefined]",np=No?No.toStringTag:void 0;function On(e){return e==null?e===void 0?RE:IE:np&&np in Object(e)?$E(e):kE(e)}function jo(e){return e!=null&&typeof e=="object"}var OE="[object Symbol]";function Ld(e){return typeof e=="symbol"||jo(e)&&On(e)==OE}function G0(e,t){for(var r=-1,o=e==null?0:e.length,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}var AE=Array.isArray;const hr=AE;var ME=1/0,ip=No?No.prototype:void 0,sp=ip?ip.toString:void 0;function X0(e){if(typeof e=="string")return e;if(hr(e))return G0(e,X0)+"";if(Ld(e))return sp?sp.call(e):"";var t=e+"";return t=="0"&&1/e==-ME?"-0":t}function Ko(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function kd(e){return e}var BE="[object AsyncFunction]",HE="[object Function]",DE="[object GeneratorFunction]",zE="[object Proxy]";function Id(e){if(!Ko(e))return!1;var t=On(e);return t==HE||t==DE||t==BE||t==zE}var FE=Fr["__core-js_shared__"];const Lc=FE;var ap=function(){var e=/[^.]+$/.exec(Lc&&Lc.keys&&Lc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function NE(e){return!!ap&&ap in e}var jE=Function.prototype,WE=jE.toString;function An(e){if(e!=null){try{return WE.call(e)}catch{}try{return e+""}catch{}}return""}var UE=/[\\^$.*+?()[\]{}|]/g,VE=/^\[object .+?Constructor\]$/,KE=Function.prototype,qE=Object.prototype,GE=KE.toString,XE=qE.hasOwnProperty,YE=RegExp("^"+GE.call(XE).replace(UE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ZE(e){if(!Ko(e)||NE(e))return!1;var t=Id(e)?YE:VE;return t.test(An(e))}function JE(e,t){return e==null?void 0:e[t]}function Mn(e,t){var r=JE(e,t);return ZE(r)?r:void 0}var QE=Mn(Fr,"WeakMap");const vu=QE;var lp=Object.create,e_=function(){function e(){}return function(t){if(!Ko(t))return{};if(lp)return lp(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const t_=e_;function r_(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function o_(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var n_=800,i_=16,s_=Date.now;function a_(e){var t=0,r=0;return function(){var o=s_(),n=i_-(o-r);if(r=o,n>0){if(++t>=n_)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function l_(e){return function(){return e}}var c_=function(){try{var e=Mn(Object,"defineProperty");return e({},"",{}),e}catch{}}();const dl=c_;var u_=dl?function(e,t){return dl(e,"toString",{configurable:!0,enumerable:!1,value:l_(t),writable:!0})}:kd;const d_=u_;var f_=a_(d_);const h_=f_;var p_=9007199254740991,g_=/^(?:0|[1-9]\d*)$/;function Rd(e,t){var r=typeof e;return t=t==null?p_:t,!!t&&(r=="number"||r!="symbol"&&g_.test(e))&&e>-1&&e%1==0&&e<t}function Od(e,t,r){t=="__proto__"&&dl?dl(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function Xs(e,t){return e===t||e!==e&&t!==t}var m_=Object.prototype,b_=m_.hasOwnProperty;function v_(e,t,r){var o=e[t];(!(b_.call(e,t)&&Xs(o,r))||r===void 0&&!(t in e))&&Od(e,t,r)}function y_(e,t,r,o){var n=!r;r||(r={});for(var i=-1,s=t.length;++i<s;){var a=t[i],l=o?o(r[a],e[a],a,r,e):void 0;l===void 0&&(l=e[a]),n?Od(r,a,l):v_(r,a,l)}return r}var cp=Math.max;function x_(e,t,r){return t=cp(t===void 0?e.length-1:t,0),function(){for(var o=arguments,n=-1,i=cp(o.length-t,0),s=Array(i);++n<i;)s[n]=o[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=o[n];return a[t]=r(s),r_(e,this,a)}}function C_(e,t){return h_(x_(e,t,kd),e+"")}var w_=9007199254740991;function Ad(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=w_}function Ai(e){return e!=null&&Ad(e.length)&&!Id(e)}function S_(e,t,r){if(!Ko(r))return!1;var o=typeof t;return(o=="number"?Ai(r)&&Rd(t,r.length):o=="string"&&t in r)?Xs(r[t],e):!1}function E_(e){return C_(function(t,r){var o=-1,n=r.length,i=n>1?r[n-1]:void 0,s=n>2?r[2]:void 0;for(i=e.length>3&&typeof i=="function"?(n--,i):void 0,s&&S_(r[0],r[1],s)&&(i=n<3?void 0:i,n=1),t=Object(t);++o<n;){var a=r[o];a&&e(t,a,o,i)}return t})}var __=Object.prototype;function Md(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||__;return e===r}function T_(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var $_="[object Arguments]";function up(e){return jo(e)&&On(e)==$_}var Y0=Object.prototype,P_=Y0.hasOwnProperty,L_=Y0.propertyIsEnumerable,k_=up(function(){return arguments}())?up:function(e){return jo(e)&&P_.call(e,"callee")&&!L_.call(e,"callee")};const fl=k_;function I_(){return!1}var Z0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dp=Z0&&typeof module=="object"&&module&&!module.nodeType&&module,R_=dp&&dp.exports===Z0,fp=R_?Fr.Buffer:void 0,O_=fp?fp.isBuffer:void 0,A_=O_||I_;const hl=A_;var M_="[object Arguments]",B_="[object Array]",H_="[object Boolean]",D_="[object Date]",z_="[object Error]",F_="[object Function]",N_="[object Map]",j_="[object Number]",W_="[object Object]",U_="[object RegExp]",V_="[object Set]",K_="[object String]",q_="[object WeakMap]",G_="[object ArrayBuffer]",X_="[object DataView]",Y_="[object Float32Array]",Z_="[object Float64Array]",J_="[object Int8Array]",Q_="[object Int16Array]",e5="[object Int32Array]",t5="[object Uint8Array]",r5="[object Uint8ClampedArray]",o5="[object Uint16Array]",n5="[object Uint32Array]",it={};it[Y_]=it[Z_]=it[J_]=it[Q_]=it[e5]=it[t5]=it[r5]=it[o5]=it[n5]=!0;it[M_]=it[B_]=it[G_]=it[H_]=it[X_]=it[D_]=it[z_]=it[F_]=it[N_]=it[j_]=it[W_]=it[U_]=it[V_]=it[K_]=it[q_]=!1;function i5(e){return jo(e)&&Ad(e.length)&&!!it[On(e)]}function s5(e){return function(t){return e(t)}}var J0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,hs=J0&&typeof module=="object"&&module&&!module.nodeType&&module,a5=hs&&hs.exports===J0,kc=a5&&K0.process,l5=function(){try{var e=hs&&hs.require&&hs.require("util").types;return e||kc&&kc.binding&&kc.binding("util")}catch{}}();const hp=l5;var pp=hp&&hp.isTypedArray,c5=pp?s5(pp):i5;const Bd=c5;var u5=Object.prototype,d5=u5.hasOwnProperty;function Q0(e,t){var r=hr(e),o=!r&&fl(e),n=!r&&!o&&hl(e),i=!r&&!o&&!n&&Bd(e),s=r||o||n||i,a=s?T_(e.length,String):[],l=a.length;for(var c in e)(t||d5.call(e,c))&&!(s&&(c=="length"||n&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Rd(c,l)))&&a.push(c);return a}function eb(e,t){return function(r){return e(t(r))}}var f5=eb(Object.keys,Object);const h5=f5;var p5=Object.prototype,g5=p5.hasOwnProperty;function m5(e){if(!Md(e))return h5(e);var t=[];for(var r in Object(e))g5.call(e,r)&&r!="constructor"&&t.push(r);return t}function Hd(e){return Ai(e)?Q0(e):m5(e)}function b5(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var v5=Object.prototype,y5=v5.hasOwnProperty;function x5(e){if(!Ko(e))return b5(e);var t=Md(e),r=[];for(var o in e)o=="constructor"&&(t||!y5.call(e,o))||r.push(o);return r}function tb(e){return Ai(e)?Q0(e,!0):x5(e)}var C5=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w5=/^\w*$/;function Dd(e,t){if(hr(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Ld(e)?!0:w5.test(e)||!C5.test(e)||t!=null&&e in Object(t)}var S5=Mn(Object,"create");const Ms=S5;function E5(){this.__data__=Ms?Ms(null):{},this.size=0}function _5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var T5="__lodash_hash_undefined__",$5=Object.prototype,P5=$5.hasOwnProperty;function L5(e){var t=this.__data__;if(Ms){var r=t[e];return r===T5?void 0:r}return P5.call(t,e)?t[e]:void 0}var k5=Object.prototype,I5=k5.hasOwnProperty;function R5(e){var t=this.__data__;return Ms?t[e]!==void 0:I5.call(t,e)}var O5="__lodash_hash_undefined__";function A5(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ms&&t===void 0?O5:t,this}function $n(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}$n.prototype.clear=E5;$n.prototype.delete=_5;$n.prototype.get=L5;$n.prototype.has=R5;$n.prototype.set=A5;function M5(){this.__data__=[],this.size=0}function Vl(e,t){for(var r=e.length;r--;)if(Xs(e[r][0],t))return r;return-1}var B5=Array.prototype,H5=B5.splice;function D5(e){var t=this.__data__,r=Vl(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():H5.call(t,r,1),--this.size,!0}function z5(e){var t=this.__data__,r=Vl(t,e);return r<0?void 0:t[r][1]}function F5(e){return Vl(this.__data__,e)>-1}function N5(e,t){var r=this.__data__,o=Vl(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}function so(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}so.prototype.clear=M5;so.prototype.delete=D5;so.prototype.get=z5;so.prototype.has=F5;so.prototype.set=N5;var j5=Mn(Fr,"Map");const Bs=j5;function W5(){this.size=0,this.__data__={hash:new $n,map:new(Bs||so),string:new $n}}function U5(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Kl(e,t){var r=e.__data__;return U5(t)?r[typeof t=="string"?"string":"hash"]:r.map}function V5(e){var t=Kl(this,e).delete(e);return this.size-=t?1:0,t}function K5(e){return Kl(this,e).get(e)}function q5(e){return Kl(this,e).has(e)}function G5(e,t){var r=Kl(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}function ao(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}ao.prototype.clear=W5;ao.prototype.delete=V5;ao.prototype.get=K5;ao.prototype.has=q5;ao.prototype.set=G5;var X5="Expected a function";function zd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(X5);var r=function(){var o=arguments,n=t?t.apply(this,o):o[0],i=r.cache;if(i.has(n))return i.get(n);var s=e.apply(this,o);return r.cache=i.set(n,s)||i,s};return r.cache=new(zd.Cache||ao),r}zd.Cache=ao;var Y5=500;function Z5(e){var t=zd(e,function(o){return r.size===Y5&&r.clear(),o}),r=t.cache;return t}var J5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q5=/\\(\\)?/g,e3=Z5(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(J5,function(r,o,n,i){t.push(n?i.replace(Q5,"$1"):o||r)}),t});const t3=e3;function ql(e){return e==null?"":X0(e)}function rb(e,t){return hr(e)?e:Dd(e,t)?[e]:t3(ql(e))}var r3=1/0;function Gl(e){if(typeof e=="string"||Ld(e))return e;var t=e+"";return t=="0"&&1/e==-r3?"-0":t}function ob(e,t){t=rb(t,e);for(var r=0,o=t.length;e!=null&&r<o;)e=e[Gl(t[r++])];return r&&r==o?e:void 0}function o3(e,t,r){var o=e==null?void 0:ob(e,t);return o===void 0?r:o}function n3(e,t){for(var r=-1,o=t.length,n=e.length;++r<o;)e[n+r]=t[r];return e}var i3=eb(Object.getPrototypeOf,Object);const nb=i3;var s3="[object Object]",a3=Function.prototype,l3=Object.prototype,ib=a3.toString,c3=l3.hasOwnProperty,u3=ib.call(Object);function d3(e){if(!jo(e)||On(e)!=s3)return!1;var t=nb(e);if(t===null)return!0;var r=c3.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&ib.call(r)==u3}function f3(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),r=r>n?n:r,r<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(n);++o<n;)i[o]=e[o+t];return i}function h3(e,t,r){var o=e.length;return r=r===void 0?o:r,!t&&r>=o?e:f3(e,t,r)}var p3="\\ud800-\\udfff",g3="\\u0300-\\u036f",m3="\\ufe20-\\ufe2f",b3="\\u20d0-\\u20ff",v3=g3+m3+b3,y3="\\ufe0e\\ufe0f",x3="\\u200d",C3=RegExp("["+x3+p3+v3+y3+"]");function sb(e){return C3.test(e)}function w3(e){return e.split("")}var ab="\\ud800-\\udfff",S3="\\u0300-\\u036f",E3="\\ufe20-\\ufe2f",_3="\\u20d0-\\u20ff",T3=S3+E3+_3,$3="\\ufe0e\\ufe0f",P3="["+ab+"]",yu="["+T3+"]",xu="\\ud83c[\\udffb-\\udfff]",L3="(?:"+yu+"|"+xu+")",lb="[^"+ab+"]",cb="(?:\\ud83c[\\udde6-\\uddff]){2}",ub="[\\ud800-\\udbff][\\udc00-\\udfff]",k3="\\u200d",db=L3+"?",fb="["+$3+"]?",I3="(?:"+k3+"(?:"+[lb,cb,ub].join("|")+")"+fb+db+")*",R3=fb+db+I3,O3="(?:"+[lb+yu+"?",yu,cb,ub,P3].join("|")+")",A3=RegExp(xu+"(?="+xu+")|"+O3+R3,"g");function M3(e){return e.match(A3)||[]}function B3(e){return sb(e)?M3(e):w3(e)}function H3(e){return function(t){t=ql(t);var r=sb(t)?B3(t):void 0,o=r?r[0]:t.charAt(0),n=r?h3(r,1).join(""):t.slice(1);return o[e]()+n}}var D3=H3("toUpperCase");const z3=D3;function F3(e,t,r,o){var n=-1,i=e==null?0:e.length;for(o&&i&&(r=e[++n]);++n<i;)r=t(r,e[n],n,e);return r}function N3(e){return function(t){return e==null?void 0:e[t]}}var j3={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},W3=N3(j3);const U3=W3;var V3=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,K3="\\u0300-\\u036f",q3="\\ufe20-\\ufe2f",G3="\\u20d0-\\u20ff",X3=K3+q3+G3,Y3="["+X3+"]",Z3=RegExp(Y3,"g");function J3(e){return e=ql(e),e&&e.replace(V3,U3).replace(Z3,"")}var Q3=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function eT(e){return e.match(Q3)||[]}var tT=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function rT(e){return tT.test(e)}var hb="\\ud800-\\udfff",oT="\\u0300-\\u036f",nT="\\ufe20-\\ufe2f",iT="\\u20d0-\\u20ff",sT=oT+nT+iT,pb="\\u2700-\\u27bf",gb="a-z\\xdf-\\xf6\\xf8-\\xff",aT="\\xac\\xb1\\xd7\\xf7",lT="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",cT="\\u2000-\\u206f",uT=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mb="A-Z\\xc0-\\xd6\\xd8-\\xde",dT="\\ufe0e\\ufe0f",bb=aT+lT+cT+uT,vb="['\u2019]",gp="["+bb+"]",fT="["+sT+"]",yb="\\d+",hT="["+pb+"]",xb="["+gb+"]",Cb="[^"+hb+bb+yb+pb+gb+mb+"]",pT="\\ud83c[\\udffb-\\udfff]",gT="(?:"+fT+"|"+pT+")",mT="[^"+hb+"]",wb="(?:\\ud83c[\\udde6-\\uddff]){2}",Sb="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="["+mb+"]",bT="\\u200d",mp="(?:"+xb+"|"+Cb+")",vT="(?:"+Un+"|"+Cb+")",bp="(?:"+vb+"(?:d|ll|m|re|s|t|ve))?",vp="(?:"+vb+"(?:D|LL|M|RE|S|T|VE))?",Eb=gT+"?",_b="["+dT+"]?",yT="(?:"+bT+"(?:"+[mT,wb,Sb].join("|")+")"+_b+Eb+")*",xT="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",CT="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wT=_b+Eb+yT,ST="(?:"+[hT,wb,Sb].join("|")+")"+wT,ET=RegExp([Un+"?"+xb+"+"+bp+"(?="+[gp,Un,"$"].join("|")+")",vT+"+"+vp+"(?="+[gp,Un+mp,"$"].join("|")+")",Un+"?"+mp+"+"+bp,Un+"+"+vp,CT,xT,yb,ST].join("|"),"g");function _T(e){return e.match(ET)||[]}function TT(e,t,r){return e=ql(e),t=r?void 0:t,t===void 0?rT(e)?_T(e):eT(e):e.match(t)||[]}var $T="['\u2019]",PT=RegExp($T,"g");function LT(e){return function(t){return F3(TT(J3(t).replace(PT,"")),e,"")}}function kT(){this.__data__=new so,this.size=0}function IT(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function RT(e){return this.__data__.get(e)}function OT(e){return this.__data__.has(e)}var AT=200;function MT(e,t){var r=this.__data__;if(r instanceof so){var o=r.__data__;if(!Bs||o.length<AT-1)return o.push([e,t]),this.size=++r.size,this;r=this.__data__=new ao(o)}return r.set(e,t),this.size=r.size,this}function Br(e){var t=this.__data__=new so(e);this.size=t.size}Br.prototype.clear=kT;Br.prototype.delete=IT;Br.prototype.get=RT;Br.prototype.has=OT;Br.prototype.set=MT;var Tb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yp=Tb&&typeof module=="object"&&module&&!module.nodeType&&module,BT=yp&&yp.exports===Tb,xp=BT?Fr.Buffer:void 0,Cp=xp?xp.allocUnsafe:void 0;function HT(e,t){if(t)return e.slice();var r=e.length,o=Cp?Cp(r):new e.constructor(r);return e.copy(o),o}function DT(e,t){for(var r=-1,o=e==null?0:e.length,n=0,i=[];++r<o;){var s=e[r];t(s,r,e)&&(i[n++]=s)}return i}function zT(){return[]}var FT=Object.prototype,NT=FT.propertyIsEnumerable,wp=Object.getOwnPropertySymbols,jT=wp?function(e){return e==null?[]:(e=Object(e),DT(wp(e),function(t){return NT.call(e,t)}))}:zT;const WT=jT;function UT(e,t,r){var o=t(e);return hr(e)?o:n3(o,r(e))}function Sp(e){return UT(e,Hd,WT)}var VT=Mn(Fr,"DataView");const Cu=VT;var KT=Mn(Fr,"Promise");const wu=KT;var qT=Mn(Fr,"Set");const Su=qT;var Ep="[object Map]",GT="[object Object]",_p="[object Promise]",Tp="[object Set]",$p="[object WeakMap]",Pp="[object DataView]",XT=An(Cu),YT=An(Bs),ZT=An(wu),JT=An(Su),QT=An(vu),sn=On;(Cu&&sn(new Cu(new ArrayBuffer(1)))!=Pp||Bs&&sn(new Bs)!=Ep||wu&&sn(wu.resolve())!=_p||Su&&sn(new Su)!=Tp||vu&&sn(new vu)!=$p)&&(sn=function(e){var t=On(e),r=t==GT?e.constructor:void 0,o=r?An(r):"";if(o)switch(o){case XT:return Pp;case YT:return Ep;case ZT:return _p;case JT:return Tp;case QT:return $p}return t});const Lp=sn;var e$=Fr.Uint8Array;const pl=e$;function t$(e){var t=new e.constructor(e.byteLength);return new pl(t).set(new pl(e)),t}function r$(e,t){var r=t?t$(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function o$(e){return typeof e.constructor=="function"&&!Md(e)?t_(nb(e)):{}}var n$="__lodash_hash_undefined__";function i$(e){return this.__data__.set(e,n$),this}function s$(e){return this.__data__.has(e)}function gl(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new ao;++t<r;)this.add(e[t])}gl.prototype.add=gl.prototype.push=i$;gl.prototype.has=s$;function a$(e,t){for(var r=-1,o=e==null?0:e.length;++r<o;)if(t(e[r],r,e))return!0;return!1}function l$(e,t){return e.has(t)}var c$=1,u$=2;function $b(e,t,r,o,n,i){var s=r&c$,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=r&u$?new gl:void 0;for(i.set(e,t),i.set(t,e);++d<a;){var p=e[d],b=t[d];if(o)var y=s?o(b,p,d,t,e,i):o(p,b,d,e,t,i);if(y!==void 0){if(y)continue;f=!1;break}if(h){if(!a$(t,function(g,w){if(!l$(h,w)&&(p===g||n(p,g,r,o,i)))return h.push(w)})){f=!1;break}}else if(!(p===b||n(p,b,r,o,i))){f=!1;break}}return i.delete(e),i.delete(t),f}function d$(e){var t=-1,r=Array(e.size);return e.forEach(function(o,n){r[++t]=[n,o]}),r}function f$(e){var t=-1,r=Array(e.size);return e.forEach(function(o){r[++t]=o}),r}var h$=1,p$=2,g$="[object Boolean]",m$="[object Date]",b$="[object Error]",v$="[object Map]",y$="[object Number]",x$="[object RegExp]",C$="[object Set]",w$="[object String]",S$="[object Symbol]",E$="[object ArrayBuffer]",_$="[object DataView]",kp=No?No.prototype:void 0,Ic=kp?kp.valueOf:void 0;function T$(e,t,r,o,n,i,s){switch(r){case _$:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case E$:return!(e.byteLength!=t.byteLength||!i(new pl(e),new pl(t)));case g$:case m$:case y$:return Xs(+e,+t);case b$:return e.name==t.name&&e.message==t.message;case x$:case w$:return e==t+"";case v$:var a=d$;case C$:var l=o&h$;if(a||(a=f$),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;o|=p$,s.set(e,t);var u=$b(a(e),a(t),o,n,i,s);return s.delete(e),u;case S$:if(Ic)return Ic.call(e)==Ic.call(t)}return!1}var $$=1,P$=Object.prototype,L$=P$.hasOwnProperty;function k$(e,t,r,o,n,i){var s=r&$$,a=Sp(e),l=a.length,c=Sp(t),u=c.length;if(l!=u&&!s)return!1;for(var d=l;d--;){var f=a[d];if(!(s?f in t:L$.call(t,f)))return!1}var h=i.get(e),p=i.get(t);if(h&&p)return h==t&&p==e;var b=!0;i.set(e,t),i.set(t,e);for(var y=s;++d<l;){f=a[d];var g=e[f],w=t[f];if(o)var T=s?o(w,g,f,t,e,i):o(g,w,f,e,t,i);if(!(T===void 0?g===w||n(g,w,r,o,i):T)){b=!1;break}y||(y=f=="constructor")}if(b&&!y){var x=e.constructor,C=t.constructor;x!=C&&"constructor"in e&&"constructor"in t&&!(typeof x=="function"&&x instanceof x&&typeof C=="function"&&C instanceof C)&&(b=!1)}return i.delete(e),i.delete(t),b}var I$=1,Ip="[object Arguments]",Rp="[object Array]",Pa="[object Object]",R$=Object.prototype,Op=R$.hasOwnProperty;function O$(e,t,r,o,n,i){var s=hr(e),a=hr(t),l=s?Rp:Lp(e),c=a?Rp:Lp(t);l=l==Ip?Pa:l,c=c==Ip?Pa:c;var u=l==Pa,d=c==Pa,f=l==c;if(f&&hl(e)){if(!hl(t))return!1;s=!0,u=!1}if(f&&!u)return i||(i=new Br),s||Bd(e)?$b(e,t,r,o,n,i):T$(e,t,l,r,o,n,i);if(!(r&I$)){var h=u&&Op.call(e,"__wrapped__"),p=d&&Op.call(t,"__wrapped__");if(h||p){var b=h?e.value():e,y=p?t.value():t;return i||(i=new Br),n(b,y,r,o,i)}}return f?(i||(i=new Br),k$(e,t,r,o,n,i)):!1}function Fd(e,t,r,o,n){return e===t?!0:e==null||t==null||!jo(e)&&!jo(t)?e!==e&&t!==t:O$(e,t,r,o,Fd,n)}var A$=1,M$=2;function B$(e,t,r,o){var n=r.length,i=n,s=!o;if(e==null)return!i;for(e=Object(e);n--;){var a=r[n];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++n<i;){a=r[n];var l=a[0],c=e[l],u=a[1];if(s&&a[2]){if(c===void 0&&!(l in e))return!1}else{var d=new Br;if(o)var f=o(c,u,l,e,t,d);if(!(f===void 0?Fd(u,c,A$|M$,o,d):f))return!1}}return!0}function Pb(e){return e===e&&!Ko(e)}function H$(e){for(var t=Hd(e),r=t.length;r--;){var o=t[r],n=e[o];t[r]=[o,n,Pb(n)]}return t}function Lb(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function D$(e){var t=H$(e);return t.length==1&&t[0][2]?Lb(t[0][0],t[0][1]):function(r){return r===e||B$(r,e,t)}}function z$(e,t){return e!=null&&t in Object(e)}function F$(e,t,r){t=rb(t,e);for(var o=-1,n=t.length,i=!1;++o<n;){var s=Gl(t[o]);if(!(i=e!=null&&r(e,s)))break;e=e[s]}return i||++o!=n?i:(n=e==null?0:e.length,!!n&&Ad(n)&&Rd(s,n)&&(hr(e)||fl(e)))}function N$(e,t){return e!=null&&F$(e,t,z$)}var j$=1,W$=2;function U$(e,t){return Dd(e)&&Pb(t)?Lb(Gl(e),t):function(r){var o=o3(r,e);return o===void 0&&o===t?N$(r,e):Fd(t,o,j$|W$)}}function V$(e){return function(t){return t==null?void 0:t[e]}}function K$(e){return function(t){return ob(t,e)}}function q$(e){return Dd(e)?V$(Gl(e)):K$(e)}function G$(e){return typeof e=="function"?e:e==null?kd:typeof e=="object"?hr(e)?U$(e[0],e[1]):D$(e):q$(e)}function X$(e){return function(t,r,o){for(var n=-1,i=Object(t),s=o(t),a=s.length;a--;){var l=s[e?a:++n];if(r(i[l],l,i)===!1)break}return t}}var Y$=X$();const kb=Y$;function Z$(e,t){return e&&kb(e,t,Hd)}function J$(e,t){return function(r,o){if(r==null)return r;if(!Ai(r))return e(r,o);for(var n=r.length,i=t?n:-1,s=Object(r);(t?i--:++i<n)&&o(s[i],i,s)!==!1;);return r}}var Q$=J$(Z$);const e4=Q$;function Eu(e,t,r){(r!==void 0&&!Xs(e[t],r)||r===void 0&&!(t in e))&&Od(e,t,r)}function t4(e){return jo(e)&&Ai(e)}function _u(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function r4(e){return y_(e,tb(e))}function o4(e,t,r,o,n,i,s){var a=_u(e,r),l=_u(t,r),c=s.get(l);if(c){Eu(e,r,c);return}var u=i?i(a,l,r+"",e,t,s):void 0,d=u===void 0;if(d){var f=hr(l),h=!f&&hl(l),p=!f&&!h&&Bd(l);u=l,f||h||p?hr(a)?u=a:t4(a)?u=o_(a):h?(d=!1,u=HT(l,!0)):p?(d=!1,u=r$(l,!0)):u=[]:d3(l)||fl(l)?(u=a,fl(a)?u=r4(a):(!Ko(a)||Id(a))&&(u=o$(l))):d=!1}d&&(s.set(l,u),n(u,l,o,i,s),s.delete(l)),Eu(e,r,u)}function Ib(e,t,r,o,n){e!==t&&kb(t,function(i,s){if(n||(n=new Br),Ko(i))o4(e,t,s,r,Ib,o,n);else{var a=o?o(_u(e,s),i,s+"",e,t,n):void 0;a===void 0&&(a=i),Eu(e,s,a)}},tb)}function n4(e,t){var r=-1,o=Ai(e)?Array(e.length):[];return e4(e,function(n,i,s){o[++r]=t(n,i,s)}),o}function i4(e,t){var r=hr(e)?G0:n4;return r(e,G$(t))}var s4=LT(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});const a4=s4;var l4=E_(function(e,t,r){Ib(e,t,r)});const rs=l4,qo={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:c4,fontFamily:u4,lineHeight:d4}=qo,Rb=z("body",`
 margin: 0;
 font-size: ${c4};
 font-family: ${u4};
 line-height: ${d4};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[z("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),Wo="n-config-provider",Hs="naive-ui-style";function Xe(e,t,r,o,n,i){const s=Gs(),a=Se(Wo,null);if(r){const c=()=>{const u=i==null?void 0:i.value;r.mount({id:u===void 0?t:u+t,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:Hs,ssr:s}),a!=null&&a.preflightStyleDisabled||Rb.mount({id:"n-global",head:!0,anchorMetaName:Hs,ssr:s})};s?c():Vo(c)}return K(()=>{var c;const{theme:{common:u,self:d,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=n,{common:b,peers:y}=h,{common:g=void 0,[e]:{common:w=void 0,self:T=void 0,peers:x={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:C=void 0,[e]:$={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:S,peers:L={}}=$,k=rs({},u||w||g||o.common,C,S,b),R=rs((c=d||T||o.self)===null||c===void 0?void 0:c(k),p,$,h);return{common:k,self:R,peers:rs({},o.peers,x,f),peerOverrides:rs({},p.peers,L,y)}})}Xe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Ob="n";function Pt(e={},t={defaultBordered:!0}){const r=Se(Wo,null);return{inlineThemeDisabled:r==null?void 0:r.inlineThemeDisabled,mergedRtlRef:r==null?void 0:r.mergedRtlRef,mergedComponentPropsRef:r==null?void 0:r.mergedComponentPropsRef,mergedBreakpointsRef:r==null?void 0:r.mergedBreakpointsRef,mergedBorderedRef:K(()=>{var o,n;const{bordered:i}=e;return i!==void 0?i:(n=(o=r==null?void 0:r.mergedBorderedRef.value)!==null&&o!==void 0?o:t.defaultBordered)!==null&&n!==void 0?n:!0}),mergedClsPrefixRef:K(()=>(r==null?void 0:r.mergedClsPrefixRef.value)||Ob),namespaceRef:K(()=>r==null?void 0:r.mergedNamespaceRef.value)}}const f4={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},h4=f4;function Rc(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,o=e.formats[r]||e.formats[e.defaultWidth];return o}}function qi(e){return function(t,r){var o=r!=null&&r.context?String(r.context):"standalone",n;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,s=r!=null&&r.width?String(r.width):i;n=e.formattingValues[s]||e.formattingValues[i]}else{var a=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[a]}var c=e.argumentCallback?e.argumentCallback(t):t;return n[c]}}function Gi(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.width,n=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var s=i[0],a=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(a)?g4(a,function(d){return d.test(s)}):p4(a,function(d){return d.test(s)}),c;c=e.valueCallback?e.valueCallback(l):l,c=r.valueCallback?r.valueCallback(c):c;var u=t.slice(s.length);return{value:c,rest:u}}}function p4(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function g4(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}function m4(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var n=o[0],i=t.match(e.parsePattern);if(!i)return null;var s=e.valueCallback?e.valueCallback(i[0]):i[0];s=r.valueCallback?r.valueCallback(s):s;var a=t.slice(n.length);return{value:s,rest:a}}}var b4={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},v4=function(t,r,o){var n,i=b4[t];return typeof i=="string"?n=i:r===1?n=i.one:n=i.other.replace("{{count}}",r.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+n:n+" ago":n};const y4=v4;var x4={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},C4={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},w4={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},S4={date:Rc({formats:x4,defaultWidth:"full"}),time:Rc({formats:C4,defaultWidth:"full"}),dateTime:Rc({formats:w4,defaultWidth:"full"})};const E4=S4;var _4={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},T4=function(t,r,o,n){return _4[t]};const $4=T4;var P4={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},L4={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},k4={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},I4={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},R4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},O4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},A4=function(t,r){var o=Number(t),n=o%100;if(n>20||n<10)switch(n%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},M4={ordinalNumber:A4,era:qi({values:P4,defaultWidth:"wide"}),quarter:qi({values:L4,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:qi({values:k4,defaultWidth:"wide"}),day:qi({values:I4,defaultWidth:"wide"}),dayPeriod:qi({values:R4,defaultWidth:"wide",formattingValues:O4,defaultFormattingWidth:"wide"})};const B4=M4;var H4=/^(\d+)(th|st|nd|rd)?/i,D4=/\d+/i,z4={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},F4={any:[/^b/i,/^(a|c)/i]},N4={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},j4={any:[/1/i,/2/i,/3/i,/4/i]},W4={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},U4={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},V4={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},K4={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},q4={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},G4={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},X4={ordinalNumber:m4({matchPattern:H4,parsePattern:D4,valueCallback:function(t){return parseInt(t,10)}}),era:Gi({matchPatterns:z4,defaultMatchWidth:"wide",parsePatterns:F4,defaultParseWidth:"any"}),quarter:Gi({matchPatterns:N4,defaultMatchWidth:"wide",parsePatterns:j4,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Gi({matchPatterns:W4,defaultMatchWidth:"wide",parsePatterns:U4,defaultParseWidth:"any"}),day:Gi({matchPatterns:V4,defaultMatchWidth:"wide",parsePatterns:K4,defaultParseWidth:"any"}),dayPeriod:Gi({matchPatterns:q4,defaultMatchWidth:"any",parsePatterns:G4,defaultParseWidth:"any"})};const Y4=X4;var Z4={code:"en-US",formatDistance:y4,formatLong:E4,formatRelative:$4,localize:B4,match:Y4,options:{weekStartsOn:0,firstWeekContainsDate:1}};const J4=Z4,Q4={name:"en-US",locale:J4},e6=Q4;function t6(e){const{mergedLocaleRef:t,mergedDateLocaleRef:r}=Se(Wo,null)||{},o=K(()=>{var i,s;return(s=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i[e])!==null&&s!==void 0?s:h4[e]});return{dateLocaleRef:K(()=>{var i;return(i=r==null?void 0:r.value)!==null&&i!==void 0?i:e6}),localeRef:o}}function Xl(e,t,r){if(!t)return;const o=Gs(),n=Se(Wo,null),i=()=>{const s=r==null?void 0:r.value;t.mount({id:s===void 0?e:s+e,head:!0,anchorMetaName:Hs,props:{bPrefix:s?`.${s}-`:void 0},ssr:o}),n!=null&&n.preflightStyleDisabled||Rb.mount({id:"n-global",head:!0,anchorMetaName:Hs,ssr:o})};o?i():Vo(i)}function pr(e,t,r,o){var n;r||In("useThemeClass","cssVarsRef is not passed");const i=(n=Se(Wo,null))===null||n===void 0?void 0:n.mergedThemeHashRef,s=V(""),a=Gs();let l;const c=`__${e}`,u=()=>{let d=c;const f=t?t.value:void 0,h=i==null?void 0:i.value;h&&(d+="-"+h),f&&(d+="-"+f);const{themeOverrides:p,builtinThemeOverrides:b}=o;p&&(d+="-"+Rs(JSON.stringify(p))),b&&(d+="-"+Rs(JSON.stringify(b))),s.value=d,l=()=>{const y=r.value;let g="";for(const w in y)g+=`${w}: ${y[w]};`;z(`.${d}`,g).mount({id:d,ssr:a}),l=void 0}};return wr(()=>{u()}),{themeClass:s,onRender:()=>{l==null||l()}}}function Ys(e,t,r){if(!t)return;const o=Gs(),n=K(()=>{const{value:s}=t;if(!s)return;const a=s[e];if(!!a)return a}),i=()=>{wr(()=>{const{value:s}=r,a=`${s}${e}Rtl`;if(nS(a,o))return;const{value:l}=n;!l||l.style.mount({id:a,head:!0,anchorMetaName:Hs,props:{bPrefix:s?`.${s}-`:void 0},ssr:o})})};return o?i():Vo(i),n}const r6=be({name:"Add",render(){return E("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}});function Gt(e,t){return be({name:z3(e),setup(){var r;const o=(r=Se(Wo,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var n;const i=(n=o==null?void 0:o.value)===null||n===void 0?void 0:n[e];return i?i():t}}})}const o6=Gt("attach",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),n6=Gt("close",E("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),i6=be({name:"Eye",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),E("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),s6=Gt("trash",E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),E("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),E("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),E("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),a6=Gt("download",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),Zs=Gt("error",E("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),bi=Gt("info",E("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),Js=Gt("success",E("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Qs=Gt("warning",E("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),l6=Gt("cancel",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),c6=Gt("retry",E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),E("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),u6=Gt("rotateClockwise",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),E("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),d6=Gt("rotateClockwise",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),E("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),f6=Gt("zoomIn",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),E("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),h6=Gt("zoomOut",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),E("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),p6=be({name:"ResizeSmall",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},E("g",{fill:"none"},E("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),Yl=be({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=Oi();return()=>E(Kt,{name:"icon-switch-transition",appear:r.value},t)}}),Zl=be({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function r(a){e.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function o(a){e.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:l}=e;l&&l()}function n(a){e.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(a){if(a.style.transition="none",e.width){const l=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${l}px`}else if(e.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const l=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${l}px`}a.offsetWidth}function s(a){var l;e.width?a.style.maxWidth="":e.reverse||(a.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const a=e.group?C2:Kt;return E(a,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:s,onBeforeLeave:r,onLeave:o,onAfterLeave:n},t)}}}),g6=j("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[z("svg",`
 height: 1em;
 width: 1em;
 `)]),dt=be({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Xl("-base-icon",g6,Me(e,"clsPrefix"))},render(){return E("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),m6=j("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[re("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),z("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Cn("disabled",[z("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),z("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),z("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),z("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),z("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),re("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),re("round",[z("&::before",`
 border-radius: 50%;
 `)])]),Jl=be({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Xl("-base-close",m6,Me(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:r,absolute:o,round:n,isButtonTag:i}=e;return E(i?"button":"div",{type:i?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:i?void 0:"button",disabled:r,class:[`${t}-base-close`,o&&`${t}-base-close--absolute`,r&&`${t}-base-close--disabled`,n&&`${t}-base-close--round`],onMousedown:a=>{e.focusable||a.preventDefault()},onClick:e.onClick},E(dt,{clsPrefix:t},{default:()=>E(n6,null)}))}}}),{cubicBezierEaseInOut:b6}=qo;function Ds({originalTransform:e="",left:t=0,top:r=0,transition:o=`all .3s ${b6} !important`}={}){return[z("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),z("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),z("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:o})]}const v6=z([z("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),z("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),z("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),z("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),j("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[oe("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ds()]),oe("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[oe("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),oe("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[oe("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[oe("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),oe("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[oe("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),oe("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[oe("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),oe("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ds({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),y6={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Ab=be({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},y6),setup(e){Xl("-base-loading",v6,Me(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:o,scale:n}=this,i=t/n;return E("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},E(Yl,null,{default:()=>this.show?E("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},E("div",{class:`${e}-base-loading__container`},E("div",{class:`${e}-base-loading__container-layer`},E("div",{class:`${e}-base-loading__container-layer-left`},E("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),E("div",{class:`${e}-base-loading__container-layer-patch`},E("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),E("div",{class:`${e}-base-loading__container-layer-right`},E("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):E("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),ue={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},x6=ro(ue.neutralBase),Mb=ro(ue.neutralInvertBase),C6="rgba("+Mb.slice(0,3).join(", ")+", ";function Ne(e){return C6+String(e)+")"}function w6(e){const t=Array.from(Mb);return t[3]=Number(e),he(x6,t)}const S6=Object.assign(Object.assign({name:"common"},qo),{baseColor:ue.neutralBase,primaryColor:ue.primaryDefault,primaryColorHover:ue.primaryHover,primaryColorPressed:ue.primaryActive,primaryColorSuppl:ue.primarySuppl,infoColor:ue.infoDefault,infoColorHover:ue.infoHover,infoColorPressed:ue.infoActive,infoColorSuppl:ue.infoSuppl,successColor:ue.successDefault,successColorHover:ue.successHover,successColorPressed:ue.successActive,successColorSuppl:ue.successSuppl,warningColor:ue.warningDefault,warningColorHover:ue.warningHover,warningColorPressed:ue.warningActive,warningColorSuppl:ue.warningSuppl,errorColor:ue.errorDefault,errorColorHover:ue.errorHover,errorColorPressed:ue.errorActive,errorColorSuppl:ue.errorSuppl,textColorBase:ue.neutralTextBase,textColor1:Ne(ue.alpha1),textColor2:Ne(ue.alpha2),textColor3:Ne(ue.alpha3),textColorDisabled:Ne(ue.alpha4),placeholderColor:Ne(ue.alpha4),placeholderColorDisabled:Ne(ue.alpha5),iconColor:Ne(ue.alpha4),iconColorDisabled:Ne(ue.alpha5),iconColorHover:Ne(Number(ue.alpha4)*1.25),iconColorPressed:Ne(Number(ue.alpha4)*.8),opacity1:ue.alpha1,opacity2:ue.alpha2,opacity3:ue.alpha3,opacity4:ue.alpha4,opacity5:ue.alpha5,dividerColor:Ne(ue.alphaDivider),borderColor:Ne(ue.alphaBorder),closeIconColorHover:Ne(Number(ue.alphaClose)),closeIconColor:Ne(Number(ue.alphaClose)),closeIconColorPressed:Ne(Number(ue.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:Ne(ue.alpha4),clearColorHover:pt(Ne(ue.alpha4),{alpha:1.25}),clearColorPressed:pt(Ne(ue.alpha4),{alpha:.8}),scrollbarColor:Ne(ue.alphaScrollbar),scrollbarColorHover:Ne(ue.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ne(ue.alphaProgressRail),railColor:Ne(ue.alphaRail),popoverColor:ue.neutralPopover,tableColor:ue.neutralCard,cardColor:ue.neutralCard,modalColor:ue.neutralModal,bodyColor:ue.neutralBody,tagColor:w6(ue.alphaTag),avatarColor:Ne(ue.alphaAvatar),invertedColor:ue.neutralBase,inputColor:Ne(ue.alphaInput),codeColor:Ne(ue.alphaCode),tabColor:Ne(ue.alphaTab),actionColor:Ne(ue.alphaAction),tableHeaderColor:Ne(ue.alphaAction),hoverColor:Ne(ue.alphaPending),tableColorHover:Ne(ue.alphaTablePending),tableColorStriped:Ne(ue.alphaTableStriped),pressedColor:Ne(ue.alphaPressed),opacityDisabled:ue.alphaDisabled,inputColorDisabled:Ne(ue.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),ne=S6,xe={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},E6=ro(xe.neutralBase),Bb=ro(xe.neutralInvertBase),_6="rgba("+Bb.slice(0,3).join(", ")+", ";function Ap(e){return _6+String(e)+")"}function kt(e){const t=Array.from(Bb);return t[3]=Number(e),he(E6,t)}const T6=Object.assign(Object.assign({name:"common"},qo),{baseColor:xe.neutralBase,primaryColor:xe.primaryDefault,primaryColorHover:xe.primaryHover,primaryColorPressed:xe.primaryActive,primaryColorSuppl:xe.primarySuppl,infoColor:xe.infoDefault,infoColorHover:xe.infoHover,infoColorPressed:xe.infoActive,infoColorSuppl:xe.infoSuppl,successColor:xe.successDefault,successColorHover:xe.successHover,successColorPressed:xe.successActive,successColorSuppl:xe.successSuppl,warningColor:xe.warningDefault,warningColorHover:xe.warningHover,warningColorPressed:xe.warningActive,warningColorSuppl:xe.warningSuppl,errorColor:xe.errorDefault,errorColorHover:xe.errorHover,errorColorPressed:xe.errorActive,errorColorSuppl:xe.errorSuppl,textColorBase:xe.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:kt(xe.alpha4),placeholderColor:kt(xe.alpha4),placeholderColorDisabled:kt(xe.alpha5),iconColor:kt(xe.alpha4),iconColorHover:pt(kt(xe.alpha4),{lightness:.75}),iconColorPressed:pt(kt(xe.alpha4),{lightness:.9}),iconColorDisabled:kt(xe.alpha5),opacity1:xe.alpha1,opacity2:xe.alpha2,opacity3:xe.alpha3,opacity4:xe.alpha4,opacity5:xe.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:kt(Number(xe.alphaClose)),closeIconColorHover:kt(Number(xe.alphaClose)),closeIconColorPressed:kt(Number(xe.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:kt(xe.alpha4),clearColorHover:pt(kt(xe.alpha4),{lightness:.75}),clearColorPressed:pt(kt(xe.alpha4),{lightness:.9}),scrollbarColor:Ap(xe.alphaScrollbar),scrollbarColorHover:Ap(xe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:kt(xe.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:xe.neutralPopover,tableColor:xe.neutralCard,cardColor:xe.neutralCard,modalColor:xe.neutralModal,bodyColor:xe.neutralBody,tagColor:"#eee",avatarColor:kt(xe.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:kt(xe.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:xe.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),ie=T6,$6={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Hb=e=>{const{textColorDisabled:t,iconColor:r,textColor2:o,fontSizeSmall:n,fontSizeMedium:i,fontSizeLarge:s,fontSizeHuge:a}=e;return Object.assign(Object.assign({},$6),{fontSizeSmall:n,fontSizeMedium:i,fontSizeLarge:s,fontSizeHuge:a,textColor:t,iconColor:r,extraTextColor:o})},P6={name:"Empty",common:ie,self:Hb},lo=P6,L6={name:"Empty",common:ne,self:Hb},Bn=L6,Db=e=>{const{scrollbarColor:t,scrollbarColorHover:r}=e;return{color:t,colorHover:r}},k6={name:"Scrollbar",common:ie,self:Db},Ft=k6,I6={name:"Scrollbar",common:ne,self:Db},Xt=I6,{cubicBezierEaseInOut:Mp}=qo;function zs({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:r="0.2s",enterCubicBezier:o=Mp,leaveCubicBezier:n=Mp}={}){return[z(`&.${e}-transition-enter-active`,{transition:`all ${t} ${o}!important`}),z(`&.${e}-transition-leave-active`,{transition:`all ${r} ${n}!important`}),z(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),z(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const R6=j("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[z(">",[j("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),z(">",[j("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),z(">, +",[j("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[re("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[z(">",[oe("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),re("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[z(">",[oe("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),re("disabled",[z(">",[oe("scrollbar",{pointerEvents:"none"})])]),z(">",[oe("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[zs(),z("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),O6=Object.assign(Object.assign({},Xe.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),zb=be({name:"Scrollbar",props:O6,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:o}=Pt(e),n=Ys("Scrollbar",o,t),i=V(null),s=V(null),a=V(null),l=V(null),c=V(null),u=V(null),d=V(null),f=V(null),h=V(null),p=V(null),b=V(null),y=V(0),g=V(0),w=V(!1),T=V(!1);let x=!1,C=!1,$,S,L=0,k=0,R=0,H=0;const A=ES(),q=K(()=>{const{value:Q}=f,{value:ge}=u,{value:Ee}=p;return Q===null||ge===null||Ee===null?0:Math.min(Q,Ee*Q/ge+e.size*1.5)}),F=K(()=>`${q.value}px`),ee=K(()=>{const{value:Q}=h,{value:ge}=d,{value:Ee}=b;return Q===null||ge===null||Ee===null?0:Ee*Q/ge+e.size*1.5}),Y=K(()=>`${ee.value}px`),Z=K(()=>{const{value:Q}=f,{value:ge}=y,{value:Ee}=u,{value:nt}=p;if(Q===null||Ee===null||nt===null)return 0;{const bt=Ee-Q;return bt?ge/bt*(nt-q.value):0}}),se=K(()=>`${Z.value}px`),ve=K(()=>{const{value:Q}=h,{value:ge}=g,{value:Ee}=d,{value:nt}=b;if(Q===null||Ee===null||nt===null)return 0;{const bt=Ee-Q;return bt?ge/bt*(nt-ee.value):0}}),Le=K(()=>`${ve.value}px`),_e=K(()=>{const{value:Q}=f,{value:ge}=u;return Q!==null&&ge!==null&&ge>Q}),Ae=K(()=>{const{value:Q}=h,{value:ge}=d;return Q!==null&&ge!==null&&ge>Q}),ut=K(()=>{const{trigger:Q}=e;return Q==="none"||w.value}),Ue=K(()=>{const{trigger:Q}=e;return Q==="none"||T.value}),N=K(()=>{const{container:Q}=e;return Q?Q():s.value}),J=K(()=>{const{content:Q}=e;return Q?Q():a.value}),te=xE(()=>{e.container||Te({top:y.value,left:g.value})}),de=()=>{te.isDeactivated||ce()},ae=Q=>{if(te.isDeactivated)return;const{onResize:ge}=e;ge&&ge(Q),ce()},Te=(Q,ge)=>{if(!e.scrollable)return;if(typeof Q=="number"){_(ge!=null?ge:0,Q,0,!1,"auto");return}const{left:Ee,top:nt,index:bt,elSize:Wt,position:Ur,behavior:ht,el:Vr,debounce:Ni=!0}=Q;(Ee!==void 0||nt!==void 0)&&_(Ee!=null?Ee:0,nt!=null?nt:0,0,!1,ht),Vr!==void 0?_(0,Vr.offsetTop,Vr.offsetHeight,Ni,ht):bt!==void 0&&Wt!==void 0?_(0,bt*Wt,Wt,Ni,ht):Ur==="bottom"?_(0,Number.MAX_SAFE_INTEGER,0,!1,ht):Ur==="top"&&_(0,0,0,!1,ht)},me=(Q,ge)=>{if(!e.scrollable)return;const{value:Ee}=N;!Ee||(typeof Q=="object"?Ee.scrollBy(Q):Ee.scrollBy(Q,ge||0))};function _(Q,ge,Ee,nt,bt){const{value:Wt}=N;if(!!Wt){if(nt){const{scrollTop:Ur,offsetHeight:ht}=Wt;if(ge>Ur){ge+Ee<=Ur+ht||Wt.scrollTo({left:Q,top:ge+Ee-ht,behavior:bt});return}}Wt.scrollTo({left:Q,top:ge,behavior:bt})}}function m(){U(),X(),ce()}function v(){P()}function P(){I(),M()}function I(){S!==void 0&&window.clearTimeout(S),S=window.setTimeout(()=>{T.value=!1},e.duration)}function M(){$!==void 0&&window.clearTimeout($),$=window.setTimeout(()=>{w.value=!1},e.duration)}function U(){$!==void 0&&window.clearTimeout($),w.value=!0}function X(){S!==void 0&&window.clearTimeout(S),T.value=!0}function W(Q){const{onScroll:ge}=e;ge&&ge(Q),D()}function D(){const{value:Q}=N;Q&&(y.value=Q.scrollTop,g.value=Q.scrollLeft*(n!=null&&n.value?-1:1))}function O(){const{value:Q}=J;Q&&(u.value=Q.offsetHeight,d.value=Q.offsetWidth);const{value:ge}=N;ge&&(f.value=ge.offsetHeight,h.value=ge.offsetWidth);const{value:Ee}=c,{value:nt}=l;Ee&&(b.value=Ee.offsetWidth),nt&&(p.value=nt.offsetHeight)}function B(){const{value:Q}=N;Q&&(y.value=Q.scrollTop,g.value=Q.scrollLeft*(n!=null&&n.value?-1:1),f.value=Q.offsetHeight,h.value=Q.offsetWidth,u.value=Q.scrollHeight,d.value=Q.scrollWidth);const{value:ge}=c,{value:Ee}=l;ge&&(b.value=ge.offsetWidth),Ee&&(p.value=Ee.offsetHeight)}function ce(){!e.scrollable||(e.useUnifiedContainer?B():(O(),D()))}function pe(Q){var ge;return!(!((ge=i.value)===null||ge===void 0)&&ge.contains(ks(Q)))}function $e(Q){Q.preventDefault(),Q.stopPropagation(),C=!0,mt("mousemove",window,He,!0),mt("mouseup",window,Oe,!0),k=g.value,R=n!=null&&n.value?window.innerWidth-Q.clientX:Q.clientX}function He(Q){if(!C)return;$!==void 0&&window.clearTimeout($),S!==void 0&&window.clearTimeout(S);const{value:ge}=h,{value:Ee}=d,{value:nt}=ee;if(ge===null||Ee===null)return;const Wt=(n!=null&&n.value?window.innerWidth-Q.clientX-R:Q.clientX-R)*(Ee-ge)/(ge-nt),Ur=Ee-ge;let ht=k+Wt;ht=Math.min(Ur,ht),ht=Math.max(ht,0);const{value:Vr}=N;if(Vr){Vr.scrollLeft=ht*(n!=null&&n.value?-1:1);const{internalOnUpdateScrollLeft:Ni}=e;Ni&&Ni(ht)}}function Oe(Q){Q.preventDefault(),Q.stopPropagation(),tt("mousemove",window,He,!0),tt("mouseup",window,Oe,!0),C=!1,ce(),pe(Q)&&P()}function at(Q){Q.preventDefault(),Q.stopPropagation(),x=!0,mt("mousemove",window,Lt,!0),mt("mouseup",window,Tr,!0),L=y.value,H=Q.clientY}function Lt(Q){if(!x)return;$!==void 0&&window.clearTimeout($),S!==void 0&&window.clearTimeout(S);const{value:ge}=f,{value:Ee}=u,{value:nt}=q;if(ge===null||Ee===null)return;const Wt=(Q.clientY-H)*(Ee-ge)/(ge-nt),Ur=Ee-ge;let ht=L+Wt;ht=Math.min(Ur,ht),ht=Math.max(ht,0);const{value:Vr}=N;Vr&&(Vr.scrollTop=ht)}function Tr(Q){Q.preventDefault(),Q.stopPropagation(),tt("mousemove",window,Lt,!0),tt("mouseup",window,Tr,!0),x=!1,ce(),pe(Q)&&P()}wr(()=>{const{value:Q}=Ae,{value:ge}=_e,{value:Ee}=t,{value:nt}=c,{value:bt}=l;nt&&(Q?nt.classList.remove(`${Ee}-scrollbar-rail--disabled`):nt.classList.add(`${Ee}-scrollbar-rail--disabled`)),bt&&(ge?bt.classList.remove(`${Ee}-scrollbar-rail--disabled`):bt.classList.add(`${Ee}-scrollbar-rail--disabled`))}),$t(()=>{e.container||ce()}),xt(()=>{$!==void 0&&window.clearTimeout($),S!==void 0&&window.clearTimeout(S),tt("mousemove",window,Lt,!0),tt("mouseup",window,Tr,!0)});const fa=Xe("Scrollbar","-scrollbar",R6,Ft,e,t),uo=K(()=>{const{common:{cubicBezierEaseInOut:Q,scrollbarBorderRadius:ge,scrollbarHeight:Ee,scrollbarWidth:nt},self:{color:bt,colorHover:Wt}}=fa.value;return{"--n-scrollbar-bezier":Q,"--n-scrollbar-color":bt,"--n-scrollbar-color-hover":Wt,"--n-scrollbar-border-radius":ge,"--n-scrollbar-width":nt,"--n-scrollbar-height":Ee}}),Wr=r?pr("scrollbar",void 0,uo,e):void 0;return Object.assign(Object.assign({},{scrollTo:Te,scrollBy:me,sync:ce,syncUnifiedContainer:B,handleMouseEnterWrapper:m,handleMouseLeaveWrapper:v}),{mergedClsPrefix:t,rtlEnabled:n,containerScrollTop:y,wrapperRef:i,containerRef:s,contentRef:a,yRailRef:l,xRailRef:c,needYBar:_e,needXBar:Ae,yBarSizePx:F,xBarSizePx:Y,yBarTopPx:se,xBarLeftPx:Le,isShowXBar:ut,isShowYBar:Ue,isIos:A,handleScroll:W,handleContentResize:de,handleContainerResize:ae,handleYScrollMouseDown:at,handleXScrollMouseDown:$e,cssVars:r?void 0:uo,themeClass:Wr==null?void 0:Wr.themeClass,onRender:Wr==null?void 0:Wr.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:r,triggerDisplayManually:o,rtlEnabled:n,internalHoistYRail:i}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const s=this.trigger==="none",a=()=>E("div",{ref:"yRailRef",class:[`${r}-scrollbar-rail`,`${r}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},E(s?Sh:Kt,s?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?E("div",{class:`${r}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var u,d;return(u=this.onRender)===null||u===void 0||u.call(this),E("div",Fl(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${r}-scrollbar`,this.themeClass,n&&`${r}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(d=t.default)===null||d===void 0?void 0:d.call(t):E("div",{role:"none",ref:"containerRef",class:[`${r}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},E(Xh,{onResize:this.handleContentResize},{default:()=>E("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${r}-scrollbar-content`,this.contentClass]},t)})),i?null:a(),this.xScrollable&&E("div",{ref:"xRailRef",class:[`${r}-scrollbar-rail`,`${r}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},E(s?Sh:Kt,s?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?E("div",{class:`${r}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:n?this.xBarLeftPx:void 0,left:n?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?l():E(Xh,{onResize:this.handleContainerResize},{default:l});return i?E(Qe,null,c,a()):c}}),Fb=zb,A6=zb,M6={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Nb=e=>{const{borderRadius:t,popoverColor:r,textColor3:o,dividerColor:n,textColor2:i,primaryColorPressed:s,textColorDisabled:a,primaryColor:l,opacityDisabled:c,hoverColor:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:h,fontSizeHuge:p,heightSmall:b,heightMedium:y,heightLarge:g,heightHuge:w}=e;return Object.assign(Object.assign({},M6),{optionFontSizeSmall:d,optionFontSizeMedium:f,optionFontSizeLarge:h,optionFontSizeHuge:p,optionHeightSmall:b,optionHeightMedium:y,optionHeightLarge:g,optionHeightHuge:w,borderRadius:t,color:r,groupHeaderTextColor:o,actionDividerColor:n,optionTextColor:i,optionTextColorPressed:s,optionTextColorDisabled:a,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:i,loadingColor:l})},B6={name:"InternalSelectMenu",common:ie,peers:{Scrollbar:Ft,Empty:lo},self:Nb},ea=B6,H6={name:"InternalSelectMenu",common:ne,peers:{Scrollbar:Xt,Empty:Bn},self:Nb},ta=H6,{cubicBezierEaseIn:Bp,cubicBezierEaseOut:Hp}=qo;function jb({transformOrigin:e="inherit",duration:t=".2s",enterScale:r=".9",originalTransform:o="",originalTransition:n=""}={}){return[z("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${Bp}, transform ${t} ${Bp} ${n&&","+n}`}),z("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${Hp}, transform ${t} ${Hp} ${n&&","+n}`}),z("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${r})`}),z("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const D6=j("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),z6=be({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Xl("-base-wave",D6,Me(e,"clsPrefix"));const t=V(null),r=V(!1);let o=null;return xt(()=>{o!==null&&window.clearTimeout(o)}),{active:r,selfRef:t,play(){o!==null&&(window.clearTimeout(o),r.value=!1,o=null),Dt(()=>{var n;(n=t.value)===null||n===void 0||n.offsetHeight,r.value=!0,o=window.setTimeout(()=>{r.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return E("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),F6={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},Wb=e=>{const{boxShadow2:t,popoverColor:r,textColor2:o,borderRadius:n,fontSize:i,dividerColor:s}=e;return Object.assign(Object.assign({},F6),{fontSize:i,borderRadius:n,color:r,dividerColor:s,textColor:o,boxShadow:t})},N6={name:"Popover",common:ie,self:Wb},Go=N6,j6={name:"Popover",common:ne,self:Wb},Hn=j6,Oc={top:"bottom",bottom:"top",left:"right",right:"left"},vt="var(--n-arrow-height) * 1.414",W6=z([j("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[z(">",[j("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Cn("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Cn("scrollable",[Cn("show-header-or-footer","padding: var(--n-padding);")])]),oe("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),oe("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),re("scrollable, show-header-or-footer",[oe("content",`
 padding: var(--n-padding);
 `)])]),j("popover-shared",`
 transform-origin: inherit;
 `,[j("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[j("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${vt});
 height: calc(${vt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),z("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),z("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),z("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),z("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ar("top-start",`
 top: calc(${vt} / -2);
 left: calc(${Kr("top-start")} - var(--v-offset-left));
 `),ar("top",`
 top: calc(${vt} / -2);
 transform: translateX(calc(${vt} / -2)) rotate(45deg);
 left: 50%;
 `),ar("top-end",`
 top: calc(${vt} / -2);
 right: calc(${Kr("top-end")} + var(--v-offset-left));
 `),ar("bottom-start",`
 bottom: calc(${vt} / -2);
 left: calc(${Kr("bottom-start")} - var(--v-offset-left));
 `),ar("bottom",`
 bottom: calc(${vt} / -2);
 transform: translateX(calc(${vt} / -2)) rotate(45deg);
 left: 50%;
 `),ar("bottom-end",`
 bottom: calc(${vt} / -2);
 right: calc(${Kr("bottom-end")} + var(--v-offset-left));
 `),ar("left-start",`
 left: calc(${vt} / -2);
 top: calc(${Kr("left-start")} - var(--v-offset-top));
 `),ar("left",`
 left: calc(${vt} / -2);
 transform: translateY(calc(${vt} / -2)) rotate(45deg);
 top: 50%;
 `),ar("left-end",`
 left: calc(${vt} / -2);
 bottom: calc(${Kr("left-end")} + var(--v-offset-top));
 `),ar("right-start",`
 right: calc(${vt} / -2);
 top: calc(${Kr("right-start")} - var(--v-offset-top));
 `),ar("right",`
 right: calc(${vt} / -2);
 transform: translateY(calc(${vt} / -2)) rotate(45deg);
 top: 50%;
 `),ar("right-end",`
 right: calc(${vt} / -2);
 bottom: calc(${Kr("right-end")} + var(--v-offset-top));
 `),...i4({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const r=["right","left"].includes(t),o=r?"width":"height";return e.map(n=>{const i=n.split("-")[1]==="end",a=`calc((${`var(--v-target-${o}, 0px)`} - ${vt}) / 2)`,l=Kr(n);return z(`[v-placement="${n}"] >`,[j("popover-shared",[re("center-arrow",[j("popover-arrow",`${t}: calc(max(${a}, ${l}) ${i?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function Kr(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ar(e,t){const r=e.split("-")[0],o=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return z(`[v-placement="${e}"] >`,[j("popover-shared",`
 margin-${Oc[r]}: var(--n-space);
 `,[re("show-arrow",`
 margin-${Oc[r]}: var(--n-space-arrow);
 `),re("overlap",`
 margin: 0;
 `),uS("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${Oc[r]}: auto;
 ${o}
 `,[j("popover-arrow",t)])])])}const Ub=Object.assign(Object.assign({},Xe.props),{to:mi.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),U6=({arrowStyle:e,clsPrefix:t})=>E("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},E("div",{class:`${t}-popover-arrow`,style:e})),V6=be({name:"PopoverBody",inheritAttrs:!1,props:Ub,setup(e,{slots:t,attrs:r}){const{namespaceRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:i}=Pt(e),s=Xe("Popover","-popover",W6,Go,e,n),a=V(null),l=Se("NPopover"),c=V(null),u=V(e.show),d=V(!1);wr(()=>{const{show:S}=e;S&&!dS()&&!e.internalDeactivateImmediately&&(d.value=!0)});const f=K(()=>{const{trigger:S,onClickoutside:L}=e,k=[],{positionManuallyRef:{value:R}}=l;return R||(S==="click"&&!L&&k.push([mu,x,void 0,{capture:!0}]),S==="hover"&&k.push([RS,T])),L&&k.push([mu,x,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&d.value)&&k.push([Ls,e.show]),k}),h=K(()=>{const S=e.width==="trigger"?void 0:Zr(e.width),L=[];S&&L.push({width:S});const{maxWidth:k,minWidth:R}=e;return k&&L.push({maxWidth:Zr(k)}),R&&L.push({maxWidth:Zr(R)}),i||L.push(p.value),L}),p=K(()=>{const{common:{cubicBezierEaseInOut:S,cubicBezierEaseIn:L,cubicBezierEaseOut:k},self:{space:R,spaceArrow:H,padding:A,fontSize:q,textColor:F,dividerColor:ee,color:Y,boxShadow:Z,borderRadius:se,arrowHeight:ve,arrowOffset:Le,arrowOffsetVertical:_e}}=s.value;return{"--n-box-shadow":Z,"--n-bezier":S,"--n-bezier-ease-in":L,"--n-bezier-ease-out":k,"--n-font-size":q,"--n-text-color":F,"--n-color":Y,"--n-divider-color":ee,"--n-border-radius":se,"--n-arrow-height":ve,"--n-arrow-offset":Le,"--n-arrow-offset-vertical":_e,"--n-padding":A,"--n-space":R,"--n-space-arrow":H}}),b=i?pr("popover",void 0,p,e):void 0;l.setBodyInstance({syncPosition:y}),xt(()=>{l.setBodyInstance(null)}),et(Me(e,"show"),S=>{e.animated||(S?u.value=!0:u.value=!1)});function y(){var S;(S=a.value)===null||S===void 0||S.syncPosition()}function g(S){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(S)}function w(S){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(S)}function T(S){e.trigger==="hover"&&!C().contains(ks(S))&&l.handleMouseMoveOutside(S)}function x(S){(e.trigger==="click"&&!C().contains(ks(S))||e.onClickoutside)&&l.handleClickOutside(S)}function C(){return l.getTriggerElement()}qe(_d,c),qe(Ed,null),qe(Sd,null);function $(){if(b==null||b.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&d.value))return null;let L;const k=l.internalRenderBodyRef.value,{value:R}=n;if(k)L=k([`${R}-popover-shared`,b==null?void 0:b.themeClass.value,e.overlap&&`${R}-popover-shared--overlap`,e.showArrow&&`${R}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${R}-popover-shared--center-arrow`],c,h.value,g,w);else{const{value:H}=l.extraClassRef,{internalTrapFocus:A}=e,q=!fu(t.header)||!fu(t.footer),F=()=>{var ee;const Y=q?E(Qe,null,er(t.header,ve=>ve?E("div",{class:`${R}-popover__header`,style:e.headerStyle},ve):null),er(t.default,ve=>ve?E("div",{class:`${R}-popover__content`,style:e.contentStyle},t):null),er(t.footer,ve=>ve?E("div",{class:`${R}-popover__footer`,style:e.footerStyle},ve):null)):e.scrollable?(ee=t.default)===null||ee===void 0?void 0:ee.call(t):E("div",{class:`${R}-popover__content`,style:e.contentStyle},t),Z=e.scrollable?E(A6,{contentClass:q?void 0:`${R}-popover__content`,contentStyle:q?void 0:e.contentStyle},{default:()=>Y}):Y,se=e.showArrow?U6({arrowStyle:e.arrowStyle,clsPrefix:R}):null;return[Z,se]};L=E("div",Fl({class:[`${R}-popover`,`${R}-popover-shared`,b==null?void 0:b.themeClass.value,H.map(ee=>`${R}-${ee}`),{[`${R}-popover--scrollable`]:e.scrollable,[`${R}-popover--show-header-or-footer`]:q,[`${R}-popover--raw`]:e.raw,[`${R}-popover-shared--overlap`]:e.overlap,[`${R}-popover-shared--show-arrow`]:e.showArrow,[`${R}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:h.value,onKeydown:l.handleKeydown,onMouseenter:g,onMouseleave:w},r),A?E(U0,{active:e.show,autoFocus:!0},{default:F}):F())}return Dr(L,f.value)}return{displayed:d,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:a,adjustedTo:mi(e),followerEnabled:u,renderContentNode:$}},render(){return E(GS,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===mi.tdkey},{default:()=>this.animated?E(Kt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),K6=Object.keys(Ub),q6={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function G6(e,t,r){q6[t].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const n=e.props[o],i=r[o];n?e.props[o]=(...s)=>{n(...s),i(...s)}:e.props[o]=i})}const X6=hi("").type,Vb={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:mi.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Y6=Object.assign(Object.assign(Object.assign({},Xe.props),Vb),{internalOnAfterLeave:Function,internalRenderBody:Function}),Z6=be({name:"Popover",inheritAttrs:!1,props:Y6,__popover__:!0,setup(e){const t=Oi(),r=V(null),o=K(()=>e.show),n=V(e.defaultShow),i=P0(o,n),s=oo(()=>e.disabled?!1:i.value),a=()=>{if(e.disabled)return!0;const{getDisabled:F}=e;return!!(F!=null&&F())},l=()=>a()?!1:i.value,c=wS(e,["arrow","showArrow"]),u=K(()=>e.overlap?!1:c.value);let d=null;const f=V(null),h=V(null),p=oo(()=>e.x!==void 0&&e.y!==void 0);function b(F){const{"onUpdate:show":ee,onUpdateShow:Y,onShow:Z,onHide:se}=e;n.value=F,ee&&rr(ee,F),Y&&rr(Y,F),F&&Z&&rr(Z,!0),F&&se&&rr(se,!1)}function y(){d&&d.syncPosition()}function g(){const{value:F}=f;F&&(window.clearTimeout(F),f.value=null)}function w(){const{value:F}=h;F&&(window.clearTimeout(F),h.value=null)}function T(){const F=a();if(e.trigger==="focus"&&!F){if(l())return;b(!0)}}function x(){const F=a();if(e.trigger==="focus"&&!F){if(!l())return;b(!1)}}function C(){const F=a();if(e.trigger==="hover"&&!F){if(w(),f.value!==null||l())return;const ee=()=>{b(!0),f.value=null},{delay:Y}=e;Y===0?ee():f.value=window.setTimeout(ee,Y)}}function $(){const F=a();if(e.trigger==="hover"&&!F){if(g(),h.value!==null||!l())return;const ee=()=>{b(!1),h.value=null},{duration:Y}=e;Y===0?ee():h.value=window.setTimeout(ee,Y)}}function S(){$()}function L(F){var ee;!l()||(e.trigger==="click"&&(g(),w(),b(!1)),(ee=e.onClickoutside)===null||ee===void 0||ee.call(e,F))}function k(){if(e.trigger==="click"&&!a()){g(),w();const F=!l();b(F)}}function R(F){!e.internalTrapFocus||F.key==="Escape"&&(g(),w(),b(!1))}function H(F){n.value=F}function A(){var F;return(F=r.value)===null||F===void 0?void 0:F.targetRef}function q(F){d=F}return qe("NPopover",{getTriggerElement:A,handleKeydown:R,handleMouseEnter:C,handleMouseLeave:$,handleClickOutside:L,handleMouseMoveOutside:S,setBodyInstance:q,positionManuallyRef:p,isMountedRef:t,zIndexRef:Me(e,"zIndex"),extraClassRef:Me(e,"internalExtraClass"),internalRenderBodyRef:Me(e,"internalRenderBody")}),wr(()=>{i.value&&a()&&b(!1)}),{binderInstRef:r,positionManually:p,mergedShowConsideringDisabledProp:s,uncontrolledShow:n,mergedShowArrow:u,getMergedShow:l,setShow:H,handleClick:k,handleMouseEnter:C,handleMouseLeave:$,handleFocus:T,handleBlur:x,syncPosition:y}},render(){var e;const{positionManually:t,$slots:r}=this;let o,n=!1;if(!t&&(r.activator?o=uu(r,"activator"):o=uu(r,"trigger"),o)){o=Sr(o),o=o.type===X6?E("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)n=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:s}=this,a=[i,...s],l={onBlur:c=>{a.forEach(u=>{u.onBlur(c)})},onFocus:c=>{a.forEach(u=>{u.onFocus(c)})},onClick:c=>{a.forEach(u=>{u.onClick(c)})},onMouseenter:c=>{a.forEach(u=>{u.onMouseenter(c)})},onMouseleave:c=>{a.forEach(u=>{u.onMouseleave(c)})}};G6(o,s?"nested":t?"manual":this.trigger,l)}}return E(LS,{ref:"binderInstRef",syncTarget:!n,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Dr(E("div",{style:{position:"fixed",inset:0}}),[[Ul,{enabled:i,zIndex:this.zIndex}]]):null,t?null:E(kS,null,{default:()=>o}),E(V6,gi(this.$props,K6,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var s,a;return(a=(s=this.$slots).default)===null||a===void 0?void 0:a.call(s)},header:()=>{var s,a;return(a=(s=this.$slots).header)===null||a===void 0?void 0:a.call(s)},footer:()=>{var s,a;return(a=(s=this.$slots).footer)===null||a===void 0?void 0:a.call(s)}})]}})}}),Kb={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},J6={name:"Tag",common:ne,self(e){const{textColor2:t,primaryColorHover:r,primaryColorPressed:o,primaryColor:n,infoColor:i,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:u,tagColor:d,opacityDisabled:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,closeColorHover:y,closeColorPressed:g,borderRadiusSmall:w,fontSizeMini:T,fontSizeTiny:x,fontSizeSmall:C,fontSizeMedium:$,heightMini:S,heightTiny:L,heightSmall:k,heightMedium:R,buttonColor2Hover:H,buttonColor2Pressed:A,fontWeightStrong:q}=e;return Object.assign(Object.assign({},Kb),{closeBorderRadius:w,heightTiny:S,heightSmall:L,heightMedium:k,heightLarge:R,borderRadius:w,opacityDisabled:f,fontSizeTiny:T,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:$,fontWeightStrong:q,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:H,colorPressedCheckable:A,colorChecked:n,colorCheckedHover:r,colorCheckedPressed:o,border:`1px solid ${u}`,textColor:t,color:d,colorBordered:"#0000",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,closeColorHover:y,closeColorPressed:g,borderPrimary:`1px solid ${G(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:G(n,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:pt(n,{lightness:.7}),closeIconColorHoverPrimary:pt(n,{lightness:.7}),closeIconColorPressedPrimary:pt(n,{lightness:.7}),closeColorHoverPrimary:G(n,{alpha:.16}),closeColorPressedPrimary:G(n,{alpha:.12}),borderInfo:`1px solid ${G(i,{alpha:.3})}`,textColorInfo:i,colorInfo:G(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:pt(i,{alpha:.7}),closeIconColorHoverInfo:pt(i,{alpha:.7}),closeIconColorPressedInfo:pt(i,{alpha:.7}),closeColorHoverInfo:G(i,{alpha:.16}),closeColorPressedInfo:G(i,{alpha:.12}),borderSuccess:`1px solid ${G(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:G(s,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:pt(s,{alpha:.7}),closeIconColorHoverSuccess:pt(s,{alpha:.7}),closeIconColorPressedSuccess:pt(s,{alpha:.7}),closeColorHoverSuccess:G(s,{alpha:.16}),closeColorPressedSuccess:G(s,{alpha:.12}),borderWarning:`1px solid ${G(a,{alpha:.3})}`,textColorWarning:a,colorWarning:G(a,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:pt(a,{alpha:.7}),closeIconColorHoverWarning:pt(a,{alpha:.7}),closeIconColorPressedWarning:pt(a,{alpha:.7}),closeColorHoverWarning:G(a,{alpha:.16}),closeColorPressedWarning:G(a,{alpha:.11}),borderError:`1px solid ${G(l,{alpha:.3})}`,textColorError:l,colorError:G(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:pt(l,{alpha:.7}),closeIconColorHoverError:pt(l,{alpha:.7}),closeIconColorPressedError:pt(l,{alpha:.7}),closeColorHoverError:G(l,{alpha:.16}),closeColorPressedError:G(l,{alpha:.12})})}},qb=J6,Q6=e=>{const{textColor2:t,primaryColorHover:r,primaryColorPressed:o,primaryColor:n,infoColor:i,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,borderRadiusSmall:y,fontSizeMini:g,fontSizeTiny:w,fontSizeSmall:T,fontSizeMedium:x,heightMini:C,heightTiny:$,heightSmall:S,heightMedium:L,closeColorHover:k,closeColorPressed:R,buttonColor2Hover:H,buttonColor2Pressed:A,fontWeightStrong:q}=e;return Object.assign(Object.assign({},Kb),{closeBorderRadius:y,heightTiny:C,heightSmall:$,heightMedium:S,heightLarge:L,borderRadius:y,opacityDisabled:d,fontSizeTiny:g,fontSizeSmall:w,fontSizeMedium:T,fontSizeLarge:x,fontWeightStrong:q,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:H,colorPressedCheckable:A,colorChecked:n,colorCheckedHover:r,colorCheckedPressed:o,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,closeColorHover:k,closeColorPressed:R,borderPrimary:`1px solid ${G(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:G(n,{alpha:.12}),colorBorderedPrimary:G(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:G(n,{alpha:.12}),closeColorPressedPrimary:G(n,{alpha:.18}),borderInfo:`1px solid ${G(i,{alpha:.3})}`,textColorInfo:i,colorInfo:G(i,{alpha:.12}),colorBorderedInfo:G(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:G(i,{alpha:.12}),closeColorPressedInfo:G(i,{alpha:.18}),borderSuccess:`1px solid ${G(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:G(s,{alpha:.12}),colorBorderedSuccess:G(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:G(s,{alpha:.12}),closeColorPressedSuccess:G(s,{alpha:.18}),borderWarning:`1px solid ${G(a,{alpha:.35})}`,textColorWarning:a,colorWarning:G(a,{alpha:.15}),colorBorderedWarning:G(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:G(a,{alpha:.12}),closeColorPressedWarning:G(a,{alpha:.18}),borderError:`1px solid ${G(l,{alpha:.23})}`,textColorError:l,colorError:G(l,{alpha:.1}),colorBorderedError:G(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:G(l,{alpha:.12}),closeColorPressedError:G(l,{alpha:.18})})},eP={name:"Tag",common:ie,self:Q6},Gb=eP,Xb={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},tP=e=>{const{borderRadius:t,textColor2:r,textColorDisabled:o,inputColor:n,inputColorDisabled:i,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderColor:f,iconColor:h,iconColorDisabled:p,clearColor:b,clearColorHover:y,clearColorPressed:g,placeholderColor:w,placeholderColorDisabled:T,fontSizeTiny:x,fontSizeSmall:C,fontSizeMedium:$,fontSizeLarge:S,heightTiny:L,heightSmall:k,heightMedium:R,heightLarge:H}=e;return Object.assign(Object.assign({},Xb),{fontSizeTiny:x,fontSizeSmall:C,fontSizeMedium:$,fontSizeLarge:S,heightTiny:L,heightSmall:k,heightMedium:R,heightLarge:H,borderRadius:t,textColor:r,textColorDisabled:o,placeholderColor:w,placeholderColorDisabled:T,color:n,colorDisabled:i,colorActive:n,border:`1px solid ${f}`,borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${G(s,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${G(s,{alpha:.2})}`,caretColor:s,arrowColor:h,arrowColorDisabled:p,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${G(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${G(l,{alpha:.2})}`,colorActiveWarning:n,caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${G(u,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${G(u,{alpha:.2})}`,colorActiveError:n,caretColorError:u,clearColor:b,clearColorHover:y,clearColorPressed:g})},rP={name:"InternalSelection",common:ie,peers:{Popover:Go},self:tP},Nd=rP,oP={name:"InternalSelection",common:ne,peers:{Popover:Hn},self(e){const{borderRadius:t,textColor2:r,textColorDisabled:o,inputColor:n,inputColorDisabled:i,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,iconColor:f,iconColorDisabled:h,clearColor:p,clearColorHover:b,clearColorPressed:y,placeholderColor:g,placeholderColorDisabled:w,fontSizeTiny:T,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:$,heightTiny:S,heightSmall:L,heightMedium:k,heightLarge:R}=e;return Object.assign(Object.assign({},Xb),{fontSizeTiny:T,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:$,heightTiny:S,heightSmall:L,heightMedium:k,heightLarge:R,borderRadius:t,textColor:r,textColorDisabled:o,placeholderColor:g,placeholderColorDisabled:w,color:n,colorDisabled:i,colorActive:G(s,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${G(s,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${G(s,{alpha:.4})}`,caretColor:s,arrowColor:f,arrowColorDisabled:h,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${G(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${G(l,{alpha:.4})}`,colorActiveWarning:G(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${G(u,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${G(u,{alpha:.4})}`,colorActiveError:G(u,{alpha:.1}),caretColorError:u,clearColor:p,clearColorHover:b,clearColorPressed:y})}},jd=oP,{cubicBezierEaseInOut:go}=qo;function nP({duration:e=".2s",delay:t=".1s"}={}){return[z("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),z("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),z("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${go},
 max-width ${e} ${go} ${t},
 margin-left ${e} ${go} ${t},
 margin-right ${e} ${go} ${t};
 `),z("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${go} ${t},
 max-width ${e} ${go},
 margin-left ${e} ${go},
 margin-right ${e} ${go};
 `)]}const Yb={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},iP={name:"Alert",common:ne,self(e){const{lineHeight:t,borderRadius:r,fontWeightStrong:o,dividerColor:n,inputColor:i,textColor1:s,textColor2:a,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,infoColorSuppl:h,successColorSuppl:p,warningColorSuppl:b,errorColorSuppl:y,fontSize:g}=e;return Object.assign(Object.assign({},Yb),{fontSize:g,lineHeight:t,titleFontWeight:o,borderRadius:r,border:`1px solid ${n}`,color:i,titleTextColor:s,iconColor:a,contentTextColor:a,closeBorderRadius:r,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,borderInfo:`1px solid ${G(h,{alpha:.35})}`,colorInfo:G(h,{alpha:.25}),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:a,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:u,closeIconColorHoverInfo:d,closeIconColorPressedInfo:f,borderSuccess:`1px solid ${G(p,{alpha:.35})}`,colorSuccess:G(p,{alpha:.25}),titleTextColorSuccess:s,iconColorSuccess:p,contentTextColorSuccess:a,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:u,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:f,borderWarning:`1px solid ${G(b,{alpha:.35})}`,colorWarning:G(b,{alpha:.25}),titleTextColorWarning:s,iconColorWarning:b,contentTextColorWarning:a,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:u,closeIconColorHoverWarning:d,closeIconColorPressedWarning:f,borderError:`1px solid ${G(y,{alpha:.35})}`,colorError:G(y,{alpha:.25}),titleTextColorError:s,iconColorError:y,contentTextColorError:a,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:u,closeIconColorHoverError:d,closeIconColorPressedError:f})}},sP=iP,aP=e=>{const{lineHeight:t,borderRadius:r,fontWeightStrong:o,baseColor:n,dividerColor:i,actionColor:s,textColor1:a,textColor2:l,closeColorHover:c,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:h,infoColor:p,successColor:b,warningColor:y,errorColor:g,fontSize:w}=e;return Object.assign(Object.assign({},Yb),{fontSize:w,lineHeight:t,titleFontWeight:o,borderRadius:r,border:`1px solid ${i}`,color:s,titleTextColor:a,iconColor:l,contentTextColor:l,closeBorderRadius:r,closeColorHover:c,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:h,borderInfo:`1px solid ${he(n,G(p,{alpha:.25}))}`,colorInfo:he(n,G(p,{alpha:.08})),titleTextColorInfo:a,iconColorInfo:p,contentTextColorInfo:l,closeColorHoverInfo:c,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${he(n,G(b,{alpha:.25}))}`,colorSuccess:he(n,G(b,{alpha:.08})),titleTextColorSuccess:a,iconColorSuccess:b,contentTextColorSuccess:l,closeColorHoverSuccess:c,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${he(n,G(y,{alpha:.33}))}`,colorWarning:he(n,G(y,{alpha:.08})),titleTextColorWarning:a,iconColorWarning:y,contentTextColorWarning:l,closeColorHoverWarning:c,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:h,borderError:`1px solid ${he(n,G(g,{alpha:.25}))}`,colorError:he(n,G(g,{alpha:.08})),titleTextColorError:a,iconColorError:g,contentTextColorError:l,closeColorHoverError:c,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:h})},lP={name:"Alert",common:ie,self:aP},cP=lP,{cubicBezierEaseInOut:Pr,cubicBezierEaseOut:uP,cubicBezierEaseIn:dP}=qo;function Tu({overflow:e="hidden",duration:t=".3s",originalTransition:r="",leavingDelay:o="0s",foldPadding:n=!1,enterToProps:i=void 0,leaveToProps:s=void 0,reverse:a=!1}={}){const l=a?"leave":"enter",c=a?"enter":"leave";return[z(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),z(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:n?"0 !important":void 0,paddingBottom:n?"0 !important":void 0})),z(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Pr} ${o},
 opacity ${t} ${uP} ${o},
 margin-top ${t} ${Pr} ${o},
 margin-bottom ${t} ${Pr} ${o},
 padding-top ${t} ${Pr} ${o},
 padding-bottom ${t} ${Pr} ${o}
 ${r?","+r:""}
 `),z(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Pr},
 opacity ${t} ${dP},
 margin-top ${t} ${Pr},
 margin-bottom ${t} ${Pr},
 padding-top ${t} ${Pr},
 padding-bottom ${t} ${Pr}
 ${r?","+r:""}
 `)]}const fP={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},Zb=e=>{const{borderRadius:t,railColor:r,primaryColor:o,primaryColorHover:n,primaryColorPressed:i,textColor2:s}=e;return Object.assign(Object.assign({},fP),{borderRadius:t,railColor:r,railColorActive:o,linkColor:G(o,{alpha:.15}),linkTextColor:s,linkTextColorHover:n,linkTextColorPressed:i,linkTextColorActive:o})},hP={name:"Anchor",common:ie,self:Zb},pP=hP,gP={name:"Anchor",common:ne,self:Zb},mP=gP,bP=Rn&&"chrome"in window;Rn&&navigator.userAgent.includes("Firefox");const vP=Rn&&navigator.userAgent.includes("Safari")&&!bP,Jb={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},yP={name:"Input",common:ne,self(e){const{textColor2:t,textColor3:r,textColorDisabled:o,primaryColor:n,primaryColorHover:i,inputColor:s,inputColorDisabled:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderRadius:f,lineHeight:h,fontSizeTiny:p,fontSizeSmall:b,fontSizeMedium:y,fontSizeLarge:g,heightTiny:w,heightSmall:T,heightMedium:x,heightLarge:C,clearColor:$,clearColorHover:S,clearColorPressed:L,placeholderColor:k,placeholderColorDisabled:R,iconColor:H,iconColorDisabled:A,iconColorHover:q,iconColorPressed:F}=e;return Object.assign(Object.assign({},Jb),{countTextColorDisabled:o,countTextColor:r,heightTiny:w,heightSmall:T,heightMedium:x,heightLarge:C,fontSizeTiny:p,fontSizeSmall:b,fontSizeMedium:y,fontSizeLarge:g,lineHeight:h,lineHeightTextarea:h,borderRadius:f,iconSize:"16px",groupLabelColor:s,textColor:t,textColorDisabled:o,textDecorationColor:t,groupLabelTextColor:t,caretColor:n,placeholderColor:k,placeholderColorDisabled:R,color:s,colorDisabled:a,colorFocus:G(n,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${G(n,{alpha:.3})}`,loadingColor:n,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:G(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${G(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,colorFocusError:G(u,{alpha:.1}),borderFocusError:`1px solid ${d}`,boxShadowFocusError:`0 0 8px 0 ${G(u,{alpha:.3})}`,caretColorError:u,clearColor:$,clearColorHover:S,clearColorPressed:L,iconColor:H,iconColorDisabled:A,iconColorHover:q,iconColorPressed:F,suffixTextColor:t})}},gr=yP,xP=e=>{const{textColor2:t,textColor3:r,textColorDisabled:o,primaryColor:n,primaryColorHover:i,inputColor:s,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:f,borderRadius:h,lineHeight:p,fontSizeTiny:b,fontSizeSmall:y,fontSizeMedium:g,fontSizeLarge:w,heightTiny:T,heightSmall:x,heightMedium:C,heightLarge:$,actionColor:S,clearColor:L,clearColorHover:k,clearColorPressed:R,placeholderColor:H,placeholderColorDisabled:A,iconColor:q,iconColorDisabled:F,iconColorHover:ee,iconColorPressed:Y}=e;return Object.assign(Object.assign({},Jb),{countTextColorDisabled:o,countTextColor:r,heightTiny:T,heightSmall:x,heightMedium:C,heightLarge:$,fontSizeTiny:b,fontSizeSmall:y,fontSizeMedium:g,fontSizeLarge:w,lineHeight:p,lineHeightTextarea:p,borderRadius:h,iconSize:"16px",groupLabelColor:S,groupLabelTextColor:t,textColor:t,textColorDisabled:o,textDecorationColor:t,caretColor:n,placeholderColor:H,placeholderColorDisabled:A,color:s,colorDisabled:a,colorFocus:s,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${G(n,{alpha:.2})}`,loadingColor:n,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${G(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${f}`,colorFocusError:s,borderFocusError:`1px solid ${f}`,boxShadowFocusError:`0 0 0 2px ${G(d,{alpha:.2})}`,caretColorError:d,clearColor:L,clearColorHover:k,clearColorPressed:R,iconColor:q,iconColorDisabled:F,iconColorHover:ee,iconColorPressed:Y,suffixTextColor:t})},CP={name:"Input",common:ie,self:xP},mr=CP;function Qb(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const wP={name:"AutoComplete",common:ie,peers:{InternalSelectMenu:ea,Input:mr},self:Qb},SP=wP,EP={name:"AutoComplete",common:ne,peers:{InternalSelectMenu:ta,Input:gr},self:Qb},_P=EP,Ac=Rn&&"loading"in document.createElement("img"),TP=(e={})=>{var t;const{root:r=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof r=="string"?document.querySelector(r):r)||document.documentElement})}},Mc=new WeakMap,Bc=new WeakMap,Hc=new WeakMap,$P=(e,t,r)=>{if(!e)return()=>{};const o=TP(t),{root:n}=o.options;let i;const s=Mc.get(n);s?i=s:(i=new Map,Mc.set(n,i));let a,l;i.has(o.hash)?(l=i.get(o.hash),l[1].has(e)||(a=l[0],l[1].add(e),a.observe(e))):(a=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const h=Bc.get(f.target),p=Hc.get(f.target);h&&h(),p&&(p.value=!0)}})},o.options),a.observe(e),l=[a,new Set([e])],i.set(o.hash,l));let c=!1;const u=()=>{c||(Bc.delete(e),Hc.delete(e),c=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(o.hash),i.size||Mc.delete(n))};return Bc.set(e,u),Hc.set(e,r),u},ev=e=>{const{borderRadius:t,avatarColor:r,cardColor:o,fontSize:n,heightTiny:i,heightSmall:s,heightMedium:a,heightLarge:l,heightHuge:c,modalColor:u,popoverColor:d}=e;return{borderRadius:t,fontSize:n,border:`2px solid ${o}`,heightTiny:i,heightSmall:s,heightMedium:a,heightLarge:l,heightHuge:c,color:he(o,r),colorModal:he(u,r),colorPopover:he(d,r)}},PP={name:"Avatar",common:ie,self:ev},tv=PP,LP={name:"Avatar",common:ne,self:ev},rv=LP,ov=()=>({gap:"-12px"}),kP={name:"AvatarGroup",common:ie,peers:{Avatar:tv},self:ov},IP=kP,RP={name:"AvatarGroup",common:ne,peers:{Avatar:rv},self:ov},OP=RP,nv={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},AP={name:"BackTop",common:ne,self(e){const{popoverColor:t,textColor2:r,primaryColorHover:o,primaryColorPressed:n}=e;return Object.assign(Object.assign({},nv),{color:t,textColor:r,iconColor:r,iconColorHover:o,iconColorPressed:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},MP=AP,BP=e=>{const{popoverColor:t,textColor2:r,primaryColorHover:o,primaryColorPressed:n}=e;return Object.assign(Object.assign({},nv),{color:t,textColor:r,iconColor:r,iconColorHover:o,iconColorPressed:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},HP={name:"BackTop",common:ie,self:BP},DP=HP,zP={name:"Badge",common:ne,self(e){const{errorColorSuppl:t,infoColorSuppl:r,successColorSuppl:o,warningColorSuppl:n,fontFamily:i}=e;return{color:t,colorInfo:r,colorSuccess:o,colorError:t,colorWarning:n,fontSize:"12px",fontFamily:i}}},FP=zP,NP=e=>{const{errorColor:t,infoColor:r,successColor:o,warningColor:n,fontFamily:i}=e;return{color:t,colorInfo:r,colorSuccess:o,colorError:t,colorWarning:n,fontSize:"12px",fontFamily:i}},jP={name:"Badge",common:ie,self:NP},WP=jP,UP={fontWeightActive:"400"},iv=e=>{const{fontSize:t,textColor3:r,textColor2:o,borderRadius:n,buttonColor2Hover:i,buttonColor2Pressed:s}=e;return Object.assign(Object.assign({},UP),{fontSize:t,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:o,itemTextColorPressed:o,itemTextColorActive:o,itemBorderRadius:n,itemColorHover:i,itemColorPressed:s,separatorColor:r})},VP={name:"Breadcrumb",common:ie,self:iv},KP=VP,qP={name:"Breadcrumb",common:ne,self:iv},GP=qP;function on(e){return he(e,[255,255,255,.16])}function La(e){return he(e,[0,0,0,.12])}const XP="n-button-group",YP={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},sv=e=>{const{heightTiny:t,heightSmall:r,heightMedium:o,heightLarge:n,borderRadius:i,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,textColor2:d,textColor3:f,primaryColorHover:h,primaryColorPressed:p,borderColor:b,primaryColor:y,baseColor:g,infoColor:w,infoColorHover:T,infoColorPressed:x,successColor:C,successColorHover:$,successColorPressed:S,warningColor:L,warningColorHover:k,warningColorPressed:R,errorColor:H,errorColorHover:A,errorColorPressed:q,fontWeight:F,buttonColor2:ee,buttonColor2Hover:Y,buttonColor2Pressed:Z,fontWeightStrong:se}=e;return Object.assign(Object.assign({},YP),{heightTiny:t,heightSmall:r,heightMedium:o,heightLarge:n,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:ee,colorSecondaryHover:Y,colorSecondaryPressed:Z,colorTertiary:ee,colorTertiaryHover:Y,colorTertiaryPressed:Z,colorQuaternary:"#0000",colorQuaternaryHover:Y,colorQuaternaryPressed:Z,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:d,textColorTertiary:f,textColorHover:h,textColorPressed:p,textColorFocus:h,textColorDisabled:d,textColorText:d,textColorTextHover:h,textColorTextPressed:p,textColorTextFocus:h,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:h,textColorGhostPressed:p,textColorGhostFocus:h,textColorGhostDisabled:d,border:`1px solid ${b}`,borderHover:`1px solid ${h}`,borderPressed:`1px solid ${p}`,borderFocus:`1px solid ${h}`,borderDisabled:`1px solid ${b}`,rippleColor:y,colorPrimary:y,colorHoverPrimary:h,colorPressedPrimary:p,colorFocusPrimary:h,colorDisabledPrimary:y,textColorPrimary:g,textColorHoverPrimary:g,textColorPressedPrimary:g,textColorFocusPrimary:g,textColorDisabledPrimary:g,textColorTextPrimary:y,textColorTextHoverPrimary:h,textColorTextPressedPrimary:p,textColorTextFocusPrimary:h,textColorTextDisabledPrimary:d,textColorGhostPrimary:y,textColorGhostHoverPrimary:h,textColorGhostPressedPrimary:p,textColorGhostFocusPrimary:h,textColorGhostDisabledPrimary:y,borderPrimary:`1px solid ${y}`,borderHoverPrimary:`1px solid ${h}`,borderPressedPrimary:`1px solid ${p}`,borderFocusPrimary:`1px solid ${h}`,borderDisabledPrimary:`1px solid ${y}`,rippleColorPrimary:y,colorInfo:w,colorHoverInfo:T,colorPressedInfo:x,colorFocusInfo:T,colorDisabledInfo:w,textColorInfo:g,textColorHoverInfo:g,textColorPressedInfo:g,textColorFocusInfo:g,textColorDisabledInfo:g,textColorTextInfo:w,textColorTextHoverInfo:T,textColorTextPressedInfo:x,textColorTextFocusInfo:T,textColorTextDisabledInfo:d,textColorGhostInfo:w,textColorGhostHoverInfo:T,textColorGhostPressedInfo:x,textColorGhostFocusInfo:T,textColorGhostDisabledInfo:w,borderInfo:`1px solid ${w}`,borderHoverInfo:`1px solid ${T}`,borderPressedInfo:`1px solid ${x}`,borderFocusInfo:`1px solid ${T}`,borderDisabledInfo:`1px solid ${w}`,rippleColorInfo:w,colorSuccess:C,colorHoverSuccess:$,colorPressedSuccess:S,colorFocusSuccess:$,colorDisabledSuccess:C,textColorSuccess:g,textColorHoverSuccess:g,textColorPressedSuccess:g,textColorFocusSuccess:g,textColorDisabledSuccess:g,textColorTextSuccess:C,textColorTextHoverSuccess:$,textColorTextPressedSuccess:S,textColorTextFocusSuccess:$,textColorTextDisabledSuccess:d,textColorGhostSuccess:C,textColorGhostHoverSuccess:$,textColorGhostPressedSuccess:S,textColorGhostFocusSuccess:$,textColorGhostDisabledSuccess:C,borderSuccess:`1px solid ${C}`,borderHoverSuccess:`1px solid ${$}`,borderPressedSuccess:`1px solid ${S}`,borderFocusSuccess:`1px solid ${$}`,borderDisabledSuccess:`1px solid ${C}`,rippleColorSuccess:C,colorWarning:L,colorHoverWarning:k,colorPressedWarning:R,colorFocusWarning:k,colorDisabledWarning:L,textColorWarning:g,textColorHoverWarning:g,textColorPressedWarning:g,textColorFocusWarning:g,textColorDisabledWarning:g,textColorTextWarning:L,textColorTextHoverWarning:k,textColorTextPressedWarning:R,textColorTextFocusWarning:k,textColorTextDisabledWarning:d,textColorGhostWarning:L,textColorGhostHoverWarning:k,textColorGhostPressedWarning:R,textColorGhostFocusWarning:k,textColorGhostDisabledWarning:L,borderWarning:`1px solid ${L}`,borderHoverWarning:`1px solid ${k}`,borderPressedWarning:`1px solid ${R}`,borderFocusWarning:`1px solid ${k}`,borderDisabledWarning:`1px solid ${L}`,rippleColorWarning:L,colorError:H,colorHoverError:A,colorPressedError:q,colorFocusError:A,colorDisabledError:H,textColorError:g,textColorHoverError:g,textColorPressedError:g,textColorFocusError:g,textColorDisabledError:g,textColorTextError:H,textColorTextHoverError:A,textColorTextPressedError:q,textColorTextFocusError:A,textColorTextDisabledError:d,textColorGhostError:H,textColorGhostHoverError:A,textColorGhostPressedError:q,textColorGhostFocusError:A,textColorGhostDisabledError:H,borderError:`1px solid ${H}`,borderHoverError:`1px solid ${A}`,borderPressedError:`1px solid ${q}`,borderFocusError:`1px solid ${A}`,borderDisabledError:`1px solid ${H}`,rippleColorError:H,waveOpacity:"0.6",fontWeight:F,fontWeightStrong:se})},ZP={name:"Button",common:ie,self:sv},Nt=ZP,JP={name:"Button",common:ne,self(e){const t=sv(e);return t.waveOpacity="0.8",t.colorOpacitySecondary="0.16",t.colorOpacitySecondaryHover="0.2",t.colorOpacitySecondaryPressed="0.12",t}},Yt=JP,QP=z([j("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[re("color",[oe("border",{borderColor:"var(--n-border-color)"}),re("disabled",[oe("border",{borderColor:"var(--n-border-color-disabled)"})]),Cn("disabled",[z("&:focus",[oe("state-border",{borderColor:"var(--n-border-color-focus)"})]),z("&:hover",[oe("state-border",{borderColor:"var(--n-border-color-hover)"})]),z("&:active",[oe("state-border",{borderColor:"var(--n-border-color-pressed)"})]),re("pressed",[oe("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),re("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[oe("border",{border:"var(--n-border-disabled)"})]),Cn("disabled",[z("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[oe("state-border",{border:"var(--n-border-focus)"})]),z("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[oe("state-border",{border:"var(--n-border-hover)"})]),z("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[oe("state-border",{border:"var(--n-border-pressed)"})]),re("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[oe("state-border",{border:"var(--n-border-pressed)"})])]),re("loading","cursor: wait;"),j("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[re("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Rn&&"MozBoxSizing"in document.createElement("div").style?z("&::moz-focus-inner",{border:0}):null,oe("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),oe("border",{border:"var(--n-border)"}),oe("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),oe("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[j("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ds({top:"50%",originalTransform:"translateY(-50%)"})]),nP()]),oe("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[z("~",[oe("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),re("block",`
 display: flex;
 width: 100%;
 `),re("dashed",[oe("border, state-border",{borderStyle:"dashed !important"})]),re("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),z("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),z("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),eL=Object.assign(Object.assign({},Xe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!vP}}),tL=be({name:"Button",props:eL,setup(e){const t=V(null),r=V(null),o=V(!1),n=oo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=Se(XP,{}),{mergedSizeRef:s}=V0({},{defaultSize:"medium",mergedSize:x=>{const{size:C}=e;if(C)return C;const{size:$}=i;if($)return $;const{mergedSize:S}=x||{};return S?S.value:"medium"}}),a=K(()=>e.focusable&&!e.disabled),l=x=>{var C;a.value||x.preventDefault(),!e.nativeFocusBehavior&&(x.preventDefault(),!e.disabled&&a.value&&((C=t.value)===null||C===void 0||C.focus({preventScroll:!0})))},c=x=>{var C;if(!e.disabled&&!e.loading){const{onClick:$}=e;$&&rr($,x),e.text||(C=r.value)===null||C===void 0||C.play()}},u=x=>{switch(x.key){case"Enter":if(!e.keyboard)return;o.value=!1}},d=x=>{switch(x.key){case"Enter":if(!e.keyboard||e.loading){x.preventDefault();return}o.value=!0}},f=()=>{o.value=!1},{inlineThemeDisabled:h,mergedClsPrefixRef:p,mergedRtlRef:b}=Pt(e),y=Xe("Button","-button",QP,Nt,e,p),g=Ys("Button",b,p),w=K(()=>{const x=y.value,{common:{cubicBezierEaseInOut:C,cubicBezierEaseOut:$},self:S}=x,{rippleDuration:L,opacityDisabled:k,fontWeight:R,fontWeightStrong:H}=S,A=s.value,{dashed:q,type:F,ghost:ee,text:Y,color:Z,round:se,circle:ve,textColor:Le,secondary:_e,tertiary:Ae,quaternary:ut,strong:Ue}=e,N={"font-weight":Ue?H:R};let J={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const te=F==="tertiary",de=F==="default",ae=te?"default":F;if(Y){const W=Le||Z;J={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":W||S[Ce("textColorText",ae)],"--n-text-color-hover":W?on(W):S[Ce("textColorTextHover",ae)],"--n-text-color-pressed":W?La(W):S[Ce("textColorTextPressed",ae)],"--n-text-color-focus":W?on(W):S[Ce("textColorTextHover",ae)],"--n-text-color-disabled":W||S[Ce("textColorTextDisabled",ae)]}}else if(ee||q){const W=Le||Z;J={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":Z||S[Ce("rippleColor",ae)],"--n-text-color":W||S[Ce("textColorGhost",ae)],"--n-text-color-hover":W?on(W):S[Ce("textColorGhostHover",ae)],"--n-text-color-pressed":W?La(W):S[Ce("textColorGhostPressed",ae)],"--n-text-color-focus":W?on(W):S[Ce("textColorGhostHover",ae)],"--n-text-color-disabled":W||S[Ce("textColorGhostDisabled",ae)]}}else if(_e){const W=de?S.textColor:te?S.textColorTertiary:S[Ce("color",ae)],D=Z||W,O=F!=="default"&&F!=="tertiary";J={"--n-color":O?G(D,{alpha:Number(S.colorOpacitySecondary)}):S.colorSecondary,"--n-color-hover":O?G(D,{alpha:Number(S.colorOpacitySecondaryHover)}):S.colorSecondaryHover,"--n-color-pressed":O?G(D,{alpha:Number(S.colorOpacitySecondaryPressed)}):S.colorSecondaryPressed,"--n-color-focus":O?G(D,{alpha:Number(S.colorOpacitySecondaryHover)}):S.colorSecondaryHover,"--n-color-disabled":S.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":D,"--n-text-color-hover":D,"--n-text-color-pressed":D,"--n-text-color-focus":D,"--n-text-color-disabled":D}}else if(Ae||ut){const W=de?S.textColor:te?S.textColorTertiary:S[Ce("color",ae)],D=Z||W;Ae?(J["--n-color"]=S.colorTertiary,J["--n-color-hover"]=S.colorTertiaryHover,J["--n-color-pressed"]=S.colorTertiaryPressed,J["--n-color-focus"]=S.colorSecondaryHover,J["--n-color-disabled"]=S.colorTertiary):(J["--n-color"]=S.colorQuaternary,J["--n-color-hover"]=S.colorQuaternaryHover,J["--n-color-pressed"]=S.colorQuaternaryPressed,J["--n-color-focus"]=S.colorQuaternaryHover,J["--n-color-disabled"]=S.colorQuaternary),J["--n-ripple-color"]="#0000",J["--n-text-color"]=D,J["--n-text-color-hover"]=D,J["--n-text-color-pressed"]=D,J["--n-text-color-focus"]=D,J["--n-text-color-disabled"]=D}else J={"--n-color":Z||S[Ce("color",ae)],"--n-color-hover":Z?on(Z):S[Ce("colorHover",ae)],"--n-color-pressed":Z?La(Z):S[Ce("colorPressed",ae)],"--n-color-focus":Z?on(Z):S[Ce("colorFocus",ae)],"--n-color-disabled":Z||S[Ce("colorDisabled",ae)],"--n-ripple-color":Z||S[Ce("rippleColor",ae)],"--n-text-color":Le||(Z?S.textColorPrimary:te?S.textColorTertiary:S[Ce("textColor",ae)]),"--n-text-color-hover":Le||(Z?S.textColorHoverPrimary:S[Ce("textColorHover",ae)]),"--n-text-color-pressed":Le||(Z?S.textColorPressedPrimary:S[Ce("textColorPressed",ae)]),"--n-text-color-focus":Le||(Z?S.textColorFocusPrimary:S[Ce("textColorFocus",ae)]),"--n-text-color-disabled":Le||(Z?S.textColorDisabledPrimary:S[Ce("textColorDisabled",ae)])};let Te={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};Y?Te={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Te={"--n-border":S[Ce("border",ae)],"--n-border-hover":S[Ce("borderHover",ae)],"--n-border-pressed":S[Ce("borderPressed",ae)],"--n-border-focus":S[Ce("borderFocus",ae)],"--n-border-disabled":S[Ce("borderDisabled",ae)]};const{[Ce("height",A)]:me,[Ce("fontSize",A)]:_,[Ce("padding",A)]:m,[Ce("paddingRound",A)]:v,[Ce("iconSize",A)]:P,[Ce("borderRadius",A)]:I,[Ce("iconMargin",A)]:M,waveOpacity:U}=S,X={"--n-width":ve&&!Y?me:"initial","--n-height":Y?"initial":me,"--n-font-size":_,"--n-padding":ve||Y?"initial":se?v:m,"--n-icon-size":P,"--n-icon-margin":M,"--n-border-radius":Y?"initial":ve||se?me:I};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":C,"--n-bezier-ease-out":$,"--n-ripple-duration":L,"--n-opacity-disabled":k,"--n-wave-opacity":U},N),J),Te),X)}),T=h?pr("button",K(()=>{let x="";const{dashed:C,type:$,ghost:S,text:L,color:k,round:R,circle:H,textColor:A,secondary:q,tertiary:F,quaternary:ee,strong:Y}=e;C&&(x+="a"),S&&(x+="b"),L&&(x+="c"),R&&(x+="d"),H&&(x+="e"),q&&(x+="f"),F&&(x+="g"),ee&&(x+="h"),Y&&(x+="i"),k&&(x+="j"+_h(k)),A&&(x+="k"+_h(A));const{value:Z}=s;return x+="l"+Z[0],x+="m"+$[0],x}),w,e):void 0;return{selfElRef:t,waveElRef:r,mergedClsPrefix:p,mergedFocusable:a,mergedSize:s,showBorder:n,enterPressed:o,rtlEnabled:g,handleMousedown:l,handleKeydown:d,handleBlur:f,handleKeyup:u,handleClick:c,customColorCssVars:K(()=>{const{color:x}=e;if(!x)return null;const C=on(x);return{"--n-border-color":x,"--n-border-color-hover":C,"--n-border-color-pressed":La(x),"--n-border-color-focus":C,"--n-border-color-disabled":x}}),cssVars:h?void 0:w,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:r}=this;r==null||r();const o=er(this.$slots.default,n=>n&&E("span",{class:`${e}-button__content`},n));return E(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,E(Zl,{width:!0},{default:()=>er(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&E("span",{class:`${e}-button__icon`,style:{margin:fu(this.$slots.default)?"0":""}},E(Yl,null,{default:()=>this.loading?E(Ab,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):E("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&o,this.text?null:E(z6,{ref:"waveElRef",clsPrefix:e}),this.showBorder?E("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?E("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),qn=tL,rL={titleFontSize:"22px"},av=e=>{const{borderRadius:t,fontSize:r,lineHeight:o,textColor2:n,textColor1:i,textColorDisabled:s,dividerColor:a,fontWeightStrong:l,primaryColor:c,baseColor:u,hoverColor:d,cardColor:f,modalColor:h,popoverColor:p}=e;return Object.assign(Object.assign({},rL),{borderRadius:t,borderColor:he(f,a),borderColorModal:he(h,a),borderColorPopover:he(p,a),textColor:n,titleFontWeight:l,titleTextColor:i,dayTextColor:s,fontSize:r,lineHeight:o,dateColorCurrent:c,dateTextColorCurrent:u,cellColorHover:he(f,d),cellColorHoverModal:he(h,d),cellColorHoverPopover:he(p,d),cellColor:f,cellColorModal:h,cellColorPopover:p,barColor:c})},oL={name:"Calendar",common:ie,peers:{Button:Nt},self:av},nL=oL,iL={name:"Calendar",common:ne,peers:{Button:Yt},self:av},sL=iL,lv=e=>{const{fontSize:t,boxShadow2:r,popoverColor:o,textColor2:n,borderRadius:i,borderColor:s,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,dividerColor:h}=e;return{panelFontSize:t,boxShadow:r,color:o,textColor:n,borderRadius:i,border:`1px solid ${s}`,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,dividerColor:h}},aL={name:"ColorPicker",common:ie,peers:{Input:mr,Button:Nt},self:lv},lL=aL,cL={name:"ColorPicker",common:ne,peers:{Input:gr,Button:Yt},self:lv},uL=cL,dL={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},cv=e=>{const{primaryColor:t,borderRadius:r,lineHeight:o,fontSize:n,cardColor:i,textColor2:s,textColor1:a,dividerColor:l,fontWeightStrong:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:b,boxShadow1:y,popoverColor:g,actionColor:w}=e;return Object.assign(Object.assign({},dL),{lineHeight:o,color:i,colorModal:b,colorPopover:g,colorTarget:t,colorEmbedded:w,colorEmbeddedModal:w,colorEmbeddedPopover:w,textColor:s,titleTextColor:a,borderColor:l,actionColor:w,titleFontWeight:c,closeColorHover:h,closeColorPressed:p,closeBorderRadius:r,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:n,fontSizeMedium:n,fontSizeLarge:n,fontSizeHuge:n,boxShadow:y,borderRadius:r})},fL={name:"Card",common:ie,self:cv},Wd=fL,hL={name:"Card",common:ne,self(e){const t=cv(e),{cardColor:r,modalColor:o,popoverColor:n}=e;return t.colorEmbedded=r,t.colorEmbeddedModal=o,t.colorEmbeddedPopover=n,t}},uv=hL,pL=z([j("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w0({background:"var(--n-color-modal)"}),re("hoverable",[z("&:hover","box-shadow: var(--n-box-shadow);")]),re("content-segmented",[z(">",[oe("content",{paddingTop:"var(--n-padding-bottom)"})])]),re("content-soft-segmented",[z(">",[oe("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),re("footer-segmented",[z(">",[oe("footer",{paddingTop:"var(--n-padding-bottom)"})])]),re("footer-soft-segmented",[z(">",[oe("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),z(">",[j("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[oe("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),oe("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),oe("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),oe("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),oe("content","flex: 1; min-width: 0;"),oe("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[z("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),oe("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),j("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[z("img",`
 display: block;
 width: 100%;
 `)]),re("bordered",`
 border: 1px solid var(--n-border-color);
 `,[z("&:target","border-color: var(--n-color-target);")]),re("action-segmented",[z(">",[oe("action",[z("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),re("content-segmented, content-soft-segmented",[z(">",[oe("content",{transition:"border-color 0.3s var(--n-bezier)"},[z("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),re("footer-segmented, footer-soft-segmented",[z(">",[oe("footer",{transition:"border-color 0.3s var(--n-bezier)"},[z("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),re("embedded",`
 background-color: var(--n-color-embedded);
 `)]),C0(j("card",`
 background: var(--n-color-modal);
 `,[re("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),cS(j("card",`
 background: var(--n-color-popover);
 `,[re("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ud={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},gL=jl(Ud),mL=Object.assign(Object.assign({},Xe.props),Ud),bL=be({name:"Card",props:mL,setup(e){const t=()=>{const{onClose:c}=e;c&&rr(c)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:n}=Pt(e),i=Xe("Card","-card",pL,Wd,e,o),s=Ys("Card",n,o),a=K(()=>{const{size:c}=e,{self:{color:u,colorModal:d,colorTarget:f,textColor:h,titleTextColor:p,titleFontWeight:b,borderColor:y,actionColor:g,borderRadius:w,lineHeight:T,closeIconColor:x,closeIconColorHover:C,closeIconColorPressed:$,closeColorHover:S,closeColorPressed:L,closeBorderRadius:k,closeIconSize:R,closeSize:H,boxShadow:A,colorPopover:q,colorEmbedded:F,colorEmbeddedModal:ee,colorEmbeddedPopover:Y,[Ce("padding",c)]:Z,[Ce("fontSize",c)]:se,[Ce("titleFontSize",c)]:ve},common:{cubicBezierEaseInOut:Le}}=i.value,{top:_e,left:Ae,bottom:ut}=h0(Z);return{"--n-bezier":Le,"--n-border-radius":w,"--n-color":u,"--n-color-modal":d,"--n-color-popover":q,"--n-color-embedded":F,"--n-color-embedded-modal":ee,"--n-color-embedded-popover":Y,"--n-color-target":f,"--n-text-color":h,"--n-line-height":T,"--n-action-color":g,"--n-title-text-color":p,"--n-title-font-weight":b,"--n-close-icon-color":x,"--n-close-icon-color-hover":C,"--n-close-icon-color-pressed":$,"--n-close-color-hover":S,"--n-close-color-pressed":L,"--n-border-color":y,"--n-box-shadow":A,"--n-padding-top":_e,"--n-padding-bottom":ut,"--n-padding-left":Ae,"--n-font-size":se,"--n-title-font-size":ve,"--n-close-size":H,"--n-close-icon-size":R,"--n-close-border-radius":k}}),l=r?pr("card",K(()=>e.size[0]),a,e):void 0;return{rtlEnabled:s,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:t,cssVars:r?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:o,rtlEnabled:n,onRender:i,embedded:s,tag:a,$slots:l}=this;return i==null||i(),E(a,{class:[`${o}-card`,this.themeClass,s&&`${o}-card--embedded`,{[`${o}-card--rtl`]:n,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},er(l.cover,c=>c&&E("div",{class:`${o}-card-cover`,role:"none"},c)),er(l.header,c=>c||this.title||this.closable?E("div",{class:`${o}-card-header`,style:this.headerStyle},E("div",{class:`${o}-card-header__main`,role:"heading"},c||this.title),er(l["header-extra"],u=>u&&E("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},u)),this.closable?E(Jl,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),er(l.default,c=>c&&E("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},c)),er(l.footer,c=>c&&[E("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},c)]),er(l.action,c=>c&&E("div",{class:`${o}-card__action`,role:"none"},c)))}}),dv=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),vL={name:"Carousel",common:ie,self:dv},yL=vL,xL={name:"Carousel",common:ne,self:dv},CL=xL,wL={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},fv=e=>{const{baseColor:t,inputColorDisabled:r,cardColor:o,modalColor:n,popoverColor:i,textColorDisabled:s,borderColor:a,primaryColor:l,textColor2:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadiusSmall:h,lineHeight:p}=e;return Object.assign(Object.assign({},wL),{labelLineHeight:p,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadius:h,color:t,colorChecked:l,colorDisabled:r,colorDisabledChecked:r,colorTableHeader:o,colorTableHeaderModal:n,colorTableHeaderPopover:i,checkMarkColor:t,checkMarkColorDisabled:s,checkMarkColorDisabledChecked:s,border:`1px solid ${a}`,borderDisabled:`1px solid ${a}`,borderDisabledChecked:`1px solid ${a}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${G(l,{alpha:.3})}`,textColor:c,textColorDisabled:s})},SL={name:"Checkbox",common:ie,self:fv},Mi=SL,EL={name:"Checkbox",common:ne,self(e){const{cardColor:t}=e,r=fv(e);return r.color="#0000",r.checkMarkColor=t,r}},Bi=EL,hv=e=>{const{borderRadius:t,boxShadow2:r,popoverColor:o,textColor2:n,textColor3:i,primaryColor:s,textColorDisabled:a,dividerColor:l,hoverColor:c,fontSizeMedium:u,heightMedium:d}=e;return{menuBorderRadius:t,menuColor:o,menuBoxShadow:r,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:d,optionFontSize:u,optionColorHover:c,optionTextColor:n,optionTextColorActive:s,optionTextColorDisabled:a,optionCheckMarkColor:s,loadingColor:s,columnWidth:"180px"}},_L={name:"Cascader",common:ie,peers:{InternalSelectMenu:ea,InternalSelection:Nd,Scrollbar:Ft,Checkbox:Mi,Empty:lo},self:hv},TL=_L,$L={name:"Cascader",common:ne,peers:{InternalSelectMenu:ta,InternalSelection:jd,Scrollbar:Xt,Checkbox:Bi,Empty:lo},self:hv},PL=$L,LL={name:"Code",common:ne,self(e){const{textColor2:t,fontSize:r,fontWeightStrong:o,textColor3:n}=e;return{textColor:t,fontSize:r,fontWeightStrong:o,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:n}}},pv=LL,kL=e=>{const{textColor2:t,fontSize:r,fontWeightStrong:o,textColor3:n}=e;return{textColor:t,fontSize:r,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:n}},IL={name:"Code",common:ie,self:kL},gv=IL,mv=e=>{const{fontWeight:t,textColor1:r,textColor2:o,textColorDisabled:n,dividerColor:i,fontSize:s}=e;return{titleFontSize:s,titleFontWeight:t,dividerColor:i,titleTextColor:r,titleTextColorDisabled:n,fontSize:s,textColor:o,arrowColor:o,arrowColorDisabled:n,itemMargin:"16px 0 0 0"}},RL={name:"Collapse",common:ie,self:mv},OL=RL,AL={name:"Collapse",common:ne,self:mv},ML=AL,bv=e=>{const{cubicBezierEaseInOut:t}=e;return{bezier:t}},BL={name:"CollapseTransition",common:ie,self:bv},HL=BL,DL={name:"CollapseTransition",common:ne,self:bv},zL=DL,FL={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Is("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},NL=be({name:"ConfigProvider",alias:["App"],props:FL,setup(e){const t=Se(Wo,null),r=K(()=>{const{theme:p}=e;if(p===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return p===void 0?b:b===void 0?p:Object.assign({},b,p)}),o=K(()=>{const{themeOverrides:p}=e;if(p!==null){if(p===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?p:rs({},b,p)}}}),n=oo(()=>{const{namespace:p}=e;return p===void 0?t==null?void 0:t.mergedNamespaceRef.value:p}),i=oo(()=>{const{bordered:p}=e;return p===void 0?t==null?void 0:t.mergedBorderedRef.value:p}),s=K(()=>{const{icons:p}=e;return p===void 0?t==null?void 0:t.mergedIconsRef.value:p}),a=K(()=>{const{componentOptions:p}=e;return p!==void 0?p:t==null?void 0:t.mergedComponentPropsRef.value}),l=K(()=>{const{clsPrefix:p}=e;return p!==void 0?p:t==null?void 0:t.mergedClsPrefixRef.value}),c=K(()=>{var p;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const y={};for(const g of b)y[g.name]=sl(g),(p=g.peers)===null||p===void 0||p.forEach(w=>{w.name in y||(y[w.name]=sl(w))});return y}),u=K(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),f=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),h=K(()=>{const{value:p}=r,{value:b}=o,y=b&&Object.keys(b).length!==0,g=p==null?void 0:p.name;return g?y?`${g}-${Rs(JSON.stringify(o.value))}`:g:y?Rs(JSON.stringify(o.value)):""});return qe(Wo,{mergedThemeHashRef:h,mergedBreakpointsRef:u,mergedRtlRef:c,mergedIconsRef:s,mergedComponentPropsRef:a,mergedBorderedRef:i,mergedNamespaceRef:n,mergedClsPrefixRef:l,mergedLocaleRef:K(()=>{const{locale:p}=e;if(p!==null)return p===void 0?t==null?void 0:t.mergedLocaleRef.value:p}),mergedDateLocaleRef:K(()=>{const{dateLocale:p}=e;if(p!==null)return p===void 0?t==null?void 0:t.mergedDateLocaleRef.value:p}),mergedHljsRef:K(()=>{const{hljs:p}=e;return p===void 0?t==null?void 0:t.mergedHljsRef.value:p}),mergedKatexRef:K(()=>{const{katex:p}=e;return p===void 0?t==null?void 0:t.mergedKatexRef.value:p}),mergedThemeRef:r,mergedThemeOverridesRef:o,inlineThemeDisabled:d||!1,preflightStyleDisabled:f||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:n,mergedTheme:r,mergedThemeOverrides:o}},render(){var e,t,r,o;return this.abstract?(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r):E(this.as||this.tag,{class:`${this.mergedClsPrefix||Ob}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),jL={name:"Popselect",common:ne,peers:{Popover:Hn,InternalSelectMenu:ta}},vv=jL;function WL(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const UL={name:"Popselect",common:ie,peers:{Popover:Go,InternalSelectMenu:ea},self:WL},yv=UL;function xv(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const VL={name:"Select",common:ie,peers:{InternalSelection:Nd,InternalSelectMenu:ea},self:xv},Cv=VL,KL={name:"Select",common:ne,peers:{InternalSelection:jd,InternalSelectMenu:ta},self:xv},wv=KL,qL={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},Sv=e=>{const{textColor2:t,primaryColor:r,primaryColorHover:o,primaryColorPressed:n,inputColorDisabled:i,textColorDisabled:s,borderColor:a,borderRadius:l,fontSizeTiny:c,fontSizeSmall:u,fontSizeMedium:d,heightTiny:f,heightSmall:h,heightMedium:p}=e;return Object.assign(Object.assign({},qL),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${a}`,buttonBorderHover:`1px solid ${a}`,buttonBorderPressed:`1px solid ${a}`,buttonIconColor:t,buttonIconColorHover:t,buttonIconColorPressed:t,itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:n,itemTextColorActive:r,itemTextColorDisabled:s,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${r}`,itemBorderDisabled:`1px solid ${a}`,itemBorderRadius:l,itemSizeSmall:f,itemSizeMedium:h,itemSizeLarge:p,itemFontSizeSmall:c,itemFontSizeMedium:u,itemFontSizeLarge:d,jumperFontSizeSmall:c,jumperFontSizeMedium:u,jumperFontSizeLarge:d,jumperTextColor:t,jumperTextColorDisabled:s})},GL={name:"Pagination",common:ie,peers:{Select:Cv,Input:mr,Popselect:yv},self:Sv},Ev=GL,XL={name:"Pagination",common:ne,peers:{Select:wv,Input:gr,Popselect:vv},self(e){const{primaryColor:t,opacity3:r}=e,o=G(t,{alpha:Number(r)}),n=Sv(e);return n.itemBorderActive=`1px solid ${o}`,n.itemBorderDisabled="1px solid #0000",n}},_v=XL,Tv={padding:"8px 14px"},YL={name:"Tooltip",common:ne,peers:{Popover:Hn},self(e){const{borderRadius:t,boxShadow2:r,popoverColor:o,textColor2:n}=e;return Object.assign(Object.assign({},Tv),{borderRadius:t,boxShadow:r,color:o,textColor:n})}},Ql=YL,ZL=e=>{const{borderRadius:t,boxShadow2:r,baseColor:o}=e;return Object.assign(Object.assign({},Tv),{borderRadius:t,boxShadow:r,color:he(o,"rgba(0, 0, 0, .85)"),textColor:o})},JL={name:"Tooltip",common:ie,peers:{Popover:Go},self:ZL},ra=JL,QL={name:"Ellipsis",common:ne,peers:{Tooltip:Ql}},$v=QL,e8={name:"Ellipsis",common:ie,peers:{Tooltip:ra}},Pv=e8,Lv={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},t8={name:"Radio",common:ne,self(e){const{borderColor:t,primaryColor:r,baseColor:o,textColorDisabled:n,inputColorDisabled:i,textColor2:s,opacityDisabled:a,borderRadius:l,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,heightSmall:f,heightMedium:h,heightLarge:p,lineHeight:b}=e;return Object.assign(Object.assign({},Lv),{labelLineHeight:b,buttonHeightSmall:f,buttonHeightMedium:h,buttonHeightLarge:p,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${r}`,boxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${G(r,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${r}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:s,textColorDisabled:n,dotColorActive:r,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:r,buttonBorderColorHover:r,buttonColor:"#0000",buttonColorActive:r,buttonTextColor:s,buttonTextColorActive:o,buttonTextColorHover:r,opacityDisabled:a,buttonBoxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${G(r,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${r}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},kv=t8,r8=e=>{const{borderColor:t,primaryColor:r,baseColor:o,textColorDisabled:n,inputColorDisabled:i,textColor2:s,opacityDisabled:a,borderRadius:l,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,heightSmall:f,heightMedium:h,heightLarge:p,lineHeight:b}=e;return Object.assign(Object.assign({},Lv),{labelLineHeight:b,buttonHeightSmall:f,buttonHeightMedium:h,buttonHeightLarge:p,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${r}`,boxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${G(r,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${r}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:o,colorDisabled:i,colorActive:"#0000",textColor:s,textColorDisabled:n,dotColorActive:r,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:r,buttonBorderColorHover:t,buttonColor:o,buttonColorActive:o,buttonTextColor:s,buttonTextColorActive:r,buttonTextColorHover:r,opacityDisabled:a,buttonBoxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${G(r,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})},o8={name:"Radio",common:ie,self:r8},Iv=o8,n8={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},Rv=e=>{const{primaryColor:t,textColor2:r,dividerColor:o,hoverColor:n,popoverColor:i,invertedColor:s,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:d,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:b,textColor3:y,opacityDisabled:g}=e;return Object.assign(Object.assign({},n8),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:b,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:r,optionTextColorHover:r,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:o,suffixColor:r,prefixColor:r,optionColorHover:n,optionColorActive:G(t,{alpha:.1}),groupHeaderTextColor:y,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:g})},i8={name:"Dropdown",common:ie,peers:{Popover:Go},self:Rv},Vd=i8,s8={name:"Dropdown",common:ne,peers:{Popover:Hn},self(e){const{primaryColorSuppl:t,primaryColor:r,popoverColor:o}=e,n=Rv(e);return n.colorInverted=o,n.optionColorActive=G(r,{alpha:.15}),n.optionColorActiveInverted=t,n.optionColorHoverInverted=t,n}},Kd=s8,a8={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},Ov=e=>{const{cardColor:t,modalColor:r,popoverColor:o,textColor2:n,textColor1:i,tableHeaderColor:s,tableColorHover:a,iconColor:l,primaryColor:c,fontWeightStrong:u,borderRadius:d,lineHeight:f,fontSizeSmall:h,fontSizeMedium:p,fontSizeLarge:b,dividerColor:y,heightSmall:g,opacityDisabled:w,tableColorStriped:T}=e;return Object.assign(Object.assign({},a8),{actionDividerColor:y,lineHeight:f,borderRadius:d,fontSizeSmall:h,fontSizeMedium:p,fontSizeLarge:b,borderColor:he(t,y),tdColorHover:he(t,a),tdColorStriped:he(t,T),thColor:he(t,s),thColorHover:he(he(t,s),a),tdColor:t,tdTextColor:n,thTextColor:i,thFontWeight:u,thButtonColorHover:a,thIconColor:l,thIconColorActive:c,borderColorModal:he(r,y),tdColorHoverModal:he(r,a),tdColorStripedModal:he(r,T),thColorModal:he(r,s),thColorHoverModal:he(he(r,s),a),tdColorModal:r,borderColorPopover:he(o,y),tdColorHoverPopover:he(o,a),tdColorStripedPopover:he(o,T),thColorPopover:he(o,s),thColorHoverPopover:he(he(o,s),a),tdColorPopover:o,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:g,opacityLoading:w})},l8={name:"DataTable",common:ie,peers:{Button:Nt,Checkbox:Mi,Radio:Iv,Pagination:Ev,Scrollbar:Ft,Empty:lo,Popover:Go,Ellipsis:Pv,Dropdown:Vd},self:Ov},c8=l8,u8={name:"DataTable",common:ne,peers:{Button:Yt,Checkbox:Bi,Radio:kv,Pagination:_v,Scrollbar:Xt,Empty:Bn,Popover:Hn,Ellipsis:$v,Dropdown:Kd},self(e){const t=Ov(e);return t.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",t.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",t}},d8=u8,f8=Object.assign(Object.assign({},Vb),Xe.props),h8=be({name:"Tooltip",props:f8,__popover__:!0,setup(e){const t=Xe("Tooltip","-tooltip",void 0,ra,e),r=V(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(n){r.value.setShow(n)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:K(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return E(Z6,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Av=e=>{const{textColorBase:t,opacity1:r,opacity2:o,opacity3:n,opacity4:i,opacity5:s}=e;return{color:t,opacity1Depth:r,opacity2Depth:o,opacity3Depth:n,opacity4Depth:i,opacity5Depth:s}},p8={name:"Icon",common:ie,self:Av},g8=p8,m8={name:"Icon",common:ne,self:Av},b8=m8,v8={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},Mv=e=>{const{popoverColor:t,textColor2:r,primaryColor:o,hoverColor:n,dividerColor:i,opacityDisabled:s,boxShadow2:a,borderRadius:l,iconColor:c,iconColorDisabled:u}=e;return Object.assign(Object.assign({},v8),{panelColor:t,panelBoxShadow:a,panelDividerColor:i,itemTextColor:r,itemTextColorActive:o,itemColorHover:n,itemOpacityDisabled:s,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:u})},y8={name:"TimePicker",common:ie,peers:{Scrollbar:Ft,Button:Nt,Input:mr},self:Mv},Bv=y8,x8={name:"TimePicker",common:ne,peers:{Scrollbar:Xt,Button:Yt,Input:gr},self:Mv},Hv=x8,C8={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},Dv=e=>{const{hoverColor:t,fontSize:r,textColor2:o,textColorDisabled:n,popoverColor:i,primaryColor:s,borderRadiusSmall:a,iconColor:l,iconColorDisabled:c,textColor1:u,dividerColor:d,boxShadow2:f,borderRadius:h,fontWeightStrong:p}=e;return Object.assign(Object.assign({},C8),{itemFontSize:r,calendarDaysFontSize:r,calendarTitleFontSize:r,itemTextColor:o,itemTextColorDisabled:n,itemTextColorActive:i,itemTextColorCurrent:s,itemColorIncluded:G(s,{alpha:.1}),itemColorHover:t,itemColorDisabled:t,itemColorActive:s,itemBorderRadius:a,panelColor:i,panelTextColor:o,arrowColor:l,calendarTitleTextColor:u,calendarTitleColorHover:t,calendarDaysTextColor:o,panelHeaderDividerColor:d,calendarDaysDividerColor:d,calendarDividerColor:d,panelActionDividerColor:d,panelBoxShadow:f,panelBorderRadius:h,calendarTitleFontWeight:p,scrollItemBorderRadius:h,iconColor:l,iconColorDisabled:c})},w8={name:"DatePicker",common:ie,peers:{Input:mr,Button:Nt,TimePicker:Bv,Scrollbar:Ft},self:Dv},S8=w8,E8={name:"DatePicker",common:ne,peers:{Input:gr,Button:Yt,TimePicker:Hv,Scrollbar:Xt},self(e){const{popoverColor:t,hoverColor:r,primaryColor:o}=e,n=Dv(e);return n.itemColorDisabled=he(t,r),n.itemColorIncluded=G(o,{alpha:.15}),n.itemColorHover=he(t,r),n}},_8=E8;function Hi(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}),r}const T8={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},zv=e=>{const{tableHeaderColor:t,textColor2:r,textColor1:o,cardColor:n,modalColor:i,popoverColor:s,dividerColor:a,borderRadius:l,fontWeightStrong:c,lineHeight:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:h}=e;return Object.assign(Object.assign({},T8),{lineHeight:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:h,titleTextColor:o,thColor:he(n,t),thColorModal:he(i,t),thColorPopover:he(s,t),thTextColor:o,thFontWeight:c,tdTextColor:r,tdColor:n,tdColorModal:i,tdColorPopover:s,borderColor:he(n,a),borderColorModal:he(i,a),borderColorPopover:he(s,a),borderRadius:l})},$8={name:"Descriptions",common:ie,self:zv},P8=$8,L8={name:"Descriptions",common:ne,self:zv},k8=L8,I8={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Fv=e=>{const{textColor1:t,textColor2:r,modalColor:o,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,infoColor:c,successColor:u,warningColor:d,errorColor:f,primaryColor:h,dividerColor:p,borderRadius:b,fontWeightStrong:y,lineHeight:g,fontSize:w}=e;return Object.assign(Object.assign({},I8),{fontSize:w,lineHeight:g,border:`1px solid ${p}`,titleTextColor:t,textColor:r,color:o,closeColorHover:a,closeColorPressed:l,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeBorderRadius:b,iconColor:h,iconColorInfo:c,iconColorSuccess:u,iconColorWarning:d,iconColorError:f,borderRadius:b,titleFontWeight:y})},R8={name:"Dialog",common:ie,peers:{Button:Nt},self:Fv},qd=R8,O8={name:"Dialog",common:ne,peers:{Button:Yt},self:Fv},Nv=O8,ec={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},jv=jl(ec),A8=z([j("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[oe("icon",{color:"var(--n-icon-color)"}),re("bordered",{border:"var(--n-border)"}),re("icon-top",[oe("close",{margin:"var(--n-close-margin)"}),oe("icon",{margin:"var(--n-icon-margin)"}),oe("content",{textAlign:"center"}),oe("title",{justifyContent:"center"}),oe("action",{justifyContent:"center"})]),re("icon-left",[oe("icon",{margin:"var(--n-icon-margin)"}),re("closable",[oe("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),oe("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),oe("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[re("last","margin-bottom: 0;")]),oe("action",`
 display: flex;
 justify-content: flex-end;
 `,[z("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),oe("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),oe("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),j("dialog-icon-container",{display:"flex",justifyContent:"center"})]),C0(j("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),j("dialog",[w0(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),M8={default:()=>E(bi,null),info:()=>E(bi,null),success:()=>E(Js,null),warning:()=>E(Qs,null),error:()=>E(Zs,null)},Wv=be({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},Xe.props),ec),setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:o}=Pt(e),n=K(()=>{var d,f;const{iconPlacement:h}=e;return h||((f=(d=t==null?void 0:t.value)===null||d===void 0?void 0:d.Dialog)===null||f===void 0?void 0:f.iconPlacement)||"left"});function i(d){const{onPositiveClick:f}=e;f&&f(d)}function s(d){const{onNegativeClick:f}=e;f&&f(d)}function a(){const{onClose:d}=e;d&&d()}const l=Xe("Dialog","-dialog",A8,qd,e,r),c=K(()=>{const{type:d}=e,f=n.value,{common:{cubicBezierEaseInOut:h},self:{fontSize:p,lineHeight:b,border:y,titleTextColor:g,textColor:w,color:T,closeBorderRadius:x,closeColorHover:C,closeColorPressed:$,closeIconColor:S,closeIconColorHover:L,closeIconColorPressed:k,closeIconSize:R,borderRadius:H,titleFontWeight:A,titleFontSize:q,padding:F,iconSize:ee,actionSpace:Y,contentMargin:Z,closeSize:se,[f==="top"?"iconMarginIconTop":"iconMargin"]:ve,[f==="top"?"closeMarginIconTop":"closeMargin"]:Le,[Ce("iconColor",d)]:_e}}=l.value;return{"--n-font-size":p,"--n-icon-color":_e,"--n-bezier":h,"--n-close-margin":Le,"--n-icon-margin":ve,"--n-icon-size":ee,"--n-close-size":se,"--n-close-icon-size":R,"--n-close-border-radius":x,"--n-close-color-hover":C,"--n-close-color-pressed":$,"--n-close-icon-color":S,"--n-close-icon-color-hover":L,"--n-close-icon-color-pressed":k,"--n-color":T,"--n-text-color":w,"--n-border-radius":H,"--n-padding":F,"--n-line-height":b,"--n-border":y,"--n-content-margin":Z,"--n-title-font-size":q,"--n-title-font-weight":A,"--n-title-text-color":g,"--n-action-space":Y}}),u=o?pr("dialog",K(()=>`${e.type[0]}${n.value[0]}`),c,e):void 0;return{mergedClsPrefix:r,mergedIconPlacement:n,mergedTheme:l,handlePositiveClick:i,handleNegativeClick:s,handleCloseClick:a,cssVars:o?void 0:c,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:r,cssVars:o,closable:n,showIcon:i,title:s,content:a,action:l,negativeText:c,positiveText:u,positiveButtonProps:d,negativeButtonProps:f,handlePositiveClick:h,handleNegativeClick:p,mergedTheme:b,loading:y,type:g,mergedClsPrefix:w}=this;(e=this.onRender)===null||e===void 0||e.call(this);const T=i?E(dt,{clsPrefix:w,class:`${w}-dialog__icon`},{default:()=>er(this.$slots.icon,C=>C||(this.icon?Qt(this.icon):M8[this.type]()))}):null,x=er(this.$slots.action,C=>C||u||c||l?E("div",{class:`${w}-dialog__action`},C||(l?[Qt(l)]:[this.negativeText&&E(qn,Object.assign({theme:b.peers.Button,themeOverrides:b.peerOverrides.Button,ghost:!0,size:"small",onClick:p},f),{default:()=>Qt(this.negativeText)}),this.positiveText&&E(qn,Object.assign({theme:b.peers.Button,themeOverrides:b.peerOverrides.Button,size:"small",type:g==="default"?"primary":g,disabled:y,loading:y,onClick:h},d),{default:()=>Qt(this.positiveText)})])):null);return E("div",{class:[`${w}-dialog`,this.themeClass,this.closable&&`${w}-dialog--closable`,`${w}-dialog--icon-${r}`,t&&`${w}-dialog--bordered`],style:o,role:"dialog"},n?E(Jl,{clsPrefix:w,class:`${w}-dialog__close`,onClick:this.handleCloseClick}):null,i&&r==="top"?E("div",{class:`${w}-dialog-icon-container`},T):null,E("div",{class:`${w}-dialog__title`},i&&r==="left"?T:null,du(this.$slots.header,()=>[Qt(s)])),E("div",{class:[`${w}-dialog__content`,x?"":`${w}-dialog__content--last`]},du(this.$slots.default,()=>[Qt(a)])),x)}}),Uv="n-dialog-provider",B8="n-dialog-api",H8="n-dialog-reactive-list",Vv=e=>{const{modalColor:t,textColor2:r,boxShadow3:o}=e;return{color:t,textColor:r,boxShadow:o}},D8={name:"Modal",common:ie,peers:{Scrollbar:Ft,Dialog:qd,Card:Wd},self:Vv},Kv=D8,z8={name:"Modal",common:ne,peers:{Scrollbar:Xt,Dialog:Nv,Card:uv},self:Vv},F8=z8,Gd=Object.assign(Object.assign({},Ud),ec),N8=jl(Gd),j8=be({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Gd),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=V(null),r=V(null),o=V(e.show),n=V(null),i=V(null);et(Me(e,"show"),y=>{y&&(o.value=!0)}),vE(K(()=>e.blockScroll&&o.value));const s=Se(L0);function a(){if(s.transformOriginRef.value==="center")return"";const{value:y}=n,{value:g}=i;if(y===null||g===null)return"";if(r.value){const w=r.value.containerScrollTop;return`${y}px ${g+w}px`}return""}function l(y){if(s.transformOriginRef.value==="center")return;const g=s.getMousePosition();if(!g||!r.value)return;const w=r.value.containerScrollTop,{offsetLeft:T,offsetTop:x}=y;if(g){const C=g.y,$=g.x;n.value=-(T-$),i.value=-(x-C-w)}y.style.transformOrigin=a()}function c(y){Dt(()=>{l(y)})}function u(y){y.style.transformOrigin=a(),e.onBeforeLeave()}function d(){o.value=!1,n.value=null,i.value=null,e.onAfterLeave()}function f(){const{onClose:y}=e;y&&y()}function h(){e.onNegativeClick()}function p(){e.onPositiveClick()}const b=V(null);return et(b,y=>{y&&Dt(()=>{const g=y.el;g&&t.value!==g&&(t.value=g)})}),qe(Sd,t),qe(Ed,null),qe(_d,null),{mergedTheme:s.mergedThemeRef,appear:s.appearRef,isMounted:s.isMountedRef,mergedClsPrefix:s.mergedClsPrefixRef,bodyRef:t,scrollbarRef:r,displayed:o,childNodeRef:b,handlePositiveClick:p,handleNegativeClick:h,handleCloseClick:f,handleAfterLeave:d,handleBeforeLeave:u,handleEnter:c}},render(){const{$slots:e,$attrs:t,handleEnter:r,handleAfterLeave:o,handleBeforeLeave:n,preset:i,mergedClsPrefix:s}=this;let a=null;if(!i){if(a=uu(e),!a){Is("modal","default slot is empty");return}a=Sr(a),a.props=Fl({class:`${s}-modal`},t,a.props||{})}return this.displayDirective==="show"||this.displayed||this.show?Dr(E("div",{role:"none",class:`${s}-modal-body-wrapper`},E(Fb,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${s}-modal-scroll-content`},{default:()=>{var l;return[(l=this.renderMask)===null||l===void 0?void 0:l.call(this),E(U0,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var c;return E(Kt,{name:"fade-in-scale-up-transition",appear:(c=this.appear)!==null&&c!==void 0?c:this.isMounted,onEnter:r,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:n},{default:()=>{const u=[[Ls,this.show]],{onClickoutside:d}=this;return d&&u.push([mu,this.onClickoutside,void 0,{capture:!0}]),Dr(this.preset==="confirm"||this.preset==="dialog"?E(Wv,Object.assign({},this.$attrs,{class:[`${s}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},gi(this.$props,jv),{"aria-modal":"true"}),e):this.preset==="card"?E(bL,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${s}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},gi(this.$props,gL),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=a,u)}})}})]}})),[[Ls,this.displayDirective==="if"||this.displayed||this.show]]):null}}),W8=z([j("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),j("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[zs({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),j("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[j("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),j("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[jb({duration:".25s",enterScale:".5"})])]),U8=Object.assign(Object.assign(Object.assign(Object.assign({},Xe.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Gd),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),V8=be({name:"Modal",inheritAttrs:!1,props:U8,setup(e){const t=V(null),{mergedClsPrefixRef:r,namespaceRef:o,inlineThemeDisabled:n}=Pt(e),i=Xe("Modal","-modal",W8,Kv,e,r),s=$0(64),a=T0(),l=Oi(),c=e.internalDialog?Se(Uv,null):null,u=yE();function d(C){const{onUpdateShow:$,"onUpdate:show":S,onHide:L}=e;$&&rr($,C),S&&rr(S,C),L&&!C&&L(C)}function f(){const{onClose:C}=e;C?Promise.resolve(C()).then($=>{$!==!1&&d(!1)}):d(!1)}function h(){const{onPositiveClick:C}=e;C?Promise.resolve(C()).then($=>{$!==!1&&d(!1)}):d(!1)}function p(){const{onNegativeClick:C}=e;C?Promise.resolve(C()).then($=>{$!==!1&&d(!1)}):d(!1)}function b(){const{onBeforeLeave:C,onBeforeHide:$}=e;C&&rr(C),$&&$()}function y(){const{onAfterLeave:C,onAfterHide:$}=e;C&&rr(C),$&&$()}function g(C){var $;const{onMaskClick:S}=e;S&&S(C),e.maskClosable&&!(($=t.value)===null||$===void 0)&&$.contains(ks(C))&&d(!1)}function w(C){var $;($=e.onEsc)===null||$===void 0||$.call(e),e.show&&e.closeOnEsc&&fS(C)&&!u.value&&d(!1)}qe(L0,{getMousePosition:()=>{if(c){const{clickedRef:C,clickPositionRef:$}=c;if(C.value&&$.value)return $.value}return s.value?a.value:null},mergedClsPrefixRef:r,mergedThemeRef:i,isMountedRef:l,appearRef:Me(e,"internalAppear"),transformOriginRef:Me(e,"transformOrigin")});const T=K(()=>{const{common:{cubicBezierEaseOut:C},self:{boxShadow:$,color:S,textColor:L}}=i.value;return{"--n-bezier-ease-out":C,"--n-box-shadow":$,"--n-color":S,"--n-text-color":L}}),x=n?pr("theme-class",void 0,T,e):void 0;return{mergedClsPrefix:r,namespace:o,isMounted:l,containerRef:t,presetProps:K(()=>gi(e,N8)),handleEsc:w,handleAfterLeave:y,handleClickoutside:g,handleBeforeLeave:b,doUpdateShow:d,handleNegativeClick:p,handlePositiveClick:h,handleCloseClick:f,cssVars:n?void 0:T,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e}=this;return E(Td,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:r}=this;return Dr(E("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},E(j8,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:r?void 0:this.handleClickoutside,renderMask:r?()=>{var o;return E(Kt,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?E("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[Ul,{zIndex:this.zIndex,enabled:this.show}]])}})}}),K8=Object.assign(Object.assign({},ec),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),q8=be({name:"DialogEnvironment",props:Object.assign(Object.assign({},K8),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=V(!0);function r(){const{onInternalAfterLeave:u,internalKey:d,onAfterLeave:f}=e;u&&u(d),f&&f()}function o(u){const{onPositiveClick:d}=e;d?Promise.resolve(d(u)).then(f=>{f!==!1&&l()}):l()}function n(u){const{onNegativeClick:d}=e;d?Promise.resolve(d(u)).then(f=>{f!==!1&&l()}):l()}function i(){const{onClose:u}=e;u?Promise.resolve(u()).then(d=>{d!==!1&&l()}):l()}function s(u){const{onMaskClick:d,maskClosable:f}=e;d&&(d(u),f&&l())}function a(){const{onEsc:u}=e;u&&u()}function l(){t.value=!1}function c(u){t.value=u}return{show:t,hide:l,handleUpdateShow:c,handleAfterLeave:r,handleCloseClick:i,handleNegativeClick:n,handlePositiveClick:o,handleMaskClick:s,handleEsc:a}},render(){const{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:r,handleCloseClick:o,handleAfterLeave:n,handleMaskClick:i,handleEsc:s,to:a,maskClosable:l,show:c}=this;return E(V8,{show:c,onUpdateShow:t,onMaskClick:i,onEsc:s,to:a,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:n,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,internalAppear:!0,internalDialog:!0},{default:()=>E(Wv,Object.assign({},gi(this.$props,jv),{style:this.internalStyle,onClose:o,onNegativeClick:r,onPositiveClick:e}))})}}),G8={injectionKey:String,to:[String,Object]},X8=be({name:"DialogProvider",props:G8,setup(){const e=V([]),t={};function r(a={}){const l=Tn(),c=qt(Object.assign(Object.assign({},a),{key:l,destroy:()=>{t[`n-dialog-${l}`].hide()}}));return e.value.push(c),c}const o=["info","success","warning","error"].map(a=>l=>r(Object.assign(Object.assign({},l),{type:a})));function n(a){const{value:l}=e;l.splice(l.findIndex(c=>c.key===a),1)}function i(){Object.values(t).forEach(a=>a.hide())}const s={create:r,destroyAll:i,info:o[0],success:o[1],warning:o[2],error:o[3]};return qe(B8,s),qe(Uv,{clickedRef:$0(64),clickPositionRef:T0()}),qe(H8,e),Object.assign(Object.assign({},s),{dialogList:e,dialogInstRefs:t,handleAfterLeave:n})},render(){var e,t;return E(Qe,null,[this.dialogList.map(r=>E(q8,Cd(r,["destroy","style"],{internalStyle:r.style,to:this.to,ref:o=>{o===null?delete this.dialogInstRefs[`n-dialog-${r.key}`]:this.dialogInstRefs[`n-dialog-${r.key}`]=o},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave}))),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}}),qv=e=>{const{textColor1:t,dividerColor:r,fontWeightStrong:o}=e;return{textColor:t,color:r,fontWeight:o}},Y8={name:"Divider",common:ie,self:qv},Z8=Y8,J8={name:"Divider",common:ne,self:qv},Q8=J8,Gv=e=>{const{modalColor:t,textColor1:r,textColor2:o,boxShadow3:n,lineHeight:i,fontWeightStrong:s,dividerColor:a,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,borderRadius:h,primaryColorHover:p}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:o,titleTextColor:r,titleFontSize:"18px",titleFontWeight:s,boxShadow:n,lineHeight:i,headerBorderBottom:`1px solid ${a}`,footerBorderTop:`1px solid ${a}`,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:h,resizableTriggerColorHover:p}},ek={name:"Drawer",common:ie,peers:{Scrollbar:Ft},self:Gv},tk=ek,rk={name:"Drawer",common:ne,peers:{Scrollbar:Xt},self:Gv},ok=rk,Xv={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},nk={name:"DynamicInput",common:ne,peers:{Input:gr,Button:Yt},self(){return Xv}},ik=nk,sk=()=>Xv,ak={name:"DynamicInput",common:ie,peers:{Input:mr,Button:Nt},self:sk},lk=ak,Yv={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},ck={name:"Space",self(){return Yv}},Zv=ck,uk=()=>Yv,dk={name:"Space",self:uk},Jv=dk,fk={name:"DynamicTags",common:ne,peers:{Input:gr,Button:Yt,Tag:qb,Space:Zv},self(){return{inputWidth:"64px"}}},hk=fk,pk={name:"DynamicTags",common:ie,peers:{Input:mr,Button:Nt,Tag:Gb,Space:Jv},self(){return{inputWidth:"64px"}}},gk=pk,mk={name:"Element",common:ne},bk=mk,vk={name:"Element",common:ie},yk=vk,xk={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},Qv=e=>{const{heightSmall:t,heightMedium:r,heightLarge:o,textColor1:n,errorColor:i,warningColor:s,lineHeight:a,textColor3:l}=e;return Object.assign(Object.assign({},xk),{blankHeightSmall:t,blankHeightMedium:r,blankHeightLarge:o,lineHeight:a,labelTextColor:n,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:s,feedbackTextColor:l})},Ck={name:"Form",common:ie,self:Qv},wk=Ck,Sk={name:"Form",common:ne,self:Qv},Ek=Sk,_k={name:"GradientText",common:ne,self(e){const{primaryColor:t,successColor:r,warningColor:o,errorColor:n,infoColor:i,primaryColorSuppl:s,successColorSuppl:a,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:u,fontWeightStrong:d}=e;return{fontWeight:d,rotate:"252deg",colorStartPrimary:t,colorEndPrimary:s,colorStartInfo:i,colorEndInfo:u,colorStartWarning:o,colorEndWarning:l,colorStartError:n,colorEndError:c,colorStartSuccess:r,colorEndSuccess:a}}},Tk=_k,$k=e=>{const{primaryColor:t,successColor:r,warningColor:o,errorColor:n,infoColor:i,fontWeightStrong:s}=e;return{fontWeight:s,rotate:"252deg",colorStartPrimary:G(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:G(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:G(o,{alpha:.6}),colorEndWarning:o,colorStartError:G(n,{alpha:.6}),colorEndError:n,colorStartSuccess:G(r,{alpha:.6}),colorEndSuccess:r}},Pk={name:"GradientText",common:ie,self:$k},Lk=Pk,e1=e=>{const{primaryColor:t,baseColor:r}=e;return{color:t,iconColor:r}},kk={name:"IconWrapper",common:ie,self:e1},Ik=kk,Rk={name:"IconWrapper",common:ne,self:e1},Ok=Rk,Xd=Object.assign(Object.assign({},Xe.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),t1="n-image";function Ak(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const r1={name:"Image",common:ie,peers:{Tooltip:ra},self:Ak},Mk={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},o1=e=>{const{textColor2:t,successColor:r,infoColor:o,warningColor:n,errorColor:i,popoverColor:s,closeIconColor:a,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:u,closeColorPressed:d,textColor1:f,textColor3:h,borderRadius:p,fontWeightStrong:b,boxShadow2:y,lineHeight:g,fontSize:w}=e;return Object.assign(Object.assign({},Mk),{borderRadius:p,lineHeight:g,fontSize:w,headerFontWeight:b,iconColor:t,iconColorSuccess:r,iconColorInfo:o,iconColorWarning:n,iconColorError:i,color:s,textColor:t,closeIconColor:a,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:p,closeColorHover:u,closeColorPressed:d,headerTextColor:f,descriptionTextColor:h,actionTextColor:t,boxShadow:y})},Bk={name:"Notification",common:ie,peers:{Scrollbar:Ft},self:o1},n1=Bk,Hk={name:"Notification",common:ne,peers:{Scrollbar:Xt},self:o1},Dk=Hk,zk={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},i1=e=>{const{textColor2:t,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:n,infoColor:i,successColor:s,errorColor:a,warningColor:l,popoverColor:c,boxShadow2:u,primaryColor:d,lineHeight:f,borderRadius:h,closeColorHover:p,closeColorPressed:b}=e;return Object.assign(Object.assign({},zk),{closeBorderRadius:h,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:t,iconColorInfo:i,iconColorSuccess:s,iconColorWarning:l,iconColorError:a,iconColorLoading:d,closeColorHover:p,closeColorPressed:b,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:n,closeColorHoverInfo:p,closeColorPressedInfo:b,closeIconColorInfo:r,closeIconColorHoverInfo:o,closeIconColorPressedInfo:n,closeColorHoverSuccess:p,closeColorPressedSuccess:b,closeIconColorSuccess:r,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:n,closeColorHoverError:p,closeColorPressedError:b,closeIconColorError:r,closeIconColorHoverError:o,closeIconColorPressedError:n,closeColorHoverWarning:p,closeColorPressedWarning:b,closeIconColorWarning:r,closeIconColorHoverWarning:o,closeIconColorPressedWarning:n,closeColorHoverLoading:p,closeColorPressedLoading:b,closeIconColorLoading:r,closeIconColorHoverLoading:o,closeIconColorPressedLoading:n,loadingColor:d,lineHeight:f,borderRadius:h})},Fk={name:"Message",common:ie,self:i1},s1=Fk,Nk={name:"Message",common:ne,self:i1},jk=Nk,Wk={name:"ButtonGroup",common:ne},Uk=Wk,Vk={name:"ButtonGroup",common:ie},Kk=Vk,qk={name:"InputNumber",common:ne,peers:{Button:Yt,Input:gr},self(e){const{textColorDisabled:t}=e;return{iconColorDisabled:t}}},Gk=qk,Xk=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},Yk={name:"InputNumber",common:ie,peers:{Button:Nt,Input:mr},self:Xk},Zk=Yk,Jk={name:"Layout",common:ne,peers:{Scrollbar:Xt},self(e){const{textColor2:t,bodyColor:r,popoverColor:o,cardColor:n,dividerColor:i,scrollbarColor:s,scrollbarColorHover:a}=e;return{textColor:t,textColorInverted:t,color:r,colorEmbedded:r,headerColor:n,headerColorInverted:n,footerColor:n,footerColorInverted:n,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:n,siderColorInverted:n,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:he(r,s),siderToggleBarColorHover:he(r,a),__invertScrollbar:"false"}}},Qk=Jk,eI=e=>{const{baseColor:t,textColor2:r,bodyColor:o,cardColor:n,dividerColor:i,actionColor:s,scrollbarColor:a,scrollbarColorHover:l,invertedColor:c}=e;return{textColor:r,textColorInverted:"#FFF",color:o,colorEmbedded:s,headerColor:n,headerColorInverted:c,footerColor:s,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:n,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:he(o,a),siderToggleBarColorHover:he(o,l),__invertScrollbar:"true"}},tI={name:"Layout",common:ie,peers:{Scrollbar:Ft},self:eI},rI=tI,a1=e=>{const{textColor2:t,cardColor:r,modalColor:o,popoverColor:n,dividerColor:i,borderRadius:s,fontSize:a,hoverColor:l}=e;return{textColor:t,color:r,colorHover:l,colorModal:o,colorHoverModal:he(o,l),colorPopover:n,colorHoverPopover:he(n,l),borderColor:i,borderColorModal:he(o,i),borderColorPopover:he(n,i),borderRadius:s,fontSize:a}},oI={name:"List",common:ie,self:a1},nI=oI,iI={name:"List",common:ne,self:a1},sI=iI,aI={name:"LoadingBar",common:ne,self(e){const{primaryColor:t}=e;return{colorError:"red",colorLoading:t,height:"2px"}}},lI=aI,cI=e=>{const{primaryColor:t,errorColor:r}=e;return{colorError:r,colorLoading:t,height:"2px"}},uI={name:"LoadingBar",common:ie,self:cI},l1=uI,dI={name:"Log",common:ne,peers:{Scrollbar:Xt,Code:pv},self(e){const{textColor2:t,inputColor:r,fontSize:o,primaryColor:n}=e;return{loaderFontSize:o,loaderTextColor:t,loaderColor:r,loaderBorder:"1px solid #0000",loadingColor:n}}},fI=dI,hI=e=>{const{textColor2:t,modalColor:r,borderColor:o,fontSize:n,primaryColor:i}=e;return{loaderFontSize:n,loaderTextColor:t,loaderColor:r,loaderBorder:`1px solid ${o}`,loadingColor:i}},pI={name:"Log",common:ie,peers:{Scrollbar:Ft,Code:gv},self:hI},gI=pI,mI={name:"Mention",common:ne,peers:{InternalSelectMenu:ta,Input:gr},self(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}},bI=mI,vI=e=>{const{boxShadow2:t}=e;return{menuBoxShadow:t}},yI={name:"Mention",common:ie,peers:{InternalSelectMenu:ea,Input:mr},self:vI},xI=yI;function CI(e,t,r,o){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:r,itemTextColorChildActiveInverted:r,itemTextColorChildActiveHoverInverted:r,itemTextColorActiveInverted:r,itemTextColorActiveHoverInverted:r,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:r,itemTextColorChildActiveHorizontalInverted:r,itemTextColorChildActiveHoverHorizontalInverted:r,itemTextColorActiveHorizontalInverted:r,itemTextColorActiveHoverHorizontalInverted:r,itemIconColorInverted:e,itemIconColorHoverInverted:r,itemIconColorActiveInverted:r,itemIconColorActiveHoverInverted:r,itemIconColorChildActiveInverted:r,itemIconColorChildActiveHoverInverted:r,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:r,itemIconColorActiveHorizontalInverted:r,itemIconColorActiveHoverHorizontalInverted:r,itemIconColorChildActiveHorizontalInverted:r,itemIconColorChildActiveHoverHorizontalInverted:r,arrowColorInverted:e,arrowColorHoverInverted:r,arrowColorActiveInverted:r,arrowColorActiveHoverInverted:r,arrowColorChildActiveInverted:r,arrowColorChildActiveHoverInverted:r,groupTextColorInverted:o}}const c1=e=>{const{borderRadius:t,textColor3:r,primaryColor:o,textColor2:n,textColor1:i,fontSize:s,dividerColor:a,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:r,itemColorHover:l,itemColorActive:G(o,{alpha:.1}),itemColorActiveHover:G(o,{alpha:.1}),itemColorActiveCollapsed:G(o,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:o,itemTextColorActiveHover:o,itemTextColorChildActive:o,itemTextColorChildActiveHover:o,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:o,itemTextColorActiveHoverHorizontal:o,itemTextColorChildActiveHorizontal:o,itemTextColorChildActiveHoverHorizontal:o,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:o,itemIconColorActiveHover:o,itemIconColorChildActive:o,itemIconColorChildActiveHover:o,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:o,itemIconColorActiveHoverHorizontal:o,itemIconColorChildActiveHorizontal:o,itemIconColorChildActiveHoverHorizontal:o,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:o,arrowColorActiveHover:o,arrowColorChildActive:o,arrowColorChildActiveHover:o,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:a},CI("#BBB",o,"#FFF","#AAA"))},wI={name:"Menu",common:ie,peers:{Tooltip:ra,Dropdown:Vd},self:c1},SI=wI,EI={name:"Menu",common:ne,peers:{Tooltip:Ql,Dropdown:Kd},self(e){const{primaryColor:t,primaryColorSuppl:r}=e,o=c1(e);return o.itemColorActive=G(t,{alpha:.15}),o.itemColorActiveHover=G(t,{alpha:.15}),o.itemColorActiveCollapsed=G(t,{alpha:.15}),o.itemColorActiveInverted=r,o.itemColorActiveHoverInverted=r,o.itemColorActiveCollapsedInverted=r,o}},_I=EI,TI={titleFontSize:"18px",backSize:"22px"};function u1(e){const{textColor1:t,textColor2:r,textColor3:o,fontSize:n,fontWeightStrong:i,primaryColorHover:s,primaryColorPressed:a}=e;return Object.assign(Object.assign({},TI),{titleFontWeight:i,fontSize:n,titleTextColor:t,backColor:r,backColorHover:s,backColorPressed:a,subtitleTextColor:o})}const $I={name:"PageHeader",common:ie,self:u1},PI={name:"PageHeader",common:ne,self:u1},LI={iconSize:"22px"},d1=e=>{const{fontSize:t,warningColor:r}=e;return Object.assign(Object.assign({},LI),{fontSize:t,iconColor:r})},kI={name:"Popconfirm",common:ie,peers:{Button:Nt,Popover:Go},self:d1},II=kI,RI={name:"Popconfirm",common:ne,peers:{Button:Yt,Popover:Hn},self:d1},OI=RI,f1=e=>{const{infoColor:t,successColor:r,warningColor:o,errorColor:n,textColor2:i,progressRailColor:s,fontSize:a,fontWeight:l}=e;return{fontSize:a,fontSizeCircle:"28px",fontWeightCircle:l,railColor:s,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:r,iconColorWarning:o,iconColorError:n,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:t,fillColorInfo:t,fillColorSuccess:r,fillColorWarning:o,fillColorError:n,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},AI={name:"Progress",common:ie,self:f1},Yd=AI,MI={name:"Progress",common:ne,self(e){const t=f1(e);return t.textColorLineInner="rgb(0, 0, 0)",t.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",t}},h1=MI,BI={name:"Rate",common:ne,self(e){const{railColor:t}=e;return{itemColor:t,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},HI=BI,DI=e=>{const{railColor:t}=e;return{itemColor:t,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},zI={name:"Rate",common:ie,self:DI},FI=zI,NI={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},p1=e=>{const{textColor2:t,textColor1:r,errorColor:o,successColor:n,infoColor:i,warningColor:s,lineHeight:a,fontWeightStrong:l}=e;return Object.assign(Object.assign({},NI),{lineHeight:a,titleFontWeight:l,titleTextColor:r,textColor:t,iconColorError:o,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:s})},jI={name:"Result",common:ie,self:p1},WI=jI,UI={name:"Result",common:ne,self:p1},VI=UI,g1={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},KI={name:"Slider",common:ne,self(e){const t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:r,modalColor:o,primaryColorSuppl:n,popoverColor:i,textColor2:s,cardColor:a,borderRadius:l,fontSize:c,opacityDisabled:u}=e;return Object.assign(Object.assign({},g1),{fontSize:c,markFontSize:c,railColor:r,railColorHover:r,fillColor:n,fillColorHover:n,opacityDisabled:u,handleColor:"#FFF",dotColor:a,dotColorModal:o,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:t,indicatorTextColor:s,indicatorBorderRadius:l,dotBorder:`2px solid ${r}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:""})}},qI=KI,GI=e=>{const t="rgba(0, 0, 0, .85)",r="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:n,baseColor:i,cardColor:s,modalColor:a,popoverColor:l,borderRadius:c,fontSize:u,opacityDisabled:d}=e;return Object.assign(Object.assign({},g1),{fontSize:u,markFontSize:u,railColor:o,railColorHover:o,fillColor:n,fillColorHover:n,opacityDisabled:d,handleColor:"#FFF",dotColor:s,dotColorModal:a,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:t,indicatorBoxShadow:r,indicatorTextColor:i,indicatorBorderRadius:c,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:""})},XI={name:"Slider",common:ie,self:GI},YI=XI,m1=e=>{const{opacityDisabled:t,heightTiny:r,heightSmall:o,heightMedium:n,heightLarge:i,heightHuge:s,primaryColor:a,fontSize:l}=e;return{fontSize:l,textColor:a,sizeTiny:r,sizeSmall:o,sizeMedium:n,sizeLarge:i,sizeHuge:s,color:a,opacitySpinning:t}},ZI={name:"Spin",common:ie,self:m1},JI=ZI,QI={name:"Spin",common:ne,self:m1},eR=QI,b1=e=>{const{textColor2:t,textColor3:r,fontSize:o,fontWeight:n}=e;return{labelFontSize:o,labelFontWeight:n,valueFontWeight:n,valueFontSize:"24px",labelTextColor:r,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}},tR={name:"Statistic",common:ie,self:b1},rR=tR,oR={name:"Statistic",common:ne,self:b1},nR=oR,iR={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},v1=e=>{const{fontWeightStrong:t,baseColor:r,textColorDisabled:o,primaryColor:n,errorColor:i,textColor1:s,textColor2:a}=e;return Object.assign(Object.assign({},iR),{stepHeaderFontWeight:t,indicatorTextColorProcess:r,indicatorTextColorWait:o,indicatorTextColorFinish:n,indicatorTextColorError:i,indicatorBorderColorProcess:n,indicatorBorderColorWait:o,indicatorBorderColorFinish:n,indicatorBorderColorError:i,indicatorColorProcess:n,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:n,splitorColorError:o,headerTextColorProcess:s,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:i,descriptionTextColorProcess:a,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:i})},sR={name:"Steps",common:ie,self:v1},aR=sR,lR={name:"Steps",common:ne,self:v1},cR=lR,y1={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},uR={name:"Switch",common:ne,self(e){const{primaryColorSuppl:t,opacityDisabled:r,borderRadius:o,primaryColor:n,textColor2:i,baseColor:s}=e,a="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},y1),{iconColor:s,textColor:i,loadingColor:t,opacityDisabled:r,railColor:a,railColorActive:t,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${G(n,{alpha:.3})}`})}},dR=uR,fR=e=>{const{primaryColor:t,opacityDisabled:r,borderRadius:o,textColor3:n}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},y1),{iconColor:n,textColor:"white",loadingColor:t,opacityDisabled:r,railColor:i,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${G(t,{alpha:.2})}`})},hR={name:"Switch",common:ie,self:fR},pR=hR,gR={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},x1=e=>{const{dividerColor:t,cardColor:r,modalColor:o,popoverColor:n,tableHeaderColor:i,tableColorStriped:s,textColor1:a,textColor2:l,borderRadius:c,fontWeightStrong:u,lineHeight:d,fontSizeSmall:f,fontSizeMedium:h,fontSizeLarge:p}=e;return Object.assign(Object.assign({},gR),{fontSizeSmall:f,fontSizeMedium:h,fontSizeLarge:p,lineHeight:d,borderRadius:c,borderColor:he(r,t),borderColorModal:he(o,t),borderColorPopover:he(n,t),tdColor:r,tdColorModal:o,tdColorPopover:n,tdColorStriped:he(r,s),tdColorStripedModal:he(o,s),tdColorStripedPopover:he(n,s),thColor:he(r,i),thColorModal:he(o,i),thColorPopover:he(n,i),thTextColor:a,tdTextColor:l,thFontWeight:u})},mR={name:"Table",common:ie,self:x1},bR=mR,vR={name:"Table",common:ne,self:x1},yR=vR,xR={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},C1=e=>{const{textColor2:t,primaryColor:r,textColorDisabled:o,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,tabColor:c,baseColor:u,dividerColor:d,fontWeight:f,textColor1:h,borderRadius:p,fontSize:b,fontWeightStrong:y}=e;return Object.assign(Object.assign({},xR),{colorSegment:c,tabFontSizeCard:b,tabTextColorLine:h,tabTextColorActiveLine:r,tabTextColorHoverLine:r,tabTextColorDisabledLine:o,tabTextColorSegment:h,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:o,tabTextColorBar:h,tabTextColorActiveBar:r,tabTextColorHoverBar:r,tabTextColorDisabledBar:o,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:r,tabTextColorDisabledCard:o,barColor:r,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,closeBorderRadius:p,tabColor:c,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:p,paneTextColor:t,fontWeightStrong:y})},CR={name:"Tabs",common:ie,self:C1},wR=CR,SR={name:"Tabs",common:ne,self(e){const t=C1(e),{inputColor:r}=e;return t.colorSegment=r,t.tabColorSegment=r,t}},ER=SR,w1=e=>{const{textColor1:t,textColor2:r,fontWeightStrong:o,fontSize:n}=e;return{fontSize:n,titleTextColor:t,textColor:r,titleFontWeight:o}},_R={name:"Thing",common:ie,self:w1},TR=_R,$R={name:"Thing",common:ne,self:w1},PR=$R,S1={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},LR={name:"Timeline",common:ne,self(e){const{textColor3:t,infoColorSuppl:r,errorColorSuppl:o,successColorSuppl:n,warningColorSuppl:i,textColor1:s,textColor2:a,railColor:l,fontWeightStrong:c,fontSize:u}=e;return Object.assign(Object.assign({},S1),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:r,iconColorError:o,iconColorSuccess:n,iconColorWarning:i,titleTextColor:s,contentTextColor:a,metaTextColor:t,lineColor:l})}},kR=LR,IR=e=>{const{textColor3:t,infoColor:r,errorColor:o,successColor:n,warningColor:i,textColor1:s,textColor2:a,railColor:l,fontWeightStrong:c,fontSize:u}=e;return Object.assign(Object.assign({},S1),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:r,iconColorError:o,iconColorSuccess:n,iconColorWarning:i,titleTextColor:s,contentTextColor:a,metaTextColor:t,lineColor:l})},RR={name:"Timeline",common:ie,self:IR},OR=RR,E1={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},AR={name:"Transfer",common:ne,peers:{Checkbox:Bi,Scrollbar:Xt,Input:gr,Empty:Bn,Button:Yt},self(e){const{fontWeight:t,fontSizeLarge:r,fontSizeMedium:o,fontSizeSmall:n,heightLarge:i,heightMedium:s,borderRadius:a,inputColor:l,tableHeaderColor:c,textColor1:u,textColorDisabled:d,textColor2:f,textColor3:h,hoverColor:p,closeColorHover:b,closeColorPressed:y,closeIconColor:g,closeIconColorHover:w,closeIconColorPressed:T,dividerColor:x}=e;return Object.assign(Object.assign({},E1),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:i,fontSizeSmall:n,fontSizeMedium:o,fontSizeLarge:r,borderRadius:a,dividerColor:x,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:u,titleTextColorDisabled:d,extraTextColor:h,extraTextColorDisabled:d,itemTextColor:f,itemTextColorDisabled:d,itemColorPending:p,titleFontWeight:t,closeColorHover:b,closeColorPressed:y,closeIconColor:g,closeIconColorHover:w,closeIconColorPressed:T})}},MR=AR,BR=e=>{const{fontWeight:t,fontSizeLarge:r,fontSizeMedium:o,fontSizeSmall:n,heightLarge:i,heightMedium:s,borderRadius:a,cardColor:l,tableHeaderColor:c,textColor1:u,textColorDisabled:d,textColor2:f,textColor3:h,borderColor:p,hoverColor:b,closeColorHover:y,closeColorPressed:g,closeIconColor:w,closeIconColorHover:T,closeIconColorPressed:x}=e;return Object.assign(Object.assign({},E1),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:i,fontSizeSmall:n,fontSizeMedium:o,fontSizeLarge:r,borderRadius:a,dividerColor:p,borderColor:p,listColor:l,headerColor:he(l,c),titleTextColor:u,titleTextColorDisabled:d,extraTextColor:h,extraTextColorDisabled:d,itemTextColor:f,itemTextColorDisabled:d,itemColorPending:b,titleFontWeight:t,closeColorHover:y,closeColorPressed:g,closeIconColor:w,closeIconColorHover:T,closeIconColorPressed:x})},HR={name:"Transfer",common:ie,peers:{Checkbox:Mi,Scrollbar:Ft,Input:mr,Empty:lo,Button:Nt},self:BR},DR=HR,_1=e=>{const{borderRadiusSmall:t,hoverColor:r,pressedColor:o,primaryColor:n,textColor3:i,textColor2:s,textColorDisabled:a,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:t,nodeColorHover:r,nodeColorPressed:o,nodeColorActive:G(n,{alpha:.1}),arrowColor:i,nodeTextColor:s,nodeTextColorDisabled:a,loadingColor:n,dropMarkColor:n}},zR={name:"Tree",common:ie,peers:{Checkbox:Mi,Scrollbar:Ft,Empty:lo},self:_1},T1=zR,FR={name:"Tree",common:ne,peers:{Checkbox:Bi,Scrollbar:Xt,Empty:Bn},self(e){const{primaryColor:t}=e,r=_1(e);return r.nodeColorActive=G(t,{alpha:.15}),r}},$1=FR,NR={name:"TreeSelect",common:ne,peers:{Tree:$1,Empty:Bn,InternalSelection:jd}},jR=NR,WR=e=>{const{popoverColor:t,boxShadow2:r,borderRadius:o,heightMedium:n,dividerColor:i,textColor2:s}=e;return{menuPadding:"4px",menuColor:t,menuBoxShadow:r,menuBorderRadius:o,menuHeight:`calc(${n} * 7.6)`,actionDividerColor:i,actionTextColor:s,actionPadding:"8px 12px"}},UR={name:"TreeSelect",common:ie,peers:{Tree:T1,Empty:lo,InternalSelection:Nd},self:WR},VR=UR,KR={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},P1=e=>{const{primaryColor:t,textColor2:r,borderColor:o,lineHeight:n,fontSize:i,borderRadiusSmall:s,dividerColor:a,fontWeightStrong:l,textColor1:c,textColor3:u,infoColor:d,warningColor:f,errorColor:h,successColor:p,codeColor:b}=e;return Object.assign(Object.assign({},KR),{aTextColor:t,blockquoteTextColor:r,blockquotePrefixColor:o,blockquoteLineHeight:n,blockquoteFontSize:i,codeBorderRadius:s,liTextColor:r,liLineHeight:n,liFontSize:i,hrColor:a,headerFontWeight:l,headerTextColor:c,pTextColor:r,pTextColor1Depth:c,pTextColor2Depth:r,pTextColor3Depth:u,pLineHeight:n,pFontSize:i,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:d,headerBarColorError:h,headerBarColorWarning:f,headerBarColorSuccess:p,textColor:r,textColor1Depth:c,textColor2Depth:r,textColor3Depth:u,textColorPrimary:t,textColorInfo:d,textColorSuccess:p,textColorWarning:f,textColorError:h,codeTextColor:r,codeColor:b,codeBorder:"1px solid #0000"})},qR={name:"Typography",common:ie,self:P1},GR=qR,XR={name:"Typography",common:ne,self:P1},YR=XR,L1=e=>{const{iconColor:t,primaryColor:r,errorColor:o,textColor2:n,successColor:i,opacityDisabled:s,actionColor:a,borderColor:l,hoverColor:c,lineHeight:u,borderRadius:d,fontSize:f}=e;return{fontSize:f,lineHeight:u,borderRadius:d,draggerColor:a,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${r}`,itemColorHover:c,itemColorHoverError:G(o,{alpha:.06}),itemTextColor:n,itemTextColorError:o,itemTextColorSuccess:i,itemIconColor:t,itemDisabledOpacity:s,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${l}`}},ZR={name:"Upload",common:ie,peers:{Button:Nt,Progress:Yd},self:L1},k1=ZR,JR={name:"Upload",common:ne,peers:{Button:Yt,Progress:h1},self(e){const{errorColor:t}=e,r=L1(e);return r.itemColorHoverError=G(t,{alpha:.09}),r}},QR=JR,eO={name:"Watermark",common:ne,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},tO=eO,rO={name:"Watermark",common:ie,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},oO=rO,nO={name:"Row",common:ie},iO=nO,sO={name:"Row",common:ne},aO=sO,lO={name:"Image",common:ne,peers:{Tooltip:Ql},self:e=>{const{textColor2:t}=e;return{toolbarIconColor:t,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},cO=E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),uO=E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),dO=E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),fO=z([z("body >",[j("image-container","position: fixed;")]),j("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),j("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[zs()]),j("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[j("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),zs()]),j("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[jb()]),j("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),j("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[Cn("preview-disabled",`
 cursor: pointer;
 `),z("img",`
 border-radius: inherit;
 `)])]),ka=32,I1=be({name:"ImagePreview",props:Object.assign(Object.assign({},Xd),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const t=Xe("Image","-image",fO,r1,e,Me(e,"clsPrefix"));let r=null;const o=V(null),n=V(null),i=V(void 0),s=V(!1),a=V(!1),{localeRef:l}=t6("Image");function c(){const{value:_}=n;if(!r||!_)return;const{style:m}=_,v=r.getBoundingClientRect(),P=v.left+v.width/2,I=v.top+v.height/2;m.transformOrigin=`${P}px ${I}px`}function u(_){var m,v;switch(_.key){case" ":_.preventDefault();break;case"ArrowLeft":(m=e.onPrev)===null||m===void 0||m.call(e);break;case"ArrowRight":(v=e.onNext)===null||v===void 0||v.call(e);break;case"Escape":N();break}}et(s,_=>{_?mt("keydown",document,u):tt("keydown",document,u)}),xt(()=>{tt("keydown",document,u)});let d=0,f=0,h=0,p=0,b=0,y=0,g=0,w=0,T=!1;function x(_){const{clientX:m,clientY:v}=_;h=m-d,p=v-f,f0(Ue)}function C(_){const{mouseUpClientX:m,mouseUpClientY:v,mouseDownClientX:P,mouseDownClientY:I}=_,M=P-m,U=I-v,X=`vertical${U>0?"Top":"Bottom"}`,W=`horizontal${M>0?"Left":"Right"}`;return{moveVerticalDirection:X,moveHorizontalDirection:W,deltaHorizontal:M,deltaVertical:U}}function $(_){const{value:m}=o;if(!m)return{offsetX:0,offsetY:0};const v=m.getBoundingClientRect(),{moveVerticalDirection:P,moveHorizontalDirection:I,deltaHorizontal:M,deltaVertical:U}=_||{};let X=0,W=0;return v.width<=window.innerWidth?X=0:v.left>0?X=(v.width-window.innerWidth)/2:v.right<window.innerWidth?X=-(v.width-window.innerWidth)/2:I==="horizontalRight"?X=Math.min((v.width-window.innerWidth)/2,b-(M!=null?M:0)):X=Math.max(-((v.width-window.innerWidth)/2),b-(M!=null?M:0)),v.height<=window.innerHeight?W=0:v.top>0?W=(v.height-window.innerHeight)/2:v.bottom<window.innerHeight?W=-(v.height-window.innerHeight)/2:P==="verticalBottom"?W=Math.min((v.height-window.innerHeight)/2,y-(U!=null?U:0)):W=Math.max(-((v.height-window.innerHeight)/2),y-(U!=null?U:0)),{offsetX:X,offsetY:W}}function S(_){tt("mousemove",document,x),tt("mouseup",document,S);const{clientX:m,clientY:v}=_;T=!1;const P=C({mouseUpClientX:m,mouseUpClientY:v,mouseDownClientX:g,mouseDownClientY:w}),I=$(P);h=I.offsetX,p=I.offsetY,Ue()}const L=Se(t1,null);function k(_){var m,v;if((v=(m=L==null?void 0:L.previewedImgPropsRef.value)===null||m===void 0?void 0:m.onMousedown)===null||v===void 0||v.call(m,_),_.button!==0)return;const{clientX:P,clientY:I}=_;T=!0,d=P-h,f=I-p,b=h,y=p,g=P,w=I,Ue(),mt("mousemove",document,x),mt("mouseup",document,S)}function R(_){var m,v;(v=(m=L==null?void 0:L.previewedImgPropsRef.value)===null||m===void 0?void 0:m.onDblclick)===null||v===void 0||v.call(m,_);const P=_e();q=q===P?1:P,Ue()}const H=1.5;let A=0,q=1,F=0;function ee(){q=1,A=0}function Y(){var _;ee(),F=0,(_=e.onPrev)===null||_===void 0||_.call(e)}function Z(){var _;ee(),F=0,(_=e.onNext)===null||_===void 0||_.call(e)}function se(){F-=90,Ue()}function ve(){F+=90,Ue()}function Le(){const{value:_}=o;if(!_)return 1;const{innerWidth:m,innerHeight:v}=window,P=Math.max(1,_.naturalHeight/(v-ka)),I=Math.max(1,_.naturalWidth/(m-ka));return Math.max(3,P*2,I*2)}function _e(){const{value:_}=o;if(!_)return 1;const{innerWidth:m,innerHeight:v}=window,P=_.naturalHeight/(v-ka),I=_.naturalWidth/(m-ka);return P<1&&I<1?1:Math.max(P,I)}function Ae(){const _=Le();q<_&&(A+=1,q=Math.min(_,Math.pow(H,A)),Ue())}function ut(){if(q>.5){const _=q;A-=1,q=Math.max(.5,Math.pow(H,A));const m=_-q;Ue(!1);const v=$();q+=m,Ue(!1),q-=m,h=v.offsetX,p=v.offsetY,Ue()}}function Ue(_=!0){var m;const{value:v}=o;if(!v)return;const{style:P}=v,I=Pi((m=L==null?void 0:L.previewedImgPropsRef.value)===null||m===void 0?void 0:m.style);let M="";if(typeof I=="string")M=I+";";else for(const X in I)M+=`${a4(X)}: ${I[X]};`;const U=`transform-origin: center; transform: translateX(${h}px) translateY(${p}px) rotate(${F}deg) scale(${q});`;T?P.cssText=M+"cursor: grabbing; transition: none;"+U:P.cssText=M+"cursor: grab;"+U+(_?"":"transition: none;"),_||v.offsetHeight}function N(){s.value=!s.value,a.value=!0}function J(){q=_e(),A=Math.ceil(Math.log(q)/Math.log(H)),h=0,p=0,Ue()}const te={setPreviewSrc:_=>{i.value=_},setThumbnailEl:_=>{r=_},toggleShow:N};function de(_,m){if(e.showToolbarTooltip){const{value:v}=t;return E(h8,{to:!1,theme:v.peers.Tooltip,themeOverrides:v.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>l.value[m],trigger:()=>_})}else return _}const ae=K(()=>{const{common:{cubicBezierEaseInOut:_},self:{toolbarIconColor:m,toolbarBorderRadius:v,toolbarBoxShadow:P,toolbarColor:I}}=t.value;return{"--n-bezier":_,"--n-toolbar-icon-color":m,"--n-toolbar-color":I,"--n-toolbar-border-radius":v,"--n-toolbar-box-shadow":P}}),{inlineThemeDisabled:Te}=Pt(),me=Te?pr("image-preview",void 0,ae,e):void 0;return Object.assign({previewRef:o,previewWrapperRef:n,previewSrc:i,show:s,appear:Oi(),displayed:a,previewedImgProps:L==null?void 0:L.previewedImgPropsRef,handleWheel(_){_.preventDefault()},handlePreviewMousedown:k,handlePreviewDblclick:R,syncTransformOrigin:c,handleAfterLeave:()=>{ee(),F=0,a.value=!1},handleDragStart:_=>{var m,v;(v=(m=L==null?void 0:L.previewedImgPropsRef.value)===null||m===void 0?void 0:m.onDragstart)===null||v===void 0||v.call(m,_),_.preventDefault()},zoomIn:Ae,zoomOut:ut,rotateCounterclockwise:se,rotateClockwise:ve,handleSwitchPrev:Y,handleSwitchNext:Z,withTooltip:de,resizeToOrignalImageSize:J,cssVars:Te?void 0:ae,themeClass:me==null?void 0:me.themeClass,onRender:me==null?void 0:me.onRender},te)},render(){var e,t;const{clsPrefix:r}=this;return E(Qe,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),E(Td,{show:this.show},{default:()=>{var o;return this.show||this.displayed?((o=this.onRender)===null||o===void 0||o.call(this),Dr(E("div",{class:[`${r}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},E(Kt,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?E("div",{class:`${r}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?E(Kt,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:n}=this;return E("div",{class:`${r}-image-preview-toolbar`},this.onPrev?E(Qe,null,n(E(dt,{clsPrefix:r,onClick:this.handleSwitchPrev},{default:()=>cO}),"tipPrevious"),n(E(dt,{clsPrefix:r,onClick:this.handleSwitchNext},{default:()=>uO}),"tipNext")):null,n(E(dt,{clsPrefix:r,onClick:this.rotateCounterclockwise},{default:()=>E(d6,null)}),"tipCounterclockwise"),n(E(dt,{clsPrefix:r,onClick:this.rotateClockwise},{default:()=>E(u6,null)}),"tipClockwise"),n(E(dt,{clsPrefix:r,onClick:this.resizeToOrignalImageSize},{default:()=>E(p6,null)}),"tipOriginalSize"),n(E(dt,{clsPrefix:r,onClick:this.zoomOut},{default:()=>E(h6,null)}),"tipZoomOut"),n(E(dt,{clsPrefix:r,onClick:this.zoomIn},{default:()=>E(f6,null)}),"tipZoomIn"),n(E(dt,{clsPrefix:r,onClick:this.toggleShow},{default:()=>dO}),"tipClose"))}}):null,E(Kt,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:n={}}=this;return Dr(E("div",{class:`${r}-image-preview-wrapper`,ref:"previewWrapperRef"},E("img",Object.assign({},n,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${r}-image-preview`,n.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[Ls,this.show]])}})),[[Ul,{enabled:this.show}]])):null}}))}}),R1="n-image-group",hO=Xd,pO=be({name:"ImageGroup",props:hO,setup(e){let t;const{mergedClsPrefixRef:r}=Pt(e),o=`c${Tn()}`,n=fr(),i=l=>{var c;t=l,(c=a.value)===null||c===void 0||c.setPreviewSrc(l)};function s(l){if(!(n!=null&&n.proxy))return;const u=n.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${o}]:not([data-error=true])`);if(!u.length)return;const d=Array.from(u).findIndex(f=>f.dataset.previewSrc===t);~d?i(u[(d+l+u.length)%u.length].dataset.previewSrc):i(u[0].dataset.previewSrc)}qe(R1,{mergedClsPrefixRef:r,setPreviewSrc:i,setThumbnailEl:l=>{var c;(c=a.value)===null||c===void 0||c.setThumbnailEl(l)},toggleShow:()=>{var l;(l=a.value)===null||l===void 0||l.toggleShow()},groupId:o});const a=V(null);return{mergedClsPrefix:r,previewInstRef:a,next:()=>s(1),prev:()=>s(-1)}},render(){return E(I1,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}}),gO=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},Xd),mO=be({name:"Image",props:gO,inheritAttrs:!1,setup(e){const t=V(null),r=V(!1),o=V(null),n=Se(R1,null),{mergedClsPrefixRef:i}=n||Pt(e),s={click:()=>{if(e.previewDisabled||r.value)return;const c=e.previewSrc||e.src;if(n){n.setPreviewSrc(c),n.setThumbnailEl(t.value),n.toggleShow();return}const{value:u}=o;!u||(u.setPreviewSrc(c),u.setThumbnailEl(t.value),u.toggleShow())}},a=V(!e.lazy);$t(()=>{var c;(c=t.value)===null||c===void 0||c.setAttribute("data-group-id",(n==null?void 0:n.groupId)||"")}),$t(()=>{if(Ac)return;let c;const u=wr(()=>{c==null||c(),c=void 0,e.lazy&&(c=$P(t.value,e.intersectionObserverOptions,a))});xt(()=>{u(),c==null||c()})}),wr(()=>{var c;e.src,(c=e.imgProps)===null||c===void 0||c.src,r.value=!1});const l=V(!1);return qe(t1,{previewedImgPropsRef:Me(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:i,groupId:n==null?void 0:n.groupId,previewInstRef:o,imageRef:t,showError:r,shouldStartLoading:a,loaded:l,mergedOnClick:c=>{var u,d;s.click(),(d=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||d===void 0||d.call(u,c)},mergedOnError:c=>{if(!a.value)return;r.value=!0;const{onError:u,imgProps:{onError:d}={}}=e;u==null||u(c),d==null||d(c)},mergedOnLoad:c=>{const{onLoad:u,imgProps:{onLoad:d}={}}=e;u==null||u(c),d==null||d(c),l.value=!0}},s)},render(){var e,t;const{mergedClsPrefix:r,imgProps:o={},loaded:n,$attrs:i,lazy:s}=this,a=(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e),l=this.src||o.src||"",c=E("img",Object.assign(Object.assign({},o),{ref:"imageRef",width:this.width||o.width,height:this.height||o.height,src:Ac?l:this.showError?this.fallbackSrc:this.shouldStartLoading?l:void 0,alt:this.alt||o.alt,"aria-label":this.alt||o.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:Ac&&s&&!this.intersectionObserverOptions?"lazy":"eager",style:[o.style||"",a&&!n?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return E("div",Object.assign({},i,{role:"none",class:[i.class,`${r}-image`,(this.previewDisabled||this.showError)&&`${r}-image--preview-disabled`]}),this.groupId?c:E(I1,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:r,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>c}),!n&&a)}}),O1={extraFontSize:"12px",width:"440px"},bO={name:"Transfer",common:ne,peers:{Checkbox:Bi,Scrollbar:Xt,Input:gr,Empty:Bn,Button:Yt},self(e){const{iconColorDisabled:t,iconColor:r,fontWeight:o,fontSizeLarge:n,fontSizeMedium:i,fontSizeSmall:s,heightLarge:a,heightMedium:l,heightSmall:c,borderRadius:u,inputColor:d,tableHeaderColor:f,textColor1:h,textColorDisabled:p,textColor2:b,hoverColor:y}=e;return Object.assign(Object.assign({},O1),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:a,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:n,borderRadius:u,borderColor:"#0000",listColor:d,headerColor:f,titleTextColor:h,titleTextColorDisabled:p,extraTextColor:b,filterDividerColor:"#0000",itemTextColor:b,itemTextColorDisabled:p,itemColorPending:y,titleFontWeight:o,iconColor:r,iconColorDisabled:t})}},vO=bO,yO=e=>{const{fontWeight:t,iconColorDisabled:r,iconColor:o,fontSizeLarge:n,fontSizeMedium:i,fontSizeSmall:s,heightLarge:a,heightMedium:l,heightSmall:c,borderRadius:u,cardColor:d,tableHeaderColor:f,textColor1:h,textColorDisabled:p,textColor2:b,borderColor:y,hoverColor:g}=e;return Object.assign(Object.assign({},O1),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:a,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:n,borderRadius:u,borderColor:y,listColor:d,headerColor:he(d,f),titleTextColor:h,titleTextColorDisabled:p,extraTextColor:b,filterDividerColor:y,itemTextColor:b,itemTextColorDisabled:p,itemColorPending:g,titleFontWeight:t,iconColor:o,iconColorDisabled:r})},xO={name:"Transfer",common:ie,peers:{Checkbox:Mi,Scrollbar:Ft,Input:mr,Empty:lo,Button:Nt},self:yO},CO=xO,A1="n-loading-bar",M1="n-loading-bar-api",wO=j("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[zs({enterDuration:"0.3s",leaveDuration:"0.8s"}),j("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[re("starting",`
 background: var(--n-color-loading);
 `),re("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),re("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);var Dc=globalThis&&globalThis.__awaiter||function(e,t,r,o){function n(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(o.next(u))}catch(d){s(d)}}function l(u){try{c(o.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):n(u.value).then(a,l)}c((o=o.apply(e,t||[])).next())})};function Ia(e,t){return`${t}-loading-bar ${t}-loading-bar--${e}`}const SO=be({name:"LoadingBar",props:{containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:e}=Pt(),{props:t,mergedClsPrefixRef:r}=Se(A1),o=V(null),n=V(!1),i=V(!1),s=V(!1),a=V(!1);let l=!1;const c=V(!1),u=K(()=>{const{loadingBarStyle:C}=t;return C?C[c.value?"error":"loading"]:""});function d(){return Dc(this,void 0,void 0,function*(){n.value=!1,s.value=!1,l=!1,c.value=!1,a.value=!0,yield Dt(),a.value=!1})}function f(C=0,$=80,S="starting"){return Dc(this,void 0,void 0,function*(){yield d(),s.value=!0,i.value=!0,yield Dt();const L=o.value;!L||(L.style.maxWidth=`${C}%`,L.style.transition="none",L.offsetWidth,L.className=Ia(S,r.value),L.style.transition="",L.style.maxWidth=`${$}%`)})}function h(){if(l||c.value||!s.value)return;l=!0;const C=o.value;!C||(C.className=Ia("finishing",r.value),C.style.maxWidth="100%",C.offsetWidth,s.value=!1)}function p(){if(!(l||c.value))if(!s.value)f(100,100,"error").then(()=>{c.value=!0;const C=o.value;!C||(C.className=Ia("error",r.value),C.offsetWidth,s.value=!1)});else{c.value=!0;const C=o.value;if(!C)return;C.className=Ia("error",r.value),C.style.maxWidth="100%",C.offsetWidth,s.value=!1}}function b(){n.value=!0}function y(){n.value=!1}function g(){return Dc(this,void 0,void 0,function*(){yield d()})}const w=Xe("LoadingBar","-loading-bar",wO,l1,t,r),T=K(()=>{const{self:{height:C,colorError:$,colorLoading:S}}=w.value;return{"--n-height":C,"--n-color-loading":S,"--n-color-error":$}}),x=e?pr("loading-bar",void 0,T,t):void 0;return{mergedClsPrefix:r,loadingBarRef:o,started:i,loading:s,entering:n,transitionDisabled:a,start:f,error:p,finish:h,handleEnter:b,handleAfterEnter:y,handleAfterLeave:g,mergedLoadingBarStyle:u,cssVars:e?void 0:T,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return E(Kt,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Dr(E("div",{class:[`${e}-loading-bar-container`,this.themeClass],style:this.containerStyle},E("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Ls,this.loading||!this.loading&&this.entering]])}})}}),EO=Object.assign(Object.assign({},Xe.props),{to:{type:[String,Object,Boolean],default:void 0},containerStyle:[String,Object],loadingBarStyle:{type:Object}}),_O=be({name:"LoadingBarProvider",props:EO,setup(e){const t=Oi(),r=V(null),o={start(){var i;t.value?(i=r.value)===null||i===void 0||i.start():Dt(()=>{var s;(s=r.value)===null||s===void 0||s.start()})},error(){var i;t.value?(i=r.value)===null||i===void 0||i.error():Dt(()=>{var s;(s=r.value)===null||s===void 0||s.error()})},finish(){var i;t.value?(i=r.value)===null||i===void 0||i.finish():Dt(()=>{var s;(s=r.value)===null||s===void 0||s.finish()})}},{mergedClsPrefixRef:n}=Pt(e);return qe(M1,o),qe(A1,{props:e,mergedClsPrefixRef:n}),Object.assign(o,{loadingBarRef:r})},render(){var e,t;return E(Qe,null,E(Ks,{disabled:this.to===!1,to:this.to||"body"},E(SO,{ref:"loadingBarRef",containerStyle:this.containerStyle})),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function TO(){const e=Se(M1,null);return e===null&&In("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const B1={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},H1="n-message-api",D1="n-message-provider",$O=z([j("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Tu({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),j("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[oe("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),oe("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>re(`${e}-type`,[z("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),z("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Ds()])]),oe("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[z("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),z("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),j("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[re("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),re("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),re("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),re("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),re("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),re("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),PO={info:()=>E(bi,null),success:()=>E(Js,null),warning:()=>E(Qs,null),error:()=>E(Zs,null),default:()=>null},LO=be({name:"Message",props:Object.assign(Object.assign({},B1),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:r}=Pt(e),{props:o,mergedClsPrefixRef:n}=Se(D1),i=Ys("Message",r,n),s=Xe("Message","-message",$O,s1,o,n),a=K(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:u},self:{padding:d,margin:f,maxWidth:h,iconMargin:p,closeMargin:b,closeSize:y,iconSize:g,fontSize:w,lineHeight:T,borderRadius:x,iconColorInfo:C,iconColorSuccess:$,iconColorWarning:S,iconColorError:L,iconColorLoading:k,closeIconSize:R,closeBorderRadius:H,[Ce("textColor",c)]:A,[Ce("boxShadow",c)]:q,[Ce("color",c)]:F,[Ce("closeColorHover",c)]:ee,[Ce("closeColorPressed",c)]:Y,[Ce("closeIconColor",c)]:Z,[Ce("closeIconColorPressed",c)]:se,[Ce("closeIconColorHover",c)]:ve}}=s.value;return{"--n-bezier":u,"--n-margin":f,"--n-padding":d,"--n-max-width":h,"--n-font-size":w,"--n-icon-margin":p,"--n-icon-size":g,"--n-close-icon-size":R,"--n-close-border-radius":H,"--n-close-size":y,"--n-close-margin":b,"--n-text-color":A,"--n-color":F,"--n-box-shadow":q,"--n-icon-color-info":C,"--n-icon-color-success":$,"--n-icon-color-warning":S,"--n-icon-color-error":L,"--n-icon-color-loading":k,"--n-close-color-hover":ee,"--n-close-color-pressed":Y,"--n-close-icon-color":Z,"--n-close-icon-color-pressed":se,"--n-close-icon-color-hover":ve,"--n-line-height":T,"--n-border-radius":x}}),l=t?pr("message",K(()=>e.type[0]),a,{}):void 0;return{mergedClsPrefix:n,rtlEnabled:i,messageProviderProps:o,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:o.placement}},render(){const{render:e,type:t,closable:r,content:o,mergedClsPrefix:n,cssVars:i,themeClass:s,onRender:a,icon:l,handleClose:c,showIcon:u}=this;a==null||a();let d;return E("div",{class:[`${n}-message-wrapper`,s],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):E("div",{class:[`${n}-message ${n}-message--${t}-type`,this.rtlEnabled&&`${n}-message--rtl`]},(d=kO(l,t,n))&&u?E("div",{class:`${n}-message__icon ${n}-message__icon--${t}-type`},E(Yl,null,{default:()=>d})):null,E("div",{class:`${n}-message__content`},Qt(o)),r?E(Jl,{clsPrefix:n,class:`${n}-message__close`,onClick:c,absolute:!0}):null))}});function kO(e,t,r){if(typeof e=="function")return e();{const o=t==="loading"?E(Ab,{clsPrefix:r,strokeWidth:24,scale:.85}):PO[t]();return o?E(dt,{clsPrefix:r,key:t},{default:()=>o}):null}}const IO=be({name:"MessageEnvironment",props:Object.assign(Object.assign({},B1),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const r=V(!0);$t(()=>{o()});function o(){const{duration:u}=e;u&&(t=window.setTimeout(s,u))}function n(u){u.currentTarget===u.target&&t!==null&&(window.clearTimeout(t),t=null)}function i(u){u.currentTarget===u.target&&o()}function s(){const{onHide:u}=e;r.value=!1,t&&(window.clearTimeout(t),t=null),u&&u()}function a(){const{onClose:u}=e;u&&u(),s()}function l(){const{onAfterLeave:u,onInternalAfterLeave:d,onAfterHide:f,internalKey:h}=e;u&&u(),d&&d(h),f&&f()}function c(){s()}return{show:r,hide:s,handleClose:a,handleAfterLeave:l,handleMouseleave:i,handleMouseenter:n,deactivate:c}},render(){return E(Zl,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?E(LO,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),RO=Object.assign(Object.assign({},Xe.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),OO=be({name:"MessageProvider",props:RO,setup(e){const{mergedClsPrefixRef:t}=Pt(e),r=V([]),o=V({}),n={create(l,c){return i(l,Object.assign({type:"default"},c))},info(l,c){return i(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return i(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return i(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return i(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return i(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:a};qe(D1,{props:e,mergedClsPrefixRef:t}),qe(H1,n);function i(l,c){const u=Tn(),d=qt(Object.assign(Object.assign({},c),{content:l,key:u,destroy:()=>{var h;(h=o.value[u])===null||h===void 0||h.hide()}})),{max:f}=e;return f&&r.value.length>=f&&r.value.shift(),r.value.push(d),d}function s(l){r.value.splice(r.value.findIndex(c=>c.key===l),1),delete o.value[l]}function a(){Object.values(o.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:o,messageList:r,handleAfterLeave:s},n)},render(){var e,t,r;return E(Qe,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?E(Ks,{to:(r=this.to)!==null&&r!==void 0?r:"body"},E("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(o=>E(IO,Object.assign({ref:n=>{n&&(this.messageRefs[o.key]=n)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},Cd(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}});function AO(){const e=Se(H1,null);return e===null&&In("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const tc="n-notification-provider",MO=be({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:r}=Se(tc),o=V(null);return wr(()=>{var n,i;r.value>0?(n=o==null?void 0:o.value)===null||n===void 0||n.classList.add("transitioning"):(i=o==null?void 0:o.value)===null||i===void 0||i.classList.remove("transitioning")}),{selfRef:o,mergedTheme:e,mergedClsPrefix:t,transitioning:r}},render(){const{$slots:e,scrollable:t,mergedClsPrefix:r,mergedTheme:o,placement:n}=this;return E("div",{ref:"selfRef",class:[`${r}-notification-container`,t&&`${r}-notification-container--scrollable`,`${r}-notification-container--${n}`]},t?E(Fb,{theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),BO={info:()=>E(bi,null),success:()=>E(Js,null),warning:()=>E(Qs,null),error:()=>E(Zs,null),default:()=>null},Zd={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},HO=jl(Zd),DO=be({name:"Notification",props:Zd,setup(e){const{mergedClsPrefixRef:t,mergedThemeRef:r,props:o}=Se(tc),{inlineThemeDisabled:n,mergedRtlRef:i}=Pt(),s=Ys("Notification",i,t),a=K(()=>{const{type:c}=e,{self:{color:u,textColor:d,closeIconColor:f,closeIconColorHover:h,closeIconColorPressed:p,headerTextColor:b,descriptionTextColor:y,actionTextColor:g,borderRadius:w,headerFontWeight:T,boxShadow:x,lineHeight:C,fontSize:$,closeMargin:S,closeSize:L,width:k,padding:R,closeIconSize:H,closeBorderRadius:A,closeColorHover:q,closeColorPressed:F,titleFontSize:ee,metaFontSize:Y,descriptionFontSize:Z,[Ce("iconColor",c)]:se},common:{cubicBezierEaseOut:ve,cubicBezierEaseIn:Le,cubicBezierEaseInOut:_e}}=r.value,{left:Ae,right:ut,top:Ue,bottom:N}=h0(R);return{"--n-color":u,"--n-font-size":$,"--n-text-color":d,"--n-description-text-color":y,"--n-action-text-color":g,"--n-title-text-color":b,"--n-title-font-weight":T,"--n-bezier":_e,"--n-bezier-ease-out":ve,"--n-bezier-ease-in":Le,"--n-border-radius":w,"--n-box-shadow":x,"--n-close-border-radius":A,"--n-close-color-hover":q,"--n-close-color-pressed":F,"--n-close-icon-color":f,"--n-close-icon-color-hover":h,"--n-close-icon-color-pressed":p,"--n-line-height":C,"--n-icon-color":se,"--n-close-margin":S,"--n-close-size":L,"--n-close-icon-size":H,"--n-width":k,"--n-padding-left":Ae,"--n-padding-right":ut,"--n-padding-top":Ue,"--n-padding-bottom":N,"--n-title-font-size":ee,"--n-meta-font-size":Y,"--n-description-font-size":Z}}),l=n?pr("notification",K(()=>e.type[0]),a,o):void 0;return{mergedClsPrefix:t,showAvatar:K(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:s,cssVars:n?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),E("div",{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},E("div",{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?E("div",{class:`${t}-notification__avatar`},this.avatar?Qt(this.avatar):this.type!=="default"?E(dt,{clsPrefix:t},{default:()=>BO[this.type]()}):null):null,this.closable?E(Jl,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,E("div",{ref:"bodyRef",class:`${t}-notification-main`},this.title?E("div",{class:`${t}-notification-main__header`},Qt(this.title)):null,this.description?E("div",{class:`${t}-notification-main__description`},Qt(this.description)):null,this.content?E("pre",{class:`${t}-notification-main__content`},Qt(this.content)):null,this.meta||this.action?E("div",{class:`${t}-notification-main-footer`},this.meta?E("div",{class:`${t}-notification-main-footer__meta`},Qt(this.meta)):null,this.action?E("div",{class:`${t}-notification-main-footer__action`},Qt(this.action)):null):null)))}}),zO=Object.assign(Object.assign({},Zd),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),FO=be({name:"NotificationEnvironment",props:Object.assign(Object.assign({},zO),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:t}=Se(tc),r=V(!0);let o=null;function n(){r.value=!1,o&&window.clearTimeout(o)}function i(p){t.value++,Dt(()=>{p.style.height=`${p.offsetHeight}px`,p.style.maxHeight="0",p.style.transition="none",p.offsetHeight,p.style.transition="",p.style.maxHeight=p.style.height})}function s(p){t.value--,p.style.height="",p.style.maxHeight="";const{onAfterEnter:b,onAfterShow:y}=e;b&&b(),y&&y()}function a(p){t.value++,p.style.maxHeight=`${p.offsetHeight}px`,p.style.height=`${p.offsetHeight}px`,p.offsetHeight}function l(p){const{onHide:b}=e;b&&b(),p.style.maxHeight="0",p.offsetHeight}function c(){t.value--;const{onAfterLeave:p,onInternalAfterLeave:b,onAfterHide:y,internalKey:g}=e;p&&p(),b(g),y&&y()}function u(){const{duration:p}=e;p&&(o=window.setTimeout(n,p))}function d(p){p.currentTarget===p.target&&o!==null&&(window.clearTimeout(o),o=null)}function f(p){p.currentTarget===p.target&&u()}function h(){const{onClose:p}=e;p?Promise.resolve(p()).then(b=>{b!==!1&&n()}):n()}return $t(()=>{e.duration&&(o=window.setTimeout(n,e.duration))}),{show:r,hide:n,handleClose:h,handleAfterLeave:c,handleLeave:l,handleBeforeLeave:a,handleAfterEnter:s,handleBeforeEnter:i,handleMouseenter:d,handleMouseleave:f}},render(){return E(Kt,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?E(DO,Object.assign({},gi(this.$props,HO),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),NO=z([j("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[z(">",[j("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[z(">",[j("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[j("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),re("top, top-right, top-left",`
 top: 12px;
 `,[z("&.transitioning >",[j("scrollbar",[z(">",[j("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),re("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[z(">",[j("scrollbar",[z(">",[j("scrollbar-container",[j("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),j("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),re("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[j("notification-wrapper",[z("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),z("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),re("top",[j("notification-wrapper",`
 transform-origin: top center;
 `)]),re("bottom",[j("notification-wrapper",`
 transform-origin: bottom center;
 `)]),re("top-right, bottom-right",[j("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),re("top-left, bottom-left",[j("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),re("top-right",`
 right: 0;
 `,[Ra("top-right")]),re("top-left",`
 left: 0;
 `,[Ra("top-left")]),re("bottom-right",`
 right: 0;
 `,[Ra("bottom-right")]),re("bottom-left",`
 left: 0;
 `,[Ra("bottom-left")]),re("scrollable",[re("top-right",`
 top: 0;
 `),re("top-left",`
 top: 0;
 `),re("bottom-right",`
 bottom: 0;
 `),re("bottom-left",`
 bottom: 0;
 `)]),j("notification-wrapper",`
 margin-bottom: 12px;
 `,[z("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),z("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),z("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),z("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),j("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[oe("avatar",[j("icon",{color:"var(--n-icon-color)"}),j("base-icon",{color:"var(--n-icon-color)"})]),re("show-avatar",[j("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),re("closable",[j("notification-main",[z("> *:first-child",{paddingRight:"20px"})]),oe("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),oe("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[j("icon","transition: color .3s var(--n-bezier);")]),j("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[j("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[oe("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),oe("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),oe("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),oe("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),oe("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[z("&:first-child",{margin:0})])])])])]);function Ra(e){const r=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",o="0";return j("notification-wrapper",[z("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${r}, 0);
 `),z("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${o}, 0);
 `)])}const jO="n-notification-api",WO=Object.assign(Object.assign({},Xe.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),UO=be({name:"NotificationProvider",props:WO,setup(e){const{mergedClsPrefixRef:t}=Pt(e),r=V([]),o={},n=new Set;function i(h){const p=Tn(),b=()=>{n.add(p),o[p]&&o[p].hide()},y=qt(Object.assign(Object.assign({},h),{key:p,destroy:b,hide:b,deactivate:b})),{max:g}=e;if(g&&r.value.length-n.size>=g){let w=!1,T=0;for(const x of r.value){if(!n.has(x.key)){o[x.key]&&(x.destroy(),w=!0);break}T++}w||r.value.splice(T,1)}return r.value.push(y),y}const s=["info","success","warning","error"].map(h=>p=>i(Object.assign(Object.assign({},p),{type:h})));function a(h){n.delete(h),r.value.splice(r.value.findIndex(p=>p.key===h),1)}const l=Xe("Notification","-notification",NO,n1,e,t),c={create:i,info:s[0],success:s[1],warning:s[2],error:s[3],open:d,destroyAll:f},u=V(0);qe(jO,c),qe(tc,{props:e,mergedClsPrefixRef:t,mergedThemeRef:l,wipTransitionCountRef:u});function d(h){return i(h)}function f(){Object.values(r.value).forEach(h=>{h.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:r,notificationRefs:o,handleAfterLeave:a},c)},render(){var e,t,r;const{placement:o}=this;return E(Qe,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.notificationList.length?E(Ks,{to:(r=this.to)!==null&&r!==void 0?r:"body"},E(MO,{style:this.containerStyle,scrollable:this.scrollable&&o!=="top"&&o!=="bottom",placement:o},{default:()=>this.notificationList.map(n=>E(FO,Object.assign({ref:i=>{const s=n.key;i===null?delete this.notificationRefs[s]:this.notificationRefs[s]=i}},Cd(n,["destroy","hide","deactivate"]),{internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:n.keepAliveOnHover===void 0?this.keepAliveOnHover:n.keepAliveOnHover})))})):null)}}),VO=z([j("progress",{display:"inline-block"},[j("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),re("line",`
 width: 100%;
 display: block;
 `,[j("progress-content",`
 display: flex;
 align-items: center;
 `,[j("progress-graph",{flex:1})]),j("progress-custom-content",{marginLeft:"14px"}),j("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[re("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),re("circle, dashboard",{width:"120px"},[j("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),j("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),j("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),re("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[j("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),j("progress-content",{position:"relative"}),j("progress-graph",{position:"relative"},[j("progress-graph-circle",[z("svg",{verticalAlign:"bottom"}),j("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[re("empty",{opacity:0})]),j("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),j("progress-graph-line",[re("indicator-inside",[j("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[j("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),j("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),re("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[j("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),j("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),j("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[j("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[re("processing",[z("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),z("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),KO={success:E(Js,null),error:E(Zs,null),warning:E(Qs,null),info:E(bi,null)},qO=be({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const r=K(()=>Zr(e.height)),o=K(()=>e.railBorderRadius!==void 0?Zr(e.railBorderRadius):e.height!==void 0?Zr(e.height,{c:.5}):""),n=K(()=>e.fillBorderRadius!==void 0?Zr(e.fillBorderRadius):e.railBorderRadius!==void 0?Zr(e.railBorderRadius):e.height!==void 0?Zr(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:s,railStyle:a,percentage:l,unit:c,indicatorTextColor:u,status:d,showIndicator:f,fillColor:h,processing:p,clsPrefix:b}=e;return E("div",{class:`${b}-progress-content`,role:"none"},E("div",{class:`${b}-progress-graph`,"aria-hidden":!0},E("div",{class:[`${b}-progress-graph-line`,{[`${b}-progress-graph-line--indicator-${i}`]:!0}]},E("div",{class:`${b}-progress-graph-line-rail`,style:[{backgroundColor:s,height:r.value,borderRadius:o.value},a]},E("div",{class:[`${b}-progress-graph-line-fill`,p&&`${b}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:h,height:r.value,lineHeight:r.value,borderRadius:n.value}},i==="inside"?E("div",{class:`${b}-progress-graph-line-indicator`,style:{color:u}},l,c):null)))),f&&i==="outside"?E("div",null,t.default?E("div",{class:`${b}-progress-custom-content`,style:{color:u},role:"none"},t.default()):d==="default"?E("div",{role:"none",class:`${b}-progress-icon ${b}-progress-icon--as-text`,style:{color:u}},l,c):E("div",{class:`${b}-progress-icon`,"aria-hidden":!0},E(dt,{clsPrefix:b},{default:()=>KO[d]}))):null)}}}),GO={success:E(Js,null),error:E(Zs,null),warning:E(Qs,null),info:E(bi,null)},XO=be({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function r(o,n,i){const{gapDegree:s,viewBoxWidth:a,strokeWidth:l}=e,c=50,u=0,d=c,f=0,h=2*c,p=50+l/2,b=`M ${p},${p} m ${u},${d}
      a ${c},${c} 0 1 1 ${f},${-h}
      a ${c},${c} 0 1 1 ${-f},${h}`,y=Math.PI*2*c,g={stroke:i,strokeDasharray:`${o/100*(y-s)}px ${a*8}px`,strokeDashoffset:`-${s/2}px`,transformOrigin:n?"center":void 0,transform:n?`rotate(${n}deg)`:void 0};return{pathString:b,pathStyle:g}}return()=>{const{fillColor:o,railColor:n,strokeWidth:i,offsetDegree:s,status:a,percentage:l,showIndicator:c,indicatorTextColor:u,unit:d,gapOffsetDegree:f,clsPrefix:h}=e,{pathString:p,pathStyle:b}=r(100,0,n),{pathString:y,pathStyle:g}=r(l,s,o),w=100+i;return E("div",{class:`${h}-progress-content`,role:"none"},E("div",{class:`${h}-progress-graph`,"aria-hidden":!0},E("div",{class:`${h}-progress-graph-circle`,style:{transform:f?`rotate(${f}deg)`:void 0}},E("svg",{viewBox:`0 0 ${w} ${w}`},E("g",null,E("path",{class:`${h}-progress-graph-circle-rail`,d:p,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:b})),E("g",null,E("path",{class:[`${h}-progress-graph-circle-fill`,l===0&&`${h}-progress-graph-circle-fill--empty`],d:y,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:g}))))),c?E("div",null,t.default?E("div",{class:`${h}-progress-custom-content`,role:"none"},t.default()):a!=="default"?E("div",{class:`${h}-progress-icon`,"aria-hidden":!0},E(dt,{clsPrefix:h},{default:()=>GO[a]})):E("div",{class:`${h}-progress-text`,style:{color:u},role:"none"},E("span",{class:`${h}-progress-text__percentage`},l),E("span",{class:`${h}-progress-text__unit`},d))):null)}}});function Dp(e,t,r=100){return`m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const YO=be({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const r=K(()=>e.percentage.map((n,i)=>`${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:o,strokeWidth:n,circleGap:i,showIndicator:s,fillColor:a,railColor:l,railStyle:c,percentage:u,clsPrefix:d}=e;return E("div",{class:`${d}-progress-content`,role:"none"},E("div",{class:`${d}-progress-graph`,"aria-hidden":!0},E("div",{class:`${d}-progress-graph-circle`},E("svg",{viewBox:`0 0 ${o} ${o}`},u.map((f,h)=>E("g",{key:h},E("path",{class:`${d}-progress-graph-circle-rail`,d:Dp(o/2-n/2*(1+2*h)-i*h,n,o),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:l[h]},c[h]]}),E("path",{class:[`${d}-progress-graph-circle-fill`,f===0&&`${d}-progress-graph-circle-fill--empty`],d:Dp(o/2-n/2*(1+2*h)-i*h,n,o),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:r.value[h],strokeDashoffset:0,stroke:a[h]}})))))),s&&t.default?E("div",null,E("div",{class:`${d}-progress-text`},t.default())):null)}}}),ZO=Object.assign(Object.assign({},Xe.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),JO=be({name:"Progress",props:ZO,setup(e){const t=K(()=>e.indicatorPlacement||e.indicatorPosition),r=K(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:o,inlineThemeDisabled:n}=Pt(e),i=Xe("Progress","-progress",VO,Yd,e,o),s=K(()=>{const{status:l}=e,{common:{cubicBezierEaseInOut:c},self:{fontSize:u,fontSizeCircle:d,railColor:f,railHeight:h,iconSizeCircle:p,iconSizeLine:b,textColorCircle:y,textColorLineInner:g,textColorLineOuter:w,lineBgProcessing:T,fontWeightCircle:x,[Ce("iconColor",l)]:C,[Ce("fillColor",l)]:$}}=i.value;return{"--n-bezier":c,"--n-fill-color":$,"--n-font-size":u,"--n-font-size-circle":d,"--n-font-weight-circle":x,"--n-icon-color":C,"--n-icon-size-circle":p,"--n-icon-size-line":b,"--n-line-bg-processing":T,"--n-rail-color":f,"--n-rail-height":h,"--n-text-color-circle":y,"--n-text-color-line-inner":g,"--n-text-color-line-outer":w}}),a=n?pr("progress",K(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:o,mergedIndicatorPlacement:t,gapDeg:r,cssVars:n?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:r,showIndicator:o,status:n,railColor:i,railStyle:s,color:a,percentage:l,viewBoxWidth:c,strokeWidth:u,mergedIndicatorPlacement:d,unit:f,borderRadius:h,fillBorderRadius:p,height:b,processing:y,circleGap:g,mergedClsPrefix:w,gapDeg:T,gapOffsetDegree:x,themeClass:C,$slots:$,onRender:S}=this;return S==null||S(),E("div",{class:[C,`${w}-progress`,`${w}-progress--${e}`,`${w}-progress--${n}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?E(XO,{clsPrefix:w,status:n,showIndicator:o,indicatorTextColor:r,railColor:i,fillColor:a,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:c,strokeWidth:u,gapDegree:T===void 0?e==="dashboard"?75:0:T,gapOffsetDegree:x,unit:f},$):e==="line"?E(qO,{clsPrefix:w,status:n,showIndicator:o,indicatorTextColor:r,railColor:i,fillColor:a,railStyle:s,percentage:l,processing:y,indicatorPlacement:d,unit:f,fillBorderRadius:p,railBorderRadius:h,height:b},$):e==="multiple-circle"?E(YO,{clsPrefix:w,strokeWidth:u,railColor:i,fillColor:a,railStyle:s,viewBoxWidth:c,percentage:l,showIndicator:o,circleGap:g},$):null)}}),QO={name:"Skeleton",common:ne,self(e){const{heightSmall:t,heightMedium:r,heightLarge:o,borderRadius:n}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:n,heightSmall:t,heightMedium:r,heightLarge:o}}},eA=e=>{const{heightSmall:t,heightMedium:r,heightLarge:o,borderRadius:n}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:n,heightSmall:t,heightMedium:r,heightLarge:o}},tA={name:"Skeleton",common:ie,self:eA},Di="n-upload",z1="__UPLOAD_DRAGGER__",rA=be({name:"UploadDragger",[z1]:!0,setup(e,{slots:t}){const r=Se(Di,null);return r||In("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:o},mergedDisabledRef:{value:n},maxReachedRef:{value:i}}=r;return E("div",{class:[`${o}-upload-dragger`,(n||i)&&`${o}-upload-dragger--disabled`]},t)}}});var F1=globalThis&&globalThis.__awaiter||function(e,t,r,o){function n(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(o.next(u))}catch(d){s(d)}}function l(u){try{c(o.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):n(u.value).then(a,l)}c((o=o.apply(e,t||[])).next())})};const N1=e=>e.includes("image/"),zp=(e="")=>{const t=e.split("/"),o=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(o)||[""])[0]},Fp=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,j1=e=>{if(e.type)return N1(e.type);const t=zp(e.name||"");if(Fp.test(t))return!0;const r=e.thumbnailUrl||e.url||"",o=zp(r);return!!(/^data:image\//.test(r)||Fp.test(o))};function oA(e){return F1(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!N1(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const nA=Rn&&window.FileReader&&window.File;function iA(e){return e.isDirectory}function sA(e){return e.isFile}function aA(e,t){return F1(this,void 0,void 0,function*(){const r=[];let o,n=0;function i(){n++}function s(){n--,n||o(r)}function a(l){l.forEach(c=>{if(!!c){if(i(),t&&iA(c)){const u=c.createReader();i(),u.readEntries(d=>{a(d),s()},()=>{s()})}else sA(c)&&(i(),c.file(u=>{r.push({file:u,entry:c,source:"dnd"}),s()},()=>{s()}));s()}})}return yield new Promise(l=>{o=l,a(e)}),r})}function Fs(e){const{id:t,name:r,percentage:o,status:n,url:i,file:s,thumbnailUrl:a,type:l,fullPath:c,batchId:u}=e;return{id:t,name:r,percentage:o!=null?o:null,status:n,url:i!=null?i:null,file:s!=null?s:null,thumbnailUrl:a!=null?a:null,type:l!=null?l:null,fullPath:c!=null?c:null,batchId:u!=null?u:null}}function lA(e,t,r){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),r=r.toLocaleLowerCase(),r.split(",").map(n=>n.trim()).filter(Boolean).some(n=>{if(n.startsWith(".")){if(e.endsWith(n))return!0}else if(n.includes("/")){const[i,s]=t.split("/"),[a,l]=n.split("/");if((a==="*"||i&&a&&a===i)&&(l==="*"||s&&l&&l===s))return!0}else return!0;return!1})}const cA=(e,t)=>{if(!e)return;const r=document.createElement("a");r.href=e,t!==void 0&&(r.download=t),document.body.appendChild(r),r.click(),document.body.removeChild(r)},W1=be({name:"UploadTrigger",props:{abstract:Boolean},setup(e,{slots:t}){const r=Se(Di,null);r||In("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:o,mergedDisabledRef:n,maxReachedRef:i,listTypeRef:s,dragOverRef:a,openOpenFileDialog:l,draggerInsideRef:c,handleFileAddition:u,mergedDirectoryDndRef:d,triggerStyleRef:f}=r,h=K(()=>s.value==="image-card");function p(){n.value||i.value||l()}function b(T){T.preventDefault(),a.value=!0}function y(T){T.preventDefault(),a.value=!0}function g(T){T.preventDefault(),a.value=!1}function w(T){var x;if(T.preventDefault(),!c.value||n.value||i.value){a.value=!1;return}const C=(x=T.dataTransfer)===null||x===void 0?void 0:x.items;C!=null&&C.length?aA(Array.from(C).map($=>$.webkitGetAsEntry()),d.value).then($=>{u($)}).finally(()=>{a.value=!1}):a.value=!1}return()=>{var T;const{value:x}=o;return e.abstract?(T=t.default)===null||T===void 0?void 0:T.call(t,{handleClick:p,handleDrop:w,handleDragOver:b,handleDragEnter:y,handleDragLeave:g}):E("div",{class:[`${x}-upload-trigger`,(n.value||i.value)&&`${x}-upload-trigger--disabled`,h.value&&`${x}-upload-trigger--image-card`],style:f.value,onClick:p,onDrop:w,onDragover:b,onDragenter:y,onDragleave:g},h.value?E(rA,null,{default:()=>du(t.default,()=>[E(dt,{clsPrefix:x},{default:()=>E(r6,null)})])}):t)}}}),uA=be({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:Se(Di).mergedThemeRef}},render(){return E(Zl,null,{default:()=>this.show?E(JO,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}}),dA=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},E("g",{fill:"none"},E("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"}))),fA=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},E("g",{fill:"none"},E("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})));var hA=globalThis&&globalThis.__awaiter||function(e,t,r,o){function n(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(o.next(u))}catch(d){s(d)}}function l(u){try{c(o.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):n(u.value).then(a,l)}c((o=o.apply(e,t||[])).next())})};const Oa={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},pA=be({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0}},setup(e){const t=Se(Di),r=V(null),o=V(""),n=K(()=>{const{file:C}=e;return C.status==="finished"?"success":C.status==="error"?"error":"info"}),i=K(()=>{const{file:C}=e;if(C.status==="error")return"error"}),s=K(()=>{const{file:C}=e;return C.status==="uploading"}),a=K(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:C}=e;return["uploading","pending","error"].includes(C.status)}),l=K(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:C}=e;return["finished"].includes(C.status)}),c=K(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:C}=e;return["finished"].includes(C.status)}),u=K(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:C}=e;return["error"].includes(C.status)}),d=oo(()=>o.value||e.file.thumbnailUrl||e.file.url),f=K(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:C},listType:$}=e;return["finished"].includes(C)&&d.value&&$==="image-card"});function h(){t.submit(e.file.id)}function p(C){C.preventDefault();const{file:$}=e;["finished","pending","error"].includes($.status)?y($):["uploading"].includes($.status)?w($):Is("upload","The button clicked type is unknown.")}function b(C){C.preventDefault(),g(e.file)}function y(C){const{xhrMap:$,doChange:S,onRemoveRef:{value:L},mergedFileListRef:{value:k}}=t;Promise.resolve(L?L({file:Object.assign({},C),fileList:k}):!0).then(R=>{if(R===!1)return;const H=Object.assign({},C,{status:"removed"});$.delete(C.id),S(H,void 0,{remove:!0})})}function g(C){const{onDownloadRef:{value:$}}=t;Promise.resolve($?$(Object.assign({},C)):!0).then(S=>{S!==!1&&cA(C.url,C.name)})}function w(C){const{xhrMap:$}=t,S=$.get(C.id);S==null||S.abort(),y(Object.assign({},C))}function T(){const{onPreviewRef:{value:C}}=t;if(C)C(e.file);else if(e.listType==="image-card"){const{value:$}=r;if(!$)return;$.click()}}const x=()=>hA(this,void 0,void 0,function*(){const{listType:C}=e;C!=="image"&&C!=="image-card"||t.shouldUseThumbnailUrlRef.value(e.file)&&(o.value=yield t.getFileThumbnailUrlResolver(e.file))});return wr(()=>{x()}),{mergedTheme:t.mergedThemeRef,progressStatus:n,buttonType:i,showProgress:s,disabled:t.mergedDisabledRef,showCancelButton:a,showRemoveButton:l,showDownloadButton:c,showRetryButton:u,showPreviewButton:f,mergedThumbnailUrl:d,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:r,handleRemoveOrCancelClick:p,handleDownloadClick:b,handleRetryClick:h,handlePreviewClick:T}},render(){const{clsPrefix:e,mergedTheme:t,listType:r,file:o,renderIcon:n}=this;let i;const s=r==="image";s||r==="image-card"?i=!this.shouldUseThumbnailUrl(o)||!this.mergedThumbnailUrl?E("span",{class:`${e}-upload-file-info__thumbnail`},n?n(o):j1(o)?E(dt,{clsPrefix:e},{default:()=>dA}):E(dt,{clsPrefix:e},{default:()=>fA})):E("a",{rel:"noopener noreferer",target:"_blank",href:o.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},r==="image-card"?E(mO,{src:this.mergedThumbnailUrl||void 0,previewSrc:o.url||void 0,alt:o.name,ref:"imageRef"}):E("img",{src:this.mergedThumbnailUrl||void 0,alt:o.name})):i=E("span",{class:`${e}-upload-file-info__thumbnail`},n?n(o):E(dt,{clsPrefix:e},{default:()=>E(o6,null)}));const l=E(uA,{show:this.showProgress,percentage:o.percentage||0,status:this.progressStatus}),c=r==="text"||r==="image";return E("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,o.url&&o.status!=="error"&&r!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${r}-type`]},E("div",{class:`${e}-upload-file-info`},i,E("div",{class:`${e}-upload-file-info__name`},c&&(o.url&&o.status!=="error"?E("a",{rel:"noopener noreferer",target:"_blank",href:o.url||void 0,onClick:this.handlePreviewClick},o.name):E("span",{onClick:this.handlePreviewClick},o.name)),s&&l),E("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${r}-type`]},this.showPreviewButton?E(qn,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Oa},{icon:()=>E(dt,{clsPrefix:e},{default:()=>E(i6,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&E(qn,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:Oa,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>E(Yl,null,{default:()=>this.showRemoveButton?E(dt,{clsPrefix:e,key:"trash"},{default:()=>E(s6,null)}):E(dt,{clsPrefix:e,key:"cancel"},{default:()=>E(l6,null)})})}),this.showRetryButton&&!this.disabled&&E(qn,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Oa},{icon:()=>E(dt,{clsPrefix:e},{default:()=>E(c6,null)})}),this.showDownloadButton?E(qn,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Oa},{icon:()=>E(dt,{clsPrefix:e},{default:()=>E(a6,null)})}):null)),!s&&l)}}),gA=be({name:"UploadFileList",setup(e,{slots:t}){const r=Se(Di,null);r||In("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:o,mergedClsPrefixRef:n,listTypeRef:i,mergedFileListRef:s,fileListStyleRef:a,cssVarsRef:l,themeClassRef:c,maxReachedRef:u,showTriggerRef:d,imageGroupPropsRef:f}=r,h=K(()=>i.value==="image-card"),p=()=>s.value.map(y=>E(pA,{clsPrefix:n.value,key:y.id,file:y,listType:i.value})),b=()=>h.value?E(pO,Object.assign({},f.value),{default:p}):E(Zl,{group:!0},{default:p});return()=>{const{value:y}=n,{value:g}=o;return E("div",{class:[`${y}-upload-file-list`,h.value&&`${y}-upload-file-list--grid`,g?c==null?void 0:c.value:void 0],style:[g&&l?l.value:"",a.value]},b(),d.value&&!u.value&&h.value&&E(W1,null,t))}}}),mA=z([j("upload","width: 100%;",[re("dragger-inside",[j("upload-trigger",`
 display: block;
 `)]),re("drag-over",[j("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),j("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[z("&:hover",`
 border: var(--n-dragger-border-hover);
 `),re("disabled",`
 cursor: not-allowed;
 `)]),j("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[z("+",[j("upload-file-list","margin-top: 8px;")]),re("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),re("image-card",`
 width: 96px;
 height: 96px;
 `,[j("base-icon",`
 font-size: 24px;
 `),j("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),j("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[z("a, img","outline: none;"),re("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[j("upload-file","cursor: not-allowed;")]),re("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),j("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[Tu(),j("progress",[Tu({foldPadding:!0})]),z("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[j("upload-file-info",[oe("action",`
 opacity: 1;
 `)])]),re("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[j("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[j("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),oe("name",`
 padding: 0 8px;
 `),oe("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[z("img",`
 width: 100%;
 `)])])]),re("text-type",[j("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),re("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[j("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),j("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[oe("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[z("img",`
 width: 100%;
 `)])]),z("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),z("&:hover",[z("&::before","opacity: 1;"),j("upload-file-info",[oe("thumbnail","opacity: .12;")])])]),re("error-status",[z("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),j("upload-file-info",[oe("name","color: var(--n-item-text-color-error);"),oe("thumbnail","color: var(--n-item-text-color-error);")]),re("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),re("with-url",`
 cursor: pointer;
 `,[j("upload-file-info",[oe("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[z("a",`
 text-decoration: underline;
 `)])])]),j("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[oe("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[j("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),oe("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[j("button",[z("&:not(:last-child)",{marginRight:"4px"}),j("base-icon",[z("svg",[Ds()])])]),re("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),re("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),oe("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[z("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),j("upload-file-input",`
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);var Np=globalThis&&globalThis.__awaiter||function(e,t,r,o){function n(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(o.next(u))}catch(d){s(d)}}function l(u){try{c(o.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):n(u.value).then(a,l)}c((o=o.apply(e,t||[])).next())})};function bA(e,t,r){const{doChange:o,xhrMap:n}=e;let i=0;function s(l){var c;let u=Object.assign({},t,{status:"error",percentage:i});n.delete(t.id),u=Fs(((c=e.onError)===null||c===void 0?void 0:c.call(e,{file:u,event:l}))||u),o(u,l)}function a(l){var c;if(e.isErrorState){if(e.isErrorState(r)){s(l);return}}else if(r.status<200||r.status>=300){s(l);return}let u=Object.assign({},t,{status:"finished",percentage:i});n.delete(t.id),u=Fs(((c=e.onFinish)===null||c===void 0?void 0:c.call(e,{file:u,event:l}))||u),o(u,l)}return{handleXHRLoad:a,handleXHRError:s,handleXHRAbort(l){const c=Object.assign({},t,{status:"removed",file:null,percentage:i});n.delete(t.id),o(c,l)},handleXHRProgress(l){const c=Object.assign({},t,{status:"uploading"});if(l.lengthComputable){const u=Math.ceil(l.loaded/l.total*100);c.percentage=u,i=u}o(c,l)}}}function vA(e){const{inst:t,file:r,data:o,headers:n,withCredentials:i,action:s,customRequest:a}=e,{doChange:l}=e.inst;let c=0;a({file:r,data:o,headers:n,withCredentials:i,action:s,onProgress(u){const d=Object.assign({},r,{status:"uploading"}),f=u.percent;d.percentage=f,c=f,l(d)},onFinish(){var u;let d=Object.assign({},r,{status:"finished",percentage:c});d=Fs(((u=t.onFinish)===null||u===void 0?void 0:u.call(t,{file:d}))||d),l(d)},onError(){var u;let d=Object.assign({},r,{status:"error",percentage:c});d=Fs(((u=t.onError)===null||u===void 0?void 0:u.call(t,{file:d}))||d),l(d)}})}function yA(e,t,r){const o=bA(e,t,r);r.onabort=o.handleXHRAbort,r.onerror=o.handleXHRError,r.onload=o.handleXHRLoad,r.upload&&(r.upload.onprogress=o.handleXHRProgress)}function U1(e,t){return typeof e=="function"?e({file:t}):e||{}}function xA(e,t,r){const o=U1(t,r);!o||Object.keys(o).forEach(n=>{e.setRequestHeader(n,o[n])})}function CA(e,t,r){const o=U1(t,r);!o||Object.keys(o).forEach(n=>{e.append(n,o[n])})}function wA(e,t,r,{method:o,action:n,withCredentials:i,responseType:s,headers:a,data:l}){const c=new XMLHttpRequest;c.responseType=s,e.xhrMap.set(r.id,c),c.withCredentials=i;const u=new FormData;if(CA(u,l,r),u.append(t,r.file),yA(e,r,c),n!==void 0){c.open(o.toUpperCase(),n),xA(c,a,r),c.send(u);const d=Object.assign({},r,{status:"uploading"});e.doChange(d)}}const SA=Object.assign(Object.assign({},Xe.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>nA?j1(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerStyle:[String,Object],renderIcon:Object}),EA=be({name:"Upload",props:SA,setup(e){e.abstract&&e.listType==="image-card"&&In("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=Pt(e),o=Xe("Upload","-upload",mA,k1,e,t),n=V0(e),i=K(()=>{const{max:k}=e;return k!==void 0?h.value.length>=k:!1}),s=V(e.defaultFileList),a=Me(e,"fileList"),l=V(null),c={value:!1},u=V(!1),d=new Map,f=P0(a,s),h=K(()=>f.value.map(Fs));function p(){var k;(k=l.value)===null||k===void 0||k.click()}function b(k){const R=k.target;w(R.files?Array.from(R.files).map(H=>({file:H,entry:null,source:"input"})):null,k),R.value=""}function y(k){const{"onUpdate:fileList":R,onUpdateFileList:H}=e;R&&rr(R,k),H&&rr(H,k),s.value=k}const g=K(()=>e.multiple||e.directory);function w(k,R){if(!k||k.length===0)return;const{onBeforeUpload:H}=e;k=g.value?k:[k[0]];const{max:A,accept:q}=e;k=k.filter(({file:ee,source:Y})=>Y==="dnd"&&(q==null?void 0:q.trim())?lA(ee.name,ee.type,q):!0),A&&(k=k.slice(0,A-h.value.length));const F=Tn();Promise.all(k.map(({file:ee,entry:Y})=>Np(this,void 0,void 0,function*(){var Z;const se={id:Tn(),batchId:F,name:ee.name,status:"pending",percentage:0,file:ee,url:null,type:ee.type,thumbnailUrl:null,fullPath:(Z=Y==null?void 0:Y.fullPath)!==null&&Z!==void 0?Z:`/${ee.webkitRelativePath||ee.name}`};return!H||(yield H({file:se,fileList:h.value}))!==!1?se:null}))).then(ee=>Np(this,void 0,void 0,function*(){let Y=Promise.resolve();return ee.forEach(Z=>{Y=Y.then(Dt).then(()=>{Z&&x(Z,R,{append:!0})})}),yield Y})).then(()=>{e.defaultUpload&&T()})}function T(k){const{method:R,action:H,withCredentials:A,headers:q,data:F,name:ee}=e,Y=k!==void 0?h.value.filter(se=>se.id===k):h.value,Z=k!==void 0;Y.forEach(se=>{const{status:ve}=se;(ve==="pending"||ve==="error"&&Z)&&(e.customRequest?vA({inst:{doChange:x,xhrMap:d,onFinish:e.onFinish,onError:e.onError},file:se,action:H,withCredentials:A,headers:q,data:F,customRequest:e.customRequest}):wA({doChange:x,xhrMap:d,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},ee,se,{method:R,action:H,withCredentials:A,responseType:e.responseType,headers:q,data:F}))})}const x=(k,R,H={append:!1,remove:!1})=>{const{append:A,remove:q}=H,F=Array.from(h.value),ee=F.findIndex(Y=>Y.id===k.id);if(A||q||~ee){A?F.push(k):q?F.splice(ee,1):F.splice(ee,1,k);const{onChange:Y}=e;Y&&Y({file:k,fileList:F,event:R}),y(F)}};function C(k){var R;if(k.thumbnailUrl)return k.thumbnailUrl;const{createThumbnailUrl:H}=e;return H?(R=H(k.file,k))!==null&&R!==void 0?R:k.url||"":k.url?k.url:k.file?oA(k.file):""}const $=K(()=>{const{common:{cubicBezierEaseInOut:k},self:{draggerColor:R,draggerBorder:H,draggerBorderHover:A,itemColorHover:q,itemColorHoverError:F,itemTextColorError:ee,itemTextColorSuccess:Y,itemTextColor:Z,itemIconColor:se,itemDisabledOpacity:ve,lineHeight:Le,borderRadius:_e,fontSize:Ae,itemBorderImageCardError:ut,itemBorderImageCard:Ue}}=o.value;return{"--n-bezier":k,"--n-border-radius":_e,"--n-dragger-border":H,"--n-dragger-border-hover":A,"--n-dragger-color":R,"--n-font-size":Ae,"--n-item-color-hover":q,"--n-item-color-hover-error":F,"--n-item-disabled-opacity":ve,"--n-item-icon-color":se,"--n-item-text-color":Z,"--n-item-text-color-error":ee,"--n-item-text-color-success":Y,"--n-line-height":Le,"--n-item-border-image-card-error":ut,"--n-item-border-image-card":Ue}}),S=r?pr("upload",void 0,$,e):void 0;qe(Di,{mergedClsPrefixRef:t,mergedThemeRef:o,showCancelButtonRef:Me(e,"showCancelButton"),showDownloadButtonRef:Me(e,"showDownloadButton"),showRemoveButtonRef:Me(e,"showRemoveButton"),showRetryButtonRef:Me(e,"showRetryButton"),onRemoveRef:Me(e,"onRemove"),onDownloadRef:Me(e,"onDownload"),mergedFileListRef:h,triggerStyleRef:Me(e,"triggerStyle"),shouldUseThumbnailUrlRef:Me(e,"shouldUseThumbnailUrl"),renderIconRef:Me(e,"renderIcon"),xhrMap:d,submit:T,doChange:x,showPreviewButtonRef:Me(e,"showPreviewButton"),onPreviewRef:Me(e,"onPreview"),getFileThumbnailUrlResolver:C,listTypeRef:Me(e,"listType"),dragOverRef:u,openOpenFileDialog:p,draggerInsideRef:c,handleFileAddition:w,mergedDisabledRef:n.mergedDisabledRef,maxReachedRef:i,fileListStyleRef:Me(e,"fileListStyle"),abstractRef:Me(e,"abstract"),acceptRef:Me(e,"accept"),cssVarsRef:r?void 0:$,themeClassRef:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,showTriggerRef:Me(e,"showTrigger"),imageGroupPropsRef:Me(e,"imageGroupProps"),mergedDirectoryDndRef:K(()=>{var k;return(k=e.directoryDnd)!==null&&k!==void 0?k:e.directory})});const L={clear:()=>{s.value=[]},submit:T,openOpenFileDialog:p};return Object.assign({mergedClsPrefix:t,draggerInsideRef:c,inputElRef:l,mergedTheme:o,dragOver:u,mergedMultiple:g,cssVars:r?void 0:$,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,handleFileInputChange:b},L)},render(){var e,t;const{draggerInsideRef:r,mergedClsPrefix:o,$slots:n,directory:i,onRender:s}=this;if(n.default&&!this.abstract){const l=n.default()[0];!((e=l==null?void 0:l.type)===null||e===void 0)&&e[z1]&&(r.value=!0)}const a=E("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${o}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:i||void 0,directory:i||void 0}));return this.abstract?E(Qe,null,(t=n.default)===null||t===void 0?void 0:t.call(n),E(Ks,{to:"body"},a)):(s==null||s(),E("div",{class:[`${o}-upload`,r.value&&`${o}-upload--dragger-inside`,this.dragOver&&`${o}-upload--drag-over`,this.themeClass],style:this.cssVars},a,this.showTrigger&&this.listType!=="image-card"&&E(W1,null,n),this.showFileList&&E(gA,null,n)))}}),V1=()=>({}),_A={name:"Equation",common:ie,self:V1},TA=_A,$A={name:"Equation",common:ne,self:V1},PA=$A,LA={name:"dark",common:ne,Alert:sP,Anchor:mP,AutoComplete:_P,Avatar:rv,AvatarGroup:OP,BackTop:MP,Badge:FP,Breadcrumb:GP,Button:Yt,ButtonGroup:Uk,Calendar:sL,Card:uv,Carousel:CL,Cascader:PL,Checkbox:Bi,Code:pv,Collapse:ML,CollapseTransition:zL,ColorPicker:uL,DataTable:d8,DatePicker:_8,Descriptions:k8,Dialog:Nv,Divider:Q8,Drawer:ok,Dropdown:Kd,DynamicInput:ik,DynamicTags:hk,Element:bk,Empty:Bn,Ellipsis:$v,Equation:PA,Form:Ek,GradientText:Tk,Icon:b8,IconWrapper:Ok,Image:lO,Input:gr,InputNumber:Gk,LegacyTransfer:vO,Layout:Qk,List:sI,LoadingBar:lI,Log:fI,Menu:_I,Mention:bI,Message:jk,Modal:F8,Notification:Dk,PageHeader:PI,Pagination:_v,Popconfirm:OI,Popover:Hn,Popselect:vv,Progress:h1,Radio:kv,Rate:HI,Result:VI,Row:aO,Scrollbar:Xt,Select:wv,Skeleton:QO,Slider:qI,Space:Zv,Spin:eR,Statistic:nR,Steps:cR,Switch:dR,Table:yR,Tabs:ER,Tag:qb,Thing:PR,TimePicker:Hv,Timeline:kR,Tooltip:Ql,Transfer:MR,Tree:$1,TreeSelect:jR,Typography:YR,Upload:QR,Watermark:tO},K1={name:"light",common:ie,Alert:cP,Anchor:pP,AutoComplete:SP,Avatar:tv,AvatarGroup:IP,BackTop:DP,Badge:WP,Breadcrumb:KP,Button:Nt,ButtonGroup:Kk,Calendar:nL,Card:Wd,Carousel:yL,Cascader:TL,Checkbox:Mi,Code:gv,Collapse:OL,CollapseTransition:HL,ColorPicker:lL,DataTable:c8,DatePicker:S8,Descriptions:P8,Dialog:qd,Divider:Z8,Drawer:tk,Dropdown:Vd,DynamicInput:lk,DynamicTags:gk,Element:yk,Empty:lo,Equation:TA,Ellipsis:Pv,Form:wk,GradientText:Lk,Icon:g8,IconWrapper:Ik,Image:r1,Input:mr,InputNumber:Zk,Layout:rI,LegacyTransfer:CO,List:nI,LoadingBar:l1,Log:gI,Menu:SI,Mention:xI,Message:s1,Modal:Kv,Notification:n1,PageHeader:$I,Pagination:Ev,Popconfirm:II,Popover:Go,Popselect:yv,Progress:Yd,Radio:Iv,Rate:FI,Row:iO,Result:WI,Scrollbar:Ft,Skeleton:tA,Select:Cv,Slider:YI,Space:Jv,Spin:JI,Statistic:rR,Steps:aR,Switch:pR,Table:bR,Tabs:wR,Tag:Gb,Thing:TR,TimePicker:Bv,Timeline:OR,Tooltip:ra,Transfer:DR,Tree:T1,TreeSelect:VR,Typography:GR,Upload:k1,Watermark:oO};var jp;const oa=typeof window<"u",kA=e=>typeof e=="function",IA=e=>typeof e=="string",ps=()=>{};oa&&((jp=window==null?void 0:window.navigator)==null?void 0:jp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Jr(e){return typeof e=="function"?e():ur(e)}function Jd(e,t){function r(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return r}const q1=e=>e();function RA(e,t={}){let r,o;return i=>{const s=Jr(e),a=Jr(t.maxWait);if(r&&clearTimeout(r),s<=0||a!==void 0&&a<=0)return o&&(clearTimeout(o),o=null),i();a&&!o&&(o=setTimeout(()=>{r&&clearTimeout(r),o=null,i()},a)),r=setTimeout(()=>{o&&clearTimeout(o),o=null,i()},s)}}function OA(e,t=!0,r=!0){let o=0,n,i=!0;const s=()=>{n&&(clearTimeout(n),n=void 0)};return l=>{const c=Jr(e),u=Date.now()-o;if(s(),c<=0)return o=Date.now(),l();u>c&&(r||!i)?(o=Date.now(),l()):t&&(n=setTimeout(()=>{o=Date.now(),i=!0,s(),l()},c)),!r&&!n&&(n=setTimeout(()=>i=!0,c)),i=!1}}function AA(e=q1){const t=V(!0);function r(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:r,resume:o,eventFilter:(...i)=>{t.value&&e(...i)}}}function MA(e){return e}function BA(e){const t=Symbol("InjectionState");return[(...n)=>{qe(t,e(...n))},()=>Se(t)]}function G1(e){return CC()?(wC(e),!0):!1}function HA(e,t=200,r={}){return Jd(RA(t,r),e)}function DA(e,t=200,r=!1,o=!0){return Jd(OA(t,r,o),e)}function Qd(e,t=!0){fr()?$t(e):t?e():Dt(e)}var Wp=Object.getOwnPropertySymbols,zA=Object.prototype.hasOwnProperty,FA=Object.prototype.propertyIsEnumerable,NA=(e,t)=>{var r={};for(var o in e)zA.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&Wp)for(var o of Wp(e))t.indexOf(o)<0&&FA.call(e,o)&&(r[o]=e[o]);return r};function jA(e,t,r={}){const o=r,{eventFilter:n=q1}=o,i=NA(o,["eventFilter"]);return et(e,Jd(n,t),i)}var WA=Object.defineProperty,UA=Object.defineProperties,VA=Object.getOwnPropertyDescriptors,ml=Object.getOwnPropertySymbols,X1=Object.prototype.hasOwnProperty,Y1=Object.prototype.propertyIsEnumerable,Up=(e,t,r)=>t in e?WA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,KA=(e,t)=>{for(var r in t||(t={}))X1.call(t,r)&&Up(e,r,t[r]);if(ml)for(var r of ml(t))Y1.call(t,r)&&Up(e,r,t[r]);return e},qA=(e,t)=>UA(e,VA(t)),GA=(e,t)=>{var r={};for(var o in e)X1.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&ml)for(var o of ml(e))t.indexOf(o)<0&&Y1.call(e,o)&&(r[o]=e[o]);return r};function XA(e,t,r={}){const o=r,{eventFilter:n}=o,i=GA(o,["eventFilter"]),{eventFilter:s,pause:a,resume:l,isActive:c}=AA(n);return{stop:jA(e,t,qA(KA({},i),{eventFilter:s})),pause:a,resume:l,isActive:c}}function Ro(e){var t;const r=Jr(e);return(t=r==null?void 0:r.$el)!=null?t:r}const Pn=oa?window:void 0;oa&&window.document;oa&&window.navigator;oa&&window.location;function Mr(...e){let t,r,o,n;if(IA(e[0])?([r,o,n]=e,t=Pn):[t,r,o,n]=e,!t)return ps;let i=ps;const s=et(()=>Ro(t),l=>{i(),l&&(l.addEventListener(r,o,n),i=()=>{l.removeEventListener(r,o,n),i=ps})},{immediate:!0,flush:"post"}),a=()=>{s(),i()};return G1(a),a}function U9(e,t,r={}){const{window:o=Pn,ignore:n,capture:i=!0,detectIframe:s=!1}=r;if(!o)return;const a=V(!0);let l;const c=h=>{o.clearTimeout(l);const p=Ro(e);!p||p===h.target||h.composedPath().includes(p)||!a.value||t(h)},u=h=>n&&n.some(p=>{const b=Ro(p);return b&&(h.target===b||h.composedPath().includes(b))}),d=[Mr(o,"click",c,{passive:!0,capture:i}),Mr(o,"pointerdown",h=>{const p=Ro(e);a.value=!!p&&!h.composedPath().includes(p)&&!u(h)},{passive:!0}),Mr(o,"pointerup",h=>{if(h.button===0){const p=h.composedPath();h.composedPath=()=>p,l=o.setTimeout(()=>c(h),50)}},{passive:!0}),s&&Mr(o,"blur",h=>{var p;const b=Ro(e);((p=document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(b!=null&&b.contains(document.activeElement))&&t(h)})].filter(Boolean);return()=>d.forEach(h=>h())}function YA(e,t=!1){const r=V(),o=()=>r.value=Boolean(e());return o(),Qd(o,t),r}const $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pu="__vueuse_ssr_handlers__";$u[Pu]=$u[Pu]||{};const ZA=$u[Pu];function JA(e,t){return ZA[e]||t}function QA(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var eM=Object.defineProperty,Vp=Object.getOwnPropertySymbols,tM=Object.prototype.hasOwnProperty,rM=Object.prototype.propertyIsEnumerable,Kp=(e,t,r)=>t in e?eM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qp=(e,t)=>{for(var r in t||(t={}))tM.call(t,r)&&Kp(e,r,t[r]);if(Vp)for(var r of Vp(t))rM.call(t,r)&&Kp(e,r,t[r]);return e};const oM={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function nM(e,t,r,o={}){var n;const{flush:i="pre",deep:s=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Pn,eventFilter:f,onError:h=S=>{console.error(S)}}=o,p=(u?ld:V)(t);if(!r)try{r=JA("getDefaultStorage",()=>{var S;return(S=Pn)==null?void 0:S.localStorage})()}catch(S){h(S)}if(!r)return p;const b=Jr(t),y=QA(b),g=(n=o.serializer)!=null?n:oM[y],{pause:w,resume:T}=XA(p,()=>x(p.value),{flush:i,deep:s,eventFilter:f});return d&&a&&Mr(d,"storage",$),$(),p;function x(S){try{S==null?r.removeItem(e):r.setItem(e,g.write(S))}catch(L){h(L)}}function C(S){w();try{const L=S?S.newValue:r.getItem(e);if(L==null)return l&&b!==null&&r.setItem(e,g.write(b)),b;if(!S&&c){const k=g.read(L);return kA(c)?c(k,b):y==="object"&&!Array.isArray(k)?qp(qp({},b),k):k}else return typeof L!="string"?L:g.read(L)}catch(L){h(L)}finally{T()}}function $(S){if(!(S&&S.storageArea!==r)){if(S&&S.key===null){p.value=b;return}S&&S.key!==e||(p.value=C(S))}}}var Gp=Object.getOwnPropertySymbols,iM=Object.prototype.hasOwnProperty,sM=Object.prototype.propertyIsEnumerable,aM=(e,t)=>{var r={};for(var o in e)iM.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&Gp)for(var o of Gp(e))t.indexOf(o)<0&&sM.call(e,o)&&(r[o]=e[o]);return r};function lM(e,t,r={}){const o=r,{window:n=Pn}=o,i=aM(o,["window"]);let s;const a=YA(()=>n&&"ResizeObserver"in n),l=()=>{s&&(s.disconnect(),s=void 0)},c=et(()=>Ro(e),d=>{l(),a.value&&n&&d&&(s=new ResizeObserver(t),s.observe(d,i))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return G1(u),{isSupported:a,stop:u}}function V9(e,t={}){const{reset:r=!0,windowResize:o=!0,windowScroll:n=!0,immediate:i=!0}=t,s=V(0),a=V(0),l=V(0),c=V(0),u=V(0),d=V(0),f=V(0),h=V(0);function p(){const b=Ro(e);if(!b){r&&(s.value=0,a.value=0,l.value=0,c.value=0,u.value=0,d.value=0,f.value=0,h.value=0);return}const y=b.getBoundingClientRect();s.value=y.height,a.value=y.bottom,l.value=y.left,c.value=y.right,u.value=y.top,d.value=y.width,f.value=y.x,h.value=y.y}return lM(e,p),et(()=>Ro(e),b=>!b&&p()),n&&Mr("scroll",p,{passive:!0}),o&&Mr("resize",p,{passive:!0}),Qd(()=>{i&&p()}),{height:s,bottom:a,left:l,right:c,top:u,width:d,x:f,y:h,update:p}}const Xp=1;function K9(e,t={}){const{throttle:r=0,idle:o=200,onStop:n=ps,onScroll:i=ps,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:l="auto"}=t,c=V(0),u=V(0),d=K({get(){return c.value},set(T){h(T,void 0)}}),f=K({get(){return u.value},set(T){h(void 0,T)}});function h(T,x){var C,$,S;const L=Jr(e);!L||(S=L instanceof Document?document.body:L)==null||S.scrollTo({top:(C=Jr(x))!=null?C:f.value,left:($=Jr(T))!=null?$:d.value,behavior:Jr(l)})}const p=V(!1),b=qt({left:!0,right:!1,top:!0,bottom:!1}),y=qt({left:!1,right:!1,top:!1,bottom:!1}),g=HA(T=>{p.value=!1,y.left=!1,y.right=!1,y.top=!1,y.bottom=!1,n(T)},r+o),w=T=>{const x=T.target===document?T.target.documentElement:T.target,C=x.scrollLeft;y.left=C<c.value,y.right=C>u.value,b.left=C<=0+(s.left||0),b.right=C+x.clientWidth>=x.scrollWidth-(s.right||0)-Xp,c.value=C;let $=x.scrollTop;T.target===document&&!$&&($=document.body.scrollTop),y.top=$<u.value,y.bottom=$>u.value,b.top=$<=0+(s.top||0),b.bottom=$+x.clientHeight>=x.scrollHeight-(s.bottom||0)-Xp,u.value=$,p.value=!0,g(T),i(T)};return Mr(e,"scroll",r?DA(w,r):w,a),{x:d,y:f,isScrolling:p,arrivedState:b,directions:y}}function Z1(e,t,r={}){const{window:o=Pn}=r;return nM(e,t,o==null?void 0:o.localStorage,r)}var Yp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Yp||(Yp={}));var cM=Object.defineProperty,Zp=Object.getOwnPropertySymbols,uM=Object.prototype.hasOwnProperty,dM=Object.prototype.propertyIsEnumerable,Jp=(e,t,r)=>t in e?cM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fM=(e,t)=>{for(var r in t||(t={}))uM.call(t,r)&&Jp(e,r,t[r]);if(Zp)for(var r of Zp(t))dM.call(t,r)&&Jp(e,r,t[r]);return e};const hM={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};fM({linear:MA},hM);function q9(e={}){const{window:t=Pn,initialWidth:r=1/0,initialHeight:o=1/0,listenOrientation:n=!0,includeScrollbar:i=!0}=e,s=V(r),a=V(o),l=()=>{t&&(i?(s.value=t.innerWidth,a.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return l(),Qd(l),Mr("resize",l,{passive:!0}),n&&Mr("orientationchange",l,{passive:!0}),{width:s,height:a}}const J1=[K1,LA],Lu=V(K1);let gs=Z1("theme",0);function G9(){gs.value++,gs.value=gs.value%J1.length}et(gs,()=>{Lu.value=J1[gs.value]},{immediate:!0});const[pM,gM]=BA(()=>{const e=V(null);return{bufferOpt:e,setBufferOpt:t=>{e.value=t}}});function X9(e){const t=gM();wr(()=>{var o;const r=(o=e.value)==null?void 0:o.feat.loadBufferOpt;r!=null&&r.isLoading&&(t==null||t.setBufferOpt(r))}),wr(()=>{var o;const r=(o=e.value)==null?void 0:o.feat.refreshBufferOpt;r!=null&&r.isLoading&&(t==null||t.setBufferOpt(r))})}const mM=be({__name:"LoadProgressProvide",setup(e){return pM(),(t,r)=>md(t.$slots,"default")}});function Y9(){return/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]*/g}function Z9(){return/#\[(\d+)\]/g}function bM(){return/https:\/\/nostr.build\/i\/nostr.build_[a-zA-Z0-9]*(.[a-zA-Z]+)?/}const vM=Z1("app-config",()=>({getOtherUrlsRequestLimitSize:50,localStorage:{kind10002:500,duration:1e3*60*60*24*7},eventCacheDuration:1e3*60*20,pullRelayConfig:{interval:1e3*60*60*24,debounce:1e3},relayEmiterQueueInterval:5,stopHideLongArticles:!1,enablePapawTree:!1,enablePapawTreeLazyMode:!0,lazyDelayForPapaw:0,syncInterval:1e3*60,syncInterval1:1e3*60*5,syncInterval2:1e3*60*15,syncInterval3:1e3*60*45,syncInterval4:1e3*60*60,syncInterval5:1e3*60*60*3,syncInterval6:1e3*60*60*8,syncInterval7:1e3*60*60*24,syncInterval8:1e3*60*60*24*3,syncInterval9:1e3*60*60*24*7,autoPing:!0}),{deep:!0});let ii=null,Ns=vM.value,ef=null,yM=null,Ho=null;function Aa(e){e.relayEmiter&&(ef=e.relayEmiter),e.relayPool&&(yM=e.relayPool),e.rootEventBeltline&&(Ho=e.rootEventBeltline),e.relayConfigurator&&(ii=e.relayConfigurator),e.config&&Object.assign(Ns,e.config)}const bl={useMemoryCache:!0,useLocalStorage:!0,requestMerge:!0,cacheError:!0};function xM(e,t=36e5){return{value:e,updateTime:Date.now(),duration:t}}function CM(e){return`${e.updateTime},${e.duration}|${JSON.stringify(e.value)}`}function rc(e){const t=wM(e,"|",15,36);if(t===-1)throw new Error("CacheString:Expecting a '|'");const[r,o]=e.slice(0,t).split(","),n=e.slice(t+1),i=parseInt(r),s=parseInt(o),a=JSON.parse(n);return{updateTime:i,duration:s,value:a}}function wM(e,t,r,o){e.length-1<o&&(o=e.length-1);for(let n=r;n<=o;n++)if(e[n]===t)return n;return-1}class SM{constructor(t){ye(this,"CACHE_LIST_KEY");ye(this,"cacheList");this.CACHE_LIST_KEY=t;const r=localStorage.getItem(t);if(!r){this.cacheList=new Set;return}const o=JSON.parse(r);if(!Array.isArray(o)){this.cacheList=new Set;return}this.cacheList=new Set(o)}addCacheKey(t){this.cacheList.add(t),this.reviseCacheList()}deleteCacheKey(t){this.cacheList.delete(t),this.reviseCacheList()}getCacheList(){return this.cacheList}reviseCacheList(){const t=JSON.stringify(Array.from(this.cacheList));localStorage.setItem(this.CACHE_LIST_KEY,t)}}const na=new SM("__cache_key_list_");setTimeout(()=>{EM()});function EM(){const e=window.localStorage,t=na.getCacheList();for(const r of t)try{const o=e.getItem(r);if(!o)continue;const n=rc(o);if(!nf(n))continue;of(n)}catch{e.removeItem(r)}}window.clearCache=_M;function _M(){const e=window.localStorage,t=na.getCacheList();for(const r of t)try{const o=e.getItem(r);if(!o)continue;const n=rc(o);if(!nf(n))continue;e.removeItem(r)}catch{}}window.clearCacheAll=TM;function TM(){const e=window.localStorage,t=e.length;for(let r=0;r<t;r++){const o=e.key(r);if(!o)continue;const n=e.getItem(o);if(!!n)try{const i=rc(n);if(!nf(i))continue;e.removeItem(o)}catch{continue}}}var Dn={exports:{}},si=typeof Reflect=="object"?Reflect:null,Qp=si&&typeof si.apply=="function"?si.apply:function(t,r,o){return Function.prototype.apply.call(t,r,o)},Ja;si&&typeof si.ownKeys=="function"?Ja=si.ownKeys:Object.getOwnPropertySymbols?Ja=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Ja=function(t){return Object.getOwnPropertyNames(t)};function $M(e){console&&console.warn&&console.warn(e)}var Q1=Number.isNaN||function(t){return t!==t};function Ye(){Ye.init.call(this)}Dn.exports=Ye;Dn.exports.once=IM;Ye.EventEmitter=Ye;Ye.prototype._events=void 0;Ye.prototype._eventsCount=0;Ye.prototype._maxListeners=void 0;var eg=10;function oc(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(Ye,"defaultMaxListeners",{enumerable:!0,get:function(){return eg},set:function(e){if(typeof e!="number"||e<0||Q1(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");eg=e}});Ye.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Ye.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||Q1(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function ey(e){return e._maxListeners===void 0?Ye.defaultMaxListeners:e._maxListeners}Ye.prototype.getMaxListeners=function(){return ey(this)};Ye.prototype.emit=function(t){for(var r=[],o=1;o<arguments.length;o++)r.push(arguments[o]);var n=t==="error",i=this._events;if(i!==void 0)n=n&&i.error===void 0;else if(!n)return!1;if(n){var s;if(r.length>0&&(s=r[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=i[t];if(l===void 0)return!1;if(typeof l=="function")Qp(l,this,r);else for(var c=l.length,u=iy(l,c),o=0;o<c;++o)Qp(u[o],this,r);return!0};function ty(e,t,r,o){var n,i,s;if(oc(r),i=e._events,i===void 0?(i=e._events=Object.create(null),e._eventsCount=0):(i.newListener!==void 0&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),s=i[t]),s===void 0)s=i[t]=r,++e._eventsCount;else if(typeof s=="function"?s=i[t]=o?[r,s]:[s,r]:o?s.unshift(r):s.push(r),n=ey(e),n>0&&s.length>n&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,$M(a)}return e}Ye.prototype.addListener=function(t,r){return ty(this,t,r,!1)};Ye.prototype.on=Ye.prototype.addListener;Ye.prototype.prependListener=function(t,r){return ty(this,t,r,!0)};function PM(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function ry(e,t,r){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},n=PM.bind(o);return n.listener=r,o.wrapFn=n,n}Ye.prototype.once=function(t,r){return oc(r),this.on(t,ry(this,t,r)),this};Ye.prototype.prependOnceListener=function(t,r){return oc(r),this.prependListener(t,ry(this,t,r)),this};Ye.prototype.removeListener=function(t,r){var o,n,i,s,a;if(oc(r),n=this._events,n===void 0)return this;if(o=n[t],o===void 0)return this;if(o===r||o.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,o.listener||r));else if(typeof o!="function"){for(i=-1,s=o.length-1;s>=0;s--)if(o[s]===r||o[s].listener===r){a=o[s].listener,i=s;break}if(i<0)return this;i===0?o.shift():LM(o,i),o.length===1&&(n[t]=o[0]),n.removeListener!==void 0&&this.emit("removeListener",t,a||r)}return this};Ye.prototype.off=Ye.prototype.removeListener;Ye.prototype.removeAllListeners=function(t){var r,o,n;if(o=this._events,o===void 0)return this;if(o.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):o[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete o[t]),this;if(arguments.length===0){var i=Object.keys(o),s;for(n=0;n<i.length;++n)s=i[n],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=o[t],typeof r=="function")this.removeListener(t,r);else if(r!==void 0)for(n=r.length-1;n>=0;n--)this.removeListener(t,r[n]);return this};function oy(e,t,r){var o=e._events;if(o===void 0)return[];var n=o[t];return n===void 0?[]:typeof n=="function"?r?[n.listener||n]:[n]:r?kM(n):iy(n,n.length)}Ye.prototype.listeners=function(t){return oy(this,t,!0)};Ye.prototype.rawListeners=function(t){return oy(this,t,!1)};Ye.listenerCount=function(e,t){return typeof e.listenerCount=="function"?e.listenerCount(t):ny.call(e,t)};Ye.prototype.listenerCount=ny;function ny(e){var t=this._events;if(t!==void 0){var r=t[e];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}Ye.prototype.eventNames=function(){return this._eventsCount>0?Ja(this._events):[]};function iy(e,t){for(var r=new Array(t),o=0;o<t;++o)r[o]=e[o];return r}function LM(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function kM(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}function IM(e,t){return new Promise(function(r,o){function n(s){e.removeListener(t,i),o(s)}function i(){typeof e.removeListener=="function"&&e.removeListener("error",n),r([].slice.call(arguments))}sy(e,t,i,{once:!0}),t!=="error"&&RM(e,n,{once:!0})})}function RM(e,t,r){typeof e.on=="function"&&sy(e,"error",t,r)}function sy(e,t,r,o){if(typeof e.on=="function")o.once?e.once(t,r):e.on(t,r);else if(typeof e.addEventListener=="function")e.addEventListener(t,function n(i){o.once&&e.removeEventListener(t,n),r(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}let tf={};const Vn=new Dn.exports.EventEmitter;Vn.setMaxListeners(1e3);function rf(e,t,r=bl,...o){WM(r,bl);try{return ly(e,r)}catch{return OM(e,t,r,o)}}const Qa=Symbol("noCache"),tg=Symbol("skip");function OM(e,t,r,o){const n=i=>(js(e,i,r),i);return r.requestMerge?AM(e,t,r,o):ay(e,t,r,o,i=>i.then(n,r.cacheError?n:void 0))}function AM(e,t,r,o){const n=`res:${e}`,i=`rej:${e}`,s=c=>Vn.emit(n,c),a=c=>Vn.emit(i,c),l=()=>new Promise((c,u)=>{Vn.once(n,c),Vn.once(i,u)});return Vn.listenerCount(n)>0?l():ay(e,t,r,o,c=>(c.then(u=>{js(e,u,r),s(u)},u=>{r.cacheError&&js(e,u,r),a(u)}),l()))}function ay(e,t,r,o,n){const i=t(...o);return UM(i)?n(i):(js(e,i,r),i)}function ly(e,t=bl){try{if(!t.useMemoryCache)throw tg;return MM(e)}catch{if(!t.useLocalStorage)throw tg;return BM(e)}}function J9(e,t){try{return ly(e,t)}catch{return null}}function js(e,t,r){const o=xM(t,r==null?void 0:r.duration);r!=null&&r.useMemoryCache&&NM(e,o),r!=null&&r.useLocalStorage&&jM(e,o)}function MM(e){const t=tf[e];return of(t),t.value}function BM(e){const t=FM(e);try{const r=rc(t);return of(r),r.value}catch(r){throw na.deleteCacheKey(e),r}}function HM(e){zM(e),DM(e)}function DM(e){delete tf[e]}function zM(e){na.deleteCacheKey(e),localStorage.removeItem(e)}function FM(e){const t=localStorage.getItem(e);if(!t)throw Qa;return t}function NM(e,t){tf[e]=t}function jM(e,t){na.addCacheKey(e),localStorage.setItem(e,CM(t))}function Q9(e){localStorage.removeItem(e)}function of(e){if(!e)throw Qa;const t=Date.now(),r=e.updateTime,o=e.duration;try{if(!(t-r<o))throw Qa}catch{throw Qa}}function nf(e){return!(!e||typeof e!="object"||typeof e.updateTime!="number"||typeof e.duration!="number")}function eN(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var t=document.createElement("textarea");document.body.appendChild(t),t.style.position="fixed",t.style.clip="rect(0 0 0 0)",t.style.top="10px",t.value=e,t.select(),document.execCommand("copy",!0),document.body.removeChild(t)}}function rg(){return Math.floor(Date.now()/1e3)}function WM(e,t){var r;if(!e)return{...t};if(!t)return e;for(const o in t)(r=e[o])!=null||(e[o]=t[o]);return e}async function ku(e=0){return new Promise((t,r)=>{setTimeout(()=>{t()},e)})}function UM(e){return!!e&&typeof e.then=="function"}function VM(){return Math.random().toString().slice(2)}function cy(e,t=1e3,r=t*4){if(t<=0)return e;let o,n;const i=(...s)=>{clearTimeout(o),o=setTimeout(()=>{clearTimeout(n),e(...s)},t),n=setTimeout(()=>{clearTimeout(o),e(...s)},r)};return i.clear=()=>{clearTimeout(o)},i}function uy(e,t,...r){const o=e.length,n=a=>dy(e[a],r);if(t<n(0))return 0;if(t>n(o-1))return o;let i=0,s=o-1;for(;i<s;){let a=Math.floor(i+(s-i)/2);if(n(a)===t)return a;n(a)>t?s=a:i=a+1}return i}function KM(e,t,...r){const o=e.length,n=a=>dy(e[a],r);if(t>n(0))return 0;if(t<n(o-1))return o;let i=0,s=o-1;for(;i<s;){let a=Math.floor(i+(s-i)/2),l=n(a);if(l===t)return a;t>l?s=a:i=a+1}return s}function dy(e,t){return t.reduce((r,o)=>{if(r!==void 0)return r[o]},e)}function qM(e,t){const r=new Set;return t.forEach(o=>{!e.has(o)&&r.add(o)}),r}function GM(e,t){const r=e.indexOf(t);r!==-1&&e.splice(r,1)}function tN(...e){const t=new Set;for(const r of e)for(const o of r)t.add(o);return t}async function rN(e,t=2e3){const r=Date.now();return new Promise(async(o,n)=>{try{await fetch(`${window.location.protocol}//${e}/`,{mode:"no-cors"}),o(Date.now()-r)}catch(i){String(i).includes("Failed to fetch")?n("\u65E0\u6CD5\u8FDE\u63A5"):n("\u672A\u77E5\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5")}setTimeout(()=>{n(`\u8D85\u65F6:${Date.now()-r}`)},t)})}function XM(e,...t){for(const r of t)for(const o of r)e.add(o);return e}function oN(e,t,r=Ns.syncInterval){if(r===0){t();return}rf(JSON.stringify(e),()=>(t(),!0),{duration:r})}function YM(e){return e!==e}function nN(e){return typeof e=="number"&&!YM(e)}function iN(e,t,r){const o=ZM(e,t,r);return`rgb(${o*255},${255-o*255},${255})`}function ZM(e,t,r){return e>=r?1:e<=t?0:e/(r-t)}async function JM(e,t){return new Promise((r,o)=>{const n=new XMLHttpRequest;n.open(t.method,e),n.upload.onprogress=i=>{i.lengthComputable&&t.onProgress({percent:i.loaded/i.total*100})},n.onerror=i=>{o(i)},n.onabort=()=>{o("\u5DF2\u53D6\u6D88\u4E0A\u4F20")},n.upload.onabort=()=>{o("\u5DF2\u53D6\u6D88\u4E0A\u4F20")},n.onload=i=>{n.status===200&&r({text:i.target.responseText,event:i})},n.send(t.body)})}function sN(e=0){return{count:e,reduce(){this.count++},clear(){this.count=0},set(t){this.count=t}}}function aN(){return`#${Math.floor(Math.random()*16777216).toString(16).padStart(6,"0")}`}function QM(e=0){return{isRun:!1,queue:[],interval:e,run(){this.isRun=!0;const t=this.queue.pop();if(!t){this.isRun=!1;return}t.task(),setTimeout(()=>this.run(),this.interval)},unShift(t){this.insert(t,0),this._run()},insert(t,r){const o=uy(this.queue,r,"priority");this.queue.splice(o,0,{task:t,priority:r}),this._run()},_run(){this.isRun||this.run()}}}const fy=new Dn.exports,hy=V(null),os=V([]);function eB(){return hy}function tB(){return async e=>{var r;const t=os.value;os.value=[e],await ku(0),((r=hy.value)==null?void 0:r.submit).call(r),await ku(0),os.value=t,os.value.push(e)}}const ai=V(!1);function lN(){return{isShow:ai,show(){ai.value=!0},hidden(){ai.value=!1}}}const og=void 0;function py(){return et(ai,()=>{clearTimeout(og)}),()=>{clearTimeout(og),ai.value=!0,setTimeout(()=>{ai.value=!1},3e3)}}function cN(){const e=tB(),t=py();return async r=>new Promise((o,n)=>{t();const i={id:VM(),name:r.name,file:r,status:"pending"};fy.once(i.id,s=>{o(s)}),e(i)})}function rB(){return os}function oB(){const e=AO(),t=py();return async({file:o,data:n,headers:i,withCredentials:s,action:a,onFinish:l,onError:c,onProgress:u})=>{const d=new FormData;d.append("fileToUpload",o.file),JM("https://nostr.build/upload.php",{method:"post",body:d,onProgress:u}).then(({text:h})=>{const p=h,b=bM()[Symbol.match](p);if(!b)return Promise.reject("\u6CA1\u6709\u627E\u5230url");const y=b[0];if(!y)return Promise.reject("");o.url=y,l(),fy.emit(o.id,{file:o,url:y}),e.success("\u4E0A\u4F20\u6210\u529F"),t()}).catch(h=>{e.error("\u4E0A\u4F20\u5931\u8D25",h),console.error("\u4E0A\u4F20\u5931\u8D25",h),c()})}}const nB=be({__name:"UploadProvide",setup(e){const t=eB(),r=rB(),o=oB();return(n,i)=>{const s=EA;return vn(),yn(s,{abstract:"",ref_key:"uploadRef",ref:t,fileList:ur(r),"onUpdate:fileList":i[0]||(i[0]=a=>yt(r)?r.value=a:null),"show-preview-button":"","show-download-button":"","show-cancel-button":"","show-remove-button":"",customRequest:ur(o)},{default:Ir(()=>[md(n.$slots,"default")]),_:3},8,["fileList","customRequest"])}}});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window<"u";function iB(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function zc(e,t){const r={};for(const o in t){const n=t[o];r[o]=Er(n)?n.map(e):e(n)}return r}const ms=()=>{},Er=Array.isArray,sB=/\/$/,aB=e=>e.replace(sB,"");function Fc(e,t,r="/"){let o,n={},i="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(o=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),n=e(i)),a>-1&&(o=o||t.slice(0,a),s=t.slice(a,t.length)),o=dB(o!=null?o:t,r),{fullPath:o+(i&&"?")+i+s,path:o,query:n,hash:s}}function lB(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function ng(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cB(e,t,r){const o=t.matched.length-1,n=r.matched.length-1;return o>-1&&o===n&&vi(t.matched[o],r.matched[n])&&gy(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function vi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function gy(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!uB(e[r],t[r]))return!1;return!0}function uB(e,t){return Er(e)?ig(e,t):Er(t)?ig(t,e):e===t}function ig(e,t){return Er(t)?e.length===t.length&&e.every((r,o)=>r===t[o]):e.length===1&&e[0]===t}function dB(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),o=e.split("/");let n=r.length-1,i,s;for(i=0;i<o.length;i++)if(s=o[i],s!==".")if(s==="..")n>1&&n--;else break;return r.slice(0,n).join("/")+"/"+o.slice(i-(i===o.length?1:0)).join("/")}var Ws;(function(e){e.pop="pop",e.push="push"})(Ws||(Ws={}));var bs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bs||(bs={}));function fB(e){if(!e)if(Kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),aB(e)}const hB=/^[^#]+#/;function pB(e,t){return e.replace(hB,"#")+t}function gB(e,t){const r=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-r.left-(t.left||0),top:o.top-r.top-(t.top||0)}}const nc=()=>({left:window.pageXOffset,top:window.pageYOffset});function mB(e){let t;if("el"in e){const r=e.el,o=typeof r=="string"&&r.startsWith("#"),n=typeof r=="string"?o?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!n)return;t=gB(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function sg(e,t){return(history.state?history.state.position-t:-1)+e}const Iu=new Map;function bB(e,t){Iu.set(e,t)}function vB(e){const t=Iu.get(e);return Iu.delete(e),t}let yB=()=>location.protocol+"//"+location.host;function my(e,t){const{pathname:r,search:o,hash:n}=t,i=e.indexOf("#");if(i>-1){let a=n.includes(e.slice(i))?e.slice(i).length:1,l=n.slice(a);return l[0]!=="/"&&(l="/"+l),ng(l,"")}return ng(r,e)+o+n}function xB(e,t,r,o){let n=[],i=[],s=null;const a=({state:f})=>{const h=my(e,location),p=r.value,b=t.value;let y=0;if(f){if(r.value=h,t.value=f,s&&s===p){s=null;return}y=b?f.position-b.position:0}else o(h);n.forEach(g=>{g(r.value,p,{delta:y,type:Ws.pop,direction:y?y>0?bs.forward:bs.back:bs.unknown})})};function l(){s=r.value}function c(f){n.push(f);const h=()=>{const p=n.indexOf(f);p>-1&&n.splice(p,1)};return i.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(Ke({},f.state,{scroll:nc()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function ag(e,t,r,o=!1,n=!1){return{back:e,current:t,forward:r,replaced:o,position:window.history.length,scroll:n?nc():null}}function CB(e){const{history:t,location:r}=window,o={value:my(e,r)},n={value:t.state};n.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=e.indexOf("#"),f=d>-1?(r.host&&document.querySelector("base")?e:e.slice(d))+l:yB()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),n.value=c}catch(h){console.error(h),r[u?"replace":"assign"](f)}}function s(l,c){const u=Ke({},t.state,ag(n.value.back,l,n.value.forward,!0),c,{position:n.value.position});i(l,u,!0),o.value=l}function a(l,c){const u=Ke({},n.value,t.state,{forward:l,scroll:nc()});i(u.current,u,!0);const d=Ke({},ag(o.value,l,null),{position:u.position+1},c);i(l,d,!1),o.value=l}return{location:o,state:n,push:a,replace:s}}function wB(e){e=fB(e);const t=CB(e),r=xB(e,t.state,t.location,t.replace);function o(i,s=!0){s||r.pauseListeners(),history.go(i)}const n=Ke({location:"",base:e,go:o,createHref:pB.bind(null,e)},t,r);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function SB(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wB(e)}function EB(e){return typeof e=="string"||e&&typeof e=="object"}function by(e){return typeof e=="string"||typeof e=="symbol"}const mo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vy=Symbol("");var lg;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(lg||(lg={}));function yi(e,t){return Ke(new Error,{type:e,[vy]:!0},t)}function qr(e,t){return e instanceof Error&&vy in e&&(t==null||!!(e.type&t))}const cg="[^/]+?",_B={sensitive:!1,strict:!1,start:!0,end:!0},TB=/[.+*?^${}()[\]/\\]/g;function $B(e,t){const r=Ke({},_B,t),o=[];let n=r.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];r.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(r.sensitive?.25:0);if(f.type===0)d||(n+="/"),n+=f.value.replace(TB,"\\$&"),h+=40;else if(f.type===1){const{value:p,repeatable:b,optional:y,regexp:g}=f;i.push({name:p,repeatable:b,optional:y});const w=g||cg;if(w!==cg){h+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+x.message)}}let T=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(T=y&&c.length<2?`(?:/${T})`:"/"+T),y&&(T+="?"),n+=T,h+=20,y&&(h+=-8),b&&(h+=-20),w===".*"&&(h+=-50)}u.push(h)}o.push(u)}if(r.strict&&r.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}r.strict||(n+="/?"),r.end?n+="$":r.strict&&(n+="(?:/|$)");const s=new RegExp(n,r.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",p=i[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:p,repeatable:b,optional:y}=h,g=p in c?c[p]:"";if(Er(g)&&!b)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Er(g)?g.join("/"):g;if(!w)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);u+=w}}return u||"/"}return{re:s,score:o,keys:i,parse:a,stringify:l}}function PB(e,t){let r=0;for(;r<e.length&&r<t.length;){const o=t[r]-e[r];if(o)return o;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function LB(e,t){let r=0;const o=e.score,n=t.score;for(;r<o.length&&r<n.length;){const i=PB(o[r],n[r]);if(i)return i;r++}if(Math.abs(n.length-o.length)===1){if(ug(o))return 1;if(ug(n))return-1}return n.length-o.length}function ug(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kB={type:0,value:""},IB=/[a-zA-Z0-9_]/;function RB(e){if(!e)return[[]];if(e==="/")return[[kB]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${r})/"${c}": ${h}`)}let r=0,o=r;const n=[];let i;function s(){i&&n.push(i),i=[]}let a=0,l,c="",u="";function d(){!c||(r===0?i.push({type:0,value:c}):r===1||r===2||r===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){o=r,r=4;continue}switch(r){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),r=1):f();break;case 4:f(),r=o;break;case 1:l==="("?r=2:IB.test(l)?f():(d(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=3:u+=l;break;case 3:d(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),s(),n}function OB(e,t,r){const o=$B(RB(e.path),r),n=Ke(o,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function AB(e,t){const r=[],o=new Map;t=hg({strict:!1,end:!0,sensitive:!1},t);function n(u){return o.get(u)}function i(u,d,f){const h=!f,p=MB(u);p.aliasOf=f&&f.record;const b=hg(t,u),y=[p];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of T)y.push(Ke({},p,{components:f?f.record.components:p.components,path:x,aliasOf:f?f.record:p}))}let g,w;for(const T of y){const{path:x}=T;if(d&&x[0]!=="/"){const C=d.record.path,$=C[C.length-1]==="/"?"":"/";T.path=d.record.path+(x&&$+x)}if(g=OB(T,d,b),f?f.alias.push(g):(w=w||g,w!==g&&w.alias.push(g),h&&u.name&&!fg(g)&&s(u.name)),p.children){const C=p.children;for(let $=0;$<C.length;$++)i(C[$],g,f&&f.children[$])}f=f||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&l(g)}return w?()=>{s(w)}:ms}function s(u){if(by(u)){const d=o.get(u);d&&(o.delete(u),r.splice(r.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=r.indexOf(u);d>-1&&(r.splice(d,1),u.record.name&&o.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return r}function l(u){let d=0;for(;d<r.length&&LB(u,r[d])>=0&&(u.record.path!==r[d].record.path||!yy(u,r[d]));)d++;r.splice(d,0,u),u.record.name&&!fg(u)&&o.set(u.record.name,u)}function c(u,d){let f,h={},p,b;if("name"in u&&u.name){if(f=o.get(u.name),!f)throw yi(1,{location:u});b=f.record.name,h=Ke(dg(d.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&dg(u.params,f.keys.map(w=>w.name))),p=f.stringify(h)}else if("path"in u)p=u.path,f=r.find(w=>w.re.test(p)),f&&(h=f.parse(p),b=f.record.name);else{if(f=d.name?o.get(d.name):r.find(w=>w.re.test(d.path)),!f)throw yi(1,{location:u,currentLocation:d});b=f.record.name,h=Ke({},d.params,u.params),p=f.stringify(h)}const y=[];let g=f;for(;g;)y.unshift(g.record),g=g.parent;return{name:b,path:p,params:h,matched:y,meta:HB(y)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:n}}function dg(e,t){const r={};for(const o of t)o in e&&(r[o]=e[o]);return r}function MB(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:BB(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function BB(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const o in e.components)t[o]=typeof r=="boolean"?r:r[o];return t}function fg(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function HB(e){return e.reduce((t,r)=>Ke(t,r.meta),{})}function hg(e,t){const r={};for(const o in e)r[o]=o in t?t[o]:e[o];return r}function yy(e,t){return t.children.some(r=>r===e||yy(e,r))}const xy=/#/g,DB=/&/g,zB=/\//g,FB=/=/g,NB=/\?/g,Cy=/\+/g,jB=/%5B/g,WB=/%5D/g,wy=/%5E/g,UB=/%60/g,Sy=/%7B/g,VB=/%7C/g,Ey=/%7D/g,KB=/%20/g;function sf(e){return encodeURI(""+e).replace(VB,"|").replace(jB,"[").replace(WB,"]")}function qB(e){return sf(e).replace(Sy,"{").replace(Ey,"}").replace(wy,"^")}function Ru(e){return sf(e).replace(Cy,"%2B").replace(KB,"+").replace(xy,"%23").replace(DB,"%26").replace(UB,"`").replace(Sy,"{").replace(Ey,"}").replace(wy,"^")}function GB(e){return Ru(e).replace(FB,"%3D")}function XB(e){return sf(e).replace(xy,"%23").replace(NB,"%3F")}function YB(e){return e==null?"":XB(e).replace(zB,"%2F")}function vl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ZB(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<o.length;++n){const i=o[n].replace(Cy," "),s=i.indexOf("="),a=vl(s<0?i:i.slice(0,s)),l=s<0?null:vl(i.slice(s+1));if(a in t){let c=t[a];Er(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function pg(e){let t="";for(let r in e){const o=e[r];if(r=GB(r),o==null){o!==void 0&&(t+=(t.length?"&":"")+r);continue}(Er(o)?o.map(i=>i&&Ru(i)):[o&&Ru(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+r,i!=null&&(t+="="+i))})}return t}function JB(e){const t={};for(const r in e){const o=e[r];o!==void 0&&(t[r]=Er(o)?o.map(n=>n==null?null:""+n):o==null?o:""+o)}return t}const QB=Symbol(""),gg=Symbol(""),ic=Symbol(""),af=Symbol(""),Ou=Symbol("");function Xi(){let e=[];function t(o){return e.push(o),()=>{const n=e.indexOf(o);n>-1&&e.splice(n,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function Po(e,t,r,o,n){const i=o&&(o.enterCallbacks[n]=o.enterCallbacks[n]||[]);return()=>new Promise((s,a)=>{const l=d=>{d===!1?a(yi(4,{from:r,to:t})):d instanceof Error?a(d):EB(d)?a(yi(2,{from:t,to:d})):(i&&o.enterCallbacks[n]===i&&typeof d=="function"&&i.push(d),s())},c=e.call(o&&o.instances[n],t,r,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Nc(e,t,r,o){const n=[];for(const i of e)for(const s in i.components){let a=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(eH(a)){const c=(a.__vccOpts||a)[t];c&&n.push(Po(c,r,o,i,s))}else{let l=a();n.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const u=iB(c)?c.default:c;i.components[s]=u;const f=(u.__vccOpts||u)[t];return f&&Po(f,r,o,i,s)()}))}}return n}function eH(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mg(e){const t=Se(ic),r=Se(af),o=K(()=>t.resolve(ur(e.to))),n=K(()=>{const{matched:l}=o.value,{length:c}=l,u=l[c-1],d=r.matched;if(!u||!d.length)return-1;const f=d.findIndex(vi.bind(null,u));if(f>-1)return f;const h=bg(l[c-2]);return c>1&&bg(u)===h&&d[d.length-1].path!==h?d.findIndex(vi.bind(null,l[c-2])):f}),i=K(()=>n.value>-1&&nH(r.params,o.value.params)),s=K(()=>n.value>-1&&n.value===r.matched.length-1&&gy(r.params,o.value.params));function a(l={}){return oH(l)?t[ur(e.replace)?"replace":"push"](ur(e.to)).catch(ms):Promise.resolve()}return{route:o,href:K(()=>o.value.href),isActive:i,isExactActive:s,navigate:a}}const tH=be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mg,setup(e,{slots:t}){const r=qt(mg(e)),{options:o}=Se(ic),n=K(()=>({[vg(e.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[vg(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=t.default&&t.default(r);return e.custom?i:E("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:n.value},i)}}}),rH=tH;function oH(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nH(e,t){for(const r in t){const o=t[r],n=e[r];if(typeof o=="string"){if(o!==n)return!1}else if(!Er(n)||n.length!==o.length||o.some((i,s)=>i!==n[s]))return!1}return!0}function bg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const vg=(e,t,r)=>e!=null?e:t!=null?t:r,iH=be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const o=Se(Ou),n=K(()=>e.route||o.value),i=Se(gg,0),s=K(()=>{let c=ur(i);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=K(()=>n.value.matched[s.value]);qe(gg,K(()=>s.value+1)),qe(QB,a),qe(Ou,n);const l=V();return et(()=>[l.value,a.value,e.name],([c,u,d],[f,h,p])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!vi(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=n.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return yg(r.default,{Component:f,route:c});const h=d.props[u],p=h?h===!0?c.params:typeof h=="function"?h(c):h:null,y=E(f,Ke({},p,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return yg(r.default,{Component:y,route:c})||y}}});function yg(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const sH=iH;function aH(e){const t=AB(e.routes,e),r=e.parseQuery||ZB,o=e.stringifyQuery||pg,n=e.history,i=Xi(),s=Xi(),a=Xi(),l=ld(mo);let c=mo;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zc.bind(null,N=>""+N),d=zc.bind(null,YB),f=zc.bind(null,vl);function h(N,J){let te,de;return by(N)?(te=t.getRecordMatcher(N),de=J):de=N,t.addRoute(de,te)}function p(N){const J=t.getRecordMatcher(N);J&&t.removeRoute(J)}function b(){return t.getRoutes().map(N=>N.record)}function y(N){return!!t.getRecordMatcher(N)}function g(N,J){if(J=Ke({},J||l.value),typeof N=="string"){const _=Fc(r,N,J.path),m=t.resolve({path:_.path},J),v=n.createHref(_.fullPath);return Ke(_,m,{params:f(m.params),hash:vl(_.hash),redirectedFrom:void 0,href:v})}let te;if("path"in N)te=Ke({},N,{path:Fc(r,N.path,J.path).path});else{const _=Ke({},N.params);for(const m in _)_[m]==null&&delete _[m];te=Ke({},N,{params:d(N.params)}),J.params=d(J.params)}const de=t.resolve(te,J),ae=N.hash||"";de.params=u(f(de.params));const Te=lB(o,Ke({},N,{hash:qB(ae),path:de.path})),me=n.createHref(Te);return Ke({fullPath:Te,hash:ae,query:o===pg?JB(N.query):N.query||{}},de,{redirectedFrom:void 0,href:me})}function w(N){return typeof N=="string"?Fc(r,N,l.value.path):Ke({},N)}function T(N,J){if(c!==N)return yi(8,{from:J,to:N})}function x(N){return S(N)}function C(N){return x(Ke(w(N),{replace:!0}))}function $(N){const J=N.matched[N.matched.length-1];if(J&&J.redirect){const{redirect:te}=J;let de=typeof te=="function"?te(N):te;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=w(de):{path:de},de.params={}),Ke({query:N.query,hash:N.hash,params:"path"in de?{}:N.params},de)}}function S(N,J){const te=c=g(N),de=l.value,ae=N.state,Te=N.force,me=N.replace===!0,_=$(te);if(_)return S(Ke(w(_),{state:typeof _=="object"?Ke({},ae,_.state):ae,force:Te,replace:me}),J||te);const m=te;m.redirectedFrom=J;let v;return!Te&&cB(o,de,te)&&(v=yi(16,{to:m,from:de}),Le(de,de,!0,!1)),(v?Promise.resolve(v):k(m,de)).catch(P=>qr(P)?qr(P,2)?P:ve(P):Z(P,m,de)).then(P=>{if(P){if(qr(P,2))return S(Ke({replace:me},w(P.to),{state:typeof P.to=="object"?Ke({},ae,P.to.state):ae,force:Te}),J||m)}else P=H(m,de,!0,me,ae);return R(m,de,P),P})}function L(N,J){const te=T(N,J);return te?Promise.reject(te):Promise.resolve()}function k(N,J){let te;const[de,ae,Te]=lH(N,J);te=Nc(de.reverse(),"beforeRouteLeave",N,J);for(const _ of de)_.leaveGuards.forEach(m=>{te.push(Po(m,N,J))});const me=L.bind(null,N,J);return te.push(me),Wn(te).then(()=>{te=[];for(const _ of i.list())te.push(Po(_,N,J));return te.push(me),Wn(te)}).then(()=>{te=Nc(ae,"beforeRouteUpdate",N,J);for(const _ of ae)_.updateGuards.forEach(m=>{te.push(Po(m,N,J))});return te.push(me),Wn(te)}).then(()=>{te=[];for(const _ of N.matched)if(_.beforeEnter&&!J.matched.includes(_))if(Er(_.beforeEnter))for(const m of _.beforeEnter)te.push(Po(m,N,J));else te.push(Po(_.beforeEnter,N,J));return te.push(me),Wn(te)}).then(()=>(N.matched.forEach(_=>_.enterCallbacks={}),te=Nc(Te,"beforeRouteEnter",N,J),te.push(me),Wn(te))).then(()=>{te=[];for(const _ of s.list())te.push(Po(_,N,J));return te.push(me),Wn(te)}).catch(_=>qr(_,8)?_:Promise.reject(_))}function R(N,J,te){for(const de of a.list())de(N,J,te)}function H(N,J,te,de,ae){const Te=T(N,J);if(Te)return Te;const me=J===mo,_=Kn?history.state:{};te&&(de||me?n.replace(N.fullPath,Ke({scroll:me&&_&&_.scroll},ae)):n.push(N.fullPath,ae)),l.value=N,Le(N,J,te,me),ve()}let A;function q(){A||(A=n.listen((N,J,te)=>{if(!Ue.listening)return;const de=g(N),ae=$(de);if(ae){S(Ke(ae,{replace:!0}),de).catch(ms);return}c=de;const Te=l.value;Kn&&bB(sg(Te.fullPath,te.delta),nc()),k(de,Te).catch(me=>qr(me,12)?me:qr(me,2)?(S(me.to,de).then(_=>{qr(_,20)&&!te.delta&&te.type===Ws.pop&&n.go(-1,!1)}).catch(ms),Promise.reject()):(te.delta&&n.go(-te.delta,!1),Z(me,de,Te))).then(me=>{me=me||H(de,Te,!1),me&&(te.delta&&!qr(me,8)?n.go(-te.delta,!1):te.type===Ws.pop&&qr(me,20)&&n.go(-1,!1)),R(de,Te,me)}).catch(ms)}))}let F=Xi(),ee=Xi(),Y;function Z(N,J,te){ve(N);const de=ee.list();return de.length?de.forEach(ae=>ae(N,J,te)):console.error(N),Promise.reject(N)}function se(){return Y&&l.value!==mo?Promise.resolve():new Promise((N,J)=>{F.add([N,J])})}function ve(N){return Y||(Y=!N,q(),F.list().forEach(([J,te])=>N?te(N):J()),F.reset()),N}function Le(N,J,te,de){const{scrollBehavior:ae}=e;if(!Kn||!ae)return Promise.resolve();const Te=!te&&vB(sg(N.fullPath,0))||(de||!te)&&history.state&&history.state.scroll||null;return Dt().then(()=>ae(N,J,Te)).then(me=>me&&mB(me)).catch(me=>Z(me,N,J))}const _e=N=>n.go(N);let Ae;const ut=new Set,Ue={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,hasRoute:y,getRoutes:b,resolve:g,options:e,push:x,replace:C,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:ee.add,isReady:se,install(N){const J=this;N.component("RouterLink",rH),N.component("RouterView",sH),N.config.globalProperties.$router=J,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ur(l)}),Kn&&!Ae&&l.value===mo&&(Ae=!0,x(n.location).catch(ae=>{}));const te={};for(const ae in mo)te[ae]=K(()=>l.value[ae]);N.provide(ic,J),N.provide(af,qt(te)),N.provide(Ou,l);const de=N.unmount;ut.add(N),N.unmount=function(){ut.delete(N),ut.size<1&&(c=mo,A&&A(),A=null,l.value=mo,Ae=!1,Y=!1),de()}}};return Ue}function Wn(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function lH(e,t){const r=[],o=[],n=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=t.matched[s];a&&(e.matched.find(c=>vi(c,a))?o.push(a):r.push(a));const l=e.matched[s];l&&(t.matched.find(c=>vi(c,l))||n.push(l))}return[r,o,n]}function cH(){return Se(ic)}function uN(){return Se(af)}const uH=be({__name:"Main",setup(e){const t=cH(),r=TO();return t.beforeEach(()=>{r.start()}),t.afterEach(()=>{r.finish()}),(o,n)=>{const i=Cw("router-view");return vn(),yn(i,null,{default:Ir(({Component:s})=>[(vn(),yn(pw,null,[(vn(),yn(ww(s)))],1024))]),_:1})}}}),dH={class:"container"},fH={class:"w-full h-screen overflow-hidden"},hH=be({__name:"App",setup(e){return logger.for("app.vue").info("\u8FDB\u5165app.vue"),(t,r)=>{const o=_O,n=UO,i=OO,s=X8;return vn(),yn(ur(NL),{theme:ur(Lu)},{default:Ir(()=>{var a;return[cs("div",{class:"body",style:Pi({backgroundColor:(a=ur(Lu))==null?void 0:a.common.bodyColor})},[cs("div",dH,[cs("div",fH,[ct(s,null,{default:Ir(()=>[ct(i,null,{default:Ir(()=>[ct(n,{placement:"bottom"},{default:Ir(()=>[ct(o,null,{default:Ir(()=>[ct(mM,null,{default:Ir(()=>[ct(nB,null,{default:Ir(()=>[ct(uH)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])],4)]}),_:1},8,["theme"])}}});const pH=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r},gH=pH(hH,[["__scopeId","data-v-08c8a36b"]]),mH="modulepreload",bH=function(e,t){return new URL(e,t).href},xg={},Ze=function(t,r,o){if(!r||r.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=bH(i,o),i in xg)return;xg[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!o)for(let u=n.length-1;u>=0;u--){const d=n[u];if(d.href===i&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":mH,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},vH=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const yH=typeof window<"u",xH=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Xo=e=>xH?Symbol(e):e,CH=(e,t,r)=>wH({l:e,k:t,s:r}),wH=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Et=e=>typeof e=="number"&&isFinite(e),SH=e=>cf(e)==="[object Date]",Uo=e=>cf(e)==="[object RegExp]",sc=e=>Pe(e)&&Object.keys(e).length===0;function EH(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const _t=Object.assign;function Cg(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _H=Object.prototype.hasOwnProperty;function lf(e,t){return _H.call(e,t)}const rt=Array.isArray,gt=e=>typeof e=="function",fe=e=>typeof e=="string",Fe=e=>typeof e=="boolean",ot=e=>e!==null&&typeof e=="object",_y=Object.prototype.toString,cf=e=>_y.call(e),Pe=e=>cf(e)==="[object Object]",TH=e=>e==null?"":rt(e)||Pe(e)&&e.toString===_y?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const je={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function ac(e,t,r={}){const{domain:o,messages:n,args:i}=r,s=e,a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=o,a}function $H(e){throw e}function PH(e,t,r){return{line:e,column:t,offset:r}}function Au(e,t,r){const o={start:e,end:t};return r!=null&&(o.source=r),o}const Gr=" ",LH="\r",Ht=`
`,kH=String.fromCharCode(8232),IH=String.fromCharCode(8233);function RH(e){const t=e;let r=0,o=1,n=1,i=0;const s=S=>t[S]===LH&&t[S+1]===Ht,a=S=>t[S]===Ht,l=S=>t[S]===IH,c=S=>t[S]===kH,u=S=>s(S)||a(S)||l(S)||c(S),d=()=>r,f=()=>o,h=()=>n,p=()=>i,b=S=>s(S)||l(S)||c(S)?Ht:t[S],y=()=>b(r),g=()=>b(r+i);function w(){return i=0,u(r)&&(o++,n=0),s(r)&&r++,r++,n++,t[r]}function T(){return s(r+i)&&i++,i++,t[r+i]}function x(){r=0,o=1,n=1,i=0}function C(S=0){i=S}function $(){const S=r+i;for(;S!==r;)w();i=0}return{index:d,line:f,column:h,peekOffset:p,charAt:b,currentChar:y,currentPeek:g,next:w,peek:T,reset:x,resetPeek:C,skipToPeek:$}}const bo=void 0,wg="'",OH="tokenizer";function AH(e,t={}){const r=t.location!==!1,o=RH(e),n=()=>o.index(),i=()=>PH(o.line(),o.column(),o.index()),s=i(),a=n(),l={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=t;function d(m,v,P,...I){const M=c();if(v.column+=P,v.offset+=P,u){const U=Au(M.startLoc,v),X=ac(m,U,{domain:OH,args:I});u(X)}}function f(m,v,P){m.endLoc=i(),m.currentType=v;const I={type:v};return r&&(I.loc=Au(m.startLoc,m.endLoc)),P!=null&&(I.value=P),I}const h=m=>f(m,14);function p(m,v){return m.currentChar()===v?(m.next(),v):(d(je.EXPECTED_TOKEN,i(),0,v),"")}function b(m){let v="";for(;m.currentPeek()===Gr||m.currentPeek()===Ht;)v+=m.currentPeek(),m.peek();return v}function y(m){const v=b(m);return m.skipToPeek(),v}function g(m){if(m===bo)return!1;const v=m.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v===95}function w(m){if(m===bo)return!1;const v=m.charCodeAt(0);return v>=48&&v<=57}function T(m,v){const{currentType:P}=v;if(P!==2)return!1;b(m);const I=g(m.currentPeek());return m.resetPeek(),I}function x(m,v){const{currentType:P}=v;if(P!==2)return!1;b(m);const I=m.currentPeek()==="-"?m.peek():m.currentPeek(),M=w(I);return m.resetPeek(),M}function C(m,v){const{currentType:P}=v;if(P!==2)return!1;b(m);const I=m.currentPeek()===wg;return m.resetPeek(),I}function $(m,v){const{currentType:P}=v;if(P!==8)return!1;b(m);const I=m.currentPeek()===".";return m.resetPeek(),I}function S(m,v){const{currentType:P}=v;if(P!==9)return!1;b(m);const I=g(m.currentPeek());return m.resetPeek(),I}function L(m,v){const{currentType:P}=v;if(!(P===8||P===12))return!1;b(m);const I=m.currentPeek()===":";return m.resetPeek(),I}function k(m,v){const{currentType:P}=v;if(P!==10)return!1;const I=()=>{const U=m.currentPeek();return U==="{"?g(m.peek()):U==="@"||U==="%"||U==="|"||U===":"||U==="."||U===Gr||!U?!1:U===Ht?(m.peek(),I()):g(U)},M=I();return m.resetPeek(),M}function R(m){b(m);const v=m.currentPeek()==="|";return m.resetPeek(),v}function H(m){const v=b(m),P=m.currentPeek()==="%"&&m.peek()==="{";return m.resetPeek(),{isModulo:P,hasSpace:v.length>0}}function A(m,v=!0){const P=(M=!1,U="",X=!1)=>{const W=m.currentPeek();return W==="{"?U==="%"?!1:M:W==="@"||!W?U==="%"?!0:M:W==="%"?(m.peek(),P(M,"%",!0)):W==="|"?U==="%"||X?!0:!(U===Gr||U===Ht):W===Gr?(m.peek(),P(!0,Gr,X)):W===Ht?(m.peek(),P(!0,Ht,X)):!0},I=P();return v&&m.resetPeek(),I}function q(m,v){const P=m.currentChar();return P===bo?bo:v(P)?(m.next(),P):null}function F(m){return q(m,P=>{const I=P.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I>=48&&I<=57||I===95||I===36})}function ee(m){return q(m,P=>{const I=P.charCodeAt(0);return I>=48&&I<=57})}function Y(m){return q(m,P=>{const I=P.charCodeAt(0);return I>=48&&I<=57||I>=65&&I<=70||I>=97&&I<=102})}function Z(m){let v="",P="";for(;v=ee(m);)P+=v;return P}function se(m){y(m);const v=m.currentChar();return v!=="%"&&d(je.EXPECTED_TOKEN,i(),0,v),m.next(),"%"}function ve(m){let v="";for(;;){const P=m.currentChar();if(P==="{"||P==="}"||P==="@"||P==="|"||!P)break;if(P==="%")if(A(m))v+=P,m.next();else break;else if(P===Gr||P===Ht)if(A(m))v+=P,m.next();else{if(R(m))break;v+=P,m.next()}else v+=P,m.next()}return v}function Le(m){y(m);let v="",P="";for(;v=F(m);)P+=v;return m.currentChar()===bo&&d(je.UNTERMINATED_CLOSING_BRACE,i(),0),P}function _e(m){y(m);let v="";return m.currentChar()==="-"?(m.next(),v+=`-${Z(m)}`):v+=Z(m),m.currentChar()===bo&&d(je.UNTERMINATED_CLOSING_BRACE,i(),0),v}function Ae(m){y(m),p(m,"'");let v="",P="";const I=U=>U!==wg&&U!==Ht;for(;v=q(m,I);)v==="\\"?P+=ut(m):P+=v;const M=m.currentChar();return M===Ht||M===bo?(d(je.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),M===Ht&&(m.next(),p(m,"'")),P):(p(m,"'"),P)}function ut(m){const v=m.currentChar();switch(v){case"\\":case"'":return m.next(),`\\${v}`;case"u":return Ue(m,v,4);case"U":return Ue(m,v,6);default:return d(je.UNKNOWN_ESCAPE_SEQUENCE,i(),0,v),""}}function Ue(m,v,P){p(m,v);let I="";for(let M=0;M<P;M++){const U=Y(m);if(!U){d(je.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${v}${I}${m.currentChar()}`);break}I+=U}return`\\${v}${I}`}function N(m){y(m);let v="",P="";const I=M=>M!=="{"&&M!=="}"&&M!==Gr&&M!==Ht;for(;v=q(m,I);)P+=v;return P}function J(m){let v="",P="";for(;v=F(m);)P+=v;return P}function te(m){const v=(P=!1,I)=>{const M=m.currentChar();return M==="{"||M==="%"||M==="@"||M==="|"||!M||M===Gr?I:M===Ht?(I+=M,m.next(),v(P,I)):(I+=M,m.next(),v(!0,I))};return v(!1,"")}function de(m){y(m);const v=p(m,"|");return y(m),v}function ae(m,v){let P=null;switch(m.currentChar()){case"{":return v.braceNest>=1&&d(je.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),m.next(),P=f(v,2,"{"),y(m),v.braceNest++,P;case"}":return v.braceNest>0&&v.currentType===2&&d(je.EMPTY_PLACEHOLDER,i(),0),m.next(),P=f(v,3,"}"),v.braceNest--,v.braceNest>0&&y(m),v.inLinked&&v.braceNest===0&&(v.inLinked=!1),P;case"@":return v.braceNest>0&&d(je.UNTERMINATED_CLOSING_BRACE,i(),0),P=Te(m,v)||h(v),v.braceNest=0,P;default:let M=!0,U=!0,X=!0;if(R(m))return v.braceNest>0&&d(je.UNTERMINATED_CLOSING_BRACE,i(),0),P=f(v,1,de(m)),v.braceNest=0,v.inLinked=!1,P;if(v.braceNest>0&&(v.currentType===5||v.currentType===6||v.currentType===7))return d(je.UNTERMINATED_CLOSING_BRACE,i(),0),v.braceNest=0,me(m,v);if(M=T(m,v))return P=f(v,5,Le(m)),y(m),P;if(U=x(m,v))return P=f(v,6,_e(m)),y(m),P;if(X=C(m,v))return P=f(v,7,Ae(m)),y(m),P;if(!M&&!U&&!X)return P=f(v,13,N(m)),d(je.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,P.value),y(m),P;break}return P}function Te(m,v){const{currentType:P}=v;let I=null;const M=m.currentChar();switch((P===8||P===9||P===12||P===10)&&(M===Ht||M===Gr)&&d(je.INVALID_LINKED_FORMAT,i(),0),M){case"@":return m.next(),I=f(v,8,"@"),v.inLinked=!0,I;case".":return y(m),m.next(),f(v,9,".");case":":return y(m),m.next(),f(v,10,":");default:return R(m)?(I=f(v,1,de(m)),v.braceNest=0,v.inLinked=!1,I):$(m,v)||L(m,v)?(y(m),Te(m,v)):S(m,v)?(y(m),f(v,12,J(m))):k(m,v)?(y(m),M==="{"?ae(m,v)||I:f(v,11,te(m))):(P===8&&d(je.INVALID_LINKED_FORMAT,i(),0),v.braceNest=0,v.inLinked=!1,me(m,v))}}function me(m,v){let P={type:14};if(v.braceNest>0)return ae(m,v)||h(v);if(v.inLinked)return Te(m,v)||h(v);switch(m.currentChar()){case"{":return ae(m,v)||h(v);case"}":return d(je.UNBALANCED_CLOSING_BRACE,i(),0),m.next(),f(v,3,"}");case"@":return Te(m,v)||h(v);default:if(R(m))return P=f(v,1,de(m)),v.braceNest=0,v.inLinked=!1,P;const{isModulo:M,hasSpace:U}=H(m);if(M)return U?f(v,0,ve(m)):f(v,4,se(m));if(A(m))return f(v,0,ve(m));break}return P}function _(){const{currentType:m,offset:v,startLoc:P,endLoc:I}=l;return l.lastType=m,l.lastOffset=v,l.lastStartLoc=P,l.lastEndLoc=I,l.offset=n(),l.startLoc=i(),o.currentChar()===bo?f(l,14):me(o,l)}return{nextToken:_,currentOffset:n,currentPosition:i,context:c}}const MH="parser",BH=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function HH(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const o=parseInt(t||r,16);return o<=55295||o>=57344?String.fromCodePoint(o):"\uFFFD"}}}function DH(e={}){const t=e.location!==!1,{onError:r}=e;function o(g,w,T,x,...C){const $=g.currentPosition();if($.offset+=x,$.column+=x,r){const S=Au(T,$),L=ac(w,S,{domain:MH,args:C});r(L)}}function n(g,w,T){const x={type:g,start:w,end:w};return t&&(x.loc={start:T,end:T}),x}function i(g,w,T,x){g.end=w,x&&(g.type=x),t&&g.loc&&(g.loc.end=T)}function s(g,w){const T=g.context(),x=n(3,T.offset,T.startLoc);return x.value=w,i(x,g.currentOffset(),g.currentPosition()),x}function a(g,w){const T=g.context(),{lastOffset:x,lastStartLoc:C}=T,$=n(5,x,C);return $.index=parseInt(w,10),g.nextToken(),i($,g.currentOffset(),g.currentPosition()),$}function l(g,w){const T=g.context(),{lastOffset:x,lastStartLoc:C}=T,$=n(4,x,C);return $.key=w,g.nextToken(),i($,g.currentOffset(),g.currentPosition()),$}function c(g,w){const T=g.context(),{lastOffset:x,lastStartLoc:C}=T,$=n(9,x,C);return $.value=w.replace(BH,HH),g.nextToken(),i($,g.currentOffset(),g.currentPosition()),$}function u(g){const w=g.nextToken(),T=g.context(),{lastOffset:x,lastStartLoc:C}=T,$=n(8,x,C);return w.type!==12?(o(g,je.UNEXPECTED_EMPTY_LINKED_MODIFIER,T.lastStartLoc,0),$.value="",i($,x,C),{nextConsumeToken:w,node:$}):(w.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,Lr(w)),$.value=w.value||"",i($,g.currentOffset(),g.currentPosition()),{node:$})}function d(g,w){const T=g.context(),x=n(7,T.offset,T.startLoc);return x.value=w,i(x,g.currentOffset(),g.currentPosition()),x}function f(g){const w=g.context(),T=n(6,w.offset,w.startLoc);let x=g.nextToken();if(x.type===9){const C=u(g);T.modifier=C.node,x=C.nextConsumeToken||g.nextToken()}switch(x.type!==10&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(x)),x=g.nextToken(),x.type===2&&(x=g.nextToken()),x.type){case 11:x.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(x)),T.key=d(g,x.value||"");break;case 5:x.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(x)),T.key=l(g,x.value||"");break;case 6:x.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(x)),T.key=a(g,x.value||"");break;case 7:x.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(x)),T.key=c(g,x.value||"");break;default:o(g,je.UNEXPECTED_EMPTY_LINKED_KEY,w.lastStartLoc,0);const C=g.context(),$=n(7,C.offset,C.startLoc);return $.value="",i($,C.offset,C.startLoc),T.key=$,i(T,C.offset,C.startLoc),{nextConsumeToken:x,node:T}}return i(T,g.currentOffset(),g.currentPosition()),{node:T}}function h(g){const w=g.context(),T=w.currentType===1?g.currentOffset():w.offset,x=w.currentType===1?w.endLoc:w.startLoc,C=n(2,T,x);C.items=[];let $=null;do{const k=$||g.nextToken();switch($=null,k.type){case 0:k.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(k)),C.items.push(s(g,k.value||""));break;case 6:k.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(k)),C.items.push(a(g,k.value||""));break;case 5:k.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(k)),C.items.push(l(g,k.value||""));break;case 7:k.value==null&&o(g,je.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Lr(k)),C.items.push(c(g,k.value||""));break;case 8:const R=f(g);C.items.push(R.node),$=R.nextConsumeToken||null;break}}while(w.currentType!==14&&w.currentType!==1);const S=w.currentType===1?w.lastOffset:g.currentOffset(),L=w.currentType===1?w.lastEndLoc:g.currentPosition();return i(C,S,L),C}function p(g,w,T,x){const C=g.context();let $=x.items.length===0;const S=n(1,w,T);S.cases=[],S.cases.push(x);do{const L=h(g);$||($=L.items.length===0),S.cases.push(L)}while(C.currentType!==14);return $&&o(g,je.MUST_HAVE_MESSAGES_IN_PLURAL,T,0),i(S,g.currentOffset(),g.currentPosition()),S}function b(g){const w=g.context(),{offset:T,startLoc:x}=w,C=h(g);return w.currentType===14?C:p(g,T,x,C)}function y(g){const w=AH(g,_t({},e)),T=w.context(),x=n(0,T.offset,T.startLoc);return t&&x.loc&&(x.loc.source=g),x.body=b(w),T.currentType!==14&&o(w,je.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,g[T.offset]||""),i(x,w.currentOffset(),w.currentPosition()),x}return{parse:y}}function Lr(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"\u2026":t}function zH(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:i=>(r.helpers.add(i),i)}}function Sg(e,t){for(let r=0;r<e.length;r++)uf(e[r],t)}function uf(e,t){switch(e.type){case 1:Sg(e.cases,t),t.helper("plural");break;case 2:Sg(e.items,t);break;case 6:uf(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function FH(e,t={}){const r=zH(e);r.helper("normalize"),e.body&&uf(e.body,r);const o=r.context();e.helpers=Array.from(o.helpers)}function NH(e,t){const{sourceMap:r,filename:o,breakLineCode:n,needIndent:i}=t,s={source:e.loc.source,filename:o,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:n,needIndent:i,indentLevel:0},a=()=>s;function l(b,y){s.code+=b}function c(b,y=!0){const g=y?n:"";l(i?g+"  ".repeat(b):g)}function u(b=!0){const y=++s.indentLevel;b&&c(y)}function d(b=!0){const y=--s.indentLevel;b&&c(y)}function f(){c(s.indentLevel)}return{context:a,push:l,indent:u,deindent:d,newline:f,helper:b=>`_${b}`,needIndent:()=>s.needIndent}}function jH(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),xi(e,t.key),t.modifier?(e.push(", "),xi(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function WH(e,t){const{helper:r,needIndent:o}=e;e.push(`${r("normalize")}([`),e.indent(o());const n=t.items.length;for(let i=0;i<n&&(xi(e,t.items[i]),i!==n-1);i++)e.push(", ");e.deindent(o()),e.push("])")}function UH(e,t){const{helper:r,needIndent:o}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(o());const n=t.cases.length;for(let i=0;i<n&&(xi(e,t.cases[i]),i!==n-1);i++)e.push(", ");e.deindent(o()),e.push("])")}}function VH(e,t){t.body?xi(e,t.body):e.push("null")}function xi(e,t){const{helper:r}=e;switch(t.type){case 0:VH(e,t);break;case 1:UH(e,t);break;case 2:WH(e,t);break;case 6:jH(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const KH=(e,t={})=>{const r=fe(t.mode)?t.mode:"normal",o=fe(t.filename)?t.filename:"message.intl",n=!!t.sourceMap,i=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,s=t.needIndent?t.needIndent:r!=="arrow",a=e.helpers||[],l=NH(e,{mode:r,filename:o,sourceMap:n,breakLineCode:i,needIndent:s});l.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),a.length>0&&(l.push(`const { ${a.map(d=>`${d}: _${d}`).join(", ")} } = ctx`),l.newline()),l.push("return "),xi(l,e),l.deindent(s),l.push("}");const{code:c,map:u}=l.context();return{ast:e,code:c,map:u?u.toJSON():void 0}};function qH(e,t={}){const r=_t({},t),n=DH(r).parse(e);return FH(n,r),KH(n,r)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const GH={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Yo=[];Yo[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Yo[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Yo[2]={w:[2],i:[3,0],[0]:[3,0]};Yo[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Yo[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Yo[5]={["'"]:[4,0],o:8,l:[5,0]};Yo[6]={['"']:[4,0],o:8,l:[6,0]};const XH=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function YH(e){return XH.test(e)}function ZH(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function JH(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function QH(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:YH(t)?ZH(t):"*"+t}function eD(e){const t=[];let r=-1,o=0,n=0,i,s,a,l,c,u,d;const f=[];f[0]=()=>{s===void 0?s=a:s+=a},f[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},f[2]=()=>{f[0](),n++},f[3]=()=>{if(n>0)n--,o=4,f[0]();else{if(n=0,s===void 0||(s=QH(s),s===!1))return!1;f[1]()}};function h(){const p=e[r+1];if(o===5&&p==="'"||o===6&&p==='"')return r++,a="\\"+p,f[0](),!0}for(;o!==null;)if(r++,i=e[r],!(i==="\\"&&h())){if(l=JH(i),d=Yo[o],c=d[l]||d.l||8,c===8||(o=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(a=i,u()===!1))))return;if(o===7)return t}}const Eg=new Map;function tD(e,t){return ot(e)?e[t]:null}function rD(e,t){if(!ot(e))return null;let r=Eg.get(t);if(r||(r=eD(t),r&&Eg.set(t,r)),!r)return null;const o=r.length;let n=e,i=0;for(;i<o;){const s=n[r[i]];if(s===void 0)return null;n=s,i++}return n}const oD=e=>e,nD=e=>"",iD="text",sD=e=>e.length===0?"":e.join(""),aD=TH;function _g(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function lD(e){const t=Et(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Et(e.named.count)||Et(e.named.n))?Et(e.named.count)?e.named.count:Et(e.named.n)?e.named.n:t:t}function cD(e,t){t.count||(t.count=e),t.n||(t.n=e)}function uD(e={}){const t=e.locale,r=lD(e),o=ot(e.pluralRules)&&fe(t)&&gt(e.pluralRules[t])?e.pluralRules[t]:_g,n=ot(e.pluralRules)&&fe(t)&&gt(e.pluralRules[t])?_g:void 0,i=g=>g[o(r,g.length,n)],s=e.list||[],a=g=>s[g],l=e.named||{};Et(e.pluralIndex)&&cD(r,l);const c=g=>l[g];function u(g){const w=gt(e.messages)?e.messages(g):ot(e.messages)?e.messages[g]:!1;return w||(e.parent?e.parent.message(g):nD)}const d=g=>e.modifiers?e.modifiers[g]:oD,f=Pe(e.processor)&&gt(e.processor.normalize)?e.processor.normalize:sD,h=Pe(e.processor)&&gt(e.processor.interpolate)?e.processor.interpolate:aD,p=Pe(e.processor)&&fe(e.processor.type)?e.processor.type:iD,y={list:a,named:c,plural:i,linked:(g,...w)=>{const[T,x]=w;let C="text",$="";w.length===1?ot(T)?($=T.modifier||$,C=T.type||C):fe(T)&&($=T||$):w.length===2&&(fe(T)&&($=T||$),fe(x)&&(C=x||C));let S=u(g)(y);return C==="vnode"&&rt(S)&&$&&(S=S[0]),$?d($)(S,C):S},message:u,type:p,interpolate:h,normalize:f};return y}let dD=null;GH.FunctionTranslate;function fD(e){return t=>dD}const hD={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function pD(e,t,r){return[...new Set([r,...rt(t)?t:ot(t)?Object.keys(t):fe(t)?[t]:[r]])]}function Ty(e,t,r){const o=fe(r)?r:ia,n=e;n.__localeChainCache||(n.__localeChainCache=new Map);let i=n.__localeChainCache.get(o);if(!i){i=[];let s=[r];for(;rt(s);)s=Tg(i,s,t);const a=rt(t)||!Pe(t)?t:t.default?t.default:null;s=fe(a)?[a]:a,rt(s)&&Tg(i,s,!1),n.__localeChainCache.set(o,i)}return i}function Tg(e,t,r){let o=!0;for(let n=0;n<t.length&&Fe(o);n++){const i=t[n];fe(i)&&(o=gD(e,t[n],r))}return o}function gD(e,t,r){let o;const n=t.split("-");do{const i=n.join("-");o=mD(e,i,r),n.splice(-1,1)}while(n.length&&o===!0);return o}function mD(e,t,r){let o=!1;if(!e.includes(t)&&(o=!0,t)){o=t[t.length-1]!=="!";const n=t.replace(/!/g,"");e.push(n),(rt(r)||Pe(r))&&r[n]&&(o=r[n])}return o}const bD="9.2.2",lc=-1,ia="en-US",$g="",Pg=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function vD(){return{upper:(e,t)=>t==="text"&&fe(e)?e.toUpperCase():t==="vnode"&&ot(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&fe(e)?e.toLowerCase():t==="vnode"&&ot(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&fe(e)?Pg(e):t==="vnode"&&ot(e)&&"__v_isVNode"in e?Pg(e.children):e}}let $y;function yD(e){$y=e}let Py;function xD(e){Py=e}let Ly;function CD(e){Ly=e}let Lg=0;function wD(e={}){const t=fe(e.version)?e.version:bD,r=fe(e.locale)?e.locale:ia,o=rt(e.fallbackLocale)||Pe(e.fallbackLocale)||fe(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,n=Pe(e.messages)?e.messages:{[r]:{}},i=Pe(e.datetimeFormats)?e.datetimeFormats:{[r]:{}},s=Pe(e.numberFormats)?e.numberFormats:{[r]:{}},a=_t({},e.modifiers||{},vD()),l=e.pluralRules||{},c=gt(e.missing)?e.missing:null,u=Fe(e.missingWarn)||Uo(e.missingWarn)?e.missingWarn:!0,d=Fe(e.fallbackWarn)||Uo(e.fallbackWarn)?e.fallbackWarn:!0,f=!!e.fallbackFormat,h=!!e.unresolving,p=gt(e.postTranslation)?e.postTranslation:null,b=Pe(e.processor)?e.processor:null,y=Fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,g=!!e.escapeParameter,w=gt(e.messageCompiler)?e.messageCompiler:$y,T=gt(e.messageResolver)?e.messageResolver:Py||tD,x=gt(e.localeFallbacker)?e.localeFallbacker:Ly||pD,C=ot(e.fallbackContext)?e.fallbackContext:void 0,$=gt(e.onWarn)?e.onWarn:EH,S=e,L=ot(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,k=ot(S.__numberFormatters)?S.__numberFormatters:new Map,R=ot(S.__meta)?S.__meta:{};Lg++;const H={version:t,cid:Lg,locale:r,fallbackLocale:o,messages:n,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:d,fallbackFormat:f,unresolving:h,postTranslation:p,processor:b,warnHtmlMessage:y,escapeParameter:g,messageCompiler:w,messageResolver:T,localeFallbacker:x,fallbackContext:C,onWarn:$,__meta:R};return H.datetimeFormats=i,H.numberFormats=s,H.__datetimeFormatters=L,H.__numberFormatters=k,H}function df(e,t,r,o,n){const{missing:i,onWarn:s}=e;if(i!==null){const a=i(e,r,t,n);return fe(a)?a:t}else return t}function Yi(e,t,r){const o=e;o.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}const SD=e=>e;let kg=Object.create(null);function ED(e,t={}){{const o=(t.onCacheKey||SD)(e),n=kg[o];if(n)return n;let i=!1;const s=t.onError||$H;t.onError=c=>{i=!0,s(c)};const{code:a}=qH(e,t),l=new Function(`return ${a}`)();return i?l:kg[o]=l}}let ky=je.__EXTEND_POINT__;const jc=()=>++ky,Gn={INVALID_ARGUMENT:ky,INVALID_DATE_ARGUMENT:jc(),INVALID_ISO_DATE_ARGUMENT:jc(),__EXTEND_POINT__:jc()};function Xn(e){return ac(e,null,void 0)}const Ig=()=>"",En=e=>gt(e);function Rg(e,...t){const{fallbackFormat:r,postTranslation:o,unresolving:n,messageCompiler:i,fallbackLocale:s,messages:a}=e,[l,c]=Mu(...t),u=Fe(c.missingWarn)?c.missingWarn:e.missingWarn,d=Fe(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,f=Fe(c.escapeParameter)?c.escapeParameter:e.escapeParameter,h=!!c.resolvedMessage,p=fe(c.default)||Fe(c.default)?Fe(c.default)?i?l:()=>l:c.default:r?i?l:()=>l:"",b=r||p!=="",y=fe(c.locale)?c.locale:e.locale;f&&_D(c);let[g,w,T]=h?[l,y,a[y]||{}]:Iy(e,l,y,s,d,u),x=g,C=l;if(!h&&!(fe(x)||En(x))&&b&&(x=p,C=x),!h&&(!(fe(x)||En(x))||!fe(w)))return n?lc:l;let $=!1;const S=()=>{$=!0},L=En(x)?x:Ry(e,l,w,x,C,S);if($)return x;const k=PD(e,w,T,c),R=uD(k),H=TD(e,L,R);return o?o(H,l):H}function _D(e){rt(e.list)?e.list=e.list.map(t=>fe(t)?Cg(t):t):ot(e.named)&&Object.keys(e.named).forEach(t=>{fe(e.named[t])&&(e.named[t]=Cg(e.named[t]))})}function Iy(e,t,r,o,n,i){const{messages:s,onWarn:a,messageResolver:l,localeFallbacker:c}=e,u=c(e,o,r);let d={},f,h=null;const p="translate";for(let b=0;b<u.length&&(f=u[b],d=s[f]||{},(h=l(d,t))===null&&(h=d[t]),!(fe(h)||gt(h)));b++){const y=df(e,t,f,i,p);y!==t&&(h=y)}return[h,f,d]}function Ry(e,t,r,o,n,i){const{messageCompiler:s,warnHtmlMessage:a}=e;if(En(o)){const c=o;return c.locale=c.locale||r,c.key=c.key||t,c}if(s==null){const c=()=>o;return c.locale=r,c.key=t,c}const l=s(o,$D(e,r,n,o,a,i));return l.locale=r,l.key=t,l.source=o,l}function TD(e,t,r){return t(r)}function Mu(...e){const[t,r,o]=e,n={};if(!fe(t)&&!Et(t)&&!En(t))throw Xn(Gn.INVALID_ARGUMENT);const i=Et(t)?String(t):(En(t),t);return Et(r)?n.plural=r:fe(r)?n.default=r:Pe(r)&&!sc(r)?n.named=r:rt(r)&&(n.list=r),Et(o)?n.plural=o:fe(o)?n.default=o:Pe(o)&&_t(n,o),[i,n]}function $D(e,t,r,o,n,i){return{warnHtmlMessage:n,onError:s=>{throw i&&i(s),s},onCacheKey:s=>CH(t,r,s)}}function PD(e,t,r,o){const{modifiers:n,pluralRules:i,messageResolver:s,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=e,f={locale:t,modifiers:n,pluralRules:i,messages:h=>{let p=s(r,h);if(p==null&&u){const[,,b]=Iy(u,h,t,a,l,c);p=s(b,h)}if(fe(p)){let b=!1;const g=Ry(e,h,t,p,h,()=>{b=!0});return b?Ig:g}else return En(p)?p:Ig}};return e.processor&&(f.processor=e.processor),o.list&&(f.list=o.list),o.named&&(f.named=o.named),Et(o.plural)&&(f.pluralIndex=o.plural),f}function Og(e,...t){const{datetimeFormats:r,unresolving:o,fallbackLocale:n,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:a}=e,[l,c,u,d]=Bu(...t),f=Fe(u.missingWarn)?u.missingWarn:e.missingWarn;Fe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const h=!!u.part,p=fe(u.locale)?u.locale:e.locale,b=s(e,n,p);if(!fe(l)||l==="")return new Intl.DateTimeFormat(p,d).format(c);let y={},g,w=null;const T="datetime format";for(let $=0;$<b.length&&(g=b[$],y=r[g]||{},w=y[l],!Pe(w));$++)df(e,l,g,f,T);if(!Pe(w)||!fe(g))return o?lc:l;let x=`${g}__${l}`;sc(d)||(x=`${x}__${JSON.stringify(d)}`);let C=a.get(x);return C||(C=new Intl.DateTimeFormat(g,_t({},w,d)),a.set(x,C)),h?C.formatToParts(c):C.format(c)}const Oy=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Bu(...e){const[t,r,o,n]=e,i={};let s={},a;if(fe(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Xn(Gn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Xn(Gn.INVALID_ISO_DATE_ARGUMENT)}}else if(SH(t)){if(isNaN(t.getTime()))throw Xn(Gn.INVALID_DATE_ARGUMENT);a=t}else if(Et(t))a=t;else throw Xn(Gn.INVALID_ARGUMENT);return fe(r)?i.key=r:Pe(r)&&Object.keys(r).forEach(l=>{Oy.includes(l)?s[l]=r[l]:i[l]=r[l]}),fe(o)?i.locale=o:Pe(o)&&(s=o),Pe(n)&&(s=n),[i.key||"",a,i,s]}function Ag(e,t,r){const o=e;for(const n in r){const i=`${t}__${n}`;!o.__datetimeFormatters.has(i)||o.__datetimeFormatters.delete(i)}}function Mg(e,...t){const{numberFormats:r,unresolving:o,fallbackLocale:n,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:a}=e,[l,c,u,d]=Hu(...t),f=Fe(u.missingWarn)?u.missingWarn:e.missingWarn;Fe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const h=!!u.part,p=fe(u.locale)?u.locale:e.locale,b=s(e,n,p);if(!fe(l)||l==="")return new Intl.NumberFormat(p,d).format(c);let y={},g,w=null;const T="number format";for(let $=0;$<b.length&&(g=b[$],y=r[g]||{},w=y[l],!Pe(w));$++)df(e,l,g,f,T);if(!Pe(w)||!fe(g))return o?lc:l;let x=`${g}__${l}`;sc(d)||(x=`${x}__${JSON.stringify(d)}`);let C=a.get(x);return C||(C=new Intl.NumberFormat(g,_t({},w,d)),a.set(x,C)),h?C.formatToParts(c):C.format(c)}const Ay=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Hu(...e){const[t,r,o,n]=e,i={};let s={};if(!Et(t))throw Xn(Gn.INVALID_ARGUMENT);const a=t;return fe(r)?i.key=r:Pe(r)&&Object.keys(r).forEach(l=>{Ay.includes(l)?s[l]=r[l]:i[l]=r[l]}),fe(o)?i.locale=o:Pe(o)&&(s=o),Pe(n)&&(s=n),[i.key||"",a,i,s]}function Bg(e,t,r){const o=e;for(const n in r){const i=`${t}__${n}`;!o.__numberFormatters.has(i)||o.__numberFormatters.delete(i)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const LD="9.2.2";hD.__EXTEND_POINT__;let My=je.__EXTEND_POINT__;const Vt=()=>++My,Tt={UNEXPECTED_RETURN_TYPE:My,INVALID_ARGUMENT:Vt(),MUST_BE_CALL_SETUP_TOP:Vt(),NOT_INSLALLED:Vt(),NOT_AVAILABLE_IN_LEGACY_MODE:Vt(),REQUIRED_VALUE:Vt(),INVALID_VALUE:Vt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Vt(),NOT_INSLALLED_WITH_PROVIDE:Vt(),UNEXPECTED_ERROR:Vt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Vt(),BRIDGE_SUPPORT_VUE_2_ONLY:Vt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Vt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Vt(),__EXTEND_POINT__:Vt()};function Mt(e,...t){return ac(e,null,void 0)}const Du=Xo("__transrateVNode"),zu=Xo("__datetimeParts"),Fu=Xo("__numberParts"),By=Xo("__setPluralRules");Xo("__intlifyMeta");const Hy=Xo("__injectWithOption");function Nu(e){if(!ot(e))return e;for(const t in e)if(!!lf(e,t))if(!t.includes("."))ot(e[t])&&Nu(e[t]);else{const r=t.split("."),o=r.length-1;let n=e;for(let i=0;i<o;i++)r[i]in n||(n[r[i]]={}),n=n[r[i]];n[r[o]]=e[t],delete e[t],ot(n[r[o]])&&Nu(n[r[o]])}return e}function cc(e,t){const{messages:r,__i18n:o,messageResolver:n,flatJson:i}=t,s=Pe(r)?r:rt(o)?{}:{[e]:{}};if(rt(o)&&o.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(s[l]=s[l]||{},vs(c,s[l])):vs(c,s)}else fe(a)&&vs(JSON.parse(a),s)}),n==null&&i)for(const a in s)lf(s,a)&&Nu(s[a]);return s}const Ma=e=>!ot(e)||rt(e);function vs(e,t){if(Ma(e)||Ma(t))throw Mt(Tt.INVALID_VALUE);for(const r in e)lf(e,r)&&(Ma(e[r])||Ma(t[r])?t[r]=e[r]:vs(e[r],t[r]))}function kD(e){return e.type}function Dy(e,t,r){let o=ot(t.messages)?t.messages:{};"__i18nGlobal"in r&&(o=cc(e.locale.value,{messages:o,__i18n:r.__i18nGlobal}));const n=Object.keys(o);n.length&&n.forEach(i=>{e.mergeLocaleMessage(i,o[i])});{if(ot(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(ot(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function Hg(e){return ct(Dl,null,e,0)}let Dg=0;function zg(e){return(t,r,o,n)=>e(r,o,fr()||void 0,n)}function ff(e={},t){const{__root:r}=e,o=r===void 0;let n=Fe(e.inheritLocale)?e.inheritLocale:!0;const i=V(r&&n?r.locale.value:fe(e.locale)?e.locale:ia),s=V(r&&n?r.fallbackLocale.value:fe(e.fallbackLocale)||rt(e.fallbackLocale)||Pe(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),a=V(cc(i.value,e)),l=V(Pe(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),c=V(Pe(e.numberFormats)?e.numberFormats:{[i.value]:{}});let u=r?r.missingWarn:Fe(e.missingWarn)||Uo(e.missingWarn)?e.missingWarn:!0,d=r?r.fallbackWarn:Fe(e.fallbackWarn)||Uo(e.fallbackWarn)?e.fallbackWarn:!0,f=r?r.fallbackRoot:Fe(e.fallbackRoot)?e.fallbackRoot:!0,h=!!e.fallbackFormat,p=gt(e.missing)?e.missing:null,b=gt(e.missing)?zg(e.missing):null,y=gt(e.postTranslation)?e.postTranslation:null,g=r?r.warnHtmlMessage:Fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,w=!!e.escapeParameter;const T=r?r.modifiers:Pe(e.modifiers)?e.modifiers:{};let x=e.pluralRules||r&&r.pluralRules,C;C=(()=>{const O={version:LD,locale:i.value,fallbackLocale:s.value,messages:a.value,modifiers:T,pluralRules:x,missing:b===null?void 0:b,missingWarn:u,fallbackWarn:d,fallbackFormat:h,unresolving:!0,postTranslation:y===null?void 0:y,warnHtmlMessage:g,escapeParameter:w,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return O.datetimeFormats=l.value,O.numberFormats=c.value,O.__datetimeFormatters=Pe(C)?C.__datetimeFormatters:void 0,O.__numberFormatters=Pe(C)?C.__numberFormatters:void 0,wD(O)})(),Yi(C,i.value,s.value);function S(){return[i.value,s.value,a.value,l.value,c.value]}const L=K({get:()=>i.value,set:O=>{i.value=O,C.locale=i.value}}),k=K({get:()=>s.value,set:O=>{s.value=O,C.fallbackLocale=s.value,Yi(C,i.value,O)}}),R=K(()=>a.value),H=K(()=>l.value),A=K(()=>c.value);function q(){return gt(y)?y:null}function F(O){y=O,C.postTranslation=O}function ee(){return p}function Y(O){O!==null&&(b=zg(O)),p=O,C.missing=b}const Z=(O,B,ce,pe,$e,He)=>{S();let Oe;if(Oe=O(C),Et(Oe)&&Oe===lc){const[at,Lt]=B();return r&&f?pe(r):$e(at)}else{if(He(Oe))return Oe;throw Mt(Tt.UNEXPECTED_RETURN_TYPE)}};function se(...O){return Z(B=>Reflect.apply(Rg,null,[B,...O]),()=>Mu(...O),"translate",B=>Reflect.apply(B.t,B,[...O]),B=>B,B=>fe(B))}function ve(...O){const[B,ce,pe]=O;if(pe&&!ot(pe))throw Mt(Tt.INVALID_ARGUMENT);return se(B,ce,_t({resolvedMessage:!0},pe||{}))}function Le(...O){return Z(B=>Reflect.apply(Og,null,[B,...O]),()=>Bu(...O),"datetime format",B=>Reflect.apply(B.d,B,[...O]),()=>$g,B=>fe(B))}function _e(...O){return Z(B=>Reflect.apply(Mg,null,[B,...O]),()=>Hu(...O),"number format",B=>Reflect.apply(B.n,B,[...O]),()=>$g,B=>fe(B))}function Ae(O){return O.map(B=>fe(B)||Et(B)||Fe(B)?Hg(String(B)):B)}const Ue={normalize:Ae,interpolate:O=>O,type:"vnode"};function N(...O){return Z(B=>{let ce;const pe=B;try{pe.processor=Ue,ce=Reflect.apply(Rg,null,[pe,...O])}finally{pe.processor=null}return ce},()=>Mu(...O),"translate",B=>B[Du](...O),B=>[Hg(B)],B=>rt(B))}function J(...O){return Z(B=>Reflect.apply(Mg,null,[B,...O]),()=>Hu(...O),"number format",B=>B[Fu](...O),()=>[],B=>fe(B)||rt(B))}function te(...O){return Z(B=>Reflect.apply(Og,null,[B,...O]),()=>Bu(...O),"datetime format",B=>B[zu](...O),()=>[],B=>fe(B)||rt(B))}function de(O){x=O,C.pluralRules=x}function ae(O,B){const ce=fe(B)?B:i.value,pe=_(ce);return C.messageResolver(pe,O)!==null}function Te(O){let B=null;const ce=Ty(C,s.value,i.value);for(let pe=0;pe<ce.length;pe++){const $e=a.value[ce[pe]]||{},He=C.messageResolver($e,O);if(He!=null){B=He;break}}return B}function me(O){const B=Te(O);return B!=null?B:r?r.tm(O)||{}:{}}function _(O){return a.value[O]||{}}function m(O,B){a.value[O]=B,C.messages=a.value}function v(O,B){a.value[O]=a.value[O]||{},vs(B,a.value[O]),C.messages=a.value}function P(O){return l.value[O]||{}}function I(O,B){l.value[O]=B,C.datetimeFormats=l.value,Ag(C,O,B)}function M(O,B){l.value[O]=_t(l.value[O]||{},B),C.datetimeFormats=l.value,Ag(C,O,B)}function U(O){return c.value[O]||{}}function X(O,B){c.value[O]=B,C.numberFormats=c.value,Bg(C,O,B)}function W(O,B){c.value[O]=_t(c.value[O]||{},B),C.numberFormats=c.value,Bg(C,O,B)}Dg++,r&&yH&&(et(r.locale,O=>{n&&(i.value=O,C.locale=O,Yi(C,i.value,s.value))}),et(r.fallbackLocale,O=>{n&&(s.value=O,C.fallbackLocale=O,Yi(C,i.value,s.value))}));const D={id:Dg,locale:L,fallbackLocale:k,get inheritLocale(){return n},set inheritLocale(O){n=O,O&&r&&(i.value=r.locale.value,s.value=r.fallbackLocale.value,Yi(C,i.value,s.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:R,get modifiers(){return T},get pluralRules(){return x||{}},get isGlobal(){return o},get missingWarn(){return u},set missingWarn(O){u=O,C.missingWarn=u},get fallbackWarn(){return d},set fallbackWarn(O){d=O,C.fallbackWarn=d},get fallbackRoot(){return f},set fallbackRoot(O){f=O},get fallbackFormat(){return h},set fallbackFormat(O){h=O,C.fallbackFormat=h},get warnHtmlMessage(){return g},set warnHtmlMessage(O){g=O,C.warnHtmlMessage=O},get escapeParameter(){return w},set escapeParameter(O){w=O,C.escapeParameter=O},t:se,getLocaleMessage:_,setLocaleMessage:m,mergeLocaleMessage:v,getPostTranslationHandler:q,setPostTranslationHandler:F,getMissingHandler:ee,setMissingHandler:Y,[By]:de};return D.datetimeFormats=H,D.numberFormats=A,D.rt=ve,D.te=ae,D.tm=me,D.d=Le,D.n=_e,D.getDateTimeFormat=P,D.setDateTimeFormat=I,D.mergeDateTimeFormat=M,D.getNumberFormat=U,D.setNumberFormat=X,D.mergeNumberFormat=W,D[Hy]=e.__injectWithOption,D[Du]=N,D[zu]=te,D[Fu]=J,D}function ID(e){const t=fe(e.locale)?e.locale:ia,r=fe(e.fallbackLocale)||rt(e.fallbackLocale)||Pe(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,o=gt(e.missing)?e.missing:void 0,n=Fe(e.silentTranslationWarn)||Uo(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=Fe(e.silentFallbackWarn)||Uo(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=Fe(e.fallbackRoot)?e.fallbackRoot:!0,a=!!e.formatFallbackMessages,l=Pe(e.modifiers)?e.modifiers:{},c=e.pluralizationRules,u=gt(e.postTranslation)?e.postTranslation:void 0,d=fe(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,f=!!e.escapeParameterHtml,h=Fe(e.sync)?e.sync:!0;let p=e.messages;if(Pe(e.sharedMessages)){const C=e.sharedMessages;p=Object.keys(C).reduce((S,L)=>{const k=S[L]||(S[L]={});return _t(k,C[L]),S},p||{})}const{__i18n:b,__root:y,__injectWithOption:g}=e,w=e.datetimeFormats,T=e.numberFormats,x=e.flatJson;return{locale:t,fallbackLocale:r,messages:p,flatJson:x,datetimeFormats:w,numberFormats:T,missing:o,missingWarn:n,fallbackWarn:i,fallbackRoot:s,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:h,__i18n:b,__root:y,__injectWithOption:g}}function ju(e={},t){{const r=ff(ID(e)),o={id:r.id,get locale(){return r.locale.value},set locale(n){r.locale.value=n},get fallbackLocale(){return r.fallbackLocale.value},set fallbackLocale(n){r.fallbackLocale.value=n},get messages(){return r.messages.value},get datetimeFormats(){return r.datetimeFormats.value},get numberFormats(){return r.numberFormats.value},get availableLocales(){return r.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(n){},get missing(){return r.getMissingHandler()},set missing(n){r.setMissingHandler(n)},get silentTranslationWarn(){return Fe(r.missingWarn)?!r.missingWarn:r.missingWarn},set silentTranslationWarn(n){r.missingWarn=Fe(n)?!n:n},get silentFallbackWarn(){return Fe(r.fallbackWarn)?!r.fallbackWarn:r.fallbackWarn},set silentFallbackWarn(n){r.fallbackWarn=Fe(n)?!n:n},get modifiers(){return r.modifiers},get formatFallbackMessages(){return r.fallbackFormat},set formatFallbackMessages(n){r.fallbackFormat=n},get postTranslation(){return r.getPostTranslationHandler()},set postTranslation(n){r.setPostTranslationHandler(n)},get sync(){return r.inheritLocale},set sync(n){r.inheritLocale=n},get warnHtmlInMessage(){return r.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(n){r.warnHtmlMessage=n!=="off"},get escapeParameterHtml(){return r.escapeParameter},set escapeParameterHtml(n){r.escapeParameter=n},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(n){},get pluralizationRules(){return r.pluralRules||{}},__composer:r,t(...n){const[i,s,a]=n,l={};let c=null,u=null;if(!fe(i))throw Mt(Tt.INVALID_ARGUMENT);const d=i;return fe(s)?l.locale=s:rt(s)?c=s:Pe(s)&&(u=s),rt(a)?c=a:Pe(a)&&(u=a),Reflect.apply(r.t,r,[d,c||u||{},l])},rt(...n){return Reflect.apply(r.rt,r,[...n])},tc(...n){const[i,s,a]=n,l={plural:1};let c=null,u=null;if(!fe(i))throw Mt(Tt.INVALID_ARGUMENT);const d=i;return fe(s)?l.locale=s:Et(s)?l.plural=s:rt(s)?c=s:Pe(s)&&(u=s),fe(a)?l.locale=a:rt(a)?c=a:Pe(a)&&(u=a),Reflect.apply(r.t,r,[d,c||u||{},l])},te(n,i){return r.te(n,i)},tm(n){return r.tm(n)},getLocaleMessage(n){return r.getLocaleMessage(n)},setLocaleMessage(n,i){r.setLocaleMessage(n,i)},mergeLocaleMessage(n,i){r.mergeLocaleMessage(n,i)},d(...n){return Reflect.apply(r.d,r,[...n])},getDateTimeFormat(n){return r.getDateTimeFormat(n)},setDateTimeFormat(n,i){r.setDateTimeFormat(n,i)},mergeDateTimeFormat(n,i){r.mergeDateTimeFormat(n,i)},n(...n){return Reflect.apply(r.n,r,[...n])},getNumberFormat(n){return r.getNumberFormat(n)},setNumberFormat(n,i){r.setNumberFormat(n,i)},mergeNumberFormat(n,i){r.mergeNumberFormat(n,i)},getChoiceIndex(n,i){return-1},__onComponentInstanceCreated(n){const{componentInstanceCreatedListener:i}=e;i&&i(n,o)}};return o}}const hf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function RD({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((o,n)=>o=[...o,...rt(n.children)?n.children:[n]],[]):t.reduce((r,o)=>{const n=e[o];return n&&(r[o]=n()),r},{})}function zy(e){return Qe}_t({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Et(e)||!isNaN(e)}},hf);function OD(e){return rt(e)&&!fe(e[0])}function Fy(e,t,r,o){const{slots:n,attrs:i}=t;return()=>{const s={part:!0};let a={};e.locale&&(s.locale=e.locale),fe(e.format)?s.key=e.format:ot(e.format)&&(fe(e.format.key)&&(s.key=e.format.key),a=Object.keys(e.format).reduce((f,h)=>r.includes(h)?_t({},f,{[h]:e.format[h]}):f,{}));const l=o(e.value,s,a);let c=[s.key];rt(l)?c=l.map((f,h)=>{const p=n[f.type],b=p?p({[f.type]:f.value,index:h,parts:l}):[f.value];return OD(b)&&(b[0].key=`${f.type}-${h}`),b}):fe(l)&&(c=[l]);const u=_t({},i),d=fe(e.tag)||ot(e.tag)?e.tag:zy();return E(d,u,c)}}_t({value:{type:Number,required:!0},format:{type:[String,Object]}},hf);_t({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},hf);function AD(e,t,r){return{beforeCreate(){const o=fr();if(!o)throw Mt(Tt.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const i=n.i18n;n.__i18n&&(i.__i18n=n.__i18n),i.__root=t,this===this.$root?this.$i18n=Fg(e,i):(i.__injectWithOption=!0,this.$i18n=ju(i))}else n.__i18n?this===this.$root?this.$i18n=Fg(e,n):this.$i18n=ju({__i18n:n.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;n.__i18nGlobal&&Dy(t,n,n),e.__onComponentInstanceCreated(this.$i18n),r.__setInstance(o,this.$i18n),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,s)=>this.$i18n.te(i,s),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i)},mounted(){},unmounted(){const o=fr();if(!o)throw Mt(Tt.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__deleteInstance(o),delete this.$i18n}}}function Fg(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[By](t.pluralizationRules||e.pluralizationRules);const r=cc(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(r).forEach(o=>e.mergeLocaleMessage(o,r[o])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(o=>e.mergeDateTimeFormat(o,t.datetimeFormats[o])),t.numberFormats&&Object.keys(t.numberFormats).forEach(o=>e.mergeNumberFormat(o,t.numberFormats[o])),e}const MD=Xo("global-vue-i18n");function BD(e={},t){const r=Fe(e.legacy)?e.legacy:!0,o=Fe(e.globalInjection)?e.globalInjection:!0,n=r?!!e.allowComposition:!0,i=new Map,[s,a]=HD(e,r),l=Xo("");function c(f){return i.get(f)||null}function u(f,h){i.set(f,h)}function d(f){i.delete(f)}{const f={get mode(){return r?"legacy":"composition"},get allowComposition(){return n},async install(h,...p){h.__VUE_I18N_SYMBOL__=l,h.provide(h.__VUE_I18N_SYMBOL__,f),!r&&o&&KD(h,f.global),r&&h.mixin(AD(a,a.__composer,f));const b=h.unmount;h.unmount=()=>{f.dispose(),b()}},get global(){return a},dispose(){s.stop()},__instances:i,__getInstance:c,__setInstance:u,__deleteInstance:d};return f}}function pf(e={}){const t=fr();if(t==null)throw Mt(Tt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw Mt(Tt.NOT_INSLALLED);const r=DD(t),o=FD(r),n=kD(t),i=zD(e,n);if(r.mode==="legacy"&&!e.__useComponent){if(!r.allowComposition)throw Mt(Tt.NOT_AVAILABLE_IN_LEGACY_MODE);return WD(t,i,o,e)}if(i==="global")return Dy(o,e,n),o;if(i==="parent"){let l=ND(r,t,e.__useComponent);return l==null&&(l=o),l}const s=r;let a=s.__getInstance(t);if(a==null){const l=_t({},e);"__i18n"in n&&(l.__i18n=n.__i18n),o&&(l.__root=o),a=ff(l),jD(s,t),s.__setInstance(t,a)}return a}function HD(e,t,r){const o=yC();{const n=t?o.run(()=>ju(e)):o.run(()=>ff(e));if(n==null)throw Mt(Tt.UNEXPECTED_ERROR);return[o,n]}}function DD(e){{const t=Se(e.isCE?MD:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw Mt(e.isCE?Tt.NOT_INSLALLED_WITH_PROVIDE:Tt.UNEXPECTED_ERROR);return t}}function zD(e,t){return sc(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function FD(e){return e.mode==="composition"?e.global:e.global.__composer}function ND(e,t,r=!1){let o=null;const n=t.root;let i=t.parent;for(;i!=null;){const s=e;if(e.mode==="composition")o=s.__getInstance(i);else{const a=s.__getInstance(i);a!=null&&(o=a.__composer,r&&o&&!o[Hy]&&(o=null))}if(o!=null||n===i)break;i=i.parent}return o}function jD(e,t,r){$t(()=>{},t),pd(()=>{e.__deleteInstance(t)},t)}function WD(e,t,r,o={}){const n=t==="local",i=ld(null);if(n&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw Mt(Tt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=Fe(o.inheritLocale)?o.inheritLocale:!0,a=V(n&&s?r.locale.value:fe(o.locale)?o.locale:ia),l=V(n&&s?r.fallbackLocale.value:fe(o.fallbackLocale)||rt(o.fallbackLocale)||Pe(o.fallbackLocale)||o.fallbackLocale===!1?o.fallbackLocale:a.value),c=V(cc(a.value,o)),u=V(Pe(o.datetimeFormats)?o.datetimeFormats:{[a.value]:{}}),d=V(Pe(o.numberFormats)?o.numberFormats:{[a.value]:{}}),f=n?r.missingWarn:Fe(o.missingWarn)||Uo(o.missingWarn)?o.missingWarn:!0,h=n?r.fallbackWarn:Fe(o.fallbackWarn)||Uo(o.fallbackWarn)?o.fallbackWarn:!0,p=n?r.fallbackRoot:Fe(o.fallbackRoot)?o.fallbackRoot:!0,b=!!o.fallbackFormat,y=gt(o.missing)?o.missing:null,g=gt(o.postTranslation)?o.postTranslation:null,w=n?r.warnHtmlMessage:Fe(o.warnHtmlMessage)?o.warnHtmlMessage:!0,T=!!o.escapeParameter,x=n?r.modifiers:Pe(o.modifiers)?o.modifiers:{},C=o.pluralRules||n&&r.pluralRules;function $(){return[a.value,l.value,c.value,u.value,d.value]}const S=K({get:()=>i.value?i.value.locale.value:a.value,set:v=>{i.value&&(i.value.locale.value=v),a.value=v}}),L=K({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:v=>{i.value&&(i.value.fallbackLocale.value=v),l.value=v}}),k=K(()=>i.value?i.value.messages.value:c.value),R=K(()=>u.value),H=K(()=>d.value);function A(){return i.value?i.value.getPostTranslationHandler():g}function q(v){i.value&&i.value.setPostTranslationHandler(v)}function F(){return i.value?i.value.getMissingHandler():y}function ee(v){i.value&&i.value.setMissingHandler(v)}function Y(v){return $(),v()}function Z(...v){return i.value?Y(()=>Reflect.apply(i.value.t,null,[...v])):Y(()=>"")}function se(...v){return i.value?Reflect.apply(i.value.rt,null,[...v]):""}function ve(...v){return i.value?Y(()=>Reflect.apply(i.value.d,null,[...v])):Y(()=>"")}function Le(...v){return i.value?Y(()=>Reflect.apply(i.value.n,null,[...v])):Y(()=>"")}function _e(v){return i.value?i.value.tm(v):{}}function Ae(v,P){return i.value?i.value.te(v,P):!1}function ut(v){return i.value?i.value.getLocaleMessage(v):{}}function Ue(v,P){i.value&&(i.value.setLocaleMessage(v,P),c.value[v]=P)}function N(v,P){i.value&&i.value.mergeLocaleMessage(v,P)}function J(v){return i.value?i.value.getDateTimeFormat(v):{}}function te(v,P){i.value&&(i.value.setDateTimeFormat(v,P),u.value[v]=P)}function de(v,P){i.value&&i.value.mergeDateTimeFormat(v,P)}function ae(v){return i.value?i.value.getNumberFormat(v):{}}function Te(v,P){i.value&&(i.value.setNumberFormat(v,P),d.value[v]=P)}function me(v,P){i.value&&i.value.mergeNumberFormat(v,P)}const _={get id(){return i.value?i.value.id:-1},locale:S,fallbackLocale:L,messages:k,datetimeFormats:R,numberFormats:H,get inheritLocale(){return i.value?i.value.inheritLocale:s},set inheritLocale(v){i.value&&(i.value.inheritLocale=v)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(c.value)},get modifiers(){return i.value?i.value.modifiers:x},get pluralRules(){return i.value?i.value.pluralRules:C},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:f},set missingWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackWarn(){return i.value?i.value.fallbackWarn:h},set fallbackWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackRoot(){return i.value?i.value.fallbackRoot:p},set fallbackRoot(v){i.value&&(i.value.fallbackRoot=v)},get fallbackFormat(){return i.value?i.value.fallbackFormat:b},set fallbackFormat(v){i.value&&(i.value.fallbackFormat=v)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:w},set warnHtmlMessage(v){i.value&&(i.value.warnHtmlMessage=v)},get escapeParameter(){return i.value?i.value.escapeParameter:T},set escapeParameter(v){i.value&&(i.value.escapeParameter=v)},t:Z,getPostTranslationHandler:A,setPostTranslationHandler:q,getMissingHandler:F,setMissingHandler:ee,rt:se,d:ve,n:Le,tm:_e,te:Ae,getLocaleMessage:ut,setLocaleMessage:Ue,mergeLocaleMessage:N,getDateTimeFormat:J,setDateTimeFormat:te,mergeDateTimeFormat:de,getNumberFormat:ae,setNumberFormat:Te,mergeNumberFormat:me};function m(v){v.locale.value=a.value,v.fallbackLocale.value=l.value,Object.keys(c.value).forEach(P=>{v.mergeLocaleMessage(P,c.value[P])}),Object.keys(u.value).forEach(P=>{v.mergeDateTimeFormat(P,u.value[P])}),Object.keys(d.value).forEach(P=>{v.mergeNumberFormat(P,d.value[P])}),v.escapeParameter=T,v.fallbackFormat=b,v.fallbackRoot=p,v.fallbackWarn=h,v.missingWarn=f,v.warnHtmlMessage=w}return Vo(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw Mt(Tt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const v=i.value=e.proxy.$i18n.__composer;t==="global"?(a.value=v.locale.value,l.value=v.fallbackLocale.value,c.value=v.messages.value,u.value=v.datetimeFormats.value,d.value=v.numberFormats.value):n&&m(v)}),_}const UD=["locale","fallbackLocale","availableLocales"],VD=["t","rt","d","n","tm"];function KD(e,t){const r=Object.create(null);UD.forEach(o=>{const n=Object.getOwnPropertyDescriptor(t,o);if(!n)throw Mt(Tt.UNEXPECTED_ERROR);const i=yt(n.value)?{get(){return n.value.value},set(s){n.value.value=s}}:{get(){return n.get&&n.get()}};Object.defineProperty(r,o,i)}),e.config.globalProperties.$i18n=r,VD.forEach(o=>{const n=Object.getOwnPropertyDescriptor(t,o);if(!n||!n.value)throw Mt(Tt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,n)})}yD(ED);xD(rD);CD(Ty);const ys=["en-US","zh-CN"],qD=ZD(),gf=XD({locale:qD}),GD=(...e)=>gf.global.t(...e);window.t=GD;function XD(e){const t=BD({...e,globalInjection:!0,fallbackLocale:ys[0],messages:{}});return Ny(t,e.locale),t}function Ny(e,t){var r;e.mode==="legacy"?e.global.locale=t:e.global.locale.value=t,(r=document.querySelector("html"))==null||r.setAttribute("lang",t),YD(e,t)}function dN(e){ys.includes(e)&&(Ny(gf,e),localStorage.setItem("lang",e))}async function YD(e,t){const r=await vH(Object.assign({"./locales/en-US.ts":()=>Ze(()=>import("./en-US.8c218f93.js"),[],import.meta.url),"./locales/zh-CN.ts":()=>Ze(()=>import("./zh-CN.26836a2c.js"),[],import.meta.url)}),`./locales/${t}.ts`);return e.global.setLocaleMessage(t,r.default),Dt()}function ZD(){var t,r;let e=localStorage.getItem("lang");if(e){if(ys.includes(e))return e;localStorage.removeItem("lang")}for(const o of[(t=navigator.language)!=null?t:"",...(r=navigator.languages)!=null?r:[]])for(const n of ys)if(n.includes(o))return n;return ys[0]}const JD={},QD=Object.freeze(Object.defineProperty({__proto__:null,default:JD},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const De=BigInt(0),lt=BigInt(1),Oo=BigInt(2),xs=BigInt(3),Ng=BigInt(8),Ge=Object.freeze({a:De,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:lt,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),jg=(e,t)=>(e+t/Oo)/t,Ba={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Ge,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),o=-lt*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=r,s=BigInt("0x100000000000000000000000000000000"),a=jg(i*e,t),l=jg(-o*e,t);let c=le(e-a*r-l*n,t),u=le(-a*o-l*i,t);const d=c>s,f=u>s;if(d&&(c=t-c),f&&(u=t-u),c>s||u>s)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:d,k1:c,k2neg:f,k2:u}}},xr=32,Ci=32,ez=32,yl=xr+1,xl=2*xr+1;function Wg(e){const{a:t,b:r}=Ge,o=le(e*e),n=le(o*e);return le(n+t*e+r)}const Ha=Ge.a===De;class mf extends Error{constructor(t){super(t)}}function Ug(e){if(!(e instanceof Ve))throw new TypeError("JacobianPoint expected")}class Ve{constructor(t,r,o){this.x=t,this.y=r,this.z=o}static fromAffine(t){if(!(t instanceof ze))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(ze.ZERO)?Ve.ZERO:new Ve(t.x,t.y,lt)}static toAffineBatch(t){const r=iz(t.map(o=>o.z));return t.map((o,n)=>o.toAffine(r[n]))}static normalizeZ(t){return Ve.toAffineBatch(t).map(Ve.fromAffine)}equals(t){Ug(t);const{x:r,y:o,z:n}=this,{x:i,y:s,z:a}=t,l=le(n*n),c=le(a*a),u=le(r*c),d=le(i*l),f=le(le(o*a)*c),h=le(le(s*n)*l);return u===d&&f===h}negate(){return new Ve(this.x,le(-this.y),this.z)}double(){const{x:t,y:r,z:o}=this,n=le(t*t),i=le(r*r),s=le(i*i),a=t+i,l=le(Oo*(le(a*a)-n-s)),c=le(xs*n),u=le(c*c),d=le(u-Oo*l),f=le(c*(l-d)-Ng*s),h=le(Oo*r*o);return new Ve(d,f,h)}add(t){Ug(t);const{x:r,y:o,z:n}=this,{x:i,y:s,z:a}=t;if(i===De||s===De)return this;if(r===De||o===De)return t;const l=le(n*n),c=le(a*a),u=le(r*c),d=le(i*l),f=le(le(o*a)*c),h=le(le(s*n)*l),p=le(d-u),b=le(h-f);if(p===De)return b===De?this.double():Ve.ZERO;const y=le(p*p),g=le(p*y),w=le(u*y),T=le(b*b-g-Oo*w),x=le(b*(w-T)-f*g),C=le(n*a*p);return new Ve(T,x,C)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const r=Ve.ZERO;if(typeof t=="bigint"&&t===De)return r;let o=qg(t);if(o===lt)return this;if(!Ha){let d=r,f=this;for(;o>De;)o&lt&&(d=d.add(f)),f=f.double(),o>>=lt;return d}let{k1neg:n,k1:i,k2neg:s,k2:a}=Ba.splitScalar(o),l=r,c=r,u=this;for(;i>De||a>De;)i&lt&&(l=l.add(u)),a&lt&&(c=c.add(u)),u=u.double(),i>>=lt,a>>=lt;return n&&(l=l.negate()),s&&(c=c.negate()),c=new Ve(le(c.x*Ba.beta),c.y,c.z),l.add(c)}precomputeWindow(t){const r=Ha?128/t+1:256/t+1,o=[];let n=this,i=n;for(let s=0;s<r;s++){i=n,o.push(i);for(let a=1;a<2**(t-1);a++)i=i.add(n),o.push(i);n=i.double()}return o}wNAF(t,r){!r&&this.equals(Ve.BASE)&&(r=ze.BASE);const o=r&&r._WINDOW_SIZE||1;if(256%o)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let n=r&&Wu.get(r);n||(n=this.precomputeWindow(o),r&&o!==1&&(n=Ve.normalizeZ(n),Wu.set(r,n)));let i=Ve.ZERO,s=Ve.BASE;const a=1+(Ha?128/o:256/o),l=2**(o-1),c=BigInt(2**o-1),u=2**o,d=BigInt(o);for(let f=0;f<a;f++){const h=f*l;let p=Number(t&c);t>>=d,p>l&&(p-=u,t+=lt);const b=h,y=h+Math.abs(p)-1,g=f%2!==0,w=p<0;p===0?s=s.add(Da(g,n[b])):i=i.add(Da(w,n[y]))}return{p:i,f:s}}multiply(t,r){let o=qg(t),n,i;if(Ha){const{k1neg:s,k1:a,k2neg:l,k2:c}=Ba.splitScalar(o);let{p:u,f:d}=this.wNAF(a,r),{p:f,f:h}=this.wNAF(c,r);u=Da(s,u),f=Da(l,f),f=new Ve(le(f.x*Ba.beta),f.y,f.z),n=u.add(f),i=d.add(h)}else{const{p:s,f:a}=this.wNAF(o,r);n=s,i=a}return Ve.normalizeZ([n,i])[0]}toAffine(t){const{x:r,y:o,z:n}=this,i=this.equals(Ve.ZERO);t==null&&(t=i?Ng:zi(n));const s=t,a=le(s*s),l=le(a*s),c=le(r*a),u=le(o*l),d=le(n*s);if(i)return ze.ZERO;if(d!==lt)throw new Error("invZ was invalid");return new ze(c,u)}}Ve.BASE=new Ve(Ge.Gx,Ge.Gy,lt);Ve.ZERO=new Ve(De,lt,De);function Da(e,t){const r=t.negate();return e?r:t}const Wu=new WeakMap;class ze{constructor(t,r){this.x=t,this.y=r}_setWindowSize(t){this._WINDOW_SIZE=t,Wu.delete(this)}hasEvenY(){return this.y%Oo===De}static fromCompressedHex(t){const r=t.length===32,o=or(r?t:t.subarray(1));if(!el(o))throw new Error("Point is not on curve");const n=Wg(o);let i=nz(n);const s=(i&lt)===lt;r?s&&(i=le(-i)):(t[0]&1)===1!==s&&(i=le(-i));const a=new ze(o,i);return a.assertValidity(),a}static fromUncompressedHex(t){const r=or(t.subarray(1,xr+1)),o=or(t.subarray(xr+1,xr*2+1)),n=new ze(r,o);return n.assertValidity(),n}static fromHex(t){const r=zr(t),o=r.length,n=r[0];if(o===xr)return this.fromCompressedHex(r);if(o===yl&&(n===2||n===3))return this.fromCompressedHex(r);if(o===xl&&n===4)return this.fromUncompressedHex(r);throw new Error(`Point.fromHex: received invalid point. Expected 32-${yl} compressed bytes or ${xl} uncompressed bytes, not ${o}`)}static fromPrivateKey(t){return ze.BASE.multiply(Ln(t))}static fromSignature(t,r,o){const{r:n,s:i}=jy(r);if(![0,1,2,3].includes(o))throw new Error("Cannot recover: invalid recovery bit");const s=bf(zr(t)),{n:a}=Ge,l=o===2||o===3?n+a:n,c=zi(l,a),u=le(-s*c,a),d=le(i*c,a),f=o&1?"03":"02",h=ze.fromHex(f+Do(l)),p=ze.BASE.multiplyAndAddUnsafe(h,u,d);if(!p)throw new Error("Cannot recover signature: point at infinify");return p.assertValidity(),p}toRawBytes(t=!1){return zo(this.toHex(t))}toHex(t=!1){const r=Do(this.x);return t?`${this.hasEvenY()?"02":"03"}${r}`:`04${r}${Do(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:r,y:o}=this;if(!el(r)||!el(o))throw new Error(t);const n=le(o*o),i=Wg(r);if(le(n-i)!==De)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new ze(this.x,le(-this.y))}double(){return Ve.fromAffine(this).double().toAffine()}add(t){return Ve.fromAffine(this).add(Ve.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Ve.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,r,o){const n=Ve.fromAffine(this),i=r===De||r===lt||this!==ze.BASE?n.multiplyUnsafe(r):n.multiply(r),s=Ve.fromAffine(t).multiplyUnsafe(o),a=i.add(s);return a.equals(Ve.ZERO)?void 0:a.toAffine()}}ze.BASE=new ze(Ge.Gx,Ge.Gy);ze.ZERO=new ze(De,De);function Vg(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Kg(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${wi(e)}`);const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(r[0]===0&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:or(r),left:e.subarray(t+2)}}function tz(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${wi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=Kg(e.subarray(2)),{data:o,left:n}=Kg(r);if(n.length)throw new Error(`Invalid signature: left bytes after parsing: ${wi(n)}`);return{r:t,s:o}}class Qr{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromCompact(t){const r=t instanceof Uint8Array,o="Signature.fromCompact";if(typeof t!="string"&&!r)throw new TypeError(`${o}: Expected string or Uint8Array`);const n=r?wi(t):t;if(n.length!==128)throw new Error(`${o}: Expected 64-byte hex`);return new Qr(Cl(n.slice(0,64)),Cl(n.slice(64,128)))}static fromDER(t){const r=t instanceof Uint8Array;if(typeof t!="string"&&!r)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:o,s:n}=tz(r?t:zo(t));return new Qr(o,n)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:r}=this;if(!Ei(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Ei(r))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Ge.n>>lt;return this.s>t}normalizeS(){return this.hasHighS()?new Qr(this.r,le(-this.s,Ge.n)):this}toDERRawBytes(){return zo(this.toDERHex())}toDERHex(){const t=Vg(Zi(this.s)),r=Vg(Zi(this.r)),o=t.length/2,n=r.length/2,i=Zi(o),s=Zi(n);return`30${Zi(n+o+4)}02${s}${r}02${i}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return zo(this.toCompactHex())}toCompactHex(){return Do(this.r)+Do(this.s)}}function ko(...e){if(!e.every(o=>o instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((o,n)=>o+n.length,0),r=new Uint8Array(t);for(let o=0,n=0;o<e.length;o++){const i=e[o];r.set(i,n),n+=i.length}return r}const rz=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function wi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=rz[e[r]];return t}const oz=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Do(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(De<=e&&e<oz))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Si(e){const t=zo(Do(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function Zi(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function Cl(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function zo(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const o=r*2,n=e.slice(o,o+2),i=Number.parseInt(n,16);if(Number.isNaN(i)||i<0)throw new Error("Invalid byte sequence");t[r]=i}return t}function or(e){return Cl(wi(e))}function zr(e){return e instanceof Uint8Array?Uint8Array.from(e):zo(e)}function qg(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Ei(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function le(e,t=Ge.P){const r=e%t;return r>=De?r:t+r}function lr(e,t){const{P:r}=Ge;let o=e;for(;t-- >De;)o*=o,o%=r;return o}function nz(e){const{P:t}=Ge,r=BigInt(6),o=BigInt(11),n=BigInt(22),i=BigInt(23),s=BigInt(44),a=BigInt(88),l=e*e*e%t,c=l*l*e%t,u=lr(c,xs)*c%t,d=lr(u,xs)*c%t,f=lr(d,Oo)*l%t,h=lr(f,o)*f%t,p=lr(h,n)*h%t,b=lr(p,s)*p%t,y=lr(b,a)*b%t,g=lr(y,s)*p%t,w=lr(g,xs)*c%t,T=lr(w,i)*h%t,x=lr(T,r)*l%t,C=lr(x,Oo);if(C*C%t!==e)throw new Error("Cannot find square root");return C}function zi(e,t=Ge.P){if(e===De||t<=De)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=le(e,t),o=t,n=De,i=lt;for(;r!==De;){const a=o/r,l=o%r,c=n-i*a;o=r,r=l,n=i,i=c}if(o!==lt)throw new Error("invert: does not exist");return le(n,t)}function iz(e,t=Ge.P){const r=new Array(e.length),o=e.reduce((i,s,a)=>s===De?i:(r[a]=i,le(i*s,t)),lt),n=zi(o,t);return e.reduceRight((i,s,a)=>s===De?i:(r[a]=le(i*r[a],t),le(i*s,t)),n),r}function sz(e){const t=e.length*8-Ci*8,r=or(e);return t>0?r>>BigInt(t):r}function bf(e,t=!1){const r=sz(e);if(t)return r;const{n:o}=Ge;return r>=o?r-o:r}let li,Cs;class az{constructor(t,r){if(this.hashLen=t,this.qByteLen=r,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof r!="number"||r<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Re.hmacSha256(this.k,...t)}hmacSync(...t){return Cs(this.k,...t)}checkSync(){if(typeof Cs!="function")throw new mf("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const o=this.v.slice();r.push(o),t+=this.v.length}return ko(...r)}generateSync(){this.checkSync(),this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const o=this.v.slice();r.push(o),t+=this.v.length}return ko(...r)}}function Ei(e){return De<e&&e<Ge.n}function el(e){return De<e&&e<Ge.P}function lz(e,t,r,o=!0){const{n}=Ge,i=bf(e,!0);if(!Ei(i))return;const s=zi(i,n),a=ze.BASE.multiply(i),l=le(a.x,n);if(l===De)return;const c=le(s*le(t+r*l,n),n);if(c===De)return;let u=new Qr(l,c),d=(a.x===u.r?0:2)|Number(a.y&lt);return o&&u.hasHighS()&&(u=u.normalizeS(),d^=1),{sig:u,recovery:d}}function Ln(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*Ci)throw new Error("Expected 32 bytes of private key");t=Cl(e)}else if(e instanceof Uint8Array){if(e.length!==Ci)throw new Error("Expected 32 bytes of private key");t=or(e)}else throw new TypeError("Expected valid private key");if(!Ei(t))throw new Error("Expected private key: 0 < key < n");return t}function vf(e){return e instanceof ze?(e.assertValidity(),e):ze.fromHex(e)}function jy(e){if(e instanceof Qr)return e.assertValidity(),e;try{return Qr.fromDER(e)}catch{return Qr.fromCompact(e)}}function cz(e,t=!1){return ze.fromPrivateKey(e).toRawBytes(t)}function Gg(e){const t=e instanceof Uint8Array,r=typeof e=="string",o=(t||r)&&e.length;return t?o===yl||o===xl:r?o===yl*2||o===xl*2:e instanceof ze}function Wy(e,t,r=!1){if(Gg(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Gg(t))throw new TypeError("getSharedSecret: second arg must be public key");const o=vf(t);return o.assertValidity(),o.multiply(Ln(e)).toRawBytes(r)}function Uy(e){const t=e.length>xr?e.slice(0,xr):e;return or(t)}function uz(e){const t=Uy(e),r=le(t,Ge.n);return Vy(r<De?t:r)}function Vy(e){return Si(e)}function dz(e,t,r){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const o=zr(e),n=Ln(t),i=[Vy(n),uz(o)];if(r!=null){r===!0&&(r=Re.randomBytes(xr));const l=zr(r);if(l.length!==xr)throw new Error(`sign: Expected ${xr} bytes of extra data`);i.push(l)}const s=ko(...i),a=Uy(o);return{seed:s,m:a,d:n}}function fz(e,t){const{sig:r,recovery:o}=e,{der:n,recovered:i}=Object.assign({canonical:!0,der:!0},t),s=n?r.toDERRawBytes():r.toCompactRawBytes();return i?[s,o]:s}function hz(e,t,r={}){const{seed:o,m:n,d:i}=dz(e,t,r.extraEntropy),s=new az(ez,Ci);s.reseedSync(o);let a;for(;!(a=lz(s.generateSync(),n,i,r.canonical));)s.reseedSync();return fz(a,r)}const pz={strict:!0};function gz(e,t,r,o=pz){let n;try{n=jy(e),t=zr(t)}catch{return!1}const{r:i,s}=n;if(o.strict&&n.hasHighS())return!1;const a=bf(t);let l;try{l=vf(r)}catch{return!1}const{n:c}=Ge,u=zi(s,c),d=le(a*u,c),f=le(i*u,c),h=ze.BASE.multiplyAndAddUnsafe(l,d,f);return h?le(h.x,c)===i:!1}function wl(e){return le(or(e),Ge.n)}class _i{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromHex(t){const r=zr(t);if(r.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${r.length}`);const o=or(r.subarray(0,32)),n=or(r.subarray(32,64));return new _i(o,n)}assertValidity(){const{r:t,s:r}=this;if(!el(t)||!Ei(r))throw new Error("Invalid signature")}toHex(){return Do(this.r)+Do(this.s)}toRawBytes(){return zo(this.toHex())}}function mz(e){return ze.fromPrivateKey(e).toRawX()}class Ky{constructor(t,r,o=Re.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=zr(t);const{x:n,scalar:i}=this.getScalar(Ln(r));if(this.px=n,this.d=i,this.rand=zr(o),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const r=ze.fromPrivateKey(t),o=r.hasEvenY()?t:Ge.n-t;return{point:r,scalar:o,x:r.toRawX()}}initNonce(t,r){return Si(t^or(r))}finalizeNonce(t){const r=le(or(t),Ge.n);if(r===De)throw new Error("sign: Creation of signature failed. k is zero");const{point:o,x:n,scalar:i}=this.getScalar(r);return{R:o,rx:n,k:i}}finalizeSig(t,r,o,n){return new _i(t.x,le(r+o*n,Ge.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:r,px:o,rand:n}=this,i=Re.taggedHash,s=this.initNonce(r,await i(Lo.aux,n)),{R:a,rx:l,k:c}=this.finalizeNonce(await i(Lo.nonce,s,o,t)),u=wl(await i(Lo.challenge,l,o,t)),d=this.finalizeSig(a,c,u,r);return await Xy(d,t,o)||this.error(),d}calcSync(){const{m:t,d:r,px:o,rand:n}=this,i=Re.taggedHashSync,s=this.initNonce(r,i(Lo.aux,n)),{R:a,rx:l,k:c}=this.finalizeNonce(i(Lo.nonce,s,o,t)),u=wl(i(Lo.challenge,l,o,t)),d=this.finalizeSig(a,c,u,r);return Yy(d,t,o)||this.error(),d}}async function bz(e,t,r){return new Ky(e,t,r).calc()}function vz(e,t,r){return new Ky(e,t,r).calcSync()}function qy(e,t,r){const o=e instanceof _i,n=o?e:_i.fromHex(e);return o&&n.assertValidity(),{...n,m:zr(t),P:vf(r)}}function Gy(e,t,r,o){const n=ze.BASE.multiplyAndAddUnsafe(t,Ln(r),le(-o,Ge.n));return!(!n||!n.hasEvenY()||n.x!==e)}async function Xy(e,t,r){try{const{r:o,s:n,m:i,P:s}=qy(e,t,r),a=wl(await Re.taggedHash(Lo.challenge,Si(o),s.toRawX(),i));return Gy(o,s,n,a)}catch{return!1}}function Yy(e,t,r){try{const{r:o,s:n,m:i,P:s}=qy(e,t,r),a=wl(Re.taggedHashSync(Lo.challenge,Si(o),s.toRawX(),i));return Gy(o,s,n,a)}catch(o){if(o instanceof mf)throw o;return!1}}const sa={Signature:_i,getPublicKey:mz,sign:bz,verify:Xy,signSync:vz,verifySync:Yy};ze.BASE._setWindowSize(8);const Zt={node:QD,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Lo={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},za={},Re={bytesToHex:wi,hexToBytes:zo,concatBytes:ko,mod:le,invert:zi,isValidPrivateKey(e){try{return Ln(e),!0}catch{return!1}},_bigintTo32Bytes:Si,_normalizePrivateKey:Ln,hashToPrivateKey:e=>{e=zr(e);const t=Ci+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const r=le(or(e),Ge.n-lt)+lt;return Si(r)},randomBytes:(e=32)=>{if(Zt.web)return Zt.web.getRandomValues(new Uint8Array(e));if(Zt.node){const{randomBytes:t}=Zt.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Re.hashToPrivateKey(Re.randomBytes(Ci+8)),precompute(e=8,t=ze.BASE){const r=t===ze.BASE?t:new ze(t.x,t.y);return r._setWindowSize(e),r.multiply(xs),r},sha256:async(...e)=>{if(Zt.web){const t=await Zt.web.subtle.digest("SHA-256",ko(...e));return new Uint8Array(t)}else if(Zt.node){const{createHash:t}=Zt.node,r=t("sha256");return e.forEach(o=>r.update(o)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(Zt.web){const r=await Zt.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),o=ko(...t),n=await Zt.web.subtle.sign("HMAC",r,o);return new Uint8Array(n)}else if(Zt.node){const{createHmac:r}=Zt.node,o=r("sha256",e);return t.forEach(n=>o.update(n)),Uint8Array.from(o.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let r=za[e];if(r===void 0){const o=await Re.sha256(Uint8Array.from(e,n=>n.charCodeAt(0)));r=ko(o,o),za[e]=r}return Re.sha256(r,...t)},taggedHashSync:(e,...t)=>{if(typeof li!="function")throw new mf("sha256Sync is undefined, you need to set it");let r=za[e];if(r===void 0){const o=li(Uint8Array.from(e,n=>n.charCodeAt(0)));r=ko(o,o),za[e]=r}return li(r,...t)},_JacobianPoint:Ve};Object.defineProperties(Re,{sha256Sync:{configurable:!1,get(){return li},set(e){li||(li=e)}},hmacSha256Sync:{configurable:!1,get(){return Cs},set(e){Cs||(Cs=e)}}});const Xg={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Wc=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),kr=(e,t)=>e<<32-t|e>>>t,yz=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!yz)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));(()=>{const e=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(e){const{setImmediate:t}=e("timers");return()=>new Promise(r=>t(r))}}catch{}return()=>new Promise(t=>setTimeout(t,0))})();function xz(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function yf(e){if(typeof e=="string"&&(e=xz(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Yg(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Cz(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Yg(e.outputLen),Yg(e.blockLen)}class Uu{clone(){return this._cloneInto()}}function wz(e){const t=o=>e().update(yf(o)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function Sz(e=32){if(Xg.web)return Xg.web.getRandomValues(new Uint8Array(e));throw new Error("The environment doesn't have randomBytes function")}function Ez(e,t,r,o){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,o);const n=BigInt(32),i=BigInt(4294967295),s=Number(r>>n&i),a=Number(r&i),l=o?4:0,c=o?0:4;e.setUint32(t+l,s,o),e.setUint32(t+c,a,o)}class _z extends Uu{constructor(t,r,o,n){super(),this.blockLen=t,this.outputLen=r,this.padOffset=o,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Wc(this.buffer)}update(t){if(this.destroyed)throw new Error("instance is destroyed");const{view:r,buffer:o,blockLen:n,finished:i}=this;if(i)throw new Error("digest() was already called");t=yf(t);const s=t.length;for(let a=0;a<s;){const l=Math.min(n-this.pos,s-a);if(l===n){const c=Wc(t);for(;n<=s-a;a+=n)this.process(c,a);continue}o.set(t.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===n&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:r,view:o,blockLen:n,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>n-s&&(this.process(o,0),s=0);for(let l=s;l<n;l++)r[l]=0;Ez(o,n-8,BigInt(this.length*8),i),this.process(o,0);const a=Wc(t);this.get().forEach((l,c)=>a.setUint32(4*c,l,i))}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const o=t.slice(0,r);return this.destroy(),o}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:o,length:n,finished:i,destroyed:s,pos:a}=this;return t.length=n,t.pos=a,t.finished=i,t.destroyed=s,n%r&&t.buffer.set(o),t}}const Tz=(e,t,r)=>e&t^~e&r,$z=(e,t,r)=>e&t^e&r^t&r,Pz=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),vo=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),yo=new Uint32Array(64);class Lz extends _z{constructor(){super(64,32,8,!1),this.A=vo[0]|0,this.B=vo[1]|0,this.C=vo[2]|0,this.D=vo[3]|0,this.E=vo[4]|0,this.F=vo[5]|0,this.G=vo[6]|0,this.H=vo[7]|0}get(){const{A:t,B:r,C:o,D:n,E:i,F:s,G:a,H:l}=this;return[t,r,o,n,i,s,a,l]}set(t,r,o,n,i,s,a,l){this.A=t|0,this.B=r|0,this.C=o|0,this.D=n|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,r){for(let d=0;d<16;d++,r+=4)yo[d]=t.getUint32(r,!1);for(let d=16;d<64;d++){const f=yo[d-15],h=yo[d-2],p=kr(f,7)^kr(f,18)^f>>>3,b=kr(h,17)^kr(h,19)^h>>>10;yo[d]=b+yo[d-7]+p+yo[d-16]|0}let{A:o,B:n,C:i,D:s,E:a,F:l,G:c,H:u}=this;for(let d=0;d<64;d++){const f=kr(a,6)^kr(a,11)^kr(a,25),h=u+f+Tz(a,l,c)+Pz[d]+yo[d]|0,b=(kr(o,2)^kr(o,13)^kr(o,22))+$z(o,n,i)|0;u=c,c=l,l=a,a=s+h|0,s=i,i=n,n=o,o=h+b|0}o=o+this.A|0,n=n+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(o,n,i,s,a,l,c,u)}roundClean(){yo.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const aa=wz(()=>new Lz);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Zo(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function _r(...e){const t=(n,i)=>s=>n(i(s)),r=Array.from(e).reverse().reduce((n,i)=>n?t(n,i.encode):i.encode,void 0),o=e.reduce((n,i)=>n?t(n,i.decode):i.decode,void 0);return{encode:r,decode:o}}function Nr(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(r=>{if(Zo(r),r<0||r>=e.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);return e[r]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);const o=e.indexOf(r);if(o===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);return o})}}}function jr(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of t)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function la(e,t="="){if(Zo(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.encode: non-string input=${o}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let n of r)if(typeof n!="string")throw new Error(`padding.decode: non-string input=${n}`);let o=r.length;if(o*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;o>0&&r[o-1]===t;o--)if(!((o-1)*e%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,o)}}}function Zy(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Zg(e,t,r){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let o=0;const n=[],i=Array.from(e);for(i.forEach(s=>{if(Zo(s),s<0||s>=t)throw new Error(`Wrong integer: ${s}`)});;){let s=0,a=!0;for(let l=o;l<i.length;l++){const c=i[l],u=t*s+c;if(!Number.isSafeInteger(u)||t*s/t!==s||u-c!==t*s)throw new Error("convertRadix: carry overflow");if(s=u%r,i[l]=Math.floor(u/r),!Number.isSafeInteger(i[l])||i[l]*r+s!==u)throw new Error("convertRadix: carry overflow");if(a)i[l]?a=!1:o=l;else continue}if(n.push(s),a)break}for(let s=0;s<e.length-1&&e[s]===0;s++)n.push(0);return n.reverse()}const Jy=(e,t)=>t?Jy(t,e%t):e,Sl=(e,t)=>e+(t-Jy(e,t));function Vu(e,t,r,o){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Sl(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Sl(t,r)}`);let n=0,i=0;const s=2**r-1,a=[];for(const l of e){if(Zo(l),l>=2**t)throw new Error(`convertRadix2: invalid data word=${l} from=${t}`);if(n=n<<t|l,i+t>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);for(i+=t;i>=r;i-=r)a.push((n>>i-r&s)>>>0);n&=2**i-1}if(n=n<<r-i&s,!o&&i>=t)throw new Error("Excess padding");if(!o&&n)throw new Error(`Non-zero padding: ${n}`);return o&&i>0&&a.push(n>>>0),a}function Qy(e){return Zo(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Zg(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Zg(t,e,2**8))}}}function co(e,t=!1){if(Zo(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Sl(8,e)>32||Sl(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Vu(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Vu(r,e,8,t))}}}function Jg(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function ex(e,t){if(Zo(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const o=t(r).slice(0,e),n=new Uint8Array(r.length+e);return n.set(r),n.set(o,r.length),n},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const o=r.slice(0,-e),n=t(o).slice(0,e),i=r.slice(-e);for(let s=0;s<e;s++)if(n[s]!==i[s])throw new Error("Invalid checksum");return o}}}const kz={alphabet:Nr,chain:_r,checksum:ex,radix:Qy,radix2:co,join:jr,padding:la},tx=_r(co(4),Nr("0123456789ABCDEF"),jr("")),rx=_r(co(5),Nr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),la(5),jr("")),Iz=_r(co(5),Nr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),la(5),jr("")),Rz=_r(co(5),Nr("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),jr(""),Zy(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ti=_r(co(6),Nr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),la(6),jr("")),ox=_r(co(6),Nr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),la(6),jr("")),xf=e=>_r(Qy(58),Nr(e),jr("")),Us=xf("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Oz=xf("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),Az=xf("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Qg=[0,2,3,5,6,7,9,10,11],nx={encode(e){let t="";for(let r=0;r<e.length;r+=8){const o=e.subarray(r,r+8);t+=Us.encode(o).padStart(Qg[o.length],"1")}return t},decode(e){let t=[];for(let r=0;r<e.length;r+=11){const o=e.slice(r,r+11),n=Qg.indexOf(o.length),i=Us.decode(o);for(let s=0;s<i.length-n;s++)if(i[s]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(i.slice(i.length-n)))}return Uint8Array.from(t)}},ix=e=>_r(ex(4,t=>e(e(t))),Us),Ku=_r(Nr("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),jr("")),em=[996825010,642813549,513874426,1027748829,705979059];function Ji(e){const t=e>>25;let r=(e&33554431)<<5;for(let o=0;o<em.length;o++)(t>>o&1)===1&&(r^=em[o]);return r}function tm(e,t,r=1){const o=e.length;let n=1;for(let i=0;i<o;i++){const s=e.charCodeAt(i);if(s<33||s>126)throw new Error(`Invalid prefix (${e})`);n=Ji(n)^s>>5}n=Ji(n);for(let i=0;i<o;i++)n=Ji(n)^e.charCodeAt(i)&31;for(let i of t)n=Ji(n)^i;for(let i=0;i<6;i++)n=Ji(n);return n^=r,Ku.encode(Vu([n%2**30],30,5,!1))}function sx(e){const t=e==="bech32"?1:734539939,r=co(5),o=r.decode,n=r.encode,i=Jg(o);function s(u,d,f=90){if(typeof u!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof u}`);if(!Array.isArray(d)||d.length&&typeof d[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof d}`);const h=u.length+7+d.length;if(f!==!1&&h>f)throw new TypeError(`Length ${h} exceeds limit ${f}`);return u=u.toLowerCase(),`${u}1${Ku.encode(d)}${tm(u,d,t)}`}function a(u,d=90){if(typeof u!="string")throw new Error(`bech32.decode input should be string, not ${typeof u}`);if(u.length<8||d!==!1&&u.length>d)throw new TypeError(`Wrong string length: ${u.length} (${u}). Expected (8..${d})`);const f=u.toLowerCase();if(u!==f&&u!==u.toUpperCase())throw new Error("String must be lowercase or uppercase");u=f;const h=u.lastIndexOf("1");if(h===0||h===-1)throw new Error('Letter "1" must be present between prefix and data only');const p=u.slice(0,h),b=u.slice(h+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");const y=Ku.decode(b).slice(0,-6),g=tm(p,y,t);if(!b.endsWith(g))throw new Error(`Invalid checksum in ${u}: expected "${g}"`);return{prefix:p,words:y}}const l=Jg(a);function c(u){const{prefix:d,words:f}=a(u,!1);return{prefix:d,words:f,bytes:o(f)}}return{encode:s,decode:a,decodeToBytes:c,decodeUnsafe:l,fromWords:o,fromWordsUnsafe:i,toWords:n}}const ir=sx("bech32"),Mz=sx("bech32m"),ax={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},lx=_r(co(4),Nr("0123456789abcdef"),jr(""),Zy(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Vs={utf8:ax,hex:lx,base16:tx,base32:rx,base64:Ti,base64url:ox,base58:Us,base58xmr:nx},cx=`Invalid encoding type. Available types: ${Object.keys(Vs).join(", ")}`,ux=(e,t)=>{if(typeof e!="string"||!Vs.hasOwnProperty(e))throw new TypeError(cx);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Vs[e].encode(t)},Bz=ux,dx=(e,t)=>{if(!Vs.hasOwnProperty(e))throw new TypeError(cx);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Vs[e].decode(t)},Hz=dx,Dz=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Zo,utils:kz,base16:tx,base32:rx,base32hex:Iz,base32crockford:Rz,base64:Ti,base64url:ox,base58:Us,base58flickr:Oz,base58xrp:Az,base58xmr:nx,base58check:ix,bech32:ir,bech32m:Mz,utf8:ax,hex:lx,bytesToString:ux,str:Bz,stringToBytes:dx,bytes:Hz},Symbol.toStringTag,{value:"Module"}));var Cf={};Object.defineProperty(Cf,"__esModule",{value:!0});var wf=Cf.wordlist=void 0;wf=Cf.wordlist=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);var tr={};function El(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function fx(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Io(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function hx(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");El(e.outputLen),El(e.blockLen)}function px(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function gx(e,t){Io(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const Ao={number:El,bool:fx,bytes:Io,hash:hx,exists:px,output:gx},zz=Object.freeze(Object.defineProperty({__proto__:null,number:El,bool:fx,bytes:Io,hash:hx,exists:px,output:gx,default:Ao},Symbol.toStringTag,{value:"Module"})),Fz=Hi(zz);var $i={},Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.output=Rt.exists=Rt.hash=Rt.bytes=Rt.bool=Rt.number=void 0;function _l(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Rt.number=_l;function mx(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Rt.bool=mx;function Sf(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}Rt.bytes=Sf;function bx(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");_l(e.outputLen),_l(e.blockLen)}Rt.hash=bx;function vx(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Rt.exists=vx;function yx(e,t){Sf(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}Rt.output=yx;const Nz={number:_l,bool:mx,bytes:Sf,hash:bx,exists:vx,output:yx};Rt.default=Nz;var xx={},Ef={};const ns={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},jz=Object.freeze(Object.defineProperty({__proto__:null,crypto:ns},Symbol.toStringTag,{value:"Module"})),Wz=Hi(jz);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=Wz,r=x=>new Uint8Array(x.buffer,x.byteOffset,x.byteLength);e.u8=r;const o=x=>new Uint32Array(x.buffer,x.byteOffset,Math.floor(x.byteLength/4));e.u32=o;const n=x=>new DataView(x.buffer,x.byteOffset,x.byteLength);e.createView=n;const i=(x,C)=>x<<32-C|x>>>C;if(e.rotr=i,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const s=Array.from({length:256},(x,C)=>C.toString(16).padStart(2,"0"));function a(x){if(!(x instanceof Uint8Array))throw new Error("Uint8Array expected");let C="";for(let $=0;$<x.length;$++)C+=s[x[$]];return C}e.bytesToHex=a;function l(x){if(typeof x!="string")throw new TypeError("hexToBytes: expected string, got "+typeof x);if(x.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const C=new Uint8Array(x.length/2);for(let $=0;$<C.length;$++){const S=$*2,L=x.slice(S,S+2),k=Number.parseInt(L,16);if(Number.isNaN(k)||k<0)throw new Error("Invalid byte sequence");C[$]=k}return C}e.hexToBytes=l;const c=async()=>{};e.nextTick=c;async function u(x,C,$){let S=Date.now();for(let L=0;L<x;L++){$(L);const k=Date.now()-S;k>=0&&k<C||(await(0,e.nextTick)(),S+=k)}}e.asyncLoop=u;function d(x){if(typeof x!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof x}`);return new TextEncoder().encode(x)}e.utf8ToBytes=d;function f(x){if(typeof x=="string"&&(x=d(x)),!(x instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof x})`);return x}e.toBytes=f;function h(...x){if(!x.every(S=>S instanceof Uint8Array))throw new Error("Uint8Array list expected");if(x.length===1)return x[0];const C=x.reduce((S,L)=>S+L.length,0),$=new Uint8Array(C);for(let S=0,L=0;S<x.length;S++){const k=x[S];$.set(k,L),L+=k.length}return $}e.concatBytes=h;class p{clone(){return this._cloneInto()}}e.Hash=p;const b=x=>Object.prototype.toString.call(x)==="[object Object]"&&x.constructor===Object;function y(x,C){if(C!==void 0&&(typeof C!="object"||!b(C)))throw new TypeError("Options should be object or undefined");return Object.assign(x,C)}e.checkOpts=y;function g(x){const C=S=>x().update(f(S)).digest(),$=x();return C.outputLen=$.outputLen,C.blockLen=$.blockLen,C.create=()=>x(),C}e.wrapConstructor=g;function w(x){const C=(S,L)=>x(L).update(f(S)).digest(),$=x({});return C.outputLen=$.outputLen,C.blockLen=$.blockLen,C.create=S=>x(S),C}e.wrapConstructorWithOpts=w;function T(x=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(x));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(x).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=T})(Ef);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Rt,r=Ef;class o extends r.Hash{constructor(s,a){super(),this.finished=!1,this.destroyed=!1,t.default.hash(s);const l=(0,r.toBytes)(a);if(this.iHash=s.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const c=this.blockLen,u=new Uint8Array(c);u.set(l.length>c?s.create().update(l).digest():l);for(let d=0;d<u.length;d++)u[d]^=54;this.iHash.update(u),this.oHash=s.create();for(let d=0;d<u.length;d++)u[d]^=106;this.oHash.update(u),u.fill(0)}update(s){return t.default.exists(this),this.iHash.update(s),this}digestInto(s){t.default.exists(this),t.default.bytes(s,this.outputLen),this.finished=!0,this.iHash.digestInto(s),this.oHash.update(s),this.oHash.digestInto(s),this.destroy()}digest(){const s=new Uint8Array(this.oHash.outputLen);return this.digestInto(s),s}_cloneInto(s){s||(s=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:l,finished:c,destroyed:u,blockLen:d,outputLen:f}=this;return s=s,s.finished=c,s.destroyed=u,s.blockLen=d,s.outputLen=f,s.oHash=a._cloneInto(s.oHash),s.iHash=l._cloneInto(s.iHash),s}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const n=(i,s,a)=>new o(i,s).update(a).digest();e.hmac=n,e.hmac.create=(i,s)=>new o(i,s)})(xx);Object.defineProperty($i,"__esModule",{value:!0});$i.pbkdf2Async=$i.pbkdf2=void 0;const Fa=Rt,Uz=xx,ci=Ef;function Cx(e,t,r,o){Fa.default.hash(e);const n=(0,ci.checkOpts)({dkLen:32,asyncTick:10},o),{c:i,dkLen:s,asyncTick:a}=n;if(Fa.default.number(i),Fa.default.number(s),Fa.default.number(a),i<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=(0,ci.toBytes)(t),c=(0,ci.toBytes)(r),u=new Uint8Array(s),d=Uz.hmac.create(e,l),f=d._cloneInto().update(c);return{c:i,dkLen:s,asyncTick:a,DK:u,PRF:d,PRFSalt:f}}function wx(e,t,r,o,n){return e.destroy(),t.destroy(),o&&o.destroy(),n.fill(0),r}function Vz(e,t,r,o){const{c:n,dkLen:i,DK:s,PRF:a,PRFSalt:l}=Cx(e,t,r,o);let c;const u=new Uint8Array(4),d=(0,ci.createView)(u),f=new Uint8Array(a.outputLen);for(let h=1,p=0;p<i;h++,p+=a.outputLen){const b=s.subarray(p,p+a.outputLen);d.setInt32(0,h,!1),(c=l._cloneInto(c)).update(u).digestInto(f),b.set(f.subarray(0,b.length));for(let y=1;y<n;y++){a._cloneInto(c).update(f).digestInto(f);for(let g=0;g<b.length;g++)b[g]^=f[g]}}return wx(a,l,s,c,f)}$i.pbkdf2=Vz;async function Kz(e,t,r,o){const{c:n,dkLen:i,asyncTick:s,DK:a,PRF:l,PRFSalt:c}=Cx(e,t,r,o);let u;const d=new Uint8Array(4),f=(0,ci.createView)(d),h=new Uint8Array(l.outputLen);for(let p=1,b=0;b<i;p++,b+=l.outputLen){const y=a.subarray(b,b+l.outputLen);f.setInt32(0,p,!1),(u=c._cloneInto(u)).update(d).digestInto(h),y.set(h.subarray(0,y.length)),await(0,ci.asyncLoop)(n-1,s,g=>{l._cloneInto(u).update(h).digestInto(h);for(let w=0;w<y.length;w++)y[w]^=h[w]})}return wx(l,c,a,u,h)}$i.pbkdf2Async=Kz;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const qz=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Gz=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),_n=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),br=(e,t)=>e<<32-t|e>>>t,Sx=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Sx)throw new Error("Non little-endian hardware is not supported");const Xz=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ex(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=Xz[e[r]];return t}function _x(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const o=r*2,n=e.slice(o,o+2),i=Number.parseInt(n,16);if(Number.isNaN(i)||i<0)throw new Error("Invalid byte sequence");t[r]=i}return t}const Tx=async()=>{};async function Yz(e,t,r){let o=Date.now();for(let n=0;n<e;n++){r(n);const i=Date.now()-o;i>=0&&i<t||(await Tx(),o+=i)}}function _f(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function ca(e){if(typeof e=="string"&&(e=_f(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function is(...e){if(!e.every(o=>o instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((o,n)=>o+n.length,0),r=new Uint8Array(t);for(let o=0,n=0;o<e.length;o++){const i=e[o];r.set(i,n),n+=i.length}return r}class Tf{clone(){return this._cloneInto()}}const Zz=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function Jz(e,t){if(t!==void 0&&(typeof t!="object"||!Zz(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function Jo(e){const t=o=>e().update(ca(o)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function Qz(e){const t=(o,n)=>e(n).update(ca(o)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=o=>e(o),t}function e7(e=32){if(ns.web)return ns.web.getRandomValues(new Uint8Array(e));if(ns.node)return new Uint8Array(ns.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const t7=Object.freeze(Object.defineProperty({__proto__:null,u8:qz,u32:Gz,createView:_n,rotr:br,isLE:Sx,bytesToHex:Ex,hexToBytes:_x,nextTick:Tx,asyncLoop:Yz,utf8ToBytes:_f,toBytes:ca,concatBytes:is,Hash:Tf,checkOpts:Jz,wrapConstructor:Jo,wrapConstructorWithOpts:Qz,randomBytes:e7},Symbol.toStringTag,{value:"Module"}));function r7(e,t,r,o){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,o);const n=BigInt(32),i=BigInt(4294967295),s=Number(r>>n&i),a=Number(r&i),l=o?4:0,c=o?0:4;e.setUint32(t+l,s,o),e.setUint32(t+c,a,o)}class $f extends Tf{constructor(t,r,o,n){super(),this.blockLen=t,this.outputLen=r,this.padOffset=o,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=_n(this.buffer)}update(t){Ao.exists(this);const{view:r,buffer:o,blockLen:n}=this;t=ca(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(n-this.pos,i-s);if(a===n){const l=_n(t);for(;n<=i-s;s+=n)this.process(l,s);continue}o.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===n&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Ao.exists(this),Ao.output(t,this),this.finished=!0;const{buffer:r,view:o,blockLen:n,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>n-s&&(this.process(o,0),s=0);for(let d=s;d<n;d++)r[d]=0;r7(o,n-8,BigInt(this.length*8),i),this.process(o,0);const a=_n(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<c;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const o=t.slice(0,r);return this.destroy(),o}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:o,length:n,finished:i,destroyed:s,pos:a}=this;return t.length=n,t.pos=a,t.finished=i,t.destroyed=s,n%r&&t.buffer.set(o),t}}const o7=(e,t,r)=>e&t^~e&r,n7=(e,t,r)=>e&t^e&r^t&r,i7=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),xo=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Co=new Uint32Array(64);class $x extends $f{constructor(){super(64,32,8,!1),this.A=xo[0]|0,this.B=xo[1]|0,this.C=xo[2]|0,this.D=xo[3]|0,this.E=xo[4]|0,this.F=xo[5]|0,this.G=xo[6]|0,this.H=xo[7]|0}get(){const{A:t,B:r,C:o,D:n,E:i,F:s,G:a,H:l}=this;return[t,r,o,n,i,s,a,l]}set(t,r,o,n,i,s,a,l){this.A=t|0,this.B=r|0,this.C=o|0,this.D=n|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,r){for(let d=0;d<16;d++,r+=4)Co[d]=t.getUint32(r,!1);for(let d=16;d<64;d++){const f=Co[d-15],h=Co[d-2],p=br(f,7)^br(f,18)^f>>>3,b=br(h,17)^br(h,19)^h>>>10;Co[d]=b+Co[d-7]+p+Co[d-16]|0}let{A:o,B:n,C:i,D:s,E:a,F:l,G:c,H:u}=this;for(let d=0;d<64;d++){const f=br(a,6)^br(a,11)^br(a,25),h=u+f+o7(a,l,c)+i7[d]+Co[d]|0,b=(br(o,2)^br(o,13)^br(o,22))+n7(o,n,i)|0;u=c,c=l,l=a,a=s+h|0,s=i,i=n,n=o,o=h+b|0}o=o+this.A|0,n=n+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(o,n,i,s,a,l,c,u)}roundClean(){Co.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class s7 extends $x{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const uc=Jo(()=>new $x),a7=Jo(()=>new s7),l7=Object.freeze(Object.defineProperty({__proto__:null,sha256:uc,sha224:a7},Symbol.toStringTag,{value:"Module"})),c7=Hi(l7),Na=BigInt(2**32-1),qu=BigInt(32);function Px(e,t=!1){return t?{h:Number(e&Na),l:Number(e>>qu&Na)}:{h:Number(e>>qu&Na)|0,l:Number(e&Na)|0}}function u7(e,t=!1){let r=new Uint32Array(e.length),o=new Uint32Array(e.length);for(let n=0;n<e.length;n++){const{h:i,l:s}=Px(e[n],t);[r[n],o[n]]=[i,s]}return[r,o]}const d7=(e,t)=>BigInt(e>>>0)<<qu|BigInt(t>>>0),f7=(e,t,r)=>e>>>r,h7=(e,t,r)=>e<<32-r|t>>>r,p7=(e,t,r)=>e>>>r|t<<32-r,g7=(e,t,r)=>e<<32-r|t>>>r,m7=(e,t,r)=>e<<64-r|t>>>r-32,b7=(e,t,r)=>e>>>r-32|t<<64-r,v7=(e,t)=>t,y7=(e,t)=>e,x7=(e,t,r)=>e<<r|t>>>32-r,C7=(e,t,r)=>t<<r|e>>>32-r,w7=(e,t,r)=>t<<r-32|e>>>64-r,S7=(e,t,r)=>e<<r-32|t>>>64-r;function E7(e,t,r,o){const n=(t>>>0)+(o>>>0);return{h:e+r+(n/2**32|0)|0,l:n|0}}const _7=(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0),T7=(e,t,r,o)=>t+r+o+(e/2**32|0)|0,$7=(e,t,r,o)=>(e>>>0)+(t>>>0)+(r>>>0)+(o>>>0),P7=(e,t,r,o,n)=>t+r+o+n+(e/2**32|0)|0,L7=(e,t,r,o,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(o>>>0)+(n>>>0),k7=(e,t,r,o,n,i)=>t+r+o+n+i+(e/2**32|0)|0,Ie={fromBig:Px,split:u7,toBig:d7,shrSH:f7,shrSL:h7,rotrSH:p7,rotrSL:g7,rotrBH:m7,rotrBL:b7,rotr32H:v7,rotr32L:y7,rotlSH:x7,rotlSL:C7,rotlBH:w7,rotlBL:S7,add:E7,add3L:_7,add3H:T7,add4L:$7,add4H:P7,add5H:k7,add5L:L7},[I7,R7]=Ie.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),wo=new Uint32Array(80),So=new Uint32Array(80);class ua extends $f{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:r,Bh:o,Bl:n,Ch:i,Cl:s,Dh:a,Dl:l,Eh:c,El:u,Fh:d,Fl:f,Gh:h,Gl:p,Hh:b,Hl:y}=this;return[t,r,o,n,i,s,a,l,c,u,d,f,h,p,b,y]}set(t,r,o,n,i,s,a,l,c,u,d,f,h,p,b,y){this.Ah=t|0,this.Al=r|0,this.Bh=o|0,this.Bl=n|0,this.Ch=i|0,this.Cl=s|0,this.Dh=a|0,this.Dl=l|0,this.Eh=c|0,this.El=u|0,this.Fh=d|0,this.Fl=f|0,this.Gh=h|0,this.Gl=p|0,this.Hh=b|0,this.Hl=y|0}process(t,r){for(let T=0;T<16;T++,r+=4)wo[T]=t.getUint32(r),So[T]=t.getUint32(r+=4);for(let T=16;T<80;T++){const x=wo[T-15]|0,C=So[T-15]|0,$=Ie.rotrSH(x,C,1)^Ie.rotrSH(x,C,8)^Ie.shrSH(x,C,7),S=Ie.rotrSL(x,C,1)^Ie.rotrSL(x,C,8)^Ie.shrSL(x,C,7),L=wo[T-2]|0,k=So[T-2]|0,R=Ie.rotrSH(L,k,19)^Ie.rotrBH(L,k,61)^Ie.shrSH(L,k,6),H=Ie.rotrSL(L,k,19)^Ie.rotrBL(L,k,61)^Ie.shrSL(L,k,6),A=Ie.add4L(S,H,So[T-7],So[T-16]),q=Ie.add4H(A,$,R,wo[T-7],wo[T-16]);wo[T]=q|0,So[T]=A|0}let{Ah:o,Al:n,Bh:i,Bl:s,Ch:a,Cl:l,Dh:c,Dl:u,Eh:d,El:f,Fh:h,Fl:p,Gh:b,Gl:y,Hh:g,Hl:w}=this;for(let T=0;T<80;T++){const x=Ie.rotrSH(d,f,14)^Ie.rotrSH(d,f,18)^Ie.rotrBH(d,f,41),C=Ie.rotrSL(d,f,14)^Ie.rotrSL(d,f,18)^Ie.rotrBL(d,f,41),$=d&h^~d&b,S=f&p^~f&y,L=Ie.add5L(w,C,S,R7[T],So[T]),k=Ie.add5H(L,g,x,$,I7[T],wo[T]),R=L|0,H=Ie.rotrSH(o,n,28)^Ie.rotrBH(o,n,34)^Ie.rotrBH(o,n,39),A=Ie.rotrSL(o,n,28)^Ie.rotrBL(o,n,34)^Ie.rotrBL(o,n,39),q=o&i^o&a^i&a,F=n&s^n&l^s&l;g=b|0,w=y|0,b=h|0,y=p|0,h=d|0,p=f|0,{h:d,l:f}=Ie.add(c|0,u|0,k|0,R|0),c=a|0,u=l|0,a=i|0,l=s|0,i=o|0,s=n|0;const ee=Ie.add3L(R,A,F);o=Ie.add3H(ee,k,H,q),n=ee|0}({h:o,l:n}=Ie.add(this.Ah|0,this.Al|0,o|0,n|0)),{h:i,l:s}=Ie.add(this.Bh|0,this.Bl|0,i|0,s|0),{h:a,l}=Ie.add(this.Ch|0,this.Cl|0,a|0,l|0),{h:c,l:u}=Ie.add(this.Dh|0,this.Dl|0,c|0,u|0),{h:d,l:f}=Ie.add(this.Eh|0,this.El|0,d|0,f|0),{h,l:p}=Ie.add(this.Fh|0,this.Fl|0,h|0,p|0),{h:b,l:y}=Ie.add(this.Gh|0,this.Gl|0,b|0,y|0),{h:g,l:w}=Ie.add(this.Hh|0,this.Hl|0,g|0,w|0),this.set(o,n,i,s,a,l,c,u,d,f,h,p,b,y,g,w)}roundClean(){wo.fill(0),So.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class O7 extends ua{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class A7 extends ua{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class M7 extends ua{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const Gu=Jo(()=>new ua),B7=Jo(()=>new O7),H7=Jo(()=>new A7),D7=Jo(()=>new M7),z7=Object.freeze(Object.defineProperty({__proto__:null,SHA512:ua,sha512:Gu,sha512_224:B7,sha512_256:H7,sha384:D7},Symbol.toStringTag,{value:"Module"})),F7=Hi(z7),N7=Hi(t7),j7=Hi(Dz);Object.defineProperty(tr,"__esModule",{value:!0});var Lx=tr.mnemonicToSeedSync=tr.mnemonicToSeed=zx=tr.validateMnemonic=tr.entropyToMnemonic=tr.mnemonicToEntropy=Mx=tr.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const kx=Fz,Ix=$i,W7=c7,Rx=F7,U7=N7,ja=j7,V7=e=>e[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function Ox(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Pf(e){const t=Ox(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:r}}function Ax(e){kx.default.bytes(e,16,20,24,28,32)}function K7(e,t=128){if(kx.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return Dx((0,U7.randomBytes)(t/8),e)}var Mx=tr.generateMnemonic=K7;const q7=e=>{const t=8-e.length/4;return new Uint8Array([(0,W7.sha256)(e)[0]>>t<<t])};function Bx(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ja.utils.chain(ja.utils.checksum(1,q7),ja.utils.radix2(11,!0),ja.utils.alphabet(e))}function Hx(e,t){const{words:r}=Pf(e),o=Bx(t).decode(r);return Ax(o),o}tr.mnemonicToEntropy=Hx;function Dx(e,t){return Ax(e),Bx(t).encode(e).join(V7(t)?"\u3000":" ")}tr.entropyToMnemonic=Dx;function G7(e,t){try{Hx(e,t)}catch{return!1}return!0}var zx=tr.validateMnemonic=G7;const Fx=e=>Ox(`mnemonic${e}`);function X7(e,t=""){return(0,Ix.pbkdf2Async)(Rx.sha512,Pf(e).nfkd,Fx(t),{c:2048,dkLen:64})}tr.mnemonicToSeed=X7;function Y7(e,t=""){return(0,Ix.pbkdf2)(Rx.sha512,Pf(e).nfkd,Fx(t),{c:2048,dkLen:64})}Lx=tr.mnemonicToSeedSync=Y7;class Nx extends Tf{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,Ao.hash(t);const o=ca(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const n=this.blockLen,i=new Uint8Array(n);i.set(o.length>n?t.create().update(o).digest():o);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return Ao.exists(this),this.iHash.update(t),this}digestInto(t){Ao.exists(this),Ao.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:o,finished:n,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=n,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=r._cloneInto(t.oHash),t.iHash=o._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Tl=(e,t,r)=>new Nx(e,t).update(r).digest();Tl.create=(e,t)=>new Nx(e,t);const Z7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),jx=Uint8Array.from({length:16},(e,t)=>t),J7=jx.map(e=>(9*e+5)%16);let Lf=[jx],kf=[J7];for(let e=0;e<4;e++)for(let t of[Lf,kf])t.push(t[e].map(r=>Z7[r]));const Wx=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),Q7=Lf.map((e,t)=>e.map(r=>Wx[t][r])),eF=kf.map((e,t)=>e.map(r=>Wx[t][r])),tF=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),rF=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),Wa=(e,t)=>e<<t|e>>>32-t;function rm(e,t,r,o){return e===0?t^r^o:e===1?t&r|~t&o:e===2?(t|~r)^o:e===3?t&o|r&~o:t^(r|~o)}const Ua=new Uint32Array(16);class oF extends $f{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:r,h2:o,h3:n,h4:i}=this;return[t,r,o,n,i]}set(t,r,o,n,i){this.h0=t|0,this.h1=r|0,this.h2=o|0,this.h3=n|0,this.h4=i|0}process(t,r){for(let h=0;h<16;h++,r+=4)Ua[h]=t.getUint32(r,!0);let o=this.h0|0,n=o,i=this.h1|0,s=i,a=this.h2|0,l=a,c=this.h3|0,u=c,d=this.h4|0,f=d;for(let h=0;h<5;h++){const p=4-h,b=tF[h],y=rF[h],g=Lf[h],w=kf[h],T=Q7[h],x=eF[h];for(let C=0;C<16;C++){const $=Wa(o+rm(h,i,a,c)+Ua[g[C]]+b,T[C])+d|0;o=d,d=c,c=Wa(a,10)|0,a=i,i=$}for(let C=0;C<16;C++){const $=Wa(n+rm(p,s,l,u)+Ua[w[C]]+y,x[C])+f|0;n=f,f=u,u=Wa(l,10)|0,l=s,s=$}}this.set(this.h1+a+u|0,this.h2+c+f|0,this.h3+d+n|0,this.h4+o+s|0,this.h0+i+l|0)}roundClean(){Ua.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const nF=Jo(()=>new oF);Re.hmacSha256Sync=(e,...t)=>Tl(uc,e,Re.concatBytes(...t));const Uc=ix(uc);function om(e){return BigInt(`0x${Ex(e)}`)}function iF(e){return _x(e.toString(16).padStart(64,"0"))}const sF=_f("Bitcoin seed"),Vc={private:76066276,public:76067358},Kc=2147483648,aF=e=>nF(uc(e)),lF=e=>_n(e).getUint32(0,!1),Va=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return _n(t).setUint32(0,e,!1),t};class un{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Vc,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Re.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:om(t.privateKey),this.privKeyBytes=iF(this.privKey),this.pubKey=cz(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ze.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=aF(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return lF(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Uc.encode(this.serialize(this.versions.private,is(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Uc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,r=Vc){if(Io(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const o=Tl(Gu,sF,t);return new un({versions:r,chainCode:o.slice(32),privateKey:o.slice(0,32)})}static fromExtendedKey(t,r=Vc){const o=Uc.decode(t),n=_n(o),i=n.getUint32(0,!1),s={versions:r,depth:o[4],parentFingerprint:n.getUint32(5,!1),index:n.getUint32(9,!1),chainCode:o.slice(13,45)},a=o.slice(45),l=a[0]===0;if(i!==r[l?"private":"public"])throw new Error("Version mismatch");return l?new un({...s,privateKey:a.slice(1)}):new un({...s,publicKey:a})}static fromJSON(t){return un.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const r=t.replace(/^[mM]'?\//,"").split("/");let o=this;for(const n of r){const i=/^(\d+)('?)$/.exec(n);if(!i||i.length!==3)throw new Error(`Invalid child index: ${n}`);let s=+i[1];if(!Number.isSafeInteger(s)||s>=Kc)throw new Error("Invalid index");i[2]==="'"&&(s+=Kc),o=o.deriveChild(s)}return o}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=Va(t);if(t>=Kc){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");r=is(new Uint8Array([0]),a,r)}else r=is(this.pubKey,r);const o=Tl(Gu,this.chainCode,r),n=om(o.slice(0,32)),i=o.slice(32);if(!Re.isValidPrivateKey(n))throw new Error("Tweak bigger than curve order");const s={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const a=Re.mod(this.privKey+n,Ge.n);if(!Re.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");s.privateKey=a}else{const a=ze.fromHex(this.pubKey).add(ze.fromPrivateKey(n));if(a.equals(ze.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");s.publicKey=a.toRawBytes(!0)}return new un(s)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Io(t,32),hz(t,this.privKey,{canonical:!0,der:!1})}verify(t,r){if(Io(t,32),Io(r,64),!this.publicKey)throw new Error("No publicKey set!");let o;try{o=Qr.fromCompact(r)}catch{return!1}return gz(o,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,r){if(!this.chainCode)throw new Error("No chainCode set");return Io(r,33),is(Va(t),new Uint8Array([this.depth]),Va(this.parentFingerprint),Va(this.index),this.chainCode,r)}}class Ux extends Uu{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,Cz(t);const o=yf(r);if(this.iHash=t.create(),!(this.iHash instanceof Uu))throw new TypeError("Expected instance of class which extends utils.Hash");const n=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const i=new Uint8Array(n);i.set(o.length>this.iHash.blockLen?t.create().update(o).digest():o);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(t),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:o,finished:n,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=n,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=r._cloneInto(t.oHash),t.iHash=o._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Vx=(e,t,r)=>new Ux(e,t).update(r).digest();Vx.create=(e,t)=>new Ux(e,t);var cF=Object.defineProperty,Qo=(e,t)=>{for(var r in t)cF(e,r,{get:t[r],enumerable:!0})};function uF(){return Re.bytesToHex(Re.randomPrivateKey())}function Kx(e){return Re.bytesToHex(sa.getPublicKey(e))}var dF={};Qo(dF,{insertEventIntoAscendingList:()=>pF,insertEventIntoDescendingList:()=>hF,normalizeURL:()=>fF,utf8Decoder:()=>mn,utf8Encoder:()=>no});var mn=new TextDecoder("utf-8"),no=new TextEncoder;function fF(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function hF(e,t){var s;let r=0,o=e.length-1,n,i=r;if(o<0)i=0;else if(t.created_at<e[o].created_at)i=o+1;else if(t.created_at>=e[r].created_at)i=r;else for(;;){if(o<=r+1){i=o;break}if(n=Math.floor(r+(o-r)/2),e[n].created_at>t.created_at)r=n;else if(e[n].created_at<t.created_at)o=n;else{i=n;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function pF(e,t){var s;let r=0,o=e.length-1,n,i=r;if(o<0)i=0;else if(t.created_at>e[o].created_at)i=o+1;else if(t.created_at<=e[r].created_at)i=r;else for(;;){if(o<=r+1){i=o;break}if(n=Math.floor(r+(o-r)/2),e[n].created_at<t.created_at)r=n;else if(e[n].created_at>t.created_at)o=n;else{i=n;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function gF(e){if(!Rf(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function If(e){let t=aa(no.encode(gF(e)));return Re.bytesToHex(t)}function Rf(e){if(typeof e!="object"||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let o=0;o<r.length;o++)if(typeof r[o]=="object")return!1}return!0}function Of(e){return sa.verifySync(e.sig,If(e),e.pubkey)}function mF(e,t){return Re.bytesToHex(sa.signSync(If(e),t))}var bF={};Qo(bF,{getHex64:()=>Af,getInt:()=>qx,getSubscriptionId:()=>vF,matchEventId:()=>yF,matchEventKind:()=>CF,matchEventPubkey:()=>xF});function Af(e,t){let r=t.length+3,o=e.indexOf(`"${t}":`)+r,n=e.slice(o).indexOf('"')+o+1;return e.slice(n,n+64)}function qx(e,t){let r=t.length,o=e.indexOf(`"${t}":`)+r+3,n=e.slice(o),i=Math.min(n.indexOf(","),n.indexOf("}"));return parseInt(n.slice(0,i),10)}function vF(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let r=e.slice(t+7+1).indexOf('"');if(r===-1)return null;let o=t+7+1+r,n=e.slice(o+1,80).indexOf('"');if(n===-1)return null;let i=o+1+n;return e.slice(o+1,i)}function yF(e,t){return t===Af(e,"id")}function xF(e,t){return t===Af(e,"pubkey")}function CF(e,t){return t===qx(e,"kind")}var wF={};Qo(wF,{decrypt:()=>EF,encrypt:()=>SF});async function SF(e,t,r){const o=Wy(e,"02"+t),n=Gx(o);let i=Uint8Array.from(Sz(16)),s=no.encode(r),a=await crypto.subtle.importKey("raw",n,{name:"AES-CBC"},!1,["encrypt"]),l=await crypto.subtle.encrypt({name:"AES-CBC",iv:i},a,s),c=Ti.encode(new Uint8Array(l)),u=Ti.encode(new Uint8Array(i.buffer));return`${c}?iv=${u}`}async function EF(e,t,r){let[o,n]=r.split("?iv="),i=Wy(e,"02"+t),s=Gx(i),a=await crypto.subtle.importKey("raw",s,{name:"AES-CBC"},!1,["decrypt"]),l=Ti.decode(o),c=Ti.decode(n),u=await crypto.subtle.decrypt({name:"AES-CBC",iv:c},a,l);return mn.decode(u)}function Gx(e){return e.slice(1,33)}var _F={};Qo(_F,{queryProfile:()=>PF,searchDomain:()=>$F,useFetchImplementation:()=>TF});var dc;try{dc=fetch}catch{}function TF(e){dc=e}async function $F(e,t=""){try{return(await(await dc(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function PF(e){var s,a;let[t,r]=e.split("@");if(r||(r=t,t="_"),!t.match(/^[A-Za-z0-9-_]+$/))return null;let o;try{o=await(await dc(`https://${r}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!((s=o==null?void 0:o.names)!=null&&s[t]))return null;let n=o.names[t],i=((a=o.relays)==null?void 0:a[n])||[];return{pubkey:n,relays:i}}var LF={};Qo(LF,{generateSeedWords:()=>IF,privateKeyFromSeedWords:()=>kF,validateWords:()=>RF});function kF(e,t){let o=un.fromMasterSeed(Lx(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!o)throw new Error("could not derive private key");return Re.bytesToHex(o)}function IF(){return Mx(wf)}function RF(e){return zx(e,wf)}var fc={};Qo(fc,{decode:()=>OF,naddrEncode:()=>zF,neventEncode:()=>DF,noteEncode:()=>BF,nprofileEncode:()=>HF,npubEncode:()=>MF,nsecEncode:()=>AF});var da=5e3;function OF(e){var n,i,s,a,l;let{prefix:t,words:r}=ir.decode(e,da),o=new Uint8Array(ir.fromWords(r));switch(t){case"nprofile":{let c=qc(o);if(!((n=c[0])!=null&&n[0]))throw new Error("missing TLV 0 for nprofile");if(c[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Re.bytesToHex(c[0][0]),relays:c[1]?c[1].map(u=>mn.decode(u)):[]}}}case"nevent":{let c=qc(o);if(!((i=c[0])!=null&&i[0]))throw new Error("missing TLV 0 for nevent");if(c[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:Re.bytesToHex(c[0][0]),relays:c[1]?c[1].map(u=>mn.decode(u)):[]}}}case"naddr":{let c=qc(o);if(!((s=c[0])!=null&&s[0]))throw new Error("missing TLV 0 for naddr");if(!((a=c[2])!=null&&a[0]))throw new Error("missing TLV 2 for naddr");if(c[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!((l=c[3])!=null&&l[0]))throw new Error("missing TLV 3 for naddr");if(c[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:mn.decode(c[0][0]),pubkey:Re.bytesToHex(c[2][0]),kind:parseInt(Re.bytesToHex(c[3][0]),16),relays:c[1]?c[1].map(u=>mn.decode(u)):[]}}}case"nsec":case"npub":case"note":return{type:t,data:Re.bytesToHex(o)};default:throw new Error(`unknown prefix ${t}`)}}function qc(e){let t={},r=e;for(;r.length>0;){let o=r[0],n=r[1],i=r.slice(2,2+n);r=r.slice(2+n),!(i.length<n)&&(t[o]=t[o]||[],t[o].push(i))}return t}function AF(e){return Mf("nsec",e)}function MF(e){return Mf("npub",e)}function BF(e){return Mf("note",e)}function Mf(e,t){let r=Re.hexToBytes(t),o=ir.toWords(r);return ir.encode(e,o,da)}function HF(e){let t=Bf({0:[Re.hexToBytes(e.pubkey)],1:(e.relays||[]).map(o=>no.encode(o))}),r=ir.toWords(t);return ir.encode("nprofile",r,da)}function DF(e){let t=Bf({0:[Re.hexToBytes(e.id)],1:(e.relays||[]).map(o=>no.encode(o))}),r=ir.toWords(t);return ir.encode("nevent",r,da)}function zF(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let r=Bf({0:[no.encode(e.identifier)],1:(e.relays||[]).map(n=>no.encode(n)),2:[Re.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),o=ir.toWords(r);return ir.encode("naddr",o,da)}function Bf(e){let t=[];return Object.entries(e).forEach(([r,o])=>{o.forEach(n=>{let i=new Uint8Array(n.length+2);i.set([parseInt(r)],0),i.set([n.length],1),i.set(n,2),t.push(i)})}),Re.concatBytes(...t)}var FF={};Qo(FF,{createDelegation:()=>NF,getDelegator:()=>jF});function NF(e,t){let r=[];(t.kind||-1)>=0&&r.push(`kind=${t.kind}`),t.until&&r.push(`created_at<${t.until}`),t.since&&r.push(`created_at>${t.since}`);let o=r.join("&");if(o==="")throw new Error("refusing to create a delegation without any conditions");let n=aa(no.encode(`nostr:delegation:${t.pubkey}:${o}`)),i=Re.bytesToHex(sa.signSync(n,e));return{from:Kx(e),to:t.pubkey,cond:o,sig:i}}function jF(e){let t=e.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!t)return null;let r=t[1],o=t[2],n=t[3],i=o.split("&");for(let a=0;a<i.length;a++){let[l,c,u]=i[a].split(/\b/);if(!(l==="kind"&&c==="="&&e.kind===parseInt(u))){if(l==="created_at"&&c==="<"&&e.created_at<parseInt(u))continue;if(l==="created_at"&&c===">"&&e.created_at>parseInt(u))continue;return null}}let s=aa(no.encode(`nostr:delegation:${e.pubkey}:${o}`));return sa.verifySync(n,s,r)?r:null}var WF={};Qo(WF,{getZapEndpoint:()=>VF,makeZapReceipt:()=>GF,makeZapRequest:()=>KF,useFetchImplementation:()=>UF,validateZapRequest:()=>qF});var Hf;try{Hf=fetch}catch{}function UF(e){Hf=e}async function VF(e){try{let t="",{lud06:r,lud16:o}=JSON.parse(e.content);if(r){let{words:s}=ir.decode(r,1e3),a=ir.fromWords(s);t=mn.decode(a)}else if(o){let[s,a]=o.split("@");t=`https://${a}/.well-known/lnurlp/${s}`}else return null;let i=await(await Hf(t)).json();if(i.allowsNostr&&i.nostrPubkey)return i.callback}catch{}return null}function KF({profile:e,event:t,amount:r,relays:o,comment:n=""}){if(!r)throw new Error("amount not given");if(!e)throw new Error("profile not given");let i={kind:9734,created_at:Math.round(Date.now()/1e3),content:n,tags:[["p",e],["amount",r.toString()],["relays",...o]]};return t&&i.tags.push(["e",t]),i}function qF(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Rf(t))return"Zap request is not a valid Nostr event.";if(!Of(t))return"Invalid signature on zap request.";let r=t.tags.find(([i,s])=>i==="p"&&s);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let o=t.tags.find(([i,s])=>i==="e"&&s);return o&&!o[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([i,s])=>i==="relays"&&s)?null:"Zap request doesn't have a 'relays' tag."}function GF({zapRequest:e,preimage:t,bolt11:r,paidAt:o}){let i=JSON.parse(e).tags.filter(([a])=>a==="e"||a==="p"||a==="a"),s={kind:9735,created_at:Math.round(o.getTime()/1e3),content:"",tags:[...i,["bolt11",r],["description",e]]};return t&&s.tags.push(["preimage",t]),s}Re.hmacSha256Sync=(e,...t)=>Vx(aa,e,Re.concatBytes(...t));Re.sha256Sync=(...e)=>aa(Re.concatBytes(...e));function XF(e){var t,r;return(r=e==null?void 0:e.targetEventBeltline)!=null?r:((t=e==null?void 0:e.form)!=null?t:Ho).createChild(Object.assign({},e))}function fN(e){var t,r;return(r=e==null?void 0:e.targetEventBeltline)!=null?r:((t=e==null?void 0:e.form)!=null?t:Ho).createChild(Object.assign({slef:qt({})},e))}var Ar=(e=>(e[e.NEXT=0]="NEXT",e[e.BREAK=1]="BREAK",e[e.CONTINUE=2]="CONTINUE",e[e.PREVENT_CIRCULAR_REFERENCES=3]="PREVENT_CIRCULAR_REFERENCES",e))(Ar||{});function hN(e){return e}function YF(){return ZF}function ZF(e){return e}function JF(){return{initialization(){this.beltline.onAfterReq(({subId:e})=>{this.beltline.getRelayEmiter().once("eose",e,()=>{this.beltline.closeReqBySubid(e)})})}}}function QF(e){return{push(t,r){return e9(t,e,r.length)?Ar.NEXT:Ar.BREAK}}}function e9(e,t,r){return t.length===0?!0:t.some(o=>t9(e,o,r))}function t9(e,t,r){const{ids:o,kinds:n,authors:i,since:s,until:a,limit:l,search:c}=t;return o&&!o.includes(e.id)||n&&!n.includes(e.kind)||i&&!i.includes(e.pubkey)||s&&!(e.created_at>=s)||a&&!(e.created_at<=a)||l&&!(r<l)?!1:r9(t,e.tags)?!(c&&!JSON.stringify(e).toLowerCase().includes(c.toLowerCase())):!1}function r9(e,t){for(let r in e)if(r[0]==="#"){let o=r.slice(1),n=e[`#${o}`];if(n&&!t.find(([i,s])=>i===o&&n.includes(s)))return!1}return!0}function o9(){const e=new Dn.exports.EventEmitter;return e.setMaxListeners(1e3),{push(t,r,{lastState:o,subId:n}){const i=r[0];return i?(t.created_at>i.created_at&&(r[0]=r[0],e.emit("update",t,n)),Ar.BREAK):(r[0]=t,e.emit("update",t,n),Ar.BREAK)},feat:{isHas(){return!!this.beltline.getList()[0]},getLatestEvent(){return this.beltline.getList()[0]},onUpdated(t){e.on("update",t)},onHasLatestEvent(t){const r=this.beltline.getList()[0];r&&t(r),e.on("update",t)},onHasLatestEventOnce(t){const r=this.beltline.getList()[0];r?t(r):e.once("update",t)}}}}const Zn=class{constructor(t,r){ye(this,"name");ye(this,"localEvent",null);ye(this,"data");ye(this,"isChange",!1);ye(this,"changeAt",null);ye(this,"isSync",!1);ye(this,"changeCount",0);ye(this,"onSetData",null);this.name=t,Zn.cacheList.push(this.name),Zn.list.push(this);const o=this.getLocalEvent();if(!o){this.data=r;return}this.setDataByEvent(o)}static syncAll(){for(const t of Zn.list)t.sync()}static clearAll(){for(const t of Zn.cacheList)localStorage.removeItem(t)}setLocalEvent(t){this.localEvent=t,window.localStorage.setItem(this.name,JSON.stringify(t))}getLocalEvent(){const t=this.localEvent;if(t)return t;const r=localStorage.getItem(this.name);if(!r)return null;try{return JSON.parse(r)}catch{return localStorage.removeItem(this.name),null}}getChangeAt(){return this.changeAt}getUpdateAt(){var t;return(t=this.getLocalEvent())==null?void 0:t.created_at}toChanged(){return this.changeAt=rg(),this.isChange=!0,this.changeCount+=1}hasChange(){return this.isChange}isReChange(t){return this.changeCount!==t}setData(t){var r;this.data=t,(r=this.onSetData)==null||r.call(this,t)}getData(){return this.data}getDataAndChange(){return this.toChanged(),this.data}setDataByEvent(t){this.setData(this.serializeToData(t))}sync(t){var o;this.isSync=!0;const r=t!=null&&t.onlyUrl?new Set().add(t.onlyUrl):new Set([...(o=t==null?void 0:t.moreUrls)!=null?o:[],...ii.getWriteList(),...ii.getReadList()].slice(0,10));rf(`cache:${this.name+[...r]}`,()=>{const n=this,i=new Set,s=XF().addFilters(this.getFilters()).addStaff({push(u,d,{subId:f}){var p;if(!f)return;const h=this.beltline.getUrlBySubId(f);!h||(i.add(h),(p=t==null?void 0:t.onEvent)==null||p.call(t,u,h))}}).addStaff(o9()).addStaff({initialization(){this.beltline.onAfterReq(({subId:u,url:d})=>{this.beltline.getRelayEmiter().once("eose",u,()=>{var f;if(!i.has(d)){const h=n.getLocalEvent();h&&s.publish(h,new Set().add(d)),(f=t==null?void 0:t.onPush)==null||f.call(t,d)}})})}}).addStaff(JF()).addRelayUrls(r);!(t!=null&&t.onlyUrl)&&s.addExtends(Ho);const a=this.getLocalEvent();a&&Ho.pushEvent(a);const l=new Set,c=cy((u,d)=>{this.syncByEvent(u,d,l,s)});return s.feat.onHasLatestEvent(c),!0},{duration:1e4})}syncOne(){this.isSync||this.sync()}syncByEvent(t,r,o,n){const i=n.getUrlBySubId(r!=null?r:""),s=this.getUpdateAt();if(!s||t.created_at>s)this.setDataByEvent(t),this.setLocalEvent(t),n.publish(t,o);else if(t.created_at<s&&i){const a=this.getLocalEvent();a&&n.publish(a,new Set().add(i))}!i||o.add(i)}save(){if(!this.isChange||!this.saveToEvent())return;const r=this.getLocalEvent();!r||(Ho.publish(r,ii.getWriteList()),this.isChange=!1)}saveToEvent(){var r;if(!this.data)return!1;const t=this.deserializeToEvent(this.data,(r=this.getChangeAt())!=null?r:rg());return this.setLocalEvent(t),!0}};let Yn=Zn;ye(Yn,"cacheList",[]),ye(Yn,"list",[]);const Df="prikey";function n9(){return uF()}function i9(e){localStorage.setItem(Df,e),setTimeout(()=>{tl.value=e})}function s9(e=n9()){return localStorage.setItem("newUserFlag",e),i9(e),e}function pN(){window.localStorage[Df]="",Yn.clearAll(),location.reload()}function gN(){const e=localStorage.getItem("newUserFlag"),t=localStorage.getItem("prikey");return!!(e&&e===t)}const tl=V((()=>{const e=localStorage.getItem(Df);return e||s9()})()),Fi=K(()=>({privateKey:tl.value,publicKey:tl.value?Kx(tl.value):""}));K(()=>fc.nprofileEncode({pubkey:Fi.value.publicKey,relays:[]}));K(()=>fc.npubEncode(Fi.value.publicKey));K(()=>fc.nsecEncode(Fi.value.privateKey));function Xx(e){const{privateKey:t,publicKey:r}=Fi.value;let o=Object.assign({kind:1,pubkey:r,created_at:Math.floor(Date.now()/1e3),tags:[],content:""},e);return o.id=If(o),o.sig=mF(o,t),o}class a9{createId(){return Math.random().toString().slice(2)}}var sm;class Yx{constructor(){ye(this,"eventEmiter",new Dn.exports);ye(this,"queue",QM((sm=Ns.relayEmiterQueueInterval)!=null?sm:Ns.relayEmiterQueueInterval=5));this.eventEmiter.setMaxListeners(1e3)}emit(t,r,o){this.queue.insert(()=>{this.eventEmiter.emit(this.createEventName(t,r),o)},0)}emitEvent(t,r){this.eventEmiter.emit("event",r),this.emit("event",t,r)}onEvent(t){this.eventEmiter.on("event",t)}on(t,r,o,n){this.eventEmiter.on(this.createEventName(t,r),o),n!=null&&n.overtime&&setTimeout(()=>{this.removeListener(t,r,o)},n.overtime)}once(t,r,o){this.eventEmiter.once(this.createEventName(t,r),o)}removeListener(t,r,o){this.eventEmiter.removeListener(this.createEventName(t,r),o)}onRequest(t,r){this.eventEmiter.on(t,r)}emitRequest(t,r){this.queue.insert(()=>{this.eventEmiter.emit(t,r)},10)}removeRequestListener(t,r){this.eventEmiter.removeListener(t,r)}removeRequestAllListener(t){this.eventEmiter.removeAllListeners(t)}removeRequestAllTypeListener(){for(const t of["req","closeReq","publish","close"])this.removeRequestAllListener(t)}removeAllListener(t){["eose","event","notice","ok"].forEach(r=>this.eventEmiter.removeAllListeners(this.createEventName(r,t)))}createEventName(t,r){return`${t}:${r}`}}const l9=YF()(()=>({initialization(){this.beltline.feat.pushEvent=function(e,t){t.push(e)}}})),_o=Symbol(),To=Symbol();function c9(e){const t=new Set;for(const r of e)r[0]==="r"&&t.add(r[1]);return t.delete(""),t}function mN(e){for(const t of e)if(t[0]==="e"&&t[3]==="root")return t}function bN(e){for(const t of e)if(t[0]==="e")return t}function u9(e){const t=[];for(const r in e){const{read:o,write:n}=e[r];o&&n?t.push(["r",r]):o?t.push(["r",r,"read"]):n&&t.push(["r",r,"write"])}return t}function d9(e){var n,i;const{readUrl:t,writeUrl:r}=Zx(e),o={[_o]:t,[To]:r};for(const s of t)((n=o[s])!=null?n:o[s]={}).read=!0;for(const s of r)((i=o[s])!=null?i:o[s]={}).write=!0;return{relayConfiguration:o,readUrl:t,writeUrl:r}}function Zx(e){const t=new Set,r=new Set,o=new Set;if(e)for(const n of e)n[0]==="r"&&(o.add(n[1]),n[2]==="read"?t.add(n[1]):(n[2]==="write"||t.add(n[1]),r.add(n[1])));return{readUrl:t,writeUrl:r,urls:o}}function vN(e){const t=[];for(const r of e)if(r[0]==="e"){const o={eventId:r[1],relay:r[2],marker:["reply","mention","root"].includes(r[3])?r[3]:"reply",type:""};t.push(o)}return t}function yN(e){var r;const t=[];for(const o of e)t.push(["e",o.eventId,(r=o.relay)!=null?r:"",o.marker]);return t}function xN(e){const t=[];for(const r of e)r[0]==="p"&&t.push({pubkey:r[1],relayUrl:r[2],name:r[3]});return t}const f9=function(e){return e.__proto__=this.__proto__,e};let nm=0;class zf extends f9{constructor(r){var o,n,i,s,a,l;super((o=r==null?void 0:r.slef)!=null?o:{});ye(this,"relayConfigurator");ye(this,"__EventBeltline__",!0);ye(this,"id",nm++);ye(this,"name",String(nm));ye(this,"staffs",[]);ye(this,"feat");ye(this,"subidMap",new Map);ye(this,"options");ye(this,"urls",new Set);ye(this,"filters",[]);ye(this,"eventList",[]);ye(this,"parent",null);ye(this,"children",new Set);ye(this,"extends",new Set);ye(this,"extendTo",new Set);ye(this,"root");ye(this,"idGenerator");ye(this,"relayEmiter");ye(this,"eventEmitter",new Dn.exports.EventEmitter().setMaxListeners(200));this.options=r!=null?r:{},r!=null&&r.name&&(this.name=r.name),this.feat={beltline:this},r!=null&&r.describe&&(this.name=r==null?void 0:r.describe),this.relayEmiter=(n=r==null?void 0:r.relayEmiter)!=null?n:new Yx,this.root=(i=r==null?void 0:r.root)!=null?i:this,this.parent=(s=r==null?void 0:r.parent)!=null?s:null,this.relayConfigurator=r==null?void 0:r.relayConfigurator,this.idGenerator=(a=r==null?void 0:r.idGenerator)!=null?a:new a9,this.addFiltersStaff(this.filters,{unshift:!0});for(const c of this.staffs)(l=c==null?void 0:c.initialization)==null||l.call(c);this.addStaff(l9())}static isEventBeltlin(r){return typeof r=="object"&&Boolean(r.__EventBeltline__)}getRelayEmiter(){return this.relayEmiter}getRoot(){this.root}getExtends(){return this.extends}getExtendTo(){return this.extendTo}addExtends(r,o){if(this.extends.add(r),r.extendTo.add(this),o!=null&&o.preventPushHistory)return this;for(const n of r.getList())this.pushEvent(n);return this}pushEvent(r,o,n=new Set){var l,c,u,d,f;if(n.has(this))return;n.add(this);const{subId:i,url:s}=o!=null?o:{};for(const h of this.staffs)(l=h.beforePush)==null||l.call(h,r,this.eventList);let a=Ar.NEXT;for(const h of this.staffs){const p=(u=(c=h.push)==null?void 0:c.call(h,r,this.eventList,{lastState:a,subId:i,url:s}))!=null?u:Ar.NEXT;if(a=p,p!==Ar.NEXT)break}for(const h of this.staffs)a=(f=(d=h.afterPush)==null?void 0:d.call(h,r,this.eventList,a))!=null?f:a;a===Ar.NEXT&&this.feat.pushEvent(r,this.eventList,{lastState:a,subId:i,url:s}),a===Ar.NEXT&&this.extendTo.forEach(h=>{h.pushEvent(r,o,n)})}getRelayUrls(){return this.urls}addReadUrl(){return this.relayConfigurator&&this.addRelayUrls(this.relayConfigurator.getReadList()),this}addRelayUrl(r){return this.addRelayUrls(new Set().add(r)),this}addRelayUrls(r){if(!r)return this;if(r.size===0)return this;const o=qM(this.urls,r);for(const n of o)this.urls.add(n);return this.reqs(o,this.filters),this.eventEmitter.emit("add-relay-urls",o,r),this}onAddRelayUrlsAfter(r){return this.eventEmitter.on("add-relay-urls",r),this}getFilters(){return this.filters}addFilter(r){return this.addFilters([r]),this}addFilters(r){return this.filters.push(...r),this.reqs(this.urls,r),this.eventEmitter.emit("add-filters",r),this}onAddFilters(r){return this.eventEmitter.on("add-filters",r),this}removeStaff(r){GM(this.staffs,r)}addStaff(r,o){return this.initializationStaff(r),o!=null&&o.unshift?this.staffs.unshift(r):this.staffs.push(r),this}initializationStaff(r){var o;r.feat&&Object.assign(this.feat,r.feat),r.beltline=this,(o=r.initialization)==null||o.call(r)}addFilterStaff(r,o){return this.addFiltersStaff([r],o),this}addFiltersStaff(r,o){const n=QF(r);return this.addStaff(n,o),this}setParent(r){return this.parent=r,this}addChild(r){return this.children.add(r),this}createChild(r){const o=new zf(Object.assign({},{relayEmiter:this.relayEmiter,idGenerator:this.idGenerator,relayConfigurator:this.relayConfigurator,root:this.root,parent:this,slef:{}},r));return this.addChild(o),o}closeReq(){var r;for(const o of this.staffs)(r=o.onClose)==null||r.call(o);for(const o of this.children)o.closeReq();for(const[o,n]of this.subidMap)this._closeReq(o,n);this.eventEmitter.removeAllListeners()}_closeReq(r,o){this.relayEmiter.emitRequest("closeReq",{subId:r,url:o})}closeReqBySubid(r){if(!r)return;const o=this.subidMap.get(r);!o||this._closeReq(r,o)}offLine(){}map(r){return this.eventList.map(r)}getList(){return this.eventList}addStaffOfSortByCreateAt(){return this.addStaff({initialization(){this.beltline.feat.pushEvent=function(r,o){const n=uy(o,r.created_at,"created_at");o.splice(n,0,r)}}}),this}addStaffOfReverseSortByCreateAt(){return this.addStaff({initialization(){this.beltline.feat.pushEvent=function(r,o){const n=KM(o,r.created_at,"created_at");o.splice(n,0,r)}}}),this}reqs(r,o){o.length!==0&&(r==null||r.forEach(async n=>{try{this.req(n,o)}catch(i){console.error(i)}}))}publish(r,o,n){var c,u;const i=new Set(o);let s=!1;try{!Of(r)&&(s=!0)}catch{s=!0}if(s||(n==null?void 0:n.addUrl)){s=!0;const d=(c=r.tags)!=null?c:[],f=c9(d);for(const h of i)f.has(h)||d.push(["r",h]);XM(i,f),r.tags=d}let a=r;if(s){if(r.pubkey&&r.pubkey!==Fi.value.publicKey)return;a=Xx(r)}this.pushEvent(a),n!=null&&n.onOK&&this.relayEmiter.on("ok",a.id,n.onOK);const l=new Set;for(const d of(u=n==null?void 0:n.autoPublishToTagR)==null||u?i:o)this.toPublish(d,a),l.add(d);for(const d of this.getRelayUrls())l.has(d)||this.toPublish(d,a);return this.onAddRelayUrlsAfter(d=>{for(const f of d)l.has(f)||this.toPublish(f,a)}),a}req(r,o){const n=this.idGenerator.createId();this.onReceiveEvent(n),this.setSubidMap(n,r),this.relayEmiter.emitRequest("req",{subId:n,url:r,filters:o})}onReceiveEvent(r,o=new WeakSet){o.has(this)||(o.add(this),this.relayEmiter.on("event",r,({event:n,url:i})=>{this.pushEvent(n,{subId:r,url:i})}),this.relayEmiter.once("eose",r,()=>{this.relayEmiter.removeAllListener(r)}))}async toPublish(r,o){this.relayEmiter.emitRequest("publish",{event:o,url:r})}setSubidMap(r,o){this.subidMap.set(r,o),this.eventEmitter.emit("afterReq",{subId:r,url:o})}onAfterReq(r){return this.eventEmitter.on("afterReq",r),this}getUrlBySubId(r){return this.subidMap.get(r)}}async function h9(e){return new Promise((t,r)=>{const o=new WebSocket(e);o.onopen=()=>{t(o)},o.onerror=n=>{r(n)}})}window.sendCount=0;class p9{constructor(t,r){ye(this,"pool");ye(this,"relayEmiter");ye(this,"allSubIds");var n;const o=(n=r==null?void 0:r.self)!=null?n:{};return o.__proto__=this.__proto__,o.relayEmiter=t,o.allSubIds=new Set,o.pool=new Map,o.listen(),o}async listen(){this.relayEmiter.onRequest("req",async({url:t,subId:r,filters:o})=>{(await this.getRelay(t)).req(o,r)}),this.relayEmiter.onRequest("closeReq",async({url:t,subId:r})=>{this.allSubIds.delete(r);const o=this.getRelayFromPool(t);!o||o.closeReq(r)}),this.relayEmiter.onRequest("publish",async({url:t,event:r})=>{(await this.getRelay(t)).publish(r)}),this.relayEmiter.onRequest("close",async({url:t})=>{const r=this.getRelayFromPool(t);!r||r.close()})}getPool(){return this.pool}async getRelay(t){const r=this.pool.get(t);return r||await this.createRelayPool(t)}getRelayFromPool(t){return this.pool.get(t)}async createRelayPool(t){return new Promise(async(r,o)=>{const n=await h9(t);n.onerror=s=>{var a,l;(a=this.pool.get(t))==null||a.close(),this.pool.delete(t),(l=this.getRelayFromPool(t))==null||l.close()},n.onclose=()=>{this.close(t)};const i=new g9(n,ef,this);this.pool.set(t,i),r(i)})}close(t){var r;(r=this.getRelayFromPool(t))==null||r.close(),this.pool.delete(t)}}class g9{constructor(t,r,o){ye(this,"ws");ye(this,"pool");ye(this,"subIds",new Set);ye(this,"timeout");ye(this,"isClose",!1);ye(this,"relayEmiter");ye(this,"publishIds",new Set);this.ws=t,this.ws.onmessage=this.handleMessage.bind(this),this.relayEmiter=r,this.pool=o}handleMessage(t){try{const r=JSON.parse(t.data);console.debug(this.ws.url,r),logger.for("Relay:onMessage:data").debug(r);let o="";if(Array.isArray(r))switch(r[0]){case"EVENT":o=r[1];let n=r[2];if(!Rf(n)||!Of(n))return;this.relayEmiter.emitEvent(o,{url:this.ws.url,event:n,subId:o});break;case"NOTICE":this.relayEmiter.emit("notice",o,{message:r[1],url:this.ws.url});break;case"EOSE":o=r[1],this.relayEmiter.emit("eose",o,{url:this.ws.url});break;case"OK":let i=r[1];this.relayEmiter.emit("ok",i,{ok:r[2],message:r[3],url:this.ws.url}),this.closePublish(i);break;case"AUTH":break;default:break}}catch{return}}send(t){window.sendCount++,this.ws.send(JSON.stringify(t))}createSubId(){return Math.random().toString().slice(2)}req(t,r=this.createSubId()){return console.debug("websocket:req:",t,this.ws.url),this.send(["REQ",r,...t]),this.addSubId(r),r}closePublish(t){!this.publishIds.has(t)||(this.publishIds.delete(t),this.autoClose())}publish(t){console.debug("websocket:publish",this.ws.url,t),this.send(["EVENT",t]),this.publishIds.add(t.id),setTimeout(()=>{this.closePublish(t.id)},6e4)}closeReq(t){!this.subIds.has(t)||(this.send(["CLOSE",t]),this.deleteSubId(t))}addSubId(t){this.subIds.add(t),this.pool.allSubIds.add(t),this.clearAutoClose()}deleteSubId(t){this.subIds.delete(t),this.pool.allSubIds.delete(t),this.relayEmiter.removeAllListener(t),this.autoClose()}close(){if(!this.isClose){for(const t of this.subIds)this.deleteSubId(t);this.isClose=!0,this.ws.close(),this.pool.close(this.ws.url)}}clearAutoClose(){clearTimeout(this.timeout),this.timeout=void 0}autoClose(){this.subIds.size>0||this.publishIds.size>0||(this.timeout=setTimeout(()=>{this.subIds.size>0||this.publishIds.size>0||this.close()},6e4))}}const m9=(e,t,r)=>et(e,cy(t,r.delay),r);var am;const b9=(am=window.defaultRelayUrls)!=null?am:["wss://no.str.cr","wss://no-str.org","wss://nos.lol","wss://nostr.com.de","wss://relay.mostr.pub","wss://relay.nostr.wirednet.jp","wss://no-str.org","wss://brb.io"];class v9 extends Yn{setLocalEventByEvent(t){this.setLocalEvent(t)}constructor(){super("RelayConfigurator",{[_o]:new Set,[To]:new Set})}getFilters(){return[{kinds:[10002],authors:[Fi.value.publicKey]}]}serializeToData(t){const{relayConfiguration:r,readUrl:o,writeUrl:n}=d9(t.tags);return r}deserializeToEvent(t,r){const o=u9(t);return Xx({kind:10002,tags:o,created_at:r})}getConfiguration(){return this.getData()}getWriteList(){return this.getConfiguration()[To]}getReadList(){return this.getConfiguration()[_o]}getOtherList(){return y9()}addWriteRead(t){this.addRead(t),this.addWrite(t)}addWrite(t){this.toChanged(),this.getRule(t).write=!0,this.getConfiguration()[To].add(t)}remoteWrite(t){this.toChanged(),this.getRule(t).write=!1,this.getConfiguration()[To].delete(t)}addRead(t){this.toChanged(),this.getRule(t).read=!0,this.getConfiguration()[_o].add(t)}remoteRead(t){this.toChanged(),this.getRule(t).read=!1,this.getConfiguration()[_o].delete(t)}remove(t){this.toChanged(),delete this.getData()[t],this.getConfiguration()[To].delete(t),this.getConfiguration()[_o].delete(t)}setRule(t,r,o){if(this.toChanged(),!r&&!o)this.remove(t);else{const n=this.getRule(t);n.read=r,n.write=o,o?this.getConfiguration()[To].add(t):this.getConfiguration()[To].delete(t),r?this.getConfiguration()[_o].add(t):this.getConfiguration()[_o].delete(t)}}getRule(t){var r;return(r=this.getConfiguration()[t])!=null?r:this.getConfiguration()[t]={}}hasReadByUrl(t){return this.getReadList().has(t)}hasWriteByUrl(t){return this.getWriteList().has(t)}broadcast(t){var s;const r=this.getLocalEvent();if(!r||r.tags.length===0)return;const o=this.getOtherList(),n=Object.assign((s=t==null?void 0:t.slef)!=null?s:{},{numberOfErrors:0,numberOfSuccesses:0,numberOfOvertime:0,total:o.size}),i=new Set;return ef.on("ok",r.id,({ok:a,message:l,url:c})=>{i.add(c),a?n.numberOfSuccesses+=1:n.numberOfErrors+=1}),Ho.publish(r,o),setTimeout(()=>{o.forEach(a=>{i.has(a)||(n.numberOfOvertime+=1)})},1e3*30),n}}const Xu="__other_urls",Jx={...bl,useLocalStorage:!0,duration:1e3*60};function y9(){const e=rf(Xu,im,Jx);return Array.isArray(e)?new Set(e):e instanceof Set?e:(HM(Xu),im())}function im(){const e=qt(new Set),t=Ho.createChild().addFilter({kinds:[10002],limit:20}).addStaff({push(r){const{writeUrl:o,readUrl:n}=Zx(r.tags);for(const i of o)e.add(i);for(const i of n)e.add(i)}});return setTimeout(async()=>{var n;const r=Array.from(new Set([...ii.getReadList(),...ii.getWriteList(),...b9].slice(0,10)));let o=0;for(;e.size<((n=Ns.getOtherUrlsRequestLimitSize)!=null?n:50);){await ku(2e3);const i=r[o];if(!i)return;t.addRelayUrls(new Set().add(i)),o++}},0),m9(e,()=>{js(Xu,[...e],Jx)},{deep:!0}),e}function x9(){const e=new Yx;Aa({relayEmiter:e});const t=new p9(e,{self:qt({})});Aa({relayPool:t});const r=new zf({preventCircularReferences:!0,relayEmiter:e});Aa({rootEventBeltline:r}),e.onEvent(({subId:n,event:i,url:s})=>{r.pushEvent(i,{subId:n})});const o=qt(new v9);return r.relayConfigurator=o,Aa({relayConfigurator:o}),setTimeout(()=>{o.sync()}),{relayEmiter:e,relayPool:t,rootEventBeltline:r,relayConfigurator:o}}const Qx=aH({history:SB(),routes:[{path:"/login",name:"login",redirect:"/login/language",component:()=>Ze(()=>import("./LoginStepsView.6a74b803.js"),["./LoginStepsView.6a74b803.js","./LoginStepsView.a009229c.js","./Contact.843b7eb6.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./channel.73d4c352.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./FollowChannel.5530ff6a.js","./get-slot.4ceacf82.js","./Checkmark.41b2919e.js"],import.meta.url),children:[{path:"/login/language",name:"language",alias:"/login-step-1",meta:{step:1},component:()=>Ze(()=>import("./LoginLanguageView.ada9afef.js"),["./LoginLanguageView.ada9afef.js","./ThemeButton.vue_vue_type_script_setup_true_lang.74f695c6.js","./Dropdown.6c9a9da8.js","./Icon.c18adbc2.js","./create.2deeaf6a.js","./create-ref-setter.fe4a2903.js","./LoginCard.vue_vue_type_script_setup_true_lang.ceb09e9e.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./Favicon.4f93a704.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./Space.71e20140.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/logon",name:"login-form",alias:"/login-step-2",meta:{step:2},component:()=>Ze(()=>import("./logonView.f579db72.js"),["./logonView.f579db72.js","./nostr.8d7c0b4a.js","./Input.67ce3011.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./LoginStepsView.a009229c.js","./Contact.843b7eb6.js","./event.6135f6e9.js","./user.a4321bbd.js","./channel.73d4c352.js","./ContentBlacklistView.353b495d.js","./FollowChannel.5530ff6a.js","./UserMetadataEditing.vue_vue_type_script_setup_true_lang.f4f7d34a.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./Icon.c18adbc2.js","./Tabs.239997a4.js","./LoginCard.vue_vue_type_script_setup_true_lang.ceb09e9e.js","./Favicon.4f93a704.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css"],import.meta.url)},{path:"/relay/configuration",name:"relay-configuration",alias:"/login-step-3",meta:{step:3},component:()=>Ze(()=>import("./LoginRelaysView.bb2c5178.js"),["./LoginRelaysView.bb2c5178.js","./RelayConfig.vue_vue_type_script_setup_true_lang.a66b20d0.js","./Scrollbar.1fcc2d31.js","./Tooltip.vue_vue_type_script_setup_true_lang.f32fcd4e.js","./use-theme-vars.bc2ec469.js","./Close.defd42b9.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./RelayConnectListCard.vue_vue_type_script_setup_true_lang.9ebf2aaa.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.d4985c82.js","./Input.67ce3011.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./MdSearch.9752c808.js","./composables.e6030404.js","./RelayConfig.5c39fc29.css","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.f1879afa.css","./Alert.ae1c7148.js"],import.meta.url)},{path:"/login/complete",name:"login-complete",alias:"/login-step-4",meta:{step:4},component:()=>Ze(()=>import("./LoginCompleteView.88adf82a.js"),["./LoginCompleteView.88adf82a.js","./LoginCard.vue_vue_type_script_setup_true_lang.ceb09e9e.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./Favicon.4f93a704.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Icon.c18adbc2.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./Tooltip.vue_vue_type_script_setup_true_lang.f32fcd4e.js","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Input.67ce3011.js","./Checkbox.4e768866.js","./Alert.ae1c7148.js","./Space.71e20140.js","./get-slot.4ceacf82.js"],import.meta.url)}]},{path:"/",redirect:"/home",component:()=>Ze(()=>import("./LayoutView.2404a918.js"),["./LayoutView.2404a918.js","./Favicon.4f93a704.js","./CloudUpload.c2963609.js","./Icon.c18adbc2.js","./Empty.6cdd22d7.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./MdSearch.9752c808.js","./Input.67ce3011.js","./Dropdown.6c9a9da8.js","./create.2deeaf6a.js","./create-ref-setter.fe4a2903.js","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./ThemeButton.vue_vue_type_script_setup_true_lang.74f695c6.js","./ReloadCircleSharp.f8dea346.js","./DrawerContent.6dbdfd12.js","./use-theme-vars.bc2ec469.js"],import.meta.url),children:[{path:"/home",component:()=>Ze(()=>import("./HomeView.8af09e80.js"),["./HomeView.8af09e80.js","./Content.67f889ac.js","./getCacheStaff.04455eaa.js","./user.a4321bbd.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./event.6135f6e9.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css","./RichTextEditBox.vue_vue_type_script_setup_true_lang.f208d618.js","./Result.fa2927e1.js","./Tabs.239997a4.js","./Close.defd42b9.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./Contact.843b7eb6.js","./channel.73d4c352.js","./PostList.vue_vue_type_script_setup_true_lang.150e6830.js","./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js"],import.meta.url)},{path:"/relays",name:"relays",component:()=>Ze(()=>import("./RelaysView.5c7c4d8f.js"),["./RelaysView.5c7c4d8f.js","./RelayConfig.vue_vue_type_script_setup_true_lang.a66b20d0.js","./Scrollbar.1fcc2d31.js","./Tooltip.vue_vue_type_script_setup_true_lang.f32fcd4e.js","./use-theme-vars.bc2ec469.js","./Close.defd42b9.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./RelayConnectListCard.vue_vue_type_script_setup_true_lang.9ebf2aaa.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.d4985c82.js","./Input.67ce3011.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./MdSearch.9752c808.js","./composables.e6030404.js","./RelayConfig.5c39fc29.css"],import.meta.url)},{path:"/channels",component:()=>Ze(()=>import("./ChannelsView.60d45d23.js"),["./ChannelsView.60d45d23.js","./FollowChannel.5530ff6a.js","./channel.73d4c352.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./ListItem.7fc45615.js"],import.meta.url)},{path:"/channel/message/:value",name:"channel-message",component:()=>Ze(()=>import("./ChannelMessageView.012efacf.js"),["./ChannelMessageView.012efacf.js","./channel.73d4c352.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js","./use.42516be4.js","./Content.67f889ac.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css","./FollowChannel.5530ff6a.js","./RichTextEditBox.vue_vue_type_script_setup_true_lang.f208d618.js","./Result.fa2927e1.js","./Tabs.239997a4.js","./Close.defd42b9.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./PageHeader.12826df1.js"],import.meta.url)},{path:"/profile/:value",name:"profile",component:()=>Ze(()=>import("./ProfileView.3e31490a.js"),["./ProfileView.3e31490a.js","./Contact.843b7eb6.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./channel.73d4c352.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Content.67f889ac.js","./use.42516be4.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css","./PostList.vue_vue_type_script_setup_true_lang.150e6830.js","./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.d4985c82.js","./Tabs.239997a4.js","./UserMetadataEditing.vue_vue_type_script_setup_true_lang.f4f7d34a.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./Dropdown.6c9a9da8.js","./ProfileView.db26d6b4.css"],import.meta.url)},{path:"/profile",component:()=>Ze(()=>import("./ProfileView.3e31490a.js"),["./ProfileView.3e31490a.js","./Contact.843b7eb6.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./channel.73d4c352.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Content.67f889ac.js","./use.42516be4.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css","./PostList.vue_vue_type_script_setup_true_lang.150e6830.js","./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.d4985c82.js","./Tabs.239997a4.js","./UserMetadataEditing.vue_vue_type_script_setup_true_lang.f4f7d34a.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./Dropdown.6c9a9da8.js","./ProfileView.db26d6b4.css"],import.meta.url)},{path:"/task",component:()=>Ze(()=>import("./TaskView.5a97a56f.js"),["./TaskView.5a97a56f.js","./Space.71e20140.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/settings",component:()=>Ze(()=>import("./SettingsView.bbc2e6e3.js"),["./SettingsView.bbc2e6e3.js","./Thing.895493bd.js","./composables.e6030404.js","./Icon.c18adbc2.js","./ListItem.7fc45615.js"],import.meta.url)},{path:"/about",component:()=>Ze(()=>import("./AboutView.5360f63e.js"),["./AboutView.5360f63e.js","./Favicon.4f93a704.js","./Icon.c18adbc2.js"],import.meta.url)},{path:"/content/blacklist",name:"content-blacklist-view",component:()=>Ze(()=>import("./ContentBlacklistView.8856ac91.js"),["./ContentBlacklistView.8856ac91.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Checkbox.4e768866.js","./get-slot.4ceacf82.js","./Dropdown.6c9a9da8.js","./Icon.c18adbc2.js","./create.2deeaf6a.js","./create-ref-setter.fe4a2903.js","./Tag.ef764be7.js","./Empty.6cdd22d7.js","./Popselect.8b8a58ed.js","./Checkmark.41b2919e.js"],import.meta.url)},{path:"/to-back",name:"to-back",component:()=>Ze(()=>import("./ToBackView.6a7b7dba.js"),["./ToBackView.6a7b7dba.js","./PageHeader.12826df1.js"],import.meta.url),children:[{path:"/notice",name:"notice",component:()=>Ze(()=>import("./NoticeView.57213760.js"),["./NoticeView.57213760.js","./PostList.vue_vue_type_script_setup_true_lang.150e6830.js","./event.6135f6e9.js","./getCacheStaff.04455eaa.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js","./use.42516be4.js","./Content.67f889ac.js","./user.a4321bbd.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css"],import.meta.url)},{path:"/search/:value?",name:"search",component:()=>Ze(()=>import("./SearchView.b32a1510.js"),["./SearchView.b32a1510.js","./event.6135f6e9.js","./getCacheStaff.04455eaa.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./Content.67f889ac.js","./use.42516be4.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css"],import.meta.url)},{path:"/short/text/note/:value",name:"short-text-note",component:()=>Ze(()=>import("./ShortTextNoteView.52416c57.js"),["./ShortTextNoteView.52416c57.js","./Content.67f889ac.js","./getCacheStaff.04455eaa.js","./user.a4321bbd.js","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./event.6135f6e9.js","./nostr.8d7c0b4a.js","./Tag.ef764be7.js","./Icon.c18adbc2.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./naiveUi.d1ecdfd9.js","./composables.e6030404.js","./Popselect.8b8a58ed.js","./create.2deeaf6a.js","./Checkmark.41b2919e.js","./create-ref-setter.fe4a2903.js","./Content.391a52b0.css","./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js","./PostList.vue_vue_type_script_setup_true_lang.150e6830.js","./RichTextEditBox.vue_vue_type_script_setup_true_lang.f208d618.js","./Result.fa2927e1.js","./Tabs.239997a4.js","./Close.defd42b9.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js"],import.meta.url)},{path:"/channel/create",name:"create-channel",component:()=>Ze(()=>import("./CreateChannelView.9b6fa59d.js"),["./CreateChannelView.9b6fa59d.js","./FollowChannel.5530ff6a.js","./channel.73d4c352.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./use.42516be4.js","./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.43d0d9fb.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./Icon.c18adbc2.js","./Space.71e20140.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/channel/edit/:value",name:"edit-channel",component:()=>Ze(()=>import("./EditChannelView.b22f523c.js"),["./EditChannelView.b22f523c.js","./channel.73d4c352.js","./getCacheStaff.04455eaa.js","./event.6135f6e9.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./user.a4321bbd.js","./ContentBlacklistView.353b495d.js","./Input.67ce3011.js","./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.43d0d9fb.js","./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js","./CloudUpload.c2963609.js","./Icon.c18adbc2.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./FollowChannel.5530ff6a.js","./nostr.8d7c0b4a.js","./use.42516be4.js"],import.meta.url)},{path:"/move/house",name:"move-house",component:()=>Ze(()=>import("./MoveHouseView.9c524995.js"),["./MoveHouseView.9c524995.js","./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js","./RelayInfoView.a288b455.js","./Ellipsis.9cb636a6.js","./Ellipsis.b57e5c64.css","./use.42516be4.js","./autoAddRelayurlByEventIdStaff.dbe693d3.js","./getCacheStaff.04455eaa.js","./Icon.c18adbc2.js","./use-theme-vars.bc2ec469.js","./Empty.6cdd22d7.js","./ListItem.7fc45615.js","./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js","./DrawerContent.6dbdfd12.js","./user.a4321bbd.js","./nostr.8d7c0b4a.js","./Scrollbar.bfc06a16.js","./ReloadCircleSharp.f8dea346.js","./Scrollbar.1fcc2d31.js","./Scrollbar.f1879afa.css","./Input.67ce3011.js","./Thing.895493bd.js","./RelayConnectListCard.vue_vue_type_script_setup_true_lang.9ebf2aaa.js","./Checkbox.4e768866.js","./Space.71e20140.js","./get-slot.4ceacf82.js"],import.meta.url)}]}]},{path:"/to-back-1",name:"to-back-1",component:()=>Ze(()=>import("./ToBackView.6a7b7dba.js"),["./ToBackView.6a7b7dba.js","./PageHeader.12826df1.js"],import.meta.url),children:[{path:"/relay/info/:url",name:"relay-info",component:()=>Ze(()=>import("./RelayInfoView.921ef6cb.js"),["./RelayInfoView.921ef6cb.js","./user.a4321bbd.js","./getCacheStaff.04455eaa.js","./nostr.8d7c0b4a.js","./RelayInfoView.a288b455.js","./Checkbox.4e768866.js","./create.2deeaf6a.js","./Tag.ef764be7.js","./Empty.6cdd22d7.js","./composables.e6030404.js","./Space.71e20140.js","./get-slot.4ceacf82.js","./Result.fa2927e1.js"],import.meta.url)}]}]});Qx.beforeEach((e,t,r)=>{const o=localStorage.getItem("newUserFlag"),n=localStorage.getItem("prikey");e.path.startsWith("/login")||["relay-info","login"].some(i=>e.name===i)?r():o&&o===n?r({name:"login",query:{redirected:e.fullPath}}):r()});try{window.nostrApi=x9()}catch{}const Ff=I2(gH);Ff.use(Qx);Ff.use(gf);Ff.mount("#app");export{yN as $,Ir as A,ww as B,ur as C,hi as D,n6 as E,S9 as F,I9 as G,ct as H,L9 as I,$9 as J,pw as K,Qe as L,Cw as M,Yl as N,GD as O,gN as P,uN as Q,Yn as R,cH as S,TO as T,qt as U,Fi as V,xN as W,vN as X,Ho as Y,o9 as Z,qn as _,re as a,Rn as a$,Xx as a0,cy as a1,rf as a2,fN as a3,JF as a4,XM as a5,c9 as a6,hN as a7,Ar as a8,YF as a9,vP as aA,t6 as aB,P0 as aC,V0 as aD,oo as aE,$t as aF,fr as aG,wr as aH,h0 as aI,Fb as aJ,Xh as aK,Dt as aL,mt as aM,i6 as aN,tt as aO,md as aP,cs as aQ,ys as aR,dN as aS,gf as aT,Lu as aU,K1 as aV,G9 as aW,q9 as aX,$l as aY,Pi as aZ,bL as a_,ii as aa,Zx as ab,ku as ac,bl as ad,js as ae,HM as af,ly as ag,oN as ah,Ns as ai,rg as aj,J9 as ak,sN as al,tN as am,Dn as an,Re as ao,GM as ap,V as aq,Z1 as ar,WM as as,Gt as at,Xl as au,Me as av,Ab as aw,et as ax,z9 as ay,mr as az,z as b,Sr as b$,Jv as b0,B9 as b1,A9 as b2,E0 as b3,Vo as b4,xt as b5,to as b6,_d as b7,LS as b8,kS as b9,wk as bA,jl as bB,o3 as bC,qo as bD,Tn as bE,op as bF,yt as bG,Kx as bH,i9 as bI,uF as bJ,fc as bK,s9 as bL,Gs as bM,FS as bN,Sa as bO,Ld as bP,Ko as bQ,Fr as bR,r6 as bS,Jl as bT,Cd as bU,wR as bV,wS as bW,gS as bX,Dr as bY,Ls as bZ,C2 as b_,GS as ba,Kt as bb,Fl as bc,Qt as bd,Is as be,U6 as bf,A6 as bg,Sd as bh,Ed as bi,jb as bj,Vd as bk,gi as bl,Z6 as bm,Vb as bn,pd as bo,jm as bp,Wm as bq,Mr as br,AO as bs,pH as bt,k9 as bu,X9 as bv,E9 as bw,K9 as bx,g8 as by,Zr as bz,j as c,aN as c$,XP as c0,cN as c1,W1 as c2,EA as c3,yM as c4,O9 as c5,h8 as c6,Tu as c7,cP as c8,Zl as c9,SI as cA,iN as cB,lN as cC,gA as cD,rB as cE,Ks as cF,pN as cG,rH as cH,kA as cI,gM as cJ,JO as cK,W9 as cL,mu as cM,vE as cN,U0 as cO,Oi as cP,tk as cQ,yE as cR,Ul as cS,Td as cT,fS as cU,HL as cV,Z8 as cW,VM as cX,CC as cY,wC as cZ,V9 as c_,Zs as ca,Qs as cb,bi as cc,Js as cd,P9 as ce,w9 as cf,Uw as cg,R9 as ch,Q9 as ci,rN as cj,Wo as ck,ie as cl,zs as cm,JI as cn,M9 as co,lo as cp,C0 as cq,cS as cr,nI as cs,_9 as ct,T9 as cu,B8 as cv,eN as cw,Mi as cx,rI as cy,xE as cz,oe as d,Y9 as d0,nN as d1,mO as d2,Z9 as d3,xI as d4,mi as d5,Ze as d6,mN as d7,U9 as d8,WI as d9,ks as dA,N9 as dB,Ev as dC,Pv as dD,Iv as dE,Hs as dF,H9 as dG,c8 as dH,bN as dI,QM as dJ,T1 as dK,Gh as da,j9 as db,ea as dc,_S as dd,yv as de,f0 as df,Gb as dg,_h as dh,Qx as di,$I as dj,tv as dk,Ac as dl,$P as dm,V8 as dn,bR as dp,mw as dq,YI as dr,pR as ds,fu as dt,EM as du,_M as dv,TR as dw,Nd as dx,Sh as dy,Cv as dz,Cn as e,be as f,Ys as g,Xe as h,Ds as i,E as j,cu as k,D9 as l,Se as m,K as n,Ce as o,qe as p,pr as q,rr as r,aR as s,In as t,Pt as u,er as v,du as w,dt as x,vn as y,yn as z};
