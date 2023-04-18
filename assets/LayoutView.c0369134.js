import{f as V,j as u,l as ne,c as m,a as P,h as W,av as F,u as ue,cJ as _e,p as Q,cK as Be,n as f,q as he,aO as Ve,d as h,b as S,x as Ee,m as G,bG as fe,aH as ge,aA as ce,r as D,bi as Z,L as me,aJ as be,cc as to,cr as Fe,bI as xe,bq as pe,e as ie,ca as no,cL as ro,aM as Ie,c4 as lo,y as A,I as B,H as v,A as T,aV as _,F as J,C as k,b2 as se,D as oe,cp as Re,cM as Pe,O,G as te,c6 as io,c7 as ao,bR as co,cN as so,_ as ve,cO as uo,br as ho,cP as mo,Q as we,aC as de,aq as Te,aw as vo,z as re,cq as fo,cv as po,b1 as go,cQ as bo,S as _o,ac as xo,bA as j,bN as wo,cR as je,bP as Ke,aU as yo,cS as Co,cT as zo,cU as So,cV as ko,cW as $o,bz as Io,cX as Ro,T as Po,cY as To}from"./index.271bc2a1.js";import{F as Ao}from"./Favicon.fea44f4f.js";import{C as Lo}from"./CloudUpload.45cd4f18.js";import{N as ee}from"./Icon.a8c61380.js";import{_ as No}from"./Empty.f48bf955.js";import{h as Ho,f as Mo}from"./use.07d5e992.js";import{E as Oo}from"./Ellipsis.e06febeb.js";import{M as Ae}from"./MdSearch.a05389c6.js";import{_ as Bo}from"./Input.7210c329.js";import{C as Vo,_ as De}from"./Dropdown.95462754.js";import{r as q}from"./naiveUi.67f4ceee.js";import{c as Eo}from"./create.2deeaf6a.js";import{_ as Le,a as Ne}from"./ThemeButton.vue_vue_type_script_setup_true_lang.181ccdf9.js";import{R as Fo}from"./ReloadCircleSharp.d1b9f135.js";import{_ as jo,a as Ko}from"./DrawerContent.c18236f3.js";import{u as Do}from"./use-theme-vars.34541e45.js";import"./autoAddRelayurlByEventIdStaff.5161a639.js";import"./getCacheStaff.464a66a0.js";const Uo=V({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ue=ne("n-layout-sider"),ye={type:String,default:"static"},qo=m("layout",`
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
 `),P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Go={embedded:Boolean,position:ye,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},qe=ne("n-layout");function Wo(e){return V({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},W.props),Go),setup(o){const t=F(null),r=F(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=ue(o),s=W("Layout","-layout",qo,_e,o,a);function d(z,R){if(o.nativeScrollbar){const{value:M}=t;M&&(R===void 0?M.scrollTo(z):M.scrollTo(z,R))}else{const{value:M}=r;M&&M.scrollTo(z,R)}}Q(qe,o);let c=0,p=0;const N=z=>{var R;const M=z.target;c=M.scrollLeft,p=M.scrollTop,(R=o.onScroll)===null||R===void 0||R.call(o,z)};Be(()=>{if(o.nativeScrollbar){const z=t.value;z&&(z.scrollTop=p,z.scrollLeft=c)}});const I={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},x={scrollTo:d},C=f(()=>{const{common:{cubicBezierEaseInOut:z},self:R}=s.value;return{"--n-bezier":z,"--n-color":o.embedded?R.colorEmbedded:R.color,"--n-text-color":R.textColor}}),b=l?he("layout",f(()=>o.embedded?"e":""),C,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:I,mergedTheme:s,handleNativeElScroll:N,cssVars:l?void 0:C,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},x)},render(){var o;const{mergedClsPrefix:t,hasSider:r}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=r?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return u("div",{class:l,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):u(Ve,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const Yo=Wo(!1),Xo=m("layout-header",`
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
 `)]),Jo={position:ye,inverted:Boolean,bordered:{type:Boolean,default:!1}},Qo=V({name:"LayoutHeader",props:Object.assign(Object.assign({},W.props),Jo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ue(e),r=W("Layout","-layout-header",Xo,_e,e,o),a=f(()=>{const{common:{cubicBezierEaseInOut:s},self:d}=r.value,c={"--n-bezier":s};return e.inverted?(c["--n-color"]=d.headerColorInverted,c["--n-text-color"]=d.textColorInverted,c["--n-border-color"]=d.headerBorderColorInverted):(c["--n-color"]=d.headerColor,c["--n-text-color"]=d.textColor,c["--n-border-color"]=d.headerBorderColor),c}),l=t?he("layout-header",f(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Zo=m("layout-sider",`
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
`,[P("bordered",[h("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),h("left-placement",[P("bordered",[h("border",`
 right: 0;
 `)])]),P("right-placement",`
 justify-content: flex-start;
 `,[P("bordered",[h("border",`
 left: 0;
 `)]),P("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[S("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[S("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),P("collapsed",[m("layout-toggle-bar",[S("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
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
 `),S("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),S("&:hover",[h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),h("border",`
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
 `),P("show-content",[m("layout-sider-scroll-container",{opacity:1})]),P("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),et=V({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Ee,{clsPrefix:e},{default:()=>u(Vo,null)}))}}),ot=V({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),tt={position:ye,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},nt=V({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),tt),setup(e){const o=G(qe),t=F(null),r=F(null),a=f(()=>fe(c.value?e.collapsedWidth:e.width)),l=f(()=>e.collapseMode!=="transform"?{}:{minWidth:fe(e.width)}),s=f(()=>o?o.siderPlacement:"left"),d=F(e.defaultCollapsed),c=ge(ce(e,"collapsed"),d);function p(H,$){if(e.nativeScrollbar){const{value:L}=t;L&&($===void 0?L.scrollTo(H):L.scrollTo(H,$))}else{const{value:L}=r;L&&L.scrollTo(H,$)}}function N(){const{"onUpdate:collapsed":H,onUpdateCollapsed:$,onExpand:L,onCollapse:w}=e,{value:y}=c;$&&D($,!y),H&&D(H,!y),d.value=!y,y?L&&D(L):w&&D(w)}let I=0,x=0;const C=H=>{var $;const L=H.target;I=L.scrollLeft,x=L.scrollTop,($=e.onScroll)===null||$===void 0||$.call(e,H)};Be(()=>{if(e.nativeScrollbar){const H=t.value;H&&(H.scrollTop=x,H.scrollLeft=I)}}),Q(Ue,{collapsedRef:c,collapseModeRef:ce(e,"collapseMode")});const{mergedClsPrefixRef:b,inlineThemeDisabled:z}=ue(e),R=W("Layout","-layout-sider",Zo,_e,e,b);function M(H){var $,L;H.propertyName==="max-width"&&(c.value?($=e.onAfterLeave)===null||$===void 0||$.call(e):(L=e.onAfterEnter)===null||L===void 0||L.call(e))}const Y={scrollTo:p},U=f(()=>{const{common:{cubicBezierEaseInOut:H},self:$}=R.value,{siderToggleButtonColor:L,siderToggleButtonBorder:w,siderToggleBarColor:y,siderToggleBarColorHover:n}=$,g={"--n-bezier":H,"--n-toggle-button-color":L,"--n-toggle-button-border":w,"--n-toggle-bar-color":y,"--n-toggle-bar-color-hover":n};return e.inverted?(g["--n-color"]=$.siderColorInverted,g["--n-text-color"]=$.textColorInverted,g["--n-border-color"]=$.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColorInverted,g.__invertScrollbar=$.__invertScrollbar):(g["--n-color"]=$.siderColor,g["--n-text-color"]=$.textColor,g["--n-border-color"]=$.siderBorderColor,g["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColor),g}),K=z?he("layout-sider",f(()=>e.inverted?"a":"b"),U,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:b,mergedTheme:R,styleMaxWidth:a,mergedCollapsed:c,scrollContainerStyle:l,siderPlacement:s,handleNativeElScroll:C,handleTransitionend:M,handleTriggerClick:N,inlineThemeDisabled:z,cssVars:U,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},Y)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:fe(this.width)}]},this.nativeScrollbar?u("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(Ve,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?u(ot,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(et,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${o}-layout-sider__border`}):null)}}),le=ne("n-menu"),Ce=ne("n-submenu"),ze=ne("n-menu-item-group"),ae=8;function Se(e){const o=G(le),{props:t,mergedCollapsedRef:r}=o,a=G(Ce,null),l=G(ze,null),s=f(()=>t.mode==="horizontal"),d=f(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=f(()=>{var x;return Math.max((x=t.collapsedIconSize)!==null&&x!==void 0?x:t.iconSize,t.iconSize)}),p=f(()=>{var x;return!s.value&&e.root&&r.value&&(x=t.collapsedIconSize)!==null&&x!==void 0?x:t.iconSize}),N=f(()=>{if(s.value)return;const{collapsedWidth:x,indent:C,rootIndent:b}=t,{root:z,isGroup:R}=e,M=b===void 0?C:b;if(z)return r.value?x/2-c.value/2:M;if(l)return C/2+l.paddingLeftRef.value;if(a)return(R?C/2:C)+a.paddingLeftRef.value}),I=f(()=>{const{collapsedWidth:x,indent:C,rootIndent:b}=t,{value:z}=c,{root:R}=e;return s.value||!R||!r.value?ae:(b===void 0?C:b)+z+ae-(x+z)/2});return{dropdownPlacement:d,activeIconSize:p,maxIconSize:c,paddingLeft:N,iconMarginRight:I,NMenu:o,NSubmenu:a}}const ke={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ge=Object.assign(Object.assign({},ke),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),rt=V({name:"MenuOptionGroup",props:Ge,setup(e){Q(Ce,null);const o=Se(e);Q(ze,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:r}=G(le);return function(){const{value:a}=t,l=o.paddingLeft.value,{nodeProps:s}=r,d=s==null?void 0:s(e.tmNode.rawNode);return u("div",{class:`${a}-menu-item-group`,role:"group"},u("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),Z(e.title),e.extra?u(me,null," ",Z(e.extra)):null),u("div",null,e.tmNodes.map(c=>$e(c,r))))}}}),We=V({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=G(le);return{menuProps:o,style:f(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:f(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:r,renderExtra:a,expandIcon:l}}=this,s=t?t(o.rawNode):Z(this.icon);return u("div",{onClick:d=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(o.rawNode):Z(this.title),this.extra||a?u("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):Z(this.extra)):null),this.showArrow?u(Ee,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(o.rawNode):u(Uo,null)}):null)}}),Ye=Object.assign(Object.assign({},ke),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),lt=V({name:"Submenu",props:Ye,setup(e){const o=Se(e),{NMenu:t,NSubmenu:r}=o,{props:a,mergedCollapsedRef:l,mergedThemeRef:s}=t,d=f(()=>{const{disabled:x}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:x}),c=F(!1);Q(Ce,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:d}),Q(ze,null);function p(){const{onClick:x}=e;x&&x()}function N(){d.value||(l.value||t.toggleExpand(e.internalKey),p())}function I(x){c.value=x}return{menuProps:a,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:c,paddingLeft:o.paddingLeft,mergedDisabled:d,mergedValue:t.mergedValueRef,childActive:be(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:f(()=>a.mode==="horizontal"?!1:l.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:f(()=>!d.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:I,handleClick:N}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:r}}=this,a=()=>{const{isHorizontal:s,paddingLeft:d,collapsed:c,mergedDisabled:p,maxIconSize:N,activeIconSize:I,title:x,childActive:C,icon:b,handleClick:z,menuProps:{nodeProps:R},dropdownShow:M,iconMarginRight:Y,tmNode:U,mergedClsPrefix:K}=this,H=R==null?void 0:R(U.rawNode);return u("div",Object.assign({},H,{class:[`${K}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),u(We,{tmNode:U,paddingLeft:d,collapsed:c,disabled:p,iconMarginRight:Y,maxIconSize:N,activeIconSize:I,title:x,extra:this.extra,showArrow:!s,childActive:C,clsPrefix:K,icon:b,hover:M,onClick:z}))},l=()=>u(to,null,{default:()=>{const{tmNodes:s,collapsed:d}=this;return d?null:u("div",{class:`${o}-submenu-children`,role:"menu"},s.map(c=>$e(c,this.menuProps)))}});return this.root?u(De,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>u("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):u("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),Xe=Object.assign(Object.assign({},ke),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),it=V({name:"MenuOption",props:Xe,setup(e){const o=Se(e),{NSubmenu:t,NMenu:r}=o,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:s}=r,d=t?t.mergedDisabledRef:{value:!1},c=f(()=>d.value||e.disabled);function p(I){const{onClick:x}=e;x&&x(I)}function N(I){c.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),p(I))}return{mergedClsPrefix:l,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:be(()=>e.root&&s.value&&a.mode!=="horizontal"&&!c.value),selected:be(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:N}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:r,nodeProps:a}}=this,l=a==null?void 0:a(t.rawNode);return u("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),u(Fe,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):Z(this.title),trigger:()=>u(We,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),at=V({name:"MenuDivider",setup(){const e=G(le),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:u("div",{class:`${o.value}-menu-divider`})}}),ct=xe(Ge),st=xe(Xe),dt=xe(Ye);function Je(e){return e.type==="divider"||e.type==="render"}function ut(e){return e.type==="divider"}function $e(e,o){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(Je(t))return ut(t)?u(at,Object.assign({key:e.key},t.props)):null;const{labelField:a}=o,{key:l,level:s,isGroup:d}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[a],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:s,root:s===0,isGroup:d});return e.children?e.isGroup?u(rt,pe(c,ct,{tmNode:e,tmNodes:e.children,key:l})):u(lt,pe(c,dt,{key:l,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):u(it,pe(c,st,{key:l,tmNode:e}))}const He=[S("&::before","background-color: var(--n-item-color-hover);"),h("arrow",`
 color: var(--n-arrow-color-hover);
 `),h("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[S("a",`
 color: var(--n-item-text-color-hover);
 `),h("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Me=[h("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[S("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],ht=S([m("menu",`
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
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[S("&::before","display: none;"),P("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[P("selected",[h("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[S("a","color: var(--n-item-text-color-active-horizontal);"),h("extra","color: var(--n-item-text-color-active-horizontal);")])]),P("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[S("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),h("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ie("disabled",[ie("selected, child-active",[S("&:focus-within",Me)]),P("selected",[X(null,[h("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[S("a","color: var(--n-item-text-color-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),P("child-active",[X(null,[h("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[S("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),X("border-bottom: 2px solid var(--n-border-color-horizontal);",Me)]),m("menu-item-content-header",[S("a","color: var(--n-item-text-color-horizontal);")])])]),P("collapsed",[m("menu-item-content",[P("selected",[S("&::before",`
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
 `),P("collapsed",[h("arrow","transform: rotate(0);")]),P("selected",[S("&::before","background-color: var(--n-item-color-active);"),h("arrow","color: var(--n-arrow-color-active);"),h("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[S("a","color: var(--n-item-text-color-active);"),h("extra","color: var(--n-item-text-color-active);")])]),P("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[S("a",`
 color: var(--n-item-text-color-child-active);
 `),h("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),h("arrow",`
 color: var(--n-arrow-color-child-active);
 `),h("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ie("disabled",[ie("selected, child-active",[S("&:focus-within",He)]),P("selected",[X(null,[h("arrow","color: var(--n-arrow-color-active-hover);"),h("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[S("a","color: var(--n-item-text-color-active-hover);"),h("extra","color: var(--n-item-text-color-active-hover);")])])]),P("child-active",[X(null,[h("arrow","color: var(--n-arrow-color-child-active-hover);"),h("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[S("a","color: var(--n-item-text-color-child-active-hover);"),h("extra","color: var(--n-item-text-color-child-active-hover);")])])]),P("selected",[X(null,[S("&::before","background-color: var(--n-item-color-active-hover);")])]),X(null,He)]),h("icon",`
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
 `,[no({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[S("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function X(e,o){return[P("hover",e,o),S("&:hover",e,o)]}const mt=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),vt=V({name:"Menu",props:mt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ue(e),r=W("Menu","-menu",ht,ro,e,o),a=G(Ue,null),l=f(()=>{var w;const{collapsed:y}=e;if(y!==void 0)return y;if(a){const{collapseModeRef:n,collapsedRef:g}=a;if(n.value==="width")return(w=g.value)!==null&&w!==void 0?w:!1}return!1}),s=f(()=>{const{keyField:w,childrenField:y,disabledField:n}=e;return Eo(e.items||e.options,{getIgnored(g){return Je(g)},getChildren(g){return g[y]},getDisabled(g){return g[n]},getKey(g){var E;return(E=g[w])!==null&&E!==void 0?E:g.name}})}),d=f(()=>new Set(s.value.treeNodes.map(w=>w.key))),{watchProps:c}=e,p=F(null);c!=null&&c.includes("defaultValue")?Ie(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const N=ce(e,"value"),I=ge(N,p),x=F([]),C=()=>{x.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(I.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ie(C):C();const b=lo(e,["expandedNames","expandedKeys"]),z=ge(b,x),R=f(()=>s.value.treeNodes),M=f(()=>s.value.getPath(I.value).keyPath);Q(le,{props:e,mergedCollapsedRef:l,mergedThemeRef:r,mergedValueRef:I,mergedExpandedKeysRef:z,activePathRef:M,mergedClsPrefixRef:o,isHorizontalRef:f(()=>e.mode==="horizontal"),invertedRef:ce(e,"inverted"),doSelect:Y,toggleExpand:K});function Y(w,y){const{"onUpdate:value":n,onUpdateValue:g,onSelect:E}=e;g&&D(g,w,y),n&&D(n,w,y),E&&D(E,w,y),p.value=w}function U(w){const{"onUpdate:expandedKeys":y,onUpdateExpandedKeys:n,onExpandedNamesChange:g,onOpenNamesChange:E}=e;y&&D(y,w),n&&D(n,w),g&&D(g,w),E&&D(E,w),x.value=w}function K(w){const y=Array.from(z.value),n=y.findIndex(g=>g===w);if(~n)y.splice(n,1);else{if(e.accordion&&d.value.has(w)){const g=y.findIndex(E=>d.value.has(E));g>-1&&y.splice(g,1)}y.push(w)}U(y)}const H=w=>{const y=s.value.getPath(w!=null?w:I.value,{includeSelf:!1}).keyPath;if(!y.length)return;const n=Array.from(z.value),g=new Set([...n,...y]);e.accordion&&d.value.forEach(E=>{g.has(E)&&!y.includes(E)&&g.delete(E)}),U(Array.from(g))},$=f(()=>{const{inverted:w}=e,{common:{cubicBezierEaseInOut:y},self:n}=r.value,{borderRadius:g,borderColorHorizontal:E,fontSize:Ze,itemHeight:eo,dividerColor:oo}=n,i={"--n-divider-color":oo,"--n-bezier":y,"--n-font-size":Ze,"--n-border-color-horizontal":E,"--n-border-radius":g,"--n-item-height":eo};return w?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),L=t?he("menu",f(()=>e.inverted?"a":"b"),$,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:b,uncontrolledExpanededKeys:x,mergedExpandedKeys:z,uncontrolledValue:p,mergedValue:I,activePath:M,tmNodes:R,mergedTheme:r,mergedCollapsed:l,cssVars:t?void 0:$,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,showOption:H}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:r}=this;return r==null||r(),u("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>$e(a,this.$props)))}}),Oe=V({__name:"PoolStateNumber",setup(e){const o=f(()=>Re.getPool().size),t=f(()=>Re.allSubIds.size);return(r,a)=>{const l=Fe;return A(),B(me,null,[v(l,{trigger:"hover"},{trigger:T(()=>[_("span",{style:se({color:k(Pe)(k(t),20,400)})},J(k(t)),5)]),default:T(()=>[oe(" "+J(k(O)("tips.current_number_of_subscriptions_including_temporary_subscriptions")),1)]),_:1}),oe(" / "),v(l,{trigger:"hover"},{trigger:T(()=>[_("span",{style:se({color:k(Pe)(k(o),10,80)})},J(k(o)),5)]),default:T(()=>[oe(" "+J(k(O)("tips.number_of_current_and_continued_connections")),1)]),_:1})],64)}}}),ft={class:""},pt={key:0,class:"ml-1"},gt=V({__name:"Upload",setup(e){const{isShow:o}=so(),t=mo(),r=f(()=>t.value.filter(a=>a.status==="uploading").length);return(a,l)=>{const s=ee,d=ve,c=No,p=uo,N=ho;return A(),B("div",ft,[v(N,{show:k(o),"onUpdate:show":l[1]||(l[1]=I=>co(o)?o.value=I:null),"display-directive":"show",trigger:"manual"},{trigger:T(()=>[v(d,{quaternary:"",onClick:l[0]||(l[0]=I=>o.value=!k(o))},{default:T(()=>[v(s,{size:20},{default:T(()=>[v(Lo)]),_:1}),k(r)>0?(A(),B("span",pt,J(k(r)),1)):te("",!0)]),_:1})]),default:T(()=>[io(v(c,{description:k(O)("empty_text")},null,8,["description"]),[[ao,k(t).length===0]]),v(p,{class:"min-w-[25em]"})]),_:1},8,["show"])])}}});function bt(e,o,t){const r=we(),a=F(!0);de(()=>r.name,async()=>{r.name===e?a.value=!0:a.value=!1},{immediate:!0});const l=F(o);return de(a,async()=>{a.value?(await Te(0),l.value=t):(await Te(0),l.value=o)},{immediate:!0}),{teleportTo:l,isView:a}}const _t=_("div",{id:"search-input-default"},null,-1),xt={key:1,class:"md:hidden"},wt=V({__name:"SearchForm",setup(e){const o=_o();we();const t=F(""),r=vo("search-history",[]),a=f(()=>{const C=[];for(const b of r.value)C.push({label:()=>u(Oo,{class:"flex-shrink flex w-sm max-w-screen",style:{width:"min-content",maxWidth:"100vw"}},{default:()=>b}),value:b,key:b});return C});function l(){o.push({name:"search"})}function s(C){C==null||C.preventDefault(),d()}function d(){c.value=!1;const C=t.value.trim();if(!C){l();return}const b=new Set;b.add(C),xo(b,r.value),r.value=[...b].slice(0,10),o.push({name:"search",params:{value:C}})}const c=F(!1),p=Ho(),{isView:N,teleportTo:I}=bt("search","#search-input-default","#search-input");function x(C){c.value=!1,t.value=C,d()}return(C,b)=>{const z=ee,R=ve,M=Bo,Y=De;return A(),B(me,null,[_t,k(p)?(A(),re(bo,{key:0,to:k(I)},[_("div",{class:go(["flex-shrink flex-1",{"hidden md:block":!k(N)}])},[v(Y,{show:c.value,onClickoutside:b[3]||(b[3]=()=>c.value=!1),options:k(a),onSelect:x},{default:T(()=>[v(M,{clearable:"",round:"",onKeyup:fo(d,["enter"]),value:t.value,"onUpdate:value":b[0]||(b[0]=U=>t.value=U),onFocus:b[1]||(b[1]=()=>c.value=!0),onClick:b[2]||(b[2]=()=>c.value=!0),placeholder:k(O)("search")},{suffix:T(()=>[v(R,{class:"ml-1",size:"tiny",quaternary:"",circle:"",onClick:po(s,["stop"])},{icon:T(()=>[v(z,null,{default:T(()=>[v(Ae)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["onKeyup","value","placeholder"])]),_:1},8,["show","options"])],2)],8,["to"])):te("",!0),k(N)?te("",!0):(A(),B("div",xt,[v(R,{quaternary:"",circle:"",onClick:l},{icon:T(()=>[v(z,null,{default:T(()=>[v(Ae)]),_:1})]),_:1})]))],64)}}}),yt={},Ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},zt=_("g",{fill:"none"},[_("path",{d:"M3.5 6.5a4.5 4.5 0 0 1 9 0v1.904l.964 2.41A.5.5 0 0 1 13 11.5H3a.5.5 0 0 1-.464-.686l.964-2.41V6.5zm2.562 6C6.283 13.365 7.064 14 8 14c.936 0 1.717-.635 1.938-1.5H6.062z",fill:"currentColor"})],-1),St=[zt];function kt(e,o){return A(),B("svg",Ct,St)}const $t=j(yt,[["render",kt]]),It={},Rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Pt=_("path",{d:"M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Tt=_("circle",{cx:"256",cy:"416",r:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),At=[Pt,Tt];function Lt(e,o){return A(),B("svg",Rt,At)}const Nt=j(It,[["render",Lt]]),Ht={},Mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ot=_("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Bt=[Ot];function Vt(e,o){return A(),B("svg",Mt,Bt)}const Et=j(Ht,[["render",Vt]]),Ft={},jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Kt=_("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),Dt=[Kt];function Ut(e,o){return A(),B("svg",jt,Dt)}const qt=j(Ft,[["render",Ut]]),Gt={},Wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Yt=_("g",{fill:"none"},[_("path",{d:"M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm1.354 4.354l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 1 1 .708.708zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0zM11 12.75h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5z",fill:"currentColor"})],-1),Xt=[Yt];function Jt(e,o){return A(),B("svg",Wt,Xt)}const Qt=j(Gt,[["render",Jt]]),Zt={},en={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},on=_("g",{fill:"none"},[_("path",{d:"M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z",fill:"currentColor"})],-1),tn=[on];function nn(e,o){return A(),B("svg",en,tn)}const rn=j(Zt,[["render",nn]]),ln={},an={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},cn=_("path",{d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",fill:"currentColor"},null,-1),sn=_("path",{d:"M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",fill:"currentColor"},null,-1),dn=[cn,sn];function un(e,o){return A(),B("svg",an,dn)}const hn=j(ln,[["render",un]]),mn={},vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},fn=_("path",{d:"M437.4 226.3c-.3-.9-.9-1.4-1.4-2l-70-38.6c-.9-.6-2-.6-3.1 0l-58.9 36c-.9.6-1.4 1.7-1.4 2.6l-.9 31.4l-24-16c-.9-.6-2.3-.6-3.1 0L240 260.9l-1.4-35.1c0-.9-.6-2-1.4-2.3l-36-24.3l33.7-17.4c1.1-.6 1.7-1.7 1.7-2.9l-5.7-132.3c0-.9-.9-2-1.7-2.6L138.6.3c-.9-.3-1.7-.3-2.3-.3L12.6 38.6c-1.4.6-2.3 2-2 3.7L38 175.4c.9 3.4 34 27.4 38.6 30.9l-26.9 12.9c-1.4.9-2 2.3-1.7 3.4l20.6 100.3c.6 2.9 23.7 23.1 27.1 26.3l-17.4 10.6c-.9.6-1.7 2-1.4 3.1c1.4 7.1 15.4 77.7 16.9 79.1l65.1 69.1c.6.6 1.4.6 2.3.9c.6 0 1.1-.3 1.7-.6l83.7-66.9c.9-.6 1.1-1.4 1.1-2.3l-2-46l28 23.7c1.1.9 2.9.9 4 0l66.9-53.4c.9-.6 1.1-1.4 1.1-2.3l2.3-33.4l20.3 14c1.1.9 2.6.9 3.7 0l54.6-43.7c.6-.3 1.1-1.1 1.1-2c.9-6.5 10.3-70.8 9.7-72.8zm-204.8 4.8l4 92.6l-90.6 61.2l-14-96.6l100.6-57.2zm-7.7-180l5.4 126l-106.6 55.4L104 97.7l120.9-46.6zM44 173.1L18 48l79.7 49.4l19.4 132.9L44 173.1zm30.6 147.8L55.7 230l70 58.3l13.7 93.4l-64.8-60.8zm24.3 117.7l-13.7-67.1l61.7 60.9l9.7 67.4l-57.7-61.2zm64.5 64.5l-10.6-70.9l85.7-61.4l3.1 70l-78.2 62.3zm82-115.1c0-3.4.9-22.9-2-25.1l-24.3-20l22.3-14.9c2.3-1.7 1.1-5.7 1.1-8l29.4 22.6l.6 68.3l-27.1-22.9zm94.3-25.4l-60.9 48.6l-.6-68.6l65.7-46.9l-4.2 66.9zm27.7-25.7l-19.1-13.4l2-34c.3-.9-.3-2-1.1-2.6L308 259.7l.6-30l64.6 40.6l-5.8 66.6zm54.6-39.8l-48.3 38.3l5.7-65.1l51.1-36.6l-8.5 63.4z",fill:"currentColor"},null,-1),pn=[fn];function gn(e,o){return A(),B("svg",vn,pn)}const bn=j(mn,[["render",gn]]),_n={},xn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},wn=_("path",{d:"M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16z",fill:"currentColor"},null,-1),yn=_("path",{d:"M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z",fill:"currentColor"},null,-1),Cn=[wn,yn];function zn(e,o){return A(),B("svg",xn,Cn)}const Sn=j(_n,[["render",zn]]),kn={},$n={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},In=_("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),Rn=_("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1),Pn=[In,Rn];function Tn(e,o){return A(),B("svg",$n,Pn)}const An=j(kn,[["render",Tn]]),Ln={},Nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},Hn=_("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",fill:"currentColor"},null,-1),Mn=[Hn];function On(e,o){return A(),B("svg",Nn,Mn)}const Bn=j(Ln,[["render",On]]),Vn={},En={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 640 512"},Fn=_("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",fill:"currentColor"},null,-1),jn=[Fn];function Kn(e,o){return A(),B("svg",En,jn)}const Dn=j(Vn,[["render",Kn]]),Un=V({__name:"LogoutButton",setup(e){const o=wo(),t=f(()=>je()!==Ke.NotLogin);function r(){t.value?o.warning({title:O("warning"),content:O("message.logout_dialog_content"),positiveText:O("yes"),negativeText:O("no"),onPositiveClick:()=>{Co()}}):zo()}return(a,l)=>(A(),B("div",{onClick:r},[yo(a.$slots,"default",{},()=>[oe(J(k(O)("logout")),1)])]))}}),Qe=V({__name:"Sidebar",props:{collapsed:{type:Boolean}},setup(e){const o=f(()=>je()!==Ke.NotLogin),t=f(()=>[{key:"Home",label:O("home"),href:"/home",icon:q(hn)},{key:"MarkdownEditor",label:O("markdown_editor"),href:"/markdown/editor",icon:q(rn)},{key:"Profile",label:O("profile"),href:"/profile",icon:q(Bn)},{key:"Relays",label:O("relays"),href:"/relays",icon:q(bn)},{key:"Channels",label:O("channel"),href:"/channels",icon:q(Dn)},{key:"Notice",label:O("notice"),href:"/notice",icon:q($t)},{key:"Task",label:O("task"),href:"/task",icon:q(Qt)},{key:"Settings",label:O("settings"),href:"/settings",icon:q(An)},{key:"About",label:O("about"),href:"/about",icon:q(Nt)},{key:"Logout",label:()=>u(Un,{},{default:()=>o.value?O("logout"):O("login")}),icon:q(Sn)}]);function r(s){return"href"in s?u(So,{to:s.href},{default:()=>s.label}):ko(s.label)?s.label():s.label}function a(s){return s.icon?s.icon():u(ee,null,{default:()=>u(Et)})}function l(){return u(ee,null,{default:()=>u(qt)})}return(s,d)=>(A(),re(k(vt),{collapsed:e.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:k(t),"render-label":r,"render-icon":a,"expand-icon":l},null,8,["collapsed","options"]))}}),qn={},Gn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Wn=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),Yn=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),Xn=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1),Jn=[Wn,Yn,Xn];function Qn(e,o){return A(),B("svg",Gn,Jn)}const Zn=j(qn,[["render",Qn]]),er={key:0,class:"h-4 w-4 flex justify-center items-center"},or=V({__name:"LoadProgress",setup(e){const o=$o(),t=Io(),r=f(()=>{var p;return(p=o==null?void 0:o.bufferOpt.value)==null?void 0:p.isLoading}),a=Mo(),l=f(()=>{const p=o==null?void 0:o.bufferOpt.value;if(!!p)return Math.floor(Math.log2(a.value-p.minSince))}),s=f(()=>{const p=o==null?void 0:o.bufferOpt.value;if(!!p)return p.minSince===p.createTime}),d=f(()=>{const p=o==null?void 0:o.bufferOpt.value;if(!p)return;const N=p.until-p.since;return N===0?1:Math.floor(Math.log2(N))}),c=f(()=>{if(!(!d.value||!l.value))return d.value/l.value*100});return de(r,()=>{r.value||!o||o.bufferOpt.value===null||(d.value&&l.value&&d.value>=l.value&&t.success(O("all_loading_completed")),o.bufferOpt.value=null)}),(p,N)=>{const I=Ro;return k(r)&&k(d)?(A(),B("div",er,[oe(J(k(d))+" ",1),k(c)?(A(),re(I,{key:0,class:"absolute h-1 w-full left-0 bottom-0",type:"line",percentage:k(s)?100-k(c):k(c),"show-indicator":!1,"offset-degree":120,height:2,style:{}},null,8,["percentage"])):te("",!0)])):te("",!0)}}}),tr=V({__name:"ReloadButton",setup(e){const o=Po();function t(){o.start(),location.reload()}return(r,a)=>{const l=ee,s=ve;return A(),re(s,{onClick:t,quaternary:""},{default:T(()=>[v(l,{size:"20"},{default:T(()=>[v(Fo)]),_:1})]),_:1})}}}),nr=_("span",{class:"ml-6 hidden md:block"}," Jumpalong ",-1),rr={class:"flex justify-center items-center"},lr={class:"ml-3"},ir={class:"ml-3 clashidden sm:block"},ar={class:"ml-3 hidden sm:block"},cr={class:"ml-3 hidden sm:block"},sr={class:"ml-3 md:hidden"},dr={class:"flex items-center"},ur=V({__name:"LayoutHeader",setup(e){const o=F(!1),t=we();return de(()=>t.path,()=>{o.value=!1}),(r,a)=>{const l=ee,s=Oe,d=ve,c=jo,p=Ko;return A(),B(me,null,[_("span",{class:"text-xl font-bold flex justify-center items-center",onClick:a[0]||(a[0]=()=>r.$router.push("/"))},[v(l,{size:"40"},{default:T(()=>[v(Ao)]),_:1}),nr]),_("div",rr,[v(wt),_("div",lr,[v(gt)]),_("div",ir,[v(s)]),v(or,{class:"ml-3"}),_("div",ar,[v(Le)]),_("div",cr,[v(Ne)]),_("div",sr,[v(d,{quaternary:"",onClick:a[1]||(a[1]=()=>o.value=!o.value)},{default:T(()=>[v(l,{size:"22"},{default:T(()=>[v(Zn)]),_:1})]),_:1}),v(p,{show:o.value,"onUpdate:show":a[2]||(a[2]=N=>o.value=N),width:"100%",placement:"right"},{default:T(()=>[v(c,{title:"Menu",closable:""},{footer:T(()=>[_("div",dr,[v(tr),v(Ne),v(Le),v(Oe)])]),default:T(()=>[v(Qe,{collapsed:!1})]),_:1})]),_:1},8,["show"])])])],64)}}}),hr={class:"h-full overflow-x-hidden"},Tr=V({__name:"LayoutView",setup(e){const o=F(!0);return Do(),(t,r)=>{const a=Qo,l=nt,s=Yo;return A(),re(s,{style:{height:"100vh"}},{default:T(()=>[v(a,{class:"h-14 md:h-20 flex justify-between items-center px-3 relative",style:se({transition:"height 0.5s"}),bordered:""},{default:T(()=>[v(ur)]),_:1},8,["style"]),v(s,{class:"absolute w-full top-14 md:top-20 bottom-0","has-sider":"",style:se({transition:"top 0.5s, bottoom 0.5s"})},{default:T(()=>[v(l,{class:"hidden md:flex","native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:o.value,"show-trigger":"",onCollapse:r[0]||(r[0]=d=>o.value=!0),onExpand:r[1]||(r[1]=d=>o.value=!1)},{default:T(()=>[v(Qe,{collapsed:o.value},null,8,["collapsed"])]),_:1},8,["collapsed"]),v(s,{"content-style":"padding: 8px;"},{default:T(()=>[_("div",hr,[v(To)])]),_:1})]),_:1},8,["style"])]),_:1})}}});export{Tr as default};
