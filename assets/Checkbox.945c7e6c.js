import{h as d,f as N,u as j,N as F,k as B,p as se,M as P,i as ue,b,c as r,d as y,a as M,aP as be,aQ as fe,j as he,U as ke,g as E,bt as ve}from"./index.1b90d9b0.js";import{u as H,c as l,i as me,N as ge}from"./Loading.68c8fb32.js";import{u as V,a as xe}from"./cssr.ebdd28c2.js";import{u as pe}from"./use-rtl.e3f5641a.js";import{c as K}from"./create-key.7b548031.js";import{u as Ce}from"./use-css-vars-class.2322281d.js";import{c as ye}from"./Scrollbar.d017889b.js";const we=d("svg",{viewBox:"0 0 64 64",class:"check-icon"},d("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=d("svg",{viewBox:"0 0 100 100",class:"line-icon"},d("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),G=ue("n-checkbox-group"),ze={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ue=N({name:"CheckboxGroup",props:ze,setup(o){const{mergedClsPrefixRef:g}=j(o),x=H(o),{mergedSizeRef:w,mergedDisabledRef:S}=x,s=F(o.defaultValue),R=B(()=>o.value),u=V(R,s),a=B(()=>{var f;return((f=u.value)===null||f===void 0?void 0:f.length)||0}),c=B(()=>Array.isArray(u.value)?new Set(u.value):new Set);function $(f,n){const{nTriggerFormInput:p,nTriggerFormChange:C}=x,{onChange:h,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const i=Array.from(u.value),A=i.findIndex(I=>I===n);f?~A||(i.push(n),v&&l(v,i,{actionType:"check",value:n}),k&&l(k,i,{actionType:"check",value:n}),p(),C(),s.value=i,h&&l(h,i)):~A&&(i.splice(A,1),v&&l(v,i,{actionType:"uncheck",value:n}),k&&l(k,i,{actionType:"uncheck",value:n}),h&&l(h,i),s.value=i,p(),C())}else f?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),h&&l(h,[n]),s.value=[n],p(),C()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),h&&l(h,[]),s.value=[],p(),C())}return se(G,{checkedCountRef:a,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:c,disabledRef:S,mergedSizeRef:w,toggleCheckbox:$}),{mergedClsPrefix:g}},render(){return d("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Se=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),M("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),M("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),M("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),M("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),M("disabled",{cursor:"not-allowed"},[M("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),me({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[b("&:empty",{display:"none"})])]),be(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Te=Object.assign(Object.assign({},E.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Fe=N({name:"Checkbox",props:Te,setup(o){const g=F(null),{mergedClsPrefixRef:x,inlineThemeDisabled:w,mergedRtlRef:S}=j(o),s=H(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(a){const{value:t}=a.mergedSizeRef;if(t!==void 0)return t}if(e){const{mergedSize:t}=e;if(t!==void 0)return t.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:t},checkedCountRef:z}=a;if(t!==void 0&&z.value>=t&&!n.value)return!0;const{minRef:{value:_}}=a;if(_!==void 0&&z.value<=_&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:R,mergedSizeRef:u}=s,a=he(G,null),c=F(o.defaultChecked),$=P(o,"checked"),f=V($,c),n=ke(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),p=E("Checkbox","-checkbox",Se,ve,o,x);function C(e){if(a&&o.value!==void 0)a.toggleCheckbox(!n.value,o.value);else{const{onChange:m,"onUpdate:checked":t,onUpdateChecked:z}=o,{nTriggerFormInput:_,nTriggerFormChange:U}=s,D=n.value?o.uncheckedValue:o.checkedValue;t&&l(t,D,e),z&&l(z,D,e),m&&l(m,D,e),_(),U(),c.value=D}}function h(e){R.value||C(e)}function k(e){if(!R.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=g.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=g.value)===null||e===void 0||e.blur()}},A=pe("Checkbox",S,x),I=B(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:m},self:{borderRadius:t,color:z,colorChecked:_,colorDisabled:U,colorTableHeader:D,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:Q,checkMarkColorDisabled:W,border:Y,borderFocus:q,borderDisabled:J,borderChecked:X,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:ne,colorDisabledChecked:re,borderDisabledChecked:ce,labelPadding:ae,labelLineHeight:le,labelFontWeight:ie,[K("fontSize",e)]:te,[K("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":m,"--n-border-radius":t,"--n-border":Y,"--n-border-checked":X,"--n-border-focus":q,"--n-border-disabled":J,"--n-border-disabled-checked":ce,"--n-box-shadow-focus":Z,"--n-color":z,"--n-color-checked":_,"--n-color-table":D,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":U,"--n-color-disabled-checked":re,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":Q,"--n-check-mark-color-disabled":W,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":te,"--n-label-padding":ae}}),T=w?Ce("checkbox",B(()=>u.value[0]),I,o):void 0;return Object.assign(s,i,{rtlEnabled:A,selfRef:g,mergedClsPrefix:x,mergedDisabled:R,renderedChecked:n,mergedTheme:p,labelId:ye(),handleClick:h,handleKeyUp:k,handleKeyDown:v,cssVars:w?void 0:I,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:g,renderedChecked:x,mergedDisabled:w,indeterminate:S,privateInsideTable:s,cssVars:R,labelId:u,label:a,mergedClsPrefix:c,focusable:$,handleKeyUp:f,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),d("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,x&&`${c}-checkbox--checked`,w&&`${c}-checkbox--disabled`,S&&`${c}-checkbox--indeterminate`,s&&`${c}-checkbox--inside-table`],tabindex:w||!$?void 0:0,role:"checkbox","aria-checked":S?"mixed":x,"aria-labelledby":u,style:R,onKeyup:f,onKeydown:n,onClick:p,onMousedown:()=>{xe("selectstart",window,C=>{C.preventDefault()},{once:!0})}},d("div",{class:`${c}-checkbox-box-wrapper`},"\xA0",d("div",{class:`${c}-checkbox-box`},d(ge,null,{default:()=>this.indeterminate?d("div",{key:"indeterminate",class:`${c}-checkbox-icon`},Re):d("div",{key:"check",class:`${c}-checkbox-icon`},we)}),d("div",{class:`${c}-checkbox-box__border`}))),a!==null||g.default?d("span",{class:`${c}-checkbox__label`,id:u},g.default?g.default():a):null)}});export{Ue as _,Fe as a};
