import{f as g,bD as w,n as c,y as t,I as r,aV as m,H as o,A as l,D as v,F as p,C as n,G as x,L as h,J as B,db as D,_ as I,O as y,z as L}from"./index.d4beb9d4.js";import{a as N,g as E}from"./FollowChannel.d2bef777.js";import{E as C}from"./Ellipsis.253ff5d9.js";import{_ as F,a as M}from"./ListItem.666b7fc1.js";import"./createGarbageFilter.5dbcc016.js";import"./autoAddRelayurlByEventIdStaff.2b1ec972.js";import"./getCacheStaff.91029245.js";import"./user.fc7031f0.js";import"./ContentBlacklistView.1ecd7aa0.js";import"./Input.217a6f50.js";import"./event.ce5eb45a.js";const $={class:"font-bold"},z={key:0,class:"w-full"},A=g({__name:"ChannelListItem",props:{channelConfigurationData:null},setup(d){const i=d,{channelConfigurationData:e}=w(i),u=c(()=>N(e.value.channelId)),a=c(()=>u.value.feat.useMetadata());return(f,_)=>(t(),r("div",{class:"flex flex-col",onClick:_[0]||(_[0]=()=>f.$router.push({name:"channel-message",params:{value:n(e).channelId}}))},[m("div",$,[o(C,null,{default:l(()=>{var s;return[v(p((s=n(a).name)!=null?s:n(e).channelId.slice(0,10)),1)]}),_:1})]),n(a).about?(t(),r("div",z,[o(C,{class:"w-full"},{default:l(()=>[m("small",null,p(n(a).about),1)]),_:1})])):x("",!0)]))}}),U=g({__name:"ChannelsView",setup(d){const i=E(),e=c(()=>i.getData()),u=c(()=>e.value.entries());function a(){D.push({name:"create-channel"})}return(f,_)=>{const s=I,b=M,k=F;return t(),r(h,null,[m("div",null,[o(s,{onClick:a},{default:l(()=>[v(p(n(y)("create")),1)]),_:1})]),o(k,{class:"mt-4",hoverable:"",clickable:""},{default:l(()=>[(t(!0),r(h,null,B(n(u),([G,V])=>(t(),L(b,null,{default:l(()=>[o(A,{"channel-configuration-data":V},null,8,["channel-configuration-data"])]),_:2},1024))),256))]),_:1})],64)}}});export{U as default};