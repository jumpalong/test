import{u as ne}from"./use-rtl.6d35c504.js";import{c as ae,a as l,d as g,e as x,b as z,f as le,N as te,u as se,g as I,dr as ie,p as de,M as he,k as R,h as b,i as ge}from"./index.8f62a545.js";import{c as n}from"./create-key.7b548031.js";import{u as be}from"./use-css-vars-class.1ada0b07.js";import{d as _}from"./Button.22997a19.js";import{r as P,c as ue}from"./Loading.0b953150.js";import{N as ve}from"./Close.dba1bcea.js";const fe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},ke=ae("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[x("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[x("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[x("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[x("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ce=Object.assign(Object.assign(Object.assign({},I.props),fe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),pe=ge("n-tag"),_e=le({name:"Tag",props:Ce,setup(c){const i=te(null),{mergedBorderedRef:o,mergedClsPrefixRef:u,inlineThemeDisabled:v,mergedRtlRef:y}=se(c),k=I("Tag","-tag",ke,ie,c,u);de(pe,{roundRef:he(c,"round")});function f(e){if(!c.disabled&&c.checkable){const{checked:r,onCheckedChange:h,onUpdateChecked:t,"onUpdate:checked":s}=c;t&&t(!r),s&&s(!r),h&&h(!r)}}function C(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:r}=c;r&&ue(r,e)}}const p={setTextContent(e){const{value:r}=i;r&&(r.textContent=e)}},m=ne("Tag",y,u),a=R(()=>{const{type:e,size:r,color:{color:h,textColor:t}={}}=c,{common:{cubicBezierEaseInOut:s},self:{padding:M,closeMargin:T,closeMarginRtl:w,borderRadius:S,opacityDisabled:O,textColorCheckable:j,textColorHoverCheckable:F,textColorPressedCheckable:H,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:K,colorChecked:V,colorCheckedHover:D,colorCheckedPressed:W,closeBorderRadius:A,fontWeightStrong:L,[n("colorBordered",e)]:q,[n("closeSize",r)]:G,[n("closeIconSize",r)]:J,[n("fontSize",r)]:Q,[n("height",r)]:B,[n("color",e)]:X,[n("textColor",e)]:Y,[n("border",e)]:Z,[n("closeIconColor",e)]:$,[n("closeIconColorHover",e)]:ee,[n("closeIconColorPressed",e)]:oe,[n("closeColorHover",e)]:re,[n("closeColorPressed",e)]:ce}}=k.value;return{"--n-font-weight-strong":L,"--n-avatar-size-override":`calc(${B} - 8px)`,"--n-bezier":s,"--n-border-radius":S,"--n-border":Z,"--n-close-icon-size":J,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":A,"--n-close-icon-color":$,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":$,"--n-close-margin":T,"--n-close-margin-rtl":w,"--n-close-size":G,"--n-color":h||(o.value?q:X),"--n-color-checkable":E,"--n-color-checked":V,"--n-color-checked-hover":D,"--n-color-checked-pressed":W,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":K,"--n-font-size":Q,"--n-height":B,"--n-opacity-disabled":O,"--n-padding":M,"--n-text-color":t||Y,"--n-text-color-checkable":j,"--n-text-color-checked":N,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":H}}),d=v?be("tag",R(()=>{let e="";const{type:r,size:h,color:{color:t,textColor:s}={}}=c;return e+=r[0],e+=h[0],t&&(e+=`a${_(t)}`),s&&(e+=`b${_(s)}`),o.value&&(e+="c"),e}),a,c):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:u,contentRef:i,mergedBordered:o,handleClick:f,handleCloseClick:C,cssVars:v?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var c,i;const{mergedClsPrefix:o,rtlEnabled:u,closable:v,color:{borderColor:y}={},round:k,onRender:f,$slots:C}=this;f==null||f();const p=P(C.avatar,a=>a&&b("div",{class:`${o}-tag__avatar`},a)),m=P(C.icon,a=>a&&b("div",{class:`${o}-tag__icon`},a));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:u,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:k,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:v}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(c=this.$slots).default)===null||i===void 0?void 0:i.call(c)),!this.checkable&&v?b(ve,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:k,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:y}}):null)}});export{_e as _,fe as c,pe as t};
