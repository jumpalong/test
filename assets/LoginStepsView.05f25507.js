import{R as S,S as h,o as n,T as d}from"./index.243f7ff1.js";function R(){const u=S(),i=h(),e=n(()=>{var t;return(t=u.meta.step)!=null?t:0}),l=n(()=>{var t;return(t=u.name)!=null?t:""}),s=n(()=>{var t,p;return(p=(t=u.matched[0])==null?void 0:t.children.length)!=null?p:1}),a=n(()=>e.value>1),r=n(()=>e.value<s.value),f=d();e.value>2&&o(2);function v(){if(f.start(),!r.value){c();return}o(e.value+1)}function m(){!a.value||o(e.value-1)}function o(t){i.push({path:`/login-step-${t}`})}async function c(){}return{nextStep:v,prevStep:m,withPrevStep:a,withNestStep:r,current:e,name:l,numberOfSteps:s,complete:c}}export{R as u};