import{H as ke,I as He,S as ee,J as Re,f as q,T as Ee,L as Ie,h as y,c as _,M as We,N as k,O as Fe,P as _e,b as g,Q as Ne,R as ae,i as Oe,a as p,d as f,e as oe,g as se,U as je,j as Le,k as I,u as Ae,V as De,W}from"./index.8f62a545.js";import{u as Me}from"./use-rtl.6d35c504.js";import{i as N}from"./is-browser.f4df612e.js";import{i as Ge,u as Ke,r as re,b as Ve,N as Qe,d as qe,c as Ye}from"./Loading.0b953150.js";import{c as t}from"./create-key.7b548031.js";import{u as Ue}from"./use-css-vars-class.1ada0b07.js";import{u as Xe}from"./use-style.d8216a24.js";function te(e){return e.replace(/#|\(|\)|,|\s/g,"_")}var Je="[object Symbol]";function Ze(e){return typeof e=="symbol"||ke(e)&&He(e)==Je}function eo(e,c){for(var u=-1,d=e==null?0:e.length,h=Array(d);++u<d;)h[u]=c(e[u],u,e);return h}var oo=1/0,ne=ee?ee.prototype:void 0,ie=ne?ne.toString:void 0;function le(e){if(typeof e=="string")return e;if(Re(e))return eo(e,le)+"";if(Ze(e))return ie?ie.call(e):"";var c=e+"";return c=="0"&&1/e==-oo?"-0":c}function xo(e){return e==null?"":le(e)}const ro=q({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:c}){function u(r){e.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function d(r){e.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:m}=e;m&&m()}function h(r){e.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:m}=e;m&&m()}function O(r){if(r.style.transition="none",e.width){const m=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${m}px`}else if(e.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const m=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${m}px`}r.offsetWidth}function P(r){var m;e.width?r.style.maxWidth="":e.reverse||(r.style.maxHeight=""),(m=e.onAfterEnter)===null||m===void 0||m.call(e)}return()=>{const r=e.group?Ee:Ie;return y(r,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:O,onAfterEnter:P,onBeforeLeave:u,onLeave:d,onAfterLeave:h},c)}}}),to=_("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),no=q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Xe("-base-wave",to,We(e,"clsPrefix"));const c=k(null),u=k(!1);let d=null;return Fe(()=>{d!==null&&window.clearTimeout(d)}),{active:u,selfRef:c,play(){d!==null&&(window.clearTimeout(d),u.value=!1,d=null),_e(()=>{var h;(h=c.value)===null||h===void 0||h.offsetHeight,u.value=!0,d=window.setTimeout(()=>{u.value=!1,d=null},1e3)})}}},render(){const{clsPrefix:e}=this;return y("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:S}=Ne;function io({duration:e=".2s",delay:c=".1s"}={}){return[g("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),g("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),g("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${S},
 max-width ${e} ${S} ${c},
 margin-left ${e} ${S} ${c},
 margin-right ${e} ${S} ${c};
 `),g("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${S} ${c},
 max-width ${e} ${S},
 margin-left ${e} ${S},
 margin-right ${e} ${S};
 `)]}const ao=N&&"chrome"in window;N&&navigator.userAgent.includes("Firefox");const so=N&&navigator.userAgent.includes("Safari")&&!ao;function B(e){return ae(e,[255,255,255,.16])}function F(e){return ae(e,[0,0,0,.12])}const lo=Oe("n-button-group"),co=g([_("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p("color",[f("border",{borderColor:"var(--n-border-color)"}),p("disabled",[f("border",{borderColor:"var(--n-border-color-disabled)"})]),oe("disabled",[g("&:focus",[f("state-border",{borderColor:"var(--n-border-color-focus)"})]),g("&:hover",[f("state-border",{borderColor:"var(--n-border-color-hover)"})]),g("&:active",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})]),p("pressed",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),p("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[f("border",{border:"var(--n-border-disabled)"})]),oe("disabled",[g("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[f("state-border",{border:"var(--n-border-focus)"})]),g("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[f("state-border",{border:"var(--n-border-hover)"})]),g("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})]),p("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})])]),p("loading","cursor: wait;"),_("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[p("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),N&&"MozBoxSizing"in document.createElement("div").style?g("&::moz-focus-inner",{border:0}):null,f("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f("border",{border:"var(--n-border)"}),f("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),f("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[_("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ge({top:"50%",originalTransform:"translateY(-50%)"})]),io()]),f("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[g("~",[f("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),p("block",`
 display: flex;
 width: 100%;
 `),p("dashed",[f("border, state-border",{borderStyle:"dashed !important"})]),p("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),g("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),g("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),uo=Object.assign(Object.assign({},se.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!so}}),de=q({name:"Button",props:uo,setup(e){const c=k(null),u=k(null),d=k(!1),h=je(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),O=Le(lo,{}),{mergedSizeRef:P}=Ke({},{defaultSize:"medium",mergedSize:n=>{const{size:b}=e;if(b)return b;const{size:w}=O;if(w)return w;const{mergedSize:o}=n||{};return o?o.value:"medium"}}),r=I(()=>e.focusable&&!e.disabled),m=n=>{var b;r.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&r.value&&((b=c.value)===null||b===void 0||b.focus({preventScroll:!0})))},ce=n=>{var b;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&Ye(w,n),e.text||(b=u.value)===null||b===void 0||b.play()}},ue=n=>{switch(n.key){case"Enter":if(!e.keyboard)return;d.value=!1}},fe=n=>{switch(n.key){case"Enter":if(!e.keyboard||e.loading){n.preventDefault();return}d.value=!0}},be=()=>{d.value=!1},{inlineThemeDisabled:Y,mergedClsPrefixRef:j,mergedRtlRef:he}=Ae(e),ve=se("Button","-button",co,De,e,j),me=Me("Button",he,j),U=I(()=>{const n=ve.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:w},self:o}=n,{rippleDuration:L,opacityDisabled:H,fontWeight:A,fontWeightStrong:D}=o,x=P.value,{dashed:M,type:$,ghost:G,text:C,color:a,round:X,circle:K,textColor:z,secondary:ge,tertiary:J,quaternary:ye,strong:xe}=e,pe={"font-weight":xe?D:A};let s={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const R=$==="tertiary",Z=$==="default",i=R?"default":$;if(C){const l=z||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":l||o[t("textColorText",i)],"--n-text-color-hover":l?B(l):o[t("textColorTextHover",i)],"--n-text-color-pressed":l?F(l):o[t("textColorTextPressed",i)],"--n-text-color-focus":l?B(l):o[t("textColorTextHover",i)],"--n-text-color-disabled":l||o[t("textColorTextDisabled",i)]}}else if(G||M){const l=z||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[t("rippleColor",i)],"--n-text-color":l||o[t("textColorGhost",i)],"--n-text-color-hover":l?B(l):o[t("textColorGhostHover",i)],"--n-text-color-pressed":l?F(l):o[t("textColorGhostPressed",i)],"--n-text-color-focus":l?B(l):o[t("textColorGhostHover",i)],"--n-text-color-disabled":l||o[t("textColorGhostDisabled",i)]}}else if(ge){const l=Z?o.textColor:R?o.textColorTertiary:o[t("color",i)],v=a||l,E=$!=="default"&&$!=="tertiary";s={"--n-color":E?W(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":E?W(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":E?W(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":E?W(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(J||ye){const l=Z?o.textColor:R?o.textColorTertiary:o[t("color",i)],v=a||l;J?(s["--n-color"]=o.colorTertiary,s["--n-color-hover"]=o.colorTertiaryHover,s["--n-color-pressed"]=o.colorTertiaryPressed,s["--n-color-focus"]=o.colorSecondaryHover,s["--n-color-disabled"]=o.colorTertiary):(s["--n-color"]=o.colorQuaternary,s["--n-color-hover"]=o.colorQuaternaryHover,s["--n-color-pressed"]=o.colorQuaternaryPressed,s["--n-color-focus"]=o.colorQuaternaryHover,s["--n-color-disabled"]=o.colorQuaternary),s["--n-ripple-color"]="#0000",s["--n-text-color"]=v,s["--n-text-color-hover"]=v,s["--n-text-color-pressed"]=v,s["--n-text-color-focus"]=v,s["--n-text-color-disabled"]=v}else s={"--n-color":a||o[t("color",i)],"--n-color-hover":a?B(a):o[t("colorHover",i)],"--n-color-pressed":a?F(a):o[t("colorPressed",i)],"--n-color-focus":a?B(a):o[t("colorFocus",i)],"--n-color-disabled":a||o[t("colorDisabled",i)],"--n-ripple-color":a||o[t("rippleColor",i)],"--n-text-color":z||(a?o.textColorPrimary:R?o.textColorTertiary:o[t("textColor",i)]),"--n-text-color-hover":z||(a?o.textColorHoverPrimary:o[t("textColorHover",i)]),"--n-text-color-pressed":z||(a?o.textColorPressedPrimary:o[t("textColorPressed",i)]),"--n-text-color-focus":z||(a?o.textColorFocusPrimary:o[t("textColorFocus",i)]),"--n-text-color-disabled":z||(a?o.textColorDisabledPrimary:o[t("textColorDisabled",i)])};let V={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?V={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:V={"--n-border":o[t("border",i)],"--n-border-hover":o[t("borderHover",i)],"--n-border-pressed":o[t("borderPressed",i)],"--n-border-focus":o[t("borderFocus",i)],"--n-border-disabled":o[t("borderDisabled",i)]};const{[t("height",x)]:Q,[t("fontSize",x)]:we,[t("padding",x)]:Ce,[t("paddingRound",x)]:Se,[t("iconSize",x)]:$e,[t("borderRadius",x)]:ze,[t("iconMargin",x)]:Be,waveOpacity:Te}=o,Pe={"--n-width":K&&!C?Q:"initial","--n-height":C?"initial":Q,"--n-font-size":we,"--n-padding":K||C?"initial":X?Se:Ce,"--n-icon-size":$e,"--n-icon-margin":Be,"--n-border-radius":C?"initial":K||X?Q:ze};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":w,"--n-ripple-duration":L,"--n-opacity-disabled":H,"--n-wave-opacity":Te},pe),s),V),Pe)}),T=Y?Ue("button",I(()=>{let n="";const{dashed:b,type:w,ghost:o,text:L,color:H,round:A,circle:D,textColor:x,secondary:M,tertiary:$,quaternary:G,strong:C}=e;b&&(n+="a"),o&&(n+="b"),L&&(n+="c"),A&&(n+="d"),D&&(n+="e"),M&&(n+="f"),$&&(n+="g"),G&&(n+="h"),C&&(n+="i"),H&&(n+="j"+te(H)),x&&(n+="k"+te(x));const{value:a}=P;return n+="l"+a[0],n+="m"+w[0],n}),U,e):void 0;return{selfElRef:c,waveElRef:u,mergedClsPrefix:j,mergedFocusable:r,mergedSize:P,showBorder:h,enterPressed:d,rtlEnabled:me,handleMousedown:m,handleKeydown:fe,handleBlur:be,handleKeyup:ue,handleClick:ce,customColorCssVars:I(()=>{const{color:n}=e;if(!n)return null;const b=B(n);return{"--n-border-color":n,"--n-border-color-hover":b,"--n-border-color-pressed":F(n),"--n-border-color-focus":b,"--n-border-color-disabled":n}}),cssVars:Y?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:c,onRender:u}=this;u==null||u();const d=re(this.$slots.default,h=>h&&y("span",{class:`${e}-button__content`},h));return y(c,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&d,y(ro,{width:!0},{default:()=>re(this.$slots.icon,h=>(this.loading||this.renderIcon||h)&&y("span",{class:`${e}-button__icon`,style:{margin:Ve(this.$slots.default)?"0":""}},y(Qe,null,{default:()=>this.loading?y(qe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):y("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():h)})))}),this.iconPlacement==="left"&&d,this.text?null:y(no,{ref:"waveElRef",clsPrefix:e}),this.showBorder?y("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?y("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),po=de,wo=de;export{ro as N,wo as X,po as _,eo as a,so as b,lo as c,te as d,Ze as i,xo as t};
