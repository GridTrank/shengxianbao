(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesC-Out-AddPage"],{1303:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uInput:a("5e42").default,detailList:a("40c3").default,jPicker:a("5a73").default,itmisterDatePicker:a("4925").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"list mt20"},[a("v-uni-view",{staticClass:"item row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopHandle(1)}}},[a("v-uni-view",{staticClass:"left "},[t._v("出库仓库")]),a("v-uni-view",{staticClass:"right row"},[a("v-uni-text",{staticClass:"label"},[t._v(t._s(t.queryData.workhouseName))]),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),a("v-uni-view",{staticClass:"item row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopHandle(2)}}},[a("v-uni-view",{staticClass:"left "},[t._v("日期")]),a("v-uni-view",{staticClass:"right row"},[a("v-uni-text",{staticClass:"label"},[t._v(t._s(t.selectDate))]),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),a("v-uni-view",{staticClass:"item row"},[a("v-uni-view",{staticClass:"left "},[t._v("备注")]),a("v-uni-view",{staticClass:"right "},[a("u-input",{attrs:{border:"none",placeholder:"请输入"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1),t.stockData?a("v-uni-view",{staticClass:"slot_wrap"},[a("detail-list",{ref:"detailList",attrs:{pageType:t.pageType,pageTxt:t.pageTxt,nowParentPage:"AddPage",datas:t.stockData}})],1):a("v-uni-view",{staticClass:"btn_default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./SelectGood?pageType="+t.pageType)}}},[t._v("选择商品")]),a("jPicker",{ref:"jPicker",attrs:{title:"选择仓库",options:t.columns,valKey:"value",showKey:"label"},on:{sure:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}}),a("itmister-date-picker",{ref:"dateEl",on:{dateConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dateConfirm.apply(void 0,arguments)}}})],1)},s=[]},3156:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-9e4dcf92]{padding-bottom:%?100?%}.page_wrap .list[data-v-9e4dcf92]{background-color:#fff;padding:0 %?30?%}.page_wrap .list .item[data-v-9e4dcf92]{padding:%?40?% 0;border-bottom:1px solid #e1e1e1;justify-content:space-between}.page_wrap .list .item .left[data-v-9e4dcf92]{font-size:%?30?%;color:#333}.page_wrap .list .item .right .label[data-v-9e4dcf92]{color:#666;font-size:%?28?%;margin-right:%?12?%}.page_wrap .list .item .right[data-v-9e4dcf92] .uni-input-placeholder{text-align:right}.page_wrap .list .item .right[data-v-9e4dcf92] uni-input{text-align:right}.page_wrap .list .item .input[data-v-9e4dcf92]{width:%?400?%}.page_wrap .list .item[data-v-9e4dcf92]:last-child{border:none}.page_wrap .btn_default[data-v-9e4dcf92]{width:90%;margin:auto;margin-top:%?300?%}',""]),t.exports=e},"6b3a":function(t,e,a){"use strict";var i=a("6f48"),n=a.n(i);n.a},"6f48":function(t,e,a){var i=a("3156");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("919ccd3e",i,!0,{sourceMap:!1,shadowMode:!1})},7150:function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("d81d"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s=a("3e0a"),o=a("2f62"),r={data:function(){return{num:"",showPop:!1,selectDate:"",pageType:"",pageTxt:"",remark:"",stockData:null,columns:[{label:"仓库1",value:1},{label:"仓库2",value:2}],queryData:{workhouseName:"请选择",workhouseId:""}}},onLoad:function(t){this.selectDate=(0,s.date)("Y-m-d",(new Date).getTime()),this.initDate(this.selectDate),uni.getStorageSync("stockData")&&(this.stockData=uni.getStorageSync("stockData")),this.getStockList()},mounted:function(){if(uni.getStorageSync("stockData")){var t=uni.getStorageSync("stockData");this.$refs.detailList.step="three",t.forEach((function(t){t.costPrice=t.unitPrice})),this.stockData=t,this.SET_STOCK_MANAGE_INFO({infoInfoVoList:t}),this.$forceUpdate()}this.$StockManageInfo.workhouseId&&(this.queryData.workhouseName=this.$StockManageInfo.workhouseName,this.queryData.workhouseId=this.$StockManageInfo.workhouseId),this.$StockManageInfo.remark&&(this.remark=this.$StockManageInfo.remark)},computed:(0,n.default)({},(0,o.mapState)(["$StockManageInfo"])),watch:{remark:function(t){this.SET_STOCK_MANAGE_INFO({remark:t})}},methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)(["SET_STOCK_MANAGE_INFO"])),{},{getStockList:function(){var t=this;this.$http("api/workhous/getWorkhousList").then((function(e){t.columns=e.map((function(t){return{label:t.workhouseName,value:t.id}}))}))},showPopHandle:function(t){2==t?this.$refs.dateEl.show():this.$refs.jPicker.pickerVisable=!0},dateConfirm:function(t){this.selectDate=t,this.SET_STOCK_MANAGE_INFO({outputDate:t})},confirm:function(t){this.queryData.workhouseName=t.label,this.queryData.workhouseId=t.value,this.SET_STOCK_MANAGE_INFO(this.queryData)}}),onUnload:function(){uni.removeStorageSync("stockData")},onBackPress:function(t){if("backbutton"==t.from)return uni.removeStorageSync("stockData"),uni.navigateTo({url:"./Index?pageType="+this.pageType}),!0}};e.default=r},7798:function(t,e,a){"use strict";a.r(e);var i=a("1303"),n=a("ae937");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("6b3a");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"9e4dcf92",null,!1,i["a"],o);e["default"]=c.exports},ae937:function(t,e,a){"use strict";a.r(e);var i=a("7150"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a}}]);