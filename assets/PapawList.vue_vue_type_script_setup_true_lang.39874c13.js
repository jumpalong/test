import{c as k,k as N}from"./use.b9e0cb1d.js";import{f as V,e as z,P as A,g as C,h as j}from"./Content.2b6a65a8.js";import{f as w,n as c,aM as O,y as o,I as r,L as h,J as T,C as l,H as d,A as v,D,F as R,G as x,_ as L,z as f,O as I,bD as S,av as B,aU as g,bA as F,aV as b,b2 as H}from"./index.dd8c0757.js";import{N as J}from"./Icon.728af6b3.js";const[pe,U]=k(e=>({useTree:e})),W={key:0,class:"w-full flex justify-center items-center py-2"},q=w({__name:"PapawTreeReply",props:{event:null,noTree:{type:Boolean}},setup(e){const s=e,n=c(()=>s.event.id),a=5,t=c(()=>z({limit:a,filters:[{"#e":[n.value],kinds:[1,30023]}]}).addStaffOfSortByCreateAt()),i=c(()=>t.value.getList()),u=V();O(()=>{u!=null&&u.parents.value.has(n.value)&&u.focusEvent.value&&t.value.pushEvent(u.focusEvent.value)});const _=c(()=>{var m;return(m=i.value.length)!=null?m:0});return(m,y)=>{const P=L;return o(),r(h,null,[(o(!0),r(h,null,T(l(i),p=>(o(),f($,{event:p},null,8,["event"]))),256)),l(_)>0?(o(),r("div",W,[d(P,{class:"w-full",text:"",onClick:y[0]||(y[0]=()=>l(t).feat.load())},{default:v(()=>[D(R(l(I)("load_more")),1)]),_:1})])):x("",!0)],64)}}}),[G,K]=k(e=>({withEventSet:e})),Q=w({__name:"PapawTreeWithEvent",props:{id:null},setup(e){const s=e,{id:n}=S(s),a=B(!1),t=K();return t?a.value=!t.withEventSet.value.has(n.value):(G(B(new Set().add(n.value))),a.value=!0),a.value&&(t==null||t.withEventSet.value.add(n.value)),(i,u)=>(o(),r(h,null,[a.value?g(i.$slots,"default",{key:0}):x("",!0),g(i.$slots,"else")],64))}}),$=w({__name:"PapawTree",props:{event:null,deleteEvent:null,withPapawOptionsButtons:{type:Boolean,default:!0}},setup(e){var t;const s=e,{event:n}=S(s),a=B();return(t=a.value)==null||t.scrollToPapaw(),(i,u)=>(o(),f(Q,{id:l(n).id},{default:v(()=>[d(A,{disabledReply:"",event:l(n),ref:a.value,"onUpdate:ref":u[0]||(u[0]=_=>a.value=_)},{reply:v(()=>[d(q,{event:l(n)},null,8,["event"])]),_:1},8,["event"])]),_:1},8,["id"]))}}),X=w({__name:"MayBeTreePapaw",props:{event:null,withPapawOptionsButtons:{type:Boolean},disabledReply:{type:Boolean}},setup(e){var n;const{useTree:s}=(n=U())!=null?n:{};return(a,t)=>l(s)?(o(),f($,{key:0,event:e.event,withPapawOptionsButtons:e.withPapawOptionsButtons},null,8,["event","withPapawOptionsButtons"])):(o(),f(A,{key:1,withPapawOptionsButtons:e.withPapawOptionsButtons,event:e.event,disabledReply:e.disabledReply},null,8,["withPapawOptionsButtons","event","disabledReply"]))}}),Y={},Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ee=b("g",{fill:"none"},[b("path",{d:"M9.516 6a.5.5 0 0 0 0 1h2.777l-4.147 4.146a.5.5 0 0 0 .708.708L13 7.707v2.777a.5.5 0 0 0 1 0V6.5a.5.5 0 0 0-.5-.5H9.516zm3.25 11a2.5 2.5 0 0 0 2.47-2.11A2.501 2.501 0 0 0 17 12.5v-7A2.5 2.5 0 0 0 14.5 3h-7a2.501 2.501 0 0 0-2.4 1.797A2.5 2.5 0 0 0 3 7.266V13.5A3.5 3.5 0 0 0 6.5 17h6.266zM4 7.266A1.5 1.5 0 0 1 5 5.85V12.5A2.5 2.5 0 0 0 7.5 15h6.68a1.5 1.5 0 0 1-1.414 1H6.5A2.5 2.5 0 0 1 4 13.5V7.266zM7.5 4h7A1.5 1.5 0 0 1 16 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 6 12.5v-7A1.5 1.5 0 0 1 7.5 4z",fill:"currentColor"})],-1),te=[ee];function ne(e,s){return o(),r("svg",Z,te)}const ae=F(Y,[["render",ne]]),se=w({__name:"NewMessage",setup(e){let s=C();const n=s!=null?s:j({jumpList:B([])}),a=c(()=>n.jumpList.value);function t(){const p=a.value.shift();!p||p()}const i=c(()=>a.value.length>0),{show:u,hidden:_,transitionActive:m,safeActive:y,duration:P}=N(600);return O(()=>{i.value?u():_()}),(p,oe)=>{const E=J,M=L;return o(),r(h,null,[g(p.$slots,"default"),l(y)&&!l(s)?(o(),f(M,{key:0,class:"fixed bottom-3 right-4 px-2",style:H({transform:l(m)?"translate(0%,0%)":"translate(150%,0%)",transition:`transform ${l(P)}ms ease`}),quaternary:"",type:"primary",size:"large",round:"",onClick:t},{default:v(()=>[b("span",null,R(l(a).length),1),d(E,{size:30},{default:v(()=>[d(ae)]),_:1})]),_:1},8,["style"])):x("",!0)],64)}}}),ce=w({__name:"PapawList",props:{eventList:null,withPapawOptionsButtons:{type:Boolean},disabledReply:{type:Boolean}},emits:["eventDeletion"],setup(e,{emit:s}){return(n,a)=>(o(),f(se,null,{default:v(()=>[(o(!0),r(h,null,T(e.eventList,t=>(o(),r("div",{key:t.id},[d(X,{event:t,withPapawOptionsButtons:e.withPapawOptionsButtons,disabledReply:e.disabledReply},null,8,["event","withPapawOptionsButtons","disabledReply"])]))),128))]),_:1}))}});export{ce as _,$ as a,q as b};
