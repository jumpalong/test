import{f as d,aL as p,k as _,n as e,o as s,z as n,x as r,ax as f,C as i,l as h}from"./index.8f62a545.js";import{r as k}from"./use.b23b6c29.js";import{r as l}from"./nostr.c03670ae.js";import{_ as x}from"./RelayConnectList.vue_vue_type_script_setup_true_lang.2443e1f7.js";const y={key:0},g={key:1},B={key:2},T={key:3},C={key:4},$=d({__name:"DateTime",props:{secondTimestamp:null},setup(a){const c=a,{secondTimestamp:t}=p(c),u=k(),o=_(()=>u.value-t.value),m=_(()=>f.global.d(new Date(t.value*1e3),"short"));return(R,S)=>e(o)>=60*60*24?(s(),n("span",y,r(e(m)),1)):e(o)<60?(s(),n("span",g,r(e(i)("x_seconds_ago",{x:e(o)})),1)):e(o)<3600?(s(),n("span",B,r(e(i)("x_minutes_ago",{x:Math.floor(e(o)/60)})),1)):e(o)<60*60*24?(s(),n("span",T,r(e(i)("x_hours_ago",{x:Math.floor(e(o)/60/60)})),1)):(s(),n("span",C,r(e(m)),1))}}),M=d({__name:"RelayAddButton",props:{url:null},setup(a){return(c,t)=>(s(),h(x,{disabled:e(l).hasReadByUrl(a.url)||e(l).hasWriteByUrl(a.url),onClick:t[0]||(t[0]=()=>{e(l).addWriteRead(a.url),c.$emit("click")})},null,8,["disabled"]))}});export{$ as _,M as a};