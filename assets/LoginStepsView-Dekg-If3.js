import{p as Q,a as X}from"./LoginCompleteHook-CziC0XUm.js";import{c as a,a as R,b as _,d as w,e as Y,f as k,u as L,g as A,s as Z,p as ee,h as s,i as te,j as ne,t as re,k as C,l as p,r as K,o as z,m as y,w as f,n as $,q as m,K as ie,x as oe,y as B,z as F,A as se,B as ae,C as le,F as ce,D as de}from"./index-DVMYH3P6.js";import{u as pe}from"./LoginStepsView-BtdrX1Gr.js";import{i as T,c as E,r as j,a as P,N as ue,b as fe}from"./Button-Czpa3xjC.js";import{u as me}from"./use-rtl-CqBkFAUg.js";import{f as he}from"./is-browser-BikuuYFQ.js";import{g as ve}from"./get-slot-Bk_rJcZu.js";import{u as ge}from"./use-css-vars-class-DpRsL9zm.js";import{N as H}from"./Icon-DjYnwRew.js";import{F as xe}from"./Checkmark-C3ejFAAO.js";import{E as be}from"./Close-Dj7wgTNH.js";import"./ProvideEventLine-BcjESPsS.js";import"./utils-BXkRfzfk.js";import"./replaceable-DvMWTdGr.js";const _e=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[R("disabled","cursor: not-allowed"),R("clickable",`
 cursor: pointer;
 `),_("&:last-child",[a("step-splitor","display: none;")])]),a("step-splitor",`
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
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[T()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[T()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[T()])])]),R("vertical","flex-direction: column;",[Y("show-description",[_(">",[a("step","padding-bottom: 8px;")])]),_(">",[a("step","margin-bottom: 16px;",[_("&:last-child","margin-bottom: 0;"),_(">",[a("step-indicator",[_(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[w("description","margin-top: 8px;")])])])])])]);function ze(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function Ce(e){return e.map((t,n)=>ze(t,n))}const Se=Object.assign(Object.assign({},A.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),V=te("n-steps"),ye=k({name:"Steps",props:Se,setup(e,{slots:t}){const{mergedClsPrefixRef:n,mergedRtlRef:o}=L(e),u=me("Steps",o,n),l=A("Steps","-steps",_e,Z,e,n);return ee(V,{props:e,mergedThemeRef:l,mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:u}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Ce(he(ve(this))))}}),ke={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},we=k({name:"Step",props:ke,setup(e){const t=ne(V,null);t||re("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:n}=L(),{props:o,mergedThemeRef:u,mergedClsPrefixRef:l,stepsSlots:c}=t,g=C(()=>o.vertical),S=C(()=>{const{status:r}=e;if(r)return r;{const{internalIndex:i}=e,{current:h}=o;if(h===void 0)return"process";if(i<h)return"finish";if(i===h)return o.status||"process";if(i>h)return"wait"}return"process"}),d=C(()=>{const{value:r}=S,{size:i}=o,{common:{cubicBezierEaseInOut:h},self:{stepHeaderFontWeight:N,[p("stepHeaderFontSize",i)]:x,[p("indicatorIndexFontSize",i)]:b,[p("indicatorSize",i)]:D,[p("indicatorIconSize",i)]:U,[p("indicatorTextColor",r)]:O,[p("indicatorBorderColor",r)]:W,[p("headerTextColor",r)]:M,[p("splitorColor",r)]:q,[p("indicatorColor",r)]:G,[p("descriptionTextColor",r)]:J}}=u.value;return{"--n-bezier":h,"--n-description-text-color":J,"--n-header-text-color":M,"--n-indicator-border-color":W,"--n-indicator-color":G,"--n-indicator-icon-size":U,"--n-indicator-index-font-size":b,"--n-indicator-size":D,"--n-indicator-text-color":O,"--n-splitor-color":q,"--n-step-header-font-size":x,"--n-step-header-font-weight":N}}),v=n?ge("step",C(()=>{const{value:r}=S,{size:i}=o;return`${r[0]}${i[0]}`}),d,o):void 0,I=C(()=>{if(e.disabled)return;const{onUpdateCurrent:r,"onUpdate:current":i}=o;return r||i?()=>{r&&E(r,e.internalIndex),i&&E(i,e.internalIndex)}:void 0});return{stepsSlots:c,mergedClsPrefix:l,vertical:g,mergedStatus:S,handleStepClick:I,cssVars:n?void 0:d,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:o}=this,u=j(this.$slots.default,l=>{const c=l||this.description;return c?s("div",{class:`${e}-step-content__description`},c):null});return t==null||t(),s("div",{class:[`${e}-step`,o&&`${e}-step--disabled`,!o&&n&&`${e}-step--clickable`,this.themeClass,u&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},s("div",{class:`${e}-step-indicator`},s("div",{class:`${e}-step-indicator-slot`},s(ue,null,{default:()=>j(this.$slots.icon,l=>{const{mergedStatus:c,stepsSlots:g}=this;return c==="finish"||c==="error"?c==="finish"?s(H,{clsPrefix:e,key:"finish"},{default:()=>P(g["finish-icon"],()=>[s(xe,null)])}):c==="error"?s(H,{clsPrefix:e,key:"error"},{default:()=>P(g["error-icon"],()=>[s(be,null)])}):null:l||s("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?s("div",{class:`${e}-step-splitor`}):null),s("div",{class:`${e}-step-content`},s("div",{class:`${e}-step-content-header`},s("div",{class:`${e}-step-content-header__title`},P(this.$slots.title,()=>[this.title])),this.vertical?null:s("div",{class:`${e}-step-splitor`})),u))}}),$e=k({__name:"LoginCompleteHook",props:{mapKey:{}},setup(e){const t=e,n=C(()=>t.mapKey);return Q(n),(o,u)=>K(o.$slots,"default")}}),Ie=k({__name:"LoginCompleteHookProvide",setup(e){return X(),(t,n)=>K(t.$slots,"default")}}),Ue=k({__name:"LoginStepsView",setup(e){const{withPrevStep:t,withNestStep:n,prevStep:o,nextStep:u,current:l,name:c,numberOfSteps:g}=pe();async function S(d){await(d==null?void 0:d()),await u()}return(d,v)=>{const I=we,r=ye,i=fe,h=de("router-view");return z(),y(Ie,null,{default:f(()=>[$(h,null,{default:f(({Component:N})=>[$($e,{"map-key":String(m(l))},{default:f(()=>[(z(),y(ie,null,[(z(),y(oe(N),null,{"prev-step":f(({disabled:x})=>[m(t)?(z(),y(i,{key:0,disabled:x,class:"w-full",onClick:m(o)},{default:f(()=>[B(F(d.t("previous_step")),1)]),_:2},1032,["disabled","onClick"])):se("",!0)]),"next-step":f(({disabled:x,next:b})=>[$(i,{type:m(n)?"primary":"success",disabled:x,class:"w-full",onClick:()=>S(b)},{default:f(()=>[B(F(m(n)?d.t("next_step"):d.t("complete")),1)]),_:2},1032,["type","disabled","onClick"])]),default:f(()=>[$(r,{class:"m-1",size:"small",current:m(l)},{default:f(()=>[(z(!0),ae(ce,null,le(Array.from({length:m(g)}),(x,b)=>(z(),y(I,{key:b,title:b===m(l)-1?d.t(m(c)):"",description:""},null,8,["title"]))),128))]),_:1},8,["current"])]),_:2},1024))],1024))]),_:2},1032,["map-key"])]),_:1})]),_:1})}}});export{Ue as default};
