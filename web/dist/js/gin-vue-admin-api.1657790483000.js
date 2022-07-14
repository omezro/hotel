/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,u=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,o=(e,l,a)=>new Promise(((t,u)=>{var o=e=>{try{s(a.next(e))}catch(l){u(l)}},i=e=>{try{s(a.throw(e))}catch(l){u(l)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,l)).next())}));import{g as i,d as s,a as d,u as n,c as r,b as p}from"./gin-vue-admin-api.16577904830002.js";import{t as v}from"./gin-vue-admin-stringFun.1657790483000.js";import{W as c}from"./gin-vue-admin-warningBar.1657790483000.js";import{_ as m,r as f,b as g,o as h,c as b,d as y,e as _,w,F as V,z as C,t as k,h as z,p as x,l as A,i as P,X as I,q as U}from"../gva/gin-vue-admin-index.1657790483000.js";const j=e=>(x("data-v-1779c371"),e=e(),A(),e),G={class:"gva-search-box"},O=z("查询"),S=z("重置"),T={class:"gva-table-box"},q={class:"gva-btn-list"},D=z("新增"),E=j((()=>y("p",null,"确定要删除吗？",-1))),F={style:{"text-align":"right","margin-top":"8px"}},$=z("取消"),B=z("确定"),K=z("删除"),L=z("编辑"),W=z("删除"),X={class:"gva-pagination"},H={class:"dialog-footer"},J=z("取 消"),M=z("确 定"),N={name:"Api"};var Q=m(Object.assign(N,{setup(e){const m=e=>{const l=A.value.filter((l=>l.value===e))[0];return l&&`${l.label}`},z=f([]),x=f({path:"",apiGroup:"",method:"",description:""}),A=f([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]),j=f(""),N=f({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),Q=f(1),R=f(0),Y=f(10),Z=f([]),ee=f({}),le=()=>{ee.value={}},ae=()=>{Q.value=1,Y.value=10,ie()},te=e=>{Y.value=e,ie()},ue=e=>{Q.value=e,ie()},oe=({prop:e,order:l})=>{e&&("ID"===e&&(e="id"),ee.value.orderKey=v(e),ee.value.desc="descending"===l),ie()},ie=()=>o(this,null,(function*(){const e=yield i(((e,o)=>{for(var i in o||(o={}))a.call(o,i)&&u(e,i,o[i]);if(l)for(var i of l(o))t.call(o,i)&&u(e,i,o[i]);return e})({page:Q.value,pageSize:Y.value},ee.value));0===e.code&&(Z.value=e.data.list,R.value=e.data.total,Q.value=e.data.page,Y.value=e.data.pageSize)}));ie();const se=e=>{z.value=e},de=f(!1),ne=()=>o(this,null,(function*(){const e=z.value.map((e=>e.ID)),l=yield s({ids:e});0===l.code&&(P({type:"success",message:l.msg}),Z.value.length===e.length&&Q.value>1&&Q.value--,de.value=!1,ie())})),re=f(null),pe=f("新增Api"),ve=f(!1),ce=e=>{switch(e){case"addApi":pe.value="新增Api";break;case"edit":pe.value="编辑Api"}j.value=e,ve.value=!0},me=()=>{re.value.resetFields(),x.value={path:"",apiGroup:"",method:"",description:""},ve.value=!1},fe=e=>o(this,null,(function*(){const l=yield d({id:e.ID});x.value=l.data.api,ce("edit")})),ge=()=>o(this,null,(function*(){re.value.validate((e=>o(this,null,(function*(){if(e)switch(j.value){case"addApi":0===(yield r(x.value)).code&&P({type:"success",message:"添加成功",showClose:!0}),ie(),me();break;case"edit":0===(yield n(x.value)).code&&P({type:"success",message:"编辑成功",showClose:!0}),ie(),me();break;default:P({type:"error",message:"未知操作",showClose:!0})}}))))})),he=e=>o(this,null,(function*(){I.confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>o(this,null,(function*(){0===(yield p(e)).code&&(P({type:"success",message:"删除成功!"}),1===Z.value.length&&Q.value>1&&Q.value--,ie())}))))}));return(e,l)=>{const a=g("el-input"),t=g("el-form-item"),u=g("el-option"),o=g("el-select"),i=g("el-button"),s=g("el-form"),d=g("el-popover"),n=g("el-table-column"),r=g("el-table"),p=g("el-pagination"),v=g("el-dialog");return h(),b("div",null,[y("div",G,[_(s,{ref:"searchForm",inline:!0,model:ee.value},{default:w((()=>[_(t,{label:"路径"},{default:w((()=>[_(a,{modelValue:ee.value.path,"onUpdate:modelValue":l[0]||(l[0]=e=>ee.value.path=e),placeholder:"路径"},null,8,["modelValue"])])),_:1}),_(t,{label:"描述"},{default:w((()=>[_(a,{modelValue:ee.value.description,"onUpdate:modelValue":l[1]||(l[1]=e=>ee.value.description=e),placeholder:"描述"},null,8,["modelValue"])])),_:1}),_(t,{label:"API组"},{default:w((()=>[_(a,{modelValue:ee.value.apiGroup,"onUpdate:modelValue":l[2]||(l[2]=e=>ee.value.apiGroup=e),placeholder:"api组"},null,8,["modelValue"])])),_:1}),_(t,{label:"请求"},{default:w((()=>[_(o,{modelValue:ee.value.method,"onUpdate:modelValue":l[3]||(l[3]=e=>ee.value.method=e),clearable:"",placeholder:"请选择"},{default:w((()=>[(h(!0),b(V,null,C(A.value,(e=>(h(),U(u,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(t,null,{default:w((()=>[_(i,{size:"small",type:"primary",icon:"search",onClick:ae},{default:w((()=>[O])),_:1}),_(i,{size:"small",icon:"refresh",onClick:le},{default:w((()=>[S])),_:1})])),_:1})])),_:1},8,["model"])]),y("div",T,[y("div",q,[_(i,{size:"small",type:"primary",icon:"plus",onClick:l[4]||(l[4]=e=>ce("addApi"))},{default:w((()=>[D])),_:1}),_(d,{visible:de.value,"onUpdate:visible":l[7]||(l[7]=e=>de.value=e),placement:"top",width:"160"},{reference:w((()=>[_(i,{icon:"delete",size:"small",disabled:!z.value.length,style:{"margin-left":"10px"},onClick:l[6]||(l[6]=e=>de.value=!0)},{default:w((()=>[K])),_:1},8,["disabled"])])),default:w((()=>[E,y("div",F,[_(i,{size:"small",type:"text",onClick:l[5]||(l[5]=e=>de.value=!1)},{default:w((()=>[$])),_:1}),_(i,{size:"small",type:"primary",onClick:ne},{default:w((()=>[B])),_:1})])])),_:1},8,["visible"])]),_(r,{data:Z.value,onSortChange:oe,onSelectionChange:se},{default:w((()=>[_(n,{type:"selection",width:"55"}),_(n,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),_(n,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),_(n,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),_(n,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),_(n,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:w((e=>[y("div",null,k(e.row.method)+" / "+k(m(e.row.method)),1)])),_:1}),_(n,{align:"left",fixed:"right",label:"操作",width:"200"},{default:w((e=>[_(i,{icon:"edit",size:"small",type:"text",onClick:l=>fe(e.row)},{default:w((()=>[L])),_:2},1032,["onClick"]),_(i,{icon:"delete",size:"small",type:"text",onClick:l=>he(e.row)},{default:w((()=>[W])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),y("div",X,[_(p,{"current-page":Q.value,"page-size":Y.value,"page-sizes":[10,30,50,100],total:R.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:ue,onSizeChange:te},null,8,["current-page","page-size","total"])])]),_(v,{modelValue:ve.value,"onUpdate:modelValue":l[12]||(l[12]=e=>ve.value=e),"before-close":me,title:pe.value},{footer:w((()=>[y("div",H,[_(i,{size:"small",onClick:me},{default:w((()=>[J])),_:1}),_(i,{size:"small",type:"primary",onClick:ge},{default:w((()=>[M])),_:1})])])),default:w((()=>[_(c,{title:"新增API，需要在角色管理内配置权限才可使用"}),_(s,{ref_key:"apiForm",ref:re,model:x.value,rules:N.value,"label-width":"80px"},{default:w((()=>[_(t,{label:"路径",prop:"path"},{default:w((()=>[_(a,{modelValue:x.value.path,"onUpdate:modelValue":l[8]||(l[8]=e=>x.value.path=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),_(t,{label:"请求",prop:"method"},{default:w((()=>[_(o,{modelValue:x.value.method,"onUpdate:modelValue":l[9]||(l[9]=e=>x.value.method=e),placeholder:"请选择",style:{width:"100%"}},{default:w((()=>[(h(!0),b(V,null,C(A.value,(e=>(h(),U(u,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(t,{label:"api分组",prop:"apiGroup"},{default:w((()=>[_(a,{modelValue:x.value.apiGroup,"onUpdate:modelValue":l[10]||(l[10]=e=>x.value.apiGroup=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),_(t,{label:"api简介",prop:"description"},{default:w((()=>[_(a,{modelValue:x.value.description,"onUpdate:modelValue":l[11]||(l[11]=e=>x.value.description=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-1779c371"]]);export{Q as default};
