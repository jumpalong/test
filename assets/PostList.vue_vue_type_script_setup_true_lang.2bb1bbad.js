import{c as D,e as z}from"./event.c21dbdbc.js";import{_ as A}from"./PapawList.vue_vue_type_script_setup_true_lang.3de6e02d.js";import{f as R,bD as O,n as u,C as n,y as o,z as L,G as y,bz as $,bu as F,av as b,I as f,H as P,L as I,J as j,aL as G,O as N}from"./index.271bc2a1.js";import{g as U}from"./use.07d5e992.js";import{P as V,e as q,f as H}from"./Content.7dccab19.js";import{t as x}from"./nostr.326d6965.js";import{u as J}from"./Scrollbar.b9717515.js";import{_ as M}from"./RelayInfoView.95bfdda2.js";import{_ as T}from"./Empty.f48bf955.js";const K=R({__name:"PapawByAddr",props:{naddr:null,a:null},setup(l){const g=l,{naddr:p,a:r}=O(g),s=u(()=>p!=null&&p.value?x(p.value):r!=null&&r.value?x(r.value):null),i=u(()=>s.value&&D(s.value)),d=u(()=>i.value&&i.value.feat.getLatestEvent());return(_,m)=>n(d)?(o(),L(V,{key:0,event:n(d)},null,8,["event"])):y("",!0)}}),Q={key:0,class:"py-20 flex items-center justify-center"},W={key:1,class:"h-40 flex justify-center items-center"},le=R({__name:"PostList",props:{urls:null,pubkeys:null,filter:null,filters:null,pushEvent:null,active:{type:Boolean,default:!0},disabledLoad:{type:Boolean},disabledEmpty:{type:Boolean},limit:null,reverseSort:{type:Boolean},disabledReply:{type:Boolean},tags:null},emits:["update:pushEvent"],setup(l,{expose:g,emit:p}){const r=l;logger.for("home.vue").for("PostList.vue").info("\u8FDB\u5165PostList.vue");const{pubkeys:s,filter:i,filters:d,urls:_,active:m}=O(r);$(),logger.for("home.vue").for("PostList.vue").debug("defineProps > pubkey:",s);const B=u(()=>{const e=d!=null&&d.value?[...d.value]:[];return i!=null&&i.value&&e.push(i.value),s!=null&&s.value&&e.push(...s.value.map(t=>({kinds:[30023,1],authors:[t]}))),e}),C=u(()=>{var e;return[...(e=s==null?void 0:s.value)!=null?e:[],...B.value.map(t=>{var h;return(h=t.authors)!=null?h:[]}).flat(1)]}),c=u(()=>{const e={};if(B.value.length===0)return;const t=q({filters:B.value,...e,addUrls:_==null?void 0:_.value,pubkeys:C.value,limit:r.limit});return r.reverseSort&&t.addStaffOfSortByCreateAt(),t}),S=J(c,m);F(()=>{var e;(e=c.value)==null||e.closeReq()});const v=u(()=>{var e;return(e=c.value)==null?void 0:e.getList()});p("update:pushEvent",e=>{var t;(t=c.value)==null||t.pushEvent(e)});const k=u(()=>{var e,t;return((e=c.value)==null?void 0:e.feat.loadBufferOpt.isLoading)||((t=c.value)==null?void 0:t.feat.refreshBufferOpt.isLoading)});g({postEvents:v,...S});const E=b(void 0);return U(E,{active:m!=null?m:b(!0)}),b(G()),(e,t)=>{const h=M,w=T;return o(),f("div",{ref_key:"divRef",ref:E},[!l.disabledLoad&&n(k)&&n(v)&&n(v).length===0?(o(),f("div",Q,[P(h,{size:"medium"})])):!l.disabledEmpty&&!n(k)&&n(v)&&n(v).length===0?(o(),f("div",W,[P(w,{description:n(N)("empty_text"),size:"huge"},null,8,["description"])])):y("",!0),l.tags?(o(!0),f(I,{key:2},j(l.tags,a=>(o(),f("div",null,[a[0]==="e"&&a[1]?(o(),L(H,{key:0,id:a[1],relays:a[2]?new Set([a[2]]):void 0},null,8,["id","relays"])):a[0]==="a"&&a[1]?(o(),L(K,{key:1,a:a[1]},null,8,["a"])):y("",!0)]))),256)):y("",!0),n(v)?(o(),L(A,{key:3,eventList:n(v),withPapawOptionsButtons:"",disabledReply:l.disabledReply,onEventDeletion:t[0]||(t[0]=a=>n(z)(a))},null,8,["eventList","disabledReply"])):y("",!0)],512)}}});export{le as _};
