(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Statistics-List"],{"01b8":function(t,a,i){var s=i("b5c7");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("52579146",s,!0,{sourceMap:!1,shadowMode:!1})},"3b30":function(t,a,i){"use strict";var s=i("01b8"),e=i.n(s);e.a},"6dfa":function(t,a,i){"use strict";var s;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page_wrap"},[i("v-uni-view",{staticClass:"tab_list mt10 row"},t._l(t.tabList,(function(a,s){return i("v-uni-view",{key:s,class:["tab_item",t.tabActive==s&&"tab_active"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabHandle(a,s)}}},[t._v(t._s(a.name))])})),1),i("v-uni-view",{staticClass:"data_wrap row"},[i("v-uni-view",{staticClass:"data_item column"},[i("v-uni-text",{staticClass:"t1 b"},[t._v("878")]),i("v-uni-text",{staticClass:"t2"},[t._v("采购笔数")])],1),i("v-uni-view",{staticClass:"data_item column"},[i("v-uni-text",{staticClass:"t1 b"},[t._v("¥1")]),i("v-uni-text",{staticClass:"t2"},[t._v("单品数量")])],1),i("v-uni-view",{staticClass:"data_item column"},[i("v-uni-text",{staticClass:"t1 b"},[t._v("878")]),i("v-uni-text",{staticClass:"t2"},[t._v("订货金额")])],1)],1),i("v-uni-view",{staticClass:"tab_list date mt10 row"},t._l(t.dateTypeList,(function(a,s){return i("v-uni-view",{key:s,class:["tab_item",t.dateActive==s&&"date_active"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dateHandle(a,s)}}},[t._v(t._s(a.name))])})),1),i("v-uni-view",{staticClass:"list"},t._l(t.datas,(function(a,s){return i("v-uni-view",{key:s,staticClass:"item mt10"},[a.show?[i("v-uni-view",{staticClass:"row jc_sb i1"},[i("v-uni-text",{staticClass:"f28-c333"},[t._v("名称")]),i("v-uni-text",{staticClass:"f24-c999"},[t._v("1231")])],1),i("v-uni-view",{staticClass:"row jc_sb i2 mt10"},[i("v-uni-text",{staticClass:"f24-c999"},[t._v("1包约125g")]),i("v-uni-text",{staticClass:"f24-c999"},[t._v("1231")])],1),i("v-uni-view",{staticClass:"row jc_sb i3 mt10"},[i("v-uni-view",{staticClass:"left "},[i("v-uni-view",{staticClass:"f24-c999 row"},[i("v-uni-text",{staticClass:"bg_style1"},[t._v("斤")]),t._v("* 30")],1),i("v-uni-view",{staticClass:"f24-c999 mt10 row"},[i("v-uni-text",{staticClass:"bg_style1"},[t._v("包")]),t._v("* 30")],1)],1),i("v-uni-text",{staticClass:"f24-c999"},[t._v("订单金额："),i("v-uni-text",{staticClass:"f28-dc"},[t._v("¥300")])],1)],1),i("v-uni-view",{staticClass:"row jc_sb i4 mt10"},[i("v-uni-text",{staticClass:"f24-c999"},[t._v("2021-12-12")]),i("v-uni-text",{staticClass:"bg_style1 f24-dc"},[t._v("查看订单")])],1)]:[i("v-uni-view",{staticClass:"f28-c333"},[t._v("名称")]),i("v-uni-view",{staticClass:"row mt20 jc_sa"},[i("v-uni-text",{staticClass:"f24-c999"},[t._v("商品数量：30")]),i("v-uni-text",{staticClass:"f24-c999"},[t._v("订货金额："),i("v-uni-text",{staticClass:"f28-dc"},[t._v("¥20000")])],1)],1),i("v-uni-view",{staticClass:"more",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showMore(a,!0)}}},[i("v-uni-text",{staticClass:"iconfont icon-zhankai"})],1)]],2)})),1)],1)},n=[]},8404:function(t,a,i){"use strict";i.r(a);var s=i("6dfa"),e=i("9314");for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("3b30");var c,v=i("f0c5"),o=Object(v["a"])(e["default"],s["b"],s["c"],!1,null,"6bb214ca",null,!1,s["a"],c);a["default"]=o.exports},9314:function(t,a,i){"use strict";i.r(a);var s=i("9ad2"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},"9ad2":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{tabList:[{name:"采购明细",value:1},{name:"商品汇总",value:2},{name:"分类汇总",value:3}],dateTypeList:[{name:"今日",value:1},{name:"昨日",value:2},{name:"近7天",value:3},{name:"筛选",value:4}],tabActive:0,dateActive:0,datas:[{show:!1},{show:!1},{show:!1}]}},onLoad:function(t){console.log(t)},methods:{tabHandle:function(t,a){this.tabActive=a},dateHandle:function(t,a){3==a?this.navTo("./Screen"):this.dateActive=a},showMore:function(t,a){t.show=a}}};a.default=s},b5c7:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .tab_list[data-v-6bb214ca]{background-color:#fff;justify-content:space-around;padding:%?20?% 0}.page_wrap .tab_list .tab_item[data-v-6bb214ca]{color:#333;font-size:%?28?%;position:relative;padding-bottom:%?14?%}.page_wrap .tab_list .tab_active[data-v-6bb214ca]{color:#fe5b07;padding-bottom:%?10?%;border-bottom:%?4?% solid #fe5b07}.page_wrap .tab_list .date_active[data-v-6bb214ca]{color:#fe5b07}.page_wrap .date .tab_item[data-v-6bb214ca]{padding:0}.page_wrap .data_wrap[data-v-6bb214ca]{background-color:#fff;justify-content:space-around;padding:%?20?%}.page_wrap .data_wrap .data_item[data-v-6bb214ca]{color:#fe5b07}.page_wrap .data_wrap .data_item .t1[data-v-6bb214ca]{font-size:%?42?%}.page_wrap .data_wrap .data_item .t2[data-v-6bb214ca]{margin-top:%?20?%;font-size:%?24?%}.page_wrap .list .item[data-v-6bb214ca]{background-color:#fff;padding:%?30?%;position:relative}.page_wrap .list .item .row .bg_style1[data-v-6bb214ca]{padding:%?4?% %?12?%;margin-right:%?10?%}.page_wrap .list .item .more[data-v-6bb214ca]{position:absolute;right:%?30?%;bottom:%?40?%}',""]),t.exports=a}}]);