(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Clientele-index"],{"00e8":function(e,t,n){"use strict";n.r(t);var i=n("54a2"),a=n("bf6b");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f5d2");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"37bbe120",null,!1,i["a"],r);t["default"]=u.exports},"04a0":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5e42")),o=i(n("9820")),r={name:"u--input",mixins:[uni.$u.mpMixin,o.default,uni.$u.mixin],components:{uvInput:a.default}};t.default=r},"0fa7":function(e,t,n){var i=n("2a7f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("af686c62",i,!0,{sourceMap:!1,shadowMode:!1})},2341:function(e,t,n){"use strict";n.r(t);var i=n("7ce3"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"27c5":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("38fc")),o={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],computed:{gapStyle:function(){var e={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}};t.default=o},"2a7f":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n.u-reset-button[data-v-4722e3f7]{width:100%}.u-action-sheet[data-v-4722e3f7]{text-align:center}.u-action-sheet__header[data-v-4722e3f7]{position:relative;padding:12px 30px}.u-action-sheet__header__title[data-v-4722e3f7]{font-size:16px;color:#303133;font-weight:700;text-align:center}.u-action-sheet__header__icon-wrap[data-v-4722e3f7]{position:absolute;right:15px;top:15px}.u-action-sheet__description[data-v-4722e3f7]{font-size:13px;color:#909193;margin:18px 15px;text-align:center}.u-action-sheet__item-wrap__item[data-v-4722e3f7]{padding:15px;\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;justify-content:center;flex-direction:column}.u-action-sheet__item-wrap__item__name[data-v-4722e3f7]{font-size:16px;color:#303133;text-align:center}.u-action-sheet__item-wrap__item__subname[data-v-4722e3f7]{font-size:13px;color:#c0c4cc;margin-top:10px;text-align:center}.u-action-sheet__cancel-text[data-v-4722e3f7]{font-size:16px;color:#606266;text-align:center;padding:16px}.u-action-sheet--hover[data-v-4722e3f7]{background-color:#f2f3f5}',""]),e.exports=t},"2bd8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uPopup:n("cbea").default,uIcon:n("eb19").default,uLine:n("900b").default,uLoadingIcon:n("e89c").default,uGap:n("e4ba").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("u-popup",{attrs:{show:e.show,mode:"bottom",closeOnClickOverlay:e.closeOnClickOverlay,safeAreaInsetBottom:e.safeAreaInsetBottom,round:e.round},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-action-sheet"},[e.title?n("v-uni-view",{staticClass:"u-action-sheet__header"},[n("v-uni-text",{staticClass:"u-action-sheet__header__title u-line-1"},[e._v(e._s(e.title))]),n("v-uni-view",{staticClass:"u-action-sheet__header__icon-wrap",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"close",size:"17",color:"#c8c9cc",bold:!0}})],1)],1):e._e(),e.description?n("v-uni-text",{staticClass:"u-action-sheet__description",style:[{marginTop:""+(e.title&&e.description?0:"18px")}]},[e._v(e._s(e.description))]):e._e(),e._t("default",[e.description?n("u-line"):e._e(),n("v-uni-view",{staticClass:"u-action-sheet__item-wrap"},[e._l(e.actions,(function(t,i){return[n("v-uni-view",{staticClass:"u-action-sheet__item-wrap__item",attrs:{"hover-class":t.disabled||t.loading?"":"u-action-sheet--hover","hover-stay-time":150},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.selectHandler(i)}}},[t.loading?n("u-loading-icon",{attrs:{"custom-class":"van-action-sheet__loading",size:"18",mode:"circle"}}):[n("v-uni-text",{staticClass:"u-action-sheet__item-wrap__item__name",style:[e.itemStyle(i)]},[e._v(e._s(t.name))]),t.subname?n("v-uni-text",{staticClass:"u-action-sheet__item-wrap__item__subname"},[e._v(e._s(t.subname))]):e._e()]],2),i!==e.actions.length-1?n("u-line"):e._e()]}))],2)]),e.cancelText?n("u-gap",{attrs:{bgColor:"#eaeaec",height:"6"}}):e._e(),n("v-uni-view",{attrs:{"hover-class":"u-action-sheet--hover"}},[e.cancelText?n("v-uni-text",{staticClass:"u-action-sheet__cancel-text",attrs:{"hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))]):e._e()],1)],2)],1)},o=[]},3785:function(e,t,n){"use strict";var i=n("0fa7"),a=n.n(i);a.a},"38fc":function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};t.default=i},"3a2f":function(e,t,n){"use strict";n.r(t);var i=n("4033"),a=n("54a1");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=u.exports},4033:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uvInput",{attrs:{value:e.value,type:e.type,fixed:e.fixed,disabled:e.disabled,disabledColor:e.disabledColor,clearable:e.clearable,password:e.password,maxlength:e.maxlength,placeholder:e.placeholder,placeholderClass:e.placeholderClass,placeholderStyle:e.placeholderStyle,showWordLimit:e.showWordLimit,confirmType:e.confirmType,confirmHold:e.confirmHold,holdKeyboard:e.holdKeyboard,focus:e.focus,autoBlur:e.autoBlur,disableDefaultPadding:e.disableDefaultPadding,cursor:e.cursor,cursorSpacing:e.cursorSpacing,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,inputAlign:e.inputAlign,autosize:e.autosize,fontSize:e.fontSize,color:e.color,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,suffixIconStyle:e.suffixIconStyle,prefixIconStyle:e.prefixIconStyle,border:e.border,readonly:e.readonly,shape:e.shape,customStyle:e.customStyle,formatter:e.formatter},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("focus")},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("blur")},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("keyboardheightchange")},change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("change",t)}.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("input",t)}.apply(void 0,arguments)},clear:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("clear")},click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("click")}}})},o=[]},4593:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-37bbe120]{padding-bottom:%?250?%}.page_wrap[data-v-37bbe120] .u-form-item{background-color:#fff;padding:0 %?30?%}.page_wrap .upload_wrap[data-v-37bbe120]{width:100%;padding-bottom:%?20?%}.page_wrap .textarea[data-v-37bbe120]{padding:0;width:%?200?%}.page_wrap .upload_img[data-v-37bbe120]{width:%?528?%;height:%?320?%;border:1px dashed #cecece;display:flex;justify-content:center;align-items:center;flex-direction:column;color:#aaa;font-size:%?28?%}.page_wrap .upload_img .upload_icon[data-v-37bbe120]{font-size:%?60?%}.page_wrap .address[data-v-37bbe120]{flex-shrink:0;width:100%}.page_wrap .icon[data-v-37bbe120]{width:%?28?%}.page_wrap .from_item[data-v-37bbe120]{height:%?60?%}.page_wrap .btn_wrap[data-v-37bbe120]{position:fixed;bottom:0;padding:%?30?% 0;left:0;width:100%;background-color:#fff}.page_wrap .btn_wrap .btn[data-v-37bbe120]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);width:90%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?32?%;margin:auto;border-radius:%?48?%}',""]),e.exports=t},4762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{openType:String},methods:{onGetUserInfo:function(e){this.$emit("getuserinfo",e.detail)},onContact:function(e){this.$emit("contact",e.detail)},onGetPhoneNumber:function(e){this.$emit("getphonenumber",e.detail)},onError:function(e){this.$emit("error",e.detail)},onLaunchApp:function(e){this.$emit("launchapp",e.detail)},onOpenSetting:function(e){this.$emit("opensetting",e.detail)}}};t.default=i},"54a1":function(e,t,n){"use strict";n.r(t);var i=n("04a0"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"54a2":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={"u-Form":n("598c").default,uFormItem:n("b0af").default,"u-Input":n("3a2f").default,uIcon:n("eb19").default,"u-Textarea":n("ed83").default,uActionSheet:n("7437").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page_wrap"},[n("u--form",{ref:"userInfo",attrs:{labelWidth:120,labelStyle:{height:"60upx"},rules:e.rules,model:e.userInfo}},[n("u-form-item",{ref:"item1",attrs:{label:"客户名称",prop:"customerName",borderBottom:!0}},[n("u--input",{staticClass:"from_item",attrs:{border:"none",placeholder:"请输入客户名称"},model:{value:e.userInfo.customerName,callback:function(t){e.$set(e.userInfo,"customerName",t)},expression:"userInfo.customerName"}})],1),n("u-form-item",{ref:"item1",attrs:{label:"客户类型",prop:"customerTypeId",borderBottom:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showActionSheet("customerType")}}},[n("u--input",{staticClass:"from_item",attrs:{disabled:!0,disabledColor:"#ffffff",placeholder:"请选择客户类型",border:"none"},model:{value:e.userInfo.customerType,callback:function(t){e.$set(e.userInfo,"customerType",t)},expression:"userInfo.customerType"}}),n("u-icon",{attrs:{slot:"right",name:"arrow-right"},slot:"right"})],1),n("u-form-item",{ref:"item1",attrs:{label:"联系人",prop:"customerContact",borderBottom:!0}},[n("u--input",{staticClass:"from_item",attrs:{border:"none",placeholder:"请输入联系人"},model:{value:e.userInfo.customerContact,callback:function(t){e.$set(e.userInfo,"customerContact",t)},expression:"userInfo.customerContact"}})],1),n("u-form-item",{ref:"item1",attrs:{label:"联系电话",prop:"telephone",borderBottom:!0}},[n("u--input",{staticClass:"from_item",attrs:{border:"none",placeholder:"请输入联系电话"},model:{value:e.userInfo.telephone,callback:function(t){e.$set(e.userInfo,"telephone",t)},expression:"userInfo.telephone"}})],1),n("u-form-item",{ref:"item1",staticClass:"mt20",staticStyle:{"margin-top":"10px"},attrs:{label:"详细地址",prop:"addrDetails",borderBottom:!0}},[n("v-uni-view",{staticClass:"mt20 address row jc_sb"},[n("u--textarea",{staticClass:"textarea",attrs:{height:"50",placeholder:"请输入详细地址或直接定位",border:"none"},model:{value:e.userInfo.addrDetails,callback:function(t){e.$set(e.userInfo,"addrDetails",t)},expression:"userInfo.addrDetails"}}),n("v-uni-image",{staticClass:"icon",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/icon_region.png",mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pagesB/ChooseAddress/index")}}})],1)],1),n("u-form-item",{ref:"item1",attrs:{label:"收货时间",prop:"deliveryTime"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showActionSheet("deliveryTime")}}},[n("u--input",{staticClass:"from_item",attrs:{disabled:!0,disabledColor:"#ffffff",placeholder:"请选择收货时间",border:"none"},model:{value:e.userInfo.deliveryTime,callback:function(t){e.$set(e.userInfo,"deliveryTime",t)},expression:"userInfo.deliveryTime"}}),n("u-icon",{attrs:{slot:"right",name:"arrow-right"},slot:"right"})],1),n("u-form-item",{ref:"item1",staticClass:"mt20",attrs:{labelPosition:"top",prop:"customerBusinessLicenseUrl"}},[n("v-uni-view",{staticClass:"upload_wrap"},[n("v-uni-view",{staticClass:"f28-c333"},[e._v("上传营业执照")]),n("v-uni-view",{staticClass:"column"},[e.userInfo.customerBusinessLicenseUrl?n("v-uni-view",{staticClass:"upload_img mt40"},[n("v-uni-image",{attrs:{src:e.userInfo.customerBusinessLicenseUrl,mode:"heightFix"}})],1):n("v-uni-view",{staticClass:"upload_img mt40",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[n("span",{staticClass:"upload_icon"},[e._v("+")]),n("v-uni-view",[e._v("点击拍摄/上传图片")])],1)],1)],1)],1),n("u-form-item",{ref:"item1",staticClass:"mt20",attrs:{label:"邀请码",prop:"inviteCode"}},[n("u--input",{staticClass:"from_item",attrs:{border:"none",placeholder:"请输入邀请码（选填）"},model:{value:e.userInfo.inviteCode,callback:function(t){e.$set(e.userInfo,"inviteCode",t)},expression:"userInfo.inviteCode"}})],1)],1),n("v-uni-view",{staticClass:"btn_wrap"},[n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1),n("u-action-sheet",{attrs:{show:e.showSheet,actions:e.actions,title:"请选择"+("customerType"==e.actionSheetType?"客户类型":"收货时间")},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.showSheet=!1},select:function(t){arguments[0]=t=e.$handleEvent(t),e.select.apply(void 0,arguments)}}})],1)},o=[]},7437:function(e,t,n){"use strict";n.r(t);var i=n("2bd8"),a=n("2341");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("3785");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4722e3f7",null,!1,i["a"],r);t["default"]=u.exports},"77a5":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-gap",style:[e.gapStyle]})},o=[]},"7cdc":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n',""]),e.exports=t},"7ce3":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("4762")),o=i(n("cd56")),r=i(n("9c8d")),s={name:"u-action-sheet",mixins:[a.default,o.default,uni.$u.mixin,r.default],data:function(){return{}},computed:{itemStyle:function(){var e=this;return function(t){var n={};return e.actions[t].color&&(n.color=e.actions[t].color),e.actions[t].fontSize&&(n.fontSize=uni.$u.addUnit(e.actions[t].fontSize)),e.actions[t].disabled&&(n.color="#c0c4cc"),n}}},methods:{close:function(){this.closeOnClickOverlay&&this.$emit("close")},selectHandler:function(e){var t=this.actions[e];!t||t.disabled||t.loading||(this.$emit("select",t),this.closeOnClickAction&&this.$emit("close"))}}};t.default=s},"8e33":function(e,t,n){var i=n("4593");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("113e214c",i,!0,{sourceMap:!1,shadowMode:!1})},"9c8d":function(e,t,n){"use strict";n("a4d3"),n("e01a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{show:{type:Boolean,default:uni.$u.props.actionSheet.show},title:{type:String,default:uni.$u.props.actionSheet.title},description:{type:String,default:uni.$u.props.actionSheet.description},actions:{type:Array,default:uni.$u.props.actionSheet.actions},cancelText:{type:String,default:uni.$u.props.actionSheet.cancelText},closeOnClickAction:{type:Boolean,default:uni.$u.props.actionSheet.closeOnClickAction},safeAreaInsetBottom:{type:Boolean,default:uni.$u.props.actionSheet.safeAreaInsetBottom},openType:{type:String,default:uni.$u.props.actionSheet.openType},closeOnClickOverlay:{type:Boolean,default:uni.$u.props.actionSheet.closeOnClickOverlay},round:{type:Boolean,default:uni.$u.props.actionSheet.round}}};t.default=i},bf6b:function(e,t,n){"use strict";n.r(t);var i=n("ee4b"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},cd56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};t.default=i},e277:function(e,t,n){"use strict";n.r(t);var i=n("27c5"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},e4ba:function(e,t,n){"use strict";n.r(t);var i=n("77a5"),a=n("e277");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f4c9");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"72836044",null,!1,i["a"],r);t["default"]=u.exports},ee4b:function(e,t,n){"use strict";var i=n("4ea4");n("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("cf39")),o={data:function(){return{baseUrl:a.default,showSheet:!1,rules:{customerName:{type:"string",required:!0,message:"请填写客户名称",trigger:["blur","change"]},customerTypeId:{type:"string",required:!0,message:"请选择客户类型",trigger:["blur","change"]},customerContact:{type:"string",required:!0,message:"请填写联系人",trigger:["blur","change"]},telephone:{type:"string",required:!0,max:11,message:"请填写联系电话",trigger:["blur","change"]},addrDetails:{type:"string",required:!0,message:"请填写详细地址",trigger:["blur","change"]},deliveryTime:{type:"string",required:!0,message:"请选择收货时间",trigger:["blur","change"]},customerBusinessLicenseUrl:{type:"string",required:!0,message:"请上传营业执照",trigger:["blur","change"]}},userInfo:{addrDetails:"",addrReference:"",areaId:0,customerBusinessLicenseUrl:"",customerBusinessLicenser:"",customerContact:"",customerName:"",customerTypeId:1,customerType:"",customerUrl:"",deliveryTime:"",inviteCode:"",latitude:"",longitude:"",telephone:""},actions:[],radio:"",fileList:[],switchVal:!1,customerType:[],customerTime:[],actionSheetType:"customerType"}},created:function(){this.getType(),this.getTime()},methods:{showActionSheet:function(e){this.actionSheetType=e,this.actions="customerType"==e?this.customerType:this.customerTime,this.showSheet=!0},select:function(e){this.userInfo[this.actionSheetType]=e.name,"customerType"==this.actionSheetType?(this.userInfo.customerTypeId=e.id,this.$refs.userInfo.validateField("customerTypeId")):this.$refs.userInfo.validateField(this.actionSheetType)},getType:function(){var e=this;this.$http("api/getCustomerTypeList").then((function(t){t=t||[],e.customerType=t.map((function(e){return{name:e.customerType,id:e.id}}))}))},getTime:function(){var e=this;this.$http("api/getReceivingTimeList").then((function(t){t=t||[],e.customerTime=t.map((function(e){return{name:e.startDate+"~"+e.endDate}}))}))},setAddress:function(e){this.userInfo.addrDetails=e.address+e.room,this.userInfo.latitude=e.location.lat,this.userInfo.longitude=e.location.lng},chooseImage:function(e){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var n=e.tempFilePaths;t.userInfo.customerBusinessLicenseUrl=n[0],uni.uploadFile({url:t.baseUrl+"api/sys/oss/uploadFile",filePath:n[0],name:"file",header:{"content-type":"application/x-www-form-urlencoded",token:uni.getStorageSync("token")||""},success:function(e){console.log(e.data)}})}})},submit:function(){var e=this;this.$refs.userInfo.validate().then((function(t){e.$http("api/customer/updateCustomer",e.userInfo,"post").then((function(t){uni.showToast({title:"认证成功",icon:"none"}),setTimeout((function(){e.navTo("/pages/Home/Home","switch")}),1500)}))})).catch((function(e){uni.$u.toast("校验失败")}))}}};t.default=o},f4c9:function(e,t,n){"use strict";var i=n("f75c"),a=n.n(i);a.a},f5d2:function(e,t,n){"use strict";var i=n("8e33"),a=n.n(i);a.a},f75c:function(e,t,n){var i=n("7cdc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("006f65e9",i,!0,{sourceMap:!1,shadowMode:!1})}}]);