import{b as f,c,a as h,f as C,u as S,g as v,cr as x,k as u,l as k,L as T,R as $,h as o,T as w}from"./index-DVMYH3P6.js";import{f as R}from"./Scrollbar-BXVF4b7l.js";import{p as _}from"./index-vZmvdULR.js";import{u as B}from"./use-css-vars-class-DpRsL9zm.js";import{u as N}from"./use-compitable-CysNw4x-.js";import{h as O}from"./Button-Czpa3xjC.js";const P=f([f("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",`
 position: relative;
 `,[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[R()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),V={small:20,medium:18,large:16},W=Object.assign(Object.assign({},v.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),K=C({name:"Spin",props:W,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:t}=S(e),n=v("Spin","-spin",P,x,e,a),d=u(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:r},self:m}=n.value,{opacitySpinning:y,color:g,textColor:b}=m,z=typeof s=="number"?_(s):m[k("size",s)];return{"--n-bezier":r,"--n-opacity-spinning":y,"--n-size":z,"--n-color":g,"--n-text-color":b}}),i=t?B("spin",u(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),d,e):void 0,p=N(e,["spinning","show"]),l=T(!1);return $(s=>{let r;if(p.value){const{delay:m}=e;if(m){r=window.setTimeout(()=>{l.value=!0},m),s(()=>{clearTimeout(r)});return}}l.value=p.value}),{mergedClsPrefix:a,active:l,mergedStrokeWidth:u(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:r}=e;return V[typeof r=="number"?"medium":r]}),cssVars:t?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,a;const{$slots:t,mergedClsPrefix:n,description:d}=this,i=t.icon&&this.rotate,p=(d||t.description)&&o("div",{class:`${n}-spin-description`},d||((e=t.description)===null||e===void 0?void 0:e.call(t))),l=t.icon?o("div",{class:[`${n}-spin-body`,this.themeClass]},o("div",{class:[`${n}-spin`,i&&`${n}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),p):o("div",{class:[`${n}-spin-body`,this.themeClass]},o(O,{clsPrefix:n,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${n}-spin`}),p);return(a=this.onRender)===null||a===void 0||a.call(this),t.default?o("div",{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),o(w,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}});export{K as _};
