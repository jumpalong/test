import{V as P,e8 as gt,b as Y,c as o,a as y,d as c,cN as Ae,bV as mt,bW as pt,f as Ee,u as We,h as we,e9 as wt,bU as Ye,o as V,al as Xe,b5 as Qe,ae as Ue,b6 as $e,af as xt,r as Ie,cQ as yt,cP as Pe,j as u,cR as _t,cS as kt,x as Ct,cT as Rt,ap as St,bY as me,ea as pe,v as se,i as je,e as Le,eb as zt,q as X,dA as Te,du as j,ec as Be,w as Q,N as Vt,dw as $t,ab as Tt,A as qe,L as Bt,W as Dt,aI as Mt,aB as Ft,a6 as It,B as Pt,C as h,D as i,F as v,H as De,I as Me,Q as b,ed as Et,ee as Nt,dO as Ht,dN as At,ef as I}from"./index.ddbfeb2e.js";import{_ as Ut}from"./Thing.9bca183f.js";function Oe(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Ke(){const t=P(new Map),r=$=>C=>{t.value.set($,C)};return gt(()=>t.value.clear()),[t,r]}const jt=Y([o("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[y("reverse",[o("slider-handles",[o("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),o("slider-dots",[o("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),y("vertical",[o("slider-handles",[o("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),o("slider-marks",[o("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),o("slider-dots",[o("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),y("vertical",`
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
 `)]),y("with-mark",`
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
 `)])]),y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[o("slider-handle",`
 cursor: not-allowed;
 `)]),y("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),Y("&:hover",[o("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[c("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),o("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),y("active",[o("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[c("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),o("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),o("slider-marks",`
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
 `,[Y("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),Y("&:focus",[o("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[Y("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),o("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[y("transition-disabled",[o("slider-dot","transition: none;")]),o("slider-dot",`
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
 `,[y("active","border: var(--n-dot-border-active);")])])]),o("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ae()]),o("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[y("top",`
 margin-bottom: 12px;
 `),y("right",`
 margin-left: 12px;
 `),y("bottom",`
 margin-top: 12px;
 `),y("left",`
 margin-right: 12px;
 `),Ae()]),mt(o("slider",[o("slider-dot","background-color: var(--n-dot-color-modal);")])),pt(o("slider",[o("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Lt=0,Ot=Object.assign(Object.assign({},we.props),{to:Pe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Kt=Ee({name:"Slider",props:Ot,setup(t){const{mergedClsPrefixRef:r,namespaceRef:$,inlineThemeDisabled:C}=We(t),g=we("Slider","-slider",jt,wt,t,r),m=P(null),[d,p]=Ke(),[H,x]=Ke(),E=P(new Set),D=Ye(t),{mergedDisabledRef:w}=D,_=V(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const n=e.toString();let a=0;return n.includes(".")&&(a=n.length-n.indexOf(".")-1),a}),M=P(t.defaultValue),xe=Xe(t,"value"),te=Qe(xe,M),T=V(()=>{const{value:e}=te;return(t.range?e:[e]).map(O)}),de=V(()=>T.value.length>2),ye=V(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ce=V(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),B=P(-1),ne=P(-1),z=P(-1),s=P(!1),U=P(!1),L=V(()=>{const{vertical:e,reverse:n}=t;return e?n?"top":"bottom":n?"right":"left"}),q=V(()=>{if(de.value)return;const e=T.value,n=G(t.range?Math.min(...e):t.min),a=G(t.range?Math.max(...e):e[0]),{value:l}=L;return t.vertical?{[l]:`${n}%`,height:`${a-n}%`}:{[l]:`${n}%`,width:`${a-n}%`}}),ae=V(()=>{const e=[],{marks:n}=t;if(n){const a=T.value.slice();a.sort((R,S)=>R-S);const{value:l}=L,{value:f}=de,{range:k}=t,A=f?()=>!1:R=>k?R>=a[0]&&R<=a[a.length-1]:R<=a[0];for(const R of Object.keys(n)){const S=Number(R);e.push({active:A(S),label:n[R],style:{[l]:`${G(S)}%`}})}}return e});function oe(e,n){const a=G(e),{value:l}=L;return{[l]:`${a}%`,zIndex:n===B.value?1:0}}function ue(e){return t.showTooltip||z.value===e||B.value===e&&s.value}function _e(e){return s.value?!(B.value===e&&ne.value===e):!0}function ke(e){var n;~e&&(B.value=e,(n=d.value.get(e))===null||n===void 0||n.focus())}function Ce(){H.value.forEach((e,n)=>{ue(n)&&e.syncPosition()})}function N(e){const{"onUpdate:value":n,onUpdateValue:a}=t,{nTriggerFormInput:l,nTriggerFormChange:f}=D;a&&se(a,e),n&&se(n,e),M.value=e,l(),f()}function he(e){const{range:n}=t;if(n){if(Array.isArray(e)){const{value:a}=T;e.join()!==a.join()&&N(e)}}else Array.isArray(e)||T.value[0]!==e&&N(e)}function le(e,n){if(t.range){const a=T.value.slice();a.splice(n,1,e),he(a)}else he(e)}function F(e,n,a){const l=a!==void 0;a||(a=e-n>0?1:-1);const f=ce.value||[],{step:k}=t;if(k==="mark"){const S=K(e,f.concat(n),l?a:void 0);return S?S.value:n}if(k<=0)return n;const{value:A}=_;let R;if(l){const S=Number((n/k).toFixed(A)),W=Math.floor(S),ze=S>W?W:W-1,Ve=S<W?W:W+1;R=K(n,[Number((ze*k).toFixed(A)),Number((Ve*k).toFixed(A)),...f],a)}else{const S=Se(e);R=K(e,[...f,S])}return R?O(R.value):n}function O(e){return Math.min(t.max,Math.max(t.min,e))}function G(e){const{max:n,min:a}=t;return(e-a)/(n-a)*100}function Re(e){const{max:n,min:a}=t;return a+(n-a)*e}function Se(e){const{step:n,min:a}=t;if(n<=0||n==="mark")return e;const l=Math.round((e-a)/n)*n+a;return Number(l.toFixed(_.value))}function K(e,n=ce.value,a){if(!(n!=null&&n.length))return null;let l=null,f=-1;for(;++f<n.length;){const k=n[f]-e,A=Math.abs(k);(a===void 0||k*a>0)&&(l===null||A<l.distance)&&(l={index:f,distance:A,value:n[f]})}return l}function J(e){const n=m.value;if(!n)return;const a=Oe(e)?e.touches[0]:e,l=n.getBoundingClientRect();let f;return t.vertical?f=(l.bottom-a.clientY)/l.height:f=(a.clientX-l.left)/l.width,t.reverse&&(f=1-f),Re(f)}function ie(e){if(w.value||!t.keyboard)return;const{vertical:n,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),fe(n&&a?-1:1);break;case"ArrowRight":e.preventDefault(),fe(!n&&a?-1:1);break;case"ArrowDown":e.preventDefault(),fe(n&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),fe(!n&&a?1:-1);break}}function fe(e){const n=B.value;if(n===-1)return;const{step:a}=t,l=T.value[n],f=a<=0||a==="mark"?l:l+a*e;le(F(f,l,e>0?1:-1),n)}function Ge(e){var n,a;if(w.value||!Oe(e)&&e.button!==Lt)return;const l=J(e);if(l===void 0)return;const f=T.value.slice(),k=t.range?(a=(n=K(l,f))===null||n===void 0?void 0:n.index)!==null&&a!==void 0?a:-1:0;k!==-1&&(e.preventDefault(),ke(k),Je(),le(F(l,T.value[k]),k))}function Je(){s.value||(s.value=!0,me("touchend",document,ge),me("mouseup",document,ge),me("touchmove",document,be),me("mousemove",document,be))}function ve(){s.value&&(s.value=!1,pe("touchend",document,ge),pe("mouseup",document,ge),pe("touchmove",document,be),pe("mousemove",document,be))}function be(e){const{value:n}=B;if(!s.value||n===-1){ve();return}const a=J(e);le(F(a,T.value[n]),n)}function ge(){ve()}function Ze(e){B.value=e,w.value||(z.value=e)}function et(e){B.value===e&&(B.value=-1,ve()),z.value===e&&(z.value=-1)}function tt(e){z.value=e}function nt(e){z.value===e&&(z.value=-1)}Ue(B,(e,n)=>void $e(()=>ne.value=n)),Ue(te,()=>{if(t.marks){if(U.value)return;U.value=!0,$e(()=>{U.value=!1})}$e(Ce)}),xt(()=>{ve()});const Ne=V(()=>{const{self:{markFontSize:e,railColor:n,railColorHover:a,fillColor:l,fillColorHover:f,handleColor:k,opacityDisabled:A,dotColor:R,dotColorModal:S,handleBoxShadow:W,handleBoxShadowHover:ze,handleBoxShadowActive:Ve,handleBoxShadowFocus:at,dotBorder:ot,dotBoxShadow:lt,railHeight:it,railWidthVertical:rt,handleSize:st,dotHeight:dt,dotWidth:ct,dotBorderRadius:ut,fontSize:ht,dotBorderActive:ft,dotColorPopover:vt},common:{cubicBezierEaseInOut:bt}}=g.value;return{"--n-bezier":bt,"--n-dot-border":ot,"--n-dot-border-active":ft,"--n-dot-border-radius":ut,"--n-dot-box-shadow":lt,"--n-dot-color":R,"--n-dot-color-modal":S,"--n-dot-color-popover":vt,"--n-dot-height":dt,"--n-dot-width":ct,"--n-fill-color":l,"--n-fill-color-hover":f,"--n-font-size":ht,"--n-handle-box-shadow":W,"--n-handle-box-shadow-active":Ve,"--n-handle-box-shadow-focus":at,"--n-handle-box-shadow-hover":ze,"--n-handle-color":k,"--n-handle-size":st,"--n-opacity-disabled":A,"--n-rail-color":n,"--n-rail-color-hover":a,"--n-rail-height":it,"--n-rail-width-vertical":rt,"--n-mark-font-size":e}}),Z=C?Ie("slider",void 0,Ne,t):void 0,He=V(()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:a,indicatorTextColor:l,indicatorBorderRadius:f}}=g.value;return{"--n-font-size":e,"--n-indicator-border-radius":f,"--n-indicator-box-shadow":a,"--n-indicator-color":n,"--n-indicator-text-color":l}}),ee=C?Ie("slider-indicator",void 0,He,t):void 0;return{mergedClsPrefix:r,namespace:$,uncontrolledValue:M,mergedValue:te,mergedDisabled:w,mergedPlacement:ye,isMounted:yt(),adjustedTo:Pe(t),dotTransitionDisabled:U,markInfos:ae,isShowTooltip:ue,shouldKeepTooltipTransition:_e,handleRailRef:m,setHandleRefs:p,setFollowerRefs:x,fillStyle:q,getHandleStyle:oe,activeIndex:B,arrifiedValues:T,followerEnabledIndexSet:E,handleRailMouseDown:Ge,handleHandleFocus:Ze,handleHandleBlur:et,handleHandleMouseEnter:tt,handleHandleMouseLeave:nt,handleRailKeyDown:ie,indicatorCssVars:C?void 0:He,indicatorThemeClass:ee==null?void 0:ee.themeClass,indicatorOnRender:ee==null?void 0:ee.onRender,cssVars:C?void 0:Ne,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){var t;const{mergedClsPrefix:r,themeClass:$,formatTooltip:C}=this;return(t=this.onRender)===null||t===void 0||t.call(this),u("div",{class:[`${r}-slider`,$,{[`${r}-slider--disabled`]:this.mergedDisabled,[`${r}-slider--active`]:this.activeIndex!==-1,[`${r}-slider--with-mark`]:this.marks,[`${r}-slider--vertical`]:this.vertical,[`${r}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},u("div",{class:`${r}-slider-rail`},u("div",{class:`${r}-slider-rail__fill`,style:this.fillStyle}),this.marks?u("div",{class:[`${r}-slider-dots`,this.dotTransitionDisabled&&`${r}-slider-dots--transition-disabled`]},this.markInfos.map(g=>u("div",{key:g.label,class:[`${r}-slider-dot`,{[`${r}-slider-dot--active`]:g.active}],style:g.style}))):null,u("div",{ref:"handleRailRef",class:`${r}-slider-handles`},this.arrifiedValues.map((g,m)=>{const d=this.isShowTooltip(m);return u(_t,null,{default:()=>[u(kt,null,{default:()=>u("div",{ref:this.setHandleRefs(m),class:`${r}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(g,m),onFocus:()=>this.handleHandleFocus(m),onBlur:()=>this.handleHandleBlur(m),onMouseenter:()=>this.handleHandleMouseEnter(m),onMouseleave:()=>this.handleHandleMouseLeave(m)},Ct(this.$slots.thumb,()=>[u("div",{class:`${r}-slider-handle`})]))}),this.tooltip&&u(Rt,{ref:this.setFollowerRefs(m),show:d,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(m),teleportDisabled:this.adjustedTo===Pe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>u(St,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(m),onEnter:()=>{this.followerEnabledIndexSet.add(m)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(m)}},{default:()=>{var p;return d?((p=this.indicatorOnRender)===null||p===void 0||p.call(this),u("div",{class:[`${r}-slider-handle-indicator`,this.indicatorThemeClass,`${r}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof C=="function"?C(g):g)):null}})})]})})),this.marks?u("div",{class:`${r}-slider-marks`},this.markInfos.map(g=>u("div",{key:g.label,class:`${r}-slider-mark`,style:g.style},g.label))):null))}}),Wt=o("switch",`
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
 `,[je({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("checked, unchecked",`
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
 `),Y("&:focus",[c("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),y("round",[c("rail","border-radius: calc(var(--n-rail-height) / 2);",[c("button","border-radius: calc(var(--n-button-height) / 2);")])]),Le("disabled",[Le("icon",[y("rubber-band",[y("pressed",[c("rail",[c("button","max-width: var(--n-button-width-pressed);")])]),c("rail",[Y("&:active",[c("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[c("rail",[c("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),c("rail",[Y("&:active",[c("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[c("rail",[c("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),c("rail",`
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
 `,[je()]),c("button",`
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
 `)]),y("active",[c("rail","background-color: var(--n-rail-color-active);")]),y("loading",[c("rail",`
 cursor: wait;
 `)]),y("disabled",[c("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Yt=Object.assign(Object.assign({},we.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let re;const Xt=Ee({name:"Switch",props:Yt,setup(t){re===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?re=CSS.supports("width","max(1px)"):re=!1:re=!0);const{mergedClsPrefixRef:r,inlineThemeDisabled:$}=We(t),C=we("Switch","-switch",Wt,zt,t,r),g=Ye(t),{mergedSizeRef:m,mergedDisabledRef:d}=g,p=P(t.defaultValue),H=Xe(t,"value"),x=Qe(H,p),E=V(()=>x.value===t.checkedValue),D=P(!1),w=P(!1),_=V(()=>{const{railStyle:s}=t;if(!!s)return s({focused:w.value,checked:E.value})});function M(s){const{"onUpdate:value":U,onChange:L,onUpdateValue:q}=t,{nTriggerFormInput:ae,nTriggerFormChange:oe}=g;U&&se(U,s),q&&se(q,s),L&&se(L,s),p.value=s,ae(),oe()}function xe(){const{nTriggerFormFocus:s}=g;s()}function te(){const{nTriggerFormBlur:s}=g;s()}function T(){t.loading||d.value||(x.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue))}function de(){w.value=!0,xe()}function ye(){w.value=!1,te(),D.value=!1}function ce(s){t.loading||d.value||s.key===" "&&(x.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue),D.value=!1)}function B(s){t.loading||d.value||s.key===" "&&(s.preventDefault(),D.value=!0)}const ne=V(()=>{const{value:s}=m,{self:{opacityDisabled:U,railColor:L,railColorActive:q,buttonBoxShadow:ae,buttonColor:oe,boxShadowFocus:ue,loadingColor:_e,textColor:ke,iconColor:Ce,[X("buttonHeight",s)]:N,[X("buttonWidth",s)]:he,[X("buttonWidthPressed",s)]:le,[X("railHeight",s)]:F,[X("railWidth",s)]:O,[X("railBorderRadius",s)]:G,[X("buttonBorderRadius",s)]:Re},common:{cubicBezierEaseInOut:Se}}=C.value;let K,J,ie;return re?(K=`calc((${F} - ${N}) / 2)`,J=`max(${F}, ${N})`,ie=`max(${O}, calc(${O} + ${N} - ${F}))`):(K=Te((j(F)-j(N))/2),J=Te(Math.max(j(F),j(N))),ie=j(F)>j(N)?O:Te(j(O)+j(N)-j(F))),{"--n-bezier":Se,"--n-button-border-radius":Re,"--n-button-box-shadow":ae,"--n-button-color":oe,"--n-button-width":he,"--n-button-width-pressed":le,"--n-button-height":N,"--n-height":J,"--n-offset":K,"--n-opacity-disabled":U,"--n-rail-border-radius":G,"--n-rail-color":L,"--n-rail-color-active":q,"--n-rail-height":F,"--n-rail-width":O,"--n-width":ie,"--n-box-shadow-focus":ue,"--n-loading-color":_e,"--n-text-color":ke,"--n-icon-color":Ce}}),z=$?Ie("switch",V(()=>m.value[0]),ne,t):void 0;return{handleClick:T,handleBlur:ye,handleFocus:de,handleKeyup:ce,handleKeydown:B,mergedRailStyle:_,pressed:D,mergedClsPrefix:r,mergedValue:x,checked:E,mergedDisabled:d,cssVars:$?void 0:ne,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:r,checked:$,mergedRailStyle:C,onRender:g,$slots:m}=this;g==null||g();const{checked:d,unchecked:p,icon:H,"checked-icon":x,"unchecked-icon":E}=m,D=!(Be(H)&&Be(x)&&Be(E));return u("div",{role:"switch","aria-checked":$,class:[`${t}-switch`,this.themeClass,D&&`${t}-switch--icon`,$&&`${t}-switch--active`,r&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:C},Q(d,w=>Q(p,_=>w||_?u("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},u("div",{class:`${t}-switch__rail-placeholder`},u("div",{class:`${t}-switch__button-placeholder`}),w),u("div",{class:`${t}-switch__rail-placeholder`},u("div",{class:`${t}-switch__button-placeholder`}),_)):null)),u("div",{class:`${t}-switch__button`},Q(H,w=>Q(x,_=>Q(E,M=>u(Vt,null,{default:()=>this.loading?u($t,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(_||w)?u("div",{class:`${t}-switch__button-icon`,key:_?"checked-icon":"icon"},_||w):!this.checked&&(M||w)?u("div",{class:`${t}-switch__button-icon`,key:M?"unchecked-icon":"icon"},M||w):null})))),Q(d,w=>w&&u("div",{key:"checked",class:`${t}-switch__checked`},w)),Q(p,w=>w&&u("div",{key:"unchecked",class:`${t}-switch__unchecked`},w)))))}}),Qt={},qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Gt=Dt("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z",fill:"currentColor"},null,-1),Jt=[Gt];function Zt(t,r){return qe(),Bt("svg",qt,Jt)}const Fe=Tt(Qt,[["render",Zt]]),nn=Ee({__name:"SettingsView",setup(t){const r=Mt();Ft();function $(){r.warning({title:b("warning"),content:b("clear_local_storage_warning"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:()=>{localStorage.clear(),location.reload()},onNegativeClick:()=>{}})}function C(){r.info({title:b("info"),content:b("are_you_sure"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:()=>{Et(),location.reload()},onNegativeClick:()=>{}})}function g(){r.info({title:b("info"),content:b("are_you_sure"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:()=>{Nt(),location.reload()},onNegativeClick:()=>{}})}return(m,d)=>{const p=Ut,H=It,x=Ht,E=Xt,D=Kt,w=At;return qe(),Pt(w,{clickable:"",hoverable:""},{default:h(()=>[i(x,{onClick:d[0]||(d[0]=()=>m.$router.push({name:"content-blacklist-view"}))},{suffix:h(()=>[i(H,null,{default:h(()=>[i(Fe)]),_:1})]),default:h(()=>[i(p,{title:v(b)("hide_rules")},null,8,["title"])]),_:1}),i(x,{onClick:d[1]||(d[1]=()=>m.$router.push({name:"mute-user"}))},{suffix:h(()=>[i(H,null,{default:h(()=>[i(Fe)]),_:1})]),default:h(()=>[i(p,{title:v(b)("mute_user")},null,8,["title"])]),_:1}),i(x,{onClick:d[2]||(d[2]=()=>m.$router.push({name:"nostr-connect-setting"}))},{suffix:h(()=>[i(H,null,{default:h(()=>[i(Fe)]),_:1})]),default:h(()=>[i(p,{title:v(b)("nostr_connect")},null,8,["title"])]),_:1}),i(x,{onClick:C},{default:h(()=>[i(p,{title:v(b)("clear_expired_cache")},null,8,["title"])]),_:1}),i(x,{onClick:g},{default:h(()=>[i(p,{title:v(b)("clear_all_caches")},null,8,["title"])]),_:1}),i(x,{onClick:$},{default:h(()=>[i(p,{title:v(b)("clear_local_storage")},null,8,["title"])]),_:1}),i(x,null,{suffix:h(()=>[i(E,{value:v(I).autoPing,"onUpdate:value":d[3]||(d[3]=_=>v(I).autoPing=_)},null,8,["value"])]),default:h(()=>[i(p,{title:v(b)("automatic_ping")},null,8,["title"])]),_:1}),i(x,null,{suffix:h(()=>[i(E,{value:v(I).enablePapawTree,"onUpdate:value":d[4]||(d[4]=_=>v(I).enablePapawTree=_)},null,8,["value"])]),default:h(()=>[i(p,{title:v(b)("enable_papaw_tree")},null,8,["title"])]),_:1}),i(x,null,{suffix:h(()=>[i(E,{value:v(I).enablePapawTreeLazyMode,"onUpdate:value":d[5]||(d[5]=_=>v(I).enablePapawTreeLazyMode=_)},null,8,["value"])]),default:h(()=>[i(p,{title:v(b)("enable_papaw_tree_lazy_mode")},null,8,["title"])]),_:1}),i(x,null,{default:h(()=>[i(p,{description:v(b)("lazy_delay_for_papaw_tip"),titleExtra:String(v(I).lazyDelayForPapaw)},{header:h(()=>[De(Me(v(b)("lazy_delay_for_papaw")),1)]),footer:h(()=>[i(D,{value:v(I).lazyDelayForPapaw,"onUpdate:value":d[6]||(d[6]=_=>v(I).lazyDelayForPapaw=_),step:50,min:0,max:1e3},null,8,["value"])]),_:1},8,["description","titleExtra"])]),_:1}),i(x,null,{default:h(()=>[i(p,{titleExtra:String(v(I).relayEmiterQueueInterval)},{header:h(()=>[De(Me(v(b)("relay_emiter_queue_interval")),1)]),footer:h(()=>[i(D,{value:v(I).relayEmiterQueueInterval,"onUpdate:value":d[7]||(d[7]=_=>v(I).relayEmiterQueueInterval=_),min:0,max:20},null,8,["value"])]),_:1},8,["titleExtra"])]),_:1}),i(x,{onClick:d[8]||(d[8]=()=>m.$router.push({name:"move-house"}))},{default:h(()=>[i(p,{description:v(b)("move_house_description")},{header:h(()=>[De(Me(v(b)("move_house")),1)]),_:1},8,["description"])]),_:1})]),_:1})}}});export{nn as default};
