import{cX as h,f as c,aO as s,C as r,y as u,z as m,A as a,H as w,cd as p}from"./index.0e420a7a.js";import{c as _}from"./use.7b5663cd.js";import{_ as $,a as b}from"./DrawerContent.1892dd15.js";const[g,v]=_(()=>({id:`d-${h()}`})),S=c({__name:"DrawerProvide",setup(e){const{id:n}=g();return(o,l)=>s(o.$slots,"default",{id:r(n)})}}),C=c({__name:"Drawer",props:{show:{type:Boolean},width:{default:"100%"},height:{default:100},placement:{default:"bottom"},title:{default:""},closable:{type:Boolean}},emits:["update:show"],setup(e,{emit:n}){var l;const{id:o}=(l=v())!=null?l:{};return(t,d)=>{const i=$,f=b;return u(),m(f,{show:e.show,"onUpdate:show":d[0]||(d[0]=k=>n("update:show",!e.show)),width:e.width,height:e.height,placement:e.placement,"trap-focus":!1,"block-scroll":!1,to:r(o)?`#${r(o)}`:void 0},{default:a(()=>[w(i,{title:e.title,closable:e.closable},p({default:a(()=>[s(t.$slots,"default")]),_:2},[t.$slots.header?{name:"header",fn:a(()=>[s(t.$slots,"header")]),key:"0"}:void 0,t.$slots.footer?{name:"footer",fn:a(()=>[s(t.$slots,"footer")]),key:"1"}:void 0]),1032,["title","closable"])]),_:3},8,["show","width","height","placement","to"])}}});export{C as _,S as a};
