(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-AllBrand-AllBrand"],{"0e86":function(a,t,e){"use strict";e.r(t);var n=e("a07e"),i=e.n(n);for(var r in n)"default"!==r&&function(a){e.d(t,a,(function(){return n[a]}))}(r);t["default"]=i.a},4415:function(a,t,e){var n=e("a47e");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("48b658e5",n,!0,{sourceMap:!1,shadowMode:!1})},a07e:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},onLoad:function(){this.queryUrl="api/myOneslft/getSpecialListPage",this.getList()},methods:{}};t.default=n},a2af:function(a,t,e){"use strict";e.r(t);var n=e("bbae"),i=e("0e86");for(var r in i)"default"!==r&&function(a){e.d(t,a,(function(){return i[a]}))}(r);e("f30f");var s,u=e("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"a4d5bf1a",null,!1,n["a"],s);t["default"]=c.exports},a47e:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-a4d5bf1a]{padding:0 %?30?% %?30?% %?30?%}.page_wrap .list[data-v-a4d5bf1a]{flex-wrap:wrap}.page_wrap .list .item[data-v-a4d5bf1a]{flex-shrink:0;margin-right:%?20?%;width:%?208?%;height:%?208?%;border-radius:%?8?%}.page_wrap .list .item[data-v-a4d5bf1a]:nth-child(3n){margin-right:0}',""]),a.exports=t},bbae:function(a,t,e){"use strict";var n;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return n}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"page_wrap"},[e("v-uni-view",{staticClass:"list row"},a._l(a.dataList,(function(t,n){return e("v-uni-image",{key:n,staticClass:"item mt30",attrs:{src:t.specialImage},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.navTo("/pagesB/RecommendPage/RecommendPage?id="+t.id+"&pageType=spec")}}})})),1)],1)},r=[]},f30f:function(a,t,e){"use strict";var n=e("4415"),i=e.n(n);i.a}}]);