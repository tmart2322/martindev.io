(function(e){function t(t){for(var c,o,l=t[0],i=t[1],a=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);j&&j(t);while(b.length)b.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(c=!1)}c&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},o={app:0},r={app:0},s=[];function l(e){return i.p+"js/"+({blog:"blog",consultingProject:"consultingProject",consultingProjects:"consultingProjects"}[e]||e)+"."+{blog:"10b78186",consultingProject:"a58578b0",consultingProjects:"1562d623"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={blog:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({blog:"blog",consultingProject:"consultingProject",consultingProjects:"consultingProjects"}[e]||e)+"."+{blog:"68aee64f",consultingProject:"31d6cfe0",consultingProjects:"31d6cfe0"}[e]+".css",r=i.p+c,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var a=s[l],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===c||u===r))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){a=b[l],u=a.getAttribute("data-href");if(u===c||u===r)return t()}var j=document.createElement("link");j.rel="stylesheet",j.type="text/css",j.onload=t,j.onerror=function(t){var c=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete o[e],j.parentNode.removeChild(j),n(s)},j.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(j)})).then((function(){o[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=s);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(e);var b=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(j);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",b.name="ChunkLoadError",b.type=c,b.request=o,n[1](b)}r[e]=void 0}};var j=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var b=0;b<a.length;b++)t(a[b]);var j=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e9a":function(e,t,n){},1:function(e,t){},"14f3":function(e,t,n){"use strict";n("7356")},"1c28":function(e,t,n){"use strict";n("14d9");var c=n("7a23"),o=n("6605"),r=n("6893");const s={class:"flex flex-column"},l={class:"flex justify-content-center flex-row"},i=["innerHTML"];var a={__name:"ProjectPreview",props:{project:Object},setup(e){const t=e,{convertDateToMonthYear:n,parseMarkdown:a}=Object(r["a"])(),u=Object(o["d"])(),b=Object(c["b"])(()=>{const e=n(t.project.fields.startDate),c=t.project.fields.endDate?n(t.project.fields.endDate):"Current";return`Start Date: ${e} | End Date: ${c}`});function j(e){u.push({path:"/consulting/"+e})}return(e,n)=>{const o=Object(c["F"])("Tag"),r=Object(c["F"])("Button"),u=Object(c["F"])("Card");return Object(c["x"])(),Object(c["d"])(u,{class:"border-1 surface-border border-round-md m-2 text-center py-5 px-3 flex-auto h-full",pt:{body:{class:"flex justify-content-center flex-column h-full"},header:{class:"flex flex-initial"},title:{class:"flex flex-initial justify-content-center"},subtitle:{class:"flex flex-initial justify-content-center"},footer:{class:"flex flex-initial justify-content-center"},content:{class:"flex flex-1 justify-content-center text-left line-height-2"}}},{title:Object(c["M"])(()=>[Object(c["i"])(Object(c["J"])(t.project.fields.name),1)]),subtitle:Object(c["M"])(()=>[Object(c["i"])(Object(c["J"])(b.value),1)]),content:Object(c["M"])(()=>[Object(c["g"])("div",s,[Object(c["g"])("div",l,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(t.project.fields.roles,e=>(Object(c["x"])(),Object(c["d"])(o,{severity:"info",key:e,value:e,rounded:""},null,8,["value"]))),128))]),Object(c["g"])("div",{class:"flex",innerHTML:Object(c["K"])(a)(t.project.fields.overview)},null,8,i)])]),footer:Object(c["M"])(()=>[Object(c["j"])(r,{class:"align-self-end mt-auto cursor-pointer",label:"View Project",onClick:n[0]||(n[0]=e=>j(t.project.sys.id))})]),_:1})}}};const u=a;t["a"]=u},"45ad":function(e,t,n){"use strict";var c=n("7a23"),o=n("1c28"),r=n("a26b");const s={class:"grid mx-2 mt-2"};var l={__name:"ProjectsPreviewGrid",setup(e){const{consultingProjects:t}=Object(r["a"])();return(e,n)=>(Object(c["x"])(),Object(c["f"])("div",s,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(Object(c["K"])(t),e=>(Object(c["x"])(),Object(c["f"])("div",{class:"sm:col-12 lg:col-6 xl:col-4 mb-3",key:e.sys.id},[Object(c["j"])(Object(c["K"])(o["a"]),{project:e},null,8,["project"])]))),128))]))}};const i=l;t["a"]=i},5217:function(e,t,n){e.exports=n.p+"img/LogoWhite.2bdb370a.png"},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("5217"),r=n.n(o),s=n("a26b");const l={id:"nav"},i=Object(c["g"])("img",{alt:"logo",src:r.a,height:"40",class:"mt-1"},null,-1),a={id:"content"};var u={__name:"App",setup(e){const{blogs:t,consultingProjects:n,isLoaded:o}=Object(s["a"])();let r=Object(c["C"])([]);return Object(c["L"])(o,e=>{if(e){const e=n.value.map(e=>({label:e.fields.name,to:{name:"consulting-project",params:{consultingProjectId:e.sys.id}}}));e.unshift({label:"All Projects",to:"/consulting"},{separator:!0});const c=t.value.map(e=>({label:e.fields.blogPostName,to:"/blog/"+e.sys.id}));r.value=[{label:"Home",to:"/"},{label:"Consulting",items:e},{label:"Blog",items:c}]}}),(e,t)=>{const n=Object(c["F"])("Menubar"),o=Object(c["F"])("router-view");return Object(c["x"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",l,[Object(c["j"])(n,{model:Object(c["K"])(r),class:"border-none"},{start:Object(c["M"])(()=>[i]),_:1},8,["model"])]),Object(c["g"])("div",a,[Object(c["j"])(o)])],64)}}};n("14f3");const b=u;var j=b,d=n("6605"),f=n("1c28");const p={class:"h-full flex"};var O={__name:"ProjectsPreviewCarousel",props:{responsiveOptions:{type:Object,default(){return[]}},numVisible:{type:Number,default:3},numScroll:{type:Number,default:3}},setup(e){const t=e,{consultingProjects:n}=Object(s["a"])();return(e,o)=>{const r=Object(c["F"])("Carousel");return Object(c["x"])(),Object(c["d"])(r,{value:Object(c["K"])(n),numVisible:t.numVisible,numScroll:t.numScroll,responsiveOptions:t.responsiveOptions,showIndicators:!1},{item:Object(c["M"])(e=>[Object(c["g"])("div",p,[Object(c["j"])(Object(c["K"])(f["a"]),{project:e.data},null,8,["project"])])]),_:1},8,["value","numVisible","numScroll","responsiveOptions"])}}};const m=O;var g=m,v=n("6893");const h={key:0},y={class:"text-lg"},x={class:"text-sm font-italic"},P={class:"text-sm font-italic"},w={key:0};var C={__name:"BlogsPreview",setup(e){const{blogs:t}=Object(s["a"])(),{convertDateToMonthYear:n}=Object(v["a"])();return(e,o)=>{const r=Object(c["F"])("router-link");return Object(c["K"])(t)?(Object(c["x"])(),Object(c["f"])("div",h,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(Object(c["K"])(t),(e,o)=>(Object(c["x"])(),Object(c["f"])("div",{key:e.sys.id,class:"text-left"},[Object(c["g"])("p",y,[Object(c["j"])(r,{to:"blog/"+e.sys.id},{default:Object(c["M"])(()=>[Object(c["i"])(Object(c["J"])(e.fields.blogPostName),1)]),_:2},1032,["to"])]),Object(c["g"])("p",x," Published: "+Object(c["J"])(Object(c["K"])(n)(e.sys.createdAt)),1),Object(c["g"])("p",P," Last Updated: "+Object(c["J"])(Object(c["K"])(n)(e.sys.updatedAt)),1),o!==Object(c["K"])(t).length-1?(Object(c["x"])(),Object(c["f"])("hr",w)):Object(c["e"])("",!0)]))),128))])):Object(c["e"])("",!0)}}};const M=C;var _=M,k=n("45ad");function T(){const e=Object(c["C"])(0),t=Object(c["C"])(0);function n(){e.value=window.innerWidth,t.value=window.innerHeight}return Object(c["v"])(()=>{window.addEventListener("resize",n),n()}),Object(c["w"])(()=>window.removeEventListener("resize",n)),{windowWidth:e,windowHeight:t}}const S={class:"mx-1 md:mx-6 my-2"},K=Object(c["h"])('<div class="mx-3 sm:mx-2"><h3 class="font-italic mb-0 ml-1">welcome, my name is</h3><h1 class="text-primary font-bold font-italic mt-0">TRISTAN MARTIN</h1><div class="ml-1"><p><span class="text-primary-400 font-italic font-bold">Professionally</span>, I have extensive experience in the Salesforce ecosystem managing large teams to deliver high-quality and robust solutions, designing and developing robust integrations, and solving complex business requirements with automation. </p><p><span class="text-primary-400 font-italic font-bold">Personally</span>, I am an avid skydiver (250 skydives and counting!), fervent international traveler, and live music aficionado. </p></div></div>',1),L={key:0,class:"my-5 grid"},A={class:"col-12 lg:col-8"},D={class:"col-12 lg:col-4"},E={key:1},I=Object(c["g"])("h2",{class:"text-primary mx-3"},"Consulting Projects",-1),N=Object(c["g"])("h2",{class:"text-primary mx-3"},"Blog Posts",-1),B="surface-ground border-50 border-2 border-round-xl my-2 mx:0 sm:mx-2 text-center";var F={__name:"Home",setup(e){const{windowWidth:t}=T(),n=Object(c["C"])([{breakpoint:"1600px",numVisible:1,numScroll:1}]);return(e,o)=>{const r=Object(c["F"])("Card");return Object(c["x"])(),Object(c["f"])("div",S,[K,Object(c["K"])(t)>576?(Object(c["x"])(),Object(c["f"])("div",L,[Object(c["g"])("div",A,[Object(c["j"])(r,{class:Object(c["r"])(B),pt:{title:{class:"text-primary"}}},{title:Object(c["M"])(()=>[Object(c["i"])("Consulting Projects")]),content:Object(c["M"])(()=>[Object(c["j"])(Object(c["K"])(g),{responsiveOptions:n.value,numVisible:2,numScroll:2},null,8,["responsiveOptions"])]),_:1})]),Object(c["g"])("div",D,[Object(c["j"])(r,{class:Object(c["r"])(B),pt:{title:{class:"text-primary"}}},{title:Object(c["M"])(()=>[Object(c["i"])("Blog Posts")]),content:Object(c["M"])(()=>[Object(c["j"])(Object(c["K"])(_))]),_:1})])])):(Object(c["x"])(),Object(c["f"])("div",E,[I,Object(c["j"])(k["a"]),N,Object(c["j"])(r,{class:Object(c["r"])([B,"mx-3"])},{content:Object(c["M"])(()=>[Object(c["j"])(Object(c["K"])(_))]),_:1})]))])}}};const H=F;var V=H;const J=[{path:"/",name:"home",component:V,meta:{title:"Portfolio"}},{path:"/consulting/",name:"consulting-projects",component:()=>n.e("consultingProjects").then(n.bind(null,"1952")),props:!0,meta:{title:"Consulting Projects"}},{path:"/consulting/:consultingProjectId",name:"consulting-project",component:()=>n.e("consultingProject").then(n.bind(null,"675f")),props:!0,meta:{title:"Consulting Project"}},{path:"/blog/:blogId",name:"blog",component:()=>n.e("blog").then(n.bind(null,"fd3f")),props:!0,meta:{title:"Blog"}}],q=Object(d["a"])({history:Object(d["b"])("/"),routes:J});var W=q,$=n("9319"),z=n("c0c3"),R=n("9899"),Y=n("bb57"),G=n("0f7d"),U=n("20de"),Q=(n("4121"),n("9de9"),n("bddf"),n("0e9a"),n("563c"));const X=Object(c["c"])(j),Z=Object(Q["a"])({space:"5ftrbd5qemf9",accessToken:"CwjGzfLI-RHfaiiisKnV4cEQLlAMt64rXM3SgA4stwk"});X.provide("contentfulClientApi",Z);const ee="Tristan Martin";W.afterEach(e=>{document.title=`${ee} - ${e.meta.title}`}),X.use(W),X.use($["a"]),X.component("Menubar",z["a"]),X.component("Card",R["a"]),X.component("Button",Y["a"]),X.component("Carousel",G["a"]),X.component("Tag",U["a"]),X.mount("#app")},6893:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("7c5c");function o(){const e=e=>new Date(e).toLocaleDateString("en-us",{year:"numeric",month:"long"}),t=e=>(c["marked"].use({mangle:!1,headerIds:!1}),c["marked"].parse(e));return{convertDateToMonthYear:e,parseMarkdown:t}}},7356:function(e,t,n){},a26b:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("7a23");function o(){const e=Object(c["C"])(null),t=Object(c["C"])(null),n=Object(c["C"])(null),o=Object(c["o"])("contentfulClientApi"),r=async()=>{try{const c=await o.getEntries();e.value=c.items.filter(e=>"blogPost"===e.sys.contentType.sys.id),t.value=c.items.filter(e=>"consultingProject"===e.sys.contentType.sys.id)}catch(c){console.error(c)}finally{n.value=!0}};return r(),{blogs:e,consultingProjects:t,isLoaded:n}}}});
//# sourceMappingURL=app.2ebe9953.js.map