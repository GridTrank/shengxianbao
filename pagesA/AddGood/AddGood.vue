<template>
	<view class="page_wrap column">
		<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/noshopping.png" mode="widthFix"></image>
		<view class="f28-c999 mt30">没找到想要的商品？告诉我们您需要什么</view>
		<view class="btn_default" @click="navTo('./fillIn1')">提报新品</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onBackPress(options) {
			if(options.from=='backbutton'){
				uni.switchTab({
					url:'/pages/User/User'
				})
				return true
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	image{
		width: 70%;
		margin-top: 100upx;
	}
	.btn_default{
		width: 50%;
		font-size: 28upx;
		font-weight: normal;
		margin-top: 100upx;
	}
}
</style>
