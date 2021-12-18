<template>
	<view class="wrap  mt30">
		<view class="label row" @click="navTo('/pages/Order/Order?status=0')">
			<text class="label_l">我的订单</text>
			<view class="label_r row">
				<text class="txt">全部订单</text>
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/s1.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="list row mt30">
			<view class="item column" @click="navTo('/pages/Order/Order?status=1')">
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/t1.png" mode="widthFix"></image>
				<text>待审核</text>
			</view>
			<view class="item column" @click="navTo('/pages/Order/Order?status=2')">
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/t4.png" mode="widthFix"></image>
				<text>待发货</text>
			</view>
			<view class="item column" @click="navTo('/pages/Order/Order?status=3')">
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/t2.png" mode="widthFix"></image>
				<text>待收货</text>
			</view>
			<view class="item column" @click="navTo('/pages/Order/Order?status=4')">
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/t3.png" mode="widthFix"></image>
				<text>已收货</text>
			</view>
			<view class="item column" @click="navTo('/pages/Order/Order?status=5')">
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/t3.png" mode="widthFix"></image>
				<text>自提</text>
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
.wrap{
	background-color: #fff;
	padding: 30upx;
	border-radius: 8upx;
	.label{
		justify-content: space-between;
		.label_l{
			font-size: 36upx;
			color: #333;
		}
		.label_r{
			font-size: 24upx;
			color: #999;
			image{
				width: 40upx;
				margin-left: 10upx;
			}
		}
	}
	.list{
		justify-content: space-between;
		.item{
			image{
				width: 76upx;
			}
			text{
				color: #666;
				font-size: 24upx;
				margin-top: 10upx;
			}
		}
	}
}
</style>
