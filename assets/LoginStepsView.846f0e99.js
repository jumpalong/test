import{c as g}from"./Contact.55c231a9.js";import{P as v,R as S,Q as w,S as y,n,T as C}from"./index.271bc2a1.js";import{g as p}from"./FollowChannel.e5a442b0.js";const a=[];a.push(()=>{v()&&(g.follow("076fae9a020673caf9db66734884aa4a77f49ba394274896e439e1c6ff178289","wss://nos.lol","\u4F60\u597D"),p().joinChannel("25e5c82273a271cb1a840d0060391a0bf4965cafeb029d5ab55350b418953fbb",{relays:["wss://nos.lol"]}),p().joinChannel("22dcc0565a6c698199767e80b0526769cf3c04460b7ffc22a4b4cfbfdd642b53",{relays:["wss://nos.lol"]}))});a.push(()=>{S.syncAll()});function T(){const o=w(),r=y(),t=n(()=>{var e;return(e=o.meta.step)!=null?e:0}),b=n(()=>{var e;return(e=o.name)!=null?e:""}),c=n(()=>{var e,s;return(s=(e=o.matched[0])==null?void 0:e.children.length)!=null?s:1}),u=n(()=>t.value>1),l=n(()=>t.value<c.value);function h(){if(!l.value){i();return}f(t.value+1)}function d(){!u.value||f(t.value-1)}function f(e){r.push({path:`/login-step-${e}`})}const m=C();async function i(){a.push(()=>{localStorage.removeItem("newUserFlag")}),a.forEach(s=>s());const e=o.query.redirected;m.start(),setTimeout(()=>{if(!e){r.push("/");return}r.push(e)},2e3)}return{nextStep:h,prevStep:d,withPrevStep:u,withNestStep:l,current:t,name:b,numberOfSteps:c,complete:i,loginOperations:a}}export{T as u};