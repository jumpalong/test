import{aa as F,a7 as c,ab as l,af as x,a6 as U,al as z,a4 as E,a5 as y,am as N,ag as P,an as p}from"./index.263e31e4.js";import{a as A}from"./getCacheStaff.b1915842.js";function j(){return F({push(s){if(s.created_at>c())return l.BREAK}})}const q=s=>`createRefreshLoadStaff:${JSON.stringify(s)}`,T={...x,duration:1e3*60*30},k=U()((s,i=20,h)=>{var R;const m=new WeakMap,B=q(s),C=(R=z(B,T))!=null?R:{loadBufferOpt:void 0,refreshBufferOpt:{minSince:c()}},o=v(C.loadBufferOpt),u=v(C.refreshBufferOpt);return{initialization(){var n;const e=(n=h==null?void 0:h.eventBeltline)!=null?n:this.beltline;u.bufferLine=e.createChild().addStaff(A()).addStaff({push(t,a,r){if(g(t,r),u.bufferCounter.reduce(),u.bufferCounter.count<i)return e.pushEvent(t,r),l.BREAK}}).addStaffOfReverseSortByCreateAt(),o.bufferLine=e.createChild().addStaff(A()).addStaff({push(t,a,r){if(g(t,r),o.bufferCounter.reduce(),o.bufferCounter.count<i)return e.pushEvent(t,r),l.BREAK}}).addStaffOfReverseSortByCreateAt()},feat:{loadBufferOpt:o,refreshBufferOpt:u,firstLoad(){const e=this.beltline.feat.loadBufferOpt;e.isLoading=!0;const n=this.beltline,t=n.createChild().addFilters(s.map(a=>({...a,limit:i}))).addStaff(E()).addStaff(y()).addStaff({push(){e.bufferCounter.count+1>=i&&(e.isLoading=!1)}});setTimeout(()=>{e.isLoading=!1},20),n.onAddRelayUrlsAfter(a=>{t.addRelayUrls(a)}),t.addRelayUrls(n.getRelayUrls()),e.bufferLine.addExtends(t)},refresh(){const e=(n,t)=>{const a=t.until,r=t.until+t.timeIncrement;if(r>c()){if(n(),t.timeIncrement=t.timeIncrement/2,t.timeIncrement<60&&(t.timeIncrement=60),a>c()){t.until=c();return}}else t.until=r;return s.map(f=>({...f,since:a,until:r}))};I(this.beltline.feat.refreshBufferOpt,this.beltline,e)},load(){const e=(n,t)=>{const a=t.since,r=t.since=t.since-t.timeIncrement;if(!(r<1640966400&&(n(),a<1640966400)))return s.map(f=>({...f,since:r,until:a}))};I(this.beltline.feat.loadBufferOpt,this.beltline,e)}}};function I(e,n,t){if(s.length===0)return;const a=n.getRelayUrls(),r=e.bufferLine.getList(),f=r.splice(r.length-i,i);f.length<i&&b(e,a,f.length,(...S)=>{L(n);const d=t(...S);return L(n),d}),K(f,n)}function L(e){P(B,{loadBufferOpt:{timeIncrement:e.feat.loadBufferOpt.timeIncrement},refreshBufferOpt:{timeIncrement:e.feat.refreshBufferOpt.timeIncrement}},T)}function b(e,n,t,a){const r=()=>{clearInterval(e.intervalId),e.isLoading=!1};e.bufferCounter.count>i&&(e.timeIncrement=Math.floor(e.timeIncrement/(e.bufferCounter.count/i))),e.timeIncrement<60&&(e.timeIncrement=60),e.bufferCounter.set(t),r(),e.isLoading=!0,e.intervalId=setInterval(f,4e3),setTimeout(()=>f(!0));function f(S){if(e.isLoading=!0,e.bufferCounter.count>=i){r();return}else S||(e.timeIncrement=e.timeIncrement*2);const d=a(r,e);if(!!d&&n.size!==0)for(const w of n)e.bufferLine.addExtends(e.bufferLine.createChild().addStaff(y()).addStaff(E()).addFilters(d).addRelayUrl(w))}}function g(e,n){m.set(e,{event:e,opt:n})}function K(e,n){for(const t of e){const a=_(t);n.pushEvent(t,a==null?void 0:a.opt)}}function _(e){const n=m.get(e);return m.delete(e),n}function v(e){return Object.assign({bufferLine:void 0,bufferCounter:N(0),timeIncrement:600,until:c(),since:c(),createTime:c(),minSince:1640966400,intervalId:void 0,isLoading:!1},e)}}),D=U()(()=>({initialization(){this.beltline.feat.loadBufferOpt.bufferLine.addStaff(p(),{unshift:!0}),this.beltline.feat.refreshBufferOpt.bufferLine.addStaff(p(),{unshift:!0})}}));function J(){const s=new Set;return F({push(i){if(s.has(i.content))return l.BREAK;s.add(i.content)}})}export{D as a,j as b,k as c,J as d};
