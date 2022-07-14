/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,o=(e,a,l)=>new Promise(((t,i)=>{var o=e=>{try{s(l.next(e))}catch(a){i(a)}},u=e=>{try{s(l.throw(e))}catch(a){i(a)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,u);s((l=l.apply(e,a)).next())}));import{r as u,P as s,b as r,o as d,c as n,e as m,d as p,w as c,q as v,f as h,h as g,a7 as y,X as f,a8 as b,i as w,a9 as I,aa as k,ab as V,I as _,ac as x}from"../gva/gin-vue-admin-index.1657790483000.js";import{g as N}from"./gin-vue-admin-authority.16577904830002.js";import{C}from"./gin-vue-admin-index.165779048300010.js";import{_ as z}from"./gin-vue-admin-index.165779048300014.js";import{W as j}from"./gin-vue-admin-warningBar.1657790483000.js";import"./gin-vue-admin-common.1657790483000.js";const U={class:"gva-table-box"},O={class:"gva-btn-list"},S=g("新增用户"),D=p("p",null,"确定要删除此用户吗",-1),P={style:{"text-align":"right","margin-top":"8px"}},q=g("取消"),T=g("确定"),B=g("删除"),E=g("编辑"),F=g("重置密码"),J={class:"gva-pagination"},R={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},W=["src"],X={key:1,class:"header-img-box"},A={class:"dialog-footer"},G=g("取 消"),H=g("确 定"),K={name:"User"},L=Object.assign(K,{setup(e){const g=u("/api/"),K=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};K(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},L=u(1),M=u(0),Q=u(10),Y=u([]),Z=e=>{Q.value=e,ee()},$=e=>{L.value=e,ee()},ee=()=>o(this,null,(function*(){const e=yield y({page:L.value,pageSize:Q.value});0===e.code&&(Y.value=e.data.list,M.value=e.data.total,L.value=e.data.page,Q.value=e.data.pageSize)}));s((()=>Y.value),(()=>{le()}));(()=>{o(this,null,(function*(){ee();const e=yield N({page:1,pageSize:999});ue(e.data.list)}))})();const ae=e=>{f.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>o(this,null,(function*(){const a=yield b({ID:e.ID});0===a.code?w({type:"success",message:a.msg}):w({type:"error",message:a.msg})}))))},le=()=>{Y.value&&Y.value.forEach((e=>{const a=e.authorities&&e.authorities.map((e=>e.authorityId));e.authorityIds=a}))},te=u(null),ie=()=>{te.value.open()},oe=u([]),ue=e=>{oe.value=[],K(e,oe.value)},se=e=>o(this,null,(function*(){0===(yield I({id:e.ID})).code&&(w.success("删除成功"),e.visible=!1,yield ee())})),re=u({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[]}),de=u({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),ne=u(null),me=()=>o(this,null,(function*(){re.value.authorityId=re.value.authorityIds[0],ne.value.validate((e=>o(this,null,(function*(){if(e){const e=((e,o)=>{for(var u in o||(o={}))l.call(o,u)&&i(e,u,o[u]);if(a)for(var u of a(o))t.call(o,u)&&i(e,u,o[u]);return e})({},re.value);if("add"===ve.value){0===(yield k(e)).code&&(w({type:"success",message:"创建成功"}),yield ee(),ce())}if("edit"===ve.value){0===(yield V(e)).code&&(w({type:"success",message:"编辑成功"}),yield ee(),ce())}}}))))})),pe=u(!1),ce=()=>{ne.value.resetFields(),re.value.headerImg="",re.value.authorityIds=[],pe.value=!1},ve=u("add"),he=()=>{ve.value="add",pe.value=!0},ge=(e,a)=>o(this,null,(function*(){if(a)return;yield _();0===(yield x({ID:e.ID,authorityIds:e.authorityIds})).code&&w({type:"success",message:"角色设置成功"})}));return(e,a)=>{const l=r("el-button"),t=r("el-table-column"),i=r("el-cascader"),o=r("el-popover"),u=r("el-table"),s=r("el-pagination"),y=r("el-input"),f=r("el-form-item"),b=r("el-form"),w=r("el-dialog");return d(),n("div",null,[m(j,{title:"注：右上角头像下拉可切换角色"}),p("div",U,[p("div",O,[m(l,{size:"small",type:"primary",icon:"plus",onClick:he},{default:c((()=>[S])),_:1})]),m(u,{data:Y.value,"row-key":"ID"},{default:c((()=>[m(t,{align:"left",label:"头像","min-width":"75"},{default:c((e=>[m(C,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),m(t,{align:"left",label:"ID","min-width":"50",prop:"ID"}),m(t,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),m(t,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),m(t,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),m(t,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),m(t,{align:"left",label:"用户角色","min-width":"200"},{default:c((e=>[m(i,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:oe.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ge(e.row,a)},onRemoveTag:()=>{ge(e.row,!1)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),m(t,{label:"操作","min-width":"250",fixed:"right"},{default:c((e=>[m(o,{visible:e.row.visible,"onUpdate:visible":a=>e.row.visible=a,placement:"top",width:"160"},{reference:c((()=>[m(l,{type:"text",icon:"delete",size:"small"},{default:c((()=>[B])),_:1})])),default:c((()=>[D,p("div",P,[m(l,{size:"small",type:"text",onClick:a=>e.row.visible=!1},{default:c((()=>[q])),_:2},1032,["onClick"]),m(l,{type:"primary",size:"small",onClick:a=>se(e.row)},{default:c((()=>[T])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"]),m(l,{type:"text",icon:"edit",size:"small",onClick:a=>{return l=e.row,ve.value="edit",re.value=JSON.parse(JSON.stringify(l)),void(pe.value=!0);var l}},{default:c((()=>[E])),_:2},1032,["onClick"]),m(l,{type:"text",icon:"magic-stick",size:"small",onClick:a=>ae(e.row)},{default:c((()=>[F])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),p("div",J,[m(s,{"current-page":L.value,"page-size":Q.value,"page-sizes":[10,30,50,100],total:M.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:$,onSizeChange:Z},null,8,["current-page","page-size","total"])])]),m(w,{modelValue:pe.value,"onUpdate:modelValue":a[6]||(a[6]=e=>pe.value=e),"custom-class":"user-dialog",title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:c((()=>[p("div",A,[m(l,{size:"small",onClick:ce},{default:c((()=>[G])),_:1}),m(l,{size:"small",type:"primary",onClick:me},{default:c((()=>[H])),_:1})])])),default:c((()=>[p("div",R,[m(b,{ref_key:"userForm",ref:ne,rules:de.value,model:re.value,"label-width":"80px"},{default:c((()=>["add"===ve.value?(d(),v(f,{key:0,label:"用户名",prop:"userName"},{default:c((()=>[m(y,{modelValue:re.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>re.value.userName=e)},null,8,["modelValue"])])),_:1})):h("",!0),"add"===ve.value?(d(),v(f,{key:1,label:"密码",prop:"password"},{default:c((()=>[m(y,{modelValue:re.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>re.value.password=e)},null,8,["modelValue"])])),_:1})):h("",!0),m(f,{label:"昵称",prop:"nickName"},{default:c((()=>[m(y,{modelValue:re.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>re.value.nickName=e)},null,8,["modelValue"])])),_:1}),m(f,{label:"手机号",prop:"phone"},{default:c((()=>[m(y,{modelValue:re.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>re.value.phone=e)},null,8,["modelValue"])])),_:1}),m(f,{label:"邮箱",prop:"email"},{default:c((()=>[m(y,{modelValue:re.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>re.value.email=e)},null,8,["modelValue"])])),_:1}),m(f,{label:"用户角色",prop:"authorityId"},{default:c((()=>[m(i,{modelValue:re.value.authorityIds,"onUpdate:modelValue":a[5]||(a[5]=e=>re.value.authorityIds=e),style:{width:"100%"},options:oe.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),m(f,{label:"头像","label-width":"80px"},{default:c((()=>[p("div",{style:{display:"inline-block"},onClick:ie},[re.value.headerImg?(d(),n("img",{key:0,class:"header-img-box",src:re.value.headerImg&&"http"!==re.value.headerImg.slice(0,4)?g.value+re.value.headerImg:re.value.headerImg},null,8,W)):(d(),n("div",X,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),m(z,{ref_key:"chooseImg",ref:te,target:re.value,"target-key":"headerImg"},null,8,["target"])])}}});export{L as default};
