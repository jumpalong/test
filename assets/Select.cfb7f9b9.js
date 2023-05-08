import{f as Ke,N as b,Y as Ot,a4 as Xe,P as Ze,h as i,r as Ft,b as ae,c as y,d as P,e as He,a as te,g as Te,M as ne,dL as Tt,k as $,af as Fe,_ as St,F as Mt,u as Rt,dM as _t,L as Pt,bd as It,bc as Bt}from"./index.8f62a545.js";import{f as At}from"./fade-in-scale-up.cssr.5ebe4351.js";import{c as $t,d as zt,u as qe}from"./cssr.21c6f8e2.js";import{c as kt,h as Ye}from"./create.2deeaf6a.js";import{u as Et}from"./use-locale.cbb1f83b.js";import{W as Dt,u as Wt,g as Vt}from"./Scrollbar.8d5a1903.js";import{u as Lt,e as jt,c as N}from"./Loading.0b953150.js";import{u as et}from"./use-css-vars-class.1ada0b07.js";import{r as Oe}from"./render.568a1ab1.js";import{c as Ge}from"./create-key.7b548031.js";import{N as Nt}from"./Input.90533fe2.js";import{_ as je}from"./Tag.7e30ed31.js";import{_ as Ut,c as Je}from"./Popover.6590eae2.js";import{u as Kt,N as Ht}from"./SelectMenu.aac06f5e.js";import{m as qt}from"./index.71604e6f.js";import{u as Ue,V as Yt,a as Gt,b as Jt}from"./Follower.7ba57362.js";function Qt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const J="v-hidden",Xt=zt("[v-hidden]",{display:"none!important"}),Qe=Ke({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:v}){const g=b(null),s=b(null);function h(){const{value:T}=g,{getCounter:r,getTail:M}=e;let p;if(r!==void 0?p=r():p=s.value,!T||!p)return;p.hasAttribute(J)&&p.removeAttribute(J);const{children:R}=T,A=T.offsetWidth,B=[],_=v.tail?M==null?void 0:M():null;let m=_?_.offsetWidth:0,C=!1;const E=T.children.length-(v.tail?1:0);for(let x=0;x<E-1;++x){if(x<0)continue;const D=R[x];if(C){D.hasAttribute(J)||D.setAttribute(J,"");continue}else D.hasAttribute(J)&&D.removeAttribute(J);const V=D.offsetWidth;if(m+=V,B[x]=V,m>A){const{updateCounter:W}=e;for(let F=x;F>=0;--F){const z=E-1-F;W!==void 0?W(z):p.textContent=`${z}`;const L=p.offsetWidth;if(m-=B[F],m+L<=A||F===0){C=!0,x=F-1,_&&(x===-1?(_.style.maxWidth=`${A-L}px`,_.style.boxSizing="border-box"):_.style.maxWidth="");break}}}}const{onUpdateOverflow:O}=e;C?O!==void 0&&O(!0):(O!==void 0&&O(!1),p.setAttribute(J,""))}const S=Ot();return Xt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:$t,ssr:S}),Xe(h),{selfRef:g,counterRef:s,sync:h}},render(){const{$slots:e}=this;return Ze(this.sync),i("div",{class:"v-overflow",ref:"selfRef"},[Ft(e,"default"),e.counter?e.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),Zt=ae([y("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[y("base-loading",`
 color: var(--n-loading-color);
 `),y("base-selection-tags","min-height: var(--n-height);"),P("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),P("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[P("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[P("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[P("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),y("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[y("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[P("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),P("render-label",`
 color: var(--n-text-color);
 `)]),He("disabled",[ae("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),te("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),te("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),te("disabled","cursor: not-allowed;",[P("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),P("render-label",`
 color: var(--n-text-color-disabled);
 `)]),y("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[P("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),P("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>te(`${e}-status`,[P("state-border",`border: var(--n-border-${e});`),He("disabled",[ae("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),te("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),te("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[P("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),en=Ke({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const v=b(null),g=b(null),s=b(null),h=b(null),S=b(null),T=b(null),r=b(null),M=b(null),p=b(null),R=b(null),A=b(!1),B=b(!1),_=b(!1),m=Te("InternalSelection","-internal-selection",Zt,Tt,e,ne(e,"clsPrefix")),C=$(()=>e.clearable&&!e.disabled&&(_.value||e.active)),E=$(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),O=$(()=>{const n=e.selectedOption;if(!!n)return n[e.labelField]}),x=$(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function D(){var n;const{value:l}=v;if(l){const{value:w}=g;w&&(w.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=p.value)===null||n===void 0||n.sync()))}}function V(){const{value:n}=R;n&&(n.style.display="none")}function W(){const{value:n}=R;n&&(n.style.display="inline-block")}Fe(ne(e,"active"),n=>{n||V()}),Fe(ne(e,"pattern"),()=>{e.multiple&&Ze(D)});function F(n){const{onFocus:l}=e;l&&l(n)}function z(n){const{onBlur:l}=e;l&&l(n)}function L(n){const{onDeleteOption:l}=e;l&&l(n)}function oe(n){const{onClear:l}=e;l&&l(n)}function U(n){const{onPatternInput:l}=e;l&&l(n)}function Q(n){var l;(!n.relatedTarget||!(!((l=s.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&F(n)}function k(n){var l;!((l=s.value)===null||l===void 0)&&l.contains(n.relatedTarget)||z(n)}function le(n){oe(n)}function se(){_.value=!0}function ue(){_.value=!1}function X(n){!e.active||!e.filterable||n.target!==g.value&&n.preventDefault()}function de(n){L(n)}function Z(n){if(n.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&de(l[l.length-1])}}const Y=b(!1);let K=null;function ce(n){const{value:l}=v;if(l){const w=n.target.value;l.textContent=w,D()}e.ignoreComposition&&Y.value?K=n:U(n)}function Me(){Y.value=!0}function Re(){Y.value=!1,e.ignoreComposition&&U(K),K=null}function _e(n){var l;B.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function Pe(n){var l;B.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function fe(){var n,l;if(e.filterable)B.value=!1,(n=T.value)===null||n===void 0||n.blur(),(l=g.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:w}=h;w==null||w.blur()}else{const{value:w}=S;w==null||w.blur()}}function he(){var n,l,w;e.filterable?(B.value=!1,(n=T.value)===null||n===void 0||n.focus()):e.multiple?(l=h.value)===null||l===void 0||l.focus():(w=S.value)===null||w===void 0||w.focus()}function G(){const{value:n}=g;n&&(W(),n.focus())}function j(){const{value:n}=g;n&&n.blur()}function ve(n){const{value:l}=r;l&&l.setTextContent(`+${n}`)}function ee(){const{value:n}=M;return n}function Ie(){return g.value}let re=null;function ie(){re!==null&&window.clearTimeout(re)}function Be(){e.disabled||e.active||(ie(),re=window.setTimeout(()=>{x.value&&(A.value=!0)},100))}function Ae(){ie()}function $e(n){n||(ie(),A.value=!1)}Fe(x,n=>{n||(A.value=!1)}),Xe(()=>{St(()=>{const n=T.value;!n||(n.tabIndex=e.disabled||B.value?-1:0)})}),Kt(s,e.onResize);const{inlineThemeDisabled:be}=e,ge=$(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:w,color:pe,placeholderColor:ze,textColor:ke,paddingSingle:Ee,paddingMultiple:De,caretColor:me,colorDisabled:we,textColorDisabled:ye,placeholderColorDisabled:We,colorActive:Ve,boxShadowFocus:xe,boxShadowActive:q,boxShadowHover:t,border:o,borderFocus:a,borderHover:f,borderActive:u,arrowColor:c,arrowColorDisabled:d,loadingColor:I,colorActiveWarning:Ce,boxShadowFocusWarning:Le,boxShadowActiveWarning:nt,boxShadowHoverWarning:ot,borderWarning:lt,borderFocusWarning:rt,borderHoverWarning:it,borderActiveWarning:at,colorActiveError:st,boxShadowFocusError:ut,boxShadowActiveError:dt,boxShadowHoverError:ct,borderError:ft,borderFocusError:ht,borderHoverError:vt,borderActiveError:bt,clearColor:gt,clearColorHover:pt,clearColorPressed:mt,clearSize:wt,arrowSize:yt,[Ge("height",n)]:xt,[Ge("fontSize",n)]:Ct}}=m.value;return{"--n-bezier":l,"--n-border":o,"--n-border-active":u,"--n-border-focus":a,"--n-border-hover":f,"--n-border-radius":w,"--n-box-shadow-active":q,"--n-box-shadow-focus":xe,"--n-box-shadow-hover":t,"--n-caret-color":me,"--n-color":pe,"--n-color-active":Ve,"--n-color-disabled":we,"--n-font-size":Ct,"--n-height":xt,"--n-padding-single":Ee,"--n-padding-multiple":De,"--n-placeholder-color":ze,"--n-placeholder-color-disabled":We,"--n-text-color":ke,"--n-text-color-disabled":ye,"--n-arrow-color":c,"--n-arrow-color-disabled":d,"--n-loading-color":I,"--n-color-active-warning":Ce,"--n-box-shadow-focus-warning":Le,"--n-box-shadow-active-warning":nt,"--n-box-shadow-hover-warning":ot,"--n-border-warning":lt,"--n-border-focus-warning":rt,"--n-border-hover-warning":it,"--n-border-active-warning":at,"--n-color-active-error":st,"--n-box-shadow-focus-error":ut,"--n-box-shadow-active-error":dt,"--n-box-shadow-hover-error":ct,"--n-border-error":ft,"--n-border-focus-error":ht,"--n-border-hover-error":vt,"--n-border-active-error":bt,"--n-clear-size":wt,"--n-clear-color":gt,"--n-clear-color-hover":pt,"--n-clear-color-pressed":mt,"--n-arrow-size":yt}}),H=be?et("internal-selection",$(()=>e.size[0]),ge,e):void 0;return{mergedTheme:m,mergedClearable:C,patternInputFocused:B,filterablePlaceholder:E,label:O,selected:x,showTagsPanel:A,isComposing:Y,counterRef:r,counterWrapperRef:M,patternInputMirrorRef:v,patternInputRef:g,selfRef:s,multipleElRef:h,singleElRef:S,patternInputWrapperRef:T,overflowRef:p,inputTagElRef:R,handleMouseDown:X,handleFocusin:Q,handleClear:le,handleMouseEnter:se,handleMouseLeave:ue,handleDeleteOption:de,handlePatternKeyDown:Z,handlePatternInputInput:ce,handlePatternInputBlur:Pe,handlePatternInputFocus:_e,handleMouseEnterCounter:Be,handleMouseLeaveCounter:Ae,handleFocusout:k,handleCompositionEnd:Re,handleCompositionStart:Me,onPopoverUpdateShow:$e,focus:he,focusInput:G,blur:fe,blurInput:j,updateCounter:ve,getCounter:ee,getTail:Ie,renderLabel:e.renderLabel,cssVars:be?void 0:ge,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{status:e,multiple:v,size:g,disabled:s,filterable:h,maxTagCount:S,bordered:T,clsPrefix:r,onRender:M,renderTag:p,renderLabel:R}=this;M==null||M();const A=S==="responsive",B=typeof S=="number",_=A||B,m=i(Dt,null,{default:()=>i(Nt,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,O;return(O=(E=this.$slots).arrow)===null||O===void 0?void 0:O.call(E)}})});let C;if(v){const{labelField:E}=this,O=k=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:k.value},p?p({option:k,handleClose:()=>this.handleDeleteOption(k)}):i(je,{size:g,closable:!k.disabled,disabled:s,onClose:()=>this.handleDeleteOption(k),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>R?R(k,!0):Oe(k[E],k,!0)})),x=()=>(B?this.selectedOptions.slice(0,S):this.selectedOptions).map(O),D=h?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:s,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,V=A?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(je,{size:g,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:s})):void 0;let W;if(B){const k=this.selectedOptions.length-S;k>0&&(W=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(je,{size:g,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:s},{default:()=>`+${k}`})))}const F=A?h?i(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:x,counter:V,tail:()=>D}):i(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:x,counter:V}):B?x().concat(W):x(),z=_?()=>i("div",{class:`${r}-base-selection-popover`},A?x():this.selectedOptions.map(O)):void 0,L=_?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,U=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,Q=h?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},F,A?null:D,m):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:s?void 0:0},F,m);C=i(Mt,null,_?i(Ut,Object.assign({},L,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Q,default:z}):Q,U)}else if(h){const E=this.pattern||this.isComposing,O=this.active?!E:!this.selected,x=this.active?!1:this.selected;C=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:s,disabled:s,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),x?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},p?p({option:this.selectedOption,handleClose:()=>{}}):R?R(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,O?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else C=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:Qt(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},p?p({option:this.selectedOption,handleClose:()=>{}}):R?R(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),m);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},C,T?i("div",{class:`${r}-base-selection__border`}):null,T?i("div",{class:`${r}-base-selection__state-border`}):null)}});function Se(e){return e.type==="group"}function tt(e){return e.type==="ignored"}function Ne(e,v){try{return!!(1+v.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function tn(e,v){return{getIsGroup:Se,getIgnored:tt,getKey(s){return Se(s)?s.name||s.key||"key-required":s[e]},getChildren(s){return s[v]}}}function nn(e,v,g,s){if(!v)return e;function h(S){if(!Array.isArray(S))return[];const T=[];for(const r of S)if(Se(r)){const M=h(r[s]);M.length&&T.push(Object.assign({},r,{[s]:M}))}else{if(tt(r))continue;v(g,r)&&T.push(r)}return T}return h(e)}function on(e,v,g){const s=new Map;return e.forEach(h=>{Se(h)?h[g].forEach(S=>{s.set(S[v],S)}):s.set(h[v],h)}),s}const ln=ae([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[At({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),rn=Object.assign(Object.assign({},Te.props),{to:Ue.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),On=Ke({name:"Select",props:rn,setup(e){const{mergedClsPrefixRef:v,mergedBorderedRef:g,namespaceRef:s,inlineThemeDisabled:h}=Rt(e),S=Te("Select","-select",ln,_t,e,v),T=b(e.defaultValue),r=ne(e,"value"),M=qe(r,T),p=b(!1),R=b(""),A=$(()=>{const{valueField:t,childrenField:o}=e,a=tn(t,o);return kt(k.value,a)}),B=$(()=>on(U.value,e.valueField,e.childrenField)),_=b(!1),m=qe(ne(e,"show"),_),C=b(null),E=b(null),O=b(null),{localeRef:x}=Et("Select"),D=$(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:x.value.placeholder}),V=Wt(e,["items","options"]),W=[],F=b([]),z=b([]),L=b(new Map),oe=$(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:a}=e;return f=>({[o]:String(f),[a]:f})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),U=$(()=>z.value.concat(F.value).concat(V.value)),Q=$(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:a}=e;return(f,u)=>{if(!u)return!1;const c=u[o];if(typeof c=="string")return Ne(f,c);const d=u[a];return typeof d=="string"?Ne(f,d):typeof d=="number"?Ne(f,String(d)):!1}}),k=$(()=>{if(e.remote)return V.value;{const{value:t}=U,{value:o}=R;return!o.length||!e.filterable?t:nn(t,Q.value,o,e.childrenField)}});function le(t){const o=e.remote,{value:a}=L,{value:f}=B,{value:u}=oe,c=[];return t.forEach(d=>{if(f.has(d))c.push(f.get(d));else if(o&&a.has(d))c.push(a.get(d));else if(u){const I=u(d);I&&c.push(I)}}),c}const se=$(()=>{if(e.multiple){const{value:t}=M;return Array.isArray(t)?le(t):[]}return null}),ue=$(()=>{const{value:t}=M;return!e.multiple&&!Array.isArray(t)?t===null?null:le([t])[0]||null:null}),X=Lt(e),{mergedSizeRef:de,mergedDisabledRef:Z,mergedStatusRef:Y}=X;function K(t,o){const{onChange:a,"onUpdate:value":f,onUpdateValue:u}=e,{nTriggerFormChange:c,nTriggerFormInput:d}=X;a&&N(a,t,o),u&&N(u,t,o),f&&N(f,t,o),T.value=t,c(),d()}function ce(t){const{onBlur:o}=e,{nTriggerFormBlur:a}=X;o&&N(o,t),a()}function Me(){const{onClear:t}=e;t&&N(t)}function Re(t){const{onFocus:o,showOnFocus:a}=e,{nTriggerFormFocus:f}=X;o&&N(o,t),f(),a&&G()}function _e(t){const{onSearch:o}=e;o&&N(o,t)}function Pe(t){const{onScroll:o}=e;o&&N(o,t)}function fe(){var t;const{remote:o,multiple:a}=e;if(o){const{value:f}=L;if(a){const{valueField:u}=e;(t=se.value)===null||t===void 0||t.forEach(c=>{f.set(c[u],c)})}else{const u=ue.value;u&&f.set(u[e.valueField],u)}}}function he(t){const{onUpdateShow:o,"onUpdate:show":a}=e;o&&N(o,t),a&&N(a,t),_.value=t}function G(){Z.value||(he(!0),_.value=!0,e.filterable&&ye())}function j(){he(!1)}function ve(){R.value="",z.value=W}const ee=b(!1);function Ie(){e.filterable&&(ee.value=!0)}function re(){e.filterable&&(ee.value=!1,m.value||ve())}function ie(){Z.value||(m.value?e.filterable?ye():j():G())}function Be(t){var o,a;!((a=(o=O.value)===null||o===void 0?void 0:o.selfRef)===null||a===void 0)&&a.contains(t.relatedTarget)||(p.value=!1,ce(t),j())}function Ae(t){Re(t),p.value=!0}function $e(t){p.value=!0}function be(t){var o;!((o=C.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(p.value=!1,ce(t),j())}function ge(){var t;(t=C.value)===null||t===void 0||t.focus(),j()}function H(t){var o;m.value&&(!((o=C.value)===null||o===void 0)&&o.$el.contains(Vt(t))||j())}function n(t){if(!Array.isArray(t))return[];if(oe.value)return Array.from(t);{const{remote:o}=e,{value:a}=B;if(o){const{value:f}=L;return t.filter(u=>a.has(u)||f.has(u))}else return t.filter(f=>a.has(f))}}function l(t){w(t.rawNode)}function w(t){if(Z.value)return;const{tag:o,remote:a,clearFilterAfterSelect:f,valueField:u}=e;if(o&&!a){const{value:c}=z,d=c[0]||null;if(d){const I=F.value;I.length?I.push(d):F.value=[d],z.value=W}}if(a&&L.value.set(t[u],t),e.multiple){const c=n(M.value),d=c.findIndex(I=>I===t[u]);if(~d){if(c.splice(d,1),o&&!a){const I=pe(t[u]);~I&&(F.value.splice(I,1),f&&(R.value=""))}}else c.push(t[u]),f&&(R.value="");K(c,le(c))}else{if(o&&!a){const c=pe(t[u]);~c?F.value=[F.value[c]]:F.value=W}we(),j(),K(t[u],t)}}function pe(t){return F.value.findIndex(a=>a[e.valueField]===t)}function ze(t){m.value||G();const{value:o}=t.target;R.value=o;const{tag:a,remote:f}=e;if(_e(o),a&&!f){if(!o){z.value=W;return}const{onCreate:u}=e,c=u?u(o):{[e.labelField]:o,[e.valueField]:o},{valueField:d}=e;V.value.some(I=>I[d]===c[d])||F.value.some(I=>I[d]===c[d])?z.value=W:z.value=[c]}}function ke(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&j(),Me(),o?K([],[]):K(null,null)}function Ee(t){!Ye(t,"action")&&!Ye(t,"empty")&&t.preventDefault()}function De(t){Pe(t)}function me(t){var o,a,f,u,c;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=C.value)===null||o===void 0)&&o.isComposing)){if(m.value){const d=(a=O.value)===null||a===void 0?void 0:a.getPendingTmNode();d?l(d):e.filterable||(j(),we())}else if(G(),e.tag&&ee.value){const d=z.value[0];if(d){const I=d[e.valueField],{value:Ce}=M;e.multiple&&Array.isArray(Ce)&&Ce.some(Le=>Le===I)||w(d)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;m.value&&((f=O.value)===null||f===void 0||f.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;m.value?(u=O.value)===null||u===void 0||u.next():G();break;case"Escape":m.value&&(qt(t),j()),(c=C.value)===null||c===void 0||c.focus();break}}function we(){var t;(t=C.value)===null||t===void 0||t.focus()}function ye(){var t;(t=C.value)===null||t===void 0||t.focusInput()}function We(){var t;!m.value||(t=E.value)===null||t===void 0||t.syncPosition()}fe(),Fe(ne(e,"options"),fe);const Ve={focus:()=>{var t;(t=C.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=C.value)===null||t===void 0||t.blur()}},xe=$(()=>{const{self:{menuBoxShadow:t}}=S.value;return{"--n-menu-box-shadow":t}}),q=h?et("select",void 0,xe,e):void 0;return Object.assign(Object.assign({},Ve),{mergedStatus:Y,mergedClsPrefix:v,mergedBordered:g,namespace:s,treeMate:A,isMounted:jt(),triggerRef:C,menuRef:O,pattern:R,uncontrolledShow:_,mergedShow:m,adjustedTo:Ue(e),uncontrolledValue:T,mergedValue:M,followerRef:E,localizedPlaceholder:D,selectedOption:ue,selectedOptions:se,mergedSize:de,mergedDisabled:Z,focused:p,activeWithoutMenuOpen:ee,inlineThemeDisabled:h,onTriggerInputFocus:Ie,onTriggerInputBlur:re,handleTriggerOrMenuResize:We,handleMenuFocus:$e,handleMenuBlur:be,handleMenuTabOut:ge,handleTriggerClick:ie,handleToggle:l,handleDeleteOption:w,handlePatternInput:ze,handleClear:ke,handleTriggerBlur:Be,handleTriggerFocus:Ae,handleKeydown:me,handleMenuAfterLeave:ve,handleMenuClickOutside:H,handleMenuScroll:De,handleMenuKeydown:me,handleMenuMousedown:Ee,mergedTheme:S,cssVars:h?void 0:xe,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(Yt,null,{default:()=>[i(Gt,null,{default:()=>i(en,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,v;return[(v=(e=this.$slots).arrow)===null||v===void 0?void 0:v.call(e)]}})}),i(Jt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ue.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(Pt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,v,g;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),It(i(Ht,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(v=this.menuProps)===null||v===void 0?void 0:v.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(g=this.menuProps)===null||g===void 0?void 0:g.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var s,h;return[(h=(s=this.$slots).empty)===null||h===void 0?void 0:h.call(s)]},action:()=>{var s,h;return[(h=(s=this.$slots).action)===null||h===void 0?void 0:h.call(s)]}}),this.displayDirective==="show"?[[Bt,this.mergedShow],[Je,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Je,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{On as _,tn as c};
