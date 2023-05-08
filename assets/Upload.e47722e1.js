import{c as S,a as oe,b as ne,d as re,_ as ie,e as ae,i as le,m as de,f as se}from"./Upload.b824065e.js";import{b as v,c as d,a as y,d as C,f as ce,t as ue,u as fe,g as N,bw as ge,k as _,N as E,M as m,p as pe,h as O,bh as he,F as me,P as be}from"./index.1b90d9b0.js";import{f as X}from"./fade-in-height-expand.cssr.b76b5d75.js";import{i as ve,u as ye,c as A}from"./Loading.68c8fb32.js";import{u as xe}from"./cssr.ebdd28c2.js";import{u as we}from"./use-css-vars-class.2322281d.js";import{c as $}from"./Scrollbar.d017889b.js";const Re=v([d("upload","width: 100%;",[y("dragger-inside",[d("upload-trigger",`
 display: block;
 `)]),y("drag-over",[d("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),d("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[v("&:hover",`
 border: var(--n-dragger-border-hover);
 `),y("disabled",`
 cursor: not-allowed;
 `)]),d("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[v("+",[d("upload-file-list","margin-top: 8px;")]),y("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),y("image-card",`
 width: 96px;
 height: 96px;
 `,[d("base-icon",`
 font-size: 24px;
 `),d("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),d("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[v("a, img","outline: none;"),y("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[d("upload-file","cursor: not-allowed;")]),y("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),d("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[X(),d("progress",[X({foldPadding:!0})]),v("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[d("upload-file-info",[C("action",`
 opacity: 1;
 `)])]),y("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[d("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[d("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),C("name",`
 padding: 0 8px;
 `),C("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[v("img",`
 width: 100%;
 `)])])]),y("text-type",[d("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),y("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[d("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),d("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[C("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[v("img",`
 width: 100%;
 `)])]),v("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),v("&:hover",[v("&::before","opacity: 1;"),d("upload-file-info",[C("thumbnail","opacity: .12;")])])]),y("error-status",[v("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),d("upload-file-info",[C("name","color: var(--n-item-text-color-error);"),C("thumbnail","color: var(--n-item-text-color-error);")]),y("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),y("with-url",`
 cursor: pointer;
 `,[d("upload-file-info",[C("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[v("a",`
 text-decoration: underline;
 `)])])]),d("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[C("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[d("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),C("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[d("button",[v("&:not(:last-child)",{marginRight:"4px"}),d("base-icon",[v("svg",[ve()])])]),y("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),y("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),C("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[v("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),d("upload-file-input",`
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);var V=globalThis&&globalThis.__awaiter||function(e,i,o,r){function s(f){return f instanceof o?f:new o(function(u){u(f)})}return new(o||(o=Promise))(function(f,u){function w(n){try{a(r.next(n))}catch(c){u(c)}}function l(n){try{a(r.throw(n))}catch(c){u(c)}}function a(n){n.done?f(n.value):s(n.value).then(w,l)}a((r=r.apply(e,i||[])).next())})};function Fe(e,i,o){const{doChange:r,xhrMap:s}=e;let f=0;function u(l){var a;let n=Object.assign({},i,{status:"error",percentage:f});s.delete(i.id),n=S(((a=e.onError)===null||a===void 0?void 0:a.call(e,{file:n,event:l}))||n),r(n,l)}function w(l){var a;if(e.isErrorState){if(e.isErrorState(o)){u(l);return}}else if(o.status<200||o.status>=300){u(l);return}let n=Object.assign({},i,{status:"finished",percentage:f});s.delete(i.id),n=S(((a=e.onFinish)===null||a===void 0?void 0:a.call(e,{file:n,event:l}))||n),r(n,l)}return{handleXHRLoad:w,handleXHRError:u,handleXHRAbort(l){const a=Object.assign({},i,{status:"removed",file:null,percentage:f});s.delete(i.id),r(a,l)},handleXHRProgress(l){const a=Object.assign({},i,{status:"uploading"});if(l.lengthComputable){const n=Math.ceil(l.loaded/l.total*100);a.percentage=n,f=n}r(a,l)}}}function Ce(e){const{inst:i,file:o,data:r,headers:s,withCredentials:f,action:u,customRequest:w}=e,{doChange:l}=e.inst;let a=0;w({file:o,data:r,headers:s,withCredentials:f,action:u,onProgress(n){const c=Object.assign({},o,{status:"uploading"}),U=n.percent;c.percentage=U,a=U,l(c)},onFinish(){var n;let c=Object.assign({},o,{status:"finished",percentage:a});c=S(((n=i.onFinish)===null||n===void 0?void 0:n.call(i,{file:c}))||c),l(c)},onError(){var n;let c=Object.assign({},o,{status:"error",percentage:a});c=S(((n=i.onError)===null||n===void 0?void 0:n.call(i,{file:c}))||c),l(c)}})}function Be(e,i,o){const r=Fe(e,i,o);o.onabort=r.handleXHRAbort,o.onerror=r.handleXHRError,o.onload=r.handleXHRLoad,o.upload&&(o.upload.onprogress=r.handleXHRProgress)}function q(e,i){return typeof e=="function"?e({file:i}):e||{}}function Te(e,i,o){const r=q(i,o);!r||Object.keys(r).forEach(s=>{e.setRequestHeader(s,r[s])})}function je(e,i,o){const r=q(i,o);!r||Object.keys(r).forEach(s=>{e.append(s,r[s])})}function ze(e,i,o,{method:r,action:s,withCredentials:f,responseType:u,headers:w,data:l}){const a=new XMLHttpRequest;a.responseType=u,e.xhrMap.set(o.id,a),a.withCredentials=f;const n=new FormData;if(je(n,l,o),n.append(i,o.file),Be(e,o,a),s!==void 0){a.open(r.toUpperCase(),s),Te(a,w,o),a.send(n);const c=Object.assign({},o,{status:"uploading"});e.doChange(c)}}const Oe=Object.assign(Object.assign({},N.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>ae?le(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerStyle:[String,Object],renderIcon:Object}),Ee=ce({name:"Upload",props:Oe,setup(e){e.abstract&&e.listType==="image-card"&&ue("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=fe(e),r=N("Upload","-upload",Re,ge,e,i),s=ye(e),f=_(()=>{const{max:t}=e;return t!==void 0?z.value.length>=t:!1}),u=E(e.defaultFileList),w=m(e,"fileList"),l=E(null),a={value:!1},n=E(!1),c=new Map,U=xe(w,u),z=_(()=>U.value.map(S));function H(){var t;(t=l.value)===null||t===void 0||t.click()}function G(t){const g=t.target;M(g.files?Array.from(g.files).map(b=>({file:b,entry:null,source:"input"})):null,t),g.value=""}function K(t){const{"onUpdate:fileList":g,onUpdateFileList:b}=e;g&&A(g,t),b&&A(b,t),u.value=t}const k=_(()=>e.multiple||e.directory);function M(t,g){if(!t||t.length===0)return;const{onBeforeUpload:b}=e;t=k.value?t:[t[0]];const{max:B,accept:F}=e;t=t.filter(({file:p,source:h})=>h==="dnd"&&(F==null?void 0:F.trim())?de(p.name,p.type,F):!0),B&&(t=t.slice(0,B-z.value.length));const x=$();Promise.all(t.map(({file:p,entry:h})=>V(this,void 0,void 0,function*(){var T;const j={id:$(),batchId:x,name:p.name,status:"pending",percentage:0,file:p,url:null,type:p.type,thumbnailUrl:null,fullPath:(T=h==null?void 0:h.fullPath)!==null&&T!==void 0?T:`/${p.webkitRelativePath||p.name}`};return!b||(yield b({file:j,fileList:z.value}))!==!1?j:null}))).then(p=>V(this,void 0,void 0,function*(){let h=Promise.resolve();return p.forEach(T=>{h=h.then(be).then(()=>{T&&L(T,g,{append:!0})})}),yield h})).then(()=>{e.defaultUpload&&I()})}function I(t){const{method:g,action:b,withCredentials:B,headers:F,data:x,name:p}=e,h=t!==void 0?z.value.filter(j=>j.id===t):z.value,T=t!==void 0;h.forEach(j=>{const{status:P}=j;(P==="pending"||P==="error"&&T)&&(e.customRequest?Ce({inst:{doChange:L,xhrMap:c,onFinish:e.onFinish,onError:e.onError},file:j,action:b,withCredentials:B,headers:F,data:x,customRequest:e.customRequest}):ze({doChange:L,xhrMap:c,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},p,j,{method:g,action:b,withCredentials:B,responseType:e.responseType,headers:F,data:x}))})}const L=(t,g,b={append:!1,remove:!1})=>{const{append:B,remove:F}=b,x=Array.from(z.value),p=x.findIndex(h=>h.id===t.id);if(B||F||~p){B?x.push(t):F?x.splice(p,1):x.splice(p,1,t);const{onChange:h}=e;h&&h({file:t,fileList:x,event:g}),K(x)}};function J(t){var g;if(t.thumbnailUrl)return t.thumbnailUrl;const{createThumbnailUrl:b}=e;return b?(g=b(t.file,t))!==null&&g!==void 0?g:t.url||"":t.url?t.url:t.file?se(t.file):""}const D=_(()=>{const{common:{cubicBezierEaseInOut:t},self:{draggerColor:g,draggerBorder:b,draggerBorderHover:B,itemColorHover:F,itemColorHoverError:x,itemTextColorError:p,itemTextColorSuccess:h,itemTextColor:T,itemIconColor:j,itemDisabledOpacity:P,lineHeight:W,borderRadius:Y,fontSize:Z,itemBorderImageCardError:ee,itemBorderImageCard:te}}=r.value;return{"--n-bezier":t,"--n-border-radius":Y,"--n-dragger-border":b,"--n-dragger-border-hover":B,"--n-dragger-color":g,"--n-font-size":Z,"--n-item-color-hover":F,"--n-item-color-hover-error":x,"--n-item-disabled-opacity":P,"--n-item-icon-color":j,"--n-item-text-color":T,"--n-item-text-color-error":p,"--n-item-text-color-success":h,"--n-line-height":W,"--n-item-border-image-card-error":ee,"--n-item-border-image-card":te}}),R=o?we("upload",void 0,D,e):void 0;pe(oe,{mergedClsPrefixRef:i,mergedThemeRef:r,showCancelButtonRef:m(e,"showCancelButton"),showDownloadButtonRef:m(e,"showDownloadButton"),showRemoveButtonRef:m(e,"showRemoveButton"),showRetryButtonRef:m(e,"showRetryButton"),onRemoveRef:m(e,"onRemove"),onDownloadRef:m(e,"onDownload"),mergedFileListRef:z,triggerStyleRef:m(e,"triggerStyle"),shouldUseThumbnailUrlRef:m(e,"shouldUseThumbnailUrl"),renderIconRef:m(e,"renderIcon"),xhrMap:c,submit:I,doChange:L,showPreviewButtonRef:m(e,"showPreviewButton"),onPreviewRef:m(e,"onPreview"),getFileThumbnailUrlResolver:J,listTypeRef:m(e,"listType"),dragOverRef:n,openOpenFileDialog:H,draggerInsideRef:a,handleFileAddition:M,mergedDisabledRef:s.mergedDisabledRef,maxReachedRef:f,fileListStyleRef:m(e,"fileListStyle"),abstractRef:m(e,"abstract"),acceptRef:m(e,"accept"),cssVarsRef:o?void 0:D,themeClassRef:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,showTriggerRef:m(e,"showTrigger"),imageGroupPropsRef:m(e,"imageGroupProps"),mergedDirectoryDndRef:_(()=>{var t;return(t=e.directoryDnd)!==null&&t!==void 0?t:e.directory})});const Q={clear:()=>{u.value=[]},submit:I,openOpenFileDialog:H};return Object.assign({mergedClsPrefix:i,draggerInsideRef:a,inputElRef:l,mergedTheme:r,dragOver:n,mergedMultiple:k,cssVars:o?void 0:D,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,handleFileInputChange:G},Q)},render(){var e,i;const{draggerInsideRef:o,mergedClsPrefix:r,$slots:s,directory:f,onRender:u}=this;if(s.default&&!this.abstract){const l=s.default()[0];!((e=l==null?void 0:l.type)===null||e===void 0)&&e[ne]&&(o.value=!0)}const w=O("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${r}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:f||void 0,directory:f||void 0}));return this.abstract?O(me,null,(i=s.default)===null||i===void 0?void 0:i.call(s),O(he,{to:"body"},w)):(u==null||u(),O("div",{class:[`${r}-upload`,o.value&&`${r}-upload--dragger-inside`,this.dragOver&&`${r}-upload--drag-over`,this.themeClass],style:this.cssVars},w,this.showTrigger&&this.listType!=="image-card"&&O(ie,null,s),this.showFileList&&O(re,null,s)))}});export{Ee as _};
