/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
var e=(e,a,l)=>new Promise(((t,i)=>{var o=e=>{try{n(l.next(e))}catch(a){i(a)}},s=e=>{try{n(l.throw(e))}catch(a){i(a)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);n((l=l.apply(e,a)).next())}));import{u as a,L as l,x as t,r as i,H as o,M as s,j as n,N as u,I as d,b as r,B as m,o as c,q as v,w as f,e as p,n as g,d as h,c as y,t as w,D as x,y as _,f as I,T as b,z as k,F as j,C,K as N,v as M,h as L,O as A}from"../gva/gin-vue-admin-index.1657790483000.js";import T from"./gin-vue-admin-index.16577904830009.js";import z from"./gin-vue-admin-history.1657790483000.js";import D from"./gin-vue-admin-search.1657790483000.js";import O from"./gin-vue-admin-bottomInfo.1657790483000.js";import{C as P}from"./gin-vue-admin-index.165779048300010.js";import $ from"./gin-vue-admin-index.165779048300011.js";import"./gin-vue-admin-index.165779048300012.js";import"./gin-vue-admin-menuItem.1657790483000.js";import"./gin-vue-admin-asyncSubmenu.1657790483000.js";import"./gin-vue-admin-index.165779048300013.js";const B=["src"],E={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},G={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},H={class:"right-box"},R={class:"dp-flex justify-content-center align-items height-full width-full"},U={class:"header-avatar",style:{cursor:"pointer"}},V={style:{"margin-left":"5px"}},q={style:{"font-weight":"600"}},F=L("个人信息"),K=L("登 出"),S={name:"Layout"},W=Object.assign(S,{setup(S){const W=a(),J=l(),Q=t(),X=i(!1),Y=i(!0),Z=i(!1),ee=()=>{const e=document.body.clientWidth;e<1e3?(Z.value=!0,Y.value=!1,X.value=!0):e>=1e3&&e<1200?(Z.value=!1,Y.value=!1,X.value=!0):(Z.value=!1,Y.value=!0,X.value=!1)};ee();const ae=i(!1);o((()=>{s.emit("collapse",X.value),s.emit("mobile",Z.value),s.on("reload",de),s.on("showLoading",(()=>{ae.value=!0})),s.on("closeLoading",(()=>{ae.value=!1})),window.onresize=()=>(ee(),s.emit("collapse",X.value),void s.emit("mobile",Z.value)),le.loadingInstance&&le.loadingInstance.close()}));const le=n(),te=u((()=>"dark"===le.sideMode?"#fff":"light"===le.sideMode?"#191a23":le.baseColor)),ie=u((()=>"dark"===le.sideMode?"#191a23":"light"===le.sideMode?"#fff":le.sideMode)),oe=u((()=>J.meta.matched)),se=a=>e(this,null,(function*(){0===(yield A({authorityId:a})).code&&(s.emit("closeAllPage"),setTimeout((()=>{window.location.reload()}),1))})),ne=i(!0);let ue=null;const de=()=>e(this,null,(function*(){ue&&window.clearTimeout(ue),ue=window.setTimeout((()=>e(this,null,(function*(){if(J.meta.keepAlive)ne.value=!1,yield d(),ne.value=!0;else{const e=J.meta.title;W.push({name:"Reload",params:{title:e}})}}))),400)})),re=i(!1),me=()=>{X.value=!X.value,Y.value=!X.value,re.value=!X.value,s.emit("collapse",X.value)},ce=()=>{W.push({name:"person"})};return(e,a)=>{const l=r("el-row"),t=r("el-aside"),i=r("el-col"),o=r("el-breadcrumb-item"),s=r("el-breadcrumb"),n=r("arrow-down"),u=r("el-icon"),d=r("el-dropdown-item"),A=r("el-dropdown-menu"),S=r("el-dropdown"),W=r("el-header"),ee=r("router-view"),ue=r("el-main"),de=r("el-container"),ve=m("loading");return c(),v(de,{class:"layout-cont"},{default:f((()=>[p(de,{class:g([Y.value?"openside":"hideside",Z.value?"mobile":""])},{default:f((()=>[p(l,{class:g([re.value?"shadowBg":""]),onClick:a[0]||(a[0]=e=>(re.value=!re.value,Y.value=!!X.value,void me()))},null,8,["class"]),p(t,{class:"main-cont main-left"},{default:f((()=>[h("div",{class:"tilte",style:x({background:_(ie)})},[h("img",{alt:"",class:"logoimg",src:e.$GIN_VUE_ADMIN.appLogo},null,8,B),Y.value?(c(),y("div",{key:0,class:"tit-text",style:x({color:_(te)})},w(e.$GIN_VUE_ADMIN.appName),5)):I("",!0)],4),p(T,{class:"aside"})])),_:1}),p(ue,{class:"main-cont main-right"},{default:f((()=>[p(b,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:f((()=>[h("div",{style:x({width:`calc(100% - ${Z.value?"0px":X.value?"54px":"220px"})`}),class:"topfix"},[p(l,null,{default:f((()=>[p(i,null,{default:f((()=>[p(W,{class:"header-cont"},{default:f((()=>[p(l,{class:"pd-0"},{default:f((()=>[p(i,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:f((()=>[h("div",{class:"menu-total",onClick:me},[X.value?(c(),y("div",E)):(c(),y("div",G))])])),_:1}),p(i,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:f((()=>[p(s,{class:"breadcrumb"},{default:f((()=>[(c(!0),y(j,null,k(_(oe).slice(1,_(oe).length),(e=>(c(),v(o,{key:e.path},{default:f((()=>[L(w(_(J).params.title||e.meta.title),1)])),_:2},1024)))),128))])),_:1})])),_:1}),p(i,{xs:12,lg:9,md:9,sm:14,xl:9},{default:f((()=>[h("div",H,[p(D),p(S,null,{dropdown:f((()=>[p(A,{class:"dropdown-group"},{default:f((()=>[p(d,null,{default:f((()=>[h("span",q," 当前角色："+w(_(le).userInfo.authority.authorityName),1)])),_:1}),_(le).userInfo.authorities?(c(!0),y(j,{key:0},k(_(le).userInfo.authorities.filter((e=>e.authorityId!==_(le).userInfo.authorityId)),(e=>(c(),v(d,{key:e.authorityId,onClick:a=>se(e.authorityId)},{default:f((()=>[h("span",null," 切换为："+w(e.authorityName),1)])),_:2},1032,["onClick"])))),128)):I("",!0),p(d,{icon:"avatar",onClick:ce},{default:f((()=>[F])),_:1}),p(d,{icon:"reading-lamp",onClick:_(le).LoginOut},{default:f((()=>[K])),_:1},8,["onClick"])])),_:1})])),default:f((()=>[h("div",R,[h("span",U,[p(P),h("span",V,w(_(le).userInfo.nickName),1),p(u,null,{default:f((()=>[p(n)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),p(z,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),ne.value?C((c(),v(ee,{key:0,"element-loading-text":"正在加载中",class:"admin-box"},{default:f((({Component:e})=>[h("div",null,[p(b,{mode:"out-in",name:"el-fade-in-linear"},{default:f((()=>[(c(),v(N,{include:_(Q).keepAliveRouters},[(c(),v(M(e)))],1032,["include"]))])),_:2},1024)])])),_:1})),[[ve,ae.value]]):I("",!0),p(O),p($)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{W as default};
