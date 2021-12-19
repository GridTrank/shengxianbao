<template>
	<!-- 余额明细 -->
	<view class="page_wrap">
		<view class="balance_wrap">
			<view class="balance_info">
				<view class="date_wrap">
					<view class="row date" @click="show=true">
						<span>{{date | date('yyyy年mm月')}}</span>
						<span class="arrow"></span>
					</view>
				</view>
				<view class="row info">
					<view class="item column">
						<view><span class="min">￥</span>1000</view>
						<view class="min text">支出</view>
					</view>
					<view class="item column">
						<view><span class="min">￥</span>1000</view>
						<view class="min text">收入</view>
					</view>
				</view>
			</view>
		</view>
		<view class="balance_list">
			<view class="title b">支付明细</view>
			<view class="all row jc_sb">
				<view class="f28-c333">2020-10-14</view>
				<view class="f28-c333">支付：¥100.00</view>
				<view class="f28-c333">收入：¥100.00</view>
			</view>
			<view class="list_wrap">
				<view class="item ">
					<view class="money jc_sb row f32-c333">
						<view>差额退款</view>
						<view class="b">+500</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">2020-10-14 12:12:23</view>
						<view class="f28-c999">查看订单 <span class="iconfont icon-jinru"></span></view>
					</view>
				</view>
				<view class="item ">
					<view class="money jc_sb row f32-c333">
						<view>差额退款</view>
						<view class="b">+500</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">2020-10-14 12:12:23</view>
						<view class="f28-c999">查看订单 <span class="iconfont icon-jinru"></span></view>
					</view>
				</view>
			</view>
		</view>
		<view class="balance_list">
			<view class="title row jc_sb">
				<view><span class="b mr10">充值</span><span class="f24-c999">(2020-10-14 12:12:23)</span></view>
				<view class="b">+500</view>
			</view>
			<view class="all row jc_sb">
				<view class="f28-c333">2020-10-14</view>
				<view class="f28-c333">支付：¥100.00</view>
				<view class="f28-c333">收入：¥100.00</view>
			</view>
			<view class="list_wrap">
				<view class="item ">
					<view class="money jc_sb row f32-c333">
						<view>差额退款</view>
						<view class="b">+500</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">2020-10-14 12:12:23</view>
						<view class="f28-c999">查看订单 <span class="iconfont icon-jinru"></span></view>
					</view>
				</view>
				<view class="item ">
					<view class="money jc_sb row f32-c333">
						<view>差额退款</view>
						<view class="b">+500</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">2020-10-14 12:12:23</view>
						<view class="f28-c999">查看订单 <span class="iconfont icon-jinru"></span></view>
					</view>
				</view>
			</view>
		</view>
		<u-datetime-picker :show="show" v-model="date" mode="year-month" :formatter="formatter" @cancel="show = false"
			@confirm="confirm">
		</u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				date: Number(new Date())
			}
		},
		methods: {
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				return value
			},
			confirm(date) {
				this.show = false;
				this.date = date.value;
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		

		.balance_wrap {
			padding: 30upx 30uxp 0;
			background: #fff;

			.balance_info {
				height: 226upx;
				background: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/ye-bg1.png') no-repeat;
				background-size: cover;

				.date_wrap {
					display: flex;
					justify-content: flex-end;
					padding: 24upx 28upx 28upx;
					color: #fff;
					font-size: 24upx;

					.date {
						background: #FF6432;
						border-radius: 100upx;
						padding: 6upx 20upx;

						.arrow {
							width: 0;
							height: 0;
							border-left: 6upx solid transparent;
							border-right: 6upx solid transparent;
							border-top: 10upx solid #fff;
							margin-left: 6upx;
						}
					}
				}

				.info {
					color: #fff;
					font-size: 48upx;

					.min {
						font-size: 24upx;
					}

					.text {
						margin-top: 10upx;
					}

					.item {
						position: relative;
						flex: 1;

						&:after {
							content: "";
							width: .5px;
							height: 60upx;
							background: #fff;
							position: absolute;
							right: -.5px;
							top: 0;
						}
					}
				}
			}
		}

		.balance_list {
			background: #fff;
			padding: 0 30upx;
			margin-bottom: 16upx;

			.title {
				padding: 40upx 0upx 20upx;
				font-size: 32upx;
				color: #333333;
			}

			.all {
				padding: 22upx 0;
				border-bottom: .5px solid #E7E7E7;
			}

			.item {
				padding: 26upx 0;
				border-bottom: .5px solid #E7E7E7;

				.date {
					margin-top: 20upx;
				}

				&:last-child {
					border: none;
				}
			}
		}
	}
</style>
