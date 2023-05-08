import{u as U}from"./use-rtl.6d35c504.js";import{b as t,c,aO as X,a,d as n,aP as Y,aQ as Z,f as oo,u as eo,g as x,aR as ro,k as u,h as s}from"./index.8f62a545.js";import{c as h}from"./create-key.7b548031.js";import{a as to}from"./index.62f1e1b0.js";import{u as no}from"./use-css-vars-class.1ada0b07.js";import{r as l,c as ao}from"./Loading.0b953150.js";import{k as so}from"./keysOf.8a025f7e.js";import{N as io}from"./Close.dba1bcea.js";const lo=t([c("card",`
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
 `,[X({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[n("footer",`
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
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Y(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),z={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},xo=so(z),co=Object.assign(Object.assign({},x.props),z),zo=oo({name:"Card",props:co,setup(r){const m=()=>{const{onClose:e}=r;e&&ao(e)},{inlineThemeDisabled:b,mergedClsPrefixRef:o,mergedRtlRef:v}=eo(r),i=x("Card","-card",lo,ro,r,o),p=U("Card",v,o),g=u(()=>{const{size:e}=r,{self:{color:f,colorModal:C,colorTarget:y,textColor:S,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:_,borderRadius:P,lineHeight:R,closeIconColor:T,closeIconColorHover:B,closeIconColorPressed:E,closeColorHover:O,closeColorPressed:j,closeBorderRadius:M,closeIconSize:I,closeSize:F,boxShadow:H,colorPopover:V,colorEmbedded:K,colorEmbeddedModal:L,colorEmbeddedPopover:N,[h("padding",e)]:W,[h("fontSize",e)]:A,[h("titleFontSize",e)]:D},common:{cubicBezierEaseInOut:Q}}=i.value,{top:q,left:G,bottom:J}=to(W);return{"--n-bezier":Q,"--n-border-radius":P,"--n-color":f,"--n-color-modal":C,"--n-color-popover":V,"--n-color-embedded":K,"--n-color-embedded-modal":L,"--n-color-embedded-popover":N,"--n-color-target":y,"--n-text-color":S,"--n-line-height":R,"--n-action-color":_,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":T,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":E,"--n-close-color-hover":O,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":q,"--n-padding-bottom":J,"--n-padding-left":G,"--n-font-size":A,"--n-title-font-size":D,"--n-close-size":F,"--n-close-icon-size":I,"--n-close-border-radius":M}}),d=b?no("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:m,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:r,bordered:m,hoverable:b,mergedClsPrefix:o,rtlEnabled:v,onRender:i,embedded:p,tag:g,$slots:d}=this;return i==null||i(),s(g,{class:[`${o}-card`,this.themeClass,p&&`${o}-card--embedded`,{[`${o}-card--rtl`]:v,[`${o}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${o}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${o}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${o}-card--bordered`]:m,[`${o}-card--hoverable`]:b}],style:this.cssVars,role:this.role},l(d.cover,e=>e&&s("div",{class:`${o}-card-cover`,role:"none"},e)),l(d.header,e=>e||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},e||this.title),l(d["header-extra"],f=>f&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},f)),this.closable?s(io,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),l(d.default,e=>e&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},e)),l(d.footer,e=>e&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},e)]),l(d.action,e=>e&&s("div",{class:`${o}-card__action`,role:"none"},e)))}});export{zo as _,xo as a,z as c};
