(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-QuickOrder-QuickOrder"],{"03d2":function(t,e,a){"use strict";a.r(e);var i=a("ac34"),n=a("4806");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("ffa3");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"03696471",null,!1,i["a"],r);e["default"]=c.exports},"06c5":function(t,e,a){"use strict";a("a630"),a("fb6a"),a("d3b7"),a("25f0"),a("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var i=n(a("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(t){if("string"===typeof t)return(0,i.default)(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,i.default)(t,e):void 0}}},"09f0":function(t,e,a){"use strict";function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],i=!0,n=!1,s=void 0;try{for(var r,o=t[Symbol.iterator]();!(i=(r=o.next()).done);i=!0)if(a.push(r.value),e&&a.length===e)break}catch(c){n=!0,s=c}finally{try{i||null==o["return"]||o["return"]()}finally{if(n)throw s}}return a}}a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"0d21":function(t,e,a){"use strict";function i(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"0f2d":function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),s=i(a("03d2")),r=i(a("c762")),o={components:{search:s.default,list:r.default},data:function(){return{parentList:[],productList:[],selectParentIndex:0,selectChildIndex:0,selectAllIndex:0,page:1,categoryId:"",parentListPop:!1,tabInfo:[{name:"常用清单",id:0},{name:"最近购买",id:1}]}},onShow:function(){this.dataList=[],this.getCateList()},methods:{getCateList:function(){var t=this;this.$http("api/pms/productcategory/getCategoryPidList").then((function(e){e.forEach((function(t){t.name=t.categoryName})),t.parentList=e,t.categoryId=e[0].id,t.selectChild(0)}))},selectParent:function(t){this.dataList=[],this.selectParentIndex=t.index,this.selectChildIndex=0,this.selectAllIndex=t.index,this.categoryId=t.id,this.selectChild(0)},selectChild:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.dataList=[],e.selectChildIndex=t,e.queryData={categoryId:e.categoryId},1==t?(e.queryUrl="api/oftenbuy/getCusOftenBuyProductList",e.getList()):(e.queryUrl="api/usedlist/findUsedList",e.getList());case 4:case"end":return a.stop()}}),a)})))()},selectItem:function(t,e){this.selectAllIndex=e,this.$refs.uTbas.current=e,this.$refs.uTbas.setLineLeft(),this.dataList=[],this.selectChild(0),this.parentListPop=!1}}};e.default=o},1055:function(t,e,a){"use strict";var i=a("d70f"),n=a.n(i);n.a},2826:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{selectData:{type:Object,default:function(){return{}}}},data:function(){return{show:!1,num:1,remark:"",img:""}},watch:{},methods:{changNum:function(t){1==t&&this.num>1?this.num--:2==t&&this.num++},add:function(){var t=this;this.$http("api/bmallshoppingcart/addShoppingCart",{buyQuantity:this.num,productSkuId:this.selectData.productSkuId,remark:this.remark},"post").then((function(e){t.show=!1,uni.showToast({title:"添加成功",icon:"none"})}))}}};e.default=i},"295b":function(t,e,a){var i=a("c131");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5a9b7ad2",i,!0,{sourceMap:!1,shadowMode:!1})},3835:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var i=o(a("0d21")),n=o(a("09f0")),s=o(a("06c5")),r=o(a("3d8c"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return(0,i.default)(t)||(0,n.default)(t,e)||(0,s.default)(t,e)||(0,r.default)()}},"3d8c":function(t,e,a){"use strict";function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"419b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .parent_list[data-v-7f2ff2a6]{position:relative;padding-right:%?50?%;padding-top:%?30?%;background-color:#fff}.page_wrap .parent_list .more_icon[data-v-7f2ff2a6]{position:absolute;right:%?0?%;top:%?42?%;color:#fe5b07;background-color:#fff;border-left:1px solid #e8e8e8;padding-right:%?20?%;padding-left:%?10?%}.page_wrap .parent_list[data-v-7f2ff2a6] .u-tabs__wrapper__nav{position:relative}.page_wrap .labels_list[data-v-7f2ff2a6]{display:flex;flex-wrap:nowrap;white-space:nowrap;background-color:#fff;border-bottom:1px solid #ddd}.page_wrap .labels_list .label_item[data-v-7f2ff2a6]{display:inline-block;text-align:center;color:#333;font-size:%?28?%;padding:%?20?% %?30?%}.page_wrap .labels_list .select_parent[data-v-7f2ff2a6]{color:#fe5b07;position:relative}.page_wrap .labels_list .select_parent[data-v-7f2ff2a6]::after{content:"";display:block;position:absolute;bottom:0;width:%?30?%;height:%?6?%;background-color:#fe5b07;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.page_wrap .second_list[data-v-7f2ff2a6]{display:flex;height:88vh;overflow:hidden}.page_wrap .second_list .left_list[data-v-7f2ff2a6]{width:25%;text-align:center;overflow-y:scroll}.page_wrap .second_list .left_list .left_item[data-v-7f2ff2a6]{padding:%?40?% 0;justify-content:center;color:#666;font-size:%?28?%}.page_wrap .second_list .left_list .left_item .rexiao_img[data-v-7f2ff2a6]{width:%?20?%;margin-right:%?20?%}.page_wrap .second_list .left_list .select_child[data-v-7f2ff2a6]{background-color:#fff;color:#fe5b07;font-size:%?28?%;font-weight:700;position:relative}.page_wrap .second_list .left_list .select_child[data-v-7f2ff2a6]::after{content:"";display:block;position:absolute;left:0;width:%?8?%;height:%?40?%;background-color:#fe5b07;border-radius:0 %?20?% %?20?% 0}.page_wrap .second_list .right_list[data-v-7f2ff2a6]{width:75%;background-color:#fff;overflow-y:scroll}.page_wrap .second_list .right_list .list[data-v-7f2ff2a6]{padding-bottom:%?30?%}.page_wrap .all_list_wrap[data-v-7f2ff2a6]{position:fixed;top:%?90?%;width:100%;height:100%;background-color:rgba(0,0,0,.3)}.page_wrap .all_list_wrap .all_list[data-v-7f2ff2a6]{background-color:#fff;padding:%?40?% %?30?%}.page_wrap .all_list_wrap .all_list .all_top[data-v-7f2ff2a6]{justify-content:space-between}.page_wrap .all_list_wrap .all_list .all_top .all[data-v-7f2ff2a6]{color:#333;font-size:%?28?%;font-weight:700;padding:0 %?30?%;position:relative}.page_wrap .all_list_wrap .all_list .all_top .all[data-v-7f2ff2a6]::after{position:absolute;content:"";display:block;width:%?8?%;height:%?30?%;background-color:#fe5b07;border-radius:0 %?20?% %?20?% 0;left:0;top:%?6?%}.page_wrap .all_list_wrap .all_list .all_item[data-v-7f2ff2a6]{display:inline-block;padding:%?10?% %?26?%;background-color:#f6f6f6;border-radius:%?4?%;color:#999;font-size:%?24?%;margin-right:%?30?%}.page_wrap .all_list_wrap .all_list .all_item[data-v-7f2ff2a6]:nth-child(4n){margin-right:0}.page_wrap .all_list_wrap .all_list .select_all_item[data-v-7f2ff2a6]{background-color:#fff4ed;color:#fe5b07}',""]),t.exports=e},4311:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uPopup:a("cbea").default,uInput:a("5e42").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"spec_wrap"},[a("u-popup",{attrs:{show:t.show,closeable:!0,mode:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[a("v-uni-view",{staticClass:"con"},[a("v-uni-view",{staticClass:"info row"},[a("v-uni-image",{attrs:{src:t.selectData.imageUrl,mode:"widthFix"}}),a("v-uni-view",{},[a("v-uni-text",{staticClass:"f32-c333 mr20"},[t._v(t._s(t.selectData.productName))]),a("v-uni-text",{staticClass:"f24-c999 mt10"},[t._v(t._s(t.selectData.productModel))])],1)],1),a("v-uni-view",{staticClass:"detail row jc_sb"},[a("v-uni-text",{staticClass:"f28-c333"},[t._v("结算单位")]),a("v-uni-text",{staticClass:"f28-c999"},[t._v(t._s(t.selectData.productUnit))])],1),a("v-uni-view",{staticClass:"detail row jc_sb"},[a("v-uni-text",{staticClass:"f28-c333"},[t._v("数量")]),a("v-uni-view",{staticClass:"num_wrap row"},[a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changNum(1)}}},[t._v("-")]),a("u-input",{attrs:{border:"none",type:"text"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changNum(2)}}},[t._v("+")])],1)],1),a("v-uni-view",{staticClass:"detail jc_sb row"},[a("u-input",{attrs:{placeholder:"请输入备注",border:"none"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label f28-c333"},[t._v("备注")])],1)],2)],1),a("v-uni-view",{staticClass:"btn_default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},s=[]},4806:function(t,e,a){"use strict";a.r(e);var i=a("62c8"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"4afd":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uTabs:a("0890").default,noData:a("5655").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_wrap"},[a("search"),t.parentList.length>0?a("v-uni-view",{staticClass:"parent_list"},[a("u-tabs",{ref:"uTbas",attrs:{list:t.parentList,activeStyle:{color:"#FF6304",fontWeight:"bold"},lineColor:"#FF6304",itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px; background:#fff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectParent.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"more_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.parentListPop=!0}}},[a("v-uni-text",{staticClass:"iconfont icon-zhankai1"})],1)],1):t._e(),a("v-uni-view",{staticClass:"second_list"},[a("v-uni-view",{staticClass:"left_list"},t._l(t.tabInfo,(function(e,i){return a("v-uni-view",{key:i,staticClass:"left_item row",class:t.selectChildIndex==e.id&&"select_child",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectChild(e.id)}}},[a("v-uni-text",[t._v(t._s(e.name))])],1)})),1),t.dataList.length>0?[a("v-uni-view",{staticClass:"right_list"},t._l(t.dataList,(function(t,e){return a("v-uni-view",{key:e,staticClass:"list  mt20"},[a("list",{attrs:{info:t}})],1)})),1)]:[a("v-uni-view",{staticClass:"right_list"},[a("no-data")],1)]],2),t.parentListPop?a("v-uni-view",{staticClass:"all_list_wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.parentListPop=!1}}},[a("v-uni-view",{staticClass:"all_list "},[a("v-uni-view",{staticClass:"all_top row"},[a("v-uni-text",{staticClass:"all"},[t._v("全部分类")]),a("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.parentListPop=!1}}})],1),a("v-uni-view",t._l(t.parentList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"all_item mt20",class:t.selectAllIndex==i&&"select_all_item",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.selectItem(e,i)}}},[t._v(t._s(e.name))])})),1)],1)],1):t._e()],1)},s=[]},"4c44":function(t,e,a){var i=a("5b74");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("be676888",i,!0,{sourceMap:!1,shadowMode:!1})},"50cd":function(t,e,a){"use strict";a.r(e);var i=a("4afd"),n=a("86c7");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("b8f6");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"7f2ff2a6",null,!1,i["a"],r);e["default"]=c.exports},"5b74":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-03696471]{background-color:#fff;justify-content:center}.btn[data-v-03696471]{width:44px;height:40px;position:relative}.btn .mix-icon[data-v-03696471]{font-size:20px;color:#333}.btn .dizhi[data-v-03696471]{width:%?34?%}.btn .msg[data-v-03696471]{position:absolute;right:7px;top:5px;width:12px;height:12px;background-color:#f5f5f5;border:2px solid #fff;border-radius:100px;opacity:0}.btn .msg.show[data-v-03696471]{opacity:1}.search-wrap[data-v-03696471]{font-size:14px;color:#999;border-radius:100px;background-color:#fff;display:flex;align-items:center;border:1px solid #f1f1f1;justify-content:space-between;width:95%}.search-wrap .search[data-v-03696471]{width:%?30?%;margin-right:%?10?%;margin-left:%?30?%}.search-wrap .icon-sousuo[data-v-03696471]{margin-right:6px;font-size:18px;color:#999}.search-wrap .yuyin[data-v-03696471]{width:%?58?%;margin-right:%?20?%}',""]),t.exports=e},"62c8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{keyWord:""}},props:{showFillView:{type:Boolean,default:!0},bgColor:{type:String,default:"#fff"}},computed:{statusBarHeight:function(){return this.systemInfo.statusBarHeight},navigationBarHeight:function(){return this.systemInfo.navigationBarHeight},customWidth:function(){return this.systemInfo.custom.width},customHeight:function(){return this.systemInfo.custom.height},headerPaddingRight:function(){return 0}},methods:{}};e.default=i},6789:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={specifications:a("6f536").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"info",class:t.pageFrom},[a("v-uni-image",{staticClass:"img",attrs:{src:t.info.defaultImage},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/ProductDetail/ProductDetail?id="+t.info.productId)}}}),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"name "},[t._v(t._s(t.info.productName))]),a("v-uni-view",{staticClass:"spec "},[a("v-uni-text",{staticClass:"s_detail"},[t._v(t._s(t.info.productModelList.join("/")))])],1),t.info.productTag?a("v-uni-view",{staticClass:"label row"},[a("v-uni-text",{staticClass:"l1"},[t._v("新品上市")]),a("v-uni-text",{staticClass:"l1"},[t._v("今日特价")])],1):t._e(),a("v-uni-view",{staticClass:"price row mt20"},[a("v-uni-view",{staticClass:"p_wrap"},[a("v-uni-view",{staticClass:"p_detail row"},[a("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),a("v-uni-text",{staticClass:"p_right"},[t._v(t._s(t.info.productSkuList[0].unitPrice)),a("v-uni-text",{staticClass:"unit"},[t._v("/"+t._s(t.info.productSkuList[0].productUnit))])],1)],1),a("v-uni-view",{staticClass:"sale "},[t._v("满100减10")])],1),a("v-uni-view",{staticClass:"select_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moreHandle.apply(void 0,arguments)}}},[t._v(t._s(t.showMore?"收起":"选规格"))])],1)],1)],1),t.showMore?a("v-uni-view",{staticClass:"more_list"},t._l(t.info.productSkuList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"price row mt10"},[a("v-uni-view",{staticClass:"p_detail"},[a("v-uni-view",{staticClass:"p_wrap "},[a("v-uni-text",{staticClass:"circle"},[t._v(t._s(e.productModel))]),a("v-uni-text",{staticClass:"desc"},[t._v(t._s(e.productNameAlias))]),a("v-uni-view",{staticClass:"p_detail row"},[a("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),a("v-uni-text",{staticClass:"p_right"},[t._v(t._s(e.unitPrice)),a("v-uni-text",{staticClass:"unit"},[t._v("/"+t._s(e.productUnit))])],1)],1),a("v-uni-view",{staticClass:"sale "},[t._v("满100减10")])],1)],1),a("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addGood(e)}}})],1)})),1):t._e(),a("specifications",{ref:"spec",attrs:{selectData:t.selectData}})],1)},s=[]},"69c4":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s={props:{info:{type:Object},styleType:{type:String,default:""},pageFrom:{type:String,default:""}},data:function(){return{moreIcon:"icon-xia",showMore:!1,selectData:{}}},methods:{moreHandle:function(){this.showMore=!this.showMore,this.moreIcon=this.showMore?"icon-shang":"icon-xia"},addGood:function(t){this.$util.isLogin()&&(this.selectData=(0,n.default)((0,n.default)({},t),{},{productName:this.info.productName,imageUrl:this.info.defaultImage}),this.$refs.spec.show=!0)}}};e.default=s},"6b75":function(t,e,a){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"6f536":function(t,e,a){"use strict";a.r(e);var i=a("4311"),n=a("d563");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("1055");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"16ee0094",null,!1,i["a"],r);e["default"]=c.exports},"86c7":function(t,e,a){"use strict";a.r(e);var i=a("0f2d"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"8f8e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.spec_wrap[data-v-16ee0094] .u-popup .u-transition{z-index:99998}.spec_wrap .con[data-v-16ee0094]{padding:%?30?%}.spec_wrap .con .info[data-v-16ee0094]{justify-content:center;margin-bottom:%?120?%}.spec_wrap .con .info uni-image[data-v-16ee0094]{margin-right:%?30?%;width:%?172?%;height:%?172?%}.spec_wrap .con .detail[data-v-16ee0094]{padding:%?30?%;border-top:1px solid #eee}.spec_wrap .con .detail .num_wrap uni-text[data-v-16ee0094]{background-color:#f6f6f6;padding:%?8?% %?16?%;color:#bebebe;font-size:%?28?%}.spec_wrap .con .detail .num_wrap[data-v-16ee0094] uni-input{background-color:#f6f6f6;padding:%?3?% %?18?%!important;width:%?50?%;margin:0 %?6?%}',""]),t.exports=e},ac34:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uInput:a("5e42").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"mix-page-header"},[a("v-uni-view",{staticClass:"content row"},[a("v-uni-view",{staticClass:"search-wrap row",style:{height:t.customHeight+"px"}},[a("v-uni-view",{staticClass:" row"},[a("v-uni-image",{staticClass:"search",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png",mode:"widthFix"}}),a("u-input",{attrs:{type:"text",border:"none",placeholder:"输入关键字搜索"},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}})],1),a("v-uni-image",{staticClass:"yuyin",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/yuyin%402x.png",mode:"widthFix"}})],1)],1)],1)},s=[]},b8f6:function(t,e,a){"use strict";var i=a("edd7"),n=a.n(i);n.a},c131:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.info[data-v-2823a056]{display:flex;flex-direction:row;padding:%?10?% %?30?% %?10?% %?50?%}.info .img[data-v-2823a056]{width:%?120?%;height:%?120?%;margin-right:%?40?%;flex-shrink:0}.info .detail[data-v-2823a056]{width:%?310?%;position:relative}.search_page[data-v-2823a056]{padding:%?10?% 0}.search_page .detail[data-v-2823a056]{width:%?580?%}.more_list[data-v-2823a056]{background-color:#fafafa;padding:%?40?% %?30?% %?30?% %?80?%}.name[data-v-2823a056]{font-size:%?32?%;color:#333}.desc[data-v-2823a056]{font-size:%?24?%;color:#999}.label .l1[data-v-2823a056]{background:#fff4ed;padding:%?4?% %?8?%;color:#fe5b07;font-size:%?20?%;border-radius:%?8?%;margin-right:%?10?%}.spec .s_tit[data-v-2823a056]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);padding:%?4?% %?10?%;color:#fff;font-size:%?20?%;border-radius:2px 0 0 2px}.spec .s_detail[data-v-2823a056]{color:#999;font-size:%?22?%}.price[data-v-2823a056]{justify-content:space-between;width:100%;position:relative}.price .p_detail[data-v-2823a056]{color:#fe5b07}.price .p_detail .circle[data-v-2823a056]{background-color:#fbceaa;padding:%?6?%;color:#8f5231;font-size:%?20?%;border-radius:%?4?%;margin-right:%?20?%}.price .p_detail .p_left[data-v-2823a056]{font-size:%?16?%}.price .p_detail .p_right[data-v-2823a056]{font-size:%?32?%}.price .p_detail .p_right .unit[data-v-2823a056]{font-size:%?20?%}.price .select_btn[data-v-2823a056]{background:#ff6304;border-radius:%?30?%;color:#fff;font-size:%?24?%;padding:%?8?% %?20?%}.price .show_more[data-v-2823a056]{color:#fe5b07;font-size:%?20?%;position:absolute;right:%?50?%}.price .show_more .iconfont[data-v-2823a056]{font-size:%?20?%}.price .add[data-v-2823a056]{width:%?44?%;height:%?44?%}.collect[data-v-2823a056]{position:absolute;font-size:%?20?%;color:#999;top:0;right:0}.collect .coll_img[data-v-2823a056]{width:%?28?%}.sale[data-v-2823a056]{padding:%?4?% %?10?%;color:#fe5b07;border:1px solid #fe5b07;font-size:%?20?%;border-radius:%?8?%;display:inline-block}',""]),t.exports=e},c762:function(t,e,a){"use strict";a.r(e);var i=a("6789"),n=a("fa5b");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("eae4");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"2823a056",null,!1,i["a"],r);e["default"]=c.exports},d563:function(t,e,a){"use strict";a.r(e);var i=a("2826"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},d70f:function(t,e,a){var i=a("8f8e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d2a907a8",i,!0,{sourceMap:!1,shadowMode:!1})},eae4:function(t,e,a){"use strict";var i=a("295b"),n=a.n(i);n.a},edd7:function(t,e,a){var i=a("419b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("b4d373ea",i,!0,{sourceMap:!1,shadowMode:!1})},fa5b:function(t,e,a){"use strict";a.r(e);var i=a("69c4"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},ffa3:function(t,e,a){"use strict";var i=a("4c44"),n=a.n(i);n.a}}]);