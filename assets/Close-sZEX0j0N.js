import{c as d,a as n,b as e,e as u,f as b,N as f,h as l}from"./index-Bp8Ru9nj.js";import{u as v}from"./utils-Bn9avYFz.js";import{N as h}from"./Icon-C2DldZ3i.js";import{E as p}from"./Close-B84N3VcG.js";const g=d("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[n("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),e("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),u("disabled",[e("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),e("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),e("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),e("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),e("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),n("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),n("round",[e("&::before",`
 border-radius: 50%;
 `)])]),x=b({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(o){return v("-base-close",g,f(o,"clsPrefix")),()=>{const{clsPrefix:r,disabled:s,absolute:t,round:c,isButtonTag:a}=o;return l(a?"button":"div",{type:a?"button":void 0,tabindex:s||!o.focusable?-1:0,"aria-disabled":s,"aria-label":"close",role:a?void 0:"button",disabled:s,class:[`${r}-base-close`,t&&`${r}-base-close--absolute`,s&&`${r}-base-close--disabled`,c&&`${r}-base-close--round`],onMousedown:i=>{o.focusable||i.preventDefault()},onClick:o.onClick},l(h,{clsPrefix:r},{default:()=>l(p,null)}))}}});export{x as N};
