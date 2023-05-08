import{b as m,c as l,a as f,f as S,u as C,g as h,bH as x,k as p,h as a,L as k,at as w,N as R,af as $,E as N}from"./index.1b90d9b0.js";import{f as T,u as _}from"./Scrollbar.d017889b.js";import{p as B}from"./index.62f1e1b0.js";import{c as V}from"./create-key.7b548031.js";import{u as I}from"./use-css-vars-class.2322281d.js";import{d as P}from"./Loading.68c8fb32.js";const W=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[T()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[f("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[f("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),L={small:20,medium:18,large:16},O=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),M=S({name:"Spin",props:O,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:n}=C(e),t=h("Spin","-spin",W,x,e,i),c=p(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:r},self:u}=t.value,{opacitySpinning:y,color:g,textColor:b}=u,z=typeof s=="number"?B(s):u[V("size",s)];return{"--n-bezier":r,"--n-opacity-spinning":y,"--n-size":z,"--n-color":g,"--n-text-color":b}}),o=n?I("spin",p(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),c,e):void 0;return{mergedClsPrefix:i,compitableShow:_(e,["spinning","show"]),mergedStrokeWidth:p(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:r}=e;return L[typeof r=="number"?"medium":r]}),cssVars:n?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,i;const{$slots:n,mergedClsPrefix:t,description:c}=this,o=n.icon&&this.rotate,s=(c||n.description)&&a("div",{class:`${t}-spin-description`},c||((e=n.description)===null||e===void 0?void 0:e.call(n))),r=n.icon?a("div",{class:[`${t}-spin-body`,this.themeClass]},a("div",{class:[`${t}-spin`,o&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),s):a("div",{class:[`${t}-spin-body`,this.themeClass]},a(P,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),s);return(i=this.onRender)===null||i===void 0||i.call(this),n.default?a("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},n),a(k,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});function X(){const e=N();return{toRelayInfoView(i){e.push({name:"relay-info",params:{url:i}})}}}const v=w("all-nips",[1,2,4,9,11,12,15,16,20,22,26,28,33,40,42]),d=R(new Set(v.value));$(d,()=>{v.value=[...d.value]});function Y(){return d}export{M as _,Y as a,X as u};
