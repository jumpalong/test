import{N as j}from"./Scrollbar.75edf2b0.js";import{aJ as N,o as f,z as S,au as p,f as k,an as H,N as $,k as b,l as C,w as a,m as t,v as x,x as v,n as e,aD as M,y as D,aF as I,C as r,M as F,aC as K,af as J,bz as q,ae as G}from"./index.8f62a545.js";import{r as o,b as O}from"./nostr.c03670ae.js";import{_ as z}from"./Tooltip.vue_vue_type_script_setup_true_lang.dd6ff796.js";import{u as P}from"./use-theme-vars.c704e62a.js";import{_ as U}from"./Button.22997a19.js";import{C as Q}from"./Close.d28d90a0.js";import{N as V}from"./Icon.904bc99e.js";import{_ as X,a as Y}from"./RelayAddButton.vue_vue_type_script_setup_true_lang.03e333cd.js";import{_ as W}from"./RelayConnectListCard.vue_vue_type_script_setup_true_lang.46165a23.js";import{_ as Z,a as ee}from"./RelayWritableButton.vue_vue_type_script_setup_true_lang.488fabfd.js";import{_ as T}from"./Input.90533fe2.js";import{_ as te}from"./Space.32f062de.js";import{_ as ne}from"./RelayConnectList.vue_vue_type_script_setup_true_lang.2443e1f7.js";import{M as se}from"./MdSearch.f7ca462d.js";import{u as oe}from"./composables.10bdf172.js";const ae={},ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},le=p("path",{d:"M12 22H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V3c0-.55.45-1 1-1s1 .45 1 1v1h8V3c0-.55.45-1 1-1s1 .45 1 1v1h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7v2zm10.13-5.01l.71-.71a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71l2.12 2.12zm-.71.71l-5.01 5.01c-.18.18-.44.29-.7.29H14.5c-.28 0-.5-.22-.5-.5v-1.21c0-.27.11-.52.29-.71l5.01-5.01l2.12 2.13z",fill:"currentColor"},null,-1),re=[le];function _e(d,c){return f(),S("svg",ce,re)}const ie=N(ae,[["render",_e]]),ue={key:0},de=k({__name:"Broadcast",setup(d){const c=H(),n=$(null);function i(){const s=o.broadcast({slef:I({})});if(!s){c.error(r("broadcast_error_message"));return}n.value=s}const l=b(()=>{var s,y,u,h,m,g,R,B;return((y=(s=n.value)==null?void 0:s.numberOfSuccesses)!=null?y:0)+((h=(u=n.value)==null?void 0:u.numberOfErrors)!=null?h:0)+((g=(m=n.value)==null?void 0:m.numberOfOvertime)!=null?g:0)<((B=(R=n.value)==null?void 0:R.total)!=null?B:0)}),_=P();return(s,y)=>{const u=U;return f(),C(z,{tooltip:e(o).hasChange()?e(r)("broadcast_has_change_tip"):e(r)("broadcast_no_change_tip")},{default:a(()=>[t(u,{onClick:i,type:"default",loading:e(l),disabled:e(l)||e(o).hasChange()},{default:a(()=>[x(v(e(l)?e(r)("success_timeout_failure_total"):e(r)("broadcast"))+" ",1),n.value?(f(),S("span",ue,[p("span",{style:M({color:e(_).successColor})},v(n.value.numberOfSuccesses),5),x(" / "),p("span",{style:M({color:e(_).warningColor})},v(n.value.numberOfOvertime),5),x(" / "),p("span",{style:M({color:e(_).errorColor})},v(n.value.numberOfErrors),5),x(" / "),p("span",null,v(n.value.total),1)])):D("",!0)]),_:1},8,["loading","disabled"])]),_:1},8,["tooltip"])}}}),A=k({__name:"ButtonClose",emits:["click"],setup(d,{emit:c}){return(n,i)=>{const l=V,_=U;return f(),C(_,{text:"",circle:"",type:"error",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:i[0]||(i[0]=s=>c("click",s))},{icon:a(()=>[t(l,null,{default:a(()=>[t(Q)]),_:1})]),_:1})}}}),me={key:1},pe=k({__name:"RelayConfigurator",setup(d){const c=b(()=>Object.keys(o.getConfiguration()));function n(m){o.hasWriteByUrl(m)?o.remoteWrite(m):o.addWrite(m)}function i(m){o.hasReadByUrl(m)?o.remoteRead(m):o.addRead(m)}const l=$("");function _(){!l.value||o.addWriteRead(l.value)}const s=H();function y(){o.save(),s.success(r("relay_configurator_save_message"))}function u(){o.sync(),s.success(r("relay_configurator_sync_message"))}const h=b(()=>{const m=o.getUpdateAt();return m||null});return(m,g)=>{const R=ie,B=T,L=U;return f(),C(W,{urls:e(c),title:e(r)("relay_configuration")},{"header-extra":a(()=>[t(e(V),{class:"mr-1"},{default:a(()=>[t(R)]),_:1}),e(h)?(f(),C(X,{key:0,secondTimestamp:e(h)},null,8,["secondTimestamp"])):(f(),S("span",me))]),right:a(({url:w})=>[t(Z,{active:e(o).hasWriteByUrl(w),class:"mr-1",onSwitch:()=>n(w)},null,8,["active","onSwitch"]),t(ee,{active:e(o).hasReadByUrl(w),class:"mr-2",onSwitch:()=>i(w)},null,8,["active","onSwitch"]),t(A,{text:"",onClick:()=>e(o).remove(w)},null,8,["onClick"])]),action:a(()=>[t(e(te),null,{default:a(()=>[t(B,{value:l.value,"onUpdate:value":g[0]||(g[0]=w=>l.value=w),type:"text",placeholder:"eg: wss://nostr.wine"},null,8,["value"]),t(L,{onClick:_,type:"primary",disabled:!l.value},{default:a(()=>[x(v(e(r)("add")),1)]),_:1},8,["disabled"]),t(z,{tooltip:e(o).hasChange()?e(r)("tips.save_changes"):e(r)("currently_not_modified")},{default:a(()=>[t(L,{onClick:y,type:"primary",disabled:!e(o).hasChange()},{default:a(()=>[x(v(e(r)("save")),1)]),_:1},8,["disabled"])]),_:1},8,["tooltip"]),t(z,{tooltip:e(o).hasChange()?e(r)("relay_configurator_sync_has_change_tip"):e(r)("relay_configurator_sync_no_change_tip")},{default:a(()=>[t(L,{onClick:u,type:"primary",disabled:e(o).hasChange()},{default:a(()=>[x(v(e(r)("sync")),1)]),_:1},8,["disabled"])]),_:1},8,["tooltip"]),t(de)]),_:1})]),_:1},8,["urls","title"])}}}),fe={},he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ve=p("path",{d:"M17 11h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1H9.01V5a2 2 0 0 0-2-2H4c-1.1 0-2 .9-2 2v4a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8h2v7.01c0 1.65 1.34 2.99 2.99 2.99H15v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1h-1.01c-.54 0-.99-.45-.99-.99V8h2v1c0 1.1.9 2 2 2z",fill:"currentColor"},null,-1),ye=[ve];function ge(d,c){return f(),S("svg",he,ye)}const E=N(fe,[["render",ge]]),xe={class:"flex-shrink-0"},Ce=k({__name:"RelayConnected",setup(d){const c=b(()=>O.getPool()),n=b(()=>[...c.value.keys()]);function i(_){const s=O.getRelayFromPool(_);return s?s.subIds.size:0}function l(_){const s=O.getRelayFromPool(_);return s?s.publishIds.size:0}return(_,s)=>{const y=V;return f(),C(W,{urls:e(n),title:e(r)("active_relay")},{"header-extra":a(()=>[t(y,{class:"mr-1"},{default:a(()=>[t(E)]),_:1}),x(" "+v(e(n).length),1)]),right:a(({url:u})=>[p("span",xe," ("+v(i(u))+","+v(l(u))+") ",1),t(ne,{disabled:e(o).hasReadByUrl(u)||e(o).hasWriteByUrl(u),class:"ml-2",onClick:()=>e(o).addWriteRead(u)},null,8,["disabled","onClick"]),t(A,{class:"ml-2",onClick:()=>e(O).close(u),onClose:()=>{var h;return(h=e(c).get(u))==null?void 0:h.close()}},null,8,["onClick","onClose"])]),_:1},8,["urls","title"])}}}),we={},be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ke=p("path",{d:"M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85c-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28c77.418-.07 144.315-53.144 162.787-126.849c1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z",fill:"currentColor"},null,-1),$e=[ke];function Se(d,c){return f(),S("svg",be,$e)}const Ve=N(we,[["render",Se]]);function Re(d,{message:c,dialog:n}){return new Promise((i,l)=>{o.sync({onlyUrl:d,onEvent(_,s){n.success({title:r("success"),content:r("handel_sync_on_event_message",{url:s}),positiveText:r("yes")}),i("pull")},onPush(){c.success(r("handel_sync_on_push_message",{url:d})),i("push")}}),c.info(r("handel_sync_info",{url:d}))})}function Be(d){const c=oe(),n=H(),i=$(),l=$("default"),_=P(),s=b(()=>{switch(l.value){case"pull":return _.value.successColor;case"push":return _.value.primaryColor;default:return _.value.textColor1}});return{isLoading:i,status:l,color:s,handelSync:async()=>{i.value=!0,l.value=await Re(e(d),{message:n,dialog:c}),i.value=!1}}}const Oe=k({__name:"SyncButton",props:{url:null},setup(d){const c=d,{handelSync:n,status:i,isLoading:l,color:_}=Be(F(c,"url"));return(s,y)=>{const u=V,h=U;return f(),C(z,{tooltip:e(r)("sync_tooltip")},{default:a(()=>[t(h,{text:"",onClick:e(n),class:K({turn:e(l)})},{default:a(()=>[t(u,{color:e(_)},{default:a(()=>[t(Ve)]),_:1},8,["color"])]),_:1},8,["onClick","class"])]),_:1},8,["tooltip"])}}});const ze=N(Oe,[["__scopeId","data-v-99831d93"]]),Ne={class:"flex items-center justify-center flex-shrink flex-grow"},Ue={class:"flex-shrink-0 flex justify-center items-center"},Le={class:"flex-shrink ml-2 flex-grow w-32 sm:w-auto"},Me=k({__name:"RelayOther",setup(d){const c=$(""),n=$([]),i=b(()=>o.getOtherList());function l(){if(c.value===""){n.value=Array.from(i.value);return}n.value=Array.from(i.value).filter(s=>s.includes(c.value))}l();const _=G(l,1e3);return J([c,i],_,{deep:!0}),(s,y)=>{const u=V,h=se,m=T;return f(),C(W,{loadable:"",urls:n.value,title:e(r)("more")},{"header-extra":a(()=>[p("div",Ne,[p("div",Ue,[t(u,{class:"mr-1"},{default:a(()=>[t(E)]),_:1}),p("span",null,v(n.value.length),1)]),p("div",Le,[t(m,{round:"",placeholder:e(r)("search"),value:c.value,"onUpdate:value":y[0]||(y[0]=g=>c.value=g),onKeyup:q(l,["enter"]),onChange:l},{suffix:a(()=>[t(u,null,{default:a(()=>[t(h)]),_:1})]),_:1},8,["placeholder","value","onKeyup"])])])]),right:a(({url:g})=>[t(Y,{class:"mr-2",url:g},null,8,["url"]),t(ze,{url:g},null,8,["url"])]),_:1},8,["urls","title"])}}}),He={class:"mt-2"},We={class:"mt-2"},et=k({__name:"RelayConfig",setup(d){return(c,n)=>(f(),C(e(j),{class:"h-full w-full"},{default:a(()=>[p("div",null,[t(pe)]),p("div",He,[t(Ce)]),p("div",We,[t(Me)])]),_:1}))}});export{et as _};