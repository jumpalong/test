import{u as v}from"./Content.7dccab19.js";import{_ as b}from"./RichTextEditBox.vue_vue_type_script_setup_true_lang.f5c722cb.js";import{S as g}from"./Scrollbar.b9717515.js";import{f as h,bz as k,n as x,av as w,y as i,I as F,H as e,A as o,C as t,z as s,D as S,F as M,_ as z,O as n}from"./index.271bc2a1.js";import{i as C}from"./use.07d5e992.js";import{c as B}from"./Contact.55c231a9.js";import{_ as l}from"./PostList.vue_vue_type_script_setup_true_lang.2bb1bbad.js";import{_ as V}from"./Empty.f48bf955.js";import{_ as D,a as E}from"./Tabs.196a410a.js";import"./user.bbb45ba4.js";import"./getCacheStaff.464a66a0.js";import"./event.c21dbdbc.js";import"./autoAddRelayurlByEventIdStaff.5161a639.js";import"./nostr.326d6965.js";import"./Markdown.2d218bfd.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.85e83019.js";import"./AddButton.vue_vue_type_script_setup_true_lang.64cd1c40.js";import"./RelayInfoView.95bfdda2.js";import"./Ellipsis.e06febeb.js";import"./Icon.a8c61380.js";import"./use-theme-vars.34541e45.js";import"./ListItem.242f28fb.js";import"./MavonEditor.417bd132.js";import"./Tag.315ef46a.js";import"./Space.d7782473.js";import"./get-slot.4ceacf82.js";import"./Drawer.vue_vue_type_script_setup_true_lang.0c30d004.js";import"./DrawerContent.c18236f3.js";import"./createGarbageFilter.4a662728.js";import"./profile-2-400x400.8cda289c.js";import"./ContentBlacklistView.804b2a26.js";import"./Input.7210c329.js";import"./naiveUi.67f4ceee.js";import"./Dropdown.95462754.js";import"./create.2deeaf6a.js";import"./NaddrLink.vue_vue_type_script_setup_true_lang.708ac06c.js";import"./UserLink.vue_vue_type_script_setup_true_lang.afd8e0b2.js";import"./Result.555366a9.js";import"./Close.33dc8565.js";import"./SelectMenu.f7e26df2.js";import"./Checkmark.456ae65d.js";import"./VirtualList.9c7cfa50.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.5680e884.js";import"./CloudUpload.45cd4f18.js";import"./ReloadCircleSharp.d1b9f135.js";import"./Scrollbar.008f2641.js";import"./PapawList.vue_vue_type_script_setup_true_lang.3de6e02d.js";const H={class:"flex flex-col h-full overflow-auto"},Ce=h({__name:"HomeView",setup(O){k(),logger.for("home.vue").info("home.vue"),v("home");const r=x(()=>Object.keys(B.getData().contactConfiguration)),_=C(1),a=w("MyFeed");return(u,p)=>{const c=z,d=V,m=D,f=E;return i(),F("div",H,[e(g,{class:"flex-shrink flex-1 h-0",refreshable:"",loadable:""},{default:o(()=>[e(f,{"default-value":"MyFeed","justify-content":"space-evenly",type:"line",animated:"",value:a.value,"onUpdate:value":p[0]||(p[0]=y=>a.value=y)},{default:o(()=>[e(m,{name:"MyFeed",tab:t(n)("my_feed"),"display-directive":"show:lazy"},{default:o(()=>[t(r).length>0?(i(),s(l,{key:0,active:a.value==="MyFeed",pubkeys:t(r)},null,8,["active","pubkeys"])):(i(),s(d,{key:1,description:t(n)("You can't find anything")},{extra:o(()=>[e(c,{size:"small"},{default:o(()=>[S(M(t(n)("did_not_follow_anyonew")),1)]),_:1})]),_:1},8,["description"]))]),_:1},8,["tab"]),e(m,{name:"GlobalFeed",tab:t(n)("global"),"display-directive":"show:lazy"},{default:o(()=>[e(l,{active:a.value==="GlobalFeed",filters:[{kinds:[1]},{kinds:[30023]}]},null,8,["active"])]),_:1},8,["tab"])]),_:1},8,["value"])]),_:1}),e(b,{onSend:t(_),class:"flex-shrink-1"},null,8,["onSend"])])}}});export{Ce as default};
