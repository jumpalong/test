import{T as l}from"./nostr.754d0882.js";import{f as _}from"./nostr.5da3da54.js";import{q as k}from"./use.1e6bcf04.js";import{f as d,aL as v,k as n,o as x,l as y,w as s,m as B,v as L,x as N,n as t,B as b}from"./index.1b90d9b0.js";import{_ as C}from"./Button.426eb201.js";const A=d({__name:"PubkeyLink",props:{pubkey:null},setup(r){const p=r,{pubkey:e}=v(p),u=k(l.UserApi),i=n(()=>u.getUserMetadataLineByPubkey(e.value)),a=n(()=>i.value.feat.useMetadata()),c=n(()=>{const o=_(e.value);return o||e.value});return(o,P)=>{const m=C,f=b("RouterLink");return x(),y(f,{to:`/profile/${t(e)}`},{default:s(()=>[B(m,{text:""},{default:s(()=>[L(" @"+N(t(a).name?t(a).name:t(c)),1)]),_:1})]),_:1},8,["to"])}}});export{A as _};