function i(t){return typeof t=="string"?t.endsWith("px")?Number(t.slice(0,t.length-2)):Number(t):t}function o(t){if(t!=null)return typeof t=="number"?`${t}px`:t.endsWith("px")?t:`${t}px`}function f(t,e){const r=t.trim().split(/\s+/g),n={top:r[0]};switch(r.length){case 1:n.right=r[0],n.bottom=r[0],n.left=r[0];break;case 2:n.right=r[1],n.left=r[1],n.bottom=r[0];break;case 3:n.right=r[1],n.bottom=r[2],n.left=r[1];break;case 4:n.right=r[1],n.bottom=r[2],n.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?n:n[e]}function s(t,e){const[r,n]=t.split(" ");return e?e==="row"?r:n:{row:r,col:n||r}}export{f as a,i as d,s as g,o as p};
