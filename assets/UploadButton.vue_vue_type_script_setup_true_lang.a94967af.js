import{C as S}from"./CloudUpload.c28b341b.js";import{u as E,_ as k}from"./Upload.39a290a3.js";import{u as G}from"./use-rtl.6d35c504.js";import{c as N,_ as P}from"./Button.22997a19.js";import{c as d,e as $,b as r,a as e,d as m,f as y,u as L,p as U,h as q,aL as z,o as D,l as I,w as u,m as c}from"./index.8f62a545.js";import{u as M}from"./use-style.d8216a24.js";import{N as T}from"./Icon.904bc99e.js";import{_ as V}from"./Upload.b5c9ebfa.js";const t="0!important",x="-1px!important";function n(o){return e(o+"-type",[r("& +",[d("button",{},[e(o+"-type",[m("border",{borderLeftWidth:t}),m("state-border",{left:x})])])])])}function a(o){return e(o+"-type",[r("& +",[d("button",[e(o+"-type",[m("border",{borderTopWidth:t}),m("state-border",{top:x})])])])])}const W=d("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[$("vertical",{flexDirection:"row"},[$("rtl",[d("button",[r("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),n("default"),e("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),e("vertical",{flexDirection:"column"},[d("button",[r("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),a("default"),e("ghost",[a("primary"),a("info"),a("success"),a("warning"),a("error")])])])]),j={size:{type:String,default:void 0},vertical:Boolean},K=y({name:"ButtonGroup",props:j,setup(o){const{mergedClsPrefixRef:s,mergedRtlRef:_}=L(o);return M("-button-group",W,s),U(N,o),{rtlEnabled:G("ButtonGroup",_,s),mergedClsPrefix:s}},render(){const{mergedClsPrefix:o}=this;return q("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),F=y({__name:"UploadButton",props:{upload:null},emits:["uploadResult"],setup(o,{emit:s}){const _=o,{upload:i}=z(_),v=E(),g=new Set;async function C({file:{file:p,status:h,id:l},onFinish:f}){if(!g.has(l)&&h==="pending"&&!!p)if(i!=null&&i.value)i.value(p),g.add(l),f();else{const b=await v(p);f(),g.add(l),s("uploadResult",b)}}return(p,h)=>{const l=T,f=P,b=k,R=K,w=V;return D(),I(w,{abstract:"",customRequest:C},{default:u(()=>[c(R,null,{default:u(()=>[c(b,{abstract:""},{default:u(({handleClick:B})=>[c(f,{quaternary:"",onClick:B},{default:u(()=>[c(l,null,{default:u(()=>[c(S)]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})]),_:1})}}});export{F as _};
