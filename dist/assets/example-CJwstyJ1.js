import{_ as z,C as T,f as j,i as B,r as S,o as l,c,b as s,e as p,w as r,u as $,F as m,a as _,d as I,t as h,l as N,n as R,p as V,g as A,h as D}from"./index-C1kgT8b-.js";import{T as F,a as J,C as U}from"./index-P4YFEAlE.js";var q={doc:"https://z2586300277.github.io/three-editor/docs/dist/",example:"https://z2586300277.github.io/three-editor/dist/#/example",editor:"https://z2586300277.github.io/three-editor/dist/#/editor",github:"https://z2586300277/three-editor",author:"https://github.com/z2586300277"};const b=n=>(V("data-v-b6e75ecf"),n=n(),A(),n),M={class:"main"},P={class:"top"},G=b(()=>s("img",{class:"logo",src:D,alt:"logo",width:"36px",height:"36px"},null,-1)),H=b(()=>s("div",{class:"top-title-text"},"3D Examples",-1)),K=[G,H],O={class:"center"},Q={class:"nav"},W={class:"examples"},X={class:"examples-item"},Y=["onClick"],Z=["src"],ee={__name:"example",setup(n){const E=T(),w=e=>window.open(q[e]),i=j({exampleList:[],activeList:[]}),u=[{name:"Three-Editor案例",path:"threeEditor",list:F},{name:"Three.js案例",path:"threejs",list:J},{name:"Cesium.js案例",path:"cesiumjs",list:U}],v=e=>{i.exampleList=u.find(a=>a.path===e).list,localStorage.setItem("example_path",e),d(0)},x=B(0),d=e=>{var a;i.activeList=(a=i.exampleList[e])==null?void 0:a.children,x.value=e,localStorage.setItem("example_active",e)},L=e=>{const a=E.resolve({name:"codeMirror",query:{example_path:localStorage.getItem("example_path"),example_active:localStorage.getItem("example_active"),key:e.key}}).href;window.open(a)},f=localStorage.getItem("example_path")||"threeEditor",y=localStorage.getItem("example_active")||0;return v(f),d(y),(e,a)=>{const g=S("el-menu-item"),k=S("el-menu");return l(),c("div",M,[s("div",P,[s("div",{class:"top-title",onClick:a[0]||(a[0]=t=>w("author"))},K),p(k,{class:"menu",style:{border:"none"},"default-active":$(f),mode:"horizontal",ellipsis:!1,"active-text-color":"#fff","text-color":"#fff","default-openeds":["0"]},{default:r(()=>[(l(),c(m,null,_(u,(t,o)=>p(g,{key:o,index:String(t.path),onClick:C=>v(t.path)},{default:r(()=>[I(h(t.name),1)]),_:2},1032,["index","onClick"])),64))]),_:1},8,["default-active"])]),s("div",O,[s("div",Q,[p(k,{class:"menu",style:{border:"none"},"default-active":"0",ellipsis:!1,"text-color":"#fff","active-text-color":"#71a5ee"},{default:r(()=>[(l(!0),c(m,null,_(i.exampleList,(t,o)=>(l(),N(g,{class:R({menuItem:o==x.value}),key:o,index:String(o),onClick:C=>d(o,t)},{default:r(()=>[I(h(t.name),1)]),_:2},1032,["class","index","onClick"]))),128))]),_:1})]),s("div",W,[(l(!0),c(m,null,_(i.activeList,(t,o)=>(l(),c("div",X,[s("div",{class:"box",onClick:C=>L(t)},[s("img",{src:t.image},null,8,Z),s("div",null,h(t.name),1)],8,Y)]))),256))])])])}}},ae=z(ee,[["__scopeId","data-v-b6e75ecf"]]);export{ae as default};
