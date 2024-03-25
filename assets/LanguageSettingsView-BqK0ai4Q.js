import{f as J,o as L,B as E,E as $,z as b,_ as R,q as s,y as N,ao as P,k as z,a5 as l,h,m as A,a3 as T,S as q,L as y,a8 as H,a9 as M,H as F,aB as G,w as S,n as g,U as B,aC as K,aD as Q}from"./index-DVMYH3P6.js";import{p as D}from"./utils-BXkRfzfk.js";import{u as W}from"./use-theme-vars-Cj3ejyij.js";import{N as X}from"./InputNumber-C-aeR53V.js";import{_ as Y}from"./Tree-DHBB7Ayr.js";import{_ as k}from"./Input-Bl1B22BO.js";import{_ as Z}from"./Select-DB23ztsc.js";import{u as ee}from"./composables-CG8Dm3JP.js";import{b as te}from"./Button-Czpa3xjC.js";import{_ as ae}from"./Space-CvpcAwGw.js";import{N as ne}from"./Scrollbar-CnPFJxyc.js";import"./use-rtl-CqBkFAUg.js";import"./use-locale-CYSJLCZe.js";import"./Scrollbar-BXVF4b7l.js";import"./use-css-vars-class-DpRsL9zm.js";import"./Icon-DjYnwRew.js";import"./Add-B8K751Td.js";import"./Checkbox-5kBy0qes.js";import"./use-compitable-CysNw4x-.js";import"./render-BaVY8WQh.js";import"./is-browser-BikuuYFQ.js";import"./create-DlBt9mlr.js";import"./index-vZmvdULR.js";import"./fade-in-height-expand.cssr-JdnZy7mo.js";import"./VirtualList-Ds_3EfD8.js";import"./Empty-CBIm7nuM.js";import"./replaceable-DvMWTdGr.js";import"./fade-in-scale-up.cssr-CUPxiz5B.js";import"./Tag-Cl4r3gCd.js";import"./Close-CMpDg3pB.js";import"./Close-Dj7wgTNH.js";import"./index-B5Gs3CWh.js";import"./Popover-C3ccDlka.js";import"./Follower-R8EgPpAd.js";import"./format-length-B-p6aW7q.js";import"./SelectMenu-P-o4iW_T.js";import"./Checkmark-C3ejFAAO.js";import"./index-DsSU6HIH.js";import"./get-slot-Bk_rJcZu.js";const re={class:"flex flex-wrap"},oe=J({__name:"JSONTreeEditLavel",props:{k:{},v:{}},setup(w){const d=W();return(v,c)=>(L(),E("div",re,[$("div",{style:R({color:s(d).primaryColor})},b(v.k)+": ",5),N("   "),$("div",null,b(v.v),1)]))}}),se=J({__name:"JSONTreeEdit",props:{data:{}},emits:["change"],setup(w,{emit:d}){const v=w,c=d,{data:p}=P(v),m=z(()=>n(p.value));function n(e,u=[]){return Array.isArray(e)?e.map((t,o)=>{const f=[...u,String(o)];return typeof t=="object"||Array.isArray(t)?{key:f.join("."),prefix:()=>i(o.toString()),children:n(t,[...u,String(o)]),value:t,onUpdateValue:_=>{e[o]=_,c("change")}}:{key:f.join("."),prefix:()=>i(o.toString(),o.toString()),value:t,onUpdateValue:_=>{e[o]=_,c("change")}}}):typeof e=="object"?Object.entries(e).map(([t,o])=>{const f=[...u,t];return typeof o=="object"||Array.isArray(o)?{key:f.join("."),prefix:()=>i(t,`${l(t)}`),children:n(o,f),value:o,onUpdateValue:_=>{e[t]=_,c("change")}}:{key:f.join("."),prefix:()=>i(t,`${l(t)}`),value:o,onUpdateValue:_=>{e[t]=_,c("change")}}}):[]}function i(e,u){return h(oe,{k:e,v:u})}function V({option:e}){if(typeof e.value=="string")return h(k,{value:e.value,onUpdateValue:e.onUpdateValue,type:"textarea",rows:1},{});if(typeof e.value=="number")return h(X,{value:e.value,onUpdateValue:e.onUpdateValue,rows:1},{});if(typeof e.value=="object")return h(k,{value:D(e.value),onUpdateValue:u=>{var t;(t=e.onUpdateValue)==null||t.call(e,JSON.parse(u))},type:"textarea",rows:1},{})}return(e,u)=>{const t=Y;return L(),A(t,{class:"tree","block-line":"",data:s(m),"expand-on-click":"",selectable:"",renderSuffix:V},null,8,["data"])}}}),le=T(se,[["__scopeId","data-v-fed19ba7"]]),ie=J({__name:"LanguageSettingsView",setup(w){const d=q(),v=ee();logger.info();const c=y(!1),p=y(!1),m=y(H.global.locale),n=y({}),i=y(""),V=y(Array.from(M(),a=>({label:`${a}: ${l(a)}`,value:a})));e(m.value),F(n,()=>{i.value=D(n.value)},{immediate:!0});async function e(a){logger.debug("设置",a);try{if(p.value){v.warning({title:l("warning"),content:l("do_you_want_to_discard_the_changes"),positiveText:l("yes"),negativeText:l("no"),onPositiveClick:async()=>{await f(a)},onNegativeClick:()=>{x()}});return}await f(a)}catch{}}function u(){try{n.value=JSON.parse(i.value),x(),p.value=!0,c.value=!1}catch(a){d.error(String(a))}}function t(){x(),K(n.value),d.success(l("success")),p.value=!1}function o(){Q(m.value),d.success(l("success"))}async function f(a){try{const r=await G(a);if(logger.debug("_localConfig",r),r){n.value=O(r),p.value=!1;return}}catch{}_(n.value,a)}function _(a,r){n.value=O(a),n.value.name=r,p.value=!0}function O(a){return JSON.parse(JSON.stringify(a))}function x(){n.value.name?m.value=n.value.name:n.value.name=m.value}return(a,r)=>{const I=Z,U=te,j=ae;return L(),A(s(ne),null,{default:S(()=>[g(j,{vertical:""},{default:S(()=>[g(I,{value:s(m),"onUpdate:value":r[0]||(r[0]=C=>B(m)?m.value=C:null),onChange:e,options:s(V),tag:"",filterable:"",clearable:""},null,8,["value","options"]),g(s(k),{type:"textarea",value:s(i),"onUpdate:value":r[1]||(r[1]=C=>B(i)?i.value=C:null),onChange:r[2]||(r[2]=C=>c.value=!0)},null,8,["value"]),g(j,null,{default:S(()=>[g(U,{onClick:u,type:"primary",disabled:!s(c)},{default:S(()=>[N(b(s(l)("parse")),1)]),_:1},8,["disabled"]),g(U,{onClick:t,type:"primary",disabled:!s(p)},{default:S(()=>[N(b(s(l)("save")),1)]),_:1},8,["disabled"]),g(U,{onClick:o,type:"error"},{default:S(()=>[N(b(s(l)("delete")),1)]),_:1})]),_:1}),g(le,{onChange:r[3]||(r[3]=C=>p.value=!0),data:s(n)},null,8,["data"])]),_:1})]),_:1})}}}),Ke=T(ie,[["__scopeId","data-v-cee7a636"]]);export{Ke as default};
