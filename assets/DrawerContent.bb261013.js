import{N as z,a4 as Be,af as re,O as A,Z as xe,f as U,j as oe,k as $,u as ne,_ as Ee,p as O,bd as j,bc as Y,h as s,L as ie,aG as ke,b as n,Q as T,c as u,a as p,d as E,g as se,bT as Re,M as W,t as Me}from"./index.8f62a545.js";import{c as N,d as Oe,p as Te,m as Fe,z as Pe,L as Ie}from"./Follower.7ba57362.js";import{u as He}from"./use-rtl.6d35c504.js";import{c as _e,F as De}from"./Popover.6590eae2.js";import{N as ae,f as Le}from"./Scrollbar.8d5a1903.js";import{e as je,c as B}from"./Loading.0b953150.js";import{u as V}from"./cssr.21c6f8e2.js";import{f as q}from"./format-length.3612bbc8.js";import{u as Ae}from"./use-css-vars-class.1ada0b07.js";import{e as Ue}from"./index.71604e6f.js";import{i as Ne}from"./is-browser.f4df612e.js";import{N as Xe}from"./Close.dba1bcea.js";let k=0,K="",G="",Q="",Z="";const J=z("0px");function Ye(e){if(typeof document>"u")return;const t=document.documentElement;let r,d=!1;const c=()=>{t.style.marginRight=K,t.style.overflow=G,t.style.overflowX=Q,t.style.overflowY=Z,J.value="0px"};Be(()=>{r=re(e,f=>{if(f){if(!k){const l=window.innerWidth-t.offsetWidth;l>0&&(K=t.style.marginRight,t.style.marginRight=`${l}px`,J.value=`${l}px`),G=t.style.overflow,Q=t.style.overflowX,Z=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}d=!0,k++}else k--,k||c(),d=!1},{immediate:!0})}),A(()=>{r==null||r(),d&&(k--,k||c(),d=!1)})}const X=z(!1),ee=()=>{X.value=!0},te=()=>{X.value=!1};let M=0;const We=()=>(Ne&&(xe(()=>{M||(window.addEventListener("compositionstart",ee),window.addEventListener("compositionend",te)),M++}),A(()=>{M<=1?(window.removeEventListener("compositionstart",ee),window.removeEventListener("compositionend",te),M=0):M--})),X),Ve=U({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=z(!!e.show),r=z(null),d=oe(N);let c=0,f="",l=null;const g=z(!1),v=z(!1),w=$(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:h,mergedRtlRef:F}=ne(e),P=He("Drawer",F,h),I=o=>{v.value=!0,c=w.value?o.clientY:o.clientX,f=document.body.style.cursor,document.body.style.cursor=w.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",x),document.body.addEventListener("mouseleave",b),document.body.addEventListener("mouseup",y)},H=()=>{l!==null&&(window.clearTimeout(l),l=null),v.value?g.value=!0:l=window.setTimeout(()=>{g.value=!0},300)},_=()=>{l!==null&&(window.clearTimeout(l),l=null),g.value=!1},{doUpdateHeight:D,doUpdateWidth:L}=d,x=o=>{var m,R;if(v.value)if(w.value){let S=((m=r.value)===null||m===void 0?void 0:m.offsetHeight)||0;const C=c-o.clientY;S+=e.placement==="bottom"?C:-C,D(S),c=o.clientY}else{let S=((R=r.value)===null||R===void 0?void 0:R.offsetWidth)||0;const C=c-o.clientX;S+=e.placement==="right"?C:-C,L(S),c=o.clientX}},y=()=>{v.value&&(c=0,v.value=!1,document.body.style.cursor=f,document.body.removeEventListener("mousemove",x),document.body.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",b))},b=y;Ee(()=>{e.show&&(t.value=!0)}),re(()=>e.show,o=>{o||y()}),A(()=>{y()});const i=$(()=>{const{show:o}=e,m=[[Y,o]];return e.showMask||m.push([_e,e.onClickoutside,void 0,{capture:!0}]),m});function a(){var o;t.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return Ye($(()=>e.blockScroll&&t.value)),O(Oe,r),O(Te,null),O(Fe,null),{bodyRef:r,rtlEnabled:P,mergedClsPrefix:d.mergedClsPrefixRef,isMounted:d.isMountedRef,mergedTheme:d.mergedThemeRef,displayed:t,transitionName:$(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:a,bodyDirectives:i,handleMousedownResizeTrigger:I,handleMouseenterResizeTrigger:H,handleMouseleaveResizeTrigger:_,isDragging:v,isHoverOnResizeTrigger:g}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?j(s("div",{role:"none"},s(De,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(ie,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>j(s("div",ke(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):s(ae,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[Y,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:qe,cubicBezierEaseOut:Ke}=T;function Ge({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${qe}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ke}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Qe,cubicBezierEaseOut:Ze}=T;function Je({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Qe}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ze}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:et,cubicBezierEaseOut:tt}=T;function rt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${et}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${tt}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:ot,cubicBezierEaseOut:nt}=T;function it({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${ot}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${nt}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const st=n([u("drawer",`
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
 `,[Ge(),Je(),rt(),it(),p("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),p("native-scrollbar",[u("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),E("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[p("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),u("drawer-content-wrapper",`
 box-sizing: border-box;
 `),u("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[p("native-scrollbar",[u("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),u("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),u("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),u("drawer-header",`
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
 `,[E("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),u("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),p("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[E("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),p("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[E("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),p("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[E("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),p("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[E("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),n("body",[n(">",[u("drawer-container",{position:"fixed"})])]),u("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[n("> *",{pointerEvents:"all"})]),u("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[p("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Le({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),at=Object.assign(Object.assign({},se.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),zt=U({name:"Drawer",inheritAttrs:!1,props:at,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:d}=ne(e),c=je(),f=se("Drawer","-drawer",st,Re,e,t),l=z(e.defaultWidth),g=z(e.defaultHeight),v=V(W(e,"width"),l),w=V(W(e,"height"),g),h=$(()=>{const{placement:i}=e;return i==="top"||i==="bottom"?"":q(v.value)}),F=$(()=>{const{placement:i}=e;return i==="left"||i==="right"?"":q(w.value)}),P=i=>{const{onUpdateWidth:a,"onUpdate:width":o}=e;a&&B(a,i),o&&B(o,i),l.value=i},I=i=>{const{onUpdateHeight:a,"onUpdate:width":o}=e;a&&B(a,i),o&&B(o,i),g.value=i},H=$(()=>[{width:h.value,height:F.value},e.drawerStyle||""]);function _(i){const{onMaskClick:a,maskClosable:o}=e;o&&x(!1),a&&a(i)}const D=We();function L(i){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Ue(i)&&!D.value&&x(!1)}function x(i){const{onHide:a,onUpdateShow:o,"onUpdate:show":m}=e;o&&B(o,i),m&&B(m,i),a&&!i&&B(a,i)}O(N,{isMountedRef:c,mergedThemeRef:f,mergedClsPrefixRef:t,doUpdateShow:x,doUpdateHeight:I,doUpdateWidth:P});const y=$(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:a,cubicBezierEaseOut:o},self:{color:m,textColor:R,boxShadow:S,lineHeight:C,headerPadding:le,footerPadding:de,bodyPadding:ce,titleFontSize:ue,titleTextColor:fe,titleFontWeight:he,headerBorderBottom:me,footerBorderTop:ve,closeIconColor:ge,closeIconColorHover:be,closeIconColorPressed:pe,closeColorHover:we,closeColorPressed:ye,closeIconSize:ze,closeSize:$e,closeBorderRadius:Se,resizableTriggerColorHover:Ce}}=f.value;return{"--n-line-height":C,"--n-color":m,"--n-text-color":R,"--n-box-shadow":S,"--n-bezier":i,"--n-bezier-out":o,"--n-bezier-in":a,"--n-header-padding":le,"--n-body-padding":ce,"--n-footer-padding":de,"--n-title-text-color":fe,"--n-title-font-size":ue,"--n-title-font-weight":he,"--n-header-border-bottom":me,"--n-footer-border-top":ve,"--n-close-icon-color":ge,"--n-close-icon-color-hover":be,"--n-close-icon-color-pressed":pe,"--n-close-size":$e,"--n-close-color-hover":we,"--n-close-color-pressed":ye,"--n-close-icon-size":ze,"--n-close-border-radius":Se,"--n-resize-trigger-color-hover":Ce}}),b=d?Ae("drawer",void 0,y,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:H,handleMaskClick:_,handleEsc:L,mergedTheme:f,cssVars:d?void 0:y,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender,isMounted:c}},render(){const{mergedClsPrefix:e}=this;return s(Ie,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),j(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(ie,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(Ve,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Pe,{zIndex:this.zIndex,enabled:this.show}]])}})}}),lt={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},$t=U({name:"DrawerContent",props:lt,setup(){const e=oe(N,null);e||Me("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:d,bodyStyle:c,bodyContentStyle:f,headerStyle:l,footerStyle:g,scrollbarProps:v,closable:w,$slots:h}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},h.header||e||w?s("div",{class:`${t}-drawer-header`,style:l,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},h.header!==void 0?h.header():e),w&&s(Xe,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:`${t}-drawer-body`,style:c,role:"none"},s("div",{class:`${t}-drawer-body-content-wrapper`,style:f,role:"none"},h)):s(ae,Object.assign({themeOverrides:d.peerOverrides.Scrollbar,theme:d.peers.Scrollbar},v,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:f}),h),h.footer?s("div",{class:`${t}-drawer-footer`,style:g,role:"none"},h.footer()):null)}});export{$t as _,zt as a,We as b,Ye as u};
