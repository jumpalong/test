import{g as R}from"./event.44d09d76.js";import{p as V,g as $}from"./user.73c7c233.js";import{l as I,P}from"./Content.2b6a65a8.js";import{b as A}from"./AddButton.vue_vue_type_script_setup_true_lang.e6019b17.js";import{f as F,bD as O,n as k,fs as H,y as s,I as f,aV as C,H as b,A as i,D as M,F as B,C as m,G as h,av as T,Y as w,a7 as S,aC as U,z as o,J as y,L as g,S as j,Q as z,b3 as G}from"./index.dd8c0757.js";import{E as D}from"./Ellipsis.4f802c2a.js";import{b as J,a as Q}from"./nostr.0c764f9a.js";import{_ as Y,a as q}from"./ListItem.0c7d8888.js";import{_ as K}from"./Space.eeb4a7c6.js";import"./autoAddRelayurlByEventIdStaff.2840aa6c.js";import"./getCacheStaff.19f888e0.js";import"./use.b9e0cb1d.js";import"./Markdown.ab84075b.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.e3a6371b.js";import"./MavonEditor.8712ed8c.js";import"./use-theme-vars.314641c6.js";import"./Tag.5928ae9a.js";import"./Icon.728af6b3.js";import"./Drawer.vue_vue_type_script_setup_true_lang.cd23c256.js";import"./DrawerContent.cafeef9c.js";import"./RelayInfoView.c41cbec3.js";import"./createGarbageFilter.58d83a26.js";import"./profile-2-400x400.23a9ef9d.js";import"./ContentBlacklistView.52178d89.js";import"./Input.c0cbabec.js";import"./Scrollbar.206ae9b5.js";import"./ReloadCircleSharp.b8f1d9fd.js";import"./Scrollbar.daa7bc26.js";import"./naiveUi.4042f557.js";import"./Popselect.b6cbd53c.js";import"./create.2deeaf6a.js";import"./Checkmark.5b25f79c.js";import"./VirtualList.072ef22a.js";import"./Empty.2444c71c.js";import"./create-ref-setter.fe4a2903.js";import"./NaddrLink.vue_vue_type_script_setup_true_lang.6e72edd7.js";import"./UserLink.vue_vue_type_script_setup_true_lang.0306598a.js";import"./get-slot.4ceacf82.js";const W={class:"font-bold"},X={key:0,class:"w-full"},Z=F({__name:"SearchChannelItem",props:{event:null},setup(x){const L=x,{event:e}=O(L),p=k(()=>e.value&&V(e.value)),u=k(()=>{if(e.value.kind===40)return e.value.id;if(e.value.kind===41){const t=H(e.value.tags);return t?t[1]:void 0}});return(t,c)=>(s(),f("div",{class:"flex flex-col",onClick:c[0]||(c[0]=()=>m(u)&&t.$router.push({name:"channel-message",params:{value:m(u)}}))},[C("div",W,[b(D,null,{default:i(()=>{var v;return[M(B((v=m(p).name)!=null?v:m(u)&&m(u).slice(0,10)),1)]}),_:1})]),m(p).about?(s(),f("div",X,[b(D,{class:"w-full"},{default:i(()=>[C("small",null,B(m(p).about),1)]),_:1})])):h("",!0)]))}}),ee=C("div",{class:"flex items-center justify-center"},[C("div",{id:"search-input"})],-1),He=F({__name:"SearchView",setup(x){j();const L=z(),e=k(()=>L.params.value),p=k(()=>e.value&&J(e.value)),u=k(()=>e.value&&Q(e.value)),t=T({}),c=w.createChild().addStaff(S());function v(){return c.createChild().addStaff(S())}U(e,()=>{if(t.value={},!(!e.value||e.value.length===0))if(p.value){const a=p.value.relays,l=$(p.value.pubkey,{urls:a&&new Set(a)});c.addChild(l),t.value[0]=l}else if(u.value){const a=u.value,l=u.value.relays,r=R(a.id,l&&{urls:new Set(l)});c.addChild(r),r.feat.onHasEventOnce(d=>{E(d,t.value)})}else{const a=w.createChild().addStaff(S()).addStaff({push(_){E(_,t.value)}});c.addChild(a);const l=[{search:e.value},{["#r"]:[e.value]}],r=a.createChild().addFilters(l).addExtends(w);a.addExtends(r);const d=a.createChild().addFilter({search:e.value,limit:50}).addReadUrl();a.addExtends(d)}},{immediate:!0});function E(a,l){var r,d;switch(a.kind){case 0:case 1:case 2:case 3:((r=l[a.kind])!=null?r:l[a.kind]=v()).pushEvent(a);break;case 40:case 41:((d=l.channel)!=null?d:l.channel=v()).pushEvent(a);break}}return(a,l)=>{const r=q,d=Y,_=G,N=K;return s(),o(N,{vertical:""},{default:i(()=>[ee,t.value.channel?(s(),o(_,{key:0,class:"w-full",title:"\u7FA4\u804A"},{default:i(()=>[b(d,{class:"w-full",hoverable:"",clickable:""},{default:i(()=>[(s(!0),f(g,null,y(t.value.channel.getList(),n=>(s(),o(r,{key:n.id},{default:i(()=>[b(Z,{event:n},null,8,["event"])]),_:2},1024))),128))]),_:1})]),_:1})):h("",!0),t.value[0]?(s(),o(_,{key:1,title:"\u7528\u6237"},{default:i(()=>[(s(!0),f(g,null,y(t.value[0].getList(),n=>(s(),o(I,{key:n.id,pubkey:n.pubkey,created_at:n.created_at},null,8,["pubkey","created_at"]))),128))]),_:1})):h("",!0),t.value[2]?(s(),o(_,{key:2,title:"relay"},{default:i(()=>[(s(!0),f(g,null,y(t.value[2].getList(),n=>(s(),o(A,{key:n.id,url:n.content},null,8,["url"]))),128))]),_:1})):h("",!0),t.value[1]?(s(),o(_,{key:3,title:"\u6D88\u606F"},{default:i(()=>[(s(!0),f(g,null,y(t.value[1].getList(),n=>(s(),o(P,{key:n.id,event:n},null,8,["event"]))),128))]),_:1})):h("",!0)]),_:1})}}});export{He as default};
