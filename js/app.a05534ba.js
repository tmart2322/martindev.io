(function(e){function t(t){for(var c,o,l=t[0],a=t[1],i=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);j&&j(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(c=!1)}c&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r={app:0},s=[];function l(e){return a.p+"js/"+({blog:"blog",consultingProject:"consultingProject",consultingProjects:"consultingProjects"}[e]||e)+"."+{blog:"7f673c75",consultingProject:"3b9f9791",consultingProjects:"1562d623"}[e]+".js"}function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={blog:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({blog:"blog",consultingProject:"consultingProject",consultingProjects:"consultingProjects"}[e]||e)+"."+{blog:"bfb9570a",consultingProject:"31d6cfe0",consultingProjects:"31d6cfe0"}[e]+".css",r=a.p+c,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var i=s[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===c||u===r))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){i=b[l],u=i.getAttribute("data-href");if(u===c||u===r)return t()}var j=document.createElement("link");j.rel="stylesheet",j.type="text/css",j.onload=t,j.onerror=function(t){var c=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete o[e],j.parentNode.removeChild(j),n(s)},j.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(j)})).then((function(){o[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=s);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=l(e);var b=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(j);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",b.name="ChunkLoadError",b.type=c,b.request=o,n[1](b)}r[e]=void 0}};var j=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var j=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e9a":function(e,t,n){},1:function(e,t){},"1c28":function(e,t,n){"use strict";n("14d9");var c=n("7a23"),o=n("6605"),r=n("6893");const s={class:"flex flex-column"},l={class:"flex justify-content-center flex-row flex-wrap gap-2"},a=["innerHTML"];var i={__name:"ProjectPreview",props:{project:Object},setup(e){const t=e,{convertDateToMonthYear:n,parseMarkdown:i}=Object(r["a"])(),u=Object(o["d"])(),b=Object(c["b"])(()=>{const e=n(t.project.fields.startDate),c=t.project.fields.endDate?n(t.project.fields.endDate):"Current";return`Start Date: ${e} | End Date: ${c}`});function j(e){u.push({path:"/consulting/"+e})}return(e,n)=>{const o=Object(c["F"])("Tag"),r=Object(c["F"])("Button"),u=Object(c["F"])("Card");return Object(c["x"])(),Object(c["d"])(u,{class:"border-1 surface-border border-round-md m-2 text-center py-5 px-3 flex-auto h-full",pt:{body:{class:"flex justify-content-center flex-column h-full"},header:{class:"flex flex-initial"},title:{class:"flex flex-initial justify-content-center"},subtitle:{class:"flex flex-initial justify-content-center"},footer:{class:"flex flex-initial justify-content-center"},content:{class:"flex flex-1 justify-content-center text-left line-height-2"}}},{title:Object(c["M"])(()=>[Object(c["i"])(Object(c["J"])(t.project.fields.name),1)]),subtitle:Object(c["M"])(()=>[Object(c["i"])(Object(c["J"])(b.value),1)]),content:Object(c["M"])(()=>[Object(c["g"])("div",s,[Object(c["g"])("div",l,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(t.project.fields.roles,e=>(Object(c["x"])(),Object(c["d"])(o,{severity:"info",key:e,value:e,rounded:"",class:"px-4 p-2 text-xs md:text-sm"},null,8,["value"]))),128))]),Object(c["g"])("div",{class:"flex",innerHTML:Object(c["K"])(i)(t.project.fields.overview)},null,8,a)])]),footer:Object(c["M"])(()=>[Object(c["j"])(r,{class:"align-self-end mt-auto cursor-pointer",label:"View Project",onClick:n[0]||(n[0]=e=>j(t.project.sys.id))})]),_:1})}}};const u=i;t["a"]=u},"45ad":function(e,t,n){"use strict";n("14d9");var c=n("7a23"),o=n("1c28"),r=n("a26b"),s=n("6605");const l={key:0,class:"grid mt-2"},a={key:0,class:"col-12 flex justify-content-center"};var i={__name:"ProjectsPreviewGrid",props:{maxDisplay:{type:Number,default:0}},setup(e){const t=e,n=Object(s["d"])(),{consultingProjects:i,isLoaded:u}=Object(r["a"])();function b(){n.push({path:"/consulting/"})}return(e,n)=>{const r=Object(c["F"])("Button");return Object(c["K"])(u)?(Object(c["x"])(),Object(c["f"])("div",l,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(Object(c["K"])(i),(e,n)=>(Object(c["x"])(),Object(c["f"])("div",{class:"col-12 sm:col-6 xl:col-4",key:e.sys.id},[0===t.maxDisplay||n<t.maxDisplay?(Object(c["x"])(),Object(c["d"])(Object(c["K"])(o["a"]),{key:0,project:e},null,8,["project"])):Object(c["e"])("",!0)]))),128)),0!==t.maxDisplay&&Object(c["K"])(i).length>=t.maxDisplay?(Object(c["x"])(),Object(c["f"])("div",a,[Object(c["j"])(r,{label:"View All",icon:"pi pi-arrow-right",iconPos:"right",link:"",onClick:b})])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)}}};const u=i;t["a"]=u},5217:function(e,t,n){e.exports=n.p+"img/LogoWhite.2bdb370a.png"},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("5217"),r=n.n(o),s=n("a26b"),l=n("5958");const a={id:"nav",class:"z-5"},i=Object(c["g"])("img",{alt:"logo",src:r.a,height:"40",class:"mt-1"},null,-1),u=Object(c["g"])("p",{class:"mr-4 md:mr-6 lg:mr-8 cursor-pointer font-bolder"},[Object(c["i"])(" Email: "),Object(c["g"])("a",{href:"mailto:contact@martindev.io",class:"no-underline text-primary"},"contact@martindev.io")],-1),b={id:"content",class:"py-2 px-4 md:px-6 lg:px-8 mb-4"};var j={__name:"App",setup(e){const{blogs:t,consultingProjects:n,isLoaded:o}=Object(s["a"])(),{globalCssVariables:r}=Object(l["b"])();let j=Object(c["C"])([]);return Object(c["L"])(r,e=>{document.documentElement.style.setProperty("--background-opacity",e.backgroundOpacity)}),Object(c["L"])(o,e=>{if(e){const e=n.value.map(e=>({label:e.fields.name,to:{name:"consulting-project",params:{consultingProjectId:e.sys.id}}}));e.unshift({label:"All Projects",to:"/consulting"},{separator:!0});const c=t.value.map(e=>({label:e.fields.blogPostName,to:"/blog/"+e.sys.id}));j.value=[{label:"Home",to:"/"},{label:"Consulting",items:e},{label:"Blog",items:c},{label:"Resume",url:"https://www.dropbox.com/s/4qo09rv5ls5u75u/TristanMartinResumeCurrent.pdf?dl=0",target:"_blank"}]}}),(e,t)=>{const n=Object(c["F"])("Menubar"),o=Object(c["F"])("router-view");return Object(c["x"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",a,[Object(c["j"])(n,{model:Object(c["K"])(j),class:"border-none border-noround"},{start:Object(c["M"])(()=>[i]),end:Object(c["M"])(()=>[u]),_:1},8,["model"])]),Object(c["g"])("div",b,[Object(c["j"])(o)])],64)}}};n("d8e5");const d=j;var p=d,f=n("6605"),O=n("1c28");const m={class:"h-full flex"};var g={__name:"ProjectsPreviewCarousel",props:{responsiveOptions:{type:Object,default(){return[]}},numVisible:{type:Number,default:3},numScroll:{type:Number,default:3}},setup(e){const t=e,{consultingProjects:n}=Object(s["a"])();return(e,o)=>{const r=Object(c["F"])("Carousel");return Object(c["x"])(),Object(c["d"])(r,{value:Object(c["K"])(n),numVisible:t.numVisible,numScroll:t.numScroll,responsiveOptions:t.responsiveOptions},{item:Object(c["M"])(e=>[Object(c["g"])("div",m,[Object(c["j"])(Object(c["K"])(O["a"]),{project:e.data},null,8,["project"])])]),_:1},8,["value","numVisible","numScroll","responsiveOptions"])}}};const v=g;var x=v,y=n("6893");const h={key:0},P={class:"text-lg"},w={class:"text-sm font-italic"},k={class:"text-sm font-italic"},C={key:0};var M={__name:"BlogsPreview",setup(e){const{blogs:t}=Object(s["a"])(),{convertDateToMonthYear:n}=Object(y["a"])();return(e,o)=>{const r=Object(c["F"])("router-link");return Object(c["K"])(t)?(Object(c["x"])(),Object(c["f"])("div",h,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(Object(c["K"])(t),(e,o)=>(Object(c["x"])(),Object(c["f"])("div",{key:e.sys.id,class:"text-left"},[Object(c["g"])("p",P,[Object(c["j"])(r,{to:"blog/"+e.sys.id},{default:Object(c["M"])(()=>[Object(c["i"])(Object(c["J"])(e.fields.blogPostName),1)]),_:2},1032,["to"])]),Object(c["g"])("p",w," Published: "+Object(c["J"])(Object(c["K"])(n)(e.sys.createdAt)),1),Object(c["g"])("p",k," Last Updated: "+Object(c["J"])(Object(c["K"])(n)(e.sys.updatedAt)),1),o!==Object(c["K"])(t).length-1?(Object(c["x"])(),Object(c["f"])("hr",C)):Object(c["e"])("",!0)]))),128))])):Object(c["e"])("",!0)}}};const _=M;var D=_,K=n("45ad");const T=Object(c["h"])('<div class="mx-3 sm:mx-2"><h3 class="font-italic mb-0">welcome, my name is</h3><h1 class="text-primary font-bold font-italic mt-0">TRISTAN MARTIN</h1><div><p><span class="text-primary-400 font-italic font-bold">Professionally</span>, I have extensive experience in the Salesforce ecosystem managing large teams to deliver high-quality and robust solutions, designing and developing robust integrations, and solving complex business requirements with automation. </p><p><span class="text-primary-400 font-italic font-bold">Personally</span>, I am an avid skydiver (250 skydives and counting!), fervent international traveler, and live music aficionado. </p></div></div>',1),S={key:0,class:"my-5 grid"},L={key:1},A=Object(c["g"])("h2",{class:"text-primary mx-3"},"Blog Posts",-1),E=Object(c["g"])("h2",{class:"text-primary mx-3"},"Consulting Projects",-1),B="surface-ground border-50 border-2 border-round-xl my-2 mx:0 sm:mx-2 text-center";var N={__name:"Home",setup(e){const{windowWidth:t}=Object(l["c"])(),{breakpoints:n,getBreakpointText:o}=Object(l["a"])(),r=Object(c["C"])([{breakpoint:o(n.xxl),numVisible:1,numScroll:1}]);return(e,o)=>{const s=Object(c["F"])("Card");return Object(c["x"])(),Object(c["f"])(c["a"],null,[T,Object(c["K"])(t)>Object(c["K"])(n).sm?(Object(c["x"])(),Object(c["f"])("div",S,[Object(c["g"])("div",{class:Object(c["r"])(["col-12 lg:col-8",Object(c["K"])(t)<Object(c["K"])(n).lg?"flex-order-1":"flex-order-0"])},[Object(c["j"])(s,{class:Object(c["r"])(B),pt:{title:{class:"text-primary"}}},{title:Object(c["M"])(()=>[Object(c["i"])("Consulting Projects")]),content:Object(c["M"])(()=>[Object(c["j"])(Object(c["K"])(x),{responsiveOptions:r.value,numVisible:2,numScroll:2},null,8,["responsiveOptions"])]),_:1})],2),Object(c["g"])("div",{class:Object(c["r"])(["col-12 lg:col-4",Object(c["K"])(t)<Object(c["K"])(n).lg?"flex-order-0":"flex-order-1"])},[Object(c["j"])(s,{class:Object(c["r"])(B),pt:{title:{class:"text-primary"}}},{title:Object(c["M"])(()=>[Object(c["i"])("Blog Posts")]),content:Object(c["M"])(()=>[Object(c["j"])(Object(c["K"])(D))]),_:1})],2)])):(Object(c["x"])(),Object(c["f"])("div",L,[A,Object(c["j"])(s,{class:Object(c["r"])([B,"mx-3"])},{content:Object(c["M"])(()=>[Object(c["j"])(Object(c["K"])(D))]),_:1}),E,Object(c["j"])(K["a"],{class:"mx-1",maxDisplay:1})]))],64)}}};const V=N;var F=V;const I=[{path:"/",name:"home",component:F,meta:{title:"Portfolio"}},{path:"/consulting/",name:"consulting-projects",component:()=>n.e("consultingProjects").then(n.bind(null,"1952")),props:!0,meta:{title:"Consulting Projects"}},{path:"/consulting/:consultingProjectId",name:"consulting-project",component:()=>n.e("consultingProject").then(n.bind(null,"675f")),props:!0,meta:{title:"Consulting Project"}},{path:"/blog/:blogId",name:"blog",component:()=>n.e("blog").then(n.bind(null,"fd3f")),props:!0,meta:{title:"Blog"}}],H=Object(f["a"])({history:Object(f["b"])("/"),routes:I});var J=H,q=n("9319"),R=n("c0c3"),z=n("9899"),W=n("bb57"),$=n("0f7d"),Y=n("20de"),G=(n("bddf"),n("4121"),n("e1ae"),n("9de9"),n("0e9a"),n("216d")),U=n("563c");const Q=Object(c["c"])(p),X=Object(U["a"])({space:"5ftrbd5qemf9",accessToken:"CwjGzfLI-RHfaiiisKnV4cEQLlAMt64rXM3SgA4stwk"});Q.provide("contentfulClientApi",X),Q.directive("ripple",G["a"]);const Z="Tristan Martin";J.afterEach(e=>{document.title=`${Z} - ${e.meta.title}`}),Q.use(J),Q.use(q["a"]),Q.component("Menubar",R["a"]),Q.component("Card",z["a"]),Q.component("Button",W["a"]),Q.component("Carousel",$["a"]),Q.component("Tag",Y["a"]),Q.mount("#app")},5958:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var c=n("7a23");function o(){const e=Object(c["C"])(0),t=Object(c["C"])(0);function n(){e.value=window.innerWidth,t.value=window.innerHeight}return Object(c["v"])(()=>{window.addEventListener("resize",n),n()}),Object(c["w"])(()=>window.removeEventListener("resize",n)),{windowWidth:e,windowHeight:t}}const r=Object(c["B"])({backgroundOpacity:"1"});function s(){return{globalCssVariables:r}}function l(){const e=Object(c["B"])({sm:576,md:786,lg:992,xl:1200,xxl:1600}),t=e=>e+"px";return{breakpoints:e,getBreakpointText:t}}},6893:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("7c5c");function o(){const e=e=>new Date(e).toLocaleDateString("en-us",{year:"numeric",month:"long"}),t=e=>(c["marked"].use({mangle:!1,headerIds:!1}),c["marked"].parse(e));return{convertDateToMonthYear:e,parseMarkdown:t}}},"72bf":function(e,t,n){},a26b:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("7a23");const o=Object(c["C"])(null),r=Object(c["C"])(null),s=Object(c["C"])(!1),l=Object(c["C"])(!1);function a(){const e=async()=>{try{const e=Object(c["o"])("contentfulClientApi"),t=await e.getEntries();o.value=t.items.filter(e=>"blogPost"===e.sys.contentType.sys.id),r.value=t.items.filter(e=>"consultingProject"===e.sys.contentType.sys.id).sort((e,t)=>e.fields.startDate<t.fields.startDate?1:e.fields.startDate>t.fields.startDate?-1:0)}catch(e){console.error(e)}finally{s.value=!0}};return l.value||(l.value=!0,e()),{blogs:o,consultingProjects:r,isLoaded:s}}},d8e5:function(e,t,n){"use strict";n("72bf")}});
//# sourceMappingURL=app.a05534ba.js.map