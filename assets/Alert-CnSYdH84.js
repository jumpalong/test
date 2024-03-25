import{u as H}from"./use-rtl-gkSu3eK_.js";import{c as d,d as t,a as u,b as j,f as M,u as F,g as C,a0 as N,k as p,l as s,L as O,h as r,a1 as W}from"./index-Bp8Ru9nj.js";import{f as V}from"./fade-in-height-expand.cssr-BOUpW_kQ.js";import{g as D}from"./index-vZmvdULR.js";import{u as K}from"./use-css-vars-class-DV7GkkKb.js";import{N as q}from"./Close-sZEX0j0N.js";import{a as G,r as J,d as Q}from"./Button-DF3Ei97P.js";import{N as U}from"./Icon-C2DldZ3i.js";import{E as X,W as Y,I as Z,S as ee}from"./Warning-BHWEvLya.js";const oe=d("alert",`
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
 `),u("closable",[d("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),d("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),V({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
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
 `),u("show-icon",[d("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),u("right-adjust",[d("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),d("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ue=M({name:"Alert",inheritAttrs:!1,props:re,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:g,mergedRtlRef:f}=F(n),h=C("Alert","-alert",oe,N,n,e),z=H("Alert",f,e),v=p(()=>{const{common:{cubicBezierEaseInOut:l},self:o}=h.value,{fontSize:y,borderRadius:I,titleFontWeight:R,lineHeight:_,iconSize:$,iconMargin:m,iconMarginRtl:w,closeIconSize:A,closeBorderRadius:P,closeSize:T,closeMargin:B,closeMarginRtl:S,padding:k}=o,{type:i}=n,{left:L,right:E}=D(m);return{"--n-bezier":l,"--n-color":o[s("color",i)],"--n-close-icon-size":A,"--n-close-border-radius":P,"--n-close-color-hover":o[s("closeColorHover",i)],"--n-close-color-pressed":o[s("closeColorPressed",i)],"--n-close-icon-color":o[s("closeIconColor",i)],"--n-close-icon-color-hover":o[s("closeIconColorHover",i)],"--n-close-icon-color-pressed":o[s("closeIconColorPressed",i)],"--n-icon-color":o[s("iconColor",i)],"--n-border":o[s("border",i)],"--n-title-text-color":o[s("titleTextColor",i)],"--n-content-text-color":o[s("contentTextColor",i)],"--n-line-height":_,"--n-border-radius":I,"--n-font-size":y,"--n-title-font-weight":R,"--n-icon-size":$,"--n-icon-margin":m,"--n-icon-margin-rtl":w,"--n-close-size":T,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":k,"--n-icon-margin-left":L,"--n-icon-margin-right":E}}),c=g?K("alert",p(()=>n.type[0]),v,n):void 0,b=O(!0),x=()=>{const{onAfterLeave:l,onAfterHide:o}=n;l&&l(),o&&o()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:a,visible:b,handleCloseClick:()=>{var l;Promise.resolve((l=n.onClose)===null||l===void 0?void 0:l.call(n)).then(o=>{o!==!1&&(b.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:h,cssVars:g?void 0:v,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),r(Q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,g={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},W(this.$attrs,g)),this.closable&&r(q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},G(a.icon,()=>[r(U,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(ee,null);case"info":return r(Z,null);case"warning":return r(Y,null);case"error":return r(X,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},J(a.header,f=>{const h=f||this.title;return h?r("div",{class:`${e}-alert-body__title`},h):null}),a.default&&r("div",{class:`${e}-alert-body__content`},a))):null}})}});export{ue as _};
