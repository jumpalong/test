import{f as l,bz as m,av as p,y as _,z as f,A as a,H as o,D as d,F as g,C as h,Y as C,at as v,_ as F,O as w}from"./index.271bc2a1.js";import{g as B}from"./FollowChannel.e5a442b0.js";import{e as y}from"./use.07d5e992.js";import{_ as M}from"./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.6d916308.js";import{_ as O}from"./Space.d7782473.js";import"./createGarbageFilter.4a662728.js";import"./autoAddRelayurlByEventIdStaff.5161a639.js";import"./getCacheStaff.464a66a0.js";import"./user.bbb45ba4.js";import"./ContentBlacklistView.804b2a26.js";import"./Input.7210c329.js";import"./event.c21dbdbc.js";import"./UploadInput.vue_vue_type_script_setup_true_lang.47146e75.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.5680e884.js";import"./CloudUpload.45cd4f18.js";import"./Icon.a8c61380.js";import"./get-slot.4ceacf82.js";const q=l({__name:"CreateChannelView",setup(k){const r=B(),t=m(),s=y(),e=p({});async function i(){if(!e.value.name){t.warning("\u8BF7\u8F93\u5165channelName");return}const n=await C.publish({kind:40,content:JSON.stringify(e.value)},v.getWriteList(),{onOK:s});n?(r.joinChannel(n.id,{channelMetadata:e.value}),t.success("\u521B\u5EFA\u6210\u529F")):t.warning("\u6CA1\u6709\u521B\u5EFA\u6210\u529F")}return(n,x)=>{const u=F,c=O;return _(),f(c,{vertical:""},{default:a(()=>[o(M,{channelMetadata:e.value},null,8,["channelMetadata"]),o(u,{onClick:i},{default:a(()=>[d(g(h(w)("create")),1)]),_:1})]),_:1})}}});export{q as default};
