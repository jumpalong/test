import{_ as h}from"./FollowItem.vue_vue_type_script_setup_true_lang-CG16H4cC.js";import{a as b}from"./ProvideNostrConnect-rJiGNX-X.js";import{u as C}from"./naiveUi-D97WfHUp.js";import{r as B}from"./ProvideEventLine-BcjESPsS.js";import{_ as N}from"./PubkeyLink.vue_vue_type_script_setup_true_lang-CHeUMD-j.js";import{f as w,k as S,o,B as s,E as V,z as r,q as t,y as a,n as i,A as v,w as n,m as _,F as $,C as D}from"./index-DVMYH3P6.js";import{_ as x}from"./Empty-CBIm7nuM.js";import{_ as z}from"./ListItem-Cp5hsImF.js";import{b as l}from"./Button-Czpa3xjC.js";import{_ as A}from"./Space-CvpcAwGw.js";import"./profile-2-400x400-D2vuwnc_.js";import"./Ellipsis-0EM5UHUc.js";import"./Tooltip-BuuQH49V.js";import"./Popover-C3ccDlka.js";import"./Follower-R8EgPpAd.js";import"./Scrollbar-BXVF4b7l.js";import"./use-rtl-CqBkFAUg.js";import"./use-css-vars-class-DpRsL9zm.js";import"./format-length-B-p6aW7q.js";import"./use-compitable-CysNw4x-.js";import"./is-browser-BikuuYFQ.js";import"./utils-ByHrdkP9.js";import"./Tag-Cl4r3gCd.js";import"./index-vZmvdULR.js";import"./Close-CMpDg3pB.js";import"./utils-BXkRfzfk.js";import"./Icon-DjYnwRew.js";import"./Close-Dj7wgTNH.js";import"./replaceable-DvMWTdGr.js";import"./Checkbox-5kBy0qes.js";import"./composables-CG8Dm3JP.js";import"./Input-Bl1B22BO.js";import"./use-locale-CYSJLCZe.js";import"./Icon-affED87R.js";import"./metadata-BSJpBFOv.js";import"./get-slot-Bk_rJcZu.js";const E={class:"my-2 mx-2"},F={key:0},L={key:1,class:"h-48 flex justify-center items-center"},Ct=w({__name:"NostrConnectSettingView",setup(P){const{remoteSigner:m}=b(),c=S(()=>m.getAllowList());function d(e){m.disConnect(e)}const f=C();async function k(){f(await m.createBunker())}const u=B();return(e,j)=>{const y=x,g=z;return o(),s("div",E,[V("h3",null,r(e.t("signer_pubkey"))+": "+r(t(m).remoteSignerPubkey.slice(0,10)),1),t(u)?(o(),s("h3",F,[a(r(e.t("remote-user"))+": ",1),i(N,{pubkey:t(u)},null,8,["pubkey"])])):v("",!0),i(t(A),{vertical:""},{default:n(()=>[i(t(l),{onClick:k},{default:n(()=>[a(r(e.t("copy-bunker")),1)]),_:1})]),_:1}),t(c).length===0?(o(),s("div",L,[i(y,{description:e.t("empty")},null,8,["description"])])):(o(),_(g,{key:2},{default:n(()=>[(o(!0),s($,null,D(t(c),p=>(o(),_(h,{class:"mx-2",key:p,pubkey:p},{right:n(()=>[i(t(l),{round:"",size:"medium",type:"primary",onClick:q=>d(p)},{default:n(()=>[a(r(e.t("disconnect")),1)]),_:2},1032,["onClick"])]),_:2},1032,["pubkey"]))),128))]),_:1}))])}}});export{Ct as default};
