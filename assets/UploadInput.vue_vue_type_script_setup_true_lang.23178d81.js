import{_ as v}from"./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js";import{f,bw as h,n as g,y as l,I as k,aP as t,H as u,C as s,bG as B,z as R,G as U,cY as x}from"./index.0e420a7a.js";import{_ as y}from"./Input.4bb7b199.js";const C={class:"flex"},N={class:"mt-1"},G=f({__name:"UploadInput",props:{placeholder:null,value:null},emits:["update:value"],setup(c,{emit:r}){const a=c,{placeholder:p}=h(a),o=g({get(){var e;return(e=a.value)!=null?e:""},set(e){r("update:value",e)}});function _(e){o.value=e.url}return(e,n)=>{const d=y,m=x;return l(),k("div",null,[t("div",C,[u(d,{placeholder:s(p),value:s(o),"onUpdate:value":n[0]||(n[0]=i=>B(o)?o.value=i:null),class:"mr-2"},null,8,["placeholder","value"]),u(v,{onUploadResult:_})]),t("div",N,[s(o)?(l(),R(m,{key:0,class:"m-0 rounded-md",imgProps:{style:{width:"100%"}},src:s(o)},null,8,["src"])):U("",!0)])])}}});export{G as _};
