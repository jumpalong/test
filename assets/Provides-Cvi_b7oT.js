import{_ as Te}from"./ProvideEventLine.vue_vue_type_script_setup_true_lang-BKB7f1o6.js";import{y as qe,u as Ke,d as De}from"./ProvideEventLine-XLCKst21.js";import{d as Ve,l as We}from"./Papaw-R9nRzszD.js";import{p as Ue}from"./ProvideNostrConnect-DV5NkuxX.js";import{_ as ge}from"./PubkeyLink.vue_vue_type_script_setup_true_lang-PgJ-fWWY.js";import{S as Xe}from"./Scrollbar-D8p4HDwI.js";import{f as $,L as w,h as v,p as q,F as X,af as ue,c as m,a as g,u as G,j as Q,bB as ye,k as K,g as J,bC as Ge,be as Je,bf as Qe,T as _e,aE as V,bD as Ye,bu as fe,b as x,d as I,bE as xe,bF as Ze,l as T,O as we,bG as et,i as Ce,R as ke,bH as tt,H as nt,o as L,B as P,n as O,w as z,y as F,z as C,q as y,A as H,E as U,U as ot,C as it,m as rt,r as Oe,ao as at}from"./index-Bp8Ru9nj.js";import{a as st,_ as lt}from"./RadioGroup-BgoJzNPY.js";import{_ as be}from"./Space-D7Gj9TeE.js";import{e as ct,i as dt,N as ut,h as ft,d as vt,b as ht}from"./Button-DF3Ei97P.js";import{_ as pt,u as mt,a as gt}from"./Modal-eYTtm2Ii.js";import{d as bt,N as yt,a as _t}from"./Dialog-BHPTJzqy.js";import{k as ze}from"./Popover-CWXHRS55.js";import{d as xt,a as wt,b as Ct}from"./composables-Den7Xj81.js";import{o as ve}from"./omit-DbnPTcif.js";import{c as he}from"./use-compitable-BZNVtFY-.js";import{f as kt}from"./fade-in-height-expand.cssr-BOUpW_kQ.js";import{u as Se}from"./use-rtl-gkSu3eK_.js";import{u as pe}from"./use-css-vars-class-DV7GkkKb.js";import{r as D}from"./render-n15ElYMw.js";import{N as Ae}from"./Close-sZEX0j0N.js";import{N as je}from"./Icon-C2DldZ3i.js";import{I as Le,S as Re,W as Pe,E as $e}from"./Warning-BHWEvLya.js";import{f as Ot,N as zt}from"./Scrollbar-Bcd6cbpf.js";import{k as St}from"./keysOf-HiGXOwLp.js";import{g as At}from"./index-vZmvdULR.js";import"./utils-Bn9avYFz.js";import"./hkdf-mSU36INM.js";import"./Icon-BUbDyWQc.js";import"./format-length-B-p6aW7q.js";import"./Card-z75eEPHe.js";import"./Tooltip-CWAJuqVc.js";import"./NaddrLink.vue_vue_type_script_setup_true_lang-RPzJDFtp.js";import"./Image-4WjrfnRr.js";import"./utils-BfSW-vXT.js";import"./is-browser-Ki2-8vi-.js";import"./fade-in-scale-up.cssr-YaysNU6q.js";import"./use-locale-DHyx6amc.js";import"./Follower-BLKhK3H2.js";import"./replaceable-B2OdU2Vz.js";import"./download-sglA049O.js";import"./DateTime.vue_vue_type_script_setup_true_lang-DsYL1IqC.js";import"./Spin-C2RU7Xjq.js";import"./DrawerContent-KbJmxdI_.js";import"./index-DsSU6HIH.js";import"./Tag-D0_dwZG-.js";import"./use-theme-vars-CgboMLjC.js";import"./naiveUi-DD7D_Mah.js";import"./Checkbox-Bvv02CAZ.js";import"./Input-uRxkwxbK.js";import"./ContentBlacklistView-BeC_asw8.js";import"./Dropdown-BNXdJGM7.js";import"./create-DlBt9mlr.js";import"./profile-2-400x400-D2vuwnc_.js";import"./Ellipsis-CGi5D5It.js";import"./Empty-oWNKc7k_.js";import"./metadata-CUvUkMsM.js";import"./ReloadCircleSharp-DAOD49WP.js";import"./Scrollbar-DlbzZyTV.js";import"./get-slot-Bk_rJcZu.js";import"./Close-B84N3VcG.js";const jt=Object.assign(Object.assign({},bt),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),Lt=$({name:"DialogEnvironment",props:Object.assign(Object.assign({},jt),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(t){const e=w(!0);function o(){const{onInternalAfterLeave:c,internalKey:h,onAfterLeave:d}=t;c&&c(h),d&&d()}function n(c){const{onPositiveClick:h}=t;h?Promise.resolve(h(c)).then(d=>{d!==!1&&i()}):i()}function r(c){const{onNegativeClick:h}=t;h?Promise.resolve(h(c)).then(d=>{d!==!1&&i()}):i()}function u(){const{onClose:c}=t;c?Promise.resolve(c()).then(h=>{h!==!1&&i()}):i()}function l(c){const{onMaskClick:h,maskClosable:d}=t;h&&(h(c),d&&i())}function a(){const{onEsc:c}=t;c&&c()}function i(){e.value=!1}function s(c){e.value=c}return{show:e,hide:i,handleUpdateShow:s,handleAfterLeave:o,handleCloseClick:u,handleNegativeClick:r,handlePositiveClick:n,handleMaskClick:l,handleEsc:a}},render(){const{handlePositiveClick:t,handleUpdateShow:e,handleNegativeClick:o,handleCloseClick:n,handleAfterLeave:r,handleMaskClick:u,handleEsc:l,to:a,maskClosable:i,show:s}=this;return v(pt,{show:s,onUpdateShow:e,onMaskClick:u,onEsc:l,to:a,maskClosable:i,onAfterEnter:this.onAfterEnter,onAfterLeave:r,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,internalAppear:!0,internalDialog:!0},{default:()=>v(yt,Object.assign({},ze(this.$props,_t),{style:this.internalStyle,onClose:n,onNegativeClick:o,onPositiveClick:t}))})}}),Rt={injectionKey:String,to:[String,Object]},Pt=$({name:"DialogProvider",props:Rt,setup(){const t=w([]),e={};function o(a={}){const i=he(),s=ue(Object.assign(Object.assign({},a),{key:i,destroy:()=>{e[`n-dialog-${i}`].hide()}}));return t.value.push(s),s}const n=["info","success","warning","error"].map(a=>i=>o(Object.assign(Object.assign({},i),{type:a})));function r(a){const{value:i}=t;i.splice(i.findIndex(s=>s.key===a),1)}function u(){Object.values(e).forEach(a=>{a.hide()})}const l={create:o,destroyAll:u,info:n[0],success:n[1],warning:n[2],error:n[3]};return q(xt,l),q(wt,{clickedRef:mt(64),clickedPositionRef:gt()}),q(Ct,t),Object.assign(Object.assign({},l),{dialogList:t,dialogInstRefs:e,handleAfterLeave:r})},render(){var t,e;return v(X,null,[this.dialogList.map(o=>v(Lt,ve(o,["destroy","style"],{internalStyle:o.style,to:this.to,ref:n=>{n===null?delete this.dialogInstRefs[`n-dialog-${o.key}`]:this.dialogInstRefs[`n-dialog-${o.key}`]=n},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave}))),(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])}}),$t=m("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[Ot({enterDuration:"0.3s",leaveDuration:"0.8s"}),m("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[g("starting",`
 background: var(--n-color-loading);
 `),g("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),g("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);var Y=function(t,e,o,n){function r(u){return u instanceof o?u:new o(function(l){l(u)})}return new(o||(o=Promise))(function(u,l){function a(c){try{s(n.next(c))}catch(h){l(h)}}function i(c){try{s(n.throw(c))}catch(h){l(h)}}function s(c){c.done?u(c.value):r(c.value).then(a,i)}s((n=n.apply(t,e||[])).next())})};function Z(t,e){return`${e}-loading-bar ${e}-loading-bar--${t}`}const It=$({name:"LoadingBar",props:{containerClass:String,containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:t}=G(),{props:e,mergedClsPrefixRef:o}=Q(ye),n=w(null),r=w(!1),u=w(!1),l=w(!1),a=w(!1);let i=!1;const s=w(!1),c=K(()=>{const{loadingBarStyle:b}=e;return b?b[s.value?"error":"loading"]:""});function h(){return Y(this,void 0,void 0,function*(){r.value=!1,l.value=!1,i=!1,s.value=!1,a.value=!0,yield V(),a.value=!1})}function d(b=0,B=80,N="starting"){return Y(this,void 0,void 0,function*(){if(u.value=!0,yield h(),i)return;l.value=!0,yield V();const j=n.value;j&&(j.style.maxWidth=`${b}%`,j.style.transition="none",j.offsetWidth,j.className=Z(N,o.value),j.style.transition="",j.style.maxWidth=`${B}%`)})}function p(){return Y(this,void 0,void 0,function*(){if(i||s.value)return;u.value&&(yield V()),i=!0;const b=n.value;b&&(b.className=Z("finishing",o.value),b.style.maxWidth="100%",b.offsetWidth,l.value=!1)})}function f(){if(!(i||s.value))if(!l.value)d(100,100,"error").then(()=>{s.value=!0;const b=n.value;b&&(b.className=Z("error",o.value),b.offsetWidth,l.value=!1)});else{s.value=!0;const b=n.value;if(!b)return;b.className=Z("error",o.value),b.style.maxWidth="100%",b.offsetWidth,l.value=!1}}function _(){r.value=!0}function S(){r.value=!1}function R(){return Y(this,void 0,void 0,function*(){yield h()})}const E=J("LoadingBar","-loading-bar",$t,Ge,e,o),A=K(()=>{const{self:{height:b,colorError:B,colorLoading:N}}=E.value;return{"--n-height":b,"--n-color-loading":N,"--n-color-error":B}}),k=t?pe("loading-bar",void 0,A,e):void 0;return{mergedClsPrefix:o,loadingBarRef:n,started:u,loading:l,entering:r,transitionDisabled:a,start:d,error:f,finish:p,handleEnter:_,handleAfterEnter:S,handleAfterLeave:R,mergedLoadingBarStyle:c,cssVars:t?void 0:A,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:t}=this;return v(_e,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),Je(v("div",{class:[`${t}-loading-bar-container`,this.themeClass,this.containerClass],style:this.containerStyle},v("div",{ref:"loadingBarRef",class:[`${t}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[Qe,this.loading||!this.loading&&this.entering]])}})}}),Et=Object.assign(Object.assign({},J.props),{to:{type:[String,Object,Boolean],default:void 0},containerClass:String,containerStyle:[String,Object],loadingBarStyle:{type:Object}}),Bt=$({name:"LoadingBarProvider",props:Et,setup(t){const e=ct(),o=w(null),n={start(){var u;e.value?(u=o.value)===null||u===void 0||u.start():V(()=>{var l;(l=o.value)===null||l===void 0||l.start()})},error(){var u;e.value?(u=o.value)===null||u===void 0||u.error():V(()=>{var l;(l=o.value)===null||l===void 0||l.error()})},finish(){var u;e.value?(u=o.value)===null||u===void 0||u.finish():V(()=>{var l;(l=o.value)===null||l===void 0||l.finish()})}},{mergedClsPrefixRef:r}=G(t);return q(Ye,n),q(ye,{props:t,mergedClsPrefixRef:r}),Object.assign(n,{loadingBarRef:o})},render(){var t,e;return v(X,null,v(fe,{disabled:this.to===!1,to:this.to||"body"},v(It,{ref:"loadingBarRef",containerStyle:this.containerStyle,containerClass:this.containerClass})),(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),Ie={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},Nt=x([m("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[kt({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),m("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[I("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),I("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(t=>g(`${t}-type`,[x("> *",`
 color: var(--n-icon-color-${t});
 transition: color .3s var(--n-bezier);
 `)])),x("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[dt()])]),I("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[x("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),x("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),m("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[g("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),g("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),g("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),g("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),g("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),g("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),Ht={info:()=>v(Le,null),success:()=>v(Re,null),warning:()=>v(Pe,null),error:()=>v($e,null),default:()=>null},Mt=$({name:"Message",props:Object.assign(Object.assign({},Ie),{render:Function}),setup(t){const{inlineThemeDisabled:e,mergedRtlRef:o}=G(t),{props:n,mergedClsPrefixRef:r}=Q(xe),u=Se("Message",o,r),l=J("Message","-message",Nt,Ze,n,r),a=K(()=>{const{type:s}=t,{common:{cubicBezierEaseInOut:c},self:{padding:h,margin:d,maxWidth:p,iconMargin:f,closeMargin:_,closeSize:S,iconSize:R,fontSize:E,lineHeight:A,borderRadius:k,iconColorInfo:b,iconColorSuccess:B,iconColorWarning:N,iconColorError:j,iconColorLoading:W,closeIconSize:M,closeBorderRadius:ne,[T("textColor",s)]:oe,[T("boxShadow",s)]:ie,[T("color",s)]:re,[T("closeColorHover",s)]:ae,[T("closeColorPressed",s)]:se,[T("closeIconColor",s)]:le,[T("closeIconColorPressed",s)]:ce,[T("closeIconColorHover",s)]:de}}=l.value;return{"--n-bezier":c,"--n-margin":d,"--n-padding":h,"--n-max-width":p,"--n-font-size":E,"--n-icon-margin":f,"--n-icon-size":R,"--n-close-icon-size":M,"--n-close-border-radius":ne,"--n-close-size":S,"--n-close-margin":_,"--n-text-color":oe,"--n-color":re,"--n-box-shadow":ie,"--n-icon-color-info":b,"--n-icon-color-success":B,"--n-icon-color-warning":N,"--n-icon-color-error":j,"--n-icon-color-loading":W,"--n-close-color-hover":ae,"--n-close-color-pressed":se,"--n-close-icon-color":le,"--n-close-icon-color-pressed":ce,"--n-close-icon-color-hover":de,"--n-line-height":A,"--n-border-radius":k}}),i=e?pe("message",K(()=>t.type[0]),a,{}):void 0;return{mergedClsPrefix:r,rtlEnabled:u,messageProviderProps:n,handleClose(){var s;(s=t.onClose)===null||s===void 0||s.call(t)},cssVars:e?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,placement:n.placement}},render(){const{render:t,type:e,closable:o,content:n,mergedClsPrefix:r,cssVars:u,themeClass:l,onRender:a,icon:i,handleClose:s,showIcon:c}=this;a==null||a();let h;return v("div",{class:[`${r}-message-wrapper`,l],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},u]},t?t(this.$props):v("div",{class:[`${r}-message ${r}-message--${e}-type`,this.rtlEnabled&&`${r}-message--rtl`]},(h=Ft(i,e,r))&&c?v("div",{class:`${r}-message__icon ${r}-message__icon--${e}-type`},v(ut,null,{default:()=>h})):null,v("div",{class:`${r}-message__content`},D(n)),o?v(Ae,{clsPrefix:r,class:`${r}-message__close`,onClick:s,absolute:!0}):null))}});function Ft(t,e,o){if(typeof t=="function")return t();{const n=e==="loading"?v(ft,{clsPrefix:o,strokeWidth:24,scale:.85}):Ht[e]();return n?v(je,{clsPrefix:o,key:e},{default:()=>n}):null}}const Tt=$({name:"MessageEnvironment",props:Object.assign(Object.assign({},Ie),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(t){let e=null;const o=w(!0);we(()=>{n()});function n(){const{duration:c}=t;c&&(e=window.setTimeout(l,c))}function r(c){c.currentTarget===c.target&&e!==null&&(window.clearTimeout(e),e=null)}function u(c){c.currentTarget===c.target&&n()}function l(){const{onHide:c}=t;o.value=!1,e&&(window.clearTimeout(e),e=null),c&&c()}function a(){const{onClose:c}=t;c&&c(),l()}function i(){const{onAfterLeave:c,onInternalAfterLeave:h,onAfterHide:d,internalKey:p}=t;c&&c(),h&&h(p),d&&d()}function s(){l()}return{show:o,hide:l,handleClose:a,handleAfterLeave:i,handleMouseleave:u,handleMouseenter:r,deactivate:s}},render(){return v(vt,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?v(Mt,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),qt=Object.assign(Object.assign({},J.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),Kt=$({name:"MessageProvider",props:qt,setup(t){const{mergedClsPrefixRef:e}=G(t),o=w([]),n=w({}),r={create(i,s){return u(i,Object.assign({type:"default"},s))},info(i,s){return u(i,Object.assign(Object.assign({},s),{type:"info"}))},success(i,s){return u(i,Object.assign(Object.assign({},s),{type:"success"}))},warning(i,s){return u(i,Object.assign(Object.assign({},s),{type:"warning"}))},error(i,s){return u(i,Object.assign(Object.assign({},s),{type:"error"}))},loading(i,s){return u(i,Object.assign(Object.assign({},s),{type:"loading"}))},destroyAll:a};q(xe,{props:t,mergedClsPrefixRef:e}),q(et,r);function u(i,s){const c=he(),h=ue(Object.assign(Object.assign({},s),{content:i,key:c,destroy:()=>{var p;(p=n.value[c])===null||p===void 0||p.hide()}})),{max:d}=t;return d&&o.value.length>=d&&o.value.shift(),o.value.push(h),h}function l(i){o.value.splice(o.value.findIndex(s=>s.key===i),1),delete n.value[i]}function a(){Object.values(n.value).forEach(i=>{i.hide()})}return Object.assign({mergedClsPrefix:e,messageRefs:n,messageList:o,handleAfterLeave:l},r)},render(){var t,e,o;return v(X,null,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t),this.messageList.length?v(fe,{to:(o=this.to)!==null&&o!==void 0?o:"body"},v("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(n=>v(Tt,Object.assign({ref:r=>{r&&(this.messageRefs[n.key]=r)},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave},ve(n,["destroy"],void 0),{duration:n.duration===void 0?this.duration:n.duration,keepAliveOnHover:n.keepAliveOnHover===void 0?this.keepAliveOnHover:n.keepAliveOnHover,closable:n.closable===void 0?this.closable:n.closable}))))):null)}}),te=Ce("n-notification-provider"),Dt=$({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:t,mergedClsPrefixRef:e,wipTransitionCountRef:o}=Q(te),n=w(null);return ke(()=>{var r,u;o.value>0?(r=n==null?void 0:n.value)===null||r===void 0||r.classList.add("transitioning"):(u=n==null?void 0:n.value)===null||u===void 0||u.classList.remove("transitioning")}),{selfRef:n,mergedTheme:t,mergedClsPrefix:e,transitioning:o}},render(){const{$slots:t,scrollable:e,mergedClsPrefix:o,mergedTheme:n,placement:r}=this;return v("div",{ref:"selfRef",class:[`${o}-notification-container`,e&&`${o}-notification-container--scrollable`,`${o}-notification-container--${r}`]},e?v(zt,{theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},t):t)}}),Vt={info:()=>v(Le,null),success:()=>v(Re,null),warning:()=>v(Pe,null),error:()=>v($e,null),default:()=>null},me={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},Wt=St(me),Ut=$({name:"Notification",props:me,setup(t){const{mergedClsPrefixRef:e,mergedThemeRef:o,props:n}=Q(te),{inlineThemeDisabled:r,mergedRtlRef:u}=G(),l=Se("Notification",u,e),a=K(()=>{const{type:s}=t,{self:{color:c,textColor:h,closeIconColor:d,closeIconColorHover:p,closeIconColorPressed:f,headerTextColor:_,descriptionTextColor:S,actionTextColor:R,borderRadius:E,headerFontWeight:A,boxShadow:k,lineHeight:b,fontSize:B,closeMargin:N,closeSize:j,width:W,padding:M,closeIconSize:ne,closeBorderRadius:oe,closeColorHover:ie,closeColorPressed:re,titleFontSize:ae,metaFontSize:se,descriptionFontSize:le,[T("iconColor",s)]:ce},common:{cubicBezierEaseOut:de,cubicBezierEaseIn:Ee,cubicBezierEaseInOut:Be}}=o.value,{left:Ne,right:He,top:Me,bottom:Fe}=At(M);return{"--n-color":c,"--n-font-size":B,"--n-text-color":h,"--n-description-text-color":S,"--n-action-text-color":R,"--n-title-text-color":_,"--n-title-font-weight":A,"--n-bezier":Be,"--n-bezier-ease-out":de,"--n-bezier-ease-in":Ee,"--n-border-radius":E,"--n-box-shadow":k,"--n-close-border-radius":oe,"--n-close-color-hover":ie,"--n-close-color-pressed":re,"--n-close-icon-color":d,"--n-close-icon-color-hover":p,"--n-close-icon-color-pressed":f,"--n-line-height":b,"--n-icon-color":ce,"--n-close-margin":N,"--n-close-size":j,"--n-close-icon-size":ne,"--n-width":W,"--n-padding-left":Ne,"--n-padding-right":He,"--n-padding-top":Me,"--n-padding-bottom":Fe,"--n-title-font-size":ae,"--n-meta-font-size":se,"--n-description-font-size":le}}),i=r?pe("notification",K(()=>t.type[0]),a,n):void 0;return{mergedClsPrefix:e,showAvatar:K(()=>t.avatar||t.type!=="default"),handleCloseClick(){t.onClose()},rtlEnabled:l,cssVars:r?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t;const{mergedClsPrefix:e}=this;return(t=this.onRender)===null||t===void 0||t.call(this),v("div",{class:[`${e}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},v("div",{class:[`${e}-notification`,this.rtlEnabled&&`${e}-notification--rtl`,this.themeClass,{[`${e}-notification--closable`]:this.closable,[`${e}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?v("div",{class:`${e}-notification__avatar`},this.avatar?D(this.avatar):this.type!=="default"?v(je,{clsPrefix:e},{default:()=>Vt[this.type]()}):null):null,this.closable?v(Ae,{clsPrefix:e,class:`${e}-notification__close`,onClick:this.handleCloseClick}):null,v("div",{ref:"bodyRef",class:`${e}-notification-main`},this.title?v("div",{class:`${e}-notification-main__header`},D(this.title)):null,this.description?v("div",{class:`${e}-notification-main__description`},D(this.description)):null,this.content?v("pre",{class:`${e}-notification-main__content`},D(this.content)):null,this.meta||this.action?v("div",{class:`${e}-notification-main-footer`},this.meta?v("div",{class:`${e}-notification-main-footer__meta`},D(this.meta)):null,this.action?v("div",{class:`${e}-notification-main-footer__action`},D(this.action)):null):null)))}}),Xt=Object.assign(Object.assign({},me),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),Gt=$({name:"NotificationEnvironment",props:Object.assign(Object.assign({},Xt),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(t){const{wipTransitionCountRef:e}=Q(te),o=w(!0);let n=null;function r(){o.value=!1,n&&window.clearTimeout(n)}function u(f){e.value++,V(()=>{f.style.height=`${f.offsetHeight}px`,f.style.maxHeight="0",f.style.transition="none",f.offsetHeight,f.style.transition="",f.style.maxHeight=f.style.height})}function l(f){e.value--,f.style.height="",f.style.maxHeight="";const{onAfterEnter:_,onAfterShow:S}=t;_&&_(),S&&S()}function a(f){e.value++,f.style.maxHeight=`${f.offsetHeight}px`,f.style.height=`${f.offsetHeight}px`,f.offsetHeight}function i(f){const{onHide:_}=t;_&&_(),f.style.maxHeight="0",f.offsetHeight}function s(){e.value--;const{onAfterLeave:f,onInternalAfterLeave:_,onAfterHide:S,internalKey:R}=t;f&&f(),_(R),S&&S()}function c(){const{duration:f}=t;f&&(n=window.setTimeout(r,f))}function h(f){f.currentTarget===f.target&&n!==null&&(window.clearTimeout(n),n=null)}function d(f){f.currentTarget===f.target&&c()}function p(){const{onClose:f}=t;f?Promise.resolve(f()).then(_=>{_!==!1&&r()}):r()}return we(()=>{t.duration&&(n=window.setTimeout(r,t.duration))}),{show:o,hide:r,handleClose:p,handleAfterLeave:s,handleLeave:i,handleBeforeLeave:a,handleAfterEnter:l,handleBeforeEnter:u,handleMouseenter:h,handleMouseleave:d}},render(){return v(_e,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?v(Ut,Object.assign({},ze(this.$props,Wt),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),Jt=x([m("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[x(">",[m("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[x(">",[m("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[m("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),g("top, top-right, top-left",`
 top: 12px;
 `,[x("&.transitioning >",[m("scrollbar",[x(">",[m("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),g("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[x(">",[m("scrollbar",[x(">",[m("scrollbar-container",[m("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),m("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),g("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[m("notification-wrapper",[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),g("top",[m("notification-wrapper",`
 transform-origin: top center;
 `)]),g("bottom",[m("notification-wrapper",`
 transform-origin: bottom center;
 `)]),g("top-right, bottom-right",[m("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),g("top-left, bottom-left",[m("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),g("top-right",`
 right: 0;
 `,[ee("top-right")]),g("top-left",`
 left: 0;
 `,[ee("top-left")]),g("bottom-right",`
 right: 0;
 `,[ee("bottom-right")]),g("bottom-left",`
 left: 0;
 `,[ee("bottom-left")]),g("scrollable",[g("top-right",`
 top: 0;
 `),g("top-left",`
 top: 0;
 `),g("bottom-right",`
 bottom: 0;
 `),g("bottom-left",`
 bottom: 0;
 `)]),m("notification-wrapper",`
 margin-bottom: 12px;
 `,[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),x("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),x("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),m("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[I("avatar",[m("icon",`
 color: var(--n-icon-color);
 `),m("base-icon",`
 color: var(--n-icon-color);
 `)]),g("show-avatar",[m("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),g("closable",[m("notification-main",[x("> *:first-child",`
 padding-right: 20px;
 `)]),I("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),I("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[m("icon","transition: color .3s var(--n-bezier);")]),m("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[m("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[I("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),I("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),I("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),I("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),I("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[x("&:first-child","margin: 0;")])])])])]);function ee(t){const o=t.split("-")[1]==="left"?"calc(-100%)":"calc(100%)";return m("notification-wrapper",[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${o}, 0);
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(0, 0);
 `)])}const Qt=Ce("n-notification-api"),Yt=Object.assign(Object.assign({},J.props),{containerClass:String,containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),Zt=$({name:"NotificationProvider",props:Yt,setup(t){const{mergedClsPrefixRef:e}=G(t),o=w([]),n={},r=new Set;function u(p){const f=he(),_=()=>{r.add(f),n[f]&&n[f].hide()},S=ue(Object.assign(Object.assign({},p),{key:f,destroy:_,hide:_,deactivate:_})),{max:R}=t;if(R&&o.value.length-r.size>=R){let E=!1,A=0;for(const k of o.value){if(!r.has(k.key)){n[k.key]&&(k.destroy(),E=!0);break}A++}E||o.value.splice(A,1)}return o.value.push(S),S}const l=["info","success","warning","error"].map(p=>f=>u(Object.assign(Object.assign({},f),{type:p})));function a(p){r.delete(p),o.value.splice(o.value.findIndex(f=>f.key===p),1)}const i=J("Notification","-notification",Jt,tt,t,e),s={create:u,info:l[0],success:l[1],warning:l[2],error:l[3],open:h,destroyAll:d},c=w(0);q(Qt,s),q(te,{props:t,mergedClsPrefixRef:e,mergedThemeRef:i,wipTransitionCountRef:c});function h(p){return u(p)}function d(){Object.values(o.value).forEach(p=>{p.hide()})}return Object.assign({mergedClsPrefix:e,notificationList:o,notificationRefs:n,handleAfterLeave:a},s)},render(){var t,e,o;const{placement:n}=this;return v(X,null,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t),this.notificationList.length?v(fe,{to:(o=this.to)!==null&&o!==void 0?o:"body"},v(Dt,{class:this.containerClass,style:this.containerStyle,scrollable:this.scrollable&&n!=="top"&&n!=="bottom",placement:n},{default:()=>this.notificationList.map(r=>v(Gt,Object.assign({ref:u=>{const l=r.key;u===null?delete this.notificationRefs[l]:this.notificationRefs[l]=u}},ve(r,["destroy","hide","deactivate"]),{internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover})))})):null)}}),en={key:0},tn={key:0},nn={key:1},on={key:2},rn={key:3},an={key:4},sn={key:5},ln={key:6},cn={key:7},dn={key:8},un={class:"mt-4"},fn={class:"flex w-full"},vn=$({__name:"ProvideNostrConnect",setup(t){const e=qe(),o=Ke();let{remoteSigner:n}=Ue();const r=K(()=>{if(e.value)return n.provideConnect()}),u=w(new Set),l=w([]),a=w();ke(()=>{var d;(d=r.value)==null||d.onAsk(p=>{const f=p.requestOpt.id;u.value.has(f)||(u.value.add(p.requestOpt.id),l.value.push(p))})}),nt([()=>l.value.length,a],()=>{if(a.value===void 0){let d=l.value.pop();if(!d)return;n.autoAsk(d,()=>{a.value=d})}});const i=w();function s(){var d;(d=a.value)==null||d.allow(i.value),a.value=void 0}function c(){var d;(d=a.value)==null||d.refuse(i.value),a.value=void 0}function h(d,p){return at(async()=>await o.nostrApi.decrypt(De.fromHex(d),p))}return(d,p)=>{const f=st,_=be,S=lt,R=ht,E=be;return L(),P(X,null,[O(We,{show:!!y(a),placement:"top",height:400,closable:""},{header:z(()=>{var A;return[F(C(y(a)&&d.t((A=y(a))==null?void 0:A.requestOpt.method))+" ",1),y(l).length>0?(L(),P("span",en," ("+C(y(l).length)+") ",1)):H("",!0)]}),default:z(()=>[O(Xe,null,{default:z(()=>{var A,k,b,B,N,j,W;return[y(a)?(L(),P("div",tn,"Request ID: "+C(y(a).requestOpt.id),1)):H("",!0),y(a)?(L(),P("div",nn,C(y(a).event.pubkey.slice(0,10)),1)):H("",!0),((A=y(a))==null?void 0:A.requestOpt.method)==="describe"?(L(),P("div",on,C(d.t("want_to_obtain_descriptive_information")),1)):H("",!0),((k=y(a))==null?void 0:k.requestOpt.method)==="connect"?(L(),P("div",rn,C(d.t("want_to_establish_a_connection_with_you")),1)):H("",!0),((b=y(a))==null?void 0:b.requestOpt.method)==="get_relays"?(L(),P("div",an,C(d.t("want_to_obtain_your_relays")),1)):H("",!0),((B=y(a))==null?void 0:B.requestOpt.method)==="get_public_key"?(L(),P("div",sn,C(d.t("want_to_obtain_your_public_key")),1)):H("",!0),((N=y(a))==null?void 0:N.requestOpt.method)==="nip04_encrypt"?(L(),P("div",ln,[F(C(d.t("want_to_encrypt_the_following_content"))+" ",1),U("p",null,[F(C(d.t("send_to")),1),O(ge,{pubkey:y(a).requestOpt.params[0]},null,8,["pubkey"])]),U("p",null,C(y(a).requestOpt.params[1]),1)])):H("",!0),((j=y(a))==null?void 0:j.requestOpt.method)==="nip04_decrypt"?(L(),P("div",cn,[F(C(d.t("want_to_decrypt_the_following_content"))+" ",1),U("p",null,[F(C(d.t("sender")),1),O(ge,{pubkey:y(a).requestOpt.params[0]},null,8,["pubkey"])]),U("p",null,C(h(...y(a).requestOpt.params)),1)])):H("",!0),((W=y(a))==null?void 0:W.requestOpt.method)==="sign_event"?(L(),P("div",dn,[F(C(d.t("want_to_sign_the_following_event"))+" ",1),O(Ve,{event:y(a).requestOpt.params[0]},null,8,["event"])])):H("",!0),U("p",un,C(d.t("not_asking_anymore")),1),O(S,{value:y(i),"onUpdate:value":p[0]||(p[0]=M=>ot(i)?i.value=M:null),name:"radiogroup"},{default:z(()=>[O(_,null,{default:z(()=>[(L(!0),P(X,null,it([[null,"一次"],[15*60*1e3,`15${d.t("minutes")}`],[24*3600*1e3,`1${d.t("day")}`],[7*24*3600*1e3,`7${d.t("day")}`],[30*24*3600*1e3,`30${d.t("day")}`]],M=>(L(),rt(f,{key:M[0],value:M[0]},{default:z(()=>[F(C(M[1]),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"])]}),_:1})]),footer:z(()=>[U("div",fn,[O(E,{class:"w-full",vertical:""},{default:z(()=>[O(_,{class:""},{default:z(()=>[O(R,{onClick:s},{default:z(()=>[F(C(d.t("allow")),1)]),_:1}),O(R,{onClick:c},{default:z(()=>[F(C(d.t("refuse")),1)]),_:1})]),_:1})]),_:1})])]),_:1},8,["show"]),Oe(d.$slots,"default")],64)}}}),hn=["id"],Co=$({__name:"Provides",setup(t){let e="";return(o,n)=>(L(),P("div",{id:y(e),class:"w-full h-screen overflow-hidden"},[O(Te,{name:"root",active:!0},{default:z(()=>[O(y(Pt),null,{default:z(()=>[O(y(Kt),null,{default:z(()=>[O(y(Zt),{placement:"bottom"},{default:z(()=>[O(y(Bt),null,{default:z(()=>[O(vn,null,{default:z(()=>[Oe(o.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3})]),_:3})]),_:3})],8,hn))}});export{Co as default};
