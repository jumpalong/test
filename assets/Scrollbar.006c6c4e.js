import{bs as z,y as p,I as _,aP as C,br as G,bu as O,C as u,O as $,am as j,bn as q,f as Y,bv as D,bw as E,bq as b,a0 as F,aG as T,ap as U,n as N,aY as y,H as m,A as w,G as B,aO as M,L as J,bb as K}from"./index.d371abec.js";import{c as Q,a as W,b as X,d as Z}from"./use.340cc192.js";import{N as ee}from"./Icon.3c345b29.js";import{S as te}from"./Scrollbar.1d588631.js";const se={},re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},oe=C("path",{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm120 190.77h-89l36.88-36.88l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25l5.37-15.13l30.17 10.67l-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5L376 149.81z",fill:"currentColor"},null,-1),ne=[oe];function ae(r,e){return p(),_("svg",re,ne)}const le=z(se,[["render",ae]]),[ie,ue]=Q(()=>{const r=new j.exports;return q(()=>{r.removeAllListeners()}),{on(e,o){return r.on(e,o),()=>this.removeListener(e,o)},emit(e){r.emit(e)},removeListener(e,o){r.removeListener(e,o)}}});function be(r,e){const o=G();O(r);const t=ue();t==null||t.on("load",()=>{!u(e)||l()}),t==null||t.on("refresh",()=>{!u(e)||n()});function l(){var s;(s=r.value)==null||s.feat.load(),o.info($("loading"))}function n(){var s;(s=r.value)==null||s.feat.refresh(),o.info($("refreshing"))}return{load:l,refresh:n}}const fe=Y({__name:"Refresh",props:{refreshable:{type:Boolean},loadable:{type:Boolean},triggerDistance:{default:150},maxShifting:{default:200},containerRef:null},emits:["refresh","load"],setup(r,{emit:e}){const o=r,{refreshable:t,loadable:l,containerRef:n,maxShifting:s}=D(o),{emit:f}=ie();function V(){!(t!=null&&t.value)||(e("refresh"),f==null||f("refresh"))}function H(){!(l!=null&&l.value)||(e("load"),f==null||f("load"))}const{shifting:d,moveScale:me,add:R,remake:P}=W(s);let h=null;const{x:ve,y:pe,arrivedState:i}=E(n);b(n,"touchstart",a=>{g(),c.value=!1},{passive:!0});const A=F(()=>{I(),g(),c.value=!0},500);b(n,"mousewheel",a=>{!(i.bottom||i.top)||(A(),R(-a.wheelDeltaY/3),c.value=!0)},{passive:!0}),b(n,"touchmove",a=>{if(!(i.bottom||i.top))return;const x=a.touches[0].clientY;!x||(h&&R(h-x),h=x)},{passive:!0}),b(n,"touchend",a=>{!(i.bottom||i.top)||(I(),g(),c.value=!0)},{passive:!0}),T(()=>{i.bottom||i.top||(g(),c.value=!0)});function I(){Math.abs(d.value)>o.triggerDistance&&(d.value>0?H():d.value<0&&V())}function g(){P(),h=null}const c=U(!1),S=X(),v=N(()=>{if(d.value<0&&i.top)return d.value;if(d.value>0){const a=S==null?void 0:S.containerRef.value;if(i.bottom||a&&a.offsetHeight===a.scrollHeight)return d.value}return 0});return(a,x)=>{const L=le,k=ee;return p(),_(J,null,[u(t)?(p(),_("div",{key:0,class:"w-full h-20 flex items-center justify-center absolute",style:y({transform:`translate(0,calc(${-u(v)}px + -100%)) rotate(${-u(v)*10}deg)`,transition:c.value?"transform 0.5s":"",zIndex:1})},[m(k,{size:50},{default:w(()=>[m(L)]),_:1})],4)):B("",!0),C("div",{class:"wraps flex flex-col h-full relative overflow-hidden",style:y({transform:`translate(0,calc(${-u(v)/4}px ))`,transition:c.value?"transform 0.3s":"",zIndex:0})},[M(a.$slots,"default")],4),u(l)?(p(),_("div",{key:1,class:"w-full h-20 flex items-center justify-center absolute bottom-0",style:y({transform:`translate(0px,calc(${-u(v)}px + 100%)) rotate(${-u(v)*10}deg)`,transition:c.value?"transform 0.3s":"",zIndex:1})},[m(k,{size:50},{default:w(()=>[m(L)]),_:1})],4)):B("",!0)],64)}}}),ce={class:"wraps flex flex-col h-full relative overflow-hidden"},de=Y({__name:"Scrollbar",props:{refreshable:{type:Boolean},loadable:{type:Boolean},triggerDistance:null,maxShifting:null},emits:["refresh","load"],setup(r,{emit:e}){const o=r,t=N(()=>{var n;return(n=l.value)==null?void 0:n.scrollbarInstRef.containerRef}),{scrollbarInst:l}=Z(t);return D(o),(n,s)=>{const f=te;return p(),_("div",ce,[m(fe,K({"container-ref":u(t)},o,{onLoad:s[1]||(s[1]=()=>e("load")),onRefresh:s[2]||(s[2]=()=>e("refresh"))}),{default:w(()=>[m(f,{class:"w-full flex-shrink flex-1",onScroll:s[0]||(s[0]=()=>{}),ref_key:"scrollbarInst",ref:l},{default:w(()=>[M(n.$slots,"default",{},void 0,!0)]),_:3},512)]),_:3},16,["container-ref"])])}}});const we=z(de,[["__scopeId","data-v-8d3d4c00"]]);export{we as S,ue as a,be as u};