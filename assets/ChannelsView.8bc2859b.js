import{f as C,bv as x,n as c,y as t,I as r,aP as m,H as o,A as l,D as v,F as p,C as e,G as B,L as h,J as I,R as V,dh as y,_ as D,O as L,z as N}from"./index.c4788000.js";import{g as E}from"./FollowChannel.952efedf.js";import{g as F}from"./channel.0f241dc2.js";import{E as g}from"./Ellipsis.e04d5fd8.js";import{_ as M,a as R}from"./ListItem.1b1c7759.js";import"./event.cfa52df0.js";import"./getCacheStaff.b13a93e7.js";import"./autoAddRelayurlByEventIdStaff.0f24d42b.js";import"./user.1ec4f54c.js";import"./ContentBlacklistView.66c32b55.js";import"./Input.683297a9.js";const $={class:"font-bold"},z={key:0,class:"w-full"},A=C({__name:"ChannelListItem",props:{channelConfigurationData:null},setup(d){const u=d,{channelConfigurationData:n}=x(u),i=c(()=>F(n.value.channelId)),a=c(()=>i.value.feat.useMetadata());return(f,_)=>(t(),r("div",{class:"flex flex-col",onClick:_[0]||(_[0]=()=>f.$router.push({name:"channel-message",params:{value:e(n).channelId}}))},[m("div",$,[o(g,null,{default:l(()=>{var s;return[v(p((s=e(a).name)!=null?s:e(n).channelId.slice(0,10)),1)]}),_:1})]),e(a).about?(t(),r("div",z,[o(g,{class:"w-full"},{default:l(()=>[m("small",null,p(e(a).about),1)]),_:1})])):B("",!0)]))}}),W=C({__name:"ChannelsView",setup(d){const u=E();V();const n=c(()=>u.getData()),i=c(()=>n.value.entries());function a(){y.push({name:"create-channel"})}return(f,_)=>{const s=D,k=R,b=M;return t(),r(h,null,[m("div",null,[o(s,{onClick:a},{default:l(()=>[v(p(e(L)("create")),1)]),_:1})]),o(b,{class:"mt-4",hoverable:"",clickable:""},{default:l(()=>[(t(!0),r(h,null,I(e(i),([G,w])=>(t(),N(k,null,{default:l(()=>[o(A,{"channel-configuration-data":w},null,8,["channel-configuration-data"])]),_:2},1024))),256))]),_:1})],64)}}});export{W as default};