/*! 
 Build based on gin-vue-admin 
 Time : 1658050815000 */
!function(){var e=document.createElement("style");e.innerHTML=".headerAvatar[data-v-47cae38c]{display:flex;justify-content:center;align-items:center;margin-right:8px}.file[data-v-47cae38c]{width:80px;height:80px;position:relative}\n",document.head.appendChild(e),System.register(["../gva/gin-vue-admin-index-legacy.1658050815000.js"],(function(e){"use strict";var r,c,a,t,i,n,s,u,p,l,d;return{setters:[function(e){r=e._,c=e.r,a=e.j,t=e.N,i=e.b,n=e.o,s=e.c,u=e.F,p=e.y,l=e.q,d=e.f}],execute:function(){var o={class:"headerAvatar"},v=["src"],f=["src"],g=["src"],y={name:"CustomPic"};e("C",r(Object.assign(y,{props:{picType:{type:String,required:!1,default:"avatar"},picSrc:{type:String,required:!1,default:""}},setup:function(e){var r=e,y=c("/api/"),m=c("./assets/noBody.745c3d16.png"),h=a(),I=t((function(){return""===r.picSrc?""!==h.userInfo.headerImg&&"http"===h.userInfo.headerImg.slice(0,4)?h.userInfo.headerImg:y.value+h.userInfo.headerImg:""!==r.picSrc&&"http"===r.picSrc.slice(0,4)?r.picSrc:y.value+r.picSrc})),S=t((function(){return r.picSrc&&"http"!==r.picSrc.slice(0,4)?y.value+r.picSrc:r.picSrc}));return function(r,c){var a=i("el-avatar");return n(),s("span",o,["avatar"===e.picType?(n(),s(u,{key:0},[p(h).userInfo.headerImg?(n(),l(a,{key:0,size:30,src:p(I)},null,8,["src"])):(n(),l(a,{key:1,size:30,src:m.value},null,8,["src"]))],64)):d("",!0),"img"===e.picType?(n(),s(u,{key:1},[p(h).userInfo.headerImg?(n(),s("img",{key:0,src:p(I),class:"avatar"},null,8,v)):(n(),s("img",{key:1,src:m.value,class:"avatar"},null,8,f))],64)):d("",!0),"file"===e.picType?(n(),s("img",{key:2,src:p(S),class:"file"},null,8,g)):d("",!0)])}}}),[["__scopeId","data-v-47cae38c"]]))}}}))}();