import{R as t,r as m,a as h}from"./vendor.fa41bded.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}};g();class y{constructor(n,l){this.name=n,!localStorage.getItem(this.name)&&localStorage.setItem(this.name,JSON.stringify(l))}setData(n){localStorage.setItem(this.name,JSON.stringify(n))}getData(){return JSON.parse(localStorage.getItem(this.name))}}function v({todo:o,index:n,onActiveChange:l,onRemoveClicked:s}){return t.createElement("li",{className:"flex p-2 border-b items-center"},t.createElement("input",{className:"mr-2",type:"checkbox",onChange:({target:e})=>l(n,e.checked),checked:o.active,style:{transform:"scale(1.3)"}}),t.createElement("span",{className:"todo--text "+(o.active?"todo--inactive":""),style:{textDecoration:o.active&&"line-through"}},o.text),t.createElement("button",{"aria-label":"Delete todo",className:"ml-auto",onClick:()=>s(n),title:"Delete todo"},"\u274E"))}const u=new y("todos",[]);function x(){const[o,n]=m.exports.useState(u.getData()),[l,s]=m.exports.useState({text:"",active:!1});m.exports.useEffect(()=>{u.setData(o)},[o]);function e(a,c){const d=[...o];d[a].active=c,n(d)}function r(a){const c=[...o];c.splice(a,1),n(c)}function i(){if(l.text){const a=[...o];a.push(l),n(a),f()}else alert("Todo can't be empty")}function f(){s({text:"",active:!1})}function p(){return o.length?t.createElement("ul",null,o.map((a,c)=>t.createElement(v,{index:c,key:c,todo:a,onActiveChange:e,onRemoveClicked:r}))):t.createElement("div",{className:"flex flex-col py-5 text-center text-gray-500"},"Hmm ... There's nothing to do now \u{1F914}")}return t.createElement("div",{id:"app",className:"flex-1 min-h-full border rounded-md shadow-sm"},t.createElement("div",{className:"py-1"},t.createElement("h4",{className:"text-2xl"},"My Todo Lists")),t.createElement("div",{className:"flex flex-col flex-1 min-h-full"},t.createElement("form",{onSubmit:a=>!a.preventDefault()&&i()},t.createElement("input",{className:"w-full p-1 my-2 border rounded-sm",onChange:({target:a})=>s({text:a.value,active:!1}),type:"text",value:l.text})),t.createElement(p,null)))}h.render(t.createElement(t.StrictMode,null,t.createElement(x,null)),document.getElementById("root"));
