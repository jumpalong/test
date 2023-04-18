import{c as N,f as W,u as ee,dC as te,bU as ne,V as v,h as q,dD as ae,al as se,b5 as le,o,r as oe,j as O,dE as ue,aG as G,_ as ie,y as re,a$ as de,X as J,dF as ce,b6 as me,v as L,ab as pe,A as Q,L as ve,W as E,T as fe,ae as H,dG as ge,dH as he,b_ as _e,cL as ye,cd as be,a6 as Ce,B as we,C as x,D as d,F as P,dI as Te,dJ as ke,dK as Fe,R as Ve,S as Se,da as Ie,aS as K,bN as Re,d4 as Ae,Q as j}from"./index.243f7ff1.js";import{C as Oe}from"./Copy16Filled.337c9d41.js";import{_ as xe}from"./UploadInput.vue_vue_type_script_setup_true_lang.8db086dd.js";import{s as ze}from"./prop.0533c762.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.0927adf2.js";import"./CloudUpload.c0dc99f7.js";const Be=N("dynamic-tags",[N("input",{minWidth:"var(--n-input-width)"})]),Ue=Object.assign(Object.assign(Object.assign({},q.props),ce),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:a=>a},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),$e=W({name:"DynamicTags",props:Ue,setup(a){const{mergedClsPrefixRef:m,inlineThemeDisabled:f}=ee(a),{localeRef:_}=te("DynamicTags"),y=ne(a),{mergedDisabledRef:i}=y,p=v(""),g=v(!1),b=v(!0),C=v(null),z=q("DynamicTags","-dynamic-tags",Be,ae,a,m),V=v(a.defaultValue),c=se(a,"value"),t=le(c,V),B=o(()=>_.value.add),U=o(()=>ze(a.size)),S=o(()=>i.value||!!a.max&&t.value.length>=a.max);function I(e){const{onChange:s,"onUpdate:value":T,onUpdateValue:M}=a,{nTriggerFormInput:l,nTriggerFormChange:n}=y;s&&L(s,e),M&&L(M,e),T&&L(T,e),V.value=e,l(),n()}function R(e){const s=t.value.slice(0);s.splice(e,1),I(s)}function $(e){switch(e.key){case"Enter":h()}}function h(e){const s=e!=null?e:p.value;if(s){const T=t.value.slice(0);T.push(a.onCreate(s)),I(T)}g.value=!1,b.value=!0,p.value=""}function w(){h()}function D(){g.value=!0,me(()=>{var e;(e=C.value)===null||e===void 0||e.focus(),b.value=!1})}const A=o(()=>{const{self:{inputWidth:e}}=z.value;return{"--n-input-width":e}}),u=f?oe("dynamic-tags",void 0,A,a):void 0;return{mergedClsPrefix:m,inputInstRef:C,localizedAdd:B,inputSize:U,inputValue:p,showInput:g,inputForceFocused:b,mergedValue:t,mergedDisabled:i,triggerDisabled:S,handleInputKeyUp:$,handleAddClick:D,handleInputBlur:w,handleCloseClick:R,handleInputConfirm:h,mergedTheme:z,cssVars:f?void 0:A,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{mergedTheme:a,cssVars:m,mergedClsPrefix:f,onRender:_,renderTag:y}=this;return _==null||_(),O(J,{class:[`${f}-dynamic-tags`,this.themeClass],size:"small",style:m,theme:a.peers.Space,themeOverrides:a.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:i,tagStyle:p,type:g,round:b,size:C,color:z,closable:V,mergedDisabled:c,showInput:t,inputValue:B,inputStyle:U,inputSize:S,inputForceFocused:I,triggerDisabled:R,handleInputKeyUp:$,handleInputBlur:h,handleAddClick:w,handleCloseClick:D,handleInputConfirm:A,$slots:u}=this;return this.mergedValue.map((e,s)=>y?y(e,s):O(ue,{key:s,theme:i.peers.Tag,themeOverrides:i.peerOverrides.Tag,style:p,type:g,round:b,size:C,color:z,closable:V,disabled:c,onClose:()=>D(s)},{default:()=>typeof e=="string"?e:e.label})).concat(t?u.input?u.input({submit:A,deactivate:h}):O(G,Object.assign({placeholder:"",size:S,style:U,autosize:!0},this.inputProps,{ref:"inputInstRef",value:B,onUpdateValue:e=>{this.inputValue=e},theme:i.peers.Input,themeOverrides:i.peerOverrides.Input,onKeyup:$,onBlur:h,internalForceFocus:I})):u.trigger?u.trigger({activate:w,disabled:R}):O(ie,{dashed:!0,disabled:R,theme:i.peers.Button,themeOverrides:i.peerOverrides.Button,size:S,onClick:w},{icon:()=>O(re,{clsPrefix:f},{default:()=>O(de,null)})}))}})}}),De={},Pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},je=E("g",{fill:"none"},[E("path",{d:"M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9zM4.5 7v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7h-11z",fill:"currentColor"})],-1),Ee=[je];function Me(a,m){return Q(),ve("svg",Pe,Ee)}const Le=pe(De,[["render",Me]]),Ne=["id"],He=["title"],Ke=["title"],Ye=W({__name:"MarkdownEditorView",setup(a){const m=fe(),f=Ve(),_=Se();m.start();const y=o(()=>f.params.value),i=o(()=>f.query.new);H(i,()=>{i.value&&m.finish()});const p=v(30023),{addressPointer:g,line:b,longFormContentOptions:C,event:z}=ge(y),V=he(),c=o(()=>{var n;if(Boolean(g.value))return g.value;const l={identifier:Ie(),pubkey:(n=V.value)!=null?n:"",kind:p.value,relays:[]};return setTimeout(()=>{_.push({name:"markdown-editor",params:{value:K.naddrEncode(l)},query:{new:"1"}})}),l});c.value;const t=v({content:"",title:"",publishedAt:Re(),summary:"",image:"",hashtags:[]});H(C,()=>{const l=t.value,n=C.value;if(n){setTimeout(()=>{m.finish()});for(const[k,F]of Object.entries(n))l[k]=F}},{deep:!0,immediate:!0});const B=o(()=>["title",t.value.title]),U=o(()=>["published_at",String(t.value.publishedAt)]),S=o(()=>["summary",t.value.summary]),I=o(()=>["image",t.value.image]),R=o(()=>["a",`${c.value.kind}:${c.value.pubkey}:${c.value.identifier}`]),$=o(()=>["d",c.value.identifier]),h=o(()=>Ae({kind:p.value,content:t.value.content,tags:[$.value,B.value,U.value,S.value,I.value,R.value,...t.value.hashtags.map(l=>["t",l])]})),w=v(),D=_e(),A=async(l,n)=>{var F;const k=await D(n);k.url,(F=w.value)==null||F.$img2Url(l,k.url)},u=ye(p.value,b,void 0);function e(l){t.value.content=l,u(h.value)}const s=v(!1);setTimeout(()=>s.value=!0);const T=be();function M(){const l=K.naddrEncode(c.value);T(l)}return(l,n)=>{const k=Ce,F=G,X=$e,Y=J;return Q(),we(Fe,null,{default:x(({id:Z})=>[E("div",{class:"h-full w-full",id:Z},[d(Te,{ref_key:"md",ref:w,class:"h-full",onImgAdd:A,onSave:e,modelValue:t.value.content,"onUpdate:modelValue":n[1]||(n[1]=r=>t.value.content=r)},{"right-toolbar-after":x(()=>[E("button",{type:"button",onClick:M,class:"op-icon","aria-hidden":"true",title:`${P(j)("copy")}naddr`},[d(k,null,{default:x(()=>[d(Oe)]),_:1})],8,He),E("button",{type:"button",onClick:n[0]||(n[0]=()=>s.value=!s.value),class:"op-icon","aria-hidden":"true",title:P(j)("edit")},[d(k,null,{default:x(()=>[d(Le)]),_:1})],8,Ke)]),_:1},8,["modelValue"]),d(ke,{show:s.value,"onUpdate:show":n[6]||(n[6]=r=>s.value=r),closable:"",height:"100%"},{default:x(()=>[d(Y,{vertical:""},{default:x(()=>[d(xe,{class:"w-full",placeholder:P(j)("banner"),value:t.value.image,"onUpdate:value":n[2]||(n[2]=r=>t.value.image=r)},null,8,["placeholder","value"]),d(F,{placeholder:P(j)("title"),value:t.value.title,"onUpdate:value":n[3]||(n[3]=r=>t.value.title=r),class:"w-full"},null,8,["placeholder","value"]),d(F,{placeholder:P(j)("summary"),value:t.value.summary,"onUpdate:value":n[4]||(n[4]=r=>t.value.summary=r)},null,8,["placeholder","value"]),d(X,{value:t.value.hashtags,"onUpdate:value":n[5]||(n[5]=r=>t.value.hashtags=r)},null,8,["value"])]),_:1})]),_:1},8,["show"])],8,Ne)]),_:1})}}});export{Ye as default};