import{f as l,bs as m,ap as p,y as _,z as f,A as a,H as o,D as d,F as g,C as h,Y as C,ab as F,_ as v,O as w}from"./index.0e420a7a.js";import{g as B}from"./FollowChannel.c19e4d3c.js";import{e as M}from"./use.7b5663cd.js";import{_ as O}from"./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.10e1be5d.js";import{_ as b}from"./Space.45ef5f62.js";import"./channel.f7cdd32d.js";import"./getCacheStaff.ce5a8b54.js";import"./createGarbageFilter.9d7b3860.js";import"./autoAddRelayurlByEventIdStaff.8ca2f449.js";import"./user.c6ea6a80.js";import"./ContentBlacklistView.9493daed.js";import"./Input.4bb7b199.js";import"./event.e7c9f230.js";import"./UploadInput.vue_vue_type_script_setup_true_lang.23178d81.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.f8a131e7.js";import"./CloudUpload.d0cb87ab.js";import"./Icon.80a71b9a.js";import"./get-slot.4ceacf82.js";const G=l({__name:"CreateChannelView",setup(k){const r=B(),t=m(),s=M(),e=p({});function i(){if(!e.value.name){t.warning("\u8BF7\u8F93\u5165channelName");return}const n=C.publish({kind:40,content:JSON.stringify(e.value)},F.getWriteList(),{onOK:s});n?(r.joinChannel(n.id,{channelMetadata:e.value}),t.success("\u521B\u5EFA\u6210\u529F")):t.warning("\u6CA1\u6709\u521B\u5EFA\u6210\u529F")}return(n,x)=>{const u=v,c=b;return _(),f(c,{vertical:""},{default:a(()=>[o(O,{channelMetadata:e.value},null,8,["channelMetadata"]),o(u,{onClick:i},{default:a(()=>[d(g(h(w)("create")),1)]),_:1})]),_:1})}}});export{G as default};
