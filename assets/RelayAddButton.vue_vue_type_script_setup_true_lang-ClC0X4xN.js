import{u as W}from"./RelayInfoView-YGg7axqY.js";import{E as D}from"./Ellipsis-0EM5UHUc.js";import{a3 as y,o as t,B as p,E as f,f as w,al as b,L as v,an as Q,j as q,R as K,k as z,n as u,w as _,q as e,_ as E,z as H,m as d,A as B,ar as O,as as R,at as G,au as S,av as J,aw as X,ax as Y,ao as N,r as A,y as Z,C as ee,F as te,S as ne}from"./index-DVMYH3P6.js";import{C as oe,u as se,Q as le}from"./ProvideEventLine-BcjESPsS.js";import{N as k}from"./Icon-affED87R.js";import{b as P}from"./Button-Czpa3xjC.js";import{u as re}from"./use-theme-vars-Cj3ejyij.js";import{_ as ce,a as ae}from"./ListItem-Cp5hsImF.js";import{_ as ie}from"./Spin-D-ja7p5P.js";import{_ as ue}from"./Empty-CBIm7nuM.js";const _e={},pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},fe=f("path",{d:"M15.9 5c-.17 0-.32.09-.41.23l-.07.15l-5.18 11.65c-.16.29-.26.61-.26.96c0 1.11.9 2.01 2.01 2.01c.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM2.06 10.06c.51.51 1.33.55 1.89.09c2.76-2.26 6.24-3.18 9.58-2.76l1.19-2.68c-4.35-.78-8.96.3-12.57 3.25c-.64.53-.68 1.51-.09 2.1zm19.88 0c.59-.59.55-1.57-.1-2.1a15.393 15.393 0 0 0-4.44-2.53l-.53 2.82c1.13.47 2.19 1.09 3.17 1.89c.58.46 1.39.43 1.9-.08zm-4.03 4.03c.6-.6.56-1.63-.14-2.12c-.46-.33-.94-.61-1.44-.86l-.55 2.92c.11.07.22.14.32.22c.57.4 1.33.32 1.81-.16zm-11.83-.01c.5.5 1.27.54 1.85.13c.94-.66 2.01-1.06 3.1-1.22l1.28-2.88c-2.13-.06-4.28.54-6.09 1.84c-.69.51-.74 1.53-.14 2.13z",fill:"currentColor"},null,-1),de=[fe];function me(o,s){return t(),p("svg",pe,de)}const ve=y(_e,[["render",me]]),he={},we={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},xe=f("path",{d:"M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM1 8h2v11h3V5H1v3zm17.5 3c-.83 0-1.5.68-1.5 1.5v2c0 .82.67 1.5 1.5 1.5H21v1h-4v2h4.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H19v-1h4v-2h-4.5z",fill:"currentColor"},null,-1),ge=[xe];function $e(o,s){return t(),p("svg",we,ge)}const ye=y(he,[["render",$e]]),ke={},Ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},be=f("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zm0 5h2v2h-2z",fill:"currentColor"},null,-1),ze=[be];function Be(o,s){return t(),p("svg",Ce,ze)}const Le=y(ke,[["render",Be]]),Ve=w({__name:"Ping",props:{url:{}},setup(o){const s={},c=b(o,"url");let a=v(!1),l=v(!1),n=v(null);const i=v(1e4),x=v(500),g=v(null),T=oe(g);let h=v(!1);function L(M=!1){if(c.value&&!n.value){h.value=!0;try{let m=new URL(c.value).host;if(M&&(R(`p:${m}`),R(`pe:${m}`)),G(`pe:${m}`,S)){h.value=!1,l.value=!0;return}Promise.resolve(J(`p:${m}`,()=>X(m,i.value),{cacheError:!1})).then($=>{n.value=$,h.value=!1}).catch($=>{Y(`pe:${m}`,!0,S),h.value=!1,l.value=!0})}catch{a.value=!0,h.value=!1}}}const U=Q(L),F=Symbol(),C=q(F,()=>null,!0);K(()=>{T.value&&((C==null?void 0:C.value)??s.autoPing)&&U()});const V=z(()=>n.value?n.value>=i.value?255:n.value<=x.value?0:Math.floor(n.value/(i.value-x.value)*255):0);function j(){n.value=null,L(!0)}return(M,m)=>{const $=k,I=P;return t(),p("div",{key:e(c),ref_key:"target",ref:g,class:"rounded-full text-center felx items-center justify-center"},[u(I,{text:"",round:"",onClick:O(j,["stop"]),loading:e(h)},{default:_(()=>[e(n)?(t(),p("span",{key:0,style:E({fontSize:"0.5em",color:`rgb(${e(V)},${255-e(V)},0)`})},H(e(n)),5)):e(a)?(t(),d($,{key:1,color:"red"},{default:_(()=>[u(Le)]),_:1})):e(l)?(t(),d($,{key:2,color:"orange"},{default:_(()=>[u(ye)]),_:1})):e(h)?B("",!0):(t(),d($,{key:3,color:"#3742fa"},{default:_(()=>[u(ve)]),_:1}))]),_:1},8,["loading"])])}}}),Me={class:"flex w-full"},Re=w({__name:"RelayUrlShow",props:{url:{}},setup(o){const s=o,{url:r}=N(s),c=re(),{toRelayInfoView:a}=W(),l=v(!1);return(n,i)=>(t(),p("div",null,[e(r)?(t(),p("div",{key:0,class:"flex w-full button",onClick:i[0]||(i[0]=()=>e(a)(e(r))),onMouseenter:i[1]||(i[1]=()=>l.value=!0),onMouseleave:i[2]||(i[2]=()=>l.value=!1),style:E({color:e(l)?e(c).successColorHover:void 0})},[f("span",Me,[A(n.$slots,"default",{class:"w-0 flex-1 flex-shrink"},()=>[u(D,null,{default:_(()=>[Z(H(e(r)),1)]),_:1})]),u(Ve,{class:"shrink-0",url:e(r)},null,8,["url"])])],36)):B("",!0)]))}}),Se={key:0,class:"w-full h-28 flex justify-center items-center"},Ee={class:"flex items-center flex-shrink-0 w-max"},it=w({__name:"RelayConnectList",props:{urls:{},title:{},loadable:{type:Boolean}},setup(o){const s=o;N(s);const r=z(()=>s.urls[Symbol.iterator]().next().done===!0);return(c,a)=>{const l=ie,n=ue,i=ae,x=ce;return t(),d(x,{class:"w-full transparent"},{default:_(()=>[s.loadable&&e(r)?(t(),p("div",Se,[u(l,{size:"large"})])):e(r)?(t(),d(n,{key:1,size:"large",description:c.t("empty_text")},null,8,["description"])):B("",!0),(t(!0),p(te,null,ee(s.urls,g=>(t(),d(i,{class:"flex",key:g},{suffix:_(()=>[f("div",Ee,[A(c.$slots,"right",{url:g})])]),default:_(()=>[u(Re,{url:g},null,8,["url"])]),_:2},1024))),128))]),_:3})}}}),He={},Ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Ae=f("g",{fill:"none"},[f("path",{d:"M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007z",fill:"currentColor"})],-1),Pe=[Ae];function Te(o,s){return t(),p("svg",Ne,Pe)}const Ue=y(He,[["render",Te]]),ut=w({__name:"RelayReadableButton",props:{active:{type:Boolean}},setup(o){const r=b(o,"active");return(c,a)=>{const l=k;return t(),d(l,{class:"mr-2",color:e(r)?"#2ed573":void 0,onClick:a[0]||(a[0]=()=>c.$emit("switch"))},{default:_(()=>[u(Ue)]),_:1},8,["color"])}}}),Fe={},je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Ie=f("g",{fill:"none"},[f("path",{d:"M3.75 2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5zm4.78 2.72a.75.75 0 0 0-1.06 0L4.22 7.97a.75.75 0 0 0 1.06 1.06l1.97-1.97v6.19a.75.75 0 0 0 1.5 0V7.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L8.53 4.72z",fill:"currentColor"})],-1),We=[Ie];function De(o,s){return t(),p("svg",je,We)}const Qe=y(Fe,[["render",De]]),_t=w({__name:"RelayWritableButton",props:{active:{type:Boolean}},setup(o){const r=b(o,"active");return(c,a)=>{const l=Qe,n=k;return t(),d(n,{class:"mr-1",color:e(r)?"#2ed573":void 0,onClick:a[0]||(a[0]=()=>c.$emit("switch"))},{default:_(()=>[u(l)]),_:1},8,["color"])}}}),qe={},Ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Oe=f("g",{fill:"none"},[f("path",{d:"M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75z",fill:"currentColor"})],-1),Ge=[Oe];function Je(o,s){return t(),p("svg",Ke,Ge)}const Xe=y(qe,[["render",Je]]),Ye=w({__name:"AddButton",props:{disabled:{type:Boolean}},emits:["click"],setup(o,{emit:s}){const r=o,c=s;return(a,l)=>{const n=k,i=P;return t(),d(i,{disabled:r.disabled,circle:"",text:"",type:"primary",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:l[0]||(l[0]=x=>c("click",x))},{icon:_(()=>[u(n,null,{default:_(()=>[u(Xe)]),_:1})]),_:1},8,["disabled"])}}}),pt=w({__name:"RelayAddButton",props:{url:{}},setup(o){let r=se(le.Staff).relayConfigurator,c=o;ne();let a=z(()=>r.hasReadByUrl(c.url)||r.hasWriteByUrl(c.url));return(l,n)=>(t(),d(Ye,{disabled:e(a),onClick:n[0]||(n[0]=()=>{e(r).addWriteRead(l.url),l.$emit("click")})},null,8,["disabled"]))}});export{it as _,_t as a,ut as b,Ye as c,pt as d};
