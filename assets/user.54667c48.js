var L=Object.defineProperty;var I=(a,e,t)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(I(a,typeof e!="symbol"?e+"":e,t),t);import{a7 as U,a6 as C,a9 as c,an as E,ad as R,ai as n,ao as d,ae as b,ag as P,af as B,ap as M,Y as f,a2 as S,U as g,Z as m,a3 as k,a4 as K,ah as l,ac as h}from"./index.6c43580b.js";import{R as y,f as O,h as $,a as v,d as p,c as W}from"./getCacheStaff.f3405a11.js";function F(){return U({feat:{useMetadata(){const a=this.beltline.feat.getLatestEvent();return a?u(a):{}},onHasMetadata(a){this.beltline.feat.onHasLatestEvent((e,t)=>{a(u(e),t)})}}})}function u(a){let e={};try{const t=C(a.tags);e.relayUrls=[...t],a&&(e=JSON.parse(a.content))}catch{}return e}const H=c()(a=>{const e=new E.exports;return{afterPush(t,s){if(s.length>a){const r=s.pop();e.emit("limit-pop",r)}},feat:{onLimitPop(t){e.on("limit-pop",t)}}}});class J{constructor(e){i(this,"filters");i(this,"filtersKey");i(this,"eventIdList");i(this,"list",null);i(this,"cacheOptions",{...R,duration:n.localStorage.duration});this.filters=e;let t=JSON.stringify(e);if(t.length>256){const r=d.taggedHashSync(t);this.filtersKey=`LocalStorageFilter:${d.sha256(r)}`}else this.filtersKey=`LocalStorageFilter:${t}`;const s=localStorage.getItem(this.filtersKey);try{this.eventIdList=s?JSON.parse(s):[]}catch{this.eventIdList=[]}}getWholeEvent(){const e=[];for(const t of this.eventIdList)try{const s=this.getItem(t);if(!s)break;e.push(s)}catch{}return e}clear(){for(const e of this.eventIdList)this.removeItem(e)}createKey(e){return e}setItem(e){const t=this.createKey(e.id);b(t,e,this.cacheOptions),this.eventIdList.push(e.id),this.updateList()}getItem(e){try{return P(this.createKey(e),this.cacheOptions)}catch{this.removeItem(e)}}removeItem(e){B(this.createKey(e)),M(this.eventIdList,e),this.updateList()}updateList(){localStorage.setItem(this.filtersKey,JSON.stringify(this.eventIdList))}}const N=c()((a=1e3)=>{let e=null;return{initialization(){if(e=new J(this.beltline.getFilters()),a===0)return;const t=e.getWholeEvent();for(const r of t)this.beltline.pushEvent(r);this.beltline.createChild({}).addStaff({push(r){e.setItem(r)}}).addStaffOfReverseSortByCreateAt().addStaff(H(a)).feat.onLimitPop(r=>{e.removeItem(r.id)})},feat:{removeItem(t){e==null||e.removeItem(t)},getItem(t){return console.debug("getItem",t,"localStorageFilter",e,"event",e==null?void 0:e.getItem(t)),e==null?void 0:e.getItem(t)}}}}),w=c()(()=>{const a=new Map;return{push(e){var r,o;const t=e.pubkey;let s=a.get(t);s?e.created_at>s.created_at&&((o=(r=this.beltline.feat).removeItem)==null||o.call(r,s.pubkey),a.set(t,e)):a.set(t,e)}}});f.createChild({preventCircularReferences:!0}).addFilter({kinds:[10002]}).addStaff(N(1e3)).addStaff(w());function A(a){return S(`getUserRelayUrlConfigByPubkey:${a}`,()=>{const e=g(f.createChild()).addFilter({kinds:[10002],authors:[a]}).addStaff(m()).addStaff(y(10002,a)).addStaff(O()).addStaff($()).addStaff(v()).addExtends(f);return e.feat.withEvent()||e.createChild().addStaff(p(a)),e},{useLocalStorage:!1})}function T(a,e){const{urls:t}=e!=null?e:{};return S(`getUserMetadataLineByPubkey:${a}`,()=>{const s=k().createChild({slef:g({})}).addFilter({authors:[a],kinds:[0]}).addStaff(m()).addStaff(y(0,a)).addStaff(F()).addStaff(K()).addStaff(W()).addStaff(v()),r=async()=>{s.addRelayUrls(t),await h(1e3),s.addStaff(p(a)),await h(1e3),s.addReadUrl()};return s.feat.isHas()?l(`getUserMetadataLineByPubkey0${a}`,r,n.syncInterval4):l(`getUserMetadataLineByPubkey1${a}`,r,n.syncInterval),s},{useLocalStorage:!1})}export{A as a,F as c,T as g,u as p};
