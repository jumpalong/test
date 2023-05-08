import{a3 as b,a0 as v,F as y,N as k,a4 as _,a5 as x,j as $,p as S,k as f,O as B,i as C,f as h,h as n,L as F,b as d,Q as I,c as N,d as i,M as z}from"./index.8f62a545.js";import{u as T}from"./use-style.d8216a24.js";function P(e,...t){if(Array.isArray(e))e.forEach(r=>P(r,...t));else return e(...t)}function c(e){return e.some(t=>b(t)?!(t.type===v||t.type===y&&!c(t.children)):!0)?e:null}function O(e,t){return e&&c(e())||t()}function A(e,t,r){return e&&c(e(t))||r(t)}function K(e,t){const r=e&&c(e());return t(r||null)}function X(e,t,r){const s=e&&c(e(t));return r(s||null)}function Y(e){return!(e&&c(e()))}function R(){const e=k(!1);return _(()=>{e.value=!0}),x(e)}const u=C("n-form-item");function q(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:s}={}){const o=$(u,null);S(u,null);const a=f(r?()=>r(o):()=>{const{size:l}=e;if(l)return l;if(o){const{mergedSize:g}=o;if(g.value!==void 0)return g.value}return t}),p=f(s?()=>s(o):()=>{const{disabled:l}=e;return l!==void 0?l:o?o.disabled.value:!1}),w=f(()=>{const{status:l}=e;return l||(o==null?void 0:o.mergedValidationStatus.value)});return B(()=>{o&&o.restoreValidation()}),{mergedSizeRef:a,mergedDisabledRef:p,mergedStatusRef:w,nTriggerFormBlur(){o&&o.handleContentBlur()},nTriggerFormChange(){o&&o.handleContentChange()},nTriggerFormFocus(){o&&o.handleContentFocus()},nTriggerFormInput(){o&&o.handleContentInput()}}}const V=h({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=R();return()=>n(F,{name:"icon-switch-transition",appear:r.value},t)}}),{cubicBezierEaseInOut:W}=I;function m({originalTransform:e="",left:t=0,top:r=0,transition:s=`all .3s ${W} !important`}={}){return[d("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),d("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),d("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:s})]}const j=d([d("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),d("@keyframes loading-layer-rotate",`
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
 `),d("@keyframes loading-left-spin",`
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
 `),d("@keyframes loading-right-spin",`
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
 `),N("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[i("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[m()]),i("container",`
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
 `,[i("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),i("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[i("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[i("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),i("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[i("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),i("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[i("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),i("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[m({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),M={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Q=h({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},M),setup(e){T("-base-loading",j,z(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:s,scale:o}=this,a=t/o;return n("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},n(V,null,{default:()=>this.show?n("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},n("div",{class:`${e}-base-loading__container`},n("div",{class:`${e}-base-loading__container-layer`},n("div",{class:`${e}-base-loading__container-layer-left`},n("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},n("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:a,cy:a,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),n("div",{class:`${e}-base-loading__container-layer-patch`},n("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},n("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:a,cy:a,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),n("div",{class:`${e}-base-loading__container-layer-right`},n("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},n("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:a,cy:a,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):n("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});export{V as N,O as a,Y as b,P as c,Q as d,R as e,u as f,A as g,X as h,m as i,K as r,q as u};
