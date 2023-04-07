import{f as re,bM as ve,bN as ge,aF as be,bp as me,bq as ke,n as $,aq as P,aE as pe,b2 as Z,co as W,j as z,bc as Ce,aK as ee,bO as G,df as ye,c as xe,a as M,d as F,e as A,b as U,u as we,h as se,dg as ze,p as Se,av as Te,g as Re,o as m,q as Ie,dh as te,v as oe,bT as Be,l as Me,r as _e}from"./index.70f8884a.js";function le(l){return l&-l}class $e{constructor(n,o){this.l=n,this.min=o;const a=new Array(n+1);for(let r=0;r<n+1;++r)a[r]=0;this.ft=a}add(n,o){if(o===0)return;const{l:a,ft:r}=this;for(n+=1;n<=a;)r[n]+=o,n+=le(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:a,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*a;for(;n>0;)c+=o[n],n-=le(n);return c}getBound(n){let o=0,a=this.l;for(;a>o;){const r=Math.floor((o+a)/2),c=this.sum(r);if(c>n){a=r;continue}else if(c<n){if(o===r)return this.sum(o+1)<=n?o+1:r;o=r}else return r}return o}}let K;function He(){return K===void 0&&("matchMedia"in window?K=window.matchMedia("(pointer:coarse)").matches:K=!1),K}let J;function ne(){return J===void 0&&(J="chrome"in window?window.devicePixelRatio:1),J}const Ee=G(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[G("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[G("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Le=re({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(l){const n=ve();Ee.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:ge,ssr:n}),be(()=>{const{defaultScrollIndex:e,defaultScrollKey:t}=l;e!=null?d({index:e}):t!=null&&d({key:t})});let o=!1,a=!1;me(()=>{if(o=!1,!a){a=!0;return}d({top:y.value,left:R})}),ke(()=>{o=!0,a||(a=!0)});const r=$(()=>{const e=new Map,{keyField:t}=l;return l.items.forEach((s,h)=>{e.set(s[t],h)}),e}),c=P(null),k=P(void 0),b=new Map,p=$(()=>{const{items:e,itemSize:t,keyField:s}=l,h=new $e(e.length,t);return e.forEach((f,v)=>{const u=f[s],g=b.get(u);g!==void 0&&h.add(v,g)}),h}),C=P(0);let R=0;const y=P(0),I=pe(()=>Math.max(p.value.getBound(y.value-Z(l.paddingTop))-1,0)),i=$(()=>{const{value:e}=k;if(e===void 0)return[];const{items:t,itemSize:s}=l,h=I.value,f=Math.min(h+Math.ceil(e/s+1),t.length-1),v=[];for(let u=h;u<=f;++u)v.push(t[u]);return v}),d=(e,t)=>{if(typeof e=="number"){H(e,t,"auto");return}const{left:s,top:h,index:f,key:v,position:u,behavior:g,debounce:T=!0}=e;if(s!==void 0||h!==void 0)H(s,h,g);else if(f!==void 0)S(f,g,T);else if(v!==void 0){const j=r.value.get(v);j!==void 0&&S(j,g,T)}else u==="bottom"?H(0,Number.MAX_SAFE_INTEGER,g):u==="top"&&H(0,0,g)};let x,w=null;function S(e,t,s){const{value:h}=p,f=h.sum(e)+Z(l.paddingTop);if(!s)c.value.scrollTo({left:0,top:f,behavior:t});else{x=e,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{x=void 0,w=null},16);const{scrollTop:v,offsetHeight:u}=c.value;if(f>v){const g=h.get(e);f+g<=v+u||c.value.scrollTo({left:0,top:f+g-u,behavior:t})}else c.value.scrollTo({left:0,top:f,behavior:t})}}function H(e,t,s){c.value.scrollTo({left:e,top:t,behavior:s})}function D(e,t){var s,h,f;if(o||l.ignoreItemResize||V(t.target))return;const{value:v}=p,u=r.value.get(e),g=v.get(u),T=(f=(h=(s=t.borderBoxSize)===null||s===void 0?void 0:s[0])===null||h===void 0?void 0:h.blockSize)!==null&&f!==void 0?f:t.contentRect.height;if(T===g)return;T-l.itemSize===0?b.delete(e):b.set(e,T-l.itemSize);const _=T-g;if(_===0)return;v.add(u,_);const B=c.value;if(B!=null){if(x===void 0){const E=v.sum(u);B.scrollTop>E&&B.scrollBy(0,_)}else if(u<x)B.scrollBy(0,_);else if(u===x){const E=v.sum(u);T+E>B.scrollTop+B.offsetHeight&&B.scrollBy(0,_)}N()}C.value++}const L=!He();let O=!1;function q(e){var t;(t=l.onScroll)===null||t===void 0||t.call(l,e),(!L||!O)&&N()}function Y(e){var t;if((t=l.onWheel)===null||t===void 0||t.call(l,e),L){const s=c.value;if(s!=null){if(e.deltaX===0&&(s.scrollTop===0&&e.deltaY<=0||s.scrollTop+s.offsetHeight>=s.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),s.scrollTop+=e.deltaY/ne(),s.scrollLeft+=e.deltaX/ne(),N(),O=!0,ye(()=>{O=!1})}}}function X(e){if(o||V(e.target)||e.contentRect.height===k.value)return;k.value=e.contentRect.height;const{onResize:t}=l;t!==void 0&&t(e)}function N(){const{value:e}=c;e!=null&&(y.value=e.scrollTop,R=e.scrollLeft)}function V(e){let t=e;for(;t!==null;){if(t.style.display==="none")return!0;t=t.parentElement}return!1}return{listHeight:k,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:$(()=>{const{itemResizable:e}=l,t=W(p.value.sum());return C.value,[l.itemsStyle,{boxSizing:"content-box",height:e?"":t,minHeight:e?t:"",paddingTop:W(l.paddingTop),paddingBottom:W(l.paddingBottom)}]}),visibleItemsStyle:$(()=>(C.value,{transform:`translateY(${W(p.value.sum(I.value))})`})),viewportItems:i,listElRef:c,itemsElRef:P(null),scrollTo:d,handleListResize:X,handleListScroll:q,handleListWheel:Y,handleItemResize:D}},render(){const{itemResizable:l,keyField:n,keyToIndex:o,visibleItemsTag:a}=this;return z(ee,{onResize:this.handleListResize},{default:()=>{var r,c;return z("div",Ce(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?z("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[z(a,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(k=>{const b=k[n],p=o.get(b),C=this.$slots.default({item:k,index:p})[0];return l?z(ee,{key:b,onResize:R=>this.handleItemResize(b,R)},{default:()=>C}):(C.key=b,C)})})]):(c=(r=this.$slots).empty)===null||c===void 0?void 0:c.call(r)])}})}}),Fe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Pe=xe("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[M("strong",`
 font-weight: var(--n-font-weight-strong);
 `),F("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),F("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),F("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),F("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),M("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[F("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),F("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),M("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),M("icon, avatar",[M("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),M("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),M("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[A("disabled",[U("&:hover","background-color: var(--n-color-hover-checkable);",[A("checked","color: var(--n-text-color-hover-checkable);")]),U("&:active","background-color: var(--n-color-pressed-checkable);",[A("checked","color: var(--n-text-color-pressed-checkable);")])]),M("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[A("disabled",[U("&:hover","background-color: var(--n-color-checked-hover);"),U("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Oe=Object.assign(Object.assign(Object.assign({},se.props),Fe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ne=Me("n-tag"),Ve=re({name:"Tag",props:Oe,setup(l){const n=P(null),{mergedBorderedRef:o,mergedClsPrefixRef:a,inlineThemeDisabled:r,mergedRtlRef:c}=we(l),k=se("Tag","-tag",Pe,ze,l,a);Se(Ne,{roundRef:Te(l,"round")});function b(i){if(!l.disabled&&l.checkable){const{checked:d,onCheckedChange:x,onUpdateChecked:w,"onUpdate:checked":S}=l;w&&w(!d),S&&S(!d),x&&x(!d)}}function p(i){if(l.triggerClickOnClose||i.stopPropagation(),!l.disabled){const{onClose:d}=l;d&&_e(d,i)}}const C={setTextContent(i){const{value:d}=n;d&&(d.textContent=i)}},R=Re("Tag",c,a),y=$(()=>{const{type:i,size:d,color:{color:x,textColor:w}={}}=l,{common:{cubicBezierEaseInOut:S},self:{padding:H,closeMargin:D,closeMarginRtl:L,borderRadius:O,opacityDisabled:q,textColorCheckable:Y,textColorHoverCheckable:X,textColorPressedCheckable:N,textColorChecked:V,colorCheckable:e,colorHoverCheckable:t,colorPressedCheckable:s,colorChecked:h,colorCheckedHover:f,colorCheckedPressed:v,closeBorderRadius:u,fontWeightStrong:g,[m("colorBordered",i)]:T,[m("closeSize",d)]:j,[m("closeIconSize",d)]:_,[m("fontSize",d)]:B,[m("height",d)]:E,[m("color",i)]:ie,[m("textColor",i)]:ae,[m("border",i)]:ce,[m("closeIconColor",i)]:Q,[m("closeIconColorHover",i)]:de,[m("closeIconColorPressed",i)]:ue,[m("closeColorHover",i)]:he,[m("closeColorPressed",i)]:fe}}=k.value;return{"--n-font-weight-strong":g,"--n-avatar-size-override":`calc(${E} - 8px)`,"--n-bezier":S,"--n-border-radius":O,"--n-border":ce,"--n-close-icon-size":_,"--n-close-color-pressed":fe,"--n-close-color-hover":he,"--n-close-border-radius":u,"--n-close-icon-color":Q,"--n-close-icon-color-hover":de,"--n-close-icon-color-pressed":ue,"--n-close-icon-color-disabled":Q,"--n-close-margin":D,"--n-close-margin-rtl":L,"--n-close-size":j,"--n-color":x||(o.value?T:ie),"--n-color-checkable":e,"--n-color-checked":h,"--n-color-checked-hover":f,"--n-color-checked-pressed":v,"--n-color-hover-checkable":t,"--n-color-pressed-checkable":s,"--n-font-size":B,"--n-height":E,"--n-opacity-disabled":q,"--n-padding":H,"--n-text-color":w||ae,"--n-text-color-checkable":Y,"--n-text-color-checked":V,"--n-text-color-hover-checkable":X,"--n-text-color-pressed-checkable":N}}),I=r?Ie("tag",$(()=>{let i="";const{type:d,size:x,color:{color:w,textColor:S}={}}=l;return i+=d[0],i+=x[0],w&&(i+=`a${te(w)}`),S&&(i+=`b${te(S)}`),o.value&&(i+="c"),i}),y,l):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:R,mergedClsPrefix:a,contentRef:n,mergedBordered:o,handleClick:b,handleCloseClick:p,cssVars:r?void 0:y,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var l,n;const{mergedClsPrefix:o,rtlEnabled:a,closable:r,color:{borderColor:c}={},round:k,onRender:b,$slots:p}=this;b==null||b();const C=oe(p.avatar,y=>y&&z("div",{class:`${o}-tag__avatar`},y)),R=oe(p.icon,y=>y&&z("div",{class:`${o}-tag__icon`},y));return z("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:a,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:k,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:R,[`${o}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},R||C,z("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(l=this.$slots).default)===null||n===void 0?void 0:n.call(l)),!this.checkable&&r?z(Be,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:k,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?z("div",{class:`${o}-tag__border`,style:{borderColor:c}}):null)}});export{Le as V,Ve as _,Ne as t};
