import{g as ce,c as A,a as pe}from"./Contact.6b8c20de.js";import{by as _e,dh as de,bs as fe,f as C,V as B,bT as S,o as d,dH as U,dg as te,A as f,L as w,D as t,C as o,O as R,M as ne,F as e,B as h,dN as ae,de as ve,al as ye,dU as me,H as $,I as P,c6 as ke,ca as be,bS as ge,bp as we,az as D,dM as he,_ as M,cY as xe,Q as k,dV as $e,aA as se,z as Le,dW as Fe,aB as oe,J as E,cW as Ee,ab as I,W as x,bw as le,c8 as Be,aa as Ce,X as z,cd as De,dX as Pe,dY as Me,cA as ee,aS as O,cx as Se,aw as Ue,ay as N,dZ as Ae,a0 as Oe,d_ as Re,d$ as Ne,a9 as Ve,cw as ze,a8 as Ie,R as We,aJ as Ke,dL as je,e0 as Te}from"./index.ddbfeb2e.js";import{_ as ue,a as Je}from"./FollowItem.vue_vue_type_script_setup_true_lang.5efeb357.js";import{_ as V}from"./PostList.vue_vue_type_script_setup_true_lang.7efae235.js";import{_ as He,a as Xe}from"./RelayWritableButton.vue_vue_type_script_setup_true_lang.8317469c.js";import{_ as Ye,a as qe}from"./Tabs.822cf1bf.js";import{_ as Qe}from"./UserMetadataEditing.vue_vue_type_script_setup_true_lang.83e61b43.js";import"./PapawList.vue_vue_type_script_setup_true_lang.876524d1.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.1b04ab38.js";import"./CloudUpload.0c626ccd.js";function Ze(v){return _e(`createTipEventLine:${v.pubkey}`,()=>de({filters:[{kinds:[10001],authors:[v.pubkey]}],...v}).addStaff(fe()),{useLocalStorage:!1})}const Ge=C({__name:"Follow",props:{pubkey:null,urls:null,active:{type:Boolean}},setup(v){const y=v,a=B(!1),{pubkey:s,urls:u,active:c}=S(y),p=d(()=>(a.value=!a.value,ce(s.value,{urls:u==null?void 0:u.value}))),n=U(),g=d(()=>n.value?s.value===n.value?A.getContactConfiguration():p.value.feat.getContactList():[]),r=B(void 0);return te(r,{active:c}),(_,l)=>(f(),w("div",{ref_key:"divRef",ref:r,class:"p-4 box-border"},[t(e(ae),null,{default:o(()=>[(f(!0),w(R,null,ne(e(g),i=>(f(),h(ue,{key:i.pubkey,contact:i,pubkey:i.pubkey,name:i.name},null,8,["contact","pubkey","name"]))),128))]),_:1})],512))}}),et=C({__name:"Follower",props:{pubkey:null,active:{type:Boolean},urls:null},setup(v){const y=v,{pubkey:a,active:s}=S(y),u=d(()=>pe(a.value)),c=d(()=>u.value.getList());ve(u,s);const p=B(void 0);return te(p,{active:ye(y,"active")}),(n,g)=>(f(),w("div",{ref_key:"divRef",ref:p,class:"p-4 box-border"},[t(e(ae),null,{default:o(()=>[(f(!0),w(R,null,ne(e(c),r=>(f(),h(ue,{key:r.pubkey,pubkey:r.pubkey},null,8,["pubkey"]))),128))]),_:1})],512))}}),tt=C({__name:"ProfileMoreInfoRelayList",props:{pubkey:null,active:{type:Boolean}},setup(v){const y=v,{pubkey:a}=S(y),s=d(()=>ge(a.value)),u=me(async()=>{var n;return a.value===((n=await we())!=null?n:"")?{readUrl:D.getReadList(),writeUrl:D.getWriteList(),urls:new Set(Object.keys(D.getData()))}:s.value.feat.getReadWriteList()},void 0),c=d(()=>{var n;return(n=u.value)==null?void 0:n.urls});function p(){he.push({name:"relays"})}return(n,g)=>{var l;const r=M,_=xe;return f(),w(R,null,[t(_,{show:e(D).hasChange()},{default:o(()=>[t(r,{onClick:p,type:"primary"},{default:o(()=>[$(P(e(k)("save")),1)]),_:1})]),_:1},8,["show"]),t(be,{urls:(l=e(c))!=null?l:[],title:""},{right:o(({url:i})=>{var m,b,L,F;return[t(He,{active:(b=(m=e(u))==null?void 0:m.writeUrl.has(i))!=null?b:!1,class:"mr-1"},null,8,["active"]),t(Xe,{active:(F=(L=e(u))==null?void 0:L.readUrl.has(i))!=null?F:!1,class:"mr-2"},null,8,["active"]),t(ke,{url:i},null,8,["url"])]}),_:1},8,["urls"])],64)}}}),nt=C({__name:"SMSButtonProvide",props:{insertDropdownOptionList:null},setup(v){const y=v,a=$e();return se(()=>{var s;for(const u of(s=y.insertDropdownOptionList)!=null?s:[])a.insertDropdownOptionOptList.value.find(p=>p.key===u.key)||a.insertDropdownOption(u)}),(s,u)=>Le(s.$slots,"default")}}),at={key:0},st=C({__name:"ProfileMoreInfo",props:{pubkey:null,urls:null},setup(v){const y=v,{pubkey:a}=S(y);d(()=>[a.value]);const s=B("homepage"),u=Fe(),c=U(),p=d(()=>c.value===a.value),n=oe(),g={insertKey:"pin",key:"unpin",async handle(l){u.unpin(l),n.info(k("request_initiated"))},label:k("unpin")},r=d(()=>Ze({pubkey:a.value})),_=d(()=>{var l,i;return p.value?[...u.getData().tagMap.values()]:(i=(l=r.value.feat.getLatestEvent())==null?void 0:l.tags)!=null?i:[]});return(l,i)=>{const m=Ee,b=Ye,L=qe;return f(),h(L,{type:"line",value:s.value,"onUpdate:value":i[0]||(i[0]=F=>s.value=F),animated:""},{default:o(()=>[t(b,{"display-directive":"show:lazy",name:"homepage",tab:e(k)("homepage")},{default:o(()=>[e(_)&&e(_).length>0?(f(),w("div",at,[e(p)?(f(),h(nt,{key:0,insertDropdownOptionList:[g]},{default:o(()=>[t(V,{tags:e(_)},null,8,["tags"])]),_:1},8,["insertDropdownOptionList"])):(f(),h(V,{key:1,tags:e(_)},null,8,["tags"])),t(m,null,{default:o(()=>[$(P(e(k)("pin")),1)]),_:1})])):E("",!0),t(V,{active:s.value==="homepage",filters:[{kinds:[30023],authors:[e(a)]},{kinds:[1],authors:[e(a)]}],urls:y.urls},null,8,["active","filters","urls"])]),_:1},8,["tab"]),t(b,{"display-directive":"show:lazy",name:"follow",tab:e(k)("follow")},{default:o(()=>[t(Ge,{active:s.value==="follow",pubkey:e(a),urls:v.urls},null,8,["active","pubkey","urls"])]),_:1},8,["tab"]),t(b,{"display-directive":"show:lazy",name:"follower",tab:e(k)("follower")},{default:o(()=>[t(et,{active:s.value==="follower",pubkey:e(a)},null,8,["active","pubkey"])]),_:1},8,["tab"]),t(b,{"display-directive":"show:lazy",name:"\u4E2D\u7EE7",tab:e(k)("relay")},{default:o(()=>[t(tt,{active:s.value==="relay",pubkey:e(a)},null,8,["active","pubkey"])]),_:1},8,["tab"])]),_:1},8,["value"])}}}),ot={},lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ut=x("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),rt=x("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1),it=[ut,rt];function ct(v,y){return f(),w("svg",lt,it)}const pt=I(ot,[["render",ct]]),_t={},dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ft=x("path",{d:"M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z",fill:"currentColor"},null,-1),vt=[ft];function yt(v,y){return f(),w("svg",dt,vt)}const mt=I(_t,[["render",yt]]),kt=C({__name:"UserDataEditing",emits:["close"],setup(v,{emit:y}){const a=oe(),s=B({}),u=U({intercept:!0}),c=d(()=>{if(!!u.value)return le(u.value)}),p=d(()=>c.value&&c.value.feat.useMetadata());se(()=>{!p.value||(s.value=p.value)});const n=B(!1);async function g(){var r;n.value=!0,(r=c.value)==null||r.publish({content:JSON.stringify(s.value),kind:0},D.getWriteList(),{addUrl:!0,onOK({ok:_,url:l}){n.value=!1,_?a.success(`\u5DF2\u6210\u529F\u63D0\u4EA4\u5230${l}`):a.error(`\u63D0\u4EA4\u5230${l}\u5931\u8D25`)}})}return(r,_)=>{const l=Be,i=Ce;return e(c)?(f(),h(i,{key:0,class:"w-[600px] max-w-full max-h-full",title:"\u7F16\u8F91\u7528\u6237\u4FE1\u606F",bordered:!1,role:"dialog","aria-modal":"true"},{default:o(()=>[t(e(z),{vertical:""},{default:o(()=>[t(Qe,{userMetadata:s.value},null,8,["userMetadata"]),t(e(z),{center:""},{default:o(()=>[t(e(M),{type:"tertiary",onClick:_[0]||(_[0]=()=>y("close"))},{default:o(()=>[$(P(e(k)("cancel")),1)]),_:1}),t(l,{trigger:"hover"},{trigger:o(()=>[t(e(M),{type:"primary",onClick:g,loading:n.value,disabled:n.value},{default:o(()=>[$(P(e(k)("submit")),1)]),_:1},8,["loading","disabled"])]),default:o(()=>[$(" \u5982\u679C\u52A0\u8F7D\u4E0D\u5230\u5408\u9002\u7684\u4FE1\u606F\uFF0C\u90A3\u53EF\u80FD\u662Frelays\u8BBE\u7F6E\u4E0D\u5BF9\u8BF7\u5C1D\u8BD5\u914D\u7F6E\u4E00\u4E0B ")]),_:1}),n.value?(f(),h(l,{key:0,trigger:"hover"},{trigger:o(()=>[t(e(M),{onClick:_[1]||(_[1]=()=>n.value=!1)},{default:o(()=>[$("\u505C\u6B62\u52A0\u8F7D")]),_:1})]),default:o(()=>[$(" \u5982\u679C\u60A8\u662F\u65B0\u7528\u6237\u7684\u8BDD\uFF0C\u6216\u8005\u60A8\u653E\u5F03\u4E4B\u524D\u7684\u4FE1\u606F\u5C31\u53EF\u4EE5\u70B9\u6B64\u5904 ")]),_:1})):E("",!0)]),_:1})]),_:1})]),_:1})):E("",!0)}}}),bt=C({__name:"UserInformationButton",props:{pubkey:null},setup(v){var _;const y=v,{pubkey:a}=S(y),s=De(),u=U(),c=d(()=>a.value===u.value),p=B(!1),n=Pe(),g=Me(),r=B([c.value&&{label:k("edit_user_profile"),key:"editProfile",icon:ee(pt),props:{onclick(){p.value=!p.value}}},{label:k("copy"),key:"clipboard",icon:ee(mt),children:[{label:`${k("copy")} npub`,key:"copy-npub",props:{onclick(){const l=O.npubEncode(a.value);s(l)}}},{label:`${k("copy")} nprofile`,key:"copy-npro",props:{onclick(){const l=O.nprofileEncode({pubkey:a.value,relays:[...D.getWriteList()]});s(l)}}},c.value&&Se()===Ue.PrivateKey&&((_=N)==null?void 0:_.getPrivateKey)&&typeof N.getPrivateKey=="function"&&{label:`${k("copy")} nsec`,key:"copy-nsec",props:{onclick(){const l=O.nsecEncode(N.getPrivateKey());s(l)}}},{label:`${k("copy")} publicKey hex`,key:"copy-hex",props:{onclick(){s(a.value)}}}].filter(l=>!!l)},{label:k("recommend_user"),key:"recommendUser",props:{onclick(){n(a.value)}}},{label:k("recommend_metadata"),key:"recommendUserMetadata",props:{onclick(){g(a.value)}}}].filter(l=>!!l));return(l,i)=>{const m=M,b=Oe,L=Re;return f(),w(R,null,[t(b,{placement:"bottom-start",trigger:"click",options:r.value},{default:o(()=>[t(m,{circle:"",type:"info"},{default:o(()=>[t(Ae)]),_:1})]),_:1},8,["options"]),t(L,{show:p.value,"onUpdate:show":i[1]||(i[1]=F=>p.value=F)},{default:o(()=>[t(kt,{onClose:i[0]||(i[0]=()=>p.value=!1)})]),_:1},8,["show"])],64)}}}),gt={key:0,class:"w-full h-full flex flex-col"},wt={class:"flex flex-col"},ht={class:"flex items-center justify-end px-8 mt-4"},xt={key:1},$t={class:"flex items-center"},Lt={class:"w-full",style:{"word-break":"break-all","text-overflow":"ellipsis","word-wrap":"break-word"}},Ft=C({__name:"ProfileView",setup(v){const y=We(),a=U({intercept:!0}),s=d(()=>a.value?O.nprofileEncode({pubkey:a.value,relays:Array.from(D.getWriteList())}):""),u=d(()=>{var m;return(m=y.params.value)!=null?m:s.value}),c=d(()=>Ke(u.value)),p=d(()=>{var m;return((m=c.value)==null?void 0:m.pubkey)===a.value}),n=d(()=>{var m;return(m=c.value)==null?void 0:m.pubkey}),g=d(()=>{var m,b;return((m=c.value)==null?void 0:m.relays)&&new Set((b=c.value)==null?void 0:b.relays)}),r=d(()=>n.value?le(n.value,{urls:g.value}).feat.useMetadata():null),_=d(()=>n.value?A.isFollow(n.value):!1);async function l(){!n.value||(_.value?await A.unFollow(n.value):await A.follow(n.value))}const[i]=Ne(.3);return(m,b)=>{const L=je,F=Je,re=M,ie=z;return e(n)?(f(),w("div",gt,[t(Ie,{class:"flex-shrink flex-1 h-0",refreshable:"",loadable:""},{default:o(()=>{var W,K,j,T,J,H,X,Y,q;return[x("div",wt,[x("div",{ref_key:"target",ref:i,class:"h-0 w-full relative flex-shrink-0",style:{}},[((j=(W=e(r))==null?void 0:W.banner)!=null?j:(K=e(r))==null?void 0:K.picture)?(f(),h(L,{key:0,src:(H=(T=e(r))==null?void 0:T.banner)!=null?H:(J=e(r))==null?void 0:J.picture,"object-fit":"cover",class:"w-full h-full banner"},null,8,["src"])):E("",!0),t(F,{class:"absolute bottom-0 left-2",style:Ve({transform:"translate(0,50%)"}),round:"",size:100,src:(Y=(X=e(r))==null?void 0:X.picture)!=null?Y:e(Te)},null,8,["style","src"])],512),x("div",null,[x("div",ht,[t(ie,null,{default:o(()=>[e(p)?E("",!0):(f(),h(re,{key:0,class:"ml-4",strong:"",round:"",type:e(_)?"warning":"primary",onClick:l},{default:o(()=>[$(P(e(_)?"UnFollow":"Follow"),1)]),_:1},8,["type"])),e(n)?(f(),w("div",xt,[t(bt,{pubkey:e(n)},null,8,["pubkey"])])):E("",!0)]),_:1})]),x("h1",$t,[t(ze,null,{default:o(()=>{var Q,Z,G;return[$(P((G=(Q=e(r))==null?void 0:Q.name)!=null?G:(Z=e(c))==null?void 0:Z.pubkey.slice(0,10)),1)]}),_:1})]),x("div",Lt,P((q=e(r))==null?void 0:q.about),1)])]),e(n)?(f(),h(st,{key:0,pubkey:e(n),urls:e(g)},null,8,["pubkey","urls"])):E("",!0)]}),_:1})])):E("",!0)}}});const Rt=I(Ft,[["__scopeId","data-v-44199ace"]]);export{Rt as default};
