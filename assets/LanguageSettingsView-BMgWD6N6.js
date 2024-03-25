import{f as J,o as L,B as E,E as j,z as C,$ as R,q as s,y as N,am as z,k as P,a5 as l,h,m as B,_ as T,S as q,L as y,a8 as H,a9 as M,H as F,az as G,w as S,n as g,U as A,aA as K,aB as Q}from"./index-Bp8Ru9nj.js";import{p as I}from"./utils-Bn9avYFz.js";import{u as W}from"./use-theme-vars-CgboMLjC.js";import{N as X}from"./InputNumber-XDaP2vrd.js";import{_ as Y}from"./Tree-CJnU2Fc_.js";import{_ as k}from"./Input-uRxkwxbK.js";import{_ as Z}from"./Select-DQ__-t63.js";import{u as ee}from"./composables-Den7Xj81.js";import{b as te}from"./Button-DF3Ei97P.js";import{_ as ae}from"./Space-D7Gj9TeE.js";import{N as ne}from"./Scrollbar-DlbzZyTV.js";import"./use-rtl-gkSu3eK_.js";import"./use-locale-DHyx6amc.js";import"./Scrollbar-Bcd6cbpf.js";import"./use-css-vars-class-DV7GkkKb.js";import"./Icon-C2DldZ3i.js";import"./Add-b3eAxPp_.js";import"./Checkbox-Bvv02CAZ.js";import"./use-compitable-BZNVtFY-.js";import"./render-n15ElYMw.js";import"./is-browser-Ki2-8vi-.js";import"./create-DlBt9mlr.js";import"./index-vZmvdULR.js";import"./fade-in-height-expand.cssr-BOUpW_kQ.js";import"./VirtualList-ZJmNvtbX.js";import"./Empty-oWNKc7k_.js";import"./replaceable-B2OdU2Vz.js";import"./fade-in-scale-up.cssr-YaysNU6q.js";import"./Tag-D0_dwZG-.js";import"./Close-sZEX0j0N.js";import"./Close-B84N3VcG.js";import"./index-N-meOqUd.js";import"./Popover-CWXHRS55.js";import"./Follower-BLKhK3H2.js";import"./format-length-B-p6aW7q.js";import"./SelectMenu-C3SZ63_i.js";import"./Checkmark-BkVyw1xN.js";import"./index-DsSU6HIH.js";import"./get-slot-Bk_rJcZu.js";const re={class:"flex flex-wrap"},oe=J({__name:"JSONTreeEditLavel",props:{k:{},v:{}},setup(w){const d=W();return(v,c)=>(L(),E("div",re,[j("div",{style:R({color:s(d).primaryColor})},C(v.k)+": ",5),N("   "),j("div",null,C(v.v),1)]))}}),se=J({__name:"JSONTreeEdit",props:{data:{}},emits:["change"],setup(w,{emit:d}){const v=w,c=d,{data:p}=z(v),m=P(()=>n(p.value));function n(e,u=[]){return Array.isArray(e)?e.map((t,o)=>{const f=[...u,String(o)];return typeof t=="object"||Array.isArray(t)?{key:f.join("."),prefix:()=>i(o.toString()),children:n(t,[...u,String(o)]),value:t,onUpdateValue:_=>{e[o]=_,c("change")}}:{key:f.join("."),prefix:()=>i(o.toString(),o.toString()),value:t,onUpdateValue:_=>{e[o]=_,c("change")}}}):typeof e=="object"?Object.entries(e).map(([t,o])=>{const f=[...u,t];return typeof o=="object"||Array.isArray(o)?{key:f.join("."),prefix:()=>i(t,`${l(t)}`),children:n(o,f),value:o,onUpdateValue:_=>{e[t]=_,c("change")}}:{key:f.join("."),prefix:()=>i(t,`${l(t)}`),value:o,onUpdateValue:_=>{e[t]=_,c("change")}}}):[]}function i(e,u){return h(oe,{k:e,v:u})}function V({option:e}){if(typeof e.value=="string")return h(k,{value:e.value,onUpdateValue:e.onUpdateValue,type:"textarea",rows:1},{});if(typeof e.value=="number")return h(X,{value:e.value,onUpdateValue:e.onUpdateValue,rows:1},{});if(typeof e.value=="object")return h(k,{value:I(e.value),onUpdateValue:u=>{var t;(t=e.onUpdateValue)==null||t.call(e,JSON.parse(u))},type:"textarea",rows:1},{})}return(e,u)=>{const t=Y;return L(),B(t,{class:"tree","block-line":"",data:s(m),"expand-on-click":"",selectable:"",renderSuffix:V},null,8,["data"])}}}),le=T(se,[["__scopeId","data-v-fed19ba7"]]),ie=J({__name:"LanguageSettingsView",setup(w){const d=q(),v=ee();logger.info();const c=y(!1),p=y(!1),m=y(H.global.locale),n=y({}),i=y(""),V=y(Array.from(M(),a=>({label:`${a}: ${l(a)}`,value:a})));e(m.value),F(n,()=>{i.value=I(n.value)},{immediate:!0});async function e(a){logger.debug("设置",a);try{if(p.value){v.warning({title:l("warning"),content:l("do_you_want_to_discard_the_changes"),positiveText:l("yes"),negativeText:l("no"),onPositiveClick:async()=>{await f(a)},onNegativeClick:()=>{x()}});return}await f(a)}catch{}}function u(){try{n.value=JSON.parse(i.value),x(),p.value=!0,c.value=!1}catch(a){d.error(String(a))}}function t(){x(),K(n.value),d.success(l("success")),p.value=!1}function o(){Q(m.value),d.success(l("success"))}async function f(a){try{const r=await G(a);if(logger.debug("_localConfig",r),r){n.value=O(r),p.value=!1;return}}catch{}_(n.value,a)}function _(a,r){n.value=O(a),n.value.name=r,p.value=!0}function O(a){return JSON.parse(JSON.stringify(a))}function x(){n.value.name?m.value=n.value.name:n.value.name=m.value}return(a,r)=>{const D=Z,U=te,$=ae;return L(),B(s(ne),null,{default:S(()=>[g($,{vertical:""},{default:S(()=>[g(D,{value:s(m),"onUpdate:value":r[0]||(r[0]=b=>A(m)?m.value=b:null),onChange:e,options:s(V),tag:"",filterable:"",clearable:""},null,8,["value","options"]),g(s(k),{type:"textarea",value:s(i),"onUpdate:value":r[1]||(r[1]=b=>A(i)?i.value=b:null),onChange:r[2]||(r[2]=b=>c.value=!0)},null,8,["value"]),g($,null,{default:S(()=>[g(U,{onClick:u,type:"primary",disabled:!s(c)},{default:S(()=>[N(C(s(l)("parse")),1)]),_:1},8,["disabled"]),g(U,{onClick:t,type:"primary",disabled:!s(p)},{default:S(()=>[N(C(s(l)("save")),1)]),_:1},8,["disabled"]),g(U,{onClick:o,type:"error"},{default:S(()=>[N(C(s(l)("delete")),1)]),_:1})]),_:1}),g(le,{onChange:r[3]||(r[3]=b=>p.value=!0),data:s(n)},null,8,["data"])]),_:1})]),_:1})}}}),Ke=T(ie,[["__scopeId","data-v-cee7a636"]]);export{Ke as default};
