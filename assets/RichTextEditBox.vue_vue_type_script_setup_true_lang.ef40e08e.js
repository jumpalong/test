import{cM as ze,b as Fe,c as re,cN as Oe,f as X,u as je,h as fe,cO as Ue,bU as Pe,V as k,o as Q,ck as Ae,al as Le,b5 as De,r as He,cP as ne,cQ as We,j as L,cR as Ne,cS as Ke,cT as Xe,ap as qe,aG as pe,aq as Ye,b6 as oe,v as Y,cU as Je,bx as he,aA as Qe,bn as ve,bT as ae,cV as Ge,A as T,L as D,D as _,C,H as Z,I as G,F as y,B as O,O as me,M as _e,W as V,cW as ge,cX as xe,c8 as Ze,_ as we,X as ye,J as et,a8 as be,aa as tt,cY as Ce,ab as se,cZ as nt,bH as ot,c_ as at,cK as le,ae as Se,c$ as st,d0 as lt,d1 as it,d2 as rt,bR as ue,d3 as ut,aC as ct,Q as ke,d4 as ce,d5 as dt,b_ as ft,d6 as pt,d7 as ht,cs as vt,a6 as mt,a9 as J,b9 as ee,ba as te,a7 as _t,d8 as gt,d9 as xt,da as wt}from"./index.243f7ff1.js";import{_ as yt}from"./Result.33bc859f.js";import{_ as bt,a as Ct}from"./Tabs.dcc6b60f.js";import{C as St}from"./Close.288a1124.js";import{N as kt}from"./SelectMenu.df2b6de5.js";import{_ as Et}from"./UploadButton.vue_vue_type_script_setup_true_lang.0927adf2.js";function Tt(e,f={debug:!1,useSelectionEnd:!1,checkWidthOverflow:!0}){const d=e.selectionStart!==null?e.selectionStart:0,u=e.selectionEnd!==null?e.selectionEnd:0,i=f.useSelectionEnd?u:d,p=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],a=navigator.userAgent.toLowerCase().includes("firefox");if(!ze)throw new Error("textarea-caret-position#getCaretPosition should only be called in a browser");const r=f==null?void 0:f.debug;if(r){const v=document.querySelector("#input-textarea-caret-position-mirror-div");v!=null&&v.parentNode&&v.parentNode.removeChild(v)}const l=document.createElement("div");l.id="input-textarea-caret-position-mirror-div",document.body.appendChild(l);const t=l.style,n=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,s=e.nodeName==="INPUT";t.whiteSpace=s?"nowrap":"pre-wrap",s||(t.wordWrap="break-word"),t.position="absolute",r||(t.visibility="hidden"),p.forEach(v=>{if(s&&v==="lineHeight")if(n.boxSizing==="border-box"){const b=parseInt(n.height),E=parseInt(n.paddingTop)+parseInt(n.paddingBottom)+parseInt(n.borderTopWidth)+parseInt(n.borderBottomWidth),M=E+parseInt(n.lineHeight);b>M?t.lineHeight=`${b-E}px`:b===M?t.lineHeight=n.lineHeight:t.lineHeight="0"}else t.lineHeight=n.height;else t[v]=n[v]}),a?e.scrollHeight>parseInt(n.height)&&(t.overflowY="scroll"):t.overflow="hidden",l.textContent=e.value.substring(0,i),s&&l.textContent&&(l.textContent=l.textContent.replace(/\s/g,"\xA0"));const c=document.createElement("span");c.textContent=e.value.substring(i)||".",c.style.position="relative",c.style.left=`${-e.scrollLeft}px`,c.style.top=`${-e.scrollTop}px`,l.appendChild(c);const g={top:c.offsetTop+parseInt(n.borderTopWidth),left:c.offsetLeft+parseInt(n.borderLeftWidth),absolute:!1,height:parseInt(n.fontSize)*1.5};return r?c.style.backgroundColor="#aaa":document.body.removeChild(l),g.left>=e.clientWidth&&f.checkWidthOverflow&&(g.left=e.clientWidth),g}const Mt=Fe([re("mention","width: 100%; z-index: auto; position: relative;"),re("mention-menu",`
 box-shadow: var(--n-menu-box-shadow);
 `,[Oe({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),$t=Object.assign(Object.assign({},fe.props),{to:ne.propTo,autosize:[Boolean,Object],options:{type:Array,default:[]},type:{type:String,default:"text"},separator:{type:String,validator:e=>e.length!==1?(Ye("mention","`separator`'s length must be 1."),!1):!0,default:" "},bordered:{type:Boolean,default:void 0},disabled:Boolean,value:String,defaultValue:{type:String,default:""},loading:Boolean,prefix:{type:[String,Array],default:"@"},placeholder:{type:String,default:""},placement:{type:String,default:"bottom-start"},size:String,renderLabel:Function,status:String,"onUpdate:show":[Array,Function],onUpdateShow:[Array,Function],"onUpdate:value":[Array,Function],onUpdateValue:[Array,Function],onSearch:Function,onSelect:Function,onFocus:Function,onBlur:Function,internalDebug:Boolean}),Rt=X({name:"Mention",props:$t,setup(e){const{namespaceRef:f,mergedClsPrefixRef:d,mergedBorderedRef:u,inlineThemeDisabled:i}=je(e),p=fe("Mention","-mention",Mt,Ue,e,d),a=Pe(e),r=k(null),l=k(null),t=k(null),n=k("");let s=null,c=null,g=null;const v=Q(()=>{const{value:o}=n;return e.options.filter(h=>o?typeof h.label=="string"?h.label.startsWith(o):typeof h.value=="string"?h.value.startsWith(o):!1:!0)}),b=Q(()=>Ae(v.value,{getKey:o=>o.value})),E=k(null),M=k(!1),$=k(e.defaultValue),S=Le(e,"value"),B=De(S,$),m=Q(()=>{const{self:{menuBoxShadow:o}}=p.value;return{"--n-menu-box-shadow":o}}),I=i?He("mention",void 0,m,e):void 0;function x(o){if(e.disabled)return;const{onUpdateShow:h,"onUpdate:show":w}=e;h&&Y(h,o),w&&Y(w,o),o||(s=null,c=null,g=null),M.value=o}function R(o){const{onUpdateValue:h,"onUpdate:value":w}=e,{nTriggerFormChange:z,nTriggerFormInput:U}=a;w&&Y(w,o),h&&Y(h,o),U(),z(),$.value=o}function F(){return e.type==="text"?r.value.inputElRef:r.value.textareaElRef}function j(){var o;const h=F();if(document.activeElement!==h){x(!1);return}const{selectionEnd:w}=h;if(w===null){x(!1);return}const z=h.value,{separator:U}=e,{prefix:H}=e,q=typeof H=="string"?[H]:H;for(let A=w-1;A>=0;--A){const P=z[A];if(P===U||P===`
`||P==="\r"){x(!1);return}if(q.includes(P)){const K=z.slice(A+1,w);x(!0),(o=e.onSearch)===null||o===void 0||o.call(e,K,P),n.value=K,s=P,c=A+1,g=w;return}}x(!1)}function W(){const{value:o}=l;if(!o)return;const h=F(),w=Tt(h);w.left+=h.parentElement.offsetLeft,o.style.left=`${w.left}px`,o.style.top=`${w.top+w.height}px`}function Ee(){var o;!M.value||(o=t.value)===null||o===void 0||o.syncPosition()}function Te(o){R(o),N()}function N(){setTimeout(()=>{W(),j(),oe().then(Ee)},0)}function Me(o){var h,w;if(o.key==="ArrowLeft"||o.key==="ArrowRight"){if(!((h=r.value)===null||h===void 0)&&h.isCompositing)return;N()}else if(o.key==="ArrowUp"||o.key==="ArrowDown"||o.key==="Enter"){if(!((w=r.value)===null||w===void 0)&&w.isCompositing)return;const{value:z}=E;if(M.value){if(z)if(o.preventDefault(),o.key==="ArrowUp")z.prev();else if(o.key==="ArrowDown")z.next();else{const U=z.getPendingTmNode();U?ie(U):x(!1)}}else N()}}function $e(o){const{onFocus:h}=e;h==null||h(o);const{nTriggerFormFocus:w}=a;w(),N()}function Re(){var o;(o=r.value)===null||o===void 0||o.focus()}function Be(){var o;(o=r.value)===null||o===void 0||o.blur()}function Ve(o){const{onBlur:h}=e;h==null||h(o);const{nTriggerFormBlur:w}=a;w(),x(!1)}function ie(o){var h;if(s===null||c===null||g===null)return;const{rawNode:{value:w=""}}=o,z=F(),U=z.value,{separator:H}=e,q=U.slice(g),A=q.startsWith(H),P=`${w}${A?"":H}`;R(U.slice(0,c)+P+q),(h=e.onSelect)===null||h===void 0||h.call(e,o.rawNode,s);const K=c+P.length+(A?1:0);oe().then(()=>{z.selectionStart=K,z.selectionEnd=K,j()})}function Ie(){e.disabled||N()}return{namespace:f,mergedClsPrefix:d,mergedBordered:u,mergedSize:a.mergedSizeRef,mergedStatus:a.mergedStatusRef,mergedTheme:p,treeMate:b,selectMenuInstRef:E,inputInstRef:r,cursorRef:l,followerRef:t,showMenu:M,adjustedTo:ne(e),isMounted:We(),mergedValue:B,handleInputFocus:$e,handleInputBlur:Ve,handleInputUpdateValue:Te,handleInputKeyDown:Me,handleSelect:ie,handleInputMouseDown:Ie,focus:Re,blur:Be,cssVars:i?void 0:m,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedTheme:e,mergedClsPrefix:f,$slots:d}=this;return L("div",{class:`${f}-mention`},L(pe,{status:this.mergedStatus,themeOverrides:e.peerOverrides.Input,theme:e.peers.Input,size:this.mergedSize,autosize:this.autosize,type:this.type,ref:"inputInstRef",placeholder:this.placeholder,onMousedown:this.handleInputMouseDown,onUpdateValue:this.handleInputUpdateValue,onKeydown:this.handleInputKeyDown,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,bordered:this.mergedBordered,disabled:this.disabled,value:this.mergedValue}),L(Ne,null,{default:()=>[L(Ke,null,{default:()=>L("div",{style:{position:"absolute",width:0,height:0},ref:"cursorRef"})}),L(Xe,{ref:"followerRef",placement:this.placement,show:this.showMenu,containerClass:this.namespace,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ne.tdkey},{default:()=>L(qe,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{const{mergedTheme:u,onRender:i}=this;return i==null||i(),this.showMenu?L(kt,{clsPrefix:f,theme:u.peers.InternalSelectMenu,themeOverrides:u.peerOverrides.InternalSelectMenu,autoPending:!0,ref:"selectMenuInstRef",class:[`${f}-mention-menu`,this.themeClass],loading:this.loading,treeMate:this.treeMate,virtualScroll:!1,style:this.cssVars,onToggle:this.handleSelect,renderLabel:this.renderLabel},d):null}})})]}))}});function Bt(){const e=k(null),f=Je(()=>import("./emoji.ca34a9ca.js"),[],import.meta.url),d=k(!0);return f.then(u=>{d.value=!1,e.value=u.default}),{data:e,isLoading:d}}function Vt(e,f){const d=k({}),u=he((...p)=>{d.value=i(...p)},500);Qe(()=>{u(f.value,e.value)});function i(p,a){if(!a)return{};const r=ve({});for(const l of a){const t=l[0],n=l[1],s=l[2],c=l[3];if(!s.includes(p))continue;let g=r[t];g||(g=[],r[t]=g),g.push({type:t,emoji:n,name:s,UNICODE:c})}return r}return{emojiClassificationTable:d}}const It={class:"text-xl"},zt=X({__name:"EmojiBoxItem",props:{type:null,emojiList:null},emits:["click"],setup(e,{emit:f}){const d=e,{type:u,emojiList:i}=ae(d),[p,a]=Ge(10);return(r,l)=>{const t=ge,n=xe,s=Ze,c=we,g=ye;return T(),D("div",{ref_key:"target",ref:p,class:"target"},[_(t,null,{default:C(()=>[Z(G(y(u)),1)]),_:1}),y(a)?(T(),O(g,{key:1},{default:C(()=>[(T(!0),D(me,null,_e(y(i),(v,b)=>(T(),O(c,{quaternary:"",onClick:()=>f("click",v.emoji),"data-type":y(u),"data-index":b,"data-emoji":v.emoji},{default:C(()=>[_(s,{trigger:"hover"},{trigger:C(()=>[V("span",It,G(v.emoji),1)]),default:C(()=>[Z(" "+G(v.name),1)]),_:2},1024)]),_:2},1032,["onClick","data-type","data-index","data-emoji"]))),256))]),_:1})):(T(),O(n,{key:0,class:"w-full h-52"}))],512)}}}),Ft={class:"flex flex-col w-full h-96 max-h-full overflow-hidden relative"},Ot={class:"py-4 flex-shrink-0"},jt={key:1,class:"flex-shrink flex-1 w-full h-0 flex justify-center items-center"},Ut=X({__name:"EmojiBox",props:{show:{type:Boolean}},emits:["click"],setup(e,{emit:f}){const d=e,{show:u}=ae(d),i=k(""),{data:p,isLoading:a}=Bt(),{emojiClassificationTable:r}=Vt(p,i),l=Q(()=>Object.keys(r.value));function t(n){f("click",n)}return(n,s)=>{const c=xe,g=pe,v=yt,b=tt,E=bt,M=Ct,$=Ce;return T(),O($,{show:y(u)},{default:C(()=>[V("div",Ft,[_(M,{"default-value":"Emoji",class:"flex w-full h-full"},{default:C(()=>[_(E,{class:"flex-shrink flex-1 h-0 flex flex-col",name:"Emoji",tab:"Emoji"},{default:C(()=>[y(a)?(T(),O(c,{key:0,class:"w-full h-full"})):et("",!0),V("div",Ot,[_(g,{class:"flex-shrink-0",size:"large",round:"",placeholder:"Search",value:i.value,"onUpdate:value":s[0]||(s[0]=S=>i.value=S)},null,8,["value"])]),y(l).length===0?(T(),D("div",jt,[_(v,{status:"418",title:"\u4EC0\u4E48\u90FD\u6CA1\u627E\u5230",description:"\u8FD9\u662F\u4E00\u4E2A\u60B2\u5267"})])):(T(),O(b,{key:2,class:"flex-shrink flex-1 w-full h-0 flex",contentStyle:{height:"100%",width:"100%"}},{default:C(()=>[_(be,{class:"w-full h-full"},{default:C(()=>[(T(!0),D(me,null,_e(y(l),S=>(T(),O(zt,{onClick:t,key:S,type:S,emojiList:y(r)[S]},null,8,["type","emojiList"]))),128))]),_:1})]),_:1}))]),_:1})]),_:1})])]),_:1},8,["show"])}}}),Pt={},At={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Lt=V("g",{fill:"none"},[V("path",{d:"M10.53 1.72a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72v10.19a.75.75 0 0 0 1.5 0V4.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4zM4.5 16.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11z",fill:"currentColor"})],-1),Dt=[Lt];function Ht(e,f){return T(),D("svg",At,Dt)}const Wt=se(Pt,[["render",Ht]]),Nt={},Kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Xt=V("g",{fill:"none"},[V("path",{d:"M12.007 6.81l-5.949 5.95c-.319.318-.719.545-1.156.654l-2.283.57a.498.498 0 0 1-.604-.603l.57-2.283a2.49 2.49 0 0 1 .656-1.156l5.948-5.95l2.818 2.817zm1.41-4.226c.777.778.777 2.039 0 2.817l-.706.704l-2.817-2.818l.705-.703a1.992 1.992 0 0 1 2.817 0z",fill:"currentColor"})],-1),qt=[Xt];function Yt(e,f){return T(),D("svg",Kt,qt)}const Jt=se(Nt,[["render",Yt]]),Qt={},Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Zt=V("path",{d:"M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z",fill:"currentColor"},null,-1),en=[Zt];function tn(e,f){return T(),D("svg",Gt,en)}const nn=se(Qt,[["render",tn]]);function on(){var u,i,p;const e=new Map,f=ve([]),d=ot.kind0.allMap();for(const a in d){const r=d[a],l=at(r),t=(p=(u=l.displayName)!=null?u:l.name)!=null?p:(i=r.pubkey)==null?void 0:i.slice(8),n=encodeURI(t);e.set(n,{event:r,metadata:l}),f.push({label:t,value:n,key:r.pubkey})}return{userRefMentionOption:f,userMap:e}}function an(e){const f=new Map,d=k([]),u=[];function i(t){const{content:n,id:s}=t;u.push({label:n.slice(0,20),value:`${l(t)}`,key:s})}function p(t,n){f.set(l(t),{event:t,marker:n}),i(t)}function a(t){var n;d.value=[],d.value.push(["e",t.id]),d.value.push(["p",t.pubkey]),d.value.push((n=lt(t.tags))!=null?n:["e",t.id,"","root"]),d.value.push(...t.tags.filter(s=>s[0]==="e"&&s[1]&&(!s[3]||s[3]==="reply")).map(s=>{var c;return[s[0],s[1],(c=s[2])!=null?c:"","mention"]})),d.value.push(...t.tags.filter(s=>s[0]==="p"&&s[1]).map(s=>s.map(c=>c!=null?c:""))),d.value.push(...t.tags.filter(s=>s[0]==="r"&&s[1]).map(s=>s.map(c=>c!=null?c:"")))}function r(t){e.value===""?e.value+=`&${l(t)}
`:e.value+=`
&${l(t)}
`,p(t,"mention")}function l(t){return`${t.id}`}return{eventMap:f,eventMentionOption:u,replyEvent:a,relaysTags:d,addEvent:p,mentionEvent:r}}function sn(e,f,d){function u(i){const p={userMap:{},eventMap:{},value:i,tags:[],replyTags:d.value},{tags:a}=p,r=i.replace(/@\S+|(\s|^)#\S+|&\S+/g,l=>{var s,c;const t=l[0];let n=l.slice(1);switch(t){case"@":const g=e.get(n);if(!g)return l;p.userMap[n]=g;const v=ue(g.event.tags);return a.push(["p",g.event.pubkey,[...v][0]]),`#[${a.length-1}]`;case`
`:case" ":n=n.slice(1);case"#":return a.push(["t",n]),`#[${a.length-1}]`;case"&":const b=f.get(n);if(!b)return l;p.eventMap[n]=b;const E=b.event,M=[...ue(b.event.tags)];M.forEach(S=>a.push(["r",S])),a.push(["e",b.event.id,(s=[...M][0])!=null?s:"",b.marker]);const $=a.length-1;return a.push(["p",b.event.pubkey,(c=[...M][0])!=null?c:"","mention"]),a.push(...E.tags.filter(S=>S[0]==="e").map(S=>["e",S[1],S[2],"mention"])),a.push(...E.tags.filter(S=>S[0]==="p")),`#[${$}]`;default:return l}});return a.push(...p.replyTags),[r,a,p]}return u}const de={...nt,duration:1e3*60*60};function ln(e,f,d,u){const i="rich-text-source-options",p=le();Se(()=>p.id,()=>{try{const t=st(r(),de);for(const[n,s]of Object.entries(t.userMap))y(e).set(n,s);for(const[n,s]of Object.entries(t.eventMap))y(f).set(n,s);d.value=t.value,u.value=t.replyTags}catch{}},{immediate:!0});function a(t){it(r(),t,de)}function r(){return`${i}:${p.id}`}function l(){rt(r())}return{changeSourceCache:a,clearCache:l}}const rn=X({__name:"RichTextEditBoxInput",props:{rawValue:null},emits:["change","blur","focus","update:rawValue"],setup(e,{emit:f}){const d=e,{rawValue:u}=ae(d);let i="";const p=le(),a=ut(d,"rawValue"),{userRefMentionOption:r,userMap:l}=on(),{eventMap:t,eventMentionOption:n,addEvent:s,replyEvent:c,mentionEvent:g,relaysTags:v}=an(a),b=sn(l,t,v);Se(u,async()=>{await oe(),B()},{immediate:!0}),p.onRichTextEditBox("reply",x=>{c(x),m()}),p.onRichTextEditBox("mention",x=>{g(x),m()}),p.onRichTextEditBox("clear",I);const E=k([]);function M(x,R){R==="@"?E.value=r:R==="&"&&(E.value=n)}const{changeSourceCache:$,clearCache:S}=ln(l,t,a,v);function B(){const x=a.value;i!==x&&(i=x,m())}function m(){const x=a.value,[R,F,j]=b(x);$(j),f("change",R,{tags:F,sourceOptions:j})}function I(){S(),v.value=[],a.value="",m()}return(x,R)=>{const F=Rt;return T(),O(F,{type:"textarea",autosize:"",class:"w-full",onBlur:R[0]||(R[0]=()=>x.$emit("blur")),onFocus:R[1]||(R[1]=()=>x.$emit("focus")),placeholder:y(ke)("rich_text_edit_box_input_placeholder"),onChange:B,"show-count":"",maxlength:3e3,value:y(a),"onUpdate:value":R[2]||(R[2]=j=>ct(a)?a.value=j:null),options:E.value,prefix:["@","&"],onSearch:M},null,8,["placeholder","value","options"])}}}),un={class:"w-full flex-shrink-0 flex flex-col justify-between"},cn={class:"flex justify-between"},_n=X({__name:"RichTextEditBox",emits:["send"],setup(e,{emit:f}){const d=le(),u=k(""),i=k(ce({})),p=k(!1),a=k(!1),r=k(null);dt(r,B=>{p.value=!1,a.value=!1});function l(B,m){i.value=ce({content:B,tags:m.tags})}function t(){f("send",i.value)}const n=he(()=>{p.value=!1},2e3),s=()=>{var B;(B=n.clear)==null||B.call(n),p.value=!0};function c(){a.value=!1}function g(B){u.value+=B}const v=k(!1),b=ft();async function E(B){const m=`$$${wt()}$$`;u.value.length===0?u.value+=`${m}
`:u.value+=`
${m}
`;const I=await b(B);u.value=u.value.replace(m,I.url)}pt(r,E),ht(r,E);function M(){d.emitRichTextEditBox("clear")}const $=vt("__rich_size_mode",2);function S(){$.value=(1+$.value)%3}return(B,m)=>{const I=ge,x=we,R=ye,F=mt,j=Ce;return T(),D("div",{class:"w-full h-max box-border flex flex-col overflow-hidden flex-shrink-1",ref_key:"target",ref:r,style:J({minHeight:y($)===0?"100%":"0%",maxHeight:v.value||y($)===0?"100%":p.value||v.value?"30em":"10em",transition:"max-height 300ms,min-height 300ms"}),onDblclick:m[5]||(m[5]=()=>a.value=!0),onMouseleave:m[6]||(m[6]=(...W)=>y(n)&&y(n)(...W))},[V("div",un,[_(Ut,{show:v.value,onClick:g},null,8,["show"]),_(I,{class:"flex-shrink-0",style:J({marginBottom:"0.5em",marginTop:"0.5em"})},null,8,["style"]),V("div",cn,[V("div",null,[_(R,null,{default:C(()=>[_(x,{class:"text-xl",quaternary:"",onClick:m[0]||(m[0]=()=>v.value=!v.value)},{default:C(()=>[Z(" \u{1F601} ")]),_:1}),_(Et,{upload:E})]),_:1})]),V("div",null,[_(x,{class:"mr-2",onClick:S},{default:C(()=>[V("div",{style:J({transform:y($)===2?"rotateX(0turn)":"rotateX(0.5turn)",transition:"transform 0.5s ease"})},[_(F,null,{default:C(()=>[_(Wt)]),_:1})],4)]),_:1}),_(x,{class:"mr-2",onClick:M,disabled:!u.value&&!i.value.tags.length},{default:C(()=>[_(F,null,{default:C(()=>[_(St)]),_:1})]),_:1},8,["disabled"]),_(x,{class:"mr-2",disabled:!i.value.content,onClick:m[1]||(m[1]=()=>a.value=!a.value)},{default:C(()=>[_(F,null,{default:C(()=>[a.value?(T(),O(nn,{key:0})):(T(),O(Jt,{key:1}))]),_:1})]),_:1},8,["disabled"]),_(x,{disabled:!i.value.content,type:"primary",onClick:t},{default:C(()=>[Z(G(y(ke)("send")),1)]),_:1},8,["disabled"])])])]),ee(_(I,{class:"flex-shrink-0",style:J({marginBottom:"0.5em",marginTop:"0.5em"})},null,8,["style"]),[[te,y($)!==2]]),V("div",{class:"flex-1 flex-shrink relative h-0",style:{},onMouseenter:s},[_(j,{class:"flex-1 flex-shrink relative h-full",show:y($)!==2},{default:C(()=>[_(be,{class:_t(["h-full box-border",{"py-2":i.value.tags.length>0||y($)===0}])},{default:C(()=>[ee(V("div",{class:"px-3 py-2",onClick:m[2]||(m[2]=()=>a.value=!0)},[_(gt,{event:i.value,disabledReply:""},null,8,["event"])],512),[[te,!a.value&&i.value.content]]),ee(_(rn,{class:"transition",rawValue:u.value,"onUpdate:rawValue":m[3]||(m[3]=W=>u.value=W),onBlur:c,onFocus:m[4]||(m[4]=()=>a.value=!0),onChange:l},null,8,["rawValue"]),[[te,a.value||!i.value.content]]),_(xt,{event:i.value},null,8,["event"])]),_:1},8,["class"])]),_:1},8,["show"])],32)],36)}}});export{_n as _};