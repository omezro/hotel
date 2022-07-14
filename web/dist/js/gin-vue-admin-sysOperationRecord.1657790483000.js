/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,o=(e,l,a)=>new Promise(((t,i)=>{var o=e=>{try{s(a.next(e))}catch(l){i(l)}},r=e=>{try{s(a.throw(e))}catch(l){i(l)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,r);s((a=a.apply(e,l)).next())}));import{s as r,r as s,b as n,o as u,c as d,d as p,e as c,w as v,t as f,h as m,y as g,q as y,i as h}from"../gva/gin-vue-admin-index.1657790483000.js";import{f as b}from"./gin-vue-admin-format.1657790483000.js";import"./gin-vue-admin-date.1657790483000.js";import"./gin-vue-admin-dictionary.1657790483000.js";import"./gin-vue-admin-sysDictionary.1657790483000.js";const w={class:"gva-search-box"},_=m("查询"),k=m("重置"),x={class:"gva-table-box"},C={class:"gva-btn-list"},z=p("p",null,"确定要删除吗？",-1),O={style:{"text-align":"right","margin-top":"8px"}},j=m("取消"),S=m("确定"),V=m("删除"),I={class:"popover-box"},R={key:1},P={class:"popover-box"},U={key:1},D=p("p",null,"确定要删除吗？",-1),N={style:{"text-align":"right","margin-top":"8px"}},E=m("取消"),q=m("确定"),A=m("删除"),B={class:"gva-pagination"},J={name:"SysOperationRecord"},L=Object.assign(J,{setup(e){const J=s(1),L=s(0),T=s(10),F=s([]),G=s({}),H=()=>{G.value={}},K=()=>{J.value=1,T.value=10,""===G.value.status&&(G.value.status=null),W()},M=e=>{T.value=e,W()},Q=e=>{J.value=e,W()},W=()=>o(this,null,(function*(){const e=yield(o=((e,o)=>{for(var r in o||(o={}))a.call(o,r)&&i(e,r,o[r]);if(l)for(var r of l(o))t.call(o,r)&&i(e,r,o[r]);return e})({page:J.value,pageSize:T.value},G.value),r({url:"/sysOperationRecord/getSysOperationRecordList",method:"get",params:o}));var o;0===e.code&&(F.value=e.data.list,L.value=e.data.total,J.value=e.data.page,T.value=e.data.pageSize)}));W();const X=s(!1),Y=s([]),Z=e=>{Y.value=e},$=()=>o(this,null,(function*(){const e=[];Y.value&&Y.value.forEach((l=>{e.push(l.ID)}));var l;0===(yield(l={ids:e},r({url:"/sysOperationRecord/deleteSysOperationRecordByIds",method:"delete",data:l}))).code&&(h({type:"success",message:"删除成功"}),F.value.length===e.length&&J.value>1&&J.value--,X.value=!1,W())})),ee=e=>o(this,null,(function*(){e.visible=!1;var l;0===(yield(l={ID:e.ID},r({url:"/sysOperationRecord/deleteSysOperationRecord",method:"delete",data:l}))).code&&(h({type:"success",message:"删除成功"}),1===F.value.length&&J.value>1&&J.value--,W())})),le=e=>{try{return JSON.parse(e)}catch(l){return e}};return(e,l)=>{const a=n("el-input"),t=n("el-form-item"),i=n("el-button"),o=n("el-form"),r=n("el-popover"),s=n("el-table-column"),h=n("el-tag"),W=n("warning"),ae=n("el-icon"),te=n("el-table"),ie=n("el-pagination");return u(),d("div",null,[p("div",w,[c(o,{inline:!0,model:G.value},{default:v((()=>[c(t,{label:"请求方法"},{default:v((()=>[c(a,{modelValue:G.value.method,"onUpdate:modelValue":l[0]||(l[0]=e=>G.value.method=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),c(t,{label:"请求路径"},{default:v((()=>[c(a,{modelValue:G.value.path,"onUpdate:modelValue":l[1]||(l[1]=e=>G.value.path=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),c(t,{label:"结果状态码"},{default:v((()=>[c(a,{modelValue:G.value.status,"onUpdate:modelValue":l[2]||(l[2]=e=>G.value.status=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),c(t,null,{default:v((()=>[c(i,{size:"small",type:"primary",icon:"search",onClick:K},{default:v((()=>[_])),_:1}),c(i,{size:"small",icon:"refresh",onClick:H},{default:v((()=>[k])),_:1})])),_:1})])),_:1},8,["model"])]),p("div",x,[p("div",C,[c(r,{visible:X.value,"onUpdate:visible":l[5]||(l[5]=e=>X.value=e),placement:"top",width:"160"},{reference:v((()=>[c(i,{icon:"delete",size:"small",style:{"margin-left":"10px"},disabled:!Y.value.length,onClick:l[4]||(l[4]=e=>X.value=!0)},{default:v((()=>[V])),_:1},8,["disabled"])])),default:v((()=>[z,p("div",O,[c(i,{size:"small",type:"text",onClick:l[3]||(l[3]=e=>X.value=!1)},{default:v((()=>[j])),_:1}),c(i,{size:"small",type:"primary",onClick:$},{default:v((()=>[S])),_:1})])])),_:1},8,["visible"])]),c(te,{ref:"multipleTable",data:F.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSelectionChange:Z},{default:v((()=>[c(s,{align:"left",type:"selection",width:"55"}),c(s,{align:"left",label:"操作人",width:"140"},{default:v((e=>[p("div",null,f(e.row.user.userName)+"("+f(e.row.user.nickName)+")",1)])),_:1}),c(s,{align:"left",label:"日期",width:"180"},{default:v((e=>[m(f(g(b)(e.row.CreatedAt)),1)])),_:1}),c(s,{align:"left",label:"状态码",prop:"status",width:"120"},{default:v((e=>[p("div",null,[c(h,{type:"success"},{default:v((()=>[m(f(e.row.status),1)])),_:2},1024)])])),_:1}),c(s,{align:"left",label:"请求IP",prop:"ip",width:"120"}),c(s,{align:"left",label:"请求方法",prop:"method",width:"120"}),c(s,{align:"left",label:"请求路径",prop:"path",width:"240"}),c(s,{align:"left",label:"请求",prop:"path",width:"80"},{default:v((e=>[p("div",null,[e.row.body?(u(),y(r,{key:0,placement:"left-start",trigger:"click"},{reference:v((()=>[c(ae,{style:{cursor:"pointer"}},{default:v((()=>[c(W)])),_:1})])),default:v((()=>[p("div",I,[p("pre",null,f(le(e.row.body)),1)])])),_:2},1024)):(u(),d("span",R,"无"))])])),_:1}),c(s,{align:"left",label:"响应",prop:"path",width:"80"},{default:v((e=>[p("div",null,[e.row.resp?(u(),y(r,{key:0,placement:"left-start",trigger:"click"},{reference:v((()=>[c(ae,{style:{cursor:"pointer"}},{default:v((()=>[c(W)])),_:1})])),default:v((()=>[p("div",P,[p("pre",null,f(le(e.row.resp)),1)])])),_:2},1024)):(u(),d("span",U,"无"))])])),_:1}),c(s,{align:"left",label:"按钮组"},{default:v((e=>[c(r,{visible:e.row.visible,"onUpdate:visible":l=>e.row.visible=l,placement:"top",width:"160"},{reference:v((()=>[c(i,{icon:"delete",size:"small",type:"text",onClick:l=>e.row.visible=!0},{default:v((()=>[A])),_:2},1032,["onClick"])])),default:v((()=>[D,p("div",N,[c(i,{size:"small",type:"text",onClick:l=>e.row.visible=!1},{default:v((()=>[E])),_:2},1032,["onClick"]),c(i,{size:"small",type:"primary",onClick:l=>ee(e.row)},{default:v((()=>[q])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"])])),_:1})])),_:1},8,["data"]),p("div",B,[c(ie,{"current-page":J.value,"page-size":T.value,"page-sizes":[10,30,50,100],total:L.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:Q,onSizeChange:M},null,8,["current-page","page-size","total"])])])])}}});export{L as default};
