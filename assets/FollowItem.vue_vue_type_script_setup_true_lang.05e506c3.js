import{m as X,c as $,bV as Y,b as E,bW as Q,d as V,f as D,u as Z,V as L,n as H,o as k,h as G,e1 as ee,e2 as oe,ae as te,q as re,r as ne,e3 as ae,ao as se,e4 as w,aA as le,e5 as ie,af as de,x as ce,w as ue,j as S,b8 as fe,bT as ve,e6 as me,bw as he,A as I,B as M,C as P,W as B,D as N,F as l,e0 as be,cw as W,H as A,I as K,J as ge,z as pe,dO as ye}from"./index.243f7ff1.js";const ze=X("n-avatar-group"),xe=$("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Y(E("&","--n-merged-color: var(--n-color-modal);")),Q(E("&","--n-merged-color: var(--n-color-popover);")),E("img",`
 width: 100%;
 height: 100%;
 `),V("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),V("text","line-height: 1.25")]),_e=Object.assign(Object.assign({},G.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Re=D({name:"Avatar",props:_e,setup(t){const{mergedClsPrefixRef:h,inlineThemeDisabled:s}=Z(t),i=L(!1);let b=null;const x=L(null),u=L(null),g=()=>{const{value:e}=x;if(e&&(b===null||b!==e.innerHTML)){b=e.innerHTML;const{value:o}=u;if(o){const{offsetWidth:a,offsetHeight:r}=o,{offsetWidth:c,offsetHeight:j}=e,C=.9,F=Math.min(a/c*C,r/j*C,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${F})`}}},n=H(ze,null),d=k(()=>{const{size:e}=t;if(e)return e;const{size:o}=n||{};return o||"medium"}),_=G("Avatar","-avatar",xe,ee,t,h),p=H(oe,null),f=k(()=>{if(n)return!0;const{round:e,circle:o}=t;return e!==void 0||o!==void 0?e||o:p?p.roundRef.value:!1}),y=k(()=>n?!0:t.bordered||!1),v=e=>{var o;if(!R.value)return;i.value=!0;const{onError:a,imgProps:r}=t;(o=r==null?void 0:r.onError)===null||o===void 0||o.call(r,e),a&&a(e)};te(()=>t.src,()=>i.value=!1);const z=k(()=>{const e=d.value,o=f.value,a=y.value,{color:r}=t,{self:{borderRadius:c,fontSize:j,color:C,border:F,colorModal:U,colorPopover:q},common:{cubicBezierEaseInOut:J}}=_.value;let O;return typeof e=="number"?O=`${e}px`:O=_.value.self[re("height",e)],{"--n-font-size":j,"--n-border":a?F:"none","--n-border-radius":o?"50%":c,"--n-color":r||C,"--n-color-modal":r||U,"--n-color-popover":r||q,"--n-bezier":J,"--n-merged-size":`var(--n-avatar-size-override, ${O})`}}),m=s?ne("avatar",k(()=>{const e=d.value,o=f.value,a=y.value,{color:r}=t;let c="";return e&&(typeof e=="number"?c+=`a${e}`:c+=e[0]),o&&(c+="b"),a&&(c+="c"),r&&(c+=ae(r)),c}),z,t):void 0,R=L(!t.lazy);se(()=>{if(w)return;let e;const o=le(()=>{e==null||e(),e=void 0,t.lazy&&(e=ie(u.value,t.intersectionObserverOptions,R))});de(()=>{o(),e==null||e()})});const T=L(!t.lazy);return{textRef:x,selfRef:u,mergedRoundRef:f,mergedClsPrefix:h,fitTextTransform:g,cssVars:s?void 0:z,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender,hasLoadError:i,handleError:v,shouldStartLoading:R,loaded:T,mergedOnLoad:e=>{var o;const{onLoad:a,imgProps:r}=t;a==null||a(e),(o=r==null?void 0:r.onLoad)===null||o===void 0||o.call(r,e),T.value=!0}}},render(){var t,h;const{$slots:s,src:i,mergedClsPrefix:b,lazy:x,onRender:u,mergedOnLoad:g,shouldStartLoading:n,loaded:d,hasLoadError:_}=this;u==null||u();let p;const f=!d&&!_&&(this.renderPlaceholder?this.renderPlaceholder():(h=(t=this.$slots).placeholder)===null||h===void 0?void 0:h.call(t));return this.hasLoadError?p=this.renderFallback?this.renderFallback():ce(s.fallback,()=>[S("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):p=ue(s.default,y=>{if(y)return S(fe,{onResize:this.fitTextTransform},{default:()=>S("span",{ref:"textRef",class:`${b}-avatar__text`},y)});if(i){const{imgProps:v}=this;return S("img",Object.assign(Object.assign({},v),{loading:w&&!this.intersectionObserverOptions&&x?"lazy":"eager",src:w||n||d?i:void 0,onLoad:g,"data-image-src":i,onError:this.handleError,style:[v==null?void 0:v.style,{objectFit:this.objectFit},f?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),S("span",{ref:"selfRef",class:[`${b}-avatar`,this.themeClass],style:this.cssVars},p,x&&f)}}),ke={class:"flex flex-col ml-4 flex-1 shrink-1 w-full"},Le={class:"flex-shrink-0 ml-2"},Ce=D({__name:"FollowItem",props:{pubkey:null,name:null,about:null},setup(t){const h=t,{pubkey:s,name:i,about:b}=ve(h),[x,u]=me(()=>he(s.value)),g=k(()=>{var n;return(n=x.value)==null?void 0:n.feat.useMetadata()});return(n,d)=>{const _=Re,p=ye;return I(),M(p,{class:"cursor-pointer overflow-hidden"},{default:P(()=>{var f,y,v;return[B("div",{ref_key:"target",ref:u,class:"flex items-center"},[N(_,{class:"ml-4",size:"small",src:(y=(f=l(g))==null?void 0:f.picture)!=null?y:l(be),round:"",onClick:d[0]||(d[0]=()=>n.$router.push(`/profile/${l(s)}`))},null,8,["src"]),B("div",ke,[N(W,{class:"text-xl",onClick:d[1]||(d[1]=()=>n.$router.push(`/profile/${l(s)}`))},{default:P(()=>{var z,m,R;return[A(K((R=(m=l(i))!=null?m:(z=l(g))==null?void 0:z.name)!=null?R:l(s).slice(0,10)),1)]}),_:1}),(v=l(g))!=null&&v.about?(I(),M(W,{key:0,style:{fontSize:"10px"}},{default:P(()=>{var z;return[A(K((z=l(b))!=null?z:l(g).about),1)]}),_:1})):ge("",!0)]),B("div",Le,[pe(n.$slots,"right",{pubkey:l(s)})])],512)]}),_:3})}}});export{Ce as _,Re as a};
