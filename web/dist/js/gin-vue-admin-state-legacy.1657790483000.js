/*! 
 Build based on gin-vue-admin 
 Time : 1657790483000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(G){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,u=Object.create(o.prototype),a=new L(r||[]);return u._invoke=function(t,e,n){var r="suspendedStart";return function(o,u){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw u;return k()}for(n.method=o,n.arg=u;;){var a=n.delegate;if(a){var i=w(a,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),u}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(G){return{type:"throw",arg:G}}}e.wrap=l;var s={};function d(){}function p(){}function h(){}var v={};c(v,u,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==n&&r.call(g,u)&&(v=g);var m=h.prototype=d.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,u,a,i){var c=f(t[o],t,u);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,i)}))}i(c.arg)}var o;this._invoke=function(t,r){function u(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(u,u):u()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=h,c(m,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},_(x.prototype),c(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,u){void 0===u&&(u=Promise);var a=new x(l(t,n,r,o),u);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(m),c(m,i,"Generator"),c(m,u,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),c=r.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var u=o;break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=e&&e<=u.finallyLoc&&(u=null);var a=u?u.completion:{};return a.type=t,a.arg=e,u?(this.method="next",this.next=u.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function e(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(l){return void n(l)}i.done?e(c):Promise.resolve(c).then(r,o)}var n=document.createElement("style");n.innerHTML=".system_state{padding:10px}.card_item{height:280px}\n",document.head.appendChild(n),System.register(["./gin-vue-admin-system-legacy.1657790483000.js","../gva/gin-vue-admin-index-legacy.1657790483000.js"],(function(n){"use strict";var r,o,u,a,i,c,l,f,s,d,p,h,v,y,g;return{setters:[function(t){r=t.g},function(t){o=t.r,u=t.J,a=t.b,i=t.o,c=t.c,l=t.e,f=t.w,s=t.q,d=t.d,p=t.t,h=t.f,v=t.F,y=t.z,g=t.h}],execute:function(){var m=d("div",null,"Runtime",-1),_=g("os:"),x=g("cpu nums:"),w=g("compiler:"),b=g("go version:"),C=g("goroutine nums:"),L=d("div",null,"Disk",-1),E=g("total (MB)"),k=g("used (MB)"),G=g("total (GB)"),j=g("used (GB)"),O=d("div",null,"CPU",-1),M=g("physical number of cores:"),P=d("div",null,"Ram",-1),S=g("total (MB)"),B=g("used (MB)"),F=g("total (GB)"),N=g("used (GB)"),T={name:"State"};n("default",Object.assign(T,{setup:function(n){var T=o(null),I=o({}),A=o([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),R=function(){var n,o=(n=t().mark((function e(){var n,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:n=t.sent,o=n.data,I.value=o.server;case 5:case"end":return t.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,u){var a=n.apply(t,r);function i(t){e(a,o,u,i,c,"next",t)}function c(t){e(a,o,u,i,c,"throw",t)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();return R(),T.value=setInterval((function(){R()}),1e4),u((function(){clearInterval(T.value),T.value=null})),function(t,e){var n=a("el-col"),r=a("el-row"),o=a("el-card"),u=a("el-progress");return i(),c("div",null,[l(r,{gutter:15,class:"system_state"},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[I.value.os?(i(),s(o,{key:0,class:"card_item"},{header:f((function(){return[m]})),default:f((function(){return[d("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[_]})),_:1}),l(n,{span:12,textContent:p(I.value.os.goos)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[x]})),_:1}),l(n,{span:12,textContent:p(I.value.os.numCpu)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[w]})),_:1}),l(n,{span:12,textContent:p(I.value.os.compiler)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[b]})),_:1}),l(n,{span:12,textContent:p(I.value.os.goVersion)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[C]})),_:1}),l(n,{span:12,textContent:p(I.value.os.numGoroutine)},null,8,["textContent"])]})),_:1})])]})),_:1})):h("",!0)]})),_:1}),l(n,{span:12},{default:f((function(){return[I.value.disk?(i(),s(o,{key:0,class:"card_item"},{header:f((function(){return[L]})),default:f((function(){return[d("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[E]})),_:1}),l(n,{span:12,textContent:p(I.value.disk.totalMb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[k]})),_:1}),l(n,{span:12,textContent:p(I.value.disk.usedMb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[G]})),_:1}),l(n,{span:12,textContent:p(I.value.disk.totalGb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[j]})),_:1}),l(n,{span:12,textContent:p(I.value.disk.usedGb)},null,8,["textContent"])]})),_:1})]})),_:1}),l(n,{span:12},{default:f((function(){return[l(u,{type:"dashboard",percentage:I.value.disk.usedPercent,color:A.value},null,8,["percentage","color"])]})),_:1})]})),_:1})])]})),_:1})):h("",!0)]})),_:1})]})),_:1}),l(r,{gutter:15,class:"system_state"},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[I.value.cpu?(i(),s(o,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:f((function(){return[O]})),default:f((function(){return[d("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[M]})),_:1}),l(n,{span:12,textContent:p(I.value.cpu.cores)},null,8,["textContent"])]})),_:1}),(i(!0),c(v,null,y(I.value.cpu.cpus,(function(t,e){return i(),s(r,{key:e,gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[g("core "+p(e)+":",1)]})),_:2},1024),l(n,{span:12},{default:f((function(){return[l(u,{type:"line",percentage:+t.toFixed(0),color:A.value},null,8,["percentage","color"])]})),_:2},1024)]})),_:2},1024)})),128))])]})),_:1})):h("",!0)]})),_:1}),l(n,{span:12},{default:f((function(){return[I.value.ram?(i(),s(o,{key:0,class:"card_item"},{header:f((function(){return[P]})),default:f((function(){return[d("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[S]})),_:1}),l(n,{span:12,textContent:p(I.value.ram.totalMb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[B]})),_:1}),l(n,{span:12,textContent:p(I.value.ram.usedMb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[F]})),_:1}),l(n,{span:12,textContent:p(I.value.ram.totalMb/1024)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[N]})),_:1}),l(n,{span:12,textContent:p((I.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])]})),_:1})]})),_:1}),l(n,{span:12},{default:f((function(){return[l(u,{type:"dashboard",percentage:I.value.ram.usedPercent,color:A.value},null,8,["percentage","color"])]})),_:1})]})),_:1})])]})),_:1})):h("",!0)]})),_:1})]})),_:1})])}}}))}}}))}();
