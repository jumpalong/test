import{_ as v}from"./UploadButton.vue_vue_type_script_setup_true_lang.5680e884.js";import{f,bD as h,n as g,y as l,I as R,aV as t,H as u,C as o,bR as k,z as B,G as U,da as V}from"./index.271bc2a1.js";import{_ as x}from"./Input.7210c329.js";const y={class:"flex"},C={class:"mt-1"},$=f({__name:"UploadInput",props:{placeholder:null,value:null},emits:["update:value"],setup(c,{emit:r}){const s=c,{placeholder:p}=h(s),a=g({get(){var e;return(e=s.value)!=null?e:""},set(e){r("update:value",e)}});function _(e){a.value=e.url}return(e,n)=>{const d=x,m=V;return l(),R("div",null,[t("div",y,[u(d,{placeholder:o(p),value:o(a),"onUpdate:value":n[0]||(n[0]=i=>k(a)?a.value=i:null),class:"mr-2"},null,8,["placeholder","value"]),u(v,{onUploadResult:_})]),t("div",C,[o(a)?(l(),B(m,{key:0,class:"m-0 rounded-md",imgProps:{style:{width:"100%"}},src:o(a)},null,8,["src"])):U("",!0)])])}}});export{$ as _};
