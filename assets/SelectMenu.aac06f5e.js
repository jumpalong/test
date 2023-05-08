import{a4 as Y,O as Z,f as L,h as a,j as ee,U as j,L as Pe,c as m,d as C,a as k,b as O,e as we,g as G,M as h,c4 as Ce,N as B,k as b,af as q,P as Oe,p as U}from"./index.8f62a545.js";import{i as H,e as Te}from"./Follower.7ba57362.js";import{r as ne}from"./render.568a1ab1.js";import{N as _e}from"./Icon.1c3d6ebf.js";import{F as Be}from"./Checkmark.13748f17.js";import{f as Le}from"./fade-in-scale-up.cssr.5ebe4351.js";import{a as $e,h as W}from"./create.2deeaf6a.js";import{d as Ie,a as K}from"./index.62f1e1b0.js";import{c as T}from"./create-key.7b548031.js";import{u as je}from"./use-css-vars-class.1ada0b07.js";import{r as J,N as Ke}from"./Scrollbar.8d5a1903.js";import{r as Ee,d as He,a as De}from"./Loading.0b953150.js";import{V as Ve}from"./VirtualList.429e97d1.js";import{_ as Ae}from"./Empty.81d9c633.js";function E(e){const i=e.filter(t=>t!==void 0);if(i.length!==0)return i.length===1?i[0]:t=>{e.forEach(r=>{r&&r(t)})}}function Ge(e,i){i&&(Y(()=>{const{value:t}=e;t&&J.registerHandler(t,i)}),Z(()=>{const{value:t}=e;t&&J.unregisterHandler(t)}))}const qe=L({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ue(e,i){return a(Pe,{name:"fade-in-scale-up-transition"},{default:()=>e?a(_e,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>a(Be)}):null})}const Q=L({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:t,multipleRef:r,valueSetRef:s,renderLabelRef:c,renderOptionRef:l,labelFieldRef:u,valueFieldRef:S,showCheckmarkRef:R,nodePropsRef:g,handleOptionClick:N,handleOptionMouseEnter:y}=ee(H),F=j(()=>{const{value:v}=t;return v?e.tmNode.key===v.key:!1});function d(v){const{tmNode:p}=e;p.disabled||N(v,p)}function x(v){const{tmNode:p}=e;p.disabled||y(v,p)}function _(v){const{tmNode:p}=e,{value:M}=F;p.disabled||M||y(v,p)}return{multiple:r,isGrouped:j(()=>{const{tmNode:v}=e,{parent:p}=v;return p&&p.rawNode.type==="group"}),showCheckmark:R,nodeProps:g,isPending:F,isSelected:j(()=>{const{value:v}=i,{value:p}=r;if(v===null)return!1;const M=e.tmNode.rawNode[S.value];if(p){const{value:$}=s;return $.has(M)}else return v===M}),labelField:u,renderLabel:c,renderOption:l,handleMouseMove:_,handleMouseEnter:x,handleClick:d}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:t,isPending:r,isGrouped:s,showCheckmark:c,nodeProps:l,renderOption:u,renderLabel:S,handleClick:R,handleMouseEnter:g,handleMouseMove:N}=this,y=Ue(t,e),F=S?[S(i,t),c&&y]:[ne(i[this.labelField],i,t),c&&y],d=l==null?void 0:l(i),x=a("div",Object.assign({},d,{class:[`${e}-base-select-option`,i.class,d==null?void 0:d.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:c}],style:[(d==null?void 0:d.style)||"",i.style||""],onClick:E([R,d==null?void 0:d.onClick]),onMouseenter:E([g,d==null?void 0:d.onMouseenter]),onMousemove:E([N,d==null?void 0:d.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},F));return i.render?i.render({node:x,option:i,selected:t}):u?u({node:x,option:i,selected:t}):x}}),X=L({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:t,nodePropsRef:r}=ee(H);return{labelField:t,nodeProps:r,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:t,nodeProps:r,tmNode:{rawNode:s}}=this,c=r==null?void 0:r(s),l=i?i(s,!1):ne(s[this.labelField],s,!1),u=a("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),l);return s.render?s.render({node:u,option:s}):t?t({node:u,option:s,selected:!1}):u}}),We=m("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[m("scrollbar",`
 max-height: var(--n-height);
 `),m("virtual-list",`
 max-height: var(--n-height);
 `),m("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[C("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),m("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),m("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),C("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),C("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),C("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),m("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),m("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[k("show-checkmark",`
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
 `),k("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),k("pending",[O("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),k("selected",`
 color: var(--n-option-text-color-active);
 `,[O("&::before",`
 background-color: var(--n-option-color-active);
 `),k("pending",[O("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),k("disabled",`
 cursor: not-allowed;
 `,[we("selected",`
 color: var(--n-option-text-color-disabled);
 `),k("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),C("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Le({enterScale:"0.5"})])])]),cn=L({name:"InternalSelectMenu",props:Object.assign(Object.assign({},G.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=G("InternalSelectMenu","-internal-select-menu",We,Ce,e,h(e,"clsPrefix")),t=B(null),r=B(null),s=B(null),c=b(()=>e.treeMate.getFlattenedNodes()),l=b(()=>$e(c.value)),u=B(null);function S(){const{treeMate:n}=e;let o=null;const{value:f}=e;f===null?o=n.getFirstAvailableNode():(e.multiple?o=n.getNode((f||[])[(f||[]).length-1]):o=n.getNode(f),(!o||o.disabled)&&(o=n.getFirstAvailableNode())),P(o||null)}function R(){const{value:n}=u;n&&!e.treeMate.getNode(n.key)&&(u.value=null)}let g;q(()=>e.show,n=>{n?g=q(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():R(),Oe(D)):R()},{immediate:!0}):g==null||g()},{immediate:!0}),Z(()=>{g==null||g()});const N=b(()=>Ie(i.value.self[T("optionHeight",e.size)])),y=b(()=>K(i.value.self[T("padding",e.size)])),F=b(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),d=b(()=>{const n=c.value;return n&&n.length===0});function x(n){const{onToggle:o}=e;o&&o(n)}function _(n){const{onScroll:o}=e;o&&o(n)}function v(n){var o;(o=s.value)===null||o===void 0||o.sync(),_(n)}function p(){var n;(n=s.value)===null||n===void 0||n.sync()}function M(){const{value:n}=u;return n||null}function $(n,o){o.disabled||P(o,!1)}function oe(n,o){o.disabled||x(o)}function te(n){var o;W(n,"action")||(o=e.onKeyup)===null||o===void 0||o.call(e,n)}function ie(n){var o;W(n,"action")||(o=e.onKeydown)===null||o===void 0||o.call(e,n)}function le(n){var o;(o=e.onMousedown)===null||o===void 0||o.call(e,n),!e.focusable&&n.preventDefault()}function re(){const{value:n}=u;n&&P(n.getNext({loop:!0}),!0)}function ae(){const{value:n}=u;n&&P(n.getPrev({loop:!0}),!0)}function P(n,o=!1){u.value=n,o&&D()}function D(){var n,o;const f=u.value;if(!f)return;const w=l.value(f.key);w!==null&&(e.virtualScroll?(n=r.value)===null||n===void 0||n.scrollTo({index:w}):(o=s.value)===null||o===void 0||o.scrollTo({index:w,elSize:N.value}))}function se(n){var o,f;!((o=t.value)===null||o===void 0)&&o.contains(n.target)&&((f=e.onFocus)===null||f===void 0||f.call(e,n))}function de(n){var o,f;!((o=t.value)===null||o===void 0)&&o.contains(n.relatedTarget)||(f=e.onBlur)===null||f===void 0||f.call(e,n)}U(H,{handleOptionMouseEnter:$,handleOptionClick:oe,valueSetRef:F,pendingTmNodeRef:u,nodePropsRef:h(e,"nodeProps"),showCheckmarkRef:h(e,"showCheckmark"),multipleRef:h(e,"multiple"),valueRef:h(e,"value"),renderLabelRef:h(e,"renderLabel"),renderOptionRef:h(e,"renderOption"),labelFieldRef:h(e,"labelField"),valueFieldRef:h(e,"valueField")}),U(Te,t),Y(()=>{const{value:n}=s;n&&n.sync()});const V=b(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:{height:f,borderRadius:w,color:ue,groupHeaderTextColor:fe,actionDividerColor:ve,optionTextColorPressed:pe,optionTextColor:ge,optionTextColorDisabled:he,optionTextColorActive:me,optionOpacityDisabled:be,optionCheckColor:ye,actionTextColor:xe,optionColorPending:ke,optionColorActive:Se,loadingColor:Re,loadingSize:Ne,optionColorActivePending:Fe,[T("optionFontSize",n)]:Me,[T("optionHeight",n)]:ze,[T("optionPadding",n)]:I}}=i.value;return{"--n-height":f,"--n-action-divider-color":ve,"--n-action-text-color":xe,"--n-bezier":o,"--n-border-radius":w,"--n-color":ue,"--n-option-font-size":Me,"--n-group-header-text-color":fe,"--n-option-check-color":ye,"--n-option-color-pending":ke,"--n-option-color-active":Se,"--n-option-color-active-pending":Fe,"--n-option-height":ze,"--n-option-opacity-disabled":be,"--n-option-text-color":ge,"--n-option-text-color-active":me,"--n-option-text-color-disabled":he,"--n-option-text-color-pressed":pe,"--n-option-padding":I,"--n-option-padding-left":K(I,"left"),"--n-option-padding-right":K(I,"right"),"--n-loading-color":Re,"--n-loading-size":Ne}}),{inlineThemeDisabled:A}=e,z=A?je("internal-select-menu",b(()=>e.size[0]),V,e):void 0,ce={selfRef:t,next:re,prev:ae,getPendingTmNode:M};return Ge(t,e.onResize),Object.assign({mergedTheme:i,virtualListRef:r,scrollbarRef:s,itemSize:N,padding:y,flattenedNodes:c,empty:d,virtualListContainer(){const{value:n}=r;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=r;return n==null?void 0:n.itemsElRef},doScroll:_,handleFocusin:se,handleFocusout:de,handleKeyUp:te,handleKeyDown:ie,handleMouseDown:le,handleVirtualListResize:p,handleVirtualListScroll:v,cssVars:A?void 0:V,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},ce)},render(){const{$slots:e,virtualScroll:i,clsPrefix:t,mergedTheme:r,themeClass:s,onRender:c}=this;return c==null||c(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,s,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?a("div",{class:`${t}-base-select-menu__loading`},a(He,{clsPrefix:t,strokeWidth:20})):this.empty?a("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},De(e.empty,()=>[a(Ae,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):a(Ke,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?a(Ve,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?a(X,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:a(Q,{clsPrefix:t,key:l.key,tmNode:l})}):a("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?a(X,{key:l.key,clsPrefix:t,tmNode:l}):a(Q,{clsPrefix:t,key:l.key,tmNode:l})))}),Ee(e.action,l=>l&&[a("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),a(qe,{onFocus:this.onTabOut,key:"focus-detector"})]))}});export{cn as N,E as m,Ge as u};
