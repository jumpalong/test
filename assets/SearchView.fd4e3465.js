import{f as N,bT as F,o as k,c_ as V,eC as O,A as s,L as p,W as b,D as g,C as r,H as $,I as B,F as f,cw as R,J as h,V as I,aR as L,bE as S,ae as A,B as c,M as y,O as C,S as M,R as P,aJ as T,dS as H,bw as J,bQ as U,dN as j,aa as Q,X as W,eD as X,eE as q,dd as z,dO as G}from"./index.243f7ff1.js";const K={class:"font-bold"},Y={key:0,class:"w-full"},Z=N({__name:"SearchChannelItem",props:{event:null},setup(E){const w=E,{event:e}=F(w),_=k(()=>e.value&&V(e.value)),o=k(()=>{if(e.value.kind===40)return e.value.id;if(e.value.kind===41){const a=O(e.value.tags);return a?a[1]:void 0}});return(a,d)=>(s(),p("div",{class:"flex flex-col",onClick:d[0]||(d[0]=()=>f(o)&&a.$router.push({name:"channel-message",params:{value:f(o)}}))},[b("div",K,[g(R,null,{default:r(()=>{var m;return[$(B((m=f(_).name)!=null?m:f(o)&&f(o).slice(0,10)),1)]}),_:1})]),f(_).about?(s(),p("div",Y,[g(R,{class:"w-full"},{default:r(()=>[b("small",null,B(f(_).about),1)]),_:1})])):h("",!0)]))}}),ee=b("div",{class:"flex items-center justify-center"},[b("div",{id:"search-input"})],-1),te=N({__name:"SearchView",setup(E){M();const w=P(),e=k(()=>w.params.value),_=k(()=>e.value&&T(e.value)),o=k(()=>e.value&&H(e.value)),a=I({}),d=L.createChild().addStaff(S());function m(){return d.createChild().addStaff(S())}A(e,()=>{if(a.value={},!(!e.value||e.value.length===0))if(_.value){const t=_.value.relays,l=J(_.value.pubkey,{urls:t&&new Set(t)});d.addChild(l),a.value[0]=l}else if(o.value){const t=o.value,l=o.value.relays,u=U(t.id,l&&{urls:new Set(l)});d.addChild(u),u.feat.onHasEventOnce(i=>{x(i,a.value)})}else{const t=L.createChild().addStaff(S()).addStaff({push(v){x(v,a.value)}});d.addChild(t);const l=[{search:e.value},{["#r"]:[e.value]}],u=t.createChild().addFilters(l).addExtends(L);t.addExtends(u);const i=t.createChild().addFilter({search:e.value,limit:50}).addReadUrl();t.addExtends(i)}},{immediate:!0});function x(t,l){var u,i;switch(t.kind){case 0:case 1:case 2:case 3:((u=l[t.kind])!=null?u:l[t.kind]=m()).pushEvent(t);break;case 40:case 41:((i=l.channel)!=null?i:l.channel=m()).pushEvent(t);break}}return(t,l)=>{const u=G,i=j,v=Q,D=W;return s(),c(D,{vertical:""},{default:r(()=>[ee,a.value.channel?(s(),c(v,{key:0,class:"w-full",title:"\u7FA4\u804A"},{default:r(()=>[g(i,{class:"w-full",hoverable:"",clickable:""},{default:r(()=>[(s(!0),p(C,null,y(a.value.channel.getList(),n=>(s(),c(u,{key:n.id},{default:r(()=>[g(Z,{event:n},null,8,["event"])]),_:2},1024))),128))]),_:1})]),_:1})):h("",!0),a.value[0]?(s(),c(v,{key:1,title:"\u7528\u6237"},{default:r(()=>[(s(!0),p(C,null,y(a.value[0].getList(),n=>(s(),c(X,{key:n.id,pubkey:n.pubkey,created_at:n.created_at},null,8,["pubkey","created_at"]))),128))]),_:1})):h("",!0),a.value[2]?(s(),c(v,{key:2,title:"relay"},{default:r(()=>[(s(!0),p(C,null,y(a.value[2].getList(),n=>(s(),c(q,{key:n.id,url:n.content},null,8,["url"]))),128))]),_:1})):h("",!0),a.value[1]?(s(),c(v,{key:3,title:"\u6D88\u606F"},{default:r(()=>[(s(!0),p(C,null,y(a.value[1].getList(),n=>(s(),c(z,{key:n.id,event:n},null,8,["event"]))),128))]),_:1})):h("",!0)]),_:1})}}});export{te as default};