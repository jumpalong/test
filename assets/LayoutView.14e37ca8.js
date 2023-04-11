import{f as B,j as u,l as ne,c as h,a as P,h as Y,ap as F,u as ue,cx as _e,p as Q,cy as Be,n as p,q as me,aI as Ve,d as m,b as S,x as Ee,m as G,bz as fe,aB as ge,au as ce,r as D,bc as Z,L as he,aD as be,c8 as eo,c5 as Fe,bB as xe,bk as pe,e as ie,c6 as oo,cz as to,aG as Ie,bV as no,y as A,I as O,H as v,A as T,aP as _,F as J,C as k,aY as se,D as oe,c3 as Re,cA as Pe,O as V,G as te,bX as ro,bY as lo,bG as io,cB as ao,_ as ve,cC as co,bl as so,cD as uo,Q as we,aw as de,ad as Te,aq as mo,z as re,c4 as ho,cg as vo,aX as fo,cE as po,S as go,a6 as bo,bt as j,aO as _o,cF as xo,cG as wo,cH as yo,cI as Co,bs as zo,cJ as So,T as ko,cK as $o}from"./index.0e420a7a.js";import{F as Io}from"./Favicon.63e6f726.js";import{C as Ro}from"./CloudUpload.d0cb87ab.js";import{N as ee}from"./Icon.80a71b9a.js";import{_ as Po}from"./Empty.3f22b2fc.js";import{h as To,f as Ao}from"./use.7b5663cd.js";import{E as Ho}from"./Ellipsis.fb8816b2.js";import{M as Ae}from"./MdSearch.c9b91d87.js";import{_ as Lo}from"./Input.4bb7b199.js";import{C as No,_ as je}from"./Dropdown.21956391.js";import{r as q}from"./naiveUi.7e1d9910.js";import{u as Mo}from"./composables.c2f0fe21.js";import{c as Oo}from"./create.2deeaf6a.js";import{_ as He,a as Le}from"./ThemeButton.vue_vue_type_script_setup_true_lang.5aaa1682.js";import{R as Bo}from"./ReloadCircleSharp.0893bcb5.js";import{_ as Vo,a as Eo}from"./DrawerContent.1892dd15.js";import{u as Fo}from"./use-theme-vars.4eddaf97.js";import"./autoAddRelayurlByEventIdStaff.8ca2f449.js";import"./getCacheStaff.ce5a8b54.js";import"./create-ref-setter.fe4a2903.js";const jo=B({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ke=ne("n-layout-sider"),ye={type:String,default:"static"},Ko=h("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[h("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Do={embedded:Boolean,position:ye,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},De=ne("n-layout");function Uo(e){return B({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Y.props),Do),setup(o){const t=F(null),l=F(null),{mergedClsPrefixRef:a,inlineThemeDisabled:r}=ue(o),d=Y("Layout","-layout",Ko,_e,o,a);function s(z,R){if(o.nativeScrollbar){const{value:M}=t;M&&(R===void 0?M.scrollTo(z):M.scrollTo(z,R))}else{const{value:M}=l;M&&M.scrollTo(z,R)}}Q(De,o);let c=0,f=0;const L=z=>{var R;const M=z.target;c=M.scrollLeft,f=M.scrollTop,(R=o.onScroll)===null||R===void 0||R.call(o,z)};Be(()=>{if(o.nativeScrollbar){const z=t.value;z&&(z.scrollTop=f,z.scrollLeft=c)}});const I={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},x={scrollTo:s},C=p(()=>{const{common:{cubicBezierEaseInOut:z},self:R}=d.value;return{"--n-bezier":z,"--n-color":o.embedded?R.colorEmbedded:R.color,"--n-text-color":R.textColor}}),b=r?me("layout",p(()=>o.embedded?"e":""),C,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:l,hasSiderStyle:I,mergedTheme:d,handleNativeElScroll:L,cssVars:r?void 0:C,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},x)},render(){var o;const{mergedClsPrefix:t,hasSider:l}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=l?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return u("div",{class:r,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):u(Ve,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const qo=Uo(!1),Go=h("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),P("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Yo={position:ye,inverted:Boolean,bordered:{type:Boolean,default:!1}},Wo=B({name:"LayoutHeader",props:Object.assign(Object.assign({},Y.props),Yo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ue(e),l=Y("Layout","-layout-header",Go,_e,e,o),a=p(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=l.value,c={"--n-bezier":d};return e.inverted?(c["--n-color"]=s.headerColorInverted,c["--n-text-color"]=s.textColorInverted,c["--n-border-color"]=s.headerBorderColorInverted):(c["--n-color"]=s.headerColor,c["--n-text-color"]=s.textColor,c["--n-border-color"]=s.headerBorderColor),c}),r=t?me("layout-header",p(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Xo=h("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[P("bordered",[m("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),m("left-placement",[P("bordered",[m("border",`
 right: 0;
 `)])]),P("right-placement",`
 justify-content: flex-start;
 `,[P("bordered",[m("border",`
 left: 0;
 `)]),P("collapsed",[h("layout-toggle-button",[h("base-icon",`
 transform: rotate(180deg);
 `)]),h("layout-toggle-bar",[S("&:hover",[m("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),h("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[h("base-icon",`
 transform: rotate(0);
 `)]),h("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[S("&:hover",[m("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),P("collapsed",[h("layout-toggle-bar",[S("&:hover",[m("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),h("layout-toggle-button",[h("base-icon",`
 transform: rotate(0);
 `)])]),h("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[h("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),h("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[m("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),m("bottom",`
 position: absolute;
 top: 34px;
 `),S("&:hover",[m("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),m("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),S("&:hover",[m("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),m("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),h("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),P("show-content",[h("layout-sider-scroll-container",{opacity:1})]),P("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Jo=B({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Ee,{clsPrefix:e},{default:()=>u(No,null)}))}}),Qo=B({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Zo={position:ye,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},et=B({name:"LayoutSider",props:Object.assign(Object.assign({},Y.props),Zo),setup(e){const o=G(De),t=F(null),l=F(null),a=p(()=>fe(c.value?e.collapsedWidth:e.width)),r=p(()=>e.collapseMode!=="transform"?{}:{minWidth:fe(e.width)}),d=p(()=>o?o.siderPlacement:"left"),s=F(e.defaultCollapsed),c=ge(ce(e,"collapsed"),s);function f(N,$){if(e.nativeScrollbar){const{value:H}=t;H&&($===void 0?H.scrollTo(N):H.scrollTo(N,$))}else{const{value:H}=l;H&&H.scrollTo(N,$)}}function L(){const{"onUpdate:collapsed":N,onUpdateCollapsed:$,onExpand:H,onCollapse:w}=e,{value:y}=c;$&&D($,!y),N&&D(N,!y),s.value=!y,y?H&&D(H):w&&D(w)}let I=0,x=0;const C=N=>{var $;const H=N.target;I=H.scrollLeft,x=H.scrollTop,($=e.onScroll)===null||$===void 0||$.call(e,N)};Be(()=>{if(e.nativeScrollbar){const N=t.value;N&&(N.scrollTop=x,N.scrollLeft=I)}}),Q(Ke,{collapsedRef:c,collapseModeRef:ce(e,"collapseMode")});const{mergedClsPrefixRef:b,inlineThemeDisabled:z}=ue(e),R=Y("Layout","-layout-sider",Xo,_e,e,b);function M(N){var $,H;N.propertyName==="max-width"&&(c.value?($=e.onAfterLeave)===null||$===void 0||$.call(e):(H=e.onAfterEnter)===null||H===void 0||H.call(e))}const W={scrollTo:f},U=p(()=>{const{common:{cubicBezierEaseInOut:N},self:$}=R.value,{siderToggleButtonColor:H,siderToggleButtonBorder:w,siderToggleBarColor:y,siderToggleBarColorHover:n}=$,g={"--n-bezier":N,"--n-toggle-button-color":H,"--n-toggle-button-border":w,"--n-toggle-bar-color":y,"--n-toggle-bar-color-hover":n};return e.inverted?(g["--n-color"]=$.siderColorInverted,g["--n-text-color"]=$.textColorInverted,g["--n-border-color"]=$.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColorInverted,g.__invertScrollbar=$.__invertScrollbar):(g["--n-color"]=$.siderColor,g["--n-text-color"]=$.textColor,g["--n-border-color"]=$.siderBorderColor,g["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColor),g}),K=z?me("layout-sider",p(()=>e.inverted?"a":"b"),U,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:l,mergedClsPrefix:b,mergedTheme:R,styleMaxWidth:a,mergedCollapsed:c,scrollContainerStyle:r,siderPlacement:d,handleNativeElScroll:C,handleTransitionend:M,handleTriggerClick:L,inlineThemeDisabled:z,cssVars:U,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},W)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:fe(this.width)}]},this.nativeScrollbar?u("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(Ve,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),l?l==="bar"?u(Qo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(Jo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${o}-layout-sider__border`}):null)}}),le=ne("n-menu"),Ce=ne("n-submenu"),ze=ne("n-menu-item-group"),ae=8;function Se(e){const o=G(le),{props:t,mergedCollapsedRef:l}=o,a=G(Ce,null),r=G(ze,null),d=p(()=>t.mode==="horizontal"),s=p(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=p(()=>{var x;return Math.max((x=t.collapsedIconSize)!==null&&x!==void 0?x:t.iconSize,t.iconSize)}),f=p(()=>{var x;return!d.value&&e.root&&l.value&&(x=t.collapsedIconSize)!==null&&x!==void 0?x:t.iconSize}),L=p(()=>{if(d.value)return;const{collapsedWidth:x,indent:C,rootIndent:b}=t,{root:z,isGroup:R}=e,M=b===void 0?C:b;if(z)return l.value?x/2-c.value/2:M;if(r)return C/2+r.paddingLeftRef.value;if(a)return(R?C/2:C)+a.paddingLeftRef.value}),I=p(()=>{const{collapsedWidth:x,indent:C,rootIndent:b}=t,{value:z}=c,{root:R}=e;return d.value||!R||!l.value?ae:(b===void 0?C:b)+z+ae-(x+z)/2});return{dropdownPlacement:s,activeIconSize:f,maxIconSize:c,paddingLeft:L,iconMarginRight:I,NMenu:o,NSubmenu:a}}const ke={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ue=Object.assign(Object.assign({},ke),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ot=B({name:"MenuOptionGroup",props:Ue,setup(e){Q(Ce,null);const o=Se(e);Q(ze,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:l}=G(le);return function(){const{value:a}=t,r=o.paddingLeft.value,{nodeProps:d}=l,s=d==null?void 0:d(e.tmNode.rawNode);return u("div",{class:`${a}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${a}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),Z(e.title),e.extra?u(he,null," ",Z(e.extra)):null),u("div",null,e.tmNodes.map(c=>$e(c,l))))}}}),qe=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=G(le);return{menuProps:o,style:p(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:p(()=>{const{maxIconSize:t,activeIconSize:l,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${l}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:l,renderExtra:a,expandIcon:r}}=this,d=t?t(o.rawNode):Z(this.icon);return u("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},l?l(o.rawNode):Z(this.title),this.extra||a?u("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):Z(this.extra)):null),this.showArrow?u(Ee,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(o.rawNode):u(jo,null)}):null)}}),Ge=Object.assign(Object.assign({},ke),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),tt=B({name:"Submenu",props:Ge,setup(e){const o=Se(e),{NMenu:t,NSubmenu:l}=o,{props:a,mergedCollapsedRef:r,mergedThemeRef:d}=t,s=p(()=>{const{disabled:x}=e;return l!=null&&l.mergedDisabledRef.value||a.disabled?!0:x}),c=F(!1);Q(Ce,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),Q(ze,null);function f(){const{onClick:x}=e;x&&x()}function L(){s.value||(r.value||t.toggleExpand(e.internalKey),f())}function I(x){c.value=x}return{menuProps:a,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:c,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:be(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:p(()=>a.mode==="horizontal"?!1:r.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:p(()=>!s.value&&(a.mode==="horizontal"||r.value)),handlePopoverShowChange:I,handleClick:L}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:l}}=this,a=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:f,maxIconSize:L,activeIconSize:I,title:x,childActive:C,icon:b,handleClick:z,menuProps:{nodeProps:R},dropdownShow:M,iconMarginRight:W,tmNode:U,mergedClsPrefix:K}=this,N=R==null?void 0:R(U.rawNode);return u("div",Object.assign({},N,{class:[`${K}-menu-item`,N==null?void 0:N.class],role:"menuitem"}),u(qe,{tmNode:U,paddingLeft:s,collapsed:c,disabled:f,iconMarginRight:W,maxIconSize:L,activeIconSize:I,title:x,extra:this.extra,showArrow:!d,childActive:C,clsPrefix:K,icon:b,hover:M,onClick:z}))},r=()=>u(eo,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:u("div",{class:`${o}-submenu-children`,role:"menu"},d.map(c=>$e(c,this.menuProps)))}});return this.root?u(je,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:l}),{default:()=>u("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:r())}):u("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),r())}}),Ye=Object.assign(Object.assign({},ke),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),nt=B({name:"MenuOption",props:Ye,setup(e){const o=Se(e),{NSubmenu:t,NMenu:l}=o,{props:a,mergedClsPrefixRef:r,mergedCollapsedRef:d}=l,s=t?t.mergedDisabledRef:{value:!1},c=p(()=>s.value||e.disabled);function f(I){const{onClick:x}=e;x&&x(I)}function L(I){c.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),f(I))}return{mergedClsPrefix:r,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:a,dropdownEnabled:be(()=>e.root&&d.value&&a.mode!=="horizontal"&&!c.value),selected:be(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:L}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:l,nodeProps:a}}=this,r=a==null?void 0:a(t.rawNode);return u("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),u(Fe,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(t.rawNode):Z(this.title),trigger:()=>u(qe,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),rt=B({name:"MenuDivider",setup(){const e=G(le),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:u("div",{class:`${o.value}-menu-divider`})}}),lt=xe(Ue),it=xe(Ye),at=xe(Ge);function We(e){return e.type==="divider"||e.type==="render"}function ct(e){return e.type==="divider"}function $e(e,o){const{rawNode:t}=e,{show:l}=t;if(l===!1)return null;if(We(t))return ct(t)?u(rt,Object.assign({key:e.key},t.props)):null;const{labelField:a}=o,{key:r,level:d,isGroup:s}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[a],extra:t.titleExtra||t.extra,key:r,internalKey:r,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?u(ot,pe(c,lt,{tmNode:e,tmNodes:e.children,key:r})):u(tt,pe(c,at,{key:r,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):u(nt,pe(c,it,{key:r,tmNode:e}))}const Ne=[S("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[S("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Me=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[S("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],st=S([h("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[P("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[S("&::before","display: none;"),P("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[P("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[S("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),P("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[S("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ie("disabled",[ie("selected, child-active",[S("&:focus-within",Me)]),P("selected",[X(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[S("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),P("child-active",[X(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[S("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),X("border-bottom: 2px solid var(--n-border-color-horizontal);",Me)]),h("menu-item-content-header",[S("a","color: var(--n-item-text-color-horizontal);")])])]),P("collapsed",[h("menu-item-content",[P("selected",[S("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[S("> *","z-index: 1;"),S("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),P("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),P("collapsed",[m("arrow","transform: rotate(0);")]),P("selected",[S("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[S("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),P("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[S("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ie("disabled",[ie("selected, child-active",[S("&:focus-within",Ne)]),P("selected",[X(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[S("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),P("child-active",[X(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[S("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),P("selected",[X(null,[S("&::before","background-color: var(--n-item-color-active-hover);")])]),X(null,Ne)]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[S("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[S("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[oo({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),h("menu-tooltip",[S("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function X(e,o){return[P("hover",e,o),S("&:hover",e,o)]}const dt=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),ut=B({name:"Menu",props:dt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ue(e),l=Y("Menu","-menu",st,to,e,o),a=G(Ke,null),r=p(()=>{var w;const{collapsed:y}=e;if(y!==void 0)return y;if(a){const{collapseModeRef:n,collapsedRef:g}=a;if(n.value==="width")return(w=g.value)!==null&&w!==void 0?w:!1}return!1}),d=p(()=>{const{keyField:w,childrenField:y,disabledField:n}=e;return Oo(e.items||e.options,{getIgnored(g){return We(g)},getChildren(g){return g[y]},getDisabled(g){return g[n]},getKey(g){var E;return(E=g[w])!==null&&E!==void 0?E:g.name}})}),s=p(()=>new Set(d.value.treeNodes.map(w=>w.key))),{watchProps:c}=e,f=F(null);c!=null&&c.includes("defaultValue")?Ie(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const L=ce(e,"value"),I=ge(L,f),x=F([]),C=()=>{x.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(I.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ie(C):C();const b=no(e,["expandedNames","expandedKeys"]),z=ge(b,x),R=p(()=>d.value.treeNodes),M=p(()=>d.value.getPath(I.value).keyPath);Q(le,{props:e,mergedCollapsedRef:r,mergedThemeRef:l,mergedValueRef:I,mergedExpandedKeysRef:z,activePathRef:M,mergedClsPrefixRef:o,isHorizontalRef:p(()=>e.mode==="horizontal"),invertedRef:ce(e,"inverted"),doSelect:W,toggleExpand:K});function W(w,y){const{"onUpdate:value":n,onUpdateValue:g,onSelect:E}=e;g&&D(g,w,y),n&&D(n,w,y),E&&D(E,w,y),f.value=w}function U(w){const{"onUpdate:expandedKeys":y,onUpdateExpandedKeys:n,onExpandedNamesChange:g,onOpenNamesChange:E}=e;y&&D(y,w),n&&D(n,w),g&&D(g,w),E&&D(E,w),x.value=w}function K(w){const y=Array.from(z.value),n=y.findIndex(g=>g===w);if(~n)y.splice(n,1);else{if(e.accordion&&s.value.has(w)){const g=y.findIndex(E=>s.value.has(E));g>-1&&y.splice(g,1)}y.push(w)}U(y)}const N=w=>{const y=d.value.getPath(w!=null?w:I.value,{includeSelf:!1}).keyPath;if(!y.length)return;const n=Array.from(z.value),g=new Set([...n,...y]);e.accordion&&s.value.forEach(E=>{g.has(E)&&!y.includes(E)&&g.delete(E)}),U(Array.from(g))},$=p(()=>{const{inverted:w}=e,{common:{cubicBezierEaseInOut:y},self:n}=l.value,{borderRadius:g,borderColorHorizontal:E,fontSize:Je,itemHeight:Qe,dividerColor:Ze}=n,i={"--n-divider-color":Ze,"--n-bezier":y,"--n-font-size":Je,"--n-border-color-horizontal":E,"--n-border-radius":g,"--n-item-height":Qe};return w?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),H=t?me("menu",p(()=>e.inverted?"a":"b"),$,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:b,uncontrolledExpanededKeys:x,mergedExpandedKeys:z,uncontrolledValue:f,mergedValue:I,activePath:M,tmNodes:R,mergedTheme:l,mergedCollapsed:r,cssVars:t?void 0:$,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender,showOption:N}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:l}=this;return l==null||l(),u("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>$e(a,this.$props)))}}),Oe=B({__name:"PoolStateNumber",setup(e){const o=p(()=>Re.getPool().size),t=p(()=>Re.allSubIds.size);return(l,a)=>{const r=Fe;return A(),O(he,null,[v(r,{trigger:"hover"},{trigger:T(()=>[_("span",{style:se({color:k(Pe)(k(t),20,400)})},J(k(t)),5)]),default:T(()=>[oe(" "+J(k(V)("tips.current_number_of_subscriptions_including_temporary_subscriptions")),1)]),_:1}),oe(" / "),v(r,{trigger:"hover"},{trigger:T(()=>[_("span",{style:se({color:k(Pe)(k(o),10,80)})},J(k(o)),5)]),default:T(()=>[oe(" "+J(k(V)("tips.number_of_current_and_continued_connections")),1)]),_:1})],64)}}}),mt={class:""},ht={key:0,class:"ml-1"},vt=B({__name:"Upload",setup(e){const{isShow:o}=ao(),t=uo(),l=p(()=>t.value.filter(a=>a.status==="uploading").length);return(a,r)=>{const d=ee,s=ve,c=Po,f=co,L=so;return A(),O("div",mt,[v(L,{show:k(o),"onUpdate:show":r[1]||(r[1]=I=>io(o)?o.value=I:null),"display-directive":"show",trigger:"manual"},{trigger:T(()=>[v(s,{quaternary:"",onClick:r[0]||(r[0]=I=>o.value=!k(o))},{default:T(()=>[v(d,{size:20},{default:T(()=>[v(Ro)]),_:1}),k(l)>0?(A(),O("span",ht,J(k(l)),1)):te("",!0)]),_:1})]),default:T(()=>[ro(v(c,{description:k(V)("empty_text")},null,8,["description"]),[[lo,k(t).length===0]]),v(f,{class:"min-w-[25em]"})]),_:1},8,["show"])])}}});function ft(e,o,t){const l=we(),a=F(!0);de(()=>l.name,async()=>{l.name===e?a.value=!0:a.value=!1},{immediate:!0});const r=F(o);return de(a,async()=>{a.value?(await Te(0),r.value=t):(await Te(0),r.value=o)},{immediate:!0}),{teleportTo:r,isView:a}}const pt=_("div",{id:"search-input-default"},null,-1),gt={key:1,class:"md:hidden"},bt=B({__name:"SearchForm",setup(e){const o=go();we();const t=F(""),l=mo("search-history",[]),a=p(()=>{const C=[];for(const b of l.value)C.push({label:()=>u(Ho,{class:"flex-shrink flex w-sm max-w-screen",style:{width:"min-content",maxWidth:"100vw"}},{default:()=>b}),value:b,key:b});return C});function r(){o.push({name:"search"})}function d(C){C==null||C.preventDefault(),s()}function s(){c.value=!1;const C=t.value.trim();if(!C){r();return}const b=new Set;b.add(C),bo(b,l.value),l.value=[...b].slice(0,10),o.push({name:"search",params:{value:C}})}const c=F(!1),f=To(),{isView:L,teleportTo:I}=ft("search","#search-input-default","#search-input");function x(C){c.value=!1,t.value=C,s()}return(C,b)=>{const z=ee,R=ve,M=Lo,W=je;return A(),O(he,null,[pt,k(f)?(A(),re(po,{key:0,to:k(I)},[_("div",{class:fo(["flex-shrink flex-1",{"hidden md:block":!k(L)}])},[v(W,{show:c.value,onClickoutside:b[3]||(b[3]=()=>c.value=!1),options:k(a),onSelect:x},{default:T(()=>[v(M,{clearable:"",round:"",onKeyup:ho(s,["enter"]),value:t.value,"onUpdate:value":b[0]||(b[0]=U=>t.value=U),onFocus:b[1]||(b[1]=()=>c.value=!0),onClick:b[2]||(b[2]=()=>c.value=!0),placeholder:k(V)("search")},{suffix:T(()=>[v(R,{class:"ml-1",size:"tiny",quaternary:"",circle:"",onClick:vo(d,["stop"])},{icon:T(()=>[v(z,null,{default:T(()=>[v(Ae)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["onKeyup","value","placeholder"])]),_:1},8,["show","options"])],2)],8,["to"])):te("",!0),k(L)?te("",!0):(A(),O("div",gt,[v(R,{quaternary:"",circle:"",onClick:r},{icon:T(()=>[v(z,null,{default:T(()=>[v(Ae)]),_:1})]),_:1})]))],64)}}}),_t={},xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},wt=_("g",{fill:"none"},[_("path",{d:"M3.5 6.5a4.5 4.5 0 0 1 9 0v1.904l.964 2.41A.5.5 0 0 1 13 11.5H3a.5.5 0 0 1-.464-.686l.964-2.41V6.5zm2.562 6C6.283 13.365 7.064 14 8 14c.936 0 1.717-.635 1.938-1.5H6.062z",fill:"currentColor"})],-1),yt=[wt];function Ct(e,o){return A(),O("svg",xt,yt)}const zt=j(_t,[["render",Ct]]),St={},kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$t=_("path",{d:"M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),It=_("circle",{cx:"256",cy:"416",r:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Rt=[$t,It];function Pt(e,o){return A(),O("svg",kt,Rt)}const Tt=j(St,[["render",Pt]]),At={},Ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Lt=_("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Nt=[Lt];function Mt(e,o){return A(),O("svg",Ht,Nt)}const Ot=j(At,[["render",Mt]]),Bt={},Vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Et=_("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),Ft=[Et];function jt(e,o){return A(),O("svg",Vt,Ft)}const Kt=j(Bt,[["render",jt]]),Dt={},Ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},qt=_("g",{fill:"none"},[_("path",{d:"M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm1.354 4.354l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 1 1 .708.708zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0zM11 12.75h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5z",fill:"currentColor"})],-1),Gt=[qt];function Yt(e,o){return A(),O("svg",Ut,Gt)}const Wt=j(Dt,[["render",Yt]]),Xt={},Jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Qt=_("g",{fill:"none"},[_("path",{d:"M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z",fill:"currentColor"})],-1),Zt=[Qt];function en(e,o){return A(),O("svg",Jt,Zt)}const on=j(Xt,[["render",en]]),tn={},nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},rn=_("path",{d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",fill:"currentColor"},null,-1),ln=_("path",{d:"M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",fill:"currentColor"},null,-1),an=[rn,ln];function cn(e,o){return A(),O("svg",nn,an)}const sn=j(tn,[["render",cn]]),dn={},un={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},mn=_("path",{d:"M437.4 226.3c-.3-.9-.9-1.4-1.4-2l-70-38.6c-.9-.6-2-.6-3.1 0l-58.9 36c-.9.6-1.4 1.7-1.4 2.6l-.9 31.4l-24-16c-.9-.6-2.3-.6-3.1 0L240 260.9l-1.4-35.1c0-.9-.6-2-1.4-2.3l-36-24.3l33.7-17.4c1.1-.6 1.7-1.7 1.7-2.9l-5.7-132.3c0-.9-.9-2-1.7-2.6L138.6.3c-.9-.3-1.7-.3-2.3-.3L12.6 38.6c-1.4.6-2.3 2-2 3.7L38 175.4c.9 3.4 34 27.4 38.6 30.9l-26.9 12.9c-1.4.9-2 2.3-1.7 3.4l20.6 100.3c.6 2.9 23.7 23.1 27.1 26.3l-17.4 10.6c-.9.6-1.7 2-1.4 3.1c1.4 7.1 15.4 77.7 16.9 79.1l65.1 69.1c.6.6 1.4.6 2.3.9c.6 0 1.1-.3 1.7-.6l83.7-66.9c.9-.6 1.1-1.4 1.1-2.3l-2-46l28 23.7c1.1.9 2.9.9 4 0l66.9-53.4c.9-.6 1.1-1.4 1.1-2.3l2.3-33.4l20.3 14c1.1.9 2.6.9 3.7 0l54.6-43.7c.6-.3 1.1-1.1 1.1-2c.9-6.5 10.3-70.8 9.7-72.8zm-204.8 4.8l4 92.6l-90.6 61.2l-14-96.6l100.6-57.2zm-7.7-180l5.4 126l-106.6 55.4L104 97.7l120.9-46.6zM44 173.1L18 48l79.7 49.4l19.4 132.9L44 173.1zm30.6 147.8L55.7 230l70 58.3l13.7 93.4l-64.8-60.8zm24.3 117.7l-13.7-67.1l61.7 60.9l9.7 67.4l-57.7-61.2zm64.5 64.5l-10.6-70.9l85.7-61.4l3.1 70l-78.2 62.3zm82-115.1c0-3.4.9-22.9-2-25.1l-24.3-20l22.3-14.9c2.3-1.7 1.1-5.7 1.1-8l29.4 22.6l.6 68.3l-27.1-22.9zm94.3-25.4l-60.9 48.6l-.6-68.6l65.7-46.9l-4.2 66.9zm27.7-25.7l-19.1-13.4l2-34c.3-.9-.3-2-1.1-2.6L308 259.7l.6-30l64.6 40.6l-5.8 66.6zm54.6-39.8l-48.3 38.3l5.7-65.1l51.1-36.6l-8.5 63.4z",fill:"currentColor"},null,-1),hn=[mn];function vn(e,o){return A(),O("svg",un,hn)}const fn=j(dn,[["render",vn]]),pn={},gn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bn=_("path",{d:"M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16z",fill:"currentColor"},null,-1),_n=_("path",{d:"M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z",fill:"currentColor"},null,-1),xn=[bn,_n];function wn(e,o){return A(),O("svg",gn,xn)}const yn=j(pn,[["render",wn]]),Cn={},zn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Sn=_("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),kn=_("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1),$n=[Sn,kn];function In(e,o){return A(),O("svg",zn,$n)}const Rn=j(Cn,[["render",In]]),Pn={},Tn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},An=_("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",fill:"currentColor"},null,-1),Hn=[An];function Ln(e,o){return A(),O("svg",Tn,Hn)}const Nn=j(Pn,[["render",Ln]]),Mn={},On={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 640 512"},Bn=_("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",fill:"currentColor"},null,-1),Vn=[Bn];function En(e,o){return A(),O("svg",On,Vn)}const Fn=j(Mn,[["render",En]]),jn=B({__name:"LogoutButton",setup(e){const o=Mo();function t(){o.warning({title:V("warning"),content:V("message.logout_dialog_content"),positiveText:V("yes"),negativeText:V("no"),onPositiveClick:()=>{xo()}})}return(l,a)=>(A(),O("div",{onClick:t},[_o(l.$slots,"default",{},()=>[oe(J(k(V)("logout")),1)])]))}}),Xe=B({__name:"Sidebar",props:{collapsed:{type:Boolean}},setup(e){const o=p(()=>[{key:"Home",label:V("home"),href:"/home",icon:q(sn)},{key:"MarkdownEditor",label:V("markdown_editor"),href:"/markdown/editor",icon:q(on)},{key:"Profile",label:V("profile"),href:"/profile",icon:q(Nn)},{key:"Relays",label:V("relays"),href:"/relays",icon:q(fn)},{key:"Channels",label:V("channel"),href:"/channels",icon:q(Fn)},{key:"Notice",label:V("notice"),href:"/notice",icon:q(zt)},{key:"Task",label:V("task"),href:"/task",icon:q(Wt)},{key:"Settings",label:V("settings"),href:"/settings",icon:q(Rn)},{key:"About",label:V("about"),href:"/about",icon:q(Tt)},{key:"Logout",label:()=>u(jn,{},{default:()=>V("logout")}),icon:q(yn)}]);function t(r){return"href"in r?u(wo,{to:r.href},{default:()=>r.label}):yo(r.label)?r.label():r.label}function l(r){return r.icon?r.icon():u(ee,null,{default:()=>u(Ot)})}function a(){return u(ee,null,{default:()=>u(Kt)})}return(r,d)=>(A(),re(k(ut),{collapsed:e.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:k(o),"render-label":t,"render-icon":l,"expand-icon":a},null,8,["collapsed","options"]))}}),Kn={},Dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Un=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),qn=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),Gn=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1),Yn=[Un,qn,Gn];function Wn(e,o){return A(),O("svg",Dn,Yn)}const Xn=j(Kn,[["render",Wn]]),Jn={key:0,class:"h-4 w-4 flex justify-center items-center"},Qn=B({__name:"LoadProgress",setup(e){const o=Co(),t=zo(),l=p(()=>{var f;return(f=o==null?void 0:o.bufferOpt.value)==null?void 0:f.isLoading}),a=Ao(),r=p(()=>{const f=o==null?void 0:o.bufferOpt.value;if(!!f)return Math.floor(Math.log2(a.value-f.minSince))}),d=p(()=>{const f=o==null?void 0:o.bufferOpt.value;if(!!f)return f.minSince===f.createTime}),s=p(()=>{const f=o==null?void 0:o.bufferOpt.value;if(!f)return;const L=f.until-f.since;return L===0?1:Math.floor(Math.log2(L))}),c=p(()=>{if(!(!s.value||!r.value))return s.value/r.value*100});return de(l,()=>{l.value||!o||o.bufferOpt.value===null||(s.value&&r.value&&s.value>=r.value&&t.success(V("all_loading_completed")),o.bufferOpt.value=null)}),(f,L)=>{const I=So;return k(l)&&k(s)?(A(),O("div",Jn,[oe(J(k(s))+" ",1),k(c)?(A(),re(I,{key:0,class:"absolute h-1 w-full left-0 bottom-0",type:"line",percentage:k(d)?100-k(c):k(c),"show-indicator":!1,"offset-degree":120,height:2,style:{}},null,8,["percentage"])):te("",!0)])):te("",!0)}}}),Zn=B({__name:"ReloadButton",setup(e){const o=ko();function t(){o.start(),location.reload()}return(l,a)=>{const r=ee,d=ve;return A(),re(d,{onClick:t,quaternary:""},{default:T(()=>[v(r,{size:"20"},{default:T(()=>[v(Bo)]),_:1})]),_:1})}}}),er=_("span",{class:"ml-6 hidden md:block"}," Jumpalong ",-1),or={class:"flex justify-center items-center"},tr={class:"ml-3"},nr={class:"ml-3 clashidden sm:block"},rr={class:"ml-3 hidden sm:block"},lr={class:"ml-3 hidden sm:block"},ir={class:"ml-3 md:hidden"},ar={class:"flex items-center"},cr=B({__name:"LayoutHeader",setup(e){const o=F(!1),t=we();return de(()=>t.path,()=>{o.value=!1}),(l,a)=>{const r=ee,d=Oe,s=ve,c=Vo,f=Eo;return A(),O(he,null,[_("span",{class:"text-xl font-bold flex justify-center items-center",onClick:a[0]||(a[0]=()=>l.$router.push("/"))},[v(r,{size:"40"},{default:T(()=>[v(Io)]),_:1}),er]),_("div",or,[v(bt),_("div",tr,[v(vt)]),_("div",nr,[v(d)]),v(Qn,{class:"ml-3"}),_("div",rr,[v(He)]),_("div",lr,[v(Le)]),_("div",ir,[v(s,{quaternary:"",onClick:a[1]||(a[1]=()=>o.value=!o.value)},{default:T(()=>[v(r,{size:"22"},{default:T(()=>[v(Xn)]),_:1})]),_:1}),v(f,{show:o.value,"onUpdate:show":a[2]||(a[2]=L=>o.value=L),width:"100%",placement:"right"},{default:T(()=>[v(c,{title:"Menu",closable:""},{footer:T(()=>[_("div",ar,[v(Zn),v(Le),v(He),v(Oe)])]),default:T(()=>[v(Xe,{collapsed:!1})]),_:1})]),_:1},8,["show"])])])],64)}}}),sr={class:"h-full overflow-x-hidden"},Pr=B({__name:"LayoutView",setup(e){const o=F(!0);return Fo(),(t,l)=>{const a=Wo,r=et,d=qo;return A(),re(d,{style:{height:"100vh"}},{default:T(()=>[v(a,{class:"h-14 md:h-20 flex justify-between items-center px-3 relative",style:se({transition:"height 0.5s"}),bordered:""},{default:T(()=>[v(cr)]),_:1},8,["style"]),v(d,{class:"absolute w-full top-14 md:top-20 bottom-0","has-sider":"",style:se({transition:"top 0.5s, bottoom 0.5s"})},{default:T(()=>[v(r,{class:"hidden md:flex","native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:o.value,"show-trigger":"",onCollapse:l[0]||(l[0]=s=>o.value=!0),onExpand:l[1]||(l[1]=s=>o.value=!1)},{default:T(()=>[v(Xe,{collapsed:o.value},null,8,["collapsed"])]),_:1},8,["collapsed"]),v(d,{"content-style":"padding: 8px;"},{default:T(()=>[_("div",sr,[v($o)])]),_:1})]),_:1},8,["style"])]),_:1})}}});export{Pr as default};
