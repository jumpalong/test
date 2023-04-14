import{aF as le,dp as ee,b5 as re,f as C,j as f,m as W,dq as J,aE as E,bd as se,x as Ve,bb as Ae,c as k,d as T,a as R,b as z,e as Ke,bj as Ee,h as I,av as P,dr as De,aq as j,n as S,ax as H,aL as U,b2 as He,o as B,aI as D,p as q,ds as Ue,q as ae,v as qe,aw as Ge,aJ as We,w as Je,l as Ye,u as Qe,dt as de,bC as Xe,r as L,bl as Ze,bY as ce,bm as en,bn as ne}from"./index.263e31e4.js";import{a as nn,h as G,c as tn}from"./create.2deeaf6a.js";import{F as on}from"./Checkmark.89141985.js";import{V as ln}from"./VirtualList.7fcaca4f.js";import{_ as rn}from"./Empty.7fea0622.js";import{c as sn}from"./create-ref-setter.fe4a2903.js";function $(e){const o=e.filter(t=>t!==void 0);if(o.length!==0)return o.length===1?o[0]:t=>{e.forEach(l=>{l&&l(t)})}}function an(e,o){o&&(le(()=>{const{value:t}=e;t&&ee.registerHandler(t,o)}),re(()=>{const{value:t}=e;t&&ee.unregisterHandler(t)}))}const dn=C({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function cn(e,o){return f(Ae,{name:"fade-in-scale-up-transition"},{default:()=>e?f(Ve,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>f(on)}):null})}const te=C({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:t,multipleRef:l,valueSetRef:a,renderLabelRef:c,renderOptionRef:r,labelFieldRef:s,valueFieldRef:h,showCheckmarkRef:b,nodePropsRef:x,handleOptionClick:M,handleOptionMouseEnter:u}=W(J),y=E(()=>{const{value:v}=t;return v?e.tmNode.key===v.key:!1});function d(v){const{tmNode:p}=e;p.disabled||M(v,p)}function g(v){const{tmNode:p}=e;p.disabled||u(v,p)}function w(v){const{tmNode:p}=e,{value:O}=y;p.disabled||O||u(v,p)}return{multiple:l,isGrouped:E(()=>{const{tmNode:v}=e,{parent:p}=v;return p&&p.rawNode.type==="group"}),showCheckmark:b,nodeProps:x,isPending:y,isSelected:E(()=>{const{value:v}=o,{value:p}=l;if(v===null)return!1;const O=e.tmNode.rawNode[h.value];if(p){const{value:A}=a;return A.has(O)}else return v===O}),labelField:s,renderLabel:c,renderOption:r,handleMouseMove:w,handleMouseEnter:g,handleClick:d}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:t,isPending:l,isGrouped:a,showCheckmark:c,nodeProps:r,renderOption:s,renderLabel:h,handleClick:b,handleMouseEnter:x,handleMouseMove:M}=this,u=cn(t,e),y=h?[h(o,t),c&&u]:[se(o[this.labelField],o,t),c&&u],d=r==null?void 0:r(o),g=f("div",Object.assign({},d,{class:[`${e}-base-select-option`,o.class,d==null?void 0:d.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:c}],style:[(d==null?void 0:d.style)||"",o.style||""],onClick:$([b,d==null?void 0:d.onClick]),onMouseenter:$([x,d==null?void 0:d.onMouseenter]),onMousemove:$([M,d==null?void 0:d.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},y));return o.render?o.render({node:g,option:o,selected:t}):s?s({node:g,option:o,selected:t}):g}}),oe=C({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:t,nodePropsRef:l}=W(J);return{labelField:t,nodeProps:l,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:t,nodeProps:l,tmNode:{rawNode:a}}=this,c=l==null?void 0:l(a),r=o?o(a,!1):se(a[this.labelField],a,!1),s=f("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),r);return a.render?a.render({node:s,option:a}):t?t({node:s,option:a,selected:!1}):s}}),un=k("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[k("scrollbar",`
 max-height: var(--n-height);
 `),k("virtual-list",`
 max-height: var(--n-height);
 `),k("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),k("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),k("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),T("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),k("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[R("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),R("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),R("pending",[z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),R("selected",`
 color: var(--n-option-text-color-active);
 `,[z("&::before",`
 background-color: var(--n-option-color-active);
 `),R("pending",[z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),R("disabled",`
 cursor: not-allowed;
 `,[Ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),R("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),T("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ee({enterScale:"0.5"})])])]),fn=C({name:"InternalSelectMenu",props:Object.assign(Object.assign({},I.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const o=I("InternalSelectMenu","-internal-select-menu",un,De,e,P(e,"clsPrefix")),t=j(null),l=j(null),a=j(null),c=S(()=>e.treeMate.getFlattenedNodes()),r=S(()=>nn(c.value)),s=j(null);function h(){const{treeMate:n}=e;let i=null;const{value:m}=e;m===null?i=n.getFirstAvailableNode():(e.multiple?i=n.getNode((m||[])[(m||[]).length-1]):i=n.getNode(m),(!i||i.disabled)&&(i=n.getFirstAvailableNode())),F(i||null)}function b(){const{value:n}=s;n&&!e.treeMate.getNode(n.key)&&(s.value=null)}let x;H(()=>e.show,n=>{n?x=H(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?h():b(),U(Q)):b()},{immediate:!0}):x==null||x()},{immediate:!0}),re(()=>{x==null||x()});const M=S(()=>He(o.value.self[B("optionHeight",e.size)])),u=S(()=>D(o.value.self[B("padding",e.size)])),y=S(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),d=S(()=>{const n=c.value;return n&&n.length===0});function g(n){const{onToggle:i}=e;i&&i(n)}function w(n){const{onScroll:i}=e;i&&i(n)}function v(n){var i;(i=a.value)===null||i===void 0||i.sync(),w(n)}function p(){var n;(n=a.value)===null||n===void 0||n.sync()}function O(){const{value:n}=s;return n||null}function A(n,i){i.disabled||F(i,!1)}function pe(n,i){i.disabled||g(i)}function ve(n){var i;G(n,"action")||(i=e.onKeyup)===null||i===void 0||i.call(e,n)}function he(n){var i;G(n,"action")||(i=e.onKeydown)===null||i===void 0||i.call(e,n)}function ge(n){var i;(i=e.onMousedown)===null||i===void 0||i.call(e,n),!e.focusable&&n.preventDefault()}function me(){const{value:n}=s;n&&F(n.getNext({loop:!0}),!0)}function be(){const{value:n}=s;n&&F(n.getPrev({loop:!0}),!0)}function F(n,i=!1){s.value=n,i&&Q()}function Q(){var n,i;const m=s.value;if(!m)return;const _=r.value(m.key);_!==null&&(e.virtualScroll?(n=l.value)===null||n===void 0||n.scrollTo({index:_}):(i=a.value)===null||i===void 0||i.scrollTo({index:_,elSize:M.value}))}function ye(n){var i,m;!((i=t.value)===null||i===void 0)&&i.contains(n.target)&&((m=e.onFocus)===null||m===void 0||m.call(e,n))}function xe(n){var i,m;!((i=t.value)===null||i===void 0)&&i.contains(n.relatedTarget)||(m=e.onBlur)===null||m===void 0||m.call(e,n)}q(J,{handleOptionMouseEnter:A,handleOptionClick:pe,valueSetRef:y,pendingTmNodeRef:s,nodePropsRef:P(e,"nodeProps"),showCheckmarkRef:P(e,"showCheckmark"),multipleRef:P(e,"multiple"),valueRef:P(e,"value"),renderLabelRef:P(e,"renderLabel"),renderOptionRef:P(e,"renderOption"),labelFieldRef:P(e,"labelField"),valueFieldRef:P(e,"valueField")}),q(Ue,t),le(()=>{const{value:n}=a;n&&n.sync()});const X=S(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:i},self:{height:m,borderRadius:_,color:we,groupHeaderTextColor:Pe,actionDividerColor:Se,optionTextColorPressed:ke,optionTextColor:Re,optionTextColorDisabled:Oe,optionTextColorActive:Ne,optionOpacityDisabled:Ce,optionCheckColor:Fe,actionTextColor:_e,optionColorPending:Te,optionColorActive:ze,loadingColor:Be,loadingSize:Le,optionColorActivePending:je,[B("optionFontSize",n)]:$e,[B("optionHeight",n)]:Ie,[B("optionPadding",n)]:K}}=o.value;return{"--n-height":m,"--n-action-divider-color":Se,"--n-action-text-color":_e,"--n-bezier":i,"--n-border-radius":_,"--n-color":we,"--n-option-font-size":$e,"--n-group-header-text-color":Pe,"--n-option-check-color":Fe,"--n-option-color-pending":Te,"--n-option-color-active":ze,"--n-option-color-active-pending":je,"--n-option-height":Ie,"--n-option-opacity-disabled":Ce,"--n-option-text-color":Re,"--n-option-text-color-active":Ne,"--n-option-text-color-disabled":Oe,"--n-option-text-color-pressed":ke,"--n-option-padding":K,"--n-option-padding-left":D(K,"left"),"--n-option-padding-right":D(K,"right"),"--n-loading-color":Be,"--n-loading-size":Le}}),{inlineThemeDisabled:Z}=e,N=Z?ae("internal-select-menu",S(()=>e.size[0]),X,e):void 0,Me={selfRef:t,next:me,prev:be,getPendingTmNode:O};return an(t,e.onResize),Object.assign({mergedTheme:o,virtualListRef:l,scrollbarRef:a,itemSize:M,padding:u,flattenedNodes:c,empty:d,virtualListContainer(){const{value:n}=l;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=l;return n==null?void 0:n.itemsElRef},doScroll:w,handleFocusin:ye,handleFocusout:xe,handleKeyUp:ve,handleKeyDown:he,handleMouseDown:ge,handleVirtualListResize:p,handleVirtualListScroll:v,cssVars:Z?void 0:X,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},Me)},render(){const{$slots:e,virtualScroll:o,clsPrefix:t,mergedTheme:l,themeClass:a,onRender:c}=this;return c==null||c(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,a,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${t}-base-select-menu__loading`},f(Ge,{clsPrefix:t,strokeWidth:20})):this.empty?f("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Je(e.empty,()=>[f(rn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):f(We,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?f(ln,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:r})=>r.isGroup?f(oe,{key:r.key,clsPrefix:t,tmNode:r}):r.ignored?null:f(te,{clsPrefix:t,key:r.key,tmNode:r})}):f("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(r=>r.isGroup?f(oe,{key:r.key,clsPrefix:t,tmNode:r}):f(te,{clsPrefix:t,key:r.key,tmNode:r})))}),qe(e.action,r=>r&&[f("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},r),f(dn,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function V(e){return e.type==="group"}function ue(e){return e.type==="ignored"}function Pn(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function pn(e,o){return{getIsGroup:V,getIgnored:ue,getKey(l){return V(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[o]}}}function Sn(e,o,t,l){if(!o)return e;function a(c){if(!Array.isArray(c))return[];const r=[];for(const s of c)if(V(s)){const h=a(s[l]);h.length&&r.push(Object.assign({},s,{[l]:h}))}else{if(ue(s))continue;o(t,s)&&r.push(s)}return r}return a(e)}function kn(e,o,t){const l=new Map;return e.forEach(a=>{V(a)?a[t].forEach(c=>{l.set(c[o],c)}):l.set(a[o],a)}),l}const fe=Ye("n-popselect"),vn=k("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),Y={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},ie=Xe(Y),hn=C({name:"PopselectPanel",props:Y,setup(e){const o=W(fe),{mergedClsPrefixRef:t,inlineThemeDisabled:l}=Qe(e),a=I("Popselect","-pop-select",vn,de,o.props,t),c=S(()=>tn(e.options,pn("value","children")));function r(u,y){const{onUpdateValue:d,"onUpdate:value":g,onChange:w}=e;d&&L(d,u,y),g&&L(g,u,y),w&&L(w,u,y)}function s(u){b(u.key)}function h(u){G(u,"action")||u.preventDefault()}function b(u){const{value:{getNode:y}}=c;if(e.multiple)if(Array.isArray(e.value)){const d=[],g=[];let w=!0;e.value.forEach(v=>{if(v===u){w=!1;return}const p=y(v);p&&(d.push(p.key),g.push(p.rawNode))}),w&&(d.push(u),g.push(y(u).rawNode)),r(d,g)}else{const d=y(u);d&&r([u],[d.rawNode])}else if(e.value===u&&e.cancelable)r(null,null);else{const d=y(u);d&&r(u,d.rawNode);const{"onUpdate:show":g,onUpdateShow:w}=o.props;g&&L(g,!1),w&&L(w,!1),o.setShow(!1)}U(()=>{o.syncPosition()})}H(P(e,"options"),()=>{U(()=>{o.syncPosition()})});const x=S(()=>{const{self:{menuBoxShadow:u}}=a.value;return{"--n-menu-box-shadow":u}}),M=l?ae("select",void 0,x,o.props):void 0;return{mergedTheme:o.mergedThemeRef,mergedClsPrefix:t,treeMate:c,handleToggle:s,handleMenuMousedown:h,cssVars:l?void 0:x,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f(fn,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var o,t;return((t=(o=this.$slots).action)===null||t===void 0?void 0:t.call(o))||[]},empty:()=>{var o,t;return((t=(o=this.$slots).empty)===null||t===void 0?void 0:t.call(o))||[]}})}}),gn=Object.assign(Object.assign(Object.assign(Object.assign({},I.props),ce(ne,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},ne.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),Y),Rn=C({name:"Popselect",props:gn,inheritAttrs:!1,__popover__:!0,setup(e){const o=I("Popselect","-popselect",void 0,de,e),t=j(null);function l(){var r;(r=t.value)===null||r===void 0||r.syncPosition()}function a(r){var s;(s=t.value)===null||s===void 0||s.setShow(r)}return q(fe,{props:e,mergedThemeRef:o,syncPosition:l,setShow:a}),Object.assign(Object.assign({},{syncPosition:l,setShow:a}),{popoverInstRef:t,mergedTheme:o})},render(){const{mergedTheme:e}=this,o={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(t,l,a,c,r)=>{const{$attrs:s}=this;return f(hn,Object.assign({},s,{class:[s.class,t],style:[s.style,a]},Ze(this.$props,ie),{ref:sn(l),onMouseenter:$([c,s.onMouseenter]),onMouseleave:$([r,s.onMouseleave])}),{action:()=>{var h,b;return(b=(h=this.$slots).action)===null||b===void 0?void 0:b.call(h)},empty:()=>{var h,b;return(b=(h=this.$slots).empty)===null||b===void 0?void 0:b.call(h)}})}};return f(en,Object.assign({},ce(this.$props,ie),o,{internalDeactivateImmediately:!0}),{trigger:()=>{var t,l;return(l=(t=this.$slots).default)===null||l===void 0?void 0:l.call(t)}})}});export{fn as N,Rn as _,pn as a,kn as c,Sn as f,Pn as p,an as u};
