import{n as N,M as q,_ as X,a as G}from"./MavonEditor-U6vvA0Sq.js";import{C as J}from"./Copy16Filled-WQZ_OET7.js";import{c as P,f as $,u as Q,L as w,g as j,af as Y,N as Z,k as D,h as T,ag as ee,a3 as te,o as E,B as ne,E as U,V as ae,W as oe,X as se,H as re,m as le,w as S,n as m,q as r,U as ie,a5 as O}from"./index-DVMYH3P6.js";import{u as ue,a as de,b as ce,m as me}from"./Markdown-CCAxwuGA.js";import{r as pe,o as fe}from"./ProvideEventLine-BcjESPsS.js";import{u as ge}from"./UploadButton.vue_vue_type_script_setup_true_lang-DLAEcrTL.js";import{_ as ve}from"./UploadInput.vue_vue_type_script_setup_true_lang-GWeWrTtb.js";import{u as he}from"./naiveUi-D97WfHUp.js";import{c as _e}from"./utils-BXkRfzfk.js";import{_ as ye,c as we}from"./Tag-Cl4r3gCd.js";import{u as Ce}from"./use-locale-CYSJLCZe.js";import{u as be,b as ke,c as M}from"./Button-Czpa3xjC.js";import{a as Ve}from"./Scrollbar-BXVF4b7l.js";import{s as Ie}from"./prop-DfVitj0l.js";import{u as Re}from"./use-css-vars-class-DpRsL9zm.js";import{_ as H}from"./Input-Bl1B22BO.js";import{N as Te}from"./Icon-DjYnwRew.js";import{A as Se}from"./Add-B8K751Td.js";import{_ as L}from"./Space-CvpcAwGw.js";import{N as De}from"./Icon-affED87R.js";import"./DrawerContent-CWwlzEAX.js";import"./Follower-R8EgPpAd.js";import"./use-rtl-CqBkFAUg.js";import"./Popover-C3ccDlka.js";import"./format-length-B-p6aW7q.js";import"./use-compitable-CysNw4x-.js";import"./is-browser-BikuuYFQ.js";import"./index-DsSU6HIH.js";import"./Close-CMpDg3pB.js";import"./Close-Dj7wgTNH.js";import"./replaceable-DvMWTdGr.js";import"./hkdf-MGlbgreC.js";import"./use-theme-vars-Cj3ejyij.js";import"./Warning-CFOd0oLB.js";import"./Image-Dkv-cPOO.js";import"./utils-ByHrdkP9.js";import"./fade-in-scale-up.cssr-CUPxiz5B.js";import"./Tooltip-BuuQH49V.js";import"./download-sglA049O.js";import"./fade-in-height-expand.cssr-JdnZy7mo.js";import"./Checkbox-5kBy0qes.js";import"./composables-CG8Dm3JP.js";import"./index-vZmvdULR.js";import"./get-slot-Bk_rJcZu.js";const xe=P("dynamic-tags",[P("input",{minWidth:"var(--n-input-width)"})]),Be=Object.assign(Object.assign(Object.assign({},j.props),we),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputClass:String,inputStyle:[String,Object],inputProps:Object,max:Number,tagClass:String,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:o=>o},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),Fe=$({name:"DynamicTags",props:Be,setup(o){const{mergedClsPrefixRef:C,inlineThemeDisabled:b}=Q(o),{localeRef:f}=Ce("DynamicTags"),k=be(o),{mergedDisabledRef:u}=k,g=w(""),v=w(!1),h=w(!0),_=w(null),s=j("DynamicTags","-dynamic-tags",xe,Y,o,C),V=w(o.defaultValue),x=Z(o,"value"),y=Ve(x,V),B=D(()=>f.value.add),F=D(()=>Ie(o.size)),z=D(()=>u.value||!!o.max&&y.value.length>=o.max);function d(n){const{onChange:l,"onUpdate:value":t,onUpdateValue:R}=o,{nTriggerFormInput:W,nTriggerFormChange:K}=k;l&&M(l,n),R&&M(R,n),t&&M(t,n),V.value=n,W(),K()}function I(n){const l=y.value.slice(0);l.splice(n,1),d(l)}function A(n){switch(n.key){case"Enter":a()}}function a(n){const l=n??g.value;if(l){const t=y.value.slice(0);t.push(o.onCreate(l)),d(t)}v.value=!1,h.value=!0,g.value=""}function e(){a()}function i(){v.value=!0,ee(()=>{var n;(n=_.value)===null||n===void 0||n.focus(),h.value=!1})}const c=D(()=>{const{self:{inputWidth:n}}=s.value;return{"--n-input-width":n}}),p=b?Re("dynamic-tags",void 0,c,o):void 0;return{mergedClsPrefix:C,inputInstRef:_,localizedAdd:B,inputSize:F,inputValue:g,showInput:v,inputForceFocused:h,mergedValue:y,mergedDisabled:u,triggerDisabled:z,handleInputKeyDown:A,handleAddClick:i,handleInputBlur:e,handleCloseClick:I,handleInputConfirm:a,mergedTheme:s,cssVars:b?void 0:c,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedTheme:o,cssVars:C,mergedClsPrefix:b,onRender:f,renderTag:k}=this;return f==null||f(),T(L,{class:[`${b}-dynamic-tags`,this.themeClass],size:"small",style:C,theme:o.peers.Space,themeOverrides:o.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:u,tagClass:g,tagStyle:v,type:h,round:_,size:s,color:V,closable:x,mergedDisabled:y,showInput:B,inputValue:F,inputClass:z,inputStyle:d,inputSize:I,inputForceFocused:A,triggerDisabled:a,handleInputKeyDown:e,handleInputBlur:i,handleAddClick:c,handleCloseClick:p,handleInputConfirm:n,$slots:l}=this;return this.mergedValue.map((t,R)=>k?k(t,R):T(ye,{key:R,theme:u.peers.Tag,themeOverrides:u.peerOverrides.Tag,class:g,style:v,type:h,round:_,size:s,color:V,closable:x,disabled:y,onClose:()=>{p(R)}},{default:()=>typeof t=="string"?t:t.label})).concat(B?l.input?l.input({submit:n,deactivate:i}):T(H,Object.assign({placeholder:"",size:I,style:d,class:z,autosize:!0},this.inputProps,{ref:"inputInstRef",value:F,onUpdateValue:t=>{this.inputValue=t},theme:u.peers.Input,themeOverrides:u.peerOverrides.Input,onKeydown:e,onBlur:i,internalForceFocus:A})):l.trigger?l.trigger({activate:c,disabled:a}):T(ke,{dashed:!0,disabled:a,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,size:I,onClick:c},{icon:()=>T(Te,{clsPrefix:b},{default:()=>T(Se,null)})}))}})}}),ze={},Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Oe=U("g",{fill:"none"},[U("path",{d:"M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9zM4.5 7v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7h-11z",fill:"currentColor"})],-1),Ue=[Oe];function Me(o,C){return E(),ne("svg",Ae,Ue)}const Ne=te(ze,[["render",Me]]),Pe=["id"],$e=["title"],je=["title"],Ft=$({__name:"MarkdownEditorView",setup(o){const C=ae(),b=oe(),f=pe(),k=se(),u=D(()=>C.params.value);ue();const g=w(30023),{addressPointer:v,markdownData:h}=de(u),_=D(()=>{var e;if(v.value)return v.value;const a={identifier:_e(),pubkey:typeof f.value=="string"?f.value:((e=f.value)==null?void 0:e.toHex())??"",kind:g.value,relays:[]};return setTimeout(()=>{b.push({name:"markdown-editor",params:{value:N.naddrEncode(a)},query:{new:"1"}})}),a});_.value;const s=ce();re(h,()=>{const a=h.value;if(a){setTimeout(()=>{k.finish()});for(const[e,i]of Object.entries(a))i&&(s.value[e]=i)}},{deep:!0});const V=w(),x=ge(),y=async(a,e)=>{var c;const i=await x(e);i.url,(c=V.value)==null||c.$img2Url(a,i.url)},B=fe(g.value,void 0),F=me(s,_);function z(a){s.value.content=a,B(F.value)}const d=w(!1);setTimeout(()=>d.value=!0);const I=he();function A(){const a=N.naddrEncode(_.value);I(a)}return(a,e)=>{const i=De,c=H,p=Fe,n=L;return E(),le(G,null,{default:S(({id:l})=>[U("div",{class:"h-full w-full",id:l},[m(q,{ref_key:"md",ref:V,onImgAdd:y,onSave:z,modelValue:r(s).content,"onUpdate:modelValue":e[1]||(e[1]=t=>r(s).content=t)},{"right-toolbar-after":S(()=>[U("button",{type:"button",onClick:A,class:"op-icon","aria-hidden":"true",title:`${r(O)("copy")}naddr`},[m(i,null,{default:S(()=>[m(J)]),_:1})],8,$e),U("button",{type:"button",onClick:e[0]||(e[0]=()=>d.value=!r(d)),class:"op-icon","aria-hidden":"true",title:r(O)("edit")},[m(i,null,{default:S(()=>[m(Ne)]),_:1})],8,je)]),_:1},8,["modelValue"]),m(X,{show:r(d),"onUpdate:show":e[6]||(e[6]=t=>ie(d)?d.value=t:null),closable:"",height:"100%"},{default:S(()=>[m(n,{vertical:""},{default:S(()=>[m(ve,{class:"w-full",placeholder:r(O)("banner"),value:r(s).image,"onUpdate:value":e[2]||(e[2]=t=>r(s).image=t)},null,8,["placeholder","value"]),m(c,{placeholder:r(O)("title"),value:r(s).title,"onUpdate:value":e[3]||(e[3]=t=>r(s).title=t),class:"w-full"},null,8,["placeholder","value"]),m(c,{placeholder:r(O)("summary"),value:r(s).summary,"onUpdate:value":e[4]||(e[4]=t=>r(s).summary=t)},null,8,["placeholder","value"]),m(p,{value:r(s).hashtags,"onUpdate:value":e[5]||(e[5]=t=>r(s).hashtags=t)},null,8,["value"])]),_:1})]),_:1},8,["show"])],8,Pe)]),_:1})}}});export{Ft as default};
