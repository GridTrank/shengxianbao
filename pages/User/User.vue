<template>
	<view class="page_wrap">
		<view class="user_info mt10">
			<view class="user row mt20">
				<image class="avatar" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/kucun.png" ></image>
				<view class="info column">
					<view class="name">姓名</view>
					<view class="phone mt10">
						<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/s6.png" mode="widthFix"></image>
						<text>12345678911</text>
					</view>
				</view>
			</view>
			<view class="set_code row">
				<image 
				@click="navTo('/pagesA/Set/Set')" 
				class="set" 
				src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/s2.png" mode="widthFix">
				</image>
				<image class="code" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/s4.png" mode="widthFix"></image>
			</view>
			<billList></billList>
		</view>
		<myOrder></myOrder>
		<toolList></toolList>
		<helpCenter></helpCenter>
	</view>
</template>

<script>
	import billList from './billList.vue'
	import myOrder from './myOrder.vue'
	import toolList from './toolList.vue'
	import helpCenter from './helpCenter.vue'
	export default {
		components:{
			billList,
			myOrder,
			toolList,
			helpCenter
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding: 0 30upx 30upx 30upx;
	.user_info{
		background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/s7.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 280upx;
		position: relative;
		padding: 30upx 40upx;
		.user{
			.avatar{
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
				margin-right: 20upx;
			}
			.info{
				align-items: baseline;
				color: #fff;
				.name{
					font-size: 36upx;
				}
				.phone{
					font-size: 24upx;
					image{
						width: 16upx;
						margin-right: 10upx;
					}
				}
			}
		}
		.set_code{
			position: absolute;
			right: 30upx;
			top: 30upx;
			image{
				width: 58upx;
				margin-left: 20upx;
			}
		}
	}
}
</style>
