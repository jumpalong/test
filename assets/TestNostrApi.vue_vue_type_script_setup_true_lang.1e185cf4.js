import{f as x,V as _,aI as y,A as e,L as c,B as u,C as s,D as i,O as r,M as C,F as p,J as N,H as B,I as T,Q as t,bd as V,X as w,_ as A,be as D}from"./index.243f7ff1.js";import{_ as L,a as F}from"./Checkbox.92fb7b90.js";const J=x({__name:"TestNostrApi",props:{disabled:{type:Boolean},nostr:null},emits:["test"],setup(o,{emit:m}){const d=o,a=_(!1),n=_([]),f=y();async function b(){m("test"),a.value=!0,n.value=[],f.info({title:t("note"),content:t("authorized_form_test_note"),positiveText:t("yes"),onPositiveClick:()=>V(n.value,d.nostr)})}return(I,z)=>{const v=F,g=w,k=L,h=A;return e(),c(r,null,[a.value?(e(),u(k,{key:0,value:n.value},{default:s(()=>[i(g,null,{default:s(()=>[(e(!0),c(r,null,C(p(D),l=>(e(),u(v,{value:l,label:l},null,8,["value","label"]))),256))]),_:1})]),_:1},8,["value"])):N("",!0),i(h,{onClick:b,disabled:o.disabled,class:"w-full",type:"primary"},{default:s(()=>[B(T(p(t)("test")),1)]),_:1},8,["disabled"])],64)}}});export{J as _};
