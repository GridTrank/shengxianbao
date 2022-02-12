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
		<!-- 配送时间 -->
		<view class="wrap time mt20">
			<view class="dist row jc_sb" @click="popupStatus=true">
				<text class="f28-c333">{{deliveryTypeId==4?'配送':'自提'}}时间</text>
				<text class=" f28-dc">{{shipTime || '请选择配送时间'}}<text class="iconfont icon-jinru f28-c333"></text>
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
						<image class="l_img" :src="item.paymentUrl" mode="widthFix"></image>
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

		<bz-date-picker :value="popupStatus" title="请选择时间" minuteStep="10" days="17" minHour="6" maxHour="22"
			minMinute="0" maxMinute="59" @close="popupStatus=false" @confirm="handleDatePickerConfirm">
		</bz-date-picker>
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
				popupStatus: false,
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
				shipTime: '',
				userInfo: {},
				totalAmount: 0,
				comAmount: '',
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
		},
		onLoad(e) {
			this.getDetail(e.ids)
			// this.shipTime=date('Y-m-d H-i',new Date().getTime())
			// 初始化订单数据
			this.INIT_ORDER_DATA()
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
							return item.id == 13
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
			// 选择日期
			handleDatePickerConfirm(e) {
				this.shipTime = e
				this.popupStatus = false
			},
			// 弹出配送方式
			selectDeliType() {
				this.$refs.jPicker.pickerVisable = true
			},
			// 选择配送方式
			confirm(e) {
				console.log(e)
				this.shipMethod = e.dictLabel
				this.getAddressList()
				this.deliveryTypeId = e.dictValue
				this.isSelectDeliAddress = e.dictValue == 4 ? true : false
			},
			passwordSub(password){
				console.log(password)
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
					console.log('余额支付')
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
							that.$http('api/oms/order/shoppingCartPay', data, 'post').then(res => {
								if (that.selectPayId == 6) {
									let balanceData = {
										"orderCode": res.orderCode,
										"payType": Number(that.selectPayId),
										"orderAmount": that.orderDetail.orderAmount
									}
									this.payBybalance(balanceData)
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
</style>
