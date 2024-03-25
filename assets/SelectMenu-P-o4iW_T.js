import{O as Z,I as ee,f as B,h as r,j as ne,Q as E,T as Te,c as x,d as z,a as N,b as O,e as _e,g as G,u as Be,N as m,bs as Le,L as _,k as R,H as q,ag as $e,l as T,p as U}from"./index-DVMYH3P6.js";import{i as K,c as Ie}from"./Follower-R8EgPpAd.js";import{r as oe}from"./render-BaVY8WQh.js";import{N as Ee}from"./Icon-DjYnwRew.js";import{F as je}from"./Checkmark-C3ejFAAO.js";import{f as He}from"./fade-in-scale-up.cssr-CUPxiz5B.js";import{u as Ke}from"./use-rtl-CqBkFAUg.js";import{a as De,h as W}from"./create-DlBt9mlr.js";import{d as Ve,g as j}from"./index-vZmvdULR.js";import{u as Ae}from"./use-css-vars-class-DpRsL9zm.js";import{r as Q,N as Ge}from"./Scrollbar-BXVF4b7l.js";import{r as J,h as qe,a as Ue}from"./Button-Czpa3xjC.js";import{V as We}from"./VirtualList-Ds_3EfD8.js";import{_ as Qe}from"./Empty-CBIm7nuM.js";function H(e){const i=e.filter(t=>t!==void 0);if(i.length!==0)return i.length===1?i[0]:t=>{e.forEach(s=>{s&&s(t)})}}function Je(e,i){i&&(Z(()=>{const{value:t}=e;t&&Q.registerHandler(t,i)}),ee(()=>{const{value:t}=e;t&&Q.unregisterHandler(t)}))}const Xe=B({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ye(e,i){return r(Te,{name:"fade-in-scale-up-transition"},{default:()=>e?r(Ee,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>r(je)}):null})}const X=B({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:t,multipleRef:s,valueSetRef:c,renderLabelRef:d,renderOptionRef:l,labelFieldRef:p,valueFieldRef:b,showCheckmarkRef:M,nodePropsRef:g,handleOptionClick:P,handleOptionMouseEnter:y}=ne(K),h=E(()=>{const{value:f}=t;return f?e.tmNode.key===f.key:!1});function a(f){const{tmNode:v}=e;v.disabled||P(f,v)}function k(f){const{tmNode:v}=e;v.disabled||y(f,v)}function L(f){const{tmNode:v}=e,{value:S}=h;v.disabled||S||y(f,v)}return{multiple:s,isGrouped:E(()=>{const{tmNode:f}=e,{parent:v}=f;return v&&v.rawNode.type==="group"}),showCheckmark:M,nodeProps:g,isPending:h,isSelected:E(()=>{const{value:f}=i,{value:v}=s;if(f===null)return!1;const S=e.tmNode.rawNode[b.value];if(v){const{value:$}=c;return $.has(S)}else return f===S}),labelField:p,renderLabel:d,renderOption:l,handleMouseMove:L,handleMouseEnter:k,handleClick:a}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:t,isPending:s,isGrouped:c,showCheckmark:d,nodeProps:l,renderOption:p,renderLabel:b,handleClick:M,handleMouseEnter:g,handleMouseMove:P}=this,y=Ye(t,e),h=b?[b(i,t),d&&y]:[oe(i[this.labelField],i,t),d&&y],a=l==null?void 0:l(i),k=r("div",Object.assign({},a,{class:[`${e}-base-select-option`,i.class,a==null?void 0:a.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:c,[`${e}-base-select-option--pending`]:s,[`${e}-base-select-option--show-checkmark`]:d}],style:[(a==null?void 0:a.style)||"",i.style||""],onClick:H([M,a==null?void 0:a.onClick]),onMouseenter:H([g,a==null?void 0:a.onMouseenter]),onMousemove:H([P,a==null?void 0:a.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},h));return i.render?i.render({node:k,option:i,selected:t}):p?p({node:k,option:i,selected:t}):k}}),Y=B({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:t,nodePropsRef:s}=ne(K);return{labelField:t,nodeProps:s,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:t,nodeProps:s,tmNode:{rawNode:c}}=this,d=s==null?void 0:s(c),l=i?i(c,!1):oe(c[this.labelField],c,!1),p=r("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),l);return c.render?c.render({node:p,option:c}):t?t({node:p,option:c,selected:!1}):p}}),Ze=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[N("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),O("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),O("&:active",`
 color: var(--n-option-text-color-pressed);
 `),N("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),N("pending",[O("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),N("selected",`
 color: var(--n-option-text-color-active);
 `,[O("&::before",`
 background-color: var(--n-option-color-active);
 `),N("pending",[O("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),N("disabled",`
 cursor: not-allowed;
 `,[_e("selected",`
 color: var(--n-option-text-color-disabled);
 `),N("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[He({enterScale:"0.5"})])])]),gn=B({name:"InternalSelectMenu",props:Object.assign(Object.assign({},G.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:t}=Be(e),s=Ke("InternalSelectMenu",t,i),c=G("InternalSelectMenu","-internal-select-menu",Ze,Le,e,m(e,"clsPrefix")),d=_(null),l=_(null),p=_(null),b=R(()=>e.treeMate.getFlattenedNodes()),M=R(()=>De(b.value)),g=_(null);function P(){const{treeMate:n}=e;let o=null;const{value:u}=e;u===null?o=n.getFirstAvailableNode():(e.multiple?o=n.getNode((u||[])[(u||[]).length-1]):o=n.getNode(u),(!o||o.disabled)&&(o=n.getFirstAvailableNode())),C(o||null)}function y(){const{value:n}=g;n&&!e.treeMate.getNode(n.key)&&(g.value=null)}let h;q(()=>e.show,n=>{n?h=q(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?P():y(),$e(D)):y()},{immediate:!0}):h==null||h()},{immediate:!0}),ee(()=>{h==null||h()});const a=R(()=>Ve(c.value.self[T("optionHeight",e.size)])),k=R(()=>j(c.value.self[T("padding",e.size)])),L=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),f=R(()=>{const n=b.value;return n&&n.length===0});function v(n){const{onToggle:o}=e;o&&o(n)}function S(n){const{onScroll:o}=e;o&&o(n)}function $(n){var o;(o=p.value)===null||o===void 0||o.sync(),S(n)}function te(){var n;(n=p.value)===null||n===void 0||n.sync()}function ie(){const{value:n}=g;return n||null}function le(n,o){o.disabled||C(o,!1)}function re(n,o){o.disabled||v(o)}function ae(n){var o;W(n,"action")||(o=e.onKeyup)===null||o===void 0||o.call(e,n)}function se(n){var o;W(n,"action")||(o=e.onKeydown)===null||o===void 0||o.call(e,n)}function de(n){var o;(o=e.onMousedown)===null||o===void 0||o.call(e,n),!e.focusable&&n.preventDefault()}function ce(){const{value:n}=g;n&&C(n.getNext({loop:!0}),!0)}function ue(){const{value:n}=g;n&&C(n.getPrev({loop:!0}),!0)}function C(n,o=!1){g.value=n,o&&D()}function D(){var n,o;const u=g.value;if(!u)return;const w=M.value(u.key);w!==null&&(e.virtualScroll?(n=l.value)===null||n===void 0||n.scrollTo({index:w}):(o=p.value)===null||o===void 0||o.scrollTo({index:w,elSize:a.value}))}function fe(n){var o,u;!((o=d.value)===null||o===void 0)&&o.contains(n.target)&&((u=e.onFocus)===null||u===void 0||u.call(e,n))}function ve(n){var o,u;!((o=d.value)===null||o===void 0)&&o.contains(n.relatedTarget)||(u=e.onBlur)===null||u===void 0||u.call(e,n)}U(K,{handleOptionMouseEnter:le,handleOptionClick:re,valueSetRef:L,pendingTmNodeRef:g,nodePropsRef:m(e,"nodeProps"),showCheckmarkRef:m(e,"showCheckmark"),multipleRef:m(e,"multiple"),valueRef:m(e,"value"),renderLabelRef:m(e,"renderLabel"),renderOptionRef:m(e,"renderOption"),labelFieldRef:m(e,"labelField"),valueFieldRef:m(e,"valueField")}),U(Ie,d),Z(()=>{const{value:n}=p;n&&n.sync()});const V=R(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:{height:u,borderRadius:w,color:ge,groupHeaderTextColor:he,actionDividerColor:me,optionTextColorPressed:be,optionTextColor:ye,optionTextColorDisabled:xe,optionTextColorActive:Re,optionOpacityDisabled:ke,optionCheckColor:Se,actionTextColor:Ne,optionColorPending:Fe,optionColorActive:ze,loadingColor:Me,loadingSize:Pe,optionColorActivePending:Ce,[T("optionFontSize",n)]:we,[T("optionHeight",n)]:Oe,[T("optionPadding",n)]:I}}=c.value;return{"--n-height":u,"--n-action-divider-color":me,"--n-action-text-color":Ne,"--n-bezier":o,"--n-border-radius":w,"--n-color":ge,"--n-option-font-size":we,"--n-group-header-text-color":he,"--n-option-check-color":Se,"--n-option-color-pending":Fe,"--n-option-color-active":ze,"--n-option-color-active-pending":Ce,"--n-option-height":Oe,"--n-option-opacity-disabled":ke,"--n-option-text-color":ye,"--n-option-text-color-active":Re,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":be,"--n-option-padding":I,"--n-option-padding-left":j(I,"left"),"--n-option-padding-right":j(I,"right"),"--n-loading-color":Me,"--n-loading-size":Pe}}),{inlineThemeDisabled:A}=e,F=A?Ae("internal-select-menu",R(()=>e.size[0]),V,e):void 0,pe={selfRef:d,next:ce,prev:ue,getPendingTmNode:ie};return Je(d,e.onResize),Object.assign({mergedTheme:c,mergedClsPrefix:i,rtlEnabled:s,virtualListRef:l,scrollbarRef:p,itemSize:a,padding:k,flattenedNodes:b,empty:f,virtualListContainer(){const{value:n}=l;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=l;return n==null?void 0:n.itemsElRef},doScroll:S,handleFocusin:fe,handleFocusout:ve,handleKeyUp:ae,handleKeyDown:se,handleMouseDown:de,handleVirtualListResize:te,handleVirtualListScroll:$,cssVars:A?void 0:V,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender},pe)},render(){const{$slots:e,virtualScroll:i,clsPrefix:t,mergedTheme:s,themeClass:c,onRender:d}=this;return d==null||d(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,c,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},J(e.header,l=>l&&r("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?r("div",{class:`${t}-base-select-menu__loading`},r(qe,{clsPrefix:t,strokeWidth:20})):this.empty?r("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Ue(e.empty,()=>[r(Qe,{theme:s.peers.Empty,themeOverrides:s.peerOverrides.Empty})])):r(Ge,{ref:"scrollbarRef",theme:s.peers.Scrollbar,themeOverrides:s.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?r(We,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?r(Y,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:r(X,{clsPrefix:t,key:l.key,tmNode:l})}):r("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?r(Y,{key:l.key,clsPrefix:t,tmNode:l}):r(X,{clsPrefix:t,key:l.key,tmNode:l})))}),J(e.action,l=>l&&[r("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),r(Xe,{onFocus:this.onTabOut,key:"focus-detector"})]))}});export{gn as N,H as m,Je as u};
