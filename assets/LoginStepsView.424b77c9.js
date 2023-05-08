import{p as X,a as Y}from"./LoginCompleteHook.d341cb2e.js";import{c as a,a as T,b,d as w,e as Z,f as k,u as A,g as K,s as ee,p as te,h as s,i as ne,j as re,t as ie,k as C,r as V,o as z,l as y,w as m,m as $,n as l,K as oe,q as se,v as F,x as E,y as ae,z as le,A as ce,F as de,B as pe,C as I}from"./index.1b90d9b0.js";import{u as ue}from"./LoginStepsView.067ab6c2.js";import{i as P,c as j,r as H,a as B,N as me}from"./Loading.68c8fb32.js";import{u as fe}from"./use-rtl.e3f5641a.js";import{f as he}from"./is-browser.21659b45.js";import{g as ve}from"./get-slot.4ceacf82.js";import{c as p}from"./create-key.7b548031.js";import{u as ge}from"./use-css-vars-class.2322281d.js";import{N as L}from"./Icon.8b94fe05.js";import{F as xe}from"./Checkmark.c34e0225.js";import{E as _e}from"./Close.dda15693.js";import{_ as be}from"./Button.426eb201.js";import"./use.1e6bcf04.js";import"./nostr.754d0882.js";import"./Staff.e039c64f.js";import"./use-style.d41c90c3.js";import"./replaceable.3760d7d0.js";const ze=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[T("disabled","cursor: not-allowed"),T("clickable",`
 cursor: pointer;
 `),b("&:last-child",[a("step-splitor","display: none;")])]),a("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),a("step-content","flex: 1;",[a("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("title",`
 white-space: nowrap;
 flex: 0;
 `)]),w("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),a("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[a("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[w("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[P()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[P()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[P()])])]),T("vertical","flex-direction: column;",[Z("show-description",[b(">",[a("step","padding-bottom: 8px;")])]),b(">",[a("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[a("step-indicator",[b(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[w("description","margin-top: 8px;")])])])])])]);function Ce(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function Se(e){return e.map((t,n)=>Ce(t,n))}const ye=Object.assign(Object.assign({},K.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),U=ne("n-steps"),ke=k({name:"Steps",props:ye,setup(e,{slots:t}){const{mergedClsPrefixRef:n,mergedRtlRef:o}=A(e),u=fe("Steps",o,n),c=K("Steps","-steps",ze,ee,e,n);return te(U,{props:e,mergedThemeRef:c,mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:u}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Se(he(ve(this))))}}),we={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},$e=k({name:"Step",props:we,setup(e){const t=re(U,null);t||ie("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:n}=A(),{props:o,mergedThemeRef:u,mergedClsPrefixRef:c,stepsSlots:d}=t,g=C(()=>o.vertical),S=C(()=>{const{status:r}=e;if(r)return r;{const{internalIndex:i}=e,{current:f}=o;if(f===void 0)return"process";if(i<f)return"finish";if(i===f)return o.status||"process";if(i>f)return"wait"}return"process"}),h=C(()=>{const{value:r}=S,{size:i}=o,{common:{cubicBezierEaseInOut:f},self:{stepHeaderFontWeight:N,[p("stepHeaderFontSize",i)]:x,[p("indicatorIndexFontSize",i)]:_,[p("indicatorSize",i)]:D,[p("indicatorIconSize",i)]:O,[p("indicatorTextColor",r)]:W,[p("indicatorBorderColor",r)]:M,[p("headerTextColor",r)]:q,[p("splitorColor",r)]:G,[p("indicatorColor",r)]:J,[p("descriptionTextColor",r)]:Q}}=u.value;return{"--n-bezier":f,"--n-description-text-color":Q,"--n-header-text-color":q,"--n-indicator-border-color":M,"--n-indicator-color":J,"--n-indicator-icon-size":O,"--n-indicator-index-font-size":_,"--n-indicator-size":D,"--n-indicator-text-color":W,"--n-splitor-color":G,"--n-step-header-font-size":x,"--n-step-header-font-weight":N}}),v=n?ge("step",C(()=>{const{value:r}=S,{size:i}=o;return`${r[0]}${i[0]}`}),h,o):void 0,R=C(()=>{if(e.disabled)return;const{onUpdateCurrent:r,"onUpdate:current":i}=o;return r||i?()=>{r&&j(r,e.internalIndex),i&&j(i,e.internalIndex)}:void 0});return{stepsSlots:d,mergedClsPrefix:c,vertical:g,mergedStatus:S,handleStepClick:R,cssVars:n?void 0:h,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:o}=this,u=H(this.$slots.default,c=>{const d=c||this.description;return d?s("div",{class:`${e}-step-content__description`},d):null});return t==null||t(),s("div",{class:[`${e}-step`,o&&`${e}-step--disabled`,!o&&n&&`${e}-step--clickable`,this.themeClass,u&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},s("div",{class:`${e}-step-indicator`},s("div",{class:`${e}-step-indicator-slot`},s(me,null,{default:()=>H(this.$slots.icon,c=>{const{mergedStatus:d,stepsSlots:g}=this;return d==="finish"||d==="error"?d==="finish"?s(L,{clsPrefix:e,key:"finish"},{default:()=>B(g["finish-icon"],()=>[s(xe,null)])}):d==="error"?s(L,{clsPrefix:e,key:"error"},{default:()=>B(g["error-icon"],()=>[s(_e,null)])}):null:c||s("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?s("div",{class:`${e}-step-splitor`}):null),s("div",{class:`${e}-step-content`},s("div",{class:`${e}-step-content-header`},s("div",{class:`${e}-step-content-header__title`},B(this.$slots.title,()=>[this.title])),this.vertical?null:s("div",{class:`${e}-step-splitor`})),u))}}),Ie=k({__name:"LoginCompleteHook",props:{mapKey:null},setup(e){const t=e,n=C(()=>t.mapKey);return X(n),(o,u)=>V(o.$slots,"default")}}),Re=k({__name:"LoginCompleteHookProvide",setup(e){return Y(),(t,n)=>V(t.$slots,"default")}}),Ge=k({__name:"LoginStepsView",setup(e){const{withPrevStep:t,withNestStep:n,prevStep:o,nextStep:u,current:c,name:d,numberOfSteps:g}=ue();async function S(h){await(h==null?void 0:h()),await u()}return(h,v)=>{const R=$e,r=ke,i=be,f=pe("router-view");return z(),y(Re,null,{default:m(()=>[$(f,null,{default:m(({Component:N})=>[$(Ie,{"map-key":String(l(c))},{default:m(()=>[(z(),y(oe,null,[(z(),y(se(N),null,{"prev-step":m(({disabled:x})=>[l(t)?(z(),y(i,{key:0,disabled:x,class:"w-full",onClick:l(o)},{default:m(()=>[F(E(l(I)("previous_step")),1)]),_:2},1032,["disabled","onClick"])):ae("",!0)]),"next-step":m(({disabled:x,next:_})=>[$(i,{type:l(n)?"primary":"success",disabled:x,class:"w-full",onClick:()=>S(_)},{default:m(()=>[F(E(l(n)?l(I)("next_step"):l(I)("complete")),1)]),_:2},1032,["type","disabled","onClick"])]),default:m(()=>[$(r,{class:"m-1",size:"small",current:l(c)},{default:m(()=>[(z(!0),le(de,null,ce(Array.from({length:l(g)}),(x,_)=>(z(),y(R,{key:_,title:_===l(c)-1?l(I)(l(d)):"",description:""},null,8,["title"]))),128))]),_:1},8,["current"])]),_:2},1024))],1024))]),_:2},1032,["map-key"])]),_:1})]),_:1})}}});export{Ge as default};
