import{g,a as h}from"./FollowChannel.0c8ae95c.js";import{_ as C}from"./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.b309eea7.js";import{f as w,bz as y,n,av as O,aC as M,y as B,z as L,A as i,H as l,D as N,F as b,C as k,Q as x,at as o,_ as F,O as S}from"./index.dd8c0757.js";import{a as D}from"./nostr.0c764f9a.js";import{e as V}from"./use.b9e0cb1d.js";import{_ as W}from"./Space.eeb4a7c6.js";import"./createGarbageFilter.58d83a26.js";import"./autoAddRelayurlByEventIdStaff.2840aa6c.js";import"./getCacheStaff.19f888e0.js";import"./user.73c7c233.js";import"./ContentBlacklistView.52178d89.js";import"./Input.c0cbabec.js";import"./event.44d09d76.js";import"./UploadInput.vue_vue_type_script_setup_true_lang.a876f2f2.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.afb0c12a.js";import"./CloudUpload.7b2b77e1.js";import"./Icon.728af6b3.js";import"./get-slot.4ceacf82.js";const te=w({__name:"EditChannelView",setup(z){const u=y(),m=x(),c=n(()=>D(m.params.value)),a=n(()=>{var e;return(e=c.value)==null?void 0:e.id}),p=g(),t=O({}),s=n(()=>{if(!!a.value)return h(a.value)}),r=n(()=>{var e;return(e=s.value)==null?void 0:e.feat.useMetadata()});M(()=>r.value,()=>{Object.assign(t.value,r.value)},{deep:!0,immediate:!0});const _=V();function f(){if(!a.value)return;if(!t.value.name){u.warning("\u8BF7\u8F93\u5165channelName");return}if(!s.value)return;const e=[...o.getWriteList()][0];t.value.relayUrls=[...new Set([...o.getReadList(),...o.getWriteList()])],s.value.publish({kind:41,content:JSON.stringify(t.value),tags:[["e",a.value,e]]},o.getWriteList(),{onOK:_}),p.setChannelmetadata(a.value,t.value)}return(e,I)=>{const v=F,d=W;return B(),L(d,{vertical:""},{default:i(()=>[l(C,{channelMetadata:t.value},null,8,["channelMetadata"]),l(v,{onClick:f},{default:i(()=>[N(b(k(S)("save")),1)]),_:1})]),_:1})}}});export{te as default};
