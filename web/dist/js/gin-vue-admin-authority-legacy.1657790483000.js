/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var u=x(i,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var d={};function f(){}function h(){}function v(){}var y={};l(y,o,(function(){return this}));var p=Object.getPrototypeOf,m=p&&p(p(j([])));m&&m!==r&&n.call(m,o)&&(y=m);var g=v.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(a,o,i,u){var l=s(t[a],t,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(d).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,u)}))}u(l.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=v,l(g,"constructor",v),l(v,"constructor",h),h.displayName=l(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),l(g,u,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?e(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e,r,n,a,o,i){try{var u=t[o](i),l=u.value}catch(c){return void r(c)}u.done?e(l):Promise.resolve(l).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,l,"next",t)}function l(t){a(i,n,o,u,l,"throw",t)}u(void 0)}))}}var i=document.createElement("style");i.innerHTML=".authority .el-input-number{margin-left:15px}.authority .el-input-number span{display:none}.role-box .el-tabs__content{height:calc(100vh - 72px);overflow:auto}\n",document.head.appendChild(i),System.register(["./gin-vue-admin-authority-legacy.16577904830002.js","./gin-vue-admin-menus-legacy.1657790483000.js","./gin-vue-admin-apis-legacy.1657790483000.js","./gin-vue-admin-datas-legacy.1657790483000.js","./gin-vue-admin-warningBar-legacy.1657790483000.js","../gva/gin-vue-admin-index-legacy.1657790483000.js","./gin-vue-admin-authorityBtn-legacy.1657790483000.js","./gin-vue-admin-api-legacy.16577904830002.js"],(function(e){"use strict";var n,a,i,u,l,c,s,d,f,h,v,y,p,m,g,w,b,x,I,_,k;return{setters:[function(t){n=t.g,a=t.d,i=t.c,u=t.u,l=t.a},function(t){c=t.default},function(t){s=t.default},function(t){d=t.default},function(t){f=t.W},function(t){h=t.r,v=t.b,y=t.o,p=t.c,m=t.e,g=t.d,w=t.w,b=t.q,x=t.f,I=t.h,_=t.X,k=t.i},function(){},function(){}],execute:function(){var j={class:"authority"},O={class:"gva-table-box"},L={class:"gva-btn-list"},E=I("新增角色"),N=I("设置权限"),C=I("新增子角色"),P=I("拷贝"),V=I("编辑"),S=I("删除"),z={class:"dialog-footer"},A=I("取 消"),G=I("确 定"),T={name:"Authority"};e("default",Object.assign(T,{setup:function(e){var I=h([{authorityId:"0",authorityName:"根角色"}]),T=h(!1),D=h("add"),F=h({}),U=h("新增角色"),q=h(!1),B=h(!1),R=h({}),Y=h({authorityId:"",authorityName:"",parentId:"0"}),H=h({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:function(t,e,r){return/^[0-9]*[1-9][0-9]*$/.test(e)?r():r(new Error("请输入正整数"))},trigger:"blur"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择请求方式",trigger:"blur"}]}),M=h(1),W=h(0),X=h(999),$=h([]),J=h({}),K=function(){var e=o(t().mark((function e(){var a;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(r({page:M.value,pageSize:X.value},J.value));case 2:0===(a=t.sent).code&&($.value=a.data.list,W.value=a.data.total,M.value=a.data.page,X.value=a.data.pageSize);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();K();var Q=function(t,e){F.value[t]=e},Z=h(null),tt=h(null),et=h(null),rt=function(t,e){var r=[Z,tt,et];e&&r[e].value.needConfirm&&(r[e].value.enterAndNext(),r[e].value.needConfirm=!1)},nt=h(null),at=function(){nt.value&&nt.value.resetFields(),Y.value={authorityId:"",authorityName:"",parentId:"0"}},ot=function(){at(),q.value=!1,B.value=!1},it=function(){if("0"===Y.value.authorityId)return k({type:"error",message:"角色id不能为0"}),!1;nt.value.validate(function(){var e=o(t().mark((function e(r){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=26;break}t.t0=D.value,t.next="add"===t.t0?4:"edit"===t.t0?9:"copy"===t.t0?14:24;break;case 4:return t.next=6,l(Y.value);case 6:return 0===t.sent.code&&(k({type:"success",message:"添加成功!"}),K(),ot()),t.abrupt("break",24);case 9:return t.next=11,u(Y.value);case 11:return 0===t.sent.code&&(k({type:"success",message:"添加成功!"}),K(),ot()),t.abrupt("break",24);case 14:return(n={authority:{authorityId:"string",authorityName:"string",datauthorityId:[],parentId:"string"},oldAuthorityId:0}).authority.authorityId=Y.value.authorityId,n.authority.authorityName=Y.value.authorityName,n.authority.parentId=Y.value.parentId,n.authority.dataAuthorityId=R.value.dataAuthorityId,n.oldAuthorityId=R.value.authorityId,t.next=22,i(n);case 22:0===t.sent.code&&(k({type:"success",message:"复制成功！"}),K());case 24:at(),q.value=!1;case 26:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ut=function(){I.value=[{authorityId:"0",authorityName:"根角色"}],lt($.value,I.value,!1)},lt=function t(e,r,n){Y.value.authorityId=String(Y.value.authorityId),e&&e.forEach((function(e){if(e.children&&e.children.length){var a={authorityId:e.authorityId,authorityName:e.authorityName,disabled:n||e.authorityId===Y.value.authorityId,children:[]};t(e.children,a.children,n||e.authorityId===Y.value.authorityId),r.push(a)}else{var o={authorityId:e.authorityId,authorityName:e.authorityName,disabled:n||e.authorityId===Y.value.authorityId};r.push(o)}}))},ct=function(t){at(),U.value="新增角色",D.value="add",Y.value.parentId=t,ut(),q.value=!0};return function(e,r){var n=v("el-button"),i=v("el-table-column"),u=v("el-table"),l=v("el-cascader"),h=v("el-form-item"),B=v("el-input"),W=v("el-form"),X=v("el-dialog"),J=v("el-tab-pane"),at=v("el-tabs"),lt=v("el-drawer");return y(),p("div",j,[m(f,{title:"注：右上角头像下拉可切换角色"}),g("div",O,[g("div",L,[m(n,{size:"small",type:"primary",icon:"plus",onClick:r[0]||(r[0]=function(t){return ct("0")})},{default:w((function(){return[E]})),_:1})]),m(u,{data:$.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:w((function(){return[m(i,{label:"角色ID","min-width":"180",prop:"authorityId"}),m(i,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),m(i,{align:"left",label:"操作",width:"460"},{default:w((function(e){return[m(n,{icon:"setting",size:"small",type:"text",onClick:function(t){return r=e.row,T.value=!0,void(F.value=r);var r}},{default:w((function(){return[N]})),_:2},1032,["onClick"]),m(n,{icon:"plus",size:"small",type:"text",onClick:function(t){return ct(e.row.authorityId)}},{default:w((function(){return[C]})),_:2},1032,["onClick"]),m(n,{icon:"copy-document",size:"small",type:"text",onClick:function(t){return function(t){for(var e in ut(),U.value="拷贝角色",D.value="copy",Y.value)Y.value[e]=t[e];R.value=t,q.value=!0}(e.row)}},{default:w((function(){return[P]})),_:2},1032,["onClick"]),m(n,{icon:"edit",size:"small",type:"text",onClick:function(t){return function(t){for(var e in ut(),U.value="编辑角色",D.value="edit",Y.value)Y.value[e]=t[e];ut(),q.value=!0}(e.row)}},{default:w((function(){return[V]})),_:2},1032,["onClick"]),m(n,{icon:"delete",size:"small",type:"text",onClick:function(r){return n=e.row,void _.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({authorityId:n.authorityId});case 2:0===t.sent.code&&(k({type:"success",message:"删除成功!"}),1===$.value.length&&M.value>1&&M.value--,K());case 4:case"end":return t.stop()}}),e)})))).catch((function(){k({type:"info",message:"已取消删除"})}));var n}},{default:w((function(){return[S]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),m(X,{modelValue:q.value,"onUpdate:modelValue":r[4]||(r[4]=function(t){return q.value=t}),title:U.value},{footer:w((function(){return[g("div",z,[m(n,{size:"small",onClick:ot},{default:w((function(){return[A]})),_:1}),m(n,{size:"small",type:"primary",onClick:it},{default:w((function(){return[G]})),_:1})])]})),default:w((function(){return[m(W,{ref_key:"authorityForm",ref:nt,model:Y.value,rules:H.value,"label-width":"80px"},{default:w((function(){return[m(h,{label:"父级角色",prop:"parentId"},{default:w((function(){return[m(l,{modelValue:Y.value.parentId,"onUpdate:modelValue":r[1]||(r[1]=function(t){return Y.value.parentId=t}),style:{width:"100%"},disabled:"add"==D.value,options:I.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1}),m(h,{label:"角色ID",prop:"authorityId"},{default:w((function(){return[m(B,{modelValue:Y.value.authorityId,"onUpdate:modelValue":r[2]||(r[2]=function(t){return Y.value.authorityId=t}),disabled:"edit"==D.value,autocomplete:"off"},null,8,["modelValue","disabled"])]})),_:1}),m(h,{label:"角色姓名",prop:"authorityName"},{default:w((function(){return[m(B,{modelValue:Y.value.authorityName,"onUpdate:modelValue":r[3]||(r[3]=function(t){return Y.value.authorityName=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue","title"]),T.value?(y(),b(lt,{key:0,modelValue:T.value,"onUpdate:modelValue":r[5]||(r[5]=function(t){return T.value=t}),"with-header":!1,size:"40%",title:"角色配置"},{default:w((function(){return[m(at,{"before-leave":rt,class:"role-box",type:"border-card"},{default:w((function(){return[m(J,{label:"角色菜单"},{default:w((function(){return[m(c,{ref_key:"menus",ref:Z,row:F.value,onChangeRow:Q},null,8,["row"])]})),_:1}),m(J,{label:"角色api"},{default:w((function(){return[m(s,{ref_key:"apis",ref:tt,row:F.value,onChangeRow:Q},null,8,["row"])]})),_:1}),m(J,{label:"资源权限"},{default:w((function(){return[m(d,{ref_key:"datas",ref:et,authority:$.value,row:F.value,onChangeRow:Q},null,8,["authority","row"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])):x("",!0)])}}}))}}}))}();
