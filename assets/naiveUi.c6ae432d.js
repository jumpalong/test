import{an as a,C as t,bM as i,h as s}from"./index.1b90d9b0.js";import{u as c}from"./composables.d23d34d7.js";import{_ as u}from"./Input.6cd78f60.js";import{N as l}from"./Icon.d35ca04d.js";function _(){const r=a(),o=c();return function(n){let e="success";try{if(!n){r.error(t("empty_text"));return}i(n),e="success"}catch{e="error"}o[e]({title:t(e),content:()=>s(u,{value:n,type:"textarea"}),positiveText:t("yes"),negativeText:t("no"),onPositiveClick:()=>{},onNegativeClick:()=>{}})}}const v=(r,o=null)=>()=>s(l,o,{default:()=>s(r)});export{v as r,_ as u};