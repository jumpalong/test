import{f as B,h as d,i as re,c as m,a as S,g as J,L as V,u as de,a2 as Ce,p as Z,k as b,d as h,b as y,j as X,N as ce,F as ye,Q as be,e as te,a3 as ho,R as Te,_ as K,o as L,B as F,E as x,X as mo,m as ze,w as M,n as I,z as ie,q as H,$ as He,y as me,a4 as Le,a5 as Me,a6 as vo,W as fo,V as po,H as go,a7 as bo}from"./index-Bp8Ru9nj.js";import{F as xo}from"./Favicon-ZYZOVOsJ.js";import{_ as Be,a as Oe}from"./ThemeButton.vue_vue_type_script_setup_true_lang-CJN-tcCe.js";import{R as _o}from"./ReloadCircleSharp-DAOD49WP.js";import{N as se}from"./Icon-BUbDyWQc.js";import{c as D,d as wo,b as Ve}from"./Button-DF3Ei97P.js";import{u as Ke,i as Co}from"./ProvideEventLine-XLCKst21.js";import{_ as Ue}from"./Tooltip-CWAJuqVc.js";import{r as q}from"./naiveUi-DD7D_Mah.js";import{r as ee}from"./render-n15ElYMw.js";import{N as De}from"./Icon-C2DldZ3i.js";import{C as yo,_ as zo}from"./Dropdown-BNXdJGM7.js";import{k as ve}from"./Popover-CWXHRS55.js";import{k as Se}from"./keysOf-HiGXOwLp.js";import{f as So}from"./fade-in-height-expand.cssr-BOUpW_kQ.js";import{c as fe}from"./create-DlBt9mlr.js";import{u as qe,N as Ge,a as xe,V as Io}from"./Scrollbar-Bcd6cbpf.js";import{u as ko,c as $o}from"./use-compitable-BZNVtFY-.js";import{u as ue}from"./use-css-vars-class-DV7GkkKb.js";import{V as Ro}from"./index-N-meOqUd.js";import{_ as Po,a as No}from"./DrawerContent-KbJmxdI_.js";import{f as pe}from"./format-length-B-p6aW7q.js";import"./use-rtl-gkSu3eK_.js";import"./is-browser-Ki2-8vi-.js";import"./utils-Bn9avYFz.js";import"./Checkbox-Bvv02CAZ.js";import"./Space-D7Gj9TeE.js";import"./index-vZmvdULR.js";import"./get-slot-Bk_rJcZu.js";import"./composables-Den7Xj81.js";import"./Input-uRxkwxbK.js";import"./use-locale-DHyx6amc.js";import"./replaceable-B2OdU2Vz.js";import"./Follower-BLKhK3H2.js";import"./fade-in-scale-up.cssr-YaysNU6q.js";import"./index-DsSU6HIH.js";import"./Close-sZEX0j0N.js";import"./Close-B84N3VcG.js";const Ao=B({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),We=re("n-layout-sider"),Ie={type:String,default:"static"},To=m("layout",`
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
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ho={embedded:Boolean,position:Ie,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ye=re("n-layout");function Lo(e){return B({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},J.props),Ho),setup(o){const r=V(null),c=V(null),{mergedClsPrefixRef:s,inlineThemeDisabled:i}=de(o),a=J("Layout","-layout",To,Ce,o,s);function v(z,k){if(o.nativeScrollbar){const{value:T}=r;T&&(k===void 0?T.scrollTo(z):T.scrollTo(z,k))}else{const{value:T}=c;T&&T.scrollTo(z,k)}}Z(Ye,o);let u=0,P=0;const E=z=>{var k;const T=z.target;u=T.scrollLeft,P=T.scrollTop,(k=o.onScroll)===null||k===void 0||k.call(o,z)};qe(()=>{if(o.nativeScrollbar){const z=r.value;z&&(z.scrollTop=P,z.scrollLeft=u)}});const N={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},g={scrollTo:v},O=b(()=>{const{common:{cubicBezierEaseInOut:z},self:k}=a.value;return{"--n-bezier":z,"--n-color":o.embedded?k.colorEmbedded:k.color,"--n-text-color":k.textColor}}),A=i?ue("layout",b(()=>o.embedded?"e":""),O,o):void 0;return Object.assign({mergedClsPrefix:s,scrollableElRef:r,scrollbarInstRef:c,hasSiderStyle:N,mergedTheme:a,handleNativeElScroll:E,cssVars:i?void 0:O,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},g)},render(){var o;const{mergedClsPrefix:r,hasSider:c}=this;(o=this.onRender)===null||o===void 0||o.call(this);const s=c?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return d("div",{class:i,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,s],onScroll:this.handleNativeElScroll},this.$slots):d(Ge,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,s]}),this.$slots))}})}const ge=Lo(!1),Mo=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),S("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Bo={position:Ie,inverted:Boolean,bordered:{type:Boolean,default:!1}},Oo=B({name:"LayoutHeader",props:Object.assign(Object.assign({},J.props),Bo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=de(e),c=J("Layout","-layout-header",Mo,Ce,e,o),s=b(()=>{const{common:{cubicBezierEaseInOut:a},self:v}=c.value,u={"--n-bezier":a};return e.inverted?(u["--n-color"]=v.headerColorInverted,u["--n-text-color"]=v.textColorInverted,u["--n-border-color"]=v.headerBorderColorInverted):(u["--n-color"]=v.headerColor,u["--n-text-color"]=v.textColor,u["--n-border-color"]=v.headerBorderColor),u}),i=r?ue("layout-header",b(()=>e.inverted?"a":"b"),s,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Eo=m("layout-sider",`
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
`,[S("bordered",[h("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),h("left-placement",[S("bordered",[h("border",`
 right: 0;
 `)])]),S("right-placement",`
 justify-content: flex-start;
 `,[S("bordered",[h("border",`
 left: 0;
 `)]),S("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[y("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[y("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),S("collapsed",[m("layout-toggle-bar",[y("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[h("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),h("bottom",`
 position: absolute;
 top: 34px;
 `),y("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),y("&:hover",[h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),h("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),S("show-content",[m("layout-sider-scroll-container",{opacity:1})]),S("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Fo=B({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(De,{clsPrefix:e},{default:()=>d(yo,null)}))}}),jo=B({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Vo={position:Ie,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ko=B({name:"LayoutSider",props:Object.assign(Object.assign({},J.props),Vo),setup(e){const o=X(Ye),r=V(null),c=V(null),s=b(()=>pe(u.value?e.collapsedWidth:e.width)),i=b(()=>e.collapseMode!=="transform"?{}:{minWidth:pe(e.width)}),a=b(()=>o?o.siderPlacement:"left"),v=V(e.defaultCollapsed),u=xe(ce(e,"collapsed"),v);function P(R,w){if(e.nativeScrollbar){const{value:C}=r;C&&(w===void 0?C.scrollTo(R):C.scrollTo(R,w))}else{const{value:C}=c;C&&C.scrollTo(R,w)}}function E(){const{"onUpdate:collapsed":R,onUpdateCollapsed:w,onExpand:C,onCollapse:Y}=e,{value:G}=u;w&&D(w,!G),R&&D(R,!G),v.value=!G,G?C&&D(C):Y&&D(Y)}let N=0,g=0;const O=R=>{var w;const C=R.target;N=C.scrollLeft,g=C.scrollTop,(w=e.onScroll)===null||w===void 0||w.call(e,R)};qe(()=>{if(e.nativeScrollbar){const R=r.value;R&&(R.scrollTop=g,R.scrollLeft=N)}}),Z(We,{collapsedRef:u,collapseModeRef:ce(e,"collapseMode")});const{mergedClsPrefixRef:A,inlineThemeDisabled:z}=de(e),k=J("Layout","-layout-sider",Eo,Ce,e,A);function T(R){var w,C;R.propertyName==="max-width"&&(u.value?(w=e.onAfterLeave)===null||w===void 0||w.call(e):(C=e.onAfterEnter)===null||C===void 0||C.call(e))}const oe={scrollTo:P},W=b(()=>{const{common:{cubicBezierEaseInOut:R},self:w}=k.value,{siderToggleButtonColor:C,siderToggleButtonBorder:Y,siderToggleBarColor:G,siderToggleBarColorHover:he}=w,j={"--n-bezier":R,"--n-toggle-button-color":C,"--n-toggle-button-border":Y,"--n-toggle-bar-color":G,"--n-toggle-bar-color-hover":he};return e.inverted?(j["--n-color"]=w.siderColorInverted,j["--n-text-color"]=w.textColorInverted,j["--n-border-color"]=w.siderBorderColorInverted,j["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColorInverted,j.__invertScrollbar=w.__invertScrollbar):(j["--n-color"]=w.siderColor,j["--n-text-color"]=w.textColor,j["--n-border-color"]=w.siderBorderColor,j["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColor),j}),U=z?ue("layout-sider",b(()=>e.inverted?"a":"b"),W,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:c,mergedClsPrefix:A,mergedTheme:k,styleMaxWidth:s,mergedCollapsed:u,scrollContainerStyle:i,siderPlacement:a,handleNativeElScroll:O,handleTransitionend:T,handleTriggerClick:E,inlineThemeDisabled:z,cssVars:W,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender},oe)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:pe(this.width)}]},this.nativeScrollbar?d("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(Ge,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),c?c==="bar"?d(jo,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Fo,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${o}-layout-sider__border`}):null)}}),ne=re("n-menu"),ke=re("n-submenu"),$e=re("n-menu-item-group"),ae=8;function Re(e){const o=X(ne),{props:r,mergedCollapsedRef:c}=o,s=X(ke,null),i=X($e,null),a=b(()=>r.mode==="horizontal"),v=b(()=>a.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=b(()=>{var g;return Math.max((g=r.collapsedIconSize)!==null&&g!==void 0?g:r.iconSize,r.iconSize)}),P=b(()=>{var g;return!a.value&&e.root&&c.value&&(g=r.collapsedIconSize)!==null&&g!==void 0?g:r.iconSize}),E=b(()=>{if(a.value||a.value)return;const{collapsedWidth:g,indent:O,rootIndent:A}=r,{root:z,isGroup:k}=e,T=A===void 0?O:A;return z?c.value?g/2-u.value/2:T:i&&typeof i.paddingLeftRef.value=="number"?O/2+i.paddingLeftRef.value:s&&typeof s.paddingLeftRef.value=="number"?(k?O/2:O)+s.paddingLeftRef.value:0}),N=b(()=>{const{collapsedWidth:g,indent:O,rootIndent:A}=r,{value:z}=u,{root:k}=e;return a.value||!k||!c.value?ae:(A===void 0?O:A)+z+ae-(g+z)/2});return{dropdownPlacement:v,activeIconSize:P,maxIconSize:u,paddingLeft:E,iconMarginRight:N,NMenu:o,NSubmenu:s}}const Pe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Xe=Object.assign(Object.assign({},Pe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Uo=B({name:"MenuOptionGroup",props:Xe,setup(e){Z(ke,null);const o=Re(e);Z($e,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:r,props:c}=X(ne);return function(){const{value:s}=r,i=o.paddingLeft.value,{nodeProps:a}=c,v=a==null?void 0:a(e.tmNode.rawNode);return d("div",{class:`${s}-menu-item-group`,role:"group"},d("div",Object.assign({},v,{class:[`${s}-menu-item-group-title`,v==null?void 0:v.class],style:[(v==null?void 0:v.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ee(e.title),e.extra?d(ye,null," ",ee(e.extra)):null),d("div",null,e.tmNodes.map(u=>Ne(u,c))))}}}),Je=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=X(ne);return{menuProps:o,style:b(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:b(()=>{const{maxIconSize:r,activeIconSize:c,iconMarginRight:s}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${c}px`,marginRight:`${s}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:r,renderLabel:c,renderExtra:s,expandIcon:i}}=this,a=r?r(o.rawNode):ee(this.icon);return d("div",{onClick:v=>{var u;(u=this.onClick)===null||u===void 0||u.call(this,v)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:c?c(o.rawNode):ee(this.title),this.extra||s?d("span",{class:`${e}-menu-item-content-header__extra`}," ",s?s(o.rawNode):ee(this.extra)):null),this.showArrow?d(De,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):d(Ao,null)}):null)}}),Qe=Object.assign(Object.assign({},Pe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),_e=B({name:"Submenu",props:Qe,setup(e){const o=Re(e),{NMenu:r,NSubmenu:c}=o,{props:s,mergedCollapsedRef:i,mergedThemeRef:a}=r,v=b(()=>{const{disabled:g}=e;return c!=null&&c.mergedDisabledRef.value||s.disabled?!0:g}),u=V(!1);Z(ke,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:v}),Z($e,null);function P(){const{onClick:g}=e;g&&g()}function E(){v.value||(i.value||r.toggleExpand(e.internalKey),P())}function N(g){u.value=g}return{menuProps:s,mergedTheme:a,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:u,paddingLeft:o.paddingLeft,mergedDisabled:v,mergedValue:r.mergedValueRef,childActive:be(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:r.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>s.mode==="horizontal"?!1:i.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!v.value&&(s.mode==="horizontal"||i.value)),handlePopoverShowChange:N,handleClick:E}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:r,renderLabel:c}}=this,s=()=>{const{isHorizontal:a,paddingLeft:v,collapsed:u,mergedDisabled:P,maxIconSize:E,activeIconSize:N,title:g,childActive:O,icon:A,handleClick:z,menuProps:{nodeProps:k},dropdownShow:T,iconMarginRight:oe,tmNode:W,mergedClsPrefix:U,isEllipsisPlaceholder:R,extra:w}=this,C=k==null?void 0:k(W.rawNode);return d("div",Object.assign({},C,{class:[`${U}-menu-item`,C==null?void 0:C.class],role:"menuitem"}),d(Je,{tmNode:W,paddingLeft:v,collapsed:u,disabled:P,iconMarginRight:oe,maxIconSize:E,activeIconSize:N,title:g,extra:w,showArrow:!a,childActive:O,clsPrefix:U,icon:A,hover:T,onClick:z,isEllipsisPlaceholder:R}))},i=()=>d(wo,null,{default:()=>{const{tmNodes:a,collapsed:v}=this;return v?null:d("div",{class:`${o}-submenu-children`,role:"menu"},a.map(u=>Ne(u,this.menuProps)))}});return this.root?d(zo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:c}),{default:()=>d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},s(),this.isHorizontal?null:i())}):d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},s(),i())}}),Ze=Object.assign(Object.assign({},Pe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Do=B({name:"MenuOption",props:Ze,setup(e){const o=Re(e),{NSubmenu:r,NMenu:c}=o,{props:s,mergedClsPrefixRef:i,mergedCollapsedRef:a}=c,v=r?r.mergedDisabledRef:{value:!1},u=b(()=>v.value||e.disabled);function P(N){const{onClick:g}=e;g&&g(N)}function E(N){u.value||(c.doSelect(e.internalKey,e.tmNode.rawNode),P(N))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:c.mergedThemeRef,menuProps:s,dropdownEnabled:be(()=>e.root&&a.value&&s.mode!=="horizontal"&&!u.value),selected:be(()=>c.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:E}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:r,menuProps:{renderLabel:c,nodeProps:s}}=this,i=s==null?void 0:s(r.rawNode);return d("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),d(Ue,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>c?c(r.rawNode):ee(this.title),trigger:()=>d(Je,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),qo=B({name:"MenuDivider",setup(){const e=X(ne),{mergedClsPrefixRef:o,isHorizontalRef:r}=e;return()=>r.value?null:d("div",{class:`${o.value}-menu-divider`})}}),Go=Se(Xe),Wo=Se(Ze),Yo=Se(Qe);function we(e){return e.type==="divider"||e.type==="render"}function Xo(e){return e.type==="divider"}function Ne(e,o){const{rawNode:r}=e,{show:c}=r;if(c===!1)return null;if(we(r))return Xo(r)?d(qo,Object.assign({key:e.key},r.props)):null;const{labelField:s}=o,{key:i,level:a,isGroup:v}=e,u=Object.assign(Object.assign({},r),{title:r.title||r[s],extra:r.titleExtra||r.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:v});return e.children?e.isGroup?d(Uo,ve(u,Go,{tmNode:e,tmNodes:e.children,key:i})):d(_e,ve(u,Yo,{key:i,rawNodes:r[o.childrenField],tmNodes:e.children,tmNode:e})):d(Do,ve(u,Wo,{key:i,tmNode:e}))}const Ee=[y("&::before","background-color: var(--n-item-color-hover);"),h("arrow",`
 color: var(--n-arrow-color-hover);
 `),h("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),h("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Fe=[h("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Jo=y([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[S("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[y("&::before","display: none;"),S("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[S("selected",[h("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),h("extra","color: var(--n-item-text-color-active-horizontal);")])]),S("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),h("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),te("disabled",[te("selected, child-active",[y("&:focus-within",Fe)]),S("selected",[Q(null,[h("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[Q(null,[h("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Q("border-bottom: 2px solid var(--n-border-color-horizontal);",Fe)]),m("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),te("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S("collapsed",[m("menu-item-content",[S("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),h("arrow","opacity: 0;"),h("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
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
 `,[y("> *","z-index: 1;"),y("&::before",`
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
 `),S("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),S("collapsed",[h("arrow","transform: rotate(0);")]),S("selected",[y("&::before","background-color: var(--n-item-color-active);"),h("arrow","color: var(--n-arrow-color-active);"),h("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),h("extra","color: var(--n-item-text-color-active);")])]),S("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),h("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),h("arrow",`
 color: var(--n-arrow-color-child-active);
 `),h("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),te("disabled",[te("selected, child-active",[y("&:focus-within",Ee)]),S("selected",[Q(null,[h("arrow","color: var(--n-arrow-color-active-hover);"),h("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),h("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[Q(null,[h("arrow","color: var(--n-arrow-color-child-active-hover);"),h("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),h("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[Q(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),Q(null,Ee)]),h("icon",`
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
 `),h("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),m("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[y("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),h("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[So({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[y("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Q(e,o){return[S("hover",e,o),y("&:hover",e,o)]}const Qo=Object.assign(Object.assign({},J.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Zo=B({name:"Menu",props:Qo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=de(e),c=J("Menu","-menu",Jo,ho,e,o),s=X(We,null),i=b(()=>{var f;const{collapsed:_}=e;if(_!==void 0)return _;if(s){const{collapseModeRef:n,collapsedRef:p}=s;if(n.value==="width")return(f=p.value)!==null&&f!==void 0?f:!1}return!1}),a=b(()=>{const{keyField:f,childrenField:_,disabledField:n}=e;return fe(e.items||e.options,{getIgnored(p){return we(p)},getChildren(p){return p[_]},getDisabled(p){return p[n]},getKey(p){var $;return($=p[f])!==null&&$!==void 0?$:p.name}})}),v=b(()=>new Set(a.value.treeNodes.map(f=>f.key))),{watchProps:u}=e,P=V(null);u!=null&&u.includes("defaultValue")?Te(()=>{P.value=e.defaultValue}):P.value=e.defaultValue;const E=ce(e,"value"),N=xe(E,P),g=V([]),O=()=>{g.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(N.value,{includeSelf:!1}).keyPath};u!=null&&u.includes("defaultExpandedKeys")?Te(O):O();const A=ko(e,["expandedNames","expandedKeys"]),z=xe(A,g),k=b(()=>a.value.treeNodes),T=b(()=>a.value.getPath(N.value).keyPath);Z(ne,{props:e,mergedCollapsedRef:i,mergedThemeRef:c,mergedValueRef:N,mergedExpandedKeysRef:z,activePathRef:T,mergedClsPrefixRef:o,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ce(e,"inverted"),doSelect:oe,toggleExpand:U});function oe(f,_){const{"onUpdate:value":n,onUpdateValue:p,onSelect:$}=e;p&&D(p,f,_),n&&D(n,f,_),$&&D($,f,_),P.value=f}function W(f){const{"onUpdate:expandedKeys":_,onUpdateExpandedKeys:n,onExpandedNamesChange:p,onOpenNamesChange:$}=e;_&&D(_,f),n&&D(n,f),p&&D(p,f),$&&D($,f),g.value=f}function U(f){const _=Array.from(z.value),n=_.findIndex(p=>p===f);if(~n)_.splice(n,1);else{if(e.accordion&&v.value.has(f)){const p=_.findIndex($=>v.value.has($));p>-1&&_.splice(p,1)}_.push(f)}W(_)}const R=f=>{const _=a.value.getPath(f??N.value,{includeSelf:!1}).keyPath;if(!_.length)return;const n=Array.from(z.value),p=new Set([...n,..._]);e.accordion&&v.value.forEach($=>{p.has($)&&!_.includes($)&&p.delete($)}),W(Array.from(p))},w=b(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:_},self:n}=c.value,{borderRadius:p,borderColorHorizontal:$,fontSize:co,itemHeight:so,dividerColor:uo}=n,l={"--n-divider-color":uo,"--n-bezier":_,"--n-font-size":co,"--n-border-color-horizontal":$,"--n-border-radius":p,"--n-item-height":so};return f?(l["--n-group-text-color"]=n.groupTextColorInverted,l["--n-color"]=n.colorInverted,l["--n-item-text-color"]=n.itemTextColorInverted,l["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,l["--n-item-text-color-active"]=n.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=n.itemIconColorInverted,l["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=n.arrowColorInverted,l["--n-arrow-color-hover"]=n.arrowColorHoverInverted,l["--n-arrow-color-active"]=n.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=n.itemColorHoverInverted,l["--n-item-color-active"]=n.itemColorActiveInverted,l["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=n.groupTextColor,l["--n-color"]=n.color,l["--n-item-text-color"]=n.itemTextColor,l["--n-item-text-color-hover"]=n.itemTextColorHover,l["--n-item-text-color-active"]=n.itemTextColorActive,l["--n-item-text-color-child-active"]=n.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,l["--n-item-icon-color"]=n.itemIconColor,l["--n-item-icon-color-hover"]=n.itemIconColorHover,l["--n-item-icon-color-active"]=n.itemIconColorActive,l["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=n.arrowColor,l["--n-arrow-color-hover"]=n.arrowColorHover,l["--n-arrow-color-active"]=n.arrowColorActive,l["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,l["--n-arrow-color-child-active"]=n.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,l["--n-item-color-hover"]=n.itemColorHover,l["--n-item-color-active"]=n.itemColorActive,l["--n-item-color-active-hover"]=n.itemColorActiveHover,l["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),l}),C=r?ue("menu",b(()=>e.inverted?"a":"b"),w,e):void 0,Y=$o(),G=V(null),he=V(null);let j=!0;const Ae=()=>{var f;j?j=!1:(f=G.value)===null||f===void 0||f.sync({showAllItemsBeforeCalculate:!0})};function oo(){return document.getElementById(Y)}const le=V(-1);function to(f){le.value=e.options.length-f}function ro(f){f||(le.value=-1)}const no=b(()=>{const f=le.value;return{children:f===-1?[]:e.options.slice(f)}}),lo=b(()=>{const{childrenField:f,disabledField:_,keyField:n}=e;return fe([no.value],{getIgnored(p){return we(p)},getChildren(p){return p[f]},getDisabled(p){return p[_]},getKey(p){var $;return($=p[n])!==null&&$!==void 0?$:p.name}})}),io=b(()=>fe([{}]).treeNodes[0]);function ao(){var f;if(le.value===-1)return d(_e,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:io.value,domId:Y,isEllipsisPlaceholder:!0});const _=lo.value.treeNodes[0],n=T.value,p=!!(!((f=_.children)===null||f===void 0)&&f.some($=>n.includes($.key)));return d(_e,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:p,tmNode:_,domId:Y,rawNodes:_.rawNode.children||[],tmNodes:_.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:A,uncontrolledExpanededKeys:g,mergedExpandedKeys:z,uncontrolledValue:P,mergedValue:N,activePath:T,tmNodes:k,mergedTheme:c,mergedCollapsed:i,cssVars:r?void 0:w,themeClass:C==null?void 0:C.themeClass,overflowRef:G,counterRef:he,updateCounter:()=>{},onResize:Ae,onUpdateOverflow:ro,onUpdateCount:to,renderCounter:ao,getCounter:oo,onRender:C==null?void 0:C.onRender,showOption:R,deriveResponsiveState:Ae}},render(){const{mergedClsPrefix:e,mode:o,themeClass:r,onRender:c}=this;c==null||c();const s=()=>this.tmNodes.map(u=>Ne(u,this.$props)),a=o==="horizontal"&&this.responsive,v=()=>d("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${o}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},a?d(Ro,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:s,counter:this.renderCounter}):s());return a?d(Io,{onResize:this.onResize},{default:v}):v()}}),et={},ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tt=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),rt=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),nt=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1),lt=[tt,rt,nt];function it(e,o){return L(),F("svg",ot,lt)}const at=K(et,[["render",it]]),ct=B({__name:"ReloadButton",setup(e){const o=mo();function r(){o.start(),location.reload()}return(c,s)=>{const i=se,a=Ve;return L(),ze(a,{onClick:r,quaternary:""},{default:M(()=>[I(i,{size:"20"},{default:M(()=>[I(_o)]),_:1})]),_:1})}}}),je=B({__name:"PoolStateNumber",setup(e){let o=Ke();const r=b(()=>o.relayPool.getPool().size),c=b(()=>o.relayPool.allSubIds.size);return(s,i)=>{const a=Ue;return L(),F(ye,null,[I(a,{trigger:"hover"},{trigger:M(()=>[x("span",{style:He({color:H(Le)(H(c),20,400)})},ie(H(c)),5)]),default:M(()=>[me(" "+ie(H(Me)("current_number_of_subscriptions_including_temporary_subscriptions")),1)]),_:1}),me(" / "),I(a,{trigger:"hover"},{trigger:M(()=>[x("span",{style:He({color:H(Le)(H(r),10,80)})},ie(H(r)),5)]),default:M(()=>[me(" "+ie(H(Me)("number_of_current_and_continued_connections")),1)]),_:1})],64)}}}),st={},dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},ut=x("g",{fill:"none"},[x("path",{d:"M3.5 6.5a4.5 4.5 0 0 1 9 0v1.904l.964 2.41A.5.5 0 0 1 13 11.5H3a.5.5 0 0 1-.464-.686l.964-2.41V6.5zm2.562 6C6.283 13.365 7.064 14 8 14c.936 0 1.717-.635 1.938-1.5H6.062z",fill:"currentColor"})],-1),ht=[ut];function mt(e,o){return L(),F("svg",dt,ht)}const vt=K(st,[["render",mt]]),ft={},pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},gt=x("path",{d:"M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),bt=x("circle",{cx:"256",cy:"416",r:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),xt=[gt,bt];function _t(e,o){return L(),F("svg",pt,xt)}const wt=K(ft,[["render",_t]]),Ct={},yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},zt=x("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),St=[zt];function It(e,o){return L(),F("svg",yt,St)}const kt=K(Ct,[["render",It]]),$t={},Rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Pt=x("g",{fill:"none"},[x("path",{d:"M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4zm6.454 1.29a.5.5 0 0 0-.907 0l-.822 1.77l-1.938.234a.5.5 0 0 0-.28.863l1.43 1.328L7.56 11.4a.5.5 0 0 0 .734.533L10 10.985l1.705.948a.5.5 0 0 0 .734-.533l-.375-1.915l1.43-1.328a.5.5 0 0 0-.281-.863l-1.938-.235l-.821-1.77zm-.94 2.443L10 6.687l.486 1.046a.5.5 0 0 0 .393.286l1.145.138l-.845.785a.5.5 0 0 0-.15.463l.222 1.131l-1.008-.56a.5.5 0 0 0-.486 0l-1.008.56l.222-1.131a.5.5 0 0 0-.15-.463l-.844-.785L9.12 8.02a.5.5 0 0 0 .393-.286z",fill:"currentColor"})],-1),Nt=[Pt];function At(e,o){return L(),F("svg",Rt,Nt)}const Tt=K($t,[["render",At]]),Ht={},Lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Mt=x("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),Bt=[Mt];function Ot(e,o){return L(),F("svg",Lt,Bt)}const Et=K(Ht,[["render",Ot]]),Ft={},jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Vt=x("g",{fill:"none"},[x("path",{d:"M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm1.354 4.354l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 1 1 .708.708zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0zM11 12.75h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5z",fill:"currentColor"})],-1),Kt=[Vt];function Ut(e,o){return L(),F("svg",jt,Kt)}const Dt=K(Ft,[["render",Ut]]),qt={},Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Wt=x("g",{fill:"none"},[x("path",{d:"M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z",fill:"currentColor"})],-1),Yt=[Wt];function Xt(e,o){return L(),F("svg",Gt,Yt)}const Jt=K(qt,[["render",Xt]]),Qt={},Zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},er=x("path",{d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",fill:"currentColor"},null,-1),or=x("path",{d:"M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",fill:"currentColor"},null,-1),tr=[er,or];function rr(e,o){return L(),F("svg",Zt,tr)}const nr=K(Qt,[["render",rr]]),lr={},ir={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},ar=x("path",{d:"M437.4 226.3c-.3-.9-.9-1.4-1.4-2l-70-38.6c-.9-.6-2-.6-3.1 0l-58.9 36c-.9.6-1.4 1.7-1.4 2.6l-.9 31.4l-24-16c-.9-.6-2.3-.6-3.1 0L240 260.9l-1.4-35.1c0-.9-.6-2-1.4-2.3l-36-24.3l33.7-17.4c1.1-.6 1.7-1.7 1.7-2.9l-5.7-132.3c0-.9-.9-2-1.7-2.6L138.6.3c-.9-.3-1.7-.3-2.3-.3L12.6 38.6c-1.4.6-2.3 2-2 3.7L38 175.4c.9 3.4 34 27.4 38.6 30.9l-26.9 12.9c-1.4.9-2 2.3-1.7 3.4l20.6 100.3c.6 2.9 23.7 23.1 27.1 26.3l-17.4 10.6c-.9.6-1.7 2-1.4 3.1c1.4 7.1 15.4 77.7 16.9 79.1l65.1 69.1c.6.6 1.4.6 2.3.9c.6 0 1.1-.3 1.7-.6l83.7-66.9c.9-.6 1.1-1.4 1.1-2.3l-2-46l28 23.7c1.1.9 2.9.9 4 0l66.9-53.4c.9-.6 1.1-1.4 1.1-2.3l2.3-33.4l20.3 14c1.1.9 2.6.9 3.7 0l54.6-43.7c.6-.3 1.1-1.1 1.1-2c.9-6.5 10.3-70.8 9.7-72.8zm-204.8 4.8l4 92.6l-90.6 61.2l-14-96.6l100.6-57.2zm-7.7-180l5.4 126l-106.6 55.4L104 97.7l120.9-46.6zM44 173.1L18 48l79.7 49.4l19.4 132.9L44 173.1zm30.6 147.8L55.7 230l70 58.3l13.7 93.4l-64.8-60.8zm24.3 117.7l-13.7-67.1l61.7 60.9l9.7 67.4l-57.7-61.2zm64.5 64.5l-10.6-70.9l85.7-61.4l3.1 70l-78.2 62.3zm82-115.1c0-3.4.9-22.9-2-25.1l-24.3-20l22.3-14.9c2.3-1.7 1.1-5.7 1.1-8l29.4 22.6l.6 68.3l-27.1-22.9zm94.3-25.4l-60.9 48.6l-.6-68.6l65.7-46.9l-4.2 66.9zm27.7-25.7l-19.1-13.4l2-34c.3-.9-.3-2-1.1-2.6L308 259.7l.6-30l64.6 40.6l-5.8 66.6zm54.6-39.8l-48.3 38.3l5.7-65.1l51.1-36.6l-8.5 63.4z",fill:"currentColor"},null,-1),cr=[ar];function sr(e,o){return L(),F("svg",ir,cr)}const dr=K(lr,[["render",sr]]),ur={},hr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mr=x("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),vr=x("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1),fr=[mr,vr];function pr(e,o){return L(),F("svg",hr,fr)}const gr=K(ur,[["render",pr]]),br={},xr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},_r=x("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",fill:"currentColor"},null,-1),wr=[_r];function Cr(e,o){return L(),F("svg",xr,wr)}const yr=K(br,[["render",Cr]]),zr={},Sr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 640 512"},Ir=x("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",fill:"currentColor"},null,-1),kr=[Ir];function $r(e,o){return L(),F("svg",Sr,kr)}const Rr=K(zr,[["render",$r]]),eo=B({__name:"Sidebar",props:{collapsed:{type:Boolean}},setup(e){let o=Ke(Co);b(()=>o.getNostrApiMode()!==o.NostrApiMode.NotLogin);const r=b(()=>[{key:"Home",label:t("home"),href:"/home",icon:q(nr)},{key:"MarkdownEditor",label:t("markdown_editor"),href:"/markdown/editor",icon:q(Jt)},{key:"Profile",label:t("profile"),href:"/profile",icon:q(yr)},{key:"Relays",label:t("relays"),href:"/relays",icon:q(dr)},{key:"Collect",label:t("collect"),href:"/collect",icon:q(Tt)},{key:"Channels",label:t("channel"),href:"/channels",icon:q(Rr)},{key:"Notice",label:t("notice"),href:"/notice",icon:q(vt)},{key:"Task",label:t("task"),href:"/task",icon:q(Dt)},{key:"Settings",label:t("settings"),href:"/settings",icon:q(gr)},{key:"About",label:t("about"),href:"/about",icon:q(wt)}]);function c(a){return"href"in a?d(vo,{to:a.href},{default:()=>a.label}):typeof a.label=="function"?a.label():a.label}function s(a){return a.icon?a.icon():d(se,null,{default:()=>d(kt)})}function i(){return d(se,null,{default:()=>d(Et)})}return(a,v)=>(L(),ze(H(Zo),{collapsed:a.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:H(r),"render-label":c,"render-icon":s,"expand-icon":i},null,8,["collapsed","options"]))}}),Pr=x("span",{class:"ml-6 hidden md:block"}," Jumpalong ",-1),Nr={class:"flex justify-center items-center"},Ar=x("div",{class:"ml-3"},null,-1),Tr={class:"ml-3 clashidden sm:block"},Hr={class:"ml-3 hidden sm:block"},Lr={class:"ml-3 hidden sm:block"},Mr={class:"ml-3 md:hidden"},Br={class:"flex items-center"},Or=B({__name:"LayoutHeader",setup(e){const o=fo(),r=V(!1),c=po();return go(()=>c.path,()=>{r.value=!1}),(s,i)=>{const a=se,v=Ve,u=Po,P=No;return L(),F(ye,null,[x("span",{class:"text-xl font-bold flex justify-center items-center",onClick:i[0]||(i[0]=()=>H(o).push("/"))},[I(a,{size:"40"},{default:M(()=>[I(xo)]),_:1}),Pr]),x("div",Nr,[Ar,x("div",Tr,[I(je)]),x("div",Hr,[I(Be)]),x("div",Lr,[I(Oe)]),x("div",Mr,[I(v,{quaternary:"",onClick:i[1]||(i[1]=()=>r.value=!r.value)},{default:M(()=>[I(a,{size:"22"},{default:M(()=>[I(at)]),_:1})]),_:1}),I(P,{show:r.value,"onUpdate:show":i[2]||(i[2]=E=>r.value=E),width:"100%",placement:"right"},{default:M(()=>[I(u,{title:"Menu",closable:""},{footer:M(()=>[x("div",Br,[I(ct),I(Oe),I(Be),I(je)])]),default:M(()=>[I(eo,{collapsed:!1})]),_:1})]),_:1},8,["show"])])])],64)}}}),Er=x("div",null,null,-1),Fr={class:"h-full overflow-x-hidden"},jr=x("div",null,null,-1),kn=B({__name:"LayoutView",setup(e){__loggerFactory.create("/home/runner/work/jumpalong/jumpalong/apps/browser-ui/src/views/LayoutView.vue").info();const r=V(!0);return(c,s)=>(L(),ze(H(ge),{style:{height:"100vh"}},{default:M(()=>[I(H(Oo),{class:"h-14 md:h-20 flex justify-between items-center px-3 relative",style:{transition:"height 0.5s"},bordered:""},{default:M(()=>[I(Or)]),_:1}),I(H(ge),{class:"absolute w-full top-14 md:top-20 bottom-0","has-sider":"",style:{transition:"top 0.5s, bottoom 0.5s"}},{default:M(()=>[I(H(Ko),{class:"hidden md:flex","native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:H(r),"show-trigger":"",onCollapse:s[0]||(s[0]=i=>r.value=!0),onExpand:s[1]||(s[1]=i=>r.value=!1)},{default:M(()=>[Er,I(eo,{collapsed:H(r)},null,8,["collapsed"])]),_:1},8,["collapsed"]),I(H(ge),{"content-style":"padding: 8px;"},{default:M(()=>[x("div",Fr,[jr,I(bo)])]),_:1})]),_:1})]),_:1}))}});export{kn as default};
