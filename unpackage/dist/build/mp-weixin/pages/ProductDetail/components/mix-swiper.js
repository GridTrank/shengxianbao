(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ProductDetail/components/mix-swiper"],{"40d5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"MixProductDetailSwiper",data:function(){return{current:0,renderList:[]}},props:{list:{type:Array,default:function(){return[]}}},watch:{list:function(t){var n=this;this.renderList=t.map((function(t){return{loaded:!!n.loaded,src:t}})),this.loaded=!0}},methods:{onSwiperChange:function(t){this.current=t.detail.current},previewImage:function(n){t.previewImage({current:n,urls:this.list})},imageOnLoad:function(t,n){var e=this;setTimeout((function(){e.$set(t,"loaded",!0)}),100)}}};n.default=e}).call(this,e("543d")["default"])},"5cfb":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"7d45":function(t,n,e){"use strict";var r=e("8ce4"),u=e.n(r);u.a},"8ce4":function(t,n,e){},a39b:function(t,n,e){"use strict";e.r(n);var r=e("5cfb"),u=e("f4ad");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("7d45");var a,c=e("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"c3ffe41a",null,!1,r["a"],a);n["default"]=o.exports},f4ad:function(t,n,e){"use strict";e.r(n);var r=e("40d5"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ProductDetail/components/mix-swiper-create-component',
    {
        'pages/ProductDetail/components/mix-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a39b"))
        })
    },
    [['pages/ProductDetail/components/mix-swiper-create-component']]
]);
