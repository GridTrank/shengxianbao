<template>
	<view class="page_wrap">
		<view class="wrap jc_sb row " @click="selectDeliType">
			<text class="f28-c333">配送方式</text>
			<text class="f28-c999 ">{{shipMethod}}<text class="iconfont icon-jinru"></text></text>
		</view>
		<!-- 地址 -->
		<view class="wrap jc_sb row mt20 second">
			<text class="f28-c333">{{deliveryTypeId==4?'配送':'自提'}}地址</text>
			<!-- 配送地址 -->
			<view class="user_info" v-if="isSelectDeliAddress">
				<view class="row info">
					<text class="f32-c333 name">{{addressDetail.accepter || addressDetail.pointName}}</text>
					<text class="f28-c999 phone">{{addressDetail.telephone || addressDetail.contactsPhone}}</text>
					<!-- <text class="moren">默认</text> -->
				</view>
				<view class="address mt20 row jc_sb"
					@click="navTo('/pagesB/Address/Address?pageType=confirmOrder&type='+deliveryTypeId)">
					<text class="txt f28-c333">{{addressDetail.addrDetails || addressDetail.pointAddr}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<!-- 自提点 -->
			<view v-else class="user_info">
				<view class="row jc_sb"
					@click="navTo('/pagesB/Address/Address?pageType=confirmOrder&type='+deliveryTypeId)">
					<text class="txt f28-c333">请选择自提点</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
		</view>
		<image class="fg_img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dzfg.png" ></image>
		<!-- 配送日期 -->
		<view class="wrap time ">
			<view class="dist row jc_sb">
				<text class="f28-c333">{{deliveryTypeId==4?'配送':'自提'}}日期</text>
				<view class="date_list row">
					<view 
					:class="['date_item',{active:dateIndex===index}]"
					@click="selectDelDate(item,index)"
					v-for="(item,index) in dateList" 
					:key="index">
						<text class="date">{{item.date}}</text>
						<text class="week">{{index==0?'明天':index==1?'后天':item.week}}</text>
					</view>
					<text class="iconfont icon-jinru f28-c333"  @click="showDate(1)"></text>
				</view>
			</view>
		</view>
		<!-- 配送时间 -->
		<view class="wrap time mt20">
			<view class="dist row jc_sb" @click="showDate(2)">
				<text class="f28-c333">{{deliveryTypeId==4?'配送':'自提'}}时间</text>
				<text class=" f28-dc">{{shipTime || '请选择配送时间'}}<text v-if="!isSelfMethod" class="iconfont icon-jinru f28-c333"></text>
				</text>
			</view>
			<view class="goods row jc_sb mt30">
				<view class="goods_img row">
					<image v-for="(img,i) in orderDetail.orderBillProductImageList" :key="i" :src="img" mode="">
					</image>
				</view>
				<text v-if="orderDetail.orderBillProductImageList" class="f28-c999">
					共{{orderDetail.orderBillProductImageList.length}}件
				</text>
			</view>
		</view>
		<!-- 小费 -->
		<view class="wrap jc_sb row mt20" v-if="deliveryTypeId==4">
			<view class="tip">
				<view class="f28-c333">司机小费</view>
				<view class="f24-c999 mt10">您所给的小费100%归司机所有</view>
			</view>
			<view class="money row">
				<view :class="['n',selectTip===index && 'select_tip']" @click="selectTipHandle(item,index)"
					v-for="(item,index) in tipMoney" :key="index">
					￥{{item.tipsAmount}}
				</view>
				<u-input class="n" border='none' type="text" placeholder="自定" v-model="customTip" />
			</view>
		</view>
		<!-- 支付方式 -->
		<view class="wrap mt20 pay_method">
			<text class="tit f28-c333">支付方式</text>
			<view class="list">
				<view v-for="(item,index) in payList" :key='index' class="item row jc_sb "
					@click="selectPayHandle(item,index)">
					<view class="left row">
						<image class="l_img" :src="item.paymentUrl || 'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/payDef.png'" mode="widthFix"></image>
						<text class="f28-c333">{{item.paymentName}}</text>
						<text class="ml30 ye" v-if="item.id==6">({{userInfo.customerBalance}})</text>
					</view>
					<image class="right"
						:src="item.checked?'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png':'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png'"
						mode=""></image>
				</view>
			</view>
			<view class="arrears row" v-if="userInfo.debtAmount>0">
				欠款：<text class="m">-￥{{userInfo.debtAmount}}</text>
			</view>
		</view>
		<!-- 费用明细 -->
		<view class="wrap expense_detail mt20">
			<view class="dist row jc_sb">
				<text class="f28-c333">商品总价</text>
				<text class="f28-c333">¥{{orderDetail.goodsAmount}}</text>
			</view>
			<view class="dist row jc_sb">
				<text class="f28-c333">运费</text>
				<text class="f28-c333">¥{{orderDetail.logisticsAmount}}</text>
			</view>
			<view class="dist row jc_sb" v-if="deliveryTypeId==4">
				<text class="f28-c333">司机小费</text>
				<text class="f28-c333">¥{{selectTipMoney || 0}}</text>
			</view>
			<view class="dist row coupon jc_sb"
				@click="navTo('/pagesA/Coupon/index?goodsAmount='+ orderDetail.goodsAmount+'&pageType=orderDetail')">
				<text class="f28-c333">优惠券</text>
				<text class="f28-c333 m">¥{{ticketAmount}}
					<text class="iconfont icon-jinru"></text>
				</text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="wrap remark mt20">
			<view class="row jc_sb">
				<text class="f28-c333 left">备注</text>
				<u-input placeholder='请输入备注(选填)' v-model="remark" border='none'></u-input>
			</view>
		</view>
		<!-- 底部 -->
		<view class="foot wrap row ">
			<view class="left row"> <text>¥{{totalAmount}}</text> <text class="f24-c333">(含运费)</text></view>
			<view class=" f24-c333">优惠 <text>¥{{ticketAmount}}</text> </view>
			<view class="btn_default" @click="submitOrder">支付</view>
		</view>
		<jPicker ref='jPicker' title='配送方式' :options="columns" valKey='dictValue' showKey="dictLabel" @sure='confirm'>
		</jPicker>

		<!-- 时间日期选择 -->
		<itmister-date-picker ref="dateEl" @dateConfirm="dateConfirm"></itmister-date-picker>
		<!-- 配送时间段 -->
		<u-action-sheet 
		title="请选择时间段"
		:show="showSheet" 
		:actions="customerTime"
			@close="showSheet = false"
			@select="selectTimeList">
		</u-action-sheet>
		<password ref="password" @passwordSub="passwordSub"></password>
	</view>
</template>

<script>
	import password from '@/components/password/password'
	import {
		date
	} from "@/common/js/util"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				showPicker: true,
				shipMethod: '',
				deliveryTypeId: '4',
				columns: [],
				listType: '',
				addressDetail: {},
				orderDetail: {},
				tipMoney: [],
				customTip: '',
				selectTip: '',
				selectTipMoney: '',
				selectPayId: '',
				ticketAmount: 0,
				isSelectDeliAddress: true,
				payList: [{
						label: '微信',
						src: 'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/wx.png',
						checked: false,
						type: 'weixin'
					},
					{
						label: '支付宝',
						src: 'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/zfb.png',
						checked: false,
						type: 'apliay'
					},
					{
						label: '银联',
						src: 'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/yhk.png',
						checked: false,
						type: 'card'
					},
					{
						label: '余额',
						src: 'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/yhk.png',
						checked: false,
						type: 'card'
					},
				],
				balancePsw:'',//余额密码
				remark: '',
				shipDay:'',
				shipDate:'',
				userInfo: {},
				totalAmount: 0,
				comAmount: '',
				dateList:[],
				dateIndex:0,
				showSheet:false,
				customerTime:[],
				isSelfMethod:false
			};
		},
		components:{
			password
		},
		watch: {
			"customTip": function(val) {
				this.selectTip = ''
				this.selectTipMoney = val
				let money = this.comAmount
				let m = Number(money) + Number(val)
				this.totalAmount = m.toFixed(2)
				this.SET_ORDER_DATA({
					customTip: val
				})
			}
		},
		computed: {
			...mapState(['$orderData']),
			shipTime(){
				return this.shipDay+' '+this.shipDate
			}
		},
		onLoad(e) {
			this.getDetail(e.ids)
			
			// 初始化订单数据
			this.INIT_ORDER_DATA()
			this.getDateList()
			this.getDelTimeList()
		},
		onShow() {
			let that = this
			// 有选择优惠券
			if (that.$orderData.couponAmount && that.$orderData.couponAmount > 0) {
				let data = that.orderDetail
				let orderData = that.$orderData
				that.ticketAmount = that.$orderData.couponAmount
				that.totalAmount = that.comAmount = (data.goodsAmount + data.logisticsAmount - that.ticketAmount).toFixed(
					2)
				that.SET_ORDER_DATA({
					couponAmount: 0
				})
				// 有选择小费
				if (orderData.selectTip && orderData.selectTip > 0) {
					that.selectTip = orderData.selectTip
					that.totalAmount = (Number(that.totalAmount) + Number(orderData.selectTipMoney)).toFixed(2)
				}
				// 有自定义小费
				if (orderData.customTip) {
					that.customTip = orderData.customTip
					that.selectTip = ''
					that.selectTipMoney = orderData.customTip
					that.totalAmount = (Number(that.totalAmount) + Number(orderData.customTip)).toFixed(2)
				}
			}
			// 修改了地址
			if (that.$orderData.addressDetail) {
				that.addressDetail = that.$orderData.addressDetail
				if(that.deliveryTypeId!=4){
					that.shipDate=that.addressDetail.pickupTime
				}
				this.isSelectDeliAddress = true
			}

		},
		methods: {
			...mapMutations(['SET_ORDER_DATA', 'INIT_ORDER_DATA']),
			// 详情
			getDetail(ids) {
				let productSkuIdList = ids.split(',')
				this.$http('api/oms/order/settleAccounts', {
					productSkuIdList
				}, 'post').then(res => {
					this.orderDetail = res
					this.SET_ORDER_DATA({
						goodsAmount: res.goodsAmount
					})
					this.totalAmount = this.comAmount = (res.goodsAmount + res.logisticsAmount).toFixed(2)
				})
				this.getMyInfo()
				this.getPayMethod()
				this.getAddressList()
				this.getTipsList()
				this.getDictData()
			},
			// 配送日期
			getDateList(){
				let time=new Date().getTime()
				let d1=date('m/d ',new Date().getTime()+(24*60*60*1000))
				let y1=date('Y-m-d ',new Date().getTime()+(24*60*60*1000))
				
				let d2=date('m/d ',new Date().getTime()+(24*60*60*1000)*2)
				let y2=date('Y-m-d ',new Date().getTime()+(24*60*60*1000)*2)
				
				let d3=date('m/d ',new Date().getTime()+(24*60*60*1000)*3)
				let y3=date('Y-m-d ',new Date().getTime()+(24*60*60*1000)*3)
				
				let d4=date('m/d ',new Date().getTime()+(24*60*60*1000)*4)
				let y4=date('Y-m-d ',new Date().getTime()+(24*60*60*1000)*4)
				
				let d5=date('m/d ',new Date().getTime()+(24*60*60*1000)*5)
				let y5=date('Y-m-d ',new Date().getTime()+(24*60*60*1000)*5)
				
				let w1=this.getWeek(new Date(y1))
				let w2=this.getWeek(new Date(y2))
				let w3=this.getWeek(new Date(y3))
				let w4=this.getWeek(new Date(y4))
				let w5=this.getWeek(new Date(y5))
				this.shipDay=y1
				this.dateList=[
					{date:d1,week:w1,year:y1},
					{date:d2,week:w2,year:y2},
					{date:d3,week:w3,year:y3},
					{date:d4,week:w4,year:y4},
					{date:d5,week:w5,year:y5},
				]
			},
			getWeek(timedat) {  //timedat参数格式：   getWeek（new Date("2017-10-27" )）
			    var week;
			    if(timedat.getDay() == 0) week = "周日"
			    if(timedat.getDay() == 1) week = "周一"
			    if(timedat.getDay() == 2) week = "周二"
			    if(timedat.getDay() == 3) week = "周三"
			    if(timedat.getDay() == 4) week = "周四"
			    if(timedat.getDay() == 5) week = "周五"
			    if(timedat.getDay() == 6) week = "周六"
			    return week;  
			},
			// 选择日期
			selectDelDate(item,index){
				this.dateIndex=index
				this.shipDay=item.year
			},
			showDate(val){
				if(val==1){
					this.$refs.dateEl.show();
				}else{
					if(this.deliveryTypeId==4){
						this.showSheet=true
					}
				}
			},
			// 选择更多日期
			dateConfirm(date){
				this.shipDay=date
				this.dateIndex=''
			},
			
			// 选择配送时间段
			selectTimeList(e){
				this.shipDate=e.name
			},
			// 获取配送时间段
			getDelTimeList(){
				this.$http('api/getReceivingTimeList').then(res => {
					res = res || [];
					this.customerTime = res.map(item => {
						return {
							name: item.startDate + '-' + item.endDate
						}
					});
					this.shipDate=this.customerTime[0].name
				})
			},
			// 获取支付方式
			getPayMethod() {
				this.$http('api/basepayment/payWayList').then(res => {
					res.forEach(item => {
						item.checked = false
					})
					this.payList = res
				})
			},
			// 获取个人信息
			getMyInfo() {
				this.$http('api/myOneslft/getMyInfo', '', 'post').then(res => {
					this.userInfo = res
				})
			},
			// 获取地址
			getAddressList() {
				this.queryUrl = this.deliveryTypeId == 4 ? 'api/myOneslft/getCustomerAddrList' :
					'api/bmallpickuppoint/page'
				this.getList().then(res => {
					if (this.deliveryTypeId == 4) {
						this.addressDetail = res.filter(item => {
							return item.defaultAddr == 1
						})[0]
					}
				})
			},
			// 获取小费
			getTipsList() {
				this.$http('api/oms/order/tipsList', {}, 'post').then(res => {
					this.tipMoney = res
				})
			},
			// 选择小费
			selectTipHandle(item, index) {
				let money = this.comAmount
				this.selectTip = index
				this.selectTipMoney = item.tipsAmount
				let m = Number(money) + Number(item.tipsAmount)
				this.totalAmount = m.toFixed(2)
				this.SET_ORDER_DATA({
					selectTipMoney: item.tipsAmount,
					selectTip: index
				})
			},
			// 选择支付方式
			selectPayHandle(item, index) {
				this.selectPayId = item.id
				this.payList.forEach((el, e) => {
					if (e == index) {
						item.checked = !item.checked
					} else {
						el.checked = false
					}
				})
			},
			// 弹出配送方式
			selectDeliType() {
				this.$refs.jPicker.pickerVisable = true
			},
			// 选择配送方式
			confirm(e) {
				this.shipMethod = e.dictLabel
				this.getAddressList()
				this.deliveryTypeId = e.dictValue
				this.isSelectDeliAddress = e.dictValue == 4 ? true : false
				this.isSelfMethod=e.dictValue == 4 ? false : true
			},
			passwordSub(password){
				this.balancePsw = password;
				this.submitOrder();
			},
			// 支付
			submitOrder() {
				let that = this
				if (!that.shipTime) {
					uni.showToast({
						title: '请选择配送时间',
						icon: 'none'
					})
					return
				}
				if (!that.selectPayId) {
					uni.showToast({
						title: '请选择支付方式',
						icon: 'none'
					})
					return
				}else if(that.selectPayId == 6 && that.balancePsw.length < 6){
					// 余额支付
					this.$refs.password.open();
					return;
					
				}
				uni.showModal({
					title: '提示',
					content: '确认支付吗？',
					success: (res) => {
						if (res.confirm) {
							let orderData = that.$orderData
							let data = {
								"actualAmount": Number(that.totalAmount),
								"addressId": orderData.id || that.addressDetail.id, //地址
								"deliveryTypeId": that.deliveryTypeId, //配送方式
								"distributionTime": that.deliveryTypeId == 4 ? that.shipTime : '', //配送时间
								"goodsAmount": that.orderDetail.goodsAmount, //商品金额
								"logisticsAmount": that.orderDetail.logisticsAmount, //运费
								"orderAmount": that.orderDetail.orderAmount, //订单金额
								"orderWayId": that.selectPayId, //支付方式
								"pointTime": that.deliveryTypeId == 3 ? that.shipTime : '', //自提时间段
								"productSkuIdList": that.orderDetail.productSkuIdList, //商品列表
								"sumCount": that.orderDetail.productSkuIdList.length, //商品数量
								"taxAmount": 0, //商品总税额
								"ticketAmount": that.ticketAmount, //优惠券抵扣金额
								"ticketId": orderData.ticketId, //	优惠券id
								"tipsAmount": that.selectTipMoney || 0 //	小费
							}
							console.log(data)
							that.$http('api/oms/order/shoppingCartPay', data, 'post').then(res => {
								if (that.selectPayId == 6) {
									let balanceData = {
										"orderCode": res.orderCode,
										"payType": Number(that.selectPayId),
										"orderAmount": that.orderDetail.orderAmount
									}
									this.payBybalance(balanceData)
								}else if(that.selectPayId == 3){
									uni.showToast({
										title:'操作成功',
										icon:'none'
									})
									setTimeout(() => {
										this.navTo('/pages/Order/Order?index=0','redirectTo')
									}, 1500)
								}
							})
						}
					}
				})

			},
			// 余额支付
			payBybalance(data) {
				this.$http('api/alipay/pay', data, 'post').then(res => {
					uni.showToast({
						title: '支付成功',
						icon: 'none'
					})
					setTimeout(() => {
						this.navTo('/pages/Order/Order?index=0')
					}, 1500)
				})
			},
			// 获取字典数据
			getDictData() {
				this.$http('api/dictData/dictDataList', {
					dictType: 'delivery_type'
				}).then(res => {
					this.columns = res
					res.forEach(item => {
						if (item.dictValue == 4) {
							this.shipMethod = item.dictLabel
						}
					})
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		padding-bottom: 160upx;

		.wrap {
			padding: 30upx;
			background-color: #fff;

			.user_info {
				width: 500upx;

				.phone {
					margin: 0 20upx;
				}

				.moren {
					color: $base-color;
					font-size: 24upx;
					margin-right: 20upx;
					background-color: #FFF9F3;
					padding: 2upx 6upx;
				}

				.address {
					.txt {
						margin-right: 20upx;
					}
				}
			}

			.goods {
				padding-top: 30upx;
				border-top: 1px solid #EEEEEE;

				.goods_img {
					image {
						width: 100upx;
						height: 100upx;
						margin-right: 10upx;
					}
				}
			}

			.tip {
				.mt10 {
					font-size: 20upx;
				}
			}
			.date_list{
				.date_item{
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 20upx;
					color: #aaa;
					padding:0 6upx;
					background-color: rgba(158, 158, 158, 0.06);
					border-radius: 6upx;
					margin-right: 20upx;
				}
				.active{
					background-color: rgba(255, 99, 4, 0.06);
					color: $base-color;
				}
			}
			.money {
				.n {
					background-color: #f8f8f8;
					color: #AAAAAA;
					font-size: 24upx;
					padding: 20upx;
					margin-left: 10upx;
					border-radius: 8upx;
				}

				/deep/ .u-input {
					width: 50upx;
					padding: 10upx !important;
				}

				/deep/ .input-placeholder {
					font-size: 24upx !important;
				}

				.select_tip {
					background-color: #fff4ed;
					color: $base-color;
				}
			}
		}

		.second {
			align-items: flex-start;
		}

		.pay_method {
			.list {
				padding: 30upx 0;
				margin-top: 20upx;
				border-top: 1px solid #EEEEEE;
				border-bottom: 1px solid #EEEEEE;

				.item {
					padding: 20upx 0;
					font-size: 32upx;

					.left {
						.l_img {
							width: 48upx;
							height: 48upx;
							border-radius: 50%;
							margin-right: 10upx;
						}

						.ye {
							color: $base-color;
							font-size: 24upx;
						}
					}

					.right {
						width: 36upx;
						height: 36upx;
					}
				}
			}

			.arrears {
				padding: 30upx;
				font-size: 28upx;
				color: #333;
				justify-content: flex-end;

				.m {
					color: $base-color;
				}
			}
		}

		.expense_detail {
			.dist {
				padding: 30upx 0;
				border-bottom: 1px solid #EEEEEE;

				&:last-child {
					border: none
				}

				.m {
					color: $base-color;
				}
			}
		}

		.remark {
			.left {
				margin-right: 80upx;
			}

			/deep/ .input-placeholder {
				font-size: 24upx !important;
			}
		}

		.foot {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: #fff;
			padding: 30upx 0;
			border-top: 1px solid #f1f1f1;

			.left {
				margin: 0 30upx;
				color: $base-color;
				font-size: 40upx;
			}

			.btn_default {
				margin-top: 0;
				height: 70upx;
				line-height: 70upx;
				padding: 0 60upx;
				font-size: 32upx;
				font-weight: normal;
				position: absolute;
				right: 30upx;
			}
		}
	}
	.fg_img{
		width: 100%;
		height: 6upx;
		display: block;
	}
</style>
