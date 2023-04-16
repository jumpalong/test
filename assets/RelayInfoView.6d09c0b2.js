import{b as f,c as l,cA as S,a as m,f as C,u as x,h,cB as w,n as d,cC as k,o as R,q as $,c4 as B,j as a,aB as T,bg as _,aw as N,av as V,aC as I,S as P}from"./index.d4beb9d4.js";const W=f([f("@keyframes spin-rotate",`
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
 `,[S()])]),l("spin-body",`
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
 `,[m("rotate",`
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
 `,[m("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),j={small:20,medium:18,large:16},O=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),L=C({name:"Spin",props:O,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:n}=x(e),t=h("Spin","-spin",W,w,e,i),c=d(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:r},self:u}=t.value,{opacitySpinning:y,color:g,textColor:b}=u,z=typeof s=="number"?k(s):u[R("size",s)];return{"--n-bezier":r,"--n-opacity-spinning":y,"--n-size":z,"--n-color":g,"--n-text-color":b}}),o=n?$("spin",d(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),c,e):void 0;return{mergedClsPrefix:i,compitableShow:B(e,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:r}=e;return j[typeof r=="number"?"medium":r]}),cssVars:n?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,i;const{$slots:n,mergedClsPrefix:t,description:c}=this,o=n.icon&&this.rotate,s=(c||n.description)&&a("div",{class:`${t}-spin-description`},c||((e=n.description)===null||e===void 0?void 0:e.call(n))),r=n.icon?a("div",{class:[`${t}-spin-body`,this.themeClass]},a("div",{class:[`${t}-spin`,o&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),s):a("div",{class:[`${t}-spin-body`,this.themeClass]},a(T,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),s);return(i=this.onRender)===null||i===void 0||i.call(this),n.default?a("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},n),a(_,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});function D(){const e=P();return{toRelayInfoView(i){e.push({name:"relay-info",params:{url:i}})}}}const v=N("all-nips",[1,2,4,9,11,12,15,16,20,22,26,28,33,40,42]),p=V(new Set(v.value));I(p,()=>{v.value=[...p.value]});function E(){return p}export{L as _,E as a,D as u};
