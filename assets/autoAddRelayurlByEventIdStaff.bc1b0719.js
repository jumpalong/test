import{a6 as s,X as f,a3 as r,a5 as u,ag as o}from"./index.d371abec.js";import{a as c,c as S,d as E,g as h}from"./getCacheStaff.5ec07f8f.js";function b(){let e=0;return s({initialization(){this.beltline.feat.pushEvent=(a,i)=>{e===0&&(this.beltline.closeReq(),this.beltline.offLine(),e++,i[0]=a)}},feat:{useEvent(){return this.beltline.getList()[0]},onHasEventOnce(a){const i=this.useEvent();i?a(i):this.beltline.addStaff({push(t){a(t)}})}}})}function g(e){return logger.for("autoAddRelayurlByEventIdStaff").debug("eventId",e),s({initialization(){let a=!1;const i=this,t=f.createChild({describe:"\u83B7\u53D6id\u901A\u8FC7id"}).addFilter({ids:[e],limit:1}).addStaff(b()).addStaff(c()).addFilter({ids:[e],limit:1}).addStaff(r()).addStaff(S());if(t.feat.onHasEventOnce(n=>{if(a)return;const l=u(n.tags);i.beltline.addRelayUrls(l),i.beltline.addStaff(E(n.pubkey)),a=!0}),t.addStaff(h(e)),t.feat.withEvent()||(t.addExtends(f),t.feat.withEvent()))return;const d=()=>{t.feat.withEvent()||t.addReadUrl()};o(`getEventLineById:${e}`,()=>{d()})}})}export{g as a,b as c};