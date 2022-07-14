/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=document.createElement("style");n.innerHTML=".image-uploader[data-v-15c9badb]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.image-uploader[data-v-15c9badb]{border-color:#409eff}.image-uploader-icon[data-v-15c9badb]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-15c9badb]{width:178px;height:178px;display:block}\n",document.head.appendChild(n),System.register(["../gva/gin-vue-admin-index-legacy.1657790483000.js"],(function(n){"use strict";var a,i,r,o,l,u,d,s,c,f,p,h;return{setters:[function(e){a=e.s,i=e._,r=e.r,o=e.j,l=e.b,u=e.o,d=e.c,s=e.e,c=e.w,f=e.y,p=e.h,h=e.i}],execute:function(){n("g",(function(e){return a({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),n("d",(function(e){return a({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),n("e",(function(e){return a({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})}));var m=function(){function n(t,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1920;e(this,n),this.file=t,this.fileSize=a,this.maxWH=i}var a,i,r;return a=n,(i=[{key:"compress",value:function(){var e=this,t=this.file.type,n=this.file.size/1024;return new Promise((function(a){var i=new FileReader;i.readAsDataURL(e.file),i.onload=function(){var r=document.createElement("canvas"),o=document.createElement("img");o.src=i.result,o.onload=function(){var i=r.getContext("2d"),l=e.dWH(o.width,o.height,e.maxWH);r.width=l.width,r.height=l.height,i.clearRect(0,0,r.width,r.height),i.drawImage(o,0,0,r.width,r.height);var u=r.toDataURL(t,.9),d=e.fileSizeKB(u);d>e.fileSize&&console.log("图片尺寸太大!"+n+" >> "+d);var s=e.dataURLtoBlob(u,t),c=new File([s],e.file.name);a(c)}}}))}},{key:"dWH",value:function(e,t,n){var a={width:e,height:t};return Math.max(e,t)>n?e>t?(a.width=n,a.height=Math.round(t*(n/e)),a):(a.height=n,a.width=Math.round(e*(n/t)),a):a}},{key:"fileSizeKB",value:function(e){return Math.round(3*e.split(",")[1].length/4/1024)}},{key:"dataURLtoBlob",value:function(e,t){for(var n=atob(e.split(",")[1]),a=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(n.length),r=new Uint8Array(i),o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return t&&(a=t),new Blob([i],{type:a,lastModifiedDate:new Date})}}])&&t(a.prototype,i),r&&t(a,r),Object.defineProperty(a,"prototype",{writable:!1}),n}(),g=p("压缩上传"),v={name:"UploadImage",methods:{}},b=(n("U",i(Object.assign(v,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var n=t.emit,a=e,i=r("/api"),p=o(),v=function(e){var t="image/jpeg"===e.type,n="image/png"===e.type;if(!t&&!n)return h.error("上传头像图片只能是 jpg或png 格式!"),!1;var i=e.size/1024<a.fileSize;return i||new m(e,a.fileSize,a.maxWH).compress()},b=function(e){var t=e.data;t.file&&n("on-success",t.file.url)};return function(e,t){var n=l("el-button"),a=l("el-upload");return u(),d("div",null,[s(a,{action:"".concat(i.value,"/fileUploadAndDownload/upload"),headers:{"x-token":f(p).token},"show-file-list":!1,"on-success":b,"before-upload":v,multiple:!1},{default:c((function(){return[s(n,{size:"small",type:"primary"},{default:c((function(){return[g]})),_:1})]})),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-15c9badb"]])),p("普通上传")),w={name:"UploadCommon",methods:{}};n("_",Object.assign(w,{emits:["on-success"],setup:function(e,t){var n=t.emit,a=r("/api"),i=o(),p=r(!1),m=function(e){p.value=!0;var t="image/jpeg"===e.type,n="image/png"===e.type,a=e.size/1024/1024<.5;return t||n||(h.error("上传图片只能是 jpg或png 格式!"),p.value=!1),a||(h.error("未压缩未见上传图片大小不能超过 500KB，请使用压缩上传"),p.value=!1),(n||t)&&a},g=function(e){var t=e.data;t.file&&n("on-success",t.file.url)},v=function(){h({type:"error",message:"上传失败"}),p.value=!1};return function(e,t){var n=l("el-button"),r=l("el-upload");return u(),d("div",null,[s(r,{action:"".concat(a.value,"/fileUploadAndDownload/upload"),"before-upload":m,headers:{"x-token":f(i).token},"on-error":v,"on-success":g,"show-file-list":!1,class:"upload-btn"},{default:c((function(){return[s(n,{size:"small",type:"primary"},{default:c((function(){return[b]})),_:1})]})),_:1},8,["action","headers"])])}}}))}}}))}();
