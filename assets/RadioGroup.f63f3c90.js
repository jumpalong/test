import{u as G}from"./use-rtl.e3f5641a.js";import{i as re,N as F,j as ne,M as A,U as O,u as H,c as _,a as v,d as s,b as R,e as j,f as N,g as $,dS as M,k as V,h as y,p as ae}from"./index.1b90d9b0.js";import{c as D}from"./create-key.7b548031.js";import{u as K}from"./use-css-vars-class.2322281d.js";import{u as L,c as I,r as ie}from"./Loading.68c8fb32.js";import{u as W}from"./cssr.ebdd28c2.js";import{f as de}from"./is-browser.21659b45.js";import{g as se}from"./get-slot.4ceacf82.js";const le={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},Y=re("n-radio-group");function ue(e){const o=L(e,{mergedSize(n){const{size:l}=e;if(l!==void 0)return l;if(t){const{mergedSizeRef:{value:b}}=t;if(b!==void 0)return b}return n?n.mergedSize.value:"medium"},mergedDisabled(n){return!!(e.disabled||t!=null&&t.disabledRef.value||n!=null&&n.disabled.value)}}),{mergedSizeRef:r,mergedDisabledRef:i}=o,a=F(null),g=F(null),t=ne(Y,null),c=F(e.defaultChecked),d=A(e,"checked"),p=W(d,c),m=O(()=>t?t.valueRef.value===e.value:p.value),w=O(()=>{const{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),f=F(!1);function C(){if(t){const{doUpdateValue:n}=t,{value:l}=e;I(n,l)}else{const{onUpdateChecked:n,"onUpdate:checked":l}=e,{nTriggerFormInput:b,nTriggerFormChange:u}=o;n&&I(n,!0),l&&I(l,!0),b(),u(),c.value=!0}}function x(){i.value||m.value||C()}function k(){x()}function z(){f.value=!1}function S(){f.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:H(e).mergedClsPrefixRef,inputRef:a,labelRef:g,mergedName:w,mergedDisabled:i,uncontrolledChecked:c,renderSafeChecked:m,focus:f,mergedSize:r,handleRadioInputChange:k,handleRadioInputBlur:z,handleRadioInputFocus:S}}const ce=_("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[v("checked",[s("dot",`
 background-color: var(--n-color-active);
 `)]),s("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),_("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),s("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),v("checked",{boxShadow:"var(--n-box-shadow-active)"},[R("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),s("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),j("disabled",`
 cursor: pointer;
 `,[R("&:hover",[s("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),v("focus",[R("&:not(:active)",[s("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),v("disabled",`
 cursor: not-allowed;
 `,[s("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[R("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),v("checked",`
 opacity: 1;
 `)]),s("label",{color:"var(--n-text-color-disabled)"}),_("radio-input",`
 cursor: not-allowed;
 `)])]),ke=N({name:"Radio",props:Object.assign(Object.assign({},$.props),le),setup(e){const o=ue(e),r=$("Radio","-radio",ce,M,e,o.mergedClsPrefix),i=V(()=>{const{mergedSize:{value:p}}=o,{common:{cubicBezierEaseInOut:m},self:{boxShadow:w,boxShadowActive:f,boxShadowDisabled:C,boxShadowFocus:x,boxShadowHover:k,color:z,colorDisabled:S,colorActive:n,textColor:l,textColorDisabled:b,dotColorActive:u,dotColorDisabled:h,labelPadding:B,labelLineHeight:T,labelFontWeight:U,[D("fontSize",p)]:E,[D("radioSize",p)]:P}}=r.value;return{"--n-bezier":m,"--n-label-line-height":T,"--n-label-font-weight":U,"--n-box-shadow":w,"--n-box-shadow-active":f,"--n-box-shadow-disabled":C,"--n-box-shadow-focus":x,"--n-box-shadow-hover":k,"--n-color":z,"--n-color-active":n,"--n-color-disabled":S,"--n-dot-color-active":u,"--n-dot-color-disabled":h,"--n-font-size":E,"--n-radio-size":P,"--n-text-color":l,"--n-text-color-disabled":b,"--n-label-padding":B}}),{inlineThemeDisabled:a,mergedClsPrefixRef:g,mergedRtlRef:t}=H(e),c=G("Radio",t,g),d=a?K("radio",V(()=>o.mergedSize.value[0]),i,e):void 0;return Object.assign(o,{rtlEnabled:c,cssVars:a?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){const{$slots:e,mergedClsPrefix:o,onRender:r,label:i}=this;return r==null||r(),y("label",{class:[`${o}-radio`,this.themeClass,{[`${o}-radio--rtl`]:this.rtlEnabled,[`${o}-radio--disabled`]:this.mergedDisabled,[`${o}-radio--checked`]:this.renderSafeChecked,[`${o}-radio--focus`]:this.focus}],style:this.cssVars},y("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),y("div",{class:`${o}-radio__dot-wrapper`},"\xA0",y("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),ie(e.default,a=>!a&&!i?null:y("div",{ref:"labelRef",class:`${o}-radio__label`},a||i)))}}),be=_("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[s("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[v("checked",{backgroundColor:"var(--n-button-border-color-active)"}),v("disabled",{opacity:"var(--n-opacity-disabled)"})]),v("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[_("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),s("splitor",{height:"var(--n-height)"})]),_("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[_("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),s("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),R("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[s("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),R("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[s("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),j("disabled",`
 cursor: pointer;
 `,[R("&:hover",[s("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),j("checked",{color:"var(--n-button-text-color-hover)"})]),v("focus",[R("&:not(:active)",[s("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),v("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),v("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function he(e,o,r){var i;const a=[];let g=!1;for(let t=0;t<e.length;++t){const c=e[t],d=(i=c.type)===null||i===void 0?void 0:i.name;d==="RadioButton"&&(g=!0);const p=c.props;if(d!=="RadioButton"){a.push(c);continue}if(t===0)a.push(c);else{const m=a[a.length-1].props,w=o===m.value,f=m.disabled,C=o===p.value,x=p.disabled,k=(w?2:0)+(f?0:1),z=(C?2:0)+(x?0:1),S={[`${r}-radio-group__splitor--disabled`]:f,[`${r}-radio-group__splitor--checked`]:w},n={[`${r}-radio-group__splitor--disabled`]:x,[`${r}-radio-group__splitor--checked`]:C},l=k<z?n:S;a.push(y("div",{class:[`${r}-radio-group__splitor`,l]}),c)}}return{children:a,isButtonGroup:g}}const fe=Object.assign(Object.assign({},$.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ze=N({name:"RadioGroup",props:fe,setup(e){const o=F(null),{mergedSizeRef:r,mergedDisabledRef:i,nTriggerFormChange:a,nTriggerFormInput:g,nTriggerFormBlur:t,nTriggerFormFocus:c}=L(e),{mergedClsPrefixRef:d,inlineThemeDisabled:p,mergedRtlRef:m}=H(e),w=$("Radio","-radio-group",be,M,e,d),f=F(e.defaultValue),C=A(e,"value"),x=W(C,f);function k(u){const{onUpdateValue:h,"onUpdate:value":B}=e;h&&I(h,u),B&&I(B,u),f.value=u,a(),g()}function z(u){const{value:h}=o;!h||h.contains(u.relatedTarget)||c()}function S(u){const{value:h}=o;!h||h.contains(u.relatedTarget)||t()}ae(Y,{mergedClsPrefixRef:d,nameRef:A(e,"name"),valueRef:x,disabledRef:i,mergedSizeRef:r,doUpdateValue:k});const n=G("Radio",m,d),l=V(()=>{const{value:u}=r,{common:{cubicBezierEaseInOut:h},self:{buttonBorderColor:B,buttonBorderColorActive:T,buttonBorderRadius:U,buttonBoxShadow:E,buttonBoxShadowFocus:P,buttonBoxShadowHover:q,buttonColorActive:J,buttonTextColor:Q,buttonTextColorActive:X,buttonTextColorHover:Z,opacityDisabled:ee,[D("buttonHeight",u)]:oe,[D("fontSize",u)]:te}}=w.value;return{"--n-font-size":te,"--n-bezier":h,"--n-button-border-color":B,"--n-button-border-color-active":T,"--n-button-border-radius":U,"--n-button-box-shadow":E,"--n-button-box-shadow-focus":P,"--n-button-box-shadow-hover":q,"--n-button-color-active":J,"--n-button-text-color":Q,"--n-button-text-color-hover":Z,"--n-button-text-color-active":X,"--n-height":oe,"--n-opacity-disabled":ee}}),b=p?K("radio-group",V(()=>r.value[0]),l,e):void 0;return{selfElRef:o,rtlEnabled:n,mergedClsPrefix:d,mergedValue:x,handleFocusout:S,handleFocusin:z,cssVars:p?void 0:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:i,handleFocusout:a}=this,{children:g,isButtonGroup:t}=he(de(se(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),y("div",{onFocusin:i,onFocusout:a,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,t&&`${r}-radio-group--button-group`],style:this.cssVars},g)}});export{ze as _,ke as a};
