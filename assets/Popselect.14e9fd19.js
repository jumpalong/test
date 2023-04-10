import{aD as le,db as ee,b3 as re,f as C,j as f,m as W,dc as J,aC as D,bb as se,x as Ae,b9 as Ve,c as k,d as T,a as R,b as z,e as Ke,bh as De,h as I,at as S,dd as Ee,ao as j,n as w,av as H,aJ as U,b0 as He,o as B,aG as E,p as G,de as Ue,q as ae,v as Ge,au as qe,aH as We,w as Je,l as Qe,u as Xe,df as de,bA as Ye,r as L,bj as Ze,bT as ce,bk as en,bl as ne}from"./index.4d15edfb.js";import{a as nn,h as q,c as on}from"./create.2deeaf6a.js";import{F as tn}from"./Checkmark.5ee32de7.js";import{V as ln}from"./Tag.7562c925.js";import{_ as rn}from"./Empty.1891ae31.js";import{c as sn}from"./create-ref-setter.fe4a2903.js";function $(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(l=>{l&&l(o)})}}function an(e,t){t&&(le(()=>{const{value:o}=e;o&&ee.registerHandler(o,t)}),re(()=>{const{value:o}=e;o&&ee.unregisterHandler(o)}))}const dn=C({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function cn(e,t){return f(Ve,{name:"fade-in-scale-up-transition"},{default:()=>e?f(Ae,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(tn)}):null})}const oe=C({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:l,valueSetRef:a,renderLabelRef:c,renderOptionRef:r,labelFieldRef:s,valueFieldRef:h,showCheckmarkRef:b,nodePropsRef:x,handleOptionClick:M,handleOptionMouseEnter:u}=W(J),y=D(()=>{const{value:v}=o;return v?e.tmNode.key===v.key:!1});function d(v){const{tmNode:p}=e;p.disabled||M(v,p)}function g(v){const{tmNode:p}=e;p.disabled||u(v,p)}function P(v){const{tmNode:p}=e,{value:O}=y;p.disabled||O||u(v,p)}return{multiple:l,isGrouped:D(()=>{const{tmNode:v}=e,{parent:p}=v;return p&&p.rawNode.type==="group"}),showCheckmark:b,nodeProps:x,isPending:y,isSelected:D(()=>{const{value:v}=t,{value:p}=l;if(v===null)return!1;const O=e.tmNode.rawNode[h.value];if(p){const{value:V}=a;return V.has(O)}else return v===O}),labelField:s,renderLabel:c,renderOption:r,handleMouseMove:P,handleMouseEnter:g,handleClick:d}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:l,isGrouped:a,showCheckmark:c,nodeProps:r,renderOption:s,renderLabel:h,handleClick:b,handleMouseEnter:x,handleMouseMove:M}=this,u=cn(o,e),y=h?[h(t,o),c&&u]:[se(t[this.labelField],t,o),c&&u],d=r==null?void 0:r(t),g=f("div",Object.assign({},d,{class:[`${e}-base-select-option`,t.class,d==null?void 0:d.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:c}],style:[(d==null?void 0:d.style)||"",t.style||""],onClick:$([b,d==null?void 0:d.onClick]),onMouseenter:$([x,d==null?void 0:d.onMouseenter]),onMousemove:$([M,d==null?void 0:d.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},y));return t.render?t.render({node:g,option:t,selected:o}):s?s({node:g,option:t,selected:o}):g}}),te=C({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:l}=W(J);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:l,tmNode:{rawNode:a}}=this,c=l==null?void 0:l(a),r=t?t(a,!1):se(a[this.labelField],a,!1),s=f("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),r);return a.render?a.render({node:s,option:a}):o?o({node:s,option:a,selected:!1}):s}}),un=k("base-select-menu",`
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
 `,[De({enterScale:"0.5"})])])]),fn=C({name:"InternalSelectMenu",props:Object.assign(Object.assign({},I.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=I("InternalSelectMenu","-internal-select-menu",un,Ee,e,S(e,"clsPrefix")),o=j(null),l=j(null),a=j(null),c=w(()=>e.treeMate.getFlattenedNodes()),r=w(()=>nn(c.value)),s=j(null);function h(){const{treeMate:n}=e;let i=null;const{value:m}=e;m===null?i=n.getFirstAvailableNode():(e.multiple?i=n.getNode((m||[])[(m||[]).length-1]):i=n.getNode(m),(!i||i.disabled)&&(i=n.getFirstAvailableNode())),_(i||null)}function b(){const{value:n}=s;n&&!e.treeMate.getNode(n.key)&&(s.value=null)}let x;H(()=>e.show,n=>{n?x=H(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?h():b(),U(X)):b()},{immediate:!0}):x==null||x()},{immediate:!0}),re(()=>{x==null||x()});const M=w(()=>He(t.value.self[B("optionHeight",e.size)])),u=w(()=>E(t.value.self[B("padding",e.size)])),y=w(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),d=w(()=>{const n=c.value;return n&&n.length===0});function g(n){const{onToggle:i}=e;i&&i(n)}function P(n){const{onScroll:i}=e;i&&i(n)}function v(n){var i;(i=a.value)===null||i===void 0||i.sync(),P(n)}function p(){var n;(n=a.value)===null||n===void 0||n.sync()}function O(){const{value:n}=s;return n||null}function V(n,i){i.disabled||_(i,!1)}function pe(n,i){i.disabled||g(i)}function ve(n){var i;q(n,"action")||(i=e.onKeyup)===null||i===void 0||i.call(e,n)}function he(n){var i;q(n,"action")||(i=e.onKeydown)===null||i===void 0||i.call(e,n)}function ge(n){var i;(i=e.onMousedown)===null||i===void 0||i.call(e,n),!e.focusable&&n.preventDefault()}function me(){const{value:n}=s;n&&_(n.getNext({loop:!0}),!0)}function be(){const{value:n}=s;n&&_(n.getPrev({loop:!0}),!0)}function _(n,i=!1){s.value=n,i&&X()}function X(){var n,i;const m=s.value;if(!m)return;const F=r.value(m.key);F!==null&&(e.virtualScroll?(n=l.value)===null||n===void 0||n.scrollTo({index:F}):(i=a.value)===null||i===void 0||i.scrollTo({index:F,elSize:M.value}))}function ye(n){var i,m;!((i=o.value)===null||i===void 0)&&i.contains(n.target)&&((m=e.onFocus)===null||m===void 0||m.call(e,n))}function xe(n){var i,m;!((i=o.value)===null||i===void 0)&&i.contains(n.relatedTarget)||(m=e.onBlur)===null||m===void 0||m.call(e,n)}G(J,{handleOptionMouseEnter:V,handleOptionClick:pe,valueSetRef:y,pendingTmNodeRef:s,nodePropsRef:S(e,"nodeProps"),showCheckmarkRef:S(e,"showCheckmark"),multipleRef:S(e,"multiple"),valueRef:S(e,"value"),renderLabelRef:S(e,"renderLabel"),renderOptionRef:S(e,"renderOption"),labelFieldRef:S(e,"labelField"),valueFieldRef:S(e,"valueField")}),G(Ue,o),le(()=>{const{value:n}=a;n&&n.sync()});const Y=w(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:i},self:{height:m,borderRadius:F,color:Pe,groupHeaderTextColor:Se,actionDividerColor:we,optionTextColorPressed:ke,optionTextColor:Re,optionTextColorDisabled:Oe,optionTextColorActive:Ne,optionOpacityDisabled:Ce,optionCheckColor:_e,actionTextColor:Fe,optionColorPending:Te,optionColorActive:ze,loadingColor:Be,loadingSize:Le,optionColorActivePending:je,[B("optionFontSize",n)]:$e,[B("optionHeight",n)]:Ie,[B("optionPadding",n)]:K}}=t.value;return{"--n-height":m,"--n-action-divider-color":we,"--n-action-text-color":Fe,"--n-bezier":i,"--n-border-radius":F,"--n-color":Pe,"--n-option-font-size":$e,"--n-group-header-text-color":Se,"--n-option-check-color":_e,"--n-option-color-pending":Te,"--n-option-color-active":ze,"--n-option-color-active-pending":je,"--n-option-height":Ie,"--n-option-opacity-disabled":Ce,"--n-option-text-color":Re,"--n-option-text-color-active":Ne,"--n-option-text-color-disabled":Oe,"--n-option-text-color-pressed":ke,"--n-option-padding":K,"--n-option-padding-left":E(K,"left"),"--n-option-padding-right":E(K,"right"),"--n-loading-color":Be,"--n-loading-size":Le}}),{inlineThemeDisabled:Z}=e,N=Z?ae("internal-select-menu",w(()=>e.size[0]),Y,e):void 0,Me={selfRef:o,next:me,prev:be,getPendingTmNode:O};return an(o,e.onResize),Object.assign({mergedTheme:t,virtualListRef:l,scrollbarRef:a,itemSize:M,padding:u,flattenedNodes:c,empty:d,virtualListContainer(){const{value:n}=l;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=l;return n==null?void 0:n.itemsElRef},doScroll:P,handleFocusin:ye,handleFocusout:xe,handleKeyUp:ve,handleKeyDown:he,handleMouseDown:ge,handleVirtualListResize:p,handleVirtualListScroll:v,cssVars:Z?void 0:Y,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},Me)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:l,themeClass:a,onRender:c}=this;return c==null||c(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,a,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${o}-base-select-menu__loading`},f(qe,{clsPrefix:o,strokeWidth:20})):this.empty?f("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Je(e.empty,()=>[f(rn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):f(We,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?f(ln,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:r})=>r.isGroup?f(te,{key:r.key,clsPrefix:o,tmNode:r}):r.ignored?null:f(oe,{clsPrefix:o,key:r.key,tmNode:r})}):f("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(r=>r.isGroup?f(te,{key:r.key,clsPrefix:o,tmNode:r}):f(oe,{clsPrefix:o,key:r.key,tmNode:r})))}),Ge(e.action,r=>r&&[f("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},r),f(dn,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function A(e){return e.type==="group"}function ue(e){return e.type==="ignored"}function Sn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function pn(e,t){return{getIsGroup:A,getIgnored:ue,getKey(l){return A(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[t]}}}function wn(e,t,o,l){if(!t)return e;function a(c){if(!Array.isArray(c))return[];const r=[];for(const s of c)if(A(s)){const h=a(s[l]);h.length&&r.push(Object.assign({},s,{[l]:h}))}else{if(ue(s))continue;t(o,s)&&r.push(s)}return r}return a(e)}function kn(e,t,o){const l=new Map;return e.forEach(a=>{A(a)?a[o].forEach(c=>{l.set(c[t],c)}):l.set(a[t],a)}),l}const fe=Qe("n-popselect"),vn=k("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),Q={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},ie=Ye(Q),hn=C({name:"PopselectPanel",props:Q,setup(e){const t=W(fe),{mergedClsPrefixRef:o,inlineThemeDisabled:l}=Xe(e),a=I("Popselect","-pop-select",vn,de,t.props,o),c=w(()=>on(e.options,pn("value","children")));function r(u,y){const{onUpdateValue:d,"onUpdate:value":g,onChange:P}=e;d&&L(d,u,y),g&&L(g,u,y),P&&L(P,u,y)}function s(u){b(u.key)}function h(u){q(u,"action")||u.preventDefault()}function b(u){const{value:{getNode:y}}=c;if(e.multiple)if(Array.isArray(e.value)){const d=[],g=[];let P=!0;e.value.forEach(v=>{if(v===u){P=!1;return}const p=y(v);p&&(d.push(p.key),g.push(p.rawNode))}),P&&(d.push(u),g.push(y(u).rawNode)),r(d,g)}else{const d=y(u);d&&r([u],[d.rawNode])}else if(e.value===u&&e.cancelable)r(null,null);else{const d=y(u);d&&r(u,d.rawNode);const{"onUpdate:show":g,onUpdateShow:P}=t.props;g&&L(g,!1),P&&L(P,!1),t.setShow(!1)}U(()=>{t.syncPosition()})}H(S(e,"options"),()=>{U(()=>{t.syncPosition()})});const x=w(()=>{const{self:{menuBoxShadow:u}}=a.value;return{"--n-menu-box-shadow":u}}),M=l?ae("select",void 0,x,t.props):void 0;return{mergedTheme:t.mergedThemeRef,mergedClsPrefix:o,treeMate:c,handleToggle:s,handleMenuMousedown:h,cssVars:l?void 0:x,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f(fn,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var t,o;return((o=(t=this.$slots).action)===null||o===void 0?void 0:o.call(t))||[]},empty:()=>{var t,o;return((o=(t=this.$slots).empty)===null||o===void 0?void 0:o.call(t))||[]}})}}),gn=Object.assign(Object.assign(Object.assign(Object.assign({},I.props),ce(ne,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},ne.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),Q),Rn=C({name:"Popselect",props:gn,inheritAttrs:!1,__popover__:!0,setup(e){const t=I("Popselect","-popselect",void 0,de,e),o=j(null);function l(){var r;(r=o.value)===null||r===void 0||r.syncPosition()}function a(r){var s;(s=o.value)===null||s===void 0||s.setShow(r)}return G(fe,{props:e,mergedThemeRef:t,syncPosition:l,setShow:a}),Object.assign(Object.assign({},{syncPosition:l,setShow:a}),{popoverInstRef:o,mergedTheme:t})},render(){const{mergedTheme:e}=this,t={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(o,l,a,c,r)=>{const{$attrs:s}=this;return f(hn,Object.assign({},s,{class:[s.class,o],style:[s.style,a]},Ze(this.$props,ie),{ref:sn(l),onMouseenter:$([c,s.onMouseenter]),onMouseleave:$([r,s.onMouseleave])}),{action:()=>{var h,b;return(b=(h=this.$slots).action)===null||b===void 0?void 0:b.call(h)},empty:()=>{var h,b;return(b=(h=this.$slots).empty)===null||b===void 0?void 0:b.call(h)}})}};return f(en,Object.assign({},ce(this.$props,ie),t,{internalDeactivateImmediately:!0}),{trigger:()=>{var o,l;return(l=(o=this.$slots).default)===null||l===void 0?void 0:l.call(o)}})}});export{fn as N,Rn as _,pn as a,kn as c,wn as f,Sn as p,an as u};
