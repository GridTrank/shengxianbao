(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-NoticeInfo-NoticeInfo"],{"3d91":function(t,n,e){"use strict";e.r(n);var a=e("7534"),i=e("a21c");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("612d");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1116e768",null,!1,a["a"],r);n["default"]=c.exports},"612d":function(t,n,e){"use strict";var a=e("cc05"),i=e.n(a);i.a},"697d":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-1116e768]{padding:%?30?%}.page_wrap .info[data-v-1116e768]{color:#666;font-size:%?28?%}.page_wrap .info .t[data-v-1116e768]{color:#333;text-align:center}',""]),t.exports=n},7534:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"page_wrap"},[e("v-uni-view",{staticClass:"info model-wrap"},[e("v-uni-view",{staticClass:"t "},[t._v(t._s(t.detail.noteTitle))]),e("v-uni-view",{staticClass:"c mt30"},[t._v(t._s(t.detail.noteContent))])],1)],1)},o=[]},a21c:function(t,n,e){"use strict";e.r(n);var a=e("f990"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},cc05:function(t,n,e){var a=e("697d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("46544806",a,!0,{sourceMap:!1,shadowMode:!1})},f990:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{detail:{}}},onLoad:function(t){this.getDetail(t.id)},methods:{getDetail:function(t){var n=this;this.$http("api/myOneslft/getCustomerNoticeInfo",{id:t}).then((function(t){console.log(t),n.detail=t}))}}};n.default=a}}]);