<template>
	<view class="page_wrap">
		<view class="integral_info">
			￥{{userInfo.customerBalance}}
			<view class="pay" @click="isPay = !isPay">去充值</view>
		</view>
		<view class="balance_list">

			<view class="balance_list_wrap">
				<view class="item " v-for="(item,index) in dataList" :key="index">
					<view class="money jc_sb row f32-c333">
						<!-- <view class="b">差额退款</view> -->
						<view class="b">{{item.recordType == '0' ? '-':'+'}}{{item.amount}}</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">{{item.createDate}}</view>
					</view>
				</view>

			</view>
		</view>
		<view :class="['popup_wrap',{'show':isPay}]">
			<view class="mask" @click="isPay = false"></view>
			<view class="popup_info">
				<view class="list_wrap">
					<view class="title">请选择充值金额</view>
					<view class="list">
						<block  v-for="(item,index) in rechargeList" :key="index">
							<view @click="actived = index" v-if="item.type != 'common'" :class="['item',{'active':index == actived}]" >
								<text class="left">¥</text>
								<text class="right">{{item.label}}</text>
							</view>
							
							
							<view @click="actived = 'common'" v-else :class="['item row',{'active':'common' == actived}]" >
								<text class="left">¥</text>
								<u-input border="none"  placeholder="自定义" v-model="customMoney"></u-input>
							</view>
						</block>
						
					</view>
				</view>
				
				<view class="btn_wrap">
					<view class="btn"@click="pay">
						支付
					</view>
				</view>
			</view>
		</view>
		<view :class="['pay-popup',{'show':payType}]">
			<view class="mask" @click="payType = false"></view>
			<view class="pay_list_wrap">
				<view class="title row ">
						<view class="tool" @click="payType = false">取消</view>
						<view>支付方式</view>
						<view class="tool orange" @click="enterPay">确定</view>
					</view>
					<view class="pay_list">
						<view @click="payId = item.id" :class="['item',{'active':payId == item.id}]" v-for="(item,index) in payList"  :key="index">{{item.paymentName}}</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payType:false,
				payId:0,
				isPay:false,
				actived:0,
				rechargeList: [{
						value: 100.00,
						label: '100.00'
					},
					{
						value: 200.00,
						label: '200.00'
					},
					{
						value: 300.00,
						label: '300.00'
					},
					{
						value: 400.00,
						label: '400.00'
					},
					{
						value: 500.00,
						label: '500.00'
					},
					{
						type:'common',
					},
				],
				customMoney: '',
				page: 1,
				limit: 20,
				queryData: {},
				userInfo: {},
				dataList: [],
				queryUrl: 'api/cuscustomerpointinfo/page',
				payList:[]
			}
		},
		created() {
			this.getData();
			this.getUserInfo();
			this.getPay()
		},
		methods: {
			getPay(){
				this.$http('api/basepayment/topUpPayWayList','','get').then(res=>{
					this.payList = res;
				})
			},
			getUserInfo() {
				this.$http('api/myOneslft/getMyInfo', '', 'post').then(res => {
					this.userInfo = res
					// this.getHelpList()
				})
			},
			getData() {
				this.getList().then(res => {
					console.log(res)
					this.dataList = res;

				})
			},
			enterPay(){
				
			},
			clickLeft() {
				uni.navigateBack()
			},
			clickRight() {
				this.navTo('./detail')
			},
			pay(){
				if(this.actived == 'common' && !this.customMoney){
					uni.showToast({
						title:'请输入自定义充值金额',
						icon:'none'
					})
				}else{
					this.payType = true;
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		.integral_info {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 400upx;
			margin-bottom: 10upx;
			color: #FE5B07;
			font-size: 64upx;
			background: #fff;
			position: relative;
			.pay{
				position: absolute;
				font-size: 24upx;
				bottom: 44upx;
				width: 140upx;
				color: #fff;
				height: 54upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
				border-radius: 18px;
			}
		}

		.balance_list {
			background: #fff;
			.item {
				padding: 26upx 30upx;
				margin-bottom: 16upx;
				.minus {
					color: #FD4D00;
				}

				.date {
					margin-top: 20upx;
				}

				&:last-child {
					border: none;
				}
			}
		}

		

		.list_wrap {
			background-color: #F7F7F7;
			padding: 60upx 40upx 30upx 40upx;
			border-radius: 46upx 46upx 0upx 0upx;

			.title {
				font-size: 36upx;
				color: #333;
				margin-bottom: 40upx;
			}

			.list {
				display: flex;
				flex-wrap: wrap;

				.item {
					width: 200upx;
					height: 200upx;
					text-align: center;
					line-height: 200upx;
					border: 1px solid #ccc;
					color: #333;
					background-color: #fff;
					margin-right: 28upx;
					margin-top: 30upx;
					.u-input{ 
						padding:0!important;
						width: 100upx;
					 }
					&:nth-child(3n) {
						margin-right: 0;
					}
					&.active{
						border-color: #FD3615;
						color: #FD4D00;
						background-color: rgba($color: #FD4D00, $alpha: 0.04);
					}
					.left {
						font-size: 24upx;
					}

					.right {
						font-size: 42upx;
					}
				}

			}
		}
		.pay-popup {
			display: none;
			&.show{
				display: block;
			}
			.pay_list_wrap{
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				z-index: 2;
				background: #fff;
				.title{
					justify-content: space-between;
					font-size: 30upx;
					height: 100upx;
					font-weight: 600;
				}
				.tool {
					font-weight: 400;
					color: #aaa;
					font-size: 28upx;
					width: 100upx;
					display: flex;
					justify-content: center;
					align-items: center;
					&.orange{
						color: #FD4D00;
					}
				}
				.pay_list{
					min-height: 400upx;
					.item{
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 30upx;
						color: #aaa;
						height: 60upx;
						&.active{
							color: #000;
						}
					}
				}
			}
		}
		.mask {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 1;
		}
		.popup_wrap{
			display: none;
			
			.popup_info {
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				z-index: 2;
			}
			&.show{
				display: block;
			}
		}
		.btn_wrap {
			position: relative;
			bottom: 0;
			padding: 30upx 0;
			left: 0;
			width: 100%;
			background-color: #fff;

			.btn {
				background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
				width: 90%;
				height: 100upx;
				line-height: 100upx;
				text-align: center;
				color: #fff;
				font-size: 32upx;
				margin: auto;
				border-radius: 48upx;
			}
		}
	}
</style>
