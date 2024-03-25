import{b as ue,c as p,d as O,e as He,a as te,f as et,g as Te,u as tt,L as b,N as ne,bd as Mt,k as R,H as Fe,ag as Pt,O as _t,R as It,l as qe,h as a,F as Bt,be as zt,T as $t,bf as kt,bg as At}from"./index-DVMYH3P6.js";import{f as Et}from"./fade-in-scale-up.cssr-CUPxiz5B.js";import{W as Dt,a as Ye,g as Vt}from"./Scrollbar-BXVF4b7l.js";import{c as Lt,h as Ge}from"./create-DlBt9mlr.js";import{u as Wt}from"./use-locale-CYSJLCZe.js";import{u as jt}from"./use-compitable-CysNw4x-.js";import{u as Nt,e as Ut,c as N}from"./Button-Czpa3xjC.js";import{u as nt}from"./use-css-vars-class-DpRsL9zm.js";import{u as Kt}from"./use-rtl-CqBkFAUg.js";import{r as Oe}from"./render-BaVY8WQh.js";import{g as Je}from"./index-vZmvdULR.js";import{N as Ht}from"./Input-Bl1B22BO.js";import{_ as Ne}from"./Tag-Cl4r3gCd.js";import{V as Qe}from"./index-B5Gs3CWh.js";import{N as qt,c as Xe}from"./Popover-C3ccDlka.js";import{u as Yt,N as Gt}from"./SelectMenu-P-o4iW_T.js";import{m as Jt}from"./index-DsSU6HIH.js";import{u as Ke,V as Qt,a as Xt,b as Zt}from"./Follower-R8EgPpAd.js";function Ze(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const en=ue([p("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
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
 `,[p("base-loading",`
 color: var(--n-loading-color);
 `),p("base-selection-tags","min-height: var(--n-height);"),O("border, state-border",`
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
 `),O("state-border",`
 z-index: 1;
 border-color: #0000;
 `),p("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[O("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),p("base-selection-overlay",`
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
 `,[O("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),p("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[O("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),p("base-selection-tags",`
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
 `),p("base-selection-label",`
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
 `,[p("base-selection-input",`
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
 `,[O("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),O("render-label",`
 color: var(--n-text-color);
 `)]),He("disabled",[ue("&:hover",[O("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),te("focus",[O("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),te("active",[O("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),p("base-selection-label","background-color: var(--n-color-active);"),p("base-selection-tags","background-color: var(--n-color-active);")])]),te("disabled","cursor: not-allowed;",[O("arrow",`
 color: var(--n-arrow-color-disabled);
 `),p("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[p("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),O("render-label",`
 color: var(--n-text-color-disabled);
 `)]),p("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),p("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),p("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[O("input",`
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
 `),O("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>te(`${e}-status`,[O("state-border",`border: var(--n-border-${e});`),He("disabled",[ue("&:hover",[O("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),te("active",[O("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),p("base-selection-label",`background-color: var(--n-color-active-${e});`),p("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),te("focus",[O("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),p("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),p("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ue("&:last-child","padding-right: 0;"),p("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[O("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),tn=et({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:v,mergedRtlRef:F}=tt(e),u=Kt("InternalSelection",F,v),f=b(null),m=b(null),M=b(null),r=b(null),_=b(null),I=b(null),T=b(null),A=b(null),E=b(null),B=b(null),y=b(!1),g=b(!1),D=b(!1),P=Te("InternalSelection","-internal-selection",en,Mt,e,ne(e,"clsPrefix")),$=R(()=>e.clearable&&!e.disabled&&(D.value||e.active)),V=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),U=R(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),k=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function S(){var n;const{value:l}=f;if(l){const{value:w}=m;w&&(w.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=E.value)===null||n===void 0||n.sync({showAllItemsBeforeCalculate:!1})))}}function z(){const{value:n}=B;n&&(n.style.display="none")}function K(){const{value:n}=B;n&&(n.style.display="inline-block")}Fe(ne(e,"active"),n=>{n||z()}),Fe(ne(e,"pattern"),()=>{e.multiple&&Pt(S)});function J(n){const{onFocus:l}=e;l&&l(n)}function oe(n){const{onBlur:l}=e;l&&l(n)}function le(n){const{onDeleteOption:l}=e;l&&l(n)}function Q(n){const{onClear:l}=e;l&&l(n)}function x(n){const{onPatternInput:l}=e;l&&l(n)}function de(n){var l;(!n.relatedTarget||!(!((l=M.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&J(n)}function ce(n){var l;!((l=M.value)===null||l===void 0)&&l.contains(n.relatedTarget)||oe(n)}function X(n){Q(n)}function Re(){D.value=!0}function Z(){D.value=!1}function Me(n){!e.active||!e.filterable||n.target!==m.value&&n.preventDefault()}function q(n){le(n)}function fe(n){if(n.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&q(l[l.length-1])}}const Y=b(!1);let re=null;function Pe(n){const{value:l}=f;if(l){const w=n.target.value;l.textContent=w,S()}e.ignoreComposition&&Y.value?re=n:x(n)}function _e(){Y.value=!0}function he(){Y.value=!1,e.ignoreComposition&&x(re),re=null}function ve(n){var l;g.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function G(n){var l;g.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function L(){var n,l;if(e.filterable)g.value=!1,(n=I.value)===null||n===void 0||n.blur(),(l=m.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:w}=r;w==null||w.blur()}else{const{value:w}=_;w==null||w.blur()}}function be(){var n,l,w;e.filterable?(g.value=!1,(n=I.value)===null||n===void 0||n.focus()):e.multiple?(l=r.value)===null||l===void 0||l.focus():(w=_.value)===null||w===void 0||w.focus()}function ee(){const{value:n}=m;n&&(K(),n.focus())}function Ie(){const{value:n}=m;n&&n.blur()}function Be(n){const{value:l}=T;l&&l.setTextContent(`+${n}`)}function ze(){const{value:n}=A;return n}function $e(){return m.value}let ie=null;function ae(){ie!==null&&window.clearTimeout(ie)}function ke(){e.active||(ae(),ie=window.setTimeout(()=>{k.value&&(y.value=!0)},100))}function Ae(){ae()}function Ee(n){n||(ae(),y.value=!1)}Fe(k,n=>{n||(y.value=!1)}),_t(()=>{It(()=>{const n=I.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=g.value?-1:0)})}),Yt(M,e.onResize);const{inlineThemeDisabled:ge}=e,se=R(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:w,color:De,placeholderColor:Ve,textColor:pe,paddingSingle:me,paddingMultiple:we,caretColor:Le,colorDisabled:We,textColorDisabled:ye,placeholderColorDisabled:H,colorActive:t,boxShadowFocus:o,boxShadowActive:i,boxShadowHover:h,border:d,borderFocus:s,borderHover:c,borderActive:C,arrowColor:j,arrowColorDisabled:je,loadingColor:lt,colorActiveWarning:rt,boxShadowFocusWarning:it,boxShadowActiveWarning:at,boxShadowHoverWarning:st,borderWarning:ut,borderFocusWarning:dt,borderHoverWarning:ct,borderActiveWarning:ft,colorActiveError:ht,boxShadowFocusError:vt,boxShadowActiveError:bt,boxShadowHoverError:gt,borderError:pt,borderFocusError:mt,borderHoverError:wt,borderActiveError:yt,clearColor:xt,clearColorHover:Ct,clearColorPressed:Ot,clearSize:Ft,arrowSize:Tt,[qe("height",n)]:St,[qe("fontSize",n)]:Rt}}=P.value,xe=Je(me),Ce=Je(we);return{"--n-bezier":l,"--n-border":d,"--n-border-active":C,"--n-border-focus":s,"--n-border-hover":c,"--n-border-radius":w,"--n-box-shadow-active":i,"--n-box-shadow-focus":o,"--n-box-shadow-hover":h,"--n-caret-color":Le,"--n-color":De,"--n-color-active":t,"--n-color-disabled":We,"--n-font-size":Rt,"--n-height":St,"--n-padding-single-top":xe.top,"--n-padding-multiple-top":Ce.top,"--n-padding-single-right":xe.right,"--n-padding-multiple-right":Ce.right,"--n-padding-single-left":xe.left,"--n-padding-multiple-left":Ce.left,"--n-padding-single-bottom":xe.bottom,"--n-padding-multiple-bottom":Ce.bottom,"--n-placeholder-color":Ve,"--n-placeholder-color-disabled":H,"--n-text-color":pe,"--n-text-color-disabled":ye,"--n-arrow-color":j,"--n-arrow-color-disabled":je,"--n-loading-color":lt,"--n-color-active-warning":rt,"--n-box-shadow-focus-warning":it,"--n-box-shadow-active-warning":at,"--n-box-shadow-hover-warning":st,"--n-border-warning":ut,"--n-border-focus-warning":dt,"--n-border-hover-warning":ct,"--n-border-active-warning":ft,"--n-color-active-error":ht,"--n-box-shadow-focus-error":vt,"--n-box-shadow-active-error":bt,"--n-box-shadow-hover-error":gt,"--n-border-error":pt,"--n-border-focus-error":mt,"--n-border-hover-error":wt,"--n-border-active-error":yt,"--n-clear-size":Ft,"--n-clear-color":xt,"--n-clear-color-hover":Ct,"--n-clear-color-pressed":Ot,"--n-arrow-size":Tt}}),W=ge?nt("internal-selection",R(()=>e.size[0]),se,e):void 0;return{mergedTheme:P,mergedClearable:$,mergedClsPrefix:v,rtlEnabled:u,patternInputFocused:g,filterablePlaceholder:V,label:U,selected:k,showTagsPanel:y,isComposing:Y,counterRef:T,counterWrapperRef:A,patternInputMirrorRef:f,patternInputRef:m,selfRef:M,multipleElRef:r,singleElRef:_,patternInputWrapperRef:I,overflowRef:E,inputTagElRef:B,handleMouseDown:Me,handleFocusin:de,handleClear:X,handleMouseEnter:Re,handleMouseLeave:Z,handleDeleteOption:q,handlePatternKeyDown:fe,handlePatternInputInput:Pe,handlePatternInputBlur:G,handlePatternInputFocus:ve,handleMouseEnterCounter:ke,handleMouseLeaveCounter:Ae,handleFocusout:ce,handleCompositionEnd:he,handleCompositionStart:_e,onPopoverUpdateShow:Ee,focus:be,focusInput:ee,blur:L,blurInput:Ie,updateCounter:Be,getCounter:ze,getTail:$e,renderLabel:e.renderLabel,cssVars:ge?void 0:se,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){const{status:e,multiple:v,size:F,disabled:u,filterable:f,maxTagCount:m,bordered:M,clsPrefix:r,ellipsisTagPopoverProps:_,onRender:I,renderTag:T,renderLabel:A}=this;I==null||I();const E=m==="responsive",B=typeof m=="number",y=E||B,g=a(Dt,null,{default:()=>a(Ht,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var P,$;return($=(P=this.$slots).arrow)===null||$===void 0?void 0:$.call(P)}})});let D;if(v){const{labelField:P}=this,$=x=>a("div",{class:`${r}-base-selection-tag-wrapper`,key:x.value},T?T({option:x,handleClose:()=>{this.handleDeleteOption(x)}}):a(Ne,{size:F,closable:!x.disabled,disabled:u,onClose:()=>{this.handleDeleteOption(x)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>A?A(x,!0):Oe(x[P],x,!0)})),V=()=>(B?this.selectedOptions.slice(0,m):this.selectedOptions).map($),U=f?a("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:u,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,k=E?()=>a("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(Ne,{size:F,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:u})):void 0;let S;if(B){const x=this.selectedOptions.length-m;x>0&&(S=a("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},a(Ne,{size:F,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:u},{default:()=>`+${x}`})))}const z=E?f?a(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:V,counter:k,tail:()=>U}):a(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:V,counter:k}):B&&S?V().concat(S):V(),K=y?()=>a("div",{class:`${r}-base-selection-popover`},E?V():this.selectedOptions.map($)):void 0,J=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},_):null,le=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},a("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,Q=f?a("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},z,E?null:U,g):a("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:u?void 0:0},z,g);D=a(Bt,null,y?a(qt,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Q,default:K}):Q,le)}else if(f){const P=this.pattern||this.isComposing,$=this.active?!P:!this.selected,V=this.active?!1:this.selected;D=a("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:Ze(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:u,disabled:u,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),V?a("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},a("div",{class:`${r}-base-selection-overlay__wrapper`},T?T({option:this.selectedOption,handleClose:()=>{}}):A?A(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,$?a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else D=a("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${r}-base-selection-input`,title:Ze(this.label),key:"input"},a("div",{class:`${r}-base-selection-input__content`},T?T({option:this.selectedOption,handleClose:()=>{}}):A?A(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):a("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),g);return a("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},D,M?a("div",{class:`${r}-base-selection__border`}):null,M?a("div",{class:`${r}-base-selection__state-border`}):null)}});function Se(e){return e.type==="group"}function ot(e){return e.type==="ignored"}function Ue(e,v){try{return!!(1+v.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function nn(e,v){return{getIsGroup:Se,getIgnored:ot,getKey(u){return Se(u)?u.name||u.key||"key-required":u[e]},getChildren(u){return u[v]}}}function on(e,v,F,u){if(!v)return e;function f(m){if(!Array.isArray(m))return[];const M=[];for(const r of m)if(Se(r)){const _=f(r[u]);_.length&&M.push(Object.assign({},r,{[u]:_}))}else{if(ot(r))continue;v(F,r)&&M.push(r)}return M}return f(e)}function ln(e,v,F){const u=new Map;return e.forEach(f=>{Se(f)?f[F].forEach(m=>{u.set(m[v],m)}):u.set(f[v],f)}),u}const rn=ue([p("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),p("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Et({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),an=Object.assign(Object.assign({},Te.props),{to:Ke.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Sn=et({name:"Select",props:an,setup(e){const{mergedClsPrefixRef:v,mergedBorderedRef:F,namespaceRef:u,inlineThemeDisabled:f}=tt(e),m=Te("Select","-select",rn,zt,e,v),M=b(e.defaultValue),r=ne(e,"value"),_=Ye(r,M),I=b(!1),T=b(""),A=R(()=>{const{valueField:t,childrenField:o}=e,i=nn(t,o);return Lt(Q.value,i)}),E=R(()=>ln(oe.value,e.valueField,e.childrenField)),B=b(!1),y=Ye(ne(e,"show"),B),g=b(null),D=b(null),P=b(null),{localeRef:$}=Wt("Select"),V=R(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:$.value.placeholder}),U=jt(e,["items","options"]),k=[],S=b([]),z=b([]),K=b(new Map),J=R(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:i}=e;return h=>({[o]:String(h),[i]:h})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),oe=R(()=>z.value.concat(S.value).concat(U.value)),le=R(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:i}=e;return(h,d)=>{if(!d)return!1;const s=d[o];if(typeof s=="string")return Ue(h,s);const c=d[i];return typeof c=="string"?Ue(h,c):typeof c=="number"?Ue(h,String(c)):!1}}),Q=R(()=>{if(e.remote)return U.value;{const{value:t}=oe,{value:o}=T;return!o.length||!e.filterable?t:on(t,le.value,o,e.childrenField)}});function x(t){const o=e.remote,{value:i}=K,{value:h}=E,{value:d}=J,s=[];return t.forEach(c=>{if(h.has(c))s.push(h.get(c));else if(o&&i.has(c))s.push(i.get(c));else if(d){const C=d(c);C&&s.push(C)}}),s}const de=R(()=>{if(e.multiple){const{value:t}=_;return Array.isArray(t)?x(t):[]}return null}),ce=R(()=>{const{value:t}=_;return!e.multiple&&!Array.isArray(t)?t===null?null:x([t])[0]||null:null}),X=Nt(e),{mergedSizeRef:Re,mergedDisabledRef:Z,mergedStatusRef:Me}=X;function q(t,o){const{onChange:i,"onUpdate:value":h,onUpdateValue:d}=e,{nTriggerFormChange:s,nTriggerFormInput:c}=X;i&&N(i,t,o),d&&N(d,t,o),h&&N(h,t,o),M.value=t,s(),c()}function fe(t){const{onBlur:o}=e,{nTriggerFormBlur:i}=X;o&&N(o,t),i()}function Y(){const{onClear:t}=e;t&&N(t)}function re(t){const{onFocus:o,showOnFocus:i}=e,{nTriggerFormFocus:h}=X;o&&N(o,t),h(),i&&G()}function Pe(t){const{onSearch:o}=e;o&&N(o,t)}function _e(t){const{onScroll:o}=e;o&&N(o,t)}function he(){var t;const{remote:o,multiple:i}=e;if(o){const{value:h}=K;if(i){const{valueField:d}=e;(t=de.value)===null||t===void 0||t.forEach(s=>{h.set(s[d],s)})}else{const d=ce.value;d&&h.set(d[e.valueField],d)}}}function ve(t){const{onUpdateShow:o,"onUpdate:show":i}=e;o&&N(o,t),i&&N(i,t),B.value=t}function G(){Z.value||(ve(!0),B.value=!0,e.filterable&&we())}function L(){ve(!1)}function be(){T.value="",z.value=k}const ee=b(!1);function Ie(){e.filterable&&(ee.value=!0)}function Be(){e.filterable&&(ee.value=!1,y.value||be())}function ze(){Z.value||(y.value?e.filterable?we():L():G())}function $e(t){var o,i;!((i=(o=P.value)===null||o===void 0?void 0:o.selfRef)===null||i===void 0)&&i.contains(t.relatedTarget)||(I.value=!1,fe(t),L())}function ie(t){re(t),I.value=!0}function ae(t){I.value=!0}function ke(t){var o;!((o=g.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(I.value=!1,fe(t),L())}function Ae(){var t;(t=g.value)===null||t===void 0||t.focus(),L()}function Ee(t){var o;y.value&&(!((o=g.value)===null||o===void 0)&&o.$el.contains(Vt(t))||L())}function ge(t){if(!Array.isArray(t))return[];if(J.value)return Array.from(t);{const{remote:o}=e,{value:i}=E;if(o){const{value:h}=K;return t.filter(d=>i.has(d)||h.has(d))}else return t.filter(h=>i.has(h))}}function se(t){W(t.rawNode)}function W(t){if(Z.value)return;const{tag:o,remote:i,clearFilterAfterSelect:h,valueField:d}=e;if(o&&!i){const{value:s}=z,c=s[0]||null;if(c){const C=S.value;C.length?C.push(c):S.value=[c],z.value=k}}if(i&&K.value.set(t[d],t),e.multiple){const s=ge(_.value),c=s.findIndex(C=>C===t[d]);if(~c){if(s.splice(c,1),o&&!i){const C=n(t[d]);~C&&(S.value.splice(C,1),h&&(T.value=""))}}else s.push(t[d]),h&&(T.value="");q(s,x(s))}else{if(o&&!i){const s=n(t[d]);~s?S.value=[S.value[s]]:S.value=k}me(),L(),q(t[d],t)}}function n(t){return S.value.findIndex(i=>i[e.valueField]===t)}function l(t){y.value||G();const{value:o}=t.target;T.value=o;const{tag:i,remote:h}=e;if(Pe(o),i&&!h){if(!o){z.value=k;return}const{onCreate:d}=e,s=d?d(o):{[e.labelField]:o,[e.valueField]:o},{valueField:c,labelField:C}=e;U.value.some(j=>j[c]===s[c]||j[C]===s[C])||S.value.some(j=>j[c]===s[c]||j[C]===s[C])?z.value=k:z.value=[s]}}function w(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&L(),Y(),o?q([],[]):q(null,null)}function De(t){!Ge(t,"action")&&!Ge(t,"empty")&&t.preventDefault()}function Ve(t){_e(t)}function pe(t){var o,i,h,d,s;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=g.value)===null||o===void 0)&&o.isComposing)){if(y.value){const c=(i=P.value)===null||i===void 0?void 0:i.getPendingTmNode();c?se(c):e.filterable||(L(),me())}else if(G(),e.tag&&ee.value){const c=z.value[0];if(c){const C=c[e.valueField],{value:j}=_;e.multiple&&Array.isArray(j)&&j.some(je=>je===C)||W(c)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;y.value&&((h=P.value)===null||h===void 0||h.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;y.value?(d=P.value)===null||d===void 0||d.next():G();break;case"Escape":y.value&&(Jt(t),L()),(s=g.value)===null||s===void 0||s.focus();break}}function me(){var t;(t=g.value)===null||t===void 0||t.focus()}function we(){var t;(t=g.value)===null||t===void 0||t.focusInput()}function Le(){var t;y.value&&((t=D.value)===null||t===void 0||t.syncPosition())}he(),Fe(ne(e,"options"),he);const We={focus:()=>{var t;(t=g.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=g.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=g.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=g.value)===null||t===void 0||t.blurInput()}},ye=R(()=>{const{self:{menuBoxShadow:t}}=m.value;return{"--n-menu-box-shadow":t}}),H=f?nt("select",void 0,ye,e):void 0;return Object.assign(Object.assign({},We),{mergedStatus:Me,mergedClsPrefix:v,mergedBordered:F,namespace:u,treeMate:A,isMounted:Ut(),triggerRef:g,menuRef:P,pattern:T,uncontrolledShow:B,mergedShow:y,adjustedTo:Ke(e),uncontrolledValue:M,mergedValue:_,followerRef:D,localizedPlaceholder:V,selectedOption:ce,selectedOptions:de,mergedSize:Re,mergedDisabled:Z,focused:I,activeWithoutMenuOpen:ee,inlineThemeDisabled:f,onTriggerInputFocus:Ie,onTriggerInputBlur:Be,handleTriggerOrMenuResize:Le,handleMenuFocus:ae,handleMenuBlur:ke,handleMenuTabOut:Ae,handleTriggerClick:ze,handleToggle:se,handleDeleteOption:W,handlePatternInput:l,handleClear:w,handleTriggerBlur:$e,handleTriggerFocus:ie,handleKeydown:pe,handleMenuAfterLeave:be,handleMenuClickOutside:Ee,handleMenuScroll:Ve,handleMenuKeydown:pe,handleMenuMousedown:De,mergedTheme:m,cssVars:f?void 0:ye,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Qt,null,{default:()=>[a(Xt,null,{default:()=>a(tn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,v;return[(v=(e=this.$slots).arrow)===null||v===void 0?void 0:v.call(e)]}})}),a(Zt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ke.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a($t,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,v,F;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),kt(a(Gt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(v=this.menuProps)===null||v===void 0?void 0:v.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(F=this.menuProps)===null||F===void 0?void 0:F.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var u,f;return[(f=(u=this.$slots).empty)===null||f===void 0?void 0:f.call(u)]},header:()=>{var u,f;return[(f=(u=this.$slots).header)===null||f===void 0?void 0:f.call(u)]},action:()=>{var u,f;return[(f=(u=this.$slots).action)===null||f===void 0?void 0:f.call(u)]}}),this.displayDirective==="show"?[[At,this.mergedShow],[Xe,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Xe,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Sn as _,nn as c};
