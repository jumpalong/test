import{f as z,h as v,b as Ee,c as se,u as je,g as _e,dF as Je,N as w,M as He,U as O,af as ye,k as xe,dG as ze,P as Ge,o as ue,z as Ke,au as de,x as H,aD as We,n as D,v as X,aL as Xe,l as Ve,C as b,dH as we,aJ as Ie,an as qe,ax as Qe,av as Ye,dI as Ze,w as F,m as T,dJ as en,dK as nn}from"./index.8f62a545.js";import{u as tn}from"./use-theme-vars.c704e62a.js";import{u as rn}from"./use-rtl.6d35c504.js";import{u as an}from"./use-locale.cbb1f83b.js";import{u as ln,r as fe,a as ce,c as $}from"./Loading.0b953150.js";import{u as un,a as me}from"./cssr.21c6f8e2.js";import{_ as q}from"./Input.90533fe2.js";import{N as pe}from"./Icon.1c3d6ebf.js";import{X as ve,_ as on}from"./Button.22997a19.js";import{A as sn}from"./Add.d66e299e.js";import{_ as dn}from"./Tree.3a4f39b5.js";import{_ as fn}from"./Select.cfb7f9b9.js";import{u as cn}from"./composables.10bdf172.js";import{_ as mn}from"./Space.32f062de.js";import{N as pn}from"./Scrollbar.75edf2b0.js";import"./use-style.d8216a24.js";import"./create-key.7b548031.js";import"./index.62f1e1b0.js";import"./use-css-vars-class.1ada0b07.js";import"./Scrollbar.8d5a1903.js";import"./replaceable.815b8f5c.js";import"./is-browser.f4df612e.js";import"./Checkbox.fc71365b.js";import"./render.568a1ab1.js";import"./create.2deeaf6a.js";import"./fade-in-height-expand.cssr.a4865c47.js";import"./VirtualList.429e97d1.js";import"./Empty.81d9c633.js";import"./fade-in-scale-up.cssr.5ebe4351.js";import"./Tag.7e30ed31.js";import"./Close.dba1bcea.js";import"./Close.7d56270d.js";import"./Popover.6590eae2.js";import"./Follower.7ba57362.js";import"./format-length.3612bbc8.js";import"./SelectMenu.aac06f5e.js";import"./Checkmark.13748f17.js";import"./index.71604e6f.js";import"./get-slot.4ceacf82.js";const vn=z({name:"Remove",render(){return v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},v("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});function gn(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function hn(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function le(n){return n==null?!0:!Number.isNaN(n)}function ge(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function ie(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const bn=Ee([se("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),se("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),he=800,be=100,_n=Object.assign(Object.assign({},_e.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),yn=z({name:"InputNumber",props:_n,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:_,mergedRtlRef:I}=je(n),c=_e("InputNumber","-input-number",bn,Je,n,_),{localeRef:u}=an("InputNumber"),m=ln(n),{mergedSizeRef:p,mergedDisabledRef:a,mergedStatusRef:h}=m,l=w(null),d=w(null),y=w(null),g=w(n.defaultValue),G=He(n,"value"),x=un(G,g),S=w(""),M=e=>{const t=String(e).split(".")[1];return t?t.length:0},o=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:M(r));return Math.max(...t)},f=O(()=>{const{placeholder:e}=n;return e!==void 0?e:u.value.placeholder}),k=O(()=>{const e=ie(n.step);return e!==null?e===0?1:Math.abs(e):1}),A=O(()=>{const e=ie(n.min);return e!==null?e:null}),L=O(()=>{const e=ie(n.max);return e!==null?e:null}),V=e=>{const{value:t}=x;if(e===t){U();return}const{"onUpdate:value":r,onUpdateValue:s,onChange:C}=n,{nTriggerFormInput:B,nTriggerFormChange:P}=m;C&&$(C,e),s&&$(s,e),r&&$(r,e),g.value=e,B(),P()},N=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:s})=>{const{value:C}=S;if(s&&hn(C))return!1;const B=(n.parse||gn)(C);if(B===null)return t&&V(null),null;if(le(B)){const P=M(B),{precision:J}=n;if(J!==void 0&&J<P&&!r)return!1;let R=parseFloat((B+e).toFixed(J!=null?J:o(B)));if(le(R)){const{value:re}=L,{value:ae}=A;if(re!==null&&R>re){if(!t||s)return!1;R=re}if(ae!==null&&R<ae){if(!t||s)return!1;R=ae}return n.validator&&!n.validator(R)?!1:(t&&V(R),R)}}return!1},U=()=>{const{value:e}=x;if(le(e)){const{format:t,precision:r}=n;t?S.value=t(e):e===null||r===void 0||M(e)>r?S.value=ge(e,void 0):S.value=ge(e,r)}else S.value=String(e)};U();const Se=O(()=>N({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),Q=O(()=>{const{value:e}=x;if(n.validator&&e===null)return!1;const{value:t}=k;return N({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),Y=O(()=>{const{value:e}=x;if(n.validator&&e===null)return!1;const{value:t}=k;return N({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function Ne(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=m;t&&$(t,e),r()}function Ce(e){var t,r;if(e.target===((t=l.value)===null||t===void 0?void 0:t.wrapperElRef))return;const s=N({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(s!==!1){const P=(r=l.value)===null||r===void 0?void 0:r.inputElRef;P&&(P.value=String(s||"")),x.value===s&&U()}else U();const{onBlur:C}=n,{nTriggerFormBlur:B}=m;C&&$(C,e),B(),Ge(()=>{U()})}function Be(e){const{onClear:t}=n;t&&$(t,e)}function Z(){const{value:e}=Y;if(!e){te();return}const{value:t}=x;if(t===null)n.validator||V(oe());else{const{value:r}=k;N({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function ee(){const{value:e}=Q;if(!e){ne();return}const{value:t}=x;if(t===null)n.validator||V(oe());else{const{value:r}=k;N({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Re=Ne,Te=Ce;function oe(){if(n.validator)return null;const{value:e}=A,{value:t}=L;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function Me(e){Be(e),V(null)}function Oe(e){var t,r,s;!((t=y.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=d.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(s=l.value)===null||s===void 0||s.activate()}let E=null,j=null,K=null;function ne(){K&&(window.clearTimeout(K),K=null),E&&(window.clearInterval(E),E=null)}function te(){W&&(window.clearTimeout(W),W=null),j&&(window.clearInterval(j),j=null)}function De(){ne(),K=window.setTimeout(()=>{E=window.setInterval(()=>{ee()},be)},he),me("mouseup",document,ne,{once:!0})}let W=null;function ke(){te(),W=window.setTimeout(()=>{j=window.setInterval(()=>{Z()},be)},he),me("mouseup",document,te,{once:!0})}const Ae=()=>{j||Z()},Ue=()=>{E||ee()};function Pe(e){var t,r;if(e.key==="Enter"){if(e.target===((t=l.value)===null||t===void 0?void 0:t.wrapperElRef))return;N({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=l.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!Y.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),N({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&Z()}else if(e.key==="ArrowDown"){if(!Q.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),N({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ee()}}function Fe(e){S.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&N({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}ye(x,()=>{U()});const $e={focus:()=>{var e;return(e=l.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=l.value)===null||e===void 0?void 0:e.blur()}},Le=rn("InputNumber",I,_);return Object.assign(Object.assign({},$e),{rtlEnabled:Le,inputInstRef:l,minusButtonInstRef:d,addButtonInstRef:y,mergedClsPrefix:_,mergedBordered:i,uncontrolledValue:g,mergedValue:x,mergedPlaceholder:f,displayedValueInvalid:Se,mergedSize:p,mergedDisabled:a,displayedValue:S,addable:Y,minusable:Q,mergedStatus:h,handleFocus:Re,handleBlur:Te,handleClear:Me,handleMouseDown:Oe,handleAddClick:Ae,handleMinusClick:Ue,handleAddMousedown:ke,handleMinusMousedown:De,handleKeyDown:Pe,handleUpdateDisplayedValue:Fe,mergedTheme:c,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:xe(()=>{const{self:{iconColorDisabled:e}}=c.value,[t,r,s,C]=ze(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${s})`,opacityDisabled:`${C}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,_=()=>v(ve,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ce(i["minus-icon"],()=>[v(pe,{clsPrefix:n},{default:()=>v(vn,null)})])}),I=()=>v(ve,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ce(i["add-icon"],()=>[v(pe,{clsPrefix:n},{default:()=>v(sn,null)})])});return v("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},v(q,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var c;return this.showButton&&this.buttonPlacement==="both"?[_(),fe(i.prefix,u=>u?v("span",{class:`${n}-input-number-prefix`},u):null)]:(c=i.prefix)===null||c===void 0?void 0:c.call(i)},suffix:()=>{var c;return this.showButton?[fe(i.suffix,u=>u?v("span",{class:`${n}-input-number-suffix`},u):null),this.buttonPlacement==="right"?_():null,I()]:(c=i.suffix)===null||c===void 0?void 0:c.call(i)}}))}}),xn={class:"flex flex-wrap"},Vn=z({__name:"JSONTreeEditLavel",props:{k:null,v:null},setup(n){const i=tn();return(_,I)=>(ue(),Ke("div",xn,[de("div",{style:We({color:D(i).primaryColor})},H(n.k)+": ",5),X(" \xA0 "),de("div",null,H(n.v),1)]))}}),wn=z({__name:"JSONTreeEdit",props:{data:null},emits:["change"],setup(n,{emit:i}){const _=n,{data:I}=Xe(_),c=xe(()=>u(I.value));function u(a,h=[]){return Array.isArray(a)?a.map((l,d)=>{const y=[...h,String(d)];return typeof l=="object"||Array.isArray(l)?{key:y.join("."),prefix:()=>m(d.toString()),children:u(l,[...h,String(d)]),value:l,onUpdateValue:g=>{a[d]=g,i("change")}}:{key:y.join("."),prefix:()=>m(d.toString(),d.toString()),value:l,onUpdateValue:g=>{a[d]=g,i("change")}}}):typeof a=="object"?Object.entries(a).map(([l,d])=>{const y=[...h,l];return typeof d=="object"||Array.isArray(d)?{key:y.join("."),prefix:()=>m(l,`${b(l)}`),children:u(d,y),value:d,onUpdateValue:g=>{a[l]=g,i("change")}}:{key:y.join("."),prefix:()=>m(l,`${b(l)}`),value:d,onUpdateValue:g=>{a[l]=g,i("change")}}}):[]}function m(a,h){return v(Vn,{k:a,v:h})}function p({option:a}){if(typeof a.value=="string")return v(q,{value:a.value,onUpdateValue:a.onUpdateValue,type:"textarea",rows:1},{});if(typeof a.value=="number")return v(yn,{value:a.value,onUpdateValue:a.onUpdateValue,rows:1},{});if(typeof a.value=="object")return v(q,{value:we(a.value),onUpdateValue:h=>{var l;(l=a.onUpdateValue)==null||l.call(a,JSON.parse(h))},type:"textarea",rows:1},{})}return(a,h)=>{const l=dn;return ue(),Ve(l,{class:"tree","block-line":"",data:D(c),"expand-on-click":"",selectable:"",renderSuffix:p},null,8,["data"])}}});const In=Ie(wn,[["__scopeId","data-v-fed19ba7"]]),Sn=z({__name:"LanguageSettingsView",setup(n){const i=qe(),_=cn(),I=window[Symbol.for("loggerFactory")].create("src/views/LanguageSettingsView.vue");I.info();const c=w(!1),u=w(!1),m=w(Qe.global.locale),p=w({}),a=w(""),h=w(Array.from(Ye(),o=>({label:`${o}: ${b(o)}`,value:o})));l(m.value),ye(p,()=>{a.value=we(p.value)},{immediate:!0});async function l(o){I.debug("\u8BBE\u7F6E",o);try{if(u.value){_.warning({title:b("warning"),content:b("do_you_want_to_discard_the_changes"),positiveText:b("yes"),negativeText:b("no"),onPositiveClick:async()=>{await G(o)},onNegativeClick:()=>{M()}});return}await G(o)}catch{}}function d(){try{p.value=JSON.parse(a.value),M(),u.value=!0,c.value=!1}catch(o){i.error(String(o))}}function y(){M(),en(p.value),i.success(b("success")),u.value=!1}function g(){nn(m.value),i.success(b("success"))}async function G(o){try{const f=await Ze(o);if(I.debug("_localConfig",f),f){p.value=S(f),u.value=!1;return}}catch{}x(p.value,o)}function x(o,f){p.value=S(o),p.value.name=f,u.value=!0}function S(o){return JSON.parse(JSON.stringify(o))}function M(){p.value.name?m.value=p.value.name:p.value.name=m.value}return(o,f)=>{const k=fn,A=on,L=mn;return ue(),Ve(D(pn),null,{default:F(()=>[T(L,{vertical:""},{default:F(()=>[T(k,{value:m.value,"onUpdate:value":f[0]||(f[0]=V=>m.value=V),onChange:l,options:h.value,tag:"",filterable:"",clearable:""},null,8,["value","options"]),T(D(q),{type:"textarea",value:a.value,"onUpdate:value":f[1]||(f[1]=V=>a.value=V),onChange:f[2]||(f[2]=V=>c.value=!0)},null,8,["value"]),T(L,null,{default:F(()=>[T(A,{onClick:d,type:"primary",disabled:!c.value},{default:F(()=>[X(H(D(b)("parse")),1)]),_:1},8,["disabled"]),T(A,{onClick:y,type:"primary",disabled:!u.value},{default:F(()=>[X(H(D(b)("save")),1)]),_:1},8,["disabled"]),T(A,{onClick:g,type:"error"},{default:F(()=>[X(H(D(b)("delete")),1)]),_:1})]),_:1}),T(In,{onChange:f[3]||(f[3]=V=>u.value=!0),data:p.value},null,8,["data"])]),_:1})]),_:1})}}});const ft=Ie(Sn,[["__scopeId","data-v-5dc00d26"]]);export{ft as default};
