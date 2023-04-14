var M=Object.defineProperty;var m=(t,n,e)=>n in t?M(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var h=(t,n,e)=>(m(t,typeof n!="symbol"?n+"":n,e),e);import{a6 as U,a2 as u,a3 as S,Z as b,a4 as E,a5 as k,a7 as p,R,U as w,V as B,X as v,a0 as F,a1 as L,a8 as f,a9 as A}from"./index.263e31e4.js";import{R as y,c as T,a as z}from"./getCacheStaff.b1915842.js";import{c as q,a as x,b as D,d as H}from"./createGarbageFilter.3e1159b1.js";import{a as C}from"./autoAddRelayurlByEventIdStaff.ed9d5285.js";import{c as O,a as P}from"./user.c34e6ae3.js";import{c as j}from"./ContentBlacklistView.06106af3.js";import{g as G}from"./event.f4defe96.js";const W=U()(t=>({initialization(){const n=y.channelMetadataEventMap.get(t);n&&this.beltline.pushEvent(n),this.beltline.feat.onHasLatestEvent(e=>{y.channelMetadataEventMap.set(t,e)})}}));function $(t){return u(`getChannelMetadataBeltlineByChannelId:${t}`,()=>{const n=S({describe:"getChannelMetadataBeltlineByChannelId"}).addFilter({ids:[t],kinds:[40]}).addFilter({kinds:[41],"#e":[t]}).addStaff(b()).addStaff(O()).addStaff(E()).addStaff(k()).addStaff(W(t)).addStaff(T());return n.feat.withEvent()||n.addStaff(C(t)).addReadUrl(),n},{useMemoryCache:!0,useLocalStorage:!1})}function ee(t,n){return u(`etChannelMessageBeltline:${t}`,()=>{const e=S({describe:"getChannelMessageBeltline"}).addStaff(q([{kinds:[42],"#e":[t]}])).addStaff(x()).addStaff(z()).addStaff(D()).addStaff(H()).addStaff(j()).addStaffOfSortByCreateAt();return setTimeout(()=>{e.addExtends(e.createChild().addRelayUrls(n==null?void 0:n.urls).onAddRelayUrlsAfter(a=>{e.addRelayUrls(a)}).addFilter({ids:[t],kinds:[40]}).addFilter({kinds:[41],"#e":[t]}).addFilter({kinds:[42],"#e":[t],since:p()}).addStaff(C(t)).addReadUrl()),e.feat.firstLoad()},0),e},{useLocalStorage:!1})}class J extends R{constructor(n,e){super(n,e)}async getFilters(){return(await this.getAddressPointers()).map(n=>({kinds:[n.kind],authors:[n.pubkey],["#d"]:[n.identifier]}))}}function ae(){return u("getFollowChannelConfiguration",()=>{const t=w(new K);return setTimeout(()=>{t.sync()}),t},{useLocalStorage:!1})}class K extends J{constructor(){super("follower-channel",new Map);h(this,"identifier","follower-channel");h(this,"kind",30001)}async getAddressPointers(){const e=await B.getPublicKey();return[{identifier:this.identifier,kind:this.kind,pubkey:e}]}async serializeToData(e){const a=new Map,s=v(e.tags);for(const l of s){const{eventId:i,relay:d,marker:r}=l;this.getData();const c={channelMeta:{relayUrls:[d]},channelId:i,relayUrls:new Set};a.get(i)||this.reqMetadata(i,c),a.set(i,c)}return a}async deserializeToEvent(e,a){const s=[];s.push(["d",this.identifier]);for(const[l,i]of e.entries()){const d=i.channelMeta.relayUrls;if(d){const r=d[0];if(r){s.push(["e",l,r]);continue}}s.push(["e",l])}return F({kind:this.kind,tags:s})}hasJoin(e){return this.getData().has(e)}setChannelmetadata(e,a){const s=this.getData().get(e);s&&(s.channelMeta=a)}joinChannel(e,a){var r;if(!e)return;const s=this.getData();if(s.get(e))return;const i=this.toChanged(),d={channelId:e,channelMeta:(r=a==null?void 0:a.channelMetadata)!=null?r:{},relayUrls:new Set};a!=null&&a.channelMetadata||this.reqMetadata(e,d,i),s.set(e,d),this.save()}reqMetadata(e,a,s){const l=$(e),i=L((r,c)=>{var o;if(s&&this.isReChange(s)){l.closeReq();return}Object.assign(a.channelMeta,r),f(a.relayUrls,(o=a.channelMeta.relayUrls)!=null?o:[])},3e3);l.feat.onHasMetadata(i),G(e).feat.onHasEventOnce(r=>{const c=r.pubkey;a.creator=c,a.event=r;const o=A(r.tags);f(a.relayUrls,o),P(c).feat.onHasReadWriteList(g=>{f(a.relayUrls,g.writeUrl),f(a.relayUrls,g.readUrl)})})}leaveChannel(e){if(!e)return;const a=this.getData();!a.has(e)||(this.toChanged(),a.delete(e),this.save())}}export{$ as a,ee as b,ae as g};
