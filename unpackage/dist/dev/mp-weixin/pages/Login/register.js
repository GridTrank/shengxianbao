(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Login/register"],{192:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(193));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},193:function(e,n,t){"use strict";t.r(n);var r=t(194),o=t(196);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(198);var i,s=t(11),c=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"dabf923c",null,!1,r["components"],i);c.options.__file="pages/Login/register.vue",n["default"]=c.exports},194:function(e,n,t){"use strict";t.r(n);var r=t(195);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},195:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={uForm:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-form/u-form")]).then(t.bind(null,764))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,773))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,781))},uCode:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-code/u-code")]).then(t.bind(null,789))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,i=[];o._withStripped=!0},196:function(e,n,t){"use strict";t.r(n);var r=t(197),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},197:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(16),o={data:function(){var e=this;return{tips:"",model:{accountPasword:"",accountName:"",sourceType:1,mobile:"",smsCode:""},rules:{accountName:[{required:!0,message:"请输入账号",trigger:"blur"}],accountPasword:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(e,n,t){return(0,r.checkStr)(n,"pwd")},message:"密码为8-16位，须包含数字、字母、符号",trigger:["change","blur"]}],mobile:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(n,t,r){return e.$u.test.mobile(t)},message:"手机号码不正确",trigger:["change","blur"]}],smsCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]},isAgree:!1}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{agreeHandle:function(){this.isAgree=!this.isAgree},submit:function(){var n=this;this.isAgree||e.showToast({title:"请先阅读并同意服务协议与隐私政策",icon:"none"}),this.$refs.form.validate().then((function(t){n.$http("api/customer/register",n.model,"post").then((function(t){e.showToast({title:"注册成功，跳转认证",icon:"none"}),setTimeout((function(){n.navTo("/pagesA/Clientele/index")}),2e3)}))})).catch((function(e){}))},codeChange:function(e){this.tips=e},getCode:function(){this.$http("api/customer/getSmsCode",{mobile:this.model.mobile},"post").then((function(e){}))}}};n.default=o}).call(this,t(1)["default"])},198:function(e,n,t){"use strict";t.r(n);var r=t(199),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},199:function(e,n,t){}},[[192,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Login/register.js.map