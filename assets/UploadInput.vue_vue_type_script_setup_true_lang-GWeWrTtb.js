import{_ as v}from"./UploadButton.vue_vue_type_script_setup_true_lang-DLAEcrTL.js";import{f as h,ao as g,k,o as n,B,E as l,n as c,q as s,U,m as R,A as x}from"./index-DVMYH3P6.js";import{_ as N}from"./Input-Bl1B22BO.js";import{_ as V}from"./Image-Dkv-cPOO.js";const y={class:"flex"},C={class:"mt-1"},A=h({__name:"UploadInput",props:{placeholder:{},value:{}},emits:["update:value"],setup(r,{emit:u}){const t=r,p=u,{placeholder:m}=g(t),e=k({get(){return t.value??""},set(o){p("update:value",o)}});function _(o){e.value=o.url}return(o,a)=>{const d=N,i=V;return n(),B("div",null,[l("div",y,[c(d,{placeholder:s(m),value:s(e),"onUpdate:value":a[0]||(a[0]=f=>U(e)?e.value=f:null),class:"mr-2"},null,8,["placeholder","value"]),c(v,{onUploadResult:_})]),l("div",C,[s(e)?(n(),R(i,{key:0,class:"m-0 rounded-md",imgProps:{style:{width:"100%"}},src:s(e)},null,8,["src"])):x("",!0)])])}}});export{A as _};
