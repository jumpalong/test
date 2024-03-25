import{L as $,O as Re,H as ne,I as A,bN as ke,f as U,j as ie,k as C,u as se,R as Ee,p as W,bf as j,bg as V,h as s,T as ae,a0 as Oe,b as i,M as N,c as b,a as S,d as k,g as le,cv as He,N as q,t as Te}from"./index-DVMYH3P6.js";import{e as X,d as Me,p as Fe,m as Ie,z as Pe,L as We}from"./Follower-R8EgPpAd.js";import{u as Ne}from"./use-rtl-CqBkFAUg.js";import{c as De,F as Le}from"./Popover-C3ccDlka.js";import{N as de,f as _e,a as K}from"./Scrollbar-BXVF4b7l.js";import{e as je,c as B}from"./Button-Czpa3xjC.js";import{f as G}from"./format-length-B-p6aW7q.js";import{u as Ae}from"./use-css-vars-class-DpRsL9zm.js";import{e as Ue}from"./index-DsSU6HIH.js";import{i as Xe}from"./is-browser-BikuuYFQ.js";import{N as Ye}from"./Close-CMpDg3pB.js";let E=0,J="",Q="",Z="",ee="";const te=$("0px");function Ve(e){if(typeof document>"u")return;const t=document.documentElement;let r,c=!1;const u=()=>{t.style.marginRight=J,t.style.overflow=Q,t.style.overflowX=Z,t.style.overflowY=ee,te.value="0px"};Re(()=>{r=ne(e,w=>{if(w){if(!E){const l=window.innerWidth-t.offsetWidth;l>0&&(J=t.style.marginRight,t.style.marginRight=`${l}px`,te.value=`${l}px`),Q=t.style.overflow,Z=t.style.overflowX,ee=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}c=!0,E++}else E--,E||u(),c=!1},{immediate:!0})}),A(()=>{r==null||r(),c&&(E--,E||u(),c=!1)})}const Y=$(!1),re=()=>{Y.value=!0},oe=()=>{Y.value=!1};let I=0;const qe=()=>(Xe&&(ke(()=>{I||(window.addEventListener("compositionstart",re),window.addEventListener("compositionend",oe)),I++}),A(()=>{I<=1?(window.removeEventListener("compositionstart",re),window.removeEventListener("compositionend",oe),I=0):I--})),Y),Ke=U({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=$(!!e.show),r=$(null),c=ie(X);let u=0,w="",l=null;const p=$(!1),y=$(!1),z=C(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:O,mergedRtlRef:H}=se(e),T=Ne("Drawer",H,O),R=n=>{y.value=!0,u=z.value?n.clientY:n.clientX,w=document.body.style.cursor,document.body.style.cursor=z.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",F),document.body.addEventListener("mouseleave",o),document.body.addEventListener("mouseup",m)},g=()=>{l!==null&&(window.clearTimeout(l),l=null),y.value?p.value=!0:l=window.setTimeout(()=>{p.value=!0},300)},P=()=>{l!==null&&(window.clearTimeout(l),l=null),p.value=!1},{doUpdateHeight:D,doUpdateWidth:L}=c,_=n=>{const{maxWidth:d}=e;if(d&&n>d)return d;const{minWidth:f}=e;return f&&n<f?f:n},M=n=>{const{maxHeight:d}=e;if(d&&n>d)return d;const{minHeight:f}=e;return f&&n<f?f:n},F=n=>{var d,f;if(y.value)if(z.value){let v=((d=r.value)===null||d===void 0?void 0:d.offsetHeight)||0;const x=u-n.clientY;v+=e.placement==="bottom"?x:-x,v=M(v),D(v),u=n.clientY}else{let v=((f=r.value)===null||f===void 0?void 0:f.offsetWidth)||0;const x=u-n.clientX;v+=e.placement==="right"?x:-x,v=_(v),L(v),u=n.clientX}},m=()=>{y.value&&(u=0,y.value=!1,document.body.style.cursor=w,document.body.removeEventListener("mousemove",F),document.body.removeEventListener("mouseup",m),document.body.removeEventListener("mouseleave",o))},o=m;Ee(()=>{e.show&&(t.value=!0)}),ne(()=>e.show,n=>{n||m()}),A(()=>{m()});const a=C(()=>{const{show:n}=e,d=[[V,n]];return e.showMask||d.push([De,e.onClickoutside,void 0,{capture:!0}]),d});function h(){var n;t.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return Ve(C(()=>e.blockScroll&&t.value)),W(Me,r),W(Fe,null),W(Ie,null),{bodyRef:r,rtlEnabled:T,mergedClsPrefix:c.mergedClsPrefixRef,isMounted:c.isMountedRef,mergedTheme:c.mergedThemeRef,displayed:t,transitionName:C(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:h,bodyDirectives:a,handleMousedownResizeTrigger:R,handleMouseenterResizeTrigger:g,handleMouseleaveResizeTrigger:P,isDragging:y,isHoverOnResizeTrigger:p}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?j(s("div",{role:"none"},s(Le,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(ae,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>j(s("div",Oe(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):s(de,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[V,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ge,cubicBezierEaseOut:Je}=N;function Qe({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ge}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Je}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ze,cubicBezierEaseOut:et}=N;function tt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ze}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${et}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:rt,cubicBezierEaseOut:ot}=N;function nt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${rt}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${ot}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:it,cubicBezierEaseOut:st}=N;function at({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${it}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${st}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const lt=i([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Qe(),tt(),nt(),at(),S("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),S("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),k("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[S("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[S("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[k("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),S("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),S("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),S("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),S("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[b("drawer-container",`
 position: fixed;
 `)])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[S("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),_e({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),dt=Object.assign(Object.assign({},le.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),$t=U({name:"Drawer",inheritAttrs:!1,props:dt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:c}=se(e),u=je(),w=le("Drawer","-drawer",lt,He,e,t),l=$(e.defaultWidth),p=$(e.defaultHeight),y=K(q(e,"width"),l),z=K(q(e,"height"),p),O=C(()=>{const{placement:o}=e;return o==="top"||o==="bottom"?"":G(y.value)}),H=C(()=>{const{placement:o}=e;return o==="left"||o==="right"?"":G(z.value)}),T=o=>{const{onUpdateWidth:a,"onUpdate:width":h}=e;a&&B(a,o),h&&B(h,o),l.value=o},R=o=>{const{onUpdateHeight:a,"onUpdate:width":h}=e;a&&B(a,o),h&&B(h,o),p.value=o},g=C(()=>[{width:O.value,height:H.value},e.drawerStyle||""]);function P(o){const{onMaskClick:a,maskClosable:h}=e;h&&M(!1),a&&a(o)}function D(o){P(o)}const L=qe();function _(o){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Ue(o)&&!L.value&&M(!1)}function M(o){const{onHide:a,onUpdateShow:h,"onUpdate:show":n}=e;h&&B(h,o),n&&B(n,o),a&&!o&&B(a,o)}W(X,{isMountedRef:u,mergedThemeRef:w,mergedClsPrefixRef:t,doUpdateShow:M,doUpdateHeight:R,doUpdateWidth:T});const F=C(()=>{const{common:{cubicBezierEaseInOut:o,cubicBezierEaseIn:a,cubicBezierEaseOut:h},self:{color:n,textColor:d,boxShadow:f,lineHeight:v,headerPadding:x,footerPadding:ce,borderRadius:ue,bodyPadding:he,titleFontSize:fe,titleTextColor:me,titleFontWeight:be,headerBorderBottom:ge,footerBorderTop:ve,closeIconColor:we,closeIconColorHover:pe,closeIconColorPressed:ye,closeColorHover:Se,closeColorPressed:$e,closeIconSize:Ce,closeSize:ze,closeBorderRadius:xe,resizableTriggerColorHover:Be}}=w.value;return{"--n-line-height":v,"--n-color":n,"--n-border-radius":ue,"--n-text-color":d,"--n-box-shadow":f,"--n-bezier":o,"--n-bezier-out":h,"--n-bezier-in":a,"--n-header-padding":x,"--n-body-padding":he,"--n-footer-padding":ce,"--n-title-text-color":me,"--n-title-font-size":fe,"--n-title-font-weight":be,"--n-header-border-bottom":ge,"--n-footer-border-top":ve,"--n-close-icon-color":we,"--n-close-icon-color-hover":pe,"--n-close-icon-color-pressed":ye,"--n-close-size":ze,"--n-close-color-hover":Se,"--n-close-color-pressed":$e,"--n-close-icon-size":Ce,"--n-close-border-radius":xe,"--n-resize-trigger-color-hover":Be}}),m=c?Ae("drawer",void 0,F,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:g,handleOutsideClick:D,handleMaskClick:P,handleEsc:_,mergedTheme:w,cssVars:c?void 0:F,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender,isMounted:u}},render(){const{mergedClsPrefix:e}=this;return s(We,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),j(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(ae,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(Ke,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Pe,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ct={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Ct=U({name:"DrawerContent",props:ct,setup(){const e=ie(X,null);e||Te("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:c,bodyClass:u,bodyStyle:w,bodyContentClass:l,bodyContentStyle:p,headerClass:y,headerStyle:z,footerClass:O,footerStyle:H,scrollbarProps:T,closable:R,$slots:g}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},g.header||e||R?s("div",{class:[`${t}-drawer-header`,y],style:z,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},g.header!==void 0?g.header():e),R&&s(Ye,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:[`${t}-drawer-body`,u],style:w,role:"none"},s("div",{class:[`${t}-drawer-body-content-wrapper`,l],style:p,role:"none"},g)):s(de,Object.assign({themeOverrides:c.peerOverrides.Scrollbar,theme:c.peers.Scrollbar},T,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,l],contentStyle:p}),g),g.footer?s("div",{class:[`${t}-drawer-footer`,O],style:H,role:"none"},g.footer()):null)}});export{Ct as _,$t as a,qe as b,Ve as u};
