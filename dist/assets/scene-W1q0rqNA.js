import{_ as B,l as p,r as L,o as v,a as b,b as I,c as R,g as S,i as h}from"./index-Du8BtRnY.js";const w={__name:"scene",props:["emitEditor","options"],setup(u){p.dracoPath="/three-editor/dist/draco/";const a=L(null),e=u;v(()=>e.emitEditor.sceneName!==""&&c());function g(o){e.emitEditor.threeEditor.getSceneEvent(o,t=>{if(e.emitEditor.info=t,t.mode==="点击信息"){const{camera:n,controls:i}=e.emitEditor.threeEditor,d=S(n.position,t.point,.8);h(n.position,d),h(i.target,t.point)}})}function c(o){var m;if(!o){let x=function(r,f){const{IndexDBList:s}=e.emitEditor,E=s.find(_=>_.name===f);E?r.rootInfo.url=URL.createObjectURL(E.blob):o.modelList.splice(o.modelList.indexOf(r),1)};const l=localStorage.getItem(e.emitEditor.sceneName);l&&(o=JSON.parse(l)),(m=o==null?void 0:o.modelList)==null||m.forEach(r=>{if(r.rootInfo.indexDBNameUrl){const[f,s]=r.rootInfo.indexDBNameUrl.split(":");x(r,s)}})}const t=new p(a.value,{fps:null,pixelRatio:window.devicePixelRatio*1,webglRenderParams:{antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}},o);t.scene.children.every(l=>!l.isLight)&&t.setLight();const{mode:i}=t.handler,{transformControls:d}=t;i=="选择"?e.emitEditor.mode="选中":i=="根选择"?e.emitEditor.mode="根级":i=="变换"?d.mode=="translate"?e.emitEditor.mode="平移":d.mode=="rotate"?e.emitEditor.mode="旋转":d.mode=="scale"&&(e.emitEditor.mode="缩放"):i=="场景绘制"?e.emitEditor.mode="绘制":i=="点击信息"&&(e.emitEditor.mode="预览"),e.emitEditor.openKey=t.handler.openKey,e.emitEditor.selectPanelEnable=t.handler.selectPanelEnable,e.emitEditor.threeEditor=t,window.onresize=()=>t.renderSceneResize()}return b(()=>{var o;return(o=e.emitEditor.threeEditor)==null?void 0:o.destroySceneRender()}),e.emitEditor.createScene=c,(o,t)=>(I(),R("div",{class:"threeBox",ref_key:"threeBox",ref:a,onDblclick:t[0]||(t[0]=n=>g(n))},null,544))}},U=B(w,[["__scopeId","data-v-f25c8a5d"]]);export{U as default};
