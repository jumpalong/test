var QC=Object.defineProperty;var ew=(e,t,r)=>t in e?QC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var xe=(e,t,r)=>(ew(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();class Vc{constructor(t){xe(this,"data");xe(this,"prev");xe(this,"next");this.data=t,this.prev=null,this.next=null}}class Tl{constructor(){xe(this,"head");xe(this,"tail");xe(this,"size");this.head=null,this.tail=null,this.size=0}[Symbol.iterator](){let r=this.head;return{[Symbol.iterator](){return this},next(){if(r){const n=r;return r=r.next,{value:n}}else return{value:null,done:!0}}}}add(t){let r=new Vc(t);this.head==null?(this.head=r,this.tail=r):(r.prev=this.tail,this.tail.next=r,this.tail=r),this.size++}insertBefore(t,r){let n=new Vc(r);t.prev==null?(this.head=n,t.prev=n,n.next=t):(n.next=t,n.prev=t.prev,t.prev.next=n,t.prev=n),this.size++}insertAfter(t,r){let n=new Vc(r);t.next==null?(this.tail=n,t.next=n,n.prev=t):(n.next=t.next,t.next.prev=n,n.prev=t,t.next=n),this.size++}delete(t){this.head==null||t==null||(this.head==t&&(this.head=this.head.next,this.head!=null&&(this.head.prev=null)),this.tail==t&&(this.tail=this.tail.prev,this.tail!=null&&(this.tail.next=null)),t.prev!=null&&(t.prev.next=t.next),t.next!=null&&(t.next.prev=t.prev),this.size--)}traverseForward(t){let r=this.head,n=0;for(;r!=null;)t(r.data,n,r,this),r=r.next,n++}traverseBackward(t){let r=this.tail,n=0;for(;r!=null;)t(r.data,n,r,this),r=r.prev,n++}getHead(){return this.head}getTail(){return this.tail}toArray(){let t=[],r=this.head;for(;r!=null;)t.push(r.data),r=r.next;return t}toArrayOfTraverseBackward(){let t=[];return this.traverseBackward(r=>{t.push(r)}),t}static from(t){let r=new Tl;for(let n of t)r.add(n);return r}}function tw(){return{initialization(e){e.assignConfig({format(t,r,n){return t.getConfig().origin?[`%c[${t.chain.toArrayOfTraverseBackward().join(">")}]
`,$u[r],...n]:[`%c[${t.namespace}]
`,$u[r],...n]}},!1)},config:{origin:!0}}}function rw(){return{filter(e){let t=e.getConfig().include;return e.chain.traverseBackward(r=>{if(typeof t=="boolean")return t;if(t===void 0)return!1;t=t[r]}),typeof t=="boolean"?t:!1},config:{include:!0}}}const nw={[0]:"error",[1]:"warn",[2]:"log",[3]:"info",[4]:"info",[5]:"debug",[6]:"info"},$u={[2]:"color: green;",[1]:"color: orange;",[0]:"color: red;",[3]:"color: #4bcffa",[4]:"color: #ccae62",[5]:"color: #7158e2",[6]:"color: #3d3d3d"},ow=(e,t,r)=>[`%c${e.namespace}`,$u[t],...r],Co=class{constructor(t="root",r=null,n){xe(this,"namespace");xe(this,"config",null);xe(this,"parent");xe(this,"plugins");xe(this,"chain",new Tl);var o;n&&(this.config=n),this.namespace=t,this.plugins=(o=r==null?void 0:r.plugins)!=null?o:[],this.setParrent(r)}get format(){var t;return(t=this.getConfig().format)!=null?t:ow}setConfig(t){return this.config=t,this}getConfig(){var t,r,n;return(n=(r=this.config)!=null?r:(t=this.parent)==null?void 0:t.getConfig())!=null?n:this.config={}}assignConfig(t,r=!0){return this.setConfig(r?Object.assign({},this.config,t):Object.assign(this.config,t)),this}for(t){var o,i;if(t===void 0)return Co.lastLogger=(o=Co.lastLogger)!=null?o:$l;let r=(i=Co.lastLogger)!=null?i:$l,n=new Co(t,r);return Co.lastLogger=n,n}setParrent(t){this.parent=t;const r=new Tl;this.chain=r;let n=this;const o=new Set;for(;n;){const i=n.namespace;if(o.has(i)){r.add(n.namespace),this.parent=null;return}o.add(i),r.add(n.namespace),n=n.parent}}addPlugin(t){var r;return t.config&&this.assignConfig(t.config),(r=t.initialization)==null||r.call(t,this),this.plugins.push(t),this}_log(t,r){this.plugins.every(n=>{var o,i;return(i=(o=n.filter)==null?void 0:o.call(n,this))!=null?i:!0})&&console[nw[t]](...this.format(this,t,r))}log(t,...r){return this._log(t,r),this}silly(...t){return this._log(6,t),this}debug(...t){return this._log(5,t),this}verbose(...t){return this._log(4,t),this}http(...t){return this._log(3,t),this}info(...t){return this._log(2,t),this}warn(...t){return this._log(1,t),this}error(...t){return this._log(0,t),this}};let ml=Co;xe(ml,"lastLogger",null);function iw(){return new ml().addPlugin(rw()).addPlugin(tw())}const $l=iw();try{window&&(window.logger=$l),global&&(global.logger=$l)}catch{}logger.assignConfig({origin:!0});function Ql(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const sw="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",aw=Ql(sw),lw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cw=Ql(lw);function Wm(e){return!!e||e===""}function qi(e){if(me(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=ft(n)?fw(n):qi(n);if(o)for(const i in o)t[i]=o[i]}return t}else{if(ft(e))return e;if(rt(e))return e}}const uw=/;(?![^(]*\))/g,dw=/:(.+)/;function fw(e){const t={};return e.split(uw).forEach(r=>{if(r){const n=r.split(dw);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ec(e){let t="";if(ft(e))t=e;else if(me(e))for(let r=0;r<e.length;r++){const n=ec(e[r]);n&&(t+=n+" ")}else if(rt(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function cN(e){if(!e)return null;let{class:t,style:r}=e;return t&&!ft(t)&&(e.class=ec(t)),r&&(e.style=qi(r)),e}function hw(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Gn(e[n],t[n]);return r}function Gn(e,t){if(e===t)return!0;let r=mh(e),n=mh(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Ns(e),n=Ns(t),r||n)return e===t;if(r=me(e),n=me(t),r||n)return r&&n?hw(e,t):!1;if(r=rt(e),n=rt(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const s in e){const a=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(a&&!l||!a&&l||!Gn(e[s],t[s]))return!1}}return String(e)===String(t)}function tc(e,t){return e.findIndex(r=>Gn(r,t))}const uN=e=>ft(e)?e:e==null?"":me(e)||rt(e)&&(e.toString===Vm||!_e(e.toString))?JSON.stringify(e,Um,2):String(e),Um=(e,t)=>t&&t.__v_isRef?Um(e,t.value):hi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:No(t)?{[`Set(${t.size})`]:[...t.values()]}:rt(t)&&!me(t)&&!Km(t)?String(t):t,qe={},fi=[],Tr=()=>{},pw=()=>!1,gw=/^on[^a-z]/,ca=e=>gw.test(e),Rd=e=>e.startsWith("onUpdate:"),ht=Object.assign,Od=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},mw=Object.prototype.hasOwnProperty,Me=(e,t)=>mw.call(e,t),me=Array.isArray,hi=e=>ua(e)==="[object Map]",No=e=>ua(e)==="[object Set]",mh=e=>ua(e)==="[object Date]",_e=e=>typeof e=="function",ft=e=>typeof e=="string",Ns=e=>typeof e=="symbol",rt=e=>e!==null&&typeof e=="object",Ad=e=>rt(e)&&_e(e.then)&&_e(e.catch),Vm=Object.prototype.toString,ua=e=>Vm.call(e),bw=e=>ua(e).slice(8,-1),Km=e=>ua(e)==="[object Object]",Bd=e=>ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ss=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rc=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},vw=/-(\w)/g,vr=rc(e=>e.replace(vw,(t,r)=>r?r.toUpperCase():"")),yw=/\B([A-Z])/g,Nr=rc(e=>e.replace(yw,"-$1").toLowerCase()),nc=rc(e=>e.charAt(0).toUpperCase()+e.slice(1)),bl=rc(e=>e?`on${nc(e)}`:""),Ti=(e,t)=>!Object.is(e,t),pi=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},Pl=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Xn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bh;const xw=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let rr;class qm{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=rr,!t&&rr&&(this.index=(rr.scopes||(rr.scopes=[])).push(this)-1)}run(t){if(this.active){const r=rr;try{return rr=this,t()}finally{rr=r}}}on(){rr=this}off(){rr=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Cw(e){return new qm(e)}function Gm(e,t=rr){t&&t.active&&t.effects.push(e)}function ww(){return rr}function Sw(e){rr&&rr.cleanups.push(e)}const Md=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xm=e=>(e.w&Yn)>0,Ym=e=>(e.n&Yn)>0,_w=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Yn},Ew=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];Xm(o)&&!Ym(o)?o.delete(e):t[r++]=o,o.w&=~Yn,o.n&=~Yn}t.length=r}},Pu=new WeakMap;let vs=0,Yn=1;const Lu=30;let _r;const Lo=Symbol(""),ku=Symbol("");class oc{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Gm(this,n)}run(){if(!this.active)return this.fn();let t=_r,r=jn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_r,_r=this,jn=!0,Yn=1<<++vs,vs<=Lu?_w(this):vh(this),this.fn()}finally{vs<=Lu&&Ew(this),Yn=1<<--vs,_r=this.parent,jn=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_r===this?this.deferStop=!0:this.active&&(vh(this),this.onStop&&this.onStop(),this.active=!1)}}function vh(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}function dN(e,t){e.effect&&(e=e.effect.fn);const r=new oc(e);t&&(ht(r,t),t.scope&&Gm(r,t.scope)),(!t||!t.lazy)&&r.run();const n=r.run.bind(r);return n.effect=r,n}function fN(e){e.effect.stop()}let jn=!0;const Zm=[];function jo(){Zm.push(jn),jn=!1}function Wo(){const e=Zm.pop();jn=e===void 0?!0:e}function cr(e,t,r){if(jn&&_r){let n=Pu.get(e);n||Pu.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=Md()),Jm(o)}}function Jm(e,t){let r=!1;vs<=Lu?Ym(e)||(e.n|=Yn,r=!Xm(e)):r=!e.has(_r),r&&(e.add(_r),_r.deps.push(e))}function cn(e,t,r,n,o,i){const s=Pu.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(r==="length"&&me(e))s.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(r!==void 0&&a.push(s.get(r)),t){case"add":me(e)?Bd(r)&&a.push(s.get("length")):(a.push(s.get(Lo)),hi(e)&&a.push(s.get(ku)));break;case"delete":me(e)||(a.push(s.get(Lo)),hi(e)&&a.push(s.get(ku)));break;case"set":hi(e)&&a.push(s.get(Lo));break}if(a.length===1)a[0]&&Iu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Iu(Md(l))}}function Iu(e,t){const r=me(e)?e:[...e];for(const n of r)n.computed&&yh(n);for(const n of r)n.computed||yh(n)}function yh(e,t){(e!==_r||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Tw=Ql("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ns)),$w=ic(),Pw=ic(!1,!0),Lw=ic(!0),kw=ic(!0,!0),xh=Iw();function Iw(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=Ne(this);for(let i=0,s=this.length;i<s;i++)cr(n,"get",i+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(Ne)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){jo();const n=Ne(this)[t].apply(this,r);return Wo(),n}}),e}function ic(e=!1,t=!1){return function(n,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?s0:i0:t?o0:n0).get(n))return n;const s=me(n);if(!e&&s&&Me(xh,o))return Reflect.get(xh,o,i);const a=Reflect.get(n,o,i);return(Ns(o)?Qm.has(o):Tw(o))||(e||cr(n,"get",o),t)?a:vt(a)?s&&Bd(o)?a:a.value:rt(a)?e?un(a):Zt(a):a}}const Rw=e0(),Ow=e0(!0);function e0(e=!1){return function(r,n,o,i){let s=r[n];if($i(s)&&vt(s)&&!vt(o))return!1;if(!e&&(!Ll(o)&&!$i(o)&&(s=Ne(s),o=Ne(o)),!me(r)&&vt(s)&&!vt(o)))return s.value=o,!0;const a=me(r)&&Bd(n)?Number(n)<r.length:Me(r,n),l=Reflect.set(r,n,o,i);return r===Ne(i)&&(a?Ti(o,s)&&cn(r,"set",n,o):cn(r,"add",n,o)),l}}function Aw(e,t){const r=Me(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&cn(e,"delete",t,void 0),n}function Bw(e,t){const r=Reflect.has(e,t);return(!Ns(t)||!Qm.has(t))&&cr(e,"has",t),r}function Mw(e){return cr(e,"iterate",me(e)?"length":Lo),Reflect.ownKeys(e)}const t0={get:$w,set:Rw,deleteProperty:Aw,has:Bw,ownKeys:Mw},r0={get:Lw,set(e,t){return!0},deleteProperty(e,t){return!0}},Hw=ht({},t0,{get:Pw,set:Ow}),Dw=ht({},r0,{get:kw}),Hd=e=>e,sc=e=>Reflect.getPrototypeOf(e);function Aa(e,t,r=!1,n=!1){e=e.__v_raw;const o=Ne(e),i=Ne(t);r||(t!==i&&cr(o,"get",t),cr(o,"get",i));const{has:s}=sc(o),a=n?Hd:r?Dd:js;if(s.call(o,t))return a(e.get(t));if(s.call(o,i))return a(e.get(i));e!==o&&e.get(t)}function Ba(e,t=!1){const r=this.__v_raw,n=Ne(r),o=Ne(e);return t||(e!==o&&cr(n,"has",e),cr(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function Ma(e,t=!1){return e=e.__v_raw,!t&&cr(Ne(e),"iterate",Lo),Reflect.get(e,"size",e)}function Ch(e){e=Ne(e);const t=Ne(this);return sc(t).has.call(t,e)||(t.add(e),cn(t,"add",e,e)),this}function wh(e,t){t=Ne(t);const r=Ne(this),{has:n,get:o}=sc(r);let i=n.call(r,e);i||(e=Ne(e),i=n.call(r,e));const s=o.call(r,e);return r.set(e,t),i?Ti(t,s)&&cn(r,"set",e,t):cn(r,"add",e,t),this}function Sh(e){const t=Ne(this),{has:r,get:n}=sc(t);let o=r.call(t,e);o||(e=Ne(e),o=r.call(t,e)),n&&n.call(t,e);const i=t.delete(e);return o&&cn(t,"delete",e,void 0),i}function _h(){const e=Ne(this),t=e.size!==0,r=e.clear();return t&&cn(e,"clear",void 0,void 0),r}function Ha(e,t){return function(n,o){const i=this,s=i.__v_raw,a=Ne(s),l=t?Hd:e?Dd:js;return!e&&cr(a,"iterate",Lo),s.forEach((c,u)=>n.call(o,l(c),l(u),i))}}function Da(e,t,r){return function(...n){const o=this.__v_raw,i=Ne(o),s=hi(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=o[e](...n),u=r?Hd:t?Dd:js;return!t&&cr(i,"iterate",l?ku:Lo),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function xn(e){return function(...t){return e==="delete"?!1:this}}function zw(){const e={get(i){return Aa(this,i)},get size(){return Ma(this)},has:Ba,add:Ch,set:wh,delete:Sh,clear:_h,forEach:Ha(!1,!1)},t={get(i){return Aa(this,i,!1,!0)},get size(){return Ma(this)},has:Ba,add:Ch,set:wh,delete:Sh,clear:_h,forEach:Ha(!1,!0)},r={get(i){return Aa(this,i,!0)},get size(){return Ma(this,!0)},has(i){return Ba.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:Ha(!0,!1)},n={get(i){return Aa(this,i,!0,!0)},get size(){return Ma(this,!0)},has(i){return Ba.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:Ha(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Da(i,!1,!1),r[i]=Da(i,!0,!1),t[i]=Da(i,!1,!0),n[i]=Da(i,!0,!0)}),[e,r,t,n]}const[Fw,Nw,jw,Ww]=zw();function ac(e,t){const r=t?e?Ww:jw:e?Nw:Fw;return(n,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(Me(r,o)&&o in n?r:n,o,i)}const Uw={get:ac(!1,!1)},Vw={get:ac(!1,!0)},Kw={get:ac(!0,!1)},qw={get:ac(!0,!0)},n0=new WeakMap,o0=new WeakMap,i0=new WeakMap,s0=new WeakMap;function Gw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xw(e){return e.__v_skip||!Object.isExtensible(e)?0:Gw(bw(e))}function Zt(e){return $i(e)?e:lc(e,!1,t0,Uw,n0)}function Yw(e){return lc(e,!1,Hw,Vw,o0)}function un(e){return lc(e,!0,r0,Kw,i0)}function hN(e){return lc(e,!0,Dw,qw,s0)}function lc(e,t,r,n,o){if(!rt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=Xw(e);if(s===0)return e;const a=new Proxy(e,s===2?n:r);return o.set(e,a),a}function gi(e){return $i(e)?gi(e.__v_raw):!!(e&&e.__v_isReactive)}function $i(e){return!!(e&&e.__v_isReadonly)}function Ll(e){return!!(e&&e.__v_isShallow)}function a0(e){return gi(e)||$i(e)}function Ne(e){const t=e&&e.__v_raw;return t?Ne(t):e}function kl(e){return Pl(e,"__v_skip",!0),e}const js=e=>rt(e)?Zt(e):e,Dd=e=>rt(e)?un(e):e;function zd(e){jn&&_r&&(e=Ne(e),Jm(e.dep||(e.dep=Md())))}function cc(e,t){e=Ne(e),e.dep&&Iu(e.dep)}function vt(e){return!!(e&&e.__v_isRef===!0)}function W(e){return l0(e,!1)}function Fd(e){return l0(e,!0)}function l0(e,t){return vt(e)?e:new Zw(e,t)}class Zw{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:Ne(t),this._value=r?t:js(t)}get value(){return zd(this),this._value}set value(t){const r=this.__v_isShallow||Ll(t)||$i(t);t=r?t:Ne(t),Ti(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:js(t),cc(this))}}function pN(e){cc(e)}function mr(e){return vt(e)?e.value:e}const Jw={get:(e,t,r)=>mr(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return vt(o)&&!vt(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function c0(e){return gi(e)?e:new Proxy(e,Jw)}class Qw{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:r,set:n}=t(()=>zd(this),()=>cc(this));this._get=r,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function gN(e){return new Qw(e)}function mN(e){const t=me(e)?new Array(e.length):{};for(const r in e)t[r]=Be(e,r);return t}class e2{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Be(e,t,r){const n=e[t];return vt(n)?n:new e2(e,t,r)}var u0;class t2{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[u0]=!1,this._dirty=!0,this.effect=new oc(t,()=>{this._dirty||(this._dirty=!0,cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=Ne(this);return zd(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}u0="__v_isReadonly";function r2(e,t,r=!1){let n,o;const i=_e(e);return i?(n=e,o=Tr):(n=e.get,o=e.set),new t2(n,o,i||!o,r)}const _s=[];function n2(e,...t){jo();const r=_s.length?_s[_s.length-1].component:null,n=r&&r.appContext.config.warnHandler,o=o2();if(n)sn(n,r,11,[e+t.join(""),r&&r.proxy,o.map(({vnode:i})=>`at <${U0(r,i.type)}>`).join(`
`),o]);else{const i=[`[Vue warn]: ${e}`,...t];o.length&&i.push(`
`,...i2(o)),console.warn(...i)}Wo()}function o2(){let e=_s[_s.length-1];if(!e)return[];const t=[];for(;e;){const r=t[0];r&&r.vnode===e?r.recurseCount++:t.push({vnode:e,recurseCount:0});const n=e.component&&e.component.parent;e=n&&n.vnode}return t}function i2(e){const t=[];return e.forEach((r,n)=>{t.push(...n===0?[]:[`
`],...s2(r))}),t}function s2({vnode:e,recurseCount:t}){const r=t>0?`... (${t} recursive calls)`:"",n=e.component?e.component.parent==null:!1,o=` at <${U0(e.component,e.type,n)}`,i=">"+r;return e.props?[o,...a2(e.props),i]:[o+i]}function a2(e){const t=[],r=Object.keys(e);return r.slice(0,3).forEach(n=>{t.push(...d0(n,e[n]))}),r.length>3&&t.push(" ..."),t}function d0(e,t,r){return ft(t)?(t=JSON.stringify(t),r?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?r?t:[`${e}=${t}`]:vt(t)?(t=d0(e,Ne(t.value),!0),r?t:[`${e}=Ref<`,t,">"]):_e(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Ne(t),r?t:[`${e}=`,t])}function sn(e,t,r,n){let o;try{o=n?e(...n):e()}catch(i){Gi(i,t,r)}return o}function br(e,t,r,n){if(_e(e)){const i=sn(e,t,r,n);return i&&Ad(i)&&i.catch(s=>{Gi(s,t,r)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(br(e[i],t,r,n));return o}function Gi(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=r;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){sn(l,null,10,[e,s,a]);return}}l2(e,r,o,n)}function l2(e,t,r,n=!0){console.error(e)}let Ws=!1,Ru=!1;const Bt=[];let Hr=0;const mi=[];let tn=null,vo=0;const f0=Promise.resolve();let Nd=null;function Ht(e){const t=Nd||f0;return e?t.then(this?e.bind(this):e):t}function c2(e){let t=Hr+1,r=Bt.length;for(;t<r;){const n=t+r>>>1;Us(Bt[n])<e?t=n+1:r=n}return t}function uc(e){(!Bt.length||!Bt.includes(e,Ws&&e.allowRecurse?Hr+1:Hr))&&(e.id==null?Bt.push(e):Bt.splice(c2(e.id),0,e),h0())}function h0(){!Ws&&!Ru&&(Ru=!0,Nd=f0.then(g0))}function u2(e){const t=Bt.indexOf(e);t>Hr&&Bt.splice(t,1)}function p0(e){me(e)?mi.push(...e):(!tn||!tn.includes(e,e.allowRecurse?vo+1:vo))&&mi.push(e),h0()}function Eh(e,t=Ws?Hr+1:0){for(;t<Bt.length;t++){const r=Bt[t];r&&r.pre&&(Bt.splice(t,1),t--,r())}}function Il(e){if(mi.length){const t=[...new Set(mi)];if(mi.length=0,tn){tn.push(...t);return}for(tn=t,tn.sort((r,n)=>Us(r)-Us(n)),vo=0;vo<tn.length;vo++)tn[vo]();tn=null,vo=0}}const Us=e=>e.id==null?1/0:e.id,d2=(e,t)=>{const r=Us(e)-Us(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function g0(e){Ru=!1,Ws=!0,Bt.sort(d2);const t=Tr;try{for(Hr=0;Hr<Bt.length;Hr++){const r=Bt[Hr];r&&r.active!==!1&&sn(r,null,14)}}finally{Hr=0,Bt.length=0,Il(),Ws=!1,Nd=null,(Bt.length||mi.length)&&g0()}}let is,za=[];function f2(e,t){var r,n;is=e,is?(is.enabled=!0,za.forEach(({event:o,args:i})=>is.emit(o,...i)),za=[]):typeof window<"u"&&window.HTMLElement&&!(!((n=(r=window.navigator)===null||r===void 0?void 0:r.userAgent)===null||n===void 0)&&n.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{f2(i,t)}),setTimeout(()=>{is||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,za=[])},3e3)):za=[]}function h2(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||qe;let o=r;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in n){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=n[u]||qe;f&&(o=r.map(h=>h.trim())),d&&(o=r.map(Xn))}let a,l=n[a=bl(t)]||n[a=bl(vr(t))];!l&&i&&(l=n[a=bl(Nr(t))]),l&&br(l,e,6,o);const c=n[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,br(c,e,6,o)}}function m0(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!_e(e)){const l=c=>{const u=m0(c,t,!0);u&&(a=!0,ht(s,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(rt(e)&&n.set(e,null),null):(me(i)?i.forEach(l=>s[l]=null):ht(s,i),rt(e)&&n.set(e,s),s)}function dc(e,t){return!e||!ca(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(e,t[0].toLowerCase()+t.slice(1))||Me(e,Nr(t))||Me(e,t))}let Mt=null,fc=null;function Vs(e){const t=Mt;return Mt=e,fc=e&&e.type.__scopeId||null,t}function bN(e){fc=e}function vN(){fc=null}const yN=e=>Sr;function Sr(e,t=Mt,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&Dh(-1);const i=Vs(t);let s;try{s=e(...o)}finally{Vs(i),n._d&&Dh(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function vl(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:h,ctx:p,inheritAttrs:b}=e;let w,g;const m=Vs(e);try{if(r.shapeFlag&4){const x=o||n;w=nr(u.call(x,x,d,i,h,f,p)),g=l}else{const x=t;w=nr(x.length>1?x(i,{attrs:l,slots:a,emit:c}):x(i,null)),g=t.props?l:g2(l)}}catch(x){Ts.length=0,Gi(x,e,1),w=Ue(_t)}let _=w;if(g&&b!==!1){const x=Object.keys(g),{shapeFlag:C}=_;x.length&&C&7&&(s&&x.some(Rd)&&(g=m2(g,s)),_=Pr(_,g))}return r.dirs&&(_=Pr(_),_.dirs=_.dirs?_.dirs.concat(r.dirs):r.dirs),r.transition&&(_.transition=r.transition),w=_,Vs(m),w}function p2(e){let t;for(let r=0;r<e.length;r++){const n=e[r];if(Zn(n)){if(n.type!==_t||n.children==="v-if"){if(t)return;t=n}}else return}return t}const g2=e=>{let t;for(const r in e)(r==="class"||r==="style"||ca(r))&&((t||(t={}))[r]=e[r]);return t},m2=(e,t)=>{const r={};for(const n in e)(!Rd(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function b2(e,t,r){const{props:n,children:o,component:i}=e,{props:s,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Th(n,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==n[f]&&!dc(c,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===s?!1:n?s?Th(n,s,c):!0:!!s;return!1}function Th(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(t[i]!==e[i]&&!dc(r,i))return!0}return!1}function jd({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const b0=e=>e.__isSuspense,v2={name:"Suspense",__isSuspense:!0,process(e,t,r,n,o,i,s,a,l,c){e==null?y2(t,r,n,o,i,s,a,l,c):x2(e,t,r,n,o,s,a,l,c)},hydrate:C2,create:Wd,normalize:w2},xN=v2;function Ks(e,t){const r=e.props&&e.props[t];_e(r)&&r()}function y2(e,t,r,n,o,i,s,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),f=e.suspense=Wd(e,o,n,t,d,r,i,s,a,l);c(null,f.pendingBranch=e.ssContent,d,null,n,f,i,s),f.deps>0?(Ks(e,"onPending"),Ks(e,"onFallback"),c(null,e.ssFallback,t,r,n,null,i,s),bi(f,e.ssFallback)):f.resolve()}function x2(e,t,r,n,o,i,s,a,{p:l,um:c,o:{createElement:u}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const f=t.ssContent,h=t.ssFallback,{activeBranch:p,pendingBranch:b,isInFallback:w,isHydrating:g}=d;if(b)d.pendingBranch=f,Dr(f,b)?(l(b,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0?d.resolve():w&&(l(p,h,r,n,o,null,i,s,a),bi(d,h))):(d.pendingId++,g?(d.isHydrating=!1,d.activeBranch=b):c(b,o,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),w?(l(null,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0?d.resolve():(l(p,h,r,n,o,null,i,s,a),bi(d,h))):p&&Dr(f,p)?(l(p,f,r,n,o,d,i,s,a),d.resolve(!0)):(l(null,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0&&d.resolve()));else if(p&&Dr(f,p))l(p,f,r,n,o,d,i,s,a),bi(d,f);else if(Ks(t,"onPending"),d.pendingBranch=f,d.pendingId++,l(null,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0)d.resolve();else{const{timeout:m,pendingId:_}=d;m>0?setTimeout(()=>{d.pendingId===_&&d.fallback(h)},m):m===0&&d.fallback(h)}}function Wd(e,t,r,n,o,i,s,a,l,c,u=!1){const{p:d,m:f,um:h,n:p,o:{parentNode:b,remove:w}}=c,g=Xn(e.props&&e.props.timeout),m={vnode:e,parent:t,parentComponent:r,isSVG:s,container:n,hiddenContainer:o,anchor:i,deps:0,pendingId:0,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:x,activeBranch:C,pendingBranch:$,pendingId:S,effects:P,parentComponent:k,container:I}=m;if(m.isHydrating)m.isHydrating=!1;else if(!_){const H=C&&$.transition&&$.transition.mode==="out-in";H&&(C.transition.afterLeave=()=>{S===m.pendingId&&f($,I,B,0)});let{anchor:B}=m;C&&(B=p(C),h(C,k,m,!0)),H||f($,I,B,0)}bi(m,$),m.pendingBranch=null,m.isInFallback=!1;let O=m.parent,R=!1;for(;O;){if(O.pendingBranch){O.effects.push(...P),R=!0;break}O=O.parent}R||p0(P),m.effects=[],Ks(x,"onResolve")},fallback(_){if(!m.pendingBranch)return;const{vnode:x,activeBranch:C,parentComponent:$,container:S,isSVG:P}=m;Ks(x,"onFallback");const k=p(C),I=()=>{!m.isInFallback||(d(null,_,S,k,$,null,P,a,l),bi(m,_))},O=_.transition&&_.transition.mode==="out-in";O&&(C.transition.afterLeave=I),m.isInFallback=!0,h(C,$,null,!0),O||I()},move(_,x,C){m.activeBranch&&f(m.activeBranch,_,x,C),m.container=_},next(){return m.activeBranch&&p(m.activeBranch)},registerDep(_,x){const C=!!m.pendingBranch;C&&m.deps++;const $=_.vnode.el;_.asyncDep.catch(S=>{Gi(S,_,0)}).then(S=>{if(_.isUnmounted||m.isUnmounted||m.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:P}=_;zu(_,S,!1),$&&(P.el=$);const k=!$&&_.subTree.el;x(_,P,b($||_.subTree.el),$?null:p(_.subTree),m,s,l),k&&w(k),jd(_,P.el),C&&--m.deps===0&&m.resolve()})},unmount(_,x){m.isUnmounted=!0,m.activeBranch&&h(m.activeBranch,r,_,x),m.pendingBranch&&h(m.pendingBranch,r,_,x)}};return m}function C2(e,t,r,n,o,i,s,a,l){const c=t.suspense=Wd(t,n,r,e.parentNode,document.createElement("div"),null,o,i,s,a,!0),u=l(e,c.pendingBranch=t.ssContent,r,c,i,s);return c.deps===0&&c.resolve(),u}function w2(e){const{shapeFlag:t,children:r}=e,n=t&32;e.ssContent=$h(n?r.default:r),e.ssFallback=n?$h(r.fallback):Ue(_t)}function $h(e){let t;if(_e(e)){const r=Bo&&e._c;r&&(e._d=!1,an()),e=e(),r&&(e._d=!0,t=Xt,M0())}return me(e)&&(e=p2(e)),e=nr(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(r=>r!==e)),e}function v0(e,t){t&&t.pendingBranch?me(e)?t.effects.push(...e):t.effects.push(e):p0(e)}function bi(e,t){e.activeBranch=t;const{vnode:r,parentComponent:n}=e,o=r.el=t.el;n&&n.subTree===r&&(n.vnode.el=o,jd(n,o))}function Ze(e,t){if(Ct){let r=Ct.provides;const n=Ct.parent&&Ct.parent.provides;n===r&&(r=Ct.provides=Object.create(n)),r[e]=t}}function Se(e,t,r=!1){const n=Ct||Mt;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&_e(t)?t.call(n.proxy):t}}function $r(e,t){return da(e,null,t)}function S2(e,t){return da(e,null,{flush:"post"})}function CN(e,t){return da(e,null,{flush:"sync"})}const Ph={};function tt(e,t,r){return da(e,t,r)}function da(e,t,{immediate:r,deep:n,flush:o,onTrack:i,onTrigger:s}=qe){const a=Ct;let l,c=!1,u=!1;if(vt(e)?(l=()=>e.value,c=Ll(e)):gi(e)?(l=()=>e,n=!0):me(e)?(u=!0,c=e.some(g=>gi(g)||Ll(g)),l=()=>e.map(g=>{if(vt(g))return g.value;if(gi(g))return wo(g);if(_e(g))return sn(g,a,2)})):_e(e)?t?l=()=>sn(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),br(e,a,3,[f])}:l=Tr,t&&n){const g=l;l=()=>wo(g())}let d,f=g=>{d=w.onStop=()=>{sn(g,a,4)}};if(ki)return f=Tr,t?r&&br(t,a,3,[l(),u?[]:void 0,f]):l(),Tr;let h=u?[]:Ph;const p=()=>{if(!!w.active)if(t){const g=w.run();(n||c||(u?g.some((m,_)=>Ti(m,h[_])):Ti(g,h)))&&(d&&d(),br(t,a,3,[g,h===Ph?void 0:h,f]),h=g)}else w.run()};p.allowRecurse=!!t;let b;o==="sync"?b=p:o==="post"?b=()=>Tt(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),b=()=>uc(p));const w=new oc(l,b);return t?r?p():h=w.run():o==="post"?Tt(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&Od(a.scope.effects,w)}}function _2(e,t,r){const n=this.proxy,o=ft(e)?e.includes(".")?y0(n,e):()=>n[e]:e.bind(n,n);let i;_e(t)?i=t:(i=t.handler,r=t);const s=Ct;Jn(this);const a=da(o,i.bind(n),r);return s?Jn(s):Un(),a}function y0(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function wo(e,t){if(!rt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),vt(e))wo(e.value,t);else if(me(e))for(let r=0;r<e.length;r++)wo(e[r],t);else if(No(e)||hi(e))e.forEach(r=>{wo(r,t)});else if(Km(e))for(const r in e)wo(e[r],t);return e}function x0(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Et(()=>{e.isMounted=!0}),wt(()=>{e.isUnmounting=!0}),e}const dr=[Function,Array],E2={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dr,onEnter:dr,onAfterEnter:dr,onEnterCancelled:dr,onBeforeLeave:dr,onLeave:dr,onAfterLeave:dr,onLeaveCancelled:dr,onBeforeAppear:dr,onAppear:dr,onAfterAppear:dr,onAppearCancelled:dr},setup(e,{slots:t}){const r=zt(),n=x0();let o;return()=>{const i=t.default&&Ud(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const b of i)if(b.type!==_t){s=b;break}}const a=Ne(e),{mode:l}=a;if(n.isLeaving)return Kc(s);const c=Lh(s);if(!c)return Kc(s);const u=qs(c,a,n,r);Pi(c,u);const d=r.subTree,f=d&&Lh(d);let h=!1;const{getTransitionKey:p}=c.type;if(p){const b=p();o===void 0?o=b:b!==o&&(o=b,h=!0)}if(f&&f.type!==_t&&(!Dr(c,f)||h)){const b=qs(f,a,n,r);if(Pi(f,b),l==="out-in")return n.isLeaving=!0,b.afterLeave=()=>{n.isLeaving=!1,r.update()},Kc(s);l==="in-out"&&c.type!==_t&&(b.delayLeave=(w,g,m)=>{const _=w0(n,f);_[String(f.key)]=f,w._leaveCb=()=>{g(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return s}}},C0=E2;function w0(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function qs(e,t,r,n){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:b,onAppear:w,onAfterAppear:g,onAppearCancelled:m}=t,_=String(e.key),x=w0(r,e),C=(P,k)=>{P&&br(P,n,9,k)},$=(P,k)=>{const I=k[1];C(P,k),me(P)?P.every(O=>O.length<=1)&&I():P.length<=1&&I()},S={mode:i,persisted:s,beforeEnter(P){let k=a;if(!r.isMounted)if(o)k=b||a;else return;P._leaveCb&&P._leaveCb(!0);const I=x[_];I&&Dr(e,I)&&I.el._leaveCb&&I.el._leaveCb(),C(k,[P])},enter(P){let k=l,I=c,O=u;if(!r.isMounted)if(o)k=w||l,I=g||c,O=m||u;else return;let R=!1;const H=P._enterCb=B=>{R||(R=!0,B?C(O,[P]):C(I,[P]),S.delayedLeave&&S.delayedLeave(),P._enterCb=void 0)};k?$(k,[P,H]):H()},leave(P,k){const I=String(e.key);if(P._enterCb&&P._enterCb(!0),r.isUnmounting)return k();C(d,[P]);let O=!1;const R=P._leaveCb=H=>{O||(O=!0,k(),H?C(p,[P]):C(h,[P]),P._leaveCb=void 0,x[I]===e&&delete x[I])};x[I]=e,f?$(f,[P,R]):R()},clone(P){return qs(P,t,r,n)}};return S}function Kc(e){if(fa(e))return e=Pr(e),e.children=null,e}function Lh(e){return fa(e)?e.children?e.children[0]:void 0:e}function Pi(e,t){e.shapeFlag&6&&e.component?Pi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ud(e,t=!1,r){let n=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=r==null?s.key:String(r)+String(s.key!=null?s.key:i);s.type===Ge?(s.patchFlag&128&&o++,n=n.concat(Ud(s.children,t,a))):(t||s.type!==_t)&&n.push(a!=null?Pr(s,{key:a}):s)}if(o>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function be(e){return _e(e)?{setup:e,name:e.name}:e}const ko=e=>!!e.type.__asyncLoader;function wN(e){_e(e)&&(e={loader:e});const{loader:t,loadingComponent:r,errorComponent:n,delay:o=200,timeout:i,suspensible:s=!0,onError:a}=e;let l=null,c,u=0;const d=()=>(u++,l=null,f()),f=()=>{let h;return l||(h=l=t().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((b,w)=>{a(p,()=>b(d()),()=>w(p),u+1)});throw p}).then(p=>h!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return be({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const h=Ct;if(c)return()=>qc(c,h);const p=m=>{l=null,Gi(m,h,13,!n)};if(s&&h.suspense||ki)return f().then(m=>()=>qc(m,h)).catch(m=>(p(m),()=>n?Ue(n,{error:m}):null));const b=W(!1),w=W(),g=W(!!o);return o&&setTimeout(()=>{g.value=!1},o),i!=null&&setTimeout(()=>{if(!b.value&&!w.value){const m=new Error(`Async component timed out after ${i}ms.`);p(m),w.value=m}},i),f().then(()=>{b.value=!0,h.parent&&fa(h.parent.vnode)&&uc(h.parent.update)}).catch(m=>{p(m),w.value=m}),()=>{if(b.value&&c)return qc(c,h);if(w.value&&n)return Ue(n,{error:w.value});if(r&&!g.value)return Ue(r)}}})}function qc(e,{vnode:{ref:t,props:r,children:n,shapeFlag:o},parent:i}){const s=Ue(e,r,n);return s.ref=t,s}const fa=e=>e.type.__isKeepAlive,T2={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const r=zt(),n=r.ctx;if(!n.renderer)return()=>{const m=t.default&&t.default();return m&&m.length===1?m[0]:m};const o=new Map,i=new Set;let s=null;const a=r.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=n,f=d("div");n.activate=(m,_,x,C,$)=>{const S=m.component;c(m,_,x,0,a),l(S.vnode,m,_,x,S,a,C,m.slotScopeIds,$),Tt(()=>{S.isDeactivated=!1,S.a&&pi(S.a);const P=m.props&&m.props.onVnodeMounted;P&&Gt(P,S.parent,m)},a)},n.deactivate=m=>{const _=m.component;c(m,f,null,1,a),Tt(()=>{_.da&&pi(_.da);const x=m.props&&m.props.onVnodeUnmounted;x&&Gt(x,_.parent,m),_.isDeactivated=!0},a)};function h(m){Gc(m),u(m,r,a,!0)}function p(m){o.forEach((_,x)=>{const C=Ml(_.type);C&&(!m||!m(C))&&b(x)})}function b(m){const _=o.get(m);!s||_.type!==s.type?h(_):s&&Gc(s),o.delete(m),i.delete(m)}tt(()=>[e.include,e.exclude],([m,_])=>{m&&p(x=>ys(m,x)),_&&p(x=>!ys(_,x))},{flush:"post",deep:!0});let w=null;const g=()=>{w!=null&&o.set(w,Xc(r.subTree))};return Et(g),Vd(g),wt(()=>{o.forEach(m=>{const{subTree:_,suspense:x}=r,C=Xc(_);if(m.type===C.type){Gc(C);const $=C.component.da;$&&Tt($,x);return}h(m)})}),()=>{if(w=null,!t.default)return null;const m=t.default(),_=m[0];if(m.length>1)return s=null,m;if(!Zn(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return s=null,_;let x=Xc(_);const C=x.type,$=Ml(ko(x)?x.type.__asyncResolved||{}:C),{include:S,exclude:P,max:k}=e;if(S&&(!$||!ys(S,$))||P&&$&&ys(P,$))return s=x,_;const I=x.key==null?C:x.key,O=o.get(I);return x.el&&(x=Pr(x),_.shapeFlag&128&&(_.ssContent=x)),w=I,O?(x.el=O.el,x.component=O.component,x.transition&&Pi(x,x.transition),x.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),k&&i.size>parseInt(k,10)&&b(i.values().next().value)),x.shapeFlag|=256,s=x,b0(_.type)?_:x}}},$2=T2;function ys(e,t){return me(e)?e.some(r=>ys(r,t)):ft(e)?e.split(",").includes(t):e.test?e.test(t):!1}function S0(e,t){E0(e,"a",t)}function _0(e,t){E0(e,"da",t)}function E0(e,t,r=Ct){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(hc(t,n,r),r){let o=r.parent;for(;o&&o.parent;)fa(o.parent.vnode)&&P2(n,t,r,o),o=o.parent}}function P2(e,t,r,n){const o=hc(t,e,n,!0);pc(()=>{Od(n[t],o)},r)}function Gc(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Xc(e){return e.shapeFlag&128?e.ssContent:e}function hc(e,t,r=Ct,n=!1){if(r){const o=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(r.isUnmounted)return;jo(),Jn(r);const a=br(t,r,e,s);return Un(),Wo(),a});return n?o.unshift(i):o.push(i),i}}const pn=e=>(t,r=Ct)=>(!ki||e==="sp")&&hc(e,(...n)=>t(...n),r),oo=pn("bm"),Et=pn("m"),L2=pn("bu"),Vd=pn("u"),wt=pn("bum"),pc=pn("um"),k2=pn("sp"),I2=pn("rtg"),R2=pn("rtc");function O2(e,t=Ct){hc("ec",e,t)}function Wr(e,t){const r=Mt;if(r===null)return e;const n=bc(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,c=qe]=t[i];_e(s)&&(s={mounted:s,updated:s}),s.deep&&wo(a),o.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c})}return e}function Mr(e,t,r,n){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[n];l&&(jo(),br(l,r,8,[e.el,a,e,t]),Wo())}}const Kd="components",A2="directives";function B2(e,t){return qd(Kd,e,!0,t)||e}const T0=Symbol();function M2(e){return ft(e)?qd(Kd,e,!1)||e:e||T0}function SN(e){return qd(A2,e)}function qd(e,t,r=!0,n=!1){const o=Mt||Ct;if(o){const i=o.type;if(e===Kd){const a=Ml(i,!1);if(a&&(a===t||a===vr(t)||a===nc(vr(t))))return i}const s=kh(o[e]||i[e],t)||kh(o.appContext[e],t);return!s&&n?i:s}}function kh(e,t){return e&&(e[t]||e[vr(t)]||e[nc(vr(t))])}function _N(e,t,r,n){let o;const i=r&&r[n];if(me(e)||ft(e)){o=new Array(e.length);for(let s=0,a=e.length;s<a;s++)o[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,i&&i[s])}else if(rt(e))if(e[Symbol.iterator])o=Array.from(e,(s,a)=>t(s,a,void 0,i&&i[a]));else{const s=Object.keys(e);o=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];o[a]=t(e[c],c,a,i&&i[a])}}else o=[];return r&&(r[n]=o),o}function EN(e,t){for(let r=0;r<t.length;r++){const n=t[r];if(me(n))for(let o=0;o<n.length;o++)e[n[o].name]=n[o].fn;else n&&(e[n.name]=n.key?(...o)=>{const i=n.fn(...o);return i&&(i.key=n.key),i}:n.fn)}return e}function Gd(e,t,r={},n,o){if(Mt.isCE||Mt.parent&&ko(Mt.parent)&&Mt.parent.isCE)return Ue("slot",t==="default"?null:{name:t},n&&n());let i=e[t];i&&i._c&&(i._d=!1),an();const s=i&&$0(i(r)),a=Wn(Ge,{key:r.key||s&&s.key||`_${t}`},s||(n?n():[]),s&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function $0(e){return e.some(t=>Zn(t)?!(t.type===_t||t.type===Ge&&!$0(t.children)):!0)?e:null}function TN(e,t){const r={};for(const n in e)r[t&&/[A-Z]/.test(n)?`on:${n}`:bl(n)]=e[n];return r}const Ou=e=>e?F0(e)?bc(e)||e.proxy:Ou(e.parent):null,Rl=ht(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ou(e.parent),$root:e=>Ou(e.root),$emit:e=>e.emit,$options:e=>Xd(e),$forceUpdate:e=>e.f||(e.f=()=>uc(e.update)),$nextTick:e=>e.n||(e.n=Ht.bind(e.proxy)),$watch:e=>_2.bind(e)}),Au={get({_:e},t){const{ctx:r,setupState:n,data:o,props:i,accessCache:s,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return i[t]}else{if(n!==qe&&Me(n,t))return s[t]=1,n[t];if(o!==qe&&Me(o,t))return s[t]=2,o[t];if((c=e.propsOptions[0])&&Me(c,t))return s[t]=3,i[t];if(r!==qe&&Me(r,t))return s[t]=4,r[t];Bu&&(s[t]=0)}}const u=Rl[t];let d,f;if(u)return t==="$attrs"&&cr(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(r!==qe&&Me(r,t))return s[t]=4,r[t];if(f=l.config.globalProperties,Me(f,t))return f[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:i}=e;return o!==qe&&Me(o,t)?(o[t]=r,!0):n!==qe&&Me(n,t)?(n[t]=r,!0):Me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:i}},s){let a;return!!r[s]||e!==qe&&Me(e,s)||t!==qe&&Me(t,s)||(a=i[0])&&Me(a,s)||Me(n,s)||Me(Rl,s)||Me(o.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Me(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}},H2=ht({},Au,{get(e,t){if(t!==Symbol.unscopables)return Au.get(e,t,e)},has(e,t){return t[0]!=="_"&&!aw(t)}});let Bu=!0;function D2(e){const t=Xd(e),r=e.proxy,n=e.ctx;Bu=!1,t.beforeCreate&&Ih(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:b,deactivated:w,beforeDestroy:g,beforeUnmount:m,destroyed:_,unmounted:x,render:C,renderTracked:$,renderTriggered:S,errorCaptured:P,serverPrefetch:k,expose:I,inheritAttrs:O,components:R,directives:H,filters:B}=t;if(c&&z2(c,n,null,e.appContext.config.unwrapInjectedRef),s)for(const J in s){const se=s[J];_e(se)&&(n[J]=se.bind(r))}if(o){const J=o.call(r,r);rt(J)&&(e.data=Zt(J))}if(Bu=!0,i)for(const J in i){const se=i[J],ye=_e(se)?se.bind(r,r):_e(se.get)?se.get.bind(r,r):Tr,ke=!_e(se)&&_e(se.set)?se.set.bind(r):Tr,Te=q({get:ye,set:ke});Object.defineProperty(n,J,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Ae=>Te.value=Ae})}if(a)for(const J in a)P0(a[J],n,r,J);if(l){const J=_e(l)?l.call(r):l;Reflect.ownKeys(J).forEach(se=>{Ze(se,J[se])})}u&&Ih(u,e,"c");function G(J,se){me(se)?se.forEach(ye=>J(ye.bind(r))):se&&J(se.bind(r))}if(G(oo,d),G(Et,f),G(L2,h),G(Vd,p),G(S0,b),G(_0,w),G(O2,P),G(R2,$),G(I2,S),G(wt,m),G(pc,x),G(k2,k),me(I))if(I.length){const J=e.exposed||(e.exposed={});I.forEach(se=>{Object.defineProperty(J,se,{get:()=>r[se],set:ye=>r[se]=ye})})}else e.exposed||(e.exposed={});C&&e.render===Tr&&(e.render=C),O!=null&&(e.inheritAttrs=O),R&&(e.components=R),H&&(e.directives=H)}function z2(e,t,r=Tr,n=!1){me(e)&&(e=Mu(e));for(const o in e){const i=e[o];let s;rt(i)?"default"in i?s=Se(i.from||o,i.default,!0):s=Se(i.from||o):s=Se(i),vt(s)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[o]=s}}function Ih(e,t,r){br(me(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function P0(e,t,r,n){const o=n.includes(".")?y0(r,n):()=>r[n];if(ft(e)){const i=t[e];_e(i)&&tt(o,i)}else if(_e(e))tt(o,e.bind(r));else if(rt(e))if(me(e))e.forEach(i=>P0(i,t,r,n));else{const i=_e(e.handler)?e.handler.bind(r):t[e.handler];_e(i)&&tt(o,i,e)}}function Xd(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(c=>Ol(l,c,s,!0)),Ol(l,t,s)),rt(t)&&i.set(t,l),l}function Ol(e,t,r,n=!1){const{mixins:o,extends:i}=t;i&&Ol(e,i,r,!0),o&&o.forEach(s=>Ol(e,s,r,!0));for(const s in t)if(!(n&&s==="expose")){const a=F2[s]||r&&r[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const F2={data:Rh,props:mo,emits:mo,methods:mo,computed:mo,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:mo,directives:mo,watch:j2,provide:Rh,inject:N2};function Rh(e,t){return t?e?function(){return ht(_e(e)?e.call(this,this):e,_e(t)?t.call(this,this):t)}:t:e}function N2(e,t){return mo(Mu(e),Mu(t))}function Mu(e){if(me(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ft(e,t){return e?[...new Set([].concat(e,t))]:t}function mo(e,t){return e?ht(ht(Object.create(null),e),t):t}function j2(e,t){if(!e)return t;if(!t)return e;const r=ht(Object.create(null),e);for(const n in t)r[n]=Ft(e[n],t[n]);return r}function W2(e,t,r,n=!1){const o={},i={};Pl(i,gc,1),e.propsDefaults=Object.create(null),L0(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);r?e.props=n?o:Yw(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function U2(e,t,r,n){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=Ne(o),[l]=e.propsOptions;let c=!1;if((n||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(dc(e.emitsOptions,f))continue;const h=t[f];if(l)if(Me(i,f))h!==i[f]&&(i[f]=h,c=!0);else{const p=vr(f);o[p]=Hu(l,a,p,h,e,!1)}else h!==i[f]&&(i[f]=h,c=!0)}}}else{L0(e,t,o,i)&&(c=!0);let u;for(const d in a)(!t||!Me(t,d)&&((u=Nr(d))===d||!Me(t,u)))&&(l?r&&(r[d]!==void 0||r[u]!==void 0)&&(o[d]=Hu(l,a,d,void 0,e,!0)):delete o[d]);if(i!==a)for(const d in i)(!t||!Me(t,d)&&!0)&&(delete i[d],c=!0)}c&&cn(e,"set","$attrs")}function L0(e,t,r,n){const[o,i]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(Ss(l))continue;const c=t[l];let u;o&&Me(o,u=vr(l))?!i||!i.includes(u)?r[u]=c:(a||(a={}))[u]=c:dc(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,s=!0)}if(i){const l=Ne(r),c=a||qe;for(let u=0;u<i.length;u++){const d=i[u];r[d]=Hu(o,l,d,c[d],e,!Me(c,d))}}return s}function Hu(e,t,r,n,o,i){const s=e[r];if(s!=null){const a=Me(s,"default");if(a&&n===void 0){const l=s.default;if(s.type!==Function&&_e(l)){const{propsDefaults:c}=o;r in c?n=c[r]:(Jn(o),n=c[r]=l.call(null,t),Un())}else n=l}s[0]&&(i&&!a?n=!1:s[1]&&(n===""||n===Nr(r))&&(n=!0))}return n}function k0(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const i=e.props,s={},a=[];let l=!1;if(!_e(e)){const u=d=>{l=!0;const[f,h]=k0(d,t,!0);ht(s,f),h&&a.push(...h)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return rt(e)&&n.set(e,fi),fi;if(me(i))for(let u=0;u<i.length;u++){const d=vr(i[u]);Oh(d)&&(s[d]=qe)}else if(i)for(const u in i){const d=vr(u);if(Oh(d)){const f=i[u],h=s[d]=me(f)||_e(f)?{type:f}:f;if(h){const p=Mh(Boolean,h.type),b=Mh(String,h.type);h[0]=p>-1,h[1]=b<0||p<b,(p>-1||Me(h,"default"))&&a.push(d)}}}const c=[s,a];return rt(e)&&n.set(e,c),c}function Oh(e){return e[0]!=="$"}function Ah(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Bh(e,t){return Ah(e)===Ah(t)}function Mh(e,t){return me(t)?t.findIndex(r=>Bh(r,e)):_e(t)&&Bh(t,e)?0:-1}const I0=e=>e[0]==="_"||e==="$stable",Yd=e=>me(e)?e.map(nr):[nr(e)],V2=(e,t,r)=>{if(t._n)return t;const n=Sr((...o)=>Yd(t(...o)),r);return n._c=!1,n},R0=(e,t,r)=>{const n=e._ctx;for(const o in e){if(I0(o))continue;const i=e[o];if(_e(i))t[o]=V2(o,i,n);else if(i!=null){const s=Yd(i);t[o]=()=>s}}},O0=(e,t)=>{const r=Yd(t);e.slots.default=()=>r},K2=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=Ne(t),Pl(t,"_",r)):R0(t,e.slots={})}else e.slots={},t&&O0(e,t);Pl(e.slots,gc,1)},q2=(e,t,r)=>{const{vnode:n,slots:o}=e;let i=!0,s=qe;if(n.shapeFlag&32){const a=t._;a?r&&a===1?i=!1:(ht(o,t),!r&&a===1&&delete o._):(i=!t.$stable,R0(t,o)),s=t}else t&&(O0(e,t),s={default:1});if(i)for(const a in o)!I0(a)&&!(a in s)&&delete o[a]};function A0(){return{app:null,config:{isNativeTag:pw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let G2=0;function X2(e,t){return function(n,o=null){_e(n)||(n=Object.assign({},n)),o!=null&&!rt(o)&&(o=null);const i=A0(),s=new Set;let a=!1;const l=i.app={_uid:G2++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:pS,get config(){return i.config},set config(c){},use(c,...u){return s.has(c)||(c&&_e(c.install)?(s.add(c),c.install(l,...u)):_e(c)&&(s.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=Ue(n,o);return f.appContext=i,u&&t?t(f,c):e(f,c,d),a=!0,l._container=c,c.__vue_app__=l,bc(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Al(e,t,r,n,o=!1){if(me(e)){e.forEach((f,h)=>Al(f,t&&(me(t)?t[h]:t),r,n,o));return}if(ko(n)&&!o)return;const i=n.shapeFlag&4?bc(n.component)||n.component.proxy:n.el,s=o?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===qe?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,Me(d,c)&&(d[c]=null)):vt(c)&&(c.value=null)),_e(l))sn(l,a,12,[s,u]);else{const f=ft(l),h=vt(l);if(f||h){const p=()=>{if(e.f){const b=f?Me(d,l)?d[l]:u[l]:l.value;o?me(b)&&Od(b,i):me(b)?b.includes(i)||b.push(i):f?(u[l]=[i],Me(d,l)&&(d[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else f?(u[l]=s,Me(d,l)&&(d[l]=s)):h&&(l.value=s,e.k&&(u[e.k]=s))};s?(p.id=-1,Tt(p,r)):p()}}}let Cn=!1;const Fa=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Na=e=>e.nodeType===8;function Y2(e){const{mt:t,p:r,o:{patchProp:n,createText:o,nextSibling:i,parentNode:s,remove:a,insert:l,createComment:c}}=e,u=(g,m)=>{if(!m.hasChildNodes()){r(null,g,m),Il(),m._vnode=g;return}Cn=!1,d(m.firstChild,g,null,null,null),Il(),m._vnode=g,Cn&&console.error("Hydration completed but contains mismatches.")},d=(g,m,_,x,C,$=!1)=>{const S=Na(g)&&g.data==="[",P=()=>b(g,m,_,x,C,S),{type:k,ref:I,shapeFlag:O,patchFlag:R}=m;let H=g.nodeType;m.el=g,R===-2&&($=!1,m.dynamicChildren=null);let B=null;switch(k){case Li:H!==3?m.children===""?(l(m.el=o(""),s(g),g),B=g):B=P():(g.data!==m.children&&(Cn=!0,g.data=m.children),B=i(g));break;case _t:H!==8||S?B=P():B=i(g);break;case vi:if(S&&(g=i(g),H=g.nodeType),H===1||H===3){B=g;const Z=!m.children.length;for(let G=0;G<m.staticCount;G++)Z&&(m.children+=B.nodeType===1?B.outerHTML:B.data),G===m.staticCount-1&&(m.anchor=B),B=i(B);return S?i(B):B}else P();break;case Ge:S?B=p(g,m,_,x,C,$):B=P();break;default:if(O&1)H!==1||m.type.toLowerCase()!==g.tagName.toLowerCase()?B=P():B=f(g,m,_,x,C,$);else if(O&6){m.slotScopeIds=C;const Z=s(g);if(t(m,Z,null,_,x,Fa(Z),$),B=S?w(g):i(g),B&&Na(B)&&B.data==="teleport end"&&(B=i(B)),ko(m)){let G;S?(G=Ue(Ge),G.anchor=B?B.previousSibling:Z.lastChild):G=g.nodeType===3?Mo(""):Ue("div"),G.el=g,m.component.subTree=G}}else O&64?H!==8?B=P():B=m.type.hydrate(g,m,_,x,C,$,e,h):O&128&&(B=m.type.hydrate(g,m,_,x,Fa(s(g)),C,$,e,d))}return I!=null&&Al(I,null,x,m),B},f=(g,m,_,x,C,$)=>{$=$||!!m.dynamicChildren;const{type:S,props:P,patchFlag:k,shapeFlag:I,dirs:O}=m,R=S==="input"&&O||S==="option";if(R||k!==-1){if(O&&Mr(m,null,_,"created"),P)if(R||!$||k&48)for(const B in P)(R&&B.endsWith("value")||ca(B)&&!Ss(B))&&n(g,B,null,P[B],!1,void 0,_);else P.onClick&&n(g,"onClick",null,P.onClick,!1,void 0,_);let H;if((H=P&&P.onVnodeBeforeMount)&&Gt(H,_,m),O&&Mr(m,null,_,"beforeMount"),((H=P&&P.onVnodeMounted)||O)&&v0(()=>{H&&Gt(H,_,m),O&&Mr(m,null,_,"mounted")},x),I&16&&!(P&&(P.innerHTML||P.textContent))){let B=h(g.firstChild,m,g,_,x,C,$);for(;B;){Cn=!0;const Z=B;B=B.nextSibling,a(Z)}}else I&8&&g.textContent!==m.children&&(Cn=!0,g.textContent=m.children)}return g.nextSibling},h=(g,m,_,x,C,$,S)=>{S=S||!!m.dynamicChildren;const P=m.children,k=P.length;for(let I=0;I<k;I++){const O=S?P[I]:P[I]=nr(P[I]);if(g)g=d(g,O,x,C,$,S);else{if(O.type===Li&&!O.children)continue;Cn=!0,r(null,O,_,null,x,C,Fa(_),$)}}return g},p=(g,m,_,x,C,$)=>{const{slotScopeIds:S}=m;S&&(C=C?C.concat(S):S);const P=s(g),k=h(i(g),m,P,_,x,C,$);return k&&Na(k)&&k.data==="]"?i(m.anchor=k):(Cn=!0,l(m.anchor=c("]"),P,k),k)},b=(g,m,_,x,C,$)=>{if(Cn=!0,m.el=null,$){const k=w(g);for(;;){const I=i(g);if(I&&I!==k)a(I);else break}}const S=i(g),P=s(g);return a(g),r(null,m,P,S,_,x,Fa(P),C),S},w=g=>{let m=0;for(;g;)if(g=i(g),g&&Na(g)&&(g.data==="["&&m++,g.data==="]")){if(m===0)return i(g);m--}return g};return[u,d]}const Tt=v0;function Z2(e){return B0(e)}function J2(e){return B0(e,Y2)}function B0(e,t){const r=xw();r.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Tr,insertStaticContent:p}=e,b=(T,v,y,L=null,A=null,D=null,K=!1,Y=null,V=!!v.dynamicChildren)=>{if(T===v)return;T&&!Dr(T,v)&&(L=te(T),Ae(T,A,D,!0),T=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:F,ref:M,shapeFlag:z}=v;switch(F){case Li:w(T,v,y,L);break;case _t:g(T,v,y,L);break;case vi:T==null&&m(v,y,L,K);break;case Ge:R(T,v,y,L,A,D,K,Y,V);break;default:z&1?C(T,v,y,L,A,D,K,Y,V):z&6?H(T,v,y,L,A,D,K,Y,V):(z&64||z&128)&&F.process(T,v,y,L,A,D,K,Y,V,ae)}M!=null&&A&&Al(M,T&&T.ref,D,v||T,!v)},w=(T,v,y,L)=>{if(T==null)n(v.el=a(v.children),y,L);else{const A=v.el=T.el;v.children!==T.children&&c(A,v.children)}},g=(T,v,y,L)=>{T==null?n(v.el=l(v.children||""),y,L):v.el=T.el},m=(T,v,y,L)=>{[T.el,T.anchor]=p(T.children,v,y,L,T.el,T.anchor)},_=({el:T,anchor:v},y,L)=>{let A;for(;T&&T!==v;)A=f(T),n(T,y,L),T=A;n(v,y,L)},x=({el:T,anchor:v})=>{let y;for(;T&&T!==v;)y=f(T),o(T),T=y;o(v)},C=(T,v,y,L,A,D,K,Y,V)=>{K=K||v.type==="svg",T==null?$(v,y,L,A,D,K,Y,V):k(T,v,A,D,K,Y,V)},$=(T,v,y,L,A,D,K,Y)=>{let V,F;const{type:M,props:z,shapeFlag:ce,transition:pe,dirs:Pe}=T;if(V=T.el=s(T.type,D,z&&z.is,z),ce&8?u(V,T.children):ce&16&&P(T.children,V,null,L,A,D&&M!=="foreignObject",K,Y),Pe&&Mr(T,null,L,"created"),z){for(const Oe in z)Oe!=="value"&&!Ss(Oe)&&i(V,Oe,null,z[Oe],D,T.children,L,A,Q);"value"in z&&i(V,"value",null,z.value),(F=z.onVnodeBeforeMount)&&Gt(F,L,T)}S(V,T,T.scopeId,K,L),Pe&&Mr(T,null,L,"beforeMount");const He=(!A||A&&!A.pendingBranch)&&pe&&!pe.persisted;He&&pe.beforeEnter(V),n(V,v,y),((F=z&&z.onVnodeMounted)||He||Pe)&&Tt(()=>{F&&Gt(F,L,T),He&&pe.enter(V),Pe&&Mr(T,null,L,"mounted")},A)},S=(T,v,y,L,A)=>{if(y&&h(T,y),L)for(let D=0;D<L.length;D++)h(T,L[D]);if(A){let D=A.subTree;if(v===D){const K=A.vnode;S(T,K,K.scopeId,K.slotScopeIds,A.parent)}}},P=(T,v,y,L,A,D,K,Y,V=0)=>{for(let F=V;F<T.length;F++){const M=T[F]=Y?Mn(T[F]):nr(T[F]);b(null,M,v,y,L,A,D,K,Y)}},k=(T,v,y,L,A,D,K)=>{const Y=v.el=T.el;let{patchFlag:V,dynamicChildren:F,dirs:M}=v;V|=T.patchFlag&16;const z=T.props||qe,ce=v.props||qe;let pe;y&&ho(y,!1),(pe=ce.onVnodeBeforeUpdate)&&Gt(pe,y,v,T),M&&Mr(v,T,y,"beforeUpdate"),y&&ho(y,!0);const Pe=A&&v.type!=="foreignObject";if(F?I(T.dynamicChildren,F,Y,y,L,Pe,D):K||se(T,v,Y,null,y,L,Pe,D,!1),V>0){if(V&16)O(Y,v,z,ce,y,L,A);else if(V&2&&z.class!==ce.class&&i(Y,"class",null,ce.class,A),V&4&&i(Y,"style",z.style,ce.style,A),V&8){const He=v.dynamicProps;for(let Oe=0;Oe<He.length;Oe++){const lt=He[Oe],Rt=z[lt],Ir=ce[lt];(Ir!==Rt||lt==="value")&&i(Y,lt,Rt,Ir,A,T.children,y,L,Q)}}V&1&&T.children!==v.children&&u(Y,v.children)}else!K&&F==null&&O(Y,v,z,ce,y,L,A);((pe=ce.onVnodeUpdated)||M)&&Tt(()=>{pe&&Gt(pe,y,v,T),M&&Mr(v,T,y,"updated")},L)},I=(T,v,y,L,A,D,K)=>{for(let Y=0;Y<v.length;Y++){const V=T[Y],F=v[Y],M=V.el&&(V.type===Ge||!Dr(V,F)||V.shapeFlag&70)?d(V.el):y;b(V,F,M,null,L,A,D,K,!0)}},O=(T,v,y,L,A,D,K)=>{if(y!==L){if(y!==qe)for(const Y in y)!Ss(Y)&&!(Y in L)&&i(T,Y,y[Y],null,K,v.children,A,D,Q);for(const Y in L){if(Ss(Y))continue;const V=L[Y],F=y[Y];V!==F&&Y!=="value"&&i(T,Y,F,V,K,v.children,A,D,Q)}"value"in L&&i(T,"value",y.value,L.value)}},R=(T,v,y,L,A,D,K,Y,V)=>{const F=v.el=T?T.el:a(""),M=v.anchor=T?T.anchor:a("");let{patchFlag:z,dynamicChildren:ce,slotScopeIds:pe}=v;pe&&(Y=Y?Y.concat(pe):pe),T==null?(n(F,y,L),n(M,y,L),P(v.children,y,M,A,D,K,Y,V)):z>0&&z&64&&ce&&T.dynamicChildren?(I(T.dynamicChildren,ce,y,A,D,K,Y),(v.key!=null||A&&v===A.subTree)&&Zd(T,v,!0)):se(T,v,y,M,A,D,K,Y,V)},H=(T,v,y,L,A,D,K,Y,V)=>{v.slotScopeIds=Y,T==null?v.shapeFlag&512?A.ctx.activate(v,y,L,K,V):B(v,y,L,A,D,K,V):Z(T,v,V)},B=(T,v,y,L,A,D,K)=>{const Y=T.component=z0(T,L,A);if(fa(T)&&(Y.ctx.renderer=ae),N0(Y),Y.asyncDep){if(A&&A.registerDep(Y,G),!T.el){const V=Y.subTree=Ue(_t);g(null,V,v,y)}return}G(Y,T,v,y,A,D,K)},Z=(T,v,y)=>{const L=v.component=T.component;if(b2(T,v,y))if(L.asyncDep&&!L.asyncResolved){J(L,v,y);return}else L.next=v,u2(L.update),L.update();else v.el=T.el,L.vnode=v},G=(T,v,y,L,A,D,K)=>{const Y=()=>{if(T.isMounted){let{next:M,bu:z,u:ce,parent:pe,vnode:Pe}=T,He=M,Oe;ho(T,!1),M?(M.el=Pe.el,J(T,M,K)):M=Pe,z&&pi(z),(Oe=M.props&&M.props.onVnodeBeforeUpdate)&&Gt(Oe,pe,M,Pe),ho(T,!0);const lt=vl(T),Rt=T.subTree;T.subTree=lt,b(Rt,lt,d(Rt.el),te(Rt),T,A,D),M.el=lt.el,He===null&&jd(T,lt.el),ce&&Tt(ce,A),(Oe=M.props&&M.props.onVnodeUpdated)&&Tt(()=>Gt(Oe,pe,M,Pe),A)}else{let M;const{el:z,props:ce}=v,{bm:pe,m:Pe,parent:He}=T,Oe=ko(v);if(ho(T,!1),pe&&pi(pe),!Oe&&(M=ce&&ce.onVnodeBeforeMount)&&Gt(M,He,v),ho(T,!0),z&&ve){const lt=()=>{T.subTree=vl(T),ve(z,T.subTree,T,A,null)};Oe?v.type.__asyncLoader().then(()=>!T.isUnmounted&&lt()):lt()}else{const lt=T.subTree=vl(T);b(null,lt,y,L,T,A,D),v.el=lt.el}if(Pe&&Tt(Pe,A),!Oe&&(M=ce&&ce.onVnodeMounted)){const lt=v;Tt(()=>Gt(M,He,lt),A)}(v.shapeFlag&256||He&&ko(He.vnode)&&He.vnode.shapeFlag&256)&&T.a&&Tt(T.a,A),T.isMounted=!0,v=y=L=null}},V=T.effect=new oc(Y,()=>uc(F),T.scope),F=T.update=()=>V.run();F.id=T.uid,ho(T,!0),F()},J=(T,v,y)=>{v.component=T;const L=T.vnode.props;T.vnode=v,T.next=null,U2(T,v.props,L,y),q2(T,v.children,y),jo(),Eh(),Wo()},se=(T,v,y,L,A,D,K,Y,V=!1)=>{const F=T&&T.children,M=T?T.shapeFlag:0,z=v.children,{patchFlag:ce,shapeFlag:pe}=v;if(ce>0){if(ce&128){ke(F,z,y,L,A,D,K,Y,V);return}else if(ce&256){ye(F,z,y,L,A,D,K,Y,V);return}}pe&8?(M&16&&Q(F,A,D),z!==F&&u(y,z)):M&16?pe&16?ke(F,z,y,L,A,D,K,Y,V):Q(F,A,D,!0):(M&8&&u(y,""),pe&16&&P(z,y,L,A,D,K,Y,V))},ye=(T,v,y,L,A,D,K,Y,V)=>{T=T||fi,v=v||fi;const F=T.length,M=v.length,z=Math.min(F,M);let ce;for(ce=0;ce<z;ce++){const pe=v[ce]=V?Mn(v[ce]):nr(v[ce]);b(T[ce],pe,y,null,A,D,K,Y,V)}F>M?Q(T,A,D,!0,!1,z):P(v,y,L,A,D,K,Y,V,z)},ke=(T,v,y,L,A,D,K,Y,V)=>{let F=0;const M=v.length;let z=T.length-1,ce=M-1;for(;F<=z&&F<=ce;){const pe=T[F],Pe=v[F]=V?Mn(v[F]):nr(v[F]);if(Dr(pe,Pe))b(pe,Pe,y,null,A,D,K,Y,V);else break;F++}for(;F<=z&&F<=ce;){const pe=T[z],Pe=v[ce]=V?Mn(v[ce]):nr(v[ce]);if(Dr(pe,Pe))b(pe,Pe,y,null,A,D,K,Y,V);else break;z--,ce--}if(F>z){if(F<=ce){const pe=ce+1,Pe=pe<M?v[pe].el:L;for(;F<=ce;)b(null,v[F]=V?Mn(v[F]):nr(v[F]),y,Pe,A,D,K,Y,V),F++}}else if(F>ce)for(;F<=z;)Ae(T[F],A,D,!0),F++;else{const pe=F,Pe=F,He=new Map;for(F=Pe;F<=ce;F++){const Ut=v[F]=V?Mn(v[F]):nr(v[F]);Ut.key!=null&&He.set(Ut.key,F)}let Oe,lt=0;const Rt=ce-Pe+1;let Ir=!1,Oa=0;const yn=new Array(Rt);for(F=0;F<Rt;F++)yn[F]=0;for(F=pe;F<=z;F++){const Ut=T[F];if(lt>=Rt){Ae(Ut,A,D,!0);continue}let ee;if(Ut.key!=null)ee=He.get(Ut.key);else for(Oe=Pe;Oe<=ce;Oe++)if(yn[Oe-Pe]===0&&Dr(Ut,v[Oe])){ee=Oe;break}ee===void 0?Ae(Ut,A,D,!0):(yn[ee-Pe]=F+1,ee>=Oa?Oa=ee:Ir=!0,b(Ut,v[ee],y,null,A,D,K,Y,V),lt++)}const Gr=Ir?Q2(yn):fi;for(Oe=Gr.length-1,F=Rt-1;F>=0;F--){const Ut=Pe+F,ee=v[Ut],ge=Ut+1<M?v[Ut+1].el:L;yn[F]===0?b(null,ee,y,ge,A,D,K,Y,V):Ir&&(Oe<0||F!==Gr[Oe]?Te(ee,y,ge,2):Oe--)}}},Te=(T,v,y,L,A=null)=>{const{el:D,type:K,transition:Y,children:V,shapeFlag:F}=T;if(F&6){Te(T.component.subTree,v,y,L);return}if(F&128){T.suspense.move(v,y,L);return}if(F&64){K.move(T,v,y,ae);return}if(K===Ge){n(D,v,y);for(let z=0;z<V.length;z++)Te(V[z],v,y,L);n(T.anchor,v,y);return}if(K===vi){_(T,v,y);return}if(L!==2&&F&1&&Y)if(L===0)Y.beforeEnter(D),n(D,v,y),Tt(()=>Y.enter(D),A);else{const{leave:z,delayLeave:ce,afterLeave:pe}=Y,Pe=()=>n(D,v,y),He=()=>{z(D,()=>{Pe(),pe&&pe()})};ce?ce(D,Pe,He):He()}else n(D,v,y)},Ae=(T,v,y,L=!1,A=!1)=>{const{type:D,props:K,ref:Y,children:V,dynamicChildren:F,shapeFlag:M,patchFlag:z,dirs:ce}=T;if(Y!=null&&Al(Y,null,y,T,!0),M&256){v.ctx.deactivate(T);return}const pe=M&1&&ce,Pe=!ko(T);let He;if(Pe&&(He=K&&K.onVnodeBeforeUnmount)&&Gt(He,v,T),M&6)j(T.component,y,L);else{if(M&128){T.suspense.unmount(y,L);return}pe&&Mr(T,null,v,"beforeUnmount"),M&64?T.type.remove(T,v,y,A,ae,L):F&&(D!==Ge||z>0&&z&64)?Q(F,v,y,!1,!0):(D===Ge&&z&384||!A&&M&16)&&Q(V,v,y),L&&ut(T)}(Pe&&(He=K&&K.onVnodeUnmounted)||pe)&&Tt(()=>{He&&Gt(He,v,T),pe&&Mr(T,null,v,"unmounted")},y)},ut=T=>{const{type:v,el:y,anchor:L,transition:A}=T;if(v===Ge){Ve(y,L);return}if(v===vi){x(T);return}const D=()=>{o(y),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(T.shapeFlag&1&&A&&!A.persisted){const{leave:K,delayLeave:Y}=A,V=()=>K(y,D);Y?Y(T.el,D,V):V()}else D()},Ve=(T,v)=>{let y;for(;T!==v;)y=f(T),o(T),T=y;o(v)},j=(T,v,y)=>{const{bum:L,scope:A,update:D,subTree:K,um:Y}=T;L&&pi(L),A.stop(),D&&(D.active=!1,Ae(K,T,v,y)),Y&&Tt(Y,v),Tt(()=>{T.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Q=(T,v,y,L=!1,A=!1,D=0)=>{for(let K=D;K<T.length;K++)Ae(T[K],v,y,L,A)},te=T=>T.shapeFlag&6?te(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),de=(T,v,y)=>{T==null?v._vnode&&Ae(v._vnode,null,null,!0):b(v._vnode||null,T,v,null,null,null,y),Eh(),Il(),v._vnode=T},ae={p:b,um:Ae,m:Te,r:ut,mt:B,mc:P,pc:se,pbc:I,n:te,o:e};let $e,ve;return t&&([$e,ve]=t(ae)),{render:de,hydrate:$e,createApp:X2(de,$e)}}function ho({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function Zd(e,t,r=!1){const n=e.children,o=t.children;if(me(n)&&me(o))for(let i=0;i<n.length;i++){const s=n[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Mn(o[i]),a.el=s.el),r||Zd(s,a))}}function Q2(e){const t=e.slice(),r=[0];let n,o,i,s,a;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(o=r[r.length-1],e[o]<c){t[n]=o,r.push(n);continue}for(i=0,s=r.length-1;i<s;)a=i+s>>1,e[r[a]]<c?i=a+1:s=a;c<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=t[s];return r}const eS=e=>e.__isTeleport,Es=e=>e&&(e.disabled||e.disabled===""),Hh=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Du=(e,t)=>{const r=e&&e.to;return ft(r)?t?t(r):null:r},tS={__isTeleport:!0,process(e,t,r,n,o,i,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:b,createComment:w}}=c,g=Es(t.props);let{shapeFlag:m,children:_,dynamicChildren:x}=t;if(e==null){const C=t.el=b(""),$=t.anchor=b("");h(C,r,n),h($,r,n);const S=t.target=Du(t.props,p),P=t.targetAnchor=b("");S&&(h(P,S),s=s||Hh(S));const k=(I,O)=>{m&16&&u(_,I,O,o,i,s,a,l)};g?k(r,$):S&&k(S,P)}else{t.el=e.el;const C=t.anchor=e.anchor,$=t.target=e.target,S=t.targetAnchor=e.targetAnchor,P=Es(e.props),k=P?r:$,I=P?C:S;if(s=s||Hh($),x?(f(e.dynamicChildren,x,k,o,i,s,a),Zd(e,t,!0)):l||d(e,t,k,I,o,i,s,a,!1),g)P||ja(t,r,C,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const O=t.target=Du(t.props,p);O&&ja(t,O,null,c,0)}else P&&ja(t,$,S,c,1)}},remove(e,t,r,n,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=e;if(d&&i(u),(s||!Es(f))&&(i(c),a&16))for(let h=0;h<l.length;h++){const p=l[h];o(p,t,r,!0,!!p.dynamicChildren)}},move:ja,hydrate:rS};function ja(e,t,r,{o:{insert:n},m:o},i=2){i===0&&n(e.targetAnchor,t,r);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=e,d=i===2;if(d&&n(s,t,r),(!d||Es(u))&&l&16)for(let f=0;f<c.length;f++)o(c[f],t,r,2);d&&n(a,t,r)}function rS(e,t,r,n,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const u=t.target=Du(t.props,l);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Es(t.props))t.anchor=c(s(e),t,a(e),r,n,o,i),t.targetAnchor=d;else{t.anchor=s(e);let f=d;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&s(t.targetAnchor);break}c(d,t,u,r,n,o,i)}}return t.anchor&&s(t.anchor)}const ha=tS,Ge=Symbol(void 0),Li=Symbol(void 0),_t=Symbol(void 0),vi=Symbol(void 0),Ts=[];let Xt=null;function an(e=!1){Ts.push(Xt=e?null:[])}function M0(){Ts.pop(),Xt=Ts[Ts.length-1]||null}let Bo=1;function Dh(e){Bo+=e}function H0(e){return e.dynamicChildren=Bo>0?Xt||fi:null,M0(),Bo>0&&Xt&&Xt.push(e),e}function $N(e,t,r,n,o,i){return H0($s(e,t,r,n,o,i,!0))}function Wn(e,t,r,n,o){return H0(Ue(e,t,r,n,o,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function Dr(e,t){return e.type===t.type&&e.key===t.key}function PN(e){}const gc="__vInternal",D0=({key:e})=>e!=null?e:null,yl=({ref:e,ref_key:t,ref_for:r})=>e!=null?ft(e)||vt(e)||_e(e)?{i:Mt,r:e,k:t,f:!!r}:e:null;function $s(e,t=null,r=null,n=0,o=null,i=e===Ge?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&D0(t),ref:t&&yl(t),scopeId:fc,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Jd(l,r),i&128&&e.normalize(l)):r&&(l.shapeFlag|=ft(r)?8:16),Bo>0&&!s&&Xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Xt.push(l),l}const Ue=nS;function nS(e,t=null,r=null,n=0,o=null,i=!1){if((!e||e===T0)&&(e=_t),Zn(e)){const a=Pr(e,t,!0);return r&&Jd(a,r),Bo>0&&!i&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(e)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(dS(e)&&(e=e.__vccOpts),t){t=oS(t);let{class:a,style:l}=t;a&&!ft(a)&&(t.class=ec(a)),rt(l)&&(a0(l)&&!me(l)&&(l=ht({},l)),t.style=qi(l))}const s=ft(e)?1:b0(e)?128:eS(e)?64:rt(e)?4:_e(e)?2:0;return $s(e,t,r,n,o,s,i,!0)}function oS(e){return e?a0(e)||gc in e?ht({},e):e:null}function Pr(e,t,r=!1){const{props:n,ref:o,patchFlag:i,children:s}=e,a=t?mc(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&D0(a),ref:t&&t.ref?r&&o?me(o)?o.concat(yl(t)):[o,yl(t)]:yl(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pr(e.ssContent),ssFallback:e.ssFallback&&Pr(e.ssFallback),el:e.el,anchor:e.anchor}}function Mo(e=" ",t=0){return Ue(Li,null,e,t)}function LN(e,t){const r=Ue(vi,null,e);return r.staticCount=t,r}function kN(e="",t=!1){return t?(an(),Wn(_t,null,e)):Ue(_t,null,e)}function nr(e){return e==null||typeof e=="boolean"?Ue(_t):me(e)?Ue(Ge,null,e.slice()):typeof e=="object"?Mn(e):Ue(Li,null,String(e))}function Mn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pr(e)}function Jd(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(me(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Jd(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(gc in t)?t._ctx=Mt:o===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _e(t)?(t={default:t,_ctx:Mt},r=32):(t=String(t),n&64?(r=16,t=[Mo(t)]):r=8);e.children=t,e.shapeFlag|=r}function mc(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=ec([t.class,n.class]));else if(o==="style")t.style=qi([t.style,n.style]);else if(ca(o)){const i=t[o],s=n[o];s&&i!==s&&!(me(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=n[o])}return t}function Gt(e,t,r,n=null){br(e,t,7,[r,n])}const iS=A0();let sS=0;function z0(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||iS,i={uid:sS++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new qm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:k0(n,o),emitsOptions:m0(n,o),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:n.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=h2.bind(null,i),e.ce&&e.ce(i),i}let Ct=null;const zt=()=>Ct||Mt,Jn=e=>{Ct=e,e.scope.on()},Un=()=>{Ct&&Ct.scope.off(),Ct=null};function F0(e){return e.vnode.shapeFlag&4}let ki=!1;function N0(e,t=!1){ki=t;const{props:r,children:n}=e.vnode,o=F0(e);W2(e,r,o,t),K2(e,n);const i=o?aS(e,t):void 0;return ki=!1,i}function aS(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=kl(new Proxy(e.ctx,Au));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?W0(e):null;Jn(e),jo();const i=sn(n,e,0,[e.props,o]);if(Wo(),Un(),Ad(i)){if(i.then(Un,Un),t)return i.then(s=>{zu(e,s,t)}).catch(s=>{Gi(s,e,0)});e.asyncDep=i}else zu(e,i,t)}else j0(e,t)}function zu(e,t,r){_e(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:rt(t)&&(e.setupState=c0(t)),j0(e,r)}let Bl,Fu;function IN(e){Bl=e,Fu=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,H2))}}const RN=()=>!Bl;function j0(e,t,r){const n=e.type;if(!e.render){if(!t&&Bl&&!n.render){const o=n.template||Xd(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,c=ht(ht({isCustomElement:i,delimiters:a},s),l);n.render=Bl(o,c)}}e.render=n.render||Tr,Fu&&Fu(e)}Jn(e),jo(),D2(e),Wo(),Un()}function lS(e){return new Proxy(e.attrs,{get(t,r){return cr(e,"get","$attrs"),t[r]}})}function W0(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=lS(e))},slots:e.slots,emit:e.emit,expose:t}}function bc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(c0(kl(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Rl)return Rl[r](e)}}))}const cS=/(?:^|[-_])(\w)/g,uS=e=>e.replace(cS,t=>t.toUpperCase()).replace(/[-_]/g,"");function Ml(e,t=!0){return _e(e)?e.displayName||e.name:e.name||t&&e.__name}function U0(e,t,r=!1){let n=Ml(t);if(!n&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(n=o[1])}if(!n&&e&&e.parent){const o=i=>{for(const s in i)if(i[s]===t)return s};n=o(e.components||e.parent.type.components)||o(e.appContext.components)}return n?uS(n):r?"App":"Anonymous"}function dS(e){return _e(e)&&"__vccOpts"in e}const q=(e,t)=>r2(e,t,ki);function ON(){return null}function AN(){return null}function BN(e){}function MN(e,t){return null}function HN(){return V0().slots}function DN(){return V0().attrs}function V0(){const e=zt();return e.setupContext||(e.setupContext=W0(e))}function zN(e,t){const r=me(e)?e.reduce((n,o)=>(n[o]={},n),{}):e;for(const n in t){const o=r[n];o?me(o)||_e(o)?r[n]={type:o,default:t[n]}:o.default=t[n]:o===null&&(r[n]={default:t[n]})}return r}function FN(e,t){const r={};for(const n in e)t.includes(n)||Object.defineProperty(r,n,{enumerable:!0,get:()=>e[n]});return r}function NN(e){const t=zt();let r=e();return Un(),Ad(r)&&(r=r.catch(n=>{throw Jn(t),n})),[r,()=>Jn(t)]}function E(e,t,r){const n=arguments.length;return n===2?rt(t)&&!me(t)?Zn(t)?Ue(e,null,[t]):Ue(e,t):Ue(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Zn(r)&&(r=[r]),Ue(e,t,r))}const fS=Symbol(""),jN=()=>{{const e=Se(fS);return e||n2("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function WN(){}function UN(e,t,r,n){const o=r[n];if(o&&hS(o,e))return o;const i=t();return i.memo=e.slice(),r[n]=i}function hS(e,t){const r=e.memo;if(r.length!=t.length)return!1;for(let n=0;n<r.length;n++)if(Ti(r[n],t[n]))return!1;return Bo>0&&Xt&&Xt.push(e),!0}const pS="3.2.41",gS={createComponentInstance:z0,setupComponent:N0,renderComponentRoot:vl,setCurrentRenderingInstance:Vs,isVNode:Zn,normalizeVNode:nr},VN=gS,KN=null,qN=null,mS="http://www.w3.org/2000/svg",yo=typeof document<"u"?document:null,zh=yo&&yo.createElement("template"),bS={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?yo.createElementNS(mS,e):yo.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>yo.createTextNode(e),createComment:e=>yo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,i){const s=r?r.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{zh.innerHTML=n?`<svg>${e}</svg>`:e;const a=zh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function vS(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function yS(e,t,r){const n=e.style,o=ft(r);if(r&&!o){for(const i in r)Nu(n,i,r[i]);if(t&&!ft(t))for(const i in t)r[i]==null&&Nu(n,i,"")}else{const i=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=i)}}const Fh=/\s*!important$/;function Nu(e,t,r){if(me(r))r.forEach(n=>Nu(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=xS(e,t);Fh.test(r)?e.setProperty(Nr(n),r.replace(Fh,""),"important"):e[n]=r}}const Nh=["Webkit","Moz","ms"],Yc={};function xS(e,t){const r=Yc[t];if(r)return r;let n=vr(t);if(n!=="filter"&&n in e)return Yc[t]=n;n=nc(n);for(let o=0;o<Nh.length;o++){const i=Nh[o]+n;if(i in e)return Yc[t]=i}return t}const jh="http://www.w3.org/1999/xlink";function CS(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(jh,t.slice(6,t.length)):e.setAttributeNS(jh,t,r);else{const i=cw(t);r==null||i&&!Wm(r)?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}function wS(e,t,r,n,o,i,s){if(t==="innerHTML"||t==="textContent"){n&&s(n,o,i),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=Wm(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function nn(e,t,r,n){e.addEventListener(t,r,n)}function SS(e,t,r,n){e.removeEventListener(t,r,n)}function _S(e,t,r,n,o=null){const i=e._vei||(e._vei={}),s=i[t];if(n&&s)s.value=n;else{const[a,l]=ES(t);if(n){const c=i[t]=PS(n,o);nn(e,a,c,l)}else s&&(SS(e,a,s,l),i[t]=void 0)}}const Wh=/(?:Once|Passive|Capture)$/;function ES(e){let t;if(Wh.test(e)){t={};let n;for(;n=e.match(Wh);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nr(e.slice(2)),t]}let Zc=0;const TS=Promise.resolve(),$S=()=>Zc||(TS.then(()=>Zc=0),Zc=Date.now());function PS(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;br(LS(n,r.value),t,5,[n])};return r.value=e,r.attached=$S(),r}function LS(e,t){if(me(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Uh=/^on[a-z]/,kS=(e,t,r,n,o=!1,i,s,a,l)=>{t==="class"?vS(e,n,o):t==="style"?yS(e,r,n):ca(t)?Rd(t)||_S(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):IS(e,t,n,o))?wS(e,t,n,i,s,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),CS(e,t,n,o))};function IS(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&Uh.test(t)&&_e(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Uh.test(t)&&ft(r)?!1:t in e}function RS(e,t){const r=be(e);class n extends Qd{constructor(i){super(r,i,t)}}return n.def=r,n}const GN=e=>RS(e,ZS),OS=typeof HTMLElement<"u"?HTMLElement:class{};class Qd extends OS{constructor(t,r={},n){super(),this._def=t,this._props=r,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Ht(()=>{this._connected||(tp(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver(n=>{for(const o of n)this._setAttr(o.attributeName)}).observe(this,{attributes:!0});const t=n=>{const{props:o,styles:i}=n,s=!me(o),a=o?s?Object.keys(o):o:[];let l;if(s)for(const c in this._props){const u=o[c];(u===Number||u&&u.type===Number)&&(this._props[c]=Xn(this._props[c]),(l||(l=Object.create(null)))[c]=!0)}this._numberProps=l;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of a.map(vr))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(u){this._setProp(c,u)}});this._applyStyles(i),this._update()},r=this._def.__asyncLoader;r?r().then(t):t(this._def)}_setAttr(t){let r=this.getAttribute(t);this._numberProps&&this._numberProps[t]&&(r=Xn(r)),this._setProp(vr(t),r,!1)}_getProp(t){return this._props[t]}_setProp(t,r,n=!0,o=!0){r!==this._props[t]&&(this._props[t]=r,o&&this._instance&&this._update(),n&&(r===!0?this.setAttribute(Nr(t),""):typeof r=="string"||typeof r=="number"?this.setAttribute(Nr(t),r+""):r||this.removeAttribute(Nr(t))))}_update(){tp(this._createVNode(),this.shadowRoot)}_createVNode(){const t=Ue(this._def,ht({},this._props));return this._instance||(t.ce=r=>{this._instance=r,r.isCE=!0,r.emit=(o,...i)=>{this.dispatchEvent(new CustomEvent(o,{detail:i}))};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof Qd){r.parent=n._instance;break}}),t}_applyStyles(t){t&&t.forEach(r=>{const n=document.createElement("style");n.textContent=r,this.shadowRoot.appendChild(n)})}}function XN(e="$style"){{const t=zt();if(!t)return qe;const r=t.type.__cssModules;if(!r)return qe;const n=r[e];return n||qe}}function YN(e){const t=zt();if(!t)return;const r=()=>ju(t.subTree,e(t.proxy));S2(r),Et(()=>{const n=new MutationObserver(r);n.observe(t.subTree.el.parentNode,{childList:!0}),pc(()=>n.disconnect())})}function ju(e,t){if(e.shapeFlag&128){const r=e.suspense;e=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{ju(r.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Vh(e.el,t);else if(e.type===Ge)e.children.forEach(r=>ju(r,t));else if(e.type===vi){let{el:r,anchor:n}=e;for(;r&&(Vh(r,t),r!==n);)r=r.nextSibling}}function Vh(e,t){if(e.nodeType===1){const r=e.style;for(const n in t)r.setProperty(`--${n}`,t[n])}}const wn="transition",ss="animation",Yt=(e,{slots:t})=>E(C0,q0(e),t);Yt.displayName="Transition";const K0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},AS=Yt.props=ht({},C0.props,K0),po=(e,t=[])=>{me(e)?e.forEach(r=>r(...t)):e&&e(...t)},Kh=e=>e?me(e)?e.some(t=>t.length>1):e.length>1:!1;function q0(e){const t={};for(const R in e)R in K0||(t[R]=e[R]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:i=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=i,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${r}-leave-from`,leaveActiveClass:f=`${r}-leave-active`,leaveToClass:h=`${r}-leave-to`}=e,p=BS(o),b=p&&p[0],w=p&&p[1],{onBeforeEnter:g,onEnter:m,onEnterCancelled:_,onLeave:x,onLeaveCancelled:C,onBeforeAppear:$=g,onAppear:S=m,onAppearCancelled:P=_}=t,k=(R,H,B)=>{On(R,H?u:a),On(R,H?c:s),B&&B()},I=(R,H)=>{R._isLeaving=!1,On(R,d),On(R,h),On(R,f),H&&H()},O=R=>(H,B)=>{const Z=R?S:m,G=()=>k(H,R,B);po(Z,[H,G]),qh(()=>{On(H,R?l:i),en(H,R?u:a),Kh(Z)||Gh(H,n,b,G)})};return ht(t,{onBeforeEnter(R){po(g,[R]),en(R,i),en(R,s)},onBeforeAppear(R){po($,[R]),en(R,l),en(R,c)},onEnter:O(!1),onAppear:O(!0),onLeave(R,H){R._isLeaving=!0;const B=()=>I(R,H);en(R,d),X0(),en(R,f),qh(()=>{!R._isLeaving||(On(R,d),en(R,h),Kh(x)||Gh(R,n,w,B))}),po(x,[R,B])},onEnterCancelled(R){k(R,!1),po(_,[R])},onAppearCancelled(R){k(R,!0),po(P,[R])},onLeaveCancelled(R){I(R),po(C,[R])}})}function BS(e){if(e==null)return null;if(rt(e))return[Jc(e.enter),Jc(e.leave)];{const t=Jc(e);return[t,t]}}function Jc(e){return Xn(e)}function en(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function On(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function qh(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let MS=0;function Gh(e,t,r,n){const o=e._endId=++MS,i=()=>{o===e._endId&&n()};if(r)return setTimeout(i,r);const{type:s,timeout:a,propCount:l}=G0(e,t);if(!s)return n();const c=s+"end";let u=0;const d=()=>{e.removeEventListener(c,f),i()},f=h=>{h.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,f)}function G0(e,t){const r=window.getComputedStyle(e),n=p=>(r[p]||"").split(", "),o=n(wn+"Delay"),i=n(wn+"Duration"),s=Xh(o,i),a=n(ss+"Delay"),l=n(ss+"Duration"),c=Xh(a,l);let u=null,d=0,f=0;t===wn?s>0&&(u=wn,d=s,f=i.length):t===ss?c>0&&(u=ss,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?wn:ss:null,f=u?u===wn?i.length:l.length:0);const h=u===wn&&/\b(transform|all)(,|$)/.test(r[wn+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:h}}function Xh(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Yh(r)+Yh(e[n])))}function Yh(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function X0(){return document.body.offsetHeight}const Y0=new WeakMap,Z0=new WeakMap,HS={name:"TransitionGroup",props:ht({},AS,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=zt(),n=x0();let o,i;return Vd(()=>{if(!o.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!jS(o[0].el,r.vnode.el,s))return;o.forEach(zS),o.forEach(FS);const a=o.filter(NS);X0(),a.forEach(l=>{const c=l.el,u=c.style;en(c,s),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,On(c,s))};c.addEventListener("transitionend",d)})}),()=>{const s=Ne(e),a=q0(s);let l=s.tag||Ge;o=i,i=t.default?Ud(t.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&Pi(u,qs(u,a,n,r))}if(o)for(let c=0;c<o.length;c++){const u=o[c];Pi(u,qs(u,a,n,r)),Y0.set(u,u.el.getBoundingClientRect())}return Ue(l,null,i)}}},DS=HS;function zS(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function FS(e){Z0.set(e,e.el.getBoundingClientRect())}function NS(e){const t=Y0.get(e),r=Z0.get(e),n=t.left-r.left,o=t.top-r.top;if(n||o){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${n}px,${o}px)`,i.transitionDuration="0s",e}}function jS(e,t,r){const n=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(a=>a&&n.classList.remove(a))}),r.split(/\s+/).forEach(s=>s&&n.classList.add(s)),n.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(n);const{hasTransform:i}=G0(n);return o.removeChild(n),i}const Qn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return me(t)?r=>pi(t,r):t};function WS(e){e.target.composing=!0}function Zh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Wu={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e._assign=Qn(o);const i=n||o.props&&o.props.type==="number";nn(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;r&&(a=a.trim()),i&&(a=Xn(a)),e._assign(a)}),r&&nn(e,"change",()=>{e.value=e.value.trim()}),t||(nn(e,"compositionstart",WS),nn(e,"compositionend",Zh),nn(e,"change",Zh))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:o}},i){if(e._assign=Qn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(o||e.type==="number")&&Xn(e.value)===t))return;const s=t==null?"":t;e.value!==s&&(e.value=s)}},J0={deep:!0,created(e,t,r){e._assign=Qn(r),nn(e,"change",()=>{const n=e._modelValue,o=Ii(e),i=e.checked,s=e._assign;if(me(n)){const a=tc(n,o),l=a!==-1;if(i&&!l)s(n.concat(o));else if(!i&&l){const c=[...n];c.splice(a,1),s(c)}}else if(No(n)){const a=new Set(n);i?a.add(o):a.delete(o),s(a)}else s(eb(e,i))})},mounted:Jh,beforeUpdate(e,t,r){e._assign=Qn(r),Jh(e,t,r)}};function Jh(e,{value:t,oldValue:r},n){e._modelValue=t,me(t)?e.checked=tc(t,n.props.value)>-1:No(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=Gn(t,eb(e,!0)))}const Q0={created(e,{value:t},r){e.checked=Gn(t,r.props.value),e._assign=Qn(r),nn(e,"change",()=>{e._assign(Ii(e))})},beforeUpdate(e,{value:t,oldValue:r},n){e._assign=Qn(n),t!==r&&(e.checked=Gn(t,n.props.value))}},US={deep:!0,created(e,{value:t,modifiers:{number:r}},n){const o=No(t);nn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>r?Xn(Ii(s)):Ii(s));e._assign(e.multiple?o?new Set(i):i:i[0])}),e._assign=Qn(n)},mounted(e,{value:t}){Qh(e,t)},beforeUpdate(e,t,r){e._assign=Qn(r)},updated(e,{value:t}){Qh(e,t)}};function Qh(e,t){const r=e.multiple;if(!(r&&!me(t)&&!No(t))){for(let n=0,o=e.options.length;n<o;n++){const i=e.options[n],s=Ii(i);if(r)me(t)?i.selected=tc(t,s)>-1:i.selected=t.has(s);else if(Gn(Ii(i),t)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ii(e){return"_value"in e?e._value:e.value}function eb(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const VS={created(e,t,r){Wa(e,t,r,null,"created")},mounted(e,t,r){Wa(e,t,r,null,"mounted")},beforeUpdate(e,t,r,n){Wa(e,t,r,n,"beforeUpdate")},updated(e,t,r,n){Wa(e,t,r,n,"updated")}};function tb(e,t){switch(e){case"SELECT":return US;case"TEXTAREA":return Wu;default:switch(t){case"checkbox":return J0;case"radio":return Q0;default:return Wu}}}function Wa(e,t,r,n,o){const s=tb(e.tagName,r.props&&r.props.type)[o];s&&s(e,t,r,n)}function KS(){Wu.getSSRProps=({value:e})=>({value:e}),Q0.getSSRProps=({value:e},t)=>{if(t.props&&Gn(t.props.value,e))return{checked:!0}},J0.getSSRProps=({value:e},t)=>{if(me(e)){if(t.props&&tc(e,t.props.value)>-1)return{checked:!0}}else if(No(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},VS.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const r=tb(t.type.toUpperCase(),t.props&&t.props.type);if(r.getSSRProps)return r.getSSRProps(e,t)}}const qS=["ctrl","shift","alt","meta"],GS={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qS.some(r=>e[`${r}Key`]&&!t.includes(r))},ZN=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const i=GS[t[o]];if(i&&i(r,t))return}return e(r,...n)},XS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},JN=(e,t)=>r=>{if(!("key"in r))return;const n=Nr(r.key);if(t.some(o=>o===n||XS[o]===n))return e(r)},Ri={beforeMount(e,{value:t},{transition:r}){e._vod=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):as(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:n}){!t!=!r&&(n?t?(n.beforeEnter(e),as(e,!0),n.enter(e)):n.leave(e,()=>{as(e,!1)}):as(e,t))},beforeUnmount(e,{value:t}){as(e,t)}};function as(e,t){e.style.display=t?e._vod:"none"}function YS(){Ri.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const rb=ht({patchProp:kS},bS);let Ps,ep=!1;function nb(){return Ps||(Ps=Z2(rb))}function ob(){return Ps=ep?Ps:J2(rb),ep=!0,Ps}const tp=(...e)=>{nb().render(...e)},ZS=(...e)=>{ob().hydrate(...e)},JS=(...e)=>{const t=nb().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=ib(n);if(!o)return;const i=t._component;!_e(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t},QN=(...e)=>{const t=ob().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=ib(n);if(o)return r(o,!0,o instanceof SVGElement)},t};function ib(e){return ft(e)?document.querySelector(e):e}let rp=!1;const ej=()=>{rp||(rp=!0,KS(),YS())};let Hl=[];const sb=new WeakMap;function QS(){Hl.forEach(e=>e(...sb.get(e))),Hl=[]}function ab(e,...t){sb.set(e,t),!Hl.includes(e)&&Hl.push(e)===1&&requestAnimationFrame(QS)}function Gs(e){return e.composedPath()[0]||null}function tj(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function rj(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function lb(e,t){const r=e.trim().split(/\s+/g),n={top:r[0]};switch(r.length){case 1:n.right=r[0],n.bottom=r[0],n.left=r[0];break;case 2:n.right=r[1],n.left=r[1],n.bottom=r[0];break;case 3:n.right=r[1],n.bottom=r[2],n.left=r[1];break;case 4:n.right=r[1],n.bottom=r[2],n.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?n:n[t]}function nj(e,t){const[r,n]=e.split(" ");return t?t==="row"?r:n:{row:r,col:n||r}}const np={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},Xi="^\\s*",Yi="\\s*$",So="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",_o="([0-9A-Fa-f])",Eo="([0-9A-Fa-f]{2})",e_=new RegExp(`${Xi}rgb\\s*\\(${So},${So},${So}\\)${Yi}`),t_=new RegExp(`${Xi}rgba\\s*\\(${So},${So},${So},${So}\\)${Yi}`),r_=new RegExp(`${Xi}#${_o}${_o}${_o}${Yi}`),n_=new RegExp(`${Xi}#${Eo}${Eo}${Eo}${Yi}`),o_=new RegExp(`${Xi}#${_o}${_o}${_o}${_o}${Yi}`),i_=new RegExp(`${Xi}#${Eo}${Eo}${Eo}${Eo}${Yi}`);function Kt(e){return parseInt(e,16)}function dn(e){try{let t;if(t=n_.exec(e))return[Kt(t[1]),Kt(t[2]),Kt(t[3]),1];if(t=e_.exec(e))return[At(t[1]),At(t[5]),At(t[9]),1];if(t=t_.exec(e))return[At(t[1]),At(t[5]),At(t[9]),Ls(t[13])];if(t=r_.exec(e))return[Kt(t[1]+t[1]),Kt(t[2]+t[2]),Kt(t[3]+t[3]),1];if(t=i_.exec(e))return[Kt(t[1]),Kt(t[2]),Kt(t[3]),Ls(Kt(t[4])/255)];if(t=o_.exec(e))return[Kt(t[1]+t[1]),Kt(t[2]+t[2]),Kt(t[3]+t[3]),Ls(Kt(t[4]+t[4])/255)];if(e in np)return dn(np[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function s_(e){return e>1?1:e<0?0:e}function Uu(e,t,r,n){return`rgba(${At(e)}, ${At(t)}, ${At(r)}, ${s_(n)})`}function Qc(e,t,r,n,o){return At((e*t*(1-n)+r*n)/o)}function he(e,t){Array.isArray(e)||(e=dn(e)),Array.isArray(t)||(t=dn(t));const r=e[3],n=t[3],o=Ls(r+n-r*n);return Uu(Qc(e[0],r,t[0],n,o),Qc(e[1],r,t[1],n,o),Qc(e[2],r,t[2],n,o),o)}function X(e,t){const[r,n,o,i=1]=Array.isArray(e)?e:dn(e);return t.alpha?Uu(r,n,o,t.alpha):Uu(r,n,o,i)}function gt(e,t){const[r,n,o,i=1]=Array.isArray(e)?e:dn(e),{lightness:s=1,alpha:a=1}=t;return a_([r*s,n*s,o*s,i*a])}function Ls(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function At(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function a_(e){const[t,r,n]=e;return 3 in e?`rgba(${At(t)}, ${At(r)}, ${At(n)}, ${Ls(e[3])})`:`rgba(${At(t)}, ${At(r)}, ${At(n)}, 1)`}function Ho(e=8){return Math.random().toString(16).slice(2,2+e)}function oj(e,t){const r=[];for(let n=0;n<e;++n)r.push(t);return r}function Oi(e,t=[],r){const n={};return t.forEach(o=>{n[o]=e[o]}),Object.assign(n,r)}function ef(e,t=[],r){const n={};return Object.getOwnPropertyNames(e).forEach(i=>{t.includes(i)||(n[i]=e[i])}),Object.assign(n,r)}function Vu(e,t=!0,r=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&r.push(Mo(String(n)));return}if(Array.isArray(n)){Vu(n,t,r);return}if(n.type===Ge){if(n.children===null)return;Array.isArray(n.children)&&Vu(n.children,t,r)}else n.type!==_t&&r.push(n)}}),r}function ar(e,...t){if(Array.isArray(e))e.forEach(r=>ar(r,...t));else return e(...t)}function vc(e){return Object.keys(e)}const or=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?Mo(e):typeof e=="number"?Mo(String(e)):null;function Xs(e,t){console.error(`[naive/${e}]: ${t}`)}function Uo(e,t){throw new Error(`[naive/${e}]: ${t}`)}function Ku(e,t="default",r=void 0){const n=e[t];if(!n)return Xs("getFirstSlotVNode",`slot[${t}] is empty`),null;const o=Vu(n(r));return o.length===1?o[0]:(Xs("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function ij(e){return e}function pa(e){return e.some(t=>Zn(t)?!(t.type===_t||t.type===Ge&&!pa(t.children)):!0)?e:null}function qu(e,t){return e&&pa(e())||t()}function sj(e,t,r){return e&&pa(e(t))||r(t)}function ir(e,t){const r=e&&pa(e());return t(r||null)}function Gu(e){return!(e&&pa(e()))}const op=be({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}}),l_=/^(\d|\.)+$/,ip=/(\d|\.)+/;function rn(e,{c:t=1,offset:r=0,attachPx:n=!0}={}){if(typeof e=="number"){const o=(e+r)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(l_.test(e)){const o=(Number(e)+r)*t;return n?o===0?"0":`${o}px`:`${o}`}else{const o=ip.exec(e);return o?e.replace(ip,String((Number(o[0])+r)*t)):e}return e}function sp(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function c_(e){let t=0;for(let r=0;r<e.length;++r)e[r]==="&"&&++t;return t}const cb=/\s*,(?![^(]*\))\s*/g,u_=/\s+/g;function d_(e,t){const r=[];return t.split(cb).forEach(n=>{let o=c_(n);if(o){if(o===1){e.forEach(s=>{r.push(n.replace("&",s))});return}}else{e.forEach(s=>{r.push((s&&s+" ")+n)});return}let i=[n];for(;o--;){const s=[];i.forEach(a=>{e.forEach(l=>{s.push(a.replace("&",l))})}),i=s}i.forEach(s=>r.push(s))}),r}function f_(e,t){const r=[];return t.split(cb).forEach(n=>{e.forEach(o=>{r.push((o&&o+" ")+n)})}),r}function h_(e){let t=[""];return e.forEach(r=>{r=r&&r.trim(),r&&(r.includes("&")?t=d_(t,r):t=f_(t,r))}),t.join(", ").replace(u_," ")}function ap(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function yc(e){return document.querySelector(`style[cssr-id="${e}"]`)}function p_(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Ua(e){return e?/^\s*@(s|m)/.test(e):!1}const g_=/[A-Z]/g;function ub(e){return e.replace(g_,t=>"-"+t.toLowerCase())}function m_(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(r=>t+`  ${ub(r[0])}: ${r[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function b_(e,t,r){return typeof e=="function"?e({context:t.context,props:r}):e}function lp(e,t,r,n){if(!t)return"";const o=b_(t,r,n);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const i=Object.keys(o);if(i.length===0)return r.config.keepEmptyBlock?e+` {
}`:"";const s=e?[e+" {"]:[];return i.forEach(a=>{const l=o[a];if(a==="raw"){s.push(`
`+l+`
`);return}a=ub(a),l!=null&&s.push(`  ${a}${m_(l)}`)}),e&&s.push("}"),s.join(`
`)}function Xu(e,t,r){!e||e.forEach(n=>{if(Array.isArray(n))Xu(n,t,r);else if(typeof n=="function"){const o=n(t);Array.isArray(o)?Xu(o,t,r):o&&r(o)}else n&&r(n)})}function db(e,t,r,n,o,i){const s=e.$;let a="";if(!s||typeof s=="string")Ua(s)?a=s:t.push(s);else if(typeof s=="function"){const u=s({context:n.context,props:o});Ua(u)?a=u:t.push(u)}else if(s.before&&s.before(n.context),!s.$||typeof s.$=="string")Ua(s.$)?a=s.$:t.push(s.$);else if(s.$){const u=s.$({context:n.context,props:o});Ua(u)?a=u:t.push(u)}const l=h_(t),c=lp(l,e.props,n,o);a?(r.push(`${a} {`),i&&c&&i.insertRule(`${a} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&r.push(c)),e.children&&Xu(e.children,{context:n.context,props:o},u=>{if(typeof u=="string"){const d=lp(l,{raw:u},n,o);i?i.insertRule(d):r.push(d)}else db(u,t,r,n,o,i)}),t.pop(),a&&r.push("}"),s&&s.after&&s.after(n.context)}function fb(e,t,r,n=!1){const o=[];return db(e,[],o,t,r,n?e.instance.__styleSheet:void 0),n?"":o.join(`

`)}function Ys(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function v_(e,t,r){const{els:n}=t;if(r===void 0)n.forEach(ap),t.els=[];else{const o=yc(r);o&&n.includes(o)&&(ap(o),t.els=n.filter(i=>i!==o))}}function cp(e,t){e.push(t)}function y_(e,t,r,n,o,i,s,a,l){if(i&&!l){if(r===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const f=window.__cssrContext;f[r]||(f[r]=!0,fb(t,e,n,i));return}let c;if(r===void 0&&(c=t.render(n),r=Ys(c)),l){l.adapter(r,c!=null?c:t.render(n));return}const u=yc(r);if(u!==null&&!s)return u;const d=u!=null?u:p_(r);if(c===void 0&&(c=t.render(n)),d.textContent=c,u!==null)return u;if(a){const f=document.head.querySelector(`meta[name="${a}"]`);if(f)return document.head.insertBefore(d,f),cp(t.els,d),d}return o?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),cp(t.els,d),d}function x_(e){return fb(this,this.instance,e)}function C_(e={}){const{id:t,ssr:r,props:n,head:o=!1,silent:i=!1,force:s=!1,anchorMetaName:a}=e;return y_(this.instance,this,t,n,o,i,s,a,r)}function w_(e={}){const{id:t}=e;v_(this.instance,this,t)}const Va=function(e,t,r,n){return{instance:e,$:t,props:r,children:n,els:[],render:x_,mount:C_,unmount:w_}},S_=function(e,t,r,n){return Array.isArray(t)?Va(e,{$:null},null,t):Array.isArray(r)?Va(e,t,null,r):Array.isArray(n)?Va(e,t,r,n):Va(e,t,r,null)};function hb(e={}){let t=null;const r={c:(...n)=>S_(r,...n),use:(n,...o)=>n.install(r,...o),find:yc,context:{},config:e,get __styleSheet(){if(!t){const n=document.createElement("style");return document.head.appendChild(n),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return r}function __(e,t){if(e===void 0)return!1;if(t){const{context:{ids:r}}=t;return r.has(e)}return yc(e)!==null}function E_(e){let t=".",r="__",n="--",o;if(e){let p=e.blockPrefix;p&&(t=p),p=e.elementPrefix,p&&(r=p),p=e.modifierPrefix,p&&(n=p)}const i={install(p){o=p.c;const b=p.context;b.bem={},b.bem.b=null,b.bem.els=null}};function s(p){let b,w;return{before(g){b=g.bem.b,w=g.bem.els,g.bem.els=null},after(g){g.bem.b=b,g.bem.els=w},$({context:g,props:m}){return p=typeof p=="string"?p:p({context:g,props:m}),g.bem.b=p,`${(m==null?void 0:m.bPrefix)||t}${g.bem.b}`}}}function a(p){let b;return{before(w){b=w.bem.els},after(w){w.bem.els=b},$({context:w,props:g}){return p=typeof p=="string"?p:p({context:w,props:g}),w.bem.els=p.split(",").map(m=>m.trim()),w.bem.els.map(m=>`${(g==null?void 0:g.bPrefix)||t}${w.bem.b}${r}${m}`).join(", ")}}}function l(p){return{$({context:b,props:w}){p=typeof p=="string"?p:p({context:b,props:w});const g=p.split(",").map(x=>x.trim());function m(x){return g.map(C=>`&${(w==null?void 0:w.bPrefix)||t}${b.bem.b}${x!==void 0?`${r}${x}`:""}${n}${C}`).join(", ")}const _=b.bem.els;return _!==null?m(_[0]):m()}}}function c(p){return{$({context:b,props:w}){p=typeof p=="string"?p:p({context:b,props:w});const g=b.bem.els;return`&:not(${(w==null?void 0:w.bPrefix)||t}${b.bem.b}${g!==null&&g.length>0?`${r}${g[0]}`:""}${n}${p})`}}}return Object.assign(i,{cB:(...p)=>o(s(p[0]),p[1],p[2]),cE:(...p)=>o(a(p[0]),p[1],p[2]),cM:(...p)=>o(l(p[0]),p[1],p[2]),cNotM:(...p)=>o(c(p[0]),p[1],p[2])}),i}function we(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,r=>r.toUpperCase()))}we("abc","def");const T_="n",Zs=`.${T_}-`,$_="__",P_="--",pb=hb(),gb=E_({blockPrefix:Zs,elementPrefix:$_,modifierPrefix:P_});pb.use(gb);const{c:N,find:aj}=pb,{cB:U,cE:ne,cM:re,cNotM:Io}=gb;function mb(e){return N(({props:{bPrefix:t}})=>`${t||Zs}modal, ${t||Zs}drawer`,[e])}function L_(e){return N(({props:{bPrefix:t}})=>`${t||Zs}popover`,[e])}function bb(e){return N(({props:{bPrefix:t}})=>`&${t||Zs}modal`,e)}const k_=(...e)=>N(">",[U(...e)]);let eu;function I_(){return eu===void 0&&(eu=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),eu}const Vo=typeof document<"u"&&typeof window<"u",vb=new WeakSet;function lj(e){vb.add(e)}function R_(e){return!vb.has(e)}function O_(e){const t=W(!!e.value);if(t.value)return un(t);const r=tt(e,n=>{n&&(t.value=!0,r())});return un(t)}function fn(e){const t=q(e),r=W(t.value);return tt(t,n=>{r.value=n}),typeof e=="function"?r:{__v_isRef:!0,get value(){return r.value},set value(n){e.set(n)}}}function yb(){return zt()!==null}const tf=typeof window<"u";let yi,ks;const A_=()=>{var e,t;yi=tf?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,ks=!1,yi!==void 0?yi.then(()=>{ks=!0}):ks=!0};A_();function B_(e){if(ks)return;let t=!1;Et(()=>{ks||yi==null||yi.then(()=>{t||e()})}),wt(()=>{t=!0})}function xl(e){return e.composedPath()[0]}const M_={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function H_(e,t,r){if(e==="mousemoveoutside"){const n=o=>{t.contains(xl(o))||r(o)};return{mousemove:n,touchstart:n}}else if(e==="clickoutside"){let n=!1;const o=s=>{n=!t.contains(xl(s))},i=s=>{!n||t.contains(xl(s))||r(s)};return{mousedown:o,mouseup:i,touchstart:o,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function xb(e,t,r){const n=M_[e];let o=n.get(t);o===void 0&&n.set(t,o=new WeakMap);let i=o.get(r);return i===void 0&&o.set(r,i=H_(e,t,r)),i}function D_(e,t,r,n){if(e==="mousemoveoutside"||e==="clickoutside"){const o=xb(e,t,r);return Object.keys(o).forEach(i=>{bt(i,document,o[i],n)}),!0}return!1}function z_(e,t,r,n){if(e==="mousemoveoutside"||e==="clickoutside"){const o=xb(e,t,r);return Object.keys(o).forEach(i=>{nt(i,document,o[i],n)}),!0}return!1}function F_(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function r(){e.set(this,!0)}function n(){e.set(this,!0),t.set(this,!0)}function o(S,P,k){const I=S[P];return S[P]=function(){return k.apply(S,arguments),I.apply(S,arguments)},S}function i(S,P){S[P]=Event.prototype[P]}const s=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var S;return(S=s.get(this))!==null&&S!==void 0?S:null}function c(S,P){a!==void 0&&Object.defineProperty(S,"currentTarget",{configurable:!0,enumerable:!0,get:P!=null?P:a.get})}const u={bubble:{},capture:{}},d={};function f(){const S=function(P){const{type:k,eventPhase:I,bubbles:O}=P,R=xl(P);if(I===2)return;const H=I===1?"capture":"bubble";let B=R;const Z=[];for(;B===null&&(B=window),Z.push(B),B!==window;)B=B.parentNode||null;const G=u.capture[k],J=u.bubble[k];if(o(P,"stopPropagation",r),o(P,"stopImmediatePropagation",n),c(P,l),H==="capture"){if(G===void 0)return;for(let se=Z.length-1;se>=0&&!e.has(P);--se){const ye=Z[se],ke=G.get(ye);if(ke!==void 0){s.set(P,ye);for(const Te of ke){if(t.has(P))break;Te(P)}}if(se===0&&!O&&J!==void 0){const Te=J.get(ye);if(Te!==void 0)for(const Ae of Te){if(t.has(P))break;Ae(P)}}}}else if(H==="bubble"){if(J===void 0)return;for(let se=0;se<Z.length&&!e.has(P);++se){const ye=Z[se],ke=J.get(ye);if(ke!==void 0){s.set(P,ye);for(const Te of ke){if(t.has(P))break;Te(P)}}}}i(P,"stopPropagation"),i(P,"stopImmediatePropagation"),c(P)};return S.displayName="evtdUnifiedHandler",S}function h(){const S=function(P){const{type:k,eventPhase:I}=P;if(I!==2)return;const O=d[k];O!==void 0&&O.forEach(R=>R(P))};return S.displayName="evtdUnifiedWindowEventHandler",S}const p=f(),b=h();function w(S,P){const k=u[S];return k[P]===void 0&&(k[P]=new Map,window.addEventListener(P,p,S==="capture")),k[P]}function g(S){return d[S]===void 0&&(d[S]=new Set,window.addEventListener(S,b)),d[S]}function m(S,P){let k=S.get(P);return k===void 0&&S.set(P,k=new Set),k}function _(S,P,k,I){const O=u[P][k];if(O!==void 0){const R=O.get(S);if(R!==void 0&&R.has(I))return!0}return!1}function x(S,P){const k=d[S];return!!(k!==void 0&&k.has(P))}function C(S,P,k,I){let O;if(typeof I=="object"&&I.once===!0?O=G=>{$(S,P,O,I),k(G)}:O=k,D_(S,P,O,I))return;const H=I===!0||typeof I=="object"&&I.capture===!0?"capture":"bubble",B=w(H,S),Z=m(B,P);if(Z.has(O)||Z.add(O),P===window){const G=g(S);G.has(O)||G.add(O)}}function $(S,P,k,I){if(z_(S,P,k,I))return;const R=I===!0||typeof I=="object"&&I.capture===!0,H=R?"capture":"bubble",B=w(H,S),Z=m(B,P);if(P===window&&!_(P,R?"bubble":"capture",S,k)&&x(S,k)){const J=d[S];J.delete(k),J.size===0&&(window.removeEventListener(S,b),d[S]=void 0)}Z.has(k)&&Z.delete(k),Z.size===0&&B.delete(P),B.size===0&&(window.removeEventListener(S,p,H==="capture"),u[H][S]=void 0)}return{on:C,off:$}}const{on:bt,off:nt}=F_(),xs=W(null);function up(e){if(e.clientX>0||e.clientY>0)xs.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:r,top:n,width:o,height:i}=t.getBoundingClientRect();r>0||n>0?xs.value={x:r+o/2,y:n+i/2}:xs.value={x:0,y:0}}else xs.value=null}}let Ka=0,dp=!0;function Cb(){if(!tf)return un(W(null));Ka===0&&bt("click",document,up,!0);const e=()=>{Ka+=1};return dp&&(dp=yb())?(oo(e),wt(()=>{Ka-=1,Ka===0&&nt("click",document,up,!0)})):e(),un(xs)}const N_=W(void 0);let qa=0;function fp(){N_.value=Date.now()}let hp=!0;function wb(e){if(!tf)return un(W(!1));const t=W(!1);let r=null;function n(){r!==null&&window.clearTimeout(r)}function o(){n(),t.value=!0,r=window.setTimeout(()=>{t.value=!1},e)}qa===0&&bt("click",window,fp,!0);const i=()=>{qa+=1,bt("click",window,o,!0)};return hp&&(hp=yb())?(oo(i),wt(()=>{qa-=1,qa===0&&nt("click",window,fp,!0),nt("click",window,o,!0),n()})):i(),un(t)}function Sb(e,t){return tt(e,r=>{r!==void 0&&(t.value=r)}),q(()=>e.value===void 0?t.value:e.value)}function Zi(){const e=W(!1);return Et(()=>{e.value=!0}),un(e)}function j_(e,t){return q(()=>{for(const r of t)if(e[r]!==void 0)return e[r];return e[t[t.length-1]]})}const W_=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function U_(){return W_}const cj="n-internal-select-menu",V_="n-internal-select-menu-body",rf="n-modal-body",_b="n-modal",nf="n-drawer-body",uj="n-drawer",of="n-popover-body",Eb="__disabled__";function Ai(e){const t=Se(rf,null),r=Se(nf,null),n=Se(of,null),o=Se(V_,null),i=W();if(typeof document<"u"){i.value=document.fullscreenElement;const s=()=>{i.value=document.fullscreenElement};Et(()=>{bt("fullscreenchange",document,s)}),wt(()=>{nt("fullscreenchange",document,s)})}return fn(()=>{var s;const{to:a}=e;return a!==void 0?a===!1?Eb:a===!0?i.value||"body":a:t!=null&&t.value?(s=t.value.$el)!==null&&s!==void 0?s:t.value:r!=null&&r.value?r.value:n!=null&&n.value?n.value:o!=null&&o.value?o.value:a!=null?a:i.value||"body"})}Ai.tdkey=Eb;Ai.propTo={type:[String,Object,Boolean],default:void 0};function Yu(e,t,r="default"){const n=t[r];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);return n()}function Zu(e,t=!0,r=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&r.push(Mo(String(n)));return}if(Array.isArray(n)){Zu(n,t,r);return}if(n.type===Ge){if(n.children===null)return;Array.isArray(n.children)&&Zu(n.children,t,r)}else n.type!==_t&&r.push(n)}}),r}function pp(e,t,r="default"){const n=t[r];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);const o=Zu(n());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`)}let Sn=null;function Tb(){if(Sn===null&&(Sn=document.getElementById("v-binder-view-measurer"),Sn===null)){Sn=document.createElement("div"),Sn.id="v-binder-view-measurer";const{style:e}=Sn;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Sn)}return Sn.getBoundingClientRect()}function K_(e,t){const r=Tb();return{top:t,left:e,height:0,width:0,right:r.width-e,bottom:r.height-t}}function tu(e){const t=e.getBoundingClientRect(),r=Tb();return{left:t.left-r.left,top:t.top-r.top,bottom:r.height+r.top-t.bottom,right:r.width+r.left-t.right,width:t.width,height:t.height}}function q_(e){return e.nodeType===9?null:e.parentNode}function $b(e){if(e===null)return null;const t=q_(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:r,overflowX:n,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(r+o+n))return t}return $b(t)}const G_=be({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;Ze("VBinder",(t=zt())===null||t===void 0?void 0:t.proxy);const r=Se("VBinder",null),n=W(null),o=g=>{n.value=g,r&&e.syncTargetWithParent&&r.setTargetRef(g)};let i=[];const s=()=>{let g=n.value;for(;g=$b(g),g!==null;)i.push(g);for(const m of i)bt("scroll",m,d,!0)},a=()=>{for(const g of i)nt("scroll",g,d,!0);i=[]},l=new Set,c=g=>{l.size===0&&s(),l.has(g)||l.add(g)},u=g=>{l.has(g)&&l.delete(g),l.size===0&&a()},d=()=>{ab(f)},f=()=>{l.forEach(g=>g())},h=new Set,p=g=>{h.size===0&&bt("resize",window,w),h.has(g)||h.add(g)},b=g=>{h.has(g)&&h.delete(g),h.size===0&&nt("resize",window,w)},w=()=>{h.forEach(g=>g())};return wt(()=>{nt("resize",window,w),a()}),{targetRef:n,setTargetRef:o,addScrollListener:c,removeScrollListener:u,addResizeListener:p,removeResizeListener:b}},render(){return Yu("binder",this.$slots)}}),X_=G_,Y_=be({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=Se("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Wr(pp("follower",this.$slots),[[t]]):pp("follower",this.$slots)}}),Jo="@@mmoContext",Z_={mounted(e,{value:t}){e[Jo]={handler:void 0},typeof t=="function"&&(e[Jo].handler=t,bt("mousemoveoutside",e,t))},updated(e,{value:t}){const r=e[Jo];typeof t=="function"?r.handler?r.handler!==t&&(nt("mousemoveoutside",e,r.handler),r.handler=t,bt("mousemoveoutside",e,t)):(e[Jo].handler=t,bt("mousemoveoutside",e,t)):r.handler&&(nt("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:t}=e[Jo];t&&nt("mousemoveoutside",e,t),e[Jo].handler=void 0}},J_=Z_,Qo="@@coContext",Q_={mounted(e,{value:t,modifiers:r}){e[Qo]={handler:void 0},typeof t=="function"&&(e[Qo].handler=t,bt("clickoutside",e,t,{capture:r.capture}))},updated(e,{value:t,modifiers:r}){const n=e[Qo];typeof t=="function"?n.handler?n.handler!==t&&(nt("clickoutside",e,n.handler,{capture:r.capture}),n.handler=t,bt("clickoutside",e,t,{capture:r.capture})):(e[Qo].handler=t,bt("clickoutside",e,t,{capture:r.capture})):n.handler&&(nt("clickoutside",e,n.handler,{capture:r.capture}),n.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:r}=e[Qo];r&&nt("clickoutside",e,r,{capture:t.capture}),e[Qo].handler=void 0}},Ju=Q_;function eE(e,t){console.error(`[vdirs/${e}]: ${t}`)}class tE{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,r){const{elementZIndex:n}=this;if(r!==void 0){t.style.zIndex=`${r}`,n.delete(t);return}const{nextZIndex:o}=this;n.has(t)&&n.get(t)+1===this.nextZIndex||(t.style.zIndex=`${o}`,n.set(t,o),this.nextZIndex=o+1,this.squashState())}unregister(t,r){const{elementZIndex:n}=this;n.has(t)?n.delete(t):r===void 0&&eE("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((r,n)=>r[1]-n[1]),this.nextZIndex=2e3,t.forEach(r=>{const n=r[0],o=this.nextZIndex++;`${o}`!==n.style.zIndex&&(n.style.zIndex=`${o}`)})}}const ru=new tE,ei="@@ziContext",rE={mounted(e,t){const{value:r={}}=t,{zIndex:n,enabled:o}=r;e[ei]={enabled:!!o,initialized:!1},o&&(ru.ensureZIndex(e,n),e[ei].initialized=!0)},updated(e,t){const{value:r={}}=t,{zIndex:n,enabled:o}=r,i=e[ei].enabled;o&&!i&&(ru.ensureZIndex(e,n),e[ei].initialized=!0),e[ei].enabled=!!o},unmounted(e,t){if(!e[ei].initialized)return;const{value:r={}}=t,{zIndex:n}=r;ru.unregister(e,n)}},xc=rE,Pb=Symbol("@css-render/vue3-ssr");function nE(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function oE(e,t){const r=Se(Pb,null);if(r===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:n,ids:o}=r;o.has(e)||n!==null&&(o.add(e),n.push(nE(e,t)))}const iE=typeof document<"u";function ga(){if(iE)return;const e=Se(Pb,null);if(e!==null)return{adapter:oE,context:e}}function gp(e,t){console.error(`[vueuc/${e}]: ${t}`)}const{c:Ga}=hb(),sE="vueuc-style";function mp(e){return typeof e=="string"?document.querySelector(e):e()}const sf=be({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:O_(Be(e,"show")),mergedTo:q(()=>{const{to:t}=e;return t!=null?t:"body"})}},render(){return this.showTeleport?this.disabled?Yu("lazy-teleport",this.$slots):E(ha,{disabled:this.disabled,to:this.mergedTo},Yu("lazy-teleport",this.$slots)):null}}),Xa={top:"bottom",bottom:"top",left:"right",right:"left"},bp={start:"end",center:"center",end:"start"},nu={top:"height",bottom:"height",left:"width",right:"width"},aE={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},lE={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},cE={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},vp={top:!0,bottom:!1,left:!0,right:!1},yp={top:"end",bottom:"start",left:"end",right:"start"};function uE(e,t,r,n,o,i){if(!o||i)return{placement:e,top:0,left:0};const[s,a]=e.split("-");let l=a!=null?a:"center",c={top:0,left:0};const u=(h,p,b)=>{let w=0,g=0;const m=r[h]-t[p]-t[h];return m>0&&n&&(b?g=vp[p]?m:-m:w=vp[p]?m:-m),{left:w,top:g}},d=s==="left"||s==="right";if(l!=="center"){const h=cE[e],p=Xa[h],b=nu[h];if(r[b]>t[b]){if(t[h]+t[b]<r[b]){const w=(r[b]-t[b])/2;t[h]<w||t[p]<w?t[h]<t[p]?(l=bp[a],c=u(b,p,d)):c=u(b,h,d):l="center"}}else r[b]<t[b]&&t[p]<0&&t[h]>t[p]&&(l=bp[a])}else{const h=s==="bottom"||s==="top"?"left":"top",p=Xa[h],b=nu[h],w=(r[b]-t[b])/2;(t[h]<w||t[p]<w)&&(t[h]>t[p]?(l=yp[h],c=u(b,h,d)):(l=yp[p],c=u(b,p,d)))}let f=s;return t[s]<r[nu[s]]&&t[s]<t[Xa[s]]&&(f=Xa[s]),{placement:l!=="center"?`${f}-${l}`:f,left:c.left,top:c.top}}function dE(e,t){return t?lE[e]:aE[e]}function fE(e,t,r,n,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(r.top-t.top)}px`,left:`${Math.round(r.left-t.left+r.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(r.top-t.top+r.height/2)}px`,left:`${Math.round(r.left-t.left+r.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(r.top-t.top+r.height/2)}px`,left:`${Math.round(r.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(r.top-t.top+r.height)}px`,left:`${Math.round(r.left-t.left+r.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(r.top-t.top+r.height+n)}px`,left:`${Math.round(r.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(r.top-t.top+r.height+n)}px`,left:`${Math.round(r.left-t.left+r.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(r.top-t.top+n)}px`,left:`${Math.round(r.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(r.top-t.top+n)}px`,left:`${Math.round(r.left-t.left+r.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(r.top-t.top+n)}px`,left:`${Math.round(r.left-t.left+r.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(r.top-t.top+r.height+n)}px`,left:`${Math.round(r.left-t.left+r.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(r.top-t.top+n)}px`,left:`${Math.round(r.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(r.top-t.top+r.height+n)}px`,left:`${Math.round(r.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(r.top-t.top+n)}px`,left:`${Math.round(r.left-t.left+r.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(r.top-t.top+r.height/2+n)}px`,left:`${Math.round(r.left-t.left+r.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(r.top-t.top+r.height/2+n)}px`,left:`${Math.round(r.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(r.top-t.top+r.height+n)}px`,left:`${Math.round(r.left-t.left+r.width/2+o)}px`,transform:"translateX(-50%)"}}}const hE=Ga([Ga(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Ga(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Ga("> *",{pointerEvents:"all"})])]),pE=be({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=Se("VBinder"),r=fn(()=>e.enabled!==void 0?e.enabled:e.show),n=W(null),o=W(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&t.addScrollListener(l),f.includes("resize")&&t.addResizeListener(l)},s=()=>{t.removeScrollListener(l),t.removeResizeListener(l)};Et(()=>{r.value&&(l(),i())});const a=ga();hE.mount({id:"vueuc/binder",head:!0,anchorMetaName:sE,ssr:a}),wt(()=>{s()}),B_(()=>{r.value&&l()});const l=()=>{if(!r.value)return;const f=n.value;if(f===null)return;const h=t.targetRef,{x:p,y:b,overlap:w}=e,g=p!==void 0&&b!==void 0?K_(p,b):tu(h);f.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:m,minWidth:_,placement:x,internalShift:C,flip:$}=e;f.setAttribute("v-placement",x),w?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:S}=f;m==="target"?S.width=`${g.width}px`:m!==void 0?S.width=m:S.width="",_==="target"?S.minWidth=`${g.width}px`:_!==void 0?S.minWidth=_:S.minWidth="";const P=tu(f),k=tu(o.value),{left:I,top:O,placement:R}=uE(x,g,P,C,$,w),H=dE(R,w),{left:B,top:Z,transform:G}=fE(R,k,g,O,I,w);f.setAttribute("v-placement",R),f.style.setProperty("--v-offset-left",`${Math.round(I)}px`),f.style.setProperty("--v-offset-top",`${Math.round(O)}px`),f.style.transform=`translateX(${B}) translateY(${Z}) ${G}`,f.style.setProperty("--v-transform-origin",H),f.style.transformOrigin=H};tt(r,f=>{f?(i(),c()):s()});const c=()=>{Ht().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{tt(Be(e,f),l)}),["teleportDisabled"].forEach(f=>{tt(Be(e,f),c)}),tt(Be(e,"syncTrigger"),f=>{f.includes("resize")?t.addResizeListener(l):t.removeResizeListener(l),f.includes("scroll")?t.addScrollListener(l):t.removeScrollListener(l)});const u=Zi(),d=fn(()=>{const{to:f}=e;if(f!==void 0)return f;u.value});return{VBinder:t,mergedEnabled:r,offsetContainerRef:o,followerRef:n,mergedTo:d,syncPosition:l}},render(){return E(sf,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const r=E("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[E("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Wr(r,[[xc,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):r}})}});var Ro=[],gE=function(){return Ro.some(function(e){return e.activeTargets.length>0})},mE=function(){return Ro.some(function(e){return e.skippedTargets.length>0})},xp="ResizeObserver loop completed with undelivered notifications.",bE=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:xp}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=xp),window.dispatchEvent(e)},Js;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Js||(Js={}));var Oo=function(e){return Object.freeze(e)},vE=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,Oo(this)}return e}(),Lb=function(){function e(t,r,n,o){return this.x=t,this.y=r,this.width=n,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Oo(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,n=t.y,o=t.top,i=t.right,s=t.bottom,a=t.left,l=t.width,c=t.height;return{x:r,y:n,top:o,right:i,bottom:s,left:a,width:l,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),af=function(e){return e instanceof SVGElement&&"getBBox"in e},kb=function(e){if(af(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var o=e,i=o.offsetWidth,s=o.offsetHeight;return!(i||s||e.getClientRects().length)},Cp=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},yE=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Is=typeof window<"u"?window:{},Ya=new WeakMap,wp=/auto|scroll/,xE=/^tb|vertical/,CE=/msie|trident/i.test(Is.navigator&&Is.navigator.userAgent),Rr=function(e){return parseFloat(e||"0")},xi=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new vE((r?t:e)||0,(r?e:t)||0)},Sp=Oo({devicePixelContentBoxSize:xi(),borderBoxSize:xi(),contentBoxSize:xi(),contentRect:new Lb(0,0,0,0)}),Ib=function(e,t){if(t===void 0&&(t=!1),Ya.has(e)&&!t)return Ya.get(e);if(kb(e))return Ya.set(e,Sp),Sp;var r=getComputedStyle(e),n=af(e)&&e.ownerSVGElement&&e.getBBox(),o=!CE&&r.boxSizing==="border-box",i=xE.test(r.writingMode||""),s=!n&&wp.test(r.overflowY||""),a=!n&&wp.test(r.overflowX||""),l=n?0:Rr(r.paddingTop),c=n?0:Rr(r.paddingRight),u=n?0:Rr(r.paddingBottom),d=n?0:Rr(r.paddingLeft),f=n?0:Rr(r.borderTopWidth),h=n?0:Rr(r.borderRightWidth),p=n?0:Rr(r.borderBottomWidth),b=n?0:Rr(r.borderLeftWidth),w=d+c,g=l+u,m=b+h,_=f+p,x=a?e.offsetHeight-_-e.clientHeight:0,C=s?e.offsetWidth-m-e.clientWidth:0,$=o?w+m:0,S=o?g+_:0,P=n?n.width:Rr(r.width)-$-C,k=n?n.height:Rr(r.height)-S-x,I=P+w+C+m,O=k+g+x+_,R=Oo({devicePixelContentBoxSize:xi(Math.round(P*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:xi(I,O,i),contentBoxSize:xi(P,k,i),contentRect:new Lb(d,l,P,k)});return Ya.set(e,R),R},Rb=function(e,t,r){var n=Ib(e,r),o=n.borderBoxSize,i=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(t){case Js.DEVICE_PIXEL_CONTENT_BOX:return s;case Js.BORDER_BOX:return o;default:return i}},wE=function(){function e(t){var r=Ib(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=Oo([r.borderBoxSize]),this.contentBoxSize=Oo([r.contentBoxSize]),this.devicePixelContentBoxSize=Oo([r.devicePixelContentBoxSize])}return e}(),Ob=function(e){if(kb(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},SE=function(){var e=1/0,t=[];Ro.forEach(function(s){if(s.activeTargets.length!==0){var a=[];s.activeTargets.forEach(function(c){var u=new wE(c.target),d=Ob(c.target);a.push(u),c.lastReportedSize=Rb(c.target,c.observedBox),d<e&&(e=d)}),t.push(function(){s.callback.call(s.observer,a,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var r=0,n=t;r<n.length;r++){var o=n[r];o()}return e},_p=function(e){Ro.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(o){o.isActive()&&(Ob(o.target)>e?r.activeTargets.push(o):r.skippedTargets.push(o))})})},_E=function(){var e=0;for(_p(e);gE();)e=SE(),_p(e);return mE()&&bE(),e>0},ou,Ab=[],EE=function(){return Ab.splice(0).forEach(function(e){return e()})},TE=function(e){if(!ou){var t=0,r=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return EE()}).observe(r,n),ou=function(){r.textContent="".concat(t?t--:t++)}}Ab.push(e),ou()},$E=function(e){TE(function(){requestAnimationFrame(e)})},Cl=0,PE=function(){return!!Cl},LE=250,kE={attributes:!0,characterData:!0,childList:!0,subtree:!0},Ep=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Tp=function(e){return e===void 0&&(e=0),Date.now()+e},iu=!1,IE=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=LE),!iu){iu=!0;var n=Tp(t);$E(function(){var o=!1;try{o=_E()}finally{if(iu=!1,t=n-Tp(),!PE())return;o?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,kE)};document.body?r():Is.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Ep.forEach(function(r){return Is.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Ep.forEach(function(r){return Is.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),Qu=new IE,$p=function(e){!Cl&&e>0&&Qu.start(),Cl+=e,!Cl&&Qu.stop()},RE=function(e){return!af(e)&&!yE(e)&&getComputedStyle(e).display==="inline"},OE=function(){function e(t,r){this.target=t,this.observedBox=r||Js.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Rb(this.target,this.observedBox,!0);return RE(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),AE=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),Za=new WeakMap,Pp=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},Ja=function(){function e(){}return e.connect=function(t,r){var n=new AE(t,r);Za.set(t,n)},e.observe=function(t,r,n){var o=Za.get(t),i=o.observationTargets.length===0;Pp(o.observationTargets,r)<0&&(i&&Ro.push(o),o.observationTargets.push(new OE(r,n&&n.box)),$p(1),Qu.schedule())},e.unobserve=function(t,r){var n=Za.get(t),o=Pp(n.observationTargets,r),i=n.observationTargets.length===1;o>=0&&(i&&Ro.splice(Ro.indexOf(n),1),n.observationTargets.splice(o,1),$p(-1))},e.disconnect=function(t){var r=this,n=Za.get(t);n.observationTargets.slice().forEach(function(o){return r.unobserve(t,o.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),BE=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ja.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Cp(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ja.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Cp(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ja.unobserve(this,t)},e.prototype.disconnect=function(){Ja.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class ME{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||BE)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const r of t){const n=this.elHandlersMap.get(r.target);n!==void 0&&n(r)}}registerHandler(t,r){this.elHandlersMap.set(t,r),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Lp=new ME,kp=be({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const r=zt().proxy;function n(o){const{onResize:i}=e;i!==void 0&&i(o)}Et(()=>{const o=r.$el;if(o===void 0){gp("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){gp("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(Lp.registerHandler(o.nextElementSibling,n),t=!0)}),wt(()=>{t&&Lp.unregisterHandler(r.$el.nextElementSibling)})},render(){return Gd(this.$slots,"default")}});function Bb(e){return e instanceof HTMLElement}function Mb(e){for(let t=0;t<e.childNodes.length;t++){const r=e.childNodes[t];if(Bb(r)&&(Db(r)||Mb(r)))return!0}return!1}function Hb(e){for(let t=e.childNodes.length-1;t>=0;t--){const r=e.childNodes[t];if(Bb(r)&&(Db(r)||Hb(r)))return!0}return!1}function Db(e){if(!HE(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function HE(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let ls=[];const zb=be({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=Ho(),r=W(null),n=W(null);let o=!1,i=!1;const s=typeof document>"u"?null:document.activeElement;function a(){return ls[ls.length-1]===t}function l(w){var g;w.code==="Escape"&&a()&&((g=e.onEsc)===null||g===void 0||g.call(e,w))}Et(()=>{tt(()=>e.active,w=>{w?(d(),bt("keydown",document,l)):(nt("keydown",document,l),o&&f())},{immediate:!0})}),wt(()=>{nt("keydown",document,l),o&&f()});function c(w){if(!i&&a()){const g=u();if(g===null||g.contains(Gs(w)))return;h("first")}}function u(){const w=r.value;if(w===null)return null;let g=w;for(;g=g.nextSibling,!(g===null||g instanceof Element&&g.tagName==="DIV"););return g}function d(){var w;if(!e.disabled){if(ls.push(t),e.autoFocus){const{initialFocusTo:g}=e;g===void 0?h("first"):(w=mp(g))===null||w===void 0||w.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",c,!0)}}function f(){var w;if(e.disabled||(document.removeEventListener("focus",c,!0),ls=ls.filter(m=>m!==t),a()))return;const{finalFocusTo:g}=e;g!==void 0?(w=mp(g))===null||w===void 0||w.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&s instanceof HTMLElement&&(i=!0,s.focus({preventScroll:!0}),i=!1)}function h(w){if(!!a()&&e.active){const g=r.value,m=n.value;if(g!==null&&m!==null){const _=u();if(_==null||_===m){i=!0,g.focus({preventScroll:!0}),i=!1;return}i=!0;const x=w==="first"?Mb(_):Hb(_);i=!1,x||(i=!0,g.focus({preventScroll:!0}),i=!1)}}}function p(w){if(i)return;const g=u();g!==null&&(w.relatedTarget!==null&&g.contains(w.relatedTarget)?h("last"):h("first"))}function b(w){i||(w.relatedTarget!==null&&w.relatedTarget===r.value?h("last"):h("first"))}return{focusableStartRef:r,focusableEndRef:n,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:b}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:r}=this;return E(Ge,null,[E("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:r,onFocus:this.handleStartFocus}),e(),E("div",{"aria-hidden":"true",style:r,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}});let ti=0,Ip="",Rp="",Op="",Ap="";const Bp=W("0px");function DE(e){if(typeof document>"u")return;const t=document.documentElement;let r,n=!1;const o=()=>{t.style.marginRight=Ip,t.style.overflow=Rp,t.style.overflowX=Op,t.style.overflowY=Ap,Bp.value="0px"};Et(()=>{r=tt(e,i=>{if(i){if(!ti){const s=window.innerWidth-t.offsetWidth;s>0&&(Ip=t.style.marginRight,t.style.marginRight=`${s}px`,Bp.value=`${s}px`),Rp=t.style.overflow,Op=t.style.overflowX,Ap=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}n=!0,ti++}else ti--,ti||o(),n=!1},{immediate:!0})}),wt(()=>{r==null||r(),n&&(ti--,ti||o(),n=!1)})}const lf=W(!1),Mp=()=>{lf.value=!0},Hp=()=>{lf.value=!1};let cs=0;const zE=()=>(Vo&&(oo(()=>{cs||(window.addEventListener("compositionstart",Mp),window.addEventListener("compositionend",Hp)),cs++}),wt(()=>{cs<=1?(window.removeEventListener("compositionstart",Mp),window.removeEventListener("compositionend",Hp),cs=0):cs--})),lf);function FE(e){const t={isDeactivated:!1};let r=!1;return S0(()=>{if(t.isDeactivated=!1,!r){r=!0;return}e()}),_0(()=>{t.isDeactivated=!0,r||(r=!0)}),t}const Dp="n-form-item";function Fb(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:n}={}){const o=Se(Dp,null);Ze(Dp,null);const i=q(r?()=>r(o):()=>{const{size:l}=e;if(l)return l;if(o){const{mergedSize:c}=o;if(c.value!==void 0)return c.value}return t}),s=q(n?()=>n(o):()=>{const{disabled:l}=e;return l!==void 0?l:o?o.disabled.value:!1}),a=q(()=>{const{status:l}=e;return l||(o==null?void 0:o.mergedValidationStatus.value)});return wt(()=>{o&&o.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:s,mergedStatusRef:a,nTriggerFormBlur(){o&&o.handleContentBlur()},nTriggerFormChange(){o&&o.handleContentChange()},nTriggerFormFocus(){o&&o.handleContentFocus()},nTriggerFormInput(){o&&o.handleContentInput()}}}var NE=typeof global=="object"&&global&&global.Object===Object&&global;const Nb=NE;var jE=typeof self=="object"&&self&&self.Object===Object&&self,WE=Nb||jE||Function("return this")();const Vr=WE;var UE=Vr.Symbol;const eo=UE;var jb=Object.prototype,VE=jb.hasOwnProperty,KE=jb.toString,us=eo?eo.toStringTag:void 0;function qE(e){var t=VE.call(e,us),r=e[us];try{e[us]=void 0;var n=!0}catch{}var o=KE.call(e);return n&&(t?e[us]=r:delete e[us]),o}var GE=Object.prototype,XE=GE.toString;function YE(e){return XE.call(e)}var ZE="[object Null]",JE="[object Undefined]",zp=eo?eo.toStringTag:void 0;function Ko(e){return e==null?e===void 0?JE:ZE:zp&&zp in Object(e)?qE(e):YE(e)}function to(e){return e!=null&&typeof e=="object"}var QE="[object Symbol]";function cf(e){return typeof e=="symbol"||to(e)&&Ko(e)==QE}function Wb(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var e5=Array.isArray;const yr=e5;var t5=1/0,Fp=eo?eo.prototype:void 0,Np=Fp?Fp.toString:void 0;function Ub(e){if(typeof e=="string")return e;if(yr(e))return Wb(e,Ub)+"";if(cf(e))return Np?Np.call(e):"";var t=e+"";return t=="0"&&1/e==-t5?"-0":t}function io(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function uf(e){return e}var r5="[object AsyncFunction]",n5="[object Function]",o5="[object GeneratorFunction]",i5="[object Proxy]";function df(e){if(!io(e))return!1;var t=Ko(e);return t==n5||t==o5||t==r5||t==i5}var s5=Vr["__core-js_shared__"];const su=s5;var jp=function(){var e=/[^.]+$/.exec(su&&su.keys&&su.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function a5(e){return!!jp&&jp in e}var l5=Function.prototype,c5=l5.toString;function qo(e){if(e!=null){try{return c5.call(e)}catch{}try{return e+""}catch{}}return""}var u5=/[\\^$.*+?()[\]{}|]/g,d5=/^\[object .+?Constructor\]$/,f5=Function.prototype,h5=Object.prototype,p5=f5.toString,g5=h5.hasOwnProperty,m5=RegExp("^"+p5.call(g5).replace(u5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function b5(e){if(!io(e)||a5(e))return!1;var t=df(e)?m5:d5;return t.test(qo(e))}function v5(e,t){return e==null?void 0:e[t]}function Go(e,t){var r=v5(e,t);return b5(r)?r:void 0}var y5=Go(Vr,"WeakMap");const ed=y5;var Wp=Object.create,x5=function(){function e(){}return function(t){if(!io(t))return{};if(Wp)return Wp(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const C5=x5;function w5(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function S5(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var _5=800,E5=16,T5=Date.now;function $5(e){var t=0,r=0;return function(){var n=T5(),o=E5-(n-r);if(r=n,o>0){if(++t>=_5)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function P5(e){return function(){return e}}var L5=function(){try{var e=Go(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Dl=L5;var k5=Dl?function(e,t){return Dl(e,"toString",{configurable:!0,enumerable:!1,value:P5(t),writable:!0})}:uf;const I5=k5;var R5=$5(I5);const O5=R5;var A5=9007199254740991,B5=/^(?:0|[1-9]\d*)$/;function ff(e,t){var r=typeof e;return t=t==null?A5:t,!!t&&(r=="number"||r!="symbol"&&B5.test(e))&&e>-1&&e%1==0&&e<t}function hf(e,t,r){t=="__proto__"&&Dl?Dl(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function ma(e,t){return e===t||e!==e&&t!==t}var M5=Object.prototype,H5=M5.hasOwnProperty;function D5(e,t,r){var n=e[t];(!(H5.call(e,t)&&ma(n,r))||r===void 0&&!(t in e))&&hf(e,t,r)}function z5(e,t,r,n){var o=!r;r||(r={});for(var i=-1,s=t.length;++i<s;){var a=t[i],l=n?n(r[a],e[a],a,r,e):void 0;l===void 0&&(l=e[a]),o?hf(r,a,l):D5(r,a,l)}return r}var Up=Math.max;function F5(e,t,r){return t=Up(t===void 0?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=Up(n.length-t,0),s=Array(i);++o<i;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=r(s),w5(e,this,a)}}function N5(e,t){return O5(F5(e,t,uf),e+"")}var j5=9007199254740991;function pf(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=j5}function Ji(e){return e!=null&&pf(e.length)&&!df(e)}function W5(e,t,r){if(!io(r))return!1;var n=typeof t;return(n=="number"?Ji(r)&&ff(t,r.length):n=="string"&&t in r)?ma(r[t],e):!1}function U5(e){return N5(function(t,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,s=o>2?r[2]:void 0;for(i=e.length>3&&typeof i=="function"?(o--,i):void 0,s&&W5(r[0],r[1],s)&&(i=o<3?void 0:i,o=1),t=Object(t);++n<o;){var a=r[n];a&&e(t,a,n,i)}return t})}var V5=Object.prototype;function gf(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||V5;return e===r}function K5(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var q5="[object Arguments]";function Vp(e){return to(e)&&Ko(e)==q5}var Vb=Object.prototype,G5=Vb.hasOwnProperty,X5=Vb.propertyIsEnumerable,Y5=Vp(function(){return arguments}())?Vp:function(e){return to(e)&&G5.call(e,"callee")&&!X5.call(e,"callee")};const zl=Y5;function Z5(){return!1}var Kb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Kp=Kb&&typeof module=="object"&&module&&!module.nodeType&&module,J5=Kp&&Kp.exports===Kb,qp=J5?Vr.Buffer:void 0,Q5=qp?qp.isBuffer:void 0,e3=Q5||Z5;const Fl=e3;var t3="[object Arguments]",r3="[object Array]",n3="[object Boolean]",o3="[object Date]",i3="[object Error]",s3="[object Function]",a3="[object Map]",l3="[object Number]",c3="[object Object]",u3="[object RegExp]",d3="[object Set]",f3="[object String]",h3="[object WeakMap]",p3="[object ArrayBuffer]",g3="[object DataView]",m3="[object Float32Array]",b3="[object Float64Array]",v3="[object Int8Array]",y3="[object Int16Array]",x3="[object Int32Array]",C3="[object Uint8Array]",w3="[object Uint8ClampedArray]",S3="[object Uint16Array]",_3="[object Uint32Array]",at={};at[m3]=at[b3]=at[v3]=at[y3]=at[x3]=at[C3]=at[w3]=at[S3]=at[_3]=!0;at[t3]=at[r3]=at[p3]=at[n3]=at[g3]=at[o3]=at[i3]=at[s3]=at[a3]=at[l3]=at[c3]=at[u3]=at[d3]=at[f3]=at[h3]=!1;function E3(e){return to(e)&&pf(e.length)&&!!at[Ko(e)]}function T3(e){return function(t){return e(t)}}var qb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Rs=qb&&typeof module=="object"&&module&&!module.nodeType&&module,$3=Rs&&Rs.exports===qb,au=$3&&Nb.process,P3=function(){try{var e=Rs&&Rs.require&&Rs.require("util").types;return e||au&&au.binding&&au.binding("util")}catch{}}();const Gp=P3;var Xp=Gp&&Gp.isTypedArray,L3=Xp?T3(Xp):E3;const mf=L3;var k3=Object.prototype,I3=k3.hasOwnProperty;function Gb(e,t){var r=yr(e),n=!r&&zl(e),o=!r&&!n&&Fl(e),i=!r&&!n&&!o&&mf(e),s=r||n||o||i,a=s?K5(e.length,String):[],l=a.length;for(var c in e)(t||I3.call(e,c))&&!(s&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ff(c,l)))&&a.push(c);return a}function Xb(e,t){return function(r){return e(t(r))}}var R3=Xb(Object.keys,Object);const O3=R3;var A3=Object.prototype,B3=A3.hasOwnProperty;function M3(e){if(!gf(e))return O3(e);var t=[];for(var r in Object(e))B3.call(e,r)&&r!="constructor"&&t.push(r);return t}function bf(e){return Ji(e)?Gb(e):M3(e)}function H3(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var D3=Object.prototype,z3=D3.hasOwnProperty;function F3(e){if(!io(e))return H3(e);var t=gf(e),r=[];for(var n in e)n=="constructor"&&(t||!z3.call(e,n))||r.push(n);return r}function Yb(e){return Ji(e)?Gb(e,!0):F3(e)}var N3=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j3=/^\w*$/;function vf(e,t){if(yr(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||cf(e)?!0:j3.test(e)||!N3.test(e)||t!=null&&e in Object(t)}var W3=Go(Object,"create");const Qs=W3;function U3(){this.__data__=Qs?Qs(null):{},this.size=0}function V3(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var K3="__lodash_hash_undefined__",q3=Object.prototype,G3=q3.hasOwnProperty;function X3(e){var t=this.__data__;if(Qs){var r=t[e];return r===K3?void 0:r}return G3.call(t,e)?t[e]:void 0}var Y3=Object.prototype,Z3=Y3.hasOwnProperty;function J3(e){var t=this.__data__;return Qs?t[e]!==void 0:Z3.call(t,e)}var Q3="__lodash_hash_undefined__";function eT(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Qs&&t===void 0?Q3:t,this}function Do(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Do.prototype.clear=U3;Do.prototype.delete=V3;Do.prototype.get=X3;Do.prototype.has=J3;Do.prototype.set=eT;function tT(){this.__data__=[],this.size=0}function Cc(e,t){for(var r=e.length;r--;)if(ma(e[r][0],t))return r;return-1}var rT=Array.prototype,nT=rT.splice;function oT(e){var t=this.__data__,r=Cc(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():nT.call(t,r,1),--this.size,!0}function iT(e){var t=this.__data__,r=Cc(t,e);return r<0?void 0:t[r][1]}function sT(e){return Cc(this.__data__,e)>-1}function aT(e,t){var r=this.__data__,n=Cc(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function gn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}gn.prototype.clear=tT;gn.prototype.delete=oT;gn.prototype.get=iT;gn.prototype.has=sT;gn.prototype.set=aT;var lT=Go(Vr,"Map");const ea=lT;function cT(){this.size=0,this.__data__={hash:new Do,map:new(ea||gn),string:new Do}}function uT(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function wc(e,t){var r=e.__data__;return uT(t)?r[typeof t=="string"?"string":"hash"]:r.map}function dT(e){var t=wc(this,e).delete(e);return this.size-=t?1:0,t}function fT(e){return wc(this,e).get(e)}function hT(e){return wc(this,e).has(e)}function pT(e,t){var r=wc(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function mn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}mn.prototype.clear=cT;mn.prototype.delete=dT;mn.prototype.get=fT;mn.prototype.has=hT;mn.prototype.set=pT;var gT="Expected a function";function yf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(gT);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(yf.Cache||mn),r}yf.Cache=mn;var mT=500;function bT(e){var t=yf(e,function(n){return r.size===mT&&r.clear(),n}),r=t.cache;return t}var vT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yT=/\\(\\)?/g,xT=bT(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(vT,function(r,n,o,i){t.push(o?i.replace(yT,"$1"):n||r)}),t});const CT=xT;function Sc(e){return e==null?"":Ub(e)}function Zb(e,t){return yr(e)?e:vf(e,t)?[e]:CT(Sc(e))}var wT=1/0;function _c(e){if(typeof e=="string"||cf(e))return e;var t=e+"";return t=="0"&&1/e==-wT?"-0":t}function Jb(e,t){t=Zb(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[_c(t[r++])];return r&&r==n?e:void 0}function ST(e,t,r){var n=e==null?void 0:Jb(e,t);return n===void 0?r:n}function _T(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var ET=Xb(Object.getPrototypeOf,Object);const Qb=ET;var TT="[object Object]",$T=Function.prototype,PT=Object.prototype,ev=$T.toString,LT=PT.hasOwnProperty,kT=ev.call(Object);function IT(e){if(!to(e)||Ko(e)!=TT)return!1;var t=Qb(e);if(t===null)return!0;var r=LT.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&ev.call(r)==kT}function RT(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}function OT(e,t,r){var n=e.length;return r=r===void 0?n:r,!t&&r>=n?e:RT(e,t,r)}var AT="\\ud800-\\udfff",BT="\\u0300-\\u036f",MT="\\ufe20-\\ufe2f",HT="\\u20d0-\\u20ff",DT=BT+MT+HT,zT="\\ufe0e\\ufe0f",FT="\\u200d",NT=RegExp("["+FT+AT+DT+zT+"]");function tv(e){return NT.test(e)}function jT(e){return e.split("")}var rv="\\ud800-\\udfff",WT="\\u0300-\\u036f",UT="\\ufe20-\\ufe2f",VT="\\u20d0-\\u20ff",KT=WT+UT+VT,qT="\\ufe0e\\ufe0f",GT="["+rv+"]",td="["+KT+"]",rd="\\ud83c[\\udffb-\\udfff]",XT="(?:"+td+"|"+rd+")",nv="[^"+rv+"]",ov="(?:\\ud83c[\\udde6-\\uddff]){2}",iv="[\\ud800-\\udbff][\\udc00-\\udfff]",YT="\\u200d",sv=XT+"?",av="["+qT+"]?",ZT="(?:"+YT+"(?:"+[nv,ov,iv].join("|")+")"+av+sv+")*",JT=av+sv+ZT,QT="(?:"+[nv+td+"?",td,ov,iv,GT].join("|")+")",e$=RegExp(rd+"(?="+rd+")|"+QT+JT,"g");function t$(e){return e.match(e$)||[]}function r$(e){return tv(e)?t$(e):jT(e)}function n$(e){return function(t){t=Sc(t);var r=tv(t)?r$(t):void 0,n=r?r[0]:t.charAt(0),o=r?OT(r,1).join(""):t.slice(1);return n[e]()+o}}var o$=n$("toUpperCase");const i$=o$;function s$(e,t,r,n){var o=-1,i=e==null?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function a$(e){return function(t){return e==null?void 0:e[t]}}var l$={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},c$=a$(l$);const u$=c$;var d$=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f$="\\u0300-\\u036f",h$="\\ufe20-\\ufe2f",p$="\\u20d0-\\u20ff",g$=f$+h$+p$,m$="["+g$+"]",b$=RegExp(m$,"g");function v$(e){return e=Sc(e),e&&e.replace(d$,u$).replace(b$,"")}var y$=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function x$(e){return e.match(y$)||[]}var C$=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function w$(e){return C$.test(e)}var lv="\\ud800-\\udfff",S$="\\u0300-\\u036f",_$="\\ufe20-\\ufe2f",E$="\\u20d0-\\u20ff",T$=S$+_$+E$,cv="\\u2700-\\u27bf",uv="a-z\\xdf-\\xf6\\xf8-\\xff",$$="\\xac\\xb1\\xd7\\xf7",P$="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",L$="\\u2000-\\u206f",k$=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",dv="A-Z\\xc0-\\xd6\\xd8-\\xde",I$="\\ufe0e\\ufe0f",fv=$$+P$+L$+k$,hv="['\u2019]",Yp="["+fv+"]",R$="["+T$+"]",pv="\\d+",O$="["+cv+"]",gv="["+uv+"]",mv="[^"+lv+fv+pv+cv+uv+dv+"]",A$="\\ud83c[\\udffb-\\udfff]",B$="(?:"+R$+"|"+A$+")",M$="[^"+lv+"]",bv="(?:\\ud83c[\\udde6-\\uddff]){2}",vv="[\\ud800-\\udbff][\\udc00-\\udfff]",ni="["+dv+"]",H$="\\u200d",Zp="(?:"+gv+"|"+mv+")",D$="(?:"+ni+"|"+mv+")",Jp="(?:"+hv+"(?:d|ll|m|re|s|t|ve))?",Qp="(?:"+hv+"(?:D|LL|M|RE|S|T|VE))?",yv=B$+"?",xv="["+I$+"]?",z$="(?:"+H$+"(?:"+[M$,bv,vv].join("|")+")"+xv+yv+")*",F$="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",N$="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",j$=xv+yv+z$,W$="(?:"+[O$,bv,vv].join("|")+")"+j$,U$=RegExp([ni+"?"+gv+"+"+Jp+"(?="+[Yp,ni,"$"].join("|")+")",D$+"+"+Qp+"(?="+[Yp,ni+Zp,"$"].join("|")+")",ni+"?"+Zp+"+"+Jp,ni+"+"+Qp,N$,F$,pv,W$].join("|"),"g");function V$(e){return e.match(U$)||[]}function K$(e,t,r){return e=Sc(e),t=r?void 0:t,t===void 0?w$(e)?V$(e):x$(e):e.match(t)||[]}var q$="['\u2019]",G$=RegExp(q$,"g");function X$(e){return function(t){return s$(K$(v$(t).replace(G$,"")),e,"")}}function Y$(){this.__data__=new gn,this.size=0}function Z$(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function J$(e){return this.__data__.get(e)}function Q$(e){return this.__data__.has(e)}var eP=200;function tP(e,t){var r=this.__data__;if(r instanceof gn){var n=r.__data__;if(!ea||n.length<eP-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new mn(n)}return r.set(e,t),this.size=r.size,this}function jr(e){var t=this.__data__=new gn(e);this.size=t.size}jr.prototype.clear=Y$;jr.prototype.delete=Z$;jr.prototype.get=J$;jr.prototype.has=Q$;jr.prototype.set=tP;var Cv=typeof exports=="object"&&exports&&!exports.nodeType&&exports,eg=Cv&&typeof module=="object"&&module&&!module.nodeType&&module,rP=eg&&eg.exports===Cv,tg=rP?Vr.Buffer:void 0,rg=tg?tg.allocUnsafe:void 0;function nP(e,t){if(t)return e.slice();var r=e.length,n=rg?rg(r):new e.constructor(r);return e.copy(n),n}function oP(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i}function iP(){return[]}var sP=Object.prototype,aP=sP.propertyIsEnumerable,ng=Object.getOwnPropertySymbols,lP=ng?function(e){return e==null?[]:(e=Object(e),oP(ng(e),function(t){return aP.call(e,t)}))}:iP;const cP=lP;function uP(e,t,r){var n=t(e);return yr(e)?n:_T(n,r(e))}function og(e){return uP(e,bf,cP)}var dP=Go(Vr,"DataView");const nd=dP;var fP=Go(Vr,"Promise");const od=fP;var hP=Go(Vr,"Set");const id=hP;var ig="[object Map]",pP="[object Object]",sg="[object Promise]",ag="[object Set]",lg="[object WeakMap]",cg="[object DataView]",gP=qo(nd),mP=qo(ea),bP=qo(od),vP=qo(id),yP=qo(ed),bo=Ko;(nd&&bo(new nd(new ArrayBuffer(1)))!=cg||ea&&bo(new ea)!=ig||od&&bo(od.resolve())!=sg||id&&bo(new id)!=ag||ed&&bo(new ed)!=lg)&&(bo=function(e){var t=Ko(e),r=t==pP?e.constructor:void 0,n=r?qo(r):"";if(n)switch(n){case gP:return cg;case mP:return ig;case bP:return sg;case vP:return ag;case yP:return lg}return t});const ug=bo;var xP=Vr.Uint8Array;const Nl=xP;function CP(e){var t=new e.constructor(e.byteLength);return new Nl(t).set(new Nl(e)),t}function wP(e,t){var r=t?CP(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function SP(e){return typeof e.constructor=="function"&&!gf(e)?C5(Qb(e)):{}}var _P="__lodash_hash_undefined__";function EP(e){return this.__data__.set(e,_P),this}function TP(e){return this.__data__.has(e)}function jl(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new mn;++t<r;)this.add(e[t])}jl.prototype.add=jl.prototype.push=EP;jl.prototype.has=TP;function $P(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function PP(e,t){return e.has(t)}var LP=1,kP=2;function wv(e,t,r,n,o,i){var s=r&LP,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=r&kP?new jl:void 0;for(i.set(e,t),i.set(t,e);++d<a;){var p=e[d],b=t[d];if(n)var w=s?n(b,p,d,t,e,i):n(p,b,d,e,t,i);if(w!==void 0){if(w)continue;f=!1;break}if(h){if(!$P(t,function(g,m){if(!PP(h,m)&&(p===g||o(p,g,r,n,i)))return h.push(m)})){f=!1;break}}else if(!(p===b||o(p,b,r,n,i))){f=!1;break}}return i.delete(e),i.delete(t),f}function IP(e){var t=-1,r=Array(e.size);return e.forEach(function(n,o){r[++t]=[o,n]}),r}function RP(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var OP=1,AP=2,BP="[object Boolean]",MP="[object Date]",HP="[object Error]",DP="[object Map]",zP="[object Number]",FP="[object RegExp]",NP="[object Set]",jP="[object String]",WP="[object Symbol]",UP="[object ArrayBuffer]",VP="[object DataView]",dg=eo?eo.prototype:void 0,lu=dg?dg.valueOf:void 0;function KP(e,t,r,n,o,i,s){switch(r){case VP:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case UP:return!(e.byteLength!=t.byteLength||!i(new Nl(e),new Nl(t)));case BP:case MP:case zP:return ma(+e,+t);case HP:return e.name==t.name&&e.message==t.message;case FP:case jP:return e==t+"";case DP:var a=IP;case NP:var l=n&OP;if(a||(a=RP),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;n|=AP,s.set(e,t);var u=wv(a(e),a(t),n,o,i,s);return s.delete(e),u;case WP:if(lu)return lu.call(e)==lu.call(t)}return!1}var qP=1,GP=Object.prototype,XP=GP.hasOwnProperty;function YP(e,t,r,n,o,i){var s=r&qP,a=og(e),l=a.length,c=og(t),u=c.length;if(l!=u&&!s)return!1;for(var d=l;d--;){var f=a[d];if(!(s?f in t:XP.call(t,f)))return!1}var h=i.get(e),p=i.get(t);if(h&&p)return h==t&&p==e;var b=!0;i.set(e,t),i.set(t,e);for(var w=s;++d<l;){f=a[d];var g=e[f],m=t[f];if(n)var _=s?n(m,g,f,t,e,i):n(g,m,f,e,t,i);if(!(_===void 0?g===m||o(g,m,r,n,i):_)){b=!1;break}w||(w=f=="constructor")}if(b&&!w){var x=e.constructor,C=t.constructor;x!=C&&"constructor"in e&&"constructor"in t&&!(typeof x=="function"&&x instanceof x&&typeof C=="function"&&C instanceof C)&&(b=!1)}return i.delete(e),i.delete(t),b}var ZP=1,fg="[object Arguments]",hg="[object Array]",Qa="[object Object]",JP=Object.prototype,pg=JP.hasOwnProperty;function QP(e,t,r,n,o,i){var s=yr(e),a=yr(t),l=s?hg:ug(e),c=a?hg:ug(t);l=l==fg?Qa:l,c=c==fg?Qa:c;var u=l==Qa,d=c==Qa,f=l==c;if(f&&Fl(e)){if(!Fl(t))return!1;s=!0,u=!1}if(f&&!u)return i||(i=new jr),s||mf(e)?wv(e,t,r,n,o,i):KP(e,t,l,r,n,o,i);if(!(r&ZP)){var h=u&&pg.call(e,"__wrapped__"),p=d&&pg.call(t,"__wrapped__");if(h||p){var b=h?e.value():e,w=p?t.value():t;return i||(i=new jr),o(b,w,r,n,i)}}return f?(i||(i=new jr),YP(e,t,r,n,o,i)):!1}function xf(e,t,r,n,o){return e===t?!0:e==null||t==null||!to(e)&&!to(t)?e!==e&&t!==t:QP(e,t,r,n,xf,o)}var e4=1,t4=2;function r4(e,t,r,n){var o=r.length,i=o,s=!n;if(e==null)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){a=r[o];var l=a[0],c=e[l],u=a[1];if(s&&a[2]){if(c===void 0&&!(l in e))return!1}else{var d=new jr;if(n)var f=n(c,u,l,e,t,d);if(!(f===void 0?xf(u,c,e4|t4,n,d):f))return!1}}return!0}function Sv(e){return e===e&&!io(e)}function n4(e){for(var t=bf(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Sv(o)]}return t}function _v(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function o4(e){var t=n4(e);return t.length==1&&t[0][2]?_v(t[0][0],t[0][1]):function(r){return r===e||r4(r,e,t)}}function i4(e,t){return e!=null&&t in Object(e)}function s4(e,t,r){t=Zb(t,e);for(var n=-1,o=t.length,i=!1;++n<o;){var s=_c(t[n]);if(!(i=e!=null&&r(e,s)))break;e=e[s]}return i||++n!=o?i:(o=e==null?0:e.length,!!o&&pf(o)&&ff(s,o)&&(yr(e)||zl(e)))}function a4(e,t){return e!=null&&s4(e,t,i4)}var l4=1,c4=2;function u4(e,t){return vf(e)&&Sv(t)?_v(_c(e),t):function(r){var n=ST(r,e);return n===void 0&&n===t?a4(r,e):xf(t,n,l4|c4)}}function d4(e){return function(t){return t==null?void 0:t[e]}}function f4(e){return function(t){return Jb(t,e)}}function h4(e){return vf(e)?d4(_c(e)):f4(e)}function p4(e){return typeof e=="function"?e:e==null?uf:typeof e=="object"?yr(e)?u4(e[0],e[1]):o4(e):h4(e)}function g4(e){return function(t,r,n){for(var o=-1,i=Object(t),s=n(t),a=s.length;a--;){var l=s[e?a:++o];if(r(i[l],l,i)===!1)break}return t}}var m4=g4();const Ev=m4;function b4(e,t){return e&&Ev(e,t,bf)}function v4(e,t){return function(r,n){if(r==null)return r;if(!Ji(r))return e(r,n);for(var o=r.length,i=t?o:-1,s=Object(r);(t?i--:++i<o)&&n(s[i],i,s)!==!1;);return r}}var y4=v4(b4);const x4=y4;function sd(e,t,r){(r!==void 0&&!ma(e[t],r)||r===void 0&&!(t in e))&&hf(e,t,r)}function C4(e){return to(e)&&Ji(e)}function ad(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function w4(e){return z5(e,Yb(e))}function S4(e,t,r,n,o,i,s){var a=ad(e,r),l=ad(t,r),c=s.get(l);if(c){sd(e,r,c);return}var u=i?i(a,l,r+"",e,t,s):void 0,d=u===void 0;if(d){var f=yr(l),h=!f&&Fl(l),p=!f&&!h&&mf(l);u=l,f||h||p?yr(a)?u=a:C4(a)?u=S5(a):h?(d=!1,u=nP(l,!0)):p?(d=!1,u=wP(l,!0)):u=[]:IT(l)||zl(l)?(u=a,zl(a)?u=w4(a):(!io(a)||df(a))&&(u=SP(l))):d=!1}d&&(s.set(l,u),o(u,l,n,i,s),s.delete(l)),sd(e,r,u)}function Tv(e,t,r,n,o){e!==t&&Ev(t,function(i,s){if(o||(o=new jr),io(i))S4(e,t,s,r,Tv,n,o);else{var a=n?n(ad(e,s),i,s+"",e,t,o):void 0;a===void 0&&(a=i),sd(e,s,a)}},Yb)}function _4(e,t){var r=-1,n=Ji(e)?Array(e.length):[];return x4(e,function(o,i,s){n[++r]=t(o,i,s)}),n}function E4(e,t){var r=yr(e)?Wb:_4;return r(e,p4(t))}var T4=X$(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});const $4=T4;var P4=U5(function(e,t,r){Tv(e,t,r)});const Cs=P4,so={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:L4,fontFamily:k4,lineHeight:I4}=so,$v=N("body",`
 margin: 0;
 font-size: ${L4};
 font-family: ${k4};
 line-height: ${I4};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[N("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),ro="n-config-provider",ta="naive-ui-style";function Qe(e,t,r,n,o,i){const s=ga(),a=Se(ro,null);if(r){const c=()=>{const u=i==null?void 0:i.value;r.mount({id:u===void 0?t:u+t,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:ta,ssr:s}),a!=null&&a.preflightStyleDisabled||$v.mount({id:"n-global",head:!0,anchorMetaName:ta,ssr:s})};s?c():oo(c)}return q(()=>{var c;const{theme:{common:u,self:d,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=o,{common:b,peers:w}=h,{common:g=void 0,[e]:{common:m=void 0,self:_=void 0,peers:x={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:C=void 0,[e]:$={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:S,peers:P={}}=$,k=Cs({},u||m||g||n.common,C,S,b),I=Cs((c=d||_||n.self)===null||c===void 0?void 0:c(k),p,$,h);return{common:k,self:I,peers:Cs({},n.peers,x,f),peerOverrides:Cs({},p.peers,P,w)}})}Qe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Pv="n";function It(e={},t={defaultBordered:!0}){const r=Se(ro,null);return{inlineThemeDisabled:r==null?void 0:r.inlineThemeDisabled,mergedRtlRef:r==null?void 0:r.mergedRtlRef,mergedComponentPropsRef:r==null?void 0:r.mergedComponentPropsRef,mergedBreakpointsRef:r==null?void 0:r.mergedBreakpointsRef,mergedBorderedRef:q(()=>{var n,o;const{bordered:i}=e;return i!==void 0?i:(o=(n=r==null?void 0:r.mergedBorderedRef.value)!==null&&n!==void 0?n:t.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:q(()=>(r==null?void 0:r.mergedClsPrefixRef.value)||Pv),namespaceRef:q(()=>r==null?void 0:r.mergedNamespaceRef.value)}}const R4={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},O4=R4;function cu(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,n=e.formats[r]||e.formats[e.defaultWidth];return n}}function ds(e){return function(t,r){var n=r!=null&&r.context?String(r.context):"standalone",o;if(n==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,s=r!=null&&r.width?String(r.width):i;o=e.formattingValues[s]||e.formattingValues[i]}else{var a=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;o=e.values[l]||e.values[a]}var c=e.argumentCallback?e.argumentCallback(t):t;return o[c]}}function fs(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var s=i[0],a=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(a)?B4(a,function(d){return d.test(s)}):A4(a,function(d){return d.test(s)}),c;c=e.valueCallback?e.valueCallback(l):l,c=r.valueCallback?r.valueCallback(c):c;var u=t.slice(s.length);return{value:c,rest:u}}}function A4(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function B4(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}function M4(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var o=n[0],i=t.match(e.parsePattern);if(!i)return null;var s=e.valueCallback?e.valueCallback(i[0]):i[0];s=r.valueCallback?r.valueCallback(s):s;var a=t.slice(o.length);return{value:s,rest:a}}}var H4={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},D4=function(t,r,n){var o,i=H4[t];return typeof i=="string"?o=i:r===1?o=i.one:o=i.other.replace("{{count}}",r.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};const z4=D4;var F4={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},N4={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},j4={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},W4={date:cu({formats:F4,defaultWidth:"full"}),time:cu({formats:N4,defaultWidth:"full"}),dateTime:cu({formats:j4,defaultWidth:"full"})};const U4=W4;var V4={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},K4=function(t,r,n,o){return V4[t]};const q4=K4;var G4={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},X4={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Y4={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Z4={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},J4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Q4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},e6=function(t,r){var n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},t6={ordinalNumber:e6,era:ds({values:G4,defaultWidth:"wide"}),quarter:ds({values:X4,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ds({values:Y4,defaultWidth:"wide"}),day:ds({values:Z4,defaultWidth:"wide"}),dayPeriod:ds({values:J4,defaultWidth:"wide",formattingValues:Q4,defaultFormattingWidth:"wide"})};const r6=t6;var n6=/^(\d+)(th|st|nd|rd)?/i,o6=/\d+/i,i6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},s6={any:[/^b/i,/^(a|c)/i]},a6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},l6={any:[/1/i,/2/i,/3/i,/4/i]},c6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},u6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},d6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},f6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},p6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},g6={ordinalNumber:M4({matchPattern:n6,parsePattern:o6,valueCallback:function(t){return parseInt(t,10)}}),era:fs({matchPatterns:i6,defaultMatchWidth:"wide",parsePatterns:s6,defaultParseWidth:"any"}),quarter:fs({matchPatterns:a6,defaultMatchWidth:"wide",parsePatterns:l6,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:fs({matchPatterns:c6,defaultMatchWidth:"wide",parsePatterns:u6,defaultParseWidth:"any"}),day:fs({matchPatterns:d6,defaultMatchWidth:"wide",parsePatterns:f6,defaultParseWidth:"any"}),dayPeriod:fs({matchPatterns:h6,defaultMatchWidth:"any",parsePatterns:p6,defaultParseWidth:"any"})};const m6=g6;var b6={code:"en-US",formatDistance:z4,formatLong:U4,formatRelative:q4,localize:r6,match:m6,options:{weekStartsOn:0,firstWeekContainsDate:1}};const v6=b6,y6={name:"en-US",locale:v6},x6=y6;function C6(e){const{mergedLocaleRef:t,mergedDateLocaleRef:r}=Se(ro,null)||{},n=q(()=>{var i,s;return(s=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i[e])!==null&&s!==void 0?s:O4[e]});return{dateLocaleRef:q(()=>{var i;return(i=r==null?void 0:r.value)!==null&&i!==void 0?i:x6}),localeRef:n}}function Ec(e,t,r){if(!t)return;const n=ga(),o=Se(ro,null),i=()=>{const s=r==null?void 0:r.value;t.mount({id:s===void 0?e:s+e,head:!0,anchorMetaName:ta,props:{bPrefix:s?`.${s}-`:void 0},ssr:n}),o!=null&&o.preflightStyleDisabled||$v.mount({id:"n-global",head:!0,anchorMetaName:ta,ssr:n})};n?i():oo(i)}function xr(e,t,r,n){var o;r||Uo("useThemeClass","cssVarsRef is not passed");const i=(o=Se(ro,null))===null||o===void 0?void 0:o.mergedThemeHashRef,s=W(""),a=ga();let l;const c=`__${e}`,u=()=>{let d=c;const f=t?t.value:void 0,h=i==null?void 0:i.value;h&&(d+="-"+h),f&&(d+="-"+f);const{themeOverrides:p,builtinThemeOverrides:b}=n;p&&(d+="-"+Ys(JSON.stringify(p))),b&&(d+="-"+Ys(JSON.stringify(b))),s.value=d,l=()=>{const w=r.value;let g="";for(const m in w)g+=`${m}: ${w[m]};`;N(`.${d}`,g).mount({id:d,ssr:a}),l=void 0}};return $r(()=>{u()}),{themeClass:s,onRender:()=>{l==null||l()}}}function ba(e,t,r){if(!t)return;const n=ga(),o=q(()=>{const{value:s}=t;if(!s)return;const a=s[e];if(!!a)return a}),i=()=>{$r(()=>{const{value:s}=r,a=`${s}${e}Rtl`;if(__(a,n))return;const{value:l}=o;!l||l.style.mount({id:a,head:!0,anchorMetaName:ta,props:{bPrefix:s?`.${s}-`:void 0},ssr:n})})};return n?i():oo(i),o}const w6=be({name:"Add",render(){return E("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}});function Jt(e,t){return be({name:i$(e),setup(){var r;const n=(r=Se(ro,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var o;const i=(o=n==null?void 0:n.value)===null||o===void 0?void 0:o[e];return i?i():t}}})}const S6=Jt("attach",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),_6=Jt("close",E("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),E6=be({name:"Eye",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),E("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),T6=Jt("trash",E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),E("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),E("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),E("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),$6=Jt("download",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),va=Jt("error",E("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),Bi=Jt("info",E("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),ya=Jt("success",E("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),xa=Jt("warning",E("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},E("g",{"fill-rule":"nonzero"},E("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),P6=Jt("cancel",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),L6=Jt("retry",E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),E("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),k6=Jt("rotateClockwise",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),E("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),I6=Jt("rotateClockwise",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),E("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),R6=Jt("zoomIn",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),E("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),O6=Jt("zoomOut",E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),E("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),A6=be({name:"ResizeSmall",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},E("g",{fill:"none"},E("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),Tc=be({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=Zi();return()=>E(Yt,{name:"icon-switch-transition",appear:r.value},t)}}),$c=be({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function r(a){e.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function n(a){e.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:l}=e;l&&l()}function o(a){e.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(a){if(a.style.transition="none",e.width){const l=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${l}px`}else if(e.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const l=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${l}px`}a.offsetWidth}function s(a){var l;e.width?a.style.maxWidth="":e.reverse||(a.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const a=e.group?DS:Yt;return E(a,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:s,onBeforeLeave:r,onLeave:n,onAfterLeave:o},t)}}}),B6=U("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("svg",`
 height: 1em;
 width: 1em;
 `)]),dt=be({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Ec("-base-icon",B6,Be(e,"clsPrefix"))},render(){return E("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),M6=U("base-close",`
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
 `),N("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Io("disabled",[N("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),N("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),N("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),N("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),N("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),re("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),re("round",[N("&::before",`
 border-radius: 50%;
 `)])]),Pc=be({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Ec("-base-close",M6,Be(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:r,absolute:n,round:o,isButtonTag:i}=e;return E(i?"button":"div",{type:i?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:i?void 0:"button",disabled:r,class:[`${t}-base-close`,n&&`${t}-base-close--absolute`,r&&`${t}-base-close--disabled`,o&&`${t}-base-close--round`],onMousedown:a=>{e.focusable||a.preventDefault()},onClick:e.onClick},E(dt,{clsPrefix:t},{default:()=>E(_6,null)}))}}}),{cubicBezierEaseInOut:H6}=so;function ra({originalTransform:e="",left:t=0,top:r=0,transition:n=`all .3s ${H6} !important`}={}){return[N("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),N("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),N("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:n})]}const D6=N([N("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),N("@keyframes loading-layer-rotate",`
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
 `),N("@keyframes loading-left-spin",`
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
 `),N("@keyframes loading-right-spin",`
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
 `),U("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[ne("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ra()]),ne("container",`
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
 `,[ne("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),ne("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[ne("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[ne("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),ne("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[ne("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),ne("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[ne("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),ne("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ra({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),z6={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Lv=be({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},z6),setup(e){Ec("-base-loading",D6,Be(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:n,scale:o}=this,i=t/o;return E("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},E(Tc,null,{default:()=>this.show?E("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},E("div",{class:`${e}-base-loading__container`},E("div",{class:`${e}-base-loading__container-layer`},E("div",{class:`${e}-base-loading__container-layer-left`},E("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),E("div",{class:`${e}-base-loading__container-layer-patch`},E("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),E("div",{class:`${e}-base-loading__container-layer-right`},E("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):E("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),ue={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},F6=dn(ue.neutralBase),kv=dn(ue.neutralInvertBase),N6="rgba("+kv.slice(0,3).join(", ")+", ";function je(e){return N6+String(e)+")"}function j6(e){const t=Array.from(kv);return t[3]=Number(e),he(F6,t)}const W6=Object.assign(Object.assign({name:"common"},so),{baseColor:ue.neutralBase,primaryColor:ue.primaryDefault,primaryColorHover:ue.primaryHover,primaryColorPressed:ue.primaryActive,primaryColorSuppl:ue.primarySuppl,infoColor:ue.infoDefault,infoColorHover:ue.infoHover,infoColorPressed:ue.infoActive,infoColorSuppl:ue.infoSuppl,successColor:ue.successDefault,successColorHover:ue.successHover,successColorPressed:ue.successActive,successColorSuppl:ue.successSuppl,warningColor:ue.warningDefault,warningColorHover:ue.warningHover,warningColorPressed:ue.warningActive,warningColorSuppl:ue.warningSuppl,errorColor:ue.errorDefault,errorColorHover:ue.errorHover,errorColorPressed:ue.errorActive,errorColorSuppl:ue.errorSuppl,textColorBase:ue.neutralTextBase,textColor1:je(ue.alpha1),textColor2:je(ue.alpha2),textColor3:je(ue.alpha3),textColorDisabled:je(ue.alpha4),placeholderColor:je(ue.alpha4),placeholderColorDisabled:je(ue.alpha5),iconColor:je(ue.alpha4),iconColorDisabled:je(ue.alpha5),iconColorHover:je(Number(ue.alpha4)*1.25),iconColorPressed:je(Number(ue.alpha4)*.8),opacity1:ue.alpha1,opacity2:ue.alpha2,opacity3:ue.alpha3,opacity4:ue.alpha4,opacity5:ue.alpha5,dividerColor:je(ue.alphaDivider),borderColor:je(ue.alphaBorder),closeIconColorHover:je(Number(ue.alphaClose)),closeIconColor:je(Number(ue.alphaClose)),closeIconColorPressed:je(Number(ue.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:je(ue.alpha4),clearColorHover:gt(je(ue.alpha4),{alpha:1.25}),clearColorPressed:gt(je(ue.alpha4),{alpha:.8}),scrollbarColor:je(ue.alphaScrollbar),scrollbarColorHover:je(ue.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:je(ue.alphaProgressRail),railColor:je(ue.alphaRail),popoverColor:ue.neutralPopover,tableColor:ue.neutralCard,cardColor:ue.neutralCard,modalColor:ue.neutralModal,bodyColor:ue.neutralBody,tagColor:j6(ue.alphaTag),avatarColor:je(ue.alphaAvatar),invertedColor:ue.neutralBase,inputColor:je(ue.alphaInput),codeColor:je(ue.alphaCode),tabColor:je(ue.alphaTab),actionColor:je(ue.alphaAction),tableHeaderColor:je(ue.alphaAction),hoverColor:je(ue.alphaPending),tableColorHover:je(ue.alphaTablePending),tableColorStriped:je(ue.alphaTableStriped),pressedColor:je(ue.alphaPressed),opacityDisabled:ue.alphaDisabled,inputColorDisabled:je(ue.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),oe=W6,Ce={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},U6=dn(Ce.neutralBase),Iv=dn(Ce.neutralInvertBase),V6="rgba("+Iv.slice(0,3).join(", ")+", ";function gg(e){return V6+String(e)+")"}function Ot(e){const t=Array.from(Iv);return t[3]=Number(e),he(U6,t)}const K6=Object.assign(Object.assign({name:"common"},so),{baseColor:Ce.neutralBase,primaryColor:Ce.primaryDefault,primaryColorHover:Ce.primaryHover,primaryColorPressed:Ce.primaryActive,primaryColorSuppl:Ce.primarySuppl,infoColor:Ce.infoDefault,infoColorHover:Ce.infoHover,infoColorPressed:Ce.infoActive,infoColorSuppl:Ce.infoSuppl,successColor:Ce.successDefault,successColorHover:Ce.successHover,successColorPressed:Ce.successActive,successColorSuppl:Ce.successSuppl,warningColor:Ce.warningDefault,warningColorHover:Ce.warningHover,warningColorPressed:Ce.warningActive,warningColorSuppl:Ce.warningSuppl,errorColor:Ce.errorDefault,errorColorHover:Ce.errorHover,errorColorPressed:Ce.errorActive,errorColorSuppl:Ce.errorSuppl,textColorBase:Ce.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Ot(Ce.alpha4),placeholderColor:Ot(Ce.alpha4),placeholderColorDisabled:Ot(Ce.alpha5),iconColor:Ot(Ce.alpha4),iconColorHover:gt(Ot(Ce.alpha4),{lightness:.75}),iconColorPressed:gt(Ot(Ce.alpha4),{lightness:.9}),iconColorDisabled:Ot(Ce.alpha5),opacity1:Ce.alpha1,opacity2:Ce.alpha2,opacity3:Ce.alpha3,opacity4:Ce.alpha4,opacity5:Ce.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Ot(Number(Ce.alphaClose)),closeIconColorHover:Ot(Number(Ce.alphaClose)),closeIconColorPressed:Ot(Number(Ce.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Ot(Ce.alpha4),clearColorHover:gt(Ot(Ce.alpha4),{lightness:.75}),clearColorPressed:gt(Ot(Ce.alpha4),{lightness:.9}),scrollbarColor:gg(Ce.alphaScrollbar),scrollbarColorHover:gg(Ce.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ot(Ce.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Ce.neutralPopover,tableColor:Ce.neutralCard,cardColor:Ce.neutralCard,modalColor:Ce.neutralModal,bodyColor:Ce.neutralBody,tagColor:"#eee",avatarColor:Ot(Ce.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Ot(Ce.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Ce.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),ie=K6,q6={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Rv=e=>{const{textColorDisabled:t,iconColor:r,textColor2:n,fontSizeSmall:o,fontSizeMedium:i,fontSizeLarge:s,fontSizeHuge:a}=e;return Object.assign(Object.assign({},q6),{fontSizeSmall:o,fontSizeMedium:i,fontSizeLarge:s,fontSizeHuge:a,textColor:t,iconColor:r,extraTextColor:n})},G6={name:"Empty",common:ie,self:Rv},bn=G6,X6={name:"Empty",common:oe,self:Rv},Xo=X6,Ov=e=>{const{scrollbarColor:t,scrollbarColorHover:r}=e;return{color:t,colorHover:r}},Y6={name:"Scrollbar",common:ie,self:Ov},jt=Y6,Z6={name:"Scrollbar",common:oe,self:Ov},Qt=Z6,{cubicBezierEaseInOut:mg}=so;function na({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:r="0.2s",enterCubicBezier:n=mg,leaveCubicBezier:o=mg}={}){return[N(`&.${e}-transition-enter-active`,{transition:`all ${t} ${n}!important`}),N(`&.${e}-transition-leave-active`,{transition:`all ${r} ${o}!important`}),N(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),N(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const J6=U("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[N(">",[U("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[N("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),N(">",[U("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),N(">, +",[U("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[re("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[N(">",[ne("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),re("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[N(">",[ne("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),re("disabled",[N(">",[ne("scrollbar",{pointerEvents:"none"})])]),N(">",[ne("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[na(),N("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),Q6=Object.assign(Object.assign({},Qe.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Av=be({name:"Scrollbar",props:Q6,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:n}=It(e),o=ba("Scrollbar",n,t),i=W(null),s=W(null),a=W(null),l=W(null),c=W(null),u=W(null),d=W(null),f=W(null),h=W(null),p=W(null),b=W(null),w=W(0),g=W(0),m=W(!1),_=W(!1);let x=!1,C=!1,$,S,P=0,k=0,I=0,O=0;const R=U_(),H=q(()=>{const{value:ee}=f,{value:ge}=u,{value:Ee}=p;return ee===null||ge===null||Ee===null?0:Math.min(ee,Ee*ee/ge+e.size*1.5)}),B=q(()=>`${H.value}px`),Z=q(()=>{const{value:ee}=h,{value:ge}=d,{value:Ee}=b;return ee===null||ge===null||Ee===null?0:Ee*ee/ge+e.size*1.5}),G=q(()=>`${Z.value}px`),J=q(()=>{const{value:ee}=f,{value:ge}=w,{value:Ee}=u,{value:st}=p;if(ee===null||Ee===null||st===null)return 0;{const yt=Ee-ee;return yt?ge/yt*(st-H.value):0}}),se=q(()=>`${J.value}px`),ye=q(()=>{const{value:ee}=h,{value:ge}=g,{value:Ee}=d,{value:st}=b;if(ee===null||Ee===null||st===null)return 0;{const yt=Ee-ee;return yt?ge/yt*(st-Z.value):0}}),ke=q(()=>`${ye.value}px`),Te=q(()=>{const{value:ee}=f,{value:ge}=u;return ee!==null&&ge!==null&&ge>ee}),Ae=q(()=>{const{value:ee}=h,{value:ge}=d;return ee!==null&&ge!==null&&ge>ee}),ut=q(()=>{const{trigger:ee}=e;return ee==="none"||m.value}),Ve=q(()=>{const{trigger:ee}=e;return ee==="none"||_.value}),j=q(()=>{const{container:ee}=e;return ee?ee():s.value}),Q=q(()=>{const{content:ee}=e;return ee?ee():a.value}),te=FE(()=>{e.container||$e({top:w.value,left:g.value})}),de=()=>{te.isDeactivated||ce()},ae=ee=>{if(te.isDeactivated)return;const{onResize:ge}=e;ge&&ge(ee),ce()},$e=(ee,ge)=>{if(!e.scrollable)return;if(typeof ee=="number"){T(ge!=null?ge:0,ee,0,!1,"auto");return}const{left:Ee,top:st,index:yt,elSize:Vt,position:Xr,behavior:pt,el:Yr,debounce:os=!0}=ee;(Ee!==void 0||st!==void 0)&&T(Ee!=null?Ee:0,st!=null?st:0,0,!1,pt),Yr!==void 0?T(0,Yr.offsetTop,Yr.offsetHeight,os,pt):yt!==void 0&&Vt!==void 0?T(0,yt*Vt,Vt,os,pt):Xr==="bottom"?T(0,Number.MAX_SAFE_INTEGER,0,!1,pt):Xr==="top"&&T(0,0,0,!1,pt)},ve=(ee,ge)=>{if(!e.scrollable)return;const{value:Ee}=j;!Ee||(typeof ee=="object"?Ee.scrollBy(ee):Ee.scrollBy(ee,ge||0))};function T(ee,ge,Ee,st,yt){const{value:Vt}=j;if(!!Vt){if(st){const{scrollTop:Xr,offsetHeight:pt}=Vt;if(ge>Xr){ge+Ee<=Xr+pt||Vt.scrollTo({left:ee,top:ge+Ee-pt,behavior:yt});return}}Vt.scrollTo({left:ee,top:ge,behavior:yt})}}function v(){K(),Y(),ce()}function y(){L()}function L(){A(),D()}function A(){S!==void 0&&window.clearTimeout(S),S=window.setTimeout(()=>{_.value=!1},e.duration)}function D(){$!==void 0&&window.clearTimeout($),$=window.setTimeout(()=>{m.value=!1},e.duration)}function K(){$!==void 0&&window.clearTimeout($),m.value=!0}function Y(){S!==void 0&&window.clearTimeout(S),_.value=!0}function V(ee){const{onScroll:ge}=e;ge&&ge(ee),F()}function F(){const{value:ee}=j;ee&&(w.value=ee.scrollTop,g.value=ee.scrollLeft*(o!=null&&o.value?-1:1))}function M(){const{value:ee}=Q;ee&&(u.value=ee.offsetHeight,d.value=ee.offsetWidth);const{value:ge}=j;ge&&(f.value=ge.offsetHeight,h.value=ge.offsetWidth);const{value:Ee}=c,{value:st}=l;Ee&&(b.value=Ee.offsetWidth),st&&(p.value=st.offsetHeight)}function z(){const{value:ee}=j;ee&&(w.value=ee.scrollTop,g.value=ee.scrollLeft*(o!=null&&o.value?-1:1),f.value=ee.offsetHeight,h.value=ee.offsetWidth,u.value=ee.scrollHeight,d.value=ee.scrollWidth);const{value:ge}=c,{value:Ee}=l;ge&&(b.value=ge.offsetWidth),Ee&&(p.value=Ee.offsetHeight)}function ce(){!e.scrollable||(e.useUnifiedContainer?z():(M(),F()))}function pe(ee){var ge;return!(!((ge=i.value)===null||ge===void 0)&&ge.contains(Gs(ee)))}function Pe(ee){ee.preventDefault(),ee.stopPropagation(),C=!0,bt("mousemove",window,He,!0),bt("mouseup",window,Oe,!0),k=g.value,I=o!=null&&o.value?window.innerWidth-ee.clientX:ee.clientX}function He(ee){if(!C)return;$!==void 0&&window.clearTimeout($),S!==void 0&&window.clearTimeout(S);const{value:ge}=h,{value:Ee}=d,{value:st}=Z;if(ge===null||Ee===null)return;const Vt=(o!=null&&o.value?window.innerWidth-ee.clientX-I:ee.clientX-I)*(Ee-ge)/(ge-st),Xr=Ee-ge;let pt=k+Vt;pt=Math.min(Xr,pt),pt=Math.max(pt,0);const{value:Yr}=j;if(Yr){Yr.scrollLeft=pt*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:os}=e;os&&os(pt)}}function Oe(ee){ee.preventDefault(),ee.stopPropagation(),nt("mousemove",window,He,!0),nt("mouseup",window,Oe,!0),C=!1,ce(),pe(ee)&&L()}function lt(ee){ee.preventDefault(),ee.stopPropagation(),x=!0,bt("mousemove",window,Rt,!0),bt("mouseup",window,Ir,!0),P=w.value,O=ee.clientY}function Rt(ee){if(!x)return;$!==void 0&&window.clearTimeout($),S!==void 0&&window.clearTimeout(S);const{value:ge}=f,{value:Ee}=u,{value:st}=H;if(ge===null||Ee===null)return;const Vt=(ee.clientY-O)*(Ee-ge)/(ge-st),Xr=Ee-ge;let pt=P+Vt;pt=Math.min(Xr,pt),pt=Math.max(pt,0);const{value:Yr}=j;Yr&&(Yr.scrollTop=pt)}function Ir(ee){ee.preventDefault(),ee.stopPropagation(),nt("mousemove",window,Rt,!0),nt("mouseup",window,Ir,!0),x=!1,ce(),pe(ee)&&L()}$r(()=>{const{value:ee}=Ae,{value:ge}=Te,{value:Ee}=t,{value:st}=c,{value:yt}=l;st&&(ee?st.classList.remove(`${Ee}-scrollbar-rail--disabled`):st.classList.add(`${Ee}-scrollbar-rail--disabled`)),yt&&(ge?yt.classList.remove(`${Ee}-scrollbar-rail--disabled`):yt.classList.add(`${Ee}-scrollbar-rail--disabled`))}),Et(()=>{e.container||ce()}),wt(()=>{$!==void 0&&window.clearTimeout($),S!==void 0&&window.clearTimeout(S),nt("mousemove",window,Rt,!0),nt("mouseup",window,Ir,!0)});const Oa=Qe("Scrollbar","-scrollbar",J6,jt,e,t),yn=q(()=>{const{common:{cubicBezierEaseInOut:ee,scrollbarBorderRadius:ge,scrollbarHeight:Ee,scrollbarWidth:st},self:{color:yt,colorHover:Vt}}=Oa.value;return{"--n-scrollbar-bezier":ee,"--n-scrollbar-color":yt,"--n-scrollbar-color-hover":Vt,"--n-scrollbar-border-radius":ge,"--n-scrollbar-width":st,"--n-scrollbar-height":Ee}}),Gr=r?xr("scrollbar",void 0,yn,e):void 0;return Object.assign(Object.assign({},{scrollTo:$e,scrollBy:ve,sync:ce,syncUnifiedContainer:z,handleMouseEnterWrapper:v,handleMouseLeaveWrapper:y}),{mergedClsPrefix:t,rtlEnabled:o,containerScrollTop:w,wrapperRef:i,containerRef:s,contentRef:a,yRailRef:l,xRailRef:c,needYBar:Te,needXBar:Ae,yBarSizePx:B,xBarSizePx:G,yBarTopPx:se,xBarLeftPx:ke,isShowXBar:ut,isShowYBar:Ve,isIos:R,handleScroll:V,handleContentResize:de,handleContainerResize:ae,handleYScrollMouseDown:lt,handleXScrollMouseDown:Pe,cssVars:r?void 0:yn,themeClass:Gr==null?void 0:Gr.themeClass,onRender:Gr==null?void 0:Gr.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:r,triggerDisplayManually:n,rtlEnabled:o,internalHoistYRail:i}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const s=this.trigger==="none",a=()=>E("div",{ref:"yRailRef",class:[`${r}-scrollbar-rail`,`${r}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},E(s?op:Yt,s?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?E("div",{class:`${r}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var u,d;return(u=this.onRender)===null||u===void 0||u.call(this),E("div",mc(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${r}-scrollbar`,this.themeClass,o&&`${r}-scrollbar--rtl`],style:this.cssVars,onMouseenter:n?void 0:this.handleMouseEnterWrapper,onMouseleave:n?void 0:this.handleMouseLeaveWrapper}),[this.container?(d=t.default)===null||d===void 0?void 0:d.call(t):E("div",{role:"none",ref:"containerRef",class:[`${r}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},E(kp,{onResize:this.handleContentResize},{default:()=>E("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${r}-scrollbar-content`,this.contentClass]},t)})),i?null:a(),this.xScrollable&&E("div",{ref:"xRailRef",class:[`${r}-scrollbar-rail`,`${r}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},E(s?op:Yt,s?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?E("div",{class:`${r}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?l():E(kp,{onResize:this.handleContainerResize},{default:l});return i?E(Ge,null,c,a()):c}}),Bv=Av,eL=Av,tL={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Mv=e=>{const{borderRadius:t,popoverColor:r,textColor3:n,dividerColor:o,textColor2:i,primaryColorPressed:s,textColorDisabled:a,primaryColor:l,opacityDisabled:c,hoverColor:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:h,fontSizeHuge:p,heightSmall:b,heightMedium:w,heightLarge:g,heightHuge:m}=e;return Object.assign(Object.assign({},tL),{optionFontSizeSmall:d,optionFontSizeMedium:f,optionFontSizeLarge:h,optionFontSizeHuge:p,optionHeightSmall:b,optionHeightMedium:w,optionHeightLarge:g,optionHeightHuge:m,borderRadius:t,color:r,groupHeaderTextColor:n,actionDividerColor:o,optionTextColor:i,optionTextColorPressed:s,optionTextColorDisabled:a,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:i,loadingColor:l})},rL={name:"InternalSelectMenu",common:ie,peers:{Scrollbar:jt,Empty:bn},self:Mv},Ca=rL,nL={name:"InternalSelectMenu",common:oe,peers:{Scrollbar:Qt,Empty:Xo},self:Mv},wa=nL,{cubicBezierEaseIn:bg,cubicBezierEaseOut:vg}=so;function Hv({transformOrigin:e="inherit",duration:t=".2s",enterScale:r=".9",originalTransform:n="",originalTransition:o=""}={}){return[N("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${bg}, transform ${t} ${bg} ${o&&","+o}`}),N("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${vg}, transform ${t} ${vg} ${o&&","+o}`}),N("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${r})`}),N("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}const oL=U("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),iL=be({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Ec("-base-wave",oL,Be(e,"clsPrefix"));const t=W(null),r=W(!1);let n=null;return wt(()=>{n!==null&&window.clearTimeout(n)}),{active:r,selfRef:t,play(){n!==null&&(window.clearTimeout(n),r.value=!1,n=null),Ht(()=>{var o;(o=t.value)===null||o===void 0||o.offsetHeight,r.value=!0,n=window.setTimeout(()=>{r.value=!1,n=null},1e3)})}}},render(){const{clsPrefix:e}=this;return E("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),sL={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},Dv=e=>{const{boxShadow2:t,popoverColor:r,textColor2:n,borderRadius:o,fontSize:i,dividerColor:s}=e;return Object.assign(Object.assign({},sL),{fontSize:i,borderRadius:o,color:r,dividerColor:s,textColor:n,boxShadow:t})},aL={name:"Popover",common:ie,self:Dv},ao=aL,lL={name:"Popover",common:oe,self:Dv},Yo=lL,uu={top:"bottom",bottom:"top",left:"right",right:"left"},xt="var(--n-arrow-height) * 1.414",cL=N([U("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[N(">",[U("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Io("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Io("scrollable",[Io("show-header-or-footer","padding: var(--n-padding);")])]),ne("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ne("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),re("scrollable, show-header-or-footer",[ne("content",`
 padding: var(--n-padding);
 `)])]),U("popover-shared",`
 transform-origin: inherit;
 `,[U("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[U("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${xt});
 height: calc(${xt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),N("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),N("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),N("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),N("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),fr("top-start",`
 top: calc(${xt} / -2);
 left: calc(${Zr("top-start")} - var(--v-offset-left));
 `),fr("top",`
 top: calc(${xt} / -2);
 transform: translateX(calc(${xt} / -2)) rotate(45deg);
 left: 50%;
 `),fr("top-end",`
 top: calc(${xt} / -2);
 right: calc(${Zr("top-end")} + var(--v-offset-left));
 `),fr("bottom-start",`
 bottom: calc(${xt} / -2);
 left: calc(${Zr("bottom-start")} - var(--v-offset-left));
 `),fr("bottom",`
 bottom: calc(${xt} / -2);
 transform: translateX(calc(${xt} / -2)) rotate(45deg);
 left: 50%;
 `),fr("bottom-end",`
 bottom: calc(${xt} / -2);
 right: calc(${Zr("bottom-end")} + var(--v-offset-left));
 `),fr("left-start",`
 left: calc(${xt} / -2);
 top: calc(${Zr("left-start")} - var(--v-offset-top));
 `),fr("left",`
 left: calc(${xt} / -2);
 transform: translateY(calc(${xt} / -2)) rotate(45deg);
 top: 50%;
 `),fr("left-end",`
 left: calc(${xt} / -2);
 bottom: calc(${Zr("left-end")} + var(--v-offset-top));
 `),fr("right-start",`
 right: calc(${xt} / -2);
 top: calc(${Zr("right-start")} - var(--v-offset-top));
 `),fr("right",`
 right: calc(${xt} / -2);
 transform: translateY(calc(${xt} / -2)) rotate(45deg);
 top: 50%;
 `),fr("right-end",`
 right: calc(${xt} / -2);
 bottom: calc(${Zr("right-end")} + var(--v-offset-top));
 `),...E4({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const r=["right","left"].includes(t),n=r?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",a=`calc((${`var(--v-target-${n}, 0px)`} - ${xt}) / 2)`,l=Zr(o);return N(`[v-placement="${o}"] >`,[U("popover-shared",[re("center-arrow",[U("popover-arrow",`${t}: calc(max(${a}, ${l}) ${i?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function Zr(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function fr(e,t){const r=e.split("-")[0],n=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return N(`[v-placement="${e}"] >`,[U("popover-shared",`
 margin-${uu[r]}: var(--n-space);
 `,[re("show-arrow",`
 margin-${uu[r]}: var(--n-space-arrow);
 `),re("overlap",`
 margin: 0;
 `),k_("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${uu[r]}: auto;
 ${n}
 `,[U("popover-arrow",t)])])])}const zv=Object.assign(Object.assign({},Qe.props),{to:Ai.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),uL=({arrowStyle:e,clsPrefix:t})=>E("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},E("div",{class:`${t}-popover-arrow`,style:e})),dL=be({name:"PopoverBody",inheritAttrs:!1,props:zv,setup(e,{slots:t,attrs:r}){const{namespaceRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:i}=It(e),s=Qe("Popover","-popover",cL,ao,e,o),a=W(null),l=Se("NPopover"),c=W(null),u=W(e.show),d=W(!1);$r(()=>{const{show:S}=e;S&&!I_()&&!e.internalDeactivateImmediately&&(d.value=!0)});const f=q(()=>{const{trigger:S,onClickoutside:P}=e,k=[],{positionManuallyRef:{value:I}}=l;return I||(S==="click"&&!P&&k.push([Ju,x,void 0,{capture:!0}]),S==="hover"&&k.push([J_,_])),P&&k.push([Ju,x,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&d.value)&&k.push([Ri,e.show]),k}),h=q(()=>{const S=e.width==="trigger"?void 0:rn(e.width),P=[];S&&P.push({width:S});const{maxWidth:k,minWidth:I}=e;return k&&P.push({maxWidth:rn(k)}),I&&P.push({maxWidth:rn(I)}),i||P.push(p.value),P}),p=q(()=>{const{common:{cubicBezierEaseInOut:S,cubicBezierEaseIn:P,cubicBezierEaseOut:k},self:{space:I,spaceArrow:O,padding:R,fontSize:H,textColor:B,dividerColor:Z,color:G,boxShadow:J,borderRadius:se,arrowHeight:ye,arrowOffset:ke,arrowOffsetVertical:Te}}=s.value;return{"--n-box-shadow":J,"--n-bezier":S,"--n-bezier-ease-in":P,"--n-bezier-ease-out":k,"--n-font-size":H,"--n-text-color":B,"--n-color":G,"--n-divider-color":Z,"--n-border-radius":se,"--n-arrow-height":ye,"--n-arrow-offset":ke,"--n-arrow-offset-vertical":Te,"--n-padding":R,"--n-space":I,"--n-space-arrow":O}}),b=i?xr("popover",void 0,p,e):void 0;l.setBodyInstance({syncPosition:w}),wt(()=>{l.setBodyInstance(null)}),tt(Be(e,"show"),S=>{e.animated||(S?u.value=!0:u.value=!1)});function w(){var S;(S=a.value)===null||S===void 0||S.syncPosition()}function g(S){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(S)}function m(S){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(S)}function _(S){e.trigger==="hover"&&!C().contains(Gs(S))&&l.handleMouseMoveOutside(S)}function x(S){(e.trigger==="click"&&!C().contains(Gs(S))||e.onClickoutside)&&l.handleClickOutside(S)}function C(){return l.getTriggerElement()}Ze(of,c),Ze(nf,null),Ze(rf,null);function $(){if(b==null||b.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&d.value))return null;let P;const k=l.internalRenderBodyRef.value,{value:I}=o;if(k)P=k([`${I}-popover-shared`,b==null?void 0:b.themeClass.value,e.overlap&&`${I}-popover-shared--overlap`,e.showArrow&&`${I}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${I}-popover-shared--center-arrow`],c,h.value,g,m);else{const{value:O}=l.extraClassRef,{internalTrapFocus:R}=e,H=!Gu(t.header)||!Gu(t.footer),B=()=>{var Z;const G=H?E(Ge,null,ir(t.header,ye=>ye?E("div",{class:`${I}-popover__header`,style:e.headerStyle},ye):null),ir(t.default,ye=>ye?E("div",{class:`${I}-popover__content`,style:e.contentStyle},t):null),ir(t.footer,ye=>ye?E("div",{class:`${I}-popover__footer`,style:e.footerStyle},ye):null)):e.scrollable?(Z=t.default)===null||Z===void 0?void 0:Z.call(t):E("div",{class:`${I}-popover__content`,style:e.contentStyle},t),J=e.scrollable?E(eL,{contentClass:H?void 0:`${I}-popover__content`,contentStyle:H?void 0:e.contentStyle},{default:()=>G}):G,se=e.showArrow?uL({arrowStyle:e.arrowStyle,clsPrefix:I}):null;return[J,se]};P=E("div",mc({class:[`${I}-popover`,`${I}-popover-shared`,b==null?void 0:b.themeClass.value,O.map(Z=>`${I}-${Z}`),{[`${I}-popover--scrollable`]:e.scrollable,[`${I}-popover--show-header-or-footer`]:H,[`${I}-popover--raw`]:e.raw,[`${I}-popover-shared--overlap`]:e.overlap,[`${I}-popover-shared--show-arrow`]:e.showArrow,[`${I}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:h.value,onKeydown:l.handleKeydown,onMouseenter:g,onMouseleave:m},r),R?E(zb,{active:e.show,autoFocus:!0},{default:B}):B())}return Wr(P,f.value)}return{displayed:d,namespace:n,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:a,adjustedTo:Ai(e),followerEnabled:u,renderContentNode:$}},render(){return E(pE,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Ai.tdkey},{default:()=>this.animated?E(Yt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),fL=Object.keys(zv),hL={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function pL(e,t,r){hL[t].forEach(n=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[n],i=r[n];o?e.props[n]=(...s)=>{o(...s),i(...s)}:e.props[n]=i})}const gL=Mo("").type,Fv={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Ai.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},mL=Object.assign(Object.assign(Object.assign({},Qe.props),Fv),{internalOnAfterLeave:Function,internalRenderBody:Function}),bL=be({name:"Popover",inheritAttrs:!1,props:mL,__popover__:!0,setup(e){const t=Zi(),r=W(null),n=q(()=>e.show),o=W(e.defaultShow),i=Sb(n,o),s=fn(()=>e.disabled?!1:i.value),a=()=>{if(e.disabled)return!0;const{getDisabled:B}=e;return!!(B!=null&&B())},l=()=>a()?!1:i.value,c=j_(e,["arrow","showArrow"]),u=q(()=>e.overlap?!1:c.value);let d=null;const f=W(null),h=W(null),p=fn(()=>e.x!==void 0&&e.y!==void 0);function b(B){const{"onUpdate:show":Z,onUpdateShow:G,onShow:J,onHide:se}=e;o.value=B,Z&&ar(Z,B),G&&ar(G,B),B&&J&&ar(J,!0),B&&se&&ar(se,!1)}function w(){d&&d.syncPosition()}function g(){const{value:B}=f;B&&(window.clearTimeout(B),f.value=null)}function m(){const{value:B}=h;B&&(window.clearTimeout(B),h.value=null)}function _(){const B=a();if(e.trigger==="focus"&&!B){if(l())return;b(!0)}}function x(){const B=a();if(e.trigger==="focus"&&!B){if(!l())return;b(!1)}}function C(){const B=a();if(e.trigger==="hover"&&!B){if(m(),f.value!==null||l())return;const Z=()=>{b(!0),f.value=null},{delay:G}=e;G===0?Z():f.value=window.setTimeout(Z,G)}}function $(){const B=a();if(e.trigger==="hover"&&!B){if(g(),h.value!==null||!l())return;const Z=()=>{b(!1),h.value=null},{duration:G}=e;G===0?Z():h.value=window.setTimeout(Z,G)}}function S(){$()}function P(B){var Z;!l()||(e.trigger==="click"&&(g(),m(),b(!1)),(Z=e.onClickoutside)===null||Z===void 0||Z.call(e,B))}function k(){if(e.trigger==="click"&&!a()){g(),m();const B=!l();b(B)}}function I(B){!e.internalTrapFocus||B.key==="Escape"&&(g(),m(),b(!1))}function O(B){o.value=B}function R(){var B;return(B=r.value)===null||B===void 0?void 0:B.targetRef}function H(B){d=B}return Ze("NPopover",{getTriggerElement:R,handleKeydown:I,handleMouseEnter:C,handleMouseLeave:$,handleClickOutside:P,handleMouseMoveOutside:S,setBodyInstance:H,positionManuallyRef:p,isMountedRef:t,zIndexRef:Be(e,"zIndex"),extraClassRef:Be(e,"internalExtraClass"),internalRenderBodyRef:Be(e,"internalRenderBody")}),$r(()=>{i.value&&a()&&b(!1)}),{binderInstRef:r,positionManually:p,mergedShowConsideringDisabledProp:s,uncontrolledShow:o,mergedShowArrow:u,getMergedShow:l,setShow:O,handleClick:k,handleMouseEnter:C,handleMouseLeave:$,handleFocus:_,handleBlur:x,syncPosition:w}},render(){var e;const{positionManually:t,$slots:r}=this;let n,o=!1;if(!t&&(r.activator?n=Ku(r,"activator"):n=Ku(r,"trigger"),n)){n=Pr(n),n=n.type===gL?E("span",[n]):n;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=n.type)===null||e===void 0)&&e.__popover__)o=!0,n.props||(n.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[i,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:s}=this,a=[i,...s],l={onBlur:c=>{a.forEach(u=>{u.onBlur(c)})},onFocus:c=>{a.forEach(u=>{u.onFocus(c)})},onClick:c=>{a.forEach(u=>{u.onClick(c)})},onMouseenter:c=>{a.forEach(u=>{u.onMouseenter(c)})},onMouseleave:c=>{a.forEach(u=>{u.onMouseleave(c)})}};pL(n,s?"nested":t?"manual":this.trigger,l)}}return E(X_,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Wr(E("div",{style:{position:"fixed",inset:0}}),[[xc,{enabled:i,zIndex:this.zIndex}]]):null,t?null:E(Y_,null,{default:()=>n}),E(dL,Oi(this.$props,fL,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var s,a;return(a=(s=this.$slots).default)===null||a===void 0?void 0:a.call(s)},header:()=>{var s,a;return(a=(s=this.$slots).header)===null||a===void 0?void 0:a.call(s)},footer:()=>{var s,a;return(a=(s=this.$slots).footer)===null||a===void 0?void 0:a.call(s)}})]}})}}),Nv={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},vL={name:"Tag",common:oe,self(e){const{textColor2:t,primaryColorHover:r,primaryColorPressed:n,primaryColor:o,infoColor:i,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:u,tagColor:d,opacityDisabled:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,closeColorHover:w,closeColorPressed:g,borderRadiusSmall:m,fontSizeMini:_,fontSizeTiny:x,fontSizeSmall:C,fontSizeMedium:$,heightMini:S,heightTiny:P,heightSmall:k,heightMedium:I,buttonColor2Hover:O,buttonColor2Pressed:R,fontWeightStrong:H}=e;return Object.assign(Object.assign({},Nv),{closeBorderRadius:m,heightTiny:S,heightSmall:P,heightMedium:k,heightLarge:I,borderRadius:m,opacityDisabled:f,fontSizeTiny:_,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:$,fontWeightStrong:H,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:O,colorPressedCheckable:R,colorChecked:o,colorCheckedHover:r,colorCheckedPressed:n,border:`1px solid ${u}`,textColor:t,color:d,colorBordered:"#0000",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,closeColorHover:w,closeColorPressed:g,borderPrimary:`1px solid ${X(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:X(o,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:gt(o,{lightness:.7}),closeIconColorHoverPrimary:gt(o,{lightness:.7}),closeIconColorPressedPrimary:gt(o,{lightness:.7}),closeColorHoverPrimary:X(o,{alpha:.16}),closeColorPressedPrimary:X(o,{alpha:.12}),borderInfo:`1px solid ${X(i,{alpha:.3})}`,textColorInfo:i,colorInfo:X(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:gt(i,{alpha:.7}),closeIconColorHoverInfo:gt(i,{alpha:.7}),closeIconColorPressedInfo:gt(i,{alpha:.7}),closeColorHoverInfo:X(i,{alpha:.16}),closeColorPressedInfo:X(i,{alpha:.12}),borderSuccess:`1px solid ${X(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:X(s,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:gt(s,{alpha:.7}),closeIconColorHoverSuccess:gt(s,{alpha:.7}),closeIconColorPressedSuccess:gt(s,{alpha:.7}),closeColorHoverSuccess:X(s,{alpha:.16}),closeColorPressedSuccess:X(s,{alpha:.12}),borderWarning:`1px solid ${X(a,{alpha:.3})}`,textColorWarning:a,colorWarning:X(a,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:gt(a,{alpha:.7}),closeIconColorHoverWarning:gt(a,{alpha:.7}),closeIconColorPressedWarning:gt(a,{alpha:.7}),closeColorHoverWarning:X(a,{alpha:.16}),closeColorPressedWarning:X(a,{alpha:.11}),borderError:`1px solid ${X(l,{alpha:.3})}`,textColorError:l,colorError:X(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:gt(l,{alpha:.7}),closeIconColorHoverError:gt(l,{alpha:.7}),closeIconColorPressedError:gt(l,{alpha:.7}),closeColorHoverError:X(l,{alpha:.16}),closeColorPressedError:X(l,{alpha:.12})})}},jv=vL,yL=e=>{const{textColor2:t,primaryColorHover:r,primaryColorPressed:n,primaryColor:o,infoColor:i,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,borderRadiusSmall:w,fontSizeMini:g,fontSizeTiny:m,fontSizeSmall:_,fontSizeMedium:x,heightMini:C,heightTiny:$,heightSmall:S,heightMedium:P,closeColorHover:k,closeColorPressed:I,buttonColor2Hover:O,buttonColor2Pressed:R,fontWeightStrong:H}=e;return Object.assign(Object.assign({},Nv),{closeBorderRadius:w,heightTiny:C,heightSmall:$,heightMedium:S,heightLarge:P,borderRadius:w,opacityDisabled:d,fontSizeTiny:g,fontSizeSmall:m,fontSizeMedium:_,fontSizeLarge:x,fontWeightStrong:H,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:O,colorPressedCheckable:R,colorChecked:o,colorCheckedHover:r,colorCheckedPressed:n,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:b,closeColorHover:k,closeColorPressed:I,borderPrimary:`1px solid ${X(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:X(o,{alpha:.12}),colorBorderedPrimary:X(o,{alpha:.1}),closeIconColorPrimary:o,closeIconColorHoverPrimary:o,closeIconColorPressedPrimary:o,closeColorHoverPrimary:X(o,{alpha:.12}),closeColorPressedPrimary:X(o,{alpha:.18}),borderInfo:`1px solid ${X(i,{alpha:.3})}`,textColorInfo:i,colorInfo:X(i,{alpha:.12}),colorBorderedInfo:X(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:X(i,{alpha:.12}),closeColorPressedInfo:X(i,{alpha:.18}),borderSuccess:`1px solid ${X(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:X(s,{alpha:.12}),colorBorderedSuccess:X(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:X(s,{alpha:.12}),closeColorPressedSuccess:X(s,{alpha:.18}),borderWarning:`1px solid ${X(a,{alpha:.35})}`,textColorWarning:a,colorWarning:X(a,{alpha:.15}),colorBorderedWarning:X(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:X(a,{alpha:.12}),closeColorPressedWarning:X(a,{alpha:.18}),borderError:`1px solid ${X(l,{alpha:.23})}`,textColorError:l,colorError:X(l,{alpha:.1}),colorBorderedError:X(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:X(l,{alpha:.12}),closeColorPressedError:X(l,{alpha:.18})})},xL={name:"Tag",common:ie,self:yL},Wv=xL,Uv={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},CL=e=>{const{borderRadius:t,textColor2:r,textColorDisabled:n,inputColor:o,inputColorDisabled:i,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderColor:f,iconColor:h,iconColorDisabled:p,clearColor:b,clearColorHover:w,clearColorPressed:g,placeholderColor:m,placeholderColorDisabled:_,fontSizeTiny:x,fontSizeSmall:C,fontSizeMedium:$,fontSizeLarge:S,heightTiny:P,heightSmall:k,heightMedium:I,heightLarge:O}=e;return Object.assign(Object.assign({},Uv),{fontSizeTiny:x,fontSizeSmall:C,fontSizeMedium:$,fontSizeLarge:S,heightTiny:P,heightSmall:k,heightMedium:I,heightLarge:O,borderRadius:t,textColor:r,textColorDisabled:n,placeholderColor:m,placeholderColorDisabled:_,color:o,colorDisabled:i,colorActive:o,border:`1px solid ${f}`,borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${X(s,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${X(s,{alpha:.2})}`,caretColor:s,arrowColor:h,arrowColorDisabled:p,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${X(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${X(l,{alpha:.2})}`,colorActiveWarning:o,caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${X(u,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${X(u,{alpha:.2})}`,colorActiveError:o,caretColorError:u,clearColor:b,clearColorHover:w,clearColorPressed:g})},wL={name:"InternalSelection",common:ie,peers:{Popover:ao},self:CL},Cf=wL,SL={name:"InternalSelection",common:oe,peers:{Popover:Yo},self(e){const{borderRadius:t,textColor2:r,textColorDisabled:n,inputColor:o,inputColorDisabled:i,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,iconColor:f,iconColorDisabled:h,clearColor:p,clearColorHover:b,clearColorPressed:w,placeholderColor:g,placeholderColorDisabled:m,fontSizeTiny:_,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:$,heightTiny:S,heightSmall:P,heightMedium:k,heightLarge:I}=e;return Object.assign(Object.assign({},Uv),{fontSizeTiny:_,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:$,heightTiny:S,heightSmall:P,heightMedium:k,heightLarge:I,borderRadius:t,textColor:r,textColorDisabled:n,placeholderColor:g,placeholderColorDisabled:m,color:o,colorDisabled:i,colorActive:X(s,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${X(s,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${X(s,{alpha:.4})}`,caretColor:s,arrowColor:f,arrowColorDisabled:h,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${X(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${X(l,{alpha:.4})}`,colorActiveWarning:X(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${X(u,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${X(u,{alpha:.4})}`,colorActiveError:X(u,{alpha:.1}),caretColorError:u,clearColor:p,clearColorHover:b,clearColorPressed:w})}},wf=SL,{cubicBezierEaseInOut:_n}=so;function _L({duration:e=".2s",delay:t=".1s"}={}){return[N("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),N("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),N("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${_n},
 max-width ${e} ${_n} ${t},
 margin-left ${e} ${_n} ${t},
 margin-right ${e} ${_n} ${t};
 `),N("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${_n} ${t},
 max-width ${e} ${_n},
 margin-left ${e} ${_n},
 margin-right ${e} ${_n};
 `)]}const Vv={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},EL={name:"Alert",common:oe,self(e){const{lineHeight:t,borderRadius:r,fontWeightStrong:n,dividerColor:o,inputColor:i,textColor1:s,textColor2:a,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,infoColorSuppl:h,successColorSuppl:p,warningColorSuppl:b,errorColorSuppl:w,fontSize:g}=e;return Object.assign(Object.assign({},Vv),{fontSize:g,lineHeight:t,titleFontWeight:n,borderRadius:r,border:`1px solid ${o}`,color:i,titleTextColor:s,iconColor:a,contentTextColor:a,closeBorderRadius:r,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,borderInfo:`1px solid ${X(h,{alpha:.35})}`,colorInfo:X(h,{alpha:.25}),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:a,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:u,closeIconColorHoverInfo:d,closeIconColorPressedInfo:f,borderSuccess:`1px solid ${X(p,{alpha:.35})}`,colorSuccess:X(p,{alpha:.25}),titleTextColorSuccess:s,iconColorSuccess:p,contentTextColorSuccess:a,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:u,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:f,borderWarning:`1px solid ${X(b,{alpha:.35})}`,colorWarning:X(b,{alpha:.25}),titleTextColorWarning:s,iconColorWarning:b,contentTextColorWarning:a,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:u,closeIconColorHoverWarning:d,closeIconColorPressedWarning:f,borderError:`1px solid ${X(w,{alpha:.35})}`,colorError:X(w,{alpha:.25}),titleTextColorError:s,iconColorError:w,contentTextColorError:a,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:u,closeIconColorHoverError:d,closeIconColorPressedError:f})}},TL=EL,$L=e=>{const{lineHeight:t,borderRadius:r,fontWeightStrong:n,baseColor:o,dividerColor:i,actionColor:s,textColor1:a,textColor2:l,closeColorHover:c,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:h,infoColor:p,successColor:b,warningColor:w,errorColor:g,fontSize:m}=e;return Object.assign(Object.assign({},Vv),{fontSize:m,lineHeight:t,titleFontWeight:n,borderRadius:r,border:`1px solid ${i}`,color:s,titleTextColor:a,iconColor:l,contentTextColor:l,closeBorderRadius:r,closeColorHover:c,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:h,borderInfo:`1px solid ${he(o,X(p,{alpha:.25}))}`,colorInfo:he(o,X(p,{alpha:.08})),titleTextColorInfo:a,iconColorInfo:p,contentTextColorInfo:l,closeColorHoverInfo:c,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${he(o,X(b,{alpha:.25}))}`,colorSuccess:he(o,X(b,{alpha:.08})),titleTextColorSuccess:a,iconColorSuccess:b,contentTextColorSuccess:l,closeColorHoverSuccess:c,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${he(o,X(w,{alpha:.33}))}`,colorWarning:he(o,X(w,{alpha:.08})),titleTextColorWarning:a,iconColorWarning:w,contentTextColorWarning:l,closeColorHoverWarning:c,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:h,borderError:`1px solid ${he(o,X(g,{alpha:.25}))}`,colorError:he(o,X(g,{alpha:.08})),titleTextColorError:a,iconColorError:g,contentTextColorError:l,closeColorHoverError:c,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:h})},PL={name:"Alert",common:ie,self:$L},LL=PL,{cubicBezierEaseInOut:Or,cubicBezierEaseOut:kL,cubicBezierEaseIn:IL}=so;function ld({overflow:e="hidden",duration:t=".3s",originalTransition:r="",leavingDelay:n="0s",foldPadding:o=!1,enterToProps:i=void 0,leaveToProps:s=void 0,reverse:a=!1}={}){const l=a?"leave":"enter",c=a?"enter":"leave";return[N(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),N(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),N(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Or} ${n},
 opacity ${t} ${kL} ${n},
 margin-top ${t} ${Or} ${n},
 margin-bottom ${t} ${Or} ${n},
 padding-top ${t} ${Or} ${n},
 padding-bottom ${t} ${Or} ${n}
 ${r?","+r:""}
 `),N(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Or},
 opacity ${t} ${IL},
 margin-top ${t} ${Or},
 margin-bottom ${t} ${Or},
 padding-top ${t} ${Or},
 padding-bottom ${t} ${Or}
 ${r?","+r:""}
 `)]}const RL={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},Kv=e=>{const{borderRadius:t,railColor:r,primaryColor:n,primaryColorHover:o,primaryColorPressed:i,textColor2:s}=e;return Object.assign(Object.assign({},RL),{borderRadius:t,railColor:r,railColorActive:n,linkColor:X(n,{alpha:.15}),linkTextColor:s,linkTextColorHover:o,linkTextColorPressed:i,linkTextColorActive:n})},OL={name:"Anchor",common:ie,self:Kv},AL=OL,BL={name:"Anchor",common:oe,self:Kv},ML=BL,HL=Vo&&"chrome"in window;Vo&&navigator.userAgent.includes("Firefox");const DL=Vo&&navigator.userAgent.includes("Safari")&&!HL,qv={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},zL={name:"Input",common:oe,self(e){const{textColor2:t,textColor3:r,textColorDisabled:n,primaryColor:o,primaryColorHover:i,inputColor:s,inputColorDisabled:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderRadius:f,lineHeight:h,fontSizeTiny:p,fontSizeSmall:b,fontSizeMedium:w,fontSizeLarge:g,heightTiny:m,heightSmall:_,heightMedium:x,heightLarge:C,clearColor:$,clearColorHover:S,clearColorPressed:P,placeholderColor:k,placeholderColorDisabled:I,iconColor:O,iconColorDisabled:R,iconColorHover:H,iconColorPressed:B}=e;return Object.assign(Object.assign({},qv),{countTextColorDisabled:n,countTextColor:r,heightTiny:m,heightSmall:_,heightMedium:x,heightLarge:C,fontSizeTiny:p,fontSizeSmall:b,fontSizeMedium:w,fontSizeLarge:g,lineHeight:h,lineHeightTextarea:h,borderRadius:f,iconSize:"16px",groupLabelColor:s,textColor:t,textColorDisabled:n,textDecorationColor:t,groupLabelTextColor:t,caretColor:o,placeholderColor:k,placeholderColorDisabled:I,color:s,colorDisabled:a,colorFocus:X(o,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${X(o,{alpha:.3})}`,loadingColor:o,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:X(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${X(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,colorFocusError:X(u,{alpha:.1}),borderFocusError:`1px solid ${d}`,boxShadowFocusError:`0 0 8px 0 ${X(u,{alpha:.3})}`,caretColorError:u,clearColor:$,clearColorHover:S,clearColorPressed:P,iconColor:O,iconColorDisabled:R,iconColorHover:H,iconColorPressed:B,suffixTextColor:t})}},Cr=zL,FL=e=>{const{textColor2:t,textColor3:r,textColorDisabled:n,primaryColor:o,primaryColorHover:i,inputColor:s,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:f,borderRadius:h,lineHeight:p,fontSizeTiny:b,fontSizeSmall:w,fontSizeMedium:g,fontSizeLarge:m,heightTiny:_,heightSmall:x,heightMedium:C,heightLarge:$,actionColor:S,clearColor:P,clearColorHover:k,clearColorPressed:I,placeholderColor:O,placeholderColorDisabled:R,iconColor:H,iconColorDisabled:B,iconColorHover:Z,iconColorPressed:G}=e;return Object.assign(Object.assign({},qv),{countTextColorDisabled:n,countTextColor:r,heightTiny:_,heightSmall:x,heightMedium:C,heightLarge:$,fontSizeTiny:b,fontSizeSmall:w,fontSizeMedium:g,fontSizeLarge:m,lineHeight:p,lineHeightTextarea:p,borderRadius:h,iconSize:"16px",groupLabelColor:S,groupLabelTextColor:t,textColor:t,textColorDisabled:n,textDecorationColor:t,caretColor:o,placeholderColor:O,placeholderColorDisabled:R,color:s,colorDisabled:a,colorFocus:s,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${X(o,{alpha:.2})}`,loadingColor:o,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${X(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${f}`,colorFocusError:s,borderFocusError:`1px solid ${f}`,boxShadowFocusError:`0 0 0 2px ${X(d,{alpha:.2})}`,caretColorError:d,clearColor:P,clearColorHover:k,clearColorPressed:I,iconColor:H,iconColorDisabled:B,iconColorHover:Z,iconColorPressed:G,suffixTextColor:t})},NL={name:"Input",common:ie,self:FL},wr=NL;function Gv(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const jL={name:"AutoComplete",common:ie,peers:{InternalSelectMenu:Ca,Input:wr},self:Gv},WL=jL,UL={name:"AutoComplete",common:oe,peers:{InternalSelectMenu:wa,Input:Cr},self:Gv},VL=UL,du=Vo&&"loading"in document.createElement("img"),KL=(e={})=>{var t;const{root:r=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof r=="string"?document.querySelector(r):r)||document.documentElement})}},fu=new WeakMap,hu=new WeakMap,pu=new WeakMap,qL=(e,t,r)=>{if(!e)return()=>{};const n=KL(t),{root:o}=n.options;let i;const s=fu.get(o);s?i=s:(i=new Map,fu.set(o,i));let a,l;i.has(n.hash)?(l=i.get(n.hash),l[1].has(e)||(a=l[0],l[1].add(e),a.observe(e))):(a=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const h=hu.get(f.target),p=pu.get(f.target);h&&h(),p&&(p.value=!0)}})},n.options),a.observe(e),l=[a,new Set([e])],i.set(n.hash,l));let c=!1;const u=()=>{c||(hu.delete(e),pu.delete(e),c=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(n.hash),i.size||fu.delete(o))};return hu.set(e,u),pu.set(e,r),u},Xv=e=>{const{borderRadius:t,avatarColor:r,cardColor:n,fontSize:o,heightTiny:i,heightSmall:s,heightMedium:a,heightLarge:l,heightHuge:c,modalColor:u,popoverColor:d}=e;return{borderRadius:t,fontSize:o,border:`2px solid ${n}`,heightTiny:i,heightSmall:s,heightMedium:a,heightLarge:l,heightHuge:c,color:he(n,r),colorModal:he(u,r),colorPopover:he(d,r)}},GL={name:"Avatar",common:ie,self:Xv},Yv=GL,XL={name:"Avatar",common:oe,self:Xv},Zv=XL,Jv=()=>({gap:"-12px"}),YL={name:"AvatarGroup",common:ie,peers:{Avatar:Yv},self:Jv},ZL=YL,JL={name:"AvatarGroup",common:oe,peers:{Avatar:Zv},self:Jv},QL=JL,Qv={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},ek={name:"BackTop",common:oe,self(e){const{popoverColor:t,textColor2:r,primaryColorHover:n,primaryColorPressed:o}=e;return Object.assign(Object.assign({},Qv),{color:t,textColor:r,iconColor:r,iconColorHover:n,iconColorPressed:o,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},tk=ek,rk=e=>{const{popoverColor:t,textColor2:r,primaryColorHover:n,primaryColorPressed:o}=e;return Object.assign(Object.assign({},Qv),{color:t,textColor:r,iconColor:r,iconColorHover:n,iconColorPressed:o,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},nk={name:"BackTop",common:ie,self:rk},ok=nk,ik={name:"Badge",common:oe,self(e){const{errorColorSuppl:t,infoColorSuppl:r,successColorSuppl:n,warningColorSuppl:o,fontFamily:i}=e;return{color:t,colorInfo:r,colorSuccess:n,colorError:t,colorWarning:o,fontSize:"12px",fontFamily:i}}},sk=ik,ak=e=>{const{errorColor:t,infoColor:r,successColor:n,warningColor:o,fontFamily:i}=e;return{color:t,colorInfo:r,colorSuccess:n,colorError:t,colorWarning:o,fontSize:"12px",fontFamily:i}},lk={name:"Badge",common:ie,self:ak},ck=lk,uk={fontWeightActive:"400"},e1=e=>{const{fontSize:t,textColor3:r,textColor2:n,borderRadius:o,buttonColor2Hover:i,buttonColor2Pressed:s}=e;return Object.assign(Object.assign({},uk),{fontSize:t,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:n,itemTextColorActive:n,itemBorderRadius:o,itemColorHover:i,itemColorPressed:s,separatorColor:r})},dk={name:"Breadcrumb",common:ie,self:e1},fk=dk,hk={name:"Breadcrumb",common:oe,self:e1},pk=hk;function go(e){return he(e,[255,255,255,.16])}function el(e){return he(e,[0,0,0,.12])}const gk="n-button-group",mk={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},t1=e=>{const{heightTiny:t,heightSmall:r,heightMedium:n,heightLarge:o,borderRadius:i,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,textColor2:d,textColor3:f,primaryColorHover:h,primaryColorPressed:p,borderColor:b,primaryColor:w,baseColor:g,infoColor:m,infoColorHover:_,infoColorPressed:x,successColor:C,successColorHover:$,successColorPressed:S,warningColor:P,warningColorHover:k,warningColorPressed:I,errorColor:O,errorColorHover:R,errorColorPressed:H,fontWeight:B,buttonColor2:Z,buttonColor2Hover:G,buttonColor2Pressed:J,fontWeightStrong:se}=e;return Object.assign(Object.assign({},mk),{heightTiny:t,heightSmall:r,heightMedium:n,heightLarge:o,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:Z,colorSecondaryHover:G,colorSecondaryPressed:J,colorTertiary:Z,colorTertiaryHover:G,colorTertiaryPressed:J,colorQuaternary:"#0000",colorQuaternaryHover:G,colorQuaternaryPressed:J,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:d,textColorTertiary:f,textColorHover:h,textColorPressed:p,textColorFocus:h,textColorDisabled:d,textColorText:d,textColorTextHover:h,textColorTextPressed:p,textColorTextFocus:h,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:h,textColorGhostPressed:p,textColorGhostFocus:h,textColorGhostDisabled:d,border:`1px solid ${b}`,borderHover:`1px solid ${h}`,borderPressed:`1px solid ${p}`,borderFocus:`1px solid ${h}`,borderDisabled:`1px solid ${b}`,rippleColor:w,colorPrimary:w,colorHoverPrimary:h,colorPressedPrimary:p,colorFocusPrimary:h,colorDisabledPrimary:w,textColorPrimary:g,textColorHoverPrimary:g,textColorPressedPrimary:g,textColorFocusPrimary:g,textColorDisabledPrimary:g,textColorTextPrimary:w,textColorTextHoverPrimary:h,textColorTextPressedPrimary:p,textColorTextFocusPrimary:h,textColorTextDisabledPrimary:d,textColorGhostPrimary:w,textColorGhostHoverPrimary:h,textColorGhostPressedPrimary:p,textColorGhostFocusPrimary:h,textColorGhostDisabledPrimary:w,borderPrimary:`1px solid ${w}`,borderHoverPrimary:`1px solid ${h}`,borderPressedPrimary:`1px solid ${p}`,borderFocusPrimary:`1px solid ${h}`,borderDisabledPrimary:`1px solid ${w}`,rippleColorPrimary:w,colorInfo:m,colorHoverInfo:_,colorPressedInfo:x,colorFocusInfo:_,colorDisabledInfo:m,textColorInfo:g,textColorHoverInfo:g,textColorPressedInfo:g,textColorFocusInfo:g,textColorDisabledInfo:g,textColorTextInfo:m,textColorTextHoverInfo:_,textColorTextPressedInfo:x,textColorTextFocusInfo:_,textColorTextDisabledInfo:d,textColorGhostInfo:m,textColorGhostHoverInfo:_,textColorGhostPressedInfo:x,textColorGhostFocusInfo:_,textColorGhostDisabledInfo:m,borderInfo:`1px solid ${m}`,borderHoverInfo:`1px solid ${_}`,borderPressedInfo:`1px solid ${x}`,borderFocusInfo:`1px solid ${_}`,borderDisabledInfo:`1px solid ${m}`,rippleColorInfo:m,colorSuccess:C,colorHoverSuccess:$,colorPressedSuccess:S,colorFocusSuccess:$,colorDisabledSuccess:C,textColorSuccess:g,textColorHoverSuccess:g,textColorPressedSuccess:g,textColorFocusSuccess:g,textColorDisabledSuccess:g,textColorTextSuccess:C,textColorTextHoverSuccess:$,textColorTextPressedSuccess:S,textColorTextFocusSuccess:$,textColorTextDisabledSuccess:d,textColorGhostSuccess:C,textColorGhostHoverSuccess:$,textColorGhostPressedSuccess:S,textColorGhostFocusSuccess:$,textColorGhostDisabledSuccess:C,borderSuccess:`1px solid ${C}`,borderHoverSuccess:`1px solid ${$}`,borderPressedSuccess:`1px solid ${S}`,borderFocusSuccess:`1px solid ${$}`,borderDisabledSuccess:`1px solid ${C}`,rippleColorSuccess:C,colorWarning:P,colorHoverWarning:k,colorPressedWarning:I,colorFocusWarning:k,colorDisabledWarning:P,textColorWarning:g,textColorHoverWarning:g,textColorPressedWarning:g,textColorFocusWarning:g,textColorDisabledWarning:g,textColorTextWarning:P,textColorTextHoverWarning:k,textColorTextPressedWarning:I,textColorTextFocusWarning:k,textColorTextDisabledWarning:d,textColorGhostWarning:P,textColorGhostHoverWarning:k,textColorGhostPressedWarning:I,textColorGhostFocusWarning:k,textColorGhostDisabledWarning:P,borderWarning:`1px solid ${P}`,borderHoverWarning:`1px solid ${k}`,borderPressedWarning:`1px solid ${I}`,borderFocusWarning:`1px solid ${k}`,borderDisabledWarning:`1px solid ${P}`,rippleColorWarning:P,colorError:O,colorHoverError:R,colorPressedError:H,colorFocusError:R,colorDisabledError:O,textColorError:g,textColorHoverError:g,textColorPressedError:g,textColorFocusError:g,textColorDisabledError:g,textColorTextError:O,textColorTextHoverError:R,textColorTextPressedError:H,textColorTextFocusError:R,textColorTextDisabledError:d,textColorGhostError:O,textColorGhostHoverError:R,textColorGhostPressedError:H,textColorGhostFocusError:R,textColorGhostDisabledError:O,borderError:`1px solid ${O}`,borderHoverError:`1px solid ${R}`,borderPressedError:`1px solid ${H}`,borderFocusError:`1px solid ${R}`,borderDisabledError:`1px solid ${O}`,rippleColorError:O,waveOpacity:"0.6",fontWeight:B,fontWeightStrong:se})},bk={name:"Button",common:ie,self:t1},Wt=bk,vk={name:"Button",common:oe,self(e){const t=t1(e);return t.waveOpacity="0.8",t.colorOpacitySecondary="0.16",t.colorOpacitySecondaryHover="0.2",t.colorOpacitySecondaryPressed="0.12",t}},er=vk,yk=N([U("button",`
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
 `,[re("color",[ne("border",{borderColor:"var(--n-border-color)"}),re("disabled",[ne("border",{borderColor:"var(--n-border-color-disabled)"})]),Io("disabled",[N("&:focus",[ne("state-border",{borderColor:"var(--n-border-color-focus)"})]),N("&:hover",[ne("state-border",{borderColor:"var(--n-border-color-hover)"})]),N("&:active",[ne("state-border",{borderColor:"var(--n-border-color-pressed)"})]),re("pressed",[ne("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),re("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[ne("border",{border:"var(--n-border-disabled)"})]),Io("disabled",[N("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[ne("state-border",{border:"var(--n-border-focus)"})]),N("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[ne("state-border",{border:"var(--n-border-hover)"})]),N("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[ne("state-border",{border:"var(--n-border-pressed)"})]),re("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[ne("state-border",{border:"var(--n-border-pressed)"})])]),re("loading","cursor: wait;"),U("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[re("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Vo&&"MozBoxSizing"in document.createElement("div").style?N("&::moz-focus-inner",{border:0}):null,ne("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),ne("border",{border:"var(--n-border)"}),ne("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),ne("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[U("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ra({top:"50%",originalTransform:"translateY(-50%)"})]),_L()]),ne("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[N("~",[ne("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),re("block",`
 display: flex;
 width: 100%;
 `),re("dashed",[ne("border, state-border",{borderStyle:"dashed !important"})]),re("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),N("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),N("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),xk=Object.assign(Object.assign({},Qe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!DL}}),Ck=be({name:"Button",props:xk,setup(e){const t=W(null),r=W(null),n=W(!1),o=fn(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=Se(gk,{}),{mergedSizeRef:s}=Fb({},{defaultSize:"medium",mergedSize:x=>{const{size:C}=e;if(C)return C;const{size:$}=i;if($)return $;const{mergedSize:S}=x||{};return S?S.value:"medium"}}),a=q(()=>e.focusable&&!e.disabled),l=x=>{var C;a.value||x.preventDefault(),!e.nativeFocusBehavior&&(x.preventDefault(),!e.disabled&&a.value&&((C=t.value)===null||C===void 0||C.focus({preventScroll:!0})))},c=x=>{var C;if(!e.disabled&&!e.loading){const{onClick:$}=e;$&&ar($,x),e.text||(C=r.value)===null||C===void 0||C.play()}},u=x=>{switch(x.key){case"Enter":if(!e.keyboard)return;n.value=!1}},d=x=>{switch(x.key){case"Enter":if(!e.keyboard||e.loading){x.preventDefault();return}n.value=!0}},f=()=>{n.value=!1},{inlineThemeDisabled:h,mergedClsPrefixRef:p,mergedRtlRef:b}=It(e),w=Qe("Button","-button",yk,Wt,e,p),g=ba("Button",b,p),m=q(()=>{const x=w.value,{common:{cubicBezierEaseInOut:C,cubicBezierEaseOut:$},self:S}=x,{rippleDuration:P,opacityDisabled:k,fontWeight:I,fontWeightStrong:O}=S,R=s.value,{dashed:H,type:B,ghost:Z,text:G,color:J,round:se,circle:ye,textColor:ke,secondary:Te,tertiary:Ae,quaternary:ut,strong:Ve}=e,j={"font-weight":Ve?O:I};let Q={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const te=B==="tertiary",de=B==="default",ae=te?"default":B;if(G){const V=ke||J;Q={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":V||S[we("textColorText",ae)],"--n-text-color-hover":V?go(V):S[we("textColorTextHover",ae)],"--n-text-color-pressed":V?el(V):S[we("textColorTextPressed",ae)],"--n-text-color-focus":V?go(V):S[we("textColorTextHover",ae)],"--n-text-color-disabled":V||S[we("textColorTextDisabled",ae)]}}else if(Z||H){const V=ke||J;Q={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":J||S[we("rippleColor",ae)],"--n-text-color":V||S[we("textColorGhost",ae)],"--n-text-color-hover":V?go(V):S[we("textColorGhostHover",ae)],"--n-text-color-pressed":V?el(V):S[we("textColorGhostPressed",ae)],"--n-text-color-focus":V?go(V):S[we("textColorGhostHover",ae)],"--n-text-color-disabled":V||S[we("textColorGhostDisabled",ae)]}}else if(Te){const V=de?S.textColor:te?S.textColorTertiary:S[we("color",ae)],F=J||V,M=B!=="default"&&B!=="tertiary";Q={"--n-color":M?X(F,{alpha:Number(S.colorOpacitySecondary)}):S.colorSecondary,"--n-color-hover":M?X(F,{alpha:Number(S.colorOpacitySecondaryHover)}):S.colorSecondaryHover,"--n-color-pressed":M?X(F,{alpha:Number(S.colorOpacitySecondaryPressed)}):S.colorSecondaryPressed,"--n-color-focus":M?X(F,{alpha:Number(S.colorOpacitySecondaryHover)}):S.colorSecondaryHover,"--n-color-disabled":S.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":F,"--n-text-color-hover":F,"--n-text-color-pressed":F,"--n-text-color-focus":F,"--n-text-color-disabled":F}}else if(Ae||ut){const V=de?S.textColor:te?S.textColorTertiary:S[we("color",ae)],F=J||V;Ae?(Q["--n-color"]=S.colorTertiary,Q["--n-color-hover"]=S.colorTertiaryHover,Q["--n-color-pressed"]=S.colorTertiaryPressed,Q["--n-color-focus"]=S.colorSecondaryHover,Q["--n-color-disabled"]=S.colorTertiary):(Q["--n-color"]=S.colorQuaternary,Q["--n-color-hover"]=S.colorQuaternaryHover,Q["--n-color-pressed"]=S.colorQuaternaryPressed,Q["--n-color-focus"]=S.colorQuaternaryHover,Q["--n-color-disabled"]=S.colorQuaternary),Q["--n-ripple-color"]="#0000",Q["--n-text-color"]=F,Q["--n-text-color-hover"]=F,Q["--n-text-color-pressed"]=F,Q["--n-text-color-focus"]=F,Q["--n-text-color-disabled"]=F}else Q={"--n-color":J||S[we("color",ae)],"--n-color-hover":J?go(J):S[we("colorHover",ae)],"--n-color-pressed":J?el(J):S[we("colorPressed",ae)],"--n-color-focus":J?go(J):S[we("colorFocus",ae)],"--n-color-disabled":J||S[we("colorDisabled",ae)],"--n-ripple-color":J||S[we("rippleColor",ae)],"--n-text-color":ke||(J?S.textColorPrimary:te?S.textColorTertiary:S[we("textColor",ae)]),"--n-text-color-hover":ke||(J?S.textColorHoverPrimary:S[we("textColorHover",ae)]),"--n-text-color-pressed":ke||(J?S.textColorPressedPrimary:S[we("textColorPressed",ae)]),"--n-text-color-focus":ke||(J?S.textColorFocusPrimary:S[we("textColorFocus",ae)]),"--n-text-color-disabled":ke||(J?S.textColorDisabledPrimary:S[we("textColorDisabled",ae)])};let $e={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};G?$e={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:$e={"--n-border":S[we("border",ae)],"--n-border-hover":S[we("borderHover",ae)],"--n-border-pressed":S[we("borderPressed",ae)],"--n-border-focus":S[we("borderFocus",ae)],"--n-border-disabled":S[we("borderDisabled",ae)]};const{[we("height",R)]:ve,[we("fontSize",R)]:T,[we("padding",R)]:v,[we("paddingRound",R)]:y,[we("iconSize",R)]:L,[we("borderRadius",R)]:A,[we("iconMargin",R)]:D,waveOpacity:K}=S,Y={"--n-width":ye&&!G?ve:"initial","--n-height":G?"initial":ve,"--n-font-size":T,"--n-padding":ye||G?"initial":se?y:v,"--n-icon-size":L,"--n-icon-margin":D,"--n-border-radius":G?"initial":ye||se?ve:A};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":C,"--n-bezier-ease-out":$,"--n-ripple-duration":P,"--n-opacity-disabled":k,"--n-wave-opacity":K},j),Q),$e),Y)}),_=h?xr("button",q(()=>{let x="";const{dashed:C,type:$,ghost:S,text:P,color:k,round:I,circle:O,textColor:R,secondary:H,tertiary:B,quaternary:Z,strong:G}=e;C&&(x+="a"),S&&(x+="b"),P&&(x+="c"),I&&(x+="d"),O&&(x+="e"),H&&(x+="f"),B&&(x+="g"),Z&&(x+="h"),G&&(x+="i"),k&&(x+="j"+sp(k)),R&&(x+="k"+sp(R));const{value:J}=s;return x+="l"+J[0],x+="m"+$[0],x}),m,e):void 0;return{selfElRef:t,waveElRef:r,mergedClsPrefix:p,mergedFocusable:a,mergedSize:s,showBorder:o,enterPressed:n,rtlEnabled:g,handleMousedown:l,handleKeydown:d,handleBlur:f,handleKeyup:u,handleClick:c,customColorCssVars:q(()=>{const{color:x}=e;if(!x)return null;const C=go(x);return{"--n-border-color":x,"--n-border-color-hover":C,"--n-border-color-pressed":el(x),"--n-border-color-focus":C,"--n-border-color-disabled":x}}),cssVars:h?void 0:m,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:r}=this;r==null||r();const n=ir(this.$slots.default,o=>o&&E("span",{class:`${e}-button__content`},o));return E(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&n,E($c,{width:!0},{default:()=>ir(this.$slots.icon,o=>(this.loading||this.renderIcon||o)&&E("span",{class:`${e}-button__icon`,style:{margin:Gu(this.$slots.default)?"0":""}},E(Tc,null,{default:()=>this.loading?E(Lv,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):E("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():o)})))}),this.iconPlacement==="left"&&n,this.text?null:E(iL,{ref:"waveElRef",clsPrefix:e}),this.showBorder?E("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?E("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),ai=Ck,wk={titleFontSize:"22px"},r1=e=>{const{borderRadius:t,fontSize:r,lineHeight:n,textColor2:o,textColor1:i,textColorDisabled:s,dividerColor:a,fontWeightStrong:l,primaryColor:c,baseColor:u,hoverColor:d,cardColor:f,modalColor:h,popoverColor:p}=e;return Object.assign(Object.assign({},wk),{borderRadius:t,borderColor:he(f,a),borderColorModal:he(h,a),borderColorPopover:he(p,a),textColor:o,titleFontWeight:l,titleTextColor:i,dayTextColor:s,fontSize:r,lineHeight:n,dateColorCurrent:c,dateTextColorCurrent:u,cellColorHover:he(f,d),cellColorHoverModal:he(h,d),cellColorHoverPopover:he(p,d),cellColor:f,cellColorModal:h,cellColorPopover:p,barColor:c})},Sk={name:"Calendar",common:ie,peers:{Button:Wt},self:r1},_k=Sk,Ek={name:"Calendar",common:oe,peers:{Button:er},self:r1},Tk=Ek,n1=e=>{const{fontSize:t,boxShadow2:r,popoverColor:n,textColor2:o,borderRadius:i,borderColor:s,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,dividerColor:h}=e;return{panelFontSize:t,boxShadow:r,color:n,textColor:o,borderRadius:i,border:`1px solid ${s}`,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,dividerColor:h}},$k={name:"ColorPicker",common:ie,peers:{Input:wr,Button:Wt},self:n1},Pk=$k,Lk={name:"ColorPicker",common:oe,peers:{Input:Cr,Button:er},self:n1},kk=Lk,Ik={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},o1=e=>{const{primaryColor:t,borderRadius:r,lineHeight:n,fontSize:o,cardColor:i,textColor2:s,textColor1:a,dividerColor:l,fontWeightStrong:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:b,boxShadow1:w,popoverColor:g,actionColor:m}=e;return Object.assign(Object.assign({},Ik),{lineHeight:n,color:i,colorModal:b,colorPopover:g,colorTarget:t,colorEmbedded:m,colorEmbeddedModal:m,colorEmbeddedPopover:m,textColor:s,titleTextColor:a,borderColor:l,actionColor:m,titleFontWeight:c,closeColorHover:h,closeColorPressed:p,closeBorderRadius:r,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:w,borderRadius:r})},Rk={name:"Card",common:ie,self:o1},Sf=Rk,Ok={name:"Card",common:oe,self(e){const t=o1(e),{cardColor:r,modalColor:n,popoverColor:o}=e;return t.colorEmbedded=r,t.colorEmbeddedModal=n,t.colorEmbeddedPopover=o,t}},i1=Ok,Ak=N([U("card",`
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
 `,[bb({background:"var(--n-color-modal)"}),re("hoverable",[N("&:hover","box-shadow: var(--n-box-shadow);")]),re("content-segmented",[N(">",[ne("content",{paddingTop:"var(--n-padding-bottom)"})])]),re("content-soft-segmented",[N(">",[ne("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),re("footer-segmented",[N(">",[ne("footer",{paddingTop:"var(--n-padding-bottom)"})])]),re("footer-soft-segmented",[N(">",[ne("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),N(">",[U("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[ne("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),ne("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),ne("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),ne("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),ne("content","flex: 1; min-width: 0;"),ne("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[N("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),ne("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),U("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[N("img",`
 display: block;
 width: 100%;
 `)]),re("bordered",`
 border: 1px solid var(--n-border-color);
 `,[N("&:target","border-color: var(--n-color-target);")]),re("action-segmented",[N(">",[ne("action",[N("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),re("content-segmented, content-soft-segmented",[N(">",[ne("content",{transition:"border-color 0.3s var(--n-bezier)"},[N("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),re("footer-segmented, footer-soft-segmented",[N(">",[ne("footer",{transition:"border-color 0.3s var(--n-bezier)"},[N("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),re("embedded",`
 background-color: var(--n-color-embedded);
 `)]),mb(U("card",`
 background: var(--n-color-modal);
 `,[re("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),L_(U("card",`
 background: var(--n-color-popover);
 `,[re("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),_f={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Bk=vc(_f),Mk=Object.assign(Object.assign({},Qe.props),_f),Hk=be({name:"Card",props:Mk,setup(e){const t=()=>{const{onClose:c}=e;c&&ar(c)},{inlineThemeDisabled:r,mergedClsPrefixRef:n,mergedRtlRef:o}=It(e),i=Qe("Card","-card",Ak,Sf,e,n),s=ba("Card",o,n),a=q(()=>{const{size:c}=e,{self:{color:u,colorModal:d,colorTarget:f,textColor:h,titleTextColor:p,titleFontWeight:b,borderColor:w,actionColor:g,borderRadius:m,lineHeight:_,closeIconColor:x,closeIconColorHover:C,closeIconColorPressed:$,closeColorHover:S,closeColorPressed:P,closeBorderRadius:k,closeIconSize:I,closeSize:O,boxShadow:R,colorPopover:H,colorEmbedded:B,colorEmbeddedModal:Z,colorEmbeddedPopover:G,[we("padding",c)]:J,[we("fontSize",c)]:se,[we("titleFontSize",c)]:ye},common:{cubicBezierEaseInOut:ke}}=i.value,{top:Te,left:Ae,bottom:ut}=lb(J);return{"--n-bezier":ke,"--n-border-radius":m,"--n-color":u,"--n-color-modal":d,"--n-color-popover":H,"--n-color-embedded":B,"--n-color-embedded-modal":Z,"--n-color-embedded-popover":G,"--n-color-target":f,"--n-text-color":h,"--n-line-height":_,"--n-action-color":g,"--n-title-text-color":p,"--n-title-font-weight":b,"--n-close-icon-color":x,"--n-close-icon-color-hover":C,"--n-close-icon-color-pressed":$,"--n-close-color-hover":S,"--n-close-color-pressed":P,"--n-border-color":w,"--n-box-shadow":R,"--n-padding-top":Te,"--n-padding-bottom":ut,"--n-padding-left":Ae,"--n-font-size":se,"--n-title-font-size":ye,"--n-close-size":O,"--n-close-icon-size":I,"--n-close-border-radius":k}}),l=r?xr("card",q(()=>e.size[0]),a,e):void 0;return{rtlEnabled:s,mergedClsPrefix:n,mergedTheme:i,handleCloseClick:t,cssVars:r?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:t,hoverable:r,mergedClsPrefix:n,rtlEnabled:o,onRender:i,embedded:s,tag:a,$slots:l}=this;return i==null||i(),E(a,{class:[`${n}-card`,this.themeClass,s&&`${n}-card--embedded`,{[`${n}-card--rtl`]:o,[`${n}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${n}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${n}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${n}-card--bordered`]:t,[`${n}-card--hoverable`]:r}],style:this.cssVars,role:this.role},ir(l.cover,c=>c&&E("div",{class:`${n}-card-cover`,role:"none"},c)),ir(l.header,c=>c||this.title||this.closable?E("div",{class:`${n}-card-header`,style:this.headerStyle},E("div",{class:`${n}-card-header__main`,role:"heading"},c||this.title),ir(l["header-extra"],u=>u&&E("div",{class:`${n}-card-header__extra`,style:this.headerExtraStyle},u)),this.closable?E(Pc,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),ir(l.default,c=>c&&E("div",{class:`${n}-card__content`,style:this.contentStyle,role:"none"},c)),ir(l.footer,c=>c&&[E("div",{class:`${n}-card__footer`,style:this.footerStyle,role:"none"},c)]),ir(l.action,c=>c&&E("div",{class:`${n}-card__action`,role:"none"},c)))}}),s1=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),Dk={name:"Carousel",common:ie,self:s1},zk=Dk,Fk={name:"Carousel",common:oe,self:s1},Nk=Fk,jk={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},a1=e=>{const{baseColor:t,inputColorDisabled:r,cardColor:n,modalColor:o,popoverColor:i,textColorDisabled:s,borderColor:a,primaryColor:l,textColor2:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadiusSmall:h,lineHeight:p}=e;return Object.assign(Object.assign({},jk),{labelLineHeight:p,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadius:h,color:t,colorChecked:l,colorDisabled:r,colorDisabledChecked:r,colorTableHeader:n,colorTableHeaderModal:o,colorTableHeaderPopover:i,checkMarkColor:t,checkMarkColorDisabled:s,checkMarkColorDisabledChecked:s,border:`1px solid ${a}`,borderDisabled:`1px solid ${a}`,borderDisabledChecked:`1px solid ${a}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${X(l,{alpha:.3})}`,textColor:c,textColorDisabled:s})},Wk={name:"Checkbox",common:ie,self:a1},Qi=Wk,Uk={name:"Checkbox",common:oe,self(e){const{cardColor:t}=e,r=a1(e);return r.color="#0000",r.checkMarkColor=t,r}},es=Uk,l1=e=>{const{borderRadius:t,boxShadow2:r,popoverColor:n,textColor2:o,textColor3:i,primaryColor:s,textColorDisabled:a,dividerColor:l,hoverColor:c,fontSizeMedium:u,heightMedium:d}=e;return{menuBorderRadius:t,menuColor:n,menuBoxShadow:r,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:d,optionFontSize:u,optionColorHover:c,optionTextColor:o,optionTextColorActive:s,optionTextColorDisabled:a,optionCheckMarkColor:s,loadingColor:s,columnWidth:"180px"}},Vk={name:"Cascader",common:ie,peers:{InternalSelectMenu:Ca,InternalSelection:Cf,Scrollbar:jt,Checkbox:Qi,Empty:bn},self:l1},Kk=Vk,qk={name:"Cascader",common:oe,peers:{InternalSelectMenu:wa,InternalSelection:wf,Scrollbar:Qt,Checkbox:es,Empty:bn},self:l1},Gk=qk,Xk={name:"Code",common:oe,self(e){const{textColor2:t,fontSize:r,fontWeightStrong:n,textColor3:o}=e;return{textColor:t,fontSize:r,fontWeightStrong:n,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:o}}},c1=Xk,Yk=e=>{const{textColor2:t,fontSize:r,fontWeightStrong:n,textColor3:o}=e;return{textColor:t,fontSize:r,fontWeightStrong:n,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:o}},Zk={name:"Code",common:ie,self:Yk},u1=Zk,d1=e=>{const{fontWeight:t,textColor1:r,textColor2:n,textColorDisabled:o,dividerColor:i,fontSize:s}=e;return{titleFontSize:s,titleFontWeight:t,dividerColor:i,titleTextColor:r,titleTextColorDisabled:o,fontSize:s,textColor:n,arrowColor:n,arrowColorDisabled:o,itemMargin:"16px 0 0 0"}},Jk={name:"Collapse",common:ie,self:d1},Qk=Jk,e8={name:"Collapse",common:oe,self:d1},t8=e8,f1=e=>{const{cubicBezierEaseInOut:t}=e;return{bezier:t}},r8={name:"CollapseTransition",common:ie,self:f1},n8=r8,o8={name:"CollapseTransition",common:oe,self:f1},i8=o8,s8={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Xs("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},a8=be({name:"ConfigProvider",alias:["App"],props:s8,setup(e){const t=Se(ro,null),r=q(()=>{const{theme:p}=e;if(p===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return p===void 0?b:b===void 0?p:Object.assign({},b,p)}),n=q(()=>{const{themeOverrides:p}=e;if(p!==null){if(p===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?p:Cs({},b,p)}}}),o=fn(()=>{const{namespace:p}=e;return p===void 0?t==null?void 0:t.mergedNamespaceRef.value:p}),i=fn(()=>{const{bordered:p}=e;return p===void 0?t==null?void 0:t.mergedBorderedRef.value:p}),s=q(()=>{const{icons:p}=e;return p===void 0?t==null?void 0:t.mergedIconsRef.value:p}),a=q(()=>{const{componentOptions:p}=e;return p!==void 0?p:t==null?void 0:t.mergedComponentPropsRef.value}),l=q(()=>{const{clsPrefix:p}=e;return p!==void 0?p:t==null?void 0:t.mergedClsPrefixRef.value}),c=q(()=>{var p;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const w={};for(const g of b)w[g.name]=kl(g),(p=g.peers)===null||p===void 0||p.forEach(m=>{m.name in w||(w[m.name]=kl(m))});return w}),u=q(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),f=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),h=q(()=>{const{value:p}=r,{value:b}=n,w=b&&Object.keys(b).length!==0,g=p==null?void 0:p.name;return g?w?`${g}-${Ys(JSON.stringify(n.value))}`:g:w?Ys(JSON.stringify(n.value)):""});return Ze(ro,{mergedThemeHashRef:h,mergedBreakpointsRef:u,mergedRtlRef:c,mergedIconsRef:s,mergedComponentPropsRef:a,mergedBorderedRef:i,mergedNamespaceRef:o,mergedClsPrefixRef:l,mergedLocaleRef:q(()=>{const{locale:p}=e;if(p!==null)return p===void 0?t==null?void 0:t.mergedLocaleRef.value:p}),mergedDateLocaleRef:q(()=>{const{dateLocale:p}=e;if(p!==null)return p===void 0?t==null?void 0:t.mergedDateLocaleRef.value:p}),mergedHljsRef:q(()=>{const{hljs:p}=e;return p===void 0?t==null?void 0:t.mergedHljsRef.value:p}),mergedKatexRef:q(()=>{const{katex:p}=e;return p===void 0?t==null?void 0:t.mergedKatexRef.value:p}),mergedThemeRef:r,mergedThemeOverridesRef:n,inlineThemeDisabled:d||!1,preflightStyleDisabled:f||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:o,mergedTheme:r,mergedThemeOverrides:n}},render(){var e,t,r,n;return this.abstract?(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r):E(this.as||this.tag,{class:`${this.mergedClsPrefix||Pv}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),l8={name:"Popselect",common:oe,peers:{Popover:Yo,InternalSelectMenu:wa}},h1=l8;function c8(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const u8={name:"Popselect",common:ie,peers:{Popover:ao,InternalSelectMenu:Ca},self:c8},p1=u8;function g1(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const d8={name:"Select",common:ie,peers:{InternalSelection:Cf,InternalSelectMenu:Ca},self:g1},m1=d8,f8={name:"Select",common:oe,peers:{InternalSelection:wf,InternalSelectMenu:wa},self:g1},b1=f8,h8={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},v1=e=>{const{textColor2:t,primaryColor:r,primaryColorHover:n,primaryColorPressed:o,inputColorDisabled:i,textColorDisabled:s,borderColor:a,borderRadius:l,fontSizeTiny:c,fontSizeSmall:u,fontSizeMedium:d,heightTiny:f,heightSmall:h,heightMedium:p}=e;return Object.assign(Object.assign({},h8),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${a}`,buttonBorderHover:`1px solid ${a}`,buttonBorderPressed:`1px solid ${a}`,buttonIconColor:t,buttonIconColorHover:t,buttonIconColorPressed:t,itemTextColor:t,itemTextColorHover:n,itemTextColorPressed:o,itemTextColorActive:r,itemTextColorDisabled:s,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${r}`,itemBorderDisabled:`1px solid ${a}`,itemBorderRadius:l,itemSizeSmall:f,itemSizeMedium:h,itemSizeLarge:p,itemFontSizeSmall:c,itemFontSizeMedium:u,itemFontSizeLarge:d,jumperFontSizeSmall:c,jumperFontSizeMedium:u,jumperFontSizeLarge:d,jumperTextColor:t,jumperTextColorDisabled:s})},p8={name:"Pagination",common:ie,peers:{Select:m1,Input:wr,Popselect:p1},self:v1},y1=p8,g8={name:"Pagination",common:oe,peers:{Select:b1,Input:Cr,Popselect:h1},self(e){const{primaryColor:t,opacity3:r}=e,n=X(t,{alpha:Number(r)}),o=v1(e);return o.itemBorderActive=`1px solid ${n}`,o.itemBorderDisabled="1px solid #0000",o}},x1=g8,C1={padding:"8px 14px"},m8={name:"Tooltip",common:oe,peers:{Popover:Yo},self(e){const{borderRadius:t,boxShadow2:r,popoverColor:n,textColor2:o}=e;return Object.assign(Object.assign({},C1),{borderRadius:t,boxShadow:r,color:n,textColor:o})}},Lc=m8,b8=e=>{const{borderRadius:t,boxShadow2:r,baseColor:n}=e;return Object.assign(Object.assign({},C1),{borderRadius:t,boxShadow:r,color:he(n,"rgba(0, 0, 0, .85)"),textColor:n})},v8={name:"Tooltip",common:ie,peers:{Popover:ao},self:b8},Sa=v8,y8={name:"Ellipsis",common:oe,peers:{Tooltip:Lc}},w1=y8,x8={name:"Ellipsis",common:ie,peers:{Tooltip:Sa}},S1=x8,_1={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},C8={name:"Radio",common:oe,self(e){const{borderColor:t,primaryColor:r,baseColor:n,textColorDisabled:o,inputColorDisabled:i,textColor2:s,opacityDisabled:a,borderRadius:l,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,heightSmall:f,heightMedium:h,heightLarge:p,lineHeight:b}=e;return Object.assign(Object.assign({},_1),{labelLineHeight:b,buttonHeightSmall:f,buttonHeightMedium:h,buttonHeightLarge:p,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${r}`,boxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${X(r,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${r}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:s,textColorDisabled:o,dotColorActive:r,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:r,buttonBorderColorHover:r,buttonColor:"#0000",buttonColorActive:r,buttonTextColor:s,buttonTextColorActive:n,buttonTextColorHover:r,opacityDisabled:a,buttonBoxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${X(r,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${r}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},E1=C8,w8=e=>{const{borderColor:t,primaryColor:r,baseColor:n,textColorDisabled:o,inputColorDisabled:i,textColor2:s,opacityDisabled:a,borderRadius:l,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,heightSmall:f,heightMedium:h,heightLarge:p,lineHeight:b}=e;return Object.assign(Object.assign({},_1),{labelLineHeight:b,buttonHeightSmall:f,buttonHeightMedium:h,buttonHeightLarge:p,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${r}`,boxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${X(r,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${r}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:n,colorDisabled:i,colorActive:"#0000",textColor:s,textColorDisabled:o,dotColorActive:r,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:r,buttonBorderColorHover:t,buttonColor:n,buttonColorActive:n,buttonTextColor:s,buttonTextColorActive:r,buttonTextColorHover:r,opacityDisabled:a,buttonBoxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${X(r,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})},S8={name:"Radio",common:ie,self:w8},T1=S8,_8={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},$1=e=>{const{primaryColor:t,textColor2:r,dividerColor:n,hoverColor:o,popoverColor:i,invertedColor:s,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:d,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:b,textColor3:w,opacityDisabled:g}=e;return Object.assign(Object.assign({},_8),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:b,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:r,optionTextColorHover:r,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:n,suffixColor:r,prefixColor:r,optionColorHover:o,optionColorActive:X(t,{alpha:.1}),groupHeaderTextColor:w,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:g})},E8={name:"Dropdown",common:ie,peers:{Popover:ao},self:$1},Ef=E8,T8={name:"Dropdown",common:oe,peers:{Popover:Yo},self(e){const{primaryColorSuppl:t,primaryColor:r,popoverColor:n}=e,o=$1(e);return o.colorInverted=n,o.optionColorActive=X(r,{alpha:.15}),o.optionColorActiveInverted=t,o.optionColorHoverInverted=t,o}},Tf=T8,$8={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},P1=e=>{const{cardColor:t,modalColor:r,popoverColor:n,textColor2:o,textColor1:i,tableHeaderColor:s,tableColorHover:a,iconColor:l,primaryColor:c,fontWeightStrong:u,borderRadius:d,lineHeight:f,fontSizeSmall:h,fontSizeMedium:p,fontSizeLarge:b,dividerColor:w,heightSmall:g,opacityDisabled:m,tableColorStriped:_}=e;return Object.assign(Object.assign({},$8),{actionDividerColor:w,lineHeight:f,borderRadius:d,fontSizeSmall:h,fontSizeMedium:p,fontSizeLarge:b,borderColor:he(t,w),tdColorHover:he(t,a),tdColorStriped:he(t,_),thColor:he(t,s),thColorHover:he(he(t,s),a),tdColor:t,tdTextColor:o,thTextColor:i,thFontWeight:u,thButtonColorHover:a,thIconColor:l,thIconColorActive:c,borderColorModal:he(r,w),tdColorHoverModal:he(r,a),tdColorStripedModal:he(r,_),thColorModal:he(r,s),thColorHoverModal:he(he(r,s),a),tdColorModal:r,borderColorPopover:he(n,w),tdColorHoverPopover:he(n,a),tdColorStripedPopover:he(n,_),thColorPopover:he(n,s),thColorHoverPopover:he(he(n,s),a),tdColorPopover:n,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:g,opacityLoading:m})},P8={name:"DataTable",common:ie,peers:{Button:Wt,Checkbox:Qi,Radio:T1,Pagination:y1,Scrollbar:jt,Empty:bn,Popover:ao,Ellipsis:S1,Dropdown:Ef},self:P1},L8=P8,k8={name:"DataTable",common:oe,peers:{Button:er,Checkbox:es,Radio:E1,Pagination:x1,Scrollbar:Qt,Empty:Xo,Popover:Yo,Ellipsis:w1,Dropdown:Tf},self(e){const t=P1(e);return t.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",t.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",t}},I8=k8,R8=Object.assign(Object.assign({},Fv),Qe.props),O8=be({name:"Tooltip",props:R8,__popover__:!0,setup(e){const t=Qe("Tooltip","-tooltip",void 0,Sa,e),r=W(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(o){r.value.setShow(o)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:q(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return E(bL,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),L1=e=>{const{textColorBase:t,opacity1:r,opacity2:n,opacity3:o,opacity4:i,opacity5:s}=e;return{color:t,opacity1Depth:r,opacity2Depth:n,opacity3Depth:o,opacity4Depth:i,opacity5Depth:s}},A8={name:"Icon",common:ie,self:L1},B8=A8,M8={name:"Icon",common:oe,self:L1},H8=M8,D8={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},k1=e=>{const{popoverColor:t,textColor2:r,primaryColor:n,hoverColor:o,dividerColor:i,opacityDisabled:s,boxShadow2:a,borderRadius:l,iconColor:c,iconColorDisabled:u}=e;return Object.assign(Object.assign({},D8),{panelColor:t,panelBoxShadow:a,panelDividerColor:i,itemTextColor:r,itemTextColorActive:n,itemColorHover:o,itemOpacityDisabled:s,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:u})},z8={name:"TimePicker",common:ie,peers:{Scrollbar:jt,Button:Wt,Input:wr},self:k1},I1=z8,F8={name:"TimePicker",common:oe,peers:{Scrollbar:Qt,Button:er,Input:Cr},self:k1},R1=F8,N8={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},O1=e=>{const{hoverColor:t,fontSize:r,textColor2:n,textColorDisabled:o,popoverColor:i,primaryColor:s,borderRadiusSmall:a,iconColor:l,iconColorDisabled:c,textColor1:u,dividerColor:d,boxShadow2:f,borderRadius:h,fontWeightStrong:p}=e;return Object.assign(Object.assign({},N8),{itemFontSize:r,calendarDaysFontSize:r,calendarTitleFontSize:r,itemTextColor:n,itemTextColorDisabled:o,itemTextColorActive:i,itemTextColorCurrent:s,itemColorIncluded:X(s,{alpha:.1}),itemColorHover:t,itemColorDisabled:t,itemColorActive:s,itemBorderRadius:a,panelColor:i,panelTextColor:n,arrowColor:l,calendarTitleTextColor:u,calendarTitleColorHover:t,calendarDaysTextColor:n,panelHeaderDividerColor:d,calendarDaysDividerColor:d,calendarDividerColor:d,panelActionDividerColor:d,panelBoxShadow:f,panelBorderRadius:h,calendarTitleFontWeight:p,scrollItemBorderRadius:h,iconColor:l,iconColorDisabled:c})},j8={name:"DatePicker",common:ie,peers:{Input:wr,Button:Wt,TimePicker:I1,Scrollbar:jt},self:O1},W8=j8,U8={name:"DatePicker",common:oe,peers:{Input:Cr,Button:er,TimePicker:R1,Scrollbar:Qt},self(e){const{popoverColor:t,hoverColor:r,primaryColor:n}=e,o=O1(e);return o.itemColorDisabled=he(t,r),o.itemColorIncluded=X(n,{alpha:.15}),o.itemColorHover=he(t,r),o}},V8=U8;function dj(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function K8(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}const q8={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},A1=e=>{const{tableHeaderColor:t,textColor2:r,textColor1:n,cardColor:o,modalColor:i,popoverColor:s,dividerColor:a,borderRadius:l,fontWeightStrong:c,lineHeight:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:h}=e;return Object.assign(Object.assign({},q8),{lineHeight:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:h,titleTextColor:n,thColor:he(o,t),thColorModal:he(i,t),thColorPopover:he(s,t),thTextColor:n,thFontWeight:c,tdTextColor:r,tdColor:o,tdColorModal:i,tdColorPopover:s,borderColor:he(o,a),borderColorModal:he(i,a),borderColorPopover:he(s,a),borderRadius:l})},G8={name:"Descriptions",common:ie,self:A1},X8=G8,Y8={name:"Descriptions",common:oe,self:A1},Z8=Y8,J8={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},B1=e=>{const{textColor1:t,textColor2:r,modalColor:n,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,infoColor:c,successColor:u,warningColor:d,errorColor:f,primaryColor:h,dividerColor:p,borderRadius:b,fontWeightStrong:w,lineHeight:g,fontSize:m}=e;return Object.assign(Object.assign({},J8),{fontSize:m,lineHeight:g,border:`1px solid ${p}`,titleTextColor:t,textColor:r,color:n,closeColorHover:a,closeColorPressed:l,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,closeBorderRadius:b,iconColor:h,iconColorInfo:c,iconColorSuccess:u,iconColorWarning:d,iconColorError:f,borderRadius:b,titleFontWeight:w})},Q8={name:"Dialog",common:ie,peers:{Button:Wt},self:B1},$f=Q8,eI={name:"Dialog",common:oe,peers:{Button:er},self:B1},M1=eI,kc={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},H1=vc(kc),tI=N([U("dialog",`
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
 `,[ne("icon",{color:"var(--n-icon-color)"}),re("bordered",{border:"var(--n-border)"}),re("icon-top",[ne("close",{margin:"var(--n-close-margin)"}),ne("icon",{margin:"var(--n-icon-margin)"}),ne("content",{textAlign:"center"}),ne("title",{justifyContent:"center"}),ne("action",{justifyContent:"center"})]),re("icon-left",[ne("icon",{margin:"var(--n-icon-margin)"}),re("closable",[ne("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),ne("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),ne("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[re("last","margin-bottom: 0;")]),ne("action",`
 display: flex;
 justify-content: flex-end;
 `,[N("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),ne("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),ne("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),U("dialog-icon-container",{display:"flex",justifyContent:"center"})]),mb(U("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),U("dialog",[bb(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),rI={default:()=>E(Bi,null),info:()=>E(Bi,null),success:()=>E(ya,null),warning:()=>E(xa,null),error:()=>E(va,null)},D1=be({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},Qe.props),kc),setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:n}=It(e),o=q(()=>{var d,f;const{iconPlacement:h}=e;return h||((f=(d=t==null?void 0:t.value)===null||d===void 0?void 0:d.Dialog)===null||f===void 0?void 0:f.iconPlacement)||"left"});function i(d){const{onPositiveClick:f}=e;f&&f(d)}function s(d){const{onNegativeClick:f}=e;f&&f(d)}function a(){const{onClose:d}=e;d&&d()}const l=Qe("Dialog","-dialog",tI,$f,e,r),c=q(()=>{const{type:d}=e,f=o.value,{common:{cubicBezierEaseInOut:h},self:{fontSize:p,lineHeight:b,border:w,titleTextColor:g,textColor:m,color:_,closeBorderRadius:x,closeColorHover:C,closeColorPressed:$,closeIconColor:S,closeIconColorHover:P,closeIconColorPressed:k,closeIconSize:I,borderRadius:O,titleFontWeight:R,titleFontSize:H,padding:B,iconSize:Z,actionSpace:G,contentMargin:J,closeSize:se,[f==="top"?"iconMarginIconTop":"iconMargin"]:ye,[f==="top"?"closeMarginIconTop":"closeMargin"]:ke,[we("iconColor",d)]:Te}}=l.value;return{"--n-font-size":p,"--n-icon-color":Te,"--n-bezier":h,"--n-close-margin":ke,"--n-icon-margin":ye,"--n-icon-size":Z,"--n-close-size":se,"--n-close-icon-size":I,"--n-close-border-radius":x,"--n-close-color-hover":C,"--n-close-color-pressed":$,"--n-close-icon-color":S,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":k,"--n-color":_,"--n-text-color":m,"--n-border-radius":O,"--n-padding":B,"--n-line-height":b,"--n-border":w,"--n-content-margin":J,"--n-title-font-size":H,"--n-title-font-weight":R,"--n-title-text-color":g,"--n-action-space":G}}),u=n?xr("dialog",q(()=>`${e.type[0]}${o.value[0]}`),c,e):void 0;return{mergedClsPrefix:r,mergedIconPlacement:o,mergedTheme:l,handlePositiveClick:i,handleNegativeClick:s,handleCloseClick:a,cssVars:n?void 0:c,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:r,cssVars:n,closable:o,showIcon:i,title:s,content:a,action:l,negativeText:c,positiveText:u,positiveButtonProps:d,negativeButtonProps:f,handlePositiveClick:h,handleNegativeClick:p,mergedTheme:b,loading:w,type:g,mergedClsPrefix:m}=this;(e=this.onRender)===null||e===void 0||e.call(this);const _=i?E(dt,{clsPrefix:m,class:`${m}-dialog__icon`},{default:()=>ir(this.$slots.icon,C=>C||(this.icon?or(this.icon):rI[this.type]()))}):null,x=ir(this.$slots.action,C=>C||u||c||l?E("div",{class:`${m}-dialog__action`},C||(l?[or(l)]:[this.negativeText&&E(ai,Object.assign({theme:b.peers.Button,themeOverrides:b.peerOverrides.Button,ghost:!0,size:"small",onClick:p},f),{default:()=>or(this.negativeText)}),this.positiveText&&E(ai,Object.assign({theme:b.peers.Button,themeOverrides:b.peerOverrides.Button,size:"small",type:g==="default"?"primary":g,disabled:w,loading:w,onClick:h},d),{default:()=>or(this.positiveText)})])):null);return E("div",{class:[`${m}-dialog`,this.themeClass,this.closable&&`${m}-dialog--closable`,`${m}-dialog--icon-${r}`,t&&`${m}-dialog--bordered`],style:n,role:"dialog"},o?E(Pc,{clsPrefix:m,class:`${m}-dialog__close`,onClick:this.handleCloseClick}):null,i&&r==="top"?E("div",{class:`${m}-dialog-icon-container`},_):null,E("div",{class:`${m}-dialog__title`},i&&r==="left"?_:null,qu(this.$slots.header,()=>[or(s)])),E("div",{class:[`${m}-dialog__content`,x?"":`${m}-dialog__content--last`]},qu(this.$slots.default,()=>[or(a)])),x)}}),z1="n-dialog-provider",nI="n-dialog-api",oI="n-dialog-reactive-list",F1=e=>{const{modalColor:t,textColor2:r,boxShadow3:n}=e;return{color:t,textColor:r,boxShadow:n}},iI={name:"Modal",common:ie,peers:{Scrollbar:jt,Dialog:$f,Card:Sf},self:F1},N1=iI,sI={name:"Modal",common:oe,peers:{Scrollbar:Qt,Dialog:M1,Card:i1},self:F1},aI=sI,Pf=Object.assign(Object.assign({},_f),kc),lI=vc(Pf),cI=be({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Pf),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=W(null),r=W(null),n=W(e.show),o=W(null),i=W(null);tt(Be(e,"show"),w=>{w&&(n.value=!0)}),DE(q(()=>e.blockScroll&&n.value));const s=Se(_b);function a(){if(s.transformOriginRef.value==="center")return"";const{value:w}=o,{value:g}=i;if(w===null||g===null)return"";if(r.value){const m=r.value.containerScrollTop;return`${w}px ${g+m}px`}return""}function l(w){if(s.transformOriginRef.value==="center")return;const g=s.getMousePosition();if(!g||!r.value)return;const m=r.value.containerScrollTop,{offsetLeft:_,offsetTop:x}=w;if(g){const C=g.y,$=g.x;o.value=-(_-$),i.value=-(x-C-m)}w.style.transformOrigin=a()}function c(w){Ht(()=>{l(w)})}function u(w){w.style.transformOrigin=a(),e.onBeforeLeave()}function d(){n.value=!1,o.value=null,i.value=null,e.onAfterLeave()}function f(){const{onClose:w}=e;w&&w()}function h(){e.onNegativeClick()}function p(){e.onPositiveClick()}const b=W(null);return tt(b,w=>{w&&Ht(()=>{const g=w.el;g&&t.value!==g&&(t.value=g)})}),Ze(rf,t),Ze(nf,null),Ze(of,null),{mergedTheme:s.mergedThemeRef,appear:s.appearRef,isMounted:s.isMountedRef,mergedClsPrefix:s.mergedClsPrefixRef,bodyRef:t,scrollbarRef:r,displayed:n,childNodeRef:b,handlePositiveClick:p,handleNegativeClick:h,handleCloseClick:f,handleAfterLeave:d,handleBeforeLeave:u,handleEnter:c}},render(){const{$slots:e,$attrs:t,handleEnter:r,handleAfterLeave:n,handleBeforeLeave:o,preset:i,mergedClsPrefix:s}=this;let a=null;if(!i){if(a=Ku(e),!a){Xs("modal","default slot is empty");return}a=Pr(a),a.props=mc({class:`${s}-modal`},t,a.props||{})}return this.displayDirective==="show"||this.displayed||this.show?Wr(E("div",{role:"none",class:`${s}-modal-body-wrapper`},E(Bv,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${s}-modal-scroll-content`},{default:()=>{var l;return[(l=this.renderMask)===null||l===void 0?void 0:l.call(this),E(zb,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var c;return E(Yt,{name:"fade-in-scale-up-transition",appear:(c=this.appear)!==null&&c!==void 0?c:this.isMounted,onEnter:r,onAfterEnter:this.onAfterEnter,onAfterLeave:n,onBeforeLeave:o},{default:()=>{const u=[[Ri,this.show]],{onClickoutside:d}=this;return d&&u.push([Ju,this.onClickoutside,void 0,{capture:!0}]),Wr(this.preset==="confirm"||this.preset==="dialog"?E(D1,Object.assign({},this.$attrs,{class:[`${s}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Oi(this.$props,H1),{"aria-modal":"true"}),e):this.preset==="card"?E(Hk,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${s}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Oi(this.$props,Bk),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=a,u)}})}})]}})),[[Ri,this.displayDirective==="if"||this.displayed||this.show]]):null}}),uI=N([U("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),U("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[na({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),U("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[U("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),U("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Hv({duration:".25s",enterScale:".5"})])]),dI=Object.assign(Object.assign(Object.assign(Object.assign({},Qe.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Pf),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),fI=be({name:"Modal",inheritAttrs:!1,props:dI,setup(e){const t=W(null),{mergedClsPrefixRef:r,namespaceRef:n,inlineThemeDisabled:o}=It(e),i=Qe("Modal","-modal",uI,N1,e,r),s=wb(64),a=Cb(),l=Zi(),c=e.internalDialog?Se(z1,null):null,u=zE();function d(C){const{onUpdateShow:$,"onUpdate:show":S,onHide:P}=e;$&&ar($,C),S&&ar(S,C),P&&!C&&P(C)}function f(){const{onClose:C}=e;C?Promise.resolve(C()).then($=>{$!==!1&&d(!1)}):d(!1)}function h(){const{onPositiveClick:C}=e;C?Promise.resolve(C()).then($=>{$!==!1&&d(!1)}):d(!1)}function p(){const{onNegativeClick:C}=e;C?Promise.resolve(C()).then($=>{$!==!1&&d(!1)}):d(!1)}function b(){const{onBeforeLeave:C,onBeforeHide:$}=e;C&&ar(C),$&&$()}function w(){const{onAfterLeave:C,onAfterHide:$}=e;C&&ar(C),$&&$()}function g(C){var $;const{onMaskClick:S}=e;S&&S(C),e.maskClosable&&!(($=t.value)===null||$===void 0)&&$.contains(Gs(C))&&d(!1)}function m(C){var $;($=e.onEsc)===null||$===void 0||$.call(e),e.show&&e.closeOnEsc&&R_(C)&&!u.value&&d(!1)}Ze(_b,{getMousePosition:()=>{if(c){const{clickedRef:C,clickPositionRef:$}=c;if(C.value&&$.value)return $.value}return s.value?a.value:null},mergedClsPrefixRef:r,mergedThemeRef:i,isMountedRef:l,appearRef:Be(e,"internalAppear"),transformOriginRef:Be(e,"transformOrigin")});const _=q(()=>{const{common:{cubicBezierEaseOut:C},self:{boxShadow:$,color:S,textColor:P}}=i.value;return{"--n-bezier-ease-out":C,"--n-box-shadow":$,"--n-color":S,"--n-text-color":P}}),x=o?xr("theme-class",void 0,_,e):void 0;return{mergedClsPrefix:r,namespace:n,isMounted:l,containerRef:t,presetProps:q(()=>Oi(e,lI)),handleEsc:m,handleAfterLeave:w,handleClickoutside:g,handleBeforeLeave:b,doUpdateShow:d,handleNegativeClick:p,handlePositiveClick:h,handleCloseClick:f,cssVars:o?void 0:_,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e}=this;return E(sf,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:r}=this;return Wr(E("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},E(cI,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:r?void 0:this.handleClickoutside,renderMask:r?()=>{var n;return E(Yt,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?E("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[xc,{zIndex:this.zIndex,enabled:this.show}]])}})}}),hI=Object.assign(Object.assign({},kc),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),pI=be({name:"DialogEnvironment",props:Object.assign(Object.assign({},hI),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=W(!0);function r(){const{onInternalAfterLeave:u,internalKey:d,onAfterLeave:f}=e;u&&u(d),f&&f()}function n(u){const{onPositiveClick:d}=e;d?Promise.resolve(d(u)).then(f=>{f!==!1&&l()}):l()}function o(u){const{onNegativeClick:d}=e;d?Promise.resolve(d(u)).then(f=>{f!==!1&&l()}):l()}function i(){const{onClose:u}=e;u?Promise.resolve(u()).then(d=>{d!==!1&&l()}):l()}function s(u){const{onMaskClick:d,maskClosable:f}=e;d&&(d(u),f&&l())}function a(){const{onEsc:u}=e;u&&u()}function l(){t.value=!1}function c(u){t.value=u}return{show:t,hide:l,handleUpdateShow:c,handleAfterLeave:r,handleCloseClick:i,handleNegativeClick:o,handlePositiveClick:n,handleMaskClick:s,handleEsc:a}},render(){const{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:r,handleCloseClick:n,handleAfterLeave:o,handleMaskClick:i,handleEsc:s,to:a,maskClosable:l,show:c}=this;return E(fI,{show:c,onUpdateShow:t,onMaskClick:i,onEsc:s,to:a,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:o,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,internalAppear:!0,internalDialog:!0},{default:()=>E(D1,Object.assign({},Oi(this.$props,H1),{style:this.internalStyle,onClose:n,onNegativeClick:r,onPositiveClick:e}))})}}),gI={injectionKey:String,to:[String,Object]},mI=be({name:"DialogProvider",props:gI,setup(){const e=W([]),t={};function r(a={}){const l=Ho(),c=Zt(Object.assign(Object.assign({},a),{key:l,destroy:()=>{t[`n-dialog-${l}`].hide()}}));return e.value.push(c),c}const n=["info","success","warning","error"].map(a=>l=>r(Object.assign(Object.assign({},l),{type:a})));function o(a){const{value:l}=e;l.splice(l.findIndex(c=>c.key===a),1)}function i(){Object.values(t).forEach(a=>a.hide())}const s={create:r,destroyAll:i,info:n[0],success:n[1],warning:n[2],error:n[3]};return Ze(nI,s),Ze(z1,{clickedRef:wb(64),clickPositionRef:Cb()}),Ze(oI,e),Object.assign(Object.assign({},s),{dialogList:e,dialogInstRefs:t,handleAfterLeave:o})},render(){var e,t;return E(Ge,null,[this.dialogList.map(r=>E(pI,ef(r,["destroy","style"],{internalStyle:r.style,to:this.to,ref:n=>{n===null?delete this.dialogInstRefs[`n-dialog-${r.key}`]:this.dialogInstRefs[`n-dialog-${r.key}`]=n},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave}))),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}}),j1=e=>{const{textColor1:t,dividerColor:r,fontWeightStrong:n}=e;return{textColor:t,color:r,fontWeight:n}},bI={name:"Divider",common:ie,self:j1},vI=bI,yI={name:"Divider",common:oe,self:j1},xI=yI,W1=e=>{const{modalColor:t,textColor1:r,textColor2:n,boxShadow3:o,lineHeight:i,fontWeightStrong:s,dividerColor:a,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,borderRadius:h,primaryColorHover:p}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:n,titleTextColor:r,titleFontSize:"18px",titleFontWeight:s,boxShadow:o,lineHeight:i,headerBorderBottom:`1px solid ${a}`,footerBorderTop:`1px solid ${a}`,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:h,resizableTriggerColorHover:p}},CI={name:"Drawer",common:ie,peers:{Scrollbar:jt},self:W1},wI=CI,SI={name:"Drawer",common:oe,peers:{Scrollbar:Qt},self:W1},_I=SI,U1={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},EI={name:"DynamicInput",common:oe,peers:{Input:Cr,Button:er},self(){return U1}},TI=EI,$I=()=>U1,PI={name:"DynamicInput",common:ie,peers:{Input:wr,Button:Wt},self:$I},LI=PI,V1={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},kI={name:"Space",self(){return V1}},K1=kI,II=()=>V1,RI={name:"Space",self:II},q1=RI,OI={name:"DynamicTags",common:oe,peers:{Input:Cr,Button:er,Tag:jv,Space:K1},self(){return{inputWidth:"64px"}}},AI=OI,BI={name:"DynamicTags",common:ie,peers:{Input:wr,Button:Wt,Tag:Wv,Space:q1},self(){return{inputWidth:"64px"}}},MI=BI,HI={name:"Element",common:oe},DI=HI,zI={name:"Element",common:ie},FI=zI,NI={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},G1=e=>{const{heightSmall:t,heightMedium:r,heightLarge:n,textColor1:o,errorColor:i,warningColor:s,lineHeight:a,textColor3:l}=e;return Object.assign(Object.assign({},NI),{blankHeightSmall:t,blankHeightMedium:r,blankHeightLarge:n,lineHeight:a,labelTextColor:o,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:s,feedbackTextColor:l})},jI={name:"Form",common:ie,self:G1},WI=jI,UI={name:"Form",common:oe,self:G1},VI=UI,KI={name:"GradientText",common:oe,self(e){const{primaryColor:t,successColor:r,warningColor:n,errorColor:o,infoColor:i,primaryColorSuppl:s,successColorSuppl:a,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:u,fontWeightStrong:d}=e;return{fontWeight:d,rotate:"252deg",colorStartPrimary:t,colorEndPrimary:s,colorStartInfo:i,colorEndInfo:u,colorStartWarning:n,colorEndWarning:l,colorStartError:o,colorEndError:c,colorStartSuccess:r,colorEndSuccess:a}}},qI=KI,GI=e=>{const{primaryColor:t,successColor:r,warningColor:n,errorColor:o,infoColor:i,fontWeightStrong:s}=e;return{fontWeight:s,rotate:"252deg",colorStartPrimary:X(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:X(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:X(n,{alpha:.6}),colorEndWarning:n,colorStartError:X(o,{alpha:.6}),colorEndError:o,colorStartSuccess:X(r,{alpha:.6}),colorEndSuccess:r}},XI={name:"GradientText",common:ie,self:GI},YI=XI,X1=e=>{const{primaryColor:t,baseColor:r}=e;return{color:t,iconColor:r}},ZI={name:"IconWrapper",common:ie,self:X1},JI=ZI,QI={name:"IconWrapper",common:oe,self:X1},eR=QI,Lf=Object.assign(Object.assign({},Qe.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),Y1="n-image";function tR(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const Z1={name:"Image",common:ie,peers:{Tooltip:Sa},self:tR},rR={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},J1=e=>{const{textColor2:t,successColor:r,infoColor:n,warningColor:o,errorColor:i,popoverColor:s,closeIconColor:a,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:u,closeColorPressed:d,textColor1:f,textColor3:h,borderRadius:p,fontWeightStrong:b,boxShadow2:w,lineHeight:g,fontSize:m}=e;return Object.assign(Object.assign({},rR),{borderRadius:p,lineHeight:g,fontSize:m,headerFontWeight:b,iconColor:t,iconColorSuccess:r,iconColorInfo:n,iconColorWarning:o,iconColorError:i,color:s,textColor:t,closeIconColor:a,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:p,closeColorHover:u,closeColorPressed:d,headerTextColor:f,descriptionTextColor:h,actionTextColor:t,boxShadow:w})},nR={name:"Notification",common:ie,peers:{Scrollbar:jt},self:J1},Q1=nR,oR={name:"Notification",common:oe,peers:{Scrollbar:Qt},self:J1},iR=oR,sR={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},ey=e=>{const{textColor2:t,closeIconColor:r,closeIconColorHover:n,closeIconColorPressed:o,infoColor:i,successColor:s,errorColor:a,warningColor:l,popoverColor:c,boxShadow2:u,primaryColor:d,lineHeight:f,borderRadius:h,closeColorHover:p,closeColorPressed:b}=e;return Object.assign(Object.assign({},sR),{closeBorderRadius:h,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:t,iconColorInfo:i,iconColorSuccess:s,iconColorWarning:l,iconColorError:a,iconColorLoading:d,closeColorHover:p,closeColorPressed:b,closeIconColor:r,closeIconColorHover:n,closeIconColorPressed:o,closeColorHoverInfo:p,closeColorPressedInfo:b,closeIconColorInfo:r,closeIconColorHoverInfo:n,closeIconColorPressedInfo:o,closeColorHoverSuccess:p,closeColorPressedSuccess:b,closeIconColorSuccess:r,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:o,closeColorHoverError:p,closeColorPressedError:b,closeIconColorError:r,closeIconColorHoverError:n,closeIconColorPressedError:o,closeColorHoverWarning:p,closeColorPressedWarning:b,closeIconColorWarning:r,closeIconColorHoverWarning:n,closeIconColorPressedWarning:o,closeColorHoverLoading:p,closeColorPressedLoading:b,closeIconColorLoading:r,closeIconColorHoverLoading:n,closeIconColorPressedLoading:o,loadingColor:d,lineHeight:f,borderRadius:h})},aR={name:"Message",common:ie,self:ey},ty=aR,lR={name:"Message",common:oe,self:ey},cR=lR,uR={name:"ButtonGroup",common:oe},dR=uR,fR={name:"ButtonGroup",common:ie},hR=fR,pR={name:"InputNumber",common:oe,peers:{Button:er,Input:Cr},self(e){const{textColorDisabled:t}=e;return{iconColorDisabled:t}}},gR=pR,mR=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},bR={name:"InputNumber",common:ie,peers:{Button:Wt,Input:wr},self:mR},vR=bR,yR={name:"Layout",common:oe,peers:{Scrollbar:Qt},self(e){const{textColor2:t,bodyColor:r,popoverColor:n,cardColor:o,dividerColor:i,scrollbarColor:s,scrollbarColorHover:a}=e;return{textColor:t,textColorInverted:t,color:r,colorEmbedded:r,headerColor:o,headerColorInverted:o,footerColor:o,footerColorInverted:o,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:o,siderColorInverted:o,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:he(r,s),siderToggleBarColorHover:he(r,a),__invertScrollbar:"false"}}},xR=yR,CR=e=>{const{baseColor:t,textColor2:r,bodyColor:n,cardColor:o,dividerColor:i,actionColor:s,scrollbarColor:a,scrollbarColorHover:l,invertedColor:c}=e;return{textColor:r,textColorInverted:"#FFF",color:n,colorEmbedded:s,headerColor:o,headerColorInverted:c,footerColor:s,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:o,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:he(n,a),siderToggleBarColorHover:he(n,l),__invertScrollbar:"true"}},wR={name:"Layout",common:ie,peers:{Scrollbar:jt},self:CR},SR=wR,ry=e=>{const{textColor2:t,cardColor:r,modalColor:n,popoverColor:o,dividerColor:i,borderRadius:s,fontSize:a,hoverColor:l}=e;return{textColor:t,color:r,colorHover:l,colorModal:n,colorHoverModal:he(n,l),colorPopover:o,colorHoverPopover:he(o,l),borderColor:i,borderColorModal:he(n,i),borderColorPopover:he(o,i),borderRadius:s,fontSize:a}},_R={name:"List",common:ie,self:ry},ER=_R,TR={name:"List",common:oe,self:ry},$R=TR,PR={name:"LoadingBar",common:oe,self(e){const{primaryColor:t}=e;return{colorError:"red",colorLoading:t,height:"2px"}}},LR=PR,kR=e=>{const{primaryColor:t,errorColor:r}=e;return{colorError:r,colorLoading:t,height:"2px"}},IR={name:"LoadingBar",common:ie,self:kR},ny=IR,RR={name:"Log",common:oe,peers:{Scrollbar:Qt,Code:c1},self(e){const{textColor2:t,inputColor:r,fontSize:n,primaryColor:o}=e;return{loaderFontSize:n,loaderTextColor:t,loaderColor:r,loaderBorder:"1px solid #0000",loadingColor:o}}},OR=RR,AR=e=>{const{textColor2:t,modalColor:r,borderColor:n,fontSize:o,primaryColor:i}=e;return{loaderFontSize:o,loaderTextColor:t,loaderColor:r,loaderBorder:`1px solid ${n}`,loadingColor:i}},BR={name:"Log",common:ie,peers:{Scrollbar:jt,Code:u1},self:AR},MR=BR,HR={name:"Mention",common:oe,peers:{InternalSelectMenu:wa,Input:Cr},self(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}},DR=HR,zR=e=>{const{boxShadow2:t}=e;return{menuBoxShadow:t}},FR={name:"Mention",common:ie,peers:{InternalSelectMenu:Ca,Input:wr},self:zR},NR=FR;function jR(e,t,r,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:r,itemTextColorChildActiveInverted:r,itemTextColorChildActiveHoverInverted:r,itemTextColorActiveInverted:r,itemTextColorActiveHoverInverted:r,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:r,itemTextColorChildActiveHorizontalInverted:r,itemTextColorChildActiveHoverHorizontalInverted:r,itemTextColorActiveHorizontalInverted:r,itemTextColorActiveHoverHorizontalInverted:r,itemIconColorInverted:e,itemIconColorHoverInverted:r,itemIconColorActiveInverted:r,itemIconColorActiveHoverInverted:r,itemIconColorChildActiveInverted:r,itemIconColorChildActiveHoverInverted:r,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:r,itemIconColorActiveHorizontalInverted:r,itemIconColorActiveHoverHorizontalInverted:r,itemIconColorChildActiveHorizontalInverted:r,itemIconColorChildActiveHoverHorizontalInverted:r,arrowColorInverted:e,arrowColorHoverInverted:r,arrowColorActiveInverted:r,arrowColorActiveHoverInverted:r,arrowColorChildActiveInverted:r,arrowColorChildActiveHoverInverted:r,groupTextColorInverted:n}}const oy=e=>{const{borderRadius:t,textColor3:r,primaryColor:n,textColor2:o,textColor1:i,fontSize:s,dividerColor:a,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:r,itemColorHover:l,itemColorActive:X(n,{alpha:.1}),itemColorActiveHover:X(n,{alpha:.1}),itemColorActiveCollapsed:X(n,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:a},jR("#BBB",n,"#FFF","#AAA"))},WR={name:"Menu",common:ie,peers:{Tooltip:Sa,Dropdown:Ef},self:oy},UR=WR,VR={name:"Menu",common:oe,peers:{Tooltip:Lc,Dropdown:Tf},self(e){const{primaryColor:t,primaryColorSuppl:r}=e,n=oy(e);return n.itemColorActive=X(t,{alpha:.15}),n.itemColorActiveHover=X(t,{alpha:.15}),n.itemColorActiveCollapsed=X(t,{alpha:.15}),n.itemColorActiveInverted=r,n.itemColorActiveHoverInverted=r,n.itemColorActiveCollapsedInverted=r,n}},KR=VR,qR={titleFontSize:"18px",backSize:"22px"};function iy(e){const{textColor1:t,textColor2:r,textColor3:n,fontSize:o,fontWeightStrong:i,primaryColorHover:s,primaryColorPressed:a}=e;return Object.assign(Object.assign({},qR),{titleFontWeight:i,fontSize:o,titleTextColor:t,backColor:r,backColorHover:s,backColorPressed:a,subtitleTextColor:n})}const GR={name:"PageHeader",common:ie,self:iy},XR={name:"PageHeader",common:oe,self:iy},YR={iconSize:"22px"},sy=e=>{const{fontSize:t,warningColor:r}=e;return Object.assign(Object.assign({},YR),{fontSize:t,iconColor:r})},ZR={name:"Popconfirm",common:ie,peers:{Button:Wt,Popover:ao},self:sy},JR=ZR,QR={name:"Popconfirm",common:oe,peers:{Button:er,Popover:Yo},self:sy},eO=QR,ay=e=>{const{infoColor:t,successColor:r,warningColor:n,errorColor:o,textColor2:i,progressRailColor:s,fontSize:a,fontWeight:l}=e;return{fontSize:a,fontSizeCircle:"28px",fontWeightCircle:l,railColor:s,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:r,iconColorWarning:n,iconColorError:o,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:t,fillColorInfo:t,fillColorSuccess:r,fillColorWarning:n,fillColorError:o,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},tO={name:"Progress",common:ie,self:ay},kf=tO,rO={name:"Progress",common:oe,self(e){const t=ay(e);return t.textColorLineInner="rgb(0, 0, 0)",t.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",t}},ly=rO,nO={name:"Rate",common:oe,self(e){const{railColor:t}=e;return{itemColor:t,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},oO=nO,iO=e=>{const{railColor:t}=e;return{itemColor:t,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},sO={name:"Rate",common:ie,self:iO},aO=sO,lO={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},cy=e=>{const{textColor2:t,textColor1:r,errorColor:n,successColor:o,infoColor:i,warningColor:s,lineHeight:a,fontWeightStrong:l}=e;return Object.assign(Object.assign({},lO),{lineHeight:a,titleFontWeight:l,titleTextColor:r,textColor:t,iconColorError:n,iconColorSuccess:o,iconColorInfo:i,iconColorWarning:s})},cO={name:"Result",common:ie,self:cy},uO=cO,dO={name:"Result",common:oe,self:cy},fO=dO,uy={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},hO={name:"Slider",common:oe,self(e){const t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:r,modalColor:n,primaryColorSuppl:o,popoverColor:i,textColor2:s,cardColor:a,borderRadius:l,fontSize:c,opacityDisabled:u}=e;return Object.assign(Object.assign({},uy),{fontSize:c,markFontSize:c,railColor:r,railColorHover:r,fillColor:o,fillColorHover:o,opacityDisabled:u,handleColor:"#FFF",dotColor:a,dotColorModal:n,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:t,indicatorTextColor:s,indicatorBorderRadius:l,dotBorder:`2px solid ${r}`,dotBorderActive:`2px solid ${o}`,dotBoxShadow:""})}},pO=hO,gO=e=>{const t="rgba(0, 0, 0, .85)",r="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:n,primaryColor:o,baseColor:i,cardColor:s,modalColor:a,popoverColor:l,borderRadius:c,fontSize:u,opacityDisabled:d}=e;return Object.assign(Object.assign({},uy),{fontSize:u,markFontSize:u,railColor:n,railColorHover:n,fillColor:o,fillColorHover:o,opacityDisabled:d,handleColor:"#FFF",dotColor:s,dotColorModal:a,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:t,indicatorBoxShadow:r,indicatorTextColor:i,indicatorBorderRadius:c,dotBorder:`2px solid ${n}`,dotBorderActive:`2px solid ${o}`,dotBoxShadow:""})},mO={name:"Slider",common:ie,self:gO},bO=mO,dy=e=>{const{opacityDisabled:t,heightTiny:r,heightSmall:n,heightMedium:o,heightLarge:i,heightHuge:s,primaryColor:a,fontSize:l}=e;return{fontSize:l,textColor:a,sizeTiny:r,sizeSmall:n,sizeMedium:o,sizeLarge:i,sizeHuge:s,color:a,opacitySpinning:t}},vO={name:"Spin",common:ie,self:dy},yO=vO,xO={name:"Spin",common:oe,self:dy},CO=xO,fy=e=>{const{textColor2:t,textColor3:r,fontSize:n,fontWeight:o}=e;return{labelFontSize:n,labelFontWeight:o,valueFontWeight:o,valueFontSize:"24px",labelTextColor:r,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}},wO={name:"Statistic",common:ie,self:fy},SO=wO,_O={name:"Statistic",common:oe,self:fy},EO=_O,TO={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},hy=e=>{const{fontWeightStrong:t,baseColor:r,textColorDisabled:n,primaryColor:o,errorColor:i,textColor1:s,textColor2:a}=e;return Object.assign(Object.assign({},TO),{stepHeaderFontWeight:t,indicatorTextColorProcess:r,indicatorTextColorWait:n,indicatorTextColorFinish:o,indicatorTextColorError:i,indicatorBorderColorProcess:o,indicatorBorderColorWait:n,indicatorBorderColorFinish:o,indicatorBorderColorError:i,indicatorColorProcess:o,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:n,splitorColorWait:n,splitorColorFinish:o,splitorColorError:n,headerTextColorProcess:s,headerTextColorWait:n,headerTextColorFinish:n,headerTextColorError:i,descriptionTextColorProcess:a,descriptionTextColorWait:n,descriptionTextColorFinish:n,descriptionTextColorError:i})},$O={name:"Steps",common:ie,self:hy},PO=$O,LO={name:"Steps",common:oe,self:hy},kO=LO,py={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},IO={name:"Switch",common:oe,self(e){const{primaryColorSuppl:t,opacityDisabled:r,borderRadius:n,primaryColor:o,textColor2:i,baseColor:s}=e,a="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},py),{iconColor:s,textColor:i,loadingColor:t,opacityDisabled:r,railColor:a,railColorActive:t,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 8px 0 ${X(o,{alpha:.3})}`})}},RO=IO,OO=e=>{const{primaryColor:t,opacityDisabled:r,borderRadius:n,textColor3:o}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},py),{iconColor:o,textColor:"white",loadingColor:t,opacityDisabled:r,railColor:i,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${X(t,{alpha:.2})}`})},AO={name:"Switch",common:ie,self:OO},BO=AO,MO={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},gy=e=>{const{dividerColor:t,cardColor:r,modalColor:n,popoverColor:o,tableHeaderColor:i,tableColorStriped:s,textColor1:a,textColor2:l,borderRadius:c,fontWeightStrong:u,lineHeight:d,fontSizeSmall:f,fontSizeMedium:h,fontSizeLarge:p}=e;return Object.assign(Object.assign({},MO),{fontSizeSmall:f,fontSizeMedium:h,fontSizeLarge:p,lineHeight:d,borderRadius:c,borderColor:he(r,t),borderColorModal:he(n,t),borderColorPopover:he(o,t),tdColor:r,tdColorModal:n,tdColorPopover:o,tdColorStriped:he(r,s),tdColorStripedModal:he(n,s),tdColorStripedPopover:he(o,s),thColor:he(r,i),thColorModal:he(n,i),thColorPopover:he(o,i),thTextColor:a,tdTextColor:l,thFontWeight:u})},HO={name:"Table",common:ie,self:gy},DO=HO,zO={name:"Table",common:oe,self:gy},FO=zO,NO={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},my=e=>{const{textColor2:t,primaryColor:r,textColorDisabled:n,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,tabColor:c,baseColor:u,dividerColor:d,fontWeight:f,textColor1:h,borderRadius:p,fontSize:b,fontWeightStrong:w}=e;return Object.assign(Object.assign({},NO),{colorSegment:c,tabFontSizeCard:b,tabTextColorLine:h,tabTextColorActiveLine:r,tabTextColorHoverLine:r,tabTextColorDisabledLine:n,tabTextColorSegment:h,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:n,tabTextColorBar:h,tabTextColorActiveBar:r,tabTextColorHoverBar:r,tabTextColorDisabledBar:n,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:r,tabTextColorDisabledCard:n,barColor:r,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,closeBorderRadius:p,tabColor:c,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:p,paneTextColor:t,fontWeightStrong:w})},jO={name:"Tabs",common:ie,self:my},WO=jO,UO={name:"Tabs",common:oe,self(e){const t=my(e),{inputColor:r}=e;return t.colorSegment=r,t.tabColorSegment=r,t}},VO=UO,by=e=>{const{textColor1:t,textColor2:r,fontWeightStrong:n,fontSize:o}=e;return{fontSize:o,titleTextColor:t,textColor:r,titleFontWeight:n}},KO={name:"Thing",common:ie,self:by},qO=KO,GO={name:"Thing",common:oe,self:by},XO=GO,vy={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},YO={name:"Timeline",common:oe,self(e){const{textColor3:t,infoColorSuppl:r,errorColorSuppl:n,successColorSuppl:o,warningColorSuppl:i,textColor1:s,textColor2:a,railColor:l,fontWeightStrong:c,fontSize:u}=e;return Object.assign(Object.assign({},vy),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${n}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:r,iconColorError:n,iconColorSuccess:o,iconColorWarning:i,titleTextColor:s,contentTextColor:a,metaTextColor:t,lineColor:l})}},ZO=YO,JO=e=>{const{textColor3:t,infoColor:r,errorColor:n,successColor:o,warningColor:i,textColor1:s,textColor2:a,railColor:l,fontWeightStrong:c,fontSize:u}=e;return Object.assign(Object.assign({},vy),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${n}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:r,iconColorError:n,iconColorSuccess:o,iconColorWarning:i,titleTextColor:s,contentTextColor:a,metaTextColor:t,lineColor:l})},QO={name:"Timeline",common:ie,self:JO},eA=QO,yy={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},tA={name:"Transfer",common:oe,peers:{Checkbox:es,Scrollbar:Qt,Input:Cr,Empty:Xo,Button:er},self(e){const{fontWeight:t,fontSizeLarge:r,fontSizeMedium:n,fontSizeSmall:o,heightLarge:i,heightMedium:s,borderRadius:a,inputColor:l,tableHeaderColor:c,textColor1:u,textColorDisabled:d,textColor2:f,textColor3:h,hoverColor:p,closeColorHover:b,closeColorPressed:w,closeIconColor:g,closeIconColorHover:m,closeIconColorPressed:_,dividerColor:x}=e;return Object.assign(Object.assign({},yy),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:i,fontSizeSmall:o,fontSizeMedium:n,fontSizeLarge:r,borderRadius:a,dividerColor:x,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:u,titleTextColorDisabled:d,extraTextColor:h,extraTextColorDisabled:d,itemTextColor:f,itemTextColorDisabled:d,itemColorPending:p,titleFontWeight:t,closeColorHover:b,closeColorPressed:w,closeIconColor:g,closeIconColorHover:m,closeIconColorPressed:_})}},rA=tA,nA=e=>{const{fontWeight:t,fontSizeLarge:r,fontSizeMedium:n,fontSizeSmall:o,heightLarge:i,heightMedium:s,borderRadius:a,cardColor:l,tableHeaderColor:c,textColor1:u,textColorDisabled:d,textColor2:f,textColor3:h,borderColor:p,hoverColor:b,closeColorHover:w,closeColorPressed:g,closeIconColor:m,closeIconColorHover:_,closeIconColorPressed:x}=e;return Object.assign(Object.assign({},yy),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:i,fontSizeSmall:o,fontSizeMedium:n,fontSizeLarge:r,borderRadius:a,dividerColor:p,borderColor:p,listColor:l,headerColor:he(l,c),titleTextColor:u,titleTextColorDisabled:d,extraTextColor:h,extraTextColorDisabled:d,itemTextColor:f,itemTextColorDisabled:d,itemColorPending:b,titleFontWeight:t,closeColorHover:w,closeColorPressed:g,closeIconColor:m,closeIconColorHover:_,closeIconColorPressed:x})},oA={name:"Transfer",common:ie,peers:{Checkbox:Qi,Scrollbar:jt,Input:wr,Empty:bn,Button:Wt},self:nA},iA=oA,xy=e=>{const{borderRadiusSmall:t,hoverColor:r,pressedColor:n,primaryColor:o,textColor3:i,textColor2:s,textColorDisabled:a,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:t,nodeColorHover:r,nodeColorPressed:n,nodeColorActive:X(o,{alpha:.1}),arrowColor:i,nodeTextColor:s,nodeTextColorDisabled:a,loadingColor:o,dropMarkColor:o}},sA={name:"Tree",common:ie,peers:{Checkbox:Qi,Scrollbar:jt,Empty:bn},self:xy},Cy=sA,aA={name:"Tree",common:oe,peers:{Checkbox:es,Scrollbar:Qt,Empty:Xo},self(e){const{primaryColor:t}=e,r=xy(e);return r.nodeColorActive=X(t,{alpha:.15}),r}},wy=aA,lA={name:"TreeSelect",common:oe,peers:{Tree:wy,Empty:Xo,InternalSelection:wf}},cA=lA,uA=e=>{const{popoverColor:t,boxShadow2:r,borderRadius:n,heightMedium:o,dividerColor:i,textColor2:s}=e;return{menuPadding:"4px",menuColor:t,menuBoxShadow:r,menuBorderRadius:n,menuHeight:`calc(${o} * 7.6)`,actionDividerColor:i,actionTextColor:s,actionPadding:"8px 12px"}},dA={name:"TreeSelect",common:ie,peers:{Tree:Cy,Empty:bn,InternalSelection:Cf},self:uA},fA=dA,hA={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Sy=e=>{const{primaryColor:t,textColor2:r,borderColor:n,lineHeight:o,fontSize:i,borderRadiusSmall:s,dividerColor:a,fontWeightStrong:l,textColor1:c,textColor3:u,infoColor:d,warningColor:f,errorColor:h,successColor:p,codeColor:b}=e;return Object.assign(Object.assign({},hA),{aTextColor:t,blockquoteTextColor:r,blockquotePrefixColor:n,blockquoteLineHeight:o,blockquoteFontSize:i,codeBorderRadius:s,liTextColor:r,liLineHeight:o,liFontSize:i,hrColor:a,headerFontWeight:l,headerTextColor:c,pTextColor:r,pTextColor1Depth:c,pTextColor2Depth:r,pTextColor3Depth:u,pLineHeight:o,pFontSize:i,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:d,headerBarColorError:h,headerBarColorWarning:f,headerBarColorSuccess:p,textColor:r,textColor1Depth:c,textColor2Depth:r,textColor3Depth:u,textColorPrimary:t,textColorInfo:d,textColorSuccess:p,textColorWarning:f,textColorError:h,codeTextColor:r,codeColor:b,codeBorder:"1px solid #0000"})},pA={name:"Typography",common:ie,self:Sy},gA=pA,mA={name:"Typography",common:oe,self:Sy},bA=mA,_y=e=>{const{iconColor:t,primaryColor:r,errorColor:n,textColor2:o,successColor:i,opacityDisabled:s,actionColor:a,borderColor:l,hoverColor:c,lineHeight:u,borderRadius:d,fontSize:f}=e;return{fontSize:f,lineHeight:u,borderRadius:d,draggerColor:a,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${r}`,itemColorHover:c,itemColorHoverError:X(n,{alpha:.06}),itemTextColor:o,itemTextColorError:n,itemTextColorSuccess:i,itemIconColor:t,itemDisabledOpacity:s,itemBorderImageCardError:`1px solid ${n}`,itemBorderImageCard:`1px solid ${l}`}},vA={name:"Upload",common:ie,peers:{Button:Wt,Progress:kf},self:_y},Ey=vA,yA={name:"Upload",common:oe,peers:{Button:er,Progress:ly},self(e){const{errorColor:t}=e,r=_y(e);return r.itemColorHoverError=X(t,{alpha:.09}),r}},xA=yA,CA={name:"Watermark",common:oe,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},wA=CA,SA={name:"Watermark",common:ie,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},_A=SA,EA={name:"Row",common:ie},TA=EA,$A={name:"Row",common:oe},PA=$A,LA={name:"Image",common:oe,peers:{Tooltip:Lc},self:e=>{const{textColor2:t}=e;return{toolbarIconColor:t,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},kA=E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),IA=E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),RA=E("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),OA=N([N("body >",[U("image-container","position: fixed;")]),U("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),U("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[na()]),U("image-preview-toolbar",`
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
 `,[U("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),na()]),U("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[Hv()]),U("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),U("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[Io("preview-disabled",`
 cursor: pointer;
 `),N("img",`
 border-radius: inherit;
 `)])]),tl=32,Ty=be({name:"ImagePreview",props:Object.assign(Object.assign({},Lf),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const t=Qe("Image","-image",OA,Z1,e,Be(e,"clsPrefix"));let r=null;const n=W(null),o=W(null),i=W(void 0),s=W(!1),a=W(!1),{localeRef:l}=C6("Image");function c(){const{value:T}=o;if(!r||!T)return;const{style:v}=T,y=r.getBoundingClientRect(),L=y.left+y.width/2,A=y.top+y.height/2;v.transformOrigin=`${L}px ${A}px`}function u(T){var v,y;switch(T.key){case" ":T.preventDefault();break;case"ArrowLeft":(v=e.onPrev)===null||v===void 0||v.call(e);break;case"ArrowRight":(y=e.onNext)===null||y===void 0||y.call(e);break;case"Escape":j();break}}tt(s,T=>{T?bt("keydown",document,u):nt("keydown",document,u)}),wt(()=>{nt("keydown",document,u)});let d=0,f=0,h=0,p=0,b=0,w=0,g=0,m=0,_=!1;function x(T){const{clientX:v,clientY:y}=T;h=v-d,p=y-f,ab(Ve)}function C(T){const{mouseUpClientX:v,mouseUpClientY:y,mouseDownClientX:L,mouseDownClientY:A}=T,D=L-v,K=A-y,Y=`vertical${K>0?"Top":"Bottom"}`,V=`horizontal${D>0?"Left":"Right"}`;return{moveVerticalDirection:Y,moveHorizontalDirection:V,deltaHorizontal:D,deltaVertical:K}}function $(T){const{value:v}=n;if(!v)return{offsetX:0,offsetY:0};const y=v.getBoundingClientRect(),{moveVerticalDirection:L,moveHorizontalDirection:A,deltaHorizontal:D,deltaVertical:K}=T||{};let Y=0,V=0;return y.width<=window.innerWidth?Y=0:y.left>0?Y=(y.width-window.innerWidth)/2:y.right<window.innerWidth?Y=-(y.width-window.innerWidth)/2:A==="horizontalRight"?Y=Math.min((y.width-window.innerWidth)/2,b-(D!=null?D:0)):Y=Math.max(-((y.width-window.innerWidth)/2),b-(D!=null?D:0)),y.height<=window.innerHeight?V=0:y.top>0?V=(y.height-window.innerHeight)/2:y.bottom<window.innerHeight?V=-(y.height-window.innerHeight)/2:L==="verticalBottom"?V=Math.min((y.height-window.innerHeight)/2,w-(K!=null?K:0)):V=Math.max(-((y.height-window.innerHeight)/2),w-(K!=null?K:0)),{offsetX:Y,offsetY:V}}function S(T){nt("mousemove",document,x),nt("mouseup",document,S);const{clientX:v,clientY:y}=T;_=!1;const L=C({mouseUpClientX:v,mouseUpClientY:y,mouseDownClientX:g,mouseDownClientY:m}),A=$(L);h=A.offsetX,p=A.offsetY,Ve()}const P=Se(Y1,null);function k(T){var v,y;if((y=(v=P==null?void 0:P.previewedImgPropsRef.value)===null||v===void 0?void 0:v.onMousedown)===null||y===void 0||y.call(v,T),T.button!==0)return;const{clientX:L,clientY:A}=T;_=!0,d=L-h,f=A-p,b=h,w=p,g=L,m=A,Ve(),bt("mousemove",document,x),bt("mouseup",document,S)}function I(T){var v,y;(y=(v=P==null?void 0:P.previewedImgPropsRef.value)===null||v===void 0?void 0:v.onDblclick)===null||y===void 0||y.call(v,T);const L=Te();H=H===L?1:L,Ve()}const O=1.5;let R=0,H=1,B=0;function Z(){H=1,R=0}function G(){var T;Z(),B=0,(T=e.onPrev)===null||T===void 0||T.call(e)}function J(){var T;Z(),B=0,(T=e.onNext)===null||T===void 0||T.call(e)}function se(){B-=90,Ve()}function ye(){B+=90,Ve()}function ke(){const{value:T}=n;if(!T)return 1;const{innerWidth:v,innerHeight:y}=window,L=Math.max(1,T.naturalHeight/(y-tl)),A=Math.max(1,T.naturalWidth/(v-tl));return Math.max(3,L*2,A*2)}function Te(){const{value:T}=n;if(!T)return 1;const{innerWidth:v,innerHeight:y}=window,L=T.naturalHeight/(y-tl),A=T.naturalWidth/(v-tl);return L<1&&A<1?1:Math.max(L,A)}function Ae(){const T=ke();H<T&&(R+=1,H=Math.min(T,Math.pow(O,R)),Ve())}function ut(){if(H>.5){const T=H;R-=1,H=Math.max(.5,Math.pow(O,R));const v=T-H;Ve(!1);const y=$();H+=v,Ve(!1),H-=v,h=y.offsetX,p=y.offsetY,Ve()}}function Ve(T=!0){var v;const{value:y}=n;if(!y)return;const{style:L}=y,A=qi((v=P==null?void 0:P.previewedImgPropsRef.value)===null||v===void 0?void 0:v.style);let D="";if(typeof A=="string")D=A+";";else for(const Y in A)D+=`${$4(Y)}: ${A[Y]};`;const K=`transform-origin: center; transform: translateX(${h}px) translateY(${p}px) rotate(${B}deg) scale(${H});`;_?L.cssText=D+"cursor: grabbing; transition: none;"+K:L.cssText=D+"cursor: grab;"+K+(T?"":"transition: none;"),T||y.offsetHeight}function j(){s.value=!s.value,a.value=!0}function Q(){H=Te(),R=Math.ceil(Math.log(H)/Math.log(O)),h=0,p=0,Ve()}const te={setPreviewSrc:T=>{i.value=T},setThumbnailEl:T=>{r=T},toggleShow:j};function de(T,v){if(e.showToolbarTooltip){const{value:y}=t;return E(O8,{to:!1,theme:y.peers.Tooltip,themeOverrides:y.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>l.value[v],trigger:()=>T})}else return T}const ae=q(()=>{const{common:{cubicBezierEaseInOut:T},self:{toolbarIconColor:v,toolbarBorderRadius:y,toolbarBoxShadow:L,toolbarColor:A}}=t.value;return{"--n-bezier":T,"--n-toolbar-icon-color":v,"--n-toolbar-color":A,"--n-toolbar-border-radius":y,"--n-toolbar-box-shadow":L}}),{inlineThemeDisabled:$e}=It(),ve=$e?xr("image-preview",void 0,ae,e):void 0;return Object.assign({previewRef:n,previewWrapperRef:o,previewSrc:i,show:s,appear:Zi(),displayed:a,previewedImgProps:P==null?void 0:P.previewedImgPropsRef,handleWheel(T){T.preventDefault()},handlePreviewMousedown:k,handlePreviewDblclick:I,syncTransformOrigin:c,handleAfterLeave:()=>{Z(),B=0,a.value=!1},handleDragStart:T=>{var v,y;(y=(v=P==null?void 0:P.previewedImgPropsRef.value)===null||v===void 0?void 0:v.onDragstart)===null||y===void 0||y.call(v,T),T.preventDefault()},zoomIn:Ae,zoomOut:ut,rotateCounterclockwise:se,rotateClockwise:ye,handleSwitchPrev:G,handleSwitchNext:J,withTooltip:de,resizeToOrignalImageSize:Q,cssVars:$e?void 0:ae,themeClass:ve==null?void 0:ve.themeClass,onRender:ve==null?void 0:ve.onRender},te)},render(){var e,t;const{clsPrefix:r}=this;return E(Ge,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),E(sf,{show:this.show},{default:()=>{var n;return this.show||this.displayed?((n=this.onRender)===null||n===void 0||n.call(this),Wr(E("div",{class:[`${r}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},E(Yt,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?E("div",{class:`${r}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?E(Yt,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:o}=this;return E("div",{class:`${r}-image-preview-toolbar`},this.onPrev?E(Ge,null,o(E(dt,{clsPrefix:r,onClick:this.handleSwitchPrev},{default:()=>kA}),"tipPrevious"),o(E(dt,{clsPrefix:r,onClick:this.handleSwitchNext},{default:()=>IA}),"tipNext")):null,o(E(dt,{clsPrefix:r,onClick:this.rotateCounterclockwise},{default:()=>E(I6,null)}),"tipCounterclockwise"),o(E(dt,{clsPrefix:r,onClick:this.rotateClockwise},{default:()=>E(k6,null)}),"tipClockwise"),o(E(dt,{clsPrefix:r,onClick:this.resizeToOrignalImageSize},{default:()=>E(A6,null)}),"tipOriginalSize"),o(E(dt,{clsPrefix:r,onClick:this.zoomOut},{default:()=>E(O6,null)}),"tipZoomOut"),o(E(dt,{clsPrefix:r,onClick:this.zoomIn},{default:()=>E(R6,null)}),"tipZoomIn"),o(E(dt,{clsPrefix:r,onClick:this.toggleShow},{default:()=>RA}),"tipClose"))}}):null,E(Yt,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:o={}}=this;return Wr(E("div",{class:`${r}-image-preview-wrapper`,ref:"previewWrapperRef"},E("img",Object.assign({},o,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${r}-image-preview`,o.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[Ri,this.show]])}})),[[xc,{enabled:this.show}]])):null}}))}}),$y="n-image-group",AA=Lf,BA=be({name:"ImageGroup",props:AA,setup(e){let t;const{mergedClsPrefixRef:r}=It(e),n=`c${Ho()}`,o=zt(),i=l=>{var c;t=l,(c=a.value)===null||c===void 0||c.setPreviewSrc(l)};function s(l){if(!(o!=null&&o.proxy))return;const u=o.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${n}]:not([data-error=true])`);if(!u.length)return;const d=Array.from(u).findIndex(f=>f.dataset.previewSrc===t);~d?i(u[(d+l+u.length)%u.length].dataset.previewSrc):i(u[0].dataset.previewSrc)}Ze($y,{mergedClsPrefixRef:r,setPreviewSrc:i,setThumbnailEl:l=>{var c;(c=a.value)===null||c===void 0||c.setThumbnailEl(l)},toggleShow:()=>{var l;(l=a.value)===null||l===void 0||l.toggleShow()},groupId:n});const a=W(null);return{mergedClsPrefix:r,previewInstRef:a,next:()=>s(1),prev:()=>s(-1)}},render(){return E(Ty,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}}),MA=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},Lf),HA=be({name:"Image",props:MA,inheritAttrs:!1,setup(e){const t=W(null),r=W(!1),n=W(null),o=Se($y,null),{mergedClsPrefixRef:i}=o||It(e),s={click:()=>{if(e.previewDisabled||r.value)return;const c=e.previewSrc||e.src;if(o){o.setPreviewSrc(c),o.setThumbnailEl(t.value),o.toggleShow();return}const{value:u}=n;!u||(u.setPreviewSrc(c),u.setThumbnailEl(t.value),u.toggleShow())}},a=W(!e.lazy);Et(()=>{var c;(c=t.value)===null||c===void 0||c.setAttribute("data-group-id",(o==null?void 0:o.groupId)||"")}),Et(()=>{if(du)return;let c;const u=$r(()=>{c==null||c(),c=void 0,e.lazy&&(c=qL(t.value,e.intersectionObserverOptions,a))});wt(()=>{u(),c==null||c()})}),$r(()=>{var c;e.src,(c=e.imgProps)===null||c===void 0||c.src,r.value=!1});const l=W(!1);return Ze(Y1,{previewedImgPropsRef:Be(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:i,groupId:o==null?void 0:o.groupId,previewInstRef:n,imageRef:t,showError:r,shouldStartLoading:a,loaded:l,mergedOnClick:c=>{var u,d;s.click(),(d=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||d===void 0||d.call(u,c)},mergedOnError:c=>{if(!a.value)return;r.value=!0;const{onError:u,imgProps:{onError:d}={}}=e;u==null||u(c),d==null||d(c)},mergedOnLoad:c=>{const{onLoad:u,imgProps:{onLoad:d}={}}=e;u==null||u(c),d==null||d(c),l.value=!0}},s)},render(){var e,t;const{mergedClsPrefix:r,imgProps:n={},loaded:o,$attrs:i,lazy:s}=this,a=(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e),l=this.src||n.src||"",c=E("img",Object.assign(Object.assign({},n),{ref:"imageRef",width:this.width||n.width,height:this.height||n.height,src:du?l:this.showError?this.fallbackSrc:this.shouldStartLoading?l:void 0,alt:this.alt||n.alt,"aria-label":this.alt||n.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:du&&s&&!this.intersectionObserverOptions?"lazy":"eager",style:[n.style||"",a&&!o?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return E("div",Object.assign({},i,{role:"none",class:[i.class,`${r}-image`,(this.previewDisabled||this.showError)&&`${r}-image--preview-disabled`]}),this.groupId?c:E(Ty,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:r,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>c}),!o&&a)}}),Py={extraFontSize:"12px",width:"440px"},DA={name:"Transfer",common:oe,peers:{Checkbox:es,Scrollbar:Qt,Input:Cr,Empty:Xo,Button:er},self(e){const{iconColorDisabled:t,iconColor:r,fontWeight:n,fontSizeLarge:o,fontSizeMedium:i,fontSizeSmall:s,heightLarge:a,heightMedium:l,heightSmall:c,borderRadius:u,inputColor:d,tableHeaderColor:f,textColor1:h,textColorDisabled:p,textColor2:b,hoverColor:w}=e;return Object.assign(Object.assign({},Py),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:a,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:o,borderRadius:u,borderColor:"#0000",listColor:d,headerColor:f,titleTextColor:h,titleTextColorDisabled:p,extraTextColor:b,filterDividerColor:"#0000",itemTextColor:b,itemTextColorDisabled:p,itemColorPending:w,titleFontWeight:n,iconColor:r,iconColorDisabled:t})}},zA=DA,FA=e=>{const{fontWeight:t,iconColorDisabled:r,iconColor:n,fontSizeLarge:o,fontSizeMedium:i,fontSizeSmall:s,heightLarge:a,heightMedium:l,heightSmall:c,borderRadius:u,cardColor:d,tableHeaderColor:f,textColor1:h,textColorDisabled:p,textColor2:b,borderColor:w,hoverColor:g}=e;return Object.assign(Object.assign({},Py),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:a,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:o,borderRadius:u,borderColor:w,listColor:d,headerColor:he(d,f),titleTextColor:h,titleTextColorDisabled:p,extraTextColor:b,filterDividerColor:w,itemTextColor:b,itemTextColorDisabled:p,itemColorPending:g,titleFontWeight:t,iconColor:n,iconColorDisabled:r})},NA={name:"Transfer",common:ie,peers:{Checkbox:Qi,Scrollbar:jt,Input:wr,Empty:bn,Button:Wt},self:FA},jA=NA,Ly="n-loading-bar",ky="n-loading-bar-api",WA=U("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[na({enterDuration:"0.3s",leaveDuration:"0.8s"}),U("loading-bar",`
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
 `)])]);var gu=globalThis&&globalThis.__awaiter||function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};function rl(e,t){return`${t}-loading-bar ${t}-loading-bar--${e}`}const UA=be({name:"LoadingBar",props:{containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:e}=It(),{props:t,mergedClsPrefixRef:r}=Se(Ly),n=W(null),o=W(!1),i=W(!1),s=W(!1),a=W(!1);let l=!1;const c=W(!1),u=q(()=>{const{loadingBarStyle:C}=t;return C?C[c.value?"error":"loading"]:""});function d(){return gu(this,void 0,void 0,function*(){o.value=!1,s.value=!1,l=!1,c.value=!1,a.value=!0,yield Ht(),a.value=!1})}function f(C=0,$=80,S="starting"){return gu(this,void 0,void 0,function*(){yield d(),s.value=!0,i.value=!0,yield Ht();const P=n.value;!P||(P.style.maxWidth=`${C}%`,P.style.transition="none",P.offsetWidth,P.className=rl(S,r.value),P.style.transition="",P.style.maxWidth=`${$}%`)})}function h(){if(l||c.value||!s.value)return;l=!0;const C=n.value;!C||(C.className=rl("finishing",r.value),C.style.maxWidth="100%",C.offsetWidth,s.value=!1)}function p(){if(!(l||c.value))if(!s.value)f(100,100,"error").then(()=>{c.value=!0;const C=n.value;!C||(C.className=rl("error",r.value),C.offsetWidth,s.value=!1)});else{c.value=!0;const C=n.value;if(!C)return;C.className=rl("error",r.value),C.style.maxWidth="100%",C.offsetWidth,s.value=!1}}function b(){o.value=!0}function w(){o.value=!1}function g(){return gu(this,void 0,void 0,function*(){yield d()})}const m=Qe("LoadingBar","-loading-bar",WA,ny,t,r),_=q(()=>{const{self:{height:C,colorError:$,colorLoading:S}}=m.value;return{"--n-height":C,"--n-color-loading":S,"--n-color-error":$}}),x=e?xr("loading-bar",void 0,_,t):void 0;return{mergedClsPrefix:r,loadingBarRef:n,started:i,loading:s,entering:o,transitionDisabled:a,start:f,error:p,finish:h,handleEnter:b,handleAfterEnter:w,handleAfterLeave:g,mergedLoadingBarStyle:u,cssVars:e?void 0:_,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return E(Yt,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Wr(E("div",{class:[`${e}-loading-bar-container`,this.themeClass],style:this.containerStyle},E("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Ri,this.loading||!this.loading&&this.entering]])}})}}),VA=Object.assign(Object.assign({},Qe.props),{to:{type:[String,Object,Boolean],default:void 0},containerStyle:[String,Object],loadingBarStyle:{type:Object}}),KA=be({name:"LoadingBarProvider",props:VA,setup(e){const t=Zi(),r=W(null),n={start(){var i;t.value?(i=r.value)===null||i===void 0||i.start():Ht(()=>{var s;(s=r.value)===null||s===void 0||s.start()})},error(){var i;t.value?(i=r.value)===null||i===void 0||i.error():Ht(()=>{var s;(s=r.value)===null||s===void 0||s.error()})},finish(){var i;t.value?(i=r.value)===null||i===void 0||i.finish():Ht(()=>{var s;(s=r.value)===null||s===void 0||s.finish()})}},{mergedClsPrefixRef:o}=It(e);return Ze(ky,n),Ze(Ly,{props:e,mergedClsPrefixRef:o}),Object.assign(n,{loadingBarRef:r})},render(){var e,t;return E(Ge,null,E(ha,{disabled:this.to===!1,to:this.to||"body"},E(UA,{ref:"loadingBarRef",containerStyle:this.containerStyle})),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function qA(){const e=Se(ky,null);return e===null&&Uo("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const Iy={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},Ry="n-message-api",Oy="n-message-provider",GA=N([U("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[ld({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),U("message",`
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
 `,[ne("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),ne("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>re(`${e}-type`,[N("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),N("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[ra()])]),ne("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[N("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),N("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),U("message-container",`
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
 `)])]),XA={info:()=>E(Bi,null),success:()=>E(ya,null),warning:()=>E(xa,null),error:()=>E(va,null),default:()=>null},YA=be({name:"Message",props:Object.assign(Object.assign({},Iy),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:r}=It(e),{props:n,mergedClsPrefixRef:o}=Se(Oy),i=ba("Message",r,o),s=Qe("Message","-message",GA,ty,n,o),a=q(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:u},self:{padding:d,margin:f,maxWidth:h,iconMargin:p,closeMargin:b,closeSize:w,iconSize:g,fontSize:m,lineHeight:_,borderRadius:x,iconColorInfo:C,iconColorSuccess:$,iconColorWarning:S,iconColorError:P,iconColorLoading:k,closeIconSize:I,closeBorderRadius:O,[we("textColor",c)]:R,[we("boxShadow",c)]:H,[we("color",c)]:B,[we("closeColorHover",c)]:Z,[we("closeColorPressed",c)]:G,[we("closeIconColor",c)]:J,[we("closeIconColorPressed",c)]:se,[we("closeIconColorHover",c)]:ye}}=s.value;return{"--n-bezier":u,"--n-margin":f,"--n-padding":d,"--n-max-width":h,"--n-font-size":m,"--n-icon-margin":p,"--n-icon-size":g,"--n-close-icon-size":I,"--n-close-border-radius":O,"--n-close-size":w,"--n-close-margin":b,"--n-text-color":R,"--n-color":B,"--n-box-shadow":H,"--n-icon-color-info":C,"--n-icon-color-success":$,"--n-icon-color-warning":S,"--n-icon-color-error":P,"--n-icon-color-loading":k,"--n-close-color-hover":Z,"--n-close-color-pressed":G,"--n-close-icon-color":J,"--n-close-icon-color-pressed":se,"--n-close-icon-color-hover":ye,"--n-line-height":_,"--n-border-radius":x}}),l=t?xr("message",q(()=>e.type[0]),a,{}):void 0;return{mergedClsPrefix:o,rtlEnabled:i,messageProviderProps:n,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:n.placement}},render(){const{render:e,type:t,closable:r,content:n,mergedClsPrefix:o,cssVars:i,themeClass:s,onRender:a,icon:l,handleClose:c,showIcon:u}=this;a==null||a();let d;return E("div",{class:[`${o}-message-wrapper`,s],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):E("div",{class:[`${o}-message ${o}-message--${t}-type`,this.rtlEnabled&&`${o}-message--rtl`]},(d=ZA(l,t,o))&&u?E("div",{class:`${o}-message__icon ${o}-message__icon--${t}-type`},E(Tc,null,{default:()=>d})):null,E("div",{class:`${o}-message__content`},or(n)),r?E(Pc,{clsPrefix:o,class:`${o}-message__close`,onClick:c,absolute:!0}):null))}});function ZA(e,t,r){if(typeof e=="function")return e();{const n=t==="loading"?E(Lv,{clsPrefix:r,strokeWidth:24,scale:.85}):XA[t]();return n?E(dt,{clsPrefix:r,key:t},{default:()=>n}):null}}const JA=be({name:"MessageEnvironment",props:Object.assign(Object.assign({},Iy),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const r=W(!0);Et(()=>{n()});function n(){const{duration:u}=e;u&&(t=window.setTimeout(s,u))}function o(u){u.currentTarget===u.target&&t!==null&&(window.clearTimeout(t),t=null)}function i(u){u.currentTarget===u.target&&n()}function s(){const{onHide:u}=e;r.value=!1,t&&(window.clearTimeout(t),t=null),u&&u()}function a(){const{onClose:u}=e;u&&u(),s()}function l(){const{onAfterLeave:u,onInternalAfterLeave:d,onAfterHide:f,internalKey:h}=e;u&&u(),d&&d(h),f&&f()}function c(){s()}return{show:r,hide:s,handleClose:a,handleAfterLeave:l,handleMouseleave:i,handleMouseenter:o,deactivate:c}},render(){return E($c,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?E(YA,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),QA=Object.assign(Object.assign({},Qe.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),eB=be({name:"MessageProvider",props:QA,setup(e){const{mergedClsPrefixRef:t}=It(e),r=W([]),n=W({}),o={create(l,c){return i(l,Object.assign({type:"default"},c))},info(l,c){return i(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return i(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return i(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return i(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return i(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:a};Ze(Oy,{props:e,mergedClsPrefixRef:t}),Ze(Ry,o);function i(l,c){const u=Ho(),d=Zt(Object.assign(Object.assign({},c),{content:l,key:u,destroy:()=>{var h;(h=n.value[u])===null||h===void 0||h.hide()}})),{max:f}=e;return f&&r.value.length>=f&&r.value.shift(),r.value.push(d),d}function s(l){r.value.splice(r.value.findIndex(c=>c.key===l),1),delete n.value[l]}function a(){Object.values(n.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:n,messageList:r,handleAfterLeave:s},o)},render(){var e,t,r;return E(Ge,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?E(ha,{to:(r=this.to)!==null&&r!==void 0?r:"body"},E("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(n=>E(JA,Object.assign({ref:o=>{o&&(this.messageRefs[n.key]=o)},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave},ef(n,["destroy"],void 0),{duration:n.duration===void 0?this.duration:n.duration,keepAliveOnHover:n.keepAliveOnHover===void 0?this.keepAliveOnHover:n.keepAliveOnHover,closable:n.closable===void 0?this.closable:n.closable}))))):null)}});function tB(){const e=Se(Ry,null);return e===null&&Uo("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const Ic="n-notification-provider",rB=be({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:r}=Se(Ic),n=W(null);return $r(()=>{var o,i;r.value>0?(o=n==null?void 0:n.value)===null||o===void 0||o.classList.add("transitioning"):(i=n==null?void 0:n.value)===null||i===void 0||i.classList.remove("transitioning")}),{selfRef:n,mergedTheme:e,mergedClsPrefix:t,transitioning:r}},render(){const{$slots:e,scrollable:t,mergedClsPrefix:r,mergedTheme:n,placement:o}=this;return E("div",{ref:"selfRef",class:[`${r}-notification-container`,t&&`${r}-notification-container--scrollable`,`${r}-notification-container--${o}`]},t?E(Bv,{theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),nB={info:()=>E(Bi,null),success:()=>E(ya,null),warning:()=>E(xa,null),error:()=>E(va,null),default:()=>null},If={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},oB=vc(If),iB=be({name:"Notification",props:If,setup(e){const{mergedClsPrefixRef:t,mergedThemeRef:r,props:n}=Se(Ic),{inlineThemeDisabled:o,mergedRtlRef:i}=It(),s=ba("Notification",i,t),a=q(()=>{const{type:c}=e,{self:{color:u,textColor:d,closeIconColor:f,closeIconColorHover:h,closeIconColorPressed:p,headerTextColor:b,descriptionTextColor:w,actionTextColor:g,borderRadius:m,headerFontWeight:_,boxShadow:x,lineHeight:C,fontSize:$,closeMargin:S,closeSize:P,width:k,padding:I,closeIconSize:O,closeBorderRadius:R,closeColorHover:H,closeColorPressed:B,titleFontSize:Z,metaFontSize:G,descriptionFontSize:J,[we("iconColor",c)]:se},common:{cubicBezierEaseOut:ye,cubicBezierEaseIn:ke,cubicBezierEaseInOut:Te}}=r.value,{left:Ae,right:ut,top:Ve,bottom:j}=lb(I);return{"--n-color":u,"--n-font-size":$,"--n-text-color":d,"--n-description-text-color":w,"--n-action-text-color":g,"--n-title-text-color":b,"--n-title-font-weight":_,"--n-bezier":Te,"--n-bezier-ease-out":ye,"--n-bezier-ease-in":ke,"--n-border-radius":m,"--n-box-shadow":x,"--n-close-border-radius":R,"--n-close-color-hover":H,"--n-close-color-pressed":B,"--n-close-icon-color":f,"--n-close-icon-color-hover":h,"--n-close-icon-color-pressed":p,"--n-line-height":C,"--n-icon-color":se,"--n-close-margin":S,"--n-close-size":P,"--n-close-icon-size":O,"--n-width":k,"--n-padding-left":Ae,"--n-padding-right":ut,"--n-padding-top":Ve,"--n-padding-bottom":j,"--n-title-font-size":Z,"--n-meta-font-size":G,"--n-description-font-size":J}}),l=o?xr("notification",q(()=>e.type[0]),a,n):void 0;return{mergedClsPrefix:t,showAvatar:q(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:s,cssVars:o?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),E("div",{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},E("div",{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?E("div",{class:`${t}-notification__avatar`},this.avatar?or(this.avatar):this.type!=="default"?E(dt,{clsPrefix:t},{default:()=>nB[this.type]()}):null):null,this.closable?E(Pc,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,E("div",{ref:"bodyRef",class:`${t}-notification-main`},this.title?E("div",{class:`${t}-notification-main__header`},or(this.title)):null,this.description?E("div",{class:`${t}-notification-main__description`},or(this.description)):null,this.content?E("pre",{class:`${t}-notification-main__content`},or(this.content)):null,this.meta||this.action?E("div",{class:`${t}-notification-main-footer`},this.meta?E("div",{class:`${t}-notification-main-footer__meta`},or(this.meta)):null,this.action?E("div",{class:`${t}-notification-main-footer__action`},or(this.action)):null):null)))}}),sB=Object.assign(Object.assign({},If),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),aB=be({name:"NotificationEnvironment",props:Object.assign(Object.assign({},sB),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:t}=Se(Ic),r=W(!0);let n=null;function o(){r.value=!1,n&&window.clearTimeout(n)}function i(p){t.value++,Ht(()=>{p.style.height=`${p.offsetHeight}px`,p.style.maxHeight="0",p.style.transition="none",p.offsetHeight,p.style.transition="",p.style.maxHeight=p.style.height})}function s(p){t.value--,p.style.height="",p.style.maxHeight="";const{onAfterEnter:b,onAfterShow:w}=e;b&&b(),w&&w()}function a(p){t.value++,p.style.maxHeight=`${p.offsetHeight}px`,p.style.height=`${p.offsetHeight}px`,p.offsetHeight}function l(p){const{onHide:b}=e;b&&b(),p.style.maxHeight="0",p.offsetHeight}function c(){t.value--;const{onAfterLeave:p,onInternalAfterLeave:b,onAfterHide:w,internalKey:g}=e;p&&p(),b(g),w&&w()}function u(){const{duration:p}=e;p&&(n=window.setTimeout(o,p))}function d(p){p.currentTarget===p.target&&n!==null&&(window.clearTimeout(n),n=null)}function f(p){p.currentTarget===p.target&&u()}function h(){const{onClose:p}=e;p?Promise.resolve(p()).then(b=>{b!==!1&&o()}):o()}return Et(()=>{e.duration&&(n=window.setTimeout(o,e.duration))}),{show:r,hide:o,handleClose:h,handleAfterLeave:c,handleLeave:l,handleBeforeLeave:a,handleAfterEnter:s,handleBeforeEnter:i,handleMouseenter:d,handleMouseleave:f}},render(){return E(Yt,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?E(iB,Object.assign({},Oi(this.$props,oB),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),lB=N([U("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[N(">",[U("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[N(">",[U("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[U("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),re("top, top-right, top-left",`
 top: 12px;
 `,[N("&.transitioning >",[U("scrollbar",[N(">",[U("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),re("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[N(">",[U("scrollbar",[N(">",[U("scrollbar-container",[U("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),U("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),re("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[U("notification-wrapper",[N("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),N("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),re("top",[U("notification-wrapper",`
 transform-origin: top center;
 `)]),re("bottom",[U("notification-wrapper",`
 transform-origin: bottom center;
 `)]),re("top-right, bottom-right",[U("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),re("top-left, bottom-left",[U("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),re("top-right",`
 right: 0;
 `,[nl("top-right")]),re("top-left",`
 left: 0;
 `,[nl("top-left")]),re("bottom-right",`
 right: 0;
 `,[nl("bottom-right")]),re("bottom-left",`
 left: 0;
 `,[nl("bottom-left")]),re("scrollable",[re("top-right",`
 top: 0;
 `),re("top-left",`
 top: 0;
 `),re("bottom-right",`
 bottom: 0;
 `),re("bottom-left",`
 bottom: 0;
 `)]),U("notification-wrapper",`
 margin-bottom: 12px;
 `,[N("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),N("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),N("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),N("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),U("notification",`
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
 `,[ne("avatar",[U("icon",{color:"var(--n-icon-color)"}),U("base-icon",{color:"var(--n-icon-color)"})]),re("show-avatar",[U("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),re("closable",[U("notification-main",[N("> *:first-child",{paddingRight:"20px"})]),ne("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),ne("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[U("icon","transition: color .3s var(--n-bezier);")]),U("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[U("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[ne("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),ne("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),ne("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),ne("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),ne("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[N("&:first-child",{margin:0})])])])])]);function nl(e){const r=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",n="0";return U("notification-wrapper",[N("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${r}, 0);
 `),N("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${n}, 0);
 `)])}const cB="n-notification-api",uB=Object.assign(Object.assign({},Qe.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),dB=be({name:"NotificationProvider",props:uB,setup(e){const{mergedClsPrefixRef:t}=It(e),r=W([]),n={},o=new Set;function i(h){const p=Ho(),b=()=>{o.add(p),n[p]&&n[p].hide()},w=Zt(Object.assign(Object.assign({},h),{key:p,destroy:b,hide:b,deactivate:b})),{max:g}=e;if(g&&r.value.length-o.size>=g){let m=!1,_=0;for(const x of r.value){if(!o.has(x.key)){n[x.key]&&(x.destroy(),m=!0);break}_++}m||r.value.splice(_,1)}return r.value.push(w),w}const s=["info","success","warning","error"].map(h=>p=>i(Object.assign(Object.assign({},p),{type:h})));function a(h){o.delete(h),r.value.splice(r.value.findIndex(p=>p.key===h),1)}const l=Qe("Notification","-notification",lB,Q1,e,t),c={create:i,info:s[0],success:s[1],warning:s[2],error:s[3],open:d,destroyAll:f},u=W(0);Ze(cB,c),Ze(Ic,{props:e,mergedClsPrefixRef:t,mergedThemeRef:l,wipTransitionCountRef:u});function d(h){return i(h)}function f(){Object.values(r.value).forEach(h=>{h.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:r,notificationRefs:n,handleAfterLeave:a},c)},render(){var e,t,r;const{placement:n}=this;return E(Ge,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.notificationList.length?E(ha,{to:(r=this.to)!==null&&r!==void 0?r:"body"},E(rB,{style:this.containerStyle,scrollable:this.scrollable&&n!=="top"&&n!=="bottom",placement:n},{default:()=>this.notificationList.map(o=>E(aB,Object.assign({ref:i=>{const s=o.key;i===null?delete this.notificationRefs[s]:this.notificationRefs[s]=i}},ef(o,["destroy","hide","deactivate"]),{internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover})))})):null)}}),fB=N([U("progress",{display:"inline-block"},[U("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),re("line",`
 width: 100%;
 display: block;
 `,[U("progress-content",`
 display: flex;
 align-items: center;
 `,[U("progress-graph",{flex:1})]),U("progress-custom-content",{marginLeft:"14px"}),U("progress-icon",`
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
 `)])]),re("circle, dashboard",{width:"120px"},[U("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),U("progress-text",`
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
 `),U("progress-icon",`
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
 `,[U("progress-text",`
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
 `)]),U("progress-content",{position:"relative"}),U("progress-graph",{position:"relative"},[U("progress-graph-circle",[N("svg",{verticalAlign:"bottom"}),U("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[re("empty",{opacity:0})]),U("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),U("progress-graph-line",[re("indicator-inside",[U("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[U("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),U("progress-graph-line-indicator",`
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
 `,[U("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),U("progress-graph-line-indicator",`
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
 `)]),U("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[U("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[re("processing",[N("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),N("@keyframes progress-processing-animation",`
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
 `)]),hB={success:E(ya,null),error:E(va,null),warning:E(xa,null),info:E(Bi,null)},pB=be({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const r=q(()=>rn(e.height)),n=q(()=>e.railBorderRadius!==void 0?rn(e.railBorderRadius):e.height!==void 0?rn(e.height,{c:.5}):""),o=q(()=>e.fillBorderRadius!==void 0?rn(e.fillBorderRadius):e.railBorderRadius!==void 0?rn(e.railBorderRadius):e.height!==void 0?rn(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:s,railStyle:a,percentage:l,unit:c,indicatorTextColor:u,status:d,showIndicator:f,fillColor:h,processing:p,clsPrefix:b}=e;return E("div",{class:`${b}-progress-content`,role:"none"},E("div",{class:`${b}-progress-graph`,"aria-hidden":!0},E("div",{class:[`${b}-progress-graph-line`,{[`${b}-progress-graph-line--indicator-${i}`]:!0}]},E("div",{class:`${b}-progress-graph-line-rail`,style:[{backgroundColor:s,height:r.value,borderRadius:n.value},a]},E("div",{class:[`${b}-progress-graph-line-fill`,p&&`${b}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:h,height:r.value,lineHeight:r.value,borderRadius:o.value}},i==="inside"?E("div",{class:`${b}-progress-graph-line-indicator`,style:{color:u}},l,c):null)))),f&&i==="outside"?E("div",null,t.default?E("div",{class:`${b}-progress-custom-content`,style:{color:u},role:"none"},t.default()):d==="default"?E("div",{role:"none",class:`${b}-progress-icon ${b}-progress-icon--as-text`,style:{color:u}},l,c):E("div",{class:`${b}-progress-icon`,"aria-hidden":!0},E(dt,{clsPrefix:b},{default:()=>hB[d]}))):null)}}}),gB={success:E(ya,null),error:E(va,null),warning:E(xa,null),info:E(Bi,null)},mB=be({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function r(n,o,i){const{gapDegree:s,viewBoxWidth:a,strokeWidth:l}=e,c=50,u=0,d=c,f=0,h=2*c,p=50+l/2,b=`M ${p},${p} m ${u},${d}
      a ${c},${c} 0 1 1 ${f},${-h}
      a ${c},${c} 0 1 1 ${-f},${h}`,w=Math.PI*2*c,g={stroke:i,strokeDasharray:`${n/100*(w-s)}px ${a*8}px`,strokeDashoffset:`-${s/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:b,pathStyle:g}}return()=>{const{fillColor:n,railColor:o,strokeWidth:i,offsetDegree:s,status:a,percentage:l,showIndicator:c,indicatorTextColor:u,unit:d,gapOffsetDegree:f,clsPrefix:h}=e,{pathString:p,pathStyle:b}=r(100,0,o),{pathString:w,pathStyle:g}=r(l,s,n),m=100+i;return E("div",{class:`${h}-progress-content`,role:"none"},E("div",{class:`${h}-progress-graph`,"aria-hidden":!0},E("div",{class:`${h}-progress-graph-circle`,style:{transform:f?`rotate(${f}deg)`:void 0}},E("svg",{viewBox:`0 0 ${m} ${m}`},E("g",null,E("path",{class:`${h}-progress-graph-circle-rail`,d:p,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:b})),E("g",null,E("path",{class:[`${h}-progress-graph-circle-fill`,l===0&&`${h}-progress-graph-circle-fill--empty`],d:w,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:g}))))),c?E("div",null,t.default?E("div",{class:`${h}-progress-custom-content`,role:"none"},t.default()):a!=="default"?E("div",{class:`${h}-progress-icon`,"aria-hidden":!0},E(dt,{clsPrefix:h},{default:()=>gB[a]})):E("div",{class:`${h}-progress-text`,style:{color:u},role:"none"},E("span",{class:`${h}-progress-text__percentage`},l),E("span",{class:`${h}-progress-text__unit`},d))):null)}}});function yg(e,t,r=100){return`m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const bB=be({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const r=q(()=>e.percentage.map((o,i)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:o,circleGap:i,showIndicator:s,fillColor:a,railColor:l,railStyle:c,percentage:u,clsPrefix:d}=e;return E("div",{class:`${d}-progress-content`,role:"none"},E("div",{class:`${d}-progress-graph`,"aria-hidden":!0},E("div",{class:`${d}-progress-graph-circle`},E("svg",{viewBox:`0 0 ${n} ${n}`},u.map((f,h)=>E("g",{key:h},E("path",{class:`${d}-progress-graph-circle-rail`,d:yg(n/2-o/2*(1+2*h)-i*h,o,n),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:l[h]},c[h]]}),E("path",{class:[`${d}-progress-graph-circle-fill`,f===0&&`${d}-progress-graph-circle-fill--empty`],d:yg(n/2-o/2*(1+2*h)-i*h,o,n),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:r.value[h],strokeDashoffset:0,stroke:a[h]}})))))),s&&t.default?E("div",null,E("div",{class:`${d}-progress-text`},t.default())):null)}}}),vB=Object.assign(Object.assign({},Qe.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),yB=be({name:"Progress",props:vB,setup(e){const t=q(()=>e.indicatorPlacement||e.indicatorPosition),r=q(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:o}=It(e),i=Qe("Progress","-progress",fB,kf,e,n),s=q(()=>{const{status:l}=e,{common:{cubicBezierEaseInOut:c},self:{fontSize:u,fontSizeCircle:d,railColor:f,railHeight:h,iconSizeCircle:p,iconSizeLine:b,textColorCircle:w,textColorLineInner:g,textColorLineOuter:m,lineBgProcessing:_,fontWeightCircle:x,[we("iconColor",l)]:C,[we("fillColor",l)]:$}}=i.value;return{"--n-bezier":c,"--n-fill-color":$,"--n-font-size":u,"--n-font-size-circle":d,"--n-font-weight-circle":x,"--n-icon-color":C,"--n-icon-size-circle":p,"--n-icon-size-line":b,"--n-line-bg-processing":_,"--n-rail-color":f,"--n-rail-height":h,"--n-text-color-circle":w,"--n-text-color-line-inner":g,"--n-text-color-line-outer":m}}),a=o?xr("progress",q(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:t,gapDeg:r,cssVars:o?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:r,showIndicator:n,status:o,railColor:i,railStyle:s,color:a,percentage:l,viewBoxWidth:c,strokeWidth:u,mergedIndicatorPlacement:d,unit:f,borderRadius:h,fillBorderRadius:p,height:b,processing:w,circleGap:g,mergedClsPrefix:m,gapDeg:_,gapOffsetDegree:x,themeClass:C,$slots:$,onRender:S}=this;return S==null||S(),E("div",{class:[C,`${m}-progress`,`${m}-progress--${e}`,`${m}-progress--${o}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?E(mB,{clsPrefix:m,status:o,showIndicator:n,indicatorTextColor:r,railColor:i,fillColor:a,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:c,strokeWidth:u,gapDegree:_===void 0?e==="dashboard"?75:0:_,gapOffsetDegree:x,unit:f},$):e==="line"?E(pB,{clsPrefix:m,status:o,showIndicator:n,indicatorTextColor:r,railColor:i,fillColor:a,railStyle:s,percentage:l,processing:w,indicatorPlacement:d,unit:f,fillBorderRadius:p,railBorderRadius:h,height:b},$):e==="multiple-circle"?E(bB,{clsPrefix:m,strokeWidth:u,railColor:i,fillColor:a,railStyle:s,viewBoxWidth:c,percentage:l,showIndicator:n,circleGap:g},$):null)}}),xB={name:"Skeleton",common:oe,self(e){const{heightSmall:t,heightMedium:r,heightLarge:n,borderRadius:o}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:o,heightSmall:t,heightMedium:r,heightLarge:n}}},CB=e=>{const{heightSmall:t,heightMedium:r,heightLarge:n,borderRadius:o}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:o,heightSmall:t,heightMedium:r,heightLarge:n}},wB={name:"Skeleton",common:ie,self:CB},ts="n-upload",Ay="__UPLOAD_DRAGGER__",SB=be({name:"UploadDragger",[Ay]:!0,setup(e,{slots:t}){const r=Se(ts,null);return r||Uo("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:n},mergedDisabledRef:{value:o},maxReachedRef:{value:i}}=r;return E("div",{class:[`${n}-upload-dragger`,(o||i)&&`${n}-upload-dragger--disabled`]},t)}}});var By=globalThis&&globalThis.__awaiter||function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const My=e=>e.includes("image/"),xg=(e="")=>{const t=e.split("/"),n=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(n)||[""])[0]},Cg=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,Hy=e=>{if(e.type)return My(e.type);const t=xg(e.name||"");if(Cg.test(t))return!0;const r=e.thumbnailUrl||e.url||"",n=xg(r);return!!(/^data:image\//.test(r)||Cg.test(n))};function _B(e){return By(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!My(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const EB=Vo&&window.FileReader&&window.File;function TB(e){return e.isDirectory}function $B(e){return e.isFile}function PB(e,t){return By(this,void 0,void 0,function*(){const r=[];let n,o=0;function i(){o++}function s(){o--,o||n(r)}function a(l){l.forEach(c=>{if(!!c){if(i(),t&&TB(c)){const u=c.createReader();i(),u.readEntries(d=>{a(d),s()},()=>{s()})}else $B(c)&&(i(),c.file(u=>{r.push({file:u,entry:c,source:"dnd"}),s()},()=>{s()}));s()}})}return yield new Promise(l=>{n=l,a(e)}),r})}function oa(e){const{id:t,name:r,percentage:n,status:o,url:i,file:s,thumbnailUrl:a,type:l,fullPath:c,batchId:u}=e;return{id:t,name:r,percentage:n!=null?n:null,status:o,url:i!=null?i:null,file:s!=null?s:null,thumbnailUrl:a!=null?a:null,type:l!=null?l:null,fullPath:c!=null?c:null,batchId:u!=null?u:null}}function LB(e,t,r){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),r=r.toLocaleLowerCase(),r.split(",").map(o=>o.trim()).filter(Boolean).some(o=>{if(o.startsWith(".")){if(e.endsWith(o))return!0}else if(o.includes("/")){const[i,s]=t.split("/"),[a,l]=o.split("/");if((a==="*"||i&&a&&a===i)&&(l==="*"||s&&l&&l===s))return!0}else return!0;return!1})}const kB=(e,t)=>{if(!e)return;const r=document.createElement("a");r.href=e,t!==void 0&&(r.download=t),document.body.appendChild(r),r.click(),document.body.removeChild(r)},Dy=be({name:"UploadTrigger",props:{abstract:Boolean},setup(e,{slots:t}){const r=Se(ts,null);r||Uo("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:n,mergedDisabledRef:o,maxReachedRef:i,listTypeRef:s,dragOverRef:a,openOpenFileDialog:l,draggerInsideRef:c,handleFileAddition:u,mergedDirectoryDndRef:d,triggerStyleRef:f}=r,h=q(()=>s.value==="image-card");function p(){o.value||i.value||l()}function b(_){_.preventDefault(),a.value=!0}function w(_){_.preventDefault(),a.value=!0}function g(_){_.preventDefault(),a.value=!1}function m(_){var x;if(_.preventDefault(),!c.value||o.value||i.value){a.value=!1;return}const C=(x=_.dataTransfer)===null||x===void 0?void 0:x.items;C!=null&&C.length?PB(Array.from(C).map($=>$.webkitGetAsEntry()),d.value).then($=>{u($)}).finally(()=>{a.value=!1}):a.value=!1}return()=>{var _;const{value:x}=n;return e.abstract?(_=t.default)===null||_===void 0?void 0:_.call(t,{handleClick:p,handleDrop:m,handleDragOver:b,handleDragEnter:w,handleDragLeave:g}):E("div",{class:[`${x}-upload-trigger`,(o.value||i.value)&&`${x}-upload-trigger--disabled`,h.value&&`${x}-upload-trigger--image-card`],style:f.value,onClick:p,onDrop:m,onDragover:b,onDragenter:w,onDragleave:g},h.value?E(SB,null,{default:()=>qu(t.default,()=>[E(dt,{clsPrefix:x},{default:()=>E(w6,null)})])}):t)}}}),IB=be({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:Se(ts).mergedThemeRef}},render(){return E($c,null,{default:()=>this.show?E(yB,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}}),RB=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},E("g",{fill:"none"},E("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"}))),OB=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},E("g",{fill:"none"},E("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})));var AB=globalThis&&globalThis.__awaiter||function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};const ol={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},BB=be({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0}},setup(e){const t=Se(ts),r=W(null),n=W(""),o=q(()=>{const{file:C}=e;return C.status==="finished"?"success":C.status==="error"?"error":"info"}),i=q(()=>{const{file:C}=e;if(C.status==="error")return"error"}),s=q(()=>{const{file:C}=e;return C.status==="uploading"}),a=q(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:C}=e;return["uploading","pending","error"].includes(C.status)}),l=q(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:C}=e;return["finished"].includes(C.status)}),c=q(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:C}=e;return["finished"].includes(C.status)}),u=q(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:C}=e;return["error"].includes(C.status)}),d=fn(()=>n.value||e.file.thumbnailUrl||e.file.url),f=q(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:C},listType:$}=e;return["finished"].includes(C)&&d.value&&$==="image-card"});function h(){t.submit(e.file.id)}function p(C){C.preventDefault();const{file:$}=e;["finished","pending","error"].includes($.status)?w($):["uploading"].includes($.status)?m($):Xs("upload","The button clicked type is unknown.")}function b(C){C.preventDefault(),g(e.file)}function w(C){const{xhrMap:$,doChange:S,onRemoveRef:{value:P},mergedFileListRef:{value:k}}=t;Promise.resolve(P?P({file:Object.assign({},C),fileList:k}):!0).then(I=>{if(I===!1)return;const O=Object.assign({},C,{status:"removed"});$.delete(C.id),S(O,void 0,{remove:!0})})}function g(C){const{onDownloadRef:{value:$}}=t;Promise.resolve($?$(Object.assign({},C)):!0).then(S=>{S!==!1&&kB(C.url,C.name)})}function m(C){const{xhrMap:$}=t,S=$.get(C.id);S==null||S.abort(),w(Object.assign({},C))}function _(){const{onPreviewRef:{value:C}}=t;if(C)C(e.file);else if(e.listType==="image-card"){const{value:$}=r;if(!$)return;$.click()}}const x=()=>AB(this,void 0,void 0,function*(){const{listType:C}=e;C!=="image"&&C!=="image-card"||t.shouldUseThumbnailUrlRef.value(e.file)&&(n.value=yield t.getFileThumbnailUrlResolver(e.file))});return $r(()=>{x()}),{mergedTheme:t.mergedThemeRef,progressStatus:o,buttonType:i,showProgress:s,disabled:t.mergedDisabledRef,showCancelButton:a,showRemoveButton:l,showDownloadButton:c,showRetryButton:u,showPreviewButton:f,mergedThumbnailUrl:d,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:r,handleRemoveOrCancelClick:p,handleDownloadClick:b,handleRetryClick:h,handlePreviewClick:_}},render(){const{clsPrefix:e,mergedTheme:t,listType:r,file:n,renderIcon:o}=this;let i;const s=r==="image";s||r==="image-card"?i=!this.shouldUseThumbnailUrl(n)||!this.mergedThumbnailUrl?E("span",{class:`${e}-upload-file-info__thumbnail`},o?o(n):Hy(n)?E(dt,{clsPrefix:e},{default:()=>RB}):E(dt,{clsPrefix:e},{default:()=>OB})):E("a",{rel:"noopener noreferer",target:"_blank",href:n.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},r==="image-card"?E(HA,{src:this.mergedThumbnailUrl||void 0,previewSrc:n.url||void 0,alt:n.name,ref:"imageRef"}):E("img",{src:this.mergedThumbnailUrl||void 0,alt:n.name})):i=E("span",{class:`${e}-upload-file-info__thumbnail`},o?o(n):E(dt,{clsPrefix:e},{default:()=>E(S6,null)}));const l=E(IB,{show:this.showProgress,percentage:n.percentage||0,status:this.progressStatus}),c=r==="text"||r==="image";return E("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,n.url&&n.status!=="error"&&r!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${r}-type`]},E("div",{class:`${e}-upload-file-info`},i,E("div",{class:`${e}-upload-file-info__name`},c&&(n.url&&n.status!=="error"?E("a",{rel:"noopener noreferer",target:"_blank",href:n.url||void 0,onClick:this.handlePreviewClick},n.name):E("span",{onClick:this.handlePreviewClick},n.name)),s&&l),E("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${r}-type`]},this.showPreviewButton?E(ai,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:ol},{icon:()=>E(dt,{clsPrefix:e},{default:()=>E(E6,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&E(ai,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:ol,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>E(Tc,null,{default:()=>this.showRemoveButton?E(dt,{clsPrefix:e,key:"trash"},{default:()=>E(T6,null)}):E(dt,{clsPrefix:e,key:"cancel"},{default:()=>E(P6,null)})})}),this.showRetryButton&&!this.disabled&&E(ai,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:ol},{icon:()=>E(dt,{clsPrefix:e},{default:()=>E(L6,null)})}),this.showDownloadButton?E(ai,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:ol},{icon:()=>E(dt,{clsPrefix:e},{default:()=>E($6,null)})}):null)),!s&&l)}}),MB=be({name:"UploadFileList",setup(e,{slots:t}){const r=Se(ts,null);r||Uo("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:n,mergedClsPrefixRef:o,listTypeRef:i,mergedFileListRef:s,fileListStyleRef:a,cssVarsRef:l,themeClassRef:c,maxReachedRef:u,showTriggerRef:d,imageGroupPropsRef:f}=r,h=q(()=>i.value==="image-card"),p=()=>s.value.map(w=>E(BB,{clsPrefix:o.value,key:w.id,file:w,listType:i.value})),b=()=>h.value?E(BA,Object.assign({},f.value),{default:p}):E($c,{group:!0},{default:p});return()=>{const{value:w}=o,{value:g}=n;return E("div",{class:[`${w}-upload-file-list`,h.value&&`${w}-upload-file-list--grid`,g?c==null?void 0:c.value:void 0],style:[g&&l?l.value:"",a.value]},b(),d.value&&!u.value&&h.value&&E(Dy,null,t))}}}),HB=N([U("upload","width: 100%;",[re("dragger-inside",[U("upload-trigger",`
 display: block;
 `)]),re("drag-over",[U("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),U("upload-dragger",`
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
 `,[N("&:hover",`
 border: var(--n-dragger-border-hover);
 `),re("disabled",`
 cursor: not-allowed;
 `)]),U("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[N("+",[U("upload-file-list","margin-top: 8px;")]),re("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),re("image-card",`
 width: 96px;
 height: 96px;
 `,[U("base-icon",`
 font-size: 24px;
 `),U("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),U("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[N("a, img","outline: none;"),re("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[U("upload-file","cursor: not-allowed;")]),re("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),U("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[ld(),U("progress",[ld({foldPadding:!0})]),N("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[U("upload-file-info",[ne("action",`
 opacity: 1;
 `)])]),re("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[U("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[U("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),ne("name",`
 padding: 0 8px;
 `),ne("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[N("img",`
 width: 100%;
 `)])])]),re("text-type",[U("progress",`
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
 `,[U("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),U("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[ne("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[N("img",`
 width: 100%;
 `)])]),N("&::before",`
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
 `),N("&:hover",[N("&::before","opacity: 1;"),U("upload-file-info",[ne("thumbnail","opacity: .12;")])])]),re("error-status",[N("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),U("upload-file-info",[ne("name","color: var(--n-item-text-color-error);"),ne("thumbnail","color: var(--n-item-text-color-error);")]),re("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),re("with-url",`
 cursor: pointer;
 `,[U("upload-file-info",[ne("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[N("a",`
 text-decoration: underline;
 `)])])]),U("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[ne("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[U("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),ne("action",`
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
 `,[U("button",[N("&:not(:last-child)",{marginRight:"4px"}),U("base-icon",[N("svg",[ra()])])]),re("image-type",`
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
 `)]),ne("name",`
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
 `,[N("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),U("upload-file-input",`
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);var wg=globalThis&&globalThis.__awaiter||function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(u){try{c(n.next(u))}catch(d){s(d)}}function l(u){try{c(n.throw(u))}catch(d){s(d)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((n=n.apply(e,t||[])).next())})};function DB(e,t,r){const{doChange:n,xhrMap:o}=e;let i=0;function s(l){var c;let u=Object.assign({},t,{status:"error",percentage:i});o.delete(t.id),u=oa(((c=e.onError)===null||c===void 0?void 0:c.call(e,{file:u,event:l}))||u),n(u,l)}function a(l){var c;if(e.isErrorState){if(e.isErrorState(r)){s(l);return}}else if(r.status<200||r.status>=300){s(l);return}let u=Object.assign({},t,{status:"finished",percentage:i});o.delete(t.id),u=oa(((c=e.onFinish)===null||c===void 0?void 0:c.call(e,{file:u,event:l}))||u),n(u,l)}return{handleXHRLoad:a,handleXHRError:s,handleXHRAbort(l){const c=Object.assign({},t,{status:"removed",file:null,percentage:i});o.delete(t.id),n(c,l)},handleXHRProgress(l){const c=Object.assign({},t,{status:"uploading"});if(l.lengthComputable){const u=Math.ceil(l.loaded/l.total*100);c.percentage=u,i=u}n(c,l)}}}function zB(e){const{inst:t,file:r,data:n,headers:o,withCredentials:i,action:s,customRequest:a}=e,{doChange:l}=e.inst;let c=0;a({file:r,data:n,headers:o,withCredentials:i,action:s,onProgress(u){const d=Object.assign({},r,{status:"uploading"}),f=u.percent;d.percentage=f,c=f,l(d)},onFinish(){var u;let d=Object.assign({},r,{status:"finished",percentage:c});d=oa(((u=t.onFinish)===null||u===void 0?void 0:u.call(t,{file:d}))||d),l(d)},onError(){var u;let d=Object.assign({},r,{status:"error",percentage:c});d=oa(((u=t.onError)===null||u===void 0?void 0:u.call(t,{file:d}))||d),l(d)}})}function FB(e,t,r){const n=DB(e,t,r);r.onabort=n.handleXHRAbort,r.onerror=n.handleXHRError,r.onload=n.handleXHRLoad,r.upload&&(r.upload.onprogress=n.handleXHRProgress)}function zy(e,t){return typeof e=="function"?e({file:t}):e||{}}function NB(e,t,r){const n=zy(t,r);!n||Object.keys(n).forEach(o=>{e.setRequestHeader(o,n[o])})}function jB(e,t,r){const n=zy(t,r);!n||Object.keys(n).forEach(o=>{e.append(o,n[o])})}function WB(e,t,r,{method:n,action:o,withCredentials:i,responseType:s,headers:a,data:l}){const c=new XMLHttpRequest;c.responseType=s,e.xhrMap.set(r.id,c),c.withCredentials=i;const u=new FormData;if(jB(u,l,r),u.append(t,r.file),FB(e,r,c),o!==void 0){c.open(n.toUpperCase(),o),NB(c,a,r),c.send(u);const d=Object.assign({},r,{status:"uploading"});e.doChange(d)}}const UB=Object.assign(Object.assign({},Qe.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>EB?Hy(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerStyle:[String,Object],renderIcon:Object}),VB=be({name:"Upload",props:UB,setup(e){e.abstract&&e.listType==="image-card"&&Uo("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=It(e),n=Qe("Upload","-upload",HB,Ey,e,t),o=Fb(e),i=q(()=>{const{max:k}=e;return k!==void 0?h.value.length>=k:!1}),s=W(e.defaultFileList),a=Be(e,"fileList"),l=W(null),c={value:!1},u=W(!1),d=new Map,f=Sb(a,s),h=q(()=>f.value.map(oa));function p(){var k;(k=l.value)===null||k===void 0||k.click()}function b(k){const I=k.target;m(I.files?Array.from(I.files).map(O=>({file:O,entry:null,source:"input"})):null,k),I.value=""}function w(k){const{"onUpdate:fileList":I,onUpdateFileList:O}=e;I&&ar(I,k),O&&ar(O,k),s.value=k}const g=q(()=>e.multiple||e.directory);function m(k,I){if(!k||k.length===0)return;const{onBeforeUpload:O}=e;k=g.value?k:[k[0]];const{max:R,accept:H}=e;k=k.filter(({file:Z,source:G})=>G==="dnd"&&(H==null?void 0:H.trim())?LB(Z.name,Z.type,H):!0),R&&(k=k.slice(0,R-h.value.length));const B=Ho();Promise.all(k.map(({file:Z,entry:G})=>wg(this,void 0,void 0,function*(){var J;const se={id:Ho(),batchId:B,name:Z.name,status:"pending",percentage:0,file:Z,url:null,type:Z.type,thumbnailUrl:null,fullPath:(J=G==null?void 0:G.fullPath)!==null&&J!==void 0?J:`/${Z.webkitRelativePath||Z.name}`};return!O||(yield O({file:se,fileList:h.value}))!==!1?se:null}))).then(Z=>wg(this,void 0,void 0,function*(){let G=Promise.resolve();return Z.forEach(J=>{G=G.then(Ht).then(()=>{J&&x(J,I,{append:!0})})}),yield G})).then(()=>{e.defaultUpload&&_()})}function _(k){const{method:I,action:O,withCredentials:R,headers:H,data:B,name:Z}=e,G=k!==void 0?h.value.filter(se=>se.id===k):h.value,J=k!==void 0;G.forEach(se=>{const{status:ye}=se;(ye==="pending"||ye==="error"&&J)&&(e.customRequest?zB({inst:{doChange:x,xhrMap:d,onFinish:e.onFinish,onError:e.onError},file:se,action:O,withCredentials:R,headers:H,data:B,customRequest:e.customRequest}):WB({doChange:x,xhrMap:d,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},Z,se,{method:I,action:O,withCredentials:R,responseType:e.responseType,headers:H,data:B}))})}const x=(k,I,O={append:!1,remove:!1})=>{const{append:R,remove:H}=O,B=Array.from(h.value),Z=B.findIndex(G=>G.id===k.id);if(R||H||~Z){R?B.push(k):H?B.splice(Z,1):B.splice(Z,1,k);const{onChange:G}=e;G&&G({file:k,fileList:B,event:I}),w(B)}};function C(k){var I;if(k.thumbnailUrl)return k.thumbnailUrl;const{createThumbnailUrl:O}=e;return O?(I=O(k.file,k))!==null&&I!==void 0?I:k.url||"":k.url?k.url:k.file?_B(k.file):""}const $=q(()=>{const{common:{cubicBezierEaseInOut:k},self:{draggerColor:I,draggerBorder:O,draggerBorderHover:R,itemColorHover:H,itemColorHoverError:B,itemTextColorError:Z,itemTextColorSuccess:G,itemTextColor:J,itemIconColor:se,itemDisabledOpacity:ye,lineHeight:ke,borderRadius:Te,fontSize:Ae,itemBorderImageCardError:ut,itemBorderImageCard:Ve}}=n.value;return{"--n-bezier":k,"--n-border-radius":Te,"--n-dragger-border":O,"--n-dragger-border-hover":R,"--n-dragger-color":I,"--n-font-size":Ae,"--n-item-color-hover":H,"--n-item-color-hover-error":B,"--n-item-disabled-opacity":ye,"--n-item-icon-color":se,"--n-item-text-color":J,"--n-item-text-color-error":Z,"--n-item-text-color-success":G,"--n-line-height":ke,"--n-item-border-image-card-error":ut,"--n-item-border-image-card":Ve}}),S=r?xr("upload",void 0,$,e):void 0;Ze(ts,{mergedClsPrefixRef:t,mergedThemeRef:n,showCancelButtonRef:Be(e,"showCancelButton"),showDownloadButtonRef:Be(e,"showDownloadButton"),showRemoveButtonRef:Be(e,"showRemoveButton"),showRetryButtonRef:Be(e,"showRetryButton"),onRemoveRef:Be(e,"onRemove"),onDownloadRef:Be(e,"onDownload"),mergedFileListRef:h,triggerStyleRef:Be(e,"triggerStyle"),shouldUseThumbnailUrlRef:Be(e,"shouldUseThumbnailUrl"),renderIconRef:Be(e,"renderIcon"),xhrMap:d,submit:_,doChange:x,showPreviewButtonRef:Be(e,"showPreviewButton"),onPreviewRef:Be(e,"onPreview"),getFileThumbnailUrlResolver:C,listTypeRef:Be(e,"listType"),dragOverRef:u,openOpenFileDialog:p,draggerInsideRef:c,handleFileAddition:m,mergedDisabledRef:o.mergedDisabledRef,maxReachedRef:i,fileListStyleRef:Be(e,"fileListStyle"),abstractRef:Be(e,"abstract"),acceptRef:Be(e,"accept"),cssVarsRef:r?void 0:$,themeClassRef:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,showTriggerRef:Be(e,"showTrigger"),imageGroupPropsRef:Be(e,"imageGroupProps"),mergedDirectoryDndRef:q(()=>{var k;return(k=e.directoryDnd)!==null&&k!==void 0?k:e.directory})});const P={clear:()=>{s.value=[]},submit:_,openOpenFileDialog:p};return Object.assign({mergedClsPrefix:t,draggerInsideRef:c,inputElRef:l,mergedTheme:n,dragOver:u,mergedMultiple:g,cssVars:r?void 0:$,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,handleFileInputChange:b},P)},render(){var e,t;const{draggerInsideRef:r,mergedClsPrefix:n,$slots:o,directory:i,onRender:s}=this;if(o.default&&!this.abstract){const l=o.default()[0];!((e=l==null?void 0:l.type)===null||e===void 0)&&e[Ay]&&(r.value=!0)}const a=E("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${n}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:i||void 0,directory:i||void 0}));return this.abstract?E(Ge,null,(t=o.default)===null||t===void 0?void 0:t.call(o),E(ha,{to:"body"},a)):(s==null||s(),E("div",{class:[`${n}-upload`,r.value&&`${n}-upload--dragger-inside`,this.dragOver&&`${n}-upload--drag-over`,this.themeClass],style:this.cssVars},a,this.showTrigger&&this.listType!=="image-card"&&E(Dy,null,o),this.showFileList&&E(MB,null,o)))}}),Fy=()=>({}),KB={name:"Equation",common:ie,self:Fy},qB=KB,GB={name:"Equation",common:oe,self:Fy},XB=GB,YB={name:"dark",common:oe,Alert:TL,Anchor:ML,AutoComplete:VL,Avatar:Zv,AvatarGroup:QL,BackTop:tk,Badge:sk,Breadcrumb:pk,Button:er,ButtonGroup:dR,Calendar:Tk,Card:i1,Carousel:Nk,Cascader:Gk,Checkbox:es,Code:c1,Collapse:t8,CollapseTransition:i8,ColorPicker:kk,DataTable:I8,DatePicker:V8,Descriptions:Z8,Dialog:M1,Divider:xI,Drawer:_I,Dropdown:Tf,DynamicInput:TI,DynamicTags:AI,Element:DI,Empty:Xo,Ellipsis:w1,Equation:XB,Form:VI,GradientText:qI,Icon:H8,IconWrapper:eR,Image:LA,Input:Cr,InputNumber:gR,LegacyTransfer:zA,Layout:xR,List:$R,LoadingBar:LR,Log:OR,Menu:KR,Mention:DR,Message:cR,Modal:aI,Notification:iR,PageHeader:XR,Pagination:x1,Popconfirm:eO,Popover:Yo,Popselect:h1,Progress:ly,Radio:E1,Rate:oO,Result:fO,Row:PA,Scrollbar:Qt,Select:b1,Skeleton:xB,Slider:pO,Space:K1,Spin:CO,Statistic:EO,Steps:kO,Switch:RO,Table:FO,Tabs:VO,Tag:jv,Thing:XO,TimePicker:R1,Timeline:ZO,Tooltip:Lc,Transfer:rA,Tree:wy,TreeSelect:cA,Typography:bA,Upload:xA,Watermark:wA},Ny={name:"light",common:ie,Alert:LL,Anchor:AL,AutoComplete:WL,Avatar:Yv,AvatarGroup:ZL,BackTop:ok,Badge:ck,Breadcrumb:fk,Button:Wt,ButtonGroup:hR,Calendar:_k,Card:Sf,Carousel:zk,Cascader:Kk,Checkbox:Qi,Code:u1,Collapse:Qk,CollapseTransition:n8,ColorPicker:Pk,DataTable:L8,DatePicker:W8,Descriptions:X8,Dialog:$f,Divider:vI,Drawer:wI,Dropdown:Ef,DynamicInput:LI,DynamicTags:MI,Element:FI,Empty:bn,Equation:qB,Ellipsis:S1,Form:WI,GradientText:YI,Icon:B8,IconWrapper:JI,Image:Z1,Input:wr,InputNumber:vR,Layout:SR,LegacyTransfer:jA,List:ER,LoadingBar:ny,Log:MR,Menu:UR,Mention:NR,Message:ty,Modal:N1,Notification:Q1,PageHeader:GR,Pagination:y1,Popconfirm:JR,Popover:ao,Popselect:p1,Progress:kf,Radio:T1,Rate:aO,Row:TA,Result:uO,Scrollbar:jt,Skeleton:wB,Select:m1,Slider:bO,Space:q1,Spin:yO,Statistic:SO,Steps:PO,Switch:BO,Table:DO,Tabs:WO,Tag:Wv,Thing:qO,TimePicker:I1,Timeline:eA,Tooltip:Sa,Transfer:iA,Tree:Cy,TreeSelect:fA,Typography:gA,Upload:Ey,Watermark:_A};var Sg;const _a=typeof window<"u",ZB=e=>typeof e=="function",JB=e=>typeof e=="string",Os=()=>{};_a&&((Sg=window==null?void 0:window.navigator)==null?void 0:Sg.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function on(e){return typeof e=="function"?e():mr(e)}function Rf(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const jy=e=>e();function QB(e,t={}){let r,n;return i=>{const s=on(e),a=on(t.maxWait);if(r&&clearTimeout(r),s<=0||a!==void 0&&a<=0)return n&&(clearTimeout(n),n=null),i();a&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,i()},a)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,i()},s)}}function eM(e,t=!0,r=!0){let n=0,o,i=!0;const s=()=>{o&&(clearTimeout(o),o=void 0)};return l=>{const c=on(e),u=Date.now()-n;if(s(),c<=0)return n=Date.now(),l();u>c&&(r||!i)?(n=Date.now(),l()):t&&(o=setTimeout(()=>{n=Date.now(),i=!0,s(),l()},c)),!r&&!o&&(o=setTimeout(()=>i=!0,c)),i=!1}}function tM(e=jy){const t=W(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...i)=>{t.value&&e(...i)}}}function rM(e){return e}function nM(e){const t=Symbol("InjectionState");return[(...o)=>{Ze(t,e(...o))},()=>Se(t)]}function Wy(e){return ww()?(Sw(e),!0):!1}function oM(e,t=200,r={}){return Rf(QB(t,r),e)}function iM(e,t=200,r=!1,n=!0){return Rf(eM(t,r,n),e)}function Of(e,t=!0){zt()?Et(e):t?e():Ht(e)}var _g=Object.getOwnPropertySymbols,sM=Object.prototype.hasOwnProperty,aM=Object.prototype.propertyIsEnumerable,lM=(e,t)=>{var r={};for(var n in e)sM.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&_g)for(var n of _g(e))t.indexOf(n)<0&&aM.call(e,n)&&(r[n]=e[n]);return r};function cM(e,t,r={}){const n=r,{eventFilter:o=jy}=n,i=lM(n,["eventFilter"]);return tt(e,Rf(o,t),i)}var uM=Object.defineProperty,dM=Object.defineProperties,fM=Object.getOwnPropertyDescriptors,Wl=Object.getOwnPropertySymbols,Uy=Object.prototype.hasOwnProperty,Vy=Object.prototype.propertyIsEnumerable,Eg=(e,t,r)=>t in e?uM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,hM=(e,t)=>{for(var r in t||(t={}))Uy.call(t,r)&&Eg(e,r,t[r]);if(Wl)for(var r of Wl(t))Vy.call(t,r)&&Eg(e,r,t[r]);return e},pM=(e,t)=>dM(e,fM(t)),gM=(e,t)=>{var r={};for(var n in e)Uy.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Wl)for(var n of Wl(e))t.indexOf(n)<0&&Vy.call(e,n)&&(r[n]=e[n]);return r};function mM(e,t,r={}){const n=r,{eventFilter:o}=n,i=gM(n,["eventFilter"]),{eventFilter:s,pause:a,resume:l,isActive:c}=tM(o);return{stop:cM(e,t,pM(hM({},i),{eventFilter:s})),pause:a,resume:l,isActive:c}}function Fn(e){var t;const r=on(e);return(t=r==null?void 0:r.$el)!=null?t:r}const zo=_a?window:void 0;_a&&window.document;_a&&window.navigator;_a&&window.location;function Fr(...e){let t,r,n,o;if(JB(e[0])?([r,n,o]=e,t=zo):[t,r,n,o]=e,!t)return Os;let i=Os;const s=tt(()=>Fn(t),l=>{i(),l&&(l.addEventListener(r,n,o),i=()=>{l.removeEventListener(r,n,o),i=Os})},{immediate:!0,flush:"post"}),a=()=>{s(),i()};return Wy(a),a}function fj(e,t,r={}){const{window:n=zo,ignore:o,capture:i=!0,detectIframe:s=!1}=r;if(!n)return;const a=W(!0);let l;const c=h=>{n.clearTimeout(l);const p=Fn(e);!p||p===h.target||h.composedPath().includes(p)||!a.value||t(h)},u=h=>o&&o.some(p=>{const b=Fn(p);return b&&(h.target===b||h.composedPath().includes(b))}),d=[Fr(n,"click",c,{passive:!0,capture:i}),Fr(n,"pointerdown",h=>{const p=Fn(e);a.value=!!p&&!h.composedPath().includes(p)&&!u(h)},{passive:!0}),Fr(n,"pointerup",h=>{if(h.button===0){const p=h.composedPath();h.composedPath=()=>p,l=n.setTimeout(()=>c(h),50)}},{passive:!0}),s&&Fr(n,"blur",h=>{var p;const b=Fn(e);((p=document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(b!=null&&b.contains(document.activeElement))&&t(h)})].filter(Boolean);return()=>d.forEach(h=>h())}function bM(e,t=!1){const r=W(),n=()=>r.value=Boolean(e());return n(),Of(n,t),r}const cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ud="__vueuse_ssr_handlers__";cd[ud]=cd[ud]||{};const vM=cd[ud];function yM(e,t){return vM[e]||t}function xM(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var CM=Object.defineProperty,Tg=Object.getOwnPropertySymbols,wM=Object.prototype.hasOwnProperty,SM=Object.prototype.propertyIsEnumerable,$g=(e,t,r)=>t in e?CM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pg=(e,t)=>{for(var r in t||(t={}))wM.call(t,r)&&$g(e,r,t[r]);if(Tg)for(var r of Tg(t))SM.call(t,r)&&$g(e,r,t[r]);return e};const _M={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function EM(e,t,r,n={}){var o;const{flush:i="pre",deep:s=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=zo,eventFilter:f,onError:h=S=>{console.error(S)}}=n,p=(u?Fd:W)(t);if(!r)try{r=yM("getDefaultStorage",()=>{var S;return(S=zo)==null?void 0:S.localStorage})()}catch(S){h(S)}if(!r)return p;const b=on(t),w=xM(b),g=(o=n.serializer)!=null?o:_M[w],{pause:m,resume:_}=mM(p,()=>x(p.value),{flush:i,deep:s,eventFilter:f});return d&&a&&Fr(d,"storage",$),$(),p;function x(S){try{S==null?r.removeItem(e):r.setItem(e,g.write(S))}catch(P){h(P)}}function C(S){m();try{const P=S?S.newValue:r.getItem(e);if(P==null)return l&&b!==null&&r.setItem(e,g.write(b)),b;if(!S&&c){const k=g.read(P);return ZB(c)?c(k,b):w==="object"&&!Array.isArray(k)?Pg(Pg({},b),k):k}else return typeof P!="string"?P:g.read(P)}catch(P){h(P)}finally{_()}}function $(S){if(!(S&&S.storageArea!==r)){if(S&&S.key===null){p.value=b;return}S&&S.key!==e||(p.value=C(S))}}}var Lg=Object.getOwnPropertySymbols,TM=Object.prototype.hasOwnProperty,$M=Object.prototype.propertyIsEnumerable,PM=(e,t)=>{var r={};for(var n in e)TM.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Lg)for(var n of Lg(e))t.indexOf(n)<0&&$M.call(e,n)&&(r[n]=e[n]);return r};function LM(e,t,r={}){const n=r,{window:o=zo}=n,i=PM(n,["window"]);let s;const a=bM(()=>o&&"ResizeObserver"in o),l=()=>{s&&(s.disconnect(),s=void 0)},c=tt(()=>Fn(e),d=>{l(),a.value&&o&&d&&(s=new ResizeObserver(t),s.observe(d,i))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Wy(u),{isSupported:a,stop:u}}function hj(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:o=!0,immediate:i=!0}=t,s=W(0),a=W(0),l=W(0),c=W(0),u=W(0),d=W(0),f=W(0),h=W(0);function p(){const b=Fn(e);if(!b){r&&(s.value=0,a.value=0,l.value=0,c.value=0,u.value=0,d.value=0,f.value=0,h.value=0);return}const w=b.getBoundingClientRect();s.value=w.height,a.value=w.bottom,l.value=w.left,c.value=w.right,u.value=w.top,d.value=w.width,f.value=w.x,h.value=w.y}return LM(e,p),tt(()=>Fn(e),b=>!b&&p()),o&&Fr("scroll",p,{passive:!0}),n&&Fr("resize",p,{passive:!0}),Of(()=>{i&&p()}),{height:s,bottom:a,left:l,right:c,top:u,width:d,x:f,y:h,update:p}}const kg=1;function pj(e,t={}){const{throttle:r=0,idle:n=200,onStop:o=Os,onScroll:i=Os,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:l="auto"}=t,c=W(0),u=W(0),d=q({get(){return c.value},set(_){h(_,void 0)}}),f=q({get(){return u.value},set(_){h(void 0,_)}});function h(_,x){var C,$,S;const P=on(e);!P||(S=P instanceof Document?document.body:P)==null||S.scrollTo({top:(C=on(x))!=null?C:f.value,left:($=on(_))!=null?$:d.value,behavior:on(l)})}const p=W(!1),b=Zt({left:!0,right:!1,top:!0,bottom:!1}),w=Zt({left:!1,right:!1,top:!1,bottom:!1}),g=oM(_=>{p.value=!1,w.left=!1,w.right=!1,w.top=!1,w.bottom=!1,o(_)},r+n),m=_=>{const x=_.target===document?_.target.documentElement:_.target,C=x.scrollLeft;w.left=C<c.value,w.right=C>u.value,b.left=C<=0+(s.left||0),b.right=C+x.clientWidth>=x.scrollWidth-(s.right||0)-kg,c.value=C;let $=x.scrollTop;_.target===document&&!$&&($=document.body.scrollTop),w.top=$<u.value,w.bottom=$>u.value,b.top=$<=0+(s.top||0),b.bottom=$+x.clientHeight>=x.scrollHeight-(s.bottom||0)-kg,u.value=$,p.value=!0,g(_),i(_)};return Fr(e,"scroll",r?iM(m,r):m,a),{x:d,y:f,isScrolling:p,arrivedState:b,directions:w}}function Ky(e,t,r={}){const{window:n=zo}=r;return EM(e,t,n==null?void 0:n.localStorage,r)}var Ig;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ig||(Ig={}));var kM=Object.defineProperty,Rg=Object.getOwnPropertySymbols,IM=Object.prototype.hasOwnProperty,RM=Object.prototype.propertyIsEnumerable,Og=(e,t,r)=>t in e?kM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,OM=(e,t)=>{for(var r in t||(t={}))IM.call(t,r)&&Og(e,r,t[r]);if(Rg)for(var r of Rg(t))RM.call(t,r)&&Og(e,r,t[r]);return e};const AM={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};OM({linear:rM},AM);function gj(e={}){const{window:t=zo,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:o=!0,includeScrollbar:i=!0}=e,s=W(r),a=W(n),l=()=>{t&&(i?(s.value=t.innerWidth,a.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return l(),Of(l),Fr("resize",l,{passive:!0}),o&&Fr("orientationchange",l,{passive:!0}),{width:s,height:a}}const qy=[Ny,YB],dd=W(Ny);let As=Ky("theme",0);function mj(){As.value++,As.value=As.value%qy.length}tt(As,()=>{dd.value=qy[As.value]},{immediate:!0});const[BM,MM]=nM(()=>{const e=W(null);return{bufferOpt:e,setBufferOpt:t=>{e.value=t}}});function bj(e){const t=MM();$r(()=>{var n;const r=(n=e.value)==null?void 0:n.feat.loadBufferOpt;r!=null&&r.isLoading&&(t==null||t.setBufferOpt(r))}),$r(()=>{var n;const r=(n=e.value)==null?void 0:n.feat.refreshBufferOpt;r!=null&&r.isLoading&&(t==null||t.setBufferOpt(r))})}const HM=be({__name:"LoadProgressProvide",setup(e){return BM(),(t,r)=>Gd(t.$slots,"default")}});function vj(){return/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]*/g}function yj(){return/#\[(\d+)\]/g}function xj(){return/#(\S+)/g}function DM(){return/https:\/\/nostr.build\/i\/nostr.build_[a-zA-Z0-9]*(.[a-zA-Z]+)?/}const Gy=()=>({getOtherUrlsRequestLimitSize:50,localStorage:{kind10002:500,duration:6048e5},eventCacheDuration:12e5,pullRelayConfig:{interval:864e5,debounce:1e3},relayEmiterQueueInterval:5,stopHideLongArticles:!1,enablePapawTree:!1,enablePapawTreeLazyMode:!0,lazyDelayForPapaw:0,priority:{close:11,closeReq:12,publish:10,req:8,eose:18,event:7,notice:0,ok:15},syncInterval:6e4,syncInterval1:3e5,syncInterval2:9e5,syncInterval3:27e5,syncInterval4:36e5,syncInterval5:108e5,syncInterval6:288e5,syncInterval7:864e5,syncInterval8:2592e5,syncInterval9:6048e5,autoPing:!0}),Xy=Ky("app-config",Gy,{deep:!0}),zM=Gy();ax(Xy.value,zM);let Ci=null,To=Xy.value,Af=null,FM=null,Vn=null;function il(e){e.relayEmiter&&(Af=e.relayEmiter),e.relayPool&&(FM=e.relayPool),e.rootEventBeltline&&(Vn=e.rootEventBeltline),e.relayConfigurator&&(Ci=e.relayConfigurator),e.config&&Object.assign(To,e.config)}const Ul={useMemoryCache:!0,useLocalStorage:!0,requestMerge:!0,cacheError:!0};function NM(e,t=36e5){return{value:e,updateTime:Date.now(),duration:t}}function jM(e){return`${e.updateTime},${e.duration}|${JSON.stringify(e.value)}`}function Rc(e){const t=WM(e,"|",15,36);if(t===-1)throw new Error("CacheString:Expecting a '|'");const[r,n]=e.slice(0,t).split(","),o=e.slice(t+1),i=parseInt(r),s=parseInt(n),a=JSON.parse(o);return{updateTime:i,duration:s,value:a}}function WM(e,t,r,n){e.length-1<n&&(n=e.length-1);for(let o=r;o<=n;o++)if(e[o]===t)return o;return-1}class UM{constructor(t){xe(this,"CACHE_LIST_KEY");xe(this,"cacheList");this.CACHE_LIST_KEY=t;const r=localStorage.getItem(t);if(!r){this.cacheList=new Set;return}const n=JSON.parse(r);if(!Array.isArray(n)){this.cacheList=new Set;return}this.cacheList=new Set(n)}addCacheKey(t){this.cacheList.add(t),this.reviseCacheList()}deleteCacheKey(t){this.cacheList.delete(t),this.reviseCacheList()}getCacheList(){return this.cacheList}reviseCacheList(){const t=JSON.stringify(Array.from(this.cacheList));localStorage.setItem(this.CACHE_LIST_KEY,t)}}const Ea=new UM("__cache_key_list_");setTimeout(()=>{VM()});function VM(){const e=window.localStorage,t=Ea.getCacheList();for(const r of t)try{const n=e.getItem(r);if(!n)continue;const o=Rc(n);if(!Hf(o))continue;Mf(o)}catch{e.removeItem(r)}}window.clearCache=KM;function KM(){const e=window.localStorage,t=Ea.getCacheList();for(const r of t)try{const n=e.getItem(r);if(!n)continue;const o=Rc(n);if(!Hf(o))continue;e.removeItem(r)}catch{}}window.clearCacheAll=qM;function qM(){const e=window.localStorage,t=e.length;for(let r=0;r<t;r++){const n=e.key(r);if(!n)continue;const o=e.getItem(n);if(!!o)try{const i=Rc(o);if(!Hf(i))continue;e.removeItem(n)}catch{continue}}}var Zo={exports:{}},wi=typeof Reflect=="object"?Reflect:null,Ag=wi&&typeof wi.apply=="function"?wi.apply:function(t,r,n){return Function.prototype.apply.call(t,r,n)},wl;wi&&typeof wi.ownKeys=="function"?wl=wi.ownKeys:Object.getOwnPropertySymbols?wl=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:wl=function(t){return Object.getOwnPropertyNames(t)};function GM(e){console&&console.warn&&console.warn(e)}var Yy=Number.isNaN||function(t){return t!==t};function et(){et.init.call(this)}Zo.exports=et;Zo.exports.once=JM;et.EventEmitter=et;et.prototype._events=void 0;et.prototype._eventsCount=0;et.prototype._maxListeners=void 0;var Bg=10;function Oc(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(et,"defaultMaxListeners",{enumerable:!0,get:function(){return Bg},set:function(e){if(typeof e!="number"||e<0||Yy(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");Bg=e}});et.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};et.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||Yy(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function Zy(e){return e._maxListeners===void 0?et.defaultMaxListeners:e._maxListeners}et.prototype.getMaxListeners=function(){return Zy(this)};et.prototype.emit=function(t){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=t==="error",i=this._events;if(i!==void 0)o=o&&i.error===void 0;else if(!o)return!1;if(o){var s;if(r.length>0&&(s=r[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=i[t];if(l===void 0)return!1;if(typeof l=="function")Ag(l,this,r);else for(var c=l.length,u=rx(l,c),n=0;n<c;++n)Ag(u[n],this,r);return!0};function Jy(e,t,r,n){var o,i,s;if(Oc(r),i=e._events,i===void 0?(i=e._events=Object.create(null),e._eventsCount=0):(i.newListener!==void 0&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),s=i[t]),s===void 0)s=i[t]=r,++e._eventsCount;else if(typeof s=="function"?s=i[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),o=Zy(e),o>0&&s.length>o&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,GM(a)}return e}et.prototype.addListener=function(t,r){return Jy(this,t,r,!1)};et.prototype.on=et.prototype.addListener;et.prototype.prependListener=function(t,r){return Jy(this,t,r,!0)};function XM(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Qy(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=XM.bind(n);return o.listener=r,n.wrapFn=o,o}et.prototype.once=function(t,r){return Oc(r),this.on(t,Qy(this,t,r)),this};et.prototype.prependOnceListener=function(t,r){return Oc(r),this.prependListener(t,Qy(this,t,r)),this};et.prototype.removeListener=function(t,r){var n,o,i,s,a;if(Oc(r),o=this._events,o===void 0)return this;if(n=o[t],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[t],o.removeListener&&this.emit("removeListener",t,n.listener||r));else if(typeof n!="function"){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===r||n[s].listener===r){a=n[s].listener,i=s;break}if(i<0)return this;i===0?n.shift():YM(n,i),n.length===1&&(o[t]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",t,a||r)}return this};et.prototype.off=et.prototype.removeListener;et.prototype.removeAllListeners=function(t){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[t]),this;if(arguments.length===0){var i=Object.keys(n),s;for(o=0;o<i.length;++o)s=i[o],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[t],typeof r=="function")this.removeListener(t,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(t,r[o]);return this};function ex(e,t,r){var n=e._events;if(n===void 0)return[];var o=n[t];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?ZM(o):rx(o,o.length)}et.prototype.listeners=function(t){return ex(this,t,!0)};et.prototype.rawListeners=function(t){return ex(this,t,!1)};et.listenerCount=function(e,t){return typeof e.listenerCount=="function"?e.listenerCount(t):tx.call(e,t)};et.prototype.listenerCount=tx;function tx(e){var t=this._events;if(t!==void 0){var r=t[e];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}et.prototype.eventNames=function(){return this._eventsCount>0?wl(this._events):[]};function rx(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function YM(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function ZM(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}function JM(e,t){return new Promise(function(r,n){function o(s){e.removeListener(t,i),n(s)}function i(){typeof e.removeListener=="function"&&e.removeListener("error",o),r([].slice.call(arguments))}nx(e,t,i,{once:!0}),t!=="error"&&QM(e,o,{once:!0})})}function QM(e,t,r){typeof e.on=="function"&&nx(e,"error",t,r)}function nx(e,t,r,n){if(typeof e.on=="function")n.once?e.once(t,r):e.on(t,r);else if(typeof e.addEventListener=="function")e.addEventListener(t,function o(i){n.once&&e.removeEventListener(t,o),r(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}let Bf={};const oi=new Zo.exports.EventEmitter;oi.setMaxListeners(1e3);function ox(e,t,r=Ul,...n){ax(r,Ul);try{return sx(e,r)}catch{return eH(e,t,r,n)}}const Sl=Symbol("noCache"),Mg=Symbol("skip");function eH(e,t,r,n){const o=i=>(ia(e,i,r),i);return r.requestMerge?tH(e,t,r,n):ix(e,t,r,n,i=>i.then(o,r.cacheError?o:void 0))}function tH(e,t,r,n){const o=`res:${e}`,i=`rej:${e}`,s=c=>oi.emit(o,c),a=c=>oi.emit(i,c),l=()=>new Promise((c,u)=>{oi.once(o,c),oi.once(i,u)});return oi.listenerCount(o)>0?l():ix(e,t,r,n,c=>(c.then(u=>{ia(e,u,r),s(u)},u=>{r.cacheError&&ia(e,u,r),a(u)}),l()))}function ix(e,t,r,n,o){const i=t(...n);return uH(i)?o(i):(ia(e,i,r),i)}function sx(e,t=Ul){try{if(!t.useMemoryCache)throw Mg;return rH(e)}catch{if(!t.useLocalStorage)throw Mg;return nH(e)}}function Cj(e,t){try{return sx(e,t)}catch{return null}}function ia(e,t,r){const n=NM(t,r==null?void 0:r.duration);r!=null&&r.useMemoryCache&&lH(e,n),r!=null&&r.useLocalStorage&&cH(e,n)}function rH(e){const t=Bf[e];return Mf(t),t.value}function nH(e){const t=aH(e);try{const r=Rc(t);return Mf(r),r.value}catch(r){throw Ea.deleteCacheKey(e),r}}function oH(e){sH(e),iH(e)}function iH(e){delete Bf[e]}function sH(e){Ea.deleteCacheKey(e),localStorage.removeItem(e)}function aH(e){const t=localStorage.getItem(e);if(!t)throw Sl;return t}function lH(e,t){Bf[e]=t}function cH(e,t){Ea.addCacheKey(e),localStorage.setItem(e,jM(t))}function wj(e){localStorage.removeItem(e)}function Mf(e){if(!e)throw Sl;const t=Date.now(),r=e.updateTime,n=e.duration;try{if(!(t-r<n))throw Sl}catch{throw Sl}}function Hf(e){return!(!e||typeof e!="object"||typeof e.updateTime!="number"||typeof e.duration!="number")}function Sj(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var t=document.createElement("textarea");document.body.appendChild(t),t.style.position="fixed",t.style.clip="rect(0 0 0 0)",t.style.top="10px",t.value=e,t.select(),document.execCommand("copy",!0),document.body.removeChild(t)}}function Hg(){return Math.floor(Date.now()/1e3)}function ax(e,t){var r;if(!e)return{...t};if(!t)return e;for(const n in t)(r=e[n])!=null||(e[n]=t[n]);return e}async function fd(e=0){return new Promise((t,r)=>{setTimeout(()=>{t()},e)})}function uH(e){return!!e&&typeof e.then=="function"}function lx(){return(Math.random()*2**52).toString(36)}function cx(e,t=1e3,r=t*4){if(t<=0)return e;let n,o;const i=(...s)=>{clearTimeout(n),n=setTimeout(()=>{clearTimeout(o),e(...s)},t),o=setTimeout(()=>{clearTimeout(n),e(...s)},r)};return i.clear=()=>{clearTimeout(n)},i}function ux(e,t,...r){const n=e.length,o=a=>dx(e[a],r);if(t<o(0))return 0;if(t>o(n-1))return n;let i=0,s=n-1;for(;i<s;){let a=Math.floor(i+(s-i)/2);if(o(a)===t)return a;o(a)>t?s=a:i=a+1}return i}function dH(e,t,...r){const n=e.length,o=a=>dx(e[a],r);if(t>o(0))return 0;if(t<o(n-1))return n;let i=0,s=n-1;for(;i<s;){let a=Math.floor(i+(s-i)/2),l=o(a);if(l===t)return a;t>l?s=a:i=a+1}return s}function dx(e,t){return t.reduce((r,n)=>{if(r!==void 0)return r[n]},e)}function fH(e,t){const r=new Set;return t.forEach(n=>{!e.has(n)&&r.add(n)}),r}function hH(e,t){const r=e.indexOf(t);r!==-1&&e.splice(r,1)}function _j(...e){const t=new Set;for(const r of e)for(const n of r)t.add(n);return t}async function Ej(e,t=2e3){const r=Date.now();return new Promise(async(n,o)=>{try{await fetch(`${window.location.protocol}//${e}/`,{mode:"no-cors"}),n(Date.now()-r)}catch(i){String(i).includes("Failed to fetch")?o("\u65E0\u6CD5\u8FDE\u63A5"):o("\u672A\u77E5\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5")}setTimeout(()=>{o(`\u8D85\u65F6:${Date.now()-r}`)},t)})}function fx(e,...t){for(const r of t)for(const n of r!=null?r:[])e.add(n);return e}function pH(e,t,r=To.syncInterval){if(r===0){t();return}ox(JSON.stringify(e),()=>(t(),!0),{duration:r})}function gH(e){return e!==e}function Tj(e){return typeof e=="number"&&!gH(e)}function $j(e,t,r){const n=mH(e,t,r);return`rgb(${n*255},${255-n*255},${255})`}function mH(e,t,r){return e>=r?1:e<=t?0:e/(r-t)}async function bH(e,t){return new Promise((r,n)=>{const o=new XMLHttpRequest;o.open(t.method,e),o.upload.onprogress=i=>{i.lengthComputable&&t.onProgress({percent:i.loaded/i.total*100})},o.onerror=i=>{n(i)},o.onabort=()=>{n("\u5DF2\u53D6\u6D88\u4E0A\u4F20")},o.upload.onabort=()=>{n("\u5DF2\u53D6\u6D88\u4E0A\u4F20")},o.onload=i=>{o.status===200&&r({text:i.target.responseText,event:i})},o.send(t.body)})}function Pj(e=0){return{count:e,reduce(){this.count++},clear(){this.count=0},set(t){this.count=t}}}function Lj(){return`#${Math.floor(Math.random()*16777216).toString(16).padStart(6,"0")}`}function vH(e=0){return{isRun:!1,queue:[],interval:e,run(){this.isRun=!0;const t=this.queue.pop();if(!t){this.isRun=!1;return}t.task(),setTimeout(()=>this.run(),this.interval)},unShift(t){this.insert(t,0),this._run()},insert(t,r){const n=ux(this.queue,r,"priority");this.queue.splice(n,0,{task:t,priority:r}),this._run()},_run(){this.isRun||this.run()}}}const hx=new Zo.exports,px=W(null),ws=W([]);function yH(){return px}function xH(){return async e=>{var r;const t=ws.value;ws.value=[e],await fd(0),((r=px.value)==null?void 0:r.submit).call(r),await fd(0),ws.value=t,ws.value.push(e)}}const Si=W(!1);function kj(){return{isShow:Si,show(){Si.value=!0},hidden(){Si.value=!1}}}const Dg=void 0;function gx(){return tt(Si,()=>{clearTimeout(Dg)}),()=>{clearTimeout(Dg),Si.value=!0,setTimeout(()=>{Si.value=!1},3e3)}}function Ij(){const e=xH(),t=gx();return async r=>new Promise((n,o)=>{t();const i={id:lx(),name:r.name,file:r,status:"pending"};hx.once(i.id,s=>{n(s)}),e(i)})}function CH(){return ws}function wH(){const e=tB(),t=gx();return async({file:n,data:o,headers:i,withCredentials:s,action:a,onFinish:l,onError:c,onProgress:u})=>{const d=new FormData;d.append("fileToUpload",n.file),bH("https://nostr.build/upload.php",{method:"post",body:d,onProgress:u}).then(({text:h})=>{const p=h,b=DM()[Symbol.match](p);if(!b)return Promise.reject("\u6CA1\u6709\u627E\u5230url");const w=b[0];if(!w)return Promise.reject("");n.url=w,l(),hx.emit(n.id,{file:n,url:w}),e.success("\u4E0A\u4F20\u6210\u529F"),t()}).catch(h=>{e.error("\u4E0A\u4F20\u5931\u8D25",h),console.error("\u4E0A\u4F20\u5931\u8D25",h),c()})}}const SH=be({__name:"UploadProvide",setup(e){const t=yH(),r=CH(),n=wH();return(o,i)=>{const s=VB;return an(),Wn(s,{abstract:"",ref_key:"uploadRef",ref:t,fileList:mr(r),"onUpdate:fileList":i[0]||(i[0]=a=>vt(r)?r.value=a:null),"show-preview-button":"","show-download-button":"","show-cancel-button":"","show-remove-button":"",customRequest:mr(n)},{default:Sr(()=>[Gd(o.$slots,"default")]),_:3},8,["fileList","customRequest"])}}});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ii=typeof window<"u";function _H(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function mu(e,t){const r={};for(const n in t){const o=t[n];r[n]=Lr(o)?o.map(e):e(o)}return r}const Bs=()=>{},Lr=Array.isArray,EH=/\/$/,TH=e=>e.replace(EH,"");function bu(e,t,r="/"){let n,o={},i="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),o=e(i)),a>-1&&(n=n||t.slice(0,a),s=t.slice(a,t.length)),n=kH(n!=null?n:t,r),{fullPath:n+(i&&"?")+i+s,path:n,query:o,hash:s}}function $H(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function zg(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function PH(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&Mi(t.matched[n],r.matched[o])&&mx(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function Mi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mx(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!LH(e[r],t[r]))return!1;return!0}function LH(e,t){return Lr(e)?Fg(e,t):Lr(t)?Fg(t,e):e===t}function Fg(e,t){return Lr(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function kH(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,i,s;for(i=0;i<n.length;i++)if(s=n[i],s!==".")if(s==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(i-(i===n.length?1:0)).join("/")}var sa;(function(e){e.pop="pop",e.push="push"})(sa||(sa={}));var Ms;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ms||(Ms={}));function IH(e){if(!e)if(ii){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),TH(e)}const RH=/^[^#]+#/;function OH(e,t){return e.replace(RH,"#")+t}function AH(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const Ac=()=>({left:window.pageXOffset,top:window.pageYOffset});function BH(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=AH(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ng(e,t){return(history.state?history.state.position-t:-1)+e}const hd=new Map;function MH(e,t){hd.set(e,t)}function HH(e){const t=hd.get(e);return hd.delete(e),t}let DH=()=>location.protocol+"//"+location.host;function bx(e,t){const{pathname:r,search:n,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),zg(l,"")}return zg(r,e)+n+o}function zH(e,t,r,n){let o=[],i=[],s=null;const a=({state:f})=>{const h=bx(e,location),p=r.value,b=t.value;let w=0;if(f){if(r.value=h,t.value=f,s&&s===p){s=null;return}w=b?f.position-b.position:0}else n(h);o.forEach(g=>{g(r.value,p,{delta:w,type:sa.pop,direction:w?w>0?Ms.forward:Ms.back:Ms.unknown})})};function l(){s=r.value}function c(f){o.push(f);const h=()=>{const p=o.indexOf(f);p>-1&&o.splice(p,1)};return i.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(Ye({},f.state,{scroll:Ac()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function jg(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?Ac():null}}function FH(e){const{history:t,location:r}=window,n={value:bx(e,r)},o={value:t.state};o.value||i(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=e.indexOf("#"),f=d>-1?(r.host&&document.querySelector("base")?e:e.slice(d))+l:DH()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),o.value=c}catch(h){console.error(h),r[u?"replace":"assign"](f)}}function s(l,c){const u=Ye({},t.state,jg(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});i(l,u,!0),n.value=l}function a(l,c){const u=Ye({},o.value,t.state,{forward:l,scroll:Ac()});i(u.current,u,!0);const d=Ye({},jg(n.value,l,null),{position:u.position+1},c);i(l,d,!1),n.value=l}return{location:n,state:o,push:a,replace:s}}function NH(e){e=IH(e);const t=FH(e),r=zH(e,t.state,t.location,t.replace);function n(i,s=!0){s||r.pauseListeners(),history.go(i)}const o=Ye({location:"",base:e,go:n,createHref:OH.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function jH(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),NH(e)}function WH(e){return typeof e=="string"||e&&typeof e=="object"}function vx(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yx=Symbol("");var Wg;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wg||(Wg={}));function Hi(e,t){return Ye(new Error,{type:e,[yx]:!0},t)}function Jr(e,t){return e instanceof Error&&yx in e&&(t==null||!!(e.type&t))}const Ug="[^/]+?",UH={sensitive:!1,strict:!1,start:!0,end:!0},VH=/[.+*?^${}()[\]/\\]/g;function KH(e,t){const r=Ye({},UH,t),n=[];let o=r.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];r.strict&&!c.length&&(o+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(r.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(VH,"\\$&"),h+=40;else if(f.type===1){const{value:p,repeatable:b,optional:w,regexp:g}=f;i.push({name:p,repeatable:b,optional:w});const m=g||Ug;if(m!==Ug){h+=10;try{new RegExp(`(${m})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+x.message)}}let _=b?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(_=w&&c.length<2?`(?:/${_})`:"/"+_),w&&(_+="?"),o+=_,h+=20,w&&(h+=-8),b&&(h+=-20),m===".*"&&(h+=-50)}u.push(h)}n.push(u)}if(r.strict&&r.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const s=new RegExp(o,r.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",p=i[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:p,repeatable:b,optional:w}=h,g=p in c?c[p]:"";if(Lr(g)&&!b)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=Lr(g)?g.join("/"):g;if(!m)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:s,score:n,keys:i,parse:a,stringify:l}}function qH(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function GH(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const i=qH(n[r],o[r]);if(i)return i;r++}if(Math.abs(o.length-n.length)===1){if(Vg(n))return 1;if(Vg(o))return-1}return o.length-n.length}function Vg(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const XH={type:0,value:""},YH=/[a-zA-Z0-9_]/;function ZH(e){if(!e)return[[]];if(e==="/")return[[XH]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${r})/"${c}": ${h}`)}let r=0,n=r;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,c="",u="";function d(){!c||(r===0?i.push({type:0,value:c}):r===1||r===2||r===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),r=1):f();break;case 4:f(),r=n;break;case 1:l==="("?r=2:YH.test(l)?f():(d(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=3:u+=l;break;case 3:d(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),s(),o}function JH(e,t,r){const n=KH(ZH(e.path),r),o=Ye(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function QH(e,t){const r=[],n=new Map;t=Gg({strict:!1,end:!0,sensitive:!1},t);function o(u){return n.get(u)}function i(u,d,f){const h=!f,p=eD(u);p.aliasOf=f&&f.record;const b=Gg(t,u),w=[p];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of _)w.push(Ye({},p,{components:f?f.record.components:p.components,path:x,aliasOf:f?f.record:p}))}let g,m;for(const _ of w){const{path:x}=_;if(d&&x[0]!=="/"){const C=d.record.path,$=C[C.length-1]==="/"?"":"/";_.path=d.record.path+(x&&$+x)}if(g=JH(_,d,b),f?f.alias.push(g):(m=m||g,m!==g&&m.alias.push(g),h&&u.name&&!qg(g)&&s(u.name)),p.children){const C=p.children;for(let $=0;$<C.length;$++)i(C[$],g,f&&f.children[$])}f=f||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&l(g)}return m?()=>{s(m)}:Bs}function s(u){if(vx(u)){const d=n.get(u);d&&(n.delete(u),r.splice(r.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=r.indexOf(u);d>-1&&(r.splice(d,1),u.record.name&&n.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return r}function l(u){let d=0;for(;d<r.length&&GH(u,r[d])>=0&&(u.record.path!==r[d].record.path||!xx(u,r[d]));)d++;r.splice(d,0,u),u.record.name&&!qg(u)&&n.set(u.record.name,u)}function c(u,d){let f,h={},p,b;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Hi(1,{location:u});b=f.record.name,h=Ye(Kg(d.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Kg(u.params,f.keys.map(m=>m.name))),p=f.stringify(h)}else if("path"in u)p=u.path,f=r.find(m=>m.re.test(p)),f&&(h=f.parse(p),b=f.record.name);else{if(f=d.name?n.get(d.name):r.find(m=>m.re.test(d.path)),!f)throw Hi(1,{location:u,currentLocation:d});b=f.record.name,h=Ye({},d.params,u.params),p=f.stringify(h)}const w=[];let g=f;for(;g;)w.unshift(g.record),g=g.parent;return{name:b,path:p,params:h,matched:w,meta:rD(w)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function Kg(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function eD(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tD(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tD(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="boolean"?r:r[n];return t}function qg(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rD(e){return e.reduce((t,r)=>Ye(t,r.meta),{})}function Gg(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function xx(e,t){return t.children.some(r=>r===e||xx(e,r))}const Cx=/#/g,nD=/&/g,oD=/\//g,iD=/=/g,sD=/\?/g,wx=/\+/g,aD=/%5B/g,lD=/%5D/g,Sx=/%5E/g,cD=/%60/g,_x=/%7B/g,uD=/%7C/g,Ex=/%7D/g,dD=/%20/g;function Df(e){return encodeURI(""+e).replace(uD,"|").replace(aD,"[").replace(lD,"]")}function fD(e){return Df(e).replace(_x,"{").replace(Ex,"}").replace(Sx,"^")}function pd(e){return Df(e).replace(wx,"%2B").replace(dD,"+").replace(Cx,"%23").replace(nD,"%26").replace(cD,"`").replace(_x,"{").replace(Ex,"}").replace(Sx,"^")}function hD(e){return pd(e).replace(iD,"%3D")}function pD(e){return Df(e).replace(Cx,"%23").replace(sD,"%3F")}function gD(e){return e==null?"":pD(e).replace(oD,"%2F")}function Vl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function mD(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const i=n[o].replace(wx," "),s=i.indexOf("="),a=Vl(s<0?i:i.slice(0,s)),l=s<0?null:Vl(i.slice(s+1));if(a in t){let c=t[a];Lr(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Xg(e){let t="";for(let r in e){const n=e[r];if(r=hD(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(Lr(n)?n.map(i=>i&&pd(i)):[n&&pd(n)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+r,i!=null&&(t+="="+i))})}return t}function bD(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=Lr(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const vD=Symbol(""),Yg=Symbol(""),Bc=Symbol(""),zf=Symbol(""),gd=Symbol("");function hs(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function Hn(e,t,r,n,o){const i=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const l=d=>{d===!1?a(Hi(4,{from:r,to:t})):d instanceof Error?a(d):WH(d)?a(Hi(2,{from:t,to:d})):(i&&n.enterCallbacks[o]===i&&typeof d=="function"&&i.push(d),s())},c=e.call(n&&n.instances[o],t,r,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function vu(e,t,r,n){const o=[];for(const i of e)for(const s in i.components){let a=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(yD(a)){const c=(a.__vccOpts||a)[t];c&&o.push(Hn(c,r,n,i,s))}else{let l=a();o.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const u=_H(c)?c.default:c;i.components[s]=u;const f=(u.__vccOpts||u)[t];return f&&Hn(f,r,n,i,s)()}))}}return o}function yD(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zg(e){const t=Se(Bc),r=Se(zf),n=q(()=>t.resolve(mr(e.to))),o=q(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],d=r.matched;if(!u||!d.length)return-1;const f=d.findIndex(Mi.bind(null,u));if(f>-1)return f;const h=Jg(l[c-2]);return c>1&&Jg(u)===h&&d[d.length-1].path!==h?d.findIndex(Mi.bind(null,l[c-2])):f}),i=q(()=>o.value>-1&&SD(r.params,n.value.params)),s=q(()=>o.value>-1&&o.value===r.matched.length-1&&mx(r.params,n.value.params));function a(l={}){return wD(l)?t[mr(e.replace)?"replace":"push"](mr(e.to)).catch(Bs):Promise.resolve()}return{route:n,href:q(()=>n.value.href),isActive:i,isExactActive:s,navigate:a}}const xD=be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zg,setup(e,{slots:t}){const r=Zt(Zg(e)),{options:n}=Se(Bc),o=q(()=>({[Qg(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[Qg(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=t.default&&t.default(r);return e.custom?i:E("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},i)}}}),CD=xD;function wD(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function SD(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!Lr(o)||o.length!==n.length||n.some((i,s)=>i!==o[s]))return!1}return!0}function Jg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qg=(e,t,r)=>e!=null?e:t!=null?t:r,_D=be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=Se(gd),o=q(()=>e.route||n.value),i=Se(Yg,0),s=q(()=>{let c=mr(i);const{matched:u}=o.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=q(()=>o.value.matched[s.value]);Ze(Yg,q(()=>s.value+1)),Ze(vD,a),Ze(gd,o);const l=W();return tt(()=>[l.value,a.value,e.name],([c,u,d],[f,h,p])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Mi(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return em(r.default,{Component:f,route:c});const h=d.props[u],p=h?h===!0?c.params:typeof h=="function"?h(c):h:null,w=E(f,Ye({},p,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return em(r.default,{Component:w,route:c})||w}}});function em(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const ED=_D;function TD(e){const t=QH(e.routes,e),r=e.parseQuery||mD,n=e.stringifyQuery||Xg,o=e.history,i=hs(),s=hs(),a=hs(),l=Fd(En);let c=En;ii&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mu.bind(null,j=>""+j),d=mu.bind(null,gD),f=mu.bind(null,Vl);function h(j,Q){let te,de;return vx(j)?(te=t.getRecordMatcher(j),de=Q):de=j,t.addRoute(de,te)}function p(j){const Q=t.getRecordMatcher(j);Q&&t.removeRoute(Q)}function b(){return t.getRoutes().map(j=>j.record)}function w(j){return!!t.getRecordMatcher(j)}function g(j,Q){if(Q=Ye({},Q||l.value),typeof j=="string"){const T=bu(r,j,Q.path),v=t.resolve({path:T.path},Q),y=o.createHref(T.fullPath);return Ye(T,v,{params:f(v.params),hash:Vl(T.hash),redirectedFrom:void 0,href:y})}let te;if("path"in j)te=Ye({},j,{path:bu(r,j.path,Q.path).path});else{const T=Ye({},j.params);for(const v in T)T[v]==null&&delete T[v];te=Ye({},j,{params:d(j.params)}),Q.params=d(Q.params)}const de=t.resolve(te,Q),ae=j.hash||"";de.params=u(f(de.params));const $e=$H(n,Ye({},j,{hash:fD(ae),path:de.path})),ve=o.createHref($e);return Ye({fullPath:$e,hash:ae,query:n===Xg?bD(j.query):j.query||{}},de,{redirectedFrom:void 0,href:ve})}function m(j){return typeof j=="string"?bu(r,j,l.value.path):Ye({},j)}function _(j,Q){if(c!==j)return Hi(8,{from:Q,to:j})}function x(j){return S(j)}function C(j){return x(Ye(m(j),{replace:!0}))}function $(j){const Q=j.matched[j.matched.length-1];if(Q&&Q.redirect){const{redirect:te}=Q;let de=typeof te=="function"?te(j):te;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=m(de):{path:de},de.params={}),Ye({query:j.query,hash:j.hash,params:"path"in de?{}:j.params},de)}}function S(j,Q){const te=c=g(j),de=l.value,ae=j.state,$e=j.force,ve=j.replace===!0,T=$(te);if(T)return S(Ye(m(T),{state:typeof T=="object"?Ye({},ae,T.state):ae,force:$e,replace:ve}),Q||te);const v=te;v.redirectedFrom=Q;let y;return!$e&&PH(n,de,te)&&(y=Hi(16,{to:v,from:de}),ke(de,de,!0,!1)),(y?Promise.resolve(y):k(v,de)).catch(L=>Jr(L)?Jr(L,2)?L:ye(L):J(L,v,de)).then(L=>{if(L){if(Jr(L,2))return S(Ye({replace:ve},m(L.to),{state:typeof L.to=="object"?Ye({},ae,L.to.state):ae,force:$e}),Q||v)}else L=O(v,de,!0,ve,ae);return I(v,de,L),L})}function P(j,Q){const te=_(j,Q);return te?Promise.reject(te):Promise.resolve()}function k(j,Q){let te;const[de,ae,$e]=$D(j,Q);te=vu(de.reverse(),"beforeRouteLeave",j,Q);for(const T of de)T.leaveGuards.forEach(v=>{te.push(Hn(v,j,Q))});const ve=P.bind(null,j,Q);return te.push(ve),ri(te).then(()=>{te=[];for(const T of i.list())te.push(Hn(T,j,Q));return te.push(ve),ri(te)}).then(()=>{te=vu(ae,"beforeRouteUpdate",j,Q);for(const T of ae)T.updateGuards.forEach(v=>{te.push(Hn(v,j,Q))});return te.push(ve),ri(te)}).then(()=>{te=[];for(const T of j.matched)if(T.beforeEnter&&!Q.matched.includes(T))if(Lr(T.beforeEnter))for(const v of T.beforeEnter)te.push(Hn(v,j,Q));else te.push(Hn(T.beforeEnter,j,Q));return te.push(ve),ri(te)}).then(()=>(j.matched.forEach(T=>T.enterCallbacks={}),te=vu($e,"beforeRouteEnter",j,Q),te.push(ve),ri(te))).then(()=>{te=[];for(const T of s.list())te.push(Hn(T,j,Q));return te.push(ve),ri(te)}).catch(T=>Jr(T,8)?T:Promise.reject(T))}function I(j,Q,te){for(const de of a.list())de(j,Q,te)}function O(j,Q,te,de,ae){const $e=_(j,Q);if($e)return $e;const ve=Q===En,T=ii?history.state:{};te&&(de||ve?o.replace(j.fullPath,Ye({scroll:ve&&T&&T.scroll},ae)):o.push(j.fullPath,ae)),l.value=j,ke(j,Q,te,ve),ye()}let R;function H(){R||(R=o.listen((j,Q,te)=>{if(!Ve.listening)return;const de=g(j),ae=$(de);if(ae){S(Ye(ae,{replace:!0}),de).catch(Bs);return}c=de;const $e=l.value;ii&&MH(Ng($e.fullPath,te.delta),Ac()),k(de,$e).catch(ve=>Jr(ve,12)?ve:Jr(ve,2)?(S(ve.to,de).then(T=>{Jr(T,20)&&!te.delta&&te.type===sa.pop&&o.go(-1,!1)}).catch(Bs),Promise.reject()):(te.delta&&o.go(-te.delta,!1),J(ve,de,$e))).then(ve=>{ve=ve||O(de,$e,!1),ve&&(te.delta&&!Jr(ve,8)?o.go(-te.delta,!1):te.type===sa.pop&&Jr(ve,20)&&o.go(-1,!1)),I(de,$e,ve)}).catch(Bs)}))}let B=hs(),Z=hs(),G;function J(j,Q,te){ye(j);const de=Z.list();return de.length?de.forEach(ae=>ae(j,Q,te)):console.error(j),Promise.reject(j)}function se(){return G&&l.value!==En?Promise.resolve():new Promise((j,Q)=>{B.add([j,Q])})}function ye(j){return G||(G=!j,H(),B.list().forEach(([Q,te])=>j?te(j):Q()),B.reset()),j}function ke(j,Q,te,de){const{scrollBehavior:ae}=e;if(!ii||!ae)return Promise.resolve();const $e=!te&&HH(Ng(j.fullPath,0))||(de||!te)&&history.state&&history.state.scroll||null;return Ht().then(()=>ae(j,Q,$e)).then(ve=>ve&&BH(ve)).catch(ve=>J(ve,j,Q))}const Te=j=>o.go(j);let Ae;const ut=new Set,Ve={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,hasRoute:w,getRoutes:b,resolve:g,options:e,push:x,replace:C,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:Z.add,isReady:se,install(j){const Q=this;j.component("RouterLink",CD),j.component("RouterView",ED),j.config.globalProperties.$router=Q,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>mr(l)}),ii&&!Ae&&l.value===En&&(Ae=!0,x(o.location).catch(ae=>{}));const te={};for(const ae in En)te[ae]=q(()=>l.value[ae]);j.provide(Bc,Q),j.provide(zf,Zt(te)),j.provide(gd,l);const de=j.unmount;ut.add(j),j.unmount=function(){ut.delete(j),ut.size<1&&(c=En,R&&R(),R=null,l.value=En,Ae=!1,G=!1),de()}}};return Ve}function ri(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function $D(e,t){const r=[],n=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=t.matched[s];a&&(e.matched.find(c=>Mi(c,a))?n.push(a):r.push(a));const l=e.matched[s];l&&(t.matched.find(c=>Mi(c,l))||o.push(l))}return[r,n,o]}function Tx(){return Se(Bc)}function PD(){return Se(zf)}const LD=be({__name:"Router",setup(e){Tx(),PD();const t=W(["MarkdownEditorView"]);return(r,n)=>{const o=B2("router-view");return an(),Wn(o,null,{default:Sr(({Component:i})=>[(an(),Wn($2,{exclude:t.value},[(an(),Wn(M2(i)))],1032,["exclude"]))]),_:1})}}}),kD=be({__name:"Main",setup(e){const t=Tx(),r=qA();return t.beforeEach(()=>{r.start()}),t.afterEach(()=>{r.finish()}),(n,o)=>(an(),Wn(LD))}}),ID={class:"container"},RD={class:"w-full h-screen overflow-hidden"},OD=be({__name:"App",setup(e){return logger.for("app.vue").info("\u8FDB\u5165app.vue"),(t,r)=>{const n=KA,o=dB,i=eB,s=mI;return an(),Wn(mr(a8),{theme:mr(dd)},{default:Sr(()=>{var a;return[$s("div",{class:"body",style:qi({backgroundColor:(a=mr(dd))==null?void 0:a.common.bodyColor})},[$s("div",ID,[$s("div",RD,[Ue(s,null,{default:Sr(()=>[Ue(i,null,{default:Sr(()=>[Ue(o,{placement:"bottom"},{default:Sr(()=>[Ue(n,null,{default:Sr(()=>[Ue(HM,null,{default:Sr(()=>[Ue(SH,null,{default:Sr(()=>[Ue(kD)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])],4)]}),_:1},8,["theme"])}}});const AD=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},BD=AD(OD,[["__scopeId","data-v-08c8a36b"]]),MD="modulepreload",HD=function(e,t){return new URL(e,t).href},tm={},Xe=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=HD(i,n),i in tm)return;tm[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!n)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===i&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":MD,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},DD=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((n,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})};/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const zD=typeof window<"u",FD=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",lo=e=>FD?Symbol(e):e,ND=(e,t,r)=>jD({l:e,k:t,s:r}),jD=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),$t=e=>typeof e=="number"&&isFinite(e),WD=e=>Nf(e)==="[object Date]",no=e=>Nf(e)==="[object RegExp]",Mc=e=>Le(e)&&Object.keys(e).length===0;function UD(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Lt=Object.assign;function rm(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const VD=Object.prototype.hasOwnProperty;function Ff(e,t){return VD.call(e,t)}const ot=Array.isArray,mt=e=>typeof e=="function",fe=e=>typeof e=="string",Fe=e=>typeof e=="boolean",it=e=>e!==null&&typeof e=="object",$x=Object.prototype.toString,Nf=e=>$x.call(e),Le=e=>Nf(e)==="[object Object]",KD=e=>e==null?"":ot(e)||Le(e)&&e.toString===$x?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const We={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function Hc(e,t,r={}){const{domain:n,messages:o,args:i}=r,s=e,a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=n,a}function qD(e){throw e}function GD(e,t,r){return{line:e,column:t,offset:r}}function md(e,t,r){const n={start:e,end:t};return r!=null&&(n.source=r),n}const Qr=" ",XD="\r",Nt=`
`,YD=String.fromCharCode(8232),ZD=String.fromCharCode(8233);function JD(e){const t=e;let r=0,n=1,o=1,i=0;const s=S=>t[S]===XD&&t[S+1]===Nt,a=S=>t[S]===Nt,l=S=>t[S]===ZD,c=S=>t[S]===YD,u=S=>s(S)||a(S)||l(S)||c(S),d=()=>r,f=()=>n,h=()=>o,p=()=>i,b=S=>s(S)||l(S)||c(S)?Nt:t[S],w=()=>b(r),g=()=>b(r+i);function m(){return i=0,u(r)&&(n++,o=0),s(r)&&r++,r++,o++,t[r]}function _(){return s(r+i)&&i++,i++,t[r+i]}function x(){r=0,n=1,o=1,i=0}function C(S=0){i=S}function $(){const S=r+i;for(;S!==r;)m();i=0}return{index:d,line:f,column:h,peekOffset:p,charAt:b,currentChar:w,currentPeek:g,next:m,peek:_,reset:x,resetPeek:C,skipToPeek:$}}const Tn=void 0,nm="'",QD="tokenizer";function ez(e,t={}){const r=t.location!==!1,n=JD(e),o=()=>n.index(),i=()=>GD(n.line(),n.column(),n.index()),s=i(),a=o(),l={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=t;function d(v,y,L,...A){const D=c();if(y.column+=L,y.offset+=L,u){const K=md(D.startLoc,y),Y=Hc(v,K,{domain:QD,args:A});u(Y)}}function f(v,y,L){v.endLoc=i(),v.currentType=y;const A={type:y};return r&&(A.loc=md(v.startLoc,v.endLoc)),L!=null&&(A.value=L),A}const h=v=>f(v,14);function p(v,y){return v.currentChar()===y?(v.next(),y):(d(We.EXPECTED_TOKEN,i(),0,y),"")}function b(v){let y="";for(;v.currentPeek()===Qr||v.currentPeek()===Nt;)y+=v.currentPeek(),v.peek();return y}function w(v){const y=b(v);return v.skipToPeek(),y}function g(v){if(v===Tn)return!1;const y=v.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function m(v){if(v===Tn)return!1;const y=v.charCodeAt(0);return y>=48&&y<=57}function _(v,y){const{currentType:L}=y;if(L!==2)return!1;b(v);const A=g(v.currentPeek());return v.resetPeek(),A}function x(v,y){const{currentType:L}=y;if(L!==2)return!1;b(v);const A=v.currentPeek()==="-"?v.peek():v.currentPeek(),D=m(A);return v.resetPeek(),D}function C(v,y){const{currentType:L}=y;if(L!==2)return!1;b(v);const A=v.currentPeek()===nm;return v.resetPeek(),A}function $(v,y){const{currentType:L}=y;if(L!==8)return!1;b(v);const A=v.currentPeek()===".";return v.resetPeek(),A}function S(v,y){const{currentType:L}=y;if(L!==9)return!1;b(v);const A=g(v.currentPeek());return v.resetPeek(),A}function P(v,y){const{currentType:L}=y;if(!(L===8||L===12))return!1;b(v);const A=v.currentPeek()===":";return v.resetPeek(),A}function k(v,y){const{currentType:L}=y;if(L!==10)return!1;const A=()=>{const K=v.currentPeek();return K==="{"?g(v.peek()):K==="@"||K==="%"||K==="|"||K===":"||K==="."||K===Qr||!K?!1:K===Nt?(v.peek(),A()):g(K)},D=A();return v.resetPeek(),D}function I(v){b(v);const y=v.currentPeek()==="|";return v.resetPeek(),y}function O(v){const y=b(v),L=v.currentPeek()==="%"&&v.peek()==="{";return v.resetPeek(),{isModulo:L,hasSpace:y.length>0}}function R(v,y=!0){const L=(D=!1,K="",Y=!1)=>{const V=v.currentPeek();return V==="{"?K==="%"?!1:D:V==="@"||!V?K==="%"?!0:D:V==="%"?(v.peek(),L(D,"%",!0)):V==="|"?K==="%"||Y?!0:!(K===Qr||K===Nt):V===Qr?(v.peek(),L(!0,Qr,Y)):V===Nt?(v.peek(),L(!0,Nt,Y)):!0},A=L();return y&&v.resetPeek(),A}function H(v,y){const L=v.currentChar();return L===Tn?Tn:y(L)?(v.next(),L):null}function B(v){return H(v,L=>{const A=L.charCodeAt(0);return A>=97&&A<=122||A>=65&&A<=90||A>=48&&A<=57||A===95||A===36})}function Z(v){return H(v,L=>{const A=L.charCodeAt(0);return A>=48&&A<=57})}function G(v){return H(v,L=>{const A=L.charCodeAt(0);return A>=48&&A<=57||A>=65&&A<=70||A>=97&&A<=102})}function J(v){let y="",L="";for(;y=Z(v);)L+=y;return L}function se(v){w(v);const y=v.currentChar();return y!=="%"&&d(We.EXPECTED_TOKEN,i(),0,y),v.next(),"%"}function ye(v){let y="";for(;;){const L=v.currentChar();if(L==="{"||L==="}"||L==="@"||L==="|"||!L)break;if(L==="%")if(R(v))y+=L,v.next();else break;else if(L===Qr||L===Nt)if(R(v))y+=L,v.next();else{if(I(v))break;y+=L,v.next()}else y+=L,v.next()}return y}function ke(v){w(v);let y="",L="";for(;y=B(v);)L+=y;return v.currentChar()===Tn&&d(We.UNTERMINATED_CLOSING_BRACE,i(),0),L}function Te(v){w(v);let y="";return v.currentChar()==="-"?(v.next(),y+=`-${J(v)}`):y+=J(v),v.currentChar()===Tn&&d(We.UNTERMINATED_CLOSING_BRACE,i(),0),y}function Ae(v){w(v),p(v,"'");let y="",L="";const A=K=>K!==nm&&K!==Nt;for(;y=H(v,A);)y==="\\"?L+=ut(v):L+=y;const D=v.currentChar();return D===Nt||D===Tn?(d(We.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),D===Nt&&(v.next(),p(v,"'")),L):(p(v,"'"),L)}function ut(v){const y=v.currentChar();switch(y){case"\\":case"'":return v.next(),`\\${y}`;case"u":return Ve(v,y,4);case"U":return Ve(v,y,6);default:return d(We.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function Ve(v,y,L){p(v,y);let A="";for(let D=0;D<L;D++){const K=G(v);if(!K){d(We.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${A}${v.currentChar()}`);break}A+=K}return`\\${y}${A}`}function j(v){w(v);let y="",L="";const A=D=>D!=="{"&&D!=="}"&&D!==Qr&&D!==Nt;for(;y=H(v,A);)L+=y;return L}function Q(v){let y="",L="";for(;y=B(v);)L+=y;return L}function te(v){const y=(L=!1,A)=>{const D=v.currentChar();return D==="{"||D==="%"||D==="@"||D==="|"||!D||D===Qr?A:D===Nt?(A+=D,v.next(),y(L,A)):(A+=D,v.next(),y(!0,A))};return y(!1,"")}function de(v){w(v);const y=p(v,"|");return w(v),y}function ae(v,y){let L=null;switch(v.currentChar()){case"{":return y.braceNest>=1&&d(We.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),v.next(),L=f(y,2,"{"),w(v),y.braceNest++,L;case"}":return y.braceNest>0&&y.currentType===2&&d(We.EMPTY_PLACEHOLDER,i(),0),v.next(),L=f(y,3,"}"),y.braceNest--,y.braceNest>0&&w(v),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),L;case"@":return y.braceNest>0&&d(We.UNTERMINATED_CLOSING_BRACE,i(),0),L=$e(v,y)||h(y),y.braceNest=0,L;default:let D=!0,K=!0,Y=!0;if(I(v))return y.braceNest>0&&d(We.UNTERMINATED_CLOSING_BRACE,i(),0),L=f(y,1,de(v)),y.braceNest=0,y.inLinked=!1,L;if(y.braceNest>0&&(y.currentType===5||y.currentType===6||y.currentType===7))return d(We.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,ve(v,y);if(D=_(v,y))return L=f(y,5,ke(v)),w(v),L;if(K=x(v,y))return L=f(y,6,Te(v)),w(v),L;if(Y=C(v,y))return L=f(y,7,Ae(v)),w(v),L;if(!D&&!K&&!Y)return L=f(y,13,j(v)),d(We.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,L.value),w(v),L;break}return L}function $e(v,y){const{currentType:L}=y;let A=null;const D=v.currentChar();switch((L===8||L===9||L===12||L===10)&&(D===Nt||D===Qr)&&d(We.INVALID_LINKED_FORMAT,i(),0),D){case"@":return v.next(),A=f(y,8,"@"),y.inLinked=!0,A;case".":return w(v),v.next(),f(y,9,".");case":":return w(v),v.next(),f(y,10,":");default:return I(v)?(A=f(y,1,de(v)),y.braceNest=0,y.inLinked=!1,A):$(v,y)||P(v,y)?(w(v),$e(v,y)):S(v,y)?(w(v),f(y,12,Q(v))):k(v,y)?(w(v),D==="{"?ae(v,y)||A:f(y,11,te(v))):(L===8&&d(We.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,ve(v,y))}}function ve(v,y){let L={type:14};if(y.braceNest>0)return ae(v,y)||h(y);if(y.inLinked)return $e(v,y)||h(y);switch(v.currentChar()){case"{":return ae(v,y)||h(y);case"}":return d(We.UNBALANCED_CLOSING_BRACE,i(),0),v.next(),f(y,3,"}");case"@":return $e(v,y)||h(y);default:if(I(v))return L=f(y,1,de(v)),y.braceNest=0,y.inLinked=!1,L;const{isModulo:D,hasSpace:K}=O(v);if(D)return K?f(y,0,ye(v)):f(y,4,se(v));if(R(v))return f(y,0,ye(v));break}return L}function T(){const{currentType:v,offset:y,startLoc:L,endLoc:A}=l;return l.lastType=v,l.lastOffset=y,l.lastStartLoc=L,l.lastEndLoc=A,l.offset=o(),l.startLoc=i(),n.currentChar()===Tn?f(l,14):ve(n,l)}return{nextToken:T,currentOffset:o,currentPosition:i,context:c}}const tz="parser",rz=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function nz(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const n=parseInt(t||r,16);return n<=55295||n>=57344?String.fromCodePoint(n):"\uFFFD"}}}function oz(e={}){const t=e.location!==!1,{onError:r}=e;function n(g,m,_,x,...C){const $=g.currentPosition();if($.offset+=x,$.column+=x,r){const S=md(_,$),P=Hc(m,S,{domain:tz,args:C});r(P)}}function o(g,m,_){const x={type:g,start:m,end:m};return t&&(x.loc={start:_,end:_}),x}function i(g,m,_,x){g.end=m,x&&(g.type=x),t&&g.loc&&(g.loc.end=_)}function s(g,m){const _=g.context(),x=o(3,_.offset,_.startLoc);return x.value=m,i(x,g.currentOffset(),g.currentPosition()),x}function a(g,m){const _=g.context(),{lastOffset:x,lastStartLoc:C}=_,$=o(5,x,C);return $.index=parseInt(m,10),g.nextToken(),i($,g.currentOffset(),g.currentPosition()),$}function l(g,m){const _=g.context(),{lastOffset:x,lastStartLoc:C}=_,$=o(4,x,C);return $.key=m,g.nextToken(),i($,g.currentOffset(),g.currentPosition()),$}function c(g,m){const _=g.context(),{lastOffset:x,lastStartLoc:C}=_,$=o(9,x,C);return $.value=m.replace(rz,nz),g.nextToken(),i($,g.currentOffset(),g.currentPosition()),$}function u(g){const m=g.nextToken(),_=g.context(),{lastOffset:x,lastStartLoc:C}=_,$=o(8,x,C);return m.type!==12?(n(g,We.UNEXPECTED_EMPTY_LINKED_MODIFIER,_.lastStartLoc,0),$.value="",i($,x,C),{nextConsumeToken:m,node:$}):(m.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ar(m)),$.value=m.value||"",i($,g.currentOffset(),g.currentPosition()),{node:$})}function d(g,m){const _=g.context(),x=o(7,_.offset,_.startLoc);return x.value=m,i(x,g.currentOffset(),g.currentPosition()),x}function f(g){const m=g.context(),_=o(6,m.offset,m.startLoc);let x=g.nextToken();if(x.type===9){const C=u(g);_.modifier=C.node,x=C.nextConsumeToken||g.nextToken()}switch(x.type!==10&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(x)),x=g.nextToken(),x.type===2&&(x=g.nextToken()),x.type){case 11:x.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(x)),_.key=d(g,x.value||"");break;case 5:x.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(x)),_.key=l(g,x.value||"");break;case 6:x.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(x)),_.key=a(g,x.value||"");break;case 7:x.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(x)),_.key=c(g,x.value||"");break;default:n(g,We.UNEXPECTED_EMPTY_LINKED_KEY,m.lastStartLoc,0);const C=g.context(),$=o(7,C.offset,C.startLoc);return $.value="",i($,C.offset,C.startLoc),_.key=$,i(_,C.offset,C.startLoc),{nextConsumeToken:x,node:_}}return i(_,g.currentOffset(),g.currentPosition()),{node:_}}function h(g){const m=g.context(),_=m.currentType===1?g.currentOffset():m.offset,x=m.currentType===1?m.endLoc:m.startLoc,C=o(2,_,x);C.items=[];let $=null;do{const k=$||g.nextToken();switch($=null,k.type){case 0:k.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(k)),C.items.push(s(g,k.value||""));break;case 6:k.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(k)),C.items.push(a(g,k.value||""));break;case 5:k.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(k)),C.items.push(l(g,k.value||""));break;case 7:k.value==null&&n(g,We.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,Ar(k)),C.items.push(c(g,k.value||""));break;case 8:const I=f(g);C.items.push(I.node),$=I.nextConsumeToken||null;break}}while(m.currentType!==14&&m.currentType!==1);const S=m.currentType===1?m.lastOffset:g.currentOffset(),P=m.currentType===1?m.lastEndLoc:g.currentPosition();return i(C,S,P),C}function p(g,m,_,x){const C=g.context();let $=x.items.length===0;const S=o(1,m,_);S.cases=[],S.cases.push(x);do{const P=h(g);$||($=P.items.length===0),S.cases.push(P)}while(C.currentType!==14);return $&&n(g,We.MUST_HAVE_MESSAGES_IN_PLURAL,_,0),i(S,g.currentOffset(),g.currentPosition()),S}function b(g){const m=g.context(),{offset:_,startLoc:x}=m,C=h(g);return m.currentType===14?C:p(g,_,x,C)}function w(g){const m=ez(g,Lt({},e)),_=m.context(),x=o(0,_.offset,_.startLoc);return t&&x.loc&&(x.loc.source=g),x.body=b(m),_.currentType!==14&&n(m,We.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,g[_.offset]||""),i(x,m.currentOffset(),m.currentPosition()),x}return{parse:w}}function Ar(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"\u2026":t}function iz(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:i=>(r.helpers.add(i),i)}}function om(e,t){for(let r=0;r<e.length;r++)jf(e[r],t)}function jf(e,t){switch(e.type){case 1:om(e.cases,t),t.helper("plural");break;case 2:om(e.items,t);break;case 6:jf(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function sz(e,t={}){const r=iz(e);r.helper("normalize"),e.body&&jf(e.body,r);const n=r.context();e.helpers=Array.from(n.helpers)}function az(e,t){const{sourceMap:r,filename:n,breakLineCode:o,needIndent:i}=t,s={source:e.loc.source,filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:i,indentLevel:0},a=()=>s;function l(b,w){s.code+=b}function c(b,w=!0){const g=w?o:"";l(i?g+"  ".repeat(b):g)}function u(b=!0){const w=++s.indentLevel;b&&c(w)}function d(b=!0){const w=--s.indentLevel;b&&c(w)}function f(){c(s.indentLevel)}return{context:a,push:l,indent:u,deindent:d,newline:f,helper:b=>`_${b}`,needIndent:()=>s.needIndent}}function lz(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),Di(e,t.key),t.modifier?(e.push(", "),Di(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function cz(e,t){const{helper:r,needIndent:n}=e;e.push(`${r("normalize")}([`),e.indent(n());const o=t.items.length;for(let i=0;i<o&&(Di(e,t.items[i]),i!==o-1);i++)e.push(", ");e.deindent(n()),e.push("])")}function uz(e,t){const{helper:r,needIndent:n}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(n());const o=t.cases.length;for(let i=0;i<o&&(Di(e,t.cases[i]),i!==o-1);i++)e.push(", ");e.deindent(n()),e.push("])")}}function dz(e,t){t.body?Di(e,t.body):e.push("null")}function Di(e,t){const{helper:r}=e;switch(t.type){case 0:dz(e,t);break;case 1:uz(e,t);break;case 2:cz(e,t);break;case 6:lz(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const fz=(e,t={})=>{const r=fe(t.mode)?t.mode:"normal",n=fe(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,i=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,s=t.needIndent?t.needIndent:r!=="arrow",a=e.helpers||[],l=az(e,{mode:r,filename:n,sourceMap:o,breakLineCode:i,needIndent:s});l.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),a.length>0&&(l.push(`const { ${a.map(d=>`${d}: _${d}`).join(", ")} } = ctx`),l.newline()),l.push("return "),Di(l,e),l.deindent(s),l.push("}");const{code:c,map:u}=l.context();return{ast:e,code:c,map:u?u.toJSON():void 0}};function hz(e,t={}){const r=Lt({},t),o=oz(r).parse(e);return sz(o,r),fz(o,r)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const pz={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const co=[];co[0]={w:[0],i:[3,0],["["]:[4],o:[7]};co[1]={w:[1],["."]:[2],["["]:[4],o:[7]};co[2]={w:[2],i:[3,0],[0]:[3,0]};co[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};co[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};co[5]={["'"]:[4,0],o:8,l:[5,0]};co[6]={['"']:[4,0],o:8,l:[6,0]};const gz=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function mz(e){return gz.test(e)}function bz(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function vz(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function yz(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:mz(t)?bz(t):"*"+t}function xz(e){const t=[];let r=-1,n=0,o=0,i,s,a,l,c,u,d;const f=[];f[0]=()=>{s===void 0?s=a:s+=a},f[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},f[2]=()=>{f[0](),o++},f[3]=()=>{if(o>0)o--,n=4,f[0]();else{if(o=0,s===void 0||(s=yz(s),s===!1))return!1;f[1]()}};function h(){const p=e[r+1];if(n===5&&p==="'"||n===6&&p==='"')return r++,a="\\"+p,f[0](),!0}for(;n!==null;)if(r++,i=e[r],!(i==="\\"&&h())){if(l=vz(i),d=co[n],c=d[l]||d.l||8,c===8||(n=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(a=i,u()===!1))))return;if(n===7)return t}}const im=new Map;function Cz(e,t){return it(e)?e[t]:null}function wz(e,t){if(!it(e))return null;let r=im.get(t);if(r||(r=xz(t),r&&im.set(t,r)),!r)return null;const n=r.length;let o=e,i=0;for(;i<n;){const s=o[r[i]];if(s===void 0)return null;o=s,i++}return o}const Sz=e=>e,_z=e=>"",Ez="text",Tz=e=>e.length===0?"":e.join(""),$z=KD;function sm(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Pz(e){const t=$t(e.pluralIndex)?e.pluralIndex:-1;return e.named&&($t(e.named.count)||$t(e.named.n))?$t(e.named.count)?e.named.count:$t(e.named.n)?e.named.n:t:t}function Lz(e,t){t.count||(t.count=e),t.n||(t.n=e)}function kz(e={}){const t=e.locale,r=Pz(e),n=it(e.pluralRules)&&fe(t)&&mt(e.pluralRules[t])?e.pluralRules[t]:sm,o=it(e.pluralRules)&&fe(t)&&mt(e.pluralRules[t])?sm:void 0,i=g=>g[n(r,g.length,o)],s=e.list||[],a=g=>s[g],l=e.named||{};$t(e.pluralIndex)&&Lz(r,l);const c=g=>l[g];function u(g){const m=mt(e.messages)?e.messages(g):it(e.messages)?e.messages[g]:!1;return m||(e.parent?e.parent.message(g):_z)}const d=g=>e.modifiers?e.modifiers[g]:Sz,f=Le(e.processor)&&mt(e.processor.normalize)?e.processor.normalize:Tz,h=Le(e.processor)&&mt(e.processor.interpolate)?e.processor.interpolate:$z,p=Le(e.processor)&&fe(e.processor.type)?e.processor.type:Ez,w={list:a,named:c,plural:i,linked:(g,...m)=>{const[_,x]=m;let C="text",$="";m.length===1?it(_)?($=_.modifier||$,C=_.type||C):fe(_)&&($=_||$):m.length===2&&(fe(_)&&($=_||$),fe(x)&&(C=x||C));let S=u(g)(w);return C==="vnode"&&ot(S)&&$&&(S=S[0]),$?d($)(S,C):S},message:u,type:p,interpolate:h,normalize:f};return w}let Iz=null;pz.FunctionTranslate;function Rz(e){return t=>Iz}const Oz={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Az(e,t,r){return[...new Set([r,...ot(t)?t:it(t)?Object.keys(t):fe(t)?[t]:[r]])]}function Px(e,t,r){const n=fe(r)?r:Ta,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let i=o.__localeChainCache.get(n);if(!i){i=[];let s=[r];for(;ot(s);)s=am(i,s,t);const a=ot(t)||!Le(t)?t:t.default?t.default:null;s=fe(a)?[a]:a,ot(s)&&am(i,s,!1),o.__localeChainCache.set(n,i)}return i}function am(e,t,r){let n=!0;for(let o=0;o<t.length&&Fe(n);o++){const i=t[o];fe(i)&&(n=Bz(e,t[o],r))}return n}function Bz(e,t,r){let n;const o=t.split("-");do{const i=o.join("-");n=Mz(e,i,r),o.splice(-1,1)}while(o.length&&n===!0);return n}function Mz(e,t,r){let n=!1;if(!e.includes(t)&&(n=!0,t)){n=t[t.length-1]!=="!";const o=t.replace(/!/g,"");e.push(o),(ot(r)||Le(r))&&r[o]&&(n=r[o])}return n}const Hz="9.2.2",Dc=-1,Ta="en-US",lm="",cm=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Dz(){return{upper:(e,t)=>t==="text"&&fe(e)?e.toUpperCase():t==="vnode"&&it(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&fe(e)?e.toLowerCase():t==="vnode"&&it(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&fe(e)?cm(e):t==="vnode"&&it(e)&&"__v_isVNode"in e?cm(e.children):e}}let Lx;function zz(e){Lx=e}let kx;function Fz(e){kx=e}let Ix;function Nz(e){Ix=e}let um=0;function jz(e={}){const t=fe(e.version)?e.version:Hz,r=fe(e.locale)?e.locale:Ta,n=ot(e.fallbackLocale)||Le(e.fallbackLocale)||fe(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,o=Le(e.messages)?e.messages:{[r]:{}},i=Le(e.datetimeFormats)?e.datetimeFormats:{[r]:{}},s=Le(e.numberFormats)?e.numberFormats:{[r]:{}},a=Lt({},e.modifiers||{},Dz()),l=e.pluralRules||{},c=mt(e.missing)?e.missing:null,u=Fe(e.missingWarn)||no(e.missingWarn)?e.missingWarn:!0,d=Fe(e.fallbackWarn)||no(e.fallbackWarn)?e.fallbackWarn:!0,f=!!e.fallbackFormat,h=!!e.unresolving,p=mt(e.postTranslation)?e.postTranslation:null,b=Le(e.processor)?e.processor:null,w=Fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,g=!!e.escapeParameter,m=mt(e.messageCompiler)?e.messageCompiler:Lx,_=mt(e.messageResolver)?e.messageResolver:kx||Cz,x=mt(e.localeFallbacker)?e.localeFallbacker:Ix||Az,C=it(e.fallbackContext)?e.fallbackContext:void 0,$=mt(e.onWarn)?e.onWarn:UD,S=e,P=it(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,k=it(S.__numberFormatters)?S.__numberFormatters:new Map,I=it(S.__meta)?S.__meta:{};um++;const O={version:t,cid:um,locale:r,fallbackLocale:n,messages:o,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:d,fallbackFormat:f,unresolving:h,postTranslation:p,processor:b,warnHtmlMessage:w,escapeParameter:g,messageCompiler:m,messageResolver:_,localeFallbacker:x,fallbackContext:C,onWarn:$,__meta:I};return O.datetimeFormats=i,O.numberFormats=s,O.__datetimeFormatters=P,O.__numberFormatters=k,O}function Wf(e,t,r,n,o){const{missing:i,onWarn:s}=e;if(i!==null){const a=i(e,r,t,o);return fe(a)?a:t}else return t}function ps(e,t,r){const n=e;n.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}const Wz=e=>e;let dm=Object.create(null);function Uz(e,t={}){{const n=(t.onCacheKey||Wz)(e),o=dm[n];if(o)return o;let i=!1;const s=t.onError||qD;t.onError=c=>{i=!0,s(c)};const{code:a}=hz(e,t),l=new Function(`return ${a}`)();return i?l:dm[n]=l}}let Rx=We.__EXTEND_POINT__;const yu=()=>++Rx,li={INVALID_ARGUMENT:Rx,INVALID_DATE_ARGUMENT:yu(),INVALID_ISO_DATE_ARGUMENT:yu(),__EXTEND_POINT__:yu()};function ci(e){return Hc(e,null,void 0)}const fm=()=>"",Ao=e=>mt(e);function hm(e,...t){const{fallbackFormat:r,postTranslation:n,unresolving:o,messageCompiler:i,fallbackLocale:s,messages:a}=e,[l,c]=bd(...t),u=Fe(c.missingWarn)?c.missingWarn:e.missingWarn,d=Fe(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,f=Fe(c.escapeParameter)?c.escapeParameter:e.escapeParameter,h=!!c.resolvedMessage,p=fe(c.default)||Fe(c.default)?Fe(c.default)?i?l:()=>l:c.default:r?i?l:()=>l:"",b=r||p!=="",w=fe(c.locale)?c.locale:e.locale;f&&Vz(c);let[g,m,_]=h?[l,w,a[w]||{}]:Ox(e,l,w,s,d,u),x=g,C=l;if(!h&&!(fe(x)||Ao(x))&&b&&(x=p,C=x),!h&&(!(fe(x)||Ao(x))||!fe(m)))return o?Dc:l;let $=!1;const S=()=>{$=!0},P=Ao(x)?x:Ax(e,l,m,x,C,S);if($)return x;const k=Gz(e,m,_,c),I=kz(k),O=Kz(e,P,I);return n?n(O,l):O}function Vz(e){ot(e.list)?e.list=e.list.map(t=>fe(t)?rm(t):t):it(e.named)&&Object.keys(e.named).forEach(t=>{fe(e.named[t])&&(e.named[t]=rm(e.named[t]))})}function Ox(e,t,r,n,o,i){const{messages:s,onWarn:a,messageResolver:l,localeFallbacker:c}=e,u=c(e,n,r);let d={},f,h=null;const p="translate";for(let b=0;b<u.length&&(f=u[b],d=s[f]||{},(h=l(d,t))===null&&(h=d[t]),!(fe(h)||mt(h)));b++){const w=Wf(e,t,f,i,p);w!==t&&(h=w)}return[h,f,d]}function Ax(e,t,r,n,o,i){const{messageCompiler:s,warnHtmlMessage:a}=e;if(Ao(n)){const c=n;return c.locale=c.locale||r,c.key=c.key||t,c}if(s==null){const c=()=>n;return c.locale=r,c.key=t,c}const l=s(n,qz(e,r,o,n,a,i));return l.locale=r,l.key=t,l.source=n,l}function Kz(e,t,r){return t(r)}function bd(...e){const[t,r,n]=e,o={};if(!fe(t)&&!$t(t)&&!Ao(t))throw ci(li.INVALID_ARGUMENT);const i=$t(t)?String(t):(Ao(t),t);return $t(r)?o.plural=r:fe(r)?o.default=r:Le(r)&&!Mc(r)?o.named=r:ot(r)&&(o.list=r),$t(n)?o.plural=n:fe(n)?o.default=n:Le(n)&&Lt(o,n),[i,o]}function qz(e,t,r,n,o,i){return{warnHtmlMessage:o,onError:s=>{throw i&&i(s),s},onCacheKey:s=>ND(t,r,s)}}function Gz(e,t,r,n){const{modifiers:o,pluralRules:i,messageResolver:s,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=e,f={locale:t,modifiers:o,pluralRules:i,messages:h=>{let p=s(r,h);if(p==null&&u){const[,,b]=Ox(u,h,t,a,l,c);p=s(b,h)}if(fe(p)){let b=!1;const g=Ax(e,h,t,p,h,()=>{b=!0});return b?fm:g}else return Ao(p)?p:fm}};return e.processor&&(f.processor=e.processor),n.list&&(f.list=n.list),n.named&&(f.named=n.named),$t(n.plural)&&(f.pluralIndex=n.plural),f}function pm(e,...t){const{datetimeFormats:r,unresolving:n,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:a}=e,[l,c,u,d]=vd(...t),f=Fe(u.missingWarn)?u.missingWarn:e.missingWarn;Fe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const h=!!u.part,p=fe(u.locale)?u.locale:e.locale,b=s(e,o,p);if(!fe(l)||l==="")return new Intl.DateTimeFormat(p,d).format(c);let w={},g,m=null;const _="datetime format";for(let $=0;$<b.length&&(g=b[$],w=r[g]||{},m=w[l],!Le(m));$++)Wf(e,l,g,f,_);if(!Le(m)||!fe(g))return n?Dc:l;let x=`${g}__${l}`;Mc(d)||(x=`${x}__${JSON.stringify(d)}`);let C=a.get(x);return C||(C=new Intl.DateTimeFormat(g,Lt({},m,d)),a.set(x,C)),h?C.formatToParts(c):C.format(c)}const Bx=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function vd(...e){const[t,r,n,o]=e,i={};let s={},a;if(fe(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw ci(li.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw ci(li.INVALID_ISO_DATE_ARGUMENT)}}else if(WD(t)){if(isNaN(t.getTime()))throw ci(li.INVALID_DATE_ARGUMENT);a=t}else if($t(t))a=t;else throw ci(li.INVALID_ARGUMENT);return fe(r)?i.key=r:Le(r)&&Object.keys(r).forEach(l=>{Bx.includes(l)?s[l]=r[l]:i[l]=r[l]}),fe(n)?i.locale=n:Le(n)&&(s=n),Le(o)&&(s=o),[i.key||"",a,i,s]}function gm(e,t,r){const n=e;for(const o in r){const i=`${t}__${o}`;!n.__datetimeFormatters.has(i)||n.__datetimeFormatters.delete(i)}}function mm(e,...t){const{numberFormats:r,unresolving:n,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:a}=e,[l,c,u,d]=yd(...t),f=Fe(u.missingWarn)?u.missingWarn:e.missingWarn;Fe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const h=!!u.part,p=fe(u.locale)?u.locale:e.locale,b=s(e,o,p);if(!fe(l)||l==="")return new Intl.NumberFormat(p,d).format(c);let w={},g,m=null;const _="number format";for(let $=0;$<b.length&&(g=b[$],w=r[g]||{},m=w[l],!Le(m));$++)Wf(e,l,g,f,_);if(!Le(m)||!fe(g))return n?Dc:l;let x=`${g}__${l}`;Mc(d)||(x=`${x}__${JSON.stringify(d)}`);let C=a.get(x);return C||(C=new Intl.NumberFormat(g,Lt({},m,d)),a.set(x,C)),h?C.formatToParts(c):C.format(c)}const Mx=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function yd(...e){const[t,r,n,o]=e,i={};let s={};if(!$t(t))throw ci(li.INVALID_ARGUMENT);const a=t;return fe(r)?i.key=r:Le(r)&&Object.keys(r).forEach(l=>{Mx.includes(l)?s[l]=r[l]:i[l]=r[l]}),fe(n)?i.locale=n:Le(n)&&(s=n),Le(o)&&(s=o),[i.key||"",a,i,s]}function bm(e,t,r){const n=e;for(const o in r){const i=`${t}__${o}`;!n.__numberFormatters.has(i)||n.__numberFormatters.delete(i)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Xz="9.2.2";Oz.__EXTEND_POINT__;let Hx=We.__EXTEND_POINT__;const qt=()=>++Hx,kt={UNEXPECTED_RETURN_TYPE:Hx,INVALID_ARGUMENT:qt(),MUST_BE_CALL_SETUP_TOP:qt(),NOT_INSLALLED:qt(),NOT_AVAILABLE_IN_LEGACY_MODE:qt(),REQUIRED_VALUE:qt(),INVALID_VALUE:qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:qt(),NOT_INSLALLED_WITH_PROVIDE:qt(),UNEXPECTED_ERROR:qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:qt(),BRIDGE_SUPPORT_VUE_2_ONLY:qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:qt(),__EXTEND_POINT__:qt()};function Dt(e,...t){return Hc(e,null,void 0)}const xd=lo("__transrateVNode"),Cd=lo("__datetimeParts"),wd=lo("__numberParts"),Dx=lo("__setPluralRules");lo("__intlifyMeta");const zx=lo("__injectWithOption");function Sd(e){if(!it(e))return e;for(const t in e)if(!!Ff(e,t))if(!t.includes("."))it(e[t])&&Sd(e[t]);else{const r=t.split("."),n=r.length-1;let o=e;for(let i=0;i<n;i++)r[i]in o||(o[r[i]]={}),o=o[r[i]];o[r[n]]=e[t],delete e[t],it(o[r[n]])&&Sd(o[r[n]])}return e}function zc(e,t){const{messages:r,__i18n:n,messageResolver:o,flatJson:i}=t,s=Le(r)?r:ot(n)?{}:{[e]:{}};if(ot(n)&&n.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(s[l]=s[l]||{},Hs(c,s[l])):Hs(c,s)}else fe(a)&&Hs(JSON.parse(a),s)}),o==null&&i)for(const a in s)Ff(s,a)&&Sd(s[a]);return s}const sl=e=>!it(e)||ot(e);function Hs(e,t){if(sl(e)||sl(t))throw Dt(kt.INVALID_VALUE);for(const r in e)Ff(e,r)&&(sl(e[r])||sl(t[r])?t[r]=e[r]:Hs(e[r],t[r]))}function Yz(e){return e.type}function Fx(e,t,r){let n=it(t.messages)?t.messages:{};"__i18nGlobal"in r&&(n=zc(e.locale.value,{messages:n,__i18n:r.__i18nGlobal}));const o=Object.keys(n);o.length&&o.forEach(i=>{e.mergeLocaleMessage(i,n[i])});{if(it(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(it(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function vm(e){return Ue(Li,null,e,0)}let ym=0;function xm(e){return(t,r,n,o)=>e(r,n,zt()||void 0,o)}function Uf(e={},t){const{__root:r}=e,n=r===void 0;let o=Fe(e.inheritLocale)?e.inheritLocale:!0;const i=W(r&&o?r.locale.value:fe(e.locale)?e.locale:Ta),s=W(r&&o?r.fallbackLocale.value:fe(e.fallbackLocale)||ot(e.fallbackLocale)||Le(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),a=W(zc(i.value,e)),l=W(Le(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),c=W(Le(e.numberFormats)?e.numberFormats:{[i.value]:{}});let u=r?r.missingWarn:Fe(e.missingWarn)||no(e.missingWarn)?e.missingWarn:!0,d=r?r.fallbackWarn:Fe(e.fallbackWarn)||no(e.fallbackWarn)?e.fallbackWarn:!0,f=r?r.fallbackRoot:Fe(e.fallbackRoot)?e.fallbackRoot:!0,h=!!e.fallbackFormat,p=mt(e.missing)?e.missing:null,b=mt(e.missing)?xm(e.missing):null,w=mt(e.postTranslation)?e.postTranslation:null,g=r?r.warnHtmlMessage:Fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,m=!!e.escapeParameter;const _=r?r.modifiers:Le(e.modifiers)?e.modifiers:{};let x=e.pluralRules||r&&r.pluralRules,C;C=(()=>{const M={version:Xz,locale:i.value,fallbackLocale:s.value,messages:a.value,modifiers:_,pluralRules:x,missing:b===null?void 0:b,missingWarn:u,fallbackWarn:d,fallbackFormat:h,unresolving:!0,postTranslation:w===null?void 0:w,warnHtmlMessage:g,escapeParameter:m,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return M.datetimeFormats=l.value,M.numberFormats=c.value,M.__datetimeFormatters=Le(C)?C.__datetimeFormatters:void 0,M.__numberFormatters=Le(C)?C.__numberFormatters:void 0,jz(M)})(),ps(C,i.value,s.value);function S(){return[i.value,s.value,a.value,l.value,c.value]}const P=q({get:()=>i.value,set:M=>{i.value=M,C.locale=i.value}}),k=q({get:()=>s.value,set:M=>{s.value=M,C.fallbackLocale=s.value,ps(C,i.value,M)}}),I=q(()=>a.value),O=q(()=>l.value),R=q(()=>c.value);function H(){return mt(w)?w:null}function B(M){w=M,C.postTranslation=M}function Z(){return p}function G(M){M!==null&&(b=xm(M)),p=M,C.missing=b}const J=(M,z,ce,pe,Pe,He)=>{S();let Oe;if(Oe=M(C),$t(Oe)&&Oe===Dc){const[lt,Rt]=z();return r&&f?pe(r):Pe(lt)}else{if(He(Oe))return Oe;throw Dt(kt.UNEXPECTED_RETURN_TYPE)}};function se(...M){return J(z=>Reflect.apply(hm,null,[z,...M]),()=>bd(...M),"translate",z=>Reflect.apply(z.t,z,[...M]),z=>z,z=>fe(z))}function ye(...M){const[z,ce,pe]=M;if(pe&&!it(pe))throw Dt(kt.INVALID_ARGUMENT);return se(z,ce,Lt({resolvedMessage:!0},pe||{}))}function ke(...M){return J(z=>Reflect.apply(pm,null,[z,...M]),()=>vd(...M),"datetime format",z=>Reflect.apply(z.d,z,[...M]),()=>lm,z=>fe(z))}function Te(...M){return J(z=>Reflect.apply(mm,null,[z,...M]),()=>yd(...M),"number format",z=>Reflect.apply(z.n,z,[...M]),()=>lm,z=>fe(z))}function Ae(M){return M.map(z=>fe(z)||$t(z)||Fe(z)?vm(String(z)):z)}const Ve={normalize:Ae,interpolate:M=>M,type:"vnode"};function j(...M){return J(z=>{let ce;const pe=z;try{pe.processor=Ve,ce=Reflect.apply(hm,null,[pe,...M])}finally{pe.processor=null}return ce},()=>bd(...M),"translate",z=>z[xd](...M),z=>[vm(z)],z=>ot(z))}function Q(...M){return J(z=>Reflect.apply(mm,null,[z,...M]),()=>yd(...M),"number format",z=>z[wd](...M),()=>[],z=>fe(z)||ot(z))}function te(...M){return J(z=>Reflect.apply(pm,null,[z,...M]),()=>vd(...M),"datetime format",z=>z[Cd](...M),()=>[],z=>fe(z)||ot(z))}function de(M){x=M,C.pluralRules=x}function ae(M,z){const ce=fe(z)?z:i.value,pe=T(ce);return C.messageResolver(pe,M)!==null}function $e(M){let z=null;const ce=Px(C,s.value,i.value);for(let pe=0;pe<ce.length;pe++){const Pe=a.value[ce[pe]]||{},He=C.messageResolver(Pe,M);if(He!=null){z=He;break}}return z}function ve(M){const z=$e(M);return z!=null?z:r?r.tm(M)||{}:{}}function T(M){return a.value[M]||{}}function v(M,z){a.value[M]=z,C.messages=a.value}function y(M,z){a.value[M]=a.value[M]||{},Hs(z,a.value[M]),C.messages=a.value}function L(M){return l.value[M]||{}}function A(M,z){l.value[M]=z,C.datetimeFormats=l.value,gm(C,M,z)}function D(M,z){l.value[M]=Lt(l.value[M]||{},z),C.datetimeFormats=l.value,gm(C,M,z)}function K(M){return c.value[M]||{}}function Y(M,z){c.value[M]=z,C.numberFormats=c.value,bm(C,M,z)}function V(M,z){c.value[M]=Lt(c.value[M]||{},z),C.numberFormats=c.value,bm(C,M,z)}ym++,r&&zD&&(tt(r.locale,M=>{o&&(i.value=M,C.locale=M,ps(C,i.value,s.value))}),tt(r.fallbackLocale,M=>{o&&(s.value=M,C.fallbackLocale=M,ps(C,i.value,s.value))}));const F={id:ym,locale:P,fallbackLocale:k,get inheritLocale(){return o},set inheritLocale(M){o=M,M&&r&&(i.value=r.locale.value,s.value=r.fallbackLocale.value,ps(C,i.value,s.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:I,get modifiers(){return _},get pluralRules(){return x||{}},get isGlobal(){return n},get missingWarn(){return u},set missingWarn(M){u=M,C.missingWarn=u},get fallbackWarn(){return d},set fallbackWarn(M){d=M,C.fallbackWarn=d},get fallbackRoot(){return f},set fallbackRoot(M){f=M},get fallbackFormat(){return h},set fallbackFormat(M){h=M,C.fallbackFormat=h},get warnHtmlMessage(){return g},set warnHtmlMessage(M){g=M,C.warnHtmlMessage=M},get escapeParameter(){return m},set escapeParameter(M){m=M,C.escapeParameter=M},t:se,getLocaleMessage:T,setLocaleMessage:v,mergeLocaleMessage:y,getPostTranslationHandler:H,setPostTranslationHandler:B,getMissingHandler:Z,setMissingHandler:G,[Dx]:de};return F.datetimeFormats=O,F.numberFormats=R,F.rt=ye,F.te=ae,F.tm=ve,F.d=ke,F.n=Te,F.getDateTimeFormat=L,F.setDateTimeFormat=A,F.mergeDateTimeFormat=D,F.getNumberFormat=K,F.setNumberFormat=Y,F.mergeNumberFormat=V,F[zx]=e.__injectWithOption,F[xd]=j,F[Cd]=te,F[wd]=Q,F}function Zz(e){const t=fe(e.locale)?e.locale:Ta,r=fe(e.fallbackLocale)||ot(e.fallbackLocale)||Le(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,n=mt(e.missing)?e.missing:void 0,o=Fe(e.silentTranslationWarn)||no(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=Fe(e.silentFallbackWarn)||no(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=Fe(e.fallbackRoot)?e.fallbackRoot:!0,a=!!e.formatFallbackMessages,l=Le(e.modifiers)?e.modifiers:{},c=e.pluralizationRules,u=mt(e.postTranslation)?e.postTranslation:void 0,d=fe(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,f=!!e.escapeParameterHtml,h=Fe(e.sync)?e.sync:!0;let p=e.messages;if(Le(e.sharedMessages)){const C=e.sharedMessages;p=Object.keys(C).reduce((S,P)=>{const k=S[P]||(S[P]={});return Lt(k,C[P]),S},p||{})}const{__i18n:b,__root:w,__injectWithOption:g}=e,m=e.datetimeFormats,_=e.numberFormats,x=e.flatJson;return{locale:t,fallbackLocale:r,messages:p,flatJson:x,datetimeFormats:m,numberFormats:_,missing:n,missingWarn:o,fallbackWarn:i,fallbackRoot:s,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:h,__i18n:b,__root:w,__injectWithOption:g}}function _d(e={},t){{const r=Uf(Zz(e)),n={id:r.id,get locale(){return r.locale.value},set locale(o){r.locale.value=o},get fallbackLocale(){return r.fallbackLocale.value},set fallbackLocale(o){r.fallbackLocale.value=o},get messages(){return r.messages.value},get datetimeFormats(){return r.datetimeFormats.value},get numberFormats(){return r.numberFormats.value},get availableLocales(){return r.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(o){},get missing(){return r.getMissingHandler()},set missing(o){r.setMissingHandler(o)},get silentTranslationWarn(){return Fe(r.missingWarn)?!r.missingWarn:r.missingWarn},set silentTranslationWarn(o){r.missingWarn=Fe(o)?!o:o},get silentFallbackWarn(){return Fe(r.fallbackWarn)?!r.fallbackWarn:r.fallbackWarn},set silentFallbackWarn(o){r.fallbackWarn=Fe(o)?!o:o},get modifiers(){return r.modifiers},get formatFallbackMessages(){return r.fallbackFormat},set formatFallbackMessages(o){r.fallbackFormat=o},get postTranslation(){return r.getPostTranslationHandler()},set postTranslation(o){r.setPostTranslationHandler(o)},get sync(){return r.inheritLocale},set sync(o){r.inheritLocale=o},get warnHtmlInMessage(){return r.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(o){r.warnHtmlMessage=o!=="off"},get escapeParameterHtml(){return r.escapeParameter},set escapeParameterHtml(o){r.escapeParameter=o},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(o){},get pluralizationRules(){return r.pluralRules||{}},__composer:r,t(...o){const[i,s,a]=o,l={};let c=null,u=null;if(!fe(i))throw Dt(kt.INVALID_ARGUMENT);const d=i;return fe(s)?l.locale=s:ot(s)?c=s:Le(s)&&(u=s),ot(a)?c=a:Le(a)&&(u=a),Reflect.apply(r.t,r,[d,c||u||{},l])},rt(...o){return Reflect.apply(r.rt,r,[...o])},tc(...o){const[i,s,a]=o,l={plural:1};let c=null,u=null;if(!fe(i))throw Dt(kt.INVALID_ARGUMENT);const d=i;return fe(s)?l.locale=s:$t(s)?l.plural=s:ot(s)?c=s:Le(s)&&(u=s),fe(a)?l.locale=a:ot(a)?c=a:Le(a)&&(u=a),Reflect.apply(r.t,r,[d,c||u||{},l])},te(o,i){return r.te(o,i)},tm(o){return r.tm(o)},getLocaleMessage(o){return r.getLocaleMessage(o)},setLocaleMessage(o,i){r.setLocaleMessage(o,i)},mergeLocaleMessage(o,i){r.mergeLocaleMessage(o,i)},d(...o){return Reflect.apply(r.d,r,[...o])},getDateTimeFormat(o){return r.getDateTimeFormat(o)},setDateTimeFormat(o,i){r.setDateTimeFormat(o,i)},mergeDateTimeFormat(o,i){r.mergeDateTimeFormat(o,i)},n(...o){return Reflect.apply(r.n,r,[...o])},getNumberFormat(o){return r.getNumberFormat(o)},setNumberFormat(o,i){r.setNumberFormat(o,i)},mergeNumberFormat(o,i){r.mergeNumberFormat(o,i)},getChoiceIndex(o,i){return-1},__onComponentInstanceCreated(o){const{componentInstanceCreatedListener:i}=e;i&&i(o,n)}};return n}}const Vf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Jz({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((n,o)=>n=[...n,...ot(o.children)?o.children:[o]],[]):t.reduce((r,n)=>{const o=e[n];return o&&(r[n]=o()),r},{})}function Nx(e){return Ge}Lt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>$t(e)||!isNaN(e)}},Vf);function Qz(e){return ot(e)&&!fe(e[0])}function jx(e,t,r,n){const{slots:o,attrs:i}=t;return()=>{const s={part:!0};let a={};e.locale&&(s.locale=e.locale),fe(e.format)?s.key=e.format:it(e.format)&&(fe(e.format.key)&&(s.key=e.format.key),a=Object.keys(e.format).reduce((f,h)=>r.includes(h)?Lt({},f,{[h]:e.format[h]}):f,{}));const l=n(e.value,s,a);let c=[s.key];ot(l)?c=l.map((f,h)=>{const p=o[f.type],b=p?p({[f.type]:f.value,index:h,parts:l}):[f.value];return Qz(b)&&(b[0].key=`${f.type}-${h}`),b}):fe(l)&&(c=[l]);const u=Lt({},i),d=fe(e.tag)||it(e.tag)?e.tag:Nx();return E(d,u,c)}}Lt({value:{type:Number,required:!0},format:{type:[String,Object]}},Vf);Lt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Vf);function eF(e,t,r){return{beforeCreate(){const n=zt();if(!n)throw Dt(kt.UNEXPECTED_ERROR);const o=this.$options;if(o.i18n){const i=o.i18n;o.__i18n&&(i.__i18n=o.__i18n),i.__root=t,this===this.$root?this.$i18n=Cm(e,i):(i.__injectWithOption=!0,this.$i18n=_d(i))}else o.__i18n?this===this.$root?this.$i18n=Cm(e,o):this.$i18n=_d({__i18n:o.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;o.__i18nGlobal&&Fx(t,o,o),e.__onComponentInstanceCreated(this.$i18n),r.__setInstance(n,this.$i18n),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,s)=>this.$i18n.te(i,s),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i)},mounted(){},unmounted(){const n=zt();if(!n)throw Dt(kt.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__deleteInstance(n),delete this.$i18n}}}function Cm(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[Dx](t.pluralizationRules||e.pluralizationRules);const r=zc(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(r).forEach(n=>e.mergeLocaleMessage(n,r[n])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n])),t.numberFormats&&Object.keys(t.numberFormats).forEach(n=>e.mergeNumberFormat(n,t.numberFormats[n])),e}const tF=lo("global-vue-i18n");function rF(e={},t){const r=Fe(e.legacy)?e.legacy:!0,n=Fe(e.globalInjection)?e.globalInjection:!0,o=r?!!e.allowComposition:!0,i=new Map,[s,a]=nF(e,r),l=lo("");function c(f){return i.get(f)||null}function u(f,h){i.set(f,h)}function d(f){i.delete(f)}{const f={get mode(){return r?"legacy":"composition"},get allowComposition(){return o},async install(h,...p){h.__VUE_I18N_SYMBOL__=l,h.provide(h.__VUE_I18N_SYMBOL__,f),!r&&n&&fF(h,f.global),r&&h.mixin(eF(a,a.__composer,f));const b=h.unmount;h.unmount=()=>{f.dispose(),b()}},get global(){return a},dispose(){s.stop()},__instances:i,__getInstance:c,__setInstance:u,__deleteInstance:d};return f}}function Kf(e={}){const t=zt();if(t==null)throw Dt(kt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw Dt(kt.NOT_INSLALLED);const r=oF(t),n=sF(r),o=Yz(t),i=iF(e,o);if(r.mode==="legacy"&&!e.__useComponent){if(!r.allowComposition)throw Dt(kt.NOT_AVAILABLE_IN_LEGACY_MODE);return cF(t,i,n,e)}if(i==="global")return Fx(n,e,o),n;if(i==="parent"){let l=aF(r,t,e.__useComponent);return l==null&&(l=n),l}const s=r;let a=s.__getInstance(t);if(a==null){const l=Lt({},e);"__i18n"in o&&(l.__i18n=o.__i18n),n&&(l.__root=n),a=Uf(l),lF(s,t),s.__setInstance(t,a)}return a}function nF(e,t,r){const n=Cw();{const o=t?n.run(()=>_d(e)):n.run(()=>Uf(e));if(o==null)throw Dt(kt.UNEXPECTED_ERROR);return[n,o]}}function oF(e){{const t=Se(e.isCE?tF:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw Dt(e.isCE?kt.NOT_INSLALLED_WITH_PROVIDE:kt.UNEXPECTED_ERROR);return t}}function iF(e,t){return Mc(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function sF(e){return e.mode==="composition"?e.global:e.global.__composer}function aF(e,t,r=!1){let n=null;const o=t.root;let i=t.parent;for(;i!=null;){const s=e;if(e.mode==="composition")n=s.__getInstance(i);else{const a=s.__getInstance(i);a!=null&&(n=a.__composer,r&&n&&!n[zx]&&(n=null))}if(n!=null||o===i)break;i=i.parent}return n}function lF(e,t,r){Et(()=>{},t),pc(()=>{e.__deleteInstance(t)},t)}function cF(e,t,r,n={}){const o=t==="local",i=Fd(null);if(o&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw Dt(kt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=Fe(n.inheritLocale)?n.inheritLocale:!0,a=W(o&&s?r.locale.value:fe(n.locale)?n.locale:Ta),l=W(o&&s?r.fallbackLocale.value:fe(n.fallbackLocale)||ot(n.fallbackLocale)||Le(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),c=W(zc(a.value,n)),u=W(Le(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),d=W(Le(n.numberFormats)?n.numberFormats:{[a.value]:{}}),f=o?r.missingWarn:Fe(n.missingWarn)||no(n.missingWarn)?n.missingWarn:!0,h=o?r.fallbackWarn:Fe(n.fallbackWarn)||no(n.fallbackWarn)?n.fallbackWarn:!0,p=o?r.fallbackRoot:Fe(n.fallbackRoot)?n.fallbackRoot:!0,b=!!n.fallbackFormat,w=mt(n.missing)?n.missing:null,g=mt(n.postTranslation)?n.postTranslation:null,m=o?r.warnHtmlMessage:Fe(n.warnHtmlMessage)?n.warnHtmlMessage:!0,_=!!n.escapeParameter,x=o?r.modifiers:Le(n.modifiers)?n.modifiers:{},C=n.pluralRules||o&&r.pluralRules;function $(){return[a.value,l.value,c.value,u.value,d.value]}const S=q({get:()=>i.value?i.value.locale.value:a.value,set:y=>{i.value&&(i.value.locale.value=y),a.value=y}}),P=q({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:y=>{i.value&&(i.value.fallbackLocale.value=y),l.value=y}}),k=q(()=>i.value?i.value.messages.value:c.value),I=q(()=>u.value),O=q(()=>d.value);function R(){return i.value?i.value.getPostTranslationHandler():g}function H(y){i.value&&i.value.setPostTranslationHandler(y)}function B(){return i.value?i.value.getMissingHandler():w}function Z(y){i.value&&i.value.setMissingHandler(y)}function G(y){return $(),y()}function J(...y){return i.value?G(()=>Reflect.apply(i.value.t,null,[...y])):G(()=>"")}function se(...y){return i.value?Reflect.apply(i.value.rt,null,[...y]):""}function ye(...y){return i.value?G(()=>Reflect.apply(i.value.d,null,[...y])):G(()=>"")}function ke(...y){return i.value?G(()=>Reflect.apply(i.value.n,null,[...y])):G(()=>"")}function Te(y){return i.value?i.value.tm(y):{}}function Ae(y,L){return i.value?i.value.te(y,L):!1}function ut(y){return i.value?i.value.getLocaleMessage(y):{}}function Ve(y,L){i.value&&(i.value.setLocaleMessage(y,L),c.value[y]=L)}function j(y,L){i.value&&i.value.mergeLocaleMessage(y,L)}function Q(y){return i.value?i.value.getDateTimeFormat(y):{}}function te(y,L){i.value&&(i.value.setDateTimeFormat(y,L),u.value[y]=L)}function de(y,L){i.value&&i.value.mergeDateTimeFormat(y,L)}function ae(y){return i.value?i.value.getNumberFormat(y):{}}function $e(y,L){i.value&&(i.value.setNumberFormat(y,L),d.value[y]=L)}function ve(y,L){i.value&&i.value.mergeNumberFormat(y,L)}const T={get id(){return i.value?i.value.id:-1},locale:S,fallbackLocale:P,messages:k,datetimeFormats:I,numberFormats:O,get inheritLocale(){return i.value?i.value.inheritLocale:s},set inheritLocale(y){i.value&&(i.value.inheritLocale=y)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(c.value)},get modifiers(){return i.value?i.value.modifiers:x},get pluralRules(){return i.value?i.value.pluralRules:C},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:f},set missingWarn(y){i.value&&(i.value.missingWarn=y)},get fallbackWarn(){return i.value?i.value.fallbackWarn:h},set fallbackWarn(y){i.value&&(i.value.missingWarn=y)},get fallbackRoot(){return i.value?i.value.fallbackRoot:p},set fallbackRoot(y){i.value&&(i.value.fallbackRoot=y)},get fallbackFormat(){return i.value?i.value.fallbackFormat:b},set fallbackFormat(y){i.value&&(i.value.fallbackFormat=y)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:m},set warnHtmlMessage(y){i.value&&(i.value.warnHtmlMessage=y)},get escapeParameter(){return i.value?i.value.escapeParameter:_},set escapeParameter(y){i.value&&(i.value.escapeParameter=y)},t:J,getPostTranslationHandler:R,setPostTranslationHandler:H,getMissingHandler:B,setMissingHandler:Z,rt:se,d:ye,n:ke,tm:Te,te:Ae,getLocaleMessage:ut,setLocaleMessage:Ve,mergeLocaleMessage:j,getDateTimeFormat:Q,setDateTimeFormat:te,mergeDateTimeFormat:de,getNumberFormat:ae,setNumberFormat:$e,mergeNumberFormat:ve};function v(y){y.locale.value=a.value,y.fallbackLocale.value=l.value,Object.keys(c.value).forEach(L=>{y.mergeLocaleMessage(L,c.value[L])}),Object.keys(u.value).forEach(L=>{y.mergeDateTimeFormat(L,u.value[L])}),Object.keys(d.value).forEach(L=>{y.mergeNumberFormat(L,d.value[L])}),y.escapeParameter=_,y.fallbackFormat=b,y.fallbackRoot=p,y.fallbackWarn=h,y.missingWarn=f,y.warnHtmlMessage=m}return oo(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw Dt(kt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const y=i.value=e.proxy.$i18n.__composer;t==="global"?(a.value=y.locale.value,l.value=y.fallbackLocale.value,c.value=y.messages.value,u.value=y.datetimeFormats.value,d.value=y.numberFormats.value):o&&v(y)}),T}const uF=["locale","fallbackLocale","availableLocales"],dF=["t","rt","d","n","tm"];function fF(e,t){const r=Object.create(null);uF.forEach(n=>{const o=Object.getOwnPropertyDescriptor(t,n);if(!o)throw Dt(kt.UNEXPECTED_ERROR);const i=vt(o.value)?{get(){return o.value.value},set(s){o.value.value=s}}:{get(){return o.get&&o.get()}};Object.defineProperty(r,n,i)}),e.config.globalProperties.$i18n=r,dF.forEach(n=>{const o=Object.getOwnPropertyDescriptor(t,n);if(!o||!o.value)throw Dt(kt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${n}`,o)})}zz(Uz);Fz(wz);Nz(Px);const Ds=["en-US","zh-CN"],hF=bF(),qf=gF({locale:hF}),pF=(...e)=>qf.global.t(...e);window.t=pF;function gF(e){const t=rF({...e,globalInjection:!0,fallbackLocale:Ds[0],messages:{}});return Wx(t,e.locale),t}function Wx(e,t){var r;e.mode==="legacy"?e.global.locale=t:e.global.locale.value=t,(r=document.querySelector("html"))==null||r.setAttribute("lang",t),mF(e,t)}function Rj(e){Ds.includes(e)&&(Wx(qf,e),localStorage.setItem("lang",e))}async function mF(e,t){const r=await DD(Object.assign({"./locales/en-US.ts":()=>Xe(()=>import("./en-US.67a26f83.js"),[],import.meta.url),"./locales/zh-CN.ts":()=>Xe(()=>import("./zh-CN.1f2a542d.js"),[],import.meta.url)}),`./locales/${t}.ts`);return e.global.setLocaleMessage(t,r.default),Ht()}function bF(){var t,r;let e=localStorage.getItem("lang");if(e){if(Ds.includes(e))return e;localStorage.removeItem("lang")}for(const n of[(t=navigator.language)!=null?t:"",...(r=navigator.languages)!=null?r:[]])for(const o of Ds)if(o.includes(n))return o;return Ds[0]}const vF={},yF=Object.freeze(Object.defineProperty({__proto__:null,default:vF},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const De=BigInt(0),ct=BigInt(1),Nn=BigInt(2),zs=BigInt(3),wm=BigInt(8),Je=Object.freeze({a:De,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:ct,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Sm=(e,t)=>(e+t/Nn)/t,al={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Je,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-ct*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=r,s=BigInt("0x100000000000000000000000000000000"),a=Sm(i*e,t),l=Sm(-n*e,t);let c=le(e-a*r-l*o,t),u=le(-a*n-l*i,t);const d=c>s,f=u>s;if(d&&(c=t-c),f&&(u=t-u),c>s||u>s)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:d,k1:c,k2neg:f,k2:u}}},Er=32,zi=32,xF=32,Kl=Er+1,ql=2*Er+1;function _m(e){const{a:t,b:r}=Je,n=le(e*e),o=le(n*e);return le(o+t*e+r)}const ll=Je.a===De;class Gf extends Error{constructor(t){super(t)}}function Em(e){if(!(e instanceof Ke))throw new TypeError("JacobianPoint expected")}class Ke{constructor(t,r,n){this.x=t,this.y=r,this.z=n}static fromAffine(t){if(!(t instanceof ze))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(ze.ZERO)?Ke.ZERO:new Ke(t.x,t.y,ct)}static toAffineBatch(t){const r=EF(t.map(n=>n.z));return t.map((n,o)=>n.toAffine(r[o]))}static normalizeZ(t){return Ke.toAffineBatch(t).map(Ke.fromAffine)}equals(t){Em(t);const{x:r,y:n,z:o}=this,{x:i,y:s,z:a}=t,l=le(o*o),c=le(a*a),u=le(r*c),d=le(i*l),f=le(le(n*a)*c),h=le(le(s*o)*l);return u===d&&f===h}negate(){return new Ke(this.x,le(-this.y),this.z)}double(){const{x:t,y:r,z:n}=this,o=le(t*t),i=le(r*r),s=le(i*i),a=t+i,l=le(Nn*(le(a*a)-o-s)),c=le(zs*o),u=le(c*c),d=le(u-Nn*l),f=le(c*(l-d)-wm*s),h=le(Nn*r*n);return new Ke(d,f,h)}add(t){Em(t);const{x:r,y:n,z:o}=this,{x:i,y:s,z:a}=t;if(i===De||s===De)return this;if(r===De||n===De)return t;const l=le(o*o),c=le(a*a),u=le(r*c),d=le(i*l),f=le(le(n*a)*c),h=le(le(s*o)*l),p=le(d-u),b=le(h-f);if(p===De)return b===De?this.double():Ke.ZERO;const w=le(p*p),g=le(p*w),m=le(u*w),_=le(b*b-g-Nn*m),x=le(b*(m-_)-f*g),C=le(o*a*p);return new Ke(_,x,C)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const r=Ke.ZERO;if(typeof t=="bigint"&&t===De)return r;let n=Pm(t);if(n===ct)return this;if(!ll){let d=r,f=this;for(;n>De;)n&ct&&(d=d.add(f)),f=f.double(),n>>=ct;return d}let{k1neg:o,k1:i,k2neg:s,k2:a}=al.splitScalar(n),l=r,c=r,u=this;for(;i>De||a>De;)i&ct&&(l=l.add(u)),a&ct&&(c=c.add(u)),u=u.double(),i>>=ct,a>>=ct;return o&&(l=l.negate()),s&&(c=c.negate()),c=new Ke(le(c.x*al.beta),c.y,c.z),l.add(c)}precomputeWindow(t){const r=ll?128/t+1:256/t+1,n=[];let o=this,i=o;for(let s=0;s<r;s++){i=o,n.push(i);for(let a=1;a<2**(t-1);a++)i=i.add(o),n.push(i);o=i.double()}return n}wNAF(t,r){!r&&this.equals(Ke.BASE)&&(r=ze.BASE);const n=r&&r._WINDOW_SIZE||1;if(256%n)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=r&&Ed.get(r);o||(o=this.precomputeWindow(n),r&&n!==1&&(o=Ke.normalizeZ(o),Ed.set(r,o)));let i=Ke.ZERO,s=Ke.BASE;const a=1+(ll?128/n:256/n),l=2**(n-1),c=BigInt(2**n-1),u=2**n,d=BigInt(n);for(let f=0;f<a;f++){const h=f*l;let p=Number(t&c);t>>=d,p>l&&(p-=u,t+=ct);const b=h,w=h+Math.abs(p)-1,g=f%2!==0,m=p<0;p===0?s=s.add(cl(g,o[b])):i=i.add(cl(m,o[w]))}return{p:i,f:s}}multiply(t,r){let n=Pm(t),o,i;if(ll){const{k1neg:s,k1:a,k2neg:l,k2:c}=al.splitScalar(n);let{p:u,f:d}=this.wNAF(a,r),{p:f,f:h}=this.wNAF(c,r);u=cl(s,u),f=cl(l,f),f=new Ke(le(f.x*al.beta),f.y,f.z),o=u.add(f),i=d.add(h)}else{const{p:s,f:a}=this.wNAF(n,r);o=s,i=a}return Ke.normalizeZ([o,i])[0]}toAffine(t){const{x:r,y:n,z:o}=this,i=this.equals(Ke.ZERO);t==null&&(t=i?wm:rs(o));const s=t,a=le(s*s),l=le(a*s),c=le(r*a),u=le(n*l),d=le(o*s);if(i)return ze.ZERO;if(d!==ct)throw new Error("invZ was invalid");return new ze(c,u)}}Ke.BASE=new Ke(Je.Gx,Je.Gy,ct);Ke.ZERO=new Ke(De,ct,De);function cl(e,t){const r=t.negate();return e?r:t}const Ed=new WeakMap;class ze{constructor(t,r){this.x=t,this.y=r}_setWindowSize(t){this._WINDOW_SIZE=t,Ed.delete(this)}hasEvenY(){return this.y%Nn===De}static fromCompressedHex(t){const r=t.length===32,n=lr(r?t:t.subarray(1));if(!_l(n))throw new Error("Point is not on curve");const o=_m(n);let i=_F(o);const s=(i&ct)===ct;r?s&&(i=le(-i)):(t[0]&1)===1!==s&&(i=le(-i));const a=new ze(n,i);return a.assertValidity(),a}static fromUncompressedHex(t){const r=lr(t.subarray(1,Er+1)),n=lr(t.subarray(Er+1,Er*2+1)),o=new ze(r,n);return o.assertValidity(),o}static fromHex(t){const r=Ur(t),n=r.length,o=r[0];if(n===Er)return this.fromCompressedHex(r);if(n===Kl&&(o===2||o===3))return this.fromCompressedHex(r);if(n===ql&&o===4)return this.fromUncompressedHex(r);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Kl} compressed bytes or ${ql} uncompressed bytes, not ${n}`)}static fromPrivateKey(t){return ze.BASE.multiply(Fo(t))}static fromSignature(t,r,n){const{r:o,s:i}=Ux(r);if(![0,1,2,3].includes(n))throw new Error("Cannot recover: invalid recovery bit");const s=Xf(Ur(t)),{n:a}=Je,l=n===2||n===3?o+a:o,c=rs(l,a),u=le(-s*c,a),d=le(i*c,a),f=n&1?"03":"02",h=ze.fromHex(f+Kn(l)),p=ze.BASE.multiplyAndAddUnsafe(h,u,d);if(!p)throw new Error("Cannot recover signature: point at infinify");return p.assertValidity(),p}toRawBytes(t=!1){return qn(this.toHex(t))}toHex(t=!1){const r=Kn(this.x);return t?`${this.hasEvenY()?"02":"03"}${r}`:`04${r}${Kn(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:r,y:n}=this;if(!_l(r)||!_l(n))throw new Error(t);const o=le(n*n),i=_m(r);if(le(o-i)!==De)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new ze(this.x,le(-this.y))}double(){return Ke.fromAffine(this).double().toAffine()}add(t){return Ke.fromAffine(this).add(Ke.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Ke.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,r,n){const o=Ke.fromAffine(this),i=r===De||r===ct||this!==ze.BASE?o.multiplyUnsafe(r):o.multiply(r),s=Ke.fromAffine(t).multiplyUnsafe(n),a=i.add(s);return a.equals(Ke.ZERO)?void 0:a.toAffine()}}ze.BASE=new ze(Je.Gx,Je.Gy);ze.ZERO=new ze(De,De);function Tm(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function $m(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Fi(e)}`);const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(r[0]===0&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:lr(r),left:e.subarray(t+2)}}function CF(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Fi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=$m(e.subarray(2)),{data:n,left:o}=$m(r);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Fi(o)}`);return{r:t,s:n}}class ln{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromCompact(t){const r=t instanceof Uint8Array,n="Signature.fromCompact";if(typeof t!="string"&&!r)throw new TypeError(`${n}: Expected string or Uint8Array`);const o=r?Fi(t):t;if(o.length!==128)throw new Error(`${n}: Expected 64-byte hex`);return new ln(Gl(o.slice(0,64)),Gl(o.slice(64,128)))}static fromDER(t){const r=t instanceof Uint8Array;if(typeof t!="string"&&!r)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:n,s:o}=CF(r?t:qn(t));return new ln(n,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:r}=this;if(!ji(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!ji(r))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Je.n>>ct;return this.s>t}normalizeS(){return this.hasHighS()?new ln(this.r,le(-this.s,Je.n)):this}toDERRawBytes(){return qn(this.toDERHex())}toDERHex(){const t=Tm(gs(this.s)),r=Tm(gs(this.r)),n=t.length/2,o=r.length/2,i=gs(n),s=gs(o);return`30${gs(o+n+4)}02${s}${r}02${i}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return qn(this.toCompactHex())}toCompactHex(){return Kn(this.r)+Kn(this.s)}}function zn(...e){if(!e.every(n=>n instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((n,o)=>n+o.length,0),r=new Uint8Array(t);for(let n=0,o=0;n<e.length;n++){const i=e[n];r.set(i,o),o+=i.length}return r}const wF=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Fi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=wF[e[r]];return t}const SF=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Kn(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(De<=e&&e<SF))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Ni(e){const t=qn(Kn(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function gs(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function Gl(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function qn(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const n=r*2,o=e.slice(n,n+2),i=Number.parseInt(o,16);if(Number.isNaN(i)||i<0)throw new Error("Invalid byte sequence");t[r]=i}return t}function lr(e){return Gl(Fi(e))}function Ur(e){return e instanceof Uint8Array?Uint8Array.from(e):qn(e)}function Pm(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&ji(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function le(e,t=Je.P){const r=e%t;return r>=De?r:t+r}function hr(e,t){const{P:r}=Je;let n=e;for(;t-- >De;)n*=n,n%=r;return n}function _F(e){const{P:t}=Je,r=BigInt(6),n=BigInt(11),o=BigInt(22),i=BigInt(23),s=BigInt(44),a=BigInt(88),l=e*e*e%t,c=l*l*e%t,u=hr(c,zs)*c%t,d=hr(u,zs)*c%t,f=hr(d,Nn)*l%t,h=hr(f,n)*f%t,p=hr(h,o)*h%t,b=hr(p,s)*p%t,w=hr(b,a)*b%t,g=hr(w,s)*p%t,m=hr(g,zs)*c%t,_=hr(m,i)*h%t,x=hr(_,r)*l%t,C=hr(x,Nn);if(C*C%t!==e)throw new Error("Cannot find square root");return C}function rs(e,t=Je.P){if(e===De||t<=De)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=le(e,t),n=t,o=De,i=ct;for(;r!==De;){const a=n/r,l=n%r,c=o-i*a;n=r,r=l,o=i,i=c}if(n!==ct)throw new Error("invert: does not exist");return le(o,t)}function EF(e,t=Je.P){const r=new Array(e.length),n=e.reduce((i,s,a)=>s===De?i:(r[a]=i,le(i*s,t)),ct),o=rs(n,t);return e.reduceRight((i,s,a)=>s===De?i:(r[a]=le(i*r[a],t),le(i*s,t)),o),r}function TF(e){const t=e.length*8-zi*8,r=lr(e);return t>0?r>>BigInt(t):r}function Xf(e,t=!1){const r=TF(e);if(t)return r;const{n}=Je;return r>=n?r-n:r}let _i,Fs;class $F{constructor(t,r){if(this.hashLen=t,this.qByteLen=r,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof r!="number"||r<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Re.hmacSha256(this.k,...t)}hmacSync(...t){return Fs(this.k,...t)}checkSync(){if(typeof Fs!="function")throw new Gf("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const n=this.v.slice();r.push(n),t+=this.v.length}return zn(...r)}generateSync(){this.checkSync(),this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const n=this.v.slice();r.push(n),t+=this.v.length}return zn(...r)}}function ji(e){return De<e&&e<Je.n}function _l(e){return De<e&&e<Je.P}function PF(e,t,r,n=!0){const{n:o}=Je,i=Xf(e,!0);if(!ji(i))return;const s=rs(i,o),a=ze.BASE.multiply(i),l=le(a.x,o);if(l===De)return;const c=le(s*le(t+r*l,o),o);if(c===De)return;let u=new ln(l,c),d=(a.x===u.r?0:2)|Number(a.y&ct);return n&&u.hasHighS()&&(u=u.normalizeS(),d^=1),{sig:u,recovery:d}}function Fo(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*zi)throw new Error("Expected 32 bytes of private key");t=Gl(e)}else if(e instanceof Uint8Array){if(e.length!==zi)throw new Error("Expected 32 bytes of private key");t=lr(e)}else throw new TypeError("Expected valid private key");if(!ji(t))throw new Error("Expected private key: 0 < key < n");return t}function Yf(e){return e instanceof ze?(e.assertValidity(),e):ze.fromHex(e)}function Ux(e){if(e instanceof ln)return e.assertValidity(),e;try{return ln.fromDER(e)}catch{return ln.fromCompact(e)}}function LF(e,t=!1){return ze.fromPrivateKey(e).toRawBytes(t)}function Lm(e){const t=e instanceof Uint8Array,r=typeof e=="string",n=(t||r)&&e.length;return t?n===Kl||n===ql:r?n===Kl*2||n===ql*2:e instanceof ze}function Vx(e,t,r=!1){if(Lm(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Lm(t))throw new TypeError("getSharedSecret: second arg must be public key");const n=Yf(t);return n.assertValidity(),n.multiply(Fo(e)).toRawBytes(r)}function Kx(e){const t=e.length>Er?e.slice(0,Er):e;return lr(t)}function kF(e){const t=Kx(e),r=le(t,Je.n);return qx(r<De?t:r)}function qx(e){return Ni(e)}function IF(e,t,r){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const n=Ur(e),o=Fo(t),i=[qx(o),kF(n)];if(r!=null){r===!0&&(r=Re.randomBytes(Er));const l=Ur(r);if(l.length!==Er)throw new Error(`sign: Expected ${Er} bytes of extra data`);i.push(l)}const s=zn(...i),a=Kx(n);return{seed:s,m:a,d:o}}function RF(e,t){const{sig:r,recovery:n}=e,{der:o,recovered:i}=Object.assign({canonical:!0,der:!0},t),s=o?r.toDERRawBytes():r.toCompactRawBytes();return i?[s,n]:s}function OF(e,t,r={}){const{seed:n,m:o,d:i}=IF(e,t,r.extraEntropy),s=new $F(xF,zi);s.reseedSync(n);let a;for(;!(a=PF(s.generateSync(),o,i,r.canonical));)s.reseedSync();return RF(a,r)}const AF={strict:!0};function BF(e,t,r,n=AF){let o;try{o=Ux(e),t=Ur(t)}catch{return!1}const{r:i,s}=o;if(n.strict&&o.hasHighS())return!1;const a=Xf(t);let l;try{l=Yf(r)}catch{return!1}const{n:c}=Je,u=rs(s,c),d=le(a*u,c),f=le(i*u,c),h=ze.BASE.multiplyAndAddUnsafe(l,d,f);return h?le(h.x,c)===i:!1}function Xl(e){return le(lr(e),Je.n)}class Wi{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromHex(t){const r=Ur(t);if(r.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${r.length}`);const n=lr(r.subarray(0,32)),o=lr(r.subarray(32,64));return new Wi(n,o)}assertValidity(){const{r:t,s:r}=this;if(!_l(t)||!ji(r))throw new Error("Invalid signature")}toHex(){return Kn(this.r)+Kn(this.s)}toRawBytes(){return qn(this.toHex())}}function MF(e){return ze.fromPrivateKey(e).toRawX()}class Gx{constructor(t,r,n=Re.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=Ur(t);const{x:o,scalar:i}=this.getScalar(Fo(r));if(this.px=o,this.d=i,this.rand=Ur(n),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const r=ze.fromPrivateKey(t),n=r.hasEvenY()?t:Je.n-t;return{point:r,scalar:n,x:r.toRawX()}}initNonce(t,r){return Ni(t^lr(r))}finalizeNonce(t){const r=le(lr(t),Je.n);if(r===De)throw new Error("sign: Creation of signature failed. k is zero");const{point:n,x:o,scalar:i}=this.getScalar(r);return{R:n,rx:o,k:i}}finalizeSig(t,r,n,o){return new Wi(t.x,le(r+n*o,Je.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:r,px:n,rand:o}=this,i=Re.taggedHash,s=this.initNonce(r,await i(Dn.aux,o)),{R:a,rx:l,k:c}=this.finalizeNonce(await i(Dn.nonce,s,n,t)),u=Xl(await i(Dn.challenge,l,n,t)),d=this.finalizeSig(a,c,u,r);return await Zx(d,t,n)||this.error(),d}calcSync(){const{m:t,d:r,px:n,rand:o}=this,i=Re.taggedHashSync,s=this.initNonce(r,i(Dn.aux,o)),{R:a,rx:l,k:c}=this.finalizeNonce(i(Dn.nonce,s,n,t)),u=Xl(i(Dn.challenge,l,n,t)),d=this.finalizeSig(a,c,u,r);return Jx(d,t,n)||this.error(),d}}async function HF(e,t,r){return new Gx(e,t,r).calc()}function DF(e,t,r){return new Gx(e,t,r).calcSync()}function Xx(e,t,r){const n=e instanceof Wi,o=n?e:Wi.fromHex(e);return n&&o.assertValidity(),{...o,m:Ur(t),P:Yf(r)}}function Yx(e,t,r,n){const o=ze.BASE.multiplyAndAddUnsafe(t,Fo(r),le(-n,Je.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function Zx(e,t,r){try{const{r:n,s:o,m:i,P:s}=Xx(e,t,r),a=Xl(await Re.taggedHash(Dn.challenge,Ni(n),s.toRawX(),i));return Yx(n,s,o,a)}catch{return!1}}function Jx(e,t,r){try{const{r:n,s:o,m:i,P:s}=Xx(e,t,r),a=Xl(Re.taggedHashSync(Dn.challenge,Ni(n),s.toRawX(),i));return Yx(n,s,o,a)}catch(n){if(n instanceof Gf)throw n;return!1}}const $a={Signature:Wi,getPublicKey:MF,sign:HF,verify:Zx,signSync:DF,verifySync:Jx};ze.BASE._setWindowSize(8);const tr={node:yF,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Dn={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ul={},Re={bytesToHex:Fi,hexToBytes:qn,concatBytes:zn,mod:le,invert:rs,isValidPrivateKey(e){try{return Fo(e),!0}catch{return!1}},_bigintTo32Bytes:Ni,_normalizePrivateKey:Fo,hashToPrivateKey:e=>{e=Ur(e);const t=zi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const r=le(lr(e),Je.n-ct)+ct;return Ni(r)},randomBytes:(e=32)=>{if(tr.web)return tr.web.getRandomValues(new Uint8Array(e));if(tr.node){const{randomBytes:t}=tr.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Re.hashToPrivateKey(Re.randomBytes(zi+8)),precompute(e=8,t=ze.BASE){const r=t===ze.BASE?t:new ze(t.x,t.y);return r._setWindowSize(e),r.multiply(zs),r},sha256:async(...e)=>{if(tr.web){const t=await tr.web.subtle.digest("SHA-256",zn(...e));return new Uint8Array(t)}else if(tr.node){const{createHash:t}=tr.node,r=t("sha256");return e.forEach(n=>r.update(n)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(tr.web){const r=await tr.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),n=zn(...t),o=await tr.web.subtle.sign("HMAC",r,n);return new Uint8Array(o)}else if(tr.node){const{createHmac:r}=tr.node,n=r("sha256",e);return t.forEach(o=>n.update(o)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let r=ul[e];if(r===void 0){const n=await Re.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));r=zn(n,n),ul[e]=r}return Re.sha256(r,...t)},taggedHashSync:(e,...t)=>{if(typeof _i!="function")throw new Gf("sha256Sync is undefined, you need to set it");let r=ul[e];if(r===void 0){const n=_i(Uint8Array.from(e,o=>o.charCodeAt(0)));r=zn(n,n),ul[e]=r}return _i(r,...t)},_JacobianPoint:Ke};Object.defineProperties(Re,{sha256Sync:{configurable:!1,get(){return _i},set(e){_i||(_i=e)}},hmacSha256Sync:{configurable:!1,get(){return Fs},set(e){Fs||(Fs=e)}}});const km={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const xu=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Br=(e,t)=>e<<32-t|e>>>t,zF=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!zF)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));(()=>{const e=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(e){const{setImmediate:t}=e("timers");return()=>new Promise(r=>t(r))}}catch{}return()=>new Promise(t=>setTimeout(t,0))})();function FF(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function Zf(e){if(typeof e=="string"&&(e=FF(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Im(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function NF(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Im(e.outputLen),Im(e.blockLen)}class Td{clone(){return this._cloneInto()}}function jF(e){const t=n=>e().update(Zf(n)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function WF(e=32){if(km.web)return km.web.getRandomValues(new Uint8Array(e));throw new Error("The environment doesn't have randomBytes function")}function UF(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i),l=n?4:0,c=n?0:4;e.setUint32(t+l,s,n),e.setUint32(t+c,a,n)}class VF extends Td{constructor(t,r,n,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=xu(this.buffer)}update(t){if(this.destroyed)throw new Error("instance is destroyed");const{view:r,buffer:n,blockLen:o,finished:i}=this;if(i)throw new Error("digest() was already called");t=Zf(t);const s=t.length;for(let a=0;a<s;){const l=Math.min(o-this.pos,s-a);if(l===o){const c=xu(t);for(;o<=s-a;a+=o)this.process(c,a);continue}n.set(t.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:r,view:n,blockLen:o,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(n,0),s=0);for(let l=s;l<o;l++)r[l]=0;UF(n,o-8,BigInt(this.length*8),i),this.process(n,0);const a=xu(t);this.get().forEach((l,c)=>a.setUint32(4*c,l,i))}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:n,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%r&&t.buffer.set(n),t}}const KF=(e,t,r)=>e&t^~e&r,qF=(e,t,r)=>e&t^e&r^t&r,GF=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),$n=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pn=new Uint32Array(64);class XF extends VF{constructor(){super(64,32,8,!1),this.A=$n[0]|0,this.B=$n[1]|0,this.C=$n[2]|0,this.D=$n[3]|0,this.E=$n[4]|0,this.F=$n[5]|0,this.G=$n[6]|0,this.H=$n[7]|0}get(){const{A:t,B:r,C:n,D:o,E:i,F:s,G:a,H:l}=this;return[t,r,n,o,i,s,a,l]}set(t,r,n,o,i,s,a,l){this.A=t|0,this.B=r|0,this.C=n|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,r){for(let d=0;d<16;d++,r+=4)Pn[d]=t.getUint32(r,!1);for(let d=16;d<64;d++){const f=Pn[d-15],h=Pn[d-2],p=Br(f,7)^Br(f,18)^f>>>3,b=Br(h,17)^Br(h,19)^h>>>10;Pn[d]=b+Pn[d-7]+p+Pn[d-16]|0}let{A:n,B:o,C:i,D:s,E:a,F:l,G:c,H:u}=this;for(let d=0;d<64;d++){const f=Br(a,6)^Br(a,11)^Br(a,25),h=u+f+KF(a,l,c)+GF[d]+Pn[d]|0,b=(Br(n,2)^Br(n,13)^Br(n,22))+qF(n,o,i)|0;u=c,c=l,l=a,a=s+h|0,s=i,i=o,o=n,n=h+b|0}n=n+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(n,o,i,s,a,l,c,u)}roundClean(){Pn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Pa=jF(()=>new XF);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function uo(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function kr(...e){const t=(o,i)=>s=>o(i(s)),r=Array.from(e).reverse().reduce((o,i)=>o?t(o,i.encode):i.encode,void 0),n=e.reduce((o,i)=>o?t(o,i.decode):i.decode,void 0);return{encode:r,decode:n}}function Kr(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(r=>{if(uo(r),r<0||r>=e.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);return e[r]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);const n=e.indexOf(r);if(n===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);return n})}}}function qr(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of t)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function La(e,t="="){if(uo(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let n of r)if(typeof n!="string")throw new Error(`padding.encode: non-string input=${n}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let n=r.length;if(n*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;n>0&&r[n-1]===t;n--)if(!((n-1)*e%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,n)}}}function Qx(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Rm(e,t,r){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let n=0;const o=[],i=Array.from(e);for(i.forEach(s=>{if(uo(s),s<0||s>=t)throw new Error(`Wrong integer: ${s}`)});;){let s=0,a=!0;for(let l=n;l<i.length;l++){const c=i[l],u=t*s+c;if(!Number.isSafeInteger(u)||t*s/t!==s||u-c!==t*s)throw new Error("convertRadix: carry overflow");if(s=u%r,i[l]=Math.floor(u/r),!Number.isSafeInteger(i[l])||i[l]*r+s!==u)throw new Error("convertRadix: carry overflow");if(a)i[l]?a=!1:n=l;else continue}if(o.push(s),a)break}for(let s=0;s<e.length-1&&e[s]===0;s++)o.push(0);return o.reverse()}const eC=(e,t)=>t?eC(t,e%t):e,Yl=(e,t)=>e+(t-eC(e,t));function $d(e,t,r,n){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Yl(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Yl(t,r)}`);let o=0,i=0;const s=2**r-1,a=[];for(const l of e){if(uo(l),l>=2**t)throw new Error(`convertRadix2: invalid data word=${l} from=${t}`);if(o=o<<t|l,i+t>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);for(i+=t;i>=r;i-=r)a.push((o>>i-r&s)>>>0);o&=2**i-1}if(o=o<<r-i&s,!n&&i>=t)throw new Error("Excess padding");if(!n&&o)throw new Error(`Non-zero padding: ${o}`);return n&&i>0&&a.push(o>>>0),a}function tC(e){return uo(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Rm(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Rm(t,e,2**8))}}}function vn(e,t=!1){if(uo(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Yl(8,e)>32||Yl(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return $d(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from($d(r,e,8,t))}}}function Om(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function rC(e,t){if(uo(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const n=t(r).slice(0,e),o=new Uint8Array(r.length+e);return o.set(r),o.set(n,r.length),o},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const n=r.slice(0,-e),o=t(n).slice(0,e),i=r.slice(-e);for(let s=0;s<e;s++)if(o[s]!==i[s])throw new Error("Invalid checksum");return n}}}const YF={alphabet:Kr,chain:kr,checksum:rC,radix:tC,radix2:vn,join:qr,padding:La},nC=kr(vn(4),Kr("0123456789ABCDEF"),qr("")),oC=kr(vn(5),Kr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),La(5),qr("")),ZF=kr(vn(5),Kr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),La(5),qr("")),JF=kr(vn(5),Kr("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),qr(""),Qx(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ui=kr(vn(6),Kr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),La(6),qr("")),iC=kr(vn(6),Kr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),La(6),qr("")),Jf=e=>kr(tC(58),Kr(e),qr("")),aa=Jf("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),QF=Jf("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),e7=Jf("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Am=[0,2,3,5,6,7,9,10,11],sC={encode(e){let t="";for(let r=0;r<e.length;r+=8){const n=e.subarray(r,r+8);t+=aa.encode(n).padStart(Am[n.length],"1")}return t},decode(e){let t=[];for(let r=0;r<e.length;r+=11){const n=e.slice(r,r+11),o=Am.indexOf(n.length),i=aa.decode(n);for(let s=0;s<i.length-o;s++)if(i[s]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(i.slice(i.length-o)))}return Uint8Array.from(t)}},aC=e=>kr(rC(4,t=>e(e(t))),aa),Pd=kr(Kr("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),qr("")),Bm=[996825010,642813549,513874426,1027748829,705979059];function ms(e){const t=e>>25;let r=(e&33554431)<<5;for(let n=0;n<Bm.length;n++)(t>>n&1)===1&&(r^=Bm[n]);return r}function Mm(e,t,r=1){const n=e.length;let o=1;for(let i=0;i<n;i++){const s=e.charCodeAt(i);if(s<33||s>126)throw new Error(`Invalid prefix (${e})`);o=ms(o)^s>>5}o=ms(o);for(let i=0;i<n;i++)o=ms(o)^e.charCodeAt(i)&31;for(let i of t)o=ms(o)^i;for(let i=0;i<6;i++)o=ms(o);return o^=r,Pd.encode($d([o%2**30],30,5,!1))}function lC(e){const t=e==="bech32"?1:734539939,r=vn(5),n=r.decode,o=r.encode,i=Om(n);function s(u,d,f=90){if(typeof u!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof u}`);if(!Array.isArray(d)||d.length&&typeof d[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof d}`);const h=u.length+7+d.length;if(f!==!1&&h>f)throw new TypeError(`Length ${h} exceeds limit ${f}`);return u=u.toLowerCase(),`${u}1${Pd.encode(d)}${Mm(u,d,t)}`}function a(u,d=90){if(typeof u!="string")throw new Error(`bech32.decode input should be string, not ${typeof u}`);if(u.length<8||d!==!1&&u.length>d)throw new TypeError(`Wrong string length: ${u.length} (${u}). Expected (8..${d})`);const f=u.toLowerCase();if(u!==f&&u!==u.toUpperCase())throw new Error("String must be lowercase or uppercase");u=f;const h=u.lastIndexOf("1");if(h===0||h===-1)throw new Error('Letter "1" must be present between prefix and data only');const p=u.slice(0,h),b=u.slice(h+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");const w=Pd.decode(b).slice(0,-6),g=Mm(p,w,t);if(!b.endsWith(g))throw new Error(`Invalid checksum in ${u}: expected "${g}"`);return{prefix:p,words:w}}const l=Om(a);function c(u){const{prefix:d,words:f}=a(u,!1);return{prefix:d,words:f,bytes:n(f)}}return{encode:s,decode:a,decodeToBytes:c,decodeUnsafe:l,fromWords:n,fromWordsUnsafe:i,toWords:o}}const ur=lC("bech32"),t7=lC("bech32m"),cC={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},uC=kr(vn(4),Kr("0123456789abcdef"),qr(""),Qx(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),la={utf8:cC,hex:uC,base16:nC,base32:oC,base64:Ui,base64url:iC,base58:aa,base58xmr:sC},dC=`Invalid encoding type. Available types: ${Object.keys(la).join(", ")}`,fC=(e,t)=>{if(typeof e!="string"||!la.hasOwnProperty(e))throw new TypeError(dC);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return la[e].encode(t)},r7=fC,hC=(e,t)=>{if(!la.hasOwnProperty(e))throw new TypeError(dC);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return la[e].decode(t)},n7=hC,o7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:uo,utils:YF,base16:nC,base32:oC,base32hex:ZF,base32crockford:JF,base64:Ui,base64url:iC,base58:aa,base58flickr:QF,base58xrp:e7,base58xmr:sC,base58check:aC,bech32:ur,bech32m:t7,utf8:cC,hex:uC,bytesToString:fC,str:r7,stringToBytes:hC,bytes:n7},Symbol.toStringTag,{value:"Module"}));var Qf={};Object.defineProperty(Qf,"__esModule",{value:!0});var eh=Qf.wordlist=void 0;eh=Qf.wordlist=`abandon
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
`);var sr={},St={};Object.defineProperty(St,"__esModule",{value:!0});St.output=St.exists=St.hash=si=St.bytes=St.bool=St.number=void 0;function Zl(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}St.number=Zl;function pC(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}St.bool=pC;function th(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var si=St.bytes=th;function gC(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Zl(e.outputLen),Zl(e.blockLen)}St.hash=gC;function mC(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}St.exists=mC;function bC(e,t){th(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}St.output=bC;const i7={number:Zl,bool:pC,bytes:th,hash:gC,exists:mC,output:bC};St.default=i7;var Vi={},vC={},Pt={},Fc={};Object.defineProperty(Fc,"__esModule",{value:!0});Fc.crypto=void 0;Fc.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=Fc,r=x=>new Uint8Array(x.buffer,x.byteOffset,x.byteLength);e.u8=r;const n=x=>new Uint32Array(x.buffer,x.byteOffset,Math.floor(x.byteLength/4));e.u32=n;const o=x=>new DataView(x.buffer,x.byteOffset,x.byteLength);e.createView=o;const i=(x,C)=>x<<32-C|x>>>C;if(e.rotr=i,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const s=Array.from({length:256},(x,C)=>C.toString(16).padStart(2,"0"));function a(x){if(!(x instanceof Uint8Array))throw new Error("Uint8Array expected");let C="";for(let $=0;$<x.length;$++)C+=s[x[$]];return C}e.bytesToHex=a;function l(x){if(typeof x!="string")throw new TypeError("hexToBytes: expected string, got "+typeof x);if(x.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const C=new Uint8Array(x.length/2);for(let $=0;$<C.length;$++){const S=$*2,P=x.slice(S,S+2),k=Number.parseInt(P,16);if(Number.isNaN(k)||k<0)throw new Error("Invalid byte sequence");C[$]=k}return C}e.hexToBytes=l;const c=async()=>{};e.nextTick=c;async function u(x,C,$){let S=Date.now();for(let P=0;P<x;P++){$(P);const k=Date.now()-S;k>=0&&k<C||(await(0,e.nextTick)(),S+=k)}}e.asyncLoop=u;function d(x){if(typeof x!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof x}`);return new TextEncoder().encode(x)}e.utf8ToBytes=d;function f(x){if(typeof x=="string"&&(x=d(x)),!(x instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof x})`);return x}e.toBytes=f;function h(...x){if(!x.every(S=>S instanceof Uint8Array))throw new Error("Uint8Array list expected");if(x.length===1)return x[0];const C=x.reduce((S,P)=>S+P.length,0),$=new Uint8Array(C);for(let S=0,P=0;S<x.length;S++){const k=x[S];$.set(k,P),P+=k.length}return $}e.concatBytes=h;class p{clone(){return this._cloneInto()}}e.Hash=p;const b=x=>Object.prototype.toString.call(x)==="[object Object]"&&x.constructor===Object;function w(x,C){if(C!==void 0&&(typeof C!="object"||!b(C)))throw new TypeError("Options should be object or undefined");return Object.assign(x,C)}e.checkOpts=w;function g(x){const C=S=>x().update(f(S)).digest(),$=x();return C.outputLen=$.outputLen,C.blockLen=$.blockLen,C.create=()=>x(),C}e.wrapConstructor=g;function m(x){const C=(S,P)=>x(P).update(f(S)).digest(),$=x({});return C.outputLen=$.outputLen,C.blockLen=$.blockLen,C.create=S=>x(S),C}e.wrapConstructorWithOpts=m;function _(x=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(x));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(x).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=_})(Pt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=St,r=Pt;class n extends r.Hash{constructor(s,a){super(),this.finished=!1,this.destroyed=!1,t.default.hash(s);const l=(0,r.toBytes)(a);if(this.iHash=s.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const c=this.blockLen,u=new Uint8Array(c);u.set(l.length>c?s.create().update(l).digest():l);for(let d=0;d<u.length;d++)u[d]^=54;this.iHash.update(u),this.oHash=s.create();for(let d=0;d<u.length;d++)u[d]^=106;this.oHash.update(u),u.fill(0)}update(s){return t.default.exists(this),this.iHash.update(s),this}digestInto(s){t.default.exists(this),t.default.bytes(s,this.outputLen),this.finished=!0,this.iHash.digestInto(s),this.oHash.update(s),this.oHash.digestInto(s),this.destroy()}digest(){const s=new Uint8Array(this.oHash.outputLen);return this.digestInto(s),s}_cloneInto(s){s||(s=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:l,finished:c,destroyed:u,blockLen:d,outputLen:f}=this;return s=s,s.finished=c,s.destroyed=u,s.blockLen=d,s.outputLen=f,s.oHash=a._cloneInto(s.oHash),s.iHash=l._cloneInto(s.iHash),s}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(i,s,a)=>new n(i,s).update(a).digest();e.hmac=o,e.hmac.create=(i,s)=>new n(i,s)})(vC);Object.defineProperty(Vi,"__esModule",{value:!0});Vi.pbkdf2Async=Vi.pbkdf2=void 0;const dl=St,s7=vC,Ei=Pt;function yC(e,t,r,n){dl.default.hash(e);const o=(0,Ei.checkOpts)({dkLen:32,asyncTick:10},n),{c:i,dkLen:s,asyncTick:a}=o;if(dl.default.number(i),dl.default.number(s),dl.default.number(a),i<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=(0,Ei.toBytes)(t),c=(0,Ei.toBytes)(r),u=new Uint8Array(s),d=s7.hmac.create(e,l),f=d._cloneInto().update(c);return{c:i,dkLen:s,asyncTick:a,DK:u,PRF:d,PRFSalt:f}}function xC(e,t,r,n,o){return e.destroy(),t.destroy(),n&&n.destroy(),o.fill(0),r}function a7(e,t,r,n){const{c:o,dkLen:i,DK:s,PRF:a,PRFSalt:l}=yC(e,t,r,n);let c;const u=new Uint8Array(4),d=(0,Ei.createView)(u),f=new Uint8Array(a.outputLen);for(let h=1,p=0;p<i;h++,p+=a.outputLen){const b=s.subarray(p,p+a.outputLen);d.setInt32(0,h,!1),(c=l._cloneInto(c)).update(u).digestInto(f),b.set(f.subarray(0,b.length));for(let w=1;w<o;w++){a._cloneInto(c).update(f).digestInto(f);for(let g=0;g<b.length;g++)b[g]^=f[g]}}return xC(a,l,s,c,f)}Vi.pbkdf2=a7;async function l7(e,t,r,n){const{c:o,dkLen:i,asyncTick:s,DK:a,PRF:l,PRFSalt:c}=yC(e,t,r,n);let u;const d=new Uint8Array(4),f=(0,Ei.createView)(d),h=new Uint8Array(l.outputLen);for(let p=1,b=0;b<i;p++,b+=l.outputLen){const w=a.subarray(b,b+l.outputLen);f.setInt32(0,p,!1),(u=c._cloneInto(u)).update(d).digestInto(h),w.set(h.subarray(0,w.length)),await(0,Ei.asyncLoop)(o-1,s,g=>{l._cloneInto(u).update(h).digestInto(h);for(let m=0;m<w.length;m++)w[m]^=h[m]})}return xC(l,c,a,u,h)}Vi.pbkdf2Async=l7;var Ki={},ka={};Object.defineProperty(ka,"__esModule",{value:!0});ka.SHA2=void 0;const Cu=St,bs=Pt;function c7(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i),l=n?4:0,c=n?0:4;e.setUint32(t+l,s,n),e.setUint32(t+c,a,n)}class u7 extends bs.Hash{constructor(t,r,n,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,bs.createView)(this.buffer)}update(t){Cu.default.exists(this);const{view:r,buffer:n,blockLen:o}=this;t=(0,bs.toBytes)(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const l=(0,bs.createView)(t);for(;o<=i-s;s+=o)this.process(l,s);continue}n.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Cu.default.exists(this),Cu.default.output(t,this),this.finished=!0;const{buffer:r,view:n,blockLen:o,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(n,0),s=0);for(let d=s;d<o;d++)r[d]=0;c7(n,o-8,BigInt(this.length*8),i),this.process(n,0);const a=(0,bs.createView)(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<c;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:n,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%r&&t.buffer.set(n),t}}ka.SHA2=u7;Object.defineProperty(Ki,"__esModule",{value:!0});Ki.sha224=Nc=Ki.sha256=void 0;const d7=ka,pr=Pt,f7=(e,t,r)=>e&t^~e&r,h7=(e,t,r)=>e&t^e&r^t&r,p7=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ln=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),kn=new Uint32Array(64);class CC extends d7.SHA2{constructor(){super(64,32,8,!1),this.A=Ln[0]|0,this.B=Ln[1]|0,this.C=Ln[2]|0,this.D=Ln[3]|0,this.E=Ln[4]|0,this.F=Ln[5]|0,this.G=Ln[6]|0,this.H=Ln[7]|0}get(){const{A:t,B:r,C:n,D:o,E:i,F:s,G:a,H:l}=this;return[t,r,n,o,i,s,a,l]}set(t,r,n,o,i,s,a,l){this.A=t|0,this.B=r|0,this.C=n|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=l|0}process(t,r){for(let d=0;d<16;d++,r+=4)kn[d]=t.getUint32(r,!1);for(let d=16;d<64;d++){const f=kn[d-15],h=kn[d-2],p=(0,pr.rotr)(f,7)^(0,pr.rotr)(f,18)^f>>>3,b=(0,pr.rotr)(h,17)^(0,pr.rotr)(h,19)^h>>>10;kn[d]=b+kn[d-7]+p+kn[d-16]|0}let{A:n,B:o,C:i,D:s,E:a,F:l,G:c,H:u}=this;for(let d=0;d<64;d++){const f=(0,pr.rotr)(a,6)^(0,pr.rotr)(a,11)^(0,pr.rotr)(a,25),h=u+f+f7(a,l,c)+p7[d]+kn[d]|0,b=((0,pr.rotr)(n,2)^(0,pr.rotr)(n,13)^(0,pr.rotr)(n,22))+h7(n,o,i)|0;u=c,c=l,l=a,a=s+h|0,s=i,i=o,o=n,n=h+b|0}n=n+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(n,o,i,s,a,l,c,u)}roundClean(){kn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class g7 extends CC{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}var Nc=Ki.sha256=(0,pr.wrapConstructor)(()=>new CC);Ki.sha224=(0,pr.wrapConstructor)(()=>new g7);var gr={},wC={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),r=BigInt(32);function n(I,O=!1){return O?{h:Number(I&t),l:Number(I>>r&t)}:{h:Number(I>>r&t)|0,l:Number(I&t)|0}}e.fromBig=n;function o(I,O=!1){let R=new Uint32Array(I.length),H=new Uint32Array(I.length);for(let B=0;B<I.length;B++){const{h:Z,l:G}=n(I[B],O);[R[B],H[B]]=[Z,G]}return[R,H]}e.split=o;const i=(I,O)=>BigInt(I>>>0)<<r|BigInt(O>>>0);e.toBig=i;const s=(I,O,R)=>I>>>R,a=(I,O,R)=>I<<32-R|O>>>R,l=(I,O,R)=>I>>>R|O<<32-R,c=(I,O,R)=>I<<32-R|O>>>R,u=(I,O,R)=>I<<64-R|O>>>R-32,d=(I,O,R)=>I>>>R-32|O<<64-R,f=(I,O)=>O,h=(I,O)=>I,p=(I,O,R)=>I<<R|O>>>32-R,b=(I,O,R)=>O<<R|I>>>32-R,w=(I,O,R)=>O<<R-32|I>>>64-R,g=(I,O,R)=>I<<R-32|O>>>64-R;function m(I,O,R,H){const B=(O>>>0)+(H>>>0);return{h:I+R+(B/2**32|0)|0,l:B|0}}e.add=m;const _=(I,O,R)=>(I>>>0)+(O>>>0)+(R>>>0),x=(I,O,R,H)=>O+R+H+(I/2**32|0)|0,C=(I,O,R,H)=>(I>>>0)+(O>>>0)+(R>>>0)+(H>>>0),$=(I,O,R,H,B)=>O+R+H+B+(I/2**32|0)|0,S=(I,O,R,H,B)=>(I>>>0)+(O>>>0)+(R>>>0)+(H>>>0)+(B>>>0),P=(I,O,R,H,B,Z)=>O+R+H+B+Z+(I/2**32|0)|0,k={fromBig:n,split:o,toBig:e.toBig,shrSH:s,shrSL:a,rotrSH:l,rotrSL:c,rotrBH:u,rotrBL:d,rotr32H:f,rotr32L:h,rotlSH:p,rotlSL:b,rotlBH:w,rotlBL:g,add:m,add3L:_,add3H:x,add4L:C,add4H:$,add5H:P,add5L:S};e.default=k})(wC);Object.defineProperty(gr,"__esModule",{value:!0});gr.sha384=gr.sha512_256=gr.sha512_224=Ld=gr.sha512=gr.SHA512=void 0;const m7=ka,Ie=wC,jc=Pt,[b7,v7]=Ie.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),In=new Uint32Array(80),Rn=new Uint32Array(80);class Ia extends m7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:r,Bh:n,Bl:o,Ch:i,Cl:s,Dh:a,Dl:l,Eh:c,El:u,Fh:d,Fl:f,Gh:h,Gl:p,Hh:b,Hl:w}=this;return[t,r,n,o,i,s,a,l,c,u,d,f,h,p,b,w]}set(t,r,n,o,i,s,a,l,c,u,d,f,h,p,b,w){this.Ah=t|0,this.Al=r|0,this.Bh=n|0,this.Bl=o|0,this.Ch=i|0,this.Cl=s|0,this.Dh=a|0,this.Dl=l|0,this.Eh=c|0,this.El=u|0,this.Fh=d|0,this.Fl=f|0,this.Gh=h|0,this.Gl=p|0,this.Hh=b|0,this.Hl=w|0}process(t,r){for(let _=0;_<16;_++,r+=4)In[_]=t.getUint32(r),Rn[_]=t.getUint32(r+=4);for(let _=16;_<80;_++){const x=In[_-15]|0,C=Rn[_-15]|0,$=Ie.default.rotrSH(x,C,1)^Ie.default.rotrSH(x,C,8)^Ie.default.shrSH(x,C,7),S=Ie.default.rotrSL(x,C,1)^Ie.default.rotrSL(x,C,8)^Ie.default.shrSL(x,C,7),P=In[_-2]|0,k=Rn[_-2]|0,I=Ie.default.rotrSH(P,k,19)^Ie.default.rotrBH(P,k,61)^Ie.default.shrSH(P,k,6),O=Ie.default.rotrSL(P,k,19)^Ie.default.rotrBL(P,k,61)^Ie.default.shrSL(P,k,6),R=Ie.default.add4L(S,O,Rn[_-7],Rn[_-16]),H=Ie.default.add4H(R,$,I,In[_-7],In[_-16]);In[_]=H|0,Rn[_]=R|0}let{Ah:n,Al:o,Bh:i,Bl:s,Ch:a,Cl:l,Dh:c,Dl:u,Eh:d,El:f,Fh:h,Fl:p,Gh:b,Gl:w,Hh:g,Hl:m}=this;for(let _=0;_<80;_++){const x=Ie.default.rotrSH(d,f,14)^Ie.default.rotrSH(d,f,18)^Ie.default.rotrBH(d,f,41),C=Ie.default.rotrSL(d,f,14)^Ie.default.rotrSL(d,f,18)^Ie.default.rotrBL(d,f,41),$=d&h^~d&b,S=f&p^~f&w,P=Ie.default.add5L(m,C,S,v7[_],Rn[_]),k=Ie.default.add5H(P,g,x,$,b7[_],In[_]),I=P|0,O=Ie.default.rotrSH(n,o,28)^Ie.default.rotrBH(n,o,34)^Ie.default.rotrBH(n,o,39),R=Ie.default.rotrSL(n,o,28)^Ie.default.rotrBL(n,o,34)^Ie.default.rotrBL(n,o,39),H=n&i^n&a^i&a,B=o&s^o&l^s&l;g=b|0,m=w|0,b=h|0,w=p|0,h=d|0,p=f|0,{h:d,l:f}=Ie.default.add(c|0,u|0,k|0,I|0),c=a|0,u=l|0,a=i|0,l=s|0,i=n|0,s=o|0;const Z=Ie.default.add3L(I,R,B);n=Ie.default.add3H(Z,k,O,H),o=Z|0}({h:n,l:o}=Ie.default.add(this.Ah|0,this.Al|0,n|0,o|0)),{h:i,l:s}=Ie.default.add(this.Bh|0,this.Bl|0,i|0,s|0),{h:a,l}=Ie.default.add(this.Ch|0,this.Cl|0,a|0,l|0),{h:c,l:u}=Ie.default.add(this.Dh|0,this.Dl|0,c|0,u|0),{h:d,l:f}=Ie.default.add(this.Eh|0,this.El|0,d|0,f|0),{h,l:p}=Ie.default.add(this.Fh|0,this.Fl|0,h|0,p|0),{h:b,l:w}=Ie.default.add(this.Gh|0,this.Gl|0,b|0,w|0),{h:g,l:m}=Ie.default.add(this.Hh|0,this.Hl|0,g|0,m|0),this.set(n,o,i,s,a,l,c,u,d,f,h,p,b,w,g,m)}roundClean(){In.fill(0),Rn.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}gr.SHA512=Ia;class y7 extends Ia{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class x7 extends Ia{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class C7 extends Ia{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Ld=gr.sha512=(0,jc.wrapConstructor)(()=>new Ia);gr.sha512_224=(0,jc.wrapConstructor)(()=>new y7);gr.sha512_256=(0,jc.wrapConstructor)(()=>new x7);gr.sha384=(0,jc.wrapConstructor)(()=>new C7);const w7=K8(o7);Object.defineProperty(sr,"__esModule",{value:!0});var SC=sr.mnemonicToSeedSync=sr.mnemonicToSeed=OC=sr.validateMnemonic=sr.entropyToMnemonic=sr.mnemonicToEntropy=LC=sr.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const _C=St,EC=Vi,S7=Ki,TC=gr,_7=Pt,fl=w7,E7=e=>e[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function $C(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function rh(e){const t=$C(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:r}}function PC(e){_C.default.bytes(e,16,20,24,28,32)}function T7(e,t=128){if(_C.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return RC((0,_7.randomBytes)(t/8),e)}var LC=sr.generateMnemonic=T7;const $7=e=>{const t=8-e.length/4;return new Uint8Array([(0,S7.sha256)(e)[0]>>t<<t])};function kC(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),fl.utils.chain(fl.utils.checksum(1,$7),fl.utils.radix2(11,!0),fl.utils.alphabet(e))}function IC(e,t){const{words:r}=rh(e),n=kC(t).decode(r);return PC(n),n}sr.mnemonicToEntropy=IC;function RC(e,t){return PC(e),kC(t).encode(e).join(E7(t)?"\u3000":" ")}sr.entropyToMnemonic=RC;function P7(e,t){try{IC(e,t)}catch{return!1}return!0}var OC=sr.validateMnemonic=P7;const AC=e=>$C(`mnemonic${e}`);function L7(e,t=""){return(0,EC.pbkdf2Async)(TC.sha512,rh(e).nfkd,AC(t),{c:2048,dkLen:64})}sr.mnemonicToSeed=L7;function k7(e,t=""){return(0,EC.pbkdf2)(TC.sha512,rh(e).nfkd,AC(t),{c:2048,dkLen:64})}SC=sr.mnemonicToSeedSync=k7;function kd(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function I7(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function BC(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function R7(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");kd(e.outputLen),kd(e.blockLen)}function O7(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function A7(e,t){BC(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const $o={number:kd,bool:I7,bytes:BC,hash:R7,exists:O7,output:A7};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const wu=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),B7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!B7)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function M7(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function nh(e){if(typeof e=="string"&&(e=M7(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}class MC{clone(){return this._cloneInto()}}function H7(e){const t=n=>e().update(nh(n)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}class HC extends MC{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,$o.hash(t);const n=nh(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(n.length>o?t.create().update(n).digest():n);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return $o.exists(this),this.iHash.update(t),this}digestInto(t){$o.exists(this),$o.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:n,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=r._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Jl=(e,t,r)=>new HC(e,t).update(r).digest();Jl.create=(e,t)=>new HC(e,t);function D7(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i),l=n?4:0,c=n?0:4;e.setUint32(t+l,s,n),e.setUint32(t+c,a,n)}class z7 extends MC{constructor(t,r,n,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=wu(this.buffer)}update(t){$o.exists(this);const{view:r,buffer:n,blockLen:o}=this;t=nh(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const l=wu(t);for(;o<=i-s;s+=o)this.process(l,s);continue}n.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){$o.exists(this),$o.output(t,this),this.finished=!0;const{buffer:r,view:n,blockLen:o,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(n,0),s=0);for(let d=s;d<o;d++)r[d]=0;D7(n,o-8,BigInt(this.length*8),i),this.process(n,0);const a=wu(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<c;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:n,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%r&&t.buffer.set(n),t}}const F7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),DC=Uint8Array.from({length:16},(e,t)=>t),N7=DC.map(e=>(9*e+5)%16);let oh=[DC],ih=[N7];for(let e=0;e<4;e++)for(let t of[oh,ih])t.push(t[e].map(r=>F7[r]));const zC=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),j7=oh.map((e,t)=>e.map(r=>zC[t][r])),W7=ih.map((e,t)=>e.map(r=>zC[t][r])),U7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),V7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),hl=(e,t)=>e<<t|e>>>32-t;function Hm(e,t,r,n){return e===0?t^r^n:e===1?t&r|~t&n:e===2?(t|~r)^n:e===3?t&n|r&~n:t^(r|~n)}const pl=new Uint32Array(16);class K7 extends z7{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:r,h2:n,h3:o,h4:i}=this;return[t,r,n,o,i]}set(t,r,n,o,i){this.h0=t|0,this.h1=r|0,this.h2=n|0,this.h3=o|0,this.h4=i|0}process(t,r){for(let h=0;h<16;h++,r+=4)pl[h]=t.getUint32(r,!0);let n=this.h0|0,o=n,i=this.h1|0,s=i,a=this.h2|0,l=a,c=this.h3|0,u=c,d=this.h4|0,f=d;for(let h=0;h<5;h++){const p=4-h,b=U7[h],w=V7[h],g=oh[h],m=ih[h],_=j7[h],x=W7[h];for(let C=0;C<16;C++){const $=hl(n+Hm(h,i,a,c)+pl[g[C]]+b,_[C])+d|0;n=d,d=c,c=hl(a,10)|0,a=i,i=$}for(let C=0;C<16;C++){const $=hl(o+Hm(p,s,l,u)+pl[m[C]]+w,x[C])+f|0;o=f,f=u,u=hl(l,10)|0,l=s,s=$}}this.set(this.h1+a+u|0,this.h2+c+f|0,this.h3+d+o|0,this.h4+n+s|0,this.h0+i+l|0)}roundClean(){pl.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const q7=H7(()=>new K7);Re.hmacSha256Sync=(e,...t)=>Jl(Nc,e,Re.concatBytes(...t));const Su=aC(Nc);function Dm(e){return BigInt(`0x${Pt.bytesToHex(e)}`)}function G7(e){return Pt.hexToBytes(e.toString(16).padStart(64,"0"))}const X7=Pt.utf8ToBytes("Bitcoin seed"),_u={private:76066276,public:76067358},Eu=2147483648,Y7=e=>q7(Nc(e)),Z7=e=>Pt.createView(e).getUint32(0,!1),gl=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Pt.createView(t).setUint32(0,e,!1),t};class xo{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||_u,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Re.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Dm(t.privateKey),this.privKeyBytes=G7(this.privKey),this.pubKey=LF(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ze.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Y7(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return Z7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Su.encode(this.serialize(this.versions.private,Pt.concatBytes(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Su.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,r=_u){if(si(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const n=Jl(Ld,X7,t);return new xo({versions:r,chainCode:n.slice(32),privateKey:n.slice(0,32)})}static fromExtendedKey(t,r=_u){const n=Su.decode(t),o=Pt.createView(n),i=o.getUint32(0,!1),s={versions:r,depth:n[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:n.slice(13,45)},a=n.slice(45),l=a[0]===0;if(i!==r[l?"private":"public"])throw new Error("Version mismatch");return l?new xo({...s,privateKey:a.slice(1)}):new xo({...s,publicKey:a})}static fromJSON(t){return xo.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const r=t.replace(/^[mM]'?\//,"").split("/");let n=this;for(const o of r){const i=/^(\d+)('?)$/.exec(o);if(!i||i.length!==3)throw new Error(`Invalid child index: ${o}`);let s=+i[1];if(!Number.isSafeInteger(s)||s>=Eu)throw new Error("Invalid index");i[2]==="'"&&(s+=Eu),n=n.deriveChild(s)}return n}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=gl(t);if(t>=Eu){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");r=Pt.concatBytes(new Uint8Array([0]),a,r)}else r=Pt.concatBytes(this.pubKey,r);const n=Jl(Ld,this.chainCode,r),o=Dm(n.slice(0,32)),i=n.slice(32);if(!Re.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const s={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const a=Re.mod(this.privKey+o,Je.n);if(!Re.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");s.privateKey=a}else{const a=ze.fromHex(this.pubKey).add(ze.fromPrivateKey(o));if(a.equals(ze.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");s.publicKey=a.toRawBytes(!0)}return new xo(s)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return si(t,32),OF(t,this.privKey,{canonical:!0,der:!1})}verify(t,r){if(si(t,32),si(r,64),!this.publicKey)throw new Error("No publicKey set!");let n;try{n=ln.fromCompact(r)}catch{return!1}return BF(n,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,r){if(!this.chainCode)throw new Error("No chainCode set");return si(r,33),Pt.concatBytes(gl(t),new Uint8Array([this.depth]),gl(this.parentFingerprint),gl(this.index),this.chainCode,r)}}class FC extends Td{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,NF(t);const n=Zf(r);if(this.iHash=t.create(),!(this.iHash instanceof Td))throw new TypeError("Expected instance of class which extends utils.Hash");const o=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const i=new Uint8Array(o);i.set(n.length>this.iHash.blockLen?t.create().update(n).digest():n);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(t),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:n,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=r._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const NC=(e,t,r)=>new FC(e,t).update(r).digest();NC.create=(e,t)=>new FC(e,t);var J7=Object.defineProperty,fo=(e,t)=>{for(var r in t)J7(e,r,{get:t[r],enumerable:!0})};function Q7(){return Re.bytesToHex(Re.randomPrivateKey())}function jC(e){return Re.bytesToHex($a.getPublicKey(e))}var e9={};fo(e9,{insertEventIntoAscendingList:()=>n9,insertEventIntoDescendingList:()=>r9,normalizeURL:()=>t9,utf8Decoder:()=>Po,utf8Encoder:()=>hn});var Po=new TextDecoder("utf-8"),hn=new TextEncoder;function t9(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function r9(e,t){var s;let r=0,n=e.length-1,o,i=r;if(n<0)i=0;else if(t.created_at<e[n].created_at)i=n+1;else if(t.created_at>=e[r].created_at)i=r;else for(;;){if(n<=r+1){i=n;break}if(o=Math.floor(r+(n-r)/2),e[o].created_at>t.created_at)r=o;else if(e[o].created_at<t.created_at)n=o;else{i=o;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function n9(e,t){var s;let r=0,n=e.length-1,o,i=r;if(n<0)i=0;else if(t.created_at>e[n].created_at)i=n+1;else if(t.created_at<=e[r].created_at)i=r;else for(;;){if(n<=r+1){i=n;break}if(o=Math.floor(r+(n-r)/2),e[o].created_at<t.created_at)r=o;else if(e[o].created_at>t.created_at)n=o;else{i=o;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function o9(e){if(!ah(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function sh(e){let t=Pa(hn.encode(o9(e)));return Re.bytesToHex(t)}function ah(e){if(typeof e!="object"||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let n=0;n<r.length;n++)if(typeof r[n]=="object")return!1}return!0}function lh(e){return $a.verifySync(e.sig,sh(e),e.pubkey)}function i9(e,t){return Re.bytesToHex($a.signSync(sh(e),t))}var s9={};fo(s9,{getHex64:()=>ch,getInt:()=>WC,getSubscriptionId:()=>a9,matchEventId:()=>l9,matchEventKind:()=>u9,matchEventPubkey:()=>c9});function ch(e,t){let r=t.length+3,n=e.indexOf(`"${t}":`)+r,o=e.slice(n).indexOf('"')+n+1;return e.slice(o,o+64)}function WC(e,t){let r=t.length,n=e.indexOf(`"${t}":`)+r+3,o=e.slice(n),i=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,i),10)}function a9(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let r=e.slice(t+7+1).indexOf('"');if(r===-1)return null;let n=t+7+1+r,o=e.slice(n+1,80).indexOf('"');if(o===-1)return null;let i=n+1+o;return e.slice(n+1,i)}function l9(e,t){return t===ch(e,"id")}function c9(e,t){return t===ch(e,"pubkey")}function u9(e,t){return t===WC(e,"kind")}var d9={};fo(d9,{decrypt:()=>h9,encrypt:()=>f9});async function f9(e,t,r){const n=Vx(e,"02"+t),o=UC(n);let i=Uint8Array.from(WF(16)),s=hn.encode(r),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),l=await crypto.subtle.encrypt({name:"AES-CBC",iv:i},a,s),c=Ui.encode(new Uint8Array(l)),u=Ui.encode(new Uint8Array(i.buffer));return`${c}?iv=${u}`}async function h9(e,t,r){let[n,o]=r.split("?iv="),i=Vx(e,"02"+t),s=UC(i),a=await crypto.subtle.importKey("raw",s,{name:"AES-CBC"},!1,["decrypt"]),l=Ui.decode(n),c=Ui.decode(o),u=await crypto.subtle.decrypt({name:"AES-CBC",iv:c},a,l);return Po.decode(u)}function UC(e){return e.slice(1,33)}var p9={};fo(p9,{queryProfile:()=>b9,searchDomain:()=>m9,useFetchImplementation:()=>g9});var Wc;try{Wc=fetch}catch{}function g9(e){Wc=e}async function m9(e,t=""){try{return(await(await Wc(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function b9(e){var s,a;let[t,r]=e.split("@");if(r||(r=t,t="_"),!t.match(/^[A-Za-z0-9-_]+$/))return null;let n;try{n=await(await Wc(`https://${r}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!((s=n==null?void 0:n.names)!=null&&s[t]))return null;let o=n.names[t],i=((a=n.relays)==null?void 0:a[o])||[];return{pubkey:o,relays:i}}var v9={};fo(v9,{generateSeedWords:()=>x9,privateKeyFromSeedWords:()=>y9,validateWords:()=>C9});function y9(e,t){let n=xo.fromMasterSeed(SC(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!n)throw new Error("could not derive private key");return Re.bytesToHex(n)}function x9(){return LC(eh)}function C9(e){return OC(e,eh)}var Uc={};fo(Uc,{decode:()=>w9,naddrEncode:()=>P9,neventEncode:()=>$9,noteEncode:()=>E9,nprofileEncode:()=>T9,npubEncode:()=>_9,nsecEncode:()=>S9});var Ra=5e3;function w9(e){var o,i,s,a,l;let{prefix:t,words:r}=ur.decode(e,Ra),n=new Uint8Array(ur.fromWords(r));switch(t){case"nprofile":{let c=Tu(n);if(!((o=c[0])!=null&&o[0]))throw new Error("missing TLV 0 for nprofile");if(c[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Re.bytesToHex(c[0][0]),relays:c[1]?c[1].map(u=>Po.decode(u)):[]}}}case"nevent":{let c=Tu(n);if(!((i=c[0])!=null&&i[0]))throw new Error("missing TLV 0 for nevent");if(c[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:Re.bytesToHex(c[0][0]),relays:c[1]?c[1].map(u=>Po.decode(u)):[]}}}case"naddr":{let c=Tu(n);if(!((s=c[0])!=null&&s[0]))throw new Error("missing TLV 0 for naddr");if(!((a=c[2])!=null&&a[0]))throw new Error("missing TLV 2 for naddr");if(c[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!((l=c[3])!=null&&l[0]))throw new Error("missing TLV 3 for naddr");if(c[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Po.decode(c[0][0]),pubkey:Re.bytesToHex(c[2][0]),kind:parseInt(Re.bytesToHex(c[3][0]),16),relays:c[1]?c[1].map(u=>Po.decode(u)):[]}}}case"nsec":case"npub":case"note":return{type:t,data:Re.bytesToHex(n)};default:throw new Error(`unknown prefix ${t}`)}}function Tu(e){let t={},r=e;for(;r.length>0;){let n=r[0],o=r[1],i=r.slice(2,2+o);r=r.slice(2+o),!(i.length<o)&&(t[n]=t[n]||[],t[n].push(i))}return t}function S9(e){return uh("nsec",e)}function _9(e){return uh("npub",e)}function E9(e){return uh("note",e)}function uh(e,t){let r=Re.hexToBytes(t),n=ur.toWords(r);return ur.encode(e,n,Ra)}function T9(e){let t=dh({0:[Re.hexToBytes(e.pubkey)],1:(e.relays||[]).map(n=>hn.encode(n))}),r=ur.toWords(t);return ur.encode("nprofile",r,Ra)}function $9(e){let t=dh({0:[Re.hexToBytes(e.id)],1:(e.relays||[]).map(n=>hn.encode(n))}),r=ur.toWords(t);return ur.encode("nevent",r,Ra)}function P9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let r=dh({0:[hn.encode(e.identifier)],1:(e.relays||[]).map(o=>hn.encode(o)),2:[Re.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),n=ur.toWords(r);return ur.encode("naddr",n,Ra)}function dh(e){let t=[];return Object.entries(e).forEach(([r,n])=>{n.forEach(o=>{let i=new Uint8Array(o.length+2);i.set([parseInt(r)],0),i.set([o.length],1),i.set(o,2),t.push(i)})}),Re.concatBytes(...t)}var L9={};fo(L9,{createDelegation:()=>k9,getDelegator:()=>I9});function k9(e,t){let r=[];(t.kind||-1)>=0&&r.push(`kind=${t.kind}`),t.until&&r.push(`created_at<${t.until}`),t.since&&r.push(`created_at>${t.since}`);let n=r.join("&");if(n==="")throw new Error("refusing to create a delegation without any conditions");let o=Pa(hn.encode(`nostr:delegation:${t.pubkey}:${n}`)),i=Re.bytesToHex($a.signSync(o,e));return{from:jC(e),to:t.pubkey,cond:n,sig:i}}function I9(e){let t=e.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!t)return null;let r=t[1],n=t[2],o=t[3],i=n.split("&");for(let a=0;a<i.length;a++){let[l,c,u]=i[a].split(/\b/);if(!(l==="kind"&&c==="="&&e.kind===parseInt(u))){if(l==="created_at"&&c==="<"&&e.created_at<parseInt(u))continue;if(l==="created_at"&&c===">"&&e.created_at>parseInt(u))continue;return null}}let s=Pa(hn.encode(`nostr:delegation:${e.pubkey}:${n}`));return $a.verifySync(o,s,r)?r:null}var R9={};fo(R9,{getZapEndpoint:()=>A9,makeZapReceipt:()=>H9,makeZapRequest:()=>B9,useFetchImplementation:()=>O9,validateZapRequest:()=>M9});var fh;try{fh=fetch}catch{}function O9(e){fh=e}async function A9(e){try{let t="",{lud06:r,lud16:n}=JSON.parse(e.content);if(r){let{words:s}=ur.decode(r,1e3),a=ur.fromWords(s);t=Po.decode(a)}else if(n){let[s,a]=n.split("@");t=`https://${a}/.well-known/lnurlp/${s}`}else return null;let i=await(await fh(t)).json();if(i.allowsNostr&&i.nostrPubkey)return i.callback}catch{}return null}function B9({profile:e,event:t,amount:r,relays:n,comment:o=""}){if(!r)throw new Error("amount not given");if(!e)throw new Error("profile not given");let i={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",r.toString()],["relays",...n]]};return t&&i.tags.push(["e",t]),i}function M9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!ah(t))return"Zap request is not a valid Nostr event.";if(!lh(t))return"Invalid signature on zap request.";let r=t.tags.find(([i,s])=>i==="p"&&s);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let n=t.tags.find(([i,s])=>i==="e"&&s);return n&&!n[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([i,s])=>i==="relays"&&s)?null:"Zap request doesn't have a 'relays' tag."}function H9({zapRequest:e,preimage:t,bolt11:r,paidAt:n}){let i=JSON.parse(e).tags.filter(([a])=>a==="e"||a==="p"||a==="a"),s={kind:9735,created_at:Math.round(n.getTime()/1e3),content:"",tags:[...i,["bolt11",r],["description",e]]};return t&&s.tags.push(["preimage",t]),s}Re.hmacSha256Sync=(e,...t)=>NC(Pa,e,Re.concatBytes(...t));Re.sha256Sync=(...e)=>Pa(Re.concatBytes(...e));function D9(e){var t,r;return(r=e==null?void 0:e.targetEventBeltline)!=null?r:((t=e==null?void 0:e.form)!=null?t:Vn).createChild(Object.assign({},e))}function Oj(e){var t,r;return(r=e==null?void 0:e.targetEventBeltline)!=null?r:((t=e==null?void 0:e.form)!=null?t:Vn).createChild(Object.assign({slef:Zt({})},e))}var zr=(e=>(e[e.NEXT=0]="NEXT",e[e.BREAK=1]="BREAK",e[e.CONTINUE=2]="CONTINUE",e[e.PREVENT_CIRCULAR_REFERENCES=3]="PREVENT_CIRCULAR_REFERENCES",e))(zr||{});function Aj(e){return e}function VC(){return z9}function z9(e){return e}function KC(){return{initialization(){this.beltline.onAfterReq(({subId:e})=>{this.beltline.getRelayEmiter().once("eose",e,()=>{this.beltline.closeReqBySubid(e)})})}}}function F9(e){return{push(t,r){return N9(t,e,r.length)?zr.NEXT:zr.BREAK}}}function N9(e,t,r){return t.length===0?!0:t.some(n=>j9(e,n,r))}function j9(e,t,r){const{ids:n,kinds:o,authors:i,since:s,until:a,limit:l,search:c}=t;return n&&!n.includes(e.id)||o&&!o.includes(e.kind)||i&&!i.includes(e.pubkey)||s&&!(e.created_at>=s)||a&&!(e.created_at<=a)||l&&!(r<l)?!1:W9(t,e.tags)?!(c&&!JSON.stringify(e).toLowerCase().includes(c.toLowerCase())):!1}function W9(e,t){for(let r in e)if(r[0]==="#"){let n=r.slice(1),o=e[`#${n}`];if(o&&!t.find(([i,s])=>i===n&&o.includes(s)))return!1}return!0}function U9(){const e=new Zo.exports.EventEmitter;return e.setMaxListeners(1e3),{push(t,r,{lastState:n,subId:o}){const i=r[0];return i?(t.created_at>i.created_at&&(r[0]=r[0],e.emit("update",t,o)),zr.BREAK):(r[0]=t,e.emit("update",t,o),zr.BREAK)},feat:{isHas(){return!!this.beltline.getList()[0]},getLatestEvent(){return this.beltline.getList()[0]},onUpdated(t){e.on("update",t)},onHasLatestEvent(t){const r=this.beltline.getList()[0];r&&t(r),e.on("update",t)},onHasLatestEventOnce(t){const r=this.beltline.getList()[0];r?t(r):e.once("update",t)}}}}const qC=VC()((e=30*1e3)=>({initialization(){this.beltline.onAfterReq(({subId:t})=>{setTimeout(()=>{this.beltline.closeReqBySubid(t)},e)})}})),di=class{constructor(t,r){xe(this,"name");xe(this,"localEvent",null);xe(this,"data");xe(this,"isChange",!1);xe(this,"changeAt",null);xe(this,"isSync",!1);xe(this,"changeCount",0);xe(this,"onSetData",null);this.name=t,di.cacheList.push(this.name),di.list.push(this);const n=this.getLocalEvent();if(!n){this.data=r;return}this.setDataByEvent(n)}static syncAll(){for(const t of di.list)t.sync()}static clearAll(){for(const t of di.cacheList)localStorage.removeItem(t)}setLocalEvent(t){this.localEvent=t,window.localStorage.setItem(this.name,JSON.stringify(t))}getLocalEvent(){const t=this.localEvent;if(t)return t;const r=localStorage.getItem(this.name);if(!r)return null;try{return JSON.parse(r)}catch{return localStorage.removeItem(this.name),null}}getChangeAt(){return this.changeAt}getUpdateAt(){var t;return(t=this.getLocalEvent())==null?void 0:t.created_at}toChanged(){return this.changeAt=Hg(),this.isChange=!0,this.changeCount+=1}hasChange(){return this.isChange}isReChange(t){return this.changeCount!==t}setData(t){var r;this.data=t,(r=this.onSetData)==null||r.call(this,t)}getData(){return this.data}getDataAndChange(){return this.toChanged(),this.data}setDataByEvent(t){this.setData(this.serializeToData(t))}sync(t){this.isSync=!0;const r=t!=null&&t.onlyUrl?new Set().add(t.onlyUrl):fx(new Set,Ci.getWriteList(),Ci.getReadList(),t==null?void 0:t.moreUrls);pH(`cache:${this.name}:${JSON.stringify(t)}`,()=>{const n=this,o=new Set,i=D9().addFilters(this.getFilters()).addStaff({push(c,u,{subId:d}){var h;if(!d)return;const f=this.beltline.getUrlBySubId(d);!f||(o.add(f),(h=t==null?void 0:t.onEvent)==null||h.call(t,c,f))}}).addStaff(U9()).addStaff({initialization(){this.beltline.onAfterReq(({subId:c,url:u})=>{this.beltline.getRelayEmiter().once("eose",c,()=>{var d;if(!o.has(u)){const f=n.getLocalEvent();f&&i.publish(f,new Set().add(u)),(d=t==null?void 0:t.onPush)==null||d.call(t,u)}})})}}).addStaff(KC()).addStaff(qC());setTimeout(()=>{i.addRelayUrls(r)}),!(t!=null&&t.onlyUrl)&&i.addExtends(Vn);const s=this.getLocalEvent();s&&Vn.pushEvent(s);const a=new Set,l=cx((c,u)=>{this.syncByEvent(c,u,a,i)});i.feat.onHasLatestEvent(l)},1e4)}syncOne(){this.isSync||this.sync()}syncByEvent(t,r,n,o){const i=o.getUrlBySubId(r!=null?r:""),s=this.getUpdateAt();if(!s||t.created_at>s)this.setDataByEvent(t),this.setLocalEvent(t),o.publish(t,n);else if(t.created_at<s&&i){const a=this.getLocalEvent();a&&o.publish(a,new Set().add(i))}!i||n.add(i)}save(){if(!this.isChange||!this.saveToEvent())return;const r=this.getLocalEvent();!r||(Vn.publish(r,Ci.getWriteList()),this.isChange=!1)}saveToEvent(){var r;if(!this.data)return!1;const t=this.deserializeToEvent(this.data,(r=this.getChangeAt())!=null?r:Hg());return this.setLocalEvent(t),!0}};let ui=di;xe(ui,"cacheList",[]),xe(ui,"list",[]);const hh="prikey";function V9(){return Q7()}function K9(e){localStorage.setItem(hh,e),setTimeout(()=>{El.value=e})}function q9(e=V9()){return localStorage.setItem("newUserFlag",e),K9(e),e}function Bj(){window.localStorage[hh]="",ui.clearAll(),location.reload()}function Mj(){const e=localStorage.getItem("newUserFlag"),t=localStorage.getItem("prikey");return!!(e&&e===t)}const El=W((()=>{const e=localStorage.getItem(hh);return e||q9()})()),ns=q(()=>({privateKey:El.value,publicKey:El.value?jC(El.value):""}));q(()=>Uc.nprofileEncode({pubkey:ns.value.publicKey,relays:[]}));q(()=>Uc.npubEncode(ns.value.publicKey));q(()=>Uc.nsecEncode(ns.value.privateKey));function GC(e){const{privateKey:t,publicKey:r}=ns.value;let n=Object.assign({kind:1,pubkey:r,created_at:Math.floor(Date.now()/1e3),tags:[],content:""},e);return n.id=sh(n),n.sig=i9(n,t),n}class G9{createId(){return lx()}}var Nm;class XC{constructor(){xe(this,"eventEmiter",new Zo.exports);xe(this,"queue",vH((Nm=To.relayEmiterQueueInterval)!=null?Nm:To.relayEmiterQueueInterval=5));this.eventEmiter.setMaxListeners(1e3)}emit(t,r,n){const o=this.createEventName(t,r);!this.checkUp(o)||this.queue.insert(()=>{this.eventEmiter.emit(o,n)},To.priority[t])}checkUp(t){return this.eventEmiter.listenerCount(t)>0}emitEvent(t,r){this.eventEmiter.emit("event",r),this.emit("event",t,r)}onEvent(t){this.eventEmiter.on("event",t)}on(t,r,n,o){this.eventEmiter.on(this.createEventName(t,r),n),o!=null&&o.overtime&&setTimeout(()=>{this.removeListener(t,r,n)},o.overtime)}once(t,r,n){this.eventEmiter.once(this.createEventName(t,r),n)}removeListener(t,r,n){this.eventEmiter.removeListener(this.createEventName(t,r),n)}onRequest(t,r){this.eventEmiter.on(t,r)}emitRequest(t,r){const n=t;!this.checkUp(n)||this.queue.insert(()=>{this.eventEmiter.emit(t,r)},To.priority[t])}removeRequestListener(t,r){this.eventEmiter.removeListener(t,r)}removeRequestAllListener(t){this.eventEmiter.removeAllListeners(t)}removeRequestAllTypeListener(){for(const t of["req","closeReq","publish","close"])this.removeRequestAllListener(t)}removeAllListener(t){["eose","event","notice","ok"].forEach(r=>this.eventEmiter.removeAllListeners(this.createEventName(r,t)))}createEventName(t,r){return`${t}:${r}`}}const X9=VC()(()=>({initialization(){this.beltline.feat.pushEvent=function(e,t){t.push(e)}}})),An=Symbol(),Bn=Symbol();function Y9(e){const t=new Set;for(const r of e)r[0]==="r"&&t.add(r[1]);return t.delete(""),t}function Hj(e){for(const t of e)if(t[0]==="e"&&t[3]==="root")return t}function Dj(e){for(const t of e)if(t[0]==="e")return t}function zj(e,t){for(const r of t)if(r[0]===e)return r;return null}function Z9(e){const t=[];for(const r in e){const{read:n,write:o}=e[r];n&&o?t.push(["r",r]):n?t.push(["r",r,"read"]):o&&t.push(["r",r,"write"])}return t}function J9(e){var o,i;const{readUrl:t,writeUrl:r}=YC(e),n={[An]:t,[Bn]:r};for(const s of t)((o=n[s])!=null?o:n[s]={}).read=!0;for(const s of r)((i=n[s])!=null?i:n[s]={}).write=!0;return{relayConfiguration:n,readUrl:t,writeUrl:r}}function YC(e){const t=new Set,r=new Set,n=new Set;if(e)for(const o of e)o[0]==="r"&&(n.add(o[1]),o[2]==="read"?t.add(o[1]):(o[2]==="write"||t.add(o[1]),r.add(o[1])));return{readUrl:t,writeUrl:r,urls:n}}function Fj(e){const t=[];for(const r of e)if(r[0]==="e"){const n={eventId:r[1],relay:r[2],marker:["reply","mention","root"].includes(r[3])?r[3]:"reply",type:""};t.push(n)}return t}function Nj(e){var r;const t=[];for(const n of e)t.push(["e",n.eventId,(r=n.relay)!=null?r:"",n.marker]);return t}function jj(e){const t=[];for(const r of e)r[0]==="p"&&t.push({pubkey:r[1],relayUrl:r[2],name:r[3]});return t}const Q9=function(e){return e.__proto__=this.__proto__,e};let zm=0;class ph extends Q9{constructor(r){var n,o,i,s,a,l;super((n=r==null?void 0:r.slef)!=null?n:{});xe(this,"relayConfigurator");xe(this,"__EventBeltline__",!0);xe(this,"id",zm++);xe(this,"name",String(zm));xe(this,"staffs",[]);xe(this,"feat");xe(this,"subidMap",new Map);xe(this,"options");xe(this,"urls",new Set);xe(this,"filters",[]);xe(this,"eventList",[]);xe(this,"parent",null);xe(this,"children",new Set);xe(this,"extends",new Set);xe(this,"extendTo",new Set);xe(this,"root");xe(this,"idGenerator");xe(this,"relayEmiter");xe(this,"eventEmitter",new Zo.exports.EventEmitter().setMaxListeners(200));this.options=r!=null?r:{},r!=null&&r.name&&(this.name=r.name),this.feat={beltline:this},r!=null&&r.describe&&(this.name=r==null?void 0:r.describe),this.relayEmiter=(o=r==null?void 0:r.relayEmiter)!=null?o:new XC,this.root=(i=r==null?void 0:r.root)!=null?i:this,this.parent=(s=r==null?void 0:r.parent)!=null?s:null,this.relayConfigurator=r==null?void 0:r.relayConfigurator,this.idGenerator=(a=r==null?void 0:r.idGenerator)!=null?a:new G9,this.addFiltersStaff(this.filters,{unshift:!0});for(const c of this.staffs)(l=c==null?void 0:c.initialization)==null||l.call(c);this.addStaff(X9())}static isEventBeltlin(r){return typeof r=="object"&&Boolean(r.__EventBeltline__)}getRelayEmiter(){return this.relayEmiter}getRoot(){this.root}getExtends(){return this.extends}getExtendTo(){return this.extendTo}addExtends(r,n){if(this.extends.add(r),r.extendTo.add(this),n!=null&&n.preventPushHistory)return this;for(const o of r.getList())this.pushEvent(o);return this}pushEvent(r,n,o=new Set){var l,c,u,d,f;if(o.has(this))return;o.add(this);const{subId:i,url:s}=n!=null?n:{};for(const h of this.staffs)(l=h.beforePush)==null||l.call(h,r,this.eventList);let a=zr.NEXT;for(const h of this.staffs){const p=(u=(c=h.push)==null?void 0:c.call(h,r,this.eventList,{lastState:a,subId:i,url:s}))!=null?u:zr.NEXT;if(a=p,p!==zr.NEXT)break}for(const h of this.staffs)a=(f=(d=h.afterPush)==null?void 0:d.call(h,r,this.eventList,a))!=null?f:a;a===zr.NEXT&&this.feat.pushEvent(r,this.eventList,{lastState:a,subId:i,url:s}),a===zr.NEXT&&this.extendTo.forEach(h=>{h.pushEvent(r,n,o)})}getRelayUrls(){return this.urls}addReadUrl(){return this.relayConfigurator&&this.addRelayUrls(this.relayConfigurator.getReadList()),this}addRelayUrl(r){return this.addRelayUrls(new Set().add(r)),this}addRelayUrls(r){if(!r)return this;if(r.size===0)return this;const n=fH(this.urls,r);for(const o of n)this.urls.add(o);return this.reqs(n,this.filters),this.eventEmitter.emit("add-relay-urls",n,r),this}onAddRelayUrlsAfter(r){return this.eventEmitter.on("add-relay-urls",r),this}getFilters(){return this.filters}addFilter(r){return this.addFilters([r]),this}addFilters(r){return this.filters.push(...r),this.reqs(this.urls,r),this.eventEmitter.emit("add-filters",r),this}onAddFilters(r){return this.eventEmitter.on("add-filters",r),this}removeStaff(r){hH(this.staffs,r)}addStaff(r,n){return this.initializationStaff(r),n!=null&&n.unshift?this.staffs.unshift(r):this.staffs.push(r),this}initializationStaff(r){var n;r.feat&&Object.assign(this.feat,r.feat),r.beltline=this,(n=r.initialization)==null||n.call(r)}addFilterStaff(r,n){return this.addFiltersStaff([r],n),this}addFiltersStaff(r,n){const o=F9(r);return this.addStaff(o,n),this}setParent(r){return this.parent=r,this}addChild(r){return this.children.add(r),this}createChild(r){const n=new ph(Object.assign({},{relayEmiter:this.relayEmiter,idGenerator:this.idGenerator,relayConfigurator:this.relayConfigurator,root:this.root,parent:this,slef:{}},r));return this.addChild(n),n}closeReq(){var r;for(const n of this.staffs)(r=n.onClose)==null||r.call(n);for(const n of this.children)n.closeReq();for(const[n,o]of this.subidMap)this._closeReq(n,o);this.eventEmitter.removeAllListeners()}_closeReq(r,n){this.relayEmiter.emitRequest("closeReq",{subId:r,url:n})}closeReqBySubid(r){if(!r)return;const n=this.subidMap.get(r);!n||this._closeReq(r,n)}offLine(){}map(r){return this.eventList.map(r)}getList(){return this.eventList}addStaffOfSortByCreateAt(){return this.addStaff({initialization(){this.beltline.feat.pushEvent=function(r,n){const o=ux(n,r.created_at,"created_at");n.splice(o,0,r)}}}),this}addStaffOfReverseSortByCreateAt(){return this.addStaff({initialization(){this.beltline.feat.pushEvent=function(r,n){const o=dH(n,r.created_at,"created_at");n.splice(o,0,r)}}}),this}reqs(r,n){n.length!==0&&(r==null||r.forEach(async o=>{try{this.req(o,n)}catch(i){console.error(i)}}))}publish(r,n,o){var c,u;const i=new Set(n);let s=!1;try{!lh(r)&&(s=!0)}catch{s=!0}if(s||(o==null?void 0:o.addUrl)){s=!0;const d=(c=r.tags)!=null?c:[],f=Y9(d);for(const h of i)f.has(h)||d.push(["r",h]);fx(i,f),r.tags=d}let a=r;if(s){if(r.pubkey&&r.pubkey!==ns.value.publicKey)return;a=GC(r)}this.pushEvent(a),o!=null&&o.onOK&&this.relayEmiter.on("ok",a.id,o.onOK);const l=new Set;for(const d of(u=o==null?void 0:o.autoPublishToTagR)==null||u?i:n)this.toPublish(d,a),l.add(d);for(const d of this.getRelayUrls())l.has(d)||this.toPublish(d,a);return this.onAddRelayUrlsAfter(d=>{for(const f of d)l.has(f)||this.toPublish(f,a)}),a}req(r,n){const o=this.idGenerator.createId();this.onReceiveEvent(o),this.setSubidMap(o,r),this.relayEmiter.emitRequest("req",{subId:o,url:r,filters:n})}onReceiveEvent(r,n=new WeakSet){n.has(this)||(n.add(this),this.relayEmiter.on("event",r,({event:o,url:i})=>{this.pushEvent(o,{subId:r,url:i})}),this.relayEmiter.once("eose",r,()=>{this.relayEmiter.removeAllListener(r)}))}async toPublish(r,n){this.relayEmiter.emitRequest("publish",{event:n,url:r})}setSubidMap(r,n){this.subidMap.set(r,n),this.eventEmitter.emit("afterReq",{subId:r,url:n})}onAfterReq(r){return this.eventEmitter.on("afterReq",r),this}getUrlBySubId(r){return this.subidMap.get(r)}}class eN{constructor(t,r,n){xe(this,"ws");xe(this,"pool");xe(this,"subIds",new Set);xe(this,"timeout");xe(this,"isClose",!1);xe(this,"relayEmiter");xe(this,"publishIds",new Set);this.ws=t,this.ws.onmessage=this.handleMessage.bind(this),this.relayEmiter=r,this.pool=n}handleMessage(t){try{const r=JSON.parse(t.data);console.debug(this.ws.url,r),logger.for("Relay:onMessage:data").debug(r);let n="";if(Array.isArray(r))switch(r[0]){case"EVENT":n=r[1];let o=r[2];if(!ah(o)||!lh(o))return;this.relayEmiter.emitEvent(n,{url:this.ws.url,event:o,subId:n});break;case"NOTICE":this.relayEmiter.emit("notice",n,{message:r[1],url:this.ws.url});break;case"EOSE":n=r[1],this.relayEmiter.emit("eose",n,{url:this.ws.url});break;case"OK":let i=r[1];this.relayEmiter.emit("ok",i,{ok:r[2],message:r[3],url:this.ws.url}),this.closePublish(i);break;case"AUTH":break;default:break}}catch{return}}send(t){window.sendCount++,this.ws.send(JSON.stringify(t))}createSubId(){return Math.random().toString().slice(2)}req(t,r=this.createSubId()){console.debug("websocket:req:",t,this.ws.url),this.addSubId(r);try{this.send(["REQ",r,...t])}catch{this.deleteSubId(r)}return r}closePublish(t){!this.publishIds.has(t)||(this.publishIds.delete(t),this.autoClose())}publish(t){console.debug("websocket:publish",this.ws.url,t),this.send(["EVENT",t]),this.publishIds.add(t.id),setTimeout(()=>{this.closePublish(t.id)},6e4)}closeReq(t){!this.subIds.has(t)||(this.deleteSubId(t),this.send(["CLOSE",t]))}addSubId(t){this.isClose&&(this.isClose=!0,this.pool.getPool().set(this.ws.url,this)),this.subIds.add(t),this.pool.allSubIds.add(t)}deleteSubId(t){!this.subIds.has(t)||(this.subIds.delete(t),this.pool.allSubIds.delete(t),this.relayEmiter.removeAllListener(t),this.autoClose())}close(){if(!this.isClose){this.isClose=!0;for(const t of this.subIds)this.deleteSubId(t);this.ws.close(),this.pool.close(this.ws.url)}}clearAutoClose(){clearTimeout(this.timeout),this.timeout=void 0}autoClose(){this.subIds.size>0||this.publishIds.size>0||(this.timeout=setTimeout(()=>{this.subIds.size>0||this.publishIds.size>0||this.close()},6e4))}}async function tN(e){return new Promise((t,r)=>{try{const n=new URL(e);try{const o=new WebSocket(n);o.onopen=()=>{t(o)},o.onerror=i=>{r(i)}}catch{}}catch{console.error("Incorrect connection",e)}})}window.sendCount=0;class rN{constructor(t,r){xe(this,"pool");xe(this,"relayEmiter");xe(this,"allSubIds");var o;const n=(o=r==null?void 0:r.self)!=null?o:{};return n.__proto__=this.__proto__,n.relayEmiter=t,n.allSubIds=new Set,n.pool=new Map,n.listen(),n}async listen(){this.relayEmiter.onRequest("req",async({url:t,subId:r,filters:n})=>{(await this.getRelay(t)).req(n,r)}),this.relayEmiter.onRequest("closeReq",async({url:t,subId:r})=>{this.allSubIds.delete(r);const n=this.getRelayFromPool(t);!n||n.closeReq(r)}),this.relayEmiter.onRequest("publish",async({url:t,event:r})=>{(await this.getRelay(t)).publish(r)}),this.relayEmiter.onRequest("close",async({url:t})=>{const r=this.getRelayFromPool(t);!r||r.close()})}getPool(){return this.pool}async getRelay(t){const r=this.pool.get(t);return r||await this.createRelayPool(t)}getRelayFromPool(t){return this.pool.get(t)}async createRelayPool(t){return new Promise(async(r,n)=>{const o=await tN(t);o.onerror=s=>{this.close(t)},o.onclose=()=>{this.close(t)};const i=new eN(o,Af,this);this.pool.set(t,i),r(i)})}close(t){var r;!this.pool.has(t)||((r=this.getRelayFromPool(t))==null||r.close(),this.pool.delete(t))}}const nN=(e,t,r)=>tt(e,cx(t,r.delay),r);var jm;const oN=(jm=window.defaultRelayUrls)!=null?jm:["wss://no.str.cr","wss://no-str.org","wss://nos.lol","wss://nostr.com.de","wss://relay.mostr.pub","wss://relay.nostr.wirednet.jp","wss://no-str.org","wss://brb.io"];class iN extends ui{setLocalEventByEvent(t){this.setLocalEvent(t)}constructor(){super("RelayConfigurator",{[An]:new Set,[Bn]:new Set})}getFilters(){return[{kinds:[10002],authors:[ns.value.publicKey]}]}serializeToData(t){const{relayConfiguration:r,readUrl:n,writeUrl:o}=J9(t.tags);return r}deserializeToEvent(t,r){const n=Z9(t);return GC({kind:10002,tags:n,created_at:r})}getConfiguration(){return this.getData()}getWriteList(){return this.getConfiguration()[Bn]}getReadList(){return this.getConfiguration()[An]}getOtherList(){return sN()}addWriteRead(t){this.addRead(t),this.addWrite(t)}addWrite(t){this.toChanged(),this.getRule(t).write=!0,this.getConfiguration()[Bn].add(t)}remoteWrite(t){this.toChanged(),this.getRule(t).write=!1,this.getConfiguration()[Bn].delete(t)}addRead(t){this.toChanged(),this.getRule(t).read=!0,this.getConfiguration()[An].add(t)}remoteRead(t){this.toChanged(),this.getRule(t).read=!1,this.getConfiguration()[An].delete(t)}remove(t){this.toChanged(),delete this.getData()[t],this.getConfiguration()[Bn].delete(t),this.getConfiguration()[An].delete(t)}setRule(t,r,n){if(this.toChanged(),!r&&!n)this.remove(t);else{const o=this.getRule(t);o.read=r,o.write=n,n?this.getConfiguration()[Bn].add(t):this.getConfiguration()[Bn].delete(t),r?this.getConfiguration()[An].add(t):this.getConfiguration()[An].delete(t)}}getRule(t){var r;return(r=this.getConfiguration()[t])!=null?r:this.getConfiguration()[t]={}}hasReadByUrl(t){return this.getReadList().has(t)}hasWriteByUrl(t){return this.getWriteList().has(t)}broadcast(t){var s;const r=this.getLocalEvent();if(!r||r.tags.length===0)return;const n=this.getOtherList(),o=Object.assign((s=t==null?void 0:t.slef)!=null?s:{},{numberOfErrors:0,numberOfSuccesses:0,numberOfOvertime:0,total:n.size}),i=new Set;return Af.on("ok",r.id,({ok:a,message:l,url:c})=>{i.add(c),a?o.numberOfSuccesses+=1:o.numberOfErrors+=1}),Vn.publish(r,n),setTimeout(()=>{n.forEach(a=>{i.has(a)||(o.numberOfOvertime+=1)})},1e3*30),o}}const Id="__other_urls",ZC={...Ul,useLocalStorage:!0,duration:1e3*60};function sN(){const e=ox(Id,Fm,ZC);return Array.isArray(e)?new Set(e):e instanceof Set?e:(oH(Id),Fm())}function Fm(){const e=Zt(new Set),t=Vn.createChild().addStaff(KC()).addStaff(qC()).addFilter({kinds:[10002],limit:100}).addStaff({push(r){const{writeUrl:n,readUrl:o}=YC(r.tags);for(const i of n)e.add(i);for(const i of o)e.add(i)}});return setTimeout(async()=>{var o;const r=Array.from(new Set([...Ci.getReadList(),...Ci.getWriteList(),...oN].slice(0,10)));let n=0;for(;e.size<((o=To.getOtherUrlsRequestLimitSize)!=null?o:50);){await fd(2e3);const i=r[n];if(!i)return;t.addRelayUrls(new Set().add(i)),n++}},0),nN(e,()=>{ia(Id,[...e],ZC)},{deep:!0}),e}function aN(){const e=new XC;il({relayEmiter:e});const t=new rN(e,{self:Zt({})});il({relayPool:t});const r=new ph({preventCircularReferences:!0,relayEmiter:e});il({rootEventBeltline:r}),e.onEvent(({subId:o,event:i,url:s})=>{r.pushEvent(i,{subId:o})});const n=Zt(new iN);return r.relayConfigurator=n,il({relayConfigurator:n}),setTimeout(()=>{n.sync()}),{relayEmiter:e,relayPool:t,rootEventBeltline:r,relayConfigurator:n}}const JC=TD({history:jH(),routes:[{path:"/login",name:"login",redirect:"/login/language",component:()=>Xe(()=>import("./LoginStepsView.8b6807f0.js"),["./LoginStepsView.8b6807f0.js","./LoginStepsView.a5aa0740.js","./Contact.f91985c7.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./user.c6ea6a80.js","./channel.f7cdd32d.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./FollowChannel.c19e4d3c.js","./event.e7c9f230.js","./get-slot.4ceacf82.js","./Checkmark.2aca7293.js"],import.meta.url),children:[{path:"/login/language",name:"language",alias:"/login-step-1",meta:{step:1},component:()=>Xe(()=>import("./LoginLanguageView.89defc85.js"),["./LoginLanguageView.89defc85.js","./ThemeButton.vue_vue_type_script_setup_true_lang.5aaa1682.js","./Dropdown.21956391.js","./Icon.80a71b9a.js","./create.2deeaf6a.js","./create-ref-setter.fe4a2903.js","./LoginCard.vue_vue_type_script_setup_true_lang.5a4f20a4.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./Favicon.63e6f726.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./Space.45ef5f62.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/logon",name:"login-form",alias:"/login-step-2",meta:{step:2},component:()=>Xe(()=>import("./logonView.d1688ea0.js"),["./logonView.d1688ea0.js","./nostr.2e66b318.js","./Input.4bb7b199.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./LoginStepsView.a5aa0740.js","./Contact.f91985c7.js","./createGarbageFilter.9d7b3860.js","./user.c6ea6a80.js","./channel.f7cdd32d.js","./ContentBlacklistView.9493daed.js","./FollowChannel.c19e4d3c.js","./event.e7c9f230.js","./UserMetadataEditing.vue_vue_type_script_setup_true_lang.6b826e0c.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Icon.80a71b9a.js","./Tabs.e123bf3c.js","./LoginCard.vue_vue_type_script_setup_true_lang.5a4f20a4.js","./Favicon.63e6f726.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css"],import.meta.url)},{path:"/relay/configuration",name:"relay-configuration",alias:"/login-step-3",meta:{step:3},component:()=>Xe(()=>import("./LoginRelaysView.39a5a49c.js"),["./LoginRelaysView.39a5a49c.js","./RelayConfig.vue_vue_type_script_setup_true_lang.eb41110f.js","./Scrollbar.d43e7a6d.js","./Tooltip.vue_vue_type_script_setup_true_lang.44c79259.js","./use-theme-vars.4eddaf97.js","./Close.222d9377.js","./Icon.80a71b9a.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./RelayConnectListCard.vue_vue_type_script_setup_true_lang.c8c5d864.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.96736d27.js","./Input.4bb7b199.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./MdSearch.c9b91d87.js","./composables.c2f0fe21.js","./RelayConfig.5c39fc29.css","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.f1879afa.css","./Alert.dfdd031a.js"],import.meta.url)},{path:"/login/complete",name:"login-complete",alias:"/login-step-4",meta:{step:4},component:()=>Xe(()=>import("./LoginCompleteView.4c810d68.js"),["./LoginCompleteView.4c810d68.js","./LoginCard.vue_vue_type_script_setup_true_lang.5a4f20a4.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./Favicon.63e6f726.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Icon.80a71b9a.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./Tooltip.vue_vue_type_script_setup_true_lang.44c79259.js","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Input.4bb7b199.js","./Checkbox.e5f469c7.js","./Alert.dfdd031a.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js"],import.meta.url)}]},{path:"/",redirect:"/home",component:()=>Xe(()=>import("./LayoutView.14e37ca8.js"),["./LayoutView.14e37ca8.js","./Favicon.63e6f726.js","./CloudUpload.d0cb87ab.js","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./MdSearch.c9b91d87.js","./Input.4bb7b199.js","./Dropdown.21956391.js","./create.2deeaf6a.js","./create-ref-setter.fe4a2903.js","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./ThemeButton.vue_vue_type_script_setup_true_lang.5aaa1682.js","./ReloadCircleSharp.0893bcb5.js","./DrawerContent.1892dd15.js","./use-theme-vars.4eddaf97.js"],import.meta.url),children:[{path:"/home",component:()=>Xe(()=>import("./HomeView.fc85ee4b.js"),["./HomeView.fc85ee4b.js","./Content.676f5600.js","./getCacheStaff.ce5a8b54.js","./user.c6ea6a80.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./event.e7c9f230.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./createGarbageFilter.9d7b3860.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css","./RichTextEditBox.vue_vue_type_script_setup_true_lang.a6ccc1fb.js","./Result.54b35e5c.js","./Tabs.e123bf3c.js","./Close.222d9377.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Contact.f91985c7.js","./channel.f7cdd32d.js","./PostList.vue_vue_type_script_setup_true_lang.8bddfec7.js","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js"],import.meta.url)},{path:"/markdown/editor/:value?",name:"markdown-editor",component:()=>Xe(()=>import("./MarkdownEditorView.f131f588.js"),["./MarkdownEditorView.f131f588.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./DrawerContent.1892dd15.js","./MavonEditor.ce482362.js","./event.e7c9f230.js","./nostr.2e66b318.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./UploadInput.vue_vue_type_script_setup_true_lang.23178d81.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Icon.80a71b9a.js","./Input.4bb7b199.js","./Tag.9b8ca562.js","./prop.0533c762.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/relays",name:"relays",component:()=>Xe(()=>import("./RelaysView.3f1f1ac2.js"),["./RelaysView.3f1f1ac2.js","./RelayConfig.vue_vue_type_script_setup_true_lang.eb41110f.js","./Scrollbar.d43e7a6d.js","./Tooltip.vue_vue_type_script_setup_true_lang.44c79259.js","./use-theme-vars.4eddaf97.js","./Close.222d9377.js","./Icon.80a71b9a.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./RelayConnectListCard.vue_vue_type_script_setup_true_lang.c8c5d864.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.96736d27.js","./Input.4bb7b199.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./MdSearch.c9b91d87.js","./composables.c2f0fe21.js","./RelayConfig.5c39fc29.css"],import.meta.url)},{path:"/channels",component:()=>Xe(()=>import("./ChannelsView.fc8df7e8.js"),["./ChannelsView.fc8df7e8.js","./FollowChannel.c19e4d3c.js","./channel.f7cdd32d.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./user.c6ea6a80.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./event.e7c9f230.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./ListItem.629762b8.js"],import.meta.url)},{path:"/channel/message/:value",name:"channel-message",component:()=>Xe(()=>import("./ChannelMessageView.3a3da7c4.js"),["./ChannelMessageView.3a3da7c4.js","./channel.f7cdd32d.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./user.c6ea6a80.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js","./use.7b5663cd.js","./Content.676f5600.js","./event.e7c9f230.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css","./FollowChannel.c19e4d3c.js","./RichTextEditBox.vue_vue_type_script_setup_true_lang.a6ccc1fb.js","./Result.54b35e5c.js","./Tabs.e123bf3c.js","./Close.222d9377.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./PageHeader.8cc09240.js"],import.meta.url)},{path:"/profile/:value",name:"profile",component:()=>Xe(()=>import("./ProfileView.a4299ff2.js"),["./ProfileView.a4299ff2.js","./Contact.f91985c7.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./user.c6ea6a80.js","./channel.f7cdd32d.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Content.676f5600.js","./use.7b5663cd.js","./event.e7c9f230.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css","./PostList.vue_vue_type_script_setup_true_lang.8bddfec7.js","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.96736d27.js","./Tabs.e123bf3c.js","./UserMetadataEditing.vue_vue_type_script_setup_true_lang.6b826e0c.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Dropdown.21956391.js","./ProfileView.db26d6b4.css"],import.meta.url)},{path:"/profile",component:()=>Xe(()=>import("./ProfileView.a4299ff2.js"),["./ProfileView.a4299ff2.js","./Contact.f91985c7.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./user.c6ea6a80.js","./channel.f7cdd32d.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Content.676f5600.js","./use.7b5663cd.js","./event.e7c9f230.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css","./PostList.vue_vue_type_script_setup_true_lang.8bddfec7.js","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js","./RelayWritableButton.vue_vue_type_script_setup_true_lang.96736d27.js","./Tabs.e123bf3c.js","./UserMetadataEditing.vue_vue_type_script_setup_true_lang.6b826e0c.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Dropdown.21956391.js","./ProfileView.db26d6b4.css"],import.meta.url)},{path:"/task",component:()=>Xe(()=>import("./TaskView.80194511.js"),["./TaskView.80194511.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/settings",component:()=>Xe(()=>import("./SettingsView.0ce06cc4.js"),["./SettingsView.0ce06cc4.js","./Thing.0b978a9d.js","./composables.c2f0fe21.js","./Icon.80a71b9a.js","./ListItem.629762b8.js"],import.meta.url)},{path:"/about",component:()=>Xe(()=>import("./AboutView.cab39edd.js"),["./AboutView.cab39edd.js","./Favicon.63e6f726.js","./Icon.80a71b9a.js"],import.meta.url)},{path:"/content/blacklist",name:"content-blacklist-view",component:()=>Xe(()=>import("./ContentBlacklistView.77f04c58.js"),["./ContentBlacklistView.77f04c58.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Checkbox.e5f469c7.js","./get-slot.4ceacf82.js","./Dropdown.21956391.js","./Icon.80a71b9a.js","./create.2deeaf6a.js","./create-ref-setter.fe4a2903.js","./VirtualList.a319de25.js","./Empty.3f22b2fc.js","./prop.0533c762.js","./Popselect.e928699a.js","./Checkmark.2aca7293.js","./Tag.9b8ca562.js"],import.meta.url)},{path:"/to-back",name:"to-back",component:()=>Xe(()=>import("./ToBackView.df525460.js"),["./ToBackView.df525460.js","./ToBackView.9d1d360f.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./PageHeader.8cc09240.js"],import.meta.url),children:[{path:"/tag/:value",name:"tag",component:()=>Xe(()=>import("./TagView.46b807f2.js"),["./TagView.46b807f2.js","./PostList.vue_vue_type_script_setup_true_lang.8bddfec7.js","./event.e7c9f230.js","./getCacheStaff.ce5a8b54.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js","./use.7b5663cd.js","./Content.676f5600.js","./user.c6ea6a80.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./createGarbageFilter.9d7b3860.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css","./ToBackView.9d1d360f.js"],import.meta.url),meta:{}},{path:"/notice",name:"notice",component:()=>Xe(()=>import("./NoticeView.fcbddbdc.js"),["./NoticeView.fcbddbdc.js","./PostList.vue_vue_type_script_setup_true_lang.8bddfec7.js","./event.e7c9f230.js","./getCacheStaff.ce5a8b54.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js","./use.7b5663cd.js","./Content.676f5600.js","./user.c6ea6a80.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./createGarbageFilter.9d7b3860.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css"],import.meta.url)},{path:"/search/:value?",name:"search",component:()=>Xe(()=>import("./SearchView.62e1ee98.js"),["./SearchView.62e1ee98.js","./event.e7c9f230.js","./getCacheStaff.ce5a8b54.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./user.c6ea6a80.js","./Content.676f5600.js","./use.7b5663cd.js","./nostr.2e66b318.js","./MavonEditor.ce482362.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./createGarbageFilter.9d7b3860.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css"],import.meta.url)},{path:"/short/text/note/:value",name:"short-text-note",component:()=>Xe(()=>import("./ShortTextNoteView.2f5527bd.js"),["./ShortTextNoteView.2f5527bd.js","./MavonEditor.ce482362.js","./event.e7c9f230.js","./getCacheStaff.ce5a8b54.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./nostr.2e66b318.js","./use.7b5663cd.js","./use-theme-vars.4eddaf97.js","./MavonEditor.9ea755d8.css","./Content.676f5600.js","./user.c6ea6a80.js","./RelayAddButton.vue_vue_type_script_setup_true_lang.4b63e740.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./Icon.80a71b9a.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Tag.9b8ca562.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./createGarbageFilter.9d7b3860.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./naiveUi.7e1d9910.js","./composables.c2f0fe21.js","./Popselect.e928699a.js","./create.2deeaf6a.js","./Checkmark.2aca7293.js","./VirtualList.a319de25.js","./create-ref-setter.fe4a2903.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./Content.1c5cf934.css","./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js","./PostList.vue_vue_type_script_setup_true_lang.8bddfec7.js","./RichTextEditBox.vue_vue_type_script_setup_true_lang.a6ccc1fb.js","./Result.54b35e5c.js","./Tabs.e123bf3c.js","./Close.222d9377.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js"],import.meta.url)},{path:"/channel/create",name:"create-channel",component:()=>Xe(()=>import("./CreateChannelView.673d4f79.js"),["./CreateChannelView.673d4f79.js","./FollowChannel.c19e4d3c.js","./channel.f7cdd32d.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./user.c6ea6a80.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./event.e7c9f230.js","./use.7b5663cd.js","./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.10e1be5d.js","./UploadInput.vue_vue_type_script_setup_true_lang.23178d81.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Icon.80a71b9a.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js"],import.meta.url)},{path:"/channel/edit/:value",name:"edit-channel",component:()=>Xe(()=>import("./EditChannelView.509afe51.js"),["./EditChannelView.509afe51.js","./channel.f7cdd32d.js","./getCacheStaff.ce5a8b54.js","./createGarbageFilter.9d7b3860.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./user.c6ea6a80.js","./ContentBlacklistView.9493daed.js","./Input.4bb7b199.js","./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.10e1be5d.js","./UploadInput.vue_vue_type_script_setup_true_lang.23178d81.js","./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js","./CloudUpload.d0cb87ab.js","./Icon.80a71b9a.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./FollowChannel.c19e4d3c.js","./event.e7c9f230.js","./nostr.2e66b318.js","./use.7b5663cd.js"],import.meta.url)},{path:"/move/house",name:"move-house",component:()=>Xe(()=>import("./MoveHouseView.847b6ddc.js"),["./MoveHouseView.847b6ddc.js","./AddButton.vue_vue_type_script_setup_true_lang.fda19e14.js","./RelayInfoView.1000451d.js","./Ellipsis.fb8816b2.js","./Ellipsis.b57e5c64.css","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./Icon.80a71b9a.js","./use-theme-vars.4eddaf97.js","./Empty.3f22b2fc.js","./ListItem.629762b8.js","./Drawer.vue_vue_type_script_setup_true_lang.d4f4dec1.js","./DrawerContent.1892dd15.js","./Scrollbar.3fc623a0.js","./ReloadCircleSharp.0893bcb5.js","./Scrollbar.d43e7a6d.js","./Scrollbar.f1879afa.css","./Input.4bb7b199.js","./Thing.0b978a9d.js","./RelayConnectListCard.vue_vue_type_script_setup_true_lang.c8c5d864.js","./UserLink.vue_vue_type_script_setup_true_lang.a7ca9f69.js","./user.c6ea6a80.js","./nostr.2e66b318.js","./Checkbox.e5f469c7.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js"],import.meta.url)}]}]},{path:"/to-back-1",name:"to-back-1",component:()=>Xe(()=>import("./ToBackView.df525460.js"),["./ToBackView.df525460.js","./ToBackView.9d1d360f.js","./use.7b5663cd.js","./autoAddRelayurlByEventIdStaff.8ca2f449.js","./getCacheStaff.ce5a8b54.js","./PageHeader.8cc09240.js"],import.meta.url),children:[{path:"/relay/info/:url",name:"relay-info",component:()=>Xe(()=>import("./RelayInfoView.0bd85aeb.js"),["./RelayInfoView.0bd85aeb.js","./user.c6ea6a80.js","./getCacheStaff.ce5a8b54.js","./nostr.2e66b318.js","./RelayInfoView.1000451d.js","./Checkbox.e5f469c7.js","./create.2deeaf6a.js","./VirtualList.a319de25.js","./Empty.3f22b2fc.js","./composables.c2f0fe21.js","./Space.45ef5f62.js","./get-slot.4ceacf82.js","./Result.54b35e5c.js","./Tag.9b8ca562.js"],import.meta.url)}]}]});JC.beforeEach((e,t,r)=>{const n=localStorage.getItem("newUserFlag"),o=localStorage.getItem("prikey");e.path.startsWith("/login")||["relay-info","login"].some(i=>e.name===i)?r():n&&n===o?r({name:"login",query:{redirected:e.fullPath}}):r()});try{window.nostrApi=aN()}catch{}const gh=JS(BD);gh.use(JC);gh.use(qf);gh.mount("#app");export{Nj as $,Sr as A,M2 as B,mr as C,Mo as D,_6 as E,uN as F,kN as G,Ue as H,$N as I,_N as J,$2 as K,Ge as L,B2 as M,Tc as N,pF as O,Mj as P,PD as Q,ui as R,Tx as S,qA as T,Zt as U,ns as V,jj as W,Fj as X,Vn as Y,U9 as Z,ai as _,re as a,q1 as a$,GC as a0,cx as a1,ox as a2,Oj as a3,KC as a4,qC as a5,fx as a6,Y9 as a7,Aj as a8,zr as a9,C6 as aA,Sb as aB,Fb as aC,fn as aD,Et as aE,zt as aF,$r as aG,lb as aH,Bv as aI,kp as aJ,Ht as aK,bt as aL,E6 as aM,nt as aN,Gd as aO,$s as aP,Ds as aQ,Rj as aR,qf as aS,dd as aT,Ny as aU,mj as aV,gj as aW,ec as aX,qi as aY,Hk as aZ,Vo as a_,VC as aa,Ci as ab,YC as ac,fd as ad,Ul as ae,ia as af,oH as ag,sx as ah,pH as ai,To as aj,Hg as ak,Cj as al,Pj as am,Uc as an,_j as ao,W as ap,Ky as aq,ax as ar,Jt as as,Ec as at,Be as au,Lv as av,tt as aw,sj as ax,wr as ay,DL as az,N as b,gk as b$,nj as b0,tj as b1,yb as b2,oo as b3,wt as b4,un as b5,of as b6,X_ as b7,Y_ as b8,pE as b9,WI as bA,vc as bB,ST as bC,so as bD,Ho as bE,Dp as bF,vt as bG,jC as bH,K9 as bI,Q7 as bJ,q9 as bK,ga as bL,sE as bM,Ga as bN,cf as bO,io as bP,Vr as bQ,w6 as bR,Pc as bS,ef as bT,WO as bU,j_ as bV,B_ as bW,Wr as bX,Ri as bY,DS as bZ,Pr as b_,Yt as ba,mc as bb,or as bc,Xs as bd,rf as be,nf as bf,uL as bg,eL as bh,Hv as bi,Ef as bj,Oi as bk,bL as bl,Fv as bm,Zo as bn,pc as bo,S0 as bp,_0 as bq,Fr as br,tB as bs,AD as bt,LN as bu,bj as bv,mN as bw,pj as bx,B8 as by,rn as bz,U as c,Sw as c$,Ij as c0,Dy as c1,VB as c2,FM as c3,JN as c4,O8 as c5,ld as c6,LL as c7,$c as c8,va as c9,$j as cA,kj as cB,MB as cC,CH as cD,ha as cE,Bj as cF,CD as cG,ZB as cH,MM as cI,yB as cJ,LD as cK,uj as cL,Ju as cM,DE as cN,zb as cO,Zi as cP,wI as cQ,zE as cR,xc as cS,sf as cT,R_ as cU,n8 as cV,vI as cW,lx as cX,HA as cY,JC as cZ,ww as c_,xa as ca,Bi as cb,ya as cc,EN as cd,cN as ce,oS as cf,ZN as cg,wj as ch,Ej as ci,ro as cj,ie as ck,na as cl,yO as cm,rj as cn,bn as co,mb as cp,L_ as cq,ER as cr,bN as cs,vN as ct,nI as cu,Sj as cv,Qi as cw,SR as cx,FE as cy,UR as cz,ne as d,zN as d$,hj as d0,Lj as d1,zj as d2,hH as d3,Tj as d4,vj as d5,yj as d6,xj as d7,NR as d8,Ai as d9,Ne as dA,pN as dB,vr as dC,nc as dD,bl as dE,C0 as dF,_t as dG,vi as dH,xN as dI,Li as dJ,br as dK,sn as dL,qN as dM,J2 as dN,FN as dO,Z2 as dP,wN as dQ,AN as dR,BN as dS,ON as dT,is as dU,Ud as dV,Gi as dW,WN as dX,hS as dY,RN as dZ,Zn as d_,Xe as da,Hj as db,fj as dc,uO as dd,Lp as de,cj as df,Ca as dg,V_ as dh,p1 as di,ab as dj,qm as dk,oc as dl,gN as dm,dN as dn,Cw as dp,a0 as dq,gi as dr,$i as ds,Ll as dt,kl as du,c0 as dv,Yw as dw,hN as dx,Fd as dy,fN as dz,Io as e,op as e$,L2 as e0,O2 as e1,R2 as e2,I2 as e3,k2 as e4,Vd as e5,p0 as e6,IN as e7,SN as e8,KN as e9,ej as eA,tp as eB,XN as eC,YN as eD,J0 as eE,VS as eF,Q0 as eG,US as eH,Wu as eI,K8 as eJ,dj as eK,Wv as eL,sp as eM,MI as eN,GR as eO,Yv as eP,du as eQ,qL as eR,fI as eS,DO as eT,bO as eU,BO as eV,Gu as eW,VM as eX,KM as eY,qO as eZ,Cf as e_,qs as ea,Dh as eb,f2 as ec,Pi as ed,fS as ee,VN as ef,TN as eg,PN as eh,DN as ei,jN as ej,HN as ek,x0 as el,pS as em,n2 as en,S2 as eo,CN as ep,NN as eq,MN as er,UN as es,yN as et,Qd as eu,JS as ev,QN as ew,RS as ex,GN as ey,ZS as ez,be as f,m1 as f0,Gs as f1,lj as f2,y1 as f3,S1 as f4,T1 as f5,ta as f6,oj as f7,L8 as f8,Dj as f9,vH as fa,Cy as fb,ba as g,Qe as h,ra as i,E as j,Vu as k,ij as l,Se as m,q as n,we as o,Ze as p,xr as q,ar as r,PO as s,Uo as t,It as u,ir as v,qu as w,dt as x,an as y,Wn as z};
