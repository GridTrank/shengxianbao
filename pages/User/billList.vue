<template>
	<view class="page_wrap">
		<view class="bill_list row">
			<view class="bill_item column" @click="navTo('/pagesA/Balance/index')">
				<view class="txt_wrap">
					<text class="t_left">￥</text>
					<text class="t_right">20</text>
				</view>
				<view class="label">账户余额</view>
			</view>
			<view class="bill_item column" @click="navTo('/pagesA/Arrearages/index')">
				<view class="txt_wrap">
					<text class="t_left">￥</text>
					<text class="t_right">20</text>
				</view>
				<view class="label">欠款</view>
			</view>
			<view class="bill_item column" @click="navTo('/pagesA/Coupon/index')">
				<view class="txt_wrap">
					5
				</view>
				<view class="label">优惠券</view>
			</view>
			<view class="bill_item column" @click="navTo('/pagesA/Integral/detail')">
				<view class="txt_wrap">
					20
				</view>
				<view class="label">我的积分</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.bill_list{
	color: #fff;
	justify-content: space-between;
	margin-top: 80upx;
	.bill_item{
		.txt_wrap{
			font-weight: bold;
			font-size: 42upx;
			.t_left{
				font-size: 24upx;
				font-weight: 400;
			}
		}
		.label{
			font-size: 24upx;
		}
	}
}
</style>
