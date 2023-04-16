import{av as j,aC as ie,U as ke,b8 as Ne,b9 as Pe,ba as Re,aT as W,bb as Ke,aR as V,f as $,j as l,l as de,m as F,bc as ce,n as m,p as H,aJ as J,bd as Ce,be as Ie,bf as _e,bg as Oe,bh as pe,bi as X,bj as De,L as $e,bk as ze,bl as Ae,bm as Te,bn as je,c as N,bo as Fe,b as E,e as le,a as K,d as D,aH as Be,aA as C,u as Me,h as fe,bp as Le,r as te,o as T,q as Ee,bq as He,br as Ue,bs as he}from"./index.d4beb9d4.js";import{N as qe}from"./Icon.7dabd37c.js";import{h as se,c as Ge}from"./create.2deeaf6a.js";function We(e){return o=>{o?e.value=o.$el:e.value=null}}function Ve(e,o,i){if(!o)return e;const r=j(e.value);let t=null;return ie(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Je(e={},o){const i=ke({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==d.key)return;const v=r[y];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},c=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==d.key)return;const v=t[y];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},f=()=>{(o===void 0||o.value)&&(V("keydown",document,n),V("keyup",document,c)),o!==void 0&&ie(o,d=>{d?(V("keydown",document,n),V("keyup",document,c)):(W("keydown",document,n),W("keyup",document,c))})};return Ne()?(Pe(f),Re(()=>{(o===void 0||o.value)&&(W("keydown",document,n),W("keyup",document,c))})):f(),Ke(i)}const Xe=$({name:"ChevronRight",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ve=$({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=de("n-dropdown-menu"),Z=de("n-dropdown"),ue=de("n-dropdown-option");function re(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Ze(e){return e.type==="group"}function be(e){return e.type==="divider"}function Qe(e){return e.type==="render"}const we=$({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=F(Z),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:c,animatedRef:f,mergedShowRef:d,renderLabelRef:y,renderIconRef:v,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:P,nodePropsRef:I,menuPropsRef:B}=o,x=F(ue,null),_=F(ae),U=F(ce),Q=m(()=>e.tmNode.rawNode),q=m(()=>{const{value:s}=S;return re(e.tmNode.rawNode,s)}),Y=m(()=>{const{disabled:s}=e.tmNode;return s}),ee=m(()=>{if(!q.value)return!1;const{key:s,disabled:w}=e.tmNode;if(w)return!1;const{value:R}=i,{value:z}=r,{value:ne}=t,{value:A}=n;return R!==null?A.includes(s):z!==null?A.includes(s)&&A[A.length-1]!==s:ne!==null?A.includes(s):!1}),oe=m(()=>r.value===null&&!f.value),G=Ve(ee,300,oe),M=m(()=>!!(x!=null&&x.enteringSubmenuRef.value)),L=j(!1);H(ue,{enteringSubmenuRef:L});function O(){L.value=!0}function a(){L.value=!1}function b(){const{parentKey:s,tmNode:w}=e;w.disabled||!d.value||(t.value=s,r.value=null,i.value=w.key)}function p(){const{tmNode:s}=e;s.disabled||!d.value||i.value!==s.key&&b()}function u(s){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:w}=s;w&&!se({target:w},"dropdownOption")&&!se({target:w},"scrollbarRail")&&(i.value=null)}function k(){const{value:s}=q,{tmNode:w}=e;!d.value||!s&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:y,renderIcon:v,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:m(()=>G.value&&!M.value),rawNode:Q,hasSubmenu:q,pending:J(()=>{const{value:s}=n,{key:w}=e.tmNode;return s.includes(w)}),childActive:J(()=>{const{value:s}=c,{key:w}=e.tmNode,R=s.findIndex(z=>w===z);return R===-1?!1:R<s.length-1}),active:J(()=>{const{value:s}=c,{key:w}=e.tmNode,R=s.findIndex(z=>w===z);return R===-1?!1:R===s.length-1}),mergedDisabled:Y,renderOption:P,nodeProps:I,handleClick:k,handleMouseMove:p,handleMouseEnter:b,handleMouseLeave:u,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:a}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:c,siblingHasSubmenu:f,renderLabel:d,renderIcon:y,renderOption:v,nodeProps:g,props:S,scrollable:P}=this;let I=null;if(t){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);I=l(me,Object.assign({},U,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),_=l("div",Object.assign({class:[`${n}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),l("div",pe(B,S),[l("div",{class:[`${n}-dropdown-option-body__prefix`,c&&`${n}-dropdown-option-body__prefix--show-icon`]},[y?y(r):X(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(r):X((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),l("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,f&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(qe,null,{default:()=>l(Xe,null)}):null)]),this.hasSubmenu?l(Ce,null,{default:()=>[l(Ie,null,{default:()=>l("div",{class:`${n}-dropdown-offset-container`},l(_e,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>l("div",{class:`${n}-dropdown-menu-wrapper`},i?l(Oe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return v?v({node:_,option:r}):_}}),Ye=$({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=F(ae),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=F(Z);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:c}=this,{rawNode:f}=this.tmNode,d=l("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(f)),l("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},X(f.icon)),l("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(f):X((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),l("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:d,option:f}):d}}),eo=$({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return l($e,null,l(Ye,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:n}=t;return n.show===!1?null:be(n)?l(ve,{clsPrefix:i,key:t.key}):t.isGroup?(De("dropdown","`group` node is not allowed to be put in `group` node."),null):l(we,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),oo=$({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return l("div",o,[e==null?void 0:e()])}}),me=$({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=F(Z);H(ae,{showIconRef:m(()=>{const t=o.value;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:f}=n;return t?t(f):f.icon})}),hasSubmenuRef:m(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>re(d,t));const{rawNode:f}=n;return re(f,t)})})});const r=j(null);return H(ze,null),H(Ae,null),H(ce,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:Qe(n)?l(oo,{tmNode:t,key:t.key}):be(n)?l(ve,{clsPrefix:o,key:t.key}):Ze(n)?l(eo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):l(we,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return l("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?l(je,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Te({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),no=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Fe(),N("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[D("content",`
 padding: var(--n-padding);
 `)])]),to={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ro=Object.keys(he),io=Object.assign(Object.assign(Object.assign({},he),to),fe.props),uo=$({name:"Dropdown",inheritAttrs:!1,props:io,setup(e){const o=j(!1),i=Be(C(e,"show"),o),r=m(()=>{const{keyField:a,childrenField:b}=e;return Ge(e.options,{getKey(p){return p[a]},getDisabled(p){return p.disabled===!0},getIgnored(p){return p.type==="divider"||p.type==="render"},getChildren(p){return p[b]}})}),t=m(()=>r.value.treeNodes),n=j(null),c=j(null),f=j(null),d=m(()=>{var a,b,p;return(p=(b=(a=n.value)!==null&&a!==void 0?a:c.value)!==null&&b!==void 0?b:f.value)!==null&&p!==void 0?p:null}),y=m(()=>r.value.getPath(d.value).keyPath),v=m(()=>r.value.getPath(e.value).keyPath),g=J(()=>e.keyboard&&i.value);Je({keydown:{ArrowUp:{prevent:!0,handler:Y},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Q},Enter:{prevent:!0,handler:oe},Escape:U}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:P}=Me(e),I=fe("Dropdown","-dropdown",no,Le,e,S);H(Z,{labelFieldRef:C(e,"labelField"),childrenFieldRef:C(e,"childrenField"),renderLabelRef:C(e,"renderLabel"),renderIconRef:C(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:c,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:C(e,"animated"),mergedShowRef:i,nodePropsRef:C(e,"nodeProps"),renderOptionRef:C(e,"renderOption"),menuPropsRef:C(e,"menuProps"),doSelect:B,doUpdateShow:x}),ie(i,a=>{!e.animated&&!a&&_()});function B(a,b){const{onSelect:p}=e;p&&te(p,a,b)}function x(a){const{"onUpdate:show":b,onUpdateShow:p}=e;b&&te(b,a),p&&te(p,a),o.value=a}function _(){n.value=null,c.value=null,f.value=null}function U(){x(!1)}function Q(){M("left")}function q(){M("right")}function Y(){M("up")}function ee(){M("down")}function oe(){const a=G();(a==null?void 0:a.isLeaf)&&i.value&&(B(a.key,a.rawNode),x(!1))}function G(){var a;const{value:b}=r,{value:p}=d;return!b||p===null?null:(a=b.getNode(p))!==null&&a!==void 0?a:null}function M(a){const{value:b}=d,{value:{getFirstAvailableNode:p}}=r;let u=null;if(b===null){const k=p();k!==null&&(u=k.key)}else{const k=G();if(k){let s;switch(a){case"down":s=k.getNext();break;case"up":s=k.getPrev();break;case"right":s=k.getChild();break;case"left":s=k.getParent();break}s&&(u=s.key)}}u!==null&&(n.value=null,c.value=u)}const L=m(()=>{const{size:a,inverted:b}=e,{common:{cubicBezierEaseInOut:p},self:u}=I.value,{padding:k,dividerColor:s,borderRadius:w,optionOpacityDisabled:R,[T("optionIconSuffixWidth",a)]:z,[T("optionSuffixWidth",a)]:ne,[T("optionIconPrefixWidth",a)]:A,[T("optionPrefixWidth",a)]:ye,[T("fontSize",a)]:ge,[T("optionHeight",a)]:xe,[T("optionIconSize",a)]:Se}=u,h={"--n-bezier":p,"--n-font-size":ge,"--n-padding":k,"--n-border-radius":w,"--n-option-height":xe,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":z,"--n-option-icon-size":Se,"--n-divider-color":s,"--n-option-opacity-disabled":R};return b?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),O=P?Ee("dropdown",m(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:S,mergedTheme:I,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{!e.animated||_()},doUpdateShow:x,cssVars:P?void 0:L,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(r,t,n,c,f)=>{var d;const{mergedClsPrefix:y,menuProps:v}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(v==null?void 0:v(void 0,this.tmNodes.map(P=>P.rawNode)))||{},S={ref:We(t),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:f};return l(me,pe(this.$attrs,S,g))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Ue,Object.assign({},He(this.$props,ro),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{Xe as C,uo as _,We as c};
