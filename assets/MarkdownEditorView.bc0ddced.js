import{_ as ee,a as te}from"./Drawer.vue_vue_type_script_setup_true_lang.cd23c256.js";import{C as ne}from"./Copy16Filled.0df54f6e.js";import{c as H,f as K,u as ae,aG as oe,aI as se,av as v,h as W,f3 as le,aA as ie,aH as ue,n as l,q as re,j as O,_ as de,x as ce,c0 as me,aQ as pe,r as N,bA as ve,y as Q,I as fe,aV as M,T as ge,aC as L,dj as he,cm as _e,z as ye,A as x,H as d,C as P,Q as be,S as Ce,d9 as we,ar as q,ab as Te,O as j}from"./index.dd8c0757.js";import{u as ke}from"./Markdown.ab84075b.js";import{M as Ve}from"./MavonEditor.8712ed8c.js";import{_ as Ie}from"./UploadInput.vue_vue_type_script_setup_true_lang.a876f2f2.js";import{u as Fe}from"./naiveUi.4042f557.js";import{c as Se}from"./nostr.0c764f9a.js";import{i as Ae}from"./use.b9e0cb1d.js";import{_ as Re,c as Oe}from"./Tag.5928ae9a.js";import{s as xe}from"./prop.0533c762.js";import{_ as G}from"./Input.c0cbabec.js";import{_ as J}from"./Space.eeb4a7c6.js";import{N as ze}from"./Icon.728af6b3.js";import"./DrawerContent.cafeef9c.js";import"./event.44d09d76.js";import"./autoAddRelayurlByEventIdStaff.2840aa6c.js";import"./getCacheStaff.19f888e0.js";import"./use-theme-vars.314641c6.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.afb0c12a.js";import"./CloudUpload.7b2b77e1.js";import"./get-slot.4ceacf82.js";const Be=H("dynamic-tags",[H("input",{minWidth:"var(--n-input-width)"})]),Ue=Object.assign(Object.assign(Object.assign({},W.props),Oe),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:a=>a},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),$e=K({name:"DynamicTags",props:Ue,setup(a){const{mergedClsPrefixRef:m,inlineThemeDisabled:f}=ae(a),{localeRef:_}=oe("DynamicTags"),y=se(a),{mergedDisabledRef:u}=y,p=v(""),g=v(!1),b=v(!0),C=v(null),z=W("DynamicTags","-dynamic-tags",Be,le,a,m),I=v(a.defaultValue),c=ie(a,"value"),t=ue(c,I),B=l(()=>_.value.add),U=l(()=>xe(a.size)),F=l(()=>u.value||!!a.max&&t.value.length>=a.max);function S(e){const{onChange:o,"onUpdate:value":T,onUpdateValue:E}=a,{nTriggerFormInput:s,nTriggerFormChange:n}=y;o&&N(o,e),E&&N(E,e),T&&N(T,e),I.value=e,s(),n()}function A(e){const o=t.value.slice(0);o.splice(e,1),S(o)}function $(e){switch(e.key){case"Enter":h()}}function h(e){const o=e!=null?e:p.value;if(o){const T=t.value.slice(0);T.push(a.onCreate(o)),S(T)}g.value=!1,b.value=!0,p.value=""}function w(){h()}function D(){g.value=!0,pe(()=>{var e;(e=C.value)===null||e===void 0||e.focus(),b.value=!1})}const R=l(()=>{const{self:{inputWidth:e}}=z.value;return{"--n-input-width":e}}),i=f?re("dynamic-tags",void 0,R,a):void 0;return{mergedClsPrefix:m,inputInstRef:C,localizedAdd:B,inputSize:U,inputValue:p,showInput:g,inputForceFocused:b,mergedValue:t,mergedDisabled:u,triggerDisabled:F,handleInputKeyUp:$,handleAddClick:D,handleInputBlur:w,handleCloseClick:A,handleInputConfirm:h,mergedTheme:z,cssVars:f?void 0:R,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedTheme:a,cssVars:m,mergedClsPrefix:f,onRender:_,renderTag:y}=this;return _==null||_(),O(J,{class:[`${f}-dynamic-tags`,this.themeClass],size:"small",style:m,theme:a.peers.Space,themeOverrides:a.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:u,tagStyle:p,type:g,round:b,size:C,color:z,closable:I,mergedDisabled:c,showInput:t,inputValue:B,inputStyle:U,inputSize:F,inputForceFocused:S,triggerDisabled:A,handleInputKeyUp:$,handleInputBlur:h,handleAddClick:w,handleCloseClick:D,handleInputConfirm:R,$slots:i}=this;return this.mergedValue.map((e,o)=>y?y(e,o):O(Re,{key:o,theme:u.peers.Tag,themeOverrides:u.peerOverrides.Tag,style:p,type:g,round:b,size:C,color:z,closable:I,disabled:c,onClose:()=>D(o)},{default:()=>typeof e=="string"?e:e.label})).concat(t?i.input?i.input({submit:R,deactivate:h}):O(G,Object.assign({placeholder:"",size:F,style:U,autosize:!0},this.inputProps,{ref:"inputInstRef",value:B,onUpdateValue:e=>{this.inputValue=e},theme:u.peers.Input,themeOverrides:u.peerOverrides.Input,onKeyup:$,onBlur:h,internalForceFocus:S})):i.trigger?i.trigger({activate:w,disabled:A}):O(de,{dashed:!0,disabled:A,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,size:F,onClick:w},{icon:()=>O(ce,{clsPrefix:f},{default:()=>O(me,null)})}))}})}}),De={},Pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},je=M("g",{fill:"none"},[M("path",{d:"M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9zM4.5 7v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7h-11z",fill:"currentColor"})],-1),Me=[je];function Ee(a,m){return Q(),fe("svg",Pe,Me)}const Ne=ve(De,[["render",Ee]]),He=["id"],Le=["title"],qe=["title"],vt=K({__name:"MarkdownEditorView",setup(a){const m=ge(),f=be(),_=Ce();m.start();const y=l(()=>f.params.value),u=l(()=>f.query.new);L(u,()=>{u.value&&m.finish()});const p=v(30023),{addressPointer:g,line:b,longFormContentOptions:C,event:z}=ke(y),I=he(),c=l(()=>{var n;if(Boolean(g.value))return g.value;const s={identifier:we(),pubkey:(n=I.value)!=null?n:"",kind:p.value,relays:[]};return setTimeout(()=>{_.push({name:"markdown-editor",params:{value:q.naddrEncode(s)},query:{new:"1"}})}),s});c.value;const t=v({content:"",title:"",publishedAt:Te(),summary:"",image:"",hashtags:[]});L(C,()=>{const s=t.value,n=C.value;if(n){setTimeout(()=>{m.finish()});for(const[k,V]of Object.entries(n))s[k]=V}},{deep:!0,immediate:!0});const B=l(()=>["title",t.value.title]),U=l(()=>["published_at",String(t.value.publishedAt)]),F=l(()=>["summary",t.value.summary]),S=l(()=>["image",t.value.image]),A=l(()=>["a",`${c.value.kind}:${c.value.pubkey}:${c.value.identifier}`]),$=l(()=>["d",c.value.identifier]),h=l(()=>Se({kind:p.value,content:t.value.content,tags:[$.value,B.value,U.value,F.value,S.value,A.value,...t.value.hashtags.map(s=>["t",s])]})),w=v(),D=_e(),R=async(s,n)=>{var V;const k=await D(n);k.url,(V=w.value)==null||V.$img2Url(s,k.url)},i=Ae(p.value,b,void 0);function e(s){t.value.content=s,i(h.value)}const o=v(!1);setTimeout(()=>o.value=!0);const T=Fe();function E(){const s=q.naddrEncode(c.value);T(s)}return(s,n)=>{const k=ze,V=G,X=$e,Y=J;return Q(),ye(te,null,{default:x(({id:Z})=>[M("div",{class:"h-full w-full",id:Z},[d(Ve,{ref_key:"md",ref:w,class:"h-full",onImgAdd:R,onSave:e,modelValue:t.value.content,"onUpdate:modelValue":n[1]||(n[1]=r=>t.value.content=r)},{"right-toolbar-after":x(()=>[M("button",{type:"button",onClick:E,class:"op-icon","aria-hidden":"true",title:`${P(j)("copy")}naddr`},[d(k,null,{default:x(()=>[d(ne)]),_:1})],8,Le),M("button",{type:"button",onClick:n[0]||(n[0]=()=>o.value=!o.value),class:"op-icon","aria-hidden":"true",title:P(j)("edit")},[d(k,null,{default:x(()=>[d(Ne)]),_:1})],8,qe)]),_:1},8,["modelValue"]),d(ee,{show:o.value,"onUpdate:show":n[6]||(n[6]=r=>o.value=r),closable:"",height:"100%"},{default:x(()=>[d(Y,{vertical:""},{default:x(()=>[d(Ie,{class:"w-full",placeholder:P(j)("banner"),value:t.value.image,"onUpdate:value":n[2]||(n[2]=r=>t.value.image=r)},null,8,["placeholder","value"]),d(V,{placeholder:P(j)("title"),value:t.value.title,"onUpdate:value":n[3]||(n[3]=r=>t.value.title=r),class:"w-full"},null,8,["placeholder","value"]),d(V,{placeholder:P(j)("summary"),value:t.value.summary,"onUpdate:value":n[4]||(n[4]=r=>t.value.summary=r)},null,8,["placeholder","value"]),d(X,{value:t.value.hashtags,"onUpdate:value":n[5]||(n[5]=r=>t.value.hashtags=r)},null,8,["value"])]),_:1})]),_:1},8,["show"])],8,He)]),_:1})}}});export{vt as default};
