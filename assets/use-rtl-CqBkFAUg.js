import{bM as f,bh as i,k as l,bN as d,R as m,ba as p}from"./index-DVMYH3P6.js";function h(e,n){if(e===void 0)return!1;if(n){const{context:{ids:s}}=n;return s.has(e)}return f(e)!==null}function b(e,n,s){if(!n)return;const o=i(),u=l(()=>{const{value:t}=n;if(!t)return;const r=t[e];if(r)return r}),a=()=>{m(()=>{const{value:t}=s,r=`${t}${e}Rtl`;if(h(r,o))return;const{value:c}=u;c&&c.style.mount({id:r,head:!0,anchorMetaName:p,props:{bPrefix:t?`.${t}-`:void 0},ssr:o})})};return o?a():d(a),u}export{b as u};
