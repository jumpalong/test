import{bE as L,L as f,bN as G,I as J,f as Q,H as K,N as E,k as j,j as $,ag as U,p as x,P as ie,br as se,a0 as ae,bf as D,bg as q,h as m,T as Z,b as re,c as w,u as le,g as ee,ec as ce}from"./index-DVMYH3P6.js";import{d as ue}from"./composables-CG8Dm3JP.js";import{d as de,N as fe,a as he}from"./Dialog-D5oKNXJ_.js";import{c as me,_ as ve,a as pe}from"./Card-mMUmU99e.js";import{k as ge}from"./keysOf-HiGXOwLp.js";import{f as te,h as oe,g as ne,m as ke,d as ye,p as Ce,j as be,z as we,L as Pe}from"./Follower-R8EgPpAd.js";import{u as Re,b as Be}from"./DrawerContent-CWwlzEAX.js";import{a as Fe,F as Oe,c as Se,k as _}from"./Popover-C3ccDlka.js";import{o as I,b as z,N as Te,f as xe,g as Le}from"./Scrollbar-BXVF4b7l.js";import{f as Ae}from"./fade-in-scale-up.cssr-CUPxiz5B.js";import{e as Me,c as O}from"./Button-Czpa3xjC.js";import{u as Ne}from"./use-css-vars-class-DpRsL9zm.js";import{e as Ee}from"./index-DsSU6HIH.js";const P=f(null);function V(e){if(e.clientX>0||e.clientY>0)P.value={x:e.clientX,y:e.clientY};else{const{target:i}=e;if(i instanceof Element){const{left:n,top:a,width:l,height:c}=i.getBoundingClientRect();n>0||a>0?P.value={x:n+l/2,y:a+c/2}:P.value={x:0,y:0}}else P.value=null}}let S=0,X=!0;function je(){if(!te)return L(f(null));S===0&&I("click",document,V,!0);const e=()=>{S+=1};return X&&(X=oe())?(G(e),J(()=>{S-=1,S===0&&z("click",document,V,!0)})):e(),L(P)}const $e=f(void 0);let T=0;function Y(){$e.value=Date.now()}let W=!0;function De(e){if(!te)return L(f(!1));const i=f(!1);let n=null;function a(){n!==null&&window.clearTimeout(n)}function l(){a(),i.value=!0,n=window.setTimeout(()=>{i.value=!1},e)}T===0&&I("click",window,Y,!0);const c=()=>{T+=1,I("click",window,l,!0)};return W&&(W=oe())?(G(c),J(()=>{T-=1,T===0&&z("click",window,Y,!0),z("click",window,l,!0),a()})):c(),L(i)}const H=Object.assign(Object.assign({},me),de),_e=ge(H),Ie=Q({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},H),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const i=f(null),n=f(null),a=f(e.show),l=f(null),c=f(null);K(E(e,"show"),s=>{s&&(a.value=!0)}),Re(j(()=>e.blockScroll&&a.value));const r=$(ne);function d(){if(r.transformOriginRef.value==="center")return"";const{value:s}=l,{value:u}=c;if(s===null||u===null)return"";if(n.value){const b=n.value.containerScrollTop;return`${s}px ${u+b}px`}return""}function p(s){if(r.transformOriginRef.value==="center")return;const u=r.getMousePosition();if(!u||!n.value)return;const b=n.value.containerScrollTop,{offsetLeft:N,offsetTop:B}=s;if(u){const g=u.y,t=u.x;l.value=-(N-t),c.value=-(B-g-b)}s.style.transformOrigin=d()}function k(s){U(()=>{p(s)})}function y(s){s.style.transformOrigin=d(),e.onBeforeLeave()}function C(){a.value=!1,l.value=null,c.value=null,e.onAfterLeave()}function h(){const{onClose:s}=e;s&&s()}function A(){e.onNegativeClick()}function M(){e.onPositiveClick()}const R=f(null);return K(R,s=>{s&&U(()=>{const u=s.el;u&&i.value!==u&&(i.value=u)})}),x(ke,i),x(ye,null),x(Ce,null),{mergedTheme:r.mergedThemeRef,appear:r.appearRef,isMounted:r.isMountedRef,mergedClsPrefix:r.mergedClsPrefixRef,bodyRef:i,scrollbarRef:n,displayed:a,childNodeRef:R,handlePositiveClick:M,handleNegativeClick:A,handleCloseClick:h,handleAfterLeave:C,handleBeforeLeave:y,handleEnter:k}},render(){const{$slots:e,$attrs:i,handleEnter:n,handleAfterLeave:a,handleBeforeLeave:l,preset:c,mergedClsPrefix:r}=this;let d=null;if(!c){if(d=Fe(e),!d){ie("modal","default slot is empty");return}d=se(d),d.props=ae({class:`${r}-modal`},i,d.props||{})}return this.displayDirective==="show"||this.displayed||this.show?D(m("div",{role:"none",class:`${r}-modal-body-wrapper`},m(Te,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${r}-modal-scroll-content`},{default:()=>{var p;return[(p=this.renderMask)===null||p===void 0?void 0:p.call(this),m(Oe,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var k;return m(Z,{name:"fade-in-scale-up-transition",appear:(k=this.appear)!==null&&k!==void 0?k:this.isMounted,onEnter:n,onAfterEnter:this.onAfterEnter,onAfterLeave:a,onBeforeLeave:l},{default:()=>{const y=[[q,this.show]],{onClickoutside:C}=this;return C&&y.push([Se,this.onClickoutside,void 0,{capture:!0}]),D(this.preset==="confirm"||this.preset==="dialog"?m(fe,Object.assign({},this.$attrs,{class:[`${r}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},_(this.$props,he),{"aria-modal":"true"}),e):this.preset==="card"?m(ve,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${r}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},_(this.$props,pe),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=d,y)}})}})]}})),[[q,this.displayDirective==="if"||this.displayed||this.show]]):null}}),ze=re([w("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),w("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[xe({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),w("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[w("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),w("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Ae({duration:".25s",enterScale:".5"})])]),He=Object.assign(Object.assign(Object.assign(Object.assign({},ee.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),H),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),ot=Q({name:"Modal",inheritAttrs:!1,props:He,setup(e){const i=f(null),{mergedClsPrefixRef:n,namespaceRef:a,inlineThemeDisabled:l}=le(e),c=ee("Modal","-modal",ze,ce,e,n),r=De(64),d=je(),p=Me(),k=e.internalDialog?$(ue,null):null,y=e.internalModal?$(be,null):null,C=Be();function h(t){const{onUpdateShow:o,"onUpdate:show":v,onHide:F}=e;o&&O(o,t),v&&O(v,t),F&&!t&&F(t)}function A(){const{onClose:t}=e;t?Promise.resolve(t()).then(o=>{o!==!1&&h(!1)}):h(!1)}function M(){const{onPositiveClick:t}=e;t?Promise.resolve(t()).then(o=>{o!==!1&&h(!1)}):h(!1)}function R(){const{onNegativeClick:t}=e;t?Promise.resolve(t()).then(o=>{o!==!1&&h(!1)}):h(!1)}function s(){const{onBeforeLeave:t,onBeforeHide:o}=e;t&&O(t),o&&o()}function u(){const{onAfterLeave:t,onAfterHide:o}=e;t&&O(t),o&&o()}function b(t){var o;const{onMaskClick:v}=e;v&&v(t),e.maskClosable&&!((o=i.value)===null||o===void 0)&&o.contains(Le(t))&&h(!1)}function N(t){var o;(o=e.onEsc)===null||o===void 0||o.call(e),e.show&&e.closeOnEsc&&Ee(t)&&!C.value&&h(!1)}x(ne,{getMousePosition:()=>{const t=k||y;if(t){const{clickedRef:o,clickedPositionRef:v}=t;if(o.value&&v.value)return v.value}return r.value?d.value:null},mergedClsPrefixRef:n,mergedThemeRef:c,isMountedRef:p,appearRef:E(e,"internalAppear"),transformOriginRef:E(e,"transformOrigin")});const B=j(()=>{const{common:{cubicBezierEaseOut:t},self:{boxShadow:o,color:v,textColor:F}}=c.value;return{"--n-bezier-ease-out":t,"--n-box-shadow":o,"--n-color":v,"--n-text-color":F}}),g=l?Ne("theme-class",void 0,B,e):void 0;return{mergedClsPrefix:n,namespace:a,isMounted:p,containerRef:i,presetProps:j(()=>_(e,_e)),handleEsc:N,handleAfterLeave:u,handleClickoutside:b,handleBeforeLeave:s,doUpdateShow:h,handleNegativeClick:R,handlePositiveClick:M,handleCloseClick:A,cssVars:l?void 0:B,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){const{mergedClsPrefix:e}=this;return m(Pe,{to:this.to,show:this.show},{default:()=>{var i;(i=this.onRender)===null||i===void 0||i.call(this);const{unstableShowMask:n}=this;return D(m("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},m(Ie,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>{var a;return m(Z,{name:"fade-in-transition",key:"mask",appear:(a=this.internalAppear)!==null&&a!==void 0?a:this.isMounted},{default:()=>this.show?m("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[we,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{ot as _,je as a,De as u};