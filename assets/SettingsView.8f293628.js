import{N as I,cK as mt,b as X,c as a,a as y,d as u,aP as gt,aQ as pt,f as Ee,u as We,g as xe,dA as wt,k as V,M as Xe,af as Ae,P as Te,O as xt,h,L as yt,e as Ue,dB as _t,aJ as kt,o as Ye,z as Ct,au as Rt,an as zt,l as St,w as c,m as l,n as f,v as Be,x as De,C as v,dC as Vt,dD as $t}from"./index.1b90d9b0.js";import{c as P}from"./nostr.754d0882.js";import{_ as Tt}from"./Thing.71875d81.js";import{u as Qe,e as Bt,a as Dt,c as se,i as je,b as Me,r as Y,N as Mt,d as Ft}from"./Loading.68c8fb32.js";import{u as qe,a as ge,o as pe}from"./cssr.ebdd28c2.js";import{c as Q}from"./create-key.7b548031.js";import{p as Fe,d as j}from"./index.62f1e1b0.js";import{u as Pe}from"./use-css-vars-class.2322281d.js";import{f as Le}from"./fade-in-scale-up.cssr.769ecc19.js";import{u as Ie,V as Pt,a as It,b as Et}from"./Follower.46005694.js";import{u as Nt}from"./composables.d23d34d7.js";import{N as Ht}from"./Icon.d35ca04d.js";import{a as At,_ as Ut}from"./ListItem.9baa61b5.js";import"./use-rtl.e3f5641a.js";import"./use-style.d41c90c3.js";import"./format-length.3612bbc8.js";function Ke(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Oe(){const t=I(new Map),r=$=>C=>{t.value.set($,C)};return mt(()=>t.value.clear()),[t,r]}const jt=X([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[y("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),y("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),y("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[u("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),y("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),y("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),X("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[u("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),y("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[u("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[u("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[X("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),X("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[X("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[y("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
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
 `,[y("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Le()]),a("slider-handle-indicator",`
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
 `),Le()]),gt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),pt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Lt=0,Kt=Object.assign(Object.assign({},xe.props),{to:Ie.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ot=Ee({name:"Slider",props:Kt,setup(t){const{mergedClsPrefixRef:r,namespaceRef:$,inlineThemeDisabled:C}=We(t),g=xe("Slider","-slider",jt,wt,t,r),b=I(null),[s,p]=Oe(),[E,x]=Oe(),N=I(new Set),D=Qe(t),{mergedDisabledRef:w}=D,_=V(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const n=e.toString();let o=0;return n.includes(".")&&(o=n.length-n.indexOf(".")-1),o}),M=I(t.defaultValue),ye=Xe(t,"value"),te=qe(ye,M),T=V(()=>{const{value:e}=te;return(t.range?e:[e]).map(K)}),de=V(()=>T.value.length>2),_e=V(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ce=V(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),B=I(-1),ne=I(-1),S=I(-1),d=I(!1),U=I(!1),L=V(()=>{const{vertical:e,reverse:n}=t;return e?n?"top":"bottom":n?"right":"left"}),q=V(()=>{if(de.value)return;const e=T.value,n=J(t.range?Math.min(...e):t.min),o=J(t.range?Math.max(...e):e[0]),{value:i}=L;return t.vertical?{[i]:`${n}%`,height:`${o-n}%`}:{[i]:`${n}%`,width:`${o-n}%`}}),oe=V(()=>{const e=[],{marks:n}=t;if(n){const o=T.value.slice();o.sort((R,z)=>R-z);const{value:i}=L,{value:m}=de,{range:k}=t,A=m?()=>!1:R=>k?R>=o[0]&&R<=o[o.length-1]:R<=o[0];for(const R of Object.keys(n)){const z=Number(R);e.push({active:A(z),label:n[R],style:{[i]:`${J(z)}%`}})}}return e});function ae(e,n){const o=J(e),{value:i}=L;return{[i]:`${o}%`,zIndex:n===B.value?1:0}}function ue(e){return t.showTooltip||S.value===e||B.value===e&&d.value}function ke(e){return d.value?!(B.value===e&&ne.value===e):!0}function Ce(e){var n;~e&&(B.value=e,(n=s.value.get(e))===null||n===void 0||n.focus())}function Re(){E.value.forEach((e,n)=>{ue(n)&&e.syncPosition()})}function H(e){const{"onUpdate:value":n,onUpdateValue:o}=t,{nTriggerFormInput:i,nTriggerFormChange:m}=D;o&&se(o,e),n&&se(n,e),M.value=e,i(),m()}function he(e){const{range:n}=t;if(n){if(Array.isArray(e)){const{value:o}=T;e.join()!==o.join()&&H(e)}}else Array.isArray(e)||T.value[0]!==e&&H(e)}function le(e,n){if(t.range){const o=T.value.slice();o.splice(n,1,e),he(o)}else he(e)}function F(e,n,o){const i=o!==void 0;o||(o=e-n>0?1:-1);const m=ce.value||[],{step:k}=t;if(k==="mark"){const z=O(e,m.concat(n),i?o:void 0);return z?z.value:n}if(k<=0)return n;const{value:A}=_;let R;if(i){const z=Number((n/k).toFixed(A)),W=Math.floor(z),Ve=z>W?W:W-1,$e=z<W?W:W+1;R=O(n,[Number((Ve*k).toFixed(A)),Number(($e*k).toFixed(A)),...m],o)}else{const z=Se(e);R=O(e,[...m,z])}return R?K(R.value):n}function K(e){return Math.min(t.max,Math.max(t.min,e))}function J(e){const{max:n,min:o}=t;return(e-o)/(n-o)*100}function ze(e){const{max:n,min:o}=t;return o+(n-o)*e}function Se(e){const{step:n,min:o}=t;if(n<=0||n==="mark")return e;const i=Math.round((e-o)/n)*n+o;return Number(i.toFixed(_.value))}function O(e,n=ce.value,o){if(!(n!=null&&n.length))return null;let i=null,m=-1;for(;++m<n.length;){const k=n[m]-e,A=Math.abs(k);(o===void 0||k*o>0)&&(i===null||A<i.distance)&&(i={index:m,distance:A,value:n[m]})}return i}function G(e){const n=b.value;if(!n)return;const o=Ke(e)?e.touches[0]:e,i=n.getBoundingClientRect();let m;return t.vertical?m=(i.bottom-o.clientY)/i.height:m=(o.clientX-i.left)/i.width,t.reverse&&(m=1-m),ze(m)}function ie(e){if(w.value||!t.keyboard)return;const{vertical:n,reverse:o}=t;switch(e.key){case"ArrowUp":e.preventDefault(),fe(n&&o?-1:1);break;case"ArrowRight":e.preventDefault(),fe(!n&&o?-1:1);break;case"ArrowDown":e.preventDefault(),fe(n&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),fe(!n&&o?1:-1);break}}function fe(e){const n=B.value;if(n===-1)return;const{step:o}=t,i=T.value[n],m=o<=0||o==="mark"?i:i+o*e;le(F(m,i,e>0?1:-1),n)}function Je(e){var n,o;if(w.value||!Ke(e)&&e.button!==Lt)return;const i=G(e);if(i===void 0)return;const m=T.value.slice(),k=t.range?(o=(n=O(i,m))===null||n===void 0?void 0:n.index)!==null&&o!==void 0?o:-1:0;k!==-1&&(e.preventDefault(),Ce(k),Ge(),le(F(i,T.value[k]),k))}function Ge(){d.value||(d.value=!0,ge("touchend",document,me),ge("mouseup",document,me),ge("touchmove",document,be),ge("mousemove",document,be))}function ve(){d.value&&(d.value=!1,pe("touchend",document,me),pe("mouseup",document,me),pe("touchmove",document,be),pe("mousemove",document,be))}function be(e){const{value:n}=B;if(!d.value||n===-1){ve();return}const o=G(e);le(F(o,T.value[n]),n)}function me(){ve()}function Ze(e){B.value=e,w.value||(S.value=e)}function et(e){B.value===e&&(B.value=-1,ve()),S.value===e&&(S.value=-1)}function tt(e){S.value=e}function nt(e){S.value===e&&(S.value=-1)}Ae(B,(e,n)=>void Te(()=>ne.value=n)),Ae(te,()=>{if(t.marks){if(U.value)return;U.value=!0,Te(()=>{U.value=!1})}Te(Re)}),xt(()=>{ve()});const Ne=V(()=>{const{self:{markFontSize:e,railColor:n,railColorHover:o,fillColor:i,fillColorHover:m,handleColor:k,opacityDisabled:A,dotColor:R,dotColorModal:z,handleBoxShadow:W,handleBoxShadowHover:Ve,handleBoxShadowActive:$e,handleBoxShadowFocus:ot,dotBorder:at,dotBoxShadow:lt,railHeight:it,railWidthVertical:rt,handleSize:st,dotHeight:dt,dotWidth:ct,dotBorderRadius:ut,fontSize:ht,dotBorderActive:ft,dotColorPopover:vt},common:{cubicBezierEaseInOut:bt}}=g.value;return{"--n-bezier":bt,"--n-dot-border":at,"--n-dot-border-active":ft,"--n-dot-border-radius":ut,"--n-dot-box-shadow":lt,"--n-dot-color":R,"--n-dot-color-modal":z,"--n-dot-color-popover":vt,"--n-dot-height":dt,"--n-dot-width":ct,"--n-fill-color":i,"--n-fill-color-hover":m,"--n-font-size":ht,"--n-handle-box-shadow":W,"--n-handle-box-shadow-active":$e,"--n-handle-box-shadow-focus":ot,"--n-handle-box-shadow-hover":Ve,"--n-handle-color":k,"--n-handle-size":st,"--n-opacity-disabled":A,"--n-rail-color":n,"--n-rail-color-hover":o,"--n-rail-height":it,"--n-rail-width-vertical":rt,"--n-mark-font-size":e}}),Z=C?Pe("slider",void 0,Ne,t):void 0,He=V(()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:o,indicatorTextColor:i,indicatorBorderRadius:m}}=g.value;return{"--n-font-size":e,"--n-indicator-border-radius":m,"--n-indicator-box-shadow":o,"--n-indicator-color":n,"--n-indicator-text-color":i}}),ee=C?Pe("slider-indicator",void 0,He,t):void 0;return{mergedClsPrefix:r,namespace:$,uncontrolledValue:M,mergedValue:te,mergedDisabled:w,mergedPlacement:_e,isMounted:Bt(),adjustedTo:Ie(t),dotTransitionDisabled:U,markInfos:oe,isShowTooltip:ue,shouldKeepTooltipTransition:ke,handleRailRef:b,setHandleRefs:p,setFollowerRefs:x,fillStyle:q,getHandleStyle:ae,activeIndex:B,arrifiedValues:T,followerEnabledIndexSet:N,handleRailMouseDown:Je,handleHandleFocus:Ze,handleHandleBlur:et,handleHandleMouseEnter:tt,handleHandleMouseLeave:nt,handleRailKeyDown:ie,indicatorCssVars:C?void 0:He,indicatorThemeClass:ee==null?void 0:ee.themeClass,indicatorOnRender:ee==null?void 0:ee.onRender,cssVars:C?void 0:Ne,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){var t;const{mergedClsPrefix:r,themeClass:$,formatTooltip:C}=this;return(t=this.onRender)===null||t===void 0||t.call(this),h("div",{class:[`${r}-slider`,$,{[`${r}-slider--disabled`]:this.mergedDisabled,[`${r}-slider--active`]:this.activeIndex!==-1,[`${r}-slider--with-mark`]:this.marks,[`${r}-slider--vertical`]:this.vertical,[`${r}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},h("div",{class:`${r}-slider-rail`},h("div",{class:`${r}-slider-rail__fill`,style:this.fillStyle}),this.marks?h("div",{class:[`${r}-slider-dots`,this.dotTransitionDisabled&&`${r}-slider-dots--transition-disabled`]},this.markInfos.map(g=>h("div",{key:g.label,class:[`${r}-slider-dot`,{[`${r}-slider-dot--active`]:g.active}],style:g.style}))):null,h("div",{ref:"handleRailRef",class:`${r}-slider-handles`},this.arrifiedValues.map((g,b)=>{const s=this.isShowTooltip(b);return h(Pt,null,{default:()=>[h(It,null,{default:()=>h("div",{ref:this.setHandleRefs(b),class:`${r}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(g,b),onFocus:()=>this.handleHandleFocus(b),onBlur:()=>this.handleHandleBlur(b),onMouseenter:()=>this.handleHandleMouseEnter(b),onMouseleave:()=>this.handleHandleMouseLeave(b)},Dt(this.$slots.thumb,()=>[h("div",{class:`${r}-slider-handle`})]))}),this.tooltip&&h(Et,{ref:this.setFollowerRefs(b),show:s,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(b),teleportDisabled:this.adjustedTo===Ie.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>h(yt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(b),onEnter:()=>{this.followerEnabledIndexSet.add(b)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(b)}},{default:()=>{var p;return s?((p=this.indicatorOnRender)===null||p===void 0||p.call(this),h("div",{class:[`${r}-slider-handle-indicator`,this.indicatorThemeClass,`${r}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof C=="function"?C(g):g)):null}})})]})})),this.marks?h("div",{class:`${r}-slider-marks`},this.markInfos.map(g=>h("div",{key:g.label,class:`${r}-slider-mark`,style:g.style},g.label))):null))}}),Wt=a("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[u("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),u("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),u("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),a("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[je({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),u("checked, unchecked",`
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
 `),u("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),u("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),X("&:focus",[u("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),y("round",[u("rail","border-radius: calc(var(--n-rail-height) / 2);",[u("button","border-radius: calc(var(--n-button-height) / 2);")])]),Ue("disabled",[Ue("icon",[y("rubber-band",[y("pressed",[u("rail",[u("button","max-width: var(--n-button-width-pressed);")])]),u("rail",[X("&:active",[u("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[u("rail",[u("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),u("rail",[X("&:active",[u("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[u("rail",[u("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),u("rail",`
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
 `,[u("button-icon",`
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
 `,[je()]),u("button",`
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
 `)]),y("active",[u("rail","background-color: var(--n-rail-color-active);")]),y("loading",[u("rail",`
 cursor: wait;
 `)]),y("disabled",[u("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Xt=Object.assign(Object.assign({},xe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let re;const Yt=Ee({name:"Switch",props:Xt,setup(t){re===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?re=CSS.supports("width","max(1px)"):re=!1:re=!0);const{mergedClsPrefixRef:r,inlineThemeDisabled:$}=We(t),C=xe("Switch","-switch",Wt,_t,t,r),g=Qe(t),{mergedSizeRef:b,mergedDisabledRef:s}=g,p=I(t.defaultValue),E=Xe(t,"value"),x=qe(E,p),N=V(()=>x.value===t.checkedValue),D=I(!1),w=I(!1),_=V(()=>{const{railStyle:d}=t;if(!!d)return d({focused:w.value,checked:N.value})});function M(d){const{"onUpdate:value":U,onChange:L,onUpdateValue:q}=t,{nTriggerFormInput:oe,nTriggerFormChange:ae}=g;U&&se(U,d),q&&se(q,d),L&&se(L,d),p.value=d,oe(),ae()}function ye(){const{nTriggerFormFocus:d}=g;d()}function te(){const{nTriggerFormBlur:d}=g;d()}function T(){t.loading||s.value||(x.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue))}function de(){w.value=!0,ye()}function _e(){w.value=!1,te(),D.value=!1}function ce(d){t.loading||s.value||d.key===" "&&(x.value!==t.checkedValue?M(t.checkedValue):M(t.uncheckedValue),D.value=!1)}function B(d){t.loading||s.value||d.key===" "&&(d.preventDefault(),D.value=!0)}const ne=V(()=>{const{value:d}=b,{self:{opacityDisabled:U,railColor:L,railColorActive:q,buttonBoxShadow:oe,buttonColor:ae,boxShadowFocus:ue,loadingColor:ke,textColor:Ce,iconColor:Re,[Q("buttonHeight",d)]:H,[Q("buttonWidth",d)]:he,[Q("buttonWidthPressed",d)]:le,[Q("railHeight",d)]:F,[Q("railWidth",d)]:K,[Q("railBorderRadius",d)]:J,[Q("buttonBorderRadius",d)]:ze},common:{cubicBezierEaseInOut:Se}}=C.value;let O,G,ie;return re?(O=`calc((${F} - ${H}) / 2)`,G=`max(${F}, ${H})`,ie=`max(${K}, calc(${K} + ${H} - ${F}))`):(O=Fe((j(F)-j(H))/2),G=Fe(Math.max(j(F),j(H))),ie=j(F)>j(H)?K:Fe(j(K)+j(H)-j(F))),{"--n-bezier":Se,"--n-button-border-radius":ze,"--n-button-box-shadow":oe,"--n-button-color":ae,"--n-button-width":he,"--n-button-width-pressed":le,"--n-button-height":H,"--n-height":G,"--n-offset":O,"--n-opacity-disabled":U,"--n-rail-border-radius":J,"--n-rail-color":L,"--n-rail-color-active":q,"--n-rail-height":F,"--n-rail-width":K,"--n-width":ie,"--n-box-shadow-focus":ue,"--n-loading-color":ke,"--n-text-color":Ce,"--n-icon-color":Re}}),S=$?Pe("switch",V(()=>b.value[0]),ne,t):void 0;return{handleClick:T,handleBlur:_e,handleFocus:de,handleKeyup:ce,handleKeydown:B,mergedRailStyle:_,pressed:D,mergedClsPrefix:r,mergedValue:x,checked:N,mergedDisabled:s,cssVars:$?void 0:ne,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:r,checked:$,mergedRailStyle:C,onRender:g,$slots:b}=this;g==null||g();const{checked:s,unchecked:p,icon:E,"checked-icon":x,"unchecked-icon":N}=b,D=!(Me(E)&&Me(x)&&Me(N));return h("div",{role:"switch","aria-checked":$,class:[`${t}-switch`,this.themeClass,D&&`${t}-switch--icon`,$&&`${t}-switch--active`,r&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:C},Y(s,w=>Y(p,_=>w||_?h("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},h("div",{class:`${t}-switch__rail-placeholder`},h("div",{class:`${t}-switch__button-placeholder`}),w),h("div",{class:`${t}-switch__rail-placeholder`},h("div",{class:`${t}-switch__button-placeholder`}),_)):null)),h("div",{class:`${t}-switch__button`},Y(E,w=>Y(x,_=>Y(N,M=>h(Mt,null,{default:()=>this.loading?h(Ft,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(_||w)?h("div",{class:`${t}-switch__button-icon`,key:_?"checked-icon":"icon"},_||w):!this.checked&&(M||w)?h("div",{class:`${t}-switch__button-icon`,key:M?"unchecked-icon":"icon"},M||w):null})))),Y(s,w=>w&&h("div",{key:"checked",class:`${t}-switch__checked`},w)),Y(p,w=>w&&h("div",{key:"unchecked",class:`${t}-switch__unchecked`},w)))))}}),Qt={},qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Jt=Rt("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z",fill:"currentColor"},null,-1),Gt=[Jt];function Zt(t,r){return Ye(),Ct("svg",qt,Gt)}const we=kt(Qt,[["render",Zt]]),gn=Ee({__name:"SettingsView",setup(t){const r=Nt();zt();function $(){r.warning({title:v("warning"),content:v("clear_local_storage_warning"),positiveText:v("yes"),negativeText:v("no"),onPositiveClick:()=>{localStorage.clear(),location.reload()},onNegativeClick:()=>{}})}function C(){r.info({title:v("info"),content:v("are_you_sure"),positiveText:v("yes"),negativeText:v("no"),onPositiveClick:()=>{Vt(),location.reload()},onNegativeClick:()=>{}})}function g(){r.info({title:v("info"),content:v("are_you_sure"),positiveText:v("yes"),negativeText:v("no"),onPositiveClick:()=>{$t(),location.reload()},onNegativeClick:()=>{}})}return(b,s)=>{const p=Tt,E=Ht,x=At,N=Yt,D=Ot,w=Ut;return Ye(),St(w,{clickable:"",hoverable:""},{default:c(()=>[l(x,{onClick:s[0]||(s[0]=()=>b.$router.push({name:"language-settings"}))},{suffix:c(()=>[l(E,null,{default:c(()=>[l(we)]),_:1})]),default:c(()=>[l(p,{title:f(v)("language_settings")},null,8,["title"])]),_:1}),l(x,{onClick:s[1]||(s[1]=()=>b.$router.push({name:"content-blacklist-view"}))},{suffix:c(()=>[l(E,null,{default:c(()=>[l(we)]),_:1})]),default:c(()=>[l(p,{title:f(v)("hide_rules")},null,8,["title"])]),_:1}),l(x,{onClick:s[2]||(s[2]=()=>b.$router.push({name:"mute-user"}))},{suffix:c(()=>[l(E,null,{default:c(()=>[l(we)]),_:1})]),default:c(()=>[l(p,{title:f(v)("mute_user")},null,8,["title"])]),_:1}),l(x,{onClick:s[3]||(s[3]=()=>b.$router.push({name:"nostr-connect-setting"}))},{suffix:c(()=>[l(E,null,{default:c(()=>[l(we)]),_:1})]),default:c(()=>[l(p,{title:f(v)("nostr_connect")},null,8,["title"])]),_:1}),l(x,{onClick:C},{default:c(()=>[l(p,{title:f(v)("clear_expired_cache")},null,8,["title"])]),_:1}),l(x,{onClick:g},{default:c(()=>[l(p,{title:f(v)("clear_all_caches")},null,8,["title"])]),_:1}),l(x,{onClick:$},{default:c(()=>[l(p,{title:f(v)("clear_local_storage")},null,8,["title"])]),_:1}),l(x,null,{suffix:c(()=>[l(N,{value:f(P).autoPing,"onUpdate:value":s[4]||(s[4]=_=>f(P).autoPing=_)},null,8,["value"])]),default:c(()=>[l(p,{title:f(v)("automatic_ping")},null,8,["title"])]),_:1}),l(x,null,{suffix:c(()=>[l(N,{value:f(P).enablePapawTree,"onUpdate:value":s[5]||(s[5]=_=>f(P).enablePapawTree=_)},null,8,["value"])]),default:c(()=>[l(p,{title:f(v)("enable_papaw_tree")},null,8,["title"])]),_:1}),l(x,null,{suffix:c(()=>[l(N,{value:f(P).enablePapawTreeLazyMode,"onUpdate:value":s[6]||(s[6]=_=>f(P).enablePapawTreeLazyMode=_)},null,8,["value"])]),default:c(()=>[l(p,{title:f(v)("enable_papaw_tree_lazy_mode")},null,8,["title"])]),_:1}),l(x,null,{default:c(()=>[l(p,{description:f(v)("lazy_delay_for_papaw_tip"),titleExtra:String(f(P).lazyDelayForPapaw)},{header:c(()=>[Be(De(f(v)("lazy_delay_for_papaw")),1)]),footer:c(()=>[l(D,{value:f(P).lazyDelayForPapaw,"onUpdate:value":s[7]||(s[7]=_=>f(P).lazyDelayForPapaw=_),step:50,min:0,max:1e3},null,8,["value"])]),_:1},8,["description","titleExtra"])]),_:1}),l(x,null,{default:c(()=>[l(p,{titleExtra:String(f(P).relayEmiterQueueInterval)},{header:c(()=>[Be(De(f(v)("relay_emiter_queue_interval")),1)]),footer:c(()=>[l(D,{value:f(P).relayEmiterQueueInterval,"onUpdate:value":s[8]||(s[8]=_=>f(P).relayEmiterQueueInterval=_),min:0,max:20},null,8,["value"])]),_:1},8,["titleExtra"])]),_:1}),l(x,{onClick:s[9]||(s[9]=()=>b.$router.push({name:"move-house"}))},{default:c(()=>[l(p,{description:f(v)("move_house_description")},{header:c(()=>[Be(De(f(v)("move_house")),1)]),_:1},8,["description"])]),_:1})]),_:1})}}});export{gn as default};
