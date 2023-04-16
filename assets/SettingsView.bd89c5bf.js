import{av as P,ei as gt,b as X,c as o,a as x,d as c,bo as Ne,ch as mt,ci as pt,f as Pe,u as We,h as we,fa as wt,aI as Xe,n as V,aA as Ye,aH as Qe,aC as Ae,aQ as $e,ba as xt,q as Fe,d1 as yt,dt as Ie,j as u,bd as _t,be as kt,w as Ct,bf as Rt,bg as zt,aR as me,aT as pe,r as se,i as Ue,e as je,fb as St,o as Y,cC as Te,b7 as j,fc as Be,v as Q,N as Vt,aB as $t,bA as Tt,y as qe,I as Bt,aV as Dt,bN as Mt,bz as Ft,z as It,A as p,H as s,C as v,D as De,F as Me,O as b,fd as Pt,fe as Et,an as I}from"./index.d4beb9d4.js";import{_ as Ht}from"./Thing.b9786b0c.js";import{N as Nt}from"./Icon.7dabd37c.js";import{a as At,_ as Ut}from"./ListItem.666b7fc1.js";function Le(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Oe(){const t=P(new Map),i=$=>C=>{t.value.set($,C)};return gt(()=>t.value.clear()),[t,i]}const jt=X([o("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[x("reverse",[o("slider-handles",[o("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),o("slider-dots",[o("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),x("vertical",[o("slider-handles",[o("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),o("slider-marks",[o("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),o("slider-dots",[o("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),x("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[o("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[o("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),o("slider-rail",`
 height: 100%;
 `,[c("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),x("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),o("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[o("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),o("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[o("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),x("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[o("slider-handle",`
 cursor: not-allowed;
 `)]),x("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),X("&:hover",[o("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[c("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),o("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),x("active",[o("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[c("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),o("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),o("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[o("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),o("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[c("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),o("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[o("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[o("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[X("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),X("&:focus",[o("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[X("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),o("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[x("transition-disabled",[o("slider-dot","transition: none;")]),o("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[x("active","border: var(--n-dot-border-active);")])])]),o("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ne()]),o("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[x("top",`
 margin-bottom: 12px;
 `),x("right",`
 margin-left: 12px;
 `),x("bottom",`
 margin-top: 12px;
 `),x("left",`
 margin-right: 12px;
 `),Ne()]),mt(o("slider",[o("slider-dot","background-color: var(--n-dot-color-modal);")])),pt(o("slider",[o("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Lt=0,Ot=Object.assign(Object.assign({},we.props),{to:Ie.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Kt=Pe({name:"Slider",props:Ot,setup(t){const{mergedClsPrefixRef:i,namespaceRef:$,inlineThemeDisabled:C}=We(t),f=we("Slider","-slider",jt,wt,t,i),g=P(null),[d,w]=Oe(),[A,y]=Oe(),E=P(new Set),D=Xe(t),{mergedDisabledRef:m}=D,_=V(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const n=e.toString();let a=0;return n.includes(".")&&(a=n.length-n.indexOf(".")-1),a}),M=P(t.defaultValue),xe=Ye(t,"value"),te=Qe(xe,M),T=V(()=>{const{value:e}=te;return(t.range?e:[e]).map(O)}),de=V(()=>T.value.length>2),ye=V(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ce=V(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),B=P(-1),ne=P(-1),S=P(-1),r=P(!1),U=P(!1),L=V(()=>{const{vertical:e,reverse:n}=t;return e?n?"top":"bottom":n?"right":"left"}),q=V(()=>{if(de.value)return;const e=T.value,n=G(t.range?Math.min(...e):t.min),a=G(t.range?Math.max(...e):e[0]),{value:l}=L;return t.vertical?{[l]:`${n}%`,height:`${a-n}%`}:{[l]:`${n}%`,width:`${a-n}%`}}),ae=V(()=>{const e=[],{marks:n}=t;if(n){const a=T.value.slice();a.sort((R,z)=>R-z);const{value:l}=L,{value:h}=de,{range:k}=t,N=h?()=>!1:R=>k?R>=a[0]&&R<=a[a.length-1]:R<=a[0];for(const R of Object.keys(n)){const z=Number(R);e.push({active:N(z),label:n[R],style:{[l]:`${G(z)}%`}})}}return e});function oe(e,n){const a=G(e),{value:l}=L;return{[l]:`${a}%`,zIndex:n===B.value?1:0}}function ue(e){return t.showTooltip||S.value===e||B.value===e&&r.value}function _e(e){return r.value?!(B.value===e&&ne.value===e):!0}function ke(e){var n;~e&&(B.value=e,(n=d.value.get(e))===null||n===void 0||n.focus())}function Ce(){A.value.forEach((e,n)=>{ue(n)&&e.syncPosition()})}function H(e){const{"onUpdate:value":n,onUpdateValue:a}=t,{nTriggerFormInput:l,nTriggerFormChange:h}=D;a&&se(a,e),n&&se(n,e),M.value=e,l(),h()}function he(e){const{range:n}=t;if(n){if(Array.isArray(e)){const{value:a}=T;e.join()!==a.join()&&H(e)}}else Array.isArray(e)||T.value[0]!==e&&H(e)}function le(e,n){if(t.range){const a=T.value.slice();a.splice(n,1,e),he(a)}else he(e)}function F(e,n,a){const l=a!==void 0;a||(a=e-n>0?1:-1);const h=ce.value||[],{step:k}=t;if(k==="mark"){const z=K(e,h.concat(n),l?a:void 0);return z?z.value:n}if(k<=0)return n;const{value:N}=_;let R;if(l){const z=Number((n/k).toFixed(N)),W=Math.floor(z),Se=z>W?W:W-1,Ve=z<W?W:W+1;R=K(n,[Number((Se*k).toFixed(N)),Number((Ve*k).toFixed(N)),...h],a)}else{const z=ze(e);R=K(e,[...h,z])}return R?O(R.value):n}function O(e){return Math.min(t.max,Math.max(t.min,e))}function G(e){const{max:n,min:a}=t;return(e-a)/(n-a)*100}function Re(e){const{max:n,min:a}=t;return a+(n-a)*e}function ze(e){const{step:n,min:a}=t;if(n<=0||n==="mark")return e;const l=Math.round((e-a)/n)*n+a;return Number(l.toFixed(_.value))}function K(e,n=ce.value,a){if(!(n!=null&&n.length))return null;let l=null,h=-1;for(;++h<n.length;){const k=n[h]-e,N=Math.abs(k);(a===void 0||k*a>0)&&(l===null||N<l.distance)&&(l={index:h,distance:N,value:n[h]})}return l}function J(e){const n=g.value;if(!n)return;const a=Le(e)?e.touches[0]:e,l=n.getBoundingClientRect();let h;return t.vertical?h=(l.bottom-a.clientY)/l.height:h=(a.clientX-l.left)/l.width,t.reverse&&(h=1-h),Re(h)}function ie(e){if(m.value||!t.keyboard)return;const{vertical:n,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),fe(n&&a?-1:1);break;case"ArrowRight":e.preventDefault(),fe(!n&&a?-1:1);break;case"ArrowDown":e.preventDefault(),fe(n&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),fe(!n&&a?1:-1);break}}function fe(e){const n=B.value;if(n===-1)return;const{step:a}=t,l=T.value[n],h=a<=0||a==="mark"?l:l+a*e;le(F(h,l,e>0?1:-1),n)}function Ge(e){var n,a;if(m.value||!Le(e)&&e.button!==Lt)return;const l=J(e);if(l===void 0)return;const h=T.value.slice(),k=t.range?(a=(n=K(l,h))===null||n===void 0?void 0:n.index)!==null&&a!==void 0?a:-1:0;k!==-1&&(e.preventDefault(),ke(k),Je(),le(F(l,T.value[k]),k))}function Je(){r.value||(r.value=!0,me("touchend",document,ge),me("mouseup",document,ge),me("touchmove",document,be),me("mousemove",document,be))}function ve(){r.value&&(r.value=!1,pe("touchend",document,ge),pe("mouseup",document,ge),pe("touchmove",document,be),pe("mousemove",document,be))}function be(e){const{value:n}=B;if(!r.value||n===-1){ve();return}const a=J(e);le(F(a,T.value[n]),n)}function ge(){ve()}function Ze(e){B.value=e,m.value||(S.value=e)}function et(e){B.value===e&&(B.value=-1,ve()),S.value===e&&(S.value=-1)}function tt(e){S.value=e}function nt(e){S.value===e&&(S.value=-1)}Ae(B,(e,n)=>void $e(()=>ne.value=n)),Ae(te,()=>{if(t.marks){if(U.value)return;U.value=!0,$e(()=>{U.value=!1})}$e(Ce)}),xt(()=>{ve()});const Ee=V(()=>{const{self:{markFontSize:e,railColor:n,railColorHover:a,fillColor:l,fillColorHover:h,handleColor:k,opacityDisabled:N,dotColor:R,dotColorModal:z,handleBoxShadow:W,handleBoxShadowHover:Se,handleBoxShadowActive:Ve,handleBoxShadowFocus:at,dotBorder:ot,dotBoxShadow:lt,railHeight:it,railWidthVertical:rt,handleSize:st,dotHeight:dt,dotWidth:ct,dotBorderRadius:ut,fontSize:ht,dotBorderActive:ft,dotColorPopover:vt},common:{cubicBezierEaseInOut:bt}}=f.value;return{"--n-bezier":bt,"--n-dot-border":ot,"--n-dot-border-active":ft,"--n-dot-border-radius":ut,"--n-dot-box-shadow":lt,"--n-dot-color":R,"--n-dot-color-modal":z,"--n-dot-color-popover":vt,"--n-dot-height":dt,"--n-dot-width":ct,"--n-fill-color":l,"--n-fill-color-hover":h,"--n-font-size":ht,"--n-handle-box-shadow":W,"--n-handle-box-shadow-active":Ve,"--n-handle-box-shadow-focus":at,"--n-handle-box-shadow-hover":Se,"--n-handle-color":k,"--n-handle-size":st,"--n-opacity-disabled":N,"--n-rail-color":n,"--n-rail-color-hover":a,"--n-rail-height":it,"--n-rail-width-vertical":rt,"--n-mark-font-size":e}}),Z=C?Fe("slider",void 0,Ee,t):void 0,He=V(()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:a,indicatorTextColor:l,indicatorBorderRadius:h}}=f.value;return{"--n-font-size":e,"--n-indicator-border-radius":h,"--n-indicator-box-shadow":a,"--n-indicator-color":n,"--n-indicator-text-color":l}}),ee=C?Fe("slider-indicator",void 0,He,t):void 0;return{mergedClsPrefix:i,namespace:$,uncontrolledValue:M,mergedValue:te,mergedDisabled:m,mergedPlacement:ye,isMounted:yt(),adjustedTo:Ie(t),dotTransitionDisabled:U,markInfos:ae,isShowTooltip:ue,shouldKeepTooltipTransition:_e,handleRailRef:g,setHandleRefs:w,setFollowerRefs:y,fillStyle:q,getHandleStyle:oe,activeIndex:B,arrifiedValues:T,followerEnabledIndexSet:E,handleRailMouseDown:Ge,handleHandleFocus:Ze,handleHandleBlur:et,handleHandleMouseEnter:tt,handleHandleMouseLeave:nt,handleRailKeyDown:ie,indicatorCssVars:C?void 0:He,indicatorThemeClass:ee==null?void 0:ee.themeClass,indicatorOnRender:ee==null?void 0:ee.onRender,cssVars:C?void 0:Ee,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){var t;const{mergedClsPrefix:i,themeClass:$,formatTooltip:C}=this;return(t=this.onRender)===null||t===void 0||t.call(this),u("div",{class:[`${i}-slider`,$,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},u("div",{class:`${i}-slider-rail`},u("div",{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?u("div",{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(f=>u("div",{key:f.label,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:f.active}],style:f.style}))):null,u("div",{ref:"handleRailRef",class:`${i}-slider-handles`},this.arrifiedValues.map((f,g)=>{const d=this.isShowTooltip(g);return u(_t,null,{default:()=>[u(kt,null,{default:()=>u("div",{ref:this.setHandleRefs(g),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(f,g),onFocus:()=>this.handleHandleFocus(g),onBlur:()=>this.handleHandleBlur(g),onMouseenter:()=>this.handleHandleMouseEnter(g),onMouseleave:()=>this.handleHandleMouseLeave(g)},Ct(this.$slots.thumb,()=>[u("div",{class:`${i}-slider-handle`})]))}),this.tooltip&&u(Rt,{ref:this.setFollowerRefs(g),show:d,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(g),teleportDisabled:this.adjustedTo===Ie.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>u(zt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(g),onEnter:()=>{this.followerEnabledIndexSet.add(g)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(g)}},{default:()=>{var w;return d?((w=this.indicatorOnRender)===null||w===void 0||w.call(this),u("div",{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof C=="function"?C(f):f)):null}})})]})})),this.marks?u("div",{class:`${i}-slider-marks`},this.markInfos.map(f=>u("div",{key:f.label,class:`${i}-slider-mark`,style:f.style},f.label))):null))}}),Wt=o("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[c("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),c("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),c("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),o("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Ue({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),c("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),X("&:focus",[c("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),x("round",[c("rail","border-radius: calc(var(--n-rail-height) / 2);",[c("button","border-radius: calc(var(--n-button-height) / 2);")])]),je("disabled",[je("icon",[x("rubber-band",[x("pressed",[c("rail",[c("button","max-width: var(--n-button-width-pressed);")])]),c("rail",[X("&:active",[c("button","max-width: var(--n-button-width-pressed);")])]),x("active",[x("pressed",[c("rail",[c("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),c("rail",[X("&:active",[c("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),x("active",[c("rail",[c("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),c("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[c("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Ue()]),c("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),x("active",[c("rail","background-color: var(--n-rail-color-active);")]),x("loading",[c("rail",`
 cursor: wait;
 `)]),x("disabled",[c("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Xt=Object.assign(Object.assign({},we.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let re;const Yt=Pe({name:"Switch",props:Xt,setup(t){re===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?re=CSS.supports("width","max(1px)"):re=!1:re=!0);const{mergedClsPrefixRef:i,inlineThemeDisabled:$}=We(t),C=we("Switch","-switch",Wt,St,t,i),f=Xe(t),{mergedSizeRef:g,mergedDisabledRef:d}=f,w=P(t.defaultValue),A=Ye(t,"value"),y=Qe(A,w),E=V(()=>y.value===t.checkedValue),D=P(!1),m=P(!1),_=V(()=>{const{railStyle:r}=t;if(!!r)return r({focused:m.value,checked:E.value})});function M(r){const{"onUpdate:value":U,onChange:L,onUpdateValue:q}=t,{nTriggerFormInput:ae,nTriggerFormChange:oe}=f;U&&se(U,r),q&&se(q,r),L&&se(L,r),w.value=r,ae(),oe()}function xe(){const{nTriggerFormFocus:r}=f;r()}function te(){const{nTriggerFormBlur:r}=f;r()}function T(){t.loading||d.value||(y.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue))}function de(){m.value=!0,xe()}function ye(){m.value=!1,te(),D.value=!1}function ce(r){t.loading||d.value||r.key===" "&&(y.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue),D.value=!1)}function B(r){t.loading||d.value||r.key===" "&&(r.preventDefault(),D.value=!0)}const ne=V(()=>{const{value:r}=g,{self:{opacityDisabled:U,railColor:L,railColorActive:q,buttonBoxShadow:ae,buttonColor:oe,boxShadowFocus:ue,loadingColor:_e,textColor:ke,iconColor:Ce,[Y("buttonHeight",r)]:H,[Y("buttonWidth",r)]:he,[Y("buttonWidthPressed",r)]:le,[Y("railHeight",r)]:F,[Y("railWidth",r)]:O,[Y("railBorderRadius",r)]:G,[Y("buttonBorderRadius",r)]:Re},common:{cubicBezierEaseInOut:ze}}=C.value;let K,J,ie;return re?(K=`calc((${F} - ${H}) / 2)`,J=`max(${F}, ${H})`,ie=`max(${O}, calc(${O} + ${H} - ${F}))`):(K=Te((j(F)-j(H))/2),J=Te(Math.max(j(F),j(H))),ie=j(F)>j(H)?O:Te(j(O)+j(H)-j(F))),{"--n-bezier":ze,"--n-button-border-radius":Re,"--n-button-box-shadow":ae,"--n-button-color":oe,"--n-button-width":he,"--n-button-width-pressed":le,"--n-button-height":H,"--n-height":J,"--n-offset":K,"--n-opacity-disabled":U,"--n-rail-border-radius":G,"--n-rail-color":L,"--n-rail-color-active":q,"--n-rail-height":F,"--n-rail-width":O,"--n-width":ie,"--n-box-shadow-focus":ue,"--n-loading-color":_e,"--n-text-color":ke,"--n-icon-color":Ce}}),S=$?Fe("switch",V(()=>g.value[0]),ne,t):void 0;return{handleClick:T,handleBlur:ye,handleFocus:de,handleKeyup:ce,handleKeydown:B,mergedRailStyle:_,pressed:D,mergedClsPrefix:i,mergedValue:y,checked:E,mergedDisabled:d,cssVars:$?void 0:ne,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:i,checked:$,mergedRailStyle:C,onRender:f,$slots:g}=this;f==null||f();const{checked:d,unchecked:w,icon:A,"checked-icon":y,"unchecked-icon":E}=g,D=!(Be(A)&&Be(y)&&Be(E));return u("div",{role:"switch","aria-checked":$,class:[`${t}-switch`,this.themeClass,D&&`${t}-switch--icon`,$&&`${t}-switch--active`,i&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:C},Q(d,m=>Q(w,_=>m||_?u("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},u("div",{class:`${t}-switch__rail-placeholder`},u("div",{class:`${t}-switch__button-placeholder`}),m),u("div",{class:`${t}-switch__rail-placeholder`},u("div",{class:`${t}-switch__button-placeholder`}),_)):null)),u("div",{class:`${t}-switch__button`},Q(A,m=>Q(y,_=>Q(E,M=>u(Vt,null,{default:()=>this.loading?u($t,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(_||m)?u("div",{class:`${t}-switch__button-icon`,key:_?"checked-icon":"icon"},_||m):!this.checked&&(M||m)?u("div",{class:`${t}-switch__button-icon`,key:M?"unchecked-icon":"icon"},M||m):null})))),Q(d,m=>m&&u("div",{key:"checked",class:`${t}-switch__checked`},m)),Q(w,m=>m&&u("div",{key:"unchecked",class:`${t}-switch__unchecked`},m)))))}}),Qt={},qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Gt=Dt("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z",fill:"currentColor"},null,-1),Jt=[Gt];function Zt(t,i){return qe(),Bt("svg",qt,Jt)}const Ke=Tt(Qt,[["render",Zt]]),on=Pe({__name:"SettingsView",setup(t){const i=Mt();Ft();function $(){i.warning({title:b("warning"),content:b("clear_local_storage_warning"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:()=>{localStorage.clear(),location.reload()},onNegativeClick:()=>{}})}function C(){i.info({title:b("info"),content:b("are_you_sure"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:()=>{Pt(),location.reload()},onNegativeClick:()=>{}})}function f(){i.info({title:b("info"),content:b("are_you_sure"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:()=>{Et(),location.reload()},onNegativeClick:()=>{}})}return(g,d)=>{const w=Ht,A=Nt,y=At,E=Yt,D=Kt,m=Ut;return qe(),It(m,{clickable:"",hoverable:""},{default:p(()=>[s(y,{onClick:d[0]||(d[0]=()=>g.$router.push({name:"content-blacklist-view"}))},{suffix:p(()=>[s(A,null,{default:p(()=>[s(Ke)]),_:1})]),default:p(()=>[s(w,{title:v(b)("hide_rules")},null,8,["title"])]),_:1}),s(y,{onClick:d[1]||(d[1]=()=>g.$router.push({name:"mute-user"}))},{suffix:p(()=>[s(A,null,{default:p(()=>[s(Ke)]),_:1})]),default:p(()=>[s(w,{title:v(b)("mute_user")},null,8,["title"])]),_:1}),s(y,{onClick:C},{default:p(()=>[s(w,{title:v(b)("clear_expired_cache")},null,8,["title"])]),_:1}),s(y,{onClick:f},{default:p(()=>[s(w,{title:v(b)("clear_all_caches")},null,8,["title"])]),_:1}),s(y,{onClick:$},{default:p(()=>[s(w,{title:v(b)("clear_local_storage")},null,8,["title"])]),_:1}),s(y,null,{suffix:p(()=>[s(E,{value:v(I).autoPing,"onUpdate:value":d[2]||(d[2]=_=>v(I).autoPing=_)},null,8,["value"])]),default:p(()=>[s(w,{title:v(b)("automatic_ping")},null,8,["title"])]),_:1}),s(y,null,{suffix:p(()=>[s(E,{value:v(I).enablePapawTree,"onUpdate:value":d[3]||(d[3]=_=>v(I).enablePapawTree=_)},null,8,["value"])]),default:p(()=>[s(w,{title:v(b)("enable_papaw_tree")},null,8,["title"])]),_:1}),s(y,null,{suffix:p(()=>[s(E,{value:v(I).enablePapawTreeLazyMode,"onUpdate:value":d[4]||(d[4]=_=>v(I).enablePapawTreeLazyMode=_)},null,8,["value"])]),default:p(()=>[s(w,{title:v(b)("enable_papaw_tree_lazy_mode")},null,8,["title"])]),_:1}),s(y,null,{default:p(()=>[s(w,{description:v(b)("lazy_delay_for_papaw_tip"),titleExtra:String(v(I).lazyDelayForPapaw)},{header:p(()=>[De(Me(v(b)("lazy_delay_for_papaw")),1)]),footer:p(()=>[s(D,{value:v(I).lazyDelayForPapaw,"onUpdate:value":d[5]||(d[5]=_=>v(I).lazyDelayForPapaw=_),step:50,min:0,max:1e3},null,8,["value"])]),_:1},8,["description","titleExtra"])]),_:1}),s(y,null,{default:p(()=>[s(w,{titleExtra:String(v(I).relayEmiterQueueInterval)},{header:p(()=>[De(Me(v(b)("relay_emiter_queue_interval")),1)]),footer:p(()=>[s(D,{value:v(I).relayEmiterQueueInterval,"onUpdate:value":d[6]||(d[6]=_=>v(I).relayEmiterQueueInterval=_),min:0,max:20},null,8,["value"])]),_:1},8,["titleExtra"])]),_:1}),s(y,{onClick:d[7]||(d[7]=()=>g.$router.push({name:"move-house"}))},{default:p(()=>[s(w,{description:v(b)("move_house_description")},{header:p(()=>[De(Me(v(b)("move_house")),1)]),_:1},8,["description"])]),_:1})]),_:1})}}});export{on as default};
