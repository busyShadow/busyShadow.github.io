(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4fbb23c0"],{"05bc":function(t,e,r){},"169a":function(t,e,r){"use strict";r("05bc")},"96cf":function(e,t,r){e=function(a){"use strict";var u,c=Object.prototype,l=c.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",h=t.asyncIterator||"@@asyncIterator",f=t.toStringTag||"@@toStringTag";function r(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{r({},"")}catch(t){r=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof j?e:j,e=Object.create(e.prototype),n=new L(n||[]);return e._invoke=(o=t,i=r,a=n,c=b,function(t,e){if(c===g)throw new Error("Generator is already running");if(c===v){if("throw"===t)throw e;return _()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(n===u){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=u,t(e,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}n=p(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;n=n.arg;if(!n)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s;{if(!n.done)return n;r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=u)}r.delegate=null;return s}(r,a);if(r){if(r===s)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===b)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=g;r=p(o,i,a);if("normal"===r.type){if(c=a.done?v:y,r.arg!==s)return{value:r.arg,done:a.done}}else"throw"===r.type&&(c=v,a.method="throw",a.arg=r.arg)}}),e}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=d;var b="suspendedStart",y="suspendedYield",g="executing",v="completed",s={};function j(){}function m(){}function e(){}var t={},o=(r(t,n,function(){return this}),Object.getPrototypeOf),o=o&&o(o(E([]))),i=(o&&o!==c&&l.call(o,n)&&(t=o),e.prototype=j.prototype=Object.create(t));function O(t){["next","throw","return"].forEach(function(e){r(t,e,function(t){return this._invoke(e,t)})})}function w(a,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=p(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==typeof r&&l.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t}).next=t}return{next:_}}function _(){return{value:u,done:!0}}return r(i,"constructor",m.prototype=e),r(e,"constructor",m),m.displayName=r(e,f,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,e):(t.__proto__=e,r(t,f,"GeneratorFunction")),t.prototype=Object.create(i),t},a.awrap=function(t){return{__await:t}},O(w.prototype),r(w.prototype,h,function(){return this}),a.AsyncIterator=w,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new w(d(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(i),r(i,f,"Generator"),r(i,n,function(){return this}),r(i,"toString",function(){return"[object Generator]"}),a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,k(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),s}},a}(e.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},a34a:function(t,e,r){t.exports=r("96cf")},c463:function(u,t,e){"use strict";e.r(t);function r(t){return Object(h.C)("data-v-1d2bf8d4"),t=t(),Object(h.A)(),t}var h=e("7a23"),f={class:"wrapper"},d={class:"notice-box"},p={class:"info-box"},b={class:"logo"},y={key:0,class:"text"},g=r(function(){return Object(h.i)("span",null,"姓       名：",-1)}),v=r(function(){return Object(h.i)("span",null,"身份号码：",-1)}),j=r(function(){return Object(h.i)("span",null,"有效期限：",-1)}),m={key:1,class:"avatar"},O={class:"result-text"},w={key:0},x=Object(h.j)("认证成功 "),k={key:1},L={key:1},E=Object(h.j)("获取数据..."),_={class:"btns"},N=Object(h.j)("返回"),F=r(function(){return Object(h.i)("div",{class:"copyright"},[Object(h.i)("p",null,"©2021 广州大白互联网科技有限公司")],-1)});var o,n=e("c973"),l=e.n(n),n=e("a34a"),i=e.n(n),a=e("75e6"),c=e("4ec3"),n={name:"Result",data:function(){return{data:{authObject:{}},loading:!0}},components:{},watch:{},created:function(){},mounted:function(){var n=this;return l()(i.a.mark(function t(){var e,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(o=n).$route.query.cert_token){t.next=5;break}return a.a.alert({title:"温馨提示",message:"缺少必要参数"}).then(function(){o.$router.replace("/")}),t.abrupt("return");case 5:return r=null,t.next=8,Object(c.c)().then(function(t){if(0!=t.retCode)return o.loading=!1,void a.a.alert({title:"温馨提示",message:t.retMessage}).then(function(){o.$router.replace("/")});r=t.accessToken}).catch(function(t){o.handelNetworkErr(t)});case 8:if(null===r)return t.abrupt("return");t.next=10;break;case 10:return t.next=12,Object(c.e)({accessToken:r,authHistQry:{certToken:e}}).then(function(t){if(0!=t.retCode)return o.loading=!1,void a.a.alert({title:"温馨提示",message:t.retMessage}).then(function(){o.$router.replace("/")});o.data=t.authData}).catch(function(t){o.handelNetworkErr(t)});case 12:o.loading=!1;case 13:case"end":return t.stop()}},t)}))()},beforeUnmount:function(){},methods:{goIndex:function(){o.$router.replace("/")},handelNetworkErr:function(t){o.loading=!1,a.a.alert({title:"网络错误",message:t}).then(function(){o.$router.replace("/")})}},computed:{idNumFilter:function(){return this.data.authObject.idNum?this.data.authObject.idNum.slice(0,3)+"*************"+this.data.authObject.idNum.slice(-2):""}}},s=(e("169a"),e("6b0d")),e=e.n(s);t.default=e()(n,[["render",function(t,e,l,s,r,n){var o=Object(h.F)("van-notice-bar"),i=Object(h.F)("van-image"),a=Object(h.F)("van-icon"),c=Object(h.F)("van-loading"),u=Object(h.F)("van-button");return Object(h.z)(),Object(h.h)("div",f,[Object(h.i)("div",d,[Object(h.k)(o,{"left-icon":"bullhorn-o",scrollable:"",mode:"closeable",color:"#FF0033",background:"rgba(255,255,255,0.1)",text:"本页面为安识云-新一代H5身份认证演示页面"})]),Object(h.i)("div",p,[Object(h.i)("div",b,[Object(h.k)(i,{fit:"cover",width:"8.6rem",height:"3.2rem",src:"./images/logo.png"})]),r.loading?Object(h.g)("",!0):(Object(h.z)(),Object(h.h)("div",y,[Object(h.i)("p",null,[g,Object(h.j)(Object(h.I)(r.data.authObject.fullName),1)]),Object(h.i)("p",null,[v,Object(h.j)(Object(h.I)(n.idNumFilter),1)]),Object(h.i)("p",null,[j,Object(h.j)(Object(h.I)(r.data.authObject.idStartDate)+"-"+Object(h.I)("00000000"==r.data.authObject.idEndDate?"长期有效":r.data.authObject.idEndDate),1)])])),r.data.portrait?(Object(h.z)(),Object(h.h)("div",m,[Object(h.k)(i,{fit:"cover",width:"6.3rem",height:"8.4rem",src:"data:image/jpeg;base64,".concat(r.data.portrait)},null,8,["src"])])):Object(h.g)("",!0)]),Object(h.i)("div",O,[r.loading?(Object(h.z)(),Object(h.h)("h3",L,[Object(h.k)(c,{size:"24px"},{default:Object(h.M)(function(){return[E]}),_:1})])):(Object(h.z)(),Object(h.h)(h.a,{key:0},[0===r.data.resCode?(Object(h.z)(),Object(h.h)("h3",w,[Object(h.k)(a,{name:"checked",color:"#03D620"}),x])):(Object(h.z)(),Object(h.h)("h3",k,[Object(h.k)(a,{name:"clear",color:"#FC1A1A"}),Object(h.j)("认证不通过("+Object(h.I)(r.data.resCode)+") ",1)]))],64))]),Object(h.i)("div",_,[Object(h.k)(u,{type:"primary",block:"",disabled:r.loading,onClick:n.goIndex},{default:Object(h.M)(function(){return[N]}),_:1},8,["disabled","onClick"])]),F])}],["__scopeId","data-v-1d2bf8d4"]])},c973:function(t,e){function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);