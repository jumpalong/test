import{ao as P,dr as bt,b as X,c as o,a as w,d as s,bh as Ne,cp as gt,cq as mt,f as Pe,u as Le,h as we,ds as pt,aB as We,n as V,at as Xe,aA as Ye,av as Ae,aJ as $e,b3 as wt,q as Fe,cO as xt,d6 as Ie,j as d,b6 as yt,b7 as _t,w as kt,b8 as Ct,b9 as Rt,aK as me,aM as pe,r as se,i as Ue,e as je,dt as zt,o as Y,cn as Te,b0 as U,du as Be,v as q,N as St,au as Vt,bs as $t,y as qe,I as Tt,aO as Bt,br as Dt,z as Mt,A as y,H as u,C as b,D as De,F as Me,O as g,dv as Ft,dw as It,aj as I}from"./index.4d15edfb.js";import{_ as Pt}from"./Thing.f0804c98.js";import{u as Et}from"./composables.0d8e5804.js";import{N as Ht}from"./Icon.46f55143.js";import{a as Nt,_ as At}from"./ListItem.e31aee76.js";function Oe(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Ke(){const t=P(new Map),l=$=>C=>{t.value.set($,C)};return bt(()=>t.value.clear()),[t,l]}const Ut=X([o("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[w("reverse",[o("slider-handles",[o("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),o("slider-dots",[o("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),w("vertical",[o("slider-handles",[o("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),o("slider-marks",[o("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),o("slider-dots",[o("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),w("vertical",`
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
 `,[s("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),w("with-mark",`
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
 `)])]),w("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[o("slider-handle",`
 cursor: not-allowed;
 `)]),w("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),X("&:hover",[o("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[s("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),o("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),w("active",[o("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[s("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),o("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),o("slider-marks",`
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
 `,[s("fill",`
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
 `,[w("transition-disabled",[o("slider-dot","transition: none;")]),o("slider-dot",`
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
 `,[w("active","border: var(--n-dot-border-active);")])])]),o("slider-handle-indicator",`
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
 `,[w("top",`
 margin-bottom: 12px;
 `),w("right",`
 margin-left: 12px;
 `),w("bottom",`
 margin-top: 12px;
 `),w("left",`
 margin-right: 12px;
 `),Ne()]),gt(o("slider",[o("slider-dot","background-color: var(--n-dot-color-modal);")])),mt(o("slider",[o("slider-dot","background-color: var(--n-dot-color-popover);")]))]),jt=0,Ot=Object.assign(Object.assign({},we.props),{to:Ie.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Kt=Pe({name:"Slider",props:Ot,setup(t){const{mergedClsPrefixRef:l,namespaceRef:$,inlineThemeDisabled:C}=Le(t),f=we("Slider","-slider",Ut,pt,t,l),m=P(null),[c,p]=Ke(),[j,_]=Ke(),E=P(new Set),D=We(t),{mergedDisabledRef:v}=D,x=V(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const n=e.toString();let a=0;return n.includes(".")&&(a=n.length-n.indexOf(".")-1),a}),M=P(t.defaultValue),xe=Xe(t,"value"),te=Ye(xe,M),T=V(()=>{const{value:e}=te;return(t.range?e:[e]).map(K)}),de=V(()=>T.value.length>2),ye=V(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ce=V(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),B=P(-1),ne=P(-1),S=P(-1),r=P(!1),A=P(!1),O=V(()=>{const{vertical:e,reverse:n}=t;return e?n?"top":"bottom":n?"right":"left"}),Q=V(()=>{if(de.value)return;const e=T.value,n=J(t.range?Math.min(...e):t.min),a=J(t.range?Math.max(...e):e[0]),{value:i}=O;return t.vertical?{[i]:`${n}%`,height:`${a-n}%`}:{[i]:`${n}%`,width:`${a-n}%`}}),ae=V(()=>{const e=[],{marks:n}=t;if(n){const a=T.value.slice();a.sort((R,z)=>R-z);const{value:i}=O,{value:h}=de,{range:k}=t,N=h?()=>!1:R=>k?R>=a[0]&&R<=a[a.length-1]:R<=a[0];for(const R of Object.keys(n)){const z=Number(R);e.push({active:N(z),label:n[R],style:{[i]:`${J(z)}%`}})}}return e});function oe(e,n){const a=J(e),{value:i}=O;return{[i]:`${a}%`,zIndex:n===B.value?1:0}}function ue(e){return t.showTooltip||S.value===e||B.value===e&&r.value}function _e(e){return r.value?!(B.value===e&&ne.value===e):!0}function ke(e){var n;~e&&(B.value=e,(n=c.value.get(e))===null||n===void 0||n.focus())}function Ce(){j.value.forEach((e,n)=>{ue(n)&&e.syncPosition()})}function H(e){const{"onUpdate:value":n,onUpdateValue:a}=t,{nTriggerFormInput:i,nTriggerFormChange:h}=D;a&&se(a,e),n&&se(n,e),M.value=e,i(),h()}function he(e){const{range:n}=t;if(n){if(Array.isArray(e)){const{value:a}=T;e.join()!==a.join()&&H(e)}}else Array.isArray(e)||T.value[0]!==e&&H(e)}function ie(e,n){if(t.range){const a=T.value.slice();a.splice(n,1,e),he(a)}else he(e)}function F(e,n,a){const i=a!==void 0;a||(a=e-n>0?1:-1);const h=ce.value||[],{step:k}=t;if(k==="mark"){const z=L(e,h.concat(n),i?a:void 0);return z?z.value:n}if(k<=0)return n;const{value:N}=x;let R;if(i){const z=Number((n/k).toFixed(N)),W=Math.floor(z),Se=z>W?W:W-1,Ve=z<W?W:W+1;R=L(n,[Number((Se*k).toFixed(N)),Number((Ve*k).toFixed(N)),...h],a)}else{const z=ze(e);R=L(e,[...h,z])}return R?K(R.value):n}function K(e){return Math.min(t.max,Math.max(t.min,e))}function J(e){const{max:n,min:a}=t;return(e-a)/(n-a)*100}function Re(e){const{max:n,min:a}=t;return a+(n-a)*e}function ze(e){const{step:n,min:a}=t;if(n<=0||n==="mark")return e;const i=Math.round((e-a)/n)*n+a;return Number(i.toFixed(x.value))}function L(e,n=ce.value,a){if(!(n!=null&&n.length))return null;let i=null,h=-1;for(;++h<n.length;){const k=n[h]-e,N=Math.abs(k);(a===void 0||k*a>0)&&(i===null||N<i.distance)&&(i={index:h,distance:N,value:n[h]})}return i}function G(e){const n=m.value;if(!n)return;const a=Oe(e)?e.touches[0]:e,i=n.getBoundingClientRect();let h;return t.vertical?h=(i.bottom-a.clientY)/i.height:h=(a.clientX-i.left)/i.width,t.reverse&&(h=1-h),Re(h)}function le(e){if(v.value||!t.keyboard)return;const{vertical:n,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),fe(n&&a?-1:1);break;case"ArrowRight":e.preventDefault(),fe(!n&&a?-1:1);break;case"ArrowDown":e.preventDefault(),fe(n&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),fe(!n&&a?1:-1);break}}function fe(e){const n=B.value;if(n===-1)return;const{step:a}=t,i=T.value[n],h=a<=0||a==="mark"?i:i+a*e;ie(F(h,i,e>0?1:-1),n)}function Qe(e){var n,a;if(v.value||!Oe(e)&&e.button!==jt)return;const i=G(e);if(i===void 0)return;const h=T.value.slice(),k=t.range?(a=(n=L(i,h))===null||n===void 0?void 0:n.index)!==null&&a!==void 0?a:-1:0;k!==-1&&(e.preventDefault(),ke(k),Je(),ie(F(i,T.value[k]),k))}function Je(){r.value||(r.value=!0,me("touchend",document,ge),me("mouseup",document,ge),me("touchmove",document,be),me("mousemove",document,be))}function ve(){r.value&&(r.value=!1,pe("touchend",document,ge),pe("mouseup",document,ge),pe("touchmove",document,be),pe("mousemove",document,be))}function be(e){const{value:n}=B;if(!r.value||n===-1){ve();return}const a=G(e);ie(F(a,T.value[n]),n)}function ge(){ve()}function Ge(e){B.value=e,v.value||(S.value=e)}function Ze(e){B.value===e&&(B.value=-1,ve()),S.value===e&&(S.value=-1)}function et(e){S.value=e}function tt(e){S.value===e&&(S.value=-1)}Ae(B,(e,n)=>void $e(()=>ne.value=n)),Ae(te,()=>{if(t.marks){if(A.value)return;A.value=!0,$e(()=>{A.value=!1})}$e(Ce)}),wt(()=>{ve()});const Ee=V(()=>{const{self:{markFontSize:e,railColor:n,railColorHover:a,fillColor:i,fillColorHover:h,handleColor:k,opacityDisabled:N,dotColor:R,dotColorModal:z,handleBoxShadow:W,handleBoxShadowHover:Se,handleBoxShadowActive:Ve,handleBoxShadowFocus:nt,dotBorder:at,dotBoxShadow:ot,railHeight:it,railWidthVertical:lt,handleSize:rt,dotHeight:st,dotWidth:dt,dotBorderRadius:ct,fontSize:ut,dotBorderActive:ht,dotColorPopover:ft},common:{cubicBezierEaseInOut:vt}}=f.value;return{"--n-bezier":vt,"--n-dot-border":at,"--n-dot-border-active":ht,"--n-dot-border-radius":ct,"--n-dot-box-shadow":ot,"--n-dot-color":R,"--n-dot-color-modal":z,"--n-dot-color-popover":ft,"--n-dot-height":st,"--n-dot-width":dt,"--n-fill-color":i,"--n-fill-color-hover":h,"--n-font-size":ut,"--n-handle-box-shadow":W,"--n-handle-box-shadow-active":Ve,"--n-handle-box-shadow-focus":nt,"--n-handle-box-shadow-hover":Se,"--n-handle-color":k,"--n-handle-size":rt,"--n-opacity-disabled":N,"--n-rail-color":n,"--n-rail-color-hover":a,"--n-rail-height":it,"--n-rail-width-vertical":lt,"--n-mark-font-size":e}}),Z=C?Fe("slider",void 0,Ee,t):void 0,He=V(()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:a,indicatorTextColor:i,indicatorBorderRadius:h}}=f.value;return{"--n-font-size":e,"--n-indicator-border-radius":h,"--n-indicator-box-shadow":a,"--n-indicator-color":n,"--n-indicator-text-color":i}}),ee=C?Fe("slider-indicator",void 0,He,t):void 0;return{mergedClsPrefix:l,namespace:$,uncontrolledValue:M,mergedValue:te,mergedDisabled:v,mergedPlacement:ye,isMounted:xt(),adjustedTo:Ie(t),dotTransitionDisabled:A,markInfos:ae,isShowTooltip:ue,shouldKeepTooltipTransition:_e,handleRailRef:m,setHandleRefs:p,setFollowerRefs:_,fillStyle:Q,getHandleStyle:oe,activeIndex:B,arrifiedValues:T,followerEnabledIndexSet:E,handleRailMouseDown:Qe,handleHandleFocus:Ge,handleHandleBlur:Ze,handleHandleMouseEnter:et,handleHandleMouseLeave:tt,handleRailKeyDown:le,indicatorCssVars:C?void 0:He,indicatorThemeClass:ee==null?void 0:ee.themeClass,indicatorOnRender:ee==null?void 0:ee.onRender,cssVars:C?void 0:Ee,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){var t;const{mergedClsPrefix:l,themeClass:$,formatTooltip:C}=this;return(t=this.onRender)===null||t===void 0||t.call(this),d("div",{class:[`${l}-slider`,$,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},d("div",{class:`${l}-slider-rail`},d("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?d("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(f=>d("div",{key:f.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:f.active}],style:f.style}))):null,d("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((f,m)=>{const c=this.isShowTooltip(m);return d(yt,null,{default:()=>[d(_t,null,{default:()=>d("div",{ref:this.setHandleRefs(m),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(f,m),onFocus:()=>this.handleHandleFocus(m),onBlur:()=>this.handleHandleBlur(m),onMouseenter:()=>this.handleHandleMouseEnter(m),onMouseleave:()=>this.handleHandleMouseLeave(m)},kt(this.$slots.thumb,()=>[d("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&d(Ct,{ref:this.setFollowerRefs(m),show:c,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(m),teleportDisabled:this.adjustedTo===Ie.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>d(Rt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(m),onEnter:()=>{this.followerEnabledIndexSet.add(m)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(m)}},{default:()=>{var p;return c?((p=this.indicatorOnRender)===null||p===void 0||p.call(this),d("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof C=="function"?C(f):f)):null}})})]})})),this.marks?d("div",{class:`${l}-slider-marks`},this.markInfos.map(f=>d("div",{key:f.label,class:`${l}-slider-mark`,style:f.style},f.label))):null))}}),Lt=o("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[s("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),s("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),s("button-placeholder",`
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
 `,[Ue({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),s("checked, unchecked",`
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
 `),s("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),s("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),X("&:focus",[s("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w("round",[s("rail","border-radius: calc(var(--n-rail-height) / 2);",[s("button","border-radius: calc(var(--n-button-height) / 2);")])]),je("disabled",[je("icon",[w("rubber-band",[w("pressed",[s("rail",[s("button","max-width: var(--n-button-width-pressed);")])]),s("rail",[X("&:active",[s("button","max-width: var(--n-button-width-pressed);")])]),w("active",[w("pressed",[s("rail",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),s("rail",[X("&:active",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),w("active",[s("rail",[s("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),s("rail",`
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
 `,[s("button-icon",`
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
 `,[Ue()]),s("button",`
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
 `)]),w("active",[s("rail","background-color: var(--n-rail-color-active);")]),w("loading",[s("rail",`
 cursor: wait;
 `)]),w("disabled",[s("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Wt=Object.assign(Object.assign({},we.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let re;const Xt=Pe({name:"Switch",props:Wt,setup(t){re===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?re=CSS.supports("width","max(1px)"):re=!1:re=!0);const{mergedClsPrefixRef:l,inlineThemeDisabled:$}=Le(t),C=we("Switch","-switch",Lt,zt,t,l),f=We(t),{mergedSizeRef:m,mergedDisabledRef:c}=f,p=P(t.defaultValue),j=Xe(t,"value"),_=Ye(j,p),E=V(()=>_.value===t.checkedValue),D=P(!1),v=P(!1),x=V(()=>{const{railStyle:r}=t;if(!!r)return r({focused:v.value,checked:E.value})});function M(r){const{"onUpdate:value":A,onChange:O,onUpdateValue:Q}=t,{nTriggerFormInput:ae,nTriggerFormChange:oe}=f;A&&se(A,r),Q&&se(Q,r),O&&se(O,r),p.value=r,ae(),oe()}function xe(){const{nTriggerFormFocus:r}=f;r()}function te(){const{nTriggerFormBlur:r}=f;r()}function T(){t.loading||c.value||(_.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue))}function de(){v.value=!0,xe()}function ye(){v.value=!1,te(),D.value=!1}function ce(r){t.loading||c.value||r.key===" "&&(_.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue),D.value=!1)}function B(r){t.loading||c.value||r.key===" "&&(r.preventDefault(),D.value=!0)}const ne=V(()=>{const{value:r}=m,{self:{opacityDisabled:A,railColor:O,railColorActive:Q,buttonBoxShadow:ae,buttonColor:oe,boxShadowFocus:ue,loadingColor:_e,textColor:ke,iconColor:Ce,[Y("buttonHeight",r)]:H,[Y("buttonWidth",r)]:he,[Y("buttonWidthPressed",r)]:ie,[Y("railHeight",r)]:F,[Y("railWidth",r)]:K,[Y("railBorderRadius",r)]:J,[Y("buttonBorderRadius",r)]:Re},common:{cubicBezierEaseInOut:ze}}=C.value;let L,G,le;return re?(L=`calc((${F} - ${H}) / 2)`,G=`max(${F}, ${H})`,le=`max(${K}, calc(${K} + ${H} - ${F}))`):(L=Te((U(F)-U(H))/2),G=Te(Math.max(U(F),U(H))),le=U(F)>U(H)?K:Te(U(K)+U(H)-U(F))),{"--n-bezier":ze,"--n-button-border-radius":Re,"--n-button-box-shadow":ae,"--n-button-color":oe,"--n-button-width":he,"--n-button-width-pressed":ie,"--n-button-height":H,"--n-height":G,"--n-offset":L,"--n-opacity-disabled":A,"--n-rail-border-radius":J,"--n-rail-color":O,"--n-rail-color-active":Q,"--n-rail-height":F,"--n-rail-width":K,"--n-width":le,"--n-box-shadow-focus":ue,"--n-loading-color":_e,"--n-text-color":ke,"--n-icon-color":Ce}}),S=$?Fe("switch",V(()=>m.value[0]),ne,t):void 0;return{handleClick:T,handleBlur:ye,handleFocus:de,handleKeyup:ce,handleKeydown:B,mergedRailStyle:x,pressed:D,mergedClsPrefix:l,mergedValue:_,checked:E,mergedDisabled:c,cssVars:$?void 0:ne,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:l,checked:$,mergedRailStyle:C,onRender:f,$slots:m}=this;f==null||f();const{checked:c,unchecked:p,icon:j,"checked-icon":_,"unchecked-icon":E}=m,D=!(Be(j)&&Be(_)&&Be(E));return d("div",{role:"switch","aria-checked":$,class:[`${t}-switch`,this.themeClass,D&&`${t}-switch--icon`,$&&`${t}-switch--active`,l&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:C},q(c,v=>q(p,x=>v||x?d("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},d("div",{class:`${t}-switch__rail-placeholder`},d("div",{class:`${t}-switch__button-placeholder`}),v),d("div",{class:`${t}-switch__rail-placeholder`},d("div",{class:`${t}-switch__button-placeholder`}),x)):null)),d("div",{class:`${t}-switch__button`},q(j,v=>q(_,x=>q(E,M=>d(St,null,{default:()=>this.loading?d(Vt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(x||v)?d("div",{class:`${t}-switch__button-icon`,key:x?"checked-icon":"icon"},x||v):!this.checked&&(M||v)?d("div",{class:`${t}-switch__button-icon`,key:M?"unchecked-icon":"icon"},M||v):null})))),q(c,v=>v&&d("div",{key:"checked",class:`${t}-switch__checked`},v)),q(p,v=>v&&d("div",{key:"unchecked",class:`${t}-switch__unchecked`},v)))))}}),Yt={},qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Qt=Bt("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z",fill:"currentColor"},null,-1),Jt=[Qt];function Gt(t,l){return qe(),Tt("svg",qt,Jt)}const Zt=$t(Yt,[["render",Gt]]),ln=Pe({__name:"SettingsView",setup(t){const l=Et();Dt();function $(){l.warning({title:g("warning"),content:g("clear_local_storage_warning"),positiveText:g("yes"),negativeText:g("no"),onPositiveClick:()=>{localStorage.clear(),location.reload()},onNegativeClick:()=>{}})}function C(){l.info({title:g("info"),content:g("are_you_sure"),positiveText:g("yes"),negativeText:g("no"),onPositiveClick:()=>{Ft(),location.reload()},onNegativeClick:()=>{}})}function f(){l.info({title:g("info"),content:g("are_you_sure"),positiveText:g("yes"),negativeText:g("no"),onPositiveClick:()=>{It(),location.reload()},onNegativeClick:()=>{}})}return(m,c)=>{const p=Pt,j=Ht,_=Nt,E=Xt,D=Kt,v=At;return qe(),Mt(v,{clickable:"",hoverable:""},{default:y(()=>[u(_,{onClick:c[0]||(c[0]=()=>m.$router.push({name:"content-blacklist-view"}))},{suffix:y(()=>[u(j,null,{default:y(()=>[u(Zt)]),_:1})]),default:y(()=>[u(p,{title:b(g)("hide_rules")},null,8,["title"])]),_:1}),u(_,{onClick:C},{default:y(()=>[u(p,{title:b(g)("clear_expired_cache")},null,8,["title"])]),_:1}),u(_,{onClick:f},{default:y(()=>[u(p,{title:b(g)("clear_all_caches")},null,8,["title"])]),_:1}),u(_,{onClick:$},{default:y(()=>[u(p,{title:b(g)("clear_local_storage")},null,8,["title"])]),_:1}),u(_,null,{suffix:y(()=>[u(E,{value:b(I).autoPing,"onUpdate:value":c[1]||(c[1]=x=>b(I).autoPing=x)},null,8,["value"])]),default:y(()=>[u(p,{title:b(g)("automatic_ping")},null,8,["title"])]),_:1}),u(_,null,{suffix:y(()=>[u(E,{value:b(I).enablePapawTree,"onUpdate:value":c[2]||(c[2]=x=>b(I).enablePapawTree=x)},null,8,["value"])]),default:y(()=>[u(p,{title:b(g)("enable_papaw_tree")},null,8,["title"])]),_:1}),u(_,null,{suffix:y(()=>[u(E,{value:b(I).enablePapawTreeLazyMode,"onUpdate:value":c[3]||(c[3]=x=>b(I).enablePapawTreeLazyMode=x)},null,8,["value"])]),default:y(()=>[u(p,{title:b(g)("enable_papaw_tree_lazy_mode")},null,8,["title"])]),_:1}),u(_,null,{default:y(()=>[u(p,{description:b(g)("lazy_delay_for_papaw_tip"),titleExtra:String(b(I).lazyDelayForPapaw)},{header:y(()=>[De(Me(b(g)("lazy_delay_for_papaw")),1)]),footer:y(()=>[u(D,{value:b(I).lazyDelayForPapaw,"onUpdate:value":c[4]||(c[4]=x=>b(I).lazyDelayForPapaw=x),step:50,min:0,max:1e3},null,8,["value"])]),_:1},8,["description","titleExtra"])]),_:1}),u(_,null,{default:y(()=>[u(p,{titleExtra:String(b(I).relayEmiterQueueInterval)},{header:y(()=>[De(Me(b(g)("relay_emiter_queue_interval")),1)]),footer:y(()=>[u(D,{value:b(I).relayEmiterQueueInterval,"onUpdate:value":c[5]||(c[5]=x=>b(I).relayEmiterQueueInterval=x),min:0,max:20},null,8,["value"])]),_:1},8,["titleExtra"])]),_:1}),u(_,{onClick:c[6]||(c[6]=()=>m.$router.push({name:"move-house"}))},{default:y(()=>[u(p,{description:b(g)("move_house_description")},{header:y(()=>[De(Me(b(g)("move_house")),1)]),_:1},8,["description"])]),_:1})]),_:1})}}});export{ln as default};
