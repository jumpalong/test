import{k as oo}from"./keysOf-HiGXOwLp.js";import{b as R,c as $,d as r,a as f,aw as eo,bL as no,f as io,g as _,u as to,k as S,bM as ro,l as lo,h as e}from"./index-Bp8Ru9nj.js";import{u as ao}from"./use-rtl-gkSu3eK_.js";import{g as so}from"./index-vZmvdULR.js";import{u as co}from"./use-css-vars-class-DV7GkkKb.js";import{r as T,b as M,a as N}from"./Button-DF3Ei97P.js";import{r as d}from"./render-n15ElYMw.js";import{N as go}from"./Icon-C2DldZ3i.js";import{N as mo}from"./Close-sZEX0j0N.js";import{I as O,S as uo,W as vo,E as fo}from"./Warning-BHWEvLya.js";const j={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},wo=oo(j),ho=R([$("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[r("icon",{color:"var(--n-icon-color)"}),f("bordered",{border:"var(--n-border)"}),f("icon-top",[r("close",{margin:"var(--n-close-margin)"}),r("icon",{margin:"var(--n-icon-margin)"}),r("content",{textAlign:"center"}),r("title",{justifyContent:"center"}),r("action",{justifyContent:"center"})]),f("icon-left",[r("icon",{margin:"var(--n-icon-margin)"}),f("closable",[r("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),r("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),r("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[f("last","margin-bottom: 0;")]),r("action",`
 display: flex;
 justify-content: flex-end;
 `,[R("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),r("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),r("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),$("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),eo($("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),$("dialog",[no(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),po={default:()=>e(O,null),info:()=>e(O,null),success:()=>e(uo,null),warning:()=>e(vo,null),error:()=>e(fo,null)},So=io({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},_.props),j),setup(t){const{mergedComponentPropsRef:g,mergedClsPrefixRef:c,inlineThemeDisabled:h,mergedRtlRef:I}=to(t),m=ao("Dialog",I,c),u=S(()=>{var n,i;const{iconPlacement:s}=t;return s||((i=(n=g==null?void 0:g.value)===null||n===void 0?void 0:n.Dialog)===null||i===void 0?void 0:i.iconPlacement)||"left"});function B(n){const{onPositiveClick:i}=t;i&&i(n)}function v(n){const{onNegativeClick:i}=t;i&&i(n)}function w(){const{onClose:n}=t;n&&n()}const p=_("Dialog","-dialog",ho,ro,t,c),b=S(()=>{const{type:n}=t,i=u.value,{common:{cubicBezierEaseInOut:s},self:{fontSize:C,lineHeight:x,border:o,titleTextColor:z,textColor:P,color:l,closeBorderRadius:k,closeColorHover:F,closeColorPressed:E,closeIconColor:D,closeIconColorHover:H,closeIconColorPressed:W,closeIconSize:V,borderRadius:K,titleFontWeight:L,titleFontSize:A,padding:q,iconSize:G,actionSpace:J,contentMargin:Q,closeSize:U,[i==="top"?"iconMarginIconTop":"iconMargin"]:X,[i==="top"?"closeMarginIconTop":"closeMargin"]:Y,[lo("iconColor",n)]:Z}}=p.value,y=so(X);return{"--n-font-size":C,"--n-icon-color":Z,"--n-bezier":s,"--n-close-margin":Y,"--n-icon-margin-top":y.top,"--n-icon-margin-right":y.right,"--n-icon-margin-bottom":y.bottom,"--n-icon-margin-left":y.left,"--n-icon-size":G,"--n-close-size":U,"--n-close-icon-size":V,"--n-close-border-radius":k,"--n-close-color-hover":F,"--n-close-color-pressed":E,"--n-close-icon-color":D,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":W,"--n-color":l,"--n-text-color":P,"--n-border-radius":K,"--n-padding":q,"--n-line-height":x,"--n-border":o,"--n-content-margin":Q,"--n-title-font-size":A,"--n-title-font-weight":L,"--n-title-text-color":z,"--n-action-space":J}}),a=h?co("dialog",S(()=>`${t.type[0]}${u.value[0]}`),b,t):void 0;return{mergedClsPrefix:c,rtlEnabled:m,mergedIconPlacement:u,mergedTheme:p,handlePositiveClick:B,handleNegativeClick:v,handleCloseClick:w,cssVars:h?void 0:b,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{bordered:g,mergedIconPlacement:c,cssVars:h,closable:I,showIcon:m,title:u,content:B,action:v,negativeText:w,positiveText:p,positiveButtonProps:b,negativeButtonProps:a,handlePositiveClick:n,handleNegativeClick:i,mergedTheme:s,loading:C,type:x,mergedClsPrefix:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const z=m?e(go,{clsPrefix:o,class:`${o}-dialog__icon`},{default:()=>T(this.$slots.icon,l=>l||(this.icon?d(this.icon):po[this.type]()))}):null,P=T(this.$slots.action,l=>l||p||w||v?e("div",{class:`${o}-dialog__action`},l||(v?[d(v)]:[this.negativeText&&e(M,Object.assign({theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,ghost:!0,size:"small",onClick:i},a),{default:()=>d(this.negativeText)}),this.positiveText&&e(M,Object.assign({theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,size:"small",type:x==="default"?"primary":x,disabled:C,loading:C,onClick:n},b),{default:()=>d(this.positiveText)})])):null);return e("div",{class:[`${o}-dialog`,this.themeClass,this.closable&&`${o}-dialog--closable`,`${o}-dialog--icon-${c}`,g&&`${o}-dialog--bordered`,this.rtlEnabled&&`${o}-dialog--rtl`],style:h,role:"dialog"},I?T(this.$slots.close,l=>{const k=[`${o}-dialog__close`,this.rtlEnabled&&`${o}-dialog--rtl`];return l?e("div",{class:k},l):e(mo,{clsPrefix:o,class:k,onClick:this.handleCloseClick})}):null,m&&c==="top"?e("div",{class:`${o}-dialog-icon-container`},z):null,e("div",{class:`${o}-dialog__title`},m&&c==="left"?z:null,N(this.$slots.header,()=>[d(u)])),e("div",{class:[`${o}-dialog__content`,P?"":`${o}-dialog__content--last`]},N(this.$slots.default,()=>[d(B)])),P)}});export{So as N,wo as a,j as d};
