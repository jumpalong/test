import{C as S}from"./CloudUpload.c0dc99f7.js";import{c as d,e as $,b as r,a as e,d as _,f as y,u as E,ar as k,p as G,bZ as P,g as D,j as N,bT as T,b_ as U,a6 as j,A as q,B as z,C as u,D as c,_ as I,b$ as L,c0 as M}from"./index.243f7ff1.js";const t="0!important",x="-1px!important";function n(o){return e(o+"-type",[r("& +",[d("button",{},[e(o+"-type",[_("border",{borderLeftWidth:t}),_("state-border",{left:x})])])])])}function a(o){return e(o+"-type",[r("& +",[d("button",[e(o+"-type",[_("border",{borderTopWidth:t}),_("state-border",{top:x})])])])])}const V=d("button-group",`
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
 `),a("default"),e("ghost",[a("primary"),a("info"),a("success"),a("warning"),a("error")])])])]),W={size:{type:String,default:void 0},vertical:Boolean},A=y({name:"ButtonGroup",props:W,setup(o){const{mergedClsPrefixRef:s,mergedRtlRef:b}=E(o);return k("-button-group",V,s),G(P,o),{rtlEnabled:D("ButtonGroup",b,s),mergedClsPrefix:s}},render(){const{mergedClsPrefix:o}=this;return N("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),H=y({__name:"UploadButton",props:{upload:null},emits:["uploadResult"],setup(o,{emit:s}){const b=o,{upload:i}=T(b),C=U(),g=new Set;async function v({file:{file:p,status:h,id:l},onFinish:f}){if(!g.has(l)&&h==="pending"&&!!p)if(i!=null&&i.value)i.value(p),g.add(l),f();else{const m=await C(p);f(),g.add(l),s("uploadResult",m)}}return(p,h)=>{const l=j,f=I,m=L,B=A,R=M;return q(),z(R,{abstract:"",customRequest:v},{default:u(()=>[c(B,null,{default:u(()=>[c(m,{abstract:""},{default:u(({handleClick:w})=>[c(f,{quaternary:"",onClick:w},{default:u(()=>[c(l,null,{default:u(()=>[c(S)]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})]),_:1})}}});export{H as _};
