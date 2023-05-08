import{p as ye}from"./profile-2-400x400.3309f571.js";import{E as ve}from"./Ellipsis.021c946e.js";import{q as S,s as ue,h as q,w as ke}from"./use.b23b6c29.js";import{f as A,N as B,aL as z,bk as G,k as m,o as f,z as C,m as t,w as n,F as V,A as ie,n as e,l as $,M as be,dv as ge,v as E,x as M,bn as we,C as v,_ as ce,r as he,an as pe,y as P,aJ as J,au as F,aD as xe,D as Ce}from"./index.8f62a545.js";import{T as L,r as U,n as K}from"./nostr.c03670ae.js";import{a as O}from"./nostrApiUse.43d55506.js";import{_ as _e,a as $e}from"./FollowItem.vue_vue_type_script_setup_true_lang.0b08214d.js";import{_ as me}from"./ListItem.5a517004.js";import{u as Le,S as Fe}from"./Scrollbar.c7e90ffe.js";import{_ as W}from"./PostList.vue_vue_type_script_setup_true_lang.a6cbe973.js";import{g as Ee}from"./error.469adc75.js";import{a as De}from"./RelayAddButton.vue_vue_type_script_setup_true_lang.03e333cd.js";import{a as Pe}from"./RelayConnectList.vue_vue_type_script_setup_true_lang.2443e1f7.js";import{_ as Be,a as Ae}from"./RelayWritableButton.vue_vue_type_script_setup_true_lang.488fabfd.js";import{_ as N}from"./Button.22997a19.js";import{a as Me,i as Se,_ as Ue,j as Ne,k as ze,l as Oe}from"./Papaw.635c4eff.js";import{_ as Re,a as Ve}from"./Tabs.189dc90f.js";import{g as Ie,N as je}from"./login.0b8718d8.js";import{n as R}from"./nostr.ad89cf30.js";import{u as Ke,r as le}from"./naiveUi.02e209d9.js";import{_ as We}from"./UserMetadataEditing.vue_vue_type_script_setup_true_lang.8c1917e6.js";import{_ as Te}from"./Tooltip.d86a0762.js";import{_ as qe}from"./Card.6e48fdd4.js";import{_ as T}from"./Space.32f062de.js";import{_ as Ge}from"./Modal.2a8cd6ad.js";import{_ as Je}from"./Dropdown.09a70bb4.js";import{t as Ye}from"./nostr.0043d5e6.js";import{_ as He}from"./RegExpUtils.102c01f0.js";import"./Staff.e039c64f.js";import"./composables.10bdf172.js";import"./utils.e1137b57.js";import"./is-browser.f4df612e.js";import"./Tag.7e30ed31.js";import"./use-rtl.6d35c504.js";import"./create-key.7b548031.js";import"./use-css-vars-class.1ada0b07.js";import"./Loading.0b953150.js";import"./use-style.d8216a24.js";import"./Close.dba1bcea.js";import"./Icon.1c3d6ebf.js";import"./Close.7d56270d.js";import"./replaceable.815b8f5c.js";import"./Scrollbar.8d5a1903.js";import"./cssr.21c6f8e2.js";import"./LoadProgress.a8e5dee8.js";import"./Icon.904bc99e.js";import"./format-length.3612bbc8.js";import"./Scrollbar.75edf2b0.js";import"./PapawList.vue_vue_type_script_setup_true_lang.c75d13f0.js";import"./RelayInfoView.0394eae9.js";import"./index.62f1e1b0.js";import"./Empty.81d9c633.js";import"./use-locale.cbb1f83b.js";import"./use-theme-vars.c704e62a.js";import"./createEventSourceTracers.1da380d1.js";import"./NaddrLink.vue_vue_type_script_setup_true_lang.e9edc141.js";import"./Markdown.05f716d1.js";import"./UserLink.vue_vue_type_script_setup_true_lang.0cad1bf3.js";import"./MavonEditor.aa4b0597.js";import"./DrawerProvide.vue_vue_type_script_setup_true_lang.da186b5d.js";import"./DrawerContent.bb261013.js";import"./Follower.7ba57362.js";import"./Popover.6590eae2.js";import"./index.71604e6f.js";import"./fade-in-height-expand.cssr.a4865c47.js";import"./ContentBlacklistView.1f898a24.js";import"./Input.90533fe2.js";import"./Add.d66e299e.js";import"./render.568a1ab1.js";import"./omit.ef9bf2ca.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.a94967af.js";import"./CloudUpload.c28b341b.js";import"./Upload.39a290a3.js";import"./Warning.6502c178.js";import"./Upload.b5c9ebfa.js";import"./keysOf.8a025f7e.js";import"./get-slot.4ceacf82.js";import"./fade-in-scale-up.cssr.5ebe4351.js";import"./create.2deeaf6a.js";const Qe=A({__name:"Follow",props:{pubkey:null,urls:null,active:{type:Boolean}},async setup(g){let r,a;const l=g,s=B(!1),{pubkey:c,urls:p,active:y}=z(l),i=([r,a]=G(()=>q(L.ContactConfigurationSynchronizer)),r=await r,a(),r),d=S(L.ContactApi),w=m(()=>(s.value=!s.value,d.getContactListLineByPubkey(c.value,{urls:p==null?void 0:p.value}))),o=O(),_=m(()=>o.value?c.value===o.value?Object.values(i.getContactConfiguration()):w.value.feat.getContactList():[]),u=B(void 0);return ue(u,{active:y}),(h,x)=>(f(),C("div",{ref_key:"divRef",ref:u,class:"p-4 box-border"},[t(e(me),null,{default:n(()=>[(f(!0),C(V,null,ie(e(_),k=>(f(),$(_e,{key:k.pubkey,contact:k,pubkey:k.pubkey,name:k.name},null,8,["contact","pubkey","name"]))),128))]),_:1})],512))}}),Xe=A({__name:"Follower",props:{pubkey:null,active:{type:Boolean},urls:null},setup(g){const r=g,{pubkey:a,active:l}=z(r),s=S(L.ContactApi),c=m(()=>s.getFollowerLineByPubkey(a.value)),p=m(()=>c.value.getList());Le(c,l);const y=B(void 0);return ue(y,{active:be(r,"active")}),(i,d)=>(f(),C("div",{ref_key:"divRef",ref:y,class:"p-4 box-border"},[t(e(me),null,{default:n(()=>[(f(!0),C(V,null,ie(e(p),w=>(f(),$(_e,{key:w.pubkey,pubkey:w.pubkey},null,8,["pubkey"]))),128))]),_:1})],512))}}),Ze=A({__name:"ProfileMoreInfoRelayList",props:{pubkey:null,active:{type:Boolean}},setup(g){const r=g,{pubkey:a}=z(r),l=S(L.UserApi),s=m(()=>l.getUserRelayUrlConfigByPubkey(a.value)),c=ge(async()=>{var i;return a.value===((i=await Ee())!=null?i:"")?{readUrl:U.getReadList(),writeUrl:U.getWriteList(),urls:new Set(Object.keys(U.getData()))}:s.value.feat.getReadWriteList()},void 0),p=m(()=>{var i;return(i=c.value)==null?void 0:i.urls});function y(){we.push({name:"relays"})}return(i,d)=>{var _;const w=N,o=Me;return f(),C(V,null,[t(o,{show:e(U).hasChange()},{default:n(()=>[t(w,{onClick:y,type:"primary"},{default:n(()=>[E(M(e(v)("save")),1)]),_:1})]),_:1},8,["show"]),t(Pe,{urls:(_=e(p))!=null?_:[],title:""},{right:n(({url:u})=>{var h,x,k,b;return[t(Be,{active:(x=(h=e(c))==null?void 0:h.writeUrl.has(u))!=null?x:!1,class:"mr-1"},null,8,["active"]),t(Ae,{active:(b=(k=e(c))==null?void 0:k.readUrl.has(u))!=null?b:!1,class:"mr-2"},null,8,["active"]),t(De,{url:u},null,8,["url"])]}),_:1},8,["urls"])],64)}}}),et=A({__name:"SMSButtonProvide",props:{insertDropdownOptionList:null},setup(g){const r=g,a=Se();return ce(()=>{var l;for(const s of(l=r.insertDropdownOptionList)!=null?l:[])a.insertDropdownOptionOptList.value.find(p=>p.key===s.key)||a.insertDropdownOption(s)}),(l,s)=>he(l.$slots,"default")}}),tt={key:0},ot=A({__name:"ProfileMoreInfo",props:{pubkey:null,urls:null},async setup(g){let r,a;const l=g,{pubkey:s}=z(l),c=([r,a]=G(()=>q(L.PinListSynchronizer)),r=await r,a(),r),p=S(L.PinApi),y=m(()=>[s.value]),i=B("homepage"),d=O(),w=m(()=>d.value===s.value),o=pe(),_={insertKey:"pin",key:"unpin",async handle(x){c.unpin(x),o.info(v("request_initiated"))},label:v("unpin")},u=m(()=>p.createPinEventLine({pubkey:s.value})),h=m(()=>{var x,k;return w.value?[...c.getPinListSync().tagMap.values()]:(k=(x=u.value.feat.getLatestEvent())==null?void 0:x.tags)!=null?k:[]});return(x,k)=>{const b=Ue,D=Re,I=Ve;return f(),$(I,{type:"line",value:i.value,"onUpdate:value":k[0]||(k[0]=j=>i.value=j),animated:""},{default:n(()=>[t(D,{"display-directive":"show:lazy",name:"homepage",tab:e(v)("homepage")},{default:n(()=>[e(h)&&e(h).length>0?(f(),C("div",tt,[e(w)?(f(),$(et,{key:0,insertDropdownOptionList:[_]},{default:n(()=>[t(W,{tags:e(h)},null,8,["tags"])]),_:1},8,["insertDropdownOptionList"])):(f(),$(W,{key:1,tags:e(h)},null,8,["tags"])),t(b,null,{default:n(()=>[E(M(e(v)("pin")),1)]),_:1})])):P("",!0),t(W,{active:i.value==="homepage",filters:[{kinds:[30023],authors:e(y)},{kinds:[1],authors:e(y)}],urls:l.urls},null,8,["active","filters","urls"])]),_:1},8,["tab"]),t(D,{"display-directive":"show:lazy",name:"follow",tab:e(v)("follow")},{default:n(()=>[t(Qe,{active:i.value==="follow",pubkey:e(s),urls:g.urls},null,8,["active","pubkey","urls"])]),_:1},8,["tab"]),t(D,{"display-directive":"show:lazy",name:"follower",tab:e(v)("follower")},{default:n(()=>[t(Xe,{active:i.value==="follower",pubkey:e(s)},null,8,["active","pubkey"])]),_:1},8,["tab"]),t(D,{"display-directive":"show:lazy",name:"\u4E2D\u7EE7",tab:e(v)("relay")},{default:n(()=>[t(Ze,{active:i.value==="relay",pubkey:e(s)},null,8,["active","pubkey"])]),_:1},8,["tab"])]),_:1},8,["value"])}}}),nt={},rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},at=F("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),st=F("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1),lt=[at,st];function ut(g,r){return f(),C("svg",rt,lt)}const it=J(nt,[["render",ut]]),ct={},pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_t=F("path",{d:"M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z",fill:"currentColor"},null,-1),mt=[_t];function ft(g,r){return f(),C("svg",pt,mt)}const dt=J(ct,[["render",ft]]),yt=A({__name:"UserDataEditing",emits:["close"],setup(g,{emit:r}){const a=pe(),l=B({}),s=S(L.UserApi),c=S(L.RelayConfiguratorSynchronizer),p=O({intercept:!0}),y=m(()=>{if(!!p.value)return s.getUserMetadataLineByPubkey(p.value)}),i=m(()=>y.value&&y.value.feat.useMetadata());ce(()=>{!i.value||(l.value=i.value)});const d=B(!1);async function w(){var o;d.value=!0,(o=y.value)==null||o.publish({content:JSON.stringify(l.value),kind:0},c.getWriteList(),{addUrl:!0,onOK({ok:_,url:u}){d.value=!1,_?a.success(`\u5DF2\u6210\u529F\u63D0\u4EA4\u5230${u}`):a.error(`\u63D0\u4EA4\u5230${u}\u5931\u8D25`)}})}return(o,_)=>{const u=Te,h=qe;return e(y)?(f(),$(h,{key:0,class:"w-[600px] max-w-full max-h-full",title:"\u7F16\u8F91\u7528\u6237\u4FE1\u606F",bordered:!1,role:"dialog","aria-modal":"true"},{default:n(()=>[t(e(T),{vertical:""},{default:n(()=>[t(We,{userMetadata:l.value},null,8,["userMetadata"]),t(e(T),{center:""},{default:n(()=>[t(e(N),{type:"tertiary",onClick:_[0]||(_[0]=()=>r("close"))},{default:n(()=>[E(M(e(v)("cancel")),1)]),_:1}),t(u,{trigger:"hover"},{trigger:n(()=>[t(e(N),{type:"primary",onClick:w,loading:d.value,disabled:d.value},{default:n(()=>[E(M(e(v)("submit")),1)]),_:1},8,["loading","disabled"])]),default:n(()=>[E(" \u5982\u679C\u52A0\u8F7D\u4E0D\u5230\u5408\u9002\u7684\u4FE1\u606F\uFF0C\u90A3\u53EF\u80FD\u662Frelays\u8BBE\u7F6E\u4E0D\u5BF9\u8BF7\u5C1D\u8BD5\u914D\u7F6E\u4E00\u4E0B ")]),_:1}),d.value?(f(),$(u,{key:0,trigger:"hover"},{trigger:n(()=>[t(e(N),{onClick:_[1]||(_[1]=()=>d.value=!1)},{default:n(()=>[E("\u505C\u6B62\u52A0\u8F7D")]),_:1})]),default:n(()=>[E(" \u5982\u679C\u60A8\u662F\u65B0\u7528\u6237\u7684\u8BDD\uFF0C\u6216\u8005\u60A8\u653E\u5F03\u4E4B\u524D\u7684\u4FE1\u606F\u5C31\u53EF\u4EE5\u70B9\u6B64\u5904 ")]),_:1})):P("",!0)]),_:1})]),_:1})]),_:1})):P("",!0)}}}),vt=A({__name:"UserInformationButton",props:{pubkey:null},setup(g){var w;const r=g,{pubkey:a}=z(r),l=Ke(),s=O(),c=m(()=>a.value===s.value),p=B(!1),y=Ne(),i=ze(),d=B([c.value&&{label:v("edit_user_profile"),key:"editProfile",icon:le(it),props:{onclick(){p.value=!p.value}}},{label:v("copy"),key:"clipboard",icon:le(dt),children:[{label:`${v("copy")} npub`,key:"copy-npub",props:{onclick(){const o=R.npubEncode(a.value);l(o)}}},{label:`${v("copy")} nprofile`,key:"copy-npro",props:{onclick(){const o=R.nprofileEncode({pubkey:a.value,relays:[...U.getWriteList()]});l(o)}}},c.value&&Ie()===je.PrivateKey&&((w=K)==null?void 0:w.getPrivateKey)&&typeof K.getPrivateKey=="function"&&{label:`${v("copy")} nsec`,key:"copy-nsec",props:{onclick(){const o=R.nsecEncode(K.getPrivateKey());l(o)}}},{label:`${v("copy")} publicKey hex`,key:"copy-hex",props:{onclick(){l(a.value)}}}].filter(o=>!!o)},{label:v("recommend_user"),key:"recommendUser",props:{onclick(){y(a.value)}}},{label:v("recommend_metadata"),key:"recommendUserMetadata",props:{onclick(){i(a.value)}}}].filter(o=>!!o));return(o,_)=>{const u=N,h=Je,x=Ge;return f(),C(V,null,[t(h,{placement:"bottom-start",trigger:"click",options:d.value},{default:n(()=>[t(u,{circle:"",type:"info"},{default:n(()=>[t(Oe)]),_:1})]),_:1},8,["options"]),t(x,{show:p.value,"onUpdate:show":_[1]||(_[1]=k=>p.value=k)},{default:n(()=>[t(yt,{onClose:_[0]||(_[0]=()=>p.value=!1)})]),_:1},8,["show"])],64)}}}),kt={key:0,class:"w-full h-full flex flex-col"},bt={class:"flex flex-col"},gt={class:"flex items-center justify-end px-8 mt-4"},wt={key:1},ht={class:"flex items-center"},xt={class:"w-full",style:{"word-break":"break-all","text-overflow":"ellipsis","word-wrap":"break-word"}},Ct=A({__name:"ProfileView",async setup(g){let r,a;const l=Ce(),s=O({intercept:!0}),c=([r,a]=G(()=>q(L.ContactConfigurationSynchronizer)),r=await r,a(),r),p=S(L.UserApi),y=m(()=>s.value?R.nprofileEncode({pubkey:s.value,relays:Array.from(U.getWriteList())}):""),i=m(()=>{var b;return(b=l.params.value)!=null?b:y.value}),d=m(()=>Ye(i.value)),w=m(()=>{var b;return((b=d.value)==null?void 0:b.pubkey)===s.value}),o=m(()=>{var b;return(b=d.value)==null?void 0:b.pubkey}),_=m(()=>{var b,D;return((b=d.value)==null?void 0:b.relays)&&new Set((D=d.value)==null?void 0:D.relays)}),u=m(()=>o.value?p.getUserMetadataLineByPubkey(o.value,{urls:_.value}).feat.useMetadata():null),h=m(()=>o.value?c.isFollow(o.value):!1);async function x(){!o.value||(h.value?await c.unFollow(o.value):await c.follow(o.value))}const[k]=ke(.3);return(b,D)=>{const I=He,j=$e,fe=N,de=T;return e(o)?(f(),C("div",kt,[t(Fe,{class:"flex-shrink flex-1 h-0",refreshable:"",loadable:""},{default:n(()=>{var Y,H,Q,X,Z,ee,te,oe,ne;return[F("div",bt,[F("div",{ref_key:"target",ref:k,class:"h-0 w-full relative flex-shrink-0",style:{}},[((Q=(Y=e(u))==null?void 0:Y.banner)!=null?Q:(H=e(u))==null?void 0:H.picture)?(f(),$(I,{key:0,src:(ee=(X=e(u))==null?void 0:X.banner)!=null?ee:(Z=e(u))==null?void 0:Z.picture,"object-fit":"cover",class:"w-full h-full banner"},null,8,["src"])):P("",!0),t(j,{class:"absolute bottom-0 left-2",style:xe({transform:"translate(0,50%)"}),round:"",size:100,src:(oe=(te=e(u))==null?void 0:te.picture)!=null?oe:e(ye)},null,8,["style","src"])],512),F("div",null,[F("div",gt,[t(de,null,{default:n(()=>[e(w)?P("",!0):(f(),$(fe,{key:0,class:"ml-4",strong:"",round:"",type:e(h)?"warning":"primary",onClick:x},{default:n(()=>[E(M(e(h)?"UnFollow":"Follow"),1)]),_:1},8,["type"])),e(o)?(f(),C("div",wt,[t(vt,{pubkey:e(o)},null,8,["pubkey"])])):P("",!0)]),_:1})]),F("h1",ht,[t(ve,null,{default:n(()=>{var re,ae,se;return[E(M((se=(re=e(u))==null?void 0:re.name)!=null?se:(ae=e(d))==null?void 0:ae.pubkey.slice(0,10)),1)]}),_:1})]),F("div",xt,M((ne=e(u))==null?void 0:ne.about),1)])]),e(o)?(f(),$(ot,{key:0,pubkey:e(o),urls:e(_)},null,8,["pubkey","urls"])):P("",!0)]}),_:1})])):P("",!0)}}});const Qo=J(Ct,[["__scopeId","data-v-77b11a24"]]);export{Qo as default};