(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Set-AccountSafe-payPwd"],{"0e13":function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}};t.default=n},"3a12":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-code"})},s=[]},"49e6":function(e,t,a){"use strict";a.r(t);var n=a("5431"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},5431:function(e,t,a){"use strict";var n=a("4ea4");a("a9e3"),a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("0e13")),s={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=s},"587c":function(e,t,a){var n=a("94d6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("a4edf7e8",n,!0,{sourceMap:!1,shadowMode:!1})},"5ef0":function(e,t,a){"use strict";a.r(t);var n=a("76df"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"68f6":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .input_wrap[data-v-105ebaa6]{padding:%?30?%;background-color:#fff}.page_wrap .input_wrap[data-v-105ebaa6] .u-input{padding:%?12?% 0!important}.page_wrap .input_wrap[data-v-105ebaa6] .u-input__content__prefix-icon{margin-right:%?40?%!important}.page_wrap .input_wrap[data-v-105ebaa6] .input_item{width:100%!important}.page_wrap .input_wrap[data-v-105ebaa6] .u-form-item__body__right__message{margin:0!important}.page_wrap .input_wrap .input_item .label[data-v-105ebaa6]{color:#333;font-size:%?32?%;width:%?150?%;text-align:left;display:block}.page_wrap .input_wrap .input_item .iconfont[data-v-105ebaa6]{color:#d1d1d1}.page_wrap .input_wrap .input_item .get_code[data-v-105ebaa6]{color:#fd4d00;font-size:%?28?%}.page_wrap .agreement[data-v-105ebaa6]{margin-top:%?100?%;color:#666;font-size:%?24?%}.page_wrap .agreement uni-image[data-v-105ebaa6]{width:%?34?%;margin-right:%?10?%}.page_wrap .agreement .link[data-v-105ebaa6]{color:#fe5b07}.page_wrap .btn[data-v-105ebaa6]{height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?36?%;border-radius:%?50?%;background:linear-gradient(136deg,#f87523,#fd1d20);margin:auto;margin-top:%?50?%;width:90%}.page_wrap .code[data-v-105ebaa6]{color:#f87523;background:#fff;border:%?2?% solid #f87523}',""]),e.exports=t},"76df":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("3e0a"),i={data:function(){var e=this;return{accountName:"",model:{payPasword:"",mobile:"",smsCode:""},rules:{payPasword:[{required:!0,message:"请输入支付密码",trigger:"blur"},{validator:function(e,t,a){return(0,n.payPwd)(t,"pwd")},message:"密码为6位数",trigger:["change","blur"]}],mobile:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(t,a,n){return e.$u.test.mobile(a)},message:"手机号码不正确",trigger:["change","blur"]}],smsCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]},tips:"",isAgree:!1}},onReady:function(){this.$refs.form.setRules(this.rules)},onLoad:function(){this.getUserInfo()},methods:{getUserInfo:function(){var e=this;this.$http("api/myOneslft/getMyInfo","","post").then((function(t){e.accountName=t.customerName}))},agreeHandle:function(){this.isAgree=!this.isAgree},codeChange:function(e){this.tips=e},getCode:function(){var e=this;this.$refs.uCode.canGetCode?this.$http("api/customer/getSmsCode",{mobile:this.model.mobile},"post").then((function(t){e.$refs.uCode.start()})):uni.$u.toast("倒计时结束后再发送")},submit:function(){var e=this;this.$refs.form.validate().then((function(t){e.$http("api/myOneslft/updatePayPasword",e.model,"post").then((function(t){uni.showToast({title:"修改成功",icon:"none"}),setTimeout((function(){e.navTo("back")}),2e3)}))})).catch((function(e){}))}}};t.default=i},"79ab":function(e,t,a){"use strict";a.r(t);var n=a("3a12"),i=a("49e6");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("92e0");var r,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4d11c728",null,!1,n["a"],r);t["default"]=u.exports},"8b92":function(e,t,a){"use strict";a.r(t);var n=a("a0c6"),i=a("5ef0");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("ab0f");var r,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"105ebaa6",null,!1,n["a"],r);t["default"]=u.exports},"92e0":function(e,t,a){"use strict";var n=a("587c"),i=a.n(n);i.a},"94d6":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n',""]),e.exports=t},a0c6:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var n={uForm:a("813e").default,uFormItem:a("b0af").default,uInput:a("5e42").default,uCode:a("79ab").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"input_wrap"},[a("u-form",{ref:"form",attrs:{model:e.model,rules:e.rules}},[a("u-form-item",[a("v-uni-view",{staticClass:"input_item "},[a("u-input",{staticClass:"mt10",attrs:{disabled:!0,placeholder:"请输入当前账号",border:"bottom"},model:{value:e.accountName,callback:function(t){e.accountName=t},expression:"accountName"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label"},[e._v("账号")])],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"mobile"}},[a("v-uni-view",{staticClass:"input_item "},[a("u-input",{staticClass:"mt10",attrs:{placeholder:"请输入手机号码",border:"bottom"},model:{value:e.model.mobile,callback:function(t){e.$set(e.model,"mobile",t)},expression:"model.mobile"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label"},[e._v("手机号")])],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"smsCode"}},[a("v-uni-view",{staticClass:"input_item "},[a("u-input",{staticClass:"mt10",attrs:{placeholder:"请输入验证码",border:"bottom"},model:{value:e.model.smsCode,callback:function(t){e.$set(e.model,"smsCode",t)},expression:"model.smsCode"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label"},[e._v("验证码")])],1),a("template",{slot:"suffix"},[a("u-code",{ref:"uCode",attrs:{seconds:"60",changeText:"X秒重新获取"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"get_code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.tips))])],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"payPasword"}},[a("v-uni-view",{staticClass:"input_item "},[a("u-input",{staticClass:"mt10",attrs:{placeholder:"请输入支付密码",border:"none"},model:{value:e.model.payPasword,callback:function(t){e.$set(e.model,"payPasword",t)},expression:"model.payPasword"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label"},[e._v("支付密码")])],1)],2)],1)],1)],1),a("v-uni-view",{staticClass:"agreement row"},[a("v-uni-image",{attrs:{src:e.isAgree?"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png":"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.agreeHandle.apply(void 0,arguments)}}}),a("v-uni-text",[e._v("我已阅读并同意以下条款"),a("v-uni-text",{staticClass:"link"},[e._v("《好运来服务协议及隐私政策》》")])],1)],1)],1),a("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("保存")]),a("v-uni-view",{staticClass:"btn code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pagesC/Service/Service")}}},[e._v("联系客服")])],1)},s=[]},ab0f:function(e,t,a){"use strict";var n=a("ef0e"),i=a.n(n);i.a},ef0e:function(e,t,a){var n=a("68f6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("b26ea430",n,!0,{sourceMap:!1,shadowMode:!1})}}]);