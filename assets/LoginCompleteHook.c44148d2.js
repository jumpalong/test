import{c as n}from"./use.b23b6c29.js";import{N as s}from"./index.8f62a545.js";const[l,r]=n(()=>{const o=s(new Map);return{loginCompleteHook:o,async runHook(){for(const[e,t]of o.value.entries())await t()}}}),[p,m]=n(o=>{const e=r();return{setHook(t){!e||e.loginCompleteHook.value.set(o.value,t)}}});export{l as a,r as b,p,m as u};