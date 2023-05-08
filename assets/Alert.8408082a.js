import{u as H}from"./use-rtl.6d35c504.js";import{c as f,d as t,a as b,b as N,f as M,u as F,g as C,br as j,k as p,N as O,h as r,aG as W}from"./index.8f62a545.js";import{f as V}from"./fade-in-height-expand.cssr.a4865c47.js";import{a as D}from"./index.62f1e1b0.js";import{c as s}from"./create-key.7b548031.js";import{u as G}from"./use-css-vars-class.1ada0b07.js";import{N as K}from"./Close.dba1bcea.js";import{a as q,r as J}from"./Loading.0b953150.js";import{N as Q}from"./Button.22997a19.js";import{N as U}from"./Icon.1c3d6ebf.js";import{E as X,W as Y,I as Z,S as ee}from"./Warning.6502c178.js";const oe=f("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),b("closable",[f("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),f("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),V({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),b("show-icon",[f("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),f("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[N("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),me=M({name:"Alert",inheritAttrs:!1,props:re,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:u,mergedRtlRef:h}=F(n),d=C("Alert","-alert",oe,j,n,e),z=H("Alert",h,e),g=p(()=>{const{common:{cubicBezierEaseInOut:l},self:o}=d.value,{fontSize:y,borderRadius:I,titleFontWeight:_,lineHeight:R,iconSize:w,iconMargin:m,iconMarginRtl:A,closeIconSize:$,closeBorderRadius:P,closeSize:T,closeMargin:B,closeMarginRtl:S,padding:k}=o,{type:i}=n,{left:E,right:L}=D(m);return{"--n-bezier":l,"--n-color":o[s("color",i)],"--n-close-icon-size":$,"--n-close-border-radius":P,"--n-close-color-hover":o[s("closeColorHover",i)],"--n-close-color-pressed":o[s("closeColorPressed",i)],"--n-close-icon-color":o[s("closeIconColor",i)],"--n-close-icon-color-hover":o[s("closeIconColorHover",i)],"--n-close-icon-color-pressed":o[s("closeIconColorPressed",i)],"--n-icon-color":o[s("iconColor",i)],"--n-border":o[s("border",i)],"--n-title-text-color":o[s("titleTextColor",i)],"--n-content-text-color":o[s("contentTextColor",i)],"--n-line-height":R,"--n-border-radius":I,"--n-font-size":y,"--n-title-font-weight":_,"--n-icon-size":w,"--n-icon-margin":m,"--n-icon-margin-rtl":A,"--n-close-size":T,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":k,"--n-icon-margin-left":E,"--n-icon-margin-right":L}}),c=u?G("alert",p(()=>n.type[0]),g,n):void 0,v=O(!0),x=()=>{const{onAfterLeave:l,onAfterHide:o}=n;l&&l(),o&&o()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:a,visible:v,handleCloseClick:()=>{var l;Promise.resolve((l=n.onClose)===null||l===void 0?void 0:l.call(n)).then(o=>{o!==!1&&(v.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:d,cssVars:u?void 0:g,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),r(Q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,u={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},W(this.$attrs,u)),this.closable&&r(K,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},q(a.icon,()=>[r(U,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(ee,null);case"info":return r(Z,null);case"warning":return r(Y,null);case"error":return r(X,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},J(a.header,h=>{const d=h||this.title;return d?r("div",{class:`${e}-alert-body__title`},d):null}),a.default&&r("div",{class:`${e}-alert-body__content`},a))):null}})}});export{me as _};
