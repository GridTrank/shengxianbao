<template>
	<view class="list row model-wrap mt30">
		<view class="item column mt30" v-for="(item,index) in 10" :key="index">
			<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" ></image>
			<text class="name">名称</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.list{
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 30rpx 30rpx 30rpx;
		.item{
			width: 120upx;
			color: #999;
			font-size: 24upx;
			border-radius: 10upx;
			.img{
				width: 100upx;
				height: 100upx;
				border-radius: 8upx;
			}
		}
	}
</style>
