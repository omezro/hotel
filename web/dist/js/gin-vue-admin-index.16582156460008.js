/*! 
 Build based on gin-vue-admin 
 Time : 1658215646000 */
var e=(e,a,l)=>new Promise(((t,i)=>{var n=e=>{try{s(l.next(e))}catch(a){i(a)}},o=e=>{try{s(l.throw(e))}catch(a){i(a)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,o);s((l=l.apply(e,a)).next())}));import{u as a,L as l,x as t,r as i,H as n,M as o,j as s,N as u,I as d,b as r,B as m,o as c,q as v,w as f,e as p,n as g,d as h,c as y,t as _,D as x,y as w,f as I,T as b,z as k,F as j,C,K as M,v as N,h as L,O as A}from"../gva/gin-vue-admin-index.1658215646000.js";import{_ as T}from"./gin-vue-admin-te.1658215646000.js";import z from"./gin-vue-admin-index.16582156460009.js";import O from"./gin-vue-admin-history.1658215646000.js";import P from"./gin-vue-admin-search.1658215646000.js";import B from"./gin-vue-admin-bottomInfo.1658215646000.js";import{C as D}from"./gin-vue-admin-index.165821564600010.js";import H from"./gin-vue-admin-index.165821564600011.js";import"./gin-vue-admin-index.165821564600012.js";import"./gin-vue-admin-menuItem.1658215646000.js";import"./gin-vue-admin-asyncSubmenu.1658215646000.js";import"./gin-vue-admin-index.165821564600013.js";/* empty css                                                                      */const R=h("img",{alt:"",class:"logoimg",src:T},null,-1),$={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},q={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},E={class:"right-box"},F={class:"dp-flex justify-content-center align-items height-full width-full"},G={class:"header-avatar",style:{cursor:"pointer"}},K={style:{"margin-left":"5px"}},S={style:{"font-weight":"600"}},U=L("个人信息"),V=L("登 出"),W={name:"Layout"},J=Object.assign(W,{setup(T){const W=a(),J=l(),Q=t(),X=i(!1),Y=i(!0),Z=i(!1),ee=()=>{const e=document.body.clientWidth;e<1e3?(Z.value=!0,Y.value=!1,X.value=!0):e>=1e3&&e<1200?(Z.value=!1,Y.value=!1,X.value=!0):(Z.value=!1,Y.value=!0,X.value=!1)};ee();const ae=i(!1);n((()=>{o.emit("collapse",X.value),o.emit("mobile",Z.value),o.on("reload",de),o.on("showLoading",(()=>{ae.value=!0})),o.on("closeLoading",(()=>{ae.value=!1})),window.onresize=()=>(ee(),o.emit("collapse",X.value),void o.emit("mobile",Z.value)),le.loadingInstance&&le.loadingInstance.close()}));const le=s(),te=u((()=>"dark"===le.sideMode?"#fff":"light"===le.sideMode?"#191a23":le.baseColor)),ie=u((()=>"dark"===le.sideMode?"#191a23":"light"===le.sideMode?"#fff":le.sideMode)),ne=u((()=>J.meta.matched)),oe=a=>e(this,null,(function*(){0===(yield A({authorityId:a})).code&&(o.emit("closeAllPage"),setTimeout((()=>{window.location.reload()}),1))})),se=i(!0);let ue=null;const de=()=>e(this,null,(function*(){ue&&window.clearTimeout(ue),ue=window.setTimeout((()=>e(this,null,(function*(){if(J.meta.keepAlive)se.value=!1,yield d(),se.value=!0;else{const e=J.meta.title;W.push({name:"Reload",params:{title:e}})}}))),400)})),re=i(!1),me=()=>{X.value=!X.value,Y.value=!X.value,re.value=!X.value,o.emit("collapse",X.value)},ce=()=>{W.push({name:"person"})};return(e,a)=>{const l=r("el-row"),t=r("el-aside"),i=r("el-col"),n=r("el-breadcrumb-item"),o=r("el-breadcrumb"),s=r("arrow-down"),u=r("el-icon"),d=r("el-dropdown-item"),A=r("el-dropdown-menu"),T=r("el-dropdown"),W=r("el-header"),ee=r("router-view"),ue=r("el-main"),de=r("el-container"),ve=m("loading");return c(),v(de,{class:"layout-cont"},{default:f((()=>[p(de,{class:g([Y.value?"openside":"hideside",Z.value?"mobile":""])},{default:f((()=>[p(l,{class:g([re.value?"shadowBg":""]),onClick:a[0]||(a[0]=e=>(re.value=!re.value,Y.value=!!X.value,void me()))},null,8,["class"]),p(t,{class:"main-cont main-left"},{default:f((()=>[h("div",{class:"tilte",style:x({background:w(ie)})},[R,Y.value?(c(),y("div",{key:0,class:"tit-text",style:x({color:w(te)})},_(e.$GIN_VUE_ADMIN.appName),5)):I("",!0)],4),p(z,{class:"aside"})])),_:1}),p(ue,{class:"main-cont main-right"},{default:f((()=>[p(b,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:f((()=>[h("div",{style:x({width:`calc(100% - ${Z.value?"0px":X.value?"54px":"220px"})`}),class:"topfix"},[p(l,null,{default:f((()=>[p(i,null,{default:f((()=>[p(W,{class:"header-cont"},{default:f((()=>[p(l,{class:"pd-0"},{default:f((()=>[p(i,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:f((()=>[h("div",{class:"menu-total",onClick:me},[X.value?(c(),y("div",$)):(c(),y("div",q))])])),_:1}),p(i,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:f((()=>[p(o,{class:"breadcrumb"},{default:f((()=>[(c(!0),y(j,null,k(w(ne).slice(1,w(ne).length),(e=>(c(),v(n,{key:e.path},{default:f((()=>[L(_(w(J).params.title||e.meta.title),1)])),_:2},1024)))),128))])),_:1})])),_:1}),p(i,{xs:12,lg:9,md:9,sm:14,xl:9},{default:f((()=>[h("div",E,[p(P),p(T,null,{dropdown:f((()=>[p(A,{class:"dropdown-group"},{default:f((()=>[p(d,null,{default:f((()=>[h("span",S," 当前角色："+_(w(le).userInfo.authority.authorityName),1)])),_:1}),w(le).userInfo.authorities?(c(!0),y(j,{key:0},k(w(le).userInfo.authorities.filter((e=>e.authorityId!==w(le).userInfo.authorityId)),(e=>(c(),v(d,{key:e.authorityId,onClick:a=>oe(e.authorityId)},{default:f((()=>[h("span",null," 切换为："+_(e.authorityName),1)])),_:2},1032,["onClick"])))),128)):I("",!0),p(d,{icon:"avatar",onClick:ce},{default:f((()=>[U])),_:1}),p(d,{icon:"reading-lamp",onClick:w(le).LoginOut},{default:f((()=>[V])),_:1},8,["onClick"])])),_:1})])),default:f((()=>[h("div",F,[h("span",G,[p(D),h("span",K,_(w(le).userInfo.nickName),1),p(u,null,{default:f((()=>[p(s)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),p(O,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),se.value?C((c(),v(ee,{key:0,"element-loading-text":"正在加载中",class:"admin-box"},{default:f((({Component:e})=>[h("div",null,[p(b,{mode:"out-in",name:"el-fade-in-linear"},{default:f((()=>[(c(),v(M,{include:w(Q).keepAliveRouters},[(c(),v(N(e)))],1032,["include"]))])),_:2},1024)])])),_:1})),[[ve,ae.value]]):I("",!0),p(B),p(H)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{J as default};