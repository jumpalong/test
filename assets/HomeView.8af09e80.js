import{u as v}from"./Content.67f889ac.js";import{_ as b}from"./RichTextEditBox.vue_vue_type_script_setup_true_lang.f208d618.js";import{S as g}from"./Scrollbar.bfc06a16.js";import{f as h,bs as k,n as x,aq as w,y as i,I as F,H as e,A as o,C as t,z as m,D as S,F as M,_ as C,O as n}from"./index.c1800e2b.js";import{i as z}from"./use.42516be4.js";import{c as B}from"./Contact.843b7eb6.js";import{_ as l}from"./PostList.vue_vue_type_script_setup_true_lang.150e6830.js";import{_ as V}from"./Empty.6cdd22d7.js";import{_ as D,a as E}from"./Tabs.239997a4.js";import"./getCacheStaff.04455eaa.js";import"./user.a4321bbd.js";import"./event.6135f6e9.js";import"./autoAddRelayurlByEventIdStaff.dbe693d3.js";import"./nostr.8d7c0b4a.js";import"./Tag.ef764be7.js";import"./Icon.c18adbc2.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.c3070a09.js";import"./AddButton.vue_vue_type_script_setup_true_lang.6d5118af.js";import"./RelayInfoView.a288b455.js";import"./Ellipsis.9cb636a6.js";import"./use-theme-vars.bc2ec469.js";import"./ListItem.7fc45615.js";import"./UserLink.vue_vue_type_script_setup_true_lang.f5887d66.js";import"./DrawerContent.6dbdfd12.js";import"./ContentBlacklistView.353b495d.js";import"./Input.67ce3011.js";import"./Space.71e20140.js";import"./get-slot.4ceacf82.js";import"./naiveUi.d1ecdfd9.js";import"./composables.e6030404.js";import"./Popselect.8b8a58ed.js";import"./create.2deeaf6a.js";import"./Checkmark.41b2919e.js";import"./create-ref-setter.fe4a2903.js";import"./Result.fa2927e1.js";import"./Close.defd42b9.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.8a516632.js";import"./CloudUpload.c2963609.js";import"./ReloadCircleSharp.f8dea346.js";import"./Scrollbar.1fcc2d31.js";import"./channel.73d4c352.js";import"./PapawList.vue_vue_type_script_setup_true_lang.6b232dd5.js";const H={class:"flex flex-col h-full overflow-auto"},we=h({__name:"HomeView",setup(O){k(),logger.for("home.vue").info("home.vue"),v("home");const r=x(()=>Object.keys(B.getData().contactConfiguration)),_=z(1),a=w("MyFeed");return(u,s)=>{const c=C,d=V,p=D,f=E;return i(),F("div",H,[e(g,{class:"flex-shrink flex-1 h-0",refreshable:"",loadable:""},{default:o(()=>[e(f,{"default-value":"MyFeed","justify-content":"space-evenly",type:"line",animated:"",value:a.value,"onUpdate:value":s[0]||(s[0]=y=>a.value=y)},{default:o(()=>[e(p,{name:"MyFeed",tab:t(n)("my_feed"),"display-directive":"show:lazy"},{default:o(()=>[t(r).length>0?(i(),m(l,{key:0,active:a.value==="MyFeed",pubkeys:t(r)},null,8,["active","pubkeys"])):(i(),m(d,{key:1,description:t(n)("You can't find anything")},{extra:o(()=>[e(c,{size:"small"},{default:o(()=>[S(M(t(n)("did_not_follow_anyonew")),1)]),_:1})]),_:1},8,["description"]))]),_:1},8,["tab"]),e(p,{name:"GlobalFeed",tab:t(n)("global"),"display-directive":"show:lazy"},{default:o(()=>[e(l,{active:a.value==="GlobalFeed",filter:{kinds:[1]}},null,8,["active"])]),_:1},8,["tab"])]),_:1},8,["value"])]),_:1}),e(b,{onSend:t(_),class:"flex-shrink-1"},null,8,["onSend"])])}}});export{we as default};