import{l as k,u as C,p as N,n as z,o as G,q as B}from"./ProvideEventLine-BcjESPsS.js";import{f as h,W as V,q as e,r as $,o as n,m as a,k as y,L as U,B as E,n as o,w as i,U as j,y as H,z as R,A as q,a5 as p}from"./index-DVMYH3P6.js";import{N as D}from"./Dialog-D5oKNXJ_.js";import{_}from"./PostList.vue_vue_type_script_setup_true_lang-CXRlCGzr.js";import{_ as b}from"./ProvideEventLine.vue_vue_type_script_setup_true_lang-CVyTU_sl.js";import{u as I}from"./Papaw-Deuq0NJ6.js";import{_ as P}from"./RichTextEditBox.vue_vue_type_script_setup_true_lang-Cw9asIR0.js";import{S as T}from"./Scrollbar-Ci8GVXLr.js";import{b as A}from"./Button-Czpa3xjC.js";import{_ as O}from"./Empty-CBIm7nuM.js";import{_ as W,a as Y}from"./Tabs-v5GAMoQb.js";import"./utils-BXkRfzfk.js";import"./keysOf-HiGXOwLp.js";import"./use-rtl-CqBkFAUg.js";import"./index-vZmvdULR.js";import"./use-css-vars-class-DpRsL9zm.js";import"./render-BaVY8WQh.js";import"./Icon-DjYnwRew.js";import"./Close-CMpDg3pB.js";import"./Close-Dj7wgTNH.js";import"./replaceable-DvMWTdGr.js";import"./Warning-CFOd0oLB.js";import"./PapawList.vue_vue_type_script_setup_true_lang-DhIrlK79.js";import"./Icon-affED87R.js";import"./format-length-B-p6aW7q.js";import"./Spin-D-ja7p5P.js";import"./Scrollbar-BXVF4b7l.js";import"./use-compitable-CysNw4x-.js";import"./MavonEditor-U6vvA0Sq.js";import"./DrawerContent-CWwlzEAX.js";import"./Follower-R8EgPpAd.js";import"./Popover-C3ccDlka.js";import"./is-browser-BikuuYFQ.js";import"./index-DsSU6HIH.js";import"./hkdf-MGlbgreC.js";import"./use-theme-vars-Cj3ejyij.js";import"./Card-mMUmU99e.js";import"./Tooltip-BuuQH49V.js";import"./NaddrLink.vue_vue_type_script_setup_true_lang-CCeX8OoD.js";import"./Markdown-CCAxwuGA.js";import"./Image-Dkv-cPOO.js";import"./utils-ByHrdkP9.js";import"./fade-in-scale-up.cssr-CUPxiz5B.js";import"./use-locale-CYSJLCZe.js";import"./download-sglA049O.js";import"./DateTime.vue_vue_type_script_setup_true_lang-CutDhaEt.js";import"./Tag-Cl4r3gCd.js";import"./Space-CvpcAwGw.js";import"./get-slot-Bk_rJcZu.js";import"./fade-in-height-expand.cssr-JdnZy7mo.js";import"./naiveUi-D97WfHUp.js";import"./Checkbox-5kBy0qes.js";import"./composables-CG8Dm3JP.js";import"./Input-Bl1B22BO.js";import"./ContentBlacklistView-BsctE9vS.js";import"./Dropdown-DxJRtvYm.js";import"./create-DlBt9mlr.js";import"./profile-2-400x400-D2vuwnc_.js";import"./Ellipsis-0EM5UHUc.js";import"./Divider-Dkdhd_MI.js";import"./Result-BxKSbHjS.js";import"./SelectMenu-P-o4iW_T.js";import"./Checkmark-C3ejFAAO.js";import"./VirtualList-Ds_3EfD8.js";import"./UploadButton.vue_vue_type_script_setup_true_lang-DLAEcrTL.js";import"./Add-B8K751Td.js";import"./Close-DB389nBU.js";import"./ReloadCircleSharp-GyWaURTC.js";import"./Scrollbar-CnPFJxyc.js";import"./omit-DbnPTcif.js";const J=h({__name:"MustLogin",setup(w){let d=V(),u=k();function c(){d.push("login")}function l(){}return(r,t)=>{const s=D;return e(u)?$(r.$slots,"default",{key:0}):(n(),a(s,{key:1,title:r.t("warning"),type:"warning",content:"您没有登录，是否跳转到登录页面","negative-text":r.t("no"),"positive-text":r.t("yes"),onPositiveClick:c,onNegativeClick:l},null,8,["title","negative-text","positive-text"]))}}}),K={class:"flex flex-col h-full overflow-auto"},_t=h({__name:"HomeView",setup(w){__loggerFactory.create("/home/runner/work/jumpalong/jumpalong/apps/browser-ui/src/views/HomeView.vue",{disabled:!0}).info("homeView");let u=C(N.ListSynchronizerManager.Staff);I("home");const c=u.listSynchronizerManager.getInitStandardListSynchronizer(z.Follow),l=y(()=>c.getList().map(m=>m.pubkey)),r=G(1),t=U("GlobalFeed");let s=k(),f=B(),v=y(()=>!s.value&&f.value?new Set([...f.value].slice(0,10)):void 0);return(S,m)=>{const x=A,F=O,g=W,L=Y;return n(),E("div",K,[o(T,{class:"flex-shrink flex-1 h-0",refreshable:"",loadable:""},{default:i(()=>[o(L,{"default-value":"MyFeed","justify-content":"space-evenly",type:"line",animated:"",value:e(t),"onUpdate:value":m[0]||(m[0]=M=>j(t)?t.value=M:null)},{default:i(()=>[o(g,{name:"MyFeed",tab:e(p)("my_feed"),"display-directive":"show:lazy"},{default:i(()=>[o(J,null,{default:i(()=>[o(b,{name:"MyFeed",active:e(t)==="MyFeed"},{default:i(()=>[e(l).length>0?(n(),a(_,{key:0,active:e(t)==="MyFeed",pubkeys:e(l)},null,8,["active","pubkeys"])):(n(),a(F,{key:1,description:e(p)("You can't find anything")},{extra:i(()=>[o(x,{size:"small"},{default:i(()=>[H(R(e(p)("did_not_follow_anyonew")),1)]),_:1})]),_:1},8,["description"]))]),_:1},8,["active"])]),_:1})]),_:1},8,["tab"]),o(g,{name:"GlobalFeed",tab:e(p)("global"),"display-directive":"show:lazy"},{default:i(()=>[o(b,{name:"GlobalFeed",active:e(t)==="GlobalFeed"},{default:i(()=>[e(s)?(n(),a(_,{key:0,active:e(t)==="GlobalFeed",filters:[{kinds:[1,30023],limit:1}]},null,8,["active"])):e(v)?(n(),a(_,{key:1,urls:e(v),active:e(t)==="GlobalFeed",filters:[{kinds:[1,30023],limit:1}]},null,8,["urls","active"])):q("",!0)]),_:1},8,["active"])]),_:1},8,["tab"])]),_:1},8,["value"])]),_:1}),o(P,{onSend:e(r),class:"flex-shrink-1"},null,8,["onSend"])])}}});export{_t as default};
