import{ae as F,ab as o,af as U,ag as P,a9 as z,ah as _,a4 as E,a5 as y,ai as j,a1 as k,a7 as G,aj as M,ak as T}from"./index.271bc2a1.js";function W(){return F({push(f){if(f.created_at>o())return U.BREAK}})}const D=f=>`createRefreshLoadStaff:${JSON.stringify(f)}`,A={...P,duration:1e3*60},$=z()((f,s=20,r)=>{var R;const h=new WeakMap,m=D(f),S=(R=_(m,A))!=null?R:{loadBufferOpt:r==null?void 0:r.loadBufferOpt,refreshBufferOpt:{minSince:o(),...r==null?void 0:r.refreshBufferOpt}},L=I(S.loadBufferOpt),g=I(S.refreshBufferOpt);return{initialization(){var t;const e=(t=r==null?void 0:r.eventBeltline)!=null?t:this.beltline;C(e,g,!0),C(e,L,!1)},feat:{loadBufferOpt:L,refreshBufferOpt:g,firstLoad(){const e=this.beltline.feat.loadBufferOpt;e.isLoading=!0;const t=this.beltline,n=t.createChild().addFilters(f.map(a=>({...a,limit:s}))).addStaff(E()).addStaff(y()).addStaff({push(){e.bufferCounter.count+1>=s&&(e.isLoading=!1)}});setTimeout(()=>{e.isLoading=!1},20),t.onAddRelayUrlsAfter(a=>{n.addRelayUrls(a)}),n.addRelayUrls(t.getRelayUrls()),e.bufferLine.addExtends(n)},refresh(){const e=(t,n)=>{const a=n.until,i=n.until+n.timeIncrement;if(i>o()){if(t(),n.timeIncrement=n.timeIncrement/2,n.timeIncrement<60&&(n.timeIncrement=60),a>o()){n.until=o();return}}else n.until=i;return f.map(c=>({...c,since:a,until:i}))};B(this.beltline.feat.refreshBufferOpt,this.beltline,e)},load(){const e=(t,n)=>{const a=n.since,i=n.since=n.since-n.timeIncrement;if(!(i<1640966400&&(t(),a<1640966400)))return f.map(c=>({...c,since:i,until:a}))};B(this.beltline.feat.loadBufferOpt,this.beltline,e)}}};function l(e){clearInterval(e.intervalId),e.isLoading=!1}function B(e,t,n){if(l(e),f.length===0)return;const a=t.getRelayUrls(),i=e.bufferLine.getList(),c=i.splice(i.length-s,s);c.length<s&&q(e,a,c.length,(...u)=>{const d=n(...u);return K(t),d}),v(c,t)}function K(e){M(m,{loadBufferOpt:{timeIncrement:e.feat.loadBufferOpt.timeIncrement},refreshBufferOpt:{timeIncrement:e.feat.refreshBufferOpt.timeIncrement}},A)}function q(e,t,n,a){var c;e.bufferCounter.count>s&&(e.timeIncrement=Math.floor(e.timeIncrement/(e.bufferCounter.count/s))),e.timeIncrement<60&&(e.timeIncrement=60),e.bufferCounter.set(n),l(e),e.isLoading=!0,e.intervalId=setInterval(i,(c=r==null?void 0:r.interval)!=null?c:3e3),setTimeout(()=>i(!0));function i(u){if(e.isLoading=!0,e.bufferCounter.count>=s){l(e);return}else u||(e.timeIncrement=e.timeIncrement*2);const d=a(()=>l(e),e);if(!!d&&t.size!==0)for(const N of t)e.bufferLine.addExtends(e.bufferLine.createChild().addStaff(y()).addStaff(E()).addFilters(d).addRelayUrl(N))}}function w(e,t){h.set(e,{event:e,opt:t})}function v(e,t){for(const n of e){const a=x(n);t.pushEvent(n,a==null?void 0:a.opt)}}function x(e){const t=h.get(e);return h.delete(e),t}function I(e){return Object.assign({bufferLine:void 0,bufferCounter:j(0),timeIncrement:1200,until:o(),since:o(),createTime:o(),minSince:1640966400,intervalId:void 0,isLoading:!1},e)}function C(e,t,n){var i;const a=k(()=>{const c=t.bufferLine.getList(),u=c.splice(c.length-s,s);v(u,e)},((i=r==null?void 0:r.interval)!=null?i:3e3)+1e3);t.bufferLine=e.createChild().addStaff(G()).addStaff({push(c,u,d){w(c,d),t.bufferCounter.reduce(),a()}}),n?t.bufferLine.addStaffOfReverseSortByCreateAt():t.bufferLine.addStaffOfSortByCreateAt()}}),H=z()(()=>({initialization(){this.beltline.feat.loadBufferOpt.bufferLine.addStaff(T(),{unshift:!0}),this.beltline.feat.refreshBufferOpt.bufferLine.addStaff(T(),{unshift:!0})}}));function Q(){const f=new Set;return F({push(s){if(f.has(s.content))return U.BREAK;f.add(s.content)}})}export{H as a,W as b,$ as c,Q as d};
