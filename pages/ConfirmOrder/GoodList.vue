<template>
	<view class="page_wrap">
		<view class="bg"></view>
		<view class="list">
			<view class="item row" v-for="(item,index) in 5" :key="index">
				<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
				<view class="info">
					<view class="f28-c333">名称</view>
					<view class="f24-c999 mt20">规格</view>
				</view>
				<view class="right row">
					<text class="bg_style1">订</text>
					<text class="f24-c333">3斤/¥20.00</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.page_wrap{
		min-height: calc(100vh - 74px);
		background-color: #fff;
		.bg{
			background-color: #f7f7f7;
			height: 20upx;
		}
		.list{
			.item{
				padding: 30upx;
				position: relative;
				.img{
					width: 120upx;
					height: 120upx;
					margin-right: 40upx;
				}
				.right{
					position: absolute;
					right: 30upx;
					top: 30upx;
					.bg_style1{
						font-size: 20upx;
						margin-right: 20upx;
						padding: 2upx 10upx;
						border: 1px solid #FE5B07;
						border-radius: 2upx;
					}
				}
			}
			
		}
	}
</style>
