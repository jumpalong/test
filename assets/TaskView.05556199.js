import{b as r,c as s,a as n,e as L,bV as O,bW as D,f as H,u as N,h as g,e7 as W,g as q,o as b,q as i,r as A,j as F,ab as I,A as K,B as X,C as G,X as J,D as Q}from"./index.243f7ff1.js";const U=r([s("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[r("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),r("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),n("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),n("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),L("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),O(s("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),D(s("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Y=Object.assign(Object.assign({},g.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Z=H({name:"Table",props:Y,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:d,mergedRtlRef:l}=N(e),h=g("Table","-table",U,W,e,o),p=q("Table",l,o),c=b(()=>{const{size:a}=e,{self:{borderColor:v,tdColor:m,tdColorModal:u,tdColorPopover:f,thColor:x,thColorModal:C,thColorPopover:_,thTextColor:z,tdTextColor:k,borderRadius:P,thFontWeight:B,lineHeight:R,borderColorModal:w,borderColorPopover:T,tdColorStriped:y,tdColorStripedModal:$,tdColorStripedPopover:M,[i("fontSize",a)]:S,[i("tdPadding",a)]:V,[i("thPadding",a)]:E},common:{cubicBezierEaseInOut:j}}=h.value;return{"--n-bezier":j,"--n-td-color":m,"--n-td-color-modal":u,"--n-td-color-popover":f,"--n-td-text-color":k,"--n-border-color":v,"--n-border-color-modal":w,"--n-border-color-popover":T,"--n-border-radius":P,"--n-font-size":S,"--n-th-color":x,"--n-th-color-modal":C,"--n-th-color-popover":_,"--n-th-font-weight":B,"--n-th-text-color":z,"--n-line-height":R,"--n-td-padding":V,"--n-th-padding":E,"--n-td-color-striped":y,"--n-td-color-striped-modal":$,"--n-td-color-striped-popover":M}}),t=d?A("table",b(()=>e.size[0]),c,e):void 0;return{rtlEnabled:p,mergedClsPrefix:o,cssVars:d?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),F("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),rr={};function or(e,o){const d=Z,l=J;return K(),X(l,{vertical:""},{default:G(()=>[Q(d,{striped:""})]),_:1})}const tr=I(rr,[["render",or]]);export{tr as default};
