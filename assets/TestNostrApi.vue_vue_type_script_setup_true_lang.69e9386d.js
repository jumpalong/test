import{f as b,N as i,o as r,z as p,l as _,w as c,m as f,F as m,A as k,n as y,y as E,v as T,x as C,C as a}from"./index.1b90d9b0.js";import{a as P}from"./nostr.5da3da54.js";import{_ as B,a as K}from"./Checkbox.945c7e6c.js";import{u as R}from"./composables.d23d34d7.js";import{_ as V}from"./Space.233e452c.js";import{_ as z}from"./Button.426eb201.js";const D=["nostr","getPublicKey","getRelays","signEvent","nip04","nip04.encrypt","nip04.decrypt"];function F(t,e){if(!!e&&(t.push("nostr"),!!e.getPublicKey)){try{e.getPublicKey().then(n=>{t.push("getPublicKey"),N(e.nip04,t,n),L(n,t,e)})}catch{}if(e.getRelays)try{e.getRelays().then(()=>{t.push("getRelays")})}catch{}}}function L(t,e,n){if(n.signEvent)try{n.signEvent(P({kind:1,content:"33",pubkey:t})).then(()=>{e.push("signEvent")})}catch{}}async function N(t,e,n){if(!!t)try{if(e.push("nip04"),!t.encrypt)return;const s="test",o=await t.encrypt(n,s);if(e.push("nip04.encrypt"),!t.decrypt||await t.decrypt(n,o)!==s)return;e.push("nip04.decrypt")}catch{}}const J=b({__name:"TestNostrApi",props:{disabled:{type:Boolean},nostr:null},emits:["test"],setup(t,{emit:e}){const n=t,s=i(!1),o=i([]),l=R();async function d(){e("test"),s.value=!0,o.value=[],l.info({title:a("note"),content:a("authorized_form_test_note"),positiveText:a("yes"),onPositiveClick:()=>F(o.value,n.nostr)})}return(S,$)=>{const g=K,v=V,h=B,x=z;return r(),p(m,null,[s.value?(r(),_(h,{key:0,value:o.value},{default:c(()=>[f(v,null,{default:c(()=>[(r(!0),p(m,null,k(y(D),u=>(r(),_(g,{value:u,label:u},null,8,["value","label"]))),256))]),_:1})]),_:1},8,["value"])):E("",!0),f(x,{onClick:d,disabled:t.disabled,class:"w-full",type:"primary"},{default:c(()=>[T(C(y(a)("test")),1)]),_:1},8,["disabled"])],64)}}});export{J as _};