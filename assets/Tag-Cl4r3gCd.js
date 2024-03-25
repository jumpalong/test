import{u as ae}from"./use-rtl-CqBkFAUg.js";import{c as ne,a as t,d as g,e as z,b as y,f as te,L as le,u as se,g as M,eb as ie,p as de,N as he,k as R,l as a,h as b,i as ge}from"./index-DVMYH3P6.js";import{g as be}from"./index-vZmvdULR.js";import{u as ve}from"./use-css-vars-class-DpRsL9zm.js";import{l as P,r as I,c as ue}from"./Button-Czpa3xjC.js";import{N as ke}from"./Close-CMpDg3pB.js";const fe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ne("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
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
`,[t("strong",`
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
 `),t("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),t("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),t("icon, avatar",[t("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),t("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),t("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),t("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},M.props),fe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=ge("n-tag"),Re=te({name:"Tag",props:pe,setup(c){const i=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:v,inlineThemeDisabled:u,mergedRtlRef:B}=se(c),f=M("Tag","-tag",Ce,ie,c,v);de(me,{roundRef:he(c,"round")});function k(e){if(!c.disabled&&c.checkable){const{checked:r,onCheckedChange:h,onUpdateChecked:l,"onUpdate:checked":s}=c;l&&l(!r),s&&s(!r),h&&h(!r)}}function C(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:r}=c;r&&ue(r,e)}}const p={setTextContent(e){const{value:r}=i;r&&(r.textContent=e)}},m=ae("Tag",B,v),n=R(()=>{const{type:e,size:r,color:{color:h,textColor:l}={}}=c,{common:{cubicBezierEaseInOut:s},self:{padding:T,closeMargin:w,borderRadius:S,opacityDisabled:O,textColorCheckable:j,textColorHoverCheckable:F,textColorPressedCheckable:H,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:L,closeBorderRadius:W,fontWeightStrong:A,[a("colorBordered",e)]:q,[a("closeSize",r)]:G,[a("closeIconSize",r)]:J,[a("fontSize",r)]:Q,[a("height",r)]:$,[a("color",e)]:X,[a("textColor",e)]:Y,[a("border",e)]:Z,[a("closeIconColor",e)]:_,[a("closeIconColorHover",e)]:ee,[a("closeIconColorPressed",e)]:oe,[a("closeColorHover",e)]:re,[a("closeColorPressed",e)]:ce}}=f.value,x=be(w);return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":s,"--n-border-radius":S,"--n-border":Z,"--n-close-icon-size":J,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":_,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":_,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":G,"--n-color":h||(o.value?q:X),"--n-color-checkable":E,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":L,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":D,"--n-font-size":Q,"--n-height":$,"--n-opacity-disabled":O,"--n-padding":T,"--n-text-color":l||Y,"--n-text-color-checkable":j,"--n-text-color-checked":N,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":H}}),d=u?ve("tag",R(()=>{let e="";const{type:r,size:h,color:{color:l,textColor:s}={}}=c;return e+=r[0],e+=h[0],l&&(e+=`a${P(l)}`),s&&(e+=`b${P(s)}`),o.value&&(e+="c"),e}),n,c):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:v,contentRef:i,mergedBordered:o,handleClick:k,handleCloseClick:C,cssVars:u?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var c,i;const{mergedClsPrefix:o,rtlEnabled:v,closable:u,color:{borderColor:B}={},round:f,onRender:k,$slots:C}=this;k==null||k();const p=I(C.avatar,n=>n&&b("div",{class:`${o}-tag__avatar`},n)),m=I(C.icon,n=>n&&b("div",{class:`${o}-tag__icon`},n));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:v,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(c=this.$slots).default)===null||i===void 0?void 0:i.call(c)),!this.checkable&&u?b(ke,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{Re as _,fe as c,me as t};
