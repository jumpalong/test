import{g as D}from"./event.f4defe96.js";import{p as V,g as $}from"./user.c34e6ae3.js";import{l as I,P}from"./Content.da437ffe.js";import{b as A}from"./AddButton.vue_vue_type_script_setup_true_lang.6f4488ec.js";import{f as N,bx as O,n as k,fl as H,y as l,I as f,aQ as C,H as b,A as i,D as M,F as B,C as p,G as h,aq as Q,Y as L,ax as T,z as o,J as y,L as g,S as U,Q as j,a_ as q}from"./index.263e31e4.js";import{E as F}from"./Ellipsis.8457d576.js";import{a as w}from"./getCacheStaff.b1915842.js";import{b as z,a as G}from"./nostr.edffcf4c.js";import{_ as J,a as Y}from"./ListItem.b4dc94dd.js";import{_ as K}from"./Space.117fa1dd.js";import"./autoAddRelayurlByEventIdStaff.ed9d5285.js";import"./use.005c1652.js";import"./Markdown.15565884.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.8ae449b6.js";import"./MavonEditor.0f6e692f.js";import"./use-theme-vars.91052754.js";import"./Tag.dd0e062b.js";import"./Icon.07f0951b.js";import"./Drawer.vue_vue_type_script_setup_true_lang.2d79a054.js";import"./DrawerContent.2b9bd506.js";import"./RelayInfoView.eed2d680.js";import"./createGarbageFilter.3e1159b1.js";import"./ContentBlacklistView.06106af3.js";import"./Input.6e809293.js";import"./Scrollbar.cf5fc63e.js";import"./ReloadCircleSharp.e8710d86.js";import"./Scrollbar.e375dfe4.js";import"./naiveUi.25b0ce2c.js";import"./Popselect.9765ad20.js";import"./create.2deeaf6a.js";import"./Checkmark.89141985.js";import"./VirtualList.7fcaca4f.js";import"./Empty.7fea0622.js";import"./create-ref-setter.fe4a2903.js";import"./NaddrLink.vue_vue_type_script_setup_true_lang.d939faab.js";import"./UserLink.vue_vue_type_script_setup_true_lang.7b0a8fc8.js";import"./get-slot.4ceacf82.js";const W={class:"font-bold"},X={key:0,class:"w-full"},Z=N({__name:"SearchChannelItem",props:{event:null},setup(S){const x=S,{event:e}=O(x),m=k(()=>e.value&&V(e.value)),u=k(()=>{if(e.value.kind===40)return e.value.id;if(e.value.kind===41){const t=H(e.value.tags);return t?t[1]:void 0}});return(t,c)=>(l(),f("div",{class:"flex flex-col",onClick:c[0]||(c[0]=()=>p(u)&&t.$router.push({name:"channel-message",params:{value:p(u)}}))},[C("div",W,[b(F,null,{default:i(()=>{var v;return[M(B((v=p(m).name)!=null?v:p(u)&&p(u).slice(0,10)),1)]}),_:1})]),p(m).about?(l(),f("div",X,[b(F,{class:"w-full"},{default:i(()=>[C("small",null,B(p(m).about),1)]),_:1})])):h("",!0)]))}}),ee=C("div",{class:"flex items-center justify-center"},[C("div",{id:"search-input"})],-1),Oe=N({__name:"SearchView",setup(S){U();const x=j(),e=k(()=>x.params.value),m=k(()=>e.value&&z(e.value)),u=k(()=>e.value&&G(e.value)),t=Q({}),c=L.createChild().addStaff(w());function v(){return c.createChild().addStaff(w())}T(e,()=>{if(t.value={},!(!e.value||e.value.length===0))if(m.value){const a=m.value.relays,s=$(m.value.pubkey,{urls:a&&new Set(a)});c.addChild(s),t.value[0]=s}else if(u.value){const a=u.value,s=u.value.relays,r=D(a.id,s&&{urls:new Set(s)});c.addChild(r),r.feat.onHasEventOnce(d=>{E(d,t.value)})}else{const a=L.createChild().addStaff(w()).addStaff({push(_){E(_,t.value)}});c.addChild(a);const s=[{search:e.value},{["#r"]:[e.value]}],r=a.createChild().addFilters(s).addExtends(L);a.addExtends(r);const d=a.createChild().addFilter({search:e.value,limit:50}).addReadUrl();a.addExtends(d)}},{immediate:!0});function E(a,s){var r,d;switch(a.kind){case 0:case 1:case 2:case 3:((r=s[a.kind])!=null?r:s[a.kind]=v()).pushEvent(a);break;case 40:case 41:((d=s.channel)!=null?d:s.channel=v()).pushEvent(a);break}}return(a,s)=>{const r=Y,d=J,_=q,R=K;return l(),o(R,{vertical:""},{default:i(()=>[ee,t.value.channel?(l(),o(_,{key:0,class:"w-full",title:"\u7FA4\u804A"},{default:i(()=>[b(d,{class:"w-full",hoverable:"",clickable:""},{default:i(()=>[(l(!0),f(g,null,y(t.value.channel.getList(),n=>(l(),o(r,{key:n.id},{default:i(()=>[b(Z,{event:n},null,8,["event"])]),_:2},1024))),128))]),_:1})]),_:1})):h("",!0),t.value[0]?(l(),o(_,{key:1,title:"\u7528\u6237"},{default:i(()=>[(l(!0),f(g,null,y(t.value[0].getList(),n=>(l(),o(I,{key:n.id,pubkey:n.pubkey,created_at:n.created_at},null,8,["pubkey","created_at"]))),128))]),_:1})):h("",!0),t.value[2]?(l(),o(_,{key:2,title:"relay"},{default:i(()=>[(l(!0),f(g,null,y(t.value[2].getList(),n=>(l(),o(A,{key:n.id,url:n.content},null,8,["url"]))),128))]),_:1})):h("",!0),t.value[1]?(l(),o(_,{key:3,title:"\u6D88\u606F"},{default:i(()=>[(l(!0),f(g,null,y(t.value[1].getList(),n=>(l(),o(P,{key:n.id,event:n},null,8,["event"]))),128))]),_:1})):h("",!0)]),_:1})}}});export{Oe as default};
