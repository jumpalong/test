import{u as B,b as H,c as A,e as R}from"./ProvideEventLine-BcjESPsS.js";import{_ as U}from"./LoginCard.vue_vue_type_script_setup_true_lang-DPdtq-eB.js";import{u as q,b as D}from"./LoginCompleteHook-CziC0XUm.js";import{_ as S}from"./TestNostrApi.vue_vue_type_script_setup_true_lang-BaB9mRYq.js";import{_ as T}from"./Tooltip.vue_vue_type_script_setup_true_lang-DbFvPaq4.js";import{C as z}from"./Copy16Filled-WQZ_OET7.js";import{u as E}from"./naiveUi-D97WfHUp.js";import{f as F,L as I,W as O,V as P,X as W,o as f,m as k,w as e,r as u,n as r,q as n,U as v,A as X,y,z as g}from"./index-DVMYH3P6.js";import{N as j}from"./Icon-affED87R.js";import{_ as G}from"./Input-Bl1B22BO.js";import{_ as J}from"./Alert-BSNjMpLL.js";import{_ as K}from"./Checkbox-5kBy0qes.js";import{_ as M}from"./Space-CvpcAwGw.js";import"./utils-BXkRfzfk.js";import"./Favicon-CnnEPxQR.js";import"./Scrollbar-Ci8GVXLr.js";import"./ReloadCircleSharp-GyWaURTC.js";import"./Scrollbar-CnPFJxyc.js";import"./Scrollbar-BXVF4b7l.js";import"./use-rtl-CqBkFAUg.js";import"./use-css-vars-class-DpRsL9zm.js";import"./Card-mMUmU99e.js";import"./index-vZmvdULR.js";import"./Button-Czpa3xjC.js";import"./is-browser-BikuuYFQ.js";import"./Close-CMpDg3pB.js";import"./Icon-DjYnwRew.js";import"./Close-Dj7wgTNH.js";import"./replaceable-DvMWTdGr.js";import"./keysOf-HiGXOwLp.js";import"./Tooltip-BuuQH49V.js";import"./Popover-C3ccDlka.js";import"./Follower-R8EgPpAd.js";import"./format-length-B-p6aW7q.js";import"./use-compitable-CysNw4x-.js";import"./composables-CG8Dm3JP.js";import"./use-locale-CYSJLCZe.js";import"./fade-in-height-expand.cssr-JdnZy7mo.js";import"./Warning-CFOd0oLB.js";import"./get-slot-Bk_rJcZu.js";const zt=F({__name:"LoginCompleteView",setup(Q){let _=B(R,A);const C=E(),s=H(async()=>{var o;return(o=await _.getPrikeyOrNull())==null?void 0:o.getNsec()});function h(){s.value&&C(s.value)}const a=I(),c=O(),w=P(),i=q(),d=W();i==null||i.setHook(async()=>{const o=w.query.redirected;d.start(),setTimeout(()=>{if(!o){c.push({name:"article",params:{value:t("help_article")}});return}c.push(o)},2e3)});const m=D();async function b(){d.start(),await(m==null?void 0:m.runHook())}return(o,p)=>{const N=j,L=G,$=J,V=K,x=M;return f(),k(U,null,{header:e(()=>[u(o.$slots,"default")]),default:e(()=>[r(x,{class:"mt-6",vertical:""},{default:e(()=>[n(s)?(f(),k(L,{key:0,placeholder:"",value:n(s),"onUpdate:value":p[0]||(p[0]=l=>v(s)?s.value=l:null),type:"password","show-password-on":"click"},{suffix:e(()=>[r(N,{class:"px-2",onClick:h},{default:e(()=>[r(z,{class:"hover:text-[#2ed573]"})]),_:1})]),_:1},8,["value"])):X("",!0),r($,{class:"mt-2",title:o.t("note"),type:"warning"},{default:e(()=>[y(g(o.t("keep_private_key_prompt")),1)]),_:1},8,["title"]),r(S,{nostr:n(_).nostrApi},null,8,["nostr"]),r(V,{class:"mt-2",checked:n(a),"onUpdate:checked":p[1]||(p[1]=l=>v(a)?a.value=l:null)},{default:e(()=>[y(g(o.t("i_have_saved_my_private_key_properly")),1)]),_:1},8,["checked"]),u(o.$slots,"prev-step"),r(T,{tooltip:o.t("tick_prompt")},{default:e(()=>[u(o.$slots,"next-step",{next:b,disabled:!n(a)})]),_:3},8,["tooltip"])]),_:3})]),_:3})}}});export{zt as default};
