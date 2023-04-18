import{p as X,a as Y}from"./LoginCompleteHook.3406e285.js";import{c as a,a as T,b,d as w,i as N,e as Z,f as k,u as A,g as ee,h as K,s as te,p as ne,j as o,k as re,l as ie,m as se,n as oe,t as ae,o as C,q as p,r as le,v as F,w as E,x as B,N as ce,y as H,E as de,z as V,A as z,B as y,C as f,D as $,F as l,K as pe,G as ue,H as L,I as j,J as fe,L as he,M as me,O as ve,_ as ge,P as xe,Q as I}from"./index.243f7ff1.js";import{u as _e}from"./LoginStepsView.05f25507.js";import{F as be}from"./Checkmark.8d7e3126.js";const ze=a("steps",`
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
 `,[N()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[N()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[N()])])]),T("vertical","flex-direction: column;",[Z("show-description",[b(">",[a("step","padding-bottom: 8px;")])]),b(">",[a("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[a("step-indicator",[b(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[w("description","margin-top: 8px;")])])])])])]);function Ce(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function Se(e){return e.map((t,n)=>Ce(t,n))}const ye=Object.assign(Object.assign({},K.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),D=se("n-steps"),ke=k({name:"Steps",props:ye,setup(e,{slots:t}){const{mergedClsPrefixRef:n,mergedRtlRef:s}=A(e),u=ee("Steps",s,n),c=K("Steps","-steps",ze,te,e,n);return ne(D,{props:e,mergedThemeRef:c,mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:u}},render(){const{mergedClsPrefix:e}=this;return o("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Se(re(ie(this))))}}),we={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},$e=k({name:"Step",props:we,setup(e){const t=oe(D,null);t||ae("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:n}=A(),{props:s,mergedThemeRef:u,mergedClsPrefixRef:c,stepsSlots:d}=t,g=C(()=>s.vertical),S=C(()=>{const{status:r}=e;if(r)return r;{const{internalIndex:i}=e,{current:h}=s;if(h===void 0)return"process";if(i<h)return"finish";if(i===h)return s.status||"process";if(i>h)return"wait"}return"process"}),m=C(()=>{const{value:r}=S,{size:i}=s,{common:{cubicBezierEaseInOut:h},self:{stepHeaderFontWeight:P,[p("stepHeaderFontSize",i)]:x,[p("indicatorIndexFontSize",i)]:_,[p("indicatorSize",i)]:O,[p("indicatorIconSize",i)]:U,[p("indicatorTextColor",r)]:W,[p("indicatorBorderColor",r)]:M,[p("headerTextColor",r)]:q,[p("splitorColor",r)]:G,[p("indicatorColor",r)]:J,[p("descriptionTextColor",r)]:Q}}=u.value;return{"--n-bezier":h,"--n-description-text-color":Q,"--n-header-text-color":q,"--n-indicator-border-color":M,"--n-indicator-color":J,"--n-indicator-icon-size":U,"--n-indicator-index-font-size":_,"--n-indicator-size":O,"--n-indicator-text-color":W,"--n-splitor-color":G,"--n-step-header-font-size":x,"--n-step-header-font-weight":P}}),v=n?le("step",C(()=>{const{value:r}=S,{size:i}=s;return`${r[0]}${i[0]}`}),m,s):void 0,R=C(()=>{if(e.disabled)return;const{onUpdateCurrent:r,"onUpdate:current":i}=s;return r||i?()=>{r&&F(r,e.internalIndex),i&&F(i,e.internalIndex)}:void 0});return{stepsSlots:d,mergedClsPrefix:c,vertical:g,mergedStatus:S,handleStepClick:R,cssVars:n?void 0:m,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:s}=this,u=E(this.$slots.default,c=>{const d=c||this.description;return d?o("div",{class:`${e}-step-content__description`},d):null});return t==null||t(),o("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&n&&`${e}-step--clickable`,this.themeClass,u&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},o("div",{class:`${e}-step-indicator`},o("div",{class:`${e}-step-indicator-slot`},o(ce,null,{default:()=>E(this.$slots.icon,c=>{const{mergedStatus:d,stepsSlots:g}=this;return d==="finish"||d==="error"?d==="finish"?o(H,{clsPrefix:e,key:"finish"},{default:()=>B(g["finish-icon"],()=>[o(be,null)])}):d==="error"?o(H,{clsPrefix:e,key:"error"},{default:()=>B(g["error-icon"],()=>[o(de,null)])}):null:c||o("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${e}-step-splitor`}):null),o("div",{class:`${e}-step-content`},o("div",{class:`${e}-step-content-header`},o("div",{class:`${e}-step-content-header__title`},B(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${e}-step-splitor`})),u))}}),Ie=k({__name:"LoginCompleteHook",props:{mapKey:null},setup(e){const t=e,n=C(()=>t.mapKey);return X(n),(s,u)=>V(s.$slots,"default")}}),Re=k({__name:"LoginCompleteHookProvide",setup(e){return Y(),(t,n)=>V(t.$slots,"default")}}),Fe=k({__name:"LoginStepsView",setup(e){const{withPrevStep:t,withNestStep:n,prevStep:s,nextStep:u,current:c,name:d,numberOfSteps:g}=_e();async function S(m){await(m==null?void 0:m()),await u()}return(m,v)=>{const R=$e,r=ke,i=ge,h=xe("router-view");return z(),y(Re,null,{default:f(()=>[$(h,null,{default:f(({Component:P})=>[$(Ie,{"map-key":String(l(c))},{default:f(()=>[(z(),y(pe,null,[(z(),y(ue(P),null,{"prev-step":f(({disabled:x})=>[l(t)?(z(),y(i,{key:0,disabled:x,class:"w-full",onClick:l(s)},{default:f(()=>[L(j(l(I)("previous_step")),1)]),_:2},1032,["disabled","onClick"])):fe("",!0)]),"next-step":f(({disabled:x,next:_})=>[$(i,{type:l(n)?"primary":"success",disabled:x,class:"w-full",onClick:()=>S(_)},{default:f(()=>[L(j(l(n)?l(I)("next_step"):l(I)("complete")),1)]),_:2},1032,["type","disabled","onClick"])]),default:f(()=>[$(r,{class:"m-1",size:"small",current:l(c)},{default:f(()=>[(z(!0),he(ve,null,me(Array.from({length:l(g)}),(x,_)=>(z(),y(R,{key:_,title:_===l(c)-1?l(I)(l(d)):"",description:""},null,8,["title"]))),128))]),_:1},8,["current"])]),_:2},1024))],1024))]),_:2},1032,["map-key"])]),_:1})]),_:1})}}});export{Fe as default};
