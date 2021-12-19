<template>
	<!-- 我的欠款 -->
	<!-- 为空时 none -->
	<view class="page_wrap ">
		<view class="arrearages_info column">
			<view class="money_wrap none">
				<span>￥</span><span class="money">10000</span>
			</view>
			<view class="f24-c999">欠款</view>
			<view class="btn">去充值</view>
		</view>
		<view class="list_wrap">
			<view class="item ">
				<view class="money jc_sb row ">
					<view class="b f32-c333">+500</view>
					<view class="f28-c999">查看清单<span class="iconfont icon-jinru"></span></view>
				</view>
				<view class="date jc_sb row ">
					<view class="f24-c999">订单日期：2020-10-14</view>
				</view>
			</view>
			<view class="item ">
				<view class="money jc_sb row ">
					<view class="b f32-c333">+500</view>
					<view class="f28-c999">查看清单<span class="iconfont icon-jinru"></span></view>
				</view>
				<view class="date jc_sb row ">
					<view class="f24-c999">订单日期：2020-10-14</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		.arrearages_info {
			padding: 40upx 0;
			background-color: #fff;
			
			.money_wrap {
				color: #FE5B07;
				&.none{
					color: #333;
				}
			}

			.min {
				font-size: 24upx;
			}

			.money {
				font-size: 72upx;
			}

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 140upx;
				height: 54upx;
				background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
				border-radius: 18px;
				color: #fff;
				font-size: 28upx;
				margin-top: 50upx;
			}
		}

		.list_wrap {
			background-color: #fff;
			margin-top: 20upx;
			padding: 0 30upx;
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
