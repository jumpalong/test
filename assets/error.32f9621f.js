import{n as e}from"./nostr.754d0882.js";import{g as n,N as o,p as s}from"./login.8c6c9b27.js";import{n as a}from"./nostr.1ed837f5.js";async function y(r,t){try{return await e.signEvent(r)}catch(i){throw n()===o.NotLogin&&t!=null&&t.intercept&&s(),i}}async function l(){if(n()===o.PrivateKey)try{return a.nsecEncode(e.getPrikey())}catch{}return null}async function N(r){try{return await e.getPublicKey()}catch{return r!=null&&r.intercept&&s(),null}}class f extends Error{constructor(t){super(`NotFoundError:${t}`)}}export{f as N,l as a,N as g,y as s};