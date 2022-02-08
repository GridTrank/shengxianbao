require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/ProductDetail/ProductDetail"],{600:function(t,e,n){"use strict";(function(t){n(5);r(n(3));var e=r(n(601));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},601:function(t,e,n){"use strict";n.r(e);var r=n(602),i=n(604);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(606),n(608);var u,o=n(11),c=Object(o["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"957eeea4",null,!1,r["components"],u);c.options.__file="pagesB/ProductDetail/ProductDetail.vue",e["default"]=c.exports},602:function(t,e,n){"use strict";n.r(e);var r=n(603);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},603:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=!1,u=[];i._withStripped=!0},604:function(t,e,n){"use strict";n.r(e);var r=n(605),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},605:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n(39));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,r,i,a,u){try{var o=t[a](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(t){c(a,r,i,u,o,"next",t)}function o(t){c(a,r,i,u,o,"throw",t)}u(void 0)}))}}var d=function(){n.e("pagesB/ProductDetail/components/detail-page-header").then(function(){return resolve(n(964))}.bind(null,n)).catch(n.oe)},f=function(){n.e("pagesB/ProductDetail/components/mix-swiper").then(function(){return resolve(n(971))}.bind(null,n)).catch(n.oe)},l=function(){n.e("pagesB/ProductDetail/components/bottom-operation").then(function(){return resolve(n(978))}.bind(null,n)).catch(n.oe)},p={components:{pageHeader:d,mixSwiper:f,bottomOperation:l},data:function(){return{currentSku:{},data:{images:[]},specActive:0,selectData:{},ratingData:{},id:"",skuId:""}},onLoad:function(t){this.id=t.id,this.skuId=t.skuId},onShow:function(){this.loadData()},onPageScroll:function(t){this.$refs.pageHeader&&this.$refs.pageHeader.pageScroll(t)},onShareAppMessage:function(t){return{title:this.data.title,path:"/pages/product/detail?id="+this.data._id,imageUrl:this.data.thumb}},methods:{loadData:function(){var t=this;return s(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http("api/pms/productcategory/getProductSkuIdInfo",{productId:t.id||7,productSkuId:t.skuId||""});case 2:n=e.sent,n.productImageVoList.forEach((function(t){t.src=t.imageUrl})),n.images=n.productImageVoList,i=n.productSkuList.findIndex((function(e){return e.productSkuId==t.skuId})),t.specActive=i>=0?i:0,t.selectData=u(u({},n.productSkuList[i>=0?i:0]),{},{productName:n.productName,imageUrl:n.productImageVoList[0].imageUrl}),t.data=n,t.$nextTick((function(){t.calcAnchor()}));case 10:case"end":return e.stop()}}),e)})))()},loadRating:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("rating","getDetailRating",{product_id:t.id});case 2:n=e.sent,t.ratingData=n,t.$nextTick((function(){t.calcAnchor()}));case 5:case"end":return e.stop()}}),e)})))()},selectSpec:function(t,e){this.specActive=e,this.selectData=Object.assign(this.selectData,t)},addToCart:function(){var e=this;this.$util.throttle(s(r.default.mark((function n(){var i,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.getConfirmData(),i){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.$request("cart","add",i,{showLoading:!0,login:!0});case 5:if(a=n.sent,a){n.next=8;break}return n.abrupt("return");case 8:e.log(a),e.$util.msg(a.msg),1===a.status&&(e.hidePopup("skuPopup"),e.$store.dispatch("getCartCount"),t.$emit("refreshCart"));case 11:case"end":return n.stop()}}),n)}))))},buyNow:function(){var t=this.getConfirmData();t&&(this.hidePopup("skuPopup"),this.navTo("/pages/order/createOrder?data="+JSON.stringify(t),{login:!0}))},setCurrentSku:function(t){this.currentSku=t},getConfirmData:function(){var t=this.currentSku._id?this.currentSku:this.data.sku[0];if(t.stock<=0||this.data.stock<=0)return this.$util.msg("库存不足"),!1;var e={product_id:this.data._id,number:this.$refs.skuPopup.buyNumber||1,sku:this.currentSku._id?this.currentSku:this.data.sku[0]};return e},calcAnchor:function(){var e=this;return s(r.default.mark((function n(){var i,a,u,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(e){t.createSelectorQuery().select("#rating").boundingClientRect((function(t){e(t)})).exec()}));case 2:i=n.sent,a=e.systemInfo.statusBarHeight+e.systemInfo.navigationBarHeight,u=(i?i.top:0)-a,o=(i?i.bottom:0)+t.upx2px(12)-a,e.$refs.pageHeader.anchorList[1].top=u,e.$refs.pageHeader.anchorList[2].top=o,[0,u,o];case 9:case"end":return n.stop()}}),n)})))()},addProductHistory:function(){var e=this.data,n=t.getStorageSync("productHistory");n||(n=[]);var r=n.findIndex((function(t){return t.id===e._id}));-1!==r&&n.splice(r,1),n.unshift({id:e._id,thumb:e.thumb}),t.setStorageSync("productHistory",n)},delHistory:function(){var e=t.getStorageSync("productHistory");if(e){var n=e.findIndex((function(t){return t._id===data._id}));-1!==n&&(e.splice(n,1),t.setStorageSync("productHistory",e))}},showPopup:function(t,e){this.$refs[t].open(e)},onOprationClick:function(t){this.showPopup("skuPopup",t)},doAppShare:function(){var e=this;this.$util.throttle(s(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i={provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:e.data.thumb,title:e.data.title,miniProgram:{id:"gh_3dada2e0f833",path:"/pages/product/detail?id="+e.data._id,type:0,webUrl:"http://guoyunnet.com"},success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}},t.share(i);case 2:case"end":return n.stop()}}),n)}))))}}};e.default=p}).call(this,n(1)["default"])},606:function(t,e,n){"use strict";n.r(e);var r=n(607),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},607:function(t,e,n){},608:function(t,e,n){"use strict";n.r(e);var r=n(609),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},609:function(t,e,n){}},[[600,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesB/ProductDetail/ProductDetail.js.map