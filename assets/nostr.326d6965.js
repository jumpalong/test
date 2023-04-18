import{ar as o,ad as d,ac as u}from"./index.271bc2a1.js";function i(e){try{const t=o.decode(e);switch(t.type){case"nprofile":return t.data;case"npub":return{pubkey:t.data};default:return null}}catch{try{return o.npubEncode(e),{pubkey:e}}catch{return null}}}function p(e){try{const c=o.decode(e);if(c.type==="naddr")return c.data}catch{}const[t,n,r]=e.split(":");if(t&&n&&r)try{return{kind:parseInt(t),identifier:r,pubkey:n}}catch{}return null}function y(e){if(!e)return null;if(s(e))return e;try{const t=o.decode(e);return t.type==="nsec"?t.data:null}catch{return null}}function s(e){try{const t=o.nsecEncode(e);return o.decode(t).data===e}catch{return!1}}function l(e){return o.nprofileEncode(e)}function h(e){const t=i(e);return t?l(t):null}function v(e){try{const t=o.decode(e);switch(t.type){case"nevent":return t.data;case"note":return{id:t.data,relays:[]};default:return null}}catch{try{return o.noteEncode(e),{id:e,relays:[]}}catch{return null}}}function E(e,t){var r;const n=new Set;for(const c of e)for(const a of t)u(n,(r=a[c])!=null?r:[]);return n}function b(e,t){const n=d(e.tags);return e.tags.forEach(r=>{(r[0]==="e"||r[0]==="p")&&r[2]&&n.add(r[2])}),o.neventEncode({id:e.id,relays:[...n,...t!=null?t:[]]})}function g(e){return Object.assign({kind:1,tags:[],content:"",created_at:Math.floor(Date.now()/1e3)},e)}export{v as a,i as b,g as c,y as d,h as e,E as g,b as n,p as t};
