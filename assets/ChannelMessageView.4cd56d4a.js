import{ab as $,A as f,L as k,W as h,dP as U,V as W,dQ as K,ae as q,aB as A,f as M,bT as G,B as m,F as o,o as l,aA as X,dR as Y,cL as Z,cd as ee,dH as ne,a6 as te,C as i,D as r,J as v,H as ae,I as oe,a8 as se,R as le,dS as ue,cK as ce,Q as p,dM as re,_ as ie,aS as fe}from"./index.ddbfeb2e.js";import{g as B,b as _e,a as de}from"./FollowChannel.58136f82.js";import{_ as he}from"./PapawList.vue_vue_type_script_setup_true_lang.876524d1.js";import{_ as ve}from"./RichTextEditBox.vue_vue_type_script_setup_true_lang.05e7b11a.js";import{_ as pe}from"./PageHeader.b6012dfa.js";import"./Result.046bf07f.js";import"./Tabs.822cf1bf.js";import"./Close.49cdf001.js";import"./SelectMenu.696aeea1.js";import"./Checkmark.3821664b.js";import"./VirtualList.40d87c64.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.1b04ab38.js";import"./CloudUpload.0c626ccd.js";const me={},ge={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},Ce=h("g",null,[h("g",null,[h("path",{d:`M383.822,344.427c-16.045,0-31.024,5.326-41.721,15.979l-152.957-88.42c1.071-5.328,2.142-9.593,2.142-14.919\r
			c0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762,10.653,26.741,17.041,43.852,17.041c35.295,0,64.178-28.766,64.178-63.92\r
			C448,72.767,419.117,44,383.822,44c-35.297,0-64.179,28.767-64.179,63.92c0,5.327,1.065,9.593,2.142,14.919l-150.821,87.35\r
			c-11.767-10.654-26.741-17.041-43.856-17.041c-35.296,0-63.108,28.766-63.108,63.92c0,35.153,28.877,63.92,64.178,63.92\r
			c17.115,0,32.089-6.389,43.856-17.042l151.891,88.421c-1.076,4.255-2.141,8.521-2.141,13.847\r
			c0,34.094,27.806,61.787,62.037,61.787c34.229,0,62.036-27.693,62.036-61.787C445.858,372.12,418.052,344.427,383.822,344.427z`})])],-1),xe=[Ce];function we(s,t){return f(),k("svg",ge,xe)}const Be=$(me,[["render",we]]),ke={},Le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 576 512"},ye=h("path",{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z",fill:"currentColor"},null,-1),be=[ye];function De(s,t){return f(),k("svg",Le,be)}const Ee=$(ke,[["render",De]]);function Se(s){const t=U(),c=W(!0),n=()=>{c.value=!1};for(const a of["scroll","touchmove"])K(t==null?void 0:t.containerRef,a,n,{once:!0});const _=q(()=>{var a;return(a=s.value)==null?void 0:a.length},()=>{var a;c.value?(a=t==null?void 0:t.scrollbarInst.value)==null||a.scrollBy({top:99999,behavior:"smooth"}):_()})}function $e(s){const t=A();function c(){!s.value||(B().joinChannel(s.value),t.info("\u5DF2\u63D0\u4EA4\u52A0\u5165\u7FA4\u804A\u7684\u8BF7\u6C42"))}function n(){!s.value||(B().leaveChannel(s.value),t.info("\u5DF2\u7ECF\u63D0\u4EA4\u4E86\u79BB\u5F00\u7FA4\u804A\u7684\u8BF7\u6C42"))}return{handleJoinChannel:c,handleLeaveChannel:n}}const Ae=M({__name:"ChannelMessageList",props:{eventList:null},emits:["eventDeletion"],setup(s,{emit:t}){const c=s,{eventList:n}=G(c);return Se(n),(_,a)=>(f(),m(he,{withPapawOptionsButtons:!1,eventList:o(n),onEventDeletion:a[0]||(a[0]=d=>t("eventDeletion",d))},null,8,["eventList"]))}}),Me={key:0,class:"flex flex-col h-full overflow-auto"},Fe={class:"felx items-center justify-center"},We=M({__name:"ChannelMessageView",setup(s){const t=le(),c=l(()=>ue(t.params.value)),n=l(()=>{var e;return(e=c.value)==null?void 0:e.id}),_=B();X(()=>{!n.value||ce(n.value)});const a=l(()=>n.value?_.getData().get(n.value):void 0),d=l(()=>{var e;return(e=a.value)==null?void 0:e.relayUrls}),u=l(()=>{if(!!n.value)return _e(n.value,{urls:d.value})});Y(u),l(()=>u.value&&u.value.getList());const L=l(()=>n.value&&de(n.value)),y=l(()=>L.value&&L.value.feat.useMetadata()),b=l(()=>{var e;if(!!n.value)return(e=a.value)==null?void 0:e.event}),D=A();function F(){var e;(e=u.value)==null||e.feat.refresh(),D.info(p("refreshing"))}function V(){var e;(e=u.value)==null||e.feat.load(),D.info(p("loading"))}setInterval(()=>{var e;(e=u.value)==null||e.feat.refresh()},15e3);const{handleJoinChannel:J,handleLeaveChannel:N}=$e(n);function H(){g.value?N():J()}const R=Z(42,u);function T(e){var C;if(!!n.value){e.tags=[...e.tags,["e",n.value,"root"]];for(const x of(C=d.value)!=null?C:[])e.tags.push(["r",x]);R(e)}}const g=l(()=>n.value?_.hasJoin(n.value):!1),j=ee();function E(){var e;if(!!n.value)return fe.neventEncode({id:n.value,relays:[...(e=d.value)!=null?e:[]]})}function z(){const e=E();!e||j(e)}function P(){const e=E();!e||re.push({name:"edit-channel",params:{value:e}})}const O=ne();return(e,C)=>{const x=Ee,S=te,w=ie,I=Be,Q=pe;return o(n)?(f(),k("div",Me,[o(y)?(f(),m(Q,{key:0,class:"flex-shrink-0",subtitle:o(y).name,onBack:e.$router.back},{extra:i(()=>[h("div",Fe,[o(b)&&o(b).pubkey===o(O)?(f(),m(w,{key:0,class:"mr-2",round:"",onClick:P},{default:i(()=>[r(S,null,{default:i(()=>[r(x)]),_:1})]),_:1})):v("",!0),r(w,{class:"mr-2",round:"",onClick:z},{default:i(()=>[r(S,null,{default:i(()=>[r(I)]),_:1})]),_:1}),r(w,{round:"",type:o(g)?"default":"primary",onClick:H},{default:i(()=>[ae(oe(o(g)?o(p)("leave"):o(p)("join")),1)]),_:1},8,["type"])])]),_:1},8,["subtitle","onBack"])):v("",!0),r(se,{class:"flex-shrink flex-1",loadable:"",refreshable:"",onLoad:F,onRefresh:V},{default:i(()=>[o(u)?(f(),m(Ae,{key:0,eventList:o(u).getList()},null,8,["eventList"])):v("",!0)]),_:1}),r(ve,{onSend:T})])):v("",!0)}}});export{We as default};
