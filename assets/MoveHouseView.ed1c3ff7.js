import{f as q,n as k,av as p,y as f,z as x,A as e,H as t,C as a,at as Q,O as u,dj as ie,bz as de,aV as S,D as d,F as r,bR as J,I as D,J as H,L as K,G as ce,Y as M,a7 as _e,ak as pe,U as me,dc as fe,b3 as ve,_ as he,b2 as O,ft as ye}from"./index.dd8c0757.js";import{_ as W,a as ge}from"./AddButton.vue_vue_type_script_setup_true_lang.e6019b17.js";import{_ as be,a as ke}from"./Drawer.vue_vue_type_script_setup_true_lang.cd23c256.js";import{S as X}from"./Scrollbar.206ae9b5.js";import{_ as we}from"./Input.c0cbabec.js";import{_ as Z}from"./Thing.4865ad06.js";import{_ as Y}from"./RelayConnectListCard.vue_vue_type_script_setup_true_lang.09e59a98.js";import{_ as Ce}from"./UserLink.vue_vue_type_script_setup_true_lang.0306598a.js";import{r as xe}from"./use.b9e0cb1d.js";import{u as Se}from"./use-theme-vars.314641c6.js";import{_ as Le,a as Ue}from"./Checkbox.65e36670.js";import{_ as Re}from"./Space.eeb4a7c6.js";import{_ as $e}from"./Empty.2444c71c.js";import"./RelayInfoView.c41cbec3.js";import"./Ellipsis.4f802c2a.js";import"./Icon.728af6b3.js";import"./ListItem.0c7d8888.js";import"./DrawerContent.cafeef9c.js";import"./ReloadCircleSharp.b8f1d9fd.js";import"./Scrollbar.daa7bc26.js";import"./user.73c7c233.js";import"./getCacheStaff.19f888e0.js";import"./nostr.0c764f9a.js";import"./autoAddRelayurlByEventIdStaff.2840aa6c.js";import"./get-slot.4ceacf82.js";const Pe=q({__name:"AddRelay",props:{show:{type:Boolean},disabledList:null},emits:["add-relay","update:show"],setup(h,{emit:v}){const w=k(()=>Q.getOtherList()),m=p("");return(L,c)=>{const y=we,U=Z;return f(),x(be,{show:h.show,"onUpdate:show":c[2]||(c[2]=_=>v("update:show",_)),closable:"",height:"100%",title:a(u)("add_relay")},{default:e(()=>[t(X,null,{default:e(()=>[t(U,{class:"my-2"},{header:e(()=>[t(y,{value:m.value,"onUpdate:value":c[0]||(c[0]=_=>m.value=_),placeholder:"eg: wss://relay.com",size:"small"},null,8,["value"])]),"header-extra":e(()=>[t(W,{onClick:c[1]||(c[1]=()=>v("add-relay",m.value)),disabled:h.disabledList&&h.disabledList.has(m.value)},null,8,["disabled"])]),_:1}),t(ge,{urls:a(w),loadable:""},{right:e(({url:_})=>[t(W,{onClick:()=>v("add-relay",_),disabled:h.disabledList&&h.disabledList.has(_)},null,8,["onClick","disabled"])]),_:1},8,["urls"])]),_:1})]),_:1},8,["show","title"])}}}),Ve=["id"],Te=S("div",{class:"grid grid-cols-2"},null,-1),st=q({__name:"MoveHouseView",setup(h){const v=p(Q.getReadList()),w=p(Q.getWriteList()),m=p(!1),L=p(!1),c=[0,1,2,3,4,5,6,7,8,40,41,42,43,44,1984,9734,9735,1e4,10001,10002,3e4,30001,30008,30009,30023,30078],y=xe("checkedKinds",c),U=ie(),_=k(()=>U.value?[U.value]:[]),R=k(()=>[..._.value]),C=p(new Map),z=k(()=>[{kinds:y.value,authors:R.value}]),$=k(()=>(C.value.clear(),M.createChild().addStaff(_e()).addFilters(z.value).addStaff({push(s){var o;const l=s.kind;C.value.set(l,((o=C.value.get(l))!=null?o:0)+1)}}).addExtends(M)));function ee(){m.value=!0,$.value.addExtends(M.createChild().addStaff(pe()).addFilters(z.value).addRelayUrls(v.value))}const j=ye(10),P=k(()=>{let s=0;for(const[l,o]of C.value)s+=o;return s}),V=p(new Map);function te(){return{ok:0,error:0,ignore:0}}function G(s,l){const o=l.get(s);if(!o){const i=te();return V.value.set(s,i),i}return o}function ae(){const s=me(new Map);V.value=s,L.value=!0,M.createChild().addFilters(z.value).addStaff({push(l){j.unShift(()=>{var o;$.value.getRelayEmiter().on("ok",l.id,({ok:i,url:B})=>{const g=G(B,s);i?g.ok++:g.error++},{overtime:6e4});for(const i of w.value){if((o=fe(l.id))!=null&&o.has(i)){G(i,s).ignore++;continue}j.unShift(()=>{$.value.publish(l,new Set().add(i),{autoPublishToTagR:!1})})}})}}).addExtends($.value)}const F=Se(),le=de(),T=p(null);function se(s){var l;(l=T.value)==null||l.add(s),le.success(u("successfully_added"))}const A=p(!1);function ne(){T.value=v.value,A.value=!0}function oe(){T.value=w.value,A.value=!0}return(s,l)=>{const o=Ue,i=Z,B=Le,g=ve,E=he,N=Re,ue=$e;return f(),x(ke,null,{default:e(({id:re})=>{var I;return[t(Pe,{show:A.value,"onUpdate:show":l[0]||(l[0]=n=>A.value=n),onAddRelay:se,disabledList:(I=T.value)!=null?I:void 0},null,8,["show","disabledList"]),S("div",{id:re},[t(X,null,{default:e(()=>[t(N,{vertical:""},{default:e(()=>[t(g,{title:a(u)("kind")},{"header-extra":e(()=>[d(r(a(P)),1)]),default:e(()=>[t(B,{value:a(y),"onUpdate:value":[l[1]||(l[1]=n=>J(y)?y.value=n:null),l[2]||(l[2]=()=>{m.value=!1,L.value=!1})]},{default:e(()=>[(f(),D(K,null,H(c,n=>t(i,null,{header:e(()=>[t(o,{value:n,label:a(u)(`kind${n}`)},null,8,["value","label"])]),"header-extra":e(()=>{var b;return[d(r((b=C.value.get(n))!=null?b:0),1)]}),_:2},1024)),64))]),_:1},8,["value"])]),_:1},8,["title"]),t(g,{title:a(u)("include_user")},{default:e(()=>[t(B,{value:a(R),"onUpdate:value":l[3]||(l[3]=n=>J(R)?R.value=n:null)},{default:e(()=>[Te,(f(!0),D(K,null,H(a(_),n=>(f(),x(o,{value:n},{default:e(()=>[t(Ce,{withPrefix:!1,value:n},null,8,["value"])]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),_:1},8,["title"]),t(Y,{urls:v.value,title:a(u)("pull")},{action:e(()=>[t(N,null,{default:e(()=>[t(E,{disabled:m.value,type:"primary",onClick:ee},{default:e(()=>[d(r(a(u)("pull")),1)]),_:1},8,["disabled"]),t(E,{type:"primary",onClick:ne},{default:e(()=>[d(r(a(u)("add_relay")),1)]),_:1})]),_:1})]),_:1},8,["urls","title"]),t(Y,{urls:w.value,title:a(u)("push")},{action:e(()=>[t(N,null,{default:e(()=>[t(E,{disabled:L.value||a(P)===0,type:"primary",onClick:ae},{default:e(()=>[d(r(a(u)("push"))+"("+r(a(P))+") ",1)]),_:1},8,["disabled"]),t(E,{type:"primary",onClick:oe},{default:e(()=>[d(r(a(u)("add_relay")),1)]),_:1})]),_:1})]),_:1},8,["urls","title"]),t(g,{title:a(u)("result")},{"header-extra":e(()=>[d(r(a(P)),1)]),default:e(()=>[V.value.size===0?(f(),x(ue,{key:0,description:a(u)("empty_text")},null,8,["description"])):ce("",!0),(f(!0),D(K,null,H(V.value,([n,b])=>(f(),x(i,null,{header:e(()=>[d(r(n),1)]),"header-extra":e(()=>[S("span",{style:O({color:a(F).successColor})},r(b.ok),5),d(" / "),S("span",{style:O({color:a(F).primaryColor})},r(b.ignore),5),d(" / "),S("span",{style:O({color:a(F).errorColor})},r(b.error),5)]),_:2},1024))),256))]),_:1},8,["title"])]),_:1})]),_:1})],8,Ve)]}),_:1})}}});export{st as default};