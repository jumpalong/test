import{u as J}from"./use-rtl-CqBkFAUg.js";import{b as t,c,bX as Q,a as d,d as n,ay as U,az as Z,f as ee,u as oe,g as x,bY as re,k as u,l as h,h as s}from"./index-DVMYH3P6.js";import{g as te}from"./index-vZmvdULR.js";import{u as ne}from"./use-css-vars-class-DpRsL9zm.js";import{r as i,c as ae}from"./Button-Czpa3xjC.js";import{N as de}from"./Close-CMpDg3pB.js";import{k as se}from"./keysOf-HiGXOwLp.js";const le=t([c("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q({background:"var(--n-color-modal)"}),d("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1; min-width: 0;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("embedded",`
 background-color: var(--n-color-embedded);
 `)]),U(c("card",`
 background: var(--n-color-modal);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(c("card",`
 background: var(--n-color-popover);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),z={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},he=se(z),ie=Object.assign(Object.assign({},x.props),z),ue=ee({name:"Card",props:ie,setup(r){const m=()=>{const{onClose:o}=r;o&&ae(o)},{inlineThemeDisabled:b,mergedClsPrefixRef:e,mergedRtlRef:v}=oe(r),l=x("Card","-card",le,re,r,e),p=J("Card",v,e),g=u(()=>{const{size:o}=r,{self:{color:f,colorModal:C,colorTarget:y,textColor:S,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:_,borderRadius:T,lineHeight:B,closeIconColor:E,closeIconColorHover:P,closeIconColorPressed:R,closeColorHover:O,closeColorPressed:j,closeBorderRadius:M,closeIconSize:I,closeSize:F,boxShadow:H,colorPopover:V,colorEmbedded:K,colorEmbeddedModal:L,colorEmbeddedPopover:N,[h("padding",o)]:W,[h("fontSize",o)]:A,[h("titleFontSize",o)]:D},common:{cubicBezierEaseInOut:X}}=l.value,{top:Y,left:q,bottom:G}=te(W);return{"--n-bezier":X,"--n-border-radius":T,"--n-color":f,"--n-color-modal":C,"--n-color-popover":V,"--n-color-embedded":K,"--n-color-embedded-modal":L,"--n-color-embedded-popover":N,"--n-color-target":y,"--n-text-color":S,"--n-line-height":B,"--n-action-color":_,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":E,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":R,"--n-close-color-hover":O,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":Y,"--n-padding-bottom":G,"--n-padding-left":q,"--n-font-size":A,"--n-title-font-size":D,"--n-close-size":F,"--n-close-icon-size":I,"--n-close-border-radius":M}}),a=b?ne("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:e,mergedTheme:l,handleCloseClick:m,cssVars:b?void 0:g,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:r,bordered:m,hoverable:b,mergedClsPrefix:e,rtlEnabled:v,onRender:l,embedded:p,tag:g,$slots:a}=this;return l==null||l(),s(g,{class:[`${e}-card`,this.themeClass,p&&`${e}-card--embedded`,{[`${e}-card--rtl`]:v,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:m,[`${e}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(a.cover,o=>o&&s("div",{class:`${e}-card-cover`,role:"none"},o)),i(a.header,o=>o||this.title||this.closable?s("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle},s("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),i(a["header-extra"],f=>f&&s("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},f)),this.closable?s(de,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(a.default,o=>o&&s("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},o)),i(a.footer,o=>o&&[s("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},o)]),i(a.action,o=>o&&s("div",{class:`${e}-card__action`,role:"none"},o)))}});export{ue as _,he as a,z as c};
